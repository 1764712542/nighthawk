import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as a,Va as o,cs as s,ls as c}from"./app-const-Bl9rlHwj.js";import{B as l,Cr as u,Hr as d,Qr as f,St as p,U as m,bt as h,mr as g}from"./dialog-BebLzVzY.js";import{a as _,o as v}from"../vendor/vendor-react-CBcx1o7d.js";import{a as y,c as b,t as x}from"./es-CVJR_g25.js";import{Is as ee,Jh as S,Ka as te,Kv as ne,eg as re,wp as ie,x as ae}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as C,i as w,t as T}from"./base-ui-BAv0gRbN.js";import{Ta as oe,Ut as E,k as se,qr as ce,t as D}from"./es-LELdnrjB.js";import{n as O,t as k}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{l as le,m as ue,o as A,r as j,s as M,t as N,u as P}from"./hooks-BrLJBsSV.js";import{n as F,t as I}from"./expertise-LxfGCVp1.js";var L,R,z,B,V,de=e((()=>{D(),T(),x(),L=t(c()),r(),_(),k(),P(),N(),R=t(s()),z=y(({css:e})=>({root:e`
    /*
     * A row near the fold leaves less room below it than the card wants. base-ui publishes the
     * space it actually has as --available-height; without this the card runs past the viewport
     * and its evidence and click hint become unreachable.
     */
    overflow-y: auto;
    width: 380px;
    max-width: min(380px, calc(100vw - 32px));

    /* less the popup's own chrome, which sits outside this element */

    /*
     * The card is anchored above the row, and this stack never flips a popup to the opposite
     * side — an explicit collisionAvoidance side:'flip' was measured to do nothing. So for a row
     * high on the page the card has to fit in the space above it or its tail becomes unreachable.
     */
    max-height: calc(var(--available-height, 100dvh) - 16px);
  `,section:e`
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 12px;
    align-items: baseline;
  `,separator:e`
    flex: none;
    height: 1px;
    background: ${b.colorBorderSecondary};
  `,retry:e`
    cursor: pointer;
    align-self: flex-start;
    border: 0;
    background: none;
  `,open:e`
    flex: none;
    font-size: 12px;
    color: ${b.colorTextSecondary};
    white-space: nowrap;

    &:hover {
      color: ${b.colorText};
    }
  `,title:e`
    text-wrap: balance;
  `})),B=2,V=(0,L.memo)(({code:e,layer:t,lessonId:n,lessonPath:r,title:a})=>{let{t:o}=i(`selfLearning`),s=O(),{data:c,error:l,isLoading:u,mutate:d}=j(n),p=ue(c?.lesson.sections),m=c?.hits.slice(0,B)??[];return(0,R.jsxs)(f,{className:z.root,gap:10,padding:4,children:[(0,R.jsxs)(f,{gap:6,children:[(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,R.jsx)(w,{fontSize:12,type:`secondary`,weight:600,children:o(`rules.detail.eyebrow`,{code:e})}),(0,R.jsx)(v,{className:z.open,to:r,onClick:e=>{e.preventDefault(),s(r)},children:o(`preview.open`)})]}),(0,R.jsx)(w,{className:z.title,fontSize:15,lineHeight:1.45,weight:600,children:a}),(0,R.jsxs)(f,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,R.jsx)(w,{fontSize:12,type:`secondary`,children:c?o(`rules.detail.meta`,{hits:c.lesson.hitCount,runs:c.lesson.hitRunCount}):o(l?`preview.failed`:`preview.loading`)}),t&&(0,R.jsx)(C,{size:`small`,children:t})]})]}),u&&!c&&(0,R.jsx)(E,{rows:3}),!!l&&!c&&(0,R.jsx)(w,{as:`button`,className:z.retry,fontSize:12,type:`info`,onClick:()=>void d(),children:o(`rules.detail.retry`)}),p.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:z.separator}),(0,R.jsx)(f,{gap:8,children:p.map(({label:e,...t})=>(0,R.jsxs)(`div`,{className:z.section,children:[(0,R.jsx)(w,{fontSize:12,type:`secondary`,weight:600,children:e?o(e):t.key}),(0,R.jsx)(w,{fontSize:12.5,lineClamp:3,lineHeight:1.6,children:t.body})]},t.key))})]}),m.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`div`,{className:z.separator}),(0,R.jsxs)(f,{gap:6,children:[(0,R.jsx)(w,{fontSize:12,type:`secondary`,weight:600,children:o(`rules.detail.examples`)}),m.map((e,t)=>(0,R.jsxs)(f,{horizontal:!0,align:`flex-start`,gap:8,children:[(0,R.jsx)(w,{fontSize:12,style:{flex:`none`},type:e.outcome===`pass`?`secondary`:`warning`,children:o(`rules.detail.outcome.${e.outcome}`)}),(0,R.jsx)(w,{fontSize:12,lineClamp:2,type:`secondary`,children:e.example})]},`${e.createdAt}-${t}`)),c&&c.hits.length>B&&(0,R.jsx)(w,{fontSize:12,type:`secondary`,children:o(`preview.moreEvidence`,{count:c.hits.length-B})})]})]})]})}),V.displayName=`ExpertiseLessonPreview`})),H,U=e((()=>{x(),H=y(({css:e})=>({accent:e`
    color: ${b.colorWarning} !important;
  `,bar:e`
    overflow: hidden;
    display: flex;

    width: 100%;
    height: 5px;
    border-radius: 3px;

    background: ${b.colorFillSecondary};
  `,profileCounts:e`
    min-width: 0;
    text-align: end;
    white-space: nowrap;
  `,profileKey:e`
    flex: none;
    width: 32px;
    font-family: ${b.fontFamilyCode};
    white-space: nowrap;
  `,profileProgress:e`
    width: 100%;
    min-width: 120px;
  `,profileRow:e`
    display: grid;
    grid-template-columns: minmax(220px, 1.15fr) minmax(180px, 1fr) 84px minmax(220px, auto);
    gap: 20px;
    align-items: center;

    padding-block: 14px;
    padding-inline: 18px;
    border-block-start: 1px solid ${b.colorBorderSecondary};

    @media (width <= 1100px) {
      grid-template-columns: minmax(200px, 1fr) minmax(140px, 1fr) 84px;

      & > :last-child {
        grid-column: 2 / -1;
        text-align: start;
      }
    }
  `,profileTitle:e`
    padding-block: 14px 10px;
    padding-inline: 18px;
    font-size: 12px;
  `,dot:e`
    display: inline-block;

    box-sizing: border-box;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  `,dotBad:e`
    background: ${b.colorWarning};
  `,dotNone:e`
    border: 1px solid ${b.colorBorder};
    background: transparent;
  `,dotOk:e`
    background: ${b.colorTextQuaternary};
  `,groupHead:e`
    padding-block: 8px;
    padding-inline: 14px;
    border: 0;
    border-block-end: 1px solid ${b.colorBorderSecondary};

    font: inherit;

    background: ${b.colorFillQuaternary};
  `,previewTarget:e`
    cursor: pointer;
    text-align: start;

    &:focus-visible {
      border-radius: 4px;
      outline: 2px solid ${b.colorPrimaryBorder};
      outline-offset: 2px;
    }
  `,viewAll:e`
    font-size: 12.5px;
    color: ${b.colorTextSecondary};
    white-space: nowrap;

    &:hover {
      color: ${b.colorText};
    }
  `,row:e`
    padding-block: 10px;
    padding-inline: 14px;
    border: 0;
    border-block-end: 1px solid ${b.colorBorderSecondary};

    font: inherit;

    &:last-child {
      border-block-end: none;
    }

    .teach {
      opacity: 0;
      transition: opacity 0.15s;
    }

    &:hover,
    &:focus-within {
      background: ${b.colorFillQuaternary};

      .teach {
        opacity: 1;
      }
    }
  `,segBad:e`
    background: ${b.colorWarning};
  `,segOk:e`
    background: ${b.colorTextQuaternary};
  `,segShaky:e`
    opacity: 0.55;
    background: ${b.colorWarning};
  `,sentence:e`
    font-size: 22px;
    font-weight: 700;
    line-height: 1.4;
    text-wrap: balance;
  `}))})),W,G,K,q=e((()=>{D(),T(),W=t(c()),r(),G=t(s()),K=(0,W.memo)(({autoFocus:e,onSubmit:t,placeholder:n})=>{let{t:r}=i(`selfLearning`),[a,o]=(0,W.useState)(``),[s,c]=(0,W.useState)(!1),l=async()=>{let e=a.trim();if(!(!e||s)){c(!0);try{await t(e),o(``)}finally{c(!1)}}};return(0,G.jsxs)(f,{horizontal:!0,align:`flex-end`,gap:8,width:`100%`,children:[(0,G.jsx)(ce,{autoFocus:e,autoSize:{maxRows:4,minRows:1},disabled:s,placeholder:n,style:{flex:1},value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{(e.metaKey||e.ctrlKey)&&e.key===`Enter`&&l()}}),(0,G.jsx)(g,{disabled:!a.trim(),loading:s,type:`primary`,onClick:l,children:r(`habit.teach.send`)})]})}),K.displayName=`ExpertiseTeachBox`})),J,Y,X,Z,Q,$,fe=e((()=>{D(),T(),J=t(n()),ae(),Y=t(c()),r(),_(),o(),k(),F(),P(),de(),U(),q(),X=t(s()),Z=(0,Y.memo)(({recent:e})=>{let{t}=i(`selfLearning`);return(0,X.jsx)(u,{title:e.length===0?t(`habit.recentTip.none`):t(`habit.recentTip.title`,{count:e.length,list:e.map(e=>e.pass?t(`habit.recentTip.pass`):t(`habit.recentTip.violation`)).join(` `)}),children:(0,X.jsx)(f,{horizontal:!0,gap:3,style:{flex:`none`},children:e.length===0?[0,1,2].map(e=>(0,X.jsx)(`span`,{className:`${H.dot} ${H.dotNone}`},e)):e.map((e,t)=>(0,X.jsx)(`span`,{className:`${H.dot} ${e.pass?H.dotOk:H.dotBad}`},t))})})}),Z.displayName=`ExpertiseRecentDots`,Q=(0,Y.memo)(({agentId:e,domainTitle:t,habit:n,onChanged:r,tier:o})=>{let{t:s}=i(`selfLearning`),c=O(),[u,_]=(0,Y.useState)(!1),v=(0,Y.useMemo)(()=>{if(n.taughtByUser&&n.recent.length===0)return s(`habit.hint.taughtPending`);let e=n.recent.filter(e=>!e.pass),t=[...e].reverse()[0]?.subjectTitle??void 0;switch(o){case`recurring`:return t?s(`habit.hint.recurring`,{bad:e.length,topic:t,total:n.recent.length}):s(`habit.hint.recurringNoTopic`,{bad:e.length,total:n.recent.length});case`shaky`:return t?s(`habit.hint.shaky`,{topic:t,total:n.recent.length}):s(`habit.hint.shakyNoTopic`,{total:n.recent.length});case`fresh`:return n.recent.length===0?s(`habit.hint.freshNone`):s(`habit.hint.freshOne`);default:return s(`habit.hint.stable`,{count:n.hitCount})}},[n,s,o]),y=async e=>{try{await I.reviseLesson({lessonId:n.id,text:e}),l.success(s(`habit.teach.done`)),_(!1),r()}catch{l.error(s(`habit.teach.failed`))}},b=async()=>{try{await I.retireLesson(n.id),l.success(s(`habit.teach.forgot`)),r()}catch{l.error(s(`habit.teach.failed`))}},x=a(`/agent`,e,`self-evolving`,n.domainId,`experience`,n.id),S=[{icon:(0,X.jsx)(d,{icon:te}),key:`correct`,label:s(`habit.action.correct`),onClick:()=>_(!0)},{icon:(0,X.jsx)(d,{icon:ee}),key:`source`,label:s(`habit.action.source`),onClick:()=>c(x)},{type:`divider`},{danger:!0,icon:(0,X.jsx)(d,{icon:ne}),key:`forget`,label:s(`habit.action.forget`),onClick:b}];return(0,X.jsxs)(f,{className:H.row,gap:6,children:[(0,X.jsxs)(f,{horizontal:!0,align:`flex-start`,gap:12,children:[(0,X.jsx)(w,{code:!0,fontSize:12,style:{flex:`none`,marginTop:2},type:`secondary`,children:n.code}),(0,X.jsx)(m,{openDelay:420,placement:`topRight`,positionerProps:{collisionPadding:12},trigger:`hover`,content:(0,X.jsx)(V,{code:n.code,layer:n.layer,lessonId:n.id,lessonPath:x,title:n.title}),children:(0,X.jsxs)(f,{className:H.previewTarget,gap:2,style:{flex:1,minWidth:0},onClick:()=>c(x),onKeyDown:e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),c(x))},children:[(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,X.jsx)(w,{fontSize:13.5,weight:500,children:n.title}),n.taughtByUser&&(0,X.jsxs)(C,{children:[s(`habit.taughtTag`),` · `,(0,J.default)(n.createdAt).fromNow()]}),t&&(0,X.jsx)(C,{children:t})]}),(0,X.jsx)(w,{fontSize:12,type:`secondary`,children:v})]})}),(0,X.jsx)(Z,{recent:n.recent}),(0,X.jsxs)(f,{horizontal:!0,align:`center`,className:`teach`,gap:4,style:{flex:`none`},children:[(o===`recurring`||o===`shaky`)&&(0,X.jsx)(g,{size:`small`,type:o===`recurring`?`primary`:`default`,onClick:()=>_(e=>!e),children:s(`habit.action.teachAgain`)}),(0,X.jsx)(p,{items:S,children:(0,X.jsx)(h,{icon:ie,size:`small`})})]})]}),u&&(0,X.jsx)(f,{style:{paddingInlineStart:48},children:(0,X.jsx)(K,{autoFocus:!0,placeholder:s(o===`recurring`?`habit.teach.placeholderRecurring`:`habit.teach.placeholderCorrect`),onSubmit:y})})]})}),Q.displayName=`ExpertiseHabitRow`,$=(0,Y.memo)(({agentId:e,defaultStableOpen:t=!1,domainTitles:n,habits:r,onChanged:a,viewAllPath:o})=>{let{t:s}=i(`selfLearning`),[c,l]=(0,Y.useState)(``),[u,p]=(0,Y.useState)(t),m=(0,Y.useMemo)(()=>M(r),[r]),h=(0,Y.useMemo)(()=>{let e={fresh:[],recurring:[],shaky:[],stable:[]},t=c.trim().toLowerCase();for(let n of r)t&&!n.title.toLowerCase().includes(t)&&!n.code.toLowerCase().includes(t)||e[le(n.recent)].push(n);return e},[r,c]),g=u||!!c.trim();return(0,X.jsxs)(f,{gap:10,children:[(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,wrap:`wrap`,children:[(0,X.jsxs)(f,{horizontal:!0,align:`baseline`,gap:8,children:[(0,X.jsx)(w,{weight:600,children:s(`habits.title`)}),(0,X.jsx)(w,{fontSize:12,type:`secondary`,children:s(`habits.summary`,m)})]}),(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[o&&(0,X.jsx)(v,{className:H.viewAll,to:o,children:s(`habits.viewAll`,{count:r.length})}),(0,X.jsx)(se,{placeholder:s(`habits.search`),style:{width:200},value:c,variant:`filled`,onChange:e=>l(e.target.value)})]})]}),(0,X.jsxs)(oe,{padding:0,variant:`outlined`,children:[A.filter(e=>e!==`stable`).map(t=>{let r=h[t];return r.length===0?null:(0,X.jsxs)(Y.Fragment,{children:[(0,X.jsxs)(f,{horizontal:!0,align:`center`,className:H.groupHead,gap:8,children:[(0,X.jsxs)(w,{className:t===`recurring`?H.accent:void 0,fontSize:12.5,weight:600,children:[s(`tier.${t}`),` `,r.length]}),(0,X.jsx)(w,{fontSize:12,type:`secondary`,children:s(`tier.${t}Sub`)})]}),r.map(r=>(0,X.jsx)(Q,{agentId:e,domainTitle:n?.[r.domainId],habit:r,tier:t,onChanged:a},r.id))]},t)}),(0,X.jsxs)(f,{horizontal:!0,align:`center`,as:`button`,className:H.groupHead,gap:8,justify:`space-between`,style:{background:void 0,color:`inherit`,cursor:`pointer`,width:`100%`},onClick:()=>p(e=>!e),children:[(0,X.jsxs)(f,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsxs)(w,{fontSize:12.5,weight:600,children:[s(`tier.stable`),` `,h.stable.length]}),(0,X.jsx)(w,{fontSize:12,type:`secondary`,children:s(`tier.stableSub`)})]}),(0,X.jsx)(d,{icon:g?S:re,size:14})]}),g&&h.stable.map(t=>(0,X.jsx)(Q,{agentId:e,domainTitle:n?.[t.domainId],habit:t,tier:`stable`,onChanged:a},t.id))]})]})}),$.displayName=`ExpertiseHabitList`}));export{U as a,q as i,fe as n,H as o,K as r,$ as t};