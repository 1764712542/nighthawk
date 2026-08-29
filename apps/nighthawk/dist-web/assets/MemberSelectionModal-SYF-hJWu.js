import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Fn as i,cs as a,ls as o}from"./app-const-Bl9rlHwj.js";import{Cr as s,Qr as c,bt as l,mr as u,zn as d}from"./dialog-BebLzVzY.js";import{a as f,b as p,l as m,st as h,t as g}from"./es-CVJR_g25.js";import{O as _,x as v}from"../vendor/vendor-icons-C-Y4oLkk.js";import{Q as y,et as b,i as x,t as S}from"./base-ui-BAv0gRbN.js";import{hi as C,jt as w,k as ee,si as T,t as E}from"./es-LELdnrjB.js";import{An as D,Dn as O,Xt as k,bi as A}from"./model-runtime-client-tog6-eyE.js";import{Oo as te,ko as j}from"./index-Djd-5Nq9.js";import{n as M,t as N}from"./ModelSelect-CuN84mTX.js";import{n as P,t as F}from"./useEnabledChatModels-53KvTcO7.js";import{i as I,t as L}from"./session-CDTNaEmF.js";import{n as R,t as z}from"./AgentSelectionEmpty-CgpNmqyZ.js";var B,V,H,U,W,G=e((()=>{k(),E(),S(),T(),p(),g(),v(),B=t(o()),n(),j(),i(),R(),M(),F(),L(),O(),V=t(a()),H=(0,B.memo)(({agent:e,isSelected:t,onToggle:n,styles:r,cx:i,t:a})=>{let o=(0,B.useRef)(null),s=C(o),l=e.config?.id,u=A(e.meta,a(`defaultSession`,{ns:`common`})),d=e.meta?.description||``,f=e.meta?.avatar||`/avatars/agent-default.png`,p=e.meta?.backgroundColor;return l?(0,V.jsx)(h.Item,{className:i(r.listItem),ref:o,onClick:()=>n(l),children:(0,V.jsxs)(c,{horizontal:!0,align:`center`,gap:12,width:`100%`,children:[(0,V.jsx)(y,{checked:t,onChange:()=>{n(l)},onClick:e=>{e.stopPropagation()}}),(0,V.jsx)(c,{style:{flexShrink:0},children:(0,V.jsx)(b,{animation:s,avatar:f,background:p,size:40})}),(0,V.jsxs)(c,{flex:1,gap:2,style:{minWidth:0},children:[(0,V.jsx)(x,{className:r.title,weight:500,children:u}),d&&(0,V.jsx)(x,{ellipsis:!0,className:r.description,children:d})]})]})}):null}),U=f(({css:e,cssVar:t})=>({container:e`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,description:e`
    font-size: 11px;
    line-height: 1.2;
    color: ${t.colorTextSecondary};
  `,hostCard:e`
    margin-block-end: ${t.paddingSM};
    padding: ${t.padding};
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};
  `,leftColumn:e`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding-block: ${t.paddingSM} 0;
    padding-inline: ${t.paddingSM};
    border-inline-end: 1px solid ${t.colorBorderSecondary};
  `,listItem:e`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: ${t.paddingSM} !important;
    border-radius: ${t.borderRadius};

    transition: all 0.2s ease;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,modelSelectDisabled:e`
    pointer-events: none;
  `,rightColumn:e`
    overflow-y: auto;
    flex: 1;
    padding: ${t.paddingSM};
  `,selectedItem:e`
    opacity: 0.6;
    background: ${t.colorFillQuaternary};
  `})),W=(0,B.memo)(({currentHostConfig:e,existingMembers:t=[],mode:n,onCancel:i,onConfirm:a,open:o,preSelectedAgents:f=[]})=>{let{t:p}=r([`chat`,`common`]),g=P(),[v,y]=(0,B.useState)(f),[S,C]=(0,B.useState)(``),T=n===`add`&&e?.enableSupervisor===!0,[E,O]=(0,B.useState)(n===`add`),[k,j]=(0,B.useState)(()=>{if(n===`add`&&e)return{model:e.orchestratorModel,provider:e.orchestratorProvider};if(g.length>0&&g[0].children.length>0){let e=g[0];return{model:e.children[0].id,provider:e.id}}return{}}),M=I(e=>(e.sessions||[]).filter(e=>e.type===D.Agent&&!e.config?.virtual)),F=I(e=>e.activeId),L=e=>{y(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},R=(0,B.useCallback)(e=>{y(t=>t.filter(t=>t!==e))},[]),W=(0,B.useCallback)(e=>{C(e.target.value)},[]),G=(0,B.useCallback)(e=>{O(!e)},[]),ne=(0,B.useCallback)(e=>{j(e)},[]),K=(0,B.useMemo)(()=>n===`create`?M:M.filter(e=>e.id!==F&&!t.includes(e.config?.id||``)),[M,F,n,t]),q=(0,B.useMemo)(()=>S.trim()?K.filter(e=>{let t=A(e.meta)??``,n=e.meta?.description||``,r=S.toLowerCase();return t.toLowerCase().includes(r)||n.toLowerCase().includes(r)}):K,[K,S]),J=(0,B.useMemo)(()=>v.map(e=>{let t=M.find(t=>t.config.id===e);if(!t)return null;let n=A(t.meta,p(`defaultSession`,{ns:`common`})),r=t.meta?.avatar||`/avatars/agent-default.png`,i=t.meta?.backgroundColor,a=t.meta?.description||``;return{actions:(0,V.jsx)(l,{icon:_,size:`small`,style:{color:`#999`},onClick:()=>R(e)}),avatar:(0,V.jsx)(b,{avatar:r,background:i,shape:`circle`,size:40}),description:a,key:e,showAction:!0,title:n}}).filter(e=>e!==null),[v,M,p,R]),Y=()=>{y(f),C(``),O(n===`add`),n===`add`&&e&&j({model:e.orchestratorModel,provider:e.orchestratorProvider})},[X,Z]=(0,B.useState)(!1),re=(0,B.useMemo)(()=>{let e=k.model,t=k.provider;if(!(!e||!t))return{model:e,provider:t}},[k]),ie=async()=>{try{Z(!0),await a(v),Y()}catch(e){console.error(`Failed to confirm action:`,e)}finally{Z(!1)}},Q=()=>{Y(),i()},ae=p(n===`create`?`memberSelection.setInitialMembers`:`memberSelection.addMember`),oe=p(n===`create`?`memberSelection.createGroup`:`memberSelection.addMember`),se=!T,$=v.length+(se&&!E?1:0),ce=$<+(n===`create`)||X;return(0,V.jsx)(te,{allowFullscreen:!0,open:o,title:ae,width:800,footer:(0,V.jsxs)(c,{horizontal:!0,gap:8,justify:`end`,children:[(0,V.jsx)(u,{onClick:Q,children:p(`cancel`,{ns:`common`})}),(0,V.jsxs)(u,{disabled:ce,loading:X,type:`primary`,onClick:ie,children:[oe,` (`,$,`)`]})]}),onCancel:Q,children:(0,V.jsxs)(c,{horizontal:!0,className:U.container,children:[(0,V.jsxs)(c,{className:U.leftColumn,flex:1,gap:12,children:[(0,V.jsx)(ee,{allowClear:!0,placeholder:p(`memberSelection.searchAgents`),value:S,variant:`filled`,onChange:W}),(0,V.jsx)(c,{flex:1,style:{overflowY:`auto`},children:q.length===0?(0,V.jsx)(z,{search:!!S,variant:S?`empty`:`noAvailable`}):(0,V.jsx)(h,{dataSource:q,split:!1,renderItem:e=>{let t=e.config?.id;return t?(0,V.jsx)(H,{agent:e,cx:m,isSelected:v.includes(t),styles:U,t:p,onToggle:L},t):null}})})]}),(0,V.jsx)(c,{className:U.rightColumn,flex:1,children:(0,V.jsxs)(c,{gap:16,children:[!T&&(0,V.jsxs)(c,{horizontal:!0,align:`center`,className:U.hostCard,gap:12,children:[(0,V.jsxs)(c,{flex:1,gap:2,children:[(0,V.jsx)(x,{style:{fontSize:14,fontWeight:500},type:E?`secondary`:void 0,children:p(`groupWizard.host.title`)}),(0,V.jsx)(x,{style:{color:`#999`,fontSize:12},type:E?`secondary`:void 0,children:p(`groupWizard.host.description`)})]}),(0,V.jsxs)(c,{horizontal:!0,align:`center`,gap:12,children:[(0,V.jsx)(`div`,{className:m(E&&U.modelSelectDisabled),style:{opacity:E?.6:1},children:(0,V.jsx)(N,{requiredAbilities:[`functionCall`],value:re,onChange:ne})}),(0,V.jsx)(s,{title:p(`groupWizard.host.tooltip`),children:(0,V.jsx)(d,{checked:!E,size:`small`,onChange:e=>G(e)})})]})]}),(0,V.jsx)(c,{flex:1,children:J.length===0?(0,V.jsx)(z,{variant:`noSelected`}):(0,V.jsx)(w,{items:J})})]})})]})})})}));e((()=>{G()}))();export{W as MemberSelectionModal};