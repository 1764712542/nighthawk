import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Dt as i,Et as a}from"./agent-Cvv887Je.js";import{O as o,cs as s,ls as c}from"./app-const-Bl9rlHwj.js";import{B as l,Hr as u,bt as d,mr as f}from"./dialog-BebLzVzY.js";import{a as p,m,w as h}from"../vendor/vendor-react-CBcx1o7d.js";import{Dt as g,a as _,b as v,c as y,l as b,t as x}from"./es-CVJR_g25.js";import{An as ee,Br as S,Bs as C,E_ as w,Em as T,Mp as E,O as D,Pc as O,Rc as k,Rl as A,St as j,Su as M,Wc as N,bu as te,ia as ne,ng as re,nl as ie,or as ae,vu as oe,wt as se,x as ce}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as le}from"./base-ui-BAv0gRbN.js";import{Ta as ue,t as de,zt as fe}from"./es-LELdnrjB.js";import{la as pe}from"./model-runtime-client-tog6-eyE.js";import{c as me,p as he,s as ge,u as _e}from"./format-BuuIRQbq.js";import{r as ve}from"./store-DKx7p_l_.js";import{n as ye}from"./file-CNldqoil.js";import{Kn as be,Y as xe,i as Se,nr as Ce,ot as we,rn as Te}from"./Lexical.prod-D1pZVWJN.js";import{Nn as Ee,jn as De}from"./tool-BJJaXV35.js";import{Fn as Oe,Gt as ke,Ht as Ae,Pa as je,Sn as Me,Xo as Ne,Yo as Pe,bi as P,mi as F,qt as I,zn as Fe}from"./index-Djd-5Nq9.js";import{n as Ie,t as Le}from"./FileIcon-DXM_Cnj6.js";import{$ as Re,S as ze,c as Be,dt as Ve,ht as He,i as Ue,lt as We,q as Ge,t as L,w as Ke,yt as qe}from"./es-8MFK7TL8.js";import{n as Je,t as Ye}from"./AsyncError-DLThyZ5z.js";import{n as Xe,t as Ze}from"./ErrorBoundary-BarDWugi.js";import{a as Qe,i as $e,n as et,o as tt,r as nt}from"./fileDownload-fwwd0u-s.js";import{n as rt,t as it}from"./AutoSaveHint-rHtfd1ZG.js";import{n as at,t as ot}from"./constants-Bb3CxuI1.js";import{a as st,i as R,n as ct,o as lt}from"./document-Cv686SHW.js";import{n as ut,t as dt}from"./404-CXTAXPCA.js";import{o as ft,t as pt}from"./useHotkeys-wy5QCmO-.js";import{a as mt,i as ht,n as gt}from"./TypoBar-_QPCQENT.js";function _t(e,t=`*/*`){if(typeof document>`u`)return;let n=document.createElement(`input`);n.type=`file`,n.accept=t,n.multiple=!1,n.addEventListener(`change`,t=>{let n=t.target?.files;n&&n.length>0&&e(n)}),n.click()}var vt=e((()=>{})),yt,bt,xt,St=e((()=>{yt=t(c()),rt(),ct(),st(),bt=t(s()),xt=(0,yt.memo)(({documentId:e,style:t})=>{let n=R(t=>lt.saveStatus(e)(t));return(0,bt.jsx)(it,{lastUpdatedTime:R(t=>lt.lastUpdatedTime(e)(t)??null),saveStatus:n,style:t})}),xt.displayName=`AutoSaveHint`})),z,B,V,Ct,wt,Tt,Et=e((()=>{L(),de(),le(),v(),x(),ce(),z=t(c()),n(),Pe(),ct(),B=t(s()),V=_(({css:e})=>({container:e`
    position: absolute;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,toolbar:e`
    border-color: ${y.colorFillSecondary};
    background: ${y.colorBgElevated};
  `,toolbarDark:e`
    box-shadow:
      0 14px 28px -6px #0003,
      0 2px 4px -1px #0000001f;
  `,toolbarLight:e`
    box-shadow:
      0 14px 28px -6px #0000001a,
      0 2px 4px -1px #0000000f;
  `})),Ct=e=>{let[t,n]=(0,z.useState)(!!e?.getLexicalEditor());return(0,z.useEffect)(()=>{if(!e)return;if(e.getLexicalEditor()){n(!0);return}let t=()=>{n(!0)};return e.on(`initialized`,t),()=>{e.off(`initialized`,t)}},[e]),t},wt=e=>{let[t,n]=(0,z.useState)(!1),r=Ct(e);return(0,z.useEffect)(()=>{if(!e)return;let t=e.getLexicalEditor();if(!t||!r)return;let i=()=>{let e=t.getEditorState();e.read(()=>{let t=e._nodeMap,r=!1;t.forEach(e=>{e.getType()===`diff`&&(r=!0)}),n(r)})};i();let a=t.registerUpdateListener(()=>{i()});return()=>{a()}},[e,r]),t},Tt=(0,z.memo)(({documentId:e,editor:t})=>{let{t:n}=r(`editor`),i=Ne(),[a,o]=R(e=>[e.performSave,e.markDirty]),s=wt(t);if(!t||!s)return null;let c=async()=>{o(e),await a(e,void 0,{saveSource:`manual`})};return(0,B.jsx)(`div`,{className:V.container,children:(0,B.jsx)(ue,{horizontal:!0,shadow:!0,className:b(V.toolbar,i?V.toolbarDark:V.toolbarLight),gap:8,padding:4,variant:`outlined`,children:(0,B.jsxs)(g,{children:[(0,B.jsxs)(f,{size:`small`,type:`text`,onClick:async()=>{t.dispatchCommand(Ee,{action:De.Reject}),await c()},children:[(0,B.jsx)(u,{icon:D,size:16}),n(`modifier.rejectAll`)]}),(0,B.jsxs)(f,{size:`small`,type:`fill`,onClick:async()=>{t.dispatchCommand(Ee,{action:De.Accept}),await c()},children:[(0,B.jsx)(u,{color:`green`,icon:re,size:16}),n(`modifier.acceptAll`)]})]})})})}),Tt.displayName=`DiffAllToolbar`})),Dt,H,Ot,kt=e((()=>{L(),Ae(),de(),x(),ce(),Dt=t(c()),n(),H=t(s()),Ot=(0,Dt.memo)(({floating:e,style:t,className:n,editor:i,editorState:a,extraItems:o})=>{let{t:s}=r(`editor`),c=(0,Dt.useMemo)(()=>a?[...o||[],o?.length?{type:`divider`}:null,!e&&{disabled:!a.canUndo,icon:j,key:`undo`,label:s(`typobar.undo`,`Undo`),onClick:a.undo,tooltipProps:{hotkey:F(P.Undo).keys}},!e&&{disabled:!a.canRedo,icon:ne,key:`redo`,label:s(`typobar.redo`,`Redo`),onClick:a.redo,tooltipProps:{hotkey:F(P.Redo).keys}},!e&&{type:`divider`},{active:a.isBold,icon:w,key:`bold`,label:s(`typobar.bold`),onClick:a.bold,tooltipProps:{hotkey:F(P.Bold).keys}},{active:a.isItalic,icon:A,key:`italic`,label:s(`typobar.italic`),onClick:a.italic,tooltipProps:{hotkey:F(P.Italic).keys}},{active:a.isUnderline,icon:se,key:`underline`,label:s(`typobar.underline`),onClick:a.underline,tooltipProps:{hotkey:F(P.Underline).keys}},{active:a.isStrikethrough,icon:ee,key:`strikethrough`,label:s(`typobar.strikethrough`),onClick:a.strikethrough,tooltipProps:{hotkey:F(P.Strikethrough).keys}},{type:`divider`},!e&&{icon:M,key:`h1`,label:s(`slash.h1`),onClick:()=>{i&&i.dispatchCommand(Me,{tag:`h1`})}},!e&&{icon:te,key:`h2`,label:s(`slash.h2`),onClick:()=>{i&&i.dispatchCommand(Me,{tag:`h2`})}},!e&&{icon:oe,key:`h3`,label:s(`slash.h3`),onClick:()=>{i&&i.dispatchCommand(Me,{tag:`h3`})}},!e&&{type:`divider`},{icon:O,key:`bulletList`,label:s(`typobar.bulletList`),onClick:a.bulletList,tooltipProps:{hotkey:F(P.BulletList).keys}},{icon:N,key:`numberlist`,label:s(`typobar.numberList`),onClick:a.numberList,tooltipProps:{hotkey:F(P.NumberList).keys}},{icon:k,key:`tasklist`,label:s(`typobar.taskList`),onClick:a.checkList},{type:`divider`},{active:a.isBlockquote,icon:C,key:`blockquote`,label:s(`typobar.blockquote`),onClick:a.blockquote},{icon:ie,key:`link`,label:s(`typobar.link`),onClick:a.insertLink,tooltipProps:{hotkey:F(P.Link).keys}},{icon:S,key:`math`,label:s(`typobar.tex`),onClick:a.insertMath},{type:`divider`},{active:a.isCode,icon:T,key:`code`,label:s(`typobar.code`),onClick:a.code,tooltipProps:{hotkey:F(P.CodeInline).keys}},!e&&{icon:ae,key:`codeblock`,label:s(`typobar.codeblock`),onClick:a.codeblock}].filter(Boolean):[],[i,a,o,e,s]);return a?e?(0,H.jsx)(ke,{className:n,items:c,style:t}):(0,H.jsx)(ue,{shadow:!0,className:n,padding:4,variant:`outlined`,style:{background:y.colorBgElevated,borderRadius:8,marginBottom:16,marginTop:16,position:`sticky`,top:12,zIndex:10,...t},children:(0,H.jsx)(je,{items:c})}):null}),Ot.displayName=`InlineToolbar`})),At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht=e((()=>{L(),Te(),Qe(),At=new WeakMap,jt=e=>e&&typeof e==`object`&&!Array.isArray(e)?e:void 0,Mt=e=>{let t=[e],n=!1,r=!1;for(;t.length>0;){let e=jt(t.pop());if(!e)continue;let i=e.type===`file`,a=e.type===`image`||e.type===`block-image`;if(i||a){let t=i?e.fileUrl:e.src;e.status===`uploaded`&&typeof t==`string`&&t.length>0?n=!0:r=!0}Array.isArray(e.children)&&t.push(...e.children),e.root&&t.push(e.root)}return{hasCompletedAttachments:n,hasIncompleteAttachments:r}},Nt=e=>At.get(e),Pt=e=>`getChildren`in e?e.getChildren():[],Ft=(e,t)=>{let n=[e];for(;n.length>0;){let e=n.pop();if(e){if(e.getType()===`file`){let n=e;if(n.name===t.name&&n.status===`pending`&&n.size===void 0)return n.getWritable().__size=t.size,!0}n.push(...Pt(e))}}return!1},It=e=>{let t=Se();if(be(t)){let n=t.anchor.getNode(),r=we(n)?n.getChildAtIndex(t.anchor.offset-1):n.getPreviousSibling();if(r&&Ft(r,e))return}Ft(Ce(),e)},Lt=e=>{if(!e)return[];let{imageList:t,fileList:n}=Ge(e),r=new Set;for(let{url:e}of t){let t=$e(e);t&&r.add(t)}for(let{url:e}of n){let t=$e(e);t&&r.add(t)}return[...r]},Rt=e=>e?.getLexicalEditor?.()?Lt(e.getDocument?.(`json`)):[],zt=(e,t)=>{if(!e||t.length===0)return;let n=e.getLexicalEditor?.();if(n){for(let e of t)e.type.startsWith(`image/`)?n.dispatchCommand(Re,{file:e}):n.dispatchCommand(Ve,{file:e});e.focus?.()}},Bt=(e,t)=>{if(!e||t.length===0)return;let n=e.getLexicalEditor?.();if(n){for(let e of t){let t=new File([],e.name,{type:e.fileType});Object.defineProperty(t,"size",{value:e.size}),At.set(t,e),tt(e.url,e.fileId),n.dispatchCommand(Ve,{file:t})}e.focus?.()}},Vt=(e,t)=>{if(!e?.getLexicalEditor?.())return;let n=document.createElement(`input`);n.type=`file`,n.multiple=!0,t&&(n.accept=t),n.addEventListener(`change`,()=>{zt(e,Array.from(n.files??[]))}),n.click()}})),Ut,Wt=e((()=>{Ut=()=>{let e=new Set,t=new Set,n=new Map,r=new Map,i=new Map,a=new Map,o=0,s=()=>{for(let e of t)e()},c=t=>(e.delete(t),i.delete(t),a.delete(t));return{bindNode:(e,t)=>{if(r.has(e))return;n.set(e,t);let o=[...a.values()].find(t=>i.get(t.id)===e)??[...a.values()].find(e=>e.file.name===t&&!i.has(e.id));o&&(r.set(e,o.id),i.set(o.id,e),s())},finish:t=>{a.has(t)&&(e.add(t),!([...r.values()].includes(t)||!c(t))&&s())},getSnapshot:e=>{let t=r.get(e);return t?a.get(t):void 0},releaseNode:t=>{n.delete(t);let i=r.get(t);i&&(r.delete(t),e.has(i)&&c(i),s())},start:e=>{let t=String(++o);a.set(t,{file:e,id:t,status:`pending`});let c=[...n.entries()].find(([t,n])=>n===e.name&&!r.has(t));return c&&(r.set(c[0],t),i.set(t,c[0])),s(),t},subscribe:e=>(t.add(e),()=>t.delete(e)),update:(e,t,n)=>{let r=a.get(e);r&&(a.set(e,{...r,status:t,uploadState:n}),s())}}}})),U,W,G,Gt,K,Kt,qt=e((()=>{L(),le(),x(),ce(),U=t(c()),n(),Ie(),he(),Ht(),Wt(),et(),W=t(s()),G=_(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    box-sizing: border-box;
    width: 100%;
    padding-block: 10px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    color: ${t.colorText};

    background: ${t.colorBgContainer};

    transition: background ${t.motionDurationMid};

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:hover [data-lobehub-file-download] {
      opacity: 1;
    }
  `,download:e`
    flex-shrink: 0;
    opacity: 0;
    transition: opacity ${t.motionDurationMid};
  `,info:e`
    overflow: hidden;
    flex: 1;
    min-width: 0;
  `,name:e`
    overflow: hidden;

    font-size: ${t.fontSize};
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,progress:e`
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;

    height: 3px;

    background: ${t.colorPrimary};

    transition: width ${t.motionDurationMid} ease-out;
  `,progressTrack:e`
    position: absolute;
    inset-block-end: 0;
    inset-inline: 0;

    height: 3px;

    background: ${t.colorFillSecondary};
  `,size:e`
    margin-block-start: 2px;
    font-size: ${t.fontSizeSM};
    line-height: 1.4;
    color: ${t.colorTextTertiary};
  `,state:e`
    display: flex;
    gap: 8px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    color: ${t.colorTextSecondary};

    background: ${t.colorBgContainer};
  `,uploadCard:e`
    position: relative;

    overflow: hidden;
    display: flex;
    gap: 12px;
    align-items: center;

    box-sizing: border-box;
    width: 100%;
    padding-block: 10px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    color: ${t.colorText};

    background: ${t.colorBgContainer};
  `,uploadMeta:e`
    overflow: hidden;

    margin-block-start: 2px;

    font-size: ${t.fontSizeSM};
    line-height: 1.4;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Gt=()=>()=>{},K=(0,U.memo)(({node:e,uploadTracker:t})=>{let{t:n}=r([`editor`,`file`]),{fileUrl:i,message:a,name:o,size:s,status:c}=e,l=t?e.getKey?.():void 0,u=(0,U.useSyncExternalStore)(t&&l!==void 0?t.subscribe:Gt,()=>t&&l!==void 0?t.getSnapshot(l):void 0,()=>void 0);if((0,U.useEffect)(()=>{if(!(!t||l===void 0)){if(c!==`pending`){t.releaseNode(l);return}return t.bindNode(l,o),()=>t.releaseNode(l)}},[o,l,c,t]),c===`pending`){let e=u?.uploadState,t=Math.max(0,Math.min(100,e?.progress||0)),r=u?.status===`uploading`?Math.min(99,Math.round(t)):t,i=u?.file.size||s,a=u?.status===`processing`||u?.status===`success`?n(`file.processing`):u?.status===`uploading`?n(`file.uploadingProgress`,{progress:r}):n(`file.preparing`),c=[i?e?`${ge(t/100*i)} / ${ge(i)}`:ge(i):void 0,u?.status===`uploading`&&e?.speed?me(e.speed):void 0,u?.status===`uploading`&&e?.restTime?n(`file:uploadDock.body.item.restTime`,{time:_e(e.restTime)}):void 0].filter(Boolean);return(0,W.jsxs)(`div`,{className:G.uploadCard,children:[(0,W.jsx)(Le,{fileName:o,fileType:u?.file.type,size:36}),(0,W.jsxs)(`div`,{className:G.info,children:[(0,W.jsx)(`div`,{className:G.name,children:o}),(0,W.jsx)(`div`,{className:G.uploadMeta,children:[a,...c].filter(Boolean).join(` · `)})]}),(0,W.jsx)(`div`,{"aria-label":a,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":r,className:G.progressTrack,role:`progressbar`,children:(0,W.jsx)(`div`,{className:G.progress,style:{width:`${r}%`}})})]})}return c===`error`?(0,W.jsx)(`div`,{className:G.state,children:n(`file.error`,{message:a||`Unknown error`})}):(0,W.jsxs)(`div`,{className:G.card,children:[(0,W.jsx)(Le,{fileName:o,size:36}),(0,W.jsxs)(`div`,{className:G.info,children:[(0,W.jsx)(`div`,{className:G.name,children:o}),typeof s==`number`&&s>0?(0,W.jsx)(`div`,{className:G.size,children:ge(s)}):null]}),(0,W.jsx)(`div`,{className:G.download,"data-lobehub-file-download":``,children:(0,W.jsx)(d,{"aria-label":`Download`,icon:E,size:`small`,variant:`filled`,onClick:e=>{e.stopPropagation(),e.preventDefault(),i&&nt(i)}})})]})}),K.displayName=`LinearFileCard`,Kt=({handleUpload:e,theme:t})=>{let[n]=Oe(),r=(0,U.useRef)(null);r.current||=Ut();let i=r.current,a=(0,U.useCallback)(async t=>{It(t);let n=i.start(t);try{let r=await e(t,(e,t)=>{i.update(n,e,t)});return i.finish(n),r}catch(e){throw i.update(n,`error`),i.finish(n),e}},[e,i]);return(0,U.useLayoutEffect)(()=>{n.registerPlugin(He),n.registerPlugin(We,{decorator:e=>(0,W.jsx)(K,{node:e,uploadTracker:i}),handleUpload:a,theme:t})},[n,a,t,i]),null},Kt.displayName=`LinearFilePlugin`})),Jt,Yt=e((()=>{Te(),Jt=e=>{let t=e.getLexicalEditor?.();if(!t)return;let n=e=>{let n=e.target;if(!(n instanceof Element)||!n.closest(`[data-lexical-decorator="true"]`)||n.closest(`[data-lobehub-file-download]`))return;let r;t.read(()=>{let e=xe(n);e?.getType?.()===`file`&&(r=e.__fileUrl)}),r&&window.open(r,`_blank`,`noopener,noreferrer`)},r=null,i=t.registerRootListener((e,t)=>{t&&r===t&&(r.removeEventListener(`click`,n,!0),r=null),e&&(e.addEventListener(`click`,n,!0),r=e)});return()=>{r&&=(r.removeEventListener(`click`,n,!0),null),i()}}})),Xt,Zt,Qt,$t,en=e((()=>{Xt=t(c()),ye(),Qe(),Ht(),Zt=e=>{let t=ve(e=>e.uploadWithProgress);return(0,Xt.useCallback)(async(n,r)=>{let i=Nt(n);if(i)return tt(i.url,i.fileId),{url:i.url};let a=await t({file:n,onStatusUpdate:e=>{e.type!==`updateFile`||!e.value.status||r?.(e.value.status,e.value.uploadState)},skipCheckFileType:e,source:`page-editor`});if(!a)throw Error(`Upload returned empty result`);return tt(a.url,a.id),{url:a.url}},[t,e])},Qt=()=>Zt(!1),$t=()=>Zt(!0)})),tn,q,nn,rn,an,on,sn,cn,ln,un,J,dn=e((()=>{o(),L(),Ae(),x(),tn=t(pe()),q=t(c()),n(),mt(),kt(),qt(),Yt(),en(),nn=t(s()),h(),rn=_(({css:e})=>({fileWrapper:e`
    display: block !important;
    width: 100% !important;
    margin-block: 8px !important;
  `})),an=[qe,...ht({linkPlugin:ze}),Be],on=[`json`,`markdown`],sn=30,cn=16,ln=e=>{let t=e.dataTypeMap;return t?t instanceof Map?[...t.keys()].sort():Object.keys(t).sort():[]},un=e=>{let t=ln(e);return{dataSourceTypes:t,hasLexicalEditor:!!e.getLexicalEditor?.(),isReady:!!e.getLexicalEditor?.()&&on.every(e=>t.includes(e))}},J=(0,q.memo)(({contentChangeLockRef:e,contentStyle:t,disabled:n,editable:i=!0,editor:a,extraPlugins:o,floatingToolbar:s=!0,getPopupContainer:c,mentionOption:l,onContentChange:u,onInit:d,onPressEnter:f,placeholder:p,plugins:m,slashItems:h,style:g,toolbarExtraItems:_})=>{let{t:v}=r(`file`),y=Fe(a),b=Qt(),x=$t(),ee=(0,q.useCallback)(async()=>null,[]),S=p||v(`pageEditor.editorPlaceholder`),C=(0,q.useMemo)(()=>({cursor:n?`not-allowed`:void 0,maxWidth:`100%`,minWidth:0,opacity:n?.65:void 0,overflow:`hidden`,pointerEvents:n?`none`:void 0,width:`100%`}),[n]),w=(0,q.useMemo)(()=>{if(m)return m;let e=I.withProps(Ke,{defaultBlockImage:!0,handleUpload:b,onPickFile:void 0}),t=I.withProps(Kt,{handleUpload:x,theme:{file:rn.fileWrapper}}),r=o?[...o,...an,e,t]:[...an,e,t];return s&&i&&!n?[...r,I.withProps(Ue,{children:(0,nn.jsx)(Ot,{floating:!0,editor:a,editorState:y,extraItems:_})})]:r},[m,n,i,a,y,o,s,x,b,ee,_]);(0,q.useEffect)(()=>(a&&(window.__editor=a),()=>{window.__editor=void 0}),[a]),(0,q.useEffect)(()=>{if(!a)return;let e=Jt(a);return()=>e?.()},[a]);let T=(0,q.useRef)(d),E=(0,q.useRef)(null);(0,q.useEffect)(()=>{T.current=d},[d]),(0,q.useEffect)(()=>{if(!d)return;let e=0,t,n=!1,r=()=>{if(n)return;let i=un(a);if(i.isReady){E.current!==a&&(E.current=a,T.current?.(a));return}if(e>=sn){console.warn(`[InternalEditor] onInit delayed because editor is not ready:`,i);return}e+=1,t=setTimeout(r,cn)};return r(),()=>{n=!0,t&&clearTimeout(t)}},[a,d]);let D=(0,q.useRef)(void 0),O=(0,q.useRef)(u);return O.current=u,(0,q.useEffect)(()=>{if(!a)return;let t=a.getLexicalEditor?.();if(!t)return;D.current=a.getDocument(`json`);let r=t.registerUpdateListener(({dirtyElements:t,dirtyLeaves:r})=>{if(t.size===0&&r.size===0)return;let i=a.getDocument(`json`);if(!(0,tn.default)(i,D.current)){if(D.current=i,e?.current||n)return;O.current?.()}});return()=>{r()}},[e,n,a]),(0,nn.jsx)(`div`,{style:C,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:(0,nn.jsx)(I,{content:``,editable:i&&!n,editor:a,getPopupContainer:c,mentionOption:l,placeholder:S,plugins:w,slashOption:h?{items:h}:void 0,type:`text`,style:{paddingBottom:32,...g,...t},...f?{onPressEnter:f}:{}})})}),J.displayName=`InternalEditor`})),Y,fn,pn=e((()=>{le(),Y=t(c()),n(),p(),fn=(0,Y.memo)(({isDirty:e,message:t,onAutoSave:n,title:i})=>{let{t:a}=r(`file`),o=m(e),s=(0,Y.useRef)(o),c=(0,Y.useRef)(!1);return s.current=o,(0,Y.useEffect)(()=>{o.state!==`blocked`||c.current||(c.current=!0,(async()=>{let e=l.loading(a(`pageEditor.saving`));try{if(!(await n?.()??!0)){e.close(),l.error({description:a(`networkError`),duration:2e3}),s.current?.reset?.();return}e.close(),s.current?.proceed?.()}catch(t){let n=t instanceof Error&&t.message?t.message:a(`networkError`);e.close(),l.error({description:n,duration:2e3}),s.current?.reset?.()}finally{c.current=!1}})())},[o.state,t,n,a]),(0,Y.useEffect)(()=>{if(!e)return;let n=e=>{e.preventDefault(),e.returnValue=t};return window.addEventListener(`beforeunload`,n),()=>{window.removeEventListener(`beforeunload`,n)}},[e,t]),null}),fn.displayName=`UnsavedChangesGuard`})),X,Z,mn,hn,gn=e((()=>{de(),X=t(c()),n(),a(),ut(),Je(),pt(),ct(),st(),dn(),pn(),Z=t(s()),mn=()=>(0,Z.jsx)(`div`,{style:{paddingBlock:24},children:(0,Z.jsx)(fe,{active:!0,paragraph:{rows:8}})}),hn=(0,X.memo)(({editor:e,documentId:t,autoSave:n=!0,sourceType:a=`page`,topicId:o,onContentChange:s,onInit:c,unsavedChangesGuard:l,style:u,...d})=>{let{t:f}=r([`file`,`ui`]),p=i(R);p(`activeDocumentId`,t),p(`editor`,e);let[m,h,g,_]=R(e=>[e.onEditorInit,e.handleContentChange,e.useFetchDocument,e.performSave]);ft((0,X.useCallback)(async()=>{h(),await _(t,void 0,{saveSource:`manual`})},[t,h,_]));let v=(0,X.useCallback)(e=>{m(e).finally(()=>{c?.(e)})},[m,c]),{data:y,error:b,isLoading:x,mutate:ee}=g(t,{autoSave:n,editor:e,sourceType:a,topicId:o}),S=(y?.updatedAt)?.toISOString(),C=R(lt.isDocumentLoading(t)),w=R(lt.isDirty(t)),T=l?.enabled??!1,E=(0,X.useCallback)(async()=>{if(!T)return!0;h(),await _(t,void 0,{saveSource:`system`});let e=R.getState().documents[t];if(e?.saveBlockedByLock)throw Error(f(`pageEditor.editMode.lockedBySomeone`));return e?!e.isDirty:!0},[t,h,_,T,f]),D=(0,Z.jsx)(fn,{isDirty:T&&w,message:l?.message||f(`form.unsavedWarning`,{ns:`ui`}),title:l?.title||f(`form.unsavedChanges`,{ns:`ui`}),onAutoSave:E}),O=()=>{h(),s?.()},k=!!e?.getLexicalEditor(),A=(0,X.useRef)(!1),j=(0,X.useRef)(0),M=(0,X.useRef)(null),N=(0,X.useRef)(void 0);return(0,X.useEffect)(()=>{if(e&&k&&!C&&M.current!==t){let n=++j.current;M.current=t,N.current=S,A.current=!0,m(e).finally(()=>{c?.(e),queueMicrotask(()=>{j.current===n&&(A.current=!1)})})}},[t,e,k,C,m,c,S]),(0,X.useEffect)(()=>{if(!e||!k||C||!S||M.current!==t||N.current===S||w)return;let n=++j.current;N.current=S,A.current=!0,m(e).finally(()=>{c?.(e),queueMicrotask(()=>{j.current===n&&(A.current=!1)})})},[t,e,w,k,C,m,c,S]),b&&C&&!x?(0,Z.jsxs)(Z.Fragment,{children:[D,(0,Z.jsx)(Ye,{error:b,variant:`page`,onRetry:()=>{ee()}})]}):y===null?(0,Z.jsxs)(Z.Fragment,{children:[D,(0,Z.jsx)(dt,{})]}):C?(0,Z.jsxs)(Z.Fragment,{children:[D,(0,Z.jsx)(mn,{})]}):e?(0,Z.jsxs)(Z.Fragment,{children:[D,b&&(0,Z.jsx)(Ye,{error:b,variant:`inline`,onRetry:()=>{ee()}}),(0,Z.jsx)(J,{contentChangeLockRef:A,editor:e,placeholder:d.placeholder||f(`pageEditor.editorPlaceholder`),style:u,onContentChange:O,onInit:v,...d})]}):D}),hn.displayName=`DocumentIdMode`})),Q,_n,vn,yn,bn=e((()=>{Q=t(c()),n(),at(),dn(),_n=t(s()),vn=(e,t)=>{let n=t.editorData&&typeof t.editorData==`object`&&Object.keys(t.editorData).length>0;try{return n?(e.setDocument(`json`,JSON.stringify(t.editorData)),!0):t.content?.trim()?(e.setDocument(`markdown`,t.content,{keepId:!0}),!0):(e.setDocument(`json`,JSON.stringify(ot)),!0)}catch(e){return console.error(`[loadEditorContent] Error loading content:`,e),!1}},yn=(0,Q.memo)(({contentRevision:e,editor:t,editorData:n,entityId:i,onContentChange:a,onInit:o,style:s,...c})=>{let{t:l}=r(`file`),u=(0,Q.useRef)(!1),d=(0,Q.useRef)(!1),f=(0,Q.useRef)(0),p=(0,Q.useRef)(void 0),m=(0,Q.useRef)(void 0),h=i===void 0||p.current!==i,g=m.current!==e,_=h||g,v=(0,Q.useCallback)(t=>{let r=++f.current;d.current=!0,vn(t,n)&&(p.current=i,m.current=e),queueMicrotask(()=>{f.current===r&&(d.current=!1)})},[e,n,i]),y=(0,Q.useCallback)(e=>{u.current=!0,_&&v(e),o?.(e)},[v,o,_]);return(0,Q.useEffect)(()=>{!t||!u.current||!_||v(t)},[t,v,_]),t?(0,_n.jsx)(`div`,{style:{position:`relative`,...s},children:(0,_n.jsx)(J,{contentChangeLockRef:d,editor:t,placeholder:c.placeholder||l(`pageEditor.editorPlaceholder`),onContentChange:a,onInit:y,...c})}):null}),yn.displayName=`EditorDataMode`})),xn,$,Sn,Cn=e((()=>{xn=t(c()),Xe(),gn(),bn(),dn(),$=t(s()),Sn=(0,xn.memo)(({editor:e,documentId:t,editorData:n,entityId:r,...i})=>t?(0,$.jsx)(Ze,{alertTitle:`Editor Error`,variant:`alert`,children:(0,$.jsx)(hn,{documentId:t,editor:e,...i})}):n?(0,$.jsx)(Ze,{alertTitle:`Editor Error`,variant:`alert`,children:(0,$.jsx)(yn,{editor:e,editorData:n,entityId:r,...i})}):e?(0,$.jsx)(Ze,{alertTitle:`Editor Error`,variant:`alert`,children:(0,$.jsx)(J,{editor:e,...i})}):null),Sn.displayName=`EditorCanvas`})),wn=e((()=>{vt(),St(),Et(),Cn(),kt(),gt(),en()}));export{_t as _,qt as a,Ht as c,Vt as d,Tt as f,vt as g,St as h,K as i,Bt as l,xt as m,Sn as n,Rt as o,Et as p,Cn as r,Mt as s,wn as t,zt as u};