import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r,U as i,l as a,q as o,u as s}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as c,j as l,n as u,t as d}from"./agent-Cvv887Je.js";import{Fn as f,cs as p,ls as m}from"./app-const-Bl9rlHwj.js";import{Qr as h}from"./dialog-BebLzVzY.js";import{Ut as ee,a as g,b as te,t as _}from"./es-CVJR_g25.js";import{O as ne,x as v}from"../vendor/vendor-icons-C-Y4oLkk.js";import{Q as y,et as b,i as x,t as S}from"./base-ui-BAv0gRbN.js";import{hi as re,k as ie,si as ae,t as C,zt as w}from"./es-LELdnrjB.js";import{Xt as T,bi as E,la as oe}from"./model-runtime-client-tog6-eyE.js";import{dr as se,mr as D}from"./tool-BJJaXV35.js";import{Oo as ce,ko as le}from"./index-Djd-5Nq9.js";import{o as O,t as k}from"./selectors-DA9tZHpr.js";import{n as A,t as j}from"./dist-BJGc-8P7.js";import{n as M,t as N}from"./AgentSelectionEmpty-CgpNmqyZ.js";var P,F=e((()=>{a(),P=s((e,t)=>({clearSelection:()=>{e({selectedAgentIds:[]})},isSelected:e=>t().selectedAgentIds.includes(e),removeAgent:t=>{e(e=>({selectedAgentIds:e.selectedAgentIds.filter(e=>e!==t)}))},selectedAgentIds:[],setSelectedAgents:t=>{e({selectedAgentIds:t})},toggleAgent:t=>{e(e=>e.selectedAgentIds.includes(t)?{selectedAgentIds:e.selectedAgentIds.filter(e=>e!==t)}:{selectedAgentIds:[...e.selectedAgentIds,t]})}}))})),I,L,R,z,B=e((()=>{T(),C(),S(),ae(),_(),v(),I=t(m()),f(),F(),L=t(p()),R=g(({css:e,cssVar:t})=>({item:e`
    cursor: pointer;

    margin-block: 1px;
    padding-block: 6px;
    padding-inline: 8px;
    border-radius: ${t.borderRadius};

    transition: background 0.2s ease;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,removeButton:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 4px;

    color: ${t.colorTextTertiary};

    transition: all 0.2s ease;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,title:e`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),z=(0,I.memo)(({agent:e,defaultTitle:t,showCheckbox:n,showRemove:r})=>{let i=(0,I.useRef)(null),a=re(i),o=P(t=>t.selectedAgentIds.includes(e.id)),s=P(e=>e.toggleAgent),c=P(e=>e.removeAgent),l=E(e,t),u=e.avatar||`/avatars/agent-default.png`,d=e.backgroundColor??void 0,f=()=>{s(e.id)};return(0,L.jsx)(`div`,{className:R.item,ref:i,style:{cursor:n?`pointer`:`default`},onClick:n?f:void 0,children:(0,L.jsxs)(h,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[n&&(0,L.jsx)(y,{checked:o,onChange:f,onClick:e=>{e.stopPropagation(),f()}}),(0,L.jsx)(b,{animation:a,avatar:u,background:d,shape:`circle`,size:28}),(0,L.jsx)(x,{ellipsis:!0,className:R.title,children:l}),r&&(0,L.jsx)(`div`,{className:R.removeButton,onClick:t=>{t.stopPropagation(),c(e.id)},children:(0,L.jsx)(ne,{size:14})})]})})})})),V,H,U,W,G,ue=e((()=>{T(),C(),S(),_(),V=t(oe()),H=t(m()),n(),A(),M(),se(),k(),B(),U=t(p()),W=g(({css:e,cssVar:t})=>({container:e`
    user-select: none;

    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding-block: ${t.paddingSM}px 0;
    padding-inline: ${t.paddingSM}px;
  `,sectionHeader:e`
    padding-block: 6px 4px;
    padding-inline: 8px;
    color: ${t.colorTextSecondary};
  `})),G=(0,H.memo)(({agents:e,isLoading:t})=>{let{t:n}=r([`chat`,`common`]),[i,a]=(0,H.useState)(``),o=(0,H.useMemo)(()=>n(`defaultSession`,{ns:`common`}),[n]),s=D(O.privateAgentGroups,V.default),c=D(O.privatePinnedAgents,V.default),l=D(O.privateUngroupedAgents,V.default),u=(0,H.useMemo)(()=>{let e=new Set;for(let t of s)for(let n of t.items)e.add(n.id);for(let t of c)e.add(t.id);for(let t of l)e.add(t.id);return e},[s,c,l]),d=(0,H.useCallback)(e=>{a(e.target.value)},[]),f=(0,H.useMemo)(()=>{if(!i.trim())return e;let t=i.toLowerCase();return e.filter(e=>{let n=E(e)??``,r=e.description||``;return n.toLowerCase().includes(t)||r.toLowerCase().includes(t)})},[e,i]),p=(0,H.useMemo)(()=>{let e=[],t=[];for(let n of f)(u.has(n.id)?e:t).push(n);return e.length===0||t.length===0?f.map(e=>({agent:e,type:`agent`})):[{label:n(`mention.category.privateAgents`,{ns:`chat`}),type:`header`},...e.map(e=>({agent:e,type:`agent`})),{label:n(`mention.category.workspaceAgents`,{ns:`chat`}),type:`header`},...t.map(e=>({agent:e,type:`agent`}))]},[f,u,n]);return(0,U.jsxs)(h,{className:W.container,gap:12,children:[(0,U.jsx)(ie,{allowClear:!0,placeholder:n(`memberSelection.searchAgents`),value:i,variant:`filled`,onChange:d}),(0,U.jsx)(h,{flex:1,style:{minHeight:0},children:t?(0,U.jsxs)(h,{gap:8,padding:8,children:[(0,U.jsx)(w,{active:!0,paragraph:{rows:1},title:!1}),(0,U.jsx)(w,{active:!0,paragraph:{rows:1},title:!1}),(0,U.jsx)(w,{active:!0,paragraph:{rows:1},title:!1})]}):f.length===0?(0,U.jsx)(N,{search:!!i,variant:i?`empty`:`noAvailable`}):(0,U.jsx)(j,{style:{flex:1},totalCount:p.length,itemContent:e=>{let t=p[e];return t.type===`header`?(0,U.jsx)(x,{className:W.sectionHeader,fontSize:12,type:`secondary`,children:t.label}):(0,U.jsx)(z,{showCheckbox:!0,agent:t.agent,defaultTitle:o},t.agent.id)}})})]})})})),K,q,J,Y,de=e((()=>{C(),_(),K=t(m()),n(),M(),B(),F(),q=t(p()),J=g(({css:e,cssVar:t})=>({container:e`
    overflow-y: auto;
    flex: 1;
    padding: ${t.paddingSM}px;
  `,title:e`
    font-size: 12px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `})),Y=(0,K.memo)(({agents:e})=>{let{t}=r([`chat`,`common`]),n=P(e=>e.selectedAgentIds),i=(0,K.useMemo)(()=>t(`defaultSession`,{ns:`common`}),[t]),a=(0,K.useMemo)(()=>n.map(t=>e.find(e=>e.id===t)).filter(e=>e!==void 0),[e,n]);return a.length===0?(0,q.jsx)(h,{className:J.container,flex:1,children:(0,q.jsx)(N,{variant:`noSelected`})}):(0,q.jsxs)(h,{className:J.container,gap:4,children:[(0,q.jsx)(`div`,{className:J.title,children:t(`memberSelection.selectedAgents`,{count:a.length})}),(0,q.jsx)(h,{children:a.map(e=>(0,q.jsx)(z,{showRemove:!0,agent:e,defaultTitle:i},e.id))})]})})})),X,Z,Q,$,fe=e((()=>{C(),te(),_(),X=t(m()),n(),i(),le(),c(),u(),ue(),de(),F(),Z=t(p()),Q=g(({css:e,cssVar:t})=>({container:e`
    display: flex;
    flex-direction: row;

    height: 500px;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius}px;
  `,rightColumn:e`
    display: flex;
    flex: 1;
    flex-direction: column;
  `})),$=(0,X.memo)(({existingMembers:e=[],onCancel:t,onConfirm:n,open:i})=>{let{t:a}=r([`chat`,`common`]),s=P(e=>e.selectedAgentIds),c=P(e=>e.clearSelection),{data:u=[],isLoading:f}=o(i?l.queryAgents():null,()=>d.queryAgents()),p=(0,X.useMemo)(()=>u.filter(t=>!e.includes(t.id)),[u,e]);(0,X.useEffect)(()=>{i||c()},[i,c]);let[m,g]=(0,X.useState)(!1);return(0,Z.jsx)(ce,{allowFullscreen:!0,okButtonProps:{disabled:s.length===0||m,loading:m},okText:`${a(`memberSelection.addMember`)} (${s.length})`,open:i,title:a(`memberSelection.addMember`),width:800,onCancel:()=>{c(),t()},onOk:async()=>{try{g(!0),await n(s),c()}catch(e){console.error(`Failed to add members:`,e)}finally{g(!1)}},children:(0,Z.jsxs)(h,{horizontal:!0,className:Q.container,gap:8,children:[(0,Z.jsx)(G,{agents:p,isLoading:f}),(0,Z.jsx)(ee,{orientation:`vertical`,style:{height:`100%`}}),(0,Z.jsx)(Y,{agents:u})]})})})}));export{fe as n,$ as t};