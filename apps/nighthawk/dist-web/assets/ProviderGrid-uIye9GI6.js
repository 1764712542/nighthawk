import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ga as a,ls as o}from"./app-const-Bl9rlHwj.js";import{Qr as s}from"./dialog-BebLzVzY.js";import{Ut as c,a as l,b as u,c as d,l as f,t as p}from"./es-CVJR_g25.js";import{c as m,et as h,i as g,t as _}from"./base-ui-BAv0gRbN.js";import{t as v,ur as y,zt as b}from"./es-LELdnrjB.js";import{la as x}from"./model-runtime-client-tog6-eyE.js";import{kt as S,vt as C,xt as w}from"./serverConfig-CmLVLry1.js";import{Do as T,Eo as E,Xo as D,Yo as O}from"./index-Djd-5Nq9.js";import{n as k,t as A}from"./ProviderIcon-YNsISAdJ.js";import{n as j,t as M}from"./ProviderCombine-DaphOGVc.js";import{n as N,t as P}from"./InstantSwitch-DpeAVE43.js";import{n as F,t as ee}from"./AsyncBoundary-CzRTtM14.js";function te(){return null}var I=e((()=>{})),L,R,z=e((()=>{N(),E(),C(),L=t(i()),R=({id:e,Component:t,enabled:n})=>{let{allowed:r}=T(`manage_provider_key`),[i]=w(e=>[e.toggleProviderEnabled]);return t?(0,L.jsx)(t,{enabled:n,id:e}):(0,L.jsx)(P,{disabled:!r,enabled:n,size:`small`,onChange:async t=>{r&&await i(e,t)}})}})),B,V=e((()=>{p(),B=l(({css:e,cssVar:t})=>({bannerDark:e`
    opacity: 0.9;
  `,bannerLight:e`
    opacity: 0.4;
  `,containerDark:e`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillQuaternary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;
    }
  `,containerLight:e`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${t.colorBgContainer};
    box-shadow: 0 0 1px 1px ${t.colorFillSecondary} inset;

    transition: box-shadow 0.2s ${t.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${t.colorFill} inset;
    }
  `,desc:e`
    min-height: 44px;
    margin-block-end: 0 !important;
    color: ${t.colorTextDescription};
  `,tagBlue:e`
    color: ${t.geekblue};
    background: ${t.geekblue1};
  `,tagGreen:e`
    color: ${t.green};
    background: ${t.green1};
  `,time:e`
    color: ${t.colorTextDescription};
  `,title:e`
    zoom: 1.2;
    margin-block-end: 0 !important;
    font-size: 18px !important;
    font-weight: bold;
  `,token:e`
    font-family: ${t.fontFamilyCode};
  `}))})),H,U,W,G,K,q=e((()=>{a(),j(),k(),v(),_(),u(),p(),H=t(o()),n(),I(),O(),z(),V(),U=t(i()),W=e=>e.endsWith(`codingplan`),G=e=>e===`chatgpt`,K=(0,H.memo)(({id:e,description:t,name:n,enabled:i,source:a,logo:o,loading:l,onProviderSelect:u})=>{let{t:p}=r(`providers`),_=D();return l?(0,U.jsx)(s,{className:f(_?B.containerDark:B.containerLight),gap:24,padding:16,children:(0,U.jsx)(b,{active:!0})}):e===`lobehub`?(0,U.jsx)(te,{}):(0,U.jsx)(s,{className:f(_?B.containerDark:B.containerLight),gap:24,children:(0,U.jsxs)(s,{gap:12,padding:16,width:`100%`,children:[(0,U.jsx)(`div`,{style:{cursor:`pointer`},onClick:()=>{u(e)},children:(0,U.jsxs)(s,{gap:12,width:`100%`,children:[(0,U.jsx)(s,{horizontal:!0,align:`center`,justify:`space-between`,children:a===`builtin`?(0,U.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[G(e)?(0,U.jsxs)(s,{horizontal:!0,align:`center`,gap:12,children:[(0,U.jsx)(A,{provider:e,size:24,style:{borderRadius:6},type:`avatar`}),(0,U.jsx)(g,{style:{fontSize:16,fontWeight:`bold`},children:n||e})]}):(0,U.jsx)(M,{provider:e,size:24,style:{color:d.colorText},title:n}),W(e)&&(0,U.jsx)(m,{color:`geekblue`,children:`Coding Plan`})]}):(0,U.jsxs)(s,{horizontal:!0,align:`center`,gap:12,children:[o?(0,U.jsx)(h,{alt:n||e,avatar:o,size:28}):(0,U.jsx)(A,{provider:e,size:24,style:{borderRadius:6},type:`avatar`}),(0,U.jsx)(g,{style:{fontSize:16,fontWeight:`bold`},children:n||e})]})}),(0,U.jsx)(g,{className:B.desc,ellipsis:{rows:2},children:a===`custom`?t:t&&p(`${e}.description`,{defaultValue:t})})]})}),(0,U.jsx)(c,{style:{margin:`4px 0`}}),(0,U.jsxs)(s,{horizontal:!0,justify:`space-between`,children:[(0,U.jsx)(`div`,{}),(0,U.jsx)(R,{enabled:i,id:e})]})]})})})})),J,Y,X,Z,Q,$;e((()=>{v(),_(),J=t(x()),Y=t(o()),n(),F(),C(),q(),X=t(i()),Z=t(o()),Q=Array.from({length:12}).fill(`-`).map((e,t)=>`${t}x${e}`),$=(0,Y.memo)(e=>{let{onProviderSelect:t}=e,{t:n}=r(`modelProvider`),i=w(S.enabledAiProviderList,J.default),a=w(S.disabledAiProviderList,J.default),o=w(S.disabledCustomAiProviderList,J.default),[c]=w(e=>[e.initAiProviderList]),{error:l,mutate:u}=w(e=>e.useFetchAiProviderList)(),d=(0,X.jsxs)(s,{gap:24,paddingBlock:`0 16px`,children:[(0,X.jsx)(s,{horizontal:!0,align:`center`,gap:4,children:(0,X.jsx)(g,{strong:!0,style:{fontSize:16},children:n(`list.title.enabled`)})}),(0,X.jsx)(y,{gap:16,rows:3,children:Q.map(e=>(0,X.jsx)(K,{loading:!0,enabled:!1,id:e,source:`builtin`,onProviderSelect:t},e))})]});return(0,X.jsxs)(ee,{data:c?!0:void 0,error:l,errorVariant:`page`,isLoading:!c&&!l,loading:d,onRetry:()=>u(),children:[(0,X.jsxs)(s,{gap:24,children:[(0,X.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(g,{strong:!0,style:{fontSize:18},children:n(`list.title.enabled`)}),(0,X.jsx)(m,{children:i.length})]}),(0,X.jsx)(y,{gap:16,rows:3,children:i.map(e=>(0,Z.createElement)(K,{...e,key:e.id,onProviderSelect:t}))})]}),o.length>0&&(0,X.jsxs)(s,{gap:24,children:[(0,X.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(g,{strong:!0,style:{fontSize:18},children:n(`list.title.custom`)}),(0,X.jsx)(m,{children:o.length})]}),(0,X.jsx)(y,{gap:16,rows:3,children:o.map(e=>(0,Z.createElement)(K,{...e,key:e.id,onProviderSelect:t}))})]}),(0,X.jsxs)(s,{gap:24,children:[(0,X.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(g,{strong:!0,style:{fontSize:18},children:n(`list.title.disabled`)}),(0,X.jsx)(m,{children:a.length})]}),(0,X.jsx)(y,{gap:16,rows:3,children:a.map(e=>(0,Z.createElement)(K,{...e,key:e.id,onProviderSelect:t}))})]})]})})}))();export{$ as default};