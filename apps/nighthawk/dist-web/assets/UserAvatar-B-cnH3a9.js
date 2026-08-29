import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{Fn as n,Pn as r,cs as i,fa as a,ga as o,ls as s}from"./app-const-Bl9rlHwj.js";import{a as c,c as l,t as u}from"./es-CVJR_g25.js";import{et as d,t as f}from"./base-ui-BAv0gRbN.js";import{g as p,mn as m,p as h,pn as g,u as _,x as v}from"./serverConfig-CmLVLry1.js";import{A as y,M as b,t as x}from"./selectors-CTRMh8eY.js";var S,C,w,T,E=e((()=>{o(),f(),u(),S=t(s()),n(),a(),_(),g(),p(),x(),C=t(i()),w=c(({css:e})=>({clickable:e`
    position: relative;
    transition: all 200ms ease-out 0s;

    &::before {
      content: '';

      position: absolute;
      transform: skewX(-45deg) translateX(-400%);

      overflow: hidden;

      box-sizing: border-box;
      width: 25%;
      height: 100%;

      background: rgb(255 255 255 / 50%);

      transition: all 200ms ease-out 0s;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${l.colorPrimary};

      &::before {
        transform: skewX(-45deg) translateX(400%);
      }
    }
  `})),T=({ref:e,size:t=40,background:n,clickable:i,className:a,style:o,avatarOverride:s,nameOverride:c,...u})=>{let[f,p,g]=v(e=>[b.userAvatar(e),b.nickName(e),b.username(e)]),_=v(y.isLogin),x=h(m.remoteServerUrl),T=(0,S.useMemo)(()=>{if(!_)return r;if(f)return f},[_,f,x]);return(0,C.jsx)(d,{alt:c||(_?p||g||`User`:`LobeHub`),avatar:c?s||c:s||T||p||g,background:n,className:i?w.clickable:a,ref:e,shape:`square`,size:t,style:{color:l.colorText,flex:`none`,...o},...u})}}));export{E as n,T as t};