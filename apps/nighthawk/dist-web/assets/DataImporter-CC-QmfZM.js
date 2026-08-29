import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{F as n,M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ha as a,Va as o,cr as s,cs as c,ls as l,sr as u,xr as d}from"./app-const-Bl9rlHwj.js";import{B as ee,Hr as f,Qr as p,Xr as m,mr as h}from"./dialog-BebLzVzY.js";import{P as g,a as _,b as v,c as y,d as b,et as x,l as S,q as C,t as w,x as te}from"./es-CVJR_g25.js";import{Bl as T,Ih as E,Kl as ne,Xr as D,x as O}from"../vendor/vendor-icons-C-Y4oLkk.js";import{ct as k,i as A,t as j}from"./base-ui-BAv0gRbN.js";import{or as re,t as M}from"./es-LELdnrjB.js";import{Un as N,Wn as ie,Xt as ae}from"./model-runtime-client-tog6-eyE.js";import{g as oe,x as se}from"./serverConfig-CmLVLry1.js";import{n as ce,s as P}from"./client-BE8DoWhQ.js";import{q as le}from"./src-Cw6BG0HN.js";import{r as ue}from"./dist-DpadOugs.js";import{c as de,p as fe,u as pe}from"./format-BuuIRQbq.js";import{n as me,r as he}from"./upload-GB9sKG1n.js";import{Kt as ge,Yt as _e,dr as ve,mr as ye}from"./tool-BJJaXV35.js";import{Oo as F,Xo as be,Yo as xe,ko as I}from"./index-Djd-5Nq9.js";import{n as L,t as Se}from"./query-string-DCxvp9QO.js";import{n as Ce,t as we}from"./dist-DLs3_LsD.js";var Te,R,z,B,Ee,De=e((()=>{M(),w(),Te=t(l()),I(),xe(),R=t(c()),z=`ant`,B=_(({css:e,cssVar:t})=>({modalTitleDark:e`
    &.${z}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 80px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${z}-modal-title {
      font-size: 24px;
    }
  `,modalTitleLight:e`
    &.${z}-modal-header {
      height: 80px;
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, ${t.colorBgElevated} 0%, transparent),
          ${t.colorBgContainer} 140px
        ),
        fixed 0 0 /10px 10px radial-gradient(${t.colorFill} 1px, transparent 0);
    }

    & .${z}-modal-title {
      font-size: 24px;
    }
  `})),Ee=(0,Te.memo)(({icon:e,onOpenChange:t,title:n,open:r,children:i,width:a=550,height:o})=>(0,R.jsx)(F,{centered:!0,afterOpenChange:t,closable:!1,footer:null,height:o,open:r,width:a,classNames:{header:be()?B.modalTitleDark:B.modalTitleLight},title:(0,R.jsxs)(p,{horizontal:!0,gap:8,children:[(0,R.jsx)(f,{icon:e}),n]}),children:i}))})),Oe,ke,Ae=e((()=>{ce(),me(),oe(),ie(),le(),Oe=class{importSettings=async e=>{await se.getState().importAppSettings(e)};importData=async(e,t)=>{let n=e=>{t?.onStageChange?.(N.Error);let n=e;t?.onError?.({code:n.data.code,httpStatus:n.data.httpStatus,message:n.message,path:n.data.path})};if((e.messages?.length||0)+(e.sessionGroups?.length||0)+(e.sessions?.length||0)+(e.topics?.length||0)<500){t?.onStageChange?.(N.Importing);let r=Date.now();try{let n=await P.importer.importByPost.mutate({data:e}),i=Date.now()-r;t?.onStageChange?.(N.Success),t?.onSuccess?.(n.results,i)}catch(e){n(e)}return}await this.uploadData(e,{callbacks:t,handleError:n})};importPgData=async(e,t)=>{let{callbacks:n}=t||{},r=e=>{n?.onStageChange?.(N.Error);let t=e;n?.onError?.({code:t.data.code,httpStatus:t.data.httpStatus,message:t.message,path:t.data.path})};if(Object.values(e.data).map(e=>e.length).reduce((e,t)=>e+t,0)<500){n?.onStageChange?.(N.Importing);let t=Date.now();try{let r=await P.importer.importPgByPost.mutate(e),i=Date.now()-t;n?.onStageChange?.(N.Success),n?.onSuccess?.(r.results,i)}catch(e){r(e)}return}await this.uploadData(e,{callbacks:n,handleError:r})};uploadData=async(e,{callbacks:t,handleError:n})=>{let r=`${ue()}.json`,i;try{t?.onStageChange?.(N.Uploading),i=(await he.uploadDataToS3(e,{filename:r,onProgress:(e,n)=>{t?.onFileUploading?.(n)},pathname:`import_config/${r}`})).data.path}catch{throw Error(`Upload Error`)}t?.onStageChange?.(N.Importing);let a=Date.now();try{let e=await P.importer.importByFile.mutate({pathname:i}),n=Date.now()-a;t?.onStageChange?.(N.Success),t?.onSuccess?.(e.results,n)}catch(e){n(e)}}},ke=new Oe})),je,Me=e((()=>{je=async e=>{let t=await e.text();try{return{data:JSON.parse(t),success:!0}}catch(e){return console.error(e),{error:e instanceof Error?e.message:String(e),success:!1}}}})),Ne,Pe,Fe=e((()=>{Se(),o(),d(),Ne=class{submitDBV1UpgradeError=(e,t)=>{let n=["```json",JSON.stringify(t,null,2),"```"].join(`
`),r=t?.message||``,i=L.stringifyUrl({query:{body:n,labels:`❌ Database Migration Error`,title:`[Migration Error V${e}] ${r}`},url:a(u,`/issues/new`)});window.open(i,`_blank`)};submitImportError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join(`
`),n=e?.message||``,r=L.stringifyUrl({query:{body:t,labels:`❌ Import Config Error`,title:`[Config Import Error] ${n}`},url:a(u,`/issues/new`)});window.open(r,`_blank`)};submitPgliteInitError=e=>{let t=["```json",JSON.stringify(e,null,2),"```"].join(`
`),n=e?.message||``,r=L.stringifyUrl({query:{body:t,labels:`❌ Database Init Error`,title:`[Database Init Error] ${n}`},url:a(u,`/issues/new`)});window.open(r,`_blank`)}},Pe=new Ne})),Ie,V,Le,Re=e((()=>{M(),j(),v(),O(),Ie=t(l()),r(),Ce(),d(),Fe(),V=t(c()),Le=(0,Ie.memo)(({error:e,onClick:t})=>{let{t:r}=i(`common`);return(0,V.jsx)(C,{icon:(0,V.jsx)(f,{icon:D}),status:`error`,style:{paddingBlock:24,width:450},title:r(`importModal.error.title`),extra:(0,V.jsxs)(p,{gap:12,style:{textAlign:`start`},children:[(0,V.jsx)(k,{style:{flex:1},title:e?.message,type:`error`,extra:(0,V.jsx)(re,{actionIconSize:`small`,language:`json`,children:JSON.stringify(e,null,2)})}),(0,V.jsx)(h,{onClick:t,children:r(`close`)})]}),subTitle:(0,V.jsx)(we,{children:(0,V.jsx)(n,{i18nKey:`importModal.error.desc`,ns:`common`,components:[(0,V.jsx)(`span`,{},`0`),(0,V.jsx)(`a`,{"aria-label":`issue`,href:s,rel:`noreferrer`,target:`_blank`,onClick:t=>{t.preventDefault(),Pe.submitImportError(e)}},`1`)]})})})})})),H,U,ze,Be,W,Ve=e((()=>{M(),w(),H=t(c()),U=28,ze=b`
  12.5% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 0,
      ${U*3}px -${U}px 0 5px,
      ${U}px 0 0 5px,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 5px,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 0;
  }

  25% {
    box-shadow:
      ${U}px -${U}px 0 5px,
      ${U*2}px -${U}px 0 0,
      ${U*3}px -${U}px 0 5px,
      ${U}px 0 0 0,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 5px,
      ${U*3}px ${U}px 0 0;
  }

  50% {
    box-shadow:
      ${U}px -${U}px 0 5px,
      ${U*2}px -${U}px 0 5px,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 0,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 5px;
  }

  62.5% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 0,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 5px,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 5px,
      ${U*3}px ${U}px 0 5px;
  }

  75% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 5px,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 0,
      ${U*2}px 0 0 0,
      ${U*3}px 0 0 5px,
      ${U}px ${U}px 0 0,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 5px;
  }

  87.5% {
    box-shadow:
      ${U}px -${U}px 0 0,
      ${U*2}px -${U}px 0 5px,
      ${U*3}px -${U}px 0 0,
      ${U}px 0 0 0,
      ${U*2}px 0 0 5px,
      ${U*3}px 0 0 0,
      ${U}px ${U}px 0 5px,
      ${U*2}px ${U}px 0 0,
      ${U*3}px ${U}px 0 0;
  }
`,Be=_(({css:e,cssVar:t})=>({loader:e`
      transform: translateX(-${U*2}px);

      aspect-ratio: 1;
      width: 6px;
      border-radius: 50%;

      color: ${t.colorPrimary};

      box-shadow:
        ${U}px -${U}px 0 0,
        ${U*2}px -${U}px 0 0,
        ${U*3}px -${U}px 0 0,
        ${U}px 0 0 5px,
        ${U*2}px 0 0 5px,
        ${U*3}px 0 0 5px,
        ${U}px ${U}px 0 0,
        ${U*2}px ${U}px 0 0,
        ${U*3}px ${U}px 0 0;

      animation: ${ze} 2s infinite linear;
    `})),W=()=>(0,H.jsx)(m,{style:{height:80},children:(0,H.jsx)(`div`,{className:Be.loader})})})),He,G,Ue,We=e((()=>{M(),v(),w(),He=t(l()),r(),fe(),Ve(),G=t(c()),Ue=(0,He.memo)(({progress:e=0,speed:t=0,restTime:n})=>{let{t:r}=i(`common`);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(W,{}),(0,G.jsxs)(p,{align:`center`,gap:8,width:`100%`,children:[r(`importModal.uploading.desc`),(0,G.jsxs)(p,{flex:1,gap:8,width:`100%`,children:[(0,G.jsx)(x,{showInfo:!0,percent:e,strokeColor:y.colorSuccess,trailColor:y.colorSuccessBg}),(0,G.jsxs)(p,{horizontal:!0,distribution:`space-between`,style:{color:y.colorTextDescription,fontSize:12},children:[(0,G.jsxs)(`span`,{children:[r(`importModal.uploading.restTime`),`: `,n?pe(n):`-`]}),(0,G.jsxs)(`span`,{children:[r(`importModal.uploading.speed`),`: `,de(t*1024)]})]})]})]})]})})})),Ge,K,Ke,qe,q,Je,Ye=e((()=>{M(),j(),v(),w(),O(),Ge=t(l()),r(),I(),K=t(c()),Ke=e=>{let t=[];for(let[n,r]of Object.entries(e.data))Array.isArray(r)&&r.length>0&&t.push({count:r.length,name:n});return t},qe=e=>e.reduce((e,t)=>e+t.count,0),q=_(({css:e,cssVar:t})=>({duplicateAlert:e`
      margin-block-start: ${t.marginMD};
      padding: ${t.paddingMD};
      border: 1px solid ${t.colorWarningBorder};
      border-radius: ${t.borderRadiusLG};

      background-color: ${t.colorWarningBg};
    `,duplicateDescription:e`
      margin-block-start: ${t.marginXS};
      font-size: ${t.fontSizeSM};
      color: ${t.colorTextSecondary};
    `,duplicateOptions:e`
      margin-block-start: ${t.marginSM};
    `,duplicateTag:e`
      border-color: ${t.colorWarningBorder};
      color: ${t.colorWarning};
      background-color: ${t.colorWarningBg};
    `,hash:e`
      font-family: ${t.fontFamilyCode};
      font-size: 12px;
      color: ${t.colorTextTertiary};
    `,infoIcon:e`
      color: ${t.colorTextSecondary};
    `,modalContent:e`
      padding-block: ${t.paddingMD};
      padding-inline: 0;
    `,successIcon:e`
      color: ${t.colorSuccess};
    `,tableContainer:e`
      overflow: hidden;
      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadiusLG};
    `,tableName:e`
      font-family: ${t.fontFamilyCode};
    `,warningIcon:e`
      color: ${t.colorWarning};
    `})),Je=({open:e=!0,onOpenChange:t=()=>{},onConfirm:n=()=>{},onCancel:r=()=>{},importData:a})=>{let{t:o}=i(`common`),[s]=(0,Ge.useState)(`skip`),c=Ke(a),l=qe(c),u=[{dataIndex:`name`,key:`name`,render:e=>(0,K.jsx)(`div`,{className:q.tableName,children:e}),title:o(`importPreview.tables.name`)},{dataIndex:`count`,key:`count`,title:o(`importPreview.tables.count`)}];return(0,K.jsx)(F,{open:e,title:o(`importPreview.title`),width:700,footer:[(0,K.jsx)(h,{onClick:()=>{t(!1),r()},children:o(`cancel`)},`cancel`),(0,K.jsx)(h,{type:`primary`,onClick:()=>{n(s===`overwrite`),t(!1)},children:o(`importPreview.confirmImport`)},`confirm`)],onCancel:()=>t(!1),children:(0,K.jsx)(`div`,{className:q.modalContent,children:(0,K.jsxs)(p,{gap:16,children:[(0,K.jsxs)(p,{gap:4,children:[(0,K.jsxs)(p,{horizontal:!0,align:`center`,justify:`space-between`,width:`100%`,children:[(0,K.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,K.jsx)(T,{className:q.infoIcon,size:16}),(0,K.jsx)(A,{strong:!0,children:o(`importPreview.totalRecords`,{count:l})})]}),(0,K.jsx)(p,{horizontal:!0,children:(0,K.jsx)(A,{type:`secondary`,children:o(`importPreview.totalTables`,{count:c.length})})})]}),(0,K.jsxs)(p,{horizontal:!0,className:q.hash,gap:4,children:[o(`importPreview.hashLabel`),`: `,(0,K.jsx)(`span`,{children:a.schemaHash})]})]}),(0,K.jsx)(`div`,{className:q.tableContainer,children:(0,K.jsx)(g,{columns:u,dataSource:c,pagination:!1,rowKey:`name`,scroll:{y:350},size:`small`})})]})})})}})),J,Y,Xe,Ze,Qe=e((()=>{M(),j(),v(),w(),O(),J=t(l()),r(),Y=t(c()),Xe=_(({css:e,cssVar:t})=>({zeroCell:e`
      color: ${t.colorTextQuaternary};
    `})),Ze=(0,J.memo)(({duration:e,dataSource:t,onClickFinish:n})=>{let{t:r}=i(`common`),a=e=>e||(0,Y.jsx)(`span`,{className:Xe.zeroCell,children:`0`});return(0,Y.jsx)(C,{icon:(0,Y.jsx)(f,{icon:E}),status:`success`,style:{paddingBlock:24,paddingInline:0},title:r(`importModal.finish.title`),extra:(0,Y.jsx)(h,{size:`large`,type:`primary`,onClick:n,children:r(`importModal.finish.start`)}),subTitle:t?(0,Y.jsxs)(p,{gap:16,width:500,children:[r(`importModal.finish.subTitle`,{duration:(e/1e3).toFixed(2)}),(0,Y.jsx)(g,{bordered:!0,dataSource:t,pagination:!1,rowKey:`title`,size:`small`,columns:[{dataIndex:`title`,render:a,title:r(`importModal.result.type`)},{dataIndex:`added`,render:a,title:r(`importModal.result.added`)},{dataIndex:`skips`,render:a,title:r(`importModal.result.skips`)},{dataIndex:`error`,render:a,title:r(`importModal.result.errors`)},{dataIndex:`updated`,render:a,title:r(`importModal.result.update`)}]})]}):r(`importModal.finish.onlySettings`)})})})),X,Z,Q,$,$e=e((()=>{ae(),M(),j(),v(),w(),O(),X=t(l()),r(),De(),Ae(),ge(),ve(),Me(),Re(),We(),Ye(),Ve(),Qe(),Z=t(c()),Q=_(({css:e})=>({children:e`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: transparent;
    }
  `,wrapper:e`
    font-size: inherit;
  `})),$=(0,X.memo)(({children:e,onFinishImport:t})=>{let{t:n}=i(`common`),r=ye(e=>e.refreshAgentList),[a,o]=_e(e=>[e.refreshMessages,e.refreshTopic]),[s,c]=(0,X.useState)(0),[l,u]=(0,X.useState)(N.Start),[d,f]=(0,X.useState)(),[p,g]=(0,X.useState)(),[_,v]=(0,X.useState)(),[y,b]=(0,X.useState)(!1),[x,C]=(0,X.useState)(void 0),[w,T]=(0,X.useState)(!1),E=(0,X.useCallback)(async e=>{let t=await je(e);return t.success?(T(!1),C(t.data),b(!0),!1):(T(!0),ee.error({description:t.error,title:n(`importModal.error.invalidConfig`)}),!1)},[n]),D=(0,X.useMemo)(()=>{if(!_)return;let{type:e,...t}=_;if(e!==`settings`)return Object.entries(t).filter(([,e])=>!!e).map(([e,t])=>({added:t.added,error:t.errors,skips:t.skips,title:e,updated:t.updated||0}))},[_]),O=l===N.Success||l===N.Error,k=(0,X.useCallback)(()=>{u(N.Finished),v(void 0),g(void 0),f(void 0),t?.()},[t]),A=(0,X.useMemo)(()=>{switch(l){case N.Preparing:return(0,Z.jsxs)(m,{gap:24,padding:40,children:[(0,Z.jsx)(W,{}),(0,Z.jsx)(`p`,{children:n(`importModal.preparing`)})]});case N.Importing:return(0,Z.jsxs)(m,{gap:24,padding:40,children:[(0,Z.jsx)(W,{}),(0,Z.jsx)(`p`,{children:n(`importModal.loading`)})]});case N.Uploading:return(0,Z.jsx)(m,{gap:24,padding:40,children:(0,Z.jsx)(Ue,{progress:d?.progress,restTime:d?.restTime,speed:d?.speed})});case N.Success:return(0,Z.jsx)(m,{gap:24,paddingInline:16,children:(0,Z.jsx)(Ze,{dataSource:D,duration:s,onClickFinish:k})});case N.Error:return(0,Z.jsx)(m,{gap:24,paddingBlock:24,paddingInline:0,children:(0,Z.jsx)(Le,{error:p,onClick:k})});default:return}},[k,D,s,d,p,l,n]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ee,{icon:ne,title:n(`importModal.title`),width:O?600:400,open:w||l!==N.Start&&l!==N.Finished,onOpenChange:e=>{e||T(!1)},children:w?(0,Z.jsx)(m,{gap:24,padding:40,children:(0,Z.jsx)(te,{accept:`application/json`,beforeUpload:E,className:S(Q.wrapper),maxCount:1,showUploadList:!1,children:(0,Z.jsx)(h,{children:n(`importModal.error.selectAnotherFile`)})})}):A}),(0,Z.jsx)(te,{accept:`application/json`,beforeUpload:E,className:S(Q.wrapper),maxCount:1,showUploadList:!1,children:(0,Z.jsx)(`div`,{className:S(Q.children),children:e})}),x&&(0,Z.jsx)(Je,{importData:x,open:y,onOpenChange:b,onConfirm:async e=>{u(N.Preparing),await ke.importPgData(x,{callbacks:{onError:e=>{g(e)},onFileUploading:e=>{f(e)},onStageChange:e=>{u(e)},onSuccess:(e,t)=>{e&&v(e),c(t)}},overwriteExisting:e}),await r(),await a(),await o()}})]})})}));export{$e as n,$ as t};