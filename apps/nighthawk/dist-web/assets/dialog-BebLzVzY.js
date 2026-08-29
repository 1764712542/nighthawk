import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{at as n,it as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{Go as i,Ha as a,Ua as o,Va as s,cs as c,ls as l}from"./app-const-Bl9rlHwj.js";import{D as u}from"../vendor/vendor-react-CBcx1o7d.js";import{a as d,c as f,d as p,h as m,i as h,l as g,m as _,s as v,t as y,y as b}from"./es-CVJR_g25.js";import{Ht as x,I as S,M as C,N as w,Vt as T}from"../vendor/vendor-ui-runtime-Dixawc49.js";import{Bl as E,Ev as D,Ho as O,Hu as k,Ih as A,Jh as j,Mc as M,Mt as N,O as P,Or as F,Qm as I,Sv as L,Wp as R,Wv as ee,bv as z,cv as te,gm as ne,ng as re,ns as B,om as ie,oy as V,vv as ae,x as oe}from"../vendor/vendor-icons-C-Y4oLkk.js";import{n as se,t as ce}from"./common-DsfyCloF.js";var le,ue,de,fe=e((()=>{le=t(l(),1),ue=(0,le.createContext)(null),de=(0,le.createContext)(null)}));function pe(e){let t=e.type;if(typeof t!=`string`){if(typeof t==`function`)return t.displayName||t.name;if(typeof t==`object`&&t)return t.displayName||t.render?.displayName||t.render?.name||t.type?.displayName||t.type?.name}}function me({children:e,nativeButton:t,triggerNativeButton:n}){let r=(0,he.useMemo)(()=>(0,he.isValidElement)(e)?typeof e.type==`string`&&e.type===`button`:!1,[e]);return{isNativeButtonTriggerElement:r,resolvedNativeButton:(0,he.useMemo)(()=>{if(t!==void 0)return t;if(n!==void 0)return n;if(r)return!0;if(!(0,he.isValidElement)(e))return;if(typeof e.type==`string`)return!1;let i=pe(e);return i&&i in ge?ge[i]:!1},[e,r,t,n])}}var he,ge,_e=e((()=>{he=t(l(),1),ge={A:!1,ActionIcon:!1,ActionIconGroup:!1,Alert:!1,Avatar:!1,AvatarGroup:!1,BaseActionIcon:!0,BaseButton:!0,Block:!1,BottomGradientButton:!0,Burger:!1,Button:!0,Center:!1,Checkbox:!1,CheckboxGroup:!1,Collapse:!1,ColorSwatches:!1,CopyButton:!1,DownloadButton:!1,EditableText:!1,Empty:!1,FileTypeIcon:!1,Flexbox:!1,FluentEmoji:!1,GradientButton:!0,Highlighter:!1,Hotkey:!1,Icon:!1,Image:!1,Img:!1,Input:!1,InputNumber:!1,InputPassword:!1,List:!1,ListItem:!1,Select:!1,Switch:!1,Markdown:!1,MaterialFileTypeIcon:!1,Segmented:!1,Skeleton:!1,SkeletonAvatar:!1,SkeletonBlock:!1,SkeletonButton:!1,SkeletonParagraph:!1,SkeletonTags:!1,SkeletonTitle:!1,Snippet:!1,Tag:!1,Text:!1,TextArea:!1,ThemeSwitch:!1,Video:!1}})),ve,ye,be=e((()=>{fe(),ve=t(l(),1),ye=e=>{let t=(0,ve.useContext)(de),{arrow:n,className:r,classNames:i,closeDelay:a,disabled:o,getPopupContainer:s,hotkey:c,hotkeyProps:l,mouseEnterDelay:u,mouseLeaveDelay:d,onOpenChange:f,openDelay:p,placement:m,popupContainer:h,styles:g,title:_,zIndex:v,positionerProps:y,triggerProps:b,popupProps:x}=e,S=(0,ve.useMemo)(()=>{if(!(!t?.className&&!r))return[t?.className,r].filter(Boolean).join(` `)},[r,t?.className]),C=(0,ve.useMemo)(()=>{if(!(!t?.classNames&&!i))return{...t?.classNames,...i}},[i,t?.classNames]),w=(0,ve.useMemo)(()=>{if(typeof t?.styles!=`function`)return t?.styles},[t?.styles]),T=(0,ve.useMemo)(()=>{if(typeof g!=`function`)return g},[g]),E=(0,ve.useMemo)(()=>{if(!(!w&&!T))return{...w,...T}},[w,T]),D=(0,ve.useMemo)(()=>{if(!(!t?.hotkeyProps&&!l))return{...t?.hotkeyProps,...l}},[l,t?.hotkeyProps]),O=(0,ve.useMemo)(()=>{if(!(!t?.onOpenChange&&!f))return e=>{t?.onOpenChange?.(e),f?.(e)}},[f,t?.onOpenChange]);return(0,ve.useMemo)(()=>({arrow:n??t?.arrow??!1,className:S,classNames:C,closeDelay:a??t?.closeDelay,disabled:o??t?.disabled,getPopupContainer:s??t?.getPopupContainer,hotkey:c??t?.hotkey,popupContainer:h??t?.popupContainer,hotkeyProps:D,mouseEnterDelay:u??t?.mouseEnterDelay,mouseLeaveDelay:d??t?.mouseLeaveDelay,onOpenChange:O,openDelay:p??t?.openDelay,placement:m??t?.placement??`top`,popupProps:x??t?.popupProps,positionerProps:y??t?.positionerProps,styles:E,title:_,triggerProps:b??t?.triggerProps,zIndex:v??t?.zIndex}),[n,a,o,s,c,S,C,D,O,E,u,d,p,m,h,x,y,t?.arrow,t?.closeDelay,t?.disabled,t?.getPopupContainer,t?.hotkey,t?.mouseEnterDelay,t?.mouseLeaveDelay,t?.onOpenChange,t?.openDelay,t?.placement,t?.popupContainer,t?.popupProps,t?.positionerProps,t?.triggerProps,t?.zIndex,_,b,v])}}));function xe(e,t){if(e&&!t)return e;if(!e&&t)return t;if(e||t)return{...e,...t}}var Se=e((()=>{}));function Ce(e,t,n,r,i){if(!n&&!r&&!i&&!e)return Te(t);let a=Te(e);return t&&(a=Ee(a,t)),n&&(a=Ee(a,n)),r&&(a=Ee(a,r)),i&&(a=Ee(a,i)),a}function we(e){if(e.length===0)return Le;if(e.length===1)return Te(e[0]);let t=Te(e[0]);for(let n=1;n<e.length;n+=1)t=Ee(t,e[n]);return t}function Te(e){return Ae(e)?{...je(e,Le)}:De(e)}function Ee(e,t){return Ae(t)?je(t,e):Oe(e,t)}function De(e){let t={...e};for(let e in t){let n=t[e];ke(e,n)&&(t[e]=Ne(n))}return t}function Oe(e,t){if(!t)return e;for(let n in t){let r=t[n];switch(n){case`style`:e[n]=xe(e.style,r);break;case`className`:e[n]=Fe(e.className,r);break;default:ke(n,r)?e[n]=Me(e[n],r):e[n]=r}}return e}function ke(e,t){let n=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2);return n===111&&r===110&&i>=65&&i<=90&&(typeof t==`function`||t===void 0)}function Ae(e){return typeof e==`function`}function je(e,t){return Ae(e)?e(t):e??Le}function Me(e,t){return t?e?(...n)=>{let r=n[0];if(Ie(r)){let i=r;Pe(i);let a=t(...n);return i.baseUIHandlerPrevented||e?.(...n),a}let i=t(...n);return e?.(...n),i}:Ne(t):e}function Ne(e){return e&&((...t)=>{let n=t[0];return Ie(n)&&Pe(n),e(...t)})}function Pe(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function Fe(e,t){return t?e?t+` `+e:t:e}function Ie(e){return typeof e==`object`&&!!e&&`nativeEvent`in e}var Le,Re=e((()=>{Se(),Le={}})),ze=e((()=>{Re()}));function Be(e,t){let n=Ve.useRef(He);return n.current===He&&(n.current=e(t)),n}var Ve,He,Ue=e((()=>{Ve=t(l(),1),He={}}));function We(){return Ze}function Ge(e){Xe.push(e)}function Ke(e){let t=(t,n)=>{let r=Be(Je).current,i;try{Ze=r;for(let e of Xe)e.before(r);i=e(t,n);for(let e of Xe)e.after(r);r.didInitialize=!0}finally{Ze=void 0}return i};return t.displayName=e.displayName||e.name,t}function qe(e){return Ye.forwardRef(Ke(e))}function Je(){return{didInitialize:!1}}var Ye,Xe,Ze,Qe=e((()=>{Ye=t(l(),1),Ue(),Xe=[],Ze=void 0})),$e,et,H,U=e((()=>{$e=t(l(),1),et=()=>{},H=typeof document<`u`?$e.useLayoutEffect:et}));function tt(e,t){return function(n,...r){let i=new URL(e);return i.searchParams.set(`code`,n.toString()),r.forEach(e=>i.searchParams.append(`args[]`,e)),`${t} error #${n}; visit ${i} for the full message.`}}var nt,rt=e((()=>{nt=tt(`https://base-ui.com/production-error`,`Base UI`)}));function it(e){let t=at.useContext(ot);if(t===void 0&&!e)throw Error(nt(72));return t}var at,ot,st=e((()=>{rt(),at=t(l(),1),ot=at.createContext(void 0)}));function ct(e){lt.useEffect(e,ut)}var lt,ut,dt=e((()=>{lt=t(l(),1),ut=[]}));function ft(){let e=Be(mt.create).current;return ct(e.disposeEffect),e}var pt,mt,ht=e((()=>{Ue(),dt(),pt=0,mt=class e{static create(){return new e}currentId=pt;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=pt,t()},e)}isStarted(){return this.currentId!==pt}clear=()=>{this.currentId!==pt&&(clearTimeout(this.currentId),this.currentId=pt)};disposeEffect=()=>this.clear}}));function gt(){return typeof navigator>`u`?{userAgent:``,platform:``,maxTouchPoints:0}:{userAgent:navigator.userAgent,platform:navigator.platform??``,maxTouchPoints:navigator.maxTouchPoints??0}}var _t,vt,yt,bt,xt,St=e((()=>{({userAgent:_t,platform:vt,maxTouchPoints:yt}=gt()),bt=_t.toLowerCase(),xt=vt.toLowerCase()})),Ct,wt,Tt,Et,Dt,Ot=e((()=>{St(),Ct=/^i(os$|p)/.test(xt)||xt===`macintel`&&yt>1,wt=`android`,Tt=xt===wt||bt.includes(wt),Et=!Ct&&xt.startsWith(`mac`),xt.startsWith(`win`),!Tt&&/^(linux|chrome os)/.test(xt),Dt=Et||Ct})),kt,At,jt=e((()=>{St(),kt=typeof CSS<`u`&&!!CSS.supports?.(`-webkit-backdrop-filter:none`),At=!kt&&bt.includes(`firefox`),!kt&&bt.includes(`chrom`)})),Mt,Nt=e((()=>{Ot(),Mt=Dt})),Pt,Ft=e((()=>{St(),Pt=/jsdom|happydom/.test(bt)})),It=e((()=>{Ot(),jt(),Nt(),Ft()})),Lt=e((()=>{It()}));function Rt(e){e.preventDefault(),e.stopPropagation()}function zt(e){return`nativeEvent`in e}function Bt(e){return e.pointerType===``&&e.isTrusted?!0:Tt&&e.pointerType?e.type===`click`&&e.buttons===1:e.detail===0&&!e.pointerType}function Vt(e){return Pt?!1:!Tt&&e.width===0&&e.height===0||Tt&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType===`mouse`||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType===`touch`}function Ht(e,t){let n=[`mouse`,`pen`];return t||n.push(``,void 0),n.includes(e)}function Ut(e){let t=e.type;return t===`click`||t===`mousedown`||t===`keydown`||t===`keyup`}var Wt=e((()=>{Lt()}));function Gt(){return typeof window<`u`}function Kt(e){return Yt(e)?(e.nodeName||``).toLowerCase():`#document`}function qt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Jt(e){return((Yt(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Yt(e){return Gt()?e instanceof Node||e instanceof qt(e).Node:!1}function Xt(e){return Gt()?e instanceof Element||e instanceof qt(e).Element:!1}function Zt(e){return Gt()?e instanceof HTMLElement||e instanceof qt(e).HTMLElement:!1}function Qt(e){return!Gt()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof qt(e).ShadowRoot}function $t(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=sn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function en(e){return/^(table|td|th)$/.test(Kt(e))}function tn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function nn(e){let t=Xt(e)?sn(e):e;return hn(t.transform)||hn(t.translate)||hn(t.scale)||hn(t.rotate)||hn(t.perspective)||!an()&&(hn(t.backdropFilter)||hn(t.filter))||pn.test(t.willChange||``)||mn.test(t.contain||``)}function rn(e){let t=ln(e);for(;Zt(t)&&!on(t);){if(nn(t))return t;if(tn(t))return null;t=ln(t)}return null}function an(){return gn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),gn}function on(e){return/^(html|body|#document)$/.test(Kt(e))}function sn(e){return qt(e).getComputedStyle(e)}function cn(e){return Xt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ln(e){if(Kt(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Qt(e)&&e.host||Jt(e);return Qt(t)?t.host:t}function un(e){let t=ln(e);return on(t)?(e.ownerDocument||e).body:Zt(t)&&$t(t)?t:un(t)}function dn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=un(e),i=r===e.ownerDocument?.body,a=qt(r);if(i){let e=fn(a);return t.concat(a,a.visualViewport||[],$t(r)?r:[],e&&n?dn(e):[])}else return t.concat(r,dn(r,[],n))}function fn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var pn,mn,hn,gn,_n=e((()=>{pn=/transform|translate|scale|rotate|perspective|filter/,mn=/paint|layout|strict|content/,hn=e=>!!e&&e!==`none`})),vn,yn,bn,xn,Sn,Cn,wn=e((()=>{vn=`data-base-ui-focusable`,yn=`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`,bn=`ArrowLeft`,xn=`ArrowRight`,Sn=`ArrowUp`,Cn=`ArrowDown`}));function Tn(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function W(e,t){if(!e||!t)return!1;let n=t.getRootNode?.();if(e.contains(t))return!0;if(n&&Qt(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function En(e){return`composedPath`in e?e.composedPath()[0]:e.target}var Dn=e((()=>{_n()}));function On(e,t){if(!Xt(e))return!1;let n=e;if(t.hasElement(n))return!n.hasAttribute(`data-trigger-disabled`);for(let[,e]of t.entries())if(W(e,n))return!e.hasAttribute(`data-trigger-disabled`);return!1}function kn(e,t){if(t==null)return!1;if(`composedPath`in e)return e.composedPath().includes(t);let n=e;return n.target!=null&&t.contains(n.target)}function An(e){return e.matches(`html,body`)}function jn(e){return Zt(e)&&e.matches(`input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])`)}function Mn(e){return e?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${yn}`)!=null}function Nn(e){return e?e.getAttribute(`role`)===`combobox`&&jn(e):!1}function Pn(e){if(!e||Pt)return!0;try{return e.matches(`:focus-visible`)}catch{return!0}}function Fn(e){return e?e.hasAttribute(`data-base-ui-focusable`)?e:e.querySelector(`[data-base-ui-focusable]`)||e:null}var In=e((()=>{_n(),Lt(),wn(),Dn()}));function Ln(e,t){return t!=null&&!Ht(t)?0:typeof e==`function`?e():e}function Rn(e,t,n){let r=Ln(e,n);return typeof r==`number`?r:r?.[t]}function zn(e){return typeof e==`function`?e():e}function Bn(e,t){return t||e===`click`||e===`mousedown`}function Vn(e){return e?.includes(`mouse`)&&e!==`mousedown`}var Hn=e((()=>{Wt(),In()}));function Un(){}var Wn,Gn,Kn=e((()=>{Wn=Object.freeze([]),Gn=Object.freeze({})})),qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr=e((()=>{qn=`none`,Jn=`trigger-press`,Yn=`trigger-hover`,Xn=`trigger-focus`,Zn=`outside-press`,Qn=`item-press`,$n=`close-press`,er=`clear-press`,tr=`track-press`,nr=`increment-press`,rr=`decrement-press`,ir=`input-change`,ar=`input-clear`,or=`input-blur`,sr=`input-paste`,cr=`input-press`,lr=`focus-out`,ur=`escape-key`,dr=`list-navigation`,fr=`keyboard`,pr=`pointer`,mr=`drag`,hr=`wheel`,gr=`cancel-open`,_r=`sibling-open`,vr=`disabled`,yr=`missing`,br=`initial`,xr=`imperative-action`,Sr=`window-resize`})),wr=e((()=>{Cr()}));function G(e,t,n,r){let i=!1,a=!1,o=r??Gn;return{reason:e,event:t??new Event(`base-ui`),cancel(){i=!0},allowPropagation(){a=!0},get isCanceled(){return i},get isPropagationAllowed(){return a},trigger:n,...o}}function Tr(e,t,n){let r=n??Gn;return{reason:e,event:t??new Event(`base-ui`),...r}}var Er=e((()=>{Kn()}));function Dr(e,t){e.current=t.current}function Or(e,t={open:!1}){let{open:n}=t,r=`rootStore`in e?e.rootStore:e,i=r.useState(`floatingId`),{currentIdRef:a,delayRef:o,timeoutMs:s,initialDelayRef:c,currentContextRef:l,hasProvider:u,timeout:d}=kr.useContext(Ar),[f,p]=kr.useState(!1),m=kr.useRef(n),h=kr.useRef(!1);return H(()=>{m.current=n},[n]),H(()=>()=>{h.current=!0},[]),H(()=>{function e(){h.current||p(!1),l.current?.setIsInstantPhase(!1),a.current=null,l.current=null,o.current=c.current,d.clear()}if(a.current&&!n&&a.current===i){if(p(!1),s){let t=i;return d.start(s,()=>{r.select(`open`)||a.current&&a.current!==t||e()}),()=>{(m.current||a.current!==t)&&d.clear()}}e()}},[n,i,a,o,s,c,l,d,r]),H(()=>{if(!n)return;let e=l.current,t=a.current;d.clear(),l.current={onOpenChange:r.setOpen,setIsInstantPhase:p},a.current=i,o.current={open:0,close:Rn(c.current,`close`)},t!==null&&t!==i?(p(!0),e?.setIsInstantPhase(!0),e?.onOpenChange(!1,G(qn))):(p(!1),e?.setIsInstantPhase(!1))},[n,i,r,a,o,c,l,d]),H(()=>()=>{if(a.current===i){if(l.current=null,!m.current)return;a.current=null,Dr(o,c),d.clear()}},[l,a,o,i,c,d]),kr.useMemo(()=>({hasProvider:u,delayRef:o,isInstantPhase:f}),[u,o,f])}var kr,Ar,jr=e((()=>{kr=t(l(),1),ht(),U(),Hn(),Er(),wr(),c(),Ar=kr.createContext({hasProvider:!1,timeoutMs:0,delayRef:{current:0},initialDelayRef:{current:0},timeout:new mt,currentIdRef:{current:null},currentContextRef:{current:null}})}));function K(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}var Mr=e((()=>{}));function Nr(...e){return()=>{for(let t=0;t<e.length;t+=1){let n=e[t];n&&n()}}}var Pr=e((()=>{}));function Fr(e,t,n,r){let i=Be(Lr).current;return Rr(i,e,t,n,r)&&Br(i,[e,t,n,r]),i.callback}function Ir(e){let t=Be(Lr).current;return zr(t,e)&&Br(t,e),t.callback}function Lr(){return{callback:null,cleanup:null,refs:[]}}function Rr(e,t,n,r,i){return e.refs[0]!==t||e.refs[1]!==n||e.refs[2]!==r||e.refs[3]!==i}function zr(e,t){return e.refs.length!==t.length||e.refs.some((e,n)=>e!==t[n])}function Br(e,t){if(e.refs=t,t.every(e=>e==null)){e.callback=null;return}e.callback=n=>{if(e.cleanup&&=(e.cleanup(),null),n!=null){let r=Array(t.length).fill(null);for(let e=0;e<t.length;e+=1){let i=t[e];if(i!=null)switch(typeof i){case`function`:{let t=i(n);typeof t==`function`&&(r[e]=t);break}case`object`:i.current=n;break;default:}}e.cleanup=()=>{for(let e=0;e<t.length;e+=1){let n=t[e];if(n!=null)switch(typeof n){case`function`:{let t=r[e];typeof t==`function`?t():n(null);break}case`object`:n.current=null;break;default:}}}}}}var Vr=e((()=>{Ue()}));function Hr(e){let t=Be(Ur,e).current;return t.next=e,H(t.effect),t}function Ur(e){let t={current:e,next:e,effect:()=>{t.current=t.next}};return t}var Wr=e((()=>{U(),Ue()})),Gr,Kr,qr=e((()=>{Gr=t(l(),1),Kr={...Gr}}));function q(e){let t=Be(Jr).current;return t.next=e,Zr(t.effect),t.trampoline}function Jr(){let e={next:void 0,callback:Yr,trampoline:(...t)=>e.callback?.(...t),effect:()=>{e.callback=e.next}};return e}function Yr(){}var Xr,Zr,Qr=e((()=>{qr(),Ue(),Xr=Kr.useInsertionEffect,Zr=Xr&&Xr!==Kr.useLayoutEffect?Xr:e=>e()}));function $r(){let e=Be(ri.create).current;return ct(e.disposeEffect),e}var ei,ti,ni,ri,ii=e((()=>{Ue(),dt(),ei=null,globalThis.requestAnimationFrame,ti=class{callbacks=[];callbacksCount=0;nextId=1;startId=1;isScheduled=!1;tick=e=>{this.isScheduled=!1;let t=this.callbacks,n=this.callbacksCount;if(this.callbacks=[],this.callbacksCount=0,this.startId=this.nextId,n>0)for(let n=0;n<t.length;n+=1)t[n]?.(e)};request(e){let t=this.nextId;return this.nextId+=1,this.callbacks.push(e),this.callbacksCount+=1,this.isScheduled||=(requestAnimationFrame(this.tick),!0),t}cancel(e){let t=e-this.startId;t<0||t>=this.callbacks.length||(this.callbacks[t]=null,--this.callbacksCount)}},ni=new ti,ri=class e{static create(){return new e}static request(e){return ni.request(e)}static cancel(e){return ni.cancel(e)}currentId=ei;request(e){this.cancel(),this.currentId=ni.request(()=>{this.currentId=ei,e()})}cancel=()=>{this.currentId!==ei&&(ni.cancel(this.currentId),this.currentId=ei)};disposeEffect=()=>this.cancel}}));function J(e){return e?.ownerDocument||document}var ai=e((()=>{_n()})),oi,si,ci,li=e((()=>{oi={clipPath:`inset(50%)`,overflow:`hidden`,whiteSpace:`nowrap`,border:0,padding:0,width:1,height:1,margin:-1},si={...oi,position:`fixed`,top:0,left:0},ci={...oi,position:`absolute`}})),ui,di,fi,pi=e((()=>{ui=t(l(),1),U(),Lt(),li(),di=t(c(),1),fi=ui.forwardRef(function(e,t){let[n,r]=ui.useState();H(()=>{Mt&&kt&&r(`button`)},[]);let i={tabIndex:0,role:n};return(0,di.jsx)(`span`,{...e,ref:t,style:si,"aria-hidden":n?void 0:!0,...i,"data-base-ui-focus-guard":``})})}));function mi(e,t,n){return Ni(e,Mi(t,n))}function hi(e,t){return typeof e==`function`?e(t):e}function gi(e){return e.split(`-`)[0]}function _i(e){return e.split(`-`)[1]}function vi(e){return e===`x`?`y`:`x`}function yi(e){return e===`y`?`height`:`width`}function bi(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function xi(e){return vi(bi(e))}function Si(e,t,n){n===void 0&&(n=!1);let r=_i(e),i=xi(e),a=yi(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Di(o)),[o,Di(o)]}function Ci(e){let t=Di(e);return[wi(e),t,wi(t)]}function wi(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function Ti(e,t,n){switch(e){case`top`:case`bottom`:return n?t?zi:Ri:t?Ri:zi;case`left`:case`right`:return t?Bi:Vi;default:return[]}}function Ei(e,t,n,r){let i=_i(e),a=Ti(gi(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(wi)))),a}function Di(e){let t=gi(e);return Li[t]+e.slice(t.length)}function Oi(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function ki(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Oi(e)}function Ai(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi=e((()=>{ji=[`top`,`right`,`bottom`,`left`],Mi=Math.min,Ni=Math.max,Pi=Math.round,Fi=Math.floor,Ii=e=>({x:e,y:e}),Li={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Ri=[`left`,`right`],zi=[`right`,`left`],Bi=[`top`,`bottom`],Vi=[`bottom`,`top`]}));function Ui(e,t,n){return Math.floor(e/t)!==n}function Wi(e,t){return t<0||t>=e.length}function Gi(e,t){return qi(e.current,{disabledIndices:t})}function Ki(e,t){return qi(e.current,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function qi(e,{startingIndex:t=-1,decrement:n=!1,disabledIndices:r,amount:i=1}={}){let a=t;do a+=n?-i:i;while(a>=0&&a<=e.length-1&&Yi(e,a,r));return a}function Ji(e,{event:t,orientation:n,loopFocus:r,onLoop:i,rtl:a,cols:o,disabledIndices:s,minIndex:c,maxIndex:l,prevIndex:u,stopEvent:d=!1}){let f=u,p;if(t.key===`ArrowUp`?p=`up`:t.key===`ArrowDown`&&(p=`down`),p){let n=[],a=[],m=!1,h=0;{let t=null,r=-1;e.forEach((e,i)=>{if(e==null)return;h+=1;let o=e.closest(`[role="row"]`);o&&(m=!0),(o!==t||r===-1)&&(t=o,r+=1,n[r]=[]),n[r].push(i),a[i]=r})}let g=!1,_=0;if(m)for(let e of n){let t=e.length;t>_&&(_=t),t!==o&&(g=!0)}let v=g&&h<e.length,y=_||o,b=o=>{if(!g||u===-1)return;let c=a[u];if(c==null)return;let l=n[c].indexOf(u),d=o===`up`?-1:1;for(let o=c+d,f=0;f<n.length;f+=1,o+=d){if(o<0||o>=n.length){if(!r||v)return;if(o=o<0?n.length-1:0,i){let e=Math.min(l,n[o].length-1);o=a[i(t,u,n[o][e]??n[o][0])]??o}}let c=n[o];for(let t=Math.min(l,c.length-1);t>=0;--t){let n=c[t];if(!Yi(e,n,s))return n}}},x=t=>{if(!v||u===-1)return;let n=u%y,i=t===`up`?-y:y,a=l-l%y,o=Fi(l/y)+1;for(let t=u-n+i,c=0;c<o;c+=1,t+=i){if(t<0||t>l){if(!r)return;t=t<0?a:0}let i=Math.min(t+y-1,l);for(let r=Math.min(t+n,i);r>=t;--r)if(!Yi(e,r,s))return r}};d&&Rt(t);let S=b(p)??x(p);if(S!==void 0)f=S;else if(u===-1)f=p===`up`?l:c;else if(f=qi(e,{startingIndex:u,amount:y,decrement:p===`up`,disabledIndices:s}),r){if(p===`up`&&(u-y<c||f<0)){let e=u%y,n=l%y,r=l-(n-e);f=n===e?l:n>e?r:r-y,i&&(f=i(t,u,f))}p===`down`&&u+y>l&&(f=qi(e,{startingIndex:u%y-y,amount:y,disabledIndices:s}),i&&(f=i(t,u,f)))}Wi(e,f)&&(f=u)}if(n===`both`){let n=Fi(u/o);t.key===(a?`ArrowLeft`:`ArrowRight`)&&(d&&Rt(t),u%o===o-1?r&&(f=qi(e,{startingIndex:u-u%o-1,disabledIndices:s}),i&&(f=i(t,u,f))):(f=qi(e,{startingIndex:u,disabledIndices:s}),r&&Ui(f,o,n)&&(f=qi(e,{startingIndex:u-u%o-1,disabledIndices:s}),i&&(f=i(t,u,f)))),Ui(f,o,n)&&(f=u)),t.key===(a?`ArrowRight`:`ArrowLeft`)&&(d&&Rt(t),u%o===0?r&&(f=qi(e,{startingIndex:u+(o-u%o),decrement:!0,disabledIndices:s}),i&&(f=i(t,u,f))):(f=qi(e,{startingIndex:u,decrement:!0,disabledIndices:s}),r&&Ui(f,o,n)&&(f=qi(e,{startingIndex:u+(o-u%o),decrement:!0,disabledIndices:s}),i&&(f=i(t,u,f)))),Ui(f,o,n)&&(f=u));let c=Fi(l/o)===n;Wi(e,f)&&(r&&c?(f=t.key===(a?`ArrowRight`:`ArrowLeft`)?l:qi(e,{startingIndex:u-u%o-1,disabledIndices:s}),i&&(f=i(t,u,f))):f=u)}return f}function Yi(e,t,n){if(typeof n==`function`?n(t):n?.includes(t)??!1)return!0;let r=e[t];return r?Zi(r)?!n&&(r.hasAttribute(`disabled`)||r.getAttribute(`aria-disabled`)===`true`):!0:!1}function Xi(e){return e.visibility===`hidden`||e.visibility===`collapse`}function Zi(e,t=e?sn(e):null){return!e||!e.isConnected||!t||Xi(t)?!1:typeof e.checkVisibility==`function`?e.checkVisibility():t.display!==`none`&&t.display!==`contents`}var Qi=e((()=>{Hi(),_n(),Wt(),wn()}));function $i(e){let t=e.assignedSlot;if(t)return t;if(e.parentElement)return e.parentElement;let n=e.getRootNode();return Qt(n)?n.host:null}function ea(e){for(let t of Array.from(e.children))if(Kt(t)===`summary`)return t;return null}function ta(e,t){let n=ea(t);return!!n&&(e===n||W(n,e))}function na(e){let t=e?Kt(e):``;return e!=null&&e.matches(Ca)&&(t!==`summary`||e.parentElement!=null&&Kt(e.parentElement)===`details`&&ea(e.parentElement)===e)&&(t!==`details`||ea(e)==null)&&(t!==`input`||e.type!==`hidden`)}function ra(e){if(!na(e)||!e.isConnected||e.matches(`:disabled`))return!1;for(let t=e;t;t=$i(t)){let n=t!==e,r=Kt(t)===`slot`;if(t.hasAttribute(`inert`)||n&&Kt(t)===`details`&&!t.open&&!ta(e,t)||t.hasAttribute(`hidden`)||!r&&!ia(t,n))return!1}return!0}function ia(e,t){let n=sn(e);return t?n.display!==`none`:Zi(e,n)}function aa(e){let t=e.tabIndex;if(t<0){let t=Kt(e);if(t===`details`||t===`audio`||t===`video`||Zt(e)&&e.isContentEditable)return 0}return t}function oa(e){if(Kt(e)!==`input`)return null;let t=e;return t.type===`radio`&&t.name!==``?t:null}function sa(e,t){let n=oa(e);if(!n)return!0;let r=t.find(e=>{let t=oa(e);return t?.name===n.name&&t.form===n.form&&t.checked});return r?r===n:t.find(e=>{let t=oa(e);return t?.name===n.name&&t.form===n.form})===n}function ca(e){if(Zt(e)&&Kt(e)===`slot`){let t=e.assignedElements({flatten:!0});if(t.length>0)return t}return Zt(e)&&e.shadowRoot?Array.from(e.shadowRoot.children):Array.from(e.children)}function la(e,t){ca(e).forEach(e=>{na(e)&&t.push(e),la(e,t)})}function ua(e,t,n){ca(e).forEach(e=>{Zt(e)&&e.matches(t)&&n.push(e),ua(e,t,n)})}function da(e){return ra(e)&&aa(e)>=0}function fa(e){let t=[];return la(e,t),t.filter(ra)}function pa(e){let t=fa(e);return t.filter(e=>aa(e)>=0&&sa(e,t))}function ma(e,t){let n=pa(e),r=n.length;if(r===0)return;let i=Tn(J(e)),a=n.indexOf(i);return n[a===-1?t===1?0:r-1:a+t]}function ha(e){return ma(J(e).body,1)||e}function ga(e){return ma(J(e).body,-1)||e}function _a(e,t){if(!e)return null;let n=pa(J(e).body),r=n.length;if(r===0)return null;let i=n.indexOf(e);return i===-1?null:n[(i+t+r)%r]}function va(e){return _a(e,1)}function ya(e){return _a(e,-1)}function ba(e,t){let n=t||e.currentTarget,r=e.relatedTarget;return!r||!W(n,r)}function xa(e){pa(e).forEach(e=>{e.dataset.tabindex=e.getAttribute(`tabindex`)||``,e.setAttribute(`tabindex`,`-1`)})}function Sa(e){let t=[];ua(e,`[data-tabindex]`,t),t.forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute(`tabindex`,t):e.removeAttribute(`tabindex`)})}var Ca,wa=e((()=>{_n(),ai(),In(),Qi(),Ca=`a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]`}));function Ta(e,t,n=!0){return e.filter(e=>e.parentId===t).flatMap(t=>[...!n||t.context?.open?[t]:[],...Ta(e,t.id,n)])}function Ea(e,t){let n=[],r=e.find(e=>e.id===t)?.parentId;for(;r;){let t=e.find(e=>e.id===r);r=t?.parentId,t&&(n=n.concat(t))}return n}var Da=e((()=>{}));function Oa(e){return`data-base-ui-${e}`}var ka=e((()=>{}));function Aa(e,t={}){let{preventScroll:n=!1,sync:r=!1,shouldFocus:i}=t;cancelAnimationFrame(ja);function a(){i&&!i()||e?.focus({preventScroll:n})}if(r)return a(),Un;let o=requestAnimationFrame(a);return ja=o,()=>{ja===o&&(cancelAnimationFrame(o),ja=0)}}var ja,Ma=e((()=>{Kn(),ja=0}));function Na(e){return za[e]}function Pa(e){return e?Qt(e)?e.host:Pa(e.parentNode):null}function Fa(e,t,n,r,{mark:i=!0}){let a=null;r?a=`inert`:n&&(a=`aria-hidden`);let o=null,s=null,c=Ha(t,e),l=i?Wa(t,Ua(c),new Set(c)):[],u=[],d=[];if(a){let e=La[a],n=Na(a);s=n,o=e;let r=Ha(t,Array.from(t.querySelectorAll(`[aria-live]`))),i=c.concat(r);Wa(t,Ua(i),new Set(i)).forEach(t=>{let r=t.getAttribute(a),i=r!==null&&r!==`false`,o=(e.get(t)||0)+1;e.set(t,o),u.push(t),o===1&&i&&n.add(t),i||t.setAttribute(a,a===`inert`?``:`true`)})}return i&&l.forEach(e=>{let t=(Ba.get(e)||0)+1;Ba.set(e,t),d.push(e),t===1&&e.setAttribute(Ra,``)}),Va+=1,()=>{o&&u.forEach(e=>{let t=(o.get(e)||0)-1;o.set(e,t),t||(!s?.has(e)&&a&&e.removeAttribute(a),s?.delete(e))}),i&&d.forEach(e=>{let t=(Ba.get(e)||0)-1;Ba.set(e,t),t||e.removeAttribute(Ra)}),--Va,Va||(La.inert=new WeakMap,La[`aria-hidden`]=new WeakMap,za.inert=new WeakSet,za[`aria-hidden`]=new WeakSet,Ba=new WeakMap)}}function Ia(e,t={}){let{ariaHidden:n=!1,inert:r=!1,mark:i=!0}=t,a=J(e[0]).body;return Fa(e,a,n,r,{mark:i})}var La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga=e((()=>{_n(),ai(),La={inert:new WeakMap,"aria-hidden":new WeakMap},Ra=`data-base-ui-inert`,za={inert:new WeakSet,"aria-hidden":new WeakSet},Ba=new WeakMap,Va=0,Ha=(e,t)=>t.map(t=>{if(e.contains(t))return t;let n=Pa(t);return e.contains(n)?n:null}).filter(e=>e!=null),Ua=e=>{let t=new Set;return e.forEach(e=>{let n=e;for(;n&&!t.has(n);)t.add(n),n=n.parentNode}),t},Wa=(e,t,n)=>{let r=[],i=e=>{!e||n.has(e)||Array.from(e.children).forEach(e=>{Kt(e)!==`script`&&(t.has(e)?i(e):r.push(e))})};return i(e),r}}));function Ka(e,t=`mui`){let[n,r]=Ja.useState(e),i=e||n;return Ja.useEffect(()=>{n??(Ya+=1,r(`${t}-${Ya}`))},[n,t]),i}function qa(e,t){if(Xa!==void 0){let n=Xa();return e??(t?`${t}-${n}`:n)}return Ka(e,t)}var Ja,Ya,Xa,Za=e((()=>{Ja=t(l(),1),qr(),Ya=0,Xa=Kr.useId}));function Qa(e){return $a>=e}var $a,eo=e((()=>{l(),$a=19}));function to(e){if(!no.isValidElement(e))return null;let t=e,n=t.props;return(Qa(19)?n?.ref:t.ref)??null}var no,ro=e((()=>{no=t(l(),1),eo()}));function io(e,t){let n={};for(let r in e){let i=e[r];if(t?.hasOwnProperty(r)){let e=t[r](i);e!=null&&Object.assign(n,e);continue}i===!0?n[`data-${r.toLowerCase()}`]=``:i&&(n[`data-${r.toLowerCase()}`]=i.toString())}return n}var ao=e((()=>{}));function oo(e,t){return typeof e==`function`?e(t):e}var so=e((()=>{}));function co(e,t){return typeof e==`function`?e(t):e}var lo=e((()=>{}));function Y(e,t,n={}){let r=t.render,i=uo(t,n);return n.enabled===!1?null:po(e,r,i,n.state??Gn)}function uo(e,t={}){let{className:n,style:r,render:i}=e,{state:a=Gn,ref:o,props:s,stateAttributesMapping:c,enabled:l=!0}=t,u=l?oo(n,a):void 0,d=l?co(r,a):void 0,f=l?io(a,c):Gn,p=l&&s?fo(s):void 0,m=l?xe(f,p)??{}:Gn;return typeof document<`u`&&(l?Array.isArray(o)?m.ref=Ir([m.ref,to(i),...o]):m.ref=Fr(m.ref,to(i),o):Fr(null,null)),l?(u!==void 0&&(m.className=Fe(m.className,u)),d!==void 0&&(m.style=xe(m.style,d)),m):Gn}function fo(e){return Array.isArray(e)?we(e):Ce(void 0,e)}function po(e,t,n,r){if(t){if(typeof t==`function`)return t(n,r);let e=Ce(n,t.props);e.ref=n.ref;let i=t;return i?.$$typeof===_o&&(i=ho.Children.toArray(t)[0]),ho.cloneElement(i,e)}if(e&&typeof e==`string`)return mo(e,n);throw Error(nt(8))}function mo(e,t){return e===`button`?(0,go.createElement)(`button`,{type:`button`,...t,key:t.key}):e===`img`?(0,go.createElement)(`img`,{alt:``,...t,key:t.key}):ho.createElement(e,t)}var ho,go,_o,X=e((()=>{rt(),ho=t(l(),1),Vr(),ro(),Se(),Kn(),ao(),so(),lo(),ze(),go=t(l(),1),_o=Symbol.for(`react.lazy`)})),vo,yo,bo,xo,So,Co,wo,To,Eo,Do=e((()=>{vo={style:{transition:`none`}},yo=`data-base-ui-click-trigger`,bo=`data-base-ui-swipe-ignore`,xo=`data-swipe-ignore`,So=`[${bo}]`,Co=`[${xo}]`,wo={fallbackAxisSide:`none`},To={fallbackAxisSide:`end`},Eo={clipPath:`inset(50%)`,position:`fixed`,top:0,left:0}}));function Oo(e={}){let{ref:t,container:n,componentProps:r=Gn,elementProps:i}=e,a=qa(),o=No()?.portalNode,[s,c]=ko.useState(null),[l,u]=ko.useState(null),d=q(e=>{e!==null&&u(e)}),f=ko.useRef(null);H(()=>{if(n===null){f.current&&(f.current=null,u(null),c(null));return}if(a==null)return;let e=(n&&(Yt(n)?n:n.current))??o??document.body;if(e==null){f.current&&(f.current=null,u(null),c(null));return}f.current!==e&&(f.current=e,u(null),c(e))},[n,o,a]);let p=Y(`div`,r,{ref:[t,d],props:[{id:a,[Po]:``},i]});return{portalNode:l,portalSubtree:s&&p?Ao.createPortal(p,s):null}}var ko,Ao,jo,Mo,No,Po,Fo,Io=e((()=>{ko=t(l(),1),Ao=t(u(),1),_n(),Mr(),Pr(),Za(),U(),Qr(),Kn(),pi(),wa(),Er(),wr(),ka(),X(),Do(),jo=t(c(),1),Mo=ko.createContext(null),No=()=>ko.useContext(Mo),Po=Oa(`portal`),Fo=ko.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,container:o,renderGuards:s,...c}=e,{portalNode:l,portalSubtree:u}=Oo({container:o,ref:t,componentProps:e,elementProps:c}),d=ko.useRef(null),f=ko.useRef(null),p=ko.useRef(null),m=ko.useRef(null),[h,g]=ko.useState(null),_=ko.useRef(!1),v=h?.modal,y=h?.open,b=typeof s==`boolean`?s:!!h&&!h.modal&&h.open&&!!l;ko.useEffect(()=>{if(!l||v)return;function e(e){l&&e.relatedTarget&&ba(e)&&(e.type===`focusin`?_.current&&=(Sa(l),!1):(xa(l),_.current=!0))}return Nr(K(l,`focusin`,e,!0),K(l,`focusout`,e,!0))},[l,v]),H(()=>{!l||y!==!0||!_.current||(Sa(l),_.current=!1)},[y,l]);let x=ko.useMemo(()=>({beforeOutsideRef:d,afterOutsideRef:f,beforeInsideRef:p,afterInsideRef:m,portalNode:l,setFocusManagerState:g}),[l]);return(0,jo.jsxs)(ko.Fragment,{children:[u,(0,jo.jsxs)(Mo.Provider,{value:x,children:[b&&l&&(0,jo.jsx)(fi,{"data-type":`outside`,ref:d,onFocus:e=>{ba(e,l)?p.current?.focus():ga(h?h.domReference:null)?.focus()}}),b&&l&&(0,jo.jsx)(`span`,{"aria-owns":l.id,style:Eo}),l&&Ao.createPortal(a,l),b&&l&&(0,jo.jsx)(fi,{"data-type":`outside`,ref:f,onFocus:e=>{ba(e,l)?m.current?.focus():(ha(h?h.domReference:null)?.focus(),h?.closeOnFocusOut&&h?.onOpenChange(!1,G(`focus-out`,e.nativeEvent)))}})]})]})})}));function Lo(){let e=new Map;return{emit(t,n){e.get(t)?.forEach(e=>e(n))},on(t,n){e.has(t)||e.set(t,new Set),e.get(t).add(n)},off(t,n){e.get(t)?.delete(n)}}}var Ro=e((()=>{})),zo,Bo=e((()=>{Ro(),zo=class{nodesRef={current:[]};events=Lo();addNode(e){this.nodesRef.current.push(e)}removeNode(e){let t=this.nodesRef.current.findIndex(t=>t===e);t!==-1&&this.nodesRef.current.splice(t,1)}}}));function Vo(e){let t=qa(),n=Yo(e),r=Jo();return H(()=>{if(!t)return;let e={id:t,parentId:r};return n?.addNode(e),()=>{n?.removeNode(e)}},[n,t,r]),t}function Ho(e){let{children:t,id:n}=e,r=Jo();return(0,Go.jsx)(Ko.Provider,{value:Wo.useMemo(()=>({id:n,parentId:r}),[n,r]),children:t})}function Uo(e){let{children:t,externalTree:n}=e,r=Be(()=>n??new zo).current;return(0,Go.jsx)(qo.Provider,{value:r,children:t})}var Wo,Go,Ko,qo,Jo,Yo,Xo=e((()=>{Wo=t(l(),1),Za(),U(),Ue(),Bo(),Go=t(c(),1),Ko=Wo.createContext(null),qo=Wo.createContext(null),Jo=()=>Wo.useContext(Ko)?.id||null,Yo=e=>{let t=Wo.useContext(qo);return e??t}}));function Zo(e){return e==null?e:`current`in e?e.current:e}var Qo=e((()=>{}));function $o(e,t){let n=qt(En(e));return e instanceof n.KeyboardEvent?`keyboard`:e instanceof n.FocusEvent?t||`keyboard`:`pointerType`in e?e.pointerType||`keyboard`:`touches`in e?`touch`:e instanceof n.MouseEvent?t||(e.detail===0?`keyboard`:`mouse`):``}function es(){ls=ls.filter(e=>e.deref()?.isConnected)}function ts(e){es(),e&&Kt(e)!==`body`&&(ls.push(new WeakRef(e)),ls.length>cs&&(ls=ls.slice(-20)))}function ns(){return es(),ls[ls.length-1]?.deref()}function rs(e){return e?da(e)?e:pa(e)[0]||e:null}function is(e){if(e.hasAttribute(`tabindex`)&&!e.hasAttribute(`data-tabindex`)||!e.getAttribute(`role`)?.includes(`dialog`))return;let t=fa(e).filter(e=>{let t=e.getAttribute(`data-tabindex`)||``;return da(e)||e.hasAttribute(`data-tabindex`)&&!t.startsWith(`-`)}),n=e.getAttribute(`tabindex`);t.length===0?n!==`0`&&(e.setAttribute(`tabindex`,`0`),e.setAttribute(`data-tabindex`,`0`)):(n!==`-1`||e.hasAttribute(`data-tabindex`)&&e.getAttribute(`data-tabindex`)!==`-1`)&&(e.setAttribute(`tabindex`,`-1`),e.setAttribute(`data-tabindex`,`-1`))}function as(e){let{context:t,children:n,disabled:r=!1,initialFocus:i=!0,returnFocus:a=!0,restoreFocus:o=!1,modal:s=!0,closeOnFocusOut:c=!0,openInteractionType:l=``,nextFocusableElement:u,previousFocusableElement:d,beforeContentFocusGuardRef:f,externalTree:p,getInsideElements:m}=e,h=`rootStore`in t?t.rootStore:t,g=h.useState(`open`),_=h.useState(`domReferenceElement`),v=h.useState(`floatingElement`),{events:y,dataRef:b}=h.context,x=q(()=>b.current.floatingContext?.nodeId),S=i===!1,C=Nn(_)&&S,w=Hr(i),T=Hr(a),E=Hr(l),D=Hr(g),O=Yo(p),k=No(),A=os.useRef(!1),j=os.useRef(!1),M=os.useRef(!1),N=os.useRef(null),P=os.useRef(``),F=os.useRef(``),I=os.useRef(null),L=os.useRef(null),R=Fr(I,f,k?.beforeInsideRef),ee=Fr(L,k?.afterInsideRef),z=ft(),te=ft(),ne=$r(),re=k!=null,B=Fn(v),ie=q((e=B)=>e?pa(e):[]),V=q(()=>m?.().filter(e=>e!=null)??[]);os.useEffect(()=>{if(r||!s)return;function e(e){e.key===`Tab`&&W(B,Tn(J(B)))&&ie().length===0&&!C&&Rt(e)}return K(J(B),`keydown`,e)},[r,B,s,C,ie]),os.useEffect(()=>{if(r||!g)return;let e=J(B);function t(){M.current=!1}function n(e){let t=En(e),n=V();M.current=!(W(v,t)||W(_,t)||W(k?.portalNode,t)||n.some(e=>e===t||W(e,t))),F.current=e.pointerType||`keyboard`,t?.closest(`[data-base-ui-click-trigger]`)&&(j.current=!0,te.start(0,()=>{j.current=!1}))}function i(){F.current=`keyboard`}return Nr(K(e,`pointerdown`,n,!0),K(e,`pointerup`,t,!0),K(e,`pointercancel`,t,!0),K(e,`keydown`,i,!0),t)},[r,v,_,B,g,k,te,V]),os.useEffect(()=>{if(r||!c)return;let e=J(B);function t(){j.current=!0,te.start(0,()=>{j.current=!1})}function n(e){let t=En(e);da(t)&&(N.current=t)}function i(t){let n=t.relatedTarget,r=t.currentTarget,i=En(t);s&&n==null&&i!=null&&W(v,i)&&ts(i),queueMicrotask(()=>{let a=x(),c=h.context.triggerElements,l=V(),f=n?.hasAttribute(Oa(`focus-guard`))&&[I.current,L.current,k?.beforeInsideRef.current,k?.afterInsideRef.current,k?.beforeOutsideRef.current,k?.afterOutsideRef.current,Zo(d),Zo(u)].includes(n),p=!(W(_,n)||W(v,n)||W(n,v)||W(k?.portalNode,n)||l.some(e=>e===n||W(e,n))||n!=null&&c.hasElement(n)||c.hasMatchingElement(e=>W(e,n))||f||O&&(Ta(O.nodesRef.current,a).find(e=>W(e.context?.elements.floating,n)||W(e.context?.elements.domReference,n))||Ea(O.nodesRef.current,a).find(e=>[e.context?.elements.floating,Fn(e.context?.elements.floating)].includes(n)||e.context?.elements.domReference===n)));if(r===_&&B&&is(B),o&&r!==_&&!Zi(i)&&Tn(e)===e.body){if(Zt(B)&&(B.focus(),o===`popup`)){ne.request(()=>{B.focus()});return}let e=ie(),t=N.current,n=(t&&e.includes(t)?t:null)||e[e.length-1]||B;Zt(n)&&n.focus()}if(b.current.insideReactTree){b.current.insideReactTree=!1;return}(C||!s)&&n&&p&&!j.current&&(C||n!==ns())&&(A.current=!0,h.setOpen(!1,G(lr,t)))})}function a(){M.current||(b.current.insideReactTree=!0,z.start(0,()=>{b.current.insideReactTree=!1}))}let l=Zt(_)?_:null;if(!(!v&&!l))return Nr(l&&K(l,`focusout`,i),l&&K(l,`pointerdown`,t),v&&K(v,`focusin`,n),v&&K(v,`focusout`,i),v&&k&&K(v,`focusout`,a,!0))},[r,_,v,B,s,O,k,h,c,o,ie,C,x,b,z,te,ne,u,d,V]),os.useEffect(()=>{if(r||!v||!g)return;let e=Array.from(k?.portalNode?.querySelectorAll(`[${Oa(`portal`)}]`)||[]),t=(O?Ea(O.nodesRef.current,x()):[]).find(e=>Nn(e.context?.elements.domReference||null))?.context?.elements.domReference,n=Ia([v,...e,I.current,L.current,k?.beforeOutsideRef.current,k?.afterOutsideRef.current,...V(),t,Zo(d),Zo(u),C?_:null].filter(e=>e!=null),{ariaHidden:s||C,mark:!1}),i=Ia([v,...e].filter(e=>e!=null));return()=>{i(),n()}},[g,r,_,v,s,k,C,O,x,u,d,V]),H(()=>{if(!g||r||!Zt(B))return;let e=J(B),t=Tn(e);queueMicrotask(()=>{let n=w.current,r=typeof n==`function`?n(E.current||``):n;if(r===void 0||r===!1||W(B,t))return;let i=null,a=()=>(i??=ie(B),i[0]||B),o;o=r===!0||r===null?a():Zo(r),o||=a();let s=W(B,Tn(e));Aa(o,{preventScroll:o===B,shouldFocus(){if(!D.current)return!1;if(s)return!0;let t=Tn(e);return!(t!==o&&W(B,t))}})})},[r,g,B,ie,w,E,D]),H(()=>{if(r||!B)return;let e=J(B),t=Tn(e),n=E.current==null;ts(t);function i(e){if(e.open||(P.current=$o(e.nativeEvent,F.current)),e.reason===`trigger-hover`&&e.nativeEvent.type===`mouseleave`&&(A.current=!0),e.reason===`outside-press`)if(e.nested)A.current=!1;else if(Bt(e.nativeEvent)||Vt(e.nativeEvent))A.current=!1;else{let e=!1;J(B).createElement(`div`).focus({get preventScroll(){return e=!0,!1}}),e?A.current=!1:A.current=!0}}y.on(`openchange`,i);function a(){let e=T.current,r=typeof e==`function`?e(P.current):e;if(r===void 0||r===!1)return null;r===null&&(r=!0);let i=_?.isConnected?_:null,a=t?.isConnected&&Kt(t)!==`body`?t:null,o=n?a||i:i||a;return o||=ns()||null,typeof r==`boolean`?o:Zo(r)||o||null}return()=>{y.off(`openchange`,i);let t=Tn(e),n=V(),r=W(v,t)||n.some(e=>e===t||W(e,t))||O&&Ta(O.nodesRef.current,x(),!1).some(e=>W(e.context?.elements.floating,t)),o=T.current,s=a();queueMicrotask(()=>{let n=rs(s),i=typeof o!=`boolean`;o&&!A.current&&Zt(n)&&(!(!i&&n!==t&&t!==e.body)||r)&&n.focus({preventScroll:!0}),A.current=!1})}},[r,v,B,T,E,y,O,_,x,V]),H(()=>{if(!kt||g||!v)return;let e=Tn(J(v));!Zt(e)||!jn(e)||W(v,e)&&e.blur()},[g,v]),H(()=>{if(!(r||!k))return k.setFocusManagerState({modal:s,closeOnFocusOut:c,open:g,onOpenChange:h.setOpen,domReference:_}),()=>{k.setFocusManagerState(null)}},[r,k,s,g,h,c,_]),H(()=>{if(!(r||!B))return is(B),()=>{queueMicrotask(es)}},[r,B]);let ae=!r&&(s?!C:!0)&&(re||s);return(0,ss.jsxs)(os.Fragment,{children:[ae&&(0,ss.jsx)(fi,{"data-type":`inside`,ref:R,onFocus:e=>{if(s){let e=ie();Aa(e[e.length-1])}else k?.portalNode&&(A.current=!1,ba(e,k.portalNode)?ha(_)?.focus():Zo(d??k.beforeOutsideRef)?.focus())}}),n,ae&&(0,ss.jsx)(fi,{"data-type":`inside`,ref:ee,onFocus:e=>{s?Aa(ie()[0]):k?.portalNode&&(c&&(A.current=!0),ba(e,k.portalNode)?ga(_)?.focus():Zo(u??k.afterOutsideRef)?.focus())}})]})}var os,ss,cs,ls,us=e((()=>{os=t(l(),1),_n(),Mr(),Pr(),Vr(),Wr(),Qr(),U(),ht(),Lt(),ii(),ai(),pi(),In(),Wt(),wa(),Da(),Qi(),Er(),wr(),ka(),Ma(),Ga(),Io(),Xo(),Do(),Qo(),ss=t(c(),1),cs=20,ls=[]}));function ds(e,t={}){let{enabled:n=!0,event:r=`click`,toggle:i=!0,ignoreMouse:a=!1,stickIfOpen:o=!0,touchOpenDelay:s=0,reason:c=Jn}=t,l=`rootStore`in e?e.rootStore:e,u=l.context.dataRef,d=fs.useRef(void 0),f=$r(),p=ft(),m=fs.useMemo(()=>{function e(e,t,n,r){let i=G(c,t,n);e&&r===`touch`&&s>0?p.start(s,()=>{l.setOpen(!0,i)}):l.setOpen(e,i)}function t(e,t,n){let r=u.current.openEvent,a=l.select(`domReferenceElement`)!==t;return e&&a||!e||!i?!0:r&&o?!n(r.type):!1}return{onPointerDown(e){d.current=e.pointerType},onMouseDown(n){let i=d.current,o=n.nativeEvent,s=l.select(`open`);if(n.button!==0||r===`click`||Ht(i,!0)&&a)return;let c=t(s,n.currentTarget,e=>e===`click`||e===`mousedown`),u=En(o);if(jn(u)){e(c,o,u,i);return}let p=n.currentTarget;f.request(()=>{e(c,o,p,i)})},onClick(n){if(r===`mousedown-only`)return;let i=d.current;if(r===`mousedown`&&i){d.current=void 0;return}Ht(i,!0)&&a||e(t(l.select(`open`),n.currentTarget,e=>e===`click`||e===`mousedown`||e===`keydown`||e===`keyup`),n.nativeEvent,n.currentTarget,i)},onKeyDown(){d.current=void 0}}},[u,r,a,c,l,o,i,f,p,s]);return fs.useMemo(()=>n?{reference:m}:Gn,[n,m])}var fs,ps=e((()=>{fs=t(l(),1),ii(),ht(),Kn(),In(),Wt(),Er(),wr()}));function ms(e,t){let n=null,r=null,i=!1;return{contextElement:e||void 0,getBoundingClientRect(){let a=e?.getBoundingClientRect()||{width:0,height:0,x:0,y:0},o=t.axis===`x`||t.axis===`both`,s=t.axis===`y`||t.axis===`both`,c=[`mouseenter`,`mousemove`].includes(t.dataRef.current.openEvent?.type||``)&&t.pointerType!==`touch`,l=a.width,u=a.height,d=a.x,f=a.y;return n==null&&t.x&&o&&(n=a.x-t.x),r==null&&t.y&&s&&(r=a.y-t.y),d-=n||0,f-=r||0,l=0,u=0,!i||c?(l=t.axis===`y`?a.width:0,u=t.axis===`x`?a.height:0,d=o&&t.x!=null?t.x:d,f=s&&t.y!=null?t.y:f):i&&!c&&(u=t.axis===`x`?a.height:u,l=t.axis===`y`?a.width:l),i=!0,{width:l,height:u,x:d,y:f,top:f,right:d+l,bottom:f+u,left:d}}}}function hs(e){return e!=null&&e.clientX!=null}function gs(e,t={}){let{enabled:n=!0,axis:r=`both`}=t,i=`rootStore`in e?e.rootStore:e,a=i.useState(`open`),o=i.useState(`floatingElement`),s=i.useState(`domReferenceElement`),c=i.context.dataRef,l=_s.useRef(!1),u=_s.useRef(null),[d,f]=_s.useState(),[p,m]=_s.useState([]),h=q(e=>{i.set(`positionReference`,e)}),g=q((e,t,n)=>{l.current||c.current.openEvent&&!hs(c.current.openEvent)||i.set(`positionReference`,ms(n??s,{x:e,y:t,axis:r,dataRef:c,pointerType:d}))}),_=q(e=>{a?u.current||(g(e.clientX,e.clientY,e.currentTarget),m([])):g(e.clientX,e.clientY,e.currentTarget)}),v=Ht(d)?o:a;_s.useEffect(()=>{if(!n){h(s);return}if(!v)return;function e(){u.current?.(),u.current=null}let t=qt(o);function r(t){W(o,En(t))?e():g(t.clientX,t.clientY)}return!c.current.openEvent||hs(c.current.openEvent)?u.current=K(t,`mousemove`,r):h(s),e},[v,n,o,c,s,i,g,h,p]),_s.useEffect(()=>()=>{i.set(`positionReference`,null)},[i]),_s.useEffect(()=>{n&&!o&&(l.current=!1)},[n,o]),_s.useEffect(()=>{!n&&a&&(l.current=!0)},[n,a]);let y=_s.useMemo(()=>{function e(e){f(e.pointerType)}return{onPointerDown:e,onPointerEnter:e,onMouseMove:_,onMouseEnter:_}},[_]);return _s.useMemo(()=>n?{reference:y,trigger:y}:{},[n,y])}var _s,vs=e((()=>{_s=t(l(),1),Mr(),Qr(),_n(),In(),Wt()}));function ys(){return!1}function bs(e){return{escapeKey:typeof e==`boolean`?e:e?.escapeKey??!1,outsidePress:typeof e==`boolean`?e:e?.outsidePress??!0}}function xs(e,t={}){let{enabled:n=!0,escapeKey:r=!0,outsidePress:i=!0,outsidePressEvent:a=`sloppy`,referencePress:o=ys,bubbles:s,externalTree:c}=t,l=`rootStore`in e?e.rootStore:e,u=l.useState(`open`),d=l.useState(`floatingElement`),{dataRef:f}=l.context,p=Yo(c),m=q(typeof i==`function`?i:()=>!1),h=typeof i==`function`?m:i,g=h!==!1,_=q(()=>a),{escapeKey:v,outsidePress:y}=bs(s),b=Ss.useRef(!1),x=Ss.useRef(!1),S=Ss.useRef(!1),C=Ss.useRef(!1),w=Ss.useRef(``),T=Ss.useRef(null),E=ft(),D=ft(),O=q(()=>{D.clear(),f.current.insideReactTree=!1}),k=q(e=>{let t=f.current.floatingContext?.nodeId;return(p?Ta(p.nodesRef.current,t):[]).some(t=>t.context?.open&&!t.context.dataRef.current[e])}),A=q(e=>kn(e,l.select(`floatingElement`))||kn(e,l.select(`domReferenceElement`))),j=q(e=>{o()&&l.setOpen(!1,G(Jn,e.nativeEvent))}),M=q(e=>{if(!u||!n||!r||e.key!==`Escape`||C.current||!v&&k(`__escapeKeyBubbles`))return;let t=zt(e)?e.nativeEvent:e,i=G(ur,t);l.setOpen(!1,i),i.isCanceled||e.preventDefault(),!v&&!i.isPropagationAllowed&&e.stopPropagation()}),N=q(()=>{f.current.insideReactTree=!0,D.start(0,O)}),P=q(e=>{if(!u||!n||e.button!==0)return;let t=En(e.nativeEvent);W(l.select(`floatingElement`),t)&&(b.current||(b.current=!0,x.current=!1))}),F=q(e=>{!u||!n||(e.defaultPrevented||e.nativeEvent.defaultPrevented)&&b.current&&(x.current=!0)});Ss.useEffect(()=>{if(!u||!n)return;f.current.__escapeKeyBubbles=v,f.current.__outsidePressBubbles=y;let e=new mt,t=new mt;function i(){e.clear(),C.current=!0}function a(){e.start(kt?5:0,()=>{C.current=!1})}function o(){S.current=!0,t.start(0,()=>{S.current=!1})}function s(){b.current=!1,x.current=!1}function c(){let e=w.current,t=e===`pen`||!e?`mouse`:e,n=_(),r=typeof n==`function`?n():n;return typeof r==`string`?r:r[t]}function m(e){let t=c();return t===`intentional`&&e.type!==`click`||t===`sloppy`&&e.type===`click`}function D(e){let t=f.current.floatingContext?.nodeId,n=p&&Ta(p.nodesRef.current,t).some(t=>kn(e,t.context?.elements.floating));return A(e)||n}function j(e){if(m(e)){e.type!==`click`&&!A(e)&&(t.clear(),S.current=!1),O();return}if(f.current.insideReactTree){O();return}let n=En(e),r=`[${Oa(`inert`)}]`,i=Xt(n)?n.getRootNode():null,a=Array.from((Qt(i)?i:J(l.select(`floatingElement`))).querySelectorAll(r)),o=l.context.triggerElements;if(n&&(o.hasElement(n)||o.hasMatchingElement(e=>W(e,n))))return;let s=Xt(n)?n:null;for(;s&&!on(s);){let e=ln(s);if(on(e)||!Xt(e))break;s=e}if(!(a.length&&Xt(n)&&!An(n)&&!W(n,l.select(`floatingElement`))&&a.every(e=>!W(s,e)))){if(Zt(n)&&!(`touches`in e)){let t=on(n),r=sn(n),i=/auto|scroll/,a=t||i.test(r.overflowX),o=t||i.test(r.overflowY),s=a&&n.clientWidth>0&&n.scrollWidth>n.clientWidth,c=o&&n.clientHeight>0&&n.scrollHeight>n.clientHeight,l=r.direction===`rtl`,u=c&&(l?e.offsetX<=n.offsetWidth-n.clientWidth:e.offsetX>n.clientWidth),d=s&&e.offsetY>n.clientHeight;if(u||d)return}if(!D(e)){if(c()===`intentional`&&S.current){t.clear(),S.current=!1;return}typeof h==`function`&&!h(e)||k(`__outsidePressBubbles`)||(l.setOpen(!1,G(Zn,e)),O())}}}function N(e){c()!==`sloppy`||e.pointerType===`touch`||!l.select(`open`)||!n||A(e)||j(e)}function P(e){if(c()!==`sloppy`||!l.select(`open`)||!n||A(e))return;let t=e.touches[0];t&&(T.current={startTime:Date.now(),startX:t.clientX,startY:t.clientY,dismissOnTouchEnd:!1,dismissOnMouseDown:!0},E.start(1e3,()=>{T.current&&(T.current.dismissOnTouchEnd=!1,T.current.dismissOnMouseDown=!1)}))}function F(e,t){let n=En(e);if(!n)return;let r=K(n,e.type,()=>{t(e),r()})}function I(e){w.current=`touch`,F(e,P)}function L(e){E.clear(),e.type===`pointerdown`&&(w.current=e.pointerType),!(e.type===`mousedown`&&T.current&&!T.current.dismissOnMouseDown)&&F(e,e=>{e.type===`pointerdown`?N(e):j(e)})}function R(e){if(!b.current)return;let n=x.current;if(s(),c()===`intentional`){if(e.type===`pointercancel`){n&&o();return}if(!D(e)){if(n){o();return}typeof h==`function`&&!h(e)||(t.clear(),S.current=!0,O())}}}function ee(e){if(c()!==`sloppy`||!T.current||A(e))return;let t=e.touches[0];if(!t)return;let n=Math.abs(t.clientX-T.current.startX),r=Math.abs(t.clientY-T.current.startY),i=Math.sqrt(n*n+r*r);i>5&&(T.current.dismissOnTouchEnd=!0),i>10&&(j(e),E.clear(),T.current=null)}function z(e){F(e,ee)}function te(e){c()!==`sloppy`||!T.current||A(e)||(T.current.dismissOnTouchEnd&&j(e),E.clear(),T.current=null)}function ne(e){F(e,te)}let re=J(d),B=Nr(r&&Nr(K(re,`keydown`,M),K(re,`compositionstart`,i),K(re,`compositionend`,a)),g&&Nr(K(re,`click`,L,!0),K(re,`pointerdown`,L,!0),K(re,`pointerup`,R,!0),K(re,`pointercancel`,R,!0),K(re,`mousedown`,L,!0),K(re,`mouseup`,R,!0),K(re,`touchstart`,I,!0),K(re,`touchmove`,z,!0),K(re,`touchend`,ne,!0)));return()=>{B(),e.clear(),t.clear(),s(),S.current=!1}},[f,d,r,g,h,u,n,v,y,M,O,_,k,A,p,l,E]),Ss.useEffect(O,[h,O]);let I=Ss.useMemo(()=>({onKeyDown:M,onPointerDown:j,onClick:j}),[M,j]),L=Ss.useMemo(()=>({onKeyDown:M,onPointerDown:F,onMouseDown:F,onClickCapture:N,onMouseDownCapture(e){N(),P(e)},onPointerDownCapture(e){N(),P(e)},onMouseUpCapture:N,onTouchEndCapture:N,onTouchMoveCapture:N}),[M,N,P,F]);return Ss.useMemo(()=>n?{reference:I,floating:L,trigger:I}:{},[n,I,L])}var Ss,Cs=e((()=>{Ss=t(l(),1),Mr(),Pr(),ai(),Qr(),ht(),_n(),Lt(),Xo(),Er(),wr(),ka(),In(),Wt(),Da()}));function ws(e,t,n){let{reference:r,floating:i}=e,a=bi(t),o=xi(t),s=yi(o),c=gi(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=_i(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function Ts(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=hi(t,e),p=ki(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Ai(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Ai(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}function Es(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ds(e){return ji.some(t=>e[t]>=0)}async function Os(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=gi(n),s=_i(n),c=bi(n)===`y`,l=Ns.has(o)?-1:1,u=a&&c?-1:1,d=hi(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs=e((()=>{Hi(),ks=50,As=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:Ts},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ws(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<ks&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ws(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},js=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=hi(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=gi(r),_=bi(o),v=gi(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Di(o)]:Ci(o)),x=p!==`none`;!d&&x&&b.push(...Ei(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Si(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==bi(t))||T.every(e=>bi(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=bi(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Ms=function(e){return e===void 0&&(e={}),{name:`hide`,options:e,async fn(t){let{rects:n,platform:r}=t,{strategy:i=`referenceHidden`,...a}=hi(e,t);switch(i){case`referenceHidden`:{let e=Es(await r.detectOverflow(t,{...a,elementContext:`reference`}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:Ds(e)}}}case`escaped`:{let e=Es(await r.detectOverflow(t,{...a,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:Ds(e)}}}default:return{}}}}},Ns=new Set([`left`,`top`]),Ps=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Os(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Fs=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=hi(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=bi(i),p=vi(f),m=u[p],h=u[f],g=(e,t)=>mi(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},Is=function(e){return e===void 0&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:a,middlewareData:o}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=hi(e,t),u={x:n,y:r},d=bi(i),f=vi(d),p=u[f],m=u[d],h=hi(s,t),g=typeof h==`number`?{mainAxis:h,crossAxis:0}:{mainAxis:h.mainAxis??0,crossAxis:h.crossAxis??0};if(c){let e=f===`y`?`height`:`width`,t=a.reference[f]-a.floating[e]+g.mainAxis,n=a.reference[f]+a.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){let e=f===`y`?`width`:`height`,t=Ns.has(gi(i)),n=a.reference[d]-a.floating[e]+(t&&o.offset?.[d]||0)+(t?0:g.crossAxis),r=a.reference[d]+a.reference[e]+(t?0:o.offset?.[d]||0)-(t?g.crossAxis:0);m<n?m=n:m>r&&(m=r)}return{[f]:p,[d]:m}}}},Ls=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=hi(e,t),c=await i.detectOverflow(t,s),l=gi(n),u=_i(n),d=bi(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=Mi(p-c[m],g),y=Mi(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Ni(c.left,c.right):S=p-2*Ni(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}}}));function zs(e){let t=sn(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Zt(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Pi(n)!==a||Pi(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Bs(e){return Xt(e)?e:e.contextElement}function Vs(e){let t=Bs(e);if(!Zt(t))return Ii(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=zs(t),o=(a?Pi(n.width):n.width)/r,s=(a?Pi(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Hs(e){let t=qt(e);return!an()||!t.visualViewport?uc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Us(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===qt(e)}function Ws(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Bs(e),o=Ii(1);t&&(r?Xt(r)&&(o=Vs(r)):o=Vs(e));let s=Us(a,n,r)?Hs(a):Ii(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=qt(a),t=Xt(r)?qt(r):r,n=e,i=fn(n);for(;i&&t!==n;){let e=Vs(i),t=i.getBoundingClientRect(),r=sn(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=qt(i),i=fn(n)}}return Ai({width:u,height:d,x:c,y:l})}function Gs(e,t){let n=cn(e).scrollLeft;return t?t.left+n:Ws(Jt(e)).left+n}function Ks(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Gs(e,n),y:n.top+t.scrollTop}}function qs(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Jt(r),s=t?tn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Ii(1),u=Ii(0),d=Zt(r);if((d||!a)&&((Kt(r)!==`body`||$t(o))&&(c=cn(r)),d)){let e=Ws(r);l=Vs(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Ks(o,c):Ii(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Js(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Ys(e){let t=cn(e),n=e.ownerDocument.body,r=Ni(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Ni(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Gs(e),o=-t.scrollTop;return sn(n).direction===`rtl`&&(a+=Ni(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Xs(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=qt(e),a=Jt(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!an()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Gs(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=dc&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Zs(e,t){let n=Ws(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Vs(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Qs(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Xs(e,n,t);else if(t===`document`)r=Ys(Jt(e));else if(Xt(t))r=Zs(t,n);else{let n=Hs(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ai(r)}function $s(e,t){let n=t.get(e);if(n)return n;let r=dn(e,[],!1).filter(e=>Xt(e)&&Kt(e)!==`body`),i=null,a=sn(e).position===`fixed`,o=a?ln(e):e;for(;Xt(o)&&!on(o);){let e=sn(o),t=nn(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=ln(o)}return t.set(e,r),r}function ec(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?tn(t)?[]:$s(t,this._c):[].concat(n),r],o=Qs(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Qs(t,a[e],i);s=Ni(n.top,s),c=Mi(n.right,c),l=Mi(n.bottom,l),u=Ni(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function tc(e){let{width:t,height:n}=zs(e);return{width:t,height:n}}function nc(e,t,n){let r=Zt(t),i=Jt(t),a=n===`fixed`,o=Ws(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Ii(0);if((r||!a)&&((Kt(t)!==`body`||$t(i))&&(s=cn(t)),r)){let e=Ws(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Gs(i));let l=i&&!r&&!a?Ks(i,s):Ii(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function rc(e){return sn(e).position===`static`}function ic(e,t){if(!Zt(e)||sn(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Jt(e)===n&&(n=n.ownerDocument.body),n}function ac(e,t){let n=qt(e);if(tn(e))return n;if(!Zt(e)){let t=ln(e);for(;t&&!on(t);){if(Xt(t)&&!rc(t))return t;t=ln(t)}return n}let r=ic(e,t);for(;r&&en(r)&&rc(r);)r=ic(r,t);return r&&on(r)&&rc(r)&&!nn(r)?n:r||rn(e)||n}function oc(e){return sn(e).direction===`rtl`}function sc(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function cc(e,t,n){let r=null,i,a=Jt(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=Fi(d),h=Fi(a.clientWidth-(u+f)),g=Fi(a.clientHeight-(d+p)),_=Fi(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Ni(0,Mi(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!sc(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=qt(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function lc(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Bs(e),u=i||a?[...l?dn(l):[],...t?dn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?cc(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Ws(e):null;c&&g();function g(){let t=Ws(e);h&&!sc(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc=e((()=>{Rs(),Hi(),_n(),uc=Ii(0),dc=25,fc=async function(e){let t=this.getOffsetParent||ac,n=this.getDimensions,r=await n(e.floating);return{reference:nc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},pc={convertOffsetParentRelativeRectToViewportRelativeRect:qs,getDocumentElement:Jt,getClippingRect:ec,getOffsetParent:ac,getElementRects:fc,getClientRects:Js,getDimensions:tc,getScale:Vs,isElement:Xt,isRTL:oc},mc=Ps,hc=Fs,gc=js,_c=Ls,vc=Ms,yc=Is,bc=(e,t,n)=>{let r=new Map,i=n??{},a={...pc,...i.platform,_c:r};return As(e,t,{...i,platform:a})}}));function Sc(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e==`function`&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e==`object`){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Sc(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){let n=i[r];if(!(n===`_owner`&&e.$$typeof)&&!Sc(e[n],t[n]))return!1}return!0}return e!==e&&t!==t}function Cc(e){return typeof window>`u`?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function wc(e,t){let n=Cc(e);return Math.round(t*n)/n}function Tc(e){let t=Dc.useRef(e);return Ac(()=>{t.current=e}),t}function Ec(e){e===void 0&&(e={});let{placement:t=`bottom`,strategy:n=`absolute`,middleware:r=[],platform:i,elements:{reference:a,floating:o}={},transform:s=!0,whileElementsMounted:c,open:l}=e,[u,d]=Dc.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=Dc.useState(r);Sc(f,r)||p(r);let[m,h]=Dc.useState(null),[g,_]=Dc.useState(null),v=Dc.useCallback(e=>{e!==S.current&&(S.current=e,h(e))},[]),y=Dc.useCallback(e=>{e!==C.current&&(C.current=e,_(e))},[]),b=a||m,x=o||g,S=Dc.useRef(null),C=Dc.useRef(null),w=Dc.useRef(u),T=c!=null,E=Tc(c),D=Tc(i),O=Tc(l),k=Dc.useCallback(()=>{if(!S.current||!C.current)return;let e={placement:t,strategy:n,middleware:f};D.current&&(e.platform=D.current),bc(S.current,C.current,e).then(e=>{let t={...e,isPositioned:O.current!==!1};A.current&&!Sc(w.current,t)&&(w.current=t,kc.flushSync(()=>{d(t)}))})},[f,t,n,D,O]);Ac(()=>{l===!1&&w.current.isPositioned&&(w.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[l]);let A=Dc.useRef(!1);Ac(()=>(A.current=!0,()=>{A.current=!1}),[]),Ac(()=>{if(b&&(S.current=b),x&&(C.current=x),b&&x){if(E.current)return E.current(b,x,k);k()}},[b,x,k,E,T]);let j=Dc.useMemo(()=>({reference:S,floating:C,setReference:v,setFloating:y}),[v,y]),M=Dc.useMemo(()=>({reference:b,floating:x}),[b,x]),N=Dc.useMemo(()=>{let e={position:n,left:0,top:0};if(!M.floating)return e;let t=wc(M.floating,u.x),r=wc(M.floating,u.y);return s?{...e,transform:`translate(`+t+`px, `+r+`px)`,...Cc(M.floating)>=1.5&&{willChange:`transform`}}:{position:n,left:t,top:r}},[n,s,M.floating,u.x,u.y]);return Dc.useMemo(()=>({...u,update:k,refs:j,elements:M,floatingStyles:N}),[u,k,j,M,N])}var Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc=e((()=>{xc(),Dc=t(l(),1),Oc=t(l(),1),kc=t(u(),1),Ac=typeof document<`u`?Oc.useLayoutEffect:function(){},jc=(e,t)=>{let n=mc(e);return{name:n.name,fn:n.fn,options:[e,t]}},Mc=(e,t)=>{let n=hc(e);return{name:n.name,fn:n.fn,options:[e,t]}},Nc=(e,t)=>({fn:yc(e).fn,options:[e,t]}),Pc=(e,t)=>{let n=gc(e);return{name:n.name,fn:n.fn,options:[e,t]}},Fc=(e,t)=>{let n=_c(e);return{name:n.name,fn:n.fn,options:[e,t]}},Ic=(e,t)=>{let n=vc(e);return{name:n.name,fn:n.fn,options:[e,t]}}})),Rc=e((()=>{}));function zc(e){let t=Bc.useRef(!0);t.current&&(t.current=!1,e())}var Bc,Vc=e((()=>{Bc=t(l(),1)})),Z,Hc=e((()=>{rt(),Z=(e,t,n,r,i,a,...o)=>{if(o.length>0)throw Error(nt(1));let s;if(e&&t&&n&&r&&i&&a)s=(o,s,c,l)=>a(e(o,s,c,l),t(o,s,c,l),n(o,s,c,l),r(o,s,c,l),i(o,s,c,l),s,c,l);else if(e&&t&&n&&r&&i)s=(a,o,s,c)=>i(e(a,o,s,c),t(a,o,s,c),n(a,o,s,c),r(a,o,s,c),o,s,c);else if(e&&t&&n&&r)s=(i,a,o,s)=>r(e(i,a,o,s),t(i,a,o,s),n(i,a,o,s),a,o,s);else if(e&&t&&n)s=(r,i,a,o)=>n(e(r,i,a,o),t(r,i,a,o),i,a,o);else if(e&&t)s=(n,r,i,a)=>t(e(n,r,i,a),r,i,a);else if(e)s=e;else throw Error(`Missing arguments`);return s}}));function Uc(){return{s:rl,v:void 0,o:null,p:null}}function Wc(e){return e instanceof nl?e.deref():e}function Gc(e,t={}){let n=Uc(),{resultEqualityCheck:r,maxSize:i}=t,a=i!==void 0;if(a&&(!Number.isInteger(i)||i<1))throw TypeError(`maxSize must be a positive integer, received: ${i}`);let o=null,s=0,c,l=0;function u(){s>=i&&(o=n,n=Uc(),s=0)}function d(){let t=n,{length:i}=arguments;for(let e=0,n=i;e<n;e++){let n=arguments[e];if(typeof n==`function`||typeof n==`object`&&n){let e=t.o;e===null&&(t.o=e=new WeakMap);let r=e.get(n);r===void 0?(t=Uc(),e.set(n,t)):t=r}else{let e=t.p;e===null&&(t.p=e=new Map);let r=e.get(n);r===void 0?(t=Uc(),e.set(n,t),s++):t=r}}if(t.s===il)return t.v;if(o!==null){let e=o;for(let t=0,n=i;t<n;t++){let n=arguments[t],r;if(typeof n==`function`||typeof n==`object`&&n){let t=e.o;r=t===null?void 0:t.get(n)}else{let t=e.p;r=t===null?void 0:t.get(n)}if(r===void 0){e=null;break}e=r}if(e!==null&&e.s===il){let n=t;return n.s=il,n.v=e.v,u(),e.v}}let d=t,f=e.apply(null,arguments);if(l++,r){let e=Wc(c);e!=null&&r(e,f)&&(f=e,l!==0&&l--),c=typeof f==`object`&&f||typeof f==`function`?new nl(f):f}return d.s=il,d.v=f,a&&u(),f}return d.clearCache=()=>{n=Uc(),o=null,s=0,d.resetResultsCount()},d.resultsCount=()=>l,d.resetResultsCount=()=>{l=0},d}function Kc(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!=`function`)throw TypeError(t)}function qc(e,t=`expected all items to be functions, instead received the following types: `){if(!e.every(e=>typeof e==`function`)){let n=e.map(e=>typeof e==`function`?`function ${e.name||`unnamed`}()`:typeof e).join(`, `);throw TypeError(`${t}[${n}]`)}}function Jc(e){let t=Array.isArray(e[0])?e[0]:e;return qc(t,`createSelector expects all input-selectors to be functions, but received the following types: `),t}function Yc(e,...t){let n=typeof e==`function`?{memoize:e,memoizeOptions:t}:e,r=(...e)=>{let t=0,r=0,i,a={},o=e.pop();typeof o==`object`&&(a=o,o=e.pop()),Kc(o,`createSelector expects an output function after the inputs, but received: [${typeof o}]`);let{memoize:s,memoizeOptions:c=[],argsMemoize:l=Gc,argsMemoizeOptions:u=[]}={...n,...a},d=ol(c),f=ol(u),p=Jc(e),m=s(function(){return t++,o.apply(null,arguments)},...d),h=l(function(){r++;let{length:e}=p,t=Array(e);for(let n=0;n<e;n++)t[n]=p[n].apply(null,arguments);return i=m.apply(null,t),i},...f);return Object.assign(h,{resultFunc:o,memoizedResultFunc:m,dependencies:p,dependencyRecomputations:()=>r,resetDependencyRecomputations:()=>{r=0},lastResult:()=>i,recomputations:()=>t,resetRecomputations:()=>{t=0},memoize:s,argsMemoize:l})};return Object.assign(r,{withTypes:()=>r}),r}function Xc(e){let t;return{get(n){return t&&e(t.key,n)?t.value:al},put(e,n){t={key:e,value:n}},findMatchingEntry(e,n){let r=t;return r!==void 0&&n(r.value,e)?r:void 0},clear(){t=void 0}}}function Zc(e,t){let n=[];function r(e){let r=n.findIndex(n=>t(n.key,e));if(r>-1){let e=n[r];return r>0&&(n.splice(r,1),n.unshift(e)),e.value}return al}function i(t,r){n.unshift({key:t,value:r}),n.length>e&&n.pop()}function a(e,t){let r=n,{length:i}=r;for(let n=0;n<i;n++){let i=r[n];if(t(i.value,e))return i}}function o(){n=[]}return{get:r,put:i,findMatchingEntry:a,clear:o}}function Qc(e){return function(t,n){if(t===null||n===null||t.length!==n.length)return!1;let{length:r}=t;for(let i=0;i<r;i++)if(!e(t[i],n[i]))return!1;return!0}}function $c(e,t){let{equalityCheck:n=sl,maxSize:r=1,resultEqualityCheck:i}=typeof t==`object`?t:{equalityCheck:t},a=Qc(n),o=0,s=r<=1?Xc(a):Zc(r,a);function c(){let t=s.get(arguments);if(t===al){if(t=e.apply(null,arguments),o++,i){let e=s.findMatchingEntry(t,i);e&&(t=e.value,o!==0&&o--)}s.put(arguments,t)}return t}return c.clearCache=()=>{s.clear(),c.resetResultsCount()},c.resultsCount=()=>o,c.resetResultsCount=()=>{o=0},c}var el,tl,nl,rl,il,al,ol,sl,cl=e((()=>{el=class{constructor(e){this.value=e}deref(){return this.value}},tl=()=>typeof WeakRef>`u`?el:WeakRef,nl=tl(),rl=0,il=1,al=Symbol(`NOT_FOUND`),ol=e=>Array.isArray(e)?e:[e],sl=(e,t)=>e===t})),ll=e((()=>{cl(),Yc({memoize:$c,memoizeOptions:{maxSize:1,equalityCheck:Object.is}})}));function ul(e,t,n,r,i){return _l(e,t,n,r,i)}function dl(e,t,n,r,i){let a=ml.useCallback(()=>t(e.getSnapshot(),n,r,i),[e,t,n,r,i]);return(0,hl.useSyncExternalStore)(e.subscribe,a,a)}function fl(e,t,n,r,i){let a=We();if(!a)return dl(e,t,n,r,i);let o=a.syncIndex;a.syncIndex+=1;let s;return a.didInitialize?(s=a.syncHooks[o],(s.store!==e||s.selector!==t||!Object.is(s.a1,n)||!Object.is(s.a2,r)||!Object.is(s.a3,i))&&(s.store!==e&&(a.didChangeStore=!0),s.store=e,s.selector=t,s.a1=n,s.a2=r,s.a3=i,s.value=t(e.getSnapshot(),n,r,i))):(s={store:e,selector:t,a1:n,a2:r,a3:i,value:t(e.getSnapshot(),n,r,i)},a.syncHooks.push(s)),s.value}function pl(e,t,n,r,i){return(0,gl.useSyncExternalStoreWithSelector)(e.subscribe,e.getSnapshot,e.getSnapshot,e=>t(e,n,r,i))}var ml,hl,gl,_l,vl=e((()=>{ml=t(l(),1),hl=n(),gl=t(r(),1),eo(),Qe(),_l=Qa(19)?fl:pl,Ge({before(e){e.syncIndex=0,e.didInitialize||(e.syncTick=1,e.syncHooks=[],e.didChangeStore=!0,e.getSnapshot=()=>{let t=!1;for(let n=0;n<e.syncHooks.length;n+=1){let r=e.syncHooks[n],i=r.selector(r.store.state,r.a1,r.a2,r.a3);Object.is(r.value,i)||(t=!0,r.value=i)}return t&&(e.syncTick+=1),e.syncTick})},after(e){e.syncHooks.length>0&&(e.didChangeStore&&(e.didChangeStore=!1,e.subscribe=t=>{let n=new Set;for(let t of e.syncHooks)n.add(t.store);let r=[];for(let e of n)r.push(e.subscribe(t));return()=>{for(let e of r)e()}}),(0,hl.useSyncExternalStore)(e.subscribe,e.getSnapshot,e.getSnapshot))}})})),yl,bl=e((()=>{vl(),yl=class{constructor(e){this.state=e,this.listeners=new Set,this.updateTick=0}subscribe=e=>(this.listeners.add(e),()=>{this.listeners.delete(e)});getSnapshot=()=>this.state;setState(e){if(this.state===e)return;this.state=e,this.updateTick+=1;let t=this.updateTick;for(let n of this.listeners){if(t!==this.updateTick)return;n(e)}}update(e){for(let t in e)if(!Object.is(this.state[t],e[t])){this.setState({...this.state,...e});return}}set(e,t){Object.is(this.state[e],t)||this.setState({...this.state,[e]:t})}notifyAll(){let e={...this.state};this.setState(e)}use(e,t,n,r){return ul(this,e,t,n,r)}}})),xl,Sl,Cl=e((()=>{xl=t(l(),1),bl(),vl(),Qr(),U(),Kn(),Sl=class extends yl{constructor(e,t={},n){super(e),this.context=t,this.selectors=n}useSyncedValue(e,t){xl.useDebugValue(e);let n=this;H(()=>{n.state[e]!==t&&n.set(e,t)},[n,e,t])}useSyncedValueWithCleanup(e,t){let n=this;H(()=>(n.state[e]!==t&&n.set(e,t),()=>{n.set(e,void 0)}),[n,e,t])}useSyncedValues(e){let t=this;H(()=>{t.update(e)},[t,...Object.values(e)])}useControlledProp(e,t){xl.useDebugValue(e);let n=this,r=t!==void 0;H(()=>{r&&!Object.is(n.state[e],t)&&n.setState({...n.state,[e]:t})},[n,e,t,r])}select(e,t,n,r){let i=this.selectors[e];return i(this.state,t,n,r)}useState(e,t,n,r){return xl.useDebugValue(e),ul(this,this.selectors[e],t,n,r)}useContextCallback(e,t){xl.useDebugValue(e);let n=q(t??Un);this.context[e]=n}useStateSetter(e){let t=xl.useRef(void 0);return t.current===void 0&&(t.current=t=>{this.set(e,t)}),t.current}observe(e,t){let n;n=typeof e==`function`?e:this.selectors[e];let r=n(this.state);return t(r,r,this),this.subscribe(e=>{let i=n(e);if(!Object.is(r,i)){let e=r;r=i,t(i,e,this)}})}}}));function wl(){let[,e]=Tl.useState({});return Tl.useCallback(()=>{e({})},[])}var Tl,El=e((()=>{Tl=t(l(),1)})),Dl=e((()=>{l(),u(),c()})),Ol=e((()=>{Hc(),ll(),vl(),bl(),Cl(),Dl()})),kl=e((()=>{In(),Da(),Wt(),Qi(),wa()})),Al,jl,Ml=e((()=>{Ol(),Ro(),kl(),Al={open:Z(e=>e.open),transitionStatus:Z(e=>e.transitionStatus),domReferenceElement:Z(e=>e.domReferenceElement),referenceElement:Z(e=>e.positionReference??e.referenceElement),floatingElement:Z(e=>e.floatingElement),floatingId:Z(e=>e.floatingId)},jl=class extends Sl{constructor(e){let{syncOnly:t,nested:n,onOpenChange:r,triggerElements:i,...a}=e;super({...a,positionReference:a.referenceElement,domReferenceElement:a.referenceElement},{onOpenChange:r,dataRef:{current:{}},events:Lo(),nested:n,triggerElements:i},Al),this.syncOnly=t}syncOpenEvent=(e,t)=>{(!e||!this.state.open||t!=null&&Ut(t))&&(this.context.dataRef.current.openEvent=e?t:void 0)};dispatchOpenChange=(e,t)=>{this.syncOpenEvent(e,t.event);let n={open:e,reason:t.reason,nativeEvent:t.event,nested:this.context.nested,triggerElement:t.trigger};this.context.events.emit(`openchange`,n)};setOpen=(e,t)=>{if(this.syncOnly){this.context.onOpenChange?.(e,t);return}this.dispatchOpenChange(e,t),this.context.onOpenChange?.(e,t)}}}));function Nl(e){let{popupStore:t,treatPopupAsFloatingElement:n=!1,floatingRootContext:r,floatingId:i,nested:a,onOpenChange:o}=e,s=t.useState(`open`),c=t.useState(`activeTriggerElement`),l=t.useState(n?`popupElement`:`positionerElement`),u=t.context.triggerElements,d=o,f=Pl.useRef(null);r===void 0&&f.current===null&&(f.current=new jl({open:s,transitionStatus:void 0,referenceElement:c,floatingElement:l,triggerElements:u,onOpenChange:d,floatingId:i,syncOnly:!0,nested:a}));let p=r??f.current;return t.useSyncedValue(`floatingId`,i),H(()=>{let e={open:s,floatingId:i,referenceElement:c,floatingElement:l};Xt(c)&&(e.domReferenceElement=c),p.state.positionReference===p.state.referenceElement&&(e.positionReference=c),p.update(e)},[s,i,c,l,p]),p.context.onOpenChange=d,p.context.nested=a,p}var Pl,Fl=e((()=>{Pl=t(l(),1),U(),_n(),Ml()}));function Il(e,t=!1,n=!1){let[r,i]=Ll.useState(e&&t?`idle`:void 0),[a,o]=Ll.useState(e);return e&&!a&&(o(!0),i(`starting`)),!e&&a&&r!==`ending`&&!n&&i(`ending`),!e&&!a&&r===`ending`&&i(void 0),H(()=>{if(!e&&a&&r!==`ending`&&n){let e=ri.request(()=>{i(`ending`)});return()=>{ri.cancel(e)}}},[e,a,r,n]),H(()=>{if(!e||t)return;let n=ri.request(()=>{i(void 0)});return()=>{ri.cancel(n)}},[t,e]),H(()=>{if(!e||!t)return;e&&a&&r!==`idle`&&i(`starting`);let n=ri.request(()=>{i(`idle`)});return()=>{ri.cancel(n)}},[t,e,a,r]),{mounted:a,setMounted:o,transitionStatus:r}}var Ll,Rl=e((()=>{Ll=t(l(),1),U(),ii()})),zl,Bl,Vl,Hl,Ul=e((()=>{zl=function(e){return e.startingStyle=`data-starting-style`,e.endingStyle=`data-ending-style`,e}({}),Bl={[zl.startingStyle]:``},Vl={[zl.endingStyle]:``},Hl={transitionStatus(e){return e===`starting`?Bl:e===`ending`?Vl:null}}}));function Wl(e,t=!1,n=!0){let r=$r();return q((i,a=null)=>{r.cancel();let o=Zo(e);if(o==null)return;let s=o,c=()=>{Gl.flushSync(i)};if(typeof s.getAnimations!=`function`||globalThis.BASE_UI_ANIMATIONS_DISABLED){i();return}function l(){Promise.all(s.getAnimations().map(e=>e.finished)).then(()=>{a?.aborted||c()}).catch(()=>{if(n){a?.aborted||c();return}let e=s.getAnimations();!a?.aborted&&e.length>0&&e.some(e=>e.pending||e.playState!==`finished`)&&l()})}if(t){let e=zl.startingStyle;if(!s.hasAttribute(e)){r.request(l);return}let t=new MutationObserver(()=>{s.hasAttribute(e)||(t.disconnect(),l())});t.observe(s,{attributes:!0,attributeFilter:[e]}),a?.addEventListener(`abort`,()=>t.disconnect(),{once:!0});return}r.request(l)})}var Gl,Kl=e((()=>{Gl=t(u(),1),ii(),Qr(),Qo(),Ul()}));function ql(e){let{enabled:t=!0,open:n,ref:r,onComplete:i}=e,a=q(i),o=Wl(r,n,!1);Jl.useEffect(()=>{if(!t)return;let e=new AbortController;return o(a,e.signal),()=>{e.abort()}},[t,n,a,o])}var Jl,Yl=e((()=>{Jl=t(l(),1),Qr(),Kl()}));function Xl(e){return t=>t===`touch`?e.current:!0}function Zl(e,t,n=!1){let r=qa(),i=Jo()!=null,a=cu.useRef(null);e===void 0&&a.current===null&&(a.current=t(r,i));let o=e??a.current;return Nl({popupStore:o,treatPopupAsFloatingElement:n,floatingRootContext:o.state.floatingRootContext,floatingId:r,nested:i,onOpenChange:o.setOpen}),{store:o,internalStore:a.current}}function Ql(e,t){let n=cu.useRef(null),r=cu.useRef(null);return cu.useCallback(i=>{if(e===void 0)return;let a=!1;if(n.current!==null){let e=n.current,i=r.current,o=t.context.triggerElements.getById(e);i&&o===i&&(t.context.triggerElements.delete(e),a=!0),n.current=null,r.current=null}if(i!==null&&(n.current=e,r.current=i,t.context.triggerElements.add(e,i),a=!0),a){let e=t.context.triggerElements.size;t.select(`open`)&&t.state.triggerCount!==e&&t.set(`triggerCount`,e)}},[t,e])}function $l(e,t,n,r=!1){t?e.preventUnmountingOnClose=!1:r&&(e.preventUnmountingOnClose=!0);let i=n?.id??null;(i||t)&&(e.activeTriggerId=i,e.activeTriggerElement=n??null)}function eu(e){let t=!1;return e.preventUnmountOnClose=()=>{t=!0},()=>t}function tu(e,t,n,r={}){let i=n.reason,a=i===Yn,o=t&&i===`trigger-focus`,s=!t&&(i===`trigger-press`||i===`escape-key`),c=eu(n);if(e.context.onOpenChange?.(t,n),n.isCanceled)return;r.onBeforeDispatch?.(),e.state.floatingRootContext.dispatchOpenChange(t,n);let l=()=>{let i={...r.extraState,open:t};o?i.instantType=`focus`:s?i.instantType=`dismiss`:a&&(i.instantType=void 0),$l(i,t,n.trigger,c()),e.update(i)};a?lu.flushSync(l):l()}function nu(e,t,n,r){zc(()=>{t===void 0&&e.state.open===!1&&n&&(e.state={...e.state,open:!0,activeTriggerId:r,preventUnmountingOnClose:!1})})}function ru(e,t,n,r){let i=n.useState(`isMountedByTrigger`,e),a=Ql(e,n),o=q(t=>{if(a(t),!t)return;let i=n.select(`open`),o=n.select(`activeTriggerId`);if(o===e){n.update({activeTriggerElement:t,...i?r:null});return}o==null&&i&&n.update({activeTriggerId:e,activeTriggerElement:t,...r})});return H(()=>{i&&n.update({activeTriggerElement:t.current,...r})},[i,n,t,...Object.values(r)]),{registerTrigger:o,isMountedByThisTrigger:i}}function iu(e,t={}){let{closeOnActiveTriggerUnmount:n=!1}=t,r=e.useState(`open`);H(()=>{if(!r){e.state.triggerCount!==0&&e.set(`triggerCount`,0);return}let t=e.context.triggerElements.size,i={};e.state.triggerCount!==t&&(i.triggerCount=t);let a=e.select(`activeTriggerId`),o=null;if(a){let t=e.context.triggerElements.getById(a);t?t!==e.state.activeTriggerElement&&(i.activeTriggerElement=t):o=a}if(!o&&!a&&t===1){let t=e.context.triggerElements.entries().next();if(!t.done){let[e,n]=t.value;i.activeTriggerId=e,i.activeTriggerElement=n}}(i.triggerCount!==void 0||i.activeTriggerId!==void 0||i.activeTriggerElement!==void 0)&&e.update(i),o&&n&&queueMicrotask(()=>{if(e.select(`open`)&&e.select(`activeTriggerId`)===o&&!e.context.triggerElements.getById(o)){let t=G(qn);e.setOpen(!1,t),t.isCanceled||e.update({activeTriggerId:null,activeTriggerElement:null})}})},[r,e,e.useState(`triggerCount`),n])}function au(e,t,n){let{mounted:r,setMounted:i,transitionStatus:a}=Il(e),o=t.useState(`preventUnmountingOnClose`),s=e?!1:o;t.useSyncedValues({mounted:r,transitionStatus:a,preventUnmountingOnClose:s});let c=q(()=>{i(!1),t.update({activeTriggerId:null,activeTriggerElement:null,mounted:!1,preventUnmountingOnClose:!1}),n?.(),t.context.onOpenChangeComplete?.(!1)});return ql({enabled:r&&!e&&!s,open:e,ref:t.context.popupRef,onComplete(){e||c()}}),{forceUnmount:c,transitionStatus:a}}function ou(e,t){e.useSyncedValues(t),H(()=>()=>{e.update({activeTriggerProps:Gn,inactiveTriggerProps:Gn,popupProps:Gn})},[e])}function su(e,t){H(()=>{!t&&e.state.openMethod!==null&&e.set(`openMethod`,null)},[t,e]),H(()=>()=>{e.state.openMethod!==null&&e.set(`openMethod`,null)},[e])}var cu,lu,uu,du=e((()=>{cu=t(l(),1),lu=t(u(),1),Kn(),Za(),Qr(),U(),Vc(),wn(),Xo(),Fl(),Rl(),Yl(),Er(),wr(),uu={tabIndex:-1,[vn]:``}})),fu,pu=e((()=>{fu=class{constructor(){this.elementsSet=new Set,this.idMap=new Map}add(e,t){let n=this.idMap.get(e);n!==t&&(n!==void 0&&this.elementsSet.delete(n),this.elementsSet.add(t),this.idMap.set(e,t))}delete(e){let t=this.idMap.get(e);t&&(this.elementsSet.delete(t),this.idMap.delete(e))}hasElement(e){return this.elementsSet.has(e)}hasMatchingElement(e){for(let t of this.elementsSet)if(e(t))return!0;return!1}getById(e){return this.idMap.get(e)}entries(){return this.idMap.entries()}elements(){return this.elementsSet.values()}get size(){return this.idMap.size}}}));function mu(){return new jl({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:new fu,floatingId:void 0,syncOnly:!1,nested:!1,onOpenChange:void 0})}var hu=e((()=>{Tu(),Ml()}));function gu(){return{open:!1,openProp:void 0,mounted:!1,transitionStatus:void 0,floatingRootContext:mu(),floatingId:void 0,triggerCount:0,preventUnmountingOnClose:!1,payload:void 0,activeTriggerId:null,activeTriggerElement:null,triggerIdProp:void 0,popupElement:null,positionerElement:null,activeTriggerProps:Gn,inactiveTriggerProps:Gn,popupProps:Gn}}function _u(e,t,n=!1){return new jl({open:!1,transitionStatus:void 0,floatingElement:null,referenceElement:null,triggerElements:e,floatingId:t,syncOnly:!0,nested:n,onOpenChange:void 0})}function vu(e,t){return t!==void 0&&xu(e)&&bu(e)===t}function yu(e,t){return vu(e,t)?!0:t!==void 0&&xu(e)&&bu(e)==null&&e.triggerCount===1}var bu,xu,Su,Cu,wu=e((()=>{Ol(),Kn(),Ml(),hu(),bu=Z(e=>e.triggerIdProp??e.activeTriggerId),xu=Z(e=>e.openProp??e.open),Su=Z(e=>(e.popupElement?.id??e.floatingId)||void 0),Cu={open:xu,mounted:Z(e=>e.mounted),transitionStatus:Z(e=>e.transitionStatus),floatingRootContext:Z(e=>e.floatingRootContext),triggerCount:Z(e=>e.triggerCount),preventUnmountingOnClose:Z(e=>e.preventUnmountingOnClose),payload:Z(e=>e.payload),activeTriggerId:bu,activeTriggerElement:Z(e=>e.mounted?e.activeTriggerElement:null),popupId:Su,isTriggerActive:Z((e,t)=>t!==void 0&&bu(e)===t),isOpenedByTrigger:Z((e,t)=>vu(e,t)),isMountedByTrigger:Z((e,t)=>t!==void 0&&bu(e)===t&&e.mounted),triggerProps:Z((e,t)=>t?e.activeTriggerProps:e.inactiveTriggerProps),triggerPopupId:Z((e,t)=>yu(e,t)?Su(e):void 0),popupProps:Z(e=>e.popupProps),popupElement:Z(e=>e.popupElement),positionerElement:Z(e=>e.positionerElement)}})),Tu=e((()=>{Rc(),du(),pu(),wu()}));function Eu(e){let{open:t=!1,onOpenChange:n,elements:r={}}=e,i=qa(),a=Jo()!=null,o=Be(()=>new jl({open:t,transitionStatus:void 0,onOpenChange:n,referenceElement:r.reference??null,floatingElement:r.floating??null,triggerElements:new fu,floatingId:i,syncOnly:!1,nested:a})).current;return H(()=>{let e={open:t,floatingId:i};r.reference!==void 0&&(e.referenceElement=r.reference,e.domReferenceElement=Xt(r.reference)?r.reference:null),r.floating!==void 0&&(e.floatingElement=r.floating),o.update(e)},[t,i,r.reference,r.floating,o]),o.context.onOpenChange=n,o.context.nested=a,o}var Du=e((()=>{_n(),Za(),U(),Ue(),Tu(),Xo(),Ml()}));function Ou(e={}){let{nodeId:t,externalTree:n}=e,r=Eu(e),i=e.rootContext||r,a=i.useState(`referenceElement`),o=i.useState(`floatingElement`),s=i.useState(`domReferenceElement`),c=i.useState(`open`),l=i.useState(`floatingId`),[u,d]=ku.useState(null),[f,p]=ku.useState(void 0),[m,h]=ku.useState(void 0),g=ku.useRef(null),_=Yo(n),v=ku.useMemo(()=>({reference:a,floating:o,domReference:s}),[a,o,s]),y=Ec({...e,elements:{...v,...u&&{reference:u}}}),b=Xt(f)?f:null,x=m===void 0?i.state.floatingElement:m;i.useSyncedValue(`referenceElement`,f??null),i.useSyncedValue(`domReferenceElement`,f===void 0?s:b),i.useSyncedValue(`floatingElement`,x);let S=ku.useCallback(e=>{let t=Xt(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),getClientRects:()=>e.getClientRects(),contextElement:e}:e;d(t),y.refs.setReference(t)},[y.refs]),C=ku.useCallback(e=>{(Xt(e)||e===null)&&(g.current=e,p(e)),(Xt(y.refs.reference.current)||y.refs.reference.current===null||e!==null&&!Xt(e))&&y.refs.setReference(e)},[y.refs,p]),w=ku.useCallback(e=>{h(e),y.refs.setFloating(e)},[y.refs]),T=ku.useMemo(()=>({...y.refs,setReference:C,setFloating:w,setPositionReference:S,domReference:g}),[y.refs,C,w,S]),E=ku.useMemo(()=>({...y.elements,domReference:s}),[y.elements,s]),D=ku.useMemo(()=>({...y,dataRef:i.context.dataRef,open:c,onOpenChange:i.setOpen,events:i.context.events,floatingId:l,refs:T,elements:E,nodeId:t,rootStore:i}),[y,T,E,t,i,c,l]);return H(()=>{s&&(g.current=s)},[s]),H(()=>{i.context.dataRef.current.floatingContext=D;let e=_?.nodesRef.current.find(e=>e.id===t);e&&(e.context=D)}),ku.useMemo(()=>({...y,context:D,refs:T,elements:E,rootStore:i}),[y,T,E,D,i])}var ku,Au=e((()=>{ku=t(l(),1),U(),Lc(),_n(),Xo(),Du()}));function ju(e,t={}){let{enabled:n=!0,delay:r}=t,i=`rootStore`in e?e.rootStore:e,{events:a,dataRef:o}=i.context,s=Mu.useRef(!1),c=Mu.useRef(null),l=Mu.useRef(!0),u=ft();Mu.useEffect(()=>{let e=i.select(`domReferenceElement`);if(!n)return;let t=qt(e);function r(){let e=i.select(`domReferenceElement`);!i.select(`open`)&&Zt(e)&&e===Tn(J(e))&&(s.current=!0)}function a(){l.current=!0}function o(){l.current=!1}return Nr(K(t,`blur`,r),Nu&&K(t,`keydown`,a,!0),Nu&&K(t,`pointerdown`,o,!0))},[i,n]),Mu.useEffect(()=>{if(!n)return;function e(e){if(e.reason===`trigger-press`||e.reason===`escape-key`){let e=i.select(`domReferenceElement`);Xt(e)&&(c.current=e,s.current=!0)}}return a.on(`openchange`,e),()=>{a.off(`openchange`,e)}},[a,n,i]);let d=Mu.useMemo(()=>{function e(){s.current=!1,c.current=null}return{onMouseLeave(){e()},onFocus(t){let n=t.currentTarget;if(s.current){if(c.current===n)return;e()}let a=En(t.nativeEvent);if(Xt(a)){if(Nu&&!t.relatedTarget){if(!l.current&&!jn(a))return}else if(!Pn(a))return}let o=On(t.relatedTarget,i.context.triggerElements),{nativeEvent:d,currentTarget:f}=t,p=typeof r==`function`?r():r;if(i.select(`open`)&&o||p===0||p===void 0){i.setOpen(!0,G(Xn,d,f));return}u.start(p,()=>{s.current||i.setOpen(!0,G(Xn,d,f))})},onBlur(t){e();let n=t.relatedTarget,r=t.nativeEvent,a=Xt(n)&&n.hasAttribute(Oa(`focus-guard`))&&n.getAttribute(`data-type`)===`outside`;u.start(0,()=>{let e=i.select(`domReferenceElement`),t=Tn(J(e));!n&&t===e||W(o.current.floatingContext?.refs.floating.current,t)||W(e,t)||a||On(n??t,i.context.triggerElements)||i.setOpen(!1,G(Xn,r))})}}},[o,r,i,u]);return Mu.useMemo(()=>n?{reference:d,trigger:d}:{},[n,d])}var Mu,Nu,Pu=e((()=>{Mu=t(l(),1),Mr(),Lt(),Pr(),ai(),ht(),_n(),ka(),In(),Er(),wr(),Nu=Et&&kt}));function Fu(e){if(!e.performedPointerEventsMutation)return;let t=e.pointerEventsScopeElement;t&&zu.get(t)===e&&(e.pointerEventsScopeElement?.style.removeProperty(`pointer-events`),e.pointerEventsReferenceElement?.style.removeProperty(`pointer-events`),e.pointerEventsFloatingElement?.style.removeProperty(`pointer-events`),zu.delete(t)),e.performedPointerEventsMutation=!1,e.pointerEventsScopeElement=null,e.pointerEventsReferenceElement=null,e.pointerEventsFloatingElement=null}function Iu(e,t){let{scopeElement:n,referenceElement:r,floatingElement:i}=t,a=zu.get(n);a&&a!==e&&Fu(a),Fu(e),e.performedPointerEventsMutation=!0,e.pointerEventsScopeElement=n,e.pointerEventsReferenceElement=r,e.pointerEventsFloatingElement=i,zu.set(n,e),n.style.pointerEvents=`none`,r.style.pointerEvents=`auto`,i.style.pointerEvents=`auto`}function Lu(e){let t=e.context.dataRef.current,n=Be(()=>t.hoverInteractionState??Ru.create()).current;return t.hoverInteractionState||=n,ct(t.hoverInteractionState.disposeEffect),t.hoverInteractionState}var Ru,zu,Bu=e((()=>{dt(),Ue(),ht(),kl(),Ru=class e{constructor(){this.pointerType=void 0,this.interactedInside=!1,this.handler=void 0,this.blockMouseMove=!0,this.performedPointerEventsMutation=!1,this.pointerEventsScopeElement=null,this.pointerEventsReferenceElement=null,this.pointerEventsFloatingElement=null,this.restTimeoutPending=!1,this.openChangeTimeout=new mt,this.restTimeout=new mt,this.handleCloseOptions=void 0}static create(){return new e}dispose=()=>{this.openChangeTimeout.clear(),this.restTimeout.clear()};disposeEffect=()=>this.dispose},zu=new WeakMap}));function Vu(e,t={}){let{enabled:n=!0,closeDelay:r=0,nodeId:i}=t,a=`rootStore`in e?e.rootStore:e,o=a.useState(`open`),s=a.useState(`floatingElement`),c=a.useState(`domReferenceElement`),{dataRef:l}=a.context,u=Yo(),d=Jo(),f=Lu(a),p=ft(),m=q(()=>Bn(l.current.openEvent?.type,f.interactedInside)),h=q(()=>Vn(l.current.openEvent?.type)),g=q(()=>{Fu(f)});H(()=>{o||(f.pointerType=void 0,f.restTimeoutPending=!1,f.interactedInside=!1,g())},[o,f,g]),Hu.useEffect(()=>g,[g]),H(()=>{if(n&&o&&f.handleCloseOptions?.blockPointerEvents&&h()&&Xt(c)&&s){let e=c,t=s,n=J(s),r=u?.nodesRef.current.find(e=>e.id===d)?.context?.elements.floating;r&&(r.style.pointerEvents=``);let i=f.pointerEventsScopeElement===t?null:f.pointerEventsScopeElement,a=r===t?null:r;return Iu(f,{scopeElement:f.handleCloseOptions?.getScope?.()??i??a??e.closest(`[data-rootownerid]`)??n.body,referenceElement:e,floatingElement:t}),()=>{g()}}},[n,o,c,s,f,h,u,d,g]),Hu.useEffect(()=>{if(!n)return;function e(){return!!(u&&d&&Ta(u.nodesRef.current,d).length>0)}function t(e){let t=Rn(r,`close`,f.pointerType),n=()=>{a.setOpen(!1,G(Yn,e)),u?.events.emit(`floating.closed`,e)};t?f.openChangeTimeout.start(t,n):(f.openChangeTimeout.clear(),n())}function o(e){let t=En(e);if(!Mn(t)){f.interactedInside=!1;return}f.interactedInside=t?.closest(`[aria-haspopup]`)!=null}function c(){f.openChangeTimeout.clear(),p.clear(),u?.events.off(`floating.closed`,v),g()}function _(n){if(e()&&u){u.events.on(`floating.closed`,v);return}if(On(n.relatedTarget,a.context.triggerElements))return;let r=l.current.floatingContext?.nodeId??i,o=n.relatedTarget;if(!(u&&r&&Xt(o)&&Ta(u.nodesRef.current,r,!1).some(e=>W(e.context?.elements.floating,o)))){if(f.handler){f.handler(n);return}g(),h()&&!m()&&t(n)}}function v(t){!u||!d||e()||p.start(0,()=>{u.events.off(`floating.closed`,v),a.setOpen(!1,G(Yn,t)),u.events.emit(`floating.closed`,t)})}let y=s;return Nr(y&&K(y,`mouseenter`,c),y&&K(y,`mouseleave`,_),y&&K(y,`pointerdown`,o,!0),()=>{u?.events.off(`floating.closed`,v)})},[n,s,a,l,r,i,h,m,g,f,u,d,p])}var Hu,Uu=e((()=>{Hu=t(l(),1),Mr(),Pr(),U(),ai(),Qr(),ht(),_n(),Er(),wr(),Xo(),In(),Da(),Bu(),Hn()}));function Wu(e,t={}){let{enabled:n=!0,delay:r=0,handleClose:i=null,mouseOnly:a=!1,restMs:o=0,move:s=!0,triggerElementRef:c=qu,externalTree:l,isActiveTrigger:u=!0,getHandleCloseContext:d,isClosing:f,shouldOpen:p}=t,m=`rootStore`in e?e.rootStore:e,{dataRef:h,events:g}=m.context,_=Yo(l),v=Lu(m),y=Gu.useRef(!1),b=Hr(i),x=Hr(r),S=Hr(o),C=Hr(n),w=Hr(p),T=Hr(f),E=q(()=>Bn(h.current.openEvent?.type,v.interactedInside)),D=q(()=>w.current?.()!==!1),O=q((e,t,n)=>{let r=m.context.triggerElements;if(r.hasElement(t))return!e||!W(e,t);if(!Xt(n))return!1;let i=n;return r.hasMatchingElement(e=>W(e,i))&&(!e||!W(e,i))}),k=q(()=>{v.handler&&=(J(m.select(`domReferenceElement`)).removeEventListener(`mousemove`,v.handler),void 0)}),A=q(()=>{Fu(v)});return u&&(v.handleCloseOptions=b.current?.__options),Gu.useEffect(()=>k,[k]),Gu.useEffect(()=>{if(!n)return;function e(e){e.open?y.current=!1:(y.current=e.reason===Yn,k(),v.openChangeTimeout.clear(),v.restTimeout.clear(),v.blockMouseMove=!0,v.restTimeoutPending=!1)}return g.on(`openchange`,e),()=>{g.off(`openchange`,e)}},[n,g,v,k]),Gu.useEffect(()=>{if(!n)return;function e(e,t=!0){let n=Rn(x.current,`close`,v.pointerType);n?v.openChangeTimeout.start(n,()=>{m.setOpen(!1,G(Yn,e)),_?.events.emit(`floating.closed`,e)}):t&&(v.openChangeTimeout.clear(),m.setOpen(!1,G(Yn,e)),_?.events.emit(`floating.closed`,e))}let t=c.current??(u?m.select(`domReferenceElement`):null);if(!Xt(t))return;function r(e){if(v.openChangeTimeout.clear(),v.blockMouseMove=!1,a&&!Ht(v.pointerType))return;let t=zn(S.current),n=Rn(x.current,`open`,v.pointerType),r=En(e),i=e.currentTarget??null,o=m.select(`domReferenceElement`),s=i;if(Xt(r)&&!m.context.triggerElements.hasElement(r)){for(let e of m.context.triggerElements.elements())if(W(e,r)){s=e;break}}Xt(i)&&Xt(o)&&!m.context.triggerElements.hasElement(i)&&W(i,o)&&(s=o);let c=s==null?!1:O(o,s,r),l=m.select(`open`),u=T.current?.()??m.select(`transitionStatus`)===`ending`,d=!l&&u&&y.current,f=!c&&Xt(s)&&Xt(o)&&W(o,s)&&d,p=t>0&&!n,h=c&&(l||d)||f,g=!l||c;if(h){D()&&m.setOpen(!0,G(Yn,e,s));return}p||(n?v.openChangeTimeout.start(n,()=>{g&&D()&&m.setOpen(!0,G(Yn,e,s))}):g&&D()&&m.setOpen(!0,G(Yn,e,s)))}function i(t){if(E()){A();return}k();let n=J(m.select(`domReferenceElement`));v.restTimeout.clear(),v.restTimeoutPending=!1;let r=h.current.floatingContext??d?.();if(!On(t.relatedTarget,m.context.triggerElements)){if(b.current&&r){m.select(`open`)||v.openChangeTimeout.clear();let i=c.current;v.handler=b.current({...r,tree:_,x:t.clientX,y:t.clientY,onClose(){A(),k(),C.current&&!E()&&i===m.select(`domReferenceElement`)&&e(t,!0)}}),n.addEventListener(`mousemove`,v.handler),v.handler(t);return}(v.pointerType!==`touch`||!W(m.select(`floatingElement`),t.relatedTarget))&&e(t)}}return s?Nr(K(t,`mousemove`,r,{once:!0}),K(t,`mouseenter`,r),K(t,`mouseleave`,i)):Nr(K(t,`mouseenter`,r),K(t,`mouseleave`,i))},[k,A,h,x,m,n,b,v,u,O,E,a,s,S,c,_,C,d,T,D]),Gu.useMemo(()=>{if(!n)return;function e(e){v.pointerType=e.pointerType}return{onPointerDown:e,onPointerEnter:e,onMouseMove(e){let{nativeEvent:t}=e,n=e.currentTarget,r=m.select(`domReferenceElement`),i=m.select(`open`),o=O(r,n,e.target);if(a&&!Ht(v.pointerType))return;if(i&&o&&v.handleCloseOptions?.blockPointerEvents){let e=m.select(`floatingElement`);e&&Iu(v,{scopeElement:v.handleCloseOptions?.getScope?.()??n.ownerDocument.body,referenceElement:n,floatingElement:e})}let s=zn(S.current);if(i&&!o||s===0||!o&&v.restTimeoutPending&&e.movementX**2+e.movementY**2<2)return;v.restTimeout.clear();function c(){if(v.restTimeoutPending=!1,E())return;let e=m.select(`open`);!v.blockMouseMove&&(!e||o)&&D()&&m.setOpen(!0,G(Yn,t,n))}v.pointerType===`touch`?Ku.flushSync(()=>{c()}):o&&i?c():(v.restTimeoutPending=!0,v.restTimeout.start(s,c))}}},[n,v,E,O,a,m,S,D])}var Gu,Ku,qu,Ju=e((()=>{Gu=t(l(),1),Ku=t(u(),1),Mr(),Pr(),ai(),Qr(),Wr(),_n(),Er(),wr(),Xo(),In(),Wt(),Bu(),Hn(),qu={current:null}}));function Yu(e,t,n){switch(e){case`vertical`:return t;case`horizontal`:return n;default:return t||n}}function Xu(e,t){return Yu(t,e===`ArrowUp`||e===`ArrowDown`,e===`ArrowLeft`||e===`ArrowRight`)}function Zu(e,t,n){return Yu(t,e===`ArrowDown`,n?e===`ArrowLeft`:e===`ArrowRight`)||e===`Enter`||e===` `||e===``}function Qu(e,t,n){return Yu(t,n?e===bn:e===xn,e===Cn)}function $u(e,t,n,r){return t===`both`||t===`horizontal`&&r?e===nd:Yu(t,n?e===xn:e===bn,e===Sn)}function ed(e,t){let{listRef:n,activeIndex:r,onNavigate:i=()=>{},enabled:a=!0,selectedIndex:o=null,allowEscape:s=!1,loopFocus:c=!1,nested:l=!1,rtl:u=!1,virtual:d=!1,focusItemOnOpen:f=`auto`,focusItemOnHover:p=!0,openOnArrowKeyDown:m=!0,disabledIndices:h=void 0,orientation:g=`vertical`,parentOrientation:_,id:v,resetOnPointerLeave:y=!0,externalTree:b,grid:x}=t,S=x!=null,C=`rootStore`in e?e.rootStore:e,w=C.useState(`open`),T=C.useState(`floatingElement`),E=C.useState(`domReferenceElement`),D=C.context.dataRef,O=Fn(T),k=Nn(E),A=Hr(O),j=Jo(),M=Yo(b),N=td.useRef(f),P=td.useRef(o??-1),F=td.useRef(null),I=td.useRef(!0),L=q(e=>{i(P.current===-1?null:P.current,e)}),R=td.useRef(!!T),ee=td.useRef(w),z=td.useRef(!1),te=td.useRef(!1),ne=td.useRef(null),re=Hr(h),B=Hr(w),ie=Hr(o),V=Hr(y),ae=$r(),oe=$r(),se=q(()=>{function e(e){d?M?.events.emit(`virtualfocus`,e):ne.current=Aa(e,{sync:z.current,preventScroll:!0})}let t=n.current[P.current],r=te.current;t&&e(t),(z.current?e=>e():e=>ae.request(e))(()=>{let i=n.current[P.current]||t;i&&(t||e(i),pe&&(r||!I.current)&&i.scrollIntoView?.({block:`nearest`,inline:`nearest`}))})});H(()=>{D.current.orientation=g},[D,g]),H(()=>{a&&(w&&T?(P.current=o??-1,N.current&&o!=null&&(te.current=!0,L())):R.current&&(P.current=-1,L()))},[a,w,T,o,L]),H(()=>{if(a){if(!w){z.current=!1;return}if(T)if(r==null){if(z.current=!1,ie.current!=null)return;if(R.current&&(P.current=-1,se()),(!ee.current||!R.current)&&N.current&&(F.current!=null||N.current===!0&&F.current==null)){let e=0,t=()=>{n.current[0]==null?(e<2&&(e?e=>oe.request(e):queueMicrotask)(t),e+=1):(P.current=F.current==null||Zu(F.current,g,u)||l?Gi(n):Ki(n),F.current=null,L())};t()}}else Wi(n.current,r)||(P.current=r,se(),te.current=!1)}},[a,w,T,r,ie,l,n,g,u,L,se,oe]),H(()=>{if(!a||T||!M||d||!R.current)return;let e=M.nodesRef.current,t=e.find(e=>e.id===j)?.context?.elements.floating,n=Tn(J(E??t??null)),r=e.some(e=>e.context&&W(e.context.elements.floating,n));t&&!r&&I.current&&t.focus({preventScroll:!0})},[a,T,E,M,j,d]),H(()=>{ee.current=w,R.current=!!T}),H(()=>{w||(F.current=null,N.current=f)},[w,f]);let ce=r!=null,le=q(e=>{if(!B.current)return;let t=n.current.indexOf(e.currentTarget);t!==-1&&(P.current!==t||r!==t)&&(P.current=t,L(e))}),ue=q(()=>_??M?.nodesRef.current.find(e=>e.id===j)?.context?.dataRef?.current.orientation),de=q(()=>Gi(n,re.current)),fe=q(e=>{if(I.current=!1,z.current=!0,e.which===229||!B.current&&e.currentTarget===A.current)return;if(l&&$u(e.key,g,u,S)){Xu(e.key,ue())||Rt(e),C.setOpen(!1,G(dr,e.nativeEvent)),Zt(E)&&(d?M?.events.emit(`virtualfocus`,E):E.focus());return}let t=P.current,r=Gi(n,h),i=Ki(n,h);if(k||(e.key===`Home`&&(Rt(e),P.current=r,L(e)),e.key===`End`&&(Rt(e),P.current=i,L(e))),x!=null){let t=x(e,P.current,n,g,c,u,h,r,i);if(t!=null&&(P.current=t,L(e)),g===`both`)return}if(Xu(e.key,g)){if(Rt(e),w&&!d&&Tn(e.currentTarget.ownerDocument)===e.currentTarget){P.current=Zu(e.key,g,u)?r:i,L(e);return}Zu(e.key,g,u)?c?t>=i?s&&t!==n.current.length?P.current=-1:(z.current=!1,P.current=r):P.current=qi(n.current,{startingIndex:t,disabledIndices:h}):P.current=Math.min(i,qi(n.current,{startingIndex:t,disabledIndices:h})):c?t<=r?s&&t!==-1?P.current=n.current.length:(z.current=!1,P.current=i):P.current=qi(n.current,{startingIndex:t,decrement:!0,disabledIndices:h}):P.current=Math.max(r,qi(n.current,{startingIndex:t,decrement:!0,disabledIndices:h})),Wi(n.current,P.current)&&(P.current=-1),L(e)}}),pe=td.useMemo(()=>({onFocus(e){z.current=!0,le(e)},onClick:({currentTarget:e})=>e.focus({preventScroll:!0}),onMouseMove(e){z.current=!0,te.current=!1,p&&le(e)},onPointerLeave(e){if(!B.current||!I.current||e.pointerType===`touch`)return;z.current=!0;let t=e.relatedTarget;if(!(!p||n.current.includes(t))&&V.current&&(ne.current?.(),ne.current=null,P.current=-1,L(e),!d)){let e=A.current,t=Tn(J(e));e&&W(e,t)&&e.focus({preventScroll:!0})}}}),[le,B,A,p,n,L,V,d]),me=td.useMemo(()=>d&&w&&ce&&{"aria-activedescendant":`${v}-${r}`},[d,w,ce,v,r]),he=td.useMemo(()=>({"aria-orientation":g===`both`?void 0:g,...k?{}:me,onKeyDown(e){if(e.key===`Tab`&&e.shiftKey&&w&&!d){let t=En(e.nativeEvent);if(t&&!W(A.current,t))return;Rt(e),C.setOpen(!1,G(lr,e.nativeEvent)),Zt(E)&&E.focus();return}fe(e)},onPointerMove(){I.current=!0}}),[me,fe,A,g,k,C,w,d,E]),ge=td.useMemo(()=>{function e(e){C.setOpen(!0,G(dr,e.nativeEvent,e.currentTarget))}function t(e){f===`auto`&&Bt(e.nativeEvent)&&(N.current=!d)}function n(e){N.current=f,f===`auto`&&Vt(e.nativeEvent)&&(N.current=!0)}return{onKeyDown(t){let n=C.select(`open`);I.current=!1;let r=t.key.startsWith(`Arrow`),i=Qu(t.key,ue(),u),a=Xu(t.key,g),o=(l?i:a)||t.key===`Enter`||t.key.trim()===``;if(d&&n)return fe(t);if(!(!n&&!m&&r)){if(o){let e=Xu(t.key,ue());F.current=l&&e?null:t.key}if(l){i&&(Rt(t),n?(P.current=de(),L(t)):e(t));return}a&&(ie.current!=null&&(P.current=ie.current),Rt(t),!n&&m?e(t):fe(t),n&&L(t))}},onFocus(e){C.select(`open`)&&!d&&(P.current=-1,L(e))},onPointerDown:n,onPointerEnter:n,onMouseDown:t,onClick:t}},[fe,f,de,l,L,C,m,g,ue,u,ie,d]),_e=td.useMemo(()=>({...me,...ge}),[me,ge]);return td.useMemo(()=>a?{reference:_e,floating:he,item:pe,trigger:ge}:{},[a,_e,he,ge,pe])}var td,nd,rd=e((()=>{td=t(l(),1),ii(),U(),ai(),Qr(),Wr(),_n(),Er(),wr(),Xo(),Qi(),wn(),In(),Ma(),Wt(),nd=`Escape`}));function id(e,t){let{listRef:n,elementsRef:r,activeIndex:i,onMatch:a,disabledIndices:o,onTyping:s,enabled:c=!0,resetMs:l=750,selectedIndex:u=null}=t,d=`rootStore`in e?e.rootStore:e,f=d.useState(`open`),p=ft(),m=ad.useRef(``),h=ad.useRef(u??i??-1),g=ad.useRef(null),_=q(e=>{function t(e){let t=r?.current[e];return!t||Zi(t)}function c(e){return t(e)?o==null||!Yi(Wn,e,o):!1}function d(e,t,n=0){if(e.length===0)return-1;let r=(n%e.length+e.length)%e.length,i=t.toLowerCase();for(let t=0;t<e.length;t+=1){let n=(r+t)%e.length;if(!(!e[n]?.toLowerCase().startsWith(i)||!c(n)))return n}return-1}let _=n.current;if(m.current.length>0&&e.key===` `&&(Rt(e),s?.(!0)),m.current.length>0&&m.current[0]!==` `&&d(_,m.current)===-1&&e.key!==` `&&s?.(!1),_==null||e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;f&&e.key!==` `&&(Rt(e),s?.(!0));let v=m.current===``;v&&(h.current=u??i??-1),_.every((e,t)=>e&&c(t)?e[0]?.toLowerCase()!==e[1]?.toLowerCase():!0)&&m.current===e.key&&(m.current=``,h.current=g.current),m.current+=e.key,p.start(l,()=>{m.current=``,h.current=g.current,s?.(!1)});let y=((v?u??i??-1:h.current)??0)+1,b=d(_,m.current,y);b===-1?e.key!==` `&&(m.current=``,s?.(!1)):(a?.(b),g.current=b)}),v=q(e=>{let t=e.relatedTarget,n=d.select(`domReferenceElement`),r=d.select(`floatingElement`);W(n,t)||W(r,t)||(p.clear(),m.current=``,h.current=g.current,s?.(!1))});H(()=>{!f&&u!==null||(p.clear(),g.current=null,m.current!==``&&(m.current=``))},[f,u,p]),H(()=>{f&&m.current===``&&(h.current=u??i??-1)},[f,u,i]);let y=ad.useMemo(()=>({onKeyDown:_,onBlur:v}),[_,v]);return ad.useMemo(()=>c?{reference:y,floating:y}:{},[c,y])}var ad,od=e((()=>{ad=t(l(),1),U(),Qr(),ht(),Kn(),Qi(),In(),Wt()}));function sd(e,t,n,r,i,a){return r>=t!=a>=t&&e<=(i-n)*(t-r)/(a-r)+n}function cd(e,t,n,r,i,a,o,s,c,l){let u=!1;return sd(e,t,n,r,i,a)&&(u=!u),sd(e,t,i,a,o,s)&&(u=!u),sd(e,t,o,s,c,l)&&(u=!u),sd(e,t,c,l,n,r)&&(u=!u),u}function ld(e,t,n){return e>=n.x&&e<=n.x+n.width&&t>=n.y&&t<=n.y+n.height}function ud(e,t,n,r,i,a){return e>=Math.min(n,i)&&e<=Math.max(n,i)&&t>=Math.min(r,a)&&t<=Math.max(r,a)}function dd(e={}){let{blockPointerEvents:t=!1}=e,n=new mt,r=({x:e,y:t,placement:r,elements:i,onClose:a,nodeId:o,tree:s})=>{let c=r?.split(`-`)[0],l=!1,u=null,d=null,f=typeof performance<`u`?performance.now():0;function p(e,t){let n=performance.now(),r=n-f;if(u===null||d===null||r===0)return u=e,d=t,f=n,!1;let i=e-u,a=t-d,o=i*i+a*a,s=r*r*pd;return u=e,d=t,f=n,o<s}function m(){n.clear(),a()}return function(r){n.clear();let a=i.domReference,u=i.floating;if(!a||!u||c==null||e==null||t==null)return;let{clientX:d,clientY:f}=r,h=En(r),g=r.type===`mouseleave`,_=W(u,h),v=W(a,h);if(_&&(l=!0,!g))return;if(v&&(l=!1,!g)){l=!0;return}if(g&&Xt(r.relatedTarget)&&W(u,r.relatedTarget))return;function y(){return!!(s&&Ta(s.nodesRef.current,o).length>0)}function b(){y()||m()}if(y())return;let x=a.getBoundingClientRect(),S=u.getBoundingClientRect(),C=e>S.right-S.width/2,w=t>S.bottom-S.height/2,T=S.width>x.width,E=S.height>x.height,D=(T?x:S).left,O=(T?x:S).right,k=(E?x:S).top,A=(E?x:S).bottom;if(c===`top`&&t>=x.bottom-1||c===`bottom`&&t<=x.top+1||c===`left`&&e>=x.right-1||c===`right`&&e<=x.left+1){b();return}let j=!1;switch(c){case`top`:j=ud(d,f,D,x.top+1,O,S.bottom-1);break;case`bottom`:j=ud(d,f,D,S.top+1,O,x.bottom-1);break;case`left`:j=ud(d,f,S.right-1,A,x.left+1,k);break;case`right`:j=ud(d,f,x.right-1,A,S.left+1,k);break;default:}if(j)return;if(l&&!ld(d,f,x)){b();return}if(!g&&p(d,f)){b();return}let M=!1;switch(c){case`top`:{let n=T?md/2:md*4,r=T||C?e+n:e-n,i=T?e-n:C?e+n:e-n,a=t+md+1,o=C||T?S.bottom-md:S.top,s=C?T?S.bottom-md:S.top:S.bottom-md;M=cd(d,f,r,a,i,a,S.left,o,S.right,s);break}case`bottom`:{let n=T?md/2:md*4,r=T||C?e+n:e-n,i=T?e-n:C?e+n:e-n,a=t-md,o=C||T?S.top+md:S.bottom,s=C?T?S.top+md:S.bottom:S.top+md;M=cd(d,f,r,a,i,a,S.left,o,S.right,s);break}case`left`:{let n=E?md/2:md*4,r=E||w?t+n:t-n,i=E?t-n:w?t+n:t-n,a=e+md+1,o=w||E?S.right-md:S.left,s=w?E?S.right-md:S.left:S.right-md;M=cd(d,f,o,S.top,s,S.bottom,a,r,a,i);break}case`right`:{let n=E?md/2:md*4,r=E||w?t+n:t-n,i=E?t-n:w?t+n:t-n,a=e-md,o=w||E?S.left+md:S.right,s=w?E?S.left+md:S.right:S.left+md;M=cd(d,f,a,r,a,i,o,S.top,s,S.bottom);break}default:}M?l||n.start(40,b):b()}};return r.__options={...e,blockPointerEvents:t},r}var fd,pd,md,hd=e((()=>{_n(),ht(),In(),Da(),fd=.1,pd=fd*fd,md=.5})),gd=e((()=>{jr(),us(),Io(),Xo(),Bo(),ps(),vs(),Cs(),Au(),Du(),Fl(),Pu(),Uu(),Ju(),Mr(),Pr(),U(),ai(),Qr(),ht(),Wr(),_n(),Er(),wr(),In(),Hn(),rd(),od(),hd(),Lc()}));function _d(){return{...gu(),disabled:!1,instantType:void 0,isInstantPhase:!1,trackCursorAxis:`none`,disableHoverablePopup:!1,openChangeReason:null,closeOnClick:!0,closeDelay:0,hasViewport:!1}}var vd,yd,bd,xd=e((()=>{vd=t(l(),1),Ol(),Er(),wr(),Tu(),yd={...Cu,disabled:Z(e=>e.disabled),instantType:Z(e=>e.instantType),isInstantPhase:Z(e=>e.isInstantPhase),trackCursorAxis:Z(e=>e.trackCursorAxis),disableHoverablePopup:Z(e=>e.disableHoverablePopup),lastOpenChangeReason:Z(e=>e.openChangeReason),closeOnClick:Z(e=>e.closeOnClick),closeDelay:Z(e=>e.closeDelay),hasViewport:Z(e=>e.hasViewport)},bd=class e extends Sl{constructor(e,t,n=!1){let r=new fu,i={..._d(),...e};i.floatingRootContext=_u(r,t,n),super(i,{popupRef:vd.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerElements:r},yd)}setOpen=(e,t)=>{tu(this,e,t,{extraState:{openChangeReason:t.reason}})};cancelPendingOpen(e){this.state.floatingRootContext.dispatchOpenChange(!1,G(Jn,e))}static useStore(t,n){return Zl(t,(t,r)=>new e(n,t,r)).store}}}));function Sd({store:e,disabled:t,trackCursorAxis:n}){let r=e.useState(`floatingRootContext`),i=xs(r,{enabled:!t,referencePress:()=>e.select(`closeOnClick`)}),a=gs(r,{enabled:!t&&n!==`none`,axis:n===`none`?void 0:n});return ou(e,{activeTriggerProps:Cd.useMemo(()=>Ce(a.reference,i.reference),[a.reference,i.reference]),inactiveTriggerProps:Cd.useMemo(()=>Ce(a.trigger,i.trigger),[a.trigger,i.trigger]),popupProps:Cd.useMemo(()=>Ce(uu,a.floating,i.floating),[a.floating,i.floating])}),null}var Cd,wd,Td,Ed=e((()=>{Cd=t(l(),1),Qe(),U(),st(),gd(),Er(),Tu(),ze(),xd(),wr(),wd=t(c(),1),Td=Ke(function(e){let{disabled:t=!1,defaultOpen:n=!1,open:r,disableHoverablePopup:i=!1,trackCursorAxis:a=`none`,actionsRef:o,onOpenChange:s,onOpenChangeComplete:c,handle:l,triggerId:u,defaultTriggerId:d=null,children:f}=e,p=bd.useStore(l?.store,{open:n,openProp:r,activeTriggerId:d,triggerIdProp:u});nu(p,r,n,d),p.useControlledProp(`openProp`,r),p.useControlledProp(`triggerIdProp`,u),p.useContextCallback(`onOpenChange`,s),p.useContextCallback(`onOpenChangeComplete`,c);let m=p.useState(`open`),h=!t&&m,g=p.useState(`activeTriggerId`),_=p.useState(`mounted`),v=p.useState(`payload`);p.useSyncedValues({trackCursorAxis:a,disableHoverablePopup:i}),p.useSyncedValue(`disabled`,t),iu(p,{closeOnActiveTriggerUnmount:!0});let{forceUnmount:y,transitionStatus:b}=au(h,p),x=p.useState(`isInstantPhase`),S=p.useState(`instantType`),C=p.useState(`lastOpenChangeReason`),w=Cd.useRef(null);H(()=>{m&&t&&p.setOpen(!1,G(vr))},[m,t,p]),H(()=>{b===`ending`&&C===`none`||b!==`ending`&&x?(S!==`delay`&&(w.current=S),p.set(`instantType`,`delay`)):w.current!==null&&(p.set(`instantType`,w.current),w.current=null)},[b,x,C,S,p]),H(()=>{h&&(g??p.set(`payload`,void 0))},[p,g,h]);let T=Cd.useCallback(()=>{p.setOpen(!1,G(xr))},[p]);Cd.useImperativeHandle(o,()=>({unmount:y,close:T}),[y,T]);let E=h||_||!t&&a!==`none`;return(0,wd.jsxs)(ot.Provider,{value:p,children:[E&&(0,wd.jsx)(Sd,{store:p,disabled:t,trackCursorAxis:a}),typeof f==`function`?f({payload:v}):f]})})})),Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld=e((()=>{Ul(),Dd=function(e){return e.open=`data-open`,e.closed=`data-closed`,e[e.startingStyle=zl.startingStyle]=`startingStyle`,e[e.endingStyle=zl.endingStyle]=`endingStyle`,e.anchorHidden=`data-anchor-hidden`,e.side=`data-side`,e.align=`data-align`,e}({}),Od=function(e){return e.popupOpen=`data-popup-open`,e.pressed=`data-pressed`,e}({}),kd={[Od.popupOpen]:``},Ad={[Od.popupOpen]:``,[Od.pressed]:``},jd={[Dd.open]:``},Md={[Dd.closed]:``},Nd={[Dd.anchorHidden]:``},Pd={open(e){return e?kd:null}},Fd={open(e){return e?Ad:null}},Id={open(e){return e?jd:Md},anchorHidden(e){return e?Nd:null}}}));function Rd(e){return qa(e,`base-ui`)}var zd=e((()=>{Za()}));function Bd(){return Vd.useContext(Hd)}var Vd,Hd,Ud=e((()=>{Vd=t(l(),1),Hd=Vd.createContext(void 0)})),Wd,Gd=e((()=>{Ld(),Wd=function(e){return e[e.popupOpen=Od.popupOpen]=`popupOpen`,e.triggerDisabled=`data-trigger-disabled`,e}({})})),Kd=e((()=>{}));function qd(e){if(`composedPath`in e){let t=e.composedPath();for(let e=0;e<t.length;e+=1){let n=t[e];if(Xt(n))return n}}let t=e.target;return Xt(t)?t:null}function Jd(e){let t=e;for(;t;){if(t.hasAttribute(Xd))return t;let e=t.parentElement;if(e){t=e;continue}let n=t.getRootNode();t=`host`in n&&Xt(n.host)?n.host:null}return null}var Yd,Xd,Zd,Qd=e((()=>{rt(),Yd=t(l(),1),_n(),Qe(),ht(),Wr(),st(),Ld(),X(),Tu(),zd(),Ud(),gd(),In(),Wt(),Er(),wr(),Gd(),Bu(),Kd(),Xd=`data-base-ui-tooltip-trigger`,Zd=qe(function(e,t){let{render:n,className:r,style:i,handle:a,payload:o,disabled:s,delay:c,closeOnClick:l=!0,closeDelay:u,id:d,...f}=e,p=it(!0),m=a?.store??p;if(!m)throw Error(nt(82));let h=Rd(d),g=m.useState(`isTriggerActive`,h),_=m.useState(`isOpenedByTrigger`,h),v=m.useState(`floatingRootContext`),y=Yd.useRef(null),b=c??600,x=u??0,{registerTrigger:S,isMountedByThisTrigger:C}=ru(h,y,m,{payload:o,closeOnClick:l,closeDelay:x}),w=Bd(),{delayRef:T,isInstantPhase:E,hasProvider:D}=Or(v,{open:_}),O=Lu(v);m.useSyncedValue(`isInstantPhase`,E);let k=m.useState(`disabled`),A=s??k,j=Hr(A),M=m.useState(`trackCursorAxis`),N=m.useState(`disableHoverablePopup`),P=Yd.useRef(!1),F=ft(),I=Yd.useRef(void 0);function L(){let e=w?.delay,t=typeof T.current==`object`?T.current.open:void 0,n=b;return D&&(n=t===0?0:c??e??b),n}function R(e){let t=y.current;if(!t||!e)return!1;let n=Jd(e);return n!==null&&n!==t&&W(t,n)}function ee(e){let t=R(e);return P.current=t,t&&(O.openChangeTimeout.clear(),O.restTimeout.clear(),O.restTimeoutPending=!1,F.clear()),t}let z=Wu(v,{enabled:!A,mouseOnly:!0,move:!1,handleClose:!N&&M!==`both`?dd():null,restMs:L,delay(){let e=typeof T.current==`object`?T.current.close:void 0,t=x;return u==null&&D&&(t=e),{close:t}},triggerElementRef:y,isActiveTrigger:g,isClosing:()=>m.select(`transitionStatus`)===`ending`,shouldOpen(){return!P.current}}),te=ju(v,{enabled:!A}).reference,ne=e=>{let t=P.current,n=qd(e),r=ee(n),i=y.current,a=i&&n&&W(i,n);if(r&&m.select(`open`)&&m.select(`lastOpenChangeReason`)===`trigger-hover`){m.setOpen(!1,G(Yn,e));return}if(t&&!r&&a&&!j.current&&!m.select(`open`)&&i&&Ht(I.current)){let t=()=>{!P.current&&!j.current&&!m.select(`open`)&&m.setOpen(!0,G(Yn,e,i))},n=L();n===0?(F.clear(),t()):F.start(n,t)}},re=m.useState(`triggerProps`,C);return Y(`button`,e,{state:{open:_},ref:[t,S,y],props:[z,te,C||M!==`none`?re:void 0,{onMouseOver(e){ne(e.nativeEvent)},onFocus(e){R(qd(e.nativeEvent))&&e.preventBaseUIHandler()},onMouseLeave(){P.current=!1,F.clear(),I.current=void 0},onPointerEnter(e){I.current=e.pointerType},onPointerDown(e){I.current=e.pointerType,m.set(`closeOnClick`,l),l&&!m.select(`open`)&&m.cancelPendingOpen(e.nativeEvent)},onClick(e){l&&!m.select(`open`)&&m.cancelPendingOpen(e.nativeEvent)},id:h,[Wd.triggerDisabled]:A?``:void 0,[Xd]:A?void 0:``},f],stateAttributesMapping:Pd})})}));function $d(){let e=ef.useContext(tf);if(e===void 0)throw Error(nt(70));return e}var ef,tf,nf=e((()=>{rt(),ef=t(l(),1),tf=ef.createContext(void 0)})),rf,af,of,sf,cf=e((()=>{rf=t(l(),1),af=t(u(),1),gd(),of=t(c(),1),sf=rf.forwardRef(function(e,t){let{children:n,container:r,className:i,render:a,style:o,...s}=e,{portalNode:c,portalSubtree:l}=Oo({container:r,ref:t,componentProps:e,elementProps:s});return!l&&!c?null:(0,of.jsxs)(rf.Fragment,{children:[l,c&&af.createPortal(n,c)]})})})),lf,uf,df,ff=e((()=>{lf=t(l(),1),st(),nf(),cf(),uf=t(c(),1),df=lf.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e;return it().useState(`mounted`)||n?(0,uf.jsx)(tf.Provider,{value:n,children:(0,uf.jsx)(sf,{ref:t,...r})}):null})}));function pf(){let e=mf.useContext(hf);if(e===void 0)throw Error(nt(71));return e}var mf,hf,gf=e((()=>{rt(),mf=t(l(),1),hf=mf.createContext(void 0)}));function _f(){return vf.useContext(yf)?.direction??`ltr`}var vf,yf,bf=e((()=>{vf=t(l(),1),yf=vf.createContext(void 0)})),xf,Sf,Cf=e((()=>{Hi(),xf=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0,offsetParent:d=`real`}=hi(e,t)||{};if(l==null)return{};let f=ki(u),p={x:n,y:r},m=xi(i),h=yi(m),g=await o.getDimensions(l),_=m===`y`,v=_?`top`:`left`,y=_?`bottom`:`right`,b=_?`clientHeight`:`clientWidth`,x=a.reference[h]+a.reference[m]-p[m]-a.floating[h],S=p[m]-a.reference[m],C=d===`real`?await o.getOffsetParent?.(l):s.floating,w=s.floating[b]||a.floating[h];(!w||!await o.isElement?.(C))&&(w=s.floating[b]||a.floating[h]);let T=x/2-S/2,E=w/2-g[h]/2-1,D=Math.min(f[v],E),O=Math.min(f[y],E),k=D,A=w-g[h]-O,j=w/2-g[h]/2+T,M=mi(k,j,A),N=!c.arrow&&_i(i)!=null&&j!==M&&a.reference[h]/2-(j<k?D:O)-g[h]/2<0,P=N?j<k?j-k:j-A:0;return{[m]:p[m]+P,data:{[m]:M,centerOffset:j-M-P,...N&&{alignmentOffset:P}},reset:N}}}),Sf=(e,t)=>({...xf(e),options:[e,t]})})),wf,Tf,Ef=e((()=>{Lc(),wf=Ic().fn,Tf={name:`hide`,async fn(e){let{width:t,height:n,x:r,y:i}=e.rects.reference,a=t===0&&n===0&&r===0&&i===0;return{data:{referenceHidden:(await wf(e)).data?.referenceHidden||a}}}}})),Df,Of,kf=e((()=>{ai(),Hi(),Df={sideX:`left`,sideY:`top`},Of={name:`adaptiveOrigin`,async fn(e){let{x:t,y:n,rects:{floating:r},elements:{floating:i},platform:a,strategy:o,placement:s}=e,c=qt(i),l=c.getComputedStyle(i);if(!(l.transitionDuration!==`0s`&&l.transitionDuration!==``))return{x:t,y:n,data:Df};let u=await a.getOffsetParent?.(i),d={width:0,height:0};if(o===`fixed`&&c?.visualViewport)d={width:c.visualViewport.width,height:c.visualViewport.height};else if(u===c){let e=J(i);d={width:e.documentElement.clientWidth,height:e.documentElement.clientHeight}}else await a.isElement?.(u)&&(d=await a.getDimensions(u));let f=gi(s),p=t,m=n;f===`left`&&(p=d.width-(t+r.width)),f===`top`&&(m=d.height-(n+r.height));let h=f===`left`?`right`:Df.sideX,g=f===`top`?`bottom`:Df.sideY;return{x:p,y:m,data:{sideX:h,sideY:g}}}}}));function Af(e,t,n){let r=e===`inline-start`||e===`inline-end`;return{top:`top`,right:r?n?`inline-start`:`inline-end`:`right`,bottom:`bottom`,left:r?n?`inline-end`:`inline-start`:`left`}[t]}function jf(e,t,n){let{rects:r,placement:i}=e;return{side:Af(t,gi(i),n),align:_i(i)||`center`,anchor:{width:r.reference.width,height:r.reference.height},positioner:{width:r.floating.width,height:r.floating.height}}}function Mf(e){let{anchor:t,positionMethod:n=`absolute`,side:r=`bottom`,sideOffset:i=0,align:a=`center`,alignOffset:o=0,collisionBoundary:s,collisionPadding:c=5,sticky:l=!1,arrowPadding:u=5,disableAnchorTracking:d=!1,inline:f,keepMounted:p=!1,floatingRootContext:m,mounted:h,collisionAvoidance:g,shiftCrossAxis:_=!1,nodeId:v,adaptiveOrigin:y,lazyFlip:b=!1,externalTree:x}=e,[S,C]=Pf.useState(null);!h&&S!==null&&C(null);let w=g.side||`flip`,T=g.align||`flip`,E=g.fallbackAxisSide||`end`,D=typeof t==`function`?t:void 0,O=q(D),k=D?O:t,A=Hr(t),j=Hr(h),M=_f()===`rtl`,N=S||{top:`top`,right:`right`,bottom:`bottom`,left:`left`,"inline-end":M?`left`:`right`,"inline-start":M?`right`:`left`}[r],P=a===`center`?N:`${N}-${a}`,F=c,I=+(r===`bottom`),L=+(r===`top`),R=+(r===`right`),ee=+(r===`left`);typeof F==`number`?F={top:F+I,right:F+ee,bottom:F+L,left:F+R}:F&&={top:(F.top||0)+I,right:(F.right||0)+ee,bottom:(F.bottom||0)+L,left:(F.left||0)+R};let z={boundary:s===`clipping-ancestors`?`clippingAncestors`:s,padding:F},te=Pf.useRef(null),ne=Hr(i),re=Hr(o),B=typeof i==`function`?0:i,ie=typeof o==`function`?0:o,V=[];f&&V.push(f),V.push(jc(e=>{let t=jf(e,r,M),n=typeof ne.current==`function`?ne.current(t):ne.current,i=typeof re.current==`function`?re.current(t):re.current;return{mainAxis:n,crossAxis:i,alignmentAxis:i}},[B,ie,M,r]));let ae=T===`none`&&w!==`shift`,oe=!ae&&(l||_||w===`shift`),se=w===`none`?null:Pc({...z,padding:{top:F.top+1,right:F.right+1,bottom:F.bottom+1,left:F.left+1},mainAxis:!_&&w===`flip`,crossAxis:T===`flip`?`alignment`:!1,fallbackAxisSideDirection:E}),ce=ae?null:Mc(e=>{let t=J(e.elements.floating).documentElement;return{...z,rootBoundary:_?{x:0,y:0,width:t.clientWidth,height:t.clientHeight}:void 0,mainAxis:T!==`none`,crossAxis:oe,limiter:l||_?void 0:Nc(e=>{if(!te.current)return{};let{width:t,height:n}=te.current.getBoundingClientRect(),r=bi(gi(e.placement)),i=r===`y`?t:n,a=r===`y`?F.left+F.right:F.top+F.bottom;return{offset:i/2+a/2}})}},[z,l,_,F,T]);w===`shift`||T===`shift`||a===`center`?V.push(ce,se):V.push(se,ce),V.push(Fc({...z,apply({elements:{floating:e},availableWidth:t,availableHeight:n,rects:r}){if(!j.current)return;let i=e.style;i.setProperty(`--available-width`,`${t}px`),i.setProperty(`--available-height`,`${n}px`);let a=qt(e).devicePixelRatio||1,{x:o,y:s,width:c,height:l}=r.reference,u=(Math.round((o+c)*a)-Math.round(o*a))/a,d=(Math.round((s+l)*a)-Math.round(s*a))/a;i.setProperty(`--anchor-width`,`${u}px`),i.setProperty(`--anchor-height`,`${d}px`)}}),Sf(e=>({element:te.current||J(e.elements.floating).createElement(`div`),padding:u,offsetParent:`floating`}),[u]),{name:`transformOrigin`,fn(e){let{elements:t,middlewareData:n,placement:a,rects:o,y:s}=e,c=gi(a),l=bi(c),u=te.current,d=n.arrow?.x||0,f=n.arrow?.y||0,p=u?.clientWidth||0,m=u?.clientHeight||0,h=d+p/2,g=f+m/2,_=Math.abs(n.shift?.y||0),v=o.reference.height/2,y=typeof i==`function`?i(jf(e,r,M)):i,b=_>y,x={top:`${h}px calc(100% + ${y}px)`,bottom:`${h}px ${-y}px`,left:`calc(100% + ${y}px) ${g}px`,right:`${-y}px ${g}px`}[c],S=`${h}px ${o.reference.y+v-s}px`;return t.floating.style.setProperty(`--transform-origin`,oe&&l===`y`&&b?S:x),{}}},Tf,y),H(()=>{!h&&m&&m.update({referenceElement:null,floatingElement:null,domReferenceElement:null,positionReference:null})},[h,m]);let le=Pf.useMemo(()=>({elementResize:!d&&typeof ResizeObserver<`u`,layoutShift:!d&&typeof IntersectionObserver<`u`}),[d]),{refs:ue,elements:de,x:fe,y:pe,middlewareData:me,update:he,placement:ge,context:_e,isPositioned:ve,floatingStyles:ye}=Ou({rootContext:m,open:p?h:void 0,placement:P,middleware:V,strategy:n,whileElementsMounted:p?void 0:(...e)=>lc(...e,le),nodeId:v,externalTree:x}),{sideX:be,sideY:xe}=me.adaptiveOrigin||Df,Se=ve?n:`fixed`,Ce=Pf.useMemo(()=>{let e=y?{position:Se,[be]:fe,[xe]:pe}:{position:Se,...ye};return ve||(e.opacity=0),e},[y,Se,be,fe,xe,pe,ye,ve]),we=Pf.useRef(null);H(()=>{if(!h)return;let e=A.current,t=typeof e==`function`?e():e,n=(Nf(t)?t.current:t)||null;n!==we.current&&(ue.setPositionReference(n),we.current=n)},[h,ue,k,A]),Pf.useEffect(()=>{if(!h)return;let e=A.current;typeof e!=`function`&&Nf(e)&&e.current!==we.current&&(ue.setPositionReference(e.current),we.current=e.current)},[h,ue,k,A]),Pf.useEffect(()=>{if(p&&h&&de.reference&&de.floating)return lc(de.reference,de.floating,he,le)},[p,h,de,he,le]);let Te=gi(ge),Ee=Af(r,Te,M),De=_i(ge)||`center`,Oe=!!me.hide?.referenceHidden;H(()=>{b&&h&&ve&&C(Te)},[b,h,ve,Te]);let ke=Pf.useMemo(()=>({position:`absolute`,top:me.arrow?.y,left:me.arrow?.x}),[me.arrow]),Ae=me.arrow?.centerOffset!==0;return Pf.useMemo(()=>({positionerStyles:Ce,arrowStyles:ke,arrowRef:te,arrowUncentered:Ae,side:Ee,align:De,physicalSide:Te,anchorHidden:Oe,refs:ue,context:_e,isPositioned:ve,update:he}),[Ce,ke,te,Ae,Ee,De,Te,Oe,ue,_e,ve,he])}function Nf(e){return e!=null&&`current`in e}var Pf,Ff=e((()=>{Pf=t(l(),1),Hi(),ai(),U(),Wr(),Qr(),gd(),bf(),Cf(),Ef(),kf()}));function If(e){return e===`starting`?vo:Gn}var Lf=e((()=>{Kn(),Do()}));function Rf(e,t,{styles:n,transitionStatus:r,props:i,refs:a,hidden:o,inert:s=!1}){let c={...n};return s&&(c.pointerEvents=`none`),Y(`div`,e,{state:t,ref:a,props:[{role:`presentation`,hidden:o,style:c},If(r),i],stateAttributesMapping:Id})}var zf=e((()=>{Ld(),X(),Lf()})),Bf,Vf,Hf,Uf=e((()=>{Bf=t(l(),1),st(),gf(),Ff(),nf(),Do(),kf(),zf(),Vf=t(c(),1),Hf=Bf.forwardRef(function(e,t){let{render:n,className:r,anchor:i,positionMethod:a=`absolute`,side:o=`top`,align:s=`center`,sideOffset:c=0,alignOffset:l=0,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d=5,arrowPadding:f=5,sticky:p=!1,disableAnchorTracking:m=!1,collisionAvoidance:h=To,style:g,..._}=e,v=it(),y=$d(),b=v.useState(`open`),x=v.useState(`mounted`),S=v.useState(`trackCursorAxis`),C=v.useState(`disableHoverablePopup`),w=v.useState(`floatingRootContext`),T=v.useState(`instantType`),E=v.useState(`transitionStatus`),D=Mf({anchor:i,positionMethod:a,floatingRootContext:w,mounted:x,side:o,sideOffset:c,align:s,alignOffset:l,collisionBoundary:u,collisionPadding:d,sticky:p,arrowPadding:f,disableAnchorTracking:m,keepMounted:y,collisionAvoidance:h,adaptiveOrigin:v.useState(`hasViewport`)?Of:void 0}),O=Rf(e,Bf.useMemo(()=>({open:b,side:D.side,align:D.align,anchorHidden:D.anchorHidden,instant:S===`none`?T:`tracking-cursor`}),[b,D.side,D.align,D.anchorHidden,S,T]),{styles:D.positionerStyles,transitionStatus:E,props:_,refs:[t,v.useStateSetter(`positionerElement`)],hidden:!x,inert:!b||S===`both`||C});return(0,Vf.jsx)(hf.Provider,{value:D,children:O})})})),Wf,Gf,Kf,qf=e((()=>{Wf=t(l(),1),st(),gf(),Ld(),Ul(),Yl(),X(),Lf(),gd(),Gf={...Id,...Hl},Kf=Wf.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=it(),{side:s,align:c}=pf(),l=o.useState(`open`),u=o.useState(`instantType`),d=o.useState(`transitionStatus`),f=o.useState(`popupProps`),p=o.useState(`floatingRootContext`),m=o.useState(`disabled`),h=o.useState(`closeDelay`);ql({open:l,ref:o.context.popupRef,onComplete(){l&&o.context.onOpenChangeComplete?.(!0)}}),Vu(p,{enabled:!m,closeDelay:h});let g=o.useStateSetter(`popupElement`);return Y(`div`,e,{state:{open:l,side:s,align:c,instant:u,transitionStatus:d},ref:[t,o.context.popupRef,g],props:[f,If(d),a],stateAttributesMapping:Gf})})})),Jf,Yf,Xf=e((()=>{Jf=t(l(),1),gf(),Ld(),X(),st(),Yf=Jf.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,o=it(),{arrowRef:s,side:c,align:l,arrowUncentered:u,arrowStyles:d}=pf();return Y(`div`,e,{state:{open:o.useState(`open`),side:c,align:l,uncentered:u,instant:o.useState(`instantType`)},ref:[t,s],props:[{style:d,"aria-hidden":!0},a],stateAttributesMapping:Id})})})),Zf,Qf=e((()=>{Zf=function(e){return e.popupWidth=`--popup-width`,e.popupHeight=`--popup-height`,e}({})}));function $f(e){return Qa(19)?e:e?`true`:void 0}var ep=e((()=>{eo()}));function tp(e){let[t,n]=np.useState({current:e,previous:null});return e!==t.current&&n({current:e,previous:t.current}),t.previous}var np,rp=e((()=>{np=t(l(),1)}));function ip(e){let t=sn(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Zt(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r;return(Pi(n)!==a||Pi(r)!==o)&&(n=a,r=o),{width:n,height:r}}var ap=e((()=>{Hi(),_n()}));function op(e){let{popupElement:t,positionerElement:n,content:r,mounted:i,onMeasureLayout:a,onMeasureLayoutComplete:o,side:s,direction:c}=e,l=Wl(t,!0,!1),u=$r(),d=dp.useRef(null),f=dp.useRef(!0),p=dp.useRef(Un),m=q(a),h=q(o),g=dp.useMemo(()=>{let e=s===`top`,t=s===`left`;return c===`rtl`?(e||=s===`inline-end`,t||=s===`inline-end`):(e||=s===`inline-start`,t||=s===`inline-start`),e?{position:`absolute`,[s===`top`?`bottom`:`top`]:`0`,[t?`right`:`left`]:`0`}:Gn},[s,c]);H(()=>{if(!i){p.current=Un,f.current=!0,d.current=null;return}if(!t||!n)return;p.current=cp(t,g),lp(t,`auto`);let e=sp(t,`position`,`static`),r=sp(t,`transform`,`none`),a=sp(t,`scale`,`1`),o=cp(n,{"--available-width":`max-content`,"--available-height":`max-content`});function s(){e(),r(),o()}function c(){s(),a()}if(m?.(),f.current||d.current===null){up(n,`max-content`);let e=ip(t);return d.current=e,up(n,e),c(),h?.(null,e),f.current=!1,()=>{p.current(),p.current=Un}}up(n,`max-content`);let _=d.current,v=ip(t);d.current=v,lp(t,_),c(),h?.(_,v),up(n,v);let y=new AbortController;return u.request(()=>{lp(t,v),l(()=>{t.style.setProperty(`--popup-width`,`auto`),t.style.setProperty(`--popup-height`,`auto`)},y.signal)}),()=>{y.abort(),u.cancel(),p.current(),p.current=Un}},[r,t,n,l,u,i,m,h,g])}function sp(e,t,n){let r=e.style.getPropertyValue(t);return e.style.setProperty(t,n),()=>{e.style.setProperty(t,r)}}function cp(e,t){let n=[];for(let[r,i]of Object.entries(t))n.push(sp(e,r,i));return n.length?()=>{n.forEach(e=>e())}:Un}function lp(e,t){let n=t===`auto`?`auto`:`${t.width}px`,r=t===`auto`?`auto`:`${t.height}px`;e.style.setProperty(`--popup-width`,n),e.style.setProperty(`--popup-height`,r)}function up(e,t){let n=t===`max-content`?`max-content`:`${t.width}px`,r=t===`max-content`?`max-content`:`${t.height}px`;e.style.setProperty(`--positioner-width`,n),e.style.setProperty(`--positioner-height`,r)}var dp,fp=e((()=>{dp=t(l(),1),ii(),U(),Qr(),Kn(),Kl(),ap()})),pp=e((()=>{bf()})),mp=e((()=>{pp()}));function hp(e){let{store:t,side:n,cssVars:r,children:i}=e,a=_f(),o=t.useState(`activeTriggerElement`),s=t.useState(`activeTriggerId`),c=t.useState(`open`),l=t.useState(`payload`),u=t.useState(`mounted`),d=t.useState(`popupElement`),f=t.useState(`positionerElement`),p=tp(c?o:null),m=yp(s,l),h=bp.useRef(null),[g,_]=bp.useState(null),[v,y]=bp.useState(null),b=bp.useRef(null),x=bp.useRef(null),S=Wl(b,!0,!1),C=$r(),[w,T]=bp.useState(null),[E,D]=bp.useState(!1);H(()=>(t.set(`hasViewport`,!0),()=>{t.set(`hasViewport`,!1)}),[t]);let O=q(()=>{b.current?.style.setProperty(`animation`,`none`),b.current?.style.setProperty(`transition`,`none`),x.current?.style.setProperty(`display`,`none`)}),k=q(e=>{b.current?.style.removeProperty(`animation`),b.current?.style.removeProperty(`transition`),x.current?.style.removeProperty(`display`),e&&T(e)}),A=bp.useRef(null);H(()=>{(!c||!u)&&(A.current=null)},[c,u]),H(()=>{o&&p&&o!==p&&A.current!==o&&h.current&&(_(h.current),D(!0),y(vp(p,o)),C.request(()=>{xp.flushSync(()=>{D(!1)}),S(()=>{_(null),T(null),h.current=null})}),A.current=o)},[o,p,g,S,C]),H(()=>{let e=b.current;if(!e)return;let t=J(e).createElement(`div`);for(let n of Array.from(e.childNodes))t.appendChild(n.cloneNode(!0));h.current=t});let j=g!=null,M;M=j?(0,Sp.jsxs)(bp.Fragment,{children:[(0,Sp.jsx)(`div`,{"data-previous":!0,inert:$f(!0),ref:x,style:{...w?{[r.popupWidth]:`${w.width}px`,[r.popupHeight]:`${w.height}px`}:null,position:`absolute`},"data-ending-style":E?void 0:``},`previous`),(0,Sp.jsx)(`div`,{"data-current":!0,ref:b,"data-starting-style":E?``:void 0,children:i},m)]}):(0,Sp.jsx)(`div`,{"data-current":!0,ref:b,children:i},m),H(()=>{let e=x.current;!e||!g||e.replaceChildren(...Array.from(g.childNodes))},[g]),op({popupElement:d,positionerElement:f,mounted:u,content:l,onMeasureLayout:O,onMeasureLayoutComplete:k,side:n,direction:a});let N={activationDirection:gp(v),transitioning:j};return{children:M,state:N}}function gp(e){if(e)return`${_p(e.horizontal,5,`right`,`left`)} ${_p(e.vertical,5,`down`,`up`)}`}function _p(e,t,n,r){return e>t?n:e<-t?r:``}function vp(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i={x:n.left+n.width/2,y:n.top+n.height/2},a={x:r.left+r.width/2,y:r.top+r.height/2};return{horizontal:a.x-i.x,vertical:a.y-i.y}}function yp(e,t){let[n,r]=bp.useState(0),i=bp.useRef(e),a=bp.useRef(t),o=bp.useRef(!1);return H(()=>{let n=i.current,s=a.current,c=e!==n,l=t!==s;c?(r(e=>e+1),o.current=!l):o.current&&l&&(r(e=>e+1),o.current=!1),i.current=e,a.current=t},[e,t]),`${e??`current`}-${n}`}var bp,xp,Sp,Cp=e((()=>{bp=t(l(),1),xp=t(u(),1),ep(),ii(),rp(),U(),Qr(),ai(),Kl(),fp(),mp(),Sp=t(c(),1)})),wp,Tp,Ep,Dp=e((()=>{wp=t(l(),1),st(),gf(),X(),Qf(),Cp(),Tp={activationDirection:e=>e?{"data-activation-direction":e}:null},Ep=wp.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,...o}=e,s=it(),c=pf(),l=s.useState(`instantType`),{children:u,state:d}=hp({store:s,side:c.side,cssVars:Zf,children:a});return Y(`div`,e,{state:{activationDirection:d.activationDirection,transitioning:d.transitioning,instant:l},ref:t,props:[o,{children:u}],stateAttributesMapping:Tp})})}));function Op(){return new kp}var kp,Ap=e((()=>{rt(),xd(),Er(),wr(),kp=class{constructor(){this.store=new bd}open(e){let t=e?this.store.context.triggerElements.getById(e):void 0;if(e&&!t)throw Error(nt(81,e));this.store.setOpen(!0,G(xr,void 0,t))}close(){this.store.setOpen(!1,G(xr,void 0,void 0))}get isOpen(){return this.store.select(`open`)}}})),jp=e((()=>{Ed(),Qd(),ff(),Uf(),qf(),Xf(),gd(),Ud(),Dp(),Ap()})),Mp=e((()=>{jp()}));function Np(e){return t=>{for(let n of e)Fp(n,t)}}function Pp(e){return t=>{let n=[];for(let r of e){let e=Fp(r,t),i=typeof e==`function`;n.push(i?e:()=>Fp(r,null))}return()=>{for(let e of n)e()}}}function Fp(e,t){if(typeof e==`function`)return e(t);e&&(e.current=t)}function Ip(e){return(0,Lp.useMemo)(()=>Rp(e),e)}var Lp,Rp,zp=e((()=>{Lp=t(l(),1),Rp=parseInt(Lp.version.split(`.`)[0],10)>=19?Pp:Np})),Bp,Vp,Hp,Up,Wp,Gp=e((()=>{fe(),_e(),be(),Bp=t(l(),1),Vp=t(c(),1),ze(),Mp(),zp(),Hp=400,Up=100,Wp=({children:e,ref:t,arrow:n,className:r,classNames:i,closeDelay:a,defaultOpen:o,disabled:s,getPopupContainer:c,hotkey:l,hotkeyProps:u,mouseEnterDelay:d,mouseLeaveDelay:f,onOpenChange:p,open:m,openDelay:h,placement:g,popupContainer:_,popupProps:v,portalProps:y,positionerProps:b,standalone:x,styles:S,title:C,triggerProps:w,zIndex:T,...E})=>{let D=(0,Bp.useMemo)(()=>({arrow:n,className:r,classNames:i,closeDelay:a,defaultOpen:o,disabled:s,getPopupContainer:c,hotkey:l,hotkeyProps:u,mouseEnterDelay:d,mouseLeaveDelay:f,onOpenChange:p,open:m,openDelay:h,placement:g,popupContainer:_,popupProps:v,portalProps:y,positionerProps:b,styles:S,title:C,triggerProps:w,zIndex:T}),[n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,S,C,w,T]),O=(0,Bp.use)(ue),k=ye(D),A=(0,Bp.useMemo)(()=>k.openDelay===void 0?k.mouseEnterDelay===void 0?Hp:k.mouseEnterDelay*1e3:k.openDelay,[k.mouseEnterDelay,k.openDelay]),j=(0,Bp.useMemo)(()=>k.closeDelay===void 0?k.mouseLeaveDelay===void 0?Up:k.mouseLeaveDelay*1e3:k.closeDelay,[k.closeDelay,k.mouseLeaveDelay]),M=!!k.disabled,{isNativeButtonTriggerElement:N}=me({children:e}),P=(0,Bp.isValidElement)(e)?e:null,F=P&&P.props[`aria-haspopup`]!==void 0&&P.props.id!==void 0?P.props.id:void 0,I=(0,Bp.useCallback)(e=>{let n=(()=>{if(N)return e;let{type:t,ref:n,...r}=e;return r})(),r=P.props,i=Ce(E,r,n),a=r[`aria-haspopup`]!==void 0&&r.id!==void 0;return(0,Bp.cloneElement)(P,{...i,id:a?r.id:i.id,ref:Rp([P.ref,e.ref,t])})},[P,N,t,E]);if(k.title==null&&!k.hotkey)return e;let L={closeDelay:j,delay:A,disabled:M,...k.triggerProps,id:F??k.triggerProps?.id,payload:k};return P?(0,Vp.jsx)(Zd,{handle:O??void 0,...L,render:I}):(0,Vp.jsx)(Zd,{handle:O??void 0,...L,ref:t,children:e})},Wp.displayName=`TooltipInGroup`})),Kp,qp,Jp,Yp,Xp=e((()=>{Kp=t(l(),1),qp=(0,Kp.createContext)(null),Jp=()=>(0,Kp.use)(qp),Yp=qp.Provider})),Zp,Qp,$p=e((()=>{Zp=t(l(),1),Qp=()=>{let[e,t]=(0,Zp.useState)(typeof document<`u`);return(0,Zp.useEffect)(()=>{e||t(!0)},[]),e}})),em,tm,nm,rm=e((()=>{em=t(l(),1),tm=(0,em.createContext)(null),nm=()=>(0,em.use)(tm)})),im,am,om,sm,cm,lm=e((()=>{im={align:`center`,side:`top`},am={align:`start`,side:`top`},om={align:`end`,side:`top`},sm={align:`center`,side:`bottom`},cm={bottom:sm,bottomCenter:sm,bottomLeft:{align:`start`,side:`bottom`},bottomRight:{align:`end`,side:`bottom`},left:{align:`center`,side:`left`},leftBottom:{align:`end`,side:`left`},leftTop:{align:`start`,side:`left`},right:{align:`center`,side:`right`},rightBottom:{align:`end`,side:`right`},rightTop:{align:`start`,side:`right`},top:im,topCenter:im,topLeft:am,topRight:om}})),um,dm,fm=e((()=>{um=t(c(),1),dm=(0,um.jsxs)(`svg`,{"aria-hidden":`true`,height:`6`,viewBox:`0 0 12 6`,width:`12`,children:[(0,um.jsx)(`path`,{d:`M0 6L6 0L12 6Z`,"data-role":`fill`}),(0,um.jsx)(`path`,{d:`M0 6L6 0L12 6`,"data-role":`stroke`})]})})),pm,mm=e((()=>{y(),pm=d(({css:e,cssVar:t})=>({arrow:e`
    --lobe-tooltip-arrow-offset-block: 4px;
    --lobe-tooltip-arrow-offset-inline: 6px;

    pointer-events: none;

    position: absolute;
    transform-origin: center;

    display: flex;

    width: 8px;
    height: 4px;

    & > svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: ${t.colorBgElevated};
    }

    & [data-role='stroke'] {
      stroke: ${t.colorBorderSecondary};
    }

    &[data-side='top'] {
      inset-block-end: calc(var(--lobe-tooltip-arrow-offset-block) * -1);
      transform: rotate(180deg);
    }

    &[data-side='left'] {
      inset-inline-end: calc(var(--lobe-tooltip-arrow-offset-inline) * -1);
      transform: rotate(90deg);
    }

    &[data-side='right'] {
      inset-inline-start: calc(var(--lobe-tooltip-arrow-offset-inline) * -1);
      transform: rotate(-90deg);
    }

    &[data-side='bottom'] {
      inset-block-start: calc(var(--lobe-tooltip-arrow-offset-block) * -1);
    }
  `,popup:e`

    /* Keep the popup on its own compositor layer for its whole lifetime: when the opacity
       transition ends the browser otherwise drops the layer and re-rasterizes with pixel
       snapping — a visible one-frame shift when the measured width is fractional
       (single-line tooltips). */
    will-change: transform, opacity;
    user-select: none;

    position: relative;
    transform-origin: var(--transform-origin);

    max-width: min(320px, var(--available-width));
    border: 1px solid ${t.colorFill};
    border-radius: ${t.borderRadiusSM};

    font-size: ${t.fontSizeSM};
    line-height: 1.2;
    color: ${t.colorTextLabel};

    background: ${t.colorBgElevated};
    box-shadow:
      0 1px 2px 0 rgb(0 0 0 / 3%),
      0 1px 6px -1px rgb(0 0 0 / 2%),
      0 2px 4px 0 rgb(0 0 0 / 2%);

    /* Opacity gets its own monotonic curve: running it on the overshooting spring makes the
       fade look finished at ~0.96, pause, then visibly step to 1 at the clamp point — reads
       as a dropped frame. The spring stays on transform only. */
    transition-timing-function:
      var(--lobe-tooltip-fade-ease), var(--lobe-tooltip-animation-ease-out);
    transition-duration: var(--lobe-tooltip-fade-duration), var(--lobe-tooltip-animation-duration);
    transition-property: opacity, transform;

    &[data-layout-animation] {
      transition-timing-function:
        var(--lobe-tooltip-fade-ease), var(--lobe-tooltip-animation-ease-out),
        var(--lobe-tooltip-layout-ease), var(--lobe-tooltip-layout-ease);
      transition-duration:
        var(--lobe-tooltip-fade-duration), var(--lobe-tooltip-animation-duration),
        var(--lobe-tooltip-layout-duration), var(--lobe-tooltip-layout-duration);
      transition-property: opacity, transform, width, height;
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translate3d(var(--lobe-tooltip-translate-x), var(--lobe-tooltip-translate-y), 0)
        scale(var(--lobe-tooltip-animation-scale));
      opacity: 0;
    }

    &[data-ending-style] {
      transition-timing-function: var(--lobe-tooltip-animation-ease-in);
      transition-duration: var(--lobe-tooltip-animation-duration-exit);
    }

    &[data-instant] {
      transition: none;
    }
  `,positioner:e`
    /* Springs baked as linear(): stiffness 700 / damping 38 (enter) and 380 / 28 (glide),
       both zeta ~0.72 with ~4% overshoot. Durations are the springs' settle times —
       change them together with the curves, not independently. */
    --lobe-tooltip-animation-duration: 280ms;
    --lobe-tooltip-fade-duration: 160ms;
    --lobe-tooltip-fade-ease: cubic-bezier(0.33, 1, 0.68, 1);
    --lobe-tooltip-animation-duration-exit: 100ms;
    --lobe-tooltip-animation-translate: 3px;
    --lobe-tooltip-animation-scale: 0.97;
    --lobe-tooltip-animation-ease-in: cubic-bezier(0.4, 0, 1, 1);
    --lobe-tooltip-animation-ease-out: linear(
      0,
      0.041,
      0.14,
      0.268,
      0.407,
      0.541,
      0.662,
      0.765,
      0.849,
      0.915,
      0.964,
      0.998,
      1.02,
      1.032,
      1.038,
      1.039,
      1.036,
      1.032,
      1.027,
      1.022,
      1.016,
      1.012,
      1.008,
      1.005,
      1.003
    );
    --lobe-tooltip-layout-duration: 380ms;
    --lobe-tooltip-layout-ease: linear(
      0,
      0.041,
      0.14,
      0.268,
      0.407,
      0.541,
      0.661,
      0.765,
      0.849,
      0.915,
      0.964,
      0.998,
      1.02,
      1.032,
      1.038,
      1.039,
      1.036,
      1.032,
      1.027,
      1.022,
      1.016,
      1.012,
      1.008,
      1.005,
      1.003
    );
    --lobe-tooltip-translate-x: 0;
    --lobe-tooltip-translate-y: calc(var(--lobe-tooltip-animation-translate) * -1);

    will-change: transform, opacity;

    z-index: 114514;

    width: min(var(--positioner-width), 320px, var(--available-width));
    height: var(--positioner-height);

    transition-timing-function: var(--lobe-tooltip-animation-ease-out);
    transition-duration: var(--lobe-tooltip-animation-duration);
    transition-property: none;

    &[data-layout-animation] {
      transition-timing-function: var(--lobe-tooltip-layout-ease);
      transition-duration: var(--lobe-tooltip-layout-duration);
      transition-property:
        inset-block-start, inset-inline-start, inset-inline-end, inset-block-end, transform;
    }

    &[data-instant] {
      transition: none;
    }

    /* Fallback: never show a tooltip when the anchor is hidden or the positioner falls back to (0,0). */
    &[data-anchor-hidden],
    &[data-zero-origin='true'] {
      pointer-events: none;
      visibility: hidden;
    }

    &[data-placement='top'],
    &[data-placement='topLeft'],
    &[data-placement='topRight'] {
      --lobe-tooltip-translate-x: 0;
      --lobe-tooltip-translate-y: var(--lobe-tooltip-animation-translate);
    }

    &[data-placement='bottom'],
    &[data-placement='bottomLeft'],
    &[data-placement='bottomRight'] {
      --lobe-tooltip-translate-x: 0;
      --lobe-tooltip-translate-y: calc(var(--lobe-tooltip-animation-translate) * -1);
    }

    &[data-placement='left'],
    &[data-placement='leftTop'],
    &[data-placement='leftBottom'] {
      --lobe-tooltip-translate-x: var(--lobe-tooltip-animation-translate);
      --lobe-tooltip-translate-y: 0;
    }

    &[data-placement='right'],
    &[data-placement='rightTop'],
    &[data-placement='rightBottom'] {
      --lobe-tooltip-translate-x: calc(var(--lobe-tooltip-animation-translate) * -1);
      --lobe-tooltip-translate-y: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      --lobe-tooltip-animation-duration: 0s;
      --lobe-tooltip-fade-duration: 0s;
      --lobe-tooltip-animation-duration-exit: 0s;
      --lobe-tooltip-layout-duration: 0s;
    }
  `,viewport:e`
    --lobe-tooltip-viewport-inline-padding: 8px;
    --lobe-tooltip-content-shift: 40%;

    position: relative;

    overflow: clip;
    display: flex;
    gap: 6px;
    align-items: center;

    padding-block: 4px;
    padding-inline: var(--lobe-tooltip-viewport-inline-padding);

    overflow-wrap: break-word;
    white-space: normal;

    [data-previous],
    [data-current] {
      transform: translateX(0);

      display: flex;
      gap: 6px;
      align-items: center;

      opacity: 1;

      transition:
        transform var(--lobe-tooltip-layout-duration) var(--lobe-tooltip-layout-ease),
        opacity calc(var(--lobe-tooltip-layout-duration) / 2) var(--lobe-tooltip-fade-ease);
    }

    [data-previous] {
      position: absolute;
      inset-block-start: 4px;
      inset-inline-start: var(--lobe-tooltip-viewport-inline-padding);
    }

    &[data-activation-direction~='right'] [data-previous][data-ending-style] {
      transform: translateX(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='right'] [data-current][data-starting-style] {
      transform: translateX(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-previous][data-ending-style] {
      transform: translateX(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-current][data-starting-style] {
      transform: translateX(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-previous][data-ending-style] {
      transform: translateY(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-current][data-starting-style] {
      transform: translateY(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-previous][data-ending-style] {
      transform: translateY(var(--lobe-tooltip-content-shift));
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-current][data-starting-style] {
      transform: translateY(calc(var(--lobe-tooltip-content-shift) * -1));
      opacity: 0;
    }
  `}))})),hm,gm,_m,vm,ym=e((()=>{hm=(e,t)=>{if(t)return`row`;switch(e){case`horizontal`:return`row`;case`horizontal-reverse`:return`row-reverse`;case`vertical`:default:return`column`;case`vertical-reverse`:return`column-reverse`}},gm=e=>{if(e)return[`space-between`,`space-around`,`space-evenly`].includes(e)},_m=(e,t)=>hm(e,t)===`row`,vm=e=>typeof e==`number`?`${e}px`:e})),bm,xm,Sm,Cm,wm=e((()=>{ym(),bm=t(l(),1),xm=t(c(),1),Sm=({visible:e,flex:t,gap:n,direction:r,horizontal:i,align:a,justify:o,distribution:s,height:c,width:l,allowShrink:u,padding:d,paddingInline:f,paddingBlock:p,prefixCls:m,as:h=`div`,className:g,style:_,children:v,wrap:y,ref:b,...x})=>{let S=o||s,C=_m(r,i)&&!l&&gm(S)?`100%`:vm(l),w={...t===void 0?{}:{"--lobe-flex":String(t)},...r||i?{"--lobe-flex-direction":hm(r,i)}:{},...y===void 0?{}:{"--lobe-flex-wrap":y},...S===void 0?{}:{"--lobe-flex-justify":S},...a===void 0?{}:{"--lobe-flex-align":a},...C===void 0?{}:{"--lobe-flex-width":C},...c===void 0?{}:{"--lobe-flex-height":vm(c)},...d===void 0?{}:{"--lobe-flex-padding":vm(d)},...f===void 0?{}:{"--lobe-flex-padding-inline":vm(f)},...p===void 0?{}:{"--lobe-flex-padding-block":vm(p)},...n===void 0?{}:{"--lobe-flex-gap":vm(n)},...u?{minWidth:0}:{},..._},T=`lobe-flex`,E=[T,e===!1?`${T}--hidden`:void 0,m?`${m}-flex`:void 0,g].filter(Boolean).join(` `);return(0,xm.jsx)(h,{ref:b,...x,className:E,style:w,children:v})},Cm=(0,bm.memo)(Sm)})),Tm,Em,Dm=e((()=>{wm(),Tm=t(c(),1),Em=({children:e,ref:t,...n})=>(0,Tm.jsx)(Cm,{...n,align:`center`,justify:`center`,ref:t,children:e})})),Q,Om=e((()=>{Q={Alt:`alt`,Backquote:`backquote`,Backslash:`backslash`,Backspace:`backspace`,BracketLeft:`bracketleft`,BracketRight:`bracketright`,Comma:`comma`,CommandOrControl:`commandorcontrol`,Control:`control`,Ctrl:`ctrl`,Down:`down`,Enter:`enter`,Equal:`equal`,Esc:`esc`,Left:`left`,LeftClick:`left-click`,LeftDoubleClick:`left-double-click`,Meta:`meta`,MiddleClick:`middle-click`,Minus:`minus`,Mod:`mod`,Period:`period`,Plus:`equal`,QuestionMark:`slash`,Quote:`quote`,Right:`right`,RightClick:`right-click`,RightDoubleClick:`right-double-click`,Semicolon:`semicolon`,Shift:`shift`,Slash:`slash`,Space:`space`,Tab:`tab`,Up:`up`}})),km,Am,jm,Mm,Nm,Pm=e((()=>{km=t(l(),1),Am=t(c(),1),jm=(0,km.createContext)({}),Mm=(0,km.memo)(({children:e,config:t={}})=>(0,Am.jsx)(jm,{value:t,children:e})),Nm=()=>(0,km.use)(jm)})),Fm,Im=e((()=>{o(),Fm=e=>{if(i(e))return{size:e};let t,n;switch(e){case`large`:t=24,n=2;break;case`middle`:t=20,n=2;break;case`small`:t=14,n=2;break;default:e?(t=e?.size||24,n=e?.strokeWidth||2):(t=`1em`,n=2)}return{size:t,strokeWidth:n}}})),Lm,Rm,zm,Bm=e((()=>{x(),Lm=e=>typeof e==`boolean`?`${e}`:e===0?`0`:e,Rm=T,zm=(e,t)=>n=>{if(t?.variants==null)return Rm(e,n?.class,n?.className);let{variants:r,defaultVariants:i}=t,a=Object.keys(r).map(e=>{let t=n?.[e],a=i?.[e];if(t===null)return null;let o=Lm(t)||Lm(a);return r[e][o]}),o=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return r===void 0||(e[n]=r),e},{});return Rm(e,a,t?.compoundVariants?.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...o}[t]):{...i,...o}[t]===n})?[...e,n,r]:e},[]),n?.class,n?.className)}})),Vm,Hm,Um,Wm=e((()=>{y(),Bm(),Vm=p`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`,Hm=d(({css:e})=>({spin:e`
      animation: ${Vm} 1s linear infinite;
    `})),Um=zm(`anticon`,{defaultVariants:{spin:!1},variants:{spin:{false:null,true:Hm.spin}}})})),Gm,Km,qm,Jm=e((()=>{Pm(),Im(),Wm(),Gm=t(l(),1),Km=t(c(),1),y(),qm=(0,Gm.memo)(({icon:e,size:t,color:n,fill:r=`transparent`,className:i,focusable:a,spin:o,fillRule:s,fillOpacity:c,ref:l,...u})=>{let{color:d,fill:f,fillOpacity:p,fillRule:m,focusable:h,className:_,size:v,...y}=Nm(),{size:b,strokeWidth:x}=(0,Gm.useMemo)(()=>Fm(t||v),[t,v]),S=e;return(0,Km.jsx)(`span`,{className:g(Um({spin:o}),_,i),role:`img`,...y,...u,children:e&&((0,Gm.isValidElement)(e)?e:(0,Km.jsx)(S,{color:n||d,fill:r||f,fillOpacity:c||p,fillRule:s||m,focusable:a||h,height:b,ref:l,size:b,strokeWidth:x,width:b}))})}),qm.displayName=`Icon`})),Ym,Xm=e((()=>{oe(),Ym=V(`LeftClick`,[[`path`,{d:`M2 9.333C2 6.36 3.491 3.71 5.814 2M19 10C19 9.08075 18.8189 8.1705 18.4672 7.32122C18.1154 6.47194 17.5998 5.70026 16.9497 5.05025C16.2997 4.40024 15.5281 3.88463 14.6788 3.53284C13.8295 3.18106 12.9193 3 12 3C11.0807 3 10.1705 3.18106 9.32122 3.53284C8.47194 3.88463 7.70026 4.40024 7.05025 5.05025C6.40024 5.70026 5.88463 6.47194 5.53284 7.32122C5.18106 8.1705 5 9.08075 5 10V14C5 14.9193 5.18106 15.8295 5.53284 16.6788C5.88463 17.5281 6.40024 18.2997 7.05025 18.9497C7.70026 19.5998 8.47194 20.1154 9.32122 20.4672C10.1705 20.8189 11.0807 21 12 21C12.9193 21 13.8295 20.8189 14.6788 20.4672C15.5281 20.1154 16.2997 19.5998 16.9497 18.9497C17.5998 18.2997 18.1154 17.5281 18.4672 16.6788C18.8189 15.8295 19 14.9193 19 14V10Z`,key:`1`}],[`path`,{d:`M12 4V11H6`,key:`2`}]]),Ym.displayName=`LeftClickIcon`})),Zm,Qm=e((()=>{oe(),Zm=V(`LeftDoubleClick`,[[`path`,{d:`M19 10V14C19 14.9193 18.8189 15.8295 18.4672 16.6788C18.1154 17.5281 17.5998 18.2997 16.9497 18.9497C16.2997 19.5998 15.5281 20.1154 14.6788 20.4672C13.8295 20.8189 12.9193 21 12 21C11.0807 21 10.1705 20.8189 9.32122 20.4672C8.47194 20.1154 7.70026 19.5998 7.05025 18.9497C6.40024 18.2997 5.88463 17.5281 5.53284 16.6788C5.18106 15.8295 5 14.9193 5 14V11M5 11V10C5 8.14348 5.7375 6.36301 7.05025 5.05025C8.36301 3.7375 10.1435 3 12 3V11H5ZM2 9.333C2 6.36 3.491 3.71 5.814 2M20.5 2H21.75C22.44 2 23 2.56 23 3.25C23 3.94 22.44 4.5 21.75 4.5C21.06 4.5 20.5 5.06 20.5 5.75V7H23M15 4L18 7M18 4L15 7`,key:`1`}]]),Zm.displayName=`LeftDoubleClickIcon`})),$m,eh=e((()=>{oe(),$m=V(`RightClick`,[[`path`,{d:`M22 9.333C22 6.36 20.509 3.71 18.186 2M19 10C19 9.08075 18.8189 8.1705 18.4672 7.32122C18.1154 6.47194 17.5998 5.70026 16.9497 5.05025C16.2997 4.40024 15.5281 3.88463 14.6788 3.53284C13.8295 3.18106 12.9193 3 12 3C11.0807 3 10.1705 3.18106 9.32122 3.53284C8.47194 3.88463 7.70026 4.40024 7.05025 5.05025C6.40024 5.70026 5.88463 6.47194 5.53284 7.32122C5.18106 8.1705 5 9.08075 5 10V14C5 14.9193 5.18106 15.8295 5.53284 16.6788C5.88463 17.5281 6.40024 18.2997 7.05025 18.9497C7.70026 19.5998 8.47194 20.1154 9.32122 20.4672C10.1705 20.8189 11.0807 21 12 21C12.9193 21 13.8295 20.8189 14.6788 20.4672C15.5281 20.1154 16.2997 19.5998 16.9497 18.9497C17.5998 18.2997 18.1154 17.5281 18.4672 16.6788C18.8189 15.8295 19 14.9193 19 14V10Z`,key:`1`}],[`path`,{d:`M12 4V11H18`,key:`2`}]]),$m.displayName=`RightClickIcon`})),th,nh=e((()=>{oe(),th=V(`RightDoubleClick`,[[`path`,{d:`M12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10V14C19 14.9193 18.8189 15.8295 18.4672 16.6788C18.1154 17.5281 17.5998 18.2997 16.9497 18.9497C16.2997 19.5998 15.5281 20.1154 14.6788 20.4672C13.8295 20.8189 12.9193 21 12 21C11.0807 21 10.1705 20.8189 9.32122 20.4672C8.47194 20.1154 7.70026 19.5998 7.05025 18.9497C6.40024 18.2997 5.88463 17.5281 5.53284 16.6788C5.18106 15.8295 5 14.9193 5 14V10`,key:`1`}],[`path`,{d:`M12 3V11H18.5M22 9.333C22 6.36 20.509 3.71 18.186 2M6.5 2H7.75C8.44 2 9 2.56 9 3.25C9 3.94 8.44 4.5 7.75 4.5C7.06 4.5 6.5 5.06 6.5 5.75V7H9M1 4L4 7M4 4L1 7`,key:`2`}]]),th.displayName=`RightDoubleClickIcon`})),rh,ih,ah=e((()=>{y(),rh=p`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,ih=d(({css:e,cssVar:t})=>({active:e`
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }
  `,blur:e`
    backdrop-filter: saturate(150%) blur(10px);
  `,blurStrong:e`
    backdrop-filter: saturate(150%) blur(36px);
  `,bottomScrollbar:e`
    ::-webkit-scrollbar {
      width: 0;
      height: 4px;
      background-color: transparent;

      &-thumb {
        border-radius: 4px;
        background-color: ${t.colorFill};
        transition: background-color 500ms ${t.motionEaseOut};
      }

      &-corner {
        display: none;
        width: 0;
        height: 0;
      }
    }
  `,disabled:e`
    cursor: not-allowed;
    opacity: 0.5;
  `,gradientAnimation:e`
    border-radius: inherit;
    background-image: linear-gradient(
      -45deg,
      ${t.gold},
      ${t.magenta},
      ${t.geekblue},
      ${t.cyan}
    );
    background-size: 400% 400%;
    animation: 5s ${rh} 5s ease infinite;
  `,noScrollbar:e`
    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
      background-color: transparent;
    }
  `,resetLinkColor:e`
    cursor: pointer;
    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
    }
  `,shadow:e`
    box-shadow:
      0 1px 0 -1px ${t.colorBorder},
      0 1px 2px -0.5px ${t.colorBorder},
      0 2px 2px -1px ${t.colorBorderSecondary},
      0 3px 6px -4px ${t.colorBorderSecondary};
  `,variantBorderless:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,variantBorderlessDanger:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorErrorBg};
      box-shadow: inset 0 0 0 1px ${t.colorErrorBg};
    }
  `,variantBorderlessWithoutHover:e`
    border: none;
    background: none;
    box-shadow: none;
  `,variantFilled:e`
    background: ${t.colorFillTertiary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,variantFilledDanger:e`
    background: ${t.colorErrorBg};

    &:hover {
      background: ${t.colorErrorBgHover};
    }
  `,variantFilledWithoutHover:e`
    background: ${t.colorFillTertiary};
  `,variantOutlined:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};

    &:hover {
      border: 1px solid ${t.colorBorder};
      background: ${t.colorBgContainer};
    }
  `,variantOutlinedDanger:e`
    border: 1px solid ${t.colorErrorBorder};

    &:hover {
      border: 1px solid ${t.colorErrorBorder};
    }
  `,variantOutlinedWithoutHover:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};
  `}))})),oh,sh,ch=e((()=>{ah(),y(),Bm(),oh=d(({css:e,cssVar:t})=>({borderless:e`
      ${ih.variantBorderlessWithoutHover};
      padding-inline: 4px;
    `,filled:ih.variantFilledWithoutHover,inverseThemeDark:e`
      color: ${t.colorTextTertiary};
      background: color-mix(in srgb, ${t.colorBgContainer} 8%, transparent);
    `,inverseThemeLight:e`
      color: ${t.colorTextTertiary};
      background: color-mix(in srgb, ${t.colorBgContainer} 16%, transparent);
    `,outlined:ih.variantOutlinedWithoutHover,root:e`
      overflow: hidden;

      min-width: 1.8em;
      height: 1.8em;
      padding-block: 0;
      padding-inline: 8px;
      border: none;
      border-radius: ${t.borderRadiusSM};

      font-family: ${t.fontFamily};
      font-size: 12px;
      line-height: 1.1;
      color: ${t.colorTextSecondary};
      text-align: center;
      white-space: nowrap;
    `})),sh=zm(oh.root,{compoundVariants:[{class:oh.inverseThemeDark,inverseTheme:!0,isDarkMode:!0},{class:oh.inverseThemeLight,inverseTheme:!0,isDarkMode:!1}],defaultVariants:{inverseTheme:!1,isDarkMode:!1,variant:`filled`},variants:{inverseTheme:{false:null,true:null},isDarkMode:{false:null,true:null},variant:{borderless:oh.borderless,filled:oh.filled,outlined:oh.outlined}}})})),lh,uh,dh,fh,ph,mh,hh=e((()=>{Om(),lh=[Q.Ctrl,Q.Control,Q.CommandOrControl,Q.Meta,Q.Mod,Q.Alt,Q.Shift],uh=Object.fromEntries(lh.map((e,t)=>[e,t])),dh=e=>e.replaceAll(`++`,`+${Q.Equal}`).split(`+`).sort((e,t)=>(uh[e.toLowerCase()]??uh.length)-(uh[t.toLowerCase()]??uh.length)),fh=e=>e.replaceAll(/([A-Z])/g,` $1`).replace(/^./,e=>e.toUpperCase()).trim(),ph=e=>{if(e!==void 0)return e;if(typeof window>`u`||typeof navigator>`u`)return!1;let t=navigator.userAgent.toLowerCase();return/mac|iphone|ipod|ipad|ios/i.test(t)},mh=e=>e.join(`+`)})),gh,_h,vh,yh,bh=e((()=>{wm(),Dm(),Om(),Jm(),Xm(),Qm(),eh(),nh(),ch(),hh(),gh=t(l(),1),_h=t(c(),1),y(),oe(),vh=e=>({[Q.Alt]:e?(0,_h.jsx)(qm,{icon:O,size:{size:`0.95em`}}):`Alt`,[Q.Backspace]:e?(0,_h.jsx)(qm,{icon:R}):`Backspace`,[Q.CommandOrControl]:e?(0,_h.jsx)(qm,{icon:ne,size:{size:`0.95em`}}):`Ctrl`,[Q.Ctrl]:e?(0,_h.jsx)(qm,{icon:j}):`Ctrl`,[Q.Control]:e?(0,_h.jsx)(qm,{icon:j}):`Ctrl`,[Q.Down]:(0,_h.jsx)(qm,{icon:D}),[Q.Enter]:e?(0,_h.jsx)(qm,{icon:ie}):`Enter`,[Q.LeftClick]:(0,_h.jsx)(qm,{icon:Ym,size:{size:`1.2em`,strokeWidth:1.75}}),[Q.Left]:(0,_h.jsx)(qm,{icon:L}),[Q.Meta]:e?(0,_h.jsx)(qm,{icon:ne,size:{size:`0.95em`}}):(0,_h.jsx)(qm,{icon:k}),[Q.MiddleClick]:(0,_h.jsx)(qm,{icon:B,size:{size:`1.2em`,strokeWidth:1.75}}),[Q.Mod]:e?(0,_h.jsx)(qm,{icon:ne,size:{size:`0.95em`}}):`Ctrl`,[Q.RightClick]:(0,_h.jsx)(qm,{icon:$m,size:{size:`1.2em`,strokeWidth:1.75}}),[Q.RightDoubleClick]:(0,_h.jsx)(qm,{icon:th,size:{size:`1.2em`,strokeWidth:1.75}}),[Q.LeftDoubleClick]:(0,_h.jsx)(qm,{icon:Zm,size:{size:`1.2em`,strokeWidth:1.75}}),[Q.Right]:(0,_h.jsx)(qm,{icon:ae}),[Q.Shift]:e?(0,_h.jsx)(qm,{icon:ee,size:{size:`1.15em`,strokeWidth:1.75}}):`Shift`,[Q.Space]:(0,_h.jsx)(qm,{icon:F}),[Q.Tab]:e?(0,_h.jsx)(qm,{icon:z}):`Tab`,[Q.Up]:(0,_h.jsx)(qm,{icon:te}),[Q.Comma]:`,`,[Q.Period]:`.`,[Q.Slash]:`?`,[Q.Semicolon]:`;`,[Q.Quote]:`'`,[Q.Backquote]:"`",[Q.Backslash]:`\\`,[Q.BracketLeft]:`[`,[Q.BracketRight]:`]`,[Q.Minus]:`-`,[Q.Equal]:`+`}),yh=(0,gh.memo)(({variant:e=`filled`,classNames:t,styles:n,keys:r,inverseTheme:i,isApple:a,compact:o,className:s,style:c,...l})=>{let{isDarkMode:u}=b(),d=e===`borderless`,[f,p]=(0,gh.useState)(()=>dh(r)),m=(0,gh.useMemo)(()=>ph(a),[a]);(0,gh.useEffect)(()=>{p(dh(r))},[r]);let h=(0,gh.useMemo)(()=>vh(m),[m]);return(0,_h.jsx)(Cm,{horizontal:!0,align:`center`,className:s,gap:d?6:2,style:c,...l,children:o||d?(0,_h.jsx)(Em,{horizontal:!0,as:`kbd`,gap:6,style:n?.kbdStyle,className:g(sh({inverseTheme:i,isDarkMode:u,variant:e}),t?.kbdClassName),children:f.map((e,t)=>(0,_h.jsx)(`div`,{children:h[e]??fh(e)},t))}):f.map((r,a)=>(0,_h.jsx)(Em,{as:`kbd`,style:n?.kbdStyle,className:g(sh({inverseTheme:i,isDarkMode:u,variant:e}),t?.kbdClassName),children:h[r]??fh(r)},a))})}),yh.displayName=`Hotkey`})),xh,Sh,Ch,wh=e((()=>{bh(),xh=t(l(),1),Sh=t(c(),1),Ch=(0,xh.memo)(({title:e,hotkey:t,hotkeyProps:n})=>{let r=(0,xh.useMemo)(()=>({compact:!0,...n}),[n]);return(0,Sh.jsxs)(Sh.Fragment,{children:[e,t?(0,Sh.jsx)(yh,{keys:t,...r}):null]})}),Ch.displayName=`TooltipContent`})),Th,Eh,Dh,Oh,kh,Ah=e((()=>{_e(),Xp(),$p(),rm(),lm(),fm(),mm(),wh(),Th=t(l(),1),Eh=t(c(),1),y(),ze(),Mp(),zp(),Dh=400,Oh=100,kh=(0,Th.memo)(({children:e,title:t,arrow:n=!1,className:r,classNames:i,closeDelay:a,defaultOpen:o=!1,disabled:s=!1,getPopupContainer:c,hotkey:l,hotkeyProps:u,mouseEnterDelay:d,mouseLeaveDelay:f,onOpenChange:p,open:m,openDelay:h,placement:_=`top`,popupContainer:v,styles:y,zIndex:b,ref:x,positionerProps:S,triggerProps:C,popupProps:w,portalProps:T,standalone:E,...D})=>{let O=Qp(),[k,A]=(0,Th.useState)(!!o),[j,M]=(0,Th.useState)(null),N=(0,Th.useCallback)(e=>{e&&M(e)},[]),P=s?!1:m??k,F=(0,Th.useCallback)(e=>{s&&e||(p?.(e),m===void 0&&A(e))},[s,p,m]),I=(0,Th.useMemo)(()=>h===void 0?d===void 0?Dh:d*1e3:h,[d,h]),L=(0,Th.useMemo)(()=>a===void 0?f===void 0?Oh:f*1e3:a,[a,f]),R=cm[_]??cm.top,ee=n?8:6,z=nm(),te=Jp()??z,{isNativeButtonTriggerElement:ne}=me({children:e}),re=(0,Th.useMemo)(()=>({arrow:g(pm.arrow,i?.arrow),popup:g(pm.popup,r,i?.root,i?.container),positioner:pm.positioner,viewport:g(pm.viewport,i?.content)}),[r,i?.arrow,i?.container,i?.content,i?.root]),B=(0,Th.useMemo)(()=>{if(typeof y!=`function`)return y},[y]),ie=(0,Th.useMemo)(()=>({arrow:B?.arrow,popup:{...B?.root,...B?.container},positioner:{zIndex:b??114514},viewport:B?.content}),[B,b]),V=(0,Th.useMemo)(()=>{let t=(0,Th.isValidElement)(e)&&e.props[`aria-haspopup`]!==void 0&&e.props.id!==void 0?e.props.id:void 0,n={closeDelay:L,delay:I,disabled:s,...C,id:t??C?.id};return(0,Th.isValidElement)(e)?(0,Eh.jsx)(Zd,{...n,render:t=>{let n=(()=>{if(ne)return t;let{type:e,ref:n,...r}=t;return r})(),r=e.props,i=Ce(D,r,n),a=r[`aria-haspopup`]!==void 0&&r.id!==void 0;return(0,Th.cloneElement)(e,{...i,id:a?r.id:i.id,ref:Rp([e.ref,t.ref,x,N])})}}):(0,Eh.jsx)(Zd,{...n,ref:Rp([x,N]),children:e})},[e,s,ne,x,L,I,D,N,C]),ae=(0,Th.useMemo)(()=>{if(v)return v;if(!(!c||!O||!j))return c(j)},[v,c,O,j]),oe=(0,Th.useMemo)(()=>(0,Eh.jsx)(Hf,{align:R.align,className:re.positioner,"data-placement":_,side:R.side,sideOffset:ee,style:ie.positioner,...S,children:(0,Eh.jsxs)(Kf,{className:re.popup,style:ie.popup,...w,children:[n&&(0,Eh.jsx)(Yf,{className:re.arrow,style:ie.arrow,children:dm}),(0,Eh.jsx)(Ep,{className:re.viewport,style:ie.viewport,children:(0,Eh.jsx)(Ch,{hotkey:l,hotkeyProps:u,title:t})})]})}),[n,ee,l,u,_,R.align,R.side,w,S,re,ie,t]);if(t==null&&!l)return e;let se=ae??te;return(0,Eh.jsxs)(Td,{defaultOpen:o,disabled:s,open:P,onOpenChange:F,children:[V,se?(0,Eh.jsx)(df,{container:se,...T,children:oe}):null]})}),kh.displayName=`TooltipStandalone`})),jh,Mh,Nh,Ph=e((()=>{fe(),Gp(),Ah(),jh=t(l(),1),Mh=t(c(),1),Nh=e=>(0,jh.use)(ue)&&e.open===void 0&&e.defaultOpen===void 0&&!e.standalone?(0,Mh.jsx)(Wp,{...e}):(0,Mh.jsx)(kh,{...e})})),Fh,Ih,Lh,Rh,zh=e((()=>{Fh=t(l(),1),Ih=e=>{if(!e||!e.isConnected)return!0;try{let t=e;for(;t;){if(getComputedStyle(t).display===`none`)return!0;t=t.parentElement}return!1}catch{return!1}},Lh=(e,t,n)=>{let r=n?.enabled??!0,i=e.useState?.(`open`)??!!e.state.open,a=r&&i;(0,Fh.useLayoutEffect)(()=>{if(!a)return;let n=0,r=()=>{if(Ih(e.state.activeTriggerElement??null)){t();return}n=window.requestAnimationFrame(r)};return r(),()=>window.cancelAnimationFrame(n)},[t,a,e])},Rh=(e,t)=>{let n=t?.enabled??!0,r=t?.threshold??.5,i=e.useState?.(`open`)??!!e.state.open,a=e.useState?.(`positionerElement`)??e.state.positionerElement??null;(0,Fh.useLayoutEffect)(()=>{let t=e.state.positionerElement??a;if(!n||!i||!t){t&&delete t.dataset.zeroOrigin;return}let o=0,s=()=>{let n=e.state.positionerElement??t;if(!n)return;let i=n.getBoundingClientRect();Math.abs(i.left)<=r&&Math.abs(i.top)<=r?n.dataset.zeroOrigin=`true`:delete n.dataset.zeroOrigin,o=window.requestAnimationFrame(s)};return s(),()=>{window.cancelAnimationFrame(o);let n=e.state.positionerElement??t;n&&delete n.dataset.zeroOrigin}},[n,i,a,e,r])}})),Bh,Vh,Hh,Uh=e((()=>{fe(),Xp(),rm(),lm(),fm(),mm(),wh(),zh(),Bh=t(l(),1),Vh=t(c(),1),y(),Mp(),Hh=({children:e,disableDestroyOnInvalidTrigger:t=!1,disableZeroOriginGuard:n=!1,layoutAnimation:r=!1,popupContainer:i,...a})=>{let[{handle:o,key:s},c]=(0,Bh.useState)(()=>({handle:Op(),key:0})),l=(0,Bh.useRef)(null),u=(0,Bh.useCallback)(()=>{l.current=null,c(({key:e})=>({handle:Op(),key:e+1}))},[]),d=(0,Bh.useCallback)(e=>{l.current?.onOpenChange?.(e)},[]),f=nm(),p=Jp()??f;return Lh(o.store,u,{enabled:!t}),Rh(o.store,{enabled:!n}),(0,Vh.jsx)(ue,{value:o,children:(0,Vh.jsxs)(de,{value:a,children:[e,(0,Vh.jsx)(Td,{handle:o,onOpenChange:d,children:({payload:e})=>{let t=e??null;if(l.current=t,!t||t.title==null&&!t.hotkey)return null;let n=t.arrow??!1,a=t.placement??`top`,o=cm[a]??cm.top,s=n?8:6,c={arrow:g(pm.arrow,t.classNames?.arrow),popup:g(pm.popup,t.className,t.classNames?.root,t.classNames?.container),positioner:pm.positioner,viewport:g(pm.viewport,t.classNames?.content)},u=(()=>{if(typeof t.styles!=`function`)return t.styles})(),d={arrow:u?.arrow,popup:{...u?.root,...u?.container},positioner:{zIndex:t.zIndex??114514},viewport:u?.content},f=(0,Vh.jsx)(Ep,{className:c.viewport,style:d.viewport,children:(0,Vh.jsx)(Ch,{hotkey:t.hotkey,hotkeyProps:t.hotkeyProps,title:t.title})}),m=(0,Vh.jsx)(Hf,{align:o.align,className:c.positioner,"data-layout-animation":r||void 0,"data-placement":a,side:o.side,sideOffset:s,style:d.positioner,...t.positionerProps,children:(0,Vh.jsxs)(Kf,{className:c.popup,"data-layout-animation":r||void 0,style:d.popup,...t.popupProps,children:[n&&(0,Vh.jsx)(Yf,{className:c.arrow,style:d.arrow,children:dm}),f]})}),h=t.popupContainer??i??p;return h?(0,Vh.jsx)(df,{container:h,children:m}):null}},s)]})})},Hh.displayName=`TooltipGroup`})),Wh,Gh=e((()=>{Wh={large:40,middle:32,small:24}})),Kh,qh=e((()=>{Gh(),y(),Kh=d(({css:e,cssVar:t})=>({base:e`
    cursor: pointer;

    position: relative;

    display: inline-flex;
    gap: 6px;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    border: 1px solid ${t.colorBorder};

    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;

    transition:
      color 160ms cubic-bezier(0.32, 0.72, 0, 1),
      background 160ms cubic-bezier(0.32, 0.72, 0, 1),
      border-color 160ms cubic-bezier(0.32, 0.72, 0, 1),
      box-shadow 160ms cubic-bezier(0.32, 0.72, 0, 1);

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${t.colorPrimaryBorder};
    }

    &:disabled,
    &[aria-disabled='true'] {
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,sizeSmall:e`
    height: ${Wh.small}px;
    padding-inline: 8px;
    border-radius: ${t.borderRadiusSM};
    font-size: 12px;
  `,sizeMiddle:e`
    height: ${Wh.middle}px;
    padding-inline: 14px;
    border-radius: ${t.borderRadiusSM};
    font-size: 13px;
  `,sizeLarge:e`
    height: ${Wh.large}px;
    padding-inline: 16px;
    border-radius: ${t.borderRadius};
    font-size: 14px;
  `,shapeCircle:e`
    padding-inline: 0;
    border-radius: 50%;
  `,shapeRound:e`
    border-radius: 999px;
  `,block:e`
    width: 100%;
  `,iconEnd:e`
    flex-direction: row-reverse;
  `,iconOnlySmall:e`
    width: 24px;
    padding-inline: 0;
  `,iconOnlyMiddle:e`
    width: 32px;
    padding-inline: 0;
  `,iconOnlyLarge:e`
    width: 40px;
    padding-inline: 0;
  `,iconBox:e`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,spinnerSlot:e`
    overflow: hidden;

    width: 0;
    margin-inline-end: -6px;

    opacity: 0;

    transition:
      width 380ms cubic-bezier(0.22, 1, 0.36, 1),
      margin 380ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 260ms cubic-bezier(0.22, 1, 0.36, 1);
  `,spinnerSlotEnd:e`
    margin-inline: -6px 0;
  `,spinnerSlotShow:e`
    width: 12px;
    margin-inline: 0;
    opacity: 1;
  `,variantDefault:e`
    background: ${t.colorBgContainer};

    /* &:hover/&:active included so the anchor form outranks antd's global a:hover/a:active link color */
    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryBorder};
      color: ${t.colorPrimaryText};
    }
  `,variantPrimary:e`
    border-color: ${t.colorPrimary};
    background: ${t.colorPrimary};

    &,
    &:hover,
    &:active {
      color: ${t.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryHover};
      background: ${t.colorPrimaryHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryActive};
      background: ${t.colorPrimaryActive};
    }
  `,variantDashed:e`
    border-style: dashed;
    background: ${t.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorPrimaryBorder};
      color: ${t.colorPrimaryText};
    }
  `,variantFill:e`
    border-color: transparent;
    background: ${t.colorFillTertiary};

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFill};
    }
  `,variantText:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }
  `,variantLink:e`
    padding-inline: 0;
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorPrimaryHover};
      background: transparent;
    }
  `,dangerOutlined:e`
    border-color: ${t.colorError};
    background: ${t.colorBgContainer};

    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorHover};
      color: ${t.colorErrorHover};
      background: ${t.colorBgContainer};
    }
  `,dangerSolid:e`
    border-color: ${t.colorError};
    background: ${t.colorError};

    &,
    &:hover,
    &:active {
      color: ${t.colorBgLayout};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorHover};
      background: ${t.colorErrorHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      border-color: ${t.colorErrorActive};
      background: ${t.colorErrorActive};
    }
  `,dangerFill:e`
    border-color: transparent;
    color: ${t.colorError};
    background: ${t.colorErrorBg};

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
      background: ${t.colorErrorBgHover};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorActive};
      background: ${t.colorErrorBgHover};
    }
  `,dangerInline:e`
    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
    }
  `,ghostDefault:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorText};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      background: ${t.colorFill};
    }
  `,ghostPrimary:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorPrimary};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorPrimaryHover};
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorPrimaryActive};
      background: ${t.colorFill};
    }
  `,ghostDanger:e`
    border-color: transparent;
    background: transparent;

    &,
    &:hover,
    &:active {
      color: ${t.colorError};
    }

    &:hover:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorHover};
      background: ${t.colorFillSecondary};
    }

    &:active:not(:disabled, [aria-disabled='true']) {
      color: ${t.colorErrorActive};
      background: ${t.colorFill};
    }
  `,spinner:e`
    @keyframes base-button-spin {
      to {
        transform: rotate(360deg);
      }
    }

    display: inline-block;

    width: 12px;
    height: 12px;
    border: 1.5px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: 50%;

    animation: base-button-spin 0.6s linear infinite;
  `}))})),Jh,Yh,Xh,Zh,Qh=e((()=>{Jh=t(l(),1),Yh=t(c(),1),Xh=(0,Jh.createContext)(null),(0,Jh.memo)(({children:e,motion:t})=>(0,Yh.jsx)(Xh,{value:t,children:e})),Zh=()=>{let e=(0,Jh.use)(Xh);if(!e)throw Error(`Please wrap your app with <ConfigProvider> (or <MotionProvider>) and pass the motion component`);return e}})),$h,eg,tg,ng,rg,ig,ag,og,sg,cg=e((()=>{Qh(),Jm(),qh(),$h=t(l(),1),eg=t(c(),1),y(),tg=e=>e==null?null:(0,$h.isValidElement)(e)||typeof e==`string`||typeof e==`number`?e:(0,eg.jsx)(qm,{icon:e,size:`small`}),ng=e=>e===`small`?Kh.sizeSmall:e===`large`?Kh.sizeLarge:Kh.sizeMiddle,rg=e=>e===`small`?Kh.iconOnlySmall:e===`large`?Kh.iconOnlyLarge:Kh.iconOnlyMiddle,ig=({danger:e,ghost:t,type:n})=>{if(t&&n!==`text`&&n!==`link`)return e?Kh.ghostDanger:n===`primary`?Kh.ghostPrimary:Kh.ghostDefault;switch(n){case`primary`:return e?Kh.dangerSolid:Kh.variantPrimary;case`dashed`:return e?g(Kh.variantDashed,Kh.dangerOutlined):Kh.variantDashed;case`fill`:return e?Kh.dangerFill:Kh.variantFill;case`text`:return e?g(Kh.variantText,Kh.dangerInline):Kh.variantText;case`link`:return e?g(Kh.variantLink,Kh.dangerInline):Kh.variantLink;default:return e?g(Kh.variantDefault,Kh.dangerOutlined):Kh.variantDefault}},ag={scale:.98},og={damping:26,mass:.6,stiffness:600,type:`spring`},sg=({block:e,children:t,className:n,classNames:r,danger:i=!1,disabled:a,ghost:o=!1,href:s,htmlType:c=`button`,icon:l,iconPosition:u=`start`,loading:d,onClick:f,ref:p,shape:m=`default`,size:h=`middle`,styles:_,target:v,type:y=`default`,...b})=>{let x=Zh(),S=a||d,C=ng(h),w=ig({danger:i,ghost:o,type:y}),T=m===`circle`?Kh.shapeCircle:m===`round`?Kh.shapeRound:void 0,E=!(t!=null&&t!==!1&&t!==``)&&(d||l)?rg(h):void 0,D=g(Kh.base,C,w,T,e&&Kh.block,u===`end`&&Kh.iconEnd,E,n),O=(0,eg.jsxs)(eg.Fragment,{children:[(0,eg.jsx)(`span`,{"aria-hidden":!d,style:_?.icon,className:g(Kh.iconBox,Kh.spinnerSlot,d&&Kh.spinnerSlotShow,u===`end`&&Kh.spinnerSlotEnd,r?.icon),children:(0,eg.jsx)(`span`,{className:Kh.spinner})}),l&&!d?(0,eg.jsx)(`span`,{className:g(Kh.iconBox,r?.icon),style:_?.icon,children:tg(l)}):null,t]}),k=S?{}:{transition:og,whileTap:ag};if(s!==void 0){let e=e=>{if(S){e.preventDefault();return}f?.(e)};return(0,eg.jsx)(x.a,{"aria-busy":d||void 0,"aria-disabled":S||void 0,href:a?void 0:s,target:v,...b,className:D,ref:p,onClick:e,...k,children:O})}let A=e=>{if(S){e.preventDefault();return}f?.(e)};return(0,eg.jsx)(x.button,{type:c,...b,"aria-busy":d||void 0,"aria-disabled":S||void 0,className:D,disabled:a,ref:p,onClick:A,...k,children:O})},sg.displayName=`BaseButton`})),lg,ug,dg,fg=e((()=>{y(),Bm(),lg=d(({css:e,cssVar:t})=>({icon:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${t.colorBgLayout};

    transition:
      opacity 200ms ${t.motionEaseOut},
      scale 200ms ${t.motionEaseOut};

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,iconLeft:e`
    inset-inline-start: 4px;
    scale: 0;
    opacity: 0;

    [data-checked] & {
      scale: 1;
      opacity: 1;
    }
  `,iconLeftSmall:e`
    inset-inline-start: 4px;
    scale: 0;
    opacity: 0;

    [data-checked] & {
      scale: 1;
      opacity: 1;
    }
  `,iconRight:e`
    inset-inline-end: 4px;

    [data-checked] & {
      scale: 0;
      opacity: 0;
    }
  `,iconRightSmall:e`
    inset-inline-end: 4px;

    [data-checked] & {
      scale: 0;
      opacity: 0;
    }
  `,iconThumb:e`
    position: relative;
    inset: unset;
    transform: none;
    color: ${t.colorPrimary};
  `,loading:e`
    @keyframes lobe-switch-loading {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    animation: lobe-switch-loading 1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation-duration: 0s;
    }
  `,root:e`
    --switch-dir: 1;

    cursor: pointer;
    user-select: none;

    position: relative;

    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    box-sizing: border-box;
    padding: 2px;
    border: 0;
    border-radius: 100px;

    background: ${t.colorFillSecondary};
    outline: none;
    box-shadow: inset 0 1.5px 2px rgb(0 0 0 / 8%);

    transition:
      background 200ms ${t.motionEaseOut},
      box-shadow 200ms ${t.motionEaseOut};

    &:dir(rtl) {
      --switch-dir: -1;
    }

    [dir='rtl'] & {
      --switch-dir: -1;
    }

    &:focus-visible {
      outline: 2px solid ${t.colorPrimaryBorder};
      outline-offset: 1px;
    }

    &:hover:not([data-disabled]) {
      background: ${t.colorFill};
    }

    &[data-checked] {
      background: ${t.colorPrimary};
      box-shadow: inset 0 1.5px 3px rgb(0 0 0 / 18%);

      &:hover:not([data-disabled]) {
        background: ${t.colorPrimaryHover};
      }
    }

    &[data-disabled] {
      cursor: not-allowed;
      opacity: 0.45;
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,rootDefault:e`
    width: 36px;
    min-width: 36px;
    height: 22px;
  `,rootSmall:e`
    width: 28px;
    min-width: 28px;
    height: 16px;
  `,thumb:e`
    transform: translateX(calc(var(--switch-x, 0px) * var(--switch-dir, 1)));

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${t.colorBgContainer};
    box-shadow:
      0 0 0 0.5px rgb(0 0 0 / 4%),
      0 1px 1px rgb(0 0 0 / 6%),
      0 3px 8px rgb(0 30 80 / 16%);

    transition: box-shadow 200ms ${t.motionEaseOut};

    [role='switch']:hover:not([data-disabled]) > & {
      box-shadow:
        0 0 0 0.5px rgb(0 0 0 / 4%),
        0 1px 1px rgb(0 0 0 / 8%),
        0 6px 14px rgb(0 30 80 / 24%);
    }

    [data-disabled] > & {
      box-shadow: none;
    }

    @media (prefers-reduced-motion: reduce) {
      transition-duration: 0s;
    }
  `,thumbDefault:e`
    width: 18px;
    height: 18px;
  `,thumbSmall:e`
    width: 12px;
    height: 12px;
  `})),ug=zm(lg.root,{defaultVariants:{size:`default`},variants:{size:{default:lg.rootDefault,small:lg.rootSmall}}}),dg=zm(lg.thumb,{defaultVariants:{size:`default`},variants:{size:{default:lg.thumbDefault,small:lg.thumbSmall}}})}));function pg({controlled:e,default:t,name:n,state:r=`value`}){let{current:i}=mg.useRef(e!==void 0),[a,o]=mg.useState(t);return[i?e:a,mg.useCallback(e=>{i||o(e)},[])]}var mg,hg=e((()=>{mg=t(l(),1)}));function gg(e=!1){let t=_g.useContext(vg);if(t===void 0&&!e)throw Error(nt(16));return t}var _g,vg,yg=e((()=>{rt(),_g=t(l(),1),vg=_g.createContext(void 0)}));function bg(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return{props:xg.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}}var xg,Sg=e((()=>{xg=t(l(),1)}));function Cg(e={}){let{disabled:t=!1,focusableWhenDisabled:n,tabIndex:r=0,native:i=!0,composite:a}=e,o=Eg.useRef(null),s=gg(!0),c=a??s!==void 0,{props:l}=bg({focusableWhenDisabled:n,disabled:t,composite:c,tabIndex:r,isNativeButton:i}),u=Eg.useCallback(()=>{let e=o.current;wg(e)&&c&&t&&l.disabled===void 0&&e.disabled&&(e.disabled=!1)},[t,l.disabled,c]);return H(u,[u]),{getButtonProps:Eg.useCallback((e={})=>{let{onClick:n,onMouseDown:r,onKeyUp:a,onKeyDown:o,onPointerDown:s,...u}=e;return Ce({onClick(e){if(t){e.preventDefault();return}n?.(e)},onMouseDown(e){t||r?.(e)},onKeyDown(e){if(t||(Pe(e),o?.(e),e.baseUIHandlerPrevented))return;let r=e.target===e.currentTarget,a=e.currentTarget,s=wg(a),l=!i&&Tg(a),u=r&&(i?s:!l),d=e.key===`Enter`,f=e.key===` `,p=a.getAttribute(`role`),m=p?.startsWith(`menuitem`)||p===`option`||p===`gridcell`;if(r&&c&&f){if(e.defaultPrevented&&m)return;e.preventDefault(),l||i&&s?(a.click(),e.preventBaseUIHandler()):u&&(n?.(e),e.preventBaseUIHandler());return}u&&(!i&&(f||d)&&e.preventDefault(),!i&&d&&n?.(e))},onKeyUp(e){if(!t){if(Pe(e),a?.(e),e.target===e.currentTarget&&i&&c&&wg(e.currentTarget)&&e.key===` `){e.preventDefault();return}e.baseUIHandlerPrevented||e.target===e.currentTarget&&!i&&!c&&e.key===` `&&n?.(e)}},onPointerDown(e){if(t){e.preventDefault();return}s?.(e)}},i?{type:`button`}:{role:`button`},l,u)},[t,l,c,i]),buttonRef:q(e=>{o.current=e,u()})}}function wg(e){return Zt(e)&&e.tagName===`BUTTON`}function Tg(e){return!!(e?.tagName===`A`&&e?.href)}var Eg,Dg=e((()=>{Eg=t(l(),1),_n(),Qr(),U(),ze(),yg(),Sg()})),Og=e((()=>{Dg()}));function kg(){let e=Ag.useContext(jg);if(e===void 0)throw Error(nt(63));return e}var Ag,jg,Mg=e((()=>{rt(),Ag=t(l(),1),jg=Ag.createContext(void 0)})),Ng,Pg=e((()=>{Ng=function(e){return e.disabled=`data-disabled`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({})})),Fg,Ig,Lg,Rg,zg=e((()=>{Pg(),Fg={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},Ig={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},Lg={disabled:!1,...Ig},Rg={valid(e){return e===null?null:e?{[Ng.valid]:``}:{[Ng.invalid]:``}}}})),Bg,Vg=e((()=>{Bg=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.readonly=`data-readonly`,e.required=`data-required`,e.valid=`data-valid`,e.invalid=`data-invalid`,e.touched=`data-touched`,e.dirty=`data-dirty`,e.filled=`data-filled`,e.focused=`data-focused`,e}({})})),Hg,Ug=e((()=>{zg(),Vg(),Hg={...Rg,checked(e){return e?{[Bg.checked]:``}:{[Bg.unchecked]:``}}}})),Wg=e((()=>{Kn()}));function Gg(e=!0){let t=Kg.useContext(Jg);if(t.setValidityData===Un&&!e)throw Error(nt(28));return t}var Kg,qg,Jg,Yg=e((()=>{rt(),Kg=t(l(),1),Kn(),Wg(),zg(),qg={invalid:void 0,name:void 0,validityData:{state:Fg,errors:[],error:``,value:``,initialValue:null},setValidityData:Un,disabled:void 0,touched:Ig.touched,setTouched:Un,dirty:Ig.dirty,setDirty:Un,filled:Ig.filled,setFilled:Un,focused:Ig.focused,setFocused:Un,validate:()=>null,validationMode:`onSubmit`,validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:Lg,markedDirtyRef:{current:!1},registerFieldControl:Un,validation:{getValidationProps:(e,t=Gn)=>t,inputRef:{current:null},registerInput:Un,commit:async()=>{},change:Un}},Jg=Kg.createContext(qg)}));function Xg(e,t,n,r,i=!0,a){let{registerFieldControl:o}=Gg(),s=Zg.useRef(null);s.current||=Symbol(),H(()=>{let c=s.current;if(!(!c||!i))return o(c,{controlRef:e,getValue:r,id:t,name:a,value:n}),()=>{o(c,void 0)}},[e,i,r,t,a,o,n])}var Zg,Qg=e((()=>{Zg=t(l(),1),U(),Yg()}));function $g(){return e_.useContext(t_)}var e_,t_,n_=e((()=>{e_=t(l(),1),Wg(),t_=e_.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:Un,validationMode:`onSubmit`,submitAttemptedRef:{current:!1}})}));function r_(){return i_.useContext(a_)}var i_,a_,o_=e((()=>{i_=t(l(),1),Wg(),a_=i_.createContext({controlId:void 0,registerControlId:Un,labelId:void 0,setLabelId:Un,messageIds:[],setMessageIds:Un,getDescriptionProps:e=>e})}));function s_(e,t,n,r=!0,i){let[a,o]=u_.useState(),s=Rd(i?`${i}-label`:void 0),c=e??t??a;return H(()=>{let i=e||t||!r?void 0:c_(n.current,s);a!==i&&o(i)}),c}function c_(e,t){let n=l_(e);if(n)return!n.id&&t&&(n.id=t),n.id||void 0}function l_(e){if(!e)return;let t=e.parentElement;if(t&&t.tagName===`LABEL`)return t;let n=e.id;if(n){let t=e.nextElementSibling;if(t&&t.htmlFor===n)return t}let r=e.labels;return r&&r[0]}var u_,d_=e((()=>{u_=t(l(),1),U(),zd()}));function f_(e={}){let{id:t,implicit:n=!1,controlRef:r}=e,{controlId:i,registerControlId:a}=r_(),o=Rd(t),s=n?i:void 0,c=Be(()=>Symbol(`labelable-control`)),l=p_.useRef(!1),u=p_.useRef(t!=null),d=q(()=>{!l.current||a===Un||(l.current=!1,a(c.current,void 0))});return H(()=>{if(a===Un)return;let e;if(n){let n=r?.current;e=Xt(n)&&n.closest(`label`)!=null?t??null:s??o}else if(t!=null)u.current=!0,e=t;else if(u.current)e=o;else{d();return}if(e===void 0){d();return}l.current=!0,a(c.current,e)},[t,r,s,a,n,o,c,d]),p_.useEffect(()=>d,[d]),i??o}var p_,m_=e((()=>{p_=t(l(),1),U(),Qr(),Ue(),_n(),Wg(),zd(),o_()}));function h_(e,t){let n=g_.useRef(e),r=q(t);H(()=>{n.current!==e&&r(n.current)},[e,r]),H(()=>{n.current=e},[e])}var g_,__=e((()=>{g_=t(l(),1),U(),Qr()})),v_,y_,b_,x_=e((()=>{v_=t(l(),1),hg(),Vr(),U(),li(),Kn(),ai(),X(),ze(),zd(),Og(),Mg(),Ug(),Yg(),Qg(),n_(),o_(),d_(),m_(),Er(),wr(),__(),y_=t(c(),1),b_=v_.forwardRef(function(e,t){let{checked:n,className:r,defaultChecked:i,"aria-labelledby":a,form:o,id:s,inputRef:c,name:l,nativeButton:u=!1,onCheckedChange:d,readOnly:f=!1,required:p=!1,disabled:m=!1,render:h,uncheckedValue:g,value:_,style:v,...y}=e,{clearErrors:b}=$g(),{state:x,setTouched:S,setDirty:C,validityData:w,setFilled:T,setFocused:E,validationMode:D,disabled:O,name:k,validation:A}=Gg(),{labelId:j}=r_(),M=O||m,N=k??l,P=v_.useRef(null),F=Fr(P,c,A.inputRef),I=v_.useRef(null),L=Rd(),R=f_({id:s,implicit:!1,controlRef:I}),ee=u?void 0:R,[z,te]=pg({controlled:n,default:!!i,name:`Switch`,state:`checked`});Xg(I,L,z,void 0,!M,l),H(()=>{P.current&&T(P.current.checked)},[P,T]),h_(z,()=>{b(N),C(z!==w.initialValue),T(z),A.change(z)});let{getButtonProps:ne,buttonRef:re}=Cg({disabled:M,native:u}),B=s_(a,j,P,!u,ee),ie={id:u?R:L,role:`switch`,"aria-checked":z,"aria-readonly":f||void 0,"aria-required":p||void 0,"aria-labelledby":B,onFocus(){M||E(!0)},onBlur(){let e=P.current;!e||M||(S(!0),E(!1),D===`onBlur`&&A.commit(e.checked))},onClick(e){if(f||M)return;e.preventDefault();let t=P.current;t&&t.dispatchEvent(new(qt(t)).PointerEvent(`click`,{bubbles:!0,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey}))}},V=Ce({checked:z,disabled:M,form:o,id:ee,name:N,required:p,style:N?ci:si,tabIndex:-1,type:`checkbox`,"aria-hidden":!0,ref:F,onChange(e){if(e.nativeEvent.defaultPrevented)return;if(f){e.preventDefault();return}let t=e.currentTarget.checked,n=G(qn,e.nativeEvent);d?.(t,n),!n.isCanceled&&te(t)},onFocus(){I.current?.focus()}},e=>A.getValidationProps(M,e),_===void 0?Gn:{value:_}),ae=v_.useMemo(()=>({...x,checked:z,disabled:M,readOnly:f,required:p}),[x,z,M,f,p]),oe=Y(`span`,e,{state:ae,ref:[t,I,re],props:[ie,y,ne,e=>A.getValidationProps(M,e)],stateAttributesMapping:Hg});return(0,y_.jsxs)(jg.Provider,{value:ae,children:[oe,!z&&N&&g!==void 0&&(0,y_.jsx)(`input`,{type:`hidden`,form:o,name:N,value:g,disabled:M}),(0,y_.jsx)(`input`,{...V,suppressHydrationWarning:!0})]})})})),S_,C_,w_=e((()=>{S_=t(l(),1),Mg(),X(),Ug(),C_=S_.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e;return Y(`span`,e,{state:kg(),ref:t,stateAttributesMapping:Hg,props:a})})})),T_=e((()=>{x_(),w_()})),E_=e((()=>{T_()})),D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_=e((()=>{fg(),D_=t(l(),1),O_=t(c(),1),y(),_(),E_(),C(),k_={default:{checkedX:14,pressedCheckedX:10,pressedWidth:22,width:18},small:{checkedX:12,pressedCheckedX:8,pressedWidth:16,width:12}},A_={damping:24,stiffness:360,type:`spring`},j_=(0,D_.createContext)(null),M_=()=>{let e=(0,D_.use)(j_);if(!e)throw Error(`useSwitchContext must be used within a SwitchRoot`);return e},N_=({checked:e,className:t,defaultChecked:n,onCheckedChange:r,onClick:i,onKeyDown:a,onKeyUp:o,onPointerCancel:s,onPointerDown:c,onPointerLeave:l,onPointerUp:u,size:d=`default`,children:f,disabled:p,readOnly:h,required:_,inputRef:v,id:y,name:b,...x})=>{let[S,C]=(0,D_.useState)(!1),w=(0,D_.useRef)(null),[T,E]=m(n??!1,{defaultValue:n,onChange:e=>{w.current&&r?.(e,w.current)},value:e}),D=ug({size:d}),O=(0,D_.useMemo)(()=>({isChecked:!!T,isPressed:S,setIsChecked:e=>E(e),setIsPressed:C}),[T,S,E]),k=e=>{w.current=e,i?.(!T,e)},A=!p&&!h,j=e=>{(e.key===`Enter`||e.key===` `)&&(w.current=e),e.key===` `&&A&&C(!0),a?.(e)},M=e=>{e.key===` `&&C(!1),o?.(e)},N=e=>{A&&C(!0),c?.(e)},P=e=>{C(!1),u?.(e)},F=e=>{C(!1),s?.(e)},I=e=>{C(!1),l?.(e)};return(0,O_.jsx)(j_,{value:O,children:(0,O_.jsx)(b_,{nativeButton:!0,checked:T,defaultChecked:n,disabled:p,id:y,inputRef:v,name:b,readOnly:h,required:_,render:(0,O_.jsx)(`button`,{...x,className:g(D,t),onClick:k,onKeyDown:j,onKeyUp:M,onPointerCancel:F,onPointerDown:N,onPointerLeave:I,onPointerUp:P}),onCheckedChange:E,children:f})})},N_.displayName=`SwitchRoot`,P_=({className:e,size:t=`default`,style:n,children:r,...i})=>{let{isChecked:a,isPressed:o}=M_(),s=(0,D_.useRef)(null),c=dg({size:t}),l=k_[t],u=a?o?l.pressedCheckedX:l.checkedX:0,d=o?l.pressedWidth:l.width,[f]=(0,D_.useState)(()=>({width:S(d),x:S(u)})),[p]=(0,D_.useState)(()=>({"--switch-x":`${u}px`,width:d}));return(0,D_.useEffect)(()=>{let e=s.current;if(!e)return;let t=f.x.on(`change`,t=>{e.style.setProperty(`--switch-x`,`${t}px`)}),n=f.width.on(`change`,t=>{e.style.setProperty(`width`,`${t}px`)});return()=>{t(),n()}},[f]),(0,D_.useEffect)(()=>{let e=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1?{duration:0}:A_,t=[w(f.x,u,e),w(f.width,d,e)];return()=>{for(let e of t)e.stop()}},[f,u,d]),(0,O_.jsx)(C_,{render:(0,O_.jsx)(`span`,{...i,className:g(c,e),ref:s,style:{...p,...n},children:r})})},P_.displayName=`SwitchThumb`,F_=(e,t)=>e===`thumb`?lg.iconThumb:e===`left`?t===`small`?lg.iconLeftSmall:lg.iconLeft:t===`small`?lg.iconRightSmall:lg.iconRight,I_=({children:e,className:t,position:n,size:r=`default`,...i})=>{let a=F_(n,r);return(0,O_.jsx)(`span`,{className:g(lg.icon,a,t),...i,children:e})},I_.displayName=`SwitchIcon`})),R_,z_,B_,V_=e((()=>{Jm(),fg(),L_(),R_=t(l(),1),z_=t(c(),1),y(),oe(),B_=(0,R_.memo)(({autoFocus:e,checked:t,checkedChildren:n,className:r,classNames:i,defaultChecked:a,defaultValue:o,disabled:s,id:c,loading:l,name:u,onChange:d,onClick:f,ref:p,rootClassName:m,size:h=`default`,style:_,styles:v,tabIndex:y,title:b,unCheckedChildren:x,value:S})=>{let C=s||l,w=S??t,T=o??a;return(0,z_.jsxs)(N_,{autoFocus:e,checked:w,className:g(r,m,i?.root),defaultChecked:T,disabled:C,id:c,name:u,ref:p,size:h,style:{..._,...v?.root},tabIndex:y,title:b,onCheckedChange:d,onClick:f,children:[n&&(0,z_.jsx)(I_,{className:i?.content,position:`left`,size:h,style:v?.content,children:n}),x&&(0,z_.jsx)(I_,{className:i?.content,position:`right`,size:h,style:v?.content,children:x}),(0,z_.jsx)(P_,{className:i?.thumb,size:h,style:v?.thumb,children:l&&(0,z_.jsx)(qm,{className:lg.loading,icon:M,size:h===`small`?8:12,style:{color:`var(--lobe-color-primary)`}})})]})}),B_.displayName=`Switch`})),H_,U_=e((()=>{H_={ContextTrigger:`lobe-context-trigger`,DropdownMenuTrigger:`lobe-dropdown-menu-trigger`}})),W_,G_=e((()=>{W_={floating:1100,modal:1200,toast:1e5,step:10}}));function K_(e){return e===`toast`?(J_=Math.max(J_,W_.toast)+W_.step,J_):(q_=Math.max(q_,W_[e])+W_.step,q_)}var q_,J_,Y_=e((()=>{G_(),q_=0,J_=0}));function X_(e,t){let[n,r]=(0,Z_.useState)(void 0),i=(0,Z_.useRef)({tier:e,explicit:t,node:null,observer:null,prevOpen:!1}),a=(0,Z_.useRef)(t);if(i.current.tier=e,i.current.explicit=t,a.current!==void 0&&t===void 0&&i.current.node){let t=i.current.node;if(t.hasAttribute(`data-open`)&&(r(K_(e)),i.current.prevOpen=!0),!i.current.observer){let e=new MutationObserver(()=>{let e=t.hasAttribute(`data-open`);e&&!i.current.prevOpen&&r(K_(i.current.tier)),i.current.prevOpen=e});e.observe(t,{attributes:!0,attributeFilter:[`data-open`,`data-closed`]}),i.current.observer=e}}a.current=t;let o=(0,Z_.useCallback)(e=>{if(e===i.current.node||(i.current.observer?.disconnect(),i.current.observer=null,i.current.node=e,i.current.prevOpen=!1,!e)||i.current.explicit!==void 0)return;let t=()=>{let t=e.hasAttribute(`data-open`);t&&!i.current.prevOpen&&r(K_(i.current.tier)),i.current.prevOpen=t};t();let n=new MutationObserver(t);n.observe(e,{attributes:!0,attributeFilter:[`data-open`,`data-closed`]}),i.current.observer=n},[]);return(0,Z_.useEffect)(()=>()=>{i.current.observer?.disconnect()},[]),{zIndex:i.current.explicit??n,ref:o}}var Z_,Q_=e((()=>{Y_(),Z_=t(l(),1)})),$,$_=e((()=>{y(),$=d(({css:e,cssVar:t})=>({danger:e`
    --lobe-menu-icon-color: ${t.colorError};

    color: ${t.colorError} !important;

    &:hover {
      background: ${t.colorErrorBg} !important;
    }
  `,empty:e`
    cursor: default;
    font-style: italic;
    color: ${t.colorTextTertiary};
  `,extra:e`
    margin-inline-start: auto;
    padding-inline-start: 16px;

    font-family: ${t.fontFamilyCode};
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,footer:e`
    flex-shrink: 0;
    padding-block: 8px;
    padding-inline: 12px;
    border-block-start: 1px solid ${t.colorBorder};
  `,header:e`
    flex-shrink: 0;
    padding-block: 8px;
    padding-inline: 12px;
    border-block-end: 1px solid ${t.colorBorder};
  `,groupLabel:e`
    user-select: none;

    padding-block: 8px 4px;
    padding-inline: 12px;

    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    color: ${t.colorTextTertiary};
    text-transform: uppercase;
    letter-spacing: 0.6px;

    [role='group']:first-child > & {
      padding-block-start: 4px;
    }
  `,icon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 14px;
    height: 14px;
    margin-inline-end: 12px;

    color: var(--lobe-menu-icon-color, ${t.colorTextSecondary});

    & svg {
      width: 100%;
      height: 100%;
    }
  `,item:e`
    user-select: none;

    position: relative;

    overflow: hidden;
    display: flex;
    align-items: center;

    width: 100%;
    min-height: 32px;
    padding-block: 6px;
    padding-inline: 12px;
    border-radius: ${t.borderRadiusSM};

    font-size: 14px;
    line-height: 20px;
    color: ${t.colorText};

    outline: none;

    transition: all 150ms ${t.motionEaseOut};

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:active {
      background: ${t.colorFillSecondary};
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${t.colorTextDisabled};
      opacity: 0.5;

      &:hover {
        background: transparent;
      }
    }

    &[data-highlighted]:not([data-disabled]) {
      background: ${t.colorFillTertiary};
    }

    &[data-state='open']:not([data-disabled]),
    &[data-open]:not([data-disabled]),
    &[aria-expanded='true']:not([data-disabled]) {
      background: ${t.colorFillTertiary};
    }
  `,itemContent:e`
    display: flex;
    flex: 1;
    gap: 0;
    align-items: center;
  `,itemContentAlignStart:e`
    align-items: flex-start;
  `,iconAlignStart:e`
    align-self: flex-start;
    margin-block-start: 2px;
  `,label:e`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;

    & a,
    & a:visited,
    & a:hover,
    & a:active {
      color: inherit;
    }
  `,labelGroup:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-width: 0;
  `,desc:e`
    overflow: hidden;

    font-size: 12px;
    line-height: 16px;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,popup:e`
    overflow-y: auto;

    min-width: 220px;
    max-height: var(--available-height);
    padding: 4px;
    border-radius: ${t.borderRadius};

    background: ${t.colorBgElevated};
    outline: none;
    box-shadow:
      0 0 0 1px ${t.colorBorder},
      0 4px 12px 0 rgb(0 0 0 / 8%),
      0 1px 3px 0 rgb(0 0 0 / 6%);

    &[data-has-header] {
      padding-block-start: 0;
    }

    &[data-has-footer] {
      padding-block-end: 0;
    }
  `,popupWithSlots:e`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: var(--available-height);
  `,slotViewport:e`
    overflow-y: auto;
    flex: 1;
    min-height: 0;
  `,positioner:e`
    --lobe-dropdown-animation-duration: 140ms;
    --lobe-dropdown-animation-scale-y: 0.92;
    --lobe-dropdown-animation-ease-in: ease-in;
    --lobe-dropdown-animation-ease-out: ${t.motionEaseOut};

    z-index: 1100;

    & > * {
      will-change: opacity, transform;
      transform-origin: var(--transform-origin);
      animation: none;
    }

    &[data-open] > * {
      transform: scaleY(1);
      opacity: 1;
      transition:
        opacity var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-out),
        transform var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-out);
    }

    &[data-open] > *[data-starting-style] {
      transform: scaleY(var(--lobe-dropdown-animation-scale-y));
      opacity: 0;
    }

    &[data-closed] > * {
      transform: scaleY(var(--lobe-dropdown-animation-scale-y));
      opacity: 0;
      transition:
        opacity var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-in),
        transform var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-in);
    }

    &[data-hover-trigger] {
      --lobe-dropdown-animation-duration: 140ms;
    }

    &[data-submenu],
    &[data-nested] {
      --lobe-dropdown-animation-duration: 0ms;
      --lobe-dropdown-animation-scale-y: 1;

      z-index: 1199;
    }

    &[data-side='left'],
    &[data-side='right'] {
      --lobe-dropdown-animation-duration: 0ms;
      --lobe-dropdown-animation-scale-y: 1;
    }
  `,separator:e`
    height: 1px;
    margin-block: 4px;
    margin-inline: 0;
    background: ${t.colorBorder};
  `,submenuArrow:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 16px;
    height: 16px;
    margin-inline-start: 8px;

    color: var(--lobe-menu-icon-color, ${t.colorTextSecondary});

    & svg {
      width: 12px;
      height: 12px;
    }
  `}))}));function ev(e){let t=tv.useContext(nv);if(t===void 0&&!e)throw Error(nt(33));return t}var tv,nv,rv=e((()=>{rt(),tv=t(l(),1),nv=tv.createContext(void 0)}));function iv(e){let t=av.useContext(ov);if(t===void 0&&!e)throw Error(nt(36));return t}var av,ov,sv=e((()=>{rt(),av=t(l(),1),ov=av.createContext(void 0)}));function cv(e=!0){let t=lv.useContext(uv);if(t===void 0&&!e)throw Error(nt(25));return t}var lv,uv,dv=e((()=>{rt(),lv=t(l(),1),uv=lv.createContext(void 0)}));function fv(){let e=pv.useContext(mv);if(e===void 0)throw Error(nt(30));return e}var pv,mv,hv=e((()=>{rt(),pv=t(l(),1),mv=pv.createContext(void 0)}));function gv(e){let{closeOnClick:t,highlighted:n,id:r,nodeId:i,store:a,typingRef:o,itemRef:s,itemMetadata:c}=e,{events:l}=a.useState(`floatingTreeRoot`),u=a.useState(`open`),d=cv(!0),f=d!==void 0;return _v.useMemo(()=>({id:r,role:`menuitem`,tabIndex:u&&n?0:-1,onKeyDown(e){e.key===` `&&o?.current&&e.preventDefault()},onMouseMove(e){i&&l.emit(`itemhover`,{nodeId:i,target:e.currentTarget})},onClick(e){t&&l.emit(`close`,{domEvent:e,reason:Qn})},onMouseUp(e){if(d){let t=d.initialCursorPointRef.current;if(d.initialCursorPointRef.current=null,f&&t&&Math.abs(e.clientX-t.x)<=1&&Math.abs(e.clientY-t.y)<=1||f&&!Et&&e.button===2)return}s.current&&a.context.allowMouseUpTriggerRef.current&&(!f||e.button===2)&&(!c||c.type===`regular-item`)&&s.current.click()}}),[t,n,r,l,i,u,a,o,s,d,f,c])}var _v,vv=e((()=>{_v=t(l(),1),Lt(),wr(),dv()}));function yv(e){let{closeOnClick:t,disabled:n=!1,highlighted:r,id:i,store:a,typingRef:o=a.context.typingRef,nativeButton:s,itemMetadata:c,nodeId:l}=e,u=a.useState(`disabled`),d=n||u,f=bv.useRef(null),{getButtonProps:p,buttonRef:m}=Cg({disabled:d,focusableWhenDisabled:!0,native:s,composite:!0}),h=gv({closeOnClick:t,highlighted:r,id:i,nodeId:l,store:a,typingRef:o,itemRef:f,itemMetadata:c}),g=bv.useCallback(e=>Ce(h,{onMouseEnter(){c.type===`submenu-trigger`&&c.setActive()}},e,p),[h,p,c]),_=Fr(f,m);return bv.useMemo(()=>({getItemProps:g,itemRef:_}),[g,_])}var bv,xv,Sv=e((()=>{bv=t(l(),1),Vr(),Og(),ze(),vv(),xv={type:`regular-item`}}));function Cv(){return wv.useContext(Tv)}var wv,Tv,Ev=e((()=>{wv=t(l(),1),Tv=wv.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},elementsRef:{current:[]},nextIndexRef:{current:0}})}));function Dv(e={}){let{label:t,metadata:n,textRef:r,indexGuessBehavior:i,index:a}=e,{register:o,unregister:s,subscribeMapChange:c,elementsRef:l,labelsRef:u,nextIndexRef:d}=Cv(),f=Ov.useRef(-1),[p,m]=Ov.useState(a??(i===kv.GuessFromOrder?()=>{if(f.current===-1){let e=d.current;d.current+=1,f.current=e}return f.current}:-1)),h=Ov.useRef(null),g=Ov.useCallback(e=>{if(h.current=e,p!==-1&&e!==null&&(l.current[p]=e,u)){let n=t!==void 0;u.current[p]=n?t:r?.current?.textContent??e.textContent}},[p,l,u,t,r]);return H(()=>{if(a!=null)return;let e=h.current;if(e)return o(e,n),()=>{s(e)}},[a,o,s,n]),H(()=>{if(a==null)return c(e=>{let t=h.current?e.get(h.current)?.index:null;t!=null&&m(t)})},[a,c,m]),{ref:g,index:p}}var Ov,kv,Av=e((()=>{Ov=t(l(),1),U(),Ev(),kv=function(e){return e[e.None=0]=`None`,e[e.GuessFromOrder=1]=`GuessFromOrder`,e}({})})),jv,Mv=e((()=>{jv=function(e){return e.checked=`data-checked`,e.unchecked=`data-unchecked`,e.disabled=`data-disabled`,e.highlighted=`data-highlighted`,e}({})})),Nv,Pv=e((()=>{Ul(),Mv(),Nv={checked(e){return e?{[jv.checked]:``}:{[jv.unchecked]:``}},...Hl}})),Fv,Iv,Lv,Rv=e((()=>{Fv=t(l(),1),hg(),hv(),Sv(),Av(),sv(),X(),zd(),Pv(),rv(),Er(),wr(),Iv=t(c(),1),Lv=Fv.forwardRef(function(e,t){let{render:n,className:r,id:i,label:a,nativeButton:o=!1,disabled:s=!1,closeOnClick:c=!1,checked:l,defaultChecked:u,onCheckedChange:d,style:f,...p}=e,m=Dv({label:a}),h=ev(!0),g=Rd(i),{store:_}=iv(),v=_.useState(`isActive`,m.index),y=_.useState(`itemProps`),[b,x]=pg({controlled:l,default:u??!1,name:`MenuCheckboxItem`,state:`checked`}),{getItemProps:S,itemRef:C}=yv({closeOnClick:c,disabled:s,highlighted:v,id:g,store:_,nativeButton:o,nodeId:h?.context.nodeId,itemMetadata:xv}),w=Fv.useMemo(()=>({disabled:s,highlighted:v,checked:b}),[s,v,b]);function T(e){let t=G(Qn,e.nativeEvent,void 0,{preventUnmountOnClose(){}});d?.(!b,t),!t.isCanceled&&x(e=>!e)}let E=Y(`div`,e,{state:w,stateAttributesMapping:Nv,props:[y,{role:`menuitemcheckbox`,"aria-checked":b,onClick:T},p,S],ref:[C,t,m.ref]});return(0,Iv.jsx)(mv.Provider,{value:w,children:E})})})),zv,Bv,Vv=e((()=>{zv=t(l(),1),hv(),X(),Pv(),Rl(),Yl(),Bv=zv.forwardRef(function(e,t){let{render:n,className:r,style:i,keepMounted:a=!1,...o}=e,s=fv(),c=zv.useRef(null),{transitionStatus:l,setMounted:u}=Il(s.checked);return ql({open:s.checked,ref:c,onComplete(){s.checked||u(!1)}}),Y(`span`,e,{state:{checked:s.checked,disabled:s.disabled,highlighted:s.highlighted,transitionStatus:l},ref:[t,c],stateAttributesMapping:Nv,props:{"aria-hidden":!0,...o},enabled:a||s.checked})})}));function Hv(){let e=Uv.useContext(Wv);if(e===void 0)throw Error(nt(31));return e}var Uv,Wv,Gv=e((()=>{rt(),Uv=t(l(),1),Wv=Uv.createContext(void 0)})),Kv,qv,Jv,Yv=e((()=>{Kv=t(l(),1),X(),Gv(),qv=t(c(),1),Jv=Kv.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,[o,s]=Kv.useState(void 0),c=Y(`div`,e,{ref:t,props:{role:`group`,"aria-labelledby":o,...a}});return(0,qv.jsx)(Wv.Provider,{value:s,children:c})})})),Xv,Zv,Qv=e((()=>{Xv=t(l(),1),U(),X(),zd(),Gv(),Zv=Xv.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,s=Rd(a),c=Hv();return H(()=>(c(s),()=>{c(void 0)}),[c,s]),Y(`div`,e,{ref:t,props:{id:s,role:`presentation`,...o}})})})),$v,ey,ty=e((()=>{$v=t(l(),1),Sv(),sv(),X(),zd(),Av(),rv(),ey=$v.forwardRef(function(e,t){let{render:n,className:r,id:i,label:a,nativeButton:o=!1,disabled:s=!1,closeOnClick:c=!0,style:l,...u}=e,d=Dv({label:a}),f=ev(!0),p=Rd(i),{store:m}=iv(),h=m.useState(`isActive`,d.index),g=m.useState(`itemProps`),{getItemProps:_,itemRef:v}=yv({closeOnClick:c,disabled:s,highlighted:h,id:p,store:m,nativeButton:o,nodeId:f?.context.nodeId,itemMetadata:xv});return Y(`div`,e,{state:{disabled:s,highlighted:h},props:[g,u,_],ref:[v,t,d.ref]})})}));function ny(e){let t=ry.useContext(iy);if(t===void 0&&!e)throw Error(nt(69));return t}var ry,iy,ay=e((()=>{rt(),ry=t(l(),1),iy=ry.createContext(void 0)}));function oy(e){return Zt(e)&&e.tagName===`INPUT`}function sy(e){return!!(oy(e)&&e.selectionStart!=null||Zt(e)&&e.tagName===`TEXTAREA`)}function cy(e,t,n,r){if(!e||!t||!t.scrollTo)return;let i=e.scrollLeft,a=e.scrollTop,o=e.clientWidth<e.scrollWidth,s=e.clientHeight<e.scrollHeight;if(o&&r!==`vertical`){let r=ly(e,t,`left`),a=uy(e),o=uy(t);n===`ltr`&&(r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight?i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight:r-o.scrollMarginLeft<e.scrollLeft+a.scrollPaddingLeft&&(i=r-o.scrollMarginLeft-a.scrollPaddingLeft)),n===`rtl`&&(r-o.scrollMarginRight<e.scrollLeft+a.scrollPaddingLeft?i=r-o.scrollMarginLeft-a.scrollPaddingLeft:r+t.offsetWidth+o.scrollMarginRight>e.scrollLeft+e.clientWidth-a.scrollPaddingRight&&(i=r+t.offsetWidth+o.scrollMarginRight-e.clientWidth+a.scrollPaddingRight))}if(s&&r!==`horizontal`){let n=ly(e,t,`top`),r=uy(e),i=uy(t);n-i.scrollMarginTop<e.scrollTop+r.scrollPaddingTop?a=n-i.scrollMarginTop-r.scrollPaddingTop:n+t.offsetHeight+i.scrollMarginBottom>e.scrollTop+e.clientHeight-r.scrollPaddingBottom&&(a=n+t.offsetHeight+i.scrollMarginBottom-e.clientHeight+r.scrollPaddingBottom)}e.scrollTo({left:i,top:a,behavior:`auto`})}function ly(e,t,n){let r=n===`left`?`offsetLeft`:`offsetTop`,i=0;for(;t.offsetParent&&(i+=t[r],t.offsetParent!==e);)t=t.offsetParent;return i}function uy(e){let t=getComputedStyle(e);return{scrollMarginTop:parseFloat(t.scrollMarginTop)||0,scrollMarginRight:parseFloat(t.scrollMarginRight)||0,scrollMarginBottom:parseFloat(t.scrollMarginBottom)||0,scrollMarginLeft:parseFloat(t.scrollMarginLeft)||0,scrollPaddingTop:parseFloat(t.scrollPaddingTop)||0,scrollPaddingRight:parseFloat(t.scrollPaddingRight)||0,scrollPaddingBottom:parseFloat(t.scrollPaddingBottom)||0,scrollPaddingLeft:parseFloat(t.scrollPaddingLeft)||0}}var dy,fy,py,my,hy,gy,_y,vy,yy,by,xy,Sy,Cy,wy,Ty,Ey,Dy,Oy=e((()=>{_n(),kl(),dy=`ArrowUp`,fy=`ArrowDown`,py=`ArrowLeft`,my=`ArrowRight`,hy=`Home`,gy=`PageUp`,_y=`PageDown`,vy=new Set([py,my]),yy=new Set([py,my,hy,`End`]),by=new Set([dy,fy]),xy=new Set([dy,fy,hy,`End`]),Sy=new Set([...vy,...by]),Cy=new Set([...Sy,hy,`End`]),wy=`Shift`,Ty=`Control`,Ey=`Meta`,Dy=new Set([wy,Ty,`Alt`,Ey])})),ky,Ay,jy,My,Ny=e((()=>{ky=t(l(),1),gd(),sv(),rv(),X(),Ld(),Ul(),Yl(),Er(),wr(),ay(),Oy(),Lf(),Ay=t(c(),1),jy={...Id,...Hl},My=ky.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,...o}=e,{store:s}=iv(),{side:c,align:l}=ev(),u=ny(!0)!=null,d=s.useState(`open`),f=s.useState(`transitionStatus`),p=s.useState(`popupProps`),m=s.useState(`mounted`),h=s.useState(`instantType`),g=s.useState(`activeTriggerElement`),_=s.useState(`parent`),v=s.useState(`lastOpenChangeReason`),y=s.useState(`rootId`),b=s.useState(`floatingRootContext`),x=s.useState(`floatingTreeRoot`),S=s.useState(`closeDelay`),C=s.useState(`activeTriggerElement`),w=s.useState(`hoverEnabled`),T=s.useState(`disabled`),E=s.useState(`openMethod`),D=_.type===`context-menu`;ql({open:d,ref:s.context.popupRef,onComplete(){d&&s.context.onOpenChangeComplete?.(!0)}}),ky.useEffect(()=>{function e(e){s.setOpen(!1,G(e.reason,e.domEvent))}return x.events.on(`close`,e),()=>{x.events.off(`close`,e)}},[x.events,s]),Vu(b,{enabled:w&&!T&&!D&&_.type!==`menubar`,closeDelay:S});let O=ky.useCallback(e=>{s.set(`popupElement`,e)},[s]),k=Y(`div`,e,{state:{transitionStatus:f,side:c,align:l,open:d,nested:_.type===`menu`,instant:h},ref:[t,s.context.popupRef,O],stateAttributesMapping:jy,props:[p,{onKeyDown(e){u&&Cy.has(e.key)&&e.stopPropagation()}},If(f),o,{"data-rootownerid":y}]}),A=_.type===void 0||D;return(g||_.type===`menubar`&&v!==`outside-press`)&&(A=!0),(0,Ay.jsx)(as,{context:b,openInteractionType:E,modal:D,disabled:!m,returnFocus:a===void 0?A:a,initialFocus:_.type!==`menu`,restoreFocus:!0,externalTree:_.type===`menubar`?void 0:x,previousFocusableElement:C,nextFocusableElement:_.type===void 0?s.context.triggerFocusTargetRef:void 0,beforeContentFocusGuardRef:_.type===void 0?s.context.beforeContentFocusGuardRef:void 0,children:k})})}));function Py(){let e=Fy.useContext(Iy);if(e===void 0)throw Error(nt(32));return e}var Fy,Iy,Ly=e((()=>{rt(),Fy=t(l(),1),Iy=Fy.createContext(void 0)})),Ry,zy,By,Vy=e((()=>{Ry=t(l(),1),gd(),sv(),Ly(),zy=t(c(),1),By=Ry.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{store:i}=iv();return i.useState(`mounted`)||n?(0,zy.jsx)(Iy.Provider,{value:n,children:(0,zy.jsx)(Fo,{ref:t,...r})}):null})}));function Hy(e){let{children:t,elementsRef:n,labelsRef:r,onMapChange:i}=e,a=q(i),o=Ky.useRef(0),s=Be(Wy).current,c=Be(Uy).current,[l,u]=Ky.useState(0),d=Ky.useRef(l),f=q((e,t)=>{c.set(e,t??null),d.current+=1,u(d.current)}),p=q(e=>{c.delete(e),d.current+=1,u(d.current)}),m=Ky.useMemo(()=>{let e=new Map;return Array.from(c.keys()).filter(e=>e.isConnected).sort(Gy).forEach((t,n)=>{let r=c.get(t)??{};e.set(t,{...r,index:n})}),e},[c,l]);H(()=>{if(typeof MutationObserver!=`function`||m.size===0)return;let e=new MutationObserver(e=>{let t=new Set,n=e=>t.has(e)?t.delete(e):t.add(e);e.forEach(e=>{e.removedNodes.forEach(n),e.addedNodes.forEach(n)}),t.size===0&&(d.current+=1,u(d.current))});return m.forEach((t,n)=>{n.parentElement&&e.observe(n.parentElement,{childList:!0})}),()=>{e.disconnect()}},[m]),H(()=>{d.current===l&&(n.current.length!==m.size&&(n.current.length=m.size),r&&r.current.length!==m.size&&(r.current.length=m.size),o.current=m.size),a(m)},[a,m,n,r,l]),H(()=>()=>{n.current=[]},[n]),H(()=>()=>{r&&(r.current=[])},[r]);let h=q(e=>(s.add(e),()=>{s.delete(e)}));H(()=>{s.forEach(e=>e(m))},[s,m]);let g=Ky.useMemo(()=>({register:f,unregister:p,subscribeMapChange:h,elementsRef:n,labelsRef:r,nextIndexRef:o}),[f,p,h,n,r,o]);return(0,qy.jsx)(Tv.Provider,{value:g,children:t})}function Uy(){return new Map}function Wy(){return new Set}function Gy(e,t){let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:0}var Ky,qy,Jy=e((()=>{Ky=t(l(),1),Ue(),Qr(),U(),Ev(),qy=t(c(),1)})),Yy,Xy,Zy,Qy=e((()=>{Yy=t(l(),1),Xy=t(c(),1),Zy=Yy.forwardRef(function(e,t){let{cutout:n,...r}=e,i;if(n){let e=n.getBoundingClientRect();i=`polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`}return(0,Xy.jsx)(`div`,{ref:t,role:`presentation`,"data-base-ui-inert":``,...r,style:{position:`fixed`,inset:0,userSelect:`none`,WebkitUserSelect:`none`,clipPath:i}})})}));function $y(e){if(typeof document>`u`)return!1;let t=J(e);return qt(t).innerWidth-t.documentElement.clientWidth>0}function eb(e){if(!(typeof CSS<`u`&&CSS.supports&&CSS.supports(`scrollbar-gutter`,`stable`))||typeof document>`u`)return!1;let t=J(e),n=t.documentElement,r=t.body,i=$t(n)?n:r,a=i.style.overflowY,o=n.style.scrollbarGutter;n.style.scrollbarGutter=`stable`,i.style.overflowY=`scroll`;let s=i.offsetWidth;i.style.overflowY=`hidden`;let c=i.offsetWidth;return i.style.overflowY=a,n.style.scrollbarGutter=o,s===c}function tb(e){let t=J(e),n=t.documentElement,r=t.body,i=$t(n)?n:r,a={overflowY:i.style.overflowY,overflowX:i.style.overflowX};return Object.assign(i.style,{overflowY:`hidden`,overflowX:`hidden`}),()=>{Object.assign(i.style,a)}}function nb(e){let t=J(e),n=t.documentElement,r=t.body,i=qt(n),a=0,o=0,s=!1,c=ri.create();if(kt&&(i.visualViewport?.scale??1)!==1)return()=>{};function l(){let t=i.getComputedStyle(n),c=i.getComputedStyle(r),l=(t.scrollbarGutter||``).includes(`both-edges`)?`stable both-edges`:`stable`;a=n.scrollTop,o=n.scrollLeft,ib={scrollbarGutter:n.style.scrollbarGutter,overflowY:n.style.overflowY,overflowX:n.style.overflowX},ob=n.style.scrollBehavior,ab={position:r.style.position,height:r.style.height,width:r.style.width,boxSizing:r.style.boxSizing,overflowY:r.style.overflowY,overflowX:r.style.overflowX,scrollBehavior:r.style.scrollBehavior};let u=n.scrollHeight>n.clientHeight,d=n.scrollWidth>n.clientWidth,f=t.overflowY===`scroll`||c.overflowY===`scroll`,p=t.overflowX===`scroll`||c.overflowX===`scroll`,m=Math.max(0,i.innerWidth-r.clientWidth),h=Math.max(0,i.innerHeight-r.clientHeight),g=parseFloat(c.marginTop)+parseFloat(c.marginBottom),_=parseFloat(c.marginLeft)+parseFloat(c.marginRight),v=$t(n)?n:r;if(s=eb(e),s){n.style.scrollbarGutter=l,v.style.overflowY=`hidden`,v.style.overflowX=`hidden`;return}Object.assign(n.style,{scrollbarGutter:l,overflowY:`hidden`,overflowX:`hidden`}),(u||f)&&(n.style.overflowY=`scroll`),(d||p)&&(n.style.overflowX=`scroll`),Object.assign(r.style,{position:`relative`,height:g||h?`calc(100dvh - ${g+h}px)`:`100dvh`,width:_||m?`calc(100vw - ${_+m}px)`:`100vw`,boxSizing:`border-box`,overflow:`hidden`,scrollBehavior:`unset`}),r.scrollTop=a,r.scrollLeft=o,n.setAttribute(`data-base-ui-scroll-locked`,``),n.style.scrollBehavior=`unset`}function u(){Object.assign(n.style,ib),Object.assign(r.style,ab),s||(n.scrollTop=a,n.scrollLeft=o,n.removeAttribute(`data-base-ui-scroll-locked`),n.style.scrollBehavior=ob)}function d(){u(),c.request(l)}l();let f=K(i,`resize`,d);return()=>{c.cancel(),u(),typeof i.removeEventListener==`function`&&f()}}function rb(e=!0,t=null){H(()=>{if(e)return cb.acquire(t)},[e,t])}var ib,ab,ob,sb,cb,lb=e((()=>{_n(),Mr(),Lt(),ai(),U(),ht(),ii(),Kn(),ib={},ab={},ob=``,sb=class{lockCount=0;restore=null;timeoutLock=mt.create();timeoutUnlock=mt.create();acquire(e){return this.lockCount+=1,this.lockCount===1&&this.restore===null&&this.timeoutLock.start(0,()=>this.lock(e)),this.release}release=()=>{--this.lockCount,this.lockCount===0&&this.restore&&this.timeoutUnlock.start(0,this.unlock)};unlock=()=>{this.lockCount===0&&this.restore&&(this.restore?.(),this.restore=null)};lock(e){if(this.lockCount===0||this.restore!==null)return;let t=J(e).documentElement,n=qt(t).getComputedStyle(t).overflowY;if(n===`hidden`||n===`clip`){this.restore=Un;return}let r=Ct||!$y(e);this.restore=r?tb(e):nb(e)}},cb=new sb}));function ub(e,t,n,r){let[i,a]=db.useState(!1);H(()=>{if(!e||!t||n==null){a(!1);return}let r=J(n).documentElement.clientWidth,i=n.offsetWidth;a(r>0&&i>0&&i>=r-fb)},[e,t,n]),rb(e&&(!t||i),r)}var db,fb,pb=e((()=>{db=t(l(),1),ai(),lb(),U(),fb=20})),mb,hb,gb,_b=e((()=>{mb=t(l(),1),ep(),U(),ht(),gd(),rv(),sv(),Ff(),Jy(),Qy(),Ly(),Do(),dv(),Er(),wr(),kf(),Kl(),zf(),pb(),hb=t(c(),1),gb=mb.forwardRef(function(e,t){let{anchor:n,positionMethod:r=`absolute`,className:i,render:a,side:o,align:s,sideOffset:c=0,alignOffset:l=0,collisionBoundary:u=`clipping-ancestors`,collisionPadding:d=5,arrowPadding:f=5,sticky:p=!1,disableAnchorTracking:m=!1,collisionAvoidance:h=wo,style:g,..._}=e,{store:v}=iv(),y=Py(),b=cv(!0),x=v.useState(`parent`),S=v.useState(`floatingRootContext`),C=v.useState(`floatingTreeRoot`),w=v.useState(`mounted`),T=v.useState(`open`),E=v.useState(`modal`),D=v.useState(`openMethod`),O=v.useState(`activeTriggerElement`),k=v.useState(`transitionStatus`),A=v.useState(`positionerElement`),j=v.useState(`instantType`),M=v.useState(`hasViewport`),N=v.useState(`lastOpenChangeReason`),P=v.useState(`floatingNodeId`),F=v.useState(`floatingParentNodeId`),I=S.useState(`domReferenceElement`),L=mb.useRef(null),R=Wl(A,!1,!1),ee=n,z=c,te=l,ne=s,re=h;x.type===`context-menu`&&(ee=n??x.context?.anchor,ne??=`start`,!o&&ne!==`center`&&(te=e.alignOffset??2,z=e.sideOffset??-5));let B=o,ie=ne;x.type===`menu`?(B??=`inline-end`,ie??=`start`,re=e.collisionAvoidance??To):x.type===`menubar`&&(B??=x.context.orientation===`vertical`?`inline-end`:`bottom`,ie??=`start`);let V=x.type===`context-menu`,ae=Mf({anchor:ee,floatingRootContext:S,positionMethod:b?`fixed`:r,mounted:w,side:B,sideOffset:z,align:ie,alignOffset:te,arrowPadding:V?0:f,collisionBoundary:u,collisionPadding:d,sticky:p,nodeId:P,keepMounted:y,disableAnchorTracking:m,collisionAvoidance:re,shiftCrossAxis:V&&!(`side`in re&&re.side===`flip`),externalTree:C,adaptiveOrigin:M?Of:void 0});mb.useEffect(()=>{function e(e){e.open&&(e.parentNodeId===P&&v.set(`hoverEnabled`,!1),e.nodeId!==P&&e.parentNodeId===v.select(`floatingParentNodeId`)&&v.setOpen(!1,G(_r)))}return C.events.on(`menuopenchange`,e),()=>{C.events.off(`menuopenchange`,e)}},[v,C.events,P]),mb.useEffect(()=>{if(v.select(`floatingParentNodeId`)==null)return;function e(e){if(e.open||e.nodeId!==v.select(`floatingParentNodeId`))return;let t=e.reason??`sibling-open`;v.setOpen(!1,G(t))}return C.events.on(`menuopenchange`,e),()=>{C.events.off(`menuopenchange`,e)}},[C.events,v]);let oe=ft();mb.useEffect(()=>{T||oe.clear()},[T,oe]),mb.useEffect(()=>{function e(e){if(!(!T||e.nodeId!==v.select(`floatingParentNodeId`)))if(e.target&&O&&O!==e.target){let e=v.select(`closeDelay`);e>0?oe.isStarted()||oe.start(e,()=>{v.setOpen(!1,G(_r))}):v.setOpen(!1,G(_r))}else oe.clear()}return C.events.on(`itemhover`,e),()=>{C.events.off(`itemhover`,e)}},[C.events,T,O,v,oe]),mb.useEffect(()=>{let e={open:T,nodeId:P,parentNodeId:F,reason:v.select(`lastOpenChangeReason`)};C.events.emit(`menuopenchange`,e)},[C.events,T,v,P,F]),H(()=>{let e=I,t=L.current;if(e&&(L.current=e),t&&e&&e!==t){v.set(`instantType`,void 0);let e=new AbortController;return R(()=>{v.set(`instantType`,`trigger-change`)},e.signal),()=>{e.abort()}}},[I,R,v]);let se={open:T,side:ae.side,align:ae.align,anchorHidden:ae.anchorHidden,nested:x.type===`menu`,instant:j},ce=x.type===`menubar`&&x.context.modal;ub(T&&(ce||E&&N!==`trigger-hover`),D===`touch`,A,O);let le=Rf(e,se,{styles:ae.positionerStyles,transitionStatus:k,props:_,refs:[t,v.useStateSetter(`positionerElement`)],hidden:!w,inert:!T}),ue=w&&x.type!==`menu`&&(x.type!==`menubar`&&E&&N!==`trigger-hover`||x.type===`menubar`&&x.context.modal),de=null;return x.type===`menubar`?de=x.context.contentElement:x.type===void 0&&(de=O),(0,hb.jsxs)(nv.Provider,{value:ae,children:[ue&&(0,hb.jsx)(Zy,{ref:x.type===`context-menu`||x.type===`nested-context-menu`?x.context.internalBackdropRef:null,inert:$f(!T),cutout:de}),(0,hb.jsx)(Ho,{id:P,children:(0,hb.jsx)(Hy,{elementsRef:v.context.itemDomElements,labelsRef:v.context.itemLabels,children:le})})]})})}));function vb(e){let t=yb.useContext(bb);if(t===null&&!e)throw Error(nt(5));return t}var yb,bb,xb=e((()=>{rt(),yb=t(l(),1),bb=yb.createContext(null)}));function Sb(e){let t=Cb.useRef(``),n=Cb.useCallback(n=>{n.defaultPrevented||(t.current=n.pointerType,e(n,n.pointerType))},[e]);return{onClick:Cb.useCallback(n=>{if(n.detail===0){e(n,`keyboard`);return}`pointerType`in n?e(n,n.pointerType):e(n,t.current),t.current=``},[e]),onPointerDown:n}}var Cb,wb=e((()=>{Cb=t(l(),1)}));function Tb(e,t){let{onClick:n,onPointerDown:r}=Sb(q((n,r)=>{(typeof e==`function`?e():e)||t(r||(Ct?`touch`:``))}));return Db.useMemo(()=>({onClick:n,onPointerDown:r}),[n,r])}function Eb(e){let[t,n]=Db.useState(null),r=Tb(e,n);return h_(e,t=>{t&&!e&&n(null)}),Db.useMemo(()=>({openMethod:t,triggerProps:r}),[t,r])}var Db,Ob=e((()=>{Db=t(l(),1),Qr(),wb(),Lt(),__()}));function kb(){return{...gu(),disabled:!1,modal:!0,openMethod:null,allowMouseEnter:!1,highlightItemOnHover:!0,stickIfOpen:!0,parent:{type:void 0},rootId:void 0,activeIndex:null,hoverEnabled:!0,instantType:void 0,openChangeReason:null,floatingTreeRoot:new zo,floatingNodeId:void 0,floatingParentNodeId:null,itemProps:Gn,keyboardEventRelay:void 0,closeDelay:0,hasViewport:!1}}var Ab,jb,Mb,Nb=e((()=>{Ab=t(l(),1),Ol(),Kn(),Ue(),Bo(),Tu(),jb={...Cu,disabled:Z(e=>e.parent.type===`menubar`&&e.parent.context.disabled||e.disabled),modal:Z(e=>(e.parent.type===void 0||e.parent.type===`context-menu`)&&(e.modal??!0)),openMethod:Z(e=>e.openMethod),allowMouseEnter:Z(e=>e.allowMouseEnter),highlightItemOnHover:Z(e=>e.highlightItemOnHover),stickIfOpen:Z(e=>e.stickIfOpen),parent:Z(e=>e.parent),rootId:Z(e=>e.parent.type===`menu`?e.parent.store.select(`rootId`):e.parent.type===void 0?e.rootId:e.parent.context.rootId),activeIndex:Z(e=>e.activeIndex),isActive:Z((e,t)=>e.activeIndex===t),hoverEnabled:Z(e=>e.hoverEnabled),instantType:Z(e=>e.instantType),lastOpenChangeReason:Z(e=>e.openChangeReason),floatingTreeRoot:Z(e=>e.parent.type===`menu`?e.parent.store.select(`floatingTreeRoot`):e.floatingTreeRoot),floatingNodeId:Z(e=>e.floatingNodeId),floatingParentNodeId:Z(e=>e.floatingParentNodeId),itemProps:Z(e=>e.itemProps),closeDelay:Z(e=>e.closeDelay),hasViewport:Z(e=>e.hasViewport),keyboardEventRelay:Z(e=>{if(e.keyboardEventRelay)return e.keyboardEventRelay;if(e.parent.type===`menu`)return e.parent.store.select(`keyboardEventRelay`)})},Mb=class e extends Sl{constructor(e){super({...kb(),...e},{positionerRef:Ab.createRef(),popupRef:Ab.createRef(),typingRef:{current:!1},itemDomElements:{current:[]},itemLabels:{current:[]},allowMouseUpTriggerRef:{current:!1},triggerFocusTargetRef:Ab.createRef(),beforeContentFocusGuardRef:Ab.createRef(),onOpenChangeComplete:void 0,triggerElements:new fu},jb),this.unsubscribeParentListener=this.observe(`parent`,e=>{if(this.unsubscribeParentListener?.(),e.type===`menu`){let t=e.store.select(`rootId`),n=e.store.select(`floatingTreeRoot`),r=e.store.select(`keyboardEventRelay`);this.unsubscribeParentListener=e.store.subscribe(()=>{let i=e.store.select(`rootId`),a=e.store.select(`floatingTreeRoot`),o=e.store.select(`keyboardEventRelay`);t===i&&n===a&&r===o||(t=i,n=a,r=o,this.notifyAll())}),this.context.allowMouseUpTriggerRef=e.store.context.allowMouseUpTriggerRef;return}e.type!==void 0&&(this.context.allowMouseUpTriggerRef=e.context.allowMouseUpTriggerRef),this.unsubscribeParentListener=null})}setOpen(e,t){this.state.floatingRootContext.context.events.emit(`setOpen`,{open:e,eventDetails:t})}static useStore(t,n){let r=Be(()=>new e(n)).current;return t??r}unsubscribeParentListener=null}}));function Pb(){return Fb.useContext(Ib)}var Fb,Ib,Lb=e((()=>{Fb=t(l(),1),Ib=Fb.createContext(void 0)})),Rb,zb,Bb,Vb=e((()=>{Rb=t(l(),1),ht(),Qr(),Za(),U(),Kn(),Qe(),gd(),sv(),xb(),Do(),bf(),Ob(),Er(),wr(),dv(),ze(),Nb(),Tu(),Lb(),zb=t(c(),1),Bb=Ke(function(e){let{children:t,open:n,onOpenChange:r,onOpenChangeComplete:i,defaultOpen:a=!1,disabled:o=!1,modal:s,loopFocus:c=!0,orientation:l=`vertical`,actionsRef:u,closeParentOnEsc:d=!1,handle:f,triggerId:p,defaultTriggerId:m=null,highlightItemOnHover:h=!0}=e,g=cv(!0),_=iv(!0),v=vb(!0),y=Pb(),b=Rb.useMemo(()=>y&&_?{type:`menu`,store:_.store}:v?{type:`menubar`,context:v}:g&&!_?{type:`context-menu`,context:g}:{type:void 0},[g,_,v,y]),x=Mb.useStore(f?.store,{open:a,openProp:n,activeTriggerId:m,triggerIdProp:p,parent:b});nu(x,n,a,m),x.useControlledProp(`openProp`,n),x.useControlledProp(`triggerIdProp`,p),x.useContextCallback(`onOpenChangeComplete`,i);let S=qa(),C=qa(),w=x.useState(`floatingTreeRoot`),T=Vo(w),E=Jo(),D=x.useState(`open`),O=x.useState(`activeTriggerElement`),k=x.useState(`positionerElement`),A=x.useState(`hoverEnabled`),j=x.useState(`disabled`),M=x.useState(`lastOpenChangeReason`),N=x.useState(`parent`),P=x.useState(`activeIndex`),F=x.useState(`payload`),I=x.useState(`floatingParentNodeId`),L=Rb.useRef(null),R=Rb.useRef(N.type!==`context-menu`),ee=ft(),z=Rb.useRef(!0),te=ft(),ne=I!=null,{openMethod:re,triggerProps:B}=Eb(D);x.useSyncedValues({disabled:o,highlightItemOnHover:h,modal:N.type===void 0?s:void 0,openMethod:re,rootId:S}),iu(x);let{forceUnmount:ie}=au(D,x,()=>{x.update({allowMouseEnter:!1,stickIfOpen:!0})});H(()=>{g&&!_?x.update({parent:{type:`context-menu`,context:g},floatingNodeId:T,floatingParentNodeId:E}):_&&x.update({floatingNodeId:T,floatingParentNodeId:E})},[g,_,T,E,x]),Rb.useEffect(()=>{if(D||(L.current=null),N.type===`context-menu`){if(!D){ee.clear(),R.current=!1;return}ee.start(500,()=>{R.current=!0})}},[ee,D,N.type]),H(()=>{!D&&!A&&x.set(`hoverEnabled`,!0)},[D,A,x]);let V=q((e,t)=>{let n=t.reason;if(D===e&&t.trigger===O&&M===n)return;let i=eu(t);if(!e&&t.trigger==null&&(t.trigger=O??void 0),r?.(e,t),t.isCanceled)return;x.state.floatingRootContext.dispatchOpenChange(e,t);let a=t.event;if(e===!1&&a?.type===`click`&&a.pointerType===`touch`&&!z.current)return;e&&n===`trigger-focus`?(z.current=!1,te.start(300,()=>{z.current=!0})):(z.current=!0,te.clear());let o=(n===`trigger-press`||n===`item-press`)&&a.detail===0&&a?.isTrusted,s=!e&&(n===`escape-key`||n==null),c={open:e,openChangeReason:n};L.current=t.event??null,$l(c,e,t.trigger,i()),x.update(c),N.type===`menubar`&&(n===`trigger-focus`||n===`focus-out`||n===`trigger-hover`||n===`list-navigation`||n===`sibling-open`)?x.set(`instantType`,`group`):o||s?x.set(`instantType`,o?`click`:`dismiss`):x.set(`instantType`,void 0)}),ae=Nl({popupStore:x,floatingId:C,nested:E!=null,onOpenChange:V}),oe=ae.context.events;Rb.useEffect(()=>{let e=({open:e,eventDetails:t})=>V(e,t);return oe.on(`setOpen`,e),()=>{oe?.off(`setOpen`,e)}},[oe,V]);let se=Rb.useCallback(()=>{x.setOpen(!1,G(xr))},[x]);Rb.useImperativeHandle(u,()=>({unmount:ie,close:se}),[ie,se]);let ce;N.type===`context-menu`&&(ce=N.context),Rb.useImperativeHandle(ce?.positionerRef,()=>k,[k]),Rb.useImperativeHandle(ce?.actionsRef,()=>({setOpen:V}),[V]);let le=xs(ae,{enabled:!j,bubbles:{escapeKey:d&&N.type===`menu`},outsidePress(){return N.type!==`context-menu`||L.current?.type===`contextmenu`?!0:R.current},externalTree:ne?w:void 0}),ue=_f(),de=Rb.useCallback(e=>{x.select(`activeIndex`)!==e&&x.set(`activeIndex`,e)},[x]),fe=ed(ae,{enabled:!j,listRef:x.context.itemDomElements,activeIndex:P,nested:N.type!==void 0,loopFocus:c,orientation:l,parentOrientation:N.type===`menubar`?N.context.orientation:void 0,rtl:ue===`rtl`,disabledIndices:Wn,onNavigate:de,openOnArrowKeyDown:N.type!==`context-menu`,externalTree:ne?w:void 0,focusItemOnHover:h}),pe=Rb.useCallback(e=>{x.context.typingRef.current=e},[x]),me=id(ae,{enabled:!j,listRef:x.context.itemLabels,elementsRef:x.context.itemDomElements,activeIndex:P,resetMs:500,onMatch:e=>{D&&e!==P&&x.set(`activeIndex`,e)},onTyping:pe});ou(x,{floatingRootContext:ae,activeTriggerProps:Rb.useMemo(()=>{let e=Ce(me.reference,fe.reference,le.reference,{onMouseMove(){x.set(`allowMouseEnter`,!0)}},B);return e[`aria-haspopup`]=`menu`,e[`aria-expanded`]=D,e},[x,me.reference,fe.reference,le.reference,B,D]),inactiveTriggerProps:Rb.useMemo(()=>{let e=Ce(fe.trigger,le.trigger,B);return e[`aria-haspopup`]=`menu`,e[`aria-expanded`]=!1,e},[fe.trigger,le.trigger,B]),popupProps:Rb.useMemo(()=>Ce(uu,{id:C,role:`menu`,"aria-labelledby":O?.id,onMouseMove(){x.set(`allowMouseEnter`,!0),N.type===`menu`&&x.set(`hoverEnabled`,!1)},onClick(){x.select(`hoverEnabled`)&&x.set(`hoverEnabled`,!1)},onKeyDown(e){let t=x.select(`keyboardEventRelay`);t&&!e.isPropagationStopped()&&t(e)}},me.floating,fe.floating,le.floating),[O,C,N.type,x,me.floating,fe.floating,le.floating]),itemProps:fe.item??Gn});let he=Rb.useMemo(()=>({store:x,parent:b}),[x,b]),ge=(0,zb.jsx)(ov.Provider,{value:he,children:typeof t==`function`?t({payload:F}):t});return N.type===void 0||N.type===`context-menu`?(0,zb.jsx)(Uo,{externalTree:w,children:ge}):ge})}));function Hb(e){let t=iv().store,n=Ub.useMemo(()=>({parentMenu:t}),[t]);return(0,Wb.jsx)(Ib.Provider,{value:n,children:(0,Wb.jsx)(Bb,{...e})})}var Ub,Wb,Gb=e((()=>{Ub=t(l(),1),Vb(),sv(),Lb(),Wb=t(c(),1)}));function Kb(e){let t=e.getBoundingClientRect(),n=qt(e);if(Pt)return t;let r=n.getComputedStyle(e,`::before`),i=n.getComputedStyle(e,`::after`);if(!(r.content!==`none`||i.content!==`none`))return t;let a=parseFloat(r.width)||0,o=parseFloat(r.height)||0,s=parseFloat(i.width)||0,c=parseFloat(i.height)||0,l=Math.max(t.width,a,s),u=Math.max(t.height,o,c),d=l-t.width,f=u-t.height;return{left:t.left-d/2,right:t.right+d/2,top:t.top-f/2,bottom:t.bottom+f/2}}var qb=e((()=>{ai(),Lt()}));function Jb(e={}){let{highlightItemOnHover:t,highlightedIndex:n,onHighlightedIndexChange:r}=gg(),{ref:i,index:a}=Dv(e),o=n===a,s=Yb.useRef(null),c=Fr(i,s);return{compositeProps:{tabIndex:o?0:-1,onFocus(){r(a)},onMouseMove(){let e=s.current;if(!t||!e)return;let n=e.hasAttribute(`disabled`)||e.ariaDisabled===`true`;!o&&!n&&e.focus()}},compositeRef:c,index:a}}var Yb,Xb=e((()=>{Yb=t(l(),1),Vr(),yg(),Av()}));function Zb(e){let{render:t,className:n,style:r,state:i=Gn,props:a=Wn,refs:o=Wn,metadata:s,stateAttributesMapping:c,tag:l=`div`,...u}=e,{compositeProps:d,compositeRef:f}=Jb({metadata:s});return Y(l,e,{state:i,ref:[...o,f],props:[d,...a,u],stateAttributesMapping:c})}var Qb=e((()=>{Kn(),X(),Xb()}));function $b(e){if(Zt(e)&&e.hasAttribute(`data-rootownerid`))return e.getAttribute(`data-rootownerid`)??void 0;if(!on(e))return $b(ln(e))}var ex=e((()=>{_n()}));function tx(e,t){let n=nx.useRef(null);function r(t){rx.flushSync(()=>{e.setOpen(!1,G(lr,t.nativeEvent,t.currentTarget))}),ya(n.current)?.focus()}function i(n){let r=e.select(`positionerElement`);if(r&&ba(n,r))e.context.beforeContentFocusGuardRef.current?.focus();else{rx.flushSync(()=>{e.setOpen(!1,G(lr,n.nativeEvent,n.currentTarget))});let i=va(e.context.triggerFocusTargetRef.current||t.current);for(;i!==null&&W(r,i);){let e=i;if(i=ha(i),i===e)break}i?.focus()}}return{preFocusGuardRef:n,handlePreFocusGuardFocus:r,handleFocusTargetFocus:i}}var nx,rx,ix=e((()=>{nx=t(l(),1),rx=t(u(),1),kl(),Er(),wr()}));function ax(e){let{enabled:t=!0,mouseDownAction:n,open:r}=e,i=ox.useRef(!1);return ox.useMemo(()=>t?{onMouseDown:e=>{(n===`open`&&!r||n===`close`&&r)&&(i.current=!0,J(e.currentTarget).addEventListener(`click`,()=>{i.current=!1},{once:!0}))},onClick:e=>{i.current&&(i.current=!1,e.preventBaseUIHandler())}}:Gn,[t,n,r])}var ox,sx=e((()=>{ox=t(l(),1),ai(),Kn()}));function cx(e,t){let n=ft(),[r,i]=ux.useState(!1);return H(()=>{e&&t===`trigger-hover`?(i(!0),n.start(500,()=>{i(!1)})):e||(n.clear(),i(!1))},[e,t,n]),r}function lx(){let e=cv(!0),t=iv(!0),n=vb(!0);return ux.useMemo(()=>n?{type:`menubar`,context:n}:e&&!t?{type:`context-menu`,context:e}:{type:void 0},[e,t,n])}var ux,dx,fx,px,mx=e((()=>{rt(),ux=t(l(),1),ht(),ai(),Qe(),Qr(),U(),Kn(),gd(),Bo(),kl(),sv(),Ld(),X(),Dg(),qb(),Qb(),yg(),ex(),Tu(),ix(),zd(),wr(),sx(),dv(),xb(),Do(),pi(),ze(),dx=t(c(),1),fx=2,px=qe(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,id:s,openOnHover:c,delay:l=100,closeDelay:u=0,handle:d,payload:f,...p}=e,m=iv(!0),h=d?.store??m?.store;if(!h)throw Error(nt(85));let g=Rd(s),_=h.useState(`isTriggerActive`,g),v=h.useState(`floatingRootContext`),y=h.useState(`isOpenedByTrigger`,g),b=h.useState(`triggerPopupId`,g),x=ux.useRef(null),S=lx(),C=gg(!0),w=Yo(),T=ux.useMemo(()=>w??new zo,[w]),{registerTrigger:E,isMountedByThisTrigger:D}=ru(g,x,h,{payload:f,closeDelay:u,parent:S,floatingTreeRoot:T,floatingNodeId:Vo(T),floatingParentNodeId:Jo(),keyboardEventRelay:C?.relayKeyboardEvent}),O=S.type===`menubar`,k=h.useState(`disabled`),A=a||k||O&&S.context.disabled,{getButtonProps:j,buttonRef:M}=Cg({disabled:A,native:o});ux.useEffect(()=>{!y&&S.type===void 0&&(h.context.allowMouseUpTriggerRef.current=!1)},[h,y,S.type]);let N=ux.useRef(null),P=ft(),F=q(e=>{if(!N.current)return;P.clear(),h.context.allowMouseUpTriggerRef.current=!1;let t=e.target;if(W(N.current,t)||W(h.select(`positionerElement`),t)||t===N.current||t!=null&&$b(t)===h.select(`rootId`))return;let n=Kb(N.current);e.clientX>=n.left-fx&&e.clientX<=n.right+fx&&e.clientY>=n.top-fx&&e.clientY<=n.bottom+fx||T.events.emit(`close`,{domEvent:e,reason:gr})});ux.useEffect(()=>{y&&h.select(`lastOpenChangeReason`)===`trigger-hover`&&J(N.current).addEventListener(`mouseup`,F,{once:!0})},[y,F,h]);let I=O&&S.context.hasSubmenuOpen,L=Wu(v,{enabled:(c??I)&&!A&&S.type!==`context-menu`&&(!O||I&&!D),handleClose:dd({blockPointerEvents:!O}),mouseOnly:!0,move:!1,restMs:S.type===void 0?l:void 0,delay:{close:u},triggerElementRef:x,externalTree:T,isActiveTrigger:_,isClosing:()=>h.select(`transitionStatus`)===`ending`}),R=cx(y,h.select(`lastOpenChangeReason`)),ee=ds(v,{enabled:!A&&S.type!==`context-menu`,event:y&&O?`click`:`mousedown`,toggle:!0,ignoreMouse:!1,stickIfOpen:S.type===void 0?R:!1}),z=ju(v,{enabled:!A&&I}),te=ax({open:y,enabled:O,mouseDownAction:`open`}),ne=ux.useMemo(()=>Ce(z.reference,ee.reference),[z.reference,ee.reference]),re=h.useState(`triggerProps`,D),{preFocusGuardRef:B,handlePreFocusGuardFocus:ie,handleFocusTargetFocus:V}=tx(h,x),ae={disabled:A,open:y},oe=[N,t,M,E,x],se=[ne,L??Gn,re,{"aria-haspopup":`menu`,"aria-controls":b,id:g,onMouseDown:e=>{h.select(`open`)||(P.start(200,()=>{h.context.allowMouseUpTriggerRef.current=!0}),J(e.currentTarget).addEventListener(`mouseup`,F,{once:!0}))}},O?{role:`menuitem`}:{},te,p,j],ce=Y(`button`,e,{enabled:!O,stateAttributesMapping:Fd,state:ae,ref:oe,props:se});return O?(0,dx.jsx)(Zb,{tag:`button`,render:n,className:r,style:i,state:ae,refs:oe,props:se,stateAttributesMapping:Fd}):y?(0,dx.jsxs)(ux.Fragment,{children:[(0,dx.jsx)(fi,{ref:B,onFocus:ie},`${g}-pre-focus-guard`),(0,dx.jsx)(ux.Fragment,{children:ce},g),(0,dx.jsx)(fi,{ref:h.context.triggerFocusTargetRef,onFocus:V},`${g}-post-focus-guard`)]}):(0,dx.jsx)(ux.Fragment,{children:ce},g)})})),hx,gx,_x=e((()=>{hx=t(l(),1),X(),gx=hx.forwardRef(function(e,t){let{className:n,render:r,orientation:i=`horizontal`,style:a,...o}=e;return Y(`div`,e,{state:{orientation:i},ref:t,props:[{role:`separator`,"aria-orientation":i},o]})})}));function vx(e){return e==null||e.hasAttribute(`disabled`)||e.getAttribute(`aria-disabled`)===`true`}var yx=e((()=>{})),bx,xx,Sx=e((()=>{rt(),bx=t(l(),1),Kn(),gd(),sv(),zd(),Ld(),Av(),Sv(),X(),rv(),Tu(),Lb(),xx=bx.forwardRef(function(e,t){let{render:n,className:r,style:i,label:a,id:o,nativeButton:s=!1,openOnHover:c=!0,delay:l=100,closeDelay:u=0,disabled:d=!1,...f}=e,p=Dv({label:a}),m=ev(),{store:h}=iv(),g=Rd(o),_=h.useState(`open`),v=h.useState(`floatingRootContext`),y=h.useState(`floatingTreeRoot`),b=h.useState(`triggerPopupId`,g),x=Ql(g,h),S=bx.useCallback(e=>{let t=x(e);return e!==null&&h.select(`open`)&&h.select(`activeTriggerId`)==null&&h.update({activeTriggerId:g,activeTriggerElement:e,closeDelay:u}),t},[x,u,h,g]),C=bx.useRef(null),w=bx.useCallback(e=>{C.current=e,h.set(`activeTriggerElement`,e)},[h]),T=Pb();if(!T?.parentMenu)throw Error(nt(37));h.useSyncedValue(`closeDelay`,u);let E=T.parentMenu,D=h.useState(`disabled`),O=E.useState(`disabled`),k=d||D||O,A=E.useState(`itemProps`),j=E.useState(`isActive`,p.index),M=bx.useMemo(()=>({type:`submenu-trigger`,setActive(){E.select(`highlightItemOnHover`)&&E.set(`activeIndex`,p.index)}}),[E,p.index]),{getItemProps:N,itemRef:P}=yv({closeOnClick:!1,disabled:k,highlighted:j,id:g,store:h,typingRef:E.context.typingRef,nativeButton:s,itemMetadata:M,nodeId:m?.context.nodeId}),F=Wu(v,{enabled:h.useState(`hoverEnabled`)&&c&&!k,handleClose:dd({blockPointerEvents:!0}),mouseOnly:!0,move:!0,restMs:l,delay:{open:l,close:u},shouldOpen:l>0?()=>E.select(`allowMouseEnter`):void 0,triggerElementRef:C,externalTree:y,isClosing:()=>h.select(`transitionStatus`)===`ending`}),I=ds(v,{enabled:!k,event:`mousedown`,toggle:!c,ignoreMouse:c,stickIfOpen:!1}).reference??Gn,L=h.useState(`triggerProps`,!0);return delete L.id,Y(`div`,e,{state:{disabled:k,highlighted:j,open:_},stateAttributesMapping:Pd,props:[I,F,L,A,{"aria-controls":b,tabIndex:_||j?0:-1,onBlur(){j&&E.set(`activeIndex`,null)}},f,N],ref:[t,p.ref,P,S,w]})})})),Cx=e((()=>{rv(),sv(),X(),Ld(),Ul(),dv(),wr(),Rv(),Vv(),Yv(),Qv(),ty(),zd(),Av(),vv(),Og(),ze(),Ny(),Vy(),_b(),hg(),Qr(),rt(),Gv(),Pv(),Sv(),Er(),Rl(),Yl(),Vb(),Gb(),mx(),Cp(),_x(),Sx(),Nb()})),wx=e((()=>{Cx()})),Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx=e((()=>{_e(),Xp(),rm(),U_(),lm(),V_(),Q_(),$_(),Tx=t(l(),1),Ex=t(c(),1),y(),ze(),zp(),wx(),x(),Dx=e=>(0,Ex.jsx)(Bb,{modal:!1,...e}),Ox=Hb,kx=Bv,Ax=(e,t)=>typeof t==`function`?n=>g(e,t(n)):g(e,t),jx=({children:e,className:t,nativeButton:n,ref:r,...i})=>{let{isNativeButtonTriggerElement:a,resolvedNativeButton:o}=me({children:e,nativeButton:n}),s=n=>{let i=(()=>{if(a)return n;let{type:e,...t}=n;return t})(),o=Ce(e.props,i);return(0,Tx.cloneElement)(e,{...o,className:T(H_.DropdownMenuTrigger,t,o.className),ref:Rp([e.ref,n.ref,r])})};return(0,Tx.isValidElement)(e)?(0,Ex.jsx)(px,{...i,nativeButton:o,render:s}):(0,Ex.jsx)(px,{...i,className:T(H_.DropdownMenuTrigger,t),nativeButton:o,ref:r,children:e})},jx.displayName=`DropdownMenuTrigger`,Mx=({container:e,...t})=>{let n=nm();return(0,Ex.jsx)(By,{container:e??n??void 0,...t})},Mx.displayName=`DropdownMenuPortal`,Nx=({className:e,placement:t,hoverTrigger:n,align:r,side:i,sideOffset:a,children:o,style:s,...c})=>{let l=t?cm[t]:void 0,[u,d]=(0,Tx.useState)(null),{zIndex:f,ref:p}=X_(`floating`,typeof s!=`function`&&s?.zIndex!=null&&typeof s.zIndex==`number`?s.zIndex:void 0),m=Ip([d,p]),h=typeof s==`function`?e=>({zIndex:f,...s(e)}):{zIndex:f,...s};return(0,Ex.jsx)(gb,{...c,align:r??l?.align,className:Ax($.positioner,e),"data-hover-trigger":n||void 0,"data-placement":t,ref:m,side:i??l?.side,sideOffset:a??(l?6:void 0),style:h,children:(0,Ex.jsx)(Yp,{value:u,children:o})})},Nx.displayName=`DropdownMenuPositioner`,Px=({className:e,...t})=>(0,Ex.jsx)(My,{...t,className:Ax($.popup,e)}),Px.displayName=`DropdownMenuPopup`,Fx=({className:e,...t})=>(0,Ex.jsx)(`div`,{...t,className:g($.header,e)}),Fx.displayName=`DropdownMenuHeader`,Ix=({className:e,...t})=>(0,Ex.jsx)(`div`,{...t,className:g($.footer,e)}),Ix.displayName=`DropdownMenuFooter`,Lx=({className:e,...t})=>(0,Ex.jsx)(`div`,{...t,className:g($.slotViewport,e)}),Lx.displayName=`DropdownMenuScrollViewport`,Rx=({className:e,danger:t,...n})=>(0,Ex.jsx)(ey,{...n,className:n=>g($.item,t&&$.danger,typeof e==`function`?e(n):e)}),Rx.displayName=`DropdownMenuItem`,zx=({className:e,danger:t,...n})=>(0,Ex.jsx)(Lv,{...n,className:n=>g($.item,t&&$.danger,typeof e==`function`?e(n):e)}),zx.displayName=`DropdownMenuCheckboxItemPrimitive`,Bx=({className:e,...t})=>(0,Ex.jsx)(gx,{...t,className:t=>g($.separator,typeof e==`function`?e(t):e)}),Bx.displayName=`DropdownMenuSeparator`,Vx=Jv,Hx=({className:e,...t})=>(0,Ex.jsx)(Zv,{...t,className:t=>g($.groupLabel,typeof e==`function`?e(t):e)}),Hx.displayName=`DropdownMenuGroupLabel`,Ux=({className:e,danger:t,...n})=>(0,Ex.jsx)(xx,{...n,className:n=>g($.item,t&&$.danger,typeof e==`function`?e(n):e)}),Ux.displayName=`DropdownMenuSubmenuTrigger`,Wx=({className:e,...t})=>(0,Ex.jsx)(`div`,{...t,className:g($.itemContent,e)}),Wx.displayName=`DropdownMenuItemContent`,Gx=({className:e,...t})=>(0,Ex.jsx)(`span`,{...t,className:g($.icon,e)}),Gx.displayName=`DropdownMenuItemIcon`,Kx=({className:e,...t})=>(0,Ex.jsx)(`div`,{...t,className:g($.labelGroup,e)}),Kx.displayName=`DropdownMenuItemLabelGroup`,qx=({className:e,...t})=>(0,Ex.jsx)(`span`,{...t,className:g($.label,e)}),qx.displayName=`DropdownMenuItemLabel`,Jx=({className:e,...t})=>(0,Ex.jsx)(`span`,{...t,className:g($.desc,e)}),Jx.displayName=`DropdownMenuItemDesc`,Yx=({className:e,...t})=>(0,Ex.jsx)(`span`,{...t,className:g($.extra,e)}),Yx.displayName=`DropdownMenuItemExtra`,Xx=({className:e,...t})=>(0,Ex.jsx)(`span`,{...t,className:g($.submenuArrow,e)}),Xx.displayName=`DropdownMenuSubmenuArrow`,Zx=({checked:e,className:t,closeOnClick:n=!1,danger:r,defaultChecked:i,disabled:a,onCheckedChange:o,children:s,...c})=>{let[l,u]=(0,Tx.useState)(i??!1),d=e!==void 0,f=d?e:l,p=(0,Tx.useCallback)(e=>{d||u(e),o?.(e)},[d,o]);return(0,Ex.jsxs)(ey,{...c,closeOnClick:n,disabled:a,className:e=>g($.item,r&&$.danger,typeof t==`function`?t(e):t),onClick:e=>{e.preventDefault(),a||p(!f)},children:[s,(0,Ex.jsx)(`span`,{style:{display:`inline-flex`,marginInlineStart:16},onFocus:e=>e.stopPropagation(),children:(0,Ex.jsx)(B_,{checked:f,disabled:a,size:`small`,tabIndex:-1,onChange:p,onClick:(e,t)=>t.stopPropagation()})})]})},Zx.displayName=`DropdownMenuSwitchItem`}));function $x(e){let t=new Set((Array.isArray(e)?e:[e]).flatMap(e=>e===`both`?[`hover`,`click`]:[e]));return{openOnClick:t.has(`click`),openOnHover:t.has(`hover`)}}var eS=e((()=>{})),tS,nS,rS=e((()=>{tS=t(c(),1),nS=()=>(0,tS.jsx)(`svg`,{"aria-hidden":!0,fill:`currentColor`,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:1.5,viewBox:`0 0 16 16`,children:(0,tS.jsx)(`path`,{d:`M6 5l4 3-4 3z`})})})),iS,aS,oS,sS,cS,lS,uS,dS=e((()=>{Jm(),iS=t(l(),1),aS=t(c(),1),oS=(e,t)=>e&&`key`in e&&e.key!==void 0?e.key:t,sS=e=>e.label===void 0?`title`in e&&e.title!==void 0?e.title:e.key:e.label,cS=(e,t)=>e?(0,iS.isValidElement)(e)?e:(0,aS.jsx)(qm,{icon:e,size:t}):null,lS=(e,t=!1)=>e.some(e=>e?e.type===`checkbox`||`icon`in e&&e.icon?!0:t&&`children`in e&&e.children?lS(e.children,!0):!1:!1),uS=e=>{let t=!1,n=!1;for(let r of e)if(r&&(r.type===`checkbox`&&(t=!0),`icon`in r&&r.icon&&(n=!0),t&&n))return!0;return!1}})),fS,pS,mS,hS,gS=e((()=>{$_(),Qx(),rS(),dS(),fS=t(c(),1),oe(),pS=(e,t,n)=>{let r=sS(e),i=`desc`in e?e.desc:void 0,a=`extra`in e?e.extra:void 0,o=t?.indicatorOnRight,s=!!i&&t?.iconAlign===`start`,c=n!==void 0&&!o,l=c?!!n:!!e.icon,u=c?!!(t?.reserveIconSpace||n):!!(l||t?.reserveIconSpace),d=i?(0,fS.jsxs)(Kx,{children:[(0,fS.jsx)(qx,{children:r}),(0,fS.jsx)(Jx,{children:i})]}):(0,fS.jsx)(qx,{children:r});return(0,fS.jsxs)(Wx,{className:s?$.itemContentAlignStart:void 0,children:[u?(0,fS.jsx)(Gx,{"aria-hidden":!l,className:s?$.iconAlignStart:void 0,children:c?n:l?cS(e.icon):null}):null,d,a?(0,fS.jsx)(Yx,{children:a}):null,o&&n?n:null,t?.submenu?(0,fS.jsx)(Xx,{children:(0,fS.jsx)(nS,{})}):null]})},mS=(e,t,n)=>{if(!e.onClick)return;let r=e.key??t.at(-1)??``,i={domEvent:n,item:n.currentTarget,key:String(r),keyPath:t};e.onClick(i)},hS=(e,t=[],n)=>{let r=n?.iconAlign,i=n?.iconSpaceMode??`global`,a=n?.reserveIconSpace??lS(e,i===`global`),o=n?.indicatorOnRight??uS(e);return e.map((e,n)=>{if(!e)return null;let s=oS(e,`${t.join(`-`)||`root`}-${n}`),c=[...t,String(s)];if(e.type===`checkbox`){let t=e,n=sS(t),i=typeof n==`string`?n:void 0,c=!!t.danger,l=(0,fS.jsx)(kx,{children:cS(re)});return(0,fS.jsx)(zx,{checked:t.checked,closeOnClick:t.closeOnClick,danger:c,defaultChecked:t.defaultChecked,disabled:t.disabled,label:i,onCheckedChange:e=>t.onCheckedChange?.(e),children:pS(t,{iconAlign:r,indicatorOnRight:o,reserveIconSpace:a},l)},s)}if(e.type===`switch`){let t=e,n=sS(t),i=typeof n==`string`?n:void 0,o=!!t.danger;return(0,fS.jsx)(Zx,{checked:t.checked,closeOnClick:t.closeOnClick,danger:o,defaultChecked:t.defaultChecked,disabled:t.disabled,label:i,onCheckedChange:e=>t.onCheckedChange?.(e),children:pS(t,{iconAlign:r,reserveIconSpace:a})},s)}if(e.type===`divider`)return(0,fS.jsx)(Bx,{},s);if(e.type===`group`){let t=e,n=i===`group`?t.children?lS(t.children):!1:a,o=t.children?uS(t.children):!1;return(0,fS.jsxs)(Vx,{children:[t.label?(0,fS.jsx)(Hx,{children:t.label}):null,t.children?hS(t.children,c,{iconAlign:r,iconSpaceMode:i,indicatorOnRight:o,reserveIconSpace:n}):null]},s)}if(e.type===`submenu`||`children`in e){let t=e,n=sS(t),o=typeof n==`string`?n:void 0,l=`danger`in t&&!!t.danger,u=t.header!=null||t.footer!=null,d=t.children?hS(t.children,c,{iconAlign:r,iconSpaceMode:i}):null;return(0,fS.jsxs)(Ox,{defaultOpen:t.defaultOpen,open:t.open,onOpenChange:t.onOpenChange,children:[(0,fS.jsx)(Ux,{...t.triggerProps,closeDelay:t.closeDelay,danger:l,delay:t.delay,disabled:t.disabled,label:o,openOnHover:t.openOnHover,onClick:t.onClick,children:pS(t,{iconAlign:r,reserveIconSpace:a,submenu:!0})}),(0,fS.jsx)(Mx,{children:(0,fS.jsx)(Nx,{alignOffset:-4,"data-submenu":``,sideOffset:-1,children:(0,fS.jsxs)(Px,{className:u?$.popupWithSlots:void 0,children:[t.header==null?null:(0,fS.jsx)(Fx,{children:t.header}),u?(0,fS.jsx)(Lx,{children:d}):d,t.footer==null?null:(0,fS.jsx)(Ix,{children:t.footer})]})})})]},s)}let l=e,u=sS(l),d=typeof u==`string`?u:void 0,f=`danger`in l&&!!l.danger;return(0,fS.jsx)(Rx,{closeOnClick:l.closeOnClick,danger:f,disabled:l.disabled,label:d,onClick:e=>mS(l,c,e),children:pS(l,{iconAlign:r,reserveIconSpace:a})},s)})}})),_S,vS,yS,bS=e((()=>{_e(),$_(),Qx(),eS(),gS(),_S=t(l(),1),vS=t(c(),1),y(),wx(),yS=(0,_S.memo)(({children:e,defaultOpen:t,footer:n,header:r,iconAlign:i,iconSpaceMode:a,items:o,nativeButton:s,onOpenChange:c,onOpenChangeComplete:l,open:u,placement:d=`bottomLeft`,popupProps:f,portalProps:p,positionerProps:m,trigger:h=`click`,triggerProps:_,...v})=>{let[y,b]=(0,_S.useState)(!!t),{openOnHover:x}=(0,_S.useMemo)(()=>$x(h),[h]),S=_?.openOnHover??x;(0,_S.useEffect)(()=>{u!==void 0&&b(u)},[u]);let C=(0,_S.useCallback)((e,t)=>{c?.(e,t),u===void 0&&b(e)},[c,u]),w=(0,_S.useRef)(null),T=u??y,E=(0,_S.useMemo)(()=>{if(T){let e=hS(typeof o==`function`?o():o,[],{iconAlign:i,iconSpaceMode:a});return w.current=e,e}return w.current},[T,o,i,a]),D=(0,_S.useCallback)(e=>{l?.(e),e||(w.current=null)},[l]),{container:O,...k}=p??{},{resolvedNativeButton:A}=me({children:e,nativeButton:s,triggerNativeButton:_?.nativeButton}),j=r!=null||n!=null,M=(0,vS.jsx)(jx,{..._,nativeButton:A,openOnHover:S,children:e});return(0,vS.jsxs)(Bb,{...v,defaultOpen:t,modal:!1,open:u,onOpenChange:C,onOpenChangeComplete:D,children:[M,(0,vS.jsx)(Mx,{container:O,...k,children:(0,vS.jsx)(Nx,{...m,hoverTrigger:S,placement:d,children:(0,vS.jsxs)(Px,{...f,"data-has-footer":n==null?void 0:``,"data-has-header":r==null?void 0:``,className:j?g($.popupWithSlots,f?.className):f?.className,children:[r==null?null:(0,vS.jsx)(Fx,{children:r}),j?(0,vS.jsx)(Lx,{children:E}):E,n==null?null:(0,vS.jsx)(Ix,{children:n})]})})})]})}),yS.displayName=`DropdownMenuV2`})),xS,SS,CS=e((()=>{ah(),y(),Bm(),xS=d(({css:e,cssVar:t})=>({active:ih.active,dangerRoot:e`
      &&:hover {
        color: ${t.colorError};
      }

      &&:active {
        color: ${t.colorErrorActive};
      }
    `,glass:ih.blur,root:e`
      && {
        color: ${t.colorTextTertiary};
      }

      &&:hover {
        color: ${t.colorTextSecondary};
      }

      &&:active {
        color: ${t.colorText};
      }
    `,shadow:ih.shadow})),SS=zm(xS.root,{defaultVariants:{active:!1,danger:!1,glass:!1,shadow:!1},variants:{active:{false:null,true:xS.active},danger:{false:null,true:xS.dangerRoot},glass:{false:null,true:xS.glass},shadow:{false:null,true:xS.shadow}}})})),wS,TS=e((()=>{o(),wS=e=>{let t,n;if(i(e)){let t=e*1.8;return{blockSize:t,borderRadius:Math.floor(t/6)}}switch(e){case`large`:t=44,n=8;break;case`middle`:t=36,n=6;break;case`small`:t=24,n=4;break;default:e?(t=e?.blockSize||36,n=e?.borderRadius||6):(t=`1.8em`,n=`0.3em`)}return{blockSize:t,borderRadius:n}}})),ES,DS,OS,kS,AS,jS=e((()=>{Jm(),Ph(),cg(),CS(),TS(),ES=t(l(),1),DS=t(c(),1),y(),OS=e=>e===`filled`?`fill`:e===`outlined`?`default`:`text`,kS=e=>e===`small`?`small`:e===`large`?`large`:`middle`,AS=(0,ES.memo)(({active:e,className:t,classNames:n,color:r,danger:i,disabled:a,fill:o,fillOpacity:s,fillRule:c,focusable:l,glass:u,icon:d,loading:f,onClick:p,ref:m,shadow:h,size:_=`middle`,spin:v,style:y,styles:b,title:x,tooltipProps:S,variant:C=`borderless`,...w})=>{let{blockSize:T,borderRadius:E}=(0,ES.useMemo)(()=>wS(_),[_]),D=w,O=D[`aria-haspopup`]!==void 0||D[`aria-expanded`]!==void 0,k=D[`aria-label`]??(O&&typeof x==`string`?x:void 0),A=e=>{p?.(e)},j=d?(0,DS.jsx)(qm,{className:n?.icon,color:r,fill:o,fillOpacity:s,fillRule:c,focusable:l,icon:d,size:_,spin:v,style:{pointerEvents:`none`,...b?.icon}}):void 0,M=(0,DS.jsx)(sg,{...w,"aria-label":k,className:g(SS({active:e,danger:i,glass:u,shadow:h}),n?.root,t),danger:i,disabled:a,htmlType:`button`,icon:j,loading:f,ref:m,size:kS(_),tabIndex:a?-1:0,type:OS(C),style:{borderRadius:E,height:T,width:T,...b?.root,...y},onClick:A});return x?(0,DS.jsx)(Nh,{title:x,...S,styles:{...S?.styles,container:{pointerEvents:`none`,...S?.styles?.container}},children:M}):M}),AS.displayName=`BaseActionIcon`})),MS,NS,PS,FS,IS,LS,RS,zS,BS,VS,HS,US,WS,GS,KS,qS,JS,YS=e((()=>{MS={anchor:null,iconSpaceMode:`global`,items:[],open:!1,triggerId:null},NS=MS,PS=new Set,FS={ready:!1,triggerId:null,x:0,y:0},IS=()=>{PS.forEach(e=>e())},LS=e=>(PS.add(e),()=>PS.delete(e)),RS=()=>NS,zS=()=>MS,BS=e=>{FS.x=e.clientX,FS.y=e.clientY,FS.ready=!0,e.target instanceof Element?FS.triggerId=e.target.closest(`[data-contextmenu-trigger]`)?.dataset.contextmenuTrigger??null:FS.triggerId=null},VS=e=>({contextElement:typeof document>`u`?void 0:document.body,getBoundingClientRect:()=>({bottom:e.y,height:0,left:e.x,right:e.x,toJSON:()=>void 0,top:e.y,width:0,x:e.x,y:e.y})}),HS=e=>{NS={...NS,...e},IS()},US=null,WS=e=>{US=e},GS=(e,t)=>{let n={x:window.innerWidth/2,y:window.innerHeight/2};HS({anchor:VS(FS.ready?{x:FS.x,y:FS.y}:n),footer:t?.footer,header:t?.header,iconAlign:t?.iconAlign,iconSpaceMode:t?.iconSpaceMode??`global`,items:e,open:!0,triggerId:FS.triggerId??null})},KS=(e,t)=>{if(!(typeof window>`u`)){if(US?.show){US.show(e,t,()=>GS(e,t));return}GS(e,t)}},qS=()=>{HS({anchor:null,footer:void 0,header:void 0,iconSpaceMode:`global`,items:[],open:!1,triggerId:null})},JS=()=>{if(US?.close){US.close(qS);return}qS()}})),XS,ZS,QS,$S=e((()=>{XS=e=>{e.preventDefault()},ZS=e=>{e.stopPropagation()},QS=e=>{e.preventDefault(),e.stopPropagation(),e.preventBaseUIHandler?.()}})),eC,tC=e((()=>{eC=(e,t)=>()=>{}})),nC,rC,iC,aC=e((()=>{s(),nC=`https://unpkg.com`,rC=`https://registry.npmmirror.com`,iC=({pkg:e,version:t=`latest`,path:n,proxy:r})=>{switch(r){case`unpkg`:return a(nC,`${e}@${t}`,n);default:return a(rC,e,t,`files`,n)}}})),oC,sC,cC,lC,uC,dC,fC,pC,mC,hC=e((()=>{Qh(),aC(),oC=t(l(),1),sC=t(c(),1),cC=(0,oC.createContext)(null),lC=(0,oC.createContext)({locale:`en`,t:e=>e}),uC=e=>typeof e?.then==`function`,dC=(0,oC.memo)(({children:e,config:t,locale:n,resources:r,motion:i})=>{let a=n??`en`,[o,s]=(0,oC.useState)(()=>r&&!uC(r)?r:void 0),[c,l]=(0,oC.useState)(a),u=(0,oC.useRef)(0);(0,oC.useEffect)(()=>{let e=++u.current;if(!r){s(void 0),l(a);return}if(uC(r)){let t=a;r.then(n=>{u.current===e&&(s(n),l(t))}).catch(()=>{u.current});return}s(r),l(a)},[a,r]);let d=uC(r)?o:r,f=uC(r)?c:a;return(0,sC.jsx)(lC,{value:(0,oC.useMemo)(()=>{let e=Array.isArray(d)?d:d?Object.values(d):[],t=Object.assign({},...e);return{locale:f,t:e=>t[e]||e}},[f,d]),children:(0,sC.jsx)(cC,{value:t??null,children:(0,sC.jsx)(Xh,{value:i,children:e})})})}),fC=({pkg:e,version:t,path:n})=>iC({path:n,pkg:e,proxy:`aliyun`,version:t}),pC=()=>{let e=(0,oC.use)(cC);return e?e?.proxy===`custom`?e?.customCdnFn||fC:({pkg:t,version:n,path:r})=>iC({path:r,pkg:t,proxy:e.proxy,version:n}):fC},mC=()=>(0,oC.use)(lC)})),gC,_C,vC=e((()=>{hC(),gC=t(l(),1),_C=e=>{let{t,locale:n}=mC();return{locale:n,t:(0,gC.useMemo)(()=>e?n=>{let r=t(n),i=e[n];return r===n&&i?i:r}:t,[t,e])}}}));function yC(e){let[t,n]=bC.useState({getBoundingClientRect(){return DOMRect.fromRect({width:0,height:0,x:0,y:0})}}),r=bC.useRef(null),i=bC.useRef(null),a=bC.useRef(null),o=bC.useRef(null),s=bC.useRef(!0),c=bC.useRef(null),l=qa(),u=bC.useMemo(()=>({anchor:t,setAnchor:n,actionsRef:a,backdropRef:r,internalBackdropRef:i,positionerRef:o,allowMouseUpTriggerRef:s,initialCursorPointRef:c,rootId:l}),[t,l]);return(0,xC.jsx)(uv.Provider,{value:u,children:(0,xC.jsx)(ov.Provider,{value:void 0,children:(0,xC.jsx)(Bb,{...e})})})}var bC,xC,SC=e((()=>{bC=t(l(),1),Za(),dv(),wx(),sv(),xC=t(c(),1)})),CC=e((()=>{SC(),Mr(),ai(),ht(),kl(),dv(),sv(),X(),Er(),Ld(),wr(),ex(),Ul(),Vy(),_b(),Ny(),rv(),Yv(),Qv(),ty(),Rv(),Vv(),zd(),Av(),vv(),Og(),ze(),hg(),Qr(),rt(),Gv(),Pv(),Sv(),Rl(),Yl(),Gb(),Sx(),_x()})),wC=e((()=>{CC()})),TC,EC,DC,OC,kC,AC,jC,MC,NC=e((()=>{Jm(),$S(),V_(),Q_(),$_(),rS(),dS(),se(),vC(),TC=t(l(),1),EC=t(c(),1),y(),oe(),wC(),DC=(0,TC.memo)(({style:e,...t})=>{let{zIndex:n,ref:r}=X_(`floating`,typeof e!=`function`&&e?.zIndex!=null&&typeof e.zIndex==`number`?e.zIndex:void 0),i=typeof e==`function`?t=>({zIndex:n,...e(t)}):{zIndex:n,...e};return(0,EC.jsx)(gb,{...t,ref:r,style:i})}),DC.displayName=`ContextMenuSubmenuPositioner`,OC=(0,TC.memo)(()=>{let{t:e}=_C(ce);return(0,EC.jsx)(ey,{disabled:!0,className:g($.item,$.empty),children:(0,EC.jsx)(`div`,{className:$.itemContent,children:(0,EC.jsx)(`span`,{className:$.label,children:e(`common.empty`)})})})}),OC.displayName=`EmptyMenuItem`,kC=({checked:e,children:t,closeOnClick:n=!1,danger:r,defaultChecked:i,disabled:a,label:o,onCheckedChange:s})=>{let[c,l]=(0,TC.useState)(i??!1),u=e!==void 0,d=u?e:c,f=(0,TC.useCallback)(e=>{u||l(e),s?.(e)},[u,s]);return(0,EC.jsxs)(ey,{className:g($.item,r&&$.danger),closeOnClick:n,disabled:a,label:o,onClick:e=>{e.preventDefault(),a||f(!d)},children:[t,(0,EC.jsx)(`span`,{style:{display:`inline-flex`,marginInlineStart:16},onFocus:e=>e.stopPropagation(),children:(0,EC.jsx)(B_,{checked:d,disabled:a,size:`small`,tabIndex:-1,onChange:f,onClick:(e,t)=>t.stopPropagation()})})]})},AC=(e,t,n)=>{let r=sS(e),i=`desc`in e?e.desc:void 0,a=`extra`in e?e.extra:void 0,o=t?.indicatorOnRight,s=!!i&&t?.iconAlign===`start`,c=n!==void 0&&!o,l=c?!!n:!!e.icon,u=c?!!(t?.reserveIconSpace||n):!!(l||t?.reserveIconSpace),d=i?(0,EC.jsxs)(`div`,{className:$.labelGroup,children:[(0,EC.jsx)(`span`,{className:$.label,children:r}),(0,EC.jsx)(`span`,{className:$.desc,children:i})]}):(0,EC.jsx)(`span`,{className:$.label,children:r});return(0,EC.jsxs)(`div`,{className:g($.itemContent,s&&$.itemContentAlignStart),children:[u?(0,EC.jsx)(`span`,{"aria-hidden":!l,className:g($.icon,s&&$.iconAlignStart),children:c?n:l?cS(e.icon,`small`):null}):null,d,a?(0,EC.jsx)(`span`,{className:$.extra,children:a}):null,o&&n?n:null,t?.submenu?(0,EC.jsx)(`span`,{className:$.submenuArrow,children:(0,EC.jsx)(nS,{})}):null]})},jC=(e,t,n)=>{if(!e.onClick)return;let r=e.key??t.at(-1)??``,i={domEvent:n,item:n.currentTarget,key:String(r),keyPath:t};e.onClick(i)},MC=(e,t=[],n)=>{let r=n?.iconAlign,i=n?.iconSpaceMode??`global`,a=n?.reserveIconSpace??lS(e,i===`global`),o=n?.indicatorOnRight??uS(e);return e.map((e,n)=>{if(!e)return null;let s=oS(e,`${t.join(`-`)||`root`}-${n}`),c=[...t,String(s)];if(e.type===`checkbox`){let t=e,n=sS(t),i=typeof n==`string`?n:void 0,c=!!t.danger,l=(0,EC.jsx)(Bv,{children:(0,EC.jsx)(qm,{icon:re,size:`small`})});return(0,EC.jsx)(Lv,{checked:t.checked,className:g($.item,c&&$.danger),closeOnClick:t.closeOnClick,defaultChecked:t.defaultChecked,disabled:t.disabled,label:i,onCheckedChange:e=>t.onCheckedChange?.(e),children:AC(t,{iconAlign:r,indicatorOnRight:o,reserveIconSpace:a},l)},s)}if(e.type===`switch`){let t=e,n=sS(t),i=typeof n==`string`?n:void 0,o=!!t.danger;return(0,EC.jsx)(kC,{checked:t.checked,closeOnClick:t.closeOnClick,danger:o,defaultChecked:t.defaultChecked,disabled:t.disabled,label:i,onCheckedChange:t.onCheckedChange,children:AC(t,{iconAlign:r,reserveIconSpace:a})},s)}if(e.type===`divider`)return(0,EC.jsx)(gx,{className:$.separator},s);if(e.type===`group`){let t=e,n=i===`group`?t.children?lS(t.children):!1:a,o=t.children?uS(t.children):!1;return(0,EC.jsxs)(Jv,{children:[t.label?(0,EC.jsx)(Zv,{className:$.groupLabel,children:t.label}):null,t.children?MC(t.children,c,{iconAlign:r,iconSpaceMode:i,indicatorOnRight:o,reserveIconSpace:n}):null]},s)}if(e.type===`submenu`||`children`in e&&e.children){let t=e,n=sS(t),o=typeof n==`string`?n:void 0,l=`danger`in t&&!!t.danger,u=t.header!=null||t.footer!=null,d=t.children&&t.children.length>0?MC(t.children,c,{iconAlign:r,iconSpaceMode:i}):(0,EC.jsx)(OC,{});return(0,EC.jsxs)(Hb,{defaultOpen:t.defaultOpen,open:t.open,onOpenChange:t.onOpenChange,children:[(0,EC.jsx)(xx,{...t.triggerProps,className:g($.item,l&&$.danger),closeDelay:t.closeDelay,delay:t.delay,disabled:t.disabled,label:o,openOnHover:t.openOnHover,onClick:t.onClick,children:AC(t,{iconAlign:r,reserveIconSpace:a,submenu:!0})}),(0,EC.jsx)(By,{children:(0,EC.jsx)(DC,{alignOffset:-4,className:$.positioner,"data-submenu":``,sideOffset:-1,onContextMenu:QS,children:(0,EC.jsxs)(My,{className:u?g($.popup,$.popupWithSlots):$.popup,children:[t.header==null?null:(0,EC.jsx)(`div`,{className:$.header,children:t.header}),u?(0,EC.jsx)(`div`,{className:$.slotViewport,children:d}):d,t.footer==null?null:(0,EC.jsx)(`div`,{className:$.footer,children:t.footer})]})})})]},s)}let l=e,u=sS(l),d=typeof u==`string`?u:void 0,f=`danger`in l&&!!l.danger;return(0,EC.jsx)(ey,{className:g($.item,f&&$.danger),closeOnClick:l.closeOnClick,disabled:l.disabled,label:d,onClick:e=>jC(l,c,e),children:AC(l,{iconAlign:r,reserveIconSpace:a})},s)})}})),PC,FC,IC,LC,RC=e((()=>{$p(),rm(),$S(),Q_(),$_(),NC(),YS(),PC=t(l(),1),FC=t(c(),1),y(),wC(),IC={"--lobe-dropdown-animation-duration":`0ms`},LC=(0,PC.memo)(()=>{let e=Qp(),t=nm(),n=(0,PC.useSyncExternalStore)(LS,RS,zS);(0,PC.useEffect)(()=>{},[e]),(0,PC.useEffect)(()=>{let e=e=>BS(e);return window.addEventListener(`pointerdown`,e,!0),window.addEventListener(`contextmenu`,e,!0),()=>{window.removeEventListener(`pointerdown`,e,!0),window.removeEventListener(`contextmenu`,e,!0)}},[]);let r=(0,PC.useMemo)(()=>MC(n.items,[],{iconAlign:n.iconAlign,iconSpaceMode:n.iconSpaceMode}),[n.items,n.iconAlign,n.iconSpaceMode]),{zIndex:i,ref:a}=X_(`floating`),o=n.header!=null||n.footer!=null;return!e||!n.open&&n.items.length===0?null:(0,FC.jsx)(yC,{open:n.open,onOpenChange:e=>{if(e){HS({open:e});return}JS()},children:(0,FC.jsx)(By,{container:t,children:(0,FC.jsx)(gb,{anchor:n.anchor??void 0,className:$.positioner,ref:a,sideOffset:6,style:{...IC,zIndex:i},children:(0,FC.jsxs)(My,{className:g($.popup,o&&$.popupWithSlots),"data-has-footer":n.footer==null?void 0:``,"data-has-header":n.header==null?void 0:``,onContextMenu:QS,children:[n.header==null?null:(0,FC.jsx)(`div`,{className:$.header,children:n.header}),o?(0,FC.jsx)(`div`,{className:$.slotViewport,children:r}):r,n.footer==null?null:(0,FC.jsx)(`div`,{className:$.footer,children:n.footer})]})})})})}),LC.displayName=`ContextMenuHost`})),zC,BC,VC,HC,UC=e((()=>{U_(),YS(),zC=t(l(),1),BC=t(c(),1),ze(),x(),VC={trigger:{display:`contents`}},HC=(0,zC.memo)(({children:e,footer:t,header:n,items:r,onContextMenu:i,...a})=>{let o=(0,zC.useId)(),s=(0,zC.useSyncExternalStore)(LS,RS,zS),c=s.open&&s.triggerId===o,l=(0,zC.useCallback)(e=>{r&&(e.preventDefault(),KS(typeof r==`function`?r():r,{footer:t,header:n})),i?.(e)},[r,i,t,n]),u={...a,"aria-expanded":c||void 0,className:T(H_.ContextTrigger,a.className),"data-contextmenu-trigger":o,"data-popup-open":c?``:void 0,"data-state":c?`open`:void 0,onContextMenu:l};return(0,zC.isValidElement)(e)&&zC.Children.only(e)?(0,zC.cloneElement)(e,Ce(e.props,u)):(0,BC.jsx)(`span`,{style:VC.trigger,...u,children:e})}),HC.displayName=`ContextMenuTrigger`})),WC,GC,KC=e((()=>{WC=t(c(),1),GC=(0,WC.jsxs)(`svg`,{"aria-hidden":`true`,height:`6`,viewBox:`0 0 12 6`,width:`12`,children:[(0,WC.jsx)(`path`,{d:`M0 6L6 0L12 6Z`,"data-role":`fill`}),(0,WC.jsx)(`path`,{d:`M0 6L6 0L12 6`,"data-role":`stroke`})]})})),qC,JC=e((()=>{rm(),qC=e=>{let t=nm();return typeof document>`u`?null:e??t??document.body}})),YC,XC=e((()=>{y(),YC=d(({css:e,cssVar:t})=>({arrow:e`
    --lobe-popover-arrow-offset-block: 5px;
    --lobe-popover-arrow-offset-inline: 8px;

    pointer-events: none;

    position: absolute;
    transform-origin: center;

    display: flex;

    width: 12px;
    height: 6px;

    transition: inset-inline-start var(--lobe-popover-animation-duration)
      var(--lobe-popover-animation-ease-out);

    & > svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    & [data-role='fill'] {
      fill: ${t.colorBgElevated};
    }

    & [data-role='stroke'] {
      fill: none;
      stroke: ${t.colorBorder};
      stroke-width: 1px;
    }

    &[data-side='top'] {
      inset-block-end: calc(var(--lobe-popover-arrow-offset-block) * -1);
      transform: rotate(180deg);
    }

    &[data-side='left'] {
      inset-inline-end: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(90deg);
    }

    &[data-side='right'] {
      inset-inline-start: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(-90deg);
    }

    &[data-side='bottom'] {
      inset-block-start: calc(var(--lobe-popover-arrow-offset-block) * -1);
    }
  `,popup:e`
    position: relative;
    transform-origin: var(--transform-origin);

    min-width: 120px;
    max-width: var(--available-width);
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};

    color: ${t.colorText};

    background: ${t.colorBgElevated};
    outline: none;
    box-shadow:
      0 0 15px 0 #00000008,
      0 2px 30px 0 #00000014;

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: opacity, transform;

    &[data-layout-animation] {
      transition-property: opacity, transform, width, height;
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translate3d(var(--lobe-popover-translate-x), var(--lobe-popover-translate-y), 0)
        scale(var(--lobe-popover-animation-scale));
      opacity: 0;
    }

    &[data-ending-style] {
      transition-timing-function: var(--lobe-popover-animation-ease-in);
      transition-duration: var(--lobe-popover-animation-duration-exit);
    }

    &[data-instant] {
      transition: none;
    }
  `,positioner:e`
    --lobe-popover-animation-duration: 150ms;
    --lobe-popover-animation-translate: 6px;
    --lobe-popover-animation-scale: 0.96;
    --lobe-popover-animation-ease-in: ease-in;
    --lobe-popover-animation-duration-exit: 75ms;
    --lobe-popover-animation-ease-out: ${t.motionEaseOut};
    --lobe-popover-translate-x: 0;
    --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);

    z-index: 1100;

    width: min(var(--positioner-width), var(--available-width));
    height: var(--positioner-height);

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: none;

    &[data-layout-animation] {
      transition-property:
        inset-block-start, inset-inline-start, inset-inline-end, inset-block-end, transform;
    }

    &[data-instant] {
      transition: none;
    }

    /* Fallback: never show a popover when the anchor is hidden or the positioner falls back to (0,0). */
    &[data-anchor-hidden],
    &[data-zero-origin='true'] {
      pointer-events: none;
      visibility: hidden;
    }

    &[data-placement='top'],
    &[data-placement='topLeft'],
    &[data-placement='topRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: var(--lobe-popover-animation-translate);
    }

    &[data-placement='bottom'],
    &[data-placement='bottomLeft'],
    &[data-placement='bottomRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);
    }

    &[data-placement='left'],
    &[data-placement='leftTop'],
    &[data-placement='leftBottom'] {
      --lobe-popover-translate-x: var(--lobe-popover-animation-translate);
      --lobe-popover-translate-y: 0;
    }

    &[data-placement='right'],
    &[data-placement='rightTop'],
    &[data-placement='rightBottom'] {
      --lobe-popover-translate-x: calc(var(--lobe-popover-animation-translate) * -1);
      --lobe-popover-translate-y: 0;
    }
  `,root:e`
    user-select: none;
    position: relative;
    filter: drop-shadow(0 2px 8px rgb(0 0 0 / 12%));
  `,viewport:e`
    --lobe-popover-viewport-inline-padding: 12px;

    position: relative;
    overflow: clip;
    padding-block: 12px;
    padding-inline: var(--lobe-popover-viewport-inline-padding);

    [data-previous],
    [data-current] {
      transform: translateX(0);
      opacity: 1;
      transition:
        transform var(--lobe-popover-animation-duration) var(--lobe-popover-animation-ease-out),
        opacity calc(var(--lobe-popover-animation-duration) / 2)
          var(--lobe-popover-animation-ease-out);
    }

    [data-previous] {
      position: absolute;
      inset-block-start: 12px;
      inset-inline-start: var(--lobe-popover-viewport-inline-padding);
    }

    &[data-activation-direction~='right'] [data-previous][data-ending-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='right'] [data-current][data-starting-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-previous][data-ending-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-current][data-starting-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-previous][data-ending-style] {
      transform: translateY(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-current][data-starting-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-previous][data-ending-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-current][data-starting-style] {
      transform: translateY(-50%);
      opacity: 0;
    }
  `}))}));function ZC(e){let t=QC.useContext($C);if(t===void 0&&!e)throw Error(nt(47));return t}var QC,$C,ew=e((()=>{rt(),QC=t(l(),1),$C=QC.createContext(void 0)}));function tw(){return{...gu(),disabled:!1,modal:!1,focusManagerModal:!1,instantType:void 0,openMethod:null,openChangeReason:null,titleElementId:void 0,descriptionElementId:void 0,stickIfOpen:!0,nested:!1,openOnHover:!1,closeDelay:0,hasViewport:!1}}var nw,rw,iw,aw,ow=e((()=>{nw=t(l(),1),rw=t(u(),1),Ol(),ht(),wr(),Tu(),Do(),iw={...Cu,disabled:Z(e=>e.disabled),instantType:Z(e=>e.instantType),openMethod:Z(e=>e.openMethod),openChangeReason:Z(e=>e.openChangeReason),modal:Z(e=>e.modal),focusManagerModal:Z(e=>e.focusManagerModal),stickIfOpen:Z(e=>e.stickIfOpen),titleElementId:Z(e=>e.titleElementId),descriptionElementId:Z(e=>e.descriptionElementId),openOnHover:Z(e=>e.openOnHover),closeDelay:Z(e=>e.closeDelay),hasViewport:Z(e=>e.hasViewport)},aw=class e extends Sl{constructor(e,t,n=!1){let r={...tw(),...e},i=new fu;r.open&&e?.mounted===void 0&&(r.mounted=!0),r.floatingRootContext=_u(i,t,n),super(r,{popupRef:nw.createRef(),backdropRef:nw.createRef(),internalBackdropRef:nw.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerFocusTargetRef:nw.createRef(),beforeContentFocusGuardRef:nw.createRef(),stickIfOpenTimeout:new mt,triggerElements:i},iw)}setOpen=(e,t)=>{let n=t.reason===Yn,r=t.reason===`trigger-press`&&t.event.detail===0,i=!e&&(t.reason===`escape-key`||t.reason==null),a=eu(t),o=this.select(`activeTriggerId`);if(!e&&t.reason===`close-press`&&t.trigger==null&&o!=null&&(t.trigger=this.context.triggerElements.getById(o)??this.select(`activeTriggerElement`)??void 0),this.context.onOpenChange?.(e,t),t.isCanceled)return;this.state.floatingRootContext.dispatchOpenChange(e,t);let s=()=>{let n={open:e,openChangeReason:t.reason};$l(n,e,t.trigger,a()),this.update(n)};n?(this.set(`stickIfOpen`,!0),this.context.stickIfOpenTimeout.start(500,()=>{this.set(`stickIfOpen`,!1)}),rw.flushSync(s)):s(),r||i?this.set(`instantType`,r?`click`:`dismiss`):t.reason===`focus-out`?this.set(`instantType`,`focus`):this.set(`instantType`,void 0)};static useStore(t,n){let{store:r,internalStore:i}=Zl(t,(t,r)=>new e(n,t,r));return nw.useEffect(()=>i?.disposeEffect(),[i]),r}disposeEffect=()=>this.context.stickIfOpenTimeout.disposeEffect()}}));function sw({props:e}){let{children:t,open:n,defaultOpen:r=!1,onOpenChange:i,onOpenChangeComplete:a,modal:o=!1,handle:s,triggerId:c,defaultTriggerId:l=null}=e,u=aw.useStore(s?.store,{modal:o,open:r,openProp:n,activeTriggerId:l,triggerIdProp:c});nu(u,n,r,l),u.useControlledProp(`openProp`,n),u.useControlledProp(`triggerIdProp`,c);let d=u.useState(`open`),f=u.useState(`mounted`),p=u.useState(`payload`),m=Jo()!=null;u.useContextCallback(`onOpenChange`,i),u.useContextCallback(`onOpenChangeComplete`,a),su(u,d),iu(u);let{forceUnmount:h}=au(d,u,()=>{u.update({stickIfOpen:!0,openChangeReason:null})});u.useSyncedValues({modal:o,nested:m}),uw.useEffect(()=>{d||u.context.stickIfOpenTimeout.clear()},[u,d]);let g=uw.useCallback(()=>{u.setOpen(!1,G(xr))},[u]);uw.useImperativeHandle(e.actionsRef,()=>({unmount:h,close:g}),[h,g]);let _=d||f,v=uw.useMemo(()=>({store:u}),[u]);return(0,dw.jsxs)($C.Provider,{value:v,children:[_&&(0,dw.jsx)(lw,{store:u,modal:o}),typeof t==`function`?t({payload:p}):t]})}function cw(e){return ZC(!0)?(0,dw.jsx)(sw,{props:e}):(0,dw.jsx)(Uo,{children:(0,dw.jsx)(sw,{props:e})})}function lw({store:e,modal:t}){let n=xs(e.useState(`floatingRootContext`),{outsidePressEvent:{mouse:t===`trap-focus`?`sloppy`:`intentional`,touch:`sloppy`}});return ou(e,{activeTriggerProps:n.reference??Gn,inactiveTriggerProps:n.trigger??Gn,popupProps:uw.useMemo(()=>Ce(uu,n.floating),[n.floating])}),null}var uw,dw,fw=e((()=>{uw=t(l(),1),Kn(),gd(),ew(),ow(),Er(),wr(),Tu(),ze(),dw=t(c(),1)})),pw=e((()=>{})),mw,hw,gw,_w=e((()=>{rt(),mw=t(l(),1),ew(),Dg(),Ld(),X(),Do(),gd(),pw(),zd(),pi(),wr(),Tu(),ix(),Ob(),hw=t(c(),1),gw=mw.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,handle:s,payload:c,openOnHover:l=!1,delay:u=300,closeDelay:d=0,id:f,...p}=e,m=ZC(!0),h=s?.store??m?.store;if(!h)throw Error(nt(74));let g=Rd(f),_=h.useState(`isTriggerActive`,g),v=h.useState(`floatingRootContext`),y=h.useState(`isOpenedByTrigger`,g),b=h.useState(`triggerPopupId`,g),x=mw.useRef(null),{registerTrigger:S,isMountedByThisTrigger:C}=ru(g,x,h,{payload:c,disabled:a,openOnHover:l,closeDelay:d}),w=h.useState(`openChangeReason`),T=h.useState(`stickIfOpen`),E=h.useState(`openMethod`),D=h.useState(`focusManagerModal`),O=Wu(v,{enabled:!a&&v!=null&&l&&(E!==`touch`||w!==`trigger-press`),mouseOnly:!0,move:!1,handleClose:dd(),restMs:u,delay:{close:d},triggerElementRef:x,isActiveTrigger:_,isClosing:()=>h.select(`transitionStatus`)===`ending`}),k=ds(v,{enabled:v!=null,stickIfOpen:T}),A=Tb(()=>h.select(`open`),e=>{h.set(`openMethod`,e)}),j=h.useState(`triggerProps`,C),{getButtonProps:M,buttonRef:N}=Cg({disabled:a,native:o}),P={open(e){return e&&w===`trigger-press`?Fd.open(e):Pd.open(e)}},{preFocusGuardRef:F,handlePreFocusGuardFocus:I,handleFocusTargetFocus:L}=tx(h,x),R=Y(`button`,e,{state:{disabled:a,open:y},ref:[N,t,S,x],props:[k.reference,O,j,A,{[yo]:``,id:g,"aria-haspopup":`dialog`,"aria-expanded":y,"aria-controls":b},p,M],stateAttributesMapping:P});return C&&!D?(0,hw.jsxs)(mw.Fragment,{children:[(0,hw.jsx)(fi,{ref:F,onFocus:I}),(0,hw.jsx)(mw.Fragment,{children:R},g),(0,hw.jsx)(fi,{ref:h.context.triggerFocusTargetRef,onFocus:L})]}):(0,hw.jsx)(mw.Fragment,{children:R},g)})}));function vw(){let e=yw.useContext(bw);if(e===void 0)throw Error(nt(45));return e}var yw,bw,xw=e((()=>{rt(),yw=t(l(),1),bw=yw.createContext(void 0)})),Sw,Cw,ww,Tw=e((()=>{Sw=t(l(),1),gd(),ew(),xw(),Cw=t(c(),1),ww=Sw.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{store:i}=ZC();return i.useState(`mounted`)||n?(0,Cw.jsx)(bw.Provider,{value:n,children:(0,Cw.jsx)(Fo,{ref:t,...r})}):null})}));function Ew(){let e=Dw.useContext(Ow);if(!e)throw Error(nt(46));return e}var Dw,Ow,kw=e((()=>{rt(),Dw=t(l(),1),Ow=Dw.createContext(void 0)})),Aw,jw,Mw,Nw=e((()=>{Aw=t(l(),1),ep(),U(),gd(),ew(),kw(),Ff(),xw(),Qy(),wr(),Do(),Kl(),kf(),zf(),pb(),jw=t(c(),1),Mw=Aw.forwardRef(function(e,t){let{render:n,className:r,style:i,anchor:a,positionMethod:o=`absolute`,side:s=`bottom`,align:c=`center`,sideOffset:l=0,alignOffset:u=0,collisionBoundary:d=`clipping-ancestors`,collisionPadding:f=5,arrowPadding:p=5,sticky:m=!1,disableAnchorTracking:h=!1,collisionAvoidance:g=To,..._}=e,{store:v}=ZC(),y=vw(),b=Vo(),x=v.useState(`floatingRootContext`),S=v.useState(`mounted`),C=v.useState(`open`),w=v.useState(`openChangeReason`),T=v.useState(`activeTriggerElement`),E=v.useState(`modal`),D=v.useState(`openMethod`),O=v.useState(`positionerElement`),k=v.useState(`instantType`),A=v.useState(`transitionStatus`),j=v.useState(`hasViewport`),M=Aw.useRef(null),N=Wl(O,!1,!1),P=Mf({anchor:a,floatingRootContext:x,positionMethod:o,mounted:S,side:s,sideOffset:l,align:c,alignOffset:u,arrowPadding:p,collisionBoundary:d,collisionPadding:f,sticky:m,disableAnchorTracking:h,keepMounted:y,nodeId:b,collisionAvoidance:g,adaptiveOrigin:j?Of:void 0}),F=x.useState(`domReferenceElement`);H(()=>{let e=F,t=M.current;if(e&&(M.current=e),t&&e&&e!==t){v.set(`instantType`,void 0);let e=new AbortController;return N(()=>{v.set(`instantType`,`trigger-change`)},e.signal),()=>{e.abort()}}},[F,N,v]),ub(C&&E===!0&&w!==`trigger-hover`,D===`touch`,O,T);let I=Aw.useCallback(e=>{v.set(`positionerElement`,e)},[v]),L=Rf(e,{open:C,side:P.side,align:P.align,anchorHidden:P.anchorHidden,instant:k},{styles:P.positionerStyles,transitionStatus:A,props:_,refs:[t,I],hidden:!S,inert:!C});return(0,jw.jsxs)(Ow.Provider,{value:P,children:[S&&E===!0&&w!==`trigger-hover`&&(0,jw.jsx)(Zy,{ref:v.context.internalBackdropRef,inert:$f(!C),cutout:T}),(0,jw.jsx)(Ho,{id:b,children:L})]})})}));function Pw(){let[e,t]=Iw.useState(0),n=q(()=>(t(e=>e+1),()=>{t(e=>Math.max(0,e-1))}));return{context:Iw.useMemo(()=>({register:n}),[n]),hasClosePart:e>0}}function Fw(e){let{value:t,children:n}=e;return(0,Lw.jsx)(Rw.Provider,{value:t,children:n})}var Iw,Lw,Rw,zw=e((()=>{Iw=t(l(),1),Qr(),Lw=t(c(),1),Rw=Iw.createContext(void 0)})),Bw,Vw,Hw,Uw,Ww=e((()=>{Bw=t(l(),1),_n(),gd(),ew(),kw(),Ld(),Ul(),Yl(),X(),wr(),Oy(),ay(),Lf(),zw(),Tu(),Vw=t(c(),1),Hw={...Id,...Hl},Uw=Bw.forwardRef(function(e,t){let{render:n,className:r,style:i,initialFocus:a,finalFocus:o,...s}=e,{store:c}=ZC(),l=Ew(),u=ny(!0)!=null,{context:d,hasClosePart:f}=Pw(),p=c.useState(`open`),m=c.useState(`openMethod`),h=c.useState(`instantType`),g=c.useState(`transitionStatus`),_=c.useState(`popupProps`),v=c.useState(`titleElementId`),y=c.useState(`descriptionElementId`),b=c.useState(`modal`),x=c.useState(`mounted`),S=c.useState(`openChangeReason`),C=c.useState(`activeTriggerElement`),w=c.useState(`floatingRootContext`),T=w.useState(`floatingId`),E=c.useState(`disabled`),D=c.useState(`openOnHover`),O=c.useState(`closeDelay`),k=s.id??T;ql({open:p,ref:c.context.popupRef,onComplete(){p&&c.context.onOpenChangeComplete?.(!0)}}),Vu(w,{enabled:D&&!E,closeDelay:O});let A=a===void 0?Xl(c.context.popupRef):a,j=b!==!1&&f;c.useSyncedValue(`focusManagerModal`,j);let M=Bw.useCallback(e=>{c.set(`popupElement`,e)},[c]),N=Y(`div`,e,{state:{open:p,side:l.side,align:l.align,instant:h,transitionStatus:g},ref:[t,c.context.popupRef,M],props:[_,{id:k,role:`dialog`,...uu,"aria-labelledby":v,"aria-describedby":y,onKeyDown(e){u&&Cy.has(e.key)&&e.stopPropagation()}},If(g),s],stateAttributesMapping:Hw});return(0,Vw.jsx)(as,{context:w,openInteractionType:m,modal:j,disabled:!x||S===`trigger-hover`,initialFocus:A,returnFocus:o,restoreFocus:`popup`,previousFocusableElement:Zt(C)?C:void 0,nextFocusableElement:c.context.triggerFocusTargetRef,beforeContentFocusGuardRef:c.context.beforeContentFocusGuardRef,children:(0,Vw.jsx)(Fw,{value:d,children:N})})})})),Gw,Kw,qw=e((()=>{Gw=t(l(),1),kw(),ew(),Ld(),X(),Kw=Gw.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{store:o}=ZC(),s=o.useState(`open`),{arrowRef:c,side:l,align:u,arrowUncentered:d,arrowStyles:f}=Ew();return Y(`div`,e,{state:{open:s,side:l,align:u,uncentered:d},ref:[t,c],props:[{style:f,"aria-hidden":!0},a],stateAttributesMapping:Id})})})),Jw,Yw,Xw,Zw=e((()=>{Jw=t(l(),1),ew(),Ld(),Ul(),X(),wr(),Yw={...Id,...Hl},Xw=Jw.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{store:o}=ZC(),s=o.useState(`open`),c=o.useState(`mounted`),l=o.useState(`transitionStatus`),u=o.useState(`openChangeReason`);return Y(`div`,e,{state:{open:s,transitionStatus:l},ref:[o.context.backdropRef,t],props:[{role:`presentation`,hidden:!c,style:{pointerEvents:u===`trigger-hover`?`none`:void 0,userSelect:`none`,WebkitUserSelect:`none`}},a],stateAttributesMapping:Yw})})})),Qw,$w=e((()=>{Qw=function(e){return e.popupWidth=`--popup-width`,e.popupHeight=`--popup-height`,e}({})})),eT,tT,nT,rT=e((()=>{eT=t(l(),1),ew(),kw(),X(),$w(),Cp(),tT={activationDirection:e=>e?{"data-activation-direction":e}:null},nT=eT.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,...o}=e,{store:s}=ZC(),{side:c}=Ew(),l=s.useState(`instantType`),{children:u,state:d}=hp({store:s,side:c,cssVars:Qw,children:a});return Y(`div`,e,{state:{activationDirection:d.activationDirection,transitioning:d.transitioning,instant:l},ref:t,props:[o,{children:u}],stateAttributesMapping:tT})})}));function iT(){return new aT}var aT,oT=e((()=>{rt(),Er(),wr(),ow(),aT=class{constructor(){this.store=new aw}open(e){let t=e?this.store.context.triggerElements.getById(e)??void 0:void 0;if(e&&!t)throw Error(nt(80,e));this.store.setOpen(!0,G(xr,void 0,t))}close(){this.store.setOpen(!1,G(xr,void 0,void 0))}get isOpen(){return this.store.select(`open`)}}})),sT=e((()=>{fw(),_w(),Tw(),Nw(),Ww(),qw(),Zw(),ew(),X(),zd(),Og(),Er(),wr(),zw(),rT(),oT()})),cT=e((()=>{sT()})),lT,uT,dT,fT,pT,mT,hT,gT,_T,vT=e((()=>{_e(),Xp(),lm(),Q_(),KC(),JC(),XC(),lT=t(l(),1),uT=t(c(),1),y(),ze(),zp(),cT(),dT=cw,fT=({children:e,className:t,nativeButton:n,ref:r,...i})=>{let{isNativeButtonTriggerElement:a,resolvedNativeButton:o}=me({children:e,nativeButton:n});return(0,lT.isValidElement)(e)?(0,uT.jsx)(gw,{...i,nativeButton:o,render:(n,i)=>{let o=(()=>{if(a)return n;let{type:e,ref:t,...r}=n;return r})(),s=Ce(e.props,o),c=typeof s.className==`function`?s.className(i):s.className,l=typeof t==`function`?t(i):t;return(0,lT.cloneElement)(e,{...s,className:g(c,l),ref:Rp([e.ref,n.ref,r])})}}):(0,uT.jsx)(gw,{...i,className:t,nativeButton:o,ref:r,children:e})},fT.displayName=`PopoverTriggerElement`,pT=({container:e,root:t,children:n,...r})=>{let i=qC(t),a=e??i;return a?(0,uT.jsx)(ww,{container:a,...r,children:n}):null},pT.displayName=`PopoverPortal`,mT=({children:e,className:t,hoverTrigger:n,placement:r,align:i,side:a,sideOffset:o,style:s,...c})=>{let l=r?cm[r]:void 0,[u,d]=(0,lT.useState)(null),{zIndex:f,ref:p}=X_(`floating`,typeof s!=`function`&&s?.zIndex!=null&&typeof s.zIndex==`number`?s.zIndex:void 0),m=Ip([d,p]),h=typeof s==`function`?e=>({zIndex:f,...s(e)}):{zIndex:f,...s};return(0,uT.jsx)(Mw,{align:i??l?.align??`center`,"data-hover-trigger":n||void 0,"data-placement":r,ref:m,side:a??l?.side??`bottom`,sideOffset:o??6,style:h,className:e=>g(YC.positioner,typeof t==`function`?t(e):t),...c,children:(0,uT.jsx)(Yp,{value:u,children:e})})},mT.displayName=`PopoverPositioner`,hT=({className:e,...t})=>(0,uT.jsx)(Uw,{className:t=>g(YC.popup,typeof e==`function`?e(t):e),...t}),hT.displayName=`PopoverPopup`,gT=({className:e,children:t,...n})=>(0,uT.jsx)(Kw,{className:t=>g(YC.arrow,typeof e==`function`?e(t):e),...n,children:t??GC}),gT.displayName=`PopoverArrow`,_T=({className:e,...t})=>(0,uT.jsx)(nT,{className:t=>g(YC.viewport,typeof e==`function`?e(t):e),...t}),_T.displayName=`PopoverViewport`})),yT,bT,xT,ST,CT,wT,TT=e((()=>{yT=t(l(),1),bT=t(c(),1),xT=()=>void 0,ST=(0,yT.createContext)({close:xT}),CT=(0,yT.memo)(({children:e,value:t})=>(0,bT.jsx)(ST,{value:t,children:e})),wT=()=>(0,yT.use)(ST)})),ET,DT,OT,kT=e((()=>{ET=t(l(),1),DT=(0,ET.createContext)(null),OT=(0,ET.createContext)(null)}));function AT(e,t,n){return!e&&t&&n===`trigger-press`}var jT,MT=e((()=>{jT=`data-hover-only-trigger`})),NT,PT,FT=e((()=>{kT(),NT=t(l(),1),PT=e=>{let t=(0,NT.useContext)(OT),{arrow:n,trigger:r,placement:i,className:a,classNames:o,styles:s,onOpenChange:c,content:l,closeDelay:u,disabled:d,getPopupContainer:f,mouseEnterDelay:p,mouseLeaveDelay:m,nativeButton:h,openDelay:g,zIndex:_,positionerProps:v,triggerProps:y,popupProps:b,backdropProps:x}=e,S=(0,NT.useMemo)(()=>{if(!(!t?.className&&!a))return[t?.className,a].filter(Boolean).join(` `)},[a,t?.className]),C=(0,NT.useMemo)(()=>{if(!(!t?.classNames&&!o))return{...t?.classNames,...o}},[o,t?.classNames]),w=(0,NT.useMemo)(()=>{if(!(!t?.styles&&!s))return{...t?.styles,...s}},[t?.styles,s]),T=(0,NT.useMemo)(()=>{if(!(!t?.onOpenChange&&!c))return e=>{t?.onOpenChange?.(e),c?.(e)}},[c,t?.onOpenChange]);return(0,NT.useMemo)(()=>({arrow:n??t?.arrow??!1,backdropProps:x??t?.backdropProps,className:S,classNames:C,closeDelay:u??t?.closeDelay,content:l,disabled:d??t?.disabled,getPopupContainer:f??t?.getPopupContainer,mouseEnterDelay:p??t?.mouseEnterDelay,mouseLeaveDelay:m??t?.mouseLeaveDelay,nativeButton:h??t?.nativeButton,onOpenChange:T,openDelay:g??t?.openDelay,placement:i??t?.placement??`top`,popupProps:b??t?.popupProps,positionerProps:v??t?.positionerProps,styles:w,trigger:r??t?.trigger??`hover`,triggerProps:y??t?.triggerProps,zIndex:_??t?.zIndex}),[n,x,u,l,d,f,S,C,T,w,p,m,h,g,i,b,v,t?.arrow,t?.backdropProps,t?.closeDelay,t?.disabled,t?.getPopupContainer,t?.mouseEnterDelay,t?.mouseLeaveDelay,t?.nativeButton,t?.openDelay,t?.placement,t?.popupProps,t?.positionerProps,t?.trigger,t?.triggerProps,t?.zIndex,r,y,_])}})),IT,LT,RT,zT=e((()=>{_e(),eS(),kT(),MT(),FT(),IT=t(l(),1),LT=t(c(),1),y(),ze(),zp(),cT(),RT=({children:e,ref:t,...n})=>{let r=(0,IT.use)(DT),i=PT(n),{openOnClick:a,openOnHover:o}=(0,IT.useMemo)(()=>$x(i.trigger??`hover`),[i.trigger]),s=i.openDelay??(i.mouseEnterDelay??.1)*1e3,c=i.closeDelay??(i.mouseLeaveDelay??.1)*1e3,l=!!i.disabled,{isNativeButtonTriggerElement:u,resolvedNativeButton:d}=me({children:e,nativeButton:i.nativeButton});if(!i.content)return e;let f={[jT]:a?void 0:``,closeDelay:c,delay:s,disabled:l,openOnHover:o&&!l,...i.triggerProps,payload:i},p=i.classNames?.trigger;return(0,IT.isValidElement)(e)?(0,LT.jsx)(gw,{handle:r??void 0,...f,nativeButton:d,render:n=>{let r=(()=>{if(u)return n;let{type:e,ref:t,...r}=n;return r})(),i=Ce(e.props,r);return(0,IT.cloneElement)(e,{...i,className:g(i.className,p),ref:Rp([e.ref,n.ref,t])})}}):(0,LT.jsx)(gw,{handle:r??void 0,...f,className:p,nativeButton:d,ref:t,children:e})},RT.displayName=`PopoverInGroup`})),BT,VT,HT,UT=e((()=>{_e(),$p(),lm(),eS(),KC(),JC(),vT(),TT(),MT(),BT=t(l(),1),VT=t(c(),1),cT(),HT=(0,BT.memo)(({children:e,content:t,arrow:n=!1,trigger:r=`hover`,placement:i=`top`,styles:a,classNames:o,className:s,open:c,onOpenChange:l,defaultOpen:u=!1,mouseEnterDelay:d=.1,mouseLeaveDelay:f=.1,openDelay:p,closeDelay:m,getPopupContainer:h,disabled:g=!1,zIndex:_,nativeButton:v,ref:y,positionerProps:b,triggerProps:x,popupProps:S,backdropProps:C,portalProps:w})=>{let T=Qp(),E=(0,BT.useMemo)(()=>iT(),[]),[D,O]=(0,BT.useState)(!!u),k=(0,BT.useCallback)(()=>{E.close()},[E]),A=(0,BT.useMemo)(()=>({close:k}),[k]),j=g?!1:c??D,{openOnClick:M,openOnHover:N}=(0,BT.useMemo)(()=>$x(r),[r]),P=(0,BT.useCallback)((e,t)=>{if(!(g&&e)){if(AT(M,e,t?.reason)){t?.cancel?.();return}l?.(e),c===void 0&&O(e)}},[l,c,g,M]),F=p??d*1e3,I=m??f*1e3,L=cm[i]??cm.top,R=n?10:6,ee=qC(),{resolvedNativeButton:z}=me({children:e,nativeButton:v}),te=(0,BT.useMemo)(()=>({arrow:o?.arrow,popup:s,positioner:o?.root,trigger:o?.trigger,viewport:o?.content}),[s,o?.arrow,o?.content,o?.root,o?.trigger]),ne=(0,BT.useMemo)(()=>(0,VT.jsx)(fT,{handle:E,closeDelay:I,delay:F,disabled:g,openOnHover:N&&!g,...x,className:te.trigger,nativeButton:z,ref:y,children:e}),[e,g,N,E,y,te.trigger,z,F,I,x]),re=(0,BT.useMemo)(()=>{},[h,T]),B=(0,BT.useMemo)(()=>({arrow:a?.arrow,positioner:{...a?.root,..._===void 0?{}:{zIndex:_}},viewport:a?.content}),[a?.arrow,a?.content,a?.root,_]),ie=(0,BT.useMemo)(()=>(0,VT.jsx)(mT,{align:L.align,className:te.positioner,hoverTrigger:N,placement:i,side:L.side,sideOffset:R,style:B.positioner,...b,children:(0,VT.jsxs)(hT,{className:te.popup,...S,children:[n&&(0,VT.jsx)(gT,{className:te.arrow,style:B.arrow,children:GC}),(0,VT.jsx)(_T,{className:te.viewport,style:B.viewport,children:(0,VT.jsx)(CT,{value:A,children:t})})]})}),[n,t,A,N,i,L.align,L.side,S,b,te,R,B]);if(!t)return e;let V=re??ee;return(0,VT.jsxs)(dT,{defaultOpen:u,handle:E,open:j,onOpenChange:P,children:[ne,C&&(0,VT.jsx)(Xw,{...C}),V?(0,VT.jsx)(pT,{container:V,...w,children:ie}):null]})}),HT.displayName=`PopoverStandalone`})),WT,GT,KT,qT=e((()=>{kT(),zT(),UT(),WT=t(l(),1),GT=t(c(),1),KT=e=>(0,WT.use)(DT)&&e.open===void 0&&e.defaultOpen===void 0&&!e.standalone?(0,GT.jsx)(RT,{...e}):(0,GT.jsx)(HT,{...e}),KT.displayName=`Popover`})),JT,YT,XT,ZT=e((()=>{JT=t(l(),1),YT=(0,JT.createContext)({position:`bottom-right`,swipeDirection:[`down`,`right`]}),XT=()=>(0,JT.useContext)(YT)})),QT,$T,eE,tE,nE,rE,iE=e((()=>{QT=[],$T=new Set,eE=()=>{for(let e of $T)e()},tE=e=>(QT.push(e),eE(),()=>{let t=QT.indexOf(e);t!==-1&&QT.splice(t,1),eE()}),nE=e=>QT[0]===e,rE=e=>($T.add(e),()=>{$T.delete(e)})})),aE,oE,sE,cE,lE,uE,dE,fE=e((()=>{aE=20,oE=5e3,sE=!1,cE=[],lE=e=>{if(sE){e();return}cE.length>=aE&&cE.shift(),cE.push({queuedAt:Date.now(),run:e})},uE=()=>{sE=!0;let e=cE;cE=[];let t=Date.now();for(let n of e)t-n.queuedAt<=oE&&n.run()},dE=()=>{sE=!1}})),pE,mE,hE,gE,_E=e((()=>{y(),Bm(),pE=d(({css:e,cssVar:t})=>({action:e`
    cursor: pointer;

    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    height: 28px;
    padding-inline: 12px;
    border: none;
    border-radius: ${t.borderRadiusSM};

    font-size: 12px;
    font-weight: 500;
    line-height: 1;

    transition:
      background 0.2s,
      color 0.2s;

    &:focus-visible {
      outline: 2px solid ${t.colorPrimaryBorder};
      outline-offset: 1px;
    }
  `,actionDanger:e`
    color: ${t.colorBgLayout};
    background: ${t.colorError};

    &:hover {
      background: ${t.colorErrorHover};
    }

    &:active {
      background: ${t.colorErrorActive};
    }

    &:focus-visible {
      outline-color: ${t.colorErrorBorder};
    }
  `,actionGhost:e`
    border: 1px solid ${t.colorBorder};
    color: ${t.colorText};
    background: transparent;

    &:hover {
      border-color: ${t.colorPrimary};
      color: ${t.colorPrimary};
    }

    &:active {
      border-color: ${t.colorPrimaryActive};
      color: ${t.colorPrimaryActive};
    }
  `,actionPrimary:e`
    color: ${t.colorBgLayout};
    background: ${t.colorPrimary};

    &:hover {
      background: ${t.colorPrimaryHover};
    }

    &:active {
      background: ${t.colorPrimaryActive};
    }
  `,actionSecondary:e`
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:active {
      background: ${t.colorFill};
    }
  `,actionText:e`
    color: ${t.colorPrimary};
    background: transparent;

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:active {
      background: ${t.colorFillSecondary};
    }
  `,actions:e`
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    gap: 8px;
    align-items: center;
    align-self: flex-end;
    justify-content: flex-end;

    margin-block-start: 8px;
  `,close:e`
    cursor: pointer;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    margin-inline-start: auto;
    padding: 0;
    border: none;
    border-radius: ${t.borderRadiusSM};

    color: ${t.colorTextSecondary};

    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFillSecondary};
    }
  `,content:e`
    overflow: hidden;
    transition: opacity 0.2s;

    &[data-behind] {
      pointer-events: none;
      opacity: 0;
    }

    &[data-expanded] {
      pointer-events: auto;
      opacity: 1;
    }
  `,contentArea:e`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
  `,description:e`
    margin: 0;
    font-size: 13px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
  `,descriptionStandalone:e`
    color: ${t.colorText};
  `,icon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  `,root:e`
    --toast-gap: 12px;
    --toast-peek: 12px;
    --toast-scale: calc(1 - var(--toast-index) * 0.05);
    --toast-shrink: calc(1 - var(--toast-scale));
    --toast-collapsed-height: var(--toast-frontmost-height, var(--toast-height));

    cursor: default;
    user-select: none;

    position: absolute;
    z-index: calc(1000 - var(--toast-index));
    inset-inline: 0;

    box-sizing: border-box;
    width: 100%;
    height: var(--toast-collapsed-height);
    padding-block: 12px;
    padding-inline: 16px;
    border-radius: var(--toast-border-radius, ${t.borderRadiusLG});

    color: ${t.colorText};

    background: ${t.colorBgElevated};
    background-clip: padding-box;
    box-shadow:
      0 0 0 1px ${t.colorBorderSecondary},
      0 4px 12px rgb(0 0 0 / 10%),
      0 16px 32px -8px rgb(0 0 0 / 12%);

    transition:
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.4s,
      height 0.15s;

    /* Fill gap between stacked toasts to prevent hover flicker */
    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      height: calc(var(--toast-gap) + var(--toast-peek) + 8px);
    }

    &[data-limited] {
      opacity: 0;
    }

    &[data-swiping] {
      transition: none;
    }
  `,rootBottom:e`
    inset-block: auto 0;
    transform-origin: bottom center;
    transform: translateX(var(--toast-swipe-movement-x))
      translateY(
        calc(
          var(--toast-swipe-movement-y) - (var(--toast-index) * var(--toast-peek)) -
            (var(--toast-shrink) * var(--toast-collapsed-height))
        )
      )
      scale(var(--toast-scale));

    &::after {
      inset-block-start: 100%;
    }

    &[data-expanded] {
      transform: translateX(var(--toast-swipe-movement-x))
        translateY(
          calc(
            var(--toast-swipe-movement-y) + var(--toast-offset-y) * -1 + var(--toast-index) *
              var(--toast-gap) * -1
          )
        )
        scale(1);
      height: var(--toast-height);
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateY(150%);
      opacity: 0;
    }
  `,rootTop:e`
    inset-block: 0 auto;
    transform-origin: top center;
    transform: translateX(var(--toast-swipe-movement-x))
      translateY(
        calc(
          var(--toast-swipe-movement-y) + (var(--toast-index) * var(--toast-peek)) +
            (var(--toast-shrink) * var(--toast-collapsed-height))
        )
      )
      scale(var(--toast-scale));

    &::after {
      inset-block-end: 100%;
    }

    &[data-expanded] {
      transform: translateX(var(--toast-swipe-movement-x))
        translateY(
          calc(
            var(--toast-swipe-movement-y) + var(--toast-offset-y) + var(--toast-index) *
              var(--toast-gap)
          )
        )
        scale(1);
      height: var(--toast-height);
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translateY(-150%);
      opacity: 0;
    }
  `,title:e`
    margin: 0;

    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    color: ${t.colorText};
  `,titleRow:e`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `,toastBody:e`
    display: flex;
    gap: 12px;
    align-items: flex-start;
  `,toastBodyCenter:e`
    display: flex;
    gap: 12px;
    align-items: flex-start;
  `,viewport:e`
    position: fixed;
    z-index: 100000;

    width: 360px;
    max-width: calc(100vw - var(--toast-viewport-offset-x, 16px) * 2);

    outline: 0;

    @media (width <= 480px) {
      width: calc(100vw - var(--toast-viewport-offset-x, 16px) * 2);
    }
  `,viewportBottom:e`
    inset-block-end: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,viewportBottomLeft:e`
    inset-block-end: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: var(--toast-viewport-offset-x, 16px);
  `,viewportBottomRight:e`
    inset-block-end: var(--toast-viewport-offset-y, 16px);
    inset-inline-end: var(--toast-viewport-offset-x, 16px);
  `,viewportTop:e`
    inset-block-start: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: 50%;
    transform: translateX(-50%);
  `,viewportTopLeft:e`
    inset-block-start: var(--toast-viewport-offset-y, 16px);
    inset-inline-start: var(--toast-viewport-offset-x, 16px);
  `,viewportTopRight:e`
    inset-block-start: var(--toast-viewport-offset-y, 16px);
    inset-inline-end: var(--toast-viewport-offset-x, 16px);
  `})),mE=zm(pE.viewport,{defaultVariants:{position:`bottom-right`},variants:{position:{bottom:pE.viewportBottom,"bottom-left":pE.viewportBottomLeft,"bottom-right":pE.viewportBottomRight,top:pE.viewportTop,"top-left":pE.viewportTopLeft,"top-right":pE.viewportTopRight}}}),hE=zm(pE.root,{defaultVariants:{position:`bottom-right`},variants:{position:{bottom:pE.rootBottom,"bottom-left":pE.rootBottom,"bottom-right":pE.rootBottom,top:pE.rootTop,"top-left":pE.rootTop,"top-right":pE.rootTop}}}),gE=zm(pE.action,{defaultVariants:{variant:`primary`},variants:{variant:{danger:pE.actionDanger,ghost:pE.actionGhost,primary:pE.actionPrimary,secondary:pE.actionSecondary,text:pE.actionText}}})}));function vE(){let e=yE.useContext(bE);if(!e)throw Error(nt(73));return e}var yE,bE,xE=e((()=>{rt(),yE=t(l(),1),bE=yE.createContext(void 0)}));function SE(e){return CE+=1,`${e}-${Math.random().toString(36).slice(2,6)}-${CE}`}var CE,wE=e((()=>{CE=0}));function TE(e,t){if(typeof e==`string`)return{description:e};if(typeof e==`function`){let n=e(t);return typeof n==`string`?{description:n}:n}return e}var EE=e((()=>{})),DE=e((()=>{kl()}));function OE(e){let t=new Map,n=0,r=0;return e.forEach((e,i)=>{let a=e.transitionStatus===`ending`;t.set(e.id,{value:e,domIndex:i,visibleIndex:a?-1:n,offsetY:r}),r+=e.height||0,a||(n+=1)}),t}function kE(e,t){let n=0;return e.map(e=>{if(e.transitionStatus===`ending`)return e;let r=n>=t;return n+=1,e.limited===r?e:{...e,limited:r}})}var AE,jE,ME,NE=e((()=>{Ol(),wE(),ai(),ht(),EE(),kl(),DE(),AE=e=>e.toastMetadata,jE={toasts:Z(e=>e.toasts),isEmpty:Z(e=>e.toasts.length===0),toast:Z(AE,(e,t)=>e.get(t)?.value),toastIndex:Z(AE,(e,t)=>e.get(t)?.domIndex??-1),toastOffsetY:Z(AE,(e,t)=>e.get(t)?.offsetY??0),toastVisibleIndex:Z(AE,(e,t)=>e.get(t)?.visibleIndex??-1),hovering:Z(e=>e.hovering),focused:Z(e=>e.focused),expanded:Z(e=>e.hovering||e.focused),expandedOrOutOfFocus:Z(e=>e.hovering||e.focused||!e.isWindowFocused),prevFocusElement:Z(e=>e.prevFocusElement)},ME=class extends Sl{timers=new Map;areTimersPaused=!1;constructor(e){super({...e,toastMetadata:OE(e.toasts)},{},jE)}setFocused(e){this.set(`focused`,e)}setHovering(e){this.set(`hovering`,e)}setIsWindowFocused(e){this.set(`isWindowFocused`,e)}setPrevFocusElement(e){this.set(`prevFocusElement`,e)}setViewport=e=>{this.set(`viewport`,e)};syncProviderProps(e){let t=this.state.limit!==e.limit;if(this.state.timeout===e.timeout&&!t)return;let n={timeout:e.timeout,limit:e.limit};if(t){let t=kE(this.state.toasts,e.limit);n.toasts=t,n.toastMetadata=OE(t)}this.update(n)}disposeEffect=()=>()=>{this.timers.forEach(e=>{e.timeout?.clear()}),this.timers.clear()};removeToast(e,t={}){let n=jE.toastIndex(this.state,e);if(n===-1)return;let r=this.state.toasts[n];t.skipOnRemove||r?.onRemove?.();let i=[...this.state.toasts];i.splice(n,1),this.setToasts(i)}addToast=e=>{let{timeout:t,limit:n}=this.state,r=e.id||SE(`toast`);if(e.id){let t=jE.toast(this.state,e.id);if(t)if(t.transitionStatus===`ending`)this.removeToast(e.id,{skipOnRemove:!0});else{let{id:t,transitionStatus:n,...r}=e;return this.updateToastInternal(e.id,r,{resetTimer:!0,markUpdated:!0}),e.id}}let i={...e,id:r,updateKey:0,transitionStatus:`starting`},a=[i,...this.state.toasts];this.setToasts(kE(a,n));let o=i.timeout??t;return i.type!==`loading`&&o>0&&this.scheduleTimer(r,o,()=>this.closeToast(r)),jE.expandedOrOutOfFocus(this.state)&&this.pauseTimers(),r};updateToast=(e,t)=>{this.updateToastInternal(e,t,{markUpdated:!0})};updateToastInternal=(e,t,n={})=>{let{timeout:r,toasts:i}=this.state,a=jE.toast(this.state,e)??null;if(!a||a.transitionStatus===`ending`)return;let o={...a,...t,...n.markUpdated&&{updateKey:(a.updateKey??0)+1}};this.setToasts(i.map(t=>t.id===e?o:t));let s=o.timeout??r,c=a?.timeout??r,l=Object.hasOwn(t,`timeout`),u=o.transitionStatus!==`ending`&&o.type!==`loading`&&s>0,d=this.timers.has(e),f=c!==s,p=a?.type===`loading`;if(!u&&d){this.clearTimer(e);return}u&&(!d||f||l||p||n.resetTimer)&&(this.clearTimer(e),this.scheduleTimer(e,s,()=>this.closeToast(e)),jE.expandedOrOutOfFocus(this.state)&&this.pauseTimers())};closeToast=e=>{let t=e===void 0,{limit:n,toasts:r}=this.state,i;if(t)i=r,this.clearTimers();else{let t=jE.toast(this.state,e);if(!t)return;i=[t],this.clearTimer(e)}let a=kE(r.map(n=>t||n.id===e?{...n,transitionStatus:`ending`,height:0}:n),n),o={toasts:a,toastMetadata:OE(a)};a.some(e=>e.transitionStatus!==`ending`)||(o.hovering=!1,o.focused=!1),this.update(o),i.forEach(e=>{e.transitionStatus!==`ending`&&e.onClose?.()}),this.handleFocusManagement(e)};promiseToast=(e,t)=>{let n=TE(t.loading),r=this.addToast({...n,type:`loading`}),i=e.then(e=>{let n=TE(t.success,e);return this.updateToast(r,{...n,type:`success`,timeout:n.timeout}),e}).catch(e=>{let n=TE(t.error,e);return this.updateToast(r,{...n,type:`error`,timeout:n.timeout}),Promise.reject(e)});return{}.hasOwnProperty.call(t,`setPromise`)&&t.setPromise(i),i};pauseTimers(){this.areTimersPaused||(this.areTimersPaused=!0,this.timers.forEach(e=>{if(e.timeout){e.timeout.clear();let t=Date.now()-e.start,n=e.delay-t;e.remaining=n>0?n:0}}))}resumeTimers(){this.areTimersPaused&&(this.areTimersPaused=!1,this.timers.forEach((e,t)=>{e.remaining=e.remaining>0?e.remaining:e.delay,e.timeout??=mt.create(),e.timeout.start(e.remaining,()=>{this.handleTimerFired(t),e.callback()}),e.start=Date.now()}))}restoreFocusToPrevElement(){this.state.prevFocusElement?.focus({preventScroll:!0})}handleDocumentPointerDown=e=>{if(e.pointerType!==`touch`)return;let t=En(e);W(this.state.viewport,t)||(this.resumeTimers(),this.update({hovering:!1,focused:!1}))};scheduleTimer(e,t,n){let r=Date.now(),i=!jE.expandedOrOutOfFocus(this.state),a=i?mt.create():void 0;a?.start(t,()=>{this.handleTimerFired(e),n()}),this.timers.set(e,{timeout:a,start:i?r:0,delay:t,remaining:t,callback:n})}clearTimers(){this.timers.forEach(e=>{e.timeout?.clear()}),this.timers.clear(),this.areTimersPaused=!1}clearTimer(e){this.timers.get(e)?.timeout?.clear(),this.timers.delete(e),this.resetPausedStateIfNoTimersRemain()}handleTimerFired(e){this.timers.delete(e),this.resetPausedStateIfNoTimersRemain()}resetPausedStateIfNoTimersRemain(){this.timers.size===0&&(this.areTimersPaused=!1)}setToasts(e){let t={toasts:e,toastMetadata:OE(e)};e.length===0&&(t.hovering=!1,t.focused=!1),this.update(t)}handleFocusManagement(e){let t=Tn(J(this.state.viewport));if(!this.state.viewport||!W(this.state.viewport,t)||!Pn(t))return;if(e===void 0){this.restoreFocusToPrevElement();return}let n=jE.toasts(this.state),r=jE.toastIndex(this.state,e),i=null,a=r+1;for(;a<n.length;){if(n[a].transitionStatus!==`ending`){i=n[a];break}a+=1}if(!i)for(a=r-1;a>=0;){if(n[a].transitionStatus!==`ending`){i=n[a];break}--a}i?i.ref?.current?.focus():this.restoreFocusToPrevElement()}}})),PE,FE,IE,LE=e((()=>{PE=t(l(),1),dt(),Ue(),U(),xE(),NE(),FE=t(c(),1),IE=function(e){let{children:t,timeout:n=5e3,limit:r=3,toastManager:i}=e,a=Be(()=>new ME({timeout:n,limit:r,viewport:null,toasts:[],hovering:!1,focused:!1,isWindowFocused:!0,prevFocusElement:null})).current;return ct(a.disposeEffect),PE.useEffect(function(){if(i)return i[` subscribe`](({action:e,options:t})=>{let n=t.id;e===`promise`&&t.promise?a.promiseToast(t.promise,t):e===`update`&&n?a.updateToast(n,t):e===`close`?a.closeToast(n):a.addToast(t)})},[a,i]),H(()=>{a.syncProviderProps({timeout:n,limit:r})},[a,n,r]),(0,FE.jsx)(bE.Provider,{value:a,children:t})}})),RE,zE=e((()=>{RE=function(e){return e.frontmostHeight=`--toast-frontmost-height`,e}({})})),BE,VE,HE,UE=e((()=>{BE=t(l(),1),Mr(),Pr(),ai(),li(),ht(),kl(),pi(),xE(),X(),DE(),zE(),VE=t(c(),1),HE=BE.forwardRef(function(e,t){let{render:n,className:r,style:i,children:a,...o}=e,s=vE(),c=ft(),l=BE.useRef(!1),u=BE.useRef(!1),d=BE.useRef(!1),f=s.useState(`isEmpty`),p=s.useState(`toasts`),m=s.useState(`focused`),h=s.useState(`expanded`),g=s.useState(`prevFocusElement`),_=p[0]?.height??0,v=BE.useMemo(()=>p.some(e=>e.transitionStatus===`ending`),[p]),y=BE.useMemo(()=>p.filter(e=>e.priority===`high`),[p]);BE.useEffect(()=>{let e=s.state.viewport;if(!e)return;function t(t){f||t.key===`F6`&&En(t)!==e&&(t.preventDefault(),s.setPrevFocusElement(Tn(J(e))),e?.focus({preventScroll:!0}),s.pauseTimers(),s.setFocused(!0))}return K(qt(e),`keydown`,t)},[s,f]),BE.useEffect(()=>{let e=s.state.viewport;if(!e||f)return;let t=qt(e);function n(e){En(e)===t&&(s.setIsWindowFocused(!1),s.pauseTimers())}function r(n){if(n.relatedTarget)return;let r=En(n),i=Tn(J(e));(r===t||!W(e,r)||!Pn(i))&&s.resumeTimers(),c.start(0,()=>s.setIsWindowFocused(!0))}return Nr(K(t,`blur`,n,!0),K(t,`focus`,r,!0))},[s,c,f]),BE.useEffect(()=>{let e=s.state.viewport;if(!(!e||f))return K(J(e),`pointerdown`,s.handleDocumentPointerDown,!0)},[f,s]);function b(e){let t=s.state.viewport;if(t)if(l.current=!0,e.relatedTarget===t){let e=p.find(e=>e.transitionStatus!==`ending`&&!e.limited);e?e.ref?.current?.focus():s.restoreFocusToPrevElement()}else s.restoreFocusToPrevElement()}function x(e){e.key===`Tab`&&e.shiftKey&&En(e.nativeEvent)===s.state.viewport&&(e.preventDefault(),s.restoreFocusToPrevElement(),s.resumeTimers())}function S(){s.state.toasts.some(e=>e.transitionStatus===`ending`)||d.current||!u.current||(s.state.isWindowFocused&&s.resumeTimers(),s.setHovering(!1),u.current=!1)}BE.useEffect(S,[v,s]);function C(){s.pauseTimers(),s.setHovering(!0),u.current=!1}function w(){s.state.isWindowFocused&&s.resumeTimers()}function T(){s.state.toasts.some(e=>e.transitionStatus===`ending`)||d.current?u.current=!0:(w(),s.setHovering(!1))}function E(e){e.pointerType===`touch`&&(d.current=!0)}function D(e){e.pointerType===`touch`&&(d.current=!1,S())}function O(){if(l.current){l.current=!1;return}m||Pn(Tn(J(s.state.viewport)))&&(s.setFocused(!0),s.pauseTimers())}function k(e){!m||W(s.state.viewport,e.relatedTarget)||(s.setFocused(!1),w())}let A={tabIndex:-1,role:`region`,"aria-live":`polite`,"aria-atomic":!1,"aria-relevant":`additions text`,"aria-label":`Notifications`,onMouseEnter:C,onMouseMove:C,onMouseLeave:T,onFocus:O,onBlur:k,onKeyDown:x,onClick:O,onPointerDown:E,onPointerUp:D,onPointerCancel:D},j={expanded:h},M=Y(`div`,e,{ref:[t,s.setViewport],state:j,props:[A,{style:{[RE.frontmostHeight]:_?`${_}px`:void 0}},o,{children:(0,VE.jsxs)(BE.Fragment,{children:[!f&&g&&(0,VE.jsx)(fi,{onFocus:b}),a,!f&&g&&(0,VE.jsx)(fi,{onFocus:b})]})}]});return(0,VE.jsxs)(BE.Fragment,{children:[!f&&g&&(0,VE.jsx)(fi,{onFocus:b}),M,!m&&y.length>0&&(0,VE.jsx)(`div`,{style:si,children:y.map(e=>(0,VE.jsxs)(`div`,{role:`alert`,"aria-atomic":!0,children:[(0,VE.jsx)(`div`,{children:e.title}),(0,VE.jsx)(`div`,{children:e.description})]},e.id))})]})})}));function WE(){let e=GE.useContext(KE);if(!e)throw Error(nt(66));return e}var GE,KE,qE=e((()=>{rt(),GE=t(l(),1),KE=GE.createContext(void 0)})),JE,YE=e((()=>{JE=function(e){return e.index=`--toast-index`,e.offsetY=`--toast-offset-y`,e.height=`--toast-height`,e.swipeMovementX=`--toast-swipe-movement-x`,e.swipeMovementY=`--toast-swipe-movement-y`,e}({})}));function XE(e,t=-(2**53-1),n=2**53-1){return Math.max(t,Math.min(e,n))}var ZE=e((()=>{}));function QE(e,t,n){switch(e){case`up`:return-n;case`down`:return n;case`left`:return-t;case`right`:return t;default:return 0}}function $E(e){let t=qt(e).getComputedStyle(e).transform,n=0,r=0,i=1;if(t&&t!==`none`){let e=t.match(/matrix(?:3d)?\(([^)]+)\)/);if(e){let t=e[1].split(`, `).map(parseFloat);t.length===6?(n=t[4],r=t[5],i=Math.sqrt(t[0]*t[0]+t[1]*t[1])):t.length===16&&(n=t[12],r=t[13],i=t[0])}}return{x:n,y:r,scale:i}}var eD=e((()=>{l(),ai()})),tD,nD,rD,iD,aD,oD,sD,cD,lD,uD,dD=e((()=>{tD=t(l(),1),nD=t(u(),1),Mr(),ai(),ep(),U(),Qr(),kl(),qE(),Ul(),xE(),X(),Yl(),YE(),Do(),eD(),rD=t(c(),1),iD={...Hl,swipeDirection(e){return e?{"data-swipe-direction":e}:null}},aD=40,oD=10,sD=.5,cD=1,lD=`${So},${Co}`,uD=tD.forwardRef(function(e,t){let{toast:n,render:r,className:i,swipeDirection:a=[`down`,`right`],style:o,...s}=e,c=n.positionerProps?.anchor!==void 0,l=[];c||(l=Array.isArray(a)?a:[a]);let u=l.length>0,d=vE(),[f,p]=tD.useState(void 0),[m,h]=tD.useState(!1),[g,_]=tD.useState(!1),[v,y]=tD.useState(!1),[b,x]=tD.useState({x:0,y:0}),[S,C]=tD.useState({x:0,y:0,scale:1}),[w,T]=tD.useState(),[E,D]=tD.useState(),[O,k]=tD.useState(null),A=tD.useRef(null),j=tD.useRef({x:0,y:0}),M=tD.useRef({x:0,y:0,scale:1}),N=tD.useRef(void 0),P=tD.useRef(0),F=tD.useRef(!1),I=tD.useRef({x:0,y:0}),L=tD.useRef(!1),R=tD.useRef({x:0,y:0}),ee=tD.useRef(null),z=tD.useRef(null),te=d.useState(`toastIndex`,n.id),ne=d.useState(`toastVisibleIndex`,n.id),re=d.useState(`toastOffsetY`,n.id),B=d.useState(`focused`),ie=d.useState(`expanded`);ql({open:n.transitionStatus!==`ending`,ref:A,onComplete(){n.transitionStatus===`ending`&&d.removeToast(n.id)}});let V=q((e=!1)=>{let t=A.current;if(!t)return;let r=t.style.height;t.style.height=`auto`;let i=t.offsetHeight;t.style.height=r;function a(){d.updateToastInternal(n.id,{ref:A,height:i,...n.transitionStatus===`starting`?{transitionStatus:void 0}:{}})}e?nD.flushSync(a):a()});H(V,[V]);function ae(e){R.current=e,x(e)}H(()=>()=>{z.current?.abort()},[]);function oe(e,t){let n=e,r=t;return!l.includes(`left`)&&!l.includes(`right`)?n=e>0?e**sD:-(Math.abs(e)**sD):(!l.includes(`right`)&&e>0&&(n=e**sD),!l.includes(`left`)&&e<0&&(n=-(Math.abs(e)**sD))),!l.includes(`up`)&&!l.includes(`down`)?r=t>0?t**sD:-(Math.abs(t)**sD):(!l.includes(`down`)&&t>0&&(r=t**sD),!l.includes(`up`)&&t<0&&(r=-(Math.abs(t)**sD))),{x:n,y:r}}let se=q(e=>{if(e.pointerId!==ee.current)return;ee.current=null,z.current?.abort(),z.current=null,h(!1),_(!1),k(null);let t=M.current;if(e.type===`pointercancel`||F.current){ae({x:t.x,y:t.y}),p(void 0);return}let r=!1,i=R.current,a=i.x-t.x,o=i.y-t.y,s;for(let e of l){switch(e){case`right`:a>aD&&(r=!0,s=`right`);break;case`left`:a<-40&&(r=!0,s=`left`);break;case`down`:o>aD&&(r=!0,s=`down`);break;case`up`:o<-40&&(r=!0,s=`up`);break;default:break}if(r)break}r?(p(s),y(!0),d.closeToast(n.id)):(ae({x:t.x,y:t.y}),p(void 0))});function ce(e){if(e.button!==0)return;e.pointerType===`touch`&&d.pauseTimers();let t=En(e.nativeEvent);if(t&&t.closest(`button,a,input,textarea,[role="button"],${lD}`))return;if(F.current=!1,N.current=void 0,P.current=0,ee.current=e.pointerId,j.current={x:e.clientX,y:e.clientY},I.current=j.current,A.current){let e=$E(A.current);M.current=e,C(e),ae({x:e.x,y:e.y})}d.setHovering(!0),h(!0),_(!1),k(null),L.current=!0;let n=A.current;if(n){z.current?.abort();let t=new AbortController;z.current=t;let r=J(n);r.addEventListener(`pointerup`,se,{signal:t.signal}),r.addEventListener(`pointercancel`,se,{signal:t.signal}),n.setPointerCapture?.(e.pointerId)}}function le(e){if(e.pointerId!==ee.current)return;e.preventDefault(),L.current&&=(j.current={x:e.clientX,y:e.clientY},!1);let{clientY:t,clientX:n,movementX:r,movementY:i}=e;(i<0&&t>I.current.y||i>0&&t<I.current.y)&&(I.current={x:I.current.x,y:t}),(r<0&&n>I.current.x||r>0&&n<I.current.x)&&(I.current={x:n,y:I.current.y});let a=n-j.current.x,o=t-j.current.y,s=t-I.current.y,c=n-I.current.x;if(!g&&Math.sqrt(a*a+o*o)>=cD&&(_(!0),O===null)){let e=l.includes(`left`)||l.includes(`right`),t=l.includes(`up`)||l.includes(`down`);e&&t&&k(Math.abs(a)>Math.abs(o)?`horizontal`:`vertical`)}let u;if(!N.current)O===`vertical`?o>0?u=`down`:o<0&&(u=`up`):O===`horizontal`?a>0?u=`right`:a<0&&(u=`left`):u=Math.abs(a)>=Math.abs(o)?a>0?`right`:`left`:o>0?`down`:`up`,u&&l.includes(u)&&(N.current=u,P.current=QE(u,a,o),p(u));else{let e=N.current,t=QE(e,c,s);t>aD?(F.current=!1,p(e)):!(l.includes(`left`)&&l.includes(`right`))&&!(l.includes(`up`)&&l.includes(`down`))&&P.current-t>=oD&&(F.current=!0)}let d=oe(a,o),f=M.current.x,m=M.current.y;O===`horizontal`?(l.includes(`left`)||l.includes(`right`))&&(f+=d.x):(O===`vertical`||(l.includes(`left`)||l.includes(`right`))&&(f+=d.x),(l.includes(`up`)||l.includes(`down`))&&(m+=d.y)),ae({x:f,y:m})}function ue(e){if(e.key===`Escape`){if(!A.current||!W(A.current,Tn(J(A.current))))return;d.closeToast(n.id)}}tD.useEffect(()=>{if(!u)return;let e=A.current;if(!e)return;function t(t){ee.current===null||!W(e,En(t))||t.preventDefault()}return K(e,`touchmove`,t,{passive:!1})},[u]);function de(){if(!m&&b.x===S.x&&b.y===S.y&&!v)return{[JE.swipeMovementX]:`0px`,[JE.swipeMovementY]:`0px`};let e=b.x-S.x,t=b.y-S.y;return{transition:m?`none`:void 0,transform:m?`translateX(${b.x}px) translateY(${b.y}px) scale(${S.scale})`:void 0,[JE.swipeMovementX]:`${e}px`,[JE.swipeMovementY]:`${t}px`}}let fe=n.priority===`high`,pe={role:fe?`alertdialog`:`dialog`,tabIndex:0,"aria-modal":!1,"aria-labelledby":w,"aria-describedby":E,"aria-hidden":fe&&!B?!0:void 0,onPointerDown:u?ce:void 0,onPointerMove:u?le:void 0,onPointerUp:u?se:void 0,onPointerCancel:u?se:void 0,onKeyDown:ue,inert:$f(n.limited),style:{...de(),[JE.index]:n.transitionStatus===`ending`?te:ne,[JE.offsetY]:`${re}px`,[JE.height]:n.height?`${n.height}px`:void 0}},me=tD.useMemo(()=>({rootRef:A,toast:n,titleId:w,setTitleId:T,descriptionId:E,setDescriptionId:D,swiping:m,swipeDirection:f,recalculateHeight:V,index:te,visibleIndex:ne,expanded:ie}),[n,w,E,m,f,V,te,ne,ie]),he={transitionStatus:n.transitionStatus,expanded:ie,limited:n.limited||!1,type:n.type,swiping:me.swiping,swipeDirection:me.swipeDirection},ge=Y(`div`,e,{ref:[t,me.rootRef],state:he,stateAttributesMapping:iD,props:[pe,s]});return(0,rD.jsx)(KE.Provider,{value:me,children:ge})})})),fD,pD,mD=e((()=>{fD=t(l(),1),U(),qE(),X(),pD=fD.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{visibleIndex:o,expanded:s,recalculateHeight:c}=WE(),l=fD.useRef(null);return H(()=>{let e=l.current;if(!e||(c(),typeof ResizeObserver!=`function`||typeof MutationObserver!=`function`))return;let t=new ResizeObserver(()=>c(!0)),n=new MutationObserver(()=>c(!0));return t.observe(e),n.observe(e,{childList:!0,subtree:!0,characterData:!0}),()=>{t.disconnect(),n.disconnect()}},[c]),Y(`div`,e,{ref:[t,l],state:{expanded:s,behind:o>0},props:a})})})),hD,gD,_D=e((()=>{hD=t(l(),1),Za(),U(),qE(),X(),gD=hD.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,children:o,...s}=e,{toast:c,setDescriptionId:l}=WE(),u=o??c.description,d=!!u,f=qa(a);H(()=>{if(d)return l(f),()=>{l(void 0)}},[d,f,l]);let p=Y(`p`,e,{ref:t,state:{type:c.type},props:{...s,id:f,children:u}});return d?p:null})})),vD,yD,bD=e((()=>{vD=t(l(),1),U(),Za(),qE(),X(),yD=vD.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,children:o,...s}=e,{toast:c,setTitleId:l}=WE(),u=o??c.title,d=!!u,f=qa(a);H(()=>{if(d)return l(f),()=>{l(void 0)}},[d,f,l]);let p=Y(`h2`,e,{ref:t,state:{type:c.type},props:{...s,id:f,children:u}});return d?p:null})})),xD,SD,CD=e((()=>{xD=t(l(),1),qE(),xE(),Dg(),X(),SD=xD.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a,nativeButton:o=!0,...s}=e,c=vE(),{toast:l}=WE(),u=c.useState(`expanded`),[d,f]=xD.useState(!1),{getButtonProps:p,buttonRef:m}=Cg({disabled:a,native:o}),h={type:l.type};return Y(`button`,e,{ref:[t,m],state:h,props:[{"aria-hidden":!u&&!d,onClick(){c.closeToast(l.id)},onFocus(){f(!0)},onBlur(){f(!1)}},s,p]})})})),wD,TD,ED=e((()=>{wD=t(l(),1),qE(),Dg(),X(),TD=wD.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a,nativeButton:o=!0,...s}=e,{toast:c}=WE(),l=c.actionProps?.children??s.children,u=!!l,{getButtonProps:d,buttonRef:f}=Cg({disabled:a,native:o}),p={type:c.type},m=Y(`button`,e,{ref:[t,f],state:p,props:[s,c.actionProps,d,{children:l}]});return u?m:null})})),DD,OD=e((()=>{cf(),DD=sf}));function kD(){let e=AD.useContext(bE);if(!e)throw Error(nt(73));let t=e.useState(`toasts`);return AD.useMemo(()=>({toasts:t,add:e.addToast,close:e.closeToast,update:e.updateToast,promise:e.promiseToast}),[t,e])}var AD,jD=e((()=>{rt(),AD=t(l(),1),xE()}));function MD(){let e=new Set;function t(t){e.forEach(e=>e(t))}return{" subscribe":function(t){return e.add(t),()=>{e.delete(t)}},add(e){let n=e.id||SE(`toast`);return t({action:`add`,options:{...e,id:n,transitionStatus:`starting`}}),n},close(e){t({action:`close`,options:{id:e}})},update(e,n){t({action:`update`,options:{...n,id:e}})},promise(e,n){let r=e;return t({action:`promise`,options:{...n,promise:e,setPromise(e){r=e}}}),r}}}var ND=e((()=>{wE()})),PD=e((()=>{LE(),UE(),dD(),mD(),_D(),bD(),CD(),ED(),OD(),_n(),Kn(),Ff(),Do(),rt(),gd(),Wg(),YE(),xE(),zf(),X(),jD(),ND()})),FD=e((()=>{PD()})),ID,LD,RD,zD,BD,VD=e((()=>{Jm(),ZT(),_E(),ID=t(l(),1),LD=t(c(),1),y(),oe(),FD(),RD={default:E,error:I,info:E,loading:M,success:A,warning:N},zD={default:f.colorText,error:f.colorError,info:f.colorInfo,loading:f.colorPrimary,success:f.colorSuccess,warning:f.colorWarning},BD=(0,ID.memo)(({toast:e,classNames:t,styles:n})=>{let{position:r,swipeDirection:i}=XT(),a=e.data,o=a?.type??`default`,s=a?.closable??!0,c=a?.hideCloseButton??!1,l=s&&!c,u=a?.icon,d=e.title??a?.title,f=e.description??a?.description,p=e.actionProps??a?.actionProps,m=a?.actions,h=zD[o],_=u??RD[o],v=o===`loading`,y=g(pE.description,pE.descriptionStandalone,t?.description),b=()=>_?(0,LD.jsx)(`div`,{className:g(pE.icon,t?.icon),style:n?.icon,children:(0,LD.jsx)(qm,{color:h,icon:_,size:18,spin:v})}):null,x=()=>m&&m.length>0?(0,LD.jsx)(`div`,{className:g(pE.actions,t?.actions),style:n?.actions,children:m.map((e,r)=>(0,LD.jsx)(TD,{style:n?.action,className:g(gE({variant:e.variant??`primary`}),t?.action),onClick:e.onClick,...e.props,children:e.label},r))}):p?(0,LD.jsx)(TD,{className:g(gE({variant:`primary`}),t?.action),style:n?.action,...p}):null;return(0,LD.jsx)(uD,{className:g(hE({position:r}),t?.root),swipeDirection:i,toast:e,style:{...n?.root,...a?.style},children:(0,LD.jsx)(pD,{className:g(pE.content,t?.content),style:n?.content,children:(0,LD.jsxs)(`div`,{className:d?pE.toastBody:pE.toastBodyCenter,children:[b(),(0,LD.jsxs)(`div`,{className:pE.contentArea,children:[d?(0,LD.jsxs)(LD.Fragment,{children:[(0,LD.jsxs)(`div`,{className:pE.titleRow,children:[(0,LD.jsx)(yD,{className:g(pE.title,t?.title),style:n?.title,children:d}),l&&(0,LD.jsx)(SD,{"aria-label":`Close`,className:g(pE.close,t?.close),style:n?.close,children:(0,LD.jsx)(P,{size:14})})]}),f&&(0,LD.jsx)(gD,{className:g(pE.description,t?.description),style:{marginBlockStart:4,...n?.description},children:f})]}):f&&(0,LD.jsxs)(`div`,{className:pE.titleRow,children:[(0,LD.jsx)(gD,{className:y,style:n?.description,children:f}),l&&(0,LD.jsx)(SD,{"aria-label":`Close`,className:g(pE.close,t?.close),style:n?.close,children:(0,LD.jsx)(P,{size:14})})]}),x()]})]})})})}),BD.displayName=`ToastItem`}));async function HD(e,t){let n=nO({closable:!1,duration:0,type:`loading`,...typeof t.loading==`string`?{description:t.loading}:t.loading});try{let r=await e;return n.close(),nO({type:`success`,...typeof t.success==`string`?{description:t.success}:typeof t.success==`function`?{description:t.success(r)}:t.success}),r}catch(e){throw n.close(),nO({type:`error`,...typeof t.error==`string`?{description:t.error}:typeof t.error==`function`?{description:t.error(e)}:t.error}),e}}var UD,WD,GD,KD,qD,JD,YD,XD,ZD,QD,$D,eO,tO,nO,rO,iO,aO,oO,sO,cO,lO,uO,dO,fO,pO=e((()=>{$p(),rm(),Y_(),ZT(),iE(),fE(),_E(),VD(),UD=t(l(),1),WD=t(c(),1),y(),FD(),GD=[`top`,`top-left`,`top-right`,`bottom`,`bottom-left`,`bottom-right`],KD={duration:5e3,limit:5,position:`bottom-right`,swipeDirection:[`down`,`right`]},qD={bottom:MD(),"bottom-left":MD(),"bottom-right":MD(),top:MD(),"top-left":MD(),"top-right":MD()},JD={bottom:new Map,"bottom-left":new Map,"bottom-right":new Map,top:new Map,"top-left":new Map,"top-right":new Map},YD=e=>qD[e],XD=0,ZD=()=>`toast-${Date.now().toString(36)}-${(XD++).toString(36)}`,QD=e=>GD.find(t=>JD[t].has(e)),$D=(e,t)=>Array.from(JD[e].keys()).at(-1)===t,eO=(e,t)=>typeof e==`string`?{description:e,type:t}:{...e,type:t},tO=(e,t)=>({close:()=>lE(()=>YD(t).close(e)),id:e,update:n=>{lE(()=>YD(t).update(e,{data:n,description:n.description,title:n.title}))}}),nO=e=>{let t=e.placement??KD.position,n=YD(t),{id:r,onClose:i,onRemove:a}=e;if(r){let e=QD(r);e&&!(e===t&&$D(t,r))&&(JD[e].get(r).superseded=!0,JD[e].delete(r),lE(()=>YD(e).close(r)))}let o=r??ZD(),s={superseded:!1};return JD[t].set(o,s),lE(()=>{n.add({id:o,data:e,description:e.description,onClose:()=>{s.superseded||i?.()},onRemove:()=>{s.superseded||(JD[t].delete(o),a?.())},timeout:e.duration??KD.duration,title:e.title})}),tO(o,t)},rO=e=>{if(e)for(let[t,n]of Object.entries(qD))JD[t].delete(e),lE(()=>n.close(e));else for(let[e,t]of Object.entries(qD)){let n=Array.from(JD[e].keys());JD[e].clear(),lE(()=>{for(let e of n)t.close(e)})}},iO=e=>nO(eO(e,`success`)),aO=e=>nO(eO(e,`error`)),oO=e=>nO(eO(e,`info`)),sO=e=>nO(eO(e,`warning`)),cO=e=>nO({duration:0,...eO(e,`loading`)}),lO=e=>nO({type:`default`,...e}),uO=Object.assign(lO,{dismiss:rO,error:aO,info:oO,loading:cO,promise:HD,success:iO,warning:sO}),dO=(0,UD.memo)(()=>{let{toasts:e}=kD();return e.map(e=>(0,WD.jsx)(BD,{toast:e},e.id))}),dO.displayName=`ToastList`,fO=(0,UD.memo)(({root:e,className:t,duration:n=5e3,limit:r=5,position:i=`bottom-right`,swipeDirection:a=[`down`,`right`]})=>{let o=Qp(),s=nm(),[c,l]=(0,UD.useState)(void 0),u=(0,UD.useId)();(0,UD.useEffect)(()=>tE(u),[u]);let d=(0,UD.useSyncExternalStore)(rE,()=>nE(u),()=>!1);if((0,UD.useEffect)(()=>{d&&(KD={duration:n,limit:r,position:i,swipeDirection:a})},[n,r,i,a,d]),(0,UD.useEffect)(()=>{d&&l(K_(`toast`))},[d]),(0,UD.useEffect)(()=>{if(!(!d||!o))return uE(),()=>{dE()}},[d,o]),!o||!d)return null;let f=e??s??document.body;return GD.map(e=>(0,WD.jsx)(YT,{value:{position:e,swipeDirection:a},children:(0,WD.jsx)(IE,{limit:r,timeout:n,toastManager:YD(e),children:(0,WD.jsx)(DD,{container:f,children:(0,WD.jsx)(HE,{className:g(mE({position:e}),t),style:{zIndex:c},children:(0,WD.jsx)(dO,{})})})})},e))}),fO.displayName=`ToastHost`})),mO,hO=e((()=>{y(),mO=h(()=>v`
    @property --lobe-scroll-area-fade-top {
      inherits: true;
      initial-value: 0;
      syntax: '<length>';
    }

    @property --lobe-scroll-area-fade-bottom {
      inherits: true;
      initial-value: 0;
      syntax: '<length>';
    }
  `)})),gO,_O=e((()=>{y(),gO=d(({css:e,cssVar:t})=>({content:e`
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: ${t.fontSizeSM};
    line-height: 1.375rem;
    color: ${t.colorText};
  `,corner:e`
    background: ${t.colorFillSecondary};
  `,root:e`
    position: relative;
    box-sizing: border-box;
  `,scrollbar:e`
    pointer-events: none;

    margin: 8px;
    border-radius: ${t.borderRadiusSM};

    opacity: 0;
    background: transparent;

    transition: opacity 150ms;

    &::before {
      content: '';
      position: absolute;
    }

    &[data-scrolling] {
      transition-duration: 0ms;
    }

    &[data-hovering],
    &[data-scrolling] {
      pointer-events: auto;
      opacity: 1;
    }

    &[data-orientation='vertical'] {
      width: 4px;

      &::before {
        inset-inline-start: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 100%;
      }
    }

    &[data-orientation='horizontal'] {
      height: 4px;

      &::before {
        inset-block-end: -8px;
        inset-inline: 0;
        width: 100%;
        height: 20px;
      }
    }
  `,thumb:e`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: ${t.colorTextQuaternary};
  `,viewport:e`
    position: relative;
    height: 100%;
    outline: none;

    &:focus-visible {
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `,viewportFade:e`
    --scroll-area-overflow-y-start: inherit;
    --scroll-area-overflow-y-end: inherit;
    --lobe-scroll-area-fade-size: 40px;
    --lobe-scroll-area-fade-top: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-y-start, 0px)
    );
    --lobe-scroll-area-fade-bottom: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-y-end, 0px)
    );

    /* Fade the CONTENT via mask, so it works on background images too. */
    mask-image: linear-gradient(
      to bottom,
      transparent 0,
      #000 var(--lobe-scroll-area-fade-top),
      #000 calc(100% - var(--lobe-scroll-area-fade-bottom)),
      transparent 100%
    );
    mask-repeat: no-repeat;
    mask-size: 100% 100%;

    /* Scroll-driven animation: use scroll position to drive the mask. */
    @supports (animation-timeline: scroll()) {
      /*
       * Important: drive fade by *distance to edges* (first/last 40px),
       * so reaching top/bottom doesn't cause a sudden snap.
       */
      @keyframes lobe-scroll-area-fade-top-in {
        from {
          --lobe-scroll-area-fade-top: 0;
        }

        to {
          --lobe-scroll-area-fade-top: var(--lobe-scroll-area-fade-size);
        }
      }

      @keyframes lobe-scroll-area-fade-bottom-out {
        from {
          --lobe-scroll-area-fade-bottom: var(--lobe-scroll-area-fade-size);
        }

        to {
          --lobe-scroll-area-fade-bottom: 0;
        }
      }

      animation-name: lobe-scroll-area-fade-top-in, lobe-scroll-area-fade-bottom-out;
      animation-duration: 1ms, 1ms;
      animation-timing-function: linear, linear;
      animation-fill-mode: both, both;
      animation-timeline: scroll(self y), scroll(self y);

      animation-range:
        0 var(--lobe-scroll-area-fade-size),
        calc(100% - var(--lobe-scroll-area-fade-size)) 100%;
    }
  `,viewportFadeHorizontal:e`
    --scroll-area-overflow-x-start: inherit;
    --scroll-area-overflow-x-end: inherit;
    --lobe-scroll-area-fade-size: 40px;
    --lobe-scroll-area-fade-left: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-x-start, 0px)
    );
    --lobe-scroll-area-fade-right: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-x-end, 0px)
    );

    /* Fade the CONTENT via mask, so it works on background images too. */
    mask-image: linear-gradient(
      to right,
      transparent 0,
      #000 var(--lobe-scroll-area-fade-left),
      #000 calc(100% - var(--lobe-scroll-area-fade-right)),
      transparent 100%
    );
    mask-repeat: no-repeat;
    mask-size: 100% 100%;

    /* Scroll-driven animation: use scroll position to drive the mask. */
    @supports (animation-timeline: scroll()) {
      /*
       * Important: drive fade by *distance to edges* (first/last 40px),
       * so reaching start/end doesn't cause a sudden snap.
       */
      @keyframes lobe-scroll-area-fade-left-in {
        from {
          --lobe-scroll-area-fade-left: 0;
        }

        to {
          --lobe-scroll-area-fade-left: var(--lobe-scroll-area-fade-size);
        }
      }

      @keyframes lobe-scroll-area-fade-right-out {
        from {
          --lobe-scroll-area-fade-right: var(--lobe-scroll-area-fade-size);
        }

        to {
          --lobe-scroll-area-fade-right: 0;
        }
      }

      animation-name: lobe-scroll-area-fade-left-in, lobe-scroll-area-fade-right-out;
      animation-duration: 1ms, 1ms;
      animation-timing-function: linear, linear;
      animation-fill-mode: both, both;
      animation-timeline: scroll(self x), scroll(self x);

      animation-range:
        0 var(--lobe-scroll-area-fade-size),
        calc(100% - var(--lobe-scroll-area-fade-size)) 100%;
    }
  `,viewportFadeBoth:e`
    --scroll-area-overflow-x-start: inherit;
    --scroll-area-overflow-x-end: inherit;
    --scroll-area-overflow-y-start: inherit;
    --scroll-area-overflow-y-end: inherit;
    --lobe-scroll-area-fade-size: 40px;
    --lobe-scroll-area-fade-top: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-y-start, 0px)
    );
    --lobe-scroll-area-fade-bottom: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-y-end, 0px)
    );
    --lobe-scroll-area-fade-left: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-x-start, 0px)
    );
    --lobe-scroll-area-fade-right: min(
      var(--lobe-scroll-area-fade-size),
      var(--scroll-area-overflow-x-end, 0px)
    );

    mask-composite: intersect;

    /*
     * Combine vertical + horizontal fades by intersecting two gradient masks
     * so the four corners stay transparent only when both axes overflow.
     */
    mask-image:
      linear-gradient(
        to bottom,
        transparent 0,
        #000 var(--lobe-scroll-area-fade-top),
        #000 calc(100% - var(--lobe-scroll-area-fade-bottom)),
        transparent 100%
      ),
      linear-gradient(
        to right,
        transparent 0,
        #000 var(--lobe-scroll-area-fade-left),
        #000 calc(100% - var(--lobe-scroll-area-fade-right)),
        transparent 100%
      );
    mask-repeat: no-repeat, no-repeat;
    mask-size:
      100% 100%,
      100% 100%;

    @supports (animation-timeline: scroll()) {
      @keyframes lobe-scroll-area-fade-top-in-both {
        from {
          --lobe-scroll-area-fade-top: 0;
        }

        to {
          --lobe-scroll-area-fade-top: var(--lobe-scroll-area-fade-size);
        }
      }

      @keyframes lobe-scroll-area-fade-bottom-out-both {
        from {
          --lobe-scroll-area-fade-bottom: var(--lobe-scroll-area-fade-size);
        }

        to {
          --lobe-scroll-area-fade-bottom: 0;
        }
      }

      @keyframes lobe-scroll-area-fade-left-in-both {
        from {
          --lobe-scroll-area-fade-left: 0;
        }

        to {
          --lobe-scroll-area-fade-left: var(--lobe-scroll-area-fade-size);
        }
      }

      @keyframes lobe-scroll-area-fade-right-out-both {
        from {
          --lobe-scroll-area-fade-right: var(--lobe-scroll-area-fade-size);
        }

        to {
          --lobe-scroll-area-fade-right: 0;
        }
      }

      animation-name:
        lobe-scroll-area-fade-top-in-both, lobe-scroll-area-fade-bottom-out-both,
        lobe-scroll-area-fade-left-in-both, lobe-scroll-area-fade-right-out-both;
      animation-duration: 1ms, 1ms, 1ms, 1ms;
      animation-timing-function: linear, linear, linear, linear;
      animation-fill-mode: both, both, both, both;
      animation-timeline: scroll(self y), scroll(self y), scroll(self x), scroll(self x);

      animation-range:
        0 var(--lobe-scroll-area-fade-size),
        calc(100% - var(--lobe-scroll-area-fade-size)) 100%,
        0 var(--lobe-scroll-area-fade-size),
        calc(100% - var(--lobe-scroll-area-fade-size)) 100%;
    }
  `}))}));function vO(){let e=yO.useContext(bO);if(e===void 0)throw Error(nt(53));return e}var yO,bO,xO=e((()=>{rt(),yO=t(l(),1),bO=yO.createContext(void 0)})),SO,CO=e((()=>{SO=function(e){return e.scrollAreaCornerHeight=`--scroll-area-corner-height`,e.scrollAreaCornerWidth=`--scroll-area-corner-width`,e}({})})),wO=e((()=>{}));function TO(e,t,n){if(!e)return 0;let r=getComputedStyle(e),i=n===`x`?`Inline`:`Block`;return n===`x`&&t===`margin`?parseFloat(r[`${t}InlineStart`])*2:parseFloat(r[`${t}${i}Start`])+parseFloat(r[`${t}${i}End`])}var EO=e((()=>{})),DO,OO=e((()=>{DO=function(e){return e.orientation=`data-orientation`,e.hovering=`data-hovering`,e.scrolling=`data-scrolling`,e.hasOverflowX=`data-has-overflow-x`,e.hasOverflowY=`data-has-overflow-y`,e.overflowXStart=`data-overflow-x-start`,e.overflowXEnd=`data-overflow-x-end`,e.overflowYStart=`data-overflow-y-start`,e.overflowYEnd=`data-overflow-y-end`,e}({})})),kO,AO,jO,MO=e((()=>{kO=t(c(),1),AO=`base-ui-disable-scrollbar`,jO={className:AO,getElement(e){return(0,kO.jsx)(`style`,{nonce:e,href:AO,precedence:`base-ui:low`,children:`.${AO}{scrollbar-width:none}.${AO}::-webkit-scrollbar{display:none}`})}}})),NO,PO=e((()=>{NO=function(e){return e.scrolling=`data-scrolling`,e.hasOverflowX=`data-has-overflow-x`,e.hasOverflowY=`data-has-overflow-y`,e.overflowXStart=`data-overflow-x-start`,e.overflowXEnd=`data-overflow-x-end`,e.overflowYStart=`data-overflow-y-start`,e.overflowYEnd=`data-overflow-y-end`,e}({})})),FO,IO=e((()=>{PO(),FO={hasOverflowX:e=>e?{[NO.hasOverflowX]:``}:null,hasOverflowY:e=>e?{[NO.hasOverflowY]:``}:null,overflowXStart:e=>e?{[NO.overflowXStart]:``}:null,overflowXEnd:e=>e?{[NO.overflowXEnd]:``}:null,overflowYStart:e=>e?{[NO.overflowYStart]:``}:null,overflowYEnd:e=>e?{[NO.overflowYEnd]:``}:null,cornerHidden:()=>null}}));function LO(){return RO.useContext(zO)??BO}var RO,zO,BO,VO=e((()=>{RO=t(l(),1),zO=RO.createContext(void 0),BO={disableStyleElements:!1}}));function HO(e){if(typeof e==`number`){let t=Math.max(0,e);return{xStart:t,xEnd:t,yStart:t,yEnd:t}}return{xStart:Math.max(0,e?.xStart||0),xEnd:Math.max(0,e?.xEnd||0),yStart:Math.max(0,e?.yStart||0),yEnd:Math.max(0,e?.yEnd||0)}}var UO,WO,GO,KO,qO,JO,YO,XO=e((()=>{UO=t(l(),1),Qr(),ht(),xO(),X(),CO(),wO(),EO(),OO(),MO(),zd(),IO(),kl(),VO(),WO=t(c(),1),GO={x:0,y:0},KO={width:0,height:0},qO={xStart:!1,xEnd:!1,yStart:!1,yEnd:!1},JO={x:!0,y:!0,corner:!0},YO=UO.forwardRef(function(e,t){let{render:n,className:r,overflowEdgeThreshold:i,style:a,...o}=e,{xStart:s,xEnd:c,yStart:l,yEnd:u}=HO(i),d=Rd(),f=ft(),p=ft(),{nonce:m,disableStyleElements:h}=LO(),[g,_]=UO.useState(!1),[v,y]=UO.useState(!1),[b,x]=UO.useState(!1),[S,C]=UO.useState(!1),[w,T]=UO.useState(!1),[E,D]=UO.useState(KO),[O,k]=UO.useState(KO),[A,j]=UO.useState(qO),[M,N]=UO.useState(JO),P=UO.useRef(null),F=UO.useRef(null),I=UO.useRef(null),L=UO.useRef(null),R=UO.useRef(null),ee=UO.useRef(null),z=UO.useRef(null),te=UO.useRef(!1),ne=UO.useRef(0),re=UO.useRef(0),B=UO.useRef(0),ie=UO.useRef(0),V=UO.useRef(`vertical`),ae=UO.useRef(GO),oe=q(e=>{let t=e.x-ae.current.x,n=e.y-ae.current.y;ae.current=e,n!==0&&(x(!0),f.start(500,()=>{x(!1)})),t!==0&&(y(!0),p.start(500,()=>{y(!1)}))}),se=q(e=>{e.button===0&&(te.current=!0,ne.current=e.clientY,re.current=e.clientX,V.current=e.currentTarget.getAttribute(DO.orientation),F.current&&(B.current=F.current.scrollTop,ie.current=F.current.scrollLeft),R.current&&V.current===`vertical`&&R.current.setPointerCapture(e.pointerId),ee.current&&V.current===`horizontal`&&ee.current.setPointerCapture(e.pointerId))}),ce=q(e=>{if(!te.current)return;let t=e.clientY-ne.current,n=e.clientX-re.current;if(F.current){let r=F.current.scrollHeight,i=F.current.clientHeight,a=F.current.scrollWidth,o=F.current.clientWidth;if(R.current&&I.current&&V.current===`vertical`){let n=TO(I.current,`padding`,`y`),a=TO(R.current,`margin`,`y`),o=R.current.offsetHeight,s=t/(I.current.offsetHeight-o-n-a);F.current.scrollTop=B.current+s*(r-i),e.preventDefault(),x(!0),f.start(500,()=>{x(!1)})}if(ee.current&&L.current&&V.current===`horizontal`){let t=TO(L.current,`padding`,`x`),r=TO(ee.current,`margin`,`x`),i=ee.current.offsetWidth,s=n/(L.current.offsetWidth-i-t-r);F.current.scrollLeft=ie.current+s*(a-o),e.preventDefault(),y(!0),p.start(500,()=>{y(!1)})}}}),le=q(e=>{te.current=!1,R.current&&V.current===`vertical`&&R.current.hasPointerCapture(e.pointerId)&&R.current.releasePointerCapture(e.pointerId),ee.current&&V.current===`horizontal`&&ee.current.hasPointerCapture(e.pointerId)&&ee.current.releasePointerCapture(e.pointerId)});function ue(e){C(e.pointerType===`touch`)}function de(e){ue(e),e.pointerType!==`touch`&&_(W(P.current,e.target))}let fe=UO.useMemo(()=>({scrolling:v||b,hasOverflowX:!M.x,hasOverflowY:!M.y,overflowXStart:A.xStart,overflowXEnd:A.xEnd,overflowYStart:A.yStart,overflowYEnd:A.yEnd,cornerHidden:M.corner}),[v,b,M.x,M.y,M.corner,A]),pe={role:`presentation`,onPointerEnter:de,onPointerMove:de,onPointerDown:ue,onPointerLeave(){_(!1)},style:{position:`relative`,[SO.scrollAreaCornerHeight]:`${E.height}px`,[SO.scrollAreaCornerWidth]:`${E.width}px`}},me=Y(`div`,e,{state:fe,ref:[t,P],props:[pe,o],stateAttributesMapping:FO}),he=UO.useMemo(()=>({handlePointerDown:se,handlePointerMove:ce,handlePointerUp:le,handleScroll:oe,cornerSize:E,setCornerSize:D,thumbSize:O,setThumbSize:k,hasMeasuredScrollbar:w,setHasMeasuredScrollbar:T,touchModality:S,cornerRef:z,scrollingX:v,setScrollingX:y,scrollingY:b,setScrollingY:x,hovering:g,setHovering:_,viewportRef:F,rootRef:P,scrollbarYRef:I,scrollbarXRef:L,thumbYRef:R,thumbXRef:ee,rootId:d,hiddenState:M,setHiddenState:N,overflowEdges:A,setOverflowEdges:j,viewportState:fe,overflowEdgeThreshold:{xStart:s,xEnd:c,yStart:l,yEnd:u}}),[se,ce,le,oe,E,O,w,S,v,y,b,x,g,_,d,M,A,fe,s,c,l,u]);return(0,WO.jsxs)(bO.Provider,{value:he,children:[!h&&jO.getElement(m),me]})})}));function ZO(){let e=QO.useContext($O);if(e===void 0)throw Error(nt(55));return e}var QO,$O,ek=e((()=>{rt(),QO=t(l(),1),$O=QO.createContext(void 0)})),tk,nk=e((()=>{tk=function(e){return e.scrollAreaOverflowXStart=`--scroll-area-overflow-x-start`,e.scrollAreaOverflowXEnd=`--scroll-area-overflow-x-end`,e.scrollAreaOverflowYStart=`--scroll-area-overflow-y-start`,e.scrollAreaOverflowYEnd=`--scroll-area-overflow-y-end`,e}({})}));function rk(e,t){return Math.max(0,e-t)}function ik(e,t){if(t<=0)return 0;let n=XE(e,0,t),r=n,i=t-n,a=r<=1,o=i<=1;return a&&o?r<=i?0:t:a?0:o?t:n}var ak=e((()=>{ZE()}));function ok(){dk||kt||(typeof CSS<`u`&&`registerProperty`in CSS&&[tk.scrollAreaOverflowXStart,tk.scrollAreaOverflowXEnd,tk.scrollAreaOverflowYStart,tk.scrollAreaOverflowYEnd].forEach(e=>{try{CSS.registerProperty({name:e,syntax:`<length>`,inherits:!1,initialValue:`0px`})}catch{}}),dk=!0)}function sk(e){let t=e.clientHeight>=e.scrollHeight,n=e.clientWidth>=e.scrollWidth;return{y:t,x:n,corner:t||n}}function ck(e,t){return e.y===t.y&&e.x===t.x&&e.corner===t.corner?e:t}var lk,uk,dk,fk,pk=e((()=>{lk=t(l(),1),Qr(),U(),Lt(),ht(),xO(),ek(),X(),bf(),EO(),wO(),ZE(),MO(),IO(),nk(),ak(),uk=t(c(),1),dk=!1,fk=lk.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{viewportRef:o,scrollbarYRef:s,scrollbarXRef:c,thumbYRef:l,thumbXRef:u,cornerRef:d,cornerSize:f,setCornerSize:p,setThumbSize:m,rootId:h,setHiddenState:g,hiddenState:_,setHasMeasuredScrollbar:v,handleScroll:y,setHovering:b,setOverflowEdges:x,overflowEdges:S,overflowEdgeThreshold:C,scrollingX:w,scrollingY:T}=vO(),E=_f(),D=lk.useRef(!0),O=lk.useRef([NaN,NaN,NaN,NaN]),k=ft(),A=ft(),j=q(()=>{let e=o.current,t=s.current,n=c.current,r=l.current,i=u.current,a=d.current;if(!e)return;let h=e.scrollHeight,_=e.scrollWidth,y=e.clientHeight,b=e.clientWidth,S=e.scrollTop,w=e.scrollLeft,T=O.current,D=Number.isNaN(T[0]);if(T[0]=y,T[1]=h,T[2]=b,T[3]=_,D&&v(!0),h===0||_===0)return;let k=sk(e),A=k.y,j=k.x,M=b/_,N=y/h,P=Math.max(0,_-b),F=Math.max(0,h-y),I=0,L=0;if(!j){let e=0;e=XE(E===`rtl`?-w:w,0,P),I=ik(e,P),L=P-I}let R=A?0:XE(S,0,F),ee=A?0:ik(R,F),z=A?0:F-ee,te=j?0:b,ne=A?0:y,re=0,B=0;!j&&!A&&(re=t?.offsetWidth||0,B=n?.offsetHeight||0);let ie=f.width===0&&f.height===0,V=ie?re:0,ae=ie?B:0,oe=TO(n,`padding`,`x`),se=TO(t,`padding`,`y`),ce=TO(i,`margin`,`x`),le=TO(r,`margin`,`y`),ue=te-oe-ce,de=ne-se-le,fe=n?Math.min(n.offsetWidth-V,ue):ue,pe=t?Math.min(t.offsetHeight-ae,de):de,me=Math.max(16,fe*M),he=Math.max(16,pe*N);if(m(e=>e.height===he&&e.width===me?e:{width:me,height:he}),t&&r){let e=t.offsetHeight-he-se-le,n=h-y,i=n===0?0:S/n,a=Math.min(e,Math.max(0,i*e));r.style.transform=`translate3d(0,${a}px,0)`}if(n&&i){let e=n.offsetWidth-me-oe-ce,t=_-b,r=t===0?0:w/t,a=E===`rtl`?XE(r*e,-e,0):XE(r*e,0,e);i.style.transform=`translate3d(${a}px,0,0)`}let ge=[[tk.scrollAreaOverflowXStart,I],[tk.scrollAreaOverflowXEnd,L],[tk.scrollAreaOverflowYStart,ee],[tk.scrollAreaOverflowYEnd,z]];for(let[t,n]of ge)e.style.setProperty(t,`${n}px`);a&&(j||A?p({width:0,height:0}):!j&&!A&&p({width:re,height:B})),g(e=>ck(e,k));let _e={xStart:!j&&I>C.xStart,xEnd:!j&&L>C.xEnd,yStart:!A&&ee>C.yStart,yEnd:!A&&z>C.yEnd};x(e=>e.xStart===_e.xStart&&e.xEnd===_e.xEnd&&e.yStart===_e.yStart&&e.yEnd===_e.yEnd?e:_e)});H(()=>{o.current&&ok()},[o]),H(()=>{queueMicrotask(j)},[j,_,E,C.xStart,C.xEnd,C.yStart,C.yEnd]),H(()=>{o.current?.matches(`:hover`)&&b(!0)},[o,b]),H(()=>{let e=o.current;if(typeof ResizeObserver>`u`||!e)return;let t=!1,n=new ResizeObserver(()=>{if(!t){t=!0;let n=O.current;if(n[0]===e.clientHeight&&n[1]===e.scrollHeight&&n[2]===e.clientWidth&&n[3]===e.scrollWidth)return}j()});return n.observe(e),A.start(0,()=>{let t=e.getAnimations({subtree:!0});t.length!==0&&Promise.allSettled(t.map(e=>e.finished)).then(j).catch(()=>{})}),()=>{n.disconnect(),A.clear()}},[j,o,A]);function M(){D.current=!1}let N={role:`presentation`,...h&&{"data-id":`${h}-viewport`},tabIndex:_.x&&_.y?-1:0,className:jO.className,style:{overflow:`scroll`},onScroll(){o.current&&(j(),D.current||y({x:o.current.scrollLeft,y:o.current.scrollTop}),k.start(100,()=>{D.current=!0}))},onWheel:M,onTouchMove:M,onPointerMove:M,onPointerEnter:M,onKeyDown:M},P=lk.useMemo(()=>({scrolling:w||T,hasOverflowX:!_.x,hasOverflowY:!_.y,overflowXStart:S.xStart,overflowXEnd:S.xEnd,overflowYStart:S.yStart,overflowYEnd:S.yEnd,cornerHidden:_.corner}),[w,T,_.x,_.y,_.corner,S]),F=Y(`div`,e,{ref:[t,o],state:P,props:[N,a],stateAttributesMapping:FO}),I=lk.useMemo(()=>({computeThumbPosition:j}),[j]);return(0,uk.jsx)($O.Provider,{value:I,children:F})})}));function mk(){let e=hk.useContext(gk);if(e===void 0)throw Error(nt(54));return e}var hk,gk,_k=e((()=>{rt(),hk=t(l(),1),gk=hk.createContext(void 0)})),vk,yk=e((()=>{vk=function(e){return e.scrollAreaThumbHeight=`--scroll-area-thumb-height`,e.scrollAreaThumbWidth=`--scroll-area-thumb-width`,e}({})})),bk,xk,Sk,Ck=e((()=>{bk=t(l(),1),Mr(),kl(),xO(),_k(),X(),EO(),CO(),yk(),bf(),IO(),xk=t(c(),1),Sk=bk.forwardRef(function(e,t){let{render:n,className:r,orientation:i=`vertical`,keepMounted:a=!1,style:o,...s}=e,{hovering:c,scrollingX:l,scrollingY:u,hiddenState:d,overflowEdges:f,scrollbarYRef:p,scrollbarXRef:m,viewportRef:h,thumbYRef:g,thumbXRef:_,handlePointerDown:v,handlePointerUp:y,handleScroll:b,rootId:x,thumbSize:S,hasMeasuredScrollbar:C}=vO(),w={hovering:c,scrolling:{horizontal:l,vertical:u}[i],orientation:i,hasOverflowX:!d.x,hasOverflowY:!d.y,overflowXStart:f.xStart,overflowXEnd:f.xEnd,overflowYStart:f.yStart,overflowYEnd:f.yEnd,cornerHidden:d.corner},T=_f(),E=!C&&!a,D=i===`vertical`?d.y:d.x,O=a||!D;bk.useEffect(()=>{if(!O)return;let e=h.current,t=i===`vertical`?p.current:m.current;if(!t)return;function n(n){if(!e||!t||n.ctrlKey)return;let r=i===`horizontal`,a=r?`scrollLeft`:`scrollTop`,o=r?n.deltaX:n.deltaY;if(o===0)return;let s=r?e.scrollWidth-e.clientWidth:e.scrollHeight-e.clientHeight,c=r&&T===`rtl`?-s:0,l=r&&T===`rtl`?0:s,u=e[a];u<=c&&o<0||u>=l&&o>0||(n.preventDefault(),e[a]=Math.min(l,Math.max(c,u+o)),b({x:e.scrollLeft,y:e.scrollTop}))}return K(t,`wheel`,n,{passive:!1})},[T,b,i,m,p,O,h]);let k={...x&&{"data-id":`${x}-scrollbar`},onPointerDown(e){if(e.button!==0)return;let t=En(e.nativeEvent),n=i===`vertical`?g.current:_.current;if(!(n&&W(n,t))&&h.current){if(g.current&&p.current&&i===`vertical`){let t=TO(g.current,`margin`,`y`),n=TO(p.current,`padding`,`y`),r=g.current.offsetHeight,i=p.current.getBoundingClientRect(),a=e.clientY-i.top-r/2-n+t/2,o=h.current.scrollHeight,s=h.current.clientHeight,c=a/(p.current.offsetHeight-r-n-t)*(o-s);h.current.scrollTop=c}if(_.current&&m.current&&i===`horizontal`){let t=TO(_.current,`margin`,`x`),n=TO(m.current,`padding`,`x`),r=_.current.offsetWidth,i=m.current.getBoundingClientRect(),a=e.clientX-i.left-r/2-n+t/2,o=h.current.scrollWidth,s=h.current.clientWidth,c=a/(m.current.offsetWidth-r-n-t),l;T===`rtl`?(l=(1-c)*(o-s),h.current.scrollLeft<=0&&(l=-l)):l=c*(o-s),h.current.scrollLeft=l}b({x:h.current.scrollLeft,y:h.current.scrollTop}),v(e)}},onPointerUp:y,onPointerCancel:y,style:{position:`absolute`,touchAction:`none`,WebkitUserSelect:`none`,userSelect:`none`,visibility:E?`hidden`:void 0,...i===`vertical`&&{top:0,bottom:`var(${SO.scrollAreaCornerHeight})`,insetInlineEnd:0,[vk.scrollAreaThumbHeight]:`${S.height}px`},...i===`horizontal`&&{insetInlineStart:0,insetInlineEnd:`var(${SO.scrollAreaCornerWidth})`,bottom:0,[vk.scrollAreaThumbWidth]:`${S.width}px`}}},A=Y(`div`,e,{ref:[t,i===`vertical`?p:m],state:w,props:[k,s],stateAttributesMapping:FO}),j=bk.useMemo(()=>({orientation:i}),[i]);return O?(0,xk.jsx)(gk.Provider,{value:j,children:A}):null})})),wk,Tk,Ek=e((()=>{wk=t(l(),1),U(),ek(),X(),xO(),IO(),Tk=wk.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{computeThumbPosition:o}=ZO(),{hasMeasuredScrollbar:s,viewportState:c}=vO(),l=wk.useRef(null),u=wk.useRef(s);return H(()=>{if(typeof ResizeObserver>`u`)return;let e=!1,t=new ResizeObserver(()=>{!e&&(e=!0,!u.current)||o()});return l.current&&t.observe(l.current),()=>{t.disconnect()}},[o]),Y(`div`,e,{ref:[t,l],state:c,stateAttributesMapping:FO,props:[{role:`presentation`,style:{minWidth:`fit-content`}},a]})})})),Dk,Ok,kk=e((()=>{Dk=t(l(),1),xO(),_k(),yk(),X(),Ok=Dk.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{thumbYRef:o,thumbXRef:s,handlePointerDown:c,handlePointerMove:l,handlePointerUp:u,setScrollingX:d,setScrollingY:f,scrollingX:p,scrollingY:m,hasMeasuredScrollbar:h}=vO(),{orientation:g}=mk(),_={scrolling:g===`horizontal`?p:m,orientation:g};function v(e){g===`vertical`&&f(!1),g===`horizontal`&&d(!1),u(e)}return Y(`div`,e,{ref:[t,g===`vertical`?o:s],state:_,props:[{onPointerDown:c,onPointerMove:l,onPointerUp:v,onPointerCancel:v,style:{visibility:h?void 0:`hidden`,...g===`vertical`&&{height:`var(${vk.scrollAreaThumbHeight})`},...g===`horizontal`&&{width:`var(${vk.scrollAreaThumbWidth})`}}},a]})})})),Ak,jk,Mk=e((()=>{Ak=t(l(),1),xO(),X(),jk=Ak.forwardRef(function(e,t){let{render:n,className:r,style:i,...a}=e,{cornerRef:o,cornerSize:s,hiddenState:c}=vO(),l=Y(`div`,e,{ref:[t,o],props:[{style:{position:`absolute`,bottom:0,insetInlineEnd:0,width:s.width,height:s.height}},a]});return c.corner?null:l})})),Nk=e((()=>{XO(),pk(),Ck(),Ek(),kk(),Mk()})),Pk=e((()=>{Nk()})),Fk,Ik,Lk,Rk,zk,Bk,Vk,Hk,Uk,Wk=e((()=>{hO(),_O(),Fk=t(c(),1),y(),Pk(),Ik=(e,t)=>typeof t==`function`?n=>g(e,t(n)):g(e,t),Lk=({className:e,...t})=>(0,Fk.jsx)(YO,{...t,className:Ik(gO.root,e)}),Lk.displayName=`ScrollAreaRoot`,Rk=e=>{if(!e)return;let t=e===!0?`vertical`:e;return t===`horizontal`?gO.viewportFadeHorizontal:t===`both`?gO.viewportFadeBoth:gO.viewportFade},zk=({className:e,scrollFade:t=!1,...n})=>(0,Fk.jsxs)(Fk.Fragment,{children:[(0,Fk.jsx)(mO,{}),(0,Fk.jsx)(fk,{...n,className:Ik(g(gO.viewport,Rk(t)),e)})]}),zk.displayName=`ScrollAreaViewport`,Bk=({className:e,...t})=>(0,Fk.jsx)(Tk,{...t,className:Ik(gO.content,e)}),Bk.displayName=`ScrollAreaContent`,Vk=({className:e,...t})=>(0,Fk.jsx)(Sk,{...t,className:Ik(gO.scrollbar,e)}),Vk.displayName=`ScrollAreaScrollbar`,Hk=({className:e,...t})=>(0,Fk.jsx)(Ok,{...t,className:Ik(gO.thumb,e)}),Hk.displayName=`ScrollAreaThumb`,Uk=({className:e,...t})=>(0,Fk.jsx)(jk,{...t,className:Ik(gO.corner,e)}),Uk.displayName=`ScrollAreaCorner`})),Gk,Kk,qk=e((()=>{Wk(),Gk=t(c(),1),Kk=({children:e,contentProps:t,corner:n=!1,cornerProps:r,disableContentFit:i=!1,scrollFade:a=!1,scrollbarProps:o,thumbProps:s,viewportProps:c,...l})=>{let u=i?{...t,style:{minWidth:0,...t?.style}}:t;return(0,Gk.jsxs)(Lk,{...l,children:[(0,Gk.jsx)(zk,{scrollFade:a,...c,children:(0,Gk.jsx)(Bk,{...u,children:e})}),(0,Gk.jsx)(Vk,{...o,children:(0,Gk.jsx)(Hk,{...s})}),n&&(0,Gk.jsx)(Uk,{...r})]})}})),Jk,Yk=e((()=>{Jk=e=>`oklch(from ${e} clamp(0, (l - 0.62) * -1000, 1) 0 h / 1)`})),Xk,Zk,Qk,$k,eA=e((()=>{hC(),Xk=t(l(),1),Zk=t(c(),1),Qk=e=>(0,Xk.memo)(t=>(0,Xk.createElement)(e,t)),$k=({unoptimized:e,...t})=>{let n=(0,Xk.use)(cC),r=n?.imgAs||`img`;return(0,Zk.jsx)((0,Xk.useMemo)(()=>Qk(r),[r]),{unoptimized:e===void 0?n?.imgUnoptimized:e,...t})},$k.displayName=`Img`})),tA,nA=e((()=>{y(),tA=d(({css:e})=>({container:e`
      position: relative;
      line-height: 1;
      text-align: center;
    `}))}));function rA(e){return[...e].map(e=>e?.codePointAt(0)?.toString(16)).join(`-`)}function iA(e){let t=rA(e).split(`-`)[0];return t<`1f469`?`@lobehub/fluent-emoji-anim-1`:t>=`1f469`&&t<`1f620`?`@lobehub/fluent-emoji-anim-2`:t>=`1f620`&&t<`1f9a0`?`@lobehub/fluent-emoji-anim-3`:`@lobehub/fluent-emoji-anim-4`}var aA,oA=e((()=>{aA=(e,t)=>{let n=[`anim`,`3d`].includes(t)?`webp`:`svg`;switch(t){case`raw`:return null;case`anim`:return{path:`assets/${rA(e)}.${n}`,pkg:iA(e),version:`latest`};case`3d`:return{path:`assets/${rA(e)}.${n}`,pkg:`@lobehub/fluent-emoji-3d`,version:`latest`};case`flat`:return{path:`assets/${rA(e)}.${n}`,pkg:`@lobehub/fluent-emoji-flat`,version:`latest`};case`modern`:return{path:`assets/${rA(e)}.${n}`,pkg:`@lobehub/fluent-emoji-modern`,version:`latest`};case`mono`:return{path:`assets/${rA(e)}.${n}`,pkg:`@lobehub/fluent-emoji-mono`,version:`latest`}}}})),sA,cA,lA,uA=e((()=>{hC(),Dm(),eA(),nA(),oA(),sA=t(l(),1),cA=t(c(),1),y(),lA=({emoji:e,className:t,style:n,type:r=`3d`,size:i=40,unoptimized:a,ref:o,...s})=>{let[c,l]=(0,sA.useState)(!1),u=pC(),d=(0,sA.useMemo)(()=>aA(e,r),[r,e]);return r===`raw`||!d||c?(0,cA.jsx)(Em,{className:g(tA.container,t),flex:`none`,height:i,ref:o,role:`img`,style:{fontSize:i*.9,...n},width:i,...s,children:e}):(0,cA.jsx)($k,{alt:e,className:t,height:i,loading:`lazy`,ref:o,src:u(d),style:{flex:`none`,...n},unoptimized:a,width:i,onError:()=>l(!0),...s})},lA.displayName=`FluentEmoji`})),dA,fA=e((()=>{dA=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g})),pA,mA=e((()=>{fA(),pA=e=>{let t=dA();return e.match(t)?.[0]}})),hA=e((()=>{mA()})),gA,_A,vA=e((()=>{gA=t(l(),1),_A=(e,t,n)=>{let[r,i]=(0,gA.useState)(!1),a=typeof t==`object`&&t.tooltipWhenOverflow;return(0,gA.useEffect)(()=>{if(!a)return;let n=()=>{let n=e.current;if(!n)return;let r=typeof t==`object`?t.rows:void 0;i(r&&r>1?n.scrollHeight>n.clientHeight:n.scrollWidth>n.clientWidth)};n();let r=new ResizeObserver(n);return e.current&&r.observe(e.current),()=>r.disconnect()},[a,t,n,e]),r}})),yA,bA,xA=e((()=>{y(),Bm(),yA=d(({css:e,cssVar:t})=>({code:e`
    font-family: ${t.fontFamilyCode};
  `,danger:e`
    color: ${t.colorError};
  `,delete:e`
    text-decoration: line-through;
  `,disabled:e`
    cursor: not-allowed;
    color: ${t.colorTextDisabled};
  `,ellipsis:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,ellipsisMulti:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  `,h1:e`
    font-size: calc(${t.fontSize} * 2.5);
    font-weight: bold;
    line-height: 1.25;
  `,h2:e`
    font-size: calc(${t.fontSize} * 2);
    font-weight: bold;
    line-height: 1.25;
  `,h3:e`
    font-size: calc(${t.fontSize} * 1.5);
    font-weight: bold;
    line-height: 1.25;
  `,h4:e`
    font-size: calc(${t.fontSize} * 1.25);
    font-weight: bold;
    line-height: 1.25;
  `,h5:e`
    font-size: ${t.fontSize};
    font-weight: bold;
    line-height: 1.25;
  `,info:e`
    color: ${t.colorInfo};
  `,italic:e`
    font-style: italic;
  `,mark:e`
    color: #000;
    background-color: ${t.yellow};
  `,p:e`
    margin-block: 0;
  `,secondary:e`
    color: ${t.colorTextDescription};
  `,strong:e`
    font-weight: bold;
  `,success:e`
    color: ${t.colorSuccess};
  `,text:e`
    color: ${t.colorText};
  `,underline:e`
    text-decoration: underline;
  `,warning:e`
    color: ${t.colorWarning};
  `})),bA=zm(yA.text,{defaultVariants:{},variants:{as:{h1:yA.h1,h2:yA.h2,h3:yA.h3,h4:yA.h4,h5:yA.h5,p:yA.p},code:{true:yA.code},delete:{true:yA.delete},disabled:{true:yA.disabled},ellipsis:{multi:yA.ellipsisMulti,true:yA.ellipsis},italic:{true:yA.italic},mark:{true:yA.mark},strong:{true:yA.strong},type:{danger:yA.danger,info:yA.info,secondary:yA.secondary,success:yA.success,warning:yA.warning},underline:{true:yA.underline}}})})),SA,CA,wA,TA=e((()=>{vA(),Ph(),xA(),SA=t(l(),1),CA=t(c(),1),y(),wA=({as:e=`div`,align:t,className:n,children:r,style:i,type:a,disabled:o,strong:s,italic:c,underline:l,delete:u,fontSize:d,lineClamp:f,lineHeight:p,mark:m,code:h,color:_,weight:v,ellipsis:y,noWrap:b,textDecoration:x,textTransform:S,whiteSpace:C,wordBreak:w,...T})=>{let E=(0,SA.useRef)(null),D=_A(E,y,r),O=typeof y==`object`&&!!y.rows&&y.rows>1,k=typeof y==`object`&&y.tooltipWhenOverflow,A=(0,CA.jsx)(e,{ref:E,style:{..._&&{color:_},...v&&{fontWeight:v},...p&&{lineHeight:p},...S&&{textTransform:S},...x&&{textDecoration:x},...w&&{wordBreak:w},...typeof y==`object`&&y.rows&&{WebkitLineClamp:y.rows},...!y&&!!f&&{WebkitBoxOrient:`vertical`,WebkitLineClamp:f,display:`-webkit-box`,overflow:`hidden`,textOverflow:`ellipsis`},...d&&{fontSize:d},...t&&{textAlign:t},...!O&&b&&{whiteSpace:`nowrap`},...C&&{whiteSpace:C},...i},className:g(bA({as:[`h1`,`h2`,`h3`,`h4`,`h5`,`p`].includes(e)?e:void 0,code:h,delete:u,disabled:o,ellipsis:y?typeof y==`object`&&y.rows?`multi`:!0:void 0,italic:c,mark:m,strong:s,type:a,underline:l}),n),...T,children:r});if(y&&typeof y==`object`&&(y.tooltip||y.tooltipWhenOverflow)){if(k&&!D)return A;let e=typeof y.tooltip==`string`?y.tooltip:r;return y.tooltip&&typeof y.tooltip==`object`?(0,CA.jsx)(Nh,{...y.tooltip,title:y.tooltip?.title||e,children:A}):(0,CA.jsx)(Nh,{title:e,children:A})}return A},wA.displayName=`Text`}));function EA(e){let t=DA.useContext(kA);if(e===!1&&t===void 0)throw Error(nt(27));return t}var DA,OA,kA,AA=e((()=>{rt(),DA=t(l(),1),OA=DA.createContext(!1),kA=DA.createContext(void 0)})),jA,MA,NA,PA=e((()=>{jA=t(l(),1),AA(),X(),Ld(),Ul(),MA={...Id,...Hl},NA=jA.forwardRef(function(e,t){let{render:n,className:r,style:i,forceRender:a=!1,...o}=e,{store:s}=EA(),c=s.useState(`open`),l=s.useState(`nested`),u=s.useState(`mounted`);return Y(`div`,e,{state:{open:c,transitionStatus:s.useState(`transitionStatus`)},ref:[s.context.backdropRef,t],stateAttributesMapping:MA,props:[{role:`presentation`,hidden:!u,style:{userSelect:`none`,WebkitUserSelect:`none`}},o],enabled:a||!l})})})),FA,IA,LA=e((()=>{FA=t(l(),1),AA(),X(),Og(),Er(),wr(),IA=FA.forwardRef(function(e,t){let{render:n,className:r,style:i,disabled:a=!1,nativeButton:o=!0,...s}=e,{store:c}=EA(),l=c.useState(`open`),{getButtonProps:u,buttonRef:d}=Cg({disabled:a,native:o}),f={disabled:a};function p(e){l&&c.setOpen(!1,G($n,e.nativeEvent))}return Y(`button`,e,{state:f,ref:[t,d],props:[{onClick:p},s,u]})})})),RA,zA,BA=e((()=>{RA=t(l(),1),AA(),X(),zd(),zA=RA.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{store:s}=EA(),c=Rd(a);return s.useSyncedValueWithCleanup(`descriptionElementId`,c),Y(`p`,e,{ref:t,props:[{id:c},o]})})})),VA,HA=e((()=>{VA=function(e){return e.nestedDialogs=`--nested-dialogs`,e}({})})),UA,WA=e((()=>{Ld(),UA=function(e){return e[e.open=Dd.open]=`open`,e[e.closed=Dd.closed]=`closed`,e[e.startingStyle=Dd.startingStyle]=`startingStyle`,e[e.endingStyle=Dd.endingStyle]=`endingStyle`,e.nested=`data-nested`,e.nestedDialogOpen=`data-nested-dialog-open`,e}({})}));function GA(){let e=KA.useContext(qA);if(e===void 0)throw Error(nt(26));return e}var KA,qA,JA=e((()=>{rt(),KA=t(l(),1),qA=KA.createContext(void 0)})),YA,XA,ZA,QA,$A=e((()=>{YA=t(l(),1),gd(),AA(),X(),Ld(),Ul(),HA(),WA(),JA(),Yl(),Oy(),Tu(),XA=t(c(),1),ZA={...Id,...Hl,nestedDialogOpen(e){return e?{[UA.nestedDialogOpen]:``}:null}},QA=YA.forwardRef(function(e,t){let{render:n,className:r,style:i,finalFocus:a,initialFocus:o,...s}=e,{store:c}=EA(),l=c.useState(`descriptionElementId`),u=c.useState(`disablePointerDismissal`),d=c.useState(`floatingRootContext`),f=c.useState(`popupProps`),p=c.useState(`modal`),m=c.useState(`mounted`),h=c.useState(`nested`),g=c.useState(`nestedOpenDialogCount`),_=c.useState(`open`),v=c.useState(`openMethod`),y=c.useState(`titleElementId`),b=c.useState(`transitionStatus`),x=c.useState(`role`),S=d.useState(`floatingId`),C=s.id??S;GA(),ql({open:_,ref:c.context.popupRef,onComplete(){_&&c.context.onOpenChangeComplete?.(!0)}});let w=o===void 0?Xl(c.context.popupRef):o,T=g>0,E=c.useStateSetter(`popupElement`),D=Y(`div`,e,{state:{open:_,nested:h,transitionStatus:b,nestedDialogOpen:T},props:[f,{id:C,"aria-labelledby":y??void 0,"aria-describedby":l??void 0,role:x,...uu,hidden:!m,onKeyDown(e){Cy.has(e.key)&&e.stopPropagation()},style:{[VA.nestedDialogs]:g}},s],ref:[t,c.context.popupRef,E],stateAttributesMapping:ZA});return(0,XA.jsx)(as,{context:d,openInteractionType:v,disabled:!m,closeOnFocusOut:!u,initialFocus:w,returnFocus:a,modal:p!==!1,restoreFocus:`popup`,children:D})})})),ej,tj,nj,rj=e((()=>{ej=t(l(),1),ep(),gd(),AA(),JA(),Qy(),tj=t(c(),1),nj=ej.forwardRef(function(e,t){let{keepMounted:n=!1,...r}=e,{store:i}=EA(),a=i.useState(`mounted`),o=i.useState(`modal`),s=i.useState(`open`);return a||n?(0,tj.jsx)(qA.Provider,{value:n,children:(0,tj.jsxs)(Fo,{ref:t,...r,children:[a&&o===!0&&(0,tj.jsx)(Zy,{ref:i.context.internalBackdropRef,inert:$f(!s)}),e.children]})}):null})}));function ij(e){let{store:t,actionsRef:n}=e,r=t.useState(`open`);su(t,r),iu(t);let{forceUnmount:i}=au(r,t),a=oj.useCallback(()=>{t.setOpen(!1,G(xr))},[t]);oj.useImperativeHandle(n,()=>({unmount:i,close:a}),[i,a])}function aj({store:e,parentContext:t,isDrawer:n}){let r=e.useState(`open`),i=e.useState(`disablePointerDismissal`),a=e.useState(`modal`),o=e.useState(`popupElement`),s=e.useState(`floatingRootContext`),[c,l]=oj.useState(0),[u,d]=oj.useState(0),f=c===0,p=xs(s,{outsidePressEvent(){return e.context.internalBackdropRef.current||e.context.backdropRef.current?`intentional`:{mouse:a===`trap-focus`?`sloppy`:`intentional`,touch:`sloppy`}},outsidePress(t){if(!e.context.outsidePressEnabledRef.current||`button`in t&&t.button!==0||`touches`in t&&t.touches.length!==1)return!1;let n=En(t);return f&&!i?a&&(e.context.internalBackdropRef.current||e.context.backdropRef.current)?e.context.internalBackdropRef.current===n||e.context.backdropRef.current===n||W(n,o)&&!n?.hasAttribute(`data-base-ui-portal`):!0:!1},escapeKey:f});return rb(r&&a===!0,o),e.useContextCallback(`onNestedDialogOpen`,(e,t)=>{l(e),d(t)}),e.useContextCallback(`onNestedDialogClose`,()=>{l(0),d(0)}),oj.useEffect(()=>(t?.onNestedDialogOpen&&r&&t.onNestedDialogOpen(c+1,u+ +!!n),t?.onNestedDialogClose&&!r&&t.onNestedDialogClose(),()=>{t?.onNestedDialogClose&&r&&t.onNestedDialogClose()}),[n,r,c,u,t]),ou(e,{activeTriggerProps:p.reference??Gn,inactiveTriggerProps:p.trigger??Gn,popupProps:p.floating??Gn,nestedOpenDialogCount:c,nestedOpenDrawerCount:u}),null}var oj,sj=e((()=>{oj=t(l(),1),lb(),Kn(),gd(),kl(),Er(),wr(),Tu()}));function cj(e={}){return{...gu(),modal:!0,disablePointerDismissal:!1,popupElement:null,viewportElement:null,descriptionElementId:void 0,titleElementId:void 0,openMethod:null,nested:!1,nestedOpenDialogCount:0,nestedOpenDrawerCount:0,role:`dialog`,...e}}var lj,uj,dj,fj=e((()=>{lj=t(l(),1),Ol(),Tu(),uj={...Cu,modal:Z(e=>e.modal),nested:Z(e=>e.nested),nestedOpenDialogCount:Z(e=>e.nestedOpenDialogCount),nestedOpenDrawerCount:Z(e=>e.nestedOpenDrawerCount),disablePointerDismissal:Z(e=>e.disablePointerDismissal),openMethod:Z(e=>e.openMethod),descriptionElementId:Z(e=>e.descriptionElementId),titleElementId:Z(e=>e.titleElementId),viewportElement:Z(e=>e.viewportElement),role:Z(e=>e.role)},dj=class e extends Sl{constructor(e,t,n=!1){let r=new fu,i=cj(e);i.floatingRootContext=_u(r,t,n),super(i,{popupRef:lj.createRef(),backdropRef:lj.createRef(),internalBackdropRef:lj.createRef(),outsidePressEnabledRef:{current:!0},triggerElements:r,onOpenChange:void 0,onOpenChangeComplete:void 0},uj)}setOpen=(e,t)=>{if(t.preventUnmountOnClose=()=>{this.set(`preventUnmountingOnClose`,!0)},!e&&t.trigger==null&&this.state.activeTriggerId!=null&&(t.trigger=this.state.activeTriggerElement??void 0),this.context.onOpenChange?.(e,t),t.isCanceled)return;this.state.floatingRootContext.dispatchOpenChange(e,t);let n={open:e};$l(n,e,t.trigger),this.update(n)};static useStore(t,n){return Zl(t,(t,r)=>new e(n,t,r),!0).store}}}));function pj(e,t=`dialog`){let{children:n,open:r,defaultOpen:i=!1,onOpenChange:a,onOpenChangeComplete:o,disablePointerDismissal:s=!1,modal:c=!0,actionsRef:l,handle:u,triggerId:d,defaultTriggerId:f=null}=e,p=t===`drawer`,m=t===`alert-dialog`,h=m?!0:c,g=m||s,_=m?`alertdialog`:`dialog`,v=EA(!0),y={modal:h,disablePointerDismissal:g,nested:!!v,role:_},b=dj.useStore(u?.store,{open:i,openProp:r,activeTriggerId:f,triggerIdProp:d,...y});zc(()=>{let e=r===void 0&&b.state.open===!1&&i===!0?{open:!0,activeTriggerId:f}:null;m?b.update(e?{...y,...e}:y):e&&b.update(e)}),b.useControlledProp(`openProp`,r),b.useControlledProp(`triggerIdProp`,d),b.useSyncedValues(y),b.useContextCallback(`onOpenChange`,a),b.useContextCallback(`onOpenChangeComplete`,o);let x=b.useState(`open`),S=b.useState(`mounted`),C=b.useState(`payload`);ij({store:b,actionsRef:l});let w=x||S,T=mj.useMemo(()=>({store:b}),[b]);return(0,hj.jsx)(OA.Provider,{value:!1,children:(0,hj.jsxs)(kA.Provider,{value:T,children:[w&&(0,hj.jsx)(aj,{store:b,parentContext:v?.store.context,isDrawer:p}),typeof n==`function`?n({payload:C}):n]})})}var mj,hj,gj=e((()=>{mj=t(l(),1),Vc(),sj(),AA(),fj(),hj=t(c(),1)}));function _j(e){return pj(e,vj.useContext(OA)?`drawer`:`dialog`)}var vj,yj=e((()=>{vj=t(l(),1),AA(),gj()})),bj,xj,Sj=e((()=>{bj=t(l(),1),AA(),X(),zd(),xj=bj.forwardRef(function(e,t){let{render:n,className:r,style:i,id:a,...o}=e,{store:s}=EA(),c=Rd(a);return s.useSyncedValueWithCleanup(`titleElementId`,c),Y(`h2`,e,{ref:t,props:[{id:c},o]})})})),Cj=e((()=>{PA(),LA(),BA(),$A(),rj(),yj(),X(),Ld(),Ul(),AA(),JA(),Sj(),rt(),Dg(),Do(),Tu(),zd(),gd(),Ob(),fj(),Er(),wr()})),wj=e((()=>{Cj()}));export{UC as $,Tr as $a,Z as $i,qg as $n,ft as $o,wm as $r,Jb as $t,qk as A,Ki as Aa,id as Ai,kv as An,Kn as Ao,hh as Ar,Wx as At,uO as B,ai as Ba,zl as Bi,V_ as Bn,Xt as Bo,Ym as Br,Lx as Bt,lA as C,Io as Ca,Rd as Ci,by as Cn,pr as Co,Nh as Cr,bS as Ct,Yk as D,Y as Da,Pd as Di,cy as Dn,Wn as Do,lh as Dr,Hx as Dt,eA as E,X as Ea,Fd as Ei,sy as En,Sr as Eo,bh as Er,Vx as Et,LO as F,Hi as Fa,Tu as Fi,Q_ as Fn,W as Fo,nh as Fr,Kx as Ft,TT as G,q as Ga,kl as Gi,d_ as Gn,At as Go,Bm as Gr,Qx as Gt,ZE as H,ii as Ha,Hl as Hi,h_ as Hn,Bt as Ho,qm as Hr,Ox as Ht,MO as I,Ai as Ia,uu as Ii,X_ as In,En as Io,$m as Ir,Px as It,pT as J,Vr as Ja,wl as Ji,r_ as Jn,Tt as Jo,Q as Jr,gx as Jt,wT as K,Wr as Ka,Ol as Ki,s_ as Kn,jt as Ko,Mm as Kr,yx as Kt,jO as L,li as La,du as Li,H_ as Ln,Dn as Lo,eh as Lr,Mx as Lt,ak as M,Qi as Ma,ed as Mi,Dv as Mn,In as Mo,ah as Mr,Yx as Mt,ik as N,Wi as Na,Du as Ni,$_ as Nn,Pn as No,ih as Nr,Gx as Nt,Jk as O,qi as Oa,gd as Oi,ay as On,Gn as Oo,ph as Or,Fx as Ot,VO as P,Yi as Pa,Eu as Pi,$ as Pn,Tn as Po,th as Pr,qx as Pt,HC as Q,G as Qa,ul as Qi,Xg as Qn,ht as Qo,Cm as Qr,Xb as Qt,fO as R,si as Ra,Yl as Ri,U_ as Rn,qt as Ro,Zm as Rr,Nx as Rt,mA as S,Fo as Sa,zd as Si,wy as Sn,Zn as So,Uh as Sr,yS as St,$k as T,Do as Ta,Id as Ti,Oy as Tn,hr as To,yh as Tr,hS as Tt,KT as U,$r as Ua,Rl as Ui,m_ as Un,Rt as Uo,Jm as Ur,Ux as Ut,XE as V,J as Va,Ul as Vi,__ as Vn,Wt as Vo,Xm as Vr,Xx as Vt,qT as W,Qr as Wa,Il as Wi,f_ as Wn,Lt as Wo,zm as Wr,jx as Wt,dT as X,K as Xa,bl as Xi,$g as Xn,Ct as Xo,Em as Xr,Zb as Xt,mT as Y,Fr as Ya,yl as Yi,n_ as Yn,Ot as Yo,Om as Yr,_x as Yt,vT as Z,Mr as Za,vl as Zi,Qg as Zn,mt as Zo,Dm as Zr,Qb as Zt,TA as _,xs as _a,Lf as _i,vy as _n,cr as _o,Qh as _r,YS as _t,yj as a,jc as aa,zp as ai,ub as an,rr as ao,Rg as ar,H as as,dC as at,hA as b,as as ba,bf as bi,_y as bn,yr as bo,Gh as br,AS as bt,QA as c,Ec as ca,ip as ci,Hy as cn,ur as co,Dg as cr,ze as cs,iC as ct,BA as d,gc as da,tp as di,Sy as dn,Cr as do,yg as dr,_e as ds,eC as dt,Hc as ea,tm as ei,Kb as en,Er as eo,Jg as er,dt as es,LC as et,IA as f,xc as fa,$f as fi,py as fn,br as fo,hg as fr,me as fs,$S as ft,wA as g,Cs as ga,If as gi,hy as gn,sr as go,Xh as gr,JS as gt,PA as h,hc as ha,Rf as hi,Cy as hn,ar as ho,cg as hr,ZS as ht,_j as i,Lc as ia,Qp as ii,pb as in,$n as io,Ig as ir,U as is,cC as it,rk as j,Gi as ja,rd as ji,Av as jn,Fn as jo,dh as jr,Jx as jt,Kk as k,Ji as ka,od as ki,ny as kn,Un as ko,mh as kr,Rx as kt,$A as l,lc as la,ap as li,Jy as ln,lr as lo,Cg as lr,Re as ls,aC as lt,NA as m,pc as ma,zf as mi,dy as mn,ir as mo,sg as mr,QS as mt,xj as n,zc as na,nm as ni,Ob as nn,gr as no,Gg as nr,nt as ns,vC as nt,nj as o,Mc as oa,Rp as oi,Zy as on,vr as oo,zg as or,Ue as os,hC as ot,LA as p,mc as pa,ep as pi,my as pn,or as po,pg as pr,XS as pt,hT as q,Hr as qa,El as qi,o_ as qn,kt as qo,Pm as qr,vx as qt,Sj as r,Pc as ra,$p as ri,Eb as rn,er as ro,Wg as rr,rt as rs,_C as rt,rj as s,Fc as sa,Ip as si,Qy as sn,mr as so,Og as sr,Be as ss,pC as st,wj as t,Vc as ta,rm as ti,qb as tn,wr as to,Yg as tr,ct as ts,RC as tt,zA as u,bc as ua,rp as ui,fy as un,nr as uo,vg as ur,Ce as us,tC as ut,vA as v,ps as va,Ff as vi,yy as vn,Qn as vo,Zh as vr,WS as vt,uA as w,wo as wa,Ld as wi,xy as wn,tr as wo,Ph as wr,gS as wt,pA as x,us as xa,_f as xi,gy as xn,qn as xo,Hh as xr,jS as xt,_A as y,ds as ya,Mf as yi,Dy as yn,fr as yo,Wh as yr,KS as yt,pO as z,ci as za,ql as zi,B_ as zn,_n as zo,Qm as zr,Dx as zt};