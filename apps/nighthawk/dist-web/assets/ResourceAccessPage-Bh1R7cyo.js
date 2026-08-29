import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ba as o,La as s,O as c,cs as l,ls as u}from"./app-const-Bl9rlHwj.js";import{B as d,Hr as f,Qr as p,bt as m,mr as h}from"./dialog-BebLzVzY.js";import{a as g,o as _}from"../vendor/vendor-react-CBcx1o7d.js";import{$t as v,a as y,b,c as x,l as S,t as C,tt as w}from"./es-CVJR_g25.js";import{Bl as ee,O as T,Xh as te,et as ne,gi as E,ng as re,wa as ie,x as D}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as ae,R as oe,c as se,ct as ce,et as le,i as O,t as k}from"./base-ui-BAv0gRbN.js";import{Gt as ue,Or as de,Sr as fe,Vt as pe,hi as me,k as he,si as ge,t as A}from"./es-LELdnrjB.js";import{a as _e,s as ve}from"./swrKeys-B4sicPWZ.js";import{a as ye,i as be,n as xe,t as Se}from"./workspaceAwarePath-DIBsOTQc.js";import{n as j,t as Ce}from"./resourcePermission-BNAnKaKD.js";import{Q as we,Qo as Te,X as Ee,Y as De,Z as Oe,Zo as ke}from"./index-Djd-5Nq9.js";import{n as Ae,t as je}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as M,t as N}from"./AsyncError-DLThyZ5z.js";import{n as Me,r as Ne}from"./forbiddenError-DkI1toKj.js";import{n as Pe,t as Fe}from"./useFetchWorkspaceMembers-DongldCO.js";import{n as Ie,t as Le}from"./useWorkspaceMembers-C6f_gb_u.js";import{n as Re,t as ze}from"./useResourcePermission-N-sxS7Qc.js";import{i as Be,n as Ve,r as He,t as Ue}from"./useAccessLevelOptions-MICD3kXG.js";var P,We,F,Ge=e((()=>{k(),P=t(u()),i(),_e(),Ce(),We=`resource-collaborators`,F=(e,t,n)=>{let{t:r}=a(`setting`),i=n?.enabled??!0,[o,s]=(0,P.useState)(!1),{data:c,error:l,isLoading:u,mutate:f}=ve(t&&i?[We,e,t]:null,()=>j.listCollaborators(e,t)),p=(0,P.useCallback)(async e=>{s(!0);try{return await e(),await f(),!0}catch(e){return console.error(`[ResourceCollaborators]`,e),d.error(e?.message||r(`permission.updateError`)),!1}finally{s(!1)}},[f,r]);return{addCollaborators:(0,P.useCallback)((n,r)=>!t||n.length===0?Promise.resolve(!1):p(()=>j.addCollaborators(e,t,n,r)),[p,e,t]),collaborators:c,error:l,isLoading:u,mutate:f,mutating:o,removeCollaborator:(0,P.useCallback)(async n=>{if(!t)return;let i=c;s(!0),await f((i??[]).filter(e=>e.userId!==n),!1);try{await j.removeCollaborator(e,t,n),await f()}catch(e){await f(i,!1),console.error(`[ResourceCollaborators]`,e),d.error(e?.message||r(`permission.updateError`))}finally{s(!1)}},[c,f,r,e,t])}}})),I,L,R,z,Ke,B,V,qe=e((()=>{c(),A(),k(),ge(),C(),D(),I=t(u()),i(),Fe(),Le(),Ge(),ze(),L=t(l()),R=y(({css:e})=>({footer:e`
    padding-block: 12px;
    padding-inline: 20px;
    border-block-start: 1px solid ${x.colorBorderSecondary};
  `,header:e`
    padding-block: 4px 12px;
    padding-inline: 20px;
  `,list:e`
    user-select: none;

    overflow-y: auto;

    /* Fill toward 360px, but yield on short viewports so the footer never
       leaves the screen; 240px keeps ~4 rows visible as the floor. */
    height: clamp(240px, calc(100dvh - 320px), 360px);
    padding-block: 0 8px;
    padding-inline: 12px;
  `,row:e`
    cursor: pointer;

    margin-block: 2px;
    padding-block: 10px;
    padding-inline: 12px;
    border-radius: ${x.borderRadius};

    transition: background 0.2s ease;

    &:hover {
      background: ${x.colorFillTertiary};
    }
  `,rowIndicator:e`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-inline-start: auto;
    padding-inline-start: 8px;

    color: ${x.colorPrimary};
  `,rowSelected:e`
    background: ${x.colorFillQuaternary};
  `})),z=e=>e.user?.fullName||e.user?.username||e.user?.email||e.userId,Ke=new Set([`admin`,`owner`]),B=(0,I.memo)(({member:e,onToggle:t,selected:n})=>{let r=(0,I.useRef)(null),i=me(r),a=z(e),o=e.user?.email;return(0,L.jsxs)(p,{horizontal:!0,align:`center`,"aria-selected":n,className:S(R.row,n&&R.rowSelected),gap:12,ref:r,role:`option`,tabIndex:0,onClick:()=>t(e.userId),onKeyDown:n=>{n.key!==`Enter`&&n.key!==` `||(n.preventDefault(),t(e.userId))},children:[(0,L.jsx)(le,{animation:i,avatar:e.user?.avatar||void 0,size:40,title:a}),(0,L.jsxs)(p,{flex:1,gap:2,style:{minWidth:0},children:[(0,L.jsx)(O,{ellipsis:!0,weight:500,children:a}),o&&o!==a?(0,L.jsx)(O,{ellipsis:!0,fontSize:12,type:`secondary`,children:o}):null]}),n?(0,L.jsx)(`span`,{className:R.rowIndicator,children:(0,L.jsx)(f,{icon:re,size:`small`})}):null]})}),B.displayName=`AddCollaboratorMemberRow`,V=(0,I.memo)(({grantLevel:e,resourceId:t,resourceType:n})=>{let{t:r}=a(`setting`),{close:i}=oe(),{isLoading:o}=Pe(),s=Ie(),{data:c}=Re(n,t),{addCollaborators:l,collaborators:u,mutating:f}=F(n,t),[m,g]=(0,I.useState)(``),[_,v]=(0,I.useState)([]),y=(0,I.useMemo)(()=>{let e=new Set((u??[]).map(e=>e.userId));return s.filter(t=>t.role&&Ke.has(t.role)||t.userId===c?.creatorId?!1:!e.has(t.userId)).sort((e,t)=>z(e).localeCompare(z(t)))},[s,u,c?.creatorId]),b=(0,I.useMemo)(()=>{let e=m.trim().toLowerCase();return e?y.filter(t=>[t.user?.fullName,t.user?.username,t.user?.email].filter(Boolean).some(t=>t.toLowerCase().includes(e))):y},[y,m]),x=e=>{if(_.includes(e)){v(t=>t.filter(t=>t!==e));return}if(_.length>=100){d.warning(r(`permission.collaborators.addModal.selectionLimit`,{count:100}));return}v(t=>[...t,e])},S=async()=>{await l(_,e)&&i()},C=o&&s.length===0,w=b.length===0&&y.length>0;return(0,L.jsxs)(p,{children:[(0,L.jsx)(p,{className:R.header,children:(0,L.jsx)(he,{autoFocus:!0,placeholder:r(`permission.collaborators.addModal.search`),value:m,variant:`filled`,onChange:e=>g(e.target.value)})}),(0,L.jsx)(p,{"aria-multiselectable":!0,"aria-label":r(`permission.collaborators.addModal.title`),className:R.list,role:`listbox`,children:C?[0,1,2].map(e=>(0,L.jsxs)(p,{horizontal:!0,align:`center`,className:R.row,gap:12,children:[(0,L.jsx)(ue,{size:40}),(0,L.jsx)(pe,{style:{marginBottom:0,width:180}})]},e)):b.length===0?(0,L.jsx)(de,{icon:w?E:ne,paddingBlock:48,description:r(w?`permission.collaborators.addModal.noMatch`:`permission.collaborators.addModal.empty`)}):b.map(e=>(0,L.jsx)(B,{member:e,selected:_.includes(e.userId),onToggle:x},e.userId))}),(0,L.jsxs)(p,{horizontal:!0,align:`center`,className:R.footer,gap:8,children:[(0,L.jsx)(p,{flex:1,children:_.length>0?(0,L.jsx)(O,{fontSize:13,type:`secondary`,children:r(`permission.collaborators.addModal.selectedCount`,{count:_.length})}):null}),(0,L.jsx)(h,{onClick:()=>i(),children:r(`cancel`,{ns:`common`})}),(0,L.jsx)(h,{disabled:_.length===0,loading:f,type:`primary`,onClick:S,children:_.length>0?r(`permission.collaborators.addModal.confirmCount`,{count:_.length}):r(`permission.collaborators.addModal.confirm`)})]})]})}),V.displayName=`AddCollaboratorsContent`})),Je,H,U,Ye,W,Xe=e((()=>{A(),k(),b(),C(),D(),Je=t(u()),i(),M(),Ue(),Ge(),H=t(l()),U=y(({css:e})=>({empty:e`
    padding-block: 12px;
    font-size: 14px;
    color: ${x.colorTextDescription};
  `,row:e`
    padding-block: 8px;
  `})),Ye=e=>e.user?.fullName||e.user?.username||e.user?.email||e.userId,W=(0,Je.memo)(({resourceId:e,resourceType:t})=>{let{t:n}=a(`setting`),{collaborators:r,error:i,isLoading:o,mutate:s,mutating:c,removeCollaborator:l}=F(t,e),u=Ve({isPrivate:!1,resourceType:t});return i?(0,H.jsx)(N,{error:i,variant:`inline`,onRetry:()=>s()}):o?(0,H.jsx)(p,{gap:4,children:[0,1].map(e=>(0,H.jsxs)(p,{horizontal:!0,align:`center`,className:U.row,gap:12,children:[(0,H.jsx)(ue,{size:32}),(0,H.jsx)(pe,{style:{marginBottom:0,width:160}})]},e))}):!r||r.length===0?(0,H.jsx)(`div`,{className:U.empty,children:n(`permission.collaborators.empty`)}):(0,H.jsx)(p,{children:r.map(e=>{let t=Ye(e),r=e.user?.email,i=u.find(t=>t.value===e.accessLevel)?.label;return(0,H.jsxs)(p,{horizontal:!0,align:`center`,className:U.row,gap:12,children:[(0,H.jsx)(le,{avatar:e.user?.avatar||void 0,size:32,title:t}),(0,H.jsxs)(p,{flex:1,style:{minWidth:0},children:[(0,H.jsx)(O,{ellipsis:!0,weight:500,children:t}),r&&r!==t?(0,H.jsx)(O,{ellipsis:!0,fontSize:12,type:`secondary`,children:r}):null]}),i?(0,H.jsx)(se,{children:i}):null,(0,H.jsx)(w,{arrow:!1,cancelText:n(`cancel`,{ns:`common`}),okButtonProps:{danger:!0},okText:n(`permission.collaborators.remove`),placement:`topRight`,title:n(`permission.collaborators.removeConfirmTitle`,{name:t}),onConfirm:()=>void l(e.userId),children:(0,H.jsx)(m,{disabled:c,icon:T,size:`small`,title:n(`permission.collaborators.remove`)})})]},e.userId)})})}),W.displayName=`CollaboratorList`})),G,K,q,J,Y,Ze=e((()=>{A(),k(),n(),D(),G=t(u()),i(),qe(),K=t(l()),Xe(),q={knowledgeBase:`edit`},J=({grantLevel:e,resourceId:t,resourceType:n})=>ae({content:(0,K.jsx)(V,{grantLevel:e,resourceId:t,resourceType:n}),footer:null,maskClosable:!0,styles:{content:{overflow:`hidden`,padding:0}},title:r(`permission.collaborators.addModal.title`,{ns:`setting`}),width:`min(90vw, 520px)`}),Y=(0,G.memo)(({resourceId:e,resourceType:t})=>{let{t:n}=a(`setting`),r=q[t],i=(0,G.useCallback)(()=>{r&&J({grantLevel:r,resourceId:e,resourceType:t})},[r,e,t]);return r?(0,K.jsx)(h,{icon:(0,K.jsx)(f,{icon:ie}),size:`small`,onClick:i,children:n(`permission.collaborators.add`)}):null}),Y.displayName=`AddCollaboratorButton`})),X,Z,Q,$,Qe=e((()=>{A(),k(),b(),C(),D(),X=t(u()),i(),g(),be(),M(),Te(),o(),we(),Ee(),je(),xe(),Me(),Ze(),Be(),Ue(),ze(),Z=t(l()),Q=y(({css:e})=>({body:e`
    position: relative;
    overflow-y: auto;
    display: flex;
  `,breadcrumb:e`
    ol {
      align-items: center;
    }

    li,
    .ant-breadcrumb-link,
    .ant-breadcrumb-link > a {
      display: flex;
      align-items: center;
    }
  `,rowIcon:e`
    display: flex;
    align-items: center;
    align-self: flex-start;
    height: 1em;
  `})),$=(0,X.memo)(({copy:e,redirectPath:t,resourceHomePath:n,resourceId:r,resourceName:i,resourceType:o,showCollaborators:c})=>{let{t:l}=a(`setting`),u=Ae(),m=ye(),{data:h,error:g,isLoading:y,mutate:b,setAccessLevel:x,updating:S}=Re(o,r),C=h?.visibility===`private`,w=Ve({accessLevel:h?.accessLevel,isPrivate:C,resourceType:o}),T=!!g&&Ne(g)||!y&&!!h&&!h.canManage;(0,X.useEffect)(()=>{T&&(d.error(l(`permission.noManagePermission`)),u(t,{replace:!0}))},[T,u,t,l]);let E=[{children:[{avatar:(0,Z.jsx)(`span`,{className:Q.rowIcon,children:(0,Z.jsx)(f,{icon:ne,size:16})}),children:(0,Z.jsx)(He,{loading:S,options:w,value:h?.accessLevel,onChange:e=>void x(e)}),desc:C?e.privateHint:e.generalAccessDesc,label:l(`permission.page.accessLevelLabel`)}],title:l(`permission.page.memberGroup`)}];return c&&E.push({children:(0,Z.jsx)(W,{resourceId:r,resourceType:o}),desc:e.collaboratorsDesc,extra:(0,Z.jsx)(Y,{resourceId:r,resourceType:o}),title:l(`permission.collaborators.title`)}),(0,Z.jsxs)(p,{height:`100%`,width:`100%`,children:[(0,Z.jsx)(Oe,{styles:{left:{paddingInlineStart:24}},left:(0,Z.jsx)(v,{className:Q.breadcrumb,separator:(0,Z.jsx)(f,{icon:te,size:14}),items:[...i?[{title:(0,Z.jsx)(_,{to:Se(n,m),children:(0,Z.jsx)(O,{ellipsis:!0,as:`span`,color:`inherit`,style:{maxWidth:200},weight:500,children:i})})}]:[],{title:(0,Z.jsx)(O,{as:`span`,color:`inherit`,weight:500,children:l(`permission.page.title`)})}]})}),(0,Z.jsx)(p,{className:Q.body,flex:1,width:`100%`,children:(0,Z.jsx)(De,{children:(0,Z.jsx)(p,{gap:16,paddingBlock:16,children:g&&!T?(0,Z.jsx)(N,{error:g,variant:`inline`,onRetry:()=>b()}):y||T?(0,Z.jsx)(ke,{debugId:`ResourceAccessPage`}):(0,Z.jsxs)(Z.Fragment,{children:[C?(0,Z.jsx)(ce,{icon:(0,Z.jsx)(f,{icon:ee}),style:{width:`100%`},title:e.privateNotice,type:`info`}):null,(0,Z.jsx)(fe,{items:E,itemsType:`group`,...s})]})})})})]})}),$.displayName=`ResourceAccessPage`}));export{Qe as n,$ as t};