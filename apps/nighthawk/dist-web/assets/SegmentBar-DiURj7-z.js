import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{a as i,c as a,t as o}from"./es-CVJR_g25.js";var s,c,l,u,d=e((()=>{o(),s=t(r()),c=t(n()),l=i(({css:e})=>({segment:e`
    height: 100%;
    transition: width 0.3s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,track:e`
    overflow: hidden;
    display: flex;

    width: 100%;
    border-radius: 999px;

    background: ${a.colorFillSecondary};
  `})),u=(0,s.memo)(({segments:e,height:t=8})=>{let n=e.reduce((e,t)=>e+t.value,0);return(0,c.jsx)(`div`,{className:l.track,style:{height:t},children:n>0&&e.map((e,t)=>e.value>0?(0,c.jsx)(`span`,{className:l.segment,style:{background:e.color,width:`${e.value/n*100}%`}},t):null)})})}));export{d as n,u as t};