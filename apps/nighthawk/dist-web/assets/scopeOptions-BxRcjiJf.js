import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r,U as i,q as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as o,q as s}from"./agent-Cvv887Je.js";import{Fn as c,cs as l,ls as u}from"./app-const-Bl9rlHwj.js";import{Qr as d}from"./dialog-BebLzVzY.js";import{a as f,t as p}from"./es-CVJR_g25.js";import{c as m,et as h,i as g,t as _,x as v}from"./base-ui-BAv0gRbN.js";import{t as y}from"./es-LELdnrjB.js";import{Xt as b,bi as x}from"./model-runtime-client-tog6-eyE.js";import{o as S,s as C}from"./i18n-Cx1mybRx.js";var w,T,E,D=e((()=>{b(),y(),_(),w=t(u()),n(),i(),c(),o(),S(),T=t(l()),E=(0,w.memo)(({value:e,onChange:t,workspaceId:n,defaultToInbox:i,...o})=>{let{t:c}=r(`common`),l=a(s.agentsForBinding(n),()=>C.listAgentsForBinding(n)),u=c(`defaultSession`),f=(0,w.useMemo)(()=>(l.data??[]).map(e=>{let t=x(e,u);return{label:(0,T.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,T.jsx)(h,{avatar:e.avatar||`/avatars/agent-default.png`,background:e.backgroundColor??void 0,size:20}),(0,T.jsx)(g,{ellipsis:!0,children:t})]}),title:t,value:e.id}}),[l.data,u]),p=(0,w.useMemo)(()=>(l.data??[]).find(e=>e.isInbox)?.id,[l.data]),m=(0,w.useRef)(t);return m.current=t,(0,w.useEffect)(()=>{!i||e||!p||m.current?.(p)},[i,e,p]),(0,T.jsx)(v,{loading:l.isLoading,options:f,value:e??null,onChange:e=>t?.(e??void 0),...o})}),E.displayName=`MessengerAgentSelect`})),O,k,A,j,M,N,P,F=e((()=>{y(),_(),p(),O=t(l()),k=`personal`,A=f(({css:e})=>({personalTag:e`
    cursor: default;
    flex: none;
    margin-block: 0;
    margin-inline: auto 0;
  `,scopeName:e`
    flex: 0 1 auto;
    min-width: 0;
  `,scopeOption:e`
    flex: 1 1 auto;
    width: 100%;
    min-width: 0;
  `,scopeTitle:e`
    flex: 1;
    min-width: 0;
  `,scopeValue:e`
    > span {
      display: flex;
      width: 100%;
      min-width: 0;
    }
  `})),j={value:A.scopeValue},M=({fallbackLabel:e,fullName:t})=>t?.trim()||e,N=({avatar:e,isPersonal:t,label:n,personalTagLabel:r})=>(0,O.jsxs)(d,{horizontal:!0,align:`center`,className:A.scopeOption,gap:8,children:[(0,O.jsx)(h,{avatar:e||n,shape:`square`,size:20}),(0,O.jsx)(d,{horizontal:!0,align:`center`,className:A.scopeTitle,gap:6,children:(0,O.jsx)(g,{ellipsis:!0,className:A.scopeName,children:n})}),t&&r&&(0,O.jsx)(m,{className:A.personalTag,variant:`filled`,children:r})]}),P=({personalAvatar:e,personalLabel:t,personalTagLabel:n,workspaces:r=[]})=>[{label:N({avatar:e,isPersonal:!0,label:t,personalTagLabel:n}),title:t,value:k},...r.map(e=>({label:N({avatar:e.avatar,label:e.name}),title:e.name,value:e.id}))]}));export{M as a,j as i,P as n,E as o,F as r,D as s,k as t};