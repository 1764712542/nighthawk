import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ba as i,Ia as a,cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{Hr as c,K as l,Qr as u,U as d,bt as f}from"./dialog-BebLzVzY.js";import{a as p,c as m,t as h}from"./es-CVJR_g25.js";import{Hh as g,mi as ee,ng as _,x as v}from"../vendor/vendor-icons-C-Y4oLkk.js";import{et as y,i as b,t as x}from"./base-ui-BAv0gRbN.js";import{$r as te,Ta as S,t as C}from"./es-LELdnrjB.js";import{v as w,y as T}from"./swrKeys-B4sicPWZ.js";import{r as E,t as D}from"./SkeletonList-BEka3_sY.js";import{n as O,t as k}from"./Avatar-CjGMtaJN.js";import{n as ne,t as re}from"./AsyncBoundary-CzRTtM14.js";var A,j,M,N,P,F=e((()=>{C(),x(),h(),v(),A=t(s()),O(),i(),j=t(o()),M=p(({css:e,cssVar:t})=>({trigger:e`
    &[data-popup-open] {
      background: ${t.colorFillTertiary};
    }
  `})),N=(0,A.memo)(({children:e,content:t,width:n=280})=>(0,j.jsx)(d,{classNames:{trigger:M.trigger},content:t,nativeButton:!1,placement:`bottomLeft`,trigger:`click`,styles:{content:{maxHeight:`min(420px, 70vh)`,overflow:`hidden`,padding:0,paddingBlock:0,paddingInline:0,width:n}},children:e})),P=(0,A.memo)(({avatar:e,background:t,className:n,name:r,style:i,title:o,...s})=>(0,j.jsxs)(S,{clickable:!0,horizontal:!0,align:`center`,className:n,gap:8,padding:2,style:{minWidth:32,overflow:`hidden`,...i},variant:`borderless`,...s,children:[(0,j.jsx)(k,{avatar:e,background:t,name:r,shape:`square`,size:28}),(0,j.jsx)(b,{ellipsis:!0,weight:500,children:o}),(0,j.jsx)(f,{icon:g,size:a,style:{width:24}})]})),N.displayName=`SidebarHeaderSelectPopover`,P.displayName=`SidebarHeaderSelectTrigger`})),I,L,R,z=e((()=>{I=(e,t,n=8)=>t?[t,...e.filter(e=>e!==t)].slice(0,n):e,L=(e,t,n)=>{let r=n?.excludeId,i=n?.limit??5,a=new Map(t.map(e=>[e.id,e])),o=[];for(let t of e){if(t===r)continue;let e=a.get(t);if(e&&(o.push(e),o.length>=i))break}return o},R=(e,t)=>{let n=t.trim().toLowerCase();return n?e.filter(e=>e.title.toLowerCase().includes(n)||e.subtitle?.toLowerCase().includes(n)):[...e]}})),B,V,H,U,W=e((()=>{C(),x(),h(),v(),B=t(s()),V=t(o()),H=p(({css:e,cssVar:t})=>({current:e`
    background: ${t.colorFillTertiary};
  `,row:e`
    cursor: pointer;

    overflow: hidden;
    flex: none;

    padding-inline: 8px;
    border-radius: ${t.borderRadius};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `})),U=(0,B.memo)(({active:e,item:t,onSelect:n,privateLabel:r})=>(0,V.jsxs)(S,{clickable:!0,horizontal:!0,align:`center`,className:e?`${H.row} ${H.current}`:H.row,flex:`none`,gap:8,height:36,variant:`borderless`,onClick:()=>n(t.id),children:[(0,V.jsx)(y,{avatar:t.avatar,background:t.background,shape:`square`,size:28}),(0,V.jsxs)(b,{ellipsis:!0,color:e?m.colorText:m.colorTextSecondary,style:{flex:1},weight:e?500:void 0,children:[t.title,t.subtitle&&(0,V.jsx)(`span`,{style:{fontSize:12,marginInlineStart:6,opacity:.6},children:t.subtitle})]}),t.private&&r&&(0,V.jsx)(b,{color:m.colorTextTertiary,fontSize:12,children:r}),e&&(0,V.jsx)(c,{color:m.colorText,icon:_,size:14})]})),U.displayName=`SwitcherRow`})),G,K,q,J,Y,ie=e((()=>{G=t(s()),w(),z(),K=`lobe-switcher-recent`,q=e=>{if(typeof window>`u`)return[];try{let t=window.localStorage.getItem(e);if(!t)return[];let n=JSON.parse(t);return Array.isArray(n)?n.filter(e=>typeof e==`string`&&e.length>0):[]}catch{return[]}},J=(e,t)=>{typeof window>`u`||window.localStorage.setItem(e,JSON.stringify(t))},Y=e=>{let t=`${K}:${T()??`personal`}:${e}`,[n,r]=(0,G.useState)(()=>q(t));return(0,G.useEffect)(()=>{r(q(t))},[t]),{ids:n,touch:(0,G.useCallback)(e=>{e&&r(n=>{let r=I(n,e);return J(t,r),r})},[t])}}})),X,Z,Q,$,ae=e((()=>{C(),x(),h(),v(),X=t(s()),n(),ne(),D(),z(),W(),ie(),Z=t(o()),Q=p(({css:e,cssVar:t})=>({list:e`
    overflow-y: auto;
    overscroll-behavior: contain;
    flex: 1 1 auto;

    min-height: 0;
    max-height: min(360px, 50vh);
    margin-block-end: calc(var(--switcher-inset) * -1);
    margin-inline: calc(var(--switcher-inset) * -1);
    padding-block: 4px var(--switcher-inset);
    padding-inline: var(--switcher-inset);
  `,root:e`
    --switcher-inset: 6px;

    overflow: hidden;
    max-height: min(420px, 70vh);
    padding: var(--switcher-inset);
  `,search:e`
    flex: none;

    margin-inline: calc(var(--switcher-inset) * -1);
    padding-block: 2px 8px;
    padding-inline: 14px;
    border-block-end: 1px solid ${t.colorBorderSecondary};

    .ant-input-affix-wrapper,
    .ant-input {
      padding-inline: 0;
      border: none !important;
      background: transparent !important;
      box-shadow: none !important;
    }
  `,section:e`
    padding-block: 6px 2px;
    padding-inline: 8px;

    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: ${t.colorTextTertiary};
  `})),$=(0,X.memo)(({activeId:e,error:t,isLoading:n,items:i,kind:a,onRetry:o,onSelect:s,searchPlaceholder:d})=>{let{t:f}=r(`common`),{close:p}=l(),{ids:h,touch:g}=Y(a),[_,v]=(0,X.useState)(``);(0,X.useEffect)(()=>{e&&g(e)},[e,g]);let y=_.trim().length>0,x=(0,X.useMemo)(()=>R(i,_),[i,_]),S=(0,X.useMemo)(()=>y?[]:L(h,i,{excludeId:e}),[e,h,i,y]),C=t=>{g(t),p(),t!==e&&s(t)},w=S.length>0;return(0,Z.jsxs)(u,{className:Q.root,children:[(0,Z.jsx)(`div`,{className:Q.search,children:(0,Z.jsx)(te,{allowClear:!0,autoFocus:!0,placeholder:d,prefix:(0,Z.jsx)(c,{color:m.colorTextTertiary,icon:ee,size:14}),size:`small`,value:_,variant:`borderless`,onChange:e=>v(e.target.value),onPressEnter:()=>{let e=x[0];e&&C(e.id)}})}),(0,Z.jsx)(re,{data:n?void 0:i,error:t,errorVariant:`inline`,isEmpty:y&&x.length===0,isLoading:n,loading:(0,Z.jsx)(E,{rows:4}),empty:(0,Z.jsx)(u,{align:`center`,padding:16,children:(0,Z.jsx)(b,{fontSize:13,type:`secondary`,children:f(`navPanel.searchResultEmpty`)})}),onRetry:o,children:(0,Z.jsx)(`div`,{className:Q.list,children:(0,Z.jsxs)(u,{children:[w&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b,{as:`div`,className:Q.section,children:f(`navPanel.switcherRecent`,{defaultValue:`Recent`})}),S.map(e=>(0,Z.jsx)(U,{item:e,privateLabel:f(`navPanel.privateAgents`),onSelect:C},`recent-${e.id}`))]}),w&&(0,Z.jsx)(b,{as:`div`,className:Q.section,children:f(`navPanel.switcherAll`,{defaultValue:`All`})}),x.map(t=>(0,Z.jsx)(U,{active:t.id===e,item:t,privateLabel:f(`navPanel.privateAgents`),onSelect:C},t.id))]})})})]})}),$.displayName=`SwitcherMenu`}));export{F as a,P as i,ae as n,N as r,$ as t};