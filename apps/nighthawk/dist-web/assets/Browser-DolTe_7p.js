import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ba as i,Er as a,Fi as o,O as s,Ti as c,Vr as l,_i as u,cs as d,ls as f,ri as p,zr as m}from"./app-const-Bl9rlHwj.js";import{B as h,Xr as g}from"./dialog-BebLzVzY.js";import{a as _,t as v}from"./es-CVJR_g25.js";import{Qu as y,x as b}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as x}from"./base-ui-BAv0gRbN.js";import{Or as S,t as C}from"./es-LELdnrjB.js";import{Gt as w,qt as T}from"./serverConfig-CmLVLry1.js";import{i as E,o as D}from"./ipc-Ds4MIPxw.js";import{t as O}from"./src-Cw6BG0HN.js";import"./store-DKx7p_l_.js";import{n as k}from"./file-CNldqoil.js";import{Kt as A}from"./tool-BJJaXV35.js";import{d as j,u as M}from"./Acceptance-C-ghAVw4.js";import{n as N}from"./browserWebviewRegistry-ZaKar2GK.js";import{electronBrowserSidebarService as P,t as F}from"./browserSidebar-C7xAFr-D.js";var I,L,R,z=e((()=>{a(),I=t(f()),L=t(d()),R={Brave:o,Chrome:u,Chromium:u,Firefox:c,"Mobile Safari":l,Opera:p,Safari:l,Samsung:m},(0,I.memo)(({browser:e,className:t,style:n,size:r})=>{let i=R[e];return i?(0,L.jsx)(i,{className:t,size:r,style:n}):null})})),B,V,H=e((()=>{B=`lobechat:desktop:browser-import-banner:dismissed:v1`,V=`https://www.bing.com`})),U,W,G,K=e((()=>{s(),E(),U=t(f()),F(),W=(e,t)=>({attached:!1,canGoBack:!1,canGoForward:!1,isLoading:!1,sessionId:e,title:``,url:t??``}),G=(e,t)=>{let n=(0,U.useMemo)(()=>W(e??`browser`,t),[t,e]),[r,i]=(0,U.useState)(n);return(0,U.useEffect)(()=>{i(n)},[n]),D(`browserSidebarStateChanged`,t=>{t.sessionId===e&&i(t)}),(0,U.useEffect)(()=>{},[e]),r}})),q,J,Y,X=e((()=>{H(),q=/^https?:\/\//i,J=/^(?:localhost|127(?:\.\d{1,3}){3}|\[?::1\]?)(?::\d+)?(?:[/?#].*)?$/i,Y=e=>{let t=e?.trim();if(!t)return V;if(t===`about:blank`||q.test(t))return t;if(J.test(t))return`http://${t}`;if(t.includes(` `)||!t.includes(`.`)){let e=new URL(`https://www.bing.com/search`);return e.searchParams.set(`q`,t),e.toString()}return`https://${t}`}})),Z,Q,$;e((()=>{s(),O(),C(),x(),v(),b(),Z=t(f()),n(),z(),i(),M(),F(),N(),A(),k(),w(),H(),K(),X(),Q=t(d()),_(({css:e,cssVar:t})=>({loadingBar:e`
    pointer-events: none;

    position: absolute;
    z-index: 3;

    /* Anchored to the toolbar's bottom border. */
    inset-block-end: -1px;
    inset-inline: 0;

    overflow: hidden;

    height: 2px;

    &::after {
      content: '';

      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;

      width: 36%;

      background: ${t.colorInfo};

      animation: browser-loading-progress 1.15s ease-in-out infinite;
    }

    @keyframes browser-loading-progress {
      from {
        transform: translateX(-110%);
      }

      to {
        transform: translateX(310%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &::after {
        width: 100%;
        animation: none;
      }
    }
  `,container:e`
    position: relative;

    overflow: hidden;
    flex: 1;

    width: 100%;
    min-height: 0;

    background: ${t.colorBgContainer};
  `,toolbar:e`
    position: relative;

    flex-shrink: 0;

    min-height: 56px;
    padding-inline: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,address:e`
    flex: 1;
    min-width: 0;
    max-width: 720px;

    /* The filled variant keeps its tinted fill while focused; lift it to the
       container surface so the focus ring reads as an editable field. Doubling
       the class outranks antd's own :focus rule. */
    &&:focus {
      background: ${t.colorBgContainer};
    }
  `,importBanner:e`
    container-type: inline-size;
    flex-shrink: 0;
    flex-wrap: wrap;

    min-height: 72px;
    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorBgContainer};
  `,importCopy:e`
    flex: 1;
    min-width: 0;
  `,importActions:e`
    margin-inline-start: auto;

    @container (max-width: 480px) {
      flex-basis: 100%;
      justify-content: flex-end;
      margin-inline-start: 44px;
    }
  `,toolbarActions:e`
    margin-inline-start: auto;
  `,viewport:e`
    position: absolute;
    inset: 0;
  `})),$=(0,Z.memo)(e=>{let{agentId:t,composerTarget:n,onMetadataChange:i,sessionId:a}=e,{t:o}=r(`chat`),s=G(a),[c,l]=(0,Z.useState)(``),[u,d]=(0,Z.useState)(!1),[f,p]=(0,Z.useState)(!1),[m,_]=(0,Z.useState)(!1),[v,b]=(0,Z.useState)(!1),[x,C]=j(B,!1),w=T(e=>e.status.workingSidebarBrowserRequest),E=T(e=>e.clearBrowserTabRequest),D=(0,Z.useRef)(void 0),O=(0,Z.useRef)(null);(0,Z.useEffect)(()=>{i?.({faviconUrl:s.faviconUrl,title:s.title,url:s.url})},[i,s.faviconUrl,s.title,s.url]),(0,Z.useEffect)(()=>{},[o]),(0,Z.useEffect)(()=>{O.current},[a]),(0,Z.useEffect)(()=>{u||l(s.url===`about:blank`?``:s.url)},[u,s.url]);let k=async e=>{try{let t=await e();t.success||h.error(t.error||o(`workingPanel.browser.actions.failed`))}catch(e){console.error(`[BrowserSidebar] Browser action failed:`,e),h.error(o(`workingPanel.browser.actions.failed`))}},A=e=>{let t=Y(e);l(t),k(()=>P.navigate({sessionId:a,url:t}))};return(0,Z.useEffect)(()=>{},[a]),(0,Z.useEffect)(()=>{!w||D.current===w.nonce||(D.current=w.nonce,A(w.url),E())},[w?.nonce]),(0,Q.jsx)(g,{height:`100%`,width:`100%`,children:(0,Q.jsx)(S,{description:o(`workingPanel.browser.desktopOnly`),icon:y})})}),$.displayName=`BrowserPane`}))();export{$ as default};