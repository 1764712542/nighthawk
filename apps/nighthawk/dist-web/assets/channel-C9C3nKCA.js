import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{F as n,M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as a}from"./agent-Cvv887Je.js";import{Fn as o,O as s,cs as c,ls as l}from"./app-const-Bl9rlHwj.js";import{B as u,Hr as d,Qr as f,St as p,bt as m,mr as h,zn as g}from"./dialog-BebLzVzY.js";import{a as _,o as v,v as y,y as ee}from"../vendor/vendor-react-CBcx1o7d.js";import{Z as te,a as b,b as x,f as S,p as ne,t as C,tt as w,xt as T,zt as E}from"./es-CVJR_g25.js";import{Bi as D,Il as O,Mp as re,Mr as ie,Rt as ae,Wt as k,b_ as oe,ea as A,el as se,fa as ce,gt as le,il as j,mf as ue,nt as de,vp as fe,wa as M,wp as pe,wu as me,x as N}from"../vendor/vendor-icons-C-Y4oLkk.js";import{P as he,c as P,ct as F,et as ge,i as _e,t as I,x as ve}from"./base-ui-BAv0gRbN.js";import{Er as ye,Sr as be,Ta as xe,t as L,wr as Se}from"./es-LELdnrjB.js";import{Xt as Ce,bi as we,la as Te}from"./model-runtime-client-tog6-eyE.js";import{C as Ee,D as De,E as Oe,Gn as ke,Kn as Ae,U as je,dt as Me,ft as Ne,g as Pe,x as Fe}from"./serverConfig-CmLVLry1.js";import{a as Ie,s as Le,v as Re,y as ze}from"./swrKeys-B4sicPWZ.js";import{n as Be,t as Ve}from"./ipc-Ds4MIPxw.js";import{D as He,t as Ue}from"./selectors-CTRMh8eY.js";import{s as We,t as Ge}from"./client-J-I4DWNP.js";import{Do as Ke,Eo as qe,Et as Je,Q as Ye,Tt as Xe,Z as Ze}from"./index-Djd-5Nq9.js";import{n as Qe,t as $e}from"./NeuralNetworkLoading-CUDFTjYo.js";import{n as et,t as tt}from"./es-D_vcp-72.js";import{n as nt,t as rt}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as it,r as at,t as ot}from"./const-CVTKAEsA.js";import{n as st,t as ct}from"./useAppOrigin-wMX9xW33.js";import{n as lt,t as ut}from"./InfoTooltip-CvYLM900.js";import{n as dt,t as ft}from"./404-CXTAXPCA.js";import{i as pt,o as mt,t as ht}from"./FormInput-CCNXdelP.js";import{n as gt,t as _t}from"./AsyncBoundary-CzRTtM14.js";import{n as vt,t as yt}from"./ResourceConfigAccessGate-B63c2est.js";import{n as bt,t as xt}from"./AgentBreadcrumb-EU8wI3cb.js";import{n as St,r as Ct,t as wt}from"./AgentProfileTabs-SCozmqWL.js";var R,Tt=e((()=>{R={connected:`connected`,disconnected:`disconnected`,dormant:`dormant`,failed:`failed`,queued:`queued`,starting:`starting`}})),Et,Dt,Ot=e((()=>{Be(),Et=class{getStatus=async()=>Ve().imessageBridge.getStatus();removeConfig=async e=>Ve().imessageBridge.removeConfig({applicationId:e});start=async()=>Ve().imessageBridge.start();stop=async()=>Ve().imessageBridge.stop();testConfig=async e=>Ve().imessageBridge.testConfig(e);upsertConfig=async e=>Ve().imessageBridge.upsertConfig(e)},Dt=new Et})),kt,At,jt=e((()=>{kt=t(l()),At=(0,kt.createContext)(null)})),z,Mt,Nt=e((()=>{s(),L(),I(),x(),C(),N(),z=t(l()),r(),ht(),lt(),Ie(),a(),Ae(),Ot(),jt(),c(),b(({css:e,cssVar:t})=>({card:e`
    margin-block: 8px;
    padding: 20px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgContainer};
  `,fieldIcon:e`
    flex: none;
    color: ${t.colorTextSecondary};
  `,headerIcon:e`
    overflow: hidden;
    flex: none;

    width: 44px;
    height: 44px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,statusCard:e`
    padding: 12px;
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorFillQuaternary};
  `,title:e`
    font-size: 15px;
    font-weight: 600;
  `})),Mt=(0,z.memo)(()=>{let{t:e}=i(`agent`),t=e,n=T.useFormInstance(),r=T.useWatch(`applicationId`,n),a=r?.trim(),o=(0,z.use)(At),{data:s,mutate:c}=Le(null,()=>Dt.getStatus()),l=s?.configs.find(e=>e.applicationId===a),u=l?.enabled??!1,d=l?.blueBubblesPasswordSet??!1;s?.running,s?.serverUrl;let[f,p]=(0,z.useState)(``),[m,h]=(0,z.useState)(!1),[g,_]=(0,z.useState)(``),[v,y]=(0,z.useState)(`idle`),[ee,te]=(0,z.useState)(!1),[b,x]=(0,z.useState)(!1),[S,ne]=(0,z.useState)(null),C=l?.blueBubblesServerUrl;(0,z.useEffect)(()=>{!m&&C&&p(C)},[C,m]);let w=(0,z.useCallback)(async()=>{let e=await ke.getDeviceInfo();n.setFieldValue([`credentials`,`desktopDeviceId`],e.deviceId),n.validateFields([[`credentials`,`desktopDeviceId`]]).catch(()=>void 0)},[n]),E=(0,z.useCallback)(()=>{let e=n.getFieldValue([`credentials`,`webhookSecret`])?.trim();if(e)return e;let t=globalThis.crypto.randomUUID();return n.setFieldValue([`credentials`,`webhookSecret`],t),t},[n]),D=(0,z.useCallback)(e=>{let n=f.trim(),r=g.trim();if(!a)throw Error(t(`channel.imessage.bridgeMissingApplicationId`));if(!n)throw Error(t(`channel.imessage.bridgeMissingServerUrl`));if(!r&&!d)throw Error(t(`channel.imessage.bridgeMissingPassword`));return{applicationId:a,blueBubblesPassword:r||void 0,blueBubblesServerUrl:n,enabled:e,webhookSecret:E()}},[a,f,g,d,E,t]),O=(0,z.useCallback)(async e=>{let t=D(e);await w(),await Dt.upsertConfig(t),_(``),y(`idle`),await c()},[D,w,c]),re=(0,z.useCallback)(async()=>{!f.trim()&&!l||await O(u)},[O,f,l,u]);return(0,z.useEffect)(()=>{},[r,w,E]),(0,z.useEffect)(()=>{},[o,re]),null})})),Pt,Ft,It,Lt=e((()=>{I(),x(),N(),Pt=t(l()),r(),Ee(),Ft=t(c()),It=(0,Pt.memo)(({disabled:e})=>{let{t}=i(`agent`),n=t,r=T.useFormInstance(),a=T.useWatch([`credentials`,`channelAccessToken`],r),[o,s]=(0,Pt.useState)(!1),c=Oe(e=>e.lineFetchBotInfo);return(0,Ft.jsx)(h,{disabled:e||!a?.trim(),icon:(0,Ft.jsx)(re,{size:14}),loading:o,size:`small`,style:{alignSelf:`flex-start`,marginBlockStart:4},type:`default`,onClick:async()=>{if(e)return;let t=a?.trim();if(!t){u.warning(n(`channel.line.fetchBotInfoMissingToken`));return}s(!0);try{let e=await c(t);r.setFieldValue(`applicationId`,e.userId),r.validateFields([`applicationId`]).catch(()=>void 0),u.success(e.displayName?`${n(`channel.line.fetchBotInfoSuccess`)} (${e.displayName})`:n(`channel.line.fetchBotInfoSuccess`))}catch(e){let t=e instanceof Error?e.message:String(e);u.error(`${n(`channel.line.fetchBotInfoFailed`)}: ${t}`)}finally{s(!1)}},children:n(`channel.line.fetchBotInfo`)})})})),B,V,Rt,zt,Bt,Vt,Ht,Ut=e((()=>{tt(),L(),I(),x(),C(),N(),B=t(l()),r(),Qe(),Ne(),V=t(c()),Rt=220,zt=2e3,Bt=240,Vt=b(({css:e,cssVar:t})=>({auth:e`
    align-items: center;
    width: 100%;
  `,error:e`
    align-items: center;
    width: 100%;
  `,qrSlot:e`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: ${Bt}px;
    height: ${Bt}px;
    padding: 9px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillQuaternary};
  `,status:e`
    min-height: 20px;
    font-size: 13px;
    text-align: center;
  `,tips:e`
    max-width: 480px;
    font-size: 13px;
    text-align: center;
  `})),Ht=(0,B.memo)(({buttonType:e=`primary`,disabled:t,onAuthenticated:n,showTips:r=!0})=>{let{t:a}=i(`agent`),[o,s]=(0,B.useState)({stage:`idle`}),c=(0,B.useRef)(!1),l=(0,B.useRef)(null),u=(0,B.useCallback)(()=>{c.current=!1,l.current&&=(clearTimeout(l.current),null)},[]),d=(0,B.useCallback)(async()=>{if(!t){s({stage:`loading`}),u();try{let e=await Me.wechatGetQrCode();s({imageUrl:e.qrcode_img_content,stage:`ready`,status:`wait`}),c.current=!0;let t=async()=>{if(c.current)try{let r=await Me.wechatPollQrStatus(e.qrcode);if(!c.current)return;if(r.status===`confirmed`&&r.bot_token){u(),n({botId:r.ilink_bot_id||``,botToken:r.bot_token,userId:r.ilink_user_id||``});return}if(r.status===`expired`){u(),s({message:a(`channel.wechatQrExpired`),stage:`error`});return}s({imageUrl:e.qrcode_img_content,stage:`ready`,status:r.status}),l.current=setTimeout(t,zt)}catch(e){console.error(e),c.current&&(l.current=setTimeout(t,zt))}};l.current=setTimeout(t,zt)}catch(e){console.error(e),s({message:a(`channel.wechatQrLoadFailed`),stage:`error`})}}},[t,n,u,a]);(0,B.useEffect)(()=>u,[u]);let p=o.stage===`ready`?o.status===`wait`?a(`channel.wechatQrWait`):o.status===`scaned`?a(`channel.wechatQrScaned`):``:``;return(0,V.jsxs)(f,{className:Vt.auth,gap:12,children:[(0,V.jsxs)(`div`,{className:Vt.qrSlot,children:[o.stage===`idle`&&(0,V.jsx)(h,{disabled:t,icon:(0,V.jsx)(ce,{size:16}),type:e,onClick:d,children:a(`channel.wechatGenerateQrCode`)}),o.stage===`loading`&&(0,V.jsx)($e,{size:48}),o.stage===`ready`&&(0,V.jsx)(te,{size:Rt,value:o.imageUrl}),o.stage===`error`&&(0,V.jsxs)(f,{className:Vt.error,gap:12,children:[(0,V.jsx)(F,{showIcon:!0,message:o.message,type:`warning`}),(0,V.jsx)(h,{disabled:t,icon:(0,V.jsx)(A,{size:14}),type:e,onClick:d,children:a(`channel.wechatQrRefresh`)})]})]}),(0,V.jsx)(_e,{className:Vt.status,type:`secondary`,children:p}),r&&(0,V.jsxs)(_e,{className:Vt.tips,type:`secondary`,children:[(0,V.jsx)(et,{style:{marginInlineEnd:4}}),a(`channel.wechatTips`)]})]})}),Ht.displayName=`QrCodeAuth`})),Wt,H,Gt,Kt,qt,Jt=e((()=>{L(),C(),N(),Wt=t(l()),r(),ht(),Ut(),H=t(c()),Gt=b(({css:e,cssVar:t})=>({fieldIcon:e`
    flex: none;
    color: ${t.colorTextSecondary};
  `,header:e`
    display: flex;
    align-items: center;
    margin-block-end: 16px;
  `})),Kt=(0,Wt.memo)(({divider:e,icon:t,label:n,password:r,value:i})=>{let a=r?pt:mt;return(0,H.jsx)(Se,{avatar:(0,H.jsx)(d,{className:Gt.fieldIcon,icon:t,size:20}),divider:e,label:n,minWidth:`max(50%, 400px)`,variant:`outlined`,children:(0,H.jsx)(a,{readOnly:!0,value:i||``})})}),qt=(0,Wt.memo)(({currentConfig:e,disabled:t,onQrAuthenticated:n})=>{let{t:r}=i(`agent`),a=r,o=!!e.applicationId&&e.applicationId!==e.credentials.botId;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{className:Gt.header,children:(0,H.jsxs)(f,{gap:4,children:[(0,H.jsx)(`div`,{style:{fontSize:16,fontWeight:600},children:a(`channel.wechatConnectedInfo`)}),(0,H.jsx)(`div`,{style:{color:`var(--ant-color-text-secondary)`,fontSize:13},children:a(`channel.wechatManagedCredentials`)})]})}),n&&(0,H.jsx)(Ht,{buttonType:`default`,disabled:t,showTips:!1,onAuthenticated:n}),o&&(0,H.jsx)(Kt,{icon:ue,label:a(`channel.applicationId`),value:e.applicationId}),!1]})})})),Yt,Xt,Zt,Qt=e((()=>{Yt=t(l()),Jt(),Ut(),Xt=t(c()),Zt=(0,Yt.memo)(({currentConfig:e,disabled:t,hasConfig:n,onAuthenticated:r})=>{let i=(0,Yt.useCallback)(e=>{let t=e.botToken?.trim();if(!e.botId&&!t)return;let n=e.botId||t?.slice(0,16)||``;r?.({applicationId:n,credentials:{botId:e.botId,botToken:e.botToken,userId:e.userId}})},[r]);return n&&e?(0,Xt.jsx)(qt,{currentConfig:e,disabled:t,onQrAuthenticated:i}):r?(0,Xt.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`16px 0`},children:(0,Xt.jsx)(Ht,{disabled:t,onAuthenticated:i})}):null})})),$t,en,tn=e((()=>{Nt(),Lt(),Qt(),$t={wechat:Zt},en={imessage:Mt,line:It}})),nn,rn,an,on,sn,cn,ln=e((()=>{nn=new Set([`allowFrom`,`groupAllowFrom`]),rn=e=>typeof e==`string`?e.split(/[\s,]+/).map(e=>e.trim()).filter(Boolean).map(e=>({id:e})):Array.isArray(e)?e.map(e=>{if(typeof e==`string`)return{id:e.trim()};if(e&&typeof e==`object`&&`id`in e){let t=String(e.id??``).trim(),n=e.name,r=typeof n==`string`?n:void 0;return r?{id:t,name:r}:{id:t}}return{id:``}}).filter(e=>e.id):[],an=e=>Object.fromEntries(Object.entries(e||{}).map(([e,t])=>[e,nn.has(e)?rn(t):t??void 0])),on=e=>({applicationId:e.applicationId||``,credentials:e.credentials||{},settings:an(e.settings)}),sn=e=>{let t=e?.find(e=>e.key===`settings`);if(!t?.properties)return{};let n={};for(let e of t.properties){if(e.type===`object`&&e.properties){for(let t of e.properties)t.default!==void 0&&(n[t.key]=t.default);continue}e.default!==void 0&&(n[e.key]=e.default)}return n},cn=(e,t)=>({...sn(e),...t})}));function un(e,t){let n=[];return e.required&&n.push({message:t(e.label),required:!0}),e.pattern&&n.push({message:e.patternMessage?t(e.patternMessage):t(e.label),pattern:new RegExp(e.pattern)}),(e.type===`number`||e.type===`integer`)&&(typeof e.minimum==`number`&&n.push({message:`${t(e.label)} ≥ ${e.minimum}`,min:e.minimum,type:`number`}),typeof e.maximum==`number`&&n.push({message:`${t(e.label)} ≤ ${e.maximum}`,max:e.maximum,type:`number`})),n.length>0?n:void 0}function dn(e,t){let n=e.find(e=>e.key===t);return n?.properties?n.properties.filter(e=>!e.devOnly||!1).flatMap(e=>e.type===`object`&&e.properties?e.properties.filter(e=>!e.devOnly||!1):e):[]}var U,W,G,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn=e((()=>{L(),I(),x(),C(),N(),U=t(l()),r(),ht(),lt(),tn(),ln(),W=t(c()),G=`ant`,fn=b(({css:e,cssVar:t})=>({advancedGroup:e`
    border-block-start: 1px solid ${t.colorBorderSecondary};
    border-radius: 0 !important;

    .${G}-collapse-item {
      border-radius: 0 !important;
    }

    .${G}-collapse-header {
      align-items: center !important;

      margin-inline: -16px;
      padding-block: 10px !important;
      padding-inline: 16px !important;
      border-block-end: 0 !important;

      color: ${t.colorTextSecondary} !important;

      transition: background-color ${t.motionDurationFast} ${t.motionEaseInOut};

      &:hover {
        background: ${t.colorBgTextHover};
      }
    }

    .${G}-collapse-expand-icon {
      align-self: center;
      color: ${t.colorTextSecondary} !important;
    }

    .${G}-collapse-title {
      display: flex;
      flex: 1 !important;
      align-items: center;
    }

    .${G}-collapse-content-box {
      padding-inline: 0 !important;
    }
  `,advancedTitle:e`
    font-size: 13px;
    font-weight: 400;
    line-height: 1.4;
    color: ${t.colorTextSecondary};
  `,container:e`
    overflow: hidden;
    gap: 0;
    width: 100%;
    padding-inline: 16px;
  `,fieldIcon:e`
    flex: none;
    align-self: center;
    color: ${t.colorTextSecondary};
  `,form:e`
    .${G}-form-item-label {
      display: flex;
      align-items: center;
    }

    .${G}-form-item-label > label {
      align-items: center;
      width: 100%;
    }

    .${G}-form-item-required::before {
      align-self: center !important;
    }

    .${G}-form-item-control {
      flex: 0 0 50% !important;
      width: 50%;
    }
  `})),pn=(e,t)=>{let n=e.tooltip;return!n&&!e.devOnly&&!e.paidFeature?t(e.label):(0,W.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[t(e.label),n&&(0,W.jsx)(ut,{size:`small`,title:t(n)}),e.paidFeature&&(0,W.jsx)(P,{color:`gold`,size:`small`,children:t(`channel.paidFeature.badge`)}),e.devOnly&&(0,W.jsx)(P,{color:`gold`,children:`Dev Only`})]})},mn=e=>{let t=e.key.toLowerCase();return/key|password|secret|token/.test(t)?O:t.includes(`url`)?j:t.endsWith(`id`)||t.includes(`identifier`)?ue:e.type===`array`?de:e.type===`boolean`?k:e.enum?se:e.type===`number`||e.type===`integer`?me:ie},hn=e=>(0,W.jsx)(d,{className:fn.fieldIcon,icon:mn(e),size:20}),gn=(0,U.memo)(({field:e,parentKey:t,divider:n,disabled:r,featureLocked:a})=>{let{t:o}=i(`agent`),s=o,c=r||a,l=T.useWatch(e.visibleWhen?[t,e.visibleWhen.field]:[]);if(e.visibleWhen&&l!==e.visibleWhen.value)return null;let u=pn(e,s);if(e.type===`array`&&e.items?.type===`object`)return(0,W.jsx)(_n,{disabled:r,divider:n,featureLocked:a,field:e,icon:hn(e),label:u,parentKey:t});let d;switch(e.type){case`password`:d=(0,W.jsx)(pt,{autoComplete:`new-password`,disabled:c,placeholder:e.placeholder?s(e.placeholder):void 0});break;case`boolean`:d=(0,W.jsx)(g,{disabled:c});break;case`number`:case`integer`:d=(0,W.jsx)(E,{disabled:c,max:e.maximum,min:e.minimum,placeholder:e.placeholder?s(e.placeholder):void 0,style:{width:`100%`}});break;case`string`:if(e.enum){let t=e.enumDescriptions?.some(Boolean);d=(0,W.jsx)(ve,{disabled:c,options:e.enum.map((t,n)=>({description:e.enumDescriptions?.[n]?s(e.enumDescriptions[n]):void 0,label:e.enumLabels?.[n]?s(e.enumLabels[n]):t,value:t})),placeholder:e.placeholder?s(e.placeholder):void 0,optionRender:t?e=>{let t=e;return(0,W.jsxs)(f,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,W.jsx)(`span`,{children:t.label}),t.description&&(0,W.jsx)(_e,{fontSize:12,type:`secondary`,children:t.description})]})}:void 0})}else d=(0,W.jsx)(mt,{disabled:c,placeholder:e.placeholder?s(e.placeholder):s(e.label)});break;default:d=(0,W.jsx)(mt,{disabled:c,placeholder:e.placeholder?s(e.placeholder):s(e.label)})}return(0,W.jsx)(Se,{avatar:hn(e),divider:n,initialValue:e.default,label:u,minWidth:`max(50%, 400px)`,name:[t,e.key],rules:un(e,s),valuePropName:e.type===`boolean`?`checked`:void 0,variant:`outlined`,children:d})}),_n=(0,U.memo)(({field:e,parentKey:t,divider:n,icon:r,label:a,disabled:o,featureLocked:s})=>{let{t:c}=i(`agent`),l=c,u=o||s,d=e.items?.type===`object`?e.items.properties??[]:[],p=l(`${e.label}Add`),m=l(`${e.label}Empty`),g=l(`channel.allowListRemove`);return(0,W.jsx)(Se,{avatar:r,divider:n,label:a,minWidth:`max(50%, 400px)`,variant:`outlined`,children:(0,W.jsx)(T.List,{initialValue:e.default,name:[t,e.key],children:(e,{add:t,remove:n})=>(0,W.jsxs)(f,{gap:8,style:{width:`100%`},children:[e.length===0&&(0,W.jsx)(f,{style:{fontSize:12,opacity:.6,paddingBlock:4},children:m}),e.map(({key:e,name:t})=>(0,W.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[d.map(e=>(0,W.jsx)(`div`,{style:{flex:1,minWidth:0},children:(0,W.jsx)(T.Item,{noStyle:!0,name:[t,e.key],rules:e.required?[{message:l(e.label),required:!0,whitespace:!0}]:void 0,children:(0,W.jsx)(mt,{disabled:u,placeholder:e.placeholder?l(e.placeholder):l(e.label)})})},e.key)),(0,W.jsx)(h,{"aria-label":g,disabled:o,icon:(0,W.jsx)(ae,{size:14}),type:`text`,onClick:()=>n(t)})]},e)),s&&(0,W.jsx)(f,{style:{fontSize:12,opacity:.6,paddingBlock:4},children:l(`channel.paidFeature.fieldLocked`)}),(0,W.jsx)(h,{block:!0,disabled:u,icon:(0,W.jsx)(M,{size:14}),type:`dashed`,onClick:()=>t({id:``,name:``}),children:p})]})})})}),vn=(0,U.memo)(({field:e,divider:t,disabled:n})=>{let{t:r}=i(`agent`),a=r;return(0,W.jsx)(Se,{avatar:hn(e),divider:t,initialValue:e.default,label:pn(e,a),minWidth:`max(50%, 400px)`,name:`applicationId`,rules:un(e,a),variant:`outlined`,children:(0,W.jsx)(mt,{disabled:n,placeholder:e.placeholder?a(e.placeholder):a(e.label)})})}),yn=(0,U.memo)(({schema:e})=>{let{t}=i(`agent`),n=t,r=e.find(e=>e.key===`settings`);return r?(0,W.jsx)(_e,{as:`span`,className:fn.advancedTitle,children:n(r.label)}):null}),bn=(0,U.memo)(({platformDef:e,form:t,hasConfig:n,currentConfig:r,onAuthenticated:a,onValuesChange:o,disabled:s})=>{let{t:c}=i(`agent`),l=c,u=$t[e.id],d=en[e.id],f=(0,U.useMemo)(()=>dn(e.schema,`credentials`),[e.schema]),p=(0,U.useMemo)(()=>dn(e.schema,`settings`),[e.schema]),m=(0,U.useMemo)(()=>{if(!n||!p.some(e=>e.key===`userId`))return!1;let e=r?.settings?.userId;return!(typeof e==`string`&&e.trim())},[n,p,r?.settings]),[g,_]=(0,U.useState)(m),v=(0,U.useCallback)(()=>{t.setFieldsValue({settings:sn(e.schema)}),o?.(t.getFieldsValue(!0))},[t,o,e.schema]),y=(0,U.useCallback)(e=>{let t=e.target;t instanceof Element&&t.closest(`.${G}-collapse-header`)&&(t.closest(`.${G}-collapse-extra`)||(e.preventDefault(),e.stopPropagation(),_(e=>!e)))},[]);return(0,W.jsx)(be,{className:fn.form,form:t,gap:0,itemMinWidth:`max(50%, 400px)`,requiredMark:!1,style:{maxWidth:1024,padding:`16px 0`,width:`100%`},variant:`borderless`,onValuesChange:(e,t)=>o?.(t),children:(0,W.jsxs)(xe,{className:fn.container,variant:`outlined`,children:[u?(0,W.jsx)(u,{currentConfig:r,disabled:s,hasConfig:n,onAuthenticated:a}):(0,W.jsxs)(W.Fragment,{children:[e.schema.filter(e=>e.key===`applicationId`||e.key===`credentials`).map((e,t)=>{let n=t>0;return e.key===`applicationId`?(0,W.jsx)(vn,{disabled:s,divider:n,field:e},`applicationId`):(0,W.jsx)(U.Fragment,{children:f.map((e,t)=>(0,W.jsx)(gn,{disabled:s,divider:n||t!==0,field:e,parentKey:`credentials`},e.key))},`credentials`)}),d&&(0,W.jsx)(d,{disabled:s})]}),p.length>0&&(0,W.jsx)(`div`,{onClickCapture:y,children:(0,W.jsx)(ye,{collapsible:!0,active:g,className:fn.advancedGroup,defaultActive:m,keyValue:`settings-${e.id}`,title:(0,W.jsx)(yn,{schema:e.schema}),variant:`borderless`,extra:g?(0,W.jsx)(w,{title:l(`channel.settingsResetConfirm`),onConfirm:s?void 0:v,children:(0,W.jsx)(h,{disabled:s,icon:(0,W.jsx)(D,{size:14}),size:`small`,type:`default`,children:l(`channel.settingsResetDefault`)})}):void 0,onCollapse:_,children:p.map(t=>(0,W.jsx)(gn,{divider:!0,disabled:s,featureLocked:!!t.paidFeature&&e.access?.features?.[t.paidFeature]?.allowed===!1,field:t,parentKey:`settings`},t.key))})})]})})})})),Sn,K,Cn,wn,Tn=e((()=>{L(),I(),x(),C(),N(),Sn=t(l()),r(),ct(),K=t(c()),Cn=b(({css:e,cssVar:t})=>({actionBar:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block-start: 16px;
  `,bottom:e`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    max-width: 1024px;
  `,webhookBox:e`
    overflow: hidden;
    flex: 1;

    height: ${t.controlHeight};
    padding-inline: 12px;
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadius};

    font-family: monospace;
    font-size: 13px;
    line-height: ${t.controlHeight};
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;

    background: ${t.colorFillQuaternary};
  `})),wn=(0,Sn.memo)(({platformDef:e,currentConfig:t,form:r,hasConfig:a,isDirty:o,connectResult:s,connecting:c,disabled:l,saveResult:u,saving:d,testing:p,testResult:m,writeDisabled:g,onSave:_,onDelete:v,onDiscard:y,onTestConnection:ee,onCopied:te})=>{let{t:b}=i(`agent`),x=st(),S=e.id,ne=T.useWatch(`applicationId`,r),C=T.useWatch([`settings`,`connectionMode`],r),w=e.showWebhookUrl||C===`webhook`,E=(0,Sn.useMemo)(()=>e.schema.find(e=>e.key===`settings`)?.properties?.some(e=>e.key===`userId`)??!1,[e.schema]),D=T.useWatch([`settings`,`userId`],r),O=t?.settings?.userId,[re,ie]=(0,Sn.useState)(!1);(0,Sn.useEffect)(()=>{D!==void 0&&ie(!0)},[D]);let k=re?D:O,oe=a&&E&&!(typeof k==`string`&&k.trim()),se=ne?`${x}/api/agent/webhooks/${S}/${ne}`:`${x}/api/agent/webhooks/${S}`;return(0,K.jsxs)(`div`,{className:Cn.bottom,children:[(0,K.jsxs)(`div`,{className:Cn.actionBar,children:[a?(0,K.jsx)(h,{danger:!0,disabled:l||d||c,icon:(0,K.jsx)(ae,{size:16}),type:`primary`,onClick:v,children:b(`channel.removeChannel`)}):(0,K.jsx)(`div`,{}),(0,K.jsxs)(f,{horizontal:!0,gap:12,children:[a&&(0,K.jsx)(h,{disabled:g||d||c,icon:(0,K.jsx)(A,{size:16}),loading:p,onClick:ee,children:b(`channel.testConnection`)}),o&&(0,K.jsx)(h,{disabled:g||d||c,onClick:y,children:b(`channel.discard`)}),(0,K.jsx)(h,{disabled:g,loading:d||c,type:`primary`,onClick:_,children:b(c?`channel.connecting`:`channel.save`)})]})]}),u&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:u.type===`error`?u.errorDetail:void 0,title:u.type===`success`?b(`channel.saved`):b(`channel.saveFailed`),type:u.type}),s&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:s.type===`error`?s.errorDetail:void 0,type:s.type,title:s.title||(s.type===`success`?b(`channel.connectSuccess`):b(`channel.connectFailed`))}),m&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:m.type===`error`?m.errorDetail:void 0,type:m.type,title:m.type===`success`?b(`channel.testSuccess`):b(`channel.testFailed`)}),oe&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:b(`channel.userIdMissingDesc`),message:b(`channel.userIdMissingTitle`),type:`info`}),a&&w&&S===`qq`&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:b(`channel.qq.webhookMigrationDesc`),message:b(`channel.qq.webhookMigrationTitle`),type:`info`}),a&&w&&S===`slack`&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:b(`channel.slack.webhookMigrationDesc`),message:b(`channel.slack.webhookMigrationTitle`),type:`info`}),a&&w&&(S===`feishu`||S===`lark`)&&(0,K.jsx)(F,{closable:!0,showIcon:!0,description:b(`channel.feishu.webhookMigrationDesc`),message:b(`channel.feishu.webhookMigrationTitle`),type:`info`}),a&&w&&(0,K.jsxs)(f,{gap:8,children:[(0,K.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(`span`,{style:{fontWeight:600},children:b(`channel.endpointUrl`)}),(0,K.jsx)(P,{children:`Event Subscription URL`})]}),(0,K.jsxs)(f,{horizontal:!0,gap:8,children:[(0,K.jsx)(`div`,{className:Cn.webhookBox,children:se}),(0,K.jsx)(h,{onClick:()=>{navigator.clipboard.writeText(se),te()},children:b(`channel.copy`)})]}),(0,K.jsx)(F,{showIcon:!0,type:`info`,message:(0,K.jsx)(n,{components:{bold:(0,K.jsx)(`strong`,{})},i18nKey:`channel.endpointUrlHint`,ns:`agent`,values:{fieldName:`Event Subscription URL`,name:e.name}})})]})]})})})),q,J,En,Dn,On,kn=e((()=>{L(),I(),x(),C(),N(),q=t(l()),r(),Re(),rt(),qe(),Ne(),Ee(),Tt(),xn(),Tn(),ln(),jt(),J=t(c()),En=b(({css:e,cssVar:t})=>({content:e`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-block: 16px 24px;
    padding-inline: 24px;
  `,main:e`
    position: relative;

    display: flex;
    flex: none;
    flex-direction: column;

    width: 100%;

    background: ${t.colorBgContainer};
  `})),Dn=e=>Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0)),On=(0,q.memo)(({platformDef:e,agentId:t,currentConfig:n,disabled:r})=>{let{t:a}=i(`agent`),o=nt(),[s]=T.useForm(),{allowed:c}=Ke(`edit_own_content`),l=ze(),d=r||!c,p=e.access?.requiredPlan===`paid`&&e.access.allowed===!1,m=e.access?.rolloutMode??`enforce`,g=l?`workspace`:`personal`,_=d||p,[v,y,ee,te,b]=Oe(e=>[e.createBotProvider,e.deleteBotProvider,e.updateBotProvider,e.connectBot,e.testConnection]),[x,S]=(0,q.useState)(!1),[ne,C]=(0,q.useState)(!1),[w,E]=(0,q.useState)(),[D,O]=(0,q.useState)(),[re,ie]=(0,q.useState)(!1),[ae,k]=(0,q.useState)(),[oe,A]=(0,q.useState)(!1),se=(0,q.useRef)(null),ce=(0,q.useRef)(null),le=(0,q.useMemo)(()=>({register:e=>{ce.current=e}}),[]),j=(0,q.useCallback)(()=>{se.current&&=(clearTimeout(se.current),null)},[]),ue=(0,q.useCallback)((e,t)=>{switch(e.status){case R.connected:return t?.showConnected?{title:a(`channel.connectSuccess`),type:`success`}:void 0;case R.failed:return{errorDetail:e.errorCode?a(`channel.connectionError.${e.errorCode}`,{defaultValue:e.errorMessage||a(`channel.connectFailed`)}):e.errorMessage,title:a(`channel.connectFailed`),type:`error`};case R.queued:return{title:a(`channel.connectQueued`),type:`info`};case R.starting:return{title:a(`channel.connectStarting`),type:`info`};default:return}},[a]),de=(0,q.useCallback)(async(e,t)=>{j();let n=await Me.getRuntimeStatus(e),r=ue(n,{showConnected:t?.showConnected});r?O(r):n.status===R.disconnected&&O(void 0),t?.poll&&(n.status===R.queued||n.status===R.starting)&&(se.current=setTimeout(()=>{de(e,t)},2e3))},[ue,j]),M=(0,q.useCallback)(async n=>{C(!0);try{let{status:r}=await te({agentId:t,applicationId:n,platform:e.id});O({title:a(r===`queued`?`channel.connectQueued`:`channel.connectStarting`),type:`info`}),await de({applicationId:n,platform:e.id},{poll:!0,showConnected:!0})}catch(e){O({errorDetail:e?.message||String(e),type:`error`})}finally{C(!1)}},[t,te,e.id,de,a]);(0,q.useEffect)(()=>{s.resetFields(),E(void 0),O(void 0),k(void 0),j()},[e.id,s,j]),(0,q.useEffect)(()=>{n&&s.setFieldsValue(on(n)),A(!1)},[n,s]),(0,q.useEffect)(()=>{if(!n?.enabled){j(),O(void 0);return}return de({applicationId:n.applicationId,platform:n.platform},{poll:!0,showConnected:!1}),()=>{j()}},[n,j,de]);let pe=(0,q.useCallback)(async()=>{if(!_)try{await s.validateFields();let r=s.getFieldsValue(!0);S(!0),E(void 0),O(void 0);let{applicationId:i,credentials:a={},settings:o={}}=r,c=Object.fromEntries(Object.entries(a).filter(([,e])=>e!==void 0&&e!==``)),l=cn(e.schema,Dn(o)),u=i||``;if(!u&&c.botToken){let e=c.botToken.indexOf(`:`);e!==-1&&(u=c.botToken.slice(0,e))}n?await ee(n.id,t,{applicationId:u,credentials:c,settings:l}):await v({agentId:t,applicationId:u,credentials:c,platform:e.id,settings:l}),await ce.current?.({applicationId:u}),A(!1),E({type:`success`}),setTimeout(()=>E(void 0),3e3),S(!1),await M(u)}catch(e){if(e?.errorFields)return;console.error(e),E({errorDetail:e?.message||String(e),type:`error`}),S(!1)}},[t,e,s,n,v,ee,M,_]),me=(0,q.useCallback)(async r=>{if(!_){S(!0),E(void 0),O(void 0);try{let{applicationId:i,credentials:o}=r,c=cn(e.schema,Dn(s.getFieldValue(`settings`)||{}));n?await ee(n.id,t,{applicationId:i,credentials:o,settings:c}):await v({agentId:t,applicationId:i,credentials:o,platform:e.id,settings:c}),E({type:`success`}),A(!1),u.success(a(`channel.saved`)),await M(i)}catch(e){E({errorDetail:e?.message||String(e),type:`error`})}finally{S(!1)}}},[t,e,s,n,v,ee,M,_,a]),N=(0,q.useCallback)(async()=>{d||n&&he({content:a(`channel.deleteConfirmDesc`),okButtonProps:{danger:!0},onOk:async()=>{try{await y(n.id,t),u.success(a(`channel.removed`)),s.resetFields()}catch{u.error(a(`channel.removeFailed`))}},title:a(`channel.deleteConfirm`)})},[d,n,t,y,a,s]),P=(0,q.useCallback)(async()=>{if(!_){if(!n){u.warning(a(`channel.saveFirstWarning`));return}ie(!0),k(void 0);try{await b({applicationId:n.applicationId,platform:e.id}),k({type:`success`})}catch(e){k({errorDetail:e?.message||String(e),type:`error`})}finally{ie(!1)}}},[_,n,e.id,b,a]),ge=(0,q.useCallback)(()=>{s.resetFields(),n&&s.setFieldsValue(on(n)),A(!1),E(void 0),k(void 0)},[n,s]),_e=(0,q.useCallback)(()=>A(!0),[]),I=(0,q.useCallback)(()=>{o(`/settings/plans`)},[o]);return(0,J.jsx)(At,{value:le,children:(0,J.jsx)(`main`,{className:En.main,children:(0,J.jsxs)(`div`,{className:En.content,children:[p&&(0,J.jsx)(F,{showIcon:!0,style:{marginBlockStart:16,maxWidth:1024,width:`100%`},type:m===`notice`?`warning`:`info`,description:a(`channel.paidFeature.${m}.desc.${g}`,{name:e.name}),message:(0,J.jsxs)(f,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,J.jsx)(`span`,{children:a(`channel.paidFeature.${m}.title`,{name:e.name})}),(0,J.jsx)(h,{icon:(0,J.jsx)(fe,{size:14}),size:`small`,type:`primary`,onClick:I,children:a(`channel.paidFeature.cta.${g}`)})]})}),(0,J.jsx)(bn,{currentConfig:n,disabled:_,form:s,hasConfig:!!n,platformDef:e,onAuthenticated:me,onValuesChange:_e}),(0,J.jsx)(wn,{connectResult:D,connecting:ne,currentConfig:n,disabled:d,form:s,hasConfig:!!n,isDirty:oe,platformDef:e,saveResult:w,saving:x,testResult:ae,testing:re,writeDisabled:_,onCopied:()=>u.success(a(`channel.copied`)),onDelete:N,onDiscard:ge,onSave:pe,onTestConnection:P})]})})})})})),An,jn,Mn,Nn,Pn=e((()=>{C(),An=t(l()),r(),at(),jn=t(c()),Mn=b(({css:e,cssVar:t})=>({desc:e`
    max-width: 360px;

    font-size: 14px;
    line-height: 1.6;
    color: ${t.colorTextSecondary};
    text-align: center;
  `,main:e`
    position: relative;

    display: flex;
    flex: none;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 24px;

    background: ${t.colorBgContainer};
  `,placeholder:e`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1024px;
    padding-block: 48px;
  `,title:e`
    font-size: 18px;
    font-weight: 500;
    color: ${t.colorText};
  `})),Nn=(0,An.memo)(({platformDef:e})=>{let{t}=i(`agent`),n=it(e.name),r=n&&`Color`in n?n.Color:n;return(0,jn.jsx)(`main`,{className:Mn.main,children:(0,jn.jsxs)(`div`,{className:Mn.placeholder,children:[r&&(0,jn.jsx)(r,{size:64}),(0,jn.jsx)(`div`,{className:Mn.title,children:t(`channel.comingSoonTitle`,{name:e.name})}),(0,jn.jsx)(`div`,{className:Mn.desc,children:t(`channel.comingSoonDesc`)})]})})})})),Y,X,Fn,In,Ln=e((()=>{Ge(),L(),I(),N(),Y=t(l()),r(),_(),bt(),Ct(),Ye(),Ee(),Tt(),X=t(c()),Fn={[R.connected]:`success`,[R.dormant]:`warning`,[R.failed]:`error`,[R.queued]:`processing`,[R.starting]:`processing`},In=(0,Y.memo)(({agentId:e,currentConfig:t,disabled:n,platformDef:r,providers:a,runtimeStatus:o})=>{let{t:s}=i([`agent`,`chat`,`common`]),c=(0,Y.useRef)(null),[l,h]=(0,Y.useState)(),[_,y]=(0,Y.useState)(!1),[ee,te]=(0,Y.useState)(!1),[b,x,S,ne,C]=Oe(e=>[e.connectBot,e.createBotProvider,e.deleteAllBotProviders,e.refreshBotRuntimeStatus,e.updateBotProvider]),w=r?.access?.requiredPlan===`paid`&&r.access.allowed===!1,T=n||w,E=n||w&&!t?.enabled,D=l??t?.enabled,O=!!a?.length;(0,Y.useEffect)(()=>{(!t||l===t.enabled)&&h(void 0)},[t,l]);let ie=(0,Y.useCallback)(()=>{a?.length&&We(a.map(({id:e,...t})=>t),`lobehub-channels-${e}.json`)},[e,a]),k=(0,Y.useCallback)(()=>{n||c.current?.click()},[n]),se=(0,Y.useCallback)(async t=>{let r=t.target.files?.[0];if(n||!r){t.target.value=``;return}try{let t=JSON.parse(await r.text());if(!Array.isArray(t)||t.some(e=>!e.platform||!e.applicationId||!e.credentials)){u.error(s(`channel.importInvalidFormat`));return}for(let n of t)await x({agentId:e,applicationId:n.applicationId,credentials:n.credentials,platform:n.platform,settings:n.settings??void 0}),n.enabled&&await b({agentId:e,applicationId:n.applicationId,platform:n.platform});u.success(s(`channel.importSuccess`))}catch{u.error(s(`channel.importFailed`))}finally{t.target.value=``}},[e,b,x,n,s]),ce=(0,Y.useCallback)(()=>{n||!a?.length||he({content:s(`channel.deleteAllConfirmDesc`),okButtonProps:{danger:!0},okText:s(`channel.deleteAllChannels`),onOk:async()=>{try{await S(e),u.success(s(`channel.deleteAllSuccess`))}catch{u.error(s(`channel.deleteAllFailed`))}},title:s(`channel.deleteAllConfirm`)})},[e,S,n,a,s]),j=(0,Y.useCallback)(async()=>{if(!(T||!t?.enabled)){y(!0);try{await ne({agentId:e,applicationId:t.applicationId,platform:t.platform})}catch(e){u.error(e instanceof Error?e.message:String(e))}finally{y(!1)}}},[e,t,ne,T]),ue=(0,Y.useCallback)(async r=>{if(!((r?T:n)||!t))try{h(r),te(!0),await C(t.id,e,{enabled:r}),r&&await b({agentId:e,applicationId:t.applicationId,platform:t.platform})}catch{h(void 0),u.error(s(`channel.updateFailed`))}finally{te(!1)}},[e,b,t,n,s,C,T]),de=(()=>{switch(o){case R.connected:return s(`channel.statusConnected`);case R.failed:return s(`channel.statusFailed`);case R.queued:return s(`channel.statusQueued`);case R.starting:return s(`channel.statusStarting`);case R.dormant:return s(`channel.statusDormant`);case R.disconnected:return s(`channel.statusDisconnected`);default:return}})(),M=[];return r?.documentation?.setupGuideUrl&&M.push({icon:(0,X.jsx)(d,{icon:oe}),key:`docs`,label:s(`channel.documentation`),onClick:()=>window.open(r.documentation?.setupGuideUrl,`_blank`,`noopener,noreferrer`)}),r?.documentation?.portalUrl&&M.push({icon:(0,X.jsx)(d,{icon:fe}),key:`open-platform`,label:s(`channel.openPlatform`),onClick:()=>window.open(r.documentation?.portalUrl,`_blank`,`noopener,noreferrer`)}),M.length>0&&M.push({type:`divider`}),M.push({disabled:!O,icon:(0,X.jsx)(d,{icon:re}),key:`export`,label:s(`channel.exportConfig`),onClick:ie},{disabled:n,icon:(0,X.jsx)(d,{icon:le}),key:`import`,label:s(`channel.importConfig`),onClick:k},{type:`divider`},{danger:!0,disabled:n||!O,icon:(0,X.jsx)(d,{icon:ae}),key:`delete-all`,label:s(`channel.deleteAllChannels`),onClick:ce}),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`input`,{accept:`.json`,ref:c,style:{display:`none`},type:`file`,onChange:se}),(0,X.jsx)(Ze,{style:{position:`relative`},right:(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[r?.comingSoon&&(0,X.jsx)(P,{size:`small`,children:s(`channel.comingSoon`)}),r?.access?.requiredPlan===`paid`&&(0,X.jsx)(P,{color:`gold`,size:`small`,children:r.access.rolloutMode===`notice`?s(`channel.paidFeature.noticeBadge`):s(`channel.paidFeature.badge`)}),de&&(0,X.jsx)(P,{color:o?Fn[o]:void 0,size:`small`,children:de}),t?.enabled&&(0,X.jsx)(m,{disabled:T,icon:A,loading:_,size:`small`,title:s(`channel.refreshStatus`),onClick:j}),t&&(0,X.jsx)(g,{checked:D,disabled:E,loading:ee,onChange:ue}),(0,X.jsx)(p,{items:M,placement:`bottomRight`,children:(0,X.jsx)(m,{icon:pe,title:s(`more`,{ns:`common`})})})]}),left:(0,X.jsx)(xt,{agentId:e,extraItems:r?[r.name]:void 0,title:r?(0,X.jsx)(v,{relative:`path`,to:`..`,children:s(`tab.integration`,{ns:`chat`})}):void 0}),styles:{center:wt,left:{minWidth:0,paddingInlineStart:8}},children:!r&&(0,X.jsx)(St,{active:`channel`,agentId:e})})]})}),In.displayName=`AgentChannelHeader`})),Rn,zn,Z,Q,Bn,Vn=e((()=>{Ce(),L(),I(),C(),Rn=t(Te()),zn=t(l()),r(),o(),Ee(),De(),Tt(),at(),Z=t(c()),Q=b(({css:e,cssVar:t})=>({card:e`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;

    min-height: 104px;
    padding-block: 12px;
    padding-inline: 12px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `,description:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    line-height: 1.5;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    ${S.md} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${S.sm} {
      grid-template-columns: minmax(0, 1fr);
    }
  `,root:e`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding-block: 24px;
    padding-inline: 24px;
  `,statusDot:e`
    flex-shrink: 0;

    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: ${t.colorSuccess};
    box-shadow: 0 0 0 1px ${t.colorBgContainer};
  `,title:e`
    width: 100%;
    margin-block: 0 20px;

    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
    color: ${t.colorText};

    ${S.sm} {
      font-size: 20px;
    }
  `,titleAvatar:e`
    display: inline-flex;
    margin-inline: 6px;
    vertical-align: -6px;
  `,widthLimiter:e`
    width: 100%;
    max-width: 1024px;
  `,titleRow:e`
    width: 100%;
    min-width: 0;
  `,trailing:e`
    flex-shrink: 0;
  `})),Bn=(0,zn.memo)(({agentId:e,platforms:t,onSelect:r,runtimeStatuses:a})=>{let{t:o}=i([`agent`,`common`]),s=ne(),c=Oe(je.getAgentMetaById(e),Rn.default),l=we(c,o(`defaultSession`,{ns:`common`})),u=(e,t)=>{switch(e){case`discord`:return o(`channel.platform.discord.description`);case`feishu`:return o(`channel.platform.feishu.description`);case`imessage`:return o(`channel.platform.imessage.description`);case`lark`:return o(`channel.platform.lark.description`);case`line`:return o(`channel.platform.line.description`);case`qq`:return o(`channel.platform.qq.description`);case`slack`:return o(`channel.platform.slack.description`);case`telegram`:return o(`channel.platform.telegram.description`);case`wechat`:return o(`channel.platform.wechat.description`);case`whatsapp`:return o(`channel.platform.whatsapp.description`);default:return o(`channel.platform.default.description`,{name:t})}},d=e=>{switch(e){case R.connected:return s.colorSuccess;case R.failed:return s.colorError;case R.queued:case R.starting:return s.colorInfo;case R.dormant:return s.colorWarning;case R.disconnected:return s.colorTextQuaternary;default:return}},p=e=>{switch(e){case R.connected:return o(`channel.connectSuccess`);case R.failed:return o(`channel.connectFailed`);case R.queued:return o(`channel.connectQueued`);case R.starting:return o(`channel.connectStarting`);case R.dormant:return o(`channel.statusDormant`);case R.disconnected:return o(`channel.runtimeDisconnected`);default:return}};return(0,Z.jsx)(`section`,{className:Q.root,children:(0,Z.jsxs)(`div`,{className:Q.widthLimiter,children:[(0,Z.jsx)(`h1`,{className:Q.title,children:(0,Z.jsx)(n,{i18nKey:`channel.home.title`,ns:`agent`,values:{name:l},components:{avatar:(0,Z.jsx)(`span`,{className:Q.titleAvatar,children:(0,Z.jsx)(ge,{avatar:c.avatar||`/avatars/agent-default.png`,background:c.backgroundColor,shape:`square`,size:28})})}})}),(0,Z.jsx)(`div`,{className:Q.grid,children:t.map(e=>{let t=it(e.name),n=t&&`Color`in t?t.Color:t,i=e.comingSoon?void 0:a.get(e.id),s=d(i),c=p(i),l=u(e.id,e.name);return(0,Z.jsxs)(xe,{clickable:!0,className:Q.card,variant:`outlined`,onClick:()=>r(e.id),children:[(0,Z.jsxs)(f,{horizontal:!0,align:`center`,className:Q.titleRow,gap:8,children:[n&&(0,Z.jsx)(n,{size:24}),(0,Z.jsx)(_e,{ellipsis:!0,style:{flex:1,minWidth:0},weight:600,children:e.name}),(0,Z.jsxs)(f,{horizontal:!0,align:`center`,className:Q.trailing,gap:4,children:[e.comingSoon&&(0,Z.jsx)(P,{size:`small`,style:{marginInlineEnd:0},children:o(`channel.comingSoon`)}),e.access?.requiredPlan===`paid`&&(0,Z.jsx)(P,{color:`gold`,size:`small`,style:{marginInlineEnd:0},children:e.access.rolloutMode===`notice`?o(`channel.paidFeature.noticeBadge`):o(`channel.paidFeature.badge`)}),i&&(0,Z.jsx)(`div`,{className:Q.statusDot,style:{background:s},title:c})]})]}),(0,Z.jsx)(_e,{className:Q.description,fontSize:12,type:`secondary`,children:l})]},e.id)})})]})})}),Bn.displayName=`PlatformGrid`})),Hn,$,Un,Wn,Gn,Kn=e((()=>{L(),C(),Hn=t(l()),_(),dt(),gt(),Je(),vt(),qe(),Ee(),Pe(),Ue(),Tt(),at(),kn(),Pn(),Ln(),Vn(),$=t(c()),Un=b(({css:e})=>({container:e`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  `})),Wn=(0,Hn.memo)(()=>{let{aid:e,platform:t}=ee(),n=y(),{allowed:r}=Ke(`edit_own_content`),{data:i,isLoading:a,error:o,mutate:s}=Oe(e=>e.useFetchPlatformDefinitions()),{data:c,isLoading:l,error:u,mutate:d}=Oe(t=>t.useFetchBotProviders(e)),p=Oe(e=>e.triggerRefreshAllBotStatuses),m=Fe(He.enableImessage);(0,Hn.useEffect)(()=>{e&&r&&p(e)},[e,r,p]);let h=a||l,g=o??u,_=(i?.length??0)>0&&!u,v=(0,Hn.useMemo)(()=>{let e=m?ot.filter(e=>e.id!==`imessage`):ot,t=new Set(e.map(e=>e.id));return[...(i??[]).filter(e=>!t.has(e.id)),...e]},[i,m]),te=(0,Hn.useMemo)(()=>new Map((c??[]).filter(e=>e.enabled).map(e=>[e.platform,e.runtimeStatus??R.disconnected])),[c]),b=(0,Hn.useMemo)(()=>t?v.find(e=>e.id===t):void 0,[v,t]),x=(0,Hn.useMemo)(()=>c?.find(e=>e.platform===t),[t,c]),S=(0,Hn.useCallback)(e=>n(e,{relative:`path`}),[n]);return e?(0,$.jsxs)(f,{flex:1,height:`100%`,style:{overflow:`hidden`},children:[(0,$.jsx)(In,{agentId:e,currentConfig:x,disabled:!r,platformDef:b,providers:c,runtimeStatus:b?te.get(b.id):void 0}),(0,$.jsx)(f,{flex:1,style:{overflow:`hidden`},children:(0,$.jsx)(_t,{data:_?i:void 0,error:g,errorVariant:`block`,isLoading:h,loading:(0,$.jsx)(Xe,{header:!1,variant:`grid`}),onRetry:()=>{s(),d()},children:t?b?(0,$.jsx)(`div`,{className:Un.container,children:b.comingSoon?(0,$.jsx)(Nn,{platformDef:b}):(0,$.jsx)(On,{agentId:e,currentConfig:x,disabled:!r,platformDef:b})}):(0,$.jsx)(ft,{}):(0,$.jsx)(`div`,{className:Un.container,children:(0,$.jsx)(Bn,{agentId:e,platforms:v,runtimeStatuses:te,onSelect:S})})})})]}):null}),Gn=()=>{let{aid:e}=ee();return(0,$.jsx)(yt,{redirectPath:`/agent/${e??``}`,resourceId:e,resourceType:`agent`,children:(0,$.jsx)(Wn,{})})}}));Kn();export{Gn as default,Kn as t};