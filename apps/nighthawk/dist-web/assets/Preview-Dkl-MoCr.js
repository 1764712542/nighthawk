import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{M as n,P as r}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{O as i,br as a,cs as o,hr as s,ls as c}from"./app-const-Bl9rlHwj.js";import{Nr as l,Qr as u,Xr as d}from"./dialog-BebLzVzY.js";import{a as f,f as p,l as m,t as h}from"./es-CVJR_g25.js";import{t as g,ur as _}from"./es-LELdnrjB.js";import{t as v}from"./ProductLogo-Bp_soSXp.js";import{t as y}from"./Branding-CZK4Obda.js";import{n as b,t as x}from"./UserAvatar-B-cnH3a9.js";import{a as S,c as C,i as w,l as T,o as E,s as D}from"./stats-Dc5785gS.js";var O,k,A,j;e((()=>{i(),g(),h(),O=t(c()),n(),y(),b(),T(),D(),S(),k=t(o()),A=f(({css:e,cssVar:t})=>({avatar:e`
    box-sizing: content-box;
    border: 4px solid ${t.colorBgLayout};
    background: ${t.colorText};
  `,background:e`
    position: relative;

    width: 100%;
    padding: 24px;

    background-color: ${t.colorBgLayout};
    background-image: url(${a(`screenshot_background.webp`)});
    background-position: center;
    background-size: 120% 120%;
  `,container:e`
    position: relative;

    overflow: hidden;

    width: 100%;
    border: 1px solid ${t.colorBorder};
    border-radius: calc(${t.borderRadiusLG} * 2);

    background: ${t.colorBgLayout};
    box-shadow: ${t.boxShadow};
  `,decs:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,footer:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,heatmaps:e`
    .legend-month,
    footer {
      display: none;
    }
  `,preview:m(l.noScrollbar,e`
      overflow: hidden scroll;

      width: 100%;
      max-height: 70dvh;
      border: 1px solid ${t.colorBorder};
      border-radius: ${t.borderRadiusLG};

      background: ${t.colorBgLayout};

      * {
        pointer-events: none;

        ::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }

      ${p.sm} {
        max-height: 40dvh;
      }
    `),title:e`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `})),j=(0,O.memo)(()=>{let{t:e}=r(`auth`);return(0,k.jsx)(`div`,{className:A.preview,children:(0,k.jsx)(`div`,{className:A.background,id:`preview`,children:(0,k.jsxs)(d,{className:A.container,gap:12,padding:24,children:[(0,k.jsx)(v,{size:24,type:`text`}),(0,k.jsx)(`div`,{className:A.title,children:e(`stats.share.title`)}),(0,k.jsxs)(u,{horizontal:!0,align:`center`,children:[(0,k.jsx)(x,{className:A.avatar,shape:`circle`,size:48,style:{marginRight:-12,zIndex:2}}),(0,k.jsx)(d,{className:A.avatar,height:48,width:48,style:{borderRadius:`50%`,zIndex:1},children:(0,k.jsx)(v,{size:40})})]}),(0,k.jsxs)(u,{gap:12,paddingBlock:12,width:`100%`,children:[(0,k.jsx)(C,{inShare:!0,blockMargin:2,blockRadius:1,blockSize:4.5,className:A.heatmaps,width:`100%`,style:{marginTop:-12}}),(0,k.jsxs)(_,{gap:8,maxItemWidth:100,rows:2,width:`100%`,children:[(0,k.jsx)(E,{inShare:!0}),(0,k.jsx)(w,{inShare:!0})]})]}),(0,k.jsx)(`div`,{className:A.footer,children:s})]})})})})}))();export{j as default};