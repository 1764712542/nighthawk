import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"../assets/app-const-Bl9rlHwj.js";import{a as i,c as a,l as o,t as s}from"../assets/es-CVJR_g25.js";var c,l,u,d;e((()=>{s(),c=t(r()),l=t(n()),u=i(({css:e})=>({low:e`
    color: ${a.colorError};
  `,mid:e`
    color: ${a.colorWarning};
  `,text:e`
    font-family: ${a.fontFamilyCode};
    font-size: 11px;
    font-feature-settings: 'tnum';
    color: ${a.colorTextTertiary};
  `})),d=(0,c.memo)(()=>{let[e,t]=(0,c.useState)(null);return(0,c.useEffect)(()=>{let e=0,n=0,r=performance.now(),i=a=>{n+=1;let o=a-r;o>=500&&(t(Math.round(n*1e3/o)),n=0,r=a),e=requestAnimationFrame(i)};return e=requestAnimationFrame(i),()=>cancelAnimationFrame(e)},[]),e===null?null:(0,l.jsxs)(`span`,{className:o(u.text,e<30?u.low:e<50?u.mid:void 0),title:`Frames per second`,children:[e,` FPS`]})}),d.displayName=`DevDockFpsWidget`}))();export{d as default};