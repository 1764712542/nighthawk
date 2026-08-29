import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{cs as r,ls as i}from"./app-const-Bl9rlHwj.js";import{$r as a,Ar as o,Cr as s,Hr as c,Jr as l,Qr as u,Ur as d,Yr as f,bt as p,kr as m,nt as h,rt as g,wr as _,xt as v}from"./dialog-BebLzVzY.js";import{Ut as y,_ as b,a as x,b as S,c as C,et as w,f as T,h as E,hn as D,l as O,m as k,t as A}from"./es-CVJR_g25.js";import{It as ee,Kt as te,Mc as ne,Ri as re,cm as ie,er as ae,x as j}from"../vendor/vendor-icons-C-Y4oLkk.js";import{Bi as oe,Gi as M,Ha as se,Jr as ce,Ki as N,Kr as P,N as le,P as F,Ua as ue,Ur as de,aa as I,br as fe,ca as pe,da as me,fa as he,la as ge,oa as _e,qr as ve,sa as ye,ua as be,xr as xe,zi as Se}from"./es-LELdnrjB.js";import{m as Ce}from"./format-BuuIRQbq.js";import{i as we,n as Te,r as Ee,t as De}from"./messageModal-rsIDYNC4.js";var L,Oe=e((()=>{A(),L=x(({css:e,cssVar:t})=>e`
    position: relative;

    height: 100%;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    line-height: 1.8;
  `)})),ke,R,Ae,je=e((()=>{a(),f(),o(),_(),_e(),N(),ce(),Oe(),ke=t(i(),1),R=t(r(),1),A(),P(),Ae=(0,ke.memo)(({text:e,variant:t=`borderless`,onCancel:n,defaultValue:r,onConfirm:i,renderButtons:a,placeholder:o,styles:c,style:d,editButtonSize:f=`middle`,classNames:p,shortcut:h,language:g=`markdown`,..._})=>{let{mobile:v}=b(),[y,x]=(0,ke.useState)(r||``),S=m([l.Mod,l.Enter]),C=e?.confirm||`Confirm`,w=m([l.Esc]),T=e?.cancel||`Cancel`,E=()=>i?.(y),D=()=>n?.();de(S,E,{enableOnFormTags:!0,enabled:h,preventDefault:!0});let k=(0,R.jsx)(I,{size:f,type:`primary`,onClick:E,children:C}),A=(0,R.jsx)(I,{size:f,variant:`filled`,onClick:D,children:e?.cancel||`Cancel`});return(0,R.jsxs)(u,{gap:16,style:{flex:1,width:`100%`,...d},..._,children:[v?(0,R.jsx)(ve,{autoSize:!0,className:O(L,p?.editor),placeholder:o,style:c?.editor,value:y,variant:t,onBlur:e=>x(e.target.value),onChange:e=>x(e.target.value)}):(0,R.jsx)(M,{className:O(L,p?.editor),classNames:p,language:g,placeholder:o,style:c?.editor,styles:c,value:y,variant:t,onBlur:e=>x(e.target.value),onValueChange:e=>x(e)}),(0,R.jsx)(u,{direction:`horizontal-reverse`,gap:8,children:a?a(y).map((e,t)=>(0,R.jsx)(I,{size:f,...e},t)):(0,R.jsxs)(R.Fragment,{children:[h?(0,R.jsx)(s,{hotkey:S,title:C,children:k}):k,h?(0,R.jsx)(s,{hotkey:w,title:T,children:A}):A]})})]})})})),Me,z,Ne,Pe=e((()=>{a(),_e(),N(),h(),ce(),xe(),F(),Oe(),De(),Me=t(i(),1),z=t(r(),1),A(),k(),Ne=(0,Me.memo)(({panelRef:e,editing:t,open:n,height:r=`75vh`,onOpenChange:i,onEditingChange:a,placeholder:o,value:s,language:c=`markdown`,onChange:l,text:d,footer:f,extra:p})=>{let{mobile:m}=b(),{t:h}=g(Te),[_,v]=E(!1,{onChange:a,value:t}),[y,x]=E(!1,{onChange:i,value:n}),[S,C]=(0,Me.useState)(s),w=d?.confirm??h(`messageModal.confirm`),T=d?.cancel??h(`messageModal.cancel`),D=d?.edit??h(`messageModal.edit`);return(0,z.jsx)(fe,{allowFullscreen:!0,destroyOnHidden:!0,cancelText:T,footer:_?(0,z.jsxs)(u,{direction:`horizontal-reverse`,gap:8,children:[(0,z.jsx)(I,{type:`primary`,onClick:()=>{v(!1),l?.(S),C(s)},children:w}),(0,z.jsx)(I,{onClick:()=>{v(!1),C(s)},children:T})]}):f,height:r,okText:D,open:y,panelRef:e,title:d?.title,onOk:()=>v(!0),onCancel:()=>{x(!1),v(!1),C(s)},children:_?m?(0,z.jsx)(ve,{autoSize:!0,className:L,defaultValue:S,placeholder:o,value:S,variant:`borderless`,onBlur:e=>C(e.target.value),onChange:e=>C(e.target.value)}):(0,z.jsx)(M,{className:L,defaultValue:S,language:c,placeholder:o,value:S,variant:`borderless`,onBlur:e=>C(e.target.value),onValueChange:e=>C(e)}):(0,z.jsxs)(z.Fragment,{children:[p,(0,z.jsx)(le,{variant:`chat`,children:String(s||o)})]})})}),Ne.displayName=`MessageModal`})),Fe,B,V,Ie=e((()=>{F(),je(),Pe(),Fe=t(i(),1),B=t(r(),1),A(),k(),V=(0,Fe.memo)(({value:e,onChange:t,classNames:n={},onEditingChange:r,editing:i,openModal:a,onOpenChange:o,placeholder:s,showEditWhenEmpty:c=!1,styles:l,className:u,style:d,height:f,variant:p,editButtonSize:m,text:h,fullFeaturedCodeBlock:g,model:_,fontSize:v,language:y=`markdown`,markdownProps:b})=>{let[x,S]=E(!1,{onChange:r,value:i}),[C,w]=E(!1,{onChange:o,value:a}),T=f===`auto`,D=(0,B.jsx)(Ae,{shortcut:!0,className:O(u,n?.input),classNames:n,defaultValue:e,editButtonSize:m,height:f,language:y,placeholder:s,styles:l,text:h,variant:p,style:{...d,...l?.input},onCancel:()=>S(!1),onConfirm:e=>{t?.(e),S(!1)}});return!e&&c?D:(0,B.jsxs)(B.Fragment,{children:[!C&&x?D:(0,B.jsx)(le,{className:O(u,n?.markdown),fontSize:v,fullFeaturedCodeBlock:g,variant:`chat`,style:{height:T?`unset`:f,...d,...l?.markdown},...b,children:e||s||``}),C&&(0,B.jsx)(Ne,{editing:x,extra:_?.extra,footer:_?.footer,height:f,language:y,open:C,placeholder:s,text:h,value:e,onChange:t,onEditingChange:S,onOpenChange:e=>{w(e),S(!1)}})]})}),V.displayName=`EditableMessage`})),H,U=e((()=>{A(),H=x(({css:e,cssVar:t})=>{let n=e`
    padding-block: 8px;
    padding-inline: 12px;
    border: 1px solid color-mix(in srgb, ${t.colorBorderSecondary} 66%, transparent);
    border-radius: ${t.borderRadiusLG};

    background-color: ${t.colorBgContainer};
  `,r=e`
    padding-block-start: 0;
  `,i=e`
    padding-block-start: 6px;
  `,a=e`
    margin-block-end: -16px;
    transition: background-color 100ms ${t.motionEaseOut};
  `,o=e`
    width: 100%;
  `;return{actionsBubbleLeft:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-end;
    `,actionsBubbleRight:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,actionsDocsLeft:e`
      flex: none;
      align-self: flex-start;
      justify-content: flex-end;
    `,actionsDocsRight:e`
      flex: none;
      align-self: flex-end;
      justify-content: flex-start;
    `,actionsEditing:e`
      pointer-events: none !important;
      opacity: 0 !important;
    `,avatarContainer:e`
      position: relative;
      flex: none;
      width: var(--chat-item-avatar-size, 40px);
      height: var(--chat-item-avatar-size, 40px);
    `,avatarGroupContainer:e`
      width: var(--chat-item-avatar-size, 40px);
    `,container:e`
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has([data-popup-open]),
      div[role='menubar'][data-popup-open] {
        pointer-events: unset !important;
        opacity: 1 !important;

        [data-popup-open] {
          background: ${t.colorFillTertiary};
        }
      }

      ${T.sm} {
        padding-block-start: 12px;
        padding-inline: 8px;
      }
    `,containerDocs:e`
      ${a}
      position: relative;

      width: 100%;
      max-width: 100vw;
      padding-block: 24px 12px;
      padding-inline: 12px;

      time {
        display: inline-block;
        white-space: nowrap;
      }

      div[role='menubar'] {
        display: flex;
      }

      time,
      div[role='menubar'] {
        pointer-events: none;
        opacity: 0;
        transition: opacity 200ms ${t.motionEaseOut};
      }

      &:hover {
        time,
        div[role='menubar'] {
          pointer-events: unset;
          opacity: 1;
        }
      }

      div[role='menubar']:has(.lobe-dropdown-menu-trigger[data-popup-open]) {
        pointer-events: unset;
        opacity: 1;
      }

      ${T.sm} {
        padding-block-start: 16px;
        padding-inline: 8px;
      }
    `,editingContainer:e`
      ${o}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,editingContainerDocs:e`
      ${o}
      padding-block: 8px 12px;
      padding-inline: 12px;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadius};

      background: ${t.colorFillQuaternary};

      &:active,
      &:hover {
        border-color: ${t.colorBorder};
      }
    `,editingInput:e`
      width: 100%;
    `,errorContainer:e`
      position: relative;
      overflow: hidden;
      width: 100%;
    `,loadingLeft:e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-start: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,loadingRight:e`
      position: absolute;
      inset-block-end: 0;
      inset-inline-end: -4px;

      width: 16px;
      height: 16px;
      border-radius: 50%;

      color: ${t.colorBgLayout};

      background: ${t.colorPrimary};
    `,messageBubble:e`
      ${n}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${T.sm} {
        width: 100%;
      }
    `,messageContainer:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${T.sm} {
        overflow-x: auto;
      }
    `,messageContainerEditing:e`
      ${o}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${T.sm} {
        overflow-x: auto;
      }
    `,messageContainerEditingWithTime:e`
      ${o}
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${T.sm} {
        overflow-x: auto;
      }
    `,messageContainerWithTime:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-block-start: -16px;

      ${T.sm} {
        overflow-x: auto;
      }
    `,messageContent:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${T.sm} {
        flex-direction: column !important;
      }
    `,messageContentEditing:e`
      ${o}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${T.sm} {
        flex-direction: column !important;
      }
    `,messageDocsWithTitle:e`
      ${r}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${T.sm} {
        width: 100%;
      }
    `,messageDocsWithoutTitle:e`
      ${i}
      position: relative;
      overflow: hidden;
      max-width: 100%;

      ${T.sm} {
        width: 100%;
      }
    `,messageExtra:e`
      /* message-extra class */
    `,nameLeft:e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: start;
    `,nameRight:e`
      pointer-events: none;

      margin-block-end: 6px;

      font-size: 12px;
      line-height: 1;
      color: ${t.colorTextDescription};
      text-align: end;
    `}})})),Le,Re,ze,Be=e((()=>{a(),U(),Le=t(i(),1),Re=t(r(),1),A(),ze=({actions:e,placement:t=`left`,variant:n=`bubble`,editing:r,ref:i})=>(0,Re.jsx)(u,{align:`flex-start`,className:O((0,Le.useMemo)(()=>n===`bubble`?t===`left`?H.actionsBubbleLeft:H.actionsBubbleRight:t===`left`?H.actionsDocsLeft:H.actionsDocsRight,[t,n]),r&&H.actionsEditing),ref:i,role:`menubar`,children:e})})),Ve,He,Ue=e((()=>{a(),d(),U(),Ve=t(r(),1),j(),He=({loading:e,placement:t=`left`})=>e?(0,Ve.jsx)(u,{align:`center`,className:t===`left`?H.loadingLeft:H.loadingRight,justify:`center`,children:(0,Ve.jsx)(c,{spin:!0,icon:ne,size:{size:12,strokeWidth:3}})}):null})),We,W,Ge,Ke=e((()=>{a(),pe(),U(),Ue(),We=t(i(),1),W=t(r(),1),Ge=({loading:e,avatar:t,placement:n,unoptimized:r,addon:i,onClick:a,size:o=40,style:s,alt:c})=>{let l=(0,We.useMemo)(()=>({"--chat-item-avatar-size":`${o}px`}),[o]),d=(0,W.jsxs)(`div`,{className:H.avatarContainer,style:{...l,...s},children:[(0,W.jsx)(ye,{alt:c||t.title,animation:e,avatar:t.avatar,background:t.backgroundColor,size:o,title:t.title,unoptimized:r,onClick:a}),(0,W.jsx)(He,{loading:e,placement:n})]});return i?(0,W.jsxs)(u,{align:`center`,className:H.avatarGroupContainer,gap:8,children:[d,i]}):d}})),qe,Je,Ye=e((()=>{qe=t(r(),1),Je=({borderSpacing:e})=>e?(0,qe.jsx)(`div`,{style:{flex:`none`,width:e}}):null})),Xe,Ze,Qe=e((()=>{a(),be(),U(),Xe=t(r(),1),Ze=({message:e,error:t})=>(0,Xe.jsx)(u,{className:H.errorContainer,children:(0,Xe.jsx)(ge,{showIcon:!0,closable:!1,extra:e,type:`error`,...t})})})),G,$e,et,tt=e((()=>{a(),U(),Ie(),G=t(i(),1),$e=t(r(),1),A(),et=(0,G.memo)(({editing:e,onChange:t,onEditingChange:n,text:r,message:i,placement:a,messageExtra:o,renderMessage:s,variant:c,primary:l,onDoubleClick:d,fontSize:f,markdownProps:p})=>{let{mobile:m}=b(),h=(0,G.useMemo)(()=>c===`bubble`?H.messageBubble:H.messageDocsWithoutTitle,[c]),g=(0,G.useMemo)(()=>c===`docs`?H.editingContainerDocs:H.editingContainer,[c]),_=(0,$e.jsx)(V,{fullFeaturedCodeBlock:!0,classNames:{input:H.editingInput},editButtonSize:`small`,editing:e,fontSize:f,markdownProps:p,openModal:m?e:void 0,text:r,value:i?String(i):``,onChange:t,onEditingChange:n}),v=s?s(_):_;return(0,$e.jsxs)(u,{className:O(h,e&&g),onDoubleClick:d,children:[v,o&&!e?(0,$e.jsx)(`div`,{className:H.messageExtra,children:o}):null]})})})),nt,rt,it=e((()=>{nt=t(n(),1),rt=e=>{let t=(0,nt.default)(),n=(0,nt.default)(e);return n.isSame(t,`day`)?n.format(`HH:mm:ss`):n.isSame(t,`year`)?n.format(`MM-DD HH:mm:ss`):n.format(`YYYY-MM-DD HH:mm:ss`)}})),at,ot,st=e((()=>{a(),U(),it(),at=t(r(),1),ot=({showTitle:e,placement:t=`left`,time:n,avatar:r,titleAddon:i})=>(0,at.jsxs)(u,{align:`center`,className:t===`left`?H.nameLeft:H.nameRight,direction:t===`left`?`horizontal`:`horizontal-reverse`,gap:4,children:[e?r.title||`untitled`:void 0,e?i:void 0,n&&(0,at.jsx)(`time`,{children:rt(n)})]})})),K,q,ct,lt,ut=e((()=>{a(),h(),we(),U(),Be(),Ke(),Ye(),Qe(),tt(),st(),K=t(i(),1),q=t(r(),1),A(),ct=32,lt=(0,K.memo)(({avatarAddon:e,onAvatarClick:t,avatarProps:n,actions:r,className:i,primary:a,loading:o,message:s,placeholderMessage:c,placement:l=`left`,variant:d=`bubble`,avatar:f,error:p,showTitle:m,time:h,editing:_,onChange:v,onEditingChange:y,messageExtra:x,renderMessage:S,text:C,errorMessage:w,onDoubleClick:T,fontSize:E,aboveMessage:D,belowMessage:k,markdownProps:A,actionsWrapWidth:ee=54,showAvatar:te=!0,titleAddon:ne,...re})=>{let{mobile:ie}=b(),{t:ae}=g(Ee),j=ie?ct:n?.size||40,oe=(0,K.useMemo)(()=>({"--chat-item-avatar-size":`${j}px`}),[j]),M=!!h,se=c??ae(`chat.placeholder`),ce=n?.alt||f.title||ae(`chat.avatar`),N=(0,K.useRef)(null),P=(0,K.useRef)(null),[le,F]=(0,K.useState)(d===`bubble`?`horizontal`:`vertical`);(0,K.useEffect)(()=>{if(d===`docs`){F(`vertical`);return}if(!N.current||!P.current)return;let e=new ResizeObserver(()=>{if(!N.current||!P.current)return;let e=P.current.clientWidth,t=N.current.scrollWidth;F(t+ee>e?`vertical`:`horizontal`)});return e.observe(N.current),e.observe(P.current),()=>e.disconnect()},[d,ee]);let ue=O(d===`docs`?H.containerDocs:H.container,i),de=(0,K.useMemo)(()=>_?M?H.messageContainerEditingWithTime:H.messageContainerEditing:M?H.messageContainerWithTime:H.messageContainer,[_,M]),I=(0,K.useMemo)(()=>_?H.messageContentEditing:H.messageContent,[_]);return(0,q.jsxs)(u,{className:ue,direction:l===`left`?`horizontal`:`horizontal-reverse`,gap:ie?6:12,style:oe,...re,children:[te&&(0,q.jsx)(Ge,{...n,addon:e,alt:ce,avatar:f,loading:o,placement:l,size:j,style:{marginTop:m?-12:6,...n?.style},onClick:t}),(0,q.jsxs)(u,{align:l===`left`?`flex-start`:`flex-end`,className:de,ref:P,children:[(0,q.jsx)(ot,{avatar:f,placement:l,showTitle:m,time:h,titleAddon:ne}),D,(0,q.jsxs)(u,{align:l===`left`?`flex-start`:`flex-end`,className:I,"data-layout":le,gap:8,direction:le===`horizontal`?l===`left`?`horizontal`:`horizontal-reverse`:`vertical`,children:[(0,q.jsx)(u,{ref:N,width:`100%`,children:p&&(s===se||!s)?(0,q.jsx)(Ze,{error:p,message:w,placement:l}):(0,q.jsx)(et,{editing:_,fontSize:E,markdownProps:A,message:s,placement:l,primary:a,renderMessage:S,text:C,variant:d,messageExtra:(0,q.jsxs)(q.Fragment,{children:[p&&(0,q.jsx)(Ze,{error:p,message:w,placement:l}),x]}),onChange:v,onDoubleClick:T,onEditingChange:y})}),r&&(0,q.jsx)(ze,{actions:r,editing:_,placement:l,variant:d})]}),k]}),ie&&d===`bubble`&&te&&(0,q.jsx)(Je,{borderSpacing:ct})]})})})),dt,ft,pt=e((()=>{dt=t(i(),1),j(),ft=e=>(0,dt.useMemo)(()=>({copy:{icon:ie,key:`copy`,label:e?.copy||`Copy`},del:{icon:ee,key:`del`,label:e?.delete||`Delete`},divider:{type:`divider`},edit:{icon:ae,key:`edit`,label:e?.edit||`Edit`},regenerate:{icon:re,key:`regenerate`,label:e?.regenerate||`Regenerate`}}),[e])})),mt,ht,gt=e((()=>{he(),pt(),mt=t(r(),1),ht=({text:e,ref:t,...n})=>{let{regenerate:r,edit:i,copy:a,divider:o,del:s}=ft(e);return(0,mt.jsx)(me,{items:[r,i],menu:[i,a,r,o,s],ref:t,...n})}})),J,Y,_t,vt=e((()=>{oe(),ut(),gt(),J=t(i(),1),Y=t(r(),1),S(),_t=(0,J.memo)(e=>{let{renderMessagesExtra:t,showTitle:n,onActionsClick:r,onAvatarsClick:i,onMessageChange:a,variant:o,text:s,renderMessages:c,renderErrorMessages:l,renderActions:u,loading:d,groupNav:f,renderItems:p,showAvatar:m,...h}=e,[g,_]=(0,J.useState)(!1),{message:v}=D.useApp(),y=(0,J.useMemo)(()=>{if(!p||!h?.role)return;let e;if(p?.[h.role]&&(e=p[h.role]),!e&&p?.default&&(e=p.default),e)return e},[p?.[h.role]]),b=(0,J.useCallback)(({editableContent:e,data:t})=>{if(!c||!h?.role)return;let n;if(c?.[h.role]&&(n=c[h.role]),!n&&c?.default&&(n=c.default),n)return(0,Y.jsx)(n,{...t,editableContent:e})},[c?.[h.role]]),x=(0,J.useCallback)(({data:e})=>{if(!t||!h?.role)return;let n;if(t?.[h.role]&&(n=t[h.role]),t?.default&&(n=t.default),n)return(0,Y.jsx)(n,{...e})},[t?.[h.role]]),S=(0,J.useCallback)(({data:e})=>{if(!l||!h?.error?.type)return;let t;if(l?.[h.error.type]&&(t=l[h.error.type].Render),!t&&l?.default&&(t=l.default.Render),t)return(0,Y.jsx)(t,{...e})},[l]),C=(0,J.useCallback)(({data:e})=>{if(!u||!h?.role)return;let t;u?.[h.role]&&(t=u[h.role]),u?.default&&(t=u.default),t||=ht;let n=async(e,t)=>{switch(e.key){case`copy`:await Se(t.content),v.success(s?.copySuccess||`Copy Success`);break;case`edit`:_(!0)}r?.(e,t)};return(0,Y.jsx)(t,{...e,text:s,onActionClick:t=>n?.(t,e)})},[u?.[h.role],s,r]),w=(0,J.useMemo)(()=>{if(!h.error)return;let e=h.error?.message,t={};return h.error.type&&l?.[h.error.type]&&(t=l[h.error.type]?.config),{message:e,...t}},[l,h.error]);return y?(0,Y.jsx)(y,{...e},h.id):(0,Y.jsx)(lt,{actions:(0,Y.jsx)(C,{data:h}),avatar:h.meta,avatarAddon:f,editing:g,error:w,errorMessage:(0,Y.jsx)(S,{data:h}),loading:d,message:h.content,messageExtra:(0,Y.jsx)(x,{data:h}),placement:o===`bubble`&&h.role===`user`?`right`:`left`,primary:h.role===`user`,showAvatar:m,showTitle:n,text:s,time:h.updateAt||h.createAt,variant:o,renderMessage:e=>(0,Y.jsx)(b,{data:h,editableContent:e}),onAvatarClick:i?.(h.role),onChange:e=>a?.(h.id,e),onEditingChange:_,onDoubleClick:e=>{h.id==="default"||h.error||h.role&&[`assistant`,`user`].includes(h.role)&&e.altKey&&_(!0)}})}),_t.displayName=`ChatListItem`})),X,yt,bt=e((()=>{d(),ue(),X=t(r(),1),S(),j(),yt=({enable:e,text:t})=>e?(0,X.jsx)(`div`,{style:{padding:`0 20px`},children:(0,X.jsx)(y,{children:(0,X.jsx)(se,{icon:(0,X.jsx)(c,{icon:te}),children:t||`History Message`})})}):null})),xt,St=e((()=>{A(),xt=x(({css:e})=>({container:e`
      position: relative;
    `}))})),Ct,Z,wt,Tt=e((()=>{vt(),bt(),St(),Ct=t(i(),1),Z=t(r(),1),A(),wt=(0,Ct.memo)(({onActionsClick:e,onAvatarsClick:t,renderMessagesExtra:n,className:r,data:i,variant:a=`bubble`,text:o,showTitle:s,onMessageChange:c,renderMessages:l,renderErrorMessages:u,loadingId:d,renderItems:f,enableHistoryCount:p,renderActions:m,historyCount:h=0,showAvatar:g,..._})=>(0,Z.jsx)(`div`,{className:O(xt.container,r),..._,children:i.map((r,_)=>{let v={loading:d===r.id,onActionsClick:e,onAvatarsClick:t,onMessageChange:c,renderActions:m,renderErrorMessages:u,renderItems:f,renderMessages:l,renderMessagesExtra:n,showAvatar:g,showTitle:s,text:o,variant:a},y=i.length;return(0,Z.jsxs)(Ct.Fragment,{children:[(0,Z.jsx)(yt,{enable:p&&y>h&&h===y-_+1,text:o?.history}),(0,Z.jsx)(_t,{...v,...r})]},r.id)})}))})),Q,Et=e((()=>{A(),Q=x(({css:e,cssVar:t})=>{let n=`var(--loading-dots-size, 8px)`,r=`var(--loading-dots-color, var(--ant-color-primary))`;return{container:e`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
      justify-content: center;

      padding: ${t.paddingXS};
    `,defaultDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: fade-animation 1.2s ease-in-out infinite;

      @keyframes fade-animation {
        0%,
        100% {
          opacity: 0.3;
        }

        50% {
          opacity: 1;
        }
      }
    `,orbitContainer:e`
      position: relative;
      width: calc(${n} * 4);
      height: calc(${n} * 4);
    `,orbitDot:e`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform-origin: calc(${n} * 2) 0;

      width: ${n};
      height: ${n};
      margin-block-start: calc(${n} / -2);
      margin-inline-start: calc(${n} / -2);
      border-radius: 50%;

      background-color: ${r};

      animation: orbit-animation 1.2s linear infinite;

      @keyframes orbit-animation {
        0% {
          transform: rotate(0deg) translateX(calc(${n} * 2));
        }

        100% {
          transform: rotate(360deg) translateX(calc(${n} * 2));
        }
      }
    `,orbitWrapper:e`
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      width: calc(${n} * 5);
      height: calc(${n} * 5);
      padding: ${t.paddingXS};
    `,pulseDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: pulse-animation 1.2s ease-in-out infinite;

      @keyframes pulse-animation {
        0%,
        100% {
          transform: scale(0.8);
          opacity: 0.3;
        }

        50% {
          transform: scale(1.3);
          opacity: 1;
        }
      }
    `,typingDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: typing-animation 1.2s ease-in-out infinite;

      @keyframes typing-animation {
        0%,
        100% {
          transform: scale(0.6);
          opacity: 0.2;
        }

        25% {
          transform: scale(1);
          opacity: 1;
        }

        50%,
        75% {
          transform: scale(0.6);
          opacity: 0.2;
        }
      }
    `,waveDot:e`
      width: ${n};
      height: ${n};
      border-radius: 50%;

      background-color: ${r};

      animation: wave-animation 1.24s ease-in-out infinite;

      @keyframes wave-animation {
        0%,
        100% {
          transform: translateY(0);
        }

        25% {
          transform: translateY(calc(${n} * -1.5));
        }

        50% {
          transform: translateY(0);
        }
      }
    `}})})),Dt,$,Ot,kt=e((()=>{Et(),Dt=t(i(),1),$=t(r(),1),A(),Ot=({size:e=8,color:t,variant:n=`dots`,className:r,style:i})=>{let a=(0,Dt.useMemo)(()=>{let n={"--loading-dots-size":`${e}px`};return t&&(n[`--loading-dots-color`]=t),n},[t,e]),o=()=>{switch(n){case`pulse`:return(0,$.jsx)(`div`,{className:Q.pulseDot,style:{animationDelay:`0s`}});case`wave`:return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:Q.waveDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.waveDot,style:{animationDelay:`0.12s`}}),(0,$.jsx)(`div`,{className:Q.waveDot,style:{animationDelay:`0.24s`}})]});case`orbit`:return(0,$.jsxs)(`div`,{className:Q.orbitContainer,children:[(0,$.jsx)(`div`,{className:Q.orbitDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.orbitDot,style:{animationDelay:`-0.4s`}}),(0,$.jsx)(`div`,{className:Q.orbitDot,style:{animationDelay:`-0.8s`}})]});case`typing`:return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:Q.typingDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.typingDot,style:{animationDelay:`0.15s`}}),(0,$.jsx)(`div`,{className:Q.typingDot,style:{animationDelay:`0.3s`}})]});default:return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:Q.defaultDot,style:{animationDelay:`0s`}}),(0,$.jsx)(`div`,{className:Q.defaultDot,style:{animationDelay:`0.15s`}}),(0,$.jsx)(`div`,{className:Q.defaultDot,style:{animationDelay:`0.3s`}})]})}};return(0,$.jsx)(`div`,{className:O(n===`orbit`?Q.orbitWrapper:Q.container,r),style:{...a,...i},children:o()})},Ot.displayName=`LoadingDots`})),At,jt,Mt,Nt,Pt,Ft=e((()=>{v(),h(),we(),At=t(i(),1),jt=t(r(),1),S(),A(),Mt=t(Ce(),1),Nt=e=>(0,Mt.default)(e).format(`0,0`),Pt=({mode:e=`remained`,maxValue:t,value:n,text:r,showInfo:i,size:a=20,...o})=>{let{t:s}=g(Ee),c=t-n,l=n/t,u=r?.remained??s(`tokenTag.remained`),d=r?.used??s(`tokenTag.used`),f=r?.overload??s(`tokenTag.overload`),m=(0,At.useMemo)(()=>{let e,t;return l<.7?(e=`normal`,t=C.colorText):l<.9?(e=`low`,t=C.colorWarning):(e=`overload`,t=C.colorError),{color:t,type:e}},[l]),h=c>0?[e===`remained`?u:d,Nt(e===`remained`?c:n)].join(` `):f;return(0,jt.jsx)(p,{size:a,title:i?h:void 0,icon:(0,jt.jsx)(w,{percent:l*100,showInfo:!1,size:Number(typeof a==`object`?a?.size||20:a)||20,strokeColor:m.color,type:`circle`}),...o})},Pt.displayName=`TokenTag`})),It=e((()=>{Ie(),Tt(),kt(),Ft()}));export{kt as a,V as c,Ot as i,Ie as l,Pt as n,wt as o,Ft as r,Tt as s,It as t};