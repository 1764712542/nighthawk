import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Qr as o,bt as s}from"./dialog-BebLzVzY.js";import{a as c,y as l}from"../vendor/vendor-react-CBcx1o7d.js";import{a as u,b as d,c as f,t as p,yn as m}from"./es-CVJR_g25.js";import{Im as h,Ip as g,Md as _,Qh as v,Sv as y,Xh as b,wu as x,x as S}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as C,i as w,t as T,u as ee}from"./base-ui-BAv0gRbN.js";import{or as E,t as D}from"./es-LELdnrjB.js";import{t as O}from"./src-Cw6BG0HN.js";import{o as k,t as A}from"./format-BuuIRQbq.js";import{Tt as j,n as M,t as te}from"./Messages-CHVzbeQ8.js";import{n as ne,t as re}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{r as ie}from"./OpStatusTray-DADF8czB.js";import{t as ae}from"./Conversation-B6Z_LIMP.js";import{n as oe,t as se}from"./AsyncBoundary-CzRTtM14.js";import{n as ce,t as le}from"./useInitAgentConfig-BoD3BiUh.js";import{r as N,s as P,t as ue}from"./eval-8_vdTK9q.js";import{n as de,t as fe}from"./SegmentBar-DiURj7-z.js";var F,I,L,R,pe=e((()=>{O(),D(),T(),p(),S(),F=t(a()),n(),I=t(i()),L=u(({css:e})=>({backLink:e`
    cursor: pointer;

    align-self: flex-start;

    border-radius: ${f.borderRadiusSM};

    color: ${f.colorTextTertiary};

    transition: color 0.15s ease;

    &:hover {
      color: ${f.colorText};
    }

    &:focus-visible {
      outline: 2px solid ${f.colorPrimary};
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,header:e`
    padding-block: 16px;
    padding-inline: 16px;
    border-block-end: 1px solid ${f.colorBorderSecondary};
  `,metricCard:e`
    gap: 8px;

    padding-block: 8px;
    padding-inline: 8px 16px;
    border-radius: ${f.borderRadiusSM};

    font-size: ${f.fontSizeSM};

    background: ${f.colorBgContainer};
  `,metricIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: ${f.borderRadiusSM};

    color: ${f.colorTextTertiary};

    background: ${f.colorFillTertiary};
  `,metricLabel:e`
    font-size: ${f.fontSizeSM};
    line-height: 1;
    color: ${f.colorTextTertiary};
  `,metricValue:e`
    font-family: ${f.fontFamilyCode};
    font-size: ${f.fontSize};
    font-weight: 500;
    line-height: 1.4;
    color: ${f.colorText};
  `})),R=(0,F.memo)(({caseNumber:e,runName:t,evalResult:n,onBack:i,onPrev:a,onNext:c})=>{let{t:l}=r(`eval`),u=[{icon:h,label:l(`caseDetail.duration`),value:n?.duration==null?null:`${(n.duration/1e3).toFixed(1)}s`},{icon:_,label:l(`caseDetail.steps`),value:n?.steps==null?null:String(n.steps)},{icon:g,label:l(`caseDetail.cost`),value:n?.cost==null?null:`$${A(n.cost)}`},{icon:x,label:l(`caseDetail.tokens`),value:n?.tokens==null?null:k(n.tokens)}].filter(e=>e.value!==null);return(0,I.jsxs)(o,{className:L.header,gap:16,children:[(0,I.jsxs)(o,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,I.jsxs)(o,{gap:4,children:[(0,I.jsxs)(o,{horizontal:!0,align:`center`,className:L.backLink,gap:4,role:`button`,tabIndex:0,onClick:i,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i())},children:[(0,I.jsx)(y,{size:12}),(0,I.jsx)(w,{fontSize:12,children:t})]}),(0,I.jsxs)(w,{as:`h4`,style:{fontSize:20,margin:0},weight:600,children:[`#`,e]})]}),(0,I.jsxs)(o,{horizontal:!0,align:`center`,gap:8,children:[(0,I.jsx)(s,{disabled:!a,icon:v,size:`small`,onClick:a}),(0,I.jsx)(s,{disabled:!c,icon:b,size:`small`,onClick:c})]})]}),u.length>0&&(0,I.jsx)(o,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:u.map(e=>(0,I.jsxs)(o,{horizontal:!0,align:`center`,className:L.metricCard,children:[(0,I.jsx)(`div`,{className:L.metricIcon,children:(0,I.jsx)(e.icon,{size:14})}),(0,I.jsxs)(o,{gap:0,children:[(0,I.jsx)(`span`,{className:L.metricLabel,children:e.label}),(0,I.jsx)(`span`,{className:L.metricValue,children:e.value})]})]},e.label))})]})})})),z,B,V,H,me=e((()=>{D(),T(),p(),z=t(a()),n(),ae(),M(),le(),B=t(i()),V=u(({css:e})=>({header:e`
    flex: none;
    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${f.colorBorderSecondary};
  `,scroll:e`
    position: relative;
    overflow: hidden auto;
    flex: 1;
  `})),H=(0,z.memo)(({agentId:e,topicId:t,threadId:n})=>{let{t:i}=r(`eval`);ce(e);let a=(0,z.useCallback)((e,t)=>(0,B.jsx)(te,{disableEditing:!0,id:t,index:e}),[]),s=n?`${t}-${n}`:t;return(0,B.jsx)(j,{context:{agentId:e,threadId:n,topicId:t},children:(0,B.jsxs)(o,{flex:1,style:{minWidth:0,overflow:`hidden`},children:[(0,B.jsx)(o,{className:V.header,children:(0,B.jsx)(w,{fontSize:12,type:`secondary`,weight:500,children:i(`caseDetail.chatArea.title`)})}),(0,B.jsx)(o,{className:V.scroll,onContextMenu:e=>e.preventDefault(),children:(0,B.jsx)(ie,{disableActionsBar:!0,itemContent:a})})]})},s)})})),U,W,G,K,q,J,Y,X,he=e((()=>{O(),D(),T(),d(),p(),U=t(a()),n(),de(),W=t(i()),G=u(({css:e})=>({container:e`
    border-inline-start: 1px solid ${f.colorBorderSecondary};
    background: ${f.colorBgContainer};
  `,copyBlock:e`
    font-size: ${f.fontSize};
    line-height: 1.5;
    color: ${f.colorText};
  `,infoItem:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 4px;
    padding-inline: 0;
  `,infoLabel:e`
    font-size: ${f.fontSize};
    color: ${f.colorTextSecondary};
  `,infoValue:e`
    font-family: ${f.fontFamilyCode};
    font-size: ${f.fontSize};
    color: ${f.colorText};
  `,scoreCard:e`
    padding: 12px;
    border-radius: ${f.borderRadius};
    background: ${f.colorFillQuaternary};
  `,scoreValue:e`
    font-family: ${f.fontFamilyCode};
    font-size: ${f.fontSizeHeading3};
    font-weight: 600;
    line-height: 1;
    color: ${f.colorText};
  `,section:e`
    padding-block-end: 16px;
    border-block-end: 1px solid ${f.colorBorderSecondary};
  `,rubricName:e`
    font-size: ${f.fontSize};
    font-weight: 500;
  `,rubricReason:e`
    font-size: ${f.fontSizeSM};
    line-height: 1.5;
    color: ${f.colorTextSecondary};
  `,rubricScore:e`
    font-family: ${f.fontFamilyCode};
    font-size: ${f.fontSizeSM};
    color: ${f.colorTextSecondary};
  `})),K=new Set([`equals`,`contains`,`regex`,`starts-with`,`ends-with`,`any-of`,`numeric`,`extract-match`,`json-schema`,`javascript`,`python`]),q=(0,U.memo)(({children:e})=>(0,W.jsx)(w,{fontSize:12,type:`secondary`,weight:500,children:e})),J=e=>e.replace(/^eval-mode-/,``),Y=e=>K.has(J(e)),X=(0,U.memo)(({testCase:e,evalResult:t,passed:n,score:i})=>{let{t:a}=r(`eval`),s=t?.rubricScores,c=s&&s.length>0,l=c&&s.every(e=>Y(e.rubricId)),u=c?s.filter(e=>!Y(e.rubricId)):[],d=i!=null,p=d?Math.max(0,Math.min(100,Math.round(i*100))):0;return(0,W.jsxs)(o,{className:G.container,gap:16,padding:16,style:{height:`100%`,overflowY:`auto`,width:320},children:[t?.error&&(0,W.jsxs)(o,{className:G.section,gap:8,children:[(0,W.jsx)(q,{children:a(`caseDetail.failureReason`)}),(0,W.jsx)(w,{className:G.copyBlock,type:`danger`,children:t.error})]}),(0,W.jsxs)(o,{className:G.section,gap:12,children:[(0,W.jsx)(q,{children:a(`caseDetail.section.testCase`)}),e?.content?.input&&(0,W.jsxs)(o,{gap:4,children:[(0,W.jsx)(w,{fontSize:12,type:`secondary`,children:a(`caseDetail.input`)}),(0,W.jsx)(w,{className:G.copyBlock,children:e.content.input})]}),e?.content?.expected&&(0,W.jsxs)(o,{gap:4,children:[(0,W.jsx)(w,{fontSize:12,type:`secondary`,children:a(`caseDetail.expected`)}),(0,W.jsx)(w,{className:G.copyBlock,children:e.content.expected})]}),e?.metadata?.difficulty&&(0,W.jsxs)(o,{gap:4,children:[(0,W.jsx)(w,{fontSize:12,type:`secondary`,children:a(`caseDetail.difficulty`)}),(0,W.jsx)(o,{horizontal:!0,children:(0,W.jsx)(C,{children:a(`difficulty.${e.metadata.difficulty}`)})})]})]}),(c||i!==void 0)&&(0,W.jsxs)(o,{className:G.section,gap:12,children:[(0,W.jsx)(q,{children:a(`caseDetail.section.scoring`)}),l&&c&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoValue,children:a(`evalMode.${J(s[0].rubricId)}`)}),(0,W.jsx)(C,{color:n?`success`:`error`,children:a(n?`table.filter.passed`:`table.filter.failed`)})]}),!l&&(0,W.jsxs)(W.Fragment,{children:[d&&(0,W.jsxs)(o,{className:G.scoreCard,gap:8,children:[(0,W.jsxs)(o,{horizontal:!0,align:`flex-end`,gap:8,justify:`space-between`,children:[(0,W.jsx)(`span`,{className:G.scoreValue,children:i.toFixed(2)}),(0,W.jsx)(w,{fontSize:12,type:`secondary`,children:a(`caseDetail.score`)})]}),(0,W.jsx)(fe,{segments:[{color:n?f.colorSuccess:f.colorError,value:p},{color:f.colorFillSecondary,value:100-p}]})]}),u.length>0&&(0,W.jsx)(m,{ghost:!0,size:`small`,items:u.map(e=>({children:e.reason?(0,W.jsx)(`span`,{className:G.rubricReason,children:e.reason}):null,key:e.rubricId,label:(0,W.jsxs)(o,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,W.jsx)(`span`,{className:G.rubricName,children:a(`evalMode.${J(e.rubricId)}`)}),(0,W.jsxs)(`span`,{className:G.rubricScore,children:[(e.score*100).toFixed(0),`%`]})]})}))})]})]}),(0,W.jsxs)(o,{gap:8,children:[(0,W.jsx)(q,{children:a(`caseDetail.section.runtime`)}),t?.duration!==void 0&&t.duration!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:a(`caseDetail.duration`)}),(0,W.jsxs)(`span`,{className:G.infoValue,children:[(t.duration/1e3).toFixed(1),`s`]})]}),t?.steps!==void 0&&t.steps!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:a(`caseDetail.steps`)}),(0,W.jsx)(`span`,{className:G.infoValue,children:t.steps})]}),t?.cost!==void 0&&t.cost!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:a(`caseDetail.cost`)}),(0,W.jsxs)(`span`,{className:G.infoValue,children:[`$`,A(t.cost)]})]}),t?.tokens!==void 0&&t.tokens!==null&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:a(`caseDetail.tokens`)}),(0,W.jsx)(`span`,{className:G.infoValue,children:k(t.tokens)})]}),t?.completionReason&&(0,W.jsxs)(`div`,{className:G.infoItem,children:[(0,W.jsx)(`span`,{className:G.infoLabel,children:a(`caseDetail.completionReason`)}),(0,W.jsx)(C,{children:t.completionReason})]})]}),t?.externalResult&&(0,W.jsxs)(o,{gap:8,children:[(0,W.jsx)(q,{children:a(`caseDetail.section.externalResult`)}),(0,W.jsx)(E,{wrap:!0,actionIconSize:`small`,language:`json`,style:{fontSize:12,maxHeight:360,overflow:`auto`},variant:`filled`,children:JSON.stringify(t.externalResult,null,2)})]})]})})})),Z,Q,$,ge;e((()=>{D(),T(),p(),Z=t(a()),n(),c(),oe(),re(),ue(),pe(),me(),he(),Q=t(i()),$=3e3,ge=(0,Z.memo)(()=>{let{benchmarkId:e,runId:t,caseId:n}=l(),{t:i}=r(`eval`),a=ne(),s=N(e=>e.useFetchRunDetail),c=N(e=>e.useFetchRunResults),u={refreshInterval:N(P.isRunActive(t))?$:0};s(t,u);let{data:d,error:p,isLoading:m,mutate:h}=c(t,u),g=N(P.getRunDetailById(t)),_=N(P.getRunResultsById(t)),[v,y]=(0,Z.useState)(null);(0,Z.useEffect)(()=>{_?.results&&y(_.results.find(e=>e.testCaseId===n))},[_,n]);let{prevCaseId:b,nextCaseId:x}=(0,Z.useMemo)(()=>{if(!_?.results||!n)return{};let e=_.results,t=e.findIndex(e=>e.testCaseId===n);return t<0?{}:{nextCaseId:t<e.length-1?e[t+1].testCaseId:void 0,prevCaseId:t>0?e[t-1].testCaseId:void 0}},[_,n]),S=v?.evalResult?.threads,C=S&&S.length>1,[w,T]=(0,Z.useState)(null);(0,Z.useEffect)(()=>{T(C?S[0].threadId:null)},[v?.testCaseId]);let E=(0,Z.useMemo)(()=>w?S?.find(e=>e.threadId===w):void 0,[w,S]),D=v?.topicId,O=v?.topic?.agentId,k=`/eval/bench/${e}/runs/${t}/cases`,A=E||v?.evalResult,j=E?E.passed:v?.passed,M=E?E.score:v?.score;return(0,Q.jsx)(se,{data:d,error:p,errorVariant:`page`,isEmpty:!v,isLoading:m,onRetry:()=>h(),children:v&&(0,Q.jsxs)(o,{height:`100%`,style:{overflow:`hidden`},children:[(0,Q.jsx)(R,{caseNumber:(v.testCase?.sortOrder??0)+1,evalResult:A,runName:g?.name||t.slice(0,8),onBack:()=>a(`/eval/bench/${e}/runs/${t}`),onNext:x?()=>a(`${k}/${x}`):void 0,onPrev:b?()=>a(`${k}/${b}`):void 0}),C&&(0,Q.jsx)(o,{paddingInline:16,style:{borderBlockEnd:`1px solid ${f.colorBorderSecondary}`,flex:`none`},children:(0,Q.jsx)(ee,{activeKey:w,items:S.map((e,t)=>({key:e.threadId,label:i(`caseDetail.threads.attempt`,{number:t+1})})),onChange:e=>T(e)})}),(0,Q.jsxs)(o,{horizontal:!0,flex:1,style:{overflow:`hidden`},children:[D&&O?(0,Q.jsx)(H,{agentId:O,threadId:w??void 0,topicId:D}):(0,Q.jsx)(o,{flex:1}),(0,Q.jsx)(X,{evalResult:A,passed:j,score:M,testCase:v.testCase})]})]})})})}))();export{ge as default};