import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Qr as o,bt as s}from"./dialog-BebLzVzY.js";import{a as c,h as l}from"../vendor/vendor-react-CBcx1o7d.js";import{a as u,c as d,l as f,t as p}from"./es-CVJR_g25.js";import{O as ee,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as h}from"./base-ui-BAv0gRbN.js";import{t as g}from"./es-LELdnrjB.js";import{la as te}from"./model-runtime-client-tog6-eyE.js";import{t as ne}from"./browser-C6epcJfA.js";import{Kt as re,Yt as ie,j as _,k as v}from"./tool-BJJaXV35.js";import{n as ae,t as oe}from"./markdownToTxt-oGIVcT3Y.js";import{Xo as se,Yo as ce}from"./index-Djd-5Nq9.js";import{n as y,t as b}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{t as le}from"./Conversation-B6Z_LIMP.js";var x,S,C,w=e((()=>{p(),x=u(({css:e,cssVar:t})=>({container:e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset-block: 16px 120px;
    inset-inline-end: 8px;

    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
  `,hoverArea:e`
    pointer-events: auto;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: end;
  `,previewPanel:e`
    pointer-events: none;

    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: 0;
    transform-origin: 100% 50%;
    transform: translateY(-50%) scale(0.96);

    overflow: hidden;
    display: flex;

    min-width: 240px;
    max-width: 360px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 8px;

    opacity: 0;
    background: ${t.colorBgElevated};
    box-shadow:
      0 6px 16px 0 rgb(0 0 0 / 8%),
      0 3px 6px -4px rgb(0 0 0 / 12%),
      0 9px 28px 8px rgb(0 0 0 / 5%);

    transition:
      opacity ${t.motionDurationMid} ease,
      transform ${t.motionDurationMid} ease;
  `,previewPanelVisible:e`
    pointer-events: auto;
    transform: translateY(-50%) scale(1);
    opacity: 1;
  `,rail:e`
    scrollbar-width: none;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;

    max-height: 50vh;

    transition: opacity ${t.motionDurationMid} ease;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  `,railFaded:e`
    pointer-events: none;
    opacity: 0;
  `})),S=u(({css:e,cssVar:t})=>({indicator:e`
    cursor: pointer;

    flex-shrink: 0;

    min-width: 5px;
    height: 12px;
    padding-block: 5px;
  `,indicatorContent:e`
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: ${t.colorFillSecondary};
  `,indicatorContentActive:e`
    background: ${t.colorPrimary};
  `})),C=u(({css:e,cssVar:t})=>({dash:e`
    flex-shrink: 0;
    height: 2px;
    border-radius: 2px;
    background: ${t.colorFillSecondary};
  `,dashActive:e`
    background: ${t.colorPrimary};
  `,item:e`
    cursor: pointer;

    padding-block: 6px;
    padding-inline: 12px;
    border-radius: 6px;

    color: ${t.colorTextSecondary};

    transition: background-color ${t.motionDurationFast} ease;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,itemActive:e`
    color: ${t.colorPrimary};
  `,label:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: 13px;
    line-height: 1.4;
    text-align: end;
    text-overflow: ellipsis;
    word-break: break-word;
  `,labelActive:e`
    font-weight: 500;
    color: ${t.colorPrimary};
  `,list:e`
    scrollbar-width: thin;

    overflow-y: auto;

    max-height: 60vh;
    padding-block: 4px;
    padding-inline: 4px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: ${t.colorFillSecondary};
    }
  `}))})),T,E,D,ue=e((()=>{p(),T=t(a()),n(),w(),E=t(i()),D=(0,T.memo)(({id:e,width:t,virtuosoIndex:n,position:i,activePosition:a,onJump:o})=>{let{t:s}=r(`chat`),c=S,l=a===i;return(0,E.jsx)(`div`,{"aria-current":l?`true`:void 0,"aria-label":s(`minimap.jumpToMessage`,{index:i+1}),className:c.indicator,id:e,style:{width:t},onClick:()=>o(n),children:(0,E.jsx)(`div`,{className:f(c.indicatorContent,l&&c.indicatorContentActive)})})}),D.displayName=`MinimapIndicator`})),O,k,A,de=e((()=>{g(),p(),O=t(a()),n(),w(),k=t(i()),A=(0,O.memo)(({indicators:e,activePosition:t,onJump:n})=>{let{t:i}=r(`chat`),a=C;return(0,k.jsx)(o,{className:a.list,gap:2,children:e.map(({id:e,preview:r,virtuosoIndex:s,width:c},l)=>{let u=t===l,d=r||i(`minimap.emptyPreview`);return(0,k.jsxs)(o,{horizontal:!0,align:`center`,"aria-current":u?`true`:void 0,className:f(a.item,u&&a.itemActive),gap:10,justify:`flex-end`,onClick:()=>n(s),children:[(0,k.jsx)(`span`,{className:f(a.label,u&&a.labelActive),children:d}),(0,k.jsx)(`div`,{className:f(a.dash,u&&a.dashActive),style:{width:c}})]},e)})})}),A.displayName=`MinimapPreview`})),j,M,N,P,F,I=e((()=>{oe(),j=5,M=16,N=80,P=e=>{let t=e?.length??0,n=Math.min(Math.sqrt(t/N),1);return j+(M-j)*n},F=e=>{if(!e)return``;let t=ae(e).replaceAll(/\s+/g,` `).trim();return t?t.slice(0,100)+(t.length>100?`…`:``):``}})),L,R,z,B,V,fe=e((()=>{L=t(ne()),R=t(te()),z=t(a()),le(),I(),B=(0,L.default)(`lobe-react:chat-minimap`),V=()=>{let e=v(_.virtuaScrollMethods),t=v(_.activeIndex),n=v(_.displayMessages,R.default),r=(0,z.useMemo)(()=>n.reduce((e,t,n)=>(t.role===`user`&&e.push({id:t.id,preview:F(t.content),virtuosoIndex:n,width:P(t.content)}),e),[]),[n]),i=(0,z.useMemo)(()=>{let e=new Map;return r.forEach(({virtuosoIndex:t},n)=>{e.set(t,n)}),e},[r]);return{activeIndicatorPosition:(0,z.useMemo)(()=>{if(t===null)return null;B(`> activeIndex`,t),B(`> indicatorIndexMap`,i);let e=i.get(t);if(e!==void 0)return e;let n=null;for(let[e,i]of r.entries())if(i.virtuosoIndex<=t)n=e;else break;return n},[t,i,r]),handleJump:(0,z.useCallback)(t=>{e?.scrollToIndex(t,{align:`start`,smooth:!0})},[e]),indicators:r}}})),H,U,W,G,pe=e((()=>{g(),p(),H=t(a()),ue(),de(),w(),fe(),I(),U=t(i()),W=120,G=(0,H.memo)(()=>{let e=x,[t,n]=(0,H.useState)(!1),r=(0,H.useRef)(null),{indicators:i,activeIndicatorPosition:a,handleJump:s}=V();return i.length<=3?null:(0,U.jsx)(o,{className:e.container,children:(0,U.jsxs)(o,{className:e.hoverArea,onMouseEnter:()=>{r.current&&=(clearTimeout(r.current),null),n(!0)},onMouseLeave:()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{n(!1),r.current=null},W)},children:[(0,U.jsx)(o,{className:f(e.rail,t&&e.railFaded),role:`group`,children:i.map(({id:e,width:t,virtuosoIndex:n},r)=>(0,U.jsx)(D,{activePosition:a,id:e,position:r,virtuosoIndex:n,width:t,onJump:s},e))}),(0,U.jsx)(`div`,{"aria-hidden":!t,className:f(e.previewPanel,t&&e.previewPanelVisible),children:(0,U.jsx)(A,{activePosition:a,indicators:i,onJump:e=>{s(e),r.current&&clearTimeout(r.current),n(!1)}})})]})})}),G.displayName=`ChatMinimap`})),K,q,J,Y,me=e((()=>{K=t(a()),c(),b(),re(),q=`comment`,J=`commentThread`,Y=e=>{let t=l(),n=y(),r=(0,K.useRef)(void 0);(0,K.useEffect)(()=>{if(!e)return;let i=new URLSearchParams(t.search),a=i.get(J);if(!a)return;let o=i.get(q)??a,s=`${e}:${a}:${o}`;if(r.current===s)return;r.current=s;let{openTopicComments:c,openTopicCommentThread:l}=ie.getState();c(e),l(e,a,void 0,void 0,o),i.delete(q),i.delete(J);let u=i.toString();n(`${t.pathname}${u?`?${u}`:``}${t.hash}`,{replace:!0})},[t.hash,t.pathname,t.search,n,e])}})),X,Z,Q,$,he=e((()=>{g(),h(),p(),m(),X=t(a()),ce(),Z=t(i()),Q=u(({css:e})=>({cancelIcon:e`
    position: absolute;
    z-index: 100;
    inset-block-start: 8px;
    inset-inline-end: 8px;
  `,container:e`
    position: absolute;
    z-index: 1100;
    inset-block-end: 16px;
    inset-inline-end: 20px;

    overflow: hidden;

    border: 1px solid ${d.colorSplit};
    border-radius: 8px;

    background: ${d.colorBgContainer};
    box-shadow: ${d.boxShadowSecondary};
  `,mobileContainer:e`
    inset-block-end: 8px;
    inset-inline-start: 8px;
  `,wrapper:e`
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, ${d.colorBgContainer} 0%, transparent),
        ${d.colorBgContainer} var(--gradient-stop, 140px)
      ),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='${d.colorFillTertiary}' %3E %3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  `,wrapperDark:e`
    --gradient-stop: 80px;
  `,wrapperLight:e`
    --gradient-stop: 140px;
  `})),$=(0,X.memo)(({mobile:e,children:t,show:n,onCancel:r,showCloseIcon:i=!0,width:a=422,height:c=`auto`,wrapper:l={},className:u,...d})=>{let p=se(),{className:m,...h}=l;return n&&(0,Z.jsxs)(o,{className:f(Q.container,e&&Q.mobileContainer,u),height:c,width:e?`calc(100% - 16px)`:a,...d,children:[i&&(0,Z.jsx)(s,{className:Q.cancelIcon,icon:ee,onClick:()=>r?.()}),(0,Z.jsx)(o,{horizontal:!0,gap:16,padding:`20px 20px 16px`,className:f(Q.wrapper,p?Q.wrapperDark:Q.wrapperLight,m),...h,children:t})]})})}));export{G as a,Y as i,he as n,pe as o,me as r,$ as t};