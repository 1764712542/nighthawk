import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Qr as l,bt as u,mr as d}from"./dialog-BebLzVzY.js";import{a as f,y as ee}from"../vendor/vendor-react-CBcx1o7d.js";import{a as p,b as m,c as h,t as g,xt as _}from"./es-CVJR_g25.js";import{Ka as te,Kp as ne,O as re,Rt as ie,Sv as ae,wa as oe,x as v}from"../vendor/vendor-icons-C-Y4oLkk.js";import{B as y,P as b,R as x,i as S,t as C,x as w}from"./base-ui-BAv0gRbN.js";import{$r as T,Li as E,Ra as D,_a as O,qr as k,t as A}from"./es-LELdnrjB.js";import{n as se,t as j}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as M,t as ce}from"./WorkspaceLink-DKEucXjF.js";import{n as N,t as le}from"./AsyncBoundary-CzRTtM14.js";import{a as P,i as F,r as I,s as ue,t as L}from"./eval-8_vdTK9q.js";import{i as R,r as de}from"./StatusBadge-I2ZCpKG6.js";import{a as fe,c as pe,d as me,f as he,i as ge,l as _e,n as ve,o as ye,r as be,s as xe,t as Se,u as Ce}from"./RunCard-BWIuI3M6.js";import{n as we,t as Te}from"./SegmentBar-DiURj7-z.js";import{n as Ee,t as z}from"./RunCreateModal-PZ2U2bjs.js";var B,V,H,U,De=e((()=>{A(),C(),m(),g(),B=t(s()),i(),P(),V=t(o()),H=p(({css:e})=>({sectionLabel:e`
    margin-block-end: 12px;
    font-size: ${h.fontSizeSM};
    font-weight: 500;
    color: ${h.colorTextSecondary};
  `})),U=({formId:e,onLoadingChange:t,onSuccess:n,testCase:r})=>{let{t:i}=a(`eval`),{close:o}=x(),[s]=_.useForm(),u=_.useWatch(`evalMode`,s);return(0,B.useEffect)(()=>{r&&s.setFieldsValue({category:r.content?.category,difficulty:r.metadata?.difficulty,evalConfig:r.evalConfig,evalMode:r.evalMode||void 0,expected:r.content?.expected,input:r.content?.input,tags:r.metadata?.tags?.join(`, `)})},[r,s]),(0,V.jsxs)(_,{form:s,layout:`vertical`,name:e,onFinish:async e=>{t?.(!0);try{let t=e.tags?e.tags.split(`,`).map(e=>e.trim()).filter(Boolean):void 0;await F.updateTestCase({content:{category:e.category||void 0,expected:e.expected,input:e.input},evalConfig:e.evalConfig?.judgePrompt?e.evalConfig:null,evalMode:e.evalMode||null,id:r.id,metadata:{...e.difficulty?{difficulty:e.difficulty}:{},...t?{tags:t}:{}}}),await n?.(r.datasetId),c.success(i(`testCase.edit.success`)),o()}catch{c.error(i(`testCase.edit.error`))}finally{t?.(!1)}},children:[(0,V.jsx)(`div`,{className:H.sectionLabel,children:i(`caseDetail.section.testCase`)}),(0,V.jsx)(_.Item,{label:i(`testCase.create.input.label`),name:`input`,rules:[{required:!0}],children:(0,V.jsx)(k,{autoSize:{maxRows:6,minRows:3},placeholder:i(`testCase.create.input.placeholder`)})}),(0,V.jsx)(_.Item,{label:i(`testCase.create.expected.label`),name:`expected`,rules:[{message:i(`testCase.create.expected.required`),required:!0}],children:(0,V.jsx)(k,{autoSize:{maxRows:6,minRows:2},placeholder:i(`testCase.create.expected.placeholder`)})}),(0,V.jsx)(`div`,{className:H.sectionLabel,style:{marginBlockStart:4},children:i(`caseDetail.section.scoring`)}),(0,V.jsx)(_.Item,{label:i(`evalMode.label`),name:`evalMode`,children:(0,V.jsx)(w,{allowClear:!0,placeholder:i(`evalMode.placeholder`),optionRender:e=>(0,V.jsxs)(l,{gap:4,style:{paddingBlock:4},children:[(0,V.jsx)(`div`,{children:e.label}),(0,V.jsx)(S,{fontSize:12,type:`secondary`,children:i(`evalMode.${e.value}.desc`)})]}),options:[{label:i(`evalMode.equals`),value:`equals`},{label:i(`evalMode.contains`),value:`contains`},{label:i(`evalMode.llm-rubric`),value:`llm-rubric`}]})}),u===`llm-rubric`&&(0,V.jsx)(_.Item,{label:i(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,V.jsx)(k,{autoSize:{maxRows:8,minRows:3},placeholder:i(`evalMode.prompt.placeholder`)})}),(0,V.jsx)(D,{children:(0,V.jsx)(O,{itemKey:`advanced`,paddingBlock:8,paddingInline:4,title:i(`testCase.create.advanced`),children:(0,V.jsxs)(l,{gap:16,style:{paddingBlockStart:8},children:[(0,V.jsx)(_.Item,{label:i(`table.columns.category`),name:`category`,style:{marginBottom:0},children:(0,V.jsx)(T,{placeholder:i(`dataset.import.categoryDesc`)})}),(0,V.jsx)(_.Item,{label:i(`testCase.create.difficulty.label`),name:`difficulty`,style:{marginBottom:0},children:(0,V.jsx)(w,{allowClear:!0,placeholder:i(`testCase.create.difficulty.label`),options:[{label:i(`difficulty.easy`),value:`easy`},{label:i(`difficulty.medium`),value:`medium`},{label:i(`difficulty.hard`),value:`hard`}]})}),(0,V.jsx)(_.Item,{label:i(`testCase.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,V.jsx)(T,{placeholder:i(`testCase.create.tags.placeholder`)})})]})})})]})}})),W,G,Oe=e((()=>{C(),i(),W=t(o()),G=({formId:e,loading:t})=>{let{t:n}=a(`eval`),{close:r}=x();return(0,W.jsxs)(y,{children:[(0,W.jsx)(d,{disabled:t,onClick:r,children:n(`common.cancel`)}),(0,W.jsx)(d,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`common.update`)})]})}})),K,q,ke=e((()=>{n(),R(),De(),Oe(),K=t(o()),q=e=>de({renderContent:({formId:t,setLoading:n})=>(0,K.jsx)(U,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,K.jsx)(G,{formId:e,loading:t}),title:r(`testCase.edit.title`,{ns:`eval`}),width:520})})),Ae,J,Y,je,Me=e((()=>{A(),C(),g(),v(),Ae=t(s()),i(),J=t(o()),Y=p(({css:e})=>({container:e`
    flex-shrink: 0;
    width: 360px;
    border-inline-start: 1px solid ${h.colorBorderSecondary};
  `,content:e`
    overflow-y: auto;
    flex: 1;
    padding: 16px;
  `,fieldLabel:e`
    margin: 0;

    font-size: ${h.fontSizeSM};
    font-weight: 600;
    color: ${h.colorTextTertiary};
    text-transform: uppercase;
    letter-spacing: 0.02em;
  `,fieldValue:e`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${h.borderRadius};

    font-size: ${h.fontSize};
    line-height: 1.6;
    color: ${h.colorText};
    word-break: break-word;
    white-space: pre-wrap;

    background: ${h.colorFillQuaternary};
  `,header:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${h.colorBorderSecondary};
  `,title:e`
    margin: 0;
    font-size: ${h.fontSize};
    font-weight: 500;
    color: ${h.colorText};
  `})),je=(0,Ae.memo)(({testCase:e,onClose:t})=>{let{t:n}=a(`eval`);return(0,J.jsxs)(l,{className:Y.container,height:`100%`,children:[(0,J.jsxs)(`div`,{className:Y.header,children:[(0,J.jsx)(`p`,{className:Y.title,children:n(`testCase.preview.title`)}),(0,J.jsx)(u,{icon:re,size:`small`,onClick:t})]}),(0,J.jsx)(`div`,{className:Y.content,children:(0,J.jsxs)(l,{gap:16,children:[(0,J.jsxs)(l,{gap:4,children:[(0,J.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,J.jsx)(`p`,{className:Y.fieldLabel,children:n(`testCase.preview.input`)}),e.content?.input&&(0,J.jsx)(E,{content:e.content.input,size:`small`})]}),(0,J.jsx)(`div`,{className:Y.fieldValue,children:e.content?.input})]}),e.content?.expected&&(0,J.jsxs)(l,{gap:4,children:[(0,J.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,J.jsx)(`p`,{className:Y.fieldLabel,children:n(`testCase.preview.expected`)}),(0,J.jsx)(E,{content:e.content.expected,size:`small`})]}),(0,J.jsx)(`div`,{className:Y.fieldValue,children:e.content.expected})]}),e.content?.category&&(0,J.jsxs)(l,{gap:4,children:[(0,J.jsx)(`p`,{className:Y.fieldLabel,children:n(`table.columns.category`)}),(0,J.jsx)(`div`,{className:Y.fieldValue,children:e.content.category})]})]})})]})})})),X,Z,Q,$;e((()=>{A(),C(),g(),v(),X=t(s()),i(),f(),N(),j(),M(),P(),L(),he(),Ce(),we(),pe(),ke(),Me(),ye(),Ee(),ge(),ve(),Z=t(o()),Q=p(({css:e})=>({backLink:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    width: fit-content;

    font-size: ${h.fontSize};
    color: ${h.colorTextTertiary};
    text-decoration: none;

    transition: color 0.15s ease;

    &:hover {
      color: ${h.colorText};
    }

    &:focus-visible {
      outline: 2px solid ${h.colorPrimary};
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,header:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: ${h.borderRadiusLG};

    background: ${h.colorPrimaryBg};
  `,heroBand:e`
    padding: 20px;
    border-radius: ${h.borderRadiusLG};
    background: ${h.colorFillQuaternary};
  `,heroValue:e`
    font-family: ${h.fontFamilyCode};
    font-size: ${h.fontSizeHeading2};
    font-weight: 600;
    line-height: 1;
    color: ${h.colorText};
  `,summaryDot:e`
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `,tableWrapper:e`
    overflow: hidden;
    border: 1px solid ${h.colorBorderSecondary};
    border-radius: ${h.borderRadius};
  `})),$=(0,X.memo)(()=>{let{t:e}=a(`eval`),{benchmarkId:t,datasetId:n}=ee(),r=se(),[i,o]=(0,X.useState)({current:1,pageSize:10}),[s,u]=(0,X.useState)(``),[f,p]=(0,X.useState)(`all`),[m,g]=(0,X.useState)(null),_=I(e=>e.useFetchDatasetDetail),re=I(e=>e.useFetchTestCases),v=I(e=>e.useFetchDatasetRuns),y=I(ue.datasetRunList(n)),x=I(e=>e.refreshTestCases),C=I(e=>e.refreshDatasetDetail),{data:w,error:T,isLoading:E,mutate:D}=_(n);v(n);let O=(0,X.useMemo)(()=>[...y].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),[y]),{data:k}=re({datasetId:n,limit:i.pageSize,offset:(i.current-1)*i.pageSize}),A=k?.data||[],j=k?.total||0,M=A.filter(e=>!(f!==`all`&&e.metadata?.difficulty!==f||s&&!e.content?.input?.toLowerCase().includes(s.toLowerCase()))),N=(0,X.useMemo)(()=>{let e={easy:0,hard:0,medium:0};for(let t of A){let n=t?.metadata?.difficulty;(n===`easy`||n===`medium`||n===`hard`)&&(e[n]+=1)}return{counts:e,segments:[{color:h.colorSuccess,value:e.easy},{color:h.colorWarning,value:e.medium},{color:h.colorError,value:e.hard}],tagged:e.easy+e.medium+e.hard}},[A]),P=(0,X.useCallback)(async()=>{n&&(await x(n),await C(n))},[n,x,C]),L=(0,X.useCallback)(t=>{b({content:e(`testCase.delete.confirm`),okButtonProps:{danger:!0},okText:e(`common.delete`),onOk:async()=>{try{await F.deleteTestCase(t.id),c.success(e(`testCase.delete.success`)),await P()}catch{c.error(e(`testCase.delete.error`))}},title:e(`common.delete`)})},[P,e]),R=(0,X.useCallback)(()=>{b({content:e(`dataset.delete.confirm`),okButtonProps:{danger:!0},okText:e(`common.delete`),onOk:async()=>{try{await F.deleteDataset(n),c.success(e(`dataset.delete.success`)),r(`/eval/bench/${t}`)}catch{c.error(e(`dataset.delete.error`))}},title:e(`common.delete`)})},[t,n,r,e]);return(0,Z.jsx)(le,{data:w,error:T,errorVariant:`page`,isEmpty:!w,isLoading:E,onRetry:()=>D(),children:w&&(0,Z.jsxs)(l,{horizontal:!0,style:{flex:1,minHeight:0},children:[(0,Z.jsxs)(l,{flex:1,gap:24,style:{minWidth:0,overflow:`auto`,paddingBlock:24,paddingInline:32},children:[(0,Z.jsxs)(ce,{className:Q.backLink,to:`/eval/bench/${t}`,children:[(0,Z.jsx)(ae,{size:16}),e(`dataset.detail.backToBenchmark`)]}),(0,Z.jsxs)(l,{horizontal:!0,align:`start`,justify:`space-between`,children:[(0,Z.jsxs)(l,{horizontal:!0,align:`start`,gap:12,children:[(0,Z.jsx)(`div`,{className:Q.header,children:(0,Z.jsx)(ne,{size:20,style:{color:h.colorPrimary}})}),(0,Z.jsxs)(l,{gap:4,children:[(0,Z.jsx)(S,{as:`h4`,style:{fontSize:20,fontWeight:600,margin:0},children:w.name}),w.description&&(0,Z.jsx)(S,{type:`secondary`,children:w.description})]})]}),(0,Z.jsxs)(l,{horizontal:!0,gap:8,children:[(0,Z.jsx)(d,{icon:te,size:`small`,onClick:()=>me({dataset:w,onSuccess:P}),children:e(`common.edit`)}),(0,Z.jsx)(d,{danger:!0,icon:ie,size:`small`,onClick:R,children:e(`common.delete`)})]})]}),(0,Z.jsxs)(l,{horizontal:!0,align:`center`,className:Q.heroBand,gap:16,justify:`space-between`,children:[(0,Z.jsxs)(l,{gap:6,children:[(0,Z.jsx)(`span`,{className:Q.heroValue,children:j}),(0,Z.jsx)(S,{color:h.colorTextTertiary,fontSize:12,children:e(`dataset.detail.testCases`)})]}),N.tagged>0&&(0,Z.jsxs)(l,{gap:8,style:{maxWidth:280,minWidth:0,width:`100%`},children:[(0,Z.jsx)(Te,{segments:N.segments}),(0,Z.jsx)(l,{horizontal:!0,gap:12,justify:`flex-end`,style:{flexWrap:`wrap`},children:[`easy`,`medium`,`hard`].map(t=>(0,Z.jsxs)(l,{horizontal:!0,align:`center`,gap:6,children:[(0,Z.jsx)(`span`,{className:Q.summaryDot,style:{background:t===`easy`?h.colorSuccess:t===`medium`?h.colorWarning:h.colorError}}),(0,Z.jsxs)(S,{color:h.colorTextTertiary,fontSize:12,children:[e(`difficulty.${t}`),` `,N.counts[t]]})]},t))})]})]}),(0,Z.jsxs)(l,{gap:12,children:[(0,Z.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Z.jsx)(S,{weight:600,children:e(`dataset.detail.testCases`)}),(0,Z.jsx)(S,{type:`secondary`,children:e(`dataset.detail.caseCount`,{count:j})})]}),(0,Z.jsx)(`div`,{className:Q.tableWrapper,children:(0,Z.jsx)(fe,{datasetEvalMode:w?.evalMode,diffFilter:f,pagination:i,search:s,selectedId:m?.id,testCases:M,total:j,onDelete:L,onPageChange:(e,t)=>o({current:e,pageSize:t}),onPreview:g,onAddCase:()=>xe({datasetId:n,onSuccess:P}),onDiffFilterChange:e=>{p(e),o(e=>({...e,current:1}))},onEdit:e=>q({onSuccess:P,testCase:e}),onImport:()=>_e({datasetId:n,onSuccess:P}),onSearchChange:e=>{u(e),o(e=>({...e,current:1}))}})})]}),(0,Z.jsxs)(l,{gap:12,children:[(0,Z.jsxs)(l,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Z.jsx)(S,{weight:600,children:e(`dataset.detail.relatedRuns`,{count:O.length})}),(0,Z.jsx)(d,{icon:oe,size:`small`,onClick:()=>z({benchmarkId:t,datasetId:n,datasetName:w.name}),children:e(`dataset.detail.addRun`)})]}),O.length>0?(0,Z.jsx)(l,{gap:12,children:O.map(e=>(0,Z.jsx)(Se,{benchmarkId:t,run:e},e.id))}):(0,Z.jsx)(be,{onCreate:()=>z({benchmarkId:t,datasetId:n,datasetName:w.name})})]})]}),m&&(0,Z.jsx)(je,{testCase:m,onClose:()=>g(null)})]})})})}))();export{$ as default};