import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{a as i,h as a}from"../vendor/vendor-react-CBcx1o7d.js";import{a as o,c as s,t as c}from"./es-CVJR_g25.js";var l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{c(),l=t(r()),i(),u=t(n()),d=`data-settings-anchor`,f=`data-settings-anchor-row`,p=2400,m=100,h=3e3,g=o(({css:e})=>({anchor:e`
    scroll-margin-block-start: 80px;
  `,highlight:e`
    border-radius: ${s.borderRadius};
    animation: settings-search-highlight 1.2s ease-in-out 2;

    @keyframes settings-search-highlight {
      0%,
      100% {
        background: transparent;
      }

      50% {
        /* One step above colorPrimaryBg — plain Bg is barely visible in dark mode */
        background: ${s.colorPrimaryBgHover};
      }
    }

    @media (prefers-reduced-motion: reduce) {
      /* Keep the locate cue, drop the flashing: a steady highlight that the
         removal timer clears */
      background: ${s.colorPrimaryBgHover};
      animation: none;
    }
  `})),_=(0,l.memo)(({id:e,children:t})=>(0,u.jsx)(`span`,{className:g.anchor,[d]:e,children:t})),_.displayName=`SettingsSearchAnchor`,v=e=>{let t=Date.now(),n,r=()=>{let i=document.querySelector(`[${d}="${CSS.escape(e)}"]`);if(!i){Date.now()-t<h&&(n=setTimeout(r,m));return}let a=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;i.scrollIntoView({behavior:a?`auto`:`smooth`,block:`center`});let o=i.closest(`.ant-form-item, .ant-collapse-header, [data-settings-anchor-row]`)??i;o.classList.add(g.highlight),setTimeout(()=>o.classList.remove(g.highlight),p)};return r(),()=>clearTimeout(n)},y=()=>{let e=a();(0,l.useEffect)(()=>{let t=e.hash.replace(/^#/,``);if(t)return v(t)},[e.key])}}));export{y as i,_ as n,b as r,f as t};