import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{Ba as n,Ia as r,cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,bt as c}from"./dialog-BebLzVzY.js";import{D as l}from"../vendor/vendor-react-CBcx1o7d.js";import{$t as u,a as d,b as f,t as p}from"./es-CVJR_g25.js";import{Qh as m,Xh as h,iu as g,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{i as v,t as y}from"./base-ui-BAv0gRbN.js";import{t as b}from"./es-LELdnrjB.js";import{a as x,i as S,n as C,t as w}from"./workspaceAwarePath-DIBsOTQc.js";import{n as T,r as E}from"./ToggleLeftPanelButton-WObAN-W-.js";import{n as D,t as O}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as k,t as A}from"./navigation-D3in5vhl.js";import{n as j,t as M}from"./appNavigate-IT2h-tCn.js";var N,P,F,I,L=e((()=>{y(),_(),N=t(a()),S(),n(),j(),C(),P=t(i()),F=`lobe-back-button`,I=(0,N.memo)(({to:e=`/`,onClick:t,...n})=>{let i=w(e,x());return(0,P.jsx)(`a`,{href:i,onClick:e=>{t?.(e),!e.defaultPrevented&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),M(i,{escape:!0})))},children:(0,P.jsx)(c,{icon:m,id:F,size:r,...n})})})})),R,z,B,V,H,U,W=e((()=>{b(),y(),f(),p(),_(),R=t(a()),z=t(l()),n(),O(),A(),L(),E(),B=t(i()),V=`ant`,H=d(({css:e,cssVar:t})=>({breadcrumb:e`
    ol {
      align-items: center;
    }
    .${V}-breadcrumb-separator {
      margin-inline: 4px;
    }
    .${V}-breadcrumb-link {
      display: flex !important;
      align-items: center !important;
      font-size: 12px;
      color: ${t.colorTextDescription};
    }
    a.${V}-breadcrumb-link {
      &:hover {
        color: ${t.colorText};
      }
    }
  `,container:e`
    overflow: hidden;
  `})),U=(0,R.memo)(({left:e,right:t,backTo:n=`/`,showBack:i=!0,breadcrumb:a=[],homeItem:c,showTogglePanelButton:l=!0})=>{let d=D(),f=e?(0,B.jsxs)(s,{horizontal:!0,align:`center`,flex:1,gap:2,style:{overflow:`hidden`},children:[i&&(0,B.jsx)(I,{size:r,to:n}),e&&typeof e==`string`?(0,B.jsx)(v,{ellipsis:!0,fontSize:16,weight:500,children:e}):e]}):(0,B.jsx)(s,{flex:1,paddingInline:6,children:(0,B.jsx)(u,{className:H.breadcrumb,separator:(0,B.jsx)(o,{icon:h}),items:[c??{href:`/`,title:(0,B.jsx)(o,{icon:g})},...a].map(e=>({...e,onClick:t=>{if(k(t))return;let n=e.href;n&&(t.preventDefault(),t.stopPropagation(),(0,z.flushSync)(()=>d(n)))}}))})});return(0,B.jsxs)(s,{horizontal:!0,align:`center`,className:H.container,flex:`none`,justify:`space-between`,padding:`8px 6px`,children:[f,(0,B.jsxs)(s,{horizontal:!0,align:`center`,gap:2,justify:`flex-end`,children:[l&&(0,B.jsx)(T,{}),t]})]})})}));export{L as i,W as n,F as r,U as t};