import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{O as o,cs as s,er as c,ls as l}from"./app-const-Bl9rlHwj.js";import{B as u,Hr as d,Qr as f,bt as p,mr as m}from"./dialog-BebLzVzY.js";import{a as h,y as g}from"../vendor/vendor-react-CBcx1o7d.js";import{P as _,T as ee,Ut as v,a as y,b,c as x,et as te,l as S,ln as C,p as w,pt as ne,rn as T,t as E,vn as D}from"./es-CVJR_g25.js";import{Aa as re,Bi as ie,Im as ae,Ip as oe,Jh as se,Ka as ce,Mc as le,Md as ue,Ms as de,Ph as fe,Rt as pe,Sv as me,Wg as he,Wn as ge,bg as _e,cm as ve,eg as ye,wu as be,x as O}from"../vendor/vendor-icons-C-Y4oLkk.js";import{B as xe,F as Se,P as Ce,Q as we,R as Te,c as Ee,et as De,i as Oe,t as k,x as ke}from"./base-ui-BAv0gRbN.js";import{N as Ae,or as je,t as A,zi as Me}from"./es-LELdnrjB.js";import{f as Ne,o as Pe,t as Fe}from"./es-CgktV-sg.js";import{t as Ie}from"./src-Cw6BG0HN.js";import{o as Le,t as Re}from"./format-BuuIRQbq.js";import{a as ze,i as Be,n as Ve,t as He}from"./workspaceAwarePath-DIBsOTQc.js";import{n as Ue,t as We}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as Ge,t as Ke}from"./WorkspaceLink-DKEucXjF.js";import{n as qe,t as Je}from"./AsyncBoundary-CzRTtM14.js";import{a as Ye,i as Xe,r as j,s as Ze,t as Qe}from"./eval-8_vdTK9q.js";import{n as $e,t as et}from"./StatusBadge-I2ZCpKG6.js";import{n as tt,t as nt}from"./SegmentBar-DiURj7-z.js";import{r as rt,t as it}from"./utils-DH01phU5.js";import{n as at,t as ot}from"./RunEditModal-DiQ7bYn0.js";var M,N,st,ct,lt,ut=e((()=>{k(),b(),E(),M=t(l()),i(),Ye(),N=t(s()),st=y(({css:e})=>({indexCell:e`
    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};
  `})),ct=(0,M.memo)(({status:e})=>{let{t}=a(`eval`);return e===`error`?(0,N.jsx)(T,{color:`orange`,text:t(`table.filter.error`)}):e===`timeout`?(0,N.jsx)(T,{color:`orange`,text:t(`run.status.timeout`)}):(0,N.jsx)(Ee,{children:e})}),lt=({onSelectionChange:e,onSelectionReady:t,runId:n,submitter:r})=>{let{t:i}=a(`eval`),[o,s]=(0,M.useState)([]),[c,l]=(0,M.useState)(!1),[u,d]=(0,M.useState)([]),[f,p]=(0,M.useState)(10);(0,M.useEffect)(()=>{l(!0),Xe.getResumableCases(n).then(e=>{s(e),d(e.filter(e=>e.canResume).map(e=>e.testCaseId))}).finally(()=>l(!1))},[n]),(0,M.useEffect)(()=>{e(u.length)},[e,u]);let m=(0,M.useMemo)(()=>o.filter(e=>e.canResume),[o]),h=u.length===m.length&&m.length>0,g=u.length>0&&u.length<m.length,v=(0,M.useCallback)(e=>{d(e?m.map(e=>e.testCaseId):[])},[m]),y=(0,M.useCallback)((e,t)=>{d(n=>t?[...n,e]:n.filter(t=>t!==e))},[]),b=(0,M.useCallback)(async()=>{u.length!==0&&await r(o.filter(e=>u.includes(e.testCaseId)).map(e=>({testCaseId:e.testCaseId,threadId:e.threadId})))},[o,u,r]);(0,M.useEffect)(()=>{t({confirm:b,selectedCount:()=>u.length})},[b,t,u]);let x=(0,M.useMemo)(()=>[{key:`select`,render:(e,t)=>(0,N.jsx)(C,{title:t.canResume?void 0:t.reason,children:(0,N.jsx)(we,{checked:u.includes(t.testCaseId),disabled:!t.canResume,onChange:e=>y(t.testCaseId,e)})}),title:(0,N.jsx)(we,{checked:h,disabled:m.length===0,indeterminate:g,onChange:v}),width:48},{key:`index`,render:(e,t)=>(0,N.jsx)(`span`,{className:st.indexCell,children:t.sortOrder??`-`}),title:`#`,width:48},{key:`input`,render:(e,t)=>(0,N.jsx)(ee.Paragraph,{ellipsis:{expandable:!0,rows:2,symbol:`...`},style:{margin:0},children:t.input}),title:i(`table.columns.input`)},{key:`status`,render:(e,t)=>(0,N.jsx)(C,{title:t.canResume?void 0:t.reason,children:(0,N.jsx)(ct,{status:t.resumeStatus})}),title:i(`table.columns.status`),width:110}],[i,u,h,g,m,y,v]);return c?(0,N.jsx)(D,{active:!0,paragraph:{rows:4}}):(0,N.jsx)(_,{columns:x,dataSource:o,rowKey:`testCaseId`,scroll:{y:400},size:`small`,style:{minHeight:300},pagination:{pageSize:f,showSizeChanger:!0,size:`small`,onShowSizeChange:(e,t)=>p(t)}})}})),dt,ft,pt=e((()=>{k(),i(),dt=t(s()),ft=({confirming:e,onConfirm:t,selectedCount:n})=>{let{t:r}=a(`eval`),{t:i}=a(`common`),{close:o}=Te();return(0,dt.jsxs)(xe,{children:[(0,dt.jsx)(m,{disabled:e,onClick:o,children:i(`cancel`)}),(0,dt.jsxs)(m,{disabled:n===0,loading:e,type:`primary`,onClick:t,children:[r(`run.actions.batchResume.modal.confirm`),` (`,n,`)`]})]})}})),mt,ht,gt=e((()=>{k(),n(),ut(),pt(),mt=t(s()),ht=({onConfirm:e,runId:t})=>{let n={},i=!1,a=0,o=async()=>{},s=()=>(0,mt.jsx)(ft,{confirming:i,selectedCount:a,onConfirm:async()=>{i=!0,n.instance?.update({footer:s()});try{await o(),n.instance?.close()}finally{i=!1,n.instance?.update({footer:s()})}}});return n.instance=Se({content:(0,mt.jsx)(lt,{runId:t,submitter:e,onSelectionChange:e=>{e!==a&&(a=e,n.instance?.update({footer:s()}))},onSelectionReady:e=>{o=e.confirm}}),footer:s(),title:r(`run.actions.batchResume.modal.title`,{ns:`eval`}),width:700}),n.instance}})),_t,vt,yt=e((()=>{_t=new Set([`error`,`timeout`]),vt=(e,t)=>{if(t<=1)return _t.has(e.status??``)?{resumeStatus:e.status}:void 0;let n=e.evalResult?.threads?.find(e=>_t.has(e.status??``));if(n?.status)return{resumeStatus:n.status,threadId:n.threadId}}})),P,F,I,bt,L,xt,St,Ct,wt,Tt,Et,Dt,Ot=e((()=>{Ie(),A(),k(),b(),E(),O(),P=t(l()),i(),Ge(),tt(),yt(),F=t(s()),I=y(({css:e})=>({caseLink:e`
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${x.colorPrimary};
    }
  `,durationSub:e`
    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};
  `,chip:e`
    cursor: pointer;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 10px;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: 999px;

    font-size: ${x.fontSizeSM};
    color: ${x.colorTextSecondary};

    background: ${x.colorBgContainer};

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      background: ${x.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${x.colorPrimary};
      outline-offset: 1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,chipActive:e`
    border-color: ${x.colorText};
    color: ${x.colorText};
    background: ${x.colorFillSecondary};
  `,chipCount:e`
    font-family: ${x.fontFamilyCode};
    font-weight: 600;
  `,chipDot:e`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `,filterBar:e`
    padding-block: 12px;
    padding-inline: 20px;
    border-block-end: 1px solid ${x.colorBorderSecondary};
  `,summaryBar:e`
    padding-block: 16px;
    padding-inline: 20px;
    border-block-end: 1px solid ${x.colorBorderSecondary};
  `,summaryLabel:e`
    font-size: ${x.fontSizeSM};
    font-weight: 500;
    color: ${x.colorTextSecondary};
  `,indexCell:e`
    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};
  `,monoCell:e`
    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextSecondary};
  `,threadDot:e`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `})),bt=y(({css:e,cssVar:t})=>({text:e`
    color: ${t.colorTextSecondary};
  `})),L=(0,P.memo)(({children:e})=>(0,F.jsx)(`span`,{className:bt.text,children:e})),xt=(0,P.memo)(({record:e})=>{let{t}=a(`eval`),n=e.status;if(!n||n===`pending`)return(0,F.jsx)(T,{status:`default`,text:(0,F.jsx)(L,{children:t(`run.status.pending`)})});if(n===`running`)return(0,F.jsx)(T,{status:`processing`,text:(0,F.jsx)(L,{children:t(`run.status.running`)})});if(n===`passed`)return(0,F.jsx)(Ee,{color:`green`,children:t(`table.filter.passed`)});if(n===`failed`)return(0,F.jsx)(Ee,{color:`red`,children:t(`table.filter.failed`)});if(n===`error`){let n=e.evalResult?.error,r=(0,F.jsx)(T,{color:`orange`,text:(0,F.jsx)(L,{children:t(`table.filter.error`)})});return n?(0,F.jsx)(C,{title:n,children:r}):r}if(n===`timeout`)return(0,F.jsx)(T,{color:`orange`,text:(0,F.jsx)(L,{children:t(`run.status.timeout`)})});if(n===`external`){let e=(0,F.jsx)(T,{color:`purple`,text:(0,F.jsx)(L,{children:t(`run.status.external`)})});return(0,F.jsx)(C,{title:t(`run.status.external.tooltip`),children:e})}if(n===`completed`){let e=(0,F.jsx)(T,{color:`blue`,text:(0,F.jsx)(L,{children:t(`run.status.completed`)})});return(0,F.jsx)(C,{title:t(`run.status.completed.tooltip`),children:e})}return(0,F.jsx)(T,{status:`default`,text:(0,F.jsx)(L,{children:n})})}),St=(0,P.memo)(({threads:e})=>(0,F.jsx)(f,{horizontal:!0,align:`center`,gap:4,children:e.map(e=>{let t=x.colorTextTertiary;return e.status===`running`?t=x.colorPrimary:e.status===`error`?t=x.colorError:e.passed===!0?t=x.colorSuccess:e.passed===!1&&(t=x.colorError),e.status===`external`&&(t=x.colorWarning),e.status===`completed`&&(t=x.colorPrimary),(0,F.jsx)(C,{title:e.error||e.status===`error`?`error`:e.status===`running`?`running`:e.passed===!0?`passed`:e.passed===!1&&e.status!==`completed`?`failed`:e.status===`external`?`Awaiting for external evaluation`:e.status===`completed`?`completed`:`pending`,children:(0,F.jsx)(`span`,{className:I.threadDot,style:{backgroundColor:t}})},e.threadId)})})),Ct=(0,P.memo)(({ms:e})=>{let t=e/1e3;if(t<60)return(0,F.jsxs)(`span`,{className:I.monoCell,children:[t.toFixed(1),`s`]});let n=Math.floor(t/60),r=Math.floor(t%60);return(0,F.jsxs)(f,{gap:2,children:[(0,F.jsxs)(`span`,{className:I.monoCell,children:[n,`m `,r,`s`]}),(0,F.jsxs)(`span`,{className:I.durationSub,children:[t.toFixed(1),`s`]})]})}),wt=(0,P.memo)(({startTime:e})=>{let[t,n]=(0,P.useState)(()=>Date.now()-new Date(e).getTime());return(0,P.useEffect)(()=>{let t=setInterval(()=>{n(Date.now()-new Date(e).getTime())},100);return()=>clearInterval(t)},[e]),(0,F.jsx)(Ct,{ms:t})}),Tt=new Set([`error`,`failed`,`timeout`]),Et=new Set([`completed`,`failed`,`aborted`]),Dt=(0,P.memo)(({results:e,benchmarkId:t,runId:n,k:r=1,onRetryCase:i,onResumeCase:o,runStatus:s})=>{let{t:c}=a(`eval`),[l,u]=(0,P.useState)(``),[m,h]=(0,P.useState)(`all`),[g,ee]=(0,P.useState)(20),[v,y]=(0,P.useState)(null),[b,te]=(0,P.useState)(null),S=r>1,w=!!i&&!!s&&Et.has(s),T=!!o,E=(0,P.useMemo)(()=>{let t=e;return l&&(t=t.filter(e=>e.testCase?.content?.input?.toLowerCase().includes(l.toLowerCase()))),m!==`all`&&(t=m===`pending`?t.filter(e=>!e.status||e.status===`pending`):m===`running`?t.filter(e=>e.status===`running`):t.filter(e=>e.status===m)),t},[e,l,m]),D=(0,P.useMemo)(()=>{let t=0,n=0,r=0,i=0;for(let a of e){let e=a.status;e===`passed`?t++:e===`failed`?n++:e===`error`||e===`timeout`?r++:(!e||e===`pending`||e===`running`)&&i++}return{error:r,failed:n,passed:t,pending:i}},[e]),ae=[{color:x.colorSuccess,count:D.passed,label:c(`table.filter.passed`),value:`passed`},{color:x.colorError,count:D.failed,label:c(`table.filter.failed`),value:`failed`},{color:x.colorWarning,count:D.error,label:c(`table.filter.error`),value:`error`},{color:x.colorTextQuaternary,count:D.pending,label:c(`run.status.pending`),value:`pending`}],oe=[{color:x.colorSuccess,value:D.passed},{color:x.colorError,value:D.failed},{color:x.colorWarning,value:D.error},{color:x.colorTextQuaternary,value:D.pending}],se=(0,P.useMemo)(()=>{let e=[{key:`index`,render:(e,t,n)=>(0,F.jsx)(`span`,{className:I.indexCell,children:t.testCase?.sortOrder??n+1}),title:`#`,width:48},{dataIndex:[`testCase`,`content`,`input`],key:`input`,render:(e,r)=>(0,F.jsx)(Ke,{className:I.caseLink,to:`/eval/bench/${t}/runs/${n}/cases/${r.testCaseId}`,children:e}),title:c(`table.columns.input`)}];return S?e.push({key:`threads`,render:(e,t)=>{let n=t.evalResult?.threads;return n?.length?(0,F.jsx)(St,{threads:n}):(0,F.jsx)(xt,{record:t})},title:c(`table.columns.status`),width:60+r*12},{key:`passAtK`,render:(e,t)=>{let n=t.evalResult?.passAtK,i=t.evalResult?.passAllK,a=n!=null,o=i!=null;return!a&&!o?`-`:(0,F.jsxs)(f,{gap:2,children:[a&&(n?(0,F.jsx)(Ee,{color:`green`,children:c(`table.filter.passed`)}):(0,F.jsx)(Ee,{color:`red`,children:c(`table.filter.failed`)})),o&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[`^`,r,`: `,c(i?`table.filter.passed`:`table.filter.failed`)]})]})},title:`pass@${r}`,width:110}):e.push({key:`status`,render:(e,t)=>(0,F.jsx)(xt,{record:t}),title:c(`table.columns.status`),width:100}),e.push({key:`duration`,render:(e,t)=>{let n=t.evalResult?.duration;return n==null?t.status===`running`&&t.createdAt?(0,F.jsx)(wt,{startTime:t.createdAt}):`-`:(0,F.jsx)(Ct,{ms:n})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.duration??0)-(t.evalResult?.duration??0),title:c(`table.columns.duration`),width:100},{key:`steps`,render:(e,t)=>{let n=t.evalResult?.steps;if(n==null)return`-`;let r=t.evalResult?.llmCalls,i=t.evalResult?.toolCalls,a=n,o=r??void 0,s=i??void 0,c=o!==void 0||s!==void 0;return(0,F.jsxs)(f,{gap:2,children:[(0,F.jsxs)(f,{horizontal:!0,align:`center`,gap:4,children:[(0,F.jsx)(d,{icon:ue,size:12,style:{opacity:.5}}),(0,F.jsx)(`span`,{className:I.monoCell,children:a})]}),c&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[o??0,` llm / `,s??0,` tool`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.steps??0)-(t.evalResult?.steps??0),title:c(`table.columns.steps`),width:120},{key:`cost`,render:(e,t)=>{let n=t.evalResult?.cost,r=t.evalResult?.tokens,i=n!=null,a=r!=null;return!i&&!a?`-`:(0,F.jsxs)(f,{gap:2,children:[i&&(0,F.jsxs)(`span`,{className:I.monoCell,children:[`$`,Re(n)]}),a&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[Le(r),` tokens`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.cost??0)-(t.evalResult?.cost??0),title:c(`table.columns.cost`),width:120}),S&&e.push({key:`totalCost`,render:(e,t)=>{let n=t.evalResult?.totalCost,r=t.evalResult?.totalTokens,i=n!=null,a=r!=null;return!i&&!a?`-`:(0,F.jsxs)(f,{gap:2,children:[i&&(0,F.jsxs)(`span`,{className:I.monoCell,children:[`$`,Re(n)]}),a&&(0,F.jsxs)(`span`,{className:I.durationSub,children:[Le(r),` tokens`]})]})},sortDirections:[`descend`,`ascend`],sorter:(e,t)=>(e.evalResult?.totalCost??0)-(t.evalResult?.totalCost??0),title:c(`table.columns.totalCost`),width:120}),(w||T)&&e.push({key:`actions`,render:(e,t)=>{let n=w&&Tt.has(t.status),a=vt(t,r),s=T&&!!a;if(!n&&!s)return null;let l=v===t.testCaseId,u=b===t.testCaseId;return(0,F.jsxs)(f,{horizontal:!0,gap:4,children:[n&&(0,F.jsx)(C,{title:c(`run.actions.retryCase`),children:(0,F.jsx)(p,{icon:ie,loading:l,size:`small`,onClick:async()=>{y(t.testCaseId);try{await i(t.testCaseId)}finally{y(null)}}})}),s&&(0,F.jsx)(C,{title:c(`run.actions.resumeCase`),children:(0,F.jsx)(p,{icon:re,loading:u,size:`small`,onClick:async()=>{te(t.testCaseId);try{await o(t.testCaseId,a?.threadId)}finally{te(null)}}})})]})},title:``,width:80}),e},[t,n,c,S,r,w,T,v,b,i,o]);return(0,F.jsxs)(f,{gap:0,children:[(0,F.jsxs)(f,{className:I.summaryBar,gap:12,children:[(0,F.jsx)(`span`,{className:I.summaryLabel,children:c(`table.columns.status`)}),(0,F.jsx)(nt,{segments:oe}),(0,F.jsx)(f,{horizontal:!0,gap:8,wrap:`wrap`,children:ae.map(e=>{let t=m===e.value;return(0,F.jsxs)(`span`,{className:`${I.chip}${t?` ${I.chipActive}`:``}`,role:`button`,tabIndex:0,onClick:()=>h(t?`all`:e.value),onKeyDown:n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),h(t?`all`:e.value))},children:[(0,F.jsx)(`span`,{className:I.chipDot,style:{backgroundColor:e.color}}),e.label,(0,F.jsx)(`span`,{className:I.chipCount,children:e.count})]},e.value)})})]}),(0,F.jsxs)(f,{horizontal:!0,align:`center`,className:I.filterBar,gap:8,children:[(0,F.jsx)(ne.Search,{allowClear:!0,placeholder:c(`table.search.placeholder`),style:{width:240},onChange:e=>u(e.target.value)}),(0,F.jsx)(ke,{style:{width:120},value:m,options:[{label:c(`table.filter.all`),value:`all`},{label:c(`table.filter.passed`),value:`passed`},{label:c(`table.filter.failed`),value:`failed`},{label:c(`table.filter.error`),value:`error`},{label:c(`table.filter.running`),value:`running`},{label:c(`run.status.pending`),value:`pending`},{label:c(`run.status.external`),value:`external`},{label:c(`run.status.completed`),value:`completed`}],onChange:h}),(0,F.jsx)(`span`,{style:{color:x.colorTextTertiary,fontSize:12,whiteSpace:`nowrap`},children:c(`table.total`,{count:E.length})})]}),(0,F.jsx)(_,{columns:se,dataSource:E,rowKey:`testCaseId`,size:`small`,pagination:{pageSize:g,showSizeChanger:!0,size:`small`,onShowSizeChange:(e,t)=>ee(t)}})]})})})),kt,R,z,At,jt=e((()=>{Ie(),A(),k(),b(),E(),kt=t(l()),i(),Be(),Ve(),R=t(s()),z=y(({css:e})=>({axisLabel:e`
    pointer-events: none;
    position: absolute;
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};
  `,dot:e`
    cursor: pointer;
    transition:
      transform 0.15s ease,
      opacity 0.15s ease;

    &:hover {
      transform: translate(-50%, 50%) scale(1.5);
      opacity: 1 !important;
    }

    &:focus-visible {
      outline: 2px solid ${x.colorPrimary};
      outline-offset: 1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,scatterArea:e`
    position: relative;
    overflow: hidden;
    flex: 1;
  `,tooltipLabel:e`
    color: ${x.colorTextTertiary};
  `})),At=(0,kt.memo)(({results:e,benchmarkId:t,runId:n})=>{let{t:r}=a(`eval`),i=w(),o=ze(),{maxDuration:s,maxTokens:c,scatterData:l}=(0,kt.useMemo)(()=>{if(!e||e.length===0)return{maxDuration:0,maxTokens:0,scatterData:[]};let t=0,n=0,r=e.map(e=>{let r=(e.evalResult?.duration||0)/1e3,i=e.evalResult?.tokens||0,a=e.evalResult?.cost,o=e.status,s=e.testCase?.content?.input||``,c=e.testCase?.content?.expected||``,l=e.testCase?.sortOrder,u=e.testCaseId||``;return r>t&&(t=r),i>n&&(n=i),{cost:a,duration:r,expected:c,input:s,sortOrder:l,status:o,testCaseId:u,tokens:i}});return{maxDuration:t,maxTokens:n,scatterData:r}},[e]);return!e||e.length===0?null:(0,R.jsxs)(`div`,{className:z.scatterArea,children:[(0,R.jsxs)(`svg`,{preserveAspectRatio:`none`,viewBox:`0 0 100 100`,style:{height:`100%`,insetBlockStart:0,insetInlineStart:0,position:`absolute`,width:`100%`},children:[(0,R.jsx)(`line`,{stroke:i.colorBorderSecondary,strokeWidth:`0.5`,x1:`0`,x2:`100`,y1:`100`,y2:`100`}),(0,R.jsx)(`line`,{stroke:i.colorBorderSecondary,strokeWidth:`0.5`,x1:`0`,x2:`0`,y1:`0`,y2:`100`}),[1,2,3].map(e=>(0,R.jsx)(`line`,{stroke:i.colorBorderSecondary,strokeDasharray:`2 2`,strokeOpacity:`0.5`,strokeWidth:`0.5`,x1:`0`,x2:`100`,y1:100-e*25,y2:100-e*25},e))]}),l.map((e,a)=>{let l=e.tokens/(c||1)*92+4,u=e.duration/(s||1)*88+6,d=e.status===`passed`?i.colorSuccess:e.status===`error`?i.colorWarning:i.colorError,p=e.status===`passed`?`green`:e.status===`error`?`orange`:`red`,m=e.status===`passed`?r(`run.chart.pass`):e.status===`error`?r(`run.chart.error`):r(`run.chart.fail`),h=e.input.length>60?e.input.slice(0,60)+`...`:e.input,g=e.expected.length>60?e.expected.slice(0,60)+`...`:e.expected,_=He(`/eval/bench/${t}/runs/${n}/cases/${e.testCaseId}`,o);return(0,R.jsx)(C,{title:(0,R.jsxs)(f,{gap:4,style:{fontSize:12,maxWidth:320},children:[(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,R.jsxs)(`span`,{style:{fontWeight:600},children:[`#`,e.sortOrder??a+1]}),(0,R.jsx)(Ee,{color:p,size:`small`,children:m})]}),(0,R.jsxs)(`span`,{className:z.tooltipLabel,children:[e.duration.toFixed(2),`s`]})]}),h&&(0,R.jsx)(`div`,{style:{lineHeight:1.4,wordBreak:`break-all`},children:h}),g&&(0,R.jsx)(`div`,{className:z.tooltipLabel,style:{lineHeight:1.4,wordBreak:`break-all`},children:g}),(0,R.jsx)(v,{style:{margin:`2px 0`}}),(0,R.jsxs)(f,{horizontal:!0,gap:16,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`span`,{className:z.tooltipLabel,children:[r(`run.chart.tokens`),`: `]}),Le(e.tokens)]}),e.cost!==void 0&&(0,R.jsxs)(`div`,{children:[(0,R.jsxs)(`span`,{className:z.tooltipLabel,children:[r(`run.metrics.cost`),`: `]}),`$`,Re(e.cost)]})]})]}),children:(0,R.jsx)(`div`,{className:z.dot,role:`button`,tabIndex:0,style:{background:d,borderRadius:`50%`,bottom:`${u}%`,height:7,left:`${l}%`,opacity:.8,position:`absolute`,transform:`translate(-50%, 50%)`,width:7},onClick:()=>window.open(_,`_blank`),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),window.open(_,`_blank`))}})},a)}),(0,R.jsx)(`span`,{className:z.axisLabel,style:{bottom:2,right:4},children:r(`run.chart.tokens`)}),(0,R.jsx)(`span`,{className:z.axisLabel,style:{left:4,top:0},children:r(`run.chart.duration`)})]})})})),Mt,Nt,Pt,Ft=e((()=>{Fe(),E(),Mt=t(l()),i(),Nt=t(s()),Pt=(0,Mt.memo)(({passedCases:e,failedCases:t,errorCases:n})=>{let{t:r}=a(`eval`),i=w(),o=[{name:r(`run.chart.pass`),value:e},{name:r(`run.chart.fail`),value:t},...n>0?[{name:r(`run.chart.error`),value:n}]:[]];return(0,Nt.jsx)(Pe,{category:`value`,colors:[i.colorSuccess,i.colorFill,...n>0?[i.colorWarning]:[]],data:o,index:`name`,style:{height:200},variant:`pie`})})})),It,B,V,Lt,Rt=e((()=>{Fe(),A(),E(),It=t(l()),i(),jt(),Ft(),B=t(s()),V=y(({css:e})=>({chartCard:e`
    padding: 16px;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: ${x.borderRadiusLG};
    background: ${x.colorBgContainer};
  `,chartTitle:e`
    margin-block-end: 12px;
    font-size: ${x.fontSizeSM};
    font-weight: 500;
    color: ${x.colorTextSecondary};
  `,legendDot:e`
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `,legendText:e`
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextSecondary};
  `,totalCount:e`
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: ${x.borderRadiusXS};

    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    font-weight: 600;
    color: ${x.colorTextSecondary};

    background: ${x.colorFillSecondary};
  `})),Lt=(0,It.memo)(({results:e,benchmarkId:t,runId:n})=>{let{t:r}=a(`eval`),i=w(),{errorCases:o,failedCases:s,histogramData:c,passedCases:l}=(0,It.useMemo)(()=>{if(!e||e.length===0)return{errorCases:0,failedCases:0,histogramData:[],passedCases:0};let t=0,n=0,r=0,i=[];for(let a of e){let e=(a.evalResult?.duration||0)/1e3,o=a.status;o===`passed`?t++:o===`error`?r++:o===`failed`&&n++,i.push({duration:e,status:o})}let a=[{error:0,failed:0,max:60,passed:0,range:`<1min`},{error:0,failed:0,max:180,passed:0,range:`1~3min`},{error:0,failed:0,max:300,passed:0,range:`3~5min`},{error:0,failed:0,max:1/0,passed:0,range:`>5min`}];for(let e of i){let t=e.duration<60?0:e.duration<180?1:e.duration<300?2:3;e.status===`passed`?a[t].passed++:e.status===`error`?a[t].error++:a[t].failed++}return{errorCases:r,failedCases:n,histogramData:a,passedCases:t}},[e]),u=r(`run.chart.pass`),d=r(`run.chart.fail`),p=r(`run.chart.error`),m=(0,It.useMemo)(()=>c.map(e=>({[p]:e.error,[d]:e.failed,[u]:e.passed,range:e.range})),[c,u,d,p]);return!e||e.length===0?null:(0,B.jsxs)(f,{horizontal:!0,gap:16,style:{height:320},children:[(0,B.jsxs)(f,{className:V.chartCard,flex:1,children:[(0,B.jsx)(`div`,{className:V.chartTitle,children:r(`run.chart.passFailError`)}),(0,B.jsx)(f,{align:`center`,flex:1,justify:`center`,children:(0,B.jsx)(Pt,{errorCases:o,failedCases:s,passedCases:l})})]}),(0,B.jsxs)(f,{className:V.chartCard,flex:2,children:[(0,B.jsxs)(f,{horizontal:!0,justify:`space-between`,style:{marginBlockEnd:12},children:[(0,B.jsx)(`span`,{className:V.chartTitle,style:{marginBlockEnd:0},children:r(`run.chart.latencyTokenDistribution`)}),(0,B.jsxs)(f,{horizontal:!0,gap:12,style:{fontSize:x.fontSizeSM},children:[(0,B.jsxs)(f,{horizontal:!0,align:`center`,gap:4,children:[(0,B.jsx)(`div`,{className:V.legendDot,style:{background:i.colorSuccess}}),(0,B.jsx)(`span`,{className:V.legendText,children:r(`run.chart.pass`)})]}),(0,B.jsxs)(f,{horizontal:!0,align:`center`,gap:4,children:[(0,B.jsx)(`div`,{className:V.legendDot,style:{background:i.colorFill}}),(0,B.jsx)(`span`,{className:V.legendText,children:r(`run.chart.fail`)})]}),(0,B.jsxs)(f,{horizontal:!0,align:`center`,gap:4,children:[(0,B.jsx)(`div`,{className:V.legendDot,style:{background:i.colorWarning}}),(0,B.jsx)(`span`,{className:V.legendText,children:r(`run.chart.error`)})]})]})]}),(0,B.jsx)(At,{benchmarkId:t,results:e,runId:n})]}),(0,B.jsxs)(f,{className:V.chartCard,flex:1,children:[(0,B.jsxs)(f,{horizontal:!0,align:`center`,className:V.chartTitle,gap:8,children:[(0,B.jsx)(`span`,{children:r(`run.chart.latencyDistribution`)}),(0,B.jsx)(`span`,{className:V.totalCount,children:e.length})]}),(0,B.jsx)(Ne,{stack:!0,categories:[u,d,p],colors:[i.colorSuccess,i.colorFill,i.colorWarning],data:m,index:`range`,showLegend:!1,showYAxis:!1})]})]})})})),zt,H,U,Bt,Vt=e((()=>{A(),k(),E(),O(),zt=t(l()),i(),Qe(),H=t(s()),U=y(({css:e})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 999px;

    color: ${x.colorTextSecondary};

    background: ${x.colorFillTertiary};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: ${x.fontSize};
    color: ${x.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: ${x.borderRadius};
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${x.geekblue};
    background: ${x.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${x.colorSuccess};
    background: ${x.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${x.purple};
    background: ${x.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: 999px;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;
  `})),Bt=(0,zt.memo)(({run:e})=>{let{t}=a(`eval`),n=j(e=>e.startRun),[r,i]=(0,zt.useState)(!1);return(0,H.jsxs)(`div`,{className:U.container,children:[(0,H.jsxs)(`div`,{className:U.orbitGroup,children:[(0,H.jsx)(`div`,{className:S(U.orbit,U.orbit1)}),(0,H.jsx)(`div`,{className:S(U.orbit,U.orbit2)}),(0,H.jsx)(`div`,{className:S(U.orbit,U.orbit3)}),(0,H.jsx)(`div`,{className:S(U.icon,U.icon1),children:(0,H.jsx)(d,{icon:he,size:16})}),(0,H.jsx)(`div`,{className:S(U.icon,U.icon2),children:(0,H.jsx)(d,{icon:de,size:16})}),(0,H.jsx)(`div`,{className:S(U.icon,U.icon3),children:(0,H.jsx)(d,{icon:_e,size:16})}),(0,H.jsx)(`div`,{className:U.center,children:(0,H.jsx)(d,{icon:re,size:18})})]}),(0,H.jsx)(`div`,{className:U.hint,children:t(`run.idle.hint`)}),(0,H.jsx)(m,{icon:(0,H.jsx)(re,{size:14}),loading:r,style:{marginTop:12},type:`primary`,onClick:()=>{Ce({content:t(`run.actions.start.confirm`),okText:t(`run.actions.start`),onOk:async()=>{try{i(!0),await n(e.id,e.status!==`idle`)}catch(e){u.error(e?.message||`Failed to start run`)}finally{i(!1)}},title:t(`run.actions.start`)})},children:t(`run.actions.start`)})]})})})),Ht,W,G,Ut,Wt=e((()=>{A(),E(),O(),Ht=t(l()),W=t(s()),G=y(({css:e})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 999px;

    color: ${x.colorWarning};

    background: ${x.colorWarningBg};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: ${x.fontSize};
    color: ${x.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: ${x.borderRadius};
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${x.geekblue};
    background: ${x.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${x.colorSuccess};
    background: ${x.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${x.purple};
    background: ${x.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed ${x.colorBorderSecondary};
    border-radius: 999px;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;
  `})),Ut=(0,Ht.memo)(({hint:e})=>(0,W.jsxs)(`div`,{className:G.container,children:[(0,W.jsxs)(`div`,{className:G.orbitGroup,children:[(0,W.jsx)(`div`,{className:S(G.orbit,G.orbit1)}),(0,W.jsx)(`div`,{className:S(G.orbit,G.orbit2)}),(0,W.jsx)(`div`,{className:S(G.orbit,G.orbit3)}),(0,W.jsx)(`div`,{className:S(G.icon,G.icon1),children:(0,W.jsx)(d,{icon:he,size:16})}),(0,W.jsx)(`div`,{className:S(G.icon,G.icon2),children:(0,W.jsx)(d,{icon:de,size:16})}),(0,W.jsx)(`div`,{className:S(G.icon,G.icon3),children:(0,W.jsx)(d,{icon:_e,size:16})}),(0,W.jsx)(`div`,{className:G.center,children:(0,W.jsx)(d,{icon:ae,size:18})})]}),(0,W.jsx)(`div`,{className:G.hint,children:e})]}))})),Gt,K,q,Kt,qt=e((()=>{o(),A(),k(),E(),O(),Gt=t(l()),i(),Be(),We(),Ve(),Ge(),at(),$e(),Qe(),K=t(s()),q=y(({css:e})=>({backLink:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    width: fit-content;

    font-size: ${x.fontSize};
    color: ${x.colorTextTertiary};
    text-decoration: none;

    transition: color 0.15s ease;

    &:hover {
      color: ${x.colorText};
    }

    &:focus-visible {
      outline: 2px solid ${x.colorPrimary};
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,configSection:e`
    margin-block-start: 12px;
  `,configSectionLabel:e`
    margin-block-end: 8px;
    font-size: ${x.fontSizeSM};
    font-weight: 500;
    color: ${x.colorTextSecondary};
  `,systemRole:e`
    overflow: auto;

    max-height: 300px;
    padding: 12px;
    border-radius: ${x.borderRadiusSM};

    font-size: ${x.fontSize};

    background: ${x.colorFillQuaternary};
  `,configToggle:e`
    cursor: pointer;

    display: flex;
    gap: 4px;
    align-items: center;

    width: fit-content;
    padding: 0;
    border: none;

    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};

    background: transparent;

    transition: color 0.15s ease;

    &:hover {
      color: ${x.colorText};
    }

    &:focus-visible {
      outline: 2px solid ${x.colorPrimary};
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,agentLink:e`
    cursor: pointer;
    border-radius: ${x.borderRadiusSM};
    transition: color 0.15s ease;

    &:hover {
      color: ${x.colorText};
    }

    &:focus-visible {
      outline: 2px solid ${x.colorPrimary};
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,datasetLink:e`
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${x.colorPrimary};
    }
  `,headerBand:e`
    padding: 20px;
    border-radius: ${x.borderRadiusLG};
    background: ${x.colorFillQuaternary};
  `,metaItem:e`
    display: inline-flex;
    gap: 6px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 10px;
    border-radius: ${x.borderRadiusSM};

    font-size: ${x.fontSize};
    color: ${x.colorTextSecondary};

    background: ${x.colorFillTertiary};
  `,metaLabel:e`
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};
  `,metaRow:e`
    flex-wrap: wrap;
  `,modelText:e`
    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextSecondary};
  `,runName:e`
    margin: 0;

    font-size: ${x.fontSizeHeading3};
    font-weight: 600;
    line-height: 1.2;
    color: ${x.colorText};
  `})),Kt=(0,Gt.memo)(({run:e,benchmarkId:t,hideStart:n})=>{let{t:r}=a(`eval`),i=Ue(),o=ze(),s=j(e=>e.abortRun),l=j(e=>e.deleteRun),d=j(e=>e.startRun),h=e.status===`running`||e.status===`pending`,g=e.status===`idle`||e.status===`failed`||e.status===`aborted`,[_,ee]=(0,Gt.useState)(!1),[v,y]=(0,Gt.useState)(!1),b=e.config?.agentSnapshot,x=e.targetAgent?.title||r(`run.detail.agent.unnamed`),te=b?.avatar||e.targetAgent?.avatar,S=b?.model||e.targetAgent?.model,C=b?.provider||e.targetAgent?.provider,w=()=>{Ce({content:r(`run.actions.abort.confirm`),okButtonProps:{danger:!0},okText:r(`run.actions.abort`),onOk:()=>s(e.id),title:r(`run.actions.abort`)})},ne=()=>{Ce({content:r(`run.actions.delete.confirm`),okButtonProps:{danger:!0},okText:r(`run.actions.delete`),onOk:async()=>{await l(e.id),i(`/eval/bench/${t}`)},title:r(`run.actions.delete`)})},T=()=>{Ce({content:r(`run.actions.start.confirm`),okText:r(`run.actions.start`),onOk:async()=>{try{ee(!0),await d(e.id,e.status!==`idle`)}catch(e){u.error(e?.message||`Failed to start run`)}finally{ee(!1)}},title:r(`run.actions.start`)})},E=()=>{e.targetAgentId&&window.open(He(c(e.targetAgentId),o),`_blank`)};return(0,K.jsxs)(f,{gap:16,children:[(0,K.jsxs)(Ke,{className:q.backLink,to:`/eval/bench/${t}`,children:[(0,K.jsx)(me,{size:16}),r(`run.detail.backToBenchmark`)]}),(0,K.jsxs)(f,{className:q.headerBand,gap:16,children:[(0,K.jsxs)(f,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,children:[(0,K.jsxs)(f,{gap:10,style:{minWidth:0},children:[(0,K.jsxs)(f,{horizontal:!0,align:`center`,gap:12,children:[(0,K.jsx)(`h1`,{className:q.runName,children:e.name||e.id.slice(0,8)}),(0,K.jsx)(et,{status:e.status}),(0,K.jsx)(p,{icon:ve,size:`small`,title:r(`run.detail.copyRunId`),onClick:async()=>{try{await Me(e.id),u.success(r(`run.detail.copyRunIdSuccess`))}catch{u.error(r(`run.detail.copyRunIdFailed`))}}})]}),(0,K.jsxs)(f,{horizontal:!0,align:`center`,className:q.metaRow,gap:8,children:[e.dataset&&(0,K.jsx)(Ke,{className:q.datasetLink,target:`_blank`,to:`/eval/bench/${t}/datasets/${e.dataset.id}`,children:(0,K.jsx)(`span`,{className:q.metaItem,children:e.dataset.name})}),e.targetAgentId&&(0,K.jsx)(f,{horizontal:!0,align:`center`,className:q.agentLink,role:`button`,tabIndex:0,onClick:E,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),E())},children:(0,K.jsxs)(`span`,{className:q.metaItem,children:[(0,K.jsx)(De,{avatar:te,size:16}),x]})}),S&&(0,K.jsx)(`span`,{className:q.metaItem,children:(0,K.jsxs)(`span`,{className:q.modelText,children:[C?`${C} / `:``,S]})}),e.createdAt&&(0,K.jsx)(`span`,{className:q.metaItem,children:(0,K.jsx)(`span`,{className:q.metaLabel,children:(e=>e?(e instanceof Date?e:new Date(e)).toLocaleString():``)(e.createdAt)})})]})]}),(0,K.jsxs)(f,{horizontal:!0,align:`center`,gap:8,style:{flexShrink:0},children:[g&&!n&&(0,K.jsx)(m,{icon:(0,K.jsx)(re,{size:14}),loading:_,type:`primary`,onClick:T,children:r(`run.actions.start`)}),(0,K.jsx)(p,{icon:ce,size:`small`,title:r(`run.actions.edit`),onClick:()=>ot({run:e})}),h&&(0,K.jsx)(p,{icon:ge,size:`small`,title:r(`run.actions.abort`),onClick:w}),(0,K.jsx)(p,{icon:pe,size:`small`,title:r(`run.actions.delete`),onClick:ne})]})]}),(0,K.jsxs)(`button`,{className:q.configToggle,onClick:()=>y(!v),children:[v?(0,K.jsx)(se,{size:12}):(0,K.jsx)(ye,{size:12}),r(`run.detail.configSnapshot`)]}),v&&b&&(0,K.jsxs)(f,{gap:0,children:[b.systemRole&&(0,K.jsxs)(`div`,{className:q.configSection,children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`System Role`}),(0,K.jsx)(`div`,{className:q.systemRole,children:(0,K.jsx)(Ae,{variant:`chat`,children:b.systemRole})})]}),b.plugins&&b.plugins.length>0&&(0,K.jsxs)(`div`,{className:q.configSection,children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`Plugins`}),(0,K.jsx)(f,{horizontal:!0,gap:4,wrap:`wrap`,children:b.plugins.map(e=>(0,K.jsx)(Ee,{children:e},e))})]}),(b.chatConfig||b.params)&&(0,K.jsx)(`div`,{className:q.configSection,children:(0,K.jsxs)(f,{horizontal:!0,gap:12,children:[b.chatConfig&&(0,K.jsxs)(f,{flex:1,gap:0,style:{minWidth:0},children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`Chat Config`}),(0,K.jsx)(je,{language:`json`,style:{fontSize:12,maxHeight:300,overflow:`auto`},variant:`filled`,children:JSON.stringify(b.chatConfig,null,2)})]}),b.params&&(0,K.jsxs)(f,{flex:1,gap:0,style:{minWidth:0},children:[(0,K.jsx)(`div`,{className:q.configSectionLabel,children:`Params`}),(0,K.jsx)(je,{language:`json`,style:{fontSize:12,maxHeight:300,overflow:`auto`},variant:`filled`,children:JSON.stringify(b.params,null,2)})]})]})})]})]})]})})})),Jt,J,Y,Yt,Xt=e((()=>{A(),E(),O(),Jt=t(l()),i(),J=t(s()),Y=y(({css:e})=>({center:e`
    position: absolute;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 999px;

    color: ${x.colorTextSecondary};

    background: ${x.colorFillTertiary};
  `,container:e`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
  `,hint:e`
    margin-block-start: 24px;
    font-size: ${x.fontSize};
    color: ${x.colorTextQuaternary};
  `,icon:e`
    position: absolute;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
    border-radius: ${x.borderRadius};
  `,icon1:e`
    inset-block-start: 15px;
    inset-inline-start: 100px;
    color: ${x.geekblue};
    background: ${x.geekblue1};
  `,icon2:e`
    inset-block-start: 143px;
    inset-inline-start: 174px;
    color: ${x.colorSuccess};
    background: ${x.colorSuccessBg};
  `,icon3:e`
    inset-block-start: 143px;
    inset-inline-start: 26px;
    color: ${x.purple};
    background: ${x.purple1};
  `,orbit:e`
    position: absolute;
    inset: 0;

    margin: auto;
    border: 1px dashed ${x.colorBorderSecondary};
    border-radius: 999px;
  `,orbit1:e`
    width: 200px;
    height: 200px;
  `,orbit2:e`
    width: 140px;
    height: 140px;
  `,orbit3:e`
    width: 80px;
    height: 80px;
  `,orbitGroup:e`
    position: relative;
    width: 200px;
    height: 200px;

    @keyframes orbit-spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: orbit-spin 20s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `,spinner:e`
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: spin 1.5s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})),Yt=(0,Jt.memo)(()=>{let{t:e}=a(`eval`);return(0,J.jsxs)(`div`,{className:Y.container,children:[(0,J.jsxs)(`div`,{className:Y.orbitGroup,children:[(0,J.jsx)(`div`,{className:S(Y.orbit,Y.orbit1)}),(0,J.jsx)(`div`,{className:S(Y.orbit,Y.orbit2)}),(0,J.jsx)(`div`,{className:S(Y.orbit,Y.orbit3)}),(0,J.jsx)(`div`,{className:S(Y.icon,Y.icon1),children:(0,J.jsx)(d,{icon:he,size:16})}),(0,J.jsx)(`div`,{className:S(Y.icon,Y.icon2),children:(0,J.jsx)(d,{icon:de,size:16})}),(0,J.jsx)(`div`,{className:S(Y.icon,Y.icon3),children:(0,J.jsx)(d,{icon:_e,size:16})}),(0,J.jsx)(`div`,{className:Y.center,children:(0,J.jsx)(d,{className:Y.spinner,icon:le,size:18})})]}),(0,J.jsx)(`div`,{className:Y.hint,children:e(`run.running.hint`)})]})})})),Zt,X,Z,Qt,$t=e((()=>{Ie(),A(),k(),E(),O(),Zt=t(l()),i(),rt(),X=t(s()),Z=y(({css:e})=>({card:e`
    padding: 16px;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: ${x.borderRadius};
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  `,hero:e`
    padding: 20px;
    border-radius: ${x.borderRadiusLG};
    background: ${x.colorFillQuaternary};
  `,heroValue:e`
    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeHeading1};
    font-weight: 600;
    line-height: 1;
    color: ${x.colorText};
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: ${x.borderRadius};
  `,label:e`
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};
  `,progressFill:e`
    height: 100%;
    border-radius: 999px;
    background: ${x.colorSuccess};
    transition: width 0.3s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,progressTrack:e`
    overflow: hidden;

    width: 100%;
    height: 8px;
    border-radius: 999px;

    background: ${x.colorFillSecondary};
  `,subtitle:e`
    font-size: ${x.fontSize};
    color: ${x.colorTextSecondary};
  `,subtitleUnit:e`
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextTertiary};
  `,value:e`
    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeHeading3};
    font-weight: 600;
    color: ${x.colorText};
  `})),Qt=(0,Zt.memo)(({metrics:e})=>{let{t}=a(`eval`),n=e?.passedCases??0,r=e?.totalCases??0,i=e?.passRate!==void 0,o=i?Math.round((e?.passRate??0)*100):0,s=[{bgColor:x.colorWarningBg,color:x.colorWarning,icon:ae,label:t(`run.metrics.duration`),subtitle:e?.totalDuration!==void 0&&r>0?(0,X.jsxs)(X.Fragment,{children:[`~`,it(e.totalDuration/r),` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`run.metrics.perCase`)})]}):void 0,value:e?.duration===void 0?`-`:it(e.duration)},{bgColor:x.colorPrimaryBg,color:x.colorPrimary,icon:oe,label:t(`run.metrics.cost`),subtitle:e?.perCaseCost===void 0?void 0:(0,X.jsxs)(X.Fragment,{children:[`~$`,Re(e.perCaseCost),` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`run.metrics.perCase`)})]}),value:e?.totalCost===void 0?`-`:`$${Re(e.totalCost)}`},{bgColor:x.colorInfoBg,color:x.colorInfo,icon:be,label:t(`run.metrics.tokens`),subtitle:e?.perCaseTokens===void 0?void 0:(0,X.jsxs)(X.Fragment,{children:[`~`,Le(Math.round(e.perCaseTokens)),` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`run.metrics.perCase`)})]}),value:e?.totalTokens===void 0?`-`:Le(e.totalTokens)}];return(0,X.jsxs)(f,{gap:16,children:[(0,X.jsxs)(f,{className:Z.hero,gap:16,children:[(0,X.jsxs)(f,{horizontal:!0,align:`flex-end`,gap:16,justify:`space-between`,children:[(0,X.jsxs)(f,{gap:6,children:[(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(`div`,{className:Z.iconBox,style:{background:x.colorSuccessBg},children:(0,X.jsx)(d,{icon:fe,size:16,style:{color:x.colorSuccess}})}),(0,X.jsx)(`span`,{className:Z.label,children:t(`run.metrics.passRate`)})]}),(0,X.jsx)(`span`,{className:Z.heroValue,children:i?`${o}%`:`-`})]}),r>0&&(0,X.jsxs)(Oe,{className:Z.subtitle,children:[n,`/`,r,` `,(0,X.jsx)(`span`,{className:Z.subtitleUnit,children:t(`table.filter.passed`)})]})]}),i&&r>0&&(0,X.jsx)(`div`,{className:Z.progressTrack,children:(0,X.jsx)(`div`,{className:Z.progressFill,style:{width:`${o}%`}})})]}),(0,X.jsx)(`div`,{className:Z.grid,children:s.map(e=>(0,X.jsxs)(f,{horizontal:!0,align:`center`,className:Z.card,gap:12,children:[(0,X.jsx)(`div`,{className:Z.iconBox,style:{background:e.bgColor},children:(0,X.jsx)(d,{icon:e.icon,size:16,style:{color:e.color}})}),(0,X.jsxs)(f,{gap:2,children:[(0,X.jsx)(`span`,{className:Z.label,children:e.label}),(0,X.jsx)(`span`,{className:Z.value,children:e.value}),e.subtitle&&(0,X.jsx)(`span`,{className:Z.subtitle,children:e.subtitle})]})]},e.label))})]})})})),en,Q,tn,$,nn;e((()=>{A(),k(),b(),E(),O(),en=t(l()),i(),h(),qe(),Qe(),gt(),Ot(),Rt(),Vt(),Wt(),yt(),qt(),Xt(),$t(),Q=t(s()),tn=3e3,$=y(({css:e})=>({panel:e`
    overflow: hidden;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: ${x.borderRadiusLG};
    background: ${x.colorBgContainer};
  `,panelBody:e`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  `,panelHeader:e`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 20px;
    border-block-end: 1px solid ${x.colorBorderSecondary};
  `,panelLabel:e`
    font-size: ${x.fontSizeSM};
    font-weight: 500;
    color: ${x.colorTextSecondary};
  `,stateBody:e`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 430px;
    padding: 20px;
  `})),nn=(0,en.memo)(()=>{let{t:e}=a(`eval`),{benchmarkId:t,runId:n}=g(),r=j(e=>e.useFetchRunDetail),i=j(e=>e.useFetchRunResults),o=j(e=>e.retryRunErrors),s=j(e=>e.retryRunCase),c=j(e=>e.resumeRunCase),l=j(e=>e.batchResumeRunCases),u=j(Ze.getRunDetailById(n)),d=j(Ze.getRunResultsById(n)),p=j(Ze.isRunActive(n)),[h,_]=(0,en.useState)(!1),ee={refreshInterval:p?tn:0},{error:v,isLoading:y,mutate:b}=r(n,ee);i(n,ee);let x=!!d?.results?.length,S=u?.status===`completed`||u?.status===`failed`||u?.status===`aborted`,C=u?.metrics,w=C?.completedCases??0,ne=C?.totalCases??0,T=ne>0?Math.round(w/ne*100):0,E=ne>0&&T<100,D=(C?.errorCases??0)+(C?.timeoutCases??0),ae=S&&D>0,oe=u?.config?.k??1,se=(d?.results??[]).some(e=>!!vt(e,oe));return(0,Q.jsx)(Je,{data:u,error:v,errorVariant:`page`,isEmpty:!u,isLoading:y,onRetry:()=>b(),children:u&&(0,Q.jsxs)(f,{gap:24,padding:24,style:{margin:`0 auto`,maxWidth:1440,width:`100%`},children:[(0,Q.jsx)(Kt,{benchmarkId:t,hideStart:u.status===`idle`,run:u}),S?(0,Q.jsxs)(`section`,{className:$.panel,children:[(0,Q.jsx)(`header`,{className:$.panelHeader,children:(0,Q.jsx)(`span`,{className:$.panelLabel,children:e(`run.detail.report`)})}),(0,Q.jsxs)(`div`,{className:$.panelBody,children:[(0,Q.jsx)(Qt,{metrics:u.metrics??void 0}),x&&(0,Q.jsx)(Lt,{benchmarkId:t,results:d.results,runId:n})]})]}):(0,Q.jsxs)(`section`,{className:$.panel,children:[(0,Q.jsx)(`header`,{className:$.panelHeader,children:(0,Q.jsx)(`span`,{className:$.panelLabel,children:e(`run.detail.report`)})}),(0,Q.jsx)(`div`,{className:$.stateBody,children:u.status===`running`?(0,Q.jsx)(Yt,{}):u.status===`pending`?(0,Q.jsx)(Ut,{hint:e(`run.pending.hint`)}):u.status===`external`?(0,Q.jsx)(Ut,{hint:e(`run.external.hint`)}):(0,Q.jsx)(Bt,{run:u})})]}),x&&(0,Q.jsxs)(`section`,{className:$.panel,children:[(0,Q.jsxs)(`header`,{className:$.panelHeader,children:[(0,Q.jsx)(`span`,{className:$.panelLabel,children:e(`run.detail.caseResults`)}),(E||ae||se)&&(0,Q.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[E&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(Oe,{fontSize:12,style:{whiteSpace:`nowrap`},type:`secondary`,children:[w,`/`,ne,` `,e(`run.detail.progressCases`)]}),(0,Q.jsx)(te,{percent:T,showInfo:!1,size:`small`,status:p?`active`:void 0,style:{margin:0,width:120}}),(0,Q.jsxs)(Oe,{fontSize:12,type:`secondary`,children:[T,`%`]})]}),se&&(0,Q.jsx)(m,{icon:(0,Q.jsx)(re,{size:14}),size:`small`,onClick:()=>ht({onConfirm:e=>l(n,e),runId:n}),children:e(`run.actions.batchResume`)}),ae&&(0,Q.jsx)(m,{icon:(0,Q.jsx)(ie,{size:14}),loading:h,size:`small`,onClick:()=>{Ce({content:e(`run.actions.retryErrors.confirm`),onOk:async()=>{_(!0);try{await o(n)}finally{_(!1)}},title:e(`run.actions.retryErrors`)})},children:e(`run.actions.retryErrors`)})]})]}),(0,Q.jsx)(Dt,{benchmarkId:t,k:oe,results:d.results,runId:n,runStatus:u.status,onResumeCase:(e,t)=>c(n,e,t),onRetryCase:e=>s(n,e)})]})]})})})}))();export{nn as default};