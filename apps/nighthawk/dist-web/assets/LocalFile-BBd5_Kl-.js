import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Qr as o,U as s,mr as c}from"./dialog-BebLzVzY.js";import{a as l,c as u,t as d}from"./es-CVJR_g25.js";import{Wd as f,vp as p,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as h}from"./base-ui-BAv0gRbN.js";import{t as g}from"./es-LELdnrjB.js";import{vt as _,yt as v}from"./src-Cp4rxIjO.js";import{n as y,t as b}from"./localFileService-CV-M72pC.js";import{n as x,t as S}from"./FileIcon-DXM_Cnj6.js";var C,w,T,E=e((()=>{g(),h(),d(),m(),a(),n(),x(),b(),C=t(i()),w=l(({css:e})=>({container:e`
    cursor: pointer;

    padding-block: 2px;
    padding-inline: 4px 8px;
    border-radius: 4px;

    color: ${u.colorText};

    :hover {
      color: ${u.colorText};
      background: ${u.colorFillTertiary};
    }
  `,title:e`
    overflow: hidden;
    display: block;

    line-height: 20px;
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),T=({name:e,path:t,isDirectory:n=!1,readonly:i=!1})=>{let{t:a}=r(`components`),l=()=>{t&&y.openLocalFileOrFolder(t,n)},u=()=>{t&&y.openFileFolder(t)},d=(0,C.jsxs)(o,{horizontal:!0,align:`center`,className:w.container,gap:4,style:{display:`inline-flex`,verticalAlign:`middle`},onClick:n?l:void 0,children:[(0,C.jsx)(S,{fileName:e,isDirectory:n,size:22,variant:`raw`}),(0,C.jsx)(o,{horizontal:!0,align:`baseline`,gap:4,style:{overflow:`hidden`,width:`100%`},children:(0,C.jsx)(`div`,{className:w.title,children:e})})]});return n||i?d:(0,C.jsx)(s,{content:(0,C.jsxs)(o,{horizontal:!0,gap:4,padding:4,children:[(0,C.jsx)(c,{icon:p,size:`small`,title:a(`LocalFile.action.open`),onClick:l,children:a(`LocalFile.action.open`)}),(0,C.jsx)(c,{icon:f,size:`small`,title:a(`LocalFile.action.showInFolder`),onClick:u,children:a(`LocalFile.action.showInFolder`)})]}),trigger:`hover`,styles:{content:{padding:0}},children:d})}})),D,O,k,A=e((()=>{g(),d(),_(),a(),x(),b(),D=t(i()),O=l(({css:e})=>({container:e`
    cursor: pointer;

    padding-block: 2px;
    padding-inline: 4px 8px;
    border-radius: 4px;

    color: ${u.colorTextSecondary};

    :hover {
      color: ${u.colorText};
      background: ${u.colorFillTertiary};
    }
  `,title:e`
    overflow: hidden;
    display: block;

    line-height: 20px;
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),k=({path:e,size:t=22})=>{let n=()=>{v&&y.openLocalFolder({isDirectory:!0,path:e})},{base:r}=v.parse(e);return(0,D.jsxs)(o,{horizontal:!0,align:`center`,className:O.container,gap:4,style:{display:`inline-flex`,verticalAlign:`middle`},onClick:n,children:[(0,D.jsx)(S,{isDirectory:!0,fileName:r,size:t,variant:`raw`}),(0,D.jsx)(o,{horizontal:!0,align:`baseline`,gap:4,style:{overflow:`hidden`,width:`100%`},children:(0,D.jsx)(`div`,{className:O.title,children:r})})]})}})),j=e((()=>{E(),A()}));export{E as a,T as i,k as n,A as r,j as t};