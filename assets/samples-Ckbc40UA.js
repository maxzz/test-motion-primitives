function bl(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var m0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function va(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dn={exports:{}},ht={},On={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs;function wl(){if(bs)return M;bs=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),m=Symbol.iterator;function p(h){return h===null||typeof h!="object"?null:(h=m&&h[m]||h["@@iterator"],typeof h=="function"?h:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,v={};function b(h,k,O){this.props=h,this.context=k,this.refs=v,this.updater=O||x}b.prototype.isReactComponent={},b.prototype.setState=function(h,k){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,k,"setState")},b.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function y(){}y.prototype=b.prototype;function w(h,k,O){this.props=h,this.context=k,this.refs=v,this.updater=O||x}var j=w.prototype=new y;j.constructor=w,g(j,b.prototype),j.isPureReactComponent=!0;var A=Array.isArray,N=Object.prototype.hasOwnProperty,z={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function C(h,k,O){var U,F={},W=null,X=null;if(k!=null)for(U in k.ref!==void 0&&(X=k.ref),k.key!==void 0&&(W=""+k.key),k)N.call(k,U)&&!I.hasOwnProperty(U)&&(F[U]=k[U]);var q=arguments.length-2;if(q===1)F.children=O;else if(1<q){for(var G=Array(q),fe=0;fe<q;fe++)G[fe]=arguments[fe+2];F.children=G}if(h&&h.defaultProps)for(U in q=h.defaultProps,q)F[U]===void 0&&(F[U]=q[U]);return{$$typeof:e,type:h,key:W,ref:X,props:F,_owner:z.current}}function P(h,k){return{$$typeof:e,type:h.type,key:k,ref:h.ref,props:h.props,_owner:h._owner}}function _(h){return typeof h=="object"&&h!==null&&h.$$typeof===e}function B(h){var k={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(O){return k[O]})}var R=/\/+/g;function re(h,k){return typeof h=="object"&&h!==null&&h.key!=null?B(""+h.key):k.toString(36)}function se(h,k,O,U,F){var W=typeof h;(W==="undefined"||W==="boolean")&&(h=null);var X=!1;if(h===null)X=!0;else switch(W){case"string":case"number":X=!0;break;case"object":switch(h.$$typeof){case e:case t:X=!0}}if(X)return X=h,F=F(X),h=U===""?"."+re(X,0):U,A(F)?(O="",h!=null&&(O=h.replace(R,"$&/")+"/"),se(F,k,O,"",function(fe){return fe})):F!=null&&(_(F)&&(F=P(F,O+(!F.key||X&&X.key===F.key?"":(""+F.key).replace(R,"$&/")+"/")+h)),k.push(F)),1;if(X=0,U=U===""?".":U+":",A(h))for(var q=0;q<h.length;q++){W=h[q];var G=U+re(W,q);X+=se(W,k,O,G,F)}else if(G=p(h),typeof G=="function")for(h=G.call(h),q=0;!(W=h.next()).done;)W=W.value,G=U+re(W,q++),X+=se(W,k,O,G,F);else if(W==="object")throw k=String(h),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return X}function pe(h,k,O){if(h==null)return h;var U=[],F=0;return se(h,U,"","",function(W){return k.call(O,W,F++)}),U}function ke(h){if(h._status===-1){var k=h._result;k=k(),k.then(function(O){(h._status===0||h._status===-1)&&(h._status=1,h._result=O)},function(O){(h._status===0||h._status===-1)&&(h._status=2,h._result=O)}),h._status===-1&&(h._status=0,h._result=k)}if(h._status===1)return h._result.default;throw h._result}var L={current:null},H={transition:null},le={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:H,ReactCurrentOwner:z};function de(){throw Error("act(...) is not supported in production builds of React.")}return M.Children={map:pe,forEach:function(h,k,O){pe(h,function(){k.apply(this,arguments)},O)},count:function(h){var k=0;return pe(h,function(){k++}),k},toArray:function(h){return pe(h,function(k){return k})||[]},only:function(h){if(!_(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},M.Component=b,M.Fragment=n,M.Profiler=i,M.PureComponent=w,M.StrictMode=r,M.Suspense=c,M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,M.act=de,M.cloneElement=function(h,k,O){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var U=g({},h.props),F=h.key,W=h.ref,X=h._owner;if(k!=null){if(k.ref!==void 0&&(W=k.ref,X=z.current),k.key!==void 0&&(F=""+k.key),h.type&&h.type.defaultProps)var q=h.type.defaultProps;for(G in k)N.call(k,G)&&!I.hasOwnProperty(G)&&(U[G]=k[G]===void 0&&q!==void 0?q[G]:k[G])}var G=arguments.length-2;if(G===1)U.children=O;else if(1<G){q=Array(G);for(var fe=0;fe<G;fe++)q[fe]=arguments[fe+2];U.children=q}return{$$typeof:e,type:h.type,key:F,ref:W,props:U,_owner:X}},M.createContext=function(h){return h={$$typeof:o,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:a,_context:h},h.Consumer=h},M.createElement=C,M.createFactory=function(h){var k=C.bind(null,h);return k.type=h,k},M.createRef=function(){return{current:null}},M.forwardRef=function(h){return{$$typeof:l,render:h}},M.isValidElement=_,M.lazy=function(h){return{$$typeof:u,_payload:{_status:-1,_result:h},_init:ke}},M.memo=function(h,k){return{$$typeof:d,type:h,compare:k===void 0?null:k}},M.startTransition=function(h){var k=H.transition;H.transition={};try{h()}finally{H.transition=k}},M.unstable_act=de,M.useCallback=function(h,k){return L.current.useCallback(h,k)},M.useContext=function(h){return L.current.useContext(h)},M.useDebugValue=function(){},M.useDeferredValue=function(h){return L.current.useDeferredValue(h)},M.useEffect=function(h,k){return L.current.useEffect(h,k)},M.useId=function(){return L.current.useId()},M.useImperativeHandle=function(h,k,O){return L.current.useImperativeHandle(h,k,O)},M.useInsertionEffect=function(h,k){return L.current.useInsertionEffect(h,k)},M.useLayoutEffect=function(h,k){return L.current.useLayoutEffect(h,k)},M.useMemo=function(h,k){return L.current.useMemo(h,k)},M.useReducer=function(h,k,O){return L.current.useReducer(h,k,O)},M.useRef=function(h){return L.current.useRef(h)},M.useState=function(h){return L.current.useState(h)},M.useSyncExternalStore=function(h,k,O){return L.current.useSyncExternalStore(h,k,O)},M.useTransition=function(){return L.current.useTransition()},M.version="18.3.1",M}var ws;function ya(){return ws||(ws=1,On.exports=wl()),On.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns;function Nl(){if(Ns)return ht;Ns=1;var e=ya(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(l,c,d){var u,m={},p=null,x=null;d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(x=c.ref);for(u in c)r.call(c,u)&&!a.hasOwnProperty(u)&&(m[u]=c[u]);if(l&&l.defaultProps)for(u in c=l.defaultProps,c)m[u]===void 0&&(m[u]=c[u]);return{$$typeof:t,type:l,key:p,ref:x,props:m,_owner:i.current}}return ht.Fragment=n,ht.jsx=o,ht.jsxs=o,ht}var js;function jl(){return js||(js=1,Dn.exports=Nl()),Dn.exports}var s=jl(),f=ya();const At=va(f),p0=bl({__proto__:null,default:At},[f]),zr="-",kl=e=>{const t=zl(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{const l=o.split(zr);return l[0]===""&&l.length!==1&&l.shift(),ba(l,t)||Sl(o)},getConflictingClassGroupIds:(o,l)=>{const c=n[o]||[];return l&&r[o]?[...c,...r[o]]:c}}},ba=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?ba(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const a=e.join(zr);return(o=t.validators.find(({validator:l})=>l(a)))==null?void 0:o.classGroupId},ks=/^\[(.+)\]$/,Sl=e=>{if(ks.test(e)){const t=ks.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},zl=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Cl(Object.entries(e.classGroups),n).forEach(([a,o])=>{lr(o,r,a,t)}),r},lr=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const a=i===""?t:Ss(t,i);a.classGroupId=n;return}if(typeof i=="function"){if(Al(i)){lr(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([a,o])=>{lr(o,Ss(t,a),n,r)})})},Ss=(e,t)=>{let n=e;return t.split(zr).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Al=e=>e.isThemeGetter,Cl=(e,t)=>t?e.map(([n,r])=>{const i=r.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([o,l])=>[t+o,l])):a);return[n,i]}):e,Tl=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(a,o)=>{n.set(a,o),t++,t>e&&(t=0,r=n,n=new Map)};return{get(a){let o=n.get(a);if(o!==void 0)return o;if((o=r.get(a))!==void 0)return i(a,o),o},set(a,o){n.has(a)?n.set(a,o):i(a,o)}}},wa="!",Il=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,o=l=>{const c=[];let d=0,u=0,m;for(let b=0;b<l.length;b++){let y=l[b];if(d===0){if(y===i&&(r||l.slice(b,b+a)===t)){c.push(l.slice(u,b)),u=b+a;continue}if(y==="/"){m=b;continue}}y==="["?d++:y==="]"&&d--}const p=c.length===0?l:l.substring(u),x=p.startsWith(wa),g=x?p.substring(1):p,v=m&&m>u?m-u:void 0;return{modifiers:c,hasImportantModifier:x,baseClassName:g,maybePostfixModifierPosition:v}};return n?l=>n({className:l,parseClassName:o}):o},Pl=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Ll=e=>({cache:Tl(e.cacheSize),parseClassName:Il(e),...kl(e)}),El=/\s+/,Ml=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],o=e.trim().split(El);let l="";for(let c=o.length-1;c>=0;c-=1){const d=o[c],{modifiers:u,hasImportantModifier:m,baseClassName:p,maybePostfixModifierPosition:x}=n(d);let g=!!x,v=r(g?p.substring(0,x):p);if(!v){if(!g){l=d+(l.length>0?" "+l:l);continue}if(v=r(p),!v){l=d+(l.length>0?" "+l:l);continue}g=!1}const b=Pl(u).join(":"),y=m?b+wa:b,w=y+v;if(a.includes(w))continue;a.push(w);const j=i(v,g);for(let A=0;A<j.length;++A){const N=j[A];a.push(y+N)}l=d+(l.length>0?" "+l:l)}return l};function Rl(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Na(t))&&(r&&(r+=" "),r+=n);return r}const Na=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Na(e[r]))&&(n&&(n+=" "),n+=t);return n};function Dl(e,...t){let n,r,i,a=o;function o(c){const d=t.reduce((u,m)=>m(u),e());return n=Ll(d),r=n.cache.get,i=n.cache.set,a=l,l(c)}function l(c){const d=r(c);if(d)return d;const u=Ml(c,n);return i(c,u),u}return function(){return a(Rl.apply(null,arguments))}}const Y=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},ja=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ol=/^\d+\/\d+$/,Fl=new Set(["px","full","screen"]),Vl=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_l=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Bl=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Hl=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ul=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Se=e=>ot(e)||Fl.has(e)||Ol.test(e),Re=e=>mt(e,"length",Jl),ot=e=>!!e&&!Number.isNaN(Number(e)),Fn=e=>mt(e,"number",ot),gt=e=>!!e&&Number.isInteger(Number(e)),Gl=e=>e.endsWith("%")&&ot(e.slice(0,-1)),E=e=>ja.test(e),De=e=>Vl.test(e),$l=new Set(["length","size","percentage"]),ql=e=>mt(e,$l,ka),Wl=e=>mt(e,"position",ka),Yl=new Set(["image","url"]),Xl=e=>mt(e,Yl,Zl),Kl=e=>mt(e,"",Ql),vt=()=>!0,mt=(e,t,n)=>{const r=ja.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Jl=e=>_l.test(e)&&!Bl.test(e),ka=()=>!1,Ql=e=>Hl.test(e),Zl=e=>Ul.test(e),ec=()=>{const e=Y("colors"),t=Y("spacing"),n=Y("blur"),r=Y("brightness"),i=Y("borderColor"),a=Y("borderRadius"),o=Y("borderSpacing"),l=Y("borderWidth"),c=Y("contrast"),d=Y("grayscale"),u=Y("hueRotate"),m=Y("invert"),p=Y("gap"),x=Y("gradientColorStops"),g=Y("gradientColorStopPositions"),v=Y("inset"),b=Y("margin"),y=Y("opacity"),w=Y("padding"),j=Y("saturate"),A=Y("scale"),N=Y("sepia"),z=Y("skew"),I=Y("space"),C=Y("translate"),P=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",E,t],R=()=>[E,t],re=()=>["",Se,Re],se=()=>["auto",ot,E],pe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ke=()=>["solid","dashed","dotted","double","none"],L=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],le=()=>["","0",E],de=()=>["auto","avoid","all","avoid-page","page","left","right","column"],h=()=>[ot,E];return{cacheSize:500,separator:":",theme:{colors:[vt],spacing:[Se,Re],blur:["none","",De,E],brightness:h(),borderColor:[e],borderRadius:["none","","full",De,E],borderSpacing:R(),borderWidth:re(),contrast:h(),grayscale:le(),hueRotate:h(),invert:le(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[Gl,Re],inset:B(),margin:B(),opacity:h(),padding:R(),saturate:h(),scale:h(),sepia:le(),skew:h(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",E]}],container:["container"],columns:[{columns:[De]}],"break-after":[{"break-after":de()}],"break-before":[{"break-before":de()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...pe(),E]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",gt,E]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",E]}],grow:[{grow:le()}],shrink:[{shrink:le()}],order:[{order:["first","last","none",gt,E]}],"grid-cols":[{"grid-cols":[vt]}],"col-start-end":[{col:["auto",{span:["full",gt,E]},E]}],"col-start":[{"col-start":se()}],"col-end":[{"col-end":se()}],"grid-rows":[{"grid-rows":[vt]}],"row-start-end":[{row:["auto",{span:[gt,E]},E]}],"row-start":[{"row-start":se()}],"row-end":[{"row-end":se()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",E]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",E]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",E,t]}],"min-w":[{"min-w":[E,t,"min","max","fit"]}],"max-w":[{"max-w":[E,t,"none","full","min","max","fit","prose",{screen:[De]},De]}],h:[{h:[E,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[E,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[E,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[E,t,"auto","min","max","fit"]}],"font-size":[{text:["base",De,Re]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Fn]}],"font-family":[{font:[vt]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",E]}],"line-clamp":[{"line-clamp":["none",ot,Fn]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Se,E]}],"list-image":[{"list-image":["none",E]}],"list-style-type":[{list:["none","disc","decimal",E]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ke(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Se,Re]}],"underline-offset":[{"underline-offset":["auto",Se,E]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",E]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",E]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...pe(),Wl]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ql]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Xl]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...ke(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:ke()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...ke()]}],"outline-offset":[{"outline-offset":[Se,E]}],"outline-w":[{outline:[Se,Re]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[Se,Re]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",De,Kl]}],"shadow-color":[{shadow:[vt]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...L(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":L()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",De,E]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[m]}],saturate:[{saturate:[j]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[j]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",E]}],duration:[{duration:h()}],ease:[{ease:["linear","in","out","in-out",E]}],delay:[{delay:h()}],animate:[{animate:["none","spin","ping","pulse","bounce",E]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[gt,E]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",E]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",E]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",E]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Se,Re,Fn]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},tc=Dl(ec);function nc(...e){return e.filter(Boolean).join(" ")}function $(...e){return tc(nc(...e))}function f0(e){return(e||"").replace(/^\//,"").split(/[\\\/]/).pop()||""}const Ar=f.createContext({});function Je(e){const t=f.useRef(null);return t.current===null&&(t.current=e()),t.current}const wn=f.createContext(null),Xe=f.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class rc extends f.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=r instanceof HTMLElement&&r.offsetWidth||0,a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left}return null}componentDidUpdate(){}render(){return this.props.children}}function sc({children:e,isPresent:t,anchorX:n}){const r=f.useId(),i=f.useRef(null),a=f.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:o}=f.useContext(Xe);return f.useInsertionEffect(()=>{const{width:l,height:c,top:d,left:u,right:m}=a.current;if(t||!i.current||!l||!c)return;const p=n==="left"?`left: ${u}`:`right: ${m}`;i.current.dataset.motionPopId=r;const x=document.createElement("style");return o&&(x.nonce=o),document.head.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            ${p}px !important;
            top: ${d}px !important;
          }
        `),()=>{document.head.removeChild(x)}},[t]),s.jsx(rc,{isPresent:t,childRef:i,sizeRef:a,children:f.cloneElement(e,{ref:i})})}const ic=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:l})=>{const c=Je(ac),d=f.useId(),u=f.useCallback(p=>{c.set(p,!0);for(const x of c.values())if(!x)return;r&&r()},[c,r]),m=f.useMemo(()=>({id:d,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(c.set(p,!1),()=>c.delete(p))}),a?[Math.random(),u]:[n,u]);return f.useMemo(()=>{c.forEach((p,x)=>c.set(x,!1))},[n]),f.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),o==="popLayout"&&(e=s.jsx(sc,{isPresent:n,anchorX:l,children:e})),s.jsx(wn.Provider,{value:m,children:e})};function ac(){return new Map}function Sa(e=!0){const t=f.useContext(wn);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=f.useId();f.useEffect(()=>{e&&i(a)},[e]);const o=f.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}const Xt=e=>e.key||"";function zs(e){const t=[];return f.Children.forEach(e,n=>{f.isValidElement(n)&&t.push(n)}),t}const Cr=typeof window<"u",_t=Cr?f.useLayoutEffect:f.useEffect,ee=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:o=!1,anchorX:l="left"})=>{const[c,d]=Sa(o),u=f.useMemo(()=>zs(e),[e]),m=o&&!c?[]:u.map(Xt),p=f.useRef(!0),x=f.useRef(u),g=Je(()=>new Map),[v,b]=f.useState(u),[y,w]=f.useState(u);_t(()=>{p.current=!1,x.current=u;for(let N=0;N<y.length;N++){const z=Xt(y[N]);m.includes(z)?g.delete(z):g.get(z)!==!0&&g.set(z,!1)}},[y,m.length,m.join("-")]);const j=[];if(u!==v){let N=[...u];for(let z=0;z<y.length;z++){const I=y[z],C=Xt(I);m.includes(C)||(N.splice(z,0,I),j.push(I))}a==="wait"&&j.length&&(N=j),w(zs(N)),b(u);return}const{forceRender:A}=f.useContext(Ar);return s.jsx(s.Fragment,{children:y.map(N=>{const z=Xt(N),I=o&&!c?!1:u===y||m.includes(z),C=()=>{if(g.has(z))g.set(z,!0);else return;let P=!0;g.forEach(_=>{_||(P=!1)}),P&&(A==null||A(),w(x.current),o&&(d==null||d()),r&&r())};return s.jsx(ic,{isPresent:I,initial:!p.current||n?void 0:!1,custom:I?void 0:t,presenceAffectsLayout:i,mode:a,onExitComplete:I?void 0:C,anchorX:l,children:N},z)})})},ae=e=>e;let oc=ae,cr=ae;const lc={skipAnimations:!1,useManualTiming:!1};function cc(e){let t=new Set,n=new Set,r=!1,i=!1;const a=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function l(d){a.has(d)&&(c.schedule(d),e()),d(o)}const c={schedule:(d,u=!1,m=!1)=>{const x=m&&r?t:n;return u&&a.add(d),x.has(d)||x.add(d),d},cancel:d=>{n.delete(d),a.delete(d)},process:d=>{if(o=d,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(d))}};return c}const Kt=["read","resolveKeyframes","update","preRender","render","postRender"],dc=40;function za(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Kt.reduce((y,w)=>(y[w]=cc(a),y),{}),{read:l,resolveKeyframes:c,update:d,preRender:u,render:m,postRender:p}=o,x=()=>{const y=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(y-i.timestamp,dc),1),i.timestamp=y,i.isProcessing=!0,l.process(i),c.process(i),d.process(i),u.process(i),m.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},g=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Kt.reduce((y,w)=>{const j=o[w];return y[w]=(A,N=!1,z=!1)=>(n||g(),j.schedule(A,N,z)),y},{}),cancel:y=>{for(let w=0;w<Kt.length;w++)o[Kt[w]].cancel(y)},state:i,steps:o}}const{schedule:V,cancel:he,state:ne,steps:Vn}=za(typeof requestAnimationFrame<"u"?requestAnimationFrame:ae,!0),Aa=f.createContext({strict:!1}),As={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},lt={};for(const e in As)lt[e]={isEnabled:t=>As[e].some(n=>!!t[n])};function uc(e){for(const t in e)lt[t]={...lt[t],...e[t]}}const mc=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function pn(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||mc.has(e)}let Ca=e=>!pn(e);function Ta(e){e&&(Ca=t=>t.startsWith("on")?!pn(t):e(t))}try{Ta(require("@emotion/is-prop-valid").default)}catch{}function pc(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Ca(i)||n===!0&&pn(i)||!t&&!pn(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Ia({children:e,isValidProp:t,...n}){t&&Ta(t),n={...f.useContext(Xe),...n},n.isStatic=Je(()=>n.isStatic);const r=f.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return s.jsx(Xe.Provider,{value:r,children:e})}function fc(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Nn=f.createContext({});function Rt(e){return typeof e=="string"||Array.isArray(e)}function jn(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Tr=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ir=["initial",...Tr];function kn(e){return jn(e.animate)||Ir.some(t=>Rt(e[t]))}function Pa(e){return!!(kn(e)||e.variants)}function xc(e,t){if(kn(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Rt(n)?n:void 0,animate:Rt(r)?r:void 0}}return e.inherit!==!1?t:{}}function hc(e){const{initial:t,animate:n}=xc(e,f.useContext(Nn));return f.useMemo(()=>({initial:t,animate:n}),[Cs(t),Cs(n)])}function Cs(e){return Array.isArray(e)?e.join(" "):e}const gc=Symbol.for("motionComponentSymbol");function nt(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function vc(e,t,n){return f.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):nt(n)&&(n.current=r))},[t])}const Pr=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),yc="framerAppearId",La="data-"+Pr(yc),{schedule:Lr,cancel:x0}=za(queueMicrotask,!1),Ea=f.createContext({});function bc(e,t,n,r,i){var a,o;const{visualElement:l}=f.useContext(Nn),c=f.useContext(Aa),d=f.useContext(wn),u=f.useContext(Xe).reducedMotion,m=f.useRef(null);r=r||c.renderer,!m.current&&r&&(m.current=r(e,{visualState:t,parent:l,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:u}));const p=m.current,x=f.useContext(Ea);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&wc(m.current,n,i,x);const g=f.useRef(!1);f.useInsertionEffect(()=>{p&&g.current&&p.update(n,d)});const v=n[La],b=f.useRef(!!v&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,v))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,v)));return _t(()=>{p&&(g.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Lr.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),f.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,v)}),b.current=!1))}),p}function wc(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:l,layoutScroll:c,layoutRoot:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Ma(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||l&&nt(l),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:d})}function Ma(e){if(e)return e.options.allowProjection!==!1?e.projection:Ma(e.parent)}function Nc({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var a,o;e&&uc(e);function l(d,u){let m;const p={...f.useContext(Xe),...d,layoutId:jc(d)},{isStatic:x}=p,g=hc(d),v=r(d,x);if(!x&&Cr){kc();const b=Sc(p);m=b.MeasureLayout,g.visualElement=bc(i,v,p,t,b.ProjectionNode)}return s.jsxs(Nn.Provider,{value:g,children:[m&&g.visualElement?s.jsx(m,{visualElement:g.visualElement,...p}):null,n(i,d,vc(v,g.visualElement,u),v,x,g.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(o=(a=i.displayName)!==null&&a!==void 0?a:i.name)!==null&&o!==void 0?o:""})`}`;const c=f.forwardRef(l);return c[gc]=i,c}function jc({layoutId:e}){const t=f.useContext(Ar).id;return t&&e!==void 0?t+"-"+e:e}function kc(e,t){f.useContext(Aa).strict}function Sc(e){const{drag:t,layout:n}=lt;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const zc=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Er(e){return typeof e!="string"||e.includes("-")?!1:!!(zc.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ts(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Mr(e,t,n,r){if(typeof t=="function"){const[i,a]=Ts(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=Ts(r);t=t(n!==void 0?n:e.custom,i,a)}return t}const dr=e=>Array.isArray(e),Ac=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Cc=e=>dr(e)?e[e.length-1]||0:e,Z=e=>!!(e&&e.getVelocity);function ln(e){const t=Z(e)?e.get():e;return Ac(t)?t.toValue():t}function Tc({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,a){const o={latestValues:Ic(r,i,a,e),renderState:t()};return n&&(o.onMount=l=>n({props:r,current:l,...o}),o.onUpdate=l=>n(l)),o}const Ra=e=>(t,n)=>{const r=f.useContext(Nn),i=f.useContext(wn),a=()=>Tc(e,t,r,i);return n?a():Je(a)};function Ic(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=ln(a[p]);let{initial:o,animate:l}=e;const c=kn(e),d=Pa(e);t&&d&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const m=u?l:o;if(m&&typeof m!="boolean"&&!jn(m)){const p=Array.isArray(m)?m:[m];for(let x=0;x<p.length;x++){const g=Mr(e,p[x]);if(g){const{transitionEnd:v,transition:b,...y}=g;for(const w in y){let j=y[w];if(Array.isArray(j)){const A=u?j.length-1:0;j=j[A]}j!==null&&(i[w]=j)}for(const w in v)i[w]=v[w]}}}return i}const pt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qe=new Set(pt),Da=e=>t=>typeof t=="string"&&t.startsWith(e),Rr=Da("--"),Pc=Da("var(--"),Dr=e=>Pc(e)?Lc.test(e.split("/*")[0].trim()):!1,Lc=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Oa=(e,t)=>t&&typeof e=="number"?t.transform(e):e,je=(e,t,n)=>n>t?t:n<e?e:n,ft={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Dt={...ft,transform:e=>je(0,1,e)},Jt={...ft,default:1},Bt=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Oe=Bt("deg"),ye=Bt("%"),T=Bt("px"),Ec=Bt("vh"),Mc=Bt("vw"),Is={...ye,parse:e=>ye.parse(e)/100,transform:e=>ye.transform(e*100)},Rc={borderWidth:T,borderTopWidth:T,borderRightWidth:T,borderBottomWidth:T,borderLeftWidth:T,borderRadius:T,radius:T,borderTopLeftRadius:T,borderTopRightRadius:T,borderBottomRightRadius:T,borderBottomLeftRadius:T,width:T,maxWidth:T,height:T,maxHeight:T,top:T,right:T,bottom:T,left:T,padding:T,paddingTop:T,paddingRight:T,paddingBottom:T,paddingLeft:T,margin:T,marginTop:T,marginRight:T,marginBottom:T,marginLeft:T,backgroundPositionX:T,backgroundPositionY:T},Dc={rotate:Oe,rotateX:Oe,rotateY:Oe,rotateZ:Oe,scale:Jt,scaleX:Jt,scaleY:Jt,scaleZ:Jt,skew:Oe,skewX:Oe,skewY:Oe,distance:T,translateX:T,translateY:T,translateZ:T,x:T,y:T,z:T,perspective:T,transformPerspective:T,opacity:Dt,originX:Is,originY:Is,originZ:T},Ps={...ft,transform:Math.round},Or={...Rc,...Dc,zIndex:Ps,size:T,fillOpacity:Dt,strokeOpacity:Dt,numOctaves:Ps},Oc={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Fc=pt.length;function Vc(e,t,n){let r="",i=!0;for(let a=0;a<Fc;a++){const o=pt[a],l=e[o];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(o.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const d=Oa(l,Or[o]);if(!c){i=!1;const u=Oc[o]||o;r+=`${u}(${d}) `}n&&(t[o]=d)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Fr(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,l=!1;for(const c in t){const d=t[c];if(Qe.has(c)){o=!0;continue}else if(Rr(c)){i[c]=d;continue}else{const u=Oa(d,Or[c]);c.startsWith("origin")?(l=!0,a[c]=u):r[c]=u}}if(t.transform||(o||n?r.transform=Vc(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:d="50%",originZ:u=0}=a;r.transformOrigin=`${c} ${d} ${u}`}}const _c={offset:"stroke-dashoffset",array:"stroke-dasharray"},Bc={offset:"strokeDashoffset",array:"strokeDasharray"};function Hc(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?_c:Bc;e[a.offset]=T.transform(-r);const o=T.transform(t),l=T.transform(n);e[a.array]=`${o} ${l}`}function Ls(e,t,n){return typeof e=="string"?e:T.transform(t+n*e)}function Uc(e,t,n){const r=Ls(t,e.x,e.width),i=Ls(n,e.y,e.height);return`${r} ${i}`}function Vr(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...d},u,m){if(Fr(e,d,m),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:x,dimensions:g}=e;p.transform&&(g&&(x.transform=p.transform),delete p.transform),g&&(i!==void 0||a!==void 0||x.transform)&&(x.transformOrigin=Uc(g,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&Hc(p,o,l,c,!1)}const _r=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Fa=()=>({..._r(),attrs:{}}),Br=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Va(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const _a=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ba(e,t,n,r){Va(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(_a.has(i)?i:Pr(i),t.attrs[i])}const Ot={};function Gc(e){for(const t in e)Ot[t]=e[t],Rr(t)&&(Ot[t].isCSSVariable=!0)}function Ha(e,{layout:t,layoutId:n}){return Qe.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ot[e]||e==="opacity")}function Hr(e,t,n){var r;const{style:i}=e,a={};for(const o in i)(Z(i[o])||t.style&&Z(t.style[o])||Ha(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[o]=i[o]);return a}function Ua(e,t,n){const r=Hr(e,t,n);for(const i in e)if(Z(e[i])||Z(t[i])){const a=pt.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}function $c(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Es=["x","y","width","height","cx","cy","r"],qc={useVisualState:Ra({scrapeMotionValuesFromProps:Ua,createRenderState:Fa,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let a=!!e.drag;if(!a){for(const l in i)if(Qe.has(l)){a=!0;break}}if(!a)return;let o=!t;if(t)for(let l=0;l<Es.length;l++){const c=Es[l];e[c]!==t[c]&&(o=!0)}o&&V.read(()=>{$c(n,r),V.render(()=>{Vr(r,i,Br(n.tagName),e.transformTemplate),Ba(n,r)})})}})},Wc={useVisualState:Ra({scrapeMotionValuesFromProps:Hr,createRenderState:_r})};function Ga(e,t,n){for(const r in t)!Z(t[r])&&!Ha(r,n)&&(e[r]=t[r])}function Yc({transformTemplate:e},t){return f.useMemo(()=>{const n=_r();return Fr(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Xc(e,t){const n=e.style||{},r={};return Ga(r,n,e),Object.assign(r,Yc(e,t)),r}function Kc(e,t){const n={},r=Xc(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function Jc(e,t,n,r){const i=f.useMemo(()=>{const a=Fa();return Vr(a,t,Br(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Ga(a,e.style,e),i.style={...a,...i.style}}return i}function Qc(e=!1){return(n,r,i,{latestValues:a},o)=>{const c=(Er(n)?Jc:Kc)(r,a,o,n),d=pc(r,typeof n=="string",e),u=n!==f.Fragment?{...d,...c,ref:i}:{},{children:m}=r,p=f.useMemo(()=>Z(m)?m.get():m,[m]);return f.createElement(n,{...u,children:p})}}function Zc(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Er(r)?qc:Wc,preloadedFeatures:e,useRender:Qc(i),createVisualElement:t,Component:r};return Nc(o)}}function $a(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Sn(e,t,n){const r=e.getProps();return Mr(r,t,n!==void 0?n:r.custom,e)}function Ur(e,t){return e?e[t]||e.default||e:void 0}const qa=new Set(["width","height","top","left","right","bottom",...pt]);let cn;function ed(){cn=void 0}const be={now:()=>(cn===void 0&&be.set(ne.isProcessing||lc.useManualTiming?ne.timestamp:performance.now()),cn),set:e=>{cn=e,queueMicrotask(ed)}};function Gr(e,t){e.indexOf(t)===-1&&e.push(t)}function zn(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class $r{constructor(){this.subscriptions=[]}add(t){return Gr(this.subscriptions,t),()=>zn(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const o=this.subscriptions[a];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function qr(e,t){return t?e*(1e3/t):0}const Ms=30,td=e=>!isNaN(parseFloat(e)),Ct={current:void 0};class nd{constructor(t,n={}){this.version="12.0.5",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=be.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=td(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new $r);const r=this.events[t].add(n);return t==="change"?()=>{r(),V.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ct.current&&Ct.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Ms)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ms);return qr(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ve(e,t){return new nd(e,t)}function rd(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ve(n))}function sd(e,t){const n=Sn(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a){const l=Cc(a[o]);rd(e,o,l)}}function id(e){return!!(Z(e)&&e.add)}function ur(e,t){const n=e.getValue("willChange");if(id(n))return n.add(t)}function Wa(e){return e.props[La]}function Wr(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ya=Wr(()=>window.ScrollTimeline!==void 0);class ad{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(Ya()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,a)=>{i&&i(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Xa extends ad{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}const we=e=>e*1e3,Ne=e=>e/1e3;function An(e){return typeof e=="function"}function Rs(e,t){e.timeline=t,e.onfinish=null}const Yr=e=>Array.isArray(e)&&typeof e[0]=="number",od={linearEasing:void 0};function ld(e,t){const n=Wr(e);return()=>{var r;return(r=od[t])!==null&&r!==void 0?r:n()}}const fn=ld(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),_e=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ka=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(_e(0,i-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function Ja(e){return!!(typeof e=="function"&&fn()||!e||typeof e=="string"&&(e in mr||fn())||Yr(e)||Array.isArray(e)&&e.every(Ja))}const kt=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,mr={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:kt([0,.65,.55,1]),circOut:kt([.55,0,1,.45]),backIn:kt([.31,.01,.66,-.59]),backOut:kt([.33,1.53,.69,.99])};function Qa(e,t){if(e)return typeof e=="function"&&fn()?Ka(e,t):Yr(e)?kt(e):Array.isArray(e)?e.map(n=>Qa(n,t)||mr.easeOut):mr[e]}const Za=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,cd=1e-7,dd=12;function ud(e,t,n,r,i){let a,o,l=0;do o=t+(n-t)/2,a=Za(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>cd&&++l<dd);return o}function Ht(e,t,n,r){if(e===t&&n===r)return ae;const i=a=>ud(a,0,1,e,n);return a=>a===0||a===1?a:Za(i(a),t,r)}const eo=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,to=e=>t=>1-e(1-t),no=Ht(.33,1.53,.69,.99),Xr=to(no),ro=eo(Xr),so=e=>(e*=2)<1?.5*Xr(e):.5*(2-Math.pow(2,-10*(e-1))),Kr=e=>1-Math.sin(Math.acos(e)),io=to(Kr),ao=eo(Kr),oo=e=>/^0[^.\s]+$/u.test(e);function md(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||oo(e):!0}const Tt=e=>Math.round(e*1e5)/1e5,Jr=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function pd(e){return e==null}const fd=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Qr=(e,t)=>n=>!!(typeof n=="string"&&fd.test(n)&&n.startsWith(e)||t&&!pd(n)&&Object.prototype.hasOwnProperty.call(n,t)),lo=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,o,l]=r.match(Jr);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},xd=e=>je(0,255,e),_n={...ft,transform:e=>Math.round(xd(e))},We={test:Qr("rgb","red"),parse:lo("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+_n.transform(e)+", "+_n.transform(t)+", "+_n.transform(n)+", "+Tt(Dt.transform(r))+")"};function hd(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const pr={test:Qr("#"),parse:hd,transform:We.transform},rt={test:Qr("hsl","hue"),parse:lo("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ye.transform(Tt(t))+", "+ye.transform(Tt(n))+", "+Tt(Dt.transform(r))+")"},ie={test:e=>We.test(e)||pr.test(e)||rt.test(e),parse:e=>We.test(e)?We.parse(e):rt.test(e)?rt.parse(e):pr.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?We.transform(e):rt.transform(e)},gd=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vd(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Jr))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(gd))===null||n===void 0?void 0:n.length)||0)>0}const co="number",uo="color",yd="var",bd="var(",Ds="${}",wd=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ft(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const l=t.replace(wd,c=>(ie.test(c)?(r.color.push(a),i.push(uo),n.push(ie.parse(c))):c.startsWith(bd)?(r.var.push(a),i.push(yd),n.push(c)):(r.number.push(a),i.push(co),n.push(parseFloat(c))),++a,Ds)).split(Ds);return{values:n,split:l,indexes:r,types:i}}function mo(e){return Ft(e).values}function po(e){const{split:t,types:n}=Ft(e),r=t.length;return i=>{let a="";for(let o=0;o<r;o++)if(a+=t[o],i[o]!==void 0){const l=n[o];l===co?a+=Tt(i[o]):l===uo?a+=ie.transform(i[o]):a+=i[o]}return a}}const Nd=e=>typeof e=="number"?0:e;function jd(e){const t=mo(e);return po(e)(t.map(Nd))}const Be={test:vd,parse:mo,createTransformer:po,getAnimatableNone:jd},kd=new Set(["brightness","contrast","saturate","opacity"]);function Sd(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Jr)||[];if(!r)return e;const i=n.replace(r,"");let a=kd.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const zd=/\b([a-z-]*)\(.*?\)/gu,fr={...Be,getAnimatableNone:e=>{const t=e.match(zd);return t?t.map(Sd).join(" "):e}},Ad={...Or,color:ie,backgroundColor:ie,outlineColor:ie,fill:ie,stroke:ie,borderColor:ie,borderTopColor:ie,borderRightColor:ie,borderBottomColor:ie,borderLeftColor:ie,filter:fr,WebkitFilter:fr},Zr=e=>Ad[e];function fo(e,t){let n=Zr(e);return n!==fr&&(n=Be),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Cd=new Set(["auto","none","0"]);function Td(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!Cd.has(a)&&Ft(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=fo(n,i)}const Os=e=>e===ft||e===T,Fs=(e,t)=>parseFloat(e.split(", ")[t]),Vs=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Fs(i[1],t);{const a=r.match(/^matrix\((.+)\)$/u);return a?Fs(a[1],e):0}},Id=new Set(["x","y","z"]),Pd=pt.filter(e=>!Id.has(e));function Ld(e){const t=[];return Pd.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ct={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Vs(4,13),y:Vs(5,14)};ct.translateX=ct.x;ct.translateY=ct.y;const Ye=new Set;let xr=!1,hr=!1;function xo(){if(hr){const e=Array.from(Ye).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Ld(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,o])=>{var l;(l=r.getValue(a))===null||l===void 0||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}hr=!1,xr=!1,Ye.forEach(e=>e.complete()),Ye.clear()}function ho(){Ye.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hr=!0)})}function Ed(){ho(),xo()}class es{constructor(t,n,r,i,a,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ye.add(this),xr||(xr=!0,V.read(ho),V.resolveKeyframes(xo))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let a=0;a<t.length;a++)if(t[a]===null)if(a===0){const o=i==null?void 0:i.get(),l=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&o===void 0&&i.set(t[0])}else t[a]=t[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ye.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ye.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const go=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Md=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Rd(e){const t=Md.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function vo(e,t,n=1){const[r,i]=Rd(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const o=a.trim();return go(o)?parseFloat(o):o}return Dr(i)?vo(i,t,n+1):i}const yo=e=>t=>t.test(e),Dd={test:e=>e==="auto",parse:e=>e},bo=[ft,T,ye,Oe,Mc,Ec,Dd],_s=e=>bo.find(yo(e));class wo extends es{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let d=t[c];if(typeof d=="string"&&(d=d.trim(),Dr(d))){const u=vo(d,n.current);u!==void 0&&(t[c]=u),c===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!qa.has(r)||t.length!==2)return;const[i,a]=t,o=_s(i),l=_s(a);if(o!==l)if(Os(o)&&Os(l))for(let c=0;c<t.length;c++){const d=t[c];typeof d=="string"&&(t[c]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)md(t[i])&&r.push(i);r.length&&Td(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ct[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const a=n.getValue(r);a&&a.jump(this.measuredOrigin,!1);const o=i.length-1,l=i[o];i[o]=ct[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,d])=>{n.getValue(c).set(d)}),this.resolveNoneKeyframes()}}const Bs=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Be.test(e)||e==="0")&&!e.startsWith("url("));function Od(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Fd(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],o=Bs(i,t),l=Bs(a,t);return!o||!l?!1:Od(e)||(n==="spring"||An(n))&&r}const Vd=e=>e!==null;function Cn(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Vd),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return!a||r===void 0?i[a]:r}const _d=40;class No{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=be.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>_d?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Ed(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=be.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:a,delay:o,onComplete:l,onUpdate:c,isGenerator:d}=this.options;if(!d&&!Fd(t,r,i,a))if(o)this.options.duration=0;else{c&&c(Cn(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const u=this.initPlayback(t,n);u!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const xn=2e4;function ts(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<xn;)t+=n,r=e.next(t);return t>=xn?1/0:t}const K=(e,t,n)=>e+(t-e)*n;function Bn(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Bd({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Bn(c,l,e+1/3),a=Bn(c,l,e),o=Bn(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function hn(e,t){return n=>n>0?t:e}const Hn=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Hd=[pr,We,rt],Ud=e=>Hd.find(t=>t.test(e));function Hs(e){const t=Ud(e);if(!t)return!1;let n=t.parse(e);return t===rt&&(n=Bd(n)),n}const Us=(e,t)=>{const n=Hs(e),r=Hs(t);if(!n||!r)return hn(e,t);const i={...n};return a=>(i.red=Hn(n.red,r.red,a),i.green=Hn(n.green,r.green,a),i.blue=Hn(n.blue,r.blue,a),i.alpha=K(n.alpha,r.alpha,a),We.transform(i))},Gd=(e,t)=>n=>t(e(n)),Ut=(...e)=>e.reduce(Gd),gr=new Set(["none","hidden"]);function $d(e,t){return gr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function qd(e,t){return n=>K(e,t,n)}function ns(e){return typeof e=="number"?qd:typeof e=="string"?Dr(e)?hn:ie.test(e)?Us:Xd:Array.isArray(e)?jo:typeof e=="object"?ie.test(e)?Us:Wd:hn}function jo(e,t){const n=[...e],r=n.length,i=e.map((a,o)=>ns(a)(a,t[o]));return a=>{for(let o=0;o<r;o++)n[o]=i[o](a);return n}}function Wd(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=ns(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function Yd(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let a=0;a<t.values.length;a++){const o=t.types[a],l=e.indexes[o][i[o]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[a]=c,i[o]++}return r}const Xd=(e,t)=>{const n=Be.createTransformer(t),r=Ft(e),i=Ft(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?gr.has(e)&&!i.values.length||gr.has(t)&&!r.values.length?$d(e,t):Ut(jo(Yd(r,i),i.values),n):hn(e,t)};function ko(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?K(e,t,n):ns(e)(e,t)}const Kd=5;function So(e,t,n){const r=Math.max(t-Kd,0);return qr(n-e(r),t-r)}const Q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Gs=.001;function Jd({duration:e=Q.duration,bounce:t=Q.bounce,velocity:n=Q.velocity,mass:r=Q.mass}){let i,a,o=1-t;o=je(Q.minDamping,Q.maxDamping,o),e=je(Q.minDuration,Q.maxDuration,Ne(e)),o<1?(i=d=>{const u=d*o,m=u*e,p=u-n,x=vr(d,o),g=Math.exp(-m);return Gs-p/x*g},a=d=>{const m=d*o*e,p=m*n+n,x=Math.pow(o,2)*Math.pow(d,2)*e,g=Math.exp(-m),v=vr(Math.pow(d,2),o);return(-i(d)+Gs>0?-1:1)*((p-x)*g)/v}):(i=d=>{const u=Math.exp(-d*e),m=(d-n)*e+1;return-.001+u*m},a=d=>{const u=Math.exp(-d*e),m=(n-d)*(e*e);return u*m});const l=5/e,c=Zd(i,a,l);if(e=we(e),isNaN(c))return{stiffness:Q.stiffness,damping:Q.damping,duration:e};{const d=Math.pow(c,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const Qd=12;function Zd(e,t,n){let r=n;for(let i=1;i<Qd;i++)r=r-e(r)/t(r);return r}function vr(e,t){return e*Math.sqrt(1-t*t)}const eu=["duration","bounce"],tu=["stiffness","damping","mass"];function $s(e,t){return t.some(n=>e[n]!==void 0)}function nu(e){let t={velocity:Q.velocity,stiffness:Q.stiffness,damping:Q.damping,mass:Q.mass,isResolvedFromDuration:!1,...e};if(!$s(e,tu)&&$s(e,eu))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*je(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Q.mass,stiffness:i,damping:a}}else{const n=Jd(e);t={...t,...n,mass:Q.mass},t.isResolvedFromDuration=!0}return t}function rs(e=Q.visualDuration,t=Q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:a},{stiffness:c,damping:d,mass:u,duration:m,velocity:p,isResolvedFromDuration:x}=nu({...n,velocity:-Ne(n.velocity||0)}),g=p||0,v=d/(2*Math.sqrt(c*u)),b=o-a,y=Ne(Math.sqrt(c/u)),w=Math.abs(b)<5;r||(r=w?Q.restSpeed.granular:Q.restSpeed.default),i||(i=w?Q.restDelta.granular:Q.restDelta.default);let j;if(v<1){const N=vr(y,v);j=z=>{const I=Math.exp(-v*y*z);return o-I*((g+v*y*b)/N*Math.sin(N*z)+b*Math.cos(N*z))}}else if(v===1)j=N=>o-Math.exp(-y*N)*(b+(g+y*b)*N);else{const N=y*Math.sqrt(v*v-1);j=z=>{const I=Math.exp(-v*y*z),C=Math.min(N*z,300);return o-I*((g+v*y*b)*Math.sinh(C)+N*b*Math.cosh(C))/N}}const A={calculatedDuration:x&&m||null,next:N=>{const z=j(N);if(x)l.done=N>=m;else{let I=0;v<1&&(I=N===0?we(g):So(j,N,z));const C=Math.abs(I)<=r,P=Math.abs(o-z)<=i;l.done=C&&P}return l.value=l.done?o:z,l},toString:()=>{const N=Math.min(ts(A),xn),z=Ka(I=>A.next(N*I).value,N,30);return N+"ms "+z}};return A}function qs({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}){const m=e[0],p={done:!1,value:m},x=C=>l!==void 0&&C<l||c!==void 0&&C>c,g=C=>l===void 0?c:c===void 0||Math.abs(l-C)<Math.abs(c-C)?l:c;let v=n*t;const b=m+v,y=o===void 0?b:o(b);y!==b&&(v=y-m);const w=C=>-v*Math.exp(-C/r),j=C=>y+w(C),A=C=>{const P=w(C),_=j(C);p.done=Math.abs(P)<=d,p.value=p.done?y:_};let N,z;const I=C=>{x(p.value)&&(N=C,z=rs({keyframes:[p.value,g(p.value)],velocity:So(j,C,p.value),damping:i,stiffness:a,restDelta:d,restSpeed:u}))};return I(0),{calculatedDuration:null,next:C=>{let P=!1;return!z&&N===void 0&&(P=!0,A(C),I(C)),N!==void 0&&C>=N?z.next(C-N):(!P&&A(C),p)}}}const ru=Ht(.42,0,1,1),su=Ht(0,0,.58,1),zo=Ht(.42,0,.58,1),Ao=e=>Array.isArray(e)&&typeof e[0]!="number",Ws={linear:ae,easeIn:ru,easeInOut:zo,easeOut:su,circIn:Kr,circInOut:ao,circOut:io,backIn:Xr,backInOut:ro,backOut:no,anticipate:so},Ys=e=>{if(Yr(e)){cr(e.length===4);const[t,n,r,i]=e;return Ht(t,n,r,i)}else if(typeof e=="string")return cr(Ws[e]!==void 0),Ws[e];return e};function iu(e,t,n){const r=[],i=n||ko,a=e.length-1;for(let o=0;o<a;o++){let l=i(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||ae:t;l=Ut(c,l)}r.push(l)}return r}function ss(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(cr(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=iu(t,r,i),c=l.length,d=u=>{if(o&&u<e[0])return t[0];let m=0;if(c>1)for(;m<e.length-2&&!(u<e[m+1]);m++);const p=_e(e[m],e[m+1],u);return l[m](p)};return n?u=>d(je(e[0],e[a-1],u)):d}function Co(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=_e(0,t,r);e.push(K(n,1,i))}}function is(e){const t=[0];return Co(t,e.length-1),t}function au(e,t){return e.map(n=>n*t)}function ou(e,t){return e.map(()=>t||zo).splice(0,e.length-1)}function gn({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Ao(r)?r.map(Ys):Ys(r),a={done:!1,value:t[0]},o=au(n&&n.length===t.length?n:is(t),e),l=ss(o,t,{ease:Array.isArray(i)?i:ou(t,i)});return{calculatedDuration:e,next:c=>(a.value=l(c),a.done=c>=e,a)}}const lu=e=>{const t=({timestamp:n})=>e(n);return{start:()=>V.update(t,!0),stop:()=>he(t),now:()=>ne.isProcessing?ne.timestamp:be.now()}},cu={decay:qs,inertia:qs,tween:gn,keyframes:gn,spring:rs},du=e=>e/100;class Tn extends No{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:a}=this.options,o=(i==null?void 0:i.KeyframeResolver)||es,l=(c,d)=>this.onKeyframesResolved(c,d);this.resolver=new o(a,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:o=0}=this.options,l=An(n)?n:cu[n]||gn;let c,d;l!==gn&&typeof t[0]!="number"&&(c=Ut(du,ko(t[0],t[1])),t=[0,100]);const u=l({...this.options,keyframes:t});a==="mirror"&&(d=l({...this.options,keyframes:[...t].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=ts(u));const{calculatedDuration:m}=u,p=m+i,x=p*(r+1)-i;return{generator:u,mirroredGenerator:d,mapPercentToKeyframes:c,calculatedDuration:m,resolvedDuration:p,totalDuration:x}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:i,generator:a,mirroredGenerator:o,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:d,totalDuration:u,resolvedDuration:m}=r;if(this.startTime===null)return a.next(0);const{delay:p,repeat:x,repeatType:g,repeatDelay:v,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const y=this.currentTime-p*(this.speed>=0?1:-1),w=this.speed>=0?y<0:y>u;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let j=this.currentTime,A=a;if(x){const C=Math.min(this.currentTime,u)/m;let P=Math.floor(C),_=C%1;!_&&C>=1&&(_=1),_===1&&P--,P=Math.min(P,x+1),!!(P%2)&&(g==="reverse"?(_=1-_,v&&(_-=v/m)):g==="mirror"&&(A=o)),j=je(0,1,_)*m}const N=w?{done:!1,value:c[0]}:A.next(j);l&&(N.value=l(N.value));let{done:z}=N;!w&&d!==null&&(z=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const I=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&z);return I&&i!==void 0&&(N.value=Cn(c,this.options,i)),b&&b(N.value),I&&this.finish(),N}get duration(){const{resolved:t}=this;return t?Ne(t.calculatedDuration):0}get time(){return Ne(this.currentTime)}set time(t){t=we(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ne(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=lu,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function uu(e){return new Tn(e)}const mu=new Set(["opacity","clipPath","filter","transform"]);function pu(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:l="easeInOut",times:c}={}){const d={[t]:n};c&&(d.offset=c);const u=Qa(l,i);return Array.isArray(u)&&(d.easing=u),e.animate(d,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}const fu=Wr(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),vn=10,xu=2e4;function hu(e){return An(e.type)||e.type==="spring"||!Ja(e.ease)}function gu(e,t){const n=new Tn({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<xu;)r=n.sample(a),i.push(r.value),a+=vn;return{times:void 0,keyframes:i,duration:a-vn,ease:"linear"}}const To={anticipate:so,backInOut:ro,circInOut:ao};function vu(e){return e in To}class Xs extends No{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:a}=this.options;this.resolver=new wo(a,(o,l)=>this.onKeyframesResolved(o,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:a,type:o,motionValue:l,name:c,startTime:d}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof a=="string"&&fn()&&vu(a)&&(a=To[a]),hu(this.options)){const{onComplete:m,onUpdate:p,motionValue:x,element:g,...v}=this.options,b=gu(t,v);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,i=b.times,a=b.ease,o="keyframes"}const u=pu(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:a});return u.startTime=d??this.calcStartTime(),this.pendingTimeline?(Rs(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:m}=this.options;l.set(Cn(t,this.options,n)),m&&m(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:r,times:i,type:o,ease:a,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Ne(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Ne(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=we(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return ae;const{animation:r}=n;Rs(r,t)}return ae}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:a,ease:o,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:u,onComplete:m,element:p,...x}=this.options,g=new Tn({...x,keyframes:r,duration:i,type:a,ease:o,times:l,isGenerator:!0}),v=we(this.time);d.setWithVelocity(g.sample(v-vn).value,g.sample(v).value,vn)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:a,damping:o,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:d}=n.owner.getProps();return fu()&&r&&mu.has(r)&&!c&&!d&&!i&&a!=="mirror"&&o!==0&&l!=="inertia"}}const yu={type:"spring",stiffness:500,damping:25,restSpeed:10},bu=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),wu={type:"keyframes",duration:.8},Nu={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ju=(e,{keyframes:t})=>t.length>2?wu:Qe.has(e)?e.startsWith("scale")?bu(t[1]):yu:Nu;function ku({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:o,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}const as=(e,t,n,r={},i,a)=>o=>{const l=Ur(r,e)||{},c=l.delay||r.delay||0;let{elapsed:d=0}=r;d=d-we(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:a?void 0:i};ku(l)||(u={...u,...ju(e,u)}),u.duration&&(u.duration=we(u.duration)),u.repeatDelay&&(u.repeatDelay=we(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let m=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(m=!0)),m&&!a&&t.get()!==void 0){const p=Cn(u.keyframes,l);if(p!==void 0)return V.update(()=>{u.onUpdate(p),u.onComplete()}),new Xa([])}return!a&&Xs.supports(u)?new Xs(u):new Tn(u)};function Su({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function os(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var a;let{transition:o=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(o=r);const d=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const m in c){const p=e.getValue(m,(a=e.latestValues[m])!==null&&a!==void 0?a:null),x=c[m];if(x===void 0||u&&Su(u,m))continue;const g={delay:n,...Ur(o||{},m)};let v=!1;if(window.MotionHandoffAnimation){const y=Wa(e);if(y){const w=window.MotionHandoffAnimation(y,m,V);w!==null&&(g.startTime=w,v=!0)}}ur(e,m),p.start(as(m,p,x,e.shouldReduceMotion&&qa.has(m)?{type:!1}:g,e,v));const b=p.animation;b&&d.push(b)}return l&&Promise.all(d).then(()=>{V.update(()=>{l&&sd(e,l)})}),d}function yr(e,t,n={}){var r;const i=Sn(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(a=n.transitionOverride);const o=i?()=>Promise.all(os(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:m,staggerDirection:p}=a;return zu(e,t,u+d,m,p,n)}:()=>Promise.resolve(),{when:c}=a;if(c){const[d,u]=c==="beforeChildren"?[o,l]:[l,o];return d().then(()=>u())}else return Promise.all([o(),l(n.delay)])}function zu(e,t,n=0,r=0,i=1,a){const o=[],l=(e.variantChildren.size-1)*r,c=i===1?(d=0)=>d*r:(d=0)=>l-d*r;return Array.from(e.variantChildren).sort(Au).forEach((d,u)=>{d.notify("AnimationStart",t),o.push(yr(d,t,{...a,delay:n+c(u)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(o)}function Au(e,t){return e.sortNodePosition(t)}function Cu(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>yr(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=yr(e,t,n);else{const i=typeof t=="function"?Sn(e,t,n.custom):t;r=Promise.all(os(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Tu=Ir.length;function Io(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Io(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Tu;n++){const r=Ir[n],i=e.props[r];(Rt(i)||i===!1)&&(t[r]=i)}return t}const Iu=[...Tr].reverse(),Pu=Tr.length;function Lu(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Cu(e,n,r)))}function Eu(e){let t=Lu(e),n=Ks(),r=!0;const i=c=>(d,u)=>{var m;const p=Sn(e,u,c==="exit"?(m=e.presenceContext)===null||m===void 0?void 0:m.custom:void 0);if(p){const{transition:x,transitionEnd:g,...v}=p;d={...d,...v,...g}}return d};function a(c){t=c(e)}function o(c){const{props:d}=e,u=Io(e.parent)||{},m=[],p=new Set;let x={},g=1/0;for(let b=0;b<Pu;b++){const y=Iu[b],w=n[y],j=d[y]!==void 0?d[y]:u[y],A=Rt(j),N=y===c?w.isActive:null;N===!1&&(g=b);let z=j===u[y]&&j!==d[y]&&A;if(z&&r&&e.manuallyAnimateOnMount&&(z=!1),w.protectedKeys={...x},!w.isActive&&N===null||!j&&!w.prevProp||jn(j)||typeof j=="boolean")continue;const I=Mu(w.prevProp,j);let C=I||y===c&&w.isActive&&!z&&A||b>g&&A,P=!1;const _=Array.isArray(j)?j:[j];let B=_.reduce(i(y),{});N===!1&&(B={});const{prevResolvedValues:R={}}=w,re={...R,...B},se=L=>{C=!0,p.has(L)&&(P=!0,p.delete(L)),w.needsAnimating[L]=!0;const H=e.getValue(L);H&&(H.liveStyle=!1)};for(const L in re){const H=B[L],le=R[L];if(x.hasOwnProperty(L))continue;let de=!1;dr(H)&&dr(le)?de=!$a(H,le):de=H!==le,de?H!=null?se(L):p.add(L):H!==void 0&&p.has(L)?se(L):w.protectedKeys[L]=!0}w.prevProp=j,w.prevResolvedValues=B,w.isActive&&(x={...x,...B}),r&&e.blockInitialAnimation&&(C=!1),C&&(!(z&&I)||P)&&m.push(..._.map(L=>({animation:L,options:{type:y}})))}if(p.size){const b={};p.forEach(y=>{const w=e.getBaseTarget(y),j=e.getValue(y);j&&(j.liveStyle=!0),b[y]=w??null}),m.push({animation:b})}let v=!!m.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(m):Promise.resolve()}function l(c,d){var u;if(n[c].isActive===d)return Promise.resolve();(u=e.variantChildren)===null||u===void 0||u.forEach(p=>{var x;return(x=p.animationState)===null||x===void 0?void 0:x.setActive(c,d)}),n[c].isActive=d;const m=o(c);for(const p in n)n[p].protectedKeys={};return m}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Ks(),r=!0}}}function Mu(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!$a(t,e):!1}function Ge(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ks(){return{animate:Ge(!0),whileInView:Ge(),whileHover:Ge(),whileTap:Ge(),whileDrag:Ge(),whileFocus:Ge(),exit:Ge()}}class Ue{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Ru extends Ue{constructor(t){super(t),t.animationState||(t.animationState=Eu(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();jn(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let Du=0;class Ou extends Ue{constructor(){super(...arguments),this.id=Du++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Fu={animation:{Feature:Ru},exit:{Feature:Ou}},xe={x:!1,y:!1};function Po(){return xe.x||xe.y}function Vu(e){return e==="x"||e==="y"?xe[e]?null:(xe[e]=!0,()=>{xe[e]=!1}):xe.x||xe.y?null:(xe.x=xe.y=!0,()=>{xe.x=xe.y=!1})}const ls=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Vt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Gt(e){return{point:{x:e.pageX,y:e.pageY}}}const _u=e=>t=>ls(t)&&e(t,Gt(t));function It(e,t,n,r){return Vt(e,t,_u(n),r)}const Js=(e,t)=>Math.abs(e-t);function Bu(e,t){const n=Js(e.x,t.x),r=Js(e.y,t.y);return Math.sqrt(n**2+r**2)}class Lo{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Gn(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,x=Bu(m.offset,{x:0,y:0})>=3;if(!p&&!x)return;const{point:g}=m,{timestamp:v}=ne;this.history.push({...g,timestamp:v});const{onStart:b,onMove:y}=this.handlers;p||(b&&b(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,m)},this.handlePointerMove=(m,p)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Un(p,this.transformPagePoint),V.update(this.updatePoint,!0)},this.handlePointerUp=(m,p)=>{this.end();const{onEnd:x,onSessionEnd:g,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Gn(m.type==="pointercancel"?this.lastMoveEventInfo:Un(p,this.transformPagePoint),this.history);this.startEvent&&x&&x(m,b),g&&g(m,b)},!ls(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Gt(t),l=Un(o,this.transformPagePoint),{point:c}=l,{timestamp:d}=ne;this.history=[{...c,timestamp:d}];const{onSessionStart:u}=n;u&&u(t,Gn(l,this.history)),this.removeListeners=Ut(It(this.contextWindow,"pointermove",this.handlePointerMove),It(this.contextWindow,"pointerup",this.handlePointerUp),It(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),he(this.updatePoint)}}function Un(e,t){return t?{point:t(e.point)}:e}function Qs(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Gn({point:e},t){return{point:e,delta:Qs(e,Eo(t)),offset:Qs(e,Hu(t)),velocity:Uu(t,.1)}}function Hu(e){return e[0]}function Eo(e){return e[e.length-1]}function Uu(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Eo(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>we(t)));)n--;if(!r)return{x:0,y:0};const a=Ne(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Mo=1e-4,Gu=1-Mo,$u=1+Mo,Ro=.01,qu=0-Ro,Wu=0+Ro;function ce(e){return e.max-e.min}function Yu(e,t,n){return Math.abs(e-t)<=n}function Zs(e,t,n,r=.5){e.origin=r,e.originPoint=K(t.min,t.max,e.origin),e.scale=ce(n)/ce(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Gu&&e.scale<=$u||isNaN(e.scale))&&(e.scale=1),(e.translate>=qu&&e.translate<=Wu||isNaN(e.translate))&&(e.translate=0)}function Pt(e,t,n,r){Zs(e.x,t.x,n.x,r?r.originX:void 0),Zs(e.y,t.y,n.y,r?r.originY:void 0)}function ei(e,t,n){e.min=n.min+t.min,e.max=e.min+ce(t)}function Xu(e,t,n){ei(e.x,t.x,n.x),ei(e.y,t.y,n.y)}function ti(e,t,n){e.min=t.min-n.min,e.max=e.min+ce(t)}function Lt(e,t,n){ti(e.x,t.x,n.x),ti(e.y,t.y,n.y)}function Ku(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?K(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?K(n,e,r.max):Math.min(e,n)),e}function ni(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Ju(e,{top:t,left:n,bottom:r,right:i}){return{x:ni(e.x,n,i),y:ni(e.y,t,r)}}function ri(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Qu(e,t){return{x:ri(e.x,t.x),y:ri(e.y,t.y)}}function Zu(e,t){let n=.5;const r=ce(e),i=ce(t);return i>r?n=_e(t.min,t.max-r,e.min):r>i&&(n=_e(e.min,e.max-i,t.min)),je(0,1,n)}function em(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const br=.35;function tm(e=br){return e===!1?e=0:e===!0&&(e=br),{x:si(e,"left","right"),y:si(e,"top","bottom")}}function si(e,t,n){return{min:ii(e,t),max:ii(e,n)}}function ii(e,t){return typeof e=="number"?e:e[t]||0}const ai=()=>({translate:0,scale:1,origin:0,originPoint:0}),st=()=>({x:ai(),y:ai()}),oi=()=>({min:0,max:0}),J=()=>({x:oi(),y:oi()});function me(e){return[e("x"),e("y")]}function Do({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function nm({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function rm(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function $n(e){return e===void 0||e===1}function wr({scale:e,scaleX:t,scaleY:n}){return!$n(e)||!$n(t)||!$n(n)}function $e(e){return wr(e)||Oo(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Oo(e){return li(e.x)||li(e.y)}function li(e){return e&&e!=="0%"}function yn(e,t,n){const r=e-n,i=t*r;return n+i}function ci(e,t,n,r,i){return i!==void 0&&(e=yn(e,i,r)),yn(e,n,r)+t}function Nr(e,t=0,n=1,r,i){e.min=ci(e.min,t,n,r,i),e.max=ci(e.max,t,n,r,i)}function Fo(e,{x:t,y:n}){Nr(e.x,t.translate,t.scale,t.originPoint),Nr(e.y,n.translate,n.scale,n.originPoint)}const di=.999999999999,ui=1.0000000000001;function sm(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let l=0;l<i;l++){a=n[l],o=a.projectionDelta;const{visualElement:c}=a.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&at(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Fo(e,o)),r&&$e(a.latestValues)&&at(e,a.latestValues))}t.x<ui&&t.x>di&&(t.x=1),t.y<ui&&t.y>di&&(t.y=1)}function it(e,t){e.min=e.min+t,e.max=e.max+t}function mi(e,t,n,r,i=.5){const a=K(e.min,e.max,i);Nr(e,t,n,a,r)}function at(e,t){mi(e.x,t.x,t.scaleX,t.scale,t.originX),mi(e.y,t.y,t.scaleY,t.scale,t.originY)}function Vo(e,t){return Do(rm(e.getBoundingClientRect(),t))}function im(e,t,n){const r=Vo(e,n),{scroll:i}=t;return i&&(it(r.x,i.offset.x),it(r.y,i.offset.y)),r}const _o=({current:e})=>e?e.ownerDocument.defaultView:null,am=new WeakMap;class om{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=J(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Gt(u).point)},a=(u,m)=>{const{drag:p,dragPropagation:x,onDragStart:g}=this.getProps();if(p&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vu(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),me(b=>{let y=this.getAxisMotionValue(b).get()||0;if(ye.test(y)){const{projection:w}=this.visualElement;if(w&&w.layout){const j=w.layout.layoutBox[b];j&&(y=ce(j)*(parseFloat(y)/100))}}this.originPoint[b]=y}),g&&V.postRender(()=>g(u,m)),ur(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},o=(u,m)=>{const{dragPropagation:p,dragDirectionLock:x,onDirectionLock:g,onDrag:v}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:b}=m;if(x&&this.currentDirection===null){this.currentDirection=lm(b),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",m.point,b),this.updateAxis("y",m.point,b),this.visualElement.render(),v&&v(u,m)},l=(u,m)=>this.stop(u,m),c=()=>me(u=>{var m;return this.getAnimationState(u)==="paused"&&((m=this.getAxisMotionValue(u).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Lo(t,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:_o(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&V.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Qt(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=Ku(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&nt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=Ju(i.layoutBox,n):this.constraints=!1,this.elastic=tm(r),a!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&me(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=em(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!nt(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=im(r,i.root,this.visualElement.getTransformPagePoint());let o=Qu(i.layout.layoutBox,a);if(n){const l=n(nm(o));this.hasMutatedConstraints=!!l,l&&(o=Do(l))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=me(u=>{if(!Qt(u,n,this.currentDirection))return;let m=c[u]||{};o&&(m={min:0,max:0});const p=i?200:1e6,x=i?40:1e7,g={type:"inertia",velocity:r?t[u]:0,bounceStiffness:p,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(u,g)});return Promise.all(d).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return ur(this.visualElement,t),r.start(as(t,r,0,n,this.visualElement,!1))}stopAnimation(){me(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){me(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){me(n=>{const{drag:r}=this.getProps();if(!Qt(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:l}=i.layout.layoutBox[n];a.set(t[n]-K(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!nt(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};me(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const c=l.get();i[o]=Zu({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),me(o=>{if(!Qt(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(K(c,d,i[o]))})}addListeners(){if(!this.visualElement.current)return;am.set(this.visualElement,this);const t=this.visualElement.current,n=It(t,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();nt(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),V.read(r);const o=Vt(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(me(u=>{const m=this.getAxisMotionValue(u);m&&(this.originPoint[u]+=c[u].translate,m.set(m.get()+c[u].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:o=br,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:o,dragMomentum:l}}}function Qt(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function lm(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class cm extends Ue{constructor(t){super(t),this.removeGroupControls=ae,this.removeListeners=ae,this.controls=new om(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ae}unmount(){this.removeGroupControls(),this.removeListeners()}}const pi=e=>(t,n)=>{e&&V.postRender(()=>e(t,n))};class dm extends Ue{constructor(){super(...arguments),this.removePointerDownListener=ae}onPointerDown(t){this.session=new Lo(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_o(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:pi(t),onStart:pi(n),onMove:r,onEnd:(a,o)=>{delete this.session,i&&V.postRender(()=>i(a,o))}}}mount(){this.removePointerDownListener=It(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const dn={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fi(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const yt={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(T.test(e))e=parseFloat(e);else return e;const n=fi(e,t.target.x),r=fi(e,t.target.y);return`${n}% ${r}%`}},um={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Be.parse(e);if(i.length>5)return r;const a=Be.createTransformer(e),o=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=l,i[1+o]/=c;const d=K(l,c,.5);return typeof i[2+o]=="number"&&(i[2+o]/=d),typeof i[3+o]=="number"&&(i[3+o]/=d),a(i)}};class mm extends f.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;Gc(pm),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),dn.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,o=r.projection;return o&&(o.isPresent=a,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||V.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Lr.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Bo(e){const[t,n]=Sa(),r=f.useContext(Ar);return s.jsx(mm,{...e,layoutGroup:r,switchLayoutGroup:f.useContext(Ea),isPresent:t,safeToRemove:n})}const pm={borderRadius:{...yt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:yt,borderTopRightRadius:yt,borderBottomLeftRadius:yt,borderBottomRightRadius:yt,boxShadow:um};function Ho(e,t,n){const r=Z(e)?e:ve(e);return r.start(as("",r,t,n)),r.animation}function Uo(e){return e instanceof SVGElement&&e.tagName!=="svg"}const fm=(e,t)=>e.depth-t.depth;class xm{constructor(){this.children=[],this.isDirty=!1}add(t){Gr(this.children,t),this.isDirty=!0}remove(t){zn(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(fm),this.isDirty=!1,this.children.forEach(t)}}function hm(e,t){const n=be.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(he(r),e(a-t))};return V.read(r,!0),()=>he(r)}const Go=["TopLeft","TopRight","BottomLeft","BottomRight"],gm=Go.length,xi=e=>typeof e=="string"?parseFloat(e):e,hi=e=>typeof e=="number"||T.test(e);function vm(e,t,n,r,i,a){i?(e.opacity=K(0,n.opacity!==void 0?n.opacity:1,ym(r)),e.opacityExit=K(t.opacity!==void 0?t.opacity:1,0,bm(r))):a&&(e.opacity=K(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<gm;o++){const l=`border${Go[o]}Radius`;let c=gi(t,l),d=gi(n,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||hi(c)===hi(d)?(e[l]=Math.max(K(xi(c),xi(d),r),0),(ye.test(d)||ye.test(c))&&(e[l]+="%")):e[l]=d}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,r))}function gi(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const ym=$o(0,.5,io),bm=$o(.5,.95,ae);function $o(e,t,n){return r=>r<e?0:r>t?1:n(_e(e,t,r))}function vi(e,t){e.min=t.min,e.max=t.max}function ue(e,t){vi(e.x,t.x),vi(e.y,t.y)}function yi(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function bi(e,t,n,r,i){return e-=t,e=yn(e,1/n,r),i!==void 0&&(e=yn(e,1/i,r)),e}function wm(e,t=0,n=1,r=.5,i,a=e,o=e){if(ye.test(t)&&(t=parseFloat(t),t=K(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=K(a.min,a.max,r);e===a&&(l-=t),e.min=bi(e.min,t,n,l,i),e.max=bi(e.max,t,n,l,i)}function wi(e,t,[n,r,i],a,o){wm(e,t[n],t[r],t[i],t.scale,a,o)}const Nm=["x","scaleX","originX"],jm=["y","scaleY","originY"];function Ni(e,t,n,r){wi(e.x,t,Nm,n?n.x:void 0,r?r.x:void 0),wi(e.y,t,jm,n?n.y:void 0,r?r.y:void 0)}function ji(e){return e.translate===0&&e.scale===1}function qo(e){return ji(e.x)&&ji(e.y)}function ki(e,t){return e.min===t.min&&e.max===t.max}function km(e,t){return ki(e.x,t.x)&&ki(e.y,t.y)}function Si(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Wo(e,t){return Si(e.x,t.x)&&Si(e.y,t.y)}function zi(e){return ce(e.x)/ce(e.y)}function Ai(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Sm{constructor(){this.members=[]}add(t){Gr(this.members,t),t.scheduleRender()}remove(t){if(zn(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function zm(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:u,rotateX:m,rotateY:p,skewX:x,skewY:g}=n;d&&(r=`perspective(${d}px) ${r}`),u&&(r+=`rotate(${u}deg) `),m&&(r+=`rotateX(${m}deg) `),p&&(r+=`rotateY(${p}deg) `),x&&(r+=`skewX(${x}deg) `),g&&(r+=`skewY(${g}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const qe={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},St=typeof window<"u"&&window.MotionDebug!==void 0,qn=["","X","Y","Z"],Am={visibility:"hidden"},Ci=1e3;let Cm=0;function Wn(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Yo(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Wa(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",V,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Yo(r)}function Xo({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},l=t==null?void 0:t()){this.id=Cm++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,St&&(qe.totalNodes=qe.resolvedTargetDeltas=qe.recalculatedProjection=0),this.nodes.forEach(Pm),this.nodes.forEach(Dm),this.nodes.forEach(Om),this.nodes.forEach(Lm),St&&window.MotionDebug.record(qe)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new xm)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new $r),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Uo(o),this.instance=o;const{layoutId:c,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(d||c)&&(this.isLayoutDirty=!0),e){let m;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=hm(p,250),dn.hasAnimatedSinceResize&&(dn.hasAnimatedSinceResize=!1,this.nodes.forEach(Ii))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:x,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||Hm,{onLayoutAnimationStart:b,onLayoutAnimationComplete:y}=u.getProps(),w=!this.targetLayout||!Wo(this.targetLayout,g),j=!p&&x;if(this.options.layoutRoot||this.resumeFrom||j||p&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,j);const A={...Ur(v,"layout"),onPlay:b,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A)}else p||Ii(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,he(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Fm),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Yo(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const m=this.path[u];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ti);return}this.isUpdating||this.nodes.forEach(Mm),this.isUpdating=!1,this.nodes.forEach(Rm),this.nodes.forEach(Tm),this.nodes.forEach(Im),this.clearAllSnapshots();const l=be.now();ne.delta=je(0,1e3/60,l-ne.timestamp),ne.timestamp=l,ne.isProcessing=!0,Vn.update.process(ne),Vn.preRender.process(ne),Vn.render.process(ne),ne.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lr.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Em),this.sharedNodes.forEach(Vm)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,V.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){V.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=J(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!qo(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(l||$e(this.latestValues)||u)&&(i(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),Um(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:l}=this.options;if(!l)return J();const c=l.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Gm))){const{scroll:u}=this.root;u&&(it(c.x,u.offset.x),it(c.y,u.offset.y))}return c}removeElementScroll(o){var l;const c=J();if(ue(c,o),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:m,options:p}=u;u!==this.root&&m&&p.layoutScroll&&(m.wasRoot&&ue(c,o),it(c.x,m.offset.x),it(c.y,m.offset.y))}return c}applyTransform(o,l=!1){const c=J();ue(c,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&at(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),$e(u.latestValues)&&at(c,u.latestValues)}return $e(this.latestValues)&&at(c,this.latestValues),c}removeTransform(o){const l=J();ue(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!$e(d.latestValues))continue;wr(d.latestValues)&&d.updateSnapshot();const u=J(),m=d.measurePageBox();ue(u,m),Ni(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return $e(this.latestValues)&&Ni(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ne.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:p}=this.options;if(!(!this.layout||!(m||p))){if(this.resolvedRelativeTargetAt=ne.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J(),this.relativeTargetOrigin=J(),Lt(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=J(),this.targetWithTransforms=J()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Xu(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ue(this.target,this.layout.layoutBox),Fo(this.target,this.targetDelta)):ue(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J(),this.relativeTargetOrigin=J(),Lt(this.relativeTargetOrigin,this.target,x.target),ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}St&&qe.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||wr(this.parent.latestValues)||Oo(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===ne.timestamp&&(d=!1),d)return;const{layout:u,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||m))return;ue(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,x=this.treeScale.y;sm(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=J());const{target:g}=l;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yi(this.prevProjectionDelta.x,this.projectionDelta.x),yi(this.prevProjectionDelta.y,this.projectionDelta.y)),Pt(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==x||!Ai(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ai(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),St&&qe.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=st(),this.projectionDelta=st(),this.projectionDeltaWithTransform=st()}setAnimationOrigin(o,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},m=st();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=J(),x=c?c.source:void 0,g=this.layout?this.layout.source:void 0,v=x!==g,b=this.getStack(),y=!b||b.members.length<=1,w=!!(v&&!y&&this.options.crossfade===!0&&!this.path.some(Bm));this.animationProgress=0;let j;this.mixTargetDelta=A=>{const N=A/1e3;Pi(m.x,o.x,N),Pi(m.y,o.y,N),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Lt(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_m(this.relativeTarget,this.relativeTargetOrigin,p,N),j&&km(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=J()),ue(j,this.relativeTarget)),v&&(this.animationValues=u,vm(u,d,this.latestValues,N,w,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=N},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(he(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=V.update(()=>{dn.hasAnimatedSinceResize=!0,this.currentAnimation=Ho(0,Ci,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ci),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&Ko(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||J();const m=ce(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+m;const p=ce(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+p}ue(l,c),at(l,u),Pt(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Sm),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const d={};c.z&&Wn("z",o,d,this.animationValues);for(let u=0;u<qn.length;u++)Wn(`rotate${qn[u]}`,o,d,this.animationValues),Wn(`skew${qn[u]}`,o,d,this.animationValues);o.render();for(const u in d)o.setStaticValue(u,d[u]),this.animationValues&&(this.animationValues[u]=d[u]);o.scheduleRender()}getProjectionStyles(o){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Am;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=ln(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=ln(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!$e(this.latestValues)&&(v.transform=u?u({},""):"none",this.hasProjected=!1),v}const p=m.animationValues||m.latestValues;this.applyTransformsToTarget(),d.transform=zm(this.projectionDeltaWithTransform,this.treeScale,p),u&&(d.transform=u(p,d.transform));const{x,y:g}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${g.origin*100}% 0`,m.animationValues?d.opacity=m===this?(c=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:d.opacity=m===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const v in Ot){if(p[v]===void 0)continue;const{correct:b,applyTo:y,isCSSVariable:w}=Ot[v],j=d.transform==="none"?p[v]:b(p[v],m);if(y){const A=y.length;for(let N=0;N<A;N++)d[y[N]]=j}else w?this.options.visualElement.renderState.vars[v]=j:d[v]=j}return this.options.layoutId&&(d.pointerEvents=m===this?ln(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Ti),this.root.sharedNodes.clear()}}}function Tm(e){e.updateLayout()}function Im(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?me(m=>{const p=o?n.measuredBox[m]:n.layoutBox[m],x=ce(p);p.min=r[m].min,p.max=p.min+x}):Ko(a,n.layoutBox,r)&&me(m=>{const p=o?n.measuredBox[m]:n.layoutBox[m],x=ce(r[m]);p.max=p.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+x)});const l=st();Pt(l,r,n.layoutBox);const c=st();o?Pt(c,e.applyTransform(i,!0),n.measuredBox):Pt(c,r,n.layoutBox);const d=!qo(l);let u=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:p,layout:x}=m;if(p&&x){const g=J();Lt(g,n.layoutBox,p.layoutBox);const v=J();Lt(v,r,x.layoutBox),Wo(g,v)||(u=!0),m.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=g,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Pm(e){St&&qe.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Lm(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Em(e){e.clearSnapshot()}function Ti(e){e.clearMeasurements()}function Mm(e){e.isLayoutDirty=!1}function Rm(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ii(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Dm(e){e.resolveTargetDelta()}function Om(e){e.calcProjection()}function Fm(e){e.resetSkewAndRotation()}function Vm(e){e.removeLeadSnapshot()}function Pi(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Li(e,t,n,r){e.min=K(t.min,n.min,r),e.max=K(t.max,n.max,r)}function _m(e,t,n,r){Li(e.x,t.x,n.x,r),Li(e.y,t.y,n.y,r)}function Bm(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Hm={duration:.45,ease:[.4,0,.1,1]},Ei=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Mi=Ei("applewebkit/")&&!Ei("chrome/")?Math.round:ae;function Ri(e){e.min=Mi(e.min),e.max=Mi(e.max)}function Um(e){Ri(e.x),Ri(e.y)}function Ko(e,t,n){return e==="position"||e==="preserve-aspect"&&!Yu(zi(t),zi(n),.2)}function Gm(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const $m=Xo({attachResizeListener:(e,t)=>Vt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Yn={current:void 0},Jo=Xo({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Yn.current){const e=new $m({});e.mount(window),e.setOptions({layoutScroll:!0}),Yn.current=e}return Yn.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),qm={pan:{Feature:dm},drag:{Feature:cm,ProjectionNode:Jo,MeasureLayout:Bo}};function In(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const a=(r=n==null?void 0:n[e])!==null&&r!==void 0?r:i.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}function Qo(e,t){const n=In(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Di(e){return!(e.pointerType==="touch"||Po())}function Wm(e,t,n={}){const[r,i,a]=Qo(e,n),o=l=>{if(!Di(l))return;const{target:c}=l,d=t(c,l);if(typeof d!="function"||!c)return;const u=m=>{Di(m)&&(d(m),c.removeEventListener("pointerleave",u))};c.addEventListener("pointerleave",u,i)};return r.forEach(l=>{l.addEventListener("pointerenter",o,i)}),a}function Oi(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&V.postRender(()=>a(t,Gt(t)))}class Ym extends Ue{mount(){const{current:t}=this.node;t&&(this.unmount=Wm(t,(n,r)=>(Oi(this.node,r,"Start"),i=>Oi(this.node,i,"End"))))}unmount(){}}class Xm extends Ue{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ut(Vt(this.node.current,"focus",()=>this.onFocus()),Vt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Zo=(e,t)=>t?e===t?!0:Zo(e,t.parentElement):!1,Km=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Jm(e){return Km.has(e.tagName)||e.tabIndex!==-1}const zt=new WeakSet;function Fi(e){return t=>{t.key==="Enter"&&e(t)}}function Xn(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Qm=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Fi(()=>{if(zt.has(n))return;Xn(n,"down");const i=Fi(()=>{Xn(n,"up")}),a=()=>Xn(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Vi(e){return ls(e)&&!Po()}function Zm(e,t,n={}){const[r,i,a]=Qo(e,n),o=l=>{const c=l.currentTarget;if(!Vi(l)||zt.has(c))return;zt.add(c);const d=t(c,l),u=(x,g)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",p),!(!Vi(x)||!zt.has(c))&&(zt.delete(c),typeof d=="function"&&d(x,{success:g}))},m=x=>{u(x,n.useGlobalTarget||Zo(c,x.target))},p=x=>{u(x,!1)};window.addEventListener("pointerup",m,i),window.addEventListener("pointercancel",p,i)};return r.forEach(l=>{!Jm(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,i),l.addEventListener("focus",d=>Qm(d,i),i)}),a}function _i(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&V.postRender(()=>a(t,Gt(t)))}class ep extends Ue{mount(){const{current:t}=this.node;t&&(this.unmount=Zm(t,(n,r)=>(_i(this.node,r,"Start"),(i,{success:a})=>_i(this.node,i,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const jr=new WeakMap,Kn=new WeakMap,tp=e=>{const t=jr.get(e.target);t&&t(e)},np=e=>{e.forEach(tp)};function rp({root:e,...t}){const n=e||document;Kn.has(n)||Kn.set(n,{});const r=Kn.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(np,{root:e,...t})),r[i]}function sp(e,t,n){const r=rp(t);return jr.set(e,n),r.observe(e),()=>{jr.delete(e),r.unobserve(e)}}const ip={some:0,all:1};class ap extends Ue{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:ip[i]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:m}=this.node.getProps(),p=d?u:m;p&&p(c)};return sp(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(op(t,n))&&this.startObserver()}unmount(){}}function op({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const lp={inView:{Feature:ap},tap:{Feature:ep},focus:{Feature:Xm},hover:{Feature:Ym}},cp={layout:{ProjectionNode:Jo,MeasureLayout:Bo}},kr={current:null},el={current:!1};function dp(){if(el.current=!0,!!Cr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>kr.current=e.matches;e.addListener(t),t()}else kr.current=!1}const up=[...bo,ie,Be],mp=e=>up.find(yo(e)),dt=new WeakMap;function pp(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Z(i))e.addValue(r,i);else if(Z(a))e.addValue(r,ve(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ve(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Bi=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tl{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=es,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=be.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,V.render(this.render,!1,!0))};const{latestValues:c,renderState:d,onUpdate:u}=o;this.onUpdate=u,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=kn(n),this.isVariantNode=Pa(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:m,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in p){const g=p[x];c[x]!==void 0&&Z(g)&&g.set(c[x],!1)}}mount(t){this.current=t,dt.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),el.current||dp(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:kr.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){dt.delete(this.current),this.projection&&this.projection.unmount(),he(this.notifyUpdate),he(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Qe.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&V.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in lt){const n=lt[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):J()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Bi.length;r++){const i=Bi[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,o=t[a];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=pp(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ve(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(go(i)||oo(i))?i=parseFloat(i):!mp(i)&&Be.test(n)&&(i=fo(t,n)),this.setBaseTarget(t,Z(i)?i.get():i)),Z(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Mr(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Z(a)?a:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new $r),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class nl extends tl{constructor(){super(...arguments),this.KeyframeResolver=wo}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Z(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function fp(e){return window.getComputedStyle(e)}class rl extends nl{constructor(){super(...arguments),this.type="html",this.renderInstance=Va}readValueFromInstance(t,n){if(Qe.has(n)){const r=Zr(n);return r&&r.default||0}else{const r=fp(t),i=(Rr(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Vo(t,n)}build(t,n,r){Fr(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Hr(t,n,r)}}class sl extends nl{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=J}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Qe.has(n)){const r=Zr(n);return r&&r.default||0}return n=_a.has(n)?n:Pr(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Ua(t,n,r)}build(t,n,r){Vr(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Ba(t,n,r,i)}mount(t){this.isSVGTag=Br(t.tagName),super.mount(t)}}const xp=(e,t)=>Er(e)?new sl(t):new rl(t,{allowProjection:e!==f.Fragment}),hp=Zc({...Fu,...lp,...qm,...cp},xp),S=fc(hp);function il(e,t){let n;const r=()=>{const{currentTime:i}=t,o=(i===null?0:i.value)/100;n!==o&&e(o),n=o};return V.update(r,!0),()=>he(r)}const un=new WeakMap;let Fe;function gp(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function vp({target:e,contentRect:t,borderBoxSize:n}){var r;(r=un.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return gp(e,n)}})})}function yp(e){e.forEach(vp)}function bp(){typeof ResizeObserver>"u"||(Fe=new ResizeObserver(yp))}function wp(e,t){Fe||bp();const n=In(e);return n.forEach(r=>{let i=un.get(r);i||(i=new Set,un.set(r,i)),i.add(t),Fe==null||Fe.observe(r)}),()=>{n.forEach(r=>{const i=un.get(r);i==null||i.delete(t),i!=null&&i.size||Fe==null||Fe.unobserve(r)})}}const mn=new Set;let Et;function Np(){Et=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};mn.forEach(n=>n(t))},window.addEventListener("resize",Et)}function jp(e){return mn.add(e),Et||Np(),()=>{mn.delete(e),!mn.size&&Et&&(Et=void 0)}}function kp(e,t){return typeof e=="function"?jp(e):wp(e,t)}const Sp=50,Hi=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),zp=()=>({time:0,x:Hi(),y:Hi()}),Ap={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Ui(e,t,n,r){const i=n[t],{length:a,position:o}=Ap[t],l=i.current,c=n.time;i.current=e[`scroll${o}`],i.scrollLength=e[`scroll${a}`]-e[`client${a}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=_e(0,i.scrollLength,i.current);const d=r-c;i.velocity=d>Sp?0:qr(i.current-l,d)}function Cp(e,t,n){Ui(e,"x",t,n),Ui(e,"y",t,n),t.time=n}function Tp(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();n.x+=i.left-a.left,n.y+=i.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:a}=r.getBBox();n.x+=i,n.y+=a;let o=null,l=r.parentNode;for(;!o;)l.tagName==="svg"&&(o=l),l=r.parentNode;r=o}else break;return n}const Sr={start:0,center:.5,end:1};function Gi(e,t,n=0){let r=0;if(e in Sr&&(e=Sr[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const Ip=[0,0];function Pp(e,t,n,r){let i=Array.isArray(e)?e:Ip,a=0,o=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,Sr[e]?e:"0"]),a=Gi(i[0],n,r),o=Gi(i[1],t),a-o}const Lp={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Ep={x:0,y:0};function Mp(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Rp(e,t,n){const{offset:r=Lp.All}=n,{target:i=e,axis:a="y"}=n,o=a==="y"?"height":"width",l=i!==e?Tp(i,e):Ep,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:Mp(i),d={width:e.clientWidth,height:e.clientHeight};t[a].offset.length=0;let u=!t[a].interpolate;const m=r.length;for(let p=0;p<m;p++){const x=Pp(r[p],d[o],c[o],l[a]);!u&&x!==t[a].interpolatorOffsets[p]&&(u=!0),t[a].offset[p]=x}u&&(t[a].interpolate=ss(t[a].offset,is(r),{clamp:!1}),t[a].interpolatorOffsets=[...t[a].offset]),t[a].progress=je(0,1,t[a].interpolate(t[a].current))}function Dp(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Op(e,t,n,r={}){return{measure:()=>Dp(e,r.target,n),update:i=>{Cp(e,n,i),(r.offset||r.target)&&Rp(e,n,r)},notify:()=>t(n)}}const bt=new WeakMap,$i=new WeakMap,Jn=new WeakMap,qi=e=>e===document.documentElement?window:e;function cs(e,{container:t=document.documentElement,...n}={}){let r=Jn.get(t);r||(r=new Set,Jn.set(t,r));const i=zp(),a=Op(t,e,i,n);if(r.add(a),!bt.has(t)){const l=()=>{for(const p of r)p.measure()},c=()=>{for(const p of r)p.update(ne.timestamp)},d=()=>{for(const p of r)p.notify()},u=()=>{V.read(l,!1,!0),V.read(c,!1,!0),V.update(d,!1,!0)};bt.set(t,u);const m=qi(t);window.addEventListener("resize",u,{passive:!0}),t!==document.documentElement&&$i.set(t,kp(t,u)),m.addEventListener("scroll",u,{passive:!0})}const o=bt.get(t);return V.read(o,!1,!0),()=>{var l;he(o);const c=Jn.get(t);if(!c||(c.delete(a),c.size))return;const d=bt.get(t);bt.delete(t),d&&(qi(t).removeEventListener("scroll",d),(l=$i.get(t))===null||l===void 0||l(),window.removeEventListener("resize",d))}}function Fp({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=cs(a=>{r.value=a[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Qn=new Map;function al({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Qn.has(t)||Qn.set(t,{});const r=Qn.get(t);return r[n]||(r[n]=Ya()?new ScrollTimeline({source:t,axis:n}):Fp({source:t,axis:n})),r[n]}function Vp(e){return e.length===2}function ol(e){return e&&(e.target||e.offset)}function _p(e,t){return Vp(e)||ol(t)?cs(n=>{e(n[t.axis].progress,n)},t):il(e,al(t))}function Bp(e,t){if(e.flatten(),ol(t))return e.pause(),cs(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=al(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),il(i=>{r.time=r.duration*i},n))):ae}}function Hp(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?_p(e,r):Bp(e,r)}function Wi(e,t){oc(!!(!t||t.current))}const Up=()=>({scrollX:ve(0),scrollY:ve(0),scrollXProgress:ve(0),scrollYProgress:ve(0)});function te({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Je(Up);return(n?_t:f.useEffect)(()=>(Wi("target",t),Wi("container",e),Hp((o,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function ze(e){const t=Je(()=>ve(e)),{isStatic:n}=f.useContext(Xe);if(n){const[,r]=f.useState(e);f.useEffect(()=>t.on("change",r),[])}return t}function ds(e,t){const n=ze(t()),r=()=>n.set(t());return r(),_t(()=>{const i=()=>V.preRender(r,!1,!0),a=e.map(o=>o.on("change",i));return()=>{a.forEach(o=>o()),he(r)}}),n}function xt(e,...t){const n=e.length;function r(){let i="";for(let a=0;a<n;a++){i+=e[a];const o=t[a];o&&(i+=Z(o)?o.get():o)}return i}return ds(t.filter(Z),r)}function Yi(e){return typeof e=="number"?e:parseFloat(e)}function ut(e,t={}){const{isStatic:n}=f.useContext(Xe),r=f.useRef(null),i=ze(Z(e)?Yi(e.get()):e),a=f.useRef(i.get()),o=f.useRef(()=>{}),l=()=>{c(),r.current=uu({keyframes:[i.get(),a.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o.current})},c=()=>{r.current&&r.current.stop()};return f.useInsertionEffect(()=>i.attach((d,u)=>n?u(d):(a.current=d,o.current=u,V.postRender(l),i.get()),c),[JSON.stringify(t)]),_t(()=>{if(Z(e))return e.on("change",d=>i.set(Yi(d)))},[i]),i}const Gp=e=>e&&typeof e=="object"&&e.mix,$p=e=>Gp(e)?e.mix:void 0;function qp(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],a=e[2+n],o=e[3+n],l=ss(i,a,{mixer:$p(a[0]),...o});return t?l(r):l}function Wp(e){Ct.current=[],e();const t=ds(Ct.current,e);return Ct.current=void 0,t}function D(e,t,n,r){if(typeof e=="function")return Wp(e);const i=typeof t=="function"?t:qp(t,n,r);return Array.isArray(e)?Xi(e,i):Xi([e],([a])=>i(a))}function Xi(e,t){const n=Je(()=>[]);return ds(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}function Yp(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(ts(r),xn);return{type:"keyframes",ease:a=>r.next(i*a).value/t,duration:Ne(i)}}const Xp=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e};function ll(e,t){return Ao(e)?e[Xp(0,e.length,t)]:e}function us(e){return typeof e=="object"&&!Array.isArray(e)}function cl(e,t,n,r){return typeof e=="string"&&us(t)?In(e,n,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function Kp(e,t,n){return e*(t+1)}function Ki(e,t,n,r){var i;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:(i=r.get(t))!==null&&i!==void 0?i:e}function Jp(e,t,n){for(let r=0;r<e.length;r++){const i=e[r];i.at>t&&i.at<n&&(zn(e,i),r--)}}function Qp(e,t,n,r,i,a){Jp(e,i,a);for(let o=0;o<t.length;o++)e.push({value:t[o],at:K(i,a,r[o]),easing:ll(n,o)})}function Zp(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]/(t+1)}function ef(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const tf="easeInOut";function nf(e,{defaultTransition:t={},...n}={},r,i){const a=t.duration||.3,o=new Map,l=new Map,c={},d=new Map;let u=0,m=0,p=0;for(let x=0;x<e.length;x++){const g=e[x];if(typeof g=="string"){d.set(g,m);continue}else if(!Array.isArray(g)){d.set(g.name,Ki(m,g.at,u,d));continue}let[v,b,y={}]=g;y.at!==void 0&&(m=Ki(m,y.at,u,d));let w=0;const j=(A,N,z,I=0,C=0)=>{const P=rf(A),{delay:_=0,times:B=is(P),type:R="keyframes",repeat:re,repeatType:se,repeatDelay:pe=0,...ke}=N;let{ease:L=t.ease||"easeOut",duration:H}=N;const le=typeof _=="function"?_(I,C):_,de=P.length,h=An(R)?R:i==null?void 0:i[R];if(de<=2&&h){let F=100;if(de===2&&of(P)){const q=P[1]-P[0];F=Math.abs(q)}const W={...ke};H!==void 0&&(W.duration=we(H));const X=Yp(W,F,h);L=X.ease,H=X.duration}H??(H=a);const k=m+le;B.length===1&&B[0]===0&&(B[1]=1);const O=B.length-P.length;if(O>0&&Co(B,O),P.length===1&&P.unshift(null),re){H=Kp(H,re);const F=[...P],W=[...B];L=Array.isArray(L)?[...L]:[L];const X=[...L];for(let q=0;q<re;q++){P.push(...F);for(let G=0;G<F.length;G++)B.push(W[G]+(q+1)),L.push(G===0?"linear":ll(X,G-1))}Zp(B,re)}const U=k+H;Qp(z,P,L,B,k,U),w=Math.max(le+H,w),p=Math.max(U,p)};if(Z(v)){const A=Ji(v,l);j(b,y,Qi("default",A))}else{const A=cl(v,b,r,c),N=A.length;for(let z=0;z<N;z++){b=b,y=y;const I=A[z],C=Ji(I,l);for(const P in b)j(b[P],sf(y,P),Qi(P,C),z,N)}}u=m,m+=w}return l.forEach((x,g)=>{for(const v in x){const b=x[v];b.sort(ef);const y=[],w=[],j=[];for(let N=0;N<b.length;N++){const{at:z,value:I,easing:C}=b[N];y.push(I),w.push(_e(0,p,z)),j.push(C||"easeOut")}w[0]!==0&&(w.unshift(0),y.unshift(y[0]),j.unshift(tf)),w[w.length-1]!==1&&(w.push(1),y.push(null)),o.has(g)||o.set(g,{keyframes:{},transition:{}});const A=o.get(g);A.keyframes[v]=y,A.transition[v]={...t,duration:p,ease:j,times:w,...n}}}),o}function Ji(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function Qi(e,t){return t[e]||(t[e]=[]),t[e]}function rf(e){return Array.isArray(e)?e:[e]}function sf(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const af=e=>typeof e=="number",of=e=>e.every(af);function lf(e,t){return e in t}class cf extends tl{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,n){if(lf(n,t)){const r=t[n];if(typeof r=="string"||typeof r=="number")return r}}getBaseTargetFromProps(){}removeValueFromRenderState(t,n){delete n.output[t]}measureInstanceViewportBox(){return J()}build(t,n){Object.assign(t.output,n)}renderInstance(t,{output:n}){Object.assign(t,n)}sortInstanceNodePosition(){return 0}}function df(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Uo(e)?new sl(t):new rl(t);n.mount(e),dt.set(e,n)}function uf(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new cf(t);n.mount(e),dt.set(e,n)}function mf(e,t){return Z(e)||typeof e=="number"||typeof e=="string"&&!us(t)}function dl(e,t,n,r){const i=[];if(mf(e,t))i.push(Ho(e,us(t)&&t.default||t,n&&(n.default||n)));else{const a=cl(e,t,r),o=a.length;for(let l=0;l<o;l++){const c=a[l],d=c instanceof Element?df:uf;dt.has(c)||d(c);const u=dt.get(c),m={...n};"delay"in m&&typeof m.delay=="function"&&(m.delay=m.delay(l,o)),i.push(...os(u,{...t,transition:m},{}))}}return i}function pf(e,t,n){const r=[];return nf(e,t,n,{spring:rs}).forEach(({keyframes:a,transition:o},l)=>{r.push(...dl(l,a,o))}),r}function ff(e){return Array.isArray(e)&&e.some(Array.isArray)}function xf(e){function t(n,r,i){let a=[];return ff(n)?a=pf(n,r,e):a=dl(n,r,i,e),new Xa(a)}return t}const Zi=xf(),hf={some:0,all:1};function gf(e,t,{root:n,margin:r,amount:i="some"}={}){const a=In(e),o=new WeakMap,l=d=>{d.forEach(u=>{const m=o.get(u.target);if(u.isIntersecting!==!!m)if(u.isIntersecting){const p=t(u.target,u);typeof p=="function"?o.set(u.target,p):c.unobserve(u.target)}else typeof m=="function"&&(m(u),o.delete(u.target))})},c=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:hf[i]});return a.forEach(d=>c.observe(d)),()=>c.disconnect()}function ms(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[a,o]=f.useState(!1);return f.useEffect(()=>{if(!e.current||i&&a)return;const l=()=>(o(!0),i?void 0:()=>o(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return gf(e.current,l,c)},[t,e,n,i,r]),a}const ea={type:"spring",stiffness:122,damping:30,mass:5};function vf({img:e,alt:t,position:n,multiplier:r,mouseX:i,mouseY:a}){const o=ut(0,ea),l=ut(0,ea);return i.on("change",c=>{o.set(c*r.x)}),a.on("change",c=>{l.set(c*r.y)}),s.jsxs(S.div,{className:"absolute aspect-square w-[80px] bg-zinc-100 dark:bg-zinc-800",style:{left:n.left,top:n.top,x:o,y:l},children:[s.jsx("img",{src:e,alt:t}),s.jsx("div",{className:"absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-80"})]})}function yf(){const e=ze(0),t=ze(0),n=r=>{const{clientX:i,clientY:a}=r;e.set(i),t.set(a)};return s.jsx("div",{className:"",onMouseMove:n,children:s.jsx("div",{className:"mx-auto max-w-screen-xl overflow-hidden px-4 py-8 sm:py-16 lg:px-6",children:s.jsxs("div",{className:"relative mx-auto max-w-screen-sm py-12 text-center",children:[s.jsx("div",{className:"pointer-events-none absolute inset-0",children:bf.map((r,i)=>s.jsx(vf,{mouseX:e,mouseY:t,...r},i))}),s.jsxs("div",{className:"relative",children:[s.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white",children:"Join the community"}),s.jsx("p",{className:"mb-6 text-zinc-500 dark:text-zinc-400",children:"More than +1000 designers sharing their work."}),s.jsx("a",{href:"#",className:`\r
                            px-2.5 py-1.5 text-sm \r
                            text-white bg-zinc-900 \r
                            dark:bg-white dark:text-zinc-900 \r
                            hover:bg-zinc-700 dark:hover:bg-zinc-200\r
                            transition-colors duration-300 \r
                            inline-flex items-center rounded-md`,children:"Join now"})]})]})})})}const bf=[{position:{left:"30%",top:"0%"},multiplier:{x:-.08,y:-.02},img:"https://images.beta.cosmos.so/ef796418-a1ca-4b0b-8536-60a9e3a01449?format=jpeg",alt:"cosmos"},{position:{left:"10%",top:"50%"},multiplier:{x:-.05,y:-.09},img:"https://images.beta.cosmos.so/d5c3850c-7a85-4e46-b61f-059aa1300f77?format=jpeg",alt:"cosmos"},{position:{left:"30%",top:"90%"},multiplier:{x:-.03,y:-.06},img:"https://images.beta.cosmos.so/46a3308c-db18-484d-9421-2c68b71814b7?format=jpeg",alt:"cosmos"},{position:{left:"70%",top:"10%"},multiplier:{x:-.08,y:-.02},img:"https://images.beta.cosmos.so/d5acdfdf-8785-43f6-bc55-0c686812b3bd?format=jpeg",alt:"cosmos"},{position:{left:"90%",top:"50%"},multiplier:{x:-.05,y:-.09},img:"https://images.beta.cosmos.so/b7ecaea1-230a-4779-a45c-517c1594982d?format=jpeg",alt:"cosmos"},{position:{left:"70%",top:"85%"},multiplier:{x:-.03,y:-.06},img:"https://images.beta.cosmos.so/bab29ee2-aa17-41b5-b66e-a985e9307b1b?format=jpeg",alt:"cosmos"}],wf={char:.03,word:.05,line:.1},tt={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},Nf={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},jf={blur:{container:tt,item:{hidden:{opacity:0,filter:"blur(12px)"},visible:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(12px)"}}},"fade-in-blur":{container:tt,item:{hidden:{opacity:0,y:20,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:20,filter:"blur(12px)"}}},scale:{container:tt,item:{hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1},exit:{opacity:0,scale:0}}},fade:{container:tt,item:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}}},slide:{container:tt,item:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0},exit:{opacity:0,y:20}}}},ul=At.memo(({segment:e,variants:t,per:n,segmentWrapperClassName:r})=>{const i=n==="line"?s.jsx(S.span,{variants:t,className:"block",children:e}):n==="word"?s.jsx(S.span,{"aria-hidden":"true",variants:t,className:"inline-block whitespace-pre",children:e}):s.jsx(S.span,{className:"inline-block whitespace-pre",children:e.split("").map((o,l)=>s.jsx(S.span,{"aria-hidden":"true",variants:t,className:"inline-block whitespace-pre",children:o},`char-${l}`))});if(!r)return i;const a=n==="line"?"block":"inline-block";return s.jsx("span",{className:$(a,r),children:i})});ul.displayName="AnimationComponent";const kf=(e,t)=>t==="line"?e.split(`
`):e.split(/(\s+)/),bn=e=>typeof e=="object"&&e!==null&&"transition"in e,ta=(e,t)=>{if(!t)return e;const{exit:n,...r}=t;return{...e,visible:{...e.visible,transition:{...bn(e.visible)?e.visible.transition:{},...r}},exit:{...e.exit,transition:{...bn(e.exit)?e.exit.transition:{},...r,staggerDirection:-1}}}};function He({children:e,per:t="word",as:n="p",variants:r,className:i,preset:a="fade",delay:o=0,speedReveal:l=1,speedSegment:c=1,trigger:d=!0,onAnimationComplete:u,onAnimationStart:m,segmentWrapperClassName:p,containerTransition:x,segmentTransition:g,style:v}){var C,P,_,B,R,re;const b=kf(e,t),y=S[n],w=a?jf[a]:{container:tt,item:Nf},j=wf[t]/l,A=.3/c,N=bn(((C=r==null?void 0:r.container)==null?void 0:C.visible)??{})?(_=((P=r==null?void 0:r.container)==null?void 0:P.visible).transition)==null?void 0:_.staggerChildren:void 0,z=bn(((B=r==null?void 0:r.container)==null?void 0:B.visible)??{})?(re=((R=r==null?void 0:r.container)==null?void 0:R.visible).transition)==null?void 0:re.delayChildren:void 0,I={container:ta((r==null?void 0:r.container)||w.container,{staggerChildren:N??j,delayChildren:z??o,...x,exit:{staggerChildren:N??j,staggerDirection:-1}}),item:ta((r==null?void 0:r.item)||w.item,{duration:A,...g})};return s.jsx(ee,{mode:"popLayout",children:d&&s.jsxs(y,{initial:"hidden",animate:"visible",exit:"exit",variants:I.container,className:i,onAnimationComplete:u,onAnimationStart:m,style:v,children:[t!=="line"?s.jsx("span",{className:"sr-only",children:e}):null,b.map((se,pe)=>s.jsx(ul,{segment:se,variants:I.item,per:t,segmentWrapperClassName:p},`${t}-${pe}-${se}`))]})})}/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ml=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=f.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:o,...l},c)=>f.createElement("svg",{ref:c,...zf,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ml("lucide",i),...l},[...o.map(([d,u])=>f.createElement(d,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(e,t)=>{const n=f.forwardRef(({className:r,...i},a)=>f.createElement(Af,{ref:a,iconNode:t,className:ml(`lucide-${Sf(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],oe=Ae("ArrowRight",Cf);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],pl=Ae("ChevronLeft",Tf);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],fl=Ae("ChevronRight",If);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ps=Ae("ChevronUp",Pf);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],fs=Ae("Moon",Lf);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Mf=Ae("Play",Ef);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xs=Ae("Plus",Rf);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Of=Ae("Search",Df);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],hs=Ae("Sun",Ff);function Vf(){const e=f.useRef(null),t=ms(e);return s.jsx("div",{className:"py-24 sm:py-32",ref:e,children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("div",{className:"relative text-center  flex flex-col md:flex-row items-start justify-between space-y-4 md:items-center md:space-y-0",children:[s.jsxs("div",{className:"text-left flex flex-col space-y-2 md:space-y-4",children:[s.jsx(He,{className:"text-3xl text-zinc-900 dark:text-white",as:"h2",preset:"blur",trigger:t,per:"char",children:"Join the community"}),s.jsx("p",{className:"text-zinc-500 dark:text-zinc-400",children:"More than +1000 designers sharing their work."})]}),s.jsxs("div",{className:"flex flex-row items-center space-x-4",children:[s.jsx("a",{href:"#",className:"inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700",children:"Join now"}),s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800",children:["Learn More",s.jsx(oe,{className:"size-4"})]})]})]})})})}function Ve({value:e,className:t,springOptions:n,as:r="span"}){const i=S.create(r),a=ut(e,n),o=D(a,l=>Math.round(l).toLocaleString());return f.useEffect(()=>{a.set(e)},[a,e]),s.jsx(i,{className:$("tabular-nums",t),children:o})}function _f(){const[e,t]=f.useState(0),n=f.useRef(null);return ms(n)&&e===0&&t(1e4),s.jsx("div",{ref:n,className:"mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6",children:s.jsxs("div",{className:"relative mx-auto max-w-screen-sm py-12 text-center",children:[s.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white",children:"Join the community"}),s.jsxs("p",{className:"mb-6 text-zinc-500 dark:text-zinc-400",children:["More than +"," ",s.jsx(Ve,{value:e,springOptions:{bounce:0,duration:2e3}})," ","designers sharing their work."]}),s.jsxs("div",{className:"flex items-center justify-center gap-4",children:[s.jsx("a",{href:"#",className:"inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",children:"Join now"}),s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-200 dark:text-zinc-50 dark:hover:bg-zinc-900",children:["Learn more ",s.jsx(oe,{className:"size-4"})]})]})]})})}const xl=f.createContext(void 0);function gs(){const e=f.useContext(xl);if(!e)throw new Error("useAccordion must be used within an AccordionProvider");return e}function Bf({children:e,variants:t,expandedValue:n,onValueChange:r}){const[i,a]=f.useState(null),o=n!==void 0?n:i,l=c=>{const d=o===c?null:c;r?r(d):a(d)};return s.jsx(xl.Provider,{value:{expandedValue:o,toggleItem:l,variants:t},children:e})}function $t({children:e,className:t,transition:n,variants:r,expandedValue:i,onValueChange:a}){return s.jsx(Ia,{transition:n,children:s.jsx("div",{className:$("relative",t),"aria-orientation":"vertical",children:s.jsx(Bf,{variants:r,expandedValue:i,onValueChange:a,children:e})})})}function qt({value:e,children:t,className:n}){const{expandedValue:r}=gs(),i=e===r;return s.jsx("div",{className:$("overflow-hidden",n),...i?{"data-expanded":""}:{"data-closed":""},children:At.Children.map(t,a=>At.isValidElement(a)?At.cloneElement(a,{...a.props,value:e,expanded:i}):a)})}function Wt({children:e,className:t,...n}){const{toggleItem:r,expandedValue:i}=gs(),a=n.value,o=a===i;return s.jsx("button",{onClick:()=>a!==void 0&&r(a),"aria-expanded":o,type:"button",className:$("group",t),...o?{"data-expanded":""}:{"data-closed":""},children:e})}function Yt({children:e,className:t,...n}){const{expandedValue:r,variants:i}=gs(),o=n.value===r,l={expanded:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},c={expanded:{...l.expanded,...i==null?void 0:i.expanded},collapsed:{...l.collapsed,...i==null?void 0:i.collapsed}};return s.jsx(ee,{initial:!1,children:o&&s.jsx(S.div,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:c,className:t,children:e})})}function Hf(){return s.jsxs("div",{className:"relative mx-auto max-w-xl px-6 py-12",children:[s.jsxs("div",{className:"mb-10 text-left",children:[s.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white",children:"Frequently asked questions"}),s.jsx("p",{className:"text-base text-zinc-500 dark:text-zinc-400",children:"Here are some of the most common questions we receive from our users."})]}),s.jsx($t,{className:"flex w-full flex-col divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-700 dark:border-zinc-700",transition:{duration:.2,ease:"easeInOut"},children:Uf.map((e,t)=>s.jsxs(qt,{value:e.value,className:"py-4",children:[s.jsx(Wt,{className:"w-full text-left text-zinc-950 dark:text-zinc-50",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("div",{children:e.title}),s.jsx(ps,{className:"size-4 -rotate-180 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-0 dark:text-zinc-50"})]})}),s.jsx(Yt,{children:s.jsx("p",{className:"pt-2 text-zinc-500 dark:text-zinc-400",children:e.content})})]},t))})]})}const Uf=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function Gf(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12",children:[s.jsxs("div",{className:"py-0 text-left md:py-4",children:[s.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white",children:"Frequently asked questions"}),s.jsx("p",{className:"text-base text-zinc-500 dark:text-zinc-400",children:"Here are some of the most common questions we receive from our users."})]}),s.jsx("div",{className:"col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none",children:s.jsx($t,{className:"flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700",transition:{duration:.2,ease:"easeInOut"},children:$f.map((e,t)=>s.jsxs(qt,{value:e.value,className:"py-4",children:[s.jsx(Wt,{className:"w-full text-left text-zinc-950 dark:text-zinc-50",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("div",{children:e.title}),s.jsx(ps,{className:"size-4 -rotate-180 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-0 dark:text-zinc-50"})]})}),s.jsx(Yt,{children:s.jsx("p",{className:"pt-2 text-zinc-500 dark:text-zinc-400",children:e.content})})]},t))})})]})})})}const $f=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function qf(){return s.jsxs("div",{className:"relative mx-auto max-w-xl px-6 py-12",children:[s.jsx("h2",{className:"mb-6 text-2xl font-medium text-zinc-900 dark:text-white",children:"FAQs"}),s.jsx($t,{transition:{duration:.2,ease:"easeInOut"},className:"flex flex-col space-y-4",children:Wf.map(e=>s.jsxs(qt,{value:e.value,className:"w-full rounded-xl bg-zinc-100 px-5 text-black dark:bg-zinc-900 dark:text-white",children:[s.jsx(Wt,{className:"w-full py-2",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("div",{children:e.title}),s.jsx(xs,{className:"size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white"})]})}),s.jsx(Yt,{children:s.jsx("p",{className:"border-t border-zinc-200 py-2 text-zinc-800 dark:border-zinc-700 dark:text-zinc-400",children:e.content})})]},e.value))})]})}const Wf=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function Yf(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12",children:[s.jsxs("div",{className:"py-0 text-left md:py-4",children:[s.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white",children:"FAQs"}),s.jsx("p",{className:"text-base text-zinc-500 dark:text-zinc-400",children:"Here are some of the most common questions we receive from our users."})]}),s.jsx("div",{className:"col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none",children:s.jsx($t,{className:"flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700",transition:{duration:.2,ease:"easeInOut"},children:Xf.map((e,t)=>s.jsxs(qt,{value:e.value,className:"py-4",children:[s.jsx(Wt,{className:"w-full text-left text-zinc-950 dark:text-zinc-50",children:s.jsxs("div",{className:"flex items-center space-x-3",children:[s.jsx(xs,{className:"size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white"}),s.jsx("div",{children:e.title})]})}),s.jsx(Yt,{children:s.jsx("p",{className:"pt-2 text-zinc-500 dark:text-zinc-400",children:e.content})})]},t))})})]})})})}const Xf=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function Kf(){var n;const[e,t]=f.useState(Zn[0].id);return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-2",children:[s.jsxs("div",{className:"relative hidden h-auto lg:block",children:[s.jsx("img",{className:"aspect-square h-full w-full object-cover",src:(n=Zn.find(r=>r.id===e))==null?void 0:n.image,alt:"Accordion Image"}),s.jsx("div",{className:"absolute inset-0 bg-black opacity-20"})]}),s.jsx("div",{className:"p-0 sm:p-8 lg:p-16",children:s.jsx($t,{className:"flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800",expandedValue:e,onValueChange:r=>{r&&t(r)},children:Zn.map(r=>s.jsxs(qt,{value:r.id,children:[s.jsxs(Wt,{className:$("flex w-full items-center justify-between py-3.5",r.id===e&&"cursor-default"),children:[s.jsx("h3",{className:"text-left text-lg text-zinc-950 dark:text-zinc-50",children:r.title}),s.jsx(ps,{className:"size-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50"})]}),s.jsxs(Yt,{children:[s.jsx("p",{className:"pb-6 text-left text-zinc-500 dark:text-zinc-400 lg:pb-8",children:r.content}),s.jsx("div",{className:"pb-8 lg:hidden",children:s.jsx("img",{className:"h-64 w-full object-cover",src:r.image,alt:r.title})})]})]},r.id))})})]})})})}const Zn=[{id:"item1",title:"Text-to-image generation",content:"Transform your ideas into stunning visuals with our advanced text-to-image AI. Simply describe what you want, and watch as our algorithm brings your imagination to life in high-resolution images.",image:"https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg"},{id:"item2",title:"Style transfer & customization",content:"Apply and blend various artistic styles to your generated images. From renaissance to modern art, our AI can adapt your creations.",image:"https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg"},{id:"item3",title:"Infinite resolution scaling",content:"Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail, ensuring your creations always look crisp and professional.",image:"https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg"}];function Jf(){var n;const[e,t]=f.useState(er[0].id);return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-2",children:[s.jsxs("div",{className:"p-0 sm:p-8 lg:p-16",children:[s.jsxs("div",{className:"mb-12 text-left",children:[s.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Let AI generate your next product"}),s.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Easy generate videos, images, and more with our model."})]}),s.jsx("div",{className:"flex flex-col space-y-2",children:er.map(r=>s.jsxs("button",{className:$("w-full rounded-lg p-3",e===r.id&&"bg-zinc-100 dark:bg-zinc-800"),type:"button",onClick:()=>t(r.id),children:[s.jsx("h3",{className:"text-left text-lg text-zinc-950 dark:text-zinc-50",children:r.title}),s.jsx("p",{className:"text-left text-zinc-500 dark:text-zinc-400",children:r.content})]},r.id))})]}),s.jsxs("div",{className:"relative h-auto lg:block",children:[s.jsx("img",{className:"aspect-square h-full w-full object-cover",src:(n=er.find(r=>r.id===e))==null?void 0:n.image,alt:"Accordion Image"},e),s.jsx("div",{className:"absolute inset-0 bg-black opacity-20"})]})]})})})}const er=[{id:"item1",title:"Text-to-image generation",content:"Transform your ideas into stunning visuals with our advanced text-to-image AI.",image:"https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg"},{id:"item2",title:"Style transfer & customization",content:"Apply and blend various artistic styles to your generated images.",image:"https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg"},{id:"item3",title:"Infinite resolution scaling",content:"Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail.",image:"https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg"}],hl=f.createContext(void 0);function Qf(){const e=f.useContext(hl);if(!e)throw new Error("useCarousel must be used within an CarouselProvider");return e}function Zf({children:e,initialIndex:t=0,onIndexChange:n,disableDrag:r=!1}){const[i,a]=f.useState(t),[o,l]=f.useState(0),c=d=>{a(d),n==null||n(d)};return f.useEffect(()=>{a(t)},[t]),s.jsx(hl.Provider,{value:{index:i,setIndex:c,itemsCount:o,setItemsCount:l,disableDrag:r},children:e})}function Pn({children:e,className:t,initialIndex:n=0,index:r,onIndexChange:i,disableDrag:a=!1}){const[o,l]=f.useState(n),c=r!==void 0,d=c?r:o,u=m=>{c||l(m),i==null||i(m)};return s.jsx(Zf,{initialIndex:d,onIndexChange:u,disableDrag:a,children:s.jsx("div",{className:$("group/hover relative",t),children:s.jsx("div",{className:"overflow-hidden",children:e})})})}function Ln({children:e,className:t,transition:n}){const{index:r,setIndex:i,setItemsCount:a,disableDrag:o}=Qf(),[l,c]=f.useState(1),d=ze(0),u=f.useRef(null),m=f.Children.count(e);f.useEffect(()=>{if(!u.current)return;const x={root:u.current,threshold:.5},g=new IntersectionObserver(b=>{const y=b.filter(w=>w.isIntersecting).length;c(y)},x),v=u.current.children;return Array.from(v).forEach(b=>g.observe(b)),()=>g.disconnect()},[e,a]),f.useEffect(()=>{m&&a(m)},[m,a]);const p=()=>{const x=d.get();x<=-10&&r<m-1?i(r+1):x>=10&&r>0&&i(r-1)};return s.jsx(S.div,{drag:o?!1:"x",dragConstraints:o?void 0:{left:0,right:0},dragMomentum:o?void 0:!1,style:{x:o?void 0:d},animate:{translateX:`-${r*(100/l)}%`},onDragEnd:o?void 0:p,transition:n||{damping:18,stiffness:90,type:"spring",duration:.2},className:$("flex items-center",!o&&"cursor-grab active:cursor-grabbing",t),ref:u,children:e})}function En({children:e,className:t}){return s.jsx(S.div,{className:$("w-full min-w-0 shrink-0 grow-0 overflow-hidden",t),children:e})}function ge(e){return s.jsx("a",{...e,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"})}function ex(){const[e,t]=f.useState(0);return s.jsxs("div",{className:"py-24 sm:py-32",children:[s.jsx("div",{className:"container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12",children:s.jsx("h2",{className:"text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl",children:"Visualize your ideas instantly"})}),s.jsx(Pn,{className:"pl-[max(16px,calc((100%-1024px)/2+16px))]",index:e,onIndexChange:t,disableDrag:!0,children:s.jsx(Ln,{className:"-ml-2 md:-ml-8",transition:{type:"spring",stiffness:26.7,damping:4.1,mass:.2},children:tx.map((n,r)=>s.jsx(En,{className:"basis-1/4 pl-2 md:pl-8",children:s.jsxs(ge,{href:"#",className:"relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md",children:[s.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:n.image,alt:n.title}),s.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),s.jsxs("div",{className:"absolute left-0 right-0 top-0 p-4 text-white",children:[s.jsx("p",{className:"mb-0.5 text-xs",children:n.description}),s.jsx("h3",{className:"text-base",children:n.title})]})]})},r))})}),s.jsx("div",{className:"container mx-auto mt-6 flex max-w-screen-lg items-end justify-end px-4",children:s.jsxs("div",{className:"flex gap-4",children:[s.jsx("button",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40",type:"button","aria-label":"Previous slide",disabled:e===0,onClick:()=>t(e-1),children:s.jsx(pl,{className:"h-5 w-5"})}),s.jsx("button",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40",type:"button","aria-label":"Next slide",disabled:e===5,onClick:()=>t(e+1),children:s.jsx(fl,{className:"h-5 w-5"})})]})})]})}const tx=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/53d4f8cd-abb4-4296-a411-14789cc00733?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/2d3f5268-da08-4e48-abd9-6b003e419d2b.?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg"}];function nx(){const[e,t]=f.useState(0);return s.jsxs("div",{className:"py-24 sm:py-32",children:[s.jsxs("div",{className:"container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12",children:[s.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl",children:"Visualize your ideas instantly"}),s.jsxs("div",{className:"flex space-x-2",children:[s.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30","aria-label":"Previous slide",disabled:e===0,onClick:()=>t(e-1),children:s.jsx(pl,{className:"h-5 w-5"})}),s.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30","aria-label":"Next slide",disabled:e===5,onClick:()=>t(e+1),children:s.jsx(fl,{className:"h-5 w-5"})})]})]}),s.jsx(Pn,{index:e,onIndexChange:t,disableDrag:!0,children:s.jsx(Ln,{className:"-ml-2 pl-[max(16px,calc((100%-1024px)/2+16px))] md:-ml-5",children:rx.map((n,r)=>s.jsx(En,{className:"basis-1/2 pl-2 md:basis-[22%] md:pl-5",children:s.jsxs(ge,{href:"#",className:"relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md",children:[s.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:n.image,alt:n.title}),s.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),s.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between p-4 text-white",children:[s.jsx("p",{className:"text-xs",children:"New top text"}),s.jsx("p",{className:"text-base",children:"New bottom text"})]})]})},r))})})]})}const rx=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function Ce({children:e,defaultValue:t,onValueChange:n,className:r,transition:i,enableHover:a=!1}){const[o,l]=f.useState(null),c=f.useId(),d=u=>{l(u),n&&n(u)};return f.useEffect(()=>{t!==void 0&&l(t)},[t]),f.Children.map(e,(u,m)=>{const p=u.props["data-id"],x=a?{onMouseEnter:()=>d(p),onMouseLeave:()=>d(null)}:{onClick:()=>d(p)};return f.cloneElement(u,{key:m,className:$("relative inline-flex",u.props.className),"data-checked":o===p?"true":"false",...x},s.jsxs(s.Fragment,{children:[s.jsx(ee,{initial:!1,children:o===p&&s.jsx(S.div,{layoutId:`background-${c}`,className:$("absolute inset-0",r),transition:i,initial:{opacity:t?1:0},animate:{opacity:1},exit:{opacity:0}})}),s.jsx("div",{className:"z-10",children:u.props.children})]}))})}function sx(){const[e,t]=f.useState(0),[n,r]=f.useState(Zt[0].tab),i=a=>{r(a);const o=Zt.findIndex(l=>l.tab===a);o!==-1&&t(o)};return s.jsxs("div",{className:"py-24 sm:py-32",children:[s.jsx("div",{className:"mx-auto mb-12 max-w-7xl px-6 text-center lg:px-8",children:s.jsx("h2",{className:"text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Visualize your ideas instantly"})}),s.jsx("div",{className:"relative w-full overflow-hidden",children:s.jsx("div",{children:s.jsxs(Pn,{index:e,onIndexChange:t,disableDrag:!0,children:[s.jsx(Ln,{className:"ml-0 md:ml-[calc((100%-64rem)/2)]",children:Zt.map((a,o)=>s.jsx(En,{className:"basis-[52%] px-4 pl-0 md:px-0 md:pl-4",children:s.jsxs("div",{className:"relative flex h-[200px] items-center justify-center overflow-hidden rounded-md md:h-[400px]",children:[s.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:a.image,alt:a.title}),s.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),s.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between p-4 text-white",children:[s.jsx("p",{className:"text-xs sm:text-sm",children:a.title}),s.jsx("p",{className:"text-sm sm:text-base",children:a.description})]})]})},o))}),s.jsx("div",{className:"mx-auto mb-12 max-w-7xl overflow-x-auto px-6 text-center [scrollbar-width:none] lg:px-8",children:s.jsx("div",{className:"mt-6 flex min-w-max items-center justify-center sm:mt-10",children:s.jsx("div",{className:"z-0 flex flex-wrap justify-center space-x-2 rounded-full bg-zinc-200 px-2 py-2 dark:bg-zinc-800",children:s.jsx(Ce,{className:"whitespace-nowrap rounded-full bg-zinc-900",transition:{ease:"easeInOut",duration:.2},defaultValue:n,onValueChange:a=>{i(a)},children:Zt.map((a,o)=>s.jsx("button",{className:"px-2 py-1 text-xs text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-zinc-100 dark:text-zinc-200 sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:text-base","data-id":a.tab,type:"button",children:a.tab},o))})})})})]})})})]})}const Zt=[{tab:"Feature 1",title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{tab:"Feature 2",title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{tab:"Feature 3",title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{tab:"Feature 4",title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{tab:"Feature 5",title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{tab:"Feature 6",title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function ix(){const[e,t]=f.useState(0);return s.jsxs("div",{className:"overflow-auto py-24 sm:overflow-hidden sm:py-32",children:[s.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[s.jsx("h2",{className:"mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Visualize your ideas instantly"}),s.jsx("div",{className:"mb-8 overflow-x-auto [scrollbar-width:none]",children:s.jsx("div",{className:"flex min-w-max items-center justify-center space-x-4",children:na.map((n,r)=>s.jsx("button",{className:$("relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base",r===e?"bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900":""),type:"button",onClick:()=>t(r),children:n.title},r))})})]}),s.jsx(Pn,{index:e,onIndexChange:t,disableDrag:!0,children:s.jsx(Ln,{className:"w-full md:-ml-5",transition:{ease:[.77,0,.175,1],duration:1},children:na.map((n,r)=>s.jsx(En,{className:"flex items-center justify-center px-2",children:s.jsxs("div",{className:"relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md",children:[s.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:n.image,alt:n.title}),s.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),s.jsxs("div",{className:"absolute left-0 right-0 top-0 p-4 text-white",children:[s.jsx("p",{className:"mb-0.5 text-xs",children:n.description}),s.jsx("h3",{className:"text-base",children:n.title})]})]})},r))})})]})}const na=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function ax({children:e,className:t,transition:n,variants:r,activeIndex:i,...a}){return s.jsx("div",{className:$("relative",t),children:s.jsx(ee,{initial:!1,mode:"popLayout",custom:a.custom,children:s.jsx(S.div,{variants:r,transition:n,initial:"enter",animate:"center",exit:"exit",...a,children:e[i]},i)})})}function ox(){const[e,t]=f.useState(0),[n,r]=f.useState(1);return s.jsxs("div",{className:"overflow-auto py-24 sm:overflow-hidden sm:py-32",children:[s.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[s.jsx("h2",{className:"mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Visualize your ideas instantly"}),s.jsx("div",{className:"mb-8 overflow-x-auto [scrollbar-width:none]",children:s.jsx("div",{className:"flex min-w-max items-center justify-center space-x-4",children:ra.map((i,a)=>s.jsx("button",{className:$("relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base",a===e?"bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900":""),type:"button",onClick:()=>{t(a),r(a>e?1:-1)},children:i.title},a))})})]}),s.jsx("div",{className:"flex justify-center",children:s.jsx(ax,{className:"aspect-video w-[800px] overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800",activeIndex:e,custom:n,variants:{enter:i=>({opacity:.8,x:i>0?32:-32}),center:{opacity:1,x:0},exit:i=>({opacity:.8,x:i<0?32:-32})},transition:{ease:"easeOut",duration:.3},children:ra.map(i=>s.jsx("div",{className:"relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md",children:s.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:i.image,alt:i.title})},i.title))})})]})}const ra=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function lx(){var n;const[e,t]=f.useState(tr[0].tab);return s.jsx("div",{className:"overflow-auto py-24 sm:overflow-hidden sm:py-32",children:s.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[s.jsx("div",{className:"mx-auto mb-12 max-w-lg text-center",children:s.jsx("h2",{className:"text-3xl sm:text-4xl",children:"A new way to build AI apps, for developers and designers."})}),s.jsx("div",{className:"mb-8 overflow-x-auto [scrollbar-width:none]",children:s.jsx("div",{className:"flex min-w-max items-center justify-center space-x-2",children:s.jsx(Ce,{className:"whitespace-nowrap rounded-full bg-zinc-200 dark:bg-zinc-800",transition:{ease:"easeInOut",duration:.2},defaultValue:e,onValueChange:r=>{t(r)},children:tr.map((r,i)=>s.jsx("button",{className:"px-3 py-1.5 text-sm text-zinc-900 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-50 sm:px-4 sm:text-base","data-id":r.tab,type:"button",children:r.tab},i))})})}),(n=tr.find(r=>r.tab===e))==null?void 0:n.content]})})}function wt({src:e,alt:t}){return s.jsx("img",{className:"aspect-square h-[400px] w-full rounded-2xl bg-blue-200/50 object-cover",src:e,alt:t})}const tr=[{tab:"Design",content:s.jsx(wt,{src:"https://cdn.cosmos.so/8bb8b6e6-1658-4c42-bc5d-e8d17394bb01?format=jpeg",alt:"Design"},"design")},{tab:"Engineering",content:s.jsx(wt,{src:"https://cdn.cosmos.so/c50a75a4-b145-4044-9406-c89d5c326382?format=jpeg",alt:"Engineering"},"engineering")},{tab:"AI",content:s.jsx(wt,{src:"https://cdn.cosmos.so/1437d5d6-52e0-465e-9dfd-c92352d7507e?format=jpeg",alt:"AI"},"ai")},{tab:"Marketing",content:s.jsx(wt,{src:"https://cdn.cosmos.so/ed170ddf-b6f3-4865-a38e-1304c5197eeb?format=jpeg",alt:"Marketing"},"marketing")},{tab:"Analytics",content:s.jsx(wt,{src:"https://cdn.cosmos.so/6b1ae75e-af71-4349-8a24-a2f7945b371f?format=jpeg",alt:"Analytics"},"analytics")}];function cx(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=D(t,[0,1],[.85,1]);return s.jsxs("div",{className:"relative min-h-[200vh]",ref:e,children:[s.jsx("div",{className:"h-screen py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[s.jsxs("div",{className:"mb-12 text-center",children:[s.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Let AI generate your next product"}),s.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Easy generate videos, images, and more with our model."})]}),s.jsx(S.div,{className:"aspect-video w-full origin-top overflow-hidden rounded-3xl",style:{scale:n},children:s.jsxs("div",{className:"relative aspect-video w-full",children:[s.jsx("div",{className:"absolute inset-0 bg-zinc-950/80"}),s.jsx("button",{className:"absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full transition-colors hover:bg-zinc-950/80",children:s.jsx(Mf,{className:"h-8 w-8 text-white"})}),s.jsx("img",{className:"aspect-video w-full object-cover",src:"https://images.beta.cosmos.so/75a0de47-2136-4c2b-b1e8-3e31a0ac2b5a?format=jpeg",alt:"Mountains"})]})})]})]})}function dx(){return s.jsx("div",{className:"bg-white py-24 dark:bg-black sm:py-32",children:s.jsx("div",{className:"relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"relative flex flex-col space-y-32",children:ux.map((e,t)=>s.jsxs("div",{className:`\r
                                relative \r
                                top-24 sm:top-32 \r
                                h-auto lg:sticky lg:h-[calc(400px+9rem)]\r
                                bg-white dark:bg-black \r
                                grid  grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32\r
                                `,children:[s.jsx("div",{className:"py-16 text-base text-zinc-900 dark:text-white lg:text-lg",children:e.text}),s.jsx("div",{className:"h-[300px] w-full lg:h-[400px]",children:s.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:e.image,alt:`Feature ${t+1}`})})]},t))})})})}const ux=[{image:"https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."},{image:"https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg",text:"Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets."},{image:"https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg",text:"Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries."},{image:"https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."}];function mx(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start start","end end"]}),n=D(t,[0,.25,.5],[3,2.5,1]),r=D(t,[0,.2,.25],[1,1,0]),i=D(t,[0,.2,.25],[.5,.5,0]);return s.jsxs("div",{ref:e,className:"w-full",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsxs("div",{className:"flex h-[200vh] w-full flex-col items-center justify-start overflow-clip",children:[s.jsxs(S.div,{className:"absolute z-10 flex h-screen flex-col items-center justify-center text-center text-5xl font-medium text-white",style:{opacity:r},children:[s.jsx("h1",{children:"AI-generated visuals at your fingertips."}),s.jsx("p",{children:"Experience the future of imagery."})]}),s.jsx("div",{className:"sticky top-0 flex h-screen w-full items-center justify-center",children:s.jsxs("div",{className:"relative",children:[s.jsx(S.img,{className:"aspect-video w-full max-w-[400px] object-cover",style:{scale:n},src:"https://images.beta.cosmos.so/a7a791ac-d24a-43b9-a653-67a8557bec3f?format=jpeg"}),s.jsx(S.div,{className:"absolute inset-0 h-full w-full bg-black",style:{opacity:i,scale:n}})]})})]}),s.jsx("div",{className:"h-screen bg-transparent"})]})}function px(){const[e,t]=f.useState(0),[n,r]=f.useState("down"),i=f.useRef(null),{scrollY:a}=te({target:i});return f.useEffect(()=>{let o=0;const l=a.on("change",c=>{const d=window.innerHeight,u=Math.floor(c/d)%en.length;r(c>o?"down":"up"),o=c,t(u)});return()=>l()},[a]),s.jsx("div",{className:"relative h-[var(--section-height)]",style:{"--section-height":`${en.length*100}vh`},children:s.jsx("div",{className:"sticky top-0 flex h-screen items-center justify-center",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("div",{ref:i,className:"grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32",children:[s.jsx(ee,{mode:"wait",children:s.jsx(S.div,{className:"h-[300px] w-full md:h-[400px] lg:h-[500px]",initial:{opacity:0,y:n==="down"?20:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:n==="down"?-20:20},transition:{duration:.15},children:s.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:en[e].image,alt:"Feature"})},e)}),s.jsx(ee,{mode:"wait",children:s.jsx(S.div,{className:"flex items-center justify-center",initial:{opacity:0,y:n==="down"?20:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:n==="down"?-20:20},transition:{duration:.15,delay:.1},children:s.jsx("div",{className:"text-sm font-medium text-zinc-900 dark:text-white md:text-base lg:text-lg",children:en[e].text})},e)})]})})})})}const en=[{image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."},{image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg",text:"Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets."},{image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg",text:"Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries."}];function fx(){var i;const e=f.useRef(null),[t,n]=f.useState(0),{scrollYProgress:r}=te({target:e,offset:["start start","end end"]});return f.useEffect(()=>{const a=r.on("change",o=>{const l=Math.floor(o*Nt.length);n(Math.min(Math.max(l,0),Nt.length-1))});return()=>a()},[r]),s.jsxs("div",{className:"relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[s.jsx("div",{className:"md:hidden",children:s.jsx("div",{className:"h-screen snap-y snap-mandatory overflow-y-auto py-24 sm:py-32",children:Nt.map((a,o)=>s.jsx("div",{className:"mb-12 flex min-h-screen snap-center items-center",children:s.jsxs("div",{className:"w-full",children:[s.jsx("div",{className:"mb-4 h-[200px] w-full",children:s.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:a.image,alt:`Feature ${o+1}`})}),s.jsx("div",{className:"text-sm font-medium text-zinc-900 dark:text-white",children:a.text})]})},o))})}),s.jsxs("div",{ref:e,className:"relative hidden grid-cols-1 gap-8 md:grid md:h-[300vh] md:grid-cols-2 md:gap-16 lg:gap-32",children:[s.jsx("div",{className:"w-full py-16",children:Nt.map((a,o)=>s.jsx("div",{className:"flex h-screen items-center justify-center",children:s.jsx("div",{className:"text-base text-zinc-900 dark:text-white lg:text-lg",children:a.text})},o))}),s.jsx("div",{className:"sticky top-0 flex h-screen w-full items-center justify-center",children:s.jsx(ee,{mode:"wait",children:s.jsx(S.div,{className:"h-[300px] w-full lg:h-[400px]",initial:{opacity:.6},animate:{opacity:1},exit:{opacity:.6},transition:{duration:.15},children:s.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:(i=Nt[t])==null?void 0:i.image,alt:"Feature"})},t)})})]})]})}const Nt=[{image:"https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."},{image:"https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg",text:"Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets."},{image:"https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg",text:"Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries."}];function Mn(e){return s.jsxs("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:[s.jsx("title",{children:"GitHub"}),s.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}function Rn(e){return s.jsxs("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e,children:[s.jsx("title",{children:"X"}),s.jsx("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"})]})}function xx(){return s.jsx("footer",{children:s.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8",children:[s.jsx(He,{className:"text-sm text-zinc-500",children:`� ${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.`}),s.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Mn,{className:"size-4"})}),s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Rn,{className:"size-4"})})]})]})})}const hx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";function gx({children:e,duration:t=.8,speed:n=.04,characterSet:r=hx,className:i,as:a="p",trigger:o=!0,onScrambleComplete:l,...c}){const d=S.create(a),[u,m]=f.useState(e),[p,x]=f.useState(!1),g=e,v=async()=>{if(p)return;x(!0);const b=t/n;let y=0;const w=setInterval(()=>{let j="";const A=y/b;for(let N=0;N<g.length;N++){if(g[N]===" "){j+=" ";continue}A*g.length>N?j+=g[N]:j+=r[Math.floor(Math.random()*r.length)]}m(j),y++,y>b&&(clearInterval(w),m(g),x(!1),l==null||l())},n*1e3)};return f.useEffect(()=>{o&&v()},[o]),s.jsx(d,{className:i,...c,children:u})}function vx(){const[e,t]=f.useState(!0),n=()=>{setTimeout(()=>{t(!0)},4e3),t(!1)};return s.jsx("footer",{children:s.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8",children:[s.jsx(gx,{className:"text-sm text-zinc-500",as:"p",trigger:e,onScrambleComplete:n,children:`� ${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.`}),s.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Mn,{className:"size-4"})}),s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Rn,{className:"size-4"})})]})]})})}var nr,sa;function yx(){if(sa)return nr;sa=1;function e(t,n,r){var i,a,o,l,c;n==null&&(n=100);function d(){var m=Date.now()-l;m<n&&m>=0?i=setTimeout(d,n-m):(i=null,r||(c=t.apply(o,a),o=a=null))}var u=function(){o=this,a=arguments,l=Date.now();var m=r&&!i;return i||(i=setTimeout(d,n)),m&&(c=t.apply(o,a),o=a=null),c};return u.clear=function(){i&&(clearTimeout(i),i=null)},u.flush=function(){i&&(c=t.apply(o,a),o=a=null,clearTimeout(i),i=null)},u}return e.debounce=e,nr=e,nr}var bx=yx();const ia=va(bx);function wx(e){let{debounce:t,scroll:n,polyfill:r,offsetSize:i}={debounce:0,scroll:!1,offsetSize:!1};const a=r||(typeof window>"u"?class{}:window.ResizeObserver);if(!a)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[o,l]=f.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=f.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:o}),d=t?typeof t=="number"?t:t.scroll:null,u=t?typeof t=="number"?t:t.resize:null,m=f.useRef(!1);f.useEffect(()=>(m.current=!0,()=>void(m.current=!1)));const[p,x,g]=f.useMemo(()=>{const w=()=>{if(!c.current.element)return;const{left:j,top:A,width:N,height:z,bottom:I,right:C,x:P,y:_}=c.current.element.getBoundingClientRect(),B={left:j,top:A,width:N,height:z,bottom:I,right:C,x:P,y:_};c.current.element instanceof HTMLElement&&i&&(B.height=c.current.element.offsetHeight,B.width=c.current.element.offsetWidth),Object.freeze(B),m.current&&!Sx(c.current.lastBounds,B)&&l(c.current.lastBounds=B)};return[w,u?ia(w,u):w,d?ia(w,d):w]},[l,i,d,u]);function v(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(w=>w.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null)}function b(){c.current.element&&(c.current.resizeObserver=new a(g),c.current.resizeObserver.observe(c.current.element),n&&c.current.scrollContainers&&c.current.scrollContainers.forEach(w=>w.addEventListener("scroll",g,{capture:!0,passive:!0})))}const y=w=>{!w||w===c.current.element||(v(),c.current.element=w,c.current.scrollContainers=gl(w),b())};return jx(g,!!n),Nx(x),f.useEffect(()=>{v(),b()},[n,g,x]),f.useEffect(()=>v,[]),[y,o,p]}function Nx(e){f.useEffect(()=>{const t=e;return window.addEventListener("resize",t),()=>void window.removeEventListener("resize",t)},[e])}function jx(e,t){f.useEffect(()=>{if(t){const n=e;return window.addEventListener("scroll",n,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",n,!0)}},[e,t])}function gl(e){const t=[];if(!e||e===document.body)return t;const{overflow:n,overflowX:r,overflowY:i}=window.getComputedStyle(e);return[n,r,i].some(a=>a==="auto"||a==="scroll")&&t.push(e),[...t,...gl(e.parentElement)]}const kx=["x","y","top","bottom","left","right","width","height"],Sx=(e,t)=>kx.every(n=>e[n]===t[n]);function Ke({children:e,gap:t=16,duration:n=25,durationOnHover:r,direction:i="horizontal",reverse:a=!1,className:o}){const[l,c]=f.useState(n),[d,{width:u,height:m}]=wx(),p=ze(0),[x,g]=f.useState(!1),[v,b]=f.useState(0);f.useEffect(()=>{let w;const A=(i==="horizontal"?u:m)+t,N=a?-A/2:0,z=a?0:-A/2;return x?w=Zi(p,[p.get(),z],{ease:"linear",duration:l*Math.abs((p.get()-z)/A),onComplete:()=>{g(!1),b(I=>I+1)}}):w=Zi(p,[N,z],{ease:"linear",duration:l,repeat:1/0,repeatType:"loop",repeatDelay:0,onRepeat:()=>{p.set(N)}}),w==null?void 0:w.stop},[v,p,l,u,m,t,x,i,a]);const y=r?{onHoverStart:()=>{g(!0),c(r)},onHoverEnd:()=>{g(!0),c(n)}}:{};return s.jsx("div",{className:$("overflow-hidden",o),children:s.jsxs(S.div,{className:"flex w-max",style:{...i==="horizontal"?{x:p}:{y:p},gap:`${t}px`,flexDirection:i==="horizontal"?"row":"column"},ref:d,...y,children:[e,e]})})}function zx(){return s.jsxs("footer",{children:[s.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 pb-4 pt-12 md:flex-row md:justify-between md:px-8",children:[s.jsxs("p",{className:"text-sm text-zinc-500",children:["� ",new Date().getFullYear()," Motion Primitives, Inc. All rights reserved."]}),s.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Mn,{className:"size-4"})}),s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Rn,{className:"size-4"})})]})]}),s.jsx("div",{className:"overflow-hidden",children:s.jsx(Ke,{className:"-mb-14 text-9xl leading-[100%] text-black dark:text-white sm:text-[12rem]",gap:80,children:s.jsx("div",{children:"Motion Primitives"})})})]})}function Ax(){return s.jsxs("footer",{children:[s.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8",children:[s.jsxs("p",{className:"text-sm text-zinc-500",children:["� ",new Date().getFullYear()," Motion Primitives, Inc. All rights reserved."]}),s.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Mn,{className:"size-4"})}),s.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:s.jsx(Rn,{className:"size-4"})})]})]}),s.jsx("div",{className:"overflow-hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent)]",children:s.jsx(Ke,{className:"-mb-14 whitespace-nowrap text-9xl leading-[100%] text-transparent [text-shadow:1px_1px_1px_rgba(255,255,255,.1),-1px_-1px_1px_rgba(0,0,0,.5),-40px_-40px_0px_rgba(0,0,0,0)] sm:text-[12rem]",gap:80,duration:60,children:s.jsx("div",{children:"Motion Primitives"})})})]})}function Cx(){return s.jsxs("div",{children:[s.jsx("div",{className:"flex h-screen items-center justify-center",children:s.jsx("div",{className:"text-sm",children:"Scroll down"})}),s.jsx("div",{className:"relative h-[--footer-height] [--footer-height:500px]",style:{clipPath:"polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"},children:s.jsx("div",{className:"fixed bottom-0 h-[--footer-height] w-full",children:s.jsxs("div",{className:"flex h-full w-full flex-col justify-between bg-zinc-800 px-12 py-8",children:[s.jsxs("div",{className:"flex shrink-0 gap-20",children:[s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"mb-2 text-zinc-400",children:"Product"}),s.jsx("a",{href:"#",className:"text-white",children:"Features"}),s.jsx("a",{href:"#",className:"text-white",children:"Pricing"}),s.jsx("a",{href:"#",className:"text-white",children:"Integration"}),s.jsx("a",{href:"#",className:"text-white",children:"API Documentation"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"mb-2 text-zinc-400",children:"Company"}),s.jsx("a",{href:"#",className:"text-white",children:"About Us"}),s.jsx("a",{href:"#",className:"text-white",children:"Blog"}),s.jsx("a",{href:"#",className:"text-white",children:"Careers"}),s.jsx("a",{href:"#",className:"text-white",children:"Customer Stories"})]}),s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx("h3",{className:"mb-2 text-zinc-400",children:"Support"}),s.jsx("a",{href:"#",className:"text-white",children:"Help Center"}),s.jsx("a",{href:"#",className:"text-white",children:"Status"}),s.jsx("a",{href:"#",className:"text-white",children:"Security"}),s.jsx("a",{href:"#",className:"text-white",children:"Terms of Service"})]})]}),s.jsxs("p",{className:"text-sm text-white",children:["� ",new Date().getFullYear()," Motion Primitives, Inc. All rights reserved."]})]})})})]})}function vs({children:e,className:t,interval:n=2,transition:r={duration:.3},variants:i,onIndexChange:a,trigger:o=!0,mode:l="popLayout"}){const[c,d]=f.useState(0),u=f.Children.toArray(e);f.useEffect(()=>{if(!o)return;const p=n*1e3,x=setInterval(()=>{d(g=>{const v=(g+1)%u.length;return a==null||a(v),v})},p);return()=>clearInterval(x)},[u.length,n,a,o]);const m={initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:-20,opacity:0}};return s.jsx("div",{className:$("relative inline-block whitespace-nowrap",t),children:s.jsx(ee,{mode:l,initial:!1,children:s.jsx(S.div,{initial:"initial",animate:"animate",exit:"exit",transition:r,variants:i||m,children:u[c]},c)})})}function Tx(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[s.jsxs("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:[s.jsx("span",{children:"Build faster with beautiful"}),s.jsx("br",{}),s.jsx(vs,{variants:{initial:{filter:"blur(5px)",opacity:0},animate:{filter:"blur(0)",opacity:1},exit:{filter:"blur(5px)",opacity:0}},transition:{duration:.4},mode:"wait",children:Ix.map(e=>s.jsx("span",{children:e},e))})]}),s.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}const Ix=["components","templates","layouts","designs"];function Px(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[s.jsxs("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",style:{perspective:"1000px"},children:[s.jsx("span",{children:"Build faster with beautiful"}),s.jsx("br",{}),s.jsx(vs,{variants:{initial:{opacity:0,rotateX:90,filter:"blur(4px)"},animate:{opacity:1,rotateX:0,filter:"blur(0px)"},exit:{opacity:0,rotateX:-90,filter:"blur(4px)"}},transition:{duration:.4},mode:"wait",children:Lx.map(e=>s.jsx("span",{children:e},e))})]}),s.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}const Lx=["components","templates","layouts","designs"];function Ex(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start start","end end"]}),n=D(t,[0,.5],[0,1]),r=D(t,[0,.5],[50,0]),i=D(t,[0,.5],[.8,1]);return s.jsxs("div",{className:"relative min-h-[200vh]",ref:e,children:[s.jsx("div",{className:"h-screen py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"mx-auto flex max-w-md items-center justify-center px-6 text-center lg:px-8",children:s.jsxs(S.div,{style:{opacity:n,y:r,scale:i},children:[s.jsx("h2",{className:"mb-3 text-xl text-zinc-500 sm:text-2xl",children:"For builders"}),s.jsx("p",{className:"text-2xl text-zinc-900 dark:text-zinc-50 sm:text-3xl",children:"A new way to get your products to the next level"})]})})]})}function Mx({children:e,duration:t=.5,getEnterDelay:n=c=>c*.1,getExitDelay:r=c=>c*.1+.2,className:i,transition:a={ease:"easeIn"},variants:o,onAnimationComplete:l}){const c={enter:{initial:{rotateX:0},animate:{rotateX:90}},exit:{initial:{rotateX:90},animate:{rotateX:0}}},d=e.split("");return s.jsxs("span",{className:i,children:[d.map((u,m)=>{var p,x,g,v;return s.jsxs("span",{className:"relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]","aria-hidden":"true",children:[s.jsx(S.span,{className:"absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]",initial:((p=o==null?void 0:o.enter)==null?void 0:p.initial)??c.enter.initial,animate:((x=o==null?void 0:o.enter)==null?void 0:x.animate)??c.enter.animate,transition:{...a,duration:t,delay:n(m)},children:u===" "?" ":u}),s.jsx(S.span,{className:"absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]",initial:((g=o==null?void 0:o.exit)==null?void 0:g.initial)??c.exit.initial,animate:((v=o==null?void 0:o.exit)==null?void 0:v.animate)??c.exit.animate,transition:{...a,duration:t,delay:r(m)},onAnimationComplete:d.length===m+1?l:void 0,children:u===" "?" ":u}),s.jsx("span",{className:"invisible",children:u===" "?" ":u})]},m)}),s.jsx("span",{className:"sr-only",children:e})]})}function Rx(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[s.jsxs("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:[s.jsx("span",{children:"AI-powered web templates"}),s.jsx("br",{}),s.jsx("span",{children:"for"})," ",s.jsx(Mx,{className:"inline-flex overflow-clip leading-[0.75]",variants:{enter:{initial:{y:0},animate:{y:40}},exit:{initial:{y:-40},animate:{y:0}}},duration:.3,getEnterDelay:e=>e*.05,getExitDelay:e=>e*.05+.05,transition:{ease:[.175,.885,.32,1.1]},children:"founders"})]}),s.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}function Dx(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[s.jsx(He,{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",per:"char",variants:{item:{hidden:{opacity:0,scale:1.6,filter:"blur(4px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}}},speedReveal:1,speedSegment:.5,children:"The best AI for your design"}),s.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}const rr={hidden:{opacity:0,y:10,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}};function Ox(){return s.jsxs("div",{className:"relative bg-white dark:bg-zinc-900",children:[s.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:s.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[s.jsx("div",{className:"flex lg:flex-1",children:s.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[s.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),s.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:s.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),s.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),s.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",s.jsx(oe,{className:"size-4"})]})})]})}),s.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:s.jsxs("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:[s.jsx("div",{className:"hidden sm:mb-8 sm:flex sm:justify-center",children:s.jsxs(S.div,{className:"relative rounded-full px-3 py-1 text-sm/6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-1 dark:ring-zinc-100/20 dark:hover:ring-zinc-100/20",variants:rr,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.5,ease:"easeOut"},children:["Introducing a revolutionary way to build websites."," ",s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 font-semibold text-zinc-600 dark:text-zinc-400",children:[s.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"Learn more ",s.jsx(oe,{className:"size-4"})]})]})}),s.jsxs("div",{className:"text-center",children:[s.jsx(He,{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",preset:"fade-in-blur",as:"h1",per:"char",speedReveal:4,segmentTransition:{duration:.5,ease:"easeOut"},children:"Build your dream website fast and easily"}),s.jsx(He,{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-300 sm:text-lg/8",preset:"blur",as:"p",per:"line",delay:.5,speedReveal:.8,segmentTransition:{duration:.5,ease:"easeOut"},children:"Create stunning, professional websites with unparalleled ease. Leverage our intuitive tools and thoughtfully crafted components."}),s.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[s.jsx(S.a,{className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700",variants:rr,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.5,ease:"easeOut"},href:"#",children:"Start building"}),s.jsxs(S.a,{className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",variants:rr,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.6,ease:"easeOut"},href:"#",children:["Watch the film ",s.jsx(oe,{className:"size-4"})]})]})]})]})})]})}var Fx=(e,t,n,r,i,a,o,l)=>{let c=document.documentElement,d=["light","dark"];function u(x){(Array.isArray(e)?e:[e]).forEach(g=>{let v=g==="class",b=v&&a?i.map(y=>a[y]||y):i;v?(c.classList.remove(...b),c.classList.add(x)):c.setAttribute(g,x)}),m(x)}function m(x){l&&d.includes(x)&&(c.style.colorScheme=x)}function p(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(r)u(r);else try{let x=localStorage.getItem(t)||n,g=o&&x==="system"?p():x;u(g)}catch{}},Vx=f.createContext(void 0),_x={setTheme:e=>{},themes:[]},ys=()=>{var e;return(e=f.useContext(Vx))!=null?e:_x};f.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:a,value:o,themes:l,nonce:c,scriptProps:d})=>{let u=JSON.stringify([n,t,a,e,l,o,r,i]).slice(1,-1);return f.createElement("script",{...d,suppressHydrationWarning:!0,nonce:typeof window>"u"?c:"",dangerouslySetInnerHTML:{__html:`(${Fx.toString()})(${u})`}})});function Bx(){const e=ys(),t=f.useRef(null),{scrollYProgress:n}=te({target:t,offset:["start end","end end"]}),r=D(n,[.75,1],[30,0]);return s.jsxs("div",{ref:t,className:"relative bg-white dark:bg-zinc-900",children:[s.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:s.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[s.jsx("div",{className:"flex lg:flex-1",children:s.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[s.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),s.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:s.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),s.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),s.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",s.jsx(oe,{className:"size-4"})]})})]})}),s.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:s.jsxs("div",{className:"mx-auto max-w-2xl py-24 sm:py-32",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",children:"Build your dream website fast and easily"}),s.jsx("p",{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8",children:"Build beautiful websites effortlessly. Utilize our powerful tools to transform your ideas into reality in no time."}),s.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[s.jsx("a",{href:"#",className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600",children:"Start building"}),s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",children:["Watch the film ",s.jsx(oe,{className:"size-4"})]})]})]}),s.jsx("div",{className:"mt-16",children:s.jsx("div",{className:"mx-auto mt-4 max-w-screen-lg px-3 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] [perspective:1000px]",children:s.jsx(S.div,{className:"relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900",style:{rotateX:r},children:e.theme==="dark"?s.jsx(fs,{className:"absolute top-4 right-4 z-10 text-foreground"}):s.jsx(hs,{className:"absolute top-4 right-4 z-10 text-foreground"})})})})]})})]})}function Hx({children:e,className:t,style:n,rotationFactor:r=15,isRevese:i=!1,springOptions:a}){const o=f.useRef(null),l=ze(0),c=ze(0),d=ut(l,a),u=ut(c,a),m=D(u,[-.5,.5],i?[r,-r]:[-r,r]),p=D(d,[-.5,.5],i?[-r,r]:[r,-r]),x=xt`perspective(1000px) rotateX(${m}deg) rotateY(${p}deg)`,g=b=>{if(!o.current)return;const y=o.current.getBoundingClientRect(),w=y.width,j=y.height,A=b.clientX-y.left,N=b.clientY-y.top,z=A/w-.5,I=N/j-.5;l.set(z),c.set(I)},v=()=>{l.set(0),c.set(0)};return s.jsx(S.div,{ref:o,className:t,style:{transformStyle:"preserve-3d",...n,transform:x},onMouseMove:g,onMouseLeave:v,children:e})}function Ux(){const e=ys();return s.jsxs("div",{className:"relative bg-white dark:bg-zinc-900",children:[s.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:s.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[s.jsx("div",{className:"flex lg:flex-1",children:s.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[s.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),s.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:s.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),s.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),s.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",s.jsx(oe,{className:"size-4"})]})})]})}),s.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:s.jsxs("div",{className:"mx-auto max-w-2xl py-24 sm:py-32",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",children:"Build your dream website fast and easily"}),s.jsx("p",{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8",children:"Build beautiful websites effortlessly. Utilize our powerful tools to transform your ideas into reality in no time."}),s.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[s.jsx("a",{href:"#",className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600",children:"Start building"}),s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",children:["Watch the film ",s.jsx(oe,{className:"size-4"})]})]})]}),s.jsx("div",{className:"mt-16",children:s.jsx(Hx,{className:"relative",rotationFactor:6,springOptions:{stiffness:150,damping:19,mass:1.2},isRevese:!0,children:s.jsx("div",{className:"mx-auto mt-4 max-w-screen-lg px-3 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]",children:s.jsx("div",{className:"relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900",children:e.theme==="dark"?s.jsx(fs,{className:"absolute top-4 right-4 z-10 text-foreground"}):s.jsx(hs,{className:"absolute top-4 right-4 z-10 text-foreground"})})})})})]})})]})}const Mt={hidden:{opacity:0,y:10,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}},aa=e=>({container:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:e}}},item:{hidden:Mt.hidden,visible:{...Mt.visible,transition:{duration:.5}}}});function Gx(){const e=ys();return s.jsxs("div",{className:"relative bg-white dark:bg-zinc-900",children:[s.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:s.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[s.jsx("div",{className:"flex lg:flex-1",children:s.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[s.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),s.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:s.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),s.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),s.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),s.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:s.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",s.jsx(oe,{className:"size-4"})]})})]})}),s.jsx("section",{className:"py-28",children:s.jsxs("div",{className:"mx-auto max-w-screen-xl items-center justify-between gap-x-12 overflow-hidden text-gray-600 md:flex md:px-8",children:[s.jsxs("div",{className:"flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl",children:[s.jsx(He,{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",as:"h1",per:"char",variants:aa(.03),children:"Easiest way to build websites"}),s.jsx(He,{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8",as:"p",per:"line",variants:aa(.2),delay:.9,children:"Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}),s.jsxs("div",{className:"flex items-center gap-x-6",children:[s.jsx(S.a,{className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600",variants:Mt,initial:"hidden",animate:"visible",transition:{duration:.5,delay:1},href:"#",children:"Start building"}),s.jsxs(S.a,{className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",variants:Mt,initial:"hidden",animate:"visible",transition:{duration:.5,delay:1.1},href:"#",children:["Watch the film ",s.jsx(oe,{className:"size-4"})]})]})]}),s.jsx(S.div,{className:"mt-10 flex-none p-8 md:mt-0 md:max-w-xl",variants:Mt,initial:"hidden",animate:"visible",transition:{duration:.5},children:e.theme==="dark"?s.jsx(fs,{className:"absolute top-4 right-4 z-10 text-foreground"}):s.jsx(hs,{className:"absolute top-4 right-4 z-10 text-foreground"})})]})})]})}function Te(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:s.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M21 7.986a25 25 0 0 0-.009-.543a8 8 0 0 0-.104-1.182a4 4 0 0 0-.37-1.125a3.78 3.78 0 0 0-1.653-1.652a4 4 0 0 0-1.124-.371a8 8 0 0 0-1.182-.104a25 25 0 0 0-.543-.008L15.37 3H8.63l-.644.001q-.272.001-.543.008a8 8 0 0 0-1.183.105a4 4 0 0 0-1.123.37a3.8 3.8 0 0 0-1.653 1.653c-.183.36-.3.728-.371 1.124c-.07.39-.094.788-.104 1.182q-.007.272-.008.543L3 8.631v6.738l.001.645q.001.271.008.543c.01.395.034.792.104 1.182c.071.396.188.765.37 1.125a3.78 3.78 0 0 0 1.654 1.652c.36.183.728.3 1.123.37c.39.07.788.094 1.183.105q.27.007.543.008h8.028q.271-.001.543-.008a8 8 0 0 0 1.183-.104a4 4 0 0 0 1.123-.37a3.8 3.8 0 0 0 1.653-1.653c.183-.36.3-.729.37-1.125c.07-.39.094-.788.105-1.182q.007-.27.008-.543zm-4.823 6.727c0 .228-.002.435-.05.663q-.067.334-.262.618a1.6 1.6 0 0 1-.492.455a2 2 0 0 1-.625.228c-.415.083-.699.102-.966.049a1.34 1.34 0 0 1-.65-.33a1.42 1.42 0 0 1-.454-.891a1.42 1.42 0 0 1 .384-1.12c.148-.155.335-.278.584-.375c.26-.1.548-.161.99-.25l.35-.07c.152-.032.284-.07.39-.2s.108-.29.108-.446V9.079c0-.303-.136-.386-.426-.33c-.207.04-4.654.937-4.654.937c-.251.06-.34.143-.34.454v5.808c0 .228-.011.435-.059.663c-.046.221-.131.43-.262.617a1.6 1.6 0 0 1-.492.456a2 2 0 0 1-.625.23c-.415.084-.699.103-.966.05a1.35 1.35 0 0 1-.65-.334a1.4 1.4 0 0 1-.443-.89a1.41 1.41 0 0 1 .373-1.12c.148-.155.335-.278.584-.375c.26-.101.548-.162.99-.25l.35-.071c.152-.031.284-.07.39-.2s.118-.282.118-.438V7.59c0-.09.008-.15.012-.18a.54.54 0 0 1 .18-.348a.75.75 0 0 1 .334-.15H9.9l5.35-1.08c.046-.01.433-.078.476-.082c.29-.025.452.165.452.473z",clipRule:"evenodd"})})}function Ie(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48",...e,children:s.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M39.445 43.451L24.854 4.6l-15.129 39c10.757-6.374 19.775-6.374 29.72-.149"})})}function Pe(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:s.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"m17.562 9.222l-.526.928c-.495.873-.743 1.309-1.282 1.347c-.54.038-.768-.274-1.225-.898a5.2 5.2 0 0 1-.948-2.37c-.107-.799-.16-1.198-.29-1.395c-.206-.313-.622-.485-.932-.667c-.817-.48-1.226-.72-1.333-1.129c-.108-.407.128-.823.6-1.655s.708-1.248 1.109-1.357c.4-.11.81.131 1.627.611c.31.183.664.462 1.034.488c.232.016.599-.137 1.332-.442a4.95 4.95 0 0 1 2.491-.35c.76.091 1.14.137 1.376.63c.238.495-.01.931-.505 1.804l-.526.926m-2.002 3.53l.434.254a1.984 1.984 0 0 0 2.735-.745a2.057 2.057 0 0 0-.733-2.784l-.434-.255m-2.002 3.53l2.002-3.53M7 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1-1l7-5M7 22h7m-8-7l5 7",color:"currentColor"})})}function Le(e){return s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 36 36",...e,children:[s.jsx("path",{fill:"currentColor",d:"M32 18c0 7.7-6.2 14-14 14S4 25.8 4 18C4 10.6 9.7 4.5 17.1 4v3.7c-5.7.5-9.8 5.5-9.3 11.2s5.5 9.8 11.2 9.3c5.3-.5 9.3-4.9 9.3-10.2h-2c0 4.6-3.7 8.3-8.3 8.3S9.7 22.6 9.7 18c0-4.2 3.2-7.8 7.3-8.2v4.4c-2.1.6-3.4 2.7-2.9 4.9c.6 2.1 2.7 3.4 4.9 2.9c2.1-.6 3.4-2.7 2.9-4.9c-.4-1.4-1.5-2.5-2.9-2.9V2h-1.1c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z",className:"clr-i-solid clr-i-solid-path-1"}),s.jsx("path",{fill:"none",d:"M0 0h36v36H0z"})]})}function Ee(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 512 512",...e,children:s.jsx("path",{fill:"currentColor",d:"M236.977 26.432c-.48 0-.8.32-1.282.32l-2.244 1.123L95.276 85.262C86.78 89.11 79.087 93.757 71.71 99.047c0 0-.32 0-.32.48c-3.526 3.046-6.89 6.573-9.937 10.42c-3.526 4.97-6.572 10.74-8.976 16.83a89 89 0 0 0-2.565 16.993v1.923c0 4.65.64 8.817 2.244 13.145c.32-4.65 1.602-9.62 3.526-13.947c2.244-5.29 6.09-9.938 11.06-13.464c3.046-1.924 6.573-3.847 10.1-4.97c4.648-1.12 9.136-1.922 14.265-2.724c7.695-.8 15.39-1.122 22.282-1.443c9.136 0 18.11.32 27.73.64c11.54.48 22.6 1.924 33.02 3.847c8.176 1.283 15.87 2.726 24.206 4.328l-3.848-5.77l-4.168-8.815c-1.122-3.527-1.924-7.374-1.924-10.9v-1.124c.32-3.847 1.124-7.694 3.047-11.54l8.496-11.542l38.47-50.012c.8-.32.8-1.122.8-1.923c0-.803 0-1.604-.8-2.246c-.32-.48-1.123-.802-1.443-.802zM31.174 144.74c-1.924 3.366-3.823 6.86-5.426 10.227a94.5 94.5 0 0 0-5.01 17.81c-.32 3.046-.765 6.556-.765 9.602c0 2.724.488 4.97.488 7.374c1.123 6.893 2.224 13.485 3.827 19.896c4.168 14.267 10.762 27.415 19.9 38.475c5.128 6.252 10.41 12.007 15.86 16.977a552 552 0 0 0 16.14 13.496c6.573 4.97 13.46 9.296 19.55 12.662c9.298 5.45 18.977 10.408 28.595 15.377c34.945 18.594 72.237 31.553 110.066 38.125c25.007 3.526 50.048 6.592 75.696 8.836c0 5.13.312 10.405 1.113 15.375c.802 6.25 2.256 12.805 4.66 18.576c2.244 6.41 4.99 12.666 8.836 18.436c4.168 6.092 9.09 11.595 14.54 17.045c6.092 5.29 12.692 9.902 20.386 13.43c5.77 2.564 12.003 4.137 18.575 4.938c1.924 0 3.852.348 5.775.348c1.123 0 2.216-.348 3.338-.348l103.248-7.373h.348c.32 0 1.113-.31 1.113-1.113c0-.8-.827-1.12-1.95-1.6c-3.846-1.124-7.985-2.572-12.313-4.175c-4.49-1.603-9.635-3.47-14.123-4.592c-6.572-2.244-13.47-4.68-20.523-6.123a379 379 0 0 0-21.15-4.313c-4.65-.32-9.615-1.105-14.264-2.227c-.64-.32-1.46-1.175-1.46-2.297c0 0 .028-.443.35-.764c0-.48.485-.836.485-.836c0-.32.277-.284.277-.765c1.123-.8 2.775-1.585 3.897-2.226c2.725-1.603 5.437-2.772 8.002-3.894c6.572-3.206 13.47-5.77 20.523-8.977c3.046-1.122 6.068-2.216 9.114-3.338c4.33-1.603 8.966-2.738 15.378-4.662c1.282-.32 2.397-.793 3.2-1.113a506 506 0 0 1 8.07-2.436c-5.45-8.335-12.336-16.484-19.55-23.377l-14.332-13.775c-4.97-4.328-9.588-8.183-13.916-11.55c-7.213-5.128-14.25-10.093-20.662-14.26a344 344 0 0 0-39.308-22.473c-6.893-3.368-13.933-6.38-24.352-10.228c-9.938-3.526-19.525-7.063-17.602-6.262c-8.816-2.725-18.107-5.318-26.923-7.722L270.158 191.7c-7.373 3.848-15.064 7.67-21.637 10.716c-5.77 2.725-11.51 4.208-17.602 5.01c-7.374 1.603-14.61 1.565-21.984.763l-93.436-7.653l25.324 30.264c.802 1.283 1.94 2.712 3.06 4.315c.802.802.766 1.43.766 2.713c-.32 1.122-1.11 1.95-2.712 1.95c-4.49.32-9.127-.008-13.776-.49c-6.572-.8-13.18-1.902-19.27-3.825c-5.45-1.122-10.382-3.043-15.03-5.287c-6.092-2.405-12.383-5.448-17.672-8.975c-4.97-3.044-10.05-6.446-14.54-10.296c-5.13-3.847-9.656-8.154-13.984-12.802c-2.725-3.046-5.41-6.866-7.654-10.713c-2.725-5.29-5.007-10.79-6.61-16.56c-1.122-6.25-2.232-12.355-2.712-17.324c.48-2.725.486-5.4.486-8.766zM20.6 247.3l1.12 9.296c4.65 29.975 15.87 58.83 32.382 84.636c11.22 17.793 25.487 32.7 41.998 44.243l8.816 6.25l17.63 11.06c38.632 22.762 81.272 37.83 125.995 44.402l31.1 2.565l31.737 1.924l33.502-.32c-8.817-5.45-16.833-11.863-23.886-19.237l-6.892-8.015c-5.77-7.373-10.42-15.068-13.465-23.564c-1.443-5.45-2.726-10.418-3.848-15.708l-1.925-12.342l-33.34-3.527l-26.13-3.365l-17.63-2.727c-10.1-1.922-20.037-4.647-30.136-7.692l-32.222-11.54l-25.006-11.222l-25.486-12.664l-23.885-13.145l-18.755-12.662l-23.882-22.28L20.6 247.298zm393.226 92.313c7.213 0 13.15 6.125 13.15 13.498c0 7.535-5.937 13.497-13.15 13.497s-13.148-5.962-13.148-13.496c0-7.372 5.935-13.497 13.148-13.497zm-332.07 85.684c14.266 9.618 27.73 20.037 40.074 31.258c10.74 9.137 20.357 19.235 29.975 29.013c2.725 0 4.97-.802 6.892-1.443c8.496-3.847 16.19-8.015 23.885-12.664q11.061-6.25 19.236-14.905c-4.167-1.603-8.496-3.046-12.664-4.328c-10.42-2.565-20.356-6.092-30.134-10.42c-7.214-3.046-14.108-6.41-20.68-10.258c-.802.32-1.923.32-2.725.32c-4.648 0-9.297-.322-13.785-1.124c-13.465-1.122-26.93-3.045-40.074-5.45z"})})}function Ze(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:s.jsx("path",{fill:"currentColor",d:"M20.562 10.188c.25-.688.313-1.376.25-2.063c-.062-.687-.312-1.375-.625-2c-.562-.937-1.375-1.687-2.312-2.125c-1-.437-2.063-.562-3.125-.312c-.5-.5-1.063-.938-1.688-1.25S11.687 2 11 2a5.17 5.17 0 0 0-3 .938c-.875.624-1.5 1.5-1.813 2.5c-.75.187-1.375.5-2 .875c-.562.437-1 1-1.375 1.562c-.562.938-.75 2-.625 3.063a5.44 5.44 0 0 0 1.25 2.874a4.7 4.7 0 0 0-.25 2.063c.063.688.313 1.375.625 2c.563.938 1.375 1.688 2.313 2.125c1 .438 2.062.563 3.125.313c.5.5 1.062.937 1.687 1.25S12.312 22 13 22a5.17 5.17 0 0 0 3-.937c.875-.625 1.5-1.5 1.812-2.5a4.54 4.54 0 0 0 1.938-.875c.562-.438 1.062-.938 1.375-1.563c.562-.937.75-2 .625-3.062c-.125-1.063-.5-2.063-1.188-2.876m-7.5 10.5c-1 0-1.75-.313-2.437-.875c0 0 .062-.063.125-.063l4-2.312a.5.5 0 0 0 .25-.25a.57.57 0 0 0 .062-.313V11.25l1.688 1v4.625a3.685 3.685 0 0 1-3.688 3.813M5 17.25c-.438-.75-.625-1.625-.438-2.5c0 0 .063.063.125.063l4 2.312a.56.56 0 0 0 .313.063c.125 0 .25 0 .312-.063l4.875-2.812v1.937l-4.062 2.375A3.7 3.7 0 0 1 7.312 19c-1-.25-1.812-.875-2.312-1.75M3.937 8.563a3.8 3.8 0 0 1 1.938-1.626v4.751c0 .124 0 .25.062.312a.5.5 0 0 0 .25.25l4.875 2.813l-1.687 1l-4-2.313a3.7 3.7 0 0 1-1.75-2.25c-.25-.937-.188-2.062.312-2.937M17.75 11.75l-4.875-2.812l1.687-1l4 2.312c.625.375 1.125.875 1.438 1.5s.5 1.313.437 2.063a3.7 3.7 0 0 1-.75 1.937c-.437.563-1 1-1.687 1.25v-4.75c0-.125 0-.25-.063-.312c0 0-.062-.126-.187-.188m1.687-2.5s-.062-.062-.125-.062l-4-2.313c-.125-.062-.187-.062-.312-.062s-.25 0-.313.062L9.812 9.688V7.75l4.063-2.375c.625-.375 1.312-.5 2.062-.5c.688 0 1.375.25 2 .688c.563.437 1.063 1 1.313 1.625s.312 1.375.187 2.062m-10.5 3.5l-1.687-1V7.063c0-.688.187-1.438.562-2C8.187 4.438 8.75 4 9.375 3.688a3.37 3.37 0 0 1 2.062-.313c.688.063 1.375.375 1.938.813c0 0-.063.062-.125.062l-4 2.313a.5.5 0 0 0-.25.25c-.063.125-.063.187-.063.312zm.875-2L12 9.5l2.187 1.25v2.5L12 14.5l-2.188-1.25z"})})}function Me(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:s.jsx("path",{fill:"currentColor",d:"M9.5 4.27c1.38.26 3.4.87 4.5 1.23c2.75.95 3.69 2.13 3.69 4.79c0 2.6-1.6 3.58-3.64 2.6V8.05c0-.55-.1-1.08-.64-1.23c-.41-.13-.65.25-.65.81v12.1L9.5 18.69zm3.87 13.35l5.25-1.87c.6-.21.69-.51.21-.67c-.49-.16-1.36-.11-1.96.1l-3.5 1.23v-1.96l.21-.07s1.01-.38 2.42-.51c1.43-.16 3.17.02 4.53.53c1.54.49 1.72 1.21 1.33 1.7c-.4.5-1.36.85-1.36.85l-7.13 2.55zm-9.87-.2C1.93 17 1.66 16.05 2.38 15.5c.67-.5 1.8-.85 1.8-.85L8.86 13v1.88L5.5 16.09c-.6.21-.69.51-.21.67s1.36.12 1.95-.1l1.62-.58v1.69l-.32.06c-1.62.26-3.34.17-5.04-.41"})})}function et(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48",...e,children:s.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M31.016 26.855L19.839 4.5L8.661 26.855m14.033 0L31.016 43.5l8.323-16.645"})})}function $x(){const[e,t]=f.useState(tn.slice(0,sr));return f.useEffect(()=>{const n=setInterval(()=>{t(r=>{const a=(tn.indexOf(r[0])+sr)%tn.length;return tn.slice(a,a+sr)})},4e3);return()=>clearInterval(n)},[]),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"grid w-full grid-cols-4 gap-4",children:e.map((n,r)=>s.jsx(ee,{initial:!1,mode:"wait",children:s.jsx(S.div,{className:"flex items-center justify-center",initial:{scale:.6,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.6,opacity:0},transition:{duration:.3},children:s.jsx(n.Component,{className:"h-8 w-full text-black dark:text-white"})},n.name)},r))})})})}const sr=4,tn=[{Component:Te,name:"AppleMusic"},{Component:Ie,name:"A24"},{Component:Pe,name:"Pixar"},{Component:Le,name:"Prada"},{Component:Ee,name:"Salomon"},{Component:Ze,name:"OpenAI"},{Component:Me,name:"Sony"},{Component:et,name:"Strava"}];function qx(){const[e,t]=f.useState(nn.slice(0,ir));return f.useEffect(()=>{const n=setInterval(()=>{t(r=>{const a=(nn.indexOf(r[0])+ir)%nn.length;return nn.slice(a,a+ir)})},4e3);return()=>clearInterval(n)},[]),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"grid w-full grid-cols-4 gap-4",children:s.jsx(ee,{initial:!1,mode:"popLayout",children:e.map((n,r)=>s.jsx(S.div,{className:"flex items-center justify-center",initial:{y:30,rotateX:60,opacity:0},animate:{y:0,rotateX:0,opacity:1},exit:{y:-30,rotateX:-60,opacity:0},transition:{duration:.5,delay:r*.15},children:s.jsx(n.Component,{className:"h-8 w-full text-black dark:text-white"})},n.name))})})})})}const nn=[{Component:Te,name:"AppleMusic"},{Component:Ie,name:"A24"},{Component:Pe,name:"Pixar"},{Component:Le,name:"Prada"},{Component:Ee,name:"Salomon"},{Component:Ze,name:"OpenAI"},{Component:Me,name:"Sony"},{Component:et,name:"Strava"}],ir=4;function Wx(){const[e,t]=f.useState(rn.slice(0,4));return f.useEffect(()=>{const n=setInterval(()=>{t(r=>{const a=(rn.indexOf(r[0])+4)%rn.length;return rn.slice(a,a+4)})},6e3);return()=>clearInterval(n)},[]),s.jsx("div",{className:"w-full py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex w-full flex-col items-center gap-4 space-x-2 px-4 py-4 md:flex-row",children:s.jsx("div",{className:"grid w-full grid-cols-4 gap-4",children:s.jsx(ee,{initial:!1,mode:"popLayout",children:e.map((n,r)=>s.jsx("div",{className:"relative flex h-10 w-full items-center justify-center overflow-hidden",children:s.jsx(S.div,{className:"absolute inset-0 flex items-center justify-center",initial:{y:-40,opacity:0},animate:{y:0,opacity:1},exit:{y:40,opacity:0},transition:{duration:.5,delay:r*.1},children:s.jsx(n.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"})})},n.name))})})})})})}const rn=[{Component:Te,name:"AppleMusic"},{Component:Ie,name:"A24"},{Component:Pe,name:"Pixar"},{Component:Le,name:"Prada"},{Component:Ee,name:"Salomon"},{Component:Ze,name:"OpenAI"},{Component:Me,name:"Sony"},{Component:et,name:"Strava"}];function Yx(){const[e,t]=f.useState(Xx);return f.useEffect(()=>{const n=setInterval(()=>{t(r=>{const i=[...r];return[i.pop(),...i]})},4e3);return()=>clearInterval(n)},[]),s.jsx("div",{className:"w-full py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"grid w-full grid-cols-4 gap-x-4 gap-y-8",children:s.jsx(ee,{initial:!1,mode:"popLayout",children:e.map((n,r)=>s.jsx(S.div,{className:"flex h-[100px] items-center justify-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",duration:0,delay:r*.1,stiffness:280,damping:18,mass:.3},children:s.jsx(n.Component,{className:"h-full w-[80px] text-black dark:text-white"})},`${n.name}-${r}`))})})})})}const Xx=[{Component:Te,name:"AppleMusic"},{Component:Ie,name:"A24"},{Component:Pe,name:"Pixar"},{Component:Le,name:"Prada"},{Component:Ee,name:"Salomon"},{Component:Ze,name:"OpenAI"},{Component:Me,name:"Sony"},{Component:et,name:"Strava"}];function Kx(){const[e,t]=f.useState(Jx);return f.useEffect(()=>{const n=setInterval(()=>{t(r=>{const i=[...r];return[i.pop(),...i]})},4e3);return()=>clearInterval(n)},[]),s.jsx("div",{className:"w-full py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"grid w-full grid-cols-4 gap-x-4 gap-y-8",children:s.jsx(ee,{initial:!1,mode:"popLayout",children:e.map((n,r)=>s.jsx(S.div,{className:"flex h-[100px] items-center justify-center",initial:{scale:.6,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.6,opacity:0},transition:{duration:.5,delay:r*.1},children:s.jsx(n.Component,{className:"h-full w-[80px] text-black dark:text-white"})},`${n.name}-${r}`))})})})})}const Jx=[{Component:Te,name:"AppleMusic"},{Component:Ie,name:"A24"},{Component:Pe,name:"Pixar"},{Component:Le,name:"Prada"},{Component:Ee,name:"Salomon"},{Component:Ze,name:"OpenAI"},{Component:Me,name:"Sony"},{Component:et,name:"Strava"}];function Qx(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",style:{"--shadow-size":"200px"},children:s.jsx(Ke,{gap:120,children:Zx.map(e=>s.jsx(e.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"},e.name))})})})})}const Zx=[{Component:Te,name:"AppleMusic"},{Component:Ie,name:"A24"},{Component:Pe,name:"Pixar"},{Component:Le,name:"Prada"},{Component:Ee,name:"Salomon"},{Component:Ze,name:"OpenAI"},{Component:Me,name:"Sony"},{Component:et,name:"Strava"}];function eh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col space-y-24 px-6 lg:px-8",style:{"--shadow-size":"200px"},children:[s.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",children:s.jsx(Ke,{gap:120,children:oa.map(e=>s.jsx(e.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"},e.name))})}),s.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",children:s.jsx(Ke,{gap:120,reverse:!0,children:oa.map(e=>s.jsx(e.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"},e.name))})})]})})}const oa=[{Component:Te,name:"AppleMusic"},{Component:Ie,name:"A24"},{Component:Pe,name:"Pixar"},{Component:Le,name:"Prada"},{Component:Ee,name:"Salomon"},{Component:Ze,name:"OpenAI"},{Component:Me,name:"Sony"},{Component:et,name:"Strava"}],th=f.forwardRef((e,t)=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -28.5 256 256",preserveAspectRatio:"xMidYMid",title:"Discord",...e,ref:t,children:s.jsx("g",{children:s.jsx("path",{d:"M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z",fill:"#5865F2",fillRule:"nonzero"})})}));f.forwardRef((e,t)=>s.jsx("svg",{viewBox:"0 0 98 96",xmlns:"http://www.w3.org/2000/svg",title:"GitHub",...e,ref:t,children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#24292f"})}));const nh=f.forwardRef((e,t)=>s.jsx("svg",{viewBox:"0 0 98 96",xmlns:"http://www.w3.org/2000/svg",title:"GitHub",...e,ref:t,children:s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"})})),rh=f.forwardRef((e,t)=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",title:"LinkedIn",...e,ref:t,children:s.jsxs("g",{fill:"none",children:[s.jsx("path",{d:"M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z",fill:"#069"}),s.jsx("path",{d:"M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z",fill:"#fff"})]})})),sh=f.forwardRef((e,t)=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 172 172",fill:"none",title:"Reddit",...e,ref:t,children:[s.jsx("path",{d:"M85.9 171.4C133.12 171.4 171.4 133.12 171.4 85.9C171.4 38.6796 133.12 0.399994 85.9 0.399994C38.6796 0.399994 0.400002 38.6796 0.400002 85.9C0.400002 133.12 38.6796 171.4 85.9 171.4Z",fill:"#FF4500"}),s.jsx("path",{d:"M142.9 85.9C142.9 79 137.3 73.4 130.4 73.4C127 73.4 124 74.7 121.8 76.9C113.3 70.8 101.5 66.8 88.5 66.3L94.2 39.6L112.7 43.5C112.9 48.2 116.8 52 121.6 52C126.5 52 130.5 48 130.5 43.1C130.5 38.2 126.5 34.2 121.6 34.2C118.1 34.2 115.1 36.2 113.7 39.2L93 34.8C92.4 34.7 91.8 34.8 91.3 35.1C90.8 35.4 90.5 35.9 90.3 36.5L84 66.3C70.7 66.7 58.8 70.6 50.2 76.9C48 74.8 44.9 73.4 41.6 73.4C34.7 73.4 29.1 79 29.1 85.9C29.1 91 32.1 95.3 36.5 97.3C36.3 98.5 36.2 99.8 36.2 101.1C36.2 120.3 58.5 135.8 86.1 135.8C113.7 135.8 136 120.3 136 101.1C136 99.8 135.9 98.6 135.7 97.4C139.8 95.4 142.9 91 142.9 85.9ZM57.4 94.8C57.4 89.9 61.4 85.9 66.3 85.9C71.2 85.9 75.2 89.9 75.2 94.8C75.2 99.7 71.2 103.7 66.3 103.7C61.4 103.7 57.4 99.7 57.4 94.8ZM107.1 118.3C101 124.4 89.4 124.8 86 124.8C82.6 124.8 70.9 124.3 64.9 118.3C64 117.4 64 115.9 64.9 115C65.8 114.1 67.3 114.1 68.2 115C72 118.8 80.2 120.2 86.1 120.2C92 120.2 100.1 118.8 104 115C104.9 114.1 106.4 114.1 107.3 115C108 116 108 117.4 107.1 118.3ZM105.5 103.7C100.6 103.7 96.6 99.7 96.6 94.8C96.6 89.9 100.6 85.9 105.5 85.9C110.4 85.9 114.4 89.9 114.4 94.8C114.4 99.7 110.4 103.7 105.5 103.7Z",fill:"white"})]}));function ih(){const[e,t]=f.useState(null);return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-wrap justify-center",children:ah.map((n,r)=>s.jsxs("div",{className:$("relative cursor-pointer px-6 py-2 transition-opacity duration-200",e&&e!==n.name?"opacity-40":"opacity-100"),onMouseEnter:()=>t(n.name),onMouseLeave:()=>t(null),children:[s.jsx("span",{className:"text-sm text-zinc-900 dark:text-white sm:text-lg",children:n.name}),s.jsx(ee,{initial:!1,children:e===n.name&&s.jsx(S.div,{className:"absolute bottom-0 left-0 right-0 flex items-center justify-center",initial:{y:-35,rotate:0,opacity:0},animate:{y:-45,opacity:1,rotate:Math.random()*20-10},exit:{y:-35,opacity:0,rotate:0},transition:{duration:.2,ease:[.785,.135,.15,.86]},children:s.jsx(n.icon,{})},n.name)})]},r))})})})}const ah=[{name:"Discord",icon:th},{name:"LinkedIn",icon:rh},{name:"GitHub",icon:nh},{name:"Reddit",icon:sh}];function oh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3",children:lh.map((e,t)=>s.jsxs("a",{href:e.href,className:"group relative h-32",children:[s.jsx("div",{className:"absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 group-hover:opacity-50 group-hover:blur-[10px] dark:bg-zinc-900",children:s.jsx(e.icon,{className:"h-auto w-20 text-zinc-900 dark:text-white"})}),s.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center",children:s.jsxs("div",{className:"inline-flex translate-y-4 items-center text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white",children:["Visit Site",s.jsx(oe,{className:"ml-1",size:16})]})})]},t))})})})}const lh=[{name:"AppleMusic",icon:Te,href:"#"},{name:"A24",icon:Ie,href:"#"},{name:"Pixar",icon:Pe,href:"#"},{name:"Prada",icon:Le,href:"#"},{name:"Salomon",icon:Ee,href:"#"},{name:"Sony",icon:Me,href:"#"}];function ch(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("a",{className:"group relative grid grid-cols-2 gap-4 sm:grid-cols-3",href:"#",children:[dh.map((e,t)=>s.jsx("div",{className:"group relative h-32",children:s.jsx("div",{className:"absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 dark:bg-zinc-900",children:s.jsx(e.icon,{className:"h-auto w-20 text-zinc-900 dark:text-white"})})},t)),s.jsxs("div",{className:"absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center",children:[s.jsx("div",{className:"absolute inset-0 bg-white bg-opacity-0 backdrop-blur-[0px] transition-all duration-200 group-hover:bg-opacity-50 group-hover:backdrop-blur-[4px] dark:bg-black dark:bg-opacity-0"}),s.jsxs("div",{className:"inline-flex translate-y-2 scale-[0.95] items-center font-medium text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 dark:text-white",children:["Show case study",s.jsx(oe,{className:"ml-1",size:16})]})]})]})})})}const dh=[{name:"AppleMusic",icon:Te,href:"#"},{name:"A24",icon:Ie,href:"#"},{name:"Pixar",icon:Pe,href:"#"},{name:"Prada",icon:Le,href:"#"},{name:"Salomon",icon:Ee,href:"#"},{name:"Sony",icon:Me,href:"#"}];function uh(){var a;const[e,t]=f.useState(null),[n,r]=f.useState(0),i=(o,l)=>{t(o.name),r(l.currentTarget.offsetLeft)};return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("nav",{onMouseLeave:()=>t(null),children:s.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:s.jsx("div",{className:"flex justify-center",children:s.jsxs("div",{className:"relative flex",children:[s.jsx("ul",{className:"relative flex list-none p-0",role:"menubar",children:la.map(o=>s.jsx("div",{className:"relative",onMouseEnter:l=>i(o,l),onFocus:l=>i(o,l),role:"menuitem","aria-haspopup":"true","aria-expanded":e===o.name,children:s.jsx(ge,{className:"px-3 py-2 text-sm text-zinc-950 dark:text-zinc-50",href:"#",children:o.name})},o.name))}),s.jsx(ee,{children:e&&s.jsx(S.div,{layout:!0,className:"absolute top-full mt-2 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 dark:bg-black dark:ring-white dark:ring-opacity-5",initial:{opacity:0,scale:.95,x:n},animate:{opacity:1,scale:1,x:n},exit:{opacity:0,scale:.95},transition:{duration:.2},onMouseEnter:()=>t(e),onMouseLeave:()=>t(null),children:s.jsx(S.div,{layout:"position",children:(a=la.find(o=>o.name===e))==null?void 0:a.content})})})]})})})})})})}const la=[{name:"Products",href:"/products",content:s.jsx("div",{className:"w-[200px]",children:s.jsxs("ul",{className:"flex flex-col space-y-1 py-1",children:[s.jsx("li",{className:"px-1",children:s.jsx(ge,{href:"/products/featured",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Featured"})}),s.jsx("li",{className:"px-1",children:s.jsx(ge,{href:"/products/new",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"New Arrivals"})}),s.jsx("li",{className:"px-1",children:s.jsx(ge,{href:"/products/sale",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Sale"})})]})})},{name:"Membership",href:"/membership",content:s.jsx("div",{className:"p-2",children:s.jsxs("div",{className:"grid grid-cols-2 space-x-2",children:[s.jsx("div",{className:"bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",children:"Feature"}),s.jsx("div",{className:"bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",children:"Content"})]})})},{name:"About",href:"/about",content:s.jsx("div",{className:"w-[200px]",children:s.jsxs("ul",{className:"flex flex-col space-y-1 py-1",children:[s.jsxs("li",{className:"px-1",children:[" ",s.jsx(ge,{href:"/about/story",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Our Story"})," "]}),s.jsxs("li",{className:"px-1",children:[" ",s.jsx(ge,{href:"/about/team",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Team"})," "]})]})})}];function mh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto flex max-w-7xl justify-center px-6 lg:px-8",children:s.jsx("div",{className:"flex max-w-full flex-nowrap overflow-x-auto",children:s.jsx(Ce,{defaultValue:ca[0],className:"rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:.2,duration:.3},enableHover:!0,children:ca.map((e,t)=>s.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white","data-id":e,type:"button",children:e},t))})})})})}const ca=["Home","About","Services","Contact","Pricing","FAQ"];function ph(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto flex max-w-7xl justify-center px-6 lg:px-8",children:s.jsx("div",{className:"flex max-w-full flex-nowrap overflow-x-auto",children:s.jsx(Ce,{defaultValue:da[0],className:"rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:.2,duration:.3},children:da.map((e,t)=>s.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white","data-id":e,type:"button",children:e},t))})})})})}const da=["Home","About","Services","Contact"];function fh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"mx-auto w-full max-w-fit rounded-xl border border-zinc-200 p-1 dark:border-zinc-800",children:s.jsx("div",{className:"flex overflow-x-auto",children:s.jsx(Ce,{defaultValue:ua[0],className:"whitespace-nowrap rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:0,duration:.2},enableHover:!0,children:ua.map((e,t)=>s.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white","data-id":e,type:"button",children:e},t))})})})})})}const ua=["Home","About","Services","Contact"];function xh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"mx-auto w-full max-w-fit rounded-xl border border-zinc-200 p-1 dark:border-zinc-800",children:s.jsx("div",{className:"flex overflow-x-auto",children:s.jsx(Ce,{defaultValue:ma[0],className:"whitespace-nowrap rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:0,duration:.2},children:ma.map((e,t)=>s.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-white data-[checked=true]:dark:text-white","data-id":e,type:"button",children:e},t))})})})})})}const ma=["Home","About","Services","Contact"];function hh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"mx-auto w-full max-w-fit rounded-full bg-zinc-100 p-1 dark:bg-zinc-800",children:s.jsx("div",{className:"flex overflow-x-clip",children:s.jsx(Ce,{defaultValue:pa[0],className:"z-10 rounded-full bg-white shadow-md dark:bg-black",transition:{type:"spring",bounce:0,duration:.2},children:pa.map((e,t)=>s.jsx("button",{className:"px-3 py-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 data-[checked=true]:dark:text-white","data-id":e,type:"button",children:s.jsx("span",{className:"relative z-20",children:e})},t))})})})})})}const pa=["Home","About","Services","Contact"];function gh(){const[e,t]=f.useState(ar[0]),[n,r]=f.useState(0),[i,a]=f.useState(0),o=f.useRef(null);f.useEffect(()=>{var u;const c=ar.indexOf(e),d=(u=o.current)==null?void 0:u.children[c+1];if(d){const{offsetLeft:m,offsetWidth:p}=d;a(m),r(p)}},[e]);const l=c=>{t(c)};return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex justify-center",children:s.jsxs("div",{ref:o,className:"relative flex max-w-full overflow-x-auto border-b border-zinc-200 dark:border-zinc-800",children:[s.jsx(S.div,{className:"absolute bottom-0 h-0.5 bg-black dark:bg-white",layoutId:"underline",animate:{x:i,width:n},transition:{type:"spring",bounce:0,duration:.2}}),s.jsx(Ce,{className:"top-1.5 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:0,duration:.2},enableHover:!0,children:ar.map((c,d)=>s.jsx("button",{className:$("px-3 py-4 text-sm/3 text-zinc-500 transition-colors duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50",e===c&&"text-black dark:text-white"),"data-id":c,type:"button",onClick:()=>l(c),children:c},d))})]})})})})}const ar=["Home","About","Services","Contact"];function vh(){const e=f.useRef(null),[t,n]=f.useState(!1),{scrollYProgress:r}=te({container:e,offset:["start start","100px start"]});return r.on("change",i=>{n(i>0)}),s.jsxs("div",{ref:e,className:"relative mx-auto h-[100vh] max-w-7xl overflow-y-auto px-6 lg:px-8",children:[s.jsx("div",{className:"sticky top-8",children:s.jsx("div",{className:$("flex w-full items-center justify-between rounded-full border transition-all duration-200 ease-out",t?"border-zinc-200 bg-white/80 px-2 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80":"border-transparent bg-transparent px-0 backdrop-blur-0"),children:s.jsxs("div",{className:"flex w-full items-center justify-between p-2",children:[s.jsxs("a",{href:"#",className:"p-1",children:[s.jsx("span",{className:"sr-only",children:"Your Company"}),s.jsx("svg",{className:"h-8 w-auto text-zinc-950 dark:text-white",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:s.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]}),s.jsxs("div",{className:"flex gap-x-6 sm:gap-x-12",children:[s.jsx("a",{className:"text-sm/6 font-normal text-zinc-900 dark:text-zinc-100",href:"#",children:"Login"}),s.jsx("a",{className:"text-sm/6 font-normal text-zinc-900 dark:text-zinc-100",href:"#",children:"Sign Up"})]})]})})}),s.jsx("div",{className:"mt-32",children:s.jsx("div",{className:"h-[200vh] w-full text-center",children:s.jsx("div",{className:"text-sm",children:"Scroll down"})})})]})}function yh(){return f.useState("GPT-4"),s.jsx("div",{className:"flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8"})}function bh({className:e,size:t=60,transition:n,onAnimationComplete:r,style:i}){const a={repeat:1/0,duration:5,ease:"linear"};return s.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",children:s.jsx(S.div,{className:$("absolute aspect-square bg-zinc-500",e),style:{width:t,offsetPath:`rect(0 auto auto 0 round ${t}px)`,...i},animate:{offsetDistance:["0%","100%"]},transition:n||a,onAnimationComplete:r})})}const jt=[{label:"",isLoading:!1},{label:"Analyzing scope...",isLoading:!1},{label:"Synthesizing solutions...",isLoading:!1},{label:"Finalizing output...",isLoading:!1}];function wh(){const[e,t]=f.useState(""),[n,r]=f.useState(!1),[i,a]=f.useState(0),[o,l]=f.useState(jt[0]),c=u=>{u.key==="Enter"&&(t(""),r(!0),a(1),l({label:jt[1].label,isLoading:!0}))},d=()=>{l(m=>({...m,isLoading:!1}));const u=Math.floor(Math.random()*501)+1500;if(i<jt.length-1){const m=i+1;setTimeout(()=>{a(m),l({label:jt[m].label,isLoading:!0})},u)}else setTimeout(()=>{r(!1),a(0),l(jt[0])},u)};return s.jsx("div",{className:"flex items-center justify-center bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8",children:s.jsxs("div",{className:"relative flex h-[66px] w-[400px] rounded-full bg-[#232323] px-[28px]",children:[s.jsxs("div",{className:"flex flex-1 flex-row items-center gap-5",children:[s.jsx(xs,{className:"size-4 text-white"}),s.jsx("div",{className:"h-[16px] w-[1px] bg-[#373739]"}),s.jsx("input",{type:"text",className:"w-full bg-transparent text-white outline-none",value:e,onChange:u=>t(u.target.value),onKeyDown:c,disabled:n}),s.jsx(He,{className:"absolute left-[82px] top-[19px] whitespace-nowrap text-[#e1e1e1]",variants:{item:{hidden:{opacity:0,filter:"blur(2px)"},visible:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(2px)"}}},per:"word",delay:.5,speedReveal:.9,speedSegment:.3,trigger:o.isLoading,segmentWrapperClassName:"[&>*]:bg-gradient-to-b [&>*]:from-[#e4d3e8] [&>*]:via-[#afe1f0] [&>*]:to-[#e4d3e8] [&>*]:bg-clip-text [&>*]:text-transparent",onAnimationComplete:d,children:o.label},o.label)]}),n&&s.jsx(bh,{className:"h-[500px] rounded-full bg-gradient-to-l from-[#232323] via-[#3d5256] to-[#232323]",size:500,style:{transformOrigin:"50% 90%"}})]})})}function Nh({className:e,style:t,colors:n=["#FF5733","#33FF57","#3357FF","#F1C40F"],mode:r="rotate",blur:i="medium",transition:a,scale:o=1,duration:l=5}){const c={repeat:1/0,duration:l,ease:"linear"},d={rotate:{background:[`conic-gradient(from 0deg at 50% 50%, ${n.join(", ")})`,`conic-gradient(from 360deg at 50% 50%, ${n.join(", ")})`],transition:{...a??c}},pulse:{background:n.map(m=>`radial-gradient(circle at 50% 50%, ${m} 0%, transparent 100%)`),scale:[1*o,1.1*o,1*o],opacity:[.5,.8,.5],transition:{...a??{...c,repeatType:"mirror"}}},breathe:{background:[...n.map(m=>`radial-gradient(circle at 50% 50%, ${m} 0%, transparent 100%)`)],scale:[1*o,1.05*o,1*o],transition:{...a??{...c,repeatType:"mirror"}}},colorShift:{background:n.map((m,p)=>{const x=n[(p+1)%n.length];return`conic-gradient(from 0deg at 50% 50%, ${m} 0%, ${x} 50%, ${m} 100%)`}),transition:{...a??{...c,repeatType:"mirror"}}},flowHorizontal:{background:n.map(m=>{const p=n[(n.indexOf(m)+1)%n.length];return`linear-gradient(to right, ${m}, ${p})`}),transition:{...a??{...c,repeatType:"mirror"}}},static:{background:`linear-gradient(to right, ${n.join(", ")})`}},u=m=>typeof m=="number"?`blur-[${m}px]`:{softest:"blur-xs",soft:"blur-sm",medium:"blur-md",strong:"blur-lg",stronger:"blur-xl",strongest:"blur-xl",none:"blur-none"}[m];return s.jsx(S.div,{style:{...t,"--scale":o,willChange:"transform",backfaceVisibility:"hidden"},animate:d[r],className:$("pointer-events-none absolute inset-0 h-full w-full","scale-[var(--scale)] transform-gpu",u(i),e)})}function jh(){const[e,t]=f.useState(""),[n,r]=f.useState(!1);return f.useEffect(()=>{n&&setTimeout(()=>{r(!1)},8e3)},[n]),s.jsx("div",{className:"flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8",children:s.jsxs("div",{className:"relative h-[56px] w-full max-w-[400px]",children:[s.jsx(S.div,{className:"absolute inset-0",animate:{opacity:n?1:0,scale:n?1:.9},transition:{duration:.5,ease:"easeInOut"},children:s.jsx(Nh,{colors:["#0894FF","#C959DD","#FF2E54","#FF9004"],mode:"flowHorizontal",blur:"medium"})}),s.jsxs("div",{className:"relative h-[56px] w-full max-w-[400px] rounded-xl [perspective:1000px]",children:[s.jsx("input",{className:$("h-full w-full rounded-xl bg-zinc-100 py-2 pl-[52px] pr-6 text-zinc-800 outline-none placeholder:text-black/30 dark:bg-zinc-800 dark:text-white/60 dark:placeholder:text-white/30"),type:"text",disabled:n,value:n?"":e,onChange:i=>t(i.target.value),placeholder:n?"":"Search...",onKeyDown:i=>{i.key==="Enter"&&r(!0)}}),n&&s.jsxs(vs,{className:"pointer-events-none absolute left-[52px] top-1/2 h-6 w-full -translate-y-1/2 leading-6 text-zinc-800 dark:text-white/60",trigger:n,variants:{initial:{opacity:0,y:20,rotateX:-90},animate:{opacity:1,y:0,rotateX:0},exit:{opacity:0,y:-20,rotateX:90}},transition:{type:"spring",stiffness:320,damping:20,mass:1},children:[s.jsx("span",{children:e}),s.jsx("span",{children:"Searching..."})]}),s.jsx(Of,{className:"absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-zinc-700 dark:text-white/30"})]})]})})}function kh(){const[e,t]=f.useState([0,0,0,0]);return f.useEffect(()=>{t([25,15,80,20])},[]),s.jsx("div",{className:"relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24",children:s.jsxs("dl",{className:"grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-4",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"New users"}),s.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[s.jsx(Ve,{value:e[0],springOptions:{bounce:0,duration:2e3}}),"%"]})]}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"Low churn rate"}),s.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[s.jsx(Ve,{value:e[1],springOptions:{bounce:0,duration:2e3}}),"%"]})]}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"High satisfaction"}),s.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[s.jsx(Ve,{value:e[2],springOptions:{bounce:0,duration:2e3}}),"%"]})]}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"MRR"}),s.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[s.jsx(Ve,{value:e[3],springOptions:{bounce:0,duration:2e3}}),"k$"]})]})]})})}function Sh(){const[e,t]=f.useState([0,0,0]);return f.useEffect(()=>{t([12e4,11e3,3e5])},[]),s.jsx("div",{className:"relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24",children:s.jsxs("dl",{className:"grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-3",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx("dt",{className:"mt-1 text-zinc-500 dark:text-zinc-400",children:"Transactions processed"}),s.jsxs("dd",{className:"order-first text-5xl text-zinc-900 dark:text-white",children:["$",s.jsx(Ve,{value:e[0],springOptions:{bounce:0,duration:2e3}})]})]}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("dt",{className:"mt-1 text-zinc-500 dark:text-zinc-400",children:"Users connected last month"}),s.jsx("dd",{className:"order-first text-5xl text-zinc-900 dark:text-white",children:s.jsx(Ve,{value:e[1],springOptions:{bounce:0,duration:2e3}})})]}),s.jsxs("div",{className:"flex flex-col",children:[s.jsx("dt",{className:"mt-1 text-zinc-500 dark:text-zinc-400",children:"Total Views"}),s.jsxs("dd",{className:"order-first text-5xl text-zinc-900 dark:text-white",children:[s.jsx(Ve,{value:e[2],springOptions:{bounce:0,duration:2e3}}),"+"]})]})]})})}const zh=[{name:"Jon Doe",src:"/avatars/1.png",job:"Software Engineer"},{name:"Jane Doe",src:"/avatars/2.png",job:"Product Manager"},{name:"Fly Doe",src:"/avatars/3.png",job:"Designer"},{name:"Rich Doe",src:"/avatars/4.png",job:"Data Scientist"}];function Ah(){const[e,t]=f.useState(null);return s.jsx("div",{className:"w-full py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-wrap justify-center gap-5",children:zh.map((n,r)=>s.jsxs("div",{className:"relative",children:[s.jsx("img",{src:n.src,alt:n.name,onMouseEnter:()=>{t(n.name)},className:"size-16 rounded-full",onMouseLeave:()=>t(null)},r),s.jsx(ee,{initial:!1,children:e===n.name&&s.jsxs(S.div,{className:"absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center whitespace-nowrap",initial:{y:-60,rotate:0,opacity:0},animate:{y:-80,opacity:1,rotate:Math.random()*20-10},exit:{y:-60,opacity:0,rotate:0},transition:{duration:.2,ease:[.785,.135,.15,.86]},children:[s.jsx("div",{className:"text-sm font-medium text-zinc-900 dark:text-white",children:n.name}),s.jsx("div",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:n.job})]},n.name)})]},r))})})})}const Ch=[{customer:"Jony Ive - LoveFrom",work:"Design Engineering",href:"#"},{customer:"Jessica Walsh - &Walsh",work:"Brand Design",href:"#"},{customer:"Paula Scher - Pentagram",work:"Visual Design",href:"#"},{customer:"Dieter Rams - Braun",work:"Product Engineering",href:"#"},{customer:"Kenya Hara - MUJI",work:"Design Systems",href:"#"}];function Th(){return s.jsx("div",{className:"relative z-0 flex w-full flex-col items-start p-4",children:s.jsx(Ce,{className:"w-full bg-zinc-100 dark:bg-zinc-900",transition:{type:"spring",bounce:.2,duration:.6},enableHover:!0,children:Ch.map((e,t)=>s.jsxs(ge,{href:e.href,className:"flex w-full items-center justify-between rounded-sm px-4 py-3","data-id":e.customer,children:[s.jsxs("div",{className:"grid w-full grid-cols-1 md:grid-cols-12 md:gap-4",children:[s.jsx("div",{className:"col-span-3 text-sm font-medium text-zinc-900 dark:text-white",children:e.customer}),s.jsx("div",{className:"col-span-9 text-xs text-zinc-500 md:text-sm",children:e.work})]}),s.jsx("div",{children:s.jsx(oe,{className:"size-4 text-zinc-900 dark:text-white"})})]},t))})})}const Ih=[{name:"John Doe",src:"/avatars/1.png",job:"Software Engineer"},{name:"Jane Smith",src:"/avatars/2.png",job:"Design Engineer"},{name:"Fiona Doe",src:"/avatars/3.png",job:"Designer"},{name:"Richard Roe",src:"/avatars/4.png",job:"Data Scientist"}],or=80,fa={stiffness:150,damping:19,mass:1.2};function Ph(){const[e,t]=f.useState(null);return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center sm:flex-row",children:Ih.map((n,r)=>{var d;const i=f.useRef(null),a=ze(0),o=ut(a,fa),l=(d=i.current)==null?void 0:d.getBoundingClientRect(),c=u=>{if(!l)return;const m=u.clientX-l.left-or/2;a.set(m)};return s.jsxs("div",{className:$("relative flex cursor-pointer flex-col items-center justify-center px-6 py-6 text-center transition-opacity duration-200 sm:py-2",e&&e!==n.name?"opacity-40":"opacity-100"),onMouseEnter:()=>{t(n.name)},onMouseLeave:()=>{t(null)},onMouseMove:c,ref:i,children:[s.jsx("span",{className:"text-lg text-zinc-900 dark:text-white",children:n.name}),s.jsx("span",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:n.job}),s.jsx(ee,{initial:!1,children:e===n.name&&s.jsx(S.div,{className:"pointer-events-none absolute bottom-0 left-0 z-10 sm:pointer-events-auto",initial:{y:-55,opacity:0,filter:"blur(10px)"},animate:{y:-65,opacity:1,filter:"blur(0px)"},exit:{y:-55,opacity:0,filter:"blur(10px)"},style:{x:o},transition:fa,children:s.jsx("img",{src:n.src,alt:n.name,className:"rounded-[4px]",style:{width:or,height:or}})},n.name)})]},r)})})})})}const Lh=[{name:"Jon Doe",src:"/avatars/1.png",job:"Software Engineer"},{name:"Jane Doe",src:"/avatars/2.png",job:"Product Manager"},{name:"Fly Doe",src:"/avatars/3.png",job:"Designer"},{name:"Rich Doe",src:"/avatars/4.png",job:"Data Scientist"},{name:"John Doe",src:"/avatars/5.png",job:"Software Engineer"}];function Eh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex justify-center -space-x-4",children:Lh.map((e,t)=>s.jsx("div",{className:"relative rounded-full border-2 border-zinc-50 bg-white transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.2] dark:border-zinc-900 dark:bg-zinc-900",children:s.jsx("img",{src:e.src,alt:e.name,className:"size-12 rounded-full"},t)},t))})})})}const Mh=[{customer:"Jony Ive - LoveFrom",work:"Design Engineering",href:"#"},{customer:"Jessica Walsh - &Walsh",work:"Brand Design",href:"#"},{customer:"Paula Scher - Pentagram",work:"Visual Design",href:"#"},{customer:"Dieter Rams - Braun",work:"Product Engineering",href:"#"},{customer:"Kenya Hara - MUJI",work:"Design Systems",href:"#"}];function Rh({link:e,index:t}){const[n,r]=f.useState(!1),i=()=>s.jsxs("div",{className:"flex w-full items-center justify-between rounded-sm px-4 py-3",children:[s.jsxs("div",{className:"grid w-full grid-cols-1 md:grid-cols-12 md:gap-4",children:[s.jsx("div",{className:"col-span-3 text-sm font-medium text-zinc-900 dark:text-white",children:e.customer}),s.jsx("div",{className:"col-span-9 text-xs text-zinc-500 md:text-sm",children:e.work})]}),s.jsx("div",{children:s.jsx(oe,{className:"size-4 text-zinc-900 dark:text-white"})})]});return s.jsx(ge,{href:e.href,"data-id":e.customer,children:s.jsxs("div",{className:"relative w-full overflow-hidden",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[s.jsx(S.div,{initial:{y:0},animate:{y:n?-16:0,rotateX:n?90:0},transition:{duration:.5,type:"spring",bounce:0},children:i()}),s.jsx(S.div,{className:"absolute left-0 top-0 w-full",initial:{y:16},animate:{y:n?0:16,rotateX:n?0:90},transition:{duration:.5,type:"spring",bounce:0},children:i()})]})},t)}function Dh(){return s.jsx("div",{className:"relative z-0 flex w-full flex-col items-start p-4",children:s.jsx("div",{className:"flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-800",children:Mh.map((e,t)=>s.jsx(Rh,{link:e,index:t},t))})})}const Oh=[{name:"Jane Doe",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"John Smith",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Alice Johnson",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos"},{name:"Bob Brown",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Charlie White",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Diana Green",content:"Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."}];function sn({className:e=""}){const t=Oh.sort(()=>Math.random()-.5);return s.jsx("div",{className:$("flex h-[1000px] w-full overflow-y-hidden [mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",e),style:{"--shadow-size":"100px"},children:s.jsx(Ke,{gap:24,direction:"vertical",duration:20,className:"flex",children:t.map((n,r)=>s.jsxs("div",{className:"rounded bg-zinc-100 p-4 dark:bg-zinc-900",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"size-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-400"}),s.jsx("span",{className:"text-sm text-zinc-950 dark:text-zinc-50",children:n.name})]}),s.jsx("p",{className:"mt-2 flex text-sm text-zinc-600 dark:text-zinc-400",children:n.content})]},r))})})}function Fh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:[s.jsx(sn,{}),s.jsx(sn,{className:"hidden md:block"}),s.jsx(sn,{className:"hidden lg:block"}),s.jsx(sn,{className:"hidden xl:block"})]})})})}const Vh=[{name:"Jane Doe",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"John Smith",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Alice Johnson",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Bob Brown",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Charlie White",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Diana Green",content:"Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."}];function xa({reverse:e}){const t=Vh.sort(()=>Math.random()-.5);return s.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",style:{"--shadow-size":"100px"},children:s.jsx(Ke,{gap:24,duration:40,reverse:e,durationOnHover:300,children:t.map((n,r)=>s.jsxs("div",{className:"max-w-64 rounded bg-zinc-100 p-4 dark:bg-zinc-900",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"size-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-400"}),s.jsx("span",{className:"text-sm text-zinc-950 dark:text-zinc-50",children:n.name})]}),s.jsx("p",{className:"mt-2 flex text-sm text-zinc-600 dark:text-zinc-400",children:n.content})]},r))})})}function _h(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col space-y-6 px-6 lg:px-8",style:{"--shadow-size":"200px"},children:[s.jsx(xa,{}),s.jsx(xa,{reverse:!0})]})})}const Bh=[{content:s.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience."})},{content:s.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts."})},{content:s.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts."})}];function Hh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=[D(t,[0,.3,.4,.5,1],[.3,1,1,.3,.3]),D(t,[.4,.5,.6,.7,1],[.3,1,1,.3,.3]),D(t,[.6,.7,.8,.9,1],[.3,1,1,.3,.3])];return s.jsxs("div",{className:"relative h-[300vh]",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center space-y-8",ref:e,children:Bh.map((r,i)=>s.jsx(S.div,{style:{opacity:n[i]},children:r.content},i))})})})]})}function Uh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=(r,i)=>D(t,[r,i],[.3,1]);return s.jsxs("div",{className:"relative h-[300vh]",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center space-y-8",ref:e,children:["Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.","Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts.","Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts."].map((r,i)=>s.jsx(S.div,{className:"text-xl font-medium text-black dark:text-white",children:r.split(" ").map((a,o,l)=>{const c=i*.3+o/l.length*.3,d=c+1/l.length*.3;return s.jsx(S.span,{style:{opacity:n(c,d)},className:"mr-1 inline-block",children:a},o)})},i))})})})]})}function Gh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=D(t,[0,1],[0,100]);return s.jsxs("div",{className:"relative h-[300vh]",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",ref:e,children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center space-y-8",children:s.jsx(S.h1,{className:"bg-[linear-gradient(-60deg,rgba(0,0,0,0)33.3%,rgba(0,0,0,1)66.7%)] bg-[length:300%_100%] bg-clip-text text-4xl text-black [-webkit-text-fill-color:transparent] dark:bg-[linear-gradient(-60deg,rgba(255,255,255,0)33.3%,rgba(255,255,255,1)66.7%)] dark:text-white",style:{backgroundPositionX:xt`calc(100% - ${n}%)`},children:"A new way to build AI apps"})})})})]})}function $h(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=(a,o)=>D(t,[a,o],[.3,1]),r=(a,o)=>D(t,[a,o],[10,0]);return s.jsxs("div",{className:"relative h-[300vh]",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center space-y-8",ref:e,children:s.jsx(S.h1,{className:"text-4xl text-black dark:text-white",children:"A new way to build AI apps".split("").map((a,o,l)=>{const c=Math.max(0,o/l.length*.6-.1),d=Math.min(.9,c+.2);return s.jsx(S.span,{style:{opacity:n(c,d),filter:xt`blur(${r(c,d)}px)`},className:"inline-block whitespace-pre",children:a},o)})})})})})]})}function qh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=(a,o)=>D(t,[a,o],[.2,1]),r=(a,o)=>D(t,[a,o],[4,0]);return s.jsxs("div",{className:"relative h-[300vh]",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center space-y-8",ref:e,children:s.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.".split(" ").map((a,o,l)=>{const c=Math.max(0,o/l.length*.6-.1),d=Math.min(.9,c+.2);return s.jsx(S.span,{style:{opacity:n(c,d),filter:xt`blur(${r(c,d)}px)`},className:"inline-block whitespace-pre",children:a+" "},o)})})})})})]})}const ha=[{image:"https://images.beta.cosmos.so/783ec54f-c1eb-4606-a436-05c5876b47b7?format=jpeg",alt:"Image 1",description:"A stunning view of the mountains at sunrise."},{image:"https://images.beta.cosmos.so/f4c98298-4e01-4cee-853f-bff060323b00?format=jpeg",alt:"Image 2",description:"A serene beach with crystal clear waters."},{image:"https://images.beta.cosmos.so/5bad355c-2311-4926-abbb-9e1e26ee9372?format=jpeg",alt:"Image 3",description:"A bustling cityscape at night."},{image:"https://images.beta.cosmos.so/684428eb-b1cc-4f14-9519-f8034535e4e3?format=jpeg",alt:"Image 4",description:"A tranquil forest path in autumn."},{image:"https://images.beta.cosmos.so/d323e261-0242-47db-ac3e-3d97f2608d15?format=jpeg",alt:"Image 5",description:"A vibrant field of wildflowers in spring."}];function ga({children:e,images:t}){const[n,r]=f.useState(!1);return s.jsxs("a",{className:"relative inline-flex whitespace-pre text-zinc-900 dark:text-white",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),href:"#",children:[e,s.jsx(ee,{initial:!1,children:n&&s.jsx(S.div,{className:"absolute bottom-full left-1/2 z-10 mb-2 flex -translate-x-1/2",initial:{opacity:0,scale:.5,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.5,y:10},transition:{type:"spring",stiffness:300,damping:25},children:t.map((i,a)=>s.jsx(S.div,{className:"relative aspect-video h-full w-[120px] overflow-hidden rounded-[4px] shadow-md",style:{marginLeft:a>0?"-0.5rem":"0",zIndex:a},initial:{opacity:0,scale:.6,x:a===0?0:-50*a,y:a===0?0:a%2===0?-Math.random()*20:Math.random()*20,rotate:a===0?0:a%2===0?-Math.random()*8:Math.random()*8},animate:{opacity:1,scale:1},transition:{delay:a*.08,type:"spring",stiffness:300,damping:25},children:s.jsx("img",{src:i.image,alt:i.alt,className:"absolute inset-0 h-full w-full object-cover"})},`${i.image}-${a}`))})})]})}function Wh(){return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsxs("p",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Unparalleled Quality: Experience AI-generated images with breathtaking"," ",s.jsx(ga,{images:ha.slice(0,2),children:"detail"})," ","and"," ",s.jsx(ga,{images:ha.slice(2,5),children:"clarity"}),". Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts."]})})})}function Yh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=D(t,[0,1],[0,1]);return s.jsx(S.div,{ref:e,className:"relative h-[300vh]",style:{"--opacity":n},children:s.jsx("div",{className:"sticky top-0 flex h-screen items-center justify-center",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsx("div",{className:"bg-[radial-gradient(50%_50%_at_50%_50%,theme(colors.purple.100),theme(colors.purple.500)_25%,transparent_50%)] bg-[length:300%_900%] bg-clip-text bg-[50%_calc(100%*var(--opacity))] text-xl font-medium text-transparent",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience."})})})})}function Xh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=D(t,[0,1],[0,1]),r=D(t,[0,.4,.6,1],[8,0,0,8]);return s.jsx(S.div,{ref:e,className:"relative h-[300vh]",style:{"--opacity":n,"--blur":r},children:s.jsx("div",{className:"sticky top-0 flex h-screen items-center justify-center",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsx(S.div,{className:"bg-[radial-gradient(50%_50%_at_50%_50%,theme(colors.zinc.100),theme(colors.zinc.500)_25%,transparent_50%)] bg-[length:300%_900%] bg-clip-text bg-[50%_calc(100%*var(--opacity))] text-xl font-medium text-transparent",style:{filter:"blur(calc(var(--blur) * 1px))"},children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience."})})})})}const Kh=[{content:s.jsxs("div",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Effortless Creation: Transform ideas into stunning visuals with just a few words."," ",s.jsx("span",{className:"text-zinc-900 dark:text-white",children:"Our AI understands context and nuance, bringing your imagination to life"}),". Generate professional-quality visuals without complex software or design experience."]})},{content:s.jsxs("div",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity."," ",s.jsx("span",{className:"text-zinc-900 dark:text-white",children:"Every pixel is crafted to perfection, rivaling the work of master artists"}),". Create images indistinguishable from those made by human experts."]})},{content:s.jsxs("div",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI."," ",s.jsx("span",{className:"text-zinc-900 dark:text-white",children:"Our platform adapts to your needs, offering an ever-expanding universe of visual concepts"}),". Push boundaries with genre-blending compositions and futuristic concepts."]})}];function Jh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=[D(t,[.2,.25,1],[0,1,1]),D(t,[.25,.3,1],[0,1,1]),D(t,[.3,.35,1],[0,1,1])],r=[D(t,[.2,.25,1],[10,0,0]),D(t,[.25,.3,1],[10,0,0]),D(t,[.3,.35,1],[10,0,0])];return s.jsxs("div",{className:"relative h-[300vh]",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"grid grid-cols-1 gap-12 lg:grid-cols-3",ref:e,children:Kh.map((i,a)=>s.jsx(S.div,{style:{opacity:n[a],y:r[a]},children:i.content},a))})})})]})}function Qh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=(a,o)=>D(t,[a,o],[.3,1]),r=(a,o)=>D(t,[a,o],[10,0]);return s.jsxs("div",{className:"relative h-[300vh] w-full",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-2xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center space-y-8",ref:e,children:s.jsx("h1",{className:"text-center text-4xl text-zinc-900 dark:text-white",children:"We want to create a world where AI is accessible to everyone.".split("").map((a,o,l)=>{const c=Math.max(0,o/l.length*.6-.1),d=Math.min(.9,c+.2);return s.jsx(S.span,{style:{opacity:n(c,d),filter:xt`blur(${r(c,d)}px)`},children:a},o)})})})})})]})}function Zh(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=(a,o)=>D(t,[a,o],[0,1]),r=(a,o)=>D(t,[a,o],[0,4]);return s.jsxs("div",{className:"relative h-[300vh] w-full",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-2xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center space-y-8",ref:e,children:s.jsx("h1",{className:"text-center text-4xl text-zinc-900 dark:text-white",children:"We want to create a world where AI is accessible to everyone.".split("").map((a,o,l)=>{const c=Math.max(0,o/l.length*.9),d=Math.min(.9,c+.2);return s.jsx(S.span,{style:{opacity:n(c,d),y:r(c,d)},className:"inline-block whitespace-pre",children:a},o)})})})})})]})}function e0(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]}),n=(o,l)=>D(t,[o,l],[0,1]),r=(o,l)=>D(t,[o,l],[0,4]),i=(o,l)=>D(t,[o,l],[6,0]),a="Introducing a new way to craft beautiful websites, faster";return s.jsxs("div",{className:"relative h-[300vh] w-full",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-2xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center space-y-8",ref:e,children:s.jsx("h1",{className:"text-center text-4xl font-normal text-zinc-900 dark:text-white",children:a.split(" ").map((o,l,c)=>s.jsx("span",{className:"inline-block whitespace-nowrap",children:o.split("").map((d,u,m)=>{const p=a.indexOf(o)+u,x=Math.max(0,p/a.length*.9),g=Math.min(.9,x+.2),v=u===m.length-1,b=l===c.length-1;return s.jsxs(S.span,{style:{opacity:n(x,g),y:r(x,g),filter:xt`blur(${i(x,g)}px)`},className:"inline-block",children:[d,v&&!b&&" "]},u)})},l))})})})})]})}const t0={hidden:{opacity:0},visible:{opacity:1}};function n0({children:e,variants:t=t0,transition:n,viewOptions:r,as:i="div"}){const a=f.useRef(null),o=ms(a,r),l=S[i];return s.jsx(l,{ref:a,initial:"hidden",animate:o?"visible":"hidden",variants:t,transition:n,children:e})}const an=({children:e})=>s.jsx(n0,{viewOptions:{once:!0,margin:"0px 0px -100px 0px"},variants:{visible:{backgroundPosition:"0% 0"},hidden:{backgroundPosition:"100% 0"}},transition:{duration:.5},children:e});function r0(){return s.jsxs("div",{className:"relative h-[300vh] w-full",children:[s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:s.jsx("div",{className:"flex flex-col items-center justify-center",children:s.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsxs("div",{className:"flex flex-col items-center space-y-8",children:[s.jsxs("div",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:["Effortless Creation: Transform ideas into stunning visuals with just a few words."," ",s.jsx(an,{children:"Our AI understands context and nuance"}),", bringing your imagination to life. Generate professional-quality visuals without complex software or"," ",s.jsx(an,{children:"design experience"}),"."]}),s.jsxs("div",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:["Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity."," ",s.jsx(an,{children:"Every pixel is crafted to perfection"}),", rivaling the work of master artists. Create images indistinguishable from those made by human experts."]}),s.jsxs("div",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:["Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts."," ",s.jsx(an,{children:"Push boundaries with genre-blending compositions"})," ","and futuristic concepts."]})]})})})]})}const vl=f.createContext(void 0);function s0({children:e,open:t,onOpenChange:n,variants:r}){const[i,a]=f.useState(t);f.useEffect(()=>{a(t)},[t]);const o=()=>{const l=!i;a(l),n&&n(l)};return s.jsx(vl.Provider,{value:{open:i,toggle:o,variants:r},children:e})}function yl(){const e=f.useContext(vl);if(!e)throw new Error("useDisclosure must be used within a DisclosureProvider");return e}function i0({open:e=!1,onOpenChange:t,children:n,className:r,transition:i,variants:a}){return s.jsx(Ia,{transition:i,children:s.jsx("div",{className:r,children:s.jsxs(s0,{open:e,onOpenChange:t,variants:a,children:[f.Children.toArray(n)[0],f.Children.toArray(n)[1]]})})})}function a0({children:e,className:t}){const{toggle:n,open:r}=yl();return s.jsx(s.Fragment,{children:f.Children.map(e,i=>f.isValidElement(i)?f.cloneElement(i,{onClick:n,role:"button","aria-expanded":r,tabIndex:0,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),n())},className:$(t,i.props.className),...i.props}):i)})}function o0({children:e,className:t}){const{open:n,variants:r}=yl(),i=f.useId(),a={expanded:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},o={expanded:{...a.expanded,...r==null?void 0:r.expanded},collapsed:{...a.collapsed,...r==null?void 0:r.collapsed}};return s.jsx("div",{className:$("overflow-hidden",t),children:s.jsx(ee,{initial:!1,children:n&&s.jsx(S.div,{id:i,initial:"collapsed",animate:"expanded",exit:"collapsed",variants:o,children:e})})})}const on={ease:[.075,.82,.165,1],duration:.25};function l0(){const[e,t]=f.useState(!1);return s.jsx("div",{className:"py-24 sm:py-32",children:s.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:s.jsxs("div",{className:"relative",children:[s.jsx(S.p,{className:"text-xl text-zinc-500 dark:text-zinc-400",initial:{maskImage:"linear-gradient(to top,#000,#000,transparent 0,#000 200px)"},animate:{maskImage:e?"linear-gradient(to top,#000,#000,transparent 0,#000 0px)":"linear-gradient(to top,#000,#000,transparent 0,#000 200px)"},transition:{...on,duration:e?on.duration/2:on.duration*2},children:"Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection , rivaling the work of master artists. Create images indistinguishable from those made by human experts."}),s.jsxs(i0,{transition:on,onOpenChange:t,children:[s.jsx(o0,{children:s.jsxs("div",{className:"flex flex-col items-start space-y-8",children:[s.jsx("p",{className:"pt-8 text-xl text-zinc-500 dark:text-zinc-400",children:"Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts."}),s.jsx("p",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance , bringing your imagination to life. Generate professional-quality visuals without complex software or design experience"})]})}),s.jsx(a0,{children:s.jsx("button",{className:"mt-4 w-full py-2 text-left text-xl text-black dark:text-white",type:"button",children:e?"Show less":"Show more"})})]})]})})})}const c0=e=>{switch(e){case"left":return"-50%";case"right":return"-20%";default:return"0%"}};function d0(){const e=f.useRef(null),{scrollYProgress:t}=te({target:e,offset:["start end","end start"]});return s.jsxs("main",{className:"overflow-hidden",children:[s.jsx("div",{className:"h-[90vh]"}),s.jsx("div",{ref:e,className:"flex flex-col space-y-10",children:["left","right","left"].map((n,r)=>s.jsx(u0,{direction:n,progress:t,left:c0(n)},r))}),s.jsx("div",{className:"h-[90vh]"})]})}const u0=({direction:e,progress:t,left:n})=>{const r=e==="left"?-1:1,i=D(t,[0,1],[150*r,-150*r]);return s.jsx(S.div,{style:{x:i,left:n},className:"relative flex whitespace-nowrap",children:[...Array(3)].map((a,o)=>s.jsx("div",{className:"flex items-center gap-5 px-5",children:s.jsx("p",{className:"text-4xl md:text-7xl",children:"Design + Engineering"})},o))})},v0={"CTA Sections":[{fullname:"../../samples/CTA Sections/1.tsx",component:yf,fileCnt:`'use client';\r
import { motion, MotionValue, useMotionValue, useSpring } from 'motion/react';\r
\r
type FloatingImageProps = {\r
    position: { left: string; top: string; };\r
    multiplier: { x: number; y: number; };\r
    mouseX: MotionValue<number>;\r
    mouseY: MotionValue<number>;\r
    img: string;\r
    alt: string;\r
};\r
\r
const SPRING_CONFIG = { type: 'spring', stiffness: 122, damping: 30, mass: 5, };\r
\r
function FloatingImage({ img, alt, position, multiplier, mouseX, mouseY, }: FloatingImageProps) {\r
    const springX = useSpring(0, SPRING_CONFIG);\r
    const springY = useSpring(0, SPRING_CONFIG);\r
\r
    mouseX.on('change', (latest) => { springX.set(latest * multiplier.x); });\r
    mouseY.on('change', (latest) => { springY.set(latest * multiplier.y); });\r
\r
    return (\r
        <motion.div\r
            className='absolute aspect-square w-[80px] bg-zinc-100 dark:bg-zinc-800'\r
            style={{\r
                left: position.left,\r
                top: position.top,\r
                x: springX,\r
                y: springY,\r
            }}\r
        >\r
            <img src={img} alt={alt} />\r
            <div className='absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-80' />\r
        </motion.div>\r
    );\r
}\r
\r
export function Cta1() {\r
    const mouseX = useMotionValue(0);\r
    const mouseY = useMotionValue(0);\r
\r
    const handleMouseMove = (event: React.MouseEvent) => {\r
        const { clientX, clientY } = event;\r
        mouseX.set(clientX);\r
        mouseY.set(clientY);\r
    };\r
\r
    return (\r
        <div className='' onMouseMove={handleMouseMove}>\r
            <div className='mx-auto max-w-screen-xl overflow-hidden px-4 py-8 sm:py-16 lg:px-6'>\r
                <div className='relative mx-auto max-w-screen-sm py-12 text-center'>\r
                    <div className='pointer-events-none absolute inset-0'>\r
                        {ITEMS.map(\r
                            (item, index) => <FloatingImage mouseX={mouseX} mouseY={mouseY} key={index} {...item} />\r
                        )}\r
                    </div>\r
                    <div className='relative'>\r
                        <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white'>\r
                            Join the community\r
                        </h2>\r
                        <p className='mb-6 text-zinc-500 dark:text-zinc-400'>\r
                            More than +1000 designers sharing their work.\r
                        </p>\r
                        <a\r
                            href='#'\r
                            className='\r
                            px-2.5 py-1.5 text-sm \r
                            text-white bg-zinc-900 \r
                            dark:bg-white dark:text-zinc-900 \r
                            hover:bg-zinc-700 dark:hover:bg-zinc-200\r
                            transition-colors duration-300 \r
                            inline-flex items-center rounded-md'\r
                        >\r
                            Join now\r
                        </a>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const ITEMS = [ // images from https://www.cosmos.so/satorifiles/graphic-design\r
    {\r
        position: { left: '30%', top: '0%', }, multiplier: { x: -0.08, y: -0.02 },\r
        img: 'https://images.beta.cosmos.so/ef796418-a1ca-4b0b-8536-60a9e3a01449?format=jpeg', alt: 'cosmos',\r
    },\r
    {\r
        position: { left: '10%', top: '50%', }, multiplier: { x: -0.05, y: -0.09 },\r
        img: 'https://images.beta.cosmos.so/d5c3850c-7a85-4e46-b61f-059aa1300f77?format=jpeg', alt: 'cosmos',\r
    },\r
    {\r
        position: { left: '30%', top: '90%', }, multiplier: { x: -0.03, y: -0.06 },\r
        img: 'https://images.beta.cosmos.so/46a3308c-db18-484d-9421-2c68b71814b7?format=jpeg', alt: 'cosmos',\r
    },\r
    {\r
        position: { left: '70%', top: '10%', }, multiplier: { x: -0.08, y: -0.02 },\r
        img: 'https://images.beta.cosmos.so/d5acdfdf-8785-43f6-bc55-0c686812b3bd?format=jpeg', alt: 'cosmos',\r
    },\r
    {\r
        position: { left: '90%', top: '50%', }, multiplier: { x: -0.05, y: -0.09 },\r
        img: 'https://images.beta.cosmos.so/b7ecaea1-230a-4779-a45c-517c1594982d?format=jpeg', alt: 'cosmos',\r
    },\r
    {\r
        position: { left: '70%', top: '85%', }, multiplier: { x: -0.03, y: -0.06 },\r
        img: 'https://images.beta.cosmos.so/bab29ee2-aa17-41b5-b66e-a985e9307b1b?format=jpeg', alt: 'cosmos',\r
    },\r
];\r
`,uuid:32},{fullname:"../../samples/CTA Sections/2.tsx",component:Vf,fileCnt:`'use client';\r
import { useRef } from 'react';\r
import { useInView } from 'motion/react';\r
import { TextEffect } from "@/components/motion-ui/text-effect";\r
import { ArrowRight } from 'lucide-react';\r
\r
export function Cta2() {\r
    const ref = useRef(null);\r
    const isInView = useInView(ref);\r
    return (\r
        <div className='py-24 sm:py-32' ref={ref}>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='relative text-center  flex flex-col md:flex-row items-start justify-between space-y-4 md:items-center md:space-y-0'>\r
\r
                    <div className='text-left flex flex-col space-y-2 md:space-y-4'>\r
\r
                        <TextEffect\r
                            className='text-3xl text-zinc-900 dark:text-white'\r
                            as='h2'\r
                            preset='blur'\r
                            trigger={isInView}\r
                            per='char'\r
                        >\r
                            Join the community\r
                        </TextEffect>\r
\r
                        <p className='text-zinc-500 dark:text-zinc-400'>\r
                            More than +1000 designers sharing their work.\r
                        </p>\r
                    </div>\r
\r
                    <div className='flex flex-row items-center space-x-4'>\r
\r
                        <a href='#' className='inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700' >\r
                            Join now\r
                        </a>\r
\r
                        <a href='#' className='inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800'>\r
                            Learn More\r
                            <ArrowRight className='size-4' />\r
                        </a>\r
\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
`,uuid:33},{fullname:"../../samples/CTA Sections/3.tsx",component:_f,fileCnt:`'use client';\r
import { useRef, useState } from 'react';\r
import { useInView } from 'motion/react';\r
import { ArrowRightIcon } from 'lucide-react';\r
import { AnimatedNumber } from "@/components/motion-ui/animated-number";\r
\r
export function Cta3() {\r
    const [value, setValue] = useState(0);\r
    const isInViewRef = useRef(null);\r
    const isInView = useInView(isInViewRef);\r
\r
    if (isInView && value === 0) {\r
        setValue(10000);\r
    }\r
\r
    return (\r
        <div ref={isInViewRef} className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>\r
            <div className='relative mx-auto max-w-screen-sm py-12 text-center'>\r
\r
                <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white'>\r
                    Join the community\r
                </h2>\r
\r
                <p className='mb-6 text-zinc-500 dark:text-zinc-400'>\r
                    More than +{' '}\r
\r
                    <AnimatedNumber value={value} springOptions={{ bounce: 0, duration: 2000 }} />\r
\r
                    {' '}designers sharing their work.\r
                </p>\r
\r
                <div className='flex items-center justify-center gap-4'>\r
                    <a href='#' className='inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200'>\r
                        Join now\r
                    </a>\r
                    <a href='#' className='inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-200 dark:text-zinc-50 dark:hover:bg-zinc-900'>\r
                        Learn more <ArrowRightIcon className='size-4' />\r
                    </a>\r
                </div>\r
\r
            </div>\r
        </div>\r
    );\r
}\r
`,uuid:34}],"FAQ Sections":[{fullname:"../../samples/FAQ Sections/1.tsx",component:Hf,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
import { ChevronUp } from 'lucide-react';\r
\r
export function Faq1() {\r
    return (\r
        <div className='relative mx-auto max-w-xl px-6 py-12'>\r
\r
            <div className='mb-10 text-left'>\r
                <h2 className='mb-4 text-2xl font-medium text-zinc-900 dark:text-white'>\r
                    Frequently asked questions\r
                </h2>\r
                <p className='text-base text-zinc-500 dark:text-zinc-400'>\r
                    Here are some of the most common questions we receive from our users.\r
                </p>\r
            </div>\r
\r
            <Accordion\r
                className='flex w-full flex-col divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-700 dark:border-zinc-700'\r
                transition={{ duration: 0.2, ease: 'easeInOut' }}\r
            >\r
                {CONTENT.map(\r
                    (item, idx) => (\r
                        <AccordionItem value={item.value} className='py-4' key={idx}>\r
\r
                            <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>\r
                                <div className='flex items-center justify-between'>\r
                                    <div>{item.title}</div>\r
                                    <ChevronUp className='size-4 -rotate-180 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-0 dark:text-zinc-50' />\r
                                </div>\r
                            </AccordionTrigger>\r
\r
                            <AccordionContent>\r
                                <p className='pt-2 text-zinc-500 dark:text-zinc-400'>\r
                                    {item.content}\r
                                </p>\r
                            </AccordionContent>\r
\r
                        </AccordionItem>\r
                    )\r
                )}\r
            </Accordion>\r
        </div>\r
    );\r
}\r
\r
const CONTENT = [\r
    {\r
        title: 'Getting Started',\r
        value: 'getting-started',\r
        content:\r
            'Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively.',\r
    }, {\r
        title: 'Animation Properties',\r
        value: 'animation-properties',\r
        content:\r
            'Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications.',\r
    }, {\r
        title: 'Advanced Usage',\r
        value: 'advanced-usage',\r
        content:\r
            'Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement.',\r
    }, {\r
        title: 'Community and Support',\r
        value: 'community-and-support',\r
        content:\r
            'Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases.',\r
    },\r
];\r
`,uuid:35},{fullname:"../../samples/FAQ Sections/2.tsx",component:Gf,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
import { ChevronUp } from 'lucide-react';\r
\r
export function Faq2() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12'>\r
\r
                    <div className='py-0 text-left md:py-4'>\r
                        <h2 className='mb-4 text-2xl font-medium text-zinc-900 dark:text-white'>\r
                            Frequently asked questions\r
                        </h2>\r
                        <p className='text-base text-zinc-500 dark:text-zinc-400'>\r
                            Here are some of the most common questions we receive from our\r
                            users.\r
                        </p>\r
                    </div>\r
\r
                    <div className='col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none'>\r
\r
                        <Accordion\r
                            className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'\r
                            transition={{ duration: 0.2, ease: 'easeInOut' }}\r
                        >\r
                            {CONTENT.map(\r
                                (item, idx) => (\r
                                    <AccordionItem value={item.value} className='py-4' key={idx}>\r
\r
                                        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>\r
                                            <div className='flex items-center justify-between'>\r
                                                <div>{item.title}</div>\r
                                                <ChevronUp className='size-4 -rotate-180 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-0 dark:text-zinc-50' />\r
                                            </div>\r
                                        </AccordionTrigger>\r
\r
                                        <AccordionContent>\r
                                            <p className='pt-2 text-zinc-500 dark:text-zinc-400'>\r
                                                {item.content}\r
                                            </p>\r
                                        </AccordionContent>\r
\r
                                    </AccordionItem>\r
                                )\r
                            )}\r
                        </Accordion>\r
\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const CONTENT = [\r
    {\r
        title: 'Getting Started',\r
        value: 'getting-started',\r
        content:\r
            'Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively.',\r
    }, {\r
        title: 'Animation Properties',\r
        value: 'animation-properties',\r
        content:\r
            'Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications.',\r
    }, {\r
        title: 'Advanced Usage',\r
        value: 'advanced-usage',\r
        content:\r
            'Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement.',\r
    }, {\r
        title: 'Community and Support',\r
        value: 'community-and-support',\r
        content:\r
            'Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases.',\r
    },\r
];\r
`,uuid:36},{fullname:"../../samples/FAQ Sections/3.tsx",component:qf,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
import { PlusIcon } from 'lucide-react';\r
\r
export function Faq3() {\r
    return (\r
        <div className='relative mx-auto max-w-xl px-6 py-12'>\r
            <h2 className='mb-6 text-2xl font-medium text-zinc-900 dark:text-white'>\r
                FAQs\r
            </h2>\r
\r
            <Accordion\r
                transition={{ duration: 0.2, ease: 'easeInOut' }}\r
                className='flex flex-col space-y-4'\r
            >\r
                {CONTENT.map(\r
                    (item) => (\r
                        <AccordionItem\r
                            key={item.value}\r
                            value={item.value}\r
                            className='w-full rounded-xl bg-zinc-100 px-5 text-black dark:bg-zinc-900 dark:text-white'\r
                        >\r
\r
                            <AccordionTrigger className='w-full py-2'>\r
                                <div className='flex items-center justify-between'>\r
                                    <div>{item.title}</div>\r
                                    <PlusIcon className='size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white' />\r
                                </div>\r
                            </AccordionTrigger>\r
\r
                            <AccordionContent>\r
                                <p className='border-t border-zinc-200 py-2 text-zinc-800 dark:border-zinc-700 dark:text-zinc-400'>\r
                                    {item.content}\r
                                </p>\r
                            </AccordionContent>\r
\r
                        </AccordionItem>\r
                    )\r
                )}\r
            </Accordion>\r
        </div>\r
    );\r
}\r
\r
const CONTENT = [\r
    {\r
        title: 'Getting Started',\r
        value: 'getting-started',\r
        content:\r
            'Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively.',\r
    }, {\r
        title: 'Animation Properties',\r
        value: 'animation-properties',\r
        content:\r
            'Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications.',\r
    }, {\r
        title: 'Advanced Usage',\r
        value: 'advanced-usage',\r
        content:\r
            'Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement.',\r
    }, {\r
        title: 'Community and Support',\r
        value: 'community-and-support',\r
        content:\r
            'Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases.',\r
    },\r
];\r
`,uuid:37},{fullname:"../../samples/FAQ Sections/4.tsx",component:Yf,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
import { PlusIcon } from 'lucide-react';\r
\r
export function Faq4() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12'>\r
\r
                    <div className='py-0 text-left md:py-4'>\r
                        <h2 className='mb-4 text-2xl font-medium text-zinc-900 dark:text-white'>\r
                            FAQs\r
                        </h2>\r
                        <p className='text-base text-zinc-500 dark:text-zinc-400'>\r
                            Here are some of the most common questions we receive from our users.\r
                        </p>\r
                    </div>\r
\r
                    <div className='col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none'>\r
\r
                        <Accordion\r
                            className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'\r
                            transition={{ duration: 0.2, ease: 'easeInOut' }}\r
                        >\r
                            {CONTENT.map(\r
                                (item, idx) => (\r
                                    <AccordionItem value={item.value} className='py-4' key={idx}>\r
\r
                                        <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>\r
                                            <div className='flex items-center space-x-3'>\r
                                                <PlusIcon className='size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white' />\r
                                                <div>{item.title}</div>\r
                                            </div>\r
                                        </AccordionTrigger>\r
\r
                                        <AccordionContent>\r
                                            <p className='pt-2 text-zinc-500 dark:text-zinc-400'>\r
                                                {item.content}\r
                                            </p>\r
                                        </AccordionContent>\r
\r
                                    </AccordionItem>\r
                                )\r
                            )}\r
                        </Accordion>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const CONTENT = [\r
    {\r
        title: 'Getting Started',\r
        value: 'getting-started',\r
        content:\r
            'Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively.',\r
    }, {\r
        title: 'Animation Properties',\r
        value: 'animation-properties',\r
        content:\r
            'Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications.',\r
    }, {\r
        title: 'Advanced Usage',\r
        value: 'advanced-usage',\r
        content:\r
            'Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement.',\r
    }, {\r
        title: 'Community and Support',\r
        value: 'community-and-support',\r
        content:\r
            'Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases.',\r
    },\r
];\r
`,uuid:38}],"Feature Sections":[{fullname:"../../samples/Feature Sections/1.tsx",component:Kf,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
import { ChevronUp } from 'lucide-react';\r
import { cn } from "@/utils";\r
\r
export function Feature1() {\r
    const [activeAccordionId, setActiveAccordionId] = useState<string>(FEATURES[0].id);\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='flex flex-col lg:grid lg:grid-cols-2'>\r
\r
                    <div className='relative hidden h-auto lg:block'>\r
                        <img\r
                            className='aspect-square h-full w-full object-cover'\r
                            src={FEATURES.find((item) => item.id === activeAccordionId)?.image}\r
                            alt='Accordion Image'\r
                        />\r
                        <div className='absolute inset-0 bg-black opacity-20' />\r
                    </div>\r
\r
                    <div className='p-0 sm:p-8 lg:p-16'>\r
                        <Accordion\r
                            className='flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800'\r
                            expandedValue={activeAccordionId}\r
                            onValueChange={(value) => { if (!value) return; setActiveAccordionId(value as string); }}\r
                        >\r
                            {FEATURES.map(\r
                                (item) => (\r
                                    <AccordionItem key={item.id} value={item.id}>\r
                                        <AccordionTrigger\r
                                            className={cn(\r
                                                'flex w-full items-center justify-between py-3.5',\r
                                                item.id === activeAccordionId && 'cursor-default'\r
                                            )}\r
                                        >\r
                                            <h3 className='text-left text-lg text-zinc-950 dark:text-zinc-50'>\r
                                                {item.title}\r
                                            </h3>\r
                                            <ChevronUp className='size-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />\r
                                        </AccordionTrigger>\r
\r
                                        <AccordionContent>\r
                                            <p className='pb-6 text-left text-zinc-500 dark:text-zinc-400 lg:pb-8'>\r
                                                {item.content}\r
                                            </p>\r
\r
                                            <div className='pb-8 lg:hidden'>\r
                                                <img className='h-64 w-full object-cover' src={item.image} alt={item.title} />\r
                                            </div>\r
                                        </AccordionContent>\r
                                    </AccordionItem>\r
                                )\r
                            )}\r
                        </Accordion>\r
                    </div>\r
\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [ // images from https://www.cosmos.so/e/1861677771\r
    {\r
        id: 'item1',\r
        title: 'Text-to-image generation',\r
        content: 'Transform your ideas into stunning visuals with our advanced text-to-image AI. Simply describe what you want, and watch as our algorithm brings your imagination to life in high-resolution images.',\r
        image: 'https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg',\r
    }, {\r
        id: 'item2',\r
        title: 'Style transfer & customization',\r
        content: 'Apply and blend various artistic styles to your generated images. From renaissance to modern art, our AI can adapt your creations.',\r
        image: 'https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg',\r
    }, {\r
        id: 'item3',\r
        title: 'Infinite resolution scaling',\r
        content: 'Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail, ensuring your creations always look crisp and professional.',\r
        image: 'https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg',\r
    },\r
];\r
`,uuid:39},{fullname:"../../samples/Feature Sections/2.tsx",component:Jf,fileCnt:`'use client';\r
import { useState } from 'react'; // images from https://www.cosmos.so/e/1861677771\r
import { cn } from "@/utils";\r
\r
export function Feature2() {\r
    const [activeAccordionId, setActiveAccordionId] = useState<string>(FEATURES[0].id);\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
\r
                <div className='flex flex-col lg:grid lg:grid-cols-2'>\r
                    <div className='p-0 sm:p-8 lg:p-16'>\r
\r
                        <div className='mb-12 text-left'>\r
                            <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>\r
                                Let AI generate your next product\r
                            </h2>\r
                            <p className='text-lg text-zinc-500 dark:text-zinc-400'>\r
                                Easy generate videos, images, and more with our model.\r
                            </p>\r
                        </div>\r
\r
                        <div className='flex flex-col space-y-2'>\r
                            {FEATURES.map(\r
                                (item) => (\r
                                    <button\r
                                        className={cn('w-full rounded-lg p-3', activeAccordionId === item.id && 'bg-zinc-100 dark:bg-zinc-800')}\r
                                        type='button'\r
                                        key={item.id}\r
                                        onClick={() => setActiveAccordionId(item.id)}\r
                                    >\r
                                        <h3 className='text-left text-lg text-zinc-950 dark:text-zinc-50'>\r
                                            {item.title}\r
                                        </h3>\r
\r
                                        <p className='text-left text-zinc-500 dark:text-zinc-400'>\r
                                            {item.content}\r
                                        </p>\r
                                    </button>\r
                                )\r
                            )}\r
                        </div>\r
                    </div>\r
\r
                    <div className='relative h-auto lg:block'>\r
                        <img\r
                            className='aspect-square h-full w-full object-cover'\r
                            src={FEATURES.find((item) => item.id === activeAccordionId)?.image}\r
                            alt='Accordion Image'\r
                            key={activeAccordionId}\r
                        />\r
                        <div className='absolute inset-0 bg-black opacity-20' />\r
                    </div>\r
                </div>\r
                \r
            </div>\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        id: 'item1',\r
        title: 'Text-to-image generation',\r
        content: 'Transform your ideas into stunning visuals with our advanced text-to-image AI.',\r
        image: 'https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg',\r
    }, {\r
        id: 'item2',\r
        title: 'Style transfer & customization',\r
        content: 'Apply and blend various artistic styles to your generated images.',\r
        image: 'https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg',\r
    }, {\r
        id: 'item3',\r
        title: 'Infinite resolution scaling',\r
        content: 'Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail.',\r
        image: 'https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg',\r
    },\r
];\r
`,uuid:40},{fullname:"../../samples/Feature Sections/3.tsx",component:ex,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { Carousel, CarouselContent, CarouselItem, } from "@/components/motion-ui/carousel";\r
import { Link } from "@/ui";\r
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';\r
\r
export function Feature3() {\r
    const [index, setIndex] = useState(0);\r
    return (\r
        <div className='py-24 sm:py-32'>\r
\r
            <div className='container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12'>\r
                <h2 className='text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl'>\r
                    Visualize your ideas instantly\r
                </h2>\r
            </div>\r
\r
            <Carousel className='pl-[max(16px,calc((100%-1024px)/2+16px))]' index={index} onIndexChange={setIndex} disableDrag>\r
                <CarouselContent className='-ml-2 md:-ml-8' transition={{ type: 'spring', stiffness: 26.7, damping: 4.1, mass: 0.2, }}>\r
                    {FEATURES.map(\r
                        (feature, index) => (\r
                            <CarouselItem key={index} className='basis-1/4 pl-2 md:pl-8'>\r
                                <Link href='#' className='relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md'>\r
                                    <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />\r
                                    \r
                                    <div className='absolute inset-0 bg-black opacity-50'></div>\r
                                    <div className='absolute left-0 right-0 top-0 p-4 text-white'>\r
                                        <p className='mb-0.5 text-xs'>{feature.description}</p>\r
                                        <h3 className='text-base'>{feature.title}</h3>\r
                                    </div>\r
                                </Link>\r
                            </CarouselItem>\r
                        )\r
                    )}\r
                </CarouselContent>\r
            </Carousel>\r
\r
            <div className='container mx-auto mt-6 flex max-w-screen-lg items-end justify-end px-4'>\r
                <div className='flex gap-4'>\r
                    <button\r
                        className='flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40'\r
                        type='button'\r
                        aria-label='Previous slide'\r
                        disabled={index === 0}\r
                        onClick={() => setIndex(index - 1)}\r
                    >\r
                        <ChevronLeftIcon className='h-5 w-5' />\r
                    </button>\r
                    <button\r
                        className='flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40'\r
                        type='button'\r
                        aria-label='Next slide'\r
                        disabled={index === 5}\r
                        onClick={() => setIndex(index + 1)}\r
                    >\r
                        <ChevronRightIcon className='h-5 w-5' />\r
                    </button>\r
                </div>\r
            </div>\r
\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        title: 'Feature 1',\r
        description: 'Description 1',\r
        image: 'https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg',\r
    }, {\r
        title: 'Feature 2',\r
        description: 'Description 2',\r
        image: 'https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg',\r
    }, {\r
        title: 'Feature 3',\r
        description: 'Description 3',\r
        image: 'https://images.beta.cosmos.so/53d4f8cd-abb4-4296-a411-14789cc00733?format=jpeg',\r
    }, {\r
        title: 'Feature 4',\r
        description: 'Description 4',\r
        image: 'https://images.beta.cosmos.so/2d3f5268-da08-4e48-abd9-6b003e419d2b.?format=jpeg',\r
    }, {\r
        title: 'Feature 5',\r
        description: 'Description 5',\r
        image: 'https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg',\r
    }, {\r
        title: 'Feature 6',\r
        description: 'Description 6',\r
        image: 'https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg',\r
    },\r
];\r
`,uuid:41},{fullname:"../../samples/Feature Sections/4.tsx",component:nx,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { Carousel, CarouselContent, CarouselItem, } from "@/components/motion-ui/carousel";\r
import { Link } from "@/ui";\r
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';\r
\r
export function Feature4() {\r
    const [index, setIndex] = useState(0);\r
    return (\r
        <div className='py-24 sm:py-32'>\r
\r
            <div className='container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12'>\r
                <h2 className='mb-4 text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl'>\r
                    Visualize your ideas instantly\r
                </h2>\r
\r
                <div className='flex space-x-2'>\r
                    <button\r
                        type='button'\r
                        className='flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30'\r
                        aria-label='Previous slide'\r
                        disabled={index === 0}\r
                        onClick={() => setIndex(index - 1)}\r
                    >\r
                        <ChevronLeftIcon className='h-5 w-5' />\r
                    </button>\r
                    <button\r
                        type='button'\r
                        className='flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30'\r
                        aria-label='Next slide'\r
                        disabled={index === 5}\r
                        onClick={() => setIndex(index + 1)}\r
                    >\r
                        <ChevronRightIcon className='h-5 w-5' />\r
                    </button>\r
                </div>\r
            </div>\r
\r
            <Carousel index={index} onIndexChange={setIndex} disableDrag>\r
                <CarouselContent className='-ml-2 pl-[max(16px,calc((100%-1024px)/2+16px))] md:-ml-5'>\r
                    {FEATURES.map(\r
                        (feature, index) => (\r
                        <CarouselItem className='basis-1/2 pl-2 md:basis-[22%] md:pl-5' key={index}>\r
                            <Link href='#' className='relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md'>\r
                                <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />\r
                                \r
                                <div className='absolute inset-0 bg-black opacity-50'></div>\r
                                <div className='absolute inset-0 flex flex-col justify-between p-4 text-white'>\r
                                    <p className='text-xs'>New top text</p>\r
                                    <p className='text-base'>New bottom text</p>\r
                                </div>\r
                            </Link>\r
                        </CarouselItem>\r
                    )\r
                    )}\r
                </CarouselContent>\r
            </Carousel>\r
\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        title: 'Feature 1',\r
        description: 'Description 1',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        title: 'Feature 2',\r
        description: 'Description 2',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    }, {\r
        title: 'Feature 3',\r
        description: 'Description 3',\r
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',\r
    }, {\r
        title: 'Feature 4',\r
        description: 'Description 4',\r
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',\r
    }, {\r
        title: 'Feature 5',\r
        description: 'Description 5',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        title: 'Feature 6',\r
        description: 'Description 6',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    },\r
];\r
`,uuid:42},{fullname:"../../samples/Feature Sections/5.tsx",component:sx,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { Carousel, CarouselContent, CarouselItem, } from "@/components/motion-ui/carousel";\r
import { AnimatedBackground } from "@/components/motion-ui/animated-background";\r
\r
export function Feature5() {\r
    const [activeIndex, setActiveIndex] = useState(0);\r
    const [activeFeature, setActiveFeature] = useState(FEATURES[0].tab);\r
\r
    const handleFeatureChange = (newActiveId: string) => {\r
        setActiveFeature(newActiveId);\r
        const newIndex = FEATURES.findIndex((feature) => feature.tab === newActiveId);\r
        if (newIndex !== -1) {\r
            setActiveIndex(newIndex);\r
        }\r
    };\r
\r
    return (\r
        <div className='py-24 sm:py-32'>\r
\r
            <div className='mx-auto mb-12 max-w-7xl px-6 text-center lg:px-8'>\r
                <h2 className='text-3xl text-zinc-900 dark:text-white sm:text-4xl'>\r
                    Visualize your ideas instantly\r
                </h2>\r
            </div>\r
\r
            <div className='relative w-full overflow-hidden'>\r
                <div>\r
                    <Carousel index={activeIndex} onIndexChange={setActiveIndex} disableDrag>\r
\r
                        <CarouselContent className='ml-0 md:ml-[calc((100%-64rem)/2)]'>\r
                            {FEATURES.map((feature, idx) => (\r
                                <CarouselItem\r
                                    key={idx}\r
                                    className='basis-[52%] px-4 pl-0 md:px-0 md:pl-4'\r
                                >\r
                                    <div className='relative flex h-[200px] items-center justify-center overflow-hidden rounded-md md:h-[400px]'>\r
                                        <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />\r
\r
                                        <div className='absolute inset-0 bg-black opacity-50'></div>\r
                                        <div className='absolute inset-0 flex flex-col justify-between p-4 text-white'>\r
                                            <p className='text-xs sm:text-sm'>{feature.title}</p>\r
                                            <p className='text-sm sm:text-base'>{feature.description}</p>\r
                                        </div>\r
                                    </div>\r
                                </CarouselItem>\r
                            ))}\r
                        </CarouselContent>\r
\r
                        <div className='mx-auto mb-12 max-w-7xl overflow-x-auto px-6 text-center [scrollbar-width:none] lg:px-8'>\r
                            <div className='mt-6 flex min-w-max items-center justify-center sm:mt-10'>\r
                                <div className='z-0 flex flex-wrap justify-center space-x-2 rounded-full bg-zinc-200 px-2 py-2 dark:bg-zinc-800'>\r
\r
                                    <AnimatedBackground\r
                                        className='whitespace-nowrap rounded-full bg-zinc-900'\r
                                        transition={{ ease: 'easeInOut', duration: 0.2, }}\r
                                        defaultValue={activeFeature}\r
                                        onValueChange={(newActiveId) => { handleFeatureChange(newActiveId as string); }}\r
                                    >\r
                                        {FEATURES.map(\r
                                            (feature, index) => (\r
                                                <button\r
                                                    className='px-2 py-1 text-xs text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-zinc-100 dark:text-zinc-200 sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:text-base'\r
                                                    data-id={feature.tab}\r
                                                    type='button'\r
                                                    key={index}\r
                                                >\r
                                                    {feature.tab}\r
                                                </button>\r
                                            )\r
                                        )}\r
                                    </AnimatedBackground>\r
\r
                                </div>\r
                            </div>\r
                        </div>\r
\r
                    </Carousel>\r
                </div>\r
            </div>\r
\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        tab: 'Feature 1',\r
        title: 'Feature 1',\r
        description: 'Description 1',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        tab: 'Feature 2',\r
        title: 'Feature 2',\r
        description: 'Description 2',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    }, {\r
        tab: 'Feature 3',\r
        title: 'Feature 3',\r
        description: 'Description 3',\r
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',\r
    }, {\r
        tab: 'Feature 4',\r
        title: 'Feature 4',\r
        description: 'Description 4',\r
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',\r
    }, {\r
        tab: 'Feature 5',\r
        title: 'Feature 5',\r
        description: 'Description 5',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        tab: 'Feature 6',\r
        title: 'Feature 6',\r
        description: 'Description 6',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    },\r
];\r
`,uuid:43},{fullname:"../../samples/Feature Sections/6.tsx",component:ix,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { Carousel, CarouselContent, CarouselItem, } from "@/components/motion-ui/carousel";\r
import { cn } from "@/utils";\r
\r
export function Feature6() {\r
    const [carouselIndex, setCarouselIndex] = useState(0);\r
    return (\r
        <div className='overflow-auto py-24 sm:overflow-hidden sm:py-32'>\r
\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <h2 className='mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl'>\r
                    Visualize your ideas instantly\r
                </h2>\r
                <div className='mb-8 overflow-x-auto [scrollbar-width:none]'>\r
                    <div className='flex min-w-max items-center justify-center space-x-4'>\r
                        {FEATURES.map(\r
                            (feature, index) => {\r
                                return (\r
                                    <button\r
                                        className={cn(\r
                                            'relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base',\r
                                            index === carouselIndex ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900' : ''\r
                                        )}\r
                                        key={index}\r
                                        type='button'\r
                                        onClick={() => setCarouselIndex(index)}\r
                                    >\r
                                        {feature.title}\r
                                    </button>\r
                                );\r
                            }\r
                        )}\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <Carousel index={carouselIndex} onIndexChange={setCarouselIndex} disableDrag>\r
                <CarouselContent className='w-full md:-ml-5' transition={{ ease: [0.77, 0, 0.175, 1], duration: 1, }}>\r
                    {FEATURES.map(\r
                        (feature, index) => (\r
                            <CarouselItem className='flex items-center justify-center px-2' key={index}>\r
                                <div className='relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md'>\r
                                    <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />\r
\r
                                    <div className='absolute inset-0 bg-black opacity-50'></div>\r
                                    <div className='absolute left-0 right-0 top-0 p-4 text-white'>\r
                                        <p className='mb-0.5 text-xs'>{feature.description}</p>\r
                                        <h3 className='text-base'>{feature.title}</h3>\r
                                    </div>\r
                                </div>\r
                            </CarouselItem>\r
                        )\r
                    )}\r
                </CarouselContent>\r
            </Carousel>\r
            \r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        title: 'Feature 1',\r
        description: 'Description 1',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        title: 'Feature 2',\r
        description: 'Description 2',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    }, {\r
        title: 'Feature 3',\r
        description: 'Description 3',\r
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',\r
    }, {\r
        title: 'Feature 4',\r
        description: 'Description 4',\r
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',\r
    }, {\r
        title: 'Feature 5',\r
        description: 'Description 5',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        title: 'Feature 6',\r
        description: 'Description 6',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    },\r
];\r
`,uuid:44},{fullname:"../../samples/Feature Sections/7.tsx",component:ox,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { TransitionPanel } from "@/components/motion-ui/transition-panel";\r
import { cn } from "@/utils";\r
\r
export function Feature7() {\r
    const [activeIndex, setActiveIndex] = useState(0);\r
    const [direction, setDirection] = useState(1);\r
    return (\r
        <div className='overflow-auto py-24 sm:overflow-hidden sm:py-32'>\r
\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <h2 className='mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl'>\r
                    Visualize your ideas instantly\r
                </h2>\r
                \r
                <div className='mb-8 overflow-x-auto [scrollbar-width:none]'>\r
                    <div className='flex min-w-max items-center justify-center space-x-4'>\r
                        {FEATURES.map(\r
                            (feature, index) => {\r
                                return (\r
                                    <button\r
                                        className={cn(\r
                                            'relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base',\r
                                            index === activeIndex\r
                                                ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'\r
                                                : ''\r
                                        )}\r
                                        key={index}\r
                                        type='button'\r
                                        onClick={() => { setActiveIndex(index); setDirection(index > activeIndex ? 1 : -1); }}\r
                                    >\r
                                        {feature.title}\r
                                    </button>\r
                                );\r
                            }\r
                        )}\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div className='flex justify-center'>\r
                <TransitionPanel\r
                    className='aspect-video w-[800px] overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800'\r
                    activeIndex={activeIndex}\r
                    custom={direction}\r
                    variants={{\r
                        enter: (direction) => ({ opacity: 0.8, x: direction > 0 ? 32 : -32, }),\r
                        center: { opacity: 1, x: 0, },\r
                        exit: (direction) => ({ opacity: 0.8, x: direction < 0 ? 32 : -32, }),\r
                    }}\r
                    transition={{ ease: 'easeOut', duration: 0.3, }}\r
                >\r
                    {FEATURES.map(\r
                        (feature) => (\r
                            <div className='relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md' key={feature.title}>\r
                                <img className='pointer-events-none h-full w-full object-cover' src={feature.image} alt={feature.title} />\r
                            </div>\r
                        )\r
                    )}\r
                </TransitionPanel>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        title: 'Feature 1',\r
        description: 'Description 1',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        title: 'Feature 2',\r
        description: 'Description 2',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    }, {\r
        title: 'Feature 3',\r
        description: 'Description 3',\r
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',\r
    }, {\r
        title: 'Feature 4',\r
        description: 'Description 4',\r
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',\r
    }, {\r
        title: 'Feature 5',\r
        description: 'Description 5',\r
        image: 'https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg',\r
    }, {\r
        title: 'Feature 6',\r
        description: 'Description 6',\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
    },\r
];\r
`,uuid:45},{fullname:"../../samples/Feature Sections/8.tsx",component:lx,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { AnimatedBackground } from "@/components/motion-ui/animated-background"; // images are from https://www.cosmos.so/ibelick/nocturne\r
\r
export function Feature8() {\r
    const [activeFeature, setActiveFeature] = useState<string>(FEATURES[0].tab);\r
    return (\r
        <div className='overflow-auto py-24 sm:overflow-hidden sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
\r
                <div className='mx-auto mb-12 max-w-lg text-center'>\r
                    <h2 className='text-3xl sm:text-4xl'>\r
                        A new way to build AI apps, for developers and designers.\r
                    </h2>\r
                </div>\r
\r
                <div className='mb-8 overflow-x-auto [scrollbar-width:none]'>\r
                    <div className='flex min-w-max items-center justify-center space-x-2'>\r
                        <AnimatedBackground\r
                            className='whitespace-nowrap rounded-full bg-zinc-200 dark:bg-zinc-800'\r
                            transition={{ ease: 'easeInOut', duration: 0.2, }}\r
                            defaultValue={activeFeature}\r
                            onValueChange={(newActiveId) => { setActiveFeature(newActiveId as string); }}\r
                        >\r
                            {FEATURES.map(\r
                                (feature, index) => (\r
                                    <button\r
                                        className='px-3 py-1.5 text-sm text-zinc-900 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-50 sm:px-4 sm:text-base'\r
                                        data-id={feature.tab}\r
                                        type='button'\r
                                        key={index}\r
                                    >\r
                                        {feature.tab}\r
                                    </button>\r
                                )\r
                            )}\r
                        </AnimatedBackground>\r
                    </div>\r
                </div>\r
\r
                {FEATURES.find((feature) => feature.tab === activeFeature)?.content}\r
\r
            </div>\r
        </div>\r
    );\r
}\r
\r
function FeatureImg({ src, alt }: { src: string; alt: string; }) {\r
    return (\r
        <img className='aspect-square h-[400px] w-full rounded-2xl bg-blue-200/50 object-cover' src={src} alt={alt} />\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        tab: 'Design',\r
        content: (<FeatureImg key='design' src='https://cdn.cosmos.so/8bb8b6e6-1658-4c42-bc5d-e8d17394bb01?format=jpeg' alt='Design' />),\r
    }, {\r
        tab: 'Engineering',\r
        content: (<FeatureImg key='engineering' src='https://cdn.cosmos.so/c50a75a4-b145-4044-9406-c89d5c326382?format=jpeg' alt='Engineering' />),\r
    }, {\r
        tab: 'AI',\r
        content: (<FeatureImg key='ai' src='https://cdn.cosmos.so/1437d5d6-52e0-465e-9dfd-c92352d7507e?format=jpeg' alt='AI' />),\r
    }, {\r
        tab: 'Marketing',\r
        content: (<FeatureImg key='marketing' src='https://cdn.cosmos.so/ed170ddf-b6f3-4865-a38e-1304c5197eeb?format=jpeg' alt='Marketing' />),\r
    }, {\r
        tab: 'Analytics',\r
        content: (<FeatureImg key='analytics' src='https://cdn.cosmos.so/6b1ae75e-af71-4349-8a24-a2f7945b371f?format=jpeg' alt='Analytics' />),\r
    },\r
];\r
`,uuid:46},{fullname:"../../samples/Feature Sections/9.tsx",component:cx,fileCnt:`'use client';\r
import { useRef } from 'react';\r
import { motion, useScroll, useTransform } from 'motion/react'; // image from https://www.cosmos.so/e/1909697047\r
import { PlayIcon } from 'lucide-react';\r
\r
export function Feature9() {\r
    const containerRef = useRef(null);\r
\r
    const { scrollYProgress } = useScroll({\r
        target: containerRef,\r
        offset: ['start end', 'end start'],\r
    });\r
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);\r
\r
    return (\r
        <div className='relative min-h-[200vh]' ref={containerRef}>\r
\r
            <div className='h-screen py-24 sm:py-32'>\r
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                    <div className='flex flex-col items-center justify-center'>\r
                        <p className='text-sm text-zinc-500'>\r
                            Scroll down\r
                        </p>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                \r
                <div className='mb-12 text-center'>\r
                    <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>\r
                        Let AI generate your next product\r
                    </h2>\r
                    <p className='text-lg text-zinc-500 dark:text-zinc-400'>\r
                        Easy generate videos, images, and more with our model.\r
                    </p>\r
                </div>\r
\r
                <motion.div className='aspect-video w-full origin-top overflow-hidden rounded-3xl' style={{ scale }}>\r
                    <div className='relative aspect-video w-full'>\r
                        <div className='absolute inset-0 bg-zinc-950/80' />\r
\r
                        <button className='absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full transition-colors hover:bg-zinc-950/80'>\r
                            <PlayIcon className='h-8 w-8 text-white' />\r
                        </button>\r
\r
                        <img\r
                            className='aspect-video w-full object-cover'\r
                            src='https://images.beta.cosmos.so/75a0de47-2136-4c2b-b1e8-3e31a0ac2b5a?format=jpeg'\r
                            alt='Mountains'\r
                        />\r
                    </div>\r
                </motion.div>\r
            </div>\r
\r
        </div>\r
    );\r
}\r
`,uuid:47},{fullname:"../../samples/Feature Sections/10.tsx",component:dx,fileCnt:`'use client';\r
\r
export function Feature10() {\r
    return (\r
        <div className='bg-white py-24 dark:bg-black sm:py-32'>\r
            <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>\r
\r
                <div className='relative flex flex-col space-y-32'>\r
                    {FEATURES.map(\r
                        (feature, index) => (\r
                            <div className='\r
                                relative \r
                                top-24 sm:top-32 \r
                                h-auto lg:sticky lg:h-[calc(400px+9rem)]\r
                                bg-white dark:bg-black \r
                                grid  grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32\r
                                ' key={index}\r
                            >\r
                                <div className='py-16 text-base text-zinc-900 dark:text-white lg:text-lg'>\r
                                    {feature.text}\r
                                </div>\r
\r
                                <div className='h-[300px] w-full lg:h-[400px]'>\r
                                    <img className='h-full w-full rounded-lg object-cover' src={feature.image} alt={\`Feature \${index + 1}\`} />\r
                                </div>\r
                            </div>\r
                        )\r
                    )}\r
                </div>\r
\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        image: 'https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg',\r
        text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',\r
    }, {\r
        image: 'https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg',\r
        text: 'Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets.',\r
    }, {\r
        image: 'https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg',\r
        text: 'Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries.',\r
    }, {\r
        image: 'https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg',\r
        text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',\r
    },\r
];\r
`,uuid:48},{fullname:"../../samples/Feature Sections/11.tsx",component:mx,fileCnt:`'use client';\r
import { useRef } from 'react';\r
import { motion, useScroll, useTransform } from 'motion/react'; // images from https://www.cosmos.so/e/469400162\r
\r
export function Feature11() {\r
    const containerRef = useRef<HTMLDivElement>(null);\r
\r
    const { scrollYProgress } = useScroll({\r
        target: containerRef,\r
        offset: ['start start', 'end end'],\r
    });\r
\r
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [3, 2.5, 1]);\r
    const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);\r
    const maskOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [0.5, 0.5, 0]);\r
\r
    return (\r
        <div ref={containerRef} className='w-full'>\r
\r
            <div className='py-24 sm:py-32'>\r
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                    <div className='flex flex-col items-center justify-center'>\r
                        <p className='text-sm text-zinc-500'>\r
                            Scroll down\r
                        </p>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div className='flex h-[200vh] w-full flex-col items-center justify-start overflow-clip'>\r
                <motion.div\r
                    className='absolute z-10 flex h-screen flex-col items-center justify-center text-center text-5xl font-medium text-white'\r
                    style={{ opacity: textOpacity }}\r
                >\r
                    <h1>AI-generated visuals at your fingertips.</h1>\r
                    <p>Experience the future of imagery.</p>\r
                </motion.div>\r
\r
                <div className='sticky top-0 flex h-screen w-full items-center justify-center'>\r
                    <div className='relative'>\r
                        <motion.img\r
                            className='aspect-video w-full max-w-[400px] object-cover'\r
                            style={{ scale, }}\r
                            src='https://images.beta.cosmos.so/a7a791ac-d24a-43b9-a653-67a8557bec3f?format=jpeg'\r
                        />\r
\r
                        <motion.div\r
                            className='absolute inset-0 h-full w-full bg-black'\r
                            style={{ opacity: maskOpacity, scale }}\r
                        />\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div className='h-screen bg-transparent' />\r
        </div>\r
    );\r
}\r
`,uuid:49},{fullname:"../../samples/Feature Sections/12.tsx",component:px,fileCnt:`'use client';\r
import { useState, useEffect, useRef } from 'react';\r
import { motion, AnimatePresence, useScroll } from 'motion/react';\r
\r
export function Feature12() {\r
    const [activeIndex, setActiveIndex] = useState(0);\r
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');\r
    const containerRef = useRef(null);\r
\r
    const { scrollY } = useScroll({ target: containerRef });\r
\r
    useEffect(\r
        () => {\r
            let lastScrollY = 0;\r
            const unsubscribe = scrollY.on('change',\r
                (latest) => {\r
                    const sectionHeight = window.innerHeight;\r
                    const newIndex = Math.floor(latest / sectionHeight) % FEATURES.length;\r
\r
                    setScrollDirection(latest > lastScrollY ? 'down' : 'up');\r
                    lastScrollY = latest;\r
\r
                    setActiveIndex(newIndex);\r
                }\r
            );\r
            return () => unsubscribe();\r
        }, [scrollY]\r
    );\r
\r
    return (\r
        <div\r
            className='relative h-[var(--section-height)]'\r
            style={{ '--section-height': \`\${FEATURES.length * 100}vh\`, } as React.CSSProperties}\r
        >\r
            <div className='sticky top-0 flex h-screen items-center justify-center'>\r
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
\r
                    <div ref={containerRef} className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32'>\r
\r
                        <AnimatePresence mode='wait'>\r
                            <motion.div\r
                                className='h-[300px] w-full md:h-[400px] lg:h-[500px]'\r
                                initial={{ opacity: 0, y: scrollDirection === 'down' ? 20 : -20 }}\r
                                animate={{ opacity: 1, y: 0 }}\r
                                exit={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}\r
                                transition={{ duration: 0.15 }}\r
                                key={activeIndex}\r
                            >\r
                                <img\r
                                    className='h-full w-full rounded-lg object-cover'\r
                                    src={FEATURES[activeIndex].image}\r
                                    alt='Feature'\r
                                />\r
                            </motion.div>\r
                        </AnimatePresence>\r
\r
                        <AnimatePresence mode='wait'>\r
                            <motion.div\r
                                className='flex items-center justify-center'\r
                                initial={{ opacity: 0, y: scrollDirection === 'down' ? 20 : -20 }}\r
                                animate={{ opacity: 1, y: 0 }}\r
                                exit={{ opacity: 0, y: scrollDirection === 'down' ? -20 : 20 }}\r
                                transition={{ duration: 0.15, delay: 0.1 }}\r
                                key={activeIndex}\r
                            >\r
                                <div className='text-sm font-medium text-zinc-900 dark:text-white md:text-base lg:text-lg'>\r
                                    {FEATURES[activeIndex].text}\r
                                </div>\r
                            </motion.div>\r
                        </AnimatePresence>\r
\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        image: 'https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg',\r
        text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',\r
    }, {\r
        image: 'https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg',\r
        text: 'Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets.',\r
    }, {\r
        image: 'https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg',\r
        text: 'Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries.',\r
    },\r
];\r
`,uuid:50},{fullname:"../../samples/Feature Sections/13.tsx",component:fx,fileCnt:`'use client';\r
import { useState, useEffect, useRef } from 'react';\r
import { motion, AnimatePresence, useScroll } from 'motion/react';\r
\r
export function Feature13() {\r
    const containerRef = useRef(null);\r
    const [activeIndex, setActiveIndex] = useState(0);\r
\r
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'], });\r
\r
    useEffect(\r
        () => {\r
            const unsubscribe = scrollYProgress.on('change',\r
                (latest) => {\r
                    const newIndex = Math.floor(latest * FEATURES.length);\r
                    setActiveIndex(Math.min(Math.max(newIndex, 0), FEATURES.length - 1));\r
                }\r
            );\r
            return () => unsubscribe();\r
        }, [scrollYProgress]\r
    );\r
\r
    return (\r
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>\r
\r
            {/* Mobile layout */}\r
            <div className='md:hidden'>\r
                <div className='h-screen snap-y snap-mandatory overflow-y-auto py-24 sm:py-32'>\r
                    {FEATURES.map(\r
                        (feature, index) => (\r
                            <div className='mb-12 flex min-h-screen snap-center items-center' key={index}>\r
                                <div className='w-full'>\r
                                    <div className='mb-4 h-[200px] w-full'>\r
                                        <img\r
                                            className='h-full w-full rounded-lg object-cover'\r
                                            src={feature.image}\r
                                            alt={\`Feature \${index + 1}\`}\r
                                        />\r
                                    </div>\r
                                    <div className='text-sm font-medium text-zinc-900 dark:text-white'>\r
                                        {feature.text}\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        )\r
                    )}\r
                </div>\r
            </div>\r
\r
            {/* Desktop layout */}\r
            <div ref={containerRef} className='relative hidden grid-cols-1 gap-8 md:grid md:h-[300vh] md:grid-cols-2 md:gap-16 lg:gap-32'>\r
                <div className='w-full py-16'>\r
                    {FEATURES.map(\r
                        (feature, index) => (\r
                            <div className='flex h-screen items-center justify-center' key={index}>\r
                                <div className='text-base text-zinc-900 dark:text-white lg:text-lg'>\r
                                    {feature.text}\r
                                </div>\r
                            </div>\r
                        )\r
                    )}\r
                </div>\r
                <div className='sticky top-0 flex h-screen w-full items-center justify-center'>\r
                    <AnimatePresence mode='wait'>\r
                        <motion.div\r
                            className='h-[300px] w-full lg:h-[400px]'\r
                            initial={{ opacity: 0.6 }}\r
                            animate={{ opacity: 1 }}\r
                            exit={{ opacity: 0.6 }}\r
                            transition={{ duration: 0.15 }}\r
                            key={activeIndex}\r
                        >\r
                            <img\r
                                className='h-full w-full rounded-lg object-cover'\r
                                src={FEATURES[activeIndex]?.image}\r
                                alt='Feature'\r
                            />\r
                        </motion.div>\r
                    </AnimatePresence>\r
                </div>\r
            </div>\r
\r
        </div>\r
    );\r
}\r
\r
const FEATURES = [\r
    {\r
        image:\r
            'https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg',\r
        text: 'Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation.',\r
    }, {\r
        image:\r
            'https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg',\r
        text: 'Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets.',\r
    }, {\r
        image:\r
            'https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg',\r
        text: 'Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries.',\r
    },\r
];\r
`,uuid:51}],Footers:[{fullname:"../../samples/Footers/1.tsx",component:xx,fileCnt:`import { TextEffect } from "@/components/motion-ui/text-effect";\r
import GitHubIcon from "@/components/motion-ui-demo-icons/github";\r
import XIcon from '@/components/motion-ui-demo-icons/x';\r
\r
export function Footer1() {\r
    return (\r
        <footer>\r
            <div className='mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8'>\r
\r
                <TextEffect className='text-sm text-zinc-500'>\r
                    {\`� \${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.\`}\r
                </TextEffect>\r
\r
                <div className='order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0'>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <GitHubIcon className='size-4' />\r
                    </a>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <XIcon className='size-4' />\r
                    </a>\r
                </div>\r
                \r
            </div>\r
        </footer>\r
    );\r
}\r
`,uuid:52},{fullname:"../../samples/Footers/2.tsx",component:vx,fileCnt:`'use client';\r
import { TextScramble } from "@/components/motion-ui/text-scramble";\r
import GitHubIcon from '@/components/motion-ui-demo-icons/github';\r
import XIcon from '@/components/motion-ui-demo-icons/x';\r
import { useState } from 'react';\r
\r
export function Footer2() {\r
    const [trigger, setTrigger] = useState(true);\r
\r
    const handleScrambleComplete = () => {\r
        setTimeout(() => { setTrigger(true); }, 4000);\r
        setTrigger(false);\r
    };\r
\r
    return (\r
        <footer>\r
            <div className='mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8'>\r
\r
                <TextScramble\r
                    className='text-sm text-zinc-500'\r
                    as='p'\r
                    trigger={trigger}\r
                    onScrambleComplete={handleScrambleComplete}\r
                >\r
                    {\`� \${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.\`}\r
                </TextScramble>\r
\r
                <div className='order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0'>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <GitHubIcon className='size-4' />\r
                    </a>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <XIcon className='size-4' />\r
                    </a>\r
                </div>\r
                \r
            </div>\r
        </footer>\r
    );\r
}\r
`,uuid:53},{fullname:"../../samples/Footers/3.tsx",component:zx,fileCnt:`import GitHubIcon from "@/components/motion-ui-demo-icons/github";\r
import XIcon from "@/components/motion-ui-demo-icons/x";\r
import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
\r
export function Footer3() {\r
    return (\r
        <footer>\r
            <div className='mx-auto flex max-w-7xl flex-col justify-center px-6 pb-4 pt-12 md:flex-row md:justify-between md:px-8'>\r
\r
                <p className='text-sm text-zinc-500'>\r
                    � {new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.\r
                </p>\r
\r
                <div className='order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0'>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <GitHubIcon className='size-4' />\r
                    </a>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <XIcon className='size-4' />\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div className='overflow-hidden'>\r
                <InfiniteSlider className='-mb-14 text-9xl leading-[100%] text-black dark:text-white sm:text-[12rem]' gap={80}>\r
                    <div>\r
                        Motion Primitives\r
                    </div>\r
                </InfiniteSlider>\r
            </div>\r
        </footer>\r
    );\r
}\r
`,uuid:54},{fullname:"../../samples/Footers/4.tsx",component:Ax,fileCnt:`import { InfiniteSlider } from "@/components/motion-ui/infinite-slider";\r
import GitHubIcon from '@/components/motion-ui-demo-icons/github';\r
import XIcon from '@/components/motion-ui-demo-icons/x';\r
\r
export function Footer4() {\r
    return (\r
        <footer>\r
            <div className='mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8'>\r
                <p className='text-sm text-zinc-500'>\r
                    � {new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.\r
                </p>\r
\r
                <div className='order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0'>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <GitHubIcon className='size-4' />\r
                    </a>\r
                    <a href='#' className='fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100'>\r
                        <XIcon className='size-4' />\r
                    </a>\r
                </div>\r
            </div>\r
\r
            <div className='overflow-hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent)]'>\r
                <InfiniteSlider\r
                    className='-mb-14 whitespace-nowrap text-9xl leading-[100%] text-transparent [text-shadow:1px_1px_1px_rgba(255,255,255,.1),-1px_-1px_1px_rgba(0,0,0,.5),-40px_-40px_0px_rgba(0,0,0,0)] sm:text-[12rem]'\r
                    gap={80}\r
                    duration={60}\r
                >\r
                    <div>\r
                        Motion Primitives\r
                    </div>\r
                </InfiniteSlider>\r
            </div>\r
        </footer>\r
    );\r
}\r
`,uuid:55},{fullname:"../../samples/Footers/5.tsx",component:Cx,fileCnt:`export function Footer5() {\r
    // add overscroll-behavior:none to the body please\r
    return (\r
        <div>\r
            <div className='flex h-screen items-center justify-center'>\r
                <div className='text-sm'>\r
                    Scroll down\r
                </div>\r
            </div>\r
\r
            <div\r
                className='relative h-[--footer-height] [--footer-height:500px]'\r
                style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}\r
            >\r
                <div className='fixed bottom-0 h-[--footer-height] w-full'>\r
                    <div className='flex h-full w-full flex-col justify-between bg-zinc-800 px-12 py-8'>\r
                        <div className='flex shrink-0 gap-20'>\r
\r
                            <div className='flex flex-col gap-2'>\r
                                <h3 className='mb-2 text-zinc-400'>Product</h3>\r
                                <a href='#' className='text-white'>Features</a>\r
                                <a href='#' className='text-white'>Pricing</a>\r
                                <a href='#' className='text-white'>Integration</a>\r
                                <a href='#' className='text-white'>API Documentation</a>\r
                            </div>\r
\r
                            <div className='flex flex-col gap-2'>\r
                                <h3 className='mb-2 text-zinc-400'>Company</h3>\r
                                <a href='#' className='text-white'>About Us</a>\r
                                <a href='#' className='text-white'>Blog</a>\r
                                <a href='#' className='text-white'>Careers</a>\r
                                <a href='#' className='text-white'>Customer Stories</a>\r
                            </div>\r
\r
                            <div className='flex flex-col gap-2'>\r
                                <h3 className='mb-2 text-zinc-400'>Support</h3>\r
                                <a href='#' className='text-white'>Help Center</a>\r
                                <a href='#' className='text-white'>Status</a>\r
                                <a href='#' className='text-white'>Security</a>\r
                                <a href='#' className='text-white'>Terms of Service</a>\r
                            </div>\r
\r
                        </div>\r
\r
                        <p className='text-sm text-white'>\r
                            � {new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.\r
                        </p>\r
                    </div>\r
                    \r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
`,uuid:56}],"Heading Sections":[{fullname:"../../samples/Heading Sections/1.tsx",component:Tx,fileCnt:`import { TextLoop } from "@/components/motion-ui/text-loop";\r
\r
export function Heading1() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>\r
\r
                <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>\r
                    <span>\r
                        Build faster with beautiful\r
                    </span>\r
                    <br />\r
\r
                    <TextLoop\r
                        variants={{\r
                            initial: { filter: 'blur(5px)', opacity: 0 },\r
                            animate: { filter: 'blur(0)', opacity: 1 },\r
                            exit: { filter: 'blur(5px)', opacity: 0 },\r
                        }}\r
                        transition={{ duration: 0.4 }}\r
                        mode='wait'\r
                    >\r
                        {words.map(\r
                            (word) => (\r
                                <span key={word}>{word}</span>\r
                            )\r
                        )}\r
                    </TextLoop>\r
                </h2>\r
\r
                <p className='text-lg text-zinc-500 dark:text-zinc-400'>\r
                    Improve your development process with beautiful crafted UI.\r
                </p>\r
                \r
            </div>\r
        </div>\r
    );\r
}\r
\r
const words = ['components', 'templates', 'layouts', 'designs'];\r
`,uuid:57},{fullname:"../../samples/Heading Sections/2.tsx",component:Px,fileCnt:`import { TextLoop } from "@/components/motion-ui/text-loop";\r
\r
export function Heading2() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>\r
\r
                <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl' style={{ perspective: '1000px', }}>\r
                    <span>\r
                        Build faster with beautiful\r
                    </span>\r
                    <br />\r
\r
                    <TextLoop\r
                        variants={{\r
                            initial: { opacity: 0, rotateX: 90, filter: 'blur(4px)' },\r
                            animate: { opacity: 1, rotateX: 0, filter: 'blur(0px)' },\r
                            exit: { opacity: 0, rotateX: -90, filter: 'blur(4px)' },\r
                        }}\r
                        transition={{ duration: 0.4 }}\r
                        mode='wait'\r
                    >\r
                        {words.map(\r
                            (word) => (\r
                                <span key={word}>{word}</span>\r
                            )\r
                        )}\r
                    </TextLoop>\r
                </h2>\r
\r
                <p className='text-lg text-zinc-500 dark:text-zinc-400'>\r
                    Improve your development process with beautiful crafted UI.\r
                </p>\r
\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const words = ['components', 'templates', 'layouts', 'designs'];\r
`,uuid:58},{fullname:"../../samples/Heading Sections/3.tsx",component:Ex,fileCnt:`'use client';\r
import { motion, useScroll, useTransform } from 'motion/react';\r
import { useRef } from 'react';\r
\r
export function Heading3() {\r
    const ref = useRef(null);\r
\r
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'], });\r
\r
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);\r
    const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);\r
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);\r
\r
    return (\r
        <div className='relative min-h-[200vh]' ref={ref}>\r
\r
            <div className='h-screen py-24 sm:py-32'>\r
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                    <div className='flex flex-col items-center justify-center'>\r
                        <p className='text-sm text-zinc-500'>\r
                            Scroll down\r
                        </p>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div className='mx-auto flex max-w-md items-center justify-center px-6 text-center lg:px-8'>\r
                <motion.div style={{ opacity, y, scale, }}>\r
                    <h2 className='mb-3 text-xl text-zinc-500 sm:text-2xl'>\r
                        For builders\r
                    </h2>\r
\r
                    <p className='text-2xl text-zinc-900 dark:text-zinc-50 sm:text-3xl'>\r
                        A new way to get your products to the next level\r
                    </p>\r
                </motion.div>\r
            </div>\r
\r
        </div>\r
    );\r
}\r
`,uuid:59},{fullname:"../../samples/Heading Sections/4.tsx",component:Rx,fileCnt:`'use client';\r
import { TextRoll } from "@/components/motion-ui/text-roll";\r
\r
export function Heading4() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>\r
\r
                <h2 className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'>\r
                    <span>\r
                        AI-powered web templates\r
                    </span>\r
                    <br />\r
                    <span>for</span>{' '}\r
\r
                    <TextRoll\r
                        className='inline-flex overflow-clip leading-[0.75]'\r
                        variants={{\r
                            enter: { initial: { y: 0 }, animate: { y: 40 }, },\r
                            exit: { initial: { y: -40 }, animate: { y: 0 }, },\r
                        }}\r
                        duration={0.3}\r
                        getEnterDelay={(i) => i * 0.05}\r
                        getExitDelay={(i) => i * 0.05 + 0.05}\r
                        transition={{ ease: [0.175, 0.885, 0.32, 1.1], }}\r
                    >\r
                        founders\r
                    </TextRoll>\r
                </h2>\r
\r
                <p className='text-lg text-zinc-500 dark:text-zinc-400'>\r
                    Improve your development process with beautiful crafted UI.\r
                </p>\r
\r
            </div>\r
        </div>\r
    );\r
}\r
`,uuid:60},{fullname:"../../samples/Heading Sections/5.tsx",component:Dx,fileCnt:`'use client';\r
import { TextEffect } from "@/components/motion-ui/text-effect";\r
\r
export function Heading5() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>\r
\r
                <TextEffect\r
                    className='mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl'\r
                    per='char'\r
                    variants={{\r
                        item: {\r
                            hidden: { opacity: 0, scale: 1.6, filter: 'blur(4px)', },\r
                            visible: { opacity: 1, scale: 1, filter: 'blur(0px)', },\r
                        },\r
                    }}\r
                    speedReveal={1}\r
                    speedSegment={0.5}\r
                >\r
                    The best AI for your design\r
                </TextEffect>\r
\r
                <p className='text-lg text-zinc-500 dark:text-zinc-400'>\r
                    Improve your development process with beautiful crafted UI.\r
                </p>\r
\r
            </div>\r
        </div>\r
    );\r
}\r
`,uuid:61}],"Hero Sections":[{fullname:"../../samples/Hero Sections/1.tsx",component:Ox,fileCnt:`'use client';\r
import { motion } from 'motion/react';\r
import { TextEffect } from '@/components/motion-ui/text-effect';\r
import { ArrowRight } from 'lucide-react';\r
\r
const ENTRY_VARIANTS = {\r
    hidden: { opacity: 0, y: 10, filter: 'blur(10px)', },\r
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', },\r
};\r
\r
export function Hero1() {\r
    return (\r
        <div className='relative bg-white dark:bg-zinc-900'>\r
\r
            <header className='absolute inset-x-0 top-0 z-50'>\r
                <nav className='flex items-center justify-between p-6 lg:px-8'>\r
\r
                    <div className='flex lg:flex-1'>\r
                        <a href='/docs' className='relative flex items-center'>\r
                            <span className='sr-only'>\r
                                Motion Primitives Pro\r
                            </span>\r
                            <svg className='h-8 w-auto' width='70' height='70' viewBox='0 0 70 70' fill='none' role='img' aria-label='MP Logo'>\r
                                <path\r
                                    strokeWidth='3' stroke='currentColor' strokeLinecap='round'\r
                                    d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'\r
                                />\r
                            </svg>\r
                        </a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:gap-x-12'>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Product</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Features</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Marketplace</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Company</a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>\r
                        <a href='#' className='inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none'>\r
                            Log in <ArrowRight className='size-4' />\r
                        </a>\r
                    </div>\r
                </nav>\r
            </header>\r
\r
            <div className='relative isolate px-6 pt-14 lg:px-8'>\r
                <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>\r
\r
                    <div className='hidden sm:mb-8 sm:flex sm:justify-center'>\r
                        <motion.div\r
                            className='relative rounded-full px-3 py-1 text-sm/6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-1 dark:ring-zinc-100/20 dark:hover:ring-zinc-100/20'\r
                            variants={ENTRY_VARIANTS}\r
                            initial='hidden'\r
                            animate='visible'\r
                            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut', }}\r
                        >\r
                            Introducing a revolutionary way to build websites.{' '}\r
                            <a href='#' className='inline-flex items-center gap-1 font-semibold text-zinc-600 dark:text-zinc-400'>\r
                                <span className='absolute inset-0' aria-hidden='true'></span>\r
                                Learn more <ArrowRight className='size-4' />\r
                            </a>\r
                        </motion.div>\r
                    </div>\r
\r
                    <div className='text-center'>\r
                        <TextEffect\r
                            className='text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl'\r
                            preset='fade-in-blur'\r
                            as='h1'\r
                            per='char'\r
                            speedReveal={4}\r
                            segmentTransition={{ duration: 0.5, ease: 'easeOut' }}\r
                        >\r
                            Build your dream website fast and easily\r
                        </TextEffect>\r
\r
                        <TextEffect\r
                            className='mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-300 sm:text-lg/8'\r
                            preset='blur'\r
                            as='p'\r
                            per='line'\r
                            delay={0.5}\r
                            speedReveal={0.8}\r
                            segmentTransition={{ duration: 0.5, ease: 'easeOut' }}\r
                        >\r
                            Create stunning, professional websites with unparalleled ease. Leverage our intuitive tools and thoughtfully crafted components.\r
                        </TextEffect>\r
\r
                        <div className='mt-10 flex items-center justify-center gap-x-6'>\r
                            <motion.a\r
                                className='rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700'\r
                                variants={ENTRY_VARIANTS}\r
                                initial='hidden'\r
                                animate='visible'\r
                                transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut', }}\r
                                href='#'\r
                            >\r
                                Start building\r
                            </motion.a>\r
\r
                            <motion.a\r
                                className='inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200'\r
                                variants={ENTRY_VARIANTS}\r
                                initial='hidden'\r
                                animate='visible'\r
                                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut', }}\r
                                href='#'\r
                            >\r
                                Watch the film <ArrowRight className='size-4' />\r
                            </motion.a>\r
                        </div>\r
\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
`,uuid:62},{fullname:"../../samples/Hero Sections/2.tsx",component:Bx,fileCnt:`'use client';\r
import { useRef } from 'react';\r
import { motion, useScroll, useTransform } from 'motion/react';\r
import { useTheme } from 'next-themes';\r
import { ArrowRight, MoonIcon, SunIcon } from 'lucide-react';\r
\r
export function Hero2() {\r
    const theme = useTheme();\r
    const containerRef = useRef(null);\r
\r
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end end'], });\r
\r
    const rotateX = useTransform(scrollYProgress, [0.75, 1], [30, 0]);\r
\r
    return (\r
        <div ref={containerRef} className='relative bg-white dark:bg-zinc-900'>\r
\r
            <header className='absolute inset-x-0 top-0 z-50'>\r
                <nav className='flex items-center justify-between p-6 lg:px-8'>\r
\r
                    <div className='flex lg:flex-1'>\r
                        <a href='/docs' className='relative flex items-center'>\r
                            <span className='sr-only'>\r
                                Motion Primitives Pro\r
                            </span>\r
                            <svg className='h-8 w-auto' width='70' height='70' viewBox='0 0 70 70' fill='none' role='img' aria-label='MP Logo'>\r
                                <path\r
                                    strokeWidth='3' stroke='currentColor' strokeLinecap='round'\r
                                    d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'\r
                                />\r
                            </svg>\r
                        </a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:gap-x-12'>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Product</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Features</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Marketplace</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Company</a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>\r
                        <a href='#' className='inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none'>\r
                            Log in <ArrowRight className='size-4' />\r
                        </a>\r
                    </div>\r
                </nav>\r
            </header>\r
\r
            <div className='relative isolate px-6 pt-14 lg:px-8'>\r
                <div className='mx-auto max-w-2xl py-24 sm:py-32'>\r
\r
                    <div className='text-center'>\r
                        <h1 className='text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl'>\r
                            Build your dream website fast and easily\r
                        </h1>\r
                        <p className='mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8'>\r
                            Build beautiful websites effortlessly. Utilize our powerful tools to transform your ideas into reality in no time.\r
                        </p>\r
                        <div className='mt-10 flex items-center justify-center gap-x-6'>\r
                            <a href='#' className='rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600'>\r
                                Start building\r
                            </a>\r
                            <a href='#' className='inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200'>\r
                                Watch the film <ArrowRight className='size-4' />\r
                            </a>\r
                        </div>\r
                    </div>\r
\r
                    <div className='mt-16'>\r
                        <div className='mx-auto mt-4 max-w-screen-lg px-3 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] [perspective:1000px]'>\r
\r
                            <motion.div className='relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900' style={{ rotateX }}>\r
                                {/* <img src={theme.theme === 'dark' ? '/mp_dark.png' : '/mp_light.png'} alt='motion primitives' /> */}\r
                                {theme.theme === 'dark' ?\r
                                    <MoonIcon className='absolute top-4 right-4 z-10 text-foreground' /> :\r
                                    <SunIcon className='absolute top-4 right-4 z-10 text-foreground' />\r
                                }\r
                            </motion.div>\r
\r
                        </div>\r
                    </div>\r
\r
                </div>\r
            </div>\r
            \r
        </div>\r
    );\r
}\r
`,uuid:63},{fullname:"../../samples/Hero Sections/3.tsx",component:Ux,fileCnt:`'use client';\r
import { useTheme } from 'next-themes';\r
import { Tilt } from "@/components/motion-ui/tilt";\r
import { ArrowRight, MoonIcon, SunIcon } from 'lucide-react';\r
\r
export function Hero3() {\r
    const theme = useTheme();\r
    return (\r
        <div className='relative bg-white dark:bg-zinc-900'>\r
\r
            <header className='absolute inset-x-0 top-0 z-50'>\r
                <nav className='flex items-center justify-between p-6 lg:px-8'>\r
\r
                    <div className='flex lg:flex-1'>\r
                        <a href='/docs' className='relative flex items-center'>\r
                            <span className='sr-only'>\r
                                Motion Primitives Pro\r
                            </span>\r
                            <svg className='h-8 w-auto' width='70' height='70' viewBox='0 0 70 70' fill='none' role='img' aria-label='MP Logo'>\r
                                <path\r
                                    strokeWidth='3' stroke='currentColor' strokeLinecap='round'\r
                                    d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'\r
                                />\r
                            </svg>\r
                        </a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:gap-x-12'>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Product</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Features</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Marketplace</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Company</a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>\r
                        <a href='#' className='inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none'>\r
                            Log in <ArrowRight className='size-4' />\r
                        </a>\r
                    </div>\r
                </nav>\r
            </header>\r
\r
            <div className='relative isolate px-6 pt-14 lg:px-8'>\r
                <div className='mx-auto max-w-2xl py-24 sm:py-32'>\r
\r
                    <div className='text-center'>\r
                        <h1 className='text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl'>\r
                            Build your dream website fast and easily\r
                        </h1>\r
                        <p className='mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8'>\r
                            Build beautiful websites effortlessly. Utilize our powerful tools to transform your ideas into reality in no time.\r
                        </p>\r
                        <div className='mt-10 flex items-center justify-center gap-x-6'>\r
                            <a href='#' className='rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600'>\r
                                Start building\r
                            </a>\r
                            <a href='#' className='inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200'>\r
                                Watch the film <ArrowRight className='size-4' />\r
                            </a>\r
                        </div>\r
                    </div>\r
\r
                    <div className='mt-16'>\r
                        <Tilt\r
                            className='relative'\r
                            rotationFactor={6}\r
                            springOptions={{ stiffness: 150, damping: 19, mass: 1.2, }}\r
                            isRevese={true}\r
                        >\r
                            <div className='mx-auto mt-4 max-w-screen-lg px-3 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]'>\r
                                <div className='relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900'>\r
\r
                                    {/* <img src={theme.theme === 'dark' ? '/mp_dark.png' : '/mp_light.png'} alt='motion primitives' /> */}\r
                                    {theme.theme === 'dark' ?\r
                                        <MoonIcon className='absolute top-4 right-4 z-10 text-foreground' /> :\r
                                        <SunIcon className='absolute top-4 right-4 z-10 text-foreground' />\r
                                    }\r
                                </div>\r
                            </div>\r
                        </Tilt>\r
                    </div>\r
\r
                </div>\r
            </div>\r
            \r
        </div>\r
    );\r
}\r
`,uuid:64},{fullname:"../../samples/Hero Sections/4.tsx",component:Gx,fileCnt:`'use client';\r
import { motion } from 'motion/react';\r
import { TextEffect } from '@/components/motion-ui/text-effect';\r
import { useTheme } from 'next-themes';\r
import { ArrowRight, MoonIcon, SunIcon } from 'lucide-react';\r
\r
const BLUR_Y_VARIANT = {\r
    hidden: { opacity: 0, y: 10, filter: 'blur(12px)' },\r
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', },\r
};\r
\r
const TEXT_EFFECT_VARIANTS = (staggerTime: number) => ({\r
    container: {\r
        hidden: { opacity: 0 },\r
        visible: { opacity: 1, transition: { staggerChildren: staggerTime, }, },\r
    },\r
    item: {\r
        hidden: BLUR_Y_VARIANT.hidden,\r
        visible: { ...BLUR_Y_VARIANT.visible, transition: { duration: 0.5 }, },\r
    },\r
});\r
\r
export function Hero4() {\r
    const theme = useTheme();\r
    return (\r
        <div className='relative bg-white dark:bg-zinc-900'>\r
\r
            <header className='absolute inset-x-0 top-0 z-50'>\r
                <nav className='flex items-center justify-between p-6 lg:px-8'>\r
\r
                    <div className='flex lg:flex-1'>\r
                        <a href='/docs' className='relative flex items-center'>\r
                            <span className='sr-only'>\r
                                Motion Primitives Pro\r
                            </span>\r
                            <svg className='h-8 w-auto' width='70' height='70' viewBox='0 0 70 70' fill='none' role='img' aria-label='MP Logo'>\r
                                <path\r
                                    strokeWidth='3' stroke='currentColor' strokeLinecap='round'\r
                                    d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'\r
                                />\r
                            </svg>\r
                        </a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:gap-x-12'>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Product</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Features</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Marketplace</a>\r
                        <a href='#' className='text-sm/6 font-medium text-zinc-900 dark:text-zinc-200'>Company</a>\r
                    </div>\r
\r
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>\r
                        <a href='#' className='inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none'>\r
                            Log in <ArrowRight className='size-4' />\r
                        </a>\r
                    </div>\r
                </nav>\r
            </header>\r
\r
            <section className='py-28'>\r
                <div className='mx-auto max-w-screen-xl items-center justify-between gap-x-12 overflow-hidden text-gray-600 md:flex md:px-8'>\r
                    <div className='flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl'>\r
\r
                        <TextEffect\r
                            className='text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl'\r
                            as='h1'\r
                            per='char'\r
                            variants={TEXT_EFFECT_VARIANTS(0.03)}\r
                        >\r
                            {\`Easiest way to build websites\`}\r
                        </TextEffect>\r
\r
                        <TextEffect\r
                            className='mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8'\r
                            as='p'\r
                            per='line'\r
                            variants={TEXT_EFFECT_VARIANTS(0.2)}\r
                            delay={0.9}\r
                        >\r
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.\r
                        </TextEffect>\r
\r
                        <div className='flex items-center gap-x-6'>\r
                            <motion.a\r
                                className='rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600'\r
                                variants={BLUR_Y_VARIANT}\r
                                initial='hidden'\r
                                animate='visible'\r
                                transition={{ duration: 0.5, delay: 1 }}\r
                                href='#'\r
                            >\r
                                Start building\r
                            </motion.a>\r
                            <motion.a\r
                                className='inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200'\r
                                variants={BLUR_Y_VARIANT}\r
                                initial='hidden'\r
                                animate='visible'\r
                                transition={{ duration: 0.5, delay: 1.1 }}\r
                                href='#'\r
                            >\r
                                Watch the film <ArrowRight className='size-4' />\r
                            </motion.a>\r
                        </div>\r
                    </div>\r
\r
                    <motion.div\r
                        className='mt-10 flex-none p-8 md:mt-0 md:max-w-xl'\r
                        variants={BLUR_Y_VARIANT}\r
                        initial='hidden'\r
                        animate='visible'\r
                        transition={{ duration: 0.5 }}\r
                    >\r
                        {/* <img className='rounded-md shadow' src={theme.theme === 'dark' ? '/mp_dark.png' : '/mp_light.png'} alt='motion primitives' /> */}\r
                        {theme.theme === 'dark' ?\r
                            <MoonIcon className='absolute top-4 right-4 z-10 text-foreground' /> :\r
                            <SunIcon className='absolute top-4 right-4 z-10 text-foreground' />\r
                        }\r
                    </motion.div>\r
                </div>\r
            </section>\r
        </div>\r
    );\r
}\r
`,uuid:65}],"Logo Clouds":[{fullname:"../../samples/Logo Clouds/1.tsx",component:$x,fileCnt:`'use client';\r
import { useState, useEffect } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
\r
export function LogoCloud1() {\r
    const [currentLogos, setCurrentLogos] = useState(LOGOS.slice(0, LOGO_COUNT));\r
\r
    useEffect(\r
        () => {\r
            const interval = setInterval(\r
                () => {\r
                    setCurrentLogos(\r
                        (prevLogos) => {\r
                            const currentIndex = LOGOS.indexOf(prevLogos[0]);\r
                            const nextStartIndex = (currentIndex + LOGO_COUNT) % LOGOS.length;\r
                            return LOGOS.slice(nextStartIndex, nextStartIndex + LOGO_COUNT);\r
                        }\r
                    );\r
                }, 4000\r
            );\r
            return () => clearInterval(interval);\r
        }, []\r
    );\r
\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='grid w-full grid-cols-4 gap-4'>\r
                    {currentLogos.map(\r
                        (logo, index) => (\r
                            <AnimatePresence initial={false} mode='wait' key={index}>\r
                                <motion.div\r
                                    className='flex items-center justify-center'\r
                                    initial={{ scale: 0.6, opacity: 0 }}\r
                                    animate={{ scale: 1, opacity: 1 }}\r
                                    exit={{ scale: 0.6, opacity: 0 }}\r
                                    transition={{ duration: 0.3 }}\r
                                    key={logo.name}\r
                                >\r
                                    <logo.Component className='h-8 w-full text-black dark:text-white' />\r
                                </motion.div>\r
                            </AnimatePresence>\r
                        )\r
                    )}\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const LOGO_COUNT = 4;\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { OpenAI } from './icons/openai';\r
// import { Sony } from './icons/sony';\r
// import { Strava } from './icons/strava';\r
\r
const LOGOS = [\r
    { Component: AppleMusic, name: 'AppleMusic' },\r
    { Component: A24, name: 'A24' },\r
    { Component: Pixar, name: 'Pixar' },\r
    { Component: Prada, name: 'Prada' },\r
    { Component: Salomon, name: 'Salomon' },\r
    { Component: OpenAI, name: 'OpenAI' },\r
    { Component: Sony, name: 'Sony' },\r
    { Component: Strava, name: 'Strava' },\r
];\r
\r
`,uuid:66},{fullname:"../../samples/Logo Clouds/2.tsx",component:qx,fileCnt:`'use client';\r
import { useState, useEffect } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
\r
export function LogoCloud2() {\r
    const [currentLogos, setCurrentLogos] = useState(LOGOS.slice(0, LOGO_COUNT));\r
\r
    useEffect(\r
        () => {\r
            const interval = setInterval(\r
                () => {\r
                    setCurrentLogos(\r
                        (prevLogos) => {\r
                            const currentIndex = LOGOS.indexOf(prevLogos[0]);\r
                            const nextStartIndex = (currentIndex + LOGO_COUNT) % LOGOS.length;\r
                            return LOGOS.slice(nextStartIndex, nextStartIndex + LOGO_COUNT);\r
                        }\r
                    );\r
                }, 4000\r
            );\r
            return () => clearInterval(interval);\r
        }, []\r
    );\r
\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='grid w-full grid-cols-4 gap-4'>\r
                    <AnimatePresence initial={false} mode='popLayout'>\r
\r
                        {currentLogos.map(\r
                            (logo, index) => {\r
                                return (\r
                                    <motion.div\r
                                        className='flex items-center justify-center'\r
                                        initial={{ y: 30, rotateX: 60, opacity: 0 }}\r
                                        animate={{ y: 0, rotateX: 0, opacity: 1 }}\r
                                        exit={{ y: -30, rotateX: -60, opacity: 0 }}\r
                                        transition={{ duration: 0.5, delay: index * 0.15 }}\r
                                        key={logo.name}\r
                                    >\r
                                        <logo.Component className='h-8 w-full text-black dark:text-white' />\r
                                    </motion.div>\r
                                );\r
                            }\r
                        )}\r
\r
                    </AnimatePresence>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { OpenAI } from './icons/openai';\r
// import { Sony } from './icons/sony';\r
// import { Strava } from './icons/strava';\r
\r
const LOGOS = [\r
    { Component: AppleMusic, name: 'AppleMusic' },\r
    { Component: A24, name: 'A24' },\r
    { Component: Pixar, name: 'Pixar' },\r
    { Component: Prada, name: 'Prada' },\r
    { Component: Salomon, name: 'Salomon' },\r
    { Component: OpenAI, name: 'OpenAI' },\r
    { Component: Sony, name: 'Sony' },\r
    { Component: Strava, name: 'Strava' },\r
];\r
\r
const LOGO_COUNT = 4;\r
`,uuid:67},{fullname:"../../samples/Logo Clouds/3.tsx",component:Wx,fileCnt:`'use client';\r
import { useState, useEffect } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
\r
export function LogoCloud3() {\r
    const [currentLogos, setCurrentLogos] = useState(LOGOS.slice(0, 4));\r
\r
    useEffect(\r
        () => {\r
            const interval = setInterval(\r
                () => {\r
                    setCurrentLogos(\r
                        (prevLogos) => {\r
                            const currentIndex = LOGOS.indexOf(prevLogos[0]);\r
                            const nextStartIndex = (currentIndex + 4) % LOGOS.length;\r
                            return LOGOS.slice(nextStartIndex, nextStartIndex + 4);\r
                        }\r
                    );\r
                }, 6000\r
            );\r
            return () => clearInterval(interval);\r
        }, []\r
    );\r
\r
    return (\r
        <div className='w-full py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='flex w-full flex-col items-center gap-4 space-x-2 px-4 py-4 md:flex-row'>\r
                    <div className='grid w-full grid-cols-4 gap-4'>\r
                        <AnimatePresence initial={false} mode='popLayout'>\r
\r
                            {currentLogos.map((logo, index) => (\r
                                <div className='relative flex h-10 w-full items-center justify-center overflow-hidden' key={logo.name}>\r
                                    <motion.div\r
                                        className='absolute inset-0 flex items-center justify-center'\r
                                        initial={{ y: -40, opacity: 0 }}\r
                                        animate={{ y: 0, opacity: 1 }}\r
                                        exit={{ y: 40, opacity: 0 }}\r
                                        transition={{ duration: 0.5, delay: index * 0.1 }}\r
                                    >\r
                                        <logo.Component className='h-full w-full max-w-[80px] text-black dark:text-white' />\r
                                    </motion.div>\r
                                </div>\r
                            ))}\r
\r
                        </AnimatePresence>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
// import { A24 } from './icons/a24';\r
// import { AppleMusic } from './icons/apple-music';\r
// import { OpenAI } from './icons/openai';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { Sony } from './icons/sony';\r
// import { Strava } from './icons/strava';\r
\r
const LOGOS = [\r
    { Component: AppleMusic, name: 'AppleMusic' },\r
    { Component: A24, name: 'A24' },\r
    { Component: Pixar, name: 'Pixar' },\r
    { Component: Prada, name: 'Prada' },\r
    { Component: Salomon, name: 'Salomon' },\r
    { Component: OpenAI, name: 'OpenAI' },\r
    { Component: Sony, name: 'Sony' },\r
    { Component: Strava, name: 'Strava' },\r
];\r
`,uuid:68},{fullname:"../../samples/Logo Clouds/4.tsx",component:Yx,fileCnt:`'use client';\r
import { useState, useEffect } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
\r
export function LogoCloud4() {\r
    const [currentLogos, setCurrentLogos] = useState(LOGOS);\r
\r
    useEffect(\r
        () => {\r
            const interval = setInterval(\r
                () => {\r
                    setCurrentLogos(\r
                        (prevLogos) => {\r
                            const newLogos = [...prevLogos];\r
                            const lastLogo = newLogos.pop()!;\r
                            return [lastLogo, ...newLogos];\r
                        }\r
                    );\r
                }, 4000\r
            );\r
            return () => clearInterval(interval);\r
        }, []\r
    );\r
\r
    return (\r
        <div className='w-full py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='grid w-full grid-cols-4 gap-x-4 gap-y-8'>\r
                    <AnimatePresence initial={false} mode='popLayout'>\r
\r
                        {currentLogos.map((logo, index) => (\r
                            <motion.div\r
                                className='flex h-[100px] items-center justify-center'\r
                                initial={{ opacity: 0 }}\r
                                animate={{ opacity: 1 }}\r
                                exit={{ opacity: 0 }}\r
                                transition={{ type: 'spring', duration: 0, delay: index * 0.1, stiffness: 280, damping: 18, mass: 0.3, }}\r
                                key={\`\${logo.name}-\${index}\`}\r
                            >\r
                                <logo.Component className='h-full w-[80px] text-black dark:text-white' />\r
                            </motion.div>\r
                        ))}\r
\r
                    </AnimatePresence>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { OpenAI } from './icons/openai';\r
// import { Sony } from './icons/sony';\r
// import { Strava } from './icons/strava';\r
\r
const LOGOS = [\r
    { Component: AppleMusic, name: 'AppleMusic' },\r
    { Component: A24, name: 'A24' },\r
    { Component: Pixar, name: 'Pixar' },\r
    { Component: Prada, name: 'Prada' },\r
    { Component: Salomon, name: 'Salomon' },\r
    { Component: OpenAI, name: 'OpenAI' },\r
    { Component: Sony, name: 'Sony' },\r
    { Component: Strava, name: 'Strava' },\r
];\r
`,uuid:69},{fullname:"../../samples/Logo Clouds/5.tsx",component:Kx,fileCnt:`'use client';\r
import { useState, useEffect } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
\r
export function LogoCloud5() {\r
    const [currentLogos, setCurrentLogos] = useState(LOGOS);\r
\r
    useEffect(\r
        () => {\r
            const interval = setInterval(\r
                () => {\r
                    setCurrentLogos(\r
                        (prevLogos) => {\r
                            const newLogos = [...prevLogos];\r
                            const lastLogo = newLogos.pop()!;\r
                            return [lastLogo, ...newLogos];\r
                        }\r
                    );\r
                }, 4000\r
            );\r
            return () => clearInterval(interval);\r
        }, []\r
    );\r
\r
    return (\r
        <div className='w-full py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='grid w-full grid-cols-4 gap-x-4 gap-y-8'>\r
                    <AnimatePresence initial={false} mode='popLayout'>\r
\r
                        {currentLogos.map((logo, index) => (\r
                            <motion.div\r
                                className='flex h-[100px] items-center justify-center'\r
                                initial={{ scale: 0.6, opacity: 0 }}\r
                                animate={{ scale: 1, opacity: 1 }}\r
                                exit={{ scale: 0.6, opacity: 0 }}\r
                                transition={{ duration: 0.5, delay: index * 0.1 }}\r
                                key={\`\${logo.name}-\${index}\`}\r
                            >\r
                                <logo.Component className='h-full w-[80px] text-black dark:text-white' />\r
                            </motion.div>\r
                        ))}\r
\r
                    </AnimatePresence>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { OpenAI } from './icons/openai';\r
// import { Sony } from './icons/sony';\r
// import { Strava } from './icons/strava';\r
\r
const LOGOS = [\r
    { Component: AppleMusic, name: 'AppleMusic' },\r
    { Component: A24, name: 'A24' },\r
    { Component: Pixar, name: 'Pixar' },\r
    { Component: Prada, name: 'Prada' },\r
    { Component: Salomon, name: 'Salomon' },\r
    { Component: OpenAI, name: 'OpenAI' },\r
    { Component: Sony, name: 'Sony' },\r
    { Component: Strava, name: 'Strava' },\r
];\r
`,uuid:70},{fullname:"../../samples/Logo Clouds/6.tsx",component:Qx,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
\r
export function LogoCloud6() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div\r
                    className='flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]'\r
                    style={{ '--shadow-size': '200px' } as React.CSSProperties}\r
                >\r
                    <InfiniteSlider gap={120}>\r
                        {LOGOS.map(\r
                            (logo) => (\r
                                <logo.Component className='h-full w-full max-w-[80px] text-black dark:text-white' key={logo.name} />\r
                            )\r
                        )}\r
                    </InfiniteSlider>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { OpenAI } from './icons/openai';\r
// import { Sony } from './icons/sony';\r
// import { Strava } from './icons/strava';\r
\r
const LOGOS = [\r
    { Component: AppleMusic, name: 'AppleMusic' },\r
    { Component: A24, name: 'A24' },\r
    { Component: Pixar, name: 'Pixar' },\r
    { Component: Prada, name: 'Prada' },\r
    { Component: Salomon, name: 'Salomon' },\r
    { Component: OpenAI, name: 'OpenAI' },\r
    { Component: Sony, name: 'Sony' },\r
    { Component: Strava, name: 'Strava' },\r
];\r
`,uuid:71},{fullname:"../../samples/Logo Clouds/7.tsx",component:eh,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
\r
export function LogoCloud7() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div\r
                className='mx-auto flex max-w-7xl flex-col space-y-24 px-6 lg:px-8'\r
                style={{ '--shadow-size': '200px' } as React.CSSProperties}\r
            >\r
                <div className='flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]'>\r
                    <InfiniteSlider gap={120}>\r
                        {LOGOS.map(\r
                            (logo) => (\r
                                <logo.Component className='h-full w-full max-w-[80px] text-black dark:text-white' key={logo.name} />\r
                            )\r
                        )}\r
                    </InfiniteSlider>\r
                </div>\r
\r
                <div className='flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]'>\r
                    <InfiniteSlider gap={120} reverse>\r
                        {LOGOS.map(\r
                            (logo) => (\r
                                <logo.Component className='h-full w-full max-w-[80px] text-black dark:text-white' key={logo.name} />\r
                            )\r
                        )}\r
                    </InfiniteSlider>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { OpenAI } from './icons/openai';\r
// import { Sony } from './icons/sony';\r
// import { Strava } from './icons/strava';\r
\r
const LOGOS = [\r
    { Component: AppleMusic, name: 'AppleMusic' },\r
    { Component: A24, name: 'A24' },\r
    { Component: Pixar, name: 'Pixar' },\r
    { Component: Prada, name: 'Prada' },\r
    { Component: Salomon, name: 'Salomon' },\r
    { Component: OpenAI, name: 'OpenAI' },\r
    { Component: Sony, name: 'Sony' },\r
    { Component: Strava, name: 'Strava' },\r
];\r
`,uuid:72},{fullname:"../../samples/Logo Clouds/8.tsx",component:ih,fileCnt:`'use client';\r
import { useState } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
import { DiscordIcon, GitHubLightIcon, LinkedInIcon, RedditIcon } from '@/components/motion-ui-demo-icons/3';\r
import { cn } from "@/utils";\r
\r
export function LogoCloud8() {\r
    const [socialHovered, setSocialHovered] = useState<string | null>(null);\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='flex flex-wrap justify-center'>\r
\r
                    {ICONS.map(\r
                        (social, index) => (\r
                            <div\r
                                className={cn(\r
                                    \`relative cursor-pointer px-6 py-2 transition-opacity duration-200\`,\r
                                    socialHovered && socialHovered !== social.name ? 'opacity-40' : 'opacity-100'\r
                                )}\r
                                key={index}\r
                                onMouseEnter={() => setSocialHovered(social.name)}\r
                                onMouseLeave={() => setSocialHovered(null)}\r
                            >\r
                                <span className='text-sm text-zinc-900 dark:text-white sm:text-lg'>\r
                                    {social.name}\r
                                </span>\r
\r
                                <AnimatePresence initial={false}>\r
                                    {socialHovered === social.name && (\r
                                        <motion.div\r
                                            key={social.name}\r
                                            className='absolute bottom-0 left-0 right-0 flex items-center justify-center'\r
                                            initial={{ y: -35, rotate: 0, opacity: 0, }}\r
                                            animate={{ y: -45, opacity: 1, rotate: Math.random() * 20 - 10, }}\r
                                            exit={{ y: -35, opacity: 0, rotate: 0, }}\r
                                            transition={{ duration: 0.2, ease: [0.785, 0.135, 0.15, 0.86], }}\r
                                        >\r
                                            <social.icon />\r
                                        </motion.div>\r
                                    )}\r
                                </AnimatePresence>\r
                            </div>\r
                        )\r
                    )}\r
\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const ICONS = [ // import { DiscordRound, GithubRound, LinkedinRound, RedditRound } from './icons';\r
    { name: 'Discord', icon: DiscordIcon, },\r
    { name: 'LinkedIn', icon: LinkedInIcon, },\r
    { name: 'GitHub', icon: GitHubLightIcon, },\r
    { name: 'Reddit', icon: RedditIcon, },\r
];\r
`,uuid:73},{fullname:"../../samples/Logo Clouds/9.tsx",component:oh,fileCnt:`import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
import { ArrowRightIcon } from 'lucide-react';\r
\r
export function LogoCloud9() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>\r
\r
                    {LINKS.map(\r
                        (link, index) => (\r
                            <a href={link.href} key={index} className='group relative h-32'>\r
                                <div className='absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 group-hover:opacity-50 group-hover:blur-[10px] dark:bg-zinc-900'>\r
                                    <link.icon className='h-auto w-20 text-zinc-900 dark:text-white' />\r
                                </div>\r
\r
                                <div className='absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center'>\r
                                    <div className='inline-flex translate-y-4 items-center text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white'>\r
                                        Visit Site\r
                                        <ArrowRightIcon className='ml-1' size={16} />\r
                                    </div>\r
                                </div>\r
                            </a>\r
                        )\r
                    )}\r
\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const LINKS = [\r
    { name: 'AppleMusic', /**/ icon: AppleMusic, /**/ href: '#', },\r
    { name: 'A24',        /**/ icon: A24,        /**/ href: '#', },\r
    { name: 'Pixar',      /**/ icon: Pixar,      /**/ href: '#', },\r
    { name: 'Prada',      /**/ icon: Prada,      /**/ href: '#', },\r
    { name: 'Salomon',    /**/ icon: Salomon,    /**/ href: '#', },\r
    { name: 'Sony',       /**/ icon: Sony,       /**/ href: '#', },\r
];\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { Sony } from './icons/sony';\r
`,uuid:74},{fullname:"../../samples/Logo Clouds/10.tsx",component:ch,fileCnt:`import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
import { ArrowRight } from 'lucide-react';\r
\r
export function LogoCloud10() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <a className='group relative grid grid-cols-2 gap-4 sm:grid-cols-3' href='#'>\r
                    {ICONS.map(\r
                        (icon, index) => (\r
                            <div key={index} className='group relative h-32'>\r
                                <div className='absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 dark:bg-zinc-900'>\r
                                    <icon.icon className='h-auto w-20 text-zinc-900 dark:text-white' />\r
                                </div>\r
                            </div>\r
                        )\r
                    )}\r
\r
                    <div className='absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center'>\r
                        <div className='absolute inset-0 bg-white bg-opacity-0 backdrop-blur-[0px] transition-all duration-200 group-hover:bg-opacity-50 group-hover:backdrop-blur-[4px] dark:bg-black dark:bg-opacity-0' />\r
                        <div className='inline-flex translate-y-2 scale-[0.95] items-center font-medium text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 dark:text-white'>\r
                            Show case study \r
                            <ArrowRight className='ml-1' size={16} />\r
                        </div>\r
                    </div>\r
                </a>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const ICONS = [\r
    { name: 'AppleMusic', /**/ icon: AppleMusic, /**/ href: '#', },\r
    { name: 'A24',        /**/ icon: A24,        /**/ href: '#', },\r
    { name: 'Pixar',      /**/ icon: Pixar,      /**/ href: '#', },\r
    { name: 'Prada',      /**/ icon: Prada,      /**/ href: '#', },\r
    { name: 'Salomon',    /**/ icon: Salomon,    /**/ href: '#', },\r
    { name: 'Sony',       /**/ icon: Sony,       /**/ href: '#', },\r
];\r
\r
// import { AppleMusic } from './icons/apple-music';\r
// import { A24 } from './icons/a24';\r
// import { Pixar } from './icons/pixar';\r
// import { Prada } from './icons/prada';\r
// import { Salomon } from './icons/salomon';\r
// import { Sony } from './icons/sony';\r
`,uuid:75}],Navigation:[{fullname:"../../samples/Navigation/1.tsx",component:uh,fileCnt:`'use client';\r
import React, { ReactNode } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
import { Link } from "@/ui";\r
import { useState } from 'react';\r
\r
type NavItem = {\r
    name: string;\r
    href: string;\r
    content: ReactNode;\r
};\r
\r
export function Navigation1() {\r
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);\r
    const [dropdownPosition, setDropdownPosition] = useState(0);\r
\r
    const handleHover = (item: NavItem, e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>) => {\r
        setHoveredItem(item.name);\r
        setDropdownPosition(e.currentTarget.offsetLeft);\r
    };\r
\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <nav onMouseLeave={() => setHoveredItem(null)}>\r
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>\r
                        <div className='flex justify-center'>\r
                            <div className='relative flex'>\r
                                \r
                                <ul className='relative flex list-none p-0' role='menubar'>\r
                                    {navItems.map(\r
                                        (item) => (\r
                                            <div\r
                                                className='relative'\r
                                                onMouseEnter={(e) => handleHover(item, e)}\r
                                                onFocus={(e) => handleHover(item, e)}\r
                                                role='menuitem'\r
                                                aria-haspopup='true'\r
                                                aria-expanded={hoveredItem === item.name}\r
                                                key={item.name}\r
                                            >\r
                                                <Link className='px-3 py-2 text-sm text-zinc-950 dark:text-zinc-50' href='#'>\r
                                                    {item.name}\r
                                                </Link>\r
                                            </div>\r
                                        )\r
                                    )}\r
                                </ul>\r
\r
                                <AnimatePresence>\r
                                    {hoveredItem && (\r
                                        <motion.div\r
                                            layout\r
                                            className='absolute top-full mt-2 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 dark:bg-black dark:ring-white dark:ring-opacity-5'\r
                                            initial={{ opacity: 0, scale: 0.95, x: dropdownPosition }}\r
                                            animate={{ opacity: 1, scale: 1, x: dropdownPosition, }}\r
                                            exit={{ opacity: 0, scale: 0.95 }}\r
                                            transition={{ duration: 0.2 }}\r
                                            onMouseEnter={() => setHoveredItem(hoveredItem)}\r
                                            onMouseLeave={() => setHoveredItem(null)}\r
                                        >\r
                                            <motion.div layout='position'>\r
                                                {navItems.find((item) => item.name === hoveredItem)?.content}\r
                                            </motion.div>\r
                                        </motion.div>\r
                                    )}\r
                                </AnimatePresence>\r
\r
                            </div>\r
                        </div>\r
                    </div>\r
                </nav>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const navItems: NavItem[] = [\r
    {\r
        name: 'Products', href: '/products',\r
        content: (\r
            <div className='w-[200px]'>\r
                <ul className='flex flex-col space-y-1 py-1'>\r
                    <li className='px-1'><Link href='/products/featured' className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'>Featured</Link></li>\r
                    <li className='px-1'><Link href='/products/new' className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'>New Arrivals</Link></li>\r
                    <li className='px-1'><Link href='/products/sale' className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'>Sale</Link></li>\r
                </ul>\r
            </div>\r
        ),\r
    }, {\r
        name: 'Membership', href: '/membership',\r
        content: (\r
            <div className='p-2'>\r
                <div className='grid grid-cols-2 space-x-2'>\r
                    <div className='bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200'>Feature</div>\r
                    <div className='bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200'>Content</div>\r
                </div>\r
            </div>\r
        ),\r
    }, {\r
        name: 'About', href: '/about',\r
        content: (\r
            <div className='w-[200px]'>\r
                <ul className='flex flex-col space-y-1 py-1'>\r
                    <li className='px-1'> <Link href='/about/story' className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900'>Our Story</Link> </li>\r
                    <li className='px-1'> <Link href='/about/team' className='block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900' >Team</Link> </li>\r
                </ul>\r
            </div>\r
        ),\r
    },\r
];\r
`,uuid:76},{fullname:"../../samples/Navigation/2.tsx",component:mh,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
\r
export function Navigation2() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto flex max-w-7xl justify-center px-6 lg:px-8'>\r
                <div className='flex max-w-full flex-nowrap overflow-x-auto'>\r
\r
                    <AnimatedBackground\r
                        defaultValue={TABS[0]}\r
                        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'\r
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3, }}\r
                        enableHover\r
                    >\r
                        {TABS.map(\r
                            (tab, index) => (\r
                                <button\r
                                    className='px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white'\r
                                    data-id={tab}\r
                                    type='button'\r
                                    key={index}\r
                                >\r
                                    {tab}\r
                                </button>\r
                            )\r
                        )}\r
                    </AnimatedBackground>\r
                    \r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const TABS = ['Home', 'About', 'Services', 'Contact', 'Pricing', 'FAQ'];\r
`,uuid:77},{fullname:"../../samples/Navigation/3.tsx",component:ph,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
\r
export function Navigation3() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto flex max-w-7xl justify-center px-6 lg:px-8'>\r
                <div className='flex max-w-full flex-nowrap overflow-x-auto'>\r
\r
                    <AnimatedBackground\r
                        defaultValue={TABS[0]}\r
                        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'\r
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.3, }}\r
                    >\r
                        {TABS.map(\r
                            (tab, index) => (\r
                                <button\r
                                    className='px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white'\r
                                    data-id={tab}\r
                                    type='button'\r
                                    key={index}\r
                                >\r
                                    {tab}\r
                                </button>\r
                            )\r
                        )}\r
                    </AnimatedBackground>\r
\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const TABS = ['Home', 'About', 'Services', 'Contact'];\r
`,uuid:78},{fullname:"../../samples/Navigation/4.tsx",component:fh,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
\r
export function Navigation4() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='mx-auto w-full max-w-fit rounded-xl border border-zinc-200 p-1 dark:border-zinc-800'>\r
                    <div className='flex overflow-x-auto'>\r
\r
                        <AnimatedBackground\r
                            defaultValue={TABS[0]}\r
                            className='whitespace-nowrap rounded-lg bg-zinc-100 dark:bg-zinc-800'\r
                            transition={{ type: 'spring', bounce: 0, duration: 0.2, }}\r
                            enableHover\r
                        >\r
                            {TABS.map(\r
                                (tab, index) => (\r
                                    <button\r
                                        className='px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white'\r
                                        data-id={tab}\r
                                        type='button'\r
                                        key={index}\r
                                    >\r
                                        {tab}\r
                                    </button>\r
                                )\r
                            )}\r
                        </AnimatedBackground>\r
                        \r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const TABS = ['Home', 'About', 'Services', 'Contact'];\r
`,uuid:79},{fullname:"../../samples/Navigation/5.tsx",component:xh,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
\r
export function Navigation5() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='mx-auto w-full max-w-fit rounded-xl border border-zinc-200 p-1 dark:border-zinc-800'>\r
                    <div className='flex overflow-x-auto'>\r
\r
                        <AnimatedBackground\r
                            defaultValue={TABS[0]}\r
                            className='whitespace-nowrap rounded-lg bg-zinc-100 dark:bg-zinc-800'\r
                            transition={{ type: 'spring', bounce: 0, duration: 0.2, }}\r
                        >\r
                            {TABS.map(\r
                                (tab, index) => (\r
                                    <button\r
                                        className='px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-white data-[checked=true]:dark:text-white'\r
                                        data-id={tab}\r
                                        type='button'\r
                                        key={index}\r
                                    >\r
                                        {tab}\r
                                    </button>\r
                                )\r
                            )}\r
                        </AnimatedBackground>\r
                        \r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const TABS = ['Home', 'About', 'Services', 'Contact'];\r
`,uuid:80},{fullname:"../../samples/Navigation/6.tsx",component:hh,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
\r
export function Navigation6() {\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='mx-auto w-full max-w-fit rounded-full bg-zinc-100 p-1 dark:bg-zinc-800'>\r
                    <div className='flex overflow-x-clip'>\r
\r
                        <AnimatedBackground\r
                            defaultValue={TABS[0]}\r
                            className='z-10 rounded-full bg-white shadow-md dark:bg-black'\r
                            transition={{ type: 'spring', bounce: 0, duration: 0.2, }}\r
                        >\r
                            {TABS.map((tab, index) => (\r
                                <button\r
                                    className='px-3 py-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 data-[checked=true]:dark:text-white'\r
                                    data-id={tab}\r
                                    type='button'\r
                                    key={index}\r
                                >\r
                                    <span className='relative z-20'>\r
                                        {tab}\r
                                    </span>\r
                                </button>\r
                            ))}\r
                        </AnimatedBackground>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const TABS = ['Home', 'About', 'Services', 'Contact'];\r
`,uuid:81},{fullname:"../../samples/Navigation/7.tsx",component:gh,fileCnt:`'use client';\r
import { useRef, useState, useEffect } from 'react';\r
import { motion } from 'motion/react';\r
import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
import { cn } from "@/utils";\r
\r
export function Navigation7() {\r
    const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);\r
    const [offsetWidth, setOffsetWidth] = useState(0);\r
    const [offsetLeft, setOffsetLeft] = useState(0);\r
    const containerRef = useRef<HTMLDivElement>(null);\r
\r
    useEffect(\r
        () => {\r
            const index = TABS.indexOf(activeTab!);\r
            const button = containerRef.current?.children[index + 1] as HTMLElement;\r
            if (button) {\r
                const { offsetLeft, offsetWidth } = button;\r
                setOffsetLeft(offsetLeft);\r
                setOffsetWidth(offsetWidth);\r
            }\r
        }, [activeTab]\r
    );\r
\r
    const handleSetActiveTab = (tab: (typeof TABS)[number]) => {\r
        setActiveTab(tab);\r
    };\r
\r
    return (\r
        <div className='py-24 sm:py-32'>\r
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
                <div className='flex justify-center'>\r
                    <div ref={containerRef} className='relative flex max-w-full overflow-x-auto border-b border-zinc-200 dark:border-zinc-800'>\r
\r
                        <motion.div\r
                            className='absolute bottom-0 h-0.5 bg-black dark:bg-white'\r
                            layoutId='underline'\r
                            animate={{ x: offsetLeft, width: offsetWidth, }}\r
                            transition={{ type: 'spring', bounce: 0, duration: 0.2, }}\r
                        />\r
\r
                        <AnimatedBackground\r
                            className='top-1.5 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800'\r
                            transition={{ type: 'spring', bounce: 0, duration: 0.2, }}\r
                            enableHover\r
                        >\r
                            {TABS.map(\r
                                (tab, index) => (\r
                                    <button\r
                                        className={cn(\r
                                            'px-3 py-4 text-sm/3 text-zinc-500 transition-colors duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50',\r
                                            activeTab === tab && 'text-black dark:text-white'\r
                                        )}\r
                                        data-id={tab}\r
                                        type='button'\r
                                        key={index}\r
                                        onClick={() => handleSetActiveTab(tab)}\r
                                    >\r
                                        {tab}\r
                                    </button>\r
                                )\r
                            )}\r
                        </AnimatedBackground>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    );\r
}\r
\r
const TABS = ['Home', 'About', 'Services', 'Contact'];\r
`,uuid:82},{fullname:"../../samples/Navigation/8.tsx",component:vh,fileCnt:`'use client';\r
import { useRef, useState } from 'react';\r
import { useScroll } from 'motion/react';\r
import { cn } from "@/utils";\r
\r
export function Navigation9() {\r
    const ref = useRef(null);\r
    const [hasScrolled, setHasScrolled] = useState(false);\r
\r
    const { scrollYProgress } = useScroll({ container: ref, offset: ['start start', '100px start'], });\r
\r
    scrollYProgress.on('change',\r
        (latest) => {\r
            setHasScrolled(latest > 0);\r
        }\r
    );\r
\r
    return (\r
        <div ref={ref} className='relative mx-auto h-[100vh] max-w-7xl overflow-y-auto px-6 lg:px-8'>\r
\r
            <div className='sticky top-8'>\r
                <div\r
                    className={cn('flex w-full items-center justify-between rounded-full border transition-all duration-200 ease-out',\r
                        hasScrolled\r
                            ? 'border-zinc-200 bg-white/80 px-2 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80'\r
                            : 'border-transparent bg-transparent px-0 backdrop-blur-0'\r
                    )}\r
                >\r
                    <div className='flex w-full items-center justify-between p-2'>\r
\r
                        <a href='#' className='p-1'>\r
                            <span className='sr-only'>\r
                                Your Company\r
                            </span>\r
                            <svg className='h-8 w-auto text-zinc-950 dark:text-white' width='70' height='70' viewBox='0 0 70 70' fill='none' role='img' aria-label='MP Logo'>\r
                                <path\r
                                    strokeWidth='3' stroke='currentColor' strokeLinecap='round'\r
                                    d='M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263'\r
                                />\r
                            </svg>\r
                        </a>\r
\r
                        <div className='flex gap-x-6 sm:gap-x-12'>\r
                            <a className='text-sm/6 font-normal text-zinc-900 dark:text-zinc-100' href='#'>Login</a>\r
                            <a className='text-sm/6 font-normal text-zinc-900 dark:text-zinc-100' href='#'>Sign Up</a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
\r
            {/* example content */}\r
            <div className='mt-32'>\r
                <div className='h-[200vh] w-full text-center'>\r
                    <div className='text-sm'>\r
                        Scroll down\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </div>\r
    );\r
}\r
`,uuid:83}],"Special Components":[{fullname:"../../samples/Special Components/1.tsx",component:yh,fileCnt:`'use client';\r
import { useState } from 'react';\r
// import {\r
//   DropdownMenu,\r
//   DropdownMenuContent,\r
//   DropdownMenuTrigger,\r
//   DropdownMenuItem,\r
// } from '@/components/website/dropdown-menu';\r
import { motion } from 'motion/react';\r
import { ChevronDown } from 'lucide-react';\r
import { TextMorph } from "@/components/motion-ui/text-morph";\r
\r
export function TextMorphDropdown() {\r
  const TRANSITION = {\r
    type: 'spring',\r
    stiffness: 280,\r
    damping: 18,\r
    mass: 0.3,\r
  };\r
\r
  const [selectedValue, setSelectedValue] = useState('GPT-4');\r
  const options = ['o3', '4o', '4.5', '4o-1.5', 'o1-mini'];\r
  const label = 'ChatGPT';\r
\r
  const handleSelect = (value: string) => {\r
    setSelectedValue(value);\r
  };\r
\r
  return (\r
    <div className='flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8'>\r
        {/* tm: later */}\r
      {/* <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <motion.button\r
            layout='size'\r
            className='overflow-hidden rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-[#f9f9f9]'\r
            transition={TRANSITION}\r
          >\r
            <motion.div\r
              layout='preserve-aspect'\r
              className='inline-flex items-center gap-1'\r
              transition={TRANSITION}\r
            >\r
              <span className='text-[#5d5d5d]'>{label}</span>\r
              <TextMorph className='lowercase'>{selectedValue}</TextMorph>\r
              <ChevronDown className='size-4 text-[#b4b4b4]' />\r
            </motion.div>\r
          </motion.button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent align='start' className='shadow-sm'>\r
          {options.map((option) => (\r
            <DropdownMenuItem key={option} onClick={() => handleSelect(option)}>\r
              {option}\r
            </DropdownMenuItem>\r
          ))}\r
        </DropdownMenuContent>\r
      </DropdownMenu> */}\r
    </div>\r
  );\r
}\r
`,uuid:84},{fullname:"../../samples/Special Components/2.tsx",component:wh,fileCnt:`'use client';\r
\r
import { PlusIcon } from 'lucide-react';\r
import { TextEffect } from '@/components/motion-ui/text-effect';\r
import { BorderTrail } from "@/components/motion-ui/border-trail";\r
import { useState } from 'react';\r
\r
const loadingPhases = [\r
  { label: '', isLoading: false },\r
  { label: 'Analyzing scope...', isLoading: false },\r
  { label: 'Synthesizing solutions...', isLoading: false },\r
  { label: 'Finalizing output...', isLoading: false },\r
];\r
\r
export function TextEffectTrail() {\r
  const [text, setText] = useState('');\r
  const [isLoading, setIsLoading] = useState(false);\r
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);\r
  const [loading, setLoading] = useState(loadingPhases[0]);\r
\r
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {\r
    if (e.key === 'Enter') {\r
      setText('');\r
      setIsLoading(true);\r
      setCurrentPhaseIndex(1);\r
      setLoading({\r
        label: loadingPhases[1].label,\r
        isLoading: true,\r
      });\r
    }\r
  };\r
\r
  const handleAnimationComplete = () => {\r
    setLoading((prev) => ({\r
      ...prev,\r
      isLoading: false,\r
    }));\r
\r
    const mockRandomDelay = Math.floor(Math.random() * 501) + 1500;\r
\r
    if (currentPhaseIndex < loadingPhases.length - 1) {\r
      const nextIndex = currentPhaseIndex + 1;\r
\r
      setTimeout(() => {\r
        setCurrentPhaseIndex(nextIndex);\r
        setLoading({\r
          label: loadingPhases[nextIndex].label,\r
          isLoading: true,\r
        });\r
      }, mockRandomDelay);\r
    } else {\r
      setTimeout(() => {\r
        setIsLoading(false);\r
        setCurrentPhaseIndex(0);\r
        setLoading(loadingPhases[0]);\r
      }, mockRandomDelay);\r
    }\r
  };\r
\r
  return (\r
    <div className='flex items-center justify-center bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8'>\r
      <div className='relative flex h-[66px] w-[400px] rounded-full bg-[#232323] px-[28px]'>\r
        <div className='flex flex-1 flex-row items-center gap-5'>\r
          <PlusIcon className='size-4 text-white' />\r
          <div className='h-[16px] w-[1px] bg-[#373739]' />\r
          <input\r
            type='text'\r
            className='w-full bg-transparent text-white outline-none'\r
            value={text}\r
            onChange={(e) => setText(e.target.value)}\r
            onKeyDown={handleKeyPress}\r
            disabled={isLoading}\r
          />\r
          <TextEffect\r
            key={loading.label}\r
            className='absolute left-[82px] top-[19px] whitespace-nowrap text-[#e1e1e1]'\r
            variants={{\r
              item: {\r
                hidden: { opacity: 0, filter: 'blur(2px)' },\r
                visible: { opacity: 1, filter: 'blur(0px)' },\r
                exit: { opacity: 0, filter: 'blur(2px)' },\r
              },\r
            }}\r
            per='word'\r
            delay={0.5}\r
            speedReveal={0.9}\r
            speedSegment={0.3}\r
            trigger={loading.isLoading}\r
            segmentWrapperClassName='[&>*]:bg-gradient-to-b [&>*]:from-[#e4d3e8] [&>*]:via-[#afe1f0] [&>*]:to-[#e4d3e8] [&>*]:bg-clip-text [&>*]:text-transparent'\r
            onAnimationComplete={handleAnimationComplete}\r
          >\r
            {loading.label}\r
          </TextEffect>\r
        </div>\r
        {isLoading && (\r
          <BorderTrail\r
            className='h-[500px] rounded-full bg-gradient-to-l from-[#232323] via-[#3d5256] to-[#232323]'\r
            size={500}\r
            style={{\r
              transformOrigin: '50% 90%',\r
            }}\r
          />\r
        )}\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:85},{fullname:"../../samples/Special Components/3.tsx",component:jh,fileCnt:`'use client';\r
\r
import { useState, useEffect } from 'react';\r
import { motion } from 'motion/react';\r
import { GlowEffect } from "@/components/motion-ui/glow-effect";\r
import { TextLoop } from '@/components/motion-ui/text-loop';\r
import { SearchIcon } from 'lucide-react';\r
import { cn } from "@/utils";\r
\r
export function BackgroundGlowInput() {\r
  const [search, setSearch] = useState('');\r
  const [isLoading, setIsLoading] = useState(false);\r
\r
  useEffect(() => {\r
    if (!isLoading) {\r
      return;\r
    }\r
\r
    setTimeout(() => {\r
      setIsLoading(false);\r
    }, 8000);\r
  }, [isLoading]);\r
\r
  return (\r
    <div className='flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8'>\r
      <div className='relative h-[56px] w-full max-w-[400px]'>\r
        <motion.div\r
          className='absolute inset-0'\r
          animate={{\r
            opacity: isLoading ? 1 : 0,\r
            scale: isLoading ? 1 : 0.9,\r
          }}\r
          transition={{\r
            duration: 0.5,\r
            ease: 'easeInOut',\r
          }}\r
        >\r
          <GlowEffect\r
            colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}\r
            mode='flowHorizontal'\r
            blur='medium'\r
          />\r
        </motion.div>\r
        <div className='relative h-[56px] w-full max-w-[400px] rounded-xl [perspective:1000px]'>\r
          <input\r
            className={cn(\r
              'h-full w-full rounded-xl bg-zinc-100 py-2 pl-[52px] pr-6 text-zinc-800 outline-none placeholder:text-black/30 dark:bg-zinc-800 dark:text-white/60 dark:placeholder:text-white/30'\r
            )}\r
            type='text'\r
            disabled={isLoading}\r
            value={isLoading ? '' : search}\r
            onChange={(e) => setSearch(e.target.value)}\r
            placeholder={isLoading ? '' : 'Search...'}\r
            onKeyDown={(e) => {\r
              if (e.key === 'Enter') {\r
                setIsLoading(true);\r
              }\r
            }}\r
          />\r
\r
          {isLoading && (\r
            <TextLoop\r
              className='pointer-events-none absolute left-[52px] top-1/2 h-6 w-full -translate-y-1/2 leading-6 text-zinc-800 dark:text-white/60'\r
              trigger={isLoading}\r
              variants={{\r
                initial: {\r
                  opacity: 0,\r
                  y: 20,\r
                  rotateX: -90,\r
                },\r
                animate: {\r
                  opacity: 1,\r
                  y: 0,\r
                  rotateX: 0,\r
                },\r
                exit: {\r
                  opacity: 0,\r
                  y: -20,\r
                  rotateX: 90,\r
                },\r
              }}\r
              transition={{\r
                type: 'spring',\r
                stiffness: 320,\r
                damping: 20,\r
                mass: 1,\r
              }}\r
            >\r
              <span>{search}</span>\r
              <span>Searching...</span>\r
            </TextLoop>\r
          )}\r
          <SearchIcon className='absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-zinc-700 dark:text-white/30' />\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:86}],"Stats Sections":[{fullname:"../../samples/Stats Sections/1.tsx",component:kh,fileCnt:`'use client';\r
import { AnimatedNumber } from '@/components/motion-ui/animated-number';\r
import { useEffect, useState } from 'react';\r
\r
export function Stats1() {\r
  const [values, setValues] = useState([0, 0, 0, 0]);\r
\r
  useEffect(() => {\r
    setValues([25, 15, 80, 20]);\r
  }, []);\r
\r
  return (\r
    <div className='relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24'>\r
      <dl className='grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-4'>\r
        <div className='flex flex-col'>\r
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>\r
            New users\r
          </dt>\r
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>\r
            <AnimatedNumber\r
              value={values[0]}\r
              springOptions={{ bounce: 0, duration: 2000 }}\r
            />\r
            %\r
          </dd>\r
        </div>\r
        <div className='flex flex-col'>\r
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>\r
            Low churn rate\r
          </dt>\r
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>\r
            <AnimatedNumber\r
              value={values[1]}\r
              springOptions={{ bounce: 0, duration: 2000 }}\r
            />\r
            %\r
          </dd>\r
        </div>\r
        <div className='flex flex-col'>\r
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>\r
            High satisfaction\r
          </dt>\r
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>\r
            <AnimatedNumber\r
              value={values[2]}\r
              springOptions={{ bounce: 0, duration: 2000 }}\r
            />\r
            %\r
          </dd>\r
        </div>\r
        <div className='flex flex-col'>\r
          <dt className='mt-1 text-base text-zinc-500 dark:text-zinc-400'>\r
            MRR\r
          </dt>\r
          <dd className='order-first text-4xl font-normal text-zinc-900 dark:text-white'>\r
            <AnimatedNumber\r
              value={values[3]}\r
              springOptions={{ bounce: 0, duration: 2000 }}\r
            />\r
            k$\r
          </dd>\r
        </div>\r
      </dl>\r
    </div>\r
  );\r
}\r
`,uuid:87},{fullname:"../../samples/Stats Sections/2.tsx",component:Sh,fileCnt:`'use client';\r
import { AnimatedNumber } from '@/components/motion-ui/animated-number';\r
import { useEffect, useState } from 'react';\r
\r
export function Stats2() {\r
  const [values, setValues] = useState([0, 0, 0]);\r
\r
  useEffect(() => {\r
    setValues([120000, 11000, 300000]);\r
  }, []);\r
\r
  return (\r
    <div className='relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24'>\r
      <dl className='grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-3'>\r
        <div className='flex flex-col'>\r
          <dt className='mt-1 text-zinc-500 dark:text-zinc-400'>\r
            Transactions processed\r
          </dt>\r
          <dd className='order-first text-5xl text-zinc-900 dark:text-white'>\r
            $\r
            <AnimatedNumber\r
              value={values[0]}\r
              springOptions={{ bounce: 0, duration: 2000 }}\r
            />\r
          </dd>\r
        </div>\r
        <div className='flex flex-col'>\r
          <dt className='mt-1 text-zinc-500 dark:text-zinc-400'>\r
            Users connected last month\r
          </dt>\r
          <dd className='order-first text-5xl text-zinc-900 dark:text-white'>\r
            <AnimatedNumber\r
              value={values[1]}\r
              springOptions={{ bounce: 0, duration: 2000 }}\r
            />\r
          </dd>\r
        </div>\r
        <div className='flex flex-col'>\r
          <dt className='mt-1 text-zinc-500 dark:text-zinc-400'>Total Views</dt>\r
          <dd className='order-first text-5xl text-zinc-900 dark:text-white'>\r
            <AnimatedNumber\r
              value={values[2]}\r
              springOptions={{ bounce: 0, duration: 2000 }}\r
            />\r
            +\r
          </dd>\r
        </div>\r
      </dl>\r
    </div>\r
  );\r
}\r
`,uuid:88}],"Team sections":[{fullname:"../../samples/Team sections/1.tsx",component:Ah,fileCnt:`'use client';\r
\r
import { useState } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
\r
const SOCIAL_PROFILES = [\r
  {\r
    name: 'Jon Doe',\r
    src: '/avatars/1.png',\r
    job: 'Software Engineer',\r
  },\r
  {\r
    name: 'Jane Doe',\r
    src: '/avatars/2.png',\r
    job: 'Product Manager',\r
  },\r
  {\r
    name: 'Fly Doe',\r
    src: '/avatars/3.png',\r
    job: 'Designer',\r
  },\r
  {\r
    name: 'Rich Doe',\r
    src: '/avatars/4.png',\r
    job: 'Data Scientist',\r
  },\r
];\r
\r
export function Team1() {\r
  const [socialHovered, setSocialHovered] = useState<string | null>(null);\r
\r
  return (\r
    <div className='w-full py-24 sm:py-32'>\r
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
        <div className='flex flex-wrap justify-center gap-5'>\r
          {SOCIAL_PROFILES.map((social, index) => {\r
            return (\r
              <div className='relative' key={index}>\r
                <img\r
                  src={social.src}\r
                  alt={social.name}\r
                  key={index}\r
                  onMouseEnter={() => {\r
                    setSocialHovered(social.name);\r
                  }}\r
                  className='size-16 rounded-full'\r
                  onMouseLeave={() => setSocialHovered(null)}\r
                />\r
                <AnimatePresence initial={false}>\r
                  {socialHovered === social.name && (\r
                    <motion.div\r
                      key={social.name}\r
                      className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center whitespace-nowrap'\r
                      initial={{\r
                        y: -60,\r
                        rotate: 0,\r
                        opacity: 0,\r
                      }}\r
                      animate={{\r
                        y: -80,\r
                        opacity: 1,\r
                        rotate: Math.random() * 20 - 10,\r
                      }}\r
                      exit={{\r
                        y: -60,\r
                        opacity: 0,\r
                        rotate: 0,\r
                      }}\r
                      transition={{\r
                        duration: 0.2,\r
                        ease: [0.785, 0.135, 0.15, 0.86],\r
                      }}\r
                    >\r
                      <div className='text-sm font-medium text-zinc-900 dark:text-white'>\r
                        {social.name}\r
                      </div>\r
                      <div className='text-xs text-zinc-500 dark:text-zinc-400'>\r
                        {social.job}\r
                      </div>\r
                    </motion.div>\r
                  )}\r
                </AnimatePresence>\r
              </div>\r
            );\r
          })}\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:89},{fullname:"../../samples/Team sections/2.tsx",component:Th,fileCnt:`import { ArrowRightIcon } from 'lucide-react';\r
import {AnimatedBackground} from '@/components/motion-ui/animated-background';\r
import { Link } from "@/ui";\r
\r
const LINKS = [\r
  {\r
    customer: 'Jony Ive - LoveFrom',\r
    work: 'Design Engineering',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Jessica Walsh - &Walsh',\r
    work: 'Brand Design',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Paula Scher - Pentagram',\r
    work: 'Visual Design',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Dieter Rams - Braun',\r
    work: 'Product Engineering',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Kenya Hara - MUJI',\r
    work: 'Design Systems',\r
    href: '#',\r
  },\r
];\r
\r
export function Team2() {\r
  return (\r
    <div className='relative z-0 flex w-full flex-col items-start p-4'>\r
      <AnimatedBackground\r
        className='w-full bg-zinc-100 dark:bg-zinc-900'\r
        transition={{\r
          type: 'spring',\r
          bounce: 0.2,\r
          duration: 0.6,\r
        }}\r
        enableHover\r
      >\r
        {LINKS.map((link, index) => (\r
          <Link\r
            key={index}\r
            href={link.href}\r
            className='flex w-full items-center justify-between rounded-sm px-4 py-3'\r
            data-id={link.customer}\r
          >\r
            <div className='grid w-full grid-cols-1 md:grid-cols-12 md:gap-4'>\r
              <div className='col-span-3 text-sm font-medium text-zinc-900 dark:text-white'>\r
                {link.customer}\r
              </div>\r
              <div className='col-span-9 text-xs text-zinc-500 md:text-sm'>\r
                {link.work}\r
              </div>\r
            </div>\r
            <div>\r
              <ArrowRightIcon className='size-4 text-zinc-900 dark:text-white' />\r
            </div>\r
          </Link>\r
        ))}\r
      </AnimatedBackground>\r
    </div>\r
  );\r
}\r
`,uuid:90},{fullname:"../../samples/Team sections/3.tsx",component:Ph,fileCnt:`'use client';\r
import { useRef, useState } from 'react';\r
import {\r
  motion,\r
  AnimatePresence,\r
  useMotionValue,\r
  useSpring,\r
} from 'motion/react';\r
import { cn } from "@/utils";\r
\r
const SOCIAL_PROFILES = [\r
  {\r
    name: 'John Doe',\r
    src: '/avatars/1.png',\r
    job: 'Software Engineer',\r
  },\r
  {\r
    name: 'Jane Smith',\r
    src: '/avatars/2.png',\r
    job: 'Design Engineer',\r
  },\r
  {\r
    name: 'Fiona Doe',\r
    src: '/avatars/3.png',\r
    job: 'Designer',\r
  },\r
  {\r
    name: 'Richard Roe',\r
    src: '/avatars/4.png',\r
    job: 'Data Scientist',\r
  },\r
];\r
\r
const ICON_SIZE = 80;\r
const SPRING_CONFIG = {\r
  stiffness: 150,\r
  damping: 19,\r
  mass: 1.2,\r
};\r
\r
export function Team3() {\r
  const [socialHovered, setSocialHovered] = useState<string | null>(null);\r
\r
  return (\r
    <div className='py-24 sm:py-32'>\r
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
        <div className='flex flex-col items-center justify-center sm:flex-row'>\r
          {SOCIAL_PROFILES.map((social, index) => {\r
            const containerRef = useRef<HTMLDivElement>(null);\r
            const cursorX = useMotionValue(0);\r
            const springCursorX = useSpring(cursorX, SPRING_CONFIG);\r
            const rect = containerRef.current?.getBoundingClientRect();\r
\r
            const trackXPosition = (e: React.MouseEvent<HTMLDivElement>) => {\r
              if (!rect) {\r
                return;\r
              }\r
\r
              const x = e.clientX - rect.left - ICON_SIZE / 2;\r
              cursorX.set(x);\r
            };\r
\r
            return (\r
              <div\r
                className={cn(\r
                  \`relative flex cursor-pointer flex-col items-center justify-center px-6 py-6 text-center transition-opacity duration-200 sm:py-2\`,\r
                  socialHovered && socialHovered !== social.name\r
                    ? 'opacity-40'\r
                    : 'opacity-100'\r
                )}\r
                key={index}\r
                onMouseEnter={() => {\r
                  setSocialHovered(social.name);\r
                }}\r
                onMouseLeave={() => {\r
                  setSocialHovered(null);\r
                }}\r
                onMouseMove={trackXPosition}\r
                ref={containerRef}\r
              >\r
                <span className='text-lg text-zinc-900 dark:text-white'>\r
                  {social.name}\r
                </span>\r
                <span className='text-sm text-zinc-500 dark:text-zinc-400'>\r
                  {social.job}\r
                </span>\r
                <AnimatePresence initial={false}>\r
                  {socialHovered === social.name && (\r
                    <motion.div\r
                      key={social.name}\r
                      className='pointer-events-none absolute bottom-0 left-0 z-10 sm:pointer-events-auto'\r
                      initial={{\r
                        y: -55,\r
                        opacity: 0,\r
                        filter: 'blur(10px)',\r
                      }}\r
                      animate={{\r
                        y: -65,\r
                        opacity: 1,\r
                        filter: 'blur(0px)',\r
                      }}\r
                      exit={{\r
                        y: -55,\r
                        opacity: 0,\r
                        filter: 'blur(10px)',\r
                      }}\r
                      style={{\r
                        x: springCursorX,\r
                      }}\r
                      transition={SPRING_CONFIG}\r
                    >\r
                      <img\r
                        src={social.src}\r
                        alt={social.name}\r
                        className='rounded-[4px]'\r
                        style={{ width: ICON_SIZE, height: ICON_SIZE }}\r
                      />\r
                    </motion.div>\r
                  )}\r
                </AnimatePresence>\r
              </div>\r
            );\r
          })}\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:91},{fullname:"../../samples/Team sections/4.tsx",component:Eh,fileCnt:`'use client';\r
\r
import { useState } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
\r
const SOCIAL_PROFILES = [\r
  {\r
    name: 'Jon Doe',\r
    src: '/avatars/1.png',\r
    job: 'Software Engineer',\r
  },\r
  {\r
    name: 'Jane Doe',\r
    src: '/avatars/2.png',\r
    job: 'Product Manager',\r
  },\r
  {\r
    name: 'Fly Doe',\r
    src: '/avatars/3.png',\r
    job: 'Designer',\r
  },\r
  {\r
    name: 'Rich Doe',\r
    src: '/avatars/4.png',\r
    job: 'Data Scientist',\r
  },\r
  {\r
    name: 'John Doe',\r
    src: '/avatars/5.png',\r
    job: 'Software Engineer',\r
  },\r
];\r
\r
export function Team4() {\r
  return (\r
    <div className='py-24 sm:py-32'>\r
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
        <div className='flex justify-center -space-x-4'>\r
          {SOCIAL_PROFILES.map((social, index) => {\r
            return (\r
              <div\r
                className='relative rounded-full border-2 border-zinc-50 bg-white transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.2] dark:border-zinc-900 dark:bg-zinc-900'\r
                key={index}\r
              >\r
                <img\r
                  src={social.src}\r
                  alt={social.name}\r
                  key={index}\r
                  className='size-12 rounded-full'\r
                />\r
              </div>\r
            );\r
          })}\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:92},{fullname:"../../samples/Team sections/5.tsx",component:Dh,fileCnt:`'use client';\r
import { ArrowRightIcon } from 'lucide-react';\r
import { Link } from "@/ui";\r
import { motion } from 'motion/react';\r
import { useState } from 'react';\r
\r
const LINKS = [\r
  {\r
    customer: 'Jony Ive - LoveFrom',\r
    work: 'Design Engineering',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Jessica Walsh - &Walsh',\r
    work: 'Brand Design',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Paula Scher - Pentagram',\r
    work: 'Visual Design',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Dieter Rams - Braun',\r
    work: 'Product Engineering',\r
    href: '#',\r
  },\r
  {\r
    customer: 'Kenya Hara - MUJI',\r
    work: 'Design Systems',\r
    href: '#',\r
  },\r
];\r
\r
function LinkLoop({\r
  link,\r
  index,\r
}: {\r
  link: (typeof LINKS)[number];\r
  index: number;\r
}) {\r
  const [isHovered, setIsHovered] = useState(false);\r
\r
  const renderItem = () => {\r
    return (\r
      <div className='flex w-full items-center justify-between rounded-sm px-4 py-3'>\r
        <div className='grid w-full grid-cols-1 md:grid-cols-12 md:gap-4'>\r
          <div className='col-span-3 text-sm font-medium text-zinc-900 dark:text-white'>\r
            {link.customer}\r
          </div>\r
          <div className='col-span-9 text-xs text-zinc-500 md:text-sm'>\r
            {link.work}\r
          </div>\r
        </div>\r
        <div>\r
          <ArrowRightIcon className='size-4 text-zinc-900 dark:text-white' />\r
        </div>\r
      </div>\r
    );\r
  };\r
\r
  return (\r
    <Link key={index} href={link.href} data-id={link.customer}>\r
      <div\r
        className='relative w-full overflow-hidden'\r
        onMouseEnter={() => setIsHovered(true)}\r
        onMouseLeave={() => setIsHovered(false)}\r
      >\r
        <motion.div\r
          initial={{ y: 0 }}\r
          animate={{ y: isHovered ? -16 : 0, rotateX: isHovered ? 90 : 0 }}\r
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}\r
        >\r
          {renderItem()}\r
        </motion.div>\r
\r
        <motion.div\r
          className='absolute left-0 top-0 w-full'\r
          initial={{ y: 16 }}\r
          animate={{ y: isHovered ? 0 : 16, rotateX: isHovered ? 0 : 90 }}\r
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}\r
        >\r
          {renderItem()}\r
        </motion.div>\r
      </div>\r
    </Link>\r
  );\r
}\r
\r
export function Team5() {\r
  return (\r
    <div className='relative z-0 flex w-full flex-col items-start p-4'>\r
      <div className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-800'>\r
        {LINKS.map((link, index) => (\r
          <LinkLoop key={index} link={link} index={index} />\r
        ))}\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:93}],Testimonials:[{fullname:"../../samples/Testimonials/1.tsx",component:Fh,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
import { cn } from "@/utils";\r
\r
const CARDS = [\r
  {\r
    name: 'Jane Doe',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
  {\r
    name: 'John Smith',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
  {\r
    name: 'Alice Johnson',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos',\r
  },\r
  {\r
    name: 'Bob Brown',\r
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r
  },\r
  {\r
    name: 'Charlie White',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
  {\r
    name: 'Diana Green',\r
    content:\r
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
];\r
\r
function InfiniteSliderColumn({ className = '' }: { className?: string }) {\r
  const randomCards = CARDS.sort(() => Math.random() - 0.5);\r
\r
  return (\r
    <div\r
      className={cn(\r
        'flex h-[1000px] w-full overflow-y-hidden [mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]',\r
        className\r
      )}\r
      style={\r
        {\r
          '--shadow-size': '100px',\r
        } as React.CSSProperties\r
      }\r
    >\r
      <InfiniteSlider\r
        gap={24}\r
        direction='vertical'\r
        duration={20}\r
        className='flex'\r
      >\r
        {randomCards.map((card, index) => (\r
          <div className='rounded bg-zinc-100 p-4 dark:bg-zinc-900' key={index}>\r
            <div className='flex items-center gap-2'>\r
              <div className='size-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-400' />\r
              <span className='text-sm text-zinc-950 dark:text-zinc-50'>\r
                {card.name}\r
              </span>\r
            </div>\r
            <p className='mt-2 flex text-sm text-zinc-600 dark:text-zinc-400'>\r
              {card.content}\r
            </p>\r
          </div>\r
        ))}\r
      </InfiniteSlider>\r
    </div>\r
  );\r
}\r
\r
export function Testimonial1() {\r
  return (\r
    <div className='py-24 sm:py-32'>\r
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>\r
          <InfiniteSliderColumn />\r
          <InfiniteSliderColumn className='hidden md:block' />\r
          <InfiniteSliderColumn className='hidden lg:block' />\r
          <InfiniteSliderColumn className='hidden xl:block' />\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:94},{fullname:"../../samples/Testimonials/2.tsx",component:_h,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
\r
const CARDS = [\r
  {\r
    name: 'Jane Doe',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
  {\r
    name: 'John Smith',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
  {\r
    name: 'Alice Johnson',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r
  },\r
  {\r
    name: 'Bob Brown',\r
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r
  },\r
  {\r
    name: 'Charlie White',\r
    content:\r
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
  {\r
    name: 'Diana Green',\r
    content:\r
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',\r
  },\r
];\r
\r
function InfiniteSliderRow({ reverse }: { reverse?: boolean }) {\r
  const randomCards = CARDS.sort(() => Math.random() - 0.5);\r
\r
  return (\r
    <div\r
      className='flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]'\r
      style={\r
        {\r
          '--shadow-size': '100px',\r
        } as React.CSSProperties\r
      }\r
    >\r
      <InfiniteSlider\r
        gap={24}\r
        duration={40}\r
        reverse={reverse}\r
        durationOnHover={300}\r
      >\r
        {randomCards.map((card, idx) => (\r
          <div className='max-w-64 rounded bg-zinc-100 p-4 dark:bg-zinc-900' key={idx}>\r
            <div className='flex items-center gap-2'>\r
              <div className='size-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-400' />\r
              <span className='text-sm text-zinc-950 dark:text-zinc-50'>\r
                {card.name}\r
              </span>\r
            </div>\r
            <p className='mt-2 flex text-sm text-zinc-600 dark:text-zinc-400'>\r
              {card.content}\r
            </p>\r
          </div>\r
        ))}\r
      </InfiniteSlider>\r
    </div>\r
  );\r
}\r
\r
export function Testimonial2() {\r
  return (\r
    <div className='py-24 sm:py-32'>\r
      <div\r
        className='mx-auto flex max-w-7xl flex-col space-y-6 px-6 lg:px-8'\r
        style={\r
          {\r
            '--shadow-size': '200px',\r
          } as React.CSSProperties\r
        }\r
      >\r
        <InfiniteSliderRow />\r
        <InfiniteSliderRow reverse />\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:95}],"Text Sections":[{fullname:"../../samples/Text Sections/1.tsx",component:Hh,fileCnt:`'use client';\r
import { motion, useScroll, useTransform } from 'motion/react';\r
import { useRef } from 'react';\r
\r
const FEATURES = [\r
  {\r
    content: (\r
      <div className='text-xl font-medium text-black dark:text-white'>\r
        Effortless Creation: Transform ideas into stunning visuals with just a\r
        few words. Our AI understands context and nuance, bringing your\r
        imagination to life. Generate professional-quality visuals without\r
        complex software or design experience.\r
      </div>\r
    ),\r
  },\r
  {\r
    content: (\r
      <div className='text-xl font-medium text-black dark:text-white'>\r
        Unparalleled Quality: Experience AI-generated images with breathtaking\r
        detail and clarity. Every pixel is crafted to perfection, rivaling the\r
        work of master artists. Create images indistinguishable from those made\r
        by human experts.\r
      </div>\r
    ),\r
  },\r
  {\r
    content: (\r
      <div className='text-xl font-medium text-black dark:text-white'>\r
        Limitless Imagination: Explore infinite creative possibilities with\r
        cutting-edge AI. Our platform adapts to your needs, offering an\r
        ever-expanding universe of visual concepts. Push boundaries with\r
        genre-blending compositions and futuristic concepts.\r
      </div>\r
    ),\r
  },\r
];\r
\r
export function Text1() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const opacities = [\r
    useTransform(scrollYProgress, [0, 0.3, 0.4, 0.5, 1], [0.3, 1, 1, 0.3, 0.3]),\r
    useTransform(\r
      scrollYProgress,\r
      [0.4, 0.5, 0.6, 0.7, 1],\r
      [0.3, 1, 1, 0.3, 0.3]\r
    ),\r
    useTransform(\r
      scrollYProgress,\r
      [0.6, 0.7, 0.8, 0.9, 1],\r
      [0.3, 1, 1, 0.3, 0.3]\r
    ),\r
  ];\r
\r
  return (\r
    <div className='relative h-[300vh]'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8' ref={ref}>\r
            {FEATURES.map((feature, index) => (\r
              <motion.div\r
                key={index}\r
                style={{\r
                  opacity: opacities[index],\r
                }}\r
              >\r
                {feature.content}\r
              </motion.div>\r
            ))}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:96},{fullname:"../../samples/Text Sections/2.tsx",component:Uh,fileCnt:`'use client';\r
import { useScroll, useTransform, motion } from 'motion/react';\r
import { useRef } from 'react';\r
\r
export function Text2() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const createWordOpacity = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0.3, 1]);\r
\r
  return (\r
    <div className='relative h-[300vh]'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8' ref={ref}>\r
            {[\r
              'Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.',\r
              'Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts.',\r
              'Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts.',\r
            ].map((text, index) => (\r
              <motion.div\r
                key={index}\r
                className='text-xl font-medium text-black dark:text-white'\r
              >\r
                {text.split(' ').map((word, wordIndex, array) => {\r
                  const start = index * 0.3 + (wordIndex / array.length) * 0.3;\r
                  const end = start + (1 / array.length) * 0.3;\r
                  return (\r
                    <motion.span\r
                      key={wordIndex}\r
                      style={{ opacity: createWordOpacity(start, end) }}\r
                      className='mr-1 inline-block'\r
                    >\r
                      {word}\r
                    </motion.span>\r
                  );\r
                })}\r
              </motion.div>\r
            ))}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:97},{fullname:"../../samples/Text Sections/3.tsx",component:Gh,fileCnt:`'use client';\r
import {\r
  useScroll,\r
  useTransform,\r
  motion,\r
  useMotionTemplate,\r
} from 'motion/react';\r
import { useRef } from 'react';\r
\r
export function Text3() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);\r
\r
  const text = 'A new way to build AI apps';\r
\r
  return (\r
    <div className='relative h-[300vh]'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32' ref={ref}>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center space-y-8'>\r
            <motion.h1\r
              className='bg-[linear-gradient(-60deg,rgba(0,0,0,0)33.3%,rgba(0,0,0,1)66.7%)] bg-[length:300%_100%] bg-clip-text text-4xl text-black [-webkit-text-fill-color:transparent] dark:bg-[linear-gradient(-60deg,rgba(255,255,255,0)33.3%,rgba(255,255,255,1)66.7%)] dark:text-white'\r
              style={{\r
                backgroundPositionX: useMotionTemplate\`calc(100% - \${percentage}%)\`,\r
              }}\r
            >\r
              {text}\r
            </motion.h1>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:98},{fullname:"../../samples/Text Sections/4.tsx",component:$h,fileCnt:`'use client';\r
import {\r
  useScroll,\r
  useTransform,\r
  motion,\r
  useMotionTemplate,\r
} from 'motion/react';\r
import { useRef } from 'react';\r
\r
export function Text4() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const createCharOpacity = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0.3, 1]);\r
\r
  const createBlurValue = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [10, 0]);\r
\r
  const text = 'A new way to build AI apps';\r
\r
  return (\r
    <div className='relative h-[300vh]'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8' ref={ref}>\r
            <motion.h1 className='text-4xl text-black dark:text-white'>\r
              {text.split('').map((char, charIndex, array) => {\r
                const start = Math.max(\r
                  0,\r
                  (charIndex / array.length) * 0.6 - 0.1\r
                );\r
                const end = Math.min(0.9, start + 0.2);\r
\r
                return (\r
                  <motion.span\r
                    key={charIndex}\r
                    style={{\r
                      opacity: createCharOpacity(start, end),\r
                      filter: useMotionTemplate\`blur(\${createBlurValue(start, end)}px)\`,\r
                    }}\r
                    className='inline-block whitespace-pre'\r
                  >\r
                    {char}\r
                  </motion.span>\r
                );\r
              })}\r
            </motion.h1>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:99},{fullname:"../../samples/Text Sections/5.tsx",component:qh,fileCnt:`'use client';\r
import {\r
  useScroll,\r
  useTransform,\r
  motion,\r
  useMotionTemplate,\r
} from 'motion/react';\r
import { useRef } from 'react';\r
\r
export function Text5() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const createCharOpacity = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0.2, 1]);\r
\r
  const createBlurValue = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [4, 0]);\r
\r
  const text =\r
    'Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.';\r
\r
  return (\r
    <div className='relative h-[300vh]'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8' ref={ref}>\r
            <div className='text-xl font-medium text-black dark:text-white'>\r
              {text.split(' ').map((word, wordIndex, array) => {\r
                const start = Math.max(\r
                  0,\r
                  (wordIndex / array.length) * 0.6 - 0.1\r
                );\r
                const end = Math.min(0.9, start + 0.2);\r
\r
                return (\r
                  <motion.span\r
                    key={wordIndex}\r
                    style={{\r
                      opacity: createCharOpacity(start, end),\r
                      filter: useMotionTemplate\`blur(\${createBlurValue(start, end)}px)\`,\r
                    }}\r
                    className='inline-block whitespace-pre'\r
                  >\r
                    {word + ' '}\r
                  </motion.span>\r
                );\r
              })}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:100},{fullname:"../../samples/Text Sections/6.tsx",component:Wh,fileCnt:`'use client';\r
\r
import { ReactNode, useState } from 'react';\r
import { motion, AnimatePresence } from 'motion/react';\r
\r
// iamges from www.cosmos.so/primomoka/atletica-chakras-general and https://www.cosmos.so/e/1675602603\r
\r
const IMAGES = [\r
  {\r
    image:\r
      'https://images.beta.cosmos.so/783ec54f-c1eb-4606-a436-05c5876b47b7?format=jpeg',\r
    alt: 'Image 1',\r
    description: 'A stunning view of the mountains at sunrise.',\r
  },\r
  {\r
    image:\r
      'https://images.beta.cosmos.so/f4c98298-4e01-4cee-853f-bff060323b00?format=jpeg',\r
    alt: 'Image 2',\r
    description: 'A serene beach with crystal clear waters.',\r
  },\r
  {\r
    image:\r
      'https://images.beta.cosmos.so/5bad355c-2311-4926-abbb-9e1e26ee9372?format=jpeg',\r
    alt: 'Image 3',\r
    description: 'A bustling cityscape at night.',\r
  },\r
  {\r
    image:\r
      'https://images.beta.cosmos.so/684428eb-b1cc-4f14-9519-f8034535e4e3?format=jpeg',\r
    alt: 'Image 4',\r
    description: 'A tranquil forest path in autumn.',\r
  },\r
  {\r
    image:\r
      'https://images.beta.cosmos.so/d323e261-0242-47db-ac3e-3d97f2608d15?format=jpeg',\r
    alt: 'Image 5',\r
    description: 'A vibrant field of wildflowers in spring.',\r
  },\r
];\r
\r
function LinkWithImagesOnHover({\r
  children,\r
  images,\r
}: {\r
  children: ReactNode;\r
  images: { image: string; alt: string; description: string }[];\r
}) {\r
  const [isHovered, setIsHovered] = useState(false);\r
\r
  return (\r
    <a\r
      className='relative inline-flex whitespace-pre text-zinc-900 dark:text-white'\r
      onMouseEnter={() => setIsHovered(true)}\r
      onMouseLeave={() => setIsHovered(false)}\r
      href='#'\r
    >\r
      {children}\r
      <AnimatePresence initial={false}>\r
        {isHovered && (\r
          <motion.div\r
            className='absolute bottom-full left-1/2 z-10 mb-2 flex -translate-x-1/2'\r
            initial={{ opacity: 0, scale: 0.5, y: 10 }}\r
            animate={{ opacity: 1, scale: 1, y: 0 }}\r
            exit={{ opacity: 0, scale: 0.5, y: 10 }}\r
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}\r
          >\r
            {images.map((img, index) => (\r
              <motion.div\r
                key={\`\${img.image}-\${index}\`}\r
                className='relative aspect-video h-full w-[120px] overflow-hidden rounded-[4px] shadow-md'\r
                style={{\r
                  marginLeft: index > 0 ? '-0.5rem' : '0',\r
                  zIndex: index,\r
                }}\r
                initial={{\r
                  opacity: 0,\r
                  scale: 0.6,\r
                  x: index === 0 ? 0 : -50 * index,\r
                  y:\r
                    index === 0\r
                      ? 0\r
                      : index % 2 === 0\r
                        ? -Math.random() * 20\r
                        : Math.random() * 20,\r
                  rotate:\r
                    index === 0\r
                      ? 0\r
                      : index % 2 === 0\r
                        ? -Math.random() * 8\r
                        : Math.random() * 8,\r
                }}\r
                animate={{\r
                  opacity: 1,\r
                  scale: 1,\r
                }}\r
                transition={{\r
                  delay: index * 0.08,\r
                  type: 'spring',\r
                  stiffness: 300,\r
                  damping: 25,\r
                }}\r
              >\r
                <img\r
                  src={img.image}\r
                  alt={img.alt}\r
                  className='absolute inset-0 h-full w-full object-cover'\r
                />\r
              </motion.div>\r
            ))}\r
          </motion.div>\r
        )}\r
      </AnimatePresence>\r
    </a>\r
  );\r
}\r
\r
export function Text6() {\r
  return (\r
    <div className='py-24 sm:py-32'>\r
      <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
        <p className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>\r
          Unparalleled Quality: Experience AI-generated images with breathtaking{' '}\r
          <LinkWithImagesOnHover images={IMAGES.slice(0, 2)}>\r
            detail\r
          </LinkWithImagesOnHover>{' '}\r
          and{' '}\r
          <LinkWithImagesOnHover images={IMAGES.slice(2, 5)}>\r
            clarity\r
          </LinkWithImagesOnHover>\r
          . Every pixel is crafted to perfection, rivaling the work of master\r
          artists. Create images indistinguishable from those made by human\r
          experts.\r
        </p>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:101},{fullname:"../../samples/Text Sections/7.tsx",component:Yh,fileCnt:`'use client';\r
import { motion, useScroll, useTransform } from 'motion/react';\r
import { useRef } from 'react';\r
\r
export function Text7() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);\r
\r
  return (\r
    <motion.div\r
      ref={ref}\r
      className='relative h-[300vh]'\r
      style={\r
        {\r
          '--opacity': opacity,\r
        } as React.CSSProperties\r
      }\r
    >\r
      <div className='sticky top-0 flex h-screen items-center justify-center'>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <div className='bg-[radial-gradient(50%_50%_at_50%_50%,theme(colors.purple.100),theme(colors.purple.500)_25%,transparent_50%)] bg-[length:300%_900%] bg-clip-text bg-[50%_calc(100%*var(--opacity))] text-xl font-medium text-transparent'>\r
            Effortless Creation: Transform ideas into stunning visuals with just\r
            a few words. Our AI understands context and nuance, bringing your\r
            imagination to life. Generate professional-quality visuals without\r
            complex software or design experience.\r
          </div>\r
        </div>\r
      </div>\r
    </motion.div>\r
  );\r
}\r
`,uuid:102},{fullname:"../../samples/Text Sections/8.tsx",component:Xh,fileCnt:`'use client';\r
import { motion, useScroll, useTransform } from 'motion/react';\r
import { useRef } from 'react';\r
\r
export function Text8() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);\r
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [8, 0, 0, 8]);\r
\r
  return (\r
    <motion.div\r
      ref={ref}\r
      className='relative h-[300vh]'\r
      style={\r
        {\r
          '--opacity': opacity,\r
          '--blur': blur,\r
        } as React.CSSProperties\r
      }\r
    >\r
      <div className='sticky top-0 flex h-screen items-center justify-center'>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <motion.div\r
            className='bg-[radial-gradient(50%_50%_at_50%_50%,theme(colors.zinc.100),theme(colors.zinc.500)_25%,transparent_50%)] bg-[length:300%_900%] bg-clip-text bg-[50%_calc(100%*var(--opacity))] text-xl font-medium text-transparent'\r
            style={{\r
              filter: 'blur(calc(var(--blur) * 1px))',\r
            }}\r
          >\r
            Effortless Creation: Transform ideas into stunning visuals with just\r
            a few words. Our AI understands context and nuance, bringing your\r
            imagination to life. Generate professional-quality visuals without\r
            complex software or design experience.\r
          </motion.div>\r
        </div>\r
      </div>\r
    </motion.div>\r
  );\r
}\r
`,uuid:103},{fullname:"../../samples/Text Sections/9.tsx",component:Jh,fileCnt:`'use client';\r
import { motion, useScroll, useTransform } from 'motion/react';\r
import { useRef } from 'react';\r
\r
const FEATURES = [\r
  {\r
    content: (\r
      <div className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>\r
        Effortless Creation: Transform ideas into stunning visuals with just a\r
        few words.{' '}\r
        <span className='text-zinc-900 dark:text-white'>\r
          Our AI understands context and nuance, bringing your imagination to\r
          life\r
        </span>\r
        . Generate professional-quality visuals without complex software or\r
        design experience.\r
      </div>\r
    ),\r
  },\r
  {\r
    content: (\r
      <div className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>\r
        Unparalleled Quality: Experience AI-generated images with breathtaking\r
        detail and clarity.{' '}\r
        <span className='text-zinc-900 dark:text-white'>\r
          Every pixel is crafted to perfection, rivaling the work of master\r
          artists\r
        </span>\r
        . Create images indistinguishable from those made by human experts.\r
      </div>\r
    ),\r
  },\r
  {\r
    content: (\r
      <div className='text-xl font-medium text-zinc-500 dark:text-zinc-400'>\r
        Limitless Imagination: Explore infinite creative possibilities with\r
        cutting-edge AI.{' '}\r
        <span className='text-zinc-900 dark:text-white'>\r
          Our platform adapts to your needs, offering an ever-expanding universe\r
          of visual concepts\r
        </span>\r
        . Push boundaries with genre-blending compositions and futuristic\r
        concepts.\r
      </div>\r
    ),\r
  },\r
];\r
\r
export function Text9() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const opacities = [\r
    useTransform(scrollYProgress, [0.2, 0.25, 1], [0, 1, 1]),\r
    useTransform(scrollYProgress, [0.25, 0.3, 1], [0, 1, 1]),\r
    useTransform(scrollYProgress, [0.3, 0.35, 1], [0, 1, 1]),\r
  ];\r
\r
  const yTransforms = [\r
    useTransform(scrollYProgress, [0.2, 0.25, 1], [10, 0, 0]),\r
    useTransform(scrollYProgress, [0.25, 0.3, 1], [10, 0, 0]),\r
    useTransform(scrollYProgress, [0.3, 0.35, 1], [10, 0, 0]),\r
  ];\r
\r
  return (\r
    <div className='relative h-[300vh]'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-3' ref={ref}>\r
            {FEATURES.map((feature, index) => (\r
              <motion.div\r
                key={index}\r
                style={{\r
                  opacity: opacities[index],\r
                  y: yTransforms[index],\r
                }}\r
              >\r
                {feature.content}\r
              </motion.div>\r
            ))}\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:104},{fullname:"../../samples/Text Sections/10.tsx",component:Qh,fileCnt:`'use client';\r
import {\r
  motion,\r
  useScroll,\r
  useTransform,\r
  useMotionTemplate,\r
} from 'motion/react';\r
import React, { useRef } from 'react';\r
\r
export function Text10() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const createCharOpacity = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0.3, 1]);\r
\r
  const createBlurValue = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [10, 0]);\r
\r
  const text = 'We want to create a world where AI is accessible to everyone.';\r
\r
  return (\r
    <div className='relative h-[300vh] w-full'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-2xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8' ref={ref}>\r
            <h1 className='text-center text-4xl text-zinc-900 dark:text-white'>\r
              {text.split('').map((char, charIndex, array) => {\r
                const start = Math.max(\r
                  0,\r
                  (charIndex / array.length) * 0.6 - 0.1\r
                );\r
                const end = Math.min(0.9, start + 0.2);\r
\r
                return (\r
                  <motion.span\r
                    key={charIndex}\r
                    style={{\r
                      opacity: createCharOpacity(start, end),\r
                      filter: useMotionTemplate\`blur(\${createBlurValue(start, end)}px)\`,\r
                    }}\r
                  >\r
                    {char}\r
                  </motion.span>\r
                );\r
              })}\r
            </h1>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:105},{fullname:"../../samples/Text Sections/11.tsx",component:Zh,fileCnt:`'use client';\r
import {\r
  motion,\r
  useScroll,\r
  useTransform,\r
  useMotionTemplate,\r
} from 'motion/react';\r
import React, { useRef } from 'react';\r
\r
export function Text11() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const createCharOpacity = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0, 1]);\r
\r
  const createCharY = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0, 4]);\r
\r
  const text = 'We want to create a world where AI is accessible to everyone.';\r
\r
  return (\r
    <div className='relative h-[300vh] w-full'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-2xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8' ref={ref}>\r
            <h1 className='text-center text-4xl text-zinc-900 dark:text-white'>\r
              {text.split('').map((char, charIndex, array) => {\r
                const start = Math.max(0, (charIndex / array.length) * 0.9);\r
                const end = Math.min(0.9, start + 0.2);\r
\r
                return (\r
                  <motion.span\r
                    key={charIndex}\r
                    style={{\r
                      opacity: createCharOpacity(start, end),\r
                      y: createCharY(start, end),\r
                    }}\r
                    className='inline-block whitespace-pre'\r
                  >\r
                    {char}\r
                  </motion.span>\r
                );\r
              })}\r
            </h1>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:106},{fullname:"../../samples/Text Sections/12.tsx",component:e0,fileCnt:`'use client';\r
import {\r
  motion,\r
  useScroll,\r
  useTransform,\r
  useMotionTemplate,\r
} from 'motion/react';\r
import React, { useRef } from 'react';\r
\r
export function Text12() {\r
  const ref = useRef(null);\r
  const { scrollYProgress } = useScroll({\r
    target: ref,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  const createCharOpacity = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0, 1]);\r
\r
  const createCharY = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [0, 4]);\r
\r
  const createBlurValue = (start: number, end: number) =>\r
    useTransform(scrollYProgress, [start, end], [6, 0]);\r
\r
  const text = 'Introducing a new way to craft beautiful websites, faster';\r
\r
  return (\r
    <div className='relative h-[300vh] w-full'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-2xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8' ref={ref}>\r
            <h1 className='text-center text-4xl font-normal text-zinc-900 dark:text-white'>\r
              {text.split(' ').map((word, wordIndex, wordArray) => (\r
                <span\r
                  key={wordIndex}\r
                  className='inline-block whitespace-nowrap'\r
                >\r
                  {word.split('').map((char, charIndex, charArray) => {\r
                    const overallIndex = text.indexOf(word) + charIndex;\r
                    const start = Math.max(\r
                      0,\r
                      (overallIndex / text.length) * 0.9\r
                    );\r
                    const end = Math.min(0.9, start + 0.2);\r
\r
                    const isLastChar = charIndex === charArray.length - 1;\r
                    const isLastWord = wordIndex === wordArray.length - 1;\r
\r
                    return (\r
                      <motion.span\r
                        key={charIndex}\r
                        style={{\r
                          opacity: createCharOpacity(start, end),\r
                          y: createCharY(start, end),\r
                          filter: useMotionTemplate\`blur(\${createBlurValue(start, end)}px)\`,\r
                        }}\r
                        className='inline-block'\r
                      >\r
                        {char}\r
                        {isLastChar && !isLastWord && '\\u00A0'}\r
                      </motion.span>\r
                    );\r
                  })}\r
                </span>\r
              ))}\r
            </h1>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:107},{fullname:"../../samples/Text Sections/13.tsx",component:r0,fileCnt:`'use client';\r
import { InView } from "@/components/motion-ui/in-view";\r
\r
const HighlightedText = ({ children }: { children: React.ReactNode }) => {\r
  return (\r
    <InView\r
      viewOptions={{\r
        once: true,\r
        margin: '0px 0px -100px 0px',\r
      }}\r
      variants={{\r
        visible: {\r
          backgroundPosition: '0% 0',\r
        },\r
        hidden: {\r
          backgroundPosition: '100% 0',\r
        },\r
      }}\r
      transition={{ duration: 0.5 }}\r
      //tm: className='inline-block bg-[linear-gradient(90deg,theme(colors.black)_50%,transparent_50%)] bg-[length:200%_100%] bg-clip-text text-transparent dark:bg-[linear-gradient(90deg,theme(colors.white)_50%,transparent_50%)]'\r
    >\r
      {children}\r
    </InView>\r
  );\r
};\r
\r
export function Text13() {\r
  return (\r
    <div className='relative h-[300vh] w-full'>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center justify-center'>\r
            <p className='text-sm text-zinc-500'>Scroll down</p>\r
          </div>\r
        </div>\r
      </div>\r
      <div className='py-24 sm:py-32'>\r
        <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
          <div className='flex flex-col items-center space-y-8'>\r
            <div className='text-xl text-zinc-500 dark:text-zinc-400'>\r
              Effortless Creation: Transform ideas into stunning visuals with\r
              just a few words.{' '}\r
              <HighlightedText>\r
                Our AI understands context and nuance\r
              </HighlightedText>\r
              , bringing your imagination to life. Generate professional-quality\r
              visuals without complex software or{' '}\r
              <HighlightedText>design experience</HighlightedText>.\r
            </div>\r
            <div className='text-xl text-zinc-500 dark:text-zinc-400'>\r
              Unparalleled Quality: Experience AI-generated images with\r
              breathtaking detail and clarity.{' '}\r
              <HighlightedText>\r
                Every pixel is crafted to perfection\r
              </HighlightedText>\r
              , rivaling the work of master artists. Create images\r
              indistinguishable from those made by human experts.\r
            </div>\r
            <div className='text-xl text-zinc-500 dark:text-zinc-400'>\r
              Limitless Imagination: Explore infinite creative possibilities\r
              with cutting-edge AI. Our platform adapts to your needs, offering\r
              an ever-expanding universe of visual concepts.{' '}\r
              <HighlightedText>\r
                Push boundaries with genre-blending compositions\r
              </HighlightedText>{' '}\r
              and futuristic concepts.\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:108},{fullname:"../../samples/Text Sections/14.tsx",component:l0,fileCnt:`'use client';\r
import {\r
  Disclosure,\r
  DisclosureTrigger,\r
  DisclosureContent,\r
} from "@/components/motion-ui/disclosure";\r
import { motion } from 'motion/react';\r
import { useState } from 'react';\r
\r
const TRANSITION = {\r
  ease: [0.075, 0.82, 0.165, 1],\r
  duration: 0.25,\r
};\r
\r
export function Text14() {\r
  const [toggle, setToggle] = useState(false);\r
\r
  return (\r
    <div className='py-24 sm:py-32'>\r
      <div className='mx-auto max-w-xl px-6 lg:px-8'>\r
        <div className='relative'>\r
          <motion.p\r
            className='text-xl text-zinc-500 dark:text-zinc-400'\r
            initial={{\r
              maskImage:\r
                'linear-gradient(to top,#000,#000,transparent 0,#000 200px)',\r
            }}\r
            animate={{\r
              maskImage: !toggle\r
                ? 'linear-gradient(to top,#000,#000,transparent 0,#000 200px)'\r
                : 'linear-gradient(to top,#000,#000,transparent 0,#000 0px)',\r
            }}\r
            transition={{\r
              ...TRANSITION,\r
              duration: toggle\r
                ? TRANSITION.duration / 2\r
                : TRANSITION.duration * 2,\r
            }}\r
          >\r
            Unparalleled Quality: Experience AI-generated images with\r
            breathtaking detail and clarity. Every pixel is crafted to\r
            perfection , rivaling the work of master artists. Create images\r
            indistinguishable from those made by human experts.\r
          </motion.p>\r
          <Disclosure transition={TRANSITION} onOpenChange={setToggle}>\r
            <DisclosureContent>\r
              <div className='flex flex-col items-start space-y-8'>\r
                <p className='pt-8 text-xl text-zinc-500 dark:text-zinc-400'>\r
                  Limitless Imagination: Explore infinite creative possibilities\r
                  with cutting-edge AI. Our platform adapts to your needs,\r
                  offering an ever-expanding universe of visual concepts. Push\r
                  boundaries with genre-blending compositions and futuristic\r
                  concepts.\r
                </p>\r
                <p className='text-xl text-zinc-500 dark:text-zinc-400'>\r
                  Effortless Creation: Transform ideas into stunning visuals\r
                  with just a few words. Our AI understands context and nuance ,\r
                  bringing your imagination to life. Generate\r
                  professional-quality visuals without complex software or\r
                  design experience\r
                </p>\r
              </div>\r
            </DisclosureContent>\r
            <DisclosureTrigger>\r
              <button\r
                className='mt-4 w-full py-2 text-left text-xl text-black dark:text-white'\r
                type='button'\r
              >\r
                {toggle ? 'Show less' : 'Show more'}\r
              </button>\r
            </DisclosureTrigger>\r
          </Disclosure>\r
        </div>\r
      </div>\r
    </div>\r
  );\r
}\r
`,uuid:109},{fullname:"../../samples/Text Sections/15.tsx",component:d0,fileCnt:`'use client';\r
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';\r
import { useRef } from 'react';\r
\r
const getLeftPosition = (direction: string) => {\r
  switch (direction) {\r
    case 'left':\r
      return '-50%';\r
    case 'right':\r
      return '-20%';\r
    default:\r
      return '0%';\r
  }\r
};\r
\r
export function Text15() {\r
  const container = useRef<HTMLDivElement | null>(null);\r
  const { scrollYProgress } = useScroll({\r
    target: container,\r
    offset: ['start end', 'end start'],\r
  });\r
\r
  return (\r
    <main className='overflow-hidden'>\r
      <div className='h-[90vh]' />\r
      <div ref={container} className='flex flex-col space-y-10'>\r
        {['left', 'right', 'left'].map((direction, index) => (\r
          <ScrollSlide\r
            key={index}\r
            direction={direction}\r
            progress={scrollYProgress}\r
            left={getLeftPosition(direction)}\r
          />\r
        ))}\r
      </div>\r
      <div className='h-[90vh]' />\r
    </main>\r
  );\r
}\r
\r
const ScrollSlide = ({\r
  direction,\r
  progress,\r
  left,\r
}: {\r
  direction: string;\r
  progress: MotionValue<number>;\r
  left: string;\r
}) => {\r
  const directionMultiplier = direction === 'left' ? -1 : 1;\r
  const translateX = useTransform(\r
    progress,\r
    [0, 1],\r
    [150 * directionMultiplier, -150 * directionMultiplier]\r
  );\r
\r
  return (\r
    <motion.div\r
      style={{ x: translateX, left }}\r
      className='relative flex whitespace-nowrap'\r
    >\r
      {[...Array(3)].map((_, index) => (\r
        <div className='flex items-center gap-5 px-5' key={index}>\r
          <p className='text-4xl md:text-7xl'>Design + Engineering</p>\r
        </div>\r
      ))}\r
    </motion.div>\r
  );\r
};\r
`,uuid:110}]};export{At as R,f as a,p0 as b,$ as c,nc as d,v0 as e,m0 as f,va as g,s as j,f0 as l,ya as r};
