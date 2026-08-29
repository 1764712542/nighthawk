import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,Xr as c,mr as l}from"./dialog-BebLzVzY.js";import{a as u,c as d,t as f}from"./es-CVJR_g25.js";import{Mt as p,Ri as m,x as h}from"../vendor/vendor-icons-C-Y4oLkk.js";import{i as g,t as _}from"./base-ui-BAv0gRbN.js";import{t as v}from"./es-LELdnrjB.js";import{r as y,t as b}from"./normalizeError-DVzrSFIN.js";var x,S,C,w,T=e((()=>{v(),_(),f(),h(),x=t(a()),n(),b(),S=t(i()),C=u(({css:e})=>({block:e`
    width: 100%;
    min-height: 180px;
    padding: 32px;
    border: 1px solid ${d.colorBorderSecondary};
    border-radius: ${d.borderRadiusLG};

    background: ${d.colorBgContainer};
  `,icon:e`
    color: ${d.colorTextTertiary};
  `,inline:e`
    padding-block: 8px;
  `,metric:e`
    color: ${d.colorTextQuaternary};
  `,page:e`
    flex: 1;
    width: 100%;
    min-height: 320px;
    padding: 48px;
  `})),w=(0,x.memo)(({variant:e=`block`,error:t,onRetry:n,retrying:i=!1,title:a,description:u,action:f})=>{let{t:h}=r(`error`),{status:_,retryable:v}=y(t),b=u??(_?h(`response.${_}`,h(`asyncState.desc`)):h(`asyncState.desc`)),x=a??h(`asyncState.title`),w=!!n&&v;return e===`metric`?(0,S.jsxs)(s,{horizontal:!0,align:`center`,className:C.metric,gap:6,children:[(0,S.jsx)(o,{icon:p,size:14}),(0,S.jsx)(g,{color:d.colorTextQuaternary,fontSize:13,children:h(`asyncState.metricLabel`)}),w&&(0,S.jsx)(l,{disabled:i,loading:i,size:`small`,type:`text`,onClick:n,children:h(`error.retry`)})]}):e===`inline`?(0,S.jsxs)(s,{horizontal:!0,align:`center`,className:C.inline,gap:8,justify:`center`,children:[(0,S.jsx)(o,{className:C.icon,icon:p,size:14}),(0,S.jsx)(g,{color:d.colorTextSecondary,fontSize:13,children:x}),w&&(0,S.jsx)(l,{disabled:i,loading:i,size:`small`,type:`text`,onClick:n,children:h(`error.retry`)})]}):(0,S.jsxs)(c,{className:e===`page`?C.page:C.block,gap:12,children:[(0,S.jsx)(o,{className:C.icon,icon:p,size:e===`page`?32:24}),(0,S.jsxs)(s,{align:`center`,gap:4,children:[(0,S.jsx)(g,{fontSize:e===`page`?16:15,weight:600,children:x}),(0,S.jsx)(g,{align:`center`,color:d.colorTextTertiary,fontSize:13,style:{maxWidth:360},children:b})]}),f??(w&&(0,S.jsx)(l,{disabled:i,icon:(0,S.jsx)(o,{icon:m}),loading:i,size:`small`,onClick:n,children:h(`error.retry`)}))]})}),w.displayName=`AsyncError`}));export{T as n,w as t};