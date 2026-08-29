import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Fn as i,Mn as a,cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{U as c,ht as l}from"./dialog-BebLzVzY.js";import{a as u,d,t as f}from"./es-CVJR_g25.js";import{$r as p,t as m}from"./es-LELdnrjB.js";import{Xt as h,bi as g,la as _,xi as v}from"./model-runtime-client-tog6-eyE.js";import{C as y,D as b,E as x,G as S,U as C}from"./serverConfig-CmLVLry1.js";import{v as w,y as T}from"./swrKeys-B4sicPWZ.js";import{dr as E,mr as D}from"./tool-BJJaXV35.js";import{o as O,t as k}from"./selectors-DA9tZHpr.js";import{c as A,o as j}from"./SideBarDrawer-B6Z0r7Ui.js";import{i as M,r as N,t as P}from"./useAgentList-COW6de-E.js";var F,I,L,R,z,B=e((()=>{f(),F=t(s()),I=t(o()),L=d`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`,R=u(({css:e,cssVar:t})=>({dot:e`
    position: relative;
    z-index: 1;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: ${t.colorInfo};
  `,ripple:e`
    position: absolute;
    inset: 0;

    width: 6px;
    height: 6px;
    margin: auto;
    border: 1px solid ${t.colorInfo};
    border-radius: 50%;

    background: transparent;

    animation: ${L} 1.8s ease-out infinite;
  `,wrapper:e`
    position: relative;

    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 14px;
    height: 14px;
  `})),z=(0,F.memo)(({label:e})=>(0,I.jsxs)(`span`,{"aria-label":e,className:R.wrapper,"data-testid":`topic-unread-dot`,role:e?`status`:void 0,children:[(0,I.jsx)(`span`,{className:R.ripple}),(0,I.jsx)(`span`,{className:R.dot})]}))}));function V(e){let t=(0,H.useRef)(null);return(0,H.useEffect)(()=>{queueMicrotask(()=>{t.current?.input?.focus()})},[]),(0,U.jsx)(p,{...e,ref:t})}var H,U,W,G=e((()=>{m(),H=t(s()),j(),U=t(o()),W=(0,H.memo)(({open:e,title:t,onOpenChange:n,onSave:r,onCancel:i,placement:a=`bottomLeft`,width:o=320})=>{let[s,u]=(0,H.useState)(t),d=(0,H.useRef)(!1),f=A();(0,H.useEffect)(()=>{e&&(u(t),d.current=!1)},[e,t]);let p=(0,H.useCallback)(async()=>{d.current||s&&t!==s&&(d.current=!0,await r(s))},[s,t,r]),m=(0,H.useCallback)(()=>{n(!1)},[n]);return(0,U.jsx)(c,{open:e,placement:a,portalProps:f,trigger:`click`,content:(0,U.jsx)(V,{defaultValue:t,onBlur:p,onChange:e=>u(e.target.value),onClick:l,onKeyDown:(0,H.useCallback)(e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),i?.(),m())},[i,m]),onPressEnter:()=>{p(),m()}}),styles:{content:{padding:4,width:o}},onOpenChange:e=>{e||p(),n(e)},children:(0,U.jsx)(`div`,{})})})})),K,q,J,Y=e((()=>{h(),K=t(_()),q=t(s()),n(),w(),i(),P(),y(),b(),E(),k(),J=()=>{let{t:e}=r(`chat`),t=x(S.inboxAgentId),n=x(C.getAgentMetaById(t??``)),i=D(O.pinnedAgents,K.default),o=D(O.agentGroups,K.default),s=D(O.ungroupedAgents,K.default),c=D(O.privatePinnedAgents,K.default),l=D(O.privateAgentGroups,K.default),u=D(O.privateUngroupedAgents,K.default),d=T(),f=M(),p=N();return(0,q.useMemo)(()=>{let r=new Set,m=t=>{let n=[];for(let i of t)for(let t of f(i))t.type===`agent`&&(r.has(t.id)||(r.add(t.id),n.push({avatar:typeof t.avatar==`string`?t.avatar:void 0,backgroundColor:t.backgroundColor||void 0,id:t.id,pinned:t.pinned??!1,subtitle:v(t),title:g(t,e(`untitledAgent`))})));return n},h=m([c,p(l).flatMap(e=>e.items),u]),_=[];return t&&!r.has(t)&&(r.add(t),_.push({avatar:(typeof n?.avatar==`string`?n.avatar:void 0)??a,backgroundColor:n?.backgroundColor||void 0,id:t,title:g(n,`Lobe AI`)})),_.push(...m([i,p(o).flatMap(e=>e.items),s])),{privateRows:h,showPrivateSection:!!d&&h.length>0,workspaceRows:_}},[d,o,t,n,f,p,i,l,c,u,e,s])}}));export{z as a,G as i,J as n,B as o,W as r,Y as t};