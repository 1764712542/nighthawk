import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Hr as l,Qr as u,St as ee,bt as d,mr as f}from"./dialog-BebLzVzY.js";import{a as te,y as ne}from"../vendor/vendor-react-CBcx1o7d.js";import{a as p,b as m,c as h,hn as re,pt as ie,qt as g,t as _,xt as v}from"./es-CVJR_g25.js";import{Aa as ae,Ka as oe,Kp as y,R_ as se,Rt as ce,Xh as b,cf as le,vv as ue,wp as de,x}from"../vendor/vendor-icons-C-Y4oLkk.js";import{B as fe,R as pe,i as S,t as C,x as me}from"./base-ui-BAv0gRbN.js";import{Or as w,t as T,zt as he}from"./es-LELdnrjB.js";import{n as ge,t as _e}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as E,t as D}from"./WorkspaceLink-DKEucXjF.js";import{n as ve,t as ye}from"./AsyncBoundary-CzRTtM14.js";import{c as be,r as O,t as k,u as xe}from"./eval-8_vdTK9q.js";import{i as Se,n as Ce,r as we,t as Te}from"./StatusBadge-I2ZCpKG6.js";import{n as Ee,t as De}from"./SegmentBar-DiURj7-z.js";import{n as Oe,t as ke}from"./RunCreateModal-PZ2U2bjs.js";var A,j,Ae,je,M,N=e((()=>{C(),m(),n(),A=t(s()),i(),k(),Se(),j=t(o()),Ae=(0,A.memo)(({experiment:e,formId:t,onLoadingChange:n,onSuccess:r})=>{let{t:i}=a(`eval`),{close:o}=pe(),[s]=v.useForm(),l=O(e=>e.createExperiment),u=O(e=>e.updateExperiment),ee=O(e=>e.useFetchBenchmarks),d=O(xe.benchmarkList);return ee(),(0,A.useEffect)(()=>{e&&s.setFieldsValue({benchmarkIds:e.benchmarks.map(e=>e.id),description:e.description||void 0,name:e.name})},[e,s]),(0,j.jsxs)(v,{form:s,id:t,layout:`vertical`,onFinish:async t=>{n(!0);try{let n=e?await u({...t,id:e.id}):await l(t);c.success(i(e?`experiment.edit.success`:`experiment.create.title`)),o(),r?.(n.id)}catch(t){c.error(t instanceof Error?t.message:i(e?`experiment.edit.error`:`experiment.create.error`))}finally{n(!1)}},children:[(0,j.jsx)(v.Item,{label:i(`experiment.create.name.label`),name:`name`,rules:[{message:i(`experiment.create.nameRequired`),required:!0}],children:(0,j.jsx)(ie,{placeholder:i(`experiment.create.name.placeholder`)})}),(0,j.jsx)(v.Item,{label:i(`experiment.create.description.label`),name:`description`,children:(0,j.jsx)(ie.TextArea,{placeholder:i(`experiment.create.description.placeholder`),rows:3})}),(0,j.jsx)(v.Item,{label:i(`experiment.create.benchmarks.label`),name:`benchmarkIds`,rules:[{message:i(`experiment.create.benchmarksRequired`),required:!0}],children:(0,j.jsx)(me,{mode:`multiple`,placeholder:i(`experiment.create.benchmarks.placeholder`),options:d.map(e=>({label:e.name,value:e.id}))})})]})}),je=(0,A.memo)(({formId:e,loading:t,submitText:n})=>{let{t:r}=a(`eval`),{close:i}=pe();return(0,j.jsxs)(fe,{children:[(0,j.jsx)(f,{disabled:t,onClick:i,children:r(`common.cancel`)}),(0,j.jsx)(f,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n})]})}),M=({experiment:e,onSuccess:t}={})=>we({renderContent:({formId:n,setLoading:r})=>(0,j.jsx)(Ae,{experiment:e,formId:n,onLoadingChange:r,onSuccess:t}),renderFooter:({formId:t,loading:n})=>(0,j.jsx)(je,{formId:t,loading:n,submitText:r(e?`common.update`:`common.create`,{ns:`eval`})}),title:r(e?`experiment.edit.title`:`experiment.create.title`,{ns:`eval`}),width:520})})),Me,P,F,I,Ne=e((()=>{T(),C(),_(),x(),Me=t(s()),i(),E(),P=t(o()),F=p(({css:e})=>({iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: ${h.borderRadius};

    color: ${h.colorPrimary};

    background: ${h.colorPrimaryBg};
  `,row:e`
    padding-block: 10px;
    padding-inline: 4px;
    border-radius: ${h.borderRadius};
    transition: background 0.15s ease;

    &:hover {
      background: ${h.colorFillQuaternary};
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `})),I=(0,Me.memo)(({dataset:e,onAddRun:t})=>{let{t:n}=a(`eval`);return(0,P.jsxs)(u,{horizontal:!0,align:`center`,className:F.row,gap:12,children:[(0,P.jsx)(`div`,{className:F.iconBox,children:(0,P.jsx)(l,{icon:y,size:16})}),(0,P.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,P.jsx)(S,{ellipsis:!0,weight:500,children:e.name}),typeof e.testCaseCount==`number`&&(0,P.jsx)(S,{fontSize:12,type:`secondary`,children:n(`run.create.caseCount`,{count:e.testCaseCount})})]}),(0,P.jsx)(f,{icon:ae,size:`small`,type:`text`,onClick:()=>t(e),children:n(`dataset.detail.addRun`)}),(0,P.jsx)(D,{to:`/eval/bench/${e.benchmarkId}/datasets/${e.id}`,children:(0,P.jsx)(d,{icon:b,size:`small`})})]})})})),L,R,z,Pe,Fe=e((()=>{T(),C(),m(),_(),x(),L=t(s()),i(),E(),Ne(),R=t(o()),z=p(({css:e})=>({listCard:e`
    .ant-card-body {
      padding-block: 4px;
      padding-inline: 8px;
    }
  `,sectionTitle:e`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `})),Pe=(0,L.memo)(({actions:e,experiment:t})=>{let{t:n}=a(`eval`),r=(0,L.useMemo)(()=>t.benchmarks.map(t=>({benchmark:t,datasets:e.baselineDatasets.filter(e=>e.benchmarkId===t.id)})),[t.benchmarks,e.baselineDatasets]);return(0,R.jsxs)(u,{gap:12,children:[(0,R.jsx)(`h3`,{className:z.sectionTitle,children:n(`experiment.detail.benchmarks`)}),r.map(({benchmark:t,datasets:r})=>(0,R.jsx)(g,{className:z.listCard,title:t.name,extra:(0,R.jsx)(D,{to:`/eval/bench/${t.id}`,children:(0,R.jsx)(d,{icon:b,size:`small`})}),children:r.length===0?(0,R.jsx)(w,{description:n(`experiment.detail.benchmarksEmpty`),icon:y}):(0,R.jsx)(u,{gap:0,children:r.map(t=>(0,R.jsx)(I,{dataset:t,onAddRun:e.addRun},t.id))})},t.id))]})})})),Ie,B,Le,Re,ze=e((()=>{T(),C(),m(),_(),x(),Ie=t(s()),i(),_e(),k(),N(),B=t(o()),Le=p(({css:e})=>({meta:e`
    font-size: 13px;
    color: ${h.colorTextTertiary};
  `})),Re=(0,Ie.memo)(({experiment:e})=>{let{t}=a(`eval`),{modal:n}=re.useApp(),r=ge(),i=O(e=>e.deleteExperiment),o=[{danger:!0,icon:(0,B.jsx)(ce,{size:16}),key:`delete`,label:t(`common.delete`),onClick:()=>n.confirm({content:t(`experiment.actions.delete.confirm`),okButtonProps:{danger:!0},okText:t(`experiment.actions.delete`),onOk:async()=>{try{await i(e.id),r(`/eval`)}catch{c.error(t(`experiment.delete.error`))}},title:t(`experiment.actions.delete`)})}];return(0,B.jsxs)(u,{horizontal:!0,align:`start`,justify:`space-between`,children:[(0,B.jsxs)(u,{gap:6,style:{minWidth:0},children:[(0,B.jsx)(S,{as:`h3`,style:{fontSize:24,fontWeight:600,margin:0},children:e.name}),e.description&&(0,B.jsx)(S,{type:`secondary`,children:e.description}),(0,B.jsx)(`span`,{className:Le.meta,children:t(`experiment.detail.lastAccessed`,{time:new Date(e.accessedAt).toLocaleString()})})]}),(0,B.jsxs)(u,{horizontal:!0,gap:8,children:[(0,B.jsx)(f,{icon:oe,onClick:()=>M({experiment:e}),children:t(`common.edit`)}),(0,B.jsx)(ee,{items:o,trigger:[`click`],children:(0,B.jsx)(f,{icon:de})})]})]})})})),V,H,U,W,Be,Ve=e((()=>{T(),C(),_(),V=t(s()),i(),H=t(o()),U=p(({css:e})=>({statDivider:e`
    width: 1px;
    height: 28px;
    background: ${h.colorBorderSecondary};
  `,statValue:e`
    font-family: ${h.fontFamilyCode};
    font-weight: 600;
    color: ${h.colorText};
  `})),W=(0,V.memo)(({value:e,label:t})=>(0,H.jsxs)(u,{gap:2,children:[(0,H.jsx)(S,{className:U.statValue,fontSize:20,children:e}),(0,H.jsx)(S,{color:h.colorTextTertiary,fontSize:12,children:t})]})),Be=(0,V.memo)(({experiment:e,datasetCount:t})=>{let{t:n}=a(`eval`);return(0,H.jsxs)(u,{horizontal:!0,align:`center`,gap:24,children:[(0,H.jsx)(W,{label:n(`experiment.detail.stats.benchmarks`),value:e.benchmarks.length}),(0,H.jsx)(`span`,{className:U.statDivider}),(0,H.jsx)(W,{label:n(`sidebar.datasets`),value:t}),(0,H.jsx)(`span`,{className:U.statDivider}),(0,H.jsx)(W,{label:n(`experiment.detail.stats.runs`),value:e.runs.length})]})})})),He,G,K,q,Ue=e((()=>{T(),C(),_(),x(),He=t(s()),E(),Ee(),Ce(),G=t(o()),K=p(({css:e})=>({passRate:e`
    font-family: ${h.fontFamilyCode};
    font-weight: 600;
    color: ${h.colorText};
  `,row:e`
    padding-block: 10px;
    padding-inline: 4px;
    border-radius: ${h.borderRadius};
    transition: background 0.15s ease;

    &:hover {
      background: ${h.colorFillQuaternary};
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `})),q=(0,He.memo)(({run:e,benchmarkId:t})=>{let n=e.passCount??e.metrics?.passedCases??0,r=e.failCount??e.metrics?.failedCases??0,i=e.errorCount??e.metrics?.errorCases??0,a=e.passRate??e.metrics?.passRate;return(0,G.jsxs)(u,{horizontal:!0,align:`center`,className:K.row,gap:12,children:[(0,G.jsxs)(u,{flex:1,gap:4,style:{minWidth:0},children:[(0,G.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsx)(S,{ellipsis:!0,weight:500,children:e.name||e.id}),(0,G.jsx)(Te,{status:e.status})]}),(0,G.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[e.datasetName&&(0,G.jsx)(S,{fontSize:12,type:`secondary`,children:e.datasetName}),(0,G.jsx)(S,{fontSize:12,type:`secondary`,children:new Date(e.createdAt).toLocaleDateString()})]})]}),(0,G.jsxs)(u,{align:`flex-end`,gap:4,style:{width:140},children:[typeof a==`number`&&(0,G.jsxs)(`span`,{className:K.passRate,children:[(a*100).toFixed(0),`%`]}),(0,G.jsx)(De,{height:6,segments:[{color:h.colorSuccess,value:n},{color:h.colorError,value:r},{color:h.colorWarning,value:i}]})]}),(0,G.jsx)(D,{to:`/eval/bench/${t}/runs/${e.id}`,children:(0,G.jsx)(d,{icon:b,size:`small`})})]})})})),We,J,Ge,Ke,qe=e((()=>{T(),m(),_(),x(),We=t(s()),i(),Ue(),J=t(o()),Ge=p(({css:e})=>({listCard:e`
    .ant-card-body {
      padding-block: 4px;
      padding-inline: 8px;
    }
  `,sectionTitle:e`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `})),Ke=(0,We.memo)(({actions:e,experiment:t})=>{let{t:n}=a(`eval`),r=t.runs||[];return(0,J.jsxs)(u,{gap:12,children:[(0,J.jsx)(`h3`,{className:Ge.sectionTitle,children:n(`experiment.detail.runs`)}),(0,J.jsx)(g,{className:Ge.listCard,children:r.length===0?(0,J.jsx)(w,{description:n(`run.empty.title`),icon:le}):(0,J.jsx)(u,{gap:0,children:r.map(t=>(0,J.jsx)(q,{benchmarkId:e.resolveRunBenchmarkId(t),run:t},t.id))})})]})})})),Je,Y,Ye,Xe,Ze=e((()=>{T(),m(),_(),x(),Je=t(s()),i(),Ne(),Y=t(o()),Ye=p(({css:e})=>({listCard:e`
    .ant-card-body {
      padding-block: 4px;
      padding-inline: 8px;
    }
  `,sectionTitle:e`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  `})),Xe=(0,Je.memo)(({actions:e})=>{let{t}=a(`eval`),{scopedDatasets:n}=e;return(0,Y.jsxs)(u,{gap:12,children:[(0,Y.jsx)(`h3`,{className:Ye.sectionTitle,children:t(`experiment.detail.datasetsScoped`)}),(0,Y.jsx)(g,{className:Ye.listCard,children:n.length===0?(0,Y.jsx)(w,{description:t(`experiment.detail.datasetsScopedEmpty`),icon:y}):(0,Y.jsx)(u,{gap:0,children:n.map(t=>(0,Y.jsx)(I,{dataset:t,onAddRun:e.addRun},t.id))})})]})})})),X,Qe,$e=e((()=>{X=t(s()),Oe(),Qe=e=>{let t=e?.id,n=(0,X.useMemo)(()=>(e?.datasets||[]).filter(e=>e.sourceExperimentId!==t),[e,t]),r=(0,X.useMemo)(()=>(e?.datasets||[]).filter(e=>e.sourceExperimentId===t),[e,t]),i=(0,X.useMemo)(()=>new Map((e?.datasets||[]).map(e=>[e.id,e.benchmarkId])),[e]);return{addRun:e=>{t&&ke({benchmarkId:e.benchmarkId,datasetId:e.id,datasetName:e.name,experimentId:t})},baselineDatasets:n,resolveRunBenchmarkId:t=>i.get(t.datasetId)||e?.benchmarks[0]?.id||``,scopedDatasets:r}}})),et,Z,tt,nt,rt=e((()=>{T(),_(),et=t(s()),te(),ve(),k(),Fe(),ze(),Ve(),qe(),Ze(),$e(),Z=t(o()),tt=p(({css:e})=>({container:e`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `})),nt=(0,et.memo)(()=>{let{experimentId:e}=ne(),t=O(e=>e.useFetchExperimentDetail),n=O(be.getExperimentDetailById(e||``)),{error:r,isLoading:i,mutate:a}=t(e),o=Qe(n);return(0,Z.jsx)(u,{className:tt.container,gap:24,height:`100%`,width:`100%`,children:(0,Z.jsx)(ye,{data:n,error:r,errorVariant:`block`,isLoading:i&&!n,loading:(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(he,{active:!0,paragraph:{rows:2},title:{width:240}}),(0,Z.jsx)(he,{active:!0,paragraph:{rows:6},title:!1})]}),onRetry:()=>a(),children:n&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Re,{experiment:n}),(0,Z.jsx)(Be,{datasetCount:n.datasets.length,experiment:n}),(0,Z.jsx)(Pe,{actions:o,experiment:n}),(0,Z.jsx)(Xe,{actions:o}),(0,Z.jsx)(Ke,{actions:o,experiment:n})]})})})})})),it,Q,$,at,ot=e((()=>{T(),C(),_(),x(),it=t(s()),i(),E(),Ue(),Q=t(o()),$=p(({css:e})=>({card:e`
    height: 100%;
    padding: 20px;
    border: 1px solid ${h.colorBorderSecondary};
    border-radius: ${h.borderRadiusLG};

    background: ${h.colorBgContainer};

    transition: border-color 0.15s ease;

    &:hover {
      border-color: ${h.colorBorder};
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,detailLink:e`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: ${h.borderRadiusSM};

    color: ${h.colorTextTertiary};

    &:hover {
      color: ${h.colorText};
      background: ${h.colorFillTertiary};
    }
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: ${h.borderRadius};

    color: ${h.colorInfo};

    background: ${h.colorInfoBg};
  `,name:e`
    font-size: ${h.fontSizeLG};
    font-weight: 600;
    color: ${h.colorText};

    &:hover {
      color: ${h.colorPrimary};
    }
  `})),at=(0,it.memo)(({experiment:e})=>{let{t}=a(`eval`),n=e.recentRuns?.slice(0,3)||[],r=e.benchmarks[0]?.id||``;return(0,Q.jsxs)(u,{className:$.card,gap:16,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,justify:`space-between`,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:12,style:{minWidth:0},children:[(0,Q.jsx)(`div`,{className:$.iconBox,children:(0,Q.jsx)(l,{icon:se,size:22})}),(0,Q.jsxs)(u,{gap:2,style:{minWidth:0},children:[(0,Q.jsx)(D,{className:$.name,to:`/eval/experiments/${e.id}`,children:e.name}),(0,Q.jsxs)(S,{color:h.colorTextTertiary,fontSize:12,children:[t(`experiment.card.benchmarkCount`,{count:e.benchmarkCount}),` · `,t(`experiment.card.runCount`,{count:e.runCount})]})]})]}),(0,Q.jsx)(D,{className:$.detailLink,to:`/eval/experiments/${e.id}`,children:(0,Q.jsx)(l,{icon:ue,size:16})})]}),n.length>0&&(0,Q.jsx)(u,{gap:0,children:n.map(e=>(0,Q.jsx)(q,{benchmarkId:e.benchmarkId||r,run:e},e.id))})]})})})),st=e((()=>{N(),rt(),ot()}));export{rt as a,nt as i,at as n,M as o,ot as r,N as s,st as t};