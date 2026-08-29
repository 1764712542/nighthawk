import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as i,Va as a,cs as o,ls as s,sr as c,xr as l}from"./app-const-Bl9rlHwj.js";import{Qr as u,Xr as d,bt as f,ht as p}from"./dialog-BebLzVzY.js";import{a as m,c as h,t as g}from"./es-CVJR_g25.js";import{Am as _,Qu as v,x as y}from"../vendor/vendor-icons-C-Y4oLkk.js";import{i as b,t as x}from"./base-ui-BAv0gRbN.js";import{Or as S,Ta as C,j as w,t as T,ur as E}from"./es-LELdnrjB.js";import{n as D,t as O}from"./Github-Bay25f86.js";import{n as k,t as A}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as j,t as M}from"./ModelTag-DzjXVFLq.js";import{n as N,t as P}from"./ProviderCombine-DaphOGVc.js";import{n as F,t as I}from"./WorkspaceLink-DKEucXjF.js";var L,R,z,B=e((()=>{T(),y(),L=t(s()),n(),R=t(o()),z=(0,L.memo)(({search:e,...t})=>{let{t:n}=r(`discover`);return(0,R.jsx)(d,{height:`100%`,style:{minHeight:`50vh`},width:`100%`,children:(0,R.jsx)(S,{description:n(e?`providers.empty.search`:`providers.empty.description`),icon:_,title:e?void 0:n(`providers.empty.title`),type:e?`default`:`page`,descriptionProps:{fontSize:14},style:{maxWidth:400},...t})})}),z.displayName=`ProviderEmpty`})),V,H,U,W,G=e((()=>{D(),j(),N(),T(),x(),g(),y(),V=t(s()),n(),a(),l(),A(),F(),H=t(o()),U=m(({css:e,cssVar:t})=>({author:e`
      color: ${t.colorTextDescription};
    `,code:e`
      font-family: ${t.fontFamilyCode};
    `,desc:e`
      flex: none;
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
    `})),W=(0,V.memo)(({url:e,name:t,description:n,identifier:a,models:o})=>{let s=k(),l=i(`/community/provider`,a),{t:d}=r([`discover`,`providers`]);return(0,H.jsxs)(C,{clickable:!0,"data-testid":`provider-item`,height:`100%`,variant:`outlined`,width:`100%`,style:{overflow:`hidden`,position:`relative`},onClick:()=>{s(l)},children:[(0,H.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,padding:16,width:`100%`,children:[(0,H.jsxs)(u,{title:a,style:{overflow:`hidden`},children:[(0,H.jsx)(I,{style:{color:`inherit`,overflow:`hidden`},to:l,children:(0,H.jsx)(P,{provider:a,size:28,style:{flex:`none`}})}),(0,H.jsxs)(`div`,{className:U.author,children:[`@`,t]})]}),(0,H.jsxs)(u,{horizontal:!0,align:`center`,children:[(0,H.jsx)(`a`,{href:e,rel:`noopener noreferrer`,target:`_blank`,onClick:p,children:(0,H.jsx)(f,{color:h.colorTextDescription,icon:v})}),(0,H.jsx)(`a`,{href:i(c,`blob/main/src/config/modelProviders`,`${a}.ts`),rel:`noopener noreferrer`,target:`_blank`,onClick:p,children:(0,H.jsx)(f,{fill:h.colorTextDescription,icon:O})})]})]}),(0,H.jsx)(u,{flex:1,gap:12,paddingInline:16,children:n&&(0,H.jsx)(b,{className:U.desc,ellipsis:{rows:3},children:d(`${a}.description`,{defaultValue:n,ns:`providers`})})}),(0,H.jsx)(u,{horizontal:!0,align:`center`,className:U.footer,justify:`space-between`,padding:16,children:(0,H.jsx)(w,{horizontal:!0,gap:6,position:`right`,size:10,width:`100%`,children:o.slice(0,6).filter(Boolean).map(e=>(0,H.jsx)(I,{to:i(`/community/model`,e),children:(0,H.jsx)(M,{model:e,style:{margin:0}})},e))})})]})})})),K,q,J,Y=e((()=>{T(),K=t(s()),B(),G(),q=t(o()),J=(0,K.memo)(({data:e=[],rows:t=3})=>e.length===0?(0,q.jsx)(z,{}):(0,q.jsx)(E,{rows:t,width:`100%`,children:e.map((e,t)=>(0,q.jsx)(W,{...e},t))}))}));export{B as i,Y as n,z as r,J as t};