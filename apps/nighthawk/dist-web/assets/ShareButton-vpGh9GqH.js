import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{$a as i,Er as a,Fr as o,Jo as s,Lr as c,Nr as l,Ua as u,_o as d,cs as f,io as p,jr as m,li as h,ls as g,qr as _}from"./app-const-Bl9rlHwj.js";import{Hr as v,Qr as y,Xr as b,bt as x,mr as S}from"./dialog-BebLzVzY.js";import{a as C,c as w,l as T,t as E}from"./es-CVJR_g25.js";import{Qr as D,nl as O,x as k}from"../vendor/vendor-icons-C-Y4oLkk.js";import{c as A,et as j,i as M,t as N}from"./base-ui-BAv0gRbN.js";import{$r as P,Li as F,t as I,zt as L}from"./es-LELdnrjB.js";import{Oo as R,ko as z}from"./index-Djd-5Nq9.js";import{n as B,t as V}from"./query-string-DCxvp9QO.js";var H,U,W=e((()=>{a(),u(),V(),H=(e,t=`,`,n)=>(n&&(e=e.map(e=>n+p(e))),e.filter(Boolean).join(t)),U=({url:e,title:t,desc:n,hashtags:r=[]})=>({linkedin:{link:(()=>{let t=d({url:e},s);return B.stringifyUrl({query:t,url:`https://www.linkedin.com/sharing/share-offsite/`})})(),title:`Linkedin`},mastodon:{icon:h,link:(()=>{let i=d({text:[[t,n].filter(Boolean).join(` - `),r&&H(r,` `,`#`)].filter(Boolean).join(` `),url:e},s);return B.stringifyUrl({query:i,url:`https://mastodon.social/share`})})(),title:`Mastodon`},reddit:{icon:_,link:(()=>{let i=d({title:[[t,n].filter(Boolean).join(` - `),r&&H(r,` `,`#`)].filter(Boolean).join(` `),url:e},s);return B.stringifyUrl({query:i,url:`https://www.reddit.com/submit`})})(),title:`Reddit`},telegram:{icon:o,link:(()=>{let i=d({text:[[t,n].filter(Boolean).join(` - `),r&&H(r,` `,`#`)].filter(Boolean).join(` `),url:e},s);return B.stringifyUrl({query:i,url:`https://t.me/share/url"`})})(),title:`Telegram`},weibo:{icon:c,link:(()=>{let i=d({sharesource:`weibo`,title:[[t,n].filter(Boolean).join(` - `),r&&H(r,` `,`#`)].filter(Boolean).join(` `),url:e},s);return B.stringifyUrl({query:i,url:`http://service.weibo.com/share/share.php`})})(),title:`Weibo`},whatsapp:{icon:l,link:(()=>{let i=d({text:[[t,n].filter(Boolean).join(` - `),e,r&&H(r,` `,`#`)].filter(Boolean).join(` `)},s);return B.stringifyUrl({query:i,url:`https://api.whatsapp.com/send`})})(),title:`WhatsApp`},x:{icon:m,link:(()=>{let i=d({hashtags:r&&H(r),text:[t,n].filter(Boolean).join(` - `),url:e},s);return B.stringifyUrl({query:i,url:`https://x.com/intent/tweet`})})(),title:`X`}})})),G,K,q,J,Y=e((()=>{I(),N(),E(),G=t(g()),K=t(f()),q=C(({css:e,cssVar:t})=>({banner:e`
    position: relative;

    overflow: hidden;

    height: 64px;
    margin-block-end: -56px;

    background: ${t.colorFillSecondary};
  `,bannerImg:e`
    position: absolute;
    filter: blur(40px) saturate(1.5);
  `})),J=(0,G.memo)(({avatar:e,className:t,size:n=600,children:r,...i})=>(0,K.jsxs)(y,{align:`center`,className:T(q.banner,t),justify:`center`,style:e?{}:{backgroundColor:w.colorFillTertiary},width:`100%`,...i,children:[e&&(0,K.jsx)(j,{alt:`banner`,avatar:e,className:q.bannerImg,shape:`square`,size:n}),r]}))})),X,Z,Q,$,ee=e((()=>{I(),N(),E(),u(),k(),X=t(g()),n(),z(),W(),Y(),Z=t(f()),Q=C(({css:e,cssVar:t})=>({banner:e`
      overflow: hidden;

      border: 1px solid ${t.colorBorderSecondary};
      border-radius: ${t.borderRadiusLG};

      background: ${t.colorBgContainer};
      box-shadow: ${t.boxShadowTertiary};
    `,copy:e`
      background: ${t.colorPrimary};

      &:hover {
        background: ${t.colorPrimaryHover};
      }
    `,icon:e`
      border: 1px solid ${t.colorFillSecondary};

      svg {
        fill: ${t.colorTextSecondary};
      }

      &:hover {
        border: 1px solid ${t.colorBorderSecondary};

        svg {
          fill: ${t.colorText};
        }
      }
    `})),$=(0,X.memo)(({meta:e,...t})=>{let{x:n,reddit:a,telegram:o,whatsapp:s,mastodon:c,weibo:l}=U({avatar:``,desc:``,hashtags:[],title:``,url:``,...e}),{t:u}=r(`common`),[d,f]=(0,X.useState)(!1),p;return p=e?(0,Z.jsxs)(b,{gap:16,style:{position:`relative`},width:`100%`,children:[(0,Z.jsxs)(y,{align:`center`,className:Q.banner,width:`100%`,children:[(0,Z.jsx)(J,{avatar:e.avatar,size:640,style:{height:72,marginBottom:-36}}),(0,Z.jsx)(b,{flex:`none`,height:72,width:72,style:{backgroundColor:w.colorBgContainer,borderRadius:`50%`,overflow:`hidden`,zIndex:2},children:(0,Z.jsx)(j,{animation:!0,avatar:e.avatar,shape:`square`,size:64})}),(0,Z.jsxs)(b,{padding:12,width:`100%`,children:[(0,Z.jsx)(`h3`,{style:{fontWeight:`bold`,textAlign:`center`},children:e.title}),(0,Z.jsx)(M,{as:`p`,style:{color:w.colorTextSecondary,textAlign:`center`},children:e.desc}),e.hashtags&&(0,Z.jsx)(y,{horizontal:!0,align:`center`,gap:4,justify:`center`,wrap:`wrap`,children:e.hashtags.map((e,t)=>(0,Z.jsx)(A,{children:i(e).trim()},t))}),e.tags]})]}),(0,Z.jsx)(y,{horizontal:!0,align:`center`,gap:8,justify:`center`,wrap:`wrap`,children:[n,a,o,s,c,l].map(e=>e.icon&&(0,Z.jsx)(`a`,{href:e.link,rel:`noreferrer`,target:`_blank`,children:(0,Z.jsx)(x,{className:Q.icon,icon:e.icon,size:{blockSize:36,borderRadius:18,size:16},title:e.title})},e.title))}),(0,Z.jsxs)(y,{horizontal:!0,align:`center`,gap:8,width:`100%`,children:[(0,Z.jsx)(P,{value:e.url,variant:`filled`}),(0,Z.jsx)(F,{className:Q.copy,color:w.colorBgLayout,content:e.url,icon:O,size:{blockSize:36,size:16}})]})]}):(0,Z.jsx)(L,{active:!0,paragraph:{rows:4},title:!1}),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(S,{icon:(0,Z.jsx)(v,{icon:D}),size:`large`,onClick:()=>f(!0),...t}),(0,Z.jsx)(R,{footer:null,open:d,title:u(`share`),width:360,onCancel:()=>f(!1),children:p})]})})}));export{ee as n,$ as t};