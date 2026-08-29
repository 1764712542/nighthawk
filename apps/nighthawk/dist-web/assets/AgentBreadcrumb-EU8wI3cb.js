import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as i,Va as a,cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{Hr as c}from"./dialog-BebLzVzY.js";import{a as l,h as u,o as d}from"../vendor/vendor-react-CBcx1o7d.js";import{$t as f,a as p,b as m,t as h}from"./es-CVJR_g25.js";import{Xh as g,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{i as v,t as y}from"./base-ui-BAv0gRbN.js";import{t as b}from"./es-LELdnrjB.js";import{Xt as x,bi as S}from"./model-runtime-client-tog6-eyE.js";import{C,D as w,E as T,G as E,U as D}from"./serverConfig-CmLVLry1.js";import{a as O,i as k,n as A,t as j}from"./workspaceAwarePath-DIBsOTQc.js";import{n as M,r as N,t as P}from"./agentPathname-BaiUp9_G.js";var F,I,L,R,z=e((()=>{x(),b(),y(),m(),h(),_(),F=t(s()),n(),l(),a(),k(),M(),A(),C(),w(),I=t(o()),L=p(({css:e})=>({breadcrumb:e`
    ol {
      align-items: center;
    }

    li,
    .ant-breadcrumb-link,
    .ant-breadcrumb-link > a {
      display: flex;
      align-items: center;
    }
  `})),R=(0,F.memo)(({agentId:e,extraItems:t,title:n})=>{let{t:a}=r([`chat`,`common`]),{pathname:o}=u(),s=O(),l=T(t=>S(D.getAgentMetaById(e)(t))),p=T(E.inboxAgentId),m=p&&e===p?l||a(`inbox.title`,{ns:`chat`}):l||a(`defaultSession`,{ns:`common`}),h=(0,F.useMemo)(()=>N(o),[o]),_=(0,F.useMemo)(()=>P(j(i(`/agent`,e),s),h,s),[s,e,h]);return(0,I.jsx)(f,{className:L.breadcrumb,separator:(0,I.jsx)(c,{icon:g,size:14}),items:[{title:(0,I.jsx)(d,{to:_,children:(0,I.jsx)(v,{ellipsis:!0,as:`span`,color:`inherit`,style:{maxWidth:200},weight:500,children:m})})},...n==null?[]:[{title:(0,I.jsx)(v,{as:`span`,color:`inherit`,weight:500,children:n})}],...(t??[]).map((e,t)=>({key:`extra-${t}`,title:(0,I.jsx)(v,{as:`span`,color:`inherit`,weight:500,children:e})}))]})}),R.displayName=`AgentBreadcrumb`}));export{z as n,R as t};