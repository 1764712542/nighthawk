import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"../assets/app-const-Bl9rlHwj.js";import{a as i,c as a,l as o,t as s}from"../assets/es-CVJR_g25.js";import{n as c,t as l}from"./appProcessMetrics-VDQOjEvd.js";var u,d,f,p;e((()=>{s(),u=t(r()),l(),d=t(n()),f=i(({css:e})=>({high:e`
    color: ${a.colorError};
  `,mid:e`
    color: ${a.colorWarning};
  `,text:e`
    font-family: ${a.fontFamilyCode};
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: ${a.colorTextTertiary};
  `})),p=(0,u.memo)(()=>{let e=c()?.gpu;return e?(0,d.jsxs)(`span`,{className:o(f.text,e.cpuPercent>=100?f.high:e.cpuPercent>=50?f.mid:void 0),title:`GPU process CPU usage and resident memory — Chromium exposes no GPU utilisation figure`,children:[`GPU proc `,e.cpuPercent.toFixed(1),`% · `,Math.round(e.memoryMB),` MB`]}):null}),p.displayName=`DevDockGpuProcessWidget`}))();export{p as default};