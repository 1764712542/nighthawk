import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Qr as i,mr as a}from"./dialog-BebLzVzY.js";import{a as o,c as s,t as c}from"./es-CVJR_g25.js";import{F as l,R as u,t as d}from"./base-ui-BAv0gRbN.js";import{t as f}from"./es-LELdnrjB.js";var p,m,h,g,_,v=e((()=>{f(),d(),c(),p=t(r()),m=t(n()),h=o(({css:e})=>({body:e`
    h3 {
      margin: 0;
      font-weight: bold;
    }

    p {
      margin: 0;
    }
  `})),g=(0,p.memo)(({cover:e,title:t,desc:n,okText:r,cancelText:o,onOk:s,onCancel:c})=>{let{close:l}=u();return(0,m.jsxs)(i,{className:h.body,children:[e,(0,m.jsxs)(i,{gap:4,padding:16,children:[(0,m.jsx)(`h3`,{children:t}),(0,m.jsx)(`p`,{children:n})]}),(r||o)&&(0,m.jsxs)(i,{horizontal:!0,gap:8,justify:`flex-end`,paddingBlock:16,paddingInline:16,style:{paddingTop:0},children:[o?(0,m.jsx)(a,{onClick:()=>{c?.(),l()},children:o}):null,r?(0,m.jsx)(a,{type:`primary`,onClick:()=>{s?.(),l()},children:r}):null]})]})}),g.displayName=`GuideModalContent`,_=({cancelText:e,cover:t,desc:n,okText:r,onCancel:i,onOk:a,title:o,width:s=360})=>l({content:(0,m.jsx)(g,{cancelText:e,cover:t,desc:n,okText:r,title:o,onCancel:i,onOk:a}),footer:null,maskClosable:!0,styles:{content:{padding:0},header:{display:`none`}},width:s})})),y,b,x,S=e((()=>{c(),y=t(r()),b=t(n()),x=(0,y.memo)(({height:e,width:t,src:n})=>(0,b.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,controls:!1,height:e,src:n,width:t,style:{background:s.colorFillSecondary,height:`auto`,width:`100%`}}))}));export{v as i,S as n,_ as r,x as t};