import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as a,ls as o}from"./app-const-Bl9rlHwj.js";import{B as s,Cr as c,Hr as l,Q as ee,Qr as u,St as te,Xr as d,bt as f,mr as p}from"./dialog-BebLzVzY.js";import{a as m,t as h}from"./es-CVJR_g25.js";import{It as g,gi as _,if as ne,wa as re,wp as ie,x as ae}from"../vendor/vendor-icons-C-Y4oLkk.js";import{P as oe,i as v,t as se}from"./base-ui-BAv0gRbN.js";import{Or as y,k as b,t as x}from"./es-LELdnrjB.js";import{g as S,x as C}from"./serverConfig-CmLVLry1.js";import{v as w,y as T}from"./swrKeys-B4sicPWZ.js";import{D as E,M as D,t as O}from"./selectors-CTRMh8eY.js";import{Q as k,X as A,Y as j,Z as M}from"./index-Djd-5Nq9.js";import{n as N,o as P,s as F}from"./ExecutionStatus-AQSX5GaQ.js";import{n as I,t as L}from"./AsyncError-DLThyZ5z.js";import{r as R,t as ce}from"./SkeletonList-BEka3_sY.js";import{n as z,t as B}from"./TopicCreatorAvatar-DKUAV2zu.js";import{a as V,i as H,t as U}from"./project-qiEJBgDx.js";import{n as W,t as G}from"./CreateProjectModal-C5WF8vIL.js";import{n as le,t as ue}from"./WorkspaceLink-DKEucXjF.js";import{n as de,t as fe}from"./UserAvatar-B-cnH3a9.js";import{n as pe,t as K}from"./ProjectDisabled-DZAZCa--.js";var q,J,Y,X,Z,Q,$,me=e((()=>{x(),se(),h(),q=t(n()),ae(),J=t(o()),r(),w(),I(),P(),k(),ce(),G(),pe(),z(),de(),A(),le(),U(),S(),O(),Y=t(a()),X=m(({css:e,cssVar:t})=>({actions:e`
    flex: none;
    opacity: 0;
    transition: opacity ${t.motionDurationFast};

    @media (hover: none) {
      opacity: 1;
    }
  `,identifier:e`
    flex: none;
    min-width: 72px;
    color: ${t.colorTextTertiary};
  `,link:e`
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;

    min-width: 0;

    color: inherit;
  `,owner:e`
    flex: none;
    width: 20px;
  `,row:e`
    padding-block: 7px;
    padding-inline: 4px 12px;
    border-radius: ${t.borderRadiusLG};
    color: inherit;

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:hover .project-row-actions,
    &:focus-within .project-row-actions {
      opacity: 1;
    }
  `,updatedAt:e`
    flex: none;

    min-width: 88px;

    color: ${t.colorTextQuaternary};
    text-align: end;
    white-space: nowrap;
  `})),Z=(0,J.memo)(({userId:e})=>{let t=T();return(0,Y.jsx)(`span`,{className:X.owner,children:t?(0,Y.jsx)(B,{size:20,userId:e}):(0,Y.jsx)(fe,{size:20})})}),Z.displayName=`ProjectOwnerAvatar`,Q=(0,J.memo)(({project:e})=>{let{t}=i([`project`,`common`]),[n,r]=(0,J.useState)(!1),a=V(e=>e.deleteProject),o=C(D.userId)===e.userId,d=F(e.status),p=N[d],m=async()=>{r(!0);try{await a(e.id),s.success(t(`list.deleteSuccess`,{name:e.name}))}catch(e){console.error(`Failed to delete project`,e),s.error(t(`list.deleteError`)),r(!1)}},h=[{danger:!0,icon:(0,Y.jsx)(l,{icon:g}),key:`delete`,label:t(`list.deleteAction`),onClick:()=>{oe({cancelText:t(`cancel`,{ns:`common`}),content:t(`list.deleteConfirmDescription`,{name:e.name}),okButtonProps:{danger:!0},okText:t(`delete`,{ns:`common`}),onOk:()=>void m(),title:t(`list.deleteConfirmTitle`)})}}],_=(0,Y.jsxs)(u,{horizontal:!0,align:`center`,className:X.row,gap:8,children:[(0,Y.jsxs)(ue,{className:X.link,to:`/project/${e.slug??e.id}`,children:[(0,Y.jsx)(c,{title:t(`acceptance.status.${d}`),children:(0,Y.jsx)(l,{color:p.color,icon:p.icon,size:16})}),(0,Y.jsx)(u,{flex:1,style:{minWidth:0},children:(0,Y.jsx)(v,{ellipsis:!0,weight:500,children:e.name})}),(0,Y.jsx)(v,{className:X.identifier,fontSize:12,children:e.identifier}),(0,Y.jsx)(Z,{userId:e.userId}),(0,Y.jsx)(v,{className:X.updatedAt,fontSize:12,title:(0,q.default)(e.updatedAt).format(`YYYY-MM-DD HH:mm`),children:(0,q.default)(e.updatedAt).fromNow()})]}),o&&(0,Y.jsx)(`span`,{className:`${X.actions} project-row-actions`,children:(0,Y.jsx)(te,{items:h,placement:`bottomRight`,children:(0,Y.jsx)(f,{icon:ie,loading:n,size:`small`,title:t(`list.moreActions`)})})})]});return o?(0,Y.jsx)(ee,{items:h,children:_}):_}),Q.displayName=`ProjectRow`,$=(0,J.memo)(()=>{let{t:e}=i(`project`),[t,n]=(0,J.useState)(``),r=C(E.enableProjects),a=H(),{error:o,isLoading:s,mutate:c}=V(e=>e.useFetchProjectList)(r),l=(0,J.useMemo)(()=>{let e=t.trim().toLocaleLowerCase();return e?a.filter(t=>[t.name,t.identifier,t.description].filter(Boolean).some(t=>t.toLocaleLowerCase().includes(e))):a},[t,a]);return r?(0,Y.jsxs)(u,{flex:1,height:`100%`,children:[(0,Y.jsx)(M,{left:(0,Y.jsx)(v,{style:{paddingInlineStart:4},weight:500,children:e(`list.title`)})}),(0,Y.jsxs)(j,{gap:16,paddingBlock:16,wrapperStyle:{flex:1,overflowY:`auto`},children:[(0,Y.jsxs)(u,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[(0,Y.jsx)(b,{allowClear:!0,placeholder:e(`list.searchPlaceholder`),style:{maxWidth:280},value:t,onChange:e=>n(e.target.value)}),(0,Y.jsx)(p,{icon:re,onClick:()=>W(),children:e(`create.action`)})]}),o?(0,Y.jsx)(L,{error:o,onRetry:()=>c()}):s&&a.length===0?(0,Y.jsx)(R,{rows:8}):l.length===0?(0,Y.jsx)(d,{flex:1,padding:48,children:(0,Y.jsx)(y,{description:t.trim()?e(`list.searchEmpty`):e(`list.emptyDescription`),icon:t.trim()?_:ne})}):(0,Y.jsx)(u,{gap:4,children:l.map(e=>(0,Y.jsx)(Q,{project:e},e.id))})]})]}):(0,Y.jsx)(K,{})}),$.displayName=`ProjectListPage`}));e((()=>{me()}))();export{$ as default};