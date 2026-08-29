import{n as e,o as t,r as n}from"./rolldown-runtime-CMxvf4Kt.js";import{M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ba as a,La as o,cs as s,ls as c}from"./app-const-Bl9rlHwj.js";import{B as l,Qr as u,mr as d,zn as f}from"./dialog-BebLzVzY.js";import{a as p,b as m,l as h,lt as g,pt as _,t as v,xn as y}from"./es-CVJR_g25.js";import{Mp as b,Of as x,Qh as S,Xh as C,gp as w,x as T}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as E,t as D}from"./base-ui-BAv0gRbN.js";import{Sr as O,t as k}from"./es-LELdnrjB.js";import{C as A,D as j,E as ee,U as te}from"./serverConfig-CmLVLry1.js";import{c as ne,o as re}from"./client-BE8DoWhQ.js";import{Kt as ie,Yt as ae}from"./tool-BJJaXV35.js";import{Xa as M,Za as N}from"./index-Djd-5Nq9.js";import{n as P,r as F,t as I}from"./pdfjs-CzYyLQms.js";import{t as L}from"./es-D_vcp-72.js";import{n as R,r as oe}from"./ShareDataProvider-v6YJzCz9.js";import{n as se,t as ce}from"./template-DfceyFvc.js";import{i as z,n as B,t as V}from"./style-kfj-uZ-z.js";var H,U,W,G,K,q,le=e((()=>{L(),k(),D(),m(),v(),T(),H=t(c()),r(),M(),P(),V(),U=t(s()),W=p(({css:e})=>({containerWrapper:e`
    position: relative;
    width: 100%;
    height: 100%;
  `,documentLoading:e`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding: 20px;
  `,emptyState:e`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    color: #666;
  `,expandButton:e`
    position: absolute;
    z-index: 1000;
    inset-block-start: 20px;
    inset-inline-end: 20px;
  `,footerNavigation:e`
    position: absolute;
    z-index: 10;
    inset-block-end: 0;
    inset-inline: 0;

    padding: 12px;
    border-block-start: 1px solid color-mix(in srgb, black 10%, transparent);

    background: color-mix(in srgb, white 90%, transparent);
    backdrop-filter: blur(8px);
  `,fullscreenButton:e`
    border-color: white;
    color: white;
  `,fullscreenContent:e`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    min-height: 100%;
    padding: 20px;
  `,fullscreenModal:e`
    position: relative;
    overflow: auto;
    height: 90vh;
  `,fullscreenNavigation:e`
    position: fixed;
    z-index: 1001;
    inset-block-end: 20px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    padding-block: 12px;
    padding-inline: 20px;
    border-radius: 8px;

    background: color-mix(in srgb, black 70%, transparent);
    backdrop-filter: blur(8px);
  `,fullscreenPageInput:e`
    width: 60px;
    text-align: center;
  `,fullscreenPageText:e`
    min-width: 20px;
    font-size: 14px;
    color: white;
  `,loadingState:e`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
  `,loadingText:e`
    margin-block-start: 8px;
    color: #666;
  `,pageInput:e`
    width: 50px;
    text-align: center;
  `,pageNumberText:e`
    font-size: 12px;
    color: #666;
  `,previewContainer:e`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 12px;
  `})),G=(0,H.memo)(({pdfDataUri:e,initialPage:t})=>{let[n,r]=(0,H.useState)(0),[i,a]=(0,H.useState)(t),o=()=>{i>1&&a(i-1)},s=()=>{i<n&&a(i+1)},c=e=>{e>=1&&e<=n&&a(e)};return(0,U.jsxs)(`div`,{className:W.fullscreenModal,children:[(0,U.jsx)(`div`,{className:W.fullscreenContent,children:(0,U.jsx)(I,{file:e,onLoadSuccess:({numPages:e})=>r(e),children:(0,U.jsx)(F,{pageNumber:i,renderAnnotationLayer:!1,renderTextLayer:!1,width:Math.min(window.innerWidth*.8,1e3)})})}),n>1&&(0,U.jsx)(`div`,{className:W.fullscreenNavigation,children:(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:12,children:[(0,U.jsx)(d,{className:W.fullscreenButton,disabled:i<=1,icon:(0,U.jsx)(S,{size:16}),size:`small`,type:`text`,onClick:o}),(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(_,{className:W.fullscreenPageInput,max:n,min:1,size:`small`,type:`number`,value:i,onChange:e=>{let t=parseInt(e.target.value);isNaN(t)||c(t)}}),(0,U.jsxs)(`span`,{className:W.fullscreenPageText,children:[`/ `,n]})]}),(0,U.jsx)(d,{className:W.fullscreenButton,disabled:i>=n,icon:(0,U.jsx)(C,{size:16}),size:`small`,type:`text`,onClick:s})]})})]})}),G.displayName=`PdfFullscreenContent`,K=(e,t)=>E({content:(0,U.jsx)(G,{initialPage:t,pdfDataUri:e}),footer:null,maskClosable:!0,styles:{content:{padding:0},header:{display:`none`}},width:`95vw`}),q=(0,H.memo)(({loading:e,pdfData:t,onGeneratePdf:n})=>{let r=W,{t:a}=i(`chat`),o=N(),[s,c]=(0,H.useState)(0),[l,f]=(0,H.useState)(1),p=({numPages:e})=>{c(e),f(1)},m=()=>{l>1&&f(l-1)},v=()=>{l<s&&f(l+1)},b=e=>{e>=1&&e<=s&&f(e)};if(e)return(0,U.jsx)(`div`,{className:h(z.preview,z.previewWide),style:{padding:12},children:(0,U.jsxs)(`div`,{className:r.loadingState,children:[(0,U.jsx)(g,{indicator:(0,U.jsx)(y,{spin:!0,style:{fontSize:24}})}),(0,U.jsx)(`div`,{className:r.loadingText,children:a(`shareModal.generatingPdf`)})]})});if(!t)return(0,U.jsx)(`div`,{className:h(z.preview,z.previewWide),style:{padding:12},children:(0,U.jsx)(`div`,{className:r.emptyState,children:(0,U.jsx)(d,{icon:(0,U.jsx)(x,{size:20}),size:`large`,type:`primary`,onClick:n,children:a(`shareModal.generatePdf`)})})});let T=`data:application/pdf;base64,${t}`;return(0,U.jsxs)(`div`,{className:r.containerWrapper,children:[t&&(0,U.jsx)(d,{className:r.expandButton,icon:(0,U.jsx)(w,{size:16}),size:`small`,type:`text`,onClick:()=>{t&&K(T,l)}}),(0,U.jsx)(`div`,{className:h(z.preview,z.previewWide,r.previewContainer),children:(0,U.jsx)(I,{file:T,loading:(0,U.jsxs)(`div`,{className:r.documentLoading,children:[(0,U.jsx)(g,{}),(0,U.jsx)(`div`,{className:r.loadingText,children:a(`shareModal.loadingPdf`)})]}),onLoadSuccess:p,children:(0,U.jsx)(F,{pageNumber:l,renderAnnotationLayer:!1,renderTextLayer:!1,width:o?300:400})})}),t&&s>1&&(0,U.jsx)(`div`,{className:r.footerNavigation,children:(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:8,justify:`center`,children:[(0,U.jsx)(d,{disabled:l<=1,icon:(0,U.jsx)(S,{size:16}),size:`small`,type:`text`,onClick:m}),(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[(0,U.jsx)(_,{className:r.pageInput,max:s,min:1,size:`small`,type:`number`,value:l,onChange:e=>{let t=parseInt(e.target.value);isNaN(t)||b(t)}}),(0,U.jsxs)(`span`,{className:r.pageNumberText,children:[`/ `,s]})]}),(0,U.jsx)(d,{disabled:l>=s,icon:(0,U.jsx)(C,{size:16}),size:`small`,type:`text`,onClick:v})]})})]})})})),J,Y,ue=e((()=>{J=t(c()),re(),Y=()=>{let[e,t]=(0,J.useState)(null),[n,r]=(0,J.useState)(`chat-export.pdf`),[i,a]=(0,J.useState)(null),o=ne.exporter.exportPdf.useMutation(),s=(0,J.useCallback)(async e=>{let{content:n,sessionId:i,title:s,topicId:c}=e;if(!o.isPending)try{a(null),t(null);let e=await o.mutateAsync({content:n,sessionId:i,title:s,topicId:c});t(e.pdf),r(e.filename)}catch(e){console.error(`Failed to generate PDF:`,e),a(e instanceof Error?e.message:`Failed to generate PDF`)}},[o.mutateAsync]);return{downloadPdf:(0,J.useCallback)(async()=>{if(e)try{let t=atob(e),r=Array.from({length:t.length},(e,n)=>t.charCodeAt(n)),i=new Uint8Array(r),a=new Blob([i],{type:`application/pdf`}),o=URL.createObjectURL(a),s=document.createElement(`a`);s.href=o,s.download=n,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(o)}catch(e){throw console.error(`Failed to download PDF:`,e),e}},[e,n]),error:i||(o.error?.message??null),generatePdf:s,loading:o.isPending,pdfData:e}}})),de=n({default:()=>$}),X,Z,Q,$,fe=e((()=>{k(),D(),v(),T(),X=t(c()),r(),a(),M(),A(),j(),ie(),R(),se(),V(),le(),ue(),Z=t(s()),Q={includeTool:!0,includeUser:!0,withRole:!0,withSystemRole:!1},$=(0,X.memo)(e=>{let[t,n]=(0,X.useState)(Q),{t:r}=i([`chat`,`common`]),{message:a}=e,s=N(),c=[{children:(0,Z.jsx)(f,{}),label:r(`shareModal.withSystemRole`),layout:`horizontal`,minWidth:void 0,name:`withSystemRole`,valuePropName:`checked`},{children:(0,Z.jsx)(f,{}),label:r(`shareModal.withRole`),layout:`horizontal`,minWidth:void 0,name:`withRole`,valuePropName:`checked`},{children:(0,Z.jsx)(f,{}),label:r(`shareModal.includeUser`),layout:`horizontal`,minWidth:void 0,name:`includeUser`,valuePropName:`checked`},{children:(0,Z.jsx)(f,{}),label:r(`shareModal.includeTool`),layout:`horizontal`,minWidth:void 0,name:`includeTool`,valuePropName:`checked`}],[p]=ee(e=>[te.currentAgentSystemRole(e)]),m=ae(e=>e.activeAgentId),{context:g,displayMessages:_,title:v}=oe(),{generatePdf:y,downloadPdf:S,pdfData:C,loading:w,error:T}=Y(),E=async()=>{if(m&&_.length>0){let e=ce({...t,messages:a?[a]:_,systemRole:p,title:v}).replaceAll(`


`,`
`);e.trim()&&await y({content:e,sessionId:m,title:v,topicId:g.topicId||void 0})}},D=(e,t)=>{n(t)},k=async()=>{if(C)try{await S(),l.success(r(`shareModal.downloadSuccess`))}catch{l.error(r(`shareModal.downloadError`))}},A=(0,Z.jsx)(d,{block:!0,disabled:w,icon:w?void 0:x,loading:w,size:s?void 0:`large`,type:`primary`,onClick:E,children:r(w?`shareModal.generatingPdf`:C?`shareModal.regeneratePdf`:`shareModal.generatePdf`)}),j=C?(0,Z.jsx)(d,{block:!0,icon:b,size:s?void 0:`large`,type:`default`,onClick:k,children:r(`shareModal.downloadPdf`)}):null;return T?(0,Z.jsxs)(u,{className:B.body,gap:16,horizontal:!s,children:[(0,Z.jsx)(`div`,{className:h(z.preview,z.previewWide),style:{padding:12},children:(0,Z.jsxs)(`div`,{style:{color:`red`,textAlign:`center`},children:[r(`shareModal.pdfGenerationError`),`: `,T]})}),(0,Z.jsxs)(u,{className:B.sidebar,gap:12,children:[(0,Z.jsx)(`div`,{children:r(`shareModal.pdfErrorDescription`)}),(0,Z.jsx)(O,{initialValues:Q,items:c,itemsType:`flat`,onValuesChange:D,...o}),A]})]}):(0,Z.jsxs)(u,{className:B.body,gap:16,horizontal:!s,children:[(0,Z.jsx)(q,{loading:w,pdfData:C,onGeneratePdf:E}),(0,Z.jsxs)(u,{className:B.sidebar,gap:12,children:[(0,Z.jsx)(O,{initialValues:Q,items:c,itemsType:`flat`,onValuesChange:D,...o}),C&&A,j]})]})})}));export{de as n,fe as r,$ as t};