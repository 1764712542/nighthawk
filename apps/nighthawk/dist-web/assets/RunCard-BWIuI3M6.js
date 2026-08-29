import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{B as n,H as r,M as i,P as a}from"../vendor/vendor-data-runtime-DtXJIICD.js";import{cs as o,ls as s}from"./app-const-Bl9rlHwj.js";import{B as c,Hr as l,Qr as u,St as d,Xr as f,bt as p,mr as m}from"./dialog-BebLzVzY.js";import{P as h,a as g,b as _,c as v,et as y,ft as b,t as x,x as ee,xt as S}from"./es-CVJR_g25.js";import{Aa as C,Ka as te,Kl as w,Kp as ne,Mm as T,Mt as re,Ph as E,Qm as ie,Qu as D,Rt as O,Wn as ae,iy as k,mi as A,ng as oe,vv as se,wa as ce,wf as le,wp as ue,x as j}from"../vendor/vendor-icons-C-Y4oLkk.js";import{B as de,F as fe,P as pe,Q as me,R as he,c as ge,i as M,t as N,x as _e}from"./base-ui-BAv0gRbN.js";import{$r as ve,Ra as ye,_a as be,qr as P,t as F}from"./es-LELdnrjB.js";import{n as xe,r as Se}from"./upload-GB9sKG1n.js";import{n as Ce,t as we}from"./WorkspaceLink-DKEucXjF.js";import{a as Te,i as I,r as Ee,t as De}from"./eval-8_vdTK9q.js";import{i as Oe,n as ke,r as Ae,t as je}from"./StatusBadge-I2ZCpKG6.js";import{n as Me,t as Ne}from"./SegmentBar-DiURj7-z.js";import{r as Pe,t as Fe}from"./utils-DH01phU5.js";var L,Ie,Le,Re=e((()=>{j(),L={browsecomp:{id:`browsecomp`,category:`research`,name:`BrowseComp`,description:`Measuring the ability for agents to browse the web, comprises 1,266 questions.`,icon:D,formatDescription:`format: Topic (category/tags), Question (input), Answer (expected)`,requiredFields:[`question`,`answer`,`problem_topic`,`canary`],optionalFields:[`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`problem_topic`]},validation:{requireExpected:!0,expectedFormat:`string`}},"browsecomp-zh":{id:`browsecomp-zh`,category:`research`,name:`BrowseComp-ZH`,description:`Chinese web browsing: 289 multi-step reasoning questions`,icon:D,formatDescription:`format: Topic (category/tags), Question (input), Answer (expected)`,requiredFields:[`Question`,`Answer`],optionalFields:[`Topic`,`canary`,`case_id`],fieldInference:{input:[`Question`,`question`,`prompt`],expected:[`Answer`,`answer`],choices:[],category:[`Topic`,`topic`,`category`]},validation:{requireExpected:!0,expectedFormat:`string`}},widesearch:{id:`widesearch`,category:`research`,name:`WideSearch`,description:`Evaluating the capabilities of agents in broad information-seeking tasks, consisting of 200 questions.`,icon:D,formatDescription:`format: instance_id, query (input), evaluation (expected), language`,requiredFields:[`instance_id`,`query`,`evaluation`,`language`],optionalFields:[`case_id`],fieldInference:{input:[`query`],expected:[`evaluation`],choices:[],category:[`language`],sortOrder:[]},validation:{requireExpected:!0,expectedFormat:`string`}},"hle-text":{id:`hle-text`,category:`research`,name:`Humanity's Last Exam, HLE (Text Only)`,description:`Humanity's Last Exam (HLE) is a multi-modal benchmark at the frontier of human knowledge, consisting of 2150 questions.`,icon:D,formatDescription:`format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category`,requiredFields:[`id`,`question`,`answer`,`answer_type`,`rationale`,`raw_subject`,`category`],optionalFields:[`canary`,`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`category`]}},"hle-verified":{id:`hle-verified`,category:`research`,name:`Humanity's Last Exam, HLE (Verified Answers)`,description:`A subset of Humanity's Last Exam (HLE) with verified answers, designed to evaluate the ability to produce correct answers rather than just plausible ones.`,icon:D,formatDescription:`format: id, question (input), answer (expected), answer_type, rationale, raw_subject, category, Verified_Classes`,requiredFields:[`id`,`question`,`answer`,`answer_type`,`rationale`,`raw_subject`,`category`,`Verified_Classes`],optionalFields:[`canary`,`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`category`]}},deepsearchqa:{id:`deepsearchqa`,category:`research`,name:`DeepSearchQA`,description:`A 900-prompt factuality benchmark from Google DeepMind, designed to evaluate agents on difficult multi-step information-seeking tasks across 17 different fields.`,icon:D,formatDescription:`problem, problem_category, answer, answer_type`,requiredFields:[`problem`,`answer`,`problem_category`,`answer_type`],optionalFields:[`case_id`],fieldInference:{input:[`problem`],expected:[`answer`],choices:[],category:[`problem_category`],sortOrder:[]},validation:{requireExpected:!0,expectedFormat:`string`}},sealqa:{id:`sealqa`,category:`research`,name:`SealQA`,description:`SealQA is a new challenge benchmark for evaluating SEarch- Augmented Language models on fact-seeking questions where web search yields conflicting, noisy, or unhelpful results.`,icon:D,formatDescription:`format: question (input), answer (expected), topic (category)`,requiredFields:[`question`,`answer`,`topic`,`canary`],optionalFields:[`case_id`],fieldInference:{input:[`question`],expected:[`answer`],choices:[],category:[`topic`]},validation:{requireExpected:!0,expectedFormat:`string`}},xbench:{id:`xbench`,category:`research`,name:`xbench`,description:`Chinese search: ~200 factual query questions`,icon:D,formatDescription:`format: id (item number), prompt (input), type (metadata), answer (expected)`,requiredFields:[`prompt`,`answer`],optionalFields:[`type`,`id`],fieldInference:{input:[`prompt`,`question`,`input`],expected:[`answer`,`response`],choices:[],category:[`type`,`category`],sortOrder:[`id`]},validation:{requireExpected:!0,expectedFormat:`string`}},mmlu:{id:`mmlu`,category:`reference`,name:`MMLU (Reference)`,description:`Multiple choice format (for reference only)`,icon:D,formatDescription:`format: question, choices array (or A/B/C/D columns), answer (index/letter)`,requiredFields:[`question`,`choices`,`answer`],optionalFields:[`subject`,`difficulty`],fieldInference:{input:[`question`,`prompt`,`query`],expected:[`answer`,`correct_answer`,`label`],choices:[`choices`,`options`,`A`,`B`,`C`,`D`],category:[`context`,`subject`,`category`]},validation:{requireExpected:!0,requireChoices:!0,expectedFormat:`index`}},custom:{id:`custom`,category:`custom`,name:`Custom`,description:`Define your own field mapping`,icon:ne,formatDescription:`Custom format - you define the mapping. Only requirement: must have an "input" field.`,requiredFields:[`input`],optionalFields:[`expected`,`choices`,`category`,`metadata`],fieldInference:{input:[`input`,`question`,`prompt`,`query`],expected:[`expected`,`answer`,`output`,`response`],choices:[`choices`,`options`],category:[`category`,`type`,`topic`,`subject`]}}},Ie=e=>L[e||`custom`]||L.custom,Le=()=>{let e={research:[],"tool-use":[],memory:[],reference:[],custom:[]};return Object.values(L).forEach(t=>{e[t.category]||(e[t.category]=[]),e[t.category].push(t)}),e}})),ze,R,Be,z,Ve,He=e((()=>{F(),N(),_(),x(),j(),ze=t(s()),i(),Te(),Re(),R=t(o()),Be={custom:`Custom`,memory:`Memory`,reference:`Reference Formats`,research:`Deep Research / QA`,"tool-use":`Tool Use`},z=g(({css:e})=>({sectionLabel:e`
    font-size: ${v.fontSizeSM};
    font-weight: 500;
    color: ${v.colorTextSecondary};
  `,presetCard:e`
    cursor: pointer;

    position: relative;

    padding: 12px;
    border: 1px solid ${v.colorBorderSecondary};
    border-radius: ${v.borderRadius};

    background: ${v.colorBgContainer};

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      border-color: ${v.colorBorder};
      background: ${v.colorFillTertiary};
    }

    &:focus-visible {
      outline: 2px solid ${v.colorPrimary};
      outline-offset: -2px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,presetCardSelected:e`
    border-color: ${v.colorPrimaryBorder};
    background: ${v.colorPrimaryBg};

    &:hover {
      border-color: ${v.colorPrimaryBorder};
      background: ${v.colorPrimaryBg};
    }
  `,presetGrid:e`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  `,presetIcon:e`
    border: 1px solid ${v.colorBorderSecondary};
    border-radius: ${v.borderRadius};
    background: ${v.colorBgElevated};
  `,selectedMark:e`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;
    border-radius: 999px;

    color: ${v.colorBgContainer};

    background: ${v.colorPrimary};
  `})),Ve=({dataset:e,formId:t,onLoadingChange:n,onSuccess:r})=>{let{t:i}=a(`eval`),{close:o}=he(),[s]=S.useForm(),[d,p]=(0,ze.useState)(`custom`),m=S.useWatch(`evalMode`,s);(0,ze.useEffect)(()=>{e&&(s.setFieldsValue({description:e.description||``,evalConfig:e.evalConfig,evalMode:e.evalMode||void 0,name:e.name}),p(e.metadata?.preset||`custom`))},[e,s]);let h=Le(),g=Object.entries(h).filter(([,e])=>e.length>0);return(0,R.jsxs)(S,{form:s,layout:`vertical`,name:t,onFinish:async t=>{n?.(!0);try{await I.updateDataset({description:t.description?.trim()||void 0,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:null,evalMode:t.evalMode||null,id:e.id,metadata:{...e.metadata,preset:d},name:t.name.trim()}),c.success(i(`dataset.edit.success`)),o(),r?.()}catch{c.error(i(`dataset.edit.error`))}finally{n?.(!1)}},children:[(0,R.jsx)(S.Item,{label:i(`dataset.create.name.label`),name:`name`,rules:[{message:i(`dataset.create.nameRequired`),required:!0}],children:(0,R.jsx)(ve,{autoFocus:!0,placeholder:i(`dataset.create.name.placeholder`)})}),(0,R.jsx)(S.Item,{label:i(`dataset.create.description.label`),name:`description`,children:(0,R.jsx)(P,{placeholder:i(`dataset.create.description.placeholder`),rows:3})}),(0,R.jsx)(S.Item,{extra:i(`dataset.evalMode.hint`),label:i(`evalMode.label`),name:`evalMode`,children:(0,R.jsx)(_e,{allowClear:!0,placeholder:i(`evalMode.placeholder`),optionRender:e=>(0,R.jsxs)(u,{gap:4,style:{paddingBlock:4},children:[(0,R.jsx)(`div`,{children:e.label}),(0,R.jsx)(M,{fontSize:12,type:`secondary`,children:i(`evalMode.${e.value}.desc`)})]}),options:[{label:i(`evalMode.equals`),value:`equals`},{label:i(`evalMode.contains`),value:`contains`},{label:i(`evalMode.llm-rubric`),value:`llm-rubric`},{label:i(`evalMode.answer-relevance`),value:`answer-relevance`},{label:i(`evalMode.external`),value:`external`}]})}),(m===`llm-rubric`||m===`answer-relevance`)&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(S.Item,{initialValue:`aihubmix`,label:`Provider`,name:[`evalConfig`,`provider`],children:(0,R.jsx)(P,{placeholder:`LLM provider (e.g. openai, azure)`,rows:1})}),(0,R.jsx)(S.Item,{initialValue:`gpt-5-nano`,label:`Model`,name:[`evalConfig`,`model`],children:(0,R.jsx)(P,{placeholder:`LLM model to use for evaluation (e.g. gpt-4)`,rows:1})}),(0,R.jsx)(S.Item,{label:`System Prompt`,name:[`evalConfig`,`systemRole`],children:(0,R.jsx)(P,{placeholder:`Optional system prompt for the LLM judge`,rows:3})}),(0,R.jsx)(S.Item,{label:`Eval Prompt`,name:[`evalConfig`,`criteria`],children:(0,R.jsx)(P,{placeholder:`Prompt template for the LLM judge`,rows:3})}),(0,R.jsx)(S.Item,{label:i(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,R.jsx)(P,{placeholder:i(`evalMode.prompt.placeholder`),rows:3})})]}),(0,R.jsxs)(u,{gap:12,style:{marginBlockStart:4},children:[(0,R.jsx)(`span`,{className:z.sectionLabel,children:i(`dataset.create.preset.label`)}),g.map(([e,t])=>(0,R.jsxs)(u,{gap:8,children:[(0,R.jsx)(M,{color:v.colorTextTertiary,fontSize:12,children:Be[e]||e}),(0,R.jsx)(`div`,{className:z.presetGrid,children:t.map(e=>{let t=d===e.id;return(0,R.jsx)(`div`,{"aria-pressed":t,className:`${z.presetCard} ${t?z.presetCardSelected:``}`,role:`button`,tabIndex:0,onClick:()=>p(e.id),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),p(e.id))},children:(0,R.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,children:[(0,R.jsx)(f,{className:z.presetIcon,flex:`none`,height:36,width:36,children:(0,R.jsx)(l,{icon:e.icon,size:18})}),(0,R.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,R.jsx)(M,{ellipsis:!0,weight:500,children:e.name}),(0,R.jsx)(M,{ellipsis:!0,color:v.colorTextTertiary,fontSize:12,children:e.description})]}),t&&(0,R.jsx)(`span`,{className:z.selectedMark,children:(0,R.jsx)(l,{icon:oe,size:12})})]})},e.id)})})]},e))]})]})}})),Ue,We,Ge=e((()=>{N(),i(),Ue=t(o()),We=({formId:e,loading:t})=>{let{t:n}=a(`eval`),{close:r}=he();return(0,Ue.jsxs)(de,{children:[(0,Ue.jsx)(m,{disabled:t,onClick:r,children:n(`common.cancel`)}),(0,Ue.jsx)(m,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`common.update`)})]})}})),Ke,qe,Je=e((()=>{n(),Oe(),He(),Ge(),Ke=t(o()),qe=e=>Ae({renderContent:({formId:t,setLoading:n})=>(0,Ke.jsx)(Ve,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,Ke.jsx)(We,{formId:e,loading:t}),title:r(`dataset.edit.title`,{ns:`eval`}),width:600})})),Ye,Xe=e((()=>{x(),Ye={choices:v.colorWarning,expected:v.colorSuccess,input:v.colorInfo}})),B,V,Ze,Qe,$e,et,tt,nt,rt,it,at,ot=e((()=>{F(),N(),_(),x(),B=t(s()),i(),Xe(),V=t(o()),Ze=new Set([`input`,`question`,`prompt`,`query`,`text`,`instruction`,`problem`]),Qe=new Set([`expected`,`answer`,`ideal`,`target`,`output`,`response`,`label`,`ground_truth`,`groundtruth`]),$e=new Set([`category`,`topic`,`type`,`subject`,`class`,`tag`]),et=new Set([`choices`,`options`,`alternatives`,`candidates`]),tt=new Set([`id`,`number`,`index`,`no`,`order`,`sort_order`]),nt=(e,t)=>{let n={},r=!1,i=!1,a=!1,o=!1,s=!1,c=t?new Set(t.fieldInference.input.map(e=>e.toLowerCase())):Ze,l=t?new Set(t.fieldInference.expected.map(e=>e.toLowerCase())):Qe,u=t?new Set(t.fieldInference.choices.map(e=>e.toLowerCase())):et,d=t?new Set(t.fieldInference.category.map(e=>e.toLowerCase())):$e,f=t?.fieldInference.sortOrder?new Set(t.fieldInference.sortOrder.map(e=>e.toLowerCase())):tt,p=new Set(t?t.requiredFields.map(e=>e.toLowerCase()):[]),m=new Set(t?t.optionalFields.map(e=>e.toLowerCase()):[]);for(let t of e){let e=t.toLowerCase().trim();!r&&c.has(e)?(n[t]=`input`,r=!0):!i&&l.has(e)?(n[t]=`expected`,i=!0):!o&&u.has(e)?(n[t]=`choices`,o=!0):!a&&d.has(e)?(n[t]=`category`,a=!0):!s&&f.has(e)?(n[t]=`sortOrder`,s=!0):p.has(e)||m.has(e)?n[t]=`metadata`:n[t]=`ignore`}return!r&&e.length>0&&(n[e[0]]=`input`),n},rt={category:160,choices:200,expected:300,ignore:100,input:800,metadata:160,sortOrder:120},it=new Set([`input`,`expected`]),at=(0,B.memo)(({headers:e,mapping:t,onMappingChange:n,preview:r,delimiter:i,onDelimiterChange:o,totalCount:s})=>{let{t:c}=a(`eval`),[l,d]=(0,B.useState)(!0),f=Object.values(t).includes(`choices`),p=Object.values(t).includes(`ignore`),m=(0,B.useMemo)(()=>l?e.filter(e=>t[e]!==`ignore`):e,[e,t,l]),g=e=>Ye[e]||v.colorTextTertiary,_=[{desc:`inputDesc`,label:`input`,value:`input`},{desc:`expectedDesc`,label:`expected`,value:`expected`},{desc:`choicesDesc`,label:`choices`,value:`choices`},{desc:`categoryDesc`,label:`category`,value:`category`},{desc:`sortOrderDesc`,label:`sortOrder`,value:`sortOrder`},{desc:`metadataDesc`,label:`metadata`,value:`metadata`},{desc:`ignoreDesc`,label:`ignore`,value:`ignore`}].map(({desc:e,label:t,value:n})=>({label:(0,V.jsxs)(u,{gap:2,children:[(0,V.jsx)(M,{fontSize:12,children:c(`dataset.import.${t}`)}),(0,V.jsx)(M,{color:g(n),fontSize:12,children:c(`dataset.import.${e}`)})]}),value:n})),y=(e,r)=>{let i={...t};if(r!==`metadata`&&r!==`ignore`)for(let[e,t]of Object.entries(i))t===r&&(i[e]=`ignore`);i[e]=r,n(i)},b=(0,B.useMemo)(()=>m.map(e=>{let n=t[e],r=n===`ignore`,i=it.has(n),a=Ye[n];return{dataIndex:e,ellipsis:!i,onCell:r?()=>({style:{color:v.colorTextQuaternary}}):i?()=>({style:{verticalAlign:`top`,whiteSpace:`pre-wrap`,wordBreak:`break-word`}}):void 0,title:(0,V.jsxs)(u,{gap:2,children:[(0,V.jsx)(`span`,{style:{fontSize:14,opacity:r?.4:1},children:e}),(0,V.jsx)(_e,{options:_,popupMatchSelectWidth:200,size:`small`,value:n,variant:`borderless`,style:{color:a||(r?v.colorTextQuaternary:v.colorTextTertiary),fontSize:12,marginInlineStart:-8},onChange:t=>y(e,t)})]}),width:rt[n]}}),[m,t]),x=(0,B.useMemo)(()=>m.reduce((e,n)=>e+rt[t[n]],0),[m,t]);return(0,V.jsxs)(u,{gap:16,children:[(0,V.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,V.jsxs)(u,{gap:2,children:[(0,V.jsx)(M,{fontSize:12,type:`secondary`,weight:500,children:c(`dataset.import.step.mapping`)}),(0,V.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,V.jsx)(M,{color:v.colorTextTertiary,fontSize:12,children:c(`dataset.import.fieldMapping.desc`)}),(0,V.jsx)(M,{color:v.colorTextQuaternary,fontSize:12,style:{fontFamily:v.fontFamilyCode},children:c(`dataset.import.preview.rows`,{count:s})})]})]}),(0,V.jsxs)(u,{horizontal:!0,align:`center`,gap:16,children:[f&&(0,V.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,V.jsx)(M,{fontSize:12,style:{whiteSpace:`nowrap`},type:`secondary`,children:c(`dataset.import.expectedDelimiter.desc`)}),(0,V.jsx)(ve,{placeholder:c(`dataset.import.expectedDelimiter.placeholder`),size:`small`,style:{width:120},value:i,onChange:e=>o(e.target.value)})]}),p&&(0,V.jsx)(me,{checked:l,onChange:d,children:(0,V.jsx)(M,{fontSize:12,type:`secondary`,children:c(`dataset.import.hideSkipped`)})})]})]}),(0,V.jsx)(h,{bordered:!0,columns:b,dataSource:r.map((e,t)=>({...e,_key:t})),pagination:!1,rowKey:`_key`,scroll:{x,y:`calc(95vh - 280px)`},size:`small`})]})})})),st,H,ct,U,lt,ut,dt,ft=e((()=>{F(),N(),_(),x(),j(),st=t(s()),i(),Xe(),H=t(o()),{Dragger:ct}=ee,U=g(({css:e,cssVar:t})=>({container:e`
    overflow: hidden;

    padding: 16px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillQuaternary};
  `,dragger:e`
    .ant-upload-drag {
      border-radius: ${t.borderRadiusLG};
      transition: border-color 0.15s ease;

      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }
  `,draggerContent:e`
    min-height: 160px;
  `,fieldsWrapper:e`
    flex-wrap: wrap;
  `,formatDescription:e`
    font-family: ${t.fontFamilyCode};
    font-size: ${t.fontSizeSM};
    color: ${t.colorTextTertiary};
  `,hintText:e`
    margin: 0;
    font-size: ${t.fontSizeSM};
    color: ${t.colorTextTertiary};
  `,icon:e`
    color: ${t.colorPrimary};
  `,iconCenter:e`
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius};
    background: ${t.colorBgElevated};
  `,presetDescription:e`
    font-size: ${t.fontSizeSM};
    color: ${t.colorTextSecondary};
  `,presetName:e`
    font-size: ${t.fontSizeLG};
    font-weight: 600;
    color: ${t.colorText};
  `,progressWrapper:e`
    width: 100%;
    max-width: 320px;
  `,roleLabel:e`
    font-size: ${t.fontSizeSM};
  `,sectionLabel:e`
    font-size: ${t.fontSizeSM};
    font-weight: 500;
    color: ${t.colorTextSecondary};
  `,uploadText:e`
    margin: 0;
    font-size: ${t.fontSizeLG};
    font-weight: 500;
    color: ${t.colorText};
  `})),lt=[`input`,`expected`,`choices`,`category`,`sortOrder`],ut=(e,t)=>{let n=e.toLowerCase();for(let e of lt)if(t[e]?.some(e=>e.toLowerCase()===n))return e},dt=(0,st.memo)(({onFileSelect:e,loading:t,preset:n,uploadProgress:r})=>{let{t:i}=a(`eval`),o=(0,st.useMemo)(()=>{if(!n)return[];let e=n.requiredFields.map(e=>({name:e,required:!0,role:ut(e,n.fieldInference)})),t=n.optionalFields.map(e=>({name:e,required:!1,role:ut(e,n.fieldInference)}));return[...e,...t]},[n]);return(0,H.jsxs)(u,{gap:16,children:[n&&(0,H.jsxs)(u,{className:U.container,gap:16,children:[(0,H.jsxs)(u,{horizontal:!0,align:`center`,gap:12,children:[(0,H.jsx)(f,{className:U.iconCenter,flex:`none`,height:40,width:40,children:(0,H.jsx)(l,{icon:n.icon,size:20})}),(0,H.jsxs)(u,{flex:1,gap:2,style:{minWidth:0},children:[(0,H.jsx)(`div`,{className:U.presetName,children:n.name}),(0,H.jsx)(`div`,{className:U.presetDescription,children:n.description})]})]}),n.formatDescription&&(0,H.jsx)(`div`,{className:U.formatDescription,children:n.formatDescription}),o.length>0&&(0,H.jsxs)(u,{gap:8,children:[(0,H.jsx)(`span`,{className:U.sectionLabel,children:i(`dataset.import.fieldMapping`)}),(0,H.jsx)(u,{horizontal:!0,className:U.fieldsWrapper,gap:8,children:o.map(e=>{let t=e.role?Ye[e.role]:void 0;return(0,H.jsxs)(u,{align:`center`,gap:2,children:[(0,H.jsxs)(ge,{style:t?{background:`color-mix(in srgb, ${t} 15%, transparent)`,borderColor:`transparent`,color:t}:void 0,children:[e.name,e.required&&` *`]}),e.role&&(0,H.jsx)(`div`,{className:U.roleLabel,style:{color:t||void 0},children:e.role})]},e.name)})})]})]}),(0,H.jsx)(ct,{accept:`.csv,.xlsx,.xls,.json,.jsonl`,className:U.dragger,disabled:t,maxCount:1,showUploadList:!1,beforeUpload:t=>(e(t),!1),children:t?(0,H.jsxs)(f,{className:U.draggerContent,gap:16,children:[(0,H.jsx)(l,{className:U.icon,icon:T,size:{size:44,strokeWidth:1.5}}),(0,H.jsx)(`p`,{className:U.uploadText,children:i(`dataset.import.uploading`)}),r&&(0,H.jsx)(`div`,{className:U.progressWrapper,children:(0,H.jsx)(y,{percent:r.progress,size:`small`})})]}):(0,H.jsxs)(f,{className:U.draggerContent,gap:12,children:[(0,H.jsx)(l,{className:U.icon,icon:w,size:{size:44,strokeWidth:1.5}}),(0,H.jsx)(`p`,{className:U.uploadText,children:i(`dataset.import.upload.text`)}),(0,H.jsx)(`p`,{className:U.hintText,children:i(`dataset.import.upload.hint`)})]})})]})})})),W,G,pt,mt=e((()=>{N(),W=t(s()),i(),Te(),xe(),Re(),ot(),ft(),G=t(o()),pt=({close:e,datasetId:t,onImportReady:n,onStateChange:r,onSuccess:i,presetId:o,setPrev:s})=>{let{t:l}=a(`eval`),[u,d]=(0,W.useState)(0),[f,p]=(0,W.useState)(!1),[m,h]=(0,W.useState)(),[g,_]=(0,W.useState)(``),[v,y]=(0,W.useState)(``),[b,x]=(0,W.useState)([]),[ee,S]=(0,W.useState)([]),[C,te]=(0,W.useState)(0),[w,ne]=(0,W.useState)(),[T,re]=(0,W.useState)({}),[E,ie]=(0,W.useState)(``),D=(0,W.useMemo)(()=>o?Ie(o):void 0,[o]),O=Object.values(T).includes(`input`);(0,W.useEffect)(()=>{r({canImport:O,step:u})},[O,r,u]),(0,W.useEffect)(()=>{s(()=>d(0))},[s]);let ae=(0,W.useCallback)(async e=>{p(!0),h(void 0);try{let t=await Se.uploadToServerS3(e,{directory:`eval-datasets`,onProgress:(e,t)=>{h(t)}});_(t.path),y(e.name);let n=await I.parseDatasetFile({filename:e.name,pathname:t.path});x(n.headers),S(n.preview),te(n.totalCount),ne(n.format),re(nt(n.headers,D)),d(1)}catch{setTimeout(()=>{c.error(l(`dataset.import.parseError`))},0)}finally{p(!1),h(void 0)}},[D,l]),k=(0,W.useCallback)(()=>{let e=Object.entries(T).find(([,e])=>e===`input`)?.[0];if(!e)return null;let t=Object.entries(T).find(([,e])=>e===`expected`)?.[0],n=Object.entries(T).find(([,e])=>e===`choices`)?.[0],r=Object.entries(T).find(([,e])=>e===`category`)?.[0],i=Object.entries(T).find(([,e])=>e===`sortOrder`)?.[0],a=Object.entries(T).filter(([,e])=>e===`metadata`),o=a.length>0?Object.fromEntries(a.map(([e])=>[e,e])):void 0;return{category:r,choices:n,expected:t,expectedDelimiter:E||void 0,input:e,metadata:o,sortOrder:i}},[T,E]),A=(0,W.useCallback)(async()=>{let n=k();if(n)try{let r=await I.importDataset({datasetId:t,fieldMapping:{category:n.category,choices:n.choices,expected:n.expected,expectedDelimiter:n.expectedDelimiter,input:n.input,metadata:n.metadata,sortOrder:n.sortOrder},filename:v,format:w,pathname:g});setTimeout(()=>{c.success(l(`dataset.import.success`,{count:r.count}))},0),e(),i?.(t)}catch{setTimeout(()=>{c.error(l(`dataset.import.error`))},0)}},[k,e,t,v,w,i,g,l]);return(0,W.useEffect)(()=>{n({canImport:()=>O,runImport:A})},[O,n,A]),(0,G.jsxs)(G.Fragment,{children:[u===0&&(0,G.jsx)(dt,{loading:f,preset:D,uploadProgress:m,onFileSelect:ae}),u===1&&(0,G.jsx)(at,{delimiter:E,headers:b,mapping:T,preview:ee,totalCount:C,onDelimiterChange:ie,onMappingChange:re})]})}})),K,ht,gt=e((()=>{N(),i(),K=t(o()),ht=({canImport:e,importing:t,onImport:n,onPrev:r})=>{let{t:i}=a(`eval`);return(0,K.jsxs)(de,{children:[(0,K.jsx)(m,{disabled:t,onClick:r,children:i(`dataset.import.prev`)}),(0,K.jsx)(m,{disabled:!e,loading:t,type:`primary`,onClick:n,children:i(`dataset.import.confirm`)})]})}})),_t,vt,yt=e((()=>{N(),n(),mt(),gt(),_t=t(o()),vt=({datasetId:e,onSuccess:t,presetId:n})=>{let i={},a=0,o=!1,s=!1,c=async()=>{},l=()=>{},u=()=>a===0?null:(0,_t.jsx)(ht,{canImport:o,importing:s,onPrev:l,onImport:async()=>{s=!0,i.instance?.update({footer:u()});try{await c()}finally{s=!1,i.instance?.update({footer:u()})}}});return i.instance=fe({content:(0,_t.jsx)(pt,{close:()=>i.instance?.close(),datasetId:e,presetId:n,setPrev:e=>{l=e},onSuccess:t,onImportReady:e=>{c=e.runImport},onStateChange:e=>{e.step===a&&e.canImport===o||(a=e.step,o=e.canImport,i.instance?.update({footer:u()}))}}),footer:u(),maskClosable:!1,title:r(`dataset.import.title`,{ns:`eval`}),width:720}),i.instance}})),q,bt,xt,St=e((()=>{F(),N(),_(),x(),i(),Te(),q=t(o()),bt=g(({css:e})=>({sectionLabel:e`
    margin-block-end: 12px;
    font-size: ${v.fontSizeSM};
    font-weight: 500;
    color: ${v.colorTextSecondary};
  `})),xt=({datasetId:e,formId:t,onLoadingChange:n,onSuccess:r})=>{let{t:i}=a(`eval`),{close:o}=he(),[s]=S.useForm(),l=S.useWatch(`evalMode`,s);return(0,q.jsxs)(S,{form:s,layout:`vertical`,name:t,onFinish:async t=>{n?.(!0);try{let n=t.tags?t.tags.split(`,`).map(e=>e.trim()).filter(Boolean):void 0;await I.createTestCase({content:{expected:t.expected,input:t.input},datasetId:e,evalConfig:t.evalConfig?.judgePrompt?t.evalConfig:void 0,evalMode:t.evalMode||void 0,metadata:{...t.difficulty?{difficulty:t.difficulty}:{},...n?{tags:n}:{}}}),setTimeout(()=>{c.success(i(`testCase.create.success`))},0),o(),r?.(e)}catch{setTimeout(()=>{c.error(i(`testCase.create.error`))},0)}finally{n?.(!1)}},children:[(0,q.jsx)(`div`,{className:bt.sectionLabel,children:i(`caseDetail.section.testCase`)}),(0,q.jsx)(S.Item,{label:i(`testCase.create.input.label`),name:`input`,rules:[{required:!0}],children:(0,q.jsx)(P,{autoSize:{maxRows:6,minRows:3},placeholder:i(`testCase.create.input.placeholder`)})}),(0,q.jsx)(S.Item,{label:i(`testCase.create.expected.label`),name:`expected`,rules:[{message:i(`testCase.create.expected.required`),required:!0}],children:(0,q.jsx)(P,{autoSize:{maxRows:6,minRows:2},placeholder:i(`testCase.create.expected.placeholder`)})}),(0,q.jsx)(`div`,{className:bt.sectionLabel,style:{marginBlockStart:4},children:i(`caseDetail.section.scoring`)}),(0,q.jsx)(S.Item,{label:i(`evalMode.label`),name:`evalMode`,children:(0,q.jsx)(_e,{allowClear:!0,placeholder:i(`evalMode.placeholder`),optionRender:e=>(0,q.jsxs)(u,{gap:4,style:{paddingBlock:4},children:[(0,q.jsx)(`div`,{children:e.label}),(0,q.jsx)(M,{fontSize:12,type:`secondary`,children:i(`evalMode.${e.value}.desc`)})]}),options:[{label:i(`evalMode.equals`),value:`equals`},{label:i(`evalMode.contains`),value:`contains`},{label:i(`evalMode.llm-rubric`),value:`llm-rubric`}]})}),l===`llm-rubric`&&(0,q.jsx)(S.Item,{label:i(`evalMode.prompt.label`),name:[`evalConfig`,`judgePrompt`],children:(0,q.jsx)(P,{autoSize:{maxRows:8,minRows:3},placeholder:i(`evalMode.prompt.placeholder`)})}),(0,q.jsx)(ye,{children:(0,q.jsx)(be,{itemKey:`advanced`,paddingBlock:8,paddingInline:4,title:i(`testCase.create.advanced`),children:(0,q.jsxs)(u,{gap:16,style:{paddingBlockStart:8},children:[(0,q.jsx)(S.Item,{label:i(`testCase.create.difficulty.label`),name:`difficulty`,style:{marginBottom:0},children:(0,q.jsx)(_e,{allowClear:!0,placeholder:i(`testCase.create.difficulty.label`),options:[{label:i(`difficulty.easy`),value:`easy`},{label:i(`difficulty.medium`),value:`medium`},{label:i(`difficulty.hard`),value:`hard`}]})}),(0,q.jsx)(S.Item,{label:i(`testCase.create.tags.label`),name:`tags`,style:{marginBottom:0},children:(0,q.jsx)(ve,{placeholder:i(`testCase.create.tags.placeholder`)})})]})})})]})}})),J,Ct,wt=e((()=>{N(),i(),J=t(o()),Ct=({formId:e,loading:t})=>{let{t:n}=a(`eval`),{close:r}=he();return(0,J.jsxs)(de,{children:[(0,J.jsx)(m,{disabled:t,onClick:r,children:n(`common.cancel`)}),(0,J.jsx)(m,{form:e,htmlType:`submit`,loading:t,type:`primary`,children:n(`common.create`)})]})}})),Tt,Et,Dt=e((()=>{n(),Oe(),St(),wt(),Tt=t(o()),Et=e=>Ae({renderContent:({formId:t,setLoading:n})=>(0,Tt.jsx)(xt,{...e,formId:t,onLoadingChange:n}),renderFooter:({formId:e,loading:t})=>(0,Tt.jsx)(Ct,{formId:e,loading:t}),title:r(`testCase.create.title`,{ns:`eval`}),width:520})})),Ot,Y,X,kt,At=e((()=>{F(),N(),_(),x(),j(),Ot=t(s()),i(),Me(),Y=t(o()),X=g(({css:e})=>({filterButton:e`
    cursor: pointer;

    padding-block: 4px;
    padding-inline: 8px;
    border: none;

    font-size: ${v.fontSizeSM};
    font-weight: 500;
    text-transform: capitalize;

    background: transparent;

    transition:
      color 0.15s ease,
      background 0.15s ease;

    &[data-active='true'] {
      color: ${v.colorText};
      background: ${v.colorFillSecondary};
    }

    &[data-active='false'] {
      color: ${v.colorTextTertiary};

      &:hover {
        color: ${v.colorText};
      }
    }

    &:not(:first-child) {
      border-inline-start: 1px solid ${v.colorBorderSecondary};
    }

    &:focus-visible {
      outline: 2px solid ${v.colorPrimary};
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,filterContainer:e`
    overflow: hidden;
    display: flex;
    border: 1px solid ${v.colorBorderSecondary};
    border-radius: ${v.borderRadiusSM};
  `,filtersRow:e`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${v.colorBorderSecondary};
  `,summaryDot:e`
    width: 8px;
    height: 8px;
    border-radius: 999px;
  `,summaryRow:e`
    display: flex;
    gap: 16px;
    align-items: center;

    padding-block: 12px;
    padding-inline: 16px;
    border-block-end: 1px solid ${v.colorBorderSecondary};
  `,summaryValue:e`
    font-family: ${v.fontFamilyCode};
    font-size: ${v.fontSizeLG};
    font-weight: 600;
    line-height: 1;
    color: ${v.colorText};
  `,table:e`
    .ant-table {
      font-size: ${v.fontSize};
    }

    .ant-table-thead > tr > th {
      font-size: ${v.fontSizeSM};
      font-weight: 500;
      color: ${v.colorTextTertiary};
      background: ${v.colorFillQuaternary};
    }

    .ant-table-tbody > tr {
      &.row-clickable {
        cursor: pointer;
      }

      &:hover {
        background: ${v.colorFillQuaternary};
      }

      &.row-selected {
        background: ${v.colorPrimaryBg};
      }
    }
  `})),kt=(0,Ot.memo)(({testCases:e,total:t,search:n,diffFilter:r,datasetEvalMode:i,pagination:o,onSearchChange:s,onDiffFilterChange:c,onPageChange:l,onPreview:f,onEdit:g,onDelete:_,onAddCase:y,onImport:x,selectedId:ee,readOnly:S})=>{let{t:C}=a(`eval`),w=(0,Ot.useMemo)(()=>{let t={easy:0,hard:0,medium:0};for(let n of e){let e=n?.metadata?.difficulty;(e===`easy`||e===`medium`||e===`hard`)&&(t[e]+=1)}let n=t.easy+t.medium+t.hard;return{counts:t,segments:[{color:v.colorSuccess,value:t.easy},{color:v.colorWarning,value:t.medium},{color:v.colorError,value:t.hard}],tagged:n}},[e]),ne=(0,Ot.useMemo)(()=>{let e=[{dataIndex:`id`,key:`index`,render:(e,t,n)=>(0,Y.jsx)(`span`,{style:{color:v.colorTextTertiary,fontFamily:v.fontFamilyCode,fontSize:12},children:(o.current-1)*o.pageSize+n+1}),title:`#`,width:48},{dataIndex:[`content`,`input`],key:`input`,render:e=>(0,Y.jsx)(`p`,{style:{color:v.colorText,margin:0,whiteSpace:`pre-wrap`,wordBreak:`break-word`},children:e}),title:C(`table.columns.input`)},{dataIndex:[`content`,`expected`],ellipsis:!0,key:`expected`,render:e=>(0,Y.jsx)(`span`,{style:{color:v.colorTextSecondary},children:e||`-`}),title:C(`table.columns.expected`),width:200},{dataIndex:`evalMode`,key:`evalMode`,render:e=>{let t=e??i;if(!t)return(0,Y.jsx)(`span`,{style:{color:v.colorTextQuaternary},children:`-`});let n=!e&&!!i;return(0,Y.jsx)(`span`,{style:{color:n?v.colorTextQuaternary:v.colorTextSecondary,fontSize:12,fontStyle:n?`italic`:`normal`},children:C(`evalMode.${t}`)})},title:C(`table.columns.evalMode`),width:120},{dataIndex:[`content`,`category`],key:`category`,render:e=>(0,Y.jsx)(`span`,{style:{color:v.colorTextTertiary,fontSize:12},children:e||`-`}),title:C(`table.columns.category`),width:120}];return S||e.push({key:`actions`,render:(e,t)=>(0,Y.jsx)(`div`,{onClick:e=>e.stopPropagation(),children:(0,Y.jsx)(d,{trigger:[`click`],items:[{icon:(0,Y.jsx)(te,{size:14}),key:`edit`,label:C(`common.edit`),onClick:()=>g?.(t)},{type:`divider`},{danger:!0,icon:(0,Y.jsx)(O,{size:14}),key:`delete`,label:C(`common.delete`),onClick:()=>_?.(t)}],children:(0,Y.jsx)(p,{icon:ue,size:`small`})})}),width:48}),e},[o,S,g,_,C,i]);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(`div`,{className:X.summaryRow,children:[(0,Y.jsxs)(u,{gap:2,children:[(0,Y.jsx)(`span`,{className:X.summaryValue,children:t}),(0,Y.jsx)(M,{color:v.colorTextTertiary,fontSize:12,children:C(`benchmark.detail.stats.cases`)})]}),w.tagged>0&&(0,Y.jsxs)(u,{flex:1,gap:6,style:{maxWidth:320,minWidth:0},children:[(0,Y.jsx)(Ne,{segments:w.segments}),(0,Y.jsx)(u,{horizontal:!0,gap:12,style:{flexWrap:`wrap`},children:[`easy`,`medium`,`hard`].map(e=>(0,Y.jsxs)(u,{horizontal:!0,align:`center`,gap:6,children:[(0,Y.jsx)(`span`,{className:X.summaryDot,style:{background:e===`easy`?v.colorSuccess:e===`medium`?v.colorWarning:v.colorError}}),(0,Y.jsxs)(M,{color:v.colorTextTertiary,fontSize:12,children:[C(`difficulty.${e}`),` `,w.counts[e]]})]},e))})]})]}),(0,Y.jsxs)(`div`,{className:X.filtersRow,children:[(0,Y.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,Y.jsxs)(`div`,{style:{position:`relative`},children:[(0,Y.jsx)(A,{size:14,style:{color:v.colorTextTertiary,left:12,position:`absolute`,top:`50%`,transform:`translateY(-50%)`}}),(0,Y.jsx)(ve,{placeholder:C(`testCase.search.placeholder`),size:`small`,value:n,style:{fontSize:12,paddingLeft:32,width:192},onChange:e=>{s(e.target.value)}})]}),(0,Y.jsx)(`div`,{className:X.filterContainer,children:[`all`,`easy`,`medium`,`hard`].map(e=>(0,Y.jsx)(`button`,{className:X.filterButton,"data-active":r===e,onClick:()=>{c(e)},children:e},e))})]}),!S&&(0,Y.jsxs)(u,{horizontal:!0,gap:8,children:[(0,Y.jsx)(m,{icon:le,size:`small`,onClick:x,children:C(`testCase.actions.import`)}),(0,Y.jsx)(m,{icon:ce,size:`small`,type:`primary`,onClick:y,children:C(`testCase.actions.add`)})]})]}),(0,Y.jsx)(`div`,{className:X.table,children:(0,Y.jsx)(h,{columns:ne,dataSource:e,pagination:!1,rowKey:`id`,size:`small`,rowClassName:e=>{let t=[];return S||t.push(`row-clickable`),e.id===ee&&t.push(`row-selected`),t.join(` `)},onRow:S?void 0:e=>({onClick:()=>f?.(e)})})}),t>o.pageSize&&(0,Y.jsx)(u,{horizontal:!0,align:`center`,justify:`end`,style:{paddingBlock:12,paddingInline:16},children:(0,Y.jsx)(b,{simple:!0,current:o.current,pageSize:o.pageSize,size:`small`,total:t,onChange:l})})]})})})),jt,Z,Mt,Nt,Pt=e((()=>{F(),N(),x(),j(),jt=t(s()),i(),Z=t(o()),Mt=g(({css:e})=>({emptyCard:e`
    align-items: center;
    justify-content: center;

    padding-block: 64px;
    padding-inline: 24px;
    border: 1px dashed ${v.colorBorderSecondary};
    border-radius: ${v.borderRadiusLG};

    text-align: center;

    background: ${v.colorFillQuaternary};
  `,iconBox:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;
    border-radius: ${v.borderRadiusLG};

    background: ${v.colorFillTertiary};
  `})),Nt=(0,jt.memo)(({onCreate:e})=>{let{t}=a(`eval`);return(0,Z.jsxs)(u,{className:Mt.emptyCard,gap:16,children:[(0,Z.jsx)(`div`,{className:Mt.iconBox,children:(0,Z.jsx)(l,{icon:k,size:28,style:{color:v.colorTextTertiary}})}),(0,Z.jsxs)(u,{align:`center`,gap:4,children:[(0,Z.jsx)(M,{weight:600,children:t(`run.empty.title`)}),(0,Z.jsx)(M,{color:v.colorTextTertiary,fontSize:12,children:t(`run.empty.descriptionBenchmark`)})]}),(0,Z.jsx)(m,{icon:ce,size:`small`,type:`primary`,onClick:e,children:t(`run.actions.create`)})]})})})),Ft,Q,$,It,Lt=e((()=>{F(),N(),x(),j(),Ft=t(s()),i(),Ce(),De(),Me(),ke(),Pe(),Q=t(o()),$=g(({css:e})=>({arrowIcon:e`
    flex-shrink: 0;
    color: ${v.colorTextTertiary};
    transition: transform 0.15s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,card:e`
    padding: 20px;
    border: 1px solid ${v.colorBorderSecondary};
    border-radius: ${v.borderRadiusLG};

    background: ${v.colorBgContainer};

    transition:
      border-color 0.15s ease,
      background 0.15s ease;

    &:hover {
      border-color: ${v.colorBorder};
    }

    &:hover .run-card-arrow {
      transform: translateX(2px);
      color: ${v.colorText};
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;

      &:hover .run-card-arrow {
        transform: none;
      }
    }
  `,cardLink:e`
    text-decoration: none;
  `,dropdownTrigger:e`
    cursor: pointer;

    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: ${v.borderRadiusSM};

    color: ${v.colorTextTertiary};

    transition:
      color 0.15s ease,
      background 0.15s ease;

    &:hover {
      color: ${v.colorText};
      background: ${v.colorFillSecondary};
    }

    &:focus-visible {
      outline: 2px solid ${v.colorPrimary};
      outline-offset: -1px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,hero:e`
    padding: 16px;
    border-radius: ${v.borderRadius};
    background: ${v.colorFillQuaternary};
  `,heroValue:e`
    font-family: ${v.fontFamilyCode};
    font-size: ${v.fontSizeHeading2};
    font-weight: 600;
    line-height: 1;
    color: ${v.colorText};
  `,meta:e`
    font-size: ${v.fontSizeSM};
    color: ${v.colorTextTertiary};
  `,metaHighlight:e`
    font-size: ${v.fontSizeSM};
    color: ${v.colorTextSecondary};
  `,monoText:e`
    font-family: ${v.fontFamilyCode};
  `,name:e`
    overflow: hidden;

    font-size: ${v.fontSizeLG};
    font-weight: 600;
    color: ${v.colorText};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,progressFill:e`
    height: 100%;
    border-radius: 999px;
    background: ${v.colorPrimary};
    transition: width 0.3s ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `,progressTrack:e`
    overflow: hidden;

    width: 100%;
    height: 8px;
    border-radius: 999px;

    background: ${v.colorFillSecondary};
  `,separator:e`
    color: ${v.colorBorderSecondary};
  `,stat:e`
    display: inline-flex;
    gap: 4px;
    align-items: center;
    font-size: ${v.fontSizeSM};
  `,statError:e`
    color: ${v.colorError};
  `,statSuccess:e`
    color: ${v.colorSuccess};
  `,statWarning:e`
    color: ${v.colorWarning};
  `,unit:e`
    font-size: ${v.fontSizeSM};
    color: ${v.colorTextTertiary};
  `})),It=(0,Ft.memo)(({benchmarkId:e,run:t,onRefresh:n,onEdit:r})=>{let{t:i}=a(`eval`),o=Ee(e=>e.deleteRun),s=Ee(e=>e.startRun),f=Ee(e=>e.abortRun),p=t.metrics,m=p?.totalCases??0,h=p?.passedCases??0,g=p?.failedCases??0,_=p?.errorCases??0,y=h+g+_,b=m>0?y/m*100:0,x=p?.passRate==null?0:p.passRate*100,ee=(t.status===`completed`||t.status===`running`)&&y>0,S=t.status===`idle`||t.status===`failed`||t.status===`aborted`,w=t.status===`running`||t.status===`pending`,ne=m>0&&t.status!==`completed`,T=e=>e?(e instanceof Date?e:new Date(e)).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`}):``,D=e=>{e.preventDefault(),e.stopPropagation(),pe({content:i(`run.actions.start.confirm`),okText:i(`run.actions.start`),onOk:async()=>{try{await s(t.id,t.status!==`idle`),await n?.()}catch(e){c.error(e?.message||`Failed to start run`)}},title:i(`run.actions.start`)})},k=e=>{e?.preventDefault(),e?.stopPropagation(),pe({content:i(`run.actions.abort.confirm`),okText:i(`run.actions.abort`),okButtonProps:{danger:!0},onOk:async()=>{await f(t.id),await n?.()},title:i(`run.actions.abort`)})},A=e=>{e?.preventDefault(),e?.stopPropagation(),pe({content:i(`run.actions.delete.confirm`),okButtonProps:{danger:!0},okText:i(`run.actions.delete`),onOk:async()=>{await o(t.id),await n?.()},title:i(`run.actions.delete`)})},oe=e=>{e?.preventDefault(),e?.stopPropagation(),r?.(t)},ce=[...S?[{icon:(0,Q.jsx)(C,{size:14}),key:`start`,label:i(`run.actions.start`),onClick:({domEvent:e})=>D(e)},{type:`divider`}]:[],{icon:(0,Q.jsx)(te,{size:14}),key:`edit`,label:i(`run.actions.edit`),onClick:({domEvent:e})=>oe(e)},...w?[{danger:!0,icon:(0,Q.jsx)(ae,{size:14}),key:`abort`,label:i(`run.actions.abort`),onClick:({domEvent:e})=>k(e)}]:[],{type:`divider`},{danger:!0,icon:(0,Q.jsx)(O,{size:14}),key:`delete`,label:i(`run.actions.delete`),onClick:({domEvent:e})=>A(e)}],le=[t.createdAt&&{text:T(t.createdAt)},t.datasetName&&{text:t.datasetName},t.targetAgent?.title&&{text:t.targetAgent.title},t.targetAgent?.model&&{className:$.monoText,text:t.targetAgent.model},p?.duration!=null&&{className:$.metaHighlight,text:Fe(p.duration)},p?.totalCost!=null&&{className:$.metaHighlight,text:`$${p.totalCost.toFixed(2)}`}].filter(e=>!!e);return(0,Q.jsx)(we,{className:$.cardLink,to:`/eval/bench/${e}/runs/${t.id}`,children:(0,Q.jsxs)(u,{className:$.card,gap:16,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`flex-start`,gap:12,justify:`space-between`,children:[(0,Q.jsxs)(u,{flex:1,gap:4,style:{minWidth:0},children:[(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:8,children:[(0,Q.jsx)(`span`,{className:$.name,children:t.name}),(0,Q.jsx)(je,{status:t.status})]}),le.length>0&&(0,Q.jsx)(u,{horizontal:!0,align:`center`,className:$.meta,gap:4,wrap:`wrap`,children:le.map((e,t)=>(0,Q.jsxs)(Ft.Fragment,{children:[t>0&&(0,Q.jsx)(`span`,{className:$.separator,children:`/`}),(0,Q.jsx)(`span`,{className:e.className,children:e.text})]},t))})]}),(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:4,style:{flexShrink:0},children:[(0,Q.jsx)(d,{items:ce,placement:`bottomRight`,children:(0,Q.jsx)(`span`,{className:$.dropdownTrigger,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,Q.jsx)(ue,{size:16})})}),(0,Q.jsx)(l,{className:`${$.arrowIcon} run-card-arrow`,icon:se,size:16})]})]}),ne?(0,Q.jsxs)(u,{className:$.hero,gap:10,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`center`,justify:`space-between`,children:[(0,Q.jsxs)(`span`,{className:$.meta,children:[y,`/`,m]}),(0,Q.jsxs)(`span`,{className:$.metaHighlight,children:[b.toFixed(0),`%`]})]}),(0,Q.jsx)(`div`,{className:$.progressTrack,children:(0,Q.jsx)(`div`,{className:$.progressFill,style:{width:`${b}%`}})})]}):ee?(0,Q.jsxs)(u,{className:$.hero,gap:12,children:[(0,Q.jsxs)(u,{horizontal:!0,align:`flex-end`,gap:16,justify:`space-between`,children:[(0,Q.jsx)(u,{gap:4,children:(0,Q.jsxs)(u,{horizontal:!0,align:`baseline`,gap:6,children:[(0,Q.jsxs)(`span`,{className:$.heroValue,children:[x.toFixed(0),`%`]}),(0,Q.jsx)(`span`,{className:$.unit,children:i(`run.metrics.passRate`)})]})}),(0,Q.jsxs)(u,{horizontal:!0,align:`center`,gap:12,children:[(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statSuccess}`,children:[(0,Q.jsx)(l,{icon:E,size:14}),h]}),(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statError}`,children:[(0,Q.jsx)(l,{icon:ie,size:14}),g]}),_>0&&(0,Q.jsxs)(`span`,{className:`${$.stat} ${$.statWarning}`,children:[(0,Q.jsx)(l,{icon:re,size:14}),_]})]})]}),(0,Q.jsx)(Ne,{segments:[{color:v.colorSuccess,value:h},{color:v.colorError,value:g},{color:v.colorWarning,value:_}]})]}):null]})})})}));export{kt as a,Dt as c,qe as d,Je as f,Re as h,Pt as i,vt as l,Le as m,Lt as n,At as o,L as p,Nt as r,Et as s,It as t,yt as u};