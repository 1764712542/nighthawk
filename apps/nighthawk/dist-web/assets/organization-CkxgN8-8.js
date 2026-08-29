import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Er as i,cs as a,jr as o,ls as s,xi as c}from"./app-const-Bl9rlHwj.js";import{Cr as l,Qr as u,Xr as d,bt as f,xr as p}from"./dialog-BebLzVzY.js";import{a as m,h,y as ee}from"../vendor/vendor-react-CBcx1o7d.js";import{a as g,b as te,c as _,f as v,ft as ne,pt as re,t as y}from"./es-CVJR_g25.js";import{Qu as ie,x as ae}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as b,et as oe,i as x,t as S}from"./base-ui-BAv0gRbN.js";import{t as C,ur as se,zt as ce}from"./es-LELdnrjB.js";import{n as le,s as ue}from"./client-BE8DoWhQ.js";import{n as de,t as fe}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{r as w,t as T}from"./discover-B1TeDH2v.js";import{n as pe,t as me}from"./useCommunityWorkspaceProfile-CPSJ04Cm.js";import{n as he,t as ge}from"./NotFound-BhUOIHWF.js";import{n as _e,r as ve}from"./ListLoading-D06Xj_T3.js";import{f as ye,u as be}from"./UserPluginCard-D2dh5aE_.js";import{a as xe,i as Se,n as Ce,o as we,r as Te,t as Ee}from"./UserSkillCard-BtMfEX_S.js";import{a as De,c as E,i as Oe,l as ke,n as Ae,o as je,r as Me,s as Ne,t as Pe}from"./WorkspacePluginList-BrdkulDu.js";var D,O,k,Fe,A,j=e((()=>{D=t(s()),O=t(a()),k=(0,D.createContext)(null),Fe=(0,D.memo)(({children:e,config:t})=>(0,O.jsx)(k,{value:t,children:e})),A=()=>{let e=(0,D.use)(k);if(!e)throw Error(`useOrganizationDetailContext must be used within OrganizationDetailProvider`);return e}})),M,N,P,Ie=e((()=>{C(),S(),M=t(s()),n(),T(),j(),N=t(a()),P=(0,M.memo)(()=>{let{t:e}=r(`discover`),{user:t}=A(),{data:n}=w(e=>e.useFollowCounts)(t.id),i=n?.followingCount||t.followingCount||0,a=n?.followersCount||t.followersCount||0;return(0,N.jsxs)(u,{horizontal:!0,align:`center`,gap:16,children:[(0,N.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,N.jsx)(x,{style:{fontWeight:600},children:i}),(0,N.jsx)(x,{type:`secondary`,children:e(`user.following`)})]}),(0,N.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,N.jsx)(x,{style:{fontWeight:600},children:a}),(0,N.jsx)(x,{type:`secondary`,children:e(`user.followers`)})]})]})})})),F,I,L,R,z=e((()=>{C(),y(),F=t(s()),I=t(a()),L=g(({css:e,cssVar:t})=>({banner:e`
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;

    width: 100%;
    height: 160px;
    padding: 16px;

    ${v.sm} {
      position: relative;

      width: calc(100% + 32px);
      height: 120px;
      margin-block: -16px 0;
      margin-inline: -16px;
    }

    @media (width <= 1720px) {
      height: 144px;
      padding: 0;
    }
  `,bannerAvatar:e`
    filter: blur(100px);
  `,bannerInner:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};

    @media (width <= 1720px) {
      border-radius: 0;
    }
  `,placeholder:e`
    position: relative;
    width: 100%;
    height: 64px;
    min-height: 64px;

    ${v.sm} {
      display: none;
    }
  `})),R=(0,F.memo)(({avatar:e,bannerUrl:t})=>{let n=t||e,r=!t&&!!e;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:L.banner,children:(0,I.jsx)(d,{className:L.bannerInner,children:n&&(0,I.jsx)(`div`,{className:r?L.bannerAvatar:void 0,style:{backgroundImage:`url(${n})`,backgroundPosition:`center`,backgroundSize:`cover`,height:`100%`,width:`100%`}})})}),(0,I.jsx)(`div`,{className:L.placeholder})]})})})),B,V,H,U,Le=e((()=>{i(),C(),S(),y(),ae(),B=t(s()),n(),we(),j(),Ie(),z(),V=t(a()),H=e=>{if(e)return e.startsWith(`/`)?`${window.location.origin}${e}`:e},U=(0,B.memo)(()=>{let{t:e}=r(`discover`),{user:t}=A(),n=t.displayName||t.userName||t.namespace,i=t.userName||t.namespace,a=(0,B.useMemo)(()=>H(t.avatarUrl),[t.avatarUrl]);return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(R,{avatar:a,bannerUrl:(0,B.useMemo)(()=>H(t.bannerUrl),[t.bannerUrl])}),(0,V.jsxs)(u,{gap:16,children:[(0,V.jsx)(oe,{avatar:a,shape:`square`,size:64,style:{boxShadow:`0 0 0 4px ${_.colorBgContainer}`,flexShrink:0}}),(0,V.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:16,justify:`space-between`,children:[(0,V.jsxs)(u,{gap:4,style:{overflow:`hidden`},children:[(0,V.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,V.jsx)(x,{ellipsis:!0,as:`h1`,fontSize:24,style:{margin:0},weight:`bold`,children:n}),(0,V.jsx)(b,{style:{flexShrink:0,margin:0},children:e(`user.accountType.organization`)})]}),(0,V.jsxs)(x,{ellipsis:!0,fontSize:12,type:`secondary`,children:[`@`,i]})]}),(0,V.jsx)(xe,{userId:t.id})]}),(0,V.jsx)(P,{}),t.description&&(0,V.jsx)(x,{as:`p`,children:t.description}),(0,V.jsx)(p,{children:(0,V.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[t.socialLinks?.github&&(0,V.jsx)(l,{title:`@${t.socialLinks.github}`,children:(0,V.jsx)(`a`,{href:`https://github.com/${t.socialLinks.github}`,rel:`noopener noreferrer`,target:`_blank`,children:(0,V.jsx)(f,{icon:(0,V.jsx)(c,{size:16}),size:20,variant:`outlined`})})}),t.socialLinks?.twitter&&(0,V.jsx)(l,{title:`@${t.socialLinks.twitter}`,children:(0,V.jsx)(`a`,{href:`https://twitter.com/${t.socialLinks.twitter}`,rel:`noopener noreferrer`,target:`_blank`,children:(0,V.jsx)(f,{icon:(0,V.jsx)(o,{size:16}),size:20,variant:`outlined`})})}),t.socialLinks?.website&&(0,V.jsx)(l,{title:t.socialLinks.website,children:(0,V.jsx)(`a`,{href:t.socialLinks.website,rel:`noopener noreferrer`,target:`_blank`,children:(0,V.jsx)(f,{icon:ie,size:20,variant:`outlined`})})})]})})]})]})})})),W,G,K,Re=e((()=>{C(),S(),te(),W=t(s()),n(),le(),Se(),Ce(),E(),G=t(a()),K=(0,W.memo)(({rows:e=4,pageSize:t=8})=>{let{t:n}=r(`discover`),{skills:i=[],canEdit:a,onRefreshProfile:o}=ke(),[s,c]=(0,W.useState)(1),[l,d]=(0,W.useState)(``),[f,p]=(0,W.useState)(!1),m=(0,W.useCallback)(async()=>{let{marketAccountId:e}=await ue.workspace.ensureMarketOrganization.mutate();return{actAs:e}},[]),h=(0,W.useMemo)(()=>{let e=[...i];if(l.trim()){let t=l.toLowerCase();e=e.filter(e=>{let n=e?.name?.toLowerCase()||``,r=e?.description?.toLowerCase()||``;return n.includes(t)||r.includes(t)})}return e},[i,l]),ee=(0,W.useMemo)(()=>{let e=(s-1)*t;return h.slice(e,e+t)},[h,s,t]);if((0,W.useEffect)(()=>{c(1)},[l]),i.length===0&&!a)return null;let g=h.length>t;return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(u,{gap:16,children:[(0,G.jsxs)(u,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,G.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,G.jsx)(x,{fontSize:16,weight:500,children:n(`user.skills`)}),i.length>0&&(0,G.jsx)(b,{children:h.length})]}),(0,G.jsx)(u,{horizontal:!0,align:`center`,gap:8,children:a&&i.length>0&&(0,G.jsx)(re.Search,{allowClear:!0,placeholder:n(`user.searchPlaceholder`),style:{width:200},value:l,onChange:e=>d(e.target.value)})})]}),i.length>0?(0,G.jsx)(se,{rows:e,width:`100%`,children:ee.map((e,t)=>(0,G.jsx)(Ee,{...e},e.identifier||t))}):(0,G.jsx)(u,{align:`center`,justify:`center`,style:{minHeight:120,opacity:.5},children:(0,G.jsx)(x,{type:`secondary`,children:n(`user.noSkills`)})}),g&&(0,G.jsx)(u,{align:`center`,justify:`center`,children:(0,G.jsx)(ne,{current:s,pageSize:t,showSizeChanger:!1,total:h.length,onChange:e=>c(e)})})]}),(0,G.jsx)(Te,{beforeSubmit:m,open:f,onClose:()=>p(!1),onSuccess:o})]})})})),q,J,Y,ze=e((()=>{C(),q=t(s()),E(),je(),Oe(),Ae(),Re(),j(),J=t(a()),Y=(0,q.memo)(()=>{let{agents:e,agentCount:t,agentGroups:n,groupCount:r,mobile:i,plugins:a,skills:o,totalInstalls:s,user:c}=A();return(0,J.jsx)(Ne,{config:(0,q.useMemo)(()=>({agentCount:t,agentGroups:n,agents:e,canEdit:!1,groupCount:r,mobile:i,plugins:a,skills:o,totalInstalls:s,user:c}),[t,n,e,r,i,a,o,s,c]),children:(0,J.jsxs)(u,{gap:32,children:[(0,J.jsx)(De,{}),(0,J.jsx)(Me,{}),(0,J.jsx)(K,{}),(0,J.jsx)(Pe,{})]})})})})),Be,X,Ve,He=e((()=>{C(),y(),Be=t(s()),ve(),z(),X=t(a()),Ve=(0,Be.memo)(()=>(0,X.jsxs)(u,{gap:24,width:`100%`,children:[(0,X.jsx)(R,{}),(0,X.jsxs)(u,{gap:16,children:[(0,X.jsx)(ce.Avatar,{shape:`square`,size:64,style:{boxShadow:`0 0 0 4px ${_.colorBgContainer}`,flexShrink:0}}),(0,X.jsx)(ce,{paragraph:{rows:1}})]}),(0,X.jsx)(_e,{length:4,rows:4})]}))})),Z,Q,$,Ue;e((()=>{Z=t(s()),m(),me(),fe(),T(),he(),be(),j(),Le(),ze(),He(),Q=t(a()),$=(0,Z.memo)(({mobile:e})=>{let t=ee(),n=h(),r=decodeURIComponent(t.slug??``),i=de(),{isWorkspaceScope:a}=pe(),{data:o,isLoading:s}=w(e=>e.useUserProfile)({username:r});(0,Z.useEffect)(()=>{let e=ye({isWorkspaceScope:a,pathname:n.pathname,search:n.search});e&&i(e,{replace:!0})},[a,n.pathname,n.search,i]);let c=(0,Z.useMemo)(()=>{if(!o?.user||o.user.type!==`organization`)return null;let{user:t,agents:n,agentGroups:r,skills:i,plugins:a}=o,s=n.reduce((e,t)=>e+(t.installCount||0),0);return{agentCount:n.length,agentGroups:r||[],agents:n,groupCount:r?.length||0,mobile:e,plugins:a||[],skills:i||[],totalInstalls:s,user:t}},[o,e]);return s?(0,Q.jsx)(Ve,{}):c?(0,Q.jsxs)(Fe,{config:c,children:[(0,Q.jsx)(U,{}),(0,Q.jsx)(Y,{})]}):(0,Q.jsx)(ge,{})}),Ue=()=>(0,Q.jsx)($,{mobile:!0})}))();export{Ue as MobileOrganizationDetailPage,$ as default};