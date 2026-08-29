import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Cn as i,a,b as o,f as s,l as c,t as l}from"./es-CVJR_g25.js";import{n as u,t as d}from"./env-bASO3l8z.js";import{a as f,i as p}from"./MakedownRender-C33_6ZZ5.js";import{n as m,r as h}from"./const-Cx_ztRKW.js";var g,_,v,y,b,x=e((()=>{o(),l(),g=t(r()),h(),d(),f(),_=t(n()),v=`ant`,y=a(({css:e,cssVar:t})=>({toc:e`
      a {
        line-height: 1.4 !important;
        white-space: normal !important;
      }

      .${v}-anchor {
        display: flex;
        flex-direction: column;
        gap: 8px;

        &::before {
          display: none;
        }

        .${v}-anchor-ink {
          display: none !important;
        }

        .${v}-anchor-link-title {
          overflow: hidden;
          display: box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;

          word-break: break-word;
        }

        .${v}-anchor-link-title,.${v}-anchor-link {
          margin: 0 !important;
          padding-block: 0 !important;
        }

        > .${v}-anchor-link {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-inline-start: 0 !important;
        }

        .${v}-anchor-link-title-active {
          color: ${t.colorText} !important;
        }

        .${v}-anchor-link-title:not(.${v}-anchor-link-title-active) {
          color: ${t.colorTextSecondary};

          &:hover {
            color: ${t.colorText};
          }
        }
      }

      ${s.lg} {
        display: none;
      }
    `})),b=(0,g.memo)(({items:e,className:t,...n})=>{let r=(0,g.useMemo)(()=>p(e),[e]);return(0,_.jsx)(i,{affix:!1,className:c(t,y.toc),items:r,getContainer:u?void 0:()=>document.querySelector(`#${m}`),...n})})}));export{x as n,b as t};