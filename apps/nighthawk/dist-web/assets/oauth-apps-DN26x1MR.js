import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{B as r,H as i,M as a,P as o}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as s,m as c}from"./agent-Cvv887Je.js";import{cs as l,ls as u}from"./app-const-Bl9rlHwj.js";import{B as d,Hr as f,Qr as p,St as m,bt as h,mr as g,zn as ee}from"./dialog-BebLzVzY.js";import{a as _,y as v}from"../vendor/vendor-react-CBcx1o7d.js";import{Ct as y,a as b,b as x,t as S,xt as C}from"./es-CVJR_g25.js";import{Ep as te,Rt as ne,Sa as re,Sv as ie,Xh as ae,ba as oe,cm as se,x as w}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as ce,P as le,R as ue,c as T,et as de,i as E,t as D}from"./base-ui-BAv0gRbN.js";import{$r as fe,qr as O,t as k,zt as A}from"./es-LELdnrjB.js";import{g as pe,x as me}from"./serverConfig-CmLVLry1.js";import{a as he,s as ge,v as _e,y as j}from"./swrKeys-B4sicPWZ.js";import{c as M,n as N,s as P}from"./client-BE8DoWhQ.js";import{D as ve,T as ye,t as be}from"./selectors-CTRMh8eY.js";import{Do as F,Eo as xe}from"./index-Djd-5Nq9.js";import{n as Se,t as Ce}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as we,t as Te}from"./404-CXTAXPCA.js";import{n as Ee,t as De}from"./SettingHeader-C2vRf8tn.js";import{n as Oe,t as I}from"./AvatarUpload-CWjrutV-.js";var L,R,z,ke=e((()=>{k(),D(),x(),L=t(u()),a(),Oe(),R=t(l()),z=({onSubmit:e})=>{let{t}=o(`auth`),{close:n,setCanDismissByClickOutside:r}=ue(),[i]=C.useForm(),[a,s]=(0,L.useState)(!1),[c,l]=(0,L.useState)(),u=()=>r(!1),d=e=>{let t=new FileReader;t.addEventListener(`load`,()=>{l(t.result),u()}),t.readAsDataURL(e)},f=async t=>{s(!0);try{await e({...t,logoUri:c}),n()}finally{s(!1)}},m={marginBottom:0};return(0,R.jsx)(C,{colon:!1,form:i,layout:`vertical`,onFinish:f,onValuesChange:u,children:(0,R.jsxs)(p,{gap:16,children:[(0,R.jsx)(C.Item,{label:t(`oauthApp.form.logo.label`),style:m,children:(0,R.jsx)(I,{title:t(`oauthApp.form.name.label`),value:c,onUpload:d})}),(0,R.jsx)(C.Item,{label:t(`oauthApp.form.name.label`),name:`name`,rules:[{message:t(`oauthApp.validation.nameRequired`),required:!0}],style:m,children:(0,R.jsx)(fe,{placeholder:t(`oauthApp.form.name.placeholder`)})}),(0,R.jsx)(C.Item,{label:t(`oauthApp.form.description.label`),name:`description`,style:m,children:(0,R.jsx)(O,{placeholder:t(`oauthApp.form.description.placeholder`),rows:3})}),(0,R.jsx)(g,{block:!0,htmlType:`submit`,loading:a,type:`primary`,children:t(`oauthApp.form.submit`)})]})})}})),B,V,Ae=e((()=>{D(),r(),ke(),B=t(l()),V=e=>ce({content:(0,B.jsx)(z,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:i(`oauthApp.form.title`,{ns:`auth`}),width:`min(90vw, 560px)`})})),je,Me=e((()=>{je=e=>null})),H,Ne,U,Pe=e((()=>{D(),x(),S(),w(),a(),H=t(l()),Ne=b(({css:e,cssVar:t})=>({id:e`
    overflow: hidden;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),U=({clientId:e})=>{let{t}=o(`auth`);return(0,H.jsxs)(y,{align:`center`,gap:4,children:[(0,H.jsx)(`span`,{className:Ne.id,children:e}),(0,H.jsx)(h,{icon:se,size:`small`,title:t(`oauthApp.copy.tooltip`),onClick:async()=>{try{await navigator.clipboard.writeText(e),d.success(t(`oauthApp.copy.success`))}catch{d.error(t(`oauthApp.copy.error`))}}})]})}})),W,G,Fe,Ie=e((()=>{k(),D(),x(),W=t(u()),a(),Oe(),G=t(l()),Fe=({canEdit:e,detail:t,onSubmit:n})=>{let{t:r}=o(`auth`),[i]=C.useForm(),[a,s]=(0,W.useState)(!1),[c,l]=(0,W.useState)(!1),[u,d]=(0,W.useState)(t.logoUri??void 0);return(0,G.jsx)(C,{colon:!1,disabled:!e,form:i,initialValues:{description:t.description??``,name:t.name},layout:`vertical`,onFinish:async e=>{l(!0);try{await n({description:e.description,logoUri:u,name:e.name.trim()}),s(!1)}finally{l(!1)}},onValuesChange:()=>s(!0),children:(0,G.jsxs)(p,{gap:16,children:[(0,G.jsx)(C.Item,{label:r(`oauthApp.form.logo.label`),style:{marginBottom:0},children:(0,G.jsx)(I,{title:t.name,value:u,onUpload:e?e=>{let t=new FileReader;t.addEventListener(`load`,()=>{d(t.result),s(!0)}),t.readAsDataURL(e)}:void 0})}),(0,G.jsx)(C.Item,{label:r(`oauthApp.form.name.label`),name:`name`,rules:[{message:r(`oauthApp.validation.nameRequired`),required:!0}],style:{marginBottom:0},children:(0,G.jsx)(fe,{placeholder:r(`oauthApp.form.name.placeholder`)})}),(0,G.jsx)(C.Item,{label:r(`oauthApp.form.description.label`),name:`description`,style:{marginBottom:0},children:(0,G.jsx)(O,{placeholder:r(`oauthApp.form.description.placeholder`),rows:3})}),(0,G.jsx)(p,{horizontal:!0,justify:`flex-end`,children:(0,G.jsx)(g,{disabled:!e||!a,htmlType:`submit`,loading:c,type:`primary`,children:r(`oauthApp.detail.save`)})})]})})}})),Le,K,q,Re,ze=e((()=>{k(),D(),S(),w(),Le=t(u()),a(),Me(),he(),s(),N(),Pe(),Ie(),K=t(l()),q=b(({css:e,cssVar:t})=>({backButton:e`
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: ${t.borderRadius};

    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,card:e`
    padding: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorBgContainer};
  `,dangerCard:e`
    padding: 16px;
    border: 1px solid ${t.colorErrorBorder};
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorBgContainer};
  `,label:e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,row:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `})),Re=({canEdit:e,id:t,onBack:n,onChanged:r})=>{let{t:i}=o(`auth`),{data:a,error:s,isLoading:l,mutate:u}=ge(c.oauthAppById(t),()=>P.oauthApp.getById.query({id:t})),m=a;(0,Le.useEffect)(()=>{(s||!l&&!m)&&n()},[s,l,m,n]);let h=()=>{u(),r()},_=M.oauthApp.update.useMutation({onSuccess:()=>{h(),d.success(i(`oauthApp.detail.saveSuccess`))}}),v=M.oauthApp.setEnabled.useMutation({onSuccess:h}),y=M.oauthApp.delete.useMutation({onSuccess:()=>{r(),n()}});return m?(0,K.jsxs)(p,{gap:20,children:[(0,K.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(`span`,{"aria-label":i(`oauthApp.detail.back`),className:q.backButton,role:`button`,tabIndex:0,onClick:n,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())},children:(0,K.jsx)(f,{icon:ie,size:`small`})}),(0,K.jsx)(E,{strong:!0,style:{fontSize:20},children:m.name}),!m.enabled&&(0,K.jsx)(T,{children:i(`oauthApp.item.disabledTag`)})]}),(0,K.jsx)(`div`,{className:q.card,children:(0,K.jsx)(Fe,{canEdit:e,detail:m,onSubmit:async e=>{await _.mutateAsync({id:t,value:e})}},m.id)}),(0,K.jsxs)(p,{className:q.card,gap:16,children:[(0,K.jsxs)(`div`,{className:q.row,children:[(0,K.jsx)(`span`,{className:q.label,children:i(`oauthApp.detail.clientId`)}),(0,K.jsx)(U,{clientId:m.id})]}),(0,K.jsxs)(`div`,{className:q.row,children:[(0,K.jsx)(`span`,{className:q.label,children:i(`oauthApp.detail.type`)}),(0,K.jsx)(T,{children:i(`oauthApp.type.badge`)})]}),(0,K.jsxs)(`div`,{className:q.row,children:[(0,K.jsx)(`span`,{className:q.label,children:i(`oauthApp.detail.createdAt`)}),(0,K.jsx)(E,{type:`secondary`,children:m.createdAt.toLocaleString()})]}),(0,K.jsxs)(`div`,{className:q.row,children:[(0,K.jsx)(`span`,{className:q.label,children:i(`oauthApp.detail.lastUsedAt`)}),(0,K.jsx)(E,{type:`secondary`,children:m.lastUsedAt?m.lastUsedAt.toLocaleString():i(`oauthApp.detail.neverUsed`)})]}),(0,K.jsxs)(`div`,{className:q.row,children:[(0,K.jsx)(`span`,{className:q.label,children:i(`oauthApp.detail.enabled`)}),(0,K.jsx)(ee,{checked:!!m.enabled,disabled:!e||v.isPending,onChange:e=>v.mutate({enabled:e,id:t})})]})]}),(0,K.jsx)(`div`,{className:q.card,children:(0,K.jsx)(je,{clientId:m.id})}),(0,K.jsxs)(p,{className:q.dangerCard,gap:12,children:[(0,K.jsx)(E,{weight:500,children:i(`oauthApp.detail.dangerZone`)}),(0,K.jsx)(`div`,{className:q.row,children:(0,K.jsx)(g,{danger:!0,disabled:!e,icon:(0,K.jsx)(ne,{size:16}),loading:y.isPending,onClick:()=>le({content:i(`oauthApp.deleteConfirm.content`),okButtonProps:{danger:!0},okText:i(`oauthApp.deleteConfirm.ok`),onOk:async()=>{await y.mutateAsync({id:t})},title:i(`oauthApp.deleteConfirm.title`)}),children:i(`oauthApp.detail.delete`)})})]})]}):(0,K.jsxs)(p,{gap:16,children:[(0,K.jsx)(A,{active:!0,paragraph:{rows:1,width:200},title:!1}),(0,K.jsx)(`div`,{className:q.card,children:(0,K.jsx)(A,{active:!0,paragraph:{rows:4},title:!1})})]})}})),Be,Ve,J,Y,X,He=e((()=>{k(),D(),S(),Be=t(n()),w(),Ve=t(u()),a(),N(),Pe(),J=t(l()),Y=b(({css:e,cssVar:t})=>({chevron:e`
    flex: none;
    color: ${t.colorTextQuaternary};
  `,meta:e`
    font-size: ${t.fontSizeSM};
    color: ${t.colorTextSecondary};
  `,row:e`
    cursor: pointer;

    padding-block: 12px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius};

    transition: background 0.15s ease;

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: -1px;
    }
  `})),X=(0,Ve.memo)(({app:e,canEdit:t,onChanged:n,onDeleted:r,onOpen:i})=>{let{t:a}=o(`auth`),s=M.oauthApp.setEnabled.useMutation({onSuccess:n}),c=M.oauthApp.delete.useMutation({onSuccess:r}),l=()=>le({content:a(`oauthApp.deleteConfirm.content`),okButtonProps:{danger:!0},okText:a(`oauthApp.deleteConfirm.ok`),onOk:async()=>{await c.mutateAsync({id:e.id})},title:a(`oauthApp.deleteConfirm.title`)}),u=e.lastUsedAt?a(`oauthApp.item.lastUsed`,{time:(0,Be.default)(e.lastUsedAt).fromNow()}):a(`oauthApp.list.neverUsed`);return(0,J.jsxs)(p,{horizontal:!0,align:`center`,className:Y.row,gap:12,role:`button`,tabIndex:0,onClick:i,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i())},children:[(0,J.jsx)(de,{avatar:e.logoUri||e.name,shape:`square`,size:36,title:e.name}),(0,J.jsxs)(p,{flex:1,gap:2,style:{minWidth:0},children:[(0,J.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,J.jsx)(E,{ellipsis:!0,weight:500,children:e.name}),!e.enabled&&(0,J.jsx)(T,{children:a(`oauthApp.item.disabledTag`)})]}),(0,J.jsx)(`span`,{style:{alignSelf:`flex-start`},onClick:e=>e.stopPropagation(),children:(0,J.jsx)(U,{clientId:e.id})}),(0,J.jsxs)(`span`,{className:Y.meta,children:[a(`oauthApp.type.deviceFlow`),` · `,u]})]}),t&&(0,J.jsx)(`span`,{style:{flex:`none`},onClick:e=>e.stopPropagation(),children:(0,J.jsx)(m,{items:[e.enabled?{icon:(0,J.jsx)(f,{icon:re}),key:`disable`,label:a(`oauthApp.actions.disable`),onClick:()=>s.mutate({enabled:!1,id:e.id})}:{icon:(0,J.jsx)(f,{icon:oe}),key:`enable`,label:a(`oauthApp.actions.enable`),onClick:()=>s.mutate({enabled:!0,id:e.id})},{danger:!0,icon:(0,J.jsx)(f,{icon:ne}),key:`delete`,label:a(`oauthApp.list.actions.delete`),onClick:l}],children:(0,J.jsx)(h,{icon:te,size:`small`})})}),(0,J.jsx)(f,{className:Y.chevron,icon:ae,size:`small`})]})}),X.displayName=`AppItem`})),Z,Ue,We,Ge=e((()=>{k(),D(),S(),a(),_(),Ce(),he(),s(),N(),ze(),He(),Z=t(l()),Ue=b(({css:e,cssVar:t})=>({listCol:e`
    overflow: hidden;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorBgContainer};
  `})),We=({canEdit:e})=>{let{t}=o(`auth`),n=Se(),r=v(),{data:i,isLoading:a,mutate:s}=ge(c.oauthAppList(),async()=>await P.oauthApp.list.query()),l=()=>s();return r.sub?(0,Z.jsx)(Re,{canEdit:e,id:r.sub,onBack:()=>n(`/settings/oauth-apps`),onChanged:l}):(0,Z.jsx)(p,{className:Ue.listCol,gap:2,padding:4,children:a?(0,Z.jsxs)(p,{gap:12,padding:12,children:[(0,Z.jsx)(A,{paragraph:{rows:2},title:!1}),(0,Z.jsx)(A,{paragraph:{rows:2},title:!1})]}):i?.length?i.map(t=>(0,Z.jsx)(X,{app:t,canEdit:e,onChanged:l,onDeleted:l,onOpen:()=>n(`/settings/oauth-apps/${t.id}`)},t.id)):(0,Z.jsx)(p,{align:`center`,gap:12,paddingBlock:40,children:(0,Z.jsx)(E,{type:`secondary`,children:t(`oauthApp.list.empty`)})})})}})),Q,Ke,qe,$=e((()=>{k(),D(),a(),_(),_e(),we(),Ee(),Ce(),xe(),N(),pe(),be(),Ae(),Ge(),Q=t(l()),Ke=()=>{let{t:e}=o(`auth`),{allowed:t,reason:n}=F(`create_content`),r=j(),{allowed:i}=F(`manage_settings`),a=t&&(!r||i),s=Se();return(0,Q.jsx)(g,{disabled:!a,title:n,type:`primary`,onClick:()=>{a&&V({onSubmit:async e=>{s(`/settings/oauth-apps/${(await P.oauthApp.create.mutate(e)).id}`)}})},children:e(`oauthApp.list.actions.create`)})},qe=()=>{let{t:e}=o(`auth`),{allowed:t}=F(`create_content`),n=j(),{allowed:r}=F(`manage_settings`),i=v(),a=t&&(!n||r),[s,c]=me(e=>[ye.isPreferenceInit(e),ve.enableOAuthApps(e)]);return s?c?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(De,{extra:!i.sub&&a&&(0,Q.jsx)(Ke,{}),title:e(`tab.oauthApps`)}),(0,Q.jsx)(We,{canEdit:a})]}):(0,Q.jsx)(Te,{}):(0,Q.jsx)(A,{active:!0,paragraph:{rows:5},title:!1})}}));$();export{qe as default,$ as t};