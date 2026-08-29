import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,bt as c,mr as l}from"./dialog-BebLzVzY.js";import{a as u,t as d}from"./es-CVJR_g25.js";import{It as f,wa as p,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as h}from"./base-ui-BAv0gRbN.js";import{t as g}from"./es-LELdnrjB.js";import{la as _}from"./model-runtime-client-tog6-eyE.js";import{r as v,t as y}from"./dist-DpadOugs.js";import{o as b,t as x}from"./FormInput-CCNXdelP.js";var S,C,w=e((()=>{y(),S=(e={})=>Object.entries(e||{}).map(([e,t])=>({id:v(),key:e,value:typeof t==`string`?t:``})),C=(e=[])=>{let t={},n=new Set;return(e||[]).slice().reverse().forEach(e=>{let r=e.key.trim();r&&!n.has(r)&&(t[r]=typeof e.value==`string`?e.value:``,n.add(r))}),Object.keys(t).reverse().reduce((e,n)=>(e[n]=t[n],e),{})}})),T,E,D,O,k,A=e((()=>{g(),h(),d(),T=t(_()),m(),E=t(a()),n(),y(),x(),w(),D=t(i()),O=u(({css:e,cssVar:t})=>({container:e`
    position: relative;

    width: 100%;
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};
  `,input:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,row:e`
    margin-block-end: 8px;

    &:last-child {
      margin-block-end: 0;
    }
  `,title:e`
    margin-block-end: 8px;
    color: ${t.colorTextTertiary};
  `})),k=(0,E.memo)(({value:e,onChange:t,keyPlaceholder:n,valuePlaceholder:i,addButtonText:a,duplicateKeyErrorText:u,deleteTooltip:d,disabled:m,style:h})=>{let{t:g}=r(`components`),[_,y]=(0,E.useState)(()=>S(e)),x=(0,E.useRef)(void 0);(0,E.useEffect)(()=>{let t=e||{};(0,T.default)(t,x.current)||(y(S(t)),x.current=t)},[e]);let w=e=>{if(m)return;let n={};e.forEach(e=>{let t=e.key.trim();t&&(n[t]=(n[t]||0)+1)}),y(e.map(e=>({...e}))),t?.(C(e))},k=()=>{m||w([..._,{id:v(),key:``,value:``}])},A=e=>{m||w(_.filter(t=>t.id!==e))},j=(e,t)=>{m||w(_.map(n=>n.id===e?{...n,key:t}:n))},M=(e,t)=>{m||w(_.map(n=>n.id===e?{...n,value:t}:n))},N=(e=>{let t=new Set,n=new Set;return e.forEach(e=>{let r=e.key.trim();r&&(t.has(r)?n.add(r):t.add(r))}),n})(_);return(0,D.jsxs)(`div`,{className:O.container,style:h,children:[(0,D.jsxs)(s,{horizontal:!0,className:O.title,gap:8,children:[(0,D.jsx)(s,{flex:1,children:n||g(`KeyValueEditor.keyPlaceholder`)}),(0,D.jsx)(s,{flex:2,children:i||g(`KeyValueEditor.valuePlaceholder`)}),(0,D.jsx)(s,{style:{width:30}})]}),(0,D.jsxs)(s,{width:`100%`,children:[_.map(e=>{let t=e.key.trim()&&N.has(e.key.trim());return(0,D.jsxs)(s,{horizontal:!0,align:`flex-start`,className:O.row,gap:8,width:`100%`,children:[(0,D.jsxs)(s,{flex:1,style:{position:`relative`},children:[(0,D.jsx)(b,{className:O.input,disabled:m,placeholder:n||g(`KeyValueEditor.keyPlaceholder`),status:t?`error`:void 0,value:e.key,variant:`filled`,onChange:t=>j(e.id,t)}),t&&(0,D.jsx)(`div`,{style:{bottom:`-16px`,color:`red`,fontSize:`12px`,position:`absolute`},children:u||g(`KeyValueEditor.duplicateKeyError`)})]}),(0,D.jsx)(s,{flex:2,children:(0,D.jsx)(b,{className:O.input,disabled:m,placeholder:i||g(`KeyValueEditor.valuePlaceholder`),value:e.value,variant:`filled`,onChange:t=>M(e.id,t)})}),(0,D.jsx)(c,{disabled:m,icon:f,size:`small`,style:{marginTop:4},title:d||g(`KeyValueEditor.deleteTooltip`),onClick:()=>A(e.id)})]},e.id)}),(0,D.jsx)(l,{block:!0,disabled:m,icon:(0,D.jsx)(o,{icon:p}),size:`small`,style:{marginTop:_.length>0?16:8},type:`dashed`,onClick:k,children:a||g(`KeyValueEditor.addButton`)})]})]})})}));export{A as n,k as t};