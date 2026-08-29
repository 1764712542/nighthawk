import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Hr as i}from"./dialog-BebLzVzY.js";import{a,c as o,t as s}from"./es-CVJR_g25.js";import{El as c,Qg as l,ms as u,wr as d,x as f}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as p}from"./es-LELdnrjB.js";import{a as m,o as h}from"./useDeviceList-C1am9Sd6.js";var g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{p(),s(),f(),g=t(r()),h(),_=t(n()),v=a(({css:e})=>({dotOffline:e`
    flex: none;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: ${o.colorTextQuaternary};
  `,dotOnline:e`
    flex: none;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: ${o.colorSuccess};
    box-shadow: 0 0 0 2px ${o.colorSuccessBg};
  `,status:e`
    display: inline-flex;
    gap: 6px;
    align-items: center;
  `})),y=[`auto`,`device`,`none`,`sandbox`],b=e=>!!e&&y.includes(e),x=(e,t)=>e===`device`&&t?`device:${t}`:`target:${e}`,S=e=>{if(e.startsWith(`device:`)){let t=e.slice(7);return t?{deviceId:t,target:`device`}:void 0}if(!e.startsWith(`target:`))return;let t=e.slice(7);return[`auto`,`local`,`none`,`sandbox`].includes(t)?{target:t}:void 0},C=({boundDeviceId:e,configuredTarget:t,devices:n,isHeterogeneous:r})=>{if(t===`device`){let t=n.find(t=>t.deviceId===e);return t?{deviceId:t.deviceId,target:`device`}:void 0}return b(t)?{target:t}:t===void 0&&!r?{target:`none`}:void 0},w=e=>({personal:(e??[]).filter(e=>e.scope===`personal`),privateWorkspace:(e??[]).filter(e=>e.scope===`workspace`&&e.visibility===`private`),publicWorkspace:(e??[]).filter(e=>e.scope===`workspace`&&e.visibility===`public`),workspace:(e??[]).filter(e=>e.scope===`workspace`&&e.visibility!==`private`)}),T=(0,g.memo)(({devicePlatform:e,size:t=14,target:n})=>{switch(n){case`auto`:return(0,_.jsx)(i,{icon:d,size:t});case`device`:return(0,_.jsx)(_.Fragment,{children:m(e,t)});case`local`:return(0,_.jsx)(i,{icon:c,size:t});case`none`:return(0,_.jsx)(i,{icon:u,size:t});case`sandbox`:return(0,_.jsx)(i,{icon:l,size:t})}}),T.displayName=`ExecutionTargetPicker.ExecutionTargetIcon`,E=(0,g.memo)(({offlineLabel:e,online:t,onlineLabel:n})=>(0,_.jsxs)(`span`,{className:v.status,children:[(0,_.jsx)(`span`,{"aria-hidden":!0,className:t?v.dotOnline:v.dotOffline}),(0,_.jsx)(`span`,{children:t?n:e})]})),E.displayName=`ExecutionTargetPicker.ExecutionTargetDeviceStatus`}));export{D as a,w as i,T as n,S as o,x as r,C as s,E as t};