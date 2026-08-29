import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{M as r,P as i}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Ba as a,Ia as o,cs as s,ls as c}from"./app-const-Bl9rlHwj.js";import{Hr as l,Qr as u,Xr as d,bt as f}from"./dialog-BebLzVzY.js";import{a as p,c as m,l as h,p as ee,t as g}from"./es-CVJR_g25.js";import{Ag as te,Pf as ne,Rv as re,Sl as ie,mi as ae,wu as oe,x as _}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as v,i as y,t as b,x as se}from"./base-ui-BAv0gRbN.js";import{Aa as ce,Da as le,N as ue,Na as de,Oa as fe,Ta as x,ja as pe,k as me,ka as he,t as S,ur as ge,zt as C}from"./es-LELdnrjB.js";import{pn as w,sn as _e}from"./model-runtime-client-tog6-eyE.js";import{i as T,t as ve}from"./userMemory-BYSFQUHg.js";import{Q as ye,Xo as be,Yo as xe,Z as Se}from"./index-Djd-5Nq9.js";import{i as Ce,n as we,r as Te}from"./dist-BJGc-8P7.js";import{n as Ee,t as De}from"./EditorModal-Db5KQGgn.js";import{n as Oe,t as ke}from"./useActivityTime-DhyolkDK.js";import{n as Ae,t as je}from"./ToggleRightPanelButton-CNEuqBdG.js";import{n as Me,t as Ne}from"./RightPanel-QallFFrl.js";import{n as Pe,r as Fe}from"./useScrollParent-CRPHQGI6.js";var E,Ie,Le,Re=e((()=>{E=t(c()),De(),ve(),_e(),Ie={activity:w.Activity,context:w.Context,experience:w.Experience,identity:w.Identity,preference:w.Preference},Le=(0,E.memo)(()=>{let e=T(e=>e.editingMemoryId),t=T(e=>e.editingMemoryContent),n=T(e=>e.editingMemoryLayer),r=T(e=>e.clearEditingMemory),i=T(e=>e.updateMemory),a=(0,E.useRef)(void 0);return a.current=()=>Ee({value:t,onClose:r,onConfirm:async t=>{!e||!n||await i(e,t,Ie[n])}}),(0,E.useEffect)(()=>{if(!e)return;let t=a.current();return()=>t.close()},[e]),null})})),ze,D,Be,Ve=e((()=>{S(),b(),_(),ze=t(c()),r(),D=t(s()),Be=(0,ze.memo)(({searchValue:e,onSearch:t,sortValue:n,onSortChange:r,sortOptions:a})=>{let{t:o}=i(`memory`);return(0,D.jsxs)(u,{horizontal:!0,align:`center`,gap:12,children:[(0,D.jsx)(me,{allowClear:!0,defaultValue:e,placeholder:o(`filter.search`),prefix:(0,D.jsx)(ae,{size:16}),style:{flex:1},onSearch:e=>t(e),onInputChange:e=>{e||t(e)}}),a&&a.length>0&&r&&(0,D.jsx)(se,{options:a,prefix:(0,D.jsx)(l,{icon:re,style:{marginRight:4}}),style:{minWidth:150},value:n,onChange:e=>r(e)})]})})})),He,O,Ue,k,A=e((()=>{S(),g(),He=t(c()),O=t(s()),Ue=p(({css:e,cssVar:t})=>({card:e`
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorBgContainer};
  `})),k=(0,He.memo)(({viewMode:e,rows:t=3})=>e===`timeline`?(0,O.jsx)(u,{gap:24,paddingBlock:24,style:{paddingLeft:32},children:Array.from({length:3}).map((e,t)=>(0,O.jsxs)(u,{gap:8,children:[(0,O.jsx)(C.Title,{active:!0,fontSize:18,lineHeight:1.4,width:`30%`}),(0,O.jsx)(C.Paragraph,{active:!0,rows:4,style:{marginBottom:0}})]},t))}):(0,O.jsx)(ge,{gap:12,maxItemWidth:240,paddingBlock:8,rows:t,children:Array.from({length:6}).map((e,t)=>(0,O.jsxs)(u,{className:Ue.card,children:[(0,O.jsx)(C.Title,{active:!0,fontSize:16,lineHeight:1.4,width:`80%`}),(0,O.jsx)(C.Paragraph,{active:!0,rows:5,style:{marginBottom:0}}),(0,O.jsxs)(u,{horizontal:!0,gap:8,children:[(0,O.jsx)(C.Button,{active:!0,size:`small`,style:{height:20,width:60}}),(0,O.jsx)(C.Button,{active:!0,size:`small`,style:{height:20,width:50}})]})]},t))}))})),We,j,Ge,Ke=e((()=>{b(),_(),We=t(c()),r(),a(),j=t(s()),Ge=(0,We.memo)(({value:e,onChange:t})=>{let{t:n}=i(`memory`);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(f,{active:e===`timeline`,icon:te,size:o,title:n(`viewMode.timeline`),onClick:()=>t(`timeline`)}),(0,j.jsx)(f,{active:e===`grid`,icon:ie,size:o,title:n(`viewMode.masonry`),onClick:()=>t(`grid`)})]})})}));function qe(e,t=0,n=100){if(t>n)return 0;let r=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);r=(r<<5)-r+n,r&=r}r=Math.abs(r);let i=n-t+1;return t+r%i}var Je,M,Ye=e((()=>{g(),ce(),Je=t(c()),M=e=>{let t=ee(),n=[t.volcano,t.orange,t.gold,t.green,t.cyan,t.blue,t.geekblue,t.purple,t.magenta,t.pink];return(0,Je.useMemo)(()=>{if(!e)return;let r=qe(e,0,n.length-1),i=he(t.isDarkMode?.25:.5,pe(t.isDarkMode?.06:.05,n[r],t.isDarkMode?t.colorBgContainer:t.colorBgLayout));return{backgroundColor:i,backgroundTextColor:t.isDarkMode?fe(.5,i):le(.5,i),color:t.isDarkMode?fe(.4,i):le(.6,i),shadowColor:de(le(.6,i),t.isDarkMode?.5:.2)}},[e,n,t])}})),Xe,Ze,N,Qe=e((()=>{b(),Xe=t(c()),Ye(),Ze=t(s()),N=(0,Xe.memo)(({cate:e})=>{let t=M(e);return(0,Ze.jsx)(v,{size:`large`,style:{background:t?.backgroundColor,borderRadius:16,color:t?.color,flex:`none`,fontWeight:500},children:e?.toUpperCase()||`CHORE`})})})),$e,P,et,tt=e((()=>{S(),$e=t(c()),P=t(s()),et=(0,$e.memo)(()=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(C.Button,{active:!0,shape:`round`,size:`small`,width:64}),(0,P.jsx)(C.Title,{active:!0,fontSize:20,lineHeight:1.4}),(0,P.jsx)(C.Tags,{active:!0,count:2}),(0,P.jsxs)(u,{horizontal:!0,align:`center`,gap:16,justify:`space-between`,children:[(0,P.jsx)(C.Tags,{active:!0}),(0,P.jsx)(C.Tags,{active:!0})]}),(0,P.jsx)(C.Paragraph,{active:!0,fontSize:16,rows:6})]}))})),nt,F,rt,it=e((()=>{S(),b(),g(),_(),nt=t(c()),r(),F=t(s()),rt=(0,nt.memo)(()=>{let{t:e}=i(`memory`);return(0,F.jsxs)(d,{flex:1,gap:12,padding:48,width:`100%`,children:[(0,F.jsx)(l,{icon:ne,size:32,style:{color:m.colorTextTertiary}}),(0,F.jsxs)(u,{align:`center`,gap:4,children:[(0,F.jsx)(y,{fontSize:16,weight:600,children:e(`detail.notFound.title`)}),(0,F.jsx)(y,{align:`center`,color:m.colorTextTertiary,fontSize:13,style:{maxWidth:320},children:e(`detail.notFound.desc`)})]})]})})})),at,I,ot,st=e((()=>{S(),at=t(c()),ye(),Me(),Ae(),I=t(s()),ot=(0,at.memo)(({children:e,style:t,header:n,...r})=>(0,I.jsxs)(Ne,{defaultWidth:480,maxWidth:640,minWidth:300,children:[(0,I.jsx)(Se,{...n,left:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(je,{}),n?.left]})}),(0,I.jsx)(u,{flex:1,gap:16,height:`100%`,paddingInline:16,style:{minWidth:300,overflowY:`auto`,paddingBottom:64,paddingTop:16,...t},...r,children:e})]}))})),ct,L,R,z=e((()=>{S(),b(),g(),_(),ct=t(c()),L=t(s()),R=(0,ct.memo)(({hashTags:e})=>{if(!(!e||e.length===0))return e&&e.length>0&&(0,L.jsx)(u,{horizontal:!0,wrap:`wrap`,children:e.map((e,t)=>(0,L.jsx)(v,{icon:(0,L.jsx)(l,{icon:oe}),variant:`borderless`,style:{color:m.colorTextDescription,gap:2,marginRight:12,paddingInline:0},children:e},t))})})})),lt,B,ut,dt=e((()=>{S(),b(),g(),lt=t(c()),B=t(s()),ut=(0,lt.memo)(({title:e,children:t})=>{if(!t)return;let n=(0,B.jsx)(ue,{fontSize:14,variant:`chat`,style:{color:m.colorText,overflow:`visible`},children:t||``});return e?(0,B.jsxs)(u,{gap:8,children:[(0,B.jsx)(y,{weight:500,children:e}),n]}):n})})),ft,pt,V,mt=e((()=>{b(),ft=t(c()),ke(),pt=t(s()),V=(0,ft.memo)(({capturedAt:e})=>{let{text:t,title:n}=Oe(e);return t?(0,pt.jsx)(y,{as:`time`,fontSize:12,style:{display:`block`,flex:`none`},title:n,type:`secondary`,children:t}):null})}));function ht({items:e,defaultColumnCount:t=3,maxItemWidth:n=240,hasMore:r,isLoading:i,onLoadMore:a,renderItem:o}){let s=Fe();return!e||e.length===0?null:(0,H.jsx)(Ce,{customScrollParent:s,data:e,endReached:r&&a?a:void 0,increaseViewportBy:typeof window<`u`?window.innerHeight:0,overscan:48,style:{minHeight:`100%`},components:{Footer:i?()=>(0,H.jsx)(k,{rows:t,viewMode:`grid`}):void 0,List:(({ref:e,...r})=>(0,H.jsx)(ge,{gap:8,maxItemWidth:n,ref:e,rows:t,...r}))},itemContent:(e,t)=>!t||!t.id?null:o(t,{onClick:void 0,onDelete:void 0,onEdit:void 0})})}var gt,H,_t,vt=e((()=>{S(),gt=t(c()),we(),A(),Pe(),H=t(s()),_t=(0,gt.memo)(ht)})),yt,U,W,bt,xt,St=e((()=>{S(),b(),g(),yt=t(c()),z(),mt(),Ye(),U=t(s()),W=`memory-masonry-actions`,bt=p(({css:e,cssVar:t})=>({actions:e`
    transition: opacity 0.15s ease;
  `,masonryCard:e`
    cursor: pointer;
    position: relative;
    background: ${t.colorFillQuaternary};
    box-shadow: 0 0 0 1px ${t.colorFillTertiary} inset;
    .${W} {
      opacity: 0;
    }

    &:hover {
      .${W} {
        opacity: 1;
      }
    }
  `})),xt=(0,yt.memo)(({title:e,titleAddon:t,cate:n,children:r,actions:i,onClick:a,hashTags:o,badges:s,footer:c,capturedAt:l})=>{let f=M(n);return(0,U.jsxs)(x,{className:bt.masonryCard,gap:4,height:`100%`,padding:4,variant:`filled`,style:{background:f?.backgroundColor},onClick:a,children:[(0,U.jsxs)(x,{flex:1,gap:12,paddingBlock:16,paddingInline:12,variant:`outlined`,style:{boxShadow:`0 4px 16px -4px ${f?.shadowColor||`rgba(0, 0, 0, 0.2)`}`,overflow:`hidden`,position:`relative`},children:[(e||t)&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(u,{horizontal:!0,align:`center`,gap:8,wrap:`wrap`,children:e&&typeof e==`string`?(0,U.jsx)(y,{as:`h2`,ellipsis:{rows:2},fontSize:16,style:{lineHeight:1.5,margin:0},weight:500,children:e}):e}),typeof t==`string`?(0,U.jsx)(v,{variant:`borderless`,children:t}):t]}),typeof r==`string`?(0,U.jsx)(y,{as:`p`,color:m.colorTextSecondary,ellipsis:{rows:4},children:r}):r,(0,U.jsx)(R,{hashTags:o}),(0,U.jsxs)(u,{horizontal:!0,align:`center`,gap:12,justify:`space-between`,style:{overflow:`hidden`,position:`relative`},children:[c,(0,U.jsx)(V,{capturedAt:l})]})]}),(0,U.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,paddingBlock:8,paddingInline:8,style:{overflow:`hidden`,position:`relative`},width:`100%`,children:[(0,U.jsx)(u,{horizontal:!0,align:`center`,flex:1,gap:8,style:{overflow:`hidden`},onClick:e=>{e.stopPropagation(),e.preventDefault()},children:s}),(0,U.jsx)(d,{flex:`none`,children:(0,U.jsx)(y,{align:`center`,color:f?.backgroundTextColor||m.colorTextSecondary,weight:`bold`,style:{opacity:.5},children:n?.toUpperCase()||`CHORE`})}),(0,U.jsx)(u,{horizontal:!0,align:`center`,className:h(W,bt.actions),flex:1,gap:4,justify:`flex-end`,style:{overflow:`hidden`},onClick:e=>{e.stopPropagation(),e.preventDefault()},children:i})]})]})})}));function Ct({data:e,groupBy:t=`day`,getDateForGrouping:n,hasMore:r,isLoading:i,onLoadMore:a,renderHeader:o,renderItem:s}){let c=be(),l=Fe(),{groupCounts:u,sortedPeriods:d,groupedItems:f}=(0,wt.useMemo)(()=>{let r=t===`month`?`YYYY-MM`:`YYYY-MM-DD`,i=e.reduce((e,t)=>{let i=(0,G.default)(J(t,n)).format(r);return e[i]||(e[i]=[]),e[i].push(t),e},{}),a=Object.keys(i).sort((e,t)=>t.localeCompare(e)),o=[],s=[];for(let e of a){let t=[...i[e]].sort((e,t)=>{let r=J(e,n);return(0,G.default)(J(t,n)).valueOf()-(0,G.default)(r).valueOf()});o.push(t.length),s.push(...t)}return{groupCounts:o,groupedItems:s,sortedPeriods:a}},[e,t,n]);return!e||e.length===0?null:(0,K.jsxs)(`div`,{className:q.timelineContainer,children:[(0,K.jsx)(`div`,{className:h(q.timelineLine,c&&q.timelineLine_dark)}),(0,K.jsx)(Te,{customScrollParent:l,endReached:r&&a?a:void 0,groupCounts:u,increaseViewportBy:typeof window<`u`?window.innerHeight:0,overscan:24,style:{minHeight:`100%`},components:{Footer:i?()=>(0,K.jsx)(k,{viewMode:`timeline`}):void 0},groupContent:e=>{let t=d[e],n=u[e];return o(t,n)},itemContent:e=>{let t=f[e];return s(t)}})]})}var G,wt,K,q,J,Tt,Et=e((()=>{g(),G=t(n()),wt=t(c()),we(),xe(),A(),Pe(),K=t(s()),q=p(({css:e,cssVar:t})=>({timelineContainer:e`
    position: relative;
    height: 100%;
  `,timelineLine:e`
    position: absolute;
    inset-block: 0;
    inset-inline-start: 8px;

    width: 1px;
    height: 100%;

    background: ${t.colorFillSecondary};
  `,timelineLine_dark:e`
    background: ${t.colorFillQuaternary};
  `})),J=(e,t)=>t?t(e):e.capturedAt??e.createdAt??new Date,Tt=(0,wt.memo)(Ct)})),Dt,Ot,Y,X,kt,At,jt=e((()=>{S(),b(),g(),Dt=t(n()),Ot=t(c()),Y=t(s()),X=p(({css:e,cssVar:t})=>({itemWrapper:e`
    position: relative;
    padding-inline-start: 24px;
  `,periodHeader:e`
    position: sticky;
    z-index: 10;
    inset-block-start: 0;

    color: ${t.colorTextSecondary};

    background: ${t.colorBgContainer};
  `,timelineDot:e`
    position: absolute;
    inset-block-start: 20px;
    inset-inline-start: 0;

    width: 16px;
    height: 16px;
    border: 1px solid ${t.colorBorder};
    border-radius: 50%;

    background: ${t.colorBgElevated};
    box-shadow: 0 2px 4px -2px rgb(0 0 0 / 40%);
  `})),kt=(0,Ot.memo)(({periodKey:e,groupBy:t=`day`})=>{let n=t===`month`?(0,Dt.default)(`${e}-01`).format(`MMMM YYYY`):(0,Dt.default)(e).format(`MMMM D, YYYY`);return(0,Y.jsx)(u,{horizontal:!0,align:`center`,className:X.periodHeader,gap:12,paddingBlock:8,children:(0,Y.jsx)(y,{weight:500,children:n})})}),At=(0,Ot.memo)(({children:e})=>(0,Y.jsxs)(`div`,{className:X.itemWrapper,children:[(0,Y.jsx)(`div`,{className:X.timelineDot}),e]}))})),Mt,Z,Q,$,Nt,Pt=e((()=>{S(),b(),g(),Mt=t(c()),Qe(),z(),mt(),Z=t(s()),Q=`memory-actions`,$=p(({css:e})=>({actions:e`
    transition: opacity 0.15s ease;
  `,timelineCard:e`
    position: relative;
    .${Q} {
      opacity: 0;
    }

    &:hover {
      .${Q} {
        opacity: 1;
      }
    }
  `})),Nt=(0,Mt.memo)(({title:e,titleAddon:t,cate:n,children:r,actions:i,onClick:a,capturedAt:o,hashTags:s})=>(0,Z.jsxs)(x,{clickable:!0,className:$.timelineCard,gap:12,padding:16,variant:`borderless`,onClick:a,children:[(e||t)&&(0,Z.jsxs)(u,{horizontal:!0,align:`center`,gap:4,width:`100%`,wrap:`wrap`,style:{overflow:`hidden`},children:[e&&typeof e==`string`?(0,Z.jsx)(y,{as:`h2`,fontSize:16,style:{lineHeight:1.5,margin:0},weight:500,children:e}):e,t&&(0,Z.jsx)(v,{children:t})]}),typeof r==`string`?(0,Z.jsx)(y,{as:`p`,color:m.colorTextSecondary,ellipsis:{rows:3},children:r}):r,(0,Z.jsx)(R,{hashTags:s}),(0,Z.jsxs)(u,{horizontal:!0,align:`center`,gap:8,justify:`space-between`,children:[(0,Z.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,Z.jsx)(N,{cate:n}),(0,Z.jsx)(V,{capturedAt:o})]}),(0,Z.jsx)(u,{horizontal:!0,align:`center`,className:h(Q,$.actions),gap:4,onClick:e=>{e.stopPropagation(),e.preventDefault()},children:i})]})]}))}));export{Be as A,tt as C,Ke as D,Ge as E,Le as M,Re as N,k as O,et as S,Qe as T,z as _,jt as a,rt as b,xt as c,vt as d,V as f,R as g,dt as h,At as i,Ve as j,A as k,St as l,ut as m,Pt as n,Tt as o,mt as p,kt as r,Et as s,Nt as t,_t as u,ot as v,N as w,it as x,st as y};