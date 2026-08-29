import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ga as a,ka as o,ls as s}from"./app-const-Bl9rlHwj.js";import{Qr as c,mr as l}from"./dialog-BebLzVzY.js";import{a as u,t as d}from"./es-CVJR_g25.js";import{t as f}from"./base-ui-BAv0gRbN.js";import{t as p}from"./es-LELdnrjB.js";import{Qn as m,Xt as h,nn as g}from"./model-runtime-client-tog6-eyE.js";import{n as _,p as v,r as y}from"./format-BuuIRQbq.js";import{n as b,r as x,t as S}from"./style-Bqo-v2Pf.js";var C,w,T,E,D,O=e((()=>{h(),C=e=>{let t=e?.budget;return t&&typeof t==`object`?t:void 0},w=new Set(Object.values(g)),T=e=>!!e&&w.has(e),E={[g.Free]:g.Starter,[g.Premium]:g.Ultimate,[g.Starter]:g.Premium},D=e=>e?E[e]:void 0})),k,A,j,M,N,P,F,I;e((()=>{a(),h(),p(),f(),d(),k=t(s()),n(),v(),x(),O(),A=t(i()),j=1e6,M={[g.Free]:`plans.plan.free.title`,[g.Hobby]:`plans.plan.hobby.title`,[g.Premium]:`plans.plan.premium.title`,[g.Starter]:`plans.plan.starter.title`,[g.Ultimate]:`plans.plan.ultimate.title`},N=u(({css:e,cssVar:t})=>({budgetFact:e`
    display: flex;
    justify-content: space-between;

    width: 100%;

    font-size: 13px;
    line-height: 1.4;
  `,budgetFactLabel:e`
    color: ${t.colorTextTertiary};
  `,budgetFactValue:e`
    font-weight: 600;
    color: ${t.colorText};
    white-space: nowrap;
  `,budgetFactWarningValue:e`
    font-weight: 700;
    color: ${t.colorError};
  `,budgetFacts:e`
    width: 100%;
  `})),P=e=>{switch(e){case`approximate`:return`limitation.insufficientBudget.approximateDesc`;case`estimated`:return`limitation.insufficientBudget.estimatedDesc`;case`exact`:return`limitation.insufficientBudget.exactDesc`;default:return`limitation.insufficientBudget.desc`}},F=e=>e>=j?`${y(e/j,2)}M`:_(e),I=(0,k.memo)(({errorBody:e,errorType:t,onRetry:n})=>{let{t:i}=r(`subscription`),a=C(e),s=t===m.InsufficientBudgetForModel,u=T(a?.planAtError)?a.planAtError:g.Free,d=e=>i(M[e]),f=D(u),p=i(s?`limitation.insufficientBudget.title`:`limitation.limited.title`),h=s?i(P(a?.pricingBasis)):i(`limitation.limited.desc`,{plan:d(u)}),_=f?i(`limitation.limited.upgradeToPlan`,{plan:d(f)}):i(`limitation.limited.upgrade`),v=[{label:i(`limitation.insufficientBudget.required`),value:a?.requiredCredits,warning:!1},{label:i(`limitation.insufficientBudget.shortfall`),value:a?.shortfallCredits,warning:!0}].filter(e=>e.value!==void 0&&e.value>0);return(0,A.jsx)(S,{children:(0,A.jsxs)(b,{animation:!0,avatar:`💰`,description:h,title:p,children:[v.length>0&&(0,A.jsx)(c,{className:N.budgetFacts,gap:8,children:v.map(e=>(0,A.jsxs)(`div`,{className:N.budgetFact,children:[(0,A.jsx)(`span`,{className:N.budgetFactLabel,children:e.label}),(0,A.jsx)(`span`,{className:e.warning?`${N.budgetFactValue} ${N.budgetFactWarningValue}`:N.budgetFactValue,children:F(e.value)})]},e.label))}),(0,A.jsxs)(c,{gap:8,width:`100%`,children:[o.subscription&&(0,A.jsx)(`a`,{href:o.subscription,rel:`noopener noreferrer`,style:{width:`100%`},target:`_blank`,children:(0,A.jsx)(l,{block:!0,size:`large`,type:`primary`,children:_})}),(0,A.jsx)(l,{block:!0,size:`large`,onClick:n,children:i(`limitation.insufficientBudget.retry`)})]})]})})})}))();export{I as default};