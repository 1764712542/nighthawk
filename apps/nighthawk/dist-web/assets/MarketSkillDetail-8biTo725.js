import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,bt as c}from"./dialog-BebLzVzY.js";import{a as l,b as u,c as d,t as f,vn as p}from"./es-CVJR_g25.js";import{Pp as m,vp as h,x as g}from"../vendor/vendor-icons-C-Y4oLkk.js";import{et as _,t as v}from"./base-ui-BAv0gRbN.js";import{t as y}from"./es-LELdnrjB.js";import{d as b,u as x}from"./store-DKx7p_l_.js";import{a as S,o as C,t as w,ua as T}from"./tool-BJJaXV35.js";import{n as E,t as D}from"./Github-Bay25f86.js";import{r as O,t as k}from"./discover-B1TeDH2v.js";import{n as A,t as j}from"./PublishedTime-BevDVLbb.js";import{i as M,n as N,r as P,t as F}from"./ContentViewer-CCwIrrH-.js";import{n as I,t as L}from"./marketApi-CocPbfKo.js";var R,z,B,V,H,U,W;e((()=>{E(),y(),v(),u(),f(),x(),g(),R=t(a()),n(),A(),N(),M(),L(),k(),w(),C(),z=t(i()),B=l(({css:e,cssVar:t})=>({description:e`
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
  `})),V=e=>{let t={},n=e=>{for(let r of e)r.type===`file`&&r.content!==void 0?t[r.path]=r.content:r.children&&n(r.children)};return n(e),t},H=e=>e?Object.keys(e).sort().map(e=>({name:e.split(`/`).pop()||e,path:e,type:`file`})):[],U=async e=>{let t=await(await fetch(e)).arrayBuffer();return new Promise((e,n)=>{b(new Uint8Array(t),(t,r)=>{if(t)return n(t);let i={},a=[],o=new TextDecoder;for(let[e,t]of Object.entries(r)){if(e.endsWith(`/`)||e.includes(`__MACOSX`))continue;let n=e.indexOf(`/`),r=n>=0?e.slice(n+1):e;if(!r||r===`SKILL.md`)continue;let s=o.decode(t);i[r]=s,a.push({content:s,name:r.split(`/`).pop()||r,path:r,type:`file`})}a.sort((e,t)=>e.path.localeCompare(t.path)),e({contentMap:i,tree:a})})})},W=(0,R.memo)(({identifier:e})=>{let{t}=r(`setting`),[n,i]=(0,R.useState)(`SKILL.md`),{data:a,isLoading:l}=O(e=>e.useFetchSkillDetail)({identifier:e}),u=S(T.getAgentSkillByIdentifier(e)),{data:f}=S(e=>e.useFetchAgentSkillDetail)(u?.id),[g,v]=(0,R.useState)({}),[y,b]=(0,R.useState)([]),x=I.getSkillDownloadUrl(encodeURIComponent(e));(0,R.useEffect)(()=>{u||U(x).then(({contentMap:e,tree:t})=>{v(e),b(t)}).catch(()=>{})},[x,u]);let C=(0,R.useMemo)(()=>f?.resourceTree??[],[f?.resourceTree]),w=(0,R.useMemo)(()=>V(C),[C]),E=C.length>0?w:g,k=(0,R.useMemo)(()=>C.length>0?C:y.length>0?y:H(a?.resources),[C,y,a?.resources]);if(l||!a)return(0,z.jsx)(p,{active:!0,paragraph:{rows:8},style:{padding:16}});let{name:A,icon:M,version:N,description:L,homepage:W,github:G}=a,K={content:f?.skillDetail?.content||a.content};return(0,z.jsxs)(s,{style:{height:`100%`,overflow:`hidden`},children:[(0,z.jsx)(`div`,{className:B.meta,children:(0,z.jsxs)(s,{horizontal:!0,align:`center`,gap:12,children:[(0,z.jsx)(_,{avatar:M||A,shape:`square`,size:40,style:{flex:`none`}}),(0,z.jsxs)(s,{flex:1,gap:4,style:{overflow:`hidden`},children:[(0,z.jsxs)(s,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,z.jsxs)(s,{horizontal:!0,align:`center`,className:B.description,gap:4,children:[(0,z.jsx)(`span`,{className:B.name,children:A}),N&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o,{icon:m}),(0,z.jsxs)(`span`,{children:[`v`,N]})]}),(0,z.jsx)(o,{icon:m}),t(`agentSkillDetail.updatedAt`),` `,(0,z.jsx)(j,{date:a.updatedAt,template:`MMM DD, YYYY`})]}),(0,z.jsxs)(s,{horizontal:!0,align:`center`,gap:2,style:{flexShrink:0},children:[G?.url&&(0,z.jsx)(`a`,{href:G.url,rel:`noreferrer`,target:`_blank`,children:(0,z.jsx)(c,{fill:d.colorTextDescription,icon:D,title:t(`agentSkillDetail.repository`)})}),W&&(0,z.jsx)(`a`,{href:W,rel:`noreferrer`,target:`_blank`,children:(0,z.jsx)(c,{icon:h,title:t(`agentSkillDetail.sourceUrl`)})})]})]}),L&&(0,z.jsx)(`p`,{className:B.description,children:L})]})]})}),(0,z.jsxs)(s,{horizontal:!0,style:{flex:1,overflow:`hidden`},children:[(0,z.jsx)(`div`,{className:B.left,children:(0,z.jsx)(P,{resourceTree:k,selectedFile:n,onSelectFile:i})}),(0,z.jsx)(`div`,{className:B.divider}),(0,z.jsx)(`div`,{className:B.right,children:(0,z.jsx)(F,{contentMap:E,selectedFile:n,skillDetail:K})},n)]})]})}),W.displayName=`MarketSkillDetail`}))();export{W as default};