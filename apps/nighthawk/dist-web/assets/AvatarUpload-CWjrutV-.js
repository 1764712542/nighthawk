import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Hr as i}from"./dialog-BebLzVzY.js";import{a,b as o,c as s,lt as c,t as l,x as u}from"./es-CVJR_g25.js";import{Ka as d,Mc as f,O as p,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{et as h,t as g}from"./base-ui-BAv0gRbN.js";import{t as _}from"./es-LELdnrjB.js";import{ht as v,pt as y}from"./src-Cw6BG0HN.js";import{n as b,t as x}from"./uploadFIle-BroCag9Z.js";var S,C,w,T,E=e((()=>{_(),g(),o(),l(),m(),S=t(r()),v(),b(),C=t(n()),w=a(({css:e})=>({delete:e`
    cursor: pointer;

    position: absolute;
    z-index: 2;
    inset-block-start: 2px;
    inset-inline-end: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border: 2px solid ${s.colorBgContainer};
    border-radius: 50%;

    color: ${s.colorTextLightSolid};

    opacity: 0;
    background: ${s.colorError};

    transition: opacity ${s.motionDurationMid} ease;
  `,overlay:e`
    cursor: pointer;

    position: absolute;
    z-index: 1;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    opacity: 0;
    background: ${s.colorBgMask};

    transition: opacity ${s.motionDurationMid} ease;
  `,wrapper:e`
    cursor: pointer;
    position: relative;
    flex: none;
    border-radius: 8px;

    &:hover .avatar-edit-overlay,
    &:hover .avatar-delete-badge {
      opacity: 1;
    }
  `})),T=(0,S.memo)(({value:e,onUpload:t,onDelete:n,allowDelete:r,loading:a,compressSize:o=256,shape:l=`square`,size:m=72,title:g})=>(0,C.jsx)(u,{beforeUpload:(0,S.useMemo)(()=>x(async e=>{let n=new Image;n.src=e,await new Promise((e,t)=>{n.addEventListener(`load`,e),n.addEventListener(`error`,t)});let r=y({img:n,size:o}),i=await(await fetch(r)).blob();t?.(new File([i],`avatar.webp`,{type:`image/webp`}))}),[o,t]),itemRender:()=>void 0,maxCount:1,children:(0,C.jsx)(c,{indicator:(0,C.jsx)(i,{spin:!0,icon:f}),spinning:!!a,children:(0,C.jsxs)(`div`,{className:w.wrapper,children:[(0,C.jsx)(h,{avatar:e,shape:l,size:m,title:g}),(0,C.jsx)(`div`,{className:`${w.overlay} avatar-edit-overlay`,children:(0,C.jsx)(i,{color:s.colorTextLightSolid,icon:d,size:Math.round(m/3)})}),r&&(0,C.jsx)(`div`,{className:`${w.delete} avatar-delete-badge`,onClick:e=>{e.stopPropagation(),n?.()},children:(0,C.jsx)(i,{icon:p,size:12})})]})})})),T.displayName=`AvatarUpload`}));export{E as n,T as t};