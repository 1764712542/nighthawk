import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as i}from"./agent-Cvv887Je.js";import{O as a,cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{Cr as c,Hr as l,Qr as ee,U as te}from"./dialog-BebLzVzY.js";import{a as u,c as d,l as f,t as p}from"./es-CVJR_g25.js";import{A as m,Bs as h,fn as ne,gn as re,x as g}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as ie,i as ae,t as oe}from"./base-ui-BAv0gRbN.js";import{t as se}from"./es-LELdnrjB.js";import{C as ce,D as le,E as _,F as ue,M as de,N as fe,R as pe,V as v}from"./serverConfig-CmLVLry1.js";import{a as me,s as he}from"./swrKeys-B4sicPWZ.js";import{cn as ge,t as _e}from"./src-DfHwAqOF.js";import{Cn as ve,Dt as ye,E as y,H as be,Rn as xe,Tn as Se,hn as b,jn as Ce,m as we,qt as x,rn as S,yt as Te}from"./Lexical.prod-D1pZVWJN.js";import{$t as Ee,Kt as De,Qt as Oe,Yt as C}from"./tool-BJJaXV35.js";import{h as w,n as ke}from"./icons-Bv-IX8Qe.js";import{_ as Ae,g as je,t as Me}from"./selectors-BsEaCsu0.js";import{n as Ne,t as Pe}from"./localFileService-CV-M72pC.js";import{Da as T,Fn as Fe,On as Ie,da as Le,ha as E,yn as Re}from"./index-Djd-5Nq9.js";import{n as ze,t as Be}from"./FileIcon-DXM_Cnj6.js";import{i as Ve,t as He}from"./LocalFile-BBd5_Kl-.js";import{t as D}from"./es-8MFK7TL8.js";import{a as Ue,n as We,o as Ge,t as Ke}from"./useProjectSkills-B_lHYxEP.js";var qe,Je,Ye,Xe,Ze,O,k,A,Qe,$e,et,tt,nt,rt,it,j,at=e((()=>{qe=`lobeLocalFileLink`,Je=/^(?:[a-z]:[\\/]|\\\\)/i,Ye=/^[a-z][a-z\d+.-]*:/i,Xe=/:(\d+)(?::(\d+))?$/,Ze=[`/Applications/`,`/Users/`,`/Volumes/`,`/home/`,`/mnt/`,`/opt/`,`/private/`,`/tmp/`,`/var/`,`/workspace/`],O=e=>{try{return decodeURIComponent(e)}catch{return e}},k=e=>{let t=e.replaceAll(`\\`,`/`);return t===`/`?t:t.replace(/\/+$/,``)},A=e=>Je.test(e),Qe=e=>e.startsWith(`/`),$e=e=>Qe(e)||A(e),et=(e,t)=>{let n=k(e),r=k(t);return n===r||n.startsWith(`${r}/`)},tt=e=>{if(A(e))return!0;let t=k(e);return Ze.some(e=>t===e.slice(0,-1)||t.startsWith(e))},nt=e=>{let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`/`),t.lastIndexOf(`\\`));return n<=0?t.startsWith(`/`)?`/`:t:t.slice(0,n)},rt=e=>{let t=e.match(Xe);if(!t)return{filePath:e};let n=e.slice(0,-t[0].length);if(!n)return{filePath:e};let r=Number.parseInt(t[1],10),i=t[2]?Number.parseInt(t[2],10):void 0;return{column:i&&i>0?i:void 0,filePath:n,line:r>0?r:void 0}},it=e=>{if(e.toLowerCase().startsWith(`file:`))try{let t=new URL(e);if(t.protocol!==`file:`)return null;let n=O(t.pathname);return/^\/[a-z]:/i.test(n)?n.slice(1):n}catch{return null}return Ye.test(e)&&!A(e)?null:O(e)},j=(e,{workingDirectory:t}={})=>{let n=e?.trim();if(!n)return null;let r=it(n);if(!r)return null;let{filePath:i,line:a,column:o}=rt(r);if(!$e(i))return null;let s=t&&et(i,t)?t:void 0;return!s&&!n.toLowerCase().startsWith(`file:`)&&!tt(i)?null:{column:o,filePath:i,line:a,workingDirectory:s||nt(i)}}})),M=e((()=>{})),N,P,ot=e((()=>{p(),M(),N=(e,t)=>`
  color: ${e};

  &.selected {
    border-radius: ${t};
    outline: 2px solid ${e};
    outline-offset: 1px;
  }
`,P=u(({css:e,cssVar:t})=>({actionTag:e`
    cursor: default;
    user-select: none;

    display: inline-flex;
    gap: 4px;
    align-items: center;

    margin-inline-end: ${4}px;
    padding-inline: 2px;
  `,actionTagLabel:e`
    font-weight: 500;
  `,agentSkillTag:e`
    ${N(t.colorSuccess,t.borderRadius)}
  `,clickable:e`
    cursor: pointer;
    border-radius: ${t.borderRadius};
    transition: background 0.2s;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,commandTag:e`
    ${N(t.purple,t.borderRadius)}
  `,projectSkillTag:e`
    ${N(t.colorSuccess,t.borderRadius)}
  `,skillTag:e`
    ${N(t.colorSuccess,t.borderRadius)}
  `,toolTag:e`
    ${N(t.colorInfo,t.borderRadius)}
  `}))})),F,st,ct=e((()=>{F=`goal`,st=[{category:`command`,label:`newTopic`,type:`newTopic`},{category:`command`,label:`compact`,type:`compact`}]})),lt,I,ut,dt,ft,pt,mt,L,ht=e((()=>{se(),ke(),p(),g(),lt=t(s()),n(),ot(),ct(),I=t(o()),ut={agentSkill:w,command:ne,projectSkill:w,skill:w,tool:m},dt={[F]:re},ft={agentSkill:`actionTag.category.agentSkill`,command:`actionTag.category.command`,projectSkill:`actionTag.category.projectSkill`,skill:`actionTag.category.skill`,tool:`actionTag.category.tool`},pt={agentSkill:`actionTag.tooltip.agentSkill`,command:`actionTag.tooltip.command`,projectSkill:`actionTag.tooltip.projectSkill`,skill:`actionTag.tooltip.skill`,tool:`actionTag.tooltip.tool`},mt={agentSkill:`agentSkillTag`,command:`commandTag`,projectSkill:`projectSkillTag`,skill:`skillTag`,tool:`toolTag`},L=(0,lt.memo)(({category:e,label:t,description:n,clickable:i,onClick:a,type:o})=>{let{t:s}=r(`editor`),te=s(ft[e]),u=s(pt[e]),d=o&&dt[o]||ut[e],p=mt[e],m=i??!!a,h=n||u,ne=a?e=>{e.stopPropagation(),a()}:void 0;return(0,I.jsx)(c,{title:(0,I.jsxs)(ee,{gap:2,children:[(0,I.jsx)(`div`,{style:{fontWeight:500},children:t}),(0,I.jsx)(`div`,{style:{opacity:.65},children:te}),h&&(0,I.jsx)(`div`,{children:h}),m&&(0,I.jsx)(`div`,{style:{opacity:.65},children:s(`actionTag.tooltip.clickToView`)})]}),children:(0,I.jsxs)(`span`,{className:f(P.actionTag,P[p],m&&P.clickable),onClick:ne,children:[(0,I.jsx)(l,{icon:d,size:14}),(0,I.jsx)(`span`,{className:P.actionTagLabel,children:t})]})})}),L.displayName=`ActionMention`})),gt,_t,vt=e((()=>{a(),gt=t(s()),ue(),de(),Ue(),ce(),le(),Ke(),_t=e=>{let t=Ge(e),n=_(t=>e?v.getAgencyConfigById(e)(t):void 0),r=_(t=>e?v.isAgentHeterogeneousById(e)(t):!1),i=pe(n,{clientExecutionAvailable:!1,deviceRoutingAvailable:fe(e),isHetero:r,workspaceScoped:_(t=>e?v.isWorkspaceAgentById(e)(t):!1)})===`device`&&n?.boundDeviceId?n.boundDeviceId:void 0,{items:a,onOpenSkill:o}=We(i&&t?t:void 0,i);return(0,gt.useCallback)(e=>{let t=a.find(t=>t.name===e);if(t)return{description:t.description,name:t.name,open:()=>o(t)}},[a,o])}}));function yt(e,t,n){return b(new R(e,t,n))}function bt(e){return e.getType()===R.getType()}var xt,R,St=e((()=>{E(),D(),S(),xt=t(s()),ht(),R=class e extends y{__actionType;__actionCategory;__actionLabel;static getType(){return`action-tag`}static clone(t){return new e(t.__actionType,t.__actionCategory,t.__actionLabel,t.__key)}static importJSON(e){return yt(e.actionType,e.actionCategory,e.actionLabel).updateFromJSON(e)}static importDOM(){return null}constructor(e,t,n,r){super(r),this.__actionType=e,this.__actionCategory=t,this.__actionLabel=n}get actionType(){return this.__actionType}get actionCategory(){return this.__actionCategory}get actionLabel(){return this.__actionLabel}exportDOM(){return{element:document.createElement(`span`)}}createDOM(e){let t=document.createElement(`span`);return x(t,e.theme.actionTag),t}getTextContent(){return this.__actionLabel}isInline(){return!0}updateDOM(){return!1}exportJSON(){return{...super.exportJSON(),actionCategory:this.__actionCategory,actionLabel:this.__actionLabel,actionType:this.__actionType}}updateFromJSON(e){return super.updateFromJSON(e)}decorate(t){let n=T(t)?.getDecorator(e.getType());return n?typeof n==`function`?n(this,t):{queryDOM:n.queryDOM,render:n.render(this,t)}:null}renderHeadless({key:e}){return(0,xt.createElement)(L,{category:this.__actionCategory,key:e,label:this.__actionLabel,type:this.__actionType})}}}));function Ct(e,t,n=!1){return b(new z(e,t,n))}function wt(e){return e instanceof z}var Tt,z,B=e((()=>{E(),D(),S(),Tt=t(s()),He(),z=class e extends y{__name;__path;__isDirectory;static getType(){return`local-file-tag`}static clone(t){return new e(t.__name,t.__path,t.__isDirectory,t.__key)}static importJSON(e){return Ct(e.name,e.path,e.isDirectory).updateFromJSON(e)}static importDOM(){return null}constructor(e,t,n=!1,r){super(r),this.__name=e,this.__path=t,this.__isDirectory=n}get name(){return this.__name}get path(){return this.__path}get isDirectory(){return this.__isDirectory}exportDOM(){return{element:document.createElement(`span`)}}createDOM(e){let t=document.createElement(`span`);return x(t,e.theme.localFileTag),t}getTextContent(){return this.__name}isInline(){return!0}updateDOM(){return!1}exportJSON(){return{...super.exportJSON(),isDirectory:this.__isDirectory,name:this.__name,path:this.__path}}updateFromJSON(e){return super.updateFromJSON(e)}decorate(t){let n=T(t)?.getDecorator(e.getType());return n?typeof n==`function`?n(this,t):{queryDOM:n.queryDOM,render:n.render(this,t)}:null}renderHeadless({key:e}){return(0,Tt.createElement)(Ve,{isDirectory:this.__isDirectory,key:e,name:this.__name,path:this.__path})}}})),V,Et,H=e((()=>{E(),_e(),D(),S(),B(),V=ve(`INSERT_LOCAL_FILE_TAG_COMMAND`),Et=class{static pluginName=`LocalFileTagPlugin`;config;kernel;constructor(e,t){this.kernel=e,this.config=t,e.registerNodes([z]),t?.theme&&e.registerThemes(t.theme),e.registerDecorator(z.getType(),(e,n)=>t?.decorator?t.decorator(e,n):null)}onInit(e){this.registerMarkdown(),this.registerLiteXml(),this.registerCommand(e)}registerMarkdown(){this.kernel.requireService(Ie)?.registerMarkdownWriter(z.getType(),(e,t)=>{if(wt(t)){let n=ge(t.name),r=ge(t.path),i=t.isDirectory?` isDirectory`:``;e.appendLine(`<localFile name="${n}" path="${r}"${i} />`)}})}registerCommand(e){e.registerCommand(V,t=>(e.update(()=>{let e=Ct(t.name,t.path,!!t.isDirectory);xe([e,Ce(` `)]),Te(e.getParentOrThrow())&&Le(e,ye).selectEnd()}),!0),3)}registerLiteXml(){let e=this.kernel.requireService(Re);e?.registerXMLWriter(z.getType(),(e,t)=>wt(e)?t.createXmlNode(`localFile`,{...e.isDirectory?{isDirectory:`true`}:{},name:e.name,path:e.path}):!1);let t=e=>({isDirectory:e.hasAttribute?.(`isDirectory`)||e.getAttribute(`isDirectory`)===`true`,name:e.getAttribute(`name`)||``,path:e.getAttribute(`path`)||``,type:z.getType(),version:1});e?.registerXMLReader(`localFile`,t),e?.registerXMLReader(`localFileTag`,t)}destroy(){this.kernel.unregisterDecorator?.(z.getType())}}})),Dt=e((()=>{})),U,W,G,K,q,J,Ot=e((()=>{a(),se(),oe(),p(),S(),g(),U=t(s()),n(),ze(),me(),i(),Pe(),Oe(),De(),Me(),at(),M(),Dt(),W=t(o()),new Set([`avif`,`bmp`,`gif`,`ico`,`jpeg`,`jpg`,`png`,`svg`,`webp`]),G=u(({css:e})=>({actionBar:e`
    flex-wrap: wrap;
    max-width: 320px;
  `,label:e`
    overflow: hidden;
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,path:e`
    max-width: 360px;
    padding-block: 8px;
    padding-inline: 10px;
    border-radius: ${d.borderRadius};

    font-family: ${d.fontFamilyCode};
    font-size: 12px;
    line-height: 1.5;
    color: ${d.colorTextSecondary};
    word-break: break-all;

    background: ${d.colorFillQuaternary};
  `,popover:e`
    max-width: 392px;
  `,previewFrame:e`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    width: min(360px, 72vw);
    max-height: 240px;
    border: 1px solid ${d.colorFillSecondary};
    border-radius: ${d.borderRadiusLG};

    background: ${d.colorFillQuaternary};
  `,previewImage:e`
    display: block;
    max-width: 100%;
    max-height: 240px;
    object-fit: contain;
  `,tag:e`
    cursor: default;
    user-select: none;

    display: inline-flex;
    gap: 4px;
    align-items: center;

    max-width: 240px;
    margin-inline-end: ${4}px;
    padding-inline: 2px;
    border-radius: ${d.borderRadius};

    color: ${d.colorInfo};
    vertical-align: baseline;

    &.selected {
      outline: 2px solid ${d.colorInfo};
      outline-offset: 1px;
    }
  `,thumbnail:e`
    flex-shrink: 0;

    width: 16px;
    height: 16px;
    border-radius: ${d.borderRadiusXS};

    object-fit: cover;
    background: ${d.colorFillQuaternary};
    box-shadow: inset 0 0 0 1px ${d.colorFillSecondary};
  `})),K=e=>{e.preventDefault(),e.stopPropagation()},q=(0,U.memo)(({children:e,className:t,editor:n,nodeKey:r,ref:i,title:a,...o})=>{let s=(0,U.useRef)(null),c=(0,U.useCallback)(e=>{if(s.current=e,!i)return;if(typeof i==`function`){i(e);return}let t=i;t.current=e},[i]),l=(0,U.useCallback)(e=>!n||!r||e.target!==s.current&&!s.current?.contains(e.target)?!1:(e.preventDefault(),n.update(()=>{let e=be();e.add(r),we(e)}),!0),[n,r]);return(0,U.useEffect)(()=>{if(!(!n||!r))return n.registerCommand(Se,l,1)},[n,r,l]),(0,W.jsx)(`span`,{...o,className:f(G.tag,t),ref:c,title:a,children:e})}),q.displayName=`LocalFileTagTrigger`,J=(0,U.memo)(({className:e,editor:t,file:n,nodeKey:i})=>{let{t:a}=r(`chat`),o=C(e=>e.openLocalFile),s=C(Ae.currentTopicWorkingDirectory),c=(0,U.useMemo)(()=>j(n.path,{workingDirectory:s}),[n.path,s]),l=!!c&&(!s||c.workingDirectory!==s),{data:u}=he(null,()=>Ee.getLocalFilePreview({accept:`image`,allowExternalFile:l||void 0,path:c.filePath,workingDirectory:c.workingDirectory}),{revalidateOnFocus:!1}),[d,f]=(0,U.useState)();return(0,U.useEffect)(()=>{f(void 0)},[!1,u]),(0,U.useCallback)(e=>{K(e),c&&o({allowExternalFilePreview:l,filePath:c.filePath,workingDirectory:c.workingDirectory})},[l,o,c]),(0,U.useCallback)(e=>{K(e),Ne.openLocalFileOrFolder(n.path,!!n.isDirectory)},[n.isDirectory,n.path]),(0,U.useCallback)(e=>{K(e),Ne.openFileFolder(n.path)},[n.path]),(0,W.jsx)(te,{content:(0,W.jsxs)(ee,{className:G.popover,gap:10,onClick:e=>e.stopPropagation(),children:[d&&(0,W.jsx)(`div`,{className:G.previewFrame,children:(0,W.jsx)(`img`,{alt:n.name,className:G.previewImage,"data-testid":`local-file-image-hover-preview`,draggable:!1,src:d})}),(0,W.jsx)(ae,{className:G.path,children:n.path}),!1]}),styles:{content:{padding:8}},trigger:`hover`,children:(0,W.jsxs)(q,{className:e,editor:t,nodeKey:i,title:n.path,children:[d?(0,W.jsx)(`img`,{alt:``,className:G.thumbnail,"data-testid":`local-file-image-preview`,draggable:!1,src:d}):(0,W.jsx)(Be,{fileName:n.name,isDirectory:!!n.isDirectory,size:16,variant:`raw`}),(0,W.jsx)(`span`,{className:G.label,children:n.name})]})})}),J.displayName=`LocalFileTag`})),kt,At,Y,jt=e((()=>{D(),kt=t(s()),Ot(),H(),At=t(o()),Y=()=>{let[e]=Fe();return(0,kt.useLayoutEffect)(()=>{e.registerPlugin(Et,{decorator:(e,t)=>(0,At.jsx)(J,{editor:t,nodeKey:e.getKey(),file:{isDirectory:e.isDirectory,name:e.name,path:e.path}})})},[e]),null},Y.displayName=`ReactLocalFileTagPlugin`})),Mt=e((()=>{B(),H(),jt()})),X,Z,Q,Nt=e((()=>{oe(),g(),X=t(s()),n(),De(),je(),M(),Z=t(o()),Q=(0,X.memo)(({topicId:e,fallbackTitle:t})=>{let{t:n}=r(`topic`),i=C(Ae.getTopicById(e))?.title||t,a=C(e=>e.switchTopic),o=(0,X.useCallback)(t=>{t.stopPropagation(),e&&a(e)},[a,e]);return(0,Z.jsx)(`span`,{style:{cursor:e?`pointer`:`default`,display:`inline-flex`,marginInlineEnd:4,userSelect:`none`},onClick:o,children:(0,Z.jsx)(ie,{color:`blue`,icon:(0,Z.jsx)(h,{size:12}),variant:`borderless`,children:i||n(`defaultTitle`)})})}),Q.displayName=`ReferTopicView`}));function Pt(e,t){return b(new $(e,t))}function Ft(e){return e.getType()===$.getType()}var It,$,Lt=e((()=>{E(),D(),S(),It=t(s()),Nt(),$=class e extends y{__topicId;__topicTitle;static getType(){return`refer-topic`}static clone(t){return new e(t.__topicId,t.__topicTitle,t.__key)}static importJSON(e){return Pt(e.topicId,e.topicTitle).updateFromJSON(e)}static importDOM(){return null}constructor(e,t,n){super(n),this.__topicId=e,this.__topicTitle=t}get topicId(){return this.__topicId}get topicTitle(){return this.__topicTitle}exportDOM(){return{element:document.createElement(`span`)}}createDOM(e){let t=document.createElement(`span`);return x(t,e.theme.referTopic),t}getTextContent(){return this.__topicTitle}isInline(){return!0}updateDOM(){return!1}exportJSON(){return{...super.exportJSON(),topicId:this.__topicId,topicTitle:this.__topicTitle}}updateFromJSON(e){return super.updateFromJSON(e)}decorate(t){let n=T(t)?.getDecorator(e.getType());return n?typeof n==`function`?n(this,t):{queryDOM:n.queryDOM,render:n.render(this,t)}:null}renderHeadless({key:e}){return(0,It.createElement)(Q,{fallbackTitle:this.__topicTitle,key:e,topicId:this.__topicId})}}}));export{F as C,j as D,at as E,st as S,qe as T,St as _,Q as a,L as b,Y as c,H as d,z as f,R as g,bt as h,Lt as i,jt as l,yt as m,Ft as n,Nt as o,B as p,$ as r,Mt as s,Pt as t,V as u,vt as v,ct as w,ht as x,_t as y};