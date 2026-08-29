import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Co as i,Fn as a,Ua as o,cs as s,ls as c}from"./app-const-Bl9rlHwj.js";import{Cr as l,Qr as u,ht as d,mr as f,zn as p}from"./dialog-BebLzVzY.js";import{a as m,c as h,l as g,t as _}from"./es-CVJR_g25.js";import{et as v,x as y}from"../vendor/vendor-icons-C-Y4oLkk.js";import{Q as b,et as x,i as S,t as ee}from"./base-ui-BAv0gRbN.js";import{Or as C,Ui as te,jt as w,k as ne,t as T}from"./es-LELdnrjB.js";import{An as re,Dn as E}from"./model-runtime-client-tog6-eyE.js";import{Oo as ie,ko as D}from"./index-Djd-5Nq9.js";import{n as O,t as k}from"./GroupAvatar-l7ZJw39M.js";import{n as A,t as ae}from"./ModelSelect-CuN84mTX.js";import{n as oe,t as j}from"./useEnabledChatModels-53KvTcO7.js";import{i as se,t as M}from"./session-CDTNaEmF.js";import{n as ce,t as N}from"./templates-ad4Wtwh-.js";var P,F,I,L,R,z,B=e((()=>{T(),ee(),_(),o(),y(),P=t(c()),n(),D(),a(),O(),A(),j(),M(),E(),N(),F=t(s()),I=(0,P.memo)(({template:e,isSelected:t,onToggle:n,styles:i,cx:a})=>{let{t:o}=r(`chat`);return(0,F.jsx)(`div`,{className:a(i.listItem),onClick:()=>n(e.id),children:(0,F.jsxs)(u,{horizontal:!0,align:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(b,{checked:t,onChange:()=>n(e.id),onClick:d}),(0,F.jsx)(k,{size:40,avatars:e.members.filter(e=>e!=null).map(e=>({avatar:e.avatar||`/avatars/agent-default.png`,background:e.backgroundColor||void 0}))}),(0,F.jsxs)(u,{flex:1,gap:2,children:[(0,F.jsx)(S,{className:i.title,children:e.title}),(0,F.jsx)(S,{ellipsis:!0,className:i.description,children:e.description}),(0,F.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[(0,F.jsx)(v,{size:11,style:{color:`#999`}}),(0,F.jsx)(S,{style:{fontSize:11},type:`secondary`,children:o(`groupWizard.memberCount`,{count:e.members.filter(e=>e!=null).length})})]})]})]})})}),L=(0,P.memo)(({agent:e,isSelected:t,onToggle:n,styles:i,cx:a})=>{let{t:o}=r([`chat`,`common`]),s=e.config?.id,c=e.meta?.title||o(`defaultSession`,{ns:`common`}),l=e.meta?.description||``,f=e.meta?.avatar||`/avatars/agent-default.png`,p=e.meta?.backgroundColor;return s?(0,F.jsx)(`div`,{className:a(i.listItem),onClick:()=>n(s),children:(0,F.jsxs)(u,{horizontal:!0,align:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(b,{checked:t,onChange:()=>n(s),onClick:d}),(0,F.jsx)(x,{avatar:f,background:p,size:40}),(0,F.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,F.jsx)(S,{className:i.title,children:c}),l&&(0,F.jsx)(S,{ellipsis:!0,className:i.description,children:l})]})]})}):null}),R=m(({css:e,cssVar:t})=>({container:e`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,description:e`
    font-size: 12px;
    line-height: 1.2;
    color: ${t.colorTextSecondary};
  `,hostCard:e`
    margin-block-start: ${t.paddingSM};
    margin-inline: ${t.paddingSM};
    padding: ${t.padding};
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};
  `,leftColumn:e`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding: 0;
    border-inline-end: 1px solid ${t.colorBorderSecondary};
  `,listHeader:e`
    padding: 0;
    color: ${t.colorTextDescription};
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
  `,memberDescription:e`
    display: block;
    padding-inline-end: 48px;
  `,modelSelectDisabled:e`
    pointer-events: none;
  `,rightColumn:e`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding: 0;
  `,title:e`
    font-size: 14px;
    font-weight: 500;
  `})),z=(0,P.memo)(({onCancel:e,onCreateFromTemplate:t,onCreateCustom:n,open:a,isCreatingFromTemplate:o})=>{let{t:s}=r([`chat`,`common`]),c=ce(),d=oe(),m=se(e=>(e.sessions||[]).filter(e=>e.type===re.Agent)),_=(0,P.useMemo)(()=>m.filter(e=>!e.config?.virtual),[m]),y=g(R.description,R.memberDescription),b=(0,P.useMemo)(()=>{if(d.length>0&&d[0].children.length>0){let e=d[0];return{model:e.children[0].id,provider:e.id}}return{model:void 0,provider:void 0}},[d]),[ee,T]=(0,P.useState)(``),[E,D]=(0,P.useState)(``),[O,k]=(0,P.useState)(``),[A,j]=(0,P.useState)([]),[M,N]=(0,P.useState)({}),[z,B]=(0,P.useState)(!1),[V,H]=(0,P.useState)(b.model&&b.provider?b:{}),[le,U]=(0,P.useState)(!1),[ue,W]=(0,P.useState)(`templates`),G=(0,P.useRef)(null),de=o??!1,fe=(0,P.useCallback)(e=>{k(t=>{let n=t===e?``:e;return n!==t&&(N({}),B(!1)),n&&j([]),n})},[]),pe=(0,P.useCallback)(e=>{k(``),N({}),j(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),K=(0,P.useCallback)(e=>{j(t=>t.filter(t=>t!==e))},[]),q=(0,P.useCallback)(()=>{k(``),j([]),T(``),D(``),N({}),B(!1),H(b.model&&b.provider?b:{}),G.current&&clearTimeout(G.current)},[b]),me=(0,P.useCallback)(e=>{H(e)},[]),he=(0,P.useCallback)((e,t,n)=>{N(r=>{let a=r[e]||[];if(n){let n=a.filter(e=>e!==t);return n.length===0?i(r,[e]):{...r,[e]:n}}return a.includes(t)?r:{...r,[e]:[...a,t]}})},[]),ge=(0,P.useCallback)(e=>{B(!e)},[]),_e=(0,P.useCallback)(e=>{let t=e.target.value;T(t),G.current&&clearTimeout(G.current),G.current=setTimeout(()=>{D(t)},300)},[]),J=_.length;(0,P.useEffect)(()=>()=>{G.current&&clearTimeout(G.current)},[]),(0,P.useEffect)(()=>{a&&W(J>2?`agents`:`templates`)},[a,J]),(0,P.useEffect)(()=>{j(e=>e.filter(e=>_.some(t=>t.config?.id===e)))},[_]);let ve=(0,P.useCallback)(e=>{if(!e)return;let t=Array.isArray(e)?e[0]:e;(t===`templates`||t===`agents`)&&W(t)},[]),Y=(0,P.useMemo)(()=>{let e=E.trim().toLowerCase();return e?c.filter(t=>t.title.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)?!0:t.members.some(t=>t!=null&&t.title.toLowerCase().includes(e))):c},[c,E]),X=(0,P.useMemo)(()=>{let e=E.trim().toLowerCase();return e?_.filter(t=>{let n=t.meta?.title||``,r=t.meta?.description||``;return n.toLowerCase().includes(e)||r.toLowerCase().includes(e)}):_},[_,E]),Z=(0,P.useMemo)(()=>{if(!O)return[];let e=c.find(e=>e.id===O);if(!e)return[];let t=new Set(M[O]||[]);return e.members.filter(e=>e!=null).map(e=>({avatar:e.avatar||`/avatars/agent-default.png`,backgroundColor:e.backgroundColor,description:e.systemRole,isRemoved:t.has(e.title),key:`${O}-${e.title}`,systemRole:e.systemRole,title:e.title}))},[O,M,c]),ye=(0,P.useMemo)(()=>Z.filter(e=>!e.isRemoved).length,[Z]),Q=(0,P.useMemo)(()=>A.map(e=>{let t=m.find(t=>t.config?.id===e);if(!t)return null;let n=t.meta?.title||s(`defaultSession`,{ns:`common`}),r=t.meta?.avatar||`/avatars/agent-default.png`,i=t.meta?.backgroundColor,a=t.meta?.description||``;return{actions:(0,F.jsx)(p,{checked:!0,size:`small`,onChange:t=>{t||K(e)}}),avatar:(0,F.jsx)(x,{avatar:r,background:i,size:40}),description:a?(0,F.jsx)(l,{title:a,children:(0,F.jsx)(S,{className:y,ellipsis:{rows:1},children:a})}):null,key:e,showAction:!0,title:n}}).filter(e=>!!e),[A,m,s,K,y]),be=(0,P.useMemo)(()=>{let e=V.model??b.model,t=V.provider??b.provider;if(!(!e||!t))return{model:e,provider:t}},[V,b]),xe=(0,P.useCallback)(async()=>{if(O)try{let e=c.find(e=>e.id===O),n=new Set(M[O]||[]);await t(O,(e?.members||[]).filter(e=>e!=null&&!n.has(e.title)).map(e=>e.title)),q()}catch(e){console.error(`Failed to create group from template:`,e)}},[O,t,c,M,q]),Se=(0,P.useCallback)(async()=>{if(A.length!==0)try{U(!0),await n(A),q(),e()}catch(e){console.error(`Failed to create group with selected members:`,e)}finally{U(!1)}},[A,n,e,q]),Ce=(0,P.useCallback)(async()=>{if(O){await xe();return}await Se()},[O,xe,Se]),$=()=>{q(),e()},we=O?ye===0&&z:A.length===0,Te=O?de:le;return(0,F.jsx)(ie,{open:a,title:s(`groupWizard.title`),width:900,footer:(0,F.jsxs)(u,{horizontal:!0,gap:8,justify:`end`,children:[(0,F.jsx)(f,{onClick:$,children:s(`cancel`,{ns:`common`})}),(0,F.jsx)(f,{disabled:we,loading:Te,type:`primary`,onClick:Ce,children:s(`groupWizard.createGroup`)})]}),onCancel:$,children:(0,F.jsxs)(u,{horizontal:!0,className:R.container,children:[(0,F.jsxs)(u,{className:R.leftColumn,flex:1,gap:12,children:[(0,F.jsx)(ne,{allowClear:!0,placeholder:s(`memberSelection.searchAgents`),style:{margin:`${h.paddingSM} ${h.paddingSM} 0 ${h.paddingSM}`},value:ee,variant:`filled`,onChange:_e}),(0,F.jsx)(u,{flex:1,style:{overflowY:`auto`,padding:`0 ${h.paddingSM}`},children:(0,F.jsx)(te,{accordion:!0,collapsible:!0,activeKey:ue,expandIconPlacement:`end`,gap:12,size:`small`,variant:`borderless`,items:[{children:Y.length===0?(0,F.jsx)(C,{descriptionProps:{fontSize:14},icon:v,style:{maxWidth:400},description:s(E?`groupWizard.noMatchingTemplates`:`groupWizard.noTemplates`)}):(0,F.jsx)(u,{gap:4,children:Y.map(e=>(0,F.jsx)(I,{cx:g,isSelected:O===e.id,styles:R,template:e,onToggle:fe},e.id))}),key:`templates`,label:s(`groupWizard.useTemplate`)},{children:X.length===0?(0,F.jsx)(C,{descriptionProps:{fontSize:14},icon:v,style:{maxWidth:400},description:s(E?`noMatchingAgents`:`noAvailableAgents`,{ns:`chat`})}):(0,F.jsx)(u,{gap:4,children:X.map(e=>(0,F.jsx)(L,{agent:e,cx:g,isSelected:A.includes(e.config?.id||``),styles:R,onToggle:pe},e.id))}),key:`agents`,label:s(`groupWizard.existingMembers`)}],styles:{header:{color:h.colorTextDescription,fontSize:h.fontSize,padding:0}},onChange:ve})})]}),(0,F.jsx)(u,{className:R.rightColumn,flex:1,children:(0,F.jsxs)(u,{flex:1,gap:16,style:{overflowY:`auto`},children:[(0,F.jsxs)(u,{horizontal:!0,align:`center`,className:R.hostCard,gap:12,children:[(0,F.jsxs)(u,{flex:1,gap:2,children:[(0,F.jsx)(S,{style:{fontSize:14,fontWeight:500},type:z?`secondary`:void 0,children:s(`groupWizard.host.title`)}),(0,F.jsx)(S,{style:{color:`#999`,fontSize:12},type:z?`secondary`:void 0,children:s(`groupWizard.host.description`)})]}),(0,F.jsxs)(u,{horizontal:!0,align:`center`,gap:12,children:[(0,F.jsx)(`div`,{className:g(z&&R.modelSelectDisabled),style:{opacity:z?.6:1},children:(0,F.jsx)(ae,{requiredAbilities:[`functionCall`],value:be,onChange:me})}),(0,F.jsx)(l,{title:s(`groupWizard.host.tooltip`),children:(0,F.jsx)(p,{checked:!z,size:`small`,onChange:e=>ge(e)})})]})]}),(0,F.jsx)(u,{style:{padding:`0 ${h.paddingSM}`},children:O?Z.length>0?(0,F.jsx)(w,{items:Z.map(e=>({actions:(0,F.jsx)(p,{checked:!e.isRemoved,size:`small`,onChange:t=>he(O,e.title,t)}),avatar:(0,F.jsx)(x,{avatar:e.avatar,background:e.backgroundColor,size:40}),description:e.systemRole?(0,F.jsx)(l,{title:e.systemRole,children:(0,F.jsx)(S,{className:y,ellipsis:{rows:1},type:e.isRemoved?`secondary`:void 0,children:e.systemRole})}):null,key:e.key,showAction:!0,title:(0,F.jsx)(S,{type:e.isRemoved?`secondary`:void 0,children:e.title})}))}):(0,F.jsx)(C,{description:s(`groupWizard.noTemplateMembers`),descriptionProps:{fontSize:14},icon:v,style:{maxWidth:400}}):Q.length>0?(0,F.jsx)(w,{items:Q}):(0,F.jsx)(C,{description:s(`memberSelection.noSelectedAgents`),descriptionProps:{fontSize:14},icon:v,style:{maxWidth:400}})})]})})]})})})}));e((()=>{B()}))();export{z as ChatGroupWizard};