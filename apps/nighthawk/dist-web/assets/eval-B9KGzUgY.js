import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Hr as l,Qr as u,mr as d}from"./dialog-BebLzVzY.js";import{a as f,b as p,c as m,t as h,xt as g}from"./es-CVJR_g25.js";import{Aa as ee,Ac as _,At as v,E as y,J as b,Kp as te,Pt as x,Q_ as S,cf as C,gg as ne,gn as re,gt as ie,it as ae,iy as oe,oi as se,vv as ce,wa as w,wd as le,x as T}from"../vendor/vendor-icons-C-Y4oLkk.js";import{B as ue,R as E,c as D,i as O,t as k,x as de}from"./base-ui-BAv0gRbN.js";import{$r as A,Or as j,qr as fe,t as M,zt as N}from"./es-LELdnrjB.js";import{n as pe,t as me}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as he,t as P}from"./WorkspaceLink-DKEucXjF.js";import{n as ge,t as F}from"./AsyncBoundary-CzRTtM14.js";import{r as I,t as L}from"./eval-8_vdTK9q.js";import{i as _e,n as ve,r as ye,t as be}from"./StatusBadge-I2ZCpKG6.js";import{n as xe,t as Se}from"./Sparkline-BSPsDbyx.js";import{n as Ce,o as R,t as we}from"./Experiments-6NsFEIlj.js";var z,B,V,H,U,W,Te,Ee=e((()=>{M(),k(),h(),T(),z=t(s()),i(),he(),xe(),ve(),B=t(o()),V=[_,b,se,re,S,v,oe,ne,x,le,y],H=e=>V[e.split(``).reduce((e,t)=>e+t.charCodeAt(0),0)%V.length],U=f(({css:e})=>({card:e`
    height: 100%;
    border: 1px solid ${m.colorBorderSecondary};
    border-radius: ${m.borderRadiusLG};

    background: ${m.colorBgContainer};

    transition: border-color 0.15s ease;

    &:hover {
      border-color: ${m.colorBorder};
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,metricBand:e`
    padding: 16px;
    border-radius: ${m.borderRadius};
    background: ${m.colorFillQuaternary};
  `,metricValue:e`
    font-family: ${m.fontFamilyCode};
    font-size: ${m.fontSizeHeading2};
    font-weight: 600;
    line-height: 1;
    color: ${m.colorText};
  `,ctaBand:e`
    padding-block: 24px;
    padding-inline: 16px;
    border: 1px dashed ${m.colorBorderSecondary};
    border-radius: ${m.borderRadius};

    text-align: center;

    background: ${m.colorFillQuaternary};
  `,detailLink:e`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: ${m.borderRadiusSM};

    color: ${m.colorTextTertiary};

    transition:
      color 0.15s ease,
      background 0.15s ease;

    &:hover {
      color: ${m.colorText};
      background: ${m.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${m.colorPrimary};
      outline-offset: -2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: ${m.borderRadius};
  `,name:e`
    font-size: ${m.fontSizeLG};
    font-weight: 600;
    color: ${m.colorText};
    text-decoration: none;

    transition: color 0.15s ease;

    &:hover {
      color: ${m.colorPrimary};
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,statDivider:e`
    width: 1px;
    height: 24px;
    background: ${m.colorBorderSecondary};
  `,statValue:e`
    font-family: ${m.fontFamilyCode};
    font-weight: 600;
    color: ${m.colorText};
  `})),W=(0,z.memo)(({value:e,label:t})=>(0,B.jsxs)(u,{gap:2,children:[(0,B.jsx)(O,{className:U.statValue,fontSize:16,children:e}),(0,B.jsx)(O,{color:m.colorTextTertiary,fontSize:12,children:t})]})),Te=(0,z.memo)(({id:e,name:t,description:n,testCaseCount:r,recentRuns:i,runCount:o=0,bestScore:s,source:c,tags:f,datasetCount:p=0})=>{let{t:h}=a(`eval`),g=o||i?.length||0,_=p>0,v=(0,z.useMemo)(()=>H(e),[e]),y=c===`user`,b=(0,z.useMemo)(()=>(i??[]).map(e=>e?.metrics?.passRate).filter(e=>typeof e==`number`).reverse(),[i]),x=b.length>0?Math.max(...b):void 0,S=i?.[0];return(0,B.jsxs)(u,{className:U.card,gap:16,justify:`space-between`,padding:20,children:[(0,B.jsxs)(u,{gap:16,children:[(0,B.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,justify:`space-between`,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:12,style:{minWidth:0},children:[(0,B.jsx)(`div`,{className:U.iconBox,style:{background:y?m.colorSuccessBg:m.colorPrimaryBg},children:(0,B.jsx)(l,{icon:y?ae:v,size:22,style:{color:y?m.colorSuccess:m.colorPrimary}})}),(0,B.jsxs)(u,{gap:2,style:{minWidth:0},children:[(0,B.jsx)(P,{className:U.name,to:`/eval/bench/${e}`,children:t}),n&&(0,B.jsx)(O,{color:m.colorTextTertiary,fontSize:12,lineClamp:1,children:n})]})]}),(0,B.jsx)(P,{className:U.detailLink,to:`/eval/bench/${e}`,children:(0,B.jsx)(l,{icon:ce,size:16})})]}),_?x===void 0?(0,B.jsxs)(u,{align:`center`,className:U.ctaBand,gap:8,children:[(0,B.jsx)(l,{icon:C,size:24,style:{color:m.colorTextQuaternary}}),(0,B.jsxs)(u,{align:`center`,gap:2,children:[(0,B.jsx)(O,{color:m.colorTextTertiary,children:h(`benchmark.card.empty`)}),(0,B.jsx)(O,{color:m.colorTextQuaternary,fontSize:12,children:h(`benchmark.card.emptyHint`)})]}),(0,B.jsx)(P,{style:{textDecoration:`none`},to:`/eval/bench/${e}?tab=runs`,children:(0,B.jsx)(d,{icon:ee,size:`small`,type:`fill`,children:h(`benchmark.card.startFirst`)})})]}):(0,B.jsxs)(u,{horizontal:!0,align:`center`,className:U.metricBand,justify:`space-between`,children:[(0,B.jsxs)(u,{gap:4,children:[(0,B.jsxs)(`span`,{className:U.metricValue,children:[(x*100).toFixed(0),`%`]}),(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,B.jsx)(O,{color:m.colorTextTertiary,fontSize:12,children:h(`benchmark.card.bestPassRate`)}),S?.status&&(0,B.jsx)(be,{status:S.status})]})]}),b.length>1&&(0,B.jsx)(Se,{values:b})]}):(0,B.jsxs)(u,{align:`center`,className:U.ctaBand,gap:8,children:[(0,B.jsx)(l,{icon:te,size:24,style:{color:m.colorTextQuaternary}}),(0,B.jsxs)(u,{align:`center`,gap:2,children:[(0,B.jsx)(O,{color:m.colorTextTertiary,children:h(`benchmark.card.noDataset`)}),(0,B.jsx)(O,{color:m.colorTextQuaternary,fontSize:12,children:h(`benchmark.card.noDatasetHint`)})]}),(0,B.jsx)(P,{style:{textDecoration:`none`},to:`/eval/bench/${e}`,children:(0,B.jsx)(d,{icon:ie,size:`small`,type:`fill`,children:h(`benchmark.card.importDataset`)})})]})]}),(0,B.jsxs)(u,{gap:16,children:[(0,B.jsxs)(u,{horizontal:!0,align:`center`,gap:20,children:[(0,B.jsx)(W,{label:h(`sidebar.datasets`),value:p}),(0,B.jsx)(`span`,{className:U.statDivider}),(0,B.jsx)(W,{label:h(`benchmark.card.casesLabel`),value:r||0}),(0,B.jsx)(`span`,{className:U.statDivider}),(0,B.jsx)(W,{label:h(`benchmark.card.evalsLabel`),value:g}),s!==void 0&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`span`,{className:U.statDivider}),(0,B.jsx)(W,{label:h(`benchmark.card.bestScore`),value:s.toFixed(1)})]})]}),f&&f.length>0&&(0,B.jsxs)(u,{horizontal:!0,gap:4,style:{flexWrap:`wrap`},children:[f.slice(0,4).map(e=>(0,B.jsx)(D,{size:`small`,children:e},e)),f.length>4&&(0,B.jsxs)(D,{size:`small`,children:[`+`,f.length-4]})]})]})]})})})),G,K,De,Oe,ke=e((()=>{M(),k(),p(),h(),G=t(s()),i(),me(),L(),K=t(o()),De=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),Oe=({formId:e,onLoadingChange:t})=>{let{t:n}=a(`eval`),{close:r}=E(),i=pe(),[o]=g.useForm(),[s,l]=(0,G.useState)(!1),u=I(e=>e.createBenchmark),d=g.useWatch(`name`,o);return(0,G.useEffect)(()=>{!s&&d&&o.setFieldValue(`identifier`,De(d))},[d,s,o]),(0,K.jsxs)(g,{form:o,layout:`vertical`,name:e,onFinish:async e=>{t?.(!0);try{let t=await u({description:e.description?.trim()||void 0,identifier:e.identifier.trim(),name:e.name.trim(),tags:e.tags?.length>0?e.tags:void 0});c.success(n(`benchmark.create.success`)),r(),t?.id&&i(`/eval/bench/${t.id}`)}catch{c.error(n(`benchmark.create.error`))}finally{t?.(!1)}},children:[(0,K.jsx)(g.Item,{label:n(`benchmark.create.name.label`),name:`name`,rules:[{message:n(`benchmark.create.nameRequired`),required:!0}],children:(0,K.jsx)(A,{autoFocus:!0,placeholder:n(`benchmark.create.name.placeholder`)})}),(0,K.jsx)(g.Item,{label:n(`benchmark.create.identifier.label`),name:`identifier`,rules:[{message:n(`benchmark.create.identifierRequired`),required:!0}],children:(0,K.jsx)(A,{placeholder:n(`benchmark.create.identifier.placeholder`),style:{fontFamily:m.fontFamilyCode},onChange:()=>l(!0)})}),(0,K.jsx)(g.Item,{label:n(`benchmark.create.description.label`),name:`description`,children:(0,K.jsx)(fe,{placeholder:n(`benchmark.create.description.placeholder`),rows:3})}),(0,K.jsx)(g.Item,{label:n(`benchmark.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,K.jsx)(de,{mode:`tags`,open:!1,placeholder:n(`benchmark.create.tags.placeholder`),style:{width:`100%`},tokenSeparators:[`,`,`，`,` `]})})]})}})),q,Ae,je=e((()=>{k(),i(),q=t(o()),Ae=({formId:e,loading:t})=>{let{t:n}=a(`eval`),{close:r}=E();return(0,q.jsxs)(ue,{children:[(0,q.jsx)(d,{disabled:t,onClick:r,children:n(`common.cancel`)}),(0,q.jsx)(d,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`benchmark.create.confirm`)})]})}})),J,Y,Me=e((()=>{n(),_e(),ke(),je(),J=t(o()),Y=()=>ye({renderContent:({formId:e,setLoading:t})=>(0,J.jsx)(Oe,{formId:e,onLoadingChange:t}),renderFooter:({formId:e,loading:t})=>(0,J.jsx)(Ae,{formId:e,loading:t}),title:r(`benchmark.create.title`,{ns:`eval`}),width:480})})),X,Z,Q,$,Ne;e((()=>{M(),k(),h(),T(),X=t(s()),i(),ge(),L(),Ee(),Me(),we(),Z=t(o()),Q=f(({css:e})=>({container:e`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    gap: 20px;
  `,skeletonCard:e`
    padding: 20px;
    border: 1px solid ${m.colorBorderSecondary};
    border-radius: ${m.borderRadiusLG};
    background: ${m.colorBgContainer};
  `,title:e`
    margin: 0;
    line-height: 1.3;
  `})),$=(0,X.memo)(()=>(0,Z.jsx)(`div`,{className:Q.grid,children:[0,1,2,3].map(e=>(0,Z.jsxs)(u,{className:Q.skeletonCard,gap:16,children:[(0,Z.jsxs)(u,{horizontal:!0,gap:12,children:[(0,Z.jsx)(N.Avatar,{active:!0,shape:`square`,size:36}),(0,Z.jsxs)(u,{flex:1,gap:8,children:[(0,Z.jsx)(N.Button,{active:!0,size:`small`,style:{height:14,width:160}}),(0,Z.jsx)(N.Button,{active:!0,size:`small`,style:{height:12,width:220}})]})]}),(0,Z.jsx)(N.Button,{active:!0,block:!0,size:`small`,style:{height:64}})]},e))})),Ne=(0,X.memo)(()=>{let{t:e}=a(`eval`),t=I(e=>e.benchmarkList),{data:n,isLoading:r,error:i,mutate:o}=I(e=>e.useFetchBenchmarks)(),s=I(e=>e.experimentList),{data:c,isLoading:l,error:f,mutate:p}=I(e=>e.useFetchExperiments)(),m=(0,Z.jsx)(u,{align:`center`,flex:1,justify:`center`,children:(0,Z.jsx)(j,{description:e(`benchmark.empty`),icon:C,children:(0,Z.jsx)(d,{icon:w,style:{marginTop:16},type:`primary`,onClick:()=>Y(),children:e(`overview.createBenchmark`)})})}),h=(0,Z.jsx)(u,{align:`center`,flex:1,justify:`center`,children:(0,Z.jsx)(j,{description:e(`experiment.empty`),icon:C,children:(0,Z.jsx)(d,{icon:w,style:{marginTop:16},type:`primary`,onClick:()=>R(),children:e(`overview.createExperiment`)})})});return(0,Z.jsxs)(u,{className:Q.container,gap:32,height:`100%`,width:`100%`,children:[(0,Z.jsxs)(u,{horizontal:!0,align:`center`,gap:16,justify:`space-between`,children:[(0,Z.jsxs)(u,{gap:4,style:{minWidth:0},children:[(0,Z.jsx)(O,{ellipsis:!0,as:`h1`,className:Q.title,fontSize:30,weight:600,children:e(`overview.title`)}),(0,Z.jsx)(O,{type:`secondary`,children:e(`overview.subtitle`)})]}),t.length>0&&(0,Z.jsx)(d,{icon:w,type:`primary`,onClick:()=>Y(),children:e(`overview.createBenchmark`)})]}),(0,Z.jsxs)(u,{gap:16,children:[(0,Z.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Z.jsx)(O,{as:`h2`,style:{fontSize:18,fontWeight:600,margin:0},children:e(`overview.sections.experiments.title`)}),(0,Z.jsx)(d,{icon:w,size:`small`,onClick:()=>R(),children:e(`overview.createExperiment`)})]}),(0,Z.jsx)(F,{data:c,empty:h,error:f,errorVariant:`block`,isEmpty:s.length===0,isLoading:l,loading:(0,Z.jsx)($,{}),onRetry:()=>p(),children:(0,Z.jsx)(`div`,{className:Q.grid,children:s.map(e=>(0,Z.jsx)(Ce,{experiment:e},e.id))})})]}),(0,Z.jsxs)(u,{gap:16,children:[(0,Z.jsx)(O,{as:`h2`,style:{fontSize:18,fontWeight:600,margin:0},children:e(`overview.sections.benchmarks.title`)}),(0,Z.jsx)(F,{data:n,empty:m,error:i,errorVariant:`block`,isEmpty:t.length===0,isLoading:r,loading:(0,Z.jsx)($,{}),onRetry:()=>o(),children:(0,Z.jsx)(`div`,{className:Q.grid,children:t.map(e=>(0,Z.jsx)(Te,{bestScore:e.bestScore,datasetCount:e.datasetCount,description:e.description,id:e.id,name:e.name,recentRuns:e.recentRuns,runCount:e.runCount,source:e.source,tags:e.tags,testCaseCount:e.testCaseCount},e.id))})})]})]})})}))();export{Ne as default};