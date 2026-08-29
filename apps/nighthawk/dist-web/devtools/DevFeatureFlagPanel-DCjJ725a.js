import{n as e,o as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";import{Ua as n,cs as r,ls as i,to as a}from"../assets/app-const-Bl9rlHwj.js";import{Qr as o,mr as s,zn as c}from"../assets/dialog-BebLzVzY.js";import{a as l,c as u,l as d,t as f}from"../assets/es-CVJR_g25.js";import{Bc as p,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{C as h,i as g,t as _}from"../assets/base-ui-BAv0gRbN.js";import{$r as v,t as y}from"../assets/es-LELdnrjB.js";import{c as b,l as x,s as S,t as C}from"../assets/serverConfig-CmLVLry1.js";import{n as w,t as T}from"./panelStyles-srd8T26Q.js";var E,D,O,k,A,j=e((()=>{y(),_(),f(),n(),E=t(i()),C(),D=t(r()),O=l(({css:e})=>({control:e`
    flex: none;
  `,meta:e`
    font-family: ${u.fontFamilyCode};
    font-size: 10px;
    color: ${u.colorTextDescription};
  `,name:e`
    font-family: ${u.fontFamilyCode};
    font-size: 12px;
    font-weight: 500;
    color: ${u.colorText};
  `,row:e`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    padding-block: 6px;
    padding-inline: 12px;
    border-block-end: 1px solid ${u.colorBorderSecondary};
    border-inline-start: 2px solid transparent;

    transition: background 120ms ease;

    &:hover {
      background: ${u.colorFillTertiary};
    }
  `,rowOverridden:e`
    border-inline-start-color: ${u.colorWarning};
    background: ${u.colorWarningBg};

    &:hover {
      background: ${u.colorWarningBgHover};
    }
  `})),k=[{label:`true`,value:`true`},{label:`false`,value:`false`},{label:`inherit`,value:`inherit`}],A=(0,E.memo)(({flagKey:e})=>{let t=S(t=>t._originalFeatureFlags?.[e]),n=S(t=>t._featureFlagOverrides[e]),r=S(e=>e.setFlagOverride),i=n!==void 0,s=(0,E.useMemo)(()=>n===!0?`true`:n===!1?`false`:`inherit`,[n]);return(0,D.jsxs)(`div`,{className:d(O.row,i&&O.rowOverridden),children:[(0,D.jsxs)(o,{flex:1,gap:2,style:{minWidth:0},children:[(0,D.jsx)(g,{ellipsis:!0,className:O.name,children:a(e)}),(0,D.jsxs)(`span`,{className:O.meta,children:[`server: `,String(t)]})]}),(0,D.jsx)(h,{className:O.control,options:k,size:`small`,value:s,onChange:t=>{if(t===`inherit`){r(e,void 0);return}r(e,t===`true`)}})]})}),A.displayName=`DevFeatureFlagPanel/FlagRow`})),M,N,P,F,I=e((()=>{y(),_(),f(),n(),m(),M=t(i()),w(),C(),b(),j(),N=t(r()),P=l(({css:e})=>({body:e`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `,empty:e`
    padding-block: 32px;
    font-size: 12px;
    color: ${u.colorTextDescription};
    text-align: center;
  `,footer:e`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    padding-block: 8px;
    padding-inline: 12px;
    border-block-start: 1px solid ${u.colorBorderSecondary};
  `,toolbar:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;

    height: 44px;
    border-block-end: 1px solid ${u.colorBorderSecondary};
  `,toolbarFilter:e`
    display: flex;
    flex-shrink: 0;
    gap: 6px;
    align-items: center;

    height: 100%;
    padding-inline: 12px;
    border-inline-start: 1px solid ${u.colorBorderSecondary};
  `})),F=(0,M.memo)(()=>{let e=S(e=>e._originalFeatureFlags),t=S(e=>Object.keys(e._featureFlagOverrides).length),n=S(e=>e._featureFlagOverrides),r=S(e=>e.resetFlagOverrides),[i,l]=(0,M.useState)(``),[u,d]=(0,M.useState)(!1),f=(0,M.useMemo)(()=>e?Object.keys(e).filter(x).sort():[],[e]),m=(0,M.useMemo)(()=>{let e=i.trim().toLowerCase();return f.filter(t=>u&&n[t]===void 0?!1:e?a(t).includes(e):!0)},[f,n,u,i]);return e?(0,N.jsxs)(`div`,{className:T.root,children:[(0,N.jsxs)(`div`,{className:P.toolbar,children:[(0,N.jsx)(v,{allowClear:!0,className:T.searchInput,placeholder:`Search flag name…`,size:`small`,value:i,variant:`borderless`,onChange:e=>l(e.target.value)}),(0,N.jsxs)(o,{horizontal:!0,className:P.toolbarFilter,children:[(0,N.jsx)(c,{checked:u,size:`small`,onChange:d}),(0,N.jsx)(g,{style:{fontSize:12,whiteSpace:`nowrap`},type:`secondary`,children:`overridden only`})]})]}),(0,N.jsx)(`div`,{className:P.body,children:m.length===0?(0,N.jsx)(`div`,{className:P.empty,children:`No flags match`}):m.map(e=>(0,N.jsx)(A,{flagKey:e},e))}),(0,N.jsxs)(`div`,{className:P.footer,children:[(0,N.jsxs)(g,{style:{fontSize:11},type:`secondary`,children:[t,` active override`,t===1?``:`s`,` · client-side · localStorage persisted`]}),(0,N.jsx)(s,{disabled:t===0,icon:p,size:`small`,onClick:r,children:`Reset all`})]})]}):(0,N.jsx)(`div`,{className:T.root,children:(0,N.jsx)(`div`,{className:P.empty,children:`Server feature flags are not loaded yet.`})})}),F.displayName=`DevFeatureFlagPanel/Panel`}));e((()=>{I()}))();export{F as default};