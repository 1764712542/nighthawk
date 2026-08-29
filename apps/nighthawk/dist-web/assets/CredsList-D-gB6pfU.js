import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Hr as l,Qr as u,St as d,ht as f,mr as p}from"./dialog-BebLzVzY.js";import{T as m,U as h,a as g,b as _,jt as v,l as ee,lt as te,pn as y,pt as b,qt as ne,t as x,vn as re,x as ie,xt as S}from"./es-CVJR_g25.js";import{Jn as ae,Ka as oe,Pl as se,Qu as ce,Rt as le,bc as ue,bf as de,bs as fe,fp as pe,mp as me,wa as he,wp as ge,x as C}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as w,P as _e,R as ve,c as ye,ct as T,et as be,t as E,x as xe}from"./base-ui-BAv0gRbN.js";import{Li as Se,t as D}from"./es-LELdnrjB.js";import{C as Ce,c as we,f as O,m as Te,n as Ee,s as De,u as k,w as Oe}from"./client-BE8DoWhQ.js";import{Do as A,Eo as j,go as ke,yo as Ae}from"./index-Djd-5Nq9.js";import{i as je,t as Me}from"./es-D_vcp-72.js";import{n as Ne,t as Pe}from"./AsyncBoundary-CzRTtM14.js";import{n as Fe,t as Ie}from"./ListSkeleton-Dl8qN_d-.js";var M,N,Le,Re,ze=e((()=>{D(),_(),x(),C(),i(),M=t(o()),N=g(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: ${t.colorPrimary};
      box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    }
  `,cardDisabled:e`
    cursor: not-allowed;
    opacity: 0.5;
  `,description:e`
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  `,icon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    margin-block-end: 12px;
    border-radius: 12px;

    background: ${t.colorFillSecondary};
  `,title:e`
    margin-block-end: 4px;
    font-weight: 500;
  `})),Le=[{description:`creds.typeDesc.kv-env`,icon:(0,M.jsx)(ae,{size:24}),type:`kv-env`},{description:`creds.typeDesc.kv-header`,icon:(0,M.jsx)(ce,{size:24}),type:`kv-header`},{description:`creds.typeDesc.oauth`,icon:(0,M.jsx)(se,{size:24}),type:`oauth`},{description:`creds.typeDesc.file`,icon:(0,M.jsx)(de,{size:24}),type:`file`}],Re=({disabled:e,onSelect:t})=>{let{t:n}=a(`setting`);return(0,M.jsx)(`div`,{className:N.grid,children:Le.map(({type:r,icon:i,description:a})=>(0,M.jsx)(ne,{className:`${N.card} ${e?N.cardDisabled:``}`,size:`small`,onClick:()=>{e||t(r)},children:(0,M.jsxs)(u,{align:`center`,children:[(0,M.jsx)(`div`,{className:N.icon,children:i}),(0,M.jsx)(`div`,{className:N.title,children:n(`creds.types.${r}`)}),(0,M.jsx)(`div`,{className:N.description,children:n(a)})]})},r))})}})),P,F,Be,Ve,He=e((()=>{Me(),E(),k(),_(),x(),P=t(s()),i(),F=t(o()),Be=g(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `})),Ve=({credsApi:e,disabled:t,onBack:n,onSuccess:r})=>{let{t:i}=a(`setting`),[o]=S.useForm(),[s,l]=(0,P.useState)(null),[u,d]=(0,P.useState)(``),[f,m]=(0,P.useState)(!1),h=O({mutationFn:async n=>{if(!t){if(!s||!u)throw Error(`File is required`);await e.client.createFile.mutate({description:n.description,fileHashId:s,fileName:u,key:n.key,name:n.name})}},onSuccess:()=>{r()}});return(0,F.jsxs)(S,{form:o,layout:`vertical`,onFinish:e=>{if(!t){if(!s){c.error(i(`creds.form.fileRequired`));return}h.mutate(e)}},children:[(0,F.jsxs)(S.Item,{required:!0,label:i(`creds.form.file`),children:[(0,F.jsxs)(ie.Dragger,{beforeUpload:async n=>{if(t)return!1;m(!0);try{let t=await n.arrayBuffer(),r=new Uint8Array(t),a=``;for(let e=0;e<r.byteLength;e++)a+=String.fromCharCode(r[e]);let o=btoa(a),s=await e.client.uploadFile.mutate({file:o,fileName:n.name,fileType:n.type||`application/octet-stream`});d(s.fileName),l(s.fileHashId),c.success(i(`creds.file.uploadSuccess`))}catch(e){console.error(`[FileCredForm] Upload failed:`,e),c.error(e instanceof Error?e.message:i(`creds.file.uploadFailed`))}finally{m(!1)}return!1},disabled:f||t,maxCount:1,showUploadList:u?{showRemoveIcon:!0}:!1,onRemove:()=>{l(null),d(``)},children:[(0,F.jsx)(`p`,{className:`ant-upload-drag-icon`,children:(0,F.jsx)(je,{})}),(0,F.jsx)(`p`,{className:`ant-upload-text`,children:i(f?`creds.file.uploading`:`creds.form.uploadHint`)}),(0,F.jsx)(`p`,{className:`ant-upload-hint`,children:i(`creds.form.uploadDesc`)})]}),u&&(0,F.jsxs)(`div`,{style:{marginTop:8},children:[i(`creds.form.selectedFile`),`: `,u]})]}),(0,F.jsx)(S.Item,{label:i(`creds.form.key`),name:`key`,rules:[{required:!0,message:i(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:i(`creds.form.keyPattern`)}],children:(0,F.jsx)(b,{disabled:t,placeholder:`e.g., gcp-service-account`})}),(0,F.jsx)(S.Item,{label:i(`creds.form.name`),name:`name`,rules:[{required:!0,message:i(`creds.form.nameRequired`)}],children:(0,F.jsx)(b,{disabled:t,placeholder:`e.g., GCP Service Account`})}),(0,F.jsx)(S.Item,{label:i(`creds.form.description`),name:`description`,children:(0,F.jsx)(b.TextArea,{disabled:t,placeholder:i(`creds.form.descriptionPlaceholder`),rows:2})}),(0,F.jsxs)(`div`,{className:Be.footer,children:[(0,F.jsx)(p,{onClick:n,children:i(`creds.form.back`)}),(0,F.jsx)(p,{disabled:!s||t,htmlType:`submit`,loading:h.isPending,type:`primary`,children:i(`creds.form.submit`)})]})]})}})),I,L,Ue,We=e((()=>{D(),E(),k(),_(),x(),C(),i(),I=t(o()),L=g(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,kvPair:e`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `})),Ue=({credsApi:e,type:t,disabled:n,onBack:r,onSuccess:i})=>{let{t:o}=a(`setting`),[s]=S.useForm(),c=O({mutationFn:async r=>{if(n)return;let i=(r.kvPairs||[]).reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{});await e.client.createKV.mutate({description:r.description,key:r.key,name:r.name,type:t,values:i})},onSuccess:()=>{i()}});return(0,I.jsxs)(S,{form:s,initialValues:{kvPairs:[{key:``,value:``}]},layout:`vertical`,onFinish:e=>{n||c.mutate(e)},children:[(0,I.jsx)(S.Item,{label:o(`creds.form.key`),name:`key`,rules:[{required:!0,message:o(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:o(`creds.form.keyPattern`)}],children:(0,I.jsx)(b,{disabled:n,placeholder:`e.g., openai`})}),(0,I.jsx)(S.Item,{label:o(`creds.form.name`),name:`name`,rules:[{required:!0,message:o(`creds.form.nameRequired`)}],children:(0,I.jsx)(b,{disabled:n,placeholder:`e.g., OpenAI API Key`})}),(0,I.jsx)(S.Item,{label:o(`creds.form.values`),children:(0,I.jsx)(S.List,{name:`kvPairs`,children:(e,{add:r,remove:i})=>(0,I.jsxs)(u,{gap:8,children:[e.map(({key:r,name:a,...s})=>(0,I.jsxs)(`div`,{className:L.kvPair,children:[(0,I.jsx)(S.Item,{...s,name:[a,`key`],style:{flex:1,marginBottom:0},children:(0,I.jsx)(b,{disabled:n,placeholder:t===`kv-env`?`ENV_VAR_NAME`:`Header-Name`})}),(0,I.jsx)(S.Item,{...s,name:[a,`value`],style:{flex:2,marginBottom:0},children:(0,I.jsx)(b.Password,{autoComplete:`new-password`,disabled:n,placeholder:o(`creds.form.valuePlaceholder`)})}),e.length>1&&(0,I.jsx)(p,{disabled:n,icon:fe,size:`small`,type:`text`,onClick:()=>i(a)})]},r)),(0,I.jsx)(p,{block:!0,disabled:n,icon:he,type:`dashed`,onClick:()=>r({key:``,value:``}),children:o(`creds.form.addPair`)})]})})}),(0,I.jsx)(S.Item,{label:o(`creds.form.description`),name:`description`,children:(0,I.jsx)(b.TextArea,{disabled:n,placeholder:o(`creds.form.descriptionPlaceholder`),rows:2})}),(0,I.jsxs)(`div`,{className:L.footer,children:[(0,I.jsx)(p,{onClick:r,children:o(`creds.form.back`)}),(0,I.jsx)(p,{disabled:n,htmlType:`submit`,loading:c.isPending,type:`primary`,children:o(`creds.form.submit`)})]})]})}})),R,z,Ge,Ke=e((()=>{D(),E(),k(),_(),x(),i(),R=t(o()),z=g(({css:e,cssVar:t})=>({connectionOption:e`
    display: flex;
    gap: 8px;
    align-items: center;
  `,footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,provider:e`
    font-weight: 500;
  `,username:e`
    color: ${t.colorTextSecondary};
  `})),Ge=({credsApi:e,disabled:t,onBack:n,onSuccess:r})=>{let{t:i}=a(`setting`),[o]=S.useForm(),{data:s,isLoading:c}=e.query.listOAuthConnections.useQuery(),l=s?.connections??[],d=l.map(e=>{let t=e.providerId||`OAuth`,n=e.providerName||e.providerUserName||e.email||e.name;return{label:(0,R.jsxs)(`span`,{className:z.connectionOption,children:[e.avatar&&(0,R.jsx)(be,{avatar:e.avatar,size:24}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`span`,{className:z.provider,children:t}),n&&(0,R.jsxs)(`span`,{className:z.username,children:[` - `,n]})]})]}),title:[t,n].filter(Boolean).join(` `),value:e.id}}),f=O({mutationFn:async n=>{t||await e.client.createOAuth.mutate({description:n.description,key:n.key,name:n.name,oauthConnectionId:n.oauthConnectionId})},onSuccess:()=>{r()}});return c?(0,R.jsx)(u,{align:`center`,justify:`center`,style:{padding:48},children:(0,R.jsx)(te,{})}):l.length===0?(0,R.jsxs)(u,{gap:16,children:[(0,R.jsx)(y,{description:i(`creds.oauth.noConnections`)}),(0,R.jsx)(`div`,{className:z.footer,children:(0,R.jsx)(p,{onClick:n,children:i(`creds.form.back`)})})]}):(0,R.jsxs)(S,{form:o,layout:`vertical`,onFinish:e=>{t||f.mutate(e)},children:[(0,R.jsx)(S.Item,{label:i(`creds.form.selectConnection`),name:`oauthConnectionId`,rules:[{required:!0,message:i(`creds.form.connectionRequired`)}],children:(0,R.jsx)(xe,{disabled:t,options:d,placeholder:i(`creds.form.selectConnectionPlaceholder`)})}),(0,R.jsx)(S.Item,{label:i(`creds.form.key`),name:`key`,rules:[{required:!0,message:i(`creds.form.keyRequired`)},{pattern:/^[\w-]+$/,message:i(`creds.form.keyPattern`)}],children:(0,R.jsx)(b,{disabled:t,placeholder:`e.g., github-oauth`})}),(0,R.jsx)(S.Item,{label:i(`creds.form.name`),name:`name`,rules:[{required:!0,message:i(`creds.form.nameRequired`)}],children:(0,R.jsx)(b,{disabled:t,placeholder:`e.g., GitHub Connection`})}),(0,R.jsx)(S.Item,{label:i(`creds.form.description`),name:`description`,children:(0,R.jsx)(b.TextArea,{disabled:t,placeholder:i(`creds.form.descriptionPlaceholder`),rows:2})}),(0,R.jsxs)(`div`,{className:z.footer,children:[(0,R.jsx)(p,{onClick:n,children:i(`creds.form.back`)}),(0,R.jsx)(p,{disabled:t,htmlType:`submit`,loading:f.isPending,type:`primary`,children:i(`creds.form.submit`)})]})]})}})),B,V,qe,Je,Ye=e((()=>{E(),_(),x(),B=t(s()),i(),ze(),He(),We(),Ke(),V=t(o()),qe=g(({css:e})=>({steps:e`
    margin-block-end: 24px;
  `})),Je=({credsApi:e,onSuccess:t})=>{let{t:n}=a(`setting`),{close:r}=ve(),[i,o]=(0,B.useState)(0),[s,c]=(0,B.useState)(null),l=e=>{c(e),o(1)},u=()=>{o(0),c(null)},d=()=>{t?.(),r()};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(h,{className:qe.steps,current:i,size:`small`,items:[{title:n(`creds.createModal.selectType`)},{title:n(`creds.createModal.fillForm`)}]}),i===0?(0,V.jsx)(Re,{onSelect:l}):(()=>{switch(s){case`kv-env`:case`kv-header`:return(0,V.jsx)(Ue,{credsApi:e,type:s,onBack:u,onSuccess:d});case`oauth`:return(0,V.jsx)(Ge,{credsApi:e,onBack:u,onSuccess:d});case`file`:return(0,V.jsx)(Ve,{credsApi:e,onBack:u,onSuccess:d});default:return null}})()]})}})),Xe,Ze,Qe=e((()=>{E(),n(),Ye(),Xe=t(o()),Ze=e=>w({content:(0,Xe.jsx)(Je,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:r(`creds.createModal.title`,{ns:`setting`}),width:`min(90vw, 640px)`})})),H,$e=e((()=>{x(),H=g(({css:e,cssVar:t})=>({container:e`
    padding-block: 12px;
    padding-inline: 0;
  `,description:e`
    overflow: hidden;

    font-size: 12px;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,icon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 12px;

    background: ${t.colorFillTertiary};
  `,key:e`
    font-family: monospace;
    font-size: 12px;
    color: ${t.colorTextSecondary};
  `,title:e`
    font-size: 15px;
    font-weight: 500;
    color: ${t.colorText};
  `}))})),et,U,tt,nt,W,rt=e((()=>{D(),E(),C(),et=t(s()),i(),j(),$e(),U=t(o()),tt={file:(0,U.jsx)(de,{size:20}),"kv-env":(0,U.jsx)(ae,{size:20}),"kv-header":(0,U.jsx)(ce,{size:20}),oauth:(0,U.jsx)(se,{size:20})},nt={file:`purple`,"kv-env":`blue`,"kv-header":`cyan`,oauth:`green`},W=(0,et.memo)(({cred:e,extra:t,onEdit:n,onDelete:r,onView:i})=>{let{t:o}=a(`setting`),{allowed:s}=A(`manage_provider_key`),c=()=>{s&&_e({content:o(`creds.actions.deleteConfirm.content`),okButtonProps:{danger:!0},okText:o(`creds.actions.deleteConfirm.ok`),onOk:()=>r?.(e.id),title:o(`creds.actions.deleteConfirm.title`)})},m=s&&(e.type===`kv-env`||e.type===`kv-header`),h=[...i&&m?[{icon:(0,U.jsx)(l,{icon:me}),key:`view`,label:o(`creds.actions.view`),onClick:()=>i(e)}]:[],...n?[{icon:(0,U.jsx)(l,{icon:oe}),key:`edit`,label:o(`creds.actions.edit`),disabled:!s,onClick:()=>n(e)}]:[],...r?[{danger:!0,disabled:!s,icon:(0,U.jsx)(l,{icon:le}),key:`delete`,label:o(`creds.actions.delete`),onClick:c}]:[]];return(0,U.jsxs)(u,{horizontal:!0,align:`center`,className:H.container,gap:16,justify:`space-between`,children:[(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:16,style:{flex:1,overflow:`hidden`},children:[(0,U.jsx)(`div`,{className:H.icon,children:e.type===`oauth`&&e.oauthAvatar?(0,U.jsx)(be,{avatar:e.oauthAvatar,size:32}):(0,U.jsx)(`span`,{style:{color:`var(--lobe-color-text-secondary)`,display:`flex`},children:tt[e.type]})}),(0,U.jsxs)(u,{gap:4,style:{overflow:`hidden`},children:[(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(`span`,{className:H.title,children:e.name}),(0,U.jsx)(ye,{color:nt[e.type],children:o(`creds.types.${e.type}`)}),e.ownerType===`user`&&(0,U.jsx)(ye,{children:o(`creds.owner.sharedBy`,{name:e.ownerDisplayName})})]}),(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(`code`,{className:H.key,children:e.key}),e.description&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{style:{color:`var(--lobe-color-text-quaternary)`},children:`·`}),(0,U.jsx)(`span`,{className:H.description,children:e.description})]})]})]})]}),(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:8,onClick:f,children:[t,h.length>0&&(0,U.jsx)(d,{items:h,placement:`bottomRight`,children:(0,U.jsx)(p,{disabled:!s,icon:ge})})]})]})}),W.displayName=`CredItem`})),G,K,q,it,at=e((()=>{D(),E(),k(),_(),x(),C(),G=t(s()),i(),j(),K=t(o()),q=g(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `,kvPair:e`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `})),it=({cred:e,credsApi:t,onCancel:n,onSuccess:r})=>{let{t:i}=a(`setting`),{allowed:o}=A(`manage_provider_key`),[s]=S.useForm(),[c,l]=(0,G.useState)(!0);(0,G.useEffect)(()=>{(async()=>{if(!o){l(!1);return}try{let n=(await t.client.get.query({decrypt:!0,id:e.id})).plaintext||{},r=Object.entries(n).map(([e,t])=>({key:e,value:t}));s.setFieldsValue({description:e.description,kvPairs:r.length>0?r:[{key:``,value:``}],name:e.name})}catch{s.setFieldsValue({description:e.description,kvPairs:[{key:``,value:``}],name:e.name})}finally{l(!1)}})()},[o,e.id,e.name,e.description,t,s]);let d=O({mutationFn:async n=>{if(!o)return;let r=(n.kvPairs||[]).reduce((e,t)=>(t.key&&t.value&&(e[t.key]=t.value),e),{});await t.client.update.mutate({description:n.description,id:e.id,name:n.name,values:r})},onSuccess:()=>{r()}});return c?(0,K.jsx)(u,{align:`center`,justify:`center`,style:{padding:48},children:(0,K.jsx)(te,{})}):(0,K.jsxs)(S,{form:s,layout:`vertical`,onFinish:e=>{o&&d.mutate(e)},children:[(0,K.jsx)(S.Item,{label:i(`creds.form.name`),name:`name`,rules:[{required:!0,message:i(`creds.form.nameRequired`)}],children:(0,K.jsx)(b,{disabled:!o})}),(0,K.jsx)(S.Item,{label:i(`creds.form.values`),children:(0,K.jsx)(S.List,{name:`kvPairs`,children:(t,{add:n,remove:r})=>(0,K.jsxs)(u,{gap:8,children:[t.map(({key:n,name:a,...s})=>(0,K.jsxs)(`div`,{className:q.kvPair,children:[(0,K.jsx)(S.Item,{...s,name:[a,`key`],style:{flex:1,marginBottom:0},children:(0,K.jsx)(b,{disabled:!o,placeholder:e.type===`kv-env`?`ENV_VAR_NAME`:`Header-Name`})}),(0,K.jsx)(S.Item,{...s,name:[a,`value`],style:{flex:2,marginBottom:0},children:(0,K.jsx)(b.Password,{autoComplete:`new-password`,disabled:!o,placeholder:i(`creds.form.valuePlaceholder`)})}),t.length>1&&(0,K.jsx)(p,{disabled:!o,icon:fe,size:`small`,type:`text`,onClick:()=>r(a)})]},n)),(0,K.jsx)(p,{block:!0,disabled:!o,icon:he,type:`dashed`,onClick:()=>n({key:``,value:``}),children:i(`creds.form.addPair`)})]})})}),(0,K.jsx)(S.Item,{label:i(`creds.form.description`),name:`description`,children:(0,K.jsx)(b.TextArea,{disabled:!o,placeholder:i(`creds.form.descriptionPlaceholder`),rows:2})}),(0,K.jsxs)(`div`,{className:q.footer,children:[(0,K.jsx)(p,{onClick:n,children:i(`creds.form.cancel`)}),(0,K.jsx)(p,{disabled:!o,htmlType:`submit`,loading:d.isPending,type:`primary`,children:i(`creds.form.save`)})]})]})}})),J,ot,st,ct=e((()=>{E(),k(),_(),x(),i(),j(),J=t(o()),ot=g(({css:e})=>({footer:e`
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-block-start: 24px;
  `})),st=({cred:e,credsApi:t,onCancel:n,onSuccess:r})=>{let{t:i}=a(`setting`),{allowed:o}=A(`manage_provider_key`),[s]=S.useForm(),c=O({mutationFn:async n=>{o&&await t.client.update.mutate({description:n.description,id:e.id,name:n.name})},onSuccess:()=>{r()}});return(0,J.jsxs)(S,{form:s,layout:`vertical`,initialValues:{description:e.description,name:e.name},onFinish:e=>{o&&c.mutate(e)},children:[(0,J.jsx)(S.Item,{label:i(`creds.form.name`),name:`name`,rules:[{required:!0,message:i(`creds.form.nameRequired`)}],children:(0,J.jsx)(b,{disabled:!o})}),(0,J.jsx)(S.Item,{label:i(`creds.form.description`),name:`description`,children:(0,J.jsx)(b.TextArea,{disabled:!o,placeholder:i(`creds.form.descriptionPlaceholder`),rows:2})}),(0,J.jsxs)(`div`,{className:ot.footer,children:[(0,J.jsx)(p,{onClick:n,children:i(`creds.form.cancel`)}),(0,J.jsx)(p,{disabled:!o,htmlType:`submit`,loading:c.isPending,type:`primary`,children:i(`creds.form.save`)})]})]})}})),Y,lt,ut=e((()=>{E(),at(),ct(),Y=t(o()),lt=({cred:e,credsApi:t,onSuccess:n})=>{let{close:r}=ve(),i=e.type===`kv-env`||e.type===`kv-header`,a=()=>{n?.(),r()};return i?(0,Y.jsx)(it,{cred:e,credsApi:t,onCancel:r,onSuccess:a}):(0,Y.jsx)(st,{cred:e,credsApi:t,onCancel:r,onSuccess:a})}})),dt,ft,pt=e((()=>{E(),n(),ut(),dt=t(o()),ft=e=>w({content:(0,dt.jsx)(lt,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:r(`creds.edit.title`,{ns:`setting`}),width:`min(90vw, 560px)`})})),mt,ht,gt,_t,vt,yt=e((()=>{mt=t(s()),Ee(),ht={client:De.market.creds,query:we.market.creds},gt=(0,mt.createContext)(null),_t=gt.Provider,vt=()=>(0,mt.useContext)(gt)??ht})),bt,X,xt,Z,St,Ct,wt,Tt=e((()=>{D(),E(),k(),_(),x(),C(),bt=t(s()),i(),X=t(o()),{Text:xt}=m,Z=g(({css:e,cssVar:t})=>({kvKey:e`
    min-width: 140px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadius} 0 0 ${t.borderRadius};

    font-family: ${t.fontFamilyCode};
    font-size: 13px;
    color: ${t.colorTextSecondary};

    background: ${t.colorFillQuaternary};
  `,kvRow:e`
    display: flex;
    align-items: stretch;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};

    &:not(:last-child) {
      margin-block-end: 8px;
    }
  `,kvValue:e`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    padding-block: 8px;
    padding-inline: 12px;
    border-radius: 0 ${t.borderRadius} ${t.borderRadius} 0;

    font-family: ${t.fontFamilyCode};
    font-size: 13px;

    background: ${t.colorBgContainer};
  `,maskedValue:e`
    color: ${t.colorTextQuaternary};
    letter-spacing: 2px;
  `,toggleBtn:e`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;
    border-radius: ${t.borderRadiusSM};

    color: ${t.colorTextTertiary};

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,valuesSection:e`
    margin-block-start: 16px;
  `,valuesTitle:e`
    margin-block-end: 12px;
    font-weight: 500;
  `})),St=e=>e.length<=4?`••••••••`:`••••••••`+e.slice(-4),Ct=({keyName:e,value:t})=>{let[n,r]=(0,bt.useState)(!1);return(0,X.jsxs)(`div`,{className:Z.kvRow,children:[(0,X.jsx)(`div`,{className:Z.kvKey,children:e}),(0,X.jsxs)(`div`,{className:Z.kvValue,children:[(0,X.jsx)(xt,{className:ee(!n&&Z.maskedValue),style:{flex:1,fontFamily:`var(--lobe-font-family-code)`,fontSize:13,wordBreak:`break-all`},children:n?t:St(t)}),(0,X.jsxs)(u,{horizontal:!0,align:`center`,gap:4,children:[(0,X.jsx)(`div`,{className:Z.toggleBtn,onClick:()=>r(!n),children:n?(0,X.jsx)(pe,{size:16}):(0,X.jsx)(me,{size:16})}),(0,X.jsx)(Se,{content:t,size:`small`})]})]})]})},wt=({cred:e,credsApi:t})=>{let{t:n}=a(`setting`),{data:r,isLoading:i,error:o}=Te({queryFn:()=>t.client.get.query({decrypt:!0,id:e.id}),queryKey:[`cred-plaintext`,e.id]}),s=r?.plaintext||{},c=Object.entries(s);return i?(0,X.jsx)(re,{active:!0,paragraph:{rows:3}}):o?(0,X.jsx)(T,{showIcon:!0,description:o.message,message:n(`creds.view.error`),type:`error`}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(T,{showIcon:!0,message:n(`creds.view.warning`),style:{marginBottom:16},type:`warning`}),(0,X.jsxs)(v,{bordered:!0,column:1,size:`small`,children:[(0,X.jsx)(v.Item,{label:n(`creds.table.name`),children:e.name}),(0,X.jsx)(v.Item,{label:n(`creds.table.key`),children:(0,X.jsx)(`code`,{children:e.key})}),(0,X.jsx)(v.Item,{label:n(`creds.table.type`),children:e.type?n(`creds.types.${e.type}`):`-`})]}),c.length>0&&(0,X.jsxs)(`div`,{className:Z.valuesSection,children:[(0,X.jsx)(`div`,{className:Z.valuesTitle,children:n(`creds.view.values`)}),c.map(([e,t])=>(0,X.jsx)(Ct,{keyName:e,value:String(t)},e))]}),c.length===0&&e.type===`oauth`&&(0,X.jsx)(T,{showIcon:!0,description:n(`creds.view.oauthNote`),message:n(`creds.view.noValues`),style:{marginTop:16},type:`info`})]})}})),Et,Dt,Ot=e((()=>{E(),n(),Tt(),Et=t(o()),Dt=e=>w({content:(0,Et.jsx)(wt,{...e}),footer:null,maskClosable:!0,styles:{content:{paddingBlock:16,paddingInline:24}},title:r(`creds.view.title`,{name:e.cred.name,ns:`setting`}),width:`min(90vw, 600px)`})})),Q,$,kt,At=e((()=>{D(),E(),k(),Ce(),_(),x(),C(),i(),Ne(),Fe(),j(),ke(),rt(),pt(),yt(),Ot(),Q=t(o()),$=g(({css:e})=>({container:e`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,empty:e`
    padding-block: 48px;
    padding-inline: 0;
  `,signInPrompt:e`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;

    padding: 48px;
  `})),kt=()=>{let{t:e}=a(`setting`),{isAuthenticated:t,isLoading:n,signIn:r}=Ae(),{allowed:i}=A(`manage_provider_key`),o=vt(),{data:s,error:c,isLoading:l,refetch:d}=o.query.list.useQuery(void 0,{enabled:t}),f=O({mutationFn:async e=>{i&&await o.client.delete.mutate({id:e})},onSuccess:()=>{d()}}),m=s?.data??[],h=e=>{ft({cred:e,credsApi:o,onSuccess:()=>d()})},g=e=>{Dt({cred:e,credsApi:o})};return n?(0,Q.jsx)(Ie,{paddingInline:0}):t?!l&&c instanceof Oe&&c.data?.code===`NOT_FOUND`?(0,Q.jsx)(`div`,{className:$.signInPrompt,children:(0,Q.jsx)(y,{description:e(`creds.orgSetupRequired`)})}):(0,Q.jsx)(`div`,{className:$.container,children:(0,Q.jsx)(Pe,{data:s,empty:(0,Q.jsx)(y,{className:$.empty,description:e(`creds.empty`)}),error:c,errorVariant:`block`,isEmpty:m.length===0,isLoading:l,loading:(0,Q.jsx)(Ie,{paddingInline:0}),onRetry:()=>d(),children:(0,Q.jsx)(u,{gap:0,children:m.map(e=>(0,Q.jsx)(W,{cred:e,onDelete:e=>f.mutate(e),onView:g,onEdit:e=>{i&&h(e)}},e.id))})})}):(0,Q.jsxs)(`div`,{className:$.signInPrompt,children:[(0,Q.jsx)(y,{description:e(`creds.signInRequired`)}),(0,Q.jsx)(p,{icon:ue,type:`primary`,onClick:()=>r(),children:e(`creds.signIn`)})]})}}));export{vt as a,Ze as c,yt as i,Qe as l,At as n,W as o,_t as r,rt as s,kt as t};