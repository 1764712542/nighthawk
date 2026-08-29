import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Hr as i,Q as a,Qr as o}from"./dialog-BebLzVzY.js";import{a as s,b as c,c as l,pt as u,t as d}from"./es-CVJR_g25.js";import{Pd as f,Wd as p,Xh as m,bf as h,eg as g,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{Li as v,N as y,or as b,t as x,zt as S}from"./es-LELdnrjB.js";var C,w,T,E,D=e((()=>{x(),d(),C=t(r()),w=t(n()),T=28,E=(0,C.memo)(({rows:e=8,showRootFile:t=!0})=>{let n=Array.from({length:e},(e,t)=>t);return(0,w.jsxs)(o,{gap:2,children:[t&&(0,w.jsxs)(o,{horizontal:!0,align:`center`,gap:6,height:T,paddingInline:8,children:[(0,w.jsx)(S.Button,{active:!0,size:`small`,style:{borderRadius:l.borderRadius,height:14,minWidth:14,width:14}}),(0,w.jsx)(S.Button,{active:!0,size:`small`,style:{borderRadius:l.borderRadius,height:16,minWidth:80,opacity:.6,width:`40%`}})]}),n.map(e=>{let t=e%3,n=`${40+e*13%45}%`;return(0,w.jsxs)(o,{horizontal:!0,align:`center`,gap:6,height:T,paddingInline:8,style:{paddingInlineStart:8+t*16},children:[(0,w.jsx)(S.Button,{active:!0,size:`small`,style:{borderRadius:l.borderRadius,height:14,minWidth:14,width:14}}),(0,w.jsx)(S.Button,{active:!0,size:`small`,style:{borderRadius:l.borderRadius,height:16,minWidth:70,opacity:.55,width:n}})]},e)})]})}),E.displayName=`FileTreeSkeleton`})),O,k,A,j,M,N=e((()=>{x(),c(),d(),_(),O=t(r()),k=t(n()),D(),A=s(({css:e,cssVar:t})=>({item:e`
    cursor: pointer;

    display: flex;
    gap: 6px;
    align-items: center;

    padding-block: 6px;
    padding-inline-end: 8px;
    border-radius: 6px;

    font-size: 13px;
    line-height: 1.4;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,itemSelected:e`
    color: ${t.colorPrimary};
    background: ${t.colorFillSecondary};
  `,label:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,editingInput:e`
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;

    font-size: 13px !important;
    line-height: 1.4 !important;

    background: transparent !important;
    outline: none !important;
    box-shadow: none !important;
  `,editingInputRoot:e`
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    border-radius: 0 !important;

    background: transparent !important;
    box-shadow: none !important;
  `})),j=(0,O.memo)(({node:e,depth:t,selectedFile:n,onSelectFile:r,expandedFolders:o,onToggleFolder:s,getFileContextMenuItems:c,editableFilePath:l,onCancelRenameFile:d,onCommitRenameFile:_})=>{let v=e.type===`directory`,y=o.has(e.path),b=!v&&n===e.path,x=!v&&l===e.path&&!!_,[S,C]=(0,O.useState)(e.name),w=(0,O.useRef)(null),T=(0,O.useRef)(!1);(0,O.useEffect)(()=>{x&&(C(e.name),requestAnimationFrame(()=>{w.current?.focus?.(),w.current?.select?.()}))},[x,e.name]);let E=()=>{x||(v?s(e.path):r(e.path))},D=(0,O.useCallback)(()=>{C(e.name),d?.()},[e.name,d]),M=(0,O.useCallback)(async()=>{if(!x||!_||T.current)return;let t=S.trim();if(t===e.name){D();return}T.current=!0;try{await _({name:e.name,path:e.path},t),d?.()}finally{T.current=!1}},[S,D,x,e.name,e.path,d,_]),N=!v&&!x?c?.({name:e.name,path:e.path}):void 0,P=(0,k.jsxs)(`div`,{className:`${A.item} ${b?A.itemSelected:``}`,style:{paddingInlineStart:8+t*16},title:e.path,onClick:E,children:[v&&(0,k.jsx)(i,{icon:y?g:m,size:14}),!v&&(0,k.jsx)(`span`,{style:{flexShrink:0,width:14}}),(0,k.jsx)(i,{icon:v?y?p:f:h,size:16}),x?(0,k.jsx)(u,{classNames:{input:A.editingInput,root:A.editingInputRoot},ref:w,value:S,variant:`borderless`,onBlur:()=>void M(),onChange:e=>C(e.target.value),onClick:e=>e.stopPropagation(),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`&&(e.preventDefault(),e.currentTarget.blur(),M()),e.key===`Escape`&&(e.preventDefault(),D())}}):(0,k.jsx)(`span`,{className:A.label,children:e.name})]});return(0,k.jsxs)(k.Fragment,{children:[!v&&N&&N.length>0?(0,k.jsx)(a,{items:N,children:P}):P,v&&y&&e.children?.map(e=>(0,k.jsx)(j,{depth:t+1,editableFilePath:l,expandedFolders:o,getFileContextMenuItems:c,node:e,selectedFile:n,onCancelRenameFile:d,onCommitRenameFile:_,onSelectFile:r,onToggleFolder:s},e.path))]})}),j.displayName=`TreeNode`,M=(0,O.memo)(({resourceTree:e,rootFile:t,selectedFile:n,onSelectFile:r,getFileContextMenuItems:o,editableFilePath:s,onCancelRenameFile:c,onCommitRenameFile:l})=>{let[u,d]=(0,O.useState)(()=>new Set);(0,O.useEffect)(()=>{let t=new Set,n=e=>{for(let r of e)r.type===`directory`&&(t.add(r.path),r.children&&n(r.children))};n(e),d(t)},[e]);let f=(0,O.useCallback)(e=>{d(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),p=t===void 0?`SKILL.md`:t?.path,m=t===void 0?`SKILL.md`:t?.label,g=!!p&&n===p,_=(0,O.useMemo)(()=>e.length>0,[e]),v=(0,O.useMemo)(()=>p&&m?o?.({name:m,path:p}):void 0,[o,m,p]),y=p&&m&&(0,k.jsxs)(`div`,{className:`${A.item} ${g?A.itemSelected:``}`,style:{paddingInlineStart:8},onClick:()=>r(p),children:[(0,k.jsx)(`span`,{style:{flexShrink:0,width:14}}),(0,k.jsx)(i,{icon:h,size:16}),(0,k.jsx)(`span`,{className:A.label,children:m})]});return(0,k.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:[y&&v&&v.length>0?(0,k.jsx)(a,{items:v,children:y}):y,_&&e.map(e=>(0,k.jsx)(j,{depth:0,editableFilePath:s,expandedFolders:u,getFileContextMenuItems:o,node:e,selectedFile:n,onCancelRenameFile:c,onCommitRenameFile:l,onSelectFile:r,onToggleFolder:f},e.path))]})}),M.displayName=`FileTree`})),P,F,I,L,R,z,B,V=e((()=>{x(),d(),P=t(r()),F=t(n()),I=s(({css:e,cssVar:t})=>({codeWrapper:e`
    position: relative;
    overflow-x: auto;
    margin-block-start: 16px;
    padding-block-end: calc(100cqb - 1lh);

    pre {
      margin: 0;
    }

    code {
      counter-reset: line;
    }

    .line {
      width: 100% !important;
      margin-inline: 0 !important;
      padding-inline: 0 !important;
    }

    .line::before {
      content: counter(line);
      counter-increment: line;
      user-select: none;

      display: inline-block;

      width: 4ch;
      margin-inline-end: 2ch;

      color: ${t.colorTextQuaternary};
      text-align: end;
    }
  `,docWrapper:e`
    max-width: 798px;
    margin-inline: auto;
    padding-block: 8px;
    padding-inline: 24px;
  `})),L=e=>{switch(e.toLowerCase().split(`.`).pop()){case`js`:case`mjs`:case`cjs`:return`javascript`;case`ts`:return`typescript`;case`tsx`:return`tsx`;case`jsx`:return`jsx`;case`py`:case`pyw`:return`python`;case`java`:return`java`;case`go`:return`go`;case`rs`:return`rust`;case`rb`:return`ruby`;case`sh`:case`bash`:case`zsh`:return`bash`;case`html`:case`htm`:return`html`;case`css`:return`css`;case`scss`:return`scss`;case`json`:return`json`;case`xml`:return`xml`;case`yaml`:case`yml`:return`yaml`;case`toml`:return`toml`;case`md`:case`mdx`:return`markdown`;case`sql`:return`sql`;case`c`:case`h`:return`c`;case`cpp`:case`cxx`:case`cc`:case`hpp`:return`cpp`;case`cs`:return`csharp`;case`swift`:return`swift`;case`kt`:case`kts`:return`kotlin`;case`lua`:return`lua`;case`dart`:return`dart`;case`graphql`:case`gql`:return`graphql`;default:return`txt`}},R=e=>{let t=e.toLowerCase().split(`.`).pop();return t===`md`||t===`mdx`},z=e=>{if(!e)return{body:``};let t=e.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);return t?{body:t[2],frontmatter:t[1]}:{body:e}},B=(0,P.memo)(({skillDetail:e,selectedFile:t,contentMap:n,liveContent:r})=>{if(t===`SKILL.md`){let t=r??e?.content;if(!t)return(0,F.jsx)(`div`,{className:I.docWrapper,children:(0,F.jsx)(`p`,{style:{opacity:.45},children:`No content`})});let{frontmatter:n,body:i}=z(t);return(0,F.jsxs)(`div`,{className:I.docWrapper,children:[n&&(0,F.jsx)(b,{fullFeatured:!0,language:`yaml`,variant:`outlined`,children:n}),(0,F.jsx)(y,{variant:`chat`,children:i})]})}let i=n[t];if(R(t)){let{frontmatter:e,body:t}=z(i);return(0,F.jsxs)(`div`,{className:I.docWrapper,children:[e&&(0,F.jsx)(b,{fullFeatured:!0,language:`yaml`,variant:`outlined`,children:e}),(0,F.jsx)(y,{variant:`chat`,children:t})]})}return(0,F.jsxs)(`div`,{className:I.codeWrapper,children:[(0,F.jsx)(v,{content:i,style:{position:`absolute`,right:8,top:0,zIndex:1}}),(0,F.jsx)(b,{copyable:!1,language:L(t),showLanguage:!1,variant:`borderless`,children:i})]})}),B.displayName=`ContentViewer`}));export{E as a,N as i,V as n,D as o,M as r,B as t};