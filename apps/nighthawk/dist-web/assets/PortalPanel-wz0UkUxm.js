import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{Ba as n,Pa as r,cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Qr as o}from"./dialog-BebLzVzY.js";import{_ as s,a as c,l,s as u,t as d}from"./es-CVJR_g25.js";import{ri as f,t as p}from"./es-LELdnrjB.js";import{la as m}from"./model-runtime-client-tog6-eyE.js";import{Gt as h,Vt as ee,nn as g,qt as _}from"./serverConfig-CmLVLry1.js";import{Kt as v,Yt as te}from"./tool-BJJaXV35.js";import{Dt as y,Et as b,s as x,t as S,u as C}from"./selectors-BsEaCsu0.js";import{Et as w,Tt as T}from"./index-Djd-5Nq9.js";import{f as E,n as D,p as O,t as k}from"./router-C_YfN3X9.js";var A,j,M,N,P,F,I=e((()=>{n(),y(),A={[b.Acceptance]:600,[b.AcceptanceCheck]:600,[b.AgentDetail]:600,[b.Artifact]:600,[b.TaskDetail]:600,[b.Thread]:600,[b.ToolUI]:600,[b.Topic]:600},j={[b.Acceptance]:840,[b.AcceptanceCheck]:840},M=(e,t,n)=>Math.min(Math.max(e,t),n),N=e=>e??b.Home,P=e=>A[N(e)]??400,F=({legacyWidth:e,viewType:t,widths:n})=>{let i=N(t),a=j[i]??e??400;return M(n?.[i]||a,P(i),r)}})),L,R,z,B,V,H=e((()=>{p(),d(),L=t(m()),R=t(a()),n(),I(),v(),S(),y(),h(),ee(),z=t(i()),B=c(({css:e,cssVar:t})=>({content:e`
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100%;
    max-height: 100%;

    background: ${t.colorBgContainer};
  `,drawer:e`
    z-index: 10;
    height: 100%;
    background: ${t.colorBgContainer};
  `})),V=(0,R.memo)(({children:e})=>{let[t,n,i]=te(e=>[x.showStandalonePortal(e),x.currentViewType(e),C.showThread(e)]),a=n??(i?b.Thread:null),[o,c,l]=_(e=>[g.portalWidth(e),g.portalWidths(e),e.updateSystemStatus]),u=F({legacyWidth:o,viewType:a,widths:c}),[d,p]=(0,R.useState)(u);d!==u&&p(u);let{lg:m}=s();return(0,z.jsx)(f,{className:B.drawer,defaultSize:{width:d},expand:t,expandable:!1,maxWidth:r,minWidth:P(a),mode:m?`fixed`:`float`,placement:`right`,showHandleWhenCollapsed:!1,showHandleWideArea:!1,size:{height:`100%`,width:u},classNames:{content:B.content},onSizeChange:(e,t)=>{if(!t)return;let n=typeof t.width==`string`?Number.parseInt(t.width):t.width;n&&((0,L.default)(n,u)||(p(n),l({portalWidths:{[a??b.Home]:n}})))},children:(0,z.jsx)(R.Activity,{mode:t?`visible`:`hidden`,name:`AgentPortal`,children:e})})})})),U,W,G,K=e((()=>{p(),d(),U=t(i()),W=u`
  :has(.portal-artifact) {
    overflow: hidden;
    padding-block-end: 12px;
  }
`,G=({children:e})=>(0,U.jsx)(o,{className:l(W,`portal-body`),height:`100%`,style:{flex:1,height:0,position:`relative`},width:`100%`,children:e})})),q,J,Y=e((()=>{D(),K(),q=t(i()),J=()=>(0,q.jsx)(k,{renderBody:e=>(0,q.jsx)(G,{children:e})})})),X=e((()=>{O()})),Z,Q,$,ne=e((()=>{Z=t(a()),w(),Y(),X(),Q=t(i()),$=(0,Z.memo)(({mobile:e})=>(0,Q.jsx)(Z.Suspense,{fallback:(0,Q.jsx)(T,{header:!1,variant:`list`}),children:(0,Q.jsx)(e?E:J,{})})),$.displayName=`PortalPanel`}));export{F as a,H as i,ne as n,I as o,V as r,$ as t};