import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,bt as c}from"./dialog-BebLzVzY.js";import{D as l}from"../vendor/vendor-react-CBcx1o7d.js";import{a as u,i as d,t as f}from"./es-CVJR_g25.js";import{Jh as p,eg as ee,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{D as te,t as ne}from"./base-ui-BAv0gRbN.js";import{t as h}from"./es-LELdnrjB.js";import{A as re,C as g,D as _,E as ie}from"./serverConfig-CmLVLry1.js";import{t as v}from"./browser-C6epcJfA.js";import{a as y,s as b,t as ae}from"./swrKeys-B4sicPWZ.js";import{n as oe,t as se}from"./agentDocument-BBrfndcx.js";import{Kt as ce,O as x,R as S,Yt as C,k as le}from"./tool-BJJaXV35.js";import{Ct as w,wt as ue}from"./selectors-BsEaCsu0.js";import{Tt as de}from"./Messages-CHVzbeQ8.js";import{r as T}from"./OpStatusTray-DADF8czB.js";import{n as fe,t as E}from"./useOperationState-dJPQqaVM.js";import{n as D,t as O}from"./Conversation-B6Z_LIMP.js";import{_ as k,g as pe,n as me,t as he}from"./Toolbar-DTxA7wPv.js";import{a as A,c as ge,l as _e,n as ve,o as ye,s as be,t as xe,u as Se}from"./AgentHome-DpeIoj4i.js";var j,M,Ce=e((()=>{h(),ve(),O(),j=t(i()),M=()=>(0,j.jsx)(s,{"data-testid":`floating-chat-panel-body`,flex:1,height:`100%`,style:{minHeight:0,overflow:`hidden`,position:`relative`},width:`100%`,children:(0,j.jsx)(T,{welcome:(0,j.jsx)(xe,{})})})})),N,P,F,we=e((()=>{N=t(a()),P=new Set,F=()=>{let e=(0,N.useRef)(null);e.current||=Symbol(`FloatingChatPanel`),(0,N.useLayoutEffect)(()=>{if(P.size>0)throw Error(`[FloatingChatPanel] Only one instance allowed per page. Multiple instances would conflict over global chatStore.mainInputEditor. Ensure the previous instance is unmounted before mounting a new one.`);let t=e.current;return P.add(t),()=>{P.delete(t)}},[])}})),I,L,R,z,Te=e((()=>{h(),f(),m(),I=t(a()),n(),L=t(i()),R=u(({css:e,cssVar:t})=>({bar:e`
    pointer-events: auto;

    position: absolute;
    inset-block-end: 100%;
    inset-inline: 0;
    transform: translateY(4px);

    display: flex;
    align-items: center;
    justify-content: center;

    height: 28px;
    padding-block-end: 4px;

    opacity: 0;
    background: transparent;

    transition:
      opacity 160ms ease-out,
      transform 160ms ease-out;
  `,visible:e`
    transform: translateY(0);
    opacity: 1;
  `,trigger:e`
    cursor: pointer;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    height: 24px;
    padding-inline: 10px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 12px;

    font-size: 12px;
    line-height: 1;
    color: ${t.colorTextSecondary};

    background: ${t.colorBgElevated};
    box-shadow: ${t.boxShadowTertiary};

    transition:
      color 160ms,
      border-color 160ms,
      background 160ms;

    &:hover {
      border-color: ${t.colorBorder};
      color: ${t.colorText};
      background: ${t.colorBgContainer};
    }
  `,hidden:e`
    pointer-events: none;
  `})),z=(0,I.memo)(({bottomOffset:e=0,visible:t,onExpand:n})=>{let{t:i}=r(`chat`),a=R;return(0,L.jsx)(`div`,{"aria-hidden":!t,className:`${a.bar} ${t?a.visible:a.hidden}`,"data-testid":`floating-chat-panel-hover-bar`,style:e>0?{insetBlockEnd:`calc(100% + ${e}px)`}:void 0,children:(0,L.jsxs)(`button`,{className:a.trigger,"data-testid":`floating-chat-panel-expand-button`,tabIndex:t?0:-1,type:`button`,onClick:n,children:[(0,L.jsx)(o,{icon:p,size:12}),i(`floatingChatPanel.expand`,{defaultValue:`Expand`})]})})}),z.displayName=`FloatingChatPanelHoverExpandBar`})),B,V,H,U,Ee,De,W,G,Oe,ke,K,Ae=e((()=>{f(),B=t(a()),V=t(l()),O(),x(),Te(),H=t(i()),U=u(({css:e})=>({row:e`
    position: relative;
    flex-shrink: 0;
  `,surface:e`
    view-transition-name: floating-chat-panel-input;
  `})),Ee=d`
  ::view-transition-old(floating-chat-panel-input),
  ::view-transition-new(floating-chat-panel-input) {
    animation-duration: 240ms;
    animation-timing-function: cubic-bezier(0.32, 0.72, 0, 1);
  }
`,De=typeof document<`u`&&typeof document.startViewTransition==`function`,W=e=>{if(!De){e();return}let t=document.documentElement,n=t.style.viewTransitionName;t.style.viewTransitionName=`none`;let r=document.startViewTransition(()=>{(0,V.flushSync)(e)}),i=()=>{t.style.viewTransitionName=n};r.finished.then(i,i)},G=[],Oe=[`typo`],ke=[`contextWindow`],K=(0,B.memo)(({isCollapsed:e,onExpand:t,showExpandBar:n=!0})=>{let r=U,[i,a]=(0,B.useState)(e),[o,s]=(0,B.useState)(!1),c=(0,B.useRef)(!1),l=le(S.chatInputOverlayHeight);(0,B.useEffect)(()=>{i!==e&&W(()=>a(e))},[e,i]);let u=(0,B.useCallback)(()=>{c.current||(c.current=!0,W(()=>s(!0)))},[]),d=(0,B.useCallback)(e=>{let t=e.relatedTarget;t&&e.currentTarget.contains(t)||c.current&&(c.current=!1,W(()=>s(!1)))},[]),f=i&&!o;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Ee,{}),(0,H.jsxs)(`div`,{className:r.row,"data-collapsed":e,"data-testid":`floating-chat-panel-input-row`,onBlur:d,onFocus:u,children:[n&&(0,H.jsx)(z,{bottomOffset:l,visible:e&&o,onExpand:t}),(0,H.jsx)(`div`,{className:r.surface,children:(0,H.jsx)(D,{allowExpand:!1,compact:f,leftActions:f?G:Oe,rightActions:f?G:ke,showControlBar:!1})})]})]})}),K.displayName=`FloatingChatPanelInputRow`})),q,J,Y,X,je,Z,Q,Me=e((()=>{ne(),f(),m(),q=t(a()),n(),O(),_e(),be(),me(),k(),E(),A(),g(),_(),ce(),w(),Ce(),we(),Ae(),J=t(i()),Y=[320,800],X=Y[0],je=Y.at(-1),Z=u(({css:e,cssVar:t})=>({panel:e`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-self: stretch;

    width: 100%;
    border-block-start: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorBgContainer};

    transition:
      border-block-start-color 240ms cubic-bezier(0.32, 0.72, 0, 1),
      background 240ms cubic-bezier(0.32, 0.72, 0, 1);

    &[data-collapsed='true'] {
      border-block-start-color: transparent;
      background: transparent;
    }
  `,panelEmbedded:e`
    flex: 1;
    min-height: 0;
    border-block-start: none;
  `,sheetSeamless:e`
    border: none;
    border-radius: 0;
    box-shadow: none;
  `,titleSpacer:e`
    flex: 1;
  `})),Q=(0,q.memo)(({agentId:e,topicId:t,documentId:n,agentDocumentId:i,actionsBar:a,hooks:o,defaultOpen:s=!1,mode:l=`overlay`,width:u=`100%`,title:d,headerActions:f})=>{F();let{t:p}=r(`chat`),m=l===`embedded`,[ne,h]=(0,q.useState)(t),g=m?ne:t,_=(0,q.useMemo)(()=>({agentId:e,...i?{agentDocumentId:i}:{},...n?{documentId:n}:{},...m?{isolatedTopic:!0}:{},scope:`main`,threadId:null,topicId:g}),[g,i,e,n,m]),v=(0,q.useMemo)(()=>ue(_),[_]),y=C(e=>e.dbMessagesMap[v]),b=C(e=>e.replaceMessages),ae=(0,q.useCallback)((e,t,n)=>{b(e,{context:t,source:n?.source})},[b]),oe=fe(_),se=ye(),ce=a??se,[x,S]=(0,q.useState)(!s),[le,w]=(0,q.useState)(X),T=(0,q.useCallback)(()=>{w(X),S(!1)},[]),E=(0,q.useCallback)(()=>{S(!0),w(X)},[]),D=(0,q.useCallback)(e=>{e||E()},[E]),O=Se({agentChatConfig:ie(re.getChatConfigById(e)),conversationKey:v,topicId:t}),k=(0,q.useMemo)(()=>ge(o,{onBeforeSendMessage:async()=>{T()},onTopicCreated:e=>{m&&h(e)}},O),[O,T,o,m]),me=(0,J.jsx)(c,{"data-testid":`floating-chat-panel-collapse-button`,icon:ee,size:`small`,title:p(`floatingChatPanel.collapse`,{defaultValue:`Collapse`}),onClick:E}),A={activeSnapPoint:le,className:Z.sheetSeamless,closeThreshold:.5,defaultOpen:!1,dismissible:!0,headerActions:(0,J.jsxs)(J.Fragment,{children:[f,me]}),maxHeight:je,minHeight:X,mode:`inline`,onOpenChange:D,onSnapPointChange:w,open:!x,restingHeight:X,snapPoints:[...Y],title:d??(0,J.jsx)(`span`,{className:Z.titleSpacer}),variant:`elevated`,width:u};return(0,J.jsx)(de,{actionsBar:ce,context:_,hasInitMessages:!!y,hooks:k,messages:y,operationState:oe,onMessagesChange:ae,children:(0,J.jsx)(`div`,{className:`${Z.panel} ${m?Z.panelEmbedded:``}`,"data-collapsed":m?!1:x,"data-mode":l,"data-testid":`floating-chat-panel`,children:m?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(pe,{defaultExpand:!0,children:(0,J.jsx)(he,{topicId:g,onTopicChange:h})}),(0,J.jsx)(M,{}),(0,J.jsx)(K,{isCollapsed:!1,showExpandBar:!1,onExpand:T})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(te,{...A,children:(0,J.jsx)(M,{})}),(0,J.jsx)(K,{isCollapsed:x,onExpand:T})]})})})}),Q.displayName=`FloatingChatPanel`})),Ne,Pe,$,Fe,Ie=e((()=>{Ne=t(v()),Pe=t(a()),y(),oe(),$=(0,Ne.default)(`lobe-chat:useDocumentChatTopic`),Fe=e=>{let{agentId:t,documentId:n}=e,r=!!t&&!!n,{data:i,error:a,isLoading:o}=b(r?ae.documentChatTopic(t,n):null,()=>se.getOrCreateChatTopic({agentId:t,documentId:n}));return(0,Pe.useEffect)(()=>{if(!r){$(`skipped — agentId=%o documentId=%o`,t,n);return}if(a){console.error(`[useDocumentChatTopic] getOrCreateChatTopic failed`,{agentId:t,documentId:n,error:a});return}i?.topicId&&$(`resolved topicId=%s for (%s, %s)`,i.topicId,t,n)},[r,t,n,i?.topicId,a]),{error:a,isLoading:o,topicId:i?.topicId}}}));export{Me as i,Fe as n,Q as r,Ie as t};