import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as i,x as a}from"./agent-Cvv887Je.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{Hr as c,Qr as l,Xr as u}from"./dialog-BebLzVzY.js";import{a as d,c as f,f as p,t as m}from"./es-CVJR_g25.js";import{Mc as h,Wl as g,ci as _,x as v}from"../vendor/vendor-icons-C-Y4oLkk.js";import{et as y,i as b,t as x}from"./base-ui-BAv0gRbN.js";import{Ta as S,t as C,ur as w,zt as T}from"./es-LELdnrjB.js";import{a as E,s as D}from"./swrKeys-B4sicPWZ.js";import{a as O,t as k}from"./tool-BJJaXV35.js";import{n as A,t as j}from"./discover-BOYTu_qD.js";import{i as M,n as N}from"./dist-BJGc-8P7.js";import{T as P,w as F}from"./MCPInstallProgress-C0rI77bQ.js";var I,L,R=e((()=>{m(),I=d(({css:e})=>({item:e`
    width: calc(50% - 6px);

    ${p.sm} {
      width: 100%;
    }
  `,list:e`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding-block-end: 16px;
  `})),L=d(({css:e,cssVar:t})=>({container:e`
    position: relative;
    overflow: hidden;
    flex: 1;
    min-width: 0;
  `,description:e`
    overflow: hidden;

    font-size: 12px;
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,title:e`
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `}))})),z,B,V,H=e((()=>{C(),x(),z=t(s()),R(),B=t(o()),V=(0,z.memo)(({avatar:e,title:t,description:n,identifier:r,backgroundColor:i})=>{let a=L;return!r||!t?null:(0,B.jsx)(`a`,{href:`/community/agent/${r}`,rel:`noopener noreferrer`,style:{display:`block`,height:`100%`},target:`_blank`,children:(0,B.jsxs)(S,{clickable:!0,horizontal:!0,align:`center`,className:a.container,gap:12,paddingBlock:12,paddingInline:12,style:{cursor:`pointer`,height:`100%`},variant:`outlined`,children:[(0,B.jsx)(y,{avatar:e,background:i||`transparent`,shape:`square`,size:40,style:{flex:`none`}}),(0,B.jsxs)(l,{flex:1,gap:4,style:{minWidth:0,overflow:`hidden`},children:[(0,B.jsx)(`span`,{className:a.title,children:t}),n&&(0,B.jsx)(`span`,{className:a.description,children:n})]})]})})})})),U,W,G=e((()=>{C(),m(),v(),U=t(o()),W=()=>(0,U.jsx)(u,{padding:16,children:(0,U.jsx)(c,{spin:!0,color:f.colorTextDescription,icon:h})})})),K,q,J,Y,X=e((()=>{C(),x(),m(),v(),K=t(s()),n(),N(),H(),R(),G(),E(),i(),A(),F(),q=t(o()),J=12,Y=(0,K.memo)(({inModal:e})=>{let{t}=r(`discover`),{identifier:n}=P(),[i,o]=(0,K.useState)([]),[s,l]=(0,K.useState)(1),[d,p]=(0,K.useState)(0),[m,h]=(0,K.useState)(!1),v=(0,K.useRef)(s),{data:y,isLoading:x,error:S}=D(n?a.mcpAgents(n,s):null,()=>j.getAgentsByPlugin({page:s,pageSize:J,pluginId:n}));(0,K.useEffect)(()=>{y&&(s===1?o(y.items):s>v.current&&o(e=>[...e,...y.items]),p(y.totalCount),h(!0),v.current=s)},[y,s]);let C=i.length<d,E=(0,K.useCallback)(()=>{!x&&C&&l(e=>e+1)},[x,C]);return!m&&x?(0,q.jsx)(w,{gap:12,rows:2,width:`100%`,children:Array.from({length:4}).map((e,t)=>(0,q.jsx)(T,{active:!0,avatar:{shape:`square`,size:40},paragraph:{rows:1}},t))}):S?(0,q.jsxs)(u,{gap:12,padding:40,children:[(0,q.jsx)(c,{color:f.colorTextDescription,icon:_,size:80}),(0,q.jsx)(b,{type:`secondary`,children:t(`mcp.details.agents.networkError`)})]}):m&&i.length===0?(0,q.jsxs)(u,{gap:12,padding:40,children:[(0,q.jsx)(c,{color:f.colorTextDescription,icon:g,size:80}),(0,q.jsx)(b,{type:`secondary`,children:t(`mcp.details.agents.empty`)})]}):(0,q.jsx)(M,{data:i,endReached:E,increaseViewportBy:typeof window<`u`?window.innerHeight:0,itemClassName:I.item,itemContent:(e,t)=>(0,q.jsx)(V,{...t},t.identifier),listClassName:I.list,overscan:24,style:e?{height:`50vh`,width:`100%`}:{width:`100%`},useWindowScroll:!e,components:{Footer:x?W:()=>(0,q.jsx)(`div`,{style:{height:16}})}})})})),Z,Q=e((()=>{k(),Z=()=>{let[e]=O(e=>[e.useFetchInstalledPlugins]);return e(!0)}}));export{W as a,H as c,X as i,I as l,Z as n,G as o,Y as r,V as s,Q as t,R as u};