import{n as e}from"./rolldown-runtime-CMxvf4Kt.js";import{Nr as t}from"./dialog-BebLzVzY.js";import{a as n,f as r,l as i,t as a}from"./es-CVJR_g25.js";import{t as o}from"./es-LELdnrjB.js";var s,c=e((()=>{o(),a(),s=n(({css:e,cssVar:n})=>({preview:i(t.noScrollbar,e`
      overflow: hidden scroll;

      width: 100%;
      max-width: var(--preview-max-width, none);
      max-height: 70dvh;
      margin: var(--preview-margin, 0);
      border: 1px solid ${n.colorBorder};
      border-radius: ${n.borderRadiusLG};

      background: ${n.colorBgContainer};

      /* stylelint-disable selector-class-pattern */
      .react-pdf__Document *,
      .react-pdf__Page * {
        pointer-events: none;
      }
      /* stylelint-enable selector-class-pattern */

      ::-webkit-scrollbar {
        width: 0 !important;
        height: 0 !important;
      }

      ${r.sm} {
        max-height: 40dvh;
      }
    `),previewNarrow:e`
    --preview-max-width: 480px;
    --preview-margin: 0 auto;
  `,previewWide:e`
    --preview-max-width: none;
    --preview-margin: 0;
  `}))})),l,u=e((()=>{a(),c(),l=n(({css:e,cssVar:t})=>({body:e`
    height: 100%;
    ${r.sm} {
      padding-block-end: 68px;
    }
  `,footer:e`
    ${r.sm} {
      position: absolute;
      inset-block-end: 0;
      inset-inline: 0;

      width: 100%;
      margin: 0;
      padding: 16px;

      background: ${t.colorBgContainer};
    }
  `,sidebar:e`
    flex: none;
    width: max(240px, 25%);
    ${r.sm} {
      flex: 1;
      width: unset;
      margin-inline: -16px;
    }
  `}))}));export{s as i,l as n,c as r,u as t};