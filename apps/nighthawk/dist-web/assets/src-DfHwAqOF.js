import{n as e}from"./rolldown-runtime-CMxvf4Kt.js";import{D as t,T as n}from"./app-const-Bl9rlHwj.js";import{Jr as r,Xt as i,Yr as a}from"./model-runtime-client-tog6-eyE.js";import{n as o}from"./fileSystem-DmAwavrR.js";var s=e((()=>{})),c=e((()=>{})),l=e((()=>{})),u=e((()=>{})),d=e((()=>{s(),c(),l(),u()})),f=e((()=>{d()})),p,m,h,g=e((()=>{p=e=>e?e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&apos;`):``,m=e=>e?e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`):``,h=e=>e?e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`):``})),ee,te,ne,re,ie=e((()=>{g(),ee=e=>{let t=e.lineRange;return t?` lines="${t.startLine}-${t.endLine??t.startLine}"`:``},te=e=>{let t=[`source="${e.source}"`];return e.title&&t.push(`title="${m(e.title)}"`),e.source===`page`&&t.push(`pageId="${m(e.pageId)}"`),e.source===`code`&&(t.push(`filePath="${m(e.filePath)}"`),e.language&&t.push(`language="${m(e.language)}"`),e.side&&t.push(`side="${e.side}"`),e.workingDirectory&&t.push(`workingDirectory="${m(e.workingDirectory)}"`)),`${t.join(` `)}${ee(e)}`},ne=e=>e.source===`page`&&e.xml||e.content,re=e=>{if(!e||e.length===0)return``;let t=e.map(e=>`<context_selection ${te(e)}>
${ne(e)}
</context_selection>`).join(`
`);return`<user_context_selections count="${e.length}">
${t}
</user_context_selections>`}})),ae,oe,se,ce=e((()=>{ae=(e,t)=>`<markdown chars="${t.charCount??e.length}" lines="${t.lineCount??e.split(`
`).length}">
${e}
</markdown>`,oe=e=>`<doc_xml_structure>
<instruction>IMPORTANT: Use node IDs from this XML structure when performing modify or remove operations with modifyNodes.</instruction>
${e}
</doc_xml_structure>`,se=e=>{let{xml:t,markdown:n,metadata:r}=e,i=[];return n&&i.push(ae(n,r)),t&&i.push(oe(t)),`<current_page title="${r.title}">
${i.join(`
`)}
</current_page>`}})),le,ue=e((()=>{le=e=>{if(!e||e.length===0)return``;let t=e.map(e=>`<selection ${e.startLine===void 0?``:` lines="${e.startLine}-${e.endLine??e.startLine}"`}>
${e.xml}
</selection>`).join(`
`);return`<user_selections count="${e.length}">
${t}
</user_selections>`}})),de=e((()=>{f(),ie(),ce(),ue()})),fe=e((()=>{})),pe,me,_,he,ge,v,_e,ve,ye,be,y,xe,Se,Ce,we,Te,Ee,De=e((()=>{g(),pe=[`lobe`,`anime`,`lineArt`,`pixel`,`painterly`],me=`lobe`,_={anime:`Render it in an expressive FLCL-inspired Japanese anime style. Choose an age and character archetype that fits the agent, such as a young boy, a playful young woman, a mature onee-san, or a handsome older man. Use a matching solid-color background with no decorations.`,lineArt:`Render it as minimalist hand-drawn line art. Use the pose and styling to communicate the agent's professional traits. Use a pure white background.`,lobe:`Render it as a bold mascot-style 3D emoji character: skin in one friendly likeable color that people love — warm yellow, orange, peach, coral, or soft brown (not realistic human skin, and never odd tones like green, teal, or gray), graphic simplified facial features with an expression that matches the agent's personality (a knowing wink, a curious smile, a warm grin — lively, never blank or babyish), glossy candy-like materials with soft studio lighting, and one vivid contrasting solid background color. Express the identity through a hat and one or two small accessory props — do not draw scenes, maps, or diagrams on the character.`,painterly:`Render it with a cinematic 3D-to-2D hand-painted texture and dramatic stylization inspired by premium animated fantasy series, against a matching solid-color background.`,pixel:`Render it as crisp pixel art on a 64 x 64 pixel grid, against a matching solid-color background with no decorations.`},he={anime:_.anime.replace(` Use a matching solid-color background with no decorations.`,``),lineArt:_.lineArt.replace(` Use a pure white background.`,``),lobe:_.lobe.replace(`, and one vivid contrasting solid background color`,``),painterly:_.painterly.replace(`, against a matching solid-color background`,``),pixel:_.pixel.replace(`, against a matching solid-color background with no decorations`,``)},ge={lobe:`Render it as a soft 3D cartoon world with smooth rounded matte forms, playful proportions, and one vivid saturated dominant color filling the frame.`},v=`Ground the imagery in the agent's specific domain and personality. Avoid generic AI and technology clichés — starry space scenes, glowing particles, circuit boards, neural-network lines, holographic grids — unless the agent's subject matter is explicitly about them.`,_e=`Fill the entire square canvas edge to edge with the artwork: use a full-bleed composition with no white background, no white matte, no empty margin, no padding, no frame, and no border. No words, no letters, and no logo. The result must remain clear as a small app avatar.`,ve=`Use the entire portrait canvas for a clean character presentation. Place the character against one completely flat, uniform background color that contrasts clearly with the character and appears nowhere on the character itself: exactly one solid color across the whole canvas, with no gradient, no shading, no texture, no scenery, no ground plane, and no cast or drop shadow, so the background can be keyed out cleanly. Never draw a checkerboard, grid, or any other pattern that depicts transparency. No frame, no border, no words, no letters, and no logo.`,ye=`Compose a close-up avatar: the head fills most of the frame, with at most a little of the upper body visible.`,be=`Compose a complete head-to-toe character image: show the entire body clearly, centered in a natural standing or action pose, with comfortable breathing room around the silhouette. Keep the face expressive and readable.`,y=200,xe=(e,t,n,r=!1)=>{if(e===0)return``;let i=e===1?`image`:`images`,a=e===1?`its`:`their`;return r?`\n\nThe user attached the ${i} as ${a} own reference for this character. Follow ${a} appearance closely — the same character design, features, palette, and rendering — and adapt it to the composition and canvas rules above rather than inventing a different character.`:t===`surface`?`\n\nUse the attached ${i} only as a rendering-style reference — match ${a} materials, lighting, color saturation, and level of finish. Do not copy ${a} subjects or compositions.`:`\n\nUse the attached ${i} as the target character style — the same ${t===`fullBodyCharacter`?`character design, line quality, materials, lighting, and color energy`:`mascot-like head-dominant look, single-color skin, material, lighting, and color energy`}. Do not copy ${a} exact faces, hats, or subjects — invent a new character for the ${n} described above.`},Se=e=>{let t=e?.trim();return t?`\n\nThe user asked for this specifically: ${h(t.slice(0,600))}. Follow it wherever it does not conflict with the canvas, composition, and no-text rules above.`:``},Ce=e=>e?.filter(e=>e.trim()).length??0,we=({avatarIdentity:e,backgroundIdentity:t,description:n,id:r,name:i,systemRole:a,title:o})=>{let s=[`id="${m(r)}"`];i?.trim()&&s.push(`name="${m(i.trim())}"`),o?.trim()&&s.push(`title="${m(o.trim())}"`);let c=[e?.trim()&&`<avatar_identity>${h(e.trim().slice(0,y))}</avatar_identity>`,t?.trim()&&`<profile_background>${h(t.trim().slice(0,y))}</profile_background>`,n?.trim()&&`<description>${h(n.trim())}</description>`,a?.trim()&&`<system_role>${h(a.trim())}</system_role>`].filter(Boolean);return`<agent ${s.join(` `)}>${c.join(``)}</agent>`},Te=({avatarIdentity:e,backgroundIdentity:t,kind:n})=>{let r=[e?.trim()&&(n===`background`?`Interpret the avatar identity semantically as subtle environmental motifs, shapes, and atmosphere; do not reproduce the raw glyph or text, and do not place it as a foreground subject.`:`Interpret the avatar identity semantically as a character, object, expression, or visual motif; do not reproduce the raw glyph or text.`),t?.trim()&&`Use the profile background as a color and palette cue without overriding the canvas or background constraints.`].filter(Boolean);return r.length===0?``:`\n\n${r.join(` `)} These are identity cues, not rendering-style instructions; keep the selected style authoritative.`},Ee=e=>{let t=e.composition===`fullBody`?void 0:e.backgroundIdentity,n=we({avatarIdentity:e.avatarIdentity,backgroundIdentity:t,description:e.description,id:e.id,name:e.name,systemRole:e.systemRole?.slice(0,1200),title:e.title}),r=e.style??`lobe`,i=e.composition??`avatar`,a=e.kind===`background`?ge[r]??_[r]:i===`fullBody`?he[r]:_[r],o=Ce(e.styleReferenceImageUrls),s=xe(o,e.kind===`background`?`surface`:i===`fullBody`?`fullBodyCharacter`:`character`,`agent`,e.styleReferenceSource===`custom`),c=o>0?void 0:e.referenceImageUrl,l=Te({avatarIdentity:e.avatarIdentity,backgroundIdentity:t,kind:e.kind}),u=Se(e.direction);if(e.kind===`avatar`){let e=c?.trim()?i===`fullBody`?`

Use the attached existing avatar as the exact character source of truth. Preserve the same identity, face, hair, outfit, accessories, color palette, materials, and rendering style while extending that character into a complete head-to-toe pose. Do not redesign or reinterpret the character. Take nothing but the character from it — ignore the avatar's background entirely and use the flat keyable backdrop described above instead.`:`

Use the attached existing profile background as the visual source of truth. Preserve its dominant color palette, materials, lighting, atmosphere, and recurring motifs while distilling them into a single avatar subject. The avatar must feel designed as part of the same identity system, not merely depict a related topic.`:``;return`Create a distinctive ${i===`fullBody`?`portrait`:`square`} character image for the AI agent described below.

${n}

Translate the agent's identity, purpose, and personality into one coherent visual concept. Use a single centered subject with a simple silhouette. ${i===`fullBody`?be:ye} ${a} ${v} ${i===`fullBody`?ve:_e}${l}${s}${e}${u}`}return`Create a wide cinematic profile cover for the AI agent described below.

${n}

Translate the agent's identity, purpose, and personality into an abstract environment. ${a} ${v} Use generous negative space and a balanced composition. Do not use a person portrait, words, letters, a logo, or a border.${l}${s}${c?.trim()?`

Use the attached existing avatar as the visual source of truth. Preserve its dominant color palette, materials, lighting, atmosphere, and recurring motifs, then expand that visual world into a wide environment. Do not enlarge, repeat, or place the avatar itself in the cover. The cover and avatar must feel designed as one identity system.`:``}${u}`},_.lobe.replace(`the agent's personality`,`the team's character`)})),Oe,ke=e((()=>{g(),Oe=e=>e.length===0?`<availableModels />`:`<availableModels>\n${e.map(e=>{let t=[`id="${m(e.id)}"`,`name="${m(e.name)}"`].join(` `);return e.models.length===0?`  <provider ${t} />`:`  <provider ${t}>\n${e.models.map(e=>{let t=[`id="${m(e.id)}"`,`name="${m(e.name)}"`];e.abilities&&(e.abilities.vision&&t.push(`vision="true"`),e.abilities.functionCall&&t.push(`functionCall="true"`),e.abilities.reasoning&&t.push(`reasoning="true"`),e.abilities.files&&t.push(`files="true"`));let n=t.join(` `),r=e.description?h(e.description):``;return r?`      <model ${n}>${r}</model>`:`      <model ${n} />`}).join(`
`)}\n  </provider>`}).join(`
`)}\n</availableModels>`})),Ae,je,Me=e((()=>{g(),Ae=e=>{let t=[`id="${m(e.id)}"`,`title="${m(e.title||`Untitled`)}"`,`origin="${e.isMarket?`market`:`workspace`}"`];e.heteroType&&t.push(`heteroType="${m(e.heteroType)}"`);let n=t.join(` `),r=e.description?h(e.description):``;return r?`<agent ${n}>${r}</agent>`:`<agent ${n} />`},je=e=>{let{agents:t,source:n,userTotal:r=0,marketTotal:i=0,offset:a=0,hasMore:o=!1,requestedLimit:s,maxLimit:c}=e,l=t.length,u=e=>e===1?`agent`:`agents`,d;if(l===0){let e=r+i;d=e===0?`No agents matched. Try different keywords, or create a new agent.`:`No agents at offset ${a}; only ${e} match. Retry with a smaller offset.`}else d=n===`market`?`Found ${i} ${u(i)} in the marketplace, showing the first ${l}:`:n===`all`?`Found ${r} ${u(r)} in your workspace and ${i} in the marketplace, showing ${l}:`:`Found ${r} ${u(r)} in your workspace, showing ${a+1}-${a+l}:`;let f=[d,...t.map(Ae)],p=[];if(t.some(e=>e.heteroType)&&p.push("Agents with a `heteroType` are heterogeneous agents backed by an external CLI/device runtime (e.g. claude-code, codex). They can execute coding / agentic tasks directly — you can hand a task to such an agent without further setup."),s&&c&&s>c&&p.push(`Requested limit ${s} exceeds the maximum of ${c}; results were capped at ${c} per call.`),o){let e=t.filter(e=>!e.isMarket).length;p.push(`More workspace agents available: call searchAgent with offset=${a+e}${n===`all`?` and source="user"`:``} to get the next page.`)}let m=f.join(`
`),h=p.map(e=>`Note: ${e}`).join(`
`);return h?`${m}\n\n${h}`:m}})),b,x=e((()=>{g(),b=e=>e.length===0?`<marketTools />`:`<marketTools>\n${e.map(e=>{let t=[`id="${m(e.identifier)}"`,`name="${m(e.name)}"`];e.installed&&t.push(`installed="true"`),e.author&&t.push(`author="${m(e.author)}"`),e.tags&&e.tags.length>0&&t.push(`tags="${m(e.tags.join(`, `))}"`);let n=t.join(` `),r=e.description?h(e.description):``;return r?`  <tool ${n}>${r}</tool>`:`  <tool ${n} />`}).join(`
`)}\n</marketTools>`})),Ne=e((()=>{ke(),Me(),x()})),S,C,Pe,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{S=e=>e?`"${e}"`:`the document`,C=(e,{id:t,url:n})=>n?`${e}. Share this link with the user as a clickable markdown link: ${n}. (Internal id ${t} — for your own further edit/read/remove calls only; never show it to the user.)`:`${e} (internal id: ${t}).`,Pe=({id:e,title:t,url:n})=>C(`Created document ${S(t)}`,{id:e,url:n}),Fe=({id:e,title:t,url:n})=>C(`Updated document ${S(t)}`,{id:e,url:n}),Ie=({id:e,title:t,url:n,operationCount:r})=>C(`Modified document ${S(t)}, applied ${r} operation(s)`,{id:e,url:n}),Le=({id:e,title:t,url:n})=>C(`Renamed document to ${S(t)}`,{id:e,url:n}),Re=({id:e,title:t,url:n,fromId:r})=>C(`Copied document ${r} to a new document ${S(t)}`,{id:e,url:n}),ze=({id:e,title:t,url:n})=>C(`Updated load rule for document ${S(t)}`,{id:e,url:n}),Be=({id:e})=>`Removed document ${e}.`})),He=e((()=>{Ve()})),Ue,We,Ge=e((()=>{Ue=`# Agent: {{title}}

- **ID**: {{id}}
- **Description**: {{description}}
- **Model**: {{model}}

## System Role

{{systemRole}}`,We=e=>{let t=e.systemRole&&e.systemRole.length>500?e.systemRole.slice(0,500)+`... (truncated)`:e.systemRole;return Ue.replace(`{{title}}`,e.title||`Untitled Agent`).replace(`{{id}}`,e.id).replace(`{{description}}`,e.description||`N/A`).replace(`{{model}}`,e.model||`Unknown Model`).replace(`{{systemRole}}`,t||`N/A`)}})),Ke,qe,Je=e((()=>{Ke=`You are "{{AGENT_NAME}}", acting as a {{AGENT_ROLE}} in the multi-agent group "{{GROUP_TITLE}}".
Your internal agent ID is {{AGENT_ID}} (for system use only, never expose to users).

<group_description>The following describes the purpose and goals of this agent group:

{{SYSTEM_PROMPT}}
</group_description>

<group_participants>The following agents are available in this group:

{{GROUP_MEMBERS}}
</group_participants>

<identity_rules>
- NEVER expose or display agent IDs to users - always refer to agents by their names
</identity_rules>`,qe=(e,t)=>e.map(e=>{let n=e.id===t?` you="true"`:``;return`  <member name="${e.name}" id="${e.id}"${n} />`}).join(`
`)})),Ye=e((()=>{Ge(),Je()})),Xe=e((()=>{})),Ze=e((()=>{})),Qe=e((()=>{})),$e=e((()=>{})),et=e((()=>{d(),Xe(),Ze(),Qe(),$e()})),tt=e((()=>{})),nt,rt=e((()=>{nt=[`Role: self-review operator, not summarizer.`,`Mutations only count through write tools; this structured review may only emit candidate write actions for the server self-review executor.`,`Never infer intent with regexp, keyword lists, or hard-coded content heuristics.`,`Use structured context only: selfReviewSignals, bounded evidence, read tool results, satisfaction, feedback, receipts, and proposal state.`,`refine_skill requires complete replacement bodyMarkdown; do not emit patch-only or prose-only executable refinement payloads.`,`Auto-apply only safe writes: non-structural full-body refine_skill when fresh, or additive create_skill when absent, complete, scoped, and strongly supported.`,`Self-review proposal only: structural/destructive changes, active proposal refresh/supersede/close, deletion, move, rebind, split, merge, path/namespace/file-structure/activation changes. Use record_idea only for non-actionable ideas or questions that should be retained, not applied.`].join(` `),[`Review the bounded daily digest for one assistant. Return only safe self-review actions.`,nt,`Start from selfReviewSignals; inspect other buckets only when cited or when confirming noop.`,`Use noop for ordinary successful days, weak/ambiguous evidence, or single-source telemetry; noop is silent and must not create a Daily Brief or proposal. Non-noop actions must cite digest evidenceRefs.`,`A durable_user_preference signal means the digest found explicit remember/future/preference language; it may produce write_memory when the candidate is stable, normal-sensitivity, and directly grounded in the cited topic or message.`,`Do not re-judge satisfaction, sentiment, or user intent; feedbackActivity is already judged evidence and is only one feature.`,`Tool activity alone must not trigger skill consolidation, creation, or refinement; it may support repeated workflow/failure signals only with document, feedback, topic, or receipt evidence.`,`When selfReviewSignals include skill_document_with_tool_failure, inspect the cited skill documents and tool failures. If the cited evidence is related, return exactly one record_idea or refine_skill action with the target skillDocumentId; do not return noop for related cited evidence.`,`documentActivity.skillBucket and hintIsSkill:true are primary evidence for skill self-review, not automatic authorization; generalDocumentBucket cannot independently trigger skill self-review.`,`Use proposalActivity for unresolved proposal refresh, stale proposal, duplicate proposal checks, suppress, supersede, expire, or lifecycle explanation. Existing self-review proposals are state, not fresh evidence.`,`Use receiptActivity for already-applied or dismissed self-iteration outcomes. If a related pending proposal exists, prefer noop or explain that the existing proposal should remain pending.`,`Refresh a compatible pending proposal instead of creating a duplicate when new evidence supports the same target and action.`,`Supersede an incompatible pending proposal when the same proposalKey now needs a materially different operation.`,`Do not use old proposal content as the only evidence for a mutation; every non-noop action must cite fresh selfReviewSignals or supporting buckets.`,`If a related proposal is stale or expired, do not apply it. Either return noop or create a fresh proposal only when current evidence supports it.`,`Broad in-document rewrites can be auto-applied when they preserve resource identity, file structure, binding, activation path, and target freshness.`,`For auto-applied skill refinement, value.bodyMarkdown must contain the complete replacement Markdown body without YAML frontmatter. Do not put instruction-only text in patch for automatic refinement.`,`Plan only mutations that can be routed through safe write tools; every write tool performs freshness and idempotency checks and emits a receipt.`,`Attach policyHints for every non-noop action: evidenceStrength, userExplicitness, sensitivity, persistence, and mutationScope when skill-related.`,`Auto-safe memory candidates must be explicit, stable, normal-sensitivity preferences or durable facts; inferred, temporal, sensitive, third-party, or ambiguous memory candidates should be record_idea or noop.`,`Skill creation should be a self-review proposal unless the evidence shows explicit self-feedback intent and a small targeted change. Skill refinement can be auto-applied for explicit small changes or broad in-document rewrites that preserve resource identity. Consolidation must be proposed with a frozen consolidate_skill operation and must not be auto-applied.`].join(` `)})),it=e((()=>{[`You are the Agent Signal self-iteration agent.`,`Inspect the bounded nightly review context and use the provided self-iteration tools to read evidence or apply safe write operations.`,`Evidence ids and proposal keys are different namespaces: read topic/message/tool_call/agent_document evidence with getEvidenceDigest; read proposals with readSelfReviewProposal only when using proposalActivity.active[].proposalKey or keys returned from listSelfReviewProposals.`,`Never claim that a write happened unless a write tool result confirms it.`,`Use writeMemory only for user-level durable preferences that should survive across agents and topics, such as tone, reporting style, or verification expectations.`,`Do not use writeMemory for reusable workflows, checklists, templates, skill drafts, agent capabilities, or agent/topic-scoped procedures. Route those to skill actions or recordSelfFeedbackIntent(kind="skill").`,`Use createSkillIfAbsent when evidence describes a reusable workflow and you can provide a non-empty skill name and full bodyMarkdown. Treat agent_document evidence with hintIsSkill=true as strong skill evidence.`,`When review evidence supports an approval-gated change, call createSelfReviewProposal in this run; do not offer to draft it later.`,`For createSelfReviewProposal actions, use actionType exactly create_skill, refine_skill, consolidate_skill, or record_idea. For refine_skill include target.skillDocumentId and operation { domain: "skill", operation: "refine", input: { skillDocumentId, bodyMarkdown } }. For consolidate_skill include operation { domain: "skill", operation: "consolidate", input: { canonicalSkillDocumentId, sourceSkillIds, bodyMarkdown } }. Prefer recordSelfReviewIdea instead of proposal actions when the output is only a thought or question.`,`Stop after the useful self-iteration work is complete and summarize the confirmed outcome.`].join(`
`)})),at=e((()=>{it()})),ot=e((()=>{})),st=e((()=>{ot()})),ct=e((()=>{et(),tt(),rt(),at(),st()})),lt,ut=e((()=>{lt=({canReadHistory:e=!0,platformName:t,recentChannelHistory:n,supportsMarkdown:r,warnings:i})=>{let a=[`<bot_platform_context platform="${t}">`,`You are a participant in a **${t}** conversation — not an external assistant being consulted.`,``,`<behavior>`,`- Act like a knowledgeable group member: respond naturally, stay on topic, and match the conversational tone.`,...e?[`- When the user's message references prior context you don't have (e.g. "what do you think?", "summarize this", "look at that"), use \`readMessages\` IMMEDIATELY to fetch recent chat history before responding. Never ask the user to repeat what was already said in the channel.`,`- When you lack enough context to give a useful answer, silently read more history rather than asking clarifying questions — the answer is usually already in the chat.`]:[`- When the user references prior context you don't have, use the \`recent_topics\` below (if present). This platform has no history-read API, so do NOT claim you "can't read history" — work from what you have and ask a brief clarifying question only if the topics block is absent or insufficient.`],`- Keep responses concise and conversational — IM platforms have character limits and small viewports. Avoid long preambles or formal structure unless the question demands it.`,`- Do NOT reference UI elements from other environments (e.g. "check the sidebar", "click the button above").`,`</behavior>`,``,`<message_delivery>`,`Your text response is AUTOMATICALLY delivered to the current conversation — the runtime pipeline handles it.`,"Do NOT call `sendMessage` or `sendDirectMessage` to reply in the current channel. Just respond with text directly.","`sendMessage` / `sendDirectMessage` should ONLY be used when the user explicitly asks you to send a message to a DIFFERENT channel or user.",`</message_delivery>`];r||a.push(``,`<formatting>`,`This platform does NOT support Markdown rendering.`,`You MUST NOT use any Markdown formatting in your response, including:`,`- **bold**, *italic*, ~~strikethrough~~`,"- `inline code` or ```code blocks```",`- # Headings`,`- [links](url)`,`- Tables, blockquotes, or HTML tags`,``,`Use plain text only. Use line breaks, indentation, dashes, and numbering to structure your response for readability.`,`</formatting>`);let o=e=>e.replaceAll(/[<>&"']/g,e=>({"<":`&lt;`,">":`&gt;`,"&":`&amp;`,'"':`&quot;`,"'":`&#39;`})[e]),s=n?.topics?.filter(e=>e?.id)??[];if(s.length>0){a.push(``,`<recent_topics>`,`Prior sessions from THIS channel (most recent first). Use them for continuity; do not treat them as the current turn.`,"To read the full conversation of a topic, run `lh topic view <topic-id>` with the `id` below.");for(let e of s){let t=[`id="${o(e.id)}"`,`name="${o(e.name)}"`,e.createdAt?`createdAt="${o(e.createdAt)}"`:void 0].filter(Boolean).join(` `);a.push(``,`<topic ${t}>`,...e.description?.trim()?[o(e.description.trim())]:[],...e.lastUserMessage?.trim()?[`<last_user_message>${o(e.lastUserMessage.trim())}</last_user_message>`]:[],`</topic>`)}a.push(`</recent_topics>`)}return i&&i.length>0&&a.push(``,`<processing_warnings>`,`The following issues occurred while processing the user's message.`,`Briefly inform the user about these issues in your response:`,...i.map(e=>`- ${o(e)}`),`</processing_warnings>`),a.push(`</bot_platform_context>`),a.join(`
`)}})),dt,w,ft=e((()=>{dt=e=>`<${e.role}>${e.content}</${e.role}>`,w=e=>`<chat_history>
${e.map(e=>dt(e)).join(`
`)}
</chat_history>`})),pt,mt,ht=e((()=>{pt=`You are a conversation context compressor. Your task is to create a structured summary that preserves essential information while significantly reducing token count.

## Output Format

Structure your summary using these sections (omit empty sections):

### Context
Brief background and conversation setup (1-2 sentences max)

### Key Information
- Critical facts, data, specifications mentioned
- Technical details, configurations, parameters
- Names, identifiers, file paths, URLs

### Decisions & Conclusions
- Decisions made during the conversation
- Agreed-upon solutions or approaches
- Final conclusions reached

### Action Items
- Tasks assigned or planned
- Next steps discussed
- Pending items requiring follow-up

### Code & Technical
\`\`\`
Preserve essential code snippets, commands, or technical syntax
\`\`\`

## Rules

### MUST
- Output in the SAME LANGUAGE as the conversation
- Treat the most recent user instruction as the active contract; never replace it with an older objective
- Mark completed, abandoned, rejected, or superseded tasks as historical context, never as active Action Items
- Preserve ALL technical terms, code identifiers, file paths, and proper nouns exactly
- Maintain factual accuracy - never invent or assume information
- Keep code snippets that are essential for context

### SHOULD
- Achieve 60-80% compression ratio (summary should be 20-40% of original length)
- Use bullet points for clarity and scannability
- Preserve chronological order for sequential events
- Consolidate repeated information into single entries

### MAY
- Omit greetings, pleasantries, and filler content
- Combine related points into concise statements
- Abbreviate obvious context when meaning is preserved

## Important Notes

- The summary will be injected into a new conversation as context
- Recipient should be able to continue the conversation seamlessly
- Prioritize information that affects future responses`,mt=`Please compress the above conversation history.

Output ONLY the structured summary following the format specified. No additional commentary or meta-discussion.`})),gt,_t=e((()=>{gt=({guild:e,channel:t,thread:n})=>{let r=[];if(e){let t=[`id="${e.id}"`];e.name&&t.push(`name="${e.name}"`),r.push(`  <guild ${t.join(` `)} />`)}if(t){let e=[`id="${t.id}"`];t.name&&e.push(`name="${t.name}"`),t.type!==void 0&&e.push(`type="${t.type}"`),t.topic&&e.push(`topic="${t.topic}"`),r.push(`  <channel ${e.join(` `)} />`)}if(n){let e=[`id="${n.id}"`];n.name&&e.push(`name="${n.name}"`),r.push(`  <thread ${e.join(` `)} />`)}return`<discord_context>\n${r.join(`
`)}\n</discord_context>`}})),vt,yt,bt=e((()=>{t(),vt=(e,t,r,i)=>{let a=n({index:r,messageId:i,type:`audio`});return t?`<audio ref="${a}" name="${e.alt}" url="${e.url}"></audio>`:`<audio ref="${a}" name="${e.alt}"></audio>`},yt=(e,t=!0,n)=>e.length===0?``:`<audios>
<audios_docstring>here are user upload audios you can refer to</audios_docstring>
${e.map((e,r)=>vt(e,t,r,n)).join(`
`)}
</audios>`.trim()})),xt,St,Ct=e((()=>{xt=(e,t)=>{let n=e.content||``;return t?`<file id="${e.id}" name="${e.name}" type="${e.fileType}" size="${e.size}" url="${e.url}">${n}</file>`:`<file id="${e.id}" name="${e.name}" type="${e.fileType}" size="${e.size}">${n}</file>`},St=(e,t)=>e.length===0?``:`<files>
<files_docstring>here are user upload files you can refer to</files_docstring>
${e.map(e=>xt(e,t)).join(`
`)}
</files>`.trim()})),wt,Tt,Et=e((()=>{t(),wt=(e,t,r,i)=>{let a=n({index:r,messageId:i,type:`image`});return t?`<image ref="${a}" name="${e.alt}" url="${e.url}"></image>`:`<image ref="${a}" name="${e.alt}"></image>`},Tt=(e,t,n)=>e.length===0?``:`<images>
<images_docstring>here are user upload images you can refer to</images_docstring>
${e.map((e,r)=>wt(e,t,r,n)).join(`
`)}
</images>`.trim()})),Dt,Ot,kt=e((()=>{t(),Dt=(e,t,r,i)=>{let a=n({index:r,messageId:i,type:`video`});return t?`<video ref="${a}" name="${e.alt}" url="${e.url}"></video>`:`<video ref="${a}" name="${e.alt}"></video>`},Ot=(e,t=!0,n)=>e.length===0?``:`<videos>
<videos_docstring>here are user upload videos you can refer to</videos_docstring>
${e.map((e,r)=>Dt(e,t,r,n)).join(`
`)}
</videos>`.trim()})),At,jt,Mt=e((()=>{At=e=>e.error?`<file id="${e.fileId}" name="${e.filename}" error="${e.error}" />`:`<file id="${e.fileId}" name="${e.filename}">
${e.content}
</file>`,jt=({fileContents:e=[],knowledgeBases:t=[]})=>{let n=e.length>0,r=t.length>0;if(!n&&!r)return``;let i=[];if(n&&r?i.push(`<instruction>The following files and knowledge bases are available. For files, refer to their content directly. For knowledge bases, use the searchKnowledgeBase tool to find relevant information.</instruction>`):n?i.push(`<instruction>The following files are available. Refer to their content directly to answer questions. No knowledge bases are associated.</instruction>`):i.push(`<instruction>The following knowledge bases are available for semantic search. Use the searchKnowledgeBase tool to find relevant information.</instruction>`),n){let t=e.map(e=>At(e)).join(`
`);i.push(`<files totalCount="${e.length}">
${t}
</files>`)}if(r){let e=t.map(e=>`<knowledge_base id="${e.id}" name="${e.name}"${e.description?` description="${e.description}"`:``} />`).join(`
`);i.push(`<knowledge_bases totalCount="${t.length}">
${e}
</knowledge_bases>`)}return`<agent_knowledge>
${i.join(`
`)}
</agent_knowledge>`}})),Nt,Pt=e((()=>{bt(),Ct(),Et(),kt(),Mt(),Nt=({imageList:e,fileList:t,videoList:n,audioList:r,addUrl:i=!0,messageId:a})=>{let o=(e||[]).length>0,s=(t||[]).length>0,c=(n||[]).length>0,l=(r||[]).length>0;return!o&&!s&&!c&&!l?``:`<!-- SYSTEM CONTEXT (NOT PART OF USER QUERY) -->
<context.instruction>following part contains context information injected by the system. Please follow these instructions:

1. Always prioritize handling user-visible content.
2. the context is only required when user's queries rely on it.
</context.instruction>
<files_info>
${[o?Tt(e,i,a):``,s?St(t,i):``,c?Ot(n,i,a):``,l?yt(r,i,a):``].filter(Boolean).join(`
`)}
</files_info>
<!-- END SYSTEM CONTEXT -->`.trim()}})),Ft=e((()=>{i()})),It,Lt,Rt=e((()=>{It=e=>e.error?`<file id="${e.fileId}" name="${e.filename}" error="${e.error}" />`:`<file id="${e.fileId}" name="${e.filename}">
${e.content}
</file>`,Lt=e=>{let t=e.map(e=>It(e)).join(`
`);return`<knowledge_base_files totalCount="${e.length}">
<instruction>Use the information from these files to answer the user's question. Always cite the source files.</instruction>
${t}
</knowledge_base_files>`}})),zt,Bt=e((()=>{zt=e=>`<knowledge_base_search_results query="${e}" totalCount="0">
<instruction>No relevant files found in the knowledge base for this query.</instruction>
<suggestions>
<suggestion>Try rephrasing your question with different keywords</suggestion>
<suggestion>Check if the information exists in the uploaded documents</suggestion>
<suggestion>Ask the user to provide more context or upload relevant documents</suggestion>
</suggestions>
</knowledge_base_search_results>`})),Vt,Ht,Ut,Wt,Gt=e((()=>{Vt=(e,t,n)=>`<chunk fileId="${t}" fileName="${n}" similarity="${e.similarity}">${e.text}</chunk>`,Ht=e=>{let t=e.topChunks.map(t=>Vt(t,e.fileId,e.fileName));return`<file id="${e.fileId}" name="${e.fileName}" relevanceScore="${e.relevanceScore}">
${t.join(`
`)}
</file>`},Ut=e=>{let t=e.fileId?` fileId="${e.fileId}"`:``;return`<document id="${e.documentId}"${t} title="${e.title}" relevance="${e.relevance}" knowledgeBaseId="${e.knowledgeBaseId}">
<snippet>${e.snippet}</snippet>
</document>`},Wt=(e,t,n=[],r)=>{let i=e.length+n.length,a=[];r?.vector&&a.push(`Note: vector search unavailable (${r.vector}); only document results returned.`),r?.bm25&&a.push(`Note: full-text document search unavailable (${r.bm25}); only file chunk results returned.`);let o=a.length>0?`
`+a.join(`
`):``;if(i===0)return`<knowledge_base_search_results query="${t}" totalCount="0">
<instruction>No relevant content found in the knowledge base for this query.${o}</instruction>
</knowledge_base_search_results>`;let s=[];if(e.length>0){let t=e.map(e=>Ht(e)).join(`
`);s.push(`<files totalCount="${e.length}">
${t}
</files>`)}if(n.length>0){let e=n.map(e=>Ut(e)).join(`
`);s.push(`<documents totalCount="${n.length}">
${e}
</documents>`)}return`<knowledge_base_search_results query="${t}" totalCount="${i}">
<instruction>${`Search results from the knowledge base. ${e.length>0&&n.length>0?`Two source types: <files> (vector search, chunk-level) and <documents> (full-text search, document-level). `:e.length>0?`Source type: <files> (vector search, chunk-level). `:`Source type: <documents> (full-text search, document-level). `}Use the readKnowledge tool with the returned IDs (file_* or docs_*) to fetch complete content.${o}`}</instruction>
${s.join(`
`)}
</knowledge_base_search_results>`}})),Kt=e((()=>{Rt(),Bt(),Gt()})),qt=e((()=>{})),Jt,Yt=e((()=>{Jt=(e,t)=>{let n=t?` | Updated: ${t}`:``;if(e.length===0)return`📋 Current Todo List: (empty)${n}`;let r=e.filter(e=>e.status===`completed`).length,i=e.filter(e=>e.status===`processing`).length;return`📋 Current Todo List (${e.length-r-i} todo, ${i} processing, ${r} completed)${n}:\n${e.map(e=>`${e.status===`completed`?`- [x]`:e.status===`processing`?`- [~]`:`- [ ]`} ${e.text}`).join(`
`)}`}})),Xt,T,Zt,Qt=e((()=>{Xt=e=>`<api identifier="${e.name}">${e.desc}</api>`,T=e=>e.systemRole?`<tool name="${e.name}">
<tool.instructions>${e.systemRole}</tool.instructions>
</tool>`:`<tool name="${e.name}">${e.description||`no description`}</tool>`,Zt=e=>e.length>0?e.map(e=>T(e)).join(`
`):``})),$t,en=e((()=>{Qt(),$t=({tools:e})=>{let t=Zt(e);return t?`<tools description="The tools you can use below">
${t}
</tools>`:``}})),tn,nn,rn=e((()=>{tn=e=>{let t=[`id="${e.id}"`,`name="${e.name}"`];return e.hostname&&e.hostname!==e.name&&t.push(`hostname="${e.hostname}"`),t.push(`os="${e.os}"`),e.scope&&t.push(`scope="${e.scope}"`),e.lastSeen&&t.push(`last-seen="${e.lastSeen}"`),`  <device ${t.join(` `)} />`},nn=e=>e.length===0?`<online-devices>
  No devices are currently online.
</online-devices>`:`<online-devices>
${e.map(e=>tn(e)).join(`
`)}
</online-devices>`})),an,on=e((()=>{g(),an=e=>e.length===0?`<no_crawl_results />`:`<crawlResults>\n${e.map(e=>{if(`errorMessage`in e){let t=[`errorType="${m(e.errorType)}"`,`errorMessage="${m(e.errorMessage)}"`];return e.url&&t.push(`url="${m(e.url)}"`),`  <error ${t.join(` `)} />`}let t=[`url="${m(e.url)}"`];e.title&&t.push(`title="${m(e.title)}"`),e.contentType&&t.push(`contentType="${m(e.contentType)}"`),e.description&&t.push(`description="${m(e.description)}"`),e.length!==void 0&&t.push(`length="${e.length}"`);let n=t.join(` `),r=e.content?h(e.content):``;return r?`  <page ${n}>${r}</page>`:`  <page ${n} />`}).join(`
`)}\n</crawlResults>`})),sn,cn=e((()=>{g(),sn=e=>e.length===0?`<searchResults>No results found.</searchResults>`:`<searchResults>\n${e.map(e=>{let t=[`title="${m(e.title)}"`,`url="${m(e.url)}"`];e.publishedDate&&t.push(`publishedDate="${m(e.publishedDate)}"`),e.imgSrc&&t.push(`imgSrc="${m(e.imgSrc)}"`),e.thumbnail&&t.push(`thumbnail="${m(e.thumbnail)}"`);let n=t.join(` `),r=e.content?h(e.content):``;return r?`  <item ${n}>${r}</item>`:`  <item ${n} />`}).join(`
`)}\n</searchResults>`})),ln=e((()=>{on(),cn(),g()})),un,dn,E,fn,pn,mn=e((()=>{un=e=>e===0?`0 B`:e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`,dn=e=>{let t={children:new Map,name:``};for(let[n,r]of Object.entries(e)){let e=n.split(`/`),i=t;for(let t=0;t<e.length;t++){let n=e[t],a=t===e.length-1;i.children.has(n)||i.children.set(n,{children:new Map,name:n,size:a?r.size:void 0}),i=i.children.get(n)}}return t},E=(e,t=``)=>{let n=[],r=[...e.children.entries()].sort(([t],[n])=>{let r=e.children.get(t).children.size>0;return r===e.children.get(n).children.size>0?t.localeCompare(n):r?-1:1});for(let e=0;e<r.length;e++){let[,i]=r[e],a=e===r.length-1,o=a?`└── `:`├── `;if(i.children.size>0){n.push(`${t}${o}${i.name}/`);let e=t+(a?`    `:`│   `);n.push(...E(i,e))}else{let e=i.size===void 0?``:` (${un(i.size)})`;n.push(`${t}${o}${i.name}${e}`)}}return n},fn=e=>E(dn(e)).join(`
`),pn=(e,t)=>`## Available Resources

Use \`readReference\` with skillName="${e}" and the file path to read these files.

\`\`\`
${fn(t)}
\`\`\``})),hn,gn,_n=e((()=>{mn(),hn=e=>{let t=[`name="${e.name}"`];return e.source&&t.push(`source="${e.source}"`),e.location&&t.push(`location="${e.location}"`),`  <skill ${t.join(` `)}>${e.description}</skill>`},gn=e=>e.length===0?``:`<available_skills>
${e.map(e=>hn(e)).join(`
`)}
</available_skills>

Use the runSkill tool to activate a skill when needed.${e.some(e=>e.source===`project`||e.source===`device`)?'\nFor a skill with source="project" or source="device", load it by calling the readFile tool on its `location` path before following its instructions.':``}`})),vn=e((()=>{})),yn,bn=e((()=>{yn=e=>`<chat_history_summary>
<docstring>Users may have lots of chat messages, here is the summary of the history:</docstring>
<summary>${e}</summary>
</chat_history_summary>
`})),D,O=e((()=>{D=({defaultAssigneeAgentId:e})=>e?[`<task_manager_defaults>`,`Default Lobe AI agent id: ${e}`,`Use this id as assigneeAgentId when you decide a task should be assigned to the default Lobe AI assistant.`,`Do not use it as a listTasks filter unless the user asks for Lobe AI's tasks.`,`</task_manager_defaults>`,``]:[]})),xn,Sn=e((()=>{P(),O(),xn=(e,t)=>{let{task:n}=e,{activities:r,workspace:i}=n,a=[`<page_context>The user is currently viewing the detail page of task ${n.identifier}. When the user says "this task" or refers ambiguously, it means ${n.identifier}.</page_context>`,...D(e),`<task>`,`<hint>This tag contains the complete context of the task the user is viewing. Do NOT call viewTask to re-fetch it.</hint>`,`${n.identifier} ${n.name||`(unnamed)`}`,`Status: ${A(n.status)} ${n.status}     Priority: ${k(n.priority)}`,`Instruction: ${n.instruction}`];if(n.description&&a.push(`Description: ${n.description}`),n.agentId&&a.push(`Agent: ${n.agentId}`),n.parent&&a.push(`Parent: ${n.parent.identifier}`),n.topicCount&&a.push(`Topics: ${n.topicCount}`),n.dependencies&&n.dependencies.length>0&&a.push(`Dependencies: ${n.dependencies.map(e=>`${e.type}: ${e.dependsOn}`).join(`, `)}`),n.subtasks&&n.subtasks.length>0){a.push(``),a.push(`Subtasks:`);let e=(t,n)=>{for(let r of t){let t=r.blockedBy?` ← blocks: ${r.blockedBy}`:``;a.push(`${n}${r.identifier} ${A(r.status)} ${r.status} ${r.name||`(unnamed)`}${t}`),r.children&&r.children.length>0&&e(r.children,n+`  `)}};e(n.subtasks,`  `)}if(i&&i.length>0){let e=t=>t.reduce((t,n)=>t+1+(n.children?e(n.children):0),0),t=e(i);a.push(``),a.push(`Workspace (${t}):`);let n=(e,t,r)=>{for(let i=0;i<e.length;i++){let o=e[i],s=o.fileType===`custom/folder`,c=i===e.length-1,l=s?`📁`:`📄`,u=r?c?`└── `:`├── `:``,d=o.sourceTaskIdentifier?` ← ${o.sourceTaskIdentifier}`:``,f=!s&&o.size?`  ${o.size} chars`:``;if(a.push(`${t}${u}${l} ${o.title||`Untitled`} (${o.documentId})${d}${f}`),o.children){let e=r?t+(c?`    `:`│   `):t;n(o.children,e,!0)}}};n(i,`  `,!1)}if(r&&r.length>0){a.push(``),a.push(`Activities:`);for(let e of r){let n=e.time?M(e.time,t):``,r=e.id?`  ${e.id}`:``;if(e.type===`topic`){let t=e.status||`completed`;a.push(`  💬 ${n} Topic #${e.seq||`?`} ${e.title||`Untitled`} ${A(t)} ${t}${r}`)}else if(e.type===`brief`){let t=e.resolvedAction?` ✏️ ${e.resolvedAction}`:``,i=e.priority?` [${e.priority}]`:``;a.push(`  ${N(e.briefType||``)} ${n} Brief [${e.briefType}] ${e.title}${i}${t}${r}`)}else if(e.type===`comment`){let t=e.agentId?`🤖 agent`:`👤 user`,i=e.content||``,o=i.length>200?i.slice(0,200)+`...`:i;a.push(`  💭 ${n} ${t} ${o}${r}`)}}}return a.push(`</task>`),a.join(`
`)}})),Cn,wn=e((()=>{P(),O(),Cn=(e,t)=>{let{tasks:n,total:r}=e,i=n.length,a=[`<task_list>`,`<hint>The user is currently viewing the tasks list page. These are the ${i} task(s) displayed in the UI. Do NOT call listTasks to re-fetch them.</hint>`,...D(e)];if(i===0)a.push(`(no tasks)`);else{let e=r>i?`Total: ${r} (showing most recent ${i})`:`Total: ${r}`;a.push(e),a.push(``);for(let e of n){let n=e.createdAt?`  ${M(typeof e.createdAt==`string`?e.createdAt:e.createdAt.toISOString(),t)}`:``;a.push(`  ${e.identifier} ${A(e.status)} ${e.status}  [${k(e.priority)}]  ${e.name||`(unnamed)`}${n}`)}r>i&&(a.push(``),a.push(`Only the most recent ${i} tasks are shown above. Use the \`listTasks\` tool to query the full list of ${r} tasks.`))}return a.push(`</task_list>`),a.join(`
`)}})),k,A,Tn,j,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,M,N,P=e((()=>{Sn(),wn(),O(),k=e=>{switch(e){case 1:return`urgent`;case 2:return`high`;case 3:return`normal`;case 4:return`low`;default:return`-`}},A=e=>{switch(e){case`backlog`:return`○`;case`running`:return`●`;case`paused`:return`◐`;case`completed`:return`✓`;case`failed`:return`✗`;case`canceled`:return`⊘`;default:return`?`}},Tn=(e,t)=>{let n=`/task/${e}`;return t?`${t.replace(/\/$/,``)}${n}`:n},j=(e,t)=>`[${e}](${Tn(e,t)})`,En=e=>`${e.identifier} ${A(e.status)} ${e.status}  ${e.name||`(unnamed)`}  [${k(e.priority)}]`,Dn=e=>{let t=[`Task created: ${j(e.identifier,e.baseUrl)} "${e.name}"`,`  Status: ${A(e.status)} ${e.status}`,`  Priority: ${k(e.priority)}`];return e.parentLabel&&t.push(`  Parent: ${j(e.parentLabel,e.baseUrl)}`),t.push(`  Instruction: ${e.instruction}`),t.join(`
`)},On=(e,t)=>{let n=e.map((e,n)=>{if(e.success){let r=e.identifier?j(e.identifier,t):`(unknown id)`;return`${n+1}. ${r} "${e.name}" — created`}return`${n+1}. "${e.name}" — failed: ${e.error??`Unknown error`}`}),r=e.filter(e=>e.success).length,i=e.length-r;return[i===0?`Created ${r} task${r===1?``:`s`}:`:`Created ${r}/${e.length} tasks (${i} failed):`,...n].join(`
`)},kn=e=>{if(e.isDefaultScope)return e.isForAllAgents?`top-level unfinished tasks across all agents`:e.isForCurrentAgent?`top-level unfinished tasks of the current agent`:`top-level unfinished tasks`;let t=[];return e.statuses?.length&&t.push(`status=[${e.statuses.join(`,`)}]`),e.priorities?.length&&t.push(`priority=[${e.priorities.map(e=>k(e)).join(`,`)}]`),e.assigneeAgentId&&t.push(`agent=${e.assigneeAgentId}`),e.parentIdentifier?t.length>0?`subtasks of ${e.parentIdentifier} matching ${t.join(`, `)}`:`subtasks of ${e.parentIdentifier}`:t.length>0?`tasks matching ${t.join(`, `)}`:`tasks`},An=(e,t)=>{let n=kn(t);return e.length===0?`No ${n}.`:[`${e.length} ${n}:`,...e.map(e=>`  ${En(e)}`)].join(`
`)},jn=e=>{let t=[`${e.identifier} ${e.name||`(unnamed)`}`,`Status: ${A(e.status)} ${e.status}     Priority: ${k(e.priority)}`,`Instruction: ${e.instruction}`];if(e.agentId&&t.push(`Agent: ${e.agentId}`),e.parent&&t.push(`Parent: ${e.parent.identifier}`),e.topicCount&&t.push(`Topics: ${e.topicCount}`),e.createdAt&&t.push(`Created: ${e.createdAt}`),e.dependencies&&e.dependencies.length>0&&t.push(`Dependencies: ${e.dependencies.map(e=>`${e.type}: ${e.dependsOn}`).join(`, `)}`),e.subtasks&&e.subtasks.length>0){t.push(``),t.push(`Subtasks:`);let n=(e,r)=>{for(let i of e){let e=i.blockedBy?` ← blocks: ${i.blockedBy}`:``;t.push(`${r}${i.identifier} ${A(i.status)} ${i.status} ${i.name||`(unnamed)`}${e}`),i.children&&i.children.length>0&&n(i.children,r+`  `)}};n(e.subtasks,`  `)}if(t.push(``),e.checkpoint&&Object.keys(e.checkpoint).length>0?t.push(`Checkpoint: ${JSON.stringify(e.checkpoint)}`):t.push(`Checkpoint: (not configured, default: onAgentRequest=true)`),e.workspace&&e.workspace.length>0){let n=e=>e.reduce((e,t)=>e+1+(t.children?n(t.children):0),0),r=n(e.workspace);t.push(``),t.push(`Workspace (${r}):`);let i=(e,n,r)=>{for(let a=0;a<e.length;a++){let o=e[a],s=o.fileType===`custom/folder`,c=a===e.length-1,l=s?`📁`:`📄`,u=r?c?`└── `:`├── `:``,d=o.sourceTaskIdentifier?` ← ${o.sourceTaskIdentifier}`:``,f=!s&&o.size?`  ${o.size} chars`:``;if(t.push(`${n}${u}${l} ${o.title||`Untitled`} (${o.documentId})${d}${f}`),o.children){let e=r?n+(c?`    `:`│   `):n;i(o.children,e,!0)}}};i(e.workspace,`  `,!1)}if(e.activities&&e.activities.length>0){t.push(``),t.push(`Activities:`);for(let n of e.activities){let e=n.id?`  ${n.id}`:``;if(n.type===`topic`){let r=n.status||`completed`;t.push(`  💬 ${n.time||``} Topic #${n.seq||`?`} ${n.title||`Untitled`} ${A(r)} ${r}${e}`)}else if(n.type===`brief`){let r=n.resolvedAction?n.resolvedComment?`${n.resolvedAction}: ${n.resolvedComment}`:n.resolvedAction:``,i=r?` ✏️ ${r}`:``,a=n.priority?` [${n.priority}]`:``;t.push(`  ${N(n.briefType||``)} ${n.time||``} Brief [${n.briefType}] ${n.title}${a}${i}${e}`)}else if(n.type===`comment`){let r=n.agentId?`🤖 agent`:`👤 user`,i=n.content||``,a=i.length>80?i.slice(0,80)+`...`:i;t.push(`  💭 ${n.time||``} ${r} ${a}${e}`)}}}return t.join(`
`)},Mn=(e,t)=>`Task ${e} updated:\n  ${t.join(`
  `)}`,Nn=(e,t)=>t?`Task ${e} "${t}" has been deleted.`:`Task ${e} has been deleted.`,Pn=(e,t)=>`Dependency added: ${e} now blocks on ${t}.\n${e} will not start until ${t} is completed.`,Fn=(e,t)=>`Dependency removed: ${e} no longer blocks on ${t}.`,M=(e,t)=>{let n=new Date(e),r=(t||new Date).getTime()-n.getTime(),i=Math.floor(r/6e4);if(i<1)return`just now`;if(i<60)return`${i}m ago`;let a=Math.floor(i/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`},N=e=>{switch(e){case`decision`:return`📋`;case`result`:return`✅`;case`insight`:return`💡`;case`error`:return`❌`;default:return`📌`}}})),In,Ln,Rn=e((()=>{In=e=>`  <tool identifier="${e.identifier}" name="${e.name}">${e.description}</tool>`,Ln=e=>e.length===0?``:`<available_tools description="These tools are installed but not yet enabled. Use activateTools to enable them when needed.">\n${e.map(e=>In(e)).join(`
`)}\n</available_tools>`})),F,zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{F=e=>e&&(e instanceof Date?e.toISOString():e),zn=e=>{let t=[`id="${e.id||``}"`];e.title&&t.push(`title="${e.title}"`),e.scoreUrgency!==null&&e.scoreUrgency!==void 0&&t.push(`urgency=${e.scoreUrgency}`),e.scoreImpact!==null&&e.scoreImpact!==void 0&&t.push(`impact=${e.scoreImpact}`),e.type&&t.push(`type="${e.type}"`),e.currentStatus&&t.push(`status="${e.currentStatus}"`);let n=[];if(e.description&&n.push(`    ${e.description}`),e.associatedSubjects&&e.associatedSubjects.length>0){let t=e.associatedSubjects.filter(e=>e?.name).map(e=>`${e.name}${e.type?` (${e.type})`:``}`).join(`, `);t&&n.push(`    <subjects>${t}</subjects>`)}if(e.associatedObjects&&e.associatedObjects.length>0){let t=e.associatedObjects.filter(e=>e?.name).map(e=>`${e.name}${e.type?` (${e.type})`:``}`).join(`, `);t&&n.push(`    <objects>${t}</objects>`)}let r=n.length>0?`\n${n.join(`
`)}\n  `:``;return`  <context ${t.join(` `)}>${r}</context>`},Bn=e=>{let t=[`id="${e.id||``}"`];e.type&&t.push(`type="${e.type}"`),e.status&&t.push(`status="${e.status}"`);let n=F(e.startsAt);n&&t.push(`startsAt="${n}"`);let r=F(e.endsAt);r&&t.push(`endsAt="${r}"`),e.timezone&&t.push(`timezone="${e.timezone}"`);let i=[];e.feedback&&i.push(`    <feedback>${e.feedback}</feedback>`),e.narrative&&i.push(`    <narrative>${e.narrative}</narrative>`),e.notes&&i.push(`    <notes>${e.notes}</notes>`);let a=i.length>0?`\n${i.join(`
`)}\n  `:``;return`  <activity ${t.join(` `)}>${a}</activity>`},Vn=e=>{let t=[`id="${e.id||``}"`];e.type&&t.push(`type="${e.type}"`),e.scoreConfidence!==null&&e.scoreConfidence!==void 0&&t.push(`confidence=${e.scoreConfidence}`);let n=[];e.situation&&n.push(`    <situation>${e.situation}</situation>`),e.keyLearning&&n.push(`    <keyLearning>${e.keyLearning}</keyLearning>`);let r=n.length>0?`\n${n.join(`
`)}\n  `:``;return`  <experience ${t.join(` `)}>${r}</experience>`},Hn=e=>{let t=[`id="${e.id||``}"`];e.type&&t.push(`type="${e.type}"`),e.scorePriority!==null&&e.scorePriority!==void 0&&t.push(`priority=${e.scorePriority}`);let n=e.conclusionDirectives||``;return`  <preference ${t.join(` `)}>${n}</preference>`},Un=e=>{let t=[`id="${e.id||``}"`];e.type&&t.push(`type="${e.type}"`),e.relationship&&t.push(`relationship="${e.relationship}"`),e.role&&t.push(`role="${e.role}"`);let n=e.description||``;return`  <identity ${t.join(` `)}>${n}</identity>`},Wn=({query:e,results:t})=>{let{activities:n,contexts:r,experiences:i,preferences:a}=t,o=t.identities??[],s=n.length+r.length+i.length+o.length+a.length;if(s===0)return`<memories query="${e}">
  <status>No memories found matching the query.</status>
</memories>`;let c=[];if(r.length>0){let e=r.map(zn).join(`
`);c.push(`<contexts count="${r.length}">\n${e}\n</contexts>`)}if(n.length>0){let e=n.map(Bn).join(`
`);c.push(`<activities count="${n.length}">\n${e}\n</activities>`)}if(i.length>0){let e=i.map(Vn).join(`
`);c.push(`<experiences count="${i.length}">\n${e}\n</experiences>`)}if(o.length>0){let e=o.map(Un).join(`
`);c.push(`<identities count="${o.length}">\n${e}\n</identities>`)}if(a.length>0){let e=a.map(Hn).join(`
`);c.push(`<preferences count="${a.length}">\n${e}\n</preferences>`)}return`<memories query="${e}" total="${s}">
${c.join(`
`)}
</memories>`}})),Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir=e((()=>{Gn(),Kn=e=>!!(e.id||e.title||e.description),qn=e=>`  <context id="${e.id||``}" title="${e.title||``}">${e.description||``}</context>`,Jn=e=>!!(e.id||e.situation||e.keyLearning),Yn=e=>`  <experience id="${e.id||``}">
    <situation>${e.situation||``}</situation>
    <key_learning>${e.keyLearning||``}</key_learning>
  </experience>`,Xn=e=>!!e.conclusionDirectives,Zn=e=>`  <preference id="${e.id||``}">${e.conclusionDirectives}</preference>`,Qn=e=>!!(e.id||e.description||e.role||e.type),$n=e=>{let t=typeof e==`string`?new Date(e):e;return Number.isNaN(t.getTime())?``:t.toISOString().slice(0,10)},er=e=>`  <identity${e.type?` type="${e.type}"`:``}${e.role?` role="${e.role}"`:``}${e.id?` id="${e.id}"`:``}${e.capturedAt?` capturedAt="${$n(e.capturedAt)}"`:``}>${e.description||``}</identity>`,tr=e=>e?!!(e.narrative||e.tagline):!1,nr=e=>`<persona${e.tagline?` tagline="${e.tagline}"`:``}>\n${e.narrative||``}\n</persona>`,rr=({memories:e})=>{let t=tr(e.persona),n=(e.identities||[]).filter(Qn),r=(e.contexts||[]).filter(Kn),i=(e.experiences||[]).filter(Jn),a=(e.preferences||[]).filter(Xn),o=n.length>0,s=r.length>0,c=i.length>0,l=a.length>0;if(!t&&!o&&!s&&!c&&!l)return``;let u=[`<instruction>The following are memories about this user retrieved from previous conversations. Use this information to personalize your responses and maintain continuity.</instruction>`];if(t&&u.push(nr(e.persona)),o){let e=n.map(e=>er(e)).join(`
`);u.push(`<identities count="${n.length}">
${e}
</identities>`)}if(s){let e=r.map(e=>qn(e)).join(`
`);u.push(`<contexts count="${r.length}">
${e}
</contexts>`)}if(c){let e=i.map(e=>Yn(e)).join(`
`);u.push(`<experiences count="${i.length}">
${e}
</experiences>`)}if(l){let e=a.map(e=>Zn(e)).join(`
`);u.push(`<preferences count="${a.length}">
${e}
</preferences>`)}return`<user_memory>
${u.join(`
`)}
</user_memory>`}})),ar=e((()=>{})),I=e((()=>{De(),Ne(),He(),Ye(),ct(),d(),ut(),ft(),ht(),_t(),Pt(),o(),Ft(),Kt(),qt(),Yt(),en(),rn(),ln(),_n(),vn(),bn(),P(),Rn(),ir(),ar()})),or=e((()=>{I()})),sr=e((()=>{I()})),cr=e((()=>{I()})),lr=e((()=>{I()})),ur=e((()=>{})),dr=e((()=>{or(),sr(),cr(),lr(),ur()})),fr=e((()=>{})),pr,L,mr,hr,gr,_r,vr=e((()=>{pr=`v1.0`,L=`BuilderSuggestion`,mr={name:L,schema:{additionalProperties:!1,properties:{suggestions:{items:{additionalProperties:!1,properties:{prompt:{description:`The full message the user sends to the builder when the chip is clicked, phrased in the user's voice as a request to configure THIS agent/group (e.g. "Add a reviewer member to this group"). 1-200 chars.`,maxLength:200,minLength:1,type:`string`},title:{description:`A short chip label summarising the action. 1-40 chars, no trailing punctuation.`,maxLength:40,minLength:1,type:`string`}},required:[`title`,`prompt`],type:`object`},maxItems:3,type:`array`}},required:[`suggestions`],type:`object`},strict:!0},hr=`You generate the opening suggestion chips for an "Agent Builder" assistant. The user is configuring/building ONE AI agent through conversation. Your chips are the starting points the user can click to ask the builder to improve that agent.

Output a JSON object conforming to the supplied schema.

Guidelines:
- Return exactly 3 suggestions. Every one must be a concrete configuration action for THIS specific agent — never generic small-talk, end-user chat topics, or "ask the agent to do X" tasks.
- Prioritise GAPS in the current configuration described below: e.g. no system role -> suggest defining its role; no tools/plugins -> suggest enabling relevant ones; no opening message/questions -> suggest writing them; too generic -> suggest narrowing its specialty.
- "title" is the short chip label (1-40 chars, no trailing punctuation).
- "prompt" is the full message sent to the builder on click (1-200 chars), phrased in the user's voice as a request, e.g. "Help me refine this agent's role so it's more specific".
- Tailor the wording to the agent's name/description when given; stay specific, not boilerplate.
- Match the user's language given by the locale. Never translate proper nouns.`,gr=`You generate the opening suggestion chips for a "Group Agent Builder" assistant. The user is configuring/building a GROUP of AI agents (members with roles, optionally a supervisor) through conversation. Your chips are the starting points the user can click to ask the builder to improve that group.

Output a JSON object conforming to the supplied schema.

Guidelines:
- Return exactly 3 suggestions. Every one must be a concrete configuration action for THIS specific group — never generic small-talk or end-user chat topics.
- Prioritise GAPS in the current setup described below: e.g. missing a needed role -> suggest adding that member; overlapping members -> suggest consolidating; unclear workflow -> suggest optimising collaboration; no group goal/prompt -> suggest defining it; no reviewer -> suggest adding one.
- "title" is the short chip label (1-40 chars, no trailing punctuation).
- "prompt" is the full message sent to the builder on click (1-200 chars), phrased in the user's voice as a request, e.g. "Add a member responsible for reviewing the group's output".
- Tailor the wording to the group's name/description and existing members when given; stay specific, not boilerplate.
- Match the user's language given by the locale. Never translate proper nouns.`,_r=({mode:e,contextSummary:t,locale:n})=>{let r=e===`group`?gr:hr,i=e===`group`?`group`:`agent`,a=`Here is the current configuration of the ${i} being built:\n<config>\n${t}\n</config>${n?`\nThe user's language is "${n}" — write the chips in that language.`:``}\n\nPropose exactly 3 build/configure suggestion chips that best help the user improve this ${i} from here.`;return{messages:[{content:r,role:`system`},{content:a,role:`user`}],schema:mr}}})),yr,br=e((()=>{I(),yr=(e,t)=>({messages:[{content:pt,role:`system`},{content:`${t?`Existing conversation summary:\n${t}\n\nNew conversation history:\n`:``}${w(e)}

${mt}`,role:`user`}]})})),xr=e((()=>{})),Sr=e((()=>{})),Cr=e((()=>{})),wr=e((()=>{})),R,z,B,V,H,Tr,Er,U,Dr,Or=e((()=>{R=[`program`,`agent`,`llm`],z=[`manual`,`auto_repair`],B=[`screenshot`,`gif`,`video`,`audio`,`text`,`markdown`,`dom_snapshot`,`transcript`],V=[`audio`,`document`,`image`,`structured`,`text`,`video`],H=[`deliverable`,`run_evidence`,`task_artifacts`],Tr=[`passed`,`failed`,`uncertain`],Er=[`accept`,`reject`],[...z],[...V],[...H],[...B],[...R],U={confidence:{maximum:1,minimum:0,type:`number`},counterEvidence:{type:`string`},evidence:{type:`string`},limitation:{type:`string`},reasoning:{type:`string`},suggestion:{type:`string`},verdict:{enum:[...Tr],type:`string`}},Dr=[`verdict`,`confidence`,`evidence`,`reasoning`],{...U},{...U},[...Dr],[...Er]})),kr=e((()=>{Or(),[...z],[...V],[...H],[...B],[...R]})),Ar,W,jr,Mr,G,K,Nr,Pr,Fr,Ir=e((()=>{Ar=`v1.2`,W=`InputCompletion`,jr={name:W,schema:{additionalProperties:!1,properties:{completion:{description:`The continuation of the user's draft, inserted verbatim at the cursor and written in the user's own voice. Keep it short — usually just finish the current word, phrase, or sentence; only extend to the next sentence when the conversation makes it unmistakable. NEVER role-flip: when the draft tells or asks the assistant to do something, do not continue as the assistant accepting the task — no "I'll…", "let me…", or any first-person narration of carrying out the request (in whatever language the user is writing). Return an empty string when the only natural continuation would be the assistant's voice or would require fabricating specifics the user hasn't signalled.`,type:`string`}},required:[`completion`],type:`object`},strict:!0},Mr=`You are an inline autocomplete engine for a chat input box. The user is drafting a message to an AI assistant, and you continue that draft from the cursor. Predict what THIS user is about to type next and return it in the JSON object's \`completion\` field; the text is inserted verbatim at the cursor.

Your job is to save the user keystrokes by predicting their intent — the way inline code completion finishes a line you were already writing. Read the conversation so far, infer where the user is heading, and continue their draft naturally.

HOW MUCH TO WRITE
- Keep it SHORT — this is the default. Finish the current word, phrase, or sentence the user is already writing, then stop. Aim for the length the user would actually have typed: a tight completion they accept in one keystroke, not a thorough one. Most completions are a few words to one clause.
- Only continue past the current sentence when the conversation makes the very next sentence unmistakable AND stopping would leave the thought visibly unfinished. Extending is the exception, not the default.
- Never write more than the user would plausibly type next: no second clause, no added qualifier, no extra example, no spelled-out reasoning, no paragraph. Stop as soon as you would be guessing at specifics you don't know, and never author the user's whole message from a blank start. When unsure how far to go, stop earlier — a short useful completion beats a long speculative one.

STAY IN THE USER'S VOICE (the one hard rule)
- You are always FINISHING the user's message, in the user's own voice and language. You are never the assistant; you never answer, agree with, or acknowledge the user.
- It is always the USER speaking. Even when the conversation gives you enough to answer or to decide, do NOT — drawing the conclusion, resolving the question, or telling the assistant what to do is the assistant's job, not the user's. You only continue what the user is themselves asking, requesting, or stating. This matters most under heavy context, where it is tempting to write the answer instead of the user's next words.
- Asking the assistant a question or making a request IS the user's voice — continue it (e.g. a draft that presents something usually continues into "…can you review this…" / "…help me check…"). Do not mistake the user turning to ask for help as the assistant's turn.
- WATCH THE FIRST PERSON. Both the user and the assistant say "I", so the word alone won't tell you who is talking — the ROLE does. The user's "I" states what the user wants, thinks, or is asking for; the assistant's "I" narrates carrying out the user's request. When the draft tells or asks the assistant to act ("then change it?", "can you verify with the cli first?", "add X for me"), a continuation like "I'll fix it / let me confirm / I can run that" is the ASSISTANT accepting the task — that is the role-flip, not the user. Do NOT write it. Return an empty string, or continue only with MORE of the user's own instruction or question ("…and send me the logs", "…then run the tests").
- A draft that is already a complete directive or question to the assistant ("then change it?", "continue?", "are you done yet?") usually has nothing left for the user to add — prefer an empty string over inventing the assistant's reply.
- If the most natural continuation would be the assistant speaking (answering the question, offering help, issuing the decision, or narrating "I'll do…"), then there is nothing left for the user to type — return an empty string.

RETURN AN EMPTY STRING WHEN
- The only natural continuation is the assistant's voice (see above).
- Continuing would require inventing a specific value the user hasn't signalled — a particular file path, name, number, or decision. Stop before the unknown specifics rather than fabricating them.
- The conversation gives no real signal and you would only be padding with filler.

Match the user's language, tone, and register. Output only the text to insert — no quotes, labels, or the cursor marker.

EXAMPLES (→ is the completion; it picks up exactly at the cursor. Shown in English, but always match the user's language.)
- Finish the sentence — draft "How do I cut the cold-start time" → " of my serverless function?"
- Continue the user's stated plan — draft "Let's go with option 2, and " → "add a migration that backfills the new column for existing rows"
- Long-range, conversation supports it — after the assistant proposed a fix, draft "Looks good. " → "Apply it, then run the test suite and show me what still fails."
- Don't fabricate unknown specifics — draft "Deploy it to " → "" (the target environment is a value only the user knows)
- Don't slip into the assistant's voice — draft "Sure, I can " → "" (this reads as the assistant talking, not the user)
- Directive to the assistant, already complete — draft "Then just change it?" → "" ("I'll fix it" would be the assistant accepting the task, not the user)
- Request to the assistant — draft "Can you verify it with the cli first" → " and send me the result" (more of the user's instruction), NOT "I can run that" (that role-flips into the assistant)
- Don't answer your own question — draft "Are you done? why haven't the tests started?" → "" ("I'll check the env first" would be the assistant explaining itself, not the user)`,G=`<|cursor|>`,K=1e3,Nr=e=>e.length>K?e.slice(0,K)+`…`:e,Pr=e=>e.filter(e=>e.role===`user`||e.role===`assistant`).filter(e=>typeof e.content==`string`&&e.content.trim()).slice(-8).map(e=>`${e.role===`assistant`?`Assistant`:`User`}: ${Nr(e.content)}`).join(`
`),Fr=(e,t,n)=>{let r=`The user is typing a new message to the assistant. Continue their draft from the ${G} marker, in the user's own voice:\n<draft>\n${e}${G}${t}\n</draft>`,i=n?.length?Pr(n):``,a=i?`<conversation>\n${i}\n</conversation>\n\n${r}`:r;return{messages:[{content:Mr,role:`system`},{content:a,role:`user`}],schema:jr}}})),Lr=e((()=>{})),Rr,zr=e((()=>{Rr=e=>({messages:[{content:`你是一名精通全世界语言的语言专家，你需要识别用户输入的内容，以国际标准 locale 进行输出`,role:`system`},{content:`{你好}`,role:`user`},{content:`zh-CN`,role:`assistant`},{content:`{hello}`,role:`user`},{content:`en-US`,role:`assistant`},{content:`{${e}}`,role:`user`}]})})),Br=e((()=>{})),Vr,Hr=e((()=>{Vr=e=>({messages:[{content:`You are an emoji expert who selects the most appropriate emoji to represent concepts, emotions, or topics.

Rules:
- Output ONLY a single emoji (1-2 characters maximum)
- Focus on the CONTENT meaning, not the language it's written in
- Choose an emoji that best represents the core topic, activity, or subject matter
- Prioritize topic-specific emojis over generic emotion emojis (e.g., for sports, use 🏃 instead of 😅)
- For work/projects, use work-related emojis (💼, 🚀, 💪) not cultural symbols
- For pure emotions without specific topics, use face emojis (happy: 🎉, sad: 😢, thinking: 🤔)
- For activities or subjects, use object or symbol emojis that represent the main topic
- No explanations or additional text`,role:`system`},{content:`I am a copywriting master who helps name design and art works with literary depth`,role:`user`},{content:`✒️`,role:`assistant`},{content:`I am a code wizard who converts JavaScript code to TypeScript`,role:`user`},{content:`🧙‍♂️`,role:`assistant`},{content:`I just got a promotion at work`,role:`user`},{content:`🎉`,role:`assistant`},{content:`I am a business plan expert who helps with startup strategies and marketing`,role:`user`},{content:`🚀`,role:`assistant`},{content:e,role:`user`}]})})),Ur,q,J,Wr,Gr,Kr=e((()=>{Ur=()=>`You are an expert image prompt engineer.

Rewrite the user prompt into a production-ready image-generation prompt that is also easy for beginners to use.

Use a concise, natural description that is ready for image generation. When the input is short or vague, infer reasonable visual details and complete the scene.

Include these dimensions when relevant:
1) Main subject and scene
2) Visual style, medium, and overall quality
3) Composition and viewpoint
4) Lighting, atmosphere, and color mood
5) Technical details such as lens or depth of field when helpful

Rules:
- Keep important entities, quantities, and constraints unchanged.
- Add concrete visual details that make the image easier to generate.
- Prefer clear, practical wording over jargon or overly complex wording.
- Avoid verbosity, contradictions, and impossible details.
- Preserve the original input language.
- Output ONLY the final rewritten prompt.`,q=()=>`You are an expert video prompt engineer.

Rewrite the user prompt into a production-ready video-generation prompt that is also easy for beginners to use.

Use a concise, natural description that is ready for video generation. When the input is short or vague, infer a simple continuous action, a stable camera plan, and a clear time progression.

Include these dimensions when relevant:
1) Subject, scene, and action
2) Shot framing and camera movement (pan, tilt, dolly, handheld, static)
3) Temporal progression (start -> middle -> end)
4) Lighting, mood, and color style
5) Motion characteristics (speed, rhythm, realism) and quality constraints

Rules:
- Keep important entities, quantities, and constraints unchanged.
- Prioritize temporal clarity, camera language, and a single easy-to-follow action.
- Add practical motion details that make the video easier to generate.
- Avoid impossible or contradictory motion and physics descriptions.
- Preserve the original input language.
- Output ONLY the final rewritten prompt.`,J=()=>`You are an expert prompt optimizer.

Rewrite the user prompt into a production-ready text prompt that is also easy for beginners to use.

Use a concise, natural request that is ready for direct model input. When the input is short or vague, preserve the original intent and make only the minimum necessary expansion.

Rules:
- Do NOT add new requirements, expand the scope, or change the task meaning.
- Do NOT generate role prompts, system prompts, persona instructions, or meta commentary.
- Do NOT convert the request into instructions for the assistant to "be" something.
- Keep the prompt concise and practical for direct model input.
- If the user input is already clear, make only minimal improvements.
- Preserve entity names, numbers, formatting requirements, and visible text exactly.
- Preserve the original input language.
- Output ONLY the final optimized user prompt.
`,Wr=e=>{switch(e){case`image`:return Ur();case`video`:return q();case`text`:return J();default:return J()}},Gr=({mode:e,prompt:t})=>({messages:[{content:Wr(e),role:`system`},{content:t,role:`user`}]})})),qr,Jr=e((()=>{qr=(e,t)=>({messages:[{content:`你是一名擅长起名的起名大师，名字需要有文学内涵，注重精炼和赋子意境，你需要将用户的描述总结为 10 个字以内的角色，并翻译为目标语言。格式要求如下：
输入: {文本作为JSON引用字符串} [locale]
输出: {角色名}`,role:`system`},{content:`输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]`,role:`user`},{content:`输入: {你是一名 UX Writer，擅长将平平无奇的描述转换为精妙的表达。接下来用户会输入一段文本，你需要转成更加棒的表述方式，长度不超过40个字。} [ru-RU]`,role:`user`},{content:`Творческий редактор UX`,role:`assistant`},{content:`输入: {你是一名前端代码专家，请将下面的代码转成 ts，不要修改实现。如果原本 js 中没有定义的全局变量，需要补充 declare 的类型声明。} [en-US]`,role:`user`},{content:`TS Transformer`,role:`assistant`},{content:`输入: {Improve my English language use by replacing basic A0-level expressions with more sophisticated, advanced-level phrases while maintaining the conversation's essence. Your responses should focus solely on corrections and enhancements, avoiding additional explanations.} [zh-CN]`,role:`user`},{content:`邮件优化助理`,role:`assistant`},{content:`输入: {${e}} [${t}]`,role:`user`}]})})),Yr,Xr=e((()=>{Yr=(e,t)=>({messages:[{content:`你是一名擅长技能总结的助理，你需要将用户的输入的内容总结为一个角色技能简介，不超过 20 个字。内容需要确保信息清晰、逻辑清晰，并有效地传达角色的技能和经验，需要并翻译为目标语言:${t}。格式要求如下：\n输入: {文本作为JSON引用字符串} [locale]\n输出: {简介}`,role:`system`},{content:`输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]`,role:`user`},{content:`擅长文创艺术作品起名`,role:`assistant`},{content:`输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [en-US]`,role:`user`},{content:`Good at business plan writing and consulting`,role:`assistant`},{content:`输入: {You are a frontend expert. Please convert the code below to TS without modifying the implementation. If there are global variables not defined in the original JS, you need to add type declarations using declare.} [zh-CN]`,role:`user`},{content:`擅长 ts 转换和补充类型声明`,role:`assistant`},{content:`输入: {
用户正常书写面向开发者的 API 用户使用文档。你需要从用户的视角来提供比较易用易读的文档内容。

一个标准的 API 文档示例如下：

\`\`\`markdown
---
title: useWatchPluginMessage
description: 监听获取 LobeChat 发过来的插件消息
nav: API
---

\`useWatchPluginMessage\` 是 Chat Plugin SDK 封装一个的 React Hook，用于监听从 LobeChat 发过来的插件消息。
} [ru-RU]`,role:`user`},{content:`Специализируется на создании хорошо структурированной и профессиональной документации README для GitHub с точными техническими терминами`,role:`assistant`},{content:`输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [zh-CN]`,role:`user`},{content:`擅长创业计划撰写与咨询`,role:`assistant`},{content:`输入: {${e}} [${t}]`,role:`user`}],temperature:0})})),Zr,Qr=e((()=>{Zr=(e,t,n)=>{let r=e.map((e,t)=>`${t+1}. ${e}`).join(`
`);return{messages:[{content:`你是一位资深的 AI 艺术创作者和语言大师。你需要根据用户提供的 AI ${t} prompt 总结出一个标题。这个标题应简洁地描述创作的核心内容，将用于标识和管理该系列作品。字数需控制在10个字以内，不需要包含标点符号，输出语言为：${n}。`,role:`system`},{content:`提示词：\n${r}`,role:`user`}]}}})),$r,ei=e((()=>{I(),$r=e=>({messages:[{content:`You're an assistant who's good at extracting key takeaways from conversations and summarizing them. Please summarize according to the user's needs. The content you need to summarize is located in the <chat_history> </chat_history> group of xml tags. The summary needs to maintain the original language.`,role:`system`},{content:`${w(e)}

Please summarize the above conversation and retain key information. The summarized content will be used as context for subsequent prompts, and should be limited to 400 tokens.`,role:`user`}]})})),ti,ni=e((()=>{ti=(e,t)=>({messages:[{content:`你是一名擅长会话标签总结的助理，你需要将用户的输入的内容提炼出分类标签，使用\`,\`分隔，不超过 5 个标签，并翻译为目标语言。 格式要求如下：
输入: {文本作为JSON引用字符串} [locale]
输出: {标签}`,role:`system`},{content:`输入: {你是一名文案大师，帮我为一些设计 / 艺术作品起名，名字需要有文学内涵，注重精炼和赋子意境，表达作品的情景氛国，使名称既简洁又富有诗意。} [zh-CN]`,role:`user`},{content:`起名,写作,创意`,role:`assistant`},{content:`输入: {You are a professional translator proficient in Simplified Chinese, and have participated in the translation work of the Chinese versions of The New York Times and The Economist. Therefore, you have a deep understanding of translating news and current affairs articles. I hope you can help me translate the following English news paragraphs into Chinese, with a style similar to the Chinese versions of the aforementioned magazines.} [zh-CN]`,role:`user`},{content:`翻译,写作,文案`,role:`assistant`},{content:`输入: {你是一名创业计划撰写专家，可以提供包括创意名称、简短的标语、目标用户画像、用户痛点、主要价值主张、销售/营销渠道、收入流、成本结构等计划生成。} [en-US]`,role:`user`},{content:`entrepreneurship,planning,consulting`,role:`assistant`},{content:`输入: {${e}} [${t}]`,role:`user`}]})})),ri,ii,ai=e((()=>{ri={name:`topic_title`,schema:{additionalProperties:!1,properties:{title:{description:`A concise topic title`,type:`string`}},required:[`title`],type:`object`},strict:!0},ii=(e,t)=>{let n=e.map(e=>`<${e.role}>\n${String(e.content??``)}\n</${e.role}>`).join(`
`);return{messages:[{content:`You are a professional conversation summarizer. Generate a concise title that captures the essence of the conversation.

Rules:
- Return one JSON object with a single "title" string matching the supplied schema
- No explanations or additional fields
- Maximum 15 words
- Maximum 80 characters
- No punctuation marks
- Use the language specified by the locale code: ${t}
- The title should accurately reflect the main topic of the conversation
- Keep it short and to the point`,role:`system`},{content:`<task>\nGenerate a concise title that captures the essence of the conversation.\n</task>\n\n<conversation>\n${n}\n</conversation>`,role:`user`}]}}})),oi=e((()=>{})),si=e((()=>{})),ci,li=e((()=>{ci=(e,t)=>({messages:[{content:`You are a professional translator. Translate the input text to ${t}.

Rules:
- Output ONLY the translated text, no explanations or additional context
- Preserve technical terms, code identifiers, API keys, and proper nouns exactly as they appear
- Maintain the original formatting and structure
- Use natural, idiomatic expressions in the target language`,role:`system`},{content:e,role:`user`}]})})),Y,X,Z,ui,Q,di,fi=e((()=>{i(),Y=e=>({maxLength:e,minLength:1,pattern:`\\S`,type:`string`}),X=Y(256),Z=Y(r),ui={additionalProperties:!1,properties:{description:{description:`One concise sentence explaining why this trait is prominent.`,...Z},rank:{description:`Independent prominence rank from 0 to 100 based on directness, recurrence, consistency, specificity, and how distinguishing the trait is. Ranks do not sum to 100.`,maximum:100,minimum:0,type:`integer`},title:{description:`Short, specific trait title.`,...X}},required:[`title`,`description`,`rank`],type:`object`},Q=(e,t)=>({description:e,items:ui,maxItems:t,type:`array`}),di={description:`Structured Understanding profile generated from the source brief. Produce compact display-ready profile fields, independently scored composition vectors, and a concise persona proposal for approval. Avoid generic phrases like "connected data suggests"; use the actual source data.`,name:`understanding_batch_analysis`,schema:{additionalProperties:!1,properties:{composition:{additionalProperties:!1,description:`Prominent, source-supported traits grouped for visualization. Items are ordered by descending rank. Empty arrays are expected when evidence is insufficient.`,properties:{identities:Q(`Roles, communities, or identity descriptors that are directly stated or strongly recurring.`,6),interests:Q(`Recurring interests and subject areas, broader than current work focuses.`,8),lifeStyle:Q(`Recurring routines, habits, or lifestyle patterns. Leave empty unless repeated or directly stated evidence supports them.`,6),social:Q(`Observable external interaction and collaboration patterns. Leave empty unless direct or repeated evidence supports them.`,6),working:Q(`Current work, study, projects, routines, and practical preferences. This is not a learning-style category.`,6)},required:[`identities`,`interests`,`working`,`lifeStyle`,`social`],type:`object`},personaProposal:{additionalProperties:!1,description:`A concise persona update suitable for writing to the persona document after user approval.`,properties:{content:{description:`Persona text written in second person. Keep it concise and useful.`,...Y(a)},reasoning:{description:`Brief source-backed reason for the proposal.`,...Z},tagline:{description:`Short persona tagline.`,...X}},required:[`tagline`,`content`,`reasoning`],type:`object`},profile:{additionalProperties:!1,description:`Compact display-ready identity fields for the profile card.`,properties:{domains:{description:`Recurring domains or industries, such as cloud native, AI infrastructure, open source, design tools.`,items:X,maxItems:8,type:`array`},description:{description:`Short explanatory paragraph. Explain what the evidence says and why this profile is useful.`,...Z},name:{description:`Primary preferred display name. Use the strongest direct profile signal.`,...X},pronoun:{description:`Pronoun from explicit self-description evidence only. Never infer pronouns from names, handles, appearance, writing, activity, or third-party assumptions; use "non-specific" otherwise.`,...X},roles:{description:`Different roles or hats the person appears to occupy, e.g. engineer, maintainer, consultant, speaker.`,items:X,maxItems:8,type:`array`},summary:{description:`One-sentence summary for compact UI display.`,...Z},tagline:{description:`Short role tagline, e.g. "AI infrastructure and agentic product builder". This replaces any separate title.`,...X}},required:[`name`,`pronoun`,`tagline`,`roles`,`domains`,`summary`,`description`],type:`object`}},required:[`profile`,`composition`,`personaProposal`],type:`object`},strict:!0},{...Y(a)},{...Z},{...X},[`Required JSON Schema:`,JSON.stringify(di.schema)].join(`
`)})),pi=e((()=>{fe(),dr(),fr(),vr(),br(),xr(),Sr(),Cr(),wr(),kr(),Ir(),Lr(),zr(),Br(),Hr(),Kr(),Jr(),Xr(),Qr(),ei(),ni(),ai(),oi(),si(),li(),fi(),Or()})),mi=e((()=>{})),$,hi=e((()=>{$={create_todo:`create_todo`,finish_todo:`finish_todo`,trigger_agent:`trigger_agent`,trigger_agent_dm:`trigger_agent_dm`,wait_for_user_input:`wait_for_user_input`},$.trigger_agent,$.wait_for_user_input,$.trigger_agent_dm,$.create_todo,$.finish_todo})),gi=e((()=>{I(),hi()})),_i=e((()=>{gi(),hi()})),vi=e((()=>{mi(),_i()})),yi=e((()=>{de(),pi(),vi(),I()}));export{yn as $,Ee as $t,L as A,lt as At,Fn as B,Be as Bt,Ar as C,Lt as Ct,yr as D,jt as Dt,Ir as E,Mt as Et,Wn as F,We as Ft,An as G,x as Gt,Nn as H,Fe as Ht,Gn as I,Ge as It,k as J,je as Jt,On as K,b as Kt,Ln as L,Re as Lt,vr as M,qe as Mt,ir as N,Ke as Nt,br as O,gt as Ot,rr as P,Je as Pt,Sn as Q,me as Qt,Rn as R,Pe as Rt,zr as S,Rt as St,Fr as T,Pt as Tt,jn as U,ze as Ut,Dn as V,Le as Vt,Mn as W,Ve as Wt,wn as X,Oe as Xt,Cn as Y,ke as Yt,xn as Z,pe as Zt,Gr as _,Yt as _t,ii as a,re as an,cn as at,Hr as b,Bt as bt,ni as c,m as cn,on as ct,Zr as d,en as dt,De as en,bn as et,Qr as f,$t as ft,Jr as g,Jt as gt,qr as h,T as ht,ri as i,ce as in,pn as it,_r as j,ut as jt,pr as k,_t as kt,$r as l,h as ln,rn as lt,Xr as m,Qt as mt,ci as n,ue as nn,gn as nt,ai as o,ie as on,sn as ot,Yr as p,Xt as pt,P as q,Me as qt,li as r,se as rn,mn as rt,ti as s,p as sn,an as st,yi as t,le as tn,_n as tt,ei as u,g as un,nn as ut,Kr as v,Wt as vt,W as w,Nt as wt,Rr as x,zt as xt,Vr as y,Gt as yt,Pn as z,Ie as zt};