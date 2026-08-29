import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Qr as i,Xr as a}from"./dialog-BebLzVzY.js";import{a as o,c as s,l as c,t as l}from"./es-CVJR_g25.js";import{et as u,t as d}from"./base-ui-BAv0gRbN.js";import{t as f}from"./es-LELdnrjB.js";var p,m,h,g,_,v=e((()=>{f(),d(),l(),p=t(r()),m=t(n()),h=o(({css:e,cssVar:t})=>({container:e`
    border: 1px solid ${t.colorSplit};
    border-radius: 8px;
    color: ${t.colorText};
    background: ${t.colorBgContainer};
  `,desc:e`
    color: ${t.colorTextTertiary};
    text-align: center;
  `,form:e`
    width: 100%;
    max-width: 360px;

    @media (width <= 768px) {
      max-width: 90%;
    }
  `})),g=(0,p.memo)(({children:e,className:t,gap:n=24,padding:r=24,...i})=>(0,m.jsx)(a,{className:c(h.container,t),gap:n,padding:r,...i,children:e})),_=(0,p.memo)(({children:e,background:t,title:n,description:r,avatar:o,animation:l,className:d,gap:f=16,...p})=>(0,m.jsxs)(a,{className:c(h.form,d),gap:f,...p,children:[(0,m.jsx)(u,{animation:l,avatar:o,background:t??s.colorFillContent,shape:`square`,size:80}),(0,m.jsxs)(i,{gap:8,width:`100%`,children:[(0,m.jsx)(i,{style:{fontSize:18,fontWeight:`bold`,textAlign:`center`},children:n}),(0,m.jsx)(i,{className:h.desc,children:r})]}),e]}))}));export{_ as n,v as r,g as t};