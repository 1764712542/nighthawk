import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as a,Va as o,cs as s,ls as c}from"./app-const-Bl9rlHwj.js";import{B as l,Hr as u,Qr as d,St as f,Xr as ee,bt as te,mr as p}from"./dialog-BebLzVzY.js";import{a as ne,o as re,y as ie}from"../vendor/vendor-react-CBcx1o7d.js";import{a as m,c as h,d as g,t as _}from"./es-CVJR_g25.js";import{Ph as ae,Qm as oe,Rp as se,Rt as ce,Wi as le,Xh as v,ey as y,wa as ue,wp as de,x as b}from"../vendor/vendor-icons-C-Y4oLkk.js";import{P as fe,i as x,t as S}from"./base-ui-BAv0gRbN.js";import{Or as pe,Ra as C,Ta as w,_a as T,t as E}from"./es-LELdnrjB.js";import{C as me,E as he}from"./serverConfig-CmLVLry1.js";import{Q as D,Qo as ge,X as _e,Y as ve,Z as ye,Zo as be}from"./index-Djd-5Nq9.js";import{n as xe,t as O}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as k,t as Se}from"./AsyncBoundary-CzRTtM14.js";import{n as Ce,t as we}from"./AgentBreadcrumb-EU8wI3cb.js";import{_ as Te,a as Ee,c as De,d as Oe,g as ke,h as Ae,i as je,l as Me,p as Ne,s as A,t as Pe,u as j}from"./hooks-BrLJBsSV.js";import{n as Fe,t as Ie}from"./expertise-LxfGCVp1.js";import{a as M,i as Le,n as Re,o as N,r as ze,t as Be}from"./HabitList-DseEOKBy.js";var Ve,P,F,He,Ue=e((()=>{E(),S(),_(),b(),Ve=t(c()),r(),P=t(s()),F=m(({css:e})=>({anchorCard:e`
    overflow: hidden;
  `,anchorContent:e`
    padding-block: 8px 16px;
    padding-inline: 16px;
  `,anchorHeader:e`
    &:hover {
      background: transparent;
    }
  `,canonCard:e`
    display: flex;
    flex-direction: column;
    gap: 6px;

    min-width: 0;
    padding-block: 12px;
    padding-inline: 14px;
    border-radius: ${h.borderRadiusLG};

    background: ${h.colorFillQuaternary};
  `,definition:e`
    display: grid;
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 10px 24px;
    align-items: baseline;
  `,definitionLabel:e`
    display: inline-flex;
    gap: 6px;
    align-items: center;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;
  `,layerCell:e`
    display: flex;
    flex-direction: column;
    gap: 4px;

    min-width: 0;
    padding-inline-start: 12px;
    border-inline-start: 2px solid ${h.colorBorderSecondary};
  `,layerIndex:e`
    font-family: ${h.fontFamilyCode};
    font-size: 11px;
    color: ${h.colorTextQuaternary};
    letter-spacing: 0.04em;
  `,sectionLabel:e`
    font-size: 12px;
    font-weight: 600;
    color: ${h.colorTextSecondary};
    letter-spacing: 0.02em;
  `})),He=(0,Ve.memo)(({domain:e})=>{let{t}=i(`selfLearning`),n=e.layerSource===`canonical`&&e.layerCanonRef?e.layerCanonRef:void 0,r=e.domainFilter.trim(),a=e.outOfScope?.trim(),o=(0,P.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,P.jsx)(u,{color:h.colorTextTertiary,icon:y,size:15}),(0,P.jsx)(x,{weight:600,children:t(`anchor.title`)}),(0,P.jsx)(x,{fontSize:12,type:`secondary`,children:t(`anchor.subtitle`)})]});return(0,P.jsx)(w,{className:F.anchorCard,variant:`outlined`,children:(0,P.jsx)(C,{defaultExpandedKeys:[`anchor`],indicatorPlacement:`end`,variant:`borderless`,children:(0,P.jsx)(T,{classNames:{header:F.anchorHeader},itemKey:`anchor`,paddingBlock:12,paddingInline:16,title:o,children:(0,P.jsxs)(d,{className:F.anchorContent,gap:24,children:[(r||a)&&(0,P.jsxs)(`div`,{className:F.definition,children:[r&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(x,{className:F.definitionLabel,fontSize:12.5,type:`secondary`,children:[(0,P.jsx)(u,{color:h.colorSuccess,icon:ae,size:13}),t(`anchor.filter`)]}),(0,P.jsx)(x,{fontSize:13,lineHeight:1.7,children:r})]}),a&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(x,{className:F.definitionLabel,fontSize:12.5,type:`secondary`,children:[(0,P.jsx)(u,{color:h.colorTextTertiary,icon:oe,size:13}),t(`anchor.outOfScope`)]}),(0,P.jsx)(x,{fontSize:13,lineHeight:1.7,type:`secondary`,children:a})]})]}),(0,P.jsxs)(d,{gap:10,children:[(0,P.jsxs)(d,{horizontal:!0,align:`baseline`,gap:8,children:[(0,P.jsx)(`span`,{className:F.sectionLabel,children:t(`create.anchor.canon`)}),(0,P.jsx)(x,{fontSize:12,type:`secondary`,children:e.canonEntries.length>0?t(`create.anchor.canonHint`):t(`anchor.noCanon`)})]}),e.canonEntries.length>0&&(0,P.jsx)(`div`,{className:F.grid,children:e.canonEntries.map(e=>(0,P.jsxs)(`div`,{className:F.canonCard,children:[(0,P.jsx)(x,{fontSize:13.5,weight:600,children:e.title}),(0,P.jsx)(x,{fontSize:12.5,lineHeight:1.65,type:`secondary`,children:e.statement}),(0,P.jsxs)(x,{ellipsis:!0,fontSize:11.5,style:{opacity:.75},type:`secondary`,children:[`— `,e.source]})]},e.key))})]}),(0,P.jsxs)(d,{gap:10,children:[(0,P.jsxs)(d,{horizontal:!0,align:`baseline`,gap:8,children:[(0,P.jsx)(`span`,{className:F.sectionLabel,children:t(`create.anchor.layers`)}),(0,P.jsx)(x,{fontSize:12,type:`secondary`,children:e.layers.length===0?t(`anchor.noLayers`):n?t(`create.anchor.layersFrom`,{ref:n}):t(`create.anchor.layersInvented`)})]}),e.layers.length>0&&(0,P.jsx)(`div`,{className:F.grid,children:e.layers.map((e,t)=>(0,P.jsxs)(`div`,{className:F.layerCell,children:[(0,P.jsxs)(`span`,{className:F.layerIndex,children:[`L`,t+1]}),(0,P.jsx)(x,{fontSize:13.5,weight:600,children:e.title}),e.description&&(0,P.jsx)(x,{fontSize:12.5,lineHeight:1.6,type:`secondary`,children:e.description})]},e.key))})]})]})})})})}),He.displayName=`ExpertiseAnchorCard`})),We,Ge,I,Ke=e((()=>{We=t(c()),M(),Ge=t(s()),I=(0,We.memo)(({counts:e,total:t})=>{let n=t||1,r=(e,t,r)=>e>0?(0,Ge.jsx)(`div`,{className:t,style:{width:`${e/n*100}%`}},r):null;return(0,Ge.jsxs)(`div`,{className:N.bar,children:[r(e.stable,N.segOk,`stable`),r(e.shaky,N.segShaky,`shaky`),r(e.recurring,N.segBad,`recurring`)]})}),I.displayName=`ExpertiseTierBar`})),qe,L,Je,Ye=e((()=>{E(),S(),b(),qe=t(c()),r(),j(),M(),Ke(),L=t(s()),Je=(0,qe.memo)(({domains:e,onOpen:t})=>{let{t:n}=i(`selfLearning`);return(0,L.jsxs)(d,{gap:8,children:[(0,L.jsxs)(x,{fontSize:12,type:`secondary`,children:[n(`domains.title`),` `,e.length]}),(0,L.jsx)(w,{padding:0,variant:`outlined`,children:e.map(e=>{let r=A(e.lessons),i=r.recurring?n(`domains.word.recurring`,{count:r.recurring}):r.shaky?n(`domains.word.shaky`,{count:r.shaky}):e.lessons.length<=3?n(`domains.word.fresh`):n(`domains.word.stable`);return(0,L.jsxs)(d,{horizontal:!0,align:`center`,as:`button`,className:N.row,gap:12,style:{background:`transparent`,color:`inherit`,textAlign:`start`,width:`100%`},onClick:()=>t(e.id),children:[(0,L.jsx)(x,{style:{flex:`none`,width:140},weight:500,children:e.title}),(0,L.jsx)(I,{counts:r,total:e.lessons.length}),(0,L.jsx)(x,{className:r.recurring?N.accent:void 0,fontSize:12.5,style:{flex:1},type:r.recurring?void 0:`secondary`,children:i}),(0,L.jsx)(x,{fontSize:12,type:`secondary`,children:n(`domains.meta`,{habits:e.lessons.length,runs:e.runCount})}),(0,L.jsx)(u,{icon:v,size:13,style:{flex:`none`,opacity:.4}})]},e.id)})})]})}),Je.displayName=`ExpertiseDomainList`})),Xe,R,Ze,z,B,V,H,U,Qe,$e,et=e((()=>{E(),S(),_(),Xe=t(c()),r(),j(),R=t(s()),Ze=m(({css:e})=>({chart:e`
    flex: 1;
    min-width: 0;

    .axis {
      font-size: 10px;
      fill: ${h.colorTextQuaternary};
    }

    .grid {
      stroke: ${h.colorBorderSecondary};
    }

    .line {
      fill: none;
      stroke: ${h.colorSuccess};
      stroke-width: 1.75;
    }

    .area {
      fill: ${h.colorSuccess};
      fill-opacity: 0.08;
    }

    .pt {
      fill: ${h.colorSuccess};
    }

    .ref {
      stroke: ${h.colorSuccess};
      stroke-dasharray: 3 3;
      stroke-opacity: 0.45;
    }

    .refLabel {
      font-size: 10px;
      fill: ${h.colorSuccess};
    }
  `})),z=380,B=96,V=6,H=44,U=10,Qe=16,$e=(0,Xe.memo)(({domains:e})=>{let{t}=i(`selfLearning`),{cum:n,rate:r,streak:a,runs:o}=(0,Xe.useMemo)(()=>{if(e.length===1){let t=e[0];return{cum:t.series.map(e=>({n:e.n,run:e.run})),rate:Ne(t.reliability),runs:t.runCount,streak:Te(t.reliability)}}let t=Math.max(0,...e.map(e=>e.runCount)),n=[],r=[];for(let i=1;i<=t;i++){let t=0,a=0,o=0;for(let n of e){let e=[...n.series].reverse().find(e=>e.run<=i);t+=e?.n??0;let r=n.reliability.find(e=>e.run===i);r&&(a+=r.pass,o+=r.violation)}n.push({n:t,run:i}),a+o>0&&r.push({rate:a/(a+o),run:i})}return{cum:n,rate:r,runs:t,streak:Te(Array.from({length:t},(t,n)=>{let r=0,i=0;for(let t of e){let e=t.reliability.find(e=>e.run===n+1);e&&(r+=e.pass,i+=e.violation)}return{pass:r,run:n+1,violation:i}}))}},[e]);if(n.length<2)return(0,R.jsx)(x,{fontSize:12.5,type:`secondary`,children:t(`charts.tooFew`)});let s=n.length,c=(e,t)=>V+(t===1?0:e/(t-1)*(z-V-H)),l=Math.max(1,...n.map(e=>e.n)),u=e=>U+(1-e/l)*(B-U-Qe),f=e=>U+(1-e)*(B-U-Qe),ee=ke(r),te=De(r);return(0,R.jsx)(w,{padding:`12px 14px`,variant:`outlined`,children:(0,R.jsxs)(d,{horizontal:!0,gap:24,children:[(0,R.jsxs)(d,{className:Ze.chart,gap:4,children:[(0,R.jsxs)(d,{horizontal:!0,align:`baseline`,gap:8,children:[(0,R.jsx)(x,{fontSize:12,type:`secondary`,children:t(`charts.learned`)}),(0,R.jsx)(x,{fontSize:18,weight:700,children:t(`charts.count`,{count:n.at(-1).n})}),(0,R.jsx)(x,{fontSize:12,type:`secondary`,children:t(`charts.learnedSub`,{runs:o})})]}),(0,R.jsxs)(`svg`,{height:B,viewBox:`0 0 ${z} ${B}`,width:`100%`,children:[[0,.5,1].map(e=>(0,R.jsxs)(`g`,{children:[(0,R.jsx)(`line`,{className:`grid`,x1:V,x2:z-H,y1:u(l*e),y2:u(l*e)}),(0,R.jsx)(`text`,{className:`axis`,x:340,y:u(l*e)+3,children:Math.round(l*e)})]},e)),(0,R.jsx)(`polygon`,{className:`area`,points:`${c(0,s)},${u(0)} ${n.map((e,t)=>`${c(t,s)},${u(e.n)}`).join(` `)} ${c(s-1,s)},${u(0)}`}),(0,R.jsx)(`polyline`,{className:`line`,points:n.map((e,t)=>`${c(t,s)},${u(e.n)}`).join(` `)}),(0,R.jsx)(`circle`,{className:`pt`,cx:c(s-1,s),cy:u(n.at(-1).n),r:2.5}),(0,R.jsx)(`text`,{className:`axis`,x:V,y:B-3,children:t(`charts.run1`)}),(0,R.jsx)(`text`,{className:`axis`,textAnchor:`end`,x:z-H,y:B-3,children:t(`charts.runN`,{n:n.at(-1).run})})]})]}),(0,R.jsxs)(d,{className:Ze.chart,gap:4,children:[(0,R.jsxs)(d,{horizontal:!0,align:`baseline`,gap:8,wrap:`wrap`,children:[(0,R.jsx)(x,{fontSize:12,type:`secondary`,children:t(`charts.passRate`)}),(0,R.jsx)(x,{fontSize:18,weight:700,children:(e=>e===null?`—`:`${Math.round(e*100)}%`)(ee)}),(0,R.jsxs)(x,{fontSize:12,type:`secondary`,children:[a>=2?t(`charts.streak`,{count:a}):t(`charts.recentAvg`,{count:Math.min(4,r.length)}),te!==null&&r.length>4?` · ${t(`charts.early`,{rate:Math.round(te*100)})}`:``]})]}),(0,R.jsxs)(`svg`,{height:B,viewBox:`0 0 ${z} ${B}`,width:`100%`,children:[[0,.5,1].map(e=>(0,R.jsxs)(`g`,{children:[(0,R.jsx)(`line`,{className:`grid`,x1:V,x2:z-H,y1:f(e),y2:f(e)}),(0,R.jsxs)(`text`,{className:`axis`,x:340,y:f(e)+3,children:[Math.round(e*100),`%`]})]},e)),(0,R.jsx)(`line`,{className:`ref`,x1:V,x2:z-H,y1:f(.9),y2:f(.9)}),(0,R.jsx)(`text`,{className:`refLabel`,x:8,y:f(.9)-3,children:t(`charts.refLine`)}),r.length>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`polygon`,{className:`area`,points:`${c(0,r.length)},${f(0)} ${r.map((e,t)=>`${c(t,r.length)},${f(e.rate)}`).join(` `)} ${c(r.length-1,r.length)},${f(0)}`}),(0,R.jsx)(`polyline`,{className:`line`,points:r.map((e,t)=>`${c(t,r.length)},${f(e.rate)}`).join(` `)}),(0,R.jsx)(`circle`,{className:`pt`,cx:c(r.length-1,r.length),cy:f(r.at(-1).rate),r:2.5})]}),(0,R.jsx)(`text`,{className:`axis`,x:V,y:B-3,children:t(`charts.run1`)}),(0,R.jsx)(`text`,{className:`axis`,textAnchor:`end`,x:z-H,y:B-3,children:t(`charts.runN`,{n:n.at(-1).run})})]})]})]})})}),$e.displayName=`ExpertiseGrowthCharts`})),tt,W,nt,rt=e((()=>{E(),S(),tt=t(c()),r(),j(),M(),Ke(),W=t(s()),nt=(0,tt.memo)(({domain:e})=>{let{t}=i(`selfLearning`);return e.layers.length===0||e.lessons.length===0?null:(0,W.jsx)(w,{padding:0,variant:`outlined`,children:(0,W.jsxs)(d,{children:[(0,W.jsx)(x,{className:N.profileTitle,type:`secondary`,children:t(`profile.title`)}),e.layers.map((n,r)=>{let i=e.lessons.filter(e=>e.layer===n.key),a=A(i),o=Ae(a,i.length),s=o===`weak`,c=[t(`profile.counts`,{count:i.length}),a.recurring?t(`profile.recurring`,{count:a.recurring}):null,a.shaky?t(`profile.shaky`,{count:a.shaky}):null,a.fresh?t(`profile.fresh`,{count:a.fresh}):null].filter(Boolean);return(0,W.jsxs)(`div`,{className:N.profileRow,children:[(0,W.jsxs)(d,{horizontal:!0,align:`center`,gap:10,style:{minWidth:0},children:[(0,W.jsx)(x,{className:N.profileKey,fontSize:12,type:`secondary`,children:Oe(r)}),(0,W.jsx)(x,{ellipsis:!0,fontSize:14,style:{minWidth:0},title:n.title,weight:600,children:n.title})]}),(0,W.jsx)(`div`,{className:N.profileProgress,children:(0,W.jsx)(I,{counts:a,total:i.length})}),(0,W.jsx)(x,{className:s?N.accent:void 0,fontSize:13,type:s?void 0:`secondary`,weight:s?600:void 0,children:t(`profile.word.${o}`)}),(0,W.jsx)(x,{className:N.profileCounts,fontSize:12.5,type:`secondary`,children:c.join(` · `)})]},n.key)})]})})}),nt.displayName=`ExpertiseLayerProfile`})),it,G,K,at,ot,st=e((()=>{E(),S(),it=t(n()),G=t(c()),r(),j(),M(),K=t(s()),at=5,ot=(0,G.memo)(({habits:e})=>{let{t}=i(`selfLearning`),[n,r]=(0,G.useState)(!1),a=(0,G.useMemo)(()=>e.filter(e=>e.taughtByUser).sort((e,t)=>new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()),[e]);if(a.length===0)return null;let o=n?a:a.slice(0,at),s=a.length-o.length;return(0,K.jsx)(w,{padding:`14px 16px`,variant:`outlined`,children:(0,K.jsxs)(d,{gap:4,children:[(0,K.jsx)(x,{fontSize:12,style:{marginBlockEnd:6},type:`secondary`,children:t(`taught.title`,{count:a.length})}),o.map(e=>{let n=Me(e.recent),r=n===`recurring`?`recurring`:n===`shaky`?`shaky`:e.recent.length>0?`used`:`pending`,i=r===`recurring`||r===`shaky`;return(0,K.jsxs)(d,{horizontal:!0,align:`center`,gap:12,style:{minHeight:30,paddingBlock:2},children:[(0,K.jsx)(x,{fontSize:12,style:{flex:`none`,width:64},type:`secondary`,children:(0,it.default)(e.createdAt).fromNow()}),(0,K.jsx)(x,{ellipsis:!0,fontSize:13,style:{flex:1},children:e.title}),(0,K.jsx)(x,{className:i?N.accent:void 0,fontSize:12.5,type:i?void 0:`secondary`,weight:i?600:void 0,children:t(`taught.arc.${r}`)})]},e.id)}),s>0&&(0,K.jsx)(d,{horizontal:!0,justify:`center`,style:{marginBlockStart:4},children:(0,K.jsx)(p,{size:`small`,type:`text`,onClick:()=>r(!0),children:t(`taught.showAll`,{count:a.length})})})]})})}),ot.displayName=`ExpertiseTaughtList`})),q,ct,lt,ut,J,dt,Y,ft,pt=e((()=>{S(),q=t(c()),r(),Fe(),ct=6e4,lt=10*6e4,ut=4e3,J=e=>`self-learning:warmup:${e}`,dt=e=>{try{let t=sessionStorage.getItem(J(e));return t?JSON.parse(t):null}catch{return null}},Y=(e,t)=>{t?sessionStorage.setItem(J(e),JSON.stringify(t)):sessionStorage.removeItem(J(e))},ft=(e,t)=>{let{t:n}=i(`selfLearning`),[r,a]=(0,q.useState)(()=>e?dt(e):null),[o,s]=(0,q.useState)(()=>r?`running`:`idle`),[c,u]=(0,q.useState)(!1);(0,q.useEffect)(()=>{if(!e)return;let t=dt(e);a(t),s(t?`running`:`idle`)},[e]),(0,q.useEffect)(()=>{if(!e||o!==`running`||!r)return;let n=Date.now(),i=r;t!==r.lastCount&&(i={...r,lastChangeAt:n,lastCount:t},a(i),Y(e,i));let c=n-i.lastChangeAt,l=n-i.startedAt;(c>ct&&l>ct/2||l>lt)&&(s(`done`),Y(e,null))},[e,t,o,r]),(0,q.useEffect)(()=>{if(o!==`running`)return;let e=setInterval(()=>a(e=>e&&{...e}),ut);return()=>clearInterval(e)},[o]);let d=(0,q.useCallback)(async()=>{if(!(!e||c)){u(!0);try{let r=await Ie.ingestHistory(e);if(r.candidateCount===0){l.info(n(`warmup.idleNone`));return}let i=Date.now(),o={baseline:t,candidateCount:r.candidateCount,lastChangeAt:i,lastCount:t,startedAt:i};Y(e,o),a(o),s(`running`)}catch{l.error(n(`warmup.failed`))}finally{u(!1)}}},[e,t,c,n]),f=(0,q.useCallback)(()=>{s(`idle`),a(null),e&&Y(e,null)},[e]);return(0,q.useMemo)(()=>({candidateCount:r?.candidateCount??0,dismiss:f,learned:r?Math.max(0,t-r.baseline):0,phase:o,refreshInterval:o===`running`?ut:void 0,start:d,starting:c}),[f,t,o,r,d,c])}})),mt,X,ht,gt,_t,vt=e((()=>{E(),S(),_(),b(),mt=t(c()),r(),X=t(s()),ht=g`
  0% { width: 0; opacity: 1; }
  80% { width: 100%; opacity: 1; }
  100% { width: 100%; opacity: 0; }
`,gt=m(({css:e})=>({track:e`
    position: relative;

    overflow: hidden;

    width: 160px;
    height: 6px;
    border-radius: 3px;

    background: ${h.colorFillSecondary};

    &::after {
      content: '';

      position: absolute;
      inset-block: 0;
      inset-inline-start: 0;

      border-radius: 3px;

      background: ${h.colorSuccess};

      animation: ${ht} 1.8s ease-in-out infinite;
    }
  `})),_t=(0,mt.memo)(({candidateCount:e,domainTitles:t,warmup:n})=>{let{t:r}=i(`selfLearning`),a=t.length>1?r(`warmup.titleMulti`,{count:t.length,names:t.join(r(`warmup.namesSep`))}):r(`warmup.title`,{name:t[0]??``});return(0,X.jsx)(w,{padding:`12px 16px`,variant:`outlined`,children:(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:16,justify:`space-between`,children:[(0,X.jsxs)(d,{gap:2,style:{minWidth:0},children:[(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:8,children:[(0,X.jsx)(u,{icon:se,size:15}),(0,X.jsx)(x,{weight:600,children:a})]}),(0,X.jsxs)(x,{fontSize:12.5,type:`secondary`,children:[n.phase===`idle`&&(e?r(`warmup.idle`,{count:e}):r(`warmup.idleNone`)),n.phase===`running`&&r(`warmup.running`,{count:n.candidateCount,learned:n.learned}),n.phase===`done`&&r(`warmup.done`,{learned:n.learned})]})]}),(0,X.jsxs)(d,{horizontal:!0,align:`center`,gap:10,style:{flex:`none`},children:[n.phase===`idle`&&!!e&&(0,X.jsx)(p,{icon:le,loading:n.starting,type:`primary`,onClick:()=>void n.start(),children:r(`warmup.start`,{count:e})}),n.phase===`running`&&(0,X.jsx)(`div`,{className:gt.track}),n.phase===`done`&&(0,X.jsx)(p,{onClick:n.dismiss,children:r(`warmup.dismiss`)})]})]})})}),_t.displayName=`ExpertiseWarmupCard`})),Z,Q,yt,$,bt=e((()=>{E(),S(),_(),b(),Z=t(c()),r(),ne(),o(),k(),ge(),Ce(),D(),_e(),O(),Fe(),me(),j(),Pe(),Ue(),Ye(),et(),Re(),rt(),M(),st(),Le(),pt(),vt(),Q=t(s()),yt=m(({css:e})=>({body:e`
    overflow-y: auto;
    display: flex;
  `})),$=(0,Z.memo)(()=>{let{t:e}=i(`selfLearning`),t=xe(),{domainId:n}=ie(),r=he(e=>e.activeAgentId),[o,s]=(0,Z.useState)(!1),[c,ne]=(0,Z.useState)(),m=je(r??void 0),h=(0,Z.useMemo)(()=>m.data?.domains.reduce((e,t)=>e+t.lessons.length,0)??0,[m.data]),g=ft(r??void 0,h),{data:_,error:ae,isLoading:oe,mutate:v}=je(r??void 0,g.refreshInterval),y=(0,Z.useMemo)(()=>_?.domains??[],[_]),b=(0,Z.useMemo)(()=>n?y.filter(e=>e.id===n):y,[y,n]),S=b.length===1,C=S?b[0]:void 0,T=(0,Z.useMemo)(()=>b.flatMap(e=>e.lessons.map(t=>({...t,domainId:e.id}))),[b]),E=b.reduce((e,t)=>e+t.runCount,0),me=(0,Z.useMemo)(()=>Object.fromEntries(y.map(e=>[e.id,e.title])),[y]),D=(0,Z.useCallback)(t=>{let n=t.title,r=t.lessons,i=A(r);if(t.runCount===0)return{headline:e(`headline.single.notPracticed`,{name:n})};let a=r.find(e=>Me(e.recent)===`recurring`);return a?{detail:e(`headline.detail.recurring`,{title:a.title.length>18?`${a.title.slice(0,17)}…`:a.title}),headline:e(`headline.single.recurring`,{name:n,runs:t.runCount})}:i.shaky>0?{detail:e(`headline.detail.shaky`,{count:i.shaky}),headline:e(`headline.single.shaky`,{name:n,runs:t.runCount})}:i.stable===0?{headline:e(`headline.single.fresh`,{count:r.length,name:n,runs:t.runCount})}:{headline:e(`headline.single.stable`,{name:n,runs:t.runCount})}},[e]),ge=(0,Z.useMemo)(()=>{if(b.length===0)return{headline:``};if(S&&C)return D(C);let t=e=>{let t=A(e.lessons);return t.recurring>0?0:t.shaky>0?1:e.runCount===0?3:2},n=[...b].sort((e,n)=>t(e)-t(n))[0];return t(n)<=1?D(n):{headline:e(`headline.multi.ok`,{domains:b.length})}},[C,b,D,S,e]),_e=[ge.detail,S?e(`headline.subline`,{habits:T.length,runs:E}):e(`headline.sublineMulti`,{domains:b.length,habits:T.length})].filter(Boolean).join(` · `),O=b.filter(e=>e.runCount===0&&e.lessons.length===0),k=g.phase!==`idle`||O.length>0,Ce=O.length>0?O.map(e=>e.title):[C?.title??b[0]?.title??``],{data:Te}=Ee(k?r??void 0:void 0),De=async t=>{let n=c??C?.id??b[0]?.id;if(n)try{await Ie.teachLesson({domainId:n,text:t}),l.success(e(`habit.teach.done`)),s(!1),v()}catch{l.error(e(`habit.teach.failed`))}},Oe=()=>{r&&t(a(`/agent`,r,`self-evolving/new`))},ke=i=>{fe({cancelText:e(`cancel`,{ns:`common`}),content:e(`domain.deleteConfirm.content`,{habits:i.lessons.length,runs:i.runCount}),okButtonProps:{danger:!0},okText:e(`domain.deleteConfirm.ok`),onOk:async()=>{try{await Ie.deleteDomain(i.id),l.success(e(`domain.deleted`)),await v(),n&&r&&t(a(`/agent`,r,`self-evolving`))}catch{l.error(e(`domain.deleteFailed`))}},title:e(`domain.deleteConfirm.title`,{name:i.title})})},Ae=[...k?[]:[{disabled:g.starting,icon:(0,Q.jsx)(u,{icon:le}),key:`warmup`,label:e(`nav.warmup`),onClick:()=>void g.start()}],...C?[...k?[]:[{type:`divider`}],{danger:!0,icon:(0,Q.jsx)(u,{icon:ce}),key:`delete`,label:e(`domain.delete`),onClick:()=>ke(C)}]:[]];return(0,Q.jsxs)(d,{height:`100%`,width:`100%`,children:[(0,Q.jsx)(ye,{styles:{left:{paddingInlineStart:24}},left:r?(0,Q.jsx)(we,{agentId:r,extraItems:C?[C.title]:void 0,title:n&&C?(0,Q.jsx)(re,{to:a(`/agent`,r,`self-evolving`),children:e(`title`)}):e(`title`)}):null,right:r&&y.length>0?(0,Q.jsxs)(d,{horizontal:!0,gap:8,children:[(0,Q.jsx)(p,{icon:ue,onClick:()=>s(e=>!e),children:e(`nav.teach`)}),!n&&(0,Q.jsx)(p,{type:`text`,onClick:Oe,children:e(`nav.newDomain`)}),Ae.length>0&&(0,Q.jsx)(f,{items:Ae,children:(0,Q.jsx)(te,{icon:de,loading:g.starting,title:e(`domain.more`)})})]}):null}),(0,Q.jsx)(d,{className:yt.body,flex:1,width:`100%`,children:(0,Q.jsx)(ve,{children:(0,Q.jsx)(Se,{data:_,error:ae,errorVariant:`page`,isEmpty:!ae&&y.length===0,isLoading:oe,loading:(0,Q.jsx)(be,{debugId:`SelfLearning`}),empty:(0,Q.jsx)(ee,{height:`100%`,style:{minHeight:`50vh`},width:`100%`,children:(0,Q.jsx)(pe,{description:e(`empty.desc`),descriptionProps:{fontSize:13},icon:se,style:{maxWidth:420},title:e(`empty.title`),action:(0,Q.jsx)(p,{icon:ue,type:`primary`,onClick:Oe,children:e(`nav.newDomain`)})})}),onRetry:()=>v(),children:(0,Q.jsxs)(d,{gap:20,paddingBlock:`22px 64px`,children:[(0,Q.jsxs)(d,{gap:4,children:[(0,Q.jsx)(x,{className:N.sentence,children:ge.headline}),(0,Q.jsx)(x,{type:`secondary`,children:_e})]}),o&&(0,Q.jsx)(w,{padding:12,variant:`outlined`,children:(0,Q.jsxs)(d,{gap:8,children:[(0,Q.jsxs)(d,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:[(0,Q.jsx)(x,{fontSize:12,type:`secondary`,children:e(`teachNew.help`)}),!S&&(0,Q.jsxs)(d,{horizontal:!0,align:`center`,gap:6,children:[(0,Q.jsx)(x,{fontSize:12,type:`secondary`,children:e(`teachNew.domain`)}),b.map(e=>(0,Q.jsx)(p,{size:`small`,type:(c??b[0].id)===e.id?`primary`:`default`,onClick:()=>ne(e.id),children:e.title},e.id))]})]}),(0,Q.jsx)(ze,{autoFocus:!0,placeholder:e(`teachNew.placeholder`),onSubmit:De})]})}),k&&(0,Q.jsx)(_t,{candidateCount:Te?.candidateCount,domainTitles:Ce,warmup:g}),E>0&&(0,Q.jsx)($e,{domains:b}),C&&(0,Q.jsx)(nt,{domain:C}),(0,Q.jsx)(ot,{habits:T}),T.length>0&&r&&(0,Q.jsx)(Be,{agentId:r,domainTitles:S?void 0:me,habits:T,viewAllPath:C?a(`/agent`,r,`self-evolving`,C.id,`experience`):void 0,onChanged:()=>void v()}),C&&(0,Q.jsx)(He,{domain:C}),!S&&!n&&(0,Q.jsx)(Je,{domains:y,onOpen:e=>{r&&t(a(`/agent`,r,`self-evolving`,e))}})]})})})})]})}),$.displayName=`SelfLearning`}));export{bt as n,$ as t};