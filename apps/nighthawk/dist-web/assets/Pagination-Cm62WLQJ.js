import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{a as i,h as a}from"../vendor/vendor-react-CBcx1o7d.js";import{_ as o,a as s,b as c,ft as l,t as u}from"./es-CVJR_g25.js";import{n as d,t as f}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as p,r as m}from"./const-Cx_ztRKW.js";import{n as h,t as g}from"./useQuery-DOeYxe-v.js";var _,v,y,b,x,S,C=e((()=>{c(),u(),_=t(r()),i(),f(),g(),m(),v=t(n()),y=`lobe-mobile-scroll-container`,b=`ant`,x=s(({css:e,cssVar:t})=>({page:e`
      .${b}-pagination-item-active {
        border-color: ${t.colorFillSecondary};
        background: ${t.colorFillSecondary};

        &:hover {
          border-color: ${t.colorFill};
          background: ${t.colorFill};
        }
      }
    `})),S=(0,_.memo)(({tab:e,currentPage:t,total:n,pageSize:r})=>{let{page:i}=h(),s=d(),c=a(),{mobile:u}=o();return(0,v.jsx)(l,{className:x.page,current:i?Number(i):t,"data-testid":`pagination`,pageSize:r,showSizeChanger:!1,total:n,style:{alignSelf:`flex-end`},onChange:t=>{let n=new URLSearchParams(c.search);n.set(`page`,String(t)),s(`/community/${e}?${n.toString()}`);let r=u?y:p,i=document?.querySelector(`#${r}`);i&&i.scrollTo({behavior:`smooth`,top:0})}})})}));export{C as n,S as t};