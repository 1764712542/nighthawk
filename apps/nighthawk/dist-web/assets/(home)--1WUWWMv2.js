import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{M as r,P as i,_ as a,v as o}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{L as s,nt as c,yt as l}from"./agent-Cvv887Je.js";import{cs as u,ls as d}from"./app-const-Bl9rlHwj.js";import{Hr as f,Qr as p,Xr as m,mr as h}from"./dialog-BebLzVzY.js";import{a as g,h as _,l as ee,y as te}from"../vendor/vendor-react-CBcx1o7d.js";import{a as v,b as y,c as b,l as ne,t as x,vn as re}from"./es-CVJR_g25.js";import{Io as ie,Mt as ae,Of as oe,Ph as se,Rt as ce,ed as le,wa as ue,x as S}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as de,et as fe,i as pe,t as me}from"./base-ui-BAv0gRbN.js";import{Or as he,t as C,zt as ge}from"./es-LELdnrjB.js";import{Gn as w,Kn as _e}from"./model-runtime-client-tog6-eyE.js";import{a as ve,s as ye,v as be,y as xe}from"./swrKeys-B4sicPWZ.js";import{d as Se,p as Ce}from"./format-BuuIRQbq.js";import{a as we,o as Te}from"./resource-CHpBQMgG.js";import{Sn as Ee,xn as De}from"./tool-BJJaXV35.js";import{n as Oe,t as ke}from"./Github-Bay25f86.js";import{Do as Ae,Eo as je,Q as Me,Z as Ne}from"./index-Djd-5Nq9.js";import{n as Pe,t as Fe}from"./FileIcon-DXM_Cnj6.js";import{n as Ie,t as Le}from"./useAgentDisplayMeta-yu8QY6PC.js";import{C as Re,E as ze,O as Be,S as Ve,T as He,k as Ue,w as We}from"./Messages-CHVzbeQ8.js";import{n as T,t as E}from"./useWorkspaceAwareNavigate-Dvl5q_Bd.js";import{n as Ge,t as Ke}from"./AsyncError-DLThyZ5z.js";import{n as qe,t as Je}from"./useFetchAgentList-7Q1guCM_.js";import{a as Ye,t as Xe}from"./LibraryModal-DrWjFVDQ.js";import{l as Ze,r as D,s as Qe,t as O}from"./store-DQBP7j-v.js";import{i as $e,t as et}from"./library-CCaQUh3w.js";import{n as tt,t as nt}from"./taskDetailPath-CPHdgpcJ.js";import{n as rt,t as it}from"./loader-dXmBEyqR.js";import{n as at,t as ot}from"./formatTaskItemDate-BHFx5LfS.js";import{n as st,t as ct}from"./StatusIcon-BQgQGgZL.js";import{i as lt,n as ut,r as dt,t as ft}from"./useInitFileCheck-BDEeFpuz.js";import{c as pt,s as mt}from"./useFileItemDropdown-CPmsbFxG.js";var ht,gt,_t,vt=e((()=>{ht=new Map([[`all`,{}],[`task`,{type:`task`}],[`document`,{type:`document`}],[`linear`,{provider:`linear`}],[`github`,{provider:`github`}]]),gt=e=>e&&ht.has(e)?e:null,_t=e=>ht.get(e)??{}})),k,yt,bt,xt=e((()=>{k=t(d()),a(),be(),O(),Ze(),s(),De(),vt(),yt=30,bt=e=>{let t=xe(),n=D(e=>e.listVisibility),r=_t(e),i=t?Qe(void 0,n):void 0,{data:a,error:s,isLoading:c,isValidating:u,mutate:d,setSize:f,size:p}=o((0,k.useCallback)((n,r)=>r&&r.nextCursor===null?null:l.workspace(t,e,r?.nextCursor??void 0,i),[e,i,t]),([,,,e,t])=>Ee.listByWorkspace({cursor:e||void 0,limit:yt,provider:r.provider,type:r.type??null,visibility:t??void 0}),{revalidateFirstPage:!1});(0,k.useEffect)(()=>{f(1)},[e,f,i]);let m=(0,k.useCallback)(()=>{f(e=>e+1)},[f]),h=(0,k.useCallback)(()=>{d()},[d]),g=a?.flatMap(e=>e?.items??[])??[],_=a?.findLast(Boolean),ee=_?_.nextCursor===null:!1,te=!s&&(c||p>0&&!!a&&a[p-1]===void 0);return{error:s,hasMore:!ee&&!s,isLoadingInitial:c,isLoadingMore:te,isValidating:u,items:g,loadMore:m,reload:h}}})),St,Ct,wt=e((()=>{St=t(d()),nt(),it(),Re(),E(),Ct=()=>{let e=T();return(0,St.useCallback)(t=>{let n=Ve(t).getOpenTarget(t);if(n)switch(n.kind){case`document`:rt(n.documentId);return;case`external`:We(n.url)&&window.open(n.url,`_blank`,`noopener,noreferrer`);return;case`filePreview`:We(n.url)&&window.open(n.url,`_blank`,`noopener,noreferrer`);return;case`task`:e(tt(n.identifier))}},[e])}})),Tt,A,j,Et,Dt,Ot=e((()=>{Oe(),C(),me(),x(),S(),Tt=t(d()),r(),Re(),ze(),A=t(u()),j=v(({css:e})=>({cover:e`
    position: relative;

    overflow: hidden;

    height: clamp(160px, 15vw, 220px);
    margin: 7px;
    border-radius: 11px;

    /* A white top spotlight keeps the flat fill from reading dull. Light and
       dark need different intensities: on the light grey fill the highlight
       must be near-opaque white to register at all, while in dark mode a few
       percent of white already lifts the surface. */
    background:
      radial-gradient(
        140% 110% at 50% 0%,
        color-mix(in srgb, #fff 85%, transparent) 0%,
        color-mix(in srgb, #fff 30%, transparent) 45%,
        transparent 75%
      ),
      ${b.colorFillTertiary};
    box-shadow: inset 0 1px 0 #fff;

    [data-theme='dark'] & {
      background:
        radial-gradient(
          140% 110% at 50% 0%,
          color-mix(in srgb, #fff 10%, transparent) 0%,
          transparent 65%
        ),
        ${b.colorFillQuaternary};
      box-shadow: inset 0 1px 0 color-mix(in srgb, #fff 12%, transparent);
    }
  `,coverBadge:e`
    position: absolute;
    z-index: 2;
    inset-block-start: 9px;
    inset-inline-start: 9px;

    display: grid;
    place-items: center;

    width: 34px;
    height: 34px;
    border: 1px solid ${b.colorBorderSecondary};
    border-radius: 10px;

    color: ${b.colorText};

    background: color-mix(in srgb, ${b.colorBgElevated} 88%, transparent);
    backdrop-filter: blur(12px);
  `,grid:e`
    position: absolute;
    inset: 0;

    opacity: 0.22;
    background-image:
      linear-gradient(${b.colorBorderSecondary} 1px, transparent 1px),
      linear-gradient(90deg, ${b.colorBorderSecondary} 1px, transparent 1px);
    background-size: 20px 20px;
  `,linearBody:e`
    padding: 20px;
  `,linearId:e`
    font-size: 10px;
    font-weight: 650;
    color: ${b.colorTextTertiary};
    letter-spacing: 0.04em;
  `,linearTitle:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-start: 7px;

    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
  `,mockWindow:e`
    position: absolute;
    inset: 26px;

    overflow: hidden;

    border: 1px solid ${b.colorBorderSecondary};
    border-radius: 9px;

    background: ${b.colorBgContainer};
  `,previewDescription:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-start: 8px;

    font-size: 9px;
    line-height: 1.55;
    color: ${b.colorTextSecondary};
  `,previewBody:e`
    box-sizing: border-box;
    height: 100%;
    padding-block: 20px 28px;
    padding-inline: 20px;
  `,previewIdentifier:e`
    font-size: 9px;
    font-weight: 650;
    color: ${b.colorTextTertiary};
  `,previewTitle:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    margin-block-start: 7px;

    font-size: 12px;
    font-weight: 700;
    line-height: 1.45;
  `,status:e`
    position: absolute;
    z-index: 2;
    inset-block-start: 12px;
    inset-inline-end: 12px;
  `,taskBody:e`
    padding: 20px;
  `})),Et=e=>{let t=e?.toLowerCase();if(t){if(t.includes(`done`)||t.includes(`complete`)||t===`merged`)return`success`;if(t.includes(`review`)||t.includes(`progress`))return`warning`;if(t.includes(`open`)||t.includes(`todo`))return`info`}},Dt=(0,Tt.memo)(({item:e,title:t})=>{let{t:n}=i(`file`),r=Ve(e),a=r.getIcon(e),o=r.getDescription(e),s=r.getIdentifier(e),c=e.resourceType.startsWith(`github_`)&&s?.includes(`#`)?`#${s.split(`#`).at(-1)}`:s,l=e.resourceType===`document`?n(`work.type.document`):c,u=e.resourceType.startsWith(`github_`),d=e.resourceType.startsWith(`linear_`),f=e.resourceType===`task`?e.task.status:null,m=e.status||f;return(0,A.jsxs)(`div`,{className:j.cover,children:[(0,A.jsx)(`div`,{className:j.grid}),(0,A.jsx)(`div`,{className:j.mockWindow,children:d?(0,A.jsxs)(`div`,{className:j.linearBody,children:[(0,A.jsx)(p,{horizontal:!0,align:`center`,justify:`space-between`,children:(0,A.jsx)(`span`,{className:j.linearId,children:s})}),(0,A.jsx)(`div`,{className:j.linearTitle,children:t}),(0,A.jsx)(`div`,{className:j.previewDescription,children:o})]}):e.resourceType===`task`?(0,A.jsxs)(p,{className:j.taskBody,gap:10,children:[(0,A.jsxs)(p,{horizontal:!0,align:`center`,gap:8,children:[(0,A.jsx)(se,{color:b.colorSuccess,size:22}),(0,A.jsx)(pe,{strong:!0,children:t})]}),(0,A.jsx)(`div`,{className:j.previewDescription,children:o})]}):(0,A.jsxs)(`div`,{className:j.previewBody,children:[(0,A.jsxs)(p,{horizontal:!0,align:`center`,gap:6,children:[e.resourceType===`github_pull_request`&&(0,A.jsx)(le,{color:b.colorTextTertiary,size:11}),(0,A.jsx)(`span`,{className:j.previewIdentifier,children:l||e.resourceType})]}),(0,A.jsx)(`div`,{className:j.previewTitle,children:t}),(0,A.jsx)(`div`,{className:j.previewDescription,children:o})]})}),(0,A.jsx)(`div`,{className:j.coverBadge,children:u?(0,A.jsx)(ke,{size:18}):d?(0,A.jsx)(He,{size:18}):(0,A.jsx)(a,{size:17})}),!d&&!u&&m&&(0,A.jsx)(de,{className:j.status,color:Et(m),size:`small`,children:m})]})}),Dt.displayName=`WorkPreview`})),kt,M,N,P,At,jt,F,Mt=e((()=>{Ce(),C(),me(),x(),S(),kt=t(d()),r(),at(),Le(),Re(),Ue(),Ot(),M=t(u()),N=v(({css:e})=>({agentAvatar:e`
    align-self: flex-start;
    margin-block-start: 2px;
  `,agentName:e`
    overflow: hidden;
    flex: none;

    max-width: 64px;

    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,card:e`
    position: relative;

    overflow: hidden;

    border: 1px solid ${b.colorBorderSecondary};
    border-radius: 16px;

    background: ${b.colorBgContainer};

    transition:
      transform ${b.motionDurationFast},
      border-color ${b.motionDurationFast},
      box-shadow ${b.motionDurationFast};
  `,cardInfo:e`
    padding-block: 8px 12px;
    padding-inline: 12px;
  `,clickable:e`
    cursor: pointer;

    &:hover {
      border-color: ${b.colorBorder};
    }
  `,footer:e`
    overflow: hidden;
    margin-block-start: 8px;
  `,identityMeta:e`
    flex: 1;
    min-width: 0;
  `,identifier:e`
    overflow: hidden;

    min-width: 0;

    font-size: 11px;
    color: ${b.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,metaRow:e`
    min-width: 0;
  `,meta:e`
    flex: none;
    font-size: 10px;
    color: ${b.colorTextTertiary};
  `,originTopic:e`
    overflow: hidden;

    min-width: 0;

    font-size: 11px;
    color: ${b.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,title:e`
    overflow: hidden;

    margin-block-start: 5px;

    font-size: 15px;
    font-weight: 650;
    line-height: 1.4;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,type:e`
    font-size: 11px;
    color: ${b.colorTextTertiary};
  `,usage:e`
    flex: none;

    margin-inline-start: auto;

    font-size: 10px;
    color: ${b.colorTextSecondary};
    white-space: nowrap;
  `})),P=e=>typeof e==`object`&&!!e,At=e=>{let t=e.event.cumulativeUsage?.usage;if(!P(t)||!P(t.llm)||!P(t.llm.tokens))return null;let n=t.llm.tokens.total;return typeof n==`number`&&Number.isFinite(n)&&n>0?n:null},jt=e=>{switch(e.resourceType){case`document`:return`work.type.document`;case`file`:return`work.type.file`;case`github_issue`:return`work.type.githubIssue`;case`github_pull_request`:return`work.type.githubPullRequest`;case`linear_document`:return`work.type.linearDocument`;case`linear_issue`:return`work.type.linearIssue`;case`task`:return`work.type.task`}},F=(0,kt.memo)(({item:e,onOpen:t})=>{let{t:n,i18n:r}=i([`chat`,`common`,`file`]),a=Ie(e.originAgentId),o=Ve(e),s=o.getTitle(e)?.trim()||o.getIdentifier(e)||e.resourceId||e.id,c=o.getIdentifier(e),l=e.resourceType.startsWith(`github_`)&&c?.includes(`#`)?`#${c.split(`#`).at(-1)}`:c,u=e.resourceType===`task`&&e.taskDeleted,d=o.getOpenTarget(e),f=!!d&&(d.kind!==`filePreview`||!!d.url)&&!u,m=ot(e.event.changeType===`created`?e.createdAt:e.updatedAt,{formatOtherYear:n(`time.formatOtherYear`,{ns:`common`}),formatThisYear:n(`time.formatThisYear`,{ns:`common`}),locale:r.language}),h=n(e.event.changeType===`created`?`work.createdAt`:`work.updatedAt`,{date:m,ns:`file`}),g=At(e),_=Be(e.totalCost);return(0,M.jsxs)(p,{className:ne(N.card,f&&N.clickable),onClick:f?()=>t(e):void 0,children:[(0,M.jsx)(Dt,{item:e,title:s}),(0,M.jsxs)(`div`,{className:N.cardInfo,children:[(0,M.jsxs)(p,{horizontal:!0,align:`center`,className:N.metaRow,gap:6,children:[(0,M.jsx)(`span`,{className:N.type,children:n(jt(e),{ns:`file`})}),l&&e.resourceType!==`document`&&e.resourceType!==`github_pull_request`&&e.resourceType!==`linear_issue`&&(0,M.jsx)(p,{horizontal:!0,align:`center`,className:N.identifier,gap:3,children:l}),e.resourceType===`github_issue`&&e.status&&(0,M.jsx)(de,{size:`small`,style:{marginInlineStart:`auto`},children:e.status}),u&&(0,M.jsx)(de,{color:`warning`,icon:(0,M.jsx)(ce,{size:12}),size:`small`,children:n(`workingPanel.works.taskDeleted`,{ns:`chat`})})]}),(0,M.jsx)(`div`,{className:N.title,children:s}),(0,M.jsxs)(p,{horizontal:!0,align:`baseline`,className:N.footer,gap:7,children:[a&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(fe,{emojiScaleWithBackground:!0,avatar:a.avatar,background:a.backgroundColor,className:N.agentAvatar,shape:`square`,size:24}),(0,M.jsxs)(p,{className:N.identityMeta,gap:1,children:[(0,M.jsxs)(p,{horizontal:!0,align:`baseline`,gap:7,children:[(0,M.jsx)(`span`,{className:N.agentName,children:a.title}),(0,M.jsx)(`span`,{className:N.meta,children:h})]}),e.originTopicTitle&&(0,M.jsx)(`div`,{className:N.originTopic,children:n(`work.fromTopic`,{ns:`file`,topic:e.originTopicTitle})})]})]}),!a&&(0,M.jsxs)(p,{className:N.identityMeta,gap:1,children:[(0,M.jsx)(`span`,{className:N.meta,children:h}),e.originTopicTitle&&(0,M.jsx)(`div`,{className:N.originTopic,children:n(`work.fromTopic`,{ns:`file`,topic:e.originTopicTitle})})]}),(g||_)&&(0,M.jsx)(`span`,{className:N.usage,children:[g?`${Se(g)} tokens`:null,_].filter(Boolean).join(` · `)})]})]})]})}),F.displayName=`WorkPreviewCard`})),I,L,R,Nt,z,Pt,Ft=e((()=>{C(),me(),x(),S(),I=t(d()),r(),Le(),Je(),Ue(),xt(),wt(),Mt(),L=t(u()),R=v(({css:e})=>({agentFilter:e`
    flex: none;

    padding-inline: 5px 10px;
    border: 1px solid transparent;
    border-radius: 999px;

    color: ${b.colorTextSecondary};
  `,agentFilterActive:e`
    border-color: ${b.colorBorder};
    color: ${b.colorText};
    background: ${b.colorFillQuaternary};
  `,cardList:e`
    display: grid;
    grid-template-columns: repeat(3, minmax(280px, 1fr));
    gap: 16px;
    width: 100%;

    @media (width >= 1600px) {
      grid-template-columns: repeat(4, minmax(280px, 1fr));
    }

    @media (width <= 920px) {
      grid-template-columns: repeat(2, minmax(280px, 1fr));
    }

    @media (width <= 620px) {
      grid-template-columns: minmax(0, 1fr);
    }
  `,container:e`
    height: 100%;
  `,emptyState:e`
    height: 100%;
    min-height: 320px;
  `,filterBar:e`
    scrollbar-width: none;

    overflow: auto hidden;
    flex: none;

    padding-block: 12px 10px;
    padding-inline: 24px;

    &::-webkit-scrollbar {
      display: none;
    }
  `,groupCount:e`
    flex: none;
    font-size: 12px;
    color: ${b.colorTextTertiary};
  `,groupHeader:e`
    display: flex;
    gap: 10px;
    align-items: baseline;
    margin-block-end: 12px;
  `,groupTitle:e`
    font-size: 14px;
    font-weight: 600;
    color: ${b.colorText};
  `,loadMoreError:e`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    justify-content: center;

    padding-block: 16px;

    font-size: 13px;
    color: ${b.colorTextTertiary};
  `,retry:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 12px;
    border: 1px solid ${b.colorBorder};
    border-radius: 6px;

    font-size: 13px;
    color: ${b.colorTextSecondary};

    background: ${b.colorBgContainer};

    &:hover {
      border-color: ${b.colorTextTertiary};
      color: ${b.colorText};
    }
  `,scroll:e`
    overflow: hidden auto;
    flex: 1;

    min-height: 0;
    padding-block: 8px 24px;
    padding-inline: 24px;
  `,skeletonCard:e`
    aspect-ratio: 0.9;
    padding: 12px;
    border: 1px solid ${b.colorBorderSecondary};
    border-radius: 16px;

    background: ${b.colorBgContainer};
  `})),Nt=(0,I.memo)(({active:e,agentId:t,onSelect:n})=>{let r=Ie(t);return r?(0,L.jsx)(h,{className:ne(R.agentFilter,e&&R.agentFilterActive),size:`small`,type:`text`,icon:(0,L.jsx)(fe,{emojiScaleWithBackground:!0,avatar:r.avatar,background:r.backgroundColor,shape:`square`,size:20}),onClick:()=>n(t),children:r.title}):null}),Nt.displayName=`AgentFilter`,z=(0,I.memo)(({count:e})=>(0,L.jsx)(`div`,{className:R.cardList,children:Array.from({length:e}).map((e,t)=>(0,L.jsx)(`div`,{className:R.skeletonCard,children:(0,L.jsx)(ge,{active:!0,paragraph:{rows:6}})},t))})),z.displayName=`SkeletonCards`,Pt=(0,I.memo)(({galleryKey:e})=>{let{t,i18n:n}=i(`file`),[r,a]=(0,I.useState)(null);qe();let{items:o,error:s,hasMore:c,isLoadingInitial:l,isLoadingMore:u,loadMore:d,reload:f}=bt(e),g=(0,I.useMemo)(()=>[...new Set(o.map(e=>e.originAgentId).filter(Boolean))],[o]),_=(0,I.useMemo)(()=>r?o.filter(e=>e.originAgentId===r):o,[r,o]),ee=(0,I.useMemo)(()=>{let e=new Date,r=new Date(e);r.setDate(e.getDate()-1);let i=e=>`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`,a=i(e),o=i(r),s=new Map;for(let r of _){let c=new Date(r.updatedAt),l=i(c),u=l===a?t(`work.date.today`):l===o?t(`work.date.yesterday`):new Intl.DateTimeFormat(n.language,{day:`numeric`,month:`short`,year:c.getFullYear()===e.getFullYear()?void 0:`numeric`}).format(c),d=s.get(l);d?d.items.push(r):s.set(l,{items:[r],title:u})}return[...s.entries()].map(([e,t])=>({key:e,...t,totalCost:Be(t.items.reduce((e,t)=>e+(t.totalCost||0),0))}))},[_,n.language,t]),te=Ct(),v=(0,I.useRef)(null);return(0,I.useEffect)(()=>{let e=v.current;if(!e||!c)return;let t=new IntersectionObserver(e=>{e[0]?.isIntersecting&&c&&!u&&d()},{rootMargin:`240px`});return t.observe(e),()=>t.disconnect()},[c,u,d]),(0,L.jsxs)(p,{className:R.container,children:[g.length>0&&(0,L.jsxs)(p,{horizontal:!0,align:`center`,className:R.filterBar,gap:4,children:[(0,L.jsx)(h,{className:ne(R.agentFilter,!r&&R.agentFilterActive),size:`small`,type:`text`,onClick:()=>a(null),children:t(`work.agentFilter.all`)}),g.map(e=>(0,L.jsx)(Nt,{active:r===e,agentId:e,onSelect:a},e))]}),(0,L.jsx)(p,{className:R.scroll,children:s&&o.length===0?(0,L.jsxs)(m,{className:R.emptyState,gap:12,children:[(0,L.jsx)(he,{description:t(`work.loadError`),icon:ae,title:t(`work.loadErrorTitle`)}),(0,L.jsx)(`button`,{className:R.retry,type:`button`,onClick:()=>f(),children:t(`work.retry`)})]}):l&&o.length===0?(0,L.jsx)(z,{count:8}):o.length===0?(0,L.jsx)(m,{className:R.emptyState,children:(0,L.jsx)(he,{description:t(`work.empty.desc`),icon:ie,title:t(`work.empty.title`)})}):_.length===0?(0,L.jsx)(m,{className:R.emptyState,children:(0,L.jsx)(he,{description:t(`work.agentEmpty.desc`),title:t(`work.agentEmpty.title`)})}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(p,{gap:32,children:ee.map(e=>(0,L.jsxs)(`section`,{children:[(0,L.jsxs)(`div`,{className:R.groupHeader,children:[(0,L.jsx)(`span`,{className:R.groupTitle,children:e.title}),(0,L.jsx)(`span`,{className:R.groupCount,children:t(`work.count`,{count:e.items.length})}),e.totalCost&&(0,L.jsx)(`span`,{className:R.groupCount,children:t(`work.totalCost`,{cost:e.totalCost})})]}),(0,L.jsx)(`div`,{className:R.cardList,children:e.items.map(e=>(0,L.jsx)(F,{item:e,onOpen:te},e.id))})]},e.key))}),(0,L.jsx)(`div`,{"aria-hidden":!0,ref:v,style:{height:1}}),u?(0,L.jsx)(p,{style:{marginBlockStart:12},children:(0,L.jsx)(z,{count:4})}):s?(0,L.jsxs)(`div`,{className:R.loadMoreError,children:[(0,L.jsx)(`span`,{children:t(`work.loadMoreError`)}),(0,L.jsx)(`button`,{className:R.retry,type:`button`,onClick:()=>f(),children:t(`work.retry`)})]}):null]})})]})}),Pt.displayName=`WorkGallery`})),It,B,Lt,V,Rt=e((()=>{C(),x(),It=t(d()),r(),E(),B=t(u()),Lt=v(({css:e,cssVar:t})=>({title:e`
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: ${t.colorText};
  `,viewAll:e`
    cursor: pointer;

    border: none;

    font-size: 13px;
    color: ${t.colorTextSecondary};

    background: none;

    &:hover {
      color: ${t.colorText};
    }
  `})),V=(0,It.memo)(({title:e,viewAllUrl:t})=>{let{t:n}=i(`file`),r=T();return(0,B.jsxs)(p,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,B.jsx)(`h2`,{className:Lt.title,children:e}),t&&(0,B.jsx)(`button`,{className:Lt.viewAll,type:`button`,onClick:()=>r(t),children:n(`home.viewAll`)})]})}),V.displayName=`SectionTitle`})),zt,H,U,Bt,Vt,Ht=e((()=>{C(),y(),x(),S(),zt=t(d()),r(),st(),Xe(),O(),E(),je(),et(),Rt(),H=t(u()),U=v(({css:e,cssVar:t})=>({chip:e`
    cursor: pointer;

    display: flex;
    gap: 10px;
    align-items: center;

    min-width: 0;
    padding-block: 14px;
    padding-inline: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    text-align: start;

    background: ${t.colorFillQuaternary};

    transition: all 0.2s ${t.motionEaseInOut};

    &:hover {
      border-color: ${t.colorBorder};
      background: ${t.colorFillTertiary};
    }
  `,createChip:e`
    cursor: pointer;

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    padding-block: 14px;
    padding-inline: 16px;
    border: 1px dashed ${t.colorBorder};
    border-radius: ${t.borderRadiusLG};

    color: ${t.colorTextSecondary};

    background: transparent;

    transition: all 0.2s ${t.motionEaseInOut};

    &:hover {
      border-color: ${t.colorTextQuaternary};
      color: ${t.colorText};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  `,name:e`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Bt=9,Vt=(0,zt.memo)(()=>{let{t:e}=i(`file`),t=T(),{allowed:n}=Ae(`create_content`),r=D(e=>e.listVisibility)===`private`?`private`:`public`,{data:a,isLoading:o}=$e(e=>e.useFetchKnowledgeBaseList)(r),s=D(e=>e.setLibraryId),{open:c}=Ye();return(0,H.jsxs)(p,{gap:12,children:[(0,H.jsx)(V,{title:e(`home.libraries`)}),o?(0,H.jsx)(`div`,{className:U.grid,children:Array.from({length:4},(e,t)=>(0,H.jsx)(re.Node,{active:!0,style:{height:52,width:`100%`}},t))}):(0,H.jsxs)(`div`,{className:U.grid,children:[a?.slice(0,Bt).map(e=>(0,H.jsxs)(`button`,{className:U.chip,type:`button`,onClick:()=>{s(e.id),t(`/resource/library/${e.id}`)},children:[(0,H.jsx)(ct,{memberRestricted:e.memberRestricted,size:18,visibility:e.visibility}),(0,H.jsx)(`span`,{className:U.name,children:e.name})]},e.id)),(0,H.jsxs)(`button`,{className:U.createChip,disabled:!n,type:`button`,onClick:()=>{n&&c({onSuccess:e=>{t(`/resource/library/${e}`)}})},children:[(0,H.jsx)(f,{icon:ue,size:16}),e(`home.uploadEntries.library.title`)]})]})]})}),Vt.displayName=`Libraries`})),W,Ut,G,K,Wt,Gt,Kt=e((()=>{C(),y(),x(),W=t(n()),Ut=t(d()),r(),be(),Ge(),Pe(),O(),Ze(),E(),ve(),s(),Te(),_e(),Rt(),G=t(u()),K=v(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    padding: 0;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    text-align: start;

    background: ${t.colorBgContainer};

    transition: all 0.2s ${t.motionEaseInOut};

    &:hover {
      border-color: ${t.colorBorder};
      box-shadow: ${t.boxShadowTertiary};
    }
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  `,meta:e`
    font-size: 12px;
    color: ${t.colorTextQuaternary};
  `,name:e`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,preview:e`
    display: flex;
    align-items: center;
    justify-content: center;

    aspect-ratio: 16 / 10;
    width: 100%;
    border-block-end: 1px solid ${t.colorBorderSecondary};

    background: ${t.colorFillQuaternary};
  `,thumbnail:e`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `})),Wt=e=>(0,W.default)().diff((0,W.default)(e),`d`)<7?(0,W.default)(e).fromNow():(0,W.default)(e).format(`YYYY-MM-DD`),Gt=(0,Ut.memo)(()=>{let{t:e}=i(`file`),t=T(),n=xe(),r=D(e=>e.listVisibility),a=n?Qe(void 0,r):void 0,{data:o,error:s,isLoading:l,mutate:u}=ye(c.recentFiles(n??null,a),()=>we.getRecentFiles(8,a));return!l&&!s&&!o?.length?null:(0,G.jsxs)(p,{gap:12,children:[(0,G.jsx)(V,{title:e(`home.recentFiles`),viewAllUrl:`/resource/${w.All}`}),s&&!o?.length?(0,G.jsx)(Ke,{error:s,variant:`inline`,onRetry:()=>void u()}):l?(0,G.jsx)(`div`,{className:K.grid,children:Array.from({length:4},(e,t)=>(0,G.jsx)(re.Node,{active:!0,style:{height:160,width:`100%`}},t))}):(0,G.jsx)(`div`,{className:K.grid,children:o?.map(e=>{let n=e.fileType?.startsWith(`image`);return(0,G.jsxs)(`button`,{className:K.card,type:`button`,onClick:()=>t(`/resource?file=${e.id}`),children:[(0,G.jsx)(`div`,{className:K.preview,children:n&&e.url?(0,G.jsx)(`img`,{alt:e.name,className:K.thumbnail,src:e.url}):(0,G.jsx)(Fe,{fileName:e.name,fileType:e.fileType,size:40})}),(0,G.jsxs)(p,{gap:4,padding:12,children:[(0,G.jsx)(`span`,{className:K.name,children:e.name}),(0,G.jsx)(`span`,{className:K.meta,children:Wt(e.createdAt)})]})]},e.id)})})]})}),Gt.displayName=`RecentFiles`})),q,qt,J,Y,Jt,Yt,Xt=e((()=>{C(),y(),x(),q=t(n()),S(),qt=t(d()),r(),be(),Ge(),O(),Ze(),E(),ve(),s(),Te(),Rt(),J=t(u()),Y=v(({css:e,cssVar:t})=>({card:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    padding-block: 12px;
    padding-inline: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    text-align: start;

    background: ${t.colorBgContainer};

    transition: all 0.2s ${t.motionEaseInOut};

    &:hover {
      border-color: ${t.colorBorder};
      box-shadow: ${t.boxShadowTertiary};
    }
  `,emoji:e`
    font-size: 20px;
    line-height: 1;
  `,grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 12px;
  `,meta:e`
    font-size: 12px;
    color: ${t.colorTextQuaternary};
  `,title:e`
    overflow: hidden;

    font-size: 13px;
    font-weight: 500;
    color: ${t.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `})),Jt=e=>(0,q.default)().diff((0,q.default)(e),`d`)<7?(0,q.default)(e).fromNow():(0,q.default)(e).format(`YYYY-MM-DD`),Yt=(0,qt.memo)(()=>{let{t:e}=i(`file`),t=T(),n=xe(),r=D(e=>e.listVisibility),a=n?Qe(void 0,r):void 0,{data:o,error:s,isLoading:l,mutate:u}=ye(c.recentPages(n??null,a),()=>we.getRecentPages(6,a));return!l&&!s&&!o?.length?null:(0,J.jsxs)(p,{gap:12,children:[(0,J.jsx)(V,{title:e(`home.recentPages`),viewAllUrl:`/resource/page`}),s&&!o?.length?(0,J.jsx)(Ke,{error:s,variant:`inline`,onRetry:()=>void u()}):l?(0,J.jsx)(`div`,{className:Y.grid,children:Array.from({length:3},(e,t)=>(0,J.jsx)(re.Node,{active:!0,style:{height:64,width:`100%`}},t))}):(0,J.jsx)(`div`,{className:Y.grid,children:o?.map(e=>{let n=e.metadata?.emoji;return(0,J.jsxs)(`button`,{className:Y.card,type:`button`,onClick:()=>t(`/resource?file=${e.id}`),children:[n?(0,J.jsx)(`span`,{className:Y.emoji,children:n}):(0,J.jsx)(f,{icon:oe,size:20}),(0,J.jsxs)(p,{gap:2,style:{minWidth:0},children:[(0,J.jsx)(`span`,{className:Y.title,children:e.name}),(0,J.jsx)(`span`,{className:Y.meta,children:Jt(e.updatedAt)})]})]},e.id)})})]})}),Yt.displayName=`RecentPages`})),Zt,X,Qt,$t,en,tn=e((()=>{C(),y(),x(),Zt=t(d()),r(),Ge(),xt(),wt(),Mt(),Rt(),X=t(u()),Qt=v(({css:e})=>({grid:e`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 12px;
  `})),$t=3,en=(0,Zt.memo)(()=>{let{t:e}=i(`file`),t=Ct(),{error:n,items:r,isLoadingInitial:a,reload:o}=bt(`all`),s=r.slice(0,$t);return!a&&!n&&s.length===0?null:(0,X.jsxs)(p,{gap:12,children:[(0,X.jsx)(V,{title:e(`work.group`),viewAllUrl:`/resource/works`}),n&&s.length===0?(0,X.jsx)(Ke,{error:n,variant:`inline`,onRetry:o}):a?(0,X.jsx)(`div`,{className:Qt.grid,children:Array.from({length:3},(e,t)=>(0,X.jsx)(re.Node,{active:!0,style:{height:220,width:`100%`}},t))}):(0,X.jsx)(`div`,{className:Qt.grid,children:s.map(e=>(0,X.jsx)(F,{item:e,onOpen:t},e.id))})]})}),en.displayName=`RecentWorks`})),nn,Z,rn,an,on=e((()=>{C(),x(),nn=t(d()),r(),Me(),pt(),Ht(),Kt(),Xt(),tn(),Z=t(u()),rn=v(({css:e})=>({content:e`
    width: 100%;
    max-width: 1080px;
    margin-inline: auto;
    padding-block: 32px 64px;
    padding-inline: 32px;
  `,scroll:e`
    overflow: hidden auto;
    flex: 1;
  `})),an=(0,nn.memo)(()=>{let{t:e}=i(`file`);return(0,Z.jsxs)(p,{height:`100%`,children:[(0,Z.jsx)(Ne,{left:(0,Z.jsx)(p,{style:{marginLeft:8},children:e(`resource`)}),right:(0,Z.jsx)(mt,{}),style:{borderBottom:`1px solid ${b.colorBorderSecondary}`}}),(0,Z.jsx)(`div`,{className:rn.scroll,children:(0,Z.jsxs)(p,{className:rn.content,gap:40,children:[(0,Z.jsx)(Vt,{}),(0,Z.jsx)(en,{}),(0,Z.jsx)(Yt,{}),(0,Z.jsx)(Gt,{})]})})]})}),an.displayName=`ResourceHomeDashboard`})),Q,$,sn,cn,ln,un,dn,fn,pn=e((()=>{Q=t(d()),g(),lt(),ft(),O(),Ft(),vt(),E(),_e(),on(),$=t(u()),sn={all:w.All,audios:w.Audios,documents:w.Documents,files:w.Files,images:w.Images,page:w.Pages,videos:w.Videos,websites:w.Websites},cn=Object.fromEntries(Object.entries(sn).map(([e,t])=>[t,e])),ln=e=>cn[e]?`/resource/${cn[e]}`:`/resource`,un=(e,t)=>e??t.match(/\/resource\/([^/]+)\/?$/)?.[1],dn=`works`,fn=(0,Q.memo)(()=>{let[e]=ee(),t=_(),n=te(),r=T(),[i,a]=D(e=>[e.setCategory,e.setLibraryId]),o=un(n.category,t.pathname),s=o?sn[o]:void 0,c=s!==void 0,l=o===dn,u=l?gt(e.get(`works`))??`all`:null,d=s??w.Home,f=e.get(`category`),p=l?null:gt(e.get(`works`)),m=!!o&&!c&&!l;return(0,Q.useLayoutEffect)(()=>{if(p){r(p===`all`?`/resource/works`:`/resource/works?works=${p}`,{replace:!0});return}if(f){r(ln(f),{replace:!0});return}m&&r(`/resource`,{replace:!0})},[p,f,m,r]),(0,Q.useLayoutEffect)(()=>{(t.pathname===`/resource`||!t.pathname.includes(`/library/`))&&a(void 0)},[a,t.pathname]),(0,Q.useLayoutEffect)(()=>{(t.pathname===`/resource`||!t.pathname.includes(`/library/`))&&i(d)},[d,i,t.pathname]),ut(),u?(0,$.jsx)(Pt,{galleryKey:u}):(0,$.jsx)(dt,{content:c?void 0:(0,$.jsx)(an,{})})}),fn.displayName=`ResourceHomePage`}));e((()=>{pn()}))();export{fn as default};