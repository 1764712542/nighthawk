import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o}from"./dialog-BebLzVzY.js";import{a as s,t as c}from"./es-CVJR_g25.js";import{Bl as l,Mt as u,et as d,fp as f,ng as p,x as m}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as h}from"./es-LELdnrjB.js";var g,_,v,y,b,x,S=e((()=>{h(),c(),m(),g=t(a()),n(),_=t(i()),v={makePrivate:{items:[{icon:f,key:`visibilityConfirm.makePrivate.itemAccess`,tone:`danger`},{icon:u,key:`visibilityConfirm.makePrivate.itemReferences`,tone:`info`},{emphasis:!0,icon:l,key:`visibilityConfirm.makePrivate.itemLoaded`,showIrreversible:!0,tone:`danger`}]},publish:{items:[{icon:d,key:`visibilityConfirm.publish.itemVisible`,tone:`info`},{icon:p,key:`visibilityConfirm.publish.itemReversible`,tone:`ok`},{emphasis:!0,icon:l,key:`visibilityConfirm.publish.itemLoaded`,showIrreversible:!0,tone:`danger`}]}},y=s(({css:e,cssVar:t})=>({list:e`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin: 0;
    padding: 12px;
    border-radius: 8px;

    list-style: none;

    background: ${t.colorFillQuaternary};
  `,row:e`
    display: flex;
    gap: 10px;
    align-items: flex-start;

    font-size: 13px;
    line-height: 1.55;
    color: ${t.colorText};
  `,rowIcon:e`
    flex: none;
    margin-block-start: 3px;
    color: ${t.colorTextTertiary};
  `,rowIconDanger:e`
    color: ${t.colorError};
  `,rowIconOk:e`
    color: ${t.colorSuccess};
  `,rowIconInfo:e`
    color: ${t.colorInfo};
  `,emphasis:e`
    font-weight: 500;
  `,suffix:e`
    color: ${t.colorTextTertiary};
  `})),b=e=>e===`danger`?y.rowIconDanger:e===`ok`?y.rowIconOk:y.rowIconInfo,x=(0,g.memo)(({variant:e})=>{let{t}=r(`common`),n=v[e],i=t(`visibilityConfirm.irreversible`);return(0,_.jsx)(`ul`,{className:y.list,children:n.items.map(e=>{let n=e.icon;return(0,_.jsxs)(`li`,{className:y.row,children:[(0,_.jsx)(`span`,{className:`${y.rowIcon} ${b(e.tone)}`,children:(0,_.jsx)(o,{icon:n,size:14})}),(0,_.jsxs)(`span`,{className:e.emphasis?y.emphasis:void 0,children:[t(e.key),e.showIrreversible&&(0,_.jsx)(`span`,{className:y.suffix,children:i})]})]},e.key)})})}),x.displayName=`VisibilityConfirmContent`}));export{S as n,x as t};