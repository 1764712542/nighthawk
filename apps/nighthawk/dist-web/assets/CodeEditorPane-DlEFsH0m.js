import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{a as i,c as a,t as o}from"./es-CVJR_g25.js";import{F as s,M as c,N as l,P as u}from"./es-8MFK7TL8.js";var d=e((()=>{u(),c()})),f,p,m,h,g=e((()=>{d(),o(),f=t(r()),p=t(n()),m=i(({css:e})=>e`
    overflow: auto;
    width: 100%;
    height: 100%;
    background: ${a.colorFillQuaternary};

    .cm-textarea {
      height: 0;
      opacity: 0;
    }
  `),h=(0,f.memo)(({value:e,language:t,style:n,className:r,readOnly:i=!1,onChange:a,onSave:o})=>{let c=(0,f.useRef)(null),u=(0,f.useRef)(null),d=(0,f.useRef)(null),h=(0,f.useRef)(a),g=(0,f.useRef)(o);return h.current=a,g.current=o,(0,f.useEffect)(()=>{if(!u.current)return;let n=u.current,r=!1;return s().then(a=>{if(r||d.current)return;let o=a.fromTextArea(n,{lineNumbers:!0,lineWrapping:!0,mode:t,readOnly:i,theme:`default`,value:e});o.view.dispatch({effects:o.optionHelper.theme.reconfigure(o.view.constructor.theme(l,{dark:!1}))}),o.on(`change`,()=>{h.current?.(o.getValue())}),o.on(`keydown`,(e,t)=>{(t.metaKey||t.ctrlKey)&&t.key.toLowerCase()===`s`&&(t.preventDefault(),t.stopPropagation(),g.current?.())}),d.current=o}),()=>{r=!0,d.current&&=(d.current.destroy(),null)}},[]),(0,f.useEffect)(()=>{let t=d.current;t&&t.getValue()!==e&&t.setValue(e)},[e]),(0,f.useEffect)(()=>{d.current?.setOption(`mode`,t)},[t]),(0,f.useEffect)(()=>{d.current?.setOption(`readOnly`,i)},[i]),(0,p.jsx)(`div`,{className:`${m} ${r??``}`.trim(),ref:c,style:n,children:(0,p.jsx)(`textarea`,{className:`cm-textarea`,ref:u})})}),h.displayName=`CodeEditorPane`}));export{g as n,h as t};