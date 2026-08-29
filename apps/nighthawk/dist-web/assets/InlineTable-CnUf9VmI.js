import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{P as i,Tn as a,a as o,b as s,c,l,t as u}from"./es-CVJR_g25.js";var d,f,p,m,h,g=e((()=>{s(),u(),d=t(r()),f=t(n()),p=`ant`,m=o(({css:e})=>({hoverToActive:e`
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  `,table:e`
    .${p}-table {
      background: transparent;

      th,
      td {
        border: none !important;
        font-size: 13px;
      }

      .${p}-table-cell:before {
        display: none;
      }
    }

    tr {
      td:first-child,
      th:first-child {
        padding-inline-start: 24px !important;
      }

      td:last-child,
      th:last-child {
        padding-inline-end: 24px !important;
      }
    }
  `})),h=(0,d.memo)(({hoverToActive:e,className:t,...n})=>(0,f.jsx)(a,{theme:{components:{Table:{headerBg:c.colorFillQuaternary,headerBorderRadius:0}}},children:(0,f.jsx)(i,{bordered:!1,className:l(m.table,e&&m.hoverToActive,t),pagination:!1,scroll:{x:`max-content`},size:`small`,...n})}))}));export{g as n,h as t};