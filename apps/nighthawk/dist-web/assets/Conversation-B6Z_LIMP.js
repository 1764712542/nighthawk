import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a,l as o,u as s}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as c,_t as l}from"./agent-Cvv887Je.js";import{cs as u,ls as d}from"./app-const-Bl9rlHwj.js";import{B as f,Cr as p,Hr as m,Qr as h,bt as g,mr as _}from"./dialog-BebLzVzY.js";import{D as v,a as y,o as b}from"../vendor/vendor-react-CBcx1o7d.js";import{a as x,b as ee,c as S,l as C,t as w,xt as T}from"./es-CVJR_g25.js";import{It as E,Jc as D,Jh as O,Ka as k,Mt as te,O as ne,Rh as re,Rt as ie,Xh as ae,cv as oe,eg as se,eo as ce,gn as le,ig as ue,ih as de,om as fe,wa as pe,wh as me,x as A}from"../vendor/vendor-icons-C-Y4oLkk.js";import{Q as he,c as ge,ct as _e,et as ve,i as j,t as M}from"./base-ui-BAv0gRbN.js";import{$r as ye,Ft as be,or as xe,t as N}from"./es-LELdnrjB.js";import{la as Se}from"./model-runtime-client-tog6-eyE.js";import{A as Ce,C as we,D as Te,E as Ee,g as De,x as Oe}from"./serverConfig-CmLVLry1.js";import{a as ke,d as Ae,s as je,u as Me}from"./swrKeys-B4sicPWZ.js";import{f as Ne,n as Pe}from"./safeParseJSON-CGK4KNJh.js";import{D as Fe,s as Ie,t as Le}from"./selectors-CTRMh8eY.js";import{t as Re}from"./src-Cw6BG0HN.js";import{S as ze,y as Be}from"./src-Cp4rxIjO.js";import{D as Ve,r as He}from"./store-DKx7p_l_.js";import{n as Ue}from"./file-CNldqoil.js";import{A as We,Bt as Ge,Hi as Ke,I as qe,J as Je,K as Ye,Kt as Xe,O as Ze,Yt as P,a as Qe,ft as $e,it as et,k as F,l as tt,lt as nt,o as rt,q as it,t as at,ut as ot,wa as st,zt as ct}from"./tool-BJJaXV35.js";import{It as lt,S as ut,St as dt,y as ft}from"./executors-D4pCmjoC.js";import{i as pt,t as mt}from"./src-BsRzhl9C.js";import{B as ht,Ct as gt,I as _t,N as vt,R as yt,_t as bt,bt as xt,ct as St,ot as Ct,pt as wt,t as Tt,wt as Et,z as Dt}from"./selectors-BsEaCsu0.js";import{n as Ot,t as kt}from"./topic-Cz3BDXcK.js";import{Ao as At,Ht as jt,Ra as Mt,St as Nt,X as Pt,Y as Ft,io as It,jo as Lt,po as Rt,xt as zt}from"./index-Djd-5Nq9.js";import{n as Bt,t as Vt}from"./FileIcon-DXM_Cnj6.js";import{Et as Ht,bt as Ut,n as Wt,v as Gt,vt as Kt,y as qt}from"./Messages-CHVzbeQ8.js";import{a as Jt,n as Yt,t as Xt}from"./interventions-D6NJ04SD.js";import{i as Zt,n as Qt,t as $t}from"./OpStatusTray-DADF8czB.js";import{a as en,o as tn,u as nn}from"./useAgentId-Bi4gInfP.js";import{G as rn,J as an,K as on,Q as sn,Y as cn,n as ln,q as un,t as dn}from"./ChatInput-Dtj5KDCe.js";import{n as fn,r as pn}from"./EditModal-o4Or9MvG.js";import{n as mn,r as hn}from"./GoalModal-Ch8SPEtj.js";import{n as gn,t as _n}from"./Arguments-Bg9CqE0w.js";import{n as vn,t as yn}from"./chat-input-contracts-VCK0m4tN.js";import{n as bn,t as xn}from"./agentMarketplace-BFWAS2Yi.js";import{n as Sn,t as Cn}from"./installMarketplaceAgents-BCbW8Yd4.js";var wn,Tn,En=e((()=>{wn=()=>null,Tn=e=>e})),I,L,R,Dn,On=e((()=>{ct(),N(),M(),w(),A(),I=t(d()),i(),Kt(),Ze(),L=t(u()),R=x(({css:e,cssVar:t})=>({container:e`
    width: 100%;
  `,footer:e`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-end;

    margin-block-start: 8px;
  `,number:e`
    flex-shrink: 0;
    width: 18px;
    font-variant-numeric: tabular-nums;
    color: ${t.colorTextTertiary};
  `,option:e`
    cursor: pointer;

    display: flex;
    gap: 8px;
    align-items: center;

    min-height: 40px;
    padding-block: 7px;
    padding-inline: 16px;
    border-radius: calc(${t.borderRadiusLG} - 2px);

    color: ${t.colorTextSecondary};

    transition:
      background 120ms,
      color 120ms;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillTertiary};
    }
  `,optionLabel:e`
    flex: 1;
    line-height: 1.4;
  `,optionList:e`
    display: flex;
    flex-direction: column;
    gap: 2px;
  `,optionSelected:e`
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,rejectInput:e`
    flex: 1;

    width: 100%;
    padding: 0;
    border: none;
    border-radius: 0;

    font-family: inherit;
    font-size: 14px;
    line-height: 1.4;
    color: ${t.colorText};

    background: transparent;

    &::placeholder {
      color: ${t.colorTextSecondary};
    }

    &:focus,
    &:focus-visible {
      outline: none;
    }

    &:disabled {
      cursor: pointer;
      color: ${t.colorTextSecondary};
    }
  `,shortcutHint:e`
    display: inline-flex;
    align-items: center;
    margin-inline-start: 6px;
    color: ${t.colorTextTertiary};
  `,submitButton:e`
    min-width: 88px;
    height: 36px;
    border-radius: calc(${t.borderRadiusLG} - 2px);
  `})),Dn=(0,I.memo)(({approvalMode:e,apiName:t,assistantGroupId:n,identifier:r,messageId:i,onBeforeApprove:o})=>{let{t:s}=a(`chat`),[c,l]=(0,I.useState)(`approve`),[u,d]=(0,I.useState)(``),[f,p]=(0,I.useState)(!1),m=(0,I.useRef)(null),g=i.startsWith(`tmp_`),v=e===`allow-list`,{canUseResource:y}=Ut(),b=(0,I.useMemo)(()=>v?[`approve`,`approve-remember`,`reject`]:[`approve`,`reject`],[v]),[x,ee,S]=F(e=>[e.approveToolCall,e.rejectAndContinueToolCall,e.stopPendingApprovalForCard]),[w,T]=(0,I.useState)(!1),E=(0,I.useCallback)(async()=>{if(!(w||f||g||!y)){T(!0);try{await S(i)}finally{T(!1)}}},[w,f,g,y,S,i]),D=(0,I.useCallback)(async()=>{if(!(f||g||!y)){p(!0);try{if(c===`reject`)await ee(i,u.trim()||void 0);else{let e=await o?.();await x(i,n??``,{editedArguments:e,...v&&c===`approve-remember`?{rememberToolKey:`${r}/${t}`}:{}})}}finally{p(!1)}}},[t,x,n,y,c,r,v,g,f,i,o,u,ee]);(0,I.useEffect)(()=>{c===`reject`&&m.current?.focus()},[c]);let O=(0,I.useRef)(null),k=(0,I.useRef)(()=>{});(0,I.useEffect)(()=>{k.current=e=>{if(e.defaultPrevented)return;let t=e.target;if(t){let e=t.tagName;if(e===`INPUT`||e===`TEXTAREA`||t.isContentEditable)return}if(!(e.metaKey||e.ctrlKey||e.altKey)){if(/^[1-9]$/.test(e.key)){let t=b[Number(e.key)-1];t&&(e.preventDefault(),l(t));return}switch(e.key){case`ArrowUp`:case`ArrowDown`:e.preventDefault(),l(t=>b[(b.indexOf(t)+(e.key===`ArrowUp`?-1:1)+b.length)%b.length]);break;case`Enter`:if(e.shiftKey)return;e.preventDefault(),D();break}}}},[b,D]),(0,I.useEffect)(()=>{if(y)return Ge({contains:e=>{let t=O.current;return t?(t.closest(`[data-pending-hotkey-scope]`)??t).contains(e):!1},onKeyDown:e=>k.current(e)})},[y]);let te=e=>{if(!(e.metaKey||e.ctrlKey||e.altKey)){if(e.key===`Enter`&&!e.shiftKey)e.preventDefault(),D();else if(e.key===`ArrowUp`){e.preventDefault();let t=b[b.indexOf(`reject`)-1];t&&l(t),m.current?.blur()}}},ne=b.indexOf(`reject`)+1,re={approve:s(`tool.intervention.optionApprove`),"approve-remember":s(`tool.intervention.optionApproveRemember`)};return y?(0,L.jsxs)(h,{className:R.container,ref:O,children:[(0,L.jsx)(`div`,{className:R.optionList,role:`radiogroup`,children:b.map((e,t)=>e===`reject`?(0,L.jsxs)(`div`,{"aria-checked":c===`reject`,className:C(R.option,c===`reject`&&R.optionSelected),role:`radio`,onClick:()=>{l(`reject`),m.current?.focus()},children:[(0,L.jsxs)(`span`,{className:R.number,children:[ne,`.`]}),(0,L.jsx)(`input`,{"aria-label":s(`tool.intervention.rejectReasonPlaceholder`),className:R.rejectInput,disabled:f||g,placeholder:s(`tool.intervention.rejectReasonPlaceholder`),ref:m,type:`text`,value:u,onChange:e=>d(e.target.value),onClick:e=>e.stopPropagation(),onFocus:()=>l(`reject`),onKeyDown:te})]},e):(0,L.jsxs)(`div`,{"aria-checked":c===e,className:C(R.option,c===e&&R.optionSelected),role:`radio`,onClick:()=>l(e),children:[(0,L.jsxs)(`span`,{className:R.number,children:[t+1,`.`]}),(0,L.jsx)(`span`,{className:R.optionLabel,children:re[e]})]},e))}),(0,L.jsxs)(`div`,{className:R.footer,children:[(0,L.jsx)(_,{disabled:f||g,icon:de,loading:w,size:`middle`,type:`text`,onClick:E,children:s(`tool.intervention.stop`)}),(0,L.jsxs)(_,{className:R.submitButton,disabled:g,loading:f,size:`middle`,type:`primary`,onClick:D,children:[s(`tool.intervention.submit`),(0,L.jsx)(`span`,{className:R.shortcutHint,children:(0,L.jsx)(fe,{size:12})})]})]})]}):null})})),kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{Jt(),dt(),Be(),ft(),xn(),Re(),Cn(),kt(),kn=`qoder`,An=`cursor`,jn=(e,t)=>e===`lobe-web-onboarding`&&t===ut.showAgentMarketplace,Mn=(e,t)=>e===`lobe-agent`&&t===lt.askUserQuestion,Nn=(e,t)=>e===`lobe-user-interaction`&&t===ze.askUserQuestion||Mn(e,t),Pn=e=>Array.isArray(e)&&e.every(e=>typeof e==`string`),Fn=(e,t)=>{let n=Ne(e.requestId)??Ne(t?.requestId);if(n)return{categoryHints:Pn(e.categoryHints)?e.categoryHints:Pn(t?.categoryHints)?t.categoryHints:[],requestId:n}},In=async(e,t)=>{if(e?.topicId)try{await(e.updateTopicMetadata??Ot.updateTopicMetadata)(e.topicId,{onboardingSession:{agentMarketplacePick:t,lastActiveAt:t.resolvedAt}})}catch(e){console.error(`[AgentMarketplace] failed to persist pick metadata`,e)}},Ln=async(e,t)=>{let n=e.selectedTemplateIds;if(!Pn(n))return;let r=await Sn(n),i=Fn(e,t?.requestArgs);return i&&await In(t,{...i,installedAgentIds:r.installedAgentIds,resolvedAt:new Date().toISOString(),selectedTemplateIds:n,skippedAgentIds:r.skippedAgentIds,status:`submitted`}),{options:{createUserMessage:!1,pluginState:{installedAgentIds:r.installedAgentIds,requestId:i?.requestId,selectedAgentIds:n,skippedAgentIds:r.skippedAgentIds,summaries:r.summaries},toolResultContent:bn({installedAgentIds:r.installedAgentIds,selectedAgentIds:n,skippedAgentIds:r.skippedAgentIds,summaries:r.summaries})},payload:{...e,installedAgentIds:r.installedAgentIds,skippedAgentIds:r.skippedAgentIds}}},Rn=[{handler:async e=>({options:{createUserMessage:!1,pluginState:{askUserAnswers:e}},payload:e}),match:Nn},{handler:Ln,match:jn}],zn=(e,t)=>Rn.find(n=>n.match(e,t))?.handler,Bn=new Set([Ke,An,kn]),Vn=e=>Bn.has(e),Hn=(e,t)=>e===`lobe-user-interaction`||Mn(e,t)||Vn(e)||!!zn(e,t),Un=async(e,t,n)=>await zn(e,n?.apiName)?.(t,n)??{payload:t},Wn=async(e,t,n,r,i)=>{if(!jn(e,r?.apiName))return;let a=Fn(n??{},r?.requestArgs);a&&await In(r,{...a,resolvedAt:new Date().toISOString(),...i&&{skipReason:i},status:t})}})),Kn,z,qn,Jn,Yn,Xn,Zn=e((()=>{N(),M(),ee(),w(),A(),Kn=t(d()),i(),z=t(u()),qn=x(({css:e,cssVar:t})=>({form:e`
    position: relative;

    width: 100%;
    min-width: 600px;
    padding: 8px;
    border-radius: ${t.borderRadiusLG};
  `,formItem:e`
    margin-block-end: 4px !important;
  `,input:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
  `,row:e`
    position: relative;
  `,title:e`
    margin-block-end: 4px;
    color: ${t.colorTextTertiary};
  `})),Jn=e=>Object.entries(e).map(([e,t],n)=>({id:`${e}-${n}`,key:e,value:typeof t==`string`?t:JSON.stringify(t)})).filter(e=>e.key),Yn=e=>{let t={};return e.forEach(e=>{if(e.key)try{t[e.key]=JSON.parse(e.value||`""`)}catch{t[e.key]=e.value||``}}),t},Xn=(0,Kn.memo)(({initialValue:e={},onFinish:t,onCancel:n})=>{let{t:r}=a([`tool`,`common`]),[i]=T.useForm(),o=(0,Kn.useRef)(null);(0,Kn.useEffect)(()=>{i.setFieldsValue({items:Jn(e)})},[e,i]);let[s,c]=(0,Kn.useState)(!1),l=async()=>{c(!0);try{await i.validateFields();let e=Yn(i.getFieldsValue().items||[]);await t?.(e)}catch(e){console.error(`Validation Failed:`,e),f.error(r(`updateArgs.formValidationFailed`)||`Please check the form for errors.`)}c(!1)},u=()=>{n?.()},d=(e,t,n)=>t?.key&&n.map(e=>e?.key).filter(Boolean).filter(e=>e===t.key).length>1?Promise.reject(Error(r(`updateArgs.duplicateKeyError`))):Promise.resolve();return(0,z.jsxs)(T,{autoComplete:`off`,className:qn.form,form:i,initialValues:{items:Jn(e)},ref:o,children:[(0,z.jsxs)(h,{horizontal:!0,className:qn.title,gap:8,children:[(0,z.jsx)(h,{flex:1,children:`key`}),(0,z.jsx)(h,{flex:4,children:`value`})]}),(0,z.jsx)(T.List,{name:`items`,children:(e,{add:t,remove:n})=>(0,z.jsxs)(h,{width:`100%`,children:[e.map(({key:e,name:t,...a},o)=>(0,z.jsxs)(h,{horizontal:!0,align:`center`,className:qn.row,gap:8,width:`100%`,children:[(0,z.jsx)(T.Item,{...a,className:qn.formItem,name:[t,`key`],style:{flex:1},validateTrigger:[`onChange`,`onBlur`],rules:[{message:r(`updateArgs.keyRequired`),required:!0},{validator:e=>d(e,i.getFieldValue([`items`,o]),i.getFieldValue(`items`))}],children:(0,z.jsx)(ye,{allowClear:!0,className:qn.input,placeholder:r(`updateArgs.form.key`),variant:`filled`})}),(0,z.jsx)(T.Item,{...a,className:qn.formItem,name:[t,`value`],style:{flex:4},children:(0,z.jsx)(ye,{allowClear:!0,className:qn.input,placeholder:r(`updateArgs.form.value`),variant:`filled`})}),(0,z.jsx)(g,{icon:E,size:`small`,title:r(`delete`,{ns:`common`}),style:{marginBottom:6},onClick:()=>n(t)})]},e)),(0,z.jsx)(T.Item,{style:{marginBottom:0,marginTop:8},children:(0,z.jsxs)(h,{horizontal:!0,gap:8,justify:`space-between`,children:[(0,z.jsx)(_,{icon:(0,z.jsx)(m,{icon:pe}),size:`small`,type:`fill`,onClick:()=>t({id:`new-${Date.now()}`,key:``,value:``}),children:r(`updateArgs.form.add`)}),(0,z.jsxs)(h,{horizontal:!0,gap:8,children:[(0,z.jsx)(_,{size:`small`,onClick:u,children:r(`cancel`,{ns:`common`})}),(0,z.jsx)(_,{loading:s,size:`small`,type:`primary`,onClick:l,children:r(`save`,{ns:`common`})})]})]})})]})})]})})})),Qn,B,$n,V,er,tr,nr=e((()=>{mt(),qt(),Re(),N(),M(),w(),Qn=t(Se()),A(),B=t(d()),$n=t(v()),i(),at(),rt(),De(),Le(),Ze(),gn(),On(),Zn(),V=t(u()),er=x(({css:e,cssVar:t})=>({collapseHeader:e`
    cursor: pointer;
    user-select: none;

    padding-block: 6px;
    padding-inline: 10px;

    font-size: 12px;
    color: ${t.colorTextTertiary};

    &:hover {
      color: ${t.colorTextSecondary};
    }
  `,description:e`
    padding-block: 8px;
    padding-inline: 16px;

    font-size: ${t.fontSize};
    font-weight: 600;
    color: ${t.colorText};
  `,reason:e`
    margin-block-start: -4px;
    padding-block-end: 8px;
    padding-inline: 16px;

    font-size: ${t.fontSizeSM};
    line-height: 1.45;
    color: ${t.colorTextSecondary};
  `})),tr=(0,B.memo)(({requestArgs:e,id:t,identifier:n,apiName:r,toolCallId:i,assistantGroupId:o,actionsPortalTarget:s})=>{let{t:c}=a([`chat`,`plugin`,`common`]),l=Oe(Ie.approvalMode),[u,d]=(0,B.useState)(!1),[f,p]=(0,B.useState)(!1),_=F(e=>e.updatePluginArguments),v=F(e=>et.getDbMessageById(t)(e)),y=!!(v?.pluginIntervention?.operationId&&v.pluginIntervention.batchId),[b,x]=(0,B.useState)(),ee=(0,B.useRef)(void 0),S=Qe(tt.getMetaById(n)),C=Gt.includes(n),w=C?c(`builtins.${n}.title`,{defaultValue:n,ns:`plugin`}):st.getPluginTitle(S)??n,T=C?c(`builtins.${n}.apiName.${r}`,{defaultValue:r,ns:`plugin`}):r,E=(0,B.useMemo)(()=>b??Pe(e||``)??{},[b,e]),D=(0,B.useMemo)(()=>b?JSON.stringify(b,null,2):e,[b,e]),O=typeof E==`object`?Object.keys(E).length:0,k=n===`lobe-activator`&&r===pt.activateTools,te=(0,B.useMemo)(()=>{if(!k)return[];let e=E?.identifiers;return Array.isArray(e)?e.filter(e=>typeof e==`string`&&!!e.trim()):[]},[k,E]),ne=(0,B.useMemo)(()=>{if(!k)return;let e=E?.reason;return typeof e==`string`&&e.trim()?e.trim():void 0},[k,E]),re=Qe(e=>te.map(t=>{let n=tt.getMetaById(t)(e);return st.getPluginTitle(n)??n?.title??t}),Qn.default),ie=re.length>0?` (${re.join(`, `)})`:``,oe=(0,B.useCallback)(()=>{d(!1)},[]),le=(0,B.useCallback)(async t=>{if(i)try{JSON.stringify(t,null,2)!==e&&(y?(ee.current=t,x(t)):await _(i,t,!0)),d(!1)}catch(e){console.error(`Error stringifying arguments:`,e)}},[e,i,_,y]);if(u)return(0,V.jsx)(B.Suspense,{fallback:(0,V.jsx)(_n,{arguments:D}),children:(0,V.jsx)(Xn,{initialValue:E,onCancel:oe,onFinish:le})});let ue=(0,V.jsx)(h,{horizontal:!0,justify:`flex-end`,children:(0,V.jsx)(Dn,{apiName:r,approvalMode:l,assistantGroupId:o,identifier:n,messageId:t,toolCallId:i,onBeforeApprove:()=>ee.current})});return(0,V.jsxs)(h,{gap:4,children:[(0,V.jsxs)(h,{horizontal:!0,align:`center`,className:er.description,gap:6,children:[S?.avatar&&(0,V.jsx)(ve,{avatar:S.avatar,shape:`square`,size:16,style:{flex:`none`},title:w}),(0,V.jsxs)(`span`,{children:[w,` → `,T,ie]})]}),ne&&(0,V.jsx)(`div`,{className:er.reason,children:ne}),O>0&&(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(h,{horizontal:!0,align:`center`,className:er.collapseHeader,gap:4,onClick:()=>p(!f),children:[(0,V.jsx)(m,{icon:f?se:ae,size:14}),(0,V.jsx)(`span`,{children:c(`tool.intervention.viewParameters`,{count:O,defaultValue:`View parameters ({{count}})`})}),f&&(0,V.jsx)(g,{icon:ce,size:`small`,title:c(`edit`,{ns:`common`}),onClick:e=>{e.stopPropagation(),d(!0)}})]}),f&&(0,V.jsx)(_n,{arguments:D})]}),s?(0,$n.createPortal)(ue,s):ue]})})})),rr,ir,ar,or=e((()=>{ht(),N(),M(),rr=t(d()),i(),ir=t(u()),ar=(0,rr.memo)(({args:e})=>{let{t}=a(`tool`),n=(0,rr.useMemo)(()=>Ct.checkSecurityBlacklist(St,e),[e]);return n.blocked?(0,ir.jsx)(_e,{showIcon:!0,title:t(`localFiles.securityBlacklist.warning`),type:`error`,variant:`borderless`,description:(0,ir.jsx)(h,{gap:4,style:{fontSize:12},children:(0,ir.jsx)(`div`,{children:n.reason?t(n.reason):void 0})})}):null}),ar.displayName=`SecurityBlacklistWarning`})),H,sr,U,cr,lr=e((()=>{Yt(),Re(),N(),H=t(d()),sr=t(v()),At(),De(),Le(),Kt(),Ze(),gn(),On(),Gn(),nr(),Zn(),or(),U=t(u()),cr=(0,H.memo)(({requestArgs:e,id:t,identifier:n,apiName:r,toolCallId:i,assistantGroupId:a,actionsPortalTarget:o})=>{let s=Oe(Ie.approvalMode),{canUseResource:c}=Ut(),[l,u]=(0,H.useState)(!1),d=F(e=>e.updatePluginArguments),f=F(e=>et.getDbMessageById(t)(e)),p=!!(f?.pluginIntervention?.operationId&&f.pluginIntervention.batchId),[m,g]=(0,H.useState)(),_=(0,H.useRef)(void 0),v=Lt(()=>new Map),y=(0,H.useCallback)((e,t)=>(v.set(e,t),()=>{v.delete(e)}),[v]),b=(0,H.useCallback)(async()=>{let e=Array.from(v.values());return await Promise.all(e.map(e=>e())),p?_.current:void 0},[v,p]),x=(0,H.useCallback)(()=>{u(!1)},[]),ee=(0,H.useCallback)(async t=>{if(i)try{JSON.stringify(t,null,2)!==e&&(p?(_.current=t,g(t)):await d(i,t,!0)),u(!1)}catch(e){console.error(`Error stringifying arguments:`,e)}},[e,i,d,p]),S=(0,H.useCallback)(async e=>{if(!(!i||!c)){if(p&&e&&typeof e==`object`){let t=e;_.current=t,g(t);return}await d(i,e,!0)}},[c,i,d,p]),C=(0,H.useMemo)(()=>m??Pe(e||``)??{},[m,e]),w=Hn(n,r),T=f?.topicId,E=f?.pluginIntervention?.resolving===!0,D=F(e=>e.submitToolInteraction),O=F(e=>e.skipToolInteraction),k=F(e=>e.cancelToolInteraction),te=F(e=>e.submitHeteroIntervention),ne=(0,H.useCallback)(async e=>{if(!(!c||E)){if(Vn(n)){await te(t,e.type,e.payload);return}switch(e.type){case`submit`:{if(p&&jn(n,r)){let i=e.payload.selectedTemplateIds;if(Array.isArray(i)&&i.length>0&&i.every(e=>typeof e==`string`)){await D(t,e.payload,{agentInterventionAction:{result:{kind:`agent_marketplace`,selectedTemplateIds:i},type:`submit_custom`},prepareLegacyFallback:async()=>{let t=await Un(n,e.payload,{apiName:r,requestArgs:C,topicId:T});return{response:t.payload,...t.options}}});break}}let{payload:i,options:a}=await Un(n,e.payload,{apiName:r,requestArgs:C,topicId:T});await D(t,i,a);break}case`skip`:{let i=()=>Wn(n,`skipped`,e.payload,{apiName:r,requestArgs:C,topicId:T},e.reason);p||await i(),await O(t,e.reason,p?{onLegacyFallback:i}:void 0);break}case`cancel`:{let i=()=>Wn(n,`cancelled`,e.payload,{apiName:r,requestArgs:C,topicId:T});p||await i(),await k(t,p?{onLegacyFallback:i}:void 0);break}}}},[r,c,k,t,n,E,C,O,te,D,T,p]),re=Xt(n,r);if(re){if(l)return(0,U.jsx)(H.Suspense,{fallback:(0,U.jsx)(_n,{arguments:e}),children:(0,U.jsx)(Xn,{initialValue:C,onCancel:x,onFinish:ee})});if(w)return(0,U.jsx)(h,{gap:12,children:(0,U.jsx)(re,{actionsPortalTarget:o,apiName:r,args:C,disabled:E||!c,identifier:n,interactionMode:`custom`,messageId:t,registerBeforeApprove:y,onArgsChange:S,onInteractionAction:ne})});let u=(0,U.jsx)(h,{horizontal:!0,justify:`flex-end`,children:(0,U.jsx)(Dn,{apiName:r,approvalMode:s,assistantGroupId:a,identifier:n,messageId:t,toolCallId:i,onBeforeApprove:b})});return(0,U.jsxs)(h,{"data-pending-hotkey-scope":!0,gap:12,children:[(0,U.jsx)(ar,{args:C}),(0,U.jsx)(re,{apiName:r,args:C,identifier:n,messageId:t,registerBeforeApprove:y,onArgsChange:S}),o?(0,sr.createPortal)(u,o):u]})}return(0,U.jsxs)(h,{gap:12,children:[(0,U.jsx)(ar,{args:C}),(0,U.jsx)(tr,{actionsPortalTarget:o,apiName:r,assistantGroupId:a,id:t,identifier:n,requestArgs:e,toolCallId:i})]})})})),ur,dr=e((()=>{w(),ur=x(({css:e,cssVar:t})=>({actions:e`
    padding-block: 8px 10px;
    padding-inline: 10px;
    border-block-start: 1px solid ${t.colorBorderSecondary};
    background: color-mix(in srgb, ${t.colorBgElevated} 92%, ${t.colorFillSecondary});

    &:empty {
      display: none;
    }
  `,container:e`
    margin-block-end: 12px;
  `,content:e`
    /* ChatInput's maxHeight owns the vertical scrolling; an overflow:auto here
      never scrolls itself but still severs position:sticky inside intervention
      bodies from that real scroll container. */
    overflow-y: visible;
    flex: 1;
    min-height: 0;
    padding-block: 0 8px;
  `,tab:e`
    cursor: pointer;

    padding-block: 5px;
    padding-inline: 10px;
    border-block-end: 2px solid transparent;

    font-size: 12px;
    color: ${t.colorTextSecondary};
    white-space: nowrap;

    transition:
      border-color 0.2s,
      color 0.2s,
      background 0.2s;

    &:hover {
      color: ${t.colorText};
    }
  `,tabActive:e`
    border-block-end-color: ${t.colorPrimary};
    color: ${t.colorPrimary};
    background: ${t.colorPrimaryBg};
  `,tabBar:e`
    overflow-x: auto;
    display: flex;
    align-items: center;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,tabCounter:e`
    font-size: 11px;
    color: ${t.colorTextTertiary};
    white-space: nowrap;
  `,tabTrailing:e`
    display: flex;
    flex-shrink: 0;
    gap: 8px;
    align-items: center;

    margin-inline-start: auto;
    padding-block: 4px;
    padding-inline: 10px;
  `}))})),fr,pr,W,mr,hr,gr,_r,vr=e((()=>{Re(),N(),M(),w(),A(),fr=t(d()),pr=t(v()),i(),De(),Le(),On(),W=t(u()),mr=x(({css:e,cssVar:t})=>({description:e`
    overflow: hidden;
    flex: 1;

    min-width: 0;

    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,icon:e`
    flex: none;
    color: ${t.colorWarning};
  `,notice:e`
    display: flex;
    gap: 6px;
    align-items: center;

    min-width: 0;
    padding-block: 2px;

    font-size: 12px;
    line-height: 1.5;
  `,title:e`
    flex: none;
    font-weight: 500;
    color: ${t.colorWarning};
  `})),hr=e=>{let t=Pe(e);return t===void 0?e.trim()||`{}`:JSON.stringify(t,null,2)},gr=(0,fr.memo)(({actionsPortalTarget:e,apiName:t,assistantGroupId:n,identifier:r,requestArgs:i,toolCallId:o,toolMessageId:s})=>{let{t:c}=a(`chat`),l=Oe(Ie.approvalMode),u=(0,fr.useMemo)(()=>hr(i),[i]),d=(0,W.jsx)(h,{horizontal:!0,justify:`flex-end`,children:(0,W.jsx)(Dn,{apiName:t,approvalMode:l,assistantGroupId:n,identifier:r,messageId:s,toolCallId:o})});return(0,W.jsxs)(h,{gap:8,children:[(0,W.jsxs)(`div`,{className:mr.notice,children:[(0,W.jsx)(m,{className:mr.icon,icon:te,size:14}),(0,W.jsx)(`span`,{className:mr.title,children:c(`tool.intervention.renderFallback.title`)}),(0,W.jsx)(`span`,{className:mr.description,children:c(`tool.intervention.renderFallback.description`)})]}),(0,W.jsxs)(j,{fontSize:12,type:`secondary`,children:[r,` / `,t,` · `,c(`tool.intervention.renderFallback.rawJson`)]}),(0,W.jsx)(xe,{wrap:!0,actionIconSize:`small`,language:`json`,variant:`borderless`,children:u}),e?(0,pr.createPortal)(d,e):d]})}),gr.displayName=`UserInterventionFallback`,_r=class extends fr.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error(`[UserInterventionErrorBoundary] Caught error in intervention render:`,{apiName:this.props.apiName,componentStack:t.componentStack,error:e.message,identifier:this.props.identifier,toolCallId:this.props.toolCallId})}render(){return this.state.hasError?(0,W.jsx)(gr,{actionsPortalTarget:this.props.actionsPortalTarget,apiName:this.props.apiName,assistantGroupId:this.props.assistantGroupId,identifier:this.props.identifier,requestArgs:this.props.requestArgs,toolCallId:this.props.toolCallId,toolMessageId:this.props.toolMessageId}):this.props.children}}})),yr,br,xr,Sr=e((()=>{yr=t(d()),lr(),dr(),vr(),br=t(u()),xr=(0,yr.memo)(({intervention:e,actionsPortalTarget:t})=>{let n=[e.apiName,e.identifier,e.requestArgs,e.toolCallId,e.toolMessageId].join(`|`);return(0,br.jsx)(`div`,{className:ur.content,children:(0,br.jsx)(_r,{actionsPortalTarget:t,apiName:e.apiName,assistantGroupId:e.assistantGroupId,identifier:e.identifier,requestArgs:e.requestArgs,toolCallId:e.toolCallId,toolMessageId:e.toolMessageId,children:(0,br.jsx)(cr,{actionsPortalTarget:t,apiName:e.apiName,assistantGroupId:e.assistantGroupId,id:e.toolMessageId,identifier:e.identifier,requestArgs:e.requestArgs,toolCallId:e.toolCallId})},n)})})})),Cr,wr,Tr,Er=e((()=>{N(),M(),w(),A(),Cr=t(d()),i(),dr(),wr=t(u()),Tr=(0,Cr.memo)(({interventions:e,activeIndex:t,approveAll:n,onTabChange:r})=>{let{t:i}=a(`chat`);return(0,wr.jsxs)(`div`,{className:ur.tabBar,children:[e.map((e,n)=>(0,wr.jsxs)(`div`,{className:C(ur.tab,n===t&&ur.tabActive),onClick:()=>r(n),children:[`🔧 `,e.apiName]},e.toolCallId)),(0,wr.jsxs)(`div`,{className:ur.tabTrailing,children:[(0,wr.jsxs)(`span`,{className:ur.tabCounter,children:[t+1,` / `,e.length]}),n&&(0,wr.jsx)(p,{title:i(`tool.intervention.approveAllTooltip`,{count:n.count}),children:(0,wr.jsx)(_,{icon:ue,loading:n.loading,size:`small`,type:`fill`,onClick:n.onApprove,children:i(`tool.intervention.approveAll`,{count:n.count})})})]})]})})})),Dr,Or,kr,Ar=e((()=>{jt(),Dr=t(d()),Kt(),Ze(),$e(),Sr(),Er(),dr(),Or=t(u()),kr=(0,Dr.memo)(({interventions:e})=>{let[t,n]=(0,Dr.useState)(null),[r,i]=(0,Dr.useState)(null),[a,o]=(0,Dr.useState)(!1),s=F(e=>e.approveAllToolCalls),{canUseResource:c}=Ut(),l=(0,Dr.useMemo)(()=>{if(t){let n=e.findIndex(e=>e.toolCallId===t);if(n>=0)return n}return 0},[e,t]),u=(0,Dr.useCallback)(t=>{n(e[t]?.toolCallId??null)},[e]),d=e[l],f=(0,Dr.useMemo)(()=>ot(e,d),[e,d]),p=(0,Dr.useCallback)(async()=>{if(!a){o(!0);try{await s(f.map(e=>e.toolMessageId))}finally{o(!1)}}},[a,s,f]);if(!d)return null;let m=e.length>1,h=nt(f);return(0,Or.jsxs)(Mt,{"data-pending-hotkey-scope":!0,className:ur.container,footer:(0,Or.jsx)(`div`,{className:ur.actions,ref:i}),maxHeight:`50vh`,resize:!1,children:[m&&(0,Or.jsx)(Tr,{activeIndex:l,interventions:e,approveAll:c&&h?{count:f.length,loading:a,onApprove:p}:void 0,onTabChange:u}),(0,Or.jsx)(xr,{actionsPortalTarget:r,intervention:d},d.toolCallId)]})})})),jr,G,Mr,Nr,Pr,Fr,K,Ir,Lr=e((()=>{N(),M(),w(),A(),jr=t(d()),i(),vt(),It(),Ze(),G=t(u()),Mr=14,Nr=2,Pr=(Mr-Nr)/2,Fr=2*Math.PI*Pr,K=x(({css:e,cssVar:t})=>({collapsed:e`
    max-height: 0;
    margin-block-start: 0 !important;
    padding-block: 0 !important;
    border-block-start: none !important;

    opacity: 0;
  `,container:e`
    cursor: pointer;
    user-select: none;

    padding-block: 8px 10px;
    padding-inline: 12px;
    border: 1px solid ${t.colorFillSecondary};
    border-block-end: none;
    border-start-start-radius: 12px;
    border-start-end-radius: 12px;

    background: ${t.colorBgElevated};

    transition: all 0.2s ${t.motionEaseInOut};
  `,containerTopAttached:e`
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  `,count:e`
    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,expanded:e`
    max-height: 300px;
    opacity: 1;
  `,header:e`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,itemRow:e`
    padding-block: 6px;
    padding-inline: 4px;
    border-block-end: 1px dashed ${t.colorBorderSecondary};
    font-size: 13px;

    &:last-child {
      border-block-end: none;
    }
  `,listContainer:e`
    overflow: hidden;

    /* The rows are Base UI Checkbox labels, which are inline-flex. In a plain
       block container they lay out as INLINE boxes — two or three short todos
       share a line and the list wraps like prose. A column flex container
       blockifies them, so one todo is one row again. */
    display: flex;
    flex-direction: column;

    margin-block-start: 8px;
    padding-block: 4px;
    border-block-start: 1px solid ${t.colorBorderSecondary};

    transition:
      max-height 0.25s ${t.motionEaseInOut},
      opacity 0.2s ${t.motionEaseInOut},
      padding 0.2s ${t.motionEaseInOut};
  `,processingRow:e`
    display: flex;
    gap: 6px;
    align-items: center;
  `,ring:e`
    transform: rotate(-90deg);
    flex-shrink: 0;
  `,ringProgress:e`
    transition:
      stroke-dashoffset 240ms ease,
      stroke 240ms ease;
  `,ringTrack:e`
    stroke: ${t.colorFillSecondary};
  `,textCompleted:e`
    color: ${t.colorTextQuaternary};
    text-decoration: line-through;
  `,textProcessing:e`
    color: ${t.colorText};
  `,textTodo:e`
    color: ${t.colorTextSecondary};
  `})),Ir=(0,jr.memo)(({className:e,topAttached:t})=>{let{t:n}=a(`chat`),[r,i]=(0,jr.useState)(!1),o=F(et.dbMessages),s=F(qe.isAIGenerating),c=(0,jr.useMemo)(()=>_t(o),[o])?.items||[],l=c.length,u=c.filter(e=>e.status===`completed`).length,d=l>0?u/l*100:0,f=c.find(e=>e.status===`processing`)||c.find(e=>e.status===`todo`);if(l===0)return null;let p=u===l?S.colorSuccess:S.colorInfo,g=Fr*(1-d/100);return(0,G.jsxs)(`div`,{className:C(K.container,t&&K.containerTopAttached,e),onClick:()=>i(!r),children:[(0,G.jsxs)(h,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,G.jsxs)(h,{horizontal:!0,align:`center`,gap:8,style:{flex:1,minWidth:0},children:[(0,G.jsxs)(`svg`,{className:K.ring,height:Mr,width:Mr,children:[(0,G.jsx)(`circle`,{className:K.ringTrack,cx:Mr/2,cy:Mr/2,fill:`none`,r:Pr,strokeWidth:Nr}),(0,G.jsx)(`circle`,{className:K.ringProgress,cx:Mr/2,cy:Mr/2,fill:`none`,r:Pr,stroke:p,strokeDasharray:Fr,strokeDashoffset:g,strokeLinecap:`round`,strokeWidth:Nr})]}),(0,G.jsx)(`span`,{className:C(K.header,s&&Rt.shinyText),children:f?.text||n(`todoProgress.allCompleted`,{defaultValue:`All tasks completed`})}),(0,G.jsx)(ge,{size:`small`,style:{flexShrink:0},children:(0,G.jsxs)(`span`,{className:K.count,children:[u,`/`,l]})})]}),(0,G.jsx)(m,{icon:r?O:se,size:16,style:{color:S.colorTextTertiary,flexShrink:0}})]}),(0,G.jsx)(`div`,{className:C(K.listContainer,r?K.expanded:K.collapsed),children:c.map((e,t)=>{let n=e.status===`completed`;return e.status===`processing`?(0,G.jsxs)(`div`,{className:C(K.itemRow,K.processingRow),children:[(0,G.jsx)(m,{icon:re,size:17,style:{color:S.colorTextSecondary}}),(0,G.jsx)(`span`,{className:K.textProcessing,children:e.text})]},t):(0,G.jsx)(he,{backgroundColor:S.colorSuccess,checked:n,shape:`circle`,style:{borderWidth:1.5,cursor:`default`,pointerEvents:`none`},classNames:{text:C(K.textTodo,n&&K.textCompleted),wrapper:K.itemRow},textProps:{type:n?`secondary`:void 0},children:e.text},t)})})]})}),Ir.displayName=`TodoProgress`})),Rr,zr=e((()=>{Rr=e=>({})})),Br,q,Vr,Hr,Ur=e((()=>{N(),M(),Br=t(d()),i(),y(),zr(),en(),q=t(u()),Vr=(0,Br.memo)(({inputCompletionError:e})=>{let{t}=a(`chat`),n=tn(e=>e.clearInputCompletionError),r=tn(e=>e.dismissInputCompletionError),i=Rr({error:e,onRetry:n});return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(h,{paddingBlock:`0 6px`,children:(0,q.jsx)(_e,{closable:!0,showIcon:!0,action:i.action??(0,q.jsxs)(h,{horizontal:!0,align:`center`,gap:8,children:[(0,q.jsx)(_,{size:`small`,type:`primary`,onClick:n,children:t(`input.inputCompletionError.retry`)}),(0,q.jsx)(b,{to:`/settings/agent`,children:(0,q.jsx)(_,{size:`small`,children:t(`input.inputCompletionError.settings`)})})]}),title:i.description??t(`input.inputCompletionError.title`),type:`warning`,onClose:r})}),i.extra]})}),Vr.displayName=`InputCompletionErrorAlertContent`,Hr=(0,Br.memo)(()=>{let e=tn(nn.inputCompletionErrorVisible);return e?(0,q.jsx)(Vr,{inputCompletionError:e}):null}),Hr.displayName=`InputCompletionErrorAlert`})),Wr,J,Gr,Kr,qr,Jr,Yr,Xr=e((()=>{N(),M(),w(),A(),Wr=t(d()),i(),Bt(),Xe(),Tt(),bt(),gt(),Ue(),Kt(),Ze(),J=t(u()),Gr=28,Kr=x(({css:e,cssVar:t})=>({container:e`
    border: 1px solid ${t.colorFillSecondary};
    border-block-end: none;
    border-radius: 12px 12px 0 0;
    background: ${t.colorBgElevated};
  `,fileChip:e`
    overflow: hidden;
    flex-shrink: 0;

    max-width: 160px;
    height: 28px;
    padding-block: 0;
    padding-inline: 6px;
    border: 1px solid ${t.colorFillTertiary};
    border-radius: 6px;

    font-size: 12px;
    color: ${t.colorTextSecondary};
    white-space: nowrap;
  `,fileChipName:e`
    overflow: hidden;
    text-overflow: ellipsis;
  `,icon:e`
    flex-shrink: 0;
    color: ${t.colorTextDescription};
  `,imageThumb:e`
    flex-shrink: 0;

    width: 28px !important;
    height: 28px !important;
    margin-block: 0 !important;
    border: 1px solid ${t.colorFillTertiary};
    border-radius: 6px;

    box-shadow: none;

    img {
      width: 28px !important;
      height: 28px !important;
      object-fit: cover;
    }
  `,item:e`
    padding-block: 6px 4px;
    padding-inline: 12px 8px;
  `,itemDivider:e`
    border-block-start: 1px solid ${t.colorFillTertiary};
  `,text:e`
    overflow: hidden;

    font-size: 13px;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),qr=e=>e.mimeType.startsWith(`image`)&&!!e.url,Jr=(0,Wr.memo)(({file:e})=>qr(e)?(0,J.jsx)(be,{alt:e.name,classNames:{wrapper:Kr.imageThumb},objectFit:`cover`,size:Gr,src:e.url,title:e.name,variant:`borderless`,styles:{image:{height:Gr,width:Gr},wrapper:{height:Gr,width:Gr}}}):(0,J.jsxs)(h,{horizontal:!0,align:`center`,className:Kr.fileChip,gap:4,title:e.name,children:[(0,J.jsx)(Vt,{fileName:e.name,fileType:e.mimeType,size:14}),(0,J.jsx)(`span`,{className:Kr.fileChipName,children:e.name})]})),Jr.displayName=`QueuedFilePreview`,Yr=(0,Wr.memo)(()=>{let{canUseResource:e}=Ut(),{t}=a(`chat`),n=F(e=>e.context),r=(0,Wr.useMemo)(()=>Et({agentId:n.agentId,documentId:n.documentId,groupId:n.groupId,isNew:n.isNew,scope:n.scope,subAgentId:n.subAgentId,threadId:n.threadId,topicId:n.topicId}),[n.agentId,n.documentId,n.groupId,n.isNew,n.scope,n.subAgentId,n.threadId,n.topicId]),i=P(e=>wt.getQueuedMessages(n)(e)),o=P(e=>e.removeQueuedMessage),s=He(e=>e.dispatchChatUploadFileList),c=F(e=>e.editor),l=(0,Wr.useCallback)(e=>{o(r,e.id),c?.setDocument(`markdown`,e.content),c?.focus(),e.filesPreview?.length&&s({files:xt(e.filesPreview),type:`addFiles`})},[r,s,c,o]),u=(0,Wr.useCallback)(e=>{let t=P.getState(),i=wt.getRunningQueueBlockingOperationIds(n)(t);for(let e of i)t.cancelOperation(e,`send_now`);o(r,e.id);let a=e.filesPreview?.length?xt(e.filesPreview):e.files?.length?e.files.map(e=>({id:e})):void 0;t.sendMessage({context:n,editorData:e.editorData,files:a,message:e.content}).catch(e=>{console.error(`[QueueTray] sendNow failed:`,e)})},[n,r,o]);return i.length===0||!e?null:(0,J.jsx)(h,{className:Kr.container,gap:0,children:i.map((e,n)=>{let i=e.filesPreview??[];return(0,J.jsxs)(h,{horizontal:!0,align:`center`,className:n>0?`${Kr.item} ${Kr.itemDivider}`:Kr.item,gap:8,children:[(0,J.jsx)(m,{className:Kr.icon,icon:D,size:14}),(0,J.jsxs)(h,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},children:[i.length>0&&(0,J.jsx)(h,{horizontal:!0,flex:`none`,gap:4,children:i.map(e=>(0,J.jsx)(Jr,{file:e},e.id))}),e.content&&(0,J.jsx)(h,{className:Kr.text,flex:1,children:e.content})]}),(0,J.jsx)(g,{icon:k,size:`small`,title:t(`inputQueue.edit`),onClick:()=>l(e)}),(0,J.jsx)(g,{icon:oe,size:`small`,title:t(`inputQueue.sendNow`),onClick:()=>u(e)}),(0,J.jsx)(g,{icon:ie,size:`small`,title:t(`inputQueue.delete`),onClick:()=>o(r,e.id)})]},e.id)})})}),Yr.displayName=`QueueTray`})),Zr,Qr,$r=e((()=>{Zr=e=>e.reason instanceof Error?e.reason:new DOMException(`Voice message send was cancelled`,`AbortError`),Qr=(e,t,n={})=>{let{context:r,optimisticUserMessageId:i,signal:a}=n;return a?.aborted?Promise.reject(Zr(a)):new Promise((n,o)=>{let s=!1;e({files:[t],message:``,onMessageAccepted:()=>{s=!0,n()},preserveComposer:!0,...r?{conversationContext:r}:{},...i?{optimisticUserMessageId:i}:{},...a?{signal:a}:{}}).then(()=>{s||o(a?.aborted?Zr(a):Error(`Voice message was not accepted`))},e=>{s||o(a?.aborted?Zr(a):e)})})}})),ei,ti,ni,ri,ii=e((()=>{Dt(),ei=e=>e.role===`user`||e.role===`assistant`||e.role===`tool`,ti=e=>e.filter(ei).map(e=>({content:typeof e.content==`string`?e.content:``,role:e.role})),ni=(e,t)=>ti(yt.getSlicedMessages(e,t)),ri=({disableFollowUpVariant:e,isInputEmpty:t,isInputLoading:n})=>({placeholderVariant:!e&&n&&t?`followUp`:`default`,showSendMenu:!n,showStopButton:n})})),ai,oi=e((()=>{o(),ai=s(e=>({arm:t=>e(e=>({armedAt:{...e.armedAt,[t]:Date.now()}})),armedAt:{},disarm:t=>e(e=>{if(e.armedAt[t]===void 0)return e;let n={...e.armedAt};return delete n[t],{armedAt:n}})}))})),si,ci,li,ui,di=e((()=>{N(),w(),A(),si=t(d()),i(),De(),Le(),Ze(),oi(),ci=t(u()),li=x(({css:e})=>({chip:e`
    cursor: pointer;

    display: inline-flex;
    gap: 4px;
    align-items: center;

    height: 28px;
    padding-inline: 8px;
    border-radius: 8px;

    font-size: 12px;
    color: ${S.colorTextTertiary};

    transition:
      color 0.2s,
      background 0.2s;

    /* Reveal the "close" affordance on hover: the leading target icon crossfades
       into an ✕, signalling the whole chip cancels the armed goal on click. */
    &:hover {
      color: ${S.colorText};
      background: ${S.colorFillTertiary};
    }

    &:hover .goal-armed-target {
      opacity: 0;
    }

    &:hover .goal-armed-close {
      opacity: 1;
    }
  `,iconClose:e`
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.15s;
  `,iconSlot:e`
    position: relative;

    display: inline-flex;
    flex: none;

    width: 14px;
    height: 14px;
  `,iconTarget:e`
    transition: opacity 0.15s;
  `})),ui=(0,si.memo)(()=>{let{t:e}=a(`verify`),t=Oe(Fe.enableTopicAcceptance),n=F(e=>e.context.agentId),r=F(e=>e.context.topicId),i=ai(e=>n?e.armedAt[n]:void 0),o=ai(e=>e.disarm);return!t||!n||r||i===void 0?null:(0,ci.jsx)(p,{title:e(`acceptance.tray.goalDisarm`),children:(0,ci.jsxs)(`div`,{className:li.chip,onClick:()=>o(n),children:[(0,ci.jsxs)(`span`,{className:li.iconSlot,children:[(0,ci.jsx)(m,{className:C(`goal-armed-target`,li.iconTarget),icon:le,size:14}),(0,ci.jsx)(m,{className:C(`goal-armed-close`,li.iconClose),icon:ne,size:14})]}),(0,ci.jsx)(`span`,{children:e(`acceptance.tray.goalLabel`)})]})})}),ui.displayName=`GoalArmedChip`})),fi,pi=e((()=>{fi=(e,t)=>e.find(e=>e.role===`user`&&e.createdAt>=t)})),mi,Y,hi,gi,_i=e((()=>{N(),M(),w(),A(),mi=t(d()),i(),fn(),Y=t(u()),hi=x(({css:e})=>({detail:e`
    padding-block: 2px 4px;
    padding-inline-start: 22px;
  `,head:e`
    cursor: pointer;
    user-select: none;
  `,method:e`
    color: ${S.colorTextSecondary};
  `,row:e`
    padding-block: 6px;
    padding-inline: 14px;
    border-radius: ${S.borderRadius};

    &:hover {
      background: ${S.colorFillQuaternary};
    }

    &:hover .verify-tray-row-edit {
      opacity: 1;
    }
  `,rowEdit:e`
    opacity: 0;
    transition: opacity 0.15s;
  `,secLabel:e`
    font-size: 10px;
    color: ${S.colorTextQuaternary};
    text-transform: uppercase;
    letter-spacing: 0.04em;
  `})),gi=(0,mi.memo)(({check:e,onRemove:t,onUpdate:n})=>{let{t:r}=a(`verify`),[i,o]=(0,mi.useState)(!1);return(0,Y.jsxs)(h,{className:hi.row,gap:8,children:[(0,Y.jsxs)(h,{horizontal:!0,align:`center`,className:hi.head,gap:8,justify:`space-between`,onClick:()=>o(!i),children:[(0,Y.jsxs)(h,{horizontal:!0,align:`center`,flex:1,gap:8,style:{minWidth:0},children:[(0,Y.jsx)(m,{color:S.colorTextQuaternary,icon:me,size:14}),(0,Y.jsx)(j,{ellipsis:!0,fontSize:13,children:e.name})]}),(0,Y.jsxs)(h,{horizontal:!0,align:`center`,gap:4,style:{flexShrink:0},children:[(0,Y.jsx)(p,{title:r(`acceptance.tray.editModal.editTitle`),children:(0,Y.jsx)(g,{className:C(`verify-tray-row-edit`,hi.rowEdit),icon:k,size:`small`,onClick:r=>{r.stopPropagation(),pn({initial:e,onRemove:t,onSubmit:n})}})}),(0,Y.jsx)(m,{color:S.colorTextQuaternary,icon:i?se:ae,size:14})]})]}),i&&(0,Y.jsxs)(h,{className:hi.detail,gap:5,children:[(0,Y.jsx)(j,{className:hi.secLabel,children:r(`acceptance.tray.section.method`)}),(0,Y.jsx)(j,{className:hi.method,fontSize:12,children:e.method||r(`acceptance.tray.section.methodEmpty`)})]})]})}),gi.displayName=`VerifyTrayCheckItem`})),vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi=e((()=>{M(),n(),vi=t(d()),ke(),c(),Me(),zt(),yi=e=>{if(typeof navigator<`u`&&navigator.onLine===!1)return!0;let t=e instanceof Error?e.message:String(e);return/fetch failed|failed to fetch|networkerror|load failed|err_(?:network|internet)/i.test(t)},bi=()=>`chk_${Math.random().toString(36).slice(2,10)}`,xi={checks:[],goal:``},Si=e=>l.acceptanceBySubject(`topic`,e),Ci=async e=>{let t=await Nt.getAcceptanceBySubject(`topic`,e);return{checks:(t?.config?.checklist??[]).map(e=>({id:e.id,method:e.method??``,name:e.name})),goal:t?.requirement??``}},wi=async(e,t,n)=>{await Ae(Si(e),t,{revalidate:!1});try{await n()}catch(t){throw await Ae(Si(e)),f.error(yi(t)?r(`acceptance.tray.saveFailed.network`,{ns:`verify`}):r(`acceptance.tray.saveFailed.server`,{ns:`verify`})),t}await Ae(Si(e))},Ti=(e,t,n)=>wi(e,{checks:n,goal:t},()=>Nt.saveAcceptanceChecklist(`topic`,e,n.map(e=>({id:e.id,method:e.method||void 0,name:e.name})))),Ei=(e,t,n)=>wi(e,{checks:n,goal:t},()=>Nt.saveAcceptanceGoal(`topic`,e,t)),Di=e=>{let{data:t,isLoading:n}=je(e?Si(e):null,()=>Ci(e)),{checks:r,goal:i}=t??xi,a=(0,vi.useCallback)(t=>{if(e)return Ei(e,t,r)},[e,r]),o=(0,vi.useCallback)(t=>{if(e)return Ti(e,i,[...r,{...t,id:bi()}])},[e,i,r]),s=(0,vi.useCallback)((t,n)=>{if(e)return Ti(e,i,r.map(e=>e.id===t?{...e,...n}:e))},[e,i,r]);return{addCheck:o,checks:r,goal:i,isLoading:n,removeCheck:(0,vi.useCallback)(t=>{if(e)return Ti(e,i,r.filter(e=>e.id!==t))},[e,i,r]),setGoal:a,updateCheck:s}}})),ki,X,Z,Ai,ji=e((()=>{N(),M(),w(),A(),ki=t(d()),i(),De(),Le(),Ze(),pi(),_i(),fn(),oi(),mn(),Oi(),X=t(u()),Z=x(({css:e})=>({addRow:e`
    padding-block: 4px;
    padding-inline: 8px;
  `,container:e`
    border: 1px solid ${S.colorFillSecondary};
    border-block-end: none;
    border-start-start-radius: 12px;
    border-start-end-radius: 12px;

    background: ${S.colorBgElevated};
  `,containerTopAttached:e`
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  `,goalRow:e`
    padding-block: 6px 8px;
    padding-inline: 12px;

    &:hover .verify-tray-goal-edit {
      opacity: 1;
    }
  `,goalText:e`
    color: ${S.colorTextSecondary};
  `,head:e`
    cursor: pointer;
    user-select: none;
    padding-block: 6px;
    padding-inline: 12px;

    &:hover {
      background: ${S.colorFillQuaternary};
    }
  `,rowEdit:e`
    opacity: 0;
    transition: opacity 0.15s;
  `,secLabel:e`
    font-size: 10px;
    color: ${S.colorTextQuaternary};
    text-transform: uppercase;
    letter-spacing: 0.04em;
  `,summary:e`
    overflow: hidden;

    font-size: 12px;
    color: ${S.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Ai=(0,ki.memo)(({topAttached:e})=>{let{t}=a(`verify`),n=Oe(Fe.enableTopicAcceptance),r=F(e=>e.context.topicId),i=F(e=>e.context.agentId),o=F(e=>e.displayMessages),s=ai(e=>i?e.armedAt[i]:void 0),c=ai(e=>e.disarm),{goal:l,checks:u,isLoading:d,setGoal:f,addCheck:v,updateCheck:y,removeCheck:b}=Di(r??void 0),[x,ee]=(0,ki.useState)(!1);return(0,ki.useEffect)(()=>{if(!(!n||!i||s===void 0||!r||d)){if(!l){let e=fi(o,s);e?.content&&f(e.content)}c(i)}},[n,i,s,r,d,l,o,f,c]),!n||!r||!l?null:(0,X.jsxs)(h,{className:C(Z.container,e&&Z.containerTopAttached),children:[(0,X.jsxs)(h,{horizontal:!0,align:`center`,className:Z.head,gap:8,justify:`space-between`,onClick:()=>ee(!x),children:[(0,X.jsxs)(h,{horizontal:!0,align:`center`,flex:1,gap:8,style:{minWidth:0},children:[(0,X.jsx)(m,{color:S.colorTextSecondary,icon:le,size:14}),(0,X.jsx)(j,{strong:!0,fontSize:12,style:{flexShrink:0},children:t(`acceptance.tray.goalLabel`)}),!x&&(0,X.jsx)(`span`,{className:Z.summary,children:l}),u.length>0&&(0,X.jsx)(j,{fontSize:12,style:{flexShrink:0},type:`secondary`,children:t(`acceptance.tray.trackCount`,{count:u.length})})]}),(0,X.jsx)(m,{color:S.colorTextQuaternary,icon:x?se:ae,size:14})]}),x&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(h,{className:Z.goalRow,gap:4,children:[(0,X.jsxs)(h,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,X.jsx)(j,{className:Z.secLabel,children:t(`acceptance.tray.goalSection`)}),(0,X.jsx)(p,{title:t(`acceptance.tray.goalModal.editTitle`),children:(0,X.jsx)(g,{className:C(`verify-tray-goal-edit`,Z.rowEdit),icon:k,size:`small`,onClick:()=>hn({initialGoal:l,onDelete:()=>f(``),onSubmit:e=>f(e)})})})]}),(0,X.jsx)(j,{className:Z.goalText,fontSize:13,children:l})]}),u.length>0&&(0,X.jsx)(h,{className:Z.goalRow,gap:2,style:{paddingBlock:0},children:(0,X.jsx)(j,{className:Z.secLabel,children:t(`acceptance.tray.trackSection`)})}),u.map(e=>(0,X.jsx)(gi,{check:e,onRemove:()=>b(e.id),onUpdate:t=>y(e.id,t)},e.id)),(0,X.jsx)(h,{horizontal:!0,className:Z.addRow,children:(0,X.jsx)(_,{icon:pe,size:`small`,type:`text`,onClick:()=>pn({onSubmit:e=>v(e)}),children:t(`acceptance.tray.addCheck`)})})]})]})}),Ai.displayName=`GoalTray`})),Mi,Ni,Pi=e((()=>{cn(),on(),it(),Mi=e=>{let{model:t,provider:n}=Ye(e);return rn({enableAgentMode:an(e.agentId),model:t,provider:n})},Ni=e=>{let{model:t,provider:n}=Je(e);return un(t,n,e.agentId)}})),Q,$,Fi,Ii=e((()=>{N(),M(),Q=t(d()),i(),En(),dn(),we(),Te(),Xe(),Tt(),vt(),gt(),Ue(),vn(),Pt(),Ar(),Ze(),Lr(),Ur(),Qt(),Xr(),$r(),ii(),di(),oi(),ji(),Pi(),$=t(u()),Fi=(0,Q.memo)(({actionBarStyle:e,allowExpand:t,compact:n=!1,disableFollowUpVariant:r,disableQueue:i,disableSend:o,feature:s,leftActions:c=[],leftContent:l,rightActions:u=[],children:d,extraActionItems:f,isConfigLoading:p=!1,mentionItems:m,controlBarSlot:g,sendMenu:_,sendAreaPrefix:v,sendButtonProps:y,showControlBar:b=!0,onEditorReady:x,skipScrollMarginWithList:ee})=>{let{t:S}=a(`chat`),C=We(),w=F(et.dbMessages),T=F(e=>e.context),E=(0,Q.useMemo)(()=>Et(T),[T]),D=Ni(T),[O,k,te,ne]=F(e=>[e.context.agentId,e.inputMessage,e.sendMessage,e.stopGenerating]),[re,ie]=Ee(e=>[Ce.getEnableHistoryCountById(O||``)(e),Ce.getHistoryCountById(O||``)(e)]),ae=(0,Q.useMemo)(()=>ti(w),[w]),oe=(0,Q.useMemo)(()=>ni(w,{enableHistoryCount:re,historyCount:ie}),[w,re,ie]),se=(0,Q.useCallback)(()=>ae.slice(-25),[ae]),ce=F(e=>e.updateInputMessage),le=F(e=>e.setEditor),ue=F(e=>e.setChatInputOverlayHeight),de=(0,Q.useRef)(null);(0,Q.useEffect)(()=>{let e=de.current;if(!e)return;let t=new ResizeObserver(([e])=>{ue(Math.round(e.contentRect.height))});return t.observe(e),()=>{t.disconnect(),ue(0)}},[ue]);let fe=F(qe.isInputVisiblyLoading),pe=P(e=>wt.isInputLoadingByContext(T)(e)),me=F(et.pendingInterventions,(e,t)=>e.length===t.length?e.every((e,n)=>e.toolCallId===t[n].toolCallId&&e.requestArgs===t[n].requestArgs):!1),A=me.length>0,he=F(qe.sendMessageError),ge=P(e=>e.clearSendMessageError),ve=He(Ve.chatUploadFileList),j=He(Ve.chatContextSelections(E)),M=He(Ve.isUploadingFiles),ye=P(e=>wt.queuedMessageCount(T)(e)>0),be=(_t(w)?.items.length??0)>0,xe=P(e=>wt.getVisibleAgentRuntimeStartTimeByContext(T)(e)!==void 0),N=ai(e=>O?e.armedAt[O]:void 0),Se=!!O&&!T.topicId&&N!==void 0,we=!k.trim()&&ve.length===0&&j.length===0,{placeholderVariant:Te,showSendMenu:De,showStopButton:Oe}=ri({disableFollowUpVariant:r,isInputEmpty:we,isInputLoading:fe}),ke=we||M||!!i&&pe||!!o,Ae=y?.disabled,je=(0,Q.useCallback)(()=>{if(o)return!0;if(Ae!==void 0)return Ae;let e=He.getState();if(Ve.isUploadingFiles(e))return!0;let{context:t,editor:n}=C.getState();if(i&&wt.isInputLoadingByContext(t)(P.getState()))return!0;let r=String(n?.getMarkdownContent?.()||``).trim().length>0,a=Ve.chatUploadFileList(e).length>0,s=Ve.chatContextSelections(Et(t))(e).length>0;return!r&&!a&&!s},[Ae,i,o,C]),Me=!De&&!!_,Ne=wn(),Pe=Tn(v),Fe=(0,Q.useCallback)(async({clearContent:e,getMarkdownContent:t,getEditorData:n})=>{if(o)return;let r=He.getState(),a=Ve.chatUploadFileList(r),s=Ve.isUploadingFiles(r),c=Ve.chatContextSelections(E)(r);if(s||i&&pe)return;let l=t();if(!l.trim()&&a.length===0&&c.length===0)return;let u=n(),d=()=>{e(),r.clearChatUploadFileList(),r.clearChatContextSelections(E)};if(C.getState().scheduledSendAt){await C.getState().commitScheduledSend(l,a)&&d();return}d();let{contextSelections:f,pageSelections:p}=yn(c);await te({contextSelections:f,editorData:u,files:a,message:l,onPreflightFailure:()=>{He.getState().restoreChatContextSelections(E,c)},pageSelections:p})},[E,te,C,i,o,pe]),Ie={disabled:ke,generating:Oe,onStop:ne,...y,...Me?{shape:y?.shape??`round`}:void 0},Le=(0,Q.useCallback)(e=>wt.isInputVisiblyLoadingByContext(T)(P.getState())?!1:!!P.getState().sendVoiceMessage({canSend:Mi,context:T,recording:e,send:(e,{context:t,messageId:n,signal:r})=>Qr(te,e,{context:t,optimisticUserMessageId:n,signal:r})}),[T,te]),Re=(0,$.jsxs)(Ft,{style:{position:`relative`,...ee?{marginTop:-12}:null},children:[A&&(0,$.jsx)(kr,{interventions:me}),(0,$.jsxs)(`div`,{style:{display:A?`none`:`contents`},children:[he&&(0,$.jsx)(h,{paddingBlock:`0 6px`,paddingInline:12,children:(0,$.jsx)(_e,{closable:!0,title:S(`input.errorMsg`,{errorMsg:he}),type:`secondary`,onClose:ge})}),Ne,(0,$.jsxs)(h,{paddingInline:12,ref:de,style:{bottom:`100%`,left:12,position:`absolute`,right:12,zIndex:10},children:[(0,$.jsx)(Hr,{}),!i&&ye&&(0,$.jsx)(Yr,{}),(0,$.jsx)(Ir,{topAttached:!i&&ye}),(0,$.jsx)($t,{topAttached:!i&&ye||be}),(0,$.jsx)(Ai,{topAttached:!i&&ye||be||xe})]}),(0,$.jsx)(ln,{actionBarStyle:e,borderRadius:12,compact:n,controlBarSlot:g,hidden:A,isConfigLoading:p,leftContent:l,placeholderVariant:Te,sendAreaPrefix:Pe,showControlBar:b,extraActionItems:[...f??[],{children:(0,$.jsx)(ui,{}),key:`goal-armed-chip`}],placeholder:Se?S(`acceptance.tray.goalArmedPlaceholder`,{ns:`verify`}):void 0})]})]});return(0,$.jsx)(sn,{agentId:O,allowExpand:t,canRecordVoiceMessage:D,contextSelectionKey:E,contextWindowMessages:oe,draftKey:E,feature:s,getMessages:se,leftActions:c,mentionItems:m,resolveSendBlocked:je,rightActions:u,sendButtonProps:Ie,sendMenu:De?_:void 0,slashPlacement:`top`,chatInputEditorRef:e=>{e&&(le(e),x?.(e))},onMarkdownContentChange:ce,onSend:Fe,onVoiceMessageSend:Le,children:d??Re})}),Fi.displayName=`ConversationChatInput`})),Li=e((()=>{Ht(),Ii(),Zt(),Wt(),Lr()}));export{Er as a,Tr as i,Fi as n,xr as o,Ii as r,Sr as s,Li as t};