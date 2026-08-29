import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{B as r,H as i,M as a,P as o}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as s,ls as c}from"./app-const-Bl9rlHwj.js";import{Qr as l,mr as u}from"./dialog-BebLzVzY.js";import{a as d,c as f,l as p,t as m}from"./es-CVJR_g25.js";import{Bi as h,fd as g,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as v,c as y,i as b,t as x}from"./base-ui-BAv0gRbN.js";import{Or as S,t as C}from"./es-LELdnrjB.js";import{a as ee,s as te}from"./swrKeys-B4sicPWZ.js";import{n as ne,t as re}from"./document-J--mQsWf.js";import{$o as ie,es as ae}from"./index-Djd-5Nq9.js";import{l as oe,u as se}from"./Messages-CHVzbeQ8.js";import{n as w,t as T}from"./useAuthorInfo-DrU1zgiU.js";import{a as ce,i as le,n as ue,o as de}from"./document-Cv686SHW.js";var E=e((()=>{})),D,O,k,A,j,M,N,P,F=e((()=>{oe(),C(),m(),_(),D=t(c()),a(),ae(),ee(),ne(),ue(),ce(),O=t(s()),k=d(({css:e})=>({container:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-height: 0;

    background: ${f.colorBgContainer};
  `,content:e`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `,empty:e`
    padding: 24px;
  `})),A=e=>typeof e==`object`&&!!e,j=e=>A(e)&&A(e.root)&&Array.isArray(e.root.children),M=e=>A(e)&&e.type===`root`&&Array.isArray(e.children),N=e=>j(e)?e:M(e)?{root:e}:null,P=(0,D.memo)(({documentId:e,historyId:t})=>{let{t:n}=o(`file`),{data:r,error:i,isLoading:a}=te([`page-editor-document-history-compare`,e,t,le(t=>de.lastUpdatedTime(e)(t)??null)],async()=>re.compareDocumentHistoryItems({documentId:e,fromHistoryId:`head`,toHistoryId:t})),s=(0,D.useMemo)(()=>({new:n(`pageEditor.history.compareOldLabel`),old:n(`pageEditor.history.compareCurrentLabel`)}),[n]),c=(0,D.useMemo)(()=>{let e=N(r?.from.editorData);return{newValue:N(r?.to.editorData),oldValue:e}},[r?.from.editorData,r?.to.editorData]);return(0,O.jsx)(l,{className:k.container,flex:1,gap:0,children:a&&!r?(0,O.jsx)(l,{align:`center`,className:k.empty,justify:`center`,children:(0,O.jsx)(ie,{})}):i||!r||!c.oldValue||!c.newValue?(0,O.jsx)(l,{align:`center`,className:k.empty,justify:`center`,children:(0,O.jsx)(S,{description:n(`pageEditor.history.compareError`),icon:g})}):(0,O.jsx)(`div`,{className:k.content,children:(0,O.jsx)(se,{appearance:`borderless`,labels:s,newValue:c.newValue,oldValue:c.oldValue,variant:`chat`})})})}),P.displayName=`DocumentHistoryDiff`})),I,L,R,z=e((()=>{I=t(n()),L=e=>(0,I.default)(e).format(`MMMM D, YYYY h:mm A`),R=e=>(0,I.default)(e).format(`h:mm A`)})),B,V,H,U,W,G,K,fe=e((()=>{C(),x(),m(),B=t(n()),V=t(c()),a(),T(),z(),H=t(s()),U=d(({css:e})=>({container:e`
    overflow-y: auto;
    flex-shrink: 0;

    width: 232px;
    padding-block: 4px 12px;
    padding-inline: 8px;
    border-inline-start: 1px solid ${f.colorBorderSecondary};

    background: ${f.colorBgContainer};
  `,dot:e`
    position: absolute;
    inset-block-start: 9px;
    inset-inline-start: 5px;

    width: 8px;
    height: 8px;
    border: 1px solid ${f.colorBorder};
    border-radius: 999px;

    background: ${f.colorBgContainer};
    box-shadow: 0 0 0 2px ${f.colorBgContainer};
  `,dotCurrent:e`
    border-color: ${f.colorSuccess};
    background: ${f.colorSuccess};
  `,dotSelected:e`
    border-color: ${f.colorPrimary};
    background: ${f.colorPrimary};
  `,group:e`
    position: relative;
  `,groupHeader:e`
    position: sticky;
    z-index: 1;
    inset-block-start: 0;

    padding-block: 10px 6px;
    padding-inline-start: 24px;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.2;

    background: ${f.colorBgContainer};
  `,item:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;
    border-radius: 6px;

    transition: background ${f.motionDurationMid} ${f.motionEaseInOut};

    &:hover {
      background: ${f.colorFillQuaternary};
    }
  `,itemCurrent:e`
    cursor: default;
  `,itemSelected:e`
    background: ${f.colorFillSecondary};

    &:hover {
      background: ${f.colorFillSecondary};
    }
  `,source:e`
    overflow: hidden;

    margin-inline-start: auto;
    padding-inline-start: 8px;

    font-size: 11px;
    line-height: 1.3;
    color: ${f.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,meta:e`
    overflow: hidden;

    font-size: 11px;
    line-height: 1.3;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,rail:e`
    position: absolute;
    inset-block: 2px;
    inset-inline-start: 8px;

    width: 1px;

    background: ${f.colorFillTertiary};
  `,row:e`
    position: relative;
    padding-inline-start: 24px;
  `,tag:e`
    height: 16px;
    padding-inline: 4px;
    font-size: 10px;
  `,time:e`
    font-size: 12px;
    font-weight: 600;
    line-height: 1.3;
  `})),W=(e,t)=>{let n=new Map;for(let r of e){let e=(0,B.default)(r.savedAt).format(`YYYY-MM-DD`),i=n.get(e);if(i){i.items.push(r);continue}n.set(e,{items:[r],key:e,label:t(r.savedAt)})}return[...n.values()]},G=(0,V.memo)(({item:e,isSelected:t,onSelect:n,saveSourceLabels:r})=>{let{t:i}=o(`file`),a=w(e.userId),s=e.isCurrent;return(0,H.jsxs)(`div`,{className:U.row,children:[(0,H.jsx)(`div`,{className:p(U.dot,e.isCurrent&&U.dotCurrent,!e.isCurrent&&t&&U.dotSelected)}),(0,H.jsx)(`div`,{className:p(U.item,e.isCurrent&&U.itemCurrent,!e.isCurrent&&t&&U.itemSelected),onClick:()=>{s||n(e.id)},children:(0,H.jsxs)(l,{gap:2,children:[(0,H.jsxs)(l,{horizontal:!0,align:`center`,gap:4,children:[(0,H.jsx)(b,{className:U.time,children:R(e.savedAt)}),e.isCurrent&&(0,H.jsx)(y,{className:U.tag,variant:`borderless`,children:i(`pageEditor.history.current`)}),(0,H.jsx)(`span`,{className:U.source,children:r[e.saveSource]})]}),(0,H.jsxs)(b,{className:U.meta,type:`secondary`,children:[a?.fullName?`${a.fullName} · `:``,(0,B.default)(e.savedAt).fromNow()]})]})})]})}),G.displayName=`HistorySidebarRow`,K=(0,V.memo)(({items:e,onSelect:t,saveSourceLabels:n,selectedHistoryId:r})=>{let{t:i}=o(`file`),a=(0,V.useCallback)(e=>{let t=(0,B.default)(e);return t.isToday()?i(`pageEditor.history.dayLabel.today`):t.isYesterday()?i(`pageEditor.history.dayLabel.yesterday`):t.format(`MM-DD`)},[i]),s=(0,V.useMemo)(()=>W(e,a),[a,e]);return(0,H.jsx)(`div`,{className:U.container,children:s.map(e=>(0,H.jsxs)(l,{gap:0,children:[(0,H.jsx)(`div`,{className:U.groupHeader,children:(0,H.jsx)(b,{type:`secondary`,children:e.label})}),(0,H.jsxs)(`div`,{className:U.group,children:[(0,H.jsx)(`div`,{className:U.rail}),e.items.map(e=>(0,H.jsx)(G,{isSelected:r===e.id,item:e,saveSourceLabels:n,onSelect:t},e.id))]})]},e.key))})}),K.displayName=`HistorySidebar`})),q,J,Y,X,Z,pe=e((()=>{C(),x(),m(),q=t(n()),_(),J=t(c()),a(),T(),F(),z(),fe(),Y=t(s()),X=d(({css:e})=>({arrow:e`
    font-size: 12px;
    color: ${f.colorTextTertiary};
  `,badgeNew:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    color: ${f.colorSuccess};

    background: ${f.colorSuccessBg};
  `,badgeOld:e`
    display: inline-flex;
    align-items: center;

    padding-block: 2px;
    padding-inline: 8px;
    border-radius: 4px;

    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    color: ${f.colorError};

    background: ${f.colorErrorBg};
  `,cmpbar:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 10px;
    padding-inline: 16px;
    border-block-end: 1px solid ${f.colorBorderSecondary};

    background: ${f.colorBgLayout};
  `,diffArea:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-width: 0;
    min-height: 0;
  `,diffBody:e`
    overflow: auto;
    flex: 1;
    min-height: 0;
  `,meta:e`
    margin-inline-start: 8px;
    font-size: 11px;
    line-height: 1.2;
  `,root:e`
    overflow: hidden;
    display: flex;

    width: 100%;
    height: 100%;

    background: ${f.colorBgContainer};
  `})),Z=(0,J.memo)(({documentId:e,initialHistoryId:t,items:n,onRestore:r,saveSourceLabels:i})=>{let{t:a}=o(`file`),[s,c]=(0,J.useState)(t),d=(0,J.useMemo)(()=>n.find(e=>e.id===s)??null,[n,s]),f=w(d?.userId);if(!d)return null;let p=!d.isCurrent;return(0,Y.jsxs)(`div`,{className:X.root,children:[(0,Y.jsxs)(`div`,{className:X.diffArea,children:[(0,Y.jsxs)(`div`,{className:X.cmpbar,children:[(0,Y.jsxs)(l,{horizontal:!0,align:`center`,gap:4,children:[(0,Y.jsx)(`span`,{className:X.badgeNew,children:a(`pageEditor.history.compareCurrentLabel`)}),(0,Y.jsx)(b,{className:X.arrow,children:`→`}),(0,Y.jsx)(`span`,{className:X.badgeOld,children:L(d.savedAt)}),(0,Y.jsxs)(b,{className:X.meta,type:`secondary`,children:[(0,q.default)(d.savedAt).fromNow(),` ·`,` `,i[d.saveSource]]}),f?.fullName&&(0,Y.jsxs)(b,{className:X.meta,title:f.fullName,type:`secondary`,children:[`· `,f.fullName]})]}),p&&(0,Y.jsxs)(u,{icon:h,size:`small`,onClick:()=>r(d),children:[a(`pageEditor.history.restore`),` `,L(d.savedAt)]})]}),(0,Y.jsx)(`div`,{className:X.diffBody,children:(0,Y.jsx)(P,{documentId:e,historyId:d.id})})]}),(0,Y.jsx)(K,{items:n,saveSourceLabels:i,selectedHistoryId:s,onSelect:c})]})}),Z.displayName=`CompareContent`})),Q,$,me=e((()=>{x(),r(),pe(),Q=t(s()),$=e=>v({content:(0,Q.jsx)(Z,{...e}),footer:null,styles:{content:{display:`flex`,height:`min(72vh, 800px)`,overflow:`hidden`,padding:0}},title:i(`pageEditor.history.compareTitle`,{ns:`file`}),width:`min(92vw, 1200px)`})}));export{z as a,R as i,$ as n,E as o,L as r,me as t};