import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{B as o,Hr as s,Qr as c,Xr as l}from"./dialog-BebLzVzY.js";import{a as u,c as d,l as f,t as p}from"./es-CVJR_g25.js";import{Jf as ee,Of as te,Pd as m,wf as h,x as g}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as _}from"./base-ui-BAv0gRbN.js";import{t as v}from"./es-LELdnrjB.js";import{C as y,D as b,E as x,Ot as S,V as C,er as w,jt as T,s as E,t as ne,vt as D,xt as O}from"./serverConfig-CmLVLry1.js";import{r as re}from"./store-DKx7p_l_.js";import{n as ie}from"./file-CNldqoil.js";import{Do as ae,Eo as oe,Go as k,Ho as se,Ko as ce,Uo as le,Wo as ue}from"./index-Djd-5Nq9.js";var A,j=e((()=>{D(),A=(e,t)=>O(T.isModelSupportToolUse(e,t))})),M,de=e((()=>{D(),S(),M=(e,t)=>O(n=>!e||!t?!1:T.isModelSupportAudio(e,t)(n))})),N,fe=e((()=>{D(),S(),N=(e,t)=>O(n=>!e||!t?!1:T.isModelSupportVideo(e,t)(n))})),P,pe=e((()=>{D(),P=(e,t)=>O(T.isModelSupportVision(e,t))})),F,I,L=e((()=>{de(),j(),fe(),pe(),y(),b(),D(),ne(),F=({enableMultimodalUnderstanding:e,fallbackConfigured:t,fallbackModelAbilities:n,supportToolUse:r})=>{let i=e&&t&&r;return{audio:i&&n?.audio!==!1,video:i&&n?.video!==!1,vision:i&&n?.vision!==!1}},I=(e,t,n)=>{let r=P(e,t),i=N(e,t),a=M(e,t),o=A(e,t),s=E(w.enableMultimodalUnderstanding),c=E(w.multimodalUnderstanding),l=O(T.getEnabledModelById(c?.model??``,c?.provider??``)),u=F({enableMultimodalUnderstanding:s,fallbackConfigured:!!(c?.model&&c.provider),fallbackModelAbilities:l?.abilities,supportToolUse:o}),d=x(e=>n?C.getAgencyConfigById(n)(e)?.heterogeneousProvider?.type:void 0);return x(e=>!!n&&(C.getAgentEnableModeById(n)(e)||C.isAgentHeterogeneousById(n)(e)))?{canUploadAudio:!0,canUploadImage:d!==`kimi-code`,canUploadVideo:!0}:{canUploadAudio:a||u.audio,canUploadImage:r||u.vision,canUploadVideo:i||u.video}}})),R,z,B=e((()=>{R=t(a()),k(),z=(e,t)=>{let n=(0,R.useCallback)(async e=>{if(!e.clipboardData)return;let n=await ue(Array.from(e.clipboardData.items));n.length!==0&&t(n)},[t]);(0,R.useEffect)(()=>{if(e)return e.on(`onPaste`,n),()=>{e.off(`onPaste`,n)}},[e,n])}})),V,H,U,W=e((()=>{_(),V=t(a()),n(),L(),oe(),ie(),H=(e,{canUploadAudio:t,canUploadImage:n,canUploadVideo:r})=>{let i=[],a=[];for(let o of e)((o.type.startsWith(`image`)?n:o.type.startsWith(`video`)?r:!o.type.startsWith(`audio`)||t)?i:a).push(o);return{accepted:i,rejected:a}},U=e=>{let{agentId:t,model:n=``,provider:i=``}=e,{t:a}=r(`chat`),{canUploadImage:s,canUploadVideo:c,canUploadAudio:l}=I(n,i,t),u=re(e=>e.uploadChatFiles),{allowed:d}=ae(`create_content`);return{canUploadImage:s,canUploadVideo:c,canUploadAudio:l,handleUploadFiles:(0,V.useCallback)(async e=>{if(!d)return;let{accepted:n,rejected:r}=H(e,{canUploadAudio:l,canUploadImage:s,canUploadVideo:c});r.length>0&&o.warning(a(`upload.validation.mediaNotSupported`,{files:r.map(e=>e.name).join(`, `)})),n.length>0&&u(n,t)},[t,d,s,c,l,a,u])}}})),G,K,q,J,Y,X,Z,me,Q,$,he=e((()=>{v(),p(),g(),G=t(a()),n(),se(),k(),K=t(i()),B(),W(),q=48,J={size:28,strokeWidth:1.5},Y=28,X=10,Z={iconColor:`color-mix(in srgb, ${d.geekblue} 95%, black)`,iconStrongBg:`color-mix(in srgb, ${d.geekblue} 38%, white)`,iconSoftBg:`color-mix(in srgb, ${d.geekblue} 68%, white)`},me={iconColor:`color-mix(in srgb, ${d.purple} 82%, black)`,iconStrongBg:`color-mix(in srgb, ${d.purple} 36%, white)`,iconSoftBg:`color-mix(in srgb, ${d.purple} 64%, white)`},Q=u(({css:e})=>({container:e`
    position: relative;
  `,content:e`
    position: relative;
    z-index: 1;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-block: 24px;
    padding-inline: 28px;
  `,desc:e`
    font-size: 12px;
    line-height: 18px;
    color: #fff;
  `,icon:e`
    border-radius: ${d.borderRadiusSM};
  `,iconGroup:e`
    margin-block-start: 0;
  `,overlay:e`
    pointer-events: none;

    position: absolute;
    z-index: 100;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${d.colorBgMask};

    transition: all 0.2s ease-in-out;
  `,overlayContent:e`
    position: relative;

    box-sizing: border-box;
    width: min(460px, 72vw);
    padding: ${Y}px;
    border-radius: 16px;

    background: ${d.geekblue};
    box-shadow: 0 16px 48px color-mix(in srgb, ${d.geekblue} 32%, transparent);

    &::before {
      pointer-events: none;
      content: '';

      position: absolute;
      inset: ${X}px;

      border: 1.5px dashed #fff;
      border-radius: ${d.borderRadiusLG};
    }
  `,overlayContentLocalPath:e`
    background: color-mix(in srgb, ${d.purple} 82%, ${d.geekblue});
    box-shadow: 0 16px 48px color-mix(in srgb, ${d.purple} 32%, transparent);
  `,title:e`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
  `})),$=(0,G.memo)(({children:e,className:t,disabled:n=!1,enabledFiles:i=!0,enableLocalPathReference:a=!1,onLocalPaths:o,overlayMinHeight:u=160,onUploadFiles:d,style:p})=>{let{t:g}=r(`components`),{isDraggingGlobally:_,dragContentKind:v}=le(),{getContainerProps:y}=ce({disabled:n,enableLocalPathReference:a,onLocalPaths:o,onUploadFiles:d}),b=_&&!n,x=a&&v!==`none`,S=(0,G.useMemo)(()=>x?{desc:g(`DragUpload.dragLocalPathDesc`),showFolderIcon:v===`folders`,title:g(`DragUpload.dragLocalPathTitle`)}:v===`folders`?{desc:g(`DragUpload.dragFolderDesc`),showFolderIcon:!0,title:g(`DragUpload.dragFolderTitle`)}:v===`mixed`?{desc:g(`DragUpload.dragMixedDesc`),showFolderIcon:!0,title:g(`DragUpload.dragMixedTitle`)}:{desc:g(i?`DragUpload.dragFileDesc`:`DragUpload.dragDesc`),showFolderIcon:!1,title:g(i?`DragUpload.dragFileTitle`:`DragUpload.dragTitle`)},[v,i,x,g]),C=(0,G.useMemo)(()=>x&&v===`mixed`?[m,h,te]:S.showFolderIcon?[m,m,m]:[ee,h,te],[v,x,S.showFolderIcon]),w=x?me:Z;return(0,K.jsxs)(`div`,{className:f(Q.container,t),style:p,...y(),children:[e,b&&(0,K.jsx)(`div`,{className:Q.overlay,children:(0,K.jsx)(`div`,{style:{minHeight:u},className:f(Q.overlayContent,x&&Q.overlayContentLocalPath),children:(0,K.jsxs)(l,{className:Q.content,gap:8,children:[(0,K.jsxs)(c,{horizontal:!0,className:Q.iconGroup,children:[(0,K.jsx)(l,{className:Q.icon,height:q*1.2,width:q,style:{background:w.iconSoftBg,color:w.iconColor,transform:`rotateZ(-20deg) translateX(8px)`},children:(0,K.jsx)(s,{icon:C[0],size:J})}),(0,K.jsx)(l,{className:Q.icon,height:q*1.2,width:q,style:{background:w.iconStrongBg,color:w.iconColor,transform:`translateY(-10px)`,zIndex:1},children:(0,K.jsx)(s,{icon:C[1],size:J})}),(0,K.jsx)(l,{className:Q.icon,height:q*1.2,width:q,style:{background:w.iconSoftBg,color:w.iconColor,transform:`rotateZ(20deg) translateX(-8px)`},children:(0,K.jsx)(s,{icon:C[2],size:J})})]}),(0,K.jsxs)(c,{align:`center`,gap:4,style:{textAlign:`center`},children:[(0,K.jsx)(c,{className:Q.title,children:S.title}),(0,K.jsx)(c,{className:Q.desc,children:S.desc})]})]})})})]})}),$.displayName=`DragUploadZone`}));export{B as a,L as c,A as d,U as i,I as l,he as n,z as o,W as r,F as s,$ as t,j as u};