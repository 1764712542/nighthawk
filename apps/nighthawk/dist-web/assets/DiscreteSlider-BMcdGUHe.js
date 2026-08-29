import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Cr as i,Qr as a}from"./dialog-BebLzVzY.js";import{a as o,l as s,t as c}from"./es-CVJR_g25.js";import{t as l,y as u}from"./base-ui-BAv0gRbN.js";import{t as d}from"./es-LELdnrjB.js";var f,p=e((()=>{f=(e,t)=>e.length===0||!Number.isFinite(t)?0:e.reduce((n,r,i)=>{let a=Math.abs(e[n].value-t);return Math.abs(r.value-t)<a?i:n},0)})),m,h,g,_,v=e((()=>{d(),l(),c(),m=t(r()),p(),h=t(n()),g=o(({css:e,cssVar:t})=>({label:e`
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

    &:disabled {
      cursor: not-allowed;
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
  `})),_=(0,m.memo)(({className:e,disabled:t,formatTooltip:n,onChange:r,onChangeComplete:o,options:c,style:l,value:d,...p})=>{let _=(0,m.useMemo)(()=>f(c,d),[c,d]),v=c[_],y=c.length>1?[`minmax(0, 0.5fr)`,...Array.from({length:c.length-2}).fill(`minmax(0, 1fr)`),`minmax(0, 0.5fr)`].join(` `):`minmax(0, 1fr)`,b=(0,h.jsx)(`div`,{className:g.slider,children:(0,h.jsx)(u,{...p,disabled:t||c.length===0,max:Math.max(0,c.length-1),min:0,step:1,value:_,onChange:e=>{let t=c[e];t&&r?.(t.value)},onChangeComplete:e=>{let t=c[e];t&&o?.(t.value)}})});return(0,h.jsxs)(a,{className:s(g.root,e),gap:6,style:l,children:[n&&v?(0,h.jsx)(i,{title:n(v.value),children:b}):b,(0,h.jsx)(`div`,{className:g.labels,style:{gridTemplateColumns:y},children:c.map((e,n)=>{let i=n===0,a=i===(n===c.length-1)?`center`:i?`start`:`end`;return(0,h.jsx)(`button`,{"aria-current":n===_?`true`:void 0,"aria-label":e.ariaLabel,className:s(g.label,n===_&&g.selectedLabel),disabled:t,style:{textAlign:a,...e.style},type:`button`,onClick:()=>r?.(e.value),children:e.label},e.value)})})]})}),_.displayName=`DiscreteSlider`}));export{v as n,_ as t};