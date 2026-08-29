import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,mr as c}from"./dialog-BebLzVzY.js";import{a as l,t as u}from"./es-CVJR_g25.js";import{Im as d,Ph as f,ea as p,os as m,x as h}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as g,i as _,t as v}from"./base-ui-BAv0gRbN.js";import{t as y,zt as b}from"./es-LELdnrjB.js";var x,S,C,w,T,E=e((()=>{y(),v(),u(),h(),x=t(a()),n(),S=t(i()),C=l(({css:e,cssVar:t})=>({quotaText:e`
    font-size: 13px;
    color: ${t.colorText};
    white-space: nowrap;

    > span {
      color: ${t.colorTextSecondary};
    }
  `,statBar:e`
    width: 4px;
    height: 16px;
    border-radius: 2px;
    background: ${t.colorFillSecondary};

    &[data-filled='true'] {
      background: ${t.colorInfo};
    }
  `})),w=(0,x.memo)(({remaining:e,total:t})=>(0,S.jsx)(s,{horizontal:!0,align:`center`,gap:3,children:Array.from({length:t},(t,n)=>(0,S.jsx)(`div`,{className:C.statBar,"data-filled":n<e},n))})),w.displayName=`MessengerPushQuotaBars`,T=(0,x.memo)(({error:e,name:t,onRetry:n,status:i})=>{let{t:a}=r(`messenger`);if(e)return(0,S.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[(0,S.jsx)(_,{type:`secondary`,children:a(`messenger.push.loadFailed`)}),(0,S.jsx)(c,{icon:(0,S.jsx)(o,{icon:p}),size:`small`,onClick:n,children:a(`messenger.push.retry`)})]});if(!i)return(0,S.jsx)(b.Button,{active:!0,size:`small`,style:{width:220}});if(i.deliverability===`always`)return(0,S.jsxs)(s,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,S.jsx)(g,{color:`success`,icon:(0,S.jsx)(o,{icon:f,size:`small`}),children:a(`messenger.push.alwaysAvailable`)}),(0,S.jsx)(_,{style:{fontSize:13},type:`secondary`,children:a(`messenger.push.alwaysAvailableHint`,{platform:t})})]});if(!i.windowOpen)return(0,S.jsxs)(s,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,S.jsx)(g,{icon:(0,S.jsx)(o,{icon:m,size:`small`}),children:a(`messenger.push.windowClosed`)}),(0,S.jsx)(_,{style:{fontSize:13},type:`secondary`,children:a(`messenger.push.windowClosedHint`,{platform:t})})]});let l=i.expiresInSeconds===null?null:i.expiresInSeconds>=3600?`~${Math.round(i.expiresInSeconds/3600)}h`:`~${Math.max(1,Math.round(i.expiresInSeconds/60))}m`;return(0,S.jsxs)(s,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,wrap:`wrap`,children:[(0,S.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[(0,S.jsx)(g,{color:`success`,icon:(0,S.jsx)(o,{icon:f,size:`small`}),children:a(`messenger.push.windowOpen`)}),l&&(0,S.jsx)(g,{icon:(0,S.jsx)(o,{icon:d,size:`small`}),children:a(`messenger.push.expiresIn`,{value:l})})]}),(0,S.jsxs)(s,{horizontal:!0,align:`center`,gap:8,children:[(0,S.jsx)(w,{remaining:i.remaining,total:i.maxSends}),(0,S.jsxs)(`span`,{className:C.quotaText,children:[i.remaining,(0,S.jsxs)(`span`,{children:[` / `,i.maxSends]})]})]})]})}),T.displayName=`MessengerPushWindowState`}));export{E as n,T as t};