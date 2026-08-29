import{n as e,o as t,r as n}from"./rolldown-runtime-CMxvf4Kt.js";import{F as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{O as o,cs as s,ls as c,oa as ee,pr as te,xr as ne}from"./app-const-Bl9rlHwj.js";import{C as re,Hr as l,Qr as u,Xr as d,mr as ie}from"./dialog-BebLzVzY.js";import{a as f,c as p,l as m,s as h,t as g}from"./es-CVJR_g25.js";import{mp as ae,wm as oe,x as se}from"../vendor/vendor-icons-C-Y4oLkk.js";import{t as _,u as ce}from"./base-ui-BAv0gRbN.js";import{N as le,or as v,t as y}from"./es-LELdnrjB.js";import{l as ue,u as de}from"./client-J-I4DWNP.js";import{n as b,t as x}from"./NeuralNetworkLoading-CUDFTjYo.js";import{i as fe,s as pe,t as S}from"./HtmlPreview-BfBcvX-N.js";import{n as me,t as he}from"./AsyncError-DLThyZ5z.js";import{i as C,n as ge,r as w,t as _e}from"./fileLanguage-U66_vZxg.js";import{dt as ve,ft as ye,mt as be,pt as xe}from"./ChatInput-Dtj5KDCe.js";var T,E,D,O,Se=e((()=>{y(),_(),g(),T=t(c()),i(),ne(),de(),E=t(s()),D=f(({css:e,cssVar:t})=>({page:e`
    width: 100%;
    margin: 12px;
    padding: 24px;
    border-radius: 4px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowTertiary};
  `})),O=({fileName:e,url:t,style:n})=>{let{t:i}=a(`file`),[o,s]=(0,T.useState)(!1);return(0,E.jsx)(u,{className:D.page,id:`not-support-renderer`,style:n,children:(0,E.jsx)(d,{height:`100%`,children:(0,E.jsxs)(u,{align:`center`,gap:12,children:[(0,E.jsx)(re,{emoji:`👀`,size:64}),(0,E.jsx)(u,{style:{textAlign:`center`},children:(0,E.jsx)(r,{i18nKey:`preview.unsupportedFileAndContact`,ns:`file`,components:[(0,E.jsx)(`span`,{},`0`),(0,E.jsx)(`a`,{"aria-label":`todo`,href:te,rel:`noreferrer`,target:`_blank`},`1`)]})}),t&&(0,E.jsx)(ie,{loading:o,onClick:async()=>{s(!0),await ue(t,e||`download`),s(!1)},children:i(`preview.downloadFile`)})]})})})}})),k,A,j,M,Ce=e((()=>{y(),g(),k=t(c()),b(),ge(),w(),A=t(s()),j=f(({css:e})=>({page:e`
    width: 100%;
    height: 100%;
    padding-inline: 24px 4px;
  `})),M=(0,k.memo)(({url:e,fileName:t})=>{let{fileData:n,loading:r}=C(e),i=_e(t);return(0,A.jsx)(u,{className:j.page,children:!r&&n?(0,A.jsx)(v,{language:i,showLanguage:!1,variant:`borderless`,children:n}):(0,A.jsx)(d,{height:`100%`,children:(0,A.jsx)(x,{size:36})})})})})),N,P,F,I,we=e((()=>{y(),g(),N=t(c()),S(),b(),w(),P=t(s()),F=f(({css:e})=>({page:e`
    width: 100%;
    height: 100%;
    padding: 0;
  `})),I=(0,N.memo)(({url:e})=>{let{fileData:t,loading:n}=C(e);return(0,P.jsx)(u,{className:F.page,children:!n&&t!==null?(0,P.jsx)(fe,{content:t}):(0,P.jsx)(d,{height:`100%`,children:(0,P.jsx)(x,{size:36})})})}),I.displayName=`HTMLViewer`})),L,R,z,Te=e((()=>{y(),L=t(c()),b(),R=t(s()),z=(0,L.memo)(({url:e})=>{let[t,n]=(0,L.useState)(!1);return e?(0,R.jsxs)(d,{height:`100%`,width:`100%`,children:[!t&&(0,R.jsx)(x,{size:36}),(0,R.jsx)(`img`,{alt:`Image preview`,src:e,style:{display:t?`block`:`none`,height:`100%`,objectFit:`contain`,overflow:`hidden`,width:`100%`},onLoad:()=>n(!0)})]}):null})})),B,V,H,U,Ee=e((()=>{y(),_(),g(),se(),B=t(c()),i(),b(),w(),V=t(s()),H=f(({css:e})=>({controls:e`
    position: absolute;
    z-index: 2;
    inset-block-start: 8px;
    inset-inline-end: 12px;

    padding: 4px;
    border: 1px solid ${p.colorBorderSecondary};
    border-radius: ${p.borderRadiusLG};

    opacity: 0.55;
    background: ${p.colorBgElevated};
    backdrop-filter: blur(8px);
    box-shadow: ${p.boxShadowTertiary};

    transition: opacity 150ms ease;

    &:hover {
      opacity: 1;
    }
  `,page:e`
    position: relative;
    overflow: hidden auto;
    width: 100%;
    height: 100%;
  `})),U=(0,B.memo)(({url:e})=>{let{t}=a(`file`),{fileData:n,loading:r}=C(e),[i,o]=(0,B.useState)(`render`);return r||n===null?(0,V.jsx)(d,{height:`100%`,width:`100%`,children:(0,V.jsx)(x,{size:36})}):(0,V.jsxs)(u,{className:H.page,children:[(0,V.jsx)(u,{horizontal:!0,align:`center`,className:H.controls,gap:4,children:(0,V.jsx)(ce,{activeKey:i,size:`small`,items:[{icon:(0,V.jsx)(l,{icon:ae}),key:`render`,label:t(`preview.render`)},{icon:(0,V.jsx)(l,{icon:oe}),key:`raw`,label:t(`preview.raw`)}],onChange:e=>o(e)})}),i===`render`?(0,V.jsx)(le,{style:{paddingBlock:16,paddingInline:24},children:n}):(0,V.jsx)(v,{language:`markdown`,showLanguage:!1,variant:`borderless`,children:n})]})})})),W,G,K,De,Oe,ke=e((()=>{y(),g(),W=t(c()),G=t(s()),K=h`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`,De=h`
  position: absolute;
  inset-block: -1px;
  inset-inline-start: -1px;

  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border: 0;
`,Oe=(0,W.memo)(({url:e})=>e?(0,G.jsx)(u,{className:m(K),height:`100%`,id:`msdoc-renderer`,width:`100%`,children:(0,G.jsx)(`iframe`,{className:m(De),id:`msdoc-iframe`,src:`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e)}`,title:`msdoc-iframe`})}):null)})),Ae,q,J,je,Me=e((()=>{y(),g(),Ae=t(c()),q=t(s()),J=f(({css:e,cssVar:t})=>({container:e`
    padding: ${t.paddingSM};
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorBgContainer};
  `,video:e`
    max-width: 100%;
    max-height: 100%;
    border-radius: ${t.borderRadius};

    object-fit: contain;
    box-shadow: ${t.boxShadowTertiary};

    &::-webkit-media-controls-panel {
      background: linear-gradient(to bottom, transparent 0%, rgb(0 0 0 / 30%) 100%);
    }

    &:focus {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `})),je=(0,Ae.memo)(({url:e})=>e?(0,q.jsx)(d,{className:J.container,height:`100%`,width:`100%`,children:(0,q.jsx)(`video`,{controls:!0,className:J.video,height:`100%`,src:e,width:`100%`})}):null)})),Ne=n({default:()=>$}),Y,X,Pe,Fe,Ie,Le,Re,ze,Z,Be,Ve,He,Ue,We,Q,Ge,$,Ke=e((()=>{o(),y(),Y=t(c()),me(),S(),b(),xe(),Se(),Ce(),we(),Te(),Ee(),ke(),ve(),Me(),X=t(s()),Pe=[`.jpg`,`.jpeg`,`.png`,`.webp`,`.gif`,`.bmp`],Fe=new Set([`image/jpg`,`image/jpeg`,`image/png`,`image/webp`,`image/gif`,`image/bmp`]),Ie=[`.mp4`,`.webm`,`.ogg`],Le=new Set([`video/mp4`,`video/webm`,`video/ogg`,`mp4`,`webm`,`ogg`]),Re=`.js,.jsx,.ts,.tsx,.mjs,.cjs,.py,.pyw,.java,.kt,.kts,.scala,.groovy,.c,.h,.cpp,.cxx,.cc,.hpp,.hxx,.cs,.go,.rs,.rb,.php,.swift,.lua,.r,.dart,.sh,.bash,.zsh,.html,.htm,.css,.scss,.sass,.less,.json,.xml,.yaml,.yml,.toml,.sql,.csv,.tsv,.ex,.exs,.erl,.hrl,.clj,.cljs,.cljc,.md,.mdx,.vim,.graphql,.gql,.txt`.split(`,`),ze=new Set([`js`,`jsx`,`ts`,`tsx`,`application/javascript`,`application/x-javascript`,`text/javascript`,`application/typescript`,`text/typescript`,`python`,`text/x-python`,`application/x-python-code`,`java`,`text/x-java-source`,`kotlin`,`scala`,`c`,`text/x-c`,`cpp`,`text/x-c++`,`csharp`,`go`,`rust`,`ruby`,`php`,`text/x-php`,`swift`,`lua`,`r`,`dart`,`bash`,`shell`,`text/x-shellscript`,`html`,`text/html`,`css`,`text/css`,`scss`,`sass`,`less`,`json`,`application/json`,`xml`,`text/xml`,`application/xml`,`yaml`,`text/yaml`,`application/x-yaml`,`toml`,`sql`,`text/x-sql`,`csv`,`text/csv`,`tsv`,`text/tab-separated-values`,`md`,`mdx`,...ee,`graphql`,`txt`,`text/plain`]),Z=[`.md`,`.mdx`,`.markdown`],Be=new Set([`md`,`mdx`,`markdown`,...ee]),Ve=[`.doc`,`.docx`,`.odt`,`.ppt`,`.pptx`,`.xls`,`.xlsx`],He=new Set([`doc`,`docx`,`odt`,`ppt`,`pptx`,`xls`,`xlsx`,`application/msword`,`application/vnd.openxmlformats-officedocument.wordprocessingml.document`,`application/vnd.oasis.opendocument.text`,`application/vnd.ms-powerpoint`,`application/vnd.openxmlformats-officedocument.presentationml.presentation`,`application/vnd.ms-excel`,`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`]),Ue=[`.zip`,`.rar`,`.7z`,`.tar`,`.gz`,`.bz2`,`.xz`,`.tgz`],We=new Set([`zip`,`rar`,`7z`,`application/zip`,`application/x-zip-compressed`,`application/x-rar-compressed`,`application/x-7z-compressed`,`application/x-tar`,`application/gzip`,`application/x-gzip`,`application/x-bzip2`,`application/x-xz`]),Q=(e,t,n,r)=>{let i=e?.toLowerCase(),a=t?.toLowerCase();return!!(i&&r.has(i)||a&&n.some(e=>a.endsWith(e)))},Ge=e=>{let[t,n]=(0,Y.useState)(0),[r,i]=(0,Y.useState)({status:`idle`});return(0,Y.useEffect)(()=>{if(!e)return;let t=!0;return i({status:`loading`}),ye().then(({default:e})=>{t&&i({Renderer:e,status:`ready`})},e=>{t&&i({error:e,status:`error`})}),()=>{t=!1}},[t,e]),{retry:(0,Y.useCallback)(()=>n(e=>e+1),[]),state:r}},$=(0,Y.memo)(({id:e,style:t,fileType:n,url:r,name:i})=>{let a=be({fileName:i,fileType:n,path:r}),{retry:o,state:s}=Ge(a);if(a){if(s.status===`error`)return(0,X.jsx)(d,{height:`100%`,width:`100%`,children:(0,X.jsx)(he,{error:s.error,variant:`block`,onRetry:o})});if(s.status===`ready`){let{Renderer:t}=s;return(0,X.jsx)(t,{fileId:e,url:r})}return(0,X.jsx)(d,{height:`100%`,width:`100%`,children:(0,X.jsx)(x,{size:36})})}return Q(n,i,Pe,Fe)?(0,X.jsx)(z,{fileId:e,url:r}):Q(n,i,Ie,Le)?(0,X.jsx)(je,{fileId:e,url:r}):Q(n,i,Ue,We)?(0,X.jsx)(O,{fileName:i,style:t,url:r}):Q(n,i,Ve,He)?(0,X.jsx)(Oe,{fileId:e,url:r}):pe({fileName:i,fileType:n})?(0,X.jsx)(I,{fileId:e,url:r}):Q(n,i,Z,Be)?(0,X.jsx)(U,{fileId:e,url:r}):Q(n,i,Re,ze)?(0,X.jsx)(M,{fileId:e,fileName:i,url:r}):(0,X.jsx)(O,{fileName:i,style:t,url:r})})}));export{Ne as n,Ke as r,$ as t};