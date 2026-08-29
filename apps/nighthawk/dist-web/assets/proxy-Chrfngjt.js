import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ba as i,La as a,cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Qr as l,mr as u,zn as d}from"./dialog-BebLzVzY.js";import{a as f,b as p,pt as m,t as h,xt as g}from"./es-CVJR_g25.js";import{O as _,d as v,f as y}from"../vendor/vendor-ui-runtime-Dixawc49.js";import{T as ee,t as b}from"./base-ui-BAv0gRbN.js";import{Sr as x,t as S,zt as C}from"./es-LELdnrjB.js";import{Dn as w,On as T,p as E,u as D}from"./serverConfig-CmLVLry1.js";import{n as O,t as k}from"./SettingHeader-C2vRf8tn.js";import{n as A,r as j}from"./anchor-aknb3EC4.js";var M,N,P,F,I=e((()=>{b(),h(),v(),M=t(s()),n(),N=t(o()),P=f(({css:e,cssVar:t})=>({container:e`
    pointer-events: none;

    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,pill:e`
    pointer-events: auto;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    padding-block: 6px;
    padding-inline: 16px 6px;
    border: 1px solid color-mix(in srgb, ${t.colorBorderSecondary} 60%, transparent);
    border-radius: 999px;

    font-size: 13px;
    color: ${t.colorText};

    background: color-mix(in srgb, ${t.colorBgElevated} 85%, transparent);
    backdrop-filter: blur(16px) saturate(1.2);
    box-shadow: ${t.boxShadowSecondary};
  `,dot:e`
    flex-shrink: 0;

    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: ${t.colorWarning};
  `,message:e`
    color: ${t.colorTextSecondary};
  `,resetButton:e`
    height: 28px;
    padding-block: 0;
    padding-inline: 12px;
    border-radius: 999px;

    color: ${t.colorTextSecondary} !important;

    background: transparent;

    &:hover {
      color: ${t.colorText} !important;
      background: ${t.colorFillSecondary} !important;
    }
  `,saveButton:e`
    height: 28px;
    padding-block: 0;
    padding-inline: 14px;
    border-radius: 999px;

    font-weight: 500;
  `})),F=(0,M.memo)(({isDirty:e,isSaving:t,onReset:n,onSave:i})=>{let{t:a}=r(`electron`);return(0,N.jsx)(_,{children:e&&(0,N.jsx)(y.div,{animate:{opacity:1,y:0},"aria-live":`polite`,className:P.container,exit:{opacity:0,y:16},initial:{opacity:0,y:16},role:`status`,transition:{duration:.18,ease:`easeOut`},children:(0,N.jsxs)(`div`,{className:P.pill,children:[(0,N.jsx)(`span`,{className:P.dot}),(0,N.jsx)(`span`,{className:P.message,children:a(`proxy.unsavedChanges`)}),(0,N.jsx)(u,{className:P.resetButton,disabled:t,size:`small`,type:`text`,onClick:n,children:a(`proxy.resetButton`)}),(0,N.jsx)(u,{className:P.saveButton,loading:t,size:`small`,type:`primary`,onClick:i,children:a(`proxy.saveButton`)})]})})})}),F.displayName=`SaveBar`})),L,R,z,B,V=e((()=>{p(),L=t(s()),R=[`enableProxy`,`proxyType`,`proxyServer`,`proxyPort`,`proxyRequireAuth`,`proxyUsername`,`proxyPassword`],z=e=>e??``,B=(e,t)=>{let n=g.useWatch([],e);return{isDirty:(0,L.useMemo)(()=>!t||!n?!1:R.some(e=>z(n[e])!==z(t[e])),[n,t])}}})),H,U,W,G,K,q,J,Y,X,Z,te=e((()=>{S(),b(),p(),H=t(s()),n(),i(),j(),T(),D(),I(),V(),U=t(o()),W=[`http`,`https`,`socks5`],G=/^(?:\d{1,3}\.){3}\d{1,3}$/,K=/^[\dA-Z](?:[\dA-Z-]*[\dA-Z])?(?:\.[\dA-Z](?:[\dA-Z-]*[\dA-Z])?)*$/i,q=e=>typeof e==`object`&&!!e&&`errorFields`in e,J=e=>W.includes(e),Y=e=>G.test(e)||K.test(e),X=e=>{if(!e.enableProxy)return!0;if(!J(e.proxyType))return!1;let t=e.proxyServer?.trim();if(!t||!Y(t))return!1;let n=e.proxyPort?.trim();if(!n)return!1;let r=Number.parseInt(n,10);return Number.isNaN(r)||r<1||r>65535?!1:e.proxyRequireAuth?!!(e.proxyUsername?.trim()&&e.proxyPassword?.trim()):!0},Z=()=>{let{t:e}=r(`electron`),[t]=x.useForm(),[n,i]=(0,H.useState)(`https://www.google.com`),[o,s]=(0,H.useState)(!1),[f,p]=(0,H.useState)(!1),h=g.useWatch(`enableProxy`,t),_=g.useWatch(`proxyRequireAuth`,t),[v,y]=E(e=>[e.setProxySettings,e.useGetProxySettings]),{data:b,isLoading:S}=y(),{isDirty:T}=B(t,b),D=(0,H.useRef)(!1);(0,H.useEffect)(()=>{b&&!D.current&&(t.setFieldsValue(b),D.current=!0)},[t,b]);let O=(0,H.useCallback)(async(t,n)=>{if(!(!h||J(n)))throw Error(e(`proxy.validation.typeRequired`))},[h,e]),k=(0,H.useCallback)(async(t,n)=>{if(!h)return;let r=n?.trim();if(!r)throw Error(e(`proxy.validation.serverRequired`));if(!Y(r))throw Error(e(`proxy.validation.serverInvalid`))},[h,e]),j=(0,H.useCallback)(async(t,n)=>{if(!h)return;let r=n?.trim();if(!r)throw Error(e(`proxy.validation.portRequired`));let i=Number.parseInt(r,10);if(Number.isNaN(i)||i<1||i>65535)throw Error(e(`proxy.validation.portInvalid`))},[h,e]),M=(0,H.useCallback)(async(t,n)=>{if(!(!h||!_||n?.trim()))throw Error(e(`proxy.validation.usernameRequired`))},[h,_,e]),N=(0,H.useCallback)(async(t,n)=>{if(!(!h||!_||n?.trim()))throw Error(e(`proxy.validation.passwordRequired`))},[h,_,e]),P=(0,H.useCallback)((n,r)=>{if(`enableProxy`in n){let i=n.enableProxy;if(i&&!X(r))return;v(i?r:{enableProxy:!1}).catch(n=>{t.setFieldsValue({enableProxy:!i});let r=n instanceof Error?n.message:String(n);c.error(e(`proxy.saveFailed`,{error:r}))})}},[t,v,e]),I=(0,H.useCallback)(async()=>{let n;try{n=await t.validateFields()}catch{return}try{p(!0),await v(n),c.success(e(`proxy.saveSuccess`))}catch(t){let n=t instanceof Error?t.message:String(t);c.error(e(`proxy.saveFailed`,{error:n}))}finally{p(!1)}},[t,v,e]),L=(0,H.useCallback)(()=>{b&&t.setFieldsValue(b)},[t,b]),R=(0,H.useCallback)(async()=>{try{s(!0);let r=await t.validateFields(),i={...b,...r},a=await w.testProxyConfig(i,n);a.success?c.success(e(`proxy.testSuccessWithTime`,{time:a.responseTime})):c.error(`${e(`proxy.testFailed`)}: ${a.message??``}`)}catch(t){if(q(t))return;let n=t instanceof Error?t.message:`Unknown error`;c.error(`${e(`proxy.testFailed`)}: ${n}`)}finally{s(!1)}},[b,n,t,e]);return S?(0,U.jsx)(C,{active:!0,paragraph:{rows:5},title:!1}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(x,{collapsible:!1,form:t,initialValues:b,items:[{children:[{children:(0,U.jsx)(d,{}),desc:e(`proxy.enableDesc`),label:(0,U.jsx)(A,{id:`proxy-enable`,children:e(`proxy.enable`)}),layout:`horizontal`,minWidth:void 0,name:`enableProxy`,valuePropName:`checked`}],title:e(`proxy.enable`)},{children:[{children:(0,U.jsx)(ee,{disabled:!h,options:W.map(e=>({label:e.toUpperCase(),value:e}))}),label:e(`proxy.type`),minWidth:void 0,name:`proxyType`,rules:[{validator:O}]},{children:(0,U.jsx)(m,{disabled:!h,placeholder:`127.0.0.1`}),desc:e(`proxy.validation.serverRequired`),label:e(`proxy.server`),name:`proxyServer`,rules:[{validator:k}]},{children:(0,U.jsx)(m,{disabled:!h,placeholder:`7890`,style:{width:120}}),desc:e(`proxy.validation.portRequired`),label:e(`proxy.port`),name:`proxyPort`,rules:[{validator:j}]}],title:e(`proxy.basicSettings`)},{children:[{children:(0,U.jsx)(d,{disabled:!h}),desc:e(`proxy.authDesc`),label:(0,U.jsx)(A,{id:`proxy-auth`,children:e(`proxy.auth`)}),layout:`horizontal`,minWidth:void 0,name:`proxyRequireAuth`,valuePropName:`checked`},..._&&h?[{children:(0,U.jsx)(m,{placeholder:e(`proxy.username_placeholder`)}),label:e(`proxy.username`),name:`proxyUsername`,rules:[{validator:M}]},{children:(0,U.jsx)(m.Password,{autoComplete:`new-password`,placeholder:e(`proxy.password_placeholder`)}),label:e(`proxy.password`),name:`proxyPassword`,rules:[{validator:N}]}]:[]],title:e(`proxy.authSettings`)},{children:[{children:(0,U.jsxs)(l,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[(0,U.jsx)(m,{placeholder:e(`proxy.testUrlPlaceholder`),style:{flex:1},value:n,onChange:e=>i(e.target.value)}),(0,U.jsx)(u,{loading:o,type:`default`,onClick:R,children:e(`proxy.testButton`)})]}),desc:e(`proxy.testDescription`),label:(0,U.jsx)(A,{id:`proxy-test`,children:e(`proxy.testUrl`)}),minWidth:void 0}],title:e(`proxy.connectionTest`)}],itemsType:`group`,variant:`filled`,onValuesChange:P,...a}),(0,U.jsx)(F,{isDirty:T,isSaving:f,onReset:L,onSave:I})]})}})),Q,$;e((()=>{n(),O(),te(),Q=t(o()),$=()=>{let{t:e}=r(`setting`);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(k,{title:e(`tab.proxy`)}),(0,Q.jsx)(Z,{})]})}}))();export{$ as default};