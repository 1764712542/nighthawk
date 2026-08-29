import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Qr as i}from"./dialog-BebLzVzY.js";import{a,h as o,l as s,m as c,t as l}from"./es-CVJR_g25.js";import{t as u,y as d}from"./base-ui-BAv0gRbN.js";import{t as f}from"./es-LELdnrjB.js";function p({levels:e,value:t,defaultValue:n,onChange:r,marks:a,style:c,disabled:l}){let[u,f]=o(n??e[Math.floor(e.length/2)],{defaultValue:n,onChange:r,value:t}),p=(0,m.useMemo)(()=>e.map((e,t)=>({...v(a?.[t],e),value:e})),[a,e]),y=e.indexOf(u),b=y===-1?Math.floor(e.length/2):y,{minWidth:x,...S}=c??{},C=e.length>1?[`minmax(0, 0.5fr)`,...Array.from({length:e.length-2}).fill(`minmax(0, 1fr)`),`minmax(0, 0.5fr)`].join(` `):`minmax(0, 1fr)`,w=t=>{if(l)return;let n=e[t];n!==void 0&&f(n)};return(0,h.jsxs)(i,{className:g.root,gap:8,style:{...S,minWidth:_(e.length,x),width:`100%`},children:[(0,h.jsx)(`div`,{className:g.slider,children:(0,h.jsx)(d,{disabled:l,max:e.length-1,min:0,step:1,value:b,onChange:w})}),(0,h.jsx)(`div`,{className:g.labels,style:{gridTemplateColumns:C},children:p.map((t,n)=>{let r=n===b,i=n===0,a=i===(n===e.length-1)?`center`:i?`start`:`end`;return(0,h.jsx)(`button`,{"aria-current":r?`true`:void 0,className:s(g.label,r&&g.selectedLabel),disabled:l,style:{textAlign:a,...t.style},type:`button`,onClick:()=>{l||f(t.value)},children:t.label},t.value)})})]})}var m,h,g,_,v,y,b=e((()=>{f(),u(),l(),m=t(r()),c(),h=t(n()),g=a(({css:e,cssVar:t})=>({label:e`
    cursor: pointer;

    padding: 0;
    border: none;

    font: inherit;
    font-size: 12px;
    line-height: 16px;
    color: ${t.colorTextTertiary};
    text-align: center;
    overflow-wrap: anywhere;

    background: transparent;

    transition: color 0.2s ease;

    &:hover {
      color: ${t.colorTextSecondary};
    }

    &:focus-visible {
      border-radius: 6px;
      outline: 1px solid ${t.colorBorder};
      outline-offset: 2px;
    }
  `,labels:e`
    display: grid;
    gap: 8px;
    width: 100%;
  `,root:e`
    width: 100%;
  `,selectedLabel:e`
    color: ${t.colorText};
  `,slider:e`
    width: 100%;
    padding-inline: 6px;
  `})),_=(e,t)=>{let n=e>=5?260:e===4?220:180;return t===void 0?n:typeof t==`number`?Math.max(t,n):t},v=(e,t)=>e?typeof e==`object`&&`label`in e?{label:e.label??t,style:e.style}:{label:e}:{label:t},y=(0,m.memo)(p)}));export{b as n,y as t};