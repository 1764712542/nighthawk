import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{a as i,c as a,t as o}from"./es-CVJR_g25.js";var s,c,l,u,d=e((()=>{o(),s=t(r()),c=t(n()),l=i(({css:e})=>({bar:e`
    transition: height 0.2s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `})),u=(0,s.memo)(({values:e,width:t=132})=>{let n=e.length,r=Math.max(3,(t-(n-1)*4)/n);return(0,c.jsx)(`svg`,{height:40,viewBox:`0 0 ${t} 40`,width:t,children:e.map((e,t)=>{let i=Math.max(3,Math.max(0,Math.min(1,e))*40),o=t===n-1;return(0,c.jsx)(`rect`,{className:l.bar,fill:o?a.colorPrimary:a.colorSuccess,height:i,opacity:o?1:.45,rx:2,width:r,x:t*(r+4),y:40-i},t)})})})}));export{d as n,u as t};