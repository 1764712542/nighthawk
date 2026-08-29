import{n as e}from"./rolldown-runtime-CMxvf4Kt.js";import{O as t,st as n,vt as r}from"./app-const-Bl9rlHwj.js";var i,a,o,s,c=e((()=>{t(),i=/<lobeArtifact\b[^>]*>(?<content>[\S\s]*?)(?:<\/lobeArtifact>|$)/g,a=/<lobeAgents\b[^>]*>/g,o=(e=``)=>{let t=e.replace(/^([\s\S]*?)\s*```[^\n]*\n((?:<lobeThinking>[\s\S]*?<\/lobeThinking>[\t\v\f\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\n\s*)?<lobeArtifact[\s\S]*?<\/lobeArtifact>\s*)\n```\s*([\s\S]*)$/,(e,t=``,n,r=``)=>[t.trim(),n.trim(),r.trim()].filter(Boolean).join(`

`));n.exec(t)&&(t=t.replace(n,e=>e.replaceAll(/\r?\n|\r/g,``))),t=t.replace(/(<\/lobeThinking>)(?:\r?\n)?(<lobeArtifact)/,`$1

$2`),t=t.replace(/(<lobeArtifact[^>]*>)\s*```[^\n]*\n([\s\S]*?)(```\n)?(<\/lobeArtifact>)/,(e,t,n,r,i)=>n.trim().startsWith(`<!DOCTYPE html`)||n.trim().startsWith(`<html`)?t+n.trim()+i:t+n+(r||``)+i),t=t.replace(/^([\s\S]*?)(<lobeThinking>[\s\S]*?<\/lobeThinking>[\t\v\f\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\n\s*<lobeArtifact[\s\S]*?<\/lobeArtifact>)([\s\S]*)$/,(e,t,n,r)=>[t.trim(),n.trim(),r.trim()].filter(Boolean).join(`

`)),t=t.replaceAll(i,e=>e.replaceAll(/\r?\n|\r/g,``));let r=/<lobeArtifact\b(?:(?!\/?>)[\s\S])*$/;return r.test(t)&&(t=t.replace(r,`<lobeArtifact>`)),t=t.replaceAll(a,e=>e.replaceAll(/\r?\n|\r/g,``)),t},s=e=>e.replaceAll(/([^\n])\s*<think>/g,`$1

<think>`).replaceAll(/<think>\s*([^\n])/g,`<think>

$1`).replaceAll(/([^\n])\s*<\/think>/g,`$1

</think>`).replaceAll(/<\/think>\s*([^\n])/g,`</think>

$1`).replaceAll(/\n{3,}/g,`

`)})),l,u=e((()=>{r(),c(),l=({messages:e,title:t,includeTool:n,includeUser:r,withSystemRole:i,withRole:a,systemRole:c})=>{let l=[`# ${t}`,``];i&&c&&l.push("````md",c,"````",``);let u=e.filter(e=>e.content!==`...`).filter(e=>r?!0:e.role!==`user`).filter(e=>n?!0:e.role!==`tool`).map(e=>({...e,content:s(o(e.content))}));for(let e of u)l.push(``),a&&(e.role===`user`?l.push(`##### User:`,``):e.role===`assistant`?l.push(`##### Assistant:`,``):e.role===`tool`&&l.push(`##### Tools Calling:`,``)),e.role===`tool`?l.push("```json",String(e.content),"```"):(l.push(String(e.content)),n&&e.tools&&e.tools.length>0&&l.push(``,"```json",JSON.stringify(e.tools,null,2),"```"));return l.join(`
`)}}));export{o as a,s as i,u as n,c as r,l as t};