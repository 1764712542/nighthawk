import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as i,Va as a,cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Hr as l,Qr as u,U as ee,bt as d,mr as f}from"./dialog-BebLzVzY.js";import{a as p,o as te,y as ne}from"../vendor/vendor-react-CBcx1o7d.js";import{Ut as re,a as ie,b as m,c as h,i as g,t as _}from"./es-CVJR_g25.js";import{Rt as v,Sv as ae,ea as y,ey as oe,wa as se,wl as ce,wr as le,x as b}from"../vendor/vendor-icons-C-Y4oLkk.js";import{i as x,t as S}from"./base-ui-BAv0gRbN.js";import{$r as C,qr as w,t as T}from"./es-LELdnrjB.js";import{C as E,E as ue}from"./serverConfig-CmLVLry1.js";import{Q as D,Qo as O,X as k,Y as de,Z as fe,Zo as A,io as j,po as pe}from"./index-Djd-5Nq9.js";import{n as M,t as me}from"./NeuralNetworkLoading-CUDFTjYo.js";import{n as he,t as N}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{r as ge,t as P}from"./useResolvedAgentRouteId-CJE-EafG.js";import{n as F,t as _e}from"./AgentBreadcrumb-EU8wI3cb.js";import{n as I,t as L}from"./expertise-LxfGCVp1.js";var R,z=e((()=>{R=(e,t,n)=>({...e,[n]:t[n]})})),B,V,H,ve,ye=e((()=>{B=t(s()),V=e=>{if(!e)return{brief:``};try{let t=JSON.parse(e);return typeof t==`string`?{brief:t}:typeof t.brief==`string`?t:{brief:``}}catch{return{brief:e}}},H=e=>V(e?localStorage.getItem(e):null),ve=e=>{let t=e?`self-learning:create:${e}`:void 0,[n]=(0,B.useState)(()=>H(t)),[r,i]=(0,B.useState)(n.brief),[a,o]=(0,B.useState)(n.draft),[s,c]=(0,B.useState)(n.draft?`review`:`describe`),l=(0,B.useRef)(t),u=(0,B.useRef)(void 0);return(0,B.useEffect)(()=>{if(l.current===t)return;let e=H(t);l.current=t,u.current=t,i(e.brief),o(e.draft),c(e.draft?`review`:`describe`)},[t]),(0,B.useEffect)(()=>{if(t){if(u.current===t){u.current=void 0;return}r.trim()||a?localStorage.setItem(t,JSON.stringify({brief:r,draft:a})):localStorage.removeItem(t)}},[r,a,t]),{brief:r,clearDraft:()=>{t&&localStorage.removeItem(t),i(``),o(void 0),c(`describe`)},draft:a,setBrief:i,setDraft:o,setStep:c,step:s,storageKey:t}}})),U,W,G,K,q,be,J,Y,X,xe=e((()=>{T(),S(),m(),_(),b(),U=t(s()),n(),p(),a(),M(),F(),P(),D(),k(),N(),I(),E(),j(),z(),ye(),W=t(o()),G=90,K={canonEntries:``,domainFilter:``,layers:``,outOfScope:``,rationale:``},q=ie(({css:e})=>({body:e`
    overflow-y: auto;
    display: flex;
  `,content:e`
    width: 100%;
    max-width: 960px;
    padding-block: 16px 96px;
  `,footer:e`
    position: sticky;
    z-index: 2;
    inset-block-end: 0;

    padding-block: 12px;
    border-block-start: 1px solid ${h.colorBorderSecondary};

    background: ${h.colorBgContainer};
  `,head:e`
    padding-block-end: 24px;
  `,generatingStatus:e`
    min-height: 36px;
    padding-block: 6px;
    color: ${h.colorTextSecondary};
  `,generatingTextItem:e`
    display: flex;
    align-items: center;

    height: 22px;

    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    white-space: nowrap;
  `,generatingTextTrack:e`
    animation: self-learning-generation-roll 16s cubic-bezier(0.4, 0, 0.2, 1) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    @keyframes self-learning-generation-roll {
      0%,
      20% {
        transform: translateY(0);
      }

      25%,
      45% {
        transform: translateY(-22px);
      }

      50%,
      70% {
        transform: translateY(-44px);
      }

      75%,
      95% {
        transform: translateY(-66px);
      }

      100% {
        transform: translateY(-88px);
      }
    }
  `,generatingTextViewport:e`
    overflow: hidden;
    height: 22px;
  `,inputShell:e`
    position: relative;
    border-radius: 8px;
  `,inputShellLoading:e`
    overflow: hidden;

    &::after {
      pointer-events: none;
      content: '';

      position: absolute;
      z-index: 1;
      inset: 0;

      padding: 2px;
      border-radius: inherit;

      background: conic-gradient(
        from var(--domain-border-angle),
        ${h.colorBorderSecondary} 0deg 210deg,
        #ff3d8d 238deg,
        #8b5cf6 258deg,
        #00c8ff 278deg,
        #22e6a8 298deg,
        #ffd43b 318deg,
        #ff6b35 338deg,
        ${h.colorBorderSecondary} 360deg
      );

      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);

      animation: domain-input-flow 1.8s linear infinite;

      mask-composite: exclude;
    }

    @keyframes domain-input-flow {
      from {
        --domain-border-angle: 0deg;
      }

      to {
        --domain-border-angle: 360deg;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &::after {
        animation: none;
      }
    }
  `,itemRow:e`
    display: grid;
    grid-template-columns: 32px minmax(0, 1fr) 28px;
    gap: 8px;
    align-items: start;

    padding-block: 8px;
    border-block-end: 1px solid ${h.colorBorderSecondary};

    &:last-child {
      border-block-end: none;
    }
  `,reviewSection:e`
    padding-block: 20px;

    &:first-child {
      padding-block: 0 4px;
    }
  `,rationale:e`
    margin: 0;
    padding-inline: 0;

    font-size: 16px;
    line-height: 1.75;
    color: ${h.colorText};
  `,seq:e`
    padding-block-start: 8px;
    font-size: 14px;
    color: ${h.colorTextTertiary};
  `,title:e`
    box-sizing: border-box;
    width: 100%;
    padding-block: 4px 8px;
    padding-inline-end: 0;
    border: none;

    font-family: inherit;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.4;
    color: inherit;

    background: transparent;
    outline: none;
  `,titleStatic:e`
    padding-block: 4px 8px;

    font-size: 28px;
    font-weight: 600;
    line-height: 1.4;
    color: ${h.colorText};
  `})),be=g`
  @property --domain-border-angle {
    inherits: false;
    initial-value: 0deg;
    syntax: '<angle>';
  }
`,J=e=>`${Math.floor(e/60)}:${(e%60).toString().padStart(2,`0`)}`,Y=(e,t)=>e.trim().toLowerCase().replaceAll(/[^\da-z]+/g,`-`).replaceAll(/^-|-$/g,``)||t,X=(0,U.memo)(()=>{let{t:e}=r(`selfLearning`),t=he(),{aid:n}=ne(),a=ue(e=>e.activeAgentId),{agentId:o}=ge(n),s=o||a,{brief:p,clearDraft:ie,draft:m,setBrief:g,setDraft:_,setStep:b,step:S,storageKey:T}=ve(s),[E,D]=(0,U.useState)(!1),[O,k]=(0,U.useState)(K),[A,j]=(0,U.useState)(),[M,N]=(0,U.useState)(),[P,F]=(0,U.useState)(G);(0,U.useEffect)(()=>{if(S!==`preparing`&&!M)return;F(G);let e=window.setInterval(()=>F(e=>Math.max(0,e-1)),1e3);return()=>window.clearInterval(e)},[M,S]),(0,U.useEffect)(()=>{let e=e=>{p.trim()&&e.preventDefault()};return window.addEventListener(`beforeunload`,e),()=>window.removeEventListener(`beforeunload`,e)},[p]);let I=(0,U.useCallback)(async()=>{if(!(!s||!p.trim())){b(`preparing`);try{_(await L.draftDomain({agentId:s,brief:p.trim()})),b(`review`)}catch{c.error(e(`create.failed`)),b(m?`review`:`describe`)}}},[s,p,m,_,b,e]),z=(0,U.useCallback)(async t=>{let n=O[t].trim();if(!(!s||!p.trim()||!m||!n)){N(t);try{let e=await L.draftDomain({adjustment:n,agentId:s,brief:p.trim(),currentDraft:m});_(n=>n&&R(n,e,t)),k(e=>({...e,[t]:``})),j(void 0)}catch{c.error(e(`create.adjust.failed`))}finally{N(void 0)}}},[O,s,p,m,_,e]),B=!!m&&!!m.title.trim()&&!!m.domainFilter.trim()&&!E,V=(0,U.useCallback)(async()=>{if(!(!s||!m||!B)){D(!0);try{let e=await L.createDomain({...m,agentId:s,brief:p.trim(),canonEntries:m.canonEntries.filter(e=>e.title.trim()),domainFilter:m.domainFilter.trim(),layers:m.layers.filter(e=>e.title.trim()),outOfScope:m.outOfScope?.trim()||null,rationale:m.rationale?.trim()||null,title:m.title.trim()});T&&localStorage.removeItem(T),t(i(`/agent`,s,`self-evolving`,e))}catch{c.error(e(`create.failed`))}finally{D(!1)}}},[s,p,B,m,t,T,e]),H=(0,U.useRef)(void 0);H.current=S===`describe`?I:S===`review`?V:void 0;let ye=(0,U.useCallback)(e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),e.stopPropagation(),H.current?.())},[]),X=(0,U.useCallback)((e,t)=>{t.key!==`Enter`||!t.metaKey&&!t.ctrlKey||(t.preventDefault(),t.stopPropagation(),z(e))},[z]),xe=t=>{let n=M===t;return(0,W.jsxs)(u,{gap:8,onKeyDown:e=>X(t,e),children:[(0,W.jsx)(w,{autoFocus:!0,autoSize:{maxRows:5,minRows:2},disabled:n,placeholder:e(`create.adjust.placeholder.${t}`),value:O[t],variant:`filled`,onChange:e=>k(n=>({...n,[t]:e.target.value}))}),(0,W.jsx)(u,{horizontal:!0,justify:`end`,children:(0,W.jsx)(f,{disabled:!O[t].trim()||n,icon:y,loading:n,onClick:()=>void z(t),children:e(n?`create.adjust.adjusting`:`create.adjust.action`)})}),n&&(0,W.jsx)(x,{fontSize:12,type:`secondary`,children:P>0?e(`create.adjust.generatingCountdown`,{time:J(P)}):e(`create.generatingAlmostDone`)})]})},Z=t=>{let n=A===t,r=M===t;return(0,W.jsx)(ee,{content:xe(t),open:n,placement:`bottomRight`,styles:{content:{padding:12,width:`min(520px, calc(100vw - 32px))`}},trigger:`click`,onOpenChange:e=>j(e?t:void 0),children:(0,W.jsx)(f,{"aria-expanded":n,"aria-haspopup":`dialog`,disabled:!!M&&!r,icon:le,size:`small`,type:`text`,children:e(`create.adjust.blockAction`)})})},Q=e=>_(t=>t&&{...t,...e}),$=s?i(`/agent`,s,`self-evolving`):`/`,Se=()=>{ie(),k(K),j(void 0),N(void 0),t($)},Ce=[e(`create.generating`),e(`create.generatingScope`),e(`create.generatingCanon`),e(`create.generatingLayers`),e(`create.generating`)];return(0,W.jsxs)(u,{height:`100%`,width:`100%`,children:[(0,W.jsx)(be,{}),(0,W.jsx)(fe,{styles:{left:{paddingInlineStart:24}},left:s?(0,W.jsx)(_e,{agentId:s,extraItems:[e(`create.modalTitle`)],title:(0,W.jsx)(te,{to:$,children:e(`title`)})}):null}),(0,W.jsx)(u,{className:q.body,flex:1,width:`100%`,children:(0,W.jsx)(de,{minWidth:960,children:(0,W.jsxs)(u,{className:q.content,onKeyDown:ye,children:[(0,W.jsx)(u,{horizontal:!0,className:q.head,children:(0,W.jsxs)(u,{flex:1,gap:6,children:[S===`review`&&(0,W.jsx)(u,{horizontal:!0,children:(0,W.jsx)(f,{icon:ae,size:`small`,type:`text`,onClick:Se,children:e(`create.back`)})}),S===`review`&&m?(0,W.jsx)(`input`,{className:q.title,maxLength:80,placeholder:e(`create.field.title`),value:m.title,onChange:e=>Q({title:e.target.value})}):(0,W.jsx)(`div`,{className:q.titleStatic,children:e(`create.modalTitle`)}),S!==`review`&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(x,{fontSize:12,type:`secondary`,children:e(`create.briefHelp`)}),(0,W.jsx)(`div`,{className:`${q.inputShell} ${S===`preparing`?q.inputShellLoading:``}`,children:(0,W.jsx)(w,{autoFocus:!0,autoSize:{maxRows:10,minRows:5},disabled:S===`preparing`,placeholder:e(`create.briefPlaceholder`),value:p,variant:S===`preparing`?`borderless`:`outlined`,onChange:e=>g(e.target.value)})}),S===`preparing`?(0,W.jsxs)(u,{horizontal:!0,align:`center`,className:q.generatingStatus,gap:10,justify:`space-between`,children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(me,{size:18}),(0,W.jsx)(`div`,{"aria-label":e(`create.generating`),className:q.generatingTextViewport,role:`status`,children:(0,W.jsx)(`div`,{"aria-hidden":!0,className:q.generatingTextTrack,children:Ce.map((e,t)=>(0,W.jsx)(`div`,{className:`${q.generatingTextItem} ${pe.shinyText}`,children:e},t))})})]}),(0,W.jsx)(x,{fontSize:12,type:`secondary`,children:P>0?e(`create.generatingCountdown`,{time:J(P)}):e(`create.generatingAlmostDone`)})]}):(0,W.jsx)(u,{horizontal:!0,align:`center`,justify:`end`,children:(0,W.jsx)(f,{disabled:!p.trim(),icon:le,type:`primary`,onClick:()=>void I(),children:e(`create.generate`)})})]})]})}),S===`review`&&m&&(0,W.jsxs)(u,{className:q.body,children:[(0,W.jsxs)(u,{className:q.reviewSection,gap:10,children:[(0,W.jsx)(x,{fontSize:13,weight:600,children:e(`create.field.brief`)}),(0,W.jsx)(w,{autoSize:{maxRows:8,minRows:3},value:p,variant:`filled`,onChange:e=>g(e.target.value)}),(0,W.jsx)(u,{horizontal:!0,justify:`end`,style:{paddingBlockEnd:8},children:(0,W.jsx)(f,{disabled:!p.trim()||!!M,icon:y,size:`small`,onClick:()=>void I(),children:e(`create.regenerate`)})})]}),(0,W.jsx)(re,{style:{margin:0}}),(0,W.jsxs)(u,{className:q.reviewSection,gap:12,children:[(0,W.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:8,justify:`space-between`,children:[(0,W.jsx)(x,{fontSize:14,type:`secondary`,children:e(`create.reviewHelp`)}),(0,W.jsx)(u,{flex:`none`,children:Z(`rationale`)})]}),(0,W.jsx)(w,{autoSize:{maxRows:8,minRows:2},className:q.rationale,disabled:M===`rationale`,placeholder:e(`create.field.rationalePlaceholder`),value:m.rationale??``,variant:`borderless`,onChange:e=>Q({rationale:e.target.value})})]}),(0,W.jsxs)(u,{className:q.reviewSection,gap:10,children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,W.jsx)(x,{fontSize:13,weight:600,children:e(`create.field.domainFilter`)}),Z(`domainFilter`)]}),(0,W.jsx)(w,{autoSize:{maxRows:6,minRows:2},value:m.domainFilter,variant:`filled`,onChange:e=>Q({domainFilter:e.target.value})})]}),(0,W.jsxs)(u,{className:q.reviewSection,gap:10,children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,W.jsx)(x,{fontSize:13,weight:600,children:e(`create.field.outOfScope`)}),Z(`outOfScope`)]}),(0,W.jsx)(w,{autoSize:{maxRows:5,minRows:2},placeholder:e(`create.field.outOfScopePlaceholder`),value:m.outOfScope??``,variant:`filled`,onChange:e=>Q({outOfScope:e.target.value})})]}),(0,W.jsxs)(u,{className:q.reviewSection,gap:10,children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(l,{color:h.colorTextTertiary,icon:oe,size:16}),(0,W.jsx)(x,{fontSize:13,weight:600,children:e(`create.anchor.canon`)}),(0,W.jsx)(x,{fontSize:12,type:`secondary`,children:e(`create.anchor.canonHint`)})]}),(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[Z(`canonEntries`),(0,W.jsx)(f,{icon:se,size:`small`,type:`text`,onClick:()=>Q({canonEntries:[...m.canonEntries,{key:`canon-${m.canonEntries.length+1}`,source:``,statement:``,title:``}]}),children:e(`create.anchor.addCanon`)})]})]}),m.canonEntries.length===0&&(0,W.jsx)(x,{fontSize:12,type:`secondary`,children:e(`create.anchor.noCanon`)}),m.canonEntries.map((t,n)=>(0,W.jsxs)(`div`,{className:q.itemRow,children:[(0,W.jsxs)(`span`,{className:q.seq,children:[`E`,n+1]}),(0,W.jsxs)(u,{gap:4,children:[(0,W.jsxs)(u,{horizontal:!0,gap:8,children:[(0,W.jsx)(C,{placeholder:e(`create.anchor.canonTitle`),style:{flex:1},value:t.title,variant:`filled`,onChange:e=>Q({canonEntries:m.canonEntries.map((t,r)=>r===n?{...t,key:Y(e.target.value,t.key),title:e.target.value}:t)})}),(0,W.jsx)(C,{placeholder:e(`create.anchor.canonSource`),style:{flex:1},value:t.source,variant:`filled`,onChange:e=>Q({canonEntries:m.canonEntries.map((t,r)=>r===n?{...t,source:e.target.value}:t)})})]}),(0,W.jsx)(w,{autoSize:{maxRows:4,minRows:1},placeholder:e(`create.anchor.canonStatement`),value:t.statement,variant:`borderless`,onChange:e=>Q({canonEntries:m.canonEntries.map((t,r)=>r===n?{...t,statement:e.target.value}:t)})})]}),(0,W.jsx)(d,{icon:v,size:`small`,onClick:()=>Q({canonEntries:m.canonEntries.filter((e,t)=>t!==n)})})]},n))]}),(0,W.jsxs)(u,{className:q.reviewSection,gap:10,children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,W.jsx)(l,{color:h.colorTextTertiary,icon:ce,size:16}),(0,W.jsx)(x,{fontSize:13,weight:600,children:e(`create.anchor.layers`)}),(0,W.jsx)(x,{fontSize:12,type:`secondary`,children:m.layerSource===`canonical`&&m.layerCanonRef?e(`create.anchor.layersFrom`,{ref:m.layerCanonRef}):e(`create.anchor.layersInvented`)})]}),(0,W.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[Z(`layers`),(0,W.jsx)(f,{icon:se,size:`small`,type:`text`,onClick:()=>Q({layers:[...m.layers,{description:null,key:`layer-${m.layers.length+1}`,title:``}]}),children:e(`create.anchor.addLayer`)})]})]}),m.layers.length===0&&(0,W.jsx)(x,{fontSize:12,type:`secondary`,children:e(`create.anchor.noLayers`)}),m.layers.map((t,n)=>(0,W.jsxs)(`div`,{className:q.itemRow,children:[(0,W.jsxs)(`span`,{className:q.seq,children:[`L`,n+1]}),(0,W.jsxs)(u,{gap:4,children:[(0,W.jsx)(C,{placeholder:e(`create.anchor.layerTitle`),value:t.title,variant:`filled`,onChange:e=>Q({layers:m.layers.map((t,r)=>r===n?{...t,key:Y(e.target.value,t.key),title:e.target.value}:t)})}),(0,W.jsx)(C,{placeholder:e(`create.anchor.layerDesc`),value:t.description??``,variant:`borderless`,onChange:e=>Q({layers:m.layers.map((t,r)=>r===n?{...t,description:e.target.value}:t)})})]}),(0,W.jsx)(d,{icon:v,size:`small`,onClick:()=>Q({layers:m.layers.filter((e,t)=>t!==n)})})]},n))]})]}),S===`review`&&(0,W.jsx)(u,{horizontal:!0,align:`center`,className:q.footer,justify:`end`,children:(0,W.jsx)(u,{horizontal:!0,align:`center`,gap:4,children:(0,W.jsx)(f,{disabled:!!M||!B,loading:E,type:`primary`,onClick:()=>void H.current?.(),children:e(`create.confirm`)})})})]})})})]})}),X.displayName=`CreateDomainPage`})),Z,Q,$;e((()=>{Z=t(s()),O(),xe(),Q=t(o()),$=(0,Z.memo)(()=>(0,Q.jsx)(Z.Suspense,{fallback:(0,Q.jsx)(A,{debugId:`SelfLearningCreate`}),children:(0,Q.jsx)(X,{})})),$.displayName=`AgentSelfLearningCreatePage`}))();export{$ as default};