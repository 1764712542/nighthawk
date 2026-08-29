import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"../assets/app-const-Bl9rlHwj.js";import{a as i,c as a,l as o,t as s}from"../assets/es-CVJR_g25.js";var c,l,u,d,f,p;e((()=>{s(),c=t(r()),l=t(n()),u=()=>globalThis.PressureObserver,d=i(({css:e})=>({critical:e`
    color: ${a.colorError};
  `,serious:e`
    color: ${a.colorWarning};
  `,text:e`
    font-family: ${a.fontFamilyCode};
    font-size: 11px;
    color: ${a.colorTextTertiary};
  `})),f={critical:d.critical,serious:d.serious},p=(0,c.memo)(()=>{let[e,t]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let e=u();if(!e)return;let n=!1,r=new e(e=>{let r=e.at(-1);r&&!n&&t(r.state)});return r.observe(`cpu`,{sampleInterval:2e3}).catch(()=>{}),()=>{n=!0,r.disconnect()}},[]),e?(0,l.jsxs)(`span`,{className:o(d.text,f[e]),title:`Compute Pressure (CPU)`,children:[`CPU `,e]}):null}),p.displayName=`DevDockCpuPressureWidget`}))();export{p as default};