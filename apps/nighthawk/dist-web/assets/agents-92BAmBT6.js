import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{$n as a,Ba as o,Ia as s,O as c,cs as l,jn as u,ls as d,ur as f}from"./app-const-Bl9rlHwj.js";import{B as p,Cr as ee,Hr as m,Q as h,Qr as g,St as _,U as te,Xr as ne,bt as v,mr as re,zn as y}from"./dialog-BebLzVzY.js";import{a as b,l as ie}from"../vendor/vendor-react-CBcx1o7d.js";import{a as x,c as S,f as C,l as ae,t as w}from"./es-CVJR_g25.js";import{Jh as oe,Ov as se,Xh as ce,bl as le,eg as ue,fp as de,fv as fe,ii as T,mp as pe,vl as E,wa as me,wp as he,x as D}from"../vendor/vendor-icons-C-Y4oLkk.js";import{C as ge,c as _e,et as O,i as k,t as A,u as ve,x as j}from"./base-ui-BAv0gRbN.js";import{Or as ye,Sr as M,Ta as N,k as be,t as P}from"./es-LELdnrjB.js";import{Xt as F,bi as I,la as L,xi as xe}from"./model-runtime-client-tog6-eyE.js";import{Gt as Se,Vt as Ce,g as we,nn as Te,qt as Ee,x as De}from"./serverConfig-CmLVLry1.js";import{v as Oe,y as ke}from"./swrKeys-B4sicPWZ.js";import{dr as Ae,mr as R}from"./tool-BJJaXV35.js";import{Do as je,Eo as Me,Q as Ne,X as Pe,Y as Fe,Z as Ie}from"./index-Djd-5Nq9.js";import{o as z,t as Le}from"./selectors-DA9tZHpr.js";import{r as Re,t as ze}from"./SkeletonList-BEka3_sY.js";import{n as Be,t as Ve}from"./Avatar-CjGMtaJN.js";import{n as He,t as Ue}from"./useFetchAgentList-7Q1guCM_.js";import{n as We,t as Ge}from"./AgentGroupAvatar-8J6sk_ci.js";import{a as Ke,i as qe,l as Je,n as Ye,r as Xe,t as Ze}from"./useDropdownMenu-B-GCFUJK.js";import{n as Qe,r as $e,t as et}from"./ModalProvider-Cat39ARS.js";import{n as tt,t as nt}from"./WorkspaceLink-DKEucXjF.js";import{n as rt,t as it}from"./useWorkspaceMembers-C6f_gb_u.js";import{a as at,o as ot,r as st,t as ct}from"./useAgentList-COW6de-E.js";import{n as lt,t as ut}from"./useFetchAgentLabels-DgnClPYj.js";var dt,ft,pt,mt=e((()=>{c(),F(),dt=t(d()),Be(),We(),ft=t(l()),pt=(0,dt.memo)(({item:e,size:t})=>{let{avatar:n,backgroundColor:r,type:i}=e;return i===`group`?(0,ft.jsx)(Ge,{avatar:typeof n==`string`?n:void 0,backgroundColor:r||void 0,memberAvatars:Array.isArray(n)?n:[],size:t}):(0,ft.jsx)(Ve,{emojiScaleWithBackground:!0,avatar:typeof n==`string`?n:u,background:r||void 0,name:I(e),shape:`square`,size:t})}),pt.displayName=`AgentViewAllAgentAvatar`})),B,V,ht,gt,_t,vt,yt,bt=e((()=>{F(),P(),A(),D(),B=t(d()),r(),Xe(),Ze(),Qe(),V=t(l()),ht=e=>{let t=[];for(let n of e){let e=!!n&&`type`in n&&n.type===`divider`,r=t.at(-1),i=!!r&&`type`in r&&r.type===`divider`;e&&(t.length===0||i)||t.push(n)}for(;t.length>0;){let e=t.at(-1);if(e&&`type`in e&&e.type===`divider`)t.pop();else break}return t},gt=(0,B.memo)(({getMenuItems:e,hideTrigger:t,includeSidebarToggle:n,item:r,onMenuReady:a,onToggleSidebar:o,sidebarHidden:s})=>{let{t:c}=i(`common`),l=(0,B.useMemo)(()=>()=>{let t=ht((e()??[]).filter(e=>!e||![`hideFromSidebar`,`moveGroup`,`pin`].includes(String(e.key))));return!n||!o?t:[{icon:(0,V.jsx)(m,{icon:s?pe:de}),key:`sidebar`,label:c(s?`agentViewAll.addToSidebar`:`agentViewAll.removeFromSidebar`),onClick:({domEvent:e})=>{e?.stopPropagation(),o(r)}},{type:`divider`},...t]},[e,n,r,o,s,c]);return(0,B.useEffect)(()=>{a?.(l)},[l,a]),t?null:(0,V.jsx)(_,{items:l,children:(0,V.jsx)(v,{icon:he,size:`small`,title:c(`more`)})})}),gt.displayName=`ActionsDropdown`,_t=(0,B.memo)(({anchor:e,item:t,...n})=>{let{t:r}=i(`common`),{openCreateGroupModal:a}=$e(),{avatar:o,backgroundColor:s,id:c,pinned:l,slug:u,userId:d,visibility:f}=t,p=typeof o==`string`?o:void 0,ee=(0,B.useCallback)(()=>{a(c,f)},[c,a,f]);return(0,V.jsx)(gt,{getMenuItems:Ye({anchor:e,avatar:p,backgroundColor:s||void 0,group:void 0,id:c,labels:t.labels,labelsEnabled:!0,openCreateGroupModal:ee,pinned:l??!1,slug:u,title:I(t,r(`agentViewAll.untitled`)),userId:d,visibility:f}),item:t,...n})}),_t.displayName=`AgentItemActions`,vt=(0,B.memo)(({anchor:e,item:t,...n})=>{let{t:r}=i(`common`),{avatar:a,backgroundColor:o,description:s,id:c,pinned:l,title:u,userId:d}=t;return(0,V.jsx)(gt,{getMenuItems:qe({anchor:e,avatar:typeof a==`string`?a:void 0,backgroundColor:o||void 0,description:s,id:c,memberAvatars:Array.isArray(a)?a:[],pinned:l??!1,title:u||r(`agentViewAll.untitled`),userId:d}),item:t,...n})}),vt.displayName=`GroupItemActions`,yt=(0,B.memo)(e=>{let{t}=i(`common`),[n,r]=(0,B.useState)(!1),a=n||e.forceActivated,o=(0,B.useRef)(null),s=(0,B.useRef)(!1),c=(0,B.useCallback)(()=>r(!0),[]),l=(0,B.useCallback)(()=>{s.current=!0,r(!0)},[]);return(0,B.useEffect)(()=>{!a||!s.current||(s.current=!1,o.current?.querySelector(`button`)?.focus())},[a]),(0,V.jsx)(`span`,{ref:o,children:a?e.item.type===`group`?(0,V.jsx)(vt,{...e}):(0,V.jsx)(_t,{...e}):e.hideTrigger?null:(0,V.jsx)(`span`,{onFocus:l,onPointerEnter:c,children:(0,V.jsx)(v,{"aria-label":t(`more`),icon:he,size:`small`,title:t(`more`)})})})}),yt.displayName=`ItemActions`})),xt,St,Ct,wt,Tt=e((()=>{w(),xt=t(d()),St=t(l()),Ct=x(({css:e,cssVar:t})=>({dot:e`
    flex: none;

    width: 7px;
    height: 7px;
    border-radius: 50%;

    background: ${t.colorFill};
  `,tag:e`
    display: inline-flex;
    gap: 5px;
    align-items: center;

    max-width: 140px;
    padding-block: 1px;
    padding-inline: 8px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 999px;

    font-size: 11px;
    color: ${t.colorTextSecondary};
    white-space: nowrap;
  `})),wt=(0,xt.memo)(({labels:e})=>e?.length?(0,St.jsx)(St.Fragment,{children:e.map(e=>(0,St.jsxs)(`span`,{className:Ct.tag,children:[(0,St.jsx)(`span`,{className:Ct.dot,style:e.color?{background:e.color}:void 0}),e.name]},e.id))}):null),wt.displayName=`AgentLabelTags`})),Et,H,U,Dt,Ot,kt,At,jt=e((()=>{c(),F(),P(),A(),w(),Et=t(n()),D(),H=t(d()),r(),tt(),mt(),bt(),Tt(),U=t(l()),Dt=20,Ot=x(({css:e,cssVar:t})=>({identity:e`
    cursor: pointer;

    display: flex;
    flex: 1;
    gap: 12px;
    align-items: center;

    min-width: 0;

    color: inherit;

    &:hover .agent-row-title {
      text-decoration: underline;
    }
  `,row:e`
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadiusLG};
    color: inherit;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,updatedAt:e`
    flex: none;

    min-width: 88px;

    color: ${t.colorTextQuaternary};
    text-align: end;
    white-space: nowrap;
  `})),kt=e=>(0,Et.default)().diff((0,Et.default)(e),`d`)<7?(0,Et.default)(e).fromNow():(0,Et.default)(e).format(`YYYY-MM-DD`),At=(0,H.memo)(({author:e,item:t,onToggleSidebar:n,showAuthor:r,sidebarHidden:o})=>{let{t:s}=i(`common`),{id:c,type:l,updatedAt:u}=t,d=I(t,s(`agentViewAll.untitled`)),p=xe(t),[m,_]=(0,H.useState)(null),[te,ne]=(0,H.useState)(!1),re=(0,H.useCallback)(()=>ne(!0),[]),y=(0,H.useRef)(null),b=(0,H.useCallback)(e=>{y.current=e},[]),ie=(0,H.useCallback)(()=>y.current?.()??[],[]),x=(0,H.useCallback)(e=>{e.stopPropagation(),n?.(t)},[t,n]);return(0,U.jsx)(h,{items:ie,children:(0,U.jsxs)(g,{horizontal:!0,align:`center`,className:Ot.row,gap:12,ref:_,onPointerEnter:re,children:[(0,U.jsxs)(nt,{"aria-label":d,className:Ot.identity,to:l===`group`?f(c):a(c,!1),children:[(0,U.jsx)(pt,{item:t,size:28}),(0,U.jsx)(g,{flex:1,style:{minWidth:0},children:(0,U.jsxs)(g,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:[(0,U.jsx)(k,{ellipsis:!0,className:`agent-row-title`,weight:500,children:d}),p?(0,U.jsx)(_e,{size:`small`,style:{flex:`none`},children:p}):null]})})]}),(0,U.jsxs)(g,{horizontal:!0,align:`center`,flex:`none`,gap:8,justify:`flex-end`,style:{maxWidth:420,overflow:`hidden`},children:[(0,U.jsx)(wt,{labels:t.labels}),r&&(0,U.jsx)(g,{flex:`none`,style:{width:Dt},children:e&&(0,U.jsx)(ee,{title:e.name,children:(0,U.jsx)(O,{avatar:e.avatar||`/avatars/agent-default.png`,size:Dt})})}),(0,U.jsx)(k,{className:Ot.updatedAt,fontSize:12,title:u?(0,Et.default)(u).format(`YYYY-MM-DD HH:mm`):void 0,children:u?kt(u):`–`})]}),(0,U.jsxs)(g,{horizontal:!0,align:`center`,flex:`none`,gap:4,style:{width:64},children:[n&&(0,U.jsx)(v,{color:S.colorTextSecondary,icon:o?de:pe,size:`small`,style:{opacity:o?.5:void 0},title:s(o?`agentViewAll.addToSidebar`:`agentViewAll.removeFromSidebar`),onClick:x}),(0,U.jsx)(yt,{anchor:m,forceActivated:te,includeSidebarToggle:!!n,item:t,sidebarHidden:o,onMenuReady:b,onToggleSidebar:n})]})]})})}),At.displayName=`AgentRow`})),W,G,K,Mt,Nt=e((()=>{c(),F(),P(),A(),w(),W=t(d()),r(),tt(),mt(),jt(),bt(),Tt(),G=t(l()),K=x(({css:e,cssVar:t})=>({card:e`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: stretch;

    min-height: 104px;
    padding-block: 12px;
    padding-inline: 12px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `,description:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    line-height: 1.5;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    ${C.md} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${C.sm} {
      grid-template-columns: minmax(0, 1fr);
    }
  `,actions:e`
    position: absolute;
    inset-block-start: 12px;
    inset-inline-end: 12px;
  `,link:e`
    display: block;
    min-width: 0;
    height: 100%;
    color: inherit;
  `,wrapper:e`
    position: relative;
    min-width: 0;
    height: 100%;
  `,updatedAt:e`
    flex: none;
    color: ${t.colorTextQuaternary};
  `})),Mt=(0,W.memo)(({author:e,item:t,onToggleSidebar:n,showAuthor:r,sidebarHidden:o})=>{let{t:s}=i(`common`),{description:c,id:l,type:u,updatedAt:d}=t,p=I(t,s(`agentViewAll.untitled`)),m=xe(t),[_,te]=(0,W.useState)(null),[ne,v]=(0,W.useState)(!1),re=(0,W.useCallback)(()=>v(!0),[]),y=(0,W.useRef)(null),b=(0,W.useCallback)(e=>{y.current=e},[]);return(0,G.jsx)(h,{items:(0,W.useCallback)(()=>y.current?.()??[],[]),children:(0,G.jsxs)(`div`,{className:K.wrapper,children:[(0,G.jsx)(nt,{"aria-label":p,className:K.link,ref:te,to:u===`group`?f(l):a(l,!1),onPointerEnter:re,children:(0,G.jsxs)(N,{clickable:!0,className:K.card,height:`100%`,variant:`outlined`,children:[(0,G.jsxs)(g,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0,paddingInlineEnd:28},children:[(0,G.jsx)(pt,{item:t,size:24}),(0,G.jsxs)(g,{horizontal:!0,align:`center`,flex:1,gap:6,style:{minWidth:0},children:[(0,G.jsx)(k,{ellipsis:!0,style:{minWidth:0},weight:600,children:p}),m?(0,G.jsx)(_e,{size:`small`,style:{flex:`none`},children:m}):null]})]}),(0,G.jsx)(k,{className:K.description,fontSize:12,type:`secondary`,children:c}),t.labels?.length?(0,G.jsx)(g,{horizontal:!0,align:`center`,gap:6,wrap:`wrap`,children:(0,G.jsx)(wt,{labels:t.labels})}):null,(0,G.jsxs)(g,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,style:{marginBlockStart:`auto`},children:[r?(0,G.jsx)(g,{horizontal:!0,align:`center`,gap:6,style:{minWidth:0},children:e?(0,G.jsx)(ee,{title:e.name,children:(0,G.jsx)(O,{avatar:e.avatar||`/avatars/agent-default.png`,size:18})}):(0,G.jsx)(k,{fontSize:12,type:`secondary`,children:`–`})}):(0,G.jsx)(`div`,{}),(0,G.jsx)(k,{className:K.updatedAt,fontSize:12,children:d?kt(d):`–`})]})]})}),(0,G.jsx)(`span`,{className:K.actions,children:(0,G.jsx)(yt,{includeSidebarToggle:!0,anchor:_,forceActivated:ne,item:t,sidebarHidden:o,onMenuReady:b,onToggleSidebar:n})})]})})}),Mt.displayName=`AgentCard`})),Pt,Ft,It=e((()=>{Pt=e=>{let t=new Set;return e.filter(e=>t.has(e.id)?!1:(t.add(e.id),!0))},Ft=(e,t,n)=>Pt([...e,...t.flatMap(e=>e.items),...n])})),Lt,q,Rt,zt,Bt=e((()=>{P(),A(),w(),D(),Lt=t(d()),r(),o(),q=t(l()),Rt=x(({css:e,cssVar:t})=>({form:e`
      label {
        font-size: 13px !important;
        color: ${t.colorTextSecondary} !important;
      }
    `})),zt=(0,Lt.memo)(({options:e,setOptions:t,setViewMode:n,showAuthor:r,viewMode:a})=>{let[o,c]=(0,Lt.useState)(!1),{t:l}=i(`common`),u=(0,Lt.useMemo)(()=>[{label:l(`agentViewAll.groupBy.none`),value:`none`},...r?[{label:l(`agentViewAll.groupBy.author`),value:`author`}]:[],{label:l(`agentViewAll.groupBy.label`),value:`label`}],[r,l]),d=(0,Lt.useMemo)(()=>[{label:l(`agentViewAll.orderBy.updatedAt`),value:`updatedAt`},...r?[{label:l(`agentViewAll.orderBy.author`),value:`author`}]:[],{label:l(`agentViewAll.orderBy.title`),value:`title`}],[r,l]),f=[{children:(0,q.jsx)(j,{options:u,size:`small`,style:{width:150},value:e.groupBy,onChange:e=>{t(t=>({...t,groupBy:e}))}}),label:l(`agentViewAll.form.grouping`)},{children:(0,q.jsxs)(g,{horizontal:!0,align:`center`,gap:8,children:[(0,q.jsx)(v,{icon:e.orderDirection===`asc`?fe:se,size:`small`,onClick:()=>{t(e=>({...e,orderDirection:e.orderDirection===`asc`?`desc`:`asc`}))}}),(0,q.jsx)(j,{options:d,size:`small`,style:{width:112},value:e.orderBy,onChange:e=>{t(t=>({...t,orderBy:e}))}})]}),label:l(`agentViewAll.form.ordering`)},{children:(0,q.jsx)(y,{checked:e.showSidebarHidden,size:`small`,onChange:e=>{t(t=>({...t,showSidebarHidden:e}))}}),minWidth:void 0,label:l(`agentViewAll.form.showSidebarHidden`)}];return(0,q.jsx)(te,{arrow:!1,content:(0,q.jsxs)(g,{gap:12,width:280,children:[(0,q.jsx)(ve,{activeKey:a,items:[{icon:(0,q.jsx)(m,{icon:E}),key:`list`,label:l(`agentViewAll.view.list`)},{icon:(0,q.jsx)(m,{icon:le}),key:`card`,label:l(`agentViewAll.view.card`)}],styles:{list:{display:`flex`,width:`100%`},tab:{flex:1}},onChange:e=>n(e)}),(0,q.jsx)(M,{className:Rt.form,items:f,itemsType:`flat`,size:`small`,variant:`borderless`,styles:{item:{padding:0}}})]}),open:o,placement:`bottomRight`,trigger:[`click`],onOpenChange:c,children:(0,q.jsx)(v,{icon:T,size:s})})}),zt.displayName=`AgentViewAllListConfig`})),Vt,Ht,Ut,Wt,Gt,Kt=e((()=>{Vt={groupBy:`none`,orderBy:`updatedAt`,orderDirection:`desc`,showSidebarHidden:!0},Ht=new Set([`author`,`label`,`none`]),Ut=new Set([`author`,`title`,`updatedAt`]),Wt=new Set([`asc`,`desc`]),Gt=e=>{let t=e??{};return{groupBy:Ht.has(t.groupBy)?t.groupBy:Vt.groupBy,orderBy:Ut.has(t.orderBy)?t.orderBy:Vt.orderBy,orderDirection:Wt.has(t.orderDirection)?t.orderDirection:Vt.orderDirection,showSidebarHidden:typeof t.showSidebarHidden==`boolean`?t.showSidebarHidden:Vt.showSidebarHidden}}})),J,Y,X,qt,Jt,Yt=e((()=>{c(),F(),P(),A(),w(),D(),J=t(d()),r(),tt(),Se(),Ce(),mt(),bt(),Y=t(l()),X=x(({css:e,cssVar:t})=>({actions:e`
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
  `,card:e`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: stretch;
    justify-content: center;

    /* Uniform height across the grid; a card without a description centers its
       title instead of leaving a hole where the description would be. */
    min-height: 72px;
    padding-block: 10px;
    padding-inline: 12px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `,container:e`
    padding: 12px;
    border-radius: ${t.borderRadiusLG};
    background: ${t.colorFillQuaternary};
  `,description:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    line-height: 1.5;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    ${C.md} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    ${C.sm} {
      grid-template-columns: minmax(0, 1fr);
    }
  `,header:e`
    cursor: pointer;
    user-select: none;
  `,link:e`
    display: block;
    min-width: 0;
    color: inherit;
  `})),qt=(0,J.memo)(({item:e,onToggleSidebar:t})=>{let{t:n}=i(`common`),{description:r,id:o,type:s}=e,c=I(e,n(`agentViewAll.untitled`)),l=xe(e),[u,d]=(0,J.useState)(null),[p,ee]=(0,J.useState)(!1),m=(0,J.useCallback)(()=>ee(!0),[]),_=(0,J.useRef)(null),te=(0,J.useCallback)(e=>{_.current=e},[]);return(0,Y.jsx)(h,{items:(0,J.useCallback)(()=>_.current?.()??[],[]),children:(0,Y.jsx)(nt,{"aria-label":c,className:X.link,ref:d,to:s===`group`?f(o):a(o,!1),onPointerEnter:m,children:(0,Y.jsxs)(N,{clickable:!0,className:X.card,height:`100%`,variant:`outlined`,children:[(0,Y.jsxs)(g,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0},children:[(0,Y.jsx)(pt,{item:e,size:24}),(0,Y.jsx)(k,{ellipsis:!0,style:{minWidth:0},weight:600,children:c}),l?(0,Y.jsx)(_e,{size:`small`,style:{flex:`none`},children:l}):null]}),r?(0,Y.jsx)(k,{className:X.description,fontSize:12,type:`secondary`,children:r}):null,(0,Y.jsx)(`span`,{className:X.actions,children:(0,Y.jsx)(yt,{hideTrigger:!0,includeSidebarToggle:!0,anchor:u,forceActivated:p,item:e,sidebarHidden:!1,onMenuReady:te,onToggleSidebar:t})})]})})})}),qt.displayName=`SidebarMiniCard`,Jt=(0,J.memo)(({items:e,onToggleSidebar:t})=>{let{t:n}=i(`common`),r=Ee(Te.agentListSidebarSectionCollapsed),a=Ee(e=>e.updateSystemStatus),o=(0,J.useCallback)(()=>a({agentListSidebarSectionCollapsed:!r},`toggleAgentListSidebarSection`),[r,a]);return(0,Y.jsxs)(g,{className:X.container,gap:12,children:[(0,Y.jsxs)(g,{horizontal:!0,align:`center`,className:X.header,gap:8,justify:`space-between`,onClick:o,children:[(0,Y.jsxs)(g,{horizontal:!0,align:`center`,gap:8,children:[(0,Y.jsx)(k,{fontSize:13,weight:500,children:n(`agentViewAll.sidebarSection.title`)}),(0,Y.jsx)(k,{fontSize:12,type:`secondary`,children:e.length})]}),(0,Y.jsxs)(g,{horizontal:!0,align:`center`,gap:4,children:[(0,Y.jsx)(k,{fontSize:12,type:`secondary`,children:n(r?`agentViewAll.sidebarSection.expand`:`agentViewAll.sidebarSection.collapse`)}),(0,Y.jsx)(m,{color:S.colorTextSecondary,icon:r?ue:oe,size:14})]})]}),!r&&(0,Y.jsx)(`div`,{className:X.grid,children:e.map(e=>(0,Y.jsx)(qt,{item:e,onToggleSidebar:t},e.id))})]})}),Jt.displayName=`SidebarAgentsSection`})),Xt,Z,Q,$,Zt,Qt,$t,en,tn,nn=e((()=>{c(),F(),P(),A(),w(),Xt=t(n()),Z=t(L()),D(),Q=t(d()),r(),b(),Oe(),it(),ct(),Qe(),at(),Ke(),Ne(),ze(),Pe(),ut(),Ue(),Me(),Se(),Ce(),Ae(),Le(),we(),Nt(),jt(),It(),Bt(),Kt(),Yt(),$=t(l()),Zt=x(({css:e,cssVar:t})=>({bar:e`
    cursor: pointer;
    user-select: none;

    width: 100%;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadiusLG};

    transition: background 0.15s;
  `,barEven:e`
    background: ${t.colorFillQuaternary};

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,barOdd:e`
    background: ${t.colorFillTertiary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `})),Qt=(0,Q.memo)(({avatar:e,collapsed:t,color:n,count:r,index:i,label:a,onToggle:o})=>(0,$.jsxs)(g,{horizontal:!0,align:`center`,gap:8,className:ae(Zt.bar,i%2==0?Zt.barEven:Zt.barOdd),onClick:o,children:[(0,$.jsx)(m,{color:S.colorTextSecondary,icon:t?ce:ue,size:14}),e?(0,$.jsx)(O,{avatar:e,size:20}):n?(0,$.jsx)(`span`,{style:{background:n,borderRadius:`50%`,display:`inline-block`,height:9,width:9}}):null,(0,$.jsx)(k,{fontSize:13,weight:500,children:a}),(0,$.jsx)(k,{fontSize:12,type:`secondary`,children:r})]})),Qt.displayName=`AgentViewAllGroupHeader`,$t=(0,Q.memo)(({count:e,label:t})=>(0,$.jsxs)(g,{horizontal:!0,align:`center`,gap:6,children:[t,(0,$.jsx)(k,{fontSize:12,type:`secondary`,children:e})]})),$t.displayName=`AgentViewAllSegmentLabel`,en=(0,Q.memo)(()=>{let{t:e}=i(`common`),t=ke(),[n,r]=ie(),a=n.get(`tab`)===`private`?`private`:`workspace`,o=(0,Q.useCallback)(e=>{r(e===`private`?{tab:`private`}:{},{replace:!0})},[r]),[s,c]=(0,Q.useState)(``),l=Ee(Te.agentListViewMode),u=Ee(e=>e.updateSystemStatus),d=(0,Q.useCallback)(e=>u({agentListViewMode:e}),[u]),f=Ee(Te.agentListViewOptions),h=(0,Q.useMemo)(()=>Gt(f),[f]),te=(0,Q.useCallback)(e=>{u({agentListViewOptions:Gt(e(h))},`updateAgentListViewOptions`)},[u,h]);He(),lt(),De(e=>e.useFetchWorkspaceUserPreference)();let v=R(z.isAgentListInit),y=R(z.pinnedAgents,Z.default),b=R(z.agentGroups,Z.default),x=R(z.ungroupedAgents,Z.default),S=R(z.privatePinnedAgents,Z.default),C=R(z.privateAgentGroups,Z.default),ae=R(z.privateUngroupedAgents,Z.default),{isSidebarItemVisible:w,setSidebarItemVisible:oe}=ot(),se=st(),ce=(0,Q.useMemo)(()=>Ft(y,b,x),[y,b,x]),le=(0,Q.useMemo)(()=>Ft(S,C,ae),[S,C,ae]),de=t&&a===`private`?le:ce,fe=(0,Q.useMemo)(()=>{let e=[...Ft(y,se(b),x),...Ft(S,se(C),ae)],t=new Set;return e.filter(e=>t.has(e.id)||!w(e)?!1:(t.add(e.id),!0))},[b,w,se,y,C,S,ae,x]),T=!!t&&a!==`private`,pe=rt(),E=(0,Q.useMemo)(()=>{let e=new Map;for(let t of pe){let n=t.user;n&&e.set(t.userId,{avatar:n.avatar,name:n.fullName||n.username||n.email||void 0})}return e},[pe]),{orderDirection:he,showSidebarHidden:D}=h,_e=(0,Q.useMemo)(()=>{let e=e=>D?e.length:e.filter(w).length;return{private:e(le),workspace:e(ce)}},[ce,le,D,w]),O=T||h.groupBy===`label`?h.groupBy:h.groupBy===`author`?`none`:h.groupBy,A=!T&&h.orderBy===`author`?`updatedAt`:h.orderBy,ve=(0,Q.useMemo)(()=>({...h,groupBy:O,orderBy:A}),[h,O,A]),j=(0,Q.useMemo)(()=>{let e=s.trim().toLowerCase(),t=e?de.filter(t=>t.name?.toLowerCase().includes(e)||t.title?.toLowerCase().includes(e)||t.description?.toLowerCase().includes(e)):de;D||(t=t.filter(w));let n=e=>e.userId&&E.get(e.userId)?.name||``,r=he===`asc`?1:-1;return[...t].sort((e,t)=>A===`title`?r*I(e,``).localeCompare(I(t,``)):A===`author`?r*n(e).localeCompare(n(t)):r*((0,Xt.default)(e.updatedAt).valueOf()-(0,Xt.default)(t.updatedAt).valueOf()))},[de,s,A,he,D,w,E]),M=(0,Q.useMemo)(()=>{if(O===`author`){if(!t||a===`private`)return null;let n=new Map;for(let e of j){let t=e.userId??``,r=n.get(t);r?r.push(e):n.set(t,[e])}return[...n.entries()].map(([t,n])=>({avatar:t&&E.get(t)?.avatar||`/avatars/agent-default.png`,color:void 0,items:n,key:`author:${t||`unknown`}`,label:t&&E.get(t)?.name||e(`agentViewAll.groupBy.unknownAuthor`)})).sort((e,t)=>e.label.localeCompare(t.label))}if(O===`label`){let t=new Map,n=[];for(let e of j){let r=e.labels??[];if(r.length===0){n.push(e);continue}for(let n of r){let r=t.get(n.id);r?r.items.push(e):t.set(n.id,{color:n.color,items:[e],label:n.name})}}let r=[...t.entries()].map(([e,t])=>({avatar:null,color:t.color,items:t.items,key:`label:${e}`,label:t.label})).sort((e,t)=>e.label.localeCompare(t.label));return n.length>0&&r.push({avatar:null,color:void 0,items:n,key:`label:none`,label:e(`agentViewAll.groupBy.noLabel`)}),r}return null},[t,O,a,j,E,e]),N=Ee(Te.agentListExpandedGroupKeys,Z.default),P=(0,Q.useMemo)(()=>new Set(N),[N]),F=(0,Q.useCallback)(e=>{u({agentListExpandedGroupKeys:P.has(e)?N.filter(t=>t!==e):[...N,e]},`toggleAgentListGroupExpanded`)},[N,P,u]),L=(0,Q.useCallback)(async t=>{try{await oe(t.id,!w(t))}catch(t){console.error(`Failed to toggle Agent sidebar visibility:`,t),p.error(e(`operationFailed`))}},[w,oe,e]),xe=(0,Q.useCallback)(e=>(0,$.jsx)(Mt,{author:e.userId?E.get(e.userId):void 0,item:e,showAuthor:T,sidebarHidden:!w(e),onToggleSidebar:L},e.id),[T,E,L,w]),Se=(0,Q.useCallback)(e=>(0,$.jsx)(At,{author:e.userId?E.get(e.userId):void 0,item:e,showAuthor:T,sidebarHidden:!w(e),onToggleSidebar:L},e.id),[T,E,L,w]),{allowed:Ce,reason:we}=je(`create_content`),{createAgentMenuItem:Oe,createConnectAgentMenuItem:Ae,createGroupChatMenuItem:Me,createMarketAgentMenuItem:Ne,isMutatingAgent:Pe}=Je(),Le=(0,Q.useMemo)(()=>t&&a===`private`?{visibility:`private`}:void 0,[t,a]),ze=(0,Q.useMemo)(()=>{let e=Ae(Le);return[Oe(Le),Me(Le),...e?[{type:`divider`},e]:[],{type:`divider`},Ne()]},[Oe,Ae,Me,Ne,Le]);return(0,$.jsxs)(g,{flex:1,height:`100%`,children:[(0,$.jsx)(Ie,{left:(0,$.jsx)(k,{style:{paddingInlineStart:4},weight:500,children:e(`agentViewAll.title`)}),right:(0,$.jsx)(zt,{options:ve,setOptions:te,setViewMode:d,showAuthor:T,viewMode:l})}),(0,$.jsxs)(Fe,{gap:16,paddingBlock:16,wrapperStyle:{flex:1,overflowY:`auto`},children:[v&&!s.trim()&&fe.length>0&&(0,$.jsx)(Jt,{items:fe,onToggleSidebar:L}),(0,$.jsxs)(g,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,children:[t?(0,$.jsx)(ge,{value:a,options:[{label:(0,$.jsx)($t,{count:_e.workspace,label:e(`navPanel.publicAgents`)}),value:`workspace`},{label:(0,$.jsx)($t,{count:_e.private,label:e(`navPanel.privateAgents`)}),value:`private`}],onChange:e=>o(e)}):(0,$.jsx)(be,{allowClear:!0,placeholder:e(`navPanel.searchAgent`),style:{maxWidth:240},value:s,onChange:e=>c(e.target.value)}),(0,$.jsxs)(g,{horizontal:!0,align:`center`,gap:8,children:[t&&(0,$.jsx)(be,{allowClear:!0,placeholder:e(`navPanel.searchAgent`),style:{maxWidth:240},value:s,onChange:e=>c(e.target.value)}),Ce?(0,$.jsx)(_,{items:ze,children:(0,$.jsx)(re,{icon:me,loading:Pe,children:(0,$.jsx)(m,{icon:ue,size:14})})}):(0,$.jsx)(ee,{title:we,children:(0,$.jsx)(re,{disabled:!0,icon:me,children:(0,$.jsx)(m,{icon:ue,size:14})})})]})]}),v?j.length===0?(0,$.jsx)(ne,{flex:1,padding:40,children:(0,$.jsx)(ye,{description:s.trim()?e(`navPanel.searchResultEmpty`):e(`agentViewAll.empty`)})}):l===`card`?M?(0,$.jsx)(g,{gap:8,children:M.map((e,t)=>{let n=!P.has(e.key);return(0,$.jsxs)(g,{gap:12,children:[(0,$.jsx)(Qt,{avatar:e.avatar,collapsed:n,color:e.color,count:e.items.length,index:t,label:e.label,onToggle:()=>F(e.key)}),!n&&(0,$.jsx)(`div`,{className:K.grid,children:e.items.map(xe)})]},e.key)})}):(0,$.jsx)(`div`,{className:K.grid,children:j.map(xe)}):(0,$.jsx)(g,{gap:M?8:2,children:M?M.map((e,t)=>{let n=!P.has(e.key);return(0,$.jsxs)(g,{gap:2,children:[(0,$.jsx)(Qt,{avatar:e.avatar,collapsed:n,color:e.color,count:e.items.length,index:t,label:e.label,onToggle:()=>F(e.key)}),!n&&e.items.map(Se)]},e.key)}):j.map(Se)}):(0,$.jsx)(Re,{rows:8})]})]})}),en.displayName=`AgentViewAllPage`,tn=()=>(0,$.jsx)(et,{children:(0,$.jsx)(en,{})})})),rn=e((()=>{nn()})),an,on;e((()=>{rn(),an=t(l()),on=()=>(0,an.jsx)(tn,{})}))();export{on as default};