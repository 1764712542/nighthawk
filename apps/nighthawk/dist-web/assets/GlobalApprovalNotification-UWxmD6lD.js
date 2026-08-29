import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,O as r,P as i,k as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{O as o,Qn as s,cs as c,fa as l,lr as ee,ls as u,ur as te}from"./app-const-Bl9rlHwj.js";import{bt as d}from"./dialog-BebLzVzY.js";import{a as f,t as p}from"./es-CVJR_g25.js";import{O as m,d as h,f as g}from"../vendor/vendor-ui-runtime-Dixawc49.js";import{Jh as _,uv as ne,x as v}from"../vendor/vendor-icons-C-Y4oLkk.js";import{et as re,t as y}from"./base-ui-BAv0gRbN.js";import{Xt as b,bi as x}from"./model-runtime-client-tog6-eyE.js";import{C as S,D as C,E as ie,U as ae}from"./serverConfig-CmLVLry1.js";import{a as oe,i as w,n as T,t as se}from"./workspaceAwarePath-DIBsOTQc.js";import{r as E}from"./src-DYf_YQ1m.js";import{Kt as D,Yt as O,dt as ce,ft as le}from"./tool-BJJaXV35.js";import{A as ue,Ct as k,_ as de,s as fe,t as A,wt as j}from"./selectors-BsEaCsu0.js";import{Tt as pe}from"./Messages-CHVzbeQ8.js";import{n as me,t as M}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{i as N,r as P}from"./Link-DpvNUhdU.js";import{n as F,t as I}from"./useOperationState-dJPQqaVM.js";import{a as L,i as R,o as he,s as ge,t as _e}from"./Conversation-B6Z_LIMP.js";var z,B=e((()=>{p(),z=f(({css:e,cssVar:t})=>({actions:e`
    padding-block: 8px 12px;
    padding-inline: 12px;
    border-block-start: 1px solid ${t.colorBorderSecondary};
    background: color-mix(in srgb, ${t.colorBgElevated} 92%, ${t.colorFillSecondary});

    &:empty {
      display: none;
    }
  `,card:e`
    pointer-events: auto;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: 100%;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgElevated};
    box-shadow: ${t.boxShadowSecondary};
  `,content:e`
    overflow-y: auto;
    flex: 1;

    min-height: 0;
    max-height: 42vh;
    padding-block: 6px 8px;
    padding-inline: 12px;
  `,header:e`
    display: flex;
    gap: 8px;
    align-items: center;

    padding-block: 8px;
    padding-inline: 12px;
  `,headerMeta:e`
    overflow: hidden;
    flex: 1;
    min-width: 0;
  `,headerSubtitle:e`
    overflow: hidden;
    display: flex;
    gap: 8px;
    align-items: baseline;

    font-size: 12px;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      font-size: 14px;
      font-weight: 500;
      color: ${t.colorText};
    }
  `,headerTitle:e`
    font-size: 16px;
    font-weight: 600;
    color: ${t.colorText};
    overflow-wrap: anywhere;
  `,moreHint:e`
    pointer-events: auto;

    align-self: center;

    padding-block: 2px;

    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,pill:e`
    pointer-events: auto;
    cursor: pointer;

    display: flex;
    gap: 8px;
    align-items: center;

    height: 36px;
    padding-inline: 14px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 999px;

    font-size: 13px;
    color: ${t.colorText};

    background: ${t.colorBgElevated};
    box-shadow: ${t.boxShadowSecondary};
  `,pillDot:e`
    flex-shrink: 0;

    width: 7px;
    height: 7px;
    border-radius: 999px;

    background: ${t.colorPrimary};
  `,stack:e`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  `,requestContext:e`
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding-block: 4px 12px;
    padding-inline: 12px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,userRequestBody:e`
    overflow-y: auto;
    max-height: 120px;

    /* Trim the Markdown block's outer margins so it sits flush in the strip. */
    p:first-child {
      margin-block-start: 0;
    }

    p:last-child {
      margin-block-end: 0;
    }
  `,wrapper:e`
    pointer-events: none;

    position: fixed;
    z-index: 1000;
    inset-block-start: var(--global-approval-top, 16px);
    inset-inline-start: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    width: min(640px, 92vw);
  `}))})),V,H,U,ve=e((()=>{o(),b(),y(),v(),V=t(u()),n(),w(),_e(),ge(),L(),N(),M(),T(),I(),S(),C(),D(),A(),k(),B(),H=t(c()),U=(0,V.memo)(({group:e})=>{let{context:t,interventions:n}=e,{t:r}=i(`chat`),a=me(),o=oe(),c=(0,V.useMemo)(()=>j(t),[t]),l=O(e=>e.dbMessagesMap[c]),u=O(e=>e.replaceMessages),f=(0,V.useCallback)((e,t,n)=>{u(e,{context:t,source:n?.source})},[u]),p=F(t),m=ie(ae.getAgentMetaById(t.agentId)),[h,g]=O(e=>[t.topicId?de.getTopicById(t.topicId)(e)?.title:void 0,e.useFetchTopicDetail]);g(t.topicId&&!h?t.topicId:void 0);let[_,v]=(0,V.useState)(null),[y,b]=(0,V.useState)(null),S=(0,V.useMemo)(()=>{if(y){let e=n.findIndex(e=>e.toolCallId===y);if(e>=0)return e}return 0},[n,y]),C=(0,V.useCallback)(e=>{b(n[e]?.toolCallId??null)},[n]),w=(0,V.useCallback)(()=>{let e;t.groupId?e=t.topicId?ee(t.groupId,t.topicId):te(t.groupId):t.topicId&&(e=s(t.agentId,t.topicId)),e&&a(se(e,t.workspaceSlug??o),{escape:!0})},[o,t.agentId,t.groupId,t.topicId,t.workspaceSlug,a]),T=!!(t.groupId||t.topicId),E=n[S],D=(0,V.useMemo)(()=>{if(!l?.length||!E)return``;let e=E.assistantGroupId??E.toolMessageId,t=l.findIndex(t=>t.id===e);t<0&&(t=l.length-1);for(let e=t;e>=0;--e){let t=l[e];if(t.role===`user`&&typeof t.content==`string`&&t.content.trim())return t.content.trim()}return``},[l,E]);return E?(0,H.jsx)(pe,{skipFetch:!0,context:t,hasInitMessages:!!l,messages:l,operationState:p,onMessagesChange:f,children:(0,H.jsxs)(`div`,{"data-pending-hotkey-scope":!0,className:z.card,children:[(0,H.jsxs)(`div`,{className:z.header,children:[(0,H.jsx)(re,{avatar:m.avatar,background:m.backgroundColor,size:28,title:x(m)}),(0,H.jsx)(`div`,{className:z.headerMeta,children:(0,H.jsxs)(`div`,{className:z.headerSubtitle,children:[x(m)&&(0,H.jsx)(`span`,{children:x(m)}),r(`globalApproval.subtitle`)]})}),T&&(0,H.jsx)(d,{icon:ne,size:`small`,title:r(`globalApproval.goToConversation`),onClick:w})]}),(0,H.jsxs)(`div`,{className:z.requestContext,children:[(0,H.jsx)(`div`,{className:z.headerTitle,children:h||r(`globalApproval.title`)}),D&&(0,H.jsx)(`div`,{className:z.userRequestBody,children:(0,H.jsx)(P,{children:D})})]}),n.length>1&&(0,H.jsx)(R,{activeIndex:S,interventions:n,onTabChange:C}),(0,H.jsx)(`div`,{className:z.content,children:(0,H.jsx)(he,{actionsPortalTarget:_,intervention:E},E.toolCallId)}),(0,H.jsx)(`div`,{className:z.actions,ref:v})]})}):null}),U.displayName=`ApprovalCard`})),W,G,K,q,J=e((()=>{W=t(u()),r(),le(),D(),A(),k(),G=(e,t)=>{let n=e.find(e=>e.agentId&&e.agentId!==`supervisor`);if(!n?.agentId)return;let r={agentId:n.agentId,threadId:n.threadId??void 0,topicId:n.topicId??void 0};return j(r)===t?r:void 0},K=(e,t,n,r)=>{let i=new Map;for(let e of Object.values(t)){let t=e.context;if(!t?.agentId)continue;let n=j(t);i.has(n)||i.set(n,t)}let a=[];for(let[t,o]of Object.entries(e)){if(t===n||t===r||!o?.length)continue;let e=ce(o);if(e.length===0)continue;let s=i.get(t)??G(o,t);s&&a.push({context:s,interventions:e,key:t})}return a},q=()=>{let{activeAgentId:e,dbMessagesMap:t,operations:n,portalTopicId:r}=O(a(e=>({activeAgentId:e.activeAgentId,dbMessagesMap:e.dbMessagesMap,operations:e.operations,portalTopicId:fe.portalTopicId(e)}))),i=O(ue.currentDisplayChatKey),o=(0,W.useMemo)(()=>e&&r?j({agentId:e,scope:`main`,topicId:r}):void 0,[e,r]);return(0,W.useMemo)(()=>K(t,n,i,o),[t,n,i,o])}})),Y,X,Z,Q,$;e((()=>{E(),y(),v(),h(),Y=t(u()),n(),l(),ve(),B(),J(),X=t(c()),Z={damping:30,stiffness:320,type:`spring`},Q=16,$=(0,Y.memo)(()=>{let{t:e}=i(`chat`),t=q(),[n,r]=(0,Y.useState)(!1),a=(0,Y.useRef)(0);(0,Y.useEffect)(()=>{t.length>a.current&&r(!1),a.current=t.length},[t.length]);let o=t.length>0,s=t[0],c=t.length-1;return(0,X.jsx)(`div`,{className:z.wrapper,style:{"--global-approval-top":`${Q}px`},children:(0,X.jsx)(m,{mode:`popLayout`,children:o&&(n?(0,X.jsxs)(g.div,{layout:!0,animate:{opacity:1,scale:1,y:0},className:z.pill,exit:{opacity:0,scale:.9,y:-16},initial:{opacity:0,scale:.9,y:-16},transition:Z,onClick:()=>r(!1),children:[(0,X.jsx)(`span`,{className:z.pillDot}),e(`globalApproval.pendingCount`,{count:t.length})]},`pill`):(0,X.jsxs)(g.div,{layout:!0,animate:{opacity:1,scale:1,y:0},className:z.stack,exit:{opacity:0,scale:.96,y:-16},initial:{opacity:0,scale:.96,y:-16},transition:Z,children:[(0,X.jsx)(g.div,{layout:!0,style:{alignSelf:`flex-end`,pointerEvents:`auto`},children:(0,X.jsx)(d,{icon:_,size:`small`,title:e(`globalApproval.collapse`),onClick:()=>r(!0)})}),(0,X.jsx)(m,{mode:`popLayout`,children:s&&(0,X.jsx)(g.div,{layout:!0,animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.96,y:-16},initial:{opacity:0,scale:.96,y:-16},style:{pointerEvents:`auto`,width:`100%`},transition:Z,children:(0,X.jsx)(U,{group:s})},s.key)}),c>0&&(0,X.jsx)(`div`,{className:z.moreHint,children:e(`globalApproval.moreCount`,{count:c})})]},`stack`))})})}),$.displayName=`GlobalApprovalNotification`}))();export{$ as default};