import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a,mr as o,xr as s}from"./app-const-Bl9rlHwj.js";import{Hr as c,Qr as l,mr as u}from"./dialog-BebLzVzY.js";import{_ as d,a as f,f as p,l as m,t as h}from"./es-CVJR_g25.js";import{Xh as g,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as v,t as y}from"./base-ui-BAv0gRbN.js";import{t as b}from"./es-LELdnrjB.js";import{Tr as x,or as S,xr as C}from"./model-runtime-client-tog6-eyE.js";import{Xo as w,Yo as T}from"./index-Djd-5Nq9.js";import{r as E,t as D}from"./discover-B1TeDH2v.js";import{n as O,t as k}from"./WorkspaceLink-DKEucXjF.js";import{n as A,t as j}from"./List-BrJ4iVLA.js";import{n as M,t as N}from"./AsyncBoundary-CzRTtM14.js";import{n as P,r as F}from"./const-Cx_ztRKW.js";import{n as I,t as L}from"./List-DrwB2BQC.js";import{n as R,r as z}from"./ListLoading-D06Xj_T3.js";var B,V,H,U,W,G=e((()=>{b(),y(),h(),_(),B=t(a()),O(),F(),V=t(i()),H=`lobe-mobile-scroll-container`,U=f(({css:e,cssVar:t})=>({more:e`
    display: flex;
    align-items: center;
    color: ${t.colorTextSecondary};
  `,tag:e`
    flex: none;

    padding-block: 0.1em;
    padding-inline: 0.3em;
    border-radius: ${t.borderRadius};

    font-size: 18px;
    font-weight: 500;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillSecondary};
    ${p.sm} {
      font-size: 14px;
    }
  `,title:e`
    margin-block-start: 0.5em;
    font-size: 20px;
    font-weight: 600;
    ${p.sm} {
      font-size: 18px;
    }
  `})),W=(0,B.memo)(({tag:e,children:t,moreLink:n,more:r})=>{let{mobile:i}=d(),a=(0,V.jsx)(`h2`,{className:U.title,children:t});return(0,V.jsxs)(l,{horizontal:!0,align:`center`,gap:16,justify:`space-between`,width:`100%`,children:[e?(0,V.jsxs)(l,{horizontal:!0,align:`center`,gap:8,children:[a,(0,V.jsx)(v,{className:U.tag,children:e})]}):a,n&&(0,V.jsx)(k,{target:n.startsWith(`http`)?`_blank`:void 0,to:n,onClick:()=>{if(!n)return;let e=i?H:P,t=document?.querySelector(`#${e}`);t&&t.scrollTo({behavior:`smooth`,top:0})},children:(0,V.jsxs)(u,{className:U.more,style:{paddingInline:6},type:`text`,children:[(0,V.jsx)(`span`,{children:r}),(0,V.jsx)(c,{icon:g})]})})]})})})),K,q,J,Y,X=e((()=>{b(),y(),h(),K=t(a()),n(),s(),T(),q=t(i()),J=f(({css:e})=>({banner:e`
    position: relative;

    width: 100%;
    padding-block: 24px;
    padding-inline: 32px;
    border-radius: 12px;

    ${p.sm} {
      padding-block: 16px;
      padding-inline: 20px;
    }
  `,banner_dark:e`
    background: linear-gradient(135deg, #5c3d0e 0%, #7a4f10 50%, #6b3a08 100%);
  `,banner_light:e`
    background: linear-gradient(135deg, #fceabb 0%, #f8b500 50%, #e88a20 100%);
  `,subtitle:e`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    ${p.sm} {
      font-size: 12px;
    }
  `,subtitle_dark:e`
    color: rgb(255 255 255 / 65%);
  `,subtitle_light:e`
    color: rgb(0 0 0 / 65%);
  `,symbols:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;
    inset-inline-end: 0;

    overflow: hidden;

    width: 50%;
    border-radius: 0 12px 12px 0;

    background: url('/app-images/banner_creator.png') right center / auto 100% no-repeat;

    ${p.sm} {
      display: none;
    }
  `,title:e`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;

    ${p.sm} {
      font-size: 18px;
    }
  `,title_dark:e`
    color: rgb(255 255 255 / 88%);
  `,title_light:e`
    color: rgb(0 0 0 / 88%);
  `})),Y=(0,K.memo)(()=>{let{t:e}=r(`discover`),t=w();return(0,q.jsxs)(l,{className:m(J.banner,t?J.banner_dark:J.banner_light),width:`100%`,children:[(0,q.jsxs)(l,{gap:8,style:{position:`relative`,zIndex:1},children:[(0,q.jsx)(`h2`,{className:m(J.title,t?J.title_dark:J.title_light),children:e(`home.creatorReward.title`)}),(0,q.jsx)(`p`,{className:m(J.subtitle,t?J.subtitle_dark:J.subtitle_light),children:e(`home.creatorReward.subtitle`)}),(0,q.jsx)(`div`,{style:{marginBlockStart:4},children:(0,q.jsx)(`a`,{href:`${o}/creator?utm_source=lobehub`,rel:`noopener noreferrer`,target:`_blank`,children:(0,q.jsx)(u,{type:`primary`,children:e(`home.creatorReward.action`)})})})]}),(0,q.jsx)(`div`,{className:J.symbols})]})})})),Z,Q,$;e((()=>{Z=t(a()),n(),M(),D(),S(),z(),G(),I(),A(),X(),Q=t(i()),$=(0,Z.memo)(()=>{let{t:e}=r(`discover`),t=E(e=>e.useAssistantList),n=E(e=>e.useFetchMcpList),{data:i,isLoading:a,error:o,mutate:s}=t({page:1,pageSize:12,sort:x.Recommended}),{data:c,isLoading:l,error:u,mutate:d}=n({page:1,pageSize:12,sort:C.Recommended});return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Y,{}),(0,Q.jsx)(W,{more:e(`home.more`),moreLink:`/community/agent`,children:e(`home.featuredAssistants`)}),(0,Q.jsx)(N,{data:i,error:o,isLoading:a,loading:(0,Q.jsx)(R,{length:8,rows:4}),onRetry:()=>s(),children:(0,Q.jsx)(L,{data:i?.items??[],rows:4})}),(0,Q.jsx)(`div`,{}),(0,Q.jsx)(W,{more:e(`home.more`),moreLink:`/community/mcp`,children:e(`home.featuredTools`)}),(0,Q.jsx)(N,{data:c,error:u,isLoading:l,loading:(0,Q.jsx)(R,{length:8,rows:4}),onRetry:()=>d(),children:(0,Q.jsx)(j,{data:c?.items??[],rows:4})})]})})}))();export{$ as default};