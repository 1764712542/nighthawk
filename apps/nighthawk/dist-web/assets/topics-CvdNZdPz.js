import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{M as r,P as i,l as a,u as o}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{$n as s,O as c,Qn as l,cs as u,ls as d}from"./app-const-Bl9rlHwj.js";import{B as f,Cr as p,Hr as m,Qr as h,St as g,bt as _,mr as v}from"./dialog-BebLzVzY.js";import{a as y,c as b,f as x,p as S,t as C}from"./es-CVJR_g25.js";import{As as ee,B as te,E as ne,Eg as re,Eh as w,Kc as ie,Kv as T,Ms as E,O as D,Pc as ae,Pd as O,Qd as k,Rc as oe,Rn as A,Rt as j,Xs as M,bl as se,eg as ce,if as le,mi as ue,un as de,wa as fe,wp as pe,x as N}from"../vendor/vendor-icons-C-Y4oLkk.js";import{P as me,Q as he,c as ge,i as P,t as F,u as _e}from"./base-ui-BAv0gRbN.js";import{$r as ve,Ta as ye,t as I}from"./es-LELdnrjB.js";import{d as be,i as xe,p as Se}from"./format-BuuIRQbq.js";import{Kt as Ce,Yt as L}from"./tool-BJJaXV35.js";import{C as we,S as Te,_ as Ee,b as De,t as Oe,w as ke,x as Ae}from"./selectors-BsEaCsu0.js";import{Q as je,Z as Me,a as Ne,fo as Pe,o as Fe,po as Ie}from"./index-Djd-5Nq9.js";import{n as Le,t as Re}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{a as ze,o as Be}from"./ExecutionStatus-AQSX5GaQ.js";import{n as Ve,t as He}from"./AsyncError-DLThyZ5z.js";import{n as Ue,t as We}from"./RingLoading-BhDKhxkR.js";import{i as Ge,n as Ke,r as qe,t as Je}from"./useDropdownMenu-o2YlhQmi.js";import{n as Ye,t as Xe}from"./DeleteTopicConfirm-ChtldaAC.js";import{n as Ze,t as Qe}from"./useActivityTime-DhyolkDK.js";import{n as $e,t as et}from"./AgentBreadcrumb-EU8wI3cb.js";var tt,R,z=e((()=>{a(),tt={groupBy:`byTime`,groupIds:[],search:``,selectMode:!1,selectedIds:[],sortBy:`updatedAt`,status:`active`,timeRange:`all`,triggers:[`chat`],viewMode:`card`},R=o(e=>({...tt,clearSelected:()=>e({selectedIds:[]}),exitSelectMode:()=>e({selectMode:!1,selectedIds:[]}),reset:()=>e(tt),selectAll:t=>e({selectedIds:t}),setGroupBy:t=>e({groupBy:t}),setGroupIds:t=>e({groupIds:t}),setSearch:t=>e({search:t}),setSortBy:t=>e({sortBy:t}),setStatus:t=>e({status:t}),setTimeRange:t=>e({timeRange:t}),setTriggers:t=>e({triggers:t}),setViewMode:t=>e({viewMode:t}),toggleSelectMode:()=>e(e=>({selectMode:!e.selectMode,selectedIds:e.selectMode?[]:e.selectedIds})),toggleSelected:t=>e(e=>({selectedIds:e.selectedIds.includes(t)?e.selectedIds.filter(e=>e!==t):[...e.selectedIds,t]}))}))})),nt,rt,it,at=e((()=>{F(),N(),nt=t(d()),r(),Ce(),Ge(),z(),rt=t(u()),it=(0,nt.memo)(()=>{let{t:e}=i(`topic`),t=R(e=>e.selectedIds),n=R(e=>e.exitSelectMode),r=L(e=>e.activeAgentId);return(0,rt.jsx)(_,{icon:k,size:`small`,title:e(`management.bulk.move`),onClick:()=>{t.length!==0&&qe({onMoved:n,sourceAgentId:r,topicIds:t})}})}),it.displayName=`AgentTopicManagerMoveToAgentButton`})),ot,B,st,ct,lt=e((()=>{I(),F(),C(),N(),ot=t(d()),r(),Ye(),Ce(),at(),z(),B=t(u()),st=y(({css:e})=>({bar:e`
    pointer-events: auto;

    padding-block: 8px;
    padding-inline: 16px;
    border: 1px solid ${b.colorBorderSecondary};
    border-radius: 999px;

    background: ${b.colorBgElevated};
    box-shadow: ${b.boxShadowSecondary};
  `,divider:e`
    width: 1px;
    height: 16px;
    margin-inline: 2px;
    background: ${b.colorBorderSecondary};
  `,overlay:e`
    pointer-events: none;

    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline: 0;

    display: flex;
    justify-content: center;
  `})),ct=(0,ot.memo)(()=>{let{t:e}=i(`topic`),t=R(e=>e.selectedIds),n=R(e=>e.exitSelectMode),r=L(e=>e.favoriteTopic),a=L(e=>e.updateTopicStatus),o=L(e=>e.removeTopic),s=(0,ot.useCallback)(async()=>{await Promise.all(t.map(e=>r(e,!0))),n()},[t,r,n]),c=(0,ot.useCallback)(async()=>{await Promise.all(t.map(e=>a({status:`completed`,topicId:e}))),n()},[t,a,n]),l=(0,ot.useCallback)(()=>{Xe({content:e(`management.bulk.deleteConfirm`,{count:t.length}),okText:e(`management.bulk.delete`),onConfirm:async e=>{for(let n of t)await o(n,e);n()},title:e(`management.bulk.deleteTitle`),topicIds:t})},[t,e,o,n]);return t.length===0?null:(0,B.jsx)(`div`,{className:st.overlay,children:(0,B.jsxs)(h,{horizontal:!0,align:`center`,className:st.bar,gap:4,children:[(0,B.jsx)(P,{style:{marginInlineEnd:8},weight:500,children:e(`management.bulk.selectedCount`,{count:t.length})}),(0,B.jsx)(_,{icon:A,size:`small`,title:e(`management.bulk.favorite`),onClick:s}),(0,B.jsx)(_,{icon:T,size:`small`,title:e(`management.bulk.archive`),onClick:c}),(0,B.jsx)(it,{}),(0,B.jsx)(_,{icon:j,size:`small`,style:{color:b.colorError},title:e(`management.bulk.delete`),onClick:l}),(0,B.jsx)(`span`,{className:st.divider}),(0,B.jsx)(_,{icon:D,size:`small`,title:e(`management.bulk.cancel`),onClick:n})]})})}),ct.displayName=`AgentTopicManagerBulkActionBar`})),ut,V,dt,ft=e((()=>{c(),I(),F(),C(),N(),ut=t(d()),r(),Re(),V=t(u()),dt=(0,ut.memo)(({agentId:e,hasFilters:t,onClearFilters:n})=>{let{t:r}=i(`topic`),a=Le();return(0,V.jsxs)(h,{align:`center`,flex:1,gap:16,justify:`center`,paddingBlock:64,children:[(0,V.jsx)(m,{icon:ee,size:48,style:{color:b.colorTextQuaternary}}),(0,V.jsxs)(h,{align:`center`,gap:4,children:[(0,V.jsx)(P,{fontSize:16,weight:600,children:r(t?`management.empty.filtered.title`:`management.empty.noTopics.title`)}),(0,V.jsx)(P,{fontSize:13,type:`secondary`,children:r(t?`management.empty.filtered.desc`:`management.empty.noTopics.desc`)})]}),t?(0,V.jsx)(v,{onClick:n,children:r(`management.empty.filtered.action`)}):(0,V.jsx)(v,{type:`primary`,onClick:()=>a(s(e)),children:r(`management.empty.noTopics.action`)})]})}),dt.displayName=`AgentTopicManagerEmptyState`})),pt,mt,ht,gt=e((()=>{I(),N(),pt=t(d()),r(),$e(),je(),z(),mt=t(u()),ht=(0,pt.memo)(({agentId:e})=>{let{t}=i(`topic`),n=R(e=>e.search),r=R(e=>e.setSearch);return(0,mt.jsx)(Me,{left:(0,mt.jsx)(et,{agentId:e,title:t(`management.title`)}),right:(0,mt.jsx)(ve,{placeholder:t(`searchPlaceholder`),prefix:(0,mt.jsx)(m,{icon:ue,size:`small`,style:{marginInlineEnd:4}}),size:`small`,value:n,variant:`filled`,onChange:e=>r(e.target.value)}),styles:{left:{paddingInlineStart:8},right:{flex:1,maxWidth:400}}})}),ht.displayName=`AgentTopicManagerHeader`})),H,U,W,_t,G,vt,yt,bt,xt,St,Ct,K,wt,Tt,Et=e((()=>{I(),F(),C(),N(),H=t(d()),r(),Ce(),Oe(),z(),U=t(u()),W=32,_t=2160*60*60*1e3,G=y(({css:e})=>({addPill:e`
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    height: ${W}px;
    padding-inline: 12px;
    border: 1px dashed ${b.colorBorder};
    border-radius: ${W/2}px;

    font-size: 13px;
    color: ${b.colorTextSecondary};

    transition: all 0.15s;

    &:hover {
      border-color: ${b.colorPrimary};
      color: ${b.colorText};
    }
  `,chip:e`
    display: inline-flex;
    align-items: stretch;

    height: ${W}px;
    border: 1px solid ${b.colorBorderSecondary};
    border-radius: ${W/2}px;

    background: ${b.colorFillTertiary};

    transition: border-color 0.15s;

    &:hover {
      border-color: ${b.colorBorder};
    }
  `,chipClose:e`
    all: unset;

    cursor: pointer;

    display: inline-flex;
    align-items: center;

    padding-inline: 8px 12px;
    border-start-end-radius: ${W/2}px;
    border-end-end-radius: ${W/2}px;

    color: ${b.colorTextTertiary};

    &:hover {
      color: ${b.colorText};
      background: ${b.colorFillSecondary};
    }
  `,chipMain:e`
    cursor: pointer;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    padding-block: 0;
    padding-inline: 12px 6px;

    font-size: 13px;
    color: ${b.colorText};
  `,chipValue:e`
    font-weight: 500;
    color: ${b.colorText};
  `,divider:e`
    width: 1px;
    height: 16px;
    margin-inline: 4px;
    background: ${b.colorBorderSecondary};
  `,sortPill:e`
    cursor: pointer;
    user-select: none;

    display: inline-flex;
    gap: 6px;
    align-items: center;

    height: ${W}px;
    padding-inline: 12px;
    border-radius: ${W/2}px;

    font-size: 13px;
    color: ${b.colorText};

    background: ${b.colorFillTertiary};

    &:hover {
      background: ${b.colorFillSecondary};
    }
  `})),vt=[{key:`all`,labelKey:`management.filters.status.all`},{key:`active`,labelKey:`management.filters.status.active`},{key:`running`,labelKey:`management.filters.status.running`},{key:`completed`,labelKey:`management.filters.status.completed`}],yt=[`chat`,`api`,`task`,`eval`],bt={api:te,chat:M,eval:de,task:oe},xt=[`all`,`today`,`week`,`month`],St=[`updatedAt`,`createdAt`,`title`],Ct=[`byTime`,`byProject`,`none`],K=({visible:e})=>(0,U.jsx)(`span`,{style:{display:`inline-block`,width:12},children:e?`✓`:``}),wt=(0,H.memo)(({icon:e,label:t,value:n,items:r,onClear:i})=>(0,U.jsxs)(`span`,{className:G.chip,children:[(0,U.jsx)(g,{items:r,children:(0,U.jsxs)(`span`,{className:G.chipMain,children:[e&&(0,U.jsx)(m,{icon:e,size:12}),(0,U.jsxs)(P,{style:{color:b.colorTextSecondary,fontSize:12},children:[t,`:`]}),(0,U.jsx)(`span`,{className:G.chipValue,children:n}),(0,U.jsx)(m,{icon:ce,size:10})]})}),(0,U.jsx)(`button`,{"aria-label":`Clear ${t}`,className:G.chipClose,type:`button`,onClick:e=>{e.stopPropagation(),i()},children:(0,U.jsx)(m,{icon:D,size:12})})]})),Tt=(0,H.memo)(({projects:e,statusCounts:t})=>{let{t:n}=i(`topic`),r=L(Ee.agentTopicsViewTopics),a=L(e=>e.updateTopicStatus),o=R(e=>e.status),s=R(e=>e.setStatus),c=R(e=>e.groupIds),l=R(e=>e.setGroupIds),u=R(e=>e.triggers),d=R(e=>e.setTriggers),v=R(e=>e.timeRange),y=R(e=>e.setTimeRange),x=R(e=>e.sortBy),S=R(e=>e.setSortBy),C=R(e=>e.groupBy),ee=R(e=>e.setGroupBy),te=R(e=>e.viewMode),ne=R(e=>e.setViewMode),w=(0,H.useMemo)(()=>yt.map(e=>({extra:(0,U.jsx)(K,{visible:u.includes(e)}),icon:(0,U.jsx)(m,{icon:bt[e],size:14}),key:e,label:n(`management.filters.trigger.${e}`),onClick:()=>d(u.includes(e)?u.filter(t=>t!==e):[...u,e])})),[u,n,d]),E=(0,H.useMemo)(()=>e.length===0?[{disabled:!0,key:`empty`,label:n(`management.filters.project.empty`)}]:e.map(e=>({icon:(0,U.jsx)(K,{visible:c.includes(e.value)}),key:e.value,label:e.label,onClick:()=>l(c.includes(e.value)?c.filter(t=>t!==e.value):[...c,e.value])})),[e,c,n,l]),O=(0,H.useMemo)(()=>xt.map(e=>({icon:(0,U.jsx)(K,{visible:v===e}),key:e,label:n(`management.filters.time.${e}`),onClick:()=>y(e)})),[v,n,y]),k=(0,H.useMemo)(()=>St.map(e=>({icon:(0,U.jsx)(K,{visible:x===e}),key:e,label:n(`management.sort.${e}`),onClick:()=>S(e)})),[x,n,S]),oe=(0,H.useMemo)(()=>Ct.map(e=>({icon:(0,U.jsx)(K,{visible:C===e}),key:e,label:n(`management.group.${e}`),onClick:()=>ee(e)})),[C,n,ee]),A=u.length>0,j=c.length>0,M=v!==`all`,ue=A||j||M,de=(0,H.useMemo)(()=>{let e=[];return A||e.push({children:w,icon:(0,U.jsx)(m,{icon:ie,size:14}),key:`trigger`,label:n(`management.filters.trigger.label`),type:`submenu`}),j||e.push({children:E,icon:(0,U.jsx)(m,{icon:le,size:14}),key:`project`,label:n(`management.filters.project.label`),type:`submenu`}),M||e.push({children:O,icon:(0,U.jsx)(m,{icon:re,size:14}),key:`time`,label:n(`management.filters.time.label`),type:`submenu`}),e},[A,j,M,w,E,O,n]),N=(0,H.useMemo)(()=>c.length===1?e.find(e=>e.value===c[0])?.label??c[0]:`${c.length} selected`,[c,e]),he=u.length===1?n(`management.filters.trigger.${u[0]}`):`${u.length} selected`,ge=(0,H.useCallback)(()=>{let e=Date.now()-_t,t=(r??[]).filter(t=>t.status===`completed`?!1:(typeof t.updatedAt==`number`?t.updatedAt:new Date(t.updatedAt).getTime())<e);if(t.length===0){f.info(n(`management.actionsMenu.archiveStale.noneFound`));return}me({content:n(`management.actionsMenu.archiveStale.confirm`,{count:t.length}),okText:n(`management.actionsMenu.archiveStale.confirmOk`),onOk:async()=>{for(let e of t)await a({status:`completed`,topicId:e.id});f.success(n(`management.actionsMenu.archiveStale.done`,{count:t.length}))},title:n(`management.actionsMenu.archiveStale.title`)})},[r,a,n]),F=(0,H.useMemo)(()=>{let e=[{children:oe,key:`group`,label:`${n(`management.group.label`)}: ${n(`management.group.${C}`)}`,type:`submenu`}];return ue&&e.push({key:`d1`,type:`divider`},{icon:(0,U.jsx)(m,{icon:D,size:14}),key:`clear`,label:n(`management.filters.clearAll`,{defaultValue:`Clear all filters`}),onClick:()=>{d([]),l([]),y(`all`)}}),e.push({key:`d2`,type:`divider`},{icon:(0,U.jsx)(m,{icon:T,size:14}),key:`archive-stale`,label:n(`management.actionsMenu.archiveStale.label`),onClick:ge}),e},[oe,C,ue,n,d,l,y,ge]);return(0,U.jsxs)(h,{horizontal:!0,align:`center`,gap:6,wrap:`wrap`,children:[(0,U.jsx)(_e,{activeKey:o,size:`small`,style:{width:`auto`},items:vt.map(e=>{let r=t[e.key]??0;return{key:e.key,label:(0,U.jsxs)(h,{horizontal:!0,align:`center`,gap:6,children:[(0,U.jsx)(`span`,{children:n(e.labelKey)}),(0,U.jsx)(P,{style:{color:o===e.key?`inherit`:b.colorTextTertiary,fontSize:12,fontVariantNumeric:`tabular-nums`,opacity:o===e.key?.7:1},children:r})]})}}),onChange:e=>s(e)}),(0,U.jsx)(`span`,{className:G.divider}),A&&(0,U.jsx)(wt,{icon:ie,items:w,label:n(`management.filters.trigger.label`),value:he,onClear:()=>d([])}),j&&(0,U.jsx)(wt,{icon:le,items:E,label:n(`management.filters.project.label`),value:N,onClear:()=>l([])}),M&&(0,U.jsx)(wt,{icon:re,items:O,label:n(`management.filters.time.label`),value:n(`management.filters.time.${v}`),onClear:()=>y(`all`)}),de.length>0&&(0,U.jsx)(g,{items:de,children:(0,U.jsxs)(`span`,{className:G.addPill,children:[(0,U.jsx)(m,{icon:fe,size:12}),n(`management.filters.add`,{defaultValue:ue?`Add filter`:`Filter`})]})}),(0,U.jsx)(h,{flex:1}),(0,U.jsx)(_e,{activeKey:te,size:`small`,style:{width:`auto`},items:[{key:`card`,label:(0,U.jsx)(p,{title:n(`management.view.card`),children:(0,U.jsx)(m,{icon:se})})},{key:`list`,label:(0,U.jsx)(p,{title:n(`management.view.list`),children:(0,U.jsx)(m,{icon:ae})})}],onChange:e=>ne(e)}),(0,U.jsx)(`span`,{className:G.divider}),(0,U.jsx)(g,{items:k,children:(0,U.jsxs)(`span`,{className:G.sortPill,children:[(0,U.jsxs)(P,{style:{color:b.colorTextSecondary,fontSize:12},children:[n(`management.sort.label`),`:`]}),(0,U.jsx)(`span`,{style:{fontWeight:500},children:n(`management.sort.${x}`)}),(0,U.jsx)(m,{icon:ce,size:10})]})}),(0,U.jsx)(g,{items:F,placement:`bottomRight`,children:(0,U.jsx)(_,{icon:pe,size:{blockSize:W,size:18},title:n(`management.actionsMenu.title`)})})]})}),Tt.displayName=`AgentTopicManagerToolbar`})),Dt,Ot,kt,At,jt=e((()=>{I(),C(),Dt=t(d()),r(),Be(),Ue(),Ot=t(u()),kt={...Object.fromEntries(Object.entries(ze).map(([e,t])=>[e,t.color])),idle:b.colorTextQuaternary},At=(0,Dt.memo)(({status:e})=>{let{t}=i(`topic`),{isDarkMode:n}=S(),r=e||`idle`,a=kt[r]??b.colorTextQuaternary,o=`management.status.${r}`,s=r===`running`,c=n?b.colorWarningBorder:`color-mix(in srgb, ${b.colorWarning} 45%, transparent)`;return(0,Ot.jsxs)(h,{horizontal:!0,align:`center`,gap:6,children:[s?(0,Ot.jsx)(We,{ringColor:c,size:10,style:{color:b.colorWarning}}):(0,Ot.jsx)(`span`,{style:{background:a,borderRadius:`50%`,flexShrink:0,height:6,width:6}}),(0,Ot.jsx)(`span`,{style:{color:b.colorTextSecondary,fontSize:11},children:t(o)})]})}),At.displayName=`AgentTopicManagerStatusDot`})),Mt,Nt,q,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut=e((()=>{ke(),Mt=t(n()),Nt=1440*60*1e3,q=(e,t)=>{switch(t){case`all`:return!0;case`archived`:return e.status===`archived`;case`completed`:return e.status===`completed`;case`running`:return e.status===`running`;case`active`:return!e.status||e.status===`active`;default:return!0}},Pt=(e,t)=>{if(t.length===0)return!0;let n=Ae(e)??``;return t.includes(n)},Ft=(e,t)=>{if(t.length===0)return!0;let n=e.trigger??`chat`;return t.includes(n)},It=(e,t)=>{if(t===`all`)return!0;let n=e.updatedAt?new Date(e.updatedAt).getTime():0;if(!n)return!1;let r=Date.now()-n;switch(t){case`today`:return r<Nt;case`week`:return r<7*Nt;case`month`:return r<30*Nt;default:return!0}},Lt=(e,t)=>{let n=[...e];switch(t){case`updatedAt`:n.sort((e,t)=>new Date(t.updatedAt??0).getTime()-new Date(e.updatedAt??0).getTime());break;case`createdAt`:n.sort((e,t)=>new Date(t.createdAt??0).getTime()-new Date(e.createdAt??0).getTime());break;case`title`:n.sort((e,t)=>(e.title??``).localeCompare(t.title??``));break}return n},Rt=e=>e.split(/[/\\]+/).findLast(Boolean)??e,zt=e=>{let t=Ae(e);return t?Rt(t):void 0},Bt=e=>{let t=Ae(e),n=De(e)??t;if(!n)return;let r=Rt(n),i=t?Rt(t):void 0,a=i&&i!==r?`${i}/${r}`:r,o=e.metadata?.workingDirectoryConfig?.git?.branch;return o?`${a} · ${o}`:a},Vt=(e,t)=>/^\d{4}/.test(e)?e.includes(`-`)?(0,Mt.default)(e).format(`MMMM`):e:t(`groupTitle.byTime.${e}`),Ht=(e,t,n)=>e===`no-project`?n(`management.group.noProject`):t??e.replace(/^project:/,``)})),Wt,J,Y,Gt,Kt=e((()=>{c(),Se(),I(),F(),C(),N(),Wt=t(d()),r(),Re(),Qe(),jt(),z(),Ut(),J=t(u()),Y=y(({css:e})=>({card:e`
    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: column;

    /* min-height keeps short cards consistent without forcing tall empty
       whitespace — preview + footer can still grow the card naturally. */
    min-height: 140px;
    padding: 14px;

    transition:
      transform 0.18s,
      box-shadow 0.18s,
      border-color 0.18s;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
    }
  `,cardSelected:e`
    border-color: ${b.colorPrimary};
    box-shadow: 0 0 0 1px ${b.colorPrimary};
  `,checkbox:e`
    position: absolute;
    z-index: 1;
    inset-block-start: 10px;
    inset-inline-end: 10px;
  `,checkboxBox:e`
    border-color: ${b.colorBorder};
  `,description:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `,footer:e`
    /* push to bottom so cards with short content keep the stats row anchored */
    margin-block-start: auto;
    padding-block-start: 10px;
    border-block-start: 1px solid ${b.colorSplit};
  `,title:e`
    overflow: hidden;
    display: -webkit-box;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  `,titleRow:e`
    padding-inline-end: 28px;
  `})),Gt=(0,Wt.memo)(({topic:e,agentId:t})=>{let{t:n}=i(`topic`),r=Le(),a=R(e=>e.selectMode),o=R(t=>t.selectedIds.includes(e.id)),s=R(e=>e.toggleSelected),c=R(e=>e.toggleSelectMode),u=(0,Wt.useCallback)(n=>{if(a||n.metaKey||n.ctrlKey){n.preventDefault(),s(e.id);return}r(l(t,e.id))},[a,e.id,t,s,r]),d=(0,Wt.useCallback)(()=>{a||c(),s(e.id)},[a,e.id,s,c]),f=(0,Wt.useCallback)(e=>{e.stopPropagation()},[]),p=Bt(e),g=e.status??`active`,_=e.description?.trim()||e.historySummary?.trim()||e.firstUserMessage?.trim(),v=Ze(e.updatedAt),y=Number(e.messageCount??0),x=Number(e.tokenUsage??0),S=Number(e.cost??0);return(0,J.jsxs)(ye,{className:[Y.card,o&&Y.cardSelected].filter(Boolean).join(` `),gap:8,variant:`outlined`,onClick:u,children:[(0,J.jsx)(`div`,{className:Y.checkbox,onClick:f,children:(0,J.jsx)(he,{checked:o,classNames:{checkbox:Y.checkboxBox},size:18,onChange:d})}),(0,J.jsxs)(h,{horizontal:!0,align:`center`,className:Y.titleRow,gap:6,children:[e.favorite&&(0,J.jsx)(m,{icon:A,size:13,style:{color:b.colorWarning,flexShrink:0}}),(0,J.jsx)(P,{className:Y.title,fontSize:14,weight:600,children:e.title||n(`defaultTitle`)})]}),_&&(0,J.jsx)(P,{className:Y.description,fontSize:12,type:`secondary`,children:_}),p&&(0,J.jsx)(ge,{icon:(0,J.jsx)(m,{icon:O,size:11}),size:`small`,children:p}),(0,J.jsxs)(h,{horizontal:!0,align:`center`,className:Y.footer,justify:`space-between`,children:[(0,J.jsxs)(h,{horizontal:!0,align:`center`,gap:10,style:{color:b.colorTextQuaternary,fontSize:11},children:[y>0&&(0,J.jsxs)(h,{horizontal:!0,align:`center`,gap:3,children:[(0,J.jsx)(m,{icon:E,size:11}),y]}),x>0&&(0,J.jsxs)(h,{horizontal:!0,align:`center`,gap:3,title:`${x} tokens`,children:[(0,J.jsx)(m,{icon:ne,size:11}),be(x)]}),S>0&&(0,J.jsxs)(h,{horizontal:!0,align:`center`,gap:3,title:`$${S.toFixed(4)}`,children:[(0,J.jsx)(m,{icon:w,size:11}),xe(S,2)]}),(0,J.jsx)(`span`,{title:v.title,children:v.text})]}),(0,J.jsx)(At,{status:g})]})]})}),Gt.displayName=`AgentTopicCard`})),qt,Jt,Yt,Xt,Zt=e((()=>{I(),F(),C(),qt=t(d()),r(),Kt(),Ut(),Jt=t(u()),Yt=y(({css:e})=>({grid:e`
    display: grid;

    /*
      min(280px, 100%) lets columns shrink below 280px when the available
      width itself is narrower (e.g. agent sidebar expanded), so the layout
      keeps wrapping instead of overflowing horizontally.
    */
    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
    gap: 12px;

    width: 100%;
    min-width: 0;

    ${x.md} {
      grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
    }
  `,groupTitle:e`
    margin-block-start: 8px;
    padding-block-end: 4px;

    font-size: 13px;
    font-weight: 500;
    color: ${b.colorTextSecondary};
  `})),Xt=(0,qt.memo)(({groups:e,agentId:t,showGroupTitles:n,groupBy:r})=>{let{t:a}=i(`topic`);return(0,Jt.jsx)(h,{gap:12,children:e.map(e=>{if(e.children.length===0)return null;let i=r===`byProject`?Ht(e.id,e.title,a):e.title||Vt(e.id,a);return(0,Jt.jsxs)(qt.Fragment,{children:[n&&(0,Jt.jsx)(P,{as:`div`,className:Yt.groupTitle,children:i}),(0,Jt.jsx)(`div`,{className:Yt.grid,children:e.children.map(e=>(0,Jt.jsx)(Gt,{agentId:t,topic:e},e.id))})]},e.id)})})}),Xt.displayName=`AgentTopicManagerGrid`})),Qt,X,$t,Z,en,tn,nn=e((()=>{c(),I(),F(),C(),N(),Qt=t(d()),r(),Je(),Re(),Qe(),jt(),z(),Ut(),X=t(u()),$t=[`chat`,`api`,`task`,`eval`],Z=y(({css:e})=>({cell:e`
    overflow: hidden;
    min-width: 0;
  `,checkboxBox:e`
    border-color: ${b.colorBorder};
  `,groupBar:e`
    display: flex;
    gap: 6px;
    align-items: baseline;

    padding-block: 8px;
    padding-inline: 16px;
    border-block-end: 1px solid ${b.colorSplit};

    font-size: 12px;
    font-weight: 500;
    color: ${b.colorTextSecondary};

    background: ${b.colorFillQuaternary};
  `,groupCount:e`
    font-size: 11px;
    font-weight: 400;
    color: ${b.colorTextQuaternary};
  `,header:e`
    position: sticky;
    z-index: 2;
    inset-block-start: 0;

    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) 120px 100px 80px 100px 32px;
    gap: 12px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid ${b.colorSplit};

    font-size: 12px;
    font-weight: 500;
    color: ${b.colorTextSecondary};

    /* opaque so scrolled rows don't bleed through */
    background: ${b.colorBgElevated};
  `,headerCellEnd:e`
    text-align: end;
  `,list:e`
    position: relative;

    overflow: hidden;

    border: 1px solid ${b.colorBorderSecondary};
    border-radius: 12px;

    background: ${b.colorBgContainer};
  `,row:e`
    cursor: pointer;

    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) 120px 100px 80px 100px 32px;
    gap: 12px;
    align-items: center;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid ${b.colorSplit};

    transition: background 0.12s;

    &:hover {
      background: ${b.colorFillTertiary};
    }

    &:last-child {
      border-block-end: none;
    }
  `,rowSelected:e`
    background: ${b.colorPrimaryBg};

    &:hover {
      background: ${b.colorPrimaryBgHover};
    }
  `,sub:e`
    overflow: hidden;
    margin-block-start: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,title:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),en=(0,Qt.memo)(({topic:e,agentId:t})=>{let{t:n}=i(`topic`),r=Le(),a=R(e=>e.selectMode),o=R(t=>t.selectedIds.includes(e.id)),s=R(e=>e.toggleSelected),c=R(e=>e.toggleSelectMode),{dropdownMenu:u}=Ke({fav:e.favorite,id:e.id,status:e.status,title:e.title}),d=(0,Qt.useCallback)(n=>{if(a||n.metaKey||n.ctrlKey){n.preventDefault(),s(e.id);return}r(l(t,e.id))},[a,e.id,t,s,r]),f=(0,Qt.useCallback)(()=>{a||c(),s(e.id)},[a,e.id,s,c]),p=e.status??`active`,v=Bt(e),y=Ze(e.updatedAt),x=e.trigger??`chat`,S=n(`management.filters.trigger.${$t.includes(x)?x:`chat`}`);return(0,X.jsxs)(`div`,{className:[Z.row,o&&Z.rowSelected].filter(Boolean).join(` `),onClick:d,children:[(0,X.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,X.jsx)(he,{checked:o,classNames:{checkbox:Z.checkboxBox},size:18,onChange:f})}),(0,X.jsxs)(`div`,{className:Z.cell,children:[(0,X.jsxs)(h,{horizontal:!0,align:`center`,gap:6,children:[e.favorite&&(0,X.jsx)(m,{icon:A,size:12,style:{color:b.colorWarning,flexShrink:0}}),(0,X.jsx)(P,{className:Z.title,fontSize:13,weight:500,children:e.title||n(`defaultTitle`)})]}),e.historySummary&&(0,X.jsx)(P,{className:Z.sub,fontSize:11,type:`secondary`,children:e.historySummary})]}),(0,X.jsx)(`div`,{className:Z.cell,children:v?(0,X.jsx)(ge,{icon:(0,X.jsx)(m,{icon:O,size:11}),size:`small`,children:v}):(0,X.jsx)(P,{fontSize:12,type:`secondary`,children:`—`})}),(0,X.jsx)(At,{status:p}),(0,X.jsx)(P,{fontSize:12,type:`secondary`,children:S}),(0,X.jsx)(P,{fontSize:12,style:{color:b.colorTextQuaternary,textAlign:`end`},title:y.title,children:y.text}),(0,X.jsx)(g,{items:u,children:(0,X.jsx)(_,{icon:pe,size:`small`,onClick:e=>e.stopPropagation()})})]})}),en.displayName=`AgentTopicManagerRow`,tn=(0,Qt.memo)(({groups:e,agentId:t,showGroupTitles:n,groupBy:r})=>{let{t:a}=i(`topic`),o=R(e=>e.selectedIds),s=R(e=>e.selectMode),c=R(e=>e.selectAll),l=R(e=>e.clearSelected),u=R(e=>e.toggleSelectMode),d=e.flatMap(e=>e.children.map(e=>e.id)),f=new Set(o),p=d.reduce((e,t)=>e+ +!!f.has(t),0),m=d.length>0&&p===d.length,h=p>0&&!m;return(0,X.jsxs)(`div`,{className:Z.list,children:[(0,X.jsxs)(`div`,{className:Z.header,children:[(0,X.jsx)(he,{checked:m,classNames:{checkbox:Z.checkboxBox},indeterminate:h,size:18,onChange:()=>{m?l():(s||u(),c(d))}}),(0,X.jsx)(`span`,{children:a(`management.columns.title`)}),(0,X.jsx)(`span`,{children:a(`management.columns.project`)}),(0,X.jsx)(`span`,{children:a(`management.columns.status`)}),(0,X.jsx)(`span`,{children:a(`management.columns.trigger`)}),(0,X.jsx)(`span`,{className:Z.headerCellEnd,children:a(`management.columns.updated`)}),(0,X.jsx)(`span`,{})]}),e.map(e=>{if(e.children.length===0)return null;let i=r===`byProject`?Ht(e.id,e.title,a):e.title||Vt(e.id,a);return(0,X.jsxs)(Qt.Fragment,{children:[n&&(0,X.jsxs)(`div`,{className:Z.groupBar,children:[(0,X.jsx)(`span`,{children:i}),(0,X.jsx)(`span`,{className:Z.groupCount,children:e.children.length})]}),e.children.map(e=>(0,X.jsx)(en,{agentId:t,topic:e},e.id))]},e.id)})]})}),tn.displayName=`AgentTopicManagerListView`})),Q,$,rn,an,on=e((()=>{ke(),I(),Q=t(d()),r(),Ve(),Fe(),Ce(),Oe(),Pe(),lt(),ft(),gt(),z(),Et(),Zt(),nn(),Ut(),$=t(u()),rn=30,an=(0,Q.memo)(()=>{let{t:e}=i(`topic`),t=L(e=>e.activeAgentId),n=L(e=>e.useFetchAgentTopicsView),r=L(e=>e.useSearchTopics),a=L(e=>e.loadMoreAgentTopicsView),o=L(Ee.agentTopicsViewTopics),s=L(Ee.agentTopicsViewHasMore),c=L(Ee.agentTopicsViewIsLoadingMore),l=L(Ee.agentTopicsViewLoadMoreError),u=R(e=>e.reset),d=R(e=>e.search),f=R(e=>e.status),p=R(e=>e.groupIds),m=R(e=>e.triggers),g=R(e=>e.timeRange),_=R(e=>e.sortBy),v=R(e=>e.groupBy),y=R(e=>e.viewMode),b=R(e=>e.setStatus),x=R(e=>e.setGroupIds),S=R(e=>e.setTriggers),C=R(e=>e.setTimeRange),ee=R(e=>e.setSearch);(0,Q.useEffect)(()=>{u()},[t,u]);let{error:te,isLoading:ne,mutate:re}=n(!0,{agentId:t,pageSize:rn,withDetails:!0}),w=d.trim(),{data:ie}=r(w.length>0?w:void 0,{agentId:t}),T=(0,Q.useMemo)(()=>w.length>0?ie??[]:o??[],[w,ie,o]),E=(0,Q.useMemo)(()=>T.filter(e=>Pt(e,p)&&Ft(e,m)&&It(e,g)),[T,p,m,g]),D=(0,Q.useMemo)(()=>Lt(E.filter(e=>q(e,f)),_),[E,f,_]),ae=(0,Q.useMemo)(()=>({active:E.filter(e=>q(e,`active`)).length,all:E.length,archived:E.filter(e=>q(e,`archived`)).length,completed:E.filter(e=>q(e,`completed`)).length,running:E.filter(e=>q(e,`running`)).length}),[E]),O=w.length>0,k=v!==`none`&&!O,oe=(0,Q.useMemo)(()=>k?v===`byProject`?Te(D,_===`createdAt`?`createdAt`:`updatedAt`):we(D):[{children:D,id:`all`}],[D,k,v,_]),A=(0,Q.useMemo)(()=>{let e=new Map;for(let t of T){let n=Ae(t);n&&!e.has(n)&&e.set(n,zt(t)??n)}return Array.from(e,([e,t])=>({label:t,value:e}))},[T]),j=D.length,M=f!==`active`&&f!==`all`||p.length>0||m.length>0||g!==`all`||w.length>0,se=()=>{b(`all`),x([]),S([]),C(`all`),ee(``)},ce=(0,Q.useRef)(null),le=(0,Q.useRef)(null);return(0,Q.useEffect)(()=>{if(O)return;let e=ce.current,t=le.current;if(!e||!t)return;let n=new IntersectionObserver(([e])=>{e.isIntersecting&&s&&!c&&!l&&a()},{root:e,rootMargin:`300px`});return n.observe(t),()=>n.disconnect()},[s,c,O,a,l]),t?(0,$.jsxs)(h,{flex:1,height:`100%`,style:{overflow:`hidden`},children:[(0,$.jsx)(ht,{agentId:t}),(0,$.jsx)(`div`,{ref:ce,style:{display:`flex`,flex:1,flexDirection:`column`,minWidth:0,overflowY:`auto`,padding:`20px 24px`},children:(0,$.jsxs)(h,{gap:16,style:{marginInline:`auto`,maxWidth:1440,width:`100%`},children:[(0,$.jsx)(Tt,{projects:A,statusCounts:ae}),(0,$.jsx)(ct,{}),!O&&te&&!ne&&T.length===0?(0,$.jsx)(He,{error:te,variant:`block`,onRetry:()=>{re()}}):ne&&T.length===0?(0,$.jsx)(Ne,{chrome:`body`}):j===0?(0,$.jsx)(dt,{agentId:t,hasFilters:M,onClearFilters:se}):(0,$.jsxs)($.Fragment,{children:[y===`card`?(0,$.jsx)(Xt,{agentId:t,groupBy:v,groups:oe,showGroupTitles:k}):(0,$.jsx)(tn,{agentId:t,groupBy:v,groups:oe,showGroupTitles:k}),!O&&s&&(0,$.jsx)(`div`,{"aria-hidden":!0,ref:le,style:{height:1}}),!O&&c&&(0,$.jsx)(h,{align:`center`,paddingBlock:12,children:(0,$.jsx)(`span`,{className:Ie.shinyText,style:{fontSize:12},children:e(`management.loadingMore`)})}),!O&&l&&!c&&(0,$.jsx)(h,{align:`center`,paddingBlock:12,children:(0,$.jsx)(He,{error:l,variant:`inline`,onRetry:()=>{a()}})})]})]})})]}):(0,$.jsx)(Ne,{})}),an.displayName=`AgentTopicManager`})),sn,cn,ln;e((()=>{sn=t(d()),Fe(),on(),cn=t(u()),ln=()=>(0,cn.jsx)(sn.Suspense,{fallback:(0,cn.jsx)(Ne,{}),children:(0,cn.jsx)(an,{})})}))();export{ln as default};