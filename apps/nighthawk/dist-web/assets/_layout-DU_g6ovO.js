import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,fa as a,ls as o}from"./app-const-Bl9rlHwj.js";import{Hr as s,Qr as c}from"./dialog-BebLzVzY.js";import{a as l,d as u}from"../vendor/vendor-react-CBcx1o7d.js";import{a as d,t as f}from"./es-CVJR_g25.js";import{Qh as p,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as h}from"./es-LELdnrjB.js";import{Xt as g,bi as _}from"./model-runtime-client-tog6-eyE.js";import{C as v,D as y,E as b,F as x,M as S,N as C,R as w,U as T,V as E}from"./serverConfig-CmLVLry1.js";import{a as D,i as O,n as k,t as A}from"./workspaceAwarePath-DIBsOTQc.js";import{n as j,r as M}from"./ToggleLeftPanelButton-WObAN-W-.js";import{n as N,t as P}from"./useActiveRouteParams-DJNAzHTc.js";import{a as F,o as I}from"./useProjectSkills-B_lHYxEP.js";import{i as L,n as R,o as z,r as B,s as V,t as H}from"./appNavigate-IT2h-tCn.js";import{n as U,t as W}from"./AgentDocumentsGroup-BNVbOHn6.js";var G,K,q,J,Y=e((()=>{g(),h(),f(),m(),G=t(o()),n(),O(),a(),U(),R(),L(),M(),k(),x(),S(),P(),F(),v(),y(),K=t(i()),q=d(({css:e,cssVar:t})=>({backLink:e`
    display: flex;
    gap: 2px;
    align-items: center;

    width: fit-content;
    padding-block: 3px;
    padding-inline: 4px 6px;
    border-radius: 6px;

    font-size: 12px;
    color: ${t.colorTextTertiary};
    text-decoration: none;

    background: transparent;

    transition:
      color 150ms ease,
      background 150ms ease;

    &:hover {
      color: ${t.colorTextSecondary};
      background: ${t.colorFillTertiary};
    }
  `,body:e`
    overflow-y: auto;
    flex: 1;
    min-height: 0;
  `})),J=(0,G.memo)(()=>{let{t:e}=r(`chat`),t=D(),{aid:n=``}=N(),i=_(b(T.getAgentMetaById(n)),e(`untitledAgent`)),a=A(`/agent/${n}`,t),o=b(E.isAgentHeterogeneousById(n)),l=I(n),u=b(e=>n?E.getAgencyConfigById(n)(e):void 0),d=w(u,{clientExecutionAvailable:!1,deviceRoutingAvailable:C(n),isHetero:o,workspaceScoped:b(e=>n?E.isWorkspaceAgentById(n)(e):!1)})===`device`&&u?.boundDeviceId?u.boundDeviceId:void 0,f=(0,K.jsxs)(c,{horizontal:!0,align:`center`,flex:`none`,justify:`space-between`,padding:`8px 6px`,children:[(0,K.jsxs)(`a`,{className:q.backLink,href:a,onClick:e=>{e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0||(e.preventDefault(),H(a,{escape:!0}))},children:[(0,K.jsx)(s,{icon:p,size:14}),e(`agentDocument.backToAgent`,{name:i})]}),(0,K.jsx)(j,{})]});return(0,K.jsx)(B,{body:(0,K.jsx)(c,{className:q.body,width:`100%`,children:(0,K.jsx)(W,{activeFilter:`documents`,deviceId:d,openMode:`route`,showFilterTabs:!1,showLocalProjectSkills:!1,style:{flex:1,minHeight:0},workingDirectory:l})}),header:f})}),J.displayName=`AgentDocumentSidebarContent`})),X,Z,Q=e((()=>{h(),l(),V(),Y(),X=t(i()),Z=()=>(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(z,{navKey:`agent-docs`,children:(0,X.jsx)(J,{})}),(0,X.jsx)(c,{horizontal:!0,flex:1,height:`100%`,style:{minHeight:0,overflow:`hidden`,position:`relative`},width:`100%`,children:(0,X.jsx)(c,{flex:1,style:{minHeight:0,minWidth:0},children:(0,X.jsx)(u,{})})})]})}));e((()=>{Q()}))();export{Z as default};