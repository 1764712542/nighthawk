import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{bt as i}from"./dialog-BebLzVzY.js";import{a,c as o,l as s,t as c}from"./es-CVJR_g25.js";import{It as l,x as u}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as d}from"./base-ui-BAv0gRbN.js";import{Ft as f,t as p}from"./es-LELdnrjB.js";import{n as m,t as h}from"./usePlatform-DCY412qm.js";var g=e((()=>{})),_,v,y,b,x=e((()=>{p(),d(),c(),u(),_=t(r()),h(),g(),v=t(n()),y=a(({css:e})=>({deleteButton:e`
    color: #fff;
    background: ${o.colorBgMask};

    &:hover {
      background: ${o.colorError};
    }
  `,editableImage:e`
    background: ${o.colorBgContainer};
    box-shadow: 0 0 0 1px ${o.colorFill} inset;
  `,image:e`
    margin-block: 0 !important;
  `})),b=(0,_.memo)(({className:e,style:t,editable:n,alt:r,onRemove:a,url:o,loading:c,alwaysShowClose:u,preview:d,ratio:p,width:h,height:g})=>{let _=n?64:`100%`,{isSafari:b}=m(),x=p&&p>0?p:h&&h>0&&g&&g>0?h/g:void 0;return(0,v.jsx)(f,{alt:r||``,alwaysShowActions:u,classNames:{wrapper:s(y.image,n&&y.editableImage,e)},height:b?`auto`:`100%`,isLoading:c,preview:d,size:_,src:o,actions:n&&(0,v.jsx)(i,{glass:!0,className:y.deleteButton,icon:l,size:`small`,onClick:e=>{e.stopPropagation(),a?.()}}),style:{aspectRatio:x,height:x||b?`auto`:`100%`,width:`100%`,...t}})})}));export{x as n,b as t};