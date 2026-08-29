import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{Qr as i}from"./dialog-BebLzVzY.js";import{K as a,a as o,b as s,f as c,lt as l,t as u}from"./es-CVJR_g25.js";import{i as d,t as f}from"./base-ui-BAv0gRbN.js";import{Ta as p,t as m}from"./es-LELdnrjB.js";import{n as h,s as g}from"./client-BE8DoWhQ.js";var _,v,y,b,x,S=e((()=>{m(),f(),s(),u(),_=t(r()),v=t(n()),y=`ant`,b=o(({css:e,cssVar:t})=>({header:e`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: space-between;

    ${c.sm} {
      flex-wrap: wrap;
      margin-block-end: 8px;
    }
  `,statistic:e`
    .${y}-statistic-content-value-int, .${y}-statistic-content-value-decimal {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.2;
    }
  `,title:e`
    overflow: hidden;
    flex: 1;

    font-size: 16px;
    font-weight: 500;
    line-height: 32px;
    color: ${t.colorText};

    ${c.sm} {
      font-size: 14px;
      line-height: 16px;
    }
  `})),x=(0,_.memo)(({title:e,className:t,variant:n=`borderless`,loading:r,extra:o,style:s,padding:c,paddingBlock:u,paddingInline:f,statistic:m})=>(0,v.jsxs)(p,{className:t,flex:1,padding:c,paddingBlock:u,paddingInline:f,style:s,variant:n,children:[(0,v.jsxs)(`div`,{className:b.header,children:[(0,v.jsx)(`div`,{className:b.title,children:typeof e==`string`?(0,v.jsx)(d,{as:`h2`,ellipsis:{rows:1,tooltip:!0},style:{fontSize:`inherit`,fontWeight:`inherit`,lineHeight:`inherit`,margin:0,overflow:`hidden`},children:e}):e}),r?(0,v.jsx)(l,{percent:`auto`,size:`small`}):o]}),m&&(0,v.jsxs)(i,{gap:16,style:m.style,children:[(0,v.jsx)(a,{className:b.statistic,precision:m.precision,prefix:m.prefix,styles:m.valueStyle?{content:m.valueStyle}:void 0,suffix:m.suffix,value:m.value}),m.description]})]}))})),C,w,T=e((()=>{h(),C=class{findByMonth=async e=>g.usage.findByMonth.query({mo:e});findAndGroupByDay=async e=>g.usage.findAndGroupByDay.query({mo:e});getAgentUsageStats=async e=>g.usage.getAgentUsageStats.query(e)},w=new C}));export{S as i,w as n,x as r,T as t};