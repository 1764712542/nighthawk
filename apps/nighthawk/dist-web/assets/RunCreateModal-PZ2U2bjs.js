import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{n as o,t as s}from"./agent-Cvv887Je.js";import{Mn as c,O as l,Z as ee,cs as u,er as te,ls as d}from"./app-const-Bl9rlHwj.js";import{B as f,Qr as p,St as m,bt as ne,mr as h}from"./dialog-BebLzVzY.js";import{Dt as g,a as _,b as v,c as y,pt as b,t as x,xt as S,zt as C}from"./es-CVJR_g25.js";import{eg as w,vr as re,x as T}from"../vendor/vendor-icons-C-Y4oLkk.js";import{B as E,F as D,R as O,et as k,i as ie,t as A,x as j}from"./base-ui-BAv0gRbN.js";import{Ra as ae,_a as oe,t as M}from"./es-LELdnrjB.js";import{a as N,i as P,n as F,t as I}from"./workspaceAwarePath-DIBsOTQc.js";import{n as L,t as R}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{r as z,t as B}from"./eval-8_vdTK9q.js";var V,H,U,W,G,K,q,J=e((()=>{l(),M(),A(),v(),x(),T(),V=t(d()),i(),P(),R(),F(),o(),B(),H=t(u()),U=100,W=30,G=240,K=_(({css:e})=>({agentSelect:e`
    .ant-select-content-value {
      height: 22px !important;
    }
  `,hint:e`
    display: inline-block;
    margin-block-start: 4px;
    font-size: ${y.fontSizeSM};
    color: ${y.colorTextQuaternary};
  `,timestampLink:e`
    cursor: pointer;

    display: inline-block;

    margin-block-start: 4px;

    font-size: ${y.fontSizeSM};

    transition: color 0.15s ease;

    &:hover {
      color: ${y.colorText};
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `})),q=({benchmarkId:e,datasetId:t,datasetName:n,experimentId:r,onLoadingChange:i,onSubmitReady:o})=>{let{t:l}=a(`eval`),{t:u}=a(`chat`),{close:d}=O(),m=L(),h=N(),_=z(e=>e.createRun),v=z(e=>e.startRun),x=z(e=>e.datasetList),[w]=S.useForm(),T=S.useWatch(`k`,w)??1,E=!!t&&!!n,[D,A]=(0,V.useState)([]),[M,P]=(0,V.useState)(!1);(0,V.useEffect)(()=>{P(!0),s.queryAgents().then(e=>A(e)).finally(()=>P(!1))},[]),(0,V.useEffect)(()=>{t&&!E&&w.setFieldsValue({datasetId:t})},[t,E,w]);let F=(0,V.useMemo)(()=>({avatar:c,id:ee,title:u(`inbox.title`)}),[u]),R=(0,V.useMemo)(()=>[F,...D],[F,D]),B=(0,V.useMemo)(()=>R.map(e=>({label:(0,H.jsxs)(`span`,{style:{alignItems:`center`,display:`inline-flex`,gap:8},children:[(0,H.jsx)(k,{avatar:e.avatar||void 0,background:e.backgroundColor||void 0,size:20,title:e.title||``}),(0,H.jsx)(`span`,{children:e.title})]}),title:e.title||``,value:e.id})),[R]),q=(0,V.useCallback)((e,t)=>{t.stopPropagation(),t.preventDefault(),window.open(I(te(e),h),`agent_${e}`,`noopener,noreferrer`)},[h]),J=(0,V.useCallback)(async n=>{let a;try{a=await w.validateFields()}catch{return}i?.(!0);try{let i=a.maxSteps??U,o=a.timeoutMinutes??W,s=await _({config:{k:a.k??1,maxSteps:i,timeout:o*6e4},datasetId:E?t:a.datasetId,experimentId:r,name:a.name,targetAgentId:a.targetAgentId});if(s?.id){try{n&&await v(s.id)}catch{f.error(l(`run.error.start`))}m(`/eval/bench/${e}/runs/${s.id}`)}d()}catch(e){f.error(e instanceof Error&&e.message?e.message:l(`run.create.error`))}finally{i?.(!1)}},[e,d,_,t,r,w,E,m,i,v,l]);return(0,V.useEffect)(()=>{o(J)},[o,J]),(0,H.jsxs)(S,{form:w,layout:`vertical`,children:[(0,H.jsx)(S.Item,{label:l(`run.create.name`),name:`name`,rules:[{message:l(`run.create.name.required`),required:!0}],extra:(0,H.jsx)(ie,{className:K.timestampLink,type:`secondary`,onClick:()=>{let e=new Date,t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)} ${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`;w.setFieldsValue({name:t})},children:l(`run.create.name.useTimestamp`)}),children:(0,H.jsx)(b,{placeholder:l(`run.create.name.placeholder`),variant:`filled`})}),(0,H.jsx)(S.Item,{label:l(`run.create.agent`),name:`targetAgentId`,rules:[{message:l(`run.create.agent.required`),required:!0}],children:(0,H.jsx)(j,{allowClear:!0,showSearch:!0,className:K.agentSelect,loading:M,options:B,placeholder:l(`run.create.agent.placeholder`),variant:`filled`,optionRender:e=>(0,H.jsxs)(`span`,{style:{alignItems:`center`,display:`flex`,gap:8,justifyContent:`space-between`},children:[e.label,(0,H.jsx)(ne,{icon:re,size:`small`,onClick:t=>q(e.value,t)})]})})}),!E&&(0,H.jsx)(S.Item,{label:l(`run.create.dataset`),name:`datasetId`,rules:[{message:l(`run.create.dataset.required`),required:!0}],children:(0,H.jsx)(j,{placeholder:l(`run.create.dataset.placeholder`),variant:`filled`,options:x.map(e=>({label:(0,H.jsxs)(g,{children:[(0,H.jsx)(`span`,{children:e.name}),e.testCaseCount!==void 0&&(0,H.jsx)(`span`,{style:{color:y.colorTextQuaternary,fontSize:12},children:l(`run.create.caseCount`,{count:e.testCaseCount})})]}),value:e.id}))})}),(0,H.jsx)(ae,{defaultExpandedKeys:[],children:(0,H.jsx)(oe,{itemKey:`advanced`,paddingBlock:8,paddingInline:4,title:l(`run.create.advanced`),children:(0,H.jsxs)(p,{gap:16,style:{paddingTop:8},children:[(0,H.jsx)(S.Item,{extra:(0,H.jsx)(`span`,{className:K.hint,children:l(`run.config.k.hint`,{k:T})}),initialValue:1,label:l(`run.config.k`),name:`k`,style:{marginBottom:0},children:(0,H.jsx)(C,{max:10,min:1,step:1,style:{width:`100%`},variant:`filled`})}),(0,H.jsx)(S.Item,{extra:(0,H.jsx)(`span`,{className:K.hint,children:l(`run.config.maxSteps.hint`)}),initialValue:U,label:l(`run.config.maxSteps`),name:`maxSteps`,style:{marginBottom:0},children:(0,H.jsx)(C,{max:1e3,min:1,step:10,style:{width:`100%`},variant:`filled`})}),(0,H.jsx)(S.Item,{initialValue:W,label:l(`run.config.timeout`),name:`timeoutMinutes`,style:{marginBottom:0},children:(0,H.jsx)(C,{max:G,min:1,style:{width:`100%`},suffix:l(`run.config.timeout.unit`),variant:`filled`})})]})})})]})}})),Y,X,Z,se=e((()=>{M(),A(),x(),T(),i(),Y=t(u()),X=_(({css:e})=>({splitButton:e`
    & > button + button {
      margin-inline-start: -1px;
    }

    & > button:first-child {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    & > button:last-child {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  `})),Z=({loading:e,onCreateAndStart:t,onCreateOnly:n})=>{let{t:r}=a(`eval`),{close:i}=O(),o=[{key:`createAndStart`,label:r(`run.create.confirm`),onClick:t}];return(0,Y.jsxs)(E,{children:[(0,Y.jsx)(h,{disabled:e,onClick:i,children:r(`common.cancel`)}),(0,Y.jsxs)(p,{horizontal:!0,className:X.splitButton,children:[(0,Y.jsx)(h,{loading:e,type:`primary`,onClick:n,children:r(`run.create.createOnly`)}),(0,Y.jsx)(m,{items:o,children:(0,Y.jsx)(h,{icon:(0,Y.jsx)(w,{size:14}),loading:e,type:`primary`})})]})]})}})),Q,$,ce=e((()=>{A(),n(),J(),se(),Q=t(u()),$=e=>{let t={},n=async()=>{},i=!1,a=()=>(0,Q.jsx)(Z,{loading:i,onCreateAndStart:()=>n(!0),onCreateOnly:()=>n(!1)}),o=e=>{i=e,t.instance?.update({footer:a()})};return t.instance=D({content:(0,Q.jsx)(q,{...e,onLoadingChange:o,onSubmitReady:e=>{n=e}}),footer:a(),title:e.datasetId&&e.datasetName?r(`run.create.titleWithDataset`,{dataset:e.datasetName,ns:`eval`}):r(`run.create.title`,{ns:`eval`}),width:520}),t.instance}}));export{ce as n,$ as t};