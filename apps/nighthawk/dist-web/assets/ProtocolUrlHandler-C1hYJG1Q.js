import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r,l as i,u as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Qr as l}from"./dialog-BebLzVzY.js";import{a as u,c as d,l as f,t as p}from"./es-CVJR_g25.js";import{ii as m,nl as h,x as g}from"../vendor/vendor-icons-C-Y4oLkk.js";import{ct as _,i as v,t as y}from"./base-ui-BAv0gRbN.js";import{Ta as b,t as x}from"./es-LELdnrjB.js";import{Xt as S,br as C,or as ee,zi as te}from"./model-runtime-client-tog6-eyE.js";import{C as w,D as T,E,G as ne,Gt as re,U as ie,Vt as ae,g as oe,nn as se,qt as D,x as ce}from"./serverConfig-CmLVLry1.js";import{i as le,n as ue,o as de,t as fe}from"./ipc-Ds4MIPxw.js";import{T as pe,t as me}from"./selectors-CTRMh8eY.js";import{Gi as he,Kt as ge,Yt as _e,a as O,na as ve,o as ye,t as be,ta as xe}from"./tool-BJJaXV35.js";import{Do as k,Eo as Se,Oo as Ce,ko as we}from"./index-Djd-5Nq9.js";import{n as Te,t as Ee}from"./PluginAvatar-cAnMcj4G.js";import{r as De,t as Oe}from"./discover-B1TeDH2v.js";import{n as ke,t as Ae}from"./KeyValueEditor-B9XE-ssW.js";import{C as je,_ as Me,a as Ne,d as Pe,f as Fe,g as Ie,h as Le,i as Re,m as ze,n as Be,o as Ve,p as He,r as Ue,t as We,v as Ge,w as Ke}from"./MCPInstallProgress-C0rI77bQ.js";import{i as qe,n as Je,r as Ye,t as Xe}from"./Loading-BoFe8O31.js";var Ze,A,j,Qe,$e=e((()=>{p(),Ze=t(s()),A=t(o()),j=u(({css:e})=>({container:e`
    display: inline-flex;
    flex-direction: row;
    gap: var(--dots-loading-gap);
    align-items: center;
  `,dot:e`
    width: var(--dots-loading-size);
    height: var(--dots-loading-size);
    border-radius: 50%;

    background-color: var(--dots-loading-color);

    animation: dots-loading-fade 1.2s ease-in-out infinite;

    @keyframes dots-loading-fade {
      0%,
      100% {
        opacity: 0.3;
      }

      50% {
        opacity: 1;
      }
    }
  `})),Qe=(0,Ze.memo)(({size:e=4,gap:t=3,color:n,className:r,style:i})=>{let a={"--dots-loading-color":n||d.colorTextSecondary,"--dots-loading-gap":`${t}px`,"--dots-loading-size":`${e}px`};return(0,A.jsxs)(`div`,{className:f(j.container,r),style:{...a,...i},children:[(0,A.jsx)(`div`,{className:j.dot,style:{animationDelay:`0s`}}),(0,A.jsx)(`div`,{className:j.dot,style:{animationDelay:`0.15s`}}),(0,A.jsx)(`div`,{className:j.dot,style:{animationDelay:`0.3s`}})]})})})),M,N,P,et,tt,nt,rt=e((()=>{M=t(s()),i(),ue(),N=a(e=>({initialized:!1,popups:[],setPopups:t=>e({initialized:!0,popups:t})})),P=!1,et=()=>{if(P)return;P=!0;let e=typeof window<`u`&&window.electron?.ipcRenderer||null;if(!e)return;let t=N.getState().setPopups;e.on(`topicPopupsChanged`,(e,n)=>{t(n?.popups??[])}),fe().windows.listTopicPopups().then(e=>{t(e??[])}).catch(()=>{})},tt=(e,t)=>e.find(e=>e.topicId===t.topicId?t.groupId?e.scope===`group`&&e.groupId===t.groupId:t.agentId?e.scope===`agent`&&e.agentId===t.agentId:!1:!1),nt=e=>{(0,M.useEffect)(()=>{et()},[]);let t=N(e=>e.popups);return(0,M.useCallback)(async n=>{if(!n)return!1;let r=tt(t,{...e,topicId:n});if(!r)return!1;try{return await fe().windows.focusTopicPopup({identifier:r.identifier}),!0}catch(e){return console.error(`[useFocusTopicPopup] Failed to focus popup window:`,e),!1}},[t,e.agentId,e.groupId])}})),F,it,at=e((()=>{F=t(s()),it=(e,t)=>{let n=(0,F.useRef)(null);return(0,F.useEffect)(()=>{if(!e)return;let t=n.current;t&&t.querySelector(`[data-thread-id="${CSS.escape(e)}"]`)?.scrollIntoView({block:`nearest`})},[e,t]),n}})),I,ot,st=e((()=>{I={Cron:`cron`,Document:`document`,Eval:`eval`,RunTask:`task`},ot=[I.Cron,I.Document,I.Eval,I.RunTask]})),ct,lt,ut,dt=e((()=>{S(),ct=new Map(te.flatMap(({defaultTopicGroupMode:e,type:t})=>e?[[t,e]]:[])),lt=(e,t)=>t?ct.get(t)??e:e,ut=({agentTopicGroupMode:e,agentType:t,globalMode:n})=>e||lt(n,t)})),ft,L,pt=e((()=>{ft=t(s()),w(),T(),oe(),me(),dt(),L=()=>{let e=E(ie.currentAgentHeterogeneousProviderType),t=E(e=>ie.currentAgentConfig(e)?.chatConfig?.topicGroupMode),n=E(e=>e.updateAgentChatConfig),r=ut({agentTopicGroupMode:t,agentType:e,globalMode:ce(pe.topicGroupMode)}),i=(0,ft.useCallback)(async e=>{await n({topicGroupMode:e})},[n]);return(0,ft.useMemo)(()=>({topicGroupMode:r,updateTopicGroupMode:i}),[r,i])}})),mt,ht=e((()=>{w(),T(),ge(),re(),ae(),mt=e=>{let t=E(ne.isInboxAgent),[n,r,i]=_e(e=>[e.activeAgentId,e.activeGroupId,e.useFetchTopics]),a=D(se.topicPageSize),{isValidating:o,data:s}=i(!0,{agentId:n,...e?.excludeStatuses&&e.excludeStatuses.length>0?{excludeStatuses:e.excludeStatuses}:{},...e?.excludeTriggers&&e.excludeTriggers.length>0?{excludeTriggers:e.excludeTriggers}:{},groupId:r,isInbox:r?!1:t,pageSize:a,...e?.sortBy?{sortBy:e.sortBy}:{}});return{isRevalidating:o&&!!s}}})),gt,_t,vt=e((()=>{st(),pt(),ht(),ge(),oe(),me(),gt=[`completed`],_t=()=>{let e=ce(pe.topicIncludeCompleted),t=_e(e=>e.activeGroupId),{topicGroupMode:n}=L();return mt({excludeStatuses:e?void 0:gt,excludeTriggers:ot,sortBy:!t&&n===`byStatus`?`status`:void 0})}})),R,yt,bt,xt=e((()=>{R=t(s()),re(),ae(),yt=[],bt=(e,t)=>{let n=D(se.collapsedTopicGroupKeys(e))??yt,r=D(e=>e.updateSystemStatus);return{expandedKeys:(0,R.useMemo)(()=>t.filter(e=>!n.includes(e)),[t,n]),setExpandedKeys:(0,R.useCallback)(i=>{let a=[...n.filter(e=>!t.includes(e)),...t.filter(e=>!i.includes(e))];r({collapsedTopicGroupKeysByMode:{[e]:a}})},[n,t,e,r])}}})),z,B,V,H,St=e((()=>{x(),y(),p(),g(),z=t(s()),n(),ke(),B=t(o()),V=u(({css:e,cssVar:t})=>({configEditor:e`
    margin-block-start: ${t.marginSM};
  `,configSection:e`
    margin-block-end: ${t.marginLG};
    padding: ${t.paddingSM};
    border-radius: ${t.borderRadius};
  `,configTitle:e`
    display: flex;
    gap: ${t.marginXS};
    align-items: center;

    height: 24px;

    font-weight: 600;
    color: ${t.colorTextHeading};
  `,previewContainer:e`
    padding-inline: ${t.paddingXS};
  `,previewItem:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: ${t.paddingXS};
    padding-inline: 0;

    &:not(:last-child) {
      border-block-end: 1px solid ${t.colorBorderSecondary};
    }
  `,previewLabel:e`
    display: flex;
    gap: ${t.marginXS};
    align-items: center;

    font-size: ${t.fontSizeSM};
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,previewValue:e`
    padding-block: ${t.paddingXXS};
    padding-inline: ${t.paddingXS};
    border-radius: ${t.borderRadiusSM};

    font-family: ${t.fontFamilyCode};
    font-size: ${t.fontSizeSM};
    font-weight: 600;
    color: ${t.colorText};

    background: ${t.colorFillQuaternary};
  `,typeValue:e`
    display: flex;
    gap: ${t.marginXS};
    align-items: center;
  `,urlValue:e`
    max-width: 300px;
    padding-block: ${t.paddingXS};
    padding-inline: ${t.paddingSM};
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadius};

    font-family: ${t.fontFamilyCode};
    font-size: ${t.fontSizeSM};
    font-weight: 500;
    word-break: auto-phrase;

    background: ${t.colorBgElevated};
  `})),H=(0,z.memo)(({schema:e,onConfigUpdate:t})=>{let{t:n}=r(`plugin`),[i,a]=(0,z.useState)(e.config.env||{}),[o,s]=(0,z.useState)(e.config.headers||{});return(0,B.jsxs)(l,{gap:16,children:[(0,B.jsxs)(b,{className:V.configSection,variant:`outlined`,children:[(0,B.jsxs)(`div`,{className:V.configTitle,children:[(0,B.jsx)(h,{size:14}),n(`protocolInstall.install.title`)]}),(0,B.jsxs)(`div`,{className:V.previewContainer,children:[(0,B.jsxs)(`div`,{className:V.previewItem,children:[(0,B.jsx)(`span`,{className:V.previewLabel,children:n(`protocolInstall.config.type.label`)}),(0,B.jsx)(`div`,{className:V.typeValue,children:(0,B.jsx)(v,{className:V.previewValue,children:e.config.type===`stdio`?`STDIO`:`HTTP`})})]}),e.config.type===`http`&&e.config.url&&(0,B.jsxs)(`div`,{className:V.previewItem,children:[(0,B.jsx)(`span`,{className:V.previewLabel,children:n(`protocolInstall.config.url`)}),(0,B.jsx)(`div`,{className:V.urlValue,children:e.config.url})]}),e.config.type===`stdio`&&(0,B.jsxs)(B.Fragment,{children:[e.config.command&&(0,B.jsxs)(`div`,{className:V.previewItem,children:[(0,B.jsx)(`span`,{className:V.previewLabel,children:n(`protocolInstall.config.command`)}),(0,B.jsx)(`span`,{className:V.previewValue,children:e.config.command})]}),e.config.args&&e.config.args.length>0&&(0,B.jsxs)(`div`,{className:V.previewItem,children:[(0,B.jsx)(`span`,{className:V.previewLabel,children:n(`protocolInstall.config.args`)}),(0,B.jsx)(`span`,{className:V.previewValue,children:e.config.args.join(` `)})]})]})]})]}),(0,B.jsxs)(b,{className:V.configSection,variant:`outlined`,children:[(0,B.jsxs)(`div`,{className:V.configTitle,children:[(0,B.jsx)(m,{size:14}),e.config.type===`stdio`?n(`protocolInstall.config.env`):n(`protocolInstall.config.headers`)]}),(0,B.jsxs)(`div`,{className:V.configEditor,children:[e.config.type===`http`&&(0,B.jsx)(Ae,{addButtonText:n(`protocolInstall.config.addHeaders`),style:{border:`none`},value:o,onChange:e=>{s(e),t?.({env:i,headers:e})}}),e.config.type===`stdio`&&(0,B.jsx)(Ae,{addButtonText:n(`protocolInstall.config.addEnv`),style:{border:`none`},value:i,onChange:e=>{a(e),t?.({env:e,headers:o})}})]})]})]})}),H.displayName=`ConfigDisplay`})),U,W,G,Ct=e((()=>{x(),y(),U=t(s()),n(),we(),Te(),qe(),Se(),w(),be(),ye(),St(),W=t(o()),G=(0,U.memo)(({installRequest:e,isMarketplace:t=!1,onComplete:n})=>{let{t:i}=r(`plugin`),[a,o]=(0,U.useState)(!1),{allowed:s}=k(`create_content`),{allowed:u}=k(`edit_own_content`),[d,f]=(0,U.useState)({}),[p]=O(e=>[e.installCustomPlugin]),m=O(e=>e.testMcpConnection),h=E(e=>e.togglePlugin),g=e?.schema?.identifier||``,y=O(he.getMCPConnectionTestState(g)),x=e?.schema,S=x?.config.type===`stdio`;(0,U.useEffect)(()=>{e||(o(!1),f({}))},[e]);let C=(0,U.useCallback)(async()=>{if(!(!s||!u||!e||!x)){o(!0);try{let e={...x.config,env:d.env||x.config.env,headers:d.headers||x.config.headers},t=await m({connection:e,identifier:g,metadata:{avatar:x.icon,description:x.description}});if(!t.success)throw Error(t.error||i(`protocolInstall.messages.connectionTestFailed`));if(!t.manifest)throw Error(i(`protocolInstall.messages.manifestNotFound`));await p({customParams:{avatar:x.icon,description:x.description,mcp:{...e,headers:e.type===`http`?e.headers:void 0}},identifier:x.identifier,manifest:t.manifest,type:`customPlugin`}),await h(x.identifier),c.success(i(`protocolInstall.messages.installSuccess`,{name:x.name})),n?.()}catch(e){console.error(`Plugin installation error:`,e),c.error(i(`protocolInstall.messages.installError`)),o(!1)}}},[e,s,u,x,d,n,p,m,h,i,g]),ee=(0,U.useCallback)(()=>{n?.()},[n]);if(!e||!x)return null;let te=()=>(0,W.jsxs)(l,{gap:8,children:[t?(0,W.jsx)(_,{showIcon:!0,title:i(`protocolInstall.marketplace.unverified.warning`),type:`warning`,variant:`borderless`}):(0,W.jsx)(_,{showIcon:!0,title:i(`protocolInstall.custom.security.description`),type:`warning`,variant:`borderless`}),S&&(0,W.jsx)(_,{showIcon:!0,description:i(`protocolInstall.stdio.commandExecution.description`),title:i(`protocolInstall.stdio.commandExecution.title`),type:`warning`,variant:`borderless`})]}),w=i(t?`protocolInstall.marketplace.title`:`protocolInstall.custom.title`),T=i(S?`protocolInstall.actions.runCommandAndInstall`:t?`protocolInstall.actions.install`:`protocolInstall.actions.installAnyway`);return(0,W.jsx)(Ce,{open:!0,confirmLoading:a||y.loading,okButtonProps:{disabled:!s||!u},okText:T,title:w,width:680,onCancel:ee,onOk:C,children:(0,W.jsxs)(l,{gap:24,children:[te(),(0,W.jsx)(b,{horizontal:!0,gap:16,justify:`space-between`,padding:16,variant:`outlined`,children:(0,W.jsxs)(l,{horizontal:!0,gap:16,children:[(0,W.jsx)(Ee,{avatar:x.icon,size:40}),(0,W.jsxs)(l,{gap:2,children:[(0,W.jsxs)(l,{horizontal:!0,align:`center`,gap:8,children:[x.name,(0,W.jsx)(Ye,{type:`customPlugin`})]}),(0,W.jsx)(v,{style:{fontSize:12},type:`secondary`,children:x.description})]})]})}),(0,W.jsxs)(l,{children:[(0,W.jsx)(H,{schema:x,onConfigUpdate:f}),y.error&&(0,W.jsx)(_,{closable:!0,showIcon:!0,description:y.error,title:i(`protocolInstall.messages.connectionTestFailed`),type:`error`,variant:`filled`})]})]})})}),G.displayName=`CustomPluginInstallModal`})),K,q,J,wt=e((()=>{x(),K=t(s()),Be(),Ge(),Ke(),Ie(),ze(),Fe(),Ve(),Re(),ee(),q=t(o()),J=(0,K.memo)(({data:e,identifier:t})=>{let[n,r]=(0,K.useState)(C.Overview);return(0,q.jsx)(je,{config:e,children:(0,q.jsxs)(l,{gap:16,children:[(0,q.jsx)(Le,{inModal:!0}),(0,q.jsx)(We,{identifier:t}),(0,q.jsx)(He,{inModal:!0,noSettings:!0,activeTab:n,setActiveTab:r}),(0,q.jsxs)(l,{gap:24,children:[n===C.Overview&&(0,q.jsx)(Pe,{inModal:!0}),n===C.Deployment&&(0,q.jsx)(Me,{}),n===C.Schema&&(0,q.jsx)(Ne,{}),n===C.Score&&(0,q.jsx)(Ue,{})]})]})})}),J.displayName=`OfficialDetail`})),Y,X,Tt,Et=e((()=>{x(),y(),Y=t(s()),n(),we(),Je(),Se(),w(),Oe(),be(),xe(),wt(),X=t(o()),Tt=(0,Y.memo)(({installRequest:e,onComplete:t})=>{let{t:n}=r([`plugin`,`common`]),[i,a]=(0,Y.useState)(!1),{allowed:o}=k(`create_content`),{allowed:s}=k(`edit_own_content`),l=De(e=>e.useFetchMcpDetail),u=e?.pluginId||``,[d,f]=O(e=>[ve.isPluginInstalled(u)(e),e.installMCPPlugin]),p=E(e=>e.togglePlugin),{data:m,isLoading:h}=l({identifier:u}),g=(0,Y.useCallback)(async()=>{if(!(!o||!s||!e||!m)){a(!0);try{a(!0),await f(u),await p(u),a(!1),c.success(n(`protocolInstall.messages.installSuccess`,{name:m.name})),t()}catch(e){console.error(`Official plugin installation error:`,e),c.error(n(`protocolInstall.messages.installError`)),a(!1)}}},[o,s,e,m,f,u,p,n,t]);return e?(0,X.jsx)(Ce,{open:!0,confirmLoading:i,title:n(`protocolInstall.official.title`),width:800,okButtonProps:{disabled:d||h||!o||!s,type:d?`default`:`primary`},okText:n(d?`protocolInstall.actions.installed`:`protocolInstall.actions.install`),onCancel:t,onOk:g,children:h||!u?(0,X.jsx)(Xe,{}):m?(0,X.jsx)(J,{data:m,identifier:u}):(0,X.jsx)(b,{children:(0,X.jsx)(v,{type:`danger`,children:n(`protocolInstall.messages.manifestError`)})})}):null}),Tt.displayName=`OfficialPluginInstallModal`})),Z,Dt=e((()=>{Z=function(e){return e.CUSTOM=`custom`,e.MARKETPLACE=`marketplace`,e.OFFICIAL=`official`,e}({})})),Ot,kt,At,Q,jt=e((()=>{Ot=t(s()),Ct(),Et(),Dt(),kt=t(o()),At=e=>{let{marketId:t}=e;return t===`lobehub`?Z.OFFICIAL:t&&t!==`lobehub`?Z.MARKETPLACE:Z.CUSTOM},Q=(0,Ot.memo)(({installRequest:e,onComplete:t})=>{if(!e)return null;let n=At(e);return n===Z.OFFICIAL?(0,kt.jsx)(Tt,{installRequest:e,onComplete:t}):(0,kt.jsx)(G,{installRequest:e,isMarketplace:n===Z.MARKETPLACE,onComplete:t})}),Q.displayName=`PluginInstallConfirmModal`})),$,Mt,Nt,Pt=e((()=>{le(),$=t(s()),jt(),Mt=t(o()),Nt=()=>{let[e,t]=(0,$.useState)(null),n=(0,$.useCallback)(e=>{t(e)},[]),r=(0,$.useCallback)(()=>{t(null)},[]);return de(`mcpInstallRequest`,n),(0,Mt.jsx)(Q,{installRequest:e,onComplete:r})}}));export{vt as a,L as c,rt as d,nt as f,bt as i,at as l,$e as m,Pt as n,_t as o,Qe as p,xt as r,pt as s,Nt as t,it as u};