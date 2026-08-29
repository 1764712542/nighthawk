import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"../assets/app-const-Bl9rlHwj.js";import{a as i,c as a,l as o,t as s}from"../assets/es-CVJR_g25.js";var c,l,u,d,f;e((()=>{s(),c=t(r()),l=t(n()),u=i(({css:e})=>({high:e`
    color: ${a.colorError};
  `,mid:e`
    color: ${a.colorWarning};
  `,text:e`
    font-family: ${a.fontFamilyCode};
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: ${a.colorTextTertiary};
  `})),d=()=>{let e=performance.memory;return e?{limit:e.jsHeapSizeLimit,used:e.usedJSHeapSize}:null},f=(0,c.memo)(()=>{let[e,t]=(0,c.useState)(()=>d());if((0,c.useEffect)(()=>{if(!d())return;let e=setInterval(()=>t(d()),2e3);return()=>clearInterval(e)},[]),!e)return null;let n=Math.round(e.used/1048576),r=e.used/e.limit*100;return(0,l.jsxs)(`span`,{title:`JS heap used / limit`,className:o(u.text,r>=90?u.high:r>=70?u.mid:void 0),children:[n,` MB · `,r.toFixed(1),`%`]})}),f.displayName=`DevDockMemoryWidget`}))();export{f as default};