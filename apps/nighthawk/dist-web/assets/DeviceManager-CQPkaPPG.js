import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{o as n}from"../i18n/i18n-ar-ui-runtime-CzTxFiK3.js";import{B as r,H as i,M as a,P as o}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{O as s,ar as c,cs as l,ls as u}from"./app-const-Bl9rlHwj.js";import{B as d,Cr as f,Hr as p,Qr as m,St as h,bt as g,mr as _}from"./dialog-BebLzVzY.js";import{a as v,v as y}from"../vendor/vendor-react-CBcx1o7d.js";import{a as b,c as x,l as S,t as C}from"./es-CVJR_g25.js";import{E as w,Hd as T,Jr as E,Mp as D,Mt as O,O as k,Pd as ee,Ph as te,Qr as ne,Qu as re,Rt as ie,Sc as ae,Wd as oe,Xh as se,ea as ce,et as le,fn as ue,fp as de,gs as fe,nf as pe,oi as me,us as he,wp as ge,x as A}from"../vendor/vendor-icons-C-Y4oLkk.js";import{F as _e,P as j,R as ve,c as M,et as ye,i as N,t as P,u as be,x as xe}from"./base-ui-BAv0gRbN.js";import{$r as Se,i as Ce,t as F,zt as we}from"./es-LELdnrjB.js";import{g as Te,p as Ee,u as De,x as Oe}from"./serverConfig-CmLVLry1.js";import{v as ke,y as Ae}from"./swrKeys-B4sicPWZ.js";import{a as je,c as I,n as Me}from"./client-BE8DoWhQ.js";import{n as Ne,t as Pe}from"./system-V_LTde5_.js";import{M as Fe,t as Ie}from"./selectors-CTRMh8eY.js";import{_ as Le,t as Re}from"./device-B19F27eC.js";import{n as ze,t as Be}from"./device-1R45EkPN.js";import{I as Ve,L as He,Oo as Ue,ko as We}from"./index-Djd-5Nq9.js";import{n as Ge,t as Ke}from"./DirIcon-XTs0JhHg.js";import{n as qe,t as Je}from"./CommandLine-BTKS_4a-.js";import{a as Ye,i as L,n as Xe,o as Ze,r as Qe,t as $e}from"./useDeviceList-C1am9Sd6.js";import{n as et,t as tt}from"./useIsWorkspaceOwner-vpffHA75.js";import{r as nt,t as rt}from"./WorkingDirectory-DJL9Nv4K.js";import{n as it,t as at}from"./VisibilityConfirmContent-MaPV1QeD.js";import{n as ot,t as st}from"./AsyncBoundary-CzRTtM14.js";import{n as ct,t as lt}from"./ListSkeleton-Dl8qN_d-.js";var R,z,B,V,ut,dt=e((()=>{s(),F(),P(),C(),A(),R=t(u()),a(),ke(),qe(),We(),z=t(l()),B=b(({css:e})=>({footer:e`
    margin-block-start: 4px;
    padding-block-start: 16px;
    border-block-start: 1px solid ${x.colorBorderSecondary};
  `,index:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    border-radius: 50%;

    font-size: ${x.fontSizeSM};
    font-weight: 600;
    color: ${x.colorPrimary};

    background: ${x.colorPrimaryBg};
  `,line:e`
    flex: 1;
    width: 1px;
    margin-block-start: 4px;
    background: ${x.colorBorderSecondary};
  `})),V=(0,R.memo)(({index:e,title:t,desc:n,children:r,last:i})=>(0,z.jsxs)(m,{horizontal:!0,gap:16,children:[(0,z.jsxs)(m,{align:`center`,children:[(0,z.jsx)(`span`,{className:B.index,children:e}),!i&&(0,z.jsx)(`span`,{className:B.line})]}),(0,z.jsxs)(m,{flex:1,gap:4,style:{paddingBlockEnd:i?0:24},children:[(0,z.jsx)(N,{weight:500,children:t}),n&&(0,z.jsx)(N,{color:x.colorTextTertiary,lineHeight:1.6,children:n}),r&&(0,z.jsx)(`div`,{style:{marginBlockStart:12},children:r})]})]})),ut=(0,R.memo)(({onClose:e,open:t,initialTab:n,scope:r,visibility:i})=>{let{t:a}=o(`setting`),s=Ae(),l=r===`workspace`,[u,d]=(0,R.useState)(n??`desktop`);(0,R.useEffect)(()=>{t&&d(l?`cli`:n??`desktop`)},[t,n,l]);let f=l?`lh connect --workspace ${s??`<workspace-id>`}${i===`public`?` --public`:``} --daemon`:`lh connect --daemon`,h=(0,z.jsxs)(m,{children:[(0,z.jsx)(V,{index:1,title:a(`devices.connectWizard.cli.installTitle`),children:(0,z.jsx)(Je,{command:`npm install -g @lobehub/cli`})}),(0,z.jsx)(V,{index:2,title:a(`devices.connectWizard.cli.loginTitle`),children:(0,z.jsx)(Je,{command:`lh login`})}),(0,z.jsx)(V,{last:!0,index:3,title:a(`devices.connectWizard.cli.connectTitle`),desc:a(l?`workspaceSetting.devices.enrollDesc`:`devices.connectWizard.cli.connectDesc`),children:(0,z.jsx)(Je,{command:f})})]});return(0,z.jsx)(Ue,{footer:null,open:t,width:560,title:a(l?i===`private`?`workspaceSetting.devices.connectTitlePrivate`:`workspaceSetting.devices.connectTitlePublic`:`devices.connectWizard.title`),onCancel:e,children:(0,z.jsxs)(m,{gap:20,children:[!l&&(0,z.jsx)(N,{color:x.colorTextTertiary,children:a(`devices.connectWizard.subtitle`)}),l?null:(0,z.jsx)(be,{activeKey:u,items:[{icon:(0,z.jsx)(p,{icon:fe}),key:`desktop`,label:a(`devices.connectWizard.method.desktop`)},{icon:(0,z.jsx)(p,{icon:ue}),key:`cli`,label:a(`devices.connectWizard.method.cli`)}],styles:{list:{display:`flex`,width:`100%`},tab:{flex:1}},onChange:e=>d(e)}),!l&&u===`desktop`?(0,z.jsxs)(m,{children:[(0,z.jsx)(V,{desc:a(`devices.connectWizard.desktop.step1Desc`),index:1,title:a(`devices.connectWizard.desktop.step1`),children:(0,z.jsx)(`a`,{href:c.default,rel:`noreferrer`,target:`_blank`,children:(0,z.jsx)(_,{icon:(0,z.jsx)(p,{icon:D}),type:`primary`,children:a(`devices.connectWizard.desktop.downloadLink`)})})}),(0,z.jsx)(V,{desc:a(`devices.connectWizard.desktop.step2Desc`),index:2,title:a(`devices.connectWizard.desktop.step2`)}),(0,z.jsx)(V,{last:!0,desc:a(`devices.connectWizard.desktop.step3Desc`),index:3,title:a(`devices.connectWizard.desktop.step3`)})]}):h,(0,z.jsxs)(m,{horizontal:!0,align:`center`,className:B.footer,gap:8,children:[(0,z.jsx)(p,{icon:E,size:14,style:{color:x.colorTextTertiary}}),(0,z.jsx)(N,{color:x.colorTextTertiary,fontSize:12,children:a(`devices.connectWizard.footer`)})]})]})})}),ut.displayName=`DeviceConnectModal`})),ft,pt,mt=e((()=>{ft=t(u()),tt(),Te(),Ie(),pt=()=>{let e=et(),t=Oe(Fe.userId);return(0,ft.useCallback)(n=>n.scope===`personal`?!0:n.enroller?e?!0:t?n.enroller.userId===t:!1:!1,[e,t])}})),ht,H,U,W,G,gt,_t=e((()=>{s(),F(),P(),C(),ht=t(n()),A(),H=t(u()),a(),Ge(),rt(),Me(),ze(),Ne(),Re(),Qe(),Ze(),mt(),U=t(l()),W=b(({css:e})=>({container:e`
    padding-block: 16px;
    padding-inline: 20px;
  `,dot:e`
    flex: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `,header:e`
    padding-block-end: 16px;
    border-block-end: 1px solid ${x.colorBorderSecondary};
  `,iconTile:e`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;
    border-radius: ${x.borderRadius};

    color: ${x.colorTextSecondary};

    background: ${x.colorFillTertiary};
  `,path:e`
    overflow: hidden;
    flex: 1;

    min-width: 0;

    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    color: ${x.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,recentItem:e`
    padding-block: 8px;
    padding-inline: 8px;
  `})),G=(0,H.memo)(({children:e,extra:t})=>(0,U.jsxs)(m,{horizontal:!0,align:`center`,distribution:`space-between`,children:[(0,U.jsx)(N,{fontSize:12,type:`secondary`,weight:500,children:e}),t]})),gt=(0,H.memo)(({device:e,isCurrent:t,onClose:n})=>{let{t:r}=o([`setting`,`device`]),i=pt()(e),[a,s]=(0,H.useState)(e.friendlyName??``),[c,l]=(0,H.useState)(e.defaultCwd??``),u=()=>L(),f=I.device.updateDevice.useMutation({onSuccess:u}),h=I.device.updateWorkspaceDevice.useMutation({onSuccess:u}),v=e.scope===`workspace`?h:f,y=!!t&&!1,b=e.channels??[],S=b.length>0,C=()=>{let t=a.trim()||null;t!==(e.friendlyName??null)&&v.mutate({deviceId:e.deviceId,friendlyName:t})},w=(t,n)=>{let r=t.trim();v.mutate({defaultCwd:r||null,deviceId:e.deviceId,workingDirs:r?Le({path:r,repoType:n},e.workingDirs):e.workingDirs})},E=()=>{c.trim()!==(e.defaultCwd??``)&&w(c)},D=async()=>{let e=await Pe.selectFolder({defaultPath:c.trim()||void 0,title:r(`devices.edit.defaultCwd`)});e?.path&&(l(e.path),w(e.path,e.repoType))},O=t=>{v.mutate({deviceId:e.deviceId,workingDirs:Le(t,e.workingDirs)})},ee=async()=>{if(y){let e=await Pe.selectFolder({title:r(`devices.detail.addDir`)});e?.path&&O({path:e.path,repoType:e.repoType});return}nt({onSubmit:async t=>{let n=await Be.statPath(e.deviceId,t);if(n){if(!n.exists)return r(`device:workingDirectory.pathNotExist`);if(!n.isDirectory)return r(`device:workingDirectory.pathNotDirectory`)}O({path:t,repoType:n?.repoType})},placeholder:e.defaultCwd||void 0})},te=t=>{v.mutate({deviceId:e.deviceId,workingDirs:e.workingDirs.filter(e=>e.path!==t)})},ne=e=>j({content:r(`devices.share.revokeConfirmDesc`),okButtonProps:{danger:!0},okText:r(`devices.share.revoke`),onOk:async()=>{try{await je(e.workspaceId).device.removeWorkspaceDevice.mutate({deviceId:e.deviceId}),L()}catch(e){throw d.error(e.message),e}},title:r(`devices.share.revokeConfirmTitle`,{name:e.workspaceName??e.workspaceId})});return(0,U.jsxs)(m,{className:W.container,gap:20,children:[(0,U.jsxs)(m,{horizontal:!0,align:`center`,className:W.header,gap:12,children:[(0,U.jsx)(`span`,{className:W.iconTile,children:Ye(e.platform,18)}),(0,U.jsxs)(m,{flex:1,gap:2,style:{minWidth:0},children:[(0,U.jsx)(N,{ellipsis:!0,weight:600,children:e.friendlyName||e.hostname||e.deviceId}),(0,U.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(M,{color:S?`success`:`default`,size:`small`,children:r(S?`devices.status.online`:`devices.status.offline`)}),t&&(0,U.jsx)(M,{size:`small`,children:r(`devices.currentBadge`)})]})]}),(0,U.jsx)(g,{icon:k,size:`small`,onClick:n})]}),!i&&(0,U.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(p,{icon:ae,size:14,style:{color:x.colorTextTertiary}}),(0,U.jsx)(N,{fontSize:12,type:`secondary`,children:r(`workspaceSetting.devices.readonlyHint`)})]}),e.scope===`workspace`&&e.enroller&&(0,U.jsxs)(m,{gap:8,children:[(0,U.jsx)(G,{children:r(`workspaceSetting.devices.enrolledByLabel`)}),(0,U.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(ye,{avatar:e.enroller.avatar??void 0,size:24}),(0,U.jsx)(N,{children:e.enroller.fullName||e.enroller.username||r(`workspaceSetting.devices.unknownEnroller`)})]})]}),e.scope===`personal`&&!!e.sharedWorkspaces?.length&&(0,U.jsxs)(m,{gap:8,children:[(0,U.jsx)(G,{children:r(`devices.share.detailLabel`)}),e.sharedWorkspaces.map(e=>(0,U.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(N,{ellipsis:!0,style:{flex:1,minWidth:0},children:e.workspaceName??e.workspaceId}),(0,U.jsx)(M,{size:`small`,children:e.visibility===`private`?r(`devices.share.visibilityTag.private`):r(`devices.share.visibilityTag.public`)}),(0,U.jsx)(g,{icon:k,size:`small`,title:r(`devices.share.revoke`),onClick:()=>ne(e)})]},e.workspaceId))]}),(0,U.jsxs)(m,{gap:8,children:[(0,U.jsx)(G,{children:r(`devices.detail.connections`)}),b.length>0?b.map((e,t)=>(0,U.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(`span`,{className:W.dot,style:{background:x.colorSuccess}}),e.channel&&(0,U.jsx)(M,{size:`small`,children:e.channel}),(0,U.jsx)(N,{fontSize:12,type:`secondary`,children:r(`devices.channel.connected`,{time:(0,ht.default)(e.connectedAt).fromNow()})})]},`${e.connectedAt}-${t}`)):(0,U.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,U.jsx)(`span`,{className:W.dot,style:{background:x.colorTextQuaternary}}),(0,U.jsxs)(N,{fontSize:12,type:`secondary`,children:[r(`devices.status.offline`),` ·`,` `,r(`devices.lastSeen`,{time:(0,ht.default)(e.lastSeen).fromNow()})]})]})]}),(0,U.jsxs)(m,{gap:8,children:[(0,U.jsx)(G,{children:r(`devices.edit.friendlyName`)}),i?(0,U.jsx)(Se,{placeholder:r(`devices.edit.friendlyNamePlaceholder`),value:a,onBlur:C,onChange:e=>s(e.target.value),onPressEnter:C}):e.friendlyName?(0,U.jsx)(N,{children:e.friendlyName}):(0,U.jsx)(N,{type:`secondary`,children:`—`})]}),(0,U.jsxs)(m,{gap:8,children:[(0,U.jsx)(G,{children:r(`devices.edit.defaultCwd`)}),i?(0,U.jsxs)(m,{horizontal:!0,gap:8,children:[(0,U.jsx)(Se,{placeholder:r(`devices.edit.defaultCwdPlaceholder`),value:c,onBlur:E,onChange:e=>l(e.target.value),onPressEnter:E}),y&&(0,U.jsx)(_,{icon:(0,U.jsx)(p,{icon:oe}),onClick:D,children:r(`devices.edit.browse`)})]}):e.defaultCwd?(0,U.jsx)(N,{className:W.path,children:e.defaultCwd}):(0,U.jsx)(N,{type:`secondary`,children:`—`})]}),(0,U.jsxs)(m,{gap:8,children:[(0,U.jsx)(G,{extra:i&&(0,U.jsx)(g,{icon:T,size:`small`,title:r(`devices.detail.addDir`),onClick:ee}),children:r(`devices.detail.recentDirs`)}),e.workingDirs.length===0?(0,U.jsx)(N,{fontSize:12,type:`secondary`,children:r(`devices.detail.noRecent`)}):i?(0,U.jsx)(Ce,{items:e.workingDirs.map(e=>({id:e.path,repoType:e.repoType})),renderItem:e=>(0,U.jsxs)(Ce.Item,{className:W.recentItem,id:e.id,variant:`filled`,children:[(0,U.jsx)(Ce.DragHandle,{}),(0,U.jsx)(Ke,{repoType:e.repoType}),(0,U.jsx)(N,{className:W.path,title:e.id,children:e.id}),(0,U.jsx)(g,{icon:k,size:`small`,onClick:()=>te(e.id)})]}),onChange:t=>{let n=new Map(e.workingDirs.map(e=>[e.path,e]));v.mutate({deviceId:e.deviceId,workingDirs:t.map(e=>n.get(e.id)??{path:e.id})})}}):e.workingDirs.map(e=>(0,U.jsxs)(m,{horizontal:!0,align:`center`,className:W.recentItem,gap:8,children:[(0,U.jsx)(Ke,{repoType:e.repoType}),(0,U.jsx)(N,{className:W.path,title:e.path,children:e.path})]},e.path))]})]})}),gt.displayName=`DeviceDetailPanel`})),vt,yt,bt,xt=e((()=>{s(),F(),P(),vt=t(u()),yt=t(l()),bt=()=>(0,vt.useCallback)(e=>(0,yt.jsxs)(m,{horizontal:!0,align:`center`,gap:10,style:{flex:1,minWidth:0},children:[(0,yt.jsx)(ye,{avatar:e.avatar||`/avatars/agent-default.png`,shape:`square`,size:24}),(0,yt.jsx)(N,{ellipsis:!0,style:{flex:`0 1 auto`,minWidth:0},children:e.name})]}),[])})),K,q,J,St,Ct,wt=e((()=>{F(),P(),C(),r(),A(),K=t(u()),a(),v(),xt(),Ve(),Me(),Qe(),q=t(l()),J=b(({css:e})=>({footer:e`
    padding-block: 16px;
    padding-inline: 24px;
  `,optionHint:e`
    margin-inline-start: auto;
    font-size: 12px;
    color: ${x.colorTextTertiary};
  `,optionRow:e`
    width: 100%;
    min-width: 0;
    padding-block: 2px;
  `,selectValue:e`
    > span {
      display: flex;
      flex: 1;
      min-width: 0;
    }
  `})),St=(0,K.memo)(({device:e})=>{let{t}=o([`setting`,`common`]),{close:n,setCanDismissByClickOutside:r}=ve(),i=y(),a=He(),s=bt(),[c,l]=(0,K.useState)(),[u,f]=(0,K.useState)(`private`),[h,g]=(0,K.useState)(!1),[v,b]=(0,K.useState)(`select-target`),[S,C]=(0,K.useState)(),w=(0,K.useMemo)(()=>new Set((e.sharedWorkspaces??[]).map(e=>e.workspaceId)),[e.sharedWorkspaces]),T=(0,K.useMemo)(()=>a.map(e=>{let n=w.has(e.id),r=e.role===`viewer`;return{disabled:n||r||!!e.lockedOut,label:(0,q.jsxs)(m,{horizontal:!0,align:`center`,className:J.optionRow,gap:8,children:[s(e),n&&(0,q.jsx)(M,{size:`small`,style:{flex:`none`,margin:0},children:t(`devices.share.alreadyShared`)}),!n&&r&&(0,q.jsx)(`span`,{className:J.optionHint,children:t(`devices.share.viewerHint`)})]}),title:e.name,value:e.id}}),[a,w,t,s]),E=c??T.find(e=>!e.disabled)?.value,D=(0,K.useMemo)(()=>[{desc:t(`workspace.general.transferScope.private.desc`),icon:ae,label:t(`workspace.general.transferScope.private.label`),value:`private`},{desc:t(`workspace.general.transferScope.workspace.desc`),icon:le,label:t(`workspace.general.transferScope.workspace.label`),value:`public`}].map(e=>({label:(0,q.jsxs)(m,{horizontal:!0,align:`center`,className:J.optionRow,gap:8,children:[(0,q.jsx)(p,{icon:e.icon,size:14}),(0,q.jsx)(N,{style:{fontSize:13,fontWeight:500},children:e.label}),(0,q.jsx)(`span`,{className:J.optionHint,children:e.desc})]}),title:e.label,value:e.value})),[t]),O=e=>t(e===`public`?`devices.share.visibilityTag.public`:`devices.share.visibilityTag.private`),k=async n=>{let i=a.find(e=>e.id===E);if(i){g(!0),r?.(!1);try{let r=await je(i.id).device.shareDeviceToWorkspace.mutate({confirmOverwrite:n,deviceId:e.deviceId,visibility:u});if(!r.success&&r.alreadyEnrolled){j({content:t(`devices.share.overwriteConfirmDesc`,{current:O(r.visibility??`public`),next:O(u)}),okText:t(`devices.share.overwriteConfirmOk`),onOk:()=>k(!0),title:t(`devices.share.overwriteConfirmTitle`,{name:i.name})});return}L(),C({name:i.name,slug:i.slug}),b(`done`)}catch(e){d.error(`${i.name}: ${e.message}`)}finally{g(!1),r?.(!0)}}};return v===`done`&&S?(0,q.jsxs)(m,{align:`center`,gap:20,justify:`center`,padding:48,children:[(0,q.jsxs)(m,{align:`center`,gap:12,children:[(0,q.jsx)(p,{color:x.colorSuccess,icon:te,size:32}),(0,q.jsx)(N,{weight:500,children:t(`devices.share.success`,{name:S.name})})]}),(0,q.jsxs)(m,{horizontal:!0,gap:8,children:[(0,q.jsx)(_,{onClick:n,children:t(`devices.share.done`)}),(0,q.jsx)(_,{type:`primary`,onClick:()=>{S&&(i(`/${S.slug}/settings/devices`),n())},children:t(`devices.share.goToTarget`,{name:S.name})})]})]}):(0,q.jsxs)(m,{children:[(0,q.jsxs)(m,{gap:16,padding:24,children:[(0,q.jsx)(N,{style:{fontSize:13},type:`secondary`,children:t(`devices.share.modalDesc`)}),a.length===0?(0,q.jsx)(m,{align:`center`,justify:`center`,paddingBlock:24,children:(0,q.jsx)(N,{fontSize:12,type:`secondary`,children:t(`devices.share.empty`)})}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(m,{gap:6,children:[(0,q.jsx)(N,{style:{fontSize:13,fontWeight:500},children:t(`devices.share.targetLabel`)}),(0,q.jsx)(xe,{showSearch:!0,classNames:{value:J.selectValue},options:T,placeholder:t(`devices.share.selectPlaceholder`),style:{width:`100%`},value:E,onChange:e=>l(e)})]}),(0,q.jsxs)(m,{gap:6,children:[(0,q.jsx)(N,{style:{fontSize:13,fontWeight:500},children:t(`workspace.general.transferScope.title`)}),(0,q.jsx)(xe,{classNames:{value:J.selectValue},options:D,style:{width:`100%`},value:u,onChange:e=>f(e)})]})]})]}),(0,q.jsxs)(m,{horizontal:!0,className:J.footer,gap:8,justify:`space-between`,children:[(0,q.jsx)(_,{disabled:h,onClick:n,children:t(`cancel`,{ns:`common`})}),(0,q.jsx)(_,{disabled:!E,loading:h,type:`primary`,onClick:()=>k(),children:t(`devices.share.confirm`)})]})]})}),St.displayName=`ShareDeviceContent`,Ct=e=>_e({content:(0,q.jsx)(St,{device:e}),footer:null,maskClosable:!1,styles:{content:{padding:0}},title:i(`devices.share.modalTitle`,{ns:`setting`}),width:`min(92vw, 520px)`})})),Tt,Et,Y,X,Dt,Ot=e((()=>{F(),P(),C(),Tt=t(n()),A(),Et=t(u()),a(),it(),Me(),Te(),Ie(),Qe(),Ze(),wt(),mt(),Y=t(l()),X=b(({css:e})=>({activity:e`
    flex: none;
    font-size: ${x.fontSizeSM};
    white-space: nowrap;
  `,cwd:e`
    overflow: hidden;

    font-family: ${x.fontFamilyCode};
    font-size: ${x.fontSizeSM};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,iconTile:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border-radius: 12px;

    color: ${x.colorTextSecondary};

    background: ${x.colorFillTertiary};
  `,metaDivider:e`
    flex: none;
    width: 1px;
    height: 10px;
    background: ${x.colorBorderSecondary};
  `,row:e`
    cursor: pointer;

    padding-block: 12px;
    padding-inline: 12px;
    border-radius: ${x.borderRadius};

    transition: background 0.15s ease;

    &:hover {
      background: ${x.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${x.colorPrimary};
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,rowActive:e`
    background: ${x.colorFillSecondary};

    &:hover {
      background: ${x.colorFillSecondary};
    }
  `,statusOffline:e`
    width: 8px;
    height: 8px;
    border: 1.5px solid ${x.colorTextQuaternary};
    border-radius: 50%;
  `,statusOnline:e`
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: ${x.colorSuccess};
    box-shadow: 0 0 0 3px ${x.colorSuccessBg};
  `})),Dt=(0,Et.memo)(({device:e,isCurrent:t,onSelect:n,selected:r})=>{let{t:i}=o(`setting`),{t:a}=o(`common`),s=pt()(e),c=Oe(Fe.userId),l=()=>L(),u=I.device.removeDevice.useMutation({onSuccess:l}),d=I.device.removeWorkspaceDevice.useMutation({onSuccess:l}),g=e.scope===`workspace`?d:u,v=e.friendlyName||e.hostname||e.deviceId,y=e.identitySource===`fallback`,b=e.channels??[],C=b.length>0,w=C?i(`devices.channel.connected`,{time:(0,Tt.default)(b[0]?.connectedAt??e.lastSeen).fromNow()}):i(`devices.lastSeen`,{time:(0,Tt.default)(e.lastSeen).fromNow()}),T=I.device.setWorkspaceDeviceVisibility.useMutation({onSuccess:()=>L()}),E=()=>j({content:(0,Y.jsx)(at,{variant:`publish`}),okText:i(`devices.visibility.publish`),onOk:async()=>{await T.mutateAsync({deviceId:e.deviceId,visibility:`public`})},title:i(`devices.visibility.publishConfirmTitle`)}),D=()=>j({content:(0,Y.jsx)(at,{variant:`makePrivate`}),okButtonProps:{danger:!0},okText:a(`makePrivate.confirm.ok`),onOk:async()=>{await T.mutateAsync({deviceId:e.deviceId,visibility:`private`})},title:a(`makePrivate.confirm.title`)}),k=!!c&&e.enroller?.userId===c,te=e.scope===`workspace`&&e.registered&&k?e.visibility===`private`?[{icon:(0,Y.jsx)(p,{icon:re}),key:`publish`,label:i(`devices.visibility.publish`),onClick:E}]:[{icon:(0,Y.jsx)(p,{icon:de}),key:`makePrivate`,label:a(`makePrivate`),onClick:D}]:[],ae=e.scope===`personal`&&e.registered?[{desc:C?void 0:i(`devices.share.offlineDesc`),disabled:!C,icon:(0,Y.jsx)(p,{icon:ne}),key:`share`,label:i(`devices.share.menu`),onClick:()=>Ct(e)}]:[],oe=()=>j({content:t?`${i(`devices.remove.confirmDesc`)}\n\n${i(`devices.remove.currentSessionWarning`)}`:i(`devices.remove.confirmDesc`),okButtonProps:{danger:!0},okText:i(`devices.actions.remove`),onOk:async()=>{await g.mutateAsync({deviceId:e.deviceId})},title:i(`devices.remove.confirm`)});return(0,Y.jsxs)(m,{horizontal:!0,align:`center`,"aria-pressed":r,className:S(X.row,r&&X.rowActive),gap:16,role:`button`,tabIndex:0,onClick:n,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())},children:[(0,Y.jsx)(`div`,{className:X.iconTile,children:Ye(e.platform,20)}),(0,Y.jsxs)(m,{flex:1,gap:2,style:{minWidth:0},children:[(0,Y.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,Y.jsx)(N,{ellipsis:!0,fontSize:15,weight:500,children:v}),(0,Y.jsx)(`span`,{className:C?X.statusOnline:X.statusOffline}),t&&(0,Y.jsx)(M,{children:i(`devices.currentBadge`)}),e.scope===`workspace`&&e.sharedFromPersonal&&(0,Y.jsx)(M,{children:i(`devices.share.sharedByTag`,{name:e.enroller?.fullName||e.enroller?.username||i(`workspaceSetting.devices.unknownEnroller`)})}),e.scope===`personal`&&!!e.sharedWorkspaces?.length&&(0,Y.jsx)(M,{children:i(`devices.share.badge`,{count:e.sharedWorkspaces.length})}),y&&(0,Y.jsx)(f,{title:i(`devices.fallbackTooltip`),children:(0,Y.jsx)(M,{icon:(0,Y.jsx)(p,{icon:O}),children:i(`devices.fallbackBadge`)})})]}),(0,Y.jsxs)(m,{horizontal:!0,align:`center`,gap:8,style:{minWidth:0},children:[(0,Y.jsx)(N,{className:X.activity,type:`secondary`,children:w}),e.defaultCwd&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`span`,{className:X.metaDivider}),(0,Y.jsx)(p,{icon:ee,size:12,style:{color:x.colorTextQuaternary}}),(0,Y.jsx)(N,{className:X.cwd,type:`secondary`,children:e.defaultCwd})]})]})]}),(0,Y.jsxs)(m,{horizontal:!0,align:`center`,gap:8,style:{flex:`none`},children:[e.scope===`workspace`&&e.enroller&&(0,Y.jsx)(f,{title:i(`workspaceSetting.devices.enrolledBy`,{name:e.enroller.fullName||e.enroller.username||i(`workspaceSetting.devices.unknownEnroller`)}),children:(0,Y.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:(0,Y.jsx)(ye,{avatar:e.enroller.avatar??void 0,size:20})})}),s&&(0,Y.jsx)(`span`,{onClick:e=>e.stopPropagation(),children:(0,Y.jsx)(h,{placement:`bottomRight`,items:[...te,...ae,{danger:!0,icon:(0,Y.jsx)(p,{icon:ie}),key:`remove`,label:i(`devices.actions.remove`),onClick:oe}],children:(0,Y.jsx)(_,{icon:ge})})})]})]})}),Dt.displayName=`DeviceItem`})),Z,Q,$,kt,At,jt,Mt,Nt=e((()=>{s(),F(),P(),C(),A(),Z=t(u()),a(),ot(),ct(),De(),_t(),Ot(),$e(),Q=t(l()),$=b(({css:e})=>({badge:e`
    padding-block: 1px;
    padding-inline: 8px;
    border-radius: 999px;

    font-size: ${x.fontSizeSM};
    font-weight: 500;
    color: ${x.colorPrimary};

    background: ${x.colorPrimaryBg};
  `,capabilityCard:e`
    padding: 16px;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: ${x.borderRadiusLG};
    background: ${x.colorBgContainer};
  `,capabilityIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 36px;
    height: 36px;
    border-radius: ${x.borderRadius};

    color: ${x.colorTextSecondary};

    background: ${x.colorFillTertiary};
  `,emptyCard:e`
    overflow: hidden;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: ${x.borderRadiusLG};
    background: ${x.colorBgContainer};
  `,emptyHero:e`
    padding-block: 40px;
    padding-inline: 32px;
    text-align: center;
    background: ${x.colorFillQuaternary};
  `,heroIcon:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    border-radius: ${x.borderRadiusLG};

    color: ${x.colorText};

    background: ${x.colorFillSecondary};
  `,option:e`
    cursor: pointer;
    padding: 20px;
    background: ${x.colorBgContainer};
    transition: background 0.15s ease;

    &:hover {
      background: ${x.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${x.colorPrimary};
      outline-offset: -2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,optionGrid:e`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;

    border-block-start: 1px solid ${x.colorBorderSecondary};

    background: ${x.colorBorderSecondary};
  `,optionIcon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: ${x.borderRadius};

    color: ${x.colorTextSecondary};

    background: ${x.colorFillTertiary};
  `,detailCol:e`
    align-self: stretch;

    min-width: 0;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: ${x.borderRadiusLG};

    background: ${x.colorBgContainer};
  `,listCol:e`
    overflow: hidden;

    min-width: 0;
    border: 1px solid ${x.colorBorderSecondary};
    border-radius: ${x.borderRadiusLG};

    background: ${x.colorBgContainer};
  `,listHeader:e`
    min-height: 44px;
    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid ${x.colorBorderSecondary};
  `,listScroll:e`
    overflow-y: auto;

    /* Cap the list so long fleets (servers / CLI agents) stay scrollable instead
       of pushing the page — pairs with the detail panel sitting beside it. */
    max-height: 480px;
  `})),kt=(0,Z.memo)(({icon:e,title:t,desc:n,badge:r,onClick:i})=>(0,Q.jsxs)(m,{horizontal:!0,align:`flex-start`,className:$.option,gap:16,role:`button`,tabIndex:0,onClick:i,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),i())},children:[(0,Q.jsx)(`span`,{className:$.optionIcon,children:(0,Q.jsx)(p,{icon:e,size:20})}),(0,Q.jsxs)(m,{flex:1,gap:4,style:{minWidth:0},children:[(0,Q.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(N,{weight:500,children:t}),r&&(0,Q.jsx)(`span`,{className:$.badge,children:r})]}),(0,Q.jsx)(N,{color:x.colorTextTertiary,fontSize:12,children:n})]}),(0,Q.jsx)(p,{icon:se,size:16,style:{color:x.colorTextQuaternary}})]})),At=(0,Z.memo)(()=>{let{t:e}=o(`setting`),t=[{desc:e(`devices.capabilities.files.desc`),icon:pe,title:e(`devices.capabilities.files.title`)},{desc:e(`devices.capabilities.commands.desc`),icon:ue,title:e(`devices.capabilities.commands.title`)},{desc:e(`devices.capabilities.tools.desc`),icon:w,title:e(`devices.capabilities.tools.title`)}];return(0,Q.jsxs)(m,{gap:16,children:[(0,Q.jsx)(N,{fontSize:12,type:`secondary`,weight:500,children:e(`devices.capabilities.title`)}),(0,Q.jsx)(m,{horizontal:!0,gap:16,children:t.map(e=>(0,Q.jsxs)(m,{className:$.capabilityCard,flex:1,gap:12,children:[(0,Q.jsx)(`span`,{className:$.capabilityIcon,children:(0,Q.jsx)(p,{icon:e.icon,size:18})}),(0,Q.jsxs)(m,{gap:4,children:[(0,Q.jsx)(N,{weight:500,children:e.title}),(0,Q.jsx)(N,{color:x.colorTextTertiary,fontSize:12,children:e.desc})]})]},e.title))})]})}),jt=(0,Z.memo)(({withHeader:e})=>(0,Q.jsxs)(m,{className:$.listCol,flex:1,children:[e&&(0,Q.jsx)(m,{horizontal:!0,align:`center`,className:$.listHeader,children:(0,Q.jsx)(we.Button,{active:!0,size:`small`,style:{height:16,minWidth:80,width:80}})}),(0,Q.jsx)(m,{padding:4,children:(0,Q.jsx)(lt,{})})]})),Mt=(0,Z.memo)(({onConnect:e,scope:t,visibility:n})=>{let{t:r}=o(`setting`),i=t===`workspace`,{data:a,isLoading:s,error:c,mutate:l,isValidating:u}=Xe(),d=(a??[]).filter(e=>e.scope===t&&(!n||(e.visibility??`public`)===n)),f=Ee(e=>e.useFetchGatewayDeviceInfo);Ee(e=>e.gatewayDeviceInfo),f();let[h,v]=(0,Z.useState)(),y=i&&n===`private`,b=(0,Q.jsxs)(m,{gap:32,children:[(0,Q.jsxs)(m,{className:$.emptyCard,children:[(0,Q.jsxs)(m,{align:`center`,className:$.emptyHero,gap:12,children:[(0,Q.jsx)(`span`,{className:$.heroIcon,children:(0,Q.jsx)(p,{icon:i&&!y?me:fe,size:28})}),(0,Q.jsx)(N,{fontSize:18,weight:600,children:r(i?`workspaceSetting.devices.heroTitle`:`devices.empty.title`)}),(0,Q.jsx)(N,{style:{maxWidth:440},type:`secondary`,children:r(i?`workspaceSetting.devices.heroDesc`:`devices.empty.desc`)}),i&&(0,Q.jsx)(_,{icon:(0,Q.jsx)(p,{icon:ue}),style:{marginBlockStart:8},type:`primary`,onClick:()=>e(`cli`),children:r(`devices.empty.methodCli.title`)})]}),!i&&(0,Q.jsxs)(`div`,{className:$.optionGrid,children:[(0,Q.jsx)(kt,{badge:r(`devices.empty.methodDesktop.badge`),desc:r(`devices.empty.methodDesktop.desc`),icon:fe,title:r(`devices.empty.methodDesktop.title`),onClick:()=>e(`desktop`)}),(0,Q.jsx)(kt,{desc:r(`devices.empty.methodCli.desc`),icon:ue,title:r(`devices.empty.methodCli.title`),onClick:()=>e(`cli`)})]})]}),!i&&(0,Q.jsx)(At,{})]}),x=h?d.find(e=>e.deviceId===h):void 0,S=e=>!1;return(0,Q.jsx)(st,{data:a,empty:b,error:c,errorVariant:`block`,isEmpty:d.length===0,isLoading:s,loading:(0,Q.jsx)(jt,{withHeader:!i}),onRetry:()=>l(),children:(0,Q.jsxs)(m,{horizontal:!0,align:`flex-start`,gap:16,children:[(0,Q.jsxs)(m,{className:$.listCol,flex:1,children:[!i&&(0,Q.jsxs)(m,{horizontal:!0,align:`center`,className:$.listHeader,justify:`space-between`,children:[(0,Q.jsx)(N,{fontSize:12,type:`secondary`,weight:500,children:r(`devices.selection.total`,{count:d.length})}),(0,Q.jsxs)(m,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(_,{icon:(0,Q.jsx)(p,{icon:he}),size:`small`,onClick:()=>e(),children:r(`devices.connectWizard.button`)}),(0,Q.jsx)(g,{icon:ce,loading:u,size:`small`,title:r(`devices.actions.refresh`),onClick:()=>l()})]})]}),(0,Q.jsx)(m,{className:$.listScroll,gap:2,padding:4,children:d.map(e=>(0,Q.jsx)(Dt,{device:e,isCurrent:S(e.deviceId),selected:e.deviceId===h,onSelect:()=>v(t=>t===e.deviceId?void 0:e.deviceId)},e.deviceId))})]}),x&&(0,Q.jsx)(m,{className:$.detailCol,flex:1,children:(0,Q.jsx)(gt,{device:x,isCurrent:S(x.deviceId),onClose:()=>v(void 0)},x.deviceId)})]})})}),Mt.displayName=`DeviceManager`})),Pt=e((()=>{dt(),Nt(),$e()}));export{dt as a,ut as i,Mt as n,Nt as r,Pt as t};