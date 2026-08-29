const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/aiden0z-pptx-renderer.es-Cffshytv.js","assets/rolldown-runtime-CMxvf4Kt.js","assets/jszip.min-Uer3KtZc.js","assets/docx-preview-BiOKS6uR.js","assets/exceljs.min-HZhgX9lC.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Qr as o,Xr as s,mr as c}from"./dialog-BebLzVzY.js";import{C as l,w as u}from"../vendor/vendor-react-CBcx1o7d.js";import{a as d,c as f,t as p}from"./es-CVJR_g25.js";import{i as m,t as h}from"./base-ui-BAv0gRbN.js";import{t as g}from"./es-LELdnrjB.js";import{n as _,t as v}from"./localFileService-CV-M72pC.js";import{$o as y,es as b}from"./index-Djd-5Nq9.js";import{n as x,o as S,r as C,t as w}from"./pdfjs-CzYyLQms.js";import{n as T,t as E}from"./FileIcon-DXM_Cnj6.js";import{n as D,t as O}from"./TextLayer-BwSWJkxS.js";var k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{D(),O(),g(),h(),p(),k=t(a()),n(),T(),b(),x(),v(),A=t(i()),u(),j={cMapUrl:`https://registry.npmmirror.com/pdfjs-dist/${S}/files/cmaps/`,standardFontDataUrl:`https://registry.npmmirror.com/pdfjs-dist/${S}/files/standard_fonts/`},M=1200,N=d(({css:e})=>({docxContainer:e`
    overflow: auto;
    height: 100%;
    background: ${f.colorBgLayout};

    /* docx-preview renders fixed-size "pages"; keep them centered with a gap.
       "safe center" falls back to flex-start when the page is wider than the
       pane, so the left edge stays reachable by horizontal scroll. */
    .docx-wrapper {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: safe center;

      padding: 10px;

      background: transparent;
    }

    .docx-wrapper > section.docx {
      margin-block-end: 0;
      border-radius: 4px;
      box-shadow: ${f.boxShadowTertiary};
    }
  `,fallbackIcon:e`
    width: 64px;
    height: 64px;
    border-radius: 14px;
    background: ${f.colorFillTertiary};
  `,officeContainer:e`
    overflow: auto;
    height: 100%;
    background: ${f.colorBgLayout};
  `,page:e`
    overflow: hidden;
    margin-block-end: 12px;
    border-radius: 4px;
    box-shadow: ${f.boxShadowTertiary};
  `,sheetTab:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 12px;
    border: none;
    border-radius: 6px;

    font-size: 12px;
    color: ${f.colorTextSecondary};
    white-space: nowrap;

    background: transparent;

    &:hover {
      background: ${f.colorFillTertiary};
    }

    &[data-active='true'] {
      font-weight: 500;
      color: ${f.colorText};
      background: ${f.colorFillSecondary};
    }
  `,sheetTabs:e`
    overflow-x: auto;
    display: flex;
    flex: none;
    gap: 4px;

    padding-block: 6px;
    padding-inline: 8px;
    border-block-end: 1px solid ${f.colorBorderSecondary};
  `,truncatedNote:e`
    padding-block: 8px;
    padding-inline: 12px;
    font-size: 12px;
    color: ${f.colorTextTertiary};
  `,xlsxContainer:e`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: ${f.colorBgContainer};
  `,xlsxTable:e`
    overflow: auto;
    flex: 1;

    table {
      border-collapse: collapse;
      font-size: 12px;
    }

    td {
      overflow: hidden;

      max-width: 320px;
      padding-block: 4px;
      padding-inline: 8px;
      border: 1px solid ${f.colorBorderSecondary};

      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,pdfContainer:e`
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    padding-block: 10px;

    background: ${f.colorBgLayout};
  `})),P=(0,k.memo)(({blob:e})=>{let[t,n]=(0,k.useState)(0),[r,i]=(0,k.useState)(null),[a,o]=(0,k.useState)();(0,k.useEffect)(()=>{if(!r)return;let e=new ResizeObserver(([e])=>{e&&o(e.contentRect.width)});return e.observe(r),()=>e.disconnect()},[r]);let s=a?Math.min(a-32,M):void 0;return(0,A.jsx)(`div`,{className:N.pdfContainer,ref:i,children:(0,A.jsx)(w,{file:e,loading:(0,A.jsx)(y,{}),options:j,onLoadSuccess:e=>n(e.numPages),children:Array.from({length:t},(e,t)=>(0,A.jsx)(C,{className:N.page,pageNumber:t+1,width:s},`page_${t+1}`))})})}),P.displayName=`PdfPane`,F=(0,k.memo)(({blob:e,onError:t})=>{let[n,r]=(0,k.useState)(!0),[i,a]=(0,k.useState)(null),[o,s]=(0,k.useState)(null);return(0,k.useEffect)(()=>{if(!o||!i)return;let n=new AbortController,a;return(async()=>{try{let{PptxViewer:t,RECOMMENDED_ZIP_LIMITS:s}=await l(async()=>{let{PptxViewer:e,RECOMMENDED_ZIP_LIMITS:t}=await import(`./aiden0z-pptx-renderer.es-Cffshytv.js`);return{PptxViewer:e,RECOMMENDED_ZIP_LIMITS:t}},__vite__mapDeps([0,1,2]));if(n.signal.aborted)return;a=await t.open(e,o,{listOptions:{windowed:!0},scrollContainer:i,signal:n.signal,zipLimits:s}),r(!1)}catch(e){if(n.signal.aborted)return;t(e)}})(),()=>{n.abort(),a?.destroy()}},[e,o,i,t]),(0,A.jsxs)(`div`,{className:N.officeContainer,ref:a,children:[n&&(0,A.jsx)(y,{}),(0,A.jsx)(`div`,{ref:s})]})}),F.displayName=`PptxPane`,I=(0,k.memo)(({blob:e,onError:t})=>{let[n,r]=(0,k.useState)(!0),[i,a]=(0,k.useState)(null);return(0,k.useEffect)(()=>{if(!i)return;let n=!1;return(async()=>{try{let{renderAsync:t}=await l(async()=>{let{renderAsync:e}=await import(`./docx-preview-BiOKS6uR.js`);return{renderAsync:e}},__vite__mapDeps([3,1,2]));if(n)return;await t(e,i),n||r(!1)}catch(e){n||t(e)}})(),()=>{n=!0,i.replaceChildren()}},[e,i,t]),(0,A.jsxs)(`div`,{className:N.docxContainer,children:[n&&(0,A.jsx)(y,{}),(0,A.jsx)(`div`,{ref:a})]})}),I.displayName=`DocxPane`,L=500,R=e=>{if(e==null)return``;if(e instanceof Date)return e.toISOString().slice(0,10);if(typeof e==`object`){let t=e;return t.richText?t.richText.map(e=>e.text).join(``):t.formula===void 0?t.text===void 0?t.error?t.error:``:R(t.text):R(t.result)}return String(e)},z=(0,k.memo)(({blob:e,onError:n})=>{let{t:i}=r(`chat`),[a,o]=(0,k.useState)(),[s,c]=(0,k.useState)(0);if((0,k.useEffect)(()=>{let r=!1;return(async()=>{try{let{Workbook:n}=await l(async()=>{let{Workbook:e}=await import(`./exceljs.min-HZhgX9lC.js`).then(e=>t(e.default));return{Workbook:e}},__vite__mapDeps([4,1])),i=new n;if(await i.xlsx.load(await e.arrayBuffer()),r)return;o(i.worksheets.map(e=>{let t=e.actualColumnCount,n=[];return e.eachRow(e=>{if(n.length>=L)return;let r=[];for(let n=1;n<=t;n++)r.push(R(e.getCell(n).value));n.push(r)}),{name:e.name,rows:n,truncated:e.actualRowCount>L}})),c(0)}catch(e){r||n(e)}})(),()=>{r=!0}},[e,n]),!a)return(0,A.jsx)(y,{});let u=a[s]??a[0];return(0,A.jsxs)(`div`,{className:N.xlsxContainer,children:[a.length>1&&(0,A.jsx)(`div`,{className:N.sheetTabs,children:a.map((e,t)=>(0,A.jsx)(`button`,{className:N.sheetTab,"data-active":t===s,type:`button`,onClick:()=>c(t),children:e.name},`${t}-${e.name}`))}),(0,A.jsxs)(`div`,{className:N.xlsxTable,children:[(0,A.jsx)(`table`,{children:(0,A.jsx)(`tbody`,{children:u?.rows.map((e,t)=>(0,A.jsx)(`tr`,{children:e.map((e,t)=>(0,A.jsx)(`td`,{children:e},t))},t))})}),u?.truncated&&(0,A.jsx)(`div`,{className:N.truncatedNote,children:i(`workingPanel.localFile.document.truncatedRows`,{count:L})})]})]})}),z.displayName=`XlsxPane`,B={"application/vnd.openxmlformats-officedocument.presentationml.presentation":F,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":z,"application/vnd.openxmlformats-officedocument.wordprocessingml.document":I},V=(0,k.memo)(({blob:e,contentType:t,filePath:n,isLocalFile:i})=>{let{t:a}=r(`chat`),l=n.split(`/`).at(-1)??``,[u,d]=(0,k.useState)(!1);(0,k.useEffect)(()=>{d(!1)},[e,t]);let f=(0,k.useCallback)(e=>{console.error(`[DocumentPreview] office render failed:`,e),d(!0)},[]),p=(0,k.useCallback)(()=>{let t=URL.createObjectURL(e),n=globalThis.document.createElement(`a`);n.href=t,n.download=l,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e4)},[e,l]);if(t===`application/pdf`)return(0,A.jsx)(P,{blob:e});let h=B[t];return h&&!u?(0,A.jsx)(h,{blob:e,onError:f}):(0,A.jsxs)(s,{gap:16,height:`100%`,width:`100%`,children:[(0,A.jsx)(s,{className:N.fallbackIcon,children:(0,A.jsx)(E,{fileName:l,size:40})}),(0,A.jsxs)(o,{align:`center`,gap:4,children:[(0,A.jsx)(m,{style:{fontWeight:500},children:l}),(0,A.jsx)(m,{type:`secondary`,children:a(`workingPanel.localFile.document.unsupported`)})]}),i?(0,A.jsx)(c,{onClick:()=>_.openLocalFile({path:n}),children:a(`workingPanel.localFile.document.openWithDefaultApp`)}):(0,A.jsx)(c,{onClick:p,children:a(`workingPanel.localFile.document.download`)})]})}),V.displayName=`DocumentPreview`}))();export{V as default};