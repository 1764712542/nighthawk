import{n as e,o as t}from"./rolldown-runtime-CMxvf4Kt.js";import{cs as n,ls as r}from"./app-const-Bl9rlHwj.js";import{It as i,Lt as a,Rt as o,Tt as s,Wt as c,zt as l}from"./dialog-BebLzVzY.js";import{a as u,c as d,i as f,l as p,t as m}from"./es-CVJR_g25.js";import{t as h}from"./es-LELdnrjB.js";import{Xa as g,Za as _}from"./index-Djd-5Nq9.js";var v,y=e((()=>{r(),v=({children:e,trace:t})=>null})),b,x=e((()=>{b=e=>{let t=e?.reason;if(t!==`outside-press`&&t!==`focus-out`)return!1;let n=e?.event,r=[n?.target??null];return n&&`relatedTarget`in n&&r.push(n.relatedTarget),r.some(e=>e instanceof Element&&e.closest(`[role="dialog"],[role="alertdialog"]`)!==null)}})),S,C,w,T,E,D,O=e((()=>{h(),m(),S=t(r()),y(),g(),x(),C=t(n()),w=u(({css:e,cssVar:t})=>({dropdownMenu:e`
    .ant-avatar {
      margin-inline-end: var(--ant-margin-xs);
    }
  `,trigger:e`
    outline: none;

    /* Keyboard users still need a landmark for where Enter will land. */
    &:focus-visible {
      border-radius: ${t.borderRadius};
      outline: 2px solid ${t.colorPrimary};
      outline-offset: 2px;
    }
  `})),T=f`
  /* base-ui DropdownMenu.Item reserves an indicator slot (empty aria-hidden
     span) for checkbox/radio variants. Our menu items don't use it, so the
     empty slot only contributes left whitespace. Collapse it across both
     the top-level menu and any nested submenu popups. */
  [role='menu'] [role='menuitem'] > * > span[aria-hidden='true']:empty,
  [role='menu'] [role='menuitem'] > span[aria-hidden='true']:empty {
    display: none;
  }

  [data-submenu] > [role='menu'] {
    will-change: auto;

    /* Submenus have 0ms animation, so disabling compositing is safe.
       Both will-change:transform AND the inherited transform: scaleY(1) from
       Menu.Positioner ('& > *' rule) create a new containing block, which
       breaks position:sticky for descendants and lets items leak below the
       popup. Disable both for submenus where animation is already 0ms. */
    transform: none !important;

    overflow: hidden auto;
    overscroll-behavior: contain;

    /* The popup is shrink-to-fit, so one long item title would otherwise widen
       the whole submenu. Bound the container and let rows fill it — the
       min-width:0 chain below turns the overflow into an ellipsis. */
    max-width: min(90vw, 400px);
    max-height: min(50vh, 640px);
    padding-block-end: 4px;
  }

  /* The skill submenu (the one with the search header) has collapsible groups,
     so shrink-to-fit makes it resize every time a group opens or closes —
     measured 243px collapsed vs 400px expanded, the jump driven by whichever
     title happens to be longest. Pin the width so the container stays put and
     the rows ellipsize into it. */
  [data-submenu] > [role='menu']:has(.lobe-skill-submenu-search) {
    width: min(90vw, 400px);
  }

  /* base-ui menu-item internal containers are flex by default but don't set
     min-width:0, which blocks descendant text-overflow:ellipsis from working.
     Force min-width:0 down the chain so long titles can truncate. */
  [data-submenu] > [role='menu'] [role='menuitem'] > *,
  [data-submenu] > [role='menu'] [role='menuitem'] > * > * {
    min-width: 0;
  }

  /* Align base-ui separator color with the stats-footer's border-block-start
     (colorBorderSecondary) so all dividers in the menu look consistent. */
  [data-submenu] > [role='menu'] [role='separator'] {
    background: ${d.colorBorderSecondary};
  }

  /* base-ui group label is rendered inside a [role='presentation'] with its
     own default vertical padding, which stacks with our activationGroupHeader
     padding and inflates the gap above/below group headers. Reset only the
     vertical padding for skill activation groups; other groups (e.g. the
     Knowledge submenu's Libraries/Files headers) keep their default padding. */
  [data-submenu] > [role='menu'] [role='group']:has([data-skill-activation-group]) > [role='presentation'] {
    padding-block: 0;
  }

  /* The skill submenu is the only submenu that uses a header slot (the search
     bar). renderDropdownMenuItems wraps it in DropdownMenuHeader's default
     8px/12px padding — which can't be reached via props — leaving the borderless
     search floating in a tall gap and indented past the rows below. Trim the
     padding so the search sits snug against the divider and its icon lines up
     with the 16px icon column shared by the menu rows. */
  [data-submenu] > [role='menu'] > *:has(.lobe-skill-submenu-search) {
    padding-block: 4px;
    padding-inline: 4px;
  }

  /* Submenu triggers that opt into a custom trailing chevron (the Plus menu's
     Skills / Web Search / Attachments rows mark their extra icon with .lobe-submenu-chevron)
     render that chevron themselves; hide base-ui's default triangle submenu arrow
     — always the last child of the trigger's content — so the two don't stack. */
  .lobe-submenu-chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }

  [role='menuitem']:has(.lobe-submenu-chevron) > * > *:last-child {
    display: none;
  }
`,E=(0,S.memo)(({close:e,decorate:t,useItems:n})=>(0,C.jsx)(C.Fragment,{children:s(t(n({close:e})??[]))})),E.displayName=`ActionDropdownMenuItemsHost`,D=(0,S.memo)(({children:e,defaultOpen:t,menu:n,trigger:r,maxHeight:u,maxWidth:d,minHeight:f,minWidth:m,onOpenChange:h,onOpenChangeComplete:g,open:y,placement:x=`top`,popupProps:D,popupRender:O,portalProps:k,positionerProps:A,prefetch:j,triggerProps:M,...N})=>{let P=_(),[F,I]=(0,S.useState)(!!t),L=(0,S.useRef)(null);(0,S.useEffect)(()=>{y!==void 0&&I(y)},[y]);let R=(0,S.useCallback)((e,t)=>{if(!e&&(t?.reason===`sibling-open`||b(t))){t?.cancel?.();return}h?.(e,t),y===void 0&&I(e)},[h,y]),z=(0,S.useCallback)(e=>{g?.(e),e||(L.current=null)},[g]),B=y??F,V=(0,S.useMemo)(()=>{if(r)return r===`both`?!0:Array.isArray(r)?r.includes(`hover`):r===`hover`},[r]),H=(0,S.useMemo)(()=>V===void 0?{...M}:{...M,openOnHover:V},[V,M]),U=(0,S.useCallback)(e=>e&&e.map(e=>{if(!e||`type`in e&&e.type===`divider`)return e;if(`type`in e&&e.type===`group`)return{...e,children:e.children?U(e.children):e.children};if(`type`in e&&(e.type===`switch`||e.type===`checkbox`))return e;if(`children`in e){let t=e.onOpenChange;return{...e,children:e.children?U(e.children):e.children,onOpenChange:(e,n)=>{if(!e&&b(n)){n?.cancel?.();return}t?.(e,n)},type:`submenu`}}let t=e,r=t.onClick,i=t.closeOnClick,a=i===!1,o=t.label,s=(0,S.isValidElement)(o),c=i??(s?!1:void 0);return{...t,...c===void 0?null:{closeOnClick:c},onClick:e=>{if(a){e.domEvent.stopPropagation(),n.onClick?.(e),r?.(e);return}e.domEvent.preventDefault(),n.onClick?.(e),r?.(e)}}}),[n]),W=(0,S.useCallback)(()=>{h?.(!1,{reason:`item-press`}),y===void 0&&I(!1)},[h,y]),G=(0,S.useMemo)(()=>{if(n.useItems)return null;if(!j&&!B)return L.current;let e=s(U((typeof n.items==`function`?n.items():n.items)??[]));return L.current=e,e},[U,B,n,j]),K=(0,S.useMemo)(()=>{let e=n.useItems?(0,C.jsx)(E,{close:W,decorate:U,useItems:n.useItems}):G;return O?O(e??null):e},[W,U,n.useItems,O,G]),q=(0,S.useMemo)(()=>{let e=D?.className;return typeof e==`function`?t=>p(w.dropdownMenu,n.className,e(t)):p(w.dropdownMenu,n.className,e)},[n.className,D?.className]),J=(0,S.useMemo)(()=>{let e={maxHeight:u,maxWidth:P?void 0:d,minHeight:f,minWidth:P?void 0:m,overflowX:`hidden`,overflowY:`scroll`,width:P?`100vw`:void 0},t=D?.style;return typeof t==`function`?r=>({...e,...n.style,...t(r)}):{...e,...n.style,...t}},[P,u,d,n.style,f,m,D?.style]),Y=(0,S.useMemo)(()=>D?{...D,className:q,style:J}:{className:q,style:J},[D,q,J]),{container:X,...Z}=k??{},Q=(0,S.useMemo)(()=>{if(!X)return X??void 0;if(typeof X==`object`&&`current`in X){let e=X.current;return e?typeof ShadowRoot<`u`&&e instanceof ShadowRoot?e.host:e:null}return typeof ShadowRoot<`u`&&X instanceof ShadowRoot?X.host:X},[X]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(T,{}),(0,C.jsxs)(l,{...N,defaultOpen:t,open:y,onOpenChange:R,onOpenChangeComplete:z,children:[(0,C.jsx)(c,{className:w.trigger,...H,children:e}),(0,C.jsx)(a,{container:Q,...Z,children:(0,C.jsx)(o,{...A,hoverTrigger:!!H?.openOnHover,placement:P?`top`:x,children:(0,C.jsx)(i,{...Y,children:(0,C.jsx)(S.Suspense,{fallback:(0,C.jsx)(v,{trace:`ActionDropdown > popup`}),children:K})})})})]})]})})}));export{y as i,O as n,v as r,D as t};