import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Cr as o,Hr as s,St as c}from"./dialog-BebLzVzY.js";import{a as l,c as u,t as d}from"./es-CVJR_g25.js";import{Mc as f,Sc as p,et as m,x as h}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as g}from"./es-LELdnrjB.js";import{v as _,y as v}from"./swrKeys-B4sicPWZ.js";import{dn as y,mn as b}from"./tool-BJJaXV35.js";import{Do as x,Eo as S}from"./index-Djd-5Nq9.js";import{n as C,t as w}from"./menuExtra-cbufrbFz.js";var T,E,D=e((()=>{T=e=>e===`private`?`Private`:`Workspace`,E=e=>e===`private`?`createTask.visibility.private`:`createTask.visibility.workspace`})),O,k,A,j,M,N=e((()=>{g(),d(),h(),O=t(a()),n(),_(),S(),y(),w(),D(),k=t(i()),A=l(({css:e,cssVar:t})=>({trigger:e`
    cursor: pointer;

    display: inline-flex;
    align-items: center;

    color: ${t.colorTextDescription};

    transition: color ${t.motionDurationMid};

    &:hover {
      color: ${t.colorText};
    }
  `,triggerDisabled:e`
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      color: ${t.colorTextDescription};
      filter: none;
    }
  `})),j=[`private`,`public`],M=(0,O.memo)(({children:e,disableDropdown:t,lockedReason:n,onChange:i,size:a=14,taskIdentifier:l,visibility:d})=>{let[h,g]=(0,O.useState)(!1),[_,y]=(0,O.useState)(!1),{t:S}=r(`chat`),w=v(),{allowed:D,reason:M}=x(`create_content`),N=b(e=>e.updateTaskVisibility),P=(0,O.useCallback)(async e=>{if(e!==d){if(i){i(e);return}if(l){g(!0);try{await N(l,e)}finally{g(!1)}}}},[i,l,N,d]),F=d===`private`?p:m,I=S(E(d),{defaultValue:T(d)}),L=(0,O.useMemo)(()=>j.map(e=>{let t=e===`private`?p:m;return{extra:C(e===d),icon:(0,k.jsx)(s,{color:u.colorTextSecondary,icon:t,size:16}),key:e,label:S(E(e),{defaultValue:T(e)}),onClick:({domEvent:t})=>{t.stopPropagation(),P(e)}}}),[P,S,d]);if(!w&&!l)return null;let R=e||(h?(0,k.jsx)(s,{spin:!0,color:u.colorTextDescription,icon:f,size:a}):(0,k.jsx)(o,{title:I,children:(0,k.jsx)(`span`,{className:A.trigger,onClick:e=>e.stopPropagation(),children:(0,k.jsx)(F,{size:a})})}));return t?(0,k.jsx)(k.Fragment,{children:R}):n?(0,k.jsx)(o,{title:n,children:(0,k.jsx)(`span`,{className:A.triggerDisabled,style:{display:`inline-flex`},onClick:e=>e.stopPropagation(),children:R})}):D?(0,k.jsx)(c,{items:L,open:_,onOpenChange:y,children:R}):(0,k.jsx)(o,{title:M,children:(0,k.jsx)(`span`,{className:A.triggerDisabled,style:{display:`inline-flex`},onClick:e=>e.stopPropagation(),children:R})})}),M.displayName=`TaskVisibilityTag`}));export{D as a,E as i,N as n,T as r,M as t};