import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r,U as i,q as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as o,n as s,t as ee,u as c}from"./agent-Cvv887Je.js";import{Fn as l,cs as u,ls as d}from"./app-const-Bl9rlHwj.js";import{Cr as f,Hr as p,Qr as m,U as h,Xr as g,bt as _}from"./dialog-BebLzVzY.js";import{a as v,c as y,t as b}from"./es-CVJR_g25.js";import{Of as x,b_ as te,ni as S,x as C}from"../vendor/vendor-icons-C-Y4oLkk.js";import{et as w,i as T,t as E}from"./base-ui-BAv0gRbN.js";import{t as D,zt as O}from"./es-LELdnrjB.js";import{Xt as k,bi as A}from"./model-runtime-client-tog6-eyE.js";import{sr as j,ur as M}from"./tool-BJJaXV35.js";import{h as N,n as P}from"./icons-Bv-IX8Qe.js";import{Do as F,Eo as I}from"./index-Djd-5Nq9.js";import{n as L,t as R}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as z,t as B}from"./ModelIcon-a2TQcigw.js";import{n as V,t as H}from"./ModelSelect-CuN84mTX.js";import{n as U,t as W}from"./useResourceAccess-_ALPJapV.js";var G,K,q,J,Y=e((()=>{D(),E(),b(),G=t(d()),l(),K=t(u()),q=v(({css:e,cssVar:t})=>({banner:e`
    position: relative;
    overflow: hidden;
    height: 60px;
  `,bannerInner:e`
    filter: blur(44px);
  `,clickableAvatar:e`
    cursor: pointer;
  `,clickableTitle:e`
    cursor: pointer;

    &:hover {
      color: ${t.colorPrimary};
    }
  `,container:e`
    overflow: hidden;
    width: 280px;
    background: ${t.colorBgElevated};
  `,description:e`
    overflow: hidden;

    max-height: 80px;

    font-size: 12px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
  `,descriptionSkeleton:e`
    .ant-skeleton-paragraph {
      margin-block-start: 4px !important;
    }

    .ant-skeleton-paragraph > li {
      height: 12px !important;
    }

    .ant-skeleton-paragraph > li + li {
      margin-block-start: 6px !important;
    }
  `,header:e`
    position: relative;
    margin-block-start: -24px;
    padding-inline: 16px;
  `,name:e`
    font-size: 16px;
    font-weight: 600;
    color: ${t.colorText};
  `})),J=(0,G.memo)(({avatar:e,backgroundColor:t,description:n,headerAction:r,loading:i,onHeaderClick:a,title:o,children:s})=>(0,K.jsxs)(m,{className:q.container,children:[(0,K.jsx)(g,{className:q.banner,style:{background:y.colorFillTertiary},children:(0,K.jsx)(w,{emojiScaleWithBackground:!0,avatar:e||`/avatars/agent-default.png`,background:t??void 0,className:q.bannerInner,shape:`square`,size:400})}),(0,K.jsxs)(m,{className:q.header,gap:8,children:[(0,K.jsx)(w,{emojiScaleWithBackground:!0,avatar:e||`/avatars/agent-default.png`,background:t??void 0,className:a?q.clickableAvatar:void 0,shape:`square`,size:48,style:{border:`2px solid ${y.colorBgElevated}`},onClick:a}),(0,K.jsxs)(m,{gap:2,children:[(0,K.jsxs)(m,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,K.jsx)(T,{ellipsis:!0,className:`${q.name} ${a?q.clickableTitle:``}`,onClick:a,children:o}),r]}),n?(0,K.jsx)(f,{title:n,children:(0,K.jsx)(T,{className:q.description,ellipsis:{rows:2},children:n})}):i?(0,K.jsx)(O,{active:!0,className:q.descriptionSkeleton,paragraph:{rows:2,width:[`100%`,`60%`]},title:!1}):null]})]}),s]}))})),X,Z,Q,$,ne=e((()=>{k(),z(),D(),E(),P(),b(),C(),X=t(d()),n(),i(),V(),W(),R(),I(),o(),s(),j(),Y(),Z=t(u()),Q=v(({css:e,cssVar:t})=>({footer:e`
    padding-block: 12px;
    padding-inline: 16px;
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,section:e`
    padding-block: 12px;
    padding-inline: 16px;
  `,sectionTitle:e`
    margin-block-end: 8px;

    font-size: 11px;
    font-weight: 600;
    color: ${t.colorTextTertiary};
    text-transform: uppercase;
  `,statItem:e`
    color: ${t.colorTextSecondary};
  `,trigger:e`
    border-radius: ${t.borderRadius};

    &[data-popup-open] {
      background: ${t.colorFillTertiary};
    }
  `})),$=(0,X.memo)(({agent:e,agentId:t,groupId:n,children:i,trigger:o=`click`})=>{let{t:s}=r(`chat`),l=L(),[u,d]=(0,X.useState)(!1),[f,g]=(0,X.useState)(!1),{allowed:v}=F(`edit_own_content`),{canEditResource:y,isAccessResolved:b}=U(`agent`,u?t:void 0),{canEditResource:C,isAccessResolved:w}=U(`agentGroup`,u?n:void 0),E=v&&b&&y&&(!n||w&&C),D=M(e=>e.updateMemberAgentConfig),{data:k,isLoading:j}=a(u&&E?c.detail(t):null,()=>ee.getAgentConfigById(t),{revalidateOnFocus:!1}),P={avatar:k?.avatar??e?.avatar,backgroundColor:k?.backgroundColor??e?.backgroundColor,description:k?.description??e?.description,model:k?.model??e?.model,name:k?.name??e?.name,provider:k?.provider??e?.provider,title:k?.title??e?.title},I=async e=>{if(!(!n||!E)){g(!0);try{await D(n,t,{model:e.model,provider:e.provider})}finally{g(!1)}}},R=()=>{!n||!E||E&&(d(!1),l(`/group/${n}/profile?tab=${t}`))},z=()=>{d(!1),l(`/agent/${t}/profile`)},V=!(A(P)||P.avatar||P.description)&&j,W=k?.plugins?.length??0,G=k?.knowledgeBases?.length??0,K=k?.files?.length??0,q=W>0||G>0||K>0,Y=E&&n?P.model&&(0,Z.jsxs)(m,{className:Q.section,gap:4,children:[(0,Z.jsx)(`div`,{className:Q.sectionTitle,children:s(`groupSidebar.agentProfile.model`)}),(0,Z.jsx)(H,{loading:f,value:{model:P.model,provider:P.provider??void 0},onChange:I})]}):E&&!n&&j&&!k?(0,Z.jsxs)(m,{horizontal:!0,align:`center`,className:Q.footer,gap:14,children:[(0,Z.jsx)(O.Button,{active:!0,size:`small`,style:{height:16,width:90}}),(0,Z.jsx)(O.Button,{active:!0,size:`small`,style:{height:16,width:60}})]}):E&&(P.model||q)?(0,Z.jsxs)(m,{horizontal:!0,align:`center`,className:Q.footer,gap:14,wrap:`wrap`,children:[P.model&&(0,Z.jsxs)(m,{horizontal:!0,align:`center`,className:Q.statItem,gap:6,children:[(0,Z.jsx)(B,{model:P.model,size:14}),(0,Z.jsx)(T,{fontSize:12,type:`secondary`,children:P.model})]}),W>0&&(0,Z.jsxs)(m,{horizontal:!0,align:`center`,className:Q.statItem,gap:4,children:[(0,Z.jsx)(p,{icon:N,size:13}),(0,Z.jsx)(T,{fontSize:12,type:`secondary`,children:s(`agentProfile.skills`,{count:W})})]}),G>0&&(0,Z.jsxs)(m,{horizontal:!0,align:`center`,className:Q.statItem,gap:4,children:[(0,Z.jsx)(p,{icon:te,size:13}),(0,Z.jsx)(T,{fontSize:12,type:`secondary`,children:s(`agentProfile.knowledgeBases`,{count:G})})]}),K>0&&(0,Z.jsxs)(m,{horizontal:!0,align:`center`,className:Q.statItem,gap:4,children:[(0,Z.jsx)(p,{icon:x,size:13}),(0,Z.jsx)(T,{fontSize:12,type:`secondary`,children:s(`agentProfile.files`,{count:K})})]})]}):null,$=V?(0,Z.jsx)(`div`,{style:{padding:16,width:280},children:(0,Z.jsx)(O,{active:!0,avatar:!0,paragraph:{rows:2}})}):(0,Z.jsx)(J,{avatar:P.avatar,backgroundColor:P.backgroundColor,description:P.description,loading:j&&!P.description,title:A(P,s(`defaultSession`,{ns:`common`})),headerAction:n&&E?(0,Z.jsx)(m,{horizontal:!0,align:`center`,justify:`flex-end`,style:{paddingBlockStart:0},children:(0,Z.jsx)(_,{icon:S,size:`small`,title:s(`groupSidebar.agentProfile.settings`),onClick:R})}):void 0,onHeaderClick:E?z:void 0,children:Y});return(0,Z.jsx)(h,{classNames:o===`click`?{trigger:Q.trigger}:void 0,content:$,nativeButton:!1,open:u,placement:o===`hover`?`top`:`right`,trigger:o,styles:{content:{borderRadius:12,overflow:`hidden`,padding:0}},onOpenChange:d,children:i})})}));export{ne as n,$ as t};