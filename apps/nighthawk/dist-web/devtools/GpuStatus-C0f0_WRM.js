import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"../assets/app-const-Bl9rlHwj.js";import{Qr as i}from"../assets/dialog-BebLzVzY.js";import{a,c as o,l as s,t as c}from"../assets/es-CVJR_g25.js";import{t as l}from"../assets/es-LELdnrjB.js";import{n as u,t as d}from"./panelStyles-srd8T26Q.js";import{n as f,r as p}from"./devtools-CMqkBgOc.js";var m,h,g,_,v,y;e((()=>{l(),c(),m=t(r()),u(),p(),h=t(n()),g=a(({css:e})=>({device:e`
    display: grid;
    grid-template-columns: 96px 1fr;
    flex-shrink: 0;
    gap: 4px 8px;

    padding-block: 10px;
    padding-inline: 12px;
    border-block-end: 1px solid ${o.colorBorderSecondary};

    font-family: ${o.fontFamilyCode};
    font-size: 11px;
    color: ${o.colorTextSecondary};
  `,empty:e`
    padding: 24px;
    font-size: 12px;
    color: ${o.colorTextTertiary};
    text-align: center;
  `,error:e`
    color: ${o.colorError};
  `,key:e`
    color: ${o.colorTextQuaternary};
  `,legend:e`
    flex-shrink: 0;

    padding-block: 8px 12px;
    padding-inline: 12px;
    border-block-start: 1px solid ${o.colorBorderSecondary};

    font-size: 10px;
    line-height: 1.6;
    color: ${o.colorTextQuaternary};
  `,muted:e`
    color: ${o.colorTextTertiary};
  `,ok:e`
    color: ${o.colorSuccess};
  `,rows:e`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `,row:e`
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 8px;
    align-items: center;

    padding-block: 5px;
    padding-inline: 12px;
    border-block-end: 1px solid ${o.colorBorderSecondary};

    font-family: ${o.fontFamilyCode};
    font-size: 11px;
  `,value:e`
    overflow-wrap: anywhere;
  `,warn:e`
    color: ${o.colorWarning};
  `})),_=e=>e.startsWith(`enabled`)?g.ok:e.includes(`software`)?g.warn:e.endsWith(`_ok`)?g.muted:g.error,v=[[`renderer`,`renderer`],[`vendor`,`vendor`],[`gl version`,`version`],[`display`,`displayType`],[`skia`,`skiaBackend`],[`machine`,`machineModel`]],y=(0,m.memo)(()=>{let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(!1);if((0,m.useEffect)(()=>{let e=!1;return f.getGpuStatus().then(n=>{e||t(n)}).catch(()=>{e||r(!0)}),()=>{e=!0}},[]),n)return(0,h.jsx)(`div`,{className:d.root,children:(0,h.jsx)(`div`,{className:g.empty,children:`GPU status unavailable over ipc.`})});if(!e)return null;let a=Object.entries(e.featureStatus).sort(([e],[t])=>e.localeCompare(t));return(0,h.jsxs)(i,{className:d.root,children:[(0,h.jsx)(`div`,{className:g.device,children:v.map(([t,n])=>(0,h.jsxs)(m.Fragment,{children:[(0,h.jsx)(`span`,{className:g.key,children:t}),(0,h.jsx)(`span`,{className:s(g.value,!e[n]&&g.muted),children:e[n]??`—`})]},n))}),(0,h.jsx)(`div`,{className:g.rows,children:a.map(([e,t])=>(0,h.jsxs)(`div`,{className:g.row,children:[(0,h.jsx)(`span`,{className:g.muted,children:e}),(0,h.jsx)(`span`,{className:_(t),children:t})]},e))}),(0,h.jsx)(`div`,{className:g.legend,children:"`enabled_*` runs on the GPU, `*_software` fell back to the CPU renderer, `*_off_ok` is switched off by design, and anything else is a hard disable worth investigating on chrome://gpu. Read once when the panel opens — reopen it to re-sample."})]})}),y.displayName=`DevGpuStatusPanel`}))();export{y as default};