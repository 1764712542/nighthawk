const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/client-BE8DoWhQ.js","assets/rolldown-runtime-CMxvf4Kt.js","vendor/vendor-react-CBcx1o7d.js","assets/app-const-Bl9rlHwj.js","assets/model-runtime-client-tog6-eyE.js","assets/browser-C6epcJfA.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{O as i,cs as a,ls as o,ta as s}from"./app-const-Bl9rlHwj.js";import{Hr as c,Qr as l,Xr as u}from"./dialog-BebLzVzY.js";import{C as d,w as f}from"../vendor/vendor-react-CBcx1o7d.js";import{a as p,b as m,c as h,t as g,x as _}from"./es-CVJR_g25.js";import{cv as v,wa as y,x as b}from"../vendor/vendor-icons-C-Y4oLkk.js";import{i as x,t as S}from"./base-ui-BAv0gRbN.js";import{ra as C,t as w}from"./es-LELdnrjB.js";import{ir as T,rr as E}from"./model-runtime-client-tog6-eyE.js";import{r as D}from"./store-DKx7p_l_.js";import{n as O}from"./file-CNldqoil.js";import{Do as k,Eo as A,Et as j,M,Q as N,Tt as P,Z as F,f as I,j as L,m as R}from"./index-Djd-5Nq9.js";import{n as z,t as B}from"./Notion-CbnUYWOu.js";import{n as V,t as H}from"./useNotionImport-V8yMM3K7.js";var U,W,G,K,q,J=e((()=>{i(),z(),w(),S(),m(),g(),b(),U=t(o()),n(),N(),H(),A(),O(),I(),T(),L(),W=t(a()),f(),G=80,K=p(({css:e,cssVar:t})=>({actionTitle:e`
    margin-block-start: 12px;
    font-size: 16px;
    color: ${t.colorTextSecondary};
  `,card:e`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: ${t.borderRadiusLG};

    font-weight: 500;
    text-align: center;

    background: ${t.colorFillTertiary};
    box-shadow: 0 0 0 1px ${t.colorFillTertiary} inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,glow:e`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `,icon:e`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `})),q=(0,U.memo)(({hasPages:e=!1,knowledgeBaseId:t})=>{let{t:n}=r([`file`,`common`]),{allowed:i}=k(`create_content`),[a,o]=(0,U.useState)(!1),[f,p,m,g,b]=R(e=>[e.createNewPage,e.createOptimisticPage,e.replaceTempPageWithReal,e.setSelectedPageId,e.fetchDocuments]),[S]=D(e=>[e.createDocument]),w=V({createDocument:S,currentFolderId:null,libraryId:t??null,refetchResources:b,t:n}),T=async e=>{i&&await w.handleNotionImport(e)},O=async(e,n)=>{if(!i)return;if(!e){await f(n);return}let r=p(n);g(r,!1);try{let i=await S({content:e,knowledgeBaseId:t,title:n});m(r,{content:i.content||``,createdAt:i.createdAt?new Date(i.createdAt):new Date,editorData:typeof i.editorData==`string`?JSON.parse(i.editorData):i.editorData||null,fileType:s,filename:i.title||n,id:i.id,metadata:i.metadata||{},source:`document`,sourceType:E.EDITOR,title:i.title||n,totalCharCount:i.content?.length||0,totalLineCount:0,updatedAt:i.updatedAt?new Date(i.updatedAt):new Date}),g(i.id)}catch(e){throw console.error(`Failed to create page:`,e),R.getState().removeTempPage(r),g(null),e}};return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(F,{}),(0,W.jsxs)(u,{gap:24,height:`100%`,style:{paddingBottom:100},width:`100%`,children:[e&&(0,W.jsxs)(l,{justify:`center`,style:{textAlign:`center`},children:[(0,W.jsx)(x,{as:`h4`,children:n(`pageEditor.empty.title`)}),(0,W.jsx)(x,{type:`secondary`,children:n(`or`,{ns:`common`})})]}),(0,W.jsxs)(l,{horizontal:!0,gap:12,children:[(0,W.jsxs)(l,{className:K.card,padding:16,style:i?void 0:{cursor:`not-allowed`,opacity:.5},onClick:()=>O(``,n(`pageList.untitled`)),children:[(0,W.jsx)(`span`,{className:K.actionTitle,children:n(`pageEditor.empty.createNewDocument`)}),(0,W.jsx)(`div`,{className:K.glow,style:{background:h.purple}}),(0,W.jsx)(C,{className:K.icon,color:h.purple,icon:(0,W.jsx)(c,{color:`#fff`,icon:y}),size:G,type:`file`})]}),(0,W.jsx)(_,{accept:`.md,.markdown,.pdf,.docx`,beforeUpload:async e=>{if(!i)return!1;try{o(!0);let n=e.name.split(`.`).pop()?.toLowerCase();if(n===`md`||n===`markdown`)await O(await e.text(),e.name.replace(/\.md$|\.markdown$/i,``));else if(n===`pdf`||n===`docx`){let n=e.name.replace(/\.(pdf|docx)$/i,``),r=p(n);try{let i=await D.getState().uploadWithProgress({file:e,knowledgeBaseId:t});if(!i)throw Error(`Failed to upload file`);let{lambdaClient:a}=await d(async()=>{let{lambdaClient:e}=await import(`./client-BE8DoWhQ.js`).then(e=>(e.n(),e.t));return{lambdaClient:e}},__vite__mapDeps([0,1,2,3,4,5])),o=await a.document.parseDocument.mutate({id:i.id});m(r,{content:o.content||``,createdAt:o.createdAt?new Date(o.createdAt):new Date,editorData:typeof o.editorData==`string`?JSON.parse(o.editorData):o.editorData||null,fileType:o.fileType||`custom/document`,filename:o.filename||n,id:o.id,metadata:o.metadata||{},source:o.source||`document`,sourceType:o.sourceType||`file`,title:o.title||n,totalCharCount:o.totalCharCount||0,totalLineCount:o.totalLineCount||0,updatedAt:o.updatedAt?new Date(o.updatedAt):new Date}),g(o.id,!1);let s=M(o.id),c=s?`/page/${s}`:`/page`;window.history.replaceState({},``,c)}catch(e){throw console.error(`Failed to upload and parse file:`,e),R.getState().removeTempPage(r),e}}}catch(e){console.error(`Failed to upload file:`,e)}finally{o(!1)}return!1},disabled:!i||a,multiple:!1,showUploadList:!1,children:(0,W.jsxs)(l,{className:K.card,padding:16,style:{cursor:i?void 0:`not-allowed`,opacity:!i||a?.5:1},children:[(0,W.jsx)(`span`,{className:K.actionTitle,children:a?`Uploading...`:n(`pageEditor.empty.uploadFiles`)}),(0,W.jsx)(`div`,{className:K.glow,style:{background:h.gold}}),(0,W.jsx)(C,{className:K.icon,color:h.gold,icon:(0,W.jsx)(c,{color:`#fff`,icon:v}),size:G,type:`file`})]})}),(0,W.jsxs)(l,{className:K.card,padding:16,style:i?void 0:{cursor:`not-allowed`,opacity:.5},onClick:()=>{i&&w.handleOpenNotionGuide()},children:[(0,W.jsx)(`span`,{className:K.actionTitle,children:n(`pageEditor.empty.importNotion`)}),(0,W.jsx)(`div`,{className:K.glow,style:{background:h.geekblue}}),(0,W.jsx)(C,{className:K.icon,color:h.geekblue,icon:(0,W.jsx)(B,{color:`#fff`}),size:G,type:`file`})]})]})]}),(0,W.jsx)(`input`,{accept:`.zip`,ref:w.notionInputRef,style:{display:`none`},type:`file`,onChange:T})]})})})),Y,X,Z;e((()=>{Y=t(o()),j(),J(),X=t(a()),Z=()=>(0,X.jsx)(Y.Suspense,{fallback:(0,X.jsx)(P,{variant:`editor`}),children:(0,X.jsx)(q,{})})}))();export{Z as default};