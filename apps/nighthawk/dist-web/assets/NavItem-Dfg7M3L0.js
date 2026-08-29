import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Hr as i,Q as a,Qr as o,Xr as s}from"./dialog-BebLzVzY.js";import{a as c,c as l,l as u,t as d}from"./es-CVJR_g25.js";import{i as f,t as p}from"./base-ui-BAv0gRbN.js";import{Ta as m,t as h}from"./es-LELdnrjB.js";import{n as g,t as _}from"./NeuralNetworkLoading-CUDFTjYo.js";import{n as v,t as y}from"./navigation-D3in5vhl.js";var b,x,S=e((()=>{b=t(r()),x=e=>{let t=typeof e==`function`,[n,r]=(0,b.useState)(!1);return{mount:(0,b.useCallback)(()=>{t&&r(!0)},[t]),node:t?n?e():null:e}}})),C,w,T,E,D,O=e((()=>{h(),p(),d(),C=t(r()),g(),y(),S(),w=t(n()),T=`nav-item-actions`,E=c(({css:e})=>({container:e`
    user-select: none;
    overflow: hidden;
    min-width: 32px;

    .${T} {
      width: 0;
      margin-inline-end: 2px;
      opacity: 0;
      transition: opacity 0.2s ${l.motionEaseOut};

      &:has([data-popup-open]),
      &:focus-within {
        width: unset;
        opacity: 1;
      }
    }

    &:hover {
      .${T} {
        width: unset;
        opacity: 1;
      }
    }
  `})),D=(0,C.memo)(({className:e,actions:t,contextMenuItems:n,active:r,href:c,icon:d,iconSize:p=18,title:h,titleColor:g,description:y,onClick:b,disabled:S,loading:C,extra:D,slots:O,style:k,onFocus:A,onPointerEnter:j,...M})=>{let{mount:N,node:P}=x(t),F=e=>{N(),j?.(e)},I=e=>{N(),A?.(e)},L=r?l.colorText:l.colorTextDescription,R=g??(r?l.colorText:l.colorTextSecondary),z=r?`filled`:`borderless`,{titlePrefix:B,iconPostfix:V}=O||{},H=c?{as:`a`,href:c}:{},U=c||S||k?{...c?{color:`inherit`,textDecoration:`none`}:void 0,...S?{cursor:`not-allowed`,opacity:.5}:void 0,...k}:void 0,W=(0,w.jsxs)(m,{horizontal:!0,align:`center`,className:u(E.container,e),clickable:!S,gap:8,height:y?void 0:36,paddingBlock:y?8:void 0,paddingInline:4,style:U,variant:z,onClick:e=>{c&&!v(e)&&e.preventDefault(),!S&&b?.(e)},...H,...M,onFocus:I,onPointerEnter:F,children:[d&&(0,w.jsx)(s,{flex:`none`,height:y?22:28,style:y?{alignSelf:`flex-start`}:void 0,width:28,children:C?(0,w.jsx)(_,{size:p}):(0,w.jsx)(i,{color:L,icon:d,size:p})}),V,(0,w.jsxs)(o,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:[B,y?(0,w.jsxs)(o,{flex:1,gap:3,style:{overflow:`hidden`},children:[(0,w.jsx)(f,{color:R,ellipsis:{tooltipWhenOverflow:!0},children:h}),y]}):(0,w.jsx)(f,{color:R,style:{flex:1},ellipsis:{tooltipWhenOverflow:!0},children:h}),(0,w.jsxs)(o,{horizontal:!0,align:`center`,gap:2,justify:`flex-end`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:[D,t&&(0,w.jsx)(o,{horizontal:!0,align:`center`,className:T,gap:2,justify:`flex-end`,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:P})]})]})]});return n?(0,w.jsx)(a,{items:n,children:W}):W}),D.displayName=`NavItem`}));export{O as n,D as t};