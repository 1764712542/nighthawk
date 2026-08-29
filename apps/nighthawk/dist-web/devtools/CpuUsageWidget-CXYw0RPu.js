import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"../assets/app-const-Bl9rlHwj.js";import{a as i,c as a,l as o,t as s}from"../assets/es-CVJR_g25.js";import{n as c,t as l}from"./appProcessMetrics-VDQOjEvd.js";var u,d,f,p;e((()=>{s(),u=t(r()),l(),d=t(n()),f=i(({css:e})=>({high:e`
    color: ${a.colorError};
  `,mid:e`
    color: ${a.colorWarning};
  `,text:e`
    font-family: ${a.fontFamilyCode};
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: ${a.colorTextTertiary};
  `})),p=(0,u.memo)(()=>{let e=c();if(!e)return null;let t=e.cpuPercent;return(0,d.jsxs)(`span`,{title:`App CPU usage (sum across processes, 100% = one core)`,className:o(f.text,t>=200?f.high:t>=100?f.mid:void 0),children:[`CPU `,t.toFixed(1),`%`]})}),p.displayName=`DevDockCpuUsageWidget`}))();export{p as default};