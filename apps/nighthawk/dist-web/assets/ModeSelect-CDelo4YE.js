import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as i,ls as a}from"./app-const-Bl9rlHwj.js";import{Hr as o,Qr as s,U as c,mr as l}from"./dialog-BebLzVzY.js";import{a as u,c as d,l as f,t as p}from"./es-CVJR_g25.js";import{Hl as m,Rc as h,eg as g,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as v}from"./base-ui-BAv0gRbN.js";import{t as y}from"./es-LELdnrjB.js";import{Do as b,Eo as x}from"./index-Djd-5Nq9.js";var S=e((()=>{})),C,w,T=e((()=>{C=(e,t)=>e===`task`&&!t,w=(e,t)=>C(e,t)?`chat`:e})),E,D,O,k,A,j=e((()=>{y(),v(),p(),_(),E=t(a()),n(),x(),T(),D=t(i()),O=u(({css:e,cssVar:t})=>({activeOption:e`
    background: ${t.colorFillSecondary};
  `,button:e`
    display: flex;
    gap: 6px;
    align-items: center;

    height: 32px;
    padding-inline: 8px;
    border: 0;
    border-radius: ${t.borderRadius};

    font-size: 12px;
    color: ${t.colorTextSecondary};

    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,option:e`
    overflow: hidden;
    justify-content: flex-start;

    width: 100%;
    height: auto;
    padding-block: 10px;
    padding-inline: 8px;
    border: 0;
    border-radius: ${t.borderRadius};

    text-align: start;

    transition: background-color 0.2s;

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,optionDesc:e`
    overflow: hidden;

    font-size: 12px;
    line-height: 1.4;
    color: ${t.colorTextDescription};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,optionIcon:e`
    flex-shrink: 0;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
    background: ${t.colorBgElevated};
  `,optionTitle:e`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
  `,optionContent:e`
    width: 100%;
    min-width: 0;
  `,optionText:e`
    overflow: hidden;
    min-width: 0;
  `,popoverPopup:e`
    /* The popup pads its option rows by 4px, so its corner must be one step larger
       than the rows' radius to wrap them concentrically. &&& outranks the base
       popup style's border-radius. */
    &&& {
      border-radius: ${t.borderRadiusLG};
    }
  `})),k=[{icon:m,key:`chat`},{icon:h,key:`task`}],A=(0,E.memo)(({onChange:e,value:t})=>{let{t:n}=r(`home`),{t:i}=r(`chat`),{allowed:a,reason:u}=b(`create_content`),[p,m]=(0,E.useState)(!1);(0,E.useEffect)(()=>{let n=w(t,a);n!==t&&e(n)},[a,e,t]);let h=(0,E.useCallback)(t=>{m(!1),e(t)},[e]),_=k.find(e=>e.key===t)??k[0],v=(0,D.jsx)(s,{gap:4,role:`menu`,style:{maxWidth:320,minWidth:280},children:k.map(({icon:e,key:r})=>{let c=C(r,a);return(0,D.jsx)(l,{"aria-checked":r===t,className:f(O.option,r===t&&O.activeOption),disabled:c,role:`menuitemradio`,title:c?u:void 0,type:`text`,onClick:()=>h(r),children:(0,D.jsxs)(s,{horizontal:!0,align:`center`,className:O.optionContent,gap:12,children:[(0,D.jsx)(s,{align:`center`,className:O.optionIcon,height:32,justify:`center`,width:32,children:(0,D.jsx)(o,{icon:e,size:16})}),(0,D.jsxs)(s,{className:O.optionText,flex:1,children:[(0,D.jsx)(`div`,{className:O.optionTitle,children:n(`dashboard.mode.${r}`)}),(0,D.jsx)(`div`,{className:O.optionDesc,children:r===`chat`?i(`chatMode.agentDesc`):n(`dashboard.modeDesc.task`)})]})]})},r)})});return(0,D.jsx)(c,{className:O.popoverPopup,content:v,open:p,placement:`bottomLeft`,trigger:`click`,styles:{content:{border:`1px solid ${d.colorBorderSecondary}`,borderRadius:d.borderRadiusLG,padding:4}},onOpenChange:m,children:(0,D.jsxs)(l,{"aria-expanded":p,"aria-haspopup":`menu`,className:O.button,type:`text`,children:[(0,D.jsx)(o,{icon:_.icon,size:14}),(0,D.jsx)(`span`,{children:n(`dashboard.mode.${t}`)}),(0,D.jsx)(o,{icon:g,size:12})]})})})}));export{j as n,S as r,A as t};