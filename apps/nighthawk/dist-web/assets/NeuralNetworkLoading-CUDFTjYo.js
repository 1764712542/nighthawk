import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{a as i,d as a,t as o}from"./es-CVJR_g25.js";var s,c,l,u,d,f,p,m,h=e((()=>{o(),s=t(r()),c=t(n()),l=a`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`,u=a`
  0% {
    transform: translateX(0);
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(var(--flow-distance));
    opacity: 0.5;
  }
`,d=a`
  100% {
    transform: rotate(360deg);
  }
`,f=a`
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`,p=i(({css:e,cssVar:t})=>({center:e`
    fill: ${t.colorTextSecondary};
    animation: ${f} 2s infinite;
  `,connection:e`
    opacity: 0.3;
    stroke: ${t.colorTextSecondary};
    stroke-width: 0.5;
  `,container:e`
    display: flex;
    align-items: center;
    justify-content: center;
  `,node:e`
    fill: ${t.colorTextSecondary};
    animation: ${l} 2s infinite;
  `,particle:e`
    fill: ${t.colorTextSecondary};
    animation: ${u} 2s infinite;
  `,ring:e`
    transform-origin: center;

    fill: none;
    stroke: ${t.colorFill};
    stroke-dasharray: 0 8;
    stroke-width: 1;

    animation: ${d} 20s infinite linear;
  `,svg:e`
    width: 100%;
    height: 100%;
  `})),m=(0,s.memo)(({size:e=16})=>{let t=[];for(let e=0;e<3;e++)for(let n=0;n<3;n++){let r=25+e*25,i=25+n*25,a=(e*3+n)*.2;t.push((0,c.jsx)(`circle`,{className:p.node,cx:r,cy:i,r:`3`,style:{animationDelay:`${a}s`}},`node-${e}-${n}`))}let n=[];for(let e=0;e<2;e++)for(let t=0;t<3;t++){let r=25+e*25,i=25+t*25;for(let a=0;a<3;a++){let o=25+(e+1)*25,s=25+a*25;n.push((0,c.jsx)(`line`,{className:p.connection,x1:r,x2:o,y1:i,y2:s},`connection-${e}-${t}-${a}`))}}let r=[0,1,2].map(e=>(0,c.jsx)(`circle`,{className:p.particle,cx:25,cy:50,r:`1.5`,style:{"--flow-distance":`50px`,animationDelay:`${e*.6}s`}},`particle-${e}`));return(0,c.jsx)(`div`,{className:p.container,style:{height:e,width:e},children:(0,c.jsxs)(`svg`,{className:p.svg,viewBox:`0 0 100 100`,xmlns:`http://www.w3.org/2000/svg`,children:[n,t,r,(0,c.jsx)(`rect`,{className:p.center,height:`6`,width:`6`,x:`47`,y:`47`}),(0,c.jsx)(`circle`,{className:p.ring,cx:`50`,cy:`50`,r:`40`})]})})})}));export{h as n,m as t};