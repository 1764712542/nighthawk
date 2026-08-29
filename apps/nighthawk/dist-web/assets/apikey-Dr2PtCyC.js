import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{B as r,H as i,M as a,P as o}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as s,p as c}from"./agent-Cvv887Je.js";import{Ji as l,O as u,Va as d,cs as f,ls as p,qi as m}from"./app-const-Bl9rlHwj.js";import{B as h,Qr as g,Xr as _,bt as v,mr as y,zn as b}from"./dialog-BebLzVzY.js";import{Ct as x,D as S,_t as ee,a as C,b as w,ht as te,l as ne,t as T,tt as re,xt as E}from"./es-CVJR_g25.js";import{It as ie,Ka as ae,O as oe,Xh as se,b_ as ce,er as le,ng as ue,x as D}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as de,Q as O,R as fe,W as pe,i as k,t as A}from"./base-ui-BAv0gRbN.js";import{$r as me,Fi as he,Or as ge,t as j,zt as _e}from"./es-LELdnrjB.js";import{mn as ve,p as ye,pn as be,u as xe}from"./serverConfig-CmLVLry1.js";import{a as Se,s as Ce,v as we,y as Te}from"./swrKeys-B4sicPWZ.js";import{f as M,n as Ee,s as N,u as De}from"./client-BE8DoWhQ.js";import{Do as Oe,Eo as ke}from"./index-Djd-5Nq9.js";import{t as Ae}from"./es-D_vcp-72.js";import{n as je,r as Me}from"./forbiddenError-DkI1toKj.js";import{n as Ne,t as Pe}from"./SettingHeader-C2vRf8tn.js";var Fe,P,Ie,Le,F,Re,ze,Be=e((()=>{j(),T(),Fe=t(p()),P=t(f()),Ie=600,Le=4,F=C(({css:e,cssVar:t})=>({body:e`
    overflow-x: auto;
  `,clickableRow:e`
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: -2px;
    }
  `,container:e`
    container-type: inline-size;
  `,table:e`
    border-collapse: collapse;
    width: 100%;
    min-width: max-content;
    font-size: 13px;

    th,
    td {
      padding-block: 8px;
      padding-inline: 8px;
      text-align: start;
      vertical-align: middle;
    }

    thead th {
      font-weight: 500;
      color: ${t.colorTextSecondary};
      white-space: nowrap;
      background: ${t.colorFillQuaternary};
    }

    tr {
      th:first-child,
      td:first-child {
        padding-inline-start: 24px;
      }

      th:last-child,
      td:last-child {
        padding-inline-end: 24px;
      }
    }

    tbody tr:hover {
      background: ${t.colorFillQuaternary};
    }

    @container (max-width: ${Ie}px) {
      display: block;
      min-width: 0;

      thead {
        display: none;
      }

      tbody {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-inline: 16px;
      }

      tbody tr {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;

        padding-block: 4px 8px;
        padding-inline: 16px;
        border: 1px solid ${t.colorBorderSecondary};
        border-radius: ${t.borderRadiusLG};

        &:hover {
          background: transparent;
        }
      }

      td {
        display: flex;
        grid-column: 1 / -1;
        gap: 16px;
        align-items: center;
        justify-content: space-between;

        padding-block: 6px;
        padding-inline: 0 !important;
      }

      td[data-label]::before {
        content: attr(data-label);
        flex-shrink: 0;
        color: ${t.colorTextSecondary};
      }

      td:not([data-label], [data-list-slot]) {
        justify-content: flex-end;
      }

      td[data-list-slot='title'] {
        grid-column: 1;
        grid-row: 1;
        justify-content: flex-start;

        padding-block: 8px;
        border-block-end: 1px solid ${t.colorBorderSecondary};

        font-size: 14px;
        font-weight: 600;
      }

      td[data-list-slot='extra'] {
        grid-column: 2;
        grid-row: 1;
        justify-content: flex-end;

        padding-block: 8px;
        border-block-end: 1px solid ${t.colorBorderSecondary};
      }

      td[data-list-slot='actions'] {
        justify-content: flex-end;
      }
    }
  `})),Re=({className:e,columns:t,dataSource:n,emptyText:r,loading:i,onRowClick:a,rowKey:o})=>{let s=n??[],c=!!i&&s.length===0,l=e=>e.listSlot||e.listLabel===!1?void 0:e.listLabel??(typeof e.title==`string`?e.title:void 0);return(0,P.jsx)(`div`,{"aria-busy":c,className:ne(F.container,e),children:!c&&s.length===0?r:(0,P.jsx)(`div`,{className:F.body,children:(0,P.jsxs)(`table`,{className:F.table,children:[(0,P.jsx)(`thead`,{children:(0,P.jsx)(`tr`,{children:t.map(e=>(0,P.jsx)(`th`,{style:{width:e.width},children:e.title},e.key))})}),(0,P.jsx)(`tbody`,{children:c?Array.from({length:Le},(e,n)=>(0,P.jsx)(`tr`,{children:t.map(e=>(0,P.jsx)(`td`,{"data-label":l(e),"data-list-slot":e.listSlot,children:(0,P.jsx)(_e.Button,{active:!0,size:`small`,style:{height:14,minWidth:0,width:`100%`}})},e.key))},n)):s.map((e,n)=>(0,P.jsx)(`tr`,{className:a?F.clickableRow:void 0,tabIndex:a?0:void 0,onClick:a?()=>a(e):void 0,onKeyDown:a?t=>{t.target===t.currentTarget&&(t.key!==`Enter`&&t.key!==` `||(t.preventDefault(),a(e)))}:void 0,children:t.map(t=>(0,P.jsx)(`td`,{"data-label":l(t),"data-list-slot":t.listSlot,children:t.render(e,n)},t.key))},o(e)))})]})})})},ze=(0,Fe.memo)(Re)})),I,Ve,He,Ue=e((()=>{I=t(p()),Ve=(0,I.createContext)({canCreate:!0,isAdmin:!1,memberCreation:`all_members`}),He=()=>(0,I.useContext)(Ve)})),L,R,We,Ge,Ke,qe=e((()=>{j(),A(),T(),D(),a(),L=t(f()),R=C(({css:e,cssVar:t})=>({disabled:e`
    pointer-events: none;
    opacity: 0.45;
  `,fullAccessRow:e`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;

    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 16px;

    /* same card treatment as the full-access row so the whole Scope block
       reads as one system */
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,grantCheck:e`
    flex: none;
    color: ${t.colorSuccess};
  `,grantList:e`
    padding-block: 4px;
    padding-inline: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,grantRow:e`
    padding-block: 12px;
    border-block-end: 1px solid ${t.colorBorderSecondary};

    &:last-child {
      border-block-end: none;
    }
  `,groupTitle:e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,scopeRow:e`
    flex-wrap: wrap;

    /* keep each label on one line; overflowing items wrap as a whole */
    .ant-checkbox-wrapper {
      align-items: center;
      white-space: nowrap;

      /* antd offsets the box against the first text line (top: 0.2em /
         flex-start); with this theme's box size that sinks it below the
         label's midline — pin it back to true center */
      .ant-checkbox {
        inset-block-start: 0;
        align-self: center;
      }
    }
  `})),We=[{key:`agent`,label:`apikey.scopes.groups.agent`,read:`agent:read`,write:`agent:write`},{key:`chat`,label:`apikey.scopes.groups.chat`,read:`chat:read`,write:`chat:write`},{key:`model`,label:`apikey.scopes.groups.model`,read:`model:read`,write:`model:write`},{key:`file`,label:`apikey.scopes.groups.file`,read:`file:read`,write:`file:write`},{key:`knowledge`,label:`apikey.scopes.groups.knowledge`,read:`knowledge:read`,write:`knowledge:write`},{key:`mcp`,label:`apikey.scopes.groups.mcp`,read:`mcp:read`,write:`mcp:write`},{key:`usage`,label:`apikey.scopes.groups.usage`,read:`usage:read`},{key:`workspace`,label:`apikey.scopes.groups.workspace`,read:`workspace:read`,write:`workspace:write`},{key:`user`,label:`apikey.scopes.groups.user`,read:`user:read`,write:`user:write`}],Ge=({scopes:e})=>{let{t}=o(`auth`),n=new Set(e),r=t(`apikey.scopes.separator`),i=We.flatMap(e=>{let r=[n.has(e.read)&&t(`apikey.scopes.read`),e.write&&n.has(e.write)&&t(`apikey.scopes.write`),e.key===`model`&&n.has(`model:invoke`)&&t(`apikey.scopes.invoke`)].filter(Boolean);return r.length>0?[{actions:r,key:e.key,label:t(e.label)}]:[]});return i.length===0?(0,L.jsx)(k,{type:`secondary`,children:t(`apikey.scopes.none`)}):(0,L.jsx)(g,{className:R.grantList,children:i.map(e=>(0,L.jsxs)(g,{horizontal:!0,align:`center`,className:R.grantRow,gap:10,children:[(0,L.jsx)(ue,{className:R.grantCheck,size:16}),(0,L.jsxs)(`span`,{style:{fontSize:13},children:[(0,L.jsx)(`strong`,{children:e.label}),t(`apikey.scopes.grantJoin`),e.actions.join(r)]})]},e.key))})},Ke=({fullAccess:e,onFullAccessChange:t,onSelectedChange:n,selected:r})=>{let{t:i}=o(`auth`),a=new Set(r),s=(e,t)=>{let r=new Set(a);t?(r.add(e),e.endsWith(`:write`)&&r.add(e.replace(/:write$/,`:read`))):(r.delete(e),e.endsWith(`:read`)&&r.delete(e.replace(/:read$/,`:write`))),n([...r])};return(0,L.jsxs)(g,{gap:12,children:[(0,L.jsxs)(`div`,{className:R.fullAccessRow,children:[(0,L.jsxs)(g,{gap:2,children:[(0,L.jsx)(k,{style:{fontSize:14},children:i(`apikey.form.fields.scopes.fullAccess`)}),(0,L.jsx)(k,{style:{fontSize:12},type:`secondary`,children:i(`apikey.form.fields.scopes.fullAccessDescription`)})]}),(0,L.jsx)(b,{checked:e,onChange:t})]}),(0,L.jsx)(`div`,{className:e?R.disabled:void 0,children:(0,L.jsx)(g,{gap:10,children:(0,L.jsx)(`div`,{className:R.grid,children:We.map(t=>(0,L.jsxs)(g,{gap:4,children:[(0,L.jsx)(`span`,{className:R.groupTitle,children:i(t.label)}),(0,L.jsxs)(g,{horizontal:!0,className:R.scopeRow,gap:12,children:[(0,L.jsx)(O,{checked:a.has(t.read),disabled:e,onChange:e=>s(t.read,e),children:i(`apikey.scopes.read`)}),t.write&&(0,L.jsx)(O,{checked:a.has(t.write),disabled:e,onChange:e=>t.write&&s(t.write,e),children:i(`apikey.scopes.write`)}),t.key===`model`&&(0,L.jsx)(O,{checked:a.has(`model:invoke`),disabled:e,onChange:e=>s(`model:invoke`,e),children:i(`apikey.scopes.modelInvoke`)})]})]},t.key))})})})]})}})),Je,z,Ye,Xe=e((()=>{Ae(),A(),w(),Je=t(p()),a(),z=t(f()),Ye=({apiKey:e})=>{let{t}=o(`auth`),[n,r]=(0,Je.useState)(!1),i=()=>{r(!n)},a=async()=>{if(e)try{await navigator.clipboard.writeText(e),h.success(t(`apikey.display.copySuccess`))}catch{h.error(t(`apikey.display.copyError`))}},s=e?e.lastIndexOf(`-`)+1:0,c=e&&(n?e:`${e.slice(0,s)}${`*`.repeat(e.length-s)}`);return e?(0,z.jsxs)(x,{align:`center`,gap:8,children:[(0,z.jsx)(`span`,{style:{fontSize:`14px`},children:c}),(0,z.jsxs)(x,{children:[(0,z.jsx)(y,{icon:n?(0,z.jsx)(ee,{}):(0,z.jsx)(te,{}),size:`small`,title:t(n?`apikey.display.hide`:`apikey.display.show`),type:`text`,onClick:i}),(0,z.jsx)(y,{icon:(0,z.jsx)(S,{}),size:`small`,title:t(`apikey.display.copy`),type:`text`,onClick:a})]})]}):t(`apikey.display.autoGenerated`)}})),Ze,B,Qe,$e=e((()=>{j(),w(),Ze=t(n()),a(),B=t(f()),Qe=({value:e,onChange:t,...n})=>{let{t:r}=o(`auth`),i=e=>{let n=Array.isArray(e)?e[0]:e,r=n?n.hour(23).minute(59).second(59).millisecond(999):null;t?.(r)};return(0,B.jsx)(he,{value:e,...n,minDate:(0,Ze.default)(),placeholder:r(`apikey.form.fields.expiresAt.placeholder`),showNow:!1,renderExtraFooter:()=>(0,B.jsx)(x,{justify:`center`,children:(0,B.jsx)(`a`,{role:`button`,style:{cursor:`pointer`},tabIndex:0,onClick:()=>i(null),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i(null))},children:r(`apikey.display.neverExpires`)})}),onChange:i},e?.valueOf()||`EMPTY`)}})),V,H,et,tt=e((()=>{j(),A(),w(),V=t(p()),a(),m(),$e(),qe(),H=t(f()),et=({onSubmit:e})=>{let{t}=o(`auth`),{close:n}=fe(),[r]=E.useForm(),[i,a]=(0,V.useState)(!1),[s,c]=(0,V.useState)(!0),[l,u]=(0,V.useState)([]),d=!s&&l.length===0,f=async t=>{if(!d){a(!0);try{await e({...t,expiresAt:t.expiresAt?t.expiresAt.toDate():null,scopes:s?[`*`]:l}),n()}finally{a(!1)}}},p={marginBottom:0};return(0,H.jsx)(E,{colon:!1,form:r,layout:`vertical`,onFinish:f,children:(0,H.jsxs)(g,{gap:16,children:[(0,H.jsx)(E.Item,{label:t(`apikey.form.fields.name.label`),name:`name`,rules:[{required:!0}],style:p,children:(0,H.jsx)(me,{placeholder:t(`apikey.form.fields.name.placeholder`)})}),(0,H.jsx)(E.Item,{label:t(`apikey.form.fields.expiresAt.label`),name:`expiresAt`,style:p,children:(0,H.jsx)(Qe,{style:{width:`100%`}})}),(0,H.jsx)(E.Item,{help:d?t(`apikey.form.fields.scopes.required`):void 0,label:t(`apikey.form.fields.scopes.label`),style:p,validateStatus:d?`error`:void 0,children:(0,H.jsx)(Ke,{fullAccess:s,selected:l,onFullAccessChange:c,onSelectedChange:u})}),(0,H.jsx)(y,{block:!0,disabled:d,htmlType:`submit`,loading:i,type:`primary`,children:t(`apikey.form.submit`)})]})})}})),nt,rt,it=e((()=>{A(),r(),tt(),nt=t(f()),rt=e=>de({content:(0,nt.jsx)(et,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:i(`apikey.form.title`,{ns:`auth`}),width:`min(90vw, 560px)`})})),U,W,G,K,q,at=e((()=>{j(),A(),T(),U=t(n()),D(),W=t(p()),a(),$e(),G=t(f()),K=C(({css:e,cssVar:t})=>({actionButtons:e`
    display: flex;
    flex-shrink: 0;
    gap: 4px;
  `,container:e`
    position: relative;

    display: flex;
    gap: 8px;
    align-items: center;

    min-height: 32px;

    &:hover .edit-button {
      opacity: 1;
    }
  `,content:e`
    min-width: 0;
    line-height: 1.5;
    color: ${t.colorText};
    word-break: break-all;
  `,editButton:e`
    opacity: 0;
    transition: opacity 0.2s ease;

    &.edit-button {
      opacity: 0;
    }
  `,editingContainer:e`
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  `,inputWrapper:e`
    flex: 1;
  `,textareaWrapper:e`
    flex: 1;
  `})),q=(0,W.memo)(({value:e,type:t,onSubmit:n,placeholder:r,disabled:i=!1})=>{let{t:a}=o(`auth`),[s,c]=(0,W.useState)(!1),l=(0,W.useRef)(null),u=e=>{if(t===`date`&&e){let t=(0,U.default)(e);return t.isValid()?t.format(`YYYY-MM-DD`):e||r||``}return e||r||``},d=()=>{i||c(!0)},f=()=>{if(t===`text`){let e=l.current?.input?.value;if(!e){h.warning(a(`apikey.validation.required`));return}n(e)}c(!1)},p=()=>{c(!1)},m=e=>{e.key===`Enter`?(e.preventDefault(),f()):e.key===`Escape`&&(e.preventDefault(),p())},g=e=>{n(e&&(0,U.default)(e).toISOString()),c(!1)},_=()=>{switch(t){case`text`:return(0,G.jsx)(`div`,{className:K.inputWrapper,children:(0,G.jsx)(me,{autoFocus:!0,defaultValue:e,placeholder:r,ref:l,onKeyDown:m})});case`date`:return(0,G.jsx)(Qe,{defaultValue:e&&(0,U.default)(e).isValid()?(0,U.default)(e):null,open:!0,onChange:g,onOpenChange:()=>{s&&c(!1)}});default:return null}};return t===`text`&&s?(0,G.jsxs)(`div`,{className:K.editingContainer,children:[_(),(0,G.jsxs)(`div`,{className:K.actionButtons,children:[(0,G.jsx)(v,{icon:ue,size:`small`,onClick:f}),(0,G.jsx)(v,{icon:oe,size:`small`,onClick:p})]})]}):t===`date`&&s?_():(0,G.jsxs)(`div`,{className:K.container,children:[(0,G.jsx)(`div`,{className:K.content,children:u(e)}),(0,G.jsx)(v,{className:ne(K.editButton,`edit-button`),icon:le,size:`small`,onClick:d})]})}),q.displayName=`EditableCell`})),ot=e((()=>{Xe(),it(),at()})),J,Y,X,st,ct,lt=e((()=>{j(),A(),w(),T(),D(),J=t(p()),a(),m(),qe(),ot(),Y=t(f()),X=C(({css:e,cssVar:t})=>({fullAccessCard:e`
    padding: 12px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
  `,label:e`
    flex: none;
    width: 96px;
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,metaRow:e`
    display: flex;
    gap: 16px;
    align-items: center;
    min-height: 28px;
  `,sectionTitle:e`
    font-size: 13px;
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,value:e`
    overflow: hidden;
    display: flex;
    align-items: center;
    font-size: 13px;
  `})),st=({apiKey:e,canEdit:t,onUpdate:n})=>{let{t:r}=o(`auth`),i=l(e.scopes),[a,s]=(0,J.useState)(!1),[c,u]=(0,J.useState)(!1),[d,f]=(0,J.useState)(i),[p,m]=(0,J.useState)(i?[]:e.scopes),h=!d&&p.length===0;return a?(0,Y.jsxs)(g,{gap:12,children:[(0,Y.jsx)(Ke,{fullAccess:d,selected:p,onFullAccessChange:f,onSelectedChange:m}),(0,Y.jsxs)(g,{horizontal:!0,gap:8,justify:`flex-end`,children:[(0,Y.jsx)(y,{type:`text`,onClick:()=>{f(i),m(i?[]:e.scopes),s(!1)},children:r(`apikey.detail.permissions.cancel`)}),(0,Y.jsx)(y,{disabled:h,loading:c,type:`primary`,onClick:async()=>{u(!0);try{await n(e.id,{scopes:d?[`*`]:p})&&s(!1)}catch{}finally{u(!1)}},children:r(`apikey.detail.permissions.save`)})]})]}):(0,Y.jsxs)(g,{gap:8,children:[i?(0,Y.jsxs)(g,{className:X.fullAccessCard,gap:2,children:[(0,Y.jsx)(k,{style:{fontSize:14},children:r(`apikey.scopes.fullAccess`)}),(0,Y.jsx)(k,{style:{fontSize:12},type:`secondary`,children:r(`apikey.form.fields.scopes.fullAccessDescription`)})]}):(0,Y.jsx)(Ge,{scopes:e.scopes}),t&&(0,Y.jsx)(g,{horizontal:!0,justify:`flex-end`,children:(0,Y.jsx)(y,{icon:ae,type:`text`,onClick:()=>s(!0),children:r(`apikey.detail.permissions.edit`)})})]})},ct=({apiKey:e,canDelete:t,canEdit:n,manageTooltip:r,onClose:i,onDelete:a,onUpdate:s,open:c})=>{let{t:l}=o(`auth`);return(0,Y.jsx)(pe,{open:c,placement:`right`,title:l(`apikey.detail.title`),width:`min(92vw, 520px)`,onClose:i,children:e&&(0,Y.jsxs)(g,{gap:24,children:[(0,Y.jsxs)(g,{gap:4,children:[(0,Y.jsxs)(`div`,{className:X.metaRow,children:[(0,Y.jsx)(`span`,{className:X.label,children:l(`apikey.list.columns.name`)}),(0,Y.jsx)(`span`,{className:X.value,children:(0,Y.jsx)(q,{disabled:!n,placeholder:l(`apikey.display.enterPlaceholder`),type:`text`,value:e.name,onSubmit:t=>{!n||!t||t===e.name||s(e.id,{name:t})}})})]}),(0,Y.jsxs)(`div`,{className:X.metaRow,children:[(0,Y.jsx)(`span`,{className:X.label,children:l(`apikey.list.columns.key`)}),(0,Y.jsx)(`span`,{className:X.value,children:e.isMine===!1?(0,Y.jsx)(`span`,{style:{opacity:.5},children:`sk-lh-${`*`.repeat(12)}`}):e.keyDecryptionFailed?(0,Y.jsx)(`span`,{title:l(`apikey.display.unavailableDescription`),children:l(`apikey.display.unavailable`)}):(0,Y.jsx)(Ye,{apiKey:e.key})})]}),e.creator&&(0,Y.jsxs)(`div`,{className:X.metaRow,children:[(0,Y.jsx)(`span`,{className:X.label,children:l(`apikey.list.columns.creator`)}),(0,Y.jsx)(`span`,{className:X.value,children:e.creator})]}),(0,Y.jsxs)(`div`,{className:X.metaRow,children:[(0,Y.jsx)(`span`,{className:X.label,children:l(`apikey.detail.createdAt`)}),(0,Y.jsx)(`span`,{className:X.value,children:e.createdAt.toLocaleString()})]}),(0,Y.jsxs)(`div`,{className:X.metaRow,children:[(0,Y.jsx)(`span`,{className:X.label,children:l(`apikey.list.columns.lastUsedAt`)}),(0,Y.jsx)(`span`,{className:X.value,children:e.lastUsedAt?.toLocaleString()||l(`apikey.display.neverUsed`)})]}),(0,Y.jsxs)(`div`,{className:X.metaRow,children:[(0,Y.jsx)(`span`,{className:X.label,children:l(`apikey.list.columns.expiresAt`)}),(0,Y.jsx)(`span`,{className:X.value,children:(0,Y.jsx)(q,{disabled:!n,placeholder:l(`apikey.display.neverExpires`),type:`date`,value:e.expiresAt?.toLocaleString()||l(`apikey.display.neverExpires`),onSubmit:t=>{!n||t===e.expiresAt||s(e.id,{expiresAt:t?new Date(t):null})}})})]}),(0,Y.jsxs)(`div`,{className:X.metaRow,children:[(0,Y.jsx)(`span`,{className:X.label,children:l(`apikey.list.columns.status`)}),(0,Y.jsx)(`span`,{className:X.value,title:n?void 0:r,children:(0,Y.jsx)(b,{checked:!!e.enabled,disabled:!n,onChange:t=>{n&&s(e.id,{enabled:t})}})})]})]}),(0,Y.jsxs)(g,{gap:8,children:[(0,Y.jsx)(`span`,{className:X.sectionTitle,children:l(`apikey.form.fields.scopes.label`)}),(0,Y.jsx)(st,{apiKey:e,canEdit:n,onUpdate:s},`${e.id}-${e.updatedAt.toISOString()}`)]}),(0,Y.jsx)(g,{horizontal:!0,justify:`flex-end`,children:(0,Y.jsx)(re,{cancelText:l(`apikey.list.actions.deleteConfirm.actions.cancel`),description:l(`apikey.list.actions.deleteConfirm.content`),okButtonProps:{disabled:!t},okText:l(`apikey.list.actions.deleteConfirm.actions.ok`),title:l(`apikey.list.actions.deleteConfirm.title`),onConfirm:async()=>{t&&await a(e.id)},children:(0,Y.jsx)(y,{danger:!0,disabled:!t,icon:ie,title:t?l(`apikey.list.actions.delete`):r,type:`text`,children:l(`apikey.list.actions.delete`)})})})]})})}})),ut,Z,Q,dt,ft=e((()=>{u(),j(),A(),De(),T(),D(),ut=t(p()),a(),d(),we(),Be(),ke(),Se(),s(),Ee(),xe(),be(),je(),Ue(),lt(),ot(),Z=t(f()),Q=C(({css:e,cssVar:t})=>({container:e`
    overflow: hidden;
    padding-block: 16px;
    border-radius: ${t.borderRadius};
    background: ${t.colorBgContainer};
  `,enterIcon:e`
    color: ${t.colorTextQuaternary};
    transition: color 0.2s ease;

    tr:hover & {
      color: ${t.colorText};
    }
  `,header:e`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;

    padding-block-end: 16px;
    padding-inline: 24px;
  `,nameLink:e`
    font-weight: 500;

    tr:hover & {
      color: ${t.colorLink};
    }
  `})),dt=()=>{let{t:e}=o(`auth`),{t}=o(`common`),n=Te(),r=He(),{allowed:i,reason:a}=Oe(`create_content`);ye(ve.remoteServerUrl);let s=i&&(!n||r.canCreate),l=!!n&&!r.isAdmin&&!r.canCreate,u=t(`manageOnlyCreator`,`Only the creator or a workspace owner can do this`),d=r.canCreate?a:e(`apikey.list.actions.creationRestricted`),{data:f,isLoading:p,mutate:m}=Ce(c.list(),()=>N.apiKey.getApiKeys.query()),[v,b]=(0,ut.useState)(),x=v?f?.find(e=>e.id===v):void 0,S=e=>{h.error(Me(e)?u:t(`operationFailed`,`Operation failed, please try again`))},ee=M({mutationFn:e=>N.apiKey.createApiKey.mutate(e),onError:S,onSuccess:()=>{m()}}),C=M({mutationFn:({id:e,params:t})=>N.apiKey.updateApiKey.mutate({id:e,value:t}),onError:S,onSuccess:()=>{m()}}),w=M({mutationFn:e=>N.apiKey.deleteApiKey.mutate({id:e}),onError:S,onSuccess:()=>{m()}}),te=()=>{s&&rt({onSubmit:async e=>{await ee.mutateAsync(e)}})},ne=[{key:`name`,listSlot:`title`,render:e=>(0,Z.jsx)(`span`,{className:Q.nameLink,children:e.name}),title:e(`apikey.list.columns.name`)},{key:`key`,render:t=>(0,Z.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:t.isMine===!1?(0,Z.jsx)(`span`,{style:{opacity:.5},children:`sk-lh-${`*`.repeat(12)}`}):t.keyDecryptionFailed?(0,Z.jsx)(`span`,{title:e(`apikey.display.unavailableDescription`),children:e(`apikey.display.unavailable`)}):(0,Z.jsx)(Ye,{apiKey:t.key})}),title:e(`apikey.list.columns.key`),width:230},...n&&r.isAdmin?[{key:`creator`,render:e=>e.creator||`-`,title:e(`apikey.list.columns.creator`),width:140}]:[],{key:`expiresAt`,render:t=>t.expiresAt?.toLocaleString()||e(`apikey.display.neverExpires`),title:e(`apikey.list.columns.expiresAt`),width:170},{key:`lastUsedAt`,render:t=>t.lastUsedAt?.toLocaleString()||e(`apikey.display.neverUsed`),title:e(`apikey.list.columns.lastUsedAt`)},{key:`enter`,render:()=>(0,Z.jsx)(se,{className:Q.enterIcon,size:16}),title:``,width:40}];return(0,Z.jsxs)(`div`,{className:Q.container,children:[(0,Z.jsxs)(`div`,{className:Q.header,children:[(0,Z.jsx)(k,{as:`h3`,style:{fontSize:16,fontWeight:500,margin:0},children:e(`apikey.list.title`)}),(0,Z.jsxs)(g,{horizontal:!0,gap:8,children:[(0,Z.jsx)(y,{href:`/api/v1/docs`,icon:ce,target:`_blank`,type:`text`,children:e(`apikey.list.actions.viewDocs`)}),(0,Z.jsx)(y,{disabled:!s,title:s?void 0:d,type:`primary`,onClick:te,children:e(`apikey.list.actions.create`)})]})]}),(0,Z.jsx)(ze,{columns:ne,dataSource:f,loading:p,rowKey:e=>e.id,emptyText:(0,Z.jsx)(_,{height:240,width:`100%`,children:(0,Z.jsx)(ge,{description:e(l?`apikey.list.restrictedEmpty.desc`:`apikey.list.empty`),title:l?e(`apikey.list.restrictedEmpty.title`):void 0})}),onRowClick:e=>b(e.id)}),(0,Z.jsx)(ct,{apiKey:x,canEdit:i&&!!x&&x.isMine!==!1,manageTooltip:i?u:a??u,open:!!x,canDelete:i&&!!x&&(x.isMine!==!1||r.isAdmin),onClose:()=>b(void 0),onDelete:async e=>{await w.mutateAsync(e),b(void 0)},onUpdate:async(e,t)=>{try{return await C.mutateAsync({id:e,params:t}),!0}catch{return!1}}})]})}})),$,pt,mt=e((()=>{a(),Ne(),ft(),$=t(f()),pt=({showSettingHeader:e=!0})=>{let{t}=o(`setting`);return(0,$.jsxs)($.Fragment,{children:[e&&(0,$.jsx)(Pe,{title:t(`tab.apikey`)}),(0,$.jsx)(dt,{})]})}}));mt();export{pt as default,mt as t};