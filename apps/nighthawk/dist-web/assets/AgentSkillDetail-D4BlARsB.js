import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,Xr as c,bt as l}from"./dialog-BebLzVzY.js";import{a as u,b as d,c as f,t as p,vn as m}from"./es-CVJR_g25.js";import{Pp as h,vp as g,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as v}from"./base-ui-BAv0gRbN.js";import{t as y}from"./es-LELdnrjB.js";import{a as b,t as x}from"./tool-BJJaXV35.js";import{h as S,n as C}from"./icons-Bv-IX8Qe.js";import{n as w,t as T}from"./Github-Bay25f86.js";import{n as E,t as D}from"./PublishedTime-BevDVLbb.js";import{a as O,i as k,n as A,r as j,t as M}from"./ContentViewer-CCwIrrH-.js";var N,P,F,I=e((()=>{y(),C(),N=t(a()),P=t(i()),F=(0,N.memo)(({size:e=40,className:t,style:n})=>(0,P.jsx)(c,{className:t,flex:`none`,style:{borderRadius:Math.floor(e*.1),color:`#000`,height:e,overflow:`hidden`,width:e,...n},children:(0,P.jsx)(S,{color:`#000`,size:e,style:{transform:`scale(0.75)`}})})),F.displayName=`SkillAvatar`})),L,R,z,B,V;e((()=>{w(),y(),v(),d(),p(),_(),L=t(a()),n(),E(),I(),k(),x(),A(),R=t(i()),z=u(({css:e,cssVar:t})=>({description:e`
    overflow: hidden;

    margin: 0;

    font-size: 13px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,divider:e`
    flex-shrink: 0;
    width: 1px;
    background: ${t.colorBorderSecondary};
  `,left:e`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,meta:e`
    flex-shrink: 0;
    padding: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,name:e`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
  `,right:e`
    container-type: size;
    overflow: auto;
    flex: 1;
  `})),B=(e=[])=>{let t={},n=e=>{for(let r of e)r.type===`file`&&r.content!==void 0?t[r.path]=r.content:r.children&&n(r.children)};return n(e),t},V=(0,L.memo)(({skillId:e})=>{let{t}=r(`setting`),[n,i]=(0,L.useState)(`SKILL.md`),{data:a,isLoading:c}=b(e=>e.useFetchAgentSkillDetail)(e),u=a?.skillDetail,d=a?.resourceTree,p=(0,L.useMemo)(()=>B(d),[d]);if(c)return(0,R.jsxs)(s,{style:{height:`100%`,overflow:`hidden`},children:[(0,R.jsx)(`div`,{className:z.meta,children:(0,R.jsx)(m,{active:!0,paragraph:{rows:1},style:{margin:0},title:{width:220}})}),(0,R.jsxs)(s,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,R.jsx)(`div`,{className:z.left,children:(0,R.jsx)(O,{rows:9})}),(0,R.jsx)(`div`,{className:z.divider}),(0,R.jsx)(`div`,{className:z.right,children:(0,R.jsx)(m,{active:!0,paragraph:{rows:8},style:{padding:16}})})]})]});let _=u?.manifest?.version,v=u?.description||u?.manifest?.description,y=u?.manifest?.repository,x=u?.manifest?.sourceUrl;return(0,R.jsxs)(s,{style:{height:`100%`,overflow:`hidden`},children:[u&&(0,R.jsx)(`div`,{className:z.meta,children:(0,R.jsxs)(s,{horizontal:!0,align:`center`,gap:12,children:[(0,R.jsx)(F,{size:40}),(0,R.jsxs)(s,{flex:1,gap:4,style:{overflow:`hidden`},children:[(0,R.jsxs)(s,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,R.jsxs)(s,{horizontal:!0,align:`center`,className:z.description,gap:4,children:[(0,R.jsx)(`span`,{className:z.name,children:u.name}),_&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(o,{icon:h}),(0,R.jsxs)(`span`,{children:[`v`,_]})]}),(0,R.jsx)(o,{icon:h}),t(`agentSkillDetail.updatedAt`),` `,(0,R.jsx)(D,{date:new Date(u.updatedAt).toISOString(),template:`MMM DD, YYYY`})]}),(y||x)&&(0,R.jsxs)(s,{horizontal:!0,align:`center`,gap:2,style:{flexShrink:0},children:[y&&(0,R.jsx)(`a`,{href:y,rel:`noreferrer`,target:`_blank`,children:(0,R.jsx)(l,{fill:f.colorTextDescription,icon:T,title:t(`agentSkillDetail.repository`)})}),x&&(0,R.jsx)(`a`,{href:x,rel:`noreferrer`,target:`_blank`,children:(0,R.jsx)(l,{icon:g,title:t(`agentSkillDetail.sourceUrl`)})})]})]}),v&&(0,R.jsx)(`p`,{className:z.description,children:v})]})]})}),(0,R.jsxs)(s,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,R.jsx)(`div`,{className:z.left,children:(0,R.jsx)(j,{resourceTree:d||[],selectedFile:n,onSelectFile:i})}),(0,R.jsx)(`div`,{className:z.divider}),(0,R.jsx)(`div`,{className:z.right,children:(0,R.jsx)(M,{contentMap:p,selectedFile:n,skillDetail:u})},n)]})]})}),V.displayName=`AgentSkillDetail`}))();export{V as default};