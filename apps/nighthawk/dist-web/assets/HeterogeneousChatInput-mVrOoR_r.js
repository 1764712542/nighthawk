import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{B as r,H as i,M as a,P as o,U as s,q as c}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as l,O as u,Va as d,cs as f,fa as p,ls as m}from"./app-const-Bl9rlHwj.js";import{At as h,B as g,Bt as _,Cr as v,Dt as y,Et as b,Ft as x,Hr as S,Ht as C,It as w,Lt as T,Mt as E,Ot as D,Pt as O,Qr as k,Rt as A,St as j,Tt as ee,U as te,Ut as ne,Vt as re,Wt as ie,bt as ae,jt as oe,kt as se,mr as M,xr as ce,zn as le,zt as ue}from"./dialog-BebLzVzY.js";import{a as N,c as P,l as de,t as F}from"./es-CVJR_g25.js";import{Ag as fe,Bi as pe,Bl as I,E as me,Et as he,H_ as ge,Ka as _e,Mc as ve,Mg as ye,O as be,Qh as xe,Rt as Se,Xh as Ce,ea as we,eg as Te,gn as Ee,mi as De,ng as Oe,wa as ke,wd as Ae,wp as je,x as Me}from"../vendor/vendor-icons-C-Y4oLkk.js";import{C as Ne,F as Pe,P as Fe,T as Ie,ct as Le,i as L,t as Re,x as ze}from"./base-ui-BAv0gRbN.js";import{$r as Be,Ui as Ve,t as He,zt as Ue}from"./es-LELdnrjB.js";import{Fi as We,Ii as Ge,Pi as R,Ri as Ke,Ti as qe,Xt as Je,la as Ye}from"./model-runtime-client-tog6-eyE.js";import{C as Xe,D as Ze,E as Qe,F as $e,I as et,R as tt,V as nt,ct as rt,g as it,it as at,p as ot,u as st,vt as ct,x as lt,xt as ut}from"./serverConfig-CmLVLry1.js";import{c as dt,n as ft,s as pt}from"./client-BE8DoWhQ.js";import{b as mt,d as ht,i as gt,j as _t,l as vt,o as yt,x as bt}from"./ipc-Ds4MIPxw.js";import{A as xt,D as St,t as Ct}from"./selectors-CTRMh8eY.js";import{t as wt}from"./src-Cw6BG0HN.js";import{r as Tt}from"./dist-DpadOugs.js";import{Kt as Et,O as Dt,Yt as Ot,k as kt,z as At}from"./tool-BJJaXV35.js";import{_ as jt,g as Mt}from"./selectors-BsEaCsu0.js";import{i as Nt,t as Pt}from"./device-B19F27eC.js";import{n as Ft,t as It}from"./device-1R45EkPN.js";import{Ao as Lt,Do as Rt,Eo as zt,X as Bt,Y as Vt,jo as Ht}from"./index-Djd-5Nq9.js";import{n as Ut,t as Wt}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as Gt,t as Kt}from"./ModelSelect-CuN84mTX.js";import{n as qt,t as Jt}from"./useQueryRoute-BG7cwVFJ.js";import{n as Yt,t as Xt}from"./useEffectiveAgencyConfig-CzyysYkS.js";import{a as Zt,o as Qt}from"./useProjectSkills-B_lHYxEP.js";import{h as $t,m as en}from"./TypoBar-_QPCQENT.js";import{a as tn,n as nn,o as rn,t as an}from"./useAgentId-Bi4gInfP.js";import{H as on,U as sn,V as cn,W as ln,X as un,Z as dn,c as fn,f as pn,l as mn,nt as hn,p as gn,rt as _n}from"./ChatInput-Dtj5KDCe.js";import{n as vn,t as yn}from"./Conversation-B6Z_LIMP.js";import{r as bn,t as xn}from"./heterogeneousAgent-BB6DegWP.js";import{a as Sn,c as Cn,i as wn,l as Tn,o as En,r as Dn,s as On,t as kn,u as An}from"./modelPicker-BwxtuR07.js";import{n as jn,t as z}from"./agentQuota-0BSUTa4J.js";var Mn,Nn,Pn=e((()=>{u(),d(),Jt(),ft(),Xe(),Ze(),Mn=`CLAUDE_CODE_OAUTH_TOKEN`,Nn=e=>{let t=qt(),n=Qe(t=>nt.getAgencyConfigById(e)(t)?.heterogeneousProvider),r=n?.type===`claude-code`,{data:i,isLoading:a}=dt.market.creds.list.useQuery(void 0,{enabled:r}),o=(i?.data??[]).some(e=>e.key===Mn);return{goToConfig:()=>{e&&t.push(l(`/agent`,e,`profile`))},isConfigured:!r||!!n?.env?.CLAUDE_CODE_CRED_KEY||o||a}}})),Fn,In,Ln=e((()=>{Fn=t(m()),In=e=>{let[t,n]=(0,Fn.useState)(!1),r=(0,Fn.useRef)(void 0);return{deferSelection:(0,Fn.useCallback)(e=>{r.current=e,n(!1)},[]),handleOpenChange:n,handleOpenChangeComplete:(0,Fn.useCallback)(t=>{if(t||r.current===void 0)return;let n=r.current;r.current=void 0,e(n)},[e]),open:t}}})),Rn,zn,Bn=e((()=>{ft(),bn(),Rn=class{listModels({deviceId:e,...t}){return e?pt.device.listHeterogeneousAgentModels.query({deviceId:e,...t}):xn.listModels(t)}},zn=new Rn})),Vn,Hn,Un,Wn,Gn=e((()=>{Vn=t(m()),s(),Bn(),Hn=300*1e3,Un=e=>{let t=JSON.stringify({args:e?.args??[],env:Object.entries(e?.env??{}).sort(([e],[t])=>e.localeCompare(t))}),n=2166136261;for(let e=0;e<t.length;e+=1)n^=t.charCodeAt(e),n=Math.imul(n,16777619);return(n>>>0).toString(36)},Wn=({cwd:e,deviceId:t,isDeviceListLoading:n,isPreferenceLoading:r,open:i,provider:a,targetReady:o,type:s})=>{let l=(0,Vn.useRef)(i),u=c(o&&!n&&!r?[`heterogeneous-agent-model-catalog`,s,t??`local`,e??``,a?.command??``,Un(a)]:null,async()=>{let n=await zn.listModels({args:a?.args,command:a?.command,cwd:e,deviceId:t,env:a?.env,type:s});if(n.status===`error`){let e=Error(n.error.message);throw e.name=n.error.code,e}return n},{dedupingInterval:Hn,revalidateOnFocus:!1,shouldRetryOnError:!1});return(0,Vn.useEffect)(()=>{let e=i&&!l.current;l.current=i,e&&u.error&&u.mutate()},[i,u.error,u.mutate]),u}})),Kn,B,V,qn,Jn,Yn=e((()=>{vt(),Je(),He(),Re(),F(),Me(),Kn=t(m()),a(),p(),at(),$e(),Xt(),Zt(),Pt(),st(),it(),Ct(),Ln(),Gn(),B=t(f()),V=N(({css:e})=>({check:e`
    flex: none;
    color: ${P.colorPrimary};
  `,empty:e`
    padding-block: 24px;
    padding-inline: 16px;

    font-size: 12px;
    color: ${P.colorTextTertiary};
    text-align: center;
  `,item:e`
    min-height: 42px;
  `,popup:e`
    overflow: hidden;
    display: flex;
    flex-direction: column;

    width: 340px;
    max-height: 430px;
  `,search:e`
    display: flex;
    gap: 6px;
    align-items: center;
  `,spinning:e`
    animation: heterogeneous-agent-model-spin 0.8s linear infinite;

    @keyframes heterogeneous-agent-model-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `,stale:e`
    color: ${P.colorWarning};
  `,submenuMeta:e`
    overflow: hidden;

    max-width: 150px;

    font-family: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,trigger:e`
    cursor: pointer;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    height: 28px;
    padding-inline: 8px;
    border-radius: 6px;

    font-size: 12px;
    color: ${P.colorTextSecondary};

    &:hover {
      color: ${P.colorText};
      background: ${P.colorFillSecondary};
    }
  `,triggerDisabled:e`
    cursor: not-allowed;
    opacity: 0.5;
  `,triggerLabel:e`
    white-space: nowrap;
  `})),qn=e=>{switch(e){case`cli_not_found`:return`heteroAgent.cliModel.cliNotFound`;case`device_unavailable`:return`heteroAgent.cliModel.targetUnavailable`;case`timeout`:return`heteroAgent.cliModel.timeout`;case`unsupported_client`:return`heteroAgent.cliModel.unsupportedClient`;default:return`heteroAgent.cliModel.error`}},Jn=(0,Kn.memo)(({agentId:e,disabled:t,model:n,onSelect:r,permissionReason:i,type:a,variant:s=`standalone`})=>{let{t:c}=o(`chat`),l=bt(a)??a,[u,d]=(0,Kn.useState)(``),{deferSelection:f,handleOpenChange:p,handleOpenChangeComplete:m,open:g}=In(r),{agencyConfig:k,isPreferenceLoading:j,workspaceScoped:ee}=Yt(e),te=lt(xt.isLogin),{isLoading:ce}=Nt(e=>e.useFetchDevices)(te||!1),le=Qt(e),N=k?.heterogeneousProvider;ot(e=>e.useFetchGatewayDeviceInfo)();let P=ot(e=>e.gatewayDeviceInfo?.deviceId),F=tt(k,{clientExecutionAvailable:!1,isHetero:!0,workspaceScoped:ee}),fe=rt(k,P,{workspaceScoped:ee}),pe=F===`device`&&!!fe,I=n&&n!=="default"?n:R,{data:me,error:he,isLoading:ge,isValidating:_e,mutate:ye}=Wn({cwd:le,deviceId:fe,isDeviceListLoading:ce,isPreferenceLoading:j,open:g,provider:N,targetReady:pe,type:a}),be=(0,Kn.useMemo)(()=>me?.models??[],[me]),xe=I!=="default"&&!!me&&!be.some(e=>e.id===I),Se=(0,Kn.useMemo)(()=>{let e=xe?[{id:I,modelId:I.includes(`/`)?I.slice(I.indexOf(`/`)+1):I,providerId:c(`heteroAgent.cliModel.saved`)},...be]:be,t=u.trim().toLowerCase();return t?e.filter(e=>[e.id,e.label,e.providerId,e.modelId].some(e=>e&&e.toLowerCase().includes(t))):e},[be,I,u,xe,c]),Ee=(0,Kn.useMemo)(()=>Se.reduce((e,t)=>((e[t.providerId]||=[]).push(t),e),{}),[Se]),ke=(0,Kn.useCallback)(e=>{m(e),e||d(``)},[m]),Ae=(0,B.jsxs)(`div`,{className:de(V.trigger,t&&V.triggerDisabled),"aria-label":c(`heteroAgent.cliModel.ariaLabel`,{name:l,model:I==="default"?c(`heteroAgent.modelSelector.default`):I}),children:[(0,B.jsx)(`span`,{className:V.triggerLabel,children:I==="default"?c(`heteroAgent.modelSelector.default`):I}),(0,B.jsx)(S,{icon:Te,size:12})]});if(t)return(0,B.jsx)(v,{title:i,children:(0,B.jsx)(`div`,{children:Ae})});let je=s===`submenu`?r:f,Me=s!==`submenu`,Ne=(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(D,{className:V.search,children:[(0,B.jsx)(Be,{autoFocus:!0,placeholder:c(`heteroAgent.cliModel.search`),prefix:(0,B.jsx)(S,{icon:De,size:14}),size:`small`,value:u,variant:`borderless`,onChange:e=>d(e.target.value),onKeyDown:e=>e.stopPropagation()}),(0,B.jsx)(ae,{"aria-label":c(`heteroAgent.cliModel.reload`),className:de(_e&&V.spinning),disabled:!pe||_e,icon:_e?ve:we,size:`small`,title:c(`heteroAgent.cliModel.reload`),onClick:()=>void ye()})]}),(0,B.jsxs)(_,{children:[(0,B.jsx)(se,{className:V.item,closeOnClick:Me,onClick:()=>je(R),children:(0,B.jsxs)(h,{children:[(0,B.jsxs)(x,{children:[(0,B.jsx)(O,{children:c(`heteroAgent.modelSelector.default`)}),(0,B.jsx)(oe,{children:c(`heteroAgent.cliModel.defaultDesc`,{name:l})})]}),I==="default"&&(0,B.jsx)(E,{className:V.check,children:(0,B.jsx)(S,{icon:Oe,size:14})})]})}),ge&&!me&&(0,B.jsx)(`div`,{className:V.empty,children:c(`heteroAgent.cliModel.loading`,{name:l})}),!pe&&(0,B.jsx)(`div`,{className:V.empty,children:c(`heteroAgent.cliModel.targetUnavailable`)}),he&&(0,B.jsxs)(`div`,{className:V.empty,children:[c(qn(he.name)),(0,B.jsx)(`br`,{}),(0,B.jsx)(M,{size:`small`,type:`text`,onClick:()=>void ye(),children:c(`heteroAgent.cliModel.retry`)})]}),me&&Se.length===0&&(0,B.jsx)(`div`,{className:V.empty,children:u.trim()?c(`heteroAgent.cliModel.noMatch`):c(`heteroAgent.cliModel.empty`,{name:l})}),Object.entries(Ee).map(([e,t])=>(0,B.jsxs)(b,{children:[(0,B.jsx)(y,{children:e}),t.map(e=>{let t=xe&&e.id===I;return(0,B.jsx)(se,{className:V.item,closeOnClick:Me,onClick:()=>je(e.id),children:(0,B.jsxs)(h,{children:[(0,B.jsxs)(x,{children:[(0,B.jsx)(O,{children:e.label??e.modelId}),(0,B.jsxs)(oe,{className:de(t&&V.stale),children:[e.id,t?` · ${c(`heteroAgent.cliModel.stale`)}`:``]})]}),e.id===I&&(0,B.jsx)(E,{className:V.check,children:(0,B.jsx)(S,{icon:Oe,size:14})})]})},e.id)})]},e))]})]});return s===`submenu`?(0,B.jsxs)(C,{open:g,onOpenChange:p,onOpenChangeComplete:ke,children:[(0,B.jsx)(ne,{label:c(`heteroAgent.modelSelector.model`),openOnHover:!1,children:(0,B.jsxs)(h,{children:[(0,B.jsx)(O,{children:c(`heteroAgent.modelSelector.model`)}),(0,B.jsx)(E,{className:V.submenuMeta,children:I==="default"?c(`heteroAgent.modelSelector.default`):I}),(0,B.jsx)(re,{children:(0,B.jsx)(S,{icon:Ce,size:12})})]})}),(0,B.jsx)(T,{children:(0,B.jsx)(A,{alignOffset:-4,anchor:null,placement:`right`,sideOffset:8,children:(0,B.jsx)(w,{className:V.popup,"data-has-header":``,children:Ne})})})]}):(0,B.jsxs)(ue,{open:g,onOpenChange:p,onOpenChangeComplete:ke,children:[(0,B.jsx)(ie,{nativeButton:!1,children:Ae}),(0,B.jsx)(T,{children:(0,B.jsx)(A,{placement:`topLeft`,sideOffset:8,children:(0,B.jsx)(w,{className:V.popup,"data-has-header":``,children:Ne})})})]})}),Jn.displayName=`ModelCatalogSelector`})),Xn,Zn,Qn,$n=e((()=>{Xn={"claude-code":[{label:`Fable 5`,value:`fable`},{label:`Opus 4.8`,value:`opus`},{label:`Sonnet 4.6`,value:`sonnet`},{label:`Haiku 4.5`,value:`haiku`}],codex:[{label:`GPT-5.6 Sol`,value:`gpt-5.6-sol`},{label:`GPT-5.6 Terra`,value:`gpt-5.6-terra`},{label:`GPT-5.6 Luna`,value:`gpt-5.6-luna`},{label:`GPT-5.5`,value:`gpt-5.5`},{label:`GPT-5.4`,value:`gpt-5.4`},{label:`GPT-5.4 Mini`,value:`gpt-5.4-mini`},{label:`GPT-5.3 Codex Spark`,value:`gpt-5.3-codex-spark`}]},Zn=e=>e&&Xn[e]||[],Qn={"gpt-5.6":`GPT-5.6`,...Object.fromEntries(Object.values(Xn).flat().map(e=>[e.value,e.label]))}})),er,tr,nr,rr,ir,ar,or,sr=e((()=>{Je(),$n(),er={[R]:`heteroAgent.modelSelector.default`,high:`heteroAgent.modelSelector.reasoning.high`,low:`heteroAgent.modelSelector.reasoning.low`,max:`heteroAgent.modelSelector.reasoning.max`,medium:`heteroAgent.modelSelector.reasoning.medium`,ultra:`heteroAgent.modelSelector.reasoning.ultra`,xhigh:`heteroAgent.modelSelector.reasoning.xhigh`},tr={...er,low:`heteroAgent.modelSelector.reasoning.light`},nr={[R]:`heteroAgent.modelSelector.default`,high:`heteroAgent.modelSelector.mode.high`,low:`heteroAgent.modelSelector.mode.low`,medium:`heteroAgent.modelSelector.mode.medium`,ultra:`heteroAgent.modelSelector.mode.ultra`},rr=e=>e===`codex`?tr:er,ir=e=>nr[e],ar=(e,t)=>{if(e==="default")return t;let n=Qn[e];if(n)return n;let r=/^claude-(opus|sonnet|haiku)-(\d+)-(\d+)/.exec(e);if(!r)return e;let[,i,a,o]=r;return`${i[0].toUpperCase()}${i.slice(1)} ${a}.${o}`},or=({defaultConfigLabel:e,defaultModelLabel:t,defaultReasoningLabel:n,effort:r,effortLabel:i,model:a,modelLabel:o})=>{let s=a===R,c=s?t:o;if(!r)return s?e:c;let l=r===R;return s&&l?e:`${c} ${l?n:i}`}})),cr,lr,ur,dr=e((()=>{Je(),sr(),$n(),cr=(e,t)=>{let n=Ge(e?.type);if(!e||!t||!n||Object.keys(n).length===0)return{kind:`none`};let r=!!n.effort||!!n.mode||!!n.speed;return n.model?.source===`catalog`&&!r?{capability:{...n,model:n.model},kind:`catalog`}:{capability:n,kind:`menu`}},lr=({capability:e,effort:t,isFastSpeed:n,value:r})=>{let i=n&&!!e.speed&&!e.speed.supported(r);return{...t&&t!=="default"&&e.effort&&!e.effort.levels(r).includes(t)?{effort:R}:{},model:r,...i?{speed:R}:{}}},ur=({capability:e,provider:t,t:n})=>{let r=e.model?.resolve(t)??`default`,i=e.effort?.resolve(t),a=e.mode?.resolve(t),o=e.speed?.supported(r)??!1,s=o?e.speed.resolve(t):R,c=s===`fast`,l=n(`heteroAgent.modelSelector.default`),u=ar(r,l),d=rr(t.type),f=i?n(d[i]):void 0,p=a?n(ir(a)):void 0,m=e.model?.source===`catalog`,h=!!e.mode&&!e.model&&!e.effort&&!e.speed,g=[];if(e.model&&!m){let e=[{label:l,value:R},...Zn(t.type)];g.push({current:r,key:`model`,label:n(`heteroAgent.modelSelector.model`),options:e.some(e=>e.value===r)?e:[{label:r,value:r},...e],valueLabel:u})}return e.mode&&a&&g.push({current:a,key:`mode`,label:n(`heteroAgent.modelSelector.mode.label`),options:[{label:l,value:R},...e.mode.levels.map(e=>({label:n(ir(e)),value:e}))],valueLabel:p??l}),e.effort&&i&&g.push({current:i,key:`reasoning`,label:n(`heteroAgent.modelSelector.reasoning`),options:[{label:l,value:R},...e.effort.levels(r).map(e=>({label:n(d[e]),value:e}))],valueLabel:f}),o&&g.push({current:s,key:`speed`,label:n(`heteroAgent.modelSelector.speed`),options:[{desc:n(`heteroAgent.modelSelector.speed.standardDesc`),label:n(`heteroAgent.modelSelector.speed.standard`),value:R},{desc:n(`heteroAgent.modelSelector.speed.fastDesc`),label:n(`heteroAgent.modelSelector.speed.fast`),value:`fast`}],valueLabel:n(c?`heteroAgent.modelSelector.speed.fast`:`heteroAgent.modelSelector.speed.standard`)}),{ariaLabel:h?n(`heteroAgent.modelSelector.mode.ariaLabel`,{mode:p??l}):n(`heteroAgent.modelSelector.ariaLabel`,{model:u,reasoning:f??l}),dimensions:g,isCatalogModel:m,isFastSpeed:c,model:r,triggerText:h?a==="default"?n(`heteroAgent.modelSelector.defaultConfig`):p??l:or({defaultConfigLabel:n(`heteroAgent.modelSelector.defaultConfig`),defaultModelLabel:n(`heteroAgent.modelSelector.defaultModel`),defaultReasoningLabel:n(`heteroAgent.modelSelector.defaultReasoning`),effort:i,effortLabel:f,model:r,modelLabel:u})}}})),fr,pr,mr,hr=e((()=>{Re(),fr=t(m()),a(),on(),ln(),Yn(),dr(),pr=t(f()),mr=(0,fr.memo)(({agentId:e,capability:t,patch:n,permissionReason:r,provider:i})=>{let{t:a}=o(`chat`),s=(0,fr.useMemo)(()=>ur({capability:t,provider:i,t:a}),[t,i,a]),c=(0,fr.useCallback)((e,r)=>{if(e===`model`&&t.model)return void n(lr({capability:{...t,model:t.model},effort:t.effort?.resolve(i),isFastSpeed:s.isFastSpeed,value:r}));if(e===`mode`)return void n({mode:r});if(e===`speed`)return void n({speed:r});n({effort:r})},[t,n,i,s.isFastSpeed]),l=s.dimensions.map(e=>cn({current:e.current,label:e.label,onSelect:t=>c(e.key,t),options:e.options,valueLabel:e.valueLabel}));return(0,pr.jsxs)(ue,{children:[(0,pr.jsx)(ie,{nativeButton:!1,children:(0,pr.jsx)(sn,{ariaLabel:s.ariaLabel,fast:s.isFastSpeed,text:s.triggerText})}),(0,pr.jsx)(T,{children:(0,pr.jsx)(A,{placement:`topRight`,sideOffset:8,children:(0,pr.jsxs)(w,{style:{width:240},children:[s.isCatalogModel&&(0,pr.jsx)(Jn,{agentId:e,disabled:!1,model:s.model,permissionReason:r,type:i.type,variant:`submenu`,onSelect:e=>c(`model`,e)}),ee(l)]})})})]})}),mr.displayName=`HeteroModelSelectorMenu`})),gr,_r,vr=e((()=>{Je(),gr=t(m()),Xe(),Et(),_r=({agentId:e,enabled:t,provider:n})=>{let r=Qe(e=>e.updateAgentConfigById),i=Ot(e=>e.activeTopicId),a=Ot(e=>e.updateTopicModel);return(0,gr.useCallback)(async o=>{if(!t||!e||!n)return;let{model:s,...c}=o;i&&s!==void 0&&(await a(i,{model:s,provider:n.type}),Object.keys(c).length===0)||await r(e,{agencyConfig:{heterogeneousProvider:We(n,i?c:o)}})},[i,e,t,n,r,a])}})),yr,br,xr,Sr,Cr=e((()=>{Je(),yr=t(Ye()),br=t(m()),zt(),Xe(),Ze(),Et(),Mt(),an(),hn(),Yn(),hr(),dr(),vr(),xr=t(f()),Sr=(0,br.memo)(()=>{let e=nn(),t=Qe(t=>nt.getAgencyConfigById(e)(t)?.heterogeneousProvider,yr.default),{allowed:n,reason:r}=Rt(`create_content`),{canConfigureResource:i}=_n(),a=n&&i,o=_r({agentId:e,enabled:a,provider:t}),s=Ot(jt.activeTopicModel),c=t?qe(t,s):void 0,l=cr(c,a);return l.kind===`none`||!c?null:l.kind===`catalog`?(0,xr.jsx)(Jn,{agentId:e,disabled:!1,model:l.capability.model.resolve(c),permissionReason:r,type:c.type,onSelect:e=>void o({model:e})}):(0,xr.jsx)(mr,{agentId:e,capability:l.capability,patch:o,permissionReason:r,provider:c})}),Sr.displayName=`HeteroModel`})),wr,Tr=e((()=>{wr=({active:e,error:t,isReady:n})=>({blocked:e&&(!n||!!t),error:e&&n?t:void 0})})),Er,Dr,Or=e((()=>{vt(),Er=t(m()),Xt(),Ft(),Dr=({agentId:e,enabled:t=!0})=>{let{agencyConfig:n,isPreferenceLoading:r}=Yt(e),i=n?.boundDeviceId,a=n?.heterogeneousProvider?.type,[o,s]=(0,Er.useState)(`checking`),c=(0,Er.useCallback)(async()=>{if(t){if(r){s(`checking`);return}if(!i){s(`no-device`);return}s(`checking`);try{let e=(await It.listDevices()).find(e=>e.deviceId===i);if(!e){s(`ok`);return}if(!e.online){s(`device-offline`);return}a&&_t(a)?s((await It.checkCapability({deviceId:i,platform:a,scope:e.scope})).available?`ok`:`platform-unavailable`):s(`ok`)}catch{s(`ok`)}}},[t,r,i,a]);return(0,Er.useEffect)(()=>{c()},[c]),(0,Er.useEffect)(()=>{if(!t)return;let e=()=>void c();return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[t,c]),{refresh:()=>void c(),status:o}}})),kr,Ar,jr,Mr,Nr=e((()=>{vt(),Je(),He(),Re(),kr=t(m()),Cn(),Sn(),Gt(),Xe(),Ze(),ct(),Et(),Mt(),Ar=t(f()),jr=e=>(0,Ar.jsx)(`span`,{className:En.compactLabel,children:wn(e)}),Mr=(0,kr.memo)(({agentId:e})=>{let t=Qe(nt.getAgencyConfigById(e)),n=Qe(e=>e.updateAgentConfigById),r=t?.heterogeneousProvider,i=Ot(e=>e.activeTopicId),a=Ot(jt.activeTopicModel),o=Ot(e=>e.updateTopicModel),{providers:s}=Tn(r?.type),c=(0,kr.useMemo)(()=>s.map(({id:e})=>e),[s]),l=r&&ht(r.type)?r.type:void 0,u=r?.apiConfig,d=u?.source===`server-default`?u:void 0,f=u&&u.source!==`server-default`?u:void 0,p=Qe(e=>e.useFetchServerDefaultHeterogeneousCapability)(!!d&&!!l),m=ut(e=>e.builtinAiModelList),h=(0,kr.useMemo)(()=>Dn(p.data?.enabled===!0&&l?On(p.data.models,l):[],m),[m,p.data,l]);if(!r||r.authMode!==`api`||!d&&c.length===0)return null;let g=qe(r,a).apiConfig,_=g?.source===`server-default`?void 0:g,v=async a=>{if(i&&a.source!==`server-default`&&a.providerId){await o(i,{model:a.model,provider:a.providerId});return}await n(e,{agencyConfig:{...t,heterogeneousProvider:{...r,apiConfig:a}}})};return d?(0,Ar.jsx)(ce,{children:(0,Ar.jsx)(ze,{className:En.picker,labelRender:jr,loading:p.isLoading,options:h,popupMatchSelectWidth:!1,size:`small`,style:kn,value:d.model,variant:`borderless`,onChange:e=>{typeof e==`string`&&v({model:e,source:`server-default`})}})}):(0,Ar.jsx)(Kt,{labelRender:jr,popupWidth:360,providerIds:c,size:`small`,style:kn,variant:`borderless`,value:_?{model:_.model,provider:_.providerId}:void 0,onChange:({model:e,provider:t})=>{v({model:e,providerId:t,smallFastModel:f?.providerId===t?f.smallFastModel:void 0})}})}),Mr.displayName=`ApiModeModelBar`})),Pr,Fr=e((()=>{ft(),bn(),Pr=({deviceId:e,env:t,force:n})=>e?pt.device.getClaudeCodeQuota.query({deviceId:e,env:t,...n?{force:!0}:{}}):xn.getClaudeCodeQuota({env:t,...n?{force:!0}:{}})})),Ir=e((()=>{})),Lr=e((()=>{})),Rr=e((()=>{})),zr=e((()=>{})),Br,Vr,Hr,Ur=e((()=>{Br=300*60,Vr=10080*60,Hr=e=>e.startsWith(`weekly`)?Vr:Br})),Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r=e((()=>{Ur(),Wr=e=>Math.min(100,Math.max(0,Math.round(e))),Gr=(e,t)=>e.resetsAt==null?t-e.capturedAt>Hr(e.limitType)*1e3:e.resetsAt<=t,Kr=(e,t)=>Gr(e,t)?0:Wr(e.utilization),qr=(e,t)=>{let n=Gr(e,t);return{resetsAt:n?null:e.resetsAt??null,usedPercent:n?0:Wr(e.utilization),windowMinutes:Hr(e.limitType)/60}},Jr=e=>e.limitType===`session`||e.limitType===`five_hour`,Yr=e=>e.limitType.startsWith(`weekly`)&&!e.scopeKey,Xr=e=>e.limitType.startsWith(`weekly`)&&!!e.scopeKey,Zr=(e,t)=>e.reduce((e,n)=>t(n)&&(!e||n.capturedAt>e.capturedAt)?n:e,void 0),Qr=(e,t)=>{let n=Zr(e,Jr),r=Zr(e,Yr),i=Zr(e,Xr);return{scopedWeekly:i?{modelName:i.scopeKey,window:qr(i,t)}:null,session:n?qr(n,t):null,weekly:r?qr(r,t):null}}})),ei=e((()=>{})),ti=e((()=>{})),ni,ri,ii,ai=e((()=>{Ur(),ni=e=>Math.round(e/6e4)*6e4,ri=e=>JSON.stringify([e.limitType,e.scopeKey,e.resetsAt]),ii=(e,t=Hr)=>{let n=new Map;for(let r of e){if(r.resetsAt==null)continue;let e=ni(r.resetsAt),i=t(r.limitType),a=ri({...r,resetsAt:e}),o=n.get(a);if(!o){n.set(a,{firstSeenAt:r.capturedAt,lastSeenAt:r.capturedAt,lastUtilization:r.utilization,limitType:r.limitType,peakUtilization:r.utilization,rateLimitedAt:r.rateLimited?r.capturedAt:null,resetsAt:e,scopeKey:r.scopeKey,windowSeconds:i,windowStartAt:e-i*1e3});continue}o.peakUtilization=Math.max(o.peakUtilization,r.utilization),r.capturedAt>=o.lastSeenAt&&(o.lastSeenAt=r.capturedAt,o.lastUtilization=r.utilization),r.capturedAt<o.firstSeenAt&&(o.firstSeenAt=r.capturedAt),r.rateLimited&&(o.rateLimitedAt==null||r.capturedAt<o.rateLimitedAt)&&(o.rateLimitedAt=r.capturedAt)}return[...n.values()].sort((e,t)=>e.resetsAt-t.resetsAt)}})),oi=e((()=>{Ir(),Lr(),Rr(),zr(),$r(),ei(),Ur(),ti(),ai()})),si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi=e((()=>{oi(),si=t(n()),ci=Vr*1e3,li=Br*1e3,ui=300*1e3,di=e=>(0,si.default)(e).format(`YYYY-MM-DD`),fi={scopeKey:``,type:`session`},pi=e=>`${e.type}:${e.scopeKey}`,mi=e=>e.type===`session`?li:ci,hi=e=>e.hasUnpricedTurn?e.cost>0?{cost:e.cost,kind:`lower-bound`}:{kind:`unknown`}:{cost:e.cost,kind:`exact`},gi=(e,t)=>t?e.find(e=>e.externalAccountId===t):e.length===1?e[0]:void 0,_i=(e,t)=>{let n=(0,si.default)(t).startOf(`month`);return e.isSame(n,`month`)||e.isSame(n.subtract(1,`month`),`month`)},vi=e=>e.limitType===`session`||e.limitType===`five_hour`,yi=(e,t)=>t.type===`session`?vi(e):e.limitType.startsWith(`weekly`)&&(e.scopeKey||``)===t.scopeKey,bi=e=>[...e].sort((e,t)=>e.capturedAt-t.capturedAt),xi=(e,t)=>e.resetsAt!=null&&t.resetsAt!=null?Math.abs(e.resetsAt-t.resetsAt)<ui:t.utilization>=e.utilization,Si=e=>{let t=new Map;for(let n of e){let e=di(n.occurredAt),r=t.get(e)??{cost:0,hasUnpricedTurn:!1,tokens:0};r.tokens+=n.tokens,n.cost==null?r.hasUnpricedTurn=!0:r.cost+=n.cost,t.set(e,r)}return t},Ci=(e,t)=>{let n=bi(e.filter(e=>yi(e,t))),r=mi(t),i=new Map;for(let[e,t]of n.entries()){if(e===0)continue;let a=n[e-1];if(t.capturedAt-a.capturedAt>r)continue;let o=xi(a,t)?Math.max(0,t.utilization-a.utilization):t.utilization;if(o<=0)continue;let s=di(t.capturedAt);i.set(s,(i.get(s)??0)+o)}return i},wi=(e,t)=>{if(e<=0||t<=0)return 0;let n=e/t;return n<=.25?1:n<=.5?2:n<=.75?3:4},Ti=(e,t)=>{let n=Math.max(0,...[...e.values()].map(e=>e.tokens)),r=[...t].filter(([t])=>(e.get(t)?.tokens??0)===0),i=Math.max(0,...r.map(([,e])=>e)),a=new Map;for(let[t,r]of e)r.tokens>0&&a.set(t,wi(r.tokens,n));for(let[e,t]of r)a.set(e,wi(t,i));return a},Ei=(e,t)=>e>0&&!t,Di=(e,t,n)=>{let r=null;for(let i of e)yi(i,t)&&(i.resetsAt==null||i.resetsAt<=n||(!r||i.capturedAt>r.capturedAt)&&(r=i));return r?{peakUtilization:r.utilization,rateLimitedAt:null,resetsAt:r.resetsAt,windowStartAt:r.resetsAt-mi(t)}:null},Oi=(e,t,n)=>{let r=bi(e.filter(e=>yi(e,t)&&e.capturedAt>=n.windowStartAt&&e.capturedAt<=n.resetsAt&&(e.resetsAt==null||Math.abs(e.resetsAt-n.resetsAt)<ui))).map(e=>({time:e.capturedAt,utilization:Math.min(100,Math.max(0,e.utilization))}));return[{time:n.windowStartAt,utilization:0},...r]},ki=(e,t)=>e.filter(e=>e.occurredAt>=t.windowStartAt&&e.occurredAt<=t.resetsAt).reduce((e,t)=>({cost:e.cost+(t.cost??0),hasUnpricedTurn:e.hasUnpricedTurn||t.cost==null,tokens:e.tokens+t.tokens}),{cost:0,hasUnpricedTurn:!1,tokens:0}),Ai=e=>(e.resetsAt-e.windowStartAt)/5,ji=(e,t)=>{let n=e.at(-1);if(!n||e.length<2)return{kind:`safe`,projectedEndUtilization:0};if(n.utilization>=100)return{kind:`exhausted`};let r=Ai(t),i=e[0];for(let t of e)t.time<=n.time-r&&(i=t);let a=n.time-i.time,o=a>0?(n.utilization-i.utilization)/a:0;if(o<=0)return{kind:`safe`,projectedEndUtilization:n.utilization};let s=n.time+(100-n.utilization)/o;return s<=t.resetsAt?{exhaustAt:s,kind:`exhaust`}:{kind:`safe`,projectedEndUtilization:Math.min(100,n.utilization+o*(t.resetsAt-n.time))}},Mi=(e,t,n)=>{let r=ki(t,e);return{...e,cost:r.cost,hasUnpricedTurn:r.hasUnpricedTurn,isLive:e.resetsAt>n,tokens:r.tokens}},Ni=(e,t,n,r,i=8)=>{let a=[];for(let n of[...e,...t?[t]:[]].sort((e,t)=>e.resetsAt-t.resetsAt)){let e=a.findIndex(e=>Math.abs(e.resetsAt-n.resetsAt)<ui);if(e<0){a.push(n);continue}let t=a[e];a[e]={peakUtilization:Math.max(t.peakUtilization,n.peakUtilization),rateLimitedAt:t.rateLimitedAt??n.rateLimitedAt,resetsAt:Math.max(t.resetsAt,n.resetsAt),windowStartAt:Math.min(t.windowStartAt,n.windowStartAt)}}return a.sort((e,t)=>t.resetsAt-e.resetsAt).slice(0,i).map(e=>Mi(e,n,r))},Pi=(e,t,n=7)=>{let r=new Map;for(let t of e){let e=di(t.windowStartAt);r.set(e,[...r.get(e)??[],t])}for(let e of r.values())e.sort((e,t)=>e.windowStartAt-t.windowStartAt);let i=t.startOf(`day`).subtract(n-1,`day`),a=Array.from({length:n},(e,t)=>{let n=i.add(t,`day`),a=n.format(`YYYY-MM-DD`);return{date:n,key:a,slots:r.get(a)??[]}}),o=Math.max(1,...a.map(e=>e.slots.length));return{columns:a.map(e=>({...e,slots:Array.from({length:o},(t,n)=>e.slots[n]??null)})),rowCount:o}},Fi=e=>e>=100?`error`:e>=80?`warning`:`safe`,Ii=e=>{let t=e.startOf(`month`),n=(t.day()+6)%7,r=t.subtract(n,`day`);return Array.from({length:42},(t,n)=>{let i=r.add(n,`day`);return{date:i,inMonth:i.month()===e.month(),key:i.format(`YYYY-MM-DD`)}})},Li=e=>e>=1e9?`${(e/1e9).toFixed(e>=1e10?0:1)}B`:e>=1e6?`${(e/1e6).toFixed(e>=1e7?0:1)}M`:e>=1e3?`${Math.round(e/1e3)}K`:String(Math.round(e)),Ri=e=>`$${e.toFixed(e>=10?0:2)}`})),H,U,W,G,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra=e((()=>{oi(),He(),Re(),F(),H=t(n()),r(),Me(),U=t(m()),a(),jn(),zi(),W=t(f()),G=N(({css:e})=>({calendarGrid:e`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 4px;
  `,layout:e`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 16px;
    align-items: start;

    /* Nothing to pair the calendar with, so let it take the whole width. */
    &[data-single='true'] {
      grid-template-columns: minmax(0, 1fr);
    }

    @container quota-calendar (width < 900px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `,root:e`
    container-name: quota-calendar;
    container-type: inline-size;
  `,chartFrame:e`
    padding: 4px;
    border-radius: ${P.borderRadiusLG};
    background: ${P.colorFillQuaternary};
  `,cost:e`
    overflow: hidden;

    font-size: 12px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    line-height: 16px;
    text-overflow: ellipsis;

    /* "at least $404" must stay one line — a wrap pushes it out of the cell. */
    white-space: nowrap;
  `,dayCell:e`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 58px;
    padding-block: 4px;
    padding-inline: 6px;
    border-radius: ${P.borderRadius};

    font-size: 12px;

    background: ${P.colorBgContainer};

    &[data-in-month='false'] {
      opacity: 0.35;
    }

    /* The date labels the cell; the number below it carries the information. */
    & [data-day-number] {
      color: ${P.colorTextSecondary};
    }

    /* Rate limited: the provider refused work that day — an error state, not heat. */
    &[data-rate-limited='true'] {
      color: ${P.colorErrorText};
      background: ${P.colorErrorBg};
    }

    /* A refused day states itself in one colour, date and volume included. */
    &[data-rate-limited='true'] [data-day-number],
    &[data-rate-limited='true'] [data-day-secondary] {
      color: inherit;
    }

    /* Today is a marker, not an alarm — the lightest ring that still reads. */
    &[data-today='true'] {
      box-shadow: inset 0 0 0 1px ${P.colorPrimaryBorder};
    }
  `,dayFooter:e`
    display: flex;
    gap: 4px;
    align-items: flex-end;
    justify-content: space-between;

    min-height: 14px;
  `,heatDot:e`
    position: absolute;
    inset-block-start: 6px;
    inset-inline-end: 6px;

    width: 4px;
    height: 4px;
    border-radius: 50%;

    opacity: 0.45;
    background: ${P.colorSuccess};

    &[data-heat='2'] {
      width: 6px;
      height: 6px;
      opacity: 0.65;
    }

    &[data-heat='3'] {
      width: 8px;
      height: 8px;
      opacity: 0.82;
    }

    &[data-heat='4'] {
      width: 10px;
      height: 10px;
      opacity: 1;
    }

    &[data-legend='true'] {
      position: relative;
      inset: auto;
      flex: none;
    }
  `,legendSwatch:e`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    background: ${P.colorBgContainer};

    &[data-rate-limited='true'] {
      background: ${P.colorErrorBg};
    }
  `,capacityRing:e`
    position: relative;

    display: grid;
    flex: none;
    place-items: center;

    width: 54px;
    height: 54px;

    color: ${P.colorSuccess};

    &[data-status='warning'] {
      color: ${P.colorWarning};
    }

    &[data-status='error'] {
      color: ${P.colorError};
    }
  `,capacityRingLabel:e`
    position: absolute;

    font-size: 13px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    color: currentcolor;
  `,capacityRingSvg:e`
    transform: rotate(-90deg);
    display: block;
    width: 100%;
    height: 100%;
  `,statusExhausted:e`
    font-size: 12px;
    color: ${P.colorErrorText};
  `,statusForecast:e`
    font-size: 12px;
    color: ${P.colorWarningText};
  `,statusSafe:e`
    font-size: 12px;
    color: ${P.colorTextSecondary};
  `,tokens:e`
    font-size: 10px;
    font-variant-numeric: tabular-nums;
    line-height: 14px;
    color: ${P.colorTextTertiary};
    white-space: nowrap;
  `,capacityFill:e`
    height: 100%;
    border-radius: inherit;
    background: ${P.colorSuccess};

    &[data-status='warning'] {
      background: ${P.colorWarning};
    }

    &[data-status='error'] {
      background: ${P.colorError};
    }
  `,capacityTrack:e`
    overflow: hidden;

    width: 100%;
    height: 5px;
    border-radius: 999px;

    background: ${P.colorFillSecondary};
  `,windowCell:e`
    display: flex;
    flex-direction: column;
    gap: 3px;

    min-width: 0;
    height: 38px;
    padding: 4px;
    border-radius: ${P.borderRadiusSM};

    font-size: 10px;
    font-variant-numeric: tabular-nums;
    line-height: 1.2;
    color: ${P.colorTextSecondary};

    /* "09:42 100%" is one unit — wrapping it splits the percentage in half. */
    white-space: nowrap;

    background: ${P.colorBgContainer};

    &[data-rate-limited='true'] {
      color: ${P.colorErrorText};
      background: ${P.colorErrorBg};
    }
  `,windowGrid:e`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 4px;
  `,windowListRow:e`
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(110px, 1fr) minmax(0, 1fr);
    gap: 12px;
    align-items: center;

    min-height: 30px;
    padding-block: 5px;
    padding-inline: 2px;

    &:not(:last-child) {
      border-block-end: 1px solid ${P.colorBorderSecondary};
    }
  `,sectionPanel:e`
    padding: 10px;
    border-radius: ${P.borderRadiusLG};
    background: ${P.colorFillQuaternary};
  `,weekday:e`
    font-size: 11px;
    color: ${P.colorTextQuaternary};
    text-align: center;
  `})),Bi=e=>e==null?null:new Date(e).getTime(),Vi=e=>e.map(e=>({peakUtilization:e.peakUtilization,rateLimitedAt:Bi(e.rateLimitedAt),resetsAt:Bi(e.resetsAt),seriesId:e.limitType.startsWith(`weekly`)?`weekly:${e.scopeKey||``}`:`session:`,windowStartAt:Bi(e.windowStartAt)})),Hi=640,Ui=120,Wi=90,Gi=22,Ki=2*Math.PI*Gi,qi=(e,t)=>(e-t.windowStartAt)/(t.resetsAt-t.windowStartAt)*Hi,Ji=e=>Ui*(1-e/100),Yi=(e,t,n=!1)=>{let r=hi(e);return r.kind===`unknown`?t(`heteroAgent.claudeQuota.calendar.unpricedCost`):r.kind===`lower-bound`?t(n?`heteroAgent.claudeQuota.calendar.partialCostCompact`:`heteroAgent.claudeQuota.calendar.partialCost`,{cost:Ri(r.cost)}):Ri(r.cost)},Xi=(0,U.memo)(({now:e,readings:t,series:n,turns:r,window:i})=>{let{t:a}=o(`chat`),s=(0,U.useMemo)(()=>Oi(t,n,i),[t,n,i]),c=i.resetsAt>e,l=(0,U.useMemo)(()=>ji(s,i),[s,i]),u=(0,U.useMemo)(()=>ki(r,i),[r,i]),d=s.at(-1),f=s.map(e=>`${qi(e.time,i)},${Ji(e.utilization)}`).join(` `),p=`M0,${Ui} L${f.replaceAll(` `,` L`)} L${qi(d.time,i)},${Ui} Z`,m=l.kind===`exhaust`?{time:l.exhaustAt,utilization:100}:l.kind===`safe`?{time:i.resetsAt,utilization:l.projectedEndUtilization}:null,h=l.kind===`exhaust`,g=l.kind===`exhausted`,_=n.type===`session`?`HH:mm`:`M/D HH:mm`,v=c?g?a(`heteroAgent.claudeQuota.calendar.burnout.exhausted`,{time:(0,H.default)(i.resetsAt).format(_)}):h?a(`heteroAgent.claudeQuota.calendar.burnout.willExhaust`,{time:(0,H.default)(l.exhaustAt).format(_)}):a(`heteroAgent.claudeQuota.calendar.burnout.safe`,{percent:Math.round(l.projectedEndUtilization)}):a(`heteroAgent.claudeQuota.calendar.pastWindow`);return(0,W.jsxs)(k,{gap:8,children:[(0,W.jsxs)(k,{horizontal:!0,align:`flex-end`,gap:12,justify:`space-between`,children:[(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:10,children:[(0,W.jsx)(Zi,{utilization:d.utilization}),(0,W.jsxs)(k,{gap:2,children:[(0,W.jsx)(L,{style:{fontSize:12},type:`secondary`,children:a(`heteroAgent.claudeQuota.calendar.usedOfWindow`)}),(0,W.jsx)(L,{style:{fontSize:12},type:`secondary`,children:u.tokens>0?a(`heteroAgent.claudeQuota.calendar.windowSpend`,{cost:Yi(u,a,!0),tokens:Li(u.tokens)}):a(`heteroAgent.claudeQuota.calendar.noLedgerSpend`)})]})]}),(0,W.jsx)(`span`,{className:g?G.statusExhausted:h?G.statusForecast:G.statusSafe,children:v})]}),(0,W.jsx)(`div`,{className:G.chartFrame,children:(0,W.jsxs)(`svg`,{height:Ui,preserveAspectRatio:`none`,style:{display:`block`},viewBox:`0 0 ${Hi} ${Ui}`,width:`100%`,children:[[25,50,75].map(e=>(0,W.jsx)(`line`,{stroke:P.colorBorderSecondary,strokeWidth:1,x1:0,x2:Hi,y1:Ji(e),y2:Ji(e)},e)),(0,W.jsx)(`line`,{stroke:P.colorTextQuaternary,strokeDasharray:`4 4`,strokeWidth:1,x1:0,x2:Hi,y1:Ui,y2:0}),(0,W.jsx)(`path`,{d:p,fill:P.colorSuccess,opacity:.12}),(0,W.jsx)(`polyline`,{fill:`none`,points:f,stroke:P.colorSuccess,strokeWidth:2}),c&&m&&(0,W.jsx)(`line`,{stroke:h?P.colorWarning:P.colorTextTertiary,strokeDasharray:`4 4`,strokeWidth:1.5,x1:qi(d.time,i),x2:qi(m.time,i),y1:Ji(d.utilization),y2:Ji(m.utilization)}),c&&h&&(0,W.jsx)(`circle`,{cx:qi(l.exhaustAt,i),cy:Ji(100),fill:P.colorWarning,r:3.5}),(0,W.jsx)(`circle`,{cx:qi(d.time,i),cy:Ji(d.utilization),fill:P.colorSuccess,r:3.5})]})}),(0,W.jsxs)(k,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:(0,H.default)(i.windowStartAt).format(_)}),(0,W.jsx)(L,{style:{color:P.colorTextQuaternary,fontSize:11},children:a(`heteroAgent.claudeQuota.calendar.pace`)}),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:(0,H.default)(i.resetsAt).format(_)})]})]})}),Xi.displayName=`BurnChart`,Zi=(0,U.memo)(({utilization:e})=>{let t=Math.min(100,Math.max(0,e));return(0,W.jsxs)(`div`,{"aria-label":`${Math.round(e)}%`,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":Math.round(e),className:G.capacityRing,"data-status":Fi(e),role:`meter`,children:[(0,W.jsxs)(`svg`,{className:G.capacityRingSvg,viewBox:`0 0 54 54`,children:[(0,W.jsx)(`circle`,{cx:27,cy:27,fill:`none`,r:Gi,stroke:P.colorFillSecondary,strokeWidth:5}),(0,W.jsx)(`circle`,{cx:27,cy:27,fill:`none`,r:Gi,stroke:`currentColor`,strokeDasharray:Ki,strokeDashoffset:Ki*(1-t/100),strokeLinecap:`round`,strokeWidth:5})]}),(0,W.jsxs)(`span`,{className:G.capacityRingLabel,children:[Math.round(e),`%`]})]})}),Zi.displayName=`CapacityRing`,Qi=(0,U.memo)(({utilization:e})=>(0,W.jsx)(`div`,{"aria-label":`${Math.round(e)}%`,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":Math.round(e),className:G.capacityTrack,role:`meter`,children:(0,W.jsx)(`div`,{className:G.capacityFill,"data-status":Fi(e),style:{width:`${Math.min(100,Math.max(0,e))}%`}})})),Qi.displayName=`CapacityMeter`,$i=(e,t)=>[`${(0,H.default)(e.windowStartAt).format(`M/D HH:mm`)} – ${(0,H.default)(e.resetsAt).format(`M/D HH:mm`)}`,t(`heteroAgent.claudeQuota.calendar.windowUtilization`,{percent:Math.round(e.peakUtilization)}),e.tokens>0?t(`heteroAgent.claudeQuota.calendar.windowSpend`,{cost:Yi(e,t),tokens:Li(e.tokens)}):t(`heteroAgent.claudeQuota.calendar.noLedgerSpendShort`),e.rateLimitedAt&&t(`heteroAgent.claudeQuota.calendar.rateLimited`)].filter(Boolean),ea=(0,U.memo)(({series:e,stats:t})=>{let{t:n}=o(`chat`);if(t.length===0)return null;if(e.type===`session`){let e=Pi(t,(0,H.default)(Math.max(...t.map(e=>e.windowStartAt))));return(0,W.jsxs)(k,{className:G.sectionPanel,gap:8,children:[(0,W.jsxs)(k,{horizontal:!0,align:`baseline`,justify:`space-between`,children:[(0,W.jsx)(L,{strong:!0,style:{fontSize:13},children:n(`heteroAgent.claudeQuota.calendar.sessionHistory`)}),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:n(`heteroAgent.claudeQuota.calendar.sessionHistoryHint`)})]}),(0,W.jsxs)(`div`,{className:G.windowGrid,children:[e.columns.map(e=>(0,W.jsx)(`div`,{className:G.weekday,children:e.date.format(`dd M/D`)},e.key)),Array.from({length:e.rowCount},(t,r)=>e.columns.map(e=>{let t=e.slots[r];if(!t)return(0,W.jsx)(`div`,{className:G.windowCell},`${e.key}-${r}`);let i=(0,W.jsxs)(`div`,{className:G.windowCell,"data-rate-limited":t.rateLimitedAt!=null,children:[(0,W.jsxs)(k,{horizontal:!0,justify:`space-between`,style:{minWidth:0,width:`100%`},children:[(0,W.jsx)(`span`,{children:(0,H.default)(t.windowStartAt).format(`HH:mm`)}),(0,W.jsxs)(`strong`,{children:[Math.round(t.peakUtilization),`%`]})]}),(0,W.jsx)(Qi,{utilization:t.peakUtilization})]},`${e.key}-${t.resetsAt}`);return(0,W.jsx)(v,{title:$i(t,n).join(` · `),children:i},`${e.key}-${t.resetsAt}`)}))]})]})}return(0,W.jsxs)(k,{className:G.sectionPanel,gap:6,children:[(0,W.jsxs)(k,{horizontal:!0,align:`baseline`,justify:`space-between`,children:[(0,W.jsx)(L,{strong:!0,style:{fontSize:13},children:n(`heteroAgent.claudeQuota.calendar.weeklyHistory`)}),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:n(`heteroAgent.claudeQuota.calendar.weeklyHistoryHint`)})]}),(0,W.jsx)(k,{children:t.map(e=>(0,W.jsxs)(`div`,{className:G.windowListRow,children:[(0,W.jsxs)(k,{horizontal:!0,align:`baseline`,gap:6,children:[(0,W.jsxs)(L,{style:{fontSize:11,whiteSpace:`nowrap`},children:[(0,H.default)(e.windowStartAt).format(`M/D`),` – `,(0,H.default)(e.resetsAt).format(`M/D`)]}),e.isLive&&(0,W.jsx)(L,{style:{fontSize:10,whiteSpace:`nowrap`},type:`secondary`,children:n(`heteroAgent.claudeQuota.calendar.currentWindow`)})]}),(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(k,{flex:1,style:{minWidth:0},children:(0,W.jsx)(Qi,{utilization:e.peakUtilization})}),(0,W.jsxs)(L,{strong:!0,style:{flex:`none`,fontSize:12,textAlign:`right`,width:34},children:[Math.round(e.peakUtilization),`%`]})]}),e.tokens>0?(0,W.jsx)(v,{title:$i(e,n).join(` · `),children:(0,W.jsxs)(L,{style:{fontSize:11,textAlign:`right`},type:`secondary`,children:[Li(e.tokens),` · `,Yi(e,n,!0)]})}):(0,W.jsx)(v,{title:n(`heteroAgent.claudeQuota.calendar.noLedgerSpendHint`),children:(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:4,justify:`flex-end`,children:[(0,W.jsx)(S,{color:P.colorTextTertiary,icon:I,size:11}),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:n(`heteroAgent.claudeQuota.calendar.noLedgerSpendShort`)})]})})]},e.resetsAt))})]})}),ea.displayName=`WindowHistory`,ta=(0,U.memo)(({externalAccountId:e})=>{let{t}=o(`chat`),[n,r]=(0,U.useState)(!1),[i,a]=(0,U.useState)(!0),[s,c]=(0,U.useState)([]),[l,u]=(0,U.useState)([]),[d,f]=(0,U.useState)([]),[p,m]=(0,U.useState)(fi),[h,g]=(0,U.useState)(()=>(0,H.default)().startOf(`month`)),_=Date.now();(0,U.useEffect)(()=>{let t=!1;return(async()=>{let n=gi((await z.listAccounts().catch(()=>[])).filter(e=>e.provider===`claude-code`),e);if(!n){t||r(!0);return}r(!1);let[i,a,o]=await Promise.all([z.getWindows(n.id,200).catch(()=>[]),z.listSnapshots(n.id,Wi).catch(()=>[]),z.listUsageTurns(n.id,Wi).catch(()=>[])]);t||(f(Vi(i)),c(a),u(o))})().finally(()=>a(!1)),()=>{t=!0}},[e]);let y=(0,U.useMemo)(()=>{let e=[...new Set(s.filter(e=>e.limitType.startsWith(`weekly`)&&e.scopeKey).map(e=>e.scopeKey))].sort();return[{label:t(`heteroAgent.claudeQuota.calendar.sessionWindow`),value:`session:`},{label:t(`heteroAgent.quota.weekly`),value:`weekly:`},...e.map(e=>({label:t(`heteroAgent.claudeQuota.scopedWeekly`,{model:e}),value:`weekly:${e}`}))]},[s,t]),b=(0,U.useMemo)(()=>Si(l),[l]),x=(0,U.useMemo)(()=>Ci(s,p),[s,p]),C=(0,U.useMemo)(()=>Ti(b,x),[x,b]),w=(0,U.useMemo)(()=>[...d,...Vi(ii(s))],[s,d]),T=(0,U.useMemo)(()=>{let e=Di(s,p,_);if(e)return e;let t=w.filter(e=>e.seriesId===pi(p));return t.length>0?t.reduce((e,t)=>e.resetsAt>t.resetsAt?e:t):null},[w,s,p]),E=(0,U.useMemo)(()=>Ni(w.filter(e=>e.seriesId===pi(p)),T,l,_,p.type===`session`?40:8),[w,T,l,p]),D=(0,U.useMemo)(()=>{if(p.type===`session`)return new Map;let e=new Map;for(let t of d)t.seriesId===pi(p)&&e.set(di(t.resetsAt),t.resetsAt);return T&&T.resetsAt>_&&e.set(di(T.resetsAt),T.resetsAt),e},[d,p,T]),O=(0,U.useMemo)(()=>new Set(d.filter(e=>e.seriesId===pi(p)&&e.rateLimitedAt!=null).map(e=>di(e.rateLimitedAt))),[d,p]),A=(0,U.useMemo)(()=>Ii(h),[h]),j=(0,U.useMemo)(()=>Array.from({length:7},(e,t)=>(0,H.default)().day((t+1)%7).format(`dd`)),[]),ee=di(_),te=h.subtract(1,`month`),ne=h.add(1,`month`);if(i)return(0,W.jsxs)(k,{gap:12,children:[(0,W.jsx)(Ue.Button,{active:!0,block:!0,style:{height:170}}),(0,W.jsx)(Ue.Button,{active:!0,block:!0,style:{height:320}})]});if(s.length===0&&d.length===0)return(0,W.jsx)(L,{style:{paddingBlock:24,textAlign:`center`},type:`secondary`,children:t(n?`heteroAgent.claudeQuota.calendar.accountUnavailable`:`heteroAgent.claudeQuota.calendar.empty`)});let re=(e,n)=>{let r=e&&(e.cost>0||e.hasUnpricedTurn)?Yi(e,t,!0):``,i=e&&e.tokens>0?Li(e.tokens):``,a=!i&&n>0?`${Math.round(n)}%`:``,o=i||a;return r?{primary:r,secondary:o}:{primary:o,secondary:``}},ie=!!T||E.length>0;return(0,W.jsx)(`div`,{className:G.root,children:(0,W.jsxs)(`div`,{className:G.layout,"data-single":!ie,children:[(0,W.jsxs)(k,{gap:16,children:[(0,W.jsx)(Ne,{options:y,size:`small`,style:{alignSelf:`flex-start`},value:pi(p),onChange:e=>{let[t,n=``]=String(e).split(`:`);m({scopeKey:n,type:t===`session`?`session`:`weekly`})}}),T&&(0,W.jsx)(Xi,{now:_,readings:s,series:p,turns:l,window:T}),(0,W.jsx)(ea,{series:p,stats:E})]}),(0,W.jsxs)(k,{className:G.sectionPanel,gap:8,children:[(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:4,justify:`space-between`,children:[(0,W.jsxs)(k,{horizontal:!0,align:`baseline`,gap:8,children:[(0,W.jsx)(L,{strong:!0,style:{fontSize:13},children:t(`heteroAgent.claudeQuota.calendar.monthSpend`)}),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:h.format(`YYYY/MM`)})]}),(0,W.jsxs)(k,{horizontal:!0,gap:2,children:[(0,W.jsx)(ae,{disabled:!_i(te,_),icon:xe,size:`small`,onClick:()=>g(e=>e.subtract(1,`month`))}),(0,W.jsx)(ae,{disabled:!_i(ne,_),icon:Ce,size:`small`,onClick:()=>g(e=>e.add(1,`month`))})]})]}),(0,W.jsxs)(`div`,{className:G.calendarGrid,children:[j.map(e=>(0,W.jsx)(`div`,{className:G.weekday,children:e},e)),A.map(e=>{let n=b.get(e.key),r=x.get(e.key)??0,i=D.get(e.key),a=O.has(e.key),o=C.get(e.key)??0,{primary:s,secondary:c}=re(n,r),l=[n&&n.tokens>0&&t(`heteroAgent.claudeQuota.calendar.dayTokens`,{cost:Yi(n,t),tokens:Li(n.tokens)}),r>0&&t(`heteroAgent.claudeQuota.calendar.dayShare`,{percent:Math.round(r)}),i&&t(`heteroAgent.claudeQuota.calendar.resetAt`,{time:(0,H.default)(i).format(`HH:mm`)}),a&&t(`heteroAgent.claudeQuota.calendar.rateLimited`)].filter(Boolean),u=(0,W.jsxs)(`div`,{className:G.dayCell,"data-in-month":e.inMonth,"data-rate-limited":a,"data-today":e.key===ee,children:[(0,W.jsx)(`span`,{"data-day-number":!0,children:e.date.date()}),Ei(o,a)&&(0,W.jsx)(`span`,{"aria-hidden":!0,className:G.heatDot,"data-heat":o}),(0,W.jsxs)(`span`,{className:G.dayFooter,children:[(0,W.jsx)(`span`,{className:G.cost,children:s}),(0,W.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:2},children:[a&&(0,W.jsx)(S,{color:P.colorError,icon:ge,size:12}),i&&(0,W.jsx)(S,{color:P.colorTextSecondary,icon:pe,size:11})]})]}),c&&(0,W.jsx)(`span`,{"data-day-secondary":!0,className:G.tokens,children:c})]},e.key);return l.length>0?(0,W.jsx)(v,{title:l.join(` · `),children:u},e.key):u})]}),(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:12,style:{fontSize:11},wrap:`wrap`,children:[(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:4,children:[(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.legendLess`)}),[1,2,3,4].map(e=>(0,W.jsx)(`span`,{className:G.heatDot,"data-heat":e,"data-legend":`true`},e)),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.legendMore`)})]}),(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:4,children:[(0,W.jsx)(`span`,{className:G.legendSwatch,"data-rate-limited":`true`}),(0,W.jsx)(S,{color:P.colorError,icon:ge,size:11}),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.rateLimited`)})]}),p.type!==`session`&&(0,W.jsxs)(k,{horizontal:!0,align:`center`,gap:4,children:[(0,W.jsx)(S,{color:P.colorTextSecondary,icon:pe,size:11}),(0,W.jsx)(L,{style:{fontSize:11},type:`secondary`,children:t(`heteroAgent.claudeQuota.calendar.legendReset`)})]})]})]})]})})}),ta.displayName=`QuotaCalendar`,na=(e={})=>Pe({content:(0,W.jsx)(ta,{externalAccountId:e.externalAccountId}),footer:null,title:i(`heteroAgent.claudeQuota.calendar.title`,{ns:`chat`}),width:1040})})),ia=e((()=>{ra()})),K,q,aa,oa,sa,ca,la,ua,da,fa=e((()=>{oi(),He(),Re(),F(),r(),Me(),K=t(m()),a(),jn(),q=t(f()),aa=N(({css:e})=>({footer:e`
    margin-block-start: 4px;
    padding-block-start: 10px;
    border-block-start: 1px solid ${P.colorBorderSecondary};
  `,hint:e`
    font-size: 12px;
    color: ${P.colorTextTertiary};
  `,interactive:e`
    display: contents;
  `,radioGroup:e`
    width: 100%;

    > label {
      width: 100%;
    }

    > label > span:last-child {
      flex: 1;
      min-width: 0;
    }
  `,routing:e`
    padding-block: 6px;
    padding-inline: 10px;
    border-radius: ${P.borderRadius};

    font-size: 12px;
    color: ${P.colorTextSecondary};

    background: ${P.colorFillQuaternary};
  `,row:e`
    padding-block: 6px;
    padding-inline: 4px;
    border-radius: ${P.borderRadius};

    &:hover {
      background: ${P.colorFillQuaternary};
    }

    &[data-off='true'] {
      opacity: 0.5;
    }
  `})),oa=`auto`,sa=e=>Math.min(100,Math.max(0,Math.round(e))),ca=(e,t=Date.now())=>{let n=e.find(e=>Yr(e));return n?sa(100-Kr(n,t)):void 0},la=e=>e.label||e.email||e.externalAccountId,ua=(0,K.memo)(({agentId:e})=>{let{t}=o(`chat`),[n,r]=(0,K.useState)([]),[a,s]=(0,K.useState)([]),[c,l]=(0,K.useState)({}),[u,d]=(0,K.useState)(!1),[f,p]=(0,K.useState)(null),[m,h]=(0,K.useState)(null),[g,_]=(0,K.useState)(``),v=(0,K.useCallback)(async()=>{let[t,n]=await Promise.all([z.listAccounts(),z.listBindings(e)]);r(t),s(n);let i=await Promise.all(t.map(async e=>{let t=await z.getLatestReadings(e.id).catch(()=>[]);return[e.id,ca(t)]}));l(Object.fromEntries(i))},[e]);(0,K.useEffect)(()=>{v().catch(()=>{})},[v]);let y=(0,K.useCallback)(e=>a.find(t=>t.accountId===e)?.role,[a]),b=(0,K.useCallback)(e=>a.find(t=>t.accountId===e),[a]),x=(0,K.useCallback)(e=>{let t=y(e);return t===`pinned`||t===`pool`},[y]),C=a.find(e=>e.role===`pinned`)?.accountId,w=C??oa,T=f??w,E=f!==null&&f!==w,D=(0,K.useCallback)(async e=>{d(!0);try{await e(),await v()}finally{d(!1)}},[v]),O=(0,K.useMemo)(()=>{if(T!==oa)return null;let e=n.filter(e=>x(e.id));return e.length===0?null:[...e].sort((e,t)=>(c[t.id]??100)-(c[e.id]??100))[0].id},[T,n,x,c]),A=n.find(e=>e.id===O),ee=(0,K.useCallback)(()=>D(async()=>{let t=f;t!==null&&(t===oa?C&&await z.bindAccount(e,C,`pool`):(a.some(e=>e.accountId===t)||await z.bindAccount(e,t,`pool`),await z.switchAccount(e,t)))}).then(()=>p(null)),[e,a,f,C,D]),te=(0,K.useCallback)((t,n)=>D(()=>z.bindAccount(e,t,n?`pool`:`disabled`)),[e,D]),ne=(0,K.useCallback)(e=>{let t=b(e);if(t)return f===e&&p(null),D(()=>z.unbindAccount(t.id))},[b,f,D]),re=(0,K.useCallback)(e=>{h(e.id),_(e.label??``)},[]),ie=(0,K.useCallback)(e=>D(()=>z.updateAccount(e,{label:g.trim()||void 0})).then(()=>h(null)),[g,D]),oe=(0,K.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]);return(0,q.jsxs)(k,{gap:2,children:[(0,q.jsx)(Ie,{className:aa.radioGroup,gap:2,horizontal:!1,value:T,options:[{disabled:u,label:(0,q.jsxs)(k,{className:aa.row,gap:4,children:[(0,q.jsx)(L,{style:{fontSize:13},children:t(`heteroAgent.claudeQuota.manage.modeAuto`)}),T===oa&&(0,q.jsxs)(k,{horizontal:!0,align:`center`,className:aa.routing,gap:6,children:[(0,q.jsx)(S,{icon:me,size:14}),A?t(`heteroAgent.claudeQuota.manage.autoRoutingTo`,{account:la(A)}):t(`heteroAgent.claudeQuota.manage.autoNoAccount`)]})]}),value:oa},...n.map(e=>{let n=x(e.id),r=c[e.id],i=m===e.id,a=[{icon:(0,q.jsx)(S,{icon:_e}),key:`edit`,label:t(`heteroAgent.claudeQuota.manage.edit`),onClick:()=>re(e)},{type:`divider`},{danger:!0,disabled:!b(e.id),icon:(0,q.jsx)(S,{icon:Se}),key:`remove`,label:t(`heteroAgent.claudeQuota.manage.remove`),onClick:()=>void ne(e.id)}];return{disabled:u||!n||i,label:(0,q.jsx)(k,{horizontal:!0,align:`center`,className:aa.row,"data-off":!n,gap:8,children:i?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Be,{autoFocus:!0,size:`small`,style:{flex:1},value:g,placeholder:e.email||t(`heteroAgent.claudeQuota.manage.labelPlaceholder`),onChange:e=>_(e.target.value),onPressEnter:()=>void ie(e.id)}),(0,q.jsx)(ae,{disabled:u,icon:Oe,size:`small`,onClick:()=>void ie(e.id)}),(0,q.jsx)(ae,{icon:be,size:`small`,onClick:()=>h(null)})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(k,{flex:1,gap:0,style:{minWidth:0},children:[(0,q.jsxs)(k,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:[(0,q.jsx)(L,{ellipsis:!0,style:{fontSize:13},children:la(e)}),e.planTier&&(0,q.jsx)(L,{style:{flex:`none`,fontSize:12},type:`secondary`,children:e.planTier})]}),n&&r!=null&&(0,q.jsx)(L,{style:{fontSize:12},type:`secondary`,children:r===0?t(`heteroAgent.claudeQuota.manage.exhausted`):t(`heteroAgent.claudeQuota.manage.weeklyLeft`,{percent:r})})]}),(0,q.jsx)(`span`,{className:aa.interactive,onClick:oe,children:(0,q.jsx)(le,{checked:n,disabled:u,size:`small`,onChange:t=>void te(e.id,t)})}),(0,q.jsx)(`span`,{className:aa.interactive,onClick:oe,children:(0,q.jsx)(j,{items:a,placement:`bottomRight`,children:(0,q.jsx)(ae,{icon:je,size:`small`,title:t(`heteroAgent.claudeQuota.manage.more`)})})})]})}),value:e.id}})],onChange:p}),n.length===0&&(0,q.jsx)(L,{className:aa.hint,children:t(`heteroAgent.claudeQuota.manage.empty`)}),E?(0,q.jsxs)(k,{horizontal:!0,className:aa.footer,gap:8,justify:`flex-end`,children:[(0,q.jsx)(M,{disabled:u,onClick:()=>p(null),children:i(`cancel`,{ns:`common`})}),(0,q.jsx)(M,{loading:u,type:`primary`,onClick:()=>void ee(),children:t(`heteroAgent.claudeQuota.manage.confirmSwitch`)})]}):(0,q.jsx)(L,{className:aa.hint,style:{marginBlockStart:4},children:t(`heteroAgent.claudeQuota.manage.addHint`)})]})}),ua.displayName=`QuotaAccountManager`,da=e=>Pe({content:(0,q.jsx)(ua,{agentId:e}),footer:null,title:i(`heteroAgent.claudeQuota.manage.title`,{ns:`chat`}),width:460})})),pa,ma,ha,ga,_a=e((()=>{He(),Re(),F(),Me(),pa=t(m()),a(),ia(),an(),fa(),ma=t(f()),ha=N(({css:e})=>({bottom:e`
    padding-block-start: 8px;
    border-block-start: 1px solid ${P.colorBorderSecondary};
  `,top:e`
    padding-block-end: 8px;
    border-block-end: 1px solid ${P.colorBorderSecondary};
  `})),ga=(0,pa.memo)(({snapshot:e,placement:t=`top`})=>{let{t:n}=o(`chat`),r=nn(),i=e.identity,a=(0,pa.useCallback)(()=>{r&&da(r)},[r]);return r?(0,ma.jsxs)(k,{horizontal:!0,align:`center`,className:t===`top`?ha.top:ha.bottom,gap:8,justify:`space-between`,children:[(0,ma.jsxs)(k,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:[(0,ma.jsx)(L,{ellipsis:!0,style:{fontSize:12},children:i?.displayName||i?.email||n(`heteroAgent.claudeQuota.accounts`)}),i?.planTier&&(0,ma.jsx)(L,{style:{flex:`none`,fontSize:12},type:`secondary`,children:i.planTier}),(0,ma.jsx)(ae,{icon:fe,size:`small`,style:{flex:`none`},title:n(`heteroAgent.claudeQuota.calendar.entry`),onClick:()=>na({externalAccountId:i?.externalAccountId})})]}),(0,ma.jsx)(M,{size:`small`,style:{flex:`none`},onClick:a,children:n(`heteroAgent.claudeQuota.manage.entry`)})]}):null}),ga.displayName=`QuotaAccountSwitcher`})),J,Y,va,ya,X,ba,xa,Sa,Ca,wa,Ta,Ea=e((()=>{He(),Re(),F(),Me(),J=t(m()),a(),Y=t(f()),va=6e4,ya=6e4,X=N(({css:e})=>({compactItem:e`
    color: inherit;

    &[data-quota-level='low'] {
      color: ${P.colorWarningText};
    }
  `,compactItems:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;
  `,compactSeparator:e`
    color: ${P.colorTextQuaternary};
  `,emptyState:e`
    padding-block: 10px;
    font-size: 12px;
    color: ${P.colorTextDescription};
  `,error:e`
    padding: 8px;
    border: 1px solid ${P.colorErrorBorder};
    border-radius: ${P.borderRadius};

    font-size: 12px;
    color: ${P.colorError};

    background: ${P.colorErrorBg};
  `,refreshNotice:e`
    padding: 8px;
    border: 1px solid ${P.colorWarningBorder};
    border-radius: ${P.borderRadius};

    font-size: 12px;
    color: ${P.colorWarningText};

    background: ${P.colorWarningBg};
  `,header:e`
    padding-block-end: 6px;
    border-block-end: 1px solid ${P.colorBorderSecondary};
  `,popover:e`
    width: 292px;
  `,progressFill:e`
    height: 100%;
    border-radius: inherit;
    background: ${P.colorSuccess};
  `,progressFillWarning:e`
    background: ${P.colorWarning};
  `,progressTrack:e`
    overflow: hidden;
    flex: 1;

    min-width: 24px;
    height: 6px;
    border-radius: 999px;

    background: ${P.colorFillQuaternary};
  `,resetShort:e`
    flex: none;
    white-space: nowrap;
  `,trigger:e`
    cursor: pointer;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 4px;
    border: 0;
    border-radius: 4px;

    font: inherit;
    font-size: 12px;
    color: ${P.colorTextSecondary};
    white-space: nowrap;

    appearance: none;
    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: ${P.colorTextSecondary};
      background: ${P.colorFillTertiary};
    }

    &[data-quota-level='low'] {
      color: ${P.colorWarningText};

      &:hover {
        color: ${P.colorWarningText};
      }
    }
  `,triggerOpen:e`
    color: ${P.colorTextSecondary};
    background: ${P.colorFillSecondary};
  `,value:e`
    flex: none;
    font-variant-numeric: tabular-nums;
    color: ${P.colorText};
  `,valueWarning:e`
    color: ${P.colorWarningText};
  `,window:e`
    min-width: 0;
  `,windowExhausted:e`
    /* nothing to act on until reset → grey the whole row out */
    opacity: 0.45;
  `,windowLabel:e`
    flex: none;
    width: 84px;
    color: ${P.colorTextSecondary};
  `})),ba=e=>Math.min(100,Math.max(0,Math.round(e))),xa=15,Sa=e=>e<xa,Ca=e=>!e||typeof e==`string`?e??null:Object.entries(e).sort(([e],[t])=>e.localeCompare(t)),wa=(...e)=>JSON.stringify(e.map(e=>Ca(e))),Ta=({autoRefreshMs:e,contentWidth:t,createErrorSnapshot:n,fetchQuota:r,getErrorText:i,getRefreshErrorText:a,getUnavailableText:s,getWindows:c,hasExtraData:l,renderFooter:u,renderHeader:d,sourceKey:f=`default`,title:p,tooltip:m})=>{let{t:h}=o(`chat`),[g,_]=(0,J.useState)(!1),[y,b]=(0,J.useState)(!1),[x,C]=(0,J.useState)(null),[w,T]=(0,J.useState)(null),[E,D]=(0,J.useState)(()=>Date.now()),O=(0,J.useRef)(0),A=(0,J.useRef)(null),j=(0,J.useRef)(0),ee=(0,J.useRef)(f),ne=(0,J.useCallback)(e=>e?c(e).some(e=>e.window)||!!l?.(e):!1,[c,l]),re=(0,J.useCallback)(e=>{A.current=e,C(e)},[]),ie=(0,J.useCallback)(e=>{ee.current===f&&(j.current+=1,b(!1),T(null),re(e))},[re,f]),oe=(0,J.useCallback)((e,t)=>e===j.current&&t===ee.current,[]),se=(0,J.useCallback)((e,t={},n=j.current,r=ee.current)=>{if(oe(n,r)){if(e.status===`error`){if(O.current=Date.now(),ne(A.current)){t.manual&&T(e);return}}else O.current=0;T(null),re(e)}},[ne,oe,re]),M=(0,J.useCallback)(async(e={})=>{let t=ee.current,i=j.current+1;j.current=i,T(null),b(!0);try{se(await r({...e.manual?{force:!0}:{},...e.revalidate?{revalidate:!0}:{},onInterim:e=>{oe(i,t)&&re(e)}}),e,i,t)}catch(r){console.error(`Failed to fetch agent quota:`,r),se(n(r),e,i,t)}finally{oe(i,t)&&b(!1)}},[se,n,r,oe,re]);(0,J.useEffect)(()=>{ee.current=f,A.current=null,O.current=0,C(null),T(null)},[f]),(0,J.useEffect)(()=>{M()},[M,f]),(0,J.useEffect)(()=>{let e=window.setInterval(()=>D(Date.now()),va);return()=>{window.clearInterval(e)}},[]),(0,J.useEffect)(()=>{if(!e)return;let t=window.setInterval(()=>{if(document.visibilityState===`hidden`||y)return;let t=Date.now();O.current>0&&t-O.current<ya||x&&t-x.updatedAt<e||M({revalidate:!0})},e);return()=>{window.clearInterval(t)}},[e,M,y,x]),(0,J.useEffect)(()=>{let e=()=>{if(document.visibilityState===`hidden`||y)return;let e=Date.now();O.current>0&&e-O.current<ya||x&&e-x.updatedAt<=va||M({revalidate:!0})};return window.addEventListener(`focus`,e),document.addEventListener(`visibilitychange`,e),()=>{window.removeEventListener(`focus`,e),document.removeEventListener(`visibilitychange`,e)}},[M,y,x]);let ce=(0,J.useCallback)(e=>{if(e<=0)return;let t=Math.floor(e/6e4),n=Math.floor(t/1440),r=Math.floor(t%1440/60),i=t%60,a=[];return n>0&&a.push(h(`heteroAgent.quota.duration.day`,{count:n})),r>0&&a.push(h(`heteroAgent.quota.duration.hour`,{count:r})),i>0&&a.length<2&&a.push(h(`heteroAgent.quota.duration.minute`,{count:i})),a.slice(0,2).join(` `)||void 0},[h]),le=(0,J.useCallback)(e=>{let t=ce(E-e);return t?h(`heteroAgent.quota.updatedAgo`,{duration:t}):h(`heteroAgent.quota.updatedJustNow`)},[ce,E,h]),ue=x?c(x):[],N=new Map;for(let e of ue){if(!e.window)continue;let t=ba(100-e.window.usedPercent),n=e.compactGroup??`default`,r=N.get(n);(!r||t<r.leftPercent)&&N.set(n,{key:n,label:e.compactLabel,leftPercent:t})}let P=[...N.values()],F=ne(x),fe=w&&(a?.(w)||h(`heteroAgent.quota.refreshFailed`)),pe=x?.status===`error`&&F?a?.(x)||h(`heteroAgent.quota.refreshFailed`):void 0,I=fe||pe,me=(0,J.useCallback)(e=>{if(_(e),!e||y)return;let t=Date.now(),n=O.current>0&&t-O.current<ya;(!x||t-x.updatedAt>va)&&!n&&M({revalidate:!0})},[M,y,x]),he=({key:e,label:t,window:n})=>{if(!n)return null;let r=ba(100-n.usedPercent),i=n.resetsAt?ce(n.resetsAt-E):void 0,a=r===0,o=!a&&Sa(r);return(0,Y.jsxs)(k,{horizontal:!0,align:`center`,className:de(X.window,a&&X.windowExhausted),gap:8,children:[(0,Y.jsx)(L,{ellipsis:!0,className:X.windowLabel,style:{fontSize:12},children:t}),(0,Y.jsx)(`div`,{className:X.progressTrack,children:(0,Y.jsx)(`div`,{className:de(X.progressFill,o&&X.progressFillWarning),"data-quota-level":o?`low`:`normal`,style:{width:`${r}%`}})}),(0,Y.jsx)(L,{className:de(X.value,o&&X.valueWarning),style:{fontSize:12},children:a?h(`heteroAgent.quota.exhausted`):`${r}%`}),i&&(0,Y.jsx)(L,{className:X.resetShort,style:{fontSize:12},type:`secondary`,children:i})]},e)},ge=(0,Y.jsxs)(k,{className:X.popover,gap:10,style:{width:t},children:[(0,Y.jsxs)(k,{horizontal:!0,align:`center`,className:X.header,gap:8,justify:`space-between`,children:[(0,Y.jsxs)(k,{horizontal:!0,align:`baseline`,gap:6,style:{minWidth:0},children:[(0,Y.jsx)(L,{strong:!0,style:{fontSize:13},children:p}),x?.updatedAt&&(0,Y.jsx)(L,{ellipsis:!0,style:{fontSize:11},type:`secondary`,children:le(x.updatedAt)})]}),(0,Y.jsx)(v,{title:h(`heteroAgent.quota.refresh`),children:(0,Y.jsx)(ae,{disabled:y,icon:we,size:`small`,onClick:()=>void M({manual:!0})})})]}),y&&!F?(0,Y.jsxs)(k,{gap:8,children:[(0,Y.jsx)(Ue.Button,{active:!0,block:!0,size:`small`,style:{height:18}}),(0,Y.jsx)(Ue.Button,{active:!0,block:!0,size:`small`,style:{height:18}}),(0,Y.jsx)(Ue.Button,{active:!0,block:!0,size:`small`,style:{height:18}})]}):x?.status===`unavailable`?(0,Y.jsx)(`div`,{className:X.emptyState,children:s?.(x)||x.error||h(`heteroAgent.quota.unavailable`)}):x?.status===`error`&&!F?(0,Y.jsx)(`div`,{className:X.error,children:i?.(x)||x.error||h(`heteroAgent.quota.unavailable`)}):F?(0,Y.jsxs)(Y.Fragment,{children:[x&&d?.(x,{applyQuota:ie,formatDuration:ce,now:E}),(0,Y.jsx)(k,{gap:10,children:ue.map(e=>he(e))}),x&&u?.(x,{applyQuota:ie,formatDuration:ce,now:E}),I&&(0,Y.jsx)(`div`,{className:X.refreshNotice,children:I})]}):(0,Y.jsx)(`div`,{className:X.emptyState,children:h(`heteroAgent.quota.noData`)})]}),_e=(0,Y.jsxs)(`button`,{"aria-expanded":g,"aria-haspopup":`dialog`,"aria-label":m,className:de(X.trigger,g&&X.triggerOpen),type:`button`,"data-quota-level":P.length===1?Sa(P[0].leftPercent)?`low`:`normal`:void 0,children:[(0,Y.jsx)(S,{icon:Ae,size:14}),P.length>0&&(0,Y.jsx)(`span`,{className:X.compactItems,children:P.map((e,t)=>(0,Y.jsxs)(`span`,{children:[t>0&&(0,Y.jsx)(`span`,{"aria-hidden":!0,className:X.compactSeparator,children:` · `}),(0,Y.jsxs)(`span`,{className:X.compactItem,"data-quota-level":P.length>1?Sa(e.leftPercent)?`low`:`normal`:void 0,children:[e.label&&`${e.label} `,e.leftPercent===0&&!e.label?h(`heteroAgent.quota.exhausted`):h(`heteroAgent.quota.compactLeft`,{percent:e.leftPercent})]})]},e.key))}),(0,Y.jsx)(S,{icon:Te,size:12})]});return(0,Y.jsx)(te,{content:ge,open:g,placement:`topRight`,trigger:`click`,onOpenChange:me,children:(0,Y.jsx)(`div`,{children:g?_e:(0,Y.jsx)(v,{title:m,children:_e})})})}})),Da,Oa,ka,Aa,ja,Ma,Na,Pa=e((()=>{oi(),Da=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():Date.parse(e);return Number.isNaN(t)?null:t},Oa=e=>({displayName:e.displayName??void 0,email:e.email??void 0,externalAccountId:e.externalAccountId??void 0,organizationId:e.organizationId??void 0,planTier:e.planTier??void 0,rateLimitTier:e.rateLimitTier??void 0}),ka=e=>e.reduce((e,t)=>Math.max(e,t.capturedAt),0),Aa=(e,t)=>{let n=e.externalAccountId;return n?t.identity?.externalAccountId===n:!0},ja=(e,t,n,r=Date.now())=>{let i=n?.status===`ok`&&Aa(e,n)?n:null,a=Qr(i?.readings?.length?[...t,...i.readings]:t,r),o=Da(e.updatedAt)??0,s=i?Math.max(o,i.updatedAt):o;return{error:null,identity:Oa(e),provider:`claude-code`,scopedWeekly:a.scopedWeekly??i?.scopedWeekly??null,session:a.session??i?.session??null,status:`ok`,updatedAt:s||r,weekly:a.weekly??i?.weekly??null}},Ma=e=>!!e.session||!!e.weekly||!!e.scopedWeekly,Na=(e,t,n)=>{let r=Da(e);return r===null||t-r>n}})),Fa,Ia,La,Ra,za,Ba,Va,Ha=e((()=>{Fa=t(m()),a(),an(),Lt(),jn(),Fr(),_a(),Ea(),Pa(),Ia=t(f()),La=120*1e3,Ra=e=>({error:e instanceof Error?e.message:String(e),provider:`claude-code`,scopedWeekly:null,session:null,status:`error`,updatedAt:Date.now(),weekly:null}),za=e=>({error:null,provider:`claude-code`,reason:e,scopedWeekly:null,session:null,status:`unavailable`,updatedAt:Date.now(),weekly:null}),Ba=e=>e.error?.includes(`429`)??!1,Va=(0,Fa.memo)(({deviceId:e,env:t})=>{let{t:n}=o(`chat`),r=nn(),i=wa(`claude-code`,e??`local`,t),a=Ht(()=>new Map),s=(0,Fa.useCallback)(async n=>{let i=!!n?.force,[o,s]=await Promise.all([z.listAccounts().catch(()=>[]),r?z.listBindings(r).catch(()=>[]):[]]),c=o,l=c.filter(e=>e.provider===`claude-code`),u=s.find(e=>e.role===`pinned`)?.accountId,d=e?a.get(e):void 0,f=e?l.find(e=>e.externalAccountId===d):l.find(e=>e.id===u)??l[0],p=f?await z.getLatestReadings(f.id).catch(()=>[]):[],m=null;if(i||n?.revalidate||e&&!d||Na(f?.updatedAt,Date.now(),La)){if(f&&p.length>0){let e=ja(f,p,null);Ma(e)&&n?.onInterim?.(e)}m=await Pr({deviceId:e,env:t,force:i}).catch(()=>null);let r=m?.identity?.externalAccountId;if(m?.status===`ok`&&r&&m.readings?.length){e&&a.set(e,r);let t=m.readings.reduce((e,t)=>Math.max(e,t.capturedAt),0),n=l.find(e=>e.externalAccountId===r),i=n?await z.getLatestReadings(n.id).catch(()=>[]):[];n&&t<=ka(i)?(f=n,p=i):(await z.ingestClaudeSnapshot({deviceId:e,identity:m.identity,readings:m.readings}).catch(()=>{}),c=await z.listAccounts().catch(()=>c),l=c.filter(e=>e.provider===`claude-code`),f=l.find(e=>e.externalAccountId===r)??l.find(e=>e.id===u)??l[0],p=f?await z.getLatestReadings(f.id).catch(()=>p):p)}}let h=f?ja(f,p,m):null;return h&&Ma(h)?h:m??h??za()},[r,e,t,a]),c=(0,Fa.useCallback)(e=>[{compactGroup:`global`,compactLabel:n(`heteroAgent.quota.session`),key:`session`,label:n(`heteroAgent.quota.session`),window:e.session},{compactGroup:`global`,compactLabel:n(`heteroAgent.quota.weekly`),key:`weekly`,label:n(`heteroAgent.quota.weekly`),window:e.weekly},...e.scopedWeekly?[{compactGroup:`scopedWeekly`,compactLabel:e.scopedWeekly.modelName,key:`scopedWeekly`,label:n(`heteroAgent.claudeQuota.scopedWeekly`,{model:e.scopedWeekly.modelName}),window:e.scopedWeekly.window}]:[]],[n]),l=(0,Fa.useCallback)(e=>{switch(e.reason){case`credentials-expired`:return n(`heteroAgent.claudeQuota.unavailableExpired`);case`credentials-not-found`:return n(`heteroAgent.claudeQuota.unavailableNotFound`);case`external-auth`:return n(`heteroAgent.claudeQuota.unavailableExternalAuth`);default:return}},[n]);return(0,Ia.jsx)(Ta,{autoRefreshMs:La,createErrorSnapshot:Ra,fetchQuota:s,getErrorText:(0,Fa.useCallback)(e=>Ba(e)?n(`heteroAgent.claudeQuota.errorRateLimited`):n(`heteroAgent.claudeQuota.errorGeneric`),[n]),getRefreshErrorText:(0,Fa.useCallback)(e=>{if(Ba(e))return n(`heteroAgent.claudeQuota.refreshRateLimited`)},[n]),getUnavailableText:l,getWindows:c,renderHeader:e=>(0,Ia.jsx)(ga,{placement:`top`,snapshot:e}),sourceKey:i,title:n(`heteroAgent.claudeQuota.title`),tooltip:n(`heteroAgent.claudeQuota.tooltip`)})}),Va.displayName=`ClaudeCodeQuotaMenu`})),Z,Q,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa=e((()=>{wt(),He(),Re(),F(),Me(),Z=t(m()),a(),bn(),Ea(),Q=t(f()),Ua=300,Wa=10080,Ga=672*60,Ka=744*60,qa=e=>/error sending request for url|fetch failed|\b(?:ECONNREFUSED|ENOTFOUND|ETIMEDOUT)\b/i.test(e.error??``),Ja=N(({css:e})=>({credit:e`
    min-width: 0;
    padding-block: 8px;
    padding-inline: 10px;

    &:not(:last-child) {
      border-block-end: 1px solid ${P.colorBorderSecondary};
    }
  `,creditCollapse:e`
    width: 100%;
  `,creditExpiry:e`
    flex: none;
    text-align: end;
    white-space: nowrap;
  `,creditIndex:e`
    flex: 0 0 20px;
    font-variant-numeric: tabular-nums;
    color: ${P.colorTextTertiary};
    text-align: center;
  `,creditList:e`
    overflow: hidden;
    border: 1px solid ${P.colorBorderSecondary};
    border-radius: ${P.borderRadius};
    background: ${P.colorFillQuaternary};
  `,creditTitle:e`
    overflow: hidden;
    flex: 1;

    min-width: 0;

    text-overflow: ellipsis;
    white-space: nowrap;
  `,feedback:e`
    padding: 8px;
    border: 1px solid ${P.colorInfoBorder};
    border-radius: ${P.borderRadius};

    color: ${P.colorInfoText};

    background: ${P.colorInfoBg};

    &[data-kind='error'] {
      border-color: ${P.colorErrorBorder};
      color: ${P.colorErrorText};
      background: ${P.colorErrorBg};
    }

    &[data-kind='success'] {
      border-color: ${P.colorSuccessBorder};
      color: ${P.colorSuccessText};
      background: ${P.colorSuccessBg};
    }
  `,resetCredits:e`
    padding-block-start: 8px;
    border-block-start: 1px solid ${P.colorBorderSecondary};
  `})),Ya=e=>({error:e instanceof Error?e.message:String(e),provider:`codex`,rateLimitResetCredits:null,session:null,status:`error`,updatedAt:Date.now(),weekly:null}),Xa=(e,t)=>[...e??[]].filter(e=>e.status===`available`&&(e.expiresAt===null||e.expiresAt>t)).sort((e,t)=>{let n=(e.expiresAt??1/0)-(t.expiresAt??1/0);return n===0?(e.id??``).localeCompare(t.id??``):n}),Za=(0,Z.memo)(({command:e,env:t})=>{let{t:n}=o(`chat`),r=wa(`codex`,e,t),i=(0,Z.useRef)(r),a=(0,Z.useRef)(null),[s,c]=(0,Z.useState)(),[l,u]=(0,Z.useState)(!1);(0,Z.useEffect)(()=>{i.current=r,a.current=null,c(void 0),u(!1)},[r]);let d=(0,Z.useCallback)(n=>xn.getCodexQuota({command:e,env:t,...n?.force?{force:!0}:{}}),[e,t]),f=(0,Z.useCallback)((e,t)=>e?e.windowMinutes===Ua?n(`heteroAgent.codexQuota.fiveHour`):e.windowMinutes===Wa?n(`heteroAgent.quota.weekly`):e.windowMinutes>=Ga&&e.windowMinutes<=Ka?n(`heteroAgent.codexQuota.monthly`):t:t,[n]),p=(0,Z.useCallback)(e=>{let t=e.rateLimits?.find(e=>e.limitId.toLowerCase()===`codex`);return t?[{key:`${t.limitId}:primary`,label:f(t.primary,n(`heteroAgent.quota.session`)),window:t.primary},{key:`${t.limitId}:secondary`,label:f(t.secondary,n(`heteroAgent.quota.weekly`)),window:t.secondary}]:[{key:`primary`,label:f(e.session,n(`heteroAgent.quota.session`)),window:e.session},{key:`secondary`,label:f(e.weekly,n(`heteroAgent.quota.weekly`)),window:e.weekly}]},[f,n]),m=(0,Z.useCallback)(e=>!!e.rateLimitResetCredits,[]),h=(0,Z.useCallback)(e=>qa(e)?n(`heteroAgent.codexQuota.errorConnection`):n(`heteroAgent.codexQuota.errorGeneric`),[n]),_=(0,Z.useCallback)(async(r,o,s)=>{let l=a.current,d=l&&l.creditId===r?l:{...r?{creditId:r}:{},idempotencyKey:Tt()};a.current=d,c(void 0),u(!0);try{let r=await xn.consumeCodexRateLimitResetCredit({command:e,...d.creditId?{creditId:d.creditId}:{},env:t,idempotencyKey:d.idempotencyKey});if(i.current!==s)return;switch(o(r.quota),a.current=null,r.outcome){case`alreadyRedeemed`:case`reset`:{let e=n(`heteroAgent.codexQuota.resetSuccess`);c({kind:`success`,text:e}),g.success(e);break}case`nothingToReset`:c({kind:`info`,text:n(`heteroAgent.codexQuota.resetNothingToReset`)});break;case`noCredit`:c({kind:`error`,text:n(`heteroAgent.codexQuota.resetNoCredit`)});break}}catch(e){if(console.error(`Failed to consume Codex rate-limit reset credit:`,e),i.current!==s)return;let t=n(`heteroAgent.codexQuota.resetFailed`);c({kind:`error`,text:t}),g.error(t)}finally{i.current===s&&u(!1)}},[e,t,n]),v=(0,Z.useCallback)((e,t)=>{let i=r;Fe({cancelText:n(`cancel`,{ns:`common`}),content:n(`heteroAgent.codexQuota.resetConfirmDescription`),okText:n(`heteroAgent.codexQuota.resetNow`),onOk:()=>_(e,t,i),title:n(`heteroAgent.codexQuota.resetConfirmTitle`)})},[_,r,n]);return(0,Q.jsx)(Ta,{contentWidth:360,createErrorSnapshot:Ya,fetchQuota:d,getErrorText:h,getRefreshErrorText:h,getWindows:p,hasExtraData:m,renderFooter:(0,Z.useCallback)((e,{applyQuota:t,formatDuration:r,now:i})=>{let a=e.rateLimitResetCredits;if(!a)return(0,Q.jsx)(k,{className:Ja.resetCredits,gap:4,children:(0,Q.jsxs)(k,{horizontal:!0,align:`center`,gap:4,children:[(0,Q.jsx)(S,{icon:pe,size:14}),(0,Q.jsx)(L,{style:{fontSize:12},type:`secondary`,children:n(`heteroAgent.codexQuota.resetCreditsUnavailable`)})]})});let o=a.availableCount,c=Xa(a.credits,i).slice(0,o),u=c[0],d=Array.from({length:o},(e,t)=>({credit:c[t],index:t+1}));return(0,Q.jsx)(k,{className:Ja.resetCredits,children:(0,Q.jsx)(Ve,{className:Ja.creditCollapse,collapsible:o>0||!!s,defaultActiveKey:[],expandIconPlacement:`end`,padding:0,variant:`borderless`,items:[{children:(0,Q.jsxs)(k,{gap:8,children:[d.length>0&&(0,Q.jsx)(k,{className:Ja.creditList,children:d.map(({credit:e,index:t})=>{let o=t===1?a.nextExpiresAt:void 0,s=e?e.expiresAt:o,c=s?r(s-i):void 0;return(0,Q.jsxs)(k,{horizontal:!0,align:`center`,className:Ja.credit,gap:8,children:[(0,Q.jsx)(L,{className:Ja.creditIndex,style:{fontSize:12},children:`#${t}`}),(0,Q.jsx)(L,{strong:!0,className:Ja.creditTitle,style:{fontSize:12},children:e?.title||n(`heteroAgent.codexQuota.resetCreditTitle`)}),(0,Q.jsx)(L,{className:Ja.creditExpiry,style:{fontSize:12},type:`secondary`,children:s?c?n(`heteroAgent.codexQuota.expiresIn`,{duration:c}):n(`heteroAgent.codexQuota.expiresSoon`):n(e?`heteroAgent.codexQuota.doesNotExpire`:`heteroAgent.codexQuota.resetCreditDetailsUnavailable`)})]},e?.id??`reset-credit-${t}`)})}),s&&(0,Q.jsx)(`div`,{"aria-live":`polite`,className:Ja.feedback,"data-kind":s.kind,role:s.kind===`error`?`alert`:`status`,children:s.text}),o>0&&(0,Q.jsx)(M,{block:!0,icon:pe,loading:l,size:`small`,type:`primary`,onClick:()=>v(u?.id??void 0,t),children:n(l?`heteroAgent.codexQuota.resetting`:`heteroAgent.codexQuota.resetNow`)})]}),key:`reset-credits`,label:(0,Q.jsxs)(k,{gap:2,children:[(0,Q.jsxs)(k,{horizontal:!0,align:`center`,gap:4,children:[(0,Q.jsx)(S,{icon:pe,size:14}),(0,Q.jsx)(L,{strong:!0,style:{fontSize:12},children:n(`heteroAgent.codexQuota.resetCredits`,{count:o})})]}),a.totalEarnedCount!==void 0&&(0,Q.jsx)(L,{color:P.colorTextTertiary,style:{fontSize:12},children:n(`heteroAgent.codexQuota.totalEarned`,{count:a.totalEarnedCount})})]})}]})})},[v,s,l,n]),sourceKey:r,title:n(`heteroAgent.codexQuota.title`),tooltip:n(`heteroAgent.codexQuota.tooltip`)})}),Za.displayName=`CodexQuotaMenu`})),$a=e((()=>{Ha(),Qa()})),eo,to,no,ro,io=e((()=>{u(),gt(),He(),F(),Me(),eo=t(m()),a(),gn(),mn(),an(),hn(),$e(),Xt(),Xe(),Ze(),$a(),to=t(f()),no=N(({css:e})=>({bar:e`
    container: runtimebar / inline-size;
    flex: none;

    height: 28px;
    padding-block: 0;
    padding-inline: 4px;
  `,fullAccess:e`
    cursor: default;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 4px;
    border-radius: 4px;

    font-size: 12px;
    color: ${P.colorTextSecondary};
    white-space: nowrap;
  `,fullAccessLabel:e`
    @container runtimebar (width < 600px) {
      display: none;
    }
  `,sdkRuntime:e`
    cursor: default;

    display: flex;
    flex: none;
    gap: 6px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 4px;
    border-radius: 4px;

    font-size: 12px;
    color: ${P.colorInfo};
    white-space: nowrap;

    background: color-mix(in srgb, ${P.colorInfoBg} 55%, transparent);
  `,sdkRuntimeClosing:e`
    color: ${P.colorTextDescription};
    background: ${P.colorFillQuaternary};
  `,sdkRuntimeError:e`
    color: ${P.colorError};
    background: color-mix(in srgb, ${P.colorErrorBg} 55%, transparent);
  `,sdkRuntimeIdle:e`
    color: ${P.colorTextSecondary};
    background: ${P.colorFillQuaternary};
  `,sdkRuntimeMonitoring:e`
    color: ${P.colorWarning};
    background: color-mix(in srgb, ${P.colorWarningBg} 55%, transparent);
  `,sdkRuntimeStale:e`
    color: ${P.colorWarning};
    background: color-mix(in srgb, ${P.colorWarningBg} 55%, transparent);
  `,leftGroup:e`
    scrollbar-width: none;
    overflow: auto hidden;
    flex: 1;
    min-width: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  `,rightGroup:e`
    flex: none;
  `})),new Set([`starting`,`running`,`monitoring`,`idle`,`stale`,`closing`,`error`]),ro=(0,eo.memo)(()=>{let{t:e}=o(`chat`),t=nn(),{canConfigureResource:n,isAccessLoading:r}=_n(),[i,a]=(0,eo.useState)();yt(`heteroAgentRuntimeStatus`,e=>{e.transport===`claude-sdk`&&a(e)});let s=Qe(nt.isAgentConfigLoadingById(t)),{agencyConfig:c,workspaceScoped:l}=Yt(t),u=c?.heterogeneousProvider,d=tt(c,{clientExecutionAvailable:!1,isHetero:!!u,workspaceScoped:l}),f=d===`local`,p=(u?.authMode??`subscription`)===`subscription`,m=d===`device`?c?.boundDeviceId:void 0,h=p&&u?.type===`claude-code`&&(f||!!m);return r?null:n?t?(0,to.jsxs)(k,{horizontal:!0,align:`center`,className:no.bar,justify:`space-between`,children:[(0,to.jsx)(k,{horizontal:!0,align:`center`,className:no.leftGroup,gap:4,children:(0,to.jsx)(fn,{alwaysShowWorkspace:!0,agentId:t})}),h&&m&&(0,to.jsx)(k,{horizontal:!0,align:`center`,className:no.rightGroup,gap:4,children:(0,to.jsx)(Va,{deviceId:m,env:u?.env})})]}):null:!t||s?null:(0,to.jsx)(k,{horizontal:!0,align:`center`,className:no.bar,children:(0,to.jsx)(pn,{agentId:t})})}),ro.displayName=`HeteroControlBar`})),ao,oo,so,co,lo=e((()=>{ao=t(n()),oo=[1,3,8,24],so=10,co=(e,t=(0,ao.default)())=>{let n=t.add(e,`hour`).startOf(`hour`);return n.diff(t,`minute`)<so?n.add(1,`hour`):n}})),uo,fo,po,mo,ho=e((()=>{He(),F(),uo=t(n()),Me(),fo=t(m()),a(),dn(),en(),tn(),yn(),it(),Ct(),lo(),po=t(f()),mo=(0,fo.memo)(()=>{let{t:e}=o(`chat`),{t}=o(`editor`),[n,r]=(0,fo.useState)(!1),[i,a,s]=rn(e=>[e.editor,e.showTypoBar,e.setShowTypoBar]),c=kt(e=>e.scheduledSendAt),l=kt(e=>e.setScheduledSendAt),u=lt(St.enableTopicAcceptance),d=(0,fo.useCallback)(e=>{l(co(e).toISOString()),r(!1)},[l]),f=(0,fo.useMemo)(()=>{let n=c?oo.find(e=>co(e).isSame((0,uo.default)(c),`minute`)):void 0;return[{children:oo.map(t=>({extra:n===t?(0,po.jsx)(S,{icon:Oe,size:16,style:{color:P.colorSuccess}}):(0,po.jsx)(`span`,{style:{color:P.colorTextTertiary,fontSize:12},children:co(t).format(`MM-DD HH:mm`)}),key:`scheduleSend-${t}h`,label:e(`input.schedule.inHours`,{count:t}),onClick:()=>d(t)})),extra:(0,po.jsx)(S,{className:`lobe-submenu-chevron`,icon:Ce,size:16}),icon:ye,key:`scheduleSend`,label:e(`input.schedule.title`)},{type:`divider`},{checked:!!a,icon:he,key:`typo`,label:t(`actions.typobar.title`),onCheckedChange:e=>s(e),type:`switch`},...u?[{type:`divider`},{icon:Ee,key:`set-topic-goal`,label:t(`slash.goal`),onClick:()=>{r(!1),$t(i,t(`slash.goal`))}}]:[]]},[e,t,a,s,d,c,u,i]);return(0,po.jsx)(un,{icon:ke,open:n,size:{blockSize:32,borderRadius:16,size:18},title:e(`input.heteroPlus.tooltip`),tooltipProps:{placement:`top`},dropdown:{menu:{items:f},minWidth:220,placement:`topLeft`},onOpenChange:r})}),mo.displayName=`HeteroPlus`})),go,_o,vo,yo,bo,xo=e((()=>{He(),Re(),F(),go=t(n()),Me(),_o=t(m()),a(),yn(),vo=t(f()),yo=N(({css:e})=>({chip:e`
    flex: none;

    height: 28px;
    padding-inline: 8px 4px;
    border-radius: 14px;

    background: ${P.colorInfoBg};
  `,label:e`
    font-size: 12px;
    line-height: 1;
    color: ${P.colorInfoText};
    white-space: nowrap;
  `})),bo=(0,_o.memo)(()=>{let{t:e}=o(`chat`),t=kt(e=>e.scheduledSendAt),n=kt(e=>e.setScheduledSendAt);return t?(0,vo.jsxs)(k,{horizontal:!0,align:`center`,className:yo.chip,gap:4,children:[(0,vo.jsx)(S,{icon:ye,size:12,style:{color:P.colorInfoText}}),(0,vo.jsx)(L,{className:yo.label,children:(0,go.default)(t).format(`MM-DD HH:mm`)}),(0,vo.jsx)(ae,{icon:be,size:`small`,title:e(`input.schedule.clear`),onClick:()=>n(void 0)})]}):null}),bo.displayName=`ScheduledSendChip`})),So,Co=e((()=>{Je(),So=({boundDeviceId:e,executionTarget:t,isDesktopClient:n,providerType:r})=>Ge(r)?.model?.source===`catalog`?t===`local`?n:t===`device`&&!!e:!0})),wo,$,To,Eo,Do,Oo=e((()=>{vt(),Je(),He(),Re(),wo=t(m()),a(),Pn(),p(),Cr(),yn(),Dt(),Cn(),Bt(),Wt(),$e(),Tr(),Xt(),Or(),Et(),it(),Ct(),Nr(),io(),ho(),xo(),Co(),$=t(f()),To=[],Eo=(0,wo.memo)(({title:e,hint:t,action:n})=>(0,$.jsx)(Vt,{children:(0,$.jsx)(k,{align:`center`,paddingBlock:`0 8px`,paddingInline:12,children:(0,$.jsx)(Le,{action:n,style:{maxWidth:880,width:`100%`},type:`warning`,title:(0,$.jsxs)(k,{horizontal:!0,align:`baseline`,gap:6,style:{flexWrap:`wrap`},children:[(0,$.jsx)(`span`,{children:e}),t&&(0,$.jsx)(`span`,{style:{fontWeight:400,opacity:.75},children:t})]})})})})),Eo.displayName=`GuardBanner`,Do=(0,wo.memo)(()=>{let{t:e}=o(`chat`),t=kt(At.agentId),{isConfigured:n,goToConfig:r}=Nn(t),i=Ut(),{agencyConfig:a,isPreferenceLoading:s,workspaceScoped:c}=Yt(t),l=a?.heterogeneousProvider,u=l?.type,d=lt(St.enableAgentProviderBinding),f=l?.authMode===`api`,p=f&&l.apiConfig?.source===`server-default`?l.apiConfig:void 0,m=f&&l.apiConfig&&l.apiConfig.source!==`server-default`?l.apiConfig:void 0,h=f&&!l.apiConfig,g=d&&(!!p||h||!!m),_=tt(a,{isHetero:!!u,clientExecutionAvailable:!1,workspaceScoped:c}),{error:v,isReady:y}=An(u,m),b=!!u&&!et(u)&&_===`none`,x=!f&&Ke(u)&&So({boundDeviceId:a?.boundDeviceId,executionTarget:_,isDesktopClient:!1,providerType:u}),S=!!t&&g&&_===`local`,C=f&&!d,w=g&&_!==`local`,{blocked:T,error:E}=wr({active:d&&(h||!!m)&&_===`local`,error:v,isReady:y}),D=(0,wo.useMemo)(()=>[{alwaysDisplay:!0,children:(0,$.jsx)(mo,{}),key:`heteroPlus`},{alwaysDisplay:!0,children:(0,$.jsx)(bo,{}),key:`scheduledSendChip`}],[]),O=(0,wo.useMemo)(()=>S?(0,$.jsx)(Mr,{agentId:t}):x?(0,$.jsx)(Sr,{}):void 0,[t,S,x]),A=_===`device`&&!!a?.boundDeviceId,{status:j,refresh:ee}=Dr({agentId:t,enabled:A}),te=()=>{t&&i(`/agent/${t}/profile`)},ne=A&&(j===`device-offline`||j===`platform-unavailable`||j===`no-device`),re=()=>{if(!ne)return null;let t,n;if(j===`no-device`)t=e(`platformAgent.deviceGuard.noDevice.title`),n=e(`platformAgent.deviceGuard.noDevice.desc`);else if(j===`device-offline`)t=e(`platformAgent.deviceGuard.deviceOffline.title`),n=e(`platformAgent.deviceGuard.deviceOffline.desc`);else{let r=u&&mt[u]||u||``;t=e(`platformAgent.deviceGuard.platformUnavailable.title`,{name:r}),n=e(`platformAgent.deviceGuard.platformUnavailable.desc`,{name:r})}return(0,$.jsx)(Eo,{hint:n,title:t,action:(0,$.jsxs)(k,{horizontal:!0,gap:4,children:[(0,$.jsx)(M,{size:`small`,type:`fill`,onClick:ee,children:e(`platformAgent.deviceGuard.refresh`)}),(0,$.jsx)(M,{size:`small`,type:`primary`,onClick:te,children:e(`platformAgent.deviceGuard.configure`)})]})})},ie=()=>C||w||s||b||A||n?null:(0,$.jsx)(Eo,{hint:e(`heteroAgent.cloudNotConfigured.desc`),title:e(`heteroAgent.cloudNotConfigured.title`),action:(0,$.jsx)(M,{size:`small`,type:`primary`,onClick:r,children:e(`heteroAgent.cloudNotConfigured.action`)})}),ae=()=>C?(0,$.jsx)(Eo,{hint:e(`heteroAgent.apiMode.labDisabled.desc`),title:e(`heteroAgent.apiMode.labDisabled.title`),action:(0,$.jsx)(M,{size:`small`,type:`primary`,onClick:()=>i(`/settings/labs`),children:e(`heteroAgent.apiMode.labDisabled.action`)})}):null,oe=()=>w?(0,$.jsx)(Eo,{hint:e(`heteroAgent.apiMode.localOnly.desc`),title:e(`heteroAgent.apiMode.localOnly.title`),action:(0,$.jsx)(M,{size:`small`,type:`primary`,onClick:te,children:e(`platformAgent.deviceGuard.configure`)})}):null,se=()=>E?(0,$.jsx)(Eo,{title:E.code===`configMissing`?e(`heteroAgent.apiMode.configMissing`):E.code===`agentUnsupported`?e(`heteroAgent.apiMode.agentUnsupported`,{name:u}):e(`heteroAgent.apiMode.${E.code}`,E),action:(0,$.jsx)(M,{size:`small`,type:`primary`,onClick:te,children:e(`platformAgent.deviceGuard.configure`)})}):null,ce=()=>b?(0,$.jsx)(Eo,{title:e(`platformAgent.deviceGuard.noDevice.title`),hint:e(`heteroAgent.executionTarget.sandboxUnsupported`,{name:u?mt[u]:void 0})}):null,le=C||w||T||s||b||!n&&!A||ne,ue=C||w||!!E||b||ne||!n&&!A;return(0,$.jsxs)(k,{children:[ae(),oe(),se(),ce(),ie(),re(),(0,$.jsx)(vn,{allowExpand:!1,controlBarSlot:(0,$.jsx)(ro,{}),extraActionItems:D,leftActions:To,sendAreaPrefix:O,sendButtonProps:{disabled:le,shape:`round`},skipScrollMarginWithList:!ue,onEditorReady:e=>{Ot.setState({mainInputEditor:e})}})]})}),Do.displayName=`HeterogeneousChatInput`}));export{Oo as n,Do as t};