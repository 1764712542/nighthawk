import{n as e,r as t}from"../assets/rolldown-runtime-CMxvf4Kt.js";var n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{n=`0.5.43`,r=`bippy-${n}`,i=Object.defineProperty,a=Object.prototype.hasOwnProperty,o=()=>{},s=e=>{try{Function.prototype.toString.call(e).indexOf(`^_^`)>-1&&setTimeout(()=>{throw Error(`React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build`)})}catch{}},c=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&`getFiberRoots`in e),l=!1,d=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>l?!0:(e&&typeof e.inject==`function`&&(u=e.inject.toString()),!!u?.includes(`(injected)`)),f=new Set,p=new Set,m=e=>{let t=new Map,n=0,a={_instrumentationIsActive:!1,_instrumentationSource:r,checkDCE:s,hasUnsupportedRendererAttached:!1,inject(e){let r=++n;return t.set(r,e),p.add(e),a._instrumentationIsActive||(a._instrumentationIsActive=!0,f.forEach(e=>e())),r},on:o,onCommitFiberRoot:o,onCommitFiberUnmount:o,onPostCommitFiberRoot:o,renderers:t,supportsFiber:!0,supportsFlight:!0};try{i(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`,{configurable:!0,enumerable:!0,get(){return a},set(t){if(t&&typeof t==`object`){let n=a.renderers;a=t,n.size>0&&(n.forEach((e,n)=>{p.add(e),t.renderers.set(n,e)}),h(e))}}});let t=window.hasOwnProperty,n=!1;i(window,`hasOwnProperty`,{configurable:!0,value:function(...e){try{if(!n&&e[0]===`__REACT_DEVTOOLS_GLOBAL_HOOK__`)return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,n=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{h(e)}return a},h=e=>{e&&f.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=s,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=r,t._instrumentationIsActive=!1;let e=c(t);if(e||(t.on=o),t.renderers.size){t._instrumentationIsActive=!0,f.forEach(e=>e());return}let n=t.inject,i=d(t);i&&!e&&(l=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let r=n(e);return p.add(e),i&&t.renderers.set(r,e),t._instrumentationIsActive=!0,f.forEach(e=>e()),r}}(t.renderers.size||t._instrumentationIsActive||d())&&e?.()}catch{}},g=()=>a.call(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`),_=e=>g()?(h(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):m(e),v=()=>!!(typeof window<`u`&&(window.document?.createElement||window.navigator?.product===`ReactNative`)),y=()=>{try{v()&&_()}catch{}}})),ee=e((()=>{b(),y()}));function te(e,t,n=!1){if(!e)return null;let r=t(e);if(r instanceof Promise)return(async()=>{if(await r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=await w(i,t,n);if(e)return e;i=n?null:i.sibling}return null})();if(r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=de(i,t,n);if(e)return e;i=n?null:i.sibling}return null}var ne,x,S,C,re,ie,ae,oe,se,ce,le,ue,de,w,fe,pe,me,T,he,ge,_e,ve,E,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae=e((()=>{b(),ne=60111,x=`Symbol(react.concurrent_mode)`,S=`Symbol(react.async_mode)`,C=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return typeof e.type==`string`}},re=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},ie=(e,t)=>{try{let n=e.dependencies,r=e.alternate?.dependencies;if(!n||!r||typeof n!=`object`||!(`firstContext`in n)||typeof r!=`object`||!(`firstContext`in r))return!1;let i=n.firstContext,a=r.firstContext;for(;i&&typeof i==`object`&&`memoizedValue`in i||a&&typeof a==`object`&&`memoizedValue`in a;){if(t(i,a)===!0)return!0;i=i?.next,a=a?.next}}catch{}return!1},ae=(e,t)=>{try{let n=e.memoizedProps,r=e.alternate?.memoizedProps||{},i=new Set([...Object.keys(n),...Object.keys(r)]);for(let e of i){let i=r?.[e],a=n?.[e];if(t(e,a,i)===!0)return!0}}catch{}return!1},oe=e=>{let t=e.memoizedProps,n=e.alternate?.memoizedProps||{},r=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(r&1)==1;default:return e.alternate?n!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},se=e=>!!(e.flags&13374||e.subtreeFlags&13374),ce=e=>{let t=[],n=[e];for(;n.length;){let e=n.pop();e&&(C(e)&&se(e)&&oe(e)&&t.push(e),e.child&&n.push(e.child),e.sibling&&n.push(e.sibling))}return t},le=e=>{switch(e.tag){case 18:return!0;case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t=typeof e.type==`object`&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t==`symbol`?t.toString():t){case ne:case x:case S:return!0;default:return!1}}}},ue=e=>{let t=[],n=[];for(C(e)?t.push(e):e.child&&n.push(e.child);n.length;){let e=n.pop();if(!e)break;C(e)?t.push(e):e.child&&n.push(e.child),e.sibling&&n.push(e.sibling)}return t},de=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=de(r,t,n);if(e)return e;r=n?null:r.sibling}return null},w=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=await w(r,t,n);if(e)return e;r=n?null:r.sibling}return null},fe=e=>{let t=e?.actualDuration??0,n=t,r=e?.child??null;for(;t>0&&r!=null;)n-=r.actualDuration??0,r=r.sibling;return{selfTime:n,totalTime:t}},pe=e=>!!e.updateQueue?.memoCache,me=e=>{let t=e;return typeof t==`function`?t:typeof t==`object`&&t?me(t.type||t.render):null},T=e=>{let t=e;if(typeof t==`string`)return t;if(typeof t!=`function`&&!(typeof t==`object`&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=me(t);return r&&(r.displayName||r.name)||null},he=e=>{try{if(typeof e.version==`string`&&e.bundleType>0)return`development`}catch{}return`production`},ge=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||c(e)||d(e)},_e=0,ve=new WeakMap,E=(e,t=_e++)=>{ve.set(e,t)},ye=e=>{let t=ve.get(e);return!t&&e.alternate&&(t=ve.get(e.alternate)),t||(t=_e++,E(e,t)),t},be=(e,t,n)=>{let r=t;for(;r!=null;){if(ve.has(r)||ye(r),!le(r)&&oe(r)&&e(r,`mount`),r.tag===13)if(r.memoizedState!==null){let t=r.child,n=t?t.sibling:null;if(n){let t=n.child;t!==null&&be(e,t,!1)}}else{let t=null;r.child!==null&&(t=r.child.child),t!==null&&be(e,t,!1)}else r.child!=null&&be(e,r.child,!0);r=n?r.sibling:null}},xe=(e,t,n,r)=>{if(ve.has(t)||ye(t),!n)return;ve.has(n)||ye(n);let i=t.tag===13,a=!le(t);a&&oe(t)&&e(t,`update`);let o=i&&n.memoizedState!==null,s=i&&t.memoizedState!==null;if(o&&s){let r=t.child?.sibling??null,i=n.child?.sibling??null;r!==null&&i!==null&&xe(e,r,i,t)}else if(o&&!s){let n=t.child;n!==null&&be(e,n,!0)}else if(!o&&s){Ce(e,n);let r=t.child?.sibling??null;r!==null&&be(e,r,!0)}else if(t.child!==n.child){let n=t.child;for(;n;){if(n.alternate){let i=n.alternate;xe(e,n,i,a?t:r)}else be(e,n,!1);n=n.sibling}}},Se=(e,t)=>{(t.tag===3||!le(t))&&e(t,`unmount`)},Ce=(e,t)=>{let n=t.tag===13&&t.memoizedState!==null,r=t.child;for(n&&(r=(t.child?.sibling??null)?.child??null);r!==null;)r.return!==null&&(Se(e,r),Ce(e,r)),r=r.sibling},we=0,Te=new WeakMap,Ee=(e,t)=>{let n=`current`in e?e.current:e,r=Te.get(e);r||(r={id:we++,prevFiber:null},Te.set(e,r));let{prevFiber:i}=r;if(!n)Se(t,n);else if(i!==null){let e=i&&i.memoizedState!=null&&i.memoizedState.element!=null&&i.memoizedState.isDehydrated!==!0,r=n.memoizedState!=null&&n.memoizedState.element!=null&&n.memoizedState.isDehydrated!==!0;!e&&r?be(t,n,!1):e&&r?xe(t,n,n.alternate,null):e&&!r&&Se(t,n)}else be(t,n,!0);r.prevFiber=n},De=e=>Object.prototype.toString.call(e)===`[object Object]`&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null),Oe=(e,t=[])=>{if(!De(e))return[{path:t,value:e}];let n=[];for(let r in e){let i=e[r],a=t.concat(r);De(i)?n.push(...Oe(i,a)):n.push({path:a,value:i})}return n},ke=e=>{let t=_(e.onActive);t._instrumentationSource=e.name??r;let n=t.onCommitFiberRoot;if(e.onCommitFiberRoot){let r=(t,i,a)=>{n!==r&&(n?.(t,i,a),e.onCommitFiberRoot?.(t,i,a))};t.onCommitFiberRoot=r}let i=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let n=(r,a)=>{t.onCommitFiberUnmount===n&&(i?.(r,a),e.onCommitFiberUnmount?.(r,a))};t.onCommitFiberUnmount=n}let a=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let n=(r,i)=>{t.onPostCommitFiberRoot===n&&(a?.(r,i),e.onPostCommitFiberRoot?.(r,i))};t.onPostCommitFiberRoot=n}return t}})),je=e((()=>{b(),ee(),Ae()}));function Me(e,t){for(var n in t)e[n]=t[n];return e}function Ne(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?ot.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Fe(e,o,r,i,null)}function Fe(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++st,__i:-1,__u:0};return i==null&&O.vnode!=null&&O.vnode(a),a}function D(e){return e.children}function Ie(e,t){this.props=e,this.context=t}function Le(e,t){if(t==null)return e.__?Le(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Le(e):null}function Re(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=Me({},t);a.__v=t.__v+1,O.vnode&&O.vnode(a),Xe(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??Le(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,Qe(r,a,i),t.__e=t.__=null,a.__e!=n&&ze(a)}}function ze(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ze(e)}function Be(e){(!e.__d&&(e.__d=!0)&&lt.push(e)&&!Ve.__r++||ut!=O.debounceRendering)&&((ut=O.debounceRendering)||dt)(Ve)}function Ve(){try{for(var e,t=1;lt.length;)lt.length>t&&lt.sort(ft),e=lt.shift(),t=lt.length,Re(e)}finally{lt.length=Ve.__r=0}}function He(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_=r&&r.__k||St,v=t.length;for(c=Ue(n,t,_,c,v),d=0;d<v;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&_[p.__i]||xt,p.__i=d,g=Xe(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&tt(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),4&p.__u?(c=We(p,c,e),f.__e&&=null):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function Ue(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=Fe(null,o,null,null,null):wt(o)?o=e.__k[a]=Fe(D,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=Fe(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=Ke(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Le(s)),nt(s,s));return r}function We(e,t,n){var r,i;if(typeof e.type==`function`){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=We(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=Le(e)),t=n.insertBefore(e.__e,t||null));do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ge(e,t){return t||=[],e==null||typeof e==`boolean`||(wt(e)?e.some(function(e){Ge(e,t)}):t.push(e)),t}function Ke(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function qe(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||Ct.test(t)?n:n+`px`}function Je(e,t,n,r,i){var a,o;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||qe(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||qe(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(gt,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n[ht]=r[ht]:(n[ht]=_t,e.addEventListener(t,a?yt:vt,a)):e.removeEventListener(t,a?yt:vt,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function Ye(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[mt]==null)t[mt]=_t++;else if(t[mt]<n[ht])return;return n(O.event?O.event(t):t)}}}function Xe(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y,b,ee,te,ne,x,S,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=O.__b)&&u(t);n:if(typeof C==`function`){d=o.length;try{if(v=t.props,y=C.prototype&&C.prototype.render,b=(u=C.contextType)&&r[u.__c],ee=u?b?b.props.value:u.__:r,n.__c?_=(f=t.__c=n.__c).__=f.__E:(y?t.__c=f=new C(v,ee):(t.__c=f=new Ie(v,ee),f.constructor=C,f.render=rt),b&&b.sub(f),f.state||={},f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&C.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Me({},f.__s)),Me(f.__s,C.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&C.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&C.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,ee),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,ee)){t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),St.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&o.push(f),s=Le(n);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,ee),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=ee,f.props=v,f.__P=e,f.__e=!1,te=O.__r,ne=0,y)f.state=f.__s,f.__d=!1,te&&te(t),u=f.render(f.props,f.state,f.context),St.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,te&&te(t),u=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++ne<25);f.state=f.__s,f.getChildContext!=null&&(r=Me(Me({},r),f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),x=u!=null&&u.type===D&&u.key==null?$e(u.props.children):u,s=He(e,wt(x)?x:[x],t,n,r,i,a,o,s,c,l),f.base=t.__e,t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__E=f.__=null)}catch(e){if(o.length=d,t.__v=null,c||a!=null){if(e.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(S=a.length;S--;)Ne(a[S])}else t.__e=n.__e;t.__k??=n.__k||[],e.then||Ze(t),O.__e(e,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=et(n.__e,t,n,r,i,a,o,c,l);return(u=O.diffed)&&u(t),128&t.__u?void 0:s}function Ze(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Ze))}function Qe(e,t,n){for(var r=0;r<n.length;r++)tt(n[r],n[++r],n[++r]);O.__c&&O.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){O.__e(e,t.__v)}})}function $e(e){return typeof e!=`object`||!e||e.__b>0?e:wt(e)?e.map($e):e.constructor===void 0?Me({},e):null}function et(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g=n.props||xt,_=t.props,v=t.type;if(v==`svg`?i=`http://www.w3.org/2000/svg`:v==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(l=0;l<a.length;l++)if((p=a[l])&&`setAttribute`in p==!!v&&(v?p.localName==v:p.nodeType==3)){e=p,a[l]=null;break}}if(e==null){if(v==null)return document.createTextNode(_);e=document.createElementNS(i,v,_.is&&_),s&&=(O.__m&&O.__m(t,a),!1),a=null}if(v==null)g===_||s&&e.data==_||(e.data=_);else{if(a=v==`textarea`&&_.defaultValue!=null?null:a&&ot.call(e.childNodes),!s&&a!=null)for(g={},l=0;l<e.attributes.length;l++)g[(p=e.attributes[l]).name]=p.value;for(l in g)p=g[l],l==`dangerouslySetInnerHTML`?d=p:l==`children`||l in _||l==`value`&&`defaultValue`in _||l==`checked`&&`defaultChecked`in _||Je(e,l,null,p,i);for(l in _)p=_[l],l==`children`?f=p:l==`dangerouslySetInnerHTML`?u=p:l==`value`?m=p:l==`checked`?h=p:s&&typeof p!=`function`||g[l]===p||Je(e,l,p,g[l],i);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),He(t.type==`template`?e.content:e,wt(f)?f:[f],t,n,r,v==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&Le(n,0),s,c),a!=null)for(l=a.length;l--;)Ne(a[l]);s&&v!=`textarea`||(l=`value`,v==`progress`&&m==null?e.removeAttribute(`value`):m!=null&&(m!==e[l]||v==`progress`&&!m||v==`option`&&m!=g[l])&&Je(e,l,m,g[l],i),l=`checked`,h!=null&&h!=e[l]&&Je(e,l,h,g[l],i))}return e}function tt(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){O.__e(e,n)}}function nt(e,t,n){var r,i;if(O.unmount&&O.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||tt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){O.__e(e,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&nt(r[i],t,n||typeof e.type!=`function`);n||Ne(e.__e),e.__c=e.__=e.__e=void 0}function rt(e,t,n){return this.constructor(e,n)}function it(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),O.__&&O.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],o=[],Xe(t,e=(!r&&n||t).__k=Pe(D,null,[e]),i||xt,xt,t.namespaceURI,!r&&n?[n]:i?null:t.firstChild?ot.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),Qe(a,e,o),e.props.children=null}function at(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,Be(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+ bt++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}var ot,O,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt=e((()=>{xt={},St=[],Ct=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,wt=Array.isArray,ot=St.slice,O={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},st=0,ct=function(e){return e!=null&&e.constructor===void 0},Ie.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Me({},this.state);typeof e==`function`&&(e=e(Me({},n),this.props)),e&&Me(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Be(this))},Ie.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Be(this))},Ie.prototype.render=D,lt=[],dt=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ft=function(e,t){return e.__v.__b-t.__v.__b},Ve.__r=0,pt=Math.random().toString(8),mt=`__d`+pt,ht=`__a`+pt,gt=/(PointerCapture)$|Capture$/i,_t=0,vt=Ye(!1),yt=Ye(!0),bt=0}));function Et(e,t){P.__h&&P.__h(N,e,Bt||t),Bt=0;var n=N.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function k(e){return Bt=1,Dt(It,e)}function Dt(e,t,n){var r=Et(Lt++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):It(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=N,!N.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=!1,o=r.__c.props!==e;if(r.__c.__H.__.some(function(e){if(e.__N){i=!0;var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a){var s=a.call(this,e,t,n);return i?s||o:s}return!i||o};N.__f=!0;var a=N.shouldComponentUpdate,o=N.componentWillUpdate;N.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},N.shouldComponentUpdate=i}return r.__N||r.__}function A(e,t){var n=Et(Lt++,3);!P.__s&&Ft(n.__H,t)&&(n.__=e,n.u=t,N.__H.__h.push(n))}function Ot(e,t){var n=Et(Lt++,4);!P.__s&&Ft(n.__H,t)&&(n.__=e,n.u=t,N.__h.push(n))}function j(e){return Bt=5,kt(function(){return{current:e}},[])}function kt(e,t){var n=Et(Lt++,7);return Ft(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function M(e,t){return Bt=8,kt(function(){return e},t)}function At(e){var t=N.context[e.__c],n=Et(Lt++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(N)),t.props.value):e.__}function jt(){for(var e;e=Vt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Nt),t.__h.some(Pt),t.__h=[]}catch(n){t.__h=[],P.__e(n,e.__v)}}}function Mt(e){var t,n=function(){clearTimeout(r),Jt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Jt&&(t=requestAnimationFrame(n))}function Nt(e){var t=N,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),N=t}function Pt(e){var t=N;e.__c=e.__(),N=t}function Ft(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function It(e,t){return typeof t==`function`?t(e):t}var Lt,N,Rt,zt,Bt,Vt,P,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt=e((()=>{Tt(),Bt=0,Vt=[],P=O,Ht=P.__b,Ut=P.__r,Wt=P.diffed,Gt=P.__c,Kt=P.unmount,qt=P.__,P.__b=function(e){N=null,Ht&&Ht(e)},P.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),qt&&qt(e,t)},P.__r=function(e){Ut&&Ut(e),Lt=0;var t=(N=e.__c).__H;t&&(Rt===N?(t.__h=[],N.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(Nt),t.__h.some(Pt),t.__h=[],Lt=0)),Rt=N},P.diffed=function(e){Wt&&Wt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Vt.push(t)!==1&&zt===P.requestAnimationFrame||((zt=P.requestAnimationFrame)||Mt)(jt)),t.__H.__.some(function(e){e.u&&=(e.__H=e.u,void 0)})),Rt=N=null},P.__c=function(e,t){t.some(function(e){try{e.__h.some(Nt),e.__h=e.__h.filter(function(e){return!e.__||Pt(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],P.__e(n,e.__v)}}),Gt&&Gt(e,t)},P.unmount=function(e){Kt&&Kt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{Nt(e)}catch(e){t=e}}),n.__H=void 0,t&&P.__e(t,n.__v))},Jt=typeof requestAnimationFrame==`function`}));function Xt(){if(gn>1)gn--;else{var e,t=!1;for((function(){var e=bn;for(bn=void 0;e!==void 0;){var t=e.S;if(t.v===e.v)for(var n=t.t;n!==void 0;n=n.x)n.i===e.i&&(n.i=t.i);e=e.o}})();hn!==void 0;){var n=hn;for(hn=void 0,_n++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&nn(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(_n=0,gn--,t)throw e}}function Zt(e){if(gn>0)return e();yn=++vn,gn++;try{return e()}finally{Xt()}}function Qt(e){var t=F,n=mn;F=void 0,mn=void 0;try{return e()}finally{F=t,mn=n}}function $t(e){if(F!==void 0){var t=e.n;if(t===void 0||t.t!==F)return t={i:0,S:e,p:F.s,n:void 0,t:F,e:void 0,x:void 0,r:t},F.s!==void 0&&(F.s.n=t),F.s=t,e.n=t,32&F.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=F.s,t.n=void 0,F.s.n=t,F.s=t),t}}function en(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}function tn(e,t){return new en(e,t)}function nn(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function rn(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function an(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function on(e,t){en.call(this,void 0,t),this.x=e,this.s=void 0,this.g=xn-1,this.f=4}function sn(e,t){return new on(e,t)}function cn(e){var t=e.m;if(e.m=void 0,typeof t==`function`){gn++;var n=F;F=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,ln(e),t}finally{F=n,Xt()}}}function ln(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,cn(e)}function un(e){if(F!==this)throw Error(`Out-of-order effect`);an(this),F=e,this.f&=-2,8&this.f&&ln(this),Xt()}function dn(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,mn&&mn.push(this)}function fn(e,t){var n=new dn(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var pn,mn,F,hn,gn,_n,vn,yn,bn,xn,Sn=e((()=>{pn=Symbol.for(`preact-signals`),F=void 0,hn=void 0,gn=0,_n=0,vn=0,yn=0,bn=void 0,xn=0,en.prototype.brand=pn,en.prototype.h=function(){return!0},en.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?Qt(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},en.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&Qt(function(){var e;(e=t.Z)==null||e.call(t)}))}},en.prototype.subscribe=function(e){var t=this;return fn(function(){var n=t.value;Qt(function(){return e(n)})},{name:`sub`})},en.prototype.valueOf=function(){return this.value},en.prototype.toString=function(){return this.value+``},en.prototype.toJSON=function(){return this.value},en.prototype.peek=function(){var e=this;return Qt(function(){return e.value})},Object.defineProperty(en.prototype,"value",{get:function(){var e=$t(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(_n>100)throw Error(`Cycle detected`);(function(e){gn!==0&&_n===0&&e.l!==yn&&(e.l=yn,bn={S:e,v:e.v,i:e.i,o:bn})})(this),this.v=e,this.i++,xn++,gn++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Xt()}}}}),on.prototype=new en,on.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===xn))return!0;if(this.g=xn,this.f|=1,this.i>0&&!nn(this))return this.f&=-2,!0;var e=F;try{rn(this),F=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return F=e,an(this),this.f&=-2,!0},on.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}en.prototype.S.call(this,e)},on.prototype.U=function(e){if(this.t!==void 0&&(en.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},on.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(on.prototype,"value",{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=$t(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),dn.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},dn.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,cn(this),rn(this),gn++;var e=F;return F=this,un.bind(this,e)},dn.prototype.N=function(){2&this.f||(this.f|=2,this.u=hn,hn=this)},dn.prototype.d=function(){this.f|=8,1&this.f||ln(this)},dn.prototype.dispose=function(){this.d()}}));function Cn(e,t){O[e]=t.bind(null,O[e]||function(){})}function wn(e){if(Pn){var t=Pn;Pn=void 0,t()}Pn=e&&e.S()}function Tn(e){var t=this,n=e.data,r=Dn(n);r.name=`ReactiveDom`,r.value=n;var i=kt(function(){for(var e=t,n=t.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}var i=sn(function(){var e=r.value.value;return e===0?0:!0===e?``:e||``}),a=sn(function(){return!Array.isArray(i.value)&&!ct(i.value)}),o=fn(function(){if(this.N=jn,a.value){var t=i.value;e.__v&&e.__v.__e&&e.__v.__e.nodeType===3&&(e.__v.__e.data=t)}}),s=t.__$u.d;return t.__$u.d=function(){o(),s.call(this)},[a,i]},[]),a=i[0],o=i[1];return a.value?o.peek():o.value}function En(e,t,n,r){var i=t in e&&e.ownerSVGElement===void 0,a=tn(n);return{o:function(e,t){a.value=e,r=t},d:fn(function(){this.N=jn;var n=a.value.value;r[t]!==n&&(r[t]=n,i?e[t]=n:n!=null&&(!1!==n||t[4]===`-`)?e.setAttribute(t,n):e.removeAttribute(t))})}}function Dn(e,t){return kt(function(){return tn(e,t)},[])}function On(){Zt(function(){for(var e;e=In.shift();)Nn.call(e)})}function kn(){In.push(this)===1&&(O.requestAnimationFrame||Rn)(On)}function An(){Zt(function(){for(var e;e=Ln.shift();)Nn.call(e)})}function jn(){Ln.push(this)===1&&(O.requestAnimationFrame||zn)(An)}function Mn(e,t){var n=j(e);n.current=e,A(function(){return fn(function(){return this.N=kn,n.current()},t)},[])}var Nn,Pn,Fn,In,Ln,Rn,zn,Bn=e((()=>{Tt(),Yt(),Sn(),Fn=typeof window<`u`&&!!window.__PREACT_SIGNALS_DEVTOOLS__,In=[],Ln=[],fn(function(){Nn=this.N})(),Tn.displayName=`ReactiveTextNode`,Object.defineProperties(en.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Tn},props:{configurable:!0,get:function(){var e=this;return{data:{get value(){return e.value}}}}},__b:{configurable:!0,value:1}}),Cn(`__b`,function(e,t){if(typeof t.type==`string`){var n,r=t.props;for(var i in r)if(i!==`children`){var a=r[i];a instanceof en&&(n||(t.__np=n={}),n[i]=a,r[i]=a.peek())}}e(t)}),Cn(`__r`,function(e,t){if(e(t),t.type!==D){wn();var n,r=t.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(e,t){var n;return fn(function(){n=this},{name:t}),n.c=e,n}(function(e){return function(){var t;Fn&&((t=this.y)==null||t.call(this)),e.__$f|=1,e.setState({})}}(r),typeof t.type==`function`?t.type.displayName||t.type.name:``))),wn(n)}}),Cn(`__e`,function(e,t,n,r){wn(),e(t,n,r)}),Cn(`diffed`,function(e,t){wn();var n;if(typeof t.type==`string`&&(n=t.__e)){var r=t.__np,i=t.props,a=n.U;if(a)for(var o in a){var s=a[o];s===void 0||r&&o in r||(s.d(),a[o]=void 0)}if(r)for(var c in a||(a={},n.U=a),r){var l=a[c],u=r[c];l===void 0?(l=En(n,c,u,i),a[c]=l):l.o(u,i)}}e(t)}),Cn(`unmount`,function(e,t){if(typeof t.type==`string`){var n=t.__e;if(n){var r=n.U;if(r)for(var i in n.U=void 0,r){var a=r[i];a&&a.d()}}var o=t.__np;if(o){var s=t.props;for(var c in o)s[c]=o[c]}t.__np=void 0}else{var l=t.__c;if(l){var u=l.__$u;u&&(l.__$u=void 0,u.d())}}e(t)}),Cn(`__h`,function(e,t,n,r){r<3&&(t.__$f|=2),e(t,n,r)}),Ie.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var n=this.__$u,r=n&&n.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u==`boolean`&&!0===this.u){var a=2&this.__$f;if(!(r||a||4&this.__$f)||1&this.__$f)return!0}else if(!(r||4&this.__$f)||3&this.__$f)return!0;for(var o in e)if(o!==`__source`&&e[o]!==this.props[o])return!0;for(var s in this.props)if(!(s in e))return!0;return!1},Rn=typeof requestAnimationFrame>`u`?setTimeout:function(e){var t=function(){clearTimeout(n),cancelAnimationFrame(r),e()},n=setTimeout(t,35),r=requestAnimationFrame(t)},zn=function(e){queueMicrotask(function(){queueMicrotask(e)})}}));function Vn(e,t){for(var n in t)e[n]=t[n];return e}function Hn(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function Un(e,t){var n=t(),r=k({t:{__:n,u:t}}),i=r[0].t,a=r[1];return Ot(function(){i.__=n,i.u=t,Wn(i)&&a({t:i})},[e,n,t]),A(function(){return Wn(i)&&a({t:i}),e(function(){Wn(i)&&a({t:i})})},[e]),n}function Wn(e){try{return!((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}var t,n}function Gn(e,t){this.props=e,this.context=t}function Kn(e,t){function n(e){var n=this.props.ref;return n!=e.ref&&n&&(typeof n==`function`?n(null):n.current=null),t?!t(this.props,e)||n!=e.ref:Hn(this.props,e)}function r(t){return this.shouldComponentUpdate=n,Pe(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.__f=r.prototype.isReactComponent=!0,r.type=e,r}function qn(e){function t(t){var n=Vn({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=rr,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}function Jn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),e.__c.__H=null),(e=Vn({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return Jn(e,t,n)})),e}function Yn(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return Yn(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Xn(){this.__u=0,this.o=null,this.__b=null}function Zn(e){var t=e.__&&e.__.__c;return t&&t.__a&&t.__a(e)}function Qn(){this.i=null,this.l=null}function $n(e){return this.getChildContext=function(){return e.context},e.children}function er(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){it(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}it(Pe($n,{context:t.context},e.__v),t.v)}function tr(e,t){var n=Pe(er,{__v:e,h:t});return n.containerInfo=t,n}var nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr=e((()=>{Tt(),Yt(),Yt(),(Gn.prototype=new Ie).isPureReactComponent=!0,Gn.prototype.shouldComponentUpdate=function(e,t){return Hn(this.props,e)||Hn(this.state,t)},nr=O.__b,O.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),nr&&nr(e)},rr=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.forward_ref`)||3911,ir=O.__e,O.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k||[]),i.__c(e,t)}ir(e,t,n,r)},ar=O.unmount,O.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),ar&&ar(e)},(Xn.prototype=new Ie).__c=function(e,t){var n=t.__c,r=this;r.o??=[],r.o.push(n);var i=Zn(r.__v),a=!1,o=function(){a||r.__z||(a=!0,n.__R=null,i?i(c):c())};n.__R=o;var s=n.__P;n.__P=null;var c=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=Yn(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=s,t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},Xn.prototype.componentWillUnmount=function(){this.o=[]},Xn.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=Jn(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&Pe(D,null,e.fallback);return i&&(i.__u&=-33),[Pe(D,null,t.__a?null:e.children),i]},or=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}},(Qn.prototype=new Ie).__a=function(e){var t=this,n=Zn(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),or(t,e,r)):i()};n?n(a):a()}},Qn.prototype.render=function(e){this.i=null,this.l=new Map;var t=Ge(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Qn.prototype.componentDidUpdate=Qn.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){or(e,n,t)})},sr=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,cr=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,lr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ur=/[A-Z0-9]/g,dr=typeof document<`u`,fr=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/:/fil|che|ra/).test(e)},Ie.prototype.isReactComponent=!0,[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(Ie.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}),pr=O.event,O.event=function(e){return pr&&(e=pr(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e},mr={configurable:!0,get:function(){return this.class}},hr=O.vnode,O.vnode=function(e){typeof e.type==`string`&&function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)==-1;for(var a in t){var o=t[a];if(!(a===`value`&&`defaultValue`in t&&o==null||dr&&a===`children`&&n===`noscript`||a===`class`||a===`className`)){var s=a.toLowerCase();a===`defaultValue`&&`value`in t&&t.value==null?a=`value`:a===`download`&&!0===o?o=``:s===`translate`&&o===`no`?o=!1:s[0]===`o`&&s[1]===`n`?s===`ondoubleclick`?a=`ondblclick`:s!==`onchange`||n!==`input`&&n!==`textarea`||fr(t.type)?s===`onfocus`?a=`onfocusin`:s===`onblur`?a=`onfocusout`:lr.test(a)&&(a=s):s=a=`oninput`:i&&cr.test(a)?a=a.replace(ur,`-$&`).toLowerCase():o===null&&(o=void 0),s===`oninput`&&r[a=s]&&(a=`oninputCapture`),r[a]=o}}n==`select`&&(r.multiple&&Array.isArray(r.value)&&(r.value=Ge(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),r.defaultValue!=null&&(r.value=Ge(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",mr)):t.className&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=sr,hr&&hr(e)},gr=O.__r,O.__r=function(e){gr&&gr(e),e.__c},_r=O.diffed,O.diffed=function(e){_r&&_r(e);var t=e.props,n=e.__e;n!=null&&e.type===`textarea`&&`value`in t&&t.value!==n.value&&(n.value=t.value==null?``:t.value)}}));function I(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--yr,__i:-1,__u:0,__source:i,__self:a};if(typeof e==`function`&&(o=e.defaultProps))for(s in o)c[s]===void 0&&(c[s]=o[s]);return O.vnode&&O.vnode(l),l}var yr,br=e((()=>{Tt(),yr=0,Array.isArray}));function xr(e,t,n=!1){if(!e)return null;let r=t(e);if(r instanceof Promise)return(async()=>{if(await r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=await gi(i,t,n);if(e)return e;i=n?null:i.sibling}return null})();if(r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=hi(i,t,n);if(e)return e;i=n?null:i.sibling}return null}var Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do=e((()=>{Sr=null,Cr=()=>{if(Sr!==null)return Sr;try{Sr=window.matchMedia(`(color-gamut: p3)`).matches}catch{Sr=!1}return Sr},wr=Cr(),Tr=e=>wr?`color(display-p3 0.84 0.19 0.78 / ${e})`:`rgba(210, 57, 192, ${e})`,Er=[`/components/ui/`,`/packages/ui/`,`/design-system/`,`/design-systems/`,`/primitives/`],Dr=5e3,Or=8e3,kr=1e4,Ar=.5,Tr(.4),Tr(.05),Tr(.5),Tr(.08),Tr(.15),jr=[`id`,`class`,`aria-label`,`data-testid`,`role`,`name`,`title`],Mr=new Set([`id`,`data-testid`,`aria-label`,`href`,`src`,`alt`,`type`,`name`,`placeholder`,`role`,`for`,`action`,`method`,`title`,`disabled`,`checked`,`readonly`,`required`,`selected`,`open`]),Nr=new Set([`a`,`button`,`code`,`label`,`option`,`pre`,`summary`,`text`]),Pr=new Set([`script`,`style`,`template`,`noscript`]),new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`]),Fr=`data-react-grab-frozen`,Ir=`data-react-grab-same-origin-frame`,Lr=new Set(`display.position.top.right.bottom.left.z-index.overflow.overflow-x.overflow-y.width.height.min-width.min-height.max-width.max-height.margin-top.margin-right.margin-bottom.margin-left.padding-top.padding-right.padding-bottom.padding-left.flex-direction.flex-wrap.justify-content.align-items.align-self.align-content.flex-grow.flex-shrink.flex-basis.order.gap.row-gap.column-gap.grid-template-columns.grid-template-rows.grid-template-areas.font-family.font-size.font-weight.font-style.line-height.letter-spacing.text-align.text-decoration-line.text-decoration-style.text-transform.text-overflow.text-shadow.white-space.word-break.overflow-wrap.vertical-align.color.background-color.background-image.background-position.background-size.background-repeat.border-top-width.border-right-width.border-bottom-width.border-left-width.border-top-style.border-right-style.border-bottom-style.border-left-style.border-top-color.border-right-color.border-bottom-color.border-left-color.border-top-left-radius.border-top-right-radius.border-bottom-left-radius.border-bottom-right-radius.box-shadow.opacity.transform.filter.backdrop-filter.object-fit.object-position`.split(`.`)),Rr=e=>typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===Node.ELEMENT_NODE,zr=e=>Rr(e)&&e.namespaceURI===`http://www.w3.org/1999/xhtml`,Br=e=>zr(e)&&e.tagName===`IFRAME`,Vr=new WeakMap,Hr=e=>{let t=Number.parseFloat(e);return Number.isFinite(t)?t:0},Ur=e=>{let t=performance.now(),n=Vr.get(e);if(n&&t-n.timestamp<16)return n.metrics;let r=e.ownerDocument.defaultView?.getComputedStyle(e),i;if(!r)i={contentOffsetX:e.clientLeft,contentOffsetY:e.clientTop,height:e.offsetHeight,width:e.offsetWidth};else{let t=Hr(r.borderLeftWidth),n=Hr(r.borderRightWidth),a=Hr(r.borderTopWidth),o=Hr(r.borderBottomWidth),s=Hr(r.paddingLeft),c=Hr(r.paddingRight),l=Hr(r.paddingTop),u=Hr(r.paddingBottom),d=Hr(r.width),f=Hr(r.height),p=t+n+s+c,m=a+o+l+u,h=r.boxSizing===`border-box`?d:d+p,g=r.boxSizing===`border-box`?f:f+m;i={contentOffsetX:t+s,contentOffsetY:a+l,height:g>0?g:e.offsetHeight,width:h>0?h:e.offsetWidth}}return Vr.set(e,{metrics:i,timestamp:t}),i},Wr=(e,t)=>t>0?e/t:1,Gr=e=>{if(!e)return null;try{return e.frameElement}catch{return null}},Kr=(e,t,n)=>{let r=t,i=n,a=1,o=1,s=e;for(;s&&s!==window;){let e=Gr(s);if(!e||!Br(e))break;let t=e.getBoundingClientRect(),n=Ur(e),c=Wr(t.width,n.width),l=Wr(t.height,n.height);r=t.left+(n.contentOffsetX+r)*c,i=t.top+(n.contentOffsetY+i)*l,a*=c,o*=l,s=e.ownerDocument.defaultView}return{x:r,y:i,scaleX:a,scaleY:o}},qr=e=>{let t=e.ownerDocument.defaultView;return t?t.getComputedStyle(e):window.getComputedStyle(e)},Jr=e=>Object.assign(e,{[Symbol.dispose]:e}),Yr=`bippy-0.6.1`,Xr=Object.defineProperty,Zr=Object.prototype.hasOwnProperty,Qr=()=>{},$r=e=>{try{Function.prototype.toString.call(e).indexOf(`^_^`)>-1&&setTimeout(()=>{throw Error(`React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build`)})}catch{}},ei=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&`getFiberRoots`in e),ti=!1,ri=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>ti?!0:(e&&typeof e.inject==`function`&&(ni=e.inject.toString()),!!ni?.includes(`(injected)`)),ii=new Set,ai=new Set,oi=e=>{e&&ii.add(e);let t=new Map,n=0,r={_instrumentationIsActive:!1,_instrumentationSource:Yr,checkDCE:$r,hasUnsupportedRendererAttached:!1,inject(e){let i=++n;return t.set(i,e),ai.add(e),r._instrumentationIsActive||(r._instrumentationIsActive=!0,ii.forEach(e=>e())),i},on:Qr,onCommitFiberRoot:Qr,onCommitFiberUnmount:Qr,onPostCommitFiberRoot:Qr,renderers:t,supportsFiber:!0,supportsFlight:!0};try{Xr(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`,{configurable:!0,enumerable:!0,get(){return r},set(t){if(t&&typeof t==`object`){let n=r.renderers;r=t,n.size>0&&(n.forEach((e,n)=>{ai.add(e),t.renderers.set(n,e)}),si(e))}}});let t=window.hasOwnProperty,n=!1;Xr(window,`hasOwnProperty`,{configurable:!0,value:function(...e){try{if(!n&&e[0]===`__REACT_DEVTOOLS_GLOBAL_HOOK__`)return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,n=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{si(e)}return r},si=e=>{e&&ii.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=$r,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=Yr,t._instrumentationIsActive=!1;let e=ei(t);if(e||(t.on=Qr),t.renderers.size){t._instrumentationIsActive=!0,ii.forEach(e=>e());return}let n=t.inject,r=ri(t);r&&!e&&(ti=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=n(e);return ai.add(e),r&&t.renderers.set(i,e),t._instrumentationIsActive=!0,ii.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||ri())&&e?.()}catch{}},ci=()=>Zr.call(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`),li=e=>ci()?(si(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):oi(e),ui=()=>!!(typeof window<`u`&&(window.document?.createElement||window.navigator?.product===`ReactNative`)),(()=>{try{ui()&&li()}catch{}})(),di=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},fi=e=>!e||typeof e!=`object`?!1:`pendingProps`in e&&!(`containerInfo`in e),pi=e=>{let t=e.memoizedProps,n=e.alternate?.memoizedProps||{},r=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(r&1)==1;default:return e.alternate?n!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},mi=e=>{switch(e.tag){case 18:return!0;case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t=typeof e.type==`object`&&e.type!==null?e.type.$$typeof:e.type;if(typeof t==`symbol`)return t.description===`react.concurrent_mode`||t.description===`react.async_mode`;switch(t){case 60111:case`Symbol(react.concurrent_mode)`:case`Symbol(react.async_mode)`:return!0;default:return!1}}}},hi=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=hi(r,t,n);if(e)return e;r=n?null:r.sibling}return null},gi=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=await gi(r,t,n);if(e)return e;r=n?null:r.sibling}return null},_i=e=>{let t=e;return typeof t==`function`?t:typeof t==`object`&&t?_i(t.type||t.render):null},vi=e=>{let t=e;if(typeof t==`string`)return t;if(typeof t!=`function`&&!(typeof t==`object`&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=_i(t);return r&&(r.displayName||r.name)||null},yi=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||ei(e)||ri(e)},bi=new Set,xi=e=>{let t=e.alternate;if(!t)return e;if(t.actualStartTime&&e.actualStartTime)return t.actualStartTime>e.actualStartTime?t:e;for(let t of bi){let n=xr(t.current,t=>{if(t===e)return!0});if(n)return n}return e},Si=0,Ci=new WeakMap,wi=(e,t=Si++)=>{Ci.set(e,t)},Ti=e=>{let t=Ci.get(e);return t===void 0&&e.alternate&&(t=Ci.get(e.alternate)),t===void 0&&(t=Si++,wi(e,t)),t},Ei=(e,t,n)=>{let r=t;for(;r!=null;){if(Ci.has(r)||Ti(r),!mi(r)&&pi(r)&&e(r,`mount`),r.tag===13)if(r.memoizedState!==null){let t=r.child,n=t?t.sibling:null;if(n){let t=n.child;t!==null&&Ei(e,t,!1)}}else{let t=null;r.child!==null&&(t=r.child.child),t!==null&&Ei(e,t,!1)}else r.child!=null&&Ei(e,r.child,!0);r=n?r.sibling:null}},Di=(e,t,n,r)=>{if(Ci.has(t)||Ti(t),!n)return;Ci.has(n)||Ti(n);let i=t.tag===13,a=!mi(t);a&&pi(t)&&e(t,`update`);let o=i&&n.memoizedState!==null,s=i&&t.memoizedState!==null;if(o&&s){let r=t.child?.sibling??null,i=n.child?.sibling??null;r!==null&&i!==null&&Di(e,r,i,t)}else if(o&&!s){let n=t.child;n!==null&&Ei(e,n,!0)}else if(!o&&s){ki(e,n);let r=t.child?.sibling??null;r!==null&&Ei(e,r,!0)}else if(t.child!==n.child){let n=t.child;for(;n;){if(n.alternate){let i=n.alternate;Di(e,n,i,a?t:r)}else Ei(e,n,!1);n=n.sibling}}},Oi=(e,t)=>{(t.tag===3||!mi(t))&&e(t,`unmount`)},ki=(e,t)=>{let n=t.tag===13&&t.memoizedState!==null,r=t.child;for(n&&(r=(t.child?.sibling??null)?.child??null);r!==null;)r.return!==null&&(Oi(e,r),ki(e,r)),r=r.sibling},Ai=e=>{if(!ci())return null;let t=e;for(;t.return;)t=t.return;let n=Ri.get(t.stateNode);return n===void 0?null:li().renderers?.get(n)??null},ji=e=>Object.prototype.toString.call(e)===`[object Object]`&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null),Mi=(e,t=[])=>{if(!ji(e))return[{path:t,value:e}];let n=[];for(let r in e){let i=e[r],a=t.concat(r);ji(i)?n.push(...Mi(i,a)):n.push({path:a,value:i})}return n},Ni=new Set,Pi=new Set,Fi=new Set,Ii=new Set,Li=new WeakMap,Ri=new WeakMap,zi=e=>{let t=Li.get(e)??{};if(Li.set(e,t),!t.onCommitFiberRoot||e.onCommitFiberRoot!==t.onCommitFiberRoot){let n=e.onCommitFiberRoot,r=(t,i,a)=>{if(n?.(t,i,a),Li.get(e)?.onCommitFiberRoot===r){bi.add(i),Ri.set(i,t);for(let e of Ni)e(t,i,a)}};t.onCommitFiberRoot=r,e.onCommitFiberRoot=r}if(!t.onCommitFiberUnmount||e.onCommitFiberUnmount!==t.onCommitFiberUnmount){let n=e.onCommitFiberUnmount,r=(t,i)=>{if(n?.(t,i),Li.get(e)?.onCommitFiberUnmount===r)for(let e of Pi)e(t,i)};t.onCommitFiberUnmount=r,e.onCommitFiberUnmount=r}if(!t.onPostCommitFiberRoot||e.onPostCommitFiberRoot!==t.onPostCommitFiberRoot){let n=e.onPostCommitFiberRoot,r=(t,i)=>{if(n?.(t,i),Li.get(e)?.onPostCommitFiberRoot===r)for(let e of Fi)e(t,i)};t.onPostCommitFiberRoot=r,e.onPostCommitFiberRoot=r}if(!t.onScheduleFiberRoot||e.onScheduleFiberRoot!==t.onScheduleFiberRoot){let n=e.onScheduleFiberRoot,r=(t,i,a)=>{if(n?.(t,i,a),Li.get(e)?.onScheduleFiberRoot===r)for(let e of Ii)e(t,i,a)};t.onScheduleFiberRoot=r,e.onScheduleFiberRoot=r}},Bi=e=>{let t=li(e.onActive);t._instrumentationSource=e.name??Yr,zi(t);let{onActive:n,onCommitFiberRoot:r,onCommitFiberUnmount:i,onPostCommitFiberRoot:a,onScheduleFiberRoot:o}=e;return r&&Ni.add(r),i&&Pi.add(i),a&&Fi.add(a),o&&Ii.add(o),Jr(()=>{n&&ii.delete(n),r&&Ni.delete(r),i&&Pi.delete(i),a&&Fi.delete(a),o&&Ii.delete(o)})},Vi=new Set,Hi=e=>e.startsWith(`__reactContainer$`)||e.startsWith(`__reactInternalInstance$`)||e.startsWith(`__reactFiber`),Ui=e=>{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t?.renderers)for(let n of t.renderers.values())try{let t=n.findFiberByHostInstance?.(e);if(t)return t}catch{}if(typeof e==`object`&&e){if(`_reactRootContainer`in e)return e._reactRootContainer?._internalRoot?.current?.child;let t=e.__internalInstanceHandle??e._internalInstanceHandle;if(fi(t))return t;let n=e;for(let e of Vi){let t=n[e];if(t)return t}for(let e of Object.keys(n))if(Hi(e))return Vi.add(e),n[e]||null;for(let t of bi){if(Ai(t.current)?.findFiberByHostInstance)continue;let n=xr(t.current,t=>t.stateNode===e);if(n)return n}}return null},Wi=new WeakMap,Gi=e=>Wi.get(e)??null,Ki=e=>Gi(e)?.getFiber()??Ui(e),qi=e=>{let t=e.ownerDocument?.defaultView;return!!(t&&e instanceof t.ShadowRoot)},Ji=class extends Error{constructor(e,t){super(e,t),this.name=`ReactGrabError`}},Yi=class extends Ji{constructor(){super(`Can't generate CSS selector for non-element node type.`),this.name=`NonElementNodeError`}},Xi=class extends Ji{constructor(e){super(`Timeout: Can't find a unique selector after ${e}ms`),this.name=`SelectorTimeoutError`,this.timeoutMs=e}},Zi=class extends Ji{constructor(){super(`Selector was not found.`),this.name=`SelectorNotFoundError`}},Qi=e=>Gi(e)?.getTagName()??(e.tagName||``).toLowerCase(),$i=e=>typeof e==`object`&&!!e&&`nodeType`in e&&e.nodeType===9,ea=e=>{if(e.assignedSlot)return e.assignedSlot;if(e.parentElement)return e.parentElement;let t=e.getRootNode();return qi(t)?t.host:$i(t)?Gr(t.defaultView):null},ta=(e,t)=>{let n=Gi(e)?.hostElement??e;for(;n;){if(n===t)return!0;n=ea(n)}return!1},na=null,ra=e=>na?e?ta(e,na):!1:!0,ia=typeof window<`u`,aa=e=>0,oa=e=>{},sa=ia?(Object.getOwnPropertyDescriptor(Window.prototype,`requestAnimationFrame`)?.value??window.requestAnimationFrame).bind(window):aa,ca=ia?(Object.getOwnPropertyDescriptor(Window.prototype,`cancelAnimationFrame`)?.value??window.cancelAnimationFrame).bind(window):oa,la=e=>{try{return e.contentDocument}catch{return null}},ua=(e,t,n)=>{let r=e.getBoundingClientRect(),i=Ur(e),a=Wr(r.width,i.width),o=Wr(r.height,i.height);return{x:(t-r.left)/a-i.contentOffsetX,y:(n-r.top)/o-i.contentOffsetY}},da=(e,t,n)=>{let r=e.elementFromPoint(t,n);for(;r;){let e=r.shadowRoot?.elementFromPoint(t,n);if(e&&e!==r){r=e;continue}if(Br(r)){let e=la(r);if(!e)return r;let i=ua(r,t,n);return da(e,i.x,i.y)??r}return r}return null},fa=e=>{let t=e;for(;t;){if(t.hasAttribute(`data-react-grab-ignore`))return!0;t=ea(t)}return!1},pa=typeof Element<`u`&&typeof Element.prototype.checkVisibility==`function`,ma={checkOpacity:!0,checkVisibilityCSS:!0,opacityProperty:!0,visibilityProperty:!0},ha={checkVisibilityCSS:!0,visibilityProperty:!0},ga=(e,t)=>{if(pa&&!t)return e.checkVisibility(ma)?!0:e.checkVisibility(ha)?qr(e).opacity!==`0`:!1;let n=t??qr(e);return n.display!==`none`&&n.visibility!==`hidden`&&n.opacity!==`0`},_a=e=>{let t=Qi(e);return t===`html`||t===`body`},va=[`data-react-grab`,`data-react-grab-demo`],ya=e=>va.some(t=>e.hasAttribute(t)),ba=e=>{if(ya(e))return!0;let t=e.getRootNode();return qi(t)&&ya(t.host)},xa=e=>{let t=parseInt(e.zIndex,10);return e.pointerEvents===`none`&&e.position===`fixed`&&!isNaN(t)&&t>=2147483600},Sa=e=>{let t=e.backgroundColor;return t===`transparent`||t===`rgba(0, 0, 0, 0)`},Ca=e=>{let t=e.position;if(t!==`fixed`&&t!==`absolute`)return!1;if(Sa(e)||parseFloat(e.opacity)<.1)return!0;let n=parseInt(e.zIndex,10);return!isNaN(n)&&n>1e3},wa=new WeakMap,Ta=e=>{let t=Gi(e);if(t)return t.isConnected();if(_a(e)||ba(e)||fa(e))return!1;let n=performance.now(),r=wa.get(e);if(r&&n-r.timestamp<50)return r.isVisible;if(!ga(e))return wa.set(e,{isVisible:!1,timestamp:n}),!1;if(e.clientWidth/(e.ownerDocument.defaultView?.innerWidth??window.innerWidth)>=.9&&e.clientHeight/(e.ownerDocument.defaultView?.innerHeight??window.innerHeight)>=.9){let t=qr(e);if(xa(t)||Ca(t))return!1}return wa.set(e,{isVisible:!0,timestamp:n}),!0},Ea=e=>{if(e===`transparent`)return!0;let t=e.lastIndexOf(`/`);if(t>=0)return Number.parseFloat(e.slice(t+1))===0;if(!e.startsWith(`rgba(`))return!1;let n=e.lastIndexOf(`,`);return n>=0&&Number.parseFloat(e.slice(n+1))===0},Da=e=>{let t=e.ownerDocument.defaultView?.getComputedStyle?.(e);if(!t)return!1;let n=t.backgroundClip!==`text`&&(t.backgroundImage!==`none`||!Ea(t.backgroundColor)),r=t.borderTopStyle!==`none`&&t.borderTopWidth!==`0px`||t.borderRightStyle!==`none`&&t.borderRightWidth!==`0px`||t.borderBottomStyle!==`none`&&t.borderBottomWidth!==`0px`||t.borderLeftStyle!==`none`&&t.borderLeftWidth!==`0px`;return n||r||t.boxShadow!==`none`||t.outlineStyle!==`none`},Oa=new Set([`A`,`AUDIO`,`BUTTON`,`CANVAS`,`DETAILS`,`EMBED`,`IFRAME`,`IMG`,`INPUT`,`METER`,`OBJECT`,`OPTION`,`PROGRESS`,`SELECT`,`SUMMARY`,`SVG`,`TEXTAREA`,`VIDEO`]),ka=new Set([`button`,`checkbox`,`combobox`,`gridcell`,`link`,`listbox`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`scrollbar`,`searchbox`,`slider`,`spinbutton`,`switch`,`tab`,`textbox`,`treeitem`]),Aa=new Set(`A.ABBR.B.BDI.BDO.BR.CITE.CODE.DATA.DEL.DFN.EM.I.INS.KBD.MARK.Q.S.SAMP.SMALL.SPAN.STRONG.SUB.SUP.TIME.U.VAR.WBR`.split(`.`)),ja=new WeakMap,Ma=new WeakMap,Na=(e,t,n)=>(ja.set(e,t),Ma.set(e,n),t),Pa=e=>Oa.has(e.tagName)||ka.has(e.getAttribute(`role`)??``)||zr(e)&&e.isContentEditable,Fa=e=>{let t=performance.now(),n=Ma.get(e);if(n!==void 0&&t-n<16)return ja.get(e)??null;if(Pa(e)||e.childNodes.length>64)return Na(e,null,t);let r=[],i=[],a=0;for(let t=e.childNodes.length-1;t>=0;--t)i.push(e.childNodes[t]);for(;i.length>0;){if(a+=1,a>64)return Na(e,null,t);let n=i.pop();if(n){if(n.nodeType===Node.TEXT_NODE){if(n.textContent?.trim()&&(r.push(n),r.length>32))return Na(e,null,t);continue}if(!Rr(n)||!Aa.has(n.tagName)||a+i.length+n.childNodes.length>64)return Na(e,null,t);for(let e=n.childNodes.length-1;e>=0;--e)i.push(n.childNodes[e])}}if(r.length===0||Da(e))return Na(e,null,t);try{let n=e.ownerDocument.createRange(),i=Kr(e.ownerDocument.defaultView,0,0),a=[];for(let o of r){n.selectNodeContents(o);let r=n.getClientRects();if(a.length+r.length>64)return Na(e,null,t);for(let e=0;e<r.length;e+=1){let t=r[e],n=t.width*i.scaleX,o=t.height*i.scaleY;!Number.isFinite(t.left)||!Number.isFinite(t.top)||!Number.isFinite(n)||!Number.isFinite(o)||n<=0||o<=0||a.push({borderRadius:`0px`,height:o,width:n,x:i.x+t.left*i.scaleX,y:i.y+t.top*i.scaleY})}}return Na(e,a.length>0?a:null,t)}catch{return Na(e,null,t)}},Ia=(e,t,n)=>{let r=Fa(e);if(!r)return!0;for(let e of r)if(t>=e.x&&t<=e.x+e.width&&n>=e.y&&n<=e.y+e.height)return!0;return!1},La=(e,t,n,r,i)=>{let a=!0;for(let o of e.elementsFromPoint(t,n)){if(fa(o)&&(a=!1),!ra(o))continue;let s=o.shadowRoot;if(a&&s&&s!==e){let e=La(s,t,n,r,i);if(e)return e}if(a&&Br(o)){let e=la(o);if(e){let a=ua(o,t,n),s=La(e,a.x,a.y,r,i);if(s)return s}}if(Ta(o)&&Ia(o,r,i))return o}return null},Ra=(e,t,n,r)=>{let i=e.elementsFromPoint(t,n),a=!0;for(let o of i){if(fa(o)&&(a=!1),a&&o.shadowRoot&&o.shadowRoot!==e&&Ra(o.shadowRoot,t,n,r),a&&Br(o)){let e=la(o);if(e){let i=ua(o,t,n);Ra(e,i.x,i.y,r)}}r.add(o)}},`${Ir}`,za=(e,t)=>{if(e.length!==0)throw e.length===1?e[0]:AggregateError(e,t)},Ba=new Set,Va=new Set,Ha=!1,Ua=(e,t)=>{if(Va.has(e))try{e.unfreeze()}catch(e){t.push(e)}finally{Va.delete(e)}},Wa=e=>{Ba.add(e);try{Ha&&e.isConnected()&&(e.freeze(),Va.add(e))}catch(t){throw Ba.delete(e),t}return()=>{let t=[];Ua(e,t),Ba.delete(e),za(t,`Unregistering renderer freeze failed`)}},Ga=new WeakMap,Ka=new WeakMap,qa=new WeakMap,Ja=e=>typeof e==`object`&&!!e,Ya=e=>typeof e==`object`&&!!e||typeof e==`function`,Xa=(e,t)=>typeof e[t]==`function`,Za=e=>Ja(e)&&Xa(e,`clone`)&&Xa(e,`premultiply`),Qa=e=>Ja(e)&&e.isObject3D===!0&&typeof e.uuid==`string`&&typeof e.name==`string`&&typeof e.type==`string`&&typeof e.visible==`boolean`&&Za(e.matrixWorld)&&Xa(e,`updateWorldMatrix`),$a=e=>Ja(e)&&e.isCamera===!0,eo=e=>Qa(e)&&e.isScene===!0&&Array.isArray(e.children),to=e=>Ja(e)&&typeof e.tagName==`string`&&e.tagName.toLowerCase()===`canvas`&&Xa(e,`getContext`),no=e=>Ja(e)&&to(e.domElement),ro=e=>Ja(e)&&Xa(e,`set`),io=e=>Ja(e)&&Xa(e,`setFromCamera`)&&Xa(e,`intersectObjects`),ao=e=>Ja(e)&&no(e.gl)&&eo(e.scene)&&$a(e.camera)&&io(e.raycaster)&&ro(e.pointer),oo=e=>e===`always`||e===`demand`||e===`never`,so=e=>Ja(e)&&typeof e.elapsedTime==`number`,co=(e,t)=>{let n=e.getState();if(typeof n.setFrameloop!=`function`)return;let r=so(n.clock)?n.clock.elapsedTime:null;n.setFrameloop(t);let i=e.getState().clock;r!==null&&so(i)&&(i.elapsedTime=r)},lo=e=>{if(Ka.has(e))return;let t=null,n=Wa({freeze:()=>{let n=Ga.get(e);if(!n)return;let r=n.getState();if(oo(r.frameloop)&&typeof r.setFrameloop==`function`){let e=r.frameloop;co(n,`never`),t=()=>co(n,e)}},isConnected:()=>e.isConnected,unfreeze:()=>{t?.(),t=null}});Ka.set(e,n)},uo=e=>{let t=Ka.get(e);t&&(Ka.delete(e),t())},fo=e=>{let t=e.current.stateNode;if(!Ja(t)||!Ya(t.containerInfo))return null;let n=t.containerInfo,r=Reflect.get(n,`getState`);if(typeof r!=`function`)return null;let i=Reflect.apply(r,n,[]);return ao(i)?()=>{let e=Reflect.apply(r,n,[]);return ao(e)?e:i}:null},po=e=>{let t=qa.get(e);t&&(qa.delete(e),Ga.get(t.canvas)===t.root&&(Ga.delete(t.canvas),uo(t.canvas)))},mo=e=>{let t=fo(e);if(!t){po(e);return}let n=t().gl.domElement;if(!n.isConnected||!e.current.child){po(e);return}let r=qa.get(e);r&&r.canvas!==n&&(po(e),r=void 0),r?(r.root.getState=t,r.root.selectableObjects=null):(r={canvas:n,root:{getState:t,selectableObjects:null}},qa.set(e,r)),Ga.set(n,r.root),lo(n)},Bi({name:`react-grab-three-selection`,onCommitFiberRoot:(e,t)=>mo(t)}),ho=!1,go=null,_o=!1,vo=new Map,yo=-1,bo=new WeakSet,xo=new WeakSet,So=new WeakMap,Co=new Map,wo=new Map,To=e=>{if(go===e&&(_o=!0),bo.has(e))return!0;if(!ho&&go===e){let t=(So.get(e)??0)+1;return So.set(e,t),t<4?!1:(bo.add(e),!0)}return!ho||!(`gsapVersions`in window)||!(Error().stack??``).includes(`_tick`)?!1:(bo.add(e),xo.add(e),!0)},typeof window<`u`&&(window.requestAnimationFrame=e=>{let t=To(e);if(ho&&t){let t=yo--;return vo.set(t,e),t}let n=sa(t=>{if(ho&&To(e)){let t=yo--;vo.set(t,e),Co.set(n,t);return}let r=go,i=_o;go=e,_o=!1;try{e(t)}finally{let t=_o;go=r,_o=i,!t&&!xo.has(e)&&(bo.delete(e),So.delete(e))}});return n},window.cancelAnimationFrame=e=>{if(vo.has(e)){vo.delete(e);return}let t=wo.get(e);if(t!==void 0){ca(t.nativeId),wo.delete(e);return}let n=Co.get(e);if(n!==void 0){vo.delete(n),Co.delete(e);return}ca(e)}),`${Fr}${Fr}`,Eo=new WeakMap,Bi({name:`react-grab-freeze-updates`,onCommitFiberRoot:(e,t)=>{let n=li().renderers.get(e);n&&Eo.set(t,n)}})}));function Oo(e,t){let n=0,r=0,i=0;do i=as[e.next()],n|=(i&31)<<r,r+=5;while(i&32);let a=n&1;return n>>>=1,a&&(n=-2147483648|-n),t+n}function ko(e,t){return e.pos>=t?!1:e.peek()!==ns}function Ao(e){let{length:t}=e,n=new os(e),r=[],i=0,a=0,o=0,s=0,c=0;do{let e=n.indexOf(`;`),t=[],l=!0,u=0;for(i=0;n.pos<e;){let r;i=Oo(n,i),i<u&&(l=!1),u=i,ko(n,e)?(a=Oo(n,a),o=Oo(n,o),s=Oo(n,s),ko(n,e)?(c=Oo(n,c),r=[i,a,o,s,c]):r=[i,a,o,s]):r=[i],t.push(r),n.pos++}l||jo(t),r.push(t),n.pos=e+1}while(n.pos<=t);return r}function jo(e){e.sort(Mo)}function Mo(e,t){return e[0]-t[0]}var No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,L,oc,R,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd=e((()=>{Do(),No=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,Po=[`rsc://`,`file:///`,`webpack-internal://`,`webpack://`,`node:`,`turbopack://`,`metro://`,`/app-pages-browser/`,`/(app-pages-browser)/`],Fo=[`rsc://`,`about://React/`],Io=[`<anonymous>`,`eval`,``],Lo=/\.(jsx|tsx|ts|js)$/,Ro=/(\.min|bundle|chunk|vendor|vendors|runtime|polyfill|polyfills)\.(js|mjs|cjs)$|(chunk|bundle|vendor|vendors|runtime|polyfill|polyfills|framework|app|main|index)[-_.][A-Za-z0-9_-]{4,}\.(js|mjs|cjs)$|[\da-f]{8,}\.(js|mjs|cjs)$|[-_.][\da-f]{20,}\.(js|mjs|cjs)$|\/dist\/|\/build\/|\/.next\/|\/out\/|\/node_modules\/|\.webpack\.|\.vite\.|\.turbopack\./i,zo=/^\?[\w~.-]+(?:=[^&#]*)?(?:&[\w~.-]+(?:=[^&#]*)?)*$/,Bo=/\(at [^)]+\)$/,Vo=[`react_stack_bottom_frame`,`react-stack-bottom-frame`],Ho=/(^|@)\S+:\d+/,Uo=/^\s*at .*(\S+:\d+|\(native\))/m,Wo=/^(eval@)?(\[native code\])?$/,Go=(e,t)=>{if(t?.includeInElement!==!1){let n=e.split(`
`),r=[];for(let e of n)if(/^\s*at\s+/.test(e)){let t=Jo(e,void 0)[0];t&&r.push(t)}else if(/^\s*in\s+/.test(e)){let t=e.replace(/^\s*in\s+/,``).replace(/\s*\(at .*\)$/,``);r.push({functionName:t,source:e})}else if(e.match(Ho)){let t=Yo(e,void 0)[0];t&&r.push(t)}return qo(r,t)}return e.match(Uo)?Jo(e,t):Yo(e,t)},Ko=e=>{if(!e.includes(`:`))return[e,void 0,void 0];let t=e.startsWith(`(`)&&/:\d+\)$/.test(e)?e.slice(1,-1):e,n=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);return n?[n[1],n[2]||void 0,n[3]||void 0]:[t,void 0,void 0]},qo=(e,t)=>t&&t.slice!=null?Array.isArray(t.slice)?e.slice(t.slice[0],t.slice[1]):e.slice(0,t.slice):e,Jo=(e,t)=>qo(e.split(`
`).filter(e=>!!e.match(Uo)),t).map(e=>{let t=e;t.includes(`(eval `)&&(t=t.replace(/eval code/g,`eval`).replace(/(\(eval at [^()]*)|(,.*$)/g,``));let n=t.replace(/^\s+/,``).replace(/\(eval code/g,`(`).replace(/^.*?\s+/,``),r=n.match(/ (\(.+\)$)/);n=r?n.replace(r[0],``):n;let i=Ko(r?r[1]:n);return{functionName:r&&n||void 0,fileName:[`eval`,`<anonymous>`].includes(i[0])?void 0:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}),Yo=(e,t)=>qo(e.split(`
`).filter(e=>!e.match(Wo)),t).map(e=>{let t=e;if(t.includes(` > eval`)&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,`:$1`)),!t.includes(`@`)&&!t.includes(`:`))return{functionName:t};{let e=/(([^\n\r"\u2028\u2029]*".[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*(?:@[^\n\r"\u2028\u2029]*"[^\n\r@\u2028\u2029]*)*(?:[\n\r\u2028\u2029][^@]*)?)?[^@]*)@/,n=t.match(e),r=n&&n[1]?n[1]:void 0,i=Ko(t.replace(e,``));return{functionName:r,fileName:i[0],lineNumber:i[1]?+i[1]:void 0,columnNumber:i[2]?+i[2]:void 0,source:t}}}),Xo=new WeakMap,Zo=e=>Vo.some(t=>e.includes(t)),Qo=e=>{let t=e.getFunctionName?.()??``;if(t)return t;let n=e.getTypeName?.()??``,r=e.getMethodName?.()??``;return n&&r?`${n}.${r}`:r},$o=e=>{let t=[];for(let n=1;n<e.length;n++){let r=e[n],i=Qo(r);if(Zo(i))return{frames:t,isTrusted:!0};if(r.isNative?.()){t.push({functionName:i||void 0});continue}let a=r.getScriptNameOrSourceURL?.()??``;!a&&r.isEval?.()&&(a=r.getEvalOrigin?.()??``),t.push({functionName:i&&i!==`<anonymous>`?i:void 0,fileName:a&&a!==`<anonymous>`?a:void 0,lineNumber:r.getLineNumber?.()??void 0,columnNumber:r.getColumnNumber?.()??void 0,enclosingLineNumber:r.getEnclosingLineNumber?.()??void 0,enclosingColumnNumber:r.getEnclosingColumnNumber?.()??void 0,source:`    at ${r.toString()}`})}return{frames:t,isTrusted:!1}},es=e=>{let t=-1;for(let n of Vo)if(t=e.indexOf(n),t!==-1)break;return{frames:Go(t===-1?e:e.slice(0,e.lastIndexOf(`
`,t))).slice(1),isTrusted:t!==-1}},ts=e=>{let t=Xo.get(e);if(t)return t;let n=null,r=(e,t)=>{n=$o(t);let r=`${e.name||`Error`}: ${e.message||``}`;for(let e of t)r+=`\n    at ${e.toString()}`;return r},i=Error.prepareStackTrace;Error.prepareStackTrace=r;let a;try{a=String(e.stack)}finally{Error.prepareStackTrace=i}let o=n??es(a);return Xo.set(e,o),o},ns=44,rs=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,is=new Uint8Array(64),as=new Uint8Array(128);for(let e=0;e<rs.length;e++){let t=rs.charCodeAt(e);is[e]=t,as[t]=e}os=class{constructor(e){this.pos=0,this.buffer=e}next(){return this.buffer.charCodeAt(this.pos++)}peek(){return this.buffer.charCodeAt(this.pos)}indexOf(e){let{buffer:t,pos:n}=this,r=t.indexOf(e,n);return r===-1?t.length:r}},ss=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,cs=/^data:application\/json[^,]+base64,/,ls=/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/,us=new Map,ds=new Map,fs=(e,t,n,r,i)=>{if(n<0||n>=e.length)return null;let a=e[n];if(!a||a.length===0)return null;let o=null,s=0,c=a.length-1;for(;s<=c;){let e=s+c>>1;a[e][0]<=r?(o=a[e],s=e+1):c=e-1}if(!o||o.length<4)return null;let[,l,u,d]=o;if(l===void 0||u===void 0||d===void 0)return null;let f=t[l];return f?{columnNumber:d,fileName:f,lineNumber:u+1,isIgnoreListed:i?.has(l)??!1}:null},ps=(e,t,n)=>{if(e.sections){let r=t-1,i=null;for(let t of e.sections)if(r>t.offset.line||r===t.offset.line&&n>=t.offset.column)i=t;else break;if(!i)return null;let a=r-i.offset.line,o=r===i.offset.line?n-i.offset.column:n;return fs(i.map.mappings,i.map.sources,a,o,i.map.ignoredSourceIndices)}return fs(e.mappings,e.sources,t-1,n,e.ignoredSourceIndices)},ms=(e,t)=>{let n,r=t.length;for(;r>0&&!n;){let e=t.lastIndexOf(`
`,r-1)+1,i=t.slice(e,r).match(ls);i&&(n=i[1]||i[2]),r=e-1}if(!n)return null;let i=ss.test(n);if(!(cs.test(n)||i||n.startsWith(`/`))){let t=e.split(`/`);t[t.length-1]=n,n=t.join(`/`)}return n},hs=e=>{let t=e.ignoreList??e.x_google_ignoreList;return Array.isArray(t)&&t.length>0?new Set(t):void 0},gs=e=>({file:e.file,ignoredSourceIndices:hs(e),mappings:Ao(e.mappings),names:e.names,sourceRoot:e.sourceRoot,sources:e.sources,sourcesContent:e.sourcesContent,version:3}),_s=e=>{let t=e.sections.map(({map:e,offset:t})=>({map:{...e,ignoredSourceIndices:hs(e),mappings:Ao(e.mappings)},offset:t})),n=new Set;for(let e of t)for(let t of e.map.sources)n.add(t);return{file:e.file,mappings:[],names:[],sections:t,sourceRoot:void 0,sources:Array.from(n),sourcesContent:void 0,version:3}},vs=e=>{if(!e)return!1;let t=e.trim();if(!t)return!1;let n=t.match(ss);if(!n)return!0;let r=n[0].toLowerCase();return r===`http:`||r===`https:`},ys=async(e,t=fetch)=>{if(!vs(e))return null;let n=await t(e);if(!n.ok)return null;let r=await n.text();if(!r)return null;let i=ms(e,r);if(!i||!vs(i)&&!cs.test(i))return null;let a=await t(i);if(!a.ok)return null;try{let e=await a.json();return`sections`in e?_s(e):gs(e)}catch{return null}},bs=async(e,t=!0,n)=>{if(t&&us.has(e))return us.get(e)??null;let r=t?ds.get(e):void 0;if(r)return(await r).sourceMap;let i=ys(e,n).then(e=>({sourceMap:e,isTransientFailure:!1}),()=>({sourceMap:null,isTransientFailure:!0}));t&&ds.set(e,i);let{sourceMap:a,isTransientFailure:o}=await i;return t&&(ds.delete(e),o||us.set(e,a)),a},xs=async(e,t=!0,n)=>await Promise.all(e.map(async e=>{if(!e.fileName)return e;let r=await bs(e.fileName,t,n);if(!r||typeof e.lineNumber!=`number`||typeof e.columnNumber!=`number`)return e;let i=ps(r,e.lineNumber,e.columnNumber);return i?{...e,source:i.fileName&&e.source?e.source.replace(e.fileName,i.fileName):e.source,fileName:i.fileName,lineNumber:i.lineNumber,columnNumber:i.columnNumber,isIgnoreListed:i.isIgnoreListed,isSymbolicated:!0}:e})),Ss=e=>e._debugStack instanceof Error&&typeof e._debugStack?.stack==`string`,Cs=e=>typeof e.tag==`number`,ws=e=>e._debugOwner,Ts=e=>{let t=null;if(xr(e,n=>{if(n===e)return!1;let r=n._debugOwner;return(r===e||e.alternate!==null&&r===e.alternate)&&n._debugStack instanceof Error?(t=n._debugStack,!0):!1}),!t)return null;let{frames:n,isTrusted:r}=ts(t);if(!r)return null;for(let e=n.length-1;e>=0;e--){let t=n[e];if(t.fileName)return{...t,lineNumber:t.enclosingLineNumber||t.lineNumber,columnNumber:t.enclosingColumnNumber||t.columnNumber}}return null},Es=()=>{let e=li();for(let t of[...Array.from(ai),...Array.from(e.renderers.values())]){let e=t.currentDispatcherRef;if(e&&typeof e==`object`)return`H`in e?e.H:e.current}return null},Ds=e=>{for(let t of ai){let n=t.currentDispatcherRef;n&&typeof n==`object`&&(`H`in n?n.H=e:n.current=e)}},Os=e=>`\n    in ${e}`,ks=(e,t)=>{let n=Os(e);return t&&(n+=` (at ${t})`),n},As=!1,js=new WeakMap,Ms=(e,t)=>{if(!e||As)return``;let n=js.get(e);if(n!==void 0)return n;let r=Error.prepareStackTrace;Error.prepareStackTrace=void 0,As=!0;let i=Es();Ds(null);let a=console.error,o=console.warn;console.error=()=>{},console.warn=()=>{};try{let n={DetermineComponentFrameRoot(){let n;try{if(t){let t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){n=e}let t=e();t&&typeof t.catch==`function`&&t.catch(()=>{})}}catch(e){if(e instanceof Error&&n instanceof Error&&typeof e.stack==`string`)return[e.stack,n.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`,Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,`name`)?.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});let[r,i]=n.DetermineComponentFrameRoot();if(r&&i){let t=r.split(`
`),n=i.split(`
`),a=0,o=0;for(;a<t.length&&!t[a].includes(`DetermineComponentFrameRoot`);)a++;for(;o<n.length&&!n[o].includes(`DetermineComponentFrameRoot`);)o++;if(a===t.length||o===n.length)for(a=t.length-1,o=n.length-1;a>=1&&o>=0&&t[a]!==n[o];)o--;for(;a>=1&&o>=0;a--,o--)if(t[a]!==n[o]){if(a!==1||o!==1)do if(a--,o--,o<0||t[a]!==n[o]){let n=`\n${t[a].replace(` at new `,` at `)}`,r=vi(e);return r&&n.includes(`<anonymous>`)&&(n=n.replace(`<anonymous>`,r)),js.set(e,n),n}while(a>=1&&o>=0);break}}}finally{As=!1,Error.prepareStackTrace=r,Ds(i),console.error=a,console.warn=o}let s=e?vi(e):``,c=s?Os(s):``;return js.set(e,c),c},Ns=(e,t)=>{let n=e.tag,r=``;switch(n){case 28:r=Os(`Activity`);break;case 1:r=Ms(e.type,!0);break;case 11:r=Ms(e.type.render,!1);break;case 0:case 15:r=Ms(e.type,!1);break;case 5:case 26:case 27:r=Os(e.type);break;case 16:r=Os(`Lazy`);break;case 13:r=e.child!==t&&t!==null?Os(`Suspense Fallback`):Os(`Suspense`);break;case 19:r=Os(`SuspenseList`);break;case 30:r=Os(`ViewTransition`);break;default:return``}return r},Ps=e=>{try{let t=``,n=e,r=null;do{t+=Ns(n,r);let e=n._debugInfo;if(e&&Array.isArray(e))for(let n=e.length-1;n>=0;n--){let r=e[n];typeof r.name==`string`&&(t+=ks(r.name,r.env))}r=n,n=n.return}while(n);return t}catch(e){return e instanceof Error?`\nError generating stack: ${e.message}\n${e.stack}`:``}},Fs=e=>{let t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;let n=e;if(!n)return``;Error.prepareStackTrace=t,n.startsWith(`Error: react-stack-top-frame
`)&&(n=n.slice(29));let r=n.indexOf(`
`);r!==-1&&(n=n.slice(r+1));let i=Math.max(n.indexOf(`react_stack_bottom_frame`),n.indexOf(`react-stack-bottom-frame`));if(i!==-1&&(i=n.lastIndexOf(`
`,i)),i!==-1)n=n.slice(0,i);else return``;return n},Is=e=>!!(e.functionName&&e.fileName&&Bs(e.fileName)),Ls=(e,t)=>e.fileName===t.fileName&&e.lineNumber===t.lineNumber&&e.columnNumber===t.columnNumber,Rs=e=>{let t=new Map;for(let n of e)for(let e of n.stackFrames){if(!Is(e))continue;let n=e.functionName,r=t.get(n)??[];r.some(t=>Ls(t,e))||(r.push(e),t.set(n,r))}return t},zs=(e,t,n)=>{if(!e.functionName)return{...e,isServer:!0};let r=t.get(e.functionName);if(!r||r.length===0)return{...e,isServer:!0};let i=n.get(e.functionName)??0,a=r[i%r.length];return n.set(e.functionName,i+1),{...e,isServer:!0,fileName:a.fileName,lineNumber:a.lineNumber,columnNumber:a.columnNumber,source:e.source?.replace(`(at Server)`,`(${a.fileName}:${a.lineNumber}:${a.columnNumber})`)}},Bs=e=>Fo.some(t=>e.startsWith(t)),Vs=e=>!e.isServer&&e.fileName&&Bs(e.fileName)?{...e,isServer:!0}:e,Hs=e=>{let t=[],n=e;for(;n;)if(Cs(n)){let e=n;if(n=ws(e),n&&Ss(e)){let{frames:n,isTrusted:r}=ts(e._debugStack);if(r)for(let e of n)t.push(Vs(e))}}else{let e=n;if(n=e.owner,n&&e.debugStack instanceof Error)for(let n of ts(e.debugStack).frames)t.push({...n,isServer:!0})}return t},Us=e=>{let t=[];return xr(e,e=>{if(!Ss(e))return;let n=typeof e.type==`string`?e.type:vi(e.type)||`<anonymous>`;t.push({componentName:n,stackFrames:Go(Fs(e._debugStack?.stack))})},!0),t},Ws=async(e,t=!0,n)=>{let r=Us(e),i=Go(Ps(e)),a=Rs(r),o=new Map;return xs(i.map(e=>(e.source?.includes(`(at Server)`)??!1)||e.source!=null&&Bo.test(e.source)?zs(e,a,o):e).filter((e,t,n)=>{if(t===0)return!0;let r=n[t-1];return e.functionName!==r.functionName}),t,n)},Gs=e=>!!e.fileName&&!e.isIgnoreListed,Ks=async(e,t=!0,n)=>{let r=Hs(e);if(r.length>0){let i=Ts(e)??{};i.functionName=vi(e.type)??i.functionName;let a=await xs([i,...r],t,n);if(a.some((e,t)=>t>0&&Gs(e)))return a}return Ws(e,t,n)},qs=e=>{let t=e._debugSource;return t?typeof t==`object`&&!!t&&`fileName`in t&&typeof t.fileName==`string`&&`lineNumber`in t&&typeof t.lineNumber==`number`:!1},Js=e=>e.fileName?{fileName:e.fileName,lineNumber:e.lineNumber,columnNumber:e.columnNumber,functionName:e.functionName}:null,Ys=e=>{if(!Ss(e))return null;let{frames:t,isTrusted:n}=ts(e._debugStack);if(!n)return null;for(let e of t)if(e.fileName)return e;return null},Xs=async(e,t=!0,n)=>{if(qs(e))return e._debugSource||null;let r=Ys(e)??Ts(e);if(r){let[e]=await xs([r],t,n),i=Js(e);if(i)return i}let i=await Ws(e,t,n);for(let e of i)if(e.fileName)return Js(e);return null},Zs=e=>e.split(`/`).filter(Boolean).length,Qs=e=>e.split(`/`).filter(Boolean)[0]??null,$s=e=>{let t=e.indexOf(`/`,1);if(t===-1||Zs(e.slice(0,t))!==1)return e;let n=e.slice(t);if(!Lo.test(n)||Zs(n)<2)return e;let r=Qs(n);return!r||r.startsWith(`@`)||r.length>4?e:n},ec=e=>{if(!e||Io.some(t=>t===e))return``;let t=e,n=t.startsWith(`http://`)||t.startsWith(`https://`);if(n)try{t=new URL(t).pathname}catch{}if(n&&(t=$s(t)),t.startsWith(`about://React/`)){let e=t.slice(14),n=e.indexOf(`/`),r=e.indexOf(`:`);t=n!==-1&&(r===-1||n<r)?e.slice(n+1):e}let r=!0;for(;r;){r=!1;for(let e of Po)if(t.startsWith(e)){t=t.slice(e.length),e===`file:///`&&(t=`/${t.replace(/^\/+/,``)}`),r=!0;break}}if(No.test(t)){let e=t.match(No);e&&(t=t.slice(e[0].length))}if(t.startsWith(`//`)){let e=t.indexOf(`/`,2);t=e===-1?``:t.slice(e)}let i=t.indexOf(`?`);if(i!==-1){let e=t.slice(i);zo.test(e)&&(t=t.slice(0,i))}return t},tc=e=>{let t=ec(e);return!(!t||!Lo.test(t)||Ro.test(t))},nc=Symbol.for(`react.context`),rc=[],ic=null,ac=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render."),L=()=>{let e=ic;return e!==null&&(ic=e.next),e},oc=e=>e._currentValue,R=(e,t,n,r=null)=>{rc.push({displayName:r,primitive:e,stackError:Error(),value:t,dispatcherHookName:n})},sc=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.then==`function`){let e=t;switch(e.status){case`fulfilled`:return R(`Promise`,e.value,`Use`),e.value;case`rejected`:throw e.reason}throw R(`Unresolved`,e,`Use`),ac}if(t.$$typeof===nc&&`_currentValue`in t){let e=t,n=oc(e);return R(`Context (use)`,n,`Use`,e.displayName||`Context`),n}}throw Error(`An unsupported type was passed to use(): `+String(e))},cc=e=>{let t=oc(e);return R(`Context`,t,`Context`,e.displayName||null),t},lc=e=>{let t=L(),n=t===null?typeof e==`function`?e():e:t.memoizedState;return R(`State`,n,`State`),[n,()=>{}]},uc=(e,t,n)=>{let r=L(),i=r===null?n===void 0?t:n(t):r.memoizedState;return R(`Reducer`,i,`Reducer`),[i,()=>{}]},dc=e=>{let t=L(),n=t===null?{current:e}:t.memoizedState;return R(`Ref`,n.current,`Ref`),n},fc=()=>{let e=L();return R(`CacheRefresh`,e===null?()=>{}:e.memoizedState,`CacheRefresh`),()=>{}},pc=e=>{L(),R(`LayoutEffect`,e,`LayoutEffect`)},mc=e=>{L(),R(`InsertionEffect`,e,`InsertionEffect`)},hc=e=>{L(),R(`Effect`,e,`Effect`)},gc=e=>{L();let t;typeof e==`object`&&e&&`current`in e&&(t=e.current),R(`ImperativeHandle`,t,`ImperativeHandle`)},_c=(e,t)=>{R(`DebugValue`,typeof t==`function`?t(e):e,`DebugValue`)},vc=e=>{let t=L();return R(`Callback`,t===null?e:t.memoizedState[0],`Callback`),e},yc=e=>{let t=L(),n=t===null?e():t.memoizedState[0];return R(`Memo`,n,`Memo`),n},bc=(e,t)=>{let n=L();L();let r=n===null?t():n.memoizedState;return R(`SyncExternalStore`,r,`SyncExternalStore`),r},xc=()=>{let e=L();L();let t=e===null?!1:e.memoizedState;return R(`Transition`,t,`Transition`),[t,()=>{}]},Sc=e=>{let t=L(),n=t===null?e:t.memoizedState;return R(`DeferredValue`,n,`DeferredValue`),n},Cc=()=>{let e=L(),t=e===null?``:e.memoizedState;return R(`Id`,t,`Id`),t},wc=e=>[],Tc=e=>{let t=L(),n=t===null?e:t.memoizedState;return R(`Optimistic`,n,`Optimistic`),[n,()=>{}]},Ec=(e,t)=>{let n,r=null;if(e!==null){let t=e.memoizedState;if(typeof t==`object`&&t&&`then`in t&&typeof t.then==`function`){let e=t;switch(e.status){case`fulfilled`:n=e.value;break;case`rejected`:r=e.reason;break;default:r=ac,n=e}}else n=t}else n=t;return{value:n,error:r}},Dc=e=>(t,n)=>{let r=L();L(),L();let i=Error(),{value:a,error:o}=Ec(r,n);if(rc.push({displayName:null,primitive:e,stackError:i,value:a,dispatcherHookName:e}),o!==null)throw o;return[a,()=>{},!1]},Oc=Dc(`ActionState`),kc={readContext:oc,use:sc,useCallback:vc,useContext:cc,useEffect:hc,useImperativeHandle:gc,useLayoutEffect:pc,useInsertionEffect:mc,useMemo:yc,useReducer:uc,useRef:dc,useState:lc,useDebugValue:_c,useDeferredValue:Sc,useTransition:xc,useSyncExternalStore:bc,useId:Cc,useHostTransitionStatus:()=>{let e=oc({_currentValue:null});return R(`HostTransitionStatus`,e,`HostTransitionStatus`),e},useFormState:Dc(`FormState`),useActionState:Oc,useOptimistic:Tc,useMemoCache:wc,useCacheRefresh:fc,useEffectEvent:e=>(L(),R(`EffectEvent`,e,`EffectEvent`),e)},typeof Proxy>`u`||new Proxy(kc,{get(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t];let n=Error(`Missing method in Dispatcher: `+t);throw n.name=`ReactDebugToolsUnsupportedHookError`,n}}),Ac=e=>e===void 0||!Number.isFinite(e)?3:Math.max(0,Math.floor(e)),jc=/^(?:\.\/)?\/?\([a-z][a-z0-9-]*\)\//,Mc=e=>{let t=ec(e);return t=t.replace(jc,``),t.startsWith(`./`)&&(t=t.slice(2)),t},Nc=e=>{try{return decodeURIComponent(e)}catch{return e}},Pc=/(?:^|[/\\])node_modules[/\\]/,Fc=/[/\\]\.vite[/\\]deps[^/\\]*[/\\]/,Ic=/\.[mc]?[jt]sx?$/i,Lc=/^chunk-[A-Za-z0-9_-]+$/,Rc=/[/\\]/,zc=/^(.+?)@v?\d/,Bc=e=>e.split(Rc).filter(Boolean),Vc=e=>{let[t,n]=Bc(e);return!t||t.startsWith(`.`)?null:t.startsWith(`@`)?n?`${t}/${n}`:null:t},Hc=e=>{let t=Bc(e)[0];if(!t)return null;let n=t.replace(Ic,``);if(Lc.test(n))return null;if(!n.startsWith(`@`))return n;let r=n.indexOf(`_`);return r===-1?null:`${n.slice(0,r)}/${n.slice(r+1)}`},Uc=(e,t,n)=>{let r=e.split(t);return r.length>1?n(r[r.length-1]):null},Wc=e=>e?.match(zc)?.[1]??null,Gc=e=>{let t;try{t=new URL(e)}catch{return null}if(!t.hostname)return null;let n=Bc(t.pathname).map(Nc);for(let[e,t]of n.entries()){if(t.startsWith(`@`)){let r=Wc(n[e+1]);if(r)return`${t}/${r}`;continue}let r=Wc(t);if(r)return r}return null},Kc=e=>Uc(e,Fc,Hc)??Uc(e,Pc,Vc),qc=e=>{if(!e)return null;let t=ec(e);return t&&(Kc(Nc(t))||Gc(e))||null},Jc=/^@[A-Za-z0-9][A-Za-z0-9._-]*$/,Yc=/^[A-Za-z0-9][A-Za-z0-9._-]*$/,Xc=new Set([`app`,`web`,`website`,`frontend`,`client`,`src`]),Zc=new Set([`app`,`src`,`components`,`pages`,`features`,`modules`,`hooks`,`lib`,`utils`,`ui`,`shared`,`common`,`core`,`styles`,`assets`]),Qc=e=>{let t=e;for(;t.startsWith(`../`)||t.startsWith(`./`);)t=t.slice(t.startsWith(`../`)?3:2);return t},$c=e=>{let t=Qc(Nc(ec(e)));if(t.startsWith(`/`))return null;let[n,r,...i]=Bc(t);return!n||!r||i.length===0||!Jc.test(n)||Zc.has(n.slice(1))||!Yc.test(r)||Ic.test(r)||Xc.has(r)?null:`${n}/${r}`},el=e=>e?qc(e)??$c(e):null,tl=e=>{if(!e)return{origin:`unknown`,packageName:null};let t=el(e);return t?{origin:`package`,packageName:t}:tc(e)?{origin:`app`,packageName:null}:{origin:`unknown`,packageName:null}},nl=new Set([`role`,`name`,`aria-label`,`rel`,`href`]),rl=e=>{if(!/^[a-z-]{3,}$/i.test(e))return!1;let t=e.split(/-|[A-Z]/);for(let e of t)if(e.length<=2||/[^aeiou]{4,}/i.test(e))return!1;return!0},il=(e,t)=>{let n=nl.has(e)||e.startsWith(`data-`)&&rl(e),r=rl(t)&&t.length<100||t.startsWith(`#`)&&rl(t.slice(1));return n&&r},al=e=>{let t=e[0].name;for(let n=1;n<e.length;n++)t=`${e[n].name} > ${t}`;return t},ol=e=>{let t=0;for(let n of e)t+=n.penalty;return t},sl=(e,t)=>ol(e)-ol(t),cl=(e,t)=>{let n=e.parentNode;if(!n)return;let r=n.firstChild;if(!r)return;let i=0;for(;r&&(Rr(r)&&(t===void 0||r.tagName.toLowerCase()===t)&&i++,r!==e);)r=r.nextSibling;return i},ll=(e,t)=>e===`html`?`html`:`${e}:nth-child(${t})`,ul=(e,t)=>e===`html`?`html`:`${e}:nth-of-type(${t})`,dl=(e,t)=>{let n=[],r=e.getAttribute(`id`),i=e.tagName.toLowerCase();r&&rl(r)&&n.push({name:`#${CSS.escape(r)}`,penalty:0});for(let t of e.classList)rl(t)&&n.push({name:`.${CSS.escape(t)}`,penalty:1});for(let r of e.attributes)t(r.name,r.value)&&n.push({name:`[${CSS.escape(r.name)}="${CSS.escape(r.value)}"]`,penalty:2});n.push({name:i,penalty:5});let a=cl(e,i);a!==void 0&&n.push({name:ul(i,a),penalty:10});let o=cl(e);return o!==void 0&&n.push({name:ll(i,o),penalty:50}),n},fl=(e,t=kr,n=[])=>{if(t<=0)return[];if(e.length===0)return[n];let r=[];for(let i of e[0]){let a=t-r.length;if(a<=0)break;r.push(...fl(e.slice(1),a,[...n,i]))}return r},pl=(e,t)=>{let n=t.getRootNode();return qi(n)?n:$i(e)?e:e.ownerDocument},ml=(e,t)=>t.querySelectorAll(al(e)).length===1,hl=(e,t)=>{let n=e,r=[];for(;n&&n!==t;){let e=n.tagName.toLowerCase(),t=cl(n,e);if(t===void 0)return;r.push({name:ul(e,t),penalty:10}),n=n.parentElement}return ml(r,t)?r:void 0},gl=(e,t,n,r)=>{if(e.nodeType!==Node.ELEMENT_NODE)throw new Yi;if(e.tagName.toLowerCase()===`html`)return`html`;let i=pl(t,e),a=Date.now(),o=[],s=e,c=0,l;for(;s&&s!==i&&!l;)if(o.push(dl(s,r)),s=s.parentElement,c++,c>=3){let t=fl(o);t.sort(sl);for(let r of t){if(Date.now()-a>n){let t=hl(e,i);if(!t)throw new Xi(n);return al(t)}if(ml(r,i)){l=r;break}}}if(!l&&c<3){let e=fl(o);e.sort(sl);for(let t of e){if(Date.now()-a>n)break;if(ml(t,i)){l=t;break}}}if(!l)throw new Zi;return al(l)},_l=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,vl=/:r[a-z0-9]+:/i,yl=/_r_[a-z0-9]+_(?:$|-)/i,bl=/«r[a-z0-9]+»/i,xl=/^(?:downshift-\d+(?:-|$)|headlessui-[a-z-]+-\d+(?:-|$)|mui-\d+(?:-|$)|radix-\d+(?:-|$)|react-aria-\d+(?:-|$)|react-select-\d+(?:-|$))/i,Sl=/^ember\d+$/i,Cl=/^\d+$/,wl=e=>e.length>0&&e.length<=120&&!vl.test(e)&&!_l.test(e)&&!yl.test(e)&&!bl.test(e)&&!xl.test(e)&&!Sl.test(e)&&!Cl.test(e),Tl=new Set([`data-testid`,`data-test-id`,`data-test`,`data-cy`,`data-qa`,`aria-label`,`href`,`src`,`role`,`name`,`title`,`alt`]),El=new Set([`button`,`link`,`checkbox`,`radio`,`switch`,`tab`,`menuitem`,`option`,`textbox`,`combobox`,`slider`,`spinbutton`]),Dl=e=>e.ownerDocument.body??e.ownerDocument.documentElement,Ol=e=>e.length>0&&e.length<=120,kl=(e,t)=>Tl.has(e)&&Ol(t)&&(e!==`role`||t.split(/\s+/).some(e=>El.has(e))),Al=(e,t)=>{try{let n=e.getRootNode(),r=(qi(n)?n:e.ownerDocument).querySelectorAll(t);return r.length===1&&r[0]===e}catch{return!1}},jl=e=>{let t=e.getAttribute(`id`),n=null;if(t){let r=`#${CSS.escape(t)}`;if(Al(e,r)){if(wl(t))return{selector:r,isSemantic:!0};n=r}}for(let t of Tl){let n=e.getAttribute(t);if(!n||!kl(t,n))continue;let r=`[${t}=${JSON.stringify(n)}]`;if(Al(e,r))return{selector:r,isSemantic:!0};let i=`${e.tagName.toLowerCase()}${r}`;if(Al(e,i))return{selector:i,isSemantic:!0}}return n?{selector:n,isSemantic:!1}:null},Ml=e=>{let t=[],n=e.getRootNode(),r=qi(n)?n:Dl(e),i=e;for(;i;){let e=i.getAttribute(`id`);if(e){t.unshift(`#${CSS.escape(e)}`);break}let n=i.parentNode;if(!n){t.unshift(i.tagName.toLowerCase());break}let a=Array.from(n.children).indexOf(i)+1;if(t.unshift(`${i.tagName.toLowerCase()}:nth-child(${a})`),n===r){Rr(r)&&t.unshift(r.tagName.toLowerCase());break}i=Rr(n)?n:null}return t.join(` > `)},Nl=e=>{let t=jl(e);if(t)return t;try{let t=gl(e,Dl(e),200,(e,t)=>il(e,t)||kl(e,t));if(t)return{selector:t,isSemantic:!1}}catch{}return{selector:Ml(e),isSemantic:!1}},Pl=e=>{let t=Gi(e);if(t)return{selector:t.getSelector(),isSemantic:!0};let n=jl(e);if(!n?.isSemantic)return null;let r=e.getRootNode();if(qi(r)){let e=Pl(r.host);return e?{selector:`${e.selector} >>> ${n.selector}`,isSemantic:!0}:null}let i=Gr(e.ownerDocument.defaultView);if(!i)return n;let a=Pl(i);return a?{selector:`${a.selector} >>iframe>> ${n.selector}`,isSemantic:!0}:null},Fl=e=>{let t=Gi(e);if(t)return{selector:t.getSelector(),isSemantic:!0};let n=Nl(e),r=e.getRootNode();if(qi(r)){let e=Fl(r.host);return{selector:`${e.selector} >>> ${n.selector}`,isSemantic:e.isSemantic&&n.isSemantic}}let i=Gr(e.ownerDocument.defaultView);if(!i)return n;let a=Fl(i);return{selector:`${a.selector} >>iframe>> ${n.selector}`,isSemantic:a.isSemantic&&n.isSemantic}},Il=[...Array.from(Tl).filter(e=>e!==`role`).map(e=>`[${e}]`),...Array.from(El).map(e=>`[role~="${e}"]`)].join(`,`),Ll=[`button`,`input`,`select`,`textarea`].join(`,`),Rl=e=>{let t=e.getAttribute(`id`);return!!(t&&wl(t)||e.matches(Il))},zl=e=>Rl(e)||e.matches(Ll),Bl=e=>{let{body:t,documentElement:n}=e.ownerDocument;if(e===t||e===n)return!0;if(!t)return!1;let r=t.getElementsByTagName(`*`).length;return r===0?!1:e.getElementsByTagName(`*`).length/r>=Ar},Vl=(e,t)=>{let n=e.getRootNode(),r=e;for(;r;){let i=zl(r),a=i&&Bl(r);if(i){if(a&&r!==e)return e;if(!t||t(r)||a||!Rl(r)&&r===e)return r}let o=ea(r);r=o?.getRootNode()===n?o:null}return e},Hl=e=>{if(Gi(e))return Pl(e);let t=null;return Vl(e,e=>{let n=Pl(e);return n?(t=n,!0):!1}),t},Ul=[/\/assets\/[^/?#]+-[a-z0-9_-]{6,}\.(?:c|m)?js(?:[?#]|$)/,/\/_next\/static\/.*\.(?:c|m)?js(?:[?#]|$)/,/\/static\/chunks\/.*\.(?:c|m)?js(?:[?#]|$)/],Wl=e=>{if(!e)return!1;let t=`/${Mc(e)}`.toLowerCase();return Ul.some(e=>e.test(t))},Gl=e=>{if(!e)return!1;let t=`/${Mc(e)}/`.toLowerCase();return Er.some(e=>t.includes(e))},ql=(e=!1)=>{let t=new URL(document.baseURI);return Array.from(document.scripts).some(n=>{if(!n.src)return!1;try{let r=new URL(n.src,t);return(e||r.origin===t.origin)&&r.pathname.includes(`/_next/static/`)}catch{return!1}})},Jl=()=>Array.from(document.scripts).some(e=>e.textContent?.includes(`self.__next_f.push`)),Yl=e=>(e&&(Kl=void 0),Kl??=typeof document<`u`&&!!(document.getElementById(`__NEXT_DATA__`)||document.querySelector(`nextjs-portal`)||ql()||Jl()&&ql(!0)),Kl),Xl=e=>e.map(e=>`\n  in ${e}`).join(``),Ql=()=>{if(Zl!==void 0)return Zl;let e=document.querySelector(`script[src*="/_next/"]`)?.src,t=e?new URL(e).pathname:``,n=t.indexOf(`/_next/`);return Zl=n>0?t.slice(0,n):``,Zl},$l=[`about://React/`,`rsc://React/`],eu=e=>$l.some(t=>e.startsWith(t)),tu=e=>{for(let t of $l){if(!e.startsWith(t))continue;let n=e.indexOf(`/`,t.length);if(n===-1)continue;let r=n+1,i=e.lastIndexOf(`?`);return Nc(i>r?e.slice(r,i):e.slice(r))}return e},nu=e=>{if(typeof e!=`object`||!e||!(`status`in e)||e.status!==`fulfilled`||!(`value`in e)||typeof e.value!=`object`||e.value===null||!(`originalStackFrame`in e.value))return null;let t=e.value.originalStackFrame;return typeof t!=`object`||!t||!(`file`in t)||typeof t.file!=`string`||!t.file||`ignored`in t&&t.ignored?null:{file:t.file,line1:`line1`in t&&typeof t.line1==`number`?t.line1:null,column1:`column1`in t&&typeof t.column1==`number`?t.column1:null}},ru=async(e,t)=>{let n=[],r=[];for(let t=0;t<e.length;t++){let i=e[t];!i.isServer||!i.fileName||(n.push(t),r.push({file:tu(i.fileName),methodName:i.functionName??`<unknown>`,line1:i.lineNumber??null,column1:i.columnNumber??null,arguments:[]}))}if(r.length===0)return e;let i=new AbortController,a=setTimeout(()=>i.abort(),Dr),o=()=>i.abort();t?.aborted&&i.abort(),t?.addEventListener(`abort`,o);try{let t=await fetch(`${Ql()}/__nextjs_original-stack-frames`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({frames:r,isServer:!0,isEdgeServer:!1,isAppDirectory:!0}),priority:`high`,signal:i.signal});if(!t.ok)return e;let a=await t.json();if(!Array.isArray(a))return e;let o=[...e];for(let t=0;t<n.length;t++){let r=nu(a[t]);if(!r)continue;let i=n[t];o[i]={...e[i],fileName:r.file,lineNumber:r.line1??void 0,columnNumber:r.column1??void 0,isSymbolicated:!0}}return o}catch{return e}finally{clearTimeout(a),t?.removeEventListener(`abort`,o)}},iu=e=>{let t=new Map;return xr(e,e=>{if(!Ss(e))return!1;let n=Fs(e._debugStack.stack);if(!n)return!1;for(let e of Go(n))!e.functionName||!e.fileName||eu(e.fileName)&&(t.has(e.functionName)||t.set(e.functionName,{...e,isServer:!0}));return!1},!0),t},au=(e,t)=>{if(!t.some(e=>e.isServer&&!e.fileName&&e.functionName))return t;let n=iu(e);return n.size===0?t:t.map(e=>{if(!e.isServer||e.fileName||!e.functionName)return e;let t=n.get(e.functionName);return t?{...e,fileName:t.fileName,lineNumber:t.lineNumber,columnNumber:t.columnNumber}:e})},ou=0,su=[],cu=e=>e?.aborted?Promise.resolve(!1):ou<3?(ou+=1,Promise.resolve(!0)):new Promise(t=>{let n={abortSignal:e,resolve:t};e&&(n.handleAbort=()=>{let e=su.indexOf(n);e!==-1&&(su.splice(e,1),t(!1))},e.addEventListener(`abort`,n.handleAbort,{once:!0})),su.push(n)}),lu=()=>{let e=su.shift();if(e){e.abortSignal&&e.handleAbort&&e.abortSignal.removeEventListener(`abort`,e.handleAbort),e.resolve(!0);return}--ou},uu=async(e,t,n=Or,r)=>{if(!await cu(r))return t;let i=new AbortController,a,o=new Promise(e=>{a=setTimeout(()=>{i.abort(),e(t)},n)}),s,c=new Promise(e=>{r&&(s=()=>{i.abort(),e(t)},r.aborted?s():r.addEventListener(`abort`,s,{once:!0}))});try{let t=e(i.signal);return t.catch(()=>{}),await Promise.race([t,o,c])}finally{clearTimeout(a),s&&r?.removeEventListener(`abort`,s),lu()}},du=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),fu=e=>du(e).replace(/"/g,`&quot;`).replace(/\r/g,`&#13;`).replace(/\n/g,`&#10;`).replace(/\t/g,`&#9;`),pu=(e,t)=>{if(e.length<=t)return e;let n=Math.max(0,t-3),r=e.slice(0,n),i=r.lastIndexOf(`&`);return`${i>r.lastIndexOf(`;`)?r.slice(0,i):r}...`.slice(0,t)},mu=e=>e.startsWith(`data-react-grab-`),hu=e=>e.replace(/\s+/g,` `).trim(),gu=e=>{let t=[];for(let n of e.childNodes){if(n.nodeType!==Node.TEXT_NODE)continue;let e=hu(n.textContent??``);e&&t.push(e)}return t.join(` `)},_u=e=>e.getAttribute(`aria-hidden`)===`true`||e.hasAttribute(`hidden`)?!0:Pr.has(e.tagName.toLowerCase()),vu=(e,t,n)=>{if(e.nodeType===Node.TEXT_NODE){let r=hu(e.textContent??``);return r?(t.push(r),n-r.length):n}if(!Rr(e)||_u(e))return n;for(let r of e.childNodes)if(n=vu(r,t,n),n<=0)break;return n},yu=(e,t)=>{if(_u(e))return``;let n=gu(e);if(!Nr.has(t)||n&&e.children.length===0)return n;let r=[];return vu(e,r,100),r.join(` `)},bu=(e,t,n)=>`${e}="${pu(fu(t),n)}"`,xu=e=>{let t=[];for(let n of jr){if(t.length>=8)break;let r=e.getAttribute(n);if(!r)continue;let i=n===`class`?15:120;t.push(bu(n,r,i))}return t},Su=e=>e===`class`||e===`className`||e===`style`,Cu=e=>{let t=xu(e).map(e=>` ${e}`),n=[],r=[];for(let{name:t,value:i}of e.attributes)mu(t)||jr.includes(t)||Su(t)||(Mr.has(t)?n.push(i?` ${bu(t,i,120)}`:` ${t}`):i&&r.push(` ${bu(t,i,15)}`));return[...t,...n,...r].slice(0,8).join(``)},wu=e=>e.length===0?``:e.length<=2?e.map(e=>`<${Qi(e)} ...>`).join(`
  `):`(${e.length} elements)`,Tu=e=>{let t=Gi(e);if(t)return t.getPreview();let n=Qi(e),r=Cu(e),i=yu(e,n),a=[],o=[],s=!1;for(let t of e.childNodes)t.nodeType!==Node.COMMENT_NODE&&(t.nodeType===Node.TEXT_NODE?t.textContent&&t.textContent.trim().length>0&&(s=!0):Rr(t)&&(s?o.push(t):a.push(t)));let c=i.length>0&&Nr.has(n),l=``,u=wu(a);u&&!c&&(l+=`\n  ${u}`),i&&(l+=`\n  ${pu(du(i),100)}`);let d=wu(o);return d&&!c&&(l+=`\n  ${d}`),l.length>0?`<${n}${r}>${l}\n</${n}>`:`<${n}${r} />`},Eu=new Set([`_`,`$`,`motion.`,`styled.`,`chakra.`,`ark.`,`Primitive.`,`Slot.`]),Du=new Set(`AppRouter.AppRouterAnnouncer.AppDevOverlay.AppDevOverlayErrorBoundary.ClientPageRoot.ClientSegmentRoot.DevRootHTTPAccessFallbackBoundary.ErrorBoundary.ErrorBoundaryHandler.GracefulDegradeBoundary.HTTPAccessErrorFallback.HTTPAccessFallbackBoundary.HTTPAccessFallbackErrorBoundary.HandleRedirect.Head.HistoryUpdater.HotReload.InnerLayoutRouter.InnerScrollAndFocusHandler.InnerScrollAndFocusHandlerOld.InnerScrollAndMaybeFocusHandler.InnerScrollHandlerNew.LinkComponent.LoadableComponent.LoadingBoundary.LoadingBoundaryProvider.NotAllowedRootHTTPFallbackError.OfflineProvider.OuterLayoutRouter.RedirectBoundary.RedirectErrorBoundary.RenderFromTemplateContext.RenderValidationBoundaryAtThisLevel.ReplaySsrOnlyErrors.RootErrorBoundary.RootLevelDevOverlayElement.Router.ScrollAndFocusHandler.ScrollAndMaybeFocusHandler.SegmentBoundaryTrigger.SegmentBoundaryTriggerNode.SegmentStateProvider.SegmentTrieNode.SegmentViewNode.SegmentViewStateNode.ServerRoot.body.html`.split(`.`)),Ou=new Set([`<anonymous>`,`<unknown>`,`Anonymous`,`Unknown`]),ku=new Set([`Suspense`,`Fragment`,`StrictMode`,`Profiler`,`SuspenseList`]),Au=new Set([`MotionDOMComponent`,`Slot`,`SlotClone`]),ju=[`.Consumer`,`.Context`,`.Provider`,`.Slot`,`.SlotClone`,`.Slottable`,`ProviderProvider`],Mu=(e,t=!1)=>{if(Ou.has(e)||t&&Du.has(e)||ku.has(e)||Au.has(e))return!0;for(let t of ju)if(e.endsWith(t))return!0;for(let t of Eu)if(e.startsWith(t))return!0;return!1},Nu=(e,t=!1)=>!(!e||Mu(e,t)),Pu=(e,t)=>e||t.isSemantic,Fu=e=>{let t=e.alternate,n=e._debugOwner,r=e._debugSource,i=e._debugStack;return{matches:a=>(a===e||a===t||a.alternate===e)&&a._debugOwner===n&&a._debugSource===r&&a._debugStack===i}},Iu=(e,t)=>e.length>t?`${e.slice(0,t)}...`:e,Lu=e=>JSON.stringify(Iu(e,120)),Ru=(e,t,n)=>{e.get(t)===n&&e.delete(t)},zu=async(e,t)=>{for(let n=0;n<2;n+=1){let r=e();if(!r)return t();let i=await r.valuePromise;if(r.isCurrent()||n===1)return i}return t()},Bu=(e,t)=>!(e.length<=1||Mu(e,t)||e[0]!==e[0].toUpperCase()),Vu=(e,t)=>e&&Bu(e,t)?e:null,Hu=e=>!Gl(e)&&!Wl(e),Uu=e=>{if(!yi())return e;let t=e;for(;t?.ownerDocument===e.ownerDocument;){if(Ki(t))return t;if(t.parentElement){t=t.parentElement;continue}let e=t.getRootNode();t=qi(e)?e.host:null}return e},Wu=e=>{let t=e.return?.child??null;for(;t;){if(t!==e&&t.key!==null)return!0;t=t.sibling}return!1},Gu=e=>{let t=e,n=0;for(;t;){if(t.key!==null&&Wu(t))return String(t.key);if(di(t)&&(n+=1,n===2))break;t=t.return}return null},Ku=e=>{if(!yi())return null;let t=Ki(Uu(e));return Gu(t?xi(t):null)},qu=new WeakMap,Ju=new WeakMap,Yu=e=>{let t=Uu(e),n=Ki(t);if(!n)return null;let r=xi(n);return{element:t,fiber:r,revision:Fu(r)}},Xu=(e,t)=>{let n=Yu(e);return!!(n&&n.element===t.element&&t.revision.matches(n.fiber))},Zu=(e,t,n)=>zu(()=>{let t=Yu(e);return t?{isCurrent:()=>Xu(e,t),valuePromise:n(t)}:null},t),Qu=e=>t=>fetch(t,{signal:e,priority:`high`}),$u=(e,t)=>uu(async t=>{try{let n=await Ks(e,!0,Qu(t));return Yl()?await ru(au(e,n),t):n}catch{return null}},null,void 0,t),ed=e=>{if(!yi())return Promise.resolve([]);let t=qu.get(e.element);if(t?.revision.matches(e.fiber))return t.promise;let n=new AbortController,r=$u(e.fiber,n.signal);if(!Xu(e.element,e))return r;let i={controller:n,promise:r,revision:e.revision};return qu.set(e.element,i),t?.controller.abort(),i.promise.then(t=>{t===null&&Ru(qu,e.element,i)}),i.promise},td=e=>e[0]??null,nd=(e,t)=>!e||!di(e)?null:Vu(vi(e.type),t),rd=(e,t)=>uu(async t=>{try{let n=await Xs(e,!0,Qu(t));if(!n?.fileName)return null;let r=Yl();return{filePath:Mc(n.fileName),lineNumber:n.lineNumber??null,columnNumber:n.columnNumber??null,componentName:Vu(n.functionName,r)??nd(e._debugOwner,r),origin:tl(n.fileName).origin}}catch{return null}},null,void 0,t),id=e=>{let t=Ju.get(e.element);if(t?.revision.matches(e.fiber))return t.promise;let n=new AbortController,r=rd(e.fiber,n.signal);if(!Xu(e.element,e))return r;let i={controller:n,promise:r,revision:e.revision};return Ju.set(e.element,i),t?.controller.abort(),i.promise.then(t=>{t||Ru(Ju,e.element,i)}),i.promise},ad=async e=>{let[t,n]=await Promise.all([id(e),ed(e)]);return{fiber:e.fiber,fiberSource:t,stack:n}},od=(e,t)=>{let n=Yl(),r=(e,t)=>{let r=td(e);return r?.fileName?{filePath:Mc(r.fileName),lineNumber:r.lineNumber??null,columnNumber:r.columnNumber??null,componentName:Vu(r.functionName,n),origin:t}:null},i=t.filter(e=>tl(e.fileName).origin===`app`),a=i.filter(e=>Hu(e.fileName));return e?.origin===`app`&&Hu(e.filePath)?e:r(a,`app`)||(e?.origin===`app`&&!Wl(e.filePath)?e:r(i,`app`)||(e?.origin===`app`||e?.origin===`package`?e:r(t.filter(e=>tl(e.fileName).origin===`package`),`package`)))},sd=e=>cd(Uu(e),1)[0]??null,cd=(e,t,n=()=>!0)=>{if(!yi())return[];let r=Ki(e);if(!r)return[];let i=Yl(),a=[];return xr(xi(r),e=>{if(a.length>=t)return!0;if(di(e)){let t=vi(e.type);t&&Nu(t,i)&&n(t)&&a.push(t)}return!1},!0),a},ld=[`/src/app/`,`/src/pages/`,`/app/`,`/pages/`],ud=(e,t)=>{let n=Mc(e);if(!t||!n.startsWith(`/`))return n;for(let e of ld){let t=n.indexOf(e);if(t!==-1)return`/./${n.slice(t+1)}`}return n},dd=(e,t)=>{let n=ud(e.filePath,t),r=t&&e.lineNumber?`${n}:${e.lineNumber}${e.columnNumber?`:${e.columnNumber}`:``}`:n;return e.componentName?`\n  in ${e.componentName} (at ${r})`:`\n  in ${r}`},fd={isAppSource:!1,consumesBudget:!1},pd=(e,t,n,r)=>{let i=t.packageName,a=t.origin===`app`?e.fileName:null;if(e.isServer&&!a&&(n||!e.functionName)){let e=i?`${i} at Server`:`at Server`;return{text:`\n  in ${n??`<anonymous>`} (${e})`,...fd}}return!a&&n?{text:i?`\n  in ${n} (${i})`:`\n  in ${n}`,...fd}:i?{text:`\n  in ${i}`,...fd}:a?{text:dd({componentName:n,filePath:a,lineNumber:e.lineNumber??null,columnNumber:e.columnNumber??null},r),isAppSource:!0,consumesBudget:Hu(a)}:null},md=(e,t={},n=null)=>{let r=Ac(t.maxLines),i=Math.max(r,20),a=Yl(),o=[],s=new Set,c=null,l=!1,u=!1,d=!1,f=0,p=e=>{e&&s.add(e)};if(n){let e=n.origin===`app`&&Hu(n.filePath);u=e,e&&(f+=1),p(n.componentName),o.push(dd(n,a))}for(let t of e){if(!r||o.length>=i)break;let e=tl(t.fileName),s=Vu(t.functionName,a),m=e.packageName?`${e.packageName}:${s??``}:${t.isServer?`server`:`client`}`:null;if(m&&m===c)continue;if(!l&&s&&s===n?.componentName){l=!0;continue}let h=pd(t,e,s,a);h!==null&&(h.consumesBudget&&f>=r||h.text!==o[o.length-1]&&(h.isAppSource&&h.consumesBudget&&(u=!0),h.consumesBudget&&(f+=1,d=!0),p(s),o.push(h.text),c=m))}return{text:o.join(``),shouldAppendSelectorHint:!u,hasBudgetedStackFrame:d,renderedComponentNames:s,remainingHardLineCapacity:Math.max(0,i-o.length)}},hd=(e,t)=>{let n=od(e,t);return n?.origin===`app`?n:null},gd=(e,t,n)=>{let r=Math.min(n,t.remainingHardLineCapacity);if(r===0)return t;let i=Yl(),a=cd(Uu(e),r,e=>Bu(e,i)&&!t.renderedComponentNames.has(e));return a.length===0?t:{...t,text:`${t.text}${Xl(a)}`,remainingHardLineCapacity:t.remainingHardLineCapacity-a.length}},_d=(e,t,n)=>{let r=n.stack??[],i=hd(n.fiberSource,r),a=Ac(t.maxLines),o=md(r,t,i);if(o.text)return o.hasBudgetedStackFrame?o:gd(e,o,a);let s=cd(Uu(e),a),c=Math.max(a,20);return{text:Xl(s),shouldAppendSelectorHint:!0,hasBudgetedStackFrame:!1,renderedComponentNames:new Set(s),remainingHardLineCapacity:Math.max(0,c-s.length)}},vd=(e,t)=>{let n=Ku(e),r=n===null?``:`\n  key: ${Lu(n)}`,i=t.shouldAppendSelectorHint?Fl(Vl(e)):Hl(e),a=i&&Pu(t.shouldAppendSelectorHint,i)?i.selector:null,o=a?`\n  selector: ${a}`:``;return{selector:a,text:`${t.text}${r}${o}`}},yd=(e,t,n)=>{let r=t.stack??[],i=od(t.fiberSource,r);return{componentName:sd(e),fiber:t.fiber,source:i,stack:r,stackContext:n.text}},bd=(e,t,n)=>{let r=_d(e,t,n),i=Uu(e),a=vd(i,r);return{...yd(e,n,r),elementInfo:`${Tu(i)}${a.text}`,selector:a.selector}},xd=(e,t,n)=>Zu(e,()=>n(e,t,{fiber:null,fiberSource:null,stack:[]}),async r=>n(e,t,await ad(r))),Sd=(e,t={})=>xd(e,t,bd)})),wd,Td,Ed,Dd,Od,kd,Ad,jd,Md=e((()=>{Do(),Cd(),wd=new Map([`top`,`right`,`bottom`,`left`].flatMap(e=>[[`border-${e}-style`,e],[`border-${e}-color`,e]])),Td=null,Ed=new Map,Dd=()=>Td||(Td=document.createElement(`iframe`),Td.style.cssText=`position:fixed;left:-9999px;width:0;height:0;border:none;visibility:hidden;`,document.body.appendChild(Td),Td),Od=e=>{let t=Ed.get(e);if(t)return t;let n=Dd(),r=n.contentDocument,i=r.createElement(e);r.body.appendChild(i);let a=n.contentWindow.getComputedStyle(i),o=new Map;for(let e of Lr){let t=a.getPropertyValue(e);t&&o.set(e,t)}return i.remove(),Ed.set(e,o),o},kd=(e,t)=>{let n=wd.get(e);if(!n)return!1;let r=t.getPropertyValue(`border-${n}-width`);return r===`0px`||r===`0`},Ad=e=>{if(Gi(e)?.supportsDomEditing===!1)return``;let t=Od(e.tagName.toLowerCase()),n=getComputedStyle(e),r=[];for(let e of Lr){let i=n.getPropertyValue(e);i&&i!==t.get(e)&&(kd(e,n)||r.push(`${e}: ${i};`))}let i=e.getAttribute(`class`)?.trim(),a=r.join(`
`);return i?a?`className: ${i}\n\n${a}`:`className: ${i}`:a},jd=async e=>{let t=await Sd(e),n=Tu(e),r=Ad(e);return{element:e,snippet:t.elementInfo,htmlPreview:n,stackString:t.stackContext,stack:t.stack,componentName:t.componentName,filePath:t.source?.filePath??null,lineNumber:t.source?.lineNumber??null,columnNumber:t.source?.columnNumber??null,fiber:t.fiber,selector:t.selector,styles:r}}})),Nd,Pd=e((()=>{Nd=`0.2.0`})),Fd=t({ReactScanInternals:()=>$,Store:()=>Q,getIsProduction:()=>_b,getOptions:()=>mb,ignoredProps:()=>Sb,scan:()=>xb,setOptions:()=>pb,start:()=>vb});function Id(e,t){return t-e}function Ld(e){let t=e[0].name,n=e.length,r=Math.min(4,n);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}function Rd(e){let t=e[0].time;for(let n=1,r=e.length;n<r;n++)t+=e[n].time;return t}function zd(e){for(let t=0,n=e.length;t<n;t++)if(e[t].forget)return!0;return!1}function Bd(e,t){return e===t||e!==e&&t!==t}function Vd(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Vd(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Hd(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Vd(e))&&(r&&(r+=` `),r+=t);return r}function Ud(){return!1}function Wd(e){function t(t){return this.shouldComponentUpdate=Ud,Pe(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}function Gd(e){let t=e.replace(/\s+/g,` `).trim(),n=[],r=``;for(let e=0;e<t.length;e++){let i=t[e];if(i===`=`&&t[e+1]===`>`){r.trim()&&n.push(r.trim()),n.push(`=>`),r=``,e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(r.trim()&&n.push(r.trim()),n.push(i),r=``):/\s/.test(i)?(r.trim()&&n.push(r.trim()),r=``):r+=i}r.trim()&&n.push(r.trim());let i=[];for(let e=0;e<n.length;e++){let t=n[e],r=n[e+1];t===`(`&&r===`)`||t===`[`&&r===`]`||t===`{`&&r===`}`||t===`<`&&r===`>`?(i.push(t+r),e++):i.push(t)}let a=new Set,o=new Set;function s(e,t,n){let r=0;for(let a=n;a<i.length;a++){let n=i[a];if(n===e)r++;else if(n===t&&(r--,r===0))return a}return-1}for(let e=0;e<i.length;e++)if(i[e]===`(`){let t=s(`(`,`)`,e);if(t!==-1&&i[t+1]===`=>`)for(let n=e;n<=t;n++)a.add(n)}for(let e=1;e<i.length;e++){let t=i[e-1],n=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&n===`<`){let t=s(`<`,`>`,e);if(t!==-1)for(let n=e;n<=t;n++)o.add(n)}}let c=0,l=[],u=``;function d(){u.trim()&&l.push(u.replace(/\s+$/,``)),u=``}function f(){d(),u=`  `.repeat(c)}let p=[];function m(){return p.length?p[p.length-1]:null}function h(e,t=!1){u.trim()?t||/^[),;:\].}>]$/.test(e)?u+=e:u+=` ${e}`:u+=e}for(let e=0;e<i.length;e++){let t=i[e],n=i[e+1]||``;if([`(`,`{`,`[`,`<`].includes(t))h(t),p.push(t),t===`{`?(c++,f()):(t===`(`||t===`[`||t===`<`)&&(a.has(e)&&t===`(`||o.has(e)&&t===`<`||n!=={"(":`)`,"[":`]`,"<":`>`}[t]&&n!==`()`&&n!==`[]`&&n!==`<>`&&(c++,f()));else if([`)`,`}`,`]`,`>`].includes(t)){let n=m();t===`)`&&n===`(`||t===`]`&&n===`[`||t===`>`&&n===`<`?!(a.has(e)&&t===`)`)&&!(o.has(e)&&t===`>`)&&(c=Math.max(c-1,0),f()):t===`}`&&n===`{`&&(c=Math.max(c-1,0),f()),p.pop(),h(t),t===`}`&&f()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))h(t);else if(t===`=>`)h(t);else if(t===`;`)h(t,!0),f();else if(t===`,`){h(t,!0);let n=m();!(a.has(e)&&n===`(`)&&!(o.has(e)&&n===`<`)&&n&&[`{`,`[`,`(`,`<`].includes(n)&&f()}else h(t)}return d(),l.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}function Kd(e,t=0){if(t<0)return`…`;switch(typeof e){case`function`:return e.toString();case`string`:return e;case`number`:case`boolean`:case`undefined`:return String(e);case`object`:break;default:return String(e)}if(e===null)return`null`;if(Qh.has(e)){let t=Qh.get(e);if(t!==void 0)return t}if(Array.isArray(e)){let t=e.length?`[${e.length}]`:`[]`;return Qh.set(e,t),t}if(ct(e)){let t=`<${T(e.type)??``} ${e.props?Object.keys(e.props).length:0}>`;return Qh.set(e,t),t}if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e),n=t.length?`{${t.length}}`:`{}`;return Qh.set(e,n),n}let n=e&&typeof e==`object`?e.constructor:void 0;if(n&&typeof n==`function`&&n.name){let t=`${n.name}{\u2026}`;return Qh.set(e,t),t}let r=`${Object.prototype.toString.call(e).slice(8,-1)}{\u2026}`;return Qh.set(e,r),r}function qd(e,t){if(!e||!t)return;let n=e.memoizedValue,r={type:4,name:e.context.displayName??`Context.Provider`,value:n,contextType:ng(e.context)};this.push(r)}function Jd(e,t,n){!Bd(t,n)&&!Xh(t,n)&&(this.isRequiredChange=!0)}function Yd(e){return String(ye(e))}function Xd(e){let t=Yd(e),n=ug.get(me(e));if(n)return n.get(t)}function Zd(e,t){let n=me(e.type),r=Yd(e),i=ug.get(n);i||(i=new Map,ug.set(n,i)),i.set(r,t)}function Qd(e,t){return t[0]-e[0]}function $d(e){return[...e.entries()].sort(Qd)}function ef([e,t]){let n=`${t.slice(0,bg).join(`, `)} \xD7${e}`;return n.length>xg&&(n=`${n.slice(0,xg)}\u2026`),n}function tf(e,t){let n=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),n.push(t))}n.length>0&&this.resolveNext&&(this.resolveNext(n),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}function nf(){let e,t;function n(){let r=null;ev=null,ev={},r=Y_(ev);let i=performance.timeOrigin,a=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{let e=performance.now(),t=e-a,o=performance.timeOrigin;dv.push(e+o);let s=dv.filter(t=>e+o-t<=1e3),c=s.length;dv=s;let l=iv!==null&&av!==null?e+o-(av+iv)<100:null,u=sv!==null&&sv;if(t>uv&&!l&&document.visibilityState===`visible`&&!u){let n=o+e,r=a+i;nv.getState().actions.addEvent({kind:`long-render`,id:uf(),data:{endAt:n,startAt:r,meta:{fiberRenders:ev,latency:t,fps:c}}})}iv=null,av=null,r?.(),n()},0)}),r}let r=n();return()=>{r(),cancelAnimationFrame(e),clearTimeout(t)}}function rf(){qv&&=(cancelAnimationFrame(qv),null),Y?.parentNode&&Y.parentNode.removeChild(Y),Y=null,X=null}var af,of,sf,cf,lf,uf,df,z,ff,pf,B,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,V,Zf,Qf,$f,ep,tp,np,rp,ip,ap,H,op,sp,cp,lp,up,dp,fp,pp,mp,hp,U,gp,_p,vp,yp,bp,xp,Sp,W,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,G,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,K,nm,q,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg,Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,J,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_,V_,H_,U_,W_,G_,K_,q_,J_,Y_,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv,Sv,Cv,wv,Tv,Ev,Dv,Ov,kv,Av,jv,Mv,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv,Vv,Hv,Uv,Wv,Gv,Kv,Y,X,qv,Z,Jv,Yv,Xv,Zv,Qv,$v,ey,ty,ny,ry,iy,ay,oy,sy,cy,ly,uy,dy,fy,py,my,hy,gy,_y,vy,yy,by,xy,Sy,Cy,wy,Ty,Ey,Dy,Oy,ky,Ay,jy,My,Ny,Py,Fy,Iy,Ly,Ry,zy,By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,Q,$,db,fb,pb,mb,hb,gb,_b,vb,yb,bb,xb,Sb,Cb=e((()=>{je(),Bn(),Tt(),Yt(),vr(),br(),Md(),Pd(),af=Object.defineProperty,of=(e,t,n)=>t in e?af(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sf=(e,t,n)=>of(e,typeof t==`symbol`?t:t+``,n),Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0}),cf=typeof window<`u`,lf=e=>{let t=``,n=new Map;for(let t of e){let{forget:e,time:r,aggregatedCount:i,name:a}=t;n.has(i)||n.set(i,[]);let o=n.get(i);o&&o.push({name:a,forget:e,time:r??0})}let r=Array.from(n.keys()).sort(Id),i=[],a=0;for(let e of r){let t=n.get(e);if(!t)continue;let r=Ld(t),o=Rd(t),s=zd(t);a+=o,t.length>4&&(r+=`…`),e>1&&(r+=` \xD7 ${e}`),s&&(r=`\u2728${r}`),i.push(r)}return t=i.join(`, `),t.length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),a>=.01&&(t+=` (${Number(a.toFixed(2))}ms)`),t):null},uf=()=>cf?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):`0`,df=e=>{let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination);let r={type:`sine`,freq:[392,600],duration:.3,gain:.12},i=r.freq,a=r.duration/i.length;i.forEach((n,r)=>{t.frequency.setValueAtTime(n,e.currentTime+r*a)}),t.type=r.type,n.gain.setValueAtTime(r.gain,e.currentTime),n.gain.setTargetAtTime(0,e.currentTime+r.duration*.7,.05),t.start(),t.stop(e.currentTime+r.duration)},z=qn(({size:e=15,name:t,fill:n=`currentColor`,stroke:r=`currentColor`,className:i,externalURL:a=``,style:o},s)=>{let c=Array.isArray(e)?e[0]:e,l=Array.isArray(e)?e[1]||e[0]:e,u=`${a}#${t}`;return I(`svg`,{ref:s,width:`${c}px`,height:`${l}px`,fill:n,stroke:r,className:i,style:{...o,minWidth:`${c}px`,maxWidth:`${c}px`,minHeight:`${l}px`,maxHeight:`${l}px`},children:[I(`title`,{children:t}),I(`use`,{href:u})]})}),ff=24,pf=600,B={width:550,height:350,initialHeight:400},mf=240,hf=`react-scan-widget-settings-v2`,gf=`react-scan-widget-collapsed-v1`,_f=`react-scan-widget-last-view-v1`,vf=`button, a, input, textarea, select, pre, [contenteditable], [data-react-scan-selectable]`,yf=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},bf=(e,t)=>({classGroupId:e,validator:t}),xf=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Sf=`-`,Cf=[],wf=`arbitrary..`,Tf=e=>{let t=Of(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Df(e);let n=e.split(Sf);return Ef(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?yf(i,t):t:i||Cf}return n[e]||Cf}}},Ef=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=Ef(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Sf):e.slice(t).join(Sf),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Df=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?wf+r:void 0})(),Of=e=>{let{theme:t,classGroups:n}=e;return kf(n,t)},kf=(e,t)=>{let n=xf();for(let r in e){let i=e[r];Af(i,n,r,t)}return n},Af=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];jf(i,t,n,r)}},jf=(e,t,n,r)=>{if(typeof e==`string`){Mf(e,t,n);return}if(typeof e==`function`){Nf(e,t,n,r);return}Pf(e,t,n,r)},Mf=(e,t,n)=>{let r=e===``?t:Ff(t,e);r.classGroupId=n},Nf=(e,t,n,r)=>{if(If(e)){Af(e(r),t,n,r);return}t.validators===null&&(t.validators=[]),t.validators.push(bf(n,e))},Pf=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Af(o,Ff(t,a),n,r)}},Ff=(e,t)=>{let n=e,r=t.split(Sf),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=xf(),n.nextPart.set(t,i)),n=i}return n},If=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Lf=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Rf=`!`,zf=`:`,Bf=[],Vf=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),Hf=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===zf){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Rf)?(c=s.slice(0,-1),l=!0):s.startsWith(Rf)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Vf(t,l,c,u)};if(t){let e=t+zf,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Vf(Bf,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Uf=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Wf=e=>({cache:Lf(e.cacheSize),parseClassName:Hf(e),sortModifiers:Uf(e),...Tf(e)}),Gf=/\s+/,Kf=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=t,o=[],s=e.trim().split(Gf),c=``;for(let e=s.length-1;e>=0;--e){let t=s[e],{isExternal:l,modifiers:u,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}=n(t);if(l){c=t+(c.length>0?` `+c:c);continue}let m=!!p,h=r(m?f.substring(0,p):f);if(!h){if(!m){c=t+(c.length>0?` `+c:c);continue}if(h=r(f),!h){c=t+(c.length>0?` `+c:c);continue}m=!1}let g=u.length===0?``:u.length===1?u[0]:a(u).join(`:`),_=d?g+Rf:g,v=_+h;if(o.indexOf(v)>-1)continue;o.push(v);let y=i(h,m);for(let e=0;e<y.length;++e){let t=y[e];o.push(_+t)}c=t+(c.length>0?` `+c:c)}return c},qf=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=Jf(n))&&(i&&(i+=` `),i+=r);return i},Jf=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Jf(e[r]))&&(n&&(n+=` `),n+=t);return n},Yf=(e,...t)=>{let n,r,i,a,o=o=>(n=Wf(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Kf(e,n);return i(e,a),a};return a=o,(...e)=>a(qf(...e))},Xf=[],V=e=>{let t=t=>t[e]||Xf;return t.isThemeGetter=!0,t},Zf=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Qf=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$f=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,ep=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,tp=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,np=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,rp=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ip=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ap=e=>$f.test(e),H=e=>!!e&&!Number.isNaN(Number(e)),op=e=>!!e&&Number.isInteger(Number(e)),sp=e=>e.endsWith(`%`)&&H(e.slice(0,-1)),cp=e=>ep.test(e),lp=()=>!0,up=e=>tp.test(e)&&!np.test(e),dp=()=>!1,fp=e=>rp.test(e),pp=e=>ip.test(e),mp=e=>!U(e)&&!W(e),hp=e=>Ap(e,Pp,dp),U=e=>Zf.test(e),gp=e=>Ap(e,Fp,up),_p=e=>Ap(e,Ip,H),vp=e=>Ap(e,Rp,lp),yp=e=>Ap(e,Lp,dp),bp=e=>Ap(e,Mp,dp),xp=e=>Ap(e,Np,pp),Sp=e=>Ap(e,zp,fp),W=e=>Qf.test(e),Cp=e=>jp(e,Fp),wp=e=>jp(e,Lp),Tp=e=>jp(e,Mp),Ep=e=>jp(e,Pp),Dp=e=>jp(e,Np),Op=e=>jp(e,zp,!0),kp=e=>jp(e,Rp,!0),Ap=(e,t,n)=>{let r=Zf.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},jp=(e,t,n=!1)=>{let r=Qf.exec(e);return r?r[1]?t(r[1]):n:!1},Mp=e=>e===`position`||e===`percentage`,Np=e=>e===`image`||e===`url`,Pp=e=>e===`length`||e===`size`||e===`bg-size`,Fp=e=>e===`length`,Ip=e=>e===`number`,Lp=e=>e===`family-name`,Rp=e=>e===`number`||e===`weight`,zp=e=>e===`shadow`,Bp=()=>{let e=V(`color`),t=V(`font`),n=V(`text`),r=V(`font-weight`),i=V(`tracking`),a=V(`leading`),o=V(`breakpoint`),s=V(`container`),c=V(`spacing`),l=V(`radius`),u=V(`shadow`),d=V(`inset-shadow`),f=V(`text-shadow`),p=V(`drop-shadow`),m=V(`blur`),h=V(`perspective`),g=V(`aspect`),_=V(`ease`),v=V(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],ee=()=>[...b(),W,U],te=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],ne=()=>[`auto`,`contain`,`none`],x=()=>[W,U,c],S=()=>[ap,`full`,`auto`,...x()],C=()=>[op,`none`,`subgrid`,W,U],re=()=>[`auto`,{span:[`full`,op,W,U]},op,W,U],ie=()=>[op,`auto`,W,U],ae=()=>[`auto`,`min`,`max`,`fr`,W,U],oe=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],se=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],ce=()=>[`auto`,...x()],le=()=>[ap,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...x()],ue=()=>[ap,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...x()],de=()=>[ap,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...x()],w=()=>[e,W,U],fe=()=>[...b(),Tp,bp,{position:[W,U]}],pe=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],me=()=>[`auto`,`cover`,`contain`,Ep,hp,{size:[W,U]}],T=()=>[sp,Cp,gp],he=()=>[``,`none`,`full`,l,W,U],ge=()=>[``,H,Cp,gp],_e=()=>[`solid`,`dashed`,`dotted`,`double`],ve=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],E=()=>[H,sp,Tp,bp],ye=()=>[``,`none`,m,W,U],be=()=>[`none`,H,W,U],xe=()=>[`none`,H,W,U],Se=()=>[H,W,U],Ce=()=>[ap,`full`,...x()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[cp],breakpoint:[cp],color:[lp],container:[cp],"drop-shadow":[cp],ease:[`in`,`out`,`in-out`],font:[mp],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[cp],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[cp],shadow:[cp],spacing:[`px`,H],text:[cp],"text-shadow":[cp],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,ap,U,W,g]}],container:[`container`],columns:[{columns:[H,U,W,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:ee()}],overflow:[{overflow:te()}],"overflow-x":[{"overflow-x":te()}],"overflow-y":[{"overflow-y":te()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{"inset-s":S(),start:S()}],end:[{"inset-e":S(),end:S()}],"inset-bs":[{"inset-bs":S()}],"inset-be":[{"inset-be":S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[op,`auto`,W,U]}],basis:[{basis:[ap,`full`,`auto`,s,...x()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[H,ap,`auto`,`initial`,`none`,U]}],grow:[{grow:[``,H,W,U]}],shrink:[{shrink:[``,H,W,U]}],order:[{order:[op,`first`,`last`,`none`,W,U]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:re()}],"col-start":[{"col-start":ie()}],"col-end":[{"col-end":ie()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:re()}],"row-start":[{"row-start":ie()}],"row-end":[{"row-end":ie()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":ae()}],"auto-rows":[{"auto-rows":ae()}],gap:[{gap:x()}],"gap-x":[{"gap-x":x()}],"gap-y":[{"gap-y":x()}],"justify-content":[{justify:[...oe(),`normal`]}],"justify-items":[{"justify-items":[...se(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...se()]}],"align-content":[{content:[`normal`,...oe()]}],"align-items":[{items:[...se(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...se(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":oe()}],"place-items":[{"place-items":[...se(),`baseline`]}],"place-self":[{"place-self":[`auto`,...se()]}],p:[{p:x()}],px:[{px:x()}],py:[{py:x()}],ps:[{ps:x()}],pe:[{pe:x()}],pbs:[{pbs:x()}],pbe:[{pbe:x()}],pt:[{pt:x()}],pr:[{pr:x()}],pb:[{pb:x()}],pl:[{pl:x()}],m:[{m:ce()}],mx:[{mx:ce()}],my:[{my:ce()}],ms:[{ms:ce()}],me:[{me:ce()}],mbs:[{mbs:ce()}],mbe:[{mbe:ce()}],mt:[{mt:ce()}],mr:[{mr:ce()}],mb:[{mb:ce()}],ml:[{ml:ce()}],"space-x":[{"space-x":x()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":x()}],"space-y-reverse":[`space-y-reverse`],size:[{size:le()}],"inline-size":[{inline:[`auto`,...ue()]}],"min-inline-size":[{"min-inline":[`auto`,...ue()]}],"max-inline-size":[{"max-inline":[`none`,...ue()]}],"block-size":[{block:[`auto`,...de()]}],"min-block-size":[{"min-block":[`auto`,...de()]}],"max-block-size":[{"max-block":[`none`,...de()]}],w:[{w:[s,`screen`,...le()]}],"min-w":[{"min-w":[s,`screen`,`none`,...le()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...le()]}],h:[{h:[`screen`,`lh`,...le()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...le()]}],"max-h":[{"max-h":[`screen`,`lh`,...le()]}],"font-size":[{text:[`base`,n,Cp,gp]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,kp,vp]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,sp,U]}],"font-family":[{font:[wp,yp,t]}],"font-features":[{"font-features":[U]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,W,U]}],"line-clamp":[{"line-clamp":[H,`none`,W,_p]}],leading:[{leading:[a,...x()]}],"list-image":[{"list-image":[`none`,W,U]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,W,U]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:w()}],"text-color":[{text:w()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[..._e(),`wavy`]}],"text-decoration-thickness":[{decoration:[H,`from-font`,`auto`,W,gp]}],"text-decoration-color":[{decoration:w()}],"underline-offset":[{"underline-offset":[H,`auto`,W,U]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:x()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,W,U]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,W,U]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:fe()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:me()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},op,W,U],radial:[``,W,U],conic:[op,W,U]},Dp,xp]}],"bg-color":[{bg:w()}],"gradient-from-pos":[{from:T()}],"gradient-via-pos":[{via:T()}],"gradient-to-pos":[{to:T()}],"gradient-from":[{from:w()}],"gradient-via":[{via:w()}],"gradient-to":[{to:w()}],rounded:[{rounded:he()}],"rounded-s":[{"rounded-s":he()}],"rounded-e":[{"rounded-e":he()}],"rounded-t":[{"rounded-t":he()}],"rounded-r":[{"rounded-r":he()}],"rounded-b":[{"rounded-b":he()}],"rounded-l":[{"rounded-l":he()}],"rounded-ss":[{"rounded-ss":he()}],"rounded-se":[{"rounded-se":he()}],"rounded-ee":[{"rounded-ee":he()}],"rounded-es":[{"rounded-es":he()}],"rounded-tl":[{"rounded-tl":he()}],"rounded-tr":[{"rounded-tr":he()}],"rounded-br":[{"rounded-br":he()}],"rounded-bl":[{"rounded-bl":he()}],"border-w":[{border:ge()}],"border-w-x":[{"border-x":ge()}],"border-w-y":[{"border-y":ge()}],"border-w-s":[{"border-s":ge()}],"border-w-e":[{"border-e":ge()}],"border-w-bs":[{"border-bs":ge()}],"border-w-be":[{"border-be":ge()}],"border-w-t":[{"border-t":ge()}],"border-w-r":[{"border-r":ge()}],"border-w-b":[{"border-b":ge()}],"border-w-l":[{"border-l":ge()}],"divide-x":[{"divide-x":ge()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":ge()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[..._e(),`hidden`,`none`]}],"divide-style":[{divide:[..._e(),`hidden`,`none`]}],"border-color":[{border:w()}],"border-color-x":[{"border-x":w()}],"border-color-y":[{"border-y":w()}],"border-color-s":[{"border-s":w()}],"border-color-e":[{"border-e":w()}],"border-color-bs":[{"border-bs":w()}],"border-color-be":[{"border-be":w()}],"border-color-t":[{"border-t":w()}],"border-color-r":[{"border-r":w()}],"border-color-b":[{"border-b":w()}],"border-color-l":[{"border-l":w()}],"divide-color":[{divide:w()}],"outline-style":[{outline:[..._e(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[H,W,U]}],"outline-w":[{outline:[``,H,Cp,gp]}],"outline-color":[{outline:w()}],shadow:[{shadow:[``,`none`,u,Op,Sp]}],"shadow-color":[{shadow:w()}],"inset-shadow":[{"inset-shadow":[`none`,d,Op,Sp]}],"inset-shadow-color":[{"inset-shadow":w()}],"ring-w":[{ring:ge()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:w()}],"ring-offset-w":[{"ring-offset":[H,gp]}],"ring-offset-color":[{"ring-offset":w()}],"inset-ring-w":[{"inset-ring":ge()}],"inset-ring-color":[{"inset-ring":w()}],"text-shadow":[{"text-shadow":[`none`,f,Op,Sp]}],"text-shadow-color":[{"text-shadow":w()}],opacity:[{opacity:[H,W,U]}],"mix-blend":[{"mix-blend":[...ve(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":ve()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[H]}],"mask-image-linear-from-pos":[{"mask-linear-from":E()}],"mask-image-linear-to-pos":[{"mask-linear-to":E()}],"mask-image-linear-from-color":[{"mask-linear-from":w()}],"mask-image-linear-to-color":[{"mask-linear-to":w()}],"mask-image-t-from-pos":[{"mask-t-from":E()}],"mask-image-t-to-pos":[{"mask-t-to":E()}],"mask-image-t-from-color":[{"mask-t-from":w()}],"mask-image-t-to-color":[{"mask-t-to":w()}],"mask-image-r-from-pos":[{"mask-r-from":E()}],"mask-image-r-to-pos":[{"mask-r-to":E()}],"mask-image-r-from-color":[{"mask-r-from":w()}],"mask-image-r-to-color":[{"mask-r-to":w()}],"mask-image-b-from-pos":[{"mask-b-from":E()}],"mask-image-b-to-pos":[{"mask-b-to":E()}],"mask-image-b-from-color":[{"mask-b-from":w()}],"mask-image-b-to-color":[{"mask-b-to":w()}],"mask-image-l-from-pos":[{"mask-l-from":E()}],"mask-image-l-to-pos":[{"mask-l-to":E()}],"mask-image-l-from-color":[{"mask-l-from":w()}],"mask-image-l-to-color":[{"mask-l-to":w()}],"mask-image-x-from-pos":[{"mask-x-from":E()}],"mask-image-x-to-pos":[{"mask-x-to":E()}],"mask-image-x-from-color":[{"mask-x-from":w()}],"mask-image-x-to-color":[{"mask-x-to":w()}],"mask-image-y-from-pos":[{"mask-y-from":E()}],"mask-image-y-to-pos":[{"mask-y-to":E()}],"mask-image-y-from-color":[{"mask-y-from":w()}],"mask-image-y-to-color":[{"mask-y-to":w()}],"mask-image-radial":[{"mask-radial":[W,U]}],"mask-image-radial-from-pos":[{"mask-radial-from":E()}],"mask-image-radial-to-pos":[{"mask-radial-to":E()}],"mask-image-radial-from-color":[{"mask-radial-from":w()}],"mask-image-radial-to-color":[{"mask-radial-to":w()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[H]}],"mask-image-conic-from-pos":[{"mask-conic-from":E()}],"mask-image-conic-to-pos":[{"mask-conic-to":E()}],"mask-image-conic-from-color":[{"mask-conic-from":w()}],"mask-image-conic-to-color":[{"mask-conic-to":w()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:fe()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:me()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,W,U]}],filter:[{filter:[``,`none`,W,U]}],blur:[{blur:ye()}],brightness:[{brightness:[H,W,U]}],contrast:[{contrast:[H,W,U]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,Op,Sp]}],"drop-shadow-color":[{"drop-shadow":w()}],grayscale:[{grayscale:[``,H,W,U]}],"hue-rotate":[{"hue-rotate":[H,W,U]}],invert:[{invert:[``,H,W,U]}],saturate:[{saturate:[H,W,U]}],sepia:[{sepia:[``,H,W,U]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,W,U]}],"backdrop-blur":[{"backdrop-blur":ye()}],"backdrop-brightness":[{"backdrop-brightness":[H,W,U]}],"backdrop-contrast":[{"backdrop-contrast":[H,W,U]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,H,W,U]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[H,W,U]}],"backdrop-invert":[{"backdrop-invert":[``,H,W,U]}],"backdrop-opacity":[{"backdrop-opacity":[H,W,U]}],"backdrop-saturate":[{"backdrop-saturate":[H,W,U]}],"backdrop-sepia":[{"backdrop-sepia":[``,H,W,U]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":x()}],"border-spacing-x":[{"border-spacing-x":x()}],"border-spacing-y":[{"border-spacing-y":x()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,W,U]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[H,`initial`,W,U]}],ease:[{ease:[`linear`,`initial`,_,W,U]}],delay:[{delay:[H,W,U]}],animate:[{animate:[`none`,v,W,U]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,W,U]}],"perspective-origin":[{"perspective-origin":ee()}],rotate:[{rotate:be()}],"rotate-x":[{"rotate-x":be()}],"rotate-y":[{"rotate-y":be()}],"rotate-z":[{"rotate-z":be()}],scale:[{scale:xe()}],"scale-x":[{"scale-x":xe()}],"scale-y":[{"scale-y":xe()}],"scale-z":[{"scale-z":xe()}],"scale-3d":[`scale-3d`],skew:[{skew:Se()}],"skew-x":[{"skew-x":Se()}],"skew-y":[{"skew-y":Se()}],transform:[{transform:[W,U,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:ee()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:Ce()}],"translate-x":[{"translate-x":Ce()}],"translate-y":[{"translate-y":Ce()}],"translate-z":[{"translate-z":Ce()}],"translate-none":[`translate-none`],accent:[{accent:w()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:w()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,W,U]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":x()}],"scroll-mx":[{"scroll-mx":x()}],"scroll-my":[{"scroll-my":x()}],"scroll-ms":[{"scroll-ms":x()}],"scroll-me":[{"scroll-me":x()}],"scroll-mbs":[{"scroll-mbs":x()}],"scroll-mbe":[{"scroll-mbe":x()}],"scroll-mt":[{"scroll-mt":x()}],"scroll-mr":[{"scroll-mr":x()}],"scroll-mb":[{"scroll-mb":x()}],"scroll-ml":[{"scroll-ml":x()}],"scroll-p":[{"scroll-p":x()}],"scroll-px":[{"scroll-px":x()}],"scroll-py":[{"scroll-py":x()}],"scroll-ps":[{"scroll-ps":x()}],"scroll-pe":[{"scroll-pe":x()}],"scroll-pbs":[{"scroll-pbs":x()}],"scroll-pbe":[{"scroll-pbe":x()}],"scroll-pt":[{"scroll-pt":x()}],"scroll-pr":[{"scroll-pr":x()}],"scroll-pb":[{"scroll-pb":x()}],"scroll-pl":[{"scroll-pl":x()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,W,U]}],fill:[{fill:[`none`,...w()]}],"stroke-w":[{stroke:[H,Cp,gp,_p]}],stroke:[{stroke:[`none`,...w()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}},Vp=Yf(Bp),G=(...e)=>Vp(Hd(e)),typeof navigator<`u`&&navigator.userAgent.includes(`Firefox`),Hp=(e,t)=>{let n=0;return r=>{let i=Date.now();if(i-n>=t)return n=i,e(r)}},Up=e=>{if(!cf)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Wp=(e,t)=>{if(cf)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},Gp=e=>{if(cf)try{window.localStorage.removeItem(e)}catch{}},Kp=24,qp=12,Jp=e=>{if(!e)return{name:`Unknown`,wrappers:[],wrapperTypes:[]};let{tag:t,type:n,elementType:r}=e,i=T(n),a=[],o=[];if(pe(e)||t===15||t===14||n?.$$typeof===Symbol.for(`react.memo`)||r?.$$typeof===Symbol.for(`react.memo`)){let t=pe(e);o.push({type:`memo`,title:t?`This component has been auto-memoized by the React Compiler.`:`Memoized component that skips re-renders if props are the same`,compiler:t})}if(t===Kp&&o.push({type:`lazy`,title:`Lazily loaded component that supports code splitting`}),t===13&&o.push({type:`suspense`,title:`Component that can suspend while content is loading`}),t===qp&&o.push({type:`profiler`,title:`Component that measures rendering performance`}),typeof i==`string`){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let n=t.match(e);if(n?.[1]&&n?.[2])a.unshift(n[1]),t=n[2];else break}i=t}return{name:i||`Unknown`,wrappers:a,wrapperTypes:o}},Yp=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0,Xp=e=>!!e&&typeof e==`object`&&!Array.isArray(e),Zp=()=>{let e=$.options.value.safeArea;if(Yp(e))return{top:e,right:e,bottom:e,left:e};if(Xp(e)){let t=e.top,n=e.right,r=e.bottom,i=e.left;return{top:Yp(t)?t:ff,right:Yp(n)?n:ff,bottom:Yp(r)?r:ff,left:Yp(i)?i:ff}}return{top:ff,right:ff,bottom:ff,left:ff}},Qp=tn(!1),$p=tn(null),em=()=>({corner:`bottom-right`,dimensions:{isFullWidth:!1,isFullHeight:!1,width:B.width,height:B.height,position:{x:ff,y:ff}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:B.width,height:B.height,position:{x:ff,y:ff}},componentsTree:{width:mf}}),em(),tm=()=>{let e=em(),t=Up(hf);return t?{corner:t.corner??e.corner,dimensions:t.dimensions??e.dimensions,lastDimensions:t.lastDimensions??t.dimensions??e.lastDimensions,componentsTree:t.componentsTree??e.componentsTree}:(Wp(hf,{corner:e.corner,dimensions:e.dimensions,lastDimensions:e.lastDimensions,componentsTree:e.componentsTree}),e)},K=tn(tm()),nm=()=>{if(!cf)return;let{dimensions:e}=K.value,{width:t,height:n,position:r}=e,i=Zp();K.value={...K.value,dimensions:{isFullWidth:t>=window.innerWidth-i.left-i.right,isFullHeight:n>=window.innerHeight-i.top-i.bottom,width:t,height:n,position:r}}},q=tn({view:`none`}),rm=Up(gf),im=tn(rm??null),am=e=>{let{count:t,getScrollElement:n,estimateSize:r,overscan:i=5}=e,[a,o]=k(0),[s,c]=k(0),l=j(),u=j(null),d=j(null),f=r(),p=M(e=>{u.current&&c((e?.[0])?.contentRect.height??u.current.getBoundingClientRect().height)},[]),m=M(()=>{d.current!==null&&cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>{p(),d.current=null})},[p]);A(()=>{let e=n();if(!e)return;u.current=e;let t=()=>{u.current&&o(u.current.scrollTop)};p(),l.current||=new ResizeObserver(()=>{m()}),l.current.observe(e),e.addEventListener(`scroll`,t,{passive:!0});let r=new MutationObserver(m);return r.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener(`scroll`,t),l.current&&l.current.disconnect(),r.disconnect(),d.current!==null&&cancelAnimationFrame(d.current)}},[n,p,m]);let h=kt(()=>{let e=Math.floor(a/f),n=Math.ceil(s/f);return{start:Math.max(0,e-i),end:Math.min(t,e+n+i)}},[a,f,s,t,i]);return{virtualItems:kt(()=>{let e=[];for(let t=h.start;t<h.end;t++)e.push({key:t,index:t,start:t*f});return e},[h,f]),totalSize:t*f,scrollTop:a,containerHeight:s}},om=e=>{let t=[],n=e;for(;n;){let e=n.elementType,r=typeof e==`function`?e.displayName||e.name:typeof e==`string`?e:`Unknown`,i=n.index===void 0?``:`[${n.index}]`;t.unshift(`${r}${i}`),n=n.return??null}return t.join(`::`)},sm=new WeakMap,cm=(e,t)=>{let n=t.bind(null,e);return document.addEventListener(`scroll`,n,{passive:!0,capture:!0}),()=>{document.removeEventListener(`scroll`,n,{capture:!0})}},lm={activeFlashes:new Map,create(e){let t=e.querySelector(`.react-scan-flash-overlay`),n=t instanceof HTMLElement?t:(()=>{let t=document.createElement(`div`);t.className=`react-scan-flash-overlay`,e.appendChild(t);let n=cm(e,()=>{e.querySelector(`.react-scan-flash-overlay`)&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t})(),r=sm.get(n);r&&(clearTimeout(r),sm.delete(n)),requestAnimationFrame(()=>{n.style.transition=`none`,n.style.opacity=`0.9`;let t=setTimeout(()=>{n.style.transition=`opacity 150ms ease-out`,n.style.opacity=`0`;let t=setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n);let t=this.activeFlashes.get(e);t?.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e),sm.delete(n)},150);sm.set(n,t)},300);sm.set(n,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let n=sm.get(t.overlay);n&&(clearTimeout(n),sm.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},um=1e3,dm={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},fm=tn(dm),pm=tn(0),mm=[],hm=null,gm=()=>{if(mm.length===0)return;let e=[...mm],{updates:t,totalUpdates:n,currentIndex:r,isViewingHistory:i}=fm.value,a=[...t],o=n;for(let{update:t}of e)a.length>=um&&a.shift(),a.push(t),o++;let s=Math.max(0,o-um),c;c=i?r===n-1?a.length-1:r===0?0:s===0?r:r-1:a.length-1;let l=e[e.length-1];fm.value={...fm.value,latestFiber:l.fiber,updates:a,totalUpdates:o,windowOffset:s,currentIndex:c,isViewingHistory:i},mm=mm.slice(e.length)},_m={showTimeline:()=>{fm.value={...fm.value,isVisible:!0}},hideTimeline:()=>{fm.value={...fm.value,isVisible:!1,currentIndex:fm.value.updates.length-1}},updateFrame:(e,t)=>{fm.value={...fm.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{fm.value={...fm.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(mm.push({update:e,fiber:t}),!hm){let e=()=>{gm(),hm=null,mm.length>0&&(hm=setTimeout(e,96))};hm=setTimeout(e,96)}},reset:()=>{hm&&=(clearTimeout(hm),null),mm=[],fm.value=dm}},vm=tn({query:``,matches:[],currentMatchIndex:-1}),ym=tn(!1),bm=(e,t=0,n=null)=>e.reduce((e,r,i)=>{let a=r.element?om(r.fiber):`${n}-${i}`,o=r.fiber?.type?Xd(r.fiber):void 0,s={...r,depth:t,nodeId:a,parentId:n,fiber:r.fiber,renderData:o};return e.push(s),r.children?.length&&e.push(...bm(r.children,t+1,a)),e},[]),xm=e=>e.reduce((e,t)=>Math.max(e,t.depth),0),Sm=(e,t)=>{if(t<=0)return 24;let n=Math.max(0,e-mf);if(n<24)return 0;let r=Math.min(n*.3,t*24)/t;return Math.max(0,Math.min(24,r))},Cm=[`memo`,`forwardRef`,`lazy`,`suspense`],wm=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let n=[],r=t[1].split(`,`);for(let e of r){let t=e.trim().toLowerCase();t&&n.push(t)}return n},Tm=e=>{if(e.length===0)return!1;for(let t of e){let e=!1;for(let n of Cm)if(n.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0},Em=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(let n of e){let e=!1;for(let r of t)if(r.type.toLowerCase().includes(n)){e=!0;break}if(!e)return!1}return!0},Dm=(e,t)=>kt(()=>{let{query:n,matches:r}=t,i=r.some(t=>t.nodeId===e.nodeId),a=wm(n)||[],o=n?n.replace(/\[.*?\]/,``).trim():``;if(!n||!i)return{highlightedText:I(`span`,{className:`truncate`,children:e.label}),typeHighlight:!1};let s=!0;if(a.length>0)if(!e.fiber)s=!1;else{let{wrapperTypes:t}=Jp(e.fiber);s=Em(a,t)}let c=I(`span`,{className:`truncate`,children:e.label});if(o)try{if(o.startsWith(`/`)&&o.endsWith(`/`)){let t=o.slice(1,-1),n=RegExp(`(${t})`,`i`),r=e.label.split(n);c=I(`span`,{className:`tree-node-search-highlight`,children:r.map((t,i)=>n.test(t)?I(`span`,{className:G(`regex`,{start:n.test(t)&&i===0,middle:n.test(t)&&i%2==1,end:n.test(t)&&i===r.length-1,"!ml-0":i===1}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),n=o.toLowerCase(),r=t.indexOf(n);r>=0&&(c=I(`span`,{className:`tree-node-search-highlight`,children:[e.label.slice(0,r),I(`span`,{className:`single`,children:e.label.slice(r,r+o.length)}),e.label.slice(r+o.length)]}))}}catch{}return{highlightedText:c,typeHighlight:s&&a.length>0}},[e.label,e.nodeId,e.fiber,t]),Om=e=>e>0?e<.1-2**-52?`< 0.1`:e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:`0`,km=({node:e,nodeIndex:t,hasChildren:n,isCollapsed:r,handleTreeNodeClick:i,handleTreeNodeToggle:a,searchValue:o})=>{let s=j(null),c=j(e.renderData?.renderCount??0),{highlightedText:l,typeHighlight:u}=Dm(e,o);A(()=>{let t=e.renderData?.renderCount,n=s.current;!n||!c.current||!t||c.current===t||(n.classList.remove(`count-flash`),n.offsetWidth,n.classList.add(`count-flash`),c.current=t)},[e.renderData?.renderCount]);let d=kt(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:n,renderCount:r}=e.renderData;return r?I(`span`,{className:G(`flex items-center gap-x-0.5 ml-1.5`,`text-[10px] text-neutral-400`),children:I(`span`,{ref:s,title:`Self time: ${Om(t)}ms
Total time: ${Om(n)}ms`,className:`count-badge`,children:[`×`,r]})}):null},[e.renderData]),f=kt(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=Jp(e.fiber),n=t[0];return I(`span`,{className:G(`flex items-center gap-x-1`,`text-[10px] text-neutral-400 tracking-wide`,`overflow-hidden`),children:[n&&I(D,{children:[I(`span`,{title:n?.title,className:G(`rounded py-[1px] px-1`,`bg-neutral-700 text-neutral-300`,`truncate`,n.type===`memo`&&`bg-[#8e61e3] text-white`,u&&`bg-yellow-300 text-black`),children:n.type},n.type),n.compiler&&I(`span`,{className:`text-yellow-300 ml-1`,children:`✨`})]}),t.length>1&&`\xD7${t.length}`,d]})},[e.fiber,u,d]);return I(`button`,{type:`button`,title:e.title,"data-index":t,className:G(`flex items-center gap-x-1`,`pl-1 pr-2`,`w-full h-7`,`text-left`,`rounded`,`cursor-pointer select-none`),onClick:i,children:[I(`button`,{type:`button`,"data-index":t,onClick:a,className:G(`w-6 h-6 flex items-center justify-center`,`text-left`),children:n&&I(z,{name:`icon-chevron-right`,size:12,className:G(`transition-transform`,!r&&`rotate-90`)})}),l,f]})},Am=()=>{let e=j(null),t=j(null),n=j(null),r=j(null),i=j(null),a=j(0),o=j(!1),s=j(!1),c=j(null),[l,u]=k([]),[d,f]=k(new Set),[p,m]=k(void 0),[h,g]=k(vm.value),_=kt(()=>{let e=[],t=l,n=new Map(t.map(e=>[e.nodeId,e]));for(let r of t){let t=!0,i=r;for(;i.parentId;){let e=n.get(i.parentId);if(!e)break;if(d.has(e.nodeId)){t=!1;break}i=e}t&&e.push(r)}return e},[d,l]),{virtualItems:v,totalSize:y}=am({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),b=M(t=>{var n;o.current=!0,(n=r.current)==null||n.blur(),ym.value=!0;let{parentCompositeFiber:i}=dh(t);if(!i)return;Q.inspectState.value={kind:`focused`,focusedDomElement:t,fiber:i};let a=_.findIndex(e=>e.element===t);if(a!==-1){m(a);let t=a*28,n=e.current;if(n){let e=n.clientHeight,r=n.scrollTop;(t<r||t+28>r+e)&&n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),ee=M(e=>{let t=e.currentTarget,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].element;r&&b(r)},[_,b]),te=M(e=>{f(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),ne=M(e=>{e.stopPropagation();let t=e.target,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].nodeId;te(r)},[_,te]),x=M(t=>{var r,i,a,o,s;(r=n.current)==null||r.classList.remove(`!border-red-500`);let c=[];if(!t){vm.value={query:t,matches:c,currentMatchIndex:-1};return}if(t.includes(`[`)&&!t.includes(`]`)&&t.length>t.indexOf(`[`)+1){(i=n.current)==null||i.classList.add(`!border-red-500`);return}let u=wm(t)||[];if(t.includes(`[`)&&!Tm(u)){(a=n.current)==null||a.classList.add(`!border-red-500`);return}let d=t.replace(/\[.*?\]/,``).trim(),f=/^\/.*\/$/.test(d),p=e=>!1;if(d.startsWith(`/`)&&!f&&d.length>1){(o=n.current)==null||o.classList.add(`!border-red-500`);return}if(f)try{let e=d.slice(1,-1),t=new RegExp(e,`i`);p=e=>t.test(e)}catch{(s=n.current)==null||s.classList.add(`!border-red-500`);return}else if(d){let e=d.toLowerCase();p=t=>t.toLowerCase().includes(e)}for(let e of l){let t=!0;if(d&&(t=p(e.label)),t&&u.length>0)if(!e.fiber)t=!1;else{let{wrapperTypes:n}=Jp(e.fiber);t=Em(u,n)}t&&c.push(e)}if(vm.value={query:t,matches:c,currentMatchIndex:c.length>0?0:-1},c.length>0){let t=c[0],n=_.findIndex(e=>e.nodeId===t.nodeId);if(n!==-1){let t=n*28,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}}},[l,_]),S=M(e=>{let t=e.currentTarget;t&&x(t.value)},[x]),C=M(t=>{let{matches:n,currentMatchIndex:r}=vm.value;if(n.length===0)return;let i=t===`next`?(r+1)%n.length:(r-1+n.length)%n.length;vm.value={...vm.value,currentMatchIndex:i};let a=n[i],o=_.findIndex(e=>e.nodeId===a.nodeId);if(o!==-1){m(o);let t=o*28,n=e.current;if(n){let e=n.clientHeight;n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),re=M(n=>{if(t.current&&(t.current.style.width=`${n}px`),e.current){e.current.style.width=`${n}px`;let t=Sm(n,a.current);e.current.style.setProperty(`--indentation-size`,`${t}px`)}},[]),ie=M(e=>{if(!c.current)return;let t=K.value.dimensions.width,n=Math.floor(t-mf/2);c.current.classList.remove(`cursor-ew-resize`,`cursor-w-resize`,`cursor-e-resize`),e<=mf?c.current.classList.add(`cursor-w-resize`):e>=n?c.current.classList.add(`cursor-e-resize`):c.current.classList.add(`cursor-ew-resize`)},[]),ae=M(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty(`pointer-events`,`none`),s.current=!0;let n=t.clientX,r=e.current.offsetWidth,i=K.value.dimensions.width,a=Math.floor(i-mf/2);ie(r);let o=e=>{let t=r+(n-e.clientX);ie(t),re(Math.min(a,Math.max(mf,t)))},c=()=>{e.current&&(e.current.style.removeProperty(`pointer-events`),document.removeEventListener(`pointermove`,o),document.removeEventListener(`pointerup`,c),K.value={...K.value,componentsTree:{...K.value.componentsTree,width:e.current.offsetWidth}},Wp(hf,K.value),s.current=!1)};document.addEventListener(`pointermove`,o),document.addEventListener(`pointerup`,c)},[re,ie]);A(()=>{if(!e.current)return;let t=e.current.offsetWidth;return ie(t),K.subscribe(()=>{e.current&&ie(e.current.offsetWidth)})},[ie]);let oe=M(()=>{o.current=!1},[]);return A(()=>{let t=!0,n=e=>{let t=new Map,n=[];for(let{element:n,name:r,fiber:i}of e){if(!n)continue;let e=r,{name:a,wrappers:o}=Jp(i);a&&(e=o.length>0?`${o.join(`(`)}(${a})${`)`.repeat(o.length)}`:a),t.set(n,{label:a||r,title:e,children:[],element:n,fiber:i})}for(let{element:r,depth:i}of e){if(!r)continue;let e=t.get(r);if(e)if(i===0)n.push(e);else{let n=r.parentElement;for(;n;){let r=t.get(n);if(r){r.children=r.children||[],r.children.push(e);break}n=n.parentElement}}}return n},r=()=>{let r=i.current;if(!r)return;let o=n(gh());if(o.length>0){let n=bm(o);if(a.current=xm(n),re(K.value.componentsTree.width),u(n),t){t=!1;let i=n.findIndex(e=>e.element===r);if(i!==-1){let t=i*28,n=e.current;n&&setTimeout(()=>{n.scrollTo({top:t,behavior:`instant`})},96)}}}},o=Q.inspectState.subscribe(e=>{if(e.kind===`focused`){if(ym.value)return;x(``),i.current=e.focusedDomElement,r()}}),c=0,l=pm.subscribe(()=>{if(Q.inspectState.value.kind===`focused`){if(cancelAnimationFrame(c),s.current)return;c=requestAnimationFrame(()=>{ym.value=!1,r()})}});return()=>{o(),l(),vm.value={query:``,matches:[],currentMatchIndex:-1}}},[]),A(()=>{let e=e=>{if(o.current&&p)switch(e.key){case`ArrowUp`:if(e.preventDefault(),e.stopPropagation(),p>0){let e=_[p-1];e?.element&&b(e.element)}return;case`ArrowDown`:if(e.preventDefault(),e.stopPropagation(),p<_.length-1){let e=_[p+1];e?.element&&b(e.element)}return;case`ArrowLeft`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&te(t.nodeId);return}case`ArrowRight`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&te(t.nodeId);return}}};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p,_,b,te]),A(()=>vm.subscribe(g),[]),A(()=>K.subscribe(e=>{var n;(n=t.current)==null||n.style.setProperty(`transition`,`width 0.1s`),re(e.componentsTree.width),setTimeout(()=>{var e;(e=t.current)==null||e.style.removeProperty(`transition`)},500)}),[]),I(`div`,{className:`react-scan-components-tree flex`,children:[I(`div`,{ref:c,onPointerDown:ae,className:`relative resize-v-line`,children:I(`span`,{children:I(z,{name:`icon-ellipsis`,size:18})})}),I(`div`,{ref:t,className:`flex flex-col h-full`,children:[I(`div`,{className:`p-2 border-b border-[#1e1e1e]`,children:I(`div`,{ref:n,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:G(`relative`,`flex items-center gap-x-1 px-2`,`rounded`,`border border-transparent`,`focus-within:border-[#454545]`,`bg-[#1e1e1e] text-neutral-300`,`transition-colors`,`whitespace-nowrap`,`overflow-hidden`),children:[I(z,{name:`icon-search`,size:12,className:` text-neutral-500`}),I(`div`,{className:`relative flex-1 h-7 overflow-hidden`,children:I(`input`,{ref:r,type:`text`,value:vm.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{e.key===`Escape`&&e.currentTarget.blur(),vm.value.matches.length&&(e.key===`Enter`&&e.shiftKey?C(`prev`):e.key===`Enter`&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),b(vm.value.matches[vm.value.currentMatchIndex].element),e.currentTarget.focus()):C(`next`)))},onChange:S,className:`absolute inset-y-0 inset-x-1`,placeholder:`Component name, /regex/, or [type]`})}),vm.value.query?I(D,{children:[I(`span`,{className:`flex items-center gap-x-0.5 text-xs text-neutral-500`,children:[vm.value.currentMatchIndex+1,`|`,vm.value.matches.length]}),!!vm.value.matches.length&&I(D,{children:[I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),C(`prev`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(z,{name:`icon-chevron-right`,className:`-rotate-90`,size:12})}),I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),C(`next`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(z,{name:`icon-chevron-right`,className:`rotate-90`,size:12})})]}),I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),x(``)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(z,{name:`icon-close`,size:12})})]}):!!l.length&&I(`span`,{className:`text-xs text-neutral-500`,children:l.length})]})}),I(`div`,{className:`flex-1 overflow-hidden`,children:I(`div`,{ref:e,onPointerLeave:oe,className:`tree h-full overflow-auto will-change-transform`,children:I(`div`,{className:`relative w-full`,style:{height:y},children:v.map(e=>{let t=_[e.index];if(!t)return null;let n=Q.inspectState.value.kind===`focused`&&t.element===Q.inspectState.value.focusedDomElement,r=e.index===p;return I(`div`,{className:G(`absolute left-0 w-full overflow-hidden`,`text-neutral-400 hover:text-neutral-300`,`bg-transparent hover:bg-[#5f3f9a]/20`,(n||r)&&`text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40`),style:{top:e.start,height:28},children:I(`div`,{className:`w-full h-full`,style:{paddingLeft:`calc(${t.depth} * var(--indentation-size))`},children:I(km,{node:t,nodeIndex:e.index,hasChildren:!!t.children?.length,isCollapsed:d.has(t.nodeId),handleTreeNodeClick:ee,handleTreeNodeToggle:ne,searchValue:h})})},t.nodeId)})})})})]})]})},jm=Kn(({text:e,children:t,onCopy:n,className:r,iconSize:i=14})=>{let[a,o]=k(!1);A(()=>{if(a){let e=setTimeout(()=>o(!1),600);return()=>{clearTimeout(e)}}},[a]);let s=M(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{o(!0),n?.(!0,e)},()=>{n?.(!1,e)})},[e,n]),c=I(`button`,{onClick:s,type:`button`,className:G(`z-10`,`flex items-center justify-center`,`hover:text-dev-pink-400`,`transition-colors duration-200 ease-in-out`,`cursor-pointer`,`size-[${i}px]`,r),children:I(z,{name:`icon-${a?`check`:`copy`}`,size:[i],className:G(a&&`text-green-500`)})});return t?t({ClipboardIcon:c,onClick:s}):c}),Mm=({length:e,expanded:t,onToggle:n,isNegative:r})=>I(`div`,{className:`flex items-center gap-1`,children:[I(`button`,{type:`button`,onClick:n,className:`flex items-center p-0 opacity-50`,children:I(z,{name:`icon-chevron-right`,size:12,className:G(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),I(`span`,{children:[`Array(`,e,`)`]})]}),Nm=({value:e,path:t,isNegative:n})=>{let[r,i]=k(!1);if(!(typeof e==`object`&&e&&!(e instanceof Date)))return I(`div`,{className:`flex items-center gap-1`,children:[I(`span`,{className:`text-gray-500`,children:[t,`:`]}),I(`span`,{className:`truncate`,children:Sh(e)})]});let a=Object.entries(e);return I(`div`,{className:`flex flex-col`,children:[I(`div`,{className:`flex items-center gap-1`,children:[I(`button`,{type:`button`,onClick:()=>i(!r),className:`flex items-center p-0 opacity-50`,children:I(z,{name:`icon-chevron-right`,size:12,className:G(`transition-[color,transform]`,n?`text-[#f87171]`:`text-[#4ade80]`,r&&`rotate-90`)})}),I(`span`,{className:`text-gray-500`,children:[t,`:`]}),!r&&I(`span`,{className:`truncate`,children:e instanceof Date?Sh(e):`{${Object.keys(e).join(`, `)}}`})]}),r&&I(`div`,{className:`pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:a.map(([e,t])=>I(Nm,{value:t,path:e,isNegative:n},e))})]})},Pm=({value:e,expanded:t,onToggle:n,isNegative:r})=>{let{value:i,error:a}=Ch(e);return a?I(`span`,{className:`text-gray-500 font-italic`,children:a}):typeof i==`object`&&i&&!(i instanceof Promise)?Array.isArray(i)?I(`div`,{className:`flex flex-col gap-1 relative`,children:[I(Mm,{length:i.length,expanded:t,onToggle:n,isNegative:r}),t&&I(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:i.map((e,t)=>I(Nm,{value:e,path:t.toString(),isNegative:r},t.toString()))}),I(jm,{text:_h(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>I(D,{children:e})})]}):I(`div`,{className:`flex items-start gap-1 relative`,children:[I(`button`,{type:`button`,onClick:n,className:G(`flex items-center`,`p-0 mt-0.5 mr-1`,`opacity-50`),children:I(z,{name:`icon-chevron-right`,size:12,className:G(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),I(`div`,{className:`flex-1`,children:t?I(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:Object.entries(i).map(([e,t])=>I(Nm,{value:t,path:e,isNegative:r},e))}):I(`span`,{children:Sh(i)})}),I(jm,{text:_h(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>I(D,{children:e})})]}):I(`span`,{children:Sh(i)})},Fm=50,tn({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}}),Im=e=>{switch(e.kind){case`initialized`:return e.changes.currentValue;case`partially-initialized`:return e.value}},Lm=(e,t)=>{for(let n of e){let e=t.get(n.name);if(e){t.set(e.name,{count:e.count+1,currentValue:n.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:n.prevValue});continue}t.set(n.name,{count:1,currentValue:n.value,id:n.name,lastUpdated:Date.now(),name:n.name,previousValue:n.prevValue})}},Rm=(e,t)=>{for(let n of e){let e=t.contextChanges.get(n.contextType);if(e){if(Bd(Im(e),n.value))continue;if(e.kind===`partially-initialized`){t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.value}});continue}t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.changes.currentValue}});continue}t.contextChanges.set(n.contextType,{kind:`partially-initialized`,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,value:n.value})}},zm=e=>{let t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(e=>{Rm(e.contextChanges,t),Lm(e.stateChanges,t.stateChanges),Lm(e.propsChanges,t.propsChanges)}),t},Bm=(e,t)=>{let n=new Map;return e.forEach((e,t)=>{n.set(t,e)}),t.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}n.set(t,{count:r.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue})}),n},Vm=(e,t)=>{let n=new Map;return e.contextChanges.forEach((e,t)=>{n.set(t,e)}),t.contextChanges.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}if(Im(e)!==Im(r))switch(r.kind){case`initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}});return}case`partially-initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}});return}}}),n},Hm=(e,t)=>({contextChanges:Vm(e,t),propsChanges:Bm(e.propsChanges,t.propsChanges),stateChanges:Bm(e.stateChanges,t.stateChanges)}),Um=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>e.kind===`initialized`).reduce((e,t)=>e+t.changes.count,0),Wm=e=>{let t=j({queue:[]}),[n,r]=k({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i=Q.inspectState.value.kind===`focused`?Q.inspectState.value.fiber:null,a=i?ye(i):null;return A(()=>{let n=setInterval(()=>{t.current.queue.length!==0&&(r(n=>{var r;let i=Hm(n,zm(t.current.queue)),a=Um(n),o=Um(i)-a;return(r=e?.onChangeUpdate)==null||r.call(e,o),i}),t.current.queue=[])},Fm);return()=>{clearInterval(n)}},[i]),A(()=>{if(!a)return;let e=e=>{var n;(n=t.current)==null||n.queue.push(e)},n=Q.changesListeners.get(a);return n||(n=[],Q.changesListeners.set(a,n)),n.push(e),()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],Q.changesListeners.set(a,Q.changesListeners.get(a)?.filter(t=>t!==e)??[])}},[a]),A(()=>()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[a]),n},Gm=Kn(()=>{let[e,t]=k(!0),n=Wm(),[r,i]=k(!1),a=Um(n)>0;A(()=>{if(!r&&a){let e=setTimeout(()=>{i(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[r,a]);let o=new Map(Array.from(n.contextChanges.entries()).filter(([,e])=>e.kind===`initialized`).map(([e,t])=>[e,t.kind===`partially-initialized`?null:t.changes])),s=Q.inspectState.value.kind===`focused`?Q.inspectState.value.fiber:null;if(s)return I(D,{children:[I(qm,{}),I(`div`,{className:`overflow-hidden h-full flex flex-col gap-y-2`,children:[I(`div`,{className:`flex flex-col gap-2 px-3 pt-2`,children:[I(`span`,{className:`text-sm font-medium text-[#888]`,children:[`Why did`,` `,I(`span`,{className:`text-[#A855F7]`,children:T(s)}),` `,`render?`]}),!a&&I(`div`,{className:`text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4`,children:[I(`div`,{children:`No changes detected since selecting`}),I(`div`,{children:`The props, state, and context changes within your component will be reported here`})]})]}),I(`div`,{className:G(`flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full`),children:[I(Ym,{changes:n.propsChanges,title:`Changed Props`,isExpanded:e}),I(Ym,{renderName:e=>Km(e,T(me(s))??`Unknown Component`),changes:n.stateChanges,title:`Changed State`,isExpanded:e}),I(Ym,{changes:o,title:`Changed Context`,isExpanded:e})]})]})]})}),Km=(e,t)=>{if(Number.isNaN(Number(e)))return e;let n=Number.parseInt(e);return I(`span`,{className:`truncate`,children:[I(`span`,{className:`text-white`,children:[n,(e=>{let t=e%10,n=e%100;if(n>=11&&n<=13)return`th`;switch(t){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}})(n),` hook`,` `]}),I(`span`,{style:{color:`#666`},children:[`called in `,I(`i`,{className:`text-[#A855F7] truncate`,children:t})]})]})},qm=Kn(()=>{let e=j(null),t=j(null),n=j(null),r=j({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return A(()=>{let i=Hp(()=>{let r=[];e.current?.dataset.flash===`true`&&r.push(e.current),t.current?.dataset.flash===`true`&&r.push(t.current),n.current?.dataset.flash===`true`&&r.push(n.current);for(let e of r)e.classList.remove(`count-flash-white`),e.offsetWidth,e.classList.add(`count-flash-white`)},400);return fm.subscribe(a=>{if(!e.current||!t.current||!n.current)return;let{currentIndex:o,updates:s}=a,c=s[o];!c||o===0||(i(),r.current={isPropsChanged:(c.props?.changes?.size??0)>0,isStateChanged:(c.state?.changes?.size??0)>0,isContextChanged:(c.context?.changes?.size??0)>0},e.current.dataset.flash!==`true`&&(e.current.dataset.flash=r.current.isPropsChanged.toString()),t.current.dataset.flash!==`true`&&(t.current.dataset.flash=r.current.isStateChanged.toString()),n.current.dataset.flash!==`true`&&(n.current.dataset.flash=r.current.isContextChanged.toString()))})},[]),I(`button`,{type:`button`,className:G(`react-section-header`,`overflow-hidden`,`max-h-0`,`transition-[max-height]`),children:I(`div`,{className:G(`flex-1 react-scan-expandable`),children:I(`div`,{className:`overflow-hidden`,children:I(`div`,{className:`flex items-center whitespace-nowrap`,children:[I(`div`,{className:`flex items-center gap-x-2`,children:`What changed?`}),I(`div`,{className:G(`ml-auto`,`change-scope`,`transition-opacity duration-300 delay-150`),children:[I(`div`,{ref:e,children:`props`}),I(`div`,{ref:t,children:`state`}),I(`div`,{ref:n,children:`context`})]})]})})})})}),Jm=e=>e,Ym=Kn(({title:e,changes:t,renderName:n=Jm})=>{let[r,i]=k(new Set),[a,o]=k(new Set),s=Array.from(t.entries());return t.size===0?null:I(`div`,{children:[I(`div`,{className:`text-xs text-[#888] mb-1.5`,children:e}),I(`div`,{className:`flex flex-col gap-2`,children:s.map(([t,s])=>{let c=a.has(String(t)),{value:l,error:u}=Ch(s.previousValue),{value:d,error:f}=Ch(s.currentValue),p=yh(l,d);return I(`div`,{children:[I(`button`,{onClick:()=>{o(e=>{let n=new Set(e);return n.has(String(t))?n.delete(String(t)):n.add(String(t)),n})},className:`flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs`,children:I(`div`,{className:`flex items-center gap-1.5 flex-1`,children:[I(z,{name:`icon-chevron-right`,size:12,className:G(`text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,{"rotate-90":c})}),I(`div`,{className:`whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5`,children:[n(s.name),I($m,{count:s.count,isFunction:typeof s.currentValue==`function`,showWarning:p.changes.length===0,forceFlash:!0})]})]})}),I(`div`,{className:G(`react-scan-expandable`,{"react-scan-expanded":c}),children:I(`div`,{className:`pl-3 text-xs font-mono border-l-1 border-[#333]`,children:I(`div`,{className:`flex flex-col gap-0.5`,children:u||f?I(Xm,{currError:f,prevError:u}):p.changes.length>0?I(Zm,{change:s,diff:p,expandedFns:r,renderName:n,setExpandedFns:i,title:e}):I(Qm,{currValue:d,entryKey:t,expandedFns:r,prevValue:l,setExpandedFns:i})})})})]},t)})})]})}),Xm=({prevError:e,currError:t})=>I(D,{children:[e&&I(`div`,{className:`text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic`,children:e}),t&&I(`div`,{className:`text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5`,children:t})]}),Zm=({diff:e,title:t,renderName:n,change:r,expandedFns:i,setExpandedFns:a})=>e.changes.map((o,s)=>{let{value:c,error:l}=Ch(o.prevValue),{value:u,error:d}=Ch(o.currentValue),f=typeof c==`function`||typeof u==`function`,p;return t===`Props`&&(p=o.path.length>0?`${n(String(r.name))}.${bh(o.path)}`:void 0),t===`State`&&o.path.length>0&&(p=`state.${bh(o.path)}`),p||=bh(o.path),I(`div`,{className:G(`flex flex-col gap-y-1`,s<e.changes.length-1&&`mb-4`),children:[p&&I(`div`,{className:`text-[#666] text-[10px]`,children:p}),I(`button`,{type:`button`,className:G(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#f87171] bg-[#2a1515]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${bh(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),I(`span`,{className:`flex-1 whitespace-nowrap font-mono`,children:l?I(`span`,{className:`italic text-[#f87171]`,children:l}):f?I(`div`,{className:`flex gap-1 items-start flex-col`,children:[I(`div`,{className:`flex gap-1 items-start w-full`,children:[I(`span`,{className:`flex-1 max-h-40`,children:xh(c,i.has(`${bh(o.path)}-prev`))}),typeof c==`function`&&I(jm,{text:c.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>I(D,{children:e})})]}),c?.toString()===u?.toString()&&I(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):I(Pm,{value:c,expanded:i.has(`${bh(o.path)}-prev`),onToggle:()=>{let e=`${bh(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),I(`button`,{type:`button`,className:G(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#4ade80] bg-[#1a2a1a]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${bh(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),I(`span`,{className:`flex-1 whitespace-pre-wrap font-mono`,children:d?I(`span`,{className:`italic text-[#4ade80]`,children:d}):f?I(`div`,{className:`flex gap-1 items-start flex-col`,children:[I(`div`,{className:`flex gap-1 items-start w-full`,children:[I(`span`,{className:`flex-1`,children:xh(u,i.has(`${bh(o.path)}-current`))}),typeof u==`function`&&I(jm,{text:u.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>I(D,{children:e})})]}),c?.toString()===u?.toString()&&I(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):I(Pm,{value:u,expanded:i.has(`${bh(o.path)}-current`),onToggle:()=>{let e=`${bh(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]})]},`${p}-${r.name}-${s}`)}),Qm=({prevValue:e,currValue:t,entryKey:n,expandedFns:r,setExpandedFns:i})=>I(D,{children:[I(`div`,{className:`group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded`,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),I(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:I(Pm,{value:e,expanded:r.has(`${String(n)}-prev`),onToggle:()=>{let e=`${String(n)}-prev`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),I(`div`,{className:`group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5`,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),I(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:I(Pm,{value:t,expanded:r.has(`${String(n)}-current`),onToggle:()=>{let e=`${String(n)}-current`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]}),typeof t==`object`&&!!t&&I(`div`,{className:`text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1`,children:[I(z,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),I(`span`,{children:`Reference changed but objects are structurally the same`})]})]}),$m=({count:e,forceFlash:t,isFunction:n,showWarning:r})=>{let i=j(!0),a=j(null),o=j(e);return A(()=>{let t=a.current;!t||o.current===e||(t.classList.remove(`count-flash`),t.offsetWidth,t.classList.add(`count-flash`),o.current=e)},[e]),A(()=>{if(i.current){i.current=!1;return}if(t){let e=setTimeout(()=>{var t;(t=a.current)==null||t.classList.add(`count-flash-white`),e=setTimeout(()=>{var e;(e=a.current)==null||e.classList.remove(`count-flash-white`)},300)},500);return()=>{clearTimeout(e)}}},[t]),I(`div`,{ref:a,className:`count-badge`,children:[r&&I(z,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),n&&I(z,{name:`icon-function`,className:`text-[#A855F7] mb-px`,size:14}),`x`,e]})},eh={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{eh.lastRendered.clear(),eh.expandedPaths.clear(),lm.cleanupAll(),Mh(),_m.reset()}},th=class extends Ie{constructor(){super(...arguments),sf(this,`state`,{hasError:!1,error:null}),sf(this,`handleReset`,()=>{this.setState({hasError:!1,error:null}),eh.cleanup()})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?I(`div`,{className:`p-4 bg-red-950/50 h-screen backdrop-blur-sm`,children:[I(`div`,{className:`flex items-center gap-2 mb-3 text-red-400 font-medium`,children:[I(z,{name:`icon-flame`,className:`text-red-500`,size:16}),`Something went wrong in the inspector`]}),I(`div`,{className:`p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),I(`button`,{type:`button`,onClick:this.handleReset,className:`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2`,children:`Reset Inspector`})]}):this.props.children}},nh=sn(()=>G(`react-scan-inspector`,`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,!Qp.value&&`opacity-100 delay-300 pointer-events-auto`)),rh=Wd(()=>{let e=j(null),t=t=>{if(!t)return;e.current=t;let{data:n,shouldUpdate:r}=zh(t);if(r){let e={timestamp:Date.now(),fiberInfo:Th(t),props:n.fiberProps,state:n.fiberState,context:n.fiberContext,stateNames:jh(t)};_m.addUpdate(e,t)}};return Mn(()=>{let n=Q.inspectState.value;Qt(()=>{if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,eh.cleanup();return}n.kind===`focused`&&(Qp.value=!1);let{parentCompositeFiber:r}=fh(n.focusedDomElement,n.fiber);if(!r){Q.inspectState.value={kind:`inspect-off`},q.value={view:`none`};return}e.current?.type!==r.type&&(e.current=r,eh.cleanup(),t(r))})}),Mn(()=>{pm.value,Qt(()=>{let n=Q.inspectState.value;if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,eh.cleanup();return}let{parentCompositeFiber:r}=fh(n.focusedDomElement,n.fiber);if(!r){Q.inspectState.value={kind:`inspect-off`},q.value={view:`none`};return}t(r),n.focusedDomElement.isConnected||(e.current=null,eh.cleanup(),Q.inspectState.value={kind:`inspecting`,hoveredDomElement:null})})}),A(()=>()=>{eh.cleanup()},[]),I(th,{children:I(`div`,{className:nh,children:I(`div`,{className:`w-full h-full`,children:I(Gm,{})})})})}),ih=Wd(()=>Q.inspectState.value.kind===`focused`?I(th,{children:[I(rh,{}),I(Am,{})]}):null),ah=e=>{if(`__REACT_DEVTOOLS_GLOBAL_HOOK__`in window){let t=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t?.renderers)return null;for(let[,n]of Array.from(t.renderers))try{let t=n.findFiberByHostInstance?.call(n,e);if(t)return t}catch{}}if(`_reactRootContainer`in e)return e._reactRootContainer?._internalRoot?.current?.child??null;for(let t in e)if(t.startsWith(`__reactInternalInstance$`)||t.startsWith(`__reactFiber`))return e[t];return null},oh=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},sh=e=>{if(!e)return null;try{let t=ah(e);if(!t)return null;let n=ch(t);return n?n[0]:null}catch{return null}},ch=e=>{let t=e,n=null;for(;t;){if(re(t))return[t,n];C(t)&&!n&&(n=t),t=t.return}return null},lh=(e,t)=>!!te(t,t=>t===e),uh=async e=>{let t=sh(e);if(!t)return null;let n=oh(t);return n?await new Promise(e=>{let t=new IntersectionObserver(n=>{t.disconnect(),e(n[0]?.boundingClientRect??null)});t.observe(n)}):null},dh=e=>{let t=sh(e);if(!t||!oh(t))return{};let n=ch(t);if(!n)return{};let[r]=n;return{parentCompositeFiber:r}},fh=(e,t)=>{if(!e.isConnected)return{};let n=t??sh(e);if(!n)return{};let r=n,i=null,a=null;for(;r;){if(!r.stateNode){r=r.return;continue}if($.instrumentation?.fiberRoots.has(r.stateNode)){i=r,a=r.stateNode.current;break}r=r.return}if(!i||!a||(n=lh(n,a)?n:n.alternate??n,!n)||!oh(n))return{};let o=ch(n)?.[0];return o?{parentCompositeFiber:lh(o,a)?o:o.alternate??o}:{}},ph=e=>{let t=e.memoizedProps??{},n=e.alternate?.memoizedProps??{},r=[];for(let e in t){if(e===`children`)continue;let i=t[e],a=n[e];Bd(i,a)||r.push({name:e,value:i,prevValue:a,type:1})}return r},mh=new Set([`HTML`,`HEAD`,`META`,`TITLE`,`BASE`,`SCRIPT`,`SCRIPT`,`STYLE`,`LINK`,`NOSCRIPT`,`SOURCE`,`TRACK`,`EMBED`,`OBJECT`,`PARAM`,`TEMPLATE`,`PORTAL`,`SLOT`,`AREA`,`XML`,`DOCTYPE`,`COMMENT`]),hh=(e,t=!0)=>{if(e.stateNode&&`nodeType`in e.stateNode){let n=e.stateNode;return t&&n.tagName&&mh.has(n.tagName.toLowerCase())?null:n}let n=e.child;for(;n;){let e=hh(n,t);if(e)return e;n=n.sibling}return null},gh=(e=document.body)=>{let t=[],n=e=>{if(!e)return null;let{parentCompositeFiber:t}=dh(e);return t&&hh(t)===e?e:null},r=(e,i=0)=>{let a=n(e);if(a){let{parentCompositeFiber:e}=dh(a);if(!e)return;t.push({element:a,depth:i,name:T(e.type)??`Unknown`,fiber:e})}for(let t of Array.from(e.children))r(t,a?i+1:i)};return r(e),t},_h=e=>{try{if(e===null)return`null`;if(e===void 0)return`undefined`;if(wh(e))return`Promise`;if(typeof e==`function`){let t=e.toString();try{return t.replace(/\s+/g,` `).replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,`(`).replace(/\s+\)/g,`)`).replace(/,\s+/g,`, `)}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&`length`in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e==`object`:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},vh=(e,t)=>{try{return typeof e!=`function`||typeof t!=`function`?!1:e.toString()===t.toString()}catch{return!1}},yh=(e,t,n=[],r=new WeakSet)=>{if(e===t)return{type:`primitive`,changes:[],hasDeepChanges:!1};if(typeof e==`function`&&typeof t==`function`){let r=vh(e,t);return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t,sameFunction:r}],hasDeepChanges:!r}}if(e===null||t===null||e===void 0||t===void 0||typeof e!=`object`||typeof t!=`object`)return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(r.has(e)||r.has(t))return{type:`object`,changes:[{path:n,prevValue:`[Circular]`,currentValue:`[Circular]`}],hasDeepChanges:!1};r.add(e),r.add(t);let i=e,a=t,o=new Set([...Object.keys(i),...Object.keys(a)]),s=[],c=!1;for(let e of o){let t=i[e],o=a[e];if(t!==o)if(typeof t==`object`&&typeof o==`object`&&t!==null&&o!==null){let i=yh(t,o,[...n,e],r);s.push(...i.changes),i.hasDeepChanges&&(c=!0)}else s.push({path:[...n,e],prevValue:t,currentValue:o}),c=!0}return{type:`object`,changes:s,hasDeepChanges:c}},bh=e=>e.length===0?``:e.reduce((e,t,n)=>/^\d+$/.test(t)?`${e}[${t}]`:n===0?t:`${e}.${t}`,``),xh=(e,t=!1)=>{try{let n=e.toString(),r=n.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!r)return`ƒ`;let i=(r[1]||r[2]||``).replace(/\s+/g,``);return t?Gd(n):`\u0192 (${i}) => ...`}catch{return`ƒ`}},Sh=e=>{if(e===null)return`null`;if(e===void 0)return`undefined`;if(typeof e==`string`)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e==`number`||typeof e==`boolean`)return String(e);if(typeof e==`function`)return xh(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e==`object`){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(`, `)}, ...`:t.join(`, `)}}`}return String(e)},Ch=e=>{if(e==null||typeof e==`function`||typeof e!=`object`)return{value:e};if(wh(e))return{value:`Promise`};try{let t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name===`Promise`?{value:`Promise`}:{value:e}}catch{return{value:null,error:`Error accessing value`}}},wh=e=>!!e&&(e instanceof Promise||typeof e==`object`&&`then`in e),Th=e=>{let t=fe(e);return{displayName:T(e)||`Unknown`,type:e.type,key:e.key,id:e.index,selfTime:t?.selfTime??null,totalTime:t?.totalTime??null}},Eh=new Map,Dh=new Map,Oh=new Map,kh=null,Ah=/\[(?<name>\w+),\s*set\w+\]/g,jh=e=>{var t;let n=((t=e.type)?.toString)?.call(t)||``;return n?Array.from(n.matchAll(Ah),e=>e.groups?.name??``):[]},Mh=()=>{Eh.clear(),Dh.clear(),Oh.clear(),kh=null},Nh=e=>{let t=e.type!==kh;return kh=e.type,t},Ph=(e,t,n,r)=>{let i=e.get(t),a=e===Eh||e===Oh,o=!Bd(n,r);if(!i)return e.set(t,{count:o&&a?1:0,currentValue:n,previousValue:r,lastUpdated:Date.now()}),{hasChanged:o,count:o&&a?1:+!a};if(!Bd(i.currentValue,n)){let r=i.count+1;return e.set(t,{count:r,currentValue:n,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:r}}return{hasChanged:!1,count:i.count}},Fh=e=>{if(!e)return{};if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let t=e.memoizedState,n={},r=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(n[r]=t.memoizedState),t=t.next,r++;return n}return e.tag===1&&e.memoizedState||{}},Ih=e=>{let t=e.memoizedProps||{},n=e.alternate?.memoizedProps||{},r={},i={},a=Object.keys(t);for(let e of a)e in t&&(r[e]=t[e],i[e]=n[e]);return{current:r,prev:i,changes:ph(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},Lh=e=>{let t=Fh(e),n=e.alternate?Fh(e.alternate):{},r=[];for(let[i,a]of Object.entries(t)){let t=e.tag===1?i:Number(i);e.alternate&&!Bd(n[i],a)&&r.push({name:t,value:a,prevValue:n[i]})}return{current:t,prev:n,changes:r}},Rh=e=>{let t=Vh(e),n=e.alternate?Vh(e.alternate):new Map,r={},i={},a=[],o=new Set;for(let[e,s]of t){let t=s.displayName,c=e;if(o.has(c))continue;o.add(c),r[t]=s.value;let l=n.get(e);l&&(i[t]=l.value,Bd(l.value,s.value)||a.push({name:t,value:s.value,prevValue:l.value,contextType:e}))}return{current:r,prev:i,changes:a}},zh=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let n=!1,r=Nh(e),i=t();if(e.memoizedProps){let{current:t,changes:r}=Ih(e);for(let[e,n]of Object.entries(t))i.current.push({name:e,value:wh(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of r){let{hasChanged:t,count:r}=Ph(Eh,e.name,e.value,e.prevValue);t&&(n=!0,i.changes.add(e.name),i.changesCounts.set(e.name,r))}}let a=t(),{current:o,changes:s}=Lh(e);for(let[t,n]of Object.entries(o)){let r=e.tag===1?t:Number(t);a.current.push({name:r,value:n})}for(let e of s){let{hasChanged:t,count:r}=Ph(Dh,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}let c=t(),{current:l,changes:u}=Rh(e);for(let[e,t]of Object.entries(l))c.current.push({name:e,value:t});if(!r)for(let e of u){let{hasChanged:t,count:r}=Ph(Oh,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return!n&&!r&&(i.changes.clear(),a.changes.clear(),c.changes.clear()),{data:{fiberProps:i,fiberState:a,fiberContext:c},shouldUpdate:n||r}},Bh=new WeakMap,Vh=e=>{if(!e)return new Map;let t=Bh.get(e);if(t)return t;let n=new Map,r=e;for(;r;){let e=r.dependencies;if(e?.firstContext){let t=e.firstContext;for(;t;){let e=t.memoizedValue,r=t.context?.displayName;if(n.has(e)||n.set(t.context,{value:e,displayName:r??`UnnamedContext`,contextType:null}),t===t.next)break;t=t.next}}r=r.return}return Bh.set(e,n),n},Hh=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let n=t();if(e.memoizedProps){let{current:t,changes:r}=Ih(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:wh(r)?{type:`promise`,displayValue:`Promise`}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let r=t();if(e.memoizedState){let{current:t,changes:n}=Lh(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:wh(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let i=t(),{current:a,changes:o}=Rh(e);for(let[e,t]of Object.entries(a))i.current.push({name:e,value:wh(t)?{type:`promise`,displayValue:`Promise`}:t});for(let e of o)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:n,fiberState:r,fiberContext:i}},Uh={mount:1,update:2,unmount:4},Wh=0,Gh=performance.now(),Kh=0,qh=!1,Jh=()=>{Kh++;let e=performance.now();e-Gh>=1e3&&(Wh=Kh,Kh=0,Gh=e),requestAnimationFrame(Jh)},Yh=()=>(qh||(qh=!0,Jh(),Wh=60),Wh),Xh=(e,t)=>Kd(e)===Kd(t)&&Zh.includes(typeof e)&&Zh.includes(typeof t),Zh=[`function`,`object`],Qh=new WeakMap,$h=e=>{if(!e)return[];let t=[];if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let n=e.memoizedState,r=e.alternate?.memoizedState,i=0;for(;n;){if(n.queue&&n.memoizedState!==void 0){let e={type:2,name:i.toString(),value:n.memoizedState,prevValue:r?.memoizedState};Bd(e.prevValue,e.value)||t.push(e)}n=n.next,r=r?.next,i++}return t}if(e.tag===1){let n={type:3,name:`state`,value:e.memoizedState,prevValue:e.alternate?.memoizedState};return Bd(n.prevValue,n.value)||t.push(n),t}return t},eg=0,tg=new WeakMap,ng=e=>tg.get(e)||(eg++,tg.set(e,eg),eg),rg=e=>{let t=[];return ie(e,qd.bind(t)),t},ig=new Map,ag=!1,og=()=>Array.from(ig.values()),sg=e=>{if(!se(e))return!0;let t=ce(e);for(let e of t){let t={isRequiredChange:!1};if(ae(e,Jd.bind(t)),t.isRequiredChange)return!1}return!0},cg=!1,lg=16,ug=new WeakMap,dg=(e,t,n,r,i)=>{let a=Date.now(),o=Xd(e);if((r||i)&&(!o||a-(o.lastRenderTimestamp||0)>lg)){let r=o||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:a};r.renderCount=(r.renderCount||0)+1,r.selfTime=t||0,r.totalTime=n||0,r.lastRenderTimestamp=a,Zd(e,{...r})}},fg=(e,t)=>{let n={isPaused:tn(!$.options.value.enabled),fiberRoots:new WeakSet};return ig.set(e,{key:e,config:t,instrumentation:n}),ag||(ag=!0,ke({name:`react-scan`,onActive:t.onActive,onCommitFiberRoot(e,t){n.fiberRoots.add(t);let r=og();for(let e of r)e.config.onCommitStart();Ee(t.current,(e,t)=>{let n=me(e.type);if(!n)return null;let r=og(),i=[];for(let t=0,n=r.length;t<n;t++)r[t].config.isValidFiber(e)&&i.push(t);if(!i.length)return null;let a=[];if(r.some(e=>e.config.trackChanges)){let t=Ih(e).changes,n=Lh(e).changes,r=Rh(e).changes;a.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value})));for(let t of n)e.tag===1?a.push({type:3,name:t.name.toString(),value:t.value}):a.push({type:2,name:t.name.toString(),value:t.value});a.push.apply(null,r.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:o,totalTime:s}=fe(e),c=Yh(),l={phase:Uh[t],componentName:T(n),count:1,changes:a,time:o,forget:pe(e),unnecessary:cg?sg(e):null,didCommit:se(e),fps:c},u=a.length>0,d=ce(e).length>0;t===`update`&&dg(e,o,s,u,d);for(let t=0,n=i.length;t<n;t++)r[i[t]].config.onRender(e,[l])});for(let e of r)e.config.onCommitFinish()},onPostCommitFiberRoot(){let e=og();for(let t of e)t.config.onPostCommitFiberRoot()}})),n},pg=e=>{let t=new Map;for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.componentName)continue;let i=t.get(r.componentName)??[],a=lf([{aggregatedCount:1,computedKey:null,name:r.componentName,frame:null,...r,changes:{type:r.changes.reduce((e,t)=>e|t.type,0),unstable:r.changes.some(e=>e.unstable)},phase:r.phase,computedCurrent:null}]);if(!a)continue;let o=null,s=null;if(r.changes)for(let e=0,t=r.changes.length;e<t;e++){let{name:t,prevValue:n,nextValue:a,unstable:c,type:l}=r.changes[e];l===1?(o??={},s??={},o[`${c?`⚠️`:``}${t} (prev)`]=n,s[`${c?`⚠️`:``}${t} (next)`]=a):i.push({prev:n,next:a,type:l===4?`context`:`state`,unstable:c??!1})}o&&s&&i.push({prev:o,next:s,type:`props`,unstable:!1}),t.set(a,i)}for(let[e,n]of Array.from(t.entries())){console.group(`%c${e}`,`background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;`);for(let{type:e,prev:t,next:r,unstable:i}of n)console.log(`${e}:`,i?`⚠️`:``,t,`!==`,r);console.groupEnd()}},mg=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log(`%c[·] %cReact Scan`,`font-weight:bold;color:#7a68e8;font-size:20px;`,`font-weight:bold;font-size:14px;`)},hg=7,gg=`Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace`,_g=.2,vg=.5,yg=(e,t)=>{let n=t-e;return Math.abs(n)<vg?t:e+n*_g},bg=4,xg=40,Sg=45,Cg=`115,97,230`,wg=e=>{let t=new Map;for(let{name:n,count:r}of e)t.set(n,(t.get(n)||0)+r);let n=new Map;for(let[e,r]of t){let t=n.get(r);t?t.push(e):n.set(r,[e])}let r=$d(n),i=ef(r[0]);for(let e=1,t=r.length;e<t;e++)i+=`, `+ef(r[e]);return i.length>xg?`${i.slice(0,xg)}\u2026`:i},Tg=e=>{let t=0;for(let n of e)t+=n.width*n.height;return t},Eg=(e,t)=>{for(let{id:n,name:r,count:i,x:a,y:o,width:s,height:c,didCommit:l}of t){let t={id:n,name:r,count:i,x:a,y:o,width:s,height:c,frame:0,targetX:a,targetY:o,targetWidth:s,targetHeight:c,didCommit:l},u=String(t.id),d=e.get(u);d?(d.count++,d.frame=0,d.targetX=a,d.targetY=o,d.targetWidth=s,d.targetHeight=c,d.didCommit=l):e.set(u,t)}},Dg=(e,t,n)=>{for(let r of e.values()){let e=r.x-t,i=r.y-n;r.targetX=e,r.targetY=i}},Og=(e,t)=>{let n=e.getContext(`2d`,{alpha:!0});return n&&n.scale(t,t),n},kg=(e,t,n,r)=>{e.clearRect(0,0,t.width/n,t.height/n);let i=new Map,a=new Map;for(let e of r.values()){let{x:t,y:n,width:r,height:o,targetX:s,targetY:c,targetWidth:l,targetHeight:u,frame:d}=e;s!==t&&(e.x=yg(t,s)),c!==n&&(e.y=yg(n,c)),l!==r&&(e.width=yg(r,l)),u!==o&&(e.height=yg(o,u));let f=`${s??t},${c??n}`,p=`${f},${l??r},${u??o}`,m=i.get(f);m?m.push(e):i.set(f,[e]);let h=1-d/Sg;e.frame++;let g=a.get(p)||{x:t,y:n,width:r,height:o,alpha:h};h>g.alpha&&(g.alpha=h),a.set(p,g)}for(let{x:t,y:n,width:r,height:i,alpha:o}of a.values()){e.strokeStyle=`rgba(${Cg},${o})`,e.lineWidth=1;let a=Math.round(t)+.5,s=Math.round(n)+.5,c=Math.round(r),l=Math.round(i);e.beginPath(),e.rect(a,s,c,l),e.stroke(),e.fillStyle=`rgba(${Cg},${o*.1})`,e.fill()}e.font=`11px ${gg}`;let o=new Map;e.textRendering=`optimizeSpeed`;for(let t of i.values()){let{x:n,y:i,frame:a}=t[0],s=1-a/Sg,c=wg(t),{width:l}=e.measureText(c);o.set(`${n},${i},${l},${c}`,{text:c,width:l,height:11,alpha:s,x:n,y:i,outlines:t});let u=i-11-4;if(u<0&&(u=0),a>Sg)for(let e of t)r.delete(String(e.id))}let s=Array.from(o.entries()).sort(([e,t],[n,r])=>Tg(r.outlines)-Tg(t.outlines));for(let[t,n]of s)if(o.has(t))for(let[r,i]of o.entries()){if(t===r)continue;let{x:a,y:s,width:c,height:l}=n,{x:u,y:d,width:f,height:p}=i;a+c>u&&u+f>a&&s+l>d&&d+p>s&&(n.text=wg(n.outlines.concat(i.outlines)),n.width=e.measureText(n.text).width,o.delete(r))}for(let t of o.values()){let{x:n,y:r,alpha:i,width:a,height:o,text:s}=t,c=r-o-4;c<0&&(c=0),e.fillStyle=`rgba(${Cg},${i})`,e.fillRect(n,c,a+4,o+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(s,n+2,c+o)}return r.size>0},Ag='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n',jg=null,Mg=null,Ng=null,Pg=1,Fg=null,Ig=new Map,Lg=new Map,Rg=new Set,zg=e=>{if(!re(e))return;let t=typeof e.type==`string`?e.type:T(e);if(!t)return;let n=Lg.get(e),r=ue(e),i=se(e);n?n.count++:(Lg.set(e,{name:t,count:1,elements:r.map(e=>e.stateNode),didCommit:+!!i}),Rg.add(e))},Bg=e=>{let t=e[0];if(e.length===1)return t;let n,r,i,a;for(let t=0,o=e.length;t<o;t++){let o=e[t];n=n==null?o.x:Math.min(n,o.x),r=r==null?o.y:Math.min(r,o.y),i=i==null?o.x+o.width:Math.max(i,o.x+o.width),a=a==null?o.y+o.height:Math.max(a,o.y+o.height)}return n==null||r==null||i==null||a==null?e[0]:new DOMRect(n,r,i-n,a-r)},Vg=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},n=new IntersectionObserver(tf.bind(t));for(let e of t.uniqueElements)n.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},Hg=typeof SharedArrayBuffer<`u`?SharedArrayBuffer:ArrayBuffer,Ug=async()=>{let e=[];for(let t of Rg){let n=Lg.get(t);if(n)for(let t=0;t<n.elements.length;t++)n.elements[t]instanceof Element&&e.push(n.elements[t])}let t=new Map;for await(let n of Vg(e)){for(let e of n){let n=e.target,r=e.intersectionRect;e.isIntersecting&&r.width&&r.height&&t.set(n,r)}let e=[],r=[],i=[];for(let n of Rg){let a=Lg.get(n);if(!a)continue;let o=[];for(let e=0;e<a.elements.length;e++){let n=a.elements[e],r=t.get(n);r&&o.push(r)}o.length&&(e.push(a),r.push(Bg(o)),i.push(ye(n)))}if(e.length>0){let t=new Hg(e.length*hg*4),n=new Float32Array(t),a=Array(e.length),o;for(let t=0,s=e.length;t<s;t++){let s=e[t],c=i[t],{x:l,y:u,width:d,height:f}=r[t],{count:p,name:m,didCommit:h}=s;if(jg){let e=t*hg;n[e]=c,n[e+1]=p,n[e+2]=l,n[e+3]=u,n[e+4]=d,n[e+5]=f,n[e+6]=h,a[t]=m}else o||=Array(e.length),o[t]={id:c,name:m,count:p,x:l,y:u,width:d,height:f,didCommit:h}}jg?jg.postMessage({type:`draw-outlines`,data:t,names:a}):Mg&&Ng&&o&&(Eg(Ig,o),Fg||=requestAnimationFrame(Wg))}}for(let e of Rg)Lg.delete(e),Rg.delete(e)},Wg=()=>{!Ng||!Mg||(Fg=kg(Ng,Mg,Pg,Ig)?requestAnimationFrame(Wg):null)},Gg=typeof OffscreenCanvas<`u`&&typeof Worker<`u`,Kg=()=>Math.min(window.devicePixelRatio||1,2),qg=()=>{Yg();let e=document.createElement(`div`);e.setAttribute(`data-react-scan`,`true`);let t=e.attachShadow({mode:`open`}),n=document.createElement(`canvas`);if(n.style.position=`fixed`,n.style.top=`0`,n.style.left=`0`,n.style.pointerEvents=`none`,n.style.zIndex=`2147483646`,n.setAttribute(`aria-hidden`,`true`),t.appendChild(n),!n)return null;Pg=Kg(),Mg=n;let{innerWidth:r,innerHeight:i}=window;n.style.width=`${r}px`,n.style.height=`${i}px`;let a=r*Pg,o=i*Pg;n.width=a,n.height=o;let s=$.options.value.useOffscreenCanvasWorker===!1;if(Gg&&!window.__REACT_SCAN_EXTENSION__&&!s)try{let e=URL.createObjectURL(new Blob([Ag],{type:`application/javascript`}));jg=new Worker(e);let t=n.transferControlToOffscreen();jg.postMessage({type:`init`,canvas:t,width:n.width,height:n.height,dpr:Pg},[t])}catch(e){jg=null,$.options.value._debug===`verbose`&&console.warn(`Failed to initialize OffscreenCanvas worker:`,e)}jg||(Ng=Og(n,Pg));let c=!1;window.addEventListener(`resize`,()=>{c||(c=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;Pg=Kg(),n.style.width=`${e}px`,n.style.height=`${t}px`,jg?jg.postMessage({type:`resize`,width:e,height:t,dpr:Pg}):(n.width=e*Pg,n.height=t*Pg,Ng&&(Ng.resetTransform(),Ng.scale(Pg,Pg)),Wg()),c=!1}))});let l=window.scrollX,u=window.scrollY,d=!1;return window.addEventListener(`scroll`,()=>{d||(d=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,n=e-l,r=t-u;l=e,u=t,jg?jg.postMessage({type:`scroll`,deltaX:n,deltaY:r}):requestAnimationFrame(Dg.bind(null,Ig,n,r)),d=!1},32))}),setInterval(()=>{Rg.size&&requestAnimationFrame(Ug)},32),t.appendChild(n),e},Jg=()=>globalThis.__REACT_SCAN_STOP__,Yg=()=>{let e=document.querySelector(`[data-react-scan]`);e&&e.remove()},Xg=e=>{if(re(e)&&$.options.value.showToolbar!==!1&&Q.inspectState.value.kind===`focused`){let t=e,{selfTime:n}=fe(e),r=T(e.type),i=ye(t),a=Q.reportData.get(i),o=a?.count??0,s=a?.time??0,c=[],l=Q.changesListeners.get(ye(e));if(l?.length){let t=ph(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=$h(e),r=rg(e).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));l.forEach(e=>{e({propsChanges:t,stateChanges:n,contextChanges:r})})}let u={count:o+1,time:s+n||0,renders:[],displayName:r,type:me(e.type)||null,changes:c};Q.reportData.set(i,u),Zg=!0}},Zg=!1,$g=()=>{clearInterval(Qg),Qg=setInterval(()=>{Zg&&=(Q.lastReportTime.value=Date.now(),!1)},50)},e_=e=>!Sb.has(e.memoizedProps),t_=!1,n_=e=>{if(Jg()||t_)return;t_=!0;let t,n=!1,r=()=>{n||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{n=!0;let t=qg();t&&document.documentElement.appendChild(t),e()}))};$.instrumentation=fg(`react-scan-devtools-0.1.0`,{onCommitStart:()=>{var e,t;(t=(e=$.options.value).onCommitStart)==null||t.call(e)},onActive:(()=>{let e=!1;return()=>{Jg()||e||(e=!0,r(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:$}),$g(),mg())}})(),onError:()=>{},isValidFiber:e_,onRender:(e,t)=>{var n,r,i,a;re(e)&&((r=(n=Q).interactionListeningForRenders)==null||r.call(n,e,t));let o=$.instrumentation?.isPaused.value,s=Q.inspectState.value.kind===`inspect-off`||Q.inspectState.value.kind===`uninitialized`;o&&s||(o||zg(e),$.options.value.log&&pg(t),Q.inspectState.value.kind===`focused`&&(pm.value=Date.now()),s||Xg(e),(a=(i=$.options.value).onRender)==null||a.call(i,e,t))},onCommitFinish:()=>{var e,t;r(),(t=(e=$.options.value).onCommitFinish)==null||t.call(e)},onPostCommitFiberRoot(){r()},trackChanges:!1})},r_=`/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 4px;
    --container-md: 448px;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 14px;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-wide: 0.025em;
    --radius-sm: 4px;
    --radius-md: 6px;
    --radius-lg: 8px;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
      -o-tab-size: 4;
         tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::-moz-placeholder {
    opacity: 1;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::-moz-placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    -webkit-appearance: button;
       -moz-appearance: button;
            appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-bounding-box {
    pointer-events: bounding-box;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .inset-x-1 {
    inset-inline: calc(var(--spacing) * 1);
  }
  .inset-y-0 {
    inset-block: calc(var(--spacing) * 0);
  }
  .start {
    inset-inline-start: var(--spacing);
  }
  .end {
    inset-inline-end: var(--spacing);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-2\\.5 {
    top: calc(var(--spacing) * -2.5);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-0\\.5 {
    top: calc(var(--spacing) * 0.5);
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-2\\.5 {
    right: calc(var(--spacing) * -2.5);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-0\\.5 {
    right: calc(var(--spacing) * 0.5);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-4 {
    bottom: calc(var(--spacing) * 4);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .z-100 {
    z-index: 100;
  }
  .z-\\[214748365\\] {
    z-index: 214748365;
  }
  .z-\\[214748367\\] {
    z-index: 214748367;
  }
  .z-\\[124124124124\\] {
    z-index: 124124124124;
  }
  .container {
    width: 100%;
    @media (width >= 640px) {
      max-width: 640px;
    }
    @media (width >= 768px) {
      max-width: 768px;
    }
    @media (width >= 1024px) {
      max-width: 1024px;
    }
    @media (width >= 1280px) {
      max-width: 1280px;
    }
    @media (width >= 1536px) {
      max-width: 1536px;
    }
  }
  .m-\\[2px\\] {
    margin: 2px;
  }
  .mx-0\\.5 {
    margin-inline: calc(var(--spacing) * 0.5);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-1\\.5 {
    margin-right: calc(var(--spacing) * 1.5);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-px {
    margin-bottom: 1px;
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-1\\.5 {
    margin-left: calc(var(--spacing) * 1.5);
  }
  .ml-auto {
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-4\\/5 {
    height: calc(4 / 5 * 100%);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-7 {
    height: calc(var(--spacing) * 7);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-\\[28px\\] {
    height: 28px;
  }
  .h-\\[48px\\] {
    height: 48px;
  }
  .h-\\[50px\\] {
    height: 50px;
  }
  .h-\\[150px\\] {
    height: 150px;
  }
  .h-\\[235px\\] {
    height: 235px;
  }
  .h-\\[calc\\(100\\%-25px\\)\\] {
    height: calc(100% - 25px);
  }
  .h-\\[calc\\(100\\%-40px\\)\\] {
    height: calc(100% - 40px);
  }
  .h-\\[calc\\(100\\%-48px\\)\\] {
    height: calc(100% - 48px);
  }
  .h-\\[calc\\(100\\%-150px\\)\\] {
    height: calc(100% - 150px);
  }
  .h-\\[calc\\(100\\%-200px\\)\\] {
    height: calc(100% - 200px);
  }
  .h-fit {
    height: -moz-fit-content;
    height: fit-content;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-0 {
    max-height: calc(var(--spacing) * 0);
  }
  .max-h-9 {
    max-height: calc(var(--spacing) * 9);
  }
  .max-h-40 {
    max-height: calc(var(--spacing) * 40);
  }
  .min-h-9 {
    min-height: calc(var(--spacing) * 9);
  }
  .min-h-\\[48px\\] {
    min-height: 48px;
  }
  .min-h-fit {
    min-height: -moz-fit-content;
    min-height: fit-content;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1 / 2 * 100%);
  }
  .w-1\\/3 {
    width: calc(1 / 3 * 100%);
  }
  .w-2\\/4 {
    width: calc(2 / 4 * 100%);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-4\\/5 {
    width: calc(4 / 5 * 100%);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[20px\\] {
    width: 20px;
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-\\[90\\%\\] {
    width: 90%;
  }
  .w-\\[calc\\(100\\%-200px\\)\\] {
    width: calc(100% - 200px);
  }
  .w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-fit {
    min-width: -moz-fit-content;
    min-width: fit-content;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .grow {
    flex-grow: 1;
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-\\[200\\%\\] {
    --tw-translate-y: calc(200% * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .-rotate-90 {
    rotate: calc(90deg * -1);
  }
  .rotate-90 {
    rotate: 90deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-fade-in {
    animation: fadeIn ease-in forwards;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-e-resize {
    cursor: e-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-ew-resize {
    cursor: ew-resize;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-move {
    cursor: move;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-nesw-resize {
    cursor: nesw-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-ns-resize {
    cursor: ns-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-nwse-resize {
    cursor: nwse-resize;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-w-resize {
    cursor: w-resize;
  }
  .\\[touch-action\\:none\\] {
    touch-action: none;
  }
  .resize {
    resize: both;
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-1\\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .gap-x-0\\.5 {
    -moz-column-gap: calc(var(--spacing) * 0.5);
         column-gap: calc(var(--spacing) * 0.5);
  }
  .gap-x-1 {
    -moz-column-gap: calc(var(--spacing) * 1);
         column-gap: calc(var(--spacing) * 1);
  }
  .gap-x-1\\.5 {
    -moz-column-gap: calc(var(--spacing) * 1.5);
         column-gap: calc(var(--spacing) * 1.5);
  }
  .gap-x-2 {
    -moz-column-gap: calc(var(--spacing) * 2);
         column-gap: calc(var(--spacing) * 2);
  }
  .gap-x-3 {
    -moz-column-gap: calc(var(--spacing) * 3);
         column-gap: calc(var(--spacing) * 3);
  }
  .gap-x-4 {
    -moz-column-gap: calc(var(--spacing) * 4);
         column-gap: calc(var(--spacing) * 4);
  }
  .gap-y-0\\.5 {
    row-gap: calc(var(--spacing) * 0.5);
  }
  .gap-y-1 {
    row-gap: calc(var(--spacing) * 1);
  }
  .gap-y-2 {
    row-gap: calc(var(--spacing) * 2);
  }
  .gap-y-4 {
    row-gap: calc(var(--spacing) * 4);
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-zinc-800 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-zinc-800);
    }
  }
  .place-self-center {
    place-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .\\!overflow-visible {
    overflow: visible !important;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 4px;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-t-sm {
    border-top-left-radius: var(--radius-sm);
    border-top-right-radius: var(--radius-sm);
  }
  .rounded-l-md {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }
  .rounded-l-sm {
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .rounded-tl-lg {
    border-top-left-radius: var(--radius-lg);
  }
  .rounded-r-md {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  .rounded-r-sm {
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .rounded-tr-lg {
    border-top-right-radius: var(--radius-lg);
  }
  .rounded-br-lg {
    border-bottom-right-radius: var(--radius-lg);
  }
  .rounded-bl-lg {
    border-bottom-left-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-4 {
    border-style: var(--tw-border-style);
    border-width: 4px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-0 {
    border-left-style: var(--tw-border-style);
    border-left-width: 0px;
  }
  .border-l-1 {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-red-500 {
    border-color: var(--color-red-500) !important;
  }
  .border-\\[\\#1e1e1e\\] {
    border-color: #1e1e1e;
  }
  .border-\\[\\#222\\] {
    border-color: #222;
  }
  .border-\\[\\#333\\] {
    border-color: #333;
  }
  .border-\\[\\#27272A\\] {
    border-color: #27272A;
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-zinc-800 {
    border-color: var(--color-zinc-800);
  }
  .bg-\\[\\#0A0A0A\\] {
    background-color: #0A0A0A;
  }
  .bg-\\[\\#1D3A66\\] {
    background-color: #1D3A66;
  }
  .bg-\\[\\#1E1E1E\\] {
    background-color: #1E1E1E;
  }
  .bg-\\[\\#1a2a1a\\] {
    background-color: #1a2a1a;
  }
  .bg-\\[\\#1e1e1e\\] {
    background-color: #1e1e1e;
  }
  .bg-\\[\\#2a1515\\] {
    background-color: #2a1515;
  }
  .bg-\\[\\#4b4b4b\\] {
    background-color: #4b4b4b;
  }
  .bg-\\[\\#5f3f9a\\] {
    background-color: #5f3f9a;
  }
  .bg-\\[\\#5f3f9a\\]\\/40 {
    background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
  }
  .bg-\\[\\#6a369e\\] {
    background-color: #6a369e;
  }
  .bg-\\[\\#8e61e3\\] {
    background-color: #8e61e3;
  }
  .bg-\\[\\#7521c8\\] {
    background-color: #7521c8;
  }
  .bg-\\[\\#18181B\\] {
    background-color: #18181B;
  }
  .bg-\\[\\#18181B\\]\\/50 {
    background-color: color-mix(in oklab, #18181B 50%, transparent);
  }
  .bg-\\[\\#27272A\\] {
    background-color: #27272A;
  }
  .bg-\\[\\#44444a\\] {
    background-color: #44444a;
  }
  .bg-\\[\\#141414\\] {
    background-color: #141414;
  }
  .bg-\\[\\#214379d4\\] {
    background-color: #214379d4;
  }
  .bg-\\[\\#412162\\] {
    background-color: #412162;
  }
  .bg-\\[\\#EFD81A\\] {
    background-color: #EFD81A;
  }
  .bg-\\[\\#b77116\\] {
    background-color: #b77116;
  }
  .bg-\\[\\#b94040\\] {
    background-color: #b94040;
  }
  .bg-\\[\\#d36cff\\] {
    background-color: #d36cff;
  }
  .bg-\\[\\#efd81a6b\\] {
    background-color: #efd81a6b;
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-green-500\\/50 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 50%, transparent);
    }
  }
  .bg-green-500\\/60 {
    background-color: color-mix(in srgb, oklch(72.3% 0.219 149.579) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-green-500) 60%, transparent);
    }
  }
  .bg-neutral-700 {
    background-color: var(--color-neutral-700);
  }
  .bg-purple-500 {
    background-color: var(--color-purple-500);
  }
  .bg-purple-500\\/90 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
    }
  }
  .bg-purple-800 {
    background-color: var(--color-purple-800);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\\/90 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 90%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 90%, transparent);
    }
  }
  .bg-red-950\\/50 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 50%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-zinc-900\\/30 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 30%, transparent);
    }
  }
  .bg-zinc-900\\/50 {
    background-color: color-mix(in srgb, oklch(21% 0.006 285.885) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-900) 50%, transparent);
    }
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-\\[1px\\] {
    padding-block: 1px;
  }
  .py-\\[3px\\] {
    padding-block: 3px;
  }
  .py-\\[5px\\] {
    padding-block: 5px;
  }
  .pt-0 {
    padding-top: calc(var(--spacing) * 0);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-1\\.5 {
    padding-right: calc(var(--spacing) * 1.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[8px\\] {
    font-size: 8px;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-6 {
    --tw-leading: calc(var(--spacing) * 6);
    line-height: calc(var(--spacing) * 6);
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .break-all {
    word-break: break-all;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#4ade80\\] {
    color: #4ade80;
  }
  .text-\\[\\#5a5a5a\\] {
    color: #5a5a5a;
  }
  .text-\\[\\#6E6E77\\] {
    color: #6E6E77;
  }
  .text-\\[\\#6F6F78\\] {
    color: #6F6F78;
  }
  .text-\\[\\#8E61E3\\] {
    color: #8E61E3;
  }
  .text-\\[\\#666\\] {
    color: #666;
  }
  .text-\\[\\#888\\] {
    color: #888;
  }
  .text-\\[\\#999\\] {
    color: #999;
  }
  .text-\\[\\#7346a0\\] {
    color: #7346a0;
  }
  .text-\\[\\#65656D\\] {
    color: #65656D;
  }
  .text-\\[\\#737373\\] {
    color: #737373;
  }
  .text-\\[\\#A1A1AA\\] {
    color: #A1A1AA;
  }
  .text-\\[\\#A855F7\\] {
    color: #A855F7;
  }
  .text-\\[\\#E4E4E7\\] {
    color: #E4E4E7;
  }
  .text-\\[\\#d36cff\\] {
    color: #d36cff;
  }
  .text-\\[\\#f87171\\] {
    color: #f87171;
  }
  .text-black {
    color: var(--color-black);
  }
  .text-gray-100 {
    color: var(--color-gray-100);
  }
  .text-gray-300 {
    color: var(--color-gray-300);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-red-300 {
    color: var(--color-red-300);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-white\\/30 {
    color: color-mix(in srgb, #fff 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 30%, transparent);
    }
  }
  .text-white\\/70 {
    color: color-mix(in srgb, #fff 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-white) 70%, transparent);
    }
  }
  .text-yellow-300 {
    color: var(--color-yellow-300);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-zinc-200 {
    color: var(--color-zinc-200);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-white\\/\\[0\\.08\\] {
    --tw-ring-color: color-mix(in srgb, #fff 8%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-white) 8%, transparent);
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[border-radius\\] {
    transition-property: border-radius;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[color\\,transform\\] {
    transition-property: color,transform;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[max-height\\] {
    transition-property: max-height;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-\\[opacity\\] {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-none {
    transition-property: none;
  }
  .delay-0 {
    transition-delay: 0ms;
  }
  .delay-150 {
    transition-delay: 150ms;
  }
  .delay-300 {
    transition-delay: 300ms;
  }
  .\\!duration-0 {
    --tw-duration: 0ms !important;
    transition-duration: 0ms !important;
  }
  .duration-0 {
    --tw-duration: 0ms;
    transition-duration: 0ms;
  }
  .duration-120 {
    --tw-duration: 120ms;
    transition-duration: 120ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-\\[cubic-bezier\\(0\\.25\\,0\\.1\\,0\\.25\\,1\\)\\] {
    --tw-ease: cubic-bezier(0.25,0.1,0.25,1);
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .will-change-transform {
    will-change: transform;
  }
  .select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
         user-select: none;
  }
  .animation-delay-0 {
    animation-delay: 0s;
  }
  .animation-delay-100 {
    animation-delay: .1s;
  }
  .animation-delay-150 {
    animation-delay: .15s;
  }
  .animation-delay-200 {
    animation-delay: .2s;
  }
  .animation-delay-300 {
    animation-delay: .3s;
  }
  .animation-delay-500 {
    animation-delay: .5s;
  }
  .animation-delay-700 {
    animation-delay: .7s;
  }
  .animation-delay-1000 {
    animation-delay: 1s;
  }
  .animation-duration-0 {
    animation-duration: 0s;
  }
  .animation-duration-100 {
    animation-duration: .1s;
  }
  .animation-duration-200 {
    animation-duration: .2s;
  }
  .animation-duration-300 {
    animation-duration: .3s;
  }
  .animation-duration-500 {
    animation-duration: .5s;
  }
  .animation-duration-700 {
    animation-duration: .7s;
  }
  .animation-duration-1000 {
    animation-duration: 1s;
  }
  .group-hover\\:bg-\\[\\#5b2d89\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #5b2d89;
      }
    }
  }
  .group-hover\\:bg-\\[\\#6a6a6a\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #6a6a6a;
      }
    }
  }
  .group-hover\\:bg-\\[\\#21437982\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #21437982;
      }
    }
  }
  .group-hover\\:bg-\\[\\#efda1a2f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        background-color: #efda1a2f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .peer-hover\\/bottom\\:rounded-b-none {
    &:is(:where(.peer\\/bottom):hover ~ *) {
      @media (hover: hover) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/left\\:rounded-l-none {
    &:is(:where(.peer\\/left):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .peer-hover\\/right\\:rounded-r-none {
    &:is(:where(.peer\\/right):hover ~ *) {
      @media (hover: hover) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
  .peer-hover\\/top\\:rounded-t-none {
    &:is(:where(.peer\\/top):hover ~ *) {
      @media (hover: hover) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
  .after\\:absolute {
    &::after {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .after\\:inset-0 {
    &::after {
      content: var(--tw-content);
      inset: calc(var(--spacing) * 0);
    }
  }
  .after\\:top-\\[100\\%\\] {
    &::after {
      content: var(--tw-content);
      top: 100%;
    }
  }
  .after\\:left-1\\/2 {
    &::after {
      content: var(--tw-content);
      left: calc(1 / 2 * 100%);
    }
  }
  .after\\:h-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      height: 6px;
    }
  }
  .after\\:w-\\[10px\\] {
    &::after {
      content: var(--tw-content);
      width: 10px;
    }
  }
  .after\\:-translate-x-1\\/2 {
    &::after {
      content: var(--tw-content);
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .after\\:animate-\\[fadeOut_1s_ease-out_forwards\\] {
    &::after {
      content: var(--tw-content);
      animation: fadeOut 1s ease-out forwards;
    }
  }
  .after\\:border-t-\\[6px\\] {
    &::after {
      content: var(--tw-content);
      border-top-style: var(--tw-border-style);
      border-top-width: 6px;
    }
  }
  .after\\:border-r-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-right-style: var(--tw-border-style);
      border-right-width: 5px;
    }
  }
  .after\\:border-l-\\[5px\\] {
    &::after {
      content: var(--tw-content);
      border-left-style: var(--tw-border-style);
      border-left-width: 5px;
    }
  }
  .after\\:border-t-white {
    &::after {
      content: var(--tw-content);
      border-top-color: var(--color-white);
    }
  }
  .after\\:border-r-transparent {
    &::after {
      content: var(--tw-content);
      border-right-color: transparent;
    }
  }
  .after\\:border-l-transparent {
    &::after {
      content: var(--tw-content);
      border-left-color: transparent;
    }
  }
  .after\\:bg-purple-500\\/30 {
    &::after {
      content: var(--tw-content);
      background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-purple-500) 30%, transparent);
      }
    }
  }
  .after\\:content-\\[\\"\\"\\] {
    &::after {
      --tw-content: "";
      content: var(--tw-content);
    }
  }
  .focus-within\\:border-\\[\\#454545\\] {
    &:focus-within {
      border-color: #454545;
    }
  }
  .hover\\:bg-\\[\\#0f0f0f\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #0f0f0f;
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 20%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#5f3f9a\\]\\/40 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in oklab, #5f3f9a 40%, transparent);
      }
    }
  }
  .hover\\:bg-\\[\\#18181B\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #18181B;
      }
    }
  }
  .hover\\:bg-\\[\\#34343b\\] {
    &:hover {
      @media (hover: hover) {
        background-color: #34343b;
      }
    }
  }
  .hover\\:bg-red-600 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-600);
      }
    }
  }
  .hover\\:bg-zinc-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-zinc-700);
      }
    }
  }
  .hover\\:bg-zinc-800\\/50 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(27.4% 0.006 286.033) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-zinc-800) 50%, transparent);
        }
      }
    }
  }
  .hover\\:text-neutral-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
}
* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}
button {
  &:hover {
    @media (hover: hover) {
      background-image: none;
    }
  }
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  cursor: pointer;
}
input {
  --tw-outline-style: none;
  outline-style: none;
  --tw-border-style: none;
  border-style: none;
  background-color: transparent;
  background-image: none;
  &::-moz-placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::placeholder {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  &::-moz-placeholder {
    color: var(--color-neutral-500);
  }
  &::placeholder {
    color: var(--color-neutral-500);
  }
  &::-moz-placeholder {
    font-style: italic;
  }
  &::placeholder {
    font-style: italic;
  }
  &:-moz-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:placeholder-shown {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
svg {
  height: auto;
  width: auto;
  pointer-events: none;
}
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
#react-scan-toolbar {
  position: fixed;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  color: var(--color-white);
  background-color: var(--color-black);
  -webkit-user-select: none;
  -moz-user-select: none;
       user-select: none;
  cursor: move;
  opacity: 0%;
  z-index: 2147483678;
  animation: fadeIn ease-in forwards;
  animation-delay: .3s;
  animation-duration: .3s;
  --tw-shadow: 0 4px 12px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  place-self: start;
  will-change: transform;
  backface-visibility: hidden;
}
#react-scan-toolbar pre,
#react-scan-toolbar textarea,
#react-scan-toolbar input[type='text'],
#react-scan-toolbar input[type='search'],
#react-scan-toolbar [data-react-scan-selectable] {
  -webkit-user-select: text;
  -moz-user-select: text;
       user-select: text;
  cursor: text;
}
.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}
.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}
.resize-line {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  overflow: hidden;
  background-color: var(--color-black);
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-right,
.resize-left {
  inset-block: calc(var(--spacing) * 0);
  width: calc(var(--spacing) * 6);
  cursor: ew-resize;
  .resize-line-wrapper {
    inset-block: calc(var(--spacing) * 0);
    width: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-x: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-right {
  right: calc(var(--spacing) * 0);
  --tw-translate-x: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    right: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-left {
  left: calc(var(--spacing) * 0);
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    left: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-top,
.resize-bottom {
  inset-inline: calc(var(--spacing) * 0);
  height: calc(var(--spacing) * 6);
  cursor: ns-resize;
  .resize-line-wrapper {
    inset-inline: calc(var(--spacing) * 0);
    height: calc(1 / 2 * 100%);
  }
  &:hover {
    .resize-line {
      --tw-translate-y: calc(var(--spacing) * 0);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
}
.resize-top {
  top: calc(var(--spacing) * 0);
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    top: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.resize-bottom {
  bottom: calc(var(--spacing) * 0);
  --tw-translate-y: calc(1 / 2 * 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  .resize-line-wrapper {
    bottom: calc(var(--spacing) * 0);
  }
  .resize-line {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-right: calc(var(--spacing) * 2);
  padding-left: calc(var(--spacing) * 3);
  min-height: calc(var(--spacing) * 9);
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  overflow: hidden;
  white-space: nowrap;
}
.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: calc(var(--spacing) * 1);
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 50%, transparent) !important;
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 50%, transparent) !important;
  }
  &:hover {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 25%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 25%, transparent);
    }
  }
  &.disabled {
    opacity: 50%;
    pointer-events: none;
  }
  &:before {
    content: "";
    position: absolute;
    inset: calc(var(--spacing) * 0);
    --tw-translate-x: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}
.react-scan-close-button {
  background-color: color-mix(in srgb, #fff 10%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
  }
  &:hover {
    background-color: color-mix(in srgb, #fff 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 15%, transparent);
    }
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 3);
  height: calc(var(--spacing) * 7);
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #888;
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
  border-color: #222;
  background-color: #0a0a0a;
}
.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-inline: calc(var(--spacing) * 2);
  color: #888;
  &::before {
    content: var(--tw-content);
    color: var(--color-gray-500);
  }
  &::before {
    --tw-content: attr(data-section);
    content: var(--tw-content);
  }
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  > .react-scan-property {
    margin-left: calc(14px * -1);
  }
}
.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: calc(var(--spacing) * 8);
  border-left-style: var(--tw-border-style);
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}
.react-scan-property-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: calc(var(--spacing) * 7);
  max-width: 100%;
  overflow: hidden;
}
.react-scan-string {
  color: #9ecbff;
}
.react-scan-number {
  color: #79c7ff;
}
.react-scan-boolean {
  color: #56b6c2;
}
.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(var(--spacing) * 60);
  white-space: nowrap;
  color: var(--color-white);
}
.react-scan-input {
  color: var(--color-white);
  background-color: var(--color-black);
}
@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.react-scan-arrow {
  position: absolute;
  top: calc(var(--spacing) * 0);
  left: calc(var(--spacing) * 7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: calc(var(--spacing) * 7);
  width: calc(var(--spacing) * 6);
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
  z-index: 10;
  > svg {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.react-scan-nested {
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: calc(var(--spacing) * 0);
    left: calc(var(--spacing) * 0);
    height: 100%;
    width: 1px;
    background-color: color-mix(in srgb, oklch(55.1% 0.027 264.364) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-500) 30%, transparent);
    }
  }
}
.react-scan-settings {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing) * 4);
  padding-inline: calc(var(--spacing) * 4);
  padding-block: calc(var(--spacing) * 2);
  color: #888;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
}
.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: calc(var(--spacing) * 7);
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
}
.react-scan-flash-overlay {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  opacity: 0%;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  mix-blend-mode: multiply;
  background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-purple-500) 90%, transparent);
  }
}
.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: calc(var(--spacing) * 6);
  width: calc(var(--spacing) * 10);
  input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    z-index: 20;
    opacity: 0%;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  input:checked {
    + div {
      background-color: #5f3f9a;
      &::before {
        --tw-translate-x: 100%;
        translate: var(--tw-translate-x) var(--tw-translate-y);
        left: auto;
        border-color: #5f3f9a;
      }
    }
  }
  > div {
    position: absolute;
    inset: calc(var(--spacing) * 1);
    background-color: var(--color-neutral-700);
    border-radius: calc(infinity * 1px);
    pointer-events: none;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &:before {
      --tw-content: '';
      content: var(--tw-content);
      position: absolute;
      top: calc(1 / 2 * 100%);
      left: calc(var(--spacing) * 0);
      --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
      height: calc(var(--spacing) * 4);
      width: calc(var(--spacing) * 4);
      background-color: var(--color-white);
      border-style: var(--tw-border-style);
      border-width: 2px;
      border-color: var(--color-neutral-700);
      border-radius: calc(infinity * 1px);
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      transition-property: all;
      transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
      transition-duration: var(--tw-duration, var(--default-transition-duration));
      --tw-duration: 300ms;
      transition-duration: 300ms;
    }
  }
}
.react-scan-flash-active {
  opacity: 40%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0%;
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 200ms;
  transition-duration: 200ms;
  --tw-ease: var(--ease-out);
  transition-timing-function: var(--ease-out);
  will-change: opacity;
  &.fade-out {
    opacity: 0%;
  }
  &.fade-in {
    opacity: 100%;
  }
}
.react-scan-what-changed {
  ul {
    list-style-type: disc;
    padding-left: calc(var(--spacing) * 4);
  }
  li {
    white-space: nowrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      -moz-column-gap: calc(var(--spacing) * 2);
           column-gap: calc(var(--spacing) * 2);
    }
  }
}
.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding-inline: calc(var(--spacing) * 1.5);
  padding-block: calc(var(--spacing) * 0.5);
  border-radius: 4px;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  --tw-font-weight: var(--font-weight-medium);
  font-weight: var(--font-weight-medium);
  color: #a855f7;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  background-color: color-mix(in oklab, #a855f7 10%, transparent);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  transition-delay: 150ms;
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.count-flash {
  animation: countFlash .3s ease-out forwards;
}
.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}
.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 1);
       column-gap: calc(var(--spacing) * 1);
  color: #666;
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  > div {
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    border-radius: 4px;
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
    transform-origin: center;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    transition-delay: 150ms;
    --tw-duration: 300ms;
    transition-duration: 300ms;
    &[data-flash="true"] {
      background-color: color-mix(in oklab, #a855f7 10%, transparent);
      color: #a855f7;
    }
  }
}
.react-scan-slider {
  position: relative;
  min-height: calc(var(--spacing) * 6);
  > input {
    position: absolute;
    inset: calc(var(--spacing) * 0);
    opacity: 0%;
  }
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    top: calc(1 / 2 * 100%);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 1.5);
    background-color: color-mix(in oklab, #8e61e3 40%, transparent);
    border-radius: var(--radius-lg);
    pointer-events: none;
  }
  &:after {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    inset-block: calc(var(--spacing) * -2);
    z-index: calc(10 * -1);
  }
  span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(var(--spacing) * 0);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: calc(var(--spacing) * 2.5);
    width: calc(var(--spacing) * 2.5);
    border-radius: var(--radius-lg);
    background-color: #8e61e3;
    pointer-events: none;
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 75ms;
    transition-duration: 75ms;
  }
}
.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: calc(var(--spacing) * 1);
  min-width: calc(var(--spacing) * 1);
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:hover,
  &:active {
    > span {
      background-color: #222;
    }
    svg {
      opacity: 100%;
    }
  }
  &::before {
    --tw-content: "";
    content: var(--tw-content);
    position: absolute;
    inset: calc(var(--spacing) * 0);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    width: 1px;
    background-color: #222;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  > span {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    height: 18px;
    width: calc(var(--spacing) * 1.5);
    border-radius: 4px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  svg {
    position: absolute;
    top: calc(1 / 2 * 100%);
    left: calc(1 / 2 * 100%);
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
    rotate: 90deg;
    color: var(--color-neutral-400);
    opacity: 0%;
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    z-index: 50;
  }
}
.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    padding-block: 1px;
    border-radius: var(--radius-sm);
    background-color: var(--color-yellow-300);
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: var(--color-black);
  }
  .single {
    margin-right: 1px;
    padding-inline: 2px;
  }
  .regex {
    padding-inline: 2px;
  }
  .start {
    margin-left: 1px;
    border-top-left-radius: var(--radius-sm);
    border-bottom-left-radius: var(--radius-sm);
  }
  .end {
    margin-right: 1px;
    border-top-right-radius: var(--radius-sm);
    border-bottom-right-radius: var(--radius-sm);
  }
  .middle {
    margin-inline: 1px;
    border-radius: var(--radius-sm);
  }
}
.react-scan-toolbar-notification {
  position: absolute;
  inset-inline: calc(var(--spacing) * 0);
  display: flex;
  align-items: center;
  -moz-column-gap: calc(var(--spacing) * 2);
       column-gap: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 1);
  padding-left: calc(var(--spacing) * 2);
  font-size: 10px;
  color: var(--color-neutral-300);
  background-color: color-mix(in srgb, #000 90%, transparent);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--color-black) 90%, transparent);
  }
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  &:before {
    --tw-content: '';
    content: var(--tw-content);
    position: absolute;
    inset-inline: calc(var(--spacing) * 0);
    background-color: var(--color-black);
    height: calc(var(--spacing) * 2);
  }
  &.position-top {
    top: 100%;
    --tw-translate-y: -100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
    &::before {
      top: calc(var(--spacing) * 0);
      --tw-translate-y: -100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.position-bottom {
    bottom: 100%;
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    &::before {
      bottom: calc(var(--spacing) * 0);
      --tw-translate-y: 100%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  &.is-open {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-header-item {
  position: absolute;
  inset: calc(var(--spacing) * 0);
  --tw-translate-y: calc(200% * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 300ms;
  transition-duration: 300ms;
  &.is-visible {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
}
.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}
.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
  transition-duration: var(--tw-duration, var(--default-transition-duration));
  --tw-duration: 75ms;
  transition-duration: 75ms;
  transition-timing-function: ease-out;
  > * {
    min-height: 0;
  }
  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes countFlash {
  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }
  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}
@keyframes countFlashShake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px) scale(1.1);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
    }
  }
}
`,i_=(e,t,n=t)=>{let[r,i]=k(e);return A(()=>{if(e===r)return;let a=setTimeout(()=>i(e),e?t:n);return()=>clearTimeout(a)},[e,t,n]),r},a_=async e=>{try{let t=await jd(e),n=`${t.htmlPreview}${t.stackString}`;return n.trim()?(await navigator.clipboard.writeText(n),!0):!1}catch{return!1}},o_=()=>{let e=window.getSelection?.call(window);return!!(e&&e.toString().length>0)},s_=()=>{let e=document.activeElement;if(!e)return!1;let t=e.tagName;return!!(t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||e instanceof HTMLElement&&e.isContentEditable)},c_=()=>{if(typeof navigator>`u`)return!1;let e=navigator.platform||``;return e?/Mac|iPhone|iPad|iPod/i.test(e):/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)},l_=()=>typeof window<`u`&&!!window.__REACT_GRAB__,u_=sn(()=>G(`absolute inset-0 flex items-center gap-x-2`,`translate-y-0`,`transition-transform duration-300`,Qp.value&&`-translate-y-[200%]`)),d_=()=>{let e=j(null),t=j(null),[n,r]=k(null);return Mn(()=>{let e=Q.inspectState.value;e.kind===`focused`&&r(e.fiber)}),Mn(()=>{let n=fm.value;Qt(()=>{if(Q.inspectState.value.kind!==`focused`||!e.current||!t.current)return;let{totalUpdates:r,currentIndex:i,updates:a,isVisible:o,windowOffset:s}=n,c=Math.max(0,r-1),l=o?`#${s+i} Re-render`:c>0?`\xD7${c}`:``,u;if(c>0&&i>=0&&i<a.length){let e=a[i]?.fiberInfo?.selfTime;u=e>0?e<.1-2**-52?`< 0.1ms`:`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=l?` \u2022 ${l}`:``,t.current.dataset.text=u?` \u2022 ${u}`:``})}),I(`div`,{className:u_,children:[kt(()=>{if(!n)return null;let{name:e,wrappers:t,wrapperTypes:r}=Jp(n),i=t.length?`${t.join(`(`)}(${e})${`)`.repeat(t.length)}`:e??``,a=r[0];return I(`span`,{title:i,className:`flex items-center gap-x-1`,children:[e??`Unknown`,I(`span`,{title:a?.title,className:`flex items-center gap-x-1 text-[10px] text-purple-400`,children:!!a&&I(D,{children:[I(`span`,{className:G(`rounded py-[1px] px-1`,`truncate`,a.compiler&&`bg-purple-800 text-neutral-400`,!a.compiler&&`bg-neutral-700 text-neutral-300`,a.type===`memo`&&`bg-[#5f3f9a] text-white`),children:a.type},a.type),a.compiler&&I(`span`,{className:`text-yellow-300`,children:`✨`})]})}),r.length>1&&I(`span`,{className:`text-[10px] text-neutral-400`,children:[`×`,r.length-1]})]})},[n]),I(`div`,{className:`flex items-center gap-x-2 mr-auto text-xs text-[#888]`,children:[I(`span`,{ref:e,className:`with-data-text cursor-pointer !overflow-visible`,title:`Click to toggle between rerenders and total renders`}),I(`span`,{ref:t,className:`with-data-text !overflow-visible`})]})]})},f_=()=>{let e=i_(Q.inspectState.value.kind===`focused`,150,0),t=Dn(!1),n=()=>{q.value={view:`none`},Q.inspectState.value={kind:`inspect-off`}},r=async()=>{let e=Q.inspectState.value;e.kind!==`focused`||!e.focusedDomElement||await a_(e.focusedDomElement)&&(t.value=!0,setTimeout(()=>{t.value=!1,n()},pf))},i=j(r);if(i.current=r,A(()=>{let e=e=>{let t=Q.inspectState.value;t.kind!==`focused`||!t.focusedDomElement||l_()||(e.metaKey||e.ctrlKey)&&(e.shiftKey||e.altKey||e.key!==`c`&&e.code!==`KeyC`||s_()||o_()||(e.preventDefault(),e.stopImmediatePropagation(),i.current()))};return document.addEventListener(`keydown`,e,{capture:!0}),()=>{document.removeEventListener(`keydown`,e,{capture:!0})}},[]),q.value.view===`notifications`)return;let a=Q.inspectState.value.kind===`focused`,o=c_()?`⌘C`:`Ctrl+C`;return I(`div`,{className:`react-scan-header`,children:[I(`div`,{className:`relative flex-1 h-full`,children:I(`div`,{className:G(`react-scan-header-item is-visible`,!e&&`!duration-0`),children:I(d_,{})})}),a&&I(`button`,{type:`button`,title:`Copy element (${o})`,className:`react-scan-close-button`,onClick:r,children:I(z,{name:t.value?`icon-check`:`icon-copy`,className:G(t.value&&`text-green-500`)})}),I(`button`,{type:`button`,title:`Close`,className:`react-scan-close-button`,onClick:n,children:I(z,{name:`icon-close`})})]})},p_=({className:e,...t})=>I(`div`,{className:G(`react-scan-toggle`,e),children:[I(`input`,{type:`checkbox`,...t}),I(`div`,{})]}),m_=({fps:e})=>I(`div`,{className:G(`flex items-center gap-x-1 px-2 w-full`,`h-6`,`rounded-md`,`font-mono leading-none`,`bg-[#141414]`,`ring-1 ring-white/[0.08]`),children:[I(`div`,{style:{color:(e=>e<30?`#EF4444`:e<50?`#F59E0B`:`rgb(214,132,245)`)(e)},className:`text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center`,children:e}),I(`span`,{className:`text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit`,children:`FPS`})]}),h_=()=>{let[e,t]=k(null);return A(()=>{let e=setInterval(()=>{t(Yh())},200);return()=>clearInterval(e)},[]),I(`div`,{className:G(`flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]`,`whitespace-nowrap text-sm text-white`),children:e===null?I(D,{children:`️`}):I(m_,{fps:e})})},g_=!1,__=e=>{if(g_)throw Error(e)},v_=e=>e(),J=class e extends Array{constructor(e=25){super(),sf(this,`capacity`,e)}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,n){let r=new e(n);return r.push(...t),r}},y_=class{constructor(e){sf(this,`subscribers`,new Set),sf(this,`currentValue`),this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},b_=150,x_=new y_(new J(b_)),S_=50,C_=class{constructor(){sf(this,`channels`,{})}publish(e,t,n=!0){let r=this.channels[t];if(!r){if(!n)return;this.channels[t]={callbacks:new J(S_),state:new J(S_)},this.channels[t].state.push(e);return}r.state.push(e),r.callbacks.forEach(t=>t(e))}getAvailableChannels(){return J.fromArray(Object.keys(this.channels),S_)}subscribe(e,t,n=!1){let r=()=>(n||this.channels[e].state.forEach(e=>{t(e)}),()=>{let n=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=J.fromArray(n,S_)}),i=this.channels[e];return i?(i.callbacks.push(t),r()):(this.channels[e]={callbacks:new J(S_),state:new J(S_)},this.channels[e].callbacks.push(t),r())}updateChannelState(e,t,n=!0){let r=this.channels[e];if(!r){if(!n)return;let r=new J(S_),i={callbacks:new J(S_),state:r};this.channels[e]=i,i.state=t(r);return}r.state=t(r.state)}getChannelState(e){return this.channels[e].state??new J(S_)}},w_=new C_,T_={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},E_={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},D_=(e,t=T_)=>{let n=[];return t.skipProviders&&n.push(...E_.providers),t.skipHocs&&n.push(...E_.hocs),t.skipContainers&&n.push(...E_.containers),t.skipUtilities&&n.push(...E_.utilities),t.skipBoundaries&&n.push(...E_.boundaries),!n.some(t=>t.test(e))},O_=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],k_=e=>{for(let t=0;t<O_.length;t++)if(O_[t].test(e))return!0;let t=!/[aeiou]/i.test(e),n=(e.match(/\d/g)?.length??0)>e.length/2,r=/^[a-z]+$/.test(e),i=/[$_]{2,}/.test(e);return Number(t)+Number(n)+Number(r)+Number(i)>=2},A_=e=>{let t=T(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,`$<inner>`):``},j_=(e,t=T_)=>{if(!e||!T(e.type))return[];let n=[],r=e;for(;r.return;){let e=A_(r.type);e&&!k_(e)&&D_(e,t)&&e.toLowerCase()!==e&&n.push(e),r=r.return}let i=Array(n.length);for(let e=0;e<n.length;e++)i[e]=n[n.length-e-1];return i},M_=(e,t=()=>!0)=>{let n=e;for(;n;){let e=T(n.type);if(e&&t(e))return e;n=n.return}return null},P_=`never-hidden`,F_=()=>{N_?.();let e=()=>{document.hidden&&(P_=Date.now())};document.addEventListener(`visibilitychange`,e),N_=()=>{document.removeEventListener(`visibilitychange`,e)}},I_=e=>[`pointerup`,`click`].includes(e)?`pointer`:(e.includes(`key`),[`keydown`,`keyup`].includes(e)?`keyboard`:null),L_=null,R_=e=>{F_();let t=new Map,n=new Map,r=r=>{if(!r.interactionId)return;if(r.interactionId&&r.target&&!n.has(r.interactionId)&&n.set(r.interactionId,r.target),r.target){let e=r.target;for(;e;){if(e.id===`react-scan-toolbar-root`||e.id===`react-scan-root`)return;e=e.parentElement}}let i=t.get(r.interactionId);if(i)r.duration>i.latency?(i.entries=[r],i.latency=r.duration):r.duration===i.latency&&r.startTime===i.entries[0].startTime&&i.entries.push(r);else{let n=I_(r.name);if(!n)return;let i={id:r.interactionId,latency:r.duration,entries:[r],target:r.target,type:n,startTime:r.startTime,endTime:Date.now(),processingStart:r.processingStart,processingEnd:r.processingEnd,duration:r.duration,inputDelay:r.processingStart-r.startTime,processingDuration:r.processingEnd-r.processingStart,presentationDelay:r.duration-(r.processingEnd-r.startTime),timestamp:Date.now(),timeSinceTabInactive:P_===`never-hidden`?`never-hidden`:Date.now()-P_,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(i.id,i),L_||=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(i.id)),L_=null})})}},i=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,n=t.length;e<n;e++){let n=t[e];r(n)}});try{i.observe({type:`event`,buffered:!0,durationThreshold:16}),i.observe({type:`first-input`,buffered:!0})}catch{}return()=>i.disconnect()},z_=()=>R_(e=>{w_.publish({kind:`entry-received`,entry:e},`recording`)}),B_=25,V_=new J(B_),H_=(e,t)=>{let n=null;for(let r of t){if(r.type!==e.type)continue;if(n===null){n=r;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(r,e)<t(n,e)&&(n=r)}return n},U_=e=>w_.subscribe(`recording`,t=>{let n=t.kind===`auto-complete-race`?V_.find(e=>e.interactionUUID===t.interactionUUID):H_(t.entry,V_);n&&e(n.completeInteraction(t))}),W_=({onMicroTask:e,onRAF:t,onTimeout:n,abort:r})=>{queueMicrotask(()=>{r?.()!==!0&&e()&&requestAnimationFrame(()=>{r?.()!==!0&&t()&&setTimeout(()=>{r?.()!==!0&&n()},0)})})},G_=e=>{let t=ah(e);if(!t)return;let n=t?T(t?.type):`N/A`;if(n||=M_(t,e=>e.length>2)??`N/A`,n)return{componentPath:j_(t),childrenTree:{},componentName:n,elementFiber:t}},K_=(e,t)=>{let n=null,r=t=>{switch(e){case`pointer`:return t.phase===`start`?`pointerup`:t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement?`change`:`click`;case`keyboard`:return t.phase===`start`?`keydown`:`change`}},i={current:{kind:`uninitialized-stage`,interactionUUID:uf(),stageStart:Date.now(),interactionType:e}},a=n=>{var a,s;if(n.composedPath().some(e=>e instanceof Element&&e.id===`react-scan-toolbar-root`)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:`uninitialized-stage`,interactionUUID:uf(),stageStart:Date.now(),interactionType:e}),i.current.kind!==`uninitialized-stage`))return;let c=performance.now();(a=t?.onStart)==null||a.call(t,i.current.interactionUUID);let l=G_(n.target);if(!l){(s=t?.onError)==null||s.call(t,i.current.interactionUUID);return}let u={},d=Y_(u);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:l.childrenTree,componentName:l.componentName,componentPath:l.componentPath,fiberRenders:u,kind:`interaction-start`,interactionStartDetail:c,stopListeningForRenders:d};let f=r({phase:`end`,target:n.target});document.addEventListener(f,o,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(f,o)})};document.addEventListener(r({phase:`start`}),a,{capture:!0});let o=(r,a,o)=>{var s;if(i.current.kind!==`interaction-start`&&a===n){if(e===`pointer`&&r.target instanceof HTMLSelectElement){i.current={kind:`uninitialized-stage`,interactionUUID:uf(),stageStart:Date.now(),interactionType:e};return}(s=t?.onError)==null||s.call(t,i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:uf(),stageStart:Date.now(),interactionType:e},__(`pointer -> click`);return}n=a,W_({abort:o,onMicroTask:()=>i.current.kind===`uninitialized-stage`?!1:(i.current={...i.current,kind:`js-end-stage`,jsEndDetail:performance.now()},!0),onRAF:()=>{var n;return i.current.kind!==`js-end-stage`&&i.current.kind!==`raf-stage`?((n=t?.onError)==null||n.call(t,i.current.interactionUUID),__(`bad transition to raf`),i.current={kind:`uninitialized-stage`,interactionUUID:uf(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:`raf-stage`,rafStart:performance.now()},!0)},onTimeout:()=>{var n;if(i.current.kind!==`raf-stage`){(n=t?.onError)==null||n.call(t,i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:uf(),stageStart:Date.now(),interactionType:e},__(`raf->timeout`);return}let r=Date.now(),a=Object.freeze({...i.current,kind:`timeout-stage`,blockingTimeEnd:r,commitEnd:performance.now()});i.current={kind:`uninitialized-stage`,interactionUUID:uf(),stageStart:r,interactionType:e};let o=!1,s=e=>{var n;o=!0;let r={detailedTiming:a,latency:e.kind===`auto-complete-race`?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};(n=t?.onComplete)==null||n.call(t,a.interactionUUID,r,e);let i=V_.filter(e=>e.interactionUUID!==a.interactionUUID);return V_=J.fromArray(i,B_),r},c={completeInteraction:s,endDateTime:Date.now(),startDateTime:a.blockingTimeStart,type:e,interactionUUID:a.interactionUUID};if(V_.push(c),J_())setTimeout(()=>{if(o)return;s({kind:`auto-complete-race`,detailedTiming:a,interactionUUID:a.interactionUUID});let e=V_.filter(e=>e.interactionUUID!==a.interactionUUID);V_=J.fromArray(e,B_)},1e3);else{let e=V_.filter(e=>e.interactionUUID!==a.interactionUUID);V_=J.fromArray(e,B_),s({kind:`auto-complete-race`,detailedTiming:a,interactionUUID:a.interactionUUID})}}})},s=e=>{let t=uf();o(e,t,()=>t!==n)};return e===`keyboard`&&document.addEventListener(`keypress`,s),()=>{document.removeEventListener(r({phase:`start`}),a,{capture:!0}),document.removeEventListener(`keypress`,s)}},q_=e=>te(e,e=>{if(C(e))return!0})?.stateNode,J_=()=>`PerformanceEventTiming`in globalThis,Y_=e=>{let t=t=>{let n=T(t.type);if(!n)return;let r=e[n];if(!r){let r=new Set,i=t.return&&ch(t.return),a=i&&T(i[0]);a&&r.add(a);let{selfTime:o,totalTime:s}=fe(t),c=Hh(t),l={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:c.fiberProps||l,fiberState:c.fiberState||l,fiberContext:c.fiberContext||l};e[n]={renderCount:1,hasMemoCache:pe(t),wasFiberRenderMount:Z_(t),parents:r,selfTime:o,totalTime:s,nodeInfo:[{element:q_(t),name:T(t.type)??`Unknown`,selfTime:fe(t).selfTime}],changes:u};return}if(ch(t)?.[0]?.type){let e=t.return&&ch(t.return),n=e&&T(e[0]);n&&r.parents.add(n)}let{selfTime:i,totalTime:a}=fe(t),o=Hh(t);if(!o)return;let s={current:[],changes:new Set,changesCounts:new Map};r.wasFiberRenderMount=r.wasFiberRenderMount||Z_(t),r.hasMemoCache=r.hasMemoCache||pe(t),r.changes={fiberProps:X_(r.changes?.fiberProps||s,o.fiberProps||s),fiberState:X_(r.changes?.fiberState||s,o.fiberState||s),fiberContext:X_(r.changes?.fiberContext||s,o.fiberContext||s)},r.renderCount+=1,r.selfTime+=i,r.totalTime+=a,r.nodeInfo.push({element:q_(t),name:T(t.type)??`Unknown`,selfTime:fe(t).selfTime})};return Q.interactionListeningForRenders=t,()=>{Q.interactionListeningForRenders===t&&(Q.interactionListeningForRenders=null)}},X_=(e,t)=>{let n={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)n.current.some(t=>t.name===e.name)||n.current.push(e);for(let r of t.changes)if(typeof r==`string`||typeof r==`number`){n.changes.add(r);let i=e.changesCounts.get(r)||0,a=t.changesCounts.get(r)||0;n.changesCounts.set(r,i+a)}return n},Z_=e=>{if(!e.alternate)return!0;let t=e.alternate,n=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,r=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!n&&r},Q_=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:(e,r)=>{let i,a;r?(i=e,a=r):a=e;let o=i?i(t):void 0,s=(e,t)=>{if(i){let n=i(e),r=i(t);Object.is(o,n)||(o=n,a(n,r))}else a(e,t)};return n.add(s),()=>n.delete(s)}},o=t=e(r,i,a);return a},$_=(e=>e?Q_(e):Q_),ev=null,$_()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}})),tv=200,nv=$_()((e,t)=>{let n=new Set;return{state:{events:new J(tv)},actions:{addEvent:r=>{n.forEach(e=>e(r));let i=[...t().state.events,r],a=(e,t)=>{let n=i.find(t=>{if(t.kind!==`long-render`&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0});n&&t(n)},o=new Set;i.forEach(e=>{e.kind!==`interaction`&&a(e,()=>{o.add(e.id)})});let s=i.filter(e=>!o.has(e.id));e(()=>({state:{events:J.fromArray(s,tv)}}))},addListener:e=>(n.add(e),()=>{n.delete(e)}),clear:()=>{e({state:{events:new J(tv)}})}}}}),rv=()=>Un(nv.subscribe,nv.getState),iv=null,av=null,ov=null,cv=()=>{let e=e=>{sv=e.composedPath().map(e=>e.id).filter(Boolean).includes(`react-scan-toolbar`)};return document.addEventListener(`mouseover`,e),ov=e,()=>{ov&&document.removeEventListener(`mouseover`,ov)}},lv=()=>{let e=()=>{iv=performance.now(),av=performance.timeOrigin};return document.addEventListener(`visibilitychange`,e),()=>{document.removeEventListener(`visibilitychange`,e)}},uv=150,dv=[],fv=()=>{let e=z_(),t=cv(),n=lv(),r=nf(),i=async(e,t,n)=>{nv.getState().actions.addEvent({kind:`interaction`,id:uf(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:n.kind}}});let r=w_.getChannelState(`recording`);t.detailedTiming.stopListeningForRenders(),r.length&&w_.updateChannelState(`recording`,()=>new J(S_))},a=K_(`pointer`,{onComplete:i}),o=K_(`keyboard`,{onComplete:i}),s=U_(e=>{x_.setState(J.fromArray(x_.getCurrentState().concat(e),b_))});return()=>{t(),n(),r(),e(),a(),s(),o()}},pv=e=>{let t=e.filter(e=>e.length>2);return t.length===0?e.at(-1)??`Unknown`:t.at(-1)},mv=e=>{switch(e.kind){case`interaction`:{let{renderTime:t,otherJSTime:n,framePreparation:r,frameConstruction:i,frameDraw:a}=e;return t+n+r+i+(a??0)}case`dropped-frames`:return e.otherTime+e.renderTime}},hv=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,gv=e=>{let t=mv(e.timing);switch(e.kind){case`interaction`:return t<200?`low`:t<500?`needs-improvement`:`high`;case`dropped-frames`:return t<50?`low`:t<uv?`needs-improvement`:`high`}},_v=()=>At(vv),vv=at(null),yv=({size:e=24,className:t})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:G([`lucide lucide-chevron-right`,t]),children:I(`path`,{d:`m9 18 6-6-6-6`})}),bv=({className:e=``,size:t=24,events:n=[]})=>{let r=n.includes(!0),i=n.filter(e=>e).length,a=i>99?`>99`:i,o=r?Math.max(t*.6,14):Math.max(t*.4,6);return I(`div`,{className:`relative`,children:[I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:`lucide lucide-bell ${e}`,children:[I(`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`}),I(`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`})]}),n.length>0&&i>0&&$.options.value.showNotificationCount&&I(`div`,{className:G([`absolute`,r?`-top-2.5 -right-2.5`:`-top-1 -right-1`,`rounded-full`,`flex items-center justify-center`,`text-[8px] font-medium text-white`,`aspect-square`,r?`bg-red-500/90`:`bg-purple-500/90`]),style:{width:`${o}px`,height:`${o}px`,padding:r?`0.5px`:`0`},children:r&&a})]})},xv=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M18 6 6 18`}),I(`path`,{d:`m6 6 12 12`})]}),Sv=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`}),I(`path`,{d:`M16 9a5 5 0 0 1 0 6`}),I(`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`})]}),Cv=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M16 9a5 5 0 0 1 .95 2.293`}),I(`path`,{d:`M19.364 5.636a9 9 0 0 1 1.889 9.96`}),I(`path`,{d:`m2 2 20 20`}),I(`path`,{d:`m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11`}),I(`path`,{d:`M9.828 4.172A.686.686 0 0 1 11 4.657v.686`})]}),wv=({size:e=24,className:t})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:G([`lucide lucide-arrow-left`,t]),children:[I(`path`,{d:`m12 19-7-7 7-7`}),I(`path`,{d:`M19 12H5`})]}),Tv=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M14 4.1 12 6`}),I(`path`,{d:`m5.1 8-2.9-.8`}),I(`path`,{d:`m6 12-1.9 2`}),I(`path`,{d:`M7.2 2.2 8 5.1`}),I(`path`,{d:`M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z`})]}),Ev=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M10 8h.01`}),I(`path`,{d:`M12 12h.01`}),I(`path`,{d:`M14 8h.01`}),I(`path`,{d:`M16 12h.01`}),I(`path`,{d:`M18 8h.01`}),I(`path`,{d:`M6 8h.01`}),I(`path`,{d:`M7 16h10`}),I(`path`,{d:`M8 12h.01`}),I(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`})]}),Dv=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,style:{transform:`rotate(180deg)`},children:[I(`circle`,{cx:`12`,cy:`12`,r:`10`}),I(`path`,{d:`m4.9 4.9 14.2 14.2`})]}),Ov=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:[I(`polyline`,{points:`22 17 13.5 8.5 8.5 13.5 2 7`}),I(`polyline`,{points:`16 17 22 17 22 11`})]}),kv=({children:e,triggerContent:t,wrapperProps:n})=>{let[r,i]=k(`closed`),[a,o]=k(null),[s,c]=k({width:window.innerWidth,height:window.innerHeight}),l=j(null),u=j(null),d=At($y),f=j(!1);A(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),p()};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let p=()=>{if(l.current&&d){let e=l.current.getBoundingClientRect(),t=d.getBoundingClientRect(),n=e.left+e.width/2,r=e.top;o(new DOMRect(n-t.left,r-t.top,e.width,e.height))}};A(()=>{p()},[l.current]),A(()=>{if(r===`opening`){let e=setTimeout(()=>i(`open`),120);return()=>clearTimeout(e)}else if(r===`closing`){let e=setTimeout(()=>i(`closed`),120);return()=>clearTimeout(e)}},[r]),A(()=>{let e=setInterval(()=>{!f.current&&r!==`closed`&&i(`closing`)},1e3);return()=>clearInterval(e)},[r]);let m=()=>{f.current=!0,p(),i(`opening`)},h=()=>{f.current=!1,p(),i(`closing`)},g=(()=>{if(!a||!d)return{top:0,left:0};let e=d.getBoundingClientRect(),t=u.current?.offsetHeight||40,n=a.x+e.left,r=a.y+e.top,i=n,o=r-4;return i-175/2<5?i=92.5:i+175/2>s.width-5&&(i=s.width-5-175/2),o-t<5&&(o=r+a.height+4),{top:o-e.top,left:i-e.left}})();return I(D,{children:[d&&a&&r!==`closed`&&tr(I(`div`,{ref:u,className:G([`absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg`,`transition-[opacity] duration-120 ease-out`,`after:content-[""] after:absolute after:top-[100%]`,`after:left-1/2 after:-translate-x-1/2`,`after:w-[10px] after:h-[6px]`,`after:border-l-[5px] after:border-l-transparent`,`after:border-r-[5px] after:border-r-transparent`,`after:border-t-[6px] after:border-t-white`,`pointer-events-none`,r===`opening`||r===`closing`?`opacity-0`:`opacity-100`]),style:{top:g.top+`px`,left:g.left+`px`,transform:`translate(-50%, calc(-100% - 4px)) scale(${r===`open`?1:.97})`,minWidth:`175px`,willChange:`opacity, transform`},children:e}),d),I(`div`,{ref:l,onMouseEnter:m,onMouseLeave:h,...n,children:t})]})},Av=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:n,setRoute:r}=_v();return I(`div`,{className:G([`flex w-full justify-between items-center px-3 py-2 text-xs`]),children:[I(`div`,{className:G([`bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm`]),children:[I(`button`,{onClick:()=>{r({route:`render-visualization`,routeMessage:null})},className:G([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`render-visualization`||t.route===`render-explanation`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Ranked`}),I(`button`,{onClick:()=>{r({route:`other-visualization`,routeMessage:null})},className:G([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`other-visualization`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Overview`}),I(`button`,{onClick:()=>{r({route:`optimize`,routeMessage:null})},className:G([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`optimize`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:I(`span`,{children:`Prompts`})})]}),I(kv,{triggerContent:I(`button`,{onClick:()=>{n(e=>{e.audioNotificationsOptions.enabled&&e.audioNotificationsOptions.audioContext.state!==`closed`&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem(`react-scan-notifications-audio`,String(!t));let n=new AudioContext;return e.audioNotificationsOptions.enabled||df(n),t&&n.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:n,enabled:!0}}})},className:`ml-auto`,children:I(`div`,{className:G([`flex gap-x-2 justify-center items-center text-[#6E6E77]`]),children:[I(`span`,{children:`Alerts`}),t.audioNotificationsOptions.enabled?I(Sv,{size:16,className:`text-[#6E6E77]`}):I(Cv,{size:16,className:`text-[#6E6E77]`})]})}),children:I(D,{children:`Play a chime when a slowdown is recorded`})})]})},jv=e=>{let t=``;return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let n=``;n+=`Component Name:`,n+=e.name,n+=`
`,n+=`Rendered: ${e.count} times
`,n+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(n+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{n+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(n+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{n+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(n+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{n+=`${e.name}:${e.count}x
`})),t+=n,t+=`
`}),t},Mv=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:n,commitTime:r,framePresentTime:i,formattedReactData:a})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${n.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${r.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${i===null?``:`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${a}`,Nv=({interactionType:e,name:t,componentPath:n,time:r,renderTime:i,eHandlerTimeExcludingRenders:a,toRafTime:o,commitTime:s,framePresentTime:c,formattedReactData:l})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${n}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${c===null?``:`- how long it took from dom commit for the frame to be presented: ${c.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,Pv=({renderTime:e,otherTime:t,formattedReactData:n})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,Fv=({renderTime:e,otherTime:t,formattedReactData:n})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Iv=({renderTime:e,otherTime:t,formattedReactData:n})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${n}`,Lv=({interactionType:e,name:t,time:n,renderTime:r,eHandlerTimeExcludingRenders:i,toRafTime:a,commitTime:o,framePresentTime:s,formattedReactData:c})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${r.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?``:`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could have been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Rv=(e,t)=>v_(()=>{switch(e){case`data`:switch(t.kind){case`dropped-frames`:return Iv({formattedReactData:jv(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Mv({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:jv(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case`explanation`:switch(t.kind){case`dropped-frames`:return Fv({formattedReactData:jv(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Lv({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:jv(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:pv(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:mv(t.timing),toRafTime:t.timing.framePreparation})}case`fix`:switch(t.kind){case`dropped-frames`:return Pv({formattedReactData:jv(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Nv({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(`>`),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:jv(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:pv(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:mv(t.timing),toRafTime:t.timing.framePreparation})}}}),zv=({selectedEvent:e})=>{let[t,n]=k(`fix`),[r,i]=k(!1);return I(`div`,{className:G([`w-full h-full`]),children:[I(`div`,{className:G([`border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden`]),children:[I(`div`,{className:G([`bg-[#18181B] p-1 rounded-t-sm`]),children:I(`div`,{className:G([`flex items-center gap-x-1`]),children:[I(`button`,{onClick:()=>n(`fix`),className:G([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`fix`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Fix`}),I(`button`,{onClick:()=>n(`explanation`),className:G([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`explanation`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Explanation`}),I(`button`,{onClick:()=>n(`data`),className:G([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`data`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Data`})]})}),I(`div`,{className:G([`overflow-y-auto h-full`]),children:I(`pre`,{className:G([`p-2 h-full`,`whitespace-pre-wrap break-words`,`text-gray-300 font-mono `]),children:Rv(t,e)})})]}),I(`button`,{onClick:async()=>{let n=Rv(t,e);await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),1e3)},className:G([`mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm`,`hover:text-white transition-colors duration-200`,`flex items-center justify-center gap-x-2 text-xs`]),children:[I(`span`,{children:r?`Copied!`:`Copy Prompt`}),I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:G([`transition-transform duration-200`,r&&`scale-110`]),children:r?I(`path`,{d:`M20 6L9 17l-5-5`}):I(D,{children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})]})},Bv=(e,t)=>{switch(e.kind){case`dropped-frames`:return[...t?[{name:`Total Processing Time`,time:mv(e.timing),color:`bg-red-500`,kind:`total-processing-time`}]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`},{name:`JavaScript, DOM updates, Draw Frame`,time:e.timing.otherTime,color:`bg-[#4b4b4b]`,kind:`other-frame-drop`}]];case`interaction`:return[...t?[]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`}],{name:t?`React Renders, Hooks, Other JavaScript`:`JavaScript/React Hooks `,time:e.timing.otherJSTime,color:`bg-[#EFD81A]`,kind:`other-javascript`},{name:`Update DOM and Draw New Frame`,time:mv(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:`bg-[#1D3A66]`,kind:`other-not-javascript`}]}},Vv=({selectedEvent:e})=>{let[t]=k(_b()??!1),{notificationState:n}=_v(),[r,i]=k(n.routeMessage?.name?[n.routeMessage.name]:[]),a=Bv(e,t),o=At($y);A(()=>{if(n.routeMessage?.name){let e=o?.querySelector(`#overview-scroll-container`),t=o?.querySelector(`#react-scan-overview-bar-${n.routeMessage.name}`);if(e&&t){let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top;e.scrollTop+=n}}},[n.route]),A(()=>{n.route===`other-visualization`&&i(e=>n.routeMessage?.name?[n.routeMessage.name]:e)},[n.route]);let s=a.reduce((e,t)=>e+t.time,0);return I(`div`,{className:`rounded-sm border border-zinc-800 text-xs`,children:[I(`div`,{className:`p-2 border-b border-zinc-800 bg-zinc-900/50`,children:I(`div`,{className:`flex items-center justify-between`,children:[I(`h3`,{className:`text-xs font-medium`,children:`What was time spent on?`}),I(`span`,{className:`text-xs text-zinc-400`,children:[`Total: `,s.toFixed(0),`ms`]})]})}),I(`div`,{className:`divide-y divide-zinc-800`,children:a.map(t=>{let n=r.includes(t.kind);return I(`div`,{id:`react-scan-overview-bar-${t.kind}`,children:[I(`button`,{onClick:()=>i(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:`w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors`,children:I(`div`,{className:`flex-1`,children:[I(`div`,{className:`flex items-center justify-between mb-2`,children:[I(`div`,{className:`flex items-center gap-0.5`,children:[I(`svg`,{className:`h-4 w-4 text-zinc-400 transition-transform ${n?`rotate-90`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:I(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})}),I(`span`,{className:`font-medium flex items-center text-left`,children:t.name})]}),I(`span`,{className:` text-zinc-400`,children:[t.time.toFixed(0),`ms`]})]}),I(`div`,{className:`h-1 bg-zinc-800 rounded-full overflow-hidden`,children:I(`div`,{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/s*100}%`}})})]})}),n&&I(`div`,{className:`bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3`,children:I(`p`,{className:` text-zinc-400 mb-4 text-xs`,children:v_(()=>{switch(e.kind){case`interaction`:switch(t.kind){case`render`:return I(Kv,{input:Wv(e)});case`other-javascript`:return I(Kv,{input:Gv(e)});case`other-not-javascript`:return I(Kv,{input:Hv(e)})}case`dropped-frames`:switch(t.kind){case`total-processing-time`:return I(Kv,{input:{kind:`total-processing`,data:{time:mv(e.timing)}}});case`render`:return I(D,{children:I(Kv,{input:{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/mv(e.timing)}))}}})});case`other-frame-drop`:return I(Kv,{input:{kind:`other`}})}}})})})]},t.kind)})})]})},Hv=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),n=e.timing.renderTime/mv(e.timing)*100;return t>100?{kind:`high-render-count-update-dom-draw-frame`,data:{count:t,percentageOfTotal:n,copyButton:I(Uv,{})}}:{kind:`update-dom-draw-frame`,data:{copyButton:I(Uv,{})}}},Uv=()=>{let[e,t]=k(!1),{notificationState:n}=_v();return I(`button`,{onClick:async()=>{n.selectedEvent&&(await navigator.clipboard.writeText(Rv(`explanation`,n.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:`bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3`,children:[I(`span`,{children:e?`Copied!`:`Copy Prompt`}),I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:G([`transition-transform duration-200`,e&&`scale-110`]),children:e?I(`path`,{d:`M20 6L9 17l-5-5`}):I(D,{children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})},Wv=e=>e.timing.renderTime/mv(e.timing)>.3?{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/mv(e.timing),name:t.name}))}}:{kind:`other`},Gv=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/mv(e.timing)<.2?{kind:`js-explanation-base`}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:`high-render-count-high-js`,data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/mv(e.timing)>.3?e.timing.renderTime>.2?{kind:`js-explanation-base`}:{kind:`low-render-count-high-js`,data:{renderCount:t}}:{kind:`js-explanation-base`}},Kv=({input:e})=>{switch(e.kind){case`total-processing`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:[`This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be `,`<=16ms`]}),I(`p`,{children:`To debug the issue, check the "Ranked" tab to see if there are significant component renders`}),I(`p`,{children:`On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build`}),I(`p`,{children:[`To understand precisely what caused the slowdown while in production, use the `,I(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]}),I(`p`,{})]});case`render`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the time it took React to run components, and internal logic to handle the output of your component.`}),I(`div`,{className:G([`flex flex-col`]),children:[I(`p`,{children:`The slowest components for this time period were:`}),e.data.topByTime.map(e=>I(`div`,{children:[I(`strong`,{children:e.name}),`:`,` `,(e.percentage*100).toFixed(0),`% of total`]},e.name))]}),I(`p`,{children:`To view the render times of all your components, and what caused them to render, go to the "Ranked" tab`}),I(`p`,{children:`The "Ranked" tab shows the render times of every component.`}),I(`p`,{children:`The render times of the same components are grouped together into one bar.`}),I(`p`,{children:`Clicking the component will show you what props, state, or context caused the component to re-render.`})]});case`js-explanation-base`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),I(`p`,{children:[`The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of `,I(`code`,{children:`useEffect`}),`'s or a large number of useEffect's called, but this can also be JavaScript event handlers (`,I(`code`,{children:`'onclick'`}),`, `,I(`code`,{children:`'onchange'`}),`) that performed expensive computation.`]}),I(`p`,{children:`If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run.`}),I(`p`,{children:[`You should profile your app using the`,` `,I(`strong`,{children:`Chrome DevTools profiler`}),` to learn exactly which functions took the longest to execute.`]})]});case`high-render-count-high-js`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),e.data.renderCount===0?I(D,{children:[I(`p`,{children:`There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API`}),I(`p`,{children:[`You should try to reproduce the slowdown while profiling your website with the`,I(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]}):I(D,{children:[` `,I(`p`,{children:[`There were `,I(`strong`,{children:e.data.renderCount}),` renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like `,I(`code`,{children:`useEffects`}),`.`]}),I(`div`,{className:G([`flex flex-col`]),children:[I(`p`,{children:`You should try optimizing the renders of:`}),e.data.topByCount.map(e=>I(`div`,{children:[`- `,I(`strong`,{children:e.name}),` (rendered `,e.count,`x)`]},e.name))]}),`and then checking if the problem still exists.`,I(`p`,{children:[`You can also try profiling your app using the`,` `,I(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]})]});case`low-render-count-high-js`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),I(`p`,{children:[`There were only `,I(`strong`,{children:e.data.renderCount}),` renders detected, which means either you had very expensive hooks like`,` `,I(`code`,{children:`useEffect`}),`/`,I(`code`,{children:`useLayoutEffect`}),`, or there is other JavaScript running during this interaction that took up the majority of the time.`]}),I(`p`,{children:[`To understand precisely what caused the slowdown, use the`,` `,I(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]})]});case`high-render-count-update-dom-draw-frame`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),I(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),I(`p`,{children:[`During this interaction, there were`,` `,I(`strong`,{children:e.data.count}),` renders, which was`,` `,I(`strong`,{children:[e.data.percentageOfTotal.toFixed(0),`%`]}),` of the time spent processing`]}),I(`p`,{children:`The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame.`}),I(`p`,{children:`You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.`}),I(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),I(`p`,{children:e.data.copyButton}),I(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),I(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`update-dom-draw-frame`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),I(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),I(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),I(`p`,{children:e.data.copyButton}),I(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),I(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`other`:return I(`div`,{className:G([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:[`This is the time it took to run everything other than React renders. This can be hooks like `,I(`code`,{children:`useEffect`}),`, other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame.`]}),I(`p`,{children:[`To get a better picture of what happened, profile your app using the`,` `,I(`strong`,{children:`Chrome profiler`}),` when the performance problem arises.`]})]})}},Y=null,X=null,qv=null,Z=tn({kind:`idle`,current:null}),Jv=null,Yv=0,Xv=1.8,Zv=.05,Qv=1/60,$v=()=>{Jv&&cancelAnimationFrame(Jv),Jv=requestAnimationFrame(e=>{if(!Y||!X)return;let t=Yv?Math.min((e-Yv)/1e3,Zv):Qv;Yv=e;let n=Xv*t;X.clearRect(0,0,Y.width,Y.height);let r=`hsl(271, 76%, 53%)`,i=Z.value,{alpha:a,current:o}=v_(()=>{switch(i.kind){case`transition`:{let e=i.current?.alpha&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:e?e.alpha:0,current:e}}case`move-out`:return{alpha:i.current?.alpha??0,current:i.current};case`idle`:return{alpha:1,current:i.current}}});switch(o?.rects.forEach(e=>{X&&(X.shadowColor=r,X.shadowBlur=6,X.strokeStyle=r,X.lineWidth=2,X.globalAlpha=a,X.beginPath(),X.rect(e.left,e.top,e.width,e.height),X.stroke(),X.shadowBlur=0,X.beginPath(),X.rect(e.left,e.top,e.width,e.height),X.stroke())}),i.kind){case`move-out`:if(i.current.alpha===0){Z.value={kind:`idle`,current:null},Yv=0;return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-n),$v();return;case`transition`:if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-n),$v();return}if(i.transitionTo.alpha===1){Z.value={kind:`idle`,current:i.transitionTo},Yv=0;return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+n,1),$v();case`idle`:Yv=0;return}})},ey=null,ty=e=>{if(Y=document.createElement(`canvas`),X=Y.getContext(`2d`,{alpha:!0}),!X)return null;let t=window.devicePixelRatio||1,{innerWidth:n,innerHeight:r}=window;Y.style.width=`${n}px`,Y.style.height=`${r}px`,Y.width=n*t,Y.height=r*t,Y.style.position=`fixed`,Y.style.left=`0`,Y.style.top=`0`,Y.style.pointerEvents=`none`,Y.style.zIndex=`2147483600`,X.scale(t,t),e.appendChild(Y),ey&&window.removeEventListener(`resize`,ey);let i=()=>{if(!Y||!X)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:n}=window;Y.style.width=`${t}px`,Y.style.height=`${n}px`,Y.width=t*e,Y.height=n*e,X.scale(e,e),$v()};return ey=i,window.addEventListener(`resize`,i),Z.subscribe(()=>{requestAnimationFrame(()=>{$v()})}),rf},ny=()=>{let e=Z.value.current?Z.value.current:Z.value.kind===`transition`?Z.value.transitionTo:null;if(e){if(Z.value.kind===`transition`){Z.value={kind:`move-out`,current:Z.value.current?.alpha===0?Z.value.transitionTo:Z.value.current??Z.value.transitionTo};return}Z.value={kind:`move-out`,current:{alpha:0,...e}}}},ry=({selectedEvent:e})=>{let t=mv(e.timing),n=t-e.timing.renderTime,[r]=k(_b()),i=e.groupedFiberRenders.map(e=>({event:e,kind:`render`,totalTime:r?e.count:e.totalTime})),a=v_(()=>{switch(e.kind){case`dropped-frames`:return e.timing.renderTime/t<.1;case`interaction`:return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind===`interaction`&&!r&&i.push({kind:`other-javascript`,totalTime:e.timing.otherJSTime}),a&&!r&&(e.kind===`interaction`?i.push({kind:`other-not-javascript`,totalTime:mv(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:`other-frame-drop`,totalTime:n}));let o=j({lastCallAt:null,timer:null}),s=i.reduce((e,t)=>e+t.totalTime,0);return I(`div`,{className:G([`flex flex-col h-full w-full gap-y-1`]),children:[v_(()=>{if(r&&i.length===0)return I(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[I(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No data available`}),I(`p`,{className:`text-x w-full text-lefts`,children:`No data was collected during this period`})]});if(i.length===0)return I(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[I(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No renders collected`}),I(`p`,{className:`text-x w-full text-lefts`,children:`There were no renders during this period`})]})}),i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>I(ay,{bars:i,bar:e,debouncedMouseEnter:o,totalBarTime:s,isProduction:r},e.kind===`render`?e.event.id:e.kind))]})},iy=e=>e.current&&e.current.alpha>0?`fading-out`:`fading-in`,ay=({bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i,depth:a=0})=>{let{setNotificationState:o,setRoute:s}=_v(),[c,l]=k(!1),u=e.kind===`render`?e.event.parents.size===0:!0,d=i.filter(t=>t.kind===`render`&&e.kind===`render`?e.event.parents.has(t.event.name)&&t.event.name!==e.event.name:!1),f=e.kind===`render`?Array.from(e.event.parents).filter(e=>!i.some(t=>t.kind===`render`&&t.event.name===e)):[];return I(`div`,{className:`w-full`,children:[I(`div`,{className:G([`w-full flex items-center relative text-xs min-w-0`]),children:[I(`button`,{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),ny()},onMouseEnter:async()=>{let n=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!==`render`){let e=Z.value.current?Z.value.current:Z.value.kind===`transition`?Z.value.transitionTo:null;if(!e){Z.value={kind:`idle`,current:null};return}Z.value={kind:`move-out`,current:{alpha:0,...e}};return}let n=Z.value,r=v_(()=>{switch(n.kind){case`transition`:return n.transitionTo;case`idle`:case`move-out`:return n.current}}),i=[];if(n.kind===`transition`){let t=iy(n);v_(()=>{switch(t){case`fading-in`:Z.value={kind:`transition`,current:n.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case`fading-out`:Z.value={kind:`transition`,current:Z.value.current?{alpha:0,...Z.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})}else Z.value={kind:`transition`,transitionTo:{rects:i,alpha:0,name:e.event.name},current:r?{alpha:0,...r}:null};let a=e.event.elements.filter(e=>e instanceof Element);for await(let e of Vg(a))e.forEach(({boundingClientRect:e})=>{i.push(e)}),$v()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{n()},200);return}n()},onClick:()=>{e.kind===`render`?(o(t=>({...t,selectedFiber:e.event})),s({route:`render-explanation`,routeMessage:null})):s({route:`other-visualization`,routeMessage:{kind:`auto-open-overview-accordion`,name:e.kind}})},className:G([`h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative`]),children:[I(`div`,{style:{minWidth:`fit-content`,width:`${e.totalTime/n*100}%`},className:G([`flex items-center rounded-sm text-white text-xs h-[28px] shrink-0`,e.kind===`render`&&`bg-[#412162] group-hover:bg-[#5b2d89]`,e.kind===`other-frame-drop`&&`bg-[#44444a] group-hover:bg-[#6a6a6a]`,e.kind===`other-javascript`&&`bg-[#efd81a6b] group-hover:bg-[#efda1a2f]`,e.kind===`other-not-javascript`&&`bg-[#214379d4] group-hover:bg-[#21437982]`])}),I(`div`,{className:G([`absolute inset-0 flex items-center px-2`,`min-w-0`]),children:I(`div`,{className:`flex items-center gap-x-2 min-w-0 w-full`,children:[I(`span`,{className:G([`truncate`]),children:v_(()=>{switch(e.kind){case`other-frame-drop`:return`JavaScript, DOM updates, Draw Frame`;case`other-javascript`:return`JavaScript/React Hooks`;case`other-not-javascript`:return`Update DOM and Draw New Frame`;case`render`:return e.event.name}})}),e.kind===`render`&&hv(e.event)&&I(`div`,{style:{lineHeight:`10px`},className:G([`px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0`]),children:`Memoizable`})]})})]}),I(`button`,{onClick:()=>e.kind===`render`&&!u&&l(!c),className:G([`flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]`,!u&&`hover:bg-[#0f0f0f]`,e.kind===`render`&&!u?`cursor-pointer`:`cursor-default`]),children:[I(`div`,{className:`w-[20px] flex items-center justify-center`,children:e.kind===`render`&&!u&&I(yv,{className:G(`transition-transform`,c&&`rotate-90`),size:16})}),I(`div`,{style:{minWidth:u?`fit-content`:r?`30px`:`60px`},className:`flex items-center justify-end gap-x-1`,children:[e.kind===`render`&&I(`span`,{className:G([`text-[10px]`]),children:[`x`,e.event.count]}),(e.kind!==`render`||!r)&&I(`span`,{className:`text-[10px] text-[#7346a0] pr-1`,children:[e.totalTime<1?`<1`:e.totalTime.toFixed(0),`ms`]})]})]}),a===0&&I(`div`,{className:G([`absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16`,`pointer-events-none`]),children:`Click to learn more`})]}),c&&(d.length>0||f.length>0)&&I(`div`,{className:`pl-3 flex flex-col gap-y-1 mt-1`,children:[d.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,o)=>I(ay,{depth:a+1,bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i},o)),f.map(e=>I(`div`,{className:`w-full`,children:I(`div`,{className:`w-full flex items-center relative text-xs`,children:I(`div`,{className:`h-full w-full flex items-center relative`,children:[I(`div`,{className:`flex items-center rounded-sm text-white text-xs h-[28px] w-full`}),I(`div`,{className:`absolute inset-0 flex items-center px-2`,children:I(`span`,{className:`truncate whitespace-nowrap text-white/70 w-full`,children:e})})]})})},e))]})]})},oy=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:n}=_v(),[r,i]=k(!0),[a]=k(_b());Ot(()=>{let e=localStorage.getItem(`react-scan-tip-shown`),t=e===`true`?!0:e===`false`?!1:null;if(t===null){i(!0),localStorage.setItem(`react-scan-tip-is-shown`,`true`);return}t||i(!1)},[]);let o=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return I(`div`,{className:G([`w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm`]),children:[I(`div`,{className:G([`flex items-start gap-x-4 `]),children:[I(`button`,{onClick:()=>{n({route:`render-visualization`,routeMessage:null})},className:G([`text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]`]),children:[I(wv,{size:14}),` `,I(`span`,{children:`Overview`})]}),I(`div`,{className:G([`flex flex-col gap-y-1`]),children:[I(`div`,{className:G([`text-sm font-bold text-white overflow-x-hidden`]),children:I(`div`,{className:`flex items-center gap-x-2 truncate`,children:t.name})}),I(`div`,{className:G([`flex gap-x-2`]),children:[!a&&I(D,{children:I(`div`,{className:G([`text-xs text-gray-400`]),children:[`• Render time: `,t.totalTime.toFixed(0),`ms`]})}),I(`div`,{className:G([`text-xs text-gray-400 mb-4`]),children:[`• Renders: `,t.count,`x`]})]})]})]}),r&&!o&&I(`div`,{className:G([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative`]),children:[I(`button`,{onClick:()=>{i(!1),localStorage.setItem(`react-scan-tip-shown`,`false`)},className:G([`absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]`]),children:I(xv,{size:12})}),I(`div`,{className:G([`w-1 bg-[#d36cff]`])}),I(`div`,{className:G([`flex-1`]),children:[I(`div`,{className:G([`px-3 py-2 text-gray-100 text-xs font-semibold`]),children:`How to stop renders`}),I(`div`,{className:G([`px-3 pb-2 text-gray-400 text-[10px]`]),children:`Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already`})]})]}),o&&I(`div`,{className:G([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex`]),children:[I(`div`,{className:G([`w-1 bg-[#d36cff]`])}),I(`div`,{className:G([`flex-1`]),children:[I(`div`,{className:G([`px-3 py-2 text-gray-100 text-sm font-semibold`]),children:`No changes detected`}),I(`div`,{className:G([`px-3 pb-2 text-gray-400 text-xs`]),children:`This component would not have rendered if it was memoized`})]})]}),I(`div`,{className:G([`flex w-full`]),children:[I(`div`,{className:G([`flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3`]),children:[I(`div`,{className:G([`text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Props`}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:G([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[I(`span`,{className:G([`text-white `]),children:e.name}),I(`div`,{className:G([` text-[8px]  text-[#d36cff] pl-1 py-1 `]),children:[e.count,`/`,t.count,`x`]})]},e.name)):I(`div`,{className:G([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),I(`div`,{className:G([`flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3`]),children:[I(`div`,{className:G([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed State`}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:G([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[I(`span`,{className:G([`text-white `]),children:[`index `,e.index]}),I(`div`,{className:G([`rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]`]),children:[e.count,`/`,t.count,`x`]})]},e.index)):I(`div`,{className:G([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),I(`div`,{className:G([`flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3`]),children:[I(`div`,{className:G([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Context`}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:G([`flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto`]),children:[I(`span`,{className:G([`text-white `]),children:e.name}),I(`div`,{className:G([`rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap`]),children:[e.count,`/`,t.count,`x`]})]},e.name)):I(`div`,{className:G([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2`]),children:`No changes`})]})]})]})},sy=()=>{let{notificationState:e,setNotificationState:t}=_v(),[n,r]=k(`...`),i=j(null);if(A(()=>{let e=setInterval(()=>{r(e=>e===`...`?``:e+`.`)},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return I(`div`,{ref:i,className:G([`h-full w-full flex flex-col items-center justify-center relative py-2 px-4`]),children:[I(`div`,{className:G([`p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0`]),children:I(`button`,{onClick:()=>{q.value={view:`none`}},children:I(xv,{size:18,className:`text-[#6F6F78]`})})}),I(`div`,{className:G([`flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md`,` shadow-lg`]),children:I(`div`,{className:G([`flex flex-col items-start gap-y-4`]),children:[I(`div`,{className:G([`flex items-center`]),children:I(`span`,{className:G([`text-zinc-400 font-medium text-[17px]`]),children:[`Scanning for slowdowns`,n]})}),e.events.length!==0&&I(`p`,{className:G([`text-xs`]),children:[`Click on an item in the`,` `,I(`span`,{className:G([`text-purple-400`]),children:`History`}),` list to get started`]}),I(`p`,{className:G([`text-zinc-600 text-xs`]),children:`You don't need to keep this panel open for React Scan to record slowdowns`}),I(`p`,{className:G([`text-zinc-600 text-xs`]),children:`Enable audio alerts to hear a delightful ding every time a large slowdown is recorded`}),I(`button`,{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(e=>{var t;return e.audioNotificationsOptions.audioContext?.state!==`closed`&&((t=e.audioNotificationsOptions.audioContext)==null||t.close()),localStorage.setItem(`react-scan-notifications-audio`,`false`),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem(`react-scan-notifications-audio`,`true`);let n=new AudioContext;df(n),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:n}}))},className:G([`px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full`,` text-sm flex items-center gap-x-2 justify-center`]),children:e.audioNotificationsOptions.enabled?I(D,{children:I(`span`,{className:`flex items-center gap-x-1`,children:`Disable audio alerts`})}):I(D,{children:I(`span`,{className:`flex items-center gap-x-1`,children:`Enable audio alerts`})})})]})})]});switch(e.route){case`render-visualization`:return I(cy,{children:I(ry,{selectedEvent:e.selectedEvent})});case`render-explanation`:if(!e.selectedFiber)throw Error(`Invariant: must have selected fiber when viewing render explanation`);return I(cy,{children:I(oy,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case`other-visualization`:return I(cy,{children:I(`div`,{className:G([`flex w-full h-full flex-col overflow-y-auto`]),id:`overview-scroll-container`,children:I(Vv,{selectedEvent:e.selectedEvent})})});case`optimize`:return I(cy,{children:I(zv,{selectedEvent:e.selectedEvent})})}e.route},cy=({children:e})=>{let{notificationState:t}=_v();if(!t.selectedEvent)throw Error(`Invariant: d must have selected event when viewing render explanation`);return I(`div`,{className:G([`w-full h-full flex flex-col gap-y-2`]),children:[I(`div`,{className:G([`h-[50px] w-full`]),children:I(Av,{selectedEvent:t.selectedEvent})}),I(`div`,{className:G([`h-calc(100%-50px) flex flex-col overflow-y-auto px-3`]),children:e})]})},ly=({selectedEvent:e})=>{let t=gv(e);switch(e.kind){case`interaction`:return I(`div`,{className:G([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:I(`div`,{className:G([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[I(`div`,{className:G([`flex items-center gap-x-2 `]),children:[I(`span`,{className:G([`text-[#5a5a5a] mr-0.5`]),children:e.type===`click`?`Clicked `:`Typed in `}),I(`span`,{children:pv(e.componentPath)}),I(`div`,{className:G([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[mv(e.timing).toFixed(0),`ms processing time`]})]}),I(`div`,{className:G([`flex items-center gap-x-2  justify-end ml-auto`]),children:I(`div`,{className:G([`p-2 flex justify-center items-center border-[#27272A]`]),children:I(`button`,{onClick:()=>{q.value={view:`none`}},title:`Close`,children:I(xv,{size:18,className:`text-[#6F6F78]`})})})})]})});case`dropped-frames`:return I(`div`,{className:G([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:I(`div`,{className:G([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[I(`div`,{className:G([`flex items-center gap-x-2 `]),children:[`FPS Drop`,I(`div`,{className:G([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[`dropped to `,e.fps,` FPS`]})]}),I(`div`,{className:G([`flex items-center gap-x-2 w-2/4 justify-end ml-auto`]),children:I(`div`,{className:G([`p-2 flex justify-center items-center border-[#27272A]`]),children:I(`button`,{onClick:()=>{q.value={view:`none`}},children:I(xv,{size:18,className:`text-[#6F6F78]`})})})})]})})}},uy=({flashingItemsCount:e,totalEvents:t})=>{let[n,r]=k(!1),i=j(0),a=j(0);return A(()=>{if(i.current>=t)return;let e=Date.now()-a.current;if(e>=250){r(!1);let e=setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50);return()=>clearTimeout(e)}else{let n=250-e,o=setTimeout(()=>{r(!1),setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50)},n);return()=>clearTimeout(o)}},[e]),n},dy=({item:e,shouldFlash:t})=>{let[n,r]=k(!1),i=e.events.map(gv).reduce((e,t)=>{switch(t){case`high`:return`high`;case`needs-improvement`:return e===`high`?`high`:`needs-improvement`;case`low`:return e}},`low`),a=uy({flashingItemsCount:e.events.reduce((e,n)=>t(n.id)?e+1:e,0),totalEvents:e.events.length});return I(`div`,{className:G([`flex flex-col gap-y-0.5`]),children:[I(`button`,{onClick:()=>r(e=>!e),className:G([`pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,a&&!n&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:G([`w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5`]),children:[I(`span`,{className:G([`min-w-fit`]),children:I(yv,{className:G([`text-[#A1A1AA] transition-transform`,n?`rotate-90`:``]),size:14},`chevron-${e.timestamp}`)}),I(`span`,{className:G([`text-xs`]),children:e.kind===`collapsed-frame-drops`?`FPS Drops`:pv(e.events.at(0)?.componentPath??[])})]}),I(`div`,{className:G([`ml-auto min-w-fit flex justify-end items-center`]),children:I(`div`,{style:{lineHeight:`10px`},className:G([`w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[`x`,e.events.length]})})]}),n&&I(fy,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>I(hy,{event:e,shouldFlash:t(e.id)}))})]})},fy=({children:e})=>I(`div`,{className:`relative pl-6 flex flex-col gap-y-1`,children:[I(`div`,{className:`absolute left-3 top-0 bottom-0 w-px bg-[#27272A]`}),e]}),py=e=>{let t=j([]),[n,r]=k(new Set),i=j(!0);return A(()=>{if(i.current){i.current=!1,t.current=e;return}let n=new Set(e.map(e=>e.id)),a=new Set(t.current.map(e=>e.id)),o=new Set;n.forEach(e=>{a.has(e)||o.add(e)}),o.size>0&&(r(o),setTimeout(()=>{r(new Set)},2e3)),t.current=e},[e]),e=>n.has(e)},my=({shouldFlash:e})=>{let[t,n]=k(e);return A(()=>{if(e){n(!0);let e=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(e)}},[e]),t},hy=({event:e,shouldFlash:t})=>{let{notificationState:n,setNotificationState:r}=_v(),i=gv(e),a=my({shouldFlash:t});switch(e.kind){case`interaction`:return I(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:G([`pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:G([`w-4/5 flex items-center justify-start h-full gap-x-1.5`]),children:[I(`span`,{className:G([`min-w-fit text-xs`]),children:v_(()=>{switch(e.type){case`click`:return I(Tv,{size:14});case`keyboard`:return I(Ev,{size:14})}})}),I(`span`,{className:G([`text-xs pr-1 truncate`]),children:pv(e.componentPath)})]}),I(`div`,{className:G([` min-w-fit flex justify-end items-center ml-auto`]),children:I(`div`,{style:{lineHeight:`10px`},className:G([`gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]`,i===`low`&&`bg-green-500/50`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:I(`div`,{style:{lineHeight:`10px`},className:G([`text-[10px] text-white flex items-end`]),children:[mv(e.timing).toFixed(0),`ms`]})})})]});case`dropped-frames`:return I(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:G([`pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:G([`w-4/5 flex items-center justify-start h-full text-xs truncate`]),children:[I(Ov,{size:14,className:`mr-1.5`}),` FPS Drop`]}),I(`div`,{className:G([` min-w-fit flex justify-end items-center ml-auto`]),children:I(`div`,{style:{lineHeight:`10px`},className:G([`w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[e.fps,` FPS`]})})]})}},gy=e=>e.reduce((e,t)=>{let n=e.at(-1);if(!n)return[{kind:`single`,event:t,timestamp:t.timestamp}];switch(n.kind){case`collapsed-keyboard`:return t.kind===`interaction`&&t.type===`keyboard`&&t.componentPath.join(`-`)===n.events[0].componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`single`:return n.event.kind===`interaction`&&n.event.type===`keyboard`&&t.kind===`interaction`&&t.type===`keyboard`&&n.event.componentPath.join(`-`)===t.componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:n.event.kind===`dropped-frames`&&t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`collapsed-frame-drops`:return t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}]}},[]),_y=(e=150)=>{let{notificationState:t}=_v(),[n,r]=k(t.events);return A(()=>{setTimeout(()=>{r(t.events)},e)},[t.events]),[n,r]},vy=()=>{let{notificationState:e,setNotificationState:t}=_v(),n=py(e.events),[r,i]=_y(),a=gy(r).toSorted((e,t)=>t.timestamp-e.timestamp);return I(`div`,{className:G([`w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto`]),children:[I(`div`,{className:G([`text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between`]),children:[I(`span`,{children:`History`}),I(kv,{wrapperProps:{className:`h-full flex items-center justify-center ml-auto`},triggerContent:I(`button`,{className:G([`hover:bg-[#18181B] rounded-full p-2`]),title:`Clear all events`,onClick:()=>{nv.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:e.route===`other-visualization`?`other-visualization`:`render-visualization`})),i([])},children:I(Dv,{className:G([``]),size:16})}),children:I(`div`,{className:G([`w-full flex justify-center`]),children:`Clear all events`})})]}),I(`div`,{className:G([`flex flex-col px-1 gap-y-1`]),children:[a.length===0&&I(`div`,{className:G([`flex items-center justify-center text-zinc-500 text-sm py-4`]),children:`No Events`}),a.map(e=>v_(()=>{switch(e.kind){case`collapsed-keyboard`:return I(dy,{shouldFlash:n,item:e});case`single`:return I(hy,{event:e.event,shouldFlash:n(e.event.id)},e.event.id);case`collapsed-frame-drops`:return I(dy,{shouldFlash:n,item:e})}}))]})]})},yy=e=>Object.values(e).map(e=>({id:uf(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberContext.changesCounts.get(t.name)??0})),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberProps.changesCounts.get(t.name)??0})),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>({index:t.name,count:e.changes.fiberState.changesCounts.get(Number(t.name))??0}))}})),by=e=>{A(()=>{let t=setInterval(()=>{e.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||e.elements.length===0){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),e.elements.length===0&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(t)}},[e])},xy=()=>{let e=rv(),t=[];return by(t),e.state.events.forEach(e=>{let n=yy(e.kind===`interaction`?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders),r=n.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case`interaction`:{let{commitEnd:i,jsEndDetail:a,interactionStartDetail:o,rafStart:s}=e.data.meta.detailedTiming;a-o-r<0&&__(`js time must be longer than render time`);let c=Math.max(0,a-o-r),l=Math.max(e.data.meta.latency-(i-o),0);t.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:n,id:e.id,kind:`interaction`,memory:null,timestamp:e.data.startAt,type:e.data.meta.detailedTiming.interactionType===`keyboard`?`keyboard`:`click`,timing:{renderTime:r,kind:`interaction`,otherJSTime:c,framePreparation:s-a,frameConstruction:i-s,frameDraw:l}});return}case`long-render`:t.push({kind:`dropped-frames`,id:e.id,memory:null,timing:{kind:`dropped-frames`,renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:n,timestamp:e.data.startAt,fps:e.data.meta.fps});return}}),t},Sy=1e3,Cy=()=>{let{notificationState:e,setNotificationState:t}=_v(),n=j(null),r=j(null),i=j(0),[a]=_y(),o=a.filter(e=>gv(e)===`high`).length;return A(()=>{let e=localStorage.getItem(`react-scan-notifications-audio`);if(e!==`false`&&e!==`true`){localStorage.setItem(`react-scan-notifications-audio`,`false`);return}if(e!==`false`){t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),A(()=>{let{audioNotificationsOptions:t}=e;if(!t.enabled||o===0||n.current&&n.current>=o)return;r.current&&clearTimeout(r.current);let a=Date.now()-i.current,s=Math.max(0,Sy-a);r.current=setTimeout(()=>{df(t.audioContext),n.current=o,i.current=Date.now(),r.current=null},s)},[o]),A(()=>{o===0&&(n.current=null)},[o]),A(()=>()=>{r.current&&clearTimeout(r.current)},[]),null},wy=qn((e,t)=>{let n=xy(),[r,i]=k({detailsExpanded:!1,events:n,filterBy:`latest`,moreInfoExpanded:!1,route:`render-visualization`,selectedEvent:n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return r.events=n,I(vv.Provider,{value:{notificationState:r,setNotificationState:i,setRoute:({route:e,routeMessage:t})=>{i(n=>{let r={...n,route:e,routeMessage:t};switch(e){case`render-visualization`:return ny(),{...r,selectedFiber:null};case`optimize`:return ny(),{...r,selectedFiber:null};case`other-visualization`:return ny(),{...r,selectedFiber:null};case`render-explanation`:return ny(),r}})}},children:[I(Cy,{}),I(Ty,{ref:t})]})}),Ty=qn((e,t)=>{let{notificationState:n}=_v();return I(`div`,{ref:t,className:G([`h-full w-full flex flex-col`]),children:[n.selectedEvent&&I(`div`,{className:G([`w-full h-[48px] flex flex-col`,n.moreInfoExpanded&&`h-[235px]`,n.moreInfoExpanded&&n.selectedEvent.kind===`dropped-frames`&&`h-[150px]`]),children:[I(ly,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&I(Ey,{})]}),I(`div`,{className:G([`flex `,n.selectedEvent?`h-[calc(100%-48px)]`:`h-full`,n.moreInfoExpanded&&`h-[calc(100%-200px)]`,n.moreInfoExpanded&&n.selectedEvent?.kind===`dropped-frames`&&`h-[calc(100%-150px)]`]),children:[I(`div`,{className:G([`h-full min-w-[200px]`]),children:I(vy,{})}),I(`div`,{className:G([`w-[calc(100%-200px)] h-full overflow-y-auto`]),children:I(sy,{})})]})]})}),Ey=()=>{let{notificationState:e}=_v();if(!e.selectedEvent)throw Error(`Invariant must have selected event for more info`);let t=e.selectedEvent;return I(`div`,{className:G([`px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]`,t.kind===`dropped-frames`&&`h-[calc(100%-25px)]`]),children:I(`div`,{className:G([`flex flex-col gap-y-4 h-full`]),children:v_(()=>{switch(t.kind){case`interaction`:return I(D,{children:[I(`div`,{className:G([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:t.type===`click`?`Clicked component location`:`Typed in component location`}),I(`div`,{className:`font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto`,children:t.componentPath.toReversed().map((e,n)=>I(D,{children:[I(`span`,{style:{lineHeight:`14px`},className:`text-[10px] whitespace-nowrap`,children:e},e),n<t.componentPath.length-1&&I(`span`,{className:`text-[#6F6F78] mx-0.5`,children:`‹`})]}))})]}),I(`div`,{className:G([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[mv(t.timing).toFixed(0),`ms`]})]}),I(`div`,{className:G([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case`dropped-frames`:return I(D,{children:[I(`div`,{className:G([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[mv(t.timing).toFixed(0),`ms`]})]}),I(`div`,{className:G([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},Dy=Wd(()=>{let e=xy(),[t,n]=k(e);A(()=>{let t=setTimeout(()=>{n(e)},600);return()=>{clearTimeout(t)}},[e]);let r=Q.inspectState,i=r.value.kind===`inspecting`,a=r.value.kind===`focused`,[o,s]=k([]),c=M(()=>{switch(Q.inspectState.value.kind){case`inspecting`:q.value={view:`none`},Q.inspectState.value={kind:`inspect-off`};return;case`focused`:q.value={view:`inspector`},Q.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`inspect-off`:q.value={view:`none`},Q.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`uninitialized`:return}},[]),l=M(e=>{if(e.preventDefault(),e.stopPropagation(),!$.instrumentation)return;let t=!$.instrumentation.isPaused.value;$.instrumentation.isPaused.value=t,Wp(`react-scan-options`,{...Up(`react-scan-options`),enabled:!t})},[]);Mn(()=>{Q.inspectState.value.kind===`uninitialized`&&(Q.inspectState.value={kind:`inspect-off`})});let u=null,d=`#999`;return i?(u=I(z,{name:`icon-inspect`}),d=`#8e61e3`):a?(u=I(z,{name:`icon-focus`}),d=`#8e61e3`):(u=I(z,{name:`icon-inspect`}),d=`#999`),Ot(()=>{q.value.view===`notifications`&&s([...new Set(e.map(e=>e.id)).values()])},[e.length,q.value.view]),I(`div`,{className:`flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden`,children:[I(`div`,{className:`h-full flex items-center min-w-fit`,children:I(`button`,{type:`button`,id:`react-scan-inspect-element`,title:`Inspect element`,onClick:c,className:`button flex items-center justify-center h-full w-full pl-3 pr-2.5`,style:{color:d},children:u})}),I(`div`,{className:`h-full flex items-center justify-center`,children:I(`button`,{type:`button`,id:`react-scan-notifications`,title:`Notifications`,onClick:()=>{switch(Q.inspectState.value.kind!==`inspect-off`&&(Q.inspectState.value={kind:`inspect-off`}),q.value.view){case`inspector`:Q.inspectState.value={kind:`inspect-off`},s([...new Set(e.map(e=>e.id)).values()]),q.value={view:`notifications`};return;case`notifications`:q.value={view:`none`};return;case`none`:s([...new Set(e.map(e=>e.id)).values()]),q.value={view:`notifications`};return}},className:`button flex items-center justify-center h-full pl-2.5 pr-2.5`,style:{color:d},children:I(bv,{events:t.filter(e=>!o.includes(e.id)).map(e=>gv(e)===`high`),size:16,className:G([`text-[#999]`,q.value.view===`notifications`&&`text-[#8E61E3]`])})})}),I(p_,{checked:!$.instrumentation?.isPaused.value,onChange:l,className:`place-self-center`,title:`Outline Re-renders`}),$.options.value.showFPS&&I(h_,{})]})}),Oy=sn(()=>Q.inspectState.value.kind===`inspecting`),ky=sn(()=>G(`relative`,`flex-1`,`flex flex-col`,`rounded-t-lg`,`overflow-hidden`,`opacity-100`,`transition-[opacity]`,Oy.value&&`opacity-0 duration-0 delay-0`)),Ay=sn(()=>q.value.view===`inspector`),jy=sn(()=>q.value.view===`notifications`),My=()=>I(`div`,{className:G(`flex flex-1 flex-col`,`overflow-hidden z-10`,`rounded-lg`,`bg-black`,`opacity-100`,`transition-[border-radius]`,`peer-hover/left:rounded-l-none`,`peer-hover/right:rounded-r-none`,`peer-hover/top:rounded-t-none`,`peer-hover/bottom:rounded-b-none`),children:[I(`div`,{className:ky,children:[I(f_,{}),I(`div`,{className:G(`relative`,`flex-1 flex`,`text-white`,`bg-[#0A0A0A]`,`transition-opacity delay-150`,`overflow-hidden`,`border-b border-[#222]`),children:[I(Ny,{isOpen:Ay,children:I(ih,{})}),I(Ny,{isOpen:jy,children:I(wy,{})})]})]}),I(Dy,{})]}),Ny=({isOpen:e,children:t})=>I(`div`,{className:G(`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,e.value&&`opacity-100 delay-150 pointer-events-auto`),children:I(`div`,{className:`absolute inset-0 flex`,children:t})}),Py=(e,t,n)=>e+(t-e)*n,Fy={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Iy=cf&&window.devicePixelRatio||1,Ly=()=>{let e=j(null),t=j(null),n=j(null),r=j(null),i=j(null),a=j(0),o=j(),s=j(new Map),c=j(!1),l=j(0),u=(e,t,n,r)=>{e.save(),e.strokeStyle=`white`,e.fillStyle=`white`,e.lineWidth=1.5;let i=r*.6,a=r*.5,o=t+(r-i)/2,s=n;e.beginPath(),e.arc(o+i/2,s+a/2,i/2,Math.PI,0,!1),e.stroke();let c=r*.8,l=r*.5,u=t+(r-c)/2,d=n+a/2;e.fillRect(u,d,c,l),e.restore()},d=(e,t,n,i)=>{if(!i)return;let a=(i?.type&&T(i.type))??`Unknown`;e.save(),e.font=`12px system-ui, -apple-system, sans-serif`;let o=e.measureText(a).width,s=n===`locked`?14:0,c=n===`locked`?6:0,l=o+16+s+c,d=t.left,f=t.top-24-4;if(e.fillStyle=`rgb(37, 37, 38, .75)`,e.beginPath(),e.roundRect(d,f,l,24,3),e.fill(),n===`locked`){let t=d+8,n=f+(24-s)/2+2;u(e,t,n,s),r.current={x:t,y:n,width:s,height:s}}else r.current=null;e.fillStyle=`white`,e.textBaseline=`middle`;let p=d+8+(n===`locked`?s+c:0);e.fillText(a,p,f+24/2),e.restore()},f=(e,t,r,i)=>{if(!n.current)return;let a=n.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle=`rgba(142, 97, 227, 0.5)`,t.fillStyle=`rgba(173, 97, 230, 0.10)`,r===`locked`?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(a.left,a.top,a.width,a.height),t.strokeRect(a.left,a.top,a.width,a.height),d(t,a,r,i)},p=(e,t,r,i,s,c)=>{let u=$.options.value.animationSpeed,d=Fy.speeds[u]??Fy.speeds.off,p=o=>{if(o-l.current<Fy.frameInterval){a.current=requestAnimationFrame(p);return}if(l.current=o,!n.current){cancelAnimationFrame(a.current);return}n.current={left:Py(n.current.left,r.left,d),top:Py(n.current.top,r.top,d),width:Py(n.current.width,r.width,d),height:Py(n.current.height,r.height,d)},f(e,t,i,s),Math.abs(n.current.left-r.left)>.1||Math.abs(n.current.top-r.top)>.1||Math.abs(n.current.width-r.width)>.1||Math.abs(n.current.height-r.height)>.1?a.current=requestAnimationFrame(p):(n.current=r,f(e,t,i,s),cancelAnimationFrame(a.current),t.restore(),c?.())};cancelAnimationFrame(a.current),clearTimeout(o.current),a.current=requestAnimationFrame(p),o.current=setTimeout(()=>{cancelAnimationFrame(a.current),n.current=r,f(e,t,i,s),t.restore(),c?.()},1e3)},m=(e,t,r,i,a)=>{if(t.save(),!n.current){n.current=r,f(e,t,i,a),t.restore();return}p(e,t,r,i,a)},h=async(e,t,n,r)=>{if(!e||!t||!n)return;let{parentCompositeFiber:i}=dh(e),a=await uh(e);!i||!a||m(t,n,a,r,i)},g=()=>{for(let e of s.current.values())e?.()},_=e=>{let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height),n.current=null,r.current=null,i.current=null,e.classList.remove(`fade-in`),c.current=!1},v=t=>{if(!e.current||c.current)return;let n=r=>{!e.current||r.propertyName!==`opacity`||!c.current||(e.current.removeEventListener(`transitionend`,n),_(e.current),t?.())},r=s.current.get(`fade-out`);r&&(r(),s.current.delete(`fade-out`)),e.current.addEventListener(`transitionend`,n),s.current.set(`fade-out`,()=>{var t;(t=e.current)==null||t.removeEventListener(`transitionend`,n)}),c.current=!0,e.current.classList.remove(`fade-in`),requestAnimationFrame(()=>{var t;(t=e.current)==null||t.classList.add(`fade-out`)})},y=()=>{e.current&&(c.current=!1,e.current.classList.remove(`fade-out`),requestAnimationFrame(()=>{var t;(t=e.current)==null||t.classList.add(`fade-in`)}))},b=e=>{e!==i.current&&(i.current=e,mh.has(e.tagName)?v():y(),Q.inspectState.value={kind:`inspecting`,hoveredDomElement:e})},ee=()=>{!n.current||!e.current||c.current||v()},te=Hp(n=>{if(Q.inspectState.peek().kind!==`inspecting`||!t.current)return;t.current.style.pointerEvents=`none`;let r=document.elementFromPoint(n?.clientX??0,n?.clientY??0);if(t.current.style.removeProperty(`pointer-events`),clearTimeout(o.current),r&&r!==e.current){let{parentCompositeFiber:e}=dh(r);if(e){let t=hh(e);if(t){b(t);return}}}ee()},32),ne=(e,t)=>{let n=r.current;if(!n)return!1;let i=t.getBoundingClientRect(),a=t.width/i.width,o=t.height/i.height,s=(e.clientX-i.left)*a,c=(e.clientY-i.top)*o,l=s/Iy,u=c/Iy;return l>=n.x&&l<=n.x+n.width&&u>=n.y&&u<=n.y+n.height},x=e=>{e.kind===`focused`&&(Q.inspectState.value={kind:`inspecting`,hoveredDomElement:e.focusedDomElement})},S=e=>{let t=[`react-scan-inspect-element`,`react-scan-power`];if(e.target instanceof HTMLElement&&t.includes(e.target.id))return;let n=i.current?.tagName;if(n&&mh.has(n))return;e.preventDefault(),e.stopPropagation();let r=i.current??document.elementFromPoint(e.clientX,e.clientY);if(!r)return;let a=e.composedPath().at(0);if(a instanceof HTMLElement&&t.includes(a.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,a.dispatchEvent(t);return}let{parentCompositeFiber:o}=dh(r);if(!o)return;let s=hh(o);if(!s){i.current=null,Q.inspectState.value={kind:`inspect-off`};return}Q.inspectState.value={kind:`focused`,focusedDomElement:s,fiber:o}},C=n=>{if(n.__reactScanSyntheticEvent)return;let r=Q.inspectState.peek(),i=e.current;if(!(!i||!t.current)){if(ne(n,i)){n.preventDefault(),n.stopPropagation(),x(r);return}r.kind===`inspecting`&&S(n)}},re=t=>{if(t.key!==`Escape`)return;let r=Q.inspectState.peek();if(e.current&&document.activeElement?.id!==`react-scan-root`&&(q.value={view:`none`},r.kind===`focused`||r.kind===`inspecting`))switch(t.preventDefault(),t.stopPropagation(),r.kind){case`focused`:y(),n.current=null,i.current=r.focusedDomElement,Q.inspectState.value={kind:`inspecting`,hoveredDomElement:r.focusedDomElement};break;case`inspecting`:v(()=>{Qp.value=!1,Q.inspectState.value={kind:`inspect-off`}});break}},ie=(e,r,o)=>{var c;(c=s.current.get(e.kind))==null||c(),t.current&&e.kind!==`inspecting`&&(t.current.style.pointerEvents=`none`),a.current&&cancelAnimationFrame(a.current);let l;switch(e.kind){case`inspect-off`:v();return;case`inspecting`:h(e.hoveredDomElement,r,o,`inspecting`);break;case`focused`:if(!e.focusedDomElement)return;i.current!==e.focusedDomElement&&(i.current=e.focusedDomElement),q.value={view:`inspector`},h(e.focusedDomElement,r,o,`locked`),l=Q.lastReportTime.subscribe(()=>{if(a.current&&n.current){let{parentCompositeFiber:t}=dh(e.focusedDomElement);t&&h(e.focusedDomElement,r,o,`locked`)}}),l&&s.current.set(e.kind,l);break}},ae=(e,t)=>{let n=e.getBoundingClientRect();e.width=n.width*Iy,e.height=n.height*Iy,t.scale(Iy,Iy),t.save()},oe=()=>{let t=Q.inspectState.peek(),r=e.current;if(!r)return;let i=r?.getContext(`2d`);i&&(cancelAnimationFrame(a.current),clearTimeout(o.current),ae(r,i),n.current=null,t.kind===`focused`&&t.focusedDomElement?h(t.focusedDomElement,r,i,`locked`):t.kind===`inspecting`&&t.hoveredDomElement&&h(t.hoveredDomElement,r,i,`inspecting`))},se=t=>{let n=Q.inspectState.peek(),r=e.current;r&&(n.kind===`inspecting`||ne(t,r))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return A(()=>{let t=e.current;if(!t)return;let n=t?.getContext(`2d`);if(!n)return;ae(t,n);let r=Q.inspectState.subscribe(e=>{ie(e,t,n)});return window.addEventListener(`scroll`,oe,{passive:!0}),window.addEventListener(`resize`,oe,{passive:!0}),document.addEventListener(`pointermove`,te,{passive:!0,capture:!0}),document.addEventListener(`pointerdown`,se,{capture:!0}),document.addEventListener(`click`,C,{capture:!0}),document.addEventListener(`keydown`,re,{capture:!0}),()=>{g(),r(),window.removeEventListener(`scroll`,oe),window.removeEventListener(`resize`,oe),document.removeEventListener(`pointermove`,te,{capture:!0}),document.removeEventListener(`click`,C,{capture:!0}),document.removeEventListener(`pointerdown`,se,{capture:!0}),document.removeEventListener(`keydown`,re,{capture:!0}),a.current&&cancelAnimationFrame(a.current),clearTimeout(o.current)}},[]),I(D,{children:[I(`div`,{ref:t,className:G(`fixed top-0 left-0 w-screen h-screen`,`z-[214748365]`),style:{pointerEvents:`none`}}),I(`canvas`,{ref:e,dir:`ltr`,className:G(`react-scan-inspector-overlay`,`fixed top-0 left-0 w-screen h-screen`,`pointer-events-none`,`z-[214748367]`)})]})},Ry=class{constructor(e,t,n){sf(this,`width`,e),sf(this,`height`,t),sf(this,`safeArea`,n),sf(this,`maxWidth`),sf(this,`maxHeight`),this.maxWidth=e-n.left-n.right,this.maxHeight=t-n.top-n.bottom}rightEdge(e){return this.width-e-this.safeArea.right}bottomEdge(e){return this.height-e-this.safeArea.bottom}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},By=(e,t)=>e.top===t.top&&e.right===t.right&&e.bottom===t.bottom&&e.left===t.left,Vy=()=>{let e=window.innerWidth,t=window.innerHeight,n=Zp();return zy&&zy.width===e&&zy.height===t&&By(zy.safeArea,n)||(zy=new Ry(e,t,n)),zy},Hy=(e,t,n,r,i)=>{if(n){if(e===`top-left`)return`bottom-right`;if(e===`top-right`)return`bottom-left`;if(e===`bottom-left`)return`top-right`;if(e===`bottom-right`)return`top-left`;let[n,r]=t.split(`-`);if(e===`left`)return`${n}-right`;if(e===`right`)return`${n}-left`;if(e===`top`)return`bottom-${r}`;if(e===`bottom`)return`top-${r}`}if(r){if(e===`left`)return`${t.split(`-`)[0]}-right`;if(e===`right`)return`${t.split(`-`)[0]}-left`}if(i){if(e===`top`)return`bottom-${t.split(`-`)[1]}`;if(e===`bottom`)return`top-${t.split(`-`)[1]}`}return t},Uy=(e,t,n)=>{let r=getComputedStyle(document.body).direction===`rtl`,i=window.innerWidth,a=window.innerHeight,o=Zp(),s=t===B.width,c=s?t:Math.min(t,i-o.left-o.right),l=s?n:Math.min(n,a-o.top-o.bottom),u,d,f=o.left,p=i-c-o.right,m=o.top,h=a-l-o.bottom,g=-o.right,_=-(i-c-o.left);switch(e){case`top-right`:u=r?g:p,d=m;break;case`bottom-right`:u=r?g:p,d=h;break;case`bottom-left`:u=r?_:f,d=h;break;case`top-left`:u=r?_:f,d=m;break;default:u=f,d=m;break}return s&&(u=r?Math.min(g,Math.max(u,_)):Math.max(f,Math.min(u,p)),d=Math.max(m,Math.min(d,h))),{x:u,y:d}},Wy=(e,t)=>{let[n,r]=t.split(`-`);return e!==n&&e!==r},Gy=(e,t,n,r)=>n&&r?!0:!n&&!r?Wy(e,t):n?e!==t.split(`-`)[0]:r?e!==t.split(`-`)[1]:!1,Ky=(e,t,n)=>{let r=n?B.width:B.initialHeight,i=n?Vy().maxWidth:Vy().maxHeight,a=e+t;return Math.min(Math.max(r,a),i)},qy=(e,t,n,r,i)=>{let a=getComputedStyle(document.body).direction===`rtl`,o=Zp(),s=window.innerWidth-o.left-o.right,c=window.innerHeight-o.top-o.bottom,l=t.width,u=t.height,d=n.x,f=n.y;if(a&&e.includes(`right`)){let e=-n.x+t.width-o.right,i=Math.min(t.width+r,e);l=Math.min(s,Math.max(B.width,i)),d=n.x+(l-t.width)}if(a&&e.includes(`left`)){let e=window.innerWidth-n.x-o.left,i=Math.min(t.width-r,e);l=Math.min(s,Math.max(B.width,i))}if(!a&&e.includes(`right`)){let e=window.innerWidth-n.x-o.right,i=Math.min(t.width+r,e);l=Math.min(s,Math.max(B.width,i))}if(!a&&e.includes(`left`)){let e=n.x+t.width-o.left,i=Math.min(t.width-r,e);l=Math.min(s,Math.max(B.width,i)),d=n.x-(l-t.width)}if(e.includes(`bottom`)){let e=window.innerHeight-n.y-o.bottom,r=Math.min(t.height+i,e);u=Math.min(c,Math.max(B.initialHeight,r))}if(e.includes(`top`)){let e=n.y+t.height-o.top,r=Math.min(t.height-i,e);u=Math.min(c,Math.max(B.initialHeight,r)),f=n.y-(u-t.height)}let p=o.left,m=window.innerWidth-o.right-l,h=o.top,g=window.innerHeight-o.bottom-u,_=-o.right,v=-(window.innerWidth-l-o.left);return d=a?Math.min(_,Math.max(d,v)):Math.max(p,Math.min(d,m)),f=Math.max(h,Math.min(f,g)),{newSize:{width:l,height:u},newPosition:{x:d,y:f}}},Jy=e=>{let t=Vy(),n={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},r=`top-left`;for(let e in n)n[e]<n[r]&&(r=e);return r},Yy=(e,t,n,r,i=100)=>{let a=n===void 0?0:e-n,o=r===void 0?0:t-r,s=window.innerWidth/2,c=window.innerHeight/2,l=a>i,u=a<-i,d=o>i,f=o<-i;if(l||u){let e=t>c;return l?e?`bottom-right`:`top-right`:e?`bottom-left`:`top-left`}if(d||f){let t=e>s;return d?t?`bottom-right`:`bottom-left`:t?`top-right`:`top-left`}return e>s?t>c?`bottom-right`:`top-right`:t>c?`bottom-left`:`top-left`},Xy=({position:e})=>{let t=j(null),n=j(null),r=j(null),i=j(null);return A(()=>{let a=t.current;if(!a)return;let o=()=>{a.classList.remove(`pointer-events-none`);let t=Q.inspectState.value.kind===`focused`,n=q.value.view!==`none`;(t||n)&&Gy(e,K.value.corner,K.value.dimensions.isFullWidth,K.value.dimensions.isFullHeight)?a.classList.remove(`hidden`,`pointer-events-none`,`opacity-0`):a.classList.add(`hidden`,`pointer-events-none`,`opacity-0`)},s=K.subscribe(e=>{n.current!==null&&r.current!==null&&i.current!==null&&e.dimensions.width===n.current&&e.dimensions.height===r.current&&e.corner===i.current||(o(),n.current=e.dimensions.width,r.current=e.dimensions.height,i.current=e.corner)}),c=Q.inspectState.subscribe(()=>{o()});return()=>{s(),c(),n.current=null,r.current=null,i.current=null}},[]),I(`div`,{ref:t,onPointerDown:M(t=>{t.preventDefault(),t.stopPropagation();let n=$p.value;if(!n)return;let r=n.style,{dimensions:i}=K.value,a=t.clientX,o=t.clientY,s=i.width,c=i.height,l=i.position;K.value={...K.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:s,height:c,position:l}};let u=null,d=t=>{u||=(r.transition=`none`,requestAnimationFrame(()=>{let{newSize:n,newPosition:i}=qy(e,{width:s,height:c},l,t.clientX-a,t.clientY-o);r.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,r.width=`${n.width}px`,r.height=`${n.height}px`;let d=Math.floor(n.width-mf/2),f=K.value.componentsTree.width,p=Math.min(d,Math.max(mf,f));K.value={...K.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.width,height:n.height,position:i},componentsTree:{...K.value.componentsTree,width:p}},u=null}))},f=()=>{u&&=(cancelAnimationFrame(u),null),document.removeEventListener(`pointermove`,d),document.removeEventListener(`pointerup`,f);let{dimensions:e,corner:t}=K.value,i=Vy(),a=i.isFullWidth(e.width),o=i.isFullHeight(e.height),s=a&&o,c=t;(s||a||o)&&(c=Jy(e.position));let l=Uy(c,e.width,e.height),p=()=>{n.removeEventListener(`transitionend`,p)};n.addEventListener(`transitionend`,p),r.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,K.value={...K.value,corner:c,dimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l},lastDimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l}},Wp(hf,{corner:c,dimensions:K.value.dimensions,lastDimensions:K.value.lastDimensions,componentsTree:K.value.componentsTree})};document.addEventListener(`pointermove`,d,{passive:!0}),document.addEventListener(`pointerup`,f)},[]),onDblClick:M(t=>{t.preventDefault(),t.stopPropagation();let n=$p.value;if(!n)return;let r=n.style,{dimensions:i,corner:a}=K.value,o=Vy(),s=o.isFullWidth(i.width),c=o.isFullHeight(i.height),l=s&&c,u=(s||c)&&!l,d=i.width,f=i.height,p=Hy(e,a,l,s,c);e===`left`||e===`right`?(d=s?i.width:o.maxWidth,u&&(d=s?B.width:o.maxWidth)):(f=c?i.height:o.maxHeight,u&&(f=c?B.initialHeight:o.maxHeight)),l&&(e===`left`||e===`right`?d=B.width:f=B.initialHeight);let m=Uy(p,d,f),h={isFullWidth:o.isFullWidth(d),isFullHeight:o.isFullHeight(f),width:d,height:f,position:m},g=Math.floor(d-B.width/2),_=K.value.componentsTree.width,v=Math.floor(d*.3),y=s?mf:(e===`left`||e===`right`)&&!s?Math.min(g,Math.max(mf,v)):Math.min(g,Math.max(mf,_));requestAnimationFrame(()=>{K.value={corner:p,dimensions:h,lastDimensions:i,componentsTree:{...K.value.componentsTree,width:y}},r.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,r.width=`${d}px`,r.height=`${f}px`,r.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),Wp(hf,{corner:p,dimensions:h,lastDimensions:i,componentsTree:{...K.value.componentsTree,width:y}})},[]),className:G(`absolute z-50`,`flex items-center justify-center`,`group`,`transition-colors select-none`,`peer`,{"resize-left peer/left":e===`left`,"resize-right peer/right z-10":e===`right`,"resize-top peer/top":e===`top`,"resize-bottom peer/bottom":e===`bottom`}),children:I(`span`,{className:`resize-line-wrapper`,children:I(`span`,{className:`resize-line`,children:I(z,{name:`icon-ellipsis`,size:18,className:G(`text-neutral-400`,(e===`left`||e===`right`)&&`rotate-90`)})})})})},Zy={horizontal:{width:20,height:48},vertical:{width:48,height:20}},Qy=()=>{let e=j(null),t=j(!1),n=j(0),r=j(0),i=j(!1),a=M((a=!0)=>{if(!e.current)return;let{corner:o}=K.value,s,c;if(im.value){let e=Zy[im.value.orientation||`horizontal`];s=e.width,c=e.height}else if(t.current){let e=K.value.lastDimensions;s=Ky(e.width,0,!0),c=Ky(e.height,0,!1),i.current&&=!1}else s=n.current,c=r.current;let l=Uy(o,s,c);if(im.value){let{corner:e,orientation:t=`horizontal`}=im.value,n=Zy[t],r=Zp();switch(e){case`top-left`:l=t===`horizontal`?{x:-1,y:r.top}:{x:r.left,y:-1};break;case`bottom-left`:l=t===`horizontal`?{x:-1,y:window.innerHeight-n.height-r.bottom}:{x:r.left,y:window.innerHeight-n.height+1};break;case`top-right`:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:r.top}:{x:window.innerWidth-n.width-r.right,y:-1};break;default:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:window.innerHeight-n.height-r.bottom}:{x:window.innerWidth-n.width-r.right,y:window.innerHeight-n.height+1};break}}let u=s<B.width||c<B.initialHeight,d=a&&!u,f=e.current,p=f.style,m=null,h=()=>{nm(),f.removeEventListener(`transitionend`,h),m&&=(cancelAnimationFrame(m),null)};f.addEventListener(`transitionend`,h),p.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,m=requestAnimationFrame(()=>{p.width=`${s}px`,p.height=`${c}px`,p.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,m=null});let g=Zp(),_={isFullWidth:s>=window.innerWidth-g.left-g.right,isFullHeight:c>=window.innerHeight-g.top-g.bottom,width:s,height:c,position:l};K.value={corner:o,dimensions:_,lastDimensions:t?K.value.lastDimensions:s>n.current?_:K.value.lastDimensions,componentsTree:K.value.componentsTree},d&&Wp(hf,{corner:K.value.corner,dimensions:K.value.dimensions,lastDimensions:K.value.lastDimensions,componentsTree:K.value.componentsTree}),nm()},[]),o=M(t=>{if(t.target.closest(vf)||(t.preventDefault(),!e.current))return;let n=e.current,r=n.style,{dimensions:i}=K.value,o=t.clientX,s=t.clientY,c=i.position.x,l=i.position.y,u=c,d=l,f=null,p=!1,m=o,h=s,g=e=>{f||=(p=!0,m=e.clientX,h=e.clientY,requestAnimationFrame(()=>{let e=m-o,t=h-s;u=Number(c)+e,d=Number(l)+t,r.transition=`none`,r.transform=`translate3d(${u}px, ${d}px, 0)`;let n=u+i.width,p=d+i.height,v=Math.max(0,-u),y=Math.max(0,n-window.innerWidth),b=Math.max(0,-d),ee=Math.max(0,p-window.innerHeight),te=Math.min(i.width,v+y),ne=Math.min(i.height,b+ee),x=te*i.height+ne*i.width-te*ne>i.width*i.height*.35;if(!x&&$.options.value.showFPS){let e=u+i.width,t=e-100;x=e<=0||t>=window.innerWidth||d+i.height<=0||d>=window.innerHeight}if(x){let e=u+i.width/2,t=d+i.height/2,n=window.innerWidth/2,r=window.innerHeight/2,o;o=e<n?t<r?`top-left`:`bottom-left`:t<r?`top-right`:`bottom-right`;let s;s=Math.max(v,y)>Math.max(b,ee)?`horizontal`:`vertical`,K.value={...K.value,corner:o,lastDimensions:{...i,position:Uy(o,i.width,i.height)}};let c={corner:o,orientation:s};im.value=c,Wp(gf,c),Wp(hf,K.value),a(!1),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_),f&&=(cancelAnimationFrame(f),null)}f=null}))},_=()=>{if(!n)return;f&&=(cancelAnimationFrame(f),null),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_);let e=Math.abs(m-o),t=Math.abs(h-s),a=Math.sqrt(e*e+t*t);if(!p||a<60)return;let v=Yy(m,h,o,s,Q.inspectState.value.kind===`focused`?80:40);if(v===K.value.corner){r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`;let e=K.value.dimensions.position;requestAnimationFrame(()=>{r.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let y=Uy(v,i.width,i.height);if(u===c&&d===l)return;let b=()=>{r.transition=`none`,nm(),n.removeEventListener(`transitionend`,b),f&&=(cancelAnimationFrame(f),null)};n.addEventListener(`transitionend`,b),r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`,requestAnimationFrame(()=>{r.transform=`translate3d(${y.x}px, ${y.y}px, 0)`}),K.value={corner:v,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:y},lastDimensions:K.value.lastDimensions,componentsTree:K.value.componentsTree},Wp(hf,{corner:v,dimensions:K.value.dimensions,lastDimensions:K.value.lastDimensions,componentsTree:K.value.componentsTree})};document.addEventListener(`pointermove`,g),document.addEventListener(`pointerup`,_)},[]),s=M(t=>{if(t.preventDefault(),!e.current||!im.value)return;let{corner:r,orientation:i=`horizontal`}=im.value,o=t.clientX,s=t.clientY,c=null,l=!1,u=t=>{if(l||c)return;let f=t.clientX-o,p=t.clientY-s,m=!1;i===`horizontal`?(r.endsWith(`left`)&&f>50||r.endsWith(`right`)&&f<-50)&&(m=!0):(r.startsWith(`top`)&&p>50||r.startsWith(`bottom`)&&p<-50)&&(m=!0),m&&(l=!0,im.value=null,Wp(gf,null),n.current===0&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width=`min-content`,n.current=e.current.offsetWidth||300;let r=K.value.lastDimensions,i=Ky(r.width,0,!0),o=Ky(r.height,0,!1),s=t.clientX-i/2,c=t.clientY-o/2,l=Zp();s=Math.max(l.left,Math.min(s,window.innerWidth-i-l.right)),c=Math.max(l.top,Math.min(c,window.innerHeight-o-l.bottom)),K.value={...K.value,dimensions:{...K.value.dimensions,position:{x:s,y:c}}},a(!0),q.value=Up(_f)||{view:`none`},setTimeout(()=>{if(e.current){let n=new PointerEvent(`pointerdown`,{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(n)}},100)}}):(a(!0),q.value=Up(_f)||{view:`none`}),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d))},d=()=>{c&&=(cancelAnimationFrame(c),null),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d)};document.addEventListener(`pointermove`,u),document.addEventListener(`pointerup`,d)},[]);A(()=>{if(!e.current)return;Gp(_f),im.value?(r.current=36,n.current=0):(e.current.style.width=`min-content`,r.current=36,n.current=e.current.offsetWidth);let o=Zp();e.current.style.maxWidth=`calc(100vw - ${o.left+o.right}px)`,e.current.style.maxHeight=`calc(100vh - ${o.top+o.bottom}px)`,a(),Q.inspectState.value.kind!==`focused`&&!im.value&&!i.current&&(K.value={...K.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.current,height:r.current,position:K.value.dimensions.position}}),$p.value=e.current;let s=K.subscribe(t=>{if(!e.current)return;let{x:n,y:r}=t.dimensions.position,{width:i,height:a}=t.dimensions,o=e.current;requestAnimationFrame(()=>{o.style.transform=`translate3d(${n}px, ${r}px, 0)`,o.style.width=`${i}px`,o.style.height=`${a}px`})}),c=q.subscribe(e=>{t.current=e.view!==`none`,a(),im.value||(e.view===`none`?Gp(_f):Wp(_f,e))}),l=Q.inspectState.subscribe(e=>{t.current=e.kind===`focused`,a()}),u=()=>{a(!0)};return window.addEventListener(`resize`,u,{passive:!0}),()=>{window.removeEventListener(`resize`,u),c(),l(),s(),Wp(hf,{...em(),corner:K.value.corner})}},[]);let[c,l]=k(!1);A(()=>{l(!0)},[]);let u=im.value,d=``;if(u){let{orientation:e=`horizontal`,corner:t}=u;d=e===`horizontal`?t?.endsWith(`right`)?`rotate-180`:``:t?.startsWith(`bottom`)?`-rotate-90`:`rotate-90`}return I(D,{children:[I(Ly,{}),I($y.Provider,{value:e.current,children:I(`div`,{id:`react-scan-toolbar`,dir:`ltr`,ref:e,onPointerDown:u?s:o,className:G(`fixed inset-0`,u?(()=>{let{orientation:e=`horizontal`,corner:t}=u;return e===`horizontal`?t?.endsWith(`right`)?`rounded-tl-lg rounded-bl-lg shadow-lg`:`rounded-tr-lg rounded-br-lg shadow-lg`:t?.startsWith(`bottom`)?`rounded-tl-lg rounded-tr-lg shadow-lg`:`rounded-bl-lg rounded-br-lg shadow-lg`})():`rounded-lg shadow-lg`,`flex flex-col`,`font-mono text-[13px]`,`user-select-none`,`opacity-0`,u?`cursor-pointer`:`cursor-move`,`z-[124124124124]`,`animate-fade-in animation-duration-300 animation-delay-300`,`will-change-transform`,`[touch-action:none]`),style:{WebkitAppRegion:`no-drag`},children:u?I(`button`,{type:`button`,onClick:()=>{im.value=null,Wp(gf,null),n.current===0&&e.current&&requestAnimationFrame(()=>{e.current&&(e.current.style.width=`min-content`,n.current=e.current.offsetWidth||300,a(!0))}),q.value=Up(_f)||{view:`none`}},className:`flex items-center justify-center w-full h-full text-white`,title:`Expand toolbar`,children:I(z,{name:`icon-chevron-right`,size:16,className:G(`transition-transform`,d)})}):I(D,{children:[I(Xy,{position:`top`}),I(Xy,{position:`bottom`}),I(Xy,{position:`left`}),I(Xy,{position:`right`}),I(My,{})]})})})]})},$y=at(null),eb=()=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,style:`display: none;`,children:[I(`title`,{children:`React Scan Icons`}),I(`symbol`,{id:`icon-inspect`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),I(`path`,{d:`M5 3a2 2 0 0 0-2 2`}),I(`path`,{d:`M19 3a2 2 0 0 1 2 2`}),I(`path`,{d:`M5 21a2 2 0 0 1-2-2`}),I(`path`,{d:`M9 3h1`}),I(`path`,{d:`M9 21h2`}),I(`path`,{d:`M14 3h1`}),I(`path`,{d:`M3 9v1`}),I(`path`,{d:`M21 9v2`}),I(`path`,{d:`M3 14v1`})]}),I(`symbol`,{id:`icon-focus`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),I(`path`,{d:`M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6`})]}),I(`symbol`,{id:`icon-next`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M6 9h6V5l7 7-7 7v-4H6V9z`})}),I(`symbol`,{id:`icon-previous`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M18 15h-6v4l-7-7 7-7v4h6v6z`})}),I(`symbol`,{id:`icon-close`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),I(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),I(`symbol`,{id:`icon-replay`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`}),I(`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`}),I(`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`}),I(`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`}),I(`circle`,{cx:`12`,cy:`12`,r:`1`}),I(`path`,{d:`M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0`})]}),I(`symbol`,{id:`icon-ellipsis`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`circle`,{cx:`12`,cy:`12`,r:`1`}),I(`circle`,{cx:`19`,cy:`12`,r:`1`}),I(`circle`,{cx:`5`,cy:`12`,r:`1`})]}),I(`symbol`,{id:`icon-copy`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]}),I(`symbol`,{id:`icon-check`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M20 6 9 17l-5-5`})}),I(`symbol`,{id:`icon-chevron-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`m9 18 6-6-6-6`})}),I(`symbol`,{id:`icon-settings`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`}),I(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),I(`symbol`,{id:`icon-flame`,viewBox:`0 0 24 24`,children:I(`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`})}),I(`symbol`,{id:`icon-function`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}),I(`path`,{d:`M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3`}),I(`path`,{d:`M9 11.2h5.7`})]}),I(`symbol`,{id:`icon-triangle-alert`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`}),I(`path`,{d:`M12 9v4`}),I(`path`,{d:`M12 17h.01`})]}),I(`symbol`,{id:`icon-gallery-horizontal-end`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M2 7v10`}),I(`path`,{d:`M6 5v14`}),I(`rect`,{width:`12`,height:`18`,x:`10`,y:`3`,rx:`2`})]}),I(`symbol`,{id:`icon-search`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`circle`,{cx:`11`,cy:`11`,r:`8`}),I(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),I(`symbol`,{id:`icon-lock`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),I(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),I(`symbol`,{id:`icon-lock-open`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),I(`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`})]}),I(`symbol`,{id:`icon-sanil`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0`}),I(`circle`,{cx:`10`,cy:`13`,r:`8`}),I(`path`,{d:`M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6`}),I(`path`,{d:`M18 3 19.1 5.2`})]})]}),tb=class extends Ie{constructor(){super(...arguments),sf(this,`state`,{hasError:!1,error:null}),sf(this,`handleReset`,()=>{this.setState({hasError:!1,error:null})})}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?I(`div`,{className:`fixed bottom-4 right-4 z-[124124124124]`,children:I(`div`,{className:`p-3 bg-black rounded-lg shadow-lg w-80`,children:[I(`div`,{className:`flex items-center gap-2 mb-2 text-red-400 text-sm font-medium`,children:[I(z,{name:`icon-flame`,className:`text-red-500`,size:14}),`React Scan ran into a problem`]}),I(`div`,{className:`p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),I(`button`,{type:`button`,onClick:this.handleReset,className:`px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5`,children:`Restart`})]})}):this.props.children}},nb=e=>{let t=document.createElement(`div`);t.id=`react-scan-toolbar-root`,window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),it(I(tb,{children:I(D,{children:[I(eb,{}),I(Qy,{})]})}),t);let n=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(it(null,t),it(null,t)),n()},t},rb=!1,ib=()=>{if(rb||(rb=!0,typeof window>`u`)||window.__REACT_GRAB__||!navigator.onLine)return;let e={referrerPolicy:`origin`,keepalive:!0,priority:`low`,cache:`no-store`};try{fetch(`https://www.react-grab.com/api/version?source=react-scan&v=${Nd}&t=${Date.now()}`,e).then(e=>e.ok?e.text():null).then(e=>{if(!e)return;let t=e.trim();/^\d+\.\d+\.\d+/.test(t)&&t!==`0.2.0`&&console.warn(`[React Scan] react-grab v${Nd} is outdated (latest: v${t}). Update react-scan to pick up the newer react-grab.`)}).catch(()=>null)}catch{}},ab=[`top`,`right`,`bottom`,`left`],ob=e=>{if(Yp(e))return{ok:!0,value:e};if(!Xp(e))return{ok:!1,error:`- safeArea must be a non-negative number or { top?, right?, bottom?, left? }. Got "${JSON.stringify(e)}"`};let t={};for(let n of ab){let r=e[n];if(r!==void 0){if(!Yp(r))return{ok:!1,error:`- safeArea.${n} must be a non-negative number. Got "${JSON.stringify(r)}"`};t[n]=r}}return{ok:!0,value:t}},sb={name:`react-scan`,version:`0.5.7`,description:`Scan your React app for renders`,keywords:[`react`,`react-scan`,`react scan`,`render`,`performance`],homepage:`https://react-scan.million.dev`,bugs:{url:`https://github.com/aidenybai/react-scan/issues`},repository:{type:`git`,url:`git+https://github.com/aidenybai/react-scan.git`},license:`MIT`,author:{name:`Aiden Bai`,email:`aiden@million.dev`,url:`https://million.dev`},scripts:{build:`pnpm build:css && NODE_ENV=production tsup`,"build:copy":`pnpm build && cat dist/auto.global.js | pbcopy`,"build:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css`,"dev:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css --watch`,"dev:tsup":`NODE_ENV=development tsup --watch`,dev:`pnpm run --parallel "/^dev:(css|tsup)/"`,pack:`npm version patch && pnpm build && npm pack`,"pack:bump":`node scripts/bump-version.mjs && pnpm run pack && echo $(pwd)/react-scan-$(node -p "require('./package.json').version").tgz | pbcopy`,publint:`publint`,test:`vp test run`,"test:watch":`vp test`,lint:`vp lint`,format:`vp fmt`,typecheck:`tsc --noEmit`},exports:{"./package.json":`./package.json`,".":{production:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.mjs`}},development:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}},default:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}}},"./all-environments":{types:`./dist/core/all-environments.d.ts`,import:`./dist/core/all-environments.mjs`,require:`./dist/core/all-environments.js`},"./install-hook":{types:`./dist/install-hook.d.ts`,import:`./dist/install-hook.mjs`,require:`./dist/install-hook.js`},"./lite":{types:`./dist/lite/index.d.ts`,import:`./dist/lite/index.mjs`,require:`./dist/lite/index.js`},"./auto":{production:{import:{types:`./dist/rsc-shim.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/rsc-shim.mjs`},require:{types:`./dist/rsc-shim.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/rsc-shim.js`}},development:{import:{types:`./dist/auto.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/auto.mjs`},require:{types:`./dist/auto.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/auto.js`}}},"./dist/*":`./dist/*.js`,"./dist/*.js":`./dist/*.js`,"./dist/*.mjs":`./dist/*.mjs`,"./react-component-name/vite":{types:`./dist/react-component-name/vite.d.ts`,import:`./dist/react-component-name/vite.mjs`,require:`./dist/react-component-name/vite.js`},"./react-component-name/webpack":{types:`./dist/react-component-name/webpack.d.ts`,import:`./dist/react-component-name/webpack.mjs`,require:`./dist/react-component-name/webpack.js`},"./react-component-name/esbuild":{types:`./dist/react-component-name/esbuild.d.ts`,import:`./dist/react-component-name/esbuild.mjs`,require:`./dist/react-component-name/esbuild.js`},"./react-component-name/rspack":{types:`./dist/react-component-name/rspack.d.ts`,import:`./dist/react-component-name/rspack.mjs`,require:`./dist/react-component-name/rspack.js`},"./react-component-name/rolldown":{types:`./dist/react-component-name/rolldown.d.ts`,import:`./dist/react-component-name/rolldown.mjs`,require:`./dist/react-component-name/rolldown.js`},"./react-component-name/rollup":{types:`./dist/react-component-name/rollup.d.ts`,import:`./dist/react-component-name/rollup.mjs`,require:`./dist/react-component-name/rollup.js`},"./react-component-name/astro":{types:`./dist/react-component-name/astro.d.ts`,import:`./dist/react-component-name/astro.mjs`,require:`./dist/react-component-name/astro.js`},"./react-component-name/loader":{types:`./dist/react-component-name/loader.d.ts`,import:`./dist/react-component-name/loader.mjs`,require:`./dist/react-component-name/loader.js`}},main:`dist/index.js`,module:`dist/index.mjs`,browser:`dist/auto.global.js`,types:`dist/index.d.ts`,typesVersions:{"*":{"react-component-name/vite":[`./dist/react-component-name/vite.d.ts`],"react-component-name/webpack":[`./dist/react-component-name/webpack.d.ts`],"react-component-name/esbuild":[`./dist/react-component-name/esbuild.d.ts`],"react-component-name/rspack":[`./dist/react-component-name/rspack.d.ts`],"react-component-name/rolldown":[`./dist/react-component-name/rolldown.d.ts`],"react-component-name/rollup":[`./dist/react-component-name/rollup.d.ts`],"react-component-name/astro":[`./dist/react-component-name/astro.d.ts`],"react-component-name/loader":[`./dist/react-component-name/loader.d.ts`]}},bin:`bin/cli.js`,files:[`dist`,`bin`,`package.json`,`README.md`,`LICENSE`,`auto.d.ts`],dependencies:{"@babel/core":`^7.29.0`,"@babel/types":`^7.29.0`,"@preact/signals":`^2.9.0`,"@rollup/pluginutils":`^5.3.0`,bippy:`^0.5.39`,commander:`^14.0.0`,picocolors:`^1.1.1`,preact:`^10.29.1`,prompts:`^2.4.2`,"react-doctor":`latest`,"react-grab":`latest`},devDependencies:{"@esbuild-plugins/tsconfig-paths":`^0.1.2`,"@remix-run/react":`*`,"@tailwindcss/postcss":`^4.2.4`,"@types/babel__core":`^7.20.5`,"@types/prompts":`^2.4.9`,"@types/react":`^19.2.14`,autoprefixer:`^10.5.0`,clsx:`^2.1.1`,"es-module-lexer":`^2.1.0`,esbuild:`^0.28.0`,next:`*`,postcss:`^8.5.13`,"postcss-cli":`^11.0.0`,publint:`^0.3.18`,react:`*`,"react-dom":`*`,"tailwind-merge":`^3.5.0`,tailwindcss:`^4.2.4`,terser:`^5.46.2`,tsup:`^8.5.1`,vitest:`^3.0.0`},peerDependencies:{esbuild:`>=0.18.0`,react:`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`,"react-dom":`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`},peerDependenciesMeta:{esbuild:{optional:!0}},optionalDependencies:{unplugin:`^3.0.0`},publishConfig:{access:`public`}},cb=null,lb=null,ub=()=>{if(cb&&lb)return{rootContainer:cb,shadowRoot:lb};cb=document.createElement(`div`),cb.id=`react-scan-root`,lb=cb.attachShadow({mode:`open`});let e=document.createElement(`style`);return e.textContent=r_,lb.appendChild(e),document.documentElement.appendChild(cb),{rootContainer:cb,shadowRoot:lb}},Q={wasDetailsOpen:tn(!0),isInIframe:tn(cf&&window.self!==window.top),inspectState:tn({kind:`uninitialized`}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:tn(0),interactionListeningForRenders:null,changesListeners:new Map},$={instrumentation:null,componentAllowList:null,options:tn({enabled:!0,log:!1,showToolbar:!0,animationSpeed:`fast`,dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:Q,version:sb.version},cf&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=$.version),db=e=>{let{onCommitStart:t,onRender:n,onCommitFinish:r,...i}=e;return i},fb=e=>{let t=[],n={};for(let r in e){let i=e[r];switch(r){case`enabled`:case`log`:case`showToolbar`:case`showNotificationCount`:case`dangerouslyForceRunInProduction`:case`showFPS`:case`allowInIframe`:case`useOffscreenCanvasWorker`:typeof i==`boolean`?n[r]=i:t.push(`- ${r} must be a boolean. Got "${i}"`);break;case`animationSpeed`:[`slow`,`fast`,`off`].includes(i)?n[r]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case`safeArea`:{let e=ob(i);e.ok?n.safeArea=e.value:t.push(e.error);break}case`onCommitStart`:typeof i==`function`?n.onCommitStart=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onCommitFinish`:typeof i==`function`?n.onCommitFinish=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onRender`:typeof i==`function`?n.onRender=i:t.push(`- ${r} must be a function. Got "${i}"`);break;default:t.push(`- Unknown option "${r}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),n},pb=e=>{try{let t=fb(e);if(Object.keys(t).length===0)return;let n=`showToolbar`in t&&t.showToolbar!==void 0,r={...$.options.value,...t},{instrumentation:i}=$;i&&`enabled`in t&&(i.isPaused.value=t.enabled===!1),$.options.value=r;try{let e=Up(`react-scan-options`)?.enabled;typeof e==`boolean`&&(r.enabled=e)}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}return Wp(`react-scan-options`,db(r)),n&&yb(!!r.showToolbar),r}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},mb=()=>$.options,hb=null,_b=()=>{if(hb===!1)return!1;gb??=_();let e=Array.from(gb.renderers.values());if(e.length===0)return null;for(let t of e)if(he(t)!==`production`)return hb=!1,!1;return!0},vb=()=>{try{if(!cf||!$.runInAllEnvironments&&_b()&&!$.options.value.dangerouslyForceRunInProduction)return;ib();let e=Up(`react-scan-options`);if(e){let t=fb(e);Object.keys(t).length>0&&($.options.value={...$.options.value,...t})}let t=mb();n_(()=>{yb(!!t.value.showToolbar)}),cf&&setTimeout(()=>{ge()||console.error(`[React Scan] Failed to load. Must import React Scan before React runs.`)},5e3)}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},yb=e=>{var t;(t=window.reactScanCleanupListeners)==null||t.call(window);let n=fv(),r=bb();window.reactScanCleanupListeners=()=>{n(),r?.()};let i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i?.remove();return}i?.remove();let{shadowRoot:a}=ub();nb(a)},bb=()=>{try{let e=document.documentElement;return ty(e)}catch(e){$.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},xb=(e={})=>{pb(e),!(Q.isInIframe.value&&!$.options.value.allowInIframe&&!$.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||vb())},Sb=new WeakSet}));export{Cb as n,Fd as t};