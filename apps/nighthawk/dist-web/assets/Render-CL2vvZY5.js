import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{n as i,t as a}from"./agent-Cvv887Je.js";import{O as o,cs as s,hr as c,ls as l,mr as u}from"./app-const-Bl9rlHwj.js";import{Hr as ee,Qr as d,U as f}from"./dialog-BebLzVzY.js";import{a as p,t as m}from"./es-CVJR_g25.js";import{Ih as h,K_ as g,Of as te,Qu as ne,e_ as re,mc as ie,ur as ae,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{et as oe,i as v,t as y}from"./base-ui-BAv0gRbN.js";import{t as b,zt as se}from"./es-LELdnrjB.js";import{C as ce,E as le,Gt as ue,J as de,Z as fe,g as pe,qt as me,x as he}from"./serverConfig-CmLVLry1.js";import{a as ge,s as _e,t as ve}from"./swrKeys-B4sicPWZ.js";import{D as ye,d as be,t as x}from"./selectors-CTRMh8eY.js";import{n as xe,t as Se}from"./agentDocument-BBrfndcx.js";import{n as Ce,t as we}from"./document-J--mQsWf.js";import{n as Te,r as Ee}from"./src-DYf_YQ1m.js";import{Kt as De,Yt as Oe,bn as ke,yn as Ae}from"./tool-BJJaXV35.js";import{n as je,t as Me}from"./Github-Bay25f86.js";import{A as S,I as Ne,L as Pe,St as C,j as Fe,xt as Ie}from"./index-Djd-5Nq9.js";import{n as Le,t as Re}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";var w,T,E,D,O,k,A,j=e((()=>{de(),o(),Fe(),w=new Set([`acceptance`,`agent`,`page`,`task`,`tasks`,`verify`]),T=new Set(Object.values(fe)),E=new Set([`_next`,`api`,`f`,`oidc`,`trpc`,`webapi`]),D=new Set([`agent`,`acceptance`,`community`,`apps`,`eval`,`group`,`image`,`memory`,`page`,`resource`,`settings`,`task`,`tasks`,`video`,`verify`]),O=(e,t)=>{let n=e.split(`/`).filter(Boolean);return w.has(n[0])?{segments:n,workspaceSlug:void 0}:t.has(n[0])&&w.has(n[1])?{segments:n.slice(1),workspaceSlug:n[0]}:null},k=(e,t)=>{let n=new Set([new URL(u).host,new URL(c).host]);if(!t)return n.has(e.host);try{let r=new URL(t);return r.protocol!==`http:`&&r.protocol!==`https:`?n.has(e.host):e.host===r.host||n.has(r.host)&&n.has(e.host)}catch{return!1}},A=(e,t,n=[])=>{if(!e)return null;let r=e.startsWith(`/`)&&!e.startsWith(`//`),i;try{i=new URL(e,t||`https://app.lobehub.com`)}catch{return null}if(!r&&!k(i,t))return null;let a=O(i.pathname,new Set(n)),o=`${i.pathname}${i.search}${i.hash}`;if(!a){let e=i.pathname.split(`/`).find(Boolean);if(!e||E.has(e)||!D.has(e)&&!n.includes(e))return null;let t=n.includes(e)?e:void 0;return{pathname:o,type:`route`,...t?{workspaceSlug:t}:{}}}let{segments:s,workspaceSlug:c}=a;if(s[0]===`acceptance`&&s[1])return{acceptanceId:s[1],pathname:o,type:`acceptance`,...c?{workspaceSlug:c}:{}};if(s[0]===`page`&&s[1])return{documentId:S(s[1],`docs`),pathname:o,type:`document`,...c?{workspaceSlug:c}:{}};if(s[0]===`task`&&s[1])return{pathname:o,taskId:s[1],type:`task`,...c?{workspaceSlug:c}:{}};if(s[0]===`verify`&&s[1])return{pathname:o,runId:s[1],type:`verify`,...c?{workspaceSlug:c}:{}};if(s[0]===`agent`&&s[1]){if(T.has(s[1]))return{pathname:o,type:`route`};let e=s[1];if(s[2]===`docs`&&s[3])return{agentId:e,documentId:S(s[3],`docs`),pathname:o,type:`document`,...c?{workspaceSlug:c}:{}};if(s[2]===`task`&&s[3])return{agentId:e,pathname:o,taskId:s[3],type:`task`,...c?{workspaceSlug:c}:{}};if(s.length===2)return{agentId:e,pathname:o,type:`agent`,...c?{workspaceSlug:c}:{}}}return{pathname:o,type:`route`,...c?{workspaceSlug:c}:{}}}})),M,N,P,ze=e((()=>{_(),M=t(l()),N=t(s()),P=(0,M.memo)(({domain:e,size:t=15})=>{let[n,r]=(0,M.useState)(!1);return n?(0,N.jsx)(ne,{size:t}):(0,N.jsx)(`img`,{alt:``,height:t,src:`https://icons.duckduckgo.com/ip3/${e}.ico`,style:{borderRadius:3,objectFit:`contain`},width:t,onError:()=>r(!0)})}),P.displayName=`FaviconIcon`})),F,I,L,Be=e((()=>{F=/^\/verify(?:\/[^/]+)?\/?$/,I=e=>e.split(/[?#]/,1)[0],L=e=>{let t=I(e);return F.test(t)}})),Ve,He=e((()=>{Be(),Ve=e=>!!L(e)})),R,z,B,Ue,We,V,Ge=e((()=>{b(),y(),m(),_(),R=t(l()),n(),ge(),i(),Ce(),Ae(),Ie(),z=t(s()),B=p(({css:e,cssVar:t})=>({content:e`
    width: 320px;
    padding: 16px;
  `,description:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    line-height: 1.55;
    color: ${t.colorTextSecondary};
  `,icon:e`
    display: grid;
    flex: none;
    place-items: center;

    width: 36px;
    height: 36px;
    border-radius: ${t.borderRadiusLG};

    color: ${t.colorTextSecondary};

    background: ${t.colorFillTertiary};
  `,title:e`
    overflow: hidden;

    font-weight: 600;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,type:e`
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `})),Ue=(e,t)=>{switch(e){case`delivered`:return t(`internalLink.preview.verifyStatus.delivered`);case`errored`:return t(`internalLink.preview.verifyStatus.errored`);case`failed`:return t(`internalLink.preview.verifyStatus.failed`);case`passed`:return t(`internalLink.preview.verifyStatus.passed`);case`planned`:return t(`internalLink.preview.verifyStatus.planned`);case`repairing`:return t(`internalLink.preview.verifyStatus.repairing`);case`uncertain`:return t(`internalLink.preview.verifyStatus.uncertain`);case`unverified`:return t(`internalLink.preview.verifyStatus.unverified`);case`verifying`:return t(`internalLink.preview.verifyStatus.verifying`);default:return null}},We=async(e,t)=>{switch(e.type){case`acceptance`:{let n=await C.getAcceptanceBundle(e.acceptanceId);if(!n)return null;let r=n.checks.filter(e=>e.state===`passed`).length,i=n.checks.filter(e=>e.state===`failed`||e.state===`uncertain`).length;return{description:n.acceptance.requirement||n.latestReport?.summary,meta:t(`internalLink.preview.acceptanceCounts`,{exceptions:i,passed:r,total:n.checks.length}),secondaryMeta:t(`internalLink.preview.acceptanceRounds`,{count:n.rounds.length}),title:n.subject.title||n.subject.id}}case`agent`:return a.getAgentConfigById(e.agentId);case`document`:{let t=await we.getDocumentById(e.documentId);return t?{description:t.content,title:t.title||t.filename}:null}case`task`:{let t=(await ke.getDetail(e.taskId)).data;return t?{description:t.description||t.instruction,title:t.name||t.identifier}:null}case`verify`:{let n=await C.getReportBundle(e.runId);if(!n)return null;let{report:r,run:i}=n,a=r?.verdict??i.status,o=r?t(`internalLink.preview.verifyCounts`,{failed:r.failedChecks??0,passed:r.passedChecks??0,uncertain:r.uncertainChecks??0}):null,s=(i.scenario??`coding`)===`coding`?i.context:null,c=i.context?.testedAt,l=[s?.branch,s?.commit?.slice(0,10),c?new Date(c).toLocaleString():null].filter(Boolean);return{description:r?.summary,meta:[Ue(a,t),o].filter(Boolean).join(` · `),secondaryMeta:l.join(` · `),title:i.title}}case`route`:return null}},V=(0,R.memo)(({children:e,fallbackTitle:t,reference:n})=>{let{t:i}=r(`chat`),[a,o]=(0,R.useState)(!1),{data:s,isLoading:c}=_e(a?[`internal-entity-preview`,n.type,n.pathname]:null,()=>We(n,i),{revalidateOnFocus:!1}),l=n.type===`acceptance`?g:n.type===`agent`?re:n.type===`task`?ae:n.type===`verify`?h:te,u=i(`internalLink.preview.${n.type}`);return(0,z.jsx)(f,{content:c?(0,z.jsx)(`div`,{className:B.content,children:(0,z.jsx)(se,{active:!0,avatar:!0,paragraph:{rows:2}})}):(0,z.jsxs)(d,{className:B.content,gap:12,children:[(0,z.jsxs)(d,{horizontal:!0,align:`center`,gap:12,children:[n.type===`agent`&&s?.avatar?(0,z.jsx)(oe,{avatar:s.avatar,background:s.backgroundColor??void 0,shape:`square`,size:36}):(0,z.jsx)(`span`,{className:B.icon,children:(0,z.jsx)(ee,{icon:l,size:19})}),(0,z.jsxs)(d,{flex:1,gap:2,style:{minWidth:0},children:[(0,z.jsx)(`span`,{className:B.type,children:u}),(0,z.jsx)(`span`,{className:B.title,children:s?.title||t})]})]}),s?.description&&(0,z.jsx)(v,{className:B.description,fontSize:13,children:s.description}),s?.meta&&(0,z.jsx)(v,{fontSize:12,type:`secondary`,children:s.meta}),s?.secondaryMeta&&(0,z.jsx)(v,{fontSize:12,type:`secondary`,children:s.secondaryMeta})]}),mouseEnterDelay:.35,open:a,placement:`top`,styles:{content:{borderRadius:12,overflow:`hidden`,padding:0}},trigger:`hover`,triggerProps:{role:`link`},onOpenChange:o,children:e})}),V.displayName=`InternalEntityPreview`})),H,U,Ke,qe,W,Je=e((()=>{o(),Ee(),b(),m(),_(),H=t(l()),Re(),He(),ge(),xe(),ce(),De(),Ge(),U=t(s()),Ke=p(({css:e,cssVar:t})=>({link:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    color: ${t.colorText} !important;
    text-decoration-color: ${t.colorBorder};
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;

    transition:
      color 0.15s,
      text-decoration-color 0.15s;

    &:hover {
      color: ${t.colorText} !important;
      text-decoration-color: ${t.colorTextSecondary};
    }

    &:focus-visible {
      border-radius: 2px;
      outline: 2px solid ${t.colorPrimaryBorder};
      outline-offset: 2px;
    }

    > svg {
      flex: none;
      color: ${t.colorTextSecondary};
    }
  `})),qe={acceptance:g,agent:re,document:te,task:ae,verify:h},W=(0,H.memo)(({href:e,label:t,reference:n})=>{let r=Le(),i=le(e=>e.activeAgentId),[a,o,s,c,l]=Oe(e=>[e.openAcceptance,e.openAgentDetail,e.openDocument,e.openTaskDetail,e.openVerifyReport]),u=n.type===`document`?n.agentId:void 0,d=!!u&&u===i,{data:f,mutate:p}=_e(d?ve.documentsList(u):null,()=>Se.listDocuments({agentId:u})),m=(0,H.useCallback)(async e=>{if(!(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)){if(e.preventDefault(),(n.type===`acceptance`||n.type===`document`||n.type===`verify`)&&Ve(n.pathname)){window.location.assign(n.pathname);return}if(`workspaceSlug`in n&&n.workspaceSlug&&n.type!==`verify`&&n.type!==`acceptance`){r(n.pathname,{escape:!0});return}if(n.type===`document`&&n.agentId&&n.agentId!==i){r(n.pathname,{escape:!0});return}switch(n.type){case`acceptance`:a(n.acceptanceId);break;case`agent`:o(n.agentId);break;case`document`:{let e=(d?f??await p().catch(()=>void 0):void 0)?.find(e=>e.documentId===n.documentId)?.id;s(n.documentId,e);break}case`task`:c(n.taskId);break;case`verify`:l(n.runId);break;case`route`:r(n.pathname);break}}},[i,f,r,a,o,s,c,l,n,p,d]),h=n.type===`route`?void 0:qe[n.type],g=(0,U.jsxs)(`a`,{[Te]:`true`,className:Ke.link,href:e,rel:`noopener noreferrer`,target:`_blank`,onClick:m,children:[h&&(0,U.jsx)(ee,{icon:h,size:14}),t]});return n.type===`route`||n.workspaceSlug?g:(0,U.jsx)(V,{fallbackTitle:t,reference:n,children:g})}),W.displayName=`InternalEntityLink`})),Ye,G,K,Xe=e((()=>{Ye=t(l()),G=t(s()),K=(0,Ye.memo)(({size:e=`1em`})=>(0,G.jsx)(`svg`,{fill:`currentColor`,height:e,role:`img`,viewBox:`0 0 24 24`,width:e,xmlns:`http://www.w3.org/2000/svg`,children:(0,G.jsx)(`path`,{d:`M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z`})})),K.displayName=`LinearIcon`})),q,J,Y,X,Ze=e((()=>{o(),y(),m(),_(),q=t(l()),n(),ue(),pe(),x(),J=t(s()),Y=p(({css:e,cssVar:t})=>({chip:e`
    color: ${t.colorLink};
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: ${t.colorLinkHover};
    }
  `,icon:e`
    display: inline-flex;
    margin-inline-end: 4px;
    vertical-align: -0.15em;
  `,sideBrowser:e`
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
  `,wrapper:e`
    display: inline-flex;
    gap: 2px;
    align-items: center;

    &:hover [data-side-browser],
    &:focus-within [data-side-browser] {
      pointer-events: auto;
      opacity: 1;
    }
  `})),X=(0,q.memo)(({href:e,icon:t,label:n})=>{let{t:i}=r(`chat`),a=me(e=>e.openInBrowserTab);return he(ye.enableInAppBrowser),(0,q.useCallback)(t=>{t.preventDefault(),a(e)},[e,a]),(0,J.jsxs)(`a`,{className:Y.chip,href:e,rel:`noopener noreferrer`,target:`_blank`,children:[t&&(0,J.jsx)(`span`,{className:Y.icon,children:t}),n]})}),X.displayName=`LinkChip`})),Qe,Z,Q,$,$e=e((()=>{je(),_(),Qe=t(l()),Ne(),pe(),x(),j(),ze(),Je(),Xe(),Ze(),Z=t(s()),Q=15,$=(0,Qe.memo)(({node:e})=>{let{linkHref:t,linkKind:n,linkLabel:r,linkDomain:i}=e?.properties||{},a=he(be.enableMessageLinkIcon),o=Pe(),s=r||t||``,c=A(t,typeof window>`u`?void 0:window.location.origin,o.map(e=>e.slug));return t&&c?(0,Z.jsx)(W,{href:t,label:s,reference:c}):a?n===`github`?(0,Z.jsx)(X,{href:t,icon:(0,Z.jsx)(Me,{size:Q}),label:s}):n===`linear`?(0,Z.jsx)(X,{href:t,icon:(0,Z.jsx)(K,{size:Q}),label:s}):n===`email`?(0,Z.jsx)(X,{href:t,icon:(0,Z.jsx)(ie,{size:Q}),label:s}):(0,Z.jsx)(X,{href:t,icon:(0,Z.jsx)(P,{domain:i||``,size:Q}),label:s}):(0,Z.jsx)(X,{href:t,label:s})}),$.displayName=`LobeLinkRender`}));export{A as i,$e as n,j as r,$ as t};