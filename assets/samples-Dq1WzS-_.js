import{j as e,R as Pe,r as c}from"./radix-qmpjnCj5.js";import{u as Q,a as se,m as x,A as C,b as Je,c as b,M as St,d as A,e as Ht,f as ot,z as Qe,g as oe}from"./vendor-dom-Cz_HvNXD.js";const Ke="-",Bt=t=>{const r=Gt(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=t;return{getClassGroupId:o=>{const l=o.split(Ke);return l[0]===""&&l.length!==1&&l.shift(),Ct(l,r)||Vt(o)},getConflictingClassGroupIds:(o,l)=>{const d=n[o]||[];return l&&a[o]?[...d,...a[o]]:d}}},Ct=(t,r)=>{var o;if(t.length===0)return r.classGroupId;const n=t[0],a=r.nextPart.get(n),s=a?Ct(t.slice(1),a):void 0;if(s)return s;if(r.validators.length===0)return;const i=t.join(Ke);return(o=r.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},lt=/^\[(.+)\]$/,Vt=t=>{if(lt.test(t)){const r=lt.exec(t)[1],n=r==null?void 0:r.substring(0,r.indexOf(":"));if(n)return"arbitrary.."+n}},Gt=t=>{const{theme:r,prefix:n}=t,a={nextPart:new Map,validators:[]};return Ut(Object.entries(t.classGroups),n).forEach(([i,o])=>{We(o,a,i,r)}),a},We=(t,r,n,a)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?r:ct(r,s);i.classGroupId=n;return}if(typeof s=="function"){if(qt(s)){We(s(a),r,n,a);return}r.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{We(o,ct(r,i),n,a)})})},ct=(t,r)=>{let n=t;return r.split(Ke).forEach(a=>{n.nextPart.has(a)||n.nextPart.set(a,{nextPart:new Map,validators:[]}),n=n.nextPart.get(a)}),n},qt=t=>t.isThemeGetter,Ut=(t,r)=>r?t.map(([n,a])=>{const s=a.map(i=>typeof i=="string"?r+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[r+o,l])):i);return[n,s]}):t,Yt=t=>{if(t<1)return{get:()=>{},set:()=>{}};let r=0,n=new Map,a=new Map;const s=(i,o)=>{n.set(i,o),r++,r>t&&(r=0,a=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=a.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},At="!",$t=t=>{const{separator:r,experimentalParseClassName:n}=t,a=r.length===1,s=r[0],i=r.length,o=l=>{const d=[];let m=0,u=0,p;for(let v=0;v<l.length;v++){let N=l[v];if(m===0){if(N===s&&(a||l.slice(v,v+i)===r)){d.push(l.slice(u,v)),u=v+i;continue}if(N==="/"){p=v;continue}}N==="["?m++:N==="]"&&m--}const f=d.length===0?l:l.substring(u),h=f.startsWith(At),y=h?f.substring(1):f,w=p&&p>u?p-u:void 0;return{modifiers:d,hasImportantModifier:h,baseClassName:y,maybePostfixModifierPosition:w}};return n?l=>n({className:l,parseClassName:o}):o},Xt=t=>{if(t.length<=1)return t;const r=[];let n=[];return t.forEach(a=>{a[0]==="["?(r.push(...n.sort(),a),n=[]):n.push(a)}),r.push(...n.sort()),r},Wt=t=>({cache:Yt(t.cacheSize),parseClassName:$t(t),...Bt(t)}),Jt=/\s+/,Qt=(t,r)=>{const{parseClassName:n,getClassGroupId:a,getConflictingClassGroupIds:s}=r,i=[],o=t.trim().split(Jt);let l="";for(let d=o.length-1;d>=0;d-=1){const m=o[d],{modifiers:u,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:h}=n(m);let y=!!h,w=a(y?f.substring(0,h):f);if(!w){if(!y){l=m+(l.length>0?" "+l:l);continue}if(w=a(f),!w){l=m+(l.length>0?" "+l:l);continue}y=!1}const v=Xt(u).join(":"),N=p?v+At:v,j=N+w;if(i.includes(j))continue;i.push(j);const L=s(w,y);for(let T=0;T<L.length;++T){const I=L[T];i.push(N+I)}l=m+(l.length>0?" "+l:l)}return l};function Kt(){let t=0,r,n,a="";for(;t<arguments.length;)(r=arguments[t++])&&(n=It(r))&&(a&&(a+=" "),a+=n);return a}const It=t=>{if(typeof t=="string")return t;let r,n="";for(let a=0;a<t.length;a++)t[a]&&(r=It(t[a]))&&(n&&(n+=" "),n+=r);return n};function Zt(t,...r){let n,a,s,i=o;function o(d){const m=r.reduce((u,p)=>p(u),t());return n=Wt(m),a=n.cache.get,s=n.cache.set,i=l,l(d)}function l(d){const m=a(d);if(m)return m;const u=Qt(d,n);return s(d,u),u}return function(){return i(Kt.apply(null,arguments))}}const S=t=>{const r=n=>n[t]||[];return r.isThemeGetter=!0,r},Tt=/^\[(?:([a-z-]+):)?(.+)\]$/i,er=/^\d+\/\d+$/,tr=new Set(["px","full","screen"]),rr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,nr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ar=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ir=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,O=t=>ie(t)||tr.has(t)||er.test(t),Y=t=>le(t,"length",pr),ie=t=>!!t&&!Number.isNaN(Number(t)),He=t=>le(t,"number",ie),ue=t=>!!t&&Number.isInteger(Number(t)),or=t=>t.endsWith("%")&&ie(t.slice(0,-1)),g=t=>Tt.test(t),$=t=>rr.test(t),lr=new Set(["length","size","percentage"]),cr=t=>le(t,lr,Lt),dr=t=>le(t,"position",Lt),mr=new Set(["image","url"]),ur=t=>le(t,mr,gr),xr=t=>le(t,"",fr),xe=()=>!0,le=(t,r,n)=>{const a=Tt.exec(t);return a?a[1]?typeof r=="string"?a[1]===r:r.has(a[1]):n(a[2]):!1},pr=t=>nr.test(t)&&!ar.test(t),Lt=()=>!1,fr=t=>ir.test(t),gr=t=>sr.test(t),hr=()=>{const t=S("colors"),r=S("spacing"),n=S("blur"),a=S("brightness"),s=S("borderColor"),i=S("borderRadius"),o=S("borderSpacing"),l=S("borderWidth"),d=S("contrast"),m=S("grayscale"),u=S("hueRotate"),p=S("invert"),f=S("gap"),h=S("gradientColorStops"),y=S("gradientColorStopPositions"),w=S("inset"),v=S("margin"),N=S("opacity"),j=S("padding"),L=S("saturate"),T=S("scale"),I=S("sepia"),M=S("skew"),R=S("space"),ce=S("translate"),te=()=>["auto","contain","none"],re=()=>["auto","hidden","clip","visible","scroll"],ne=()=>["auto",g,r],k=()=>[g,r],de=()=>["",O,Y],J=()=>["auto",ie,g],Ne=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],je=()=>["solid","dashed","dotted","double","none"],it=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],_e=()=>["start","end","center","between","around","evenly","stretch"],me=()=>["","0",g],st=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>[ie,g];return{cacheSize:500,separator:":",theme:{colors:[xe],spacing:[O,Y],blur:["none","",$,g],brightness:F(),borderColor:[t],borderRadius:["none","","full",$,g],borderSpacing:k(),borderWidth:de(),contrast:F(),grayscale:me(),hueRotate:F(),invert:me(),gap:k(),gradientColorStops:[t],gradientColorStopPositions:[or,Y],inset:ne(),margin:ne(),opacity:F(),padding:k(),saturate:F(),scale:F(),sepia:me(),skew:F(),space:k(),translate:k()},classGroups:{aspect:[{aspect:["auto","square","video",g]}],container:["container"],columns:[{columns:[$]}],"break-after":[{"break-after":st()}],"break-before":[{"break-before":st()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ne(),g]}],overflow:[{overflow:re()}],"overflow-x":[{"overflow-x":re()}],"overflow-y":[{"overflow-y":re()}],overscroll:[{overscroll:te()}],"overscroll-x":[{"overscroll-x":te()}],"overscroll-y":[{"overscroll-y":te()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ue,g]}],basis:[{basis:ne()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",g]}],grow:[{grow:me()}],shrink:[{shrink:me()}],order:[{order:["first","last","none",ue,g]}],"grid-cols":[{"grid-cols":[xe]}],"col-start-end":[{col:["auto",{span:["full",ue,g]},g]}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":[xe]}],"row-start-end":[{row:["auto",{span:[ue,g]},g]}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",g]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",g]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",..._e()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._e(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._e(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[j]}],px:[{px:[j]}],py:[{py:[j]}],ps:[{ps:[j]}],pe:[{pe:[j]}],pt:[{pt:[j]}],pr:[{pr:[j]}],pb:[{pb:[j]}],pl:[{pl:[j]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",g,r]}],"min-w":[{"min-w":[g,r,"min","max","fit"]}],"max-w":[{"max-w":[g,r,"none","full","min","max","fit","prose",{screen:[$]},$]}],h:[{h:[g,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[g,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[g,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[g,r,"auto","min","max","fit"]}],"font-size":[{text:["base",$,Y]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",He]}],"font-family":[{font:[xe]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",g]}],"line-clamp":[{"line-clamp":["none",ie,He]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",O,g]}],"list-image":[{"list-image":["none",g]}],"list-style-type":[{list:["none","disc","decimal",g]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...je(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",O,Y]}],"underline-offset":[{"underline-offset":["auto",O,g]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:k()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",g]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",g]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ne(),dr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",cr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ur]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[...je(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:je()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...je()]}],"outline-offset":[{"outline-offset":[O,g]}],"outline-w":[{outline:[O,Y]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:de()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[O,Y]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",$,xr]}],"shadow-color":[{shadow:[xe]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":[...it(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":it()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[a]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",$,g]}],grayscale:[{grayscale:[m]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[L]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[m]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",g]}],duration:[{duration:F()}],ease:[{ease:["linear","in","out","in-out",g]}],delay:[{delay:F()}],animate:[{animate:["none","spin","ping","pulse","bounce",g]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[ue,g]}],"translate-x":[{"translate-x":[ce]}],"translate-y":[{"translate-y":[ce]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",g]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",g]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":k()}],"scroll-mx":[{"scroll-mx":k()}],"scroll-my":[{"scroll-my":k()}],"scroll-ms":[{"scroll-ms":k()}],"scroll-me":[{"scroll-me":k()}],"scroll-mt":[{"scroll-mt":k()}],"scroll-mr":[{"scroll-mr":k()}],"scroll-mb":[{"scroll-mb":k()}],"scroll-ml":[{"scroll-ml":k()}],"scroll-p":[{"scroll-p":k()}],"scroll-px":[{"scroll-px":k()}],"scroll-py":[{"scroll-py":k()}],"scroll-ps":[{"scroll-ps":k()}],"scroll-pe":[{"scroll-pe":k()}],"scroll-pt":[{"scroll-pt":k()}],"scroll-pr":[{"scroll-pr":k()}],"scroll-pb":[{"scroll-pb":k()}],"scroll-pl":[{"scroll-pl":k()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",g]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[O,Y,He]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},vr=Zt(hr);function br(...t){return t.filter(Boolean).join(" ")}function z(...t){return vr(br(...t))}function oi(t){return(t||"").replace(/^\//,"").split(/[\\\/]/).pop()||""}const dt={type:"spring",stiffness:122,damping:30,mass:5};function yr({img:t,alt:r,position:n,multiplier:a,mouseX:s,mouseY:i}){const o=se(0,dt),l=se(0,dt);return s.on("change",d=>{o.set(d*a.x)}),i.on("change",d=>{l.set(d*a.y)}),e.jsxs(x.div,{className:"absolute aspect-square w-[80px] bg-zinc-100 dark:bg-zinc-800",style:{left:n.left,top:n.top,x:o,y:l},children:[e.jsx("img",{src:t,alt:r}),e.jsx("div",{className:"absolute inset-0 bg-white opacity-70 dark:bg-black dark:opacity-80"})]})}function wr(){const t=Q(0),r=Q(0),n=a=>{const{clientX:s,clientY:i}=a;t.set(s),r.set(i)};return e.jsx("div",{className:"",onMouseMove:n,children:e.jsx("div",{className:"mx-auto max-w-screen-xl overflow-hidden px-4 py-8 sm:py-16 lg:px-6",children:e.jsxs("div",{className:"relative mx-auto max-w-screen-sm py-12 text-center",children:[e.jsx("div",{className:"pointer-events-none absolute inset-0",children:Nr.map((a,s)=>e.jsx(yr,{mouseX:t,mouseY:r,...a},s))}),e.jsxs("div",{className:"relative",children:[e.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white",children:"Join the community"}),e.jsx("p",{className:"mb-6 text-zinc-500 dark:text-zinc-400",children:"More than +1000 designers sharing their work."}),e.jsx("a",{href:"#",className:`\r
                            px-2.5 py-1.5 text-sm \r
                            text-white bg-zinc-900 \r
                            dark:bg-white dark:text-zinc-900 \r
                            hover:bg-zinc-700 dark:hover:bg-zinc-200\r
                            transition-colors duration-300 \r
                            inline-flex items-center rounded-md`,children:"Join now"})]})]})})})}const Nr=[{position:{left:"30%",top:"0%"},multiplier:{x:-.08,y:-.02},img:"https://images.beta.cosmos.so/ef796418-a1ca-4b0b-8536-60a9e3a01449?format=jpeg",alt:"cosmos"},{position:{left:"10%",top:"50%"},multiplier:{x:-.05,y:-.09},img:"https://images.beta.cosmos.so/d5c3850c-7a85-4e46-b61f-059aa1300f77?format=jpeg",alt:"cosmos"},{position:{left:"30%",top:"90%"},multiplier:{x:-.03,y:-.06},img:"https://images.beta.cosmos.so/46a3308c-db18-484d-9421-2c68b71814b7?format=jpeg",alt:"cosmos"},{position:{left:"70%",top:"10%"},multiplier:{x:-.08,y:-.02},img:"https://images.beta.cosmos.so/d5acdfdf-8785-43f6-bc55-0c686812b3bd?format=jpeg",alt:"cosmos"},{position:{left:"90%",top:"50%"},multiplier:{x:-.05,y:-.09},img:"https://images.beta.cosmos.so/b7ecaea1-230a-4779-a45c-517c1594982d?format=jpeg",alt:"cosmos"},{position:{left:"70%",top:"85%"},multiplier:{x:-.03,y:-.06},img:"https://images.beta.cosmos.so/bab29ee2-aa17-41b5-b66e-a985e9307b1b?format=jpeg",alt:"cosmos"}],jr={char:.03,word:.05,line:.1},ae={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.05}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},kr={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},zr={blur:{container:ae,item:{hidden:{opacity:0,filter:"blur(12px)"},visible:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(12px)"}}},"fade-in-blur":{container:ae,item:{hidden:{opacity:0,y:20,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,y:20,filter:"blur(12px)"}}},scale:{container:ae,item:{hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1},exit:{opacity:0,scale:0}}},fade:{container:ae,item:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}}},slide:{container:ae,item:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0},exit:{opacity:0,y:20}}}},Pt=Pe.memo(({segment:t,variants:r,per:n,segmentWrapperClassName:a})=>{const s=n==="line"?e.jsx(x.span,{variants:r,className:"block",children:t}):n==="word"?e.jsx(x.span,{"aria-hidden":"true",variants:r,className:"inline-block whitespace-pre",children:t}):e.jsx(x.span,{className:"inline-block whitespace-pre",children:t.split("").map((o,l)=>e.jsx(x.span,{"aria-hidden":"true",variants:r,className:"inline-block whitespace-pre",children:o},`char-${l}`))});if(!a)return s;const i=n==="line"?"block":"inline-block";return e.jsx("span",{className:z(i,a),children:s})});Pt.displayName="AnimationComponent";const Sr=(t,r)=>r==="line"?t.split(`
`):t.split(/(\s+)/),Me=t=>typeof t=="object"&&t!==null&&"transition"in t,mt=(t,r)=>{if(!r)return t;const{exit:n,...a}=r;return{...t,visible:{...t.visible,transition:{...Me(t.visible)?t.visible.transition:{},...a}},exit:{...t.exit,transition:{...Me(t.exit)?t.exit.transition:{},...a,staggerDirection:-1}}}};function W({children:t,per:r="word",as:n="p",variants:a,className:s,preset:i="fade",delay:o=0,speedReveal:l=1,speedSegment:d=1,trigger:m=!0,onAnimationComplete:u,onAnimationStart:p,segmentWrapperClassName:f,containerTransition:h,segmentTransition:y,style:w}){var ce,te,re,ne,k,de;const v=Sr(t,r),N=x[n],j=i?zr[i]:{container:ae,item:kr},L=jr[r]/l,T=.3/d,I=Me(((ce=a==null?void 0:a.container)==null?void 0:ce.visible)??{})?(re=((te=a==null?void 0:a.container)==null?void 0:te.visible).transition)==null?void 0:re.staggerChildren:void 0,M=Me(((ne=a==null?void 0:a.container)==null?void 0:ne.visible)??{})?(de=((k=a==null?void 0:a.container)==null?void 0:k.visible).transition)==null?void 0:de.delayChildren:void 0,R={container:mt((a==null?void 0:a.container)||j.container,{staggerChildren:I??L,delayChildren:M??o,...h,exit:{staggerChildren:I??L,staggerDirection:-1}}),item:mt((a==null?void 0:a.item)||j.item,{duration:T,...y})};return e.jsx(C,{mode:"popLayout",children:m&&e.jsxs(N,{initial:"hidden",animate:"visible",exit:"exit",variants:R.container,className:s,onAnimationComplete:u,onAnimationStart:p,style:w,children:[r!=="line"?e.jsx("span",{className:"sr-only",children:t}):null,v.map((J,Ne)=>e.jsx(Pt,{segment:J,variants:R.item,per:r,segmentWrapperClassName:f},`${r}-${Ne}-${J}`))]})})}/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Mt=(...t)=>t.filter((r,n,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ar={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=c.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:s="",children:i,iconNode:o,...l},d)=>c.createElement("svg",{ref:d,...Ar,width:r,height:r,stroke:t,strokeWidth:a?Number(n)*24/Number(r):n,className:Mt("lucide",s),...l},[...o.map(([m,u])=>c.createElement(m,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(t,r)=>{const n=c.forwardRef(({className:a,...s},i)=>c.createElement(Ir,{ref:i,iconNode:r,className:Mt(`lucide-${Cr(t)}`,a),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],P=D("ArrowRight",Tr);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Et=D("ChevronLeft",Lr);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Rt=D("ChevronRight",Pr);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ze=D("ChevronUp",Mr);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],et=D("Moon",Er);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Fr=D("Play",Rr);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],tt=D("Plus",Or);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],_r=D("Search",Dr);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],rt=D("Sun",Hr);function Br(){const t=c.useRef(null),r=Je(t);return e.jsx("div",{className:"py-24 sm:py-32",ref:t,children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"relative text-center  flex flex-col md:flex-row items-start justify-between space-y-4 md:items-center md:space-y-0",children:[e.jsxs("div",{className:"text-left flex flex-col space-y-2 md:space-y-4",children:[e.jsx(W,{className:"text-3xl text-zinc-900 dark:text-white",as:"h2",preset:"blur",trigger:r,per:"char",children:"Join the community"}),e.jsx("p",{className:"text-zinc-500 dark:text-zinc-400",children:"More than +1000 designers sharing their work."})]}),e.jsxs("div",{className:"flex flex-row items-center space-x-4",children:[e.jsx("a",{href:"#",className:"inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700",children:"Join now"}),e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800",children:["Learn More",e.jsx(P,{className:"size-4"})]})]})]})})})}function X({value:t,className:r,springOptions:n,as:a="span"}){const s=x.create(a),i=se(t,n),o=b(i,l=>Math.round(l).toLocaleString());return c.useEffect(()=>{i.set(t)},[i,t]),e.jsx(s,{className:z("tabular-nums",r),children:o})}function Vr(){const[t,r]=c.useState(0),n=c.useRef(null);return Je(n)&&t===0&&r(1e4),e.jsx("div",{ref:n,className:"mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6",children:e.jsxs("div",{className:"relative mx-auto max-w-screen-sm py-12 text-center",children:[e.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white",children:"Join the community"}),e.jsxs("p",{className:"mb-6 text-zinc-500 dark:text-zinc-400",children:["More than +"," ",e.jsx(X,{value:t,springOptions:{bounce:0,duration:2e3}})," ","designers sharing their work."]}),e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx("a",{href:"#",className:"inline-flex items-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",children:"Join now"}),e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 rounded-md bg-transparent px-2.5 py-1.5 text-sm text-zinc-900 transition-colors duration-300 hover:bg-zinc-200 dark:text-zinc-50 dark:hover:bg-zinc-900",children:["Learn more ",e.jsx(P,{className:"size-4"})]})]})]})})}const Ft=c.createContext(void 0);function nt(){const t=c.useContext(Ft);if(!t)throw new Error("useAccordion must be used within an AccordionProvider");return t}function Gr({children:t,variants:r,expandedValue:n,onValueChange:a}){const[s,i]=c.useState(null),o=n!==void 0?n:s,l=d=>{const m=o===d?null:d;a?a(m):i(m)};return e.jsx(Ft.Provider,{value:{expandedValue:o,toggleItem:l,variants:r},children:t})}function ve({children:t,className:r,transition:n,variants:a,expandedValue:s,onValueChange:i}){return e.jsx(St,{transition:n,children:e.jsx("div",{className:z("relative",r),"aria-orientation":"vertical",children:e.jsx(Gr,{variants:a,expandedValue:s,onValueChange:i,children:t})})})}function be({value:t,children:r,className:n}){const{expandedValue:a}=nt(),s=t===a;return e.jsx("div",{className:z("overflow-hidden",n),...s?{"data-expanded":""}:{"data-closed":""},children:Pe.Children.map(r,i=>Pe.isValidElement(i)?Pe.cloneElement(i,{...i.props,value:t,expanded:s}):i)})}function ye({children:t,className:r,...n}){const{toggleItem:a,expandedValue:s}=nt(),i=n.value,o=i===s;return e.jsx("button",{onClick:()=>i!==void 0&&a(i),"aria-expanded":o,type:"button",className:z("group",r),...o?{"data-expanded":""}:{"data-closed":""},children:t})}function we({children:t,className:r,...n}){const{expandedValue:a,variants:s}=nt(),o=n.value===a,l={expanded:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},d={expanded:{...l.expanded,...s==null?void 0:s.expanded},collapsed:{...l.collapsed,...s==null?void 0:s.collapsed}};return e.jsx(C,{initial:!1,children:o&&e.jsx(x.div,{initial:"collapsed",animate:"expanded",exit:"collapsed",variants:d,className:r,children:t})})}function qr(){return e.jsxs("div",{className:"relative mx-auto max-w-xl px-6 py-12",children:[e.jsxs("div",{className:"mb-10 text-left",children:[e.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white",children:"Frequently asked questions"}),e.jsx("p",{className:"text-base text-zinc-500 dark:text-zinc-400",children:"Here are some of the most common questions we receive from our users."})]}),e.jsx(ve,{className:"flex w-full flex-col divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-700 dark:border-zinc-700",transition:{duration:.2,ease:"easeInOut"},children:Ur.map((t,r)=>e.jsxs(be,{value:t.value,className:"py-4",children:[e.jsx(ye,{className:"w-full text-left text-zinc-950 dark:text-zinc-50",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:t.title}),e.jsx(Ze,{className:"size-4 -rotate-180 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-0 dark:text-zinc-50"})]})}),e.jsx(we,{children:e.jsx("p",{className:"pt-2 text-zinc-500 dark:text-zinc-400",children:t.content})})]},r))})]})}const Ur=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function Yr(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12",children:[e.jsxs("div",{className:"py-0 text-left md:py-4",children:[e.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white",children:"Frequently asked questions"}),e.jsx("p",{className:"text-base text-zinc-500 dark:text-zinc-400",children:"Here are some of the most common questions we receive from our users."})]}),e.jsx("div",{className:"col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none",children:e.jsx(ve,{className:"flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700",transition:{duration:.2,ease:"easeInOut"},children:$r.map((t,r)=>e.jsxs(be,{value:t.value,className:"py-4",children:[e.jsx(ye,{className:"w-full text-left text-zinc-950 dark:text-zinc-50",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:t.title}),e.jsx(Ze,{className:"size-4 -rotate-180 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-0 dark:text-zinc-50"})]})}),e.jsx(we,{children:e.jsx("p",{className:"pt-2 text-zinc-500 dark:text-zinc-400",children:t.content})})]},r))})})]})})})}const $r=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function Xr(){return e.jsxs("div",{className:"relative mx-auto max-w-xl px-6 py-12",children:[e.jsx("h2",{className:"mb-6 text-2xl font-medium text-zinc-900 dark:text-white",children:"FAQs"}),e.jsx(ve,{transition:{duration:.2,ease:"easeInOut"},className:"flex flex-col space-y-4",children:Wr.map(t=>e.jsxs(be,{value:t.value,className:"w-full rounded-xl bg-zinc-100 px-5 text-black dark:bg-zinc-900 dark:text-white",children:[e.jsx(ye,{className:"w-full py-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:t.title}),e.jsx(tt,{className:"size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white"})]})}),e.jsx(we,{children:e.jsx("p",{className:"border-t border-zinc-200 py-2 text-zinc-800 dark:border-zinc-700 dark:text-zinc-400",children:t.content})})]},t.value))})]})}const Wr=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function Jr(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12",children:[e.jsxs("div",{className:"py-0 text-left md:py-4",children:[e.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white",children:"FAQs"}),e.jsx("p",{className:"text-base text-zinc-500 dark:text-zinc-400",children:"Here are some of the most common questions we receive from our users."})]}),e.jsx("div",{className:"col-span-2 border-t border-zinc-200 px-3 dark:border-zinc-700 sm:px-0 md:border-none",children:e.jsx(ve,{className:"flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700",transition:{duration:.2,ease:"easeInOut"},children:Qr.map((t,r)=>e.jsxs(be,{value:t.value,className:"py-4",children:[e.jsx(ye,{className:"w-full text-left text-zinc-950 dark:text-zinc-50",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx(tt,{className:"size-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-45 dark:text-white"}),e.jsx("div",{children:t.title})]})}),e.jsx(we,{children:e.jsx("p",{className:"pt-2 text-zinc-500 dark:text-zinc-400",children:t.content})})]},r))})})]})})})}const Qr=[{title:"Getting Started",value:"getting-started",content:"Discover the fundamental concepts of Motion-Primitives. This section guides you through the installation process and provides an overview of how to integrate these components into your projects. Learn about the core functionalities and how to set up your first animation effectively."},{title:"Animation Properties",value:"animation-properties",content:"Explore the comprehensive range of animation properties available in Motion-Primitives. Understand how to manipulate timing, easing, and delays to create smooth, dynamic animations. This segment also covers the customization of animations to fit the flow and style of your web applications."},{title:"Advanced Usage",value:"advanced-usage",content:"Dive deeper into advanced techniques and features of Motion-Primitives. Learn about chaining animations, creating complex sequences, and utilizing motion sensors for interactive animations. Gain insights on how to leverage these advanced features to enhance user experience and engagement."},{title:"Community and Support",value:"community-and-support",content:"Engage with the Motion-Primitives community to gain additional support and insight. Find out how to participate in discussions, contribute to the project, and access a wealth of shared knowledge and resources. Learn about upcoming features, best practices, and how to get help with your specific use cases."}];function Kr(){var n;const[t,r]=c.useState(Be[0].id);return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-2",children:[e.jsxs("div",{className:"relative hidden h-auto lg:block",children:[e.jsx("img",{className:"aspect-square h-full w-full object-cover",src:(n=Be.find(a=>a.id===t))==null?void 0:n.image,alt:"Accordion Image"}),e.jsx("div",{className:"absolute inset-0 bg-black opacity-20"})]}),e.jsx("div",{className:"p-0 sm:p-8 lg:p-16",children:e.jsx(ve,{className:"flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800",expandedValue:t,onValueChange:a=>{a&&r(a)},children:Be.map(a=>e.jsxs(be,{value:a.id,children:[e.jsxs(ye,{className:z("flex w-full items-center justify-between py-3.5",a.id===t&&"cursor-default"),children:[e.jsx("h3",{className:"text-left text-lg text-zinc-950 dark:text-zinc-50",children:a.title}),e.jsx(Ze,{className:"size-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50"})]}),e.jsxs(we,{children:[e.jsx("p",{className:"pb-6 text-left text-zinc-500 dark:text-zinc-400 lg:pb-8",children:a.content}),e.jsx("div",{className:"pb-8 lg:hidden",children:e.jsx("img",{className:"h-64 w-full object-cover",src:a.image,alt:a.title})})]})]},a.id))})})]})})})}const Be=[{id:"item1",title:"Text-to-image generation",content:"Transform your ideas into stunning visuals with our advanced text-to-image AI. Simply describe what you want, and watch as our algorithm brings your imagination to life in high-resolution images.",image:"https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg"},{id:"item2",title:"Style transfer & customization",content:"Apply and blend various artistic styles to your generated images. From renaissance to modern art, our AI can adapt your creations.",image:"https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg"},{id:"item3",title:"Infinite resolution scaling",content:"Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail, ensuring your creations always look crisp and professional.",image:"https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg"}];function Zr(){var n;const[t,r]=c.useState(Ve[0].id);return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-2",children:[e.jsxs("div",{className:"p-0 sm:p-8 lg:p-16",children:[e.jsxs("div",{className:"mb-12 text-left",children:[e.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Let AI generate your next product"}),e.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Easy generate videos, images, and more with our model."})]}),e.jsx("div",{className:"flex flex-col space-y-2",children:Ve.map(a=>e.jsxs("button",{className:z("w-full rounded-lg p-3",t===a.id&&"bg-zinc-100 dark:bg-zinc-800"),type:"button",onClick:()=>r(a.id),children:[e.jsx("h3",{className:"text-left text-lg text-zinc-950 dark:text-zinc-50",children:a.title}),e.jsx("p",{className:"text-left text-zinc-500 dark:text-zinc-400",children:a.content})]},a.id))})]}),e.jsxs("div",{className:"relative h-auto lg:block",children:[e.jsx("img",{className:"aspect-square h-full w-full object-cover",src:(n=Ve.find(a=>a.id===t))==null?void 0:n.image,alt:"Accordion Image"},t),e.jsx("div",{className:"absolute inset-0 bg-black opacity-20"})]})]})})})}const Ve=[{id:"item1",title:"Text-to-image generation",content:"Transform your ideas into stunning visuals with our advanced text-to-image AI.",image:"https://images.beta.cosmos.so/979ffbcb-0354-47d0-9301-a292f591528f?format=jpeg"},{id:"item2",title:"Style transfer & customization",content:"Apply and blend various artistic styles to your generated images.",image:"https://images.beta.cosmos.so/613cf988-5f71-4e10-a208-9bf394874a61?format=jpeg"},{id:"item3",title:"Infinite resolution scaling",content:"Never worry about image quality again. Our AI can intelligently upscale your generated images to any resolution without loss of detail.",image:"https://images.beta.cosmos.so/6e8b6343-6f44-4636-8ee4-cabc222abb53?format=jpeg"}],Ot=c.createContext(void 0);function en(){const t=c.useContext(Ot);if(!t)throw new Error("useCarousel must be used within an CarouselProvider");return t}function tn({children:t,initialIndex:r=0,onIndexChange:n,disableDrag:a=!1}){const[s,i]=c.useState(r),[o,l]=c.useState(0),d=m=>{i(m),n==null||n(m)};return c.useEffect(()=>{i(r)},[r]),e.jsx(Ot.Provider,{value:{index:s,setIndex:d,itemsCount:o,setItemsCount:l,disableDrag:a},children:t})}function Ee({children:t,className:r,initialIndex:n=0,index:a,onIndexChange:s,disableDrag:i=!1}){const[o,l]=c.useState(n),d=a!==void 0,m=d?a:o,u=p=>{d||l(p),s==null||s(p)};return e.jsx(tn,{initialIndex:m,onIndexChange:u,disableDrag:i,children:e.jsx("div",{className:z("group/hover relative",r),children:e.jsx("div",{className:"overflow-hidden",children:t})})})}function Re({children:t,className:r,transition:n}){const{index:a,setIndex:s,setItemsCount:i,disableDrag:o}=en(),[l,d]=c.useState(1),m=Q(0),u=c.useRef(null),p=c.Children.count(t);c.useEffect(()=>{if(!u.current)return;const h={root:u.current,threshold:.5},y=new IntersectionObserver(v=>{const N=v.filter(j=>j.isIntersecting).length;d(N)},h),w=u.current.children;return Array.from(w).forEach(v=>y.observe(v)),()=>y.disconnect()},[t,i]),c.useEffect(()=>{p&&i(p)},[p,i]);const f=()=>{const h=m.get();h<=-10&&a<p-1?s(a+1):h>=10&&a>0&&s(a-1)};return e.jsx(x.div,{drag:o?!1:"x",dragConstraints:o?void 0:{left:0,right:0},dragMomentum:o?void 0:!1,style:{x:o?void 0:m},animate:{translateX:`-${a*(100/l)}%`},onDragEnd:o?void 0:f,transition:n||{damping:18,stiffness:90,type:"spring",duration:.2},className:z("flex items-center",!o&&"cursor-grab active:cursor-grabbing",r),ref:u,children:t})}function Fe({children:t,className:r}){return e.jsx(x.div,{className:z("w-full min-w-0 shrink-0 grow-0 overflow-hidden",r),children:t})}function E(t){return e.jsx("a",{...t,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"})}function rn(){const[t,r]=c.useState(0);return e.jsxs("div",{className:"py-24 sm:py-32",children:[e.jsx("div",{className:"container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12",children:e.jsx("h2",{className:"text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl",children:"Visualize your ideas instantly"})}),e.jsx(Ee,{className:"pl-[max(16px,calc((100%-1024px)/2+16px))]",index:t,onIndexChange:r,disableDrag:!0,children:e.jsx(Re,{className:"-ml-2 md:-ml-8",transition:{type:"spring",stiffness:26.7,damping:4.1,mass:.2},children:nn.map((n,a)=>e.jsx(Fe,{className:"basis-1/4 pl-2 md:pl-8",children:e.jsxs(E,{href:"#",className:"relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md",children:[e.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:n.image,alt:n.title}),e.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),e.jsxs("div",{className:"absolute left-0 right-0 top-0 p-4 text-white",children:[e.jsx("p",{className:"mb-0.5 text-xs",children:n.description}),e.jsx("h3",{className:"text-base",children:n.title})]})]})},a))})}),e.jsx("div",{className:"container mx-auto mt-6 flex max-w-screen-lg items-end justify-end px-4",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("button",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40",type:"button","aria-label":"Previous slide",disabled:t===0,onClick:()=>r(t-1),children:e.jsx(Et,{className:"h-5 w-5"})}),e.jsx("button",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-zinc-950 opacity-100 disabled:opacity-40",type:"button","aria-label":"Next slide",disabled:t===5,onClick:()=>r(t+1),children:e.jsx(Rt,{className:"h-5 w-5"})})]})})]})}const nn=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/53d4f8cd-abb4-4296-a411-14789cc00733?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/2d3f5268-da08-4e48-abd9-6b003e419d2b.?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/d7f8f87a-6b42-4b4c-b27a-196d57bf5d2d.?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/3c2682dc-8174-45b1-abe8-a045f020e54b.?format=jpeg"}];function an(){const[t,r]=c.useState(0);return e.jsxs("div",{className:"py-24 sm:py-32",children:[e.jsxs("div",{className:"container mx-auto mb-8 max-w-screen-lg px-4 md:mb-12",children:[e.jsx("h2",{className:"mb-4 text-2xl font-medium text-zinc-900 dark:text-white md:text-4xl",children:"Visualize your ideas instantly"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30","aria-label":"Previous slide",disabled:t===0,onClick:()=>r(t-1),children:e.jsx(Et,{className:"h-5 w-5"})}),e.jsx("button",{type:"button",className:"flex h-9 w-9 items-center justify-center rounded-full disabled:opacity-30","aria-label":"Next slide",disabled:t===5,onClick:()=>r(t+1),children:e.jsx(Rt,{className:"h-5 w-5"})})]})]}),e.jsx(Ee,{index:t,onIndexChange:r,disableDrag:!0,children:e.jsx(Re,{className:"-ml-2 pl-[max(16px,calc((100%-1024px)/2+16px))] md:-ml-5",children:sn.map((n,a)=>e.jsx(Fe,{className:"basis-1/2 pl-2 md:basis-[22%] md:pl-5",children:e.jsxs(E,{href:"#",className:"relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md",children:[e.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:n.image,alt:n.title}),e.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between p-4 text-white",children:[e.jsx("p",{className:"text-xs",children:"New top text"}),e.jsx("p",{className:"text-base",children:"New bottom text"})]})]})},a))})})]})}const sn=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function _({children:t,defaultValue:r,onValueChange:n,className:a,transition:s,enableHover:i=!1}){const[o,l]=c.useState(null),d=c.useId(),m=u=>{l(u),n&&n(u)};return c.useEffect(()=>{r!==void 0&&l(r)},[r]),c.Children.map(t,(u,p)=>{const f=u.props["data-id"],h=i?{onMouseEnter:()=>m(f),onMouseLeave:()=>m(null)}:{onClick:()=>m(f)};return c.cloneElement(u,{key:p,className:z("relative inline-flex",u.props.className),"data-checked":o===f?"true":"false",...h},e.jsxs(e.Fragment,{children:[e.jsx(C,{initial:!1,children:o===f&&e.jsx(x.div,{layoutId:`background-${d}`,className:z("absolute inset-0",a),transition:s,initial:{opacity:r?1:0},animate:{opacity:1},exit:{opacity:0}})}),e.jsx("div",{className:"z-10",children:u.props.children})]}))})}function on(){const[t,r]=c.useState(0),[n,a]=c.useState(ke[0].tab),s=i=>{a(i);const o=ke.findIndex(l=>l.tab===i);o!==-1&&r(o)};return e.jsxs("div",{className:"py-24 sm:py-32",children:[e.jsx("div",{className:"mx-auto mb-12 max-w-7xl px-6 text-center lg:px-8",children:e.jsx("h2",{className:"text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Visualize your ideas instantly"})}),e.jsx("div",{className:"relative w-full overflow-hidden",children:e.jsx("div",{children:e.jsxs(Ee,{index:t,onIndexChange:r,disableDrag:!0,children:[e.jsx(Re,{className:"ml-0 md:ml-[calc((100%-64rem)/2)]",children:ke.map((i,o)=>e.jsx(Fe,{className:"basis-[52%] px-4 pl-0 md:px-0 md:pl-4",children:e.jsxs("div",{className:"relative flex h-[200px] items-center justify-center overflow-hidden rounded-md md:h-[400px]",children:[e.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:i.image,alt:i.title}),e.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),e.jsxs("div",{className:"absolute inset-0 flex flex-col justify-between p-4 text-white",children:[e.jsx("p",{className:"text-xs sm:text-sm",children:i.title}),e.jsx("p",{className:"text-sm sm:text-base",children:i.description})]})]})},o))}),e.jsx("div",{className:"mx-auto mb-12 max-w-7xl overflow-x-auto px-6 text-center [scrollbar-width:none] lg:px-8",children:e.jsx("div",{className:"mt-6 flex min-w-max items-center justify-center sm:mt-10",children:e.jsx("div",{className:"z-0 flex flex-wrap justify-center space-x-2 rounded-full bg-zinc-200 px-2 py-2 dark:bg-zinc-800",children:e.jsx(_,{className:"whitespace-nowrap rounded-full bg-zinc-900",transition:{ease:"easeInOut",duration:.2},defaultValue:n,onValueChange:i=>{s(i)},children:ke.map((i,o)=>e.jsx("button",{className:"px-2 py-1 text-xs text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-zinc-100 dark:text-zinc-200 sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:text-base","data-id":i.tab,type:"button",children:i.tab},o))})})})})]})})})]})}const ke=[{tab:"Feature 1",title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{tab:"Feature 2",title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{tab:"Feature 3",title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{tab:"Feature 4",title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{tab:"Feature 5",title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{tab:"Feature 6",title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function ln(){const[t,r]=c.useState(0);return e.jsxs("div",{className:"overflow-auto py-24 sm:overflow-hidden sm:py-32",children:[e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsx("h2",{className:"mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Visualize your ideas instantly"}),e.jsx("div",{className:"mb-8 overflow-x-auto [scrollbar-width:none]",children:e.jsx("div",{className:"flex min-w-max items-center justify-center space-x-4",children:ut.map((n,a)=>e.jsx("button",{className:z("relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base",a===t?"bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900":""),type:"button",onClick:()=>r(a),children:n.title},a))})})]}),e.jsx(Ee,{index:t,onIndexChange:r,disableDrag:!0,children:e.jsx(Re,{className:"w-full md:-ml-5",transition:{ease:[.77,0,.175,1],duration:1},children:ut.map((n,a)=>e.jsx(Fe,{className:"flex items-center justify-center px-2",children:e.jsxs("div",{className:"relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md",children:[e.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:n.image,alt:n.title}),e.jsx("div",{className:"absolute inset-0 bg-black opacity-50"}),e.jsxs("div",{className:"absolute left-0 right-0 top-0 p-4 text-white",children:[e.jsx("p",{className:"mb-0.5 text-xs",children:n.description}),e.jsx("h3",{className:"text-base",children:n.title})]})]})},a))})})]})}const ut=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function cn({children:t,className:r,transition:n,variants:a,activeIndex:s,...i}){return e.jsx("div",{className:z("relative",r),children:e.jsx(C,{initial:!1,mode:"popLayout",custom:i.custom,children:e.jsx(x.div,{variants:a,transition:n,initial:"enter",animate:"center",exit:"exit",...i,children:t[s]},s)})})}function dn(){const[t,r]=c.useState(0),[n,a]=c.useState(1);return e.jsxs("div",{className:"overflow-auto py-24 sm:overflow-hidden sm:py-32",children:[e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsx("h2",{className:"mb-12 text-center text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Visualize your ideas instantly"}),e.jsx("div",{className:"mb-8 overflow-x-auto [scrollbar-width:none]",children:e.jsx("div",{className:"flex min-w-max items-center justify-center space-x-4",children:xt.map((s,i)=>e.jsx("button",{className:z("relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 dark:bg-zinc-800 dark:text-zinc-50 sm:px-4 sm:text-base",i===t?"bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900":""),type:"button",onClick:()=>{r(i),a(i>t?1:-1)},children:s.title},i))})})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(cn,{className:"aspect-video w-[800px] overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800",activeIndex:t,custom:n,variants:{enter:s=>({opacity:.8,x:s>0?32:-32}),center:{opacity:1,x:0},exit:s=>({opacity:.8,x:s<0?32:-32})},transition:{ease:"easeOut",duration:.3},children:xt.map(s=>e.jsx("div",{className:"relative flex aspect-video w-[800px] items-center justify-center overflow-hidden rounded-md",children:e.jsx("img",{className:"pointer-events-none h-full w-full object-cover",src:s.image,alt:s.title})},s.title))})})]})}const xt=[{title:"Feature 1",description:"Description 1",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 2",description:"Description 2",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"},{title:"Feature 3",description:"Description 3",image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg"},{title:"Feature 4",description:"Description 4",image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg"},{title:"Feature 5",description:"Description 5",image:"https://images.beta.cosmos.so/a6d69ba1-ad19-4a77-864b-0f888ce93830?format=jpeg"},{title:"Feature 6",description:"Description 6",image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg"}];function mn(){var n;const[t,r]=c.useState(Ge[0].tab);return e.jsx("div",{className:"overflow-auto py-24 sm:overflow-hidden sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsx("div",{className:"mx-auto mb-12 max-w-lg text-center",children:e.jsx("h2",{className:"text-3xl sm:text-4xl",children:"A new way to build AI apps, for developers and designers."})}),e.jsx("div",{className:"mb-8 overflow-x-auto [scrollbar-width:none]",children:e.jsx("div",{className:"flex min-w-max items-center justify-center space-x-2",children:e.jsx(_,{className:"whitespace-nowrap rounded-full bg-zinc-200 dark:bg-zinc-800",transition:{ease:"easeInOut",duration:.2},defaultValue:t,onValueChange:a=>{r(a)},children:Ge.map((a,s)=>e.jsx("button",{className:"px-3 py-1.5 text-sm text-zinc-900 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-50 sm:px-4 sm:text-base","data-id":a.tab,type:"button",children:a.tab},s))})})}),(n=Ge.find(a=>a.tab===t))==null?void 0:n.content]})})}function pe({src:t,alt:r}){return e.jsx("img",{className:"aspect-square h-[400px] w-full rounded-2xl bg-blue-200/50 object-cover",src:t,alt:r})}const Ge=[{tab:"Design",content:e.jsx(pe,{src:"https://cdn.cosmos.so/8bb8b6e6-1658-4c42-bc5d-e8d17394bb01?format=jpeg",alt:"Design"},"design")},{tab:"Engineering",content:e.jsx(pe,{src:"https://cdn.cosmos.so/c50a75a4-b145-4044-9406-c89d5c326382?format=jpeg",alt:"Engineering"},"engineering")},{tab:"AI",content:e.jsx(pe,{src:"https://cdn.cosmos.so/1437d5d6-52e0-465e-9dfd-c92352d7507e?format=jpeg",alt:"AI"},"ai")},{tab:"Marketing",content:e.jsx(pe,{src:"https://cdn.cosmos.so/ed170ddf-b6f3-4865-a38e-1304c5197eeb?format=jpeg",alt:"Marketing"},"marketing")},{tab:"Analytics",content:e.jsx(pe,{src:"https://cdn.cosmos.so/6b1ae75e-af71-4349-8a24-a2f7945b371f?format=jpeg",alt:"Analytics"},"analytics")}];function un(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=b(r,[0,1],[.85,1]);return e.jsxs("div",{className:"relative min-h-[200vh]",ref:t,children:[e.jsx("div",{className:"h-screen py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsxs("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-12 text-center",children:[e.jsx("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:"Let AI generate your next product"}),e.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Easy generate videos, images, and more with our model."})]}),e.jsx(x.div,{className:"aspect-video w-full origin-top overflow-hidden rounded-3xl",style:{scale:n},children:e.jsxs("div",{className:"relative aspect-video w-full",children:[e.jsx("div",{className:"absolute inset-0 bg-zinc-950/80"}),e.jsx("button",{className:"absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full transition-colors hover:bg-zinc-950/80",children:e.jsx(Fr,{className:"h-8 w-8 text-white"})}),e.jsx("img",{className:"aspect-video w-full object-cover",src:"https://images.beta.cosmos.so/75a0de47-2136-4c2b-b1e8-3e31a0ac2b5a?format=jpeg",alt:"Mountains"})]})})]})]})}function xn(){return e.jsx("div",{className:"bg-white py-24 dark:bg-black sm:py-32",children:e.jsx("div",{className:"relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"relative flex flex-col space-y-32",children:pn.map((t,r)=>e.jsxs("div",{className:`\r
                                relative \r
                                top-24 sm:top-32 \r
                                h-auto lg:sticky lg:h-[calc(400px+9rem)]\r
                                bg-white dark:bg-black \r
                                grid  grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32\r
                                `,children:[e.jsx("div",{className:"py-16 text-base text-zinc-900 dark:text-white lg:text-lg",children:t.text}),e.jsx("div",{className:"h-[300px] w-full lg:h-[400px]",children:e.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:t.image,alt:`Feature ${r+1}`})})]},r))})})})}const pn=[{image:"https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."},{image:"https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg",text:"Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets."},{image:"https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg",text:"Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries."},{image:"https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."}];function fn(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start start","end end"]}),n=b(r,[0,.25,.5],[3,2.5,1]),a=b(r,[0,.2,.25],[1,1,0]),s=b(r,[0,.2,.25],[.5,.5,0]);return e.jsxs("div",{ref:t,className:"w-full",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsxs("div",{className:"flex h-[200vh] w-full flex-col items-center justify-start overflow-clip",children:[e.jsxs(x.div,{className:"absolute z-10 flex h-screen flex-col items-center justify-center text-center text-5xl font-medium text-white",style:{opacity:a},children:[e.jsx("h1",{children:"AI-generated visuals at your fingertips."}),e.jsx("p",{children:"Experience the future of imagery."})]}),e.jsx("div",{className:"sticky top-0 flex h-screen w-full items-center justify-center",children:e.jsxs("div",{className:"relative",children:[e.jsx(x.img,{className:"aspect-video w-full max-w-[400px] object-cover",style:{scale:n},src:"https://images.beta.cosmos.so/a7a791ac-d24a-43b9-a653-67a8557bec3f?format=jpeg"}),e.jsx(x.div,{className:"absolute inset-0 h-full w-full bg-black",style:{opacity:s,scale:n}})]})})]}),e.jsx("div",{className:"h-screen bg-transparent"})]})}function gn(){const[t,r]=c.useState(0),[n,a]=c.useState("down"),s=c.useRef(null),{scrollY:i}=A({target:s});return c.useEffect(()=>{let o=0;const l=i.on("change",d=>{const m=window.innerHeight,u=Math.floor(d/m)%ze.length;a(d>o?"down":"up"),o=d,r(u)});return()=>l()},[i]),e.jsx("div",{className:"relative h-[var(--section-height)]",style:{"--section-height":`${ze.length*100}vh`},children:e.jsx("div",{className:"sticky top-0 flex h-screen items-center justify-center",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{ref:s,className:"grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-32",children:[e.jsx(C,{mode:"wait",children:e.jsx(x.div,{className:"h-[300px] w-full md:h-[400px] lg:h-[500px]",initial:{opacity:0,y:n==="down"?20:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:n==="down"?-20:20},transition:{duration:.15},children:e.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:ze[t].image,alt:"Feature"})},t)}),e.jsx(C,{mode:"wait",children:e.jsx(x.div,{className:"flex items-center justify-center",initial:{opacity:0,y:n==="down"?20:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:n==="down"?-20:20},transition:{duration:.15,delay:.1},children:e.jsx("div",{className:"text-sm font-medium text-zinc-900 dark:text-white md:text-base lg:text-lg",children:ze[t].text})},t)})]})})})})}const ze=[{image:"https://images.beta.cosmos.so/9b3a88a7-692c-43b1-838a-96e555927db3.?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."},{image:"https://images.beta.cosmos.so/0a343dca-372a-4494-9b8a-65cdea0831b2?format=jpeg",text:"Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets."},{image:"https://images.beta.cosmos.so/6bc5d3ba-1850-4e58-abf5-67eac6ed614d?format=jpeg",text:"Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries."}];function hn(){var s;const t=c.useRef(null),[r,n]=c.useState(0),{scrollYProgress:a}=A({target:t,offset:["start start","end end"]});return c.useEffect(()=>{const i=a.on("change",o=>{const l=Math.floor(o*fe.length);n(Math.min(Math.max(l,0),fe.length-1))});return()=>i()},[a]),e.jsxs("div",{className:"relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[e.jsx("div",{className:"md:hidden",children:e.jsx("div",{className:"h-screen snap-y snap-mandatory overflow-y-auto py-24 sm:py-32",children:fe.map((i,o)=>e.jsx("div",{className:"mb-12 flex min-h-screen snap-center items-center",children:e.jsxs("div",{className:"w-full",children:[e.jsx("div",{className:"mb-4 h-[200px] w-full",children:e.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:i.image,alt:`Feature ${o+1}`})}),e.jsx("div",{className:"text-sm font-medium text-zinc-900 dark:text-white",children:i.text})]})},o))})}),e.jsxs("div",{ref:t,className:"relative hidden grid-cols-1 gap-8 md:grid md:h-[300vh] md:grid-cols-2 md:gap-16 lg:gap-32",children:[e.jsx("div",{className:"w-full py-16",children:fe.map((i,o)=>e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"text-base text-zinc-900 dark:text-white lg:text-lg",children:i.text})},o))}),e.jsx("div",{className:"sticky top-0 flex h-screen w-full items-center justify-center",children:e.jsx(C,{mode:"wait",children:e.jsx(x.div,{className:"h-[300px] w-full lg:h-[400px]",initial:{opacity:.6},animate:{opacity:1},exit:{opacity:.6},transition:{duration:.15},children:e.jsx("img",{className:"h-full w-full rounded-lg object-cover",src:(s=fe[r])==null?void 0:s.image,alt:"Feature"})},r)})})]})]})}const fe=[{image:"https://images.beta.cosmos.so/73046381-1709-4de0-9920-d75fbb8d2676?format=jpeg",text:"Advanced Natural Language Processing: Our AI-powered system understands context and nuance in human language, enabling more natural and effective communication. It can analyze sentiment, extract key information, and even generate human-like responses, revolutionizing customer service and content creation."},{image:"https://images.beta.cosmos.so/9585854b-8c03-426e-b00b-76973349e53f?format=jpeg",text:"Predictive Analytics and Machine Learning: Harness the power of AI to forecast trends and make data-driven decisions. Our algorithms learn from historical data to predict future outcomes, optimize processes, and identify patterns that humans might miss, giving your business a competitive edge in rapidly changing markets."},{image:"https://images.beta.cosmos.so/43992056-5e80-477e-9618-a3f5d58f3a64?format=jpeg",text:"Computer Vision and Image Recognition: Unlock new possibilities with our state-of-the-art computer vision technology. From facial recognition and object detection to medical image analysis and autonomous vehicles, our AI can process and understand visual information with human-like accuracy, opening up countless applications across industries."}];function Oe(t){return e.jsxs("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t,children:[e.jsx("title",{children:"GitHub"}),e.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}function De(t){return e.jsxs("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t,children:[e.jsx("title",{children:"X"}),e.jsx("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"})]})}function vn(){return e.jsx("footer",{children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8",children:[e.jsx(W,{className:"text-sm text-zinc-500",children:`� ${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.`}),e.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(Oe,{className:"size-4"})}),e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(De,{className:"size-4"})})]})]})})}const bn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";function yn({children:t,duration:r=.8,speed:n=.04,characterSet:a=bn,className:s,as:i="p",trigger:o=!0,onScrambleComplete:l,...d}){const m=x.create(i),[u,p]=c.useState(t),[f,h]=c.useState(!1),y=t,w=async()=>{if(f)return;h(!0);const v=r/n;let N=0;const j=setInterval(()=>{let L="";const T=N/v;for(let I=0;I<y.length;I++){if(y[I]===" "){L+=" ";continue}T*y.length>I?L+=y[I]:L+=a[Math.floor(Math.random()*a.length)]}p(L),N++,N>v&&(clearInterval(j),p(y),h(!1),l==null||l())},n*1e3)};return c.useEffect(()=>{o&&w()},[o]),e.jsx(m,{className:s,...d,children:u})}function wn(){const[t,r]=c.useState(!0),n=()=>{setTimeout(()=>{r(!0)},4e3),r(!1)};return e.jsx("footer",{children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8",children:[e.jsx(yn,{className:"text-sm text-zinc-500",as:"p",trigger:t,onScrambleComplete:n,children:`� ${new Date().getFullYear()} Motion Primitives, Inc. All rights reserved.`}),e.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(Oe,{className:"size-4"})}),e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(De,{className:"size-4"})})]})]})})}function K({children:t,gap:r=16,duration:n=25,durationOnHover:a,direction:s="horizontal",reverse:i=!1,className:o}){const[l,d]=c.useState(n),[m,{width:u,height:p}]=Ht(),f=Q(0),[h,y]=c.useState(!1),[w,v]=c.useState(0);c.useEffect(()=>{let j;const T=(s==="horizontal"?u:p)+r,I=i?-T/2:0,M=i?0:-T/2;return h?j=ot(f,[f.get(),M],{ease:"linear",duration:l*Math.abs((f.get()-M)/T),onComplete:()=>{y(!1),v(R=>R+1)}}):j=ot(f,[I,M],{ease:"linear",duration:l,repeat:1/0,repeatType:"loop",repeatDelay:0,onRepeat:()=>{f.set(I)}}),j==null?void 0:j.stop},[w,f,l,u,p,r,h,s,i]);const N=a?{onHoverStart:()=>{y(!0),d(a)},onHoverEnd:()=>{y(!0),d(n)}}:{};return e.jsx("div",{className:z("overflow-hidden",o),children:e.jsxs(x.div,{className:"flex w-max",style:{...s==="horizontal"?{x:f}:{y:f},gap:`${r}px`,flexDirection:s==="horizontal"?"row":"column"},ref:m,...N,children:[t,t]})})}function Nn(){return e.jsxs("footer",{children:[e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 pb-4 pt-12 md:flex-row md:justify-between md:px-8",children:[e.jsxs("p",{className:"text-sm text-zinc-500",children:["� ",new Date().getFullYear()," Motion Primitives, Inc. All rights reserved."]}),e.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(Oe,{className:"size-4"})}),e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(De,{className:"size-4"})})]})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx(K,{className:"-mb-14 text-9xl leading-[100%] text-black dark:text-white sm:text-[12rem]",gap:80,children:e.jsx("div",{children:"Motion Primitives"})})})]})}function jn(){return e.jsxs("footer",{children:[e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col justify-center px-6 py-12 md:flex-row md:justify-between md:px-8",children:[e.jsxs("p",{className:"text-sm text-zinc-500",children:["� ",new Date().getFullYear()," Motion Primitives, Inc. All rights reserved."]}),e.jsxs("div",{className:"order-first mb-4 flex items-center gap-x-6 md:order-none md:mb-0",children:[e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(Oe,{className:"size-4"})}),e.jsx("a",{href:"#",className:"fill-zinc-500 hover:fill-zinc-900 dark:fill-zinc-400 dark:hover:fill-zinc-100",children:e.jsx(De,{className:"size-4"})})]})]}),e.jsx("div",{className:"overflow-hidden [mask-image:linear-gradient(to_bottom,white_20%,transparent)]",children:e.jsx(K,{className:"-mb-14 whitespace-nowrap text-9xl leading-[100%] text-transparent [text-shadow:1px_1px_1px_rgba(255,255,255,.1),-1px_-1px_1px_rgba(0,0,0,.5),-40px_-40px_0px_rgba(0,0,0,0)] sm:text-[12rem]",gap:80,duration:60,children:e.jsx("div",{children:"Motion Primitives"})})})]})}function kn(){return e.jsxs("div",{children:[e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"text-sm",children:"Scroll down"})}),e.jsx("div",{className:"relative h-[--footer-height] [--footer-height:500px]",style:{clipPath:"polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"},children:e.jsx("div",{className:"fixed bottom-0 h-[--footer-height] w-full",children:e.jsxs("div",{className:"flex h-full w-full flex-col justify-between bg-zinc-800 px-12 py-8",children:[e.jsxs("div",{className:"flex shrink-0 gap-20",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"mb-2 text-zinc-400",children:"Product"}),e.jsx("a",{href:"#",className:"text-white",children:"Features"}),e.jsx("a",{href:"#",className:"text-white",children:"Pricing"}),e.jsx("a",{href:"#",className:"text-white",children:"Integration"}),e.jsx("a",{href:"#",className:"text-white",children:"API Documentation"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"mb-2 text-zinc-400",children:"Company"}),e.jsx("a",{href:"#",className:"text-white",children:"About Us"}),e.jsx("a",{href:"#",className:"text-white",children:"Blog"}),e.jsx("a",{href:"#",className:"text-white",children:"Careers"}),e.jsx("a",{href:"#",className:"text-white",children:"Customer Stories"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"mb-2 text-zinc-400",children:"Support"}),e.jsx("a",{href:"#",className:"text-white",children:"Help Center"}),e.jsx("a",{href:"#",className:"text-white",children:"Status"}),e.jsx("a",{href:"#",className:"text-white",children:"Security"}),e.jsx("a",{href:"#",className:"text-white",children:"Terms of Service"})]})]}),e.jsxs("p",{className:"text-sm text-white",children:["� ",new Date().getFullYear()," Motion Primitives, Inc. All rights reserved."]})]})})})]})}function at({children:t,className:r,interval:n=2,transition:a={duration:.3},variants:s,onIndexChange:i,trigger:o=!0,mode:l="popLayout"}){const[d,m]=c.useState(0),u=c.Children.toArray(t);c.useEffect(()=>{if(!o)return;const f=n*1e3,h=setInterval(()=>{m(y=>{const w=(y+1)%u.length;return i==null||i(w),w})},f);return()=>clearInterval(h)},[u.length,n,i,o]);const p={initial:{y:20,opacity:0},animate:{y:0,opacity:1},exit:{y:-20,opacity:0}};return e.jsx("div",{className:z("relative inline-block whitespace-nowrap",r),children:e.jsx(C,{mode:l,initial:!1,children:e.jsx(x.div,{initial:"initial",animate:"animate",exit:"exit",transition:a,variants:s||p,children:u[d]},d)})})}function zn(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[e.jsxs("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:[e.jsx("span",{children:"Build faster with beautiful"}),e.jsx("br",{}),e.jsx(at,{variants:{initial:{filter:"blur(5px)",opacity:0},animate:{filter:"blur(0)",opacity:1},exit:{filter:"blur(5px)",opacity:0}},transition:{duration:.4},mode:"wait",children:Sn.map(t=>e.jsx("span",{children:t},t))})]}),e.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}const Sn=["components","templates","layouts","designs"];function Cn(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[e.jsxs("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",style:{perspective:"1000px"},children:[e.jsx("span",{children:"Build faster with beautiful"}),e.jsx("br",{}),e.jsx(at,{variants:{initial:{opacity:0,rotateX:90,filter:"blur(4px)"},animate:{opacity:1,rotateX:0,filter:"blur(0px)"},exit:{opacity:0,rotateX:-90,filter:"blur(4px)"}},transition:{duration:.4},mode:"wait",children:An.map(t=>e.jsx("span",{children:t},t))})]}),e.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}const An=["components","templates","layouts","designs"];function In(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start start","end end"]}),n=b(r,[0,.5],[0,1]),a=b(r,[0,.5],[50,0]),s=b(r,[0,.5],[.8,1]);return e.jsxs("div",{className:"relative min-h-[200vh]",ref:t,children:[e.jsx("div",{className:"h-screen py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"mx-auto flex max-w-md items-center justify-center px-6 text-center lg:px-8",children:e.jsxs(x.div,{style:{opacity:n,y:a,scale:s},children:[e.jsx("h2",{className:"mb-3 text-xl text-zinc-500 sm:text-2xl",children:"For builders"}),e.jsx("p",{className:"text-2xl text-zinc-900 dark:text-zinc-50 sm:text-3xl",children:"A new way to get your products to the next level"})]})})]})}function Tn({children:t,duration:r=.5,getEnterDelay:n=d=>d*.1,getExitDelay:a=d=>d*.1+.2,className:s,transition:i={ease:"easeIn"},variants:o,onAnimationComplete:l}){const d={enter:{initial:{rotateX:0},animate:{rotateX:90}},exit:{initial:{rotateX:90},animate:{rotateX:0}}},m=t.split("");return e.jsxs("span",{className:s,children:[m.map((u,p)=>{var f,h,y,w;return e.jsxs("span",{className:"relative inline-block [perspective:10000px] [transform-style:preserve-3d] [width:auto]","aria-hidden":"true",children:[e.jsx(x.span,{className:"absolute inline-block [backface-visibility:hidden] [transform-origin:50%_25%]",initial:((f=o==null?void 0:o.enter)==null?void 0:f.initial)??d.enter.initial,animate:((h=o==null?void 0:o.enter)==null?void 0:h.animate)??d.enter.animate,transition:{...i,duration:r,delay:n(p)},children:u===" "?" ":u}),e.jsx(x.span,{className:"absolute inline-block [backface-visibility:hidden] [transform-origin:50%_100%]",initial:((y=o==null?void 0:o.exit)==null?void 0:y.initial)??d.exit.initial,animate:((w=o==null?void 0:o.exit)==null?void 0:w.animate)??d.exit.animate,transition:{...i,duration:r,delay:a(p)},onAnimationComplete:m.length===p+1?l:void 0,children:u===" "?" ":u}),e.jsx("span",{className:"invisible",children:u===" "?" ":u})]},p)}),e.jsx("span",{className:"sr-only",children:t})]})}function Ln(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[e.jsxs("h2",{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",children:[e.jsx("span",{children:"AI-powered web templates"}),e.jsx("br",{}),e.jsx("span",{children:"for"})," ",e.jsx(Tn,{className:"inline-flex overflow-clip leading-[0.75]",variants:{enter:{initial:{y:0},animate:{y:40}},exit:{initial:{y:-40},animate:{y:0}}},duration:.3,getEnterDelay:t=>t*.05,getExitDelay:t=>t*.05+.05,transition:{ease:[.175,.885,.32,1.1]},children:"founders"})]}),e.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}function Pn(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto max-w-7xl px-6 text-center lg:px-8",children:[e.jsx(W,{className:"mb-4 text-3xl text-zinc-900 dark:text-white sm:text-4xl",per:"char",variants:{item:{hidden:{opacity:0,scale:1.6,filter:"blur(4px)"},visible:{opacity:1,scale:1,filter:"blur(0px)"}}},speedReveal:1,speedSegment:.5,children:"The best AI for your design"}),e.jsx("p",{className:"text-lg text-zinc-500 dark:text-zinc-400",children:"Improve your development process with beautiful crafted UI."})]})})}const qe={hidden:{opacity:0,y:10,filter:"blur(10px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}};function Mn(){return e.jsxs("div",{className:"relative bg-white dark:bg-zinc-900",children:[e.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:e.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[e.jsx("div",{className:"flex lg:flex-1",children:e.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[e.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),e.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:e.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),e.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),e.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",e.jsx(P,{className:"size-4"})]})})]})}),e.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:e.jsxs("div",{className:"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",children:[e.jsx("div",{className:"hidden sm:mb-8 sm:flex sm:justify-center",children:e.jsxs(x.div,{className:"relative rounded-full px-3 py-1 text-sm/6 text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 dark:text-zinc-400 dark:ring-1 dark:ring-zinc-100/20 dark:hover:ring-zinc-100/20",variants:qe,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.5,ease:"easeOut"},children:["Introducing a revolutionary way to build websites."," ",e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 font-semibold text-zinc-600 dark:text-zinc-400",children:[e.jsx("span",{className:"absolute inset-0","aria-hidden":"true"}),"Learn more ",e.jsx(P,{className:"size-4"})]})]})}),e.jsxs("div",{className:"text-center",children:[e.jsx(W,{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",preset:"fade-in-blur",as:"h1",per:"char",speedReveal:4,segmentTransition:{duration:.5,ease:"easeOut"},children:"Build your dream website fast and easily"}),e.jsx(W,{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-300 sm:text-lg/8",preset:"blur",as:"p",per:"line",delay:.5,speedReveal:.8,segmentTransition:{duration:.5,ease:"easeOut"},children:"Create stunning, professional websites with unparalleled ease. Leverage our intuitive tools and thoughtfully crafted components."}),e.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[e.jsx(x.a,{className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700",variants:qe,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.5,ease:"easeOut"},href:"#",children:"Start building"}),e.jsxs(x.a,{className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",variants:qe,initial:"hidden",animate:"visible",transition:{duration:.5,delay:.6,ease:"easeOut"},href:"#",children:["Watch the film ",e.jsx(P,{className:"size-4"})]})]})]})]})})]})}function En(){const t=Qe(),r=c.useRef(null),{scrollYProgress:n}=A({target:r,offset:["start end","end end"]}),a=b(n,[.75,1],[30,0]);return e.jsxs("div",{ref:r,className:"relative bg-white dark:bg-zinc-900",children:[e.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:e.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[e.jsx("div",{className:"flex lg:flex-1",children:e.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[e.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),e.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:e.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),e.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),e.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",e.jsx(P,{className:"size-4"})]})})]})}),e.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:e.jsxs("div",{className:"mx-auto max-w-2xl py-24 sm:py-32",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",children:"Build your dream website fast and easily"}),e.jsx("p",{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8",children:"Build beautiful websites effortlessly. Utilize our powerful tools to transform your ideas into reality in no time."}),e.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[e.jsx("a",{href:"#",className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600",children:"Start building"}),e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",children:["Watch the film ",e.jsx(P,{className:"size-4"})]})]})]}),e.jsx("div",{className:"mt-16",children:e.jsx("div",{className:"mx-auto mt-4 max-w-screen-lg px-3 [mask-image:linear-gradient(to_bottom,black_60%,transparent)] [perspective:1000px]",children:e.jsx(x.div,{className:"relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900",style:{rotateX:a},children:t.theme==="dark"?e.jsx(et,{className:"absolute top-4 right-4 z-10 text-foreground"}):e.jsx(rt,{className:"absolute top-4 right-4 z-10 text-foreground"})})})})]})})]})}function Rn({children:t,className:r,style:n,rotationFactor:a=15,isRevese:s=!1,springOptions:i}){const o=c.useRef(null),l=Q(0),d=Q(0),m=se(l,i),u=se(d,i),p=b(u,[-.5,.5],s?[a,-a]:[-a,a]),f=b(m,[-.5,.5],s?[-a,a]:[a,-a]),h=oe`perspective(1000px) rotateX(${p}deg) rotateY(${f}deg)`,y=v=>{if(!o.current)return;const N=o.current.getBoundingClientRect(),j=N.width,L=N.height,T=v.clientX-N.left,I=v.clientY-N.top,M=T/j-.5,R=I/L-.5;l.set(M),d.set(R)},w=()=>{l.set(0),d.set(0)};return e.jsx(x.div,{ref:o,className:r,style:{transformStyle:"preserve-3d",...n,transform:h},onMouseMove:y,onMouseLeave:w,children:t})}function Fn(){const t=Qe();return e.jsxs("div",{className:"relative bg-white dark:bg-zinc-900",children:[e.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:e.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[e.jsx("div",{className:"flex lg:flex-1",children:e.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[e.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),e.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:e.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),e.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),e.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",e.jsx(P,{className:"size-4"})]})})]})}),e.jsx("div",{className:"relative isolate px-6 pt-14 lg:px-8",children:e.jsxs("div",{className:"mx-auto max-w-2xl py-24 sm:py-32",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",children:"Build your dream website fast and easily"}),e.jsx("p",{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8",children:"Build beautiful websites effortlessly. Utilize our powerful tools to transform your ideas into reality in no time."}),e.jsxs("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:[e.jsx("a",{href:"#",className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600",children:"Start building"}),e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",children:["Watch the film ",e.jsx(P,{className:"size-4"})]})]})]}),e.jsx("div",{className:"mt-16",children:e.jsx(Rn,{className:"relative",rotationFactor:6,springOptions:{stiffness:150,damping:19,mass:1.2},isRevese:!0,children:e.jsx("div",{className:"mx-auto mt-4 max-w-screen-lg px-3 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]",children:e.jsx("div",{className:"relative aspect-[2/1] w-full overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-900",children:t.theme==="dark"?e.jsx(et,{className:"absolute top-4 right-4 z-10 text-foreground"}):e.jsx(rt,{className:"absolute top-4 right-4 z-10 text-foreground"})})})})})]})})]})}const he={hidden:{opacity:0,y:10,filter:"blur(12px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}},pt=t=>({container:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:t}}},item:{hidden:he.hidden,visible:{...he.visible,transition:{duration:.5}}}});function On(){const t=Qe();return e.jsxs("div",{className:"relative bg-white dark:bg-zinc-900",children:[e.jsx("header",{className:"absolute inset-x-0 top-0 z-50",children:e.jsxs("nav",{className:"flex items-center justify-between p-6 lg:px-8",children:[e.jsx("div",{className:"flex lg:flex-1",children:e.jsxs("a",{href:"/docs",className:"relative flex items-center",children:[e.jsx("span",{className:"sr-only",children:"Motion Primitives Pro"}),e.jsx("svg",{className:"h-8 w-auto",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:e.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]})}),e.jsxs("div",{className:"hidden lg:flex lg:gap-x-12",children:[e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Product"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Features"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Marketplace"}),e.jsx("a",{href:"#",className:"text-sm/6 font-medium text-zinc-900 dark:text-zinc-200",children:"Company"})]}),e.jsx("div",{className:"hidden lg:flex lg:flex-1 lg:justify-end",children:e.jsxs("a",{href:"#",className:"inline-flex items-center gap-1 text-sm/6 font-medium text-zinc-900 dark:text-zinc-200 [&_svg]:pointer-events-none",children:["Log in ",e.jsx(P,{className:"size-4"})]})})]})}),e.jsx("section",{className:"py-28",children:e.jsxs("div",{className:"mx-auto max-w-screen-xl items-center justify-between gap-x-12 overflow-hidden text-gray-600 md:flex md:px-8",children:[e.jsxs("div",{className:"flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl",children:[e.jsx(W,{className:"text-balance text-5xl tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl",as:"h1",per:"char",variants:pt(.03),children:"Easiest way to build websites"}),e.jsx(W,{className:"mt-8 text-pretty text-lg text-zinc-500 dark:text-zinc-400 sm:text-lg/8",as:"p",per:"line",variants:pt(.2),delay:.9,children:"Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."}),e.jsxs("div",{className:"flex items-center gap-x-6",children:[e.jsx(x.a,{className:"rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 dark:bg-zinc-700 dark:hover:bg-zinc-600",variants:he,initial:"hidden",animate:"visible",transition:{duration:.5,delay:1},href:"#",children:"Start building"}),e.jsxs(x.a,{className:"inline-flex items-center gap-1 text-sm/6 font-semibold text-zinc-900 dark:text-zinc-200",variants:he,initial:"hidden",animate:"visible",transition:{duration:.5,delay:1.1},href:"#",children:["Watch the film ",e.jsx(P,{className:"size-4"})]})]})]}),e.jsx(x.div,{className:"mt-10 flex-none p-8 md:mt-0 md:max-w-xl",variants:he,initial:"hidden",animate:"visible",transition:{duration:.5},children:t.theme==="dark"?e.jsx(et,{className:"absolute top-4 right-4 z-10 text-foreground"}):e.jsx(rt,{className:"absolute top-4 right-4 z-10 text-foreground"})})]})})]})}function H(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M21 7.986a25 25 0 0 0-.009-.543a8 8 0 0 0-.104-1.182a4 4 0 0 0-.37-1.125a3.78 3.78 0 0 0-1.653-1.652a4 4 0 0 0-1.124-.371a8 8 0 0 0-1.182-.104a25 25 0 0 0-.543-.008L15.37 3H8.63l-.644.001q-.272.001-.543.008a8 8 0 0 0-1.183.105a4 4 0 0 0-1.123.37a3.8 3.8 0 0 0-1.653 1.653c-.183.36-.3.728-.371 1.124c-.07.39-.094.788-.104 1.182q-.007.272-.008.543L3 8.631v6.738l.001.645q.001.271.008.543c.01.395.034.792.104 1.182c.071.396.188.765.37 1.125a3.78 3.78 0 0 0 1.654 1.652c.36.183.728.3 1.123.37c.39.07.788.094 1.183.105q.27.007.543.008h8.028q.271-.001.543-.008a8 8 0 0 0 1.183-.104a4 4 0 0 0 1.123-.37a3.8 3.8 0 0 0 1.653-1.653c.183-.36.3-.729.37-1.125c.07-.39.094-.788.105-1.182q.007-.27.008-.543zm-4.823 6.727c0 .228-.002.435-.05.663q-.067.334-.262.618a1.6 1.6 0 0 1-.492.455a2 2 0 0 1-.625.228c-.415.083-.699.102-.966.049a1.34 1.34 0 0 1-.65-.33a1.42 1.42 0 0 1-.454-.891a1.42 1.42 0 0 1 .384-1.12c.148-.155.335-.278.584-.375c.26-.1.548-.161.99-.25l.35-.07c.152-.032.284-.07.39-.2s.108-.29.108-.446V9.079c0-.303-.136-.386-.426-.33c-.207.04-4.654.937-4.654.937c-.251.06-.34.143-.34.454v5.808c0 .228-.011.435-.059.663c-.046.221-.131.43-.262.617a1.6 1.6 0 0 1-.492.456a2 2 0 0 1-.625.23c-.415.084-.699.103-.966.05a1.35 1.35 0 0 1-.65-.334a1.4 1.4 0 0 1-.443-.89a1.41 1.41 0 0 1 .373-1.12c.148-.155.335-.278.584-.375c.26-.101.548-.162.99-.25l.35-.071c.152-.031.284-.07.39-.2s.118-.282.118-.438V7.59c0-.09.008-.15.012-.18a.54.54 0 0 1 .18-.348a.75.75 0 0 1 .334-.15H9.9l5.35-1.08c.046-.01.433-.078.476-.082c.29-.025.452.165.452.473z",clipRule:"evenodd"})})}function B(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48",...t,children:e.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M39.445 43.451L24.854 4.6l-15.129 39c10.757-6.374 19.775-6.374 29.72-.149"})})}function V(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"m17.562 9.222l-.526.928c-.495.873-.743 1.309-1.282 1.347c-.54.038-.768-.274-1.225-.898a5.2 5.2 0 0 1-.948-2.37c-.107-.799-.16-1.198-.29-1.395c-.206-.313-.622-.485-.932-.667c-.817-.48-1.226-.72-1.333-1.129c-.108-.407.128-.823.6-1.655s.708-1.248 1.109-1.357c.4-.11.81.131 1.627.611c.31.183.664.462 1.034.488c.232.016.599-.137 1.332-.442a4.95 4.95 0 0 1 2.491-.35c.76.091 1.14.137 1.376.63c.238.495-.01.931-.505 1.804l-.526.926m-2.002 3.53l.434.254a1.984 1.984 0 0 0 2.735-.745a2.057 2.057 0 0 0-.733-2.784l-.434-.255m-2.002 3.53l2.002-3.53M7 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-1-1l7-5M7 22h7m-8-7l5 7",color:"currentColor"})})}function G(t){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 36 36",...t,children:[e.jsx("path",{fill:"currentColor",d:"M32 18c0 7.7-6.2 14-14 14S4 25.8 4 18C4 10.6 9.7 4.5 17.1 4v3.7c-5.7.5-9.8 5.5-9.3 11.2s5.5 9.8 11.2 9.3c5.3-.5 9.3-4.9 9.3-10.2h-2c0 4.6-3.7 8.3-8.3 8.3S9.7 22.6 9.7 18c0-4.2 3.2-7.8 7.3-8.2v4.4c-2.1.6-3.4 2.7-2.9 4.9c.6 2.1 2.7 3.4 4.9 2.9c2.1-.6 3.4-2.7 2.9-4.9c-.4-1.4-1.5-2.5-2.9-2.9V2h-1.1c-8.8 0-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z",className:"clr-i-solid clr-i-solid-path-1"}),e.jsx("path",{fill:"none",d:"M0 0h36v36H0z"})]})}function q(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 512 512",...t,children:e.jsx("path",{fill:"currentColor",d:"M236.977 26.432c-.48 0-.8.32-1.282.32l-2.244 1.123L95.276 85.262C86.78 89.11 79.087 93.757 71.71 99.047c0 0-.32 0-.32.48c-3.526 3.046-6.89 6.573-9.937 10.42c-3.526 4.97-6.572 10.74-8.976 16.83a89 89 0 0 0-2.565 16.993v1.923c0 4.65.64 8.817 2.244 13.145c.32-4.65 1.602-9.62 3.526-13.947c2.244-5.29 6.09-9.938 11.06-13.464c3.046-1.924 6.573-3.847 10.1-4.97c4.648-1.12 9.136-1.922 14.265-2.724c7.695-.8 15.39-1.122 22.282-1.443c9.136 0 18.11.32 27.73.64c11.54.48 22.6 1.924 33.02 3.847c8.176 1.283 15.87 2.726 24.206 4.328l-3.848-5.77l-4.168-8.815c-1.122-3.527-1.924-7.374-1.924-10.9v-1.124c.32-3.847 1.124-7.694 3.047-11.54l8.496-11.542l38.47-50.012c.8-.32.8-1.122.8-1.923c0-.803 0-1.604-.8-2.246c-.32-.48-1.123-.802-1.443-.802zM31.174 144.74c-1.924 3.366-3.823 6.86-5.426 10.227a94.5 94.5 0 0 0-5.01 17.81c-.32 3.046-.765 6.556-.765 9.602c0 2.724.488 4.97.488 7.374c1.123 6.893 2.224 13.485 3.827 19.896c4.168 14.267 10.762 27.415 19.9 38.475c5.128 6.252 10.41 12.007 15.86 16.977a552 552 0 0 0 16.14 13.496c6.573 4.97 13.46 9.296 19.55 12.662c9.298 5.45 18.977 10.408 28.595 15.377c34.945 18.594 72.237 31.553 110.066 38.125c25.007 3.526 50.048 6.592 75.696 8.836c0 5.13.312 10.405 1.113 15.375c.802 6.25 2.256 12.805 4.66 18.576c2.244 6.41 4.99 12.666 8.836 18.436c4.168 6.092 9.09 11.595 14.54 17.045c6.092 5.29 12.692 9.902 20.386 13.43c5.77 2.564 12.003 4.137 18.575 4.938c1.924 0 3.852.348 5.775.348c1.123 0 2.216-.348 3.338-.348l103.248-7.373h.348c.32 0 1.113-.31 1.113-1.113c0-.8-.827-1.12-1.95-1.6c-3.846-1.124-7.985-2.572-12.313-4.175c-4.49-1.603-9.635-3.47-14.123-4.592c-6.572-2.244-13.47-4.68-20.523-6.123a379 379 0 0 0-21.15-4.313c-4.65-.32-9.615-1.105-14.264-2.227c-.64-.32-1.46-1.175-1.46-2.297c0 0 .028-.443.35-.764c0-.48.485-.836.485-.836c0-.32.277-.284.277-.765c1.123-.8 2.775-1.585 3.897-2.226c2.725-1.603 5.437-2.772 8.002-3.894c6.572-3.206 13.47-5.77 20.523-8.977c3.046-1.122 6.068-2.216 9.114-3.338c4.33-1.603 8.966-2.738 15.378-4.662c1.282-.32 2.397-.793 3.2-1.113a506 506 0 0 1 8.07-2.436c-5.45-8.335-12.336-16.484-19.55-23.377l-14.332-13.775c-4.97-4.328-9.588-8.183-13.916-11.55c-7.213-5.128-14.25-10.093-20.662-14.26a344 344 0 0 0-39.308-22.473c-6.893-3.368-13.933-6.38-24.352-10.228c-9.938-3.526-19.525-7.063-17.602-6.262c-8.816-2.725-18.107-5.318-26.923-7.722L270.158 191.7c-7.373 3.848-15.064 7.67-21.637 10.716c-5.77 2.725-11.51 4.208-17.602 5.01c-7.374 1.603-14.61 1.565-21.984.763l-93.436-7.653l25.324 30.264c.802 1.283 1.94 2.712 3.06 4.315c.802.802.766 1.43.766 2.713c-.32 1.122-1.11 1.95-2.712 1.95c-4.49.32-9.127-.008-13.776-.49c-6.572-.8-13.18-1.902-19.27-3.825c-5.45-1.122-10.382-3.043-15.03-5.287c-6.092-2.405-12.383-5.448-17.672-8.975c-4.97-3.044-10.05-6.446-14.54-10.296c-5.13-3.847-9.656-8.154-13.984-12.802c-2.725-3.046-5.41-6.866-7.654-10.713c-2.725-5.29-5.007-10.79-6.61-16.56c-1.122-6.25-2.232-12.355-2.712-17.324c.48-2.725.486-5.4.486-8.766zM20.6 247.3l1.12 9.296c4.65 29.975 15.87 58.83 32.382 84.636c11.22 17.793 25.487 32.7 41.998 44.243l8.816 6.25l17.63 11.06c38.632 22.762 81.272 37.83 125.995 44.402l31.1 2.565l31.737 1.924l33.502-.32c-8.817-5.45-16.833-11.863-23.886-19.237l-6.892-8.015c-5.77-7.373-10.42-15.068-13.465-23.564c-1.443-5.45-2.726-10.418-3.848-15.708l-1.925-12.342l-33.34-3.527l-26.13-3.365l-17.63-2.727c-10.1-1.922-20.037-4.647-30.136-7.692l-32.222-11.54l-25.006-11.222l-25.486-12.664l-23.885-13.145l-18.755-12.662l-23.882-22.28L20.6 247.298zm393.226 92.313c7.213 0 13.15 6.125 13.15 13.498c0 7.535-5.937 13.497-13.15 13.497s-13.148-5.962-13.148-13.496c0-7.372 5.935-13.497 13.148-13.497zm-332.07 85.684c14.266 9.618 27.73 20.037 40.074 31.258c10.74 9.137 20.357 19.235 29.975 29.013c2.725 0 4.97-.802 6.892-1.443c8.496-3.847 16.19-8.015 23.885-12.664q11.061-6.25 19.236-14.905c-4.167-1.603-8.496-3.046-12.664-4.328c-10.42-2.565-20.356-6.092-30.134-10.42c-7.214-3.046-14.108-6.41-20.68-10.258c-.802.32-1.923.32-2.725.32c-4.648 0-9.297-.322-13.785-1.124c-13.465-1.122-26.93-3.045-40.074-5.45z"})})}function Z(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M20.562 10.188c.25-.688.313-1.376.25-2.063c-.062-.687-.312-1.375-.625-2c-.562-.937-1.375-1.687-2.312-2.125c-1-.437-2.063-.562-3.125-.312c-.5-.5-1.063-.938-1.688-1.25S11.687 2 11 2a5.17 5.17 0 0 0-3 .938c-.875.624-1.5 1.5-1.813 2.5c-.75.187-1.375.5-2 .875c-.562.437-1 1-1.375 1.562c-.562.938-.75 2-.625 3.063a5.44 5.44 0 0 0 1.25 2.874a4.7 4.7 0 0 0-.25 2.063c.063.688.313 1.375.625 2c.563.938 1.375 1.688 2.313 2.125c1 .438 2.062.563 3.125.313c.5.5 1.062.937 1.687 1.25S12.312 22 13 22a5.17 5.17 0 0 0 3-.937c.875-.625 1.5-1.5 1.812-2.5a4.54 4.54 0 0 0 1.938-.875c.562-.438 1.062-.938 1.375-1.563c.562-.937.75-2 .625-3.062c-.125-1.063-.5-2.063-1.188-2.876m-7.5 10.5c-1 0-1.75-.313-2.437-.875c0 0 .062-.063.125-.063l4-2.312a.5.5 0 0 0 .25-.25a.57.57 0 0 0 .062-.313V11.25l1.688 1v4.625a3.685 3.685 0 0 1-3.688 3.813M5 17.25c-.438-.75-.625-1.625-.438-2.5c0 0 .063.063.125.063l4 2.312a.56.56 0 0 0 .313.063c.125 0 .25 0 .312-.063l4.875-2.812v1.937l-4.062 2.375A3.7 3.7 0 0 1 7.312 19c-1-.25-1.812-.875-2.312-1.75M3.937 8.563a3.8 3.8 0 0 1 1.938-1.626v4.751c0 .124 0 .25.062.312a.5.5 0 0 0 .25.25l4.875 2.813l-1.687 1l-4-2.313a3.7 3.7 0 0 1-1.75-2.25c-.25-.937-.188-2.062.312-2.937M17.75 11.75l-4.875-2.812l1.687-1l4 2.312c.625.375 1.125.875 1.438 1.5s.5 1.313.437 2.063a3.7 3.7 0 0 1-.75 1.937c-.437.563-1 1-1.687 1.25v-4.75c0-.125 0-.25-.063-.312c0 0-.062-.126-.187-.188m1.687-2.5s-.062-.062-.125-.062l-4-2.313c-.125-.062-.187-.062-.312-.062s-.25 0-.313.062L9.812 9.688V7.75l4.063-2.375c.625-.375 1.312-.5 2.062-.5c.688 0 1.375.25 2 .688c.563.437 1.063 1 1.313 1.625s.312 1.375.187 2.062m-10.5 3.5l-1.687-1V7.063c0-.688.187-1.438.562-2C8.187 4.438 8.75 4 9.375 3.688a3.37 3.37 0 0 1 2.062-.313c.688.063 1.375.375 1.938.813c0 0-.063.062-.125.062l-4 2.313a.5.5 0 0 0-.25.25c-.063.125-.063.187-.063.312zm.875-2L12 9.5l2.187 1.25v2.5L12 14.5l-2.188-1.25z"})})}function U(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M9.5 4.27c1.38.26 3.4.87 4.5 1.23c2.75.95 3.69 2.13 3.69 4.79c0 2.6-1.6 3.58-3.64 2.6V8.05c0-.55-.1-1.08-.64-1.23c-.41-.13-.65.25-.65.81v12.1L9.5 18.69zm3.87 13.35l5.25-1.87c.6-.21.69-.51.21-.67c-.49-.16-1.36-.11-1.96.1l-3.5 1.23v-1.96l.21-.07s1.01-.38 2.42-.51c1.43-.16 3.17.02 4.53.53c1.54.49 1.72 1.21 1.33 1.7c-.4.5-1.36.85-1.36.85l-7.13 2.55zm-9.87-.2C1.93 17 1.66 16.05 2.38 15.5c.67-.5 1.8-.85 1.8-.85L8.86 13v1.88L5.5 16.09c-.6.21-.69.51-.21.67s1.36.12 1.95-.1l1.62-.58v1.69l-.32.06c-1.62.26-3.34.17-5.04-.41"})})}function ee(t){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 48 48",...t,children:e.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M31.016 26.855L19.839 4.5L8.661 26.855m14.033 0L31.016 43.5l8.323-16.645"})})}function Dn(){const[t,r]=c.useState(Se.slice(0,Ue));return c.useEffect(()=>{const n=setInterval(()=>{r(a=>{const i=(Se.indexOf(a[0])+Ue)%Se.length;return Se.slice(i,i+Ue)})},4e3);return()=>clearInterval(n)},[]),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"grid w-full grid-cols-4 gap-4",children:t.map((n,a)=>e.jsx(C,{initial:!1,mode:"wait",children:e.jsx(x.div,{className:"flex items-center justify-center",initial:{scale:.6,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.6,opacity:0},transition:{duration:.3},children:e.jsx(n.Component,{className:"h-8 w-full text-black dark:text-white"})},n.name)},a))})})})}const Ue=4,Se=[{Component:H,name:"AppleMusic"},{Component:B,name:"A24"},{Component:V,name:"Pixar"},{Component:G,name:"Prada"},{Component:q,name:"Salomon"},{Component:Z,name:"OpenAI"},{Component:U,name:"Sony"},{Component:ee,name:"Strava"}];function _n(){const[t,r]=c.useState(Ce.slice(0,Ye));return c.useEffect(()=>{const n=setInterval(()=>{r(a=>{const i=(Ce.indexOf(a[0])+Ye)%Ce.length;return Ce.slice(i,i+Ye)})},4e3);return()=>clearInterval(n)},[]),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"grid w-full grid-cols-4 gap-4",children:e.jsx(C,{initial:!1,mode:"popLayout",children:t.map((n,a)=>e.jsx(x.div,{className:"flex items-center justify-center",initial:{y:30,rotateX:60,opacity:0},animate:{y:0,rotateX:0,opacity:1},exit:{y:-30,rotateX:-60,opacity:0},transition:{duration:.5,delay:a*.15},children:e.jsx(n.Component,{className:"h-8 w-full text-black dark:text-white"})},n.name))})})})})}const Ce=[{Component:H,name:"AppleMusic"},{Component:B,name:"A24"},{Component:V,name:"Pixar"},{Component:G,name:"Prada"},{Component:q,name:"Salomon"},{Component:Z,name:"OpenAI"},{Component:U,name:"Sony"},{Component:ee,name:"Strava"}],Ye=4;function Hn(){const[t,r]=c.useState(Ae.slice(0,4));return c.useEffect(()=>{const n=setInterval(()=>{r(a=>{const i=(Ae.indexOf(a[0])+4)%Ae.length;return Ae.slice(i,i+4)})},6e3);return()=>clearInterval(n)},[]),e.jsx("div",{className:"w-full py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex w-full flex-col items-center gap-4 space-x-2 px-4 py-4 md:flex-row",children:e.jsx("div",{className:"grid w-full grid-cols-4 gap-4",children:e.jsx(C,{initial:!1,mode:"popLayout",children:t.map((n,a)=>e.jsx("div",{className:"relative flex h-10 w-full items-center justify-center overflow-hidden",children:e.jsx(x.div,{className:"absolute inset-0 flex items-center justify-center",initial:{y:-40,opacity:0},animate:{y:0,opacity:1},exit:{y:40,opacity:0},transition:{duration:.5,delay:a*.1},children:e.jsx(n.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"})})},n.name))})})})})})}const Ae=[{Component:H,name:"AppleMusic"},{Component:B,name:"A24"},{Component:V,name:"Pixar"},{Component:G,name:"Prada"},{Component:q,name:"Salomon"},{Component:Z,name:"OpenAI"},{Component:U,name:"Sony"},{Component:ee,name:"Strava"}];function Bn(){const[t,r]=c.useState(Vn);return c.useEffect(()=>{const n=setInterval(()=>{r(a=>{const s=[...a];return[s.pop(),...s]})},4e3);return()=>clearInterval(n)},[]),e.jsx("div",{className:"w-full py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"grid w-full grid-cols-4 gap-x-4 gap-y-8",children:e.jsx(C,{initial:!1,mode:"popLayout",children:t.map((n,a)=>e.jsx(x.div,{className:"flex h-[100px] items-center justify-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",duration:0,delay:a*.1,stiffness:280,damping:18,mass:.3},children:e.jsx(n.Component,{className:"h-full w-[80px] text-black dark:text-white"})},`${n.name}-${a}`))})})})})}const Vn=[{Component:H,name:"AppleMusic"},{Component:B,name:"A24"},{Component:V,name:"Pixar"},{Component:G,name:"Prada"},{Component:q,name:"Salomon"},{Component:Z,name:"OpenAI"},{Component:U,name:"Sony"},{Component:ee,name:"Strava"}];function Gn(){const[t,r]=c.useState(qn);return c.useEffect(()=>{const n=setInterval(()=>{r(a=>{const s=[...a];return[s.pop(),...s]})},4e3);return()=>clearInterval(n)},[]),e.jsx("div",{className:"w-full py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"grid w-full grid-cols-4 gap-x-4 gap-y-8",children:e.jsx(C,{initial:!1,mode:"popLayout",children:t.map((n,a)=>e.jsx(x.div,{className:"flex h-[100px] items-center justify-center",initial:{scale:.6,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.6,opacity:0},transition:{duration:.5,delay:a*.1},children:e.jsx(n.Component,{className:"h-full w-[80px] text-black dark:text-white"})},`${n.name}-${a}`))})})})})}const qn=[{Component:H,name:"AppleMusic"},{Component:B,name:"A24"},{Component:V,name:"Pixar"},{Component:G,name:"Prada"},{Component:q,name:"Salomon"},{Component:Z,name:"OpenAI"},{Component:U,name:"Sony"},{Component:ee,name:"Strava"}];function Un(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",style:{"--shadow-size":"200px"},children:e.jsx(K,{gap:120,children:Yn.map(t=>e.jsx(t.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"},t.name))})})})})}const Yn=[{Component:H,name:"AppleMusic"},{Component:B,name:"A24"},{Component:V,name:"Pixar"},{Component:G,name:"Prada"},{Component:q,name:"Salomon"},{Component:Z,name:"OpenAI"},{Component:U,name:"Sony"},{Component:ee,name:"Strava"}];function $n(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col space-y-24 px-6 lg:px-8",style:{"--shadow-size":"200px"},children:[e.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",children:e.jsx(K,{gap:120,children:ft.map(t=>e.jsx(t.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"},t.name))})}),e.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",children:e.jsx(K,{gap:120,reverse:!0,children:ft.map(t=>e.jsx(t.Component,{className:"h-full w-full max-w-[80px] text-black dark:text-white"},t.name))})})]})})}const ft=[{Component:H,name:"AppleMusic"},{Component:B,name:"A24"},{Component:V,name:"Pixar"},{Component:G,name:"Prada"},{Component:q,name:"Salomon"},{Component:Z,name:"OpenAI"},{Component:U,name:"Sony"},{Component:ee,name:"Strava"}],Xn=c.forwardRef((t,r)=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -28.5 256 256",preserveAspectRatio:"xMidYMid",title:"Discord",...t,ref:r,children:e.jsx("g",{children:e.jsx("path",{d:"M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z",fill:"#5865F2",fillRule:"nonzero"})})}));c.forwardRef((t,r)=>e.jsx("svg",{viewBox:"0 0 98 96",xmlns:"http://www.w3.org/2000/svg",title:"GitHub",...t,ref:r,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#24292f"})}));const Wn=c.forwardRef((t,r)=>e.jsx("svg",{viewBox:"0 0 98 96",xmlns:"http://www.w3.org/2000/svg",title:"GitHub",...t,ref:r,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"#fff"})})),Jn=c.forwardRef((t,r)=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",title:"LinkedIn",...t,ref:r,children:e.jsxs("g",{fill:"none",children:[e.jsx("path",{d:"M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z",fill:"#069"}),e.jsx("path",{d:"M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z",fill:"#fff"})]})})),Qn=c.forwardRef((t,r)=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 172 172",fill:"none",title:"Reddit",...t,ref:r,children:[e.jsx("path",{d:"M85.9 171.4C133.12 171.4 171.4 133.12 171.4 85.9C171.4 38.6796 133.12 0.399994 85.9 0.399994C38.6796 0.399994 0.400002 38.6796 0.400002 85.9C0.400002 133.12 38.6796 171.4 85.9 171.4Z",fill:"#FF4500"}),e.jsx("path",{d:"M142.9 85.9C142.9 79 137.3 73.4 130.4 73.4C127 73.4 124 74.7 121.8 76.9C113.3 70.8 101.5 66.8 88.5 66.3L94.2 39.6L112.7 43.5C112.9 48.2 116.8 52 121.6 52C126.5 52 130.5 48 130.5 43.1C130.5 38.2 126.5 34.2 121.6 34.2C118.1 34.2 115.1 36.2 113.7 39.2L93 34.8C92.4 34.7 91.8 34.8 91.3 35.1C90.8 35.4 90.5 35.9 90.3 36.5L84 66.3C70.7 66.7 58.8 70.6 50.2 76.9C48 74.8 44.9 73.4 41.6 73.4C34.7 73.4 29.1 79 29.1 85.9C29.1 91 32.1 95.3 36.5 97.3C36.3 98.5 36.2 99.8 36.2 101.1C36.2 120.3 58.5 135.8 86.1 135.8C113.7 135.8 136 120.3 136 101.1C136 99.8 135.9 98.6 135.7 97.4C139.8 95.4 142.9 91 142.9 85.9ZM57.4 94.8C57.4 89.9 61.4 85.9 66.3 85.9C71.2 85.9 75.2 89.9 75.2 94.8C75.2 99.7 71.2 103.7 66.3 103.7C61.4 103.7 57.4 99.7 57.4 94.8ZM107.1 118.3C101 124.4 89.4 124.8 86 124.8C82.6 124.8 70.9 124.3 64.9 118.3C64 117.4 64 115.9 64.9 115C65.8 114.1 67.3 114.1 68.2 115C72 118.8 80.2 120.2 86.1 120.2C92 120.2 100.1 118.8 104 115C104.9 114.1 106.4 114.1 107.3 115C108 116 108 117.4 107.1 118.3ZM105.5 103.7C100.6 103.7 96.6 99.7 96.6 94.8C96.6 89.9 100.6 85.9 105.5 85.9C110.4 85.9 114.4 89.9 114.4 94.8C114.4 99.7 110.4 103.7 105.5 103.7Z",fill:"white"})]}));function Kn(){const[t,r]=c.useState(null);return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-wrap justify-center",children:Zn.map((n,a)=>e.jsxs("div",{className:z("relative cursor-pointer px-6 py-2 transition-opacity duration-200",t&&t!==n.name?"opacity-40":"opacity-100"),onMouseEnter:()=>r(n.name),onMouseLeave:()=>r(null),children:[e.jsx("span",{className:"text-sm text-zinc-900 dark:text-white sm:text-lg",children:n.name}),e.jsx(C,{initial:!1,children:t===n.name&&e.jsx(x.div,{className:"absolute bottom-0 left-0 right-0 flex items-center justify-center",initial:{y:-35,rotate:0,opacity:0},animate:{y:-45,opacity:1,rotate:Math.random()*20-10},exit:{y:-35,opacity:0,rotate:0},transition:{duration:.2,ease:[.785,.135,.15,.86]},children:e.jsx(n.icon,{})},n.name)})]},a))})})})}const Zn=[{name:"Discord",icon:Xn},{name:"LinkedIn",icon:Jn},{name:"GitHub",icon:Wn},{name:"Reddit",icon:Qn}];function ea(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3",children:ta.map((t,r)=>e.jsxs("a",{href:t.href,className:"group relative h-32",children:[e.jsx("div",{className:"absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 group-hover:opacity-50 group-hover:blur-[10px] dark:bg-zinc-900",children:e.jsx(t.icon,{className:"h-auto w-20 text-zinc-900 dark:text-white"})}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center",children:e.jsxs("div",{className:"inline-flex translate-y-4 items-center text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:text-white",children:["Visit Site",e.jsx(P,{className:"ml-1",size:16})]})})]},r))})})})}const ta=[{name:"AppleMusic",icon:H,href:"#"},{name:"A24",icon:B,href:"#"},{name:"Pixar",icon:V,href:"#"},{name:"Prada",icon:G,href:"#"},{name:"Salomon",icon:q,href:"#"},{name:"Sony",icon:U,href:"#"}];function ra(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("a",{className:"group relative grid grid-cols-2 gap-4 sm:grid-cols-3",href:"#",children:[na.map((t,r)=>e.jsx("div",{className:"group relative h-32",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 dark:bg-zinc-900",children:e.jsx(t.icon,{className:"h-auto w-20 text-zinc-900 dark:text-white"})})},r)),e.jsxs("div",{className:"absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center",children:[e.jsx("div",{className:"absolute inset-0 bg-white bg-opacity-0 backdrop-blur-[0px] transition-all duration-200 group-hover:bg-opacity-50 group-hover:backdrop-blur-[4px] dark:bg-black dark:bg-opacity-0"}),e.jsxs("div",{className:"inline-flex translate-y-2 scale-[0.95] items-center font-medium text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 dark:text-white",children:["Show case study",e.jsx(P,{className:"ml-1",size:16})]})]})]})})})}const na=[{name:"AppleMusic",icon:H,href:"#"},{name:"A24",icon:B,href:"#"},{name:"Pixar",icon:V,href:"#"},{name:"Prada",icon:G,href:"#"},{name:"Salomon",icon:q,href:"#"},{name:"Sony",icon:U,href:"#"}];function aa(){var i;const[t,r]=c.useState(null),[n,a]=c.useState(0),s=(o,l)=>{r(o.name),a(l.currentTarget.offsetLeft)};return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("nav",{onMouseLeave:()=>r(null),children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"relative flex",children:[e.jsx("ul",{className:"relative flex list-none p-0",role:"menubar",children:gt.map(o=>e.jsx("div",{className:"relative",onMouseEnter:l=>s(o,l),onFocus:l=>s(o,l),role:"menuitem","aria-haspopup":"true","aria-expanded":t===o.name,children:e.jsx(E,{className:"px-3 py-2 text-sm text-zinc-950 dark:text-zinc-50",href:"#",children:o.name})},o.name))}),e.jsx(C,{children:t&&e.jsx(x.div,{layout:!0,className:"absolute top-full mt-2 overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 dark:bg-black dark:ring-white dark:ring-opacity-5",initial:{opacity:0,scale:.95,x:n},animate:{opacity:1,scale:1,x:n},exit:{opacity:0,scale:.95},transition:{duration:.2},onMouseEnter:()=>r(t),onMouseLeave:()=>r(null),children:e.jsx(x.div,{layout:"position",children:(i=gt.find(o=>o.name===t))==null?void 0:i.content})})})]})})})})})})}const gt=[{name:"Products",href:"/products",content:e.jsx("div",{className:"w-[200px]",children:e.jsxs("ul",{className:"flex flex-col space-y-1 py-1",children:[e.jsx("li",{className:"px-1",children:e.jsx(E,{href:"/products/featured",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Featured"})}),e.jsx("li",{className:"px-1",children:e.jsx(E,{href:"/products/new",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"New Arrivals"})}),e.jsx("li",{className:"px-1",children:e.jsx(E,{href:"/products/sale",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Sale"})})]})})},{name:"Membership",href:"/membership",content:e.jsx("div",{className:"p-2",children:e.jsxs("div",{className:"grid grid-cols-2 space-x-2",children:[e.jsx("div",{className:"bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",children:"Feature"}),e.jsx("div",{className:"bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200",children:"Content"})]})})},{name:"About",href:"/about",content:e.jsx("div",{className:"w-[200px]",children:e.jsxs("ul",{className:"flex flex-col space-y-1 py-1",children:[e.jsxs("li",{className:"px-1",children:[" ",e.jsx(E,{href:"/about/story",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Our Story"})," "]}),e.jsxs("li",{className:"px-1",children:[" ",e.jsx(E,{href:"/about/team",className:"block rounded-[4px] px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",children:"Team"})," "]})]})})}];function ia(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto flex max-w-7xl justify-center px-6 lg:px-8",children:e.jsx("div",{className:"flex max-w-full flex-nowrap overflow-x-auto",children:e.jsx(_,{defaultValue:ht[0],className:"rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:.2,duration:.3},enableHover:!0,children:ht.map((t,r)=>e.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white","data-id":t,type:"button",children:t},r))})})})})}const ht=["Home","About","Services","Contact","Pricing","FAQ"];function sa(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto flex max-w-7xl justify-center px-6 lg:px-8",children:e.jsx("div",{className:"flex max-w-full flex-nowrap overflow-x-auto",children:e.jsx(_,{defaultValue:vt[0],className:"rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:.2,duration:.3},children:vt.map((t,r)=>e.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white","data-id":t,type:"button",children:t},r))})})})})}const vt=["Home","About","Services","Contact"];function oa(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"mx-auto w-full max-w-fit rounded-xl border border-zinc-200 p-1 dark:border-zinc-800",children:e.jsx("div",{className:"flex overflow-x-auto",children:e.jsx(_,{defaultValue:bt[0],className:"whitespace-nowrap rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:0,duration:.2},enableHover:!0,children:bt.map((t,r)=>e.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-zinc-950 data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 dark:data-[checked=true]:text-white","data-id":t,type:"button",children:t},r))})})})})})}const bt=["Home","About","Services","Contact"];function la(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"mx-auto w-full max-w-fit rounded-xl border border-zinc-200 p-1 dark:border-zinc-800",children:e.jsx("div",{className:"flex overflow-x-auto",children:e.jsx(_,{defaultValue:yt[0],className:"whitespace-nowrap rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:0,duration:.2},children:yt.map((t,r)=>e.jsx("button",{className:"px-3 py-2 text-sm text-zinc-600 transition-colors duration-300 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-white data-[checked=true]:dark:text-white","data-id":t,type:"button",children:t},r))})})})})})}const yt=["Home","About","Services","Contact"];function ca(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"mx-auto w-full max-w-fit rounded-full bg-zinc-100 p-1 dark:bg-zinc-800",children:e.jsx("div",{className:"flex overflow-x-clip",children:e.jsx(_,{defaultValue:wt[0],className:"z-10 rounded-full bg-white shadow-md dark:bg-black",transition:{type:"spring",bounce:0,duration:.2},children:wt.map((t,r)=>e.jsx("button",{className:"px-3 py-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-black data-[checked=true]:text-black dark:text-zinc-400 dark:hover:text-zinc-50 data-[checked=true]:dark:text-white","data-id":t,type:"button",children:e.jsx("span",{className:"relative z-20",children:t})},r))})})})})})}const wt=["Home","About","Services","Contact"];function da(){const[t,r]=c.useState($e[0]),[n,a]=c.useState(0),[s,i]=c.useState(0),o=c.useRef(null);c.useEffect(()=>{var u;const d=$e.indexOf(t),m=(u=o.current)==null?void 0:u.children[d+1];if(m){const{offsetLeft:p,offsetWidth:f}=m;i(p),a(f)}},[t]);const l=d=>{r(d)};return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{ref:o,className:"relative flex max-w-full overflow-x-auto border-b border-zinc-200 dark:border-zinc-800",children:[e.jsx(x.div,{className:"absolute bottom-0 h-0.5 bg-black dark:bg-white",layoutId:"underline",animate:{x:s,width:n},transition:{type:"spring",bounce:0,duration:.2}}),e.jsx(_,{className:"top-1.5 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800",transition:{type:"spring",bounce:0,duration:.2},enableHover:!0,children:$e.map((d,m)=>e.jsx("button",{className:z("px-3 py-4 text-sm/3 text-zinc-500 transition-colors duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50",t===d&&"text-black dark:text-white"),"data-id":d,type:"button",onClick:()=>l(d),children:d},m))})]})})})})}const $e=["Home","About","Services","Contact"];function ma(){const t=c.useRef(null),[r,n]=c.useState(!1),{scrollYProgress:a}=A({container:t,offset:["start start","100px start"]});return a.on("change",s=>{n(s>0)}),e.jsxs("div",{ref:t,className:"relative mx-auto h-[100vh] max-w-7xl overflow-y-auto px-6 lg:px-8",children:[e.jsx("div",{className:"sticky top-8",children:e.jsx("div",{className:z("flex w-full items-center justify-between rounded-full border transition-all duration-200 ease-out",r?"border-zinc-200 bg-white/80 px-2 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80":"border-transparent bg-transparent px-0 backdrop-blur-0"),children:e.jsxs("div",{className:"flex w-full items-center justify-between p-2",children:[e.jsxs("a",{href:"#",className:"p-1",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("svg",{className:"h-8 w-auto text-zinc-950 dark:text-white",width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",role:"img","aria-label":"MP Logo",children:e.jsx("path",{strokeWidth:"3",stroke:"currentColor",strokeLinecap:"round",d:"M51.883 26.495c-7.277-4.124-18.08-7.004-26.519-7.425-2.357-.118-4.407-.244-6.364 1.06M59.642 51c-10.47-7.25-26.594-13.426-39.514-15.664-3.61-.625-6.744-1.202-9.991.263"})})]}),e.jsxs("div",{className:"flex gap-x-6 sm:gap-x-12",children:[e.jsx("a",{className:"text-sm/6 font-normal text-zinc-900 dark:text-zinc-100",href:"#",children:"Login"}),e.jsx("a",{className:"text-sm/6 font-normal text-zinc-900 dark:text-zinc-100",href:"#",children:"Sign Up"})]})]})})}),e.jsx("div",{className:"mt-32",children:e.jsx("div",{className:"h-[200vh] w-full text-center",children:e.jsx("div",{className:"text-sm",children:"Scroll down"})})})]})}function ua(){return c.useState("GPT-4"),e.jsx("div",{className:"flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8"})}function xa({className:t,size:r=60,transition:n,onAnimationComplete:a,style:s}){const i={repeat:1/0,duration:5,ease:"linear"};return e.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",children:e.jsx(x.div,{className:z("absolute aspect-square bg-zinc-500",t),style:{width:r,offsetPath:`rect(0 auto auto 0 round ${r}px)`,...s},animate:{offsetDistance:["0%","100%"]},transition:n||i,onAnimationComplete:a})})}const ge=[{label:"",isLoading:!1},{label:"Analyzing scope...",isLoading:!1},{label:"Synthesizing solutions...",isLoading:!1},{label:"Finalizing output...",isLoading:!1}];function pa(){const[t,r]=c.useState(""),[n,a]=c.useState(!1),[s,i]=c.useState(0),[o,l]=c.useState(ge[0]),d=u=>{u.key==="Enter"&&(r(""),a(!0),i(1),l({label:ge[1].label,isLoading:!0}))},m=()=>{l(p=>({...p,isLoading:!1}));const u=Math.floor(Math.random()*501)+1500;if(s<ge.length-1){const p=s+1;setTimeout(()=>{i(p),l({label:ge[p].label,isLoading:!0})},u)}else setTimeout(()=>{a(!1),i(0),l(ge[0])},u)};return e.jsx("div",{className:"flex items-center justify-center bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8",children:e.jsxs("div",{className:"relative flex h-[66px] w-[400px] rounded-full bg-[#232323] px-[28px]",children:[e.jsxs("div",{className:"flex flex-1 flex-row items-center gap-5",children:[e.jsx(tt,{className:"size-4 text-white"}),e.jsx("div",{className:"h-[16px] w-[1px] bg-[#373739]"}),e.jsx("input",{type:"text",className:"w-full bg-transparent text-white outline-none",value:t,onChange:u=>r(u.target.value),onKeyDown:d,disabled:n}),e.jsx(W,{className:"absolute left-[82px] top-[19px] whitespace-nowrap text-[#e1e1e1]",variants:{item:{hidden:{opacity:0,filter:"blur(2px)"},visible:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(2px)"}}},per:"word",delay:.5,speedReveal:.9,speedSegment:.3,trigger:o.isLoading,segmentWrapperClassName:"[&>*]:bg-gradient-to-b [&>*]:from-[#e4d3e8] [&>*]:via-[#afe1f0] [&>*]:to-[#e4d3e8] [&>*]:bg-clip-text [&>*]:text-transparent",onAnimationComplete:m,children:o.label},o.label)]}),n&&e.jsx(xa,{className:"h-[500px] rounded-full bg-gradient-to-l from-[#232323] via-[#3d5256] to-[#232323]",size:500,style:{transformOrigin:"50% 90%"}})]})})}function fa({className:t,style:r,colors:n=["#FF5733","#33FF57","#3357FF","#F1C40F"],mode:a="rotate",blur:s="medium",transition:i,scale:o=1,duration:l=5}){const d={repeat:1/0,duration:l,ease:"linear"},m={rotate:{background:[`conic-gradient(from 0deg at 50% 50%, ${n.join(", ")})`,`conic-gradient(from 360deg at 50% 50%, ${n.join(", ")})`],transition:{...i??d}},pulse:{background:n.map(p=>`radial-gradient(circle at 50% 50%, ${p} 0%, transparent 100%)`),scale:[1*o,1.1*o,1*o],opacity:[.5,.8,.5],transition:{...i??{...d,repeatType:"mirror"}}},breathe:{background:[...n.map(p=>`radial-gradient(circle at 50% 50%, ${p} 0%, transparent 100%)`)],scale:[1*o,1.05*o,1*o],transition:{...i??{...d,repeatType:"mirror"}}},colorShift:{background:n.map((p,f)=>{const h=n[(f+1)%n.length];return`conic-gradient(from 0deg at 50% 50%, ${p} 0%, ${h} 50%, ${p} 100%)`}),transition:{...i??{...d,repeatType:"mirror"}}},flowHorizontal:{background:n.map(p=>{const f=n[(n.indexOf(p)+1)%n.length];return`linear-gradient(to right, ${p}, ${f})`}),transition:{...i??{...d,repeatType:"mirror"}}},static:{background:`linear-gradient(to right, ${n.join(", ")})`}},u=p=>typeof p=="number"?`blur-[${p}px]`:{softest:"blur-xs",soft:"blur-sm",medium:"blur-md",strong:"blur-lg",stronger:"blur-xl",strongest:"blur-xl",none:"blur-none"}[p];return e.jsx(x.div,{style:{...r,"--scale":o,willChange:"transform",backfaceVisibility:"hidden"},animate:m[a],className:z("pointer-events-none absolute inset-0 h-full w-full","scale-[var(--scale)] transform-gpu",u(s),t)})}function ga(){const[t,r]=c.useState(""),[n,a]=c.useState(!1);return c.useEffect(()=>{n&&setTimeout(()=>{a(!1)},8e3)},[n]),e.jsx("div",{className:"flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8",children:e.jsxs("div",{className:"relative h-[56px] w-full max-w-[400px]",children:[e.jsx(x.div,{className:"absolute inset-0",animate:{opacity:n?1:0,scale:n?1:.9},transition:{duration:.5,ease:"easeInOut"},children:e.jsx(fa,{colors:["#0894FF","#C959DD","#FF2E54","#FF9004"],mode:"flowHorizontal",blur:"medium"})}),e.jsxs("div",{className:"relative h-[56px] w-full max-w-[400px] rounded-xl [perspective:1000px]",children:[e.jsx("input",{className:z("h-full w-full rounded-xl bg-zinc-100 py-2 pl-[52px] pr-6 text-zinc-800 outline-none placeholder:text-black/30 dark:bg-zinc-800 dark:text-white/60 dark:placeholder:text-white/30"),type:"text",disabled:n,value:n?"":t,onChange:s=>r(s.target.value),placeholder:n?"":"Search...",onKeyDown:s=>{s.key==="Enter"&&a(!0)}}),n&&e.jsxs(at,{className:"pointer-events-none absolute left-[52px] top-1/2 h-6 w-full -translate-y-1/2 leading-6 text-zinc-800 dark:text-white/60",trigger:n,variants:{initial:{opacity:0,y:20,rotateX:-90},animate:{opacity:1,y:0,rotateX:0},exit:{opacity:0,y:-20,rotateX:90}},transition:{type:"spring",stiffness:320,damping:20,mass:1},children:[e.jsx("span",{children:t}),e.jsx("span",{children:"Searching..."})]}),e.jsx(_r,{className:"absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-zinc-700 dark:text-white/30"})]})]})})}function ha(){const[t,r]=c.useState([0,0,0,0]);return c.useEffect(()=>{r([25,15,80,20])},[]),e.jsx("div",{className:"relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24",children:e.jsxs("dl",{className:"grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"New users"}),e.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[e.jsx(X,{value:t[0],springOptions:{bounce:0,duration:2e3}}),"%"]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"Low churn rate"}),e.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[e.jsx(X,{value:t[1],springOptions:{bounce:0,duration:2e3}}),"%"]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"High satisfaction"}),e.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[e.jsx(X,{value:t[2],springOptions:{bounce:0,duration:2e3}}),"%"]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("dt",{className:"mt-1 text-base text-zinc-500 dark:text-zinc-400",children:"MRR"}),e.jsxs("dd",{className:"order-first text-4xl font-normal text-zinc-900 dark:text-white",children:[e.jsx(X,{value:t[3],springOptions:{bounce:0,duration:2e3}}),"k$"]})]})]})})}function va(){const[t,r]=c.useState([0,0,0]);return c.useEffect(()=>{r([12e4,11e3,3e5])},[]),e.jsx("div",{className:"relative mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-24",children:e.jsxs("dl",{className:"grid grid-cols-1 gap-x-6 gap-y-12 text-center sm:grid-cols-2 md:grid-cols-3",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("dt",{className:"mt-1 text-zinc-500 dark:text-zinc-400",children:"Transactions processed"}),e.jsxs("dd",{className:"order-first text-5xl text-zinc-900 dark:text-white",children:["$",e.jsx(X,{value:t[0],springOptions:{bounce:0,duration:2e3}})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("dt",{className:"mt-1 text-zinc-500 dark:text-zinc-400",children:"Users connected last month"}),e.jsx("dd",{className:"order-first text-5xl text-zinc-900 dark:text-white",children:e.jsx(X,{value:t[1],springOptions:{bounce:0,duration:2e3}})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("dt",{className:"mt-1 text-zinc-500 dark:text-zinc-400",children:"Total Views"}),e.jsxs("dd",{className:"order-first text-5xl text-zinc-900 dark:text-white",children:[e.jsx(X,{value:t[2],springOptions:{bounce:0,duration:2e3}}),"+"]})]})]})})}const ba=[{name:"Jon Doe",src:"/avatars/1.png",job:"Software Engineer"},{name:"Jane Doe",src:"/avatars/2.png",job:"Product Manager"},{name:"Fly Doe",src:"/avatars/3.png",job:"Designer"},{name:"Rich Doe",src:"/avatars/4.png",job:"Data Scientist"}];function ya(){const[t,r]=c.useState(null);return e.jsx("div",{className:"w-full py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-wrap justify-center gap-5",children:ba.map((n,a)=>e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:n.src,alt:n.name,onMouseEnter:()=>{r(n.name)},className:"size-16 rounded-full",onMouseLeave:()=>r(null)},a),e.jsx(C,{initial:!1,children:t===n.name&&e.jsxs(x.div,{className:"absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center whitespace-nowrap",initial:{y:-60,rotate:0,opacity:0},animate:{y:-80,opacity:1,rotate:Math.random()*20-10},exit:{y:-60,opacity:0,rotate:0},transition:{duration:.2,ease:[.785,.135,.15,.86]},children:[e.jsx("div",{className:"text-sm font-medium text-zinc-900 dark:text-white",children:n.name}),e.jsx("div",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:n.job})]},n.name)})]},a))})})})}const wa=[{customer:"Jony Ive - LoveFrom",work:"Design Engineering",href:"#"},{customer:"Jessica Walsh - &Walsh",work:"Brand Design",href:"#"},{customer:"Paula Scher - Pentagram",work:"Visual Design",href:"#"},{customer:"Dieter Rams - Braun",work:"Product Engineering",href:"#"},{customer:"Kenya Hara - MUJI",work:"Design Systems",href:"#"}];function Na(){return e.jsx("div",{className:"relative z-0 flex w-full flex-col items-start p-4",children:e.jsx(_,{className:"w-full bg-zinc-100 dark:bg-zinc-900",transition:{type:"spring",bounce:.2,duration:.6},enableHover:!0,children:wa.map((t,r)=>e.jsxs(E,{href:t.href,className:"flex w-full items-center justify-between rounded-sm px-4 py-3","data-id":t.customer,children:[e.jsxs("div",{className:"grid w-full grid-cols-1 md:grid-cols-12 md:gap-4",children:[e.jsx("div",{className:"col-span-3 text-sm font-medium text-zinc-900 dark:text-white",children:t.customer}),e.jsx("div",{className:"col-span-9 text-xs text-zinc-500 md:text-sm",children:t.work})]}),e.jsx("div",{children:e.jsx(P,{className:"size-4 text-zinc-900 dark:text-white"})})]},r))})})}const ja=[{name:"John Doe",src:"/avatars/1.png",job:"Software Engineer"},{name:"Jane Smith",src:"/avatars/2.png",job:"Design Engineer"},{name:"Fiona Doe",src:"/avatars/3.png",job:"Designer"},{name:"Richard Roe",src:"/avatars/4.png",job:"Data Scientist"}],Xe=80,Nt={stiffness:150,damping:19,mass:1.2};function ka(){const[t,r]=c.useState(null);return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center sm:flex-row",children:ja.map((n,a)=>{var m;const s=c.useRef(null),i=Q(0),o=se(i,Nt),l=(m=s.current)==null?void 0:m.getBoundingClientRect(),d=u=>{if(!l)return;const p=u.clientX-l.left-Xe/2;i.set(p)};return e.jsxs("div",{className:z("relative flex cursor-pointer flex-col items-center justify-center px-6 py-6 text-center transition-opacity duration-200 sm:py-2",t&&t!==n.name?"opacity-40":"opacity-100"),onMouseEnter:()=>{r(n.name)},onMouseLeave:()=>{r(null)},onMouseMove:d,ref:s,children:[e.jsx("span",{className:"text-lg text-zinc-900 dark:text-white",children:n.name}),e.jsx("span",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:n.job}),e.jsx(C,{initial:!1,children:t===n.name&&e.jsx(x.div,{className:"pointer-events-none absolute bottom-0 left-0 z-10 sm:pointer-events-auto",initial:{y:-55,opacity:0,filter:"blur(10px)"},animate:{y:-65,opacity:1,filter:"blur(0px)"},exit:{y:-55,opacity:0,filter:"blur(10px)"},style:{x:o},transition:Nt,children:e.jsx("img",{src:n.src,alt:n.name,className:"rounded-[4px]",style:{width:Xe,height:Xe}})},n.name)})]},a)})})})})}const za=[{name:"Jon Doe",src:"/avatars/1.png",job:"Software Engineer"},{name:"Jane Doe",src:"/avatars/2.png",job:"Product Manager"},{name:"Fly Doe",src:"/avatars/3.png",job:"Designer"},{name:"Rich Doe",src:"/avatars/4.png",job:"Data Scientist"},{name:"John Doe",src:"/avatars/5.png",job:"Software Engineer"}];function Sa(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex justify-center -space-x-4",children:za.map((t,r)=>e.jsx("div",{className:"relative rounded-full border-2 border-zinc-50 bg-white transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.2] dark:border-zinc-900 dark:bg-zinc-900",children:e.jsx("img",{src:t.src,alt:t.name,className:"size-12 rounded-full"},r)},r))})})})}const Ca=[{customer:"Jony Ive - LoveFrom",work:"Design Engineering",href:"#"},{customer:"Jessica Walsh - &Walsh",work:"Brand Design",href:"#"},{customer:"Paula Scher - Pentagram",work:"Visual Design",href:"#"},{customer:"Dieter Rams - Braun",work:"Product Engineering",href:"#"},{customer:"Kenya Hara - MUJI",work:"Design Systems",href:"#"}];function Aa({link:t,index:r}){const[n,a]=c.useState(!1),s=()=>e.jsxs("div",{className:"flex w-full items-center justify-between rounded-sm px-4 py-3",children:[e.jsxs("div",{className:"grid w-full grid-cols-1 md:grid-cols-12 md:gap-4",children:[e.jsx("div",{className:"col-span-3 text-sm font-medium text-zinc-900 dark:text-white",children:t.customer}),e.jsx("div",{className:"col-span-9 text-xs text-zinc-500 md:text-sm",children:t.work})]}),e.jsx("div",{children:e.jsx(P,{className:"size-4 text-zinc-900 dark:text-white"})})]});return e.jsx(E,{href:t.href,"data-id":t.customer,children:e.jsxs("div",{className:"relative w-full overflow-hidden",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[e.jsx(x.div,{initial:{y:0},animate:{y:n?-16:0,rotateX:n?90:0},transition:{duration:.5,type:"spring",bounce:0},children:s()}),e.jsx(x.div,{className:"absolute left-0 top-0 w-full",initial:{y:16},animate:{y:n?0:16,rotateX:n?0:90},transition:{duration:.5,type:"spring",bounce:0},children:s()})]})},r)}function Ia(){return e.jsx("div",{className:"relative z-0 flex w-full flex-col items-start p-4",children:e.jsx("div",{className:"flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-800",children:Ca.map((t,r)=>e.jsx(Aa,{link:t,index:r},r))})})}const Ta=[{name:"Jane Doe",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"John Smith",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Alice Johnson",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quosLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos"},{name:"Bob Brown",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Charlie White",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Diana Green",content:"Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."}];function Ie({className:t=""}){const r=Ta.sort(()=>Math.random()-.5);return e.jsx("div",{className:z("flex h-[1000px] w-full overflow-y-hidden [mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",t),style:{"--shadow-size":"100px"},children:e.jsx(K,{gap:24,direction:"vertical",duration:20,className:"flex",children:r.map((n,a)=>e.jsxs("div",{className:"rounded bg-zinc-100 p-4 dark:bg-zinc-900",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-400"}),e.jsx("span",{className:"text-sm text-zinc-950 dark:text-zinc-50",children:n.name})]}),e.jsx("p",{className:"mt-2 flex text-sm text-zinc-600 dark:text-zinc-400",children:n.content})]},a))})})}function La(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:[e.jsx(Ie,{}),e.jsx(Ie,{className:"hidden md:block"}),e.jsx(Ie,{className:"hidden lg:block"}),e.jsx(Ie,{className:"hidden xl:block"})]})})})}const Pa=[{name:"Jane Doe",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"John Smith",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Alice Johnson",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Bob Brown",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{name:"Charlie White",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."},{name:"Diana Green",content:"Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."}];function jt({reverse:t}){const r=Pa.sort(()=>Math.random()-.5);return e.jsx("div",{className:"flex w-full overflow-x-hidden [mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--shadow-size),#000_calc(100%_-_var(--shadow-size)),transparent)]",style:{"--shadow-size":"100px"},children:e.jsx(K,{gap:24,duration:40,reverse:t,durationOnHover:300,children:r.map((n,a)=>e.jsxs("div",{className:"max-w-64 rounded bg-zinc-100 p-4 dark:bg-zinc-900",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"size-4 rounded-full bg-gradient-to-br from-blue-200 to-purple-400"}),e.jsx("span",{className:"text-sm text-zinc-950 dark:text-zinc-50",children:n.name})]}),e.jsx("p",{className:"mt-2 flex text-sm text-zinc-600 dark:text-zinc-400",children:n.content})]},a))})})}function Ma(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col space-y-6 px-6 lg:px-8",style:{"--shadow-size":"200px"},children:[e.jsx(jt,{}),e.jsx(jt,{reverse:!0})]})})}const Ea=[{content:e.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience."})},{content:e.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts."})},{content:e.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts."})}];function Ra(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=[b(r,[0,.3,.4,.5,1],[.3,1,1,.3,.3]),b(r,[.4,.5,.6,.7,1],[.3,1,1,.3,.3]),b(r,[.6,.7,.8,.9,1],[.3,1,1,.3,.3])];return e.jsxs("div",{className:"relative h-[300vh]",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center space-y-8",ref:t,children:Ea.map((a,s)=>e.jsx(x.div,{style:{opacity:n[s]},children:a.content},s))})})})]})}function Fa(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=(a,s)=>b(r,[a,s],[.3,1]);return e.jsxs("div",{className:"relative h-[300vh]",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center space-y-8",ref:t,children:["Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.","Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts.","Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts."].map((a,s)=>e.jsx(x.div,{className:"text-xl font-medium text-black dark:text-white",children:a.split(" ").map((i,o,l)=>{const d=s*.3+o/l.length*.3,m=d+1/l.length*.3;return e.jsx(x.span,{style:{opacity:n(d,m)},className:"mr-1 inline-block",children:i},o)})},s))})})})]})}function Oa(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=b(r,[0,1],[0,100]);return e.jsxs("div",{className:"relative h-[300vh]",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",ref:t,children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center space-y-8",children:e.jsx(x.h1,{className:"bg-[linear-gradient(-60deg,rgba(0,0,0,0)33.3%,rgba(0,0,0,1)66.7%)] bg-[length:300%_100%] bg-clip-text text-4xl text-black [-webkit-text-fill-color:transparent] dark:bg-[linear-gradient(-60deg,rgba(255,255,255,0)33.3%,rgba(255,255,255,1)66.7%)] dark:text-white",style:{backgroundPositionX:oe`calc(100% - ${n}%)`},children:"A new way to build AI apps"})})})})]})}function Da(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=(i,o)=>b(r,[i,o],[.3,1]),a=(i,o)=>b(r,[i,o],[10,0]);return e.jsxs("div",{className:"relative h-[300vh]",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center space-y-8",ref:t,children:e.jsx(x.h1,{className:"text-4xl text-black dark:text-white",children:"A new way to build AI apps".split("").map((i,o,l)=>{const d=Math.max(0,o/l.length*.6-.1),m=Math.min(.9,d+.2);return e.jsx(x.span,{style:{opacity:n(d,m),filter:oe`blur(${a(d,m)}px)`},className:"inline-block whitespace-pre",children:i},o)})})})})})]})}function _a(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=(i,o)=>b(r,[i,o],[.2,1]),a=(i,o)=>b(r,[i,o],[4,0]);return e.jsxs("div",{className:"relative h-[300vh]",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center space-y-8",ref:t,children:e.jsx("div",{className:"text-xl font-medium text-black dark:text-white",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience.".split(" ").map((i,o,l)=>{const d=Math.max(0,o/l.length*.6-.1),m=Math.min(.9,d+.2);return e.jsx(x.span,{style:{opacity:n(d,m),filter:oe`blur(${a(d,m)}px)`},className:"inline-block whitespace-pre",children:i+" "},o)})})})})})]})}const kt=[{image:"https://images.beta.cosmos.so/783ec54f-c1eb-4606-a436-05c5876b47b7?format=jpeg",alt:"Image 1",description:"A stunning view of the mountains at sunrise."},{image:"https://images.beta.cosmos.so/f4c98298-4e01-4cee-853f-bff060323b00?format=jpeg",alt:"Image 2",description:"A serene beach with crystal clear waters."},{image:"https://images.beta.cosmos.so/5bad355c-2311-4926-abbb-9e1e26ee9372?format=jpeg",alt:"Image 3",description:"A bustling cityscape at night."},{image:"https://images.beta.cosmos.so/684428eb-b1cc-4f14-9519-f8034535e4e3?format=jpeg",alt:"Image 4",description:"A tranquil forest path in autumn."},{image:"https://images.beta.cosmos.so/d323e261-0242-47db-ac3e-3d97f2608d15?format=jpeg",alt:"Image 5",description:"A vibrant field of wildflowers in spring."}];function zt({children:t,images:r}){const[n,a]=c.useState(!1);return e.jsxs("a",{className:"relative inline-flex whitespace-pre text-zinc-900 dark:text-white",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),href:"#",children:[t,e.jsx(C,{initial:!1,children:n&&e.jsx(x.div,{className:"absolute bottom-full left-1/2 z-10 mb-2 flex -translate-x-1/2",initial:{opacity:0,scale:.5,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.5,y:10},transition:{type:"spring",stiffness:300,damping:25},children:r.map((s,i)=>e.jsx(x.div,{className:"relative aspect-video h-full w-[120px] overflow-hidden rounded-[4px] shadow-md",style:{marginLeft:i>0?"-0.5rem":"0",zIndex:i},initial:{opacity:0,scale:.6,x:i===0?0:-50*i,y:i===0?0:i%2===0?-Math.random()*20:Math.random()*20,rotate:i===0?0:i%2===0?-Math.random()*8:Math.random()*8},animate:{opacity:1,scale:1},transition:{delay:i*.08,type:"spring",stiffness:300,damping:25},children:e.jsx("img",{src:s.image,alt:s.alt,className:"absolute inset-0 h-full w-full object-cover"})},`${s.image}-${i}`))})})]})}function Ha(){return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsxs("p",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Unparalleled Quality: Experience AI-generated images with breathtaking"," ",e.jsx(zt,{images:kt.slice(0,2),children:"detail"})," ","and"," ",e.jsx(zt,{images:kt.slice(2,5),children:"clarity"}),". Every pixel is crafted to perfection, rivaling the work of master artists. Create images indistinguishable from those made by human experts."]})})})}function Ba(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=b(r,[0,1],[0,1]);return e.jsx(x.div,{ref:t,className:"relative h-[300vh]",style:{"--opacity":n},children:e.jsx("div",{className:"sticky top-0 flex h-screen items-center justify-center",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsx("div",{className:"bg-[radial-gradient(50%_50%_at_50%_50%,theme(colors.purple.100),theme(colors.purple.500)_25%,transparent_50%)] bg-[length:300%_900%] bg-clip-text bg-[50%_calc(100%*var(--opacity))] text-xl font-medium text-transparent",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience."})})})})}function Va(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=b(r,[0,1],[0,1]),a=b(r,[0,.4,.6,1],[8,0,0,8]);return e.jsx(x.div,{ref:t,className:"relative h-[300vh]",style:{"--opacity":n,"--blur":a},children:e.jsx("div",{className:"sticky top-0 flex h-screen items-center justify-center",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsx(x.div,{className:"bg-[radial-gradient(50%_50%_at_50%_50%,theme(colors.zinc.100),theme(colors.zinc.500)_25%,transparent_50%)] bg-[length:300%_900%] bg-clip-text bg-[50%_calc(100%*var(--opacity))] text-xl font-medium text-transparent",style:{filter:"blur(calc(var(--blur) * 1px))"},children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance, bringing your imagination to life. Generate professional-quality visuals without complex software or design experience."})})})})}const Ga=[{content:e.jsxs("div",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Effortless Creation: Transform ideas into stunning visuals with just a few words."," ",e.jsx("span",{className:"text-zinc-900 dark:text-white",children:"Our AI understands context and nuance, bringing your imagination to life"}),". Generate professional-quality visuals without complex software or design experience."]})},{content:e.jsxs("div",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity."," ",e.jsx("span",{className:"text-zinc-900 dark:text-white",children:"Every pixel is crafted to perfection, rivaling the work of master artists"}),". Create images indistinguishable from those made by human experts."]})},{content:e.jsxs("div",{className:"text-xl font-medium text-zinc-500 dark:text-zinc-400",children:["Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI."," ",e.jsx("span",{className:"text-zinc-900 dark:text-white",children:"Our platform adapts to your needs, offering an ever-expanding universe of visual concepts"}),". Push boundaries with genre-blending compositions and futuristic concepts."]})}];function qa(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=[b(r,[.2,.25,1],[0,1,1]),b(r,[.25,.3,1],[0,1,1]),b(r,[.3,.35,1],[0,1,1])],a=[b(r,[.2,.25,1],[10,0,0]),b(r,[.25,.3,1],[10,0,0]),b(r,[.3,.35,1],[10,0,0])];return e.jsxs("div",{className:"relative h-[300vh]",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"grid grid-cols-1 gap-12 lg:grid-cols-3",ref:t,children:Ga.map((s,i)=>e.jsx(x.div,{style:{opacity:n[i],y:a[i]},children:s.content},i))})})})]})}function Ua(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=(i,o)=>b(r,[i,o],[.3,1]),a=(i,o)=>b(r,[i,o],[10,0]);return e.jsxs("div",{className:"relative h-[300vh] w-full",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-2xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center space-y-8",ref:t,children:e.jsx("h1",{className:"text-center text-4xl text-zinc-900 dark:text-white",children:"We want to create a world where AI is accessible to everyone.".split("").map((i,o,l)=>{const d=Math.max(0,o/l.length*.6-.1),m=Math.min(.9,d+.2);return e.jsx(x.span,{style:{opacity:n(d,m),filter:oe`blur(${a(d,m)}px)`},children:i},o)})})})})})]})}function Ya(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=(i,o)=>b(r,[i,o],[0,1]),a=(i,o)=>b(r,[i,o],[0,4]);return e.jsxs("div",{className:"relative h-[300vh] w-full",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-2xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center space-y-8",ref:t,children:e.jsx("h1",{className:"text-center text-4xl text-zinc-900 dark:text-white",children:"We want to create a world where AI is accessible to everyone.".split("").map((i,o,l)=>{const d=Math.max(0,o/l.length*.9),m=Math.min(.9,d+.2);return e.jsx(x.span,{style:{opacity:n(d,m),y:a(d,m)},className:"inline-block whitespace-pre",children:i},o)})})})})})]})}function $a(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]}),n=(o,l)=>b(r,[o,l],[0,1]),a=(o,l)=>b(r,[o,l],[0,4]),s=(o,l)=>b(r,[o,l],[6,0]),i="Introducing a new way to craft beautiful websites, faster";return e.jsxs("div",{className:"relative h-[300vh] w-full",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-2xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center space-y-8",ref:t,children:e.jsx("h1",{className:"text-center text-4xl font-normal text-zinc-900 dark:text-white",children:i.split(" ").map((o,l,d)=>e.jsx("span",{className:"inline-block whitespace-nowrap",children:o.split("").map((m,u,p)=>{const f=i.indexOf(o)+u,h=Math.max(0,f/i.length*.9),y=Math.min(.9,h+.2),w=u===p.length-1,v=l===d.length-1;return e.jsxs(x.span,{style:{opacity:n(h,y),y:a(h,y),filter:oe`blur(${s(h,y)}px)`},className:"inline-block",children:[m,w&&!v&&" "]},u)})},l))})})})})]})}const Xa={hidden:{opacity:0},visible:{opacity:1}};function Wa({children:t,variants:r=Xa,transition:n,viewOptions:a,as:s="div"}){const i=c.useRef(null),o=Je(i,a),l=x[s];return e.jsx(l,{ref:i,initial:"hidden",animate:o?"visible":"hidden",variants:r,transition:n,children:t})}const Te=({children:t})=>e.jsx(Wa,{viewOptions:{once:!0,margin:"0px 0px -100px 0px"},variants:{visible:{backgroundPosition:"0% 0"},hidden:{backgroundPosition:"100% 0"}},transition:{duration:.5},children:t});function Ja(){return e.jsxs("div",{className:"relative h-[300vh] w-full",children:[e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsx("div",{className:"flex flex-col items-center justify-center",children:e.jsx("p",{className:"text-sm text-zinc-500",children:"Scroll down"})})})}),e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col items-center space-y-8",children:[e.jsxs("div",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:["Effortless Creation: Transform ideas into stunning visuals with just a few words."," ",e.jsx(Te,{children:"Our AI understands context and nuance"}),", bringing your imagination to life. Generate professional-quality visuals without complex software or"," ",e.jsx(Te,{children:"design experience"}),"."]}),e.jsxs("div",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:["Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity."," ",e.jsx(Te,{children:"Every pixel is crafted to perfection"}),", rivaling the work of master artists. Create images indistinguishable from those made by human experts."]}),e.jsxs("div",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:["Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts."," ",e.jsx(Te,{children:"Push boundaries with genre-blending compositions"})," ","and futuristic concepts."]})]})})})]})}const Dt=c.createContext(void 0);function Qa({children:t,open:r,onOpenChange:n,variants:a}){const[s,i]=c.useState(r);c.useEffect(()=>{i(r)},[r]);const o=()=>{const l=!s;i(l),n&&n(l)};return e.jsx(Dt.Provider,{value:{open:s,toggle:o,variants:a},children:t})}function _t(){const t=c.useContext(Dt);if(!t)throw new Error("useDisclosure must be used within a DisclosureProvider");return t}function Ka({open:t=!1,onOpenChange:r,children:n,className:a,transition:s,variants:i}){return e.jsx(St,{transition:s,children:e.jsx("div",{className:a,children:e.jsxs(Qa,{open:t,onOpenChange:r,variants:i,children:[c.Children.toArray(n)[0],c.Children.toArray(n)[1]]})})})}function Za({children:t,className:r}){const{toggle:n,open:a}=_t();return e.jsx(e.Fragment,{children:c.Children.map(t,s=>c.isValidElement(s)?c.cloneElement(s,{onClick:n,role:"button","aria-expanded":a,tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),n())},className:z(r,s.props.className),...s.props}):s)})}function ei({children:t,className:r}){const{open:n,variants:a}=_t(),s=c.useId(),i={expanded:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},o={expanded:{...i.expanded,...a==null?void 0:a.expanded},collapsed:{...i.collapsed,...a==null?void 0:a.collapsed}};return e.jsx("div",{className:z("overflow-hidden",r),children:e.jsx(C,{initial:!1,children:n&&e.jsx(x.div,{id:s,initial:"collapsed",animate:"expanded",exit:"collapsed",variants:o,children:t})})})}const Le={ease:[.075,.82,.165,1],duration:.25};function ti(){const[t,r]=c.useState(!1);return e.jsx("div",{className:"py-24 sm:py-32",children:e.jsx("div",{className:"mx-auto max-w-xl px-6 lg:px-8",children:e.jsxs("div",{className:"relative",children:[e.jsx(x.p,{className:"text-xl text-zinc-500 dark:text-zinc-400",initial:{maskImage:"linear-gradient(to top,#000,#000,transparent 0,#000 200px)"},animate:{maskImage:t?"linear-gradient(to top,#000,#000,transparent 0,#000 0px)":"linear-gradient(to top,#000,#000,transparent 0,#000 200px)"},transition:{...Le,duration:t?Le.duration/2:Le.duration*2},children:"Unparalleled Quality: Experience AI-generated images with breathtaking detail and clarity. Every pixel is crafted to perfection , rivaling the work of master artists. Create images indistinguishable from those made by human experts."}),e.jsxs(Ka,{transition:Le,onOpenChange:r,children:[e.jsx(ei,{children:e.jsxs("div",{className:"flex flex-col items-start space-y-8",children:[e.jsx("p",{className:"pt-8 text-xl text-zinc-500 dark:text-zinc-400",children:"Limitless Imagination: Explore infinite creative possibilities with cutting-edge AI. Our platform adapts to your needs, offering an ever-expanding universe of visual concepts. Push boundaries with genre-blending compositions and futuristic concepts."}),e.jsx("p",{className:"text-xl text-zinc-500 dark:text-zinc-400",children:"Effortless Creation: Transform ideas into stunning visuals with just a few words. Our AI understands context and nuance , bringing your imagination to life. Generate professional-quality visuals without complex software or design experience"})]})}),e.jsx(Za,{children:e.jsx("button",{className:"mt-4 w-full py-2 text-left text-xl text-black dark:text-white",type:"button",children:t?"Show less":"Show more"})})]})]})})})}const ri=t=>{switch(t){case"left":return"-50%";case"right":return"-20%";default:return"0%"}};function ni(){const t=c.useRef(null),{scrollYProgress:r}=A({target:t,offset:["start end","end start"]});return e.jsxs("main",{className:"overflow-hidden",children:[e.jsx("div",{className:"h-[90vh]"}),e.jsx("div",{ref:t,className:"flex flex-col space-y-10",children:["left","right","left"].map((n,a)=>e.jsx(ai,{direction:n,progress:r,left:ri(n)},a))}),e.jsx("div",{className:"h-[90vh]"})]})}const ai=({direction:t,progress:r,left:n})=>{const a=t==="left"?-1:1,s=b(r,[0,1],[150*a,-150*a]);return e.jsx(x.div,{style:{x:s,left:n},className:"relative flex whitespace-nowrap",children:[...Array(3)].map((i,o)=>e.jsx("div",{className:"flex items-center gap-5 px-5",children:e.jsx("p",{className:"text-4xl md:text-7xl",children:"Design + Engineering"})},o))})},li={"CTA Sections":[{fullname:"../../samples/CTA Sections/1.tsx",component:wr,fileCnt:`'use client';\r
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
`,uuid:32},{fullname:"../../samples/CTA Sections/2.tsx",component:Br,fileCnt:`'use client';\r
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
`,uuid:33},{fullname:"../../samples/CTA Sections/3.tsx",component:Vr,fileCnt:`'use client';\r
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
`,uuid:34}],"FAQ Sections":[{fullname:"../../samples/FAQ Sections/1.tsx",component:qr,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
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
`,uuid:35},{fullname:"../../samples/FAQ Sections/2.tsx",component:Yr,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
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
`,uuid:36},{fullname:"../../samples/FAQ Sections/3.tsx",component:Xr,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
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
`,uuid:37},{fullname:"../../samples/FAQ Sections/4.tsx",component:Jr,fileCnt:`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '@/components/motion-ui/accordion';\r
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
`,uuid:38}],"Feature Sections":[{fullname:"../../samples/Feature Sections/1.tsx",component:Kr,fileCnt:`'use client';\r
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
`,uuid:39},{fullname:"../../samples/Feature Sections/2.tsx",component:Zr,fileCnt:`'use client';\r
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
`,uuid:40},{fullname:"../../samples/Feature Sections/3.tsx",component:rn,fileCnt:`'use client';\r
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
`,uuid:41},{fullname:"../../samples/Feature Sections/4.tsx",component:an,fileCnt:`'use client';\r
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
`,uuid:42},{fullname:"../../samples/Feature Sections/5.tsx",component:on,fileCnt:`'use client';\r
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
`,uuid:43},{fullname:"../../samples/Feature Sections/6.tsx",component:ln,fileCnt:`'use client';\r
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
`,uuid:44},{fullname:"../../samples/Feature Sections/7.tsx",component:dn,fileCnt:`'use client';\r
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
`,uuid:45},{fullname:"../../samples/Feature Sections/8.tsx",component:mn,fileCnt:`'use client';\r
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
`,uuid:46},{fullname:"../../samples/Feature Sections/9.tsx",component:un,fileCnt:`'use client';\r
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
`,uuid:47},{fullname:"../../samples/Feature Sections/10.tsx",component:xn,fileCnt:`'use client';\r
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
`,uuid:48},{fullname:"../../samples/Feature Sections/11.tsx",component:fn,fileCnt:`'use client';\r
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
`,uuid:49},{fullname:"../../samples/Feature Sections/12.tsx",component:gn,fileCnt:`'use client';\r
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
`,uuid:50},{fullname:"../../samples/Feature Sections/13.tsx",component:hn,fileCnt:`'use client';\r
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
`,uuid:51}],Footers:[{fullname:"../../samples/Footers/1.tsx",component:vn,fileCnt:`import { TextEffect } from "@/components/motion-ui/text-effect";\r
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
`,uuid:52},{fullname:"../../samples/Footers/2.tsx",component:wn,fileCnt:`'use client';\r
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
`,uuid:53},{fullname:"../../samples/Footers/3.tsx",component:Nn,fileCnt:`import GitHubIcon from "@/components/motion-ui-demo-icons/github";\r
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
`,uuid:54},{fullname:"../../samples/Footers/4.tsx",component:jn,fileCnt:`import { InfiniteSlider } from "@/components/motion-ui/infinite-slider";\r
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
`,uuid:55},{fullname:"../../samples/Footers/5.tsx",component:kn,fileCnt:`export function Footer5() {\r
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
`,uuid:56}],"Heading Sections":[{fullname:"../../samples/Heading Sections/1.tsx",component:zn,fileCnt:`import { TextLoop } from "@/components/motion-ui/text-loop";\r
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
`,uuid:57},{fullname:"../../samples/Heading Sections/2.tsx",component:Cn,fileCnt:`import { TextLoop } from "@/components/motion-ui/text-loop";\r
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
`,uuid:58},{fullname:"../../samples/Heading Sections/3.tsx",component:In,fileCnt:`'use client';\r
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
`,uuid:59},{fullname:"../../samples/Heading Sections/4.tsx",component:Ln,fileCnt:`'use client';\r
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
`,uuid:60},{fullname:"../../samples/Heading Sections/5.tsx",component:Pn,fileCnt:`'use client';\r
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
`,uuid:61}],"Hero Sections":[{fullname:"../../samples/Hero Sections/1.tsx",component:Mn,fileCnt:`'use client';\r
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
`,uuid:62},{fullname:"../../samples/Hero Sections/2.tsx",component:En,fileCnt:`'use client';\r
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
`,uuid:63},{fullname:"../../samples/Hero Sections/3.tsx",component:Fn,fileCnt:`'use client';\r
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
`,uuid:64},{fullname:"../../samples/Hero Sections/4.tsx",component:On,fileCnt:`'use client';\r
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
`,uuid:65}],"Logo Clouds":[{fullname:"../../samples/Logo Clouds/1.tsx",component:Dn,fileCnt:`'use client';\r
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
`,uuid:66},{fullname:"../../samples/Logo Clouds/2.tsx",component:_n,fileCnt:`'use client';\r
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
`,uuid:67},{fullname:"../../samples/Logo Clouds/3.tsx",component:Hn,fileCnt:`'use client';\r
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
`,uuid:68},{fullname:"../../samples/Logo Clouds/4.tsx",component:Bn,fileCnt:`'use client';\r
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
`,uuid:69},{fullname:"../../samples/Logo Clouds/5.tsx",component:Gn,fileCnt:`'use client';\r
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
`,uuid:70},{fullname:"../../samples/Logo Clouds/6.tsx",component:Un,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
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
`,uuid:71},{fullname:"../../samples/Logo Clouds/7.tsx",component:$n,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
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
`,uuid:72},{fullname:"../../samples/Logo Clouds/8.tsx",component:Kn,fileCnt:`'use client';\r
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
`,uuid:73},{fullname:"../../samples/Logo Clouds/9.tsx",component:ea,fileCnt:`import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
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
`,uuid:74},{fullname:"../../samples/Logo Clouds/10.tsx",component:ra,fileCnt:`import { AppleMusic, A24, Pixar, Prada, Salomon, OpenAI, Sony, Strava } from '@/components/motion-ui-demo-icons/2';\r
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
`,uuid:75}],Navigation:[{fullname:"../../samples/Navigation/1.tsx",component:aa,fileCnt:`'use client';\r
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
`,uuid:76},{fullname:"../../samples/Navigation/2.tsx",component:ia,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
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
`,uuid:77},{fullname:"../../samples/Navigation/3.tsx",component:sa,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
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
`,uuid:78},{fullname:"../../samples/Navigation/4.tsx",component:oa,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
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
`,uuid:79},{fullname:"../../samples/Navigation/5.tsx",component:la,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
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
`,uuid:80},{fullname:"../../samples/Navigation/6.tsx",component:ca,fileCnt:`import { AnimatedBackground } from '@/components/motion-ui/animated-background';\r
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
`,uuid:81},{fullname:"../../samples/Navigation/7.tsx",component:da,fileCnt:`'use client';\r
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
`,uuid:82},{fullname:"../../samples/Navigation/8.tsx",component:ma,fileCnt:`'use client';\r
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
`,uuid:83}],"Special Components":[{fullname:"../../samples/Special Components/1.tsx",component:ua,fileCnt:`'use client';\r
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
`,uuid:84},{fullname:"../../samples/Special Components/2.tsx",component:pa,fileCnt:`'use client';\r
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
`,uuid:85},{fullname:"../../samples/Special Components/3.tsx",component:ga,fileCnt:`'use client';\r
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
`,uuid:86}],"Stats Sections":[{fullname:"../../samples/Stats Sections/1.tsx",component:ha,fileCnt:`'use client';\r
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
`,uuid:87},{fullname:"../../samples/Stats Sections/2.tsx",component:va,fileCnt:`'use client';\r
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
`,uuid:88}],"Team sections":[{fullname:"../../samples/Team sections/1.tsx",component:ya,fileCnt:`'use client';\r
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
`,uuid:89},{fullname:"../../samples/Team sections/2.tsx",component:Na,fileCnt:`import { ArrowRightIcon } from 'lucide-react';\r
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
`,uuid:90},{fullname:"../../samples/Team sections/3.tsx",component:ka,fileCnt:`'use client';\r
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
`,uuid:91},{fullname:"../../samples/Team sections/4.tsx",component:Sa,fileCnt:`'use client';\r
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
`,uuid:92},{fullname:"../../samples/Team sections/5.tsx",component:Ia,fileCnt:`'use client';\r
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
`,uuid:93}],Testimonials:[{fullname:"../../samples/Testimonials/1.tsx",component:La,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
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
`,uuid:94},{fullname:"../../samples/Testimonials/2.tsx",component:Ma,fileCnt:`import { InfiniteSlider } from '@/components/motion-ui/infinite-slider';\r
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
`,uuid:95}],"Text Sections":[{fullname:"../../samples/Text Sections/1.tsx",component:Ra,fileCnt:`'use client';\r
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
`,uuid:96},{fullname:"../../samples/Text Sections/2.tsx",component:Fa,fileCnt:`'use client';\r
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
`,uuid:97},{fullname:"../../samples/Text Sections/3.tsx",component:Oa,fileCnt:`'use client';\r
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
`,uuid:98},{fullname:"../../samples/Text Sections/4.tsx",component:Da,fileCnt:`'use client';\r
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
`,uuid:99},{fullname:"../../samples/Text Sections/5.tsx",component:_a,fileCnt:`'use client';\r
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
`,uuid:100},{fullname:"../../samples/Text Sections/6.tsx",component:Ha,fileCnt:`'use client';\r
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
`,uuid:101},{fullname:"../../samples/Text Sections/7.tsx",component:Ba,fileCnt:`'use client';\r
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
`,uuid:102},{fullname:"../../samples/Text Sections/8.tsx",component:Va,fileCnt:`'use client';\r
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
`,uuid:103},{fullname:"../../samples/Text Sections/9.tsx",component:qa,fileCnt:`'use client';\r
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
`,uuid:104},{fullname:"../../samples/Text Sections/10.tsx",component:Ua,fileCnt:`'use client';\r
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
`,uuid:105},{fullname:"../../samples/Text Sections/11.tsx",component:Ya,fileCnt:`'use client';\r
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
`,uuid:106},{fullname:"../../samples/Text Sections/12.tsx",component:$a,fileCnt:`'use client';\r
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
`,uuid:107},{fullname:"../../samples/Text Sections/13.tsx",component:Ja,fileCnt:`'use client';\r
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
`,uuid:108},{fullname:"../../samples/Text Sections/14.tsx",component:ti,fileCnt:`'use client';\r
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
`,uuid:109},{fullname:"../../samples/Text Sections/15.tsx",component:ni,fileCnt:`'use client';\r
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
`,uuid:110}]};export{br as a,li as b,z as c,oi as l};
