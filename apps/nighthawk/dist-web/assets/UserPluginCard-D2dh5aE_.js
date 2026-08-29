import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{n as i,t as a}from"./agent-Cvv887Je.js";import{Ha as o,Va as s,cs as c,ls as l}from"./app-const-Bl9rlHwj.js";import{B as u,Cr as d,Hr as f,Qr as p,St as ee,ht as m,xr as te}from"./dialog-BebLzVzY.js";import{a as h,l as ne,t as g}from"./es-CVJR_g25.js";import{Ep as re,Im as ie,Ka as ae,Mp as _,Mt as oe,bm as v,cd as se,et as y,vp as b,x}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as S,et as C,i as w,t as T}from"./base-ui-BAv0gRbN.js";import{Ta as ce,t as E}from"./es-LELdnrjB.js";import{C as D,E as le}from"./serverConfig-CmLVLry1.js";import{v as O,y as ue}from"./swrKeys-B4sicPWZ.js";import{n as k,p as A}from"./format-BuuIRQbq.js";import{dr as de,mr as fe}from"./tool-BJJaXV35.js";import{n as j,t as pe}from"./discover-BOYTu_qD.js";import{Do as me,Eo as M}from"./index-Djd-5Nq9.js";import{n as N,t as P}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as he,t as F}from"./query-string-DCxvp9QO.js";import{n as I,t as ge}from"./PublishedTime-BevDVLbb.js";import{n as L,t as R}from"./WorkspaceLink-DKEucXjF.js";var z,B,V,_e=e((()=>{z=({canEdit:e,marketOrganizationProfile:t,user:n})=>!e||n.type!==`organization`?!1:t?t.accountId===n.id:!0,B=({fallbackProfile:e,marketProfile:t})=>t?e?{...t,user:{...t.user,avatarUrl:t.user.avatarUrl||e.user.avatarUrl,description:t.user.description??e.user.description,displayName:t.user.displayName||e.user.displayName}}:t:e,V=({isWorkspaceScope:e,pathname:t,search:n=``})=>{if(!e)return null;let r=`/community/workspace`;return t.endsWith(r)||!t.includes(`/community/user/`)&&!t.includes(`/community/org/`)?null:`${r}${n}`}})),H,ve,U,ye,W,G=e((()=>{H=t(l()),ve=t(c()),U=(0,H.createContext)(null),ye=(0,H.memo)(({children:e,config:t})=>(0,ve.jsx)(U,{value:t,children:e})),W=()=>{let e=(0,H.use)(U);if(!e)throw Error(`useUserDetailContext must be used within UserDetailProvider`);return e}})),K,q,be,J,xe,Se=e((()=>{E(),T(),g(),x(),F(),K=t(l()),n(),s(),O(),I(),P(),L(),M(),i(),j(),D(),de(),A(),G(),q=t(c()),be=e=>{switch(e){case`published`:return`green`;case`unpublished`:return`orange`;case`deprecated`:return`red`;case`archived`:return`default`;default:return`default`}},J=h(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:e`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:e`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:e`
      &:hover .more-button {
        opacity: 1;
      }
    `})),xe=(0,K.memo)(({avatar:e,backgroundColor:t,title:n,description:i,createdAt:s,category:c,tokenUsage:l,forkCount:h,status:g,identifier:_,isValidated:y})=>{let{t:x}=r([`discover`,`setting`]),T=N(),{isOwner:E,onStatusChange:D}=W(),{allowed:O}=me(`create_content`),{allowed:A}=me(`edit_own_content`),de=ue(),[,j]=(0,K.useState)(!1),M=le(e=>e.createAgent),P=fe(e=>e.refreshAgentList),F=he.stringifyUrl({query:{source:`new`},url:o(`/community/agent`,_)},{skipNull:!0}),I=y===!1,L=(0,K.useCallback)(()=>{window.open(o(`/community/agent`,_),`_blank`)},[_]),z=(0,K.useCallback)(async()=>{if(!(!A||!O)){j(!0);try{let e=await a.getAgentByMarketIdentifier(_);if(e)T(o(`/agent`,e,`profile`));else{let e=await pe.getAssistantDetail({identifier:_,source:`new`});if(!e){u.error(x(`setting:myAgents.errors.fetchFailed`));return}let t=await M({config:{...e.config,avatar:e.avatar,backgroundColor:e.backgroundColor,description:e.description,editorData:e.editorData,marketIdentifier:_,tags:e.tags,title:e.title},...de?{visibility:`private`}:{}});await P(),t.agentId&&T(o(`/agent`,t.agentId,`profile`))}}catch(e){console.error(`[UserAgentCard] handleEdit error:`,e),u.error(x(`setting:myAgents.errors.editFailed`))}finally{j(!1)}}},[O,A,_,T,M,P,x]),B=(0,K.useCallback)(e=>{A&&D?.(_,e)},[A,_,D]),V=E?[{icon:(0,q.jsx)(f,{icon:b}),key:`viewDetail`,label:x(`setting:myAgents.actions.viewDetail`),onClick:L},{disabled:!A||!O,icon:(0,q.jsx)(f,{icon:ae}),key:`edit`,label:x(`setting:myAgents.actions.edit`),onClick:z},{type:`divider`},{danger:!0,disabled:!A,icon:(0,q.jsx)(f,{icon:oe}),key:`deprecate`,label:x(`setting:myAgents.actions.deprecate`),onClick:()=>B(`deprecate`)}]:[];return(0,q.jsxs)(ce,{clickable:!0,className:J.wrapper,height:`100%`,variant:`outlined`,width:`100%`,style:{cursor:`pointer`,overflow:`hidden`,position:`relative`},onClick:()=>T(F),children:[E&&!I&&(0,q.jsx)(`div`,{onClick:m,children:(0,q.jsx)(ee,{items:V,children:(0,q.jsx)(`div`,{className:ne(`more-button`,J.moreButton),children:(0,q.jsx)(f,{icon:re,size:16,style:{cursor:`pointer`}})})})}),(0,q.jsx)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,q.jsxs)(p,{horizontal:!0,gap:12,style:{overflow:`hidden`},children:[(0,q.jsx)(C,{avatar:e,background:t||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,q.jsx)(p,{flex:1,gap:2,style:{overflow:`hidden`},children:(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,q.jsx)(R,{style:{color:`inherit`,flex:1,overflow:`hidden`},to:F,onClick:e=>e.stopPropagation(),children:(0,q.jsx)(w,{ellipsis:!0,as:`h3`,className:J.title,style:{flex:1},children:n})}),y===!1?(0,q.jsx)(S,{color:`orange`,style:{flexShrink:0,margin:0},children:x(`assistant.underReview`,{defaultValue:`Under Review`})}):E&&g&&(0,q.jsx)(S,{color:be(g),style:{flexShrink:0,margin:0},children:x(`setting:myAgents.status.${g}`)})]})})]})}),(0,q.jsxs)(p,{flex:1,gap:12,paddingInline:16,children:[(0,q.jsx)(w,{as:`p`,className:J.desc,ellipsis:{rows:3},children:i}),(0,q.jsx)(te,{children:(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,q.jsx)(d,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:x(`assistants.tokenUsage`),children:(0,q.jsx)(S,{className:J.statTag,icon:(0,q.jsx)(f,{icon:v}),children:k(l)})}),!!(h&&h>0)&&(0,q.jsx)(d,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:x(`fork.forksCount`,{count:h}),children:(0,q.jsx)(S,{className:J.statTag,icon:(0,q.jsx)(f,{icon:se}),children:k(h)})})]})})]}),(0,q.jsx)(p,{horizontal:!0,align:`center`,className:J.footer,justify:`space-between`,padding:16,children:(0,q.jsxs)(p,{horizontal:!0,align:`center`,className:J.secondaryDesc,justify:`space-between`,children:[(0,q.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,q.jsx)(f,{icon:ie,size:14}),(0,q.jsx)(ge,{className:J.secondaryDesc,date:s})]}),c&&x(`category.assistant.${c}`)]})})]})})})),Y,X,Ce,Z,we,Te=e((()=>{E(),T(),g(),x(),F(),Y=t(l()),n(),s(),I(),P(),L(),A(),G(),X=t(c()),Ce=e=>{switch(e){case`published`:return`green`;case`unpublished`:return`orange`;case`deprecated`:return`red`;case`archived`:return`default`;default:return`default`}},Z=h(({css:e,cssVar:t})=>({desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:e`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:e`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:e`
      &:hover .more-button {
        opacity: 1;
      }
    `})),we=(0,Y.memo)(({avatar:e,title:t,description:n,createdAt:i,category:a,forkCount:s,installCount:c,identifier:l,memberCount:u,status:h,isValidated:g})=>{let{t:v}=r([`discover`,`setting`]),b=N(),{isOwner:x,onStatusChange:T}=W(),E=he.stringifyUrl({query:{source:`new`},url:o(`/community/group_agent`,l)},{skipNull:!0}),D=g===!1,le=(0,Y.useCallback)(()=>{b(E)},[E,b]),O=(0,Y.useCallback)(()=>{b(o(`/group`,l,`profile`))},[l,b]),ue=(0,Y.useCallback)(e=>{T?.(l,e,`group`)},[l,T]),A=x?[{icon:(0,X.jsx)(f,{icon:ae}),key:`edit`,label:v(`setting:myAgents.actions.edit`),onClick:O},{type:`divider`},{danger:!0,icon:(0,X.jsx)(f,{icon:oe}),key:`deprecate`,label:v(`setting:myAgents.actions.deprecate`),onClick:()=>ue(`deprecate`)}]:[];return(0,X.jsxs)(ce,{clickable:!0,className:Z.wrapper,height:`100%`,variant:`outlined`,width:`100%`,style:{cursor:`pointer`,overflow:`hidden`,position:`relative`},onClick:le,children:[x&&!D&&(0,X.jsx)(`div`,{onClick:m,children:(0,X.jsx)(ee,{items:A,children:(0,X.jsx)(`div`,{className:ne(`more-button`,Z.moreButton),children:(0,X.jsx)(f,{icon:re,size:16,style:{cursor:`pointer`}})})})}),(0,X.jsx)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,X.jsxs)(p,{horizontal:!0,gap:12,style:{overflow:`hidden`},children:[(0,X.jsx)(C,{avatar:e,shape:`square`,size:40,style:{flex:`none`}}),(0,X.jsx)(p,{flex:1,gap:2,style:{overflow:`hidden`},children:(0,X.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(R,{style:{color:`inherit`,flex:1,overflow:`hidden`},to:E,onClick:m,children:(0,X.jsx)(w,{ellipsis:!0,as:`h3`,className:Z.title,style:{flex:1},children:t})}),g===!1?(0,X.jsx)(S,{color:`orange`,style:{flexShrink:0,margin:0},children:v(`groupAgents.underReview`,{defaultValue:`Under Review`})}):x&&h&&(0,X.jsx)(S,{color:Ce(h),style:{flexShrink:0,margin:0},children:v(`setting:myAgents.status.${h}`)})]})})]})}),(0,X.jsxs)(p,{flex:1,gap:12,paddingInline:16,children:[(0,X.jsx)(w,{as:`p`,className:Z.desc,ellipsis:{rows:3},children:n}),(0,X.jsx)(te,{children:(0,X.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[u!==void 0&&u>0&&(0,X.jsx)(d,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:v(`groupAgents.memberCount`,{defaultValue:`Members`}),children:(0,X.jsx)(S,{className:Z.statTag,icon:(0,X.jsx)(f,{icon:y}),children:k(u)})}),!!(s&&s>0)&&(0,X.jsx)(d,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:v(`fork.forksCount`,{count:s}),children:(0,X.jsx)(S,{className:Z.statTag,icon:(0,X.jsx)(f,{icon:se}),children:k(s)})}),c!==void 0&&c>0&&(0,X.jsx)(d,{placement:`top`,styles:{root:{pointerEvents:`none`}},title:v(`groupAgents.downloads`,{defaultValue:`Downloads`}),children:(0,X.jsx)(S,{className:Z.statTag,icon:(0,X.jsx)(f,{icon:_}),children:k(c)})})]})})]}),(0,X.jsx)(p,{horizontal:!0,align:`center`,className:Z.footer,justify:`space-between`,padding:16,children:(0,X.jsxs)(p,{horizontal:!0,align:`center`,className:Z.secondaryDesc,justify:`space-between`,children:[(0,X.jsxs)(p,{horizontal:!0,align:`center`,gap:4,children:[(0,X.jsx)(f,{icon:ie,size:14}),(0,X.jsx)(ge,{className:Z.secondaryDesc,date:i})]}),a&&v(`category.groupAgent.${a}`,{defaultValue:a})]})})]})})})),Ee,Q,$,De,Oe=e((()=>{E(),T(),g(),Ee=t(l()),n(),s(),P(),L(),Q=t(c()),$=h(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,desc:e`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `})),De=(0,Ee.memo)(({title:e,avatar:t,author:n,description:i,identifier:a,category:s})=>{let{t:c}=r(`discover`),l=N(),u=o(`/community/plugin`,a);return(0,Q.jsxs)(ce,{clickable:!0,"data-testid":`user-plugin-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:(0,Ee.useCallback)(()=>{l(u)},[u,l]),children:[(0,Q.jsx)(p,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:(0,Q.jsxs)(p,{horizontal:!0,gap:12,title:a,style:{overflow:`hidden`},children:[(0,Q.jsx)(C,{avatar:t||e,size:40,style:{flex:`none`}}),(0,Q.jsxs)(p,{flex:1,gap:6,style:{overflow:`hidden`},children:[(0,Q.jsx)(p,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,Q.jsx)(R,{style:{color:`inherit`,overflow:`hidden`},to:u,children:(0,Q.jsx)(w,{ellipsis:!0,as:`h2`,className:$.title,children:e})})}),(0,Q.jsx)(p,{horizontal:!0,align:`center`,className:$.author,gap:8,children:n&&(0,Q.jsx)(`div`,{children:n})})]})]})}),(0,Q.jsx)(p,{flex:1,gap:12,paddingInline:16,children:(0,Q.jsx)(w,{as:`p`,className:$.desc,ellipsis:{rows:3},children:i})}),(0,Q.jsx)(p,{horizontal:!0,align:`center`,className:$.footer,justify:`space-between`,padding:16,children:(0,Q.jsx)(p,{horizontal:!0,align:`center`,className:$.secondaryDesc,gap:8,children:s&&c(`plugins.categories.${s}.name`)})})]})})}));export{xe as a,G as c,B as d,V as f,Te as i,W as l,Oe as n,Se as o,z as p,we as r,ye as s,De as t,_e as u};