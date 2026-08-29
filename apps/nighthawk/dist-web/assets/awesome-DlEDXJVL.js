import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{_r as i,vr as a}from"./dialog-BebLzVzY.js";import{a as o,l as s,t as c}from"./es-CVJR_g25.js";import{Et as l}from"./es-LELdnrjB.js";var u,d=e((()=>{c(),u=o(({css:e,cssVar:t})=>({container:e`
    display: inline-block;
    white-space: pre-wrap;
  `,cursor:e`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 3px;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,cursorBlock:e`
    transform: translateY(10%);

    display: inline-block;
    align-items: center;

    width: 0.5em;
    height: 1em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,cursorCustom:e`
    display: inline-block;
    align-items: center;
    margin-inline-start: 0.25rem;
    opacity: 1;
  `,cursorDot:e`
    display: inline-block;
    align-items: center;

    width: 0.75em;
    height: 0.75em;
    margin-inline-start: 0.25rem;
    border-radius: 50%;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,cursorHidden:e`
    display: none;
  `,cursorUnderscore:e`
    transform: translateY(0.3em);

    display: inline-block;
    align-items: center;

    width: 0.6em;
    height: 0.15em;
    margin-inline-start: 0.25rem;
    border-radius: 2px;

    opacity: 1;
    background-color: ${t.colorPrimary};
  `,text:e`
    color: ${t.colorText};
  `}))})),f,p,m,h=e((()=>{i(),d(),f=t(r(),1),p=t(n(),1),c(),m=(0,f.memo)(({sentences:e,as:t=`div`,typingSpeed:n=100,initialDelay:r=0,pauseDuration:i=2e3,deletingSpeed:o=50,deletePauseDuration:c=0,loop:l=!0,className:d=``,color:m,showCursor:h=!0,hideCursorWhileTyping:g=!1,cursorCharacter:_,cursorClassName:v=``,cursorColor:y,cursorBlinkDuration:b=.8,cursorFade:x=!0,cursorStyle:S=`pipe`,textColors:C=[],variableSpeed:w,onSentenceComplete:T,startOnVisible:E=!1,reverseMode:D=!1,segmentMode:O=`grapheme`,...k})=>{let A=a(),j=s,[M,N]=(0,f.useState)(``),[P,F]=(0,f.useState)(0),[I,L]=(0,f.useState)(!1),[R,z]=(0,f.useState)(0),[B,V]=(0,f.useState)(!E),[H,U]=(0,f.useState)(!1),W=(0,f.useRef)(null),G=(0,f.useMemo)(()=>Array.isArray(e)?e:[e],[e]),K=(0,f.useCallback)(e=>{if(typeof Intl<`u`&&`Segmenter`in Intl){let t=new Intl.Segmenter(void 0,{granularity:O});return Array.from(t.segment(e),e=>e.segment)}return O===`word`?e.split(/(\s+)/).filter(Boolean):Array.from(e)},[O]),q=(0,f.useCallback)(()=>{if(!w)return n;let{min:e,max:t}=w;return Math.random()*(t-e)+e},[w,n]),J=()=>C.length>0?C[R%C.length]:m,ee=()=>y||m;(0,f.useEffect)(()=>{if(!E||!W.current)return;let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&V(!0)})},{threshold:.1});return e.observe(W.current),()=>e.disconnect()},[E]),(0,f.useEffect)(()=>{if(!B)return;let e,t=G[R],a=K(t),s=D?a.reverse().join(``):t;if(H)return e=setTimeout(()=>{U(!1)},c),()=>clearTimeout(e);let u=()=>{if(I)if(M===``){if(L(!1),R===G.length-1&&!l)return;if(T&&T(G[R],R),z(e=>(e+1)%G.length),F(0),c>0){U(!0);return}}else e=setTimeout(()=>{N(e=>K(e).slice(0,-1).join(``))},o);else{let t=K(s);if(P<t.length)e=setTimeout(()=>{N(e=>e+t[P]),F(e=>e+1)},w?q():n);else if(G.length>=1){if(!l&&R===G.length-1)return;e=setTimeout(()=>{L(!0)},i)}}};return P===0&&!I&&M===``?e=setTimeout(u,r):u(),()=>clearTimeout(e)},[P,M,I,H,n,o,c,i,G,R,l,r,B,D,w,T,q,K]);let Y=()=>{if(_)return u.cursorCustom;switch(S){case`block`:return u.cursorBlock;case`dot`:return u.cursorDot;case`underscore`:return u.cursorUnderscore;case`pipe`:return u.cursor}},X=K(G[R]).length,Z=g===!0?!0:g===`typing`?P<X&&!I||I:g===`afterTyping`?P===X&&!I:!1,Q=J(),$=ee(),te=K(M);return(0,f.createElement)(t,{className:j(u.container,d),ref:W,...k},(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:u.text,style:Q?{color:Q}:void 0,children:te.map((e,t)=>(0,p.jsx)(A.span,{animate:{opacity:1},initial:{opacity:0},style:{display:`inline-block`},transition:{duration:n/500,ease:`easeInOut`},children:e===` `?`\xA0`:e},`${R}-${t}`))}),h&&(x?(0,p.jsx)(A.span,{animate:{opacity:+!Z},className:j(Y(),v),initial:{opacity:0},style:$?{backgroundColor:$}:void 0,transition:{duration:Z?.2:b,ease:`easeInOut`,repeat:Z?0:1/0,repeatType:`reverse`},children:_}):(0,p.jsx)(`span`,{className:j(Y(),v),style:{backgroundColor:$,opacity:+!Z},children:_}))]}))}),m.displayName=`TypewriterEffect`})),g=e((()=>{l(),h()}));export{m as n,h as r,g as t};