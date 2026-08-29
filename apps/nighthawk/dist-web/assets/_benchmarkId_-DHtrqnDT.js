import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Hr as l,Qr as u,St as d,Xr as f,bt as p,mr as m}from"./dialog-BebLzVzY.js";import{a as h,y as g}from"../vendor/vendor-react-CBcx1o7d.js";import{a as _,b as v,c as y,qt as b,t as x,vn as S,xt as C}from"./es-CVJR_g25.js";import{Aa as w,Ac as T,At as ee,E,Eh as D,Ep as te,Im as ne,J as re,Ka as O,Kp as ie,Pt as ae,Q_ as oe,Rt as se,Xh as ce,er as le,gg as ue,gn as de,it as fe,iy as pe,ng as me,oi as he,vv as ge,wa as _e,wd as ve,wf as ye,wl as be,wp as xe,x as k}from"../vendor/vendor-icons-C-Y4oLkk.js";import{B as Se,P as Ce,R as A,c as we,i as j,t as M,x as Te}from"./base-ui-BAv0gRbN.js";import{$r as Ee,qr as De,t as N}from"./es-LELdnrjB.js";import{t as Oe}from"./src-Cw6BG0HN.js";import{t as ke}from"./format-BuuIRQbq.js";import{n as Ae,t as je}from"./NeuralNetworkLoading-CUDFTjYo.js";import{n as Me,t as Ne}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as Pe,t as Fe}from"./WorkspaceLink-DKEucXjF.js";import{a as Ie,i as Le,r as P,s as Re,t as F}from"./eval-8_vdTK9q.js";import{i as ze,r as Be}from"./StatusBadge-I2ZCpKG6.js";import{a as Ve,c as He,d as Ue,f as We,h as Ge,i as Ke,l as qe,m as Je,n as Ye,o as Xe,p as I,r as Ze,s as Qe,t as $e,u as et}from"./RunCard-BWIuI3M6.js";import{n as tt,t as nt}from"./RunCreateModal-PZ2U2bjs.js";import{n as rt,r as it,t as at}from"./utils-DH01phU5.js";import{n as ot,t as st}from"./Sparkline-BSPsDbyx.js";import{n as ct,t as lt}from"./RunEditModal-DiQ7bYn0.js";var ut,L,dt,ft,pt=e((()=>{N(),M(),v(),x(),ut=t(s()),i(),F(),L=t(o()),dt=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),ft=({benchmark:e,formId:t,onLoadingChange:n,onSuccess:r})=>{let{t:i}=a(`eval`),{close:o}=A(),[s]=C.useForm(),[l,u]=(0,ut.useState)(!1),d=P(e=>e.updateBenchmark),f=C.useWatch(`name`,s);return(0,ut.useEffect)(()=>{e&&s.setFieldsValue({description:e.description||``,identifier:e.identifier,name:e.name,tags:e.tags||[]})},[e,s]),(0,ut.useEffect)(()=>{!l&&f&&s.setFieldValue(`identifier`,dt(f))},[f,l,s]),(0,L.jsxs)(C,{form:s,layout:`vertical`,name:t,onFinish:async t=>{n?.(!0);try{await d({description:t.description?.trim()||void 0,id:e.id,identifier:t.identifier.trim(),name:t.name.trim(),tags:t.tags?.length>0?t.tags:void 0}),c.success(i(`benchmark.edit.success`)),o(),r?.()}catch{c.error(i(`benchmark.edit.error`))}finally{n?.(!1)}},children:[(0,L.jsx)(C.Item,{label:i(`benchmark.create.name.label`),name:`name`,rules:[{message:i(`benchmark.create.nameRequired`),required:!0}],children:(0,L.jsx)(Ee,{autoFocus:!0,placeholder:i(`benchmark.create.name.placeholder`)})}),(0,L.jsx)(C.Item,{label:i(`benchmark.create.identifier.label`),name:`identifier`,rules:[{message:i(`benchmark.create.identifierRequired`),required:!0}],children:(0,L.jsx)(Ee,{placeholder:i(`benchmark.create.identifier.placeholder`),style:{fontFamily:y.fontFamilyCode},onChange:()=>u(!0)})}),(0,L.jsx)(C.Item,{label:i(`benchmark.create.description.label`),name:`description`,children:(0,L.jsx)(De,{placeholder:i(`benchmark.create.description.placeholder`),rows:3})}),(0,L.jsx)(C.Item,{label:i(`benchmark.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,L.jsx)(Te,{mode:`tags`,open:!1,placeholder:i(`benchmark.create.tags.placeholder`),style:{width:`100%`},tokenSeparators:[`,`,`，`,` `]})})]})}})),mt,ht,gt=e((()=>{M(),i(),mt=t(o()),ht=({formId:e,loading:t})=>{let{t:n}=a(`eval`),{close:r}=A();return(0,mt.jsxs)(Se,{children:[(0,mt.jsx)(m,{disabled:t,onClick:r,children:n(`common.cancel`)}),(0,mt.jsx)(m,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`benchmark.edit.confirm`)})]})}})),_t,vt,yt=e((()=>{n(),ze(),pt(),gt(),_t=t(o()),vt=e=>Be({renderContent:({formId:t,setLoading:n})=>(0,_t.jsx)(ft,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,_t.jsx)(ht,{formId:e,loading:t}),title:r(`benchmark.edit.title`,{ns:`eval`}),width:480})})),R,z,bt,B,xt,St=e((()=>{Oe(),N(),M(),x(),k(),R=t(s()),i(),Ne(),F(),yt(),ot(),it(),z=t(o()),bt=[y.colorPrimary,y.colorSuccess,y.colorTextQuaternary],B=_(({css:e,cssVar:t})=>({heroBand:e`
    padding: 20px;
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorFillQuaternary};
  `,heroValue:e`
    font-family: ${t.fontFamilyCode};
    font-size: ${t.fontSizeHeading1};
    font-weight: 600;
    line-height: 1;
    color: ${t.colorText};
  `,description:e`
    margin: 0;
    margin-block-start: 2px;
    font-size: ${t.fontSize};
    color: ${t.colorTextTertiary};
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: ${t.borderRadiusLG};
  `,statCard:e`
    flex: 1;

    min-width: 0;
    padding: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,statIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: ${t.borderRadius};
  `,statLabel:e`
    font-size: ${t.fontSizeSM};
    font-weight: 600;
    color: ${t.colorTextSecondary};
  `,title:e`
    margin: 0;
    font-size: ${t.fontSizeHeading3};
    font-weight: 600;
    color: ${t.colorText};
  `})),xt=(0,R.memo)(({benchmark:e,completedRuns:t,datasets:n,onBenchmarkUpdate:r,runCount:i,systemIcon:o=he,totalCases:s})=>{let{t:c}=a(`eval`),f=Me(),p=P(e=>e.deleteBenchmark),h=P(e=>e.refreshBenchmarkDetail),g=async()=>{await h(e.id),r?.(e)},_=()=>vt({benchmark:e,onSuccess:g}),v=[{danger:!0,icon:(0,z.jsx)(se,{size:16}),key:`delete`,label:c(`common.delete`),onClick:()=>{Ce({content:c(`benchmark.actions.delete.confirm`),okButtonProps:{danger:!0},okText:c(`benchmark.actions.delete`),onOk:async()=>{await p(e.id),f(`/eval`)},title:c(`benchmark.actions.delete`)})}}],b=n.length>0,x=t.length>0,S=(0,R.useMemo)(()=>{if(!x)return[];let e=new Map;for(let n of t){let t=n.targetAgent?.title||n.targetAgent?.id||`Unknown`,r=n.targetAgentId||n.targetAgent?.id||t;e.has(r)||e.set(r,{name:t,passRates:[]}),e.get(r).passRates.push(n.passRate??n.metrics?.passRate??0)}return[...e.entries()].map(([,e])=>({avgPassRate:e.passRates.reduce((e,t)=>e+t,0)/e.passRates.length,name:e.name})).sort((e,t)=>t.avgPassRate-e.avgPassRate).slice(0,3)},[t,x]),C=S.length>0?S[0]:null,w=(0,R.useMemo)(()=>t.map(e=>e.passRate??e.metrics?.passRate).filter(e=>typeof e==`number`).reverse(),[t]),T=w.length>0?Math.max(...w):void 0,E=(0,R.useMemo)(()=>{if(!x)return null;let e=t.map(e=>e.metrics?.duration??e.totalDuration).filter(e=>e!=null&&e>0);return e.length===0?null:e.reduce((e,t)=>e+t,0)/e.length},[t,x]),re=(0,R.useMemo)(()=>{if(!x)return null;let e=t.map(e=>e.metrics?.duration??e.totalDuration).filter(e=>e!=null&&e>0).sort((e,t)=>e-t);return e.length===0?null:e[Math.ceil(e.length*.99)-1]},[t,x]),O=(0,R.useMemo)(()=>{if(!x)return null;let e=t.map(e=>e.metrics?.totalCost??e.totalCost).filter(e=>e!=null&&e>0);return e.length===0?null:e.reduce((e,t)=>e+t,0)/e.length},[t,x]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(u,{gap:16,children:(0,z.jsxs)(u,{horizontal:!0,align:`start`,justify:`space-between`,children:[(0,z.jsxs)(u,{horizontal:!0,align:`start`,gap:12,children:[(0,z.jsx)(`div`,{className:B.iconBox,style:{background:e.source===`user`?y.colorSuccessBg:y.colorPrimaryBg},children:(0,z.jsx)(l,{icon:e.source===`user`?fe:o,size:20,style:{color:e.source===`user`?y.colorSuccess:y.colorPrimary}})}),(0,z.jsxs)(u,{gap:4,children:[(0,z.jsx)(`h1`,{className:B.title,children:e.name}),e.description&&(0,z.jsx)(`p`,{className:B.description,children:e.description})]})]}),(0,z.jsxs)(u,{horizontal:!0,gap:8,children:[(0,z.jsx)(m,{icon:le,size:`small`,onClick:_,children:c(`common.edit`)}),(0,z.jsx)(d,{items:v,placement:`bottomRight`,children:(0,z.jsx)(m,{icon:te,size:`small`})})]})]})}),(0,z.jsxs)(u,{horizontal:!0,align:`center`,className:B.heroBand,gap:16,justify:`space-between`,children:[(0,z.jsxs)(u,{gap:6,children:[(0,z.jsx)(`span`,{className:B.heroValue,children:T===void 0?`—`:`${(T*100).toFixed(0)}%`}),(0,z.jsx)(j,{color:y.colorTextSecondary,fontSize:14,children:C?c(`benchmark.detail.stats.bestPerformance`,{agent:C.name,passRate:(C.avgPassRate*100).toFixed(1)}):c(`benchmark.card.bestPassRate`)})]}),w.length>1&&(0,z.jsx)(st,{values:w,width:220})]}),(0,z.jsxs)(u,{horizontal:!0,gap:12,children:[(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(u,{gap:12,children:[(0,z.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:y.colorWarningBg},children:(0,z.jsx)(ee,{size:16,style:{color:y.colorWarning}})}),(0,z.jsx)(`span`,{className:B.statLabel,style:{textTransform:`uppercase`},children:c(`benchmark.detail.stats.topAgents`)})]}),!b&&!x&&(0,z.jsx)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeXL,fontWeight:600},children:`--`}),b&&!x&&(0,z.jsxs)(u,{gap:2,children:[(0,z.jsx)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeXL,fontWeight:600},children:c(`benchmark.detail.stats.waiting`)}),(0,z.jsx)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeSM},children:c(`benchmark.detail.stats.noEvalRecord`)})]}),x&&S.length>0&&(0,z.jsx)(u,{gap:6,children:S.map((e,t)=>(0,z.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,z.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`span`,{style:{color:bt[t]||bt[2],fontFamily:y.fontFamilyCode,fontSize:y.fontSizeSM,fontWeight:600,minWidth:14,textAlign:`center`},children:t+1}),(0,z.jsx)(`span`,{style:{color:y.colorText,fontSize:y.fontSize,fontWeight:500},children:e.name})]}),(0,z.jsxs)(`span`,{style:{color:y.colorTextSecondary,fontFamily:y.fontFamilyCode,fontSize:y.fontSize},children:[(e.avgPassRate*100).toFixed(1),`%`]})]},e.name))})]})}),(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(u,{gap:12,children:[(0,z.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:y.colorPrimaryBg},children:(0,z.jsx)(be,{size:16,style:{color:y.colorPrimary}})}),(0,z.jsx)(`span`,{className:B.statLabel,children:c(`benchmark.detail.stats.dataScale`)}),s===0&&(0,z.jsx)(`span`,{style:{backgroundColor:y.colorWarningBg,borderRadius:y.borderRadiusXS,color:y.colorWarning,fontSize:y.fontSizeSM,paddingBlock:2,paddingInline:8},children:c(`benchmark.detail.stats.needSetup`)})]}),(0,z.jsxs)(u,{gap:2,children:[(0,z.jsxs)(u,{horizontal:!0,align:`baseline`,gap:4,children:[(0,z.jsx)(`span`,{style:{color:y.colorText,fontFamily:y.fontFamilyCode,fontSize:y.fontSizeHeading3,fontWeight:600},children:s}),s>0&&(0,z.jsx)(`span`,{style:{color:y.colorTextTertiary,fontSize:y.fontSize},children:`Cases`})]}),s===0?(0,z.jsx)(`span`,{style:{color:y.colorPrimary,fontSize:y.fontSizeSM},children:c(`benchmark.detail.stats.addFirstDataset`)}):(0,z.jsxs)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeSM},children:[n.length,` Datasets`]})]})]})}),(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(u,{gap:12,children:[(0,z.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:y.colorInfoBg},children:(0,z.jsx)(ne,{size:16,style:{color:y.colorInfo}})}),(0,z.jsx)(`span`,{className:B.statLabel,children:c(`benchmark.detail.stats.avgDuration`)})]}),E==null?(0,z.jsx)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeXL,fontWeight:600},children:`--`}):(0,z.jsxs)(u,{gap:2,children:[(0,z.jsxs)(u,{horizontal:!0,align:`baseline`,gap:4,children:[(0,z.jsx)(`span`,{style:{color:y.colorText,fontFamily:y.fontFamilyCode,fontSize:y.fontSizeHeading3,fontWeight:600},children:rt(E)}),(0,z.jsx)(`span`,{style:{color:y.colorTextTertiary,fontSize:y.fontSize},children:`min`})]}),re!=null&&(0,z.jsxs)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeSM},children:[`P99: `,at(re)]})]})]})}),(0,z.jsx)(`div`,{className:B.statCard,children:(0,z.jsxs)(u,{gap:12,children:[(0,z.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,z.jsx)(`div`,{className:B.statIcon,style:{background:y.colorSuccessBg},children:(0,z.jsx)(D,{size:16,style:{color:y.colorSuccess}})}),(0,z.jsx)(`span`,{className:B.statLabel,children:c(`benchmark.detail.stats.avgCost`)})]}),O==null?(0,z.jsx)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeXL,fontWeight:600},children:`--`}):(0,z.jsxs)(u,{gap:2,children:[(0,z.jsxs)(u,{horizontal:!0,align:`baseline`,gap:4,children:[(0,z.jsxs)(`span`,{style:{color:y.colorText,fontFamily:y.fontFamilyCode,fontSize:y.fontSizeHeading3,fontWeight:600},children:[`$`,ke(O)]}),(0,z.jsx)(`span`,{style:{color:y.colorTextTertiary,fontSize:y.fontSize},children:c(`benchmark.detail.stats.perRun`)})]}),(0,z.jsx)(`span`,{style:{color:y.colorTextQuaternary,fontSize:y.fontSizeSM},children:c(`benchmark.detail.stats.basedOnLastNRuns`,{count:t.length})})]})]})})]})]})})})),Ct,V,wt,Tt,H,Et,Dt=e((()=>{N(),M(),v(),x(),k(),Ct=t(s()),i(),Ie(),Ge(),V=t(o()),wt=e=>e.trim().toLowerCase().replaceAll(/\s+/g,`-`).replaceAll(/[^\da-z-]/g,``),Tt={custom:`Custom`,memory:`Memory`,reference:`Reference Formats`,research:`Deep Research / QA`,"tool-use":`Tool Use`},H=_(({css:e})=>({sectionLabel:e`
    font-size: ${y.fontSizeSM};
    font-weight: 500;
    color: ${y.colorTextSecondary};
  `,presetCard:e`
    cursor: pointer;

    position: relative;

    padding: 12px;
    border: 1px solid ${y.colorBorderSecondary};
    border-radius: ${y.borderRadius};

    background: ${y.colorBgContainer};

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      border-color: ${y.colorBorder};
      background: ${y.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${y.colorPrimary};
      outline-offset: -2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,presetCardSelected:e`
    border-color: ${y.colorPrimaryBorder};
    background: ${y.colorPrimaryBg};

    &:hover {
      border-color: ${y.colorPrimaryBorder};
      background: ${y.colorPrimaryBg};
    }
  `,presetGrid:e`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  `,presetIcon:e`
    border: 1px solid ${y.colorBorderSecondary};
    border-radius: ${y.borderRadius};
    background: ${y.colorBgElevated};
  `,presetMeta:e`
    font-family: ${y.fontFamilyCode};
    font-size: ${y.fontSizeSM};
    color: ${y.colorTextTertiary};
  `,selectedMark:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;
    border-radius: 999px;

    color: ${y.colorBgContainer};

    background: ${y.colorPrimary};
  `})),Et=({benchmarkId:e,formId:t,onLoadingChange:n,onSuccess:r})=>{let{t:i}=a(`eval`),{close:o}=A(),[s]=C.useForm(),[d,p]=(0,Ct.useState)(`custom`),[m,h]=(0,Ct.useState)(!1),g=C.useWatch(`name`,s),_=C.useWatch(`evalMode`,s);(0,Ct.useEffect)(()=>{!m&&g&&s.setFieldValue(`identifier`,wt(g))},[g,m,s]);let v=async t=>{n?.(!0);try{let n=await Le.createDataset({benchmarkId:e,description:t.description,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:void 0,evalMode:t.evalMode||void 0,identifier:t.identifier.trim(),metadata:{preset:d},name:t.name});o(),r?.({id:n.id,name:n.name,preset:d})}catch(e){c.error(e?.message||i(`dataset.create.error`))}finally{n?.(!1)}},b=Je(),x=Object.entries(b).filter(([,e])=>e.length>0);return(0,V.jsxs)(C,{form:s,layout:`vertical`,name:t,onFinish:v,children:[(0,V.jsx)(C.Item,{label:i(`dataset.create.name.label`),name:`name`,rules:[{message:i(`dataset.create.nameRequired`),required:!0}],children:(0,V.jsx)(Ee,{placeholder:i(`dataset.create.name.placeholder`)})}),(0,V.jsx)(C.Item,{label:i(`dataset.create.identifier.label`),name:`identifier`,rules:[{message:i(`dataset.create.identifierRequired`),required:!0}],children:(0,V.jsx)(Ee,{placeholder:i(`dataset.create.identifier.placeholder`),style:{fontFamily:y.fontFamilyCode},onChange:()=>h(!0)})}),(0,V.jsx)(C.Item,{label:i(`dataset.create.description.label`),name:`description`,children:(0,V.jsx)(De,{placeholder:i(`dataset.create.description.placeholder`),rows:3})}),(0,V.jsx)(C.Item,{extra:i(`dataset.evalMode.hint`),label:i(`evalMode.label`),name:`evalMode`,children:(0,V.jsx)(Te,{allowClear:!0,placeholder:i(`evalMode.placeholder`),optionRender:e=>(0,V.jsxs)(u,{gap:4,style:{paddingBlock:4},children:[(0,V.jsx)(`div`,{children:e.label}),(0,V.jsx)(j,{fontSize:12,type:`secondary`,children:i(`evalMode.${e.value}.desc`)})]}),options:[{label:i(`evalMode.equals`),value:`equals`},{label:i(`evalMode.contains`),value:`contains`},{label:i(`evalMode.llm-rubric`),value:`llm-rubric`},{label:i(`evalMode.external`),value:`external`}]})}),_===`llm-rubric`&&(0,V.jsx)(C.Item,{label:i(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,V.jsx)(De,{placeholder:i(`evalMode.prompt.placeholder`),rows:3})}),(0,V.jsxs)(u,{gap:12,style:{marginBlockStart:4},children:[(0,V.jsx)(`span`,{className:H.sectionLabel,children:i(`dataset.create.preset.label`)}),x.map(([e,t])=>(0,V.jsxs)(u,{gap:8,children:[(0,V.jsx)(j,{color:y.colorTextTertiary,fontSize:12,children:Tt[e]||e}),(0,V.jsx)(`div`,{className:H.presetGrid,children:t.map(e=>{let t=d===e.id;return(0,V.jsx)(`div`,{"aria-pressed":t,className:`${H.presetCard} ${t?H.presetCardSelected:``}`,role:`button`,tabIndex:0,onClick:()=>p(e.id),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),p(e.id))},children:(0,V.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,children:[(0,V.jsx)(f,{className:H.presetIcon,flex:`none`,height:36,width:36,children:(0,V.jsx)(l,{icon:e.icon,size:18})}),(0,V.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,V.jsx)(j,{ellipsis:!0,weight:500,children:e.name}),(0,V.jsx)(j,{ellipsis:!0,color:y.colorTextTertiary,fontSize:12,children:e.description})]}),t&&(0,V.jsx)(`span`,{className:H.selectedMark,children:(0,V.jsx)(l,{icon:me,size:12})})]})},e.id)})})]},e)),I[d]&&(0,V.jsxs)(u,{gap:4,style:{marginBlockStart:4},children:[(0,V.jsx)(j,{fontSize:12,type:`secondary`,children:I[d].formatDescription}),(0,V.jsxs)(j,{className:H.presetMeta,children:[(0,V.jsx)(`strong`,{children:`Required:`}),` `,I[d].requiredFields.join(`, `),I[d].optionalFields.length>0&&(0,V.jsxs)(V.Fragment,{children:[` · `,(0,V.jsx)(`strong`,{children:`Optional:`}),` `,I[d].optionalFields.join(`, `)]})]})]})]})]})}})),Ot,kt,At=e((()=>{M(),i(),Ot=t(o()),kt=({formId:e,loading:t})=>{let{t:n}=a(`eval`),{close:r}=A();return(0,Ot.jsxs)(Se,{children:[(0,Ot.jsx)(m,{disabled:t,onClick:r,children:n(`common.cancel`)}),(0,Ot.jsx)(m,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`common.create`)})]})}})),jt,Mt,Nt=e((()=>{n(),ze(),Dt(),At(),jt=t(o()),Mt=e=>Be({renderContent:({formId:t,setLoading:n})=>(0,jt.jsx)(Et,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,jt.jsx)(kt,{formId:e,loading:t}),title:r(`dataset.create.title`,{ns:`eval`}),width:600})})),Pt,U,Ft,It,Lt=e((()=>{N(),M(),x(),k(),Pt=t(s()),i(),U=t(o()),Ft=_(({css:e})=>({emptyIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: ${y.borderRadiusLG};

    background: ${y.colorPrimaryBg};
  `})),It=(0,Pt.memo)(({onAddCase:e,onImport:t})=>{let{t:n}=a(`eval`);return(0,U.jsxs)(u,{align:`center`,gap:8,justify:`center`,style:{padding:`48px 24px`},children:[(0,U.jsx)(`div`,{className:Ft.emptyIcon,children:(0,U.jsx)(ie,{size:20,style:{color:y.colorPrimary}})}),(0,U.jsx)(j,{weight:600,children:n(`testCase.empty.title`)}),(0,U.jsx)(j,{color:y.colorTextTertiary,fontSize:12,children:n(`testCase.empty.description`)}),(0,U.jsxs)(u,{horizontal:!0,gap:8,style:{marginTop:8},children:[(0,U.jsx)(m,{icon:_e,size:`small`,onClick:e,children:n(`testCase.actions.add`)}),(0,U.jsx)(m,{icon:ye,size:`small`,type:`primary`,onClick:t,children:n(`testCase.actions.import`)})]})]})})})),Rt,W,G,zt,Bt=e((()=>{N(),M(),v(),x(),k(),Rt=t(s()),i(),Ae(),Pe(),Ie(),Ge(),Lt(),Xe(),W=t(o()),G=_(({css:e})=>({card:e`
    .ant-card-body {
      padding: 0;
    }
  `,caseCount:e`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 2px;
    align-items: flex-end;

    padding-block: 6px;
    padding-inline: 12px;
    border-radius: ${y.borderRadius};

    background: ${y.colorFillQuaternary};
  `,caseCountLabel:e`
    font-size: ${y.fontSizeSM};
    line-height: 1;
    color: ${y.colorTextTertiary};
  `,caseCountValue:e`
    font-family: ${y.fontFamilyCode};
    font-size: ${y.fontSizeLG};
    font-weight: 600;
    line-height: 1;
    color: ${y.colorText};
  `,chevron:e`
    flex-shrink: 0;
    color: ${y.colorTextTertiary};
    transition: transform 0.15s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,datasetDescription:e`
    overflow: hidden;

    margin: 0;

    font-size: ${y.fontSizeSM};
    color: ${y.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,datasetHeader:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    width: 100%;
    padding: 16px;
    border: none;

    text-align: start;

    background: transparent;

    transition: background 0.15s ease;

    &:hover {
      background: ${y.colorFillQuaternary};
    }

    &:focus-visible {
      outline: 2px solid ${y.colorPrimary};
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,datasetIcon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: ${y.borderRadius};

    background: ${y.colorPrimaryBg};
  `,datasetName:e`
    margin: 0;
    font-size: ${y.fontSize};
    font-weight: 500;
    color: ${y.colorText};
  `,expandedSection:e`
    border-block-start: 1px solid ${y.colorBorderSecondary};
  `,footer:e`
    padding: 12px;
    border-block-start: 1px solid ${y.colorBorderSecondary};
  `,footerLink:e`
    text-decoration: none;
  `})),zt=(0,Rt.memo)(({benchmarkId:e,dataset:t,isExpanded:n,loading:r,total:i,filteredCases:o,search:s,diffFilter:l,pagination:f,onExpand:h,onEdit:g,onDeleteCase:_,onRefresh:v,onSearchChange:x,onDiffFilterChange:S,onPageChange:C,onAddCase:T,onImport:ee,onRun:E})=>{let{t:D}=a(`eval`),te=(0,Rt.useCallback)(()=>{Ce({content:D(`dataset.delete.confirm`),okButtonProps:{danger:!0},okText:D(`common.delete`),onOk:async()=>{try{await Le.deleteDataset(t.id),c.success(D(`dataset.delete.success`)),v()}catch{c.error(D(`dataset.delete.error`))}},title:D(`common.delete`)})},[t.id,v,D]);return(0,W.jsxs)(b,{className:G.card,children:[(0,W.jsxs)(`div`,{className:G.datasetHeader,role:`button`,tabIndex:0,onClick:h,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),h())},children:[(0,W.jsx)(`div`,{className:G.datasetIcon,children:(0,W.jsx)(ie,{size:16,style:{color:y.colorPrimary}})}),(0,W.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(`p`,{className:G.datasetName,children:t.name}),t.metadata?.preset&&I[t.metadata.preset]&&(0,W.jsx)(we,{size:`small`,children:I[t.metadata.preset].name})]}),t.description&&(0,W.jsx)(`p`,{className:G.datasetDescription,children:t.description})]}),(0,W.jsxs)(`div`,{className:G.caseCount,children:[(0,W.jsx)(`span`,{className:G.caseCountValue,children:t.testCaseCount||0}),(0,W.jsx)(`span`,{className:G.caseCountLabel,children:D(`benchmark.detail.stats.cases`)})]}),(0,W.jsx)(m,{icon:w,size:`small`,onClick:e=>{e.stopPropagation(),E()},children:D(`run.actions.run`)}),(0,W.jsx)(d,{trigger:[`click`],items:[{icon:(0,W.jsx)(O,{size:14}),key:`edit`,label:D(`common.edit`),onClick:()=>g(t)},{type:`divider`},{danger:!0,icon:(0,W.jsx)(se,{size:14}),key:`delete`,label:D(`common.delete`),onClick:te}],children:(0,W.jsx)(p,{icon:xe,size:`small`,onClick:e=>e.stopPropagation()})}),(0,W.jsx)(ce,{className:G.chevron,size:16,style:{transform:n?`rotate(90deg)`:`rotate(0deg)`}})]}),n&&(0,W.jsxs)(`div`,{className:G.expandedSection,children:[r?(0,W.jsx)(u,{align:`center`,justify:`center`,style:{padding:`48px 24px`},children:(0,W.jsx)(je,{size:48})}):i===0?(0,W.jsx)(It,{onAddCase:T,onImport:ee}):(0,W.jsx)(Ve,{readOnly:!0,datasetEvalMode:t.evalMode,diffFilter:l,pagination:f,search:s,testCases:o,total:i,onDiffFilterChange:S,onPageChange:C,onSearchChange:x}),(0,W.jsx)(u,{horizontal:!0,align:`center`,className:G.footer,justify:`center`,children:(0,W.jsx)(Fe,{className:G.footerLink,to:`/eval/bench/${e}/datasets/${t.id}`,children:(0,W.jsx)(m,{icon:ge,iconPosition:`end`,size:`small`,type:`text`,children:D(`dataset.detail.viewDetail`)})})})]})]})})})),Vt,K,Ht,Ut,Wt=e((()=>{N(),M(),v(),x(),k(),Vt=t(s()),i(),K=t(o()),Ht=_(({css:e})=>({emptyCard:e`
    .ant-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding-block: 64px;
      padding-inline: 24px;
    }
  `,iconBox:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    margin-block-end: 16px;
    border-radius: ${y.borderRadiusLG};

    background: ${y.colorPrimaryBg};
  `})),Ut=(0,Vt.memo)(({onAddDataset:e})=>{let{t}=a(`eval`);return(0,K.jsxs)(b,{className:Ht.emptyCard,children:[(0,K.jsx)(`div`,{className:Ht.iconBox,children:(0,K.jsx)(l,{icon:ie,size:24,style:{color:y.colorPrimary}})}),(0,K.jsxs)(u,{align:`center`,gap:4,children:[(0,K.jsx)(j,{weight:600,children:t(`dataset.empty.title`)}),(0,K.jsx)(j,{color:y.colorTextTertiary,fontSize:12,children:t(`dataset.empty.description`)})]}),(0,K.jsx)(m,{icon:_e,size:`small`,style:{marginTop:16},type:`primary`,onClick:e,children:t(`dataset.actions.addDataset`)})]})})})),q,J,Gt,Kt,qt=e((()=>{N(),M(),v(),x(),k(),q=t(s()),i(),Ie(),F(),Nt(),We(),et(),He(),tt(),Bt(),Wt(),J=t(o()),Gt=_(({css:e})=>({card:e`
    .ant-card-body {
      padding: 0;
    }
  `,header:e`
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 16px;
  `,icon:e`
    flex-shrink: 0;

    width: 32px;
    height: 32px;
    border-radius: ${y.borderRadius};

    background: ${y.colorFillQuaternary};
  `})),Kt=(0,q.memo)(({benchmarkId:e,datasets:t,loading:n,onImport:r,onRefresh:i})=>{let{t:o}=a(`eval`),[s,l]=(0,q.useState)(null),[d,f]=(0,q.useState)({current:1,pageSize:5}),[p,h]=(0,q.useState)(``),[g,_]=(0,q.useState)(`all`),v=P(e=>e.useFetchTestCases),x=P(e=>e.refreshTestCases),{data:C,isLoading:w}=v(s?{datasetId:s,limit:d.pageSize,offset:(d.current-1)*d.pageSize}:{datasetId:``,limit:0,offset:0}),T=C?.data||[],ee=C?.total||0,E=(0,q.useCallback)(async e=>{await x(e),i()},[x,i]),D=T.filter(e=>!(g!==`all`&&e.metadata?.difficulty!==g||p&&!e.content?.input?.toLowerCase().includes(p.toLowerCase()))),te=(0,q.useCallback)(e=>{l(t=>t===e?null:e),f({current:1,pageSize:5}),h(``),_(`all`)},[]),ne=(0,q.useCallback)(e=>{h(e),f(e=>({...e,current:1}))},[]),re=(0,q.useCallback)(e=>{_(e),f(e=>({...e,current:1}))},[]),O=(0,q.useCallback)(()=>{Mt({benchmarkId:e,onSuccess:e=>{i(),Ce({cancelText:o(`common.later`),content:o(`dataset.create.importNow`),okText:o(`dataset.actions.import`),onOk:()=>{qe({datasetId:e.id,onSuccess:E,presetId:e.preset})},title:o(`dataset.create.successTitle`)})}})},[e,E,i,o]),ie=(0,q.useCallback)(e=>{qe({datasetId:e.id,onSuccess:E,presetId:e.metadata?.preset})},[E]),ae=(0,q.useCallback)(t=>{nt({benchmarkId:e,datasetId:t.id,datasetName:t.name})},[e]),oe=(0,q.useCallback)(e=>{Ce({content:o(`testCase.delete.confirm`),okButtonProps:{danger:!0},okText:o(`common.delete`),onOk:async()=>{try{await Le.deleteTestCase(e.id),c.success(o(`testCase.delete.success`)),s&&await x(s),i()}catch{c.error(o(`testCase.delete.error`))}},title:o(`common.delete`)})},[s,i,x,o]);return(0,J.jsx)(J.Fragment,{children:(0,J.jsxs)(u,{gap:16,children:[t.length>0&&(0,J.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,J.jsx)(j,{color:y.colorTextTertiary,children:o(`benchmark.detail.datasetCount`,{count:t.length})}),(0,J.jsx)(m,{icon:_e,size:`small`,type:`primary`,onClick:O,children:o(`dataset.actions.addDataset`)})]}),n&&t.length===0?(0,J.jsx)(u,{gap:12,children:[1,2,3].map(e=>(0,J.jsx)(b,{className:Gt.card,children:(0,J.jsxs)(`div`,{className:Gt.header,children:[(0,J.jsx)(`div`,{className:Gt.icon}),(0,J.jsxs)(u,{flex:1,gap:8,children:[(0,J.jsx)(S.Input,{active:!0,size:`small`,style:{height:16,width:120}}),(0,J.jsx)(S.Input,{active:!0,size:`small`,style:{height:12,width:200}})]}),(0,J.jsx)(S.Button,{active:!0,size:`small`,style:{height:36,width:64}}),(0,J.jsx)(S.Button,{active:!0,size:`small`,style:{height:28,width:64}})]})},e))}):t.length===0?(0,J.jsx)(Ut,{onAddDataset:O}):(0,J.jsx)(u,{gap:12,children:t.map(t=>{let n=s===t.id;return(0,J.jsx)(zt,{benchmarkId:e,dataset:t,diffFilter:g,filteredCases:n?D:[],isExpanded:n,loading:n?w:!1,pagination:d,search:p,total:n?ee:0,onDeleteCase:oe,onDiffFilterChange:re,onEdit:e=>Ue({dataset:e,onSuccess:i}),onExpand:()=>te(t.id),onImport:()=>ie(t),onPageChange:(e,t)=>f({current:e,pageSize:t}),onRefresh:i,onRun:()=>ae(t),onSearchChange:ne,onAddCase:()=>Qe({datasetId:t.id,onSuccess:E})},t.id)})})]})})})})),Y,X,Jt,Yt,Xt=e((()=>{N(),M(),x(),k(),Y=t(s()),i(),F(),tt(),ct(),Ke(),Ye(),X=t(o()),Jt=_(({css:e})=>({grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    gap: 12px;

    @media (width <= 640px) {
      grid-template-columns: 1fr;
    }
  `,filterEmpty:e`
    align-items: center;
    justify-content: center;

    padding-block: 48px;
    padding-inline: 24px;
    border: 1px dashed ${y.colorBorderSecondary};
    border-radius: ${y.borderRadiusLG};

    background: ${y.colorFillQuaternary};
  `})),Yt=(0,Y.memo)(({benchmarkId:e})=>{let{t}=a(`eval`),[n,r]=(0,Y.useState)(`all`),i=P(e=>e.useFetchRuns),o=P(Re.runList),s=P(e=>e.refreshRuns);i(e);let c=(0,Y.useMemo)(()=>[...o].sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),[o]),l=(0,Y.useMemo)(()=>n===`all`?c:n===`active`?c.filter(e=>e.status===`running`||e.status===`pending`):c.filter(e=>e.status===n),[c,n]),d=[{label:t(`table.filter.all`),value:`all`},{label:t(`run.status.completed`),value:`completed`},{label:t(`run.filter.active`),value:`active`},{label:t(`run.status.idle`),value:`idle`},{label:t(`run.status.failed`),value:`failed`},{label:t(`run.status.aborted`),value:`aborted`}];return(0,X.jsxs)(u,{gap:16,children:[c.length>0&&(0,X.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,X.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(j,{color:y.colorTextTertiary,children:t(`benchmark.detail.runCount`,{count:l.length})}),(0,X.jsx)(Te,{options:d,size:`small`,style:{width:128},value:n,onChange:r})]}),(0,X.jsx)(m,{icon:_e,size:`small`,type:`primary`,onClick:()=>nt({benchmarkId:e}),children:t(`run.actions.create`)})]}),c.length===0?(0,X.jsx)(Ze,{onCreate:()=>nt({benchmarkId:e})}):l.length===0?(0,X.jsx)(u,{className:Jt.filterEmpty,children:(0,X.jsx)(j,{color:y.colorTextTertiary,children:t(`run.filter.empty`)})}):(0,X.jsx)(`div`,{className:Jt.grid,children:l.map(t=>(0,X.jsx)($e,{benchmarkId:e,run:t,onEdit:e=>lt({run:e}),onRefresh:s},t.id))})]})})})),Z,Q,Zt,Qt,$,$t;e((()=>{N(),v(),x(),k(),Z=t(s()),i(),h(),F(),St(),qt(),Xt(),Q=t(o()),Zt=[T,re,he,de,oe,ee,pe,ue,ae,ve,E],Qt=e=>Zt[e.split(``).reduce((e,t)=>e+t.charCodeAt(0),0)%Zt.length],$=_(({css:e})=>({container:e`
    overflow-y: auto;
    padding-block: 24px;
    padding-inline: 32px;
  `,sectionTitle:e`
    margin: 0;
    font-size: ${y.fontSizeLG};
    font-weight: 600;
    color: ${y.colorText};
  `,tag:e`
    padding-block: 2px;
    padding-inline: 8px;
    border: 1px solid ${y.colorBorder};
    border-radius: ${y.borderRadiusXS};

    font-size: ${y.fontSizeSM};
    color: ${y.colorTextTertiary};

    background: transparent;
  `})),$t=(0,Z.memo)(()=>{let{t:e}=a(`eval`),{benchmarkId:t}=g(),n=(0,Z.useMemo)(()=>t?Qt(t):he,[t]),r=P(e=>e.useFetchBenchmarkDetail),i=P(e=>t?e.benchmarkDetailMap[t]:void 0),o=P(e=>e.useFetchDatasets),s=P(e=>e.datasetList),c=P(e=>e.isLoadingDatasets),l=P(e=>e.refreshDatasets),d=P(e=>e.useFetchRuns),f=P(Re.runList);r(t),o(t);let p=(0,Z.useCallback)(async()=>{t&&await l(t)},[t,l]),m=(0,Z.useCallback)(async()=>{t&&await l(t)},[t,l]);d(t);let h=f.filter(e=>e.status===`completed`),_=s.reduce((e,t)=>e+(t.testCaseCount||0),0);return i?(0,Q.jsxs)(u,{className:$.container,gap:24,height:`100%`,width:`100%`,children:[(0,Q.jsx)(xt,{benchmark:i,completedRuns:h,datasets:s,runCount:f.length,systemIcon:n,totalCases:_,onBenchmarkUpdate:m}),i.tags&&i.tags.length>0&&(0,Q.jsx)(u,{horizontal:!0,gap:8,style:{flexWrap:`wrap`},children:i.tags.map(e=>(0,Q.jsx)(`span`,{className:$.tag,children:e},e))}),(0,Q.jsx)(`h3`,{className:$.sectionTitle,children:e(`benchmark.detail.tabs.datasets`)}),(0,Q.jsx)(Kt,{benchmarkId:t,datasets:s,loading:c,onImport:()=>{},onRefresh:p}),(0,Q.jsx)(`h3`,{className:$.sectionTitle,children:e(`benchmark.detail.tabs.runs`)}),(0,Q.jsx)(Yt,{benchmarkId:t})]}):(0,Q.jsxs)(u,{className:$.container,gap:24,height:`100%`,width:`100%`,children:[(0,Q.jsx)(u,{gap:16,children:(0,Q.jsxs)(u,{horizontal:!0,align:`start`,gap:12,children:[(0,Q.jsx)(S.Avatar,{active:!0,shape:`square`,size:40,style:{borderRadius:y.borderRadiusLG}}),(0,Q.jsxs)(u,{flex:1,gap:8,children:[(0,Q.jsx)(S.Input,{active:!0,style:{height:24,width:200}}),(0,Q.jsx)(S.Input,{active:!0,size:`small`,style:{height:14,width:320}})]})]})}),(0,Q.jsx)(u,{horizontal:!0,gap:12,children:[1,2,3,4].map(e=>(0,Q.jsx)(b,{styles:{body:{padding:16}},style:{border:`1px solid ${y.colorBorderSecondary}`,borderRadius:y.borderRadius,flex:1,minWidth:0},children:(0,Q.jsxs)(u,{gap:12,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(S.Avatar,{active:!0,shape:`square`,size:36,style:{borderRadius:y.borderRadius}}),(0,Q.jsx)(S.Input,{active:!0,size:`small`,style:{height:14,width:80}})]}),(0,Q.jsxs)(u,{gap:4,children:[(0,Q.jsx)(S.Input,{active:!0,style:{height:24,width:60}}),(0,Q.jsx)(S.Input,{active:!0,size:`small`,style:{height:12,width:100}})]})]})},e))}),(0,Q.jsx)(S.Input,{active:!0,style:{height:16,width:80}}),(0,Q.jsx)(S.Input,{active:!0,style:{height:64,width:`100%`}}),(0,Q.jsx)(S.Input,{active:!0,style:{height:16,width:80}}),(0,Q.jsx)(S.Input,{active:!0,style:{height:64,width:`100%`}})]})})}))();export{$t as default};