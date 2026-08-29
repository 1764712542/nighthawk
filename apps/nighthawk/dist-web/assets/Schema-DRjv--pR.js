import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Qr as o}from"./dialog-BebLzVzY.js";import{a as s,c,t as l}from"./es-CVJR_g25.js";import{c as u,t as d,u as f}from"./base-ui-BAv0gRbN.js";import{t as p,zt as m}from"./es-LELdnrjB.js";import{i as h,n as g,r as _,t as v}from"./ContentViewer-CCwIrrH-.js";import{_ as y,g as b}from"./SkillStore-EPCtEcFX.js";import{C as x,c as S,l as C,s as w,u as T,w as E}from"./MCPInstallProgress-C0rI77bQ.js";import{n as D,t as O}from"./Title-CzgD0YRA.js";var k,A,j,M;e((()=>{p(),d(),l(),k=t(a()),n(),g(),h(),E(),S(),T(),D(),b(),A=t(i()),j=s(({css:e})=>({divider:e`
    flex-shrink: 0;
    width: 1px;
    background: ${c.colorBorderSecondary};
  `,left:e`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,right:e`
    container-type: size;
    overflow: auto;
    flex: 1;
  `})),M=(0,k.memo)(()=>{let{t:e}=r(`discover`),{t}=r(`setting`),{tools:n,toolsLoading:i,skillContent:a}=y(),[s,l]=(0,k.useState)([]),[d,p]=(0,k.useState)(C.Docs),[h,g]=(0,k.useState)(`SKILL.md`),b=n.length,S=(0,k.useMemo)(()=>a?{content:a,name:``}:void 0,[a]);return i?(0,A.jsx)(o,{gap:16,children:(0,A.jsx)(m,{active:!0,paragraph:{rows:4}})}):(0,A.jsxs)(x,{config:{tools:n,toolsCount:b},children:[b>0&&(0,A.jsxs)(o,{gap:8,children:[(0,A.jsxs)(o,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,A.jsx)(O,{level:3,tag:(0,A.jsx)(u,{children:b}),children:e(`mcp.details.schema.tools.title`)}),(0,A.jsx)(f,{activeKey:d,items:[{key:C.Docs,label:e(`mcp.details.schema.mode.docs`)},{key:C.JSON,label:`JSON`}],onChange:e=>p(e)})]}),(0,A.jsx)(`p`,{style:{marginBottom:24},children:e(`mcp.details.schema.tools.desc`)}),(0,A.jsx)(w,{activeKey:s,mode:d,setActiveKey:l})]}),a&&(0,A.jsx)(o,{gap:8,children:(0,A.jsxs)(o,{horizontal:!0,style:{border:`1px solid ${c.colorBorderSecondary}`,borderRadius:8,height:400,overflow:`hidden`},children:[(0,A.jsx)(`div`,{className:j.left,children:(0,A.jsx)(_,{resourceTree:[],selectedFile:h,onSelectFile:g})}),(0,A.jsx)(`div`,{className:j.divider}),(0,A.jsx)(`div`,{className:j.right,children:(0,A.jsx)(v,{contentMap:{},selectedFile:h,skillDetail:S})},h)]})})]})})}))();export{M as default};