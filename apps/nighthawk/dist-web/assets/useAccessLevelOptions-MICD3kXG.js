import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s}from"./dialog-BebLzVzY.js";import{a as c,c as l,t as u}from"./es-CVJR_g25.js";import{Aa as d,Ka as f,Sc as p,mp as m,x as h}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as g,x as _}from"./base-ui-BAv0gRbN.js";import{t as v}from"./es-LELdnrjB.js";var y,b,x,S,C,w=e((()=>{v(),g(),u(),y=t(a()),b=t(i()),x=c(({css:e})=>({option:e`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: flex-start;

    min-width: 0;
  `,optionDesc:e`
    font-size: 12px;
    line-height: 16px;
    color: ${l.colorTextDescription};
    text-wrap: pretty;
  `,optionIcon:e`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    height: 20px;

    color: ${l.colorTextSecondary};
  `,optionLabel:e`
    font-size: 14px;
    line-height: 20px;
    color: ${l.colorText};
  `,popup:e`
    max-width: calc(100vw - 24px);
  `,trigger:e`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;

    min-width: 0;
  `,triggerLabel:e`
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),S=({disabled:e,loading:t,onChange:n,options:r,value:i})=>{let a=(0,y.useMemo)(()=>r.map(e=>({disabled:e.disabled,label:(0,b.jsxs)(`span`,{className:x.option,children:[(0,b.jsx)(`span`,{"aria-hidden":!0,className:x.optionIcon,children:(0,b.jsx)(o,{icon:e.icon,size:16})}),(0,b.jsxs)(s,{flex:1,gap:2,style:{minWidth:0},children:[(0,b.jsx)(`span`,{className:x.optionLabel,children:e.label}),e.desc?(0,b.jsx)(`span`,{className:x.optionDesc,children:e.desc}):null]})]}),title:e.label,value:e.value})),[r]),c=(0,y.useCallback)(({value:e})=>{let t=r.find(t=>t.value===e);return t?(0,b.jsxs)(`span`,{className:x.trigger,children:[(0,b.jsx)(`span`,{"aria-hidden":!0,className:x.optionIcon,children:(0,b.jsx)(o,{icon:t.icon,size:16})}),(0,b.jsx)(`span`,{className:x.triggerLabel,children:t.label})]}):null},[r]);return(0,b.jsx)(_,{classNames:{popup:x.popup},disabled:e,labelRender:c,loading:t,optionRender:e=>e.label,options:a,popupMatchSelectWidth:!0,style:{width:`100%`},value:i,onChange:e=>{typeof e!=`string`||e===i||n(e)}})},C=(0,y.memo)(S)})),T,E,D=e((()=>{h(),T=t(a()),n(),E=e=>{let{accessLevel:t,isPrivate:n,resourceType:i=`agent`}=e,{t:a}=r(`setting`);return(0,T.useMemo)(()=>{if(i===`knowledgeBase`)return[{desc:a(`permission.generalAccess.kbAccessibleDesc`),icon:m,label:a(n?`permission.page.kbAccessibleWhenShared`:`permission.generalAccess.kbAccessible`),value:`edit`},{desc:a(`permission.generalAccess.kbNoAccessDesc`),icon:p,label:a(n?`permission.page.kbNoAccessWhenShared`:`permission.generalAccess.kbNoAccess`),value:`use`}];let e=[{desc:a(i===`document`?`permission.generalAccess.editableDocumentDesc`:`permission.generalAccess.editableDesc`),icon:f,label:a(n?`permission.page.editableWhenShared`:`permission.generalAccess.editable`),value:`edit`}];return i===`document`?e.push({desc:a(`permission.generalAccess.viewableDocumentDesc`),icon:m,label:a(n?`permission.page.viewableWhenShared`:`permission.generalAccess.viewable`),value:`view`}):e.push({desc:a(`permission.generalAccess.usableDesc`),icon:d,label:a(n?`permission.page.usableWhenShared`:`permission.generalAccess.usable`),value:`use`}),t===`view`&&i!==`document`&&e.push({desc:a(`permission.generalAccess.viewableDesc`),icon:m,label:a(`permission.generalAccess.viewable`),value:`view`}),e},[t,n,i,a])}}));export{w as i,E as n,C as r,D as t};