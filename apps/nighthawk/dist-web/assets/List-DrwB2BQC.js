import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as i,Va as a,cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{Cr as c,Hr as l,Qr as u}from"./dialog-BebLzVzY.js";import{a as d,c as f,t as p}from"./es-CVJR_g25.js";import{Im as m,bm as h,cd as g,m_ as _,x as v}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as y,et as b,i as x,t as S}from"./base-ui-BAv0gRbN.js";import{Ta as C,t as w,ur as T}from"./es-LELdnrjB.js";import{n as E,p as D}from"./format-BuuIRQbq.js";import{n as O,t as k}from"./discover-BOYTu_qD.js";import{n as A,t as j}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as M,t as N}from"./MCP-ByUo-Efs.js";import{n as P,t as F}from"./query-string-DCxvp9QO.js";import{n as I,t as L}from"./PublishedTime-BevDVLbb.js";import{n as R,t as z}from"./WorkspaceLink-DKEucXjF.js";import{n as ee,t as te}from"./useQuery-DOeYxe-v.js";import{n as ne,t as re}from"./AssistantEmpty-EPpV-1ga.js";import{n as B,t as V}from"./profileLink-Dvc-OCmW.js";var H,U,W,G,K=e((()=>{M(),w(),S(),p(),v(),H=t(s()),n(),D(),U=t(o()),W=d(({css:e,cssVar:t})=>({token:e`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `})),G=(0,H.memo)(({tokenUsage:e,pluginCount:t,knowledgeCount:n,forkCount:i,placement:a=`right`})=>{let{t:o}=r(`discover`);return(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[(0,U.jsx)(c,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.tokenUsage`),children:(0,U.jsx)(y,{className:W.token,icon:(0,U.jsx)(l,{icon:h}),children:E(e)})}),!!(i&&i>0)&&(0,U.jsx)(c,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`fork.forksCount`,{count:i}),children:(0,U.jsx)(y,{className:W.token,icon:(0,U.jsx)(l,{icon:g}),children:E(i)})}),!!(t&&t>0)&&(0,U.jsx)(c,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.withPlugin`),children:(0,U.jsx)(y,{icon:(0,U.jsx)(l,{fill:f.colorTextSecondary,icon:N}),children:t})}),!!(n&&n>0)&&(0,U.jsx)(c,{placement:a,styles:{root:{pointerEvents:`none`}},title:o(`assistants.withKnowledge`),children:(0,U.jsx)(y,{icon:(0,U.jsx)(l,{icon:_}),children:n})})]})})})),q,J,Y,X,ie=e((()=>{w(),S(),p(),v(),F(),q=t(s()),n(),a(),I(),j(),R(),te(),V(),O(),K(),J=t(o()),Y=d(({css:e,cssVar:t})=>({author:e`
      cursor: pointer;
      color: ${t.colorTextDescription};

      &:hover {
        color: ${t.colorPrimary};
      }
    `,code:e`
      font-family: ${t.fontFamilyCode};
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
    `})),X=(0,q.memo)(({createdAt:e,updatedAt:t,author:n,avatar:a,title:o,description:s,category:c,identifier:d,tokenUsage:f,pluginCount:p,knowledgeCount:h,forkCount:g,backgroundColor:_,userName:v,ownerType:S,type:w})=>{let T=A(),{source:E}=ee(),D=w===`agent-group`,O=D?`/community/group_agent`:`/community/agent`,j=P.stringifyUrl({query:{source:E},url:i(O,d)},{skipNull:!0}),{t:M}=r(`discover`),N=(0,q.useCallback)(e=>{e.stopPropagation(),v&&window.open(B(v,S),`_blank`,`noopener,noreferrer`)},[S,v]),F=(0,q.useCallback)(()=>{k.reportAgentEvent({event:`click`,identifier:d,source:location.pathname}).catch(()=>{}),T(j)},[d,j,T]);return(0,J.jsxs)(C,{clickable:!0,"data-agent-type":w??`agent`,"data-testid":`assistant-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:F,children:[D&&(0,J.jsx)(y,{color:`info`,style:{position:`absolute`,right:12,top:12,zIndex:1},children:M(`groupAgents.tag`,{defaultValue:`群组`})}),(0,J.jsx)(u,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,style:{paddingRight:D?80:16},width:`100%`,children:(0,J.jsxs)(u,{horizontal:!0,gap:12,title:d,style:{overflow:`hidden`},children:[(0,J.jsx)(b,{avatar:a,background:_||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,J.jsxs)(u,{flex:1,gap:2,style:{overflow:`hidden`},children:[(0,J.jsx)(u,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:(0,J.jsx)(z,{style:{color:`inherit`,overflow:`hidden`},to:j,children:(0,J.jsx)(x,{ellipsis:!0,as:`h2`,className:Y.title,children:o})})}),n&&(0,J.jsx)(`div`,{className:v?Y.author:void 0,style:v?void 0:{color:`inherit`},onClick:v?N:void 0,children:n})]})]})}),(0,J.jsxs)(u,{flex:1,gap:12,paddingInline:16,children:[(0,J.jsx)(x,{as:`p`,className:Y.desc,ellipsis:{rows:3},children:s}),(0,J.jsx)(G,{forkCount:g,knowledgeCount:h,pluginCount:p,tokenUsage:f})]}),(0,J.jsx)(u,{horizontal:!0,align:`center`,className:Y.footer,justify:`space-between`,padding:16,children:(0,J.jsxs)(u,{horizontal:!0,align:`center`,className:Y.secondaryDesc,justify:`space-between`,children:[(0,J.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[(0,J.jsx)(l,{icon:m,size:14}),(0,J.jsx)(L,{className:Y.secondaryDesc,date:t||e,template:`MMM DD, YYYY`})]}),M(`category.assistant.${c}`)]})})]})})})),Z,Q,$,ae=e((()=>{w(),Z=t(s()),ne(),ie(),Q=t(o()),$=(0,Z.memo)(({data:e=[],rows:t=3})=>e.length===0?(0,Q.jsx)(re,{}):(0,Q.jsx)(T,{rows:t,width:`100%`,children:e.map((e,t)=>(0,Q.jsx)(X,{...e},t))}))}));export{K as i,ae as n,G as r,$ as t};