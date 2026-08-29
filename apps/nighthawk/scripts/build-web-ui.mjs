/**
 * Build the web UI for NightHawk.
 *
 * Lobe Chat (https://github.com/lobehub/lobe-chat) can be used as the
 * web chat interface by pointing it at the NightHawk server's OpenAI-compatible
 * endpoint.  However, a full Next.js build is heavy and pulls in a large
 * dependency tree that this monorepo does not carry.
 *
 * Instead, this script generates the lightweight standalone chat HTML
 * (`dist-web/index.html`) that talks directly to the local server at
 * `/v1/chat/completions` via the OpenAI-compatible API.  The server is expected
 * to be running on the same origin (e.g. `nighthawk web`).
 */

import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const __dirname = import.meta.dirname;
const distWeb = resolve(__dirname, '..', 'dist-web');

async function build() {
  await mkdir(distWeb, { recursive: true });

  // Copy the favicon from the existing assets if available, otherwise
  // generate a minimal placeholder.
  const faviconSrc = resolve(__dirname, '..', 'dist-web', 'favicon.ico');
  try {
    await copyFile(faviconSrc, resolve(distWeb, 'favicon.ico'));
  } catch {
    // favicon not available — skip
  }

  // Generate the chat HTML.  This is the main entry point.
  const html = generateChatHtml();
  await writeFile(resolve(distWeb, 'index.html'), html, 'utf-8');

  console.log(`Web UI built at ${distWeb}/index.html`);
}

/**
 * Generate the standalone chat HTML page.
 * Uses the browser's native fetch() and the ReadableStream API to stream
 * responses from the OpenAI-compatible /v1/chat/completions endpoint.
 */
function generateChatHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NightHawk Chat</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #f5f5f5; --surface: #fff; --text: #1a1a1a; --text-secondary: #666;
    --primary: #0a7aff; --primary-hover: #0056cc; --border: #e0e0e0;
    --user-msg: #e3f2fd; --assistant-msg: #fff; --code-bg: #f0f0f0;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #1a1a2e; --surface: #16213e; --text: #e0e0e0; --text-secondary: #999;
      --primary: #4dabf7; --primary-hover: #339af0; --border: #2a2a4a;
      --user-msg: #1e3a5f; --assistant-msg: #1a1a2e; --code-bg: #0f3460;
    }
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
    background: var(--bg); color: var(--text); height: 100vh; display: flex;
    flex-direction: column;
  }
  header {
    padding: 12px 20px; background: var(--surface); border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 12px; flex-shrink: 0;
  }
  header h1 { font-size: 18px; font-weight: 600; }
  header .subtitle { font-size: 13px; color: var(--text-secondary); }
  #messages {
    flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px;
  }
  .message { max-width: 80%; padding: 12px 16px; border-radius: 12px; line-height: 1.5; }
  .message.user { align-self: flex-end; background: var(--user-msg); }
  .message.assistant { align-self: flex-start; background: var(--assistant-msg); border: 1px solid var(--border); }
  .message .content { white-space: pre-wrap; word-break: break-word; }
  .message .content p { margin-bottom: 8px; }
  .message .content p:last-child { margin-bottom: 0; }
  .message .content code {
    background: var(--code-bg); padding: 2px 6px; border-radius: 4px; font-size: 0.9em;
  }
  .message .content pre {
    background: var(--code-bg); padding: 12px; border-radius: 8px; overflow-x: auto;
    margin: 8px 0; font-size: 13px;
  }
  .message .content pre code { background: none; padding: 0; }
  .loading-dots::after { content: '...'; animation: dots 1.5s steps(4, end) infinite; }
  @keyframes dots { 0% { content: ''; } 25% { content: '.'; } 50% { content: '..'; } 75% { content: '...'; } }
  .error-msg { color: #e74c3c; font-size: 13px; padding: 8px 12px; background: #fde8e8; border-radius: 8px; align-self: center; }
  #input-area {
    padding: 16px 20px; background: var(--surface); border-top: 1px solid var(--border);
    display: flex; gap: 12px; align-items: flex-end; flex-shrink: 0;
  }
  #input-area textarea {
    flex: 1; resize: none; padding: 10px 14px; border: 1px solid var(--border);
    border-radius: 10px; font-size: 14px; font-family: inherit; background: var(--bg);
    color: var(--text); outline: none; min-height: 44px; max-height: 200px;
  }
  #input-area textarea:focus { border-color: var(--primary); }
  #input-area button {
    padding: 10px 24px; background: var(--primary); color: #fff; border: none;
    border-radius: 10px; font-size: 14px; font-weight: 500; cursor: pointer;
    white-space: nowrap; transition: background 0.2s;
  }
  #input-area button:hover { background: var(--primary-hover); }
  #input-area button:disabled { opacity: 0.5; cursor: not-allowed; }
  @media (max-width: 600px) {
    .message { max-width: 95%; }
    #input-area { padding: 12px; flex-direction: column; }
    #input-area button { width: 100%; }
  }
</style>
</head>
<body>
<header>
  <h1>NightHawk Chat</h1>
  <span class="subtitle">OpenAI-compatible endpoint</span>
</header>
<div id="messages"></div>
<div id="input-area">
  <textarea id="input" rows="1" placeholder="Type a message..." autofocus></textarea>
  <button id="send-btn">Send</button>
</div>
<script>
  const messagesEl = document.getElementById('messages');
  const inputEl = document.getElementById('input');
  const sendBtn = document.getElementById('send-btn');

  const history = [{ role: 'system', content: 'You are a helpful assistant.' }];

  function addMessage(role, content) {
    const el = document.createElement('div');
    el.className = 'message ' + role;
    const contentEl = document.createElement('div');
    contentEl.className = 'content';
    contentEl.textContent = content;
    el.appendChild(contentEl);
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return contentEl;
  }

  function addError(msg) {
    const el = document.createElement('div');
    el.className = 'error-msg';
    el.textContent = msg;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function setLoading(loading) {
    sendBtn.disabled = loading;
    inputEl.disabled = loading;
    if (!loading) inputEl.focus();
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;
    inputEl.value = '';
    inputEl.style.height = 'auto';

    addMessage('user', text);
    history.push({ role: 'user', content: text });

    setLoading(true);

    const assistantContentEl = addMessage('assistant', '');
    const loadingSpan = document.createElement('span');
    loadingSpan.className = 'loading-dots';
    assistantContentEl.textContent = '';
    assistantContentEl.appendChild(loadingSpan);

    try {
      const res = await fetch('/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'nighthawk',
          messages: history,
          stream: true,
        }),
      });

      if (!res.ok) {
        const errBody = await res.text().catch(() => '');
        addError(\`Request failed: \${res.status} \${res.statusText}\${errBody ? ' — ' + errBody : ''}\`);
        setLoading(false);
        history.pop();
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = '';

      assistantContentEl.textContent = '';
      assistantContentEl.removeChild(loadingSpan);

      const buffer = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\\\\n');

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') continue;
          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              fullContent += delta;
              assistantContentEl.textContent = fullContent;
              messagesEl.scrollTop = messagesEl.scrollHeight;
            }
          } catch { /* skip malformed chunks */ }
        }
      }

      history.push({ role: 'assistant', content: fullContent });
    } catch (err) {
      addError('Network error: ' + err.message);
      history.pop();
    }

    setLoading(false);
  }

  sendBtn.addEventListener('click', sendMessage);

  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  inputEl.addEventListener('input', () => {
    inputEl.style.height = 'auto';
    inputEl.style.height = inputEl.scrollHeight + 'px';
  });

  inputEl.focus();
</script>
</body>
</html>`;
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});