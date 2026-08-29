import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o}from"./dialog-BebLzVzY.js";import{a as s,t as c}from"./es-CVJR_g25.js";import{Im as l,Ph as u,Qm as d,iy as f,no as p,ou as m,x as h}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as g,t as _}from"./base-ui-BAv0gRbN.js";import{t as v}from"./es-LELdnrjB.js";var y,b,x=e((()=>{_(),y=0,b=({renderContent:e,renderFooter:t,...n})=>{let r=`form-modal-${y++}`,i={},a=e=>{i.instance?.update({footer:t({formId:r,loading:e})})};return i.instance=g({...n,content:e({formId:r,setLoading:a}),footer:t({formId:r,loading:!1})}),i.instance}})),S,C,w,T,E,D=e((()=>{v(),c(),h(),S=t(a()),n(),C=t(i()),w={aborted:{cls:`default`,icon:p},completed:{cls:`success`,icon:u},external:{cls:`warning`,icon:m},failed:{cls:`error`,icon:d},idle:{cls:`default`,icon:l},pending:{cls:`warning`,icon:l},running:{cls:`primary`,icon:f}},T=s(({css:e,cssVar:t})=>({default:e`
    color: ${t.colorTextTertiary};
  `,error:e`
    color: ${t.colorError};
  `,primary:e`
    color: ${t.colorPrimary};
  `,success:e`
    color: ${t.colorSuccess};
  `,warning:e`
    color: ${t.colorWarning};
  `,wrapper:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    font-size: ${t.fontSizeSM};
    font-weight: 500;
    line-height: 1;
  `})),E=(0,S.memo)(({status:e})=>{let{t}=r(`eval`),n=w[e]||w.idle;return(0,C.jsxs)(`span`,{className:`${T.wrapper} ${T[n.cls]||T.default}`,children:[(0,C.jsx)(o,{icon:n.icon,size:12}),t(`run.status.${e}`)]})})}));export{x as i,D as n,b as r,E as t};