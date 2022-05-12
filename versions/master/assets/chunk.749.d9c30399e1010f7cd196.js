(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[749],{749:function(t){t.exports=function(){"use strict"
var t,e,i
function r(r,n){if(t)if(e){var s="var sharedChunk = {}; ("+t+")(sharedChunk); ("+e+")(sharedChunk);",o={}
t(o),i=n(o),"undefined"!=typeof window&&(i.workerUrl=window.URL.createObjectURL(new Blob([s],{type:"text/javascript"})))}else e=n
else t=n}return r(0,(function(t){var e=i
function i(t,e,i,r){this.cx=3*t,this.bx=3*(i-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(r-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=e,this.p2x=i,this.p2y=r}function r(t,i,r,n){const s=new e(t,i,r,n)
return function(t){return s.solve(t)}}i.prototype={sampleCurveX:function(t){return((this.ax*t+this.bx)*t+this.cx)*t},sampleCurveY:function(t){return((this.ay*t+this.by)*t+this.cy)*t},sampleCurveDerivativeX:function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},solveCurveX:function(t,e){if(void 0===e&&(e=1e-6),t<0)return 0
if(t>1)return 1
for(var i=t,r=0;r<8;r++){var n=this.sampleCurveX(i)-t
if(Math.abs(n)<e)return i
var s=this.sampleCurveDerivativeX(i)
if(Math.abs(s)<1e-6)break
i-=n/s}var o=0,a=1
for(i=t,r=0;r<20&&(n=this.sampleCurveX(i),!(Math.abs(n-t)<e));r++)t>n?o=i:a=i,i=.5*(a-o)+o
return i},solve:function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}}
const n=r(.25,.1,.25,1)
function s(t,e,i){return Math.min(i,Math.max(e,t))}function o(t,e,i){const r=i-e,n=((t-e)%r+r)%r+e
return n===e?i:n}function a(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r]
for(const n of i)for(const e in n)t[e]=n[e]
return t}let l=1
function c(t,e){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function h(t,e,i){const r={}
for(const n in t)r[n]=e.call(i||this,t[n],n,t)
return r}function u(t,e,i){const r={}
for(const n in t)e.call(i||this,t[n],n,t)&&(r[n]=t[n])
return r}function p(t){return Array.isArray(t)?t.map(p):"object"==typeof t&&t?h(t,p):t}const d={}
function m(t){d[t]||("undefined"!=typeof console&&console.warn(t),d[t]=!0)}function f(t,e,i){return(i.y-t.y)*(e.x-t.x)>(e.y-t.y)*(i.x-t.x)}function g(t){let e=0
for(let i,r,n=0,s=t.length,o=s-1;n<s;o=n++)i=t[n],r=t[o],e+=(r.x-i.x)*(i.y+r.y)
return e}function _(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}let y,x,v=null
function b(t){if(null==v){const e=t.navigator?t.navigator.userAgent:null
v=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")))}return v}function w(t){return"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap}const S={now:"undefined"!=typeof performance&&performance&&performance.now?performance.now.bind(performance):Date.now.bind(Date),frame(t){const e=requestAnimationFrame(t)
return{cancel:()=>cancelAnimationFrame(e)}},getImageData(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const i=window.document.createElement("canvas"),r=i.getContext("2d")
if(!r)throw new Error("failed to create canvas 2d context")
return i.width=t.width,i.height=t.height,r.drawImage(t,0,0,t.width,t.height),r.getImageData(-e,-e,t.width+2*e,t.height+2*e)},resolveURL:t=>(y||(y=document.createElement("a")),y.href=t,y.href),hardwareConcurrency:"undefined"!=typeof navigator&&navigator.hardwareConcurrency||4,get prefersReducedMotion(){return!!matchMedia&&(null==x&&(x=matchMedia("(prefers-reduced-motion: reduce)")),x.matches)}}
var T=I
function I(t,e){this.x=t,this.y=e}I.prototype={clone:function(){return new I(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,i=t.y-this.y
return e*e+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y
return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y
return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),i=Math.sin(t),r=i*this.x+e*this.y
return this.x=e*this.x-i*this.y,this.y=r,this},_rotateAround:function(t,e){var i=Math.cos(t),r=Math.sin(t),n=e.y+r*(this.x-e.x)+i*(this.y-e.y)
return this.x=e.x+i*(this.x-e.x)-r*(this.y-e.y),this.y=n,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},I.convert=function(t){return t instanceof I?t:Array.isArray(t)?new I(t[0],t[1]):t}
const E={MAX_PARALLEL_IMAGE_REQUESTS:16,REGISTERED_PROTOCOLS:{}},A="mapbox-tiles"
let z,C=500,P=50
let k=1/0
const M={supported:!1,testSupport:function(t){!B&&L&&(R?F(t):D=t)}}
let D,L,B=!1,R=!1
function F(t){const e=t.createTexture()
t.bindTexture(t.TEXTURE_2D,e)
try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,L),t.isContextLost())return
M.supported=!0}catch(t){}t.deleteTexture(e),B=!0}"undefined"!=typeof document&&(L=document.createElement("img"),L.onload=function(){D&&F(D),D=null,R=!0},L.onerror=function(){B=!0,D=null},L.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=")
const O={Unknown:"Unknown",Style:"Style",Source:"Source",Tile:"Tile",Glyphs:"Glyphs",SpriteImage:"SpriteImage",SpriteJSON:"SpriteJSON",Image:"Image"}
"function"==typeof Object.freeze&&Object.freeze(O)
class U extends Error{constructor(t,e,i,r){super(`AJAXError: ${e} (${t}): ${i}`),this.status=t,this.statusText=e,this.url=i,this.body=r}}const V=_()?()=>self.worker&&self.worker.referrer:()=>("blob:"===window.location.protocol?window.parent:window).location.href
function N(t,e){const i=new AbortController,r=new Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:V(),signal:i.signal})
let n=!1,s=!1
return"json"===t.type&&r.headers.set("Accept","application/json"),s||(Date.now(),fetch(r).then((i=>i.ok?((i,r,o)=>{("arrayBuffer"===t.type?i.arrayBuffer():"json"===t.type?i.json():i.text()).then((t=>{s||(n=!0,e(null,t,i.headers.get("Cache-Control"),i.headers.get("Expires")))})).catch((t=>{s||e(new Error(t.message))}))})(i):i.blob().then((r=>e(new U(i.status,i.statusText,t.url,r)))))).catch((t=>{20!==t.code&&e(new Error(t.message))}))),{cancel:()=>{s=!0,n||i.abort()}}}const $=function(t,e){if(/:\/\//.test(t.url)&&!/^https?:|^file:/.test(t.url)){if(_()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e)
if(!_()){const i=t.url.substring(0,t.url.indexOf("://"))
return(E.REGISTERED_PROTOCOLS[i]||N)(t,e)}}if(!(/^file:/.test(i=t.url)||/^file:/.test(V())&&!/^\w+:/.test(i))){if(fetch&&Request&&AbortController&&Object.prototype.hasOwnProperty.call(Request.prototype,"signal"))return N(t,e)
if(_()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e,void 0,!0)}var i
return function(t,e){const i=new XMLHttpRequest
i.open(t.method||"GET",t.url,!0),"arrayBuffer"===t.type&&(i.responseType="arraybuffer")
for(const r in t.headers)i.setRequestHeader(r,t.headers[r])
return"json"===t.type&&(i.responseType="text",i.setRequestHeader("Accept","application/json")),i.withCredentials="include"===t.credentials,i.onerror=()=>{e(new Error(i.statusText))},i.onload=()=>{if((i.status>=200&&i.status<300||0===i.status)&&null!==i.response){let r=i.response
if("json"===t.type)try{r=JSON.parse(i.response)}catch(t){return e(t)}e(null,r,i.getResponseHeader("Cache-Control"),i.getResponseHeader("Expires"))}else{const r=new Blob([i.response],{type:i.getResponseHeader("Content-Type")})
e(new U(i.status,i.statusText,t.url,r))}},i.send(t.body),{cancel:()=>i.abort()}}(t,e)},q=function(t,e){return $(a(t,{type:"arrayBuffer"}),e)}
function G(t){const e=window.document.createElement("a")
return e.href=t,e.protocol===window.document.location.protocol&&e.host===window.document.location.host}const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="
let Z,X
Z=[],X=0
const W=function(t,e){if(M.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*"),X>=E.MAX_PARALLEL_IMAGE_REQUESTS){const i={requestParameters:t,callback:e,cancelled:!1,cancel(){this.cancelled=!0}}
return Z.push(i),i}X++
let i=!1
const r=()=>{if(!i)for(i=!0,X--;Z.length&&X<E.MAX_PARALLEL_IMAGE_REQUESTS;){const t=Z.shift(),{requestParameters:e,callback:i,cancelled:r}=t
r||(t.cancel=W(e,i).cancel)}},n=q(t,((t,i,n,s)=>{r(),t?e(t):i&&function(t,e){"function"==typeof createImageBitmap?function(t,e){const i=new Blob([new Uint8Array(t)],{type:"image/png"})
createImageBitmap(i).then((t=>{e(null,t)})).catch((t=>{e(new Error(`Could not load image because of ${t.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`))}))}(t,e):function(t,e){const i=new Image
i.onload=()=>{e(null,i),URL.revokeObjectURL(i.src),i.onload=null,window.requestAnimationFrame((()=>{i.src=j}))},i.onerror=()=>e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))
const r=new Blob([new Uint8Array(t)],{type:"image/png"})
i.src=t.byteLength?URL.createObjectURL(r):j}(t,e)}(i,((t,i)=>{null!=t?e(t):null!=i&&e(null,i,{cacheControl:n,expires:s})}))}))
return{cancel:()=>{n.cancel(),r()}}}
function H(t,e,i){i[t]&&-1!==i[t].indexOf(e)||(i[t]=i[t]||[],i[t].push(e))}function K(t,e,i){if(i&&i[t]){const r=i[t].indexOf(e);-1!==r&&i[t].splice(r,1)}}class Y{constructor(t){a(this,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),this.type=t}}class J extends Y{constructor(t){super("error",a({error:t},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}}class Q{on(t,e){return this._listeners=this._listeners||{},H(t,e,this._listeners),this}off(t,e){return K(t,e,this._listeners),K(t,e,this._oneTimeListeners),this}once(t,e){return this._oneTimeListeners=this._oneTimeListeners||{},H(t,e,this._oneTimeListeners),this}fire(t,e){"string"==typeof t&&(t=new Y(t,e||{}))
const i=t.type
if(this.listens(i)){t.target=this
const e=this._listeners&&this._listeners[i]?this._listeners[i].slice():[]
for(const i of e)i.call(this,t)
const r=this._oneTimeListeners&&this._oneTimeListeners[i]?this._oneTimeListeners[i].slice():[]
for(const s of r)K(i,s,this._oneTimeListeners),s.call(this,t)
const n=this._eventedParent
n&&(a(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),n.fire(t))}else t instanceof J&&console.error(t.error)
return this}listens(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)}setEventedParent(t,e){return this._eventedParent=t,this._eventedParentData=e,this}}var tt={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},sources:{required:!0,type:"sources"},sprite:{type:"string"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},promoteId:{type:"promoteId"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},filter:{type:"*"},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterMinPoints:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image",{"!":"icon-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},"viewport-glyph":{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field",{"!":"text-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{},within:{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}},promoteId:{"*":{type:"string"}}}
class et{constructor(t,e,i,r){this.message=(t?`${t}: `:"")+i,r&&(this.identifier=r),null!=e&&e.__line__&&(this.line=e.__line__)}}function it(t){const e=t.value
return e?[new et(t.key,e,"constants have been deprecated as of v8")]:[]}function rt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r]
for(const n of i)for(const e in n)t[e]=n[e]
return t}function nt(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function st(t){if(Array.isArray(t))return t.map(st)
if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){const e={}
for(const i in t)e[i]=st(t[i])
return e}return nt(t)}class ot extends Error{constructor(t,e){super(e),this.message=e,this.key=t}}class at{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
this.parent=t,this.bindings={}
for(const[i,r]of e)this.bindings[i]=r}concat(t){return new at(this,t)}get(t){if(this.bindings[t])return this.bindings[t]
if(this.parent)return this.parent.get(t)
throw new Error(`${t} not found in scope.`)}has(t){return!!this.bindings[t]||!!this.parent&&this.parent.has(t)}}const lt={kind:"null"},ct={kind:"number"},ht={kind:"string"},ut={kind:"boolean"},pt={kind:"color"},dt={kind:"object"},mt={kind:"value"},ft={kind:"collator"},gt={kind:"formatted"},_t={kind:"resolvedImage"}
function yt(t,e){return{kind:"array",itemType:t,N:e}}function xt(t){if("array"===t.kind){const e=xt(t.itemType)
return"number"==typeof t.N?`array<${e}, ${t.N}>`:"value"===t.itemType.kind?"array":`array<${e}>`}return t.kind}const vt=[lt,ct,ht,ut,pt,gt,dt,yt(mt),_t]
function bt(t,e){if("error"===e.kind)return null
if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!bt(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null
if("value"===t.kind)for(const t of vt)if(!bt(t,e))return null}return`Expected ${xt(t)} but found ${xt(e)} instead.`}function wt(t,e){return e.some((e=>e.kind===t.kind))}function St(t,e){return e.some((e=>"null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t))}var Tt,It={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],rebeccapurple:[102,51,153,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]}
function Et(t){return(t=Math.round(t))<0?0:t>255?255:t}function At(t){return Et("%"===t[t.length-1]?parseFloat(t)/100*255:parseInt(t))}function zt(t){return(e="%"===t[t.length-1]?parseFloat(t)/100:parseFloat(t))<0?0:e>1?1:e
var e}function Ct(t,e,i){return i<0?i+=1:i>1&&(i-=1),6*i<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}try{Tt={}.parseCSSColor=function(t){var e,i=t.replace(/ /g,"").toLowerCase()
if(i in It)return It[i].slice()
if("#"===i[0])return 4===i.length?(e=parseInt(i.substr(1),16))>=0&&e<=4095?[(3840&e)>>4|(3840&e)>>8,240&e|(240&e)>>4,15&e|(15&e)<<4,1]:null:7===i.length&&(e=parseInt(i.substr(1),16))>=0&&e<=16777215?[(16711680&e)>>16,(65280&e)>>8,255&e,1]:null
var r=i.indexOf("("),n=i.indexOf(")")
if(-1!==r&&n+1===i.length){var s=i.substr(0,r),o=i.substr(r+1,n-(r+1)).split(","),a=1
switch(s){case"rgba":if(4!==o.length)return null
a=zt(o.pop())
case"rgb":return 3!==o.length?null:[At(o[0]),At(o[1]),At(o[2]),a]
case"hsla":if(4!==o.length)return null
a=zt(o.pop())
case"hsl":if(3!==o.length)return null
var l=(parseFloat(o[0])%360+360)%360/360,c=zt(o[1]),h=zt(o[2]),u=h<=.5?h*(c+1):h+c-h*c,p=2*h-u
return[Et(255*Ct(p,u,l+1/3)),Et(255*Ct(p,u,l)),Et(255*Ct(p,u,l-1/3)),a]
default:return null}}return null}}catch(t){}class Pt{constructor(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
this.r=t,this.g=e,this.b=i,this.a=r}static parse(t){if(!t)return
if(t instanceof Pt)return t
if("string"!=typeof t)return
const e=Tt(t)
return e?new Pt(e[0]/255*e[3],e[1]/255*e[3],e[2]/255*e[3],e[3]):void 0}toString(){const[t,e,i,r]=this.toArray()
return`rgba(${Math.round(t)},${Math.round(e)},${Math.round(i)},${r})`}toArray(){const{r:t,g:e,b:i,a:r}=this
return 0===r?[0,0,0,0]:[255*t/r,255*e/r,255*i/r,r]}}Pt.black=new Pt(0,0,0,1),Pt.white=new Pt(1,1,1,1),Pt.transparent=new Pt(0,0,0,0),Pt.red=new Pt(1,0,0,1)
class kt{constructor(t,e,i){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=i,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"})}compare(t,e){return this.collator.compare(t,e)}resolvedLocale(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}}class Mt{constructor(t,e,i,r,n){this.text=t,this.image=e,this.scale=i,this.fontStack=r,this.textColor=n}}class Dt{constructor(t){this.sections=t}static fromString(t){return new Dt([new Mt(t,null,null,null,null)])}isEmpty(){return 0===this.sections.length||!this.sections.some((t=>0!==t.text.length||t.image&&0!==t.image.name.length))}static factory(t){return t instanceof Dt?t:Dt.fromString(t)}toString(){return 0===this.sections.length?"":this.sections.map((t=>t.text)).join("")}serialize(){const t=["format"]
for(const e of this.sections){if(e.image){t.push(["image",e.image.name])
continue}t.push(e.text)
const i={}
e.fontStack&&(i["text-font"]=["literal",e.fontStack.split(",")]),e.scale&&(i["font-scale"]=e.scale),e.textColor&&(i["text-color"]=["rgba"].concat(e.textColor.toArray())),t.push(i)}return t}}class Lt{constructor(t){this.name=t.name,this.available=t.available}toString(){return this.name}static fromString(t){return t?new Lt({name:t,available:!1}):null}serialize(){return["image",this.name]}}function Bt(t,e,i,r){return"number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof i&&i>=0&&i<=255?void 0===r||"number"==typeof r&&r>=0&&r<=1?null:`Invalid rgba value [${[t,e,i,r].join(", ")}]: 'a' must be between 0 and 1.`:`Invalid rgba value [${("number"==typeof r?[t,e,i,r]:[t,e,i]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`}function Rt(t){if(null===t)return!0
if("string"==typeof t)return!0
if("boolean"==typeof t)return!0
if("number"==typeof t)return!0
if(t instanceof Pt)return!0
if(t instanceof kt)return!0
if(t instanceof Dt)return!0
if(t instanceof Lt)return!0
if(Array.isArray(t)){for(const e of t)if(!Rt(e))return!1
return!0}if("object"==typeof t){for(const e in t)if(!Rt(t[e]))return!1
return!0}return!1}function Ft(t){if(null===t)return lt
if("string"==typeof t)return ht
if("boolean"==typeof t)return ut
if("number"==typeof t)return ct
if(t instanceof Pt)return pt
if(t instanceof kt)return ft
if(t instanceof Dt)return gt
if(t instanceof Lt)return _t
if(Array.isArray(t)){const e=t.length
let i
for(const r of t){const t=Ft(r)
if(i){if(i===t)continue
i=mt
break}i=t}return yt(i||mt,e)}return dt}function Ot(t){const e=typeof t
return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof Pt||t instanceof Dt||t instanceof Lt?t.toString():JSON.stringify(t)}class Ut{constructor(t,e){this.type=t,this.value=e}static parse(t,e){if(2!==t.length)return e.error(`'literal' expression requires exactly one argument, but found ${t.length-1} instead.`)
if(!Rt(t[1]))return e.error("invalid value")
const i=t[1]
let r=Ft(i)
const n=e.expectedType
return"array"!==r.kind||0!==r.N||!n||"array"!==n.kind||"number"==typeof n.N&&0!==n.N||(r=n),new Ut(r,i)}evaluate(){return this.value}eachChild(){}outputDefined(){return!0}serialize(){return"array"===this.type.kind||"object"===this.type.kind?["literal",this.value]:this.value instanceof Pt?["rgba"].concat(this.value.toArray()):this.value instanceof Dt?this.value.serialize():this.value}}class Vt{constructor(t){this.name="ExpressionEvaluationError",this.message=t}toJSON(){return this.message}}const Nt={string:ht,number:ct,boolean:ut,object:dt}
class $t{constructor(t,e){this.type=t,this.args=e}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.")
let i,r=1
const n=t[0]
if("array"===n){let n,s
if(t.length>2){const i=t[1]
if("string"!=typeof i||!(i in Nt)||"object"===i)return e.error('The item type argument of "array" must be one of string, number, boolean',1)
n=Nt[i],r++}else n=mt
if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2)
s=t[2],r++}i=yt(n,s)}else i=Nt[n]
const s=[]
for(;r<t.length;r++){const i=e.parse(t[r],r,mt)
if(!i)return null
s.push(i)}return new $t(i,s)}evaluate(t){for(let e=0;e<this.args.length;e++){const i=this.args[e].evaluate(t)
if(!bt(this.type,Ft(i)))return i
if(e===this.args.length-1)throw new Vt(`Expected value to be of type ${xt(this.type)}, but found ${xt(Ft(i))} instead.`)}return null}eachChild(t){this.args.forEach(t)}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){const t=this.type,e=[t.kind]
if("array"===t.kind){const i=t.itemType
if("string"===i.kind||"number"===i.kind||"boolean"===i.kind){e.push(i.kind)
const r=t.N;("number"==typeof r||this.args.length>1)&&e.push(r)}}return e.concat(this.args.map((t=>t.serialize())))}}class qt{constructor(t){this.type=gt,this.sections=t}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.")
const i=t[1]
if(!Array.isArray(i)&&"object"==typeof i)return e.error("First argument must be an image or text section.")
const r=[]
let n=!1
for(let s=1;s<=t.length-1;++s){const i=t[s]
if(n&&"object"==typeof i&&!Array.isArray(i)){n=!1
let t=null
if(i["font-scale"]&&(t=e.parse(i["font-scale"],1,ct),!t))return null
let s=null
if(i["text-font"]&&(s=e.parse(i["text-font"],1,yt(ht)),!s))return null
let o=null
if(i["text-color"]&&(o=e.parse(i["text-color"],1,pt),!o))return null
const a=r[r.length-1]
a.scale=t,a.font=s,a.textColor=o}else{const i=e.parse(t[s],1,mt)
if(!i)return null
const o=i.type.kind
if("string"!==o&&"value"!==o&&"null"!==o&&"resolvedImage"!==o)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.")
n=!0,r.push({content:i,scale:null,font:null,textColor:null})}}return new qt(r)}evaluate(t){return new Dt(this.sections.map((e=>{const i=e.content.evaluate(t)
return Ft(i)===_t?new Mt("",i,null,null,null):new Mt(Ot(i),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))}eachChild(t){for(const e of this.sections)t(e.content),e.scale&&t(e.scale),e.font&&t(e.font),e.textColor&&t(e.textColor)}outputDefined(){return!1}serialize(){const t=["format"]
for(const e of this.sections){t.push(e.content.serialize())
const i={}
e.scale&&(i["font-scale"]=e.scale.serialize()),e.font&&(i["text-font"]=e.font.serialize()),e.textColor&&(i["text-color"]=e.textColor.serialize()),t.push(i)}return t}}class Gt{constructor(t){this.type=_t,this.input=t}static parse(t,e){if(2!==t.length)return e.error("Expected two arguments.")
const i=e.parse(t[1],1,ht)
return i?new Gt(i):e.error("No image name provided.")}evaluate(t){const e=this.input.evaluate(t),i=Lt.fromString(e)
return i&&t.availableImages&&(i.available=t.availableImages.indexOf(e)>-1),i}eachChild(t){t(this.input)}outputDefined(){return!1}serialize(){return["image",this.input.serialize()]}}const jt={"to-boolean":ut,"to-color":pt,"to-number":ct,"to-string":ht}
class Zt{constructor(t,e){this.type=t,this.args=e}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.")
const i=t[0]
if(("to-boolean"===i||"to-string"===i)&&2!==t.length)return e.error("Expected one argument.")
const r=jt[i],n=[]
for(let s=1;s<t.length;s++){const i=e.parse(t[s],s,mt)
if(!i)return null
n.push(i)}return new Zt(r,n)}evaluate(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t))
if("color"===this.type.kind){let e,i
for(const r of this.args){if(e=r.evaluate(t),i=null,e instanceof Pt)return e
if("string"==typeof e){const i=t.parseColor(e)
if(i)return i}else if(Array.isArray(e)&&(i=e.length<3||e.length>4?`Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.`:Bt(e[0],e[1],e[2],e[3]),!i))return new Pt(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new Vt(i||`Could not parse color from value '${"string"==typeof e?e:String(JSON.stringify(e))}'`)}if("number"===this.type.kind){let e=null
for(const i of this.args){if(e=i.evaluate(t),null===e)return 0
const r=Number(e)
if(!isNaN(r))return r}throw new Vt(`Could not convert ${JSON.stringify(e)} to number.`)}return"formatted"===this.type.kind?Dt.fromString(Ot(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?Lt.fromString(Ot(this.args[0].evaluate(t))):Ot(this.args[0].evaluate(t))}eachChild(t){this.args.forEach(t)}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){if("formatted"===this.type.kind)return new qt([{content:this.args[0],scale:null,font:null,textColor:null}]).serialize()
if("resolvedImage"===this.type.kind)return new Gt(this.args[0]).serialize()
const t=[`to-${this.type.kind}`]
return this.eachChild((e=>{t.push(e.serialize())})),t}}const Xt=["Unknown","Point","LineString","Polygon"]
class Wt{constructor(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null}id(){return this.feature&&"id"in this.feature?this.feature.id:null}geometryType(){return this.feature?"number"==typeof this.feature.type?Xt[this.feature.type]:this.feature.type:null}geometry(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null}canonicalID(){return this.canonical}properties(){return this.feature&&this.feature.properties||{}}parseColor(t){let e=this._parseColorCache[t]
return e||(e=this._parseColorCache[t]=Pt.parse(t)),e}}class Ht{constructor(t,e,i,r){this.name=t,this.type=e,this._evaluate=i,this.args=r}evaluate(t){return this._evaluate(t,this.args)}eachChild(t){this.args.forEach(t)}outputDefined(){return!1}serialize(){return[this.name].concat(this.args.map((t=>t.serialize())))}static parse(t,e){const i=t[0],r=Ht.definitions[i]
if(!r)return e.error(`Unknown expression "${i}". If you wanted a literal array, use ["literal", [...]].`,0)
const n=Array.isArray(r)?r[0]:r.type,s=Array.isArray(r)?[[r[1],r[2]]]:r.overloads,o=s.filter((e=>{let[i]=e
return!Array.isArray(i)||i.length===t.length-1}))
let a=null
for(const[l,c]of o){a=new ye(e.registry,e.path,null,e.scope)
const r=[]
let s=!1
for(let e=1;e<t.length;e++){const i=t[e],n=Array.isArray(l)?l[e-1]:l.type,o=a.parse(i,1+r.length,n)
if(!o){s=!0
break}r.push(o)}if(!s)if(Array.isArray(l)&&l.length!==r.length)a.error(`Expected ${l.length} arguments, but found ${r.length} instead.`)
else{for(let t=0;t<r.length;t++){const e=Array.isArray(l)?l[t]:l.type,i=r[t]
a.concat(t+1).checkSubtype(e,i.type)}if(0===a.errors.length)return new Ht(i,n,c,r)}}if(1===o.length)e.errors.push(...a.errors)
else{const i=(o.length?o:s).map((t=>{let[e]=t
return i=e,Array.isArray(i)?`(${i.map(xt).join(", ")})`:`(${xt(i.type)}...)`
var i})).join(" | "),r=[]
for(let n=1;n<t.length;n++){const i=e.parse(t[n],1+r.length)
if(!i)return null
r.push(xt(i.type))}e.error(`Expected arguments of type ${i}, but found (${r.join(", ")}) instead.`)}return null}static register(t,e){Ht.definitions=e
for(const i in e)t[i]=Ht}}class Kt{constructor(t,e,i){this.type=ft,this.locale=i,this.caseSensitive=t,this.diacriticSensitive=e}static parse(t,e){if(2!==t.length)return e.error("Expected one argument.")
const i=t[1]
if("object"!=typeof i||Array.isArray(i))return e.error("Collator options argument must be an object.")
const r=e.parse(void 0!==i["case-sensitive"]&&i["case-sensitive"],1,ut)
if(!r)return null
const n=e.parse(void 0!==i["diacritic-sensitive"]&&i["diacritic-sensitive"],1,ut)
if(!n)return null
let s=null
return i.locale&&(s=e.parse(i.locale,1,ht),!s)?null:new Kt(r,n,s)}evaluate(t){return new kt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)}eachChild(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale)}outputDefined(){return!1}serialize(){const t={}
return t["case-sensitive"]=this.caseSensitive.serialize(),t["diacritic-sensitive"]=this.diacriticSensitive.serialize(),this.locale&&(t.locale=this.locale.serialize()),["collator",t]}}const Yt=8192
function Jt(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1])}function Qt(t,e){return!(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function te(t,e){const i=(180+t[0])/360,r=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,n=Math.pow(2,e.z)
return[Math.round(i*n*Yt),Math.round(r*n*Yt)]}function ee(t,e,i){const r=t[0]-e[0],n=t[1]-e[1],s=t[0]-i[0],o=t[1]-i[1]
return r*o-s*n==0&&r*s<=0&&n*o<=0}function ie(t,e){let i=!1
for(let o=0,a=e.length;o<a;o++){const a=e[o]
for(let e=0,o=a.length;e<o-1;e++){if(ee(t,a[e],a[e+1]))return!1;(n=a[e])[1]>(r=t)[1]!=(s=a[e+1])[1]>r[1]&&r[0]<(s[0]-n[0])*(r[1]-n[1])/(s[1]-n[1])+n[0]&&(i=!i)}}var r,n,s
return i}function re(t,e){for(let i=0;i<e.length;i++)if(ie(t,e[i]))return!0
return!1}function ne(t,e,i,r){const n=r[0]-i[0],s=r[1]-i[1],o=(t[0]-i[0])*s-n*(t[1]-i[1]),a=(e[0]-i[0])*s-n*(e[1]-i[1])
return o>0&&a<0||o<0&&a>0}function se(t,e,i){for(const c of i)for(let i=0;i<c.length-1;++i)if(0!=(a=[(o=c[i+1])[0]-(s=c[i])[0],o[1]-s[1]])[0]*(l=[(n=e)[0]-(r=t)[0],n[1]-r[1]])[1]-a[1]*l[0]&&ne(r,n,s,o)&&ne(s,o,r,n))return!0
var r,n,s,o,a,l
return!1}function oe(t,e){for(let i=0;i<t.length;++i)if(!ie(t[i],e))return!1
for(let i=0;i<t.length-1;++i)if(se(t[i],t[i+1],e))return!1
return!0}function ae(t,e){for(let i=0;i<e.length;i++)if(oe(t,e[i]))return!0
return!1}function le(t,e,i){const r=[]
for(let n=0;n<t.length;n++){const s=[]
for(let r=0;r<t[n].length;r++){const o=te(t[n][r],i)
Jt(e,o),s.push(o)}r.push(s)}return r}function ce(t,e,i){const r=[]
for(let n=0;n<t.length;n++){const s=le(t[n],e,i)
r.push(s)}return r}function he(t,e,i,r){if(t[0]<i[0]||t[0]>i[2]){const e=.5*r
let n=t[0]-i[0]>e?-r:i[0]-t[0]>e?r:0
0===n&&(n=t[0]-i[2]>e?-r:i[2]-t[0]>e?r:0),t[0]+=n}Jt(e,t)}function ue(t,e,i,r){const n=Math.pow(2,r.z)*Yt,s=[r.x*Yt,r.y*Yt],o=[]
for(const a of t)for(const t of a){const r=[t.x+s[0],t.y+s[1]]
he(r,e,i,n),o.push(r)}return o}function pe(t,e,i,r){const n=Math.pow(2,r.z)*Yt,s=[r.x*Yt,r.y*Yt],o=[]
for(const l of t){const t=[]
for(const i of l){const r=[i.x+s[0],i.y+s[1]]
Jt(e,r),t.push(r)}o.push(t)}if(e[2]-e[0]<=n/2){(a=e)[0]=a[1]=1/0,a[2]=a[3]=-1/0
for(const t of o)for(const r of t)he(r,e,i,n)}var a
return o}class de{constructor(t,e){this.type=ut,this.geojson=t,this.geometries=e}static parse(t,e){if(2!==t.length)return e.error(`'within' expression requires exactly one argument, but found ${t.length-1} instead.`)
if(Rt(t[1])){const e=t[1]
if("FeatureCollection"===e.type)for(let t=0;t<e.features.length;++t){const i=e.features[t].geometry.type
if("Polygon"===i||"MultiPolygon"===i)return new de(e,e.features[t].geometry)}else if("Feature"===e.type){const t=e.geometry.type
if("Polygon"===t||"MultiPolygon"===t)return new de(e,e.geometry)}else if("Polygon"===e.type||"MultiPolygon"===e.type)return new de(e,e)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")}evaluate(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){const i=[1/0,1/0,-1/0,-1/0],r=[1/0,1/0,-1/0,-1/0],n=t.canonicalID()
if("Polygon"===e.type){const s=le(e.coordinates,r,n),o=ue(t.geometry(),i,r,n)
if(!Qt(i,r))return!1
for(const t of o)if(!ie(t,s))return!1}if("MultiPolygon"===e.type){const s=ce(e.coordinates,r,n),o=ue(t.geometry(),i,r,n)
if(!Qt(i,r))return!1
for(const t of o)if(!re(t,s))return!1}return!0}(t,this.geometries)
if("LineString"===t.geometryType())return function(t,e){const i=[1/0,1/0,-1/0,-1/0],r=[1/0,1/0,-1/0,-1/0],n=t.canonicalID()
if("Polygon"===e.type){const s=le(e.coordinates,r,n),o=pe(t.geometry(),i,r,n)
if(!Qt(i,r))return!1
for(const t of o)if(!oe(t,s))return!1}if("MultiPolygon"===e.type){const s=ce(e.coordinates,r,n),o=pe(t.geometry(),i,r,n)
if(!Qt(i,r))return!1
for(const t of o)if(!ae(t,s))return!1}return!0}(t,this.geometries)}return!1}eachChild(){}outputDefined(){return!0}serialize(){return["within",this.geojson]}}function me(t){if(t instanceof Ht){if("get"===t.name&&1===t.args.length)return!1
if("feature-state"===t.name)return!1
if("has"===t.name&&1===t.args.length)return!1
if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return!1
if(/^filter-/.test(t.name))return!1}if(t instanceof de)return!1
let e=!0
return t.eachChild((t=>{e&&!me(t)&&(e=!1)})),e}function fe(t){if(t instanceof Ht&&"feature-state"===t.name)return!1
let e=!0
return t.eachChild((t=>{e&&!fe(t)&&(e=!1)})),e}function ge(t,e){if(t instanceof Ht&&e.indexOf(t.name)>=0)return!1
let i=!0
return t.eachChild((t=>{i&&!ge(t,e)&&(i=!1)})),i}class _e{constructor(t,e){this.type=e.type,this.name=t,this.boundExpression=e}static parse(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.")
const i=t[1]
return e.scope.has(i)?new _e(i,e.scope.get(i)):e.error(`Unknown variable "${i}". Make sure "${i}" has been bound in an enclosing "let" expression before using it.`,1)}evaluate(t){return this.boundExpression.evaluate(t)}eachChild(){}outputDefined(){return!1}serialize(){return["var",this.name]}}class ye{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new at,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[]
this.registry=t,this.path=e,this.key=e.map((t=>`[${t}]`)).join(""),this.scope=r,this.errors=n,this.expectedType=i}parse(t,e,i,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
return e?this.concat(e,i,r)._parse(t,n):this._parse(t,n)}_parse(t,e){function i(t,e,i){return"assert"===i?new $t(e,[t]):"coerce"===i?new Zt(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].')
const r=t[0]
if("string"!=typeof r)return this.error(`Expression name must be a string, but found ${typeof r} instead. If you wanted a literal array, use ["literal", [...]].`,0),null
const n=this.registry[r]
if(n){let r=n.parse(t,this)
if(!r)return null
if(this.expectedType){const t=this.expectedType,n=r.type
if("string"!==t.kind&&"number"!==t.kind&&"boolean"!==t.kind&&"object"!==t.kind&&"array"!==t.kind||"value"!==n.kind)if("color"!==t.kind&&"formatted"!==t.kind&&"resolvedImage"!==t.kind||"value"!==n.kind&&"string"!==n.kind){if(this.checkSubtype(t,n))return null}else r=i(r,t,e.typeAnnotation||"coerce")
else r=i(r,t,e.typeAnnotation||"assert")}if(!(r instanceof Ut)&&"resolvedImage"!==r.type.kind&&xe(r)){const e=new Wt
try{r=new Ut(r.type,r.evaluate(e))}catch(t){return this.error(t.message),null}}return r}return this.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`,0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':`Expected an array, but found ${typeof t} instead.`)}concat(t,e,i){const r="number"==typeof t?this.path.concat(t):this.path,n=i?this.scope.concat(i):this.scope
return new ye(this.registry,r,e||null,n,this.errors)}error(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r]
const n=`${this.key}${i.map((t=>`[${t}]`)).join("")}`
this.errors.push(new ot(n,t))}checkSubtype(t,e){const i=bt(t,e)
return i&&this.error(i),i}}function xe(t){if(t instanceof _e)return xe(t.boundExpression)
if(t instanceof Ht&&"error"===t.name)return!1
if(t instanceof Kt)return!1
if(t instanceof de)return!1
const e=t instanceof Zt||t instanceof $t
let i=!0
return t.eachChild((t=>{i=e?i&&xe(t):i&&t instanceof Ut})),!!i&&me(t)&&ge(t,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}function ve(t,e){const i=t.length-1
let r,n,s=0,o=i,a=0
for(;s<=o;)if(a=Math.floor((s+o)/2),r=t[a],n=t[a+1],r<=e){if(a===i||e<n)return a
s=a+1}else{if(!(r>e))throw new Vt("Input is not a number.")
o=a-1}return 0}class be{constructor(t,e,i){this.type=t,this.input=e,this.labels=[],this.outputs=[]
for(const[r,n]of i)this.labels.push(r),this.outputs.push(n)}static parse(t,e){if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`)
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
const i=e.parse(t[1],1,ct)
if(!i)return null
const r=[]
let n=null
e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType)
for(let s=1;s<t.length;s+=2){const i=1===s?-1/0:t[s],o=t[s+1],a=s,l=s+1
if("number"!=typeof i)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',a)
if(r.length&&r[r.length-1][0]>=i)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',a)
const c=e.parse(o,l,n)
if(!c)return null
n=n||c.type,r.push([i,c])}return new be(n,i,r)}evaluate(t){const e=this.labels,i=this.outputs
if(1===e.length)return i[0].evaluate(t)
const r=this.input.evaluate(t)
if(r<=e[0])return i[0].evaluate(t)
const n=e.length
return r>=e[n-1]?i[n-1].evaluate(t):i[ve(e,r)].evaluate(t)}eachChild(t){t(this.input)
for(const e of this.outputs)t(e)}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}serialize(){const t=["step",this.input.serialize()]
for(let e=0;e<this.labels.length;e++)e>0&&t.push(this.labels[e]),t.push(this.outputs[e].serialize())
return t}}function we(t,e,i){return t*(1-i)+e*i}var Se=Object.freeze({__proto__:null,number:we,color:function(t,e,i){return new Pt(we(t.r,e.r,i),we(t.g,e.g,i),we(t.b,e.b,i),we(t.a,e.a,i))},array:function(t,e,i){return t.map(((t,r)=>we(t,e[r],i)))}})
const Te=.95047,Ie=1.08883,Ee=4/29,Ae=6/29,ze=3*Ae*Ae,Ce=Math.PI/180,Pe=180/Math.PI
function ke(t){return t>.008856451679035631?Math.pow(t,1/3):t/ze+Ee}function Me(t){return t>Ae?t*t*t:ze*(t-Ee)}function De(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Le(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Be(t){const e=Le(t.r),i=Le(t.g),r=Le(t.b),n=ke((.4124564*e+.3575761*i+.1804375*r)/Te),s=ke((.2126729*e+.7151522*i+.072175*r)/1)
return{l:116*s-16,a:500*(n-s),b:200*(s-ke((.0193339*e+.119192*i+.9503041*r)/Ie)),alpha:t.a}}function Re(t){let e=(t.l+16)/116,i=isNaN(t.a)?e:e+t.a/500,r=isNaN(t.b)?e:e-t.b/200
return e=1*Me(e),i=Te*Me(i),r=Ie*Me(r),new Pt(De(3.2404542*i-1.5371385*e-.4985314*r),De(-.969266*i+1.8760108*e+.041556*r),De(.0556434*i-.2040259*e+1.0572252*r),t.alpha)}function Fe(t,e,i){const r=e-t
return t+i*(r>180||r<-180?r-360*Math.round(r/360):r)}const Oe={forward:Be,reverse:Re,interpolate:function(t,e,i){return{l:we(t.l,e.l,i),a:we(t.a,e.a,i),b:we(t.b,e.b,i),alpha:we(t.alpha,e.alpha,i)}}},Ue={forward:function(t){const{l:e,a:i,b:r}=Be(t),n=Math.atan2(r,i)*Pe
return{h:n<0?n+360:n,c:Math.sqrt(i*i+r*r),l:e,alpha:t.a}},reverse:function(t){const e=t.h*Ce,i=t.c
return Re({l:t.l,a:Math.cos(e)*i,b:Math.sin(e)*i,alpha:t.alpha})},interpolate:function(t,e,i){return{h:Fe(t.h,e.h,i),c:we(t.c,e.c,i),l:we(t.l,e.l,i),alpha:we(t.alpha,e.alpha,i)}}}
var Ve=Object.freeze({__proto__:null,lab:Oe,hcl:Ue})
class Ne{constructor(t,e,i,r,n){this.type=t,this.operator=e,this.interpolation=i,this.input=r,this.labels=[],this.outputs=[]
for(const[s,o]of n)this.labels.push(s),this.outputs.push(o)}static interpolationFactor(t,i,r,n){let s=0
if("exponential"===t.name)s=$e(i,t.base,r,n)
else if("linear"===t.name)s=$e(i,1,r,n)
else if("cubic-bezier"===t.name){const o=t.controlPoints
s=new e(o[0],o[1],o[2],o[3]).solve($e(i,1,r,n))}return s}static parse(t,e){let[i,r,n,...s]=t
if(!Array.isArray(r)||0===r.length)return e.error("Expected an interpolation type expression.",1)
if("linear"===r[0])r={name:"linear"}
else if("exponential"===r[0]){const t=r[1]
if("number"!=typeof t)return e.error("Exponential interpolation requires a numeric base.",1,1)
r={name:"exponential",base:t}}else{if("cubic-bezier"!==r[0])return e.error(`Unknown interpolation type ${String(r[0])}`,1,0)
{const t=r.slice(1)
if(4!==t.length||t.some((t=>"number"!=typeof t||t<0||t>1)))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1)
r={name:"cubic-bezier",controlPoints:t}}}if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`)
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
if(n=e.parse(n,2,ct),!n)return null
const o=[]
let a=null
"interpolate-hcl"===i||"interpolate-lab"===i?a=pt:e.expectedType&&"value"!==e.expectedType.kind&&(a=e.expectedType)
for(let l=0;l<s.length;l+=2){const t=s[l],i=s[l+1],r=l+3,n=l+4
if("number"!=typeof t)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',r)
if(o.length&&o[o.length-1][0]>=t)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',r)
const c=e.parse(i,n,a)
if(!c)return null
a=a||c.type,o.push([t,c])}return"number"===a.kind||"color"===a.kind||"array"===a.kind&&"number"===a.itemType.kind&&"number"==typeof a.N?new Ne(a,i,r,n,o):e.error(`Type ${xt(a)} is not interpolatable.`)}evaluate(t){const e=this.labels,i=this.outputs
if(1===e.length)return i[0].evaluate(t)
const r=this.input.evaluate(t)
if(r<=e[0])return i[0].evaluate(t)
const n=e.length
if(r>=e[n-1])return i[n-1].evaluate(t)
const s=ve(e,r),o=Ne.interpolationFactor(this.interpolation,r,e[s],e[s+1]),a=i[s].evaluate(t),l=i[s+1].evaluate(t)
return"interpolate"===this.operator?Se[this.type.kind.toLowerCase()](a,l,o):"interpolate-hcl"===this.operator?Ue.reverse(Ue.interpolate(Ue.forward(a),Ue.forward(l),o)):Oe.reverse(Oe.interpolate(Oe.forward(a),Oe.forward(l),o))}eachChild(t){t(this.input)
for(const e of this.outputs)t(e)}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}serialize(){let t
t="linear"===this.interpolation.name?["linear"]:"exponential"===this.interpolation.name?1===this.interpolation.base?["linear"]:["exponential",this.interpolation.base]:["cubic-bezier"].concat(this.interpolation.controlPoints)
const e=[this.operator,t,this.input.serialize()]
for(let i=0;i<this.labels.length;i++)e.push(this.labels[i],this.outputs[i].serialize())
return e}}function $e(t,e,i,r){const n=r-i,s=t-i
return 0===n?0:1===e?s/n:(Math.pow(e,s)-1)/(Math.pow(e,n)-1)}class qe{constructor(t,e){this.type=t,this.args=e}static parse(t,e){if(t.length<2)return e.error("Expectected at least one argument.")
let i=null
const r=e.expectedType
r&&"value"!==r.kind&&(i=r)
const n=[]
for(const o of t.slice(1)){const t=e.parse(o,1+n.length,i,void 0,{typeAnnotation:"omit"})
if(!t)return null
i=i||t.type,n.push(t)}const s=r&&n.some((t=>bt(r,t.type)))
return new qe(s?mt:i,n)}evaluate(t){let e,i=null,r=0
for(const n of this.args)if(r++,i=n.evaluate(t),i&&i instanceof Lt&&!i.available&&(e||(e=i.name),i=null,r===this.args.length&&(i=e)),null!==i)break
return i}eachChild(t){this.args.forEach(t)}outputDefined(){return this.args.every((t=>t.outputDefined()))}serialize(){const t=["coalesce"]
return this.eachChild((e=>{t.push(e.serialize())})),t}}class Ge{constructor(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e}evaluate(t){return this.result.evaluate(t)}eachChild(t){for(const e of this.bindings)t(e[1])
t(this.result)}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found ${t.length-1} instead.`)
const i=[]
for(let n=1;n<t.length-1;n+=2){const r=t[n]
if("string"!=typeof r)return e.error(`Expected string, but found ${typeof r} instead.`,n)
if(/[^a-zA-Z0-9_]/.test(r))return e.error("Variable names must contain only alphanumeric characters or '_'.",n)
const s=e.parse(t[n+1],n+1)
if(!s)return null
i.push([r,s])}const r=e.parse(t[t.length-1],t.length-1,e.expectedType,i)
return r?new Ge(i,r):null}outputDefined(){return this.result.outputDefined()}serialize(){const t=["let"]
for(const[e,i]of this.bindings)t.push(e,i.serialize())
return t.push(this.result.serialize()),t}}class je{constructor(t,e,i){this.type=t,this.index=e,this.input=i}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,ct),r=e.parse(t[2],2,yt(e.expectedType||mt))
return i&&r?new je(r.type.itemType,i,r):null}evaluate(t){const e=this.index.evaluate(t),i=this.input.evaluate(t)
if(e<0)throw new Vt(`Array index out of bounds: ${e} < 0.`)
if(e>=i.length)throw new Vt(`Array index out of bounds: ${e} > ${i.length-1}.`)
if(e!==Math.floor(e))throw new Vt(`Array index must be an integer, but found ${e} instead.`)
return i[e]}eachChild(t){t(this.index),t(this.input)}outputDefined(){return!1}serialize(){return["at",this.index.serialize(),this.input.serialize()]}}class Ze{constructor(t,e){this.type=ut,this.needle=t,this.haystack=e}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,mt),r=e.parse(t[2],2,mt)
return i&&r?wt(i.type,[ut,ht,ct,lt,mt])?new Ze(i,r):e.error(`Expected first argument to be of type boolean, string, number or null, but found ${xt(i.type)} instead`):null}evaluate(t){const e=this.needle.evaluate(t),i=this.haystack.evaluate(t)
if(!i)return!1
if(!St(e,["boolean","string","number","null"]))throw new Vt(`Expected first argument to be of type boolean, string, number or null, but found ${xt(Ft(e))} instead.`)
if(!St(i,["string","array"]))throw new Vt(`Expected second argument to be of type array or string, but found ${xt(Ft(i))} instead.`)
return i.indexOf(e)>=0}eachChild(t){t(this.needle),t(this.haystack)}outputDefined(){return!0}serialize(){return["in",this.needle.serialize(),this.haystack.serialize()]}}class Xe{constructor(t,e,i){this.type=ct,this.needle=t,this.haystack=e,this.fromIndex=i}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,mt),r=e.parse(t[2],2,mt)
if(!i||!r)return null
if(!wt(i.type,[ut,ht,ct,lt,mt]))return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${xt(i.type)} instead`)
if(4===t.length){const n=e.parse(t[3],3,ct)
return n?new Xe(i,r,n):null}return new Xe(i,r)}evaluate(t){const e=this.needle.evaluate(t),i=this.haystack.evaluate(t)
if(!St(e,["boolean","string","number","null"]))throw new Vt(`Expected first argument to be of type boolean, string, number or null, but found ${xt(Ft(e))} instead.`)
if(!St(i,["string","array"]))throw new Vt(`Expected second argument to be of type array or string, but found ${xt(Ft(i))} instead.`)
if(this.fromIndex){const r=this.fromIndex.evaluate(t)
return i.indexOf(e,r)}return i.indexOf(e)}eachChild(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex)}outputDefined(){return!1}serialize(){if(null!=this.fromIndex&&void 0!==this.fromIndex){const t=this.fromIndex.serialize()
return["index-of",this.needle.serialize(),this.haystack.serialize(),t]}return["index-of",this.needle.serialize(),this.haystack.serialize()]}}class We{constructor(t,e,i,r,n,s){this.inputType=t,this.type=e,this.input=i,this.cases=r,this.outputs=n,this.otherwise=s}static parse(t,e){if(t.length<5)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`)
if(t.length%2!=1)return e.error("Expected an even number of arguments.")
let i,r
e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType)
const n={},s=[]
for(let l=2;l<t.length-1;l+=2){let o=t[l]
const a=t[l+1]
Array.isArray(o)||(o=[o])
const c=e.concat(l)
if(0===o.length)return c.error("Expected at least one branch label.")
for(const t of o){if("number"!=typeof t&&"string"!=typeof t)return c.error("Branch labels must be numbers or strings.")
if("number"==typeof t&&Math.abs(t)>Number.MAX_SAFE_INTEGER)return c.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`)
if("number"==typeof t&&Math.floor(t)!==t)return c.error("Numeric branch labels must be integer values.")
if(i){if(c.checkSubtype(i,Ft(t)))return null}else i=Ft(t)
if(void 0!==n[String(t)])return c.error("Branch labels must be unique.")
n[String(t)]=s.length}const h=e.parse(a,l,r)
if(!h)return null
r=r||h.type,s.push(h)}const o=e.parse(t[1],1,mt)
if(!o)return null
const a=e.parse(t[t.length-1],t.length-1,r)
return a?"value"!==o.type.kind&&e.concat(1).checkSubtype(i,o.type)?null:new We(i,r,o,n,s,a):null}evaluate(t){const e=this.input.evaluate(t)
return(Ft(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)}eachChild(t){t(this.input),this.outputs.forEach(t),t(this.otherwise)}outputDefined(){return this.outputs.every((t=>t.outputDefined()))&&this.otherwise.outputDefined()}serialize(){const t=["match",this.input.serialize()],e=Object.keys(this.cases).sort(),i=[],r={}
for(const s of e){const t=r[this.cases[s]]
void 0===t?(r[this.cases[s]]=i.length,i.push([this.cases[s],[s]])):i[t][1].push(s)}const n=t=>"number"===this.inputType.kind?Number(t):t
for(const[s,o]of i)t.push(1===o.length?n(o[0]):o.map(n)),t.push(this.outputs[s].serialize())
return t.push(this.otherwise.serialize()),t}}class He{constructor(t,e,i){this.type=t,this.branches=e,this.otherwise=i}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found only ${t.length-1}.`)
if(t.length%2!=0)return e.error("Expected an odd number of arguments.")
let i
e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType)
const r=[]
for(let s=1;s<t.length-1;s+=2){const n=e.parse(t[s],s,ut)
if(!n)return null
const o=e.parse(t[s+1],s+1,i)
if(!o)return null
r.push([n,o]),i=i||o.type}const n=e.parse(t[t.length-1],t.length-1,i)
return n?new He(i,r,n):null}evaluate(t){for(const[e,i]of this.branches)if(e.evaluate(t))return i.evaluate(t)
return this.otherwise.evaluate(t)}eachChild(t){for(const[e,i]of this.branches)t(e),t(i)
t(this.otherwise)}outputDefined(){return this.branches.every((t=>{let[e,i]=t
return i.outputDefined()}))&&this.otherwise.outputDefined()}serialize(){const t=["case"]
return this.eachChild((e=>{t.push(e.serialize())})),t}}class Ke{constructor(t,e,i,r){this.type=t,this.input=e,this.beginIndex=i,this.endIndex=r}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,mt),r=e.parse(t[2],2,ct)
if(!i||!r)return null
if(!wt(i.type,[yt(mt),ht,mt]))return e.error(`Expected first argument to be of type array or string, but found ${xt(i.type)} instead`)
if(4===t.length){const n=e.parse(t[3],3,ct)
return n?new Ke(i.type,i,r,n):null}return new Ke(i.type,i,r)}evaluate(t){const e=this.input.evaluate(t),i=this.beginIndex.evaluate(t)
if(!St(e,["string","array"]))throw new Vt(`Expected first argument to be of type array or string, but found ${xt(Ft(e))} instead.`)
if(this.endIndex){const r=this.endIndex.evaluate(t)
return e.slice(i,r)}return e.slice(i)}eachChild(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex)}outputDefined(){return!1}serialize(){if(null!=this.endIndex&&void 0!==this.endIndex){const t=this.endIndex.serialize()
return["slice",this.input.serialize(),this.beginIndex.serialize(),t]}return["slice",this.input.serialize(),this.beginIndex.serialize()]}}function Ye(t,e){return"=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function Je(t,e,i,r){return 0===r.compare(e,i)}function Qe(t,e,i){const r="=="!==t&&"!="!==t
return class n{constructor(t,e,i){this.type=ut,this.lhs=t,this.rhs=e,this.collator=i,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind}static parse(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.")
const i=t[0]
let s=e.parse(t[1],1,mt)
if(!s)return null
if(!Ye(i,s.type))return e.concat(1).error(`"${i}" comparisons are not supported for type '${xt(s.type)}'.`)
let o=e.parse(t[2],2,mt)
if(!o)return null
if(!Ye(i,o.type))return e.concat(2).error(`"${i}" comparisons are not supported for type '${xt(o.type)}'.`)
if(s.type.kind!==o.type.kind&&"value"!==s.type.kind&&"value"!==o.type.kind)return e.error(`Cannot compare types '${xt(s.type)}' and '${xt(o.type)}'.`)
r&&("value"===s.type.kind&&"value"!==o.type.kind?s=new $t(o.type,[s]):"value"!==s.type.kind&&"value"===o.type.kind&&(o=new $t(s.type,[o])))
let a=null
if(4===t.length){if("string"!==s.type.kind&&"string"!==o.type.kind&&"value"!==s.type.kind&&"value"!==o.type.kind)return e.error("Cannot use collator to compare non-string types.")
if(a=e.parse(t[3],3,ft),!a)return null}return new n(s,o,a)}evaluate(n){const s=this.lhs.evaluate(n),o=this.rhs.evaluate(n)
if(r&&this.hasUntypedArgument){const e=Ft(s),i=Ft(o)
if(e.kind!==i.kind||"string"!==e.kind&&"number"!==e.kind)throw new Vt(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${i.kind}) instead.`)}if(this.collator&&!r&&this.hasUntypedArgument){const t=Ft(s),i=Ft(o)
if("string"!==t.kind||"string"!==i.kind)return e(n,s,o)}return this.collator?i(n,s,o,this.collator.evaluate(n)):e(n,s,o)}eachChild(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator)}outputDefined(){return!0}serialize(){const e=[t]
return this.eachChild((t=>{e.push(t.serialize())})),e}}}const ti=Qe("==",(function(t,e,i){return e===i}),Je),ei=Qe("!=",(function(t,e,i){return e!==i}),(function(t,e,i,r){return!Je(0,e,i,r)})),ii=Qe("<",(function(t,e,i){return e<i}),(function(t,e,i,r){return r.compare(e,i)<0})),ri=Qe(">",(function(t,e,i){return e>i}),(function(t,e,i,r){return r.compare(e,i)>0})),ni=Qe("<=",(function(t,e,i){return e<=i}),(function(t,e,i,r){return r.compare(e,i)<=0})),si=Qe(">=",(function(t,e,i){return e>=i}),(function(t,e,i,r){return r.compare(e,i)>=0}))
class oi{constructor(t,e,i,r,n){this.type=ht,this.number=t,this.locale=e,this.currency=i,this.minFractionDigits=r,this.maxFractionDigits=n}static parse(t,e){if(3!==t.length)return e.error("Expected two arguments.")
const i=e.parse(t[1],1,ct)
if(!i)return null
const r=t[2]
if("object"!=typeof r||Array.isArray(r))return e.error("NumberFormat options argument must be an object.")
let n=null
if(r.locale&&(n=e.parse(r.locale,1,ht),!n))return null
let s=null
if(r.currency&&(s=e.parse(r.currency,1,ht),!s))return null
let o=null
if(r["min-fraction-digits"]&&(o=e.parse(r["min-fraction-digits"],1,ct),!o))return null
let a=null
return r["max-fraction-digits"]&&(a=e.parse(r["max-fraction-digits"],1,ct),!a)?null:new oi(i,n,s,o,a)}evaluate(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))}eachChild(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits)}outputDefined(){return!1}serialize(){const t={}
return this.locale&&(t.locale=this.locale.serialize()),this.currency&&(t.currency=this.currency.serialize()),this.minFractionDigits&&(t["min-fraction-digits"]=this.minFractionDigits.serialize()),this.maxFractionDigits&&(t["max-fraction-digits"]=this.maxFractionDigits.serialize()),["number-format",this.number.serialize(),t]}}class ai{constructor(t){this.type=ct,this.input=t}static parse(t,e){if(2!==t.length)return e.error(`Expected 1 argument, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1)
return i?"array"!==i.type.kind&&"string"!==i.type.kind&&"value"!==i.type.kind?e.error(`Expected argument of type string or array, but found ${xt(i.type)} instead.`):new ai(i):null}evaluate(t){const e=this.input.evaluate(t)
if("string"==typeof e)return e.length
if(Array.isArray(e))return e.length
throw new Vt(`Expected value to be of type string or array, but found ${xt(Ft(e))} instead.`)}eachChild(t){t(this.input)}outputDefined(){return!1}serialize(){const t=["length"]
return this.eachChild((e=>{t.push(e.serialize())})),t}}const li={"==":ti,"!=":ei,">":ri,"<":ii,">=":si,"<=":ni,array:$t,at:je,boolean:$t,case:He,coalesce:qe,collator:Kt,format:qt,image:Gt,in:Ze,"index-of":Xe,interpolate:Ne,"interpolate-hcl":Ne,"interpolate-lab":Ne,length:ai,let:Ge,literal:Ut,match:We,number:$t,"number-format":oi,object:$t,slice:Ke,step:be,string:$t,"to-boolean":Zt,"to-color":Zt,"to-number":Zt,"to-string":Zt,var:_e,within:de}
function ci(t,e){let[i,r,n,s]=e
i=i.evaluate(t),r=r.evaluate(t),n=n.evaluate(t)
const o=s?s.evaluate(t):1,a=Bt(i,r,n,o)
if(a)throw new Vt(a)
return new Pt(i/255*o,r/255*o,n/255*o,o)}function hi(t,e){return t in e}function ui(t,e){const i=e[t]
return void 0===i?null:i}function pi(t){return{type:t}}function di(t){return{result:"success",value:t}}function mi(t){return{result:"error",value:t}}function fi(t){return"data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function gi(t){return!!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function _i(t){return!!t.expression&&t.expression.interpolated}function yi(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function xi(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function vi(t){return t}function bi(t,e){const i="color"===e.type,r=t.stops&&"object"==typeof t.stops[0][0],n=r||!(r||void 0!==t.property),s=t.type||(_i(e)?"exponential":"interval")
if(i&&((t=rt({},t)).stops&&(t.stops=t.stops.map((t=>[t[0],Pt.parse(t[1])]))),t.default=Pt.parse(t.default?t.default:e.default)),t.colorSpace&&"rgb"!==t.colorSpace&&!Ve[t.colorSpace])throw new Error(`Unknown color space: ${t.colorSpace}`)
let o,a,l
if("exponential"===s)o=Ii
else if("interval"===s)o=Ti
else if("categorical"===s){o=Si,a=Object.create(null)
for(const e of t.stops)a[e[0]]=e[1]
l=typeof t.stops[0][0]}else{if("identity"!==s)throw new Error(`Unknown function type "${s}"`)
o=Ei}if(r){const i={},r=[]
for(let e=0;e<t.stops.length;e++){const n=t.stops[e],s=n[0].zoom
void 0===i[s]&&(i[s]={zoom:s,type:t.type,property:t.property,default:t.default,stops:[]},r.push(s)),i[s].stops.push([n[0].value,n[1]])}const n=[]
for(const t of r)n.push([i[t].zoom,bi(i[t],e)])
const s={name:"linear"}
return{kind:"composite",interpolationType:s,interpolationFactor:Ne.interpolationFactor.bind(void 0,s),zoomStops:n.map((t=>t[0])),evaluate:(i,r)=>{let{zoom:s}=i
return Ii({stops:n,base:t.base},e,s).evaluate(s,r)}}}if(n){const i="exponential"===s?{name:"exponential",base:void 0!==t.base?t.base:1}:null
return{kind:"camera",interpolationType:i,interpolationFactor:Ne.interpolationFactor.bind(void 0,i),zoomStops:t.stops.map((t=>t[0])),evaluate:i=>{let{zoom:r}=i
return o(t,e,r,a,l)}}}return{kind:"source",evaluate(i,r){const n=r&&r.properties?r.properties[t.property]:void 0
return void 0===n?wi(t.default,e.default):o(t,e,n,a,l)}}}function wi(t,e,i){return void 0!==t?t:void 0!==e?e:void 0!==i?i:void 0}function Si(t,e,i,r,n){return wi(typeof i===n?r[i]:void 0,t.default,e.default)}function Ti(t,e,i){if("number"!==yi(i))return wi(t.default,e.default)
const r=t.stops.length
if(1===r)return t.stops[0][1]
if(i<=t.stops[0][0])return t.stops[0][1]
if(i>=t.stops[r-1][0])return t.stops[r-1][1]
const n=ve(t.stops.map((t=>t[0])),i)
return t.stops[n][1]}function Ii(t,e,i){const r=void 0!==t.base?t.base:1
if("number"!==yi(i))return wi(t.default,e.default)
const n=t.stops.length
if(1===n)return t.stops[0][1]
if(i<=t.stops[0][0])return t.stops[0][1]
if(i>=t.stops[n-1][0])return t.stops[n-1][1]
const s=ve(t.stops.map((t=>t[0])),i),o=function(t,e,i,r){const n=r-i,s=t-i
return 0===n?0:1===e?s/n:(Math.pow(e,s)-1)/(Math.pow(e,n)-1)}(i,r,t.stops[s][0],t.stops[s+1][0]),a=t.stops[s][1],l=t.stops[s+1][1]
let c=Se[e.type]||vi
if(t.colorSpace&&"rgb"!==t.colorSpace){const e=Ve[t.colorSpace]
c=(t,i)=>e.reverse(e.interpolate(e.forward(t),e.forward(i),o))}return"function"==typeof a.evaluate?{evaluate(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
const r=a.evaluate.apply(void 0,e),n=l.evaluate.apply(void 0,e)
if(void 0!==r&&void 0!==n)return c(r,n,o)}}:c(a,l,o)}function Ei(t,e,i){return"color"===e.type?i=Pt.parse(i):"formatted"===e.type?i=Dt.fromString(i.toString()):"resolvedImage"===e.type?i=Lt.fromString(i.toString()):yi(i)===e.type||"enum"===e.type&&e.values[i]||(i=void 0),wi(i,t.default,e.default)}Ht.register(li,{error:[{kind:"error"},[ht],(t,e)=>{let[i]=e
throw new Vt(i.evaluate(t))}],typeof:[ht,[mt],(t,e)=>{let[i]=e
return xt(Ft(i.evaluate(t)))}],"to-rgba":[yt(ct,4),[pt],(t,e)=>{let[i]=e
return i.evaluate(t).toArray()}],rgb:[pt,[ct,ct,ct],ci],rgba:[pt,[ct,ct,ct,ct],ci],has:{type:ut,overloads:[[[ht],(t,e)=>{let[i]=e
return hi(i.evaluate(t),t.properties())}],[[ht,dt],(t,e)=>{let[i,r]=e
return hi(i.evaluate(t),r.evaluate(t))}]]},get:{type:mt,overloads:[[[ht],(t,e)=>{let[i]=e
return ui(i.evaluate(t),t.properties())}],[[ht,dt],(t,e)=>{let[i,r]=e
return ui(i.evaluate(t),r.evaluate(t))}]]},"feature-state":[mt,[ht],(t,e)=>{let[i]=e
return ui(i.evaluate(t),t.featureState||{})}],properties:[dt,[],t=>t.properties()],"geometry-type":[ht,[],t=>t.geometryType()],id:[mt,[],t=>t.id()],zoom:[ct,[],t=>t.globals.zoom],"heatmap-density":[ct,[],t=>t.globals.heatmapDensity||0],"line-progress":[ct,[],t=>t.globals.lineProgress||0],accumulated:[mt,[],t=>void 0===t.globals.accumulated?null:t.globals.accumulated],"+":[ct,pi(ct),(t,e)=>{let i=0
for(const r of e)i+=r.evaluate(t)
return i}],"*":[ct,pi(ct),(t,e)=>{let i=1
for(const r of e)i*=r.evaluate(t)
return i}],"-":{type:ct,overloads:[[[ct,ct],(t,e)=>{let[i,r]=e
return i.evaluate(t)-r.evaluate(t)}],[[ct],(t,e)=>{let[i]=e
return-i.evaluate(t)}]]},"/":[ct,[ct,ct],(t,e)=>{let[i,r]=e
return i.evaluate(t)/r.evaluate(t)}],"%":[ct,[ct,ct],(t,e)=>{let[i,r]=e
return i.evaluate(t)%r.evaluate(t)}],ln2:[ct,[],()=>Math.LN2],pi:[ct,[],()=>Math.PI],e:[ct,[],()=>Math.E],"^":[ct,[ct,ct],(t,e)=>{let[i,r]=e
return Math.pow(i.evaluate(t),r.evaluate(t))}],sqrt:[ct,[ct],(t,e)=>{let[i]=e
return Math.sqrt(i.evaluate(t))}],log10:[ct,[ct],(t,e)=>{let[i]=e
return Math.log(i.evaluate(t))/Math.LN10}],ln:[ct,[ct],(t,e)=>{let[i]=e
return Math.log(i.evaluate(t))}],log2:[ct,[ct],(t,e)=>{let[i]=e
return Math.log(i.evaluate(t))/Math.LN2}],sin:[ct,[ct],(t,e)=>{let[i]=e
return Math.sin(i.evaluate(t))}],cos:[ct,[ct],(t,e)=>{let[i]=e
return Math.cos(i.evaluate(t))}],tan:[ct,[ct],(t,e)=>{let[i]=e
return Math.tan(i.evaluate(t))}],asin:[ct,[ct],(t,e)=>{let[i]=e
return Math.asin(i.evaluate(t))}],acos:[ct,[ct],(t,e)=>{let[i]=e
return Math.acos(i.evaluate(t))}],atan:[ct,[ct],(t,e)=>{let[i]=e
return Math.atan(i.evaluate(t))}],min:[ct,pi(ct),(t,e)=>Math.min(...e.map((e=>e.evaluate(t))))],max:[ct,pi(ct),(t,e)=>Math.max(...e.map((e=>e.evaluate(t))))],abs:[ct,[ct],(t,e)=>{let[i]=e
return Math.abs(i.evaluate(t))}],round:[ct,[ct],(t,e)=>{let[i]=e
const r=i.evaluate(t)
return r<0?-Math.round(-r):Math.round(r)}],floor:[ct,[ct],(t,e)=>{let[i]=e
return Math.floor(i.evaluate(t))}],ceil:[ct,[ct],(t,e)=>{let[i]=e
return Math.ceil(i.evaluate(t))}],"filter-==":[ut,[ht,mt],(t,e)=>{let[i,r]=e
return t.properties()[i.value]===r.value}],"filter-id-==":[ut,[mt],(t,e)=>{let[i]=e
return t.id()===i.value}],"filter-type-==":[ut,[ht],(t,e)=>{let[i]=e
return t.geometryType()===i.value}],"filter-<":[ut,[ht,mt],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n<s}],"filter-id-<":[ut,[mt],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r<n}],"filter->":[ut,[ht,mt],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n>s}],"filter-id->":[ut,[mt],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r>n}],"filter-<=":[ut,[ht,mt],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n<=s}],"filter-id-<=":[ut,[mt],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r<=n}],"filter->=":[ut,[ht,mt],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n>=s}],"filter-id->=":[ut,[mt],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r>=n}],"filter-has":[ut,[mt],(t,e)=>{let[i]=e
return i.value in t.properties()}],"filter-has-id":[ut,[],t=>null!==t.id()&&void 0!==t.id()],"filter-type-in":[ut,[yt(ht)],(t,e)=>{let[i]=e
return i.value.indexOf(t.geometryType())>=0}],"filter-id-in":[ut,[yt(mt)],(t,e)=>{let[i]=e
return i.value.indexOf(t.id())>=0}],"filter-in-small":[ut,[ht,yt(mt)],(t,e)=>{let[i,r]=e
return r.value.indexOf(t.properties()[i.value])>=0}],"filter-in-large":[ut,[ht,yt(mt)],(t,e)=>{let[i,r]=e
return function(t,e,i,r){for(;i<=r;){const n=i+r>>1
if(e[n]===t)return!0
e[n]>t?r=n-1:i=n+1}return!1}(t.properties()[i.value],r.value,0,r.value.length-1)}],all:{type:ut,overloads:[[[ut,ut],(t,e)=>{let[i,r]=e
return i.evaluate(t)&&r.evaluate(t)}],[pi(ut),(t,e)=>{for(const i of e)if(!i.evaluate(t))return!1
return!0}]]},any:{type:ut,overloads:[[[ut,ut],(t,e)=>{let[i,r]=e
return i.evaluate(t)||r.evaluate(t)}],[pi(ut),(t,e)=>{for(const i of e)if(i.evaluate(t))return!0
return!1}]]},"!":[ut,[ut],(t,e)=>{let[i]=e
return!i.evaluate(t)}],"is-supported-script":[ut,[ht],(t,e)=>{let[i]=e
const r=t.globals&&t.globals.isSupportedScript
return!r||r(i.evaluate(t))}],upcase:[ht,[ht],(t,e)=>{let[i]=e
return i.evaluate(t).toUpperCase()}],downcase:[ht,[ht],(t,e)=>{let[i]=e
return i.evaluate(t).toLowerCase()}],concat:[ht,pi(mt),(t,e)=>e.map((e=>Ot(e.evaluate(t)))).join("")],"resolved-locale":[ht,[ft],(t,e)=>{let[i]=e
return i.evaluate(t).resolvedLocale()}]})
class Ai{constructor(t,e){this.expression=t,this._warningHistory={},this._evaluator=new Wt,this._defaultValue=e?function(t){return"color"===t.type&&xi(t.default)?new Pt(0,0,0,0):"color"===t.type?Pt.parse(t.default)||null:void 0===t.default?null:t.default}(e):null,this._enumValues=e&&"enum"===e.type?e.values:null}evaluateWithoutErrorHandling(t,e,i,r,n,s){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=i,this._evaluator.canonical=r,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=s,this.expression.evaluate(this._evaluator)}evaluate(t,e,i,r,n,s){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=i||null,this._evaluator.canonical=r,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=s||null
try{const t=this.expression.evaluate(this._evaluator)
if(null==t||"number"==typeof t&&t!=t)return this._defaultValue
if(this._enumValues&&!(t in this._enumValues))throw new Vt(`Expected value to be one of ${Object.keys(this._enumValues).map((t=>JSON.stringify(t))).join(", ")}, but found ${JSON.stringify(t)} instead.`)
return t}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}}function zi(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in li}function Ci(t,e){const i=new ye(li,[],e?function(t){const e={color:pt,string:ht,number:ct,enum:ht,boolean:ut,formatted:gt,resolvedImage:_t}
return"array"===t.type?yt(e[t.value]||mt,t.length):e[t.type]}(e):void 0),r=i.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0)
return r?di(new Ai(r,e)):mi(i.errors)}class Pi{constructor(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!fe(e.expression)}evaluateWithoutErrorHandling(t,e,i,r,n,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,i,r,n,s)}evaluate(t,e,i,r,n,s){return this._styleExpression.evaluate(t,e,i,r,n,s)}}class ki{constructor(t,e,i,r){this.kind=t,this.zoomStops=i,this._styleExpression=e,this.isStateDependent="camera"!==t&&!fe(e.expression),this.interpolationType=r}evaluateWithoutErrorHandling(t,e,i,r,n,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,i,r,n,s)}evaluate(t,e,i,r,n,s){return this._styleExpression.evaluate(t,e,i,r,n,s)}interpolationFactor(t,e,i){return this.interpolationType?Ne.interpolationFactor(this.interpolationType,t,e,i):0}}function Mi(t,e){const i=Ci(t,e)
if("error"===i.result)return i
const r=i.value.expression,n=me(r)
if(!n&&!fi(e))return mi([new ot("","data expressions not supported")])
const s=ge(r,["zoom"])
if(!s&&!gi(e))return mi([new ot("","zoom expressions not supported")])
const o=Li(r)
return o||s?o instanceof ot?mi([o]):o instanceof Ne&&!_i(e)?mi([new ot("",'"interpolate" expressions cannot be used with this property')]):di(o?new ki(n?"camera":"composite",i.value,o.labels,o instanceof Ne?o.interpolation:void 0):new Pi(n?"constant":"source",i.value)):mi([new ot("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}class Di{constructor(t,e){this._parameters=t,this._specification=e,rt(this,bi(this._parameters,this._specification))}static deserialize(t){return new Di(t._parameters,t._specification)}static serialize(t){return{_parameters:t._parameters,_specification:t._specification}}}function Li(t){let e=null
if(t instanceof Ge)e=Li(t.result)
else if(t instanceof qe){for(const i of t.args)if(e=Li(i),e)break}else(t instanceof be||t instanceof Ne)&&t.input instanceof Ht&&"zoom"===t.input.name&&(e=t)
return e instanceof ot||t.eachChild((t=>{const i=Li(t)
i instanceof ot?e=i:!e&&i?e=new ot("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):e&&i&&e!==i&&(e=new ot("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))})),e}function Bi(t){const e=t.key,i=t.value,r=t.valueSpec||{},n=t.objectElementValidators||{},s=t.style,o=t.styleSpec
let a=[]
const l=yi(i)
if("object"!==l)return[new et(e,i,`object expected, ${l} found`)]
for(const c in i){const t=c.split(".")[0],l=r[t]||r["*"]
let h
if(n[t])h=n[t]
else if(r[t])h=lr
else if(n["*"])h=n["*"]
else{if(!r["*"]){a.push(new et(e,i[c],`unknown property "${c}"`))
continue}h=lr}a=a.concat(h({key:(e?`${e}.`:e)+c,value:i[c],valueSpec:l,style:s,styleSpec:o,object:i,objectKey:c},i))}for(const c in r)n[c]||r[c].required&&void 0===r[c].default&&void 0===i[c]&&a.push(new et(e,i,`missing required property "${c}"`))
return a}function Ri(t){const e=t.value,i=t.valueSpec,r=t.style,n=t.styleSpec,s=t.key,o=t.arrayElementValidator||lr
if("array"!==yi(e))return[new et(s,e,`array expected, ${yi(e)} found`)]
if(i.length&&e.length!==i.length)return[new et(s,e,`array length ${i.length} expected, length ${e.length} found`)]
if(i["min-length"]&&e.length<i["min-length"])return[new et(s,e,`array length at least ${i["min-length"]} expected, length ${e.length} found`)]
let a={type:i.value,values:i.values}
n.$version<7&&(a.function=i.function),"object"===yi(i.value)&&(a=i.value)
let l=[]
for(let c=0;c<e.length;c++)l=l.concat(o({array:e,arrayIndex:c,value:e[c],valueSpec:a,style:r,styleSpec:n,key:`${s}[${c}]`}))
return l}function Fi(t){const e=t.key,i=t.value,r=t.valueSpec
let n=yi(i)
return"number"===n&&i!=i&&(n="NaN"),"number"!==n?[new et(e,i,`number expected, ${n} found`)]:"minimum"in r&&i<r.minimum?[new et(e,i,`${i} is less than the minimum value ${r.minimum}`)]:"maximum"in r&&i>r.maximum?[new et(e,i,`${i} is greater than the maximum value ${r.maximum}`)]:[]}function Oi(t){const e=t.valueSpec,i=nt(t.value.type)
let r,n,s,o={}
const a="categorical"!==i&&void 0===t.value.property,l=!a,c="array"===yi(t.value.stops)&&"array"===yi(t.value.stops[0])&&"object"===yi(t.value.stops[0][0]),h=Bi({key:t.key,value:t.value,valueSpec:t.styleSpec.function,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===i)return[new et(t.key,t.value,'identity function may not have a "stops" property')]
let e=[]
const r=t.value
return e=e.concat(Ri({key:t.key,value:r,valueSpec:t.valueSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:u})),"array"===yi(r)&&0===r.length&&e.push(new et(t.key,r,"array must have at least one stop")),e},default:function(t){return lr({key:t.key,value:t.value,valueSpec:e,style:t.style,styleSpec:t.styleSpec})}}})
return"identity"===i&&a&&h.push(new et(t.key,t.value,'missing required property "property"')),"identity"===i||t.value.stops||h.push(new et(t.key,t.value,'missing required property "stops"')),"exponential"===i&&t.valueSpec.expression&&!_i(t.valueSpec)&&h.push(new et(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!fi(t.valueSpec)?h.push(new et(t.key,t.value,"property functions not supported")):a&&!gi(t.valueSpec)&&h.push(new et(t.key,t.value,"zoom functions not supported"))),"categorical"!==i&&!c||void 0!==t.value.property||h.push(new et(t.key,t.value,'"property" property is required')),h
function u(t){let i=[]
const r=t.value,a=t.key
if("array"!==yi(r))return[new et(a,r,`array expected, ${yi(r)} found`)]
if(2!==r.length)return[new et(a,r,`array length 2 expected, length ${r.length} found`)]
if(c){if("object"!==yi(r[0]))return[new et(a,r,`object expected, ${yi(r[0])} found`)]
if(void 0===r[0].zoom)return[new et(a,r,"object stop key must have zoom")]
if(void 0===r[0].value)return[new et(a,r,"object stop key must have value")]
if(s&&s>nt(r[0].zoom))return[new et(a,r[0].zoom,"stop zoom values must appear in ascending order")]
nt(r[0].zoom)!==s&&(s=nt(r[0].zoom),n=void 0,o={}),i=i.concat(Bi({key:`${a}[0]`,value:r[0],valueSpec:{zoom:{}},style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Fi,value:p}}))}else i=i.concat(p({key:`${a}[0]`,value:r[0],valueSpec:{},style:t.style,styleSpec:t.styleSpec},r))
return zi(st(r[1]))?i.concat([new et(`${a}[1]`,r[1],"expressions are not allowed in function stops.")]):i.concat(lr({key:`${a}[1]`,value:r[1],valueSpec:e,style:t.style,styleSpec:t.styleSpec}))}function p(t,s){const a=yi(t.value),l=nt(t.value),c=null!==t.value?t.value:s
if(r){if(a!==r)return[new et(t.key,c,`${a} stop domain type must match previous stop domain type ${r}`)]}else r=a
if("number"!==a&&"string"!==a&&"boolean"!==a)return[new et(t.key,c,"stop domain value must be a number, string, or boolean")]
if("number"!==a&&"categorical"!==i){let r=`number expected, ${a} found`
return fi(e)&&void 0===i&&(r+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new et(t.key,c,r)]}return"categorical"!==i||"number"!==a||isFinite(l)&&Math.floor(l)===l?"categorical"!==i&&"number"===a&&void 0!==n&&l<n?[new et(t.key,c,"stop domain values must appear in ascending order")]:(n=l,"categorical"===i&&l in o?[new et(t.key,c,"stop domain values must be unique")]:(o[l]=!0,[])):[new et(t.key,c,`integer expected, found ${l}`)]}}function Ui(t){const e=("property"===t.expressionContext?Mi:Ci)(st(t.value),t.valueSpec)
if("error"===e.result)return e.value.map((e=>new et(`${t.key}${e.key}`,t.value,e.message)))
const i=e.value.expression||e.value._styleExpression.expression
if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!i.outputDefined())return[new et(t.key,t.value,`Invalid data expression for "${t.propertyKey}". Output values must be contained as literals within the expression.`)]
if("property"===t.expressionContext&&"layout"===t.propertyType&&!fe(i))return[new et(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')]
if("filter"===t.expressionContext&&!fe(i))return[new et(t.key,t.value,'"feature-state" data expressions are not supported with filters.')]
if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!ge(i,["zoom","feature-state"]))return[new et(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')]
if("cluster-initial"===t.expressionContext&&!me(i))return[new et(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return[]}function Vi(t){const e=t.key,i=t.value,r=t.valueSpec,n=[]
return Array.isArray(r.values)?-1===r.values.indexOf(nt(i))&&n.push(new et(e,i,`expected one of [${r.values.join(", ")}], ${JSON.stringify(i)} found`)):-1===Object.keys(r.values).indexOf(nt(i))&&n.push(new et(e,i,`expected one of [${Object.keys(r.values).join(", ")}], ${JSON.stringify(i)} found`)),n}function Ni(t){if(!0===t||!1===t)return!0
if(!Array.isArray(t)||0===t.length)return!1
switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1]
case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]))
case"!in":case"!has":case"none":return!1
case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2])
case"any":case"all":for(const e of t.slice(1))if(!Ni(e)&&"boolean"!=typeof e)return!1
return!0
default:return!0}}const $i={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}}
function qi(t){if(null==t)return{filter:()=>!0,needGeometry:!1}
Ni(t)||(t=Zi(t))
const e=Ci(t,$i)
if("error"===e.result)throw new Error(e.value.map((t=>`${t.key}: ${t.message}`)).join(", "))
return{filter:(t,i,r)=>e.value.evaluate(t,i,{},r),needGeometry:ji(t)}}function Gi(t,e){return t<e?-1:t>e?1:0}function ji(t){if(!Array.isArray(t))return!1
if("within"===t[0])return!0
for(let e=1;e<t.length;e++)if(ji(t[e]))return!0
return!1}function Zi(t){if(!t)return!0
const e=t[0]
return t.length<=1?"any"!==e:"=="===e?Xi(t[1],t[2],"=="):"!="===e?Ki(Xi(t[1],t[2],"==")):"<"===e||">"===e||"<="===e||">="===e?Xi(t[1],t[2],e):"any"===e?(i=t.slice(1),["any"].concat(i.map(Zi))):"all"===e?["all"].concat(t.slice(1).map(Zi)):"none"===e?["all"].concat(t.slice(1).map(Zi).map(Ki)):"in"===e?Wi(t[1],t.slice(2)):"!in"===e?Ki(Wi(t[1],t.slice(2))):"has"===e?Hi(t[1]):"!has"===e?Ki(Hi(t[1])):"within"!==e||t
var i}function Xi(t,e,i){switch(t){case"$type":return[`filter-type-${i}`,e]
case"$id":return[`filter-id-${i}`,e]
default:return[`filter-${i}`,t,e]}}function Wi(t,e){if(0===e.length)return!1
switch(t){case"$type":return["filter-type-in",["literal",e]]
case"$id":return["filter-id-in",["literal",e]]
default:return e.length>200&&!e.some((t=>typeof t!=typeof e[0]))?["filter-in-large",t,["literal",e.sort(Gi)]]:["filter-in-small",t,["literal",e]]}}function Hi(t){switch(t){case"$type":return!0
case"$id":return["filter-has-id"]
default:return["filter-has",t]}}function Ki(t){return["!",t]}function Yi(t){return Ni(st(t.value))?Ui(rt({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):Ji(t)}function Ji(t){const e=t.value,i=t.key
if("array"!==yi(e))return[new et(i,e,`array expected, ${yi(e)} found`)]
const r=t.styleSpec
let n,s=[]
if(e.length<1)return[new et(i,e,"filter array must have at least 1 element")]
switch(s=s.concat(Vi({key:`${i}[0]`,value:e[0],valueSpec:r.filter_operator,style:t.style,styleSpec:t.styleSpec})),nt(e[0])){case"<":case"<=":case">":case">=":e.length>=2&&"$type"===nt(e[1])&&s.push(new et(i,e,`"$type" cannot be use with operator "${e[0]}"`))
case"==":case"!=":3!==e.length&&s.push(new et(i,e,`filter array for operator "${e[0]}" must have 3 elements`))
case"in":case"!in":e.length>=2&&(n=yi(e[1]),"string"!==n&&s.push(new et(`${i}[1]`,e[1],`string expected, ${n} found`)))
for(let o=2;o<e.length;o++)n=yi(e[o]),"$type"===nt(e[1])?s=s.concat(Vi({key:`${i}[${o}]`,value:e[o],valueSpec:r.geometry_type,style:t.style,styleSpec:t.styleSpec})):"string"!==n&&"number"!==n&&"boolean"!==n&&s.push(new et(`${i}[${o}]`,e[o],`string, number, or boolean expected, ${n} found`))
break
case"any":case"all":case"none":for(let r=1;r<e.length;r++)s=s.concat(Ji({key:`${i}[${r}]`,value:e[r],style:t.style,styleSpec:t.styleSpec}))
break
case"has":case"!has":n=yi(e[1]),2!==e.length?s.push(new et(i,e,`filter array for "${e[0]}" operator must have 2 elements`)):"string"!==n&&s.push(new et(`${i}[1]`,e[1],`string expected, ${n} found`))
break
case"within":n=yi(e[1]),2!==e.length?s.push(new et(i,e,`filter array for "${e[0]}" operator must have 2 elements`)):"object"!==n&&s.push(new et(`${i}[1]`,e[1],`object expected, ${n} found`))}return s}function Qi(t,e){const i=t.key,r=t.style,n=t.styleSpec,s=t.value,o=t.objectKey,a=n[`${e}_${t.layerType}`]
if(!a)return[]
const l=o.match(/^(.*)-transition$/)
if("paint"===e&&l&&a[l[1]]&&a[l[1]].transition)return lr({key:i,value:s,valueSpec:n.transition,style:r,styleSpec:n})
const c=t.valueSpec||a[o]
if(!c)return[new et(i,s,`unknown property "${o}"`)]
let h
if("string"===yi(s)&&fi(c)&&!c.tokens&&(h=/^{([^}]+)}$/.exec(s)))return[new et(i,s,`"${o}" does not support interpolation syntax\nUse an identity property function instead: \`{ "type": "identity", "property": ${JSON.stringify(h[1])} }\`.`)]
const u=[]
return"symbol"===t.layerType&&("text-field"===o&&r&&!r.glyphs&&u.push(new et(i,s,'use of "text-field" requires a style "glyphs" property')),"text-font"===o&&xi(st(s))&&"identity"===nt(s.type)&&u.push(new et(i,s,'"text-font" does not support identity functions'))),u.concat(lr({key:t.key,value:s,valueSpec:c,style:r,styleSpec:n,expressionContext:"property",propertyType:e,propertyKey:o}))}function tr(t){return Qi(t,"paint")}function er(t){return Qi(t,"layout")}function ir(t){let e=[]
const i=t.value,r=t.key,n=t.style,s=t.styleSpec
i.type||i.ref||e.push(new et(r,i,'either "type" or "ref" is required'))
let o=nt(i.type)
const a=nt(i.ref)
if(i.id){const s=nt(i.id)
for(let o=0;o<t.arrayIndex;o++){const t=n.layers[o]
nt(t.id)===s&&e.push(new et(r,i.id,`duplicate layer id "${i.id}", previously used at line ${t.id.__line__}`))}}if("ref"in i){let t;["type","source","source-layer","filter","layout"].forEach((t=>{t in i&&e.push(new et(r,i[t],`"${t}" is prohibited for ref layers`))})),n.layers.forEach((e=>{nt(e.id)===a&&(t=e)})),t?t.ref?e.push(new et(r,i.ref,"ref cannot reference another ref layer")):o=nt(t.type):e.push(new et(r,i.ref,`ref layer "${a}" not found`))}else if("background"!==o)if(i.source){const t=n.sources&&n.sources[i.source],s=t&&nt(t.type)
t?"vector"===s&&"raster"===o?e.push(new et(r,i.source,`layer "${i.id}" requires a raster source`)):"raster"===s&&"raster"!==o?e.push(new et(r,i.source,`layer "${i.id}" requires a vector source`)):"vector"!==s||i["source-layer"]?"raster-dem"===s&&"hillshade"!==o?e.push(new et(r,i.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==o||!i.paint||!i.paint["line-gradient"]||"geojson"===s&&t.lineMetrics||e.push(new et(r,i,`layer "${i.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)):e.push(new et(r,i,`layer "${i.id}" must specify a "source-layer"`)):e.push(new et(r,i.source,`source "${i.source}" not found`))}else e.push(new et(r,i,'missing required property "source"'))
return e=e.concat(Bi({key:r,value:i,valueSpec:s.layer,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":()=>[],type:()=>lr({key:`${r}.type`,value:i.type,valueSpec:s.layer.type,style:t.style,styleSpec:t.styleSpec,object:i,objectKey:"type"}),filter:Yi,layout:t=>Bi({layer:i,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>er(rt({layerType:o},t))}}),paint:t=>Bi({layer:i,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{"*":t=>tr(rt({layerType:o},t))}})}})),e}function rr(t){const e=t.value,i=t.key,r=yi(e)
return"string"!==r?[new et(i,e,`string expected, ${r} found`)]:[]}const nr={promoteId:function(t){let{key:e,value:i}=t
if("string"===yi(i))return rr({key:e,value:i})
{const t=[]
for(const r in i)t.push(...rr({key:`${e}.${r}`,value:i[r]}))
return t}}}
function sr(t){const e=t.value,i=t.key,r=t.styleSpec,n=t.style
if(!e.type)return[new et(i,e,'"type" is required')]
const s=nt(e.type)
let o
switch(s){case"vector":case"raster":case"raster-dem":return o=Bi({key:i,value:e,valueSpec:r[`source_${s.replace("-","_")}`],style:t.style,styleSpec:r,objectElementValidators:nr}),o
case"geojson":if(o=Bi({key:i,value:e,valueSpec:r.source_geojson,style:n,styleSpec:r,objectElementValidators:nr}),e.cluster)for(const t in e.clusterProperties){const[r,n]=e.clusterProperties[t],s="string"==typeof r?[r,["accumulated"],["get",t]]:r
o.push(...Ui({key:`${i}.${t}.map`,value:n,expressionContext:"cluster-map"})),o.push(...Ui({key:`${i}.${t}.reduce`,value:s,expressionContext:"cluster-reduce"}))}return o
case"video":return Bi({key:i,value:e,valueSpec:r.source_video,style:n,styleSpec:r})
case"image":return Bi({key:i,value:e,valueSpec:r.source_image,style:n,styleSpec:r})
case"canvas":return[new et(i,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")]
default:return Vi({key:`${i}.type`,value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:n,styleSpec:r})}}function or(t){const e=t.value,i=t.styleSpec,r=i.light,n=t.style
let s=[]
const o=yi(e)
if(void 0===e)return s
if("object"!==o)return s=s.concat([new et("light",e,`object expected, ${o} found`)]),s
for(const a in e){const t=a.match(/^(.*)-transition$/)
s=s.concat(t&&r[t[1]]&&r[t[1]].transition?lr({key:a,value:e[a],valueSpec:i.transition,style:n,styleSpec:i}):r[a]?lr({key:a,value:e[a],valueSpec:r[a],style:n,styleSpec:i}):[new et(a,e[a],`unknown property "${a}"`)])}return s}const ar={"*":()=>[],array:Ri,boolean:function(t){const e=t.value,i=t.key,r=yi(e)
return"boolean"!==r?[new et(i,e,`boolean expected, ${r} found`)]:[]},number:Fi,color:function(t){const e=t.key,i=t.value,r=yi(i)
return"string"!==r?[new et(e,i,`color expected, ${r} found`)]:null===Tt(i)?[new et(e,i,`color expected, "${i}" found`)]:[]},constants:it,enum:Vi,filter:Yi,function:Oi,layer:ir,object:Bi,source:sr,light:or,string:rr,formatted:function(t){return 0===rr(t).length?[]:Ui(t)},resolvedImage:function(t){return 0===rr(t).length?[]:Ui(t)}}
function lr(t){const e=t.value,i=t.valueSpec,r=t.styleSpec
return i.expression&&xi(nt(e))?Oi(t):i.expression&&zi(st(e))?Ui(t):i.type&&ar[i.type]?ar[i.type](t):Bi(rt({},t,{valueSpec:i.type?r[i.type]:i}))}function cr(t){const e=t.value,i=t.key,r=rr(t)
return r.length||(-1===e.indexOf("{fontstack}")&&r.push(new et(i,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&r.push(new et(i,e,'"glyphs" url must include a "{range}" token'))),r}function hr(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:tt,i=[]
return i=i.concat(lr({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,objectElementValidators:{glyphs:cr,"*":()=>[]}})),t.constants&&(i=i.concat(it({key:"constants",value:t.constants,style:t,styleSpec:e}))),ur(i)}function ur(t){return[].concat(t).sort(((t,e)=>t.line-e.line))}function pr(t){return function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r]
return ur(t.apply(this,i))}}hr.source=pr(sr),hr.light=pr(or),hr.layer=pr(ir),hr.filter=pr(Yi),hr.paintProperty=pr(tr),hr.layoutProperty=pr(er)
const dr=hr,mr=dr.light,fr=dr.paintProperty,gr=dr.layoutProperty
function _r(t,e){let i=!1
if(e&&e.length)for(const r of e)t.fire(new J(new Error(r.message))),i=!0
return i}class yr{constructor(t,e,i){const r=this.cells=[]
if(t instanceof ArrayBuffer){this.arrayBuffer=t
const n=new Int32Array(this.arrayBuffer)
t=n[0],this.d=(e=n[1])+2*(i=n[2])
for(let t=0;t<this.d*this.d;t++){const e=n[3+t],i=n[3+t+1]
r.push(e===i?null:n.subarray(e,i))}const s=n[3+r.length+1]
this.keys=n.subarray(n[3+r.length],s),this.bboxes=n.subarray(s),this.insert=this._insertReadonly}else{this.d=e+2*i
for(let t=0;t<this.d*this.d;t++)r.push([])
this.keys=[],this.bboxes=[]}this.n=e,this.extent=t,this.padding=i,this.scale=e/t,this.uid=0
const n=i/e*t
this.min=-n,this.max=t+n}insert(t,e,i,r,n){this._forEachCell(e,i,r,n,this._insertCell,this.uid++,void 0,void 0),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(r),this.bboxes.push(n)}_insertReadonly(){throw new Error("Cannot insert into a GridIndex created from an ArrayBuffer.")}_insertCell(t,e,i,r,n,s){this.cells[n].push(s)}query(t,e,i,r,n){const s=this.min,o=this.max
if(t<=s&&e<=s&&o<=i&&o<=r&&!n)return Array.prototype.slice.call(this.keys)
{const s=[]
return this._forEachCell(t,e,i,r,this._queryCell,s,{},n),s}}_queryCell(t,e,i,r,n,s,o,a){const l=this.cells[n]
if(null!==l){const n=this.keys,c=this.bboxes
for(let h=0;h<l.length;h++){const u=l[h]
if(void 0===o[u]){const l=4*u;(a?a(c[l+0],c[l+1],c[l+2],c[l+3]):t<=c[l+2]&&e<=c[l+3]&&i>=c[l+0]&&r>=c[l+1])?(o[u]=!0,s.push(n[u])):o[u]=!1}}}}_forEachCell(t,e,i,r,n,s,o,a){const l=this._convertToCellCoord(t),c=this._convertToCellCoord(e),h=this._convertToCellCoord(i),u=this._convertToCellCoord(r)
for(let p=l;p<=h;p++)for(let l=c;l<=u;l++){const c=this.d*l+p
if((!a||a(this._convertFromCellCoord(p),this._convertFromCellCoord(l),this._convertFromCellCoord(p+1),this._convertFromCellCoord(l+1)))&&n.call(this,t,e,i,r,c,s,o,a))return}}_convertFromCellCoord(t){return(t-this.padding)/this.scale}_convertToCellCoord(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))}toArrayBuffer(){if(this.arrayBuffer)return this.arrayBuffer
const t=this.cells,e=3+this.cells.length+1+1
let i=0
for(let s=0;s<this.cells.length;s++)i+=this.cells[s].length
const r=new Int32Array(e+i+this.keys.length+this.bboxes.length)
r[0]=this.extent,r[1]=this.n,r[2]=this.padding
let n=e
for(let s=0;s<t.length;s++){const e=t[s]
r[3+s]=n,r.set(e,n),n+=e.length}return r[3+t.length]=n,r.set(this.keys,n),n+=this.keys.length,r[3+t.length+1]=n,r.set(this.bboxes,n),n+=this.bboxes.length,r.buffer}static serialize(t,e){const i=t.toArrayBuffer()
return e&&e.push(i),{buffer:i}}static deserialize(t){return new yr(t.buffer)}}const xr={}
function vr(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),xr[t]={klass:e,omit:i.omit||[],shallow:i.shallow||[]}}vr("Object",Object),vr("TransferableGridIndex",yr),vr("Color",Pt),vr("Error",Error),vr("AJAXError",U),vr("ResolvedImage",Lt),vr("StylePropertyFunction",Di),vr("StyleExpression",Ai,{omit:["_evaluator"]}),vr("ZoomDependentExpression",ki),vr("ZoomConstantExpression",Pi),vr("CompoundExpression",Ht,{omit:["_evaluate"]})
for(const ah in li)li[ah]._classRegistryKey||vr(`Expression_${ah}`,li[ah])
function br(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function wr(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob)return t
if(br(t))return e&&e.push(t),t
if(w(t))return e&&e.push(t),t
if(ArrayBuffer.isView(t)){const i=t
return e&&e.push(i.buffer),i}if(t instanceof ImageData)return e&&e.push(t.data.buffer),t
if(Array.isArray(t)){const i=[]
for(const r of t)i.push(wr(r,e))
return i}if("object"==typeof t){const i=t.constructor,r=i._classRegistryKey
if(!r)throw new Error("can't serialize object of unregistered class")
const n=i.serialize?i.serialize(t,e):{}
if(!i.serialize){for(const i in t){if(!t.hasOwnProperty(i))continue
if(xr[r].omit.indexOf(i)>=0)continue
const s=t[i]
n[i]=xr[r].shallow.indexOf(i)>=0?s:wr(s,e)}t instanceof Error&&(n.message=t.message)}if(n.$name)throw new Error("$name property is reserved for worker serialization logic.")
return"Object"!==r&&(n.$name=r),n}throw new Error("can't serialize object of type "+typeof t)}function Sr(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob||br(t)||w(t)||ArrayBuffer.isView(t)||t instanceof ImageData)return t
if(Array.isArray(t))return t.map(Sr)
if("object"==typeof t){const e=t.$name||"Object"
if(!xr[e])throw new Error(`can't deserialize unregistered class ${e}`)
const{klass:i}=xr[e]
if(!i)throw new Error(`can't deserialize unregistered class ${e}`)
if(i.deserialize)return i.deserialize(t)
const r=Object.create(i.prototype)
for(const n of Object.keys(t)){if("$name"===n)continue
const i=t[n]
r[n]=xr[e].shallow.indexOf(n)>=0?i:Sr(i)}return r}throw new Error("can't deserialize object of type "+typeof t)}class Tr{constructor(){this.first=!0}update(t,e){const i=Math.floor(t)
return this.first?(this.first=!1,this.lastIntegerZoom=i,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=i,!0):(this.lastFloorZoom>i?(this.lastIntegerZoom=i+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<i&&(this.lastIntegerZoom=i,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=i,!0))}}const Ir={"Latin-1 Supplement":t=>t>=128&&t<=255,Arabic:t=>t>=1536&&t<=1791,"Arabic Supplement":t=>t>=1872&&t<=1919,"Arabic Extended-A":t=>t>=2208&&t<=2303,"Hangul Jamo":t=>t>=4352&&t<=4607,"Unified Canadian Aboriginal Syllabics":t=>t>=5120&&t<=5759,Khmer:t=>t>=6016&&t<=6143,"Unified Canadian Aboriginal Syllabics Extended":t=>t>=6320&&t<=6399,"General Punctuation":t=>t>=8192&&t<=8303,"Letterlike Symbols":t=>t>=8448&&t<=8527,"Number Forms":t=>t>=8528&&t<=8591,"Miscellaneous Technical":t=>t>=8960&&t<=9215,"Control Pictures":t=>t>=9216&&t<=9279,"Optical Character Recognition":t=>t>=9280&&t<=9311,"Enclosed Alphanumerics":t=>t>=9312&&t<=9471,"Geometric Shapes":t=>t>=9632&&t<=9727,"Miscellaneous Symbols":t=>t>=9728&&t<=9983,"Miscellaneous Symbols and Arrows":t=>t>=11008&&t<=11263,"CJK Radicals Supplement":t=>t>=11904&&t<=12031,"Kangxi Radicals":t=>t>=12032&&t<=12255,"Ideographic Description Characters":t=>t>=12272&&t<=12287,"CJK Symbols and Punctuation":t=>t>=12288&&t<=12351,Hiragana:t=>t>=12352&&t<=12447,Katakana:t=>t>=12448&&t<=12543,Bopomofo:t=>t>=12544&&t<=12591,"Hangul Compatibility Jamo":t=>t>=12592&&t<=12687,Kanbun:t=>t>=12688&&t<=12703,"Bopomofo Extended":t=>t>=12704&&t<=12735,"CJK Strokes":t=>t>=12736&&t<=12783,"Katakana Phonetic Extensions":t=>t>=12784&&t<=12799,"Enclosed CJK Letters and Months":t=>t>=12800&&t<=13055,"CJK Compatibility":t=>t>=13056&&t<=13311,"CJK Unified Ideographs Extension A":t=>t>=13312&&t<=19903,"Yijing Hexagram Symbols":t=>t>=19904&&t<=19967,"CJK Unified Ideographs":t=>t>=19968&&t<=40959,"Yi Syllables":t=>t>=40960&&t<=42127,"Yi Radicals":t=>t>=42128&&t<=42191,"Hangul Jamo Extended-A":t=>t>=43360&&t<=43391,"Hangul Syllables":t=>t>=44032&&t<=55215,"Hangul Jamo Extended-B":t=>t>=55216&&t<=55295,"Private Use Area":t=>t>=57344&&t<=63743,"CJK Compatibility Ideographs":t=>t>=63744&&t<=64255,"Arabic Presentation Forms-A":t=>t>=64336&&t<=65023,"Vertical Forms":t=>t>=65040&&t<=65055,"CJK Compatibility Forms":t=>t>=65072&&t<=65103,"Small Form Variants":t=>t>=65104&&t<=65135,"Arabic Presentation Forms-B":t=>t>=65136&&t<=65279,"Halfwidth and Fullwidth Forms":t=>t>=65280&&t<=65519}
function Er(t){for(const e of t)if(Cr(e.charCodeAt(0)))return!0
return!1}function Ar(t){for(const e of t)if(!zr(e.charCodeAt(0)))return!1
return!0}function zr(t){return!(Ir.Arabic(t)||Ir["Arabic Supplement"](t)||Ir["Arabic Extended-A"](t)||Ir["Arabic Presentation Forms-A"](t)||Ir["Arabic Presentation Forms-B"](t))}function Cr(t){return!(746!==t&&747!==t&&(t<4352||!(Ir["Bopomofo Extended"](t)||Ir.Bopomofo(t)||Ir["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||Ir["CJK Compatibility Ideographs"](t)||Ir["CJK Compatibility"](t)||Ir["CJK Radicals Supplement"](t)||Ir["CJK Strokes"](t)||!(!Ir["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||Ir["CJK Unified Ideographs Extension A"](t)||Ir["CJK Unified Ideographs"](t)||Ir["Enclosed CJK Letters and Months"](t)||Ir["Hangul Compatibility Jamo"](t)||Ir["Hangul Jamo Extended-A"](t)||Ir["Hangul Jamo Extended-B"](t)||Ir["Hangul Jamo"](t)||Ir["Hangul Syllables"](t)||Ir.Hiragana(t)||Ir["Ideographic Description Characters"](t)||Ir.Kanbun(t)||Ir["Kangxi Radicals"](t)||Ir["Katakana Phonetic Extensions"](t)||Ir.Katakana(t)&&12540!==t||!(!Ir["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Ir["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||Ir["Unified Canadian Aboriginal Syllabics"](t)||Ir["Unified Canadian Aboriginal Syllabics Extended"](t)||Ir["Vertical Forms"](t)||Ir["Yijing Hexagram Symbols"](t)||Ir["Yi Syllables"](t)||Ir["Yi Radicals"](t))))}function Pr(t){return!(Cr(t)||function(t){return!!(Ir["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||Ir["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||Ir["Letterlike Symbols"](t)||Ir["Number Forms"](t)||Ir["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||Ir["Control Pictures"](t)&&9251!==t||Ir["Optical Character Recognition"](t)||Ir["Enclosed Alphanumerics"](t)||Ir["Geometric Shapes"](t)||Ir["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||Ir["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||Ir["CJK Symbols and Punctuation"](t)||Ir.Katakana(t)||Ir["Private Use Area"](t)||Ir["CJK Compatibility Forms"](t)||Ir["Small Form Variants"](t)||Ir["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function kr(t){return t>=1424&&t<=2303||Ir["Arabic Presentation Forms-A"](t)||Ir["Arabic Presentation Forms-B"](t)}function Mr(t,e){return!(!e&&kr(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||Ir.Khmer(t))}function Dr(t){for(const e of t)if(kr(e.charCodeAt(0)))return!0
return!1}const Lr="deferred",Br="loading",Rr="loaded"
let Fr=null,Or="unavailable",Ur=null
const Vr=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&(Or="error"),Fr&&Fr(t)}
function Nr(){$r.fire(new Y("pluginStateChange",{pluginStatus:Or,pluginURL:Ur}))}const $r=new Q,qr=function(){return Or},Gr=function(){if(Or!==Lr||!Ur)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified")
Or=Br,Nr(),Ur&&q({url:Ur},(t=>{t?Vr(t):(Or=Rr,Nr())}))},jr={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:()=>Or===Rr||null!=jr.applyArabicShaping,isLoading:()=>Or===Br,setState(t){Or=t.pluginStatus,Ur=t.pluginURL},isParsed:()=>null!=jr.applyArabicShaping&&null!=jr.processBidirectionalText&&null!=jr.processStyledBidirectionalText,getPluginURL:()=>Ur}
class Zr{constructor(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new Tr,this.transition={})}isSupportedScript(t){return function(t,e){for(const i of t)if(!Mr(i.charCodeAt(0),e))return!1
return!0}(t,jr.isLoaded())}crossFadingFactor(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)}getCrossfadeParameters(){const t=this.zoom,e=t-Math.floor(t),i=this.crossFadingFactor()
return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*i}:{fromScale:.5,toScale:1,t:1-(1-i)*e}}}class Xr{constructor(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(xi(t))return new Di(t,e)
if(zi(t)){const i=Mi(t,e)
if("error"===i.result)throw new Error(i.value.map((t=>`${t.key}: ${t.message}`)).join(", "))
return i.value}{let i=t
return"string"==typeof t&&"color"===e.type&&(i=Pt.parse(t)),{kind:"constant",evaluate:()=>i}}}(void 0===e?t.specification.default:e,t.specification)}isDataDriven(){return"source"===this.expression.kind||"composite"===this.expression.kind}possiblyEvaluate(t,e,i){return this.property.possiblyEvaluate(this,t,e,i)}}class Wr{constructor(t){this.property=t,this.value=new Xr(t,void 0)}transitioned(t,e){return new Kr(this.property,this.value,e,a({},t.transition,this.transition),t.now)}untransitioned(){return new Kr(this.property,this.value,null,{},0)}}class Hr{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues)}getValue(t){return p(this._values[t].value.value)}setValue(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new Wr(this._values[t].property)),this._values[t].value=new Xr(this._values[t].property,null===e?void 0:p(e))}getTransition(t){return p(this._values[t].transition)}setTransition(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new Wr(this._values[t].property)),this._values[t].transition=p(e)||void 0}serialize(){const t={}
for(const e of Object.keys(this._values)){const i=this.getValue(e)
void 0!==i&&(t[e]=i)
const r=this.getTransition(e)
void 0!==r&&(t[`${e}-transition`]=r)}return t}transitioned(t,e){const i=new Yr(this._properties)
for(const r of Object.keys(this._values))i._values[r]=this._values[r].transitioned(t,e._values[r])
return i}untransitioned(){const t=new Yr(this._properties)
for(const e of Object.keys(this._values))t._values[e]=this._values[e].untransitioned()
return t}}class Kr{constructor(t,e,i,r,n){this.property=t,this.value=e,this.begin=n+r.delay||0,this.end=this.begin+r.duration||0,t.specification.transition&&(r.delay||r.duration)&&(this.prior=i)}possiblyEvaluate(t,e,i){const r=t.now||0,n=this.value.possiblyEvaluate(t,e,i),s=this.prior
if(s){if(r>this.end)return this.prior=null,n
if(this.value.isDataDriven())return this.prior=null,n
if(r<this.begin)return s.possiblyEvaluate(t,e,i)
{const o=(r-this.begin)/(this.end-this.begin)
return this.property.interpolate(s.possiblyEvaluate(t,e,i),n,function(t){if(t<=0)return 0
if(t>=1)return 1
const e=t*t,i=e*t
return 4*(t<.5?i:3*(t-e)+i-.75)}(o))}}return n}}class Yr{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues)}possiblyEvaluate(t,e,i){const r=new tn(this._properties)
for(const n of Object.keys(this._values))r._values[n]=this._values[n].possiblyEvaluate(t,e,i)
return r}hasTransition(){for(const t of Object.keys(this._values))if(this._values[t].prior)return!0
return!1}}class Jr{constructor(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues)}getValue(t){return p(this._values[t].value)}setValue(t,e){this._values[t]=new Xr(this._values[t].property,null===e?void 0:p(e))}serialize(){const t={}
for(const e of Object.keys(this._values)){const i=this.getValue(e)
void 0!==i&&(t[e]=i)}return t}possiblyEvaluate(t,e,i){const r=new tn(this._properties)
for(const n of Object.keys(this._values))r._values[n]=this._values[n].possiblyEvaluate(t,e,i)
return r}}class Qr{constructor(t,e,i){this.property=t,this.value=e,this.parameters=i}isConstant(){return"constant"===this.value.kind}constantOr(t){return"constant"===this.value.kind?this.value.value:t}evaluate(t,e,i,r){return this.property.evaluate(this.value,this.parameters,t,e,i,r)}}class tn{constructor(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues)}get(t){return this._values[t]}}class en{constructor(t){this.specification=t}possiblyEvaluate(t,e){return t.expression.evaluate(e)}interpolate(t,e,i){const r=Se[this.specification.type]
return r?r(t,e,i):t}}class rn{constructor(t,e){this.specification=t,this.overrides=e}possiblyEvaluate(t,e,i,r){return new Qr(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},i,r)}:t.expression,e)}interpolate(t,e,i){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t
if(void 0===t.value.value||void 0===e.value.value)return new Qr(this,{kind:"constant",value:void 0},t.parameters)
const r=Se[this.specification.type]
return r?new Qr(this,{kind:"constant",value:r(t.value.value,e.value.value,i)},t.parameters):t}evaluate(t,e,i,r,n,s){return"constant"===t.kind?t.value:t.evaluate(e,i,r,n,s)}}class nn extends rn{possiblyEvaluate(t,e,i,r){if(void 0===t.value)return new Qr(this,{kind:"constant",value:void 0},e)
if("constant"===t.expression.kind){const n=t.expression.evaluate(e,null,{},i,r),s="resolvedImage"===t.property.specification.type&&"string"!=typeof n?n.name:n,o=this._calculate(s,s,s,e)
return new Qr(this,{kind:"constant",value:o},e)}if("camera"===t.expression.kind){const i=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e)
return new Qr(this,{kind:"constant",value:i},e)}return new Qr(this,t.expression,e)}evaluate(t,e,i,r,n,s){if("source"===t.kind){const o=t.evaluate(e,i,r,n,s)
return this._calculate(o,o,o,e)}return"composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},i,r),t.evaluate({zoom:Math.floor(e.zoom)},i,r),t.evaluate({zoom:Math.floor(e.zoom)+1},i,r),e):t.value}_calculate(t,e,i,r){return r.zoom>r.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:i,to:e}}interpolate(t){return t}}class sn{constructor(t){this.specification=t}possiblyEvaluate(t,e,i,r){if(void 0!==t.value){if("constant"===t.expression.kind){const n=t.expression.evaluate(e,null,{},i,r)
return this._calculate(n,n,n,e)}return this._calculate(t.expression.evaluate(new Zr(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Zr(Math.floor(e.zoom),e)),t.expression.evaluate(new Zr(Math.floor(e.zoom+1),e)),e)}}_calculate(t,e,i,r){return r.zoom>r.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:i,to:e}}interpolate(t){return t}}class on{constructor(t){this.specification=t}possiblyEvaluate(t,e,i,r){return!!t.expression.evaluate(e,null,{},i,r)}interpolate(){return!1}}class an{constructor(t){this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[]
for(const e in t){const i=t[e]
i.specification.overridable&&this.overridableProperties.push(e)
const r=this.defaultPropertyValues[e]=new Xr(i,void 0),n=this.defaultTransitionablePropertyValues[e]=new Wr(i)
this.defaultTransitioningPropertyValues[e]=n.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=r.possiblyEvaluate({})}}}vr("DataDrivenProperty",rn),vr("DataConstantProperty",en),vr("CrossFadedDataDrivenProperty",nn),vr("CrossFadedProperty",sn),vr("ColorRampProperty",on)
const ln="-transition"
class cn extends Q{constructor(t,e){if(super(),this.id=t.id,this.type=t.type,this._featureFilter={filter:()=>!0,needGeometry:!1},"custom"!==t.type&&(this.metadata=t.metadata,this.minzoom=t.minzoom,this.maxzoom=t.maxzoom,"background"!==t.type&&(this.source=t.source,this.sourceLayer=t["source-layer"],this.filter=t.filter),e.layout&&(this._unevaluatedLayout=new Jr(e.layout)),e.paint)){this._transitionablePaint=new Hr(e.paint)
for(const e in t.paint)this.setPaintProperty(e,t.paint[e],{validate:!1})
for(const e in t.layout)this.setLayoutProperty(e,t.layout[e],{validate:!1})
this._transitioningPaint=this._transitionablePaint.untransitioned(),this.paint=new tn(e.paint)}}getCrossfadeParameters(){return this._crossfadeParameters}getLayoutProperty(t){return"visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)}setLayoutProperty(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
null!=e&&this._validate(gr,`layers.${this.id}.layout.${t}`,t,e,i)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e)}getPaintProperty(t){return t.endsWith(ln)?this._transitionablePaint.getTransition(t.slice(0,-ln.length)):this._transitionablePaint.getValue(t)}setPaintProperty(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(null!=e&&this._validate(fr,`layers.${this.id}.paint.${t}`,t,e,i))return!1
if(t.endsWith(ln))return this._transitionablePaint.setTransition(t.slice(0,-ln.length),e||void 0),!1
{const i=this._transitionablePaint._values[t],r="cross-faded-data-driven"===i.property.specification["property-type"],n=i.value.isDataDriven(),s=i.value
this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t)
const o=this._transitionablePaint._values[t].value
return o.isDataDriven()||n||r||this._handleOverridablePaintPropertyUpdate(t,s,o)}}_handleSpecialPaintPropertyUpdate(t){}_handleOverridablePaintPropertyUpdate(t,e,i){return!1}isHidden(t){return!!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility}updateTransitions(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint)}hasTransition(){return this._transitioningPaint.hasTransition()}recalculate(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,void 0,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,void 0,e)}serialize(){const t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()}
return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),u(t,((t,e)=>!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)))}_validate(t,e,i,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
return(!n||!1!==n.validate)&&_r(this,t.call(dr,{key:e,layerType:this.type,objectKey:i,value:r,styleSpec:tt,style:{glyphs:!0,sprite:!0}}))}is3D(){return!1}isTileClipped(){return!1}hasOffscreenPass(){return!1}resize(){}isStateDependent(){for(const t in this.paint._values){const e=this.paint.get(t)
if(e instanceof Qr&&fi(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return!0}return!1}}const hn={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array}
class un{constructor(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8}}class pn{constructor(){this.isTransferred=!1,this.capacity=-1,this.resize(0)}static serialize(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}}static deserialize(t){const e=Object.create(this.prototype)
return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e}_trim(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews())}clear(){this.length=0}resize(t){this.reserve(t),this.length=t}reserve(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement)
const e=this.uint8
this._refreshViews(),e&&this.uint8.set(e)}}_refreshViews(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}}function dn(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,r=0
return{members:t.map((t=>{const n=hn[t.type].BYTES_PER_ELEMENT,s=i=mn(i,Math.max(e,n)),o=t.components||1
return r=Math.max(r,n),i+=n*o,{name:t.name,type:t.type,components:o,offset:s}})),size:mn(i,Math.max(r,e)),alignment:e}}function mn(t,e){return Math.ceil(t/e)*e}class fn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e){const i=this.length
return this.resize(i+1),this.emplace(i,t,e)}emplace(t,e,i){const r=2*t
return this.int16[r+0]=e,this.int16[r+1]=i,t}}fn.prototype.bytesPerElement=4,vr("StructArrayLayout2i4",fn)
class gn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r){const n=this.length
return this.resize(n+1),this.emplace(n,t,e,i,r)}emplace(t,e,i,r,n){const s=4*t
return this.int16[s+0]=e,this.int16[s+1]=i,this.int16[s+2]=r,this.int16[s+3]=n,t}}gn.prototype.bytesPerElement=8,vr("StructArrayLayout4i8",gn)
class _n extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s){const o=this.length
return this.resize(o+1),this.emplace(o,t,e,i,r,n,s)}emplace(t,e,i,r,n,s,o){const a=6*t
return this.int16[a+0]=e,this.int16[a+1]=i,this.int16[a+2]=r,this.int16[a+3]=n,this.int16[a+4]=s,this.int16[a+5]=o,t}}_n.prototype.bytesPerElement=12,vr("StructArrayLayout2i4i12",_n)
class yn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s){const o=this.length
return this.resize(o+1),this.emplace(o,t,e,i,r,n,s)}emplace(t,e,i,r,n,s,o){const a=4*t,l=8*t
return this.int16[a+0]=e,this.int16[a+1]=i,this.uint8[l+4]=r,this.uint8[l+5]=n,this.uint8[l+6]=s,this.uint8[l+7]=o,t}}yn.prototype.bytesPerElement=8,vr("StructArrayLayout2i4ub8",yn)
class xn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e){const i=this.length
return this.resize(i+1),this.emplace(i,t,e)}emplace(t,e,i){const r=2*t
return this.float32[r+0]=e,this.float32[r+1]=i,t}}xn.prototype.bytesPerElement=8,vr("StructArrayLayout2f8",xn)
class vn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,o,a,l,c){const h=this.length
return this.resize(h+1),this.emplace(h,t,e,i,r,n,s,o,a,l,c)}emplace(t,e,i,r,n,s,o,a,l,c,h){const u=10*t
return this.uint16[u+0]=e,this.uint16[u+1]=i,this.uint16[u+2]=r,this.uint16[u+3]=n,this.uint16[u+4]=s,this.uint16[u+5]=o,this.uint16[u+6]=a,this.uint16[u+7]=l,this.uint16[u+8]=c,this.uint16[u+9]=h,t}}vn.prototype.bytesPerElement=20,vr("StructArrayLayout10ui20",vn)
class bn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,o,a,l,c,h,u){const p=this.length
return this.resize(p+1),this.emplace(p,t,e,i,r,n,s,o,a,l,c,h,u)}emplace(t,e,i,r,n,s,o,a,l,c,h,u,p){const d=12*t
return this.int16[d+0]=e,this.int16[d+1]=i,this.int16[d+2]=r,this.int16[d+3]=n,this.uint16[d+4]=s,this.uint16[d+5]=o,this.uint16[d+6]=a,this.uint16[d+7]=l,this.int16[d+8]=c,this.int16[d+9]=h,this.int16[d+10]=u,this.int16[d+11]=p,t}}bn.prototype.bytesPerElement=24,vr("StructArrayLayout4i4ui4i24",bn)
class wn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=3*t
return this.float32[n+0]=e,this.float32[n+1]=i,this.float32[n+2]=r,t}}wn.prototype.bytesPerElement=12,vr("StructArrayLayout3f12",wn)
class Sn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer)}emplaceBack(t){const e=this.length
return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint32[1*t+0]=e,t}}Sn.prototype.bytesPerElement=4,vr("StructArrayLayout1ul4",Sn)
class Tn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,o,a,l){const c=this.length
return this.resize(c+1),this.emplace(c,t,e,i,r,n,s,o,a,l)}emplace(t,e,i,r,n,s,o,a,l,c){const h=10*t,u=5*t
return this.int16[h+0]=e,this.int16[h+1]=i,this.int16[h+2]=r,this.int16[h+3]=n,this.int16[h+4]=s,this.int16[h+5]=o,this.uint32[u+3]=a,this.uint16[h+8]=l,this.uint16[h+9]=c,t}}Tn.prototype.bytesPerElement=20,vr("StructArrayLayout6i1ul2ui20",Tn)
class In extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s){const o=this.length
return this.resize(o+1),this.emplace(o,t,e,i,r,n,s)}emplace(t,e,i,r,n,s,o){const a=6*t
return this.int16[a+0]=e,this.int16[a+1]=i,this.int16[a+2]=r,this.int16[a+3]=n,this.int16[a+4]=s,this.int16[a+5]=o,t}}In.prototype.bytesPerElement=12,vr("StructArrayLayout2i2i2i12",In)
class En extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n){const s=this.length
return this.resize(s+1),this.emplace(s,t,e,i,r,n)}emplace(t,e,i,r,n,s){const o=4*t,a=8*t
return this.float32[o+0]=e,this.float32[o+1]=i,this.float32[o+2]=r,this.int16[a+6]=n,this.int16[a+7]=s,t}}En.prototype.bytesPerElement=16,vr("StructArrayLayout2f1f2i16",En)
class An extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r){const n=this.length
return this.resize(n+1),this.emplace(n,t,e,i,r)}emplace(t,e,i,r,n){const s=12*t,o=3*t
return this.uint8[s+0]=e,this.uint8[s+1]=i,this.float32[o+1]=r,this.float32[o+2]=n,t}}An.prototype.bytesPerElement=12,vr("StructArrayLayout2ub2f12",An)
class zn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=3*t
return this.uint16[n+0]=e,this.uint16[n+1]=i,this.uint16[n+2]=r,t}}zn.prototype.bytesPerElement=6,vr("StructArrayLayout3ui6",zn)
class Cn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,o,a,l,c,h,u,p,d,m,f,g){const _=this.length
return this.resize(_+1),this.emplace(_,t,e,i,r,n,s,o,a,l,c,h,u,p,d,m,f,g)}emplace(t,e,i,r,n,s,o,a,l,c,h,u,p,d,m,f,g,_){const y=24*t,x=12*t,v=48*t
return this.int16[y+0]=e,this.int16[y+1]=i,this.uint16[y+2]=r,this.uint16[y+3]=n,this.uint32[x+2]=s,this.uint32[x+3]=o,this.uint32[x+4]=a,this.uint16[y+10]=l,this.uint16[y+11]=c,this.uint16[y+12]=h,this.float32[x+7]=u,this.float32[x+8]=p,this.uint8[v+36]=d,this.uint8[v+37]=m,this.uint8[v+38]=f,this.uint32[x+10]=g,this.int16[y+22]=_,t}}Cn.prototype.bytesPerElement=48,vr("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",Cn)
class Pn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,o,a,l,c,h,u,p,d,m,f,g,_,y,x,v,b,w,S,T,I,E,A){const z=this.length
return this.resize(z+1),this.emplace(z,t,e,i,r,n,s,o,a,l,c,h,u,p,d,m,f,g,_,y,x,v,b,w,S,T,I,E,A)}emplace(t,e,i,r,n,s,o,a,l,c,h,u,p,d,m,f,g,_,y,x,v,b,w,S,T,I,E,A,z){const C=34*t,P=17*t
return this.int16[C+0]=e,this.int16[C+1]=i,this.int16[C+2]=r,this.int16[C+3]=n,this.int16[C+4]=s,this.int16[C+5]=o,this.int16[C+6]=a,this.int16[C+7]=l,this.uint16[C+8]=c,this.uint16[C+9]=h,this.uint16[C+10]=u,this.uint16[C+11]=p,this.uint16[C+12]=d,this.uint16[C+13]=m,this.uint16[C+14]=f,this.uint16[C+15]=g,this.uint16[C+16]=_,this.uint16[C+17]=y,this.uint16[C+18]=x,this.uint16[C+19]=v,this.uint16[C+20]=b,this.uint16[C+21]=w,this.uint16[C+22]=S,this.uint32[P+12]=T,this.float32[P+13]=I,this.float32[P+14]=E,this.float32[P+15]=A,this.float32[P+16]=z,t}}Pn.prototype.bytesPerElement=68,vr("StructArrayLayout8i15ui1ul4f68",Pn)
class kn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t){const e=this.length
return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.float32[1*t+0]=e,t}}kn.prototype.bytesPerElement=4,vr("StructArrayLayout1f4",kn)
class Mn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=3*t
return this.int16[n+0]=e,this.int16[n+1]=i,this.int16[n+2]=r,t}}Mn.prototype.bytesPerElement=6,vr("StructArrayLayout3i6",Mn)
class Dn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=4*t
return this.uint32[2*t+0]=e,this.uint16[n+2]=i,this.uint16[n+3]=r,t}}Dn.prototype.bytesPerElement=8,vr("StructArrayLayout1ul2ui8",Dn)
class Ln extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e){const i=this.length
return this.resize(i+1),this.emplace(i,t,e)}emplace(t,e,i){const r=2*t
return this.uint16[r+0]=e,this.uint16[r+1]=i,t}}Ln.prototype.bytesPerElement=4,vr("StructArrayLayout2ui4",Ln)
class Bn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t){const e=this.length
return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint16[1*t+0]=e,t}}Bn.prototype.bytesPerElement=2,vr("StructArrayLayout1ui2",Bn)
class Rn extends pn{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r){const n=this.length
return this.resize(n+1),this.emplace(n,t,e,i,r)}emplace(t,e,i,r,n){const s=4*t
return this.float32[s+0]=e,this.float32[s+1]=i,this.float32[s+2]=r,this.float32[s+3]=n,t}}Rn.prototype.bytesPerElement=16,vr("StructArrayLayout4f16",Rn)
class Fn extends un{get anchorPointX(){return this._structArray.int16[this._pos2+0]}get anchorPointY(){return this._structArray.int16[this._pos2+1]}get x1(){return this._structArray.int16[this._pos2+2]}get y1(){return this._structArray.int16[this._pos2+3]}get x2(){return this._structArray.int16[this._pos2+4]}get y2(){return this._structArray.int16[this._pos2+5]}get featureIndex(){return this._structArray.uint32[this._pos4+3]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+8]}get bucketIndex(){return this._structArray.uint16[this._pos2+9]}get anchorPoint(){return new T(this.anchorPointX,this.anchorPointY)}}Fn.prototype.size=20
class On extends Tn{get(t){return new Fn(this,t)}}vr("CollisionBoxArray",On)
class Un extends un{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get glyphStartIndex(){return this._structArray.uint16[this._pos2+2]}get numGlyphs(){return this._structArray.uint16[this._pos2+3]}get vertexStartIndex(){return this._structArray.uint32[this._pos4+2]}get lineStartIndex(){return this._structArray.uint32[this._pos4+3]}get lineLength(){return this._structArray.uint32[this._pos4+4]}get segment(){return this._structArray.uint16[this._pos2+10]}get lowerSize(){return this._structArray.uint16[this._pos2+11]}get upperSize(){return this._structArray.uint16[this._pos2+12]}get lineOffsetX(){return this._structArray.float32[this._pos4+7]}get lineOffsetY(){return this._structArray.float32[this._pos4+8]}get writingMode(){return this._structArray.uint8[this._pos1+36]}get placedOrientation(){return this._structArray.uint8[this._pos1+37]}set placedOrientation(t){this._structArray.uint8[this._pos1+37]=t}get hidden(){return this._structArray.uint8[this._pos1+38]}set hidden(t){this._structArray.uint8[this._pos1+38]=t}get crossTileID(){return this._structArray.uint32[this._pos4+10]}set crossTileID(t){this._structArray.uint32[this._pos4+10]=t}get associatedIconIndex(){return this._structArray.int16[this._pos2+22]}}Un.prototype.size=48
class Vn extends Cn{get(t){return new Un(this,t)}}vr("PlacedSymbolArray",Vn)
class Nn extends un{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get rightJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+2]}get centerJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+3]}get leftJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+4]}get verticalPlacedTextSymbolIndex(){return this._structArray.int16[this._pos2+5]}get placedIconSymbolIndex(){return this._structArray.int16[this._pos2+6]}get verticalPlacedIconSymbolIndex(){return this._structArray.int16[this._pos2+7]}get key(){return this._structArray.uint16[this._pos2+8]}get textBoxStartIndex(){return this._structArray.uint16[this._pos2+9]}get textBoxEndIndex(){return this._structArray.uint16[this._pos2+10]}get verticalTextBoxStartIndex(){return this._structArray.uint16[this._pos2+11]}get verticalTextBoxEndIndex(){return this._structArray.uint16[this._pos2+12]}get iconBoxStartIndex(){return this._structArray.uint16[this._pos2+13]}get iconBoxEndIndex(){return this._structArray.uint16[this._pos2+14]}get verticalIconBoxStartIndex(){return this._structArray.uint16[this._pos2+15]}get verticalIconBoxEndIndex(){return this._structArray.uint16[this._pos2+16]}get featureIndex(){return this._structArray.uint16[this._pos2+17]}get numHorizontalGlyphVertices(){return this._structArray.uint16[this._pos2+18]}get numVerticalGlyphVertices(){return this._structArray.uint16[this._pos2+19]}get numIconVertices(){return this._structArray.uint16[this._pos2+20]}get numVerticalIconVertices(){return this._structArray.uint16[this._pos2+21]}get useRuntimeCollisionCircles(){return this._structArray.uint16[this._pos2+22]}get crossTileID(){return this._structArray.uint32[this._pos4+12]}set crossTileID(t){this._structArray.uint32[this._pos4+12]=t}get textBoxScale(){return this._structArray.float32[this._pos4+13]}get textOffset0(){return this._structArray.float32[this._pos4+14]}get textOffset1(){return this._structArray.float32[this._pos4+15]}get collisionCircleDiameter(){return this._structArray.float32[this._pos4+16]}}Nn.prototype.size=68
class $n extends Pn{get(t){return new Nn(this,t)}}vr("SymbolInstanceArray",$n)
class qn extends kn{getoffsetX(t){return this.float32[1*t+0]}}vr("GlyphOffsetArray",qn)
class Gn extends Mn{getx(t){return this.int16[3*t+0]}gety(t){return this.int16[3*t+1]}gettileUnitDistanceFromAnchor(t){return this.int16[3*t+2]}}vr("SymbolLineVertexArray",Gn)
class jn extends un{get featureIndex(){return this._structArray.uint32[this._pos4+0]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+2]}get bucketIndex(){return this._structArray.uint16[this._pos2+3]}}jn.prototype.size=8
class Zn extends Dn{get(t){return new jn(this,t)}}vr("FeatureIndexArray",Zn)
class Xn extends fn{}class Wn extends fn{}class Hn extends _n{}class Kn extends yn{}class Yn extends xn{}class Jn extends vn{}class Qn extends bn{}class ts extends wn{}class es extends Sn{}class is extends In{}class rs extends An{}class ns extends zn{}class ss extends Ln{}const os=dn([{name:"a_pos",components:2,type:"Int16"}],4),{members:as}=os
class ls{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this.segments=t}prepareSegment(t,e,i,r){let n=this.segments[this.segments.length-1]
return t>ls.MAX_VERTEX_ARRAY_LENGTH&&m(`Max vertices per segment is ${ls.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t}`),(!n||n.vertexLength+t>ls.MAX_VERTEX_ARRAY_LENGTH||n.sortKey!==r)&&(n={vertexOffset:e.length,primitiveOffset:i.length,vertexLength:0,primitiveLength:0},void 0!==r&&(n.sortKey=r),this.segments.push(n)),n}get(){return this.segments}destroy(){for(const t of this.segments)for(const e in t.vaos)t.vaos[e].destroy()}static simpleSegment(t,e,i,r){return new ls([{vertexOffset:t,primitiveOffset:e,vertexLength:i,primitiveLength:r,vaos:{},sortKey:0}])}}function cs(t,e){return 256*(t=s(Math.floor(t),0,255))+s(Math.floor(e),0,255)}ls.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,vr("SegmentVector",ls)
const hs=dn([{name:"a_pattern_from",components:4,type:"Uint16"},{name:"a_pattern_to",components:4,type:"Uint16"},{name:"a_pixel_ratio_from",components:1,type:"Uint16"},{name:"a_pixel_ratio_to",components:1,type:"Uint16"}])
var us={exports:{}},ps=function(t,e){var i,r,n,s,o,a,l,c
for(r=t.length-(i=3&t.length),n=e,o=3432918353,a=461845907,c=0;c<r;)l=255&t.charCodeAt(c)|(255&t.charCodeAt(++c))<<8|(255&t.charCodeAt(++c))<<16|(255&t.charCodeAt(++c))<<24,++c,n=27492+(65535&(s=5*(65535&(n=(n^=l=(65535&(l=(l=(65535&l)*o+(((l>>>16)*o&65535)<<16)&4294967295)<<15|l>>>17))*a+(((l>>>16)*a&65535)<<16)&4294967295)<<13|n>>>19))+((5*(n>>>16)&65535)<<16)&4294967295))+((58964+(s>>>16)&65535)<<16)
switch(l=0,i){case 3:l^=(255&t.charCodeAt(c+2))<<16
case 2:l^=(255&t.charCodeAt(c+1))<<8
case 1:n^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(c)))*o+(((l>>>16)*o&65535)<<16)&4294967295)<<15|l>>>17))*a+(((l>>>16)*a&65535)<<16)&4294967295}return n^=t.length,n=2246822507*(65535&(n^=n>>>16))+((2246822507*(n>>>16)&65535)<<16)&4294967295,n=3266489909*(65535&(n^=n>>>13))+((3266489909*(n>>>16)&65535)<<16)&4294967295,(n^=n>>>16)>>>0}
us.exports=ps,us.exports.murmur3=ps,us.exports.murmur2=function(t,e){for(var i,r=t.length,n=e^r,s=0;r>=4;)i=1540483477*(65535&(i=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24))+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(i=1540483477*(65535&(i^=i>>>24))+((1540483477*(i>>>16)&65535)<<16)),r-=4,++s
switch(r){case 3:n^=(255&t.charCodeAt(s+2))<<16
case 2:n^=(255&t.charCodeAt(s+1))<<8
case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(s)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),(n^=n>>>15)>>>0}
var ds=us.exports
class ms{constructor(){this.ids=[],this.positions=[],this.indexed=!1}add(t,e,i,r){this.ids.push(fs(t)),this.positions.push(e,i,r)}getPositions(t){const e=fs(t)
let i=0,r=this.ids.length-1
for(;i<r;){const t=i+r>>1
this.ids[t]>=e?r=t:i=t+1}const n=[]
for(;this.ids[i]===e;)n.push({index:this.positions[3*i],start:this.positions[3*i+1],end:this.positions[3*i+2]}),i++
return n}static serialize(t,e){const i=new Float64Array(t.ids),r=new Uint32Array(t.positions)
return gs(i,r,0,i.length-1),e&&e.push(i.buffer,r.buffer),{ids:i,positions:r}}static deserialize(t){const e=new ms
return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e}}function fs(t){const e=+t
return!isNaN(e)&&e<=Number.MAX_SAFE_INTEGER?e:ds(String(t))}function gs(t,e,i,r){for(;i<r;){const n=t[i+r>>1]
let s=i-1,o=r+1
for(;;){do{s++}while(t[s]<n)
do{o--}while(t[o]>n)
if(s>=o)break
_s(t,s,o),_s(e,3*s,3*o),_s(e,3*s+1,3*o+1),_s(e,3*s+2,3*o+2)}o-i<r-o?(gs(t,e,i,o),i=o+1):(gs(t,e,o+1,r),r=o)}}function _s(t,e,i){const r=t[e]
t[e]=t[i],t[i]=r}vr("FeaturePositionMap",ms)
class ys{constructor(t,e){this.gl=t.gl,this.location=e}}class xs extends ys{constructor(t,e){super(t,e),this.current=0}set(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t))}}class vs extends ys{constructor(t,e){super(t,e),this.current=[0,0,0,0]}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]))}}class bs extends ys{constructor(t,e){super(t,e),this.current=Pt.transparent}set(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a))}}const ws=new Float32Array(16)
function Ss(t){return[cs(255*t.r,255*t.g),cs(255*t.b,255*t.a)]}class Ts{constructor(t,e,i){this.value=t,this.uniformNames=e.map((t=>`u_${t}`)),this.type=i}setUniform(t,e,i){t.set(i.constantOr(this.value))}getBinding(t,e,i){return"color"===this.type?new bs(t,e):new xs(t,e)}}class Is{constructor(t,e){this.uniformNames=e.map((t=>`u_${t}`)),this.patternFrom=null,this.patternTo=null,this.pixelRatioFrom=1,this.pixelRatioTo=1}setConstantPatternPositions(t,e){this.pixelRatioFrom=e.pixelRatio,this.pixelRatioTo=t.pixelRatio,this.patternFrom=e.tlbr,this.patternTo=t.tlbr}setUniform(t,e,i,r){const n="u_pattern_to"===r?this.patternTo:"u_pattern_from"===r?this.patternFrom:"u_pixel_ratio_to"===r?this.pixelRatioTo:"u_pixel_ratio_from"===r?this.pixelRatioFrom:null
n&&t.set(n)}getBinding(t,e,i){return"u_pattern"===i.substr(0,9)?new vs(t,e):new xs(t,e)}}class Es{constructor(t,e,i,r){this.expression=t,this.type=i,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===i?2:1,offset:0}))),this.paintVertexArray=new r}populatePaintArray(t,e,i,r,n){const s=this.paintVertexArray.length,o=this.expression.evaluate(new Zr(0),e,{},r,[],n)
this.paintVertexArray.resize(t),this._setPaintValue(s,t,o)}updatePaintArray(t,e,i,r){const n=this.expression.evaluate({zoom:0},i,r)
this._setPaintValue(t,e,n)}_setPaintValue(t,e,i){if("color"===this.type){const r=Ss(i)
for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,r[0],r[1])}else{for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,i)
this.maxValue=Math.max(this.maxValue,Math.abs(i))}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()}}class As{constructor(t,e,i,r,n,s){this.expression=t,this.uniformNames=e.map((t=>`u_${t}_t`)),this.type=i,this.useIntegerZoom=r,this.zoom=n,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===i?4:2,offset:0}))),this.paintVertexArray=new s}populatePaintArray(t,e,i,r,n){const s=this.expression.evaluate(new Zr(this.zoom),e,{},r,[],n),o=this.expression.evaluate(new Zr(this.zoom+1),e,{},r,[],n),a=this.paintVertexArray.length
this.paintVertexArray.resize(t),this._setPaintValue(a,t,s,o)}updatePaintArray(t,e,i,r){const n=this.expression.evaluate({zoom:this.zoom},i,r),s=this.expression.evaluate({zoom:this.zoom+1},i,r)
this._setPaintValue(t,e,n,s)}_setPaintValue(t,e,i,r){if("color"===this.type){const n=Ss(i),s=Ss(r)
for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,n[0],n[1],s[0],s[1])}else{for(let n=t;n<e;n++)this.paintVertexArray.emplace(n,i,r)
this.maxValue=Math.max(this.maxValue,Math.abs(i),Math.abs(r))}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()}setUniform(t,e){const i=this.useIntegerZoom?Math.floor(e.zoom):e.zoom,r=s(this.expression.interpolationFactor(i,this.zoom,this.zoom+1),0,1)
t.set(r)}getBinding(t,e,i){return new xs(t,e)}}class zs{constructor(t,e,i,r,n,s){this.expression=t,this.type=e,this.useIntegerZoom=i,this.zoom=r,this.layerId=s,this.zoomInPaintVertexArray=new n,this.zoomOutPaintVertexArray=new n}populatePaintArray(t,e,i){const r=this.zoomInPaintVertexArray.length
this.zoomInPaintVertexArray.resize(t),this.zoomOutPaintVertexArray.resize(t),this._setPaintValues(r,t,e.patterns&&e.patterns[this.layerId],i)}updatePaintArray(t,e,i,r,n){this._setPaintValues(t,e,i.patterns&&i.patterns[this.layerId],n)}_setPaintValues(t,e,i,r){if(!r||!i)return
const{min:n,mid:s,max:o}=i,a=r[n],l=r[s],c=r[o]
if(a&&l&&c)for(let h=t;h<e;h++)this.zoomInPaintVertexArray.emplace(h,l.tl[0],l.tl[1],l.br[0],l.br[1],a.tl[0],a.tl[1],a.br[0],a.br[1],l.pixelRatio,a.pixelRatio),this.zoomOutPaintVertexArray.emplace(h,l.tl[0],l.tl[1],l.br[0],l.br[1],c.tl[0],c.tl[1],c.br[0],c.br[1],l.pixelRatio,c.pixelRatio)}upload(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,hs.members,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,hs.members,this.expression.isStateDependent))}destroy(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy()}}class Cs{constructor(t,e,i){this.binders={},this._buffers=[]
const r=[]
for(const n in t.paint._values){if(!i(n))continue
const s=t.paint.get(n)
if(!(s instanceof Qr&&fi(s.property.specification)))continue
const o=ks(n,t.type),a=s.value,l=s.property.specification.type,c=s.property.useIntegerZoom,h=s.property.specification["property-type"],u="cross-faded"===h||"cross-faded-data-driven"===h
if("constant"===a.kind)this.binders[n]=u?new Is(a.value,o):new Ts(a.value,o,l),r.push(`/u_${n}`)
else if("source"===a.kind||u){const i=Ms(n,l,"source")
this.binders[n]=u?new zs(a,l,c,e,i,t.id):new Es(a,o,l,i),r.push(`/a_${n}`)}else{const t=Ms(n,l,"composite")
this.binders[n]=new As(a,o,l,c,e,t),r.push(`/z_${n}`)}}this.cacheKey=r.sort().join("")}getMaxValue(t){const e=this.binders[t]
return e instanceof Es||e instanceof As?e.maxValue:0}populatePaintArrays(t,e,i,r,n){for(const s in this.binders){const o=this.binders[s];(o instanceof Es||o instanceof As||o instanceof zs)&&o.populatePaintArray(t,e,i,r,n)}}setConstantPatternPositions(t,e){for(const i in this.binders){const r=this.binders[i]
r instanceof Is&&r.setConstantPatternPositions(t,e)}}updatePaintArrays(t,e,i,r,n){let s=!1
for(const o in t){const a=e.getPositions(o)
for(const e of a){const a=i.feature(e.index)
for(const i in this.binders){const l=this.binders[i]
if((l instanceof Es||l instanceof As||l instanceof zs)&&!0===l.expression.isStateDependent){const c=r.paint.get(i)
l.expression=c.value,l.updatePaintArray(e.start,e.end,a,t[o],n),s=!0}}}}return s}defines(){const t=[]
for(const e in this.binders){const i=this.binders[e];(i instanceof Ts||i instanceof Is)&&t.push(...i.uniformNames.map((t=>`#define HAS_UNIFORM_${t}`)))}return t}getBinderAttributes(){const t=[]
for(const e in this.binders){const i=this.binders[e]
if(i instanceof Es||i instanceof As)for(let e=0;e<i.paintVertexAttributes.length;e++)t.push(i.paintVertexAttributes[e].name)
else if(i instanceof zs)for(let e=0;e<hs.members.length;e++)t.push(hs.members[e].name)}return t}getBinderUniforms(){const t=[]
for(const e in this.binders){const i=this.binders[e]
if(i instanceof Ts||i instanceof Is||i instanceof As)for(const e of i.uniformNames)t.push(e)}return t}getPaintVertexBuffers(){return this._buffers}getUniforms(t,e){const i=[]
for(const r in this.binders){const n=this.binders[r]
if(n instanceof Ts||n instanceof Is||n instanceof As)for(const s of n.uniformNames)if(e[s]){const o=n.getBinding(t,e[s],s)
i.push({name:s,property:r,binding:o})}}return i}setUniforms(t,e,i,r){for(const{name:n,property:s,binding:o}of e)this.binders[s].setUniform(o,r,i.get(s),n)}updatePaintBuffers(t){this._buffers=[]
for(const e in this.binders){const i=this.binders[e]
if(t&&i instanceof zs){const e=2===t.fromScale?i.zoomInPaintVertexBuffer:i.zoomOutPaintVertexBuffer
e&&this._buffers.push(e)}else(i instanceof Es||i instanceof As)&&i.paintVertexBuffer&&this._buffers.push(i.paintVertexBuffer)}}upload(t){for(const e in this.binders){const i=this.binders[e];(i instanceof Es||i instanceof As||i instanceof zs)&&i.upload(t)}this.updatePaintBuffers()}destroy(){for(const t in this.binders){const e=this.binders[t];(e instanceof Es||e instanceof As||e instanceof zs)&&e.destroy()}}}class Ps{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0
this.programConfigurations={}
for(const r of t)this.programConfigurations[r.id]=new Cs(r,e,i)
this.needsUpload=!1,this._featureMap=new ms,this._bufferOffset=0}populatePaintArrays(t,e,i,r,n,s){for(const o in this.programConfigurations)this.programConfigurations[o].populatePaintArrays(t,e,r,n,s)
void 0!==e.id&&this._featureMap.add(e.id,i,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0}updatePaintArrays(t,e,i,r){for(const n of i)this.needsUpload=this.programConfigurations[n.id].updatePaintArrays(t,this._featureMap,e,n,r)||this.needsUpload}get(t){return this.programConfigurations[t]}upload(t){if(this.needsUpload){for(const e in this.programConfigurations)this.programConfigurations[e].upload(t)
this.needsUpload=!1}}destroy(){for(const t in this.programConfigurations)this.programConfigurations[t].destroy()}}function ks(t,e){return{"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-extrusion-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"]}[t]||[t.replace(`${e}-`,"").replace(/-/g,"_")]}function Ms(t,e,i){const r={color:{source:xn,composite:Rn},number:{source:kn,composite:xn}},n=function(t){return{"line-pattern":{source:Jn,composite:Jn},"fill-pattern":{source:Jn,composite:Jn},"fill-extrusion-pattern":{source:Jn,composite:Jn}}[t]}(t)
return n&&n[i]||r[e][i]}vr("ConstantBinder",Ts),vr("CrossFadedConstantBinder",Is),vr("SourceExpressionBinder",Es),vr("CrossFadedCompositeBinder",zs),vr("CompositeExpressionBinder",As),vr("ProgramConfiguration",Cs,{omit:["_buffers"]}),vr("ProgramConfigurationSet",Ps)
var Ds=8192
const Ls=Math.pow(2,14)-1,Bs=-Ls-1
function Rs(t){const e=Ds/t.extent,i=t.loadGeometry()
for(let r=0;r<i.length;r++){const t=i[r]
for(let i=0;i<t.length;i++){const r=t[i],n=Math.round(r.x*e),o=Math.round(r.y*e)
r.x=s(n,Bs,Ls),r.y=s(o,Bs,Ls),(n<r.x||n>r.x+1||o<r.y||o>r.y+1)&&m("Geometry exceeds allowed extent, reduce your vector tile buffer size")}}return i}function Fs(t,e){return{type:t.type,id:t.id,properties:t.properties,geometry:e?Rs(t):[]}}function Os(t,e,i,r,n){t.emplaceBack(2*e+(r+1)/2,2*i+(n+1)/2)}class Us{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new Xn,this.indexArray=new ns,this.segments=new ls,this.programConfigurations=new Ps(t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){const r=this.layers[0],n=[]
let s=null,o=!1
"circle"===r.type&&(s=r.layout.get("circle-sort-key"),o=!s.isConstant())
for(const{feature:a,id:l,index:c,sourceLayerIndex:h}of t){const t=this.layers[0]._featureFilter.needGeometry,e=Fs(a,t)
if(!this.layers[0]._featureFilter.filter(new Zr(this.zoom),e,i))continue
const r=o?s.evaluate(e,{},i):void 0,u={id:l,properties:a.properties,type:a.type,sourceLayerIndex:h,index:c,geometry:t?e.geometry:Rs(a),patterns:{},sortKey:r}
n.push(u)}o&&n.sort(((t,e)=>t.sortKey-e.sortKey))
for(const a of n){const{geometry:r,index:n,sourceLayerIndex:s}=a,o=t[n].feature
this.addFeature(a,r,n,i),e.featureIndex.insert(o,r,n,s,this.index)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,as),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())}addFeature(t,e,i,r){for(const n of e)for(const e of n){const i=e.x,r=e.y
if(i<0||i>=Ds||r<0||r>=Ds)continue
const n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),s=n.vertexLength
Os(this.layoutVertexArray,i,r,-1,-1),Os(this.layoutVertexArray,i,r,1,-1),Os(this.layoutVertexArray,i,r,1,1),Os(this.layoutVertexArray,i,r,-1,1),this.indexArray.emplaceBack(s,s+1,s+2),this.indexArray.emplaceBack(s,s+3,s+2),n.vertexLength+=4,n.primitiveLength+=2}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,{},r)}}function Vs(t,e){for(let i=0;i<t.length;i++)if(Hs(e,t[i]))return!0
for(let i=0;i<e.length;i++)if(Hs(t,e[i]))return!0
return!!Gs(t,e)}function Ns(t,e,i){return!!Hs(t,e)||!!Zs(e,t,i)}function $s(t,e){if(1===t.length)return Ws(e,t[0])
for(let i=0;i<e.length;i++){const r=e[i]
for(let e=0;e<r.length;e++)if(Hs(t,r[e]))return!0}for(let i=0;i<t.length;i++)if(Ws(e,t[i]))return!0
for(let i=0;i<e.length;i++)if(Gs(t,e[i]))return!0
return!1}function qs(t,e,i){if(t.length>1){if(Gs(t,e))return!0
for(let r=0;r<e.length;r++)if(Zs(e[r],t,i))return!0}for(let r=0;r<t.length;r++)if(Zs(t[r],e,i))return!0
return!1}function Gs(t,e){if(0===t.length||0===e.length)return!1
for(let i=0;i<t.length-1;i++){const r=t[i],n=t[i+1]
for(let t=0;t<e.length-1;t++)if(js(r,n,e[t],e[t+1]))return!0}return!1}function js(t,e,i,r){return f(t,i,r)!==f(e,i,r)&&f(t,e,i)!==f(t,e,r)}function Zs(t,e,i){const r=i*i
if(1===e.length)return t.distSqr(e[0])<r
for(let n=1;n<e.length;n++)if(Xs(t,e[n-1],e[n])<r)return!0
return!1}function Xs(t,e,i){const r=e.distSqr(i)
if(0===r)return t.distSqr(e)
const n=((t.x-e.x)*(i.x-e.x)+(t.y-e.y)*(i.y-e.y))/r
return t.distSqr(n<0?e:n>1?i:i.sub(e)._mult(n)._add(e))}function Ws(t,e){let i,r,n,s=!1
for(let o=0;o<t.length;o++){i=t[o]
for(let t=0,o=i.length-1;t<i.length;o=t++)r=i[t],n=i[o],r.y>e.y!=n.y>e.y&&e.x<(n.x-r.x)*(e.y-r.y)/(n.y-r.y)+r.x&&(s=!s)}return s}function Hs(t,e){let i=!1
for(let r=0,n=t.length-1;r<t.length;n=r++){const s=t[r],o=t[n]
s.y>e.y!=o.y>e.y&&e.x<(o.x-s.x)*(e.y-s.y)/(o.y-s.y)+s.x&&(i=!i)}return i}function Ks(t,e,i){const r=i[0],n=i[2]
if(t.x<r.x&&e.x<r.x||t.x>n.x&&e.x>n.x||t.y<r.y&&e.y<r.y||t.y>n.y&&e.y>n.y)return!1
const s=f(t,e,i[0])
return s!==f(t,e,i[1])||s!==f(t,e,i[2])||s!==f(t,e,i[3])}function Ys(t,e,i){const r=e.paint.get(t).value
return"constant"===r.kind?r.value:i.programConfigurations.get(e.id).getMaxValue(t)}function Js(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function Qs(t,e,i,r,n){if(!e[0]&&!e[1])return t
const s=T.convert(e)._mult(n)
"viewport"===i&&s._rotate(-r)
const o=[]
for(let a=0;a<t.length;a++)o.push(t[a].sub(s))
return o}vr("CircleBucket",Us,{omit:["layers"]})
const to=new an({"circle-sort-key":new rn(tt.layout_circle["circle-sort-key"])})
var eo={paint:new an({"circle-radius":new rn(tt.paint_circle["circle-radius"]),"circle-color":new rn(tt.paint_circle["circle-color"]),"circle-blur":new rn(tt.paint_circle["circle-blur"]),"circle-opacity":new rn(tt.paint_circle["circle-opacity"]),"circle-translate":new en(tt.paint_circle["circle-translate"]),"circle-translate-anchor":new en(tt.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new en(tt.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new en(tt.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new rn(tt.paint_circle["circle-stroke-width"]),"circle-stroke-color":new rn(tt.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new rn(tt.paint_circle["circle-stroke-opacity"])}),layout:to},io="undefined"!=typeof Float32Array?Float32Array:Array
function ro(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function no(t,e,i){var r=e[0],n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],u=e[8],p=e[9],d=e[10],m=e[11],f=e[12],g=e[13],_=e[14],y=e[15],x=i[0],v=i[1],b=i[2],w=i[3]
return t[0]=x*r+v*a+b*u+w*f,t[1]=x*n+v*l+b*p+w*g,t[2]=x*s+v*c+b*d+w*_,t[3]=x*o+v*h+b*m+w*y,t[4]=(x=i[4])*r+(v=i[5])*a+(b=i[6])*u+(w=i[7])*f,t[5]=x*n+v*l+b*p+w*g,t[6]=x*s+v*c+b*d+w*_,t[7]=x*o+v*h+b*m+w*y,t[8]=(x=i[8])*r+(v=i[9])*a+(b=i[10])*u+(w=i[11])*f,t[9]=x*n+v*l+b*p+w*g,t[10]=x*s+v*c+b*d+w*_,t[11]=x*o+v*h+b*m+w*y,t[12]=(x=i[12])*r+(v=i[13])*a+(b=i[14])*u+(w=i[15])*f,t[13]=x*n+v*l+b*p+w*g,t[14]=x*s+v*c+b*d+w*_,t[15]=x*o+v*h+b*m+w*y,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e]
return Math.sqrt(t)})
var so,oo=no
function ao(t,e,i){var r=e[0],n=e[1],s=e[2],o=e[3]
return t[0]=i[0]*r+i[4]*n+i[8]*s+i[12]*o,t[1]=i[1]*r+i[5]*n+i[9]*s+i[13]*o,t[2]=i[2]*r+i[6]*n+i[10]*s+i[14]*o,t[3]=i[3]*r+i[7]*n+i[11]*s+i[15]*o,t}function lo(t,e){const i=ao([],[t.x,t.y,0,1],e)
return new T(i[0]/i[3],i[1]/i[3])}so=new io(4),io!=Float32Array&&(so[0]=0,so[1]=0,so[2]=0,so[3]=0)
class co extends Us{}vr("HeatmapBucket",co,{omit:["layers"]})
var ho={paint:new an({"heatmap-radius":new rn(tt.paint_heatmap["heatmap-radius"]),"heatmap-weight":new rn(tt.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new en(tt.paint_heatmap["heatmap-intensity"]),"heatmap-color":new on(tt.paint_heatmap["heatmap-color"]),"heatmap-opacity":new en(tt.paint_heatmap["heatmap-opacity"])})}
function uo(t,e,i,r){let{width:n,height:s}=e
if(r){if(r instanceof Uint8ClampedArray)r=new Uint8Array(r.buffer)
else if(r.length!==n*s*i)throw new RangeError(`mismatched image size. expected: ${r.length} but got: ${n*s*i}`)}else r=new Uint8Array(n*s*i)
return t.width=n,t.height=s,t.data=r,t}function po(t,e,i){let{width:r,height:n}=e
if(r===t.width&&n===t.height)return
const s=uo({},{width:r,height:n},i)
mo(t,s,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,r),height:Math.min(t.height,n)},i),t.width=r,t.height=n,t.data=s.data}function mo(t,e,i,r,n,s){if(0===n.width||0===n.height)return e
if(n.width>t.width||n.height>t.height||i.x>t.width-n.width||i.y>t.height-n.height)throw new RangeError("out of range source coordinates for image copy")
if(n.width>e.width||n.height>e.height||r.x>e.width-n.width||r.y>e.height-n.height)throw new RangeError("out of range destination coordinates for image copy")
const o=t.data,a=e.data
for(let l=0;l<n.height;l++){const c=((i.y+l)*t.width+i.x)*s,h=((r.y+l)*e.width+r.x)*s
for(let t=0;t<n.width*s;t++)a[h+t]=o[c+t]}return e}class fo{constructor(t,e){uo(this,t,1,e)}resize(t){po(this,t,1)}clone(){return new fo({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,i,r,n){mo(t,e,i,r,n,1)}}class go{constructor(t,e){uo(this,t,4,e)}resize(t){po(this,t,4)}replace(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t}clone(){return new go({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,i,r,n){mo(t,e,i,r,n,4)}}function _o(t){const e={},i=t.resolution||256,r=t.clips?t.clips.length:1,n=t.image||new go({width:i,height:r}),s=(i,r,s)=>{e[t.evaluationKey]=s
const o=t.expression.evaluate(e)
n.data[i+r+0]=Math.floor(255*o.r/o.a),n.data[i+r+1]=Math.floor(255*o.g/o.a),n.data[i+r+2]=Math.floor(255*o.b/o.a),n.data[i+r+3]=Math.floor(255*o.a)}
if(t.clips)for(let o=0,a=0;o<r;++o,a+=4*i)for(let e=0,r=0;e<i;e++,r+=4){const n=e/(i-1),{start:l,end:c}=t.clips[o]
s(a,r,l*(1-n)+c*n)}else for(let o=0,a=0;o<i;o++,a+=4)s(0,a,o/(i-1))
return n}vr("AlphaImage",fo),vr("RGBAImage",go)
var yo={paint:new an({"hillshade-illumination-direction":new en(tt.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new en(tt.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new en(tt.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new en(tt.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new en(tt.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new en(tt.paint_hillshade["hillshade-accent-color"])})}
const xo=dn([{name:"a_pos",components:2,type:"Int16"}],4),{members:vo}=xo
var bo={exports:{}}
function wo(t,e,i){i=i||2
var r,n,s,o,a,l,c,h=e&&e.length,u=h?e[0]*i:t.length,p=So(t,0,u,i,!0),d=[]
if(!p||p.next===p.prev)return d
if(h&&(p=function(t,e,i,r){var n,s,o,a=[]
for(n=0,s=e.length;n<s;n++)(o=So(t,e[n]*r,n<s-1?e[n+1]*r:t.length,r,!1))===o.next&&(o.steiner=!0),a.push(Lo(o))
for(a.sort(Po),n=0;n<a.length;n++)i=To(i=ko(a[n],i),i.next)
return i}(t,e,p,i)),t.length>80*i){r=s=t[0],n=o=t[1]
for(var m=i;m<u;m+=i)(a=t[m])<r&&(r=a),(l=t[m+1])<n&&(n=l),a>s&&(s=a),l>o&&(o=l)
c=0!==(c=Math.max(s-r,o-n))?1/c:0}return Io(p,d,i,r,n,c),d}function So(t,e,i,r,n){var s,o
if(n===Xo(t,e,i,r)>0)for(s=e;s<i;s+=r)o=Go(s,t[s],t[s+1],o)
else for(s=i-r;s>=e;s-=r)o=Go(s,t[s],t[s+1],o)
return o&&Oo(o,o.next)&&(jo(o),o=o.next),o}function To(t,e){if(!t)return t
e||(e=t)
var i,r=t
do{if(i=!1,r.steiner||!Oo(r,r.next)&&0!==Fo(r.prev,r,r.next))r=r.next
else{if(jo(r),(r=e=r.prev)===r.next)break
i=!0}}while(i||r!==e)
return e}function Io(t,e,i,r,n,s,o){if(t){!o&&s&&function(t,e,i,r){var n=t
do{null===n.z&&(n.z=Do(n.x,n.y,e,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==t)
n.prevZ.nextZ=null,n.prevZ=null,function(t){var e,i,r,n,s,o,a,l,c=1
do{for(i=t,t=null,s=null,o=0;i;){for(o++,r=i,a=0,e=0;e<c&&(a++,r=r.nextZ);e++);for(l=c;a>0||l>0&&r;)0!==a&&(0===l||!r||i.z<=r.z)?(n=i,i=i.nextZ,a--):(n=r,r=r.nextZ,l--),s?s.nextZ=n:t=n,n.prevZ=s,s=n
i=r}s.nextZ=null,c*=2}while(o>1)}(n)}(t,r,n,s)
for(var a,l,c=t;t.prev!==t.next;)if(a=t.prev,l=t.next,s?Ao(t,r,n,s):Eo(t))e.push(a.i/i),e.push(t.i/i),e.push(l.i/i),jo(t),t=l.next,c=l.next
else if((t=l)===c){o?1===o?Io(t=zo(To(t),e,i),e,i,r,n,s,2):2===o&&Co(t,e,i,r,n,s):Io(To(t),e,i,r,n,s,1)
break}}}function Eo(t){var e=t.prev,i=t,r=t.next
if(Fo(e,i,r)>=0)return!1
for(var n=t.next.next;n!==t.prev;){if(Bo(e.x,e.y,i.x,i.y,r.x,r.y,n.x,n.y)&&Fo(n.prev,n,n.next)>=0)return!1
n=n.next}return!0}function Ao(t,e,i,r){var n=t.prev,s=t,o=t.next
if(Fo(n,s,o)>=0)return!1
for(var a=n.x>s.x?n.x>o.x?n.x:o.x:s.x>o.x?s.x:o.x,l=n.y>s.y?n.y>o.y?n.y:o.y:s.y>o.y?s.y:o.y,c=Do(n.x<s.x?n.x<o.x?n.x:o.x:s.x<o.x?s.x:o.x,n.y<s.y?n.y<o.y?n.y:o.y:s.y<o.y?s.y:o.y,e,i,r),h=Do(a,l,e,i,r),u=t.prevZ,p=t.nextZ;u&&u.z>=c&&p&&p.z<=h;){if(u!==t.prev&&u!==t.next&&Bo(n.x,n.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Fo(u.prev,u,u.next)>=0)return!1
if(u=u.prevZ,p!==t.prev&&p!==t.next&&Bo(n.x,n.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Fo(p.prev,p,p.next)>=0)return!1
p=p.nextZ}for(;u&&u.z>=c;){if(u!==t.prev&&u!==t.next&&Bo(n.x,n.y,s.x,s.y,o.x,o.y,u.x,u.y)&&Fo(u.prev,u,u.next)>=0)return!1
u=u.prevZ}for(;p&&p.z<=h;){if(p!==t.prev&&p!==t.next&&Bo(n.x,n.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Fo(p.prev,p,p.next)>=0)return!1
p=p.nextZ}return!0}function zo(t,e,i){var r=t
do{var n=r.prev,s=r.next.next
!Oo(n,s)&&Uo(n,r,r.next,s)&&$o(n,s)&&$o(s,n)&&(e.push(n.i/i),e.push(r.i/i),e.push(s.i/i),jo(r),jo(r.next),r=t=s),r=r.next}while(r!==t)
return To(r)}function Co(t,e,i,r,n,s){var o=t
do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Ro(o,a)){var l=qo(o,a)
return o=To(o,o.next),l=To(l,l.next),Io(o,e,i,r,n,s),void Io(l,e,i,r,n,s)}a=a.next}o=o.next}while(o!==t)}function Po(t,e){return t.x-e.x}function ko(t,e){var i=function(t,e){var i,r=e,n=t.x,s=t.y,o=-1/0
do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){var a=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y)
if(a<=n&&a>o){if(o=a,a===n){if(s===r.y)return r
if(s===r.next.y)return r.next}i=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e)
if(!i)return null
if(n===o)return i
var l,c=i,h=i.x,u=i.y,p=1/0
r=i
do{n>=r.x&&r.x>=h&&n!==r.x&&Bo(s<u?n:o,s,h,u,s<u?o:n,s,r.x,r.y)&&(l=Math.abs(s-r.y)/(n-r.x),$o(r,t)&&(l<p||l===p&&(r.x>i.x||r.x===i.x&&Mo(i,r)))&&(i=r,p=l)),r=r.next}while(r!==c)
return i}(t,e)
if(!i)return e
var r=qo(i,t),n=To(i,i.next)
return To(r,r.next),e===i?n:e}function Mo(t,e){return Fo(t.prev,t,e.prev)<0&&Fo(e.next,t,t.next)<0}function Do(t,e,i,r,n){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*n)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*n)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Lo(t){var e=t,i=t
do{(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next}while(e!==t)
return i}function Bo(t,e,i,r,n,s,o,a){return(n-o)*(e-a)-(t-o)*(s-a)>=0&&(t-o)*(r-a)-(i-o)*(e-a)>=0&&(i-o)*(s-a)-(n-o)*(r-a)>=0}function Ro(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var i=t
do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&Uo(i,i.next,t,e))return!0
i=i.next}while(i!==t)
return!1}(t,e)&&($o(t,e)&&$o(e,t)&&function(t,e){var i=t,r=!1,n=(t.x+e.x)/2,s=(t.y+e.y)/2
do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==t)
return r}(t,e)&&(Fo(t.prev,t,e.prev)||Fo(t,e.prev,e))||Oo(t,e)&&Fo(t.prev,t,t.next)>0&&Fo(e.prev,e,e.next)>0)}function Fo(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function Oo(t,e){return t.x===e.x&&t.y===e.y}function Uo(t,e,i,r){var n=No(Fo(t,e,i)),s=No(Fo(t,e,r)),o=No(Fo(i,r,t)),a=No(Fo(i,r,e))
return n!==s&&o!==a||!(0!==n||!Vo(t,i,e))||!(0!==s||!Vo(t,r,e))||!(0!==o||!Vo(i,t,r))||!(0!==a||!Vo(i,e,r))}function Vo(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function No(t){return t>0?1:t<0?-1:0}function $o(t,e){return Fo(t.prev,t,t.next)<0?Fo(t,e,t.next)>=0&&Fo(t,t.prev,e)>=0:Fo(t,e,t.prev)<0||Fo(t,t.next,e)<0}function qo(t,e){var i=new Zo(t.i,t.x,t.y),r=new Zo(e.i,e.x,e.y),n=t.next,s=e.prev
return t.next=e,e.prev=t,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Go(t,e,i,r){var n=new Zo(t,e,i)
return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function jo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Zo(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xo(t,e,i,r){for(var n=0,s=e,o=i-r;s<i;s+=r)n+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s
return n}bo.exports=wo,bo.exports.default=wo,wo.deviation=function(t,e,i,r){var n=e&&e.length,s=Math.abs(Xo(t,0,n?e[0]*i:t.length,i))
if(n)for(var o=0,a=e.length;o<a;o++)s-=Math.abs(Xo(t,e[o]*i,o<a-1?e[o+1]*i:t.length,i))
var l=0
for(o=0;o<r.length;o+=3){var c=r[o]*i,h=r[o+1]*i,u=r[o+2]*i
l+=Math.abs((t[c]-t[u])*(t[h+1]-t[c+1])-(t[c]-t[h])*(t[u+1]-t[c+1]))}return 0===s&&0===l?0:Math.abs((l-s)/s)},wo.flatten=function(t){for(var e=t[0][0].length,i={vertices:[],holes:[],dimensions:e},r=0,n=0;n<t.length;n++){for(var s=0;s<t[n].length;s++)for(var o=0;o<e;o++)i.vertices.push(t[n][s][o])
n>0&&i.holes.push(r+=t[n-1].length)}return i}
var Wo=bo.exports
function Ho(t,e,i,r,n){Ko(t,e,i||0,r||t.length-1,n||Jo)}function Ko(t,e,i,r,n){for(;r>i;){if(r-i>600){var s=r-i+1,o=e-i+1,a=Math.log(s),l=.5*Math.exp(2*a/3),c=.5*Math.sqrt(a*l*(s-l)/s)*(o-s/2<0?-1:1)
Ko(t,e,Math.max(i,Math.floor(e-o*l/s+c)),Math.min(r,Math.floor(e+(s-o)*l/s+c)),n)}var h=t[e],u=i,p=r
for(Yo(t,i,e),n(t[r],h)>0&&Yo(t,i,r);u<p;){for(Yo(t,u,p),u++,p--;n(t[u],h)<0;)u++
for(;n(t[p],h)>0;)p--}0===n(t[i],h)?Yo(t,i,p):Yo(t,++p,r),p<=e&&(i=p+1),e<=p&&(r=p-1)}}function Yo(t,e,i){var r=t[e]
t[e]=t[i],t[i]=r}function Jo(t,e){return t<e?-1:t>e?1:0}function Qo(t,e){const i=t.length
if(i<=1)return[t]
const r=[]
let n,s
for(let o=0;o<i;o++){const e=g(t[o])
0!==e&&(t[o].area=Math.abs(e),void 0===s&&(s=e<0),s===e<0?(n&&r.push(n),n=[t[o]]):n.push(t[o]))}if(n&&r.push(n),e>1)for(let o=0;o<r.length;o++)r[o].length<=e||(Ho(r[o],e,1,r[o].length-1,ta),r[o]=r[o].slice(0,e))
return r}function ta(t,e){return e.area-t.area}function ea(t,e,i){const r=i.patternDependencies
let n=!1
for(const s of e){const e=s.paint.get(`${t}-pattern`)
e.isConstant()||(n=!0)
const i=e.constantOr(null)
i&&(n=!0,r[i.to]=!0,r[i.from]=!0)}return n}function ia(t,e,i,r,n){const s=n.patternDependencies
for(const o of e){const e=o.paint.get(`${t}-pattern`).value
if("constant"!==e.kind){let t=e.evaluate({zoom:r-1},i,{},n.availableImages),a=e.evaluate({zoom:r},i,{},n.availableImages),l=e.evaluate({zoom:r+1},i,{},n.availableImages)
t=t&&t.name?t.name:t,a=a&&a.name?a.name:a,l=l&&l.name?l.name:l,s[t]=!0,s[a]=!0,s[l]=!0,i.patterns[o.id]={min:t,mid:a,max:l}}}return i}class ra{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new Wn,this.indexArray=new ns,this.indexArray2=new ss,this.programConfigurations=new Ps(t.layers,t.zoom),this.segments=new ls,this.segments2=new ls,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){this.hasPattern=ea("fill",this.layers,e)
const r=this.layers[0].layout.get("fill-sort-key"),n=!r.isConstant(),s=[]
for(const{feature:o,id:a,index:l,sourceLayerIndex:c}of t){const t=this.layers[0]._featureFilter.needGeometry,h=Fs(o,t)
if(!this.layers[0]._featureFilter.filter(new Zr(this.zoom),h,i))continue
const u=n?r.evaluate(h,{},i,e.availableImages):void 0,p={id:a,properties:o.properties,type:o.type,sourceLayerIndex:c,index:l,geometry:t?h.geometry:Rs(o),patterns:{},sortKey:u}
s.push(p)}n&&s.sort(((t,e)=>t.sortKey-e.sortKey))
for(const o of s){const{geometry:r,index:n,sourceLayerIndex:s}=o
if(this.hasPattern){const t=ia("fill",this.layers,o,this.zoom,e)
this.patternFeatures.push(t)}else this.addFeature(o,r,n,i,{})
e.featureIndex.insert(t[n].feature,r,n,s,this.index)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}addFeatures(t,e,i){for(const r of this.patternFeatures)this.addFeature(r,r.geometry,r.index,e,i)}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,vo),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy())}addFeature(t,e,i,r,n){for(const s of Qo(e,500)){let t=0
for(const a of s)t+=a.length
const e=this.segments.prepareSegment(t,this.layoutVertexArray,this.indexArray),i=e.vertexLength,r=[],n=[]
for(const a of s){if(0===a.length)continue
a!==s[0]&&n.push(r.length/2)
const t=this.segments2.prepareSegment(a.length,this.layoutVertexArray,this.indexArray2),e=t.vertexLength
this.layoutVertexArray.emplaceBack(a[0].x,a[0].y),this.indexArray2.emplaceBack(e+a.length-1,e),r.push(a[0].x),r.push(a[0].y)
for(let i=1;i<a.length;i++)this.layoutVertexArray.emplaceBack(a[i].x,a[i].y),this.indexArray2.emplaceBack(e+i-1,e+i),r.push(a[i].x),r.push(a[i].y)
t.vertexLength+=a.length,t.primitiveLength+=a.length}const o=Wo(r,n)
for(let s=0;s<o.length;s+=3)this.indexArray.emplaceBack(i+o[s],i+o[s+1],i+o[s+2])
e.vertexLength+=t,e.primitiveLength+=o.length/3}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,n,r)}}vr("FillBucket",ra,{omit:["layers","patternFeatures"]})
const na=new an({"fill-sort-key":new rn(tt.layout_fill["fill-sort-key"])})
var sa={paint:new an({"fill-antialias":new en(tt.paint_fill["fill-antialias"]),"fill-opacity":new rn(tt.paint_fill["fill-opacity"]),"fill-color":new rn(tt.paint_fill["fill-color"]),"fill-outline-color":new rn(tt.paint_fill["fill-outline-color"]),"fill-translate":new en(tt.paint_fill["fill-translate"]),"fill-translate-anchor":new en(tt.paint_fill["fill-translate-anchor"]),"fill-pattern":new nn(tt.paint_fill["fill-pattern"])}),layout:na}
const oa=dn([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4),{members:aa}=oa
var la={},ca=T,ha=ua
function ua(t,e,i,r,n){this.properties={},this.extent=i,this.type=0,this._pbf=t,this._geometry=-1,this._keys=r,this._values=n,t.readFields(pa,this,e)}function pa(t,e,i){1==t?e.id=i.readVarint():2==t?function(t,e){for(var i=t.readVarint()+t.pos;t.pos<i;){var r=e._keys[t.readVarint()],n=e._values[t.readVarint()]
e.properties[r]=n}}(i,e):3==t?e.type=i.readVarint():4==t&&(e._geometry=i.pos)}function da(t){for(var e,i,r=0,n=0,s=t.length,o=s-1;n<s;o=n++)r+=((i=t[o]).x-(e=t[n]).x)*(e.y+i.y)
return r}ua.types=["Unknown","Point","LineString","Polygon"],ua.prototype.loadGeometry=function(){var t=this._pbf
t.pos=this._geometry
for(var e,i=t.readVarint()+t.pos,r=1,n=0,s=0,o=0,a=[];t.pos<i;){if(n<=0){var l=t.readVarint()
r=7&l,n=l>>3}if(n--,1===r||2===r)s+=t.readSVarint(),o+=t.readSVarint(),1===r&&(e&&a.push(e),e=[]),e.push(new ca(s,o))
else{if(7!==r)throw new Error("unknown command "+r)
e&&e.push(e[0].clone())}}return e&&a.push(e),a},ua.prototype.bbox=function(){var t=this._pbf
t.pos=this._geometry
for(var e=t.readVarint()+t.pos,i=1,r=0,n=0,s=0,o=1/0,a=-1/0,l=1/0,c=-1/0;t.pos<e;){if(r<=0){var h=t.readVarint()
i=7&h,r=h>>3}if(r--,1===i||2===i)(n+=t.readSVarint())<o&&(o=n),n>a&&(a=n),(s+=t.readSVarint())<l&&(l=s),s>c&&(c=s)
else if(7!==i)throw new Error("unknown command "+i)}return[o,l,a,c]},ua.prototype.toGeoJSON=function(t,e,i){var r,n,s=this.extent*Math.pow(2,i),o=this.extent*t,a=this.extent*e,l=this.loadGeometry(),c=ua.types[this.type]
function h(t){for(var e=0;e<t.length;e++){var i=t[e]
t[e]=[360*(i.x+o)/s-180,360/Math.PI*Math.atan(Math.exp((180-360*(i.y+a)/s)*Math.PI/180))-90]}}switch(this.type){case 1:var u=[]
for(r=0;r<l.length;r++)u[r]=l[r][0]
h(l=u)
break
case 2:for(r=0;r<l.length;r++)h(l[r])
break
case 3:for(l=function(t){var e=t.length
if(e<=1)return[t]
for(var i,r,n=[],s=0;s<e;s++){var o=da(t[s])
0!==o&&(void 0===r&&(r=o<0),r===o<0?(i&&n.push(i),i=[t[s]]):i.push(t[s]))}return i&&n.push(i),n}(l),r=0;r<l.length;r++)for(n=0;n<l[r].length;n++)h(l[r][n])}1===l.length?l=l[0]:c="Multi"+c
var p={type:"Feature",geometry:{type:c,coordinates:l},properties:this.properties}
return"id"in this&&(p.id=this.id),p}
var ma=ha,fa=ga
function ga(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(_a,this,e),this.length=this._features.length}function _a(t,e,i){15===t?e.version=i.readVarint():1===t?e.name=i.readString():5===t?e.extent=i.readVarint():2===t?e._features.push(i.pos):3===t?e._keys.push(i.readString()):4===t&&e._values.push(function(t){for(var e=null,i=t.readVarint()+t.pos;t.pos<i;){var r=t.readVarint()>>3
e=1===r?t.readString():2===r?t.readFloat():3===r?t.readDouble():4===r?t.readVarint64():5===r?t.readVarint():6===r?t.readSVarint():7===r?t.readBoolean():null}return e}(i))}ga.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds")
this._pbf.pos=this._features[t]
var e=this._pbf.readVarint()+this._pbf.pos
return new ma(this._pbf,e,this.extent,this._keys,this._values)}
var ya=fa
function xa(t,e,i){if(3===t){var r=new ya(i,i.readVarint()+i.pos)
r.length&&(e[r.name]=r)}}la.VectorTile=function(t,e){this.layers=t.readFields(xa,{},e)},la.VectorTileFeature=ha,la.VectorTileLayer=fa
const va=la.VectorTileFeature.types,ba=Math.pow(2,13)
function wa(t,e,i,r,n,s,o,a){t.emplaceBack(e,i,2*Math.floor(r*ba)+o,n*ba*2,s*ba*2,Math.round(a))}class Sa{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new Hn,this.indexArray=new ns,this.programConfigurations=new Ps(t.layers,t.zoom),this.segments=new ls,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){this.features=[],this.hasPattern=ea("fill-extrusion",this.layers,e)
for(const{feature:r,id:n,index:s,sourceLayerIndex:o}of t){const t=this.layers[0]._featureFilter.needGeometry,a=Fs(r,t)
if(!this.layers[0]._featureFilter.filter(new Zr(this.zoom),a,i))continue
const l={id:n,sourceLayerIndex:o,index:s,geometry:t?a.geometry:Rs(r),properties:r.properties,type:r.type,patterns:{}}
this.hasPattern?this.features.push(ia("fill-extrusion",this.layers,l,this.zoom,e)):this.addFeature(l,l.geometry,s,i,{}),e.featureIndex.insert(r,l.geometry,s,o,this.index,!0)}}addFeatures(t,e,i){for(const r of this.features){const{geometry:t}=r
this.addFeature(r,t,r.index,e,i)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,aa),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())}addFeature(t,e,i,r,n){for(const s of Qo(e,500)){let e=0
for(const t of s)e+=t.length
let i=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray)
for(const t of s){if(0===t.length)continue
if(Ia(t))continue
let e=0
for(let r=0;r<t.length;r++){const n=t[r]
if(r>=1){const s=t[r-1]
if(!Ta(n,s)){i.vertexLength+4>ls.MAX_VERTEX_ARRAY_LENGTH&&(i=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray))
const t=n.sub(s)._perp()._unit(),r=s.dist(n)
e+r>32768&&(e=0),wa(this.layoutVertexArray,n.x,n.y,t.x,t.y,0,0,e),wa(this.layoutVertexArray,n.x,n.y,t.x,t.y,0,1,e),e+=r,wa(this.layoutVertexArray,s.x,s.y,t.x,t.y,0,0,e),wa(this.layoutVertexArray,s.x,s.y,t.x,t.y,0,1,e)
const o=i.vertexLength
this.indexArray.emplaceBack(o,o+2,o+1),this.indexArray.emplaceBack(o+1,o+2,o+3),i.vertexLength+=4,i.primitiveLength+=2}}}}if(i.vertexLength+e>ls.MAX_VERTEX_ARRAY_LENGTH&&(i=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray)),"Polygon"!==va[t.type])continue
const r=[],n=[],o=i.vertexLength
for(const t of s)if(0!==t.length){t!==s[0]&&n.push(r.length/2)
for(let e=0;e<t.length;e++){const i=t[e]
wa(this.layoutVertexArray,i.x,i.y,0,0,1,1,0),r.push(i.x),r.push(i.y)}}const a=Wo(r,n)
for(let t=0;t<a.length;t+=3)this.indexArray.emplaceBack(o+a[t],o+a[t+2],o+a[t+1])
i.primitiveLength+=a.length/3,i.vertexLength+=e}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,n,r)}}function Ta(t,e){return t.x===e.x&&(t.x<0||t.x>Ds)||t.y===e.y&&(t.y<0||t.y>Ds)}function Ia(t){return t.every((t=>t.x<0))||t.every((t=>t.x>Ds))||t.every((t=>t.y<0))||t.every((t=>t.y>Ds))}vr("FillExtrusionBucket",Sa,{omit:["layers","features"]})
var Ea={paint:new an({"fill-extrusion-opacity":new en(tt["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new rn(tt["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new en(tt["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new en(tt["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new nn(tt["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new rn(tt["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new rn(tt["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new en(tt["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})}
function Aa(t,e){return t.x*e.x+t.y*e.y}function za(t,e){if(1===t.length){let i=0
const r=e[i++]
let n
for(;!n||r.equals(n);)if(n=e[i++],!n)return 1/0
for(;i<e.length;i++){const s=e[i],o=t[0],a=n.sub(r),l=s.sub(r),c=o.sub(r),h=Aa(a,a),u=Aa(a,l),p=Aa(l,l),d=Aa(c,a),m=Aa(c,l),f=h*p-u*u,g=(p*d-u*m)/f,_=(h*m-u*d)/f,y=r.z*(1-g-_)+n.z*g+s.z*_
if(isFinite(y))return y}return 1/0}{let t=1/0
for(const i of e)t=Math.min(t,i.z)
return t}}const Ca=dn([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4),{members:Pa}=Ca,ka=dn([{name:"a_uv_x",components:1,type:"Float32"},{name:"a_split_index",components:1,type:"Float32"}]),{members:Ma}=ka,Da=la.VectorTileFeature.types,La=Math.cos(Math.PI/180*37.5),Ba=Math.pow(2,14)/.5
class Ra{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.lineClipsArray=[],this.gradients={},this.layers.forEach((t=>{this.gradients[t.id]={}})),this.layoutVertexArray=new Kn,this.layoutVertexArray2=new Yn,this.indexArray=new ns,this.programConfigurations=new Ps(t.layers,t.zoom),this.segments=new ls,this.maxLineLength=0,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){this.hasPattern=ea("line",this.layers,e)
const r=this.layers[0].layout.get("line-sort-key"),n=!r.isConstant(),s=[]
for(const{feature:o,id:a,index:l,sourceLayerIndex:c}of t){const t=this.layers[0]._featureFilter.needGeometry,e=Fs(o,t)
if(!this.layers[0]._featureFilter.filter(new Zr(this.zoom),e,i))continue
const h=n?r.evaluate(e,{},i):void 0,u={id:a,properties:o.properties,type:o.type,sourceLayerIndex:c,index:l,geometry:t?e.geometry:Rs(o),patterns:{},sortKey:h}
s.push(u)}n&&s.sort(((t,e)=>t.sortKey-e.sortKey))
for(const o of s){const{geometry:r,index:n,sourceLayerIndex:s}=o
if(this.hasPattern){const t=ia("line",this.layers,o,this.zoom,e)
this.patternFeatures.push(t)}else this.addFeature(o,r,n,i,{})
e.featureIndex.insert(t[n].feature,r,n,s,this.index)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}addFeatures(t,e,i){for(const r of this.patternFeatures)this.addFeature(r,r.geometry,r.index,e,i)}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(0!==this.layoutVertexArray2.length&&(this.layoutVertexBuffer2=t.createVertexBuffer(this.layoutVertexArray2,Ma)),this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Pa),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())}lineFeatureClips(t){if(t.properties&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_start")&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_end"))return{start:+t.properties.mapbox_clip_start,end:+t.properties.mapbox_clip_end}}addFeature(t,e,i,r,n){const s=this.layers[0].layout,o=s.get("line-join").evaluate(t,{}),a=s.get("line-cap"),l=s.get("line-miter-limit"),c=s.get("line-round-limit")
this.lineClips=this.lineFeatureClips(t)
for(const h of e)this.addLine(h,t,o,a,l,c)
this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,n,r)}addLine(t,e,i,r,n,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,this.lineClips){this.lineClipsArray.push(this.lineClips)
for(let e=0;e<t.length-1;e++)this.totalDistance+=t[e].dist(t[e+1])
this.updateScaledDistance(),this.maxLineLength=Math.max(this.maxLineLength,this.totalDistance)}const o="Polygon"===Da[e.type]
let a=t.length
for(;a>=2&&t[a-1].equals(t[a-2]);)a--
let l=0
for(;l<a-1&&t[l].equals(t[l+1]);)l++
if(a<(o?3:2))return
"bevel"===i&&(n=1.05)
const c=this.overscaling<=16?122880/(512*this.overscaling):0,h=this.segments.prepareSegment(10*a,this.layoutVertexArray,this.indexArray)
let u,p,d,m,f
this.e1=this.e2=-1,o&&(u=t[a-2],f=t[l].sub(u)._unit()._perp())
for(let g=l;g<a;g++){if(d=g===a-1?o?t[l+1]:void 0:t[g+1],d&&t[g].equals(d))continue
f&&(m=f),u&&(p=u),u=t[g],f=d?d.sub(u)._unit()._perp():m,m=m||f
let e=m.add(f)
0===e.x&&0===e.y||e._unit()
const _=m.x*f.x+m.y*f.y,y=e.x*f.x+e.y*f.y,x=0!==y?1/y:1/0,v=2*Math.sqrt(2-2*y),b=y<La&&p&&d,w=m.x*f.y-m.y*f.x>0
if(b&&g>l){const t=u.dist(p)
if(t>2*c){const e=u.sub(u.sub(p)._mult(c/t)._round())
this.updateDistance(p,e),this.addCurrentVertex(e,m,0,0,h),p=e}}const S=p&&d
let T=S?i:o?"butt":r
if(S&&"round"===T&&(x<s?T="miter":x<=2&&(T="fakeround")),"miter"===T&&x>n&&(T="bevel"),"bevel"===T&&(x>2&&(T="flipbevel"),x<n&&(T="miter")),p&&this.updateDistance(p,u),"miter"===T)e._mult(x),this.addCurrentVertex(u,e,0,0,h)
else if("flipbevel"===T){if(x>100)e=f.mult(-1)
else{const t=x*m.add(f).mag()/m.sub(f).mag()
e._perp()._mult(t*(w?-1:1))}this.addCurrentVertex(u,e,0,0,h),this.addCurrentVertex(u,e.mult(-1),0,0,h)}else if("bevel"===T||"fakeround"===T){const t=-Math.sqrt(x*x-1),e=w?t:0,i=w?0:t
if(p&&this.addCurrentVertex(u,m,e,i,h),"fakeround"===T){const t=Math.round(180*v/Math.PI/20)
for(let e=1;e<t;e++){let i=e/t
if(.5!==i){const t=i-.5
i+=i*t*(i-1)*((1.0904+_*(_*(3.55645-1.43519*_)-3.2452))*t*t+(.848013+_*(.215638*_-1.06021)))}const r=f.sub(m)._mult(i)._add(m)._unit()._mult(w?-1:1)
this.addHalfVertex(u,r.x,r.y,!1,w,0,h)}}d&&this.addCurrentVertex(u,f,-e,-i,h)}else if("butt"===T)this.addCurrentVertex(u,e,0,0,h)
else if("square"===T){const t=p?1:-1
this.addCurrentVertex(u,e,t,t,h)}else"round"===T&&(p&&(this.addCurrentVertex(u,m,0,0,h),this.addCurrentVertex(u,m,1,1,h,!0)),d&&(this.addCurrentVertex(u,f,-1,-1,h,!0),this.addCurrentVertex(u,f,0,0,h)))
if(b&&g<a-1){const t=u.dist(d)
if(t>2*c){const e=u.add(d.sub(u)._mult(c/t)._round())
this.updateDistance(u,e),this.addCurrentVertex(e,f,0,0,h),u=e}}}}addCurrentVertex(t,e,i,r,n){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
const o=e.y*r-e.x,a=-e.y-e.x*r
this.addHalfVertex(t,e.x+e.y*i,e.y-e.x*i,s,!1,i,n),this.addHalfVertex(t,o,a,s,!0,-r,n),this.distance>Ba/2&&0===this.totalDistance&&(this.distance=0,this.addCurrentVertex(t,e,i,r,n,s))}addHalfVertex(t,e,i,r,n,s,o){let{x:a,y:l}=t
const c=.5*(this.lineClips?this.scaledDistance*(Ba-1):this.scaledDistance)
this.layoutVertexArray.emplaceBack((a<<1)+(r?1:0),(l<<1)+(n?1:0),Math.round(63*e)+128,Math.round(63*i)+128,1+(0===s?0:s<0?-1:1)|(63&c)<<2,c>>6),this.lineClips&&this.layoutVertexArray2.emplaceBack((this.scaledDistance-this.lineClips.start)/(this.lineClips.end-this.lineClips.start),this.lineClipsArray.length)
const h=o.vertexLength++
this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,h),o.primitiveLength++),n?this.e2=h:this.e1=h}updateScaledDistance(){this.scaledDistance=this.lineClips?this.lineClips.start+(this.lineClips.end-this.lineClips.start)*this.distance/this.totalDistance:this.distance}updateDistance(t,e){this.distance+=t.dist(e),this.updateScaledDistance()}}vr("LineBucket",Ra,{omit:["layers","patternFeatures"]})
const Fa=new an({"line-cap":new en(tt.layout_line["line-cap"]),"line-join":new rn(tt.layout_line["line-join"]),"line-miter-limit":new en(tt.layout_line["line-miter-limit"]),"line-round-limit":new en(tt.layout_line["line-round-limit"]),"line-sort-key":new rn(tt.layout_line["line-sort-key"])})
var Oa={paint:new an({"line-opacity":new rn(tt.paint_line["line-opacity"]),"line-color":new rn(tt.paint_line["line-color"]),"line-translate":new en(tt.paint_line["line-translate"]),"line-translate-anchor":new en(tt.paint_line["line-translate-anchor"]),"line-width":new rn(tt.paint_line["line-width"]),"line-gap-width":new rn(tt.paint_line["line-gap-width"]),"line-offset":new rn(tt.paint_line["line-offset"]),"line-blur":new rn(tt.paint_line["line-blur"]),"line-dasharray":new sn(tt.paint_line["line-dasharray"]),"line-pattern":new nn(tt.paint_line["line-pattern"]),"line-gradient":new on(tt.paint_line["line-gradient"])}),layout:Fa}
const Ua=new class extends rn{possiblyEvaluate(t,e){return e=new Zr(Math.floor(e.zoom),{now:e.now,fadeDuration:e.fadeDuration,zoomHistory:e.zoomHistory,transition:e.transition}),super.possiblyEvaluate(t,e)}evaluate(t,e,i,r){return e=a({},e,{zoom:Math.floor(e.zoom)}),super.evaluate(t,e,i,r)}}(Oa.paint.properties["line-width"].specification)
function Va(t,e){return e>0?e+2*t:t}Ua.useIntegerZoom=!0
const Na=dn([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),$a=dn([{name:"a_projected_pos",components:3,type:"Float32"}],4)
dn([{name:"a_fade_opacity",components:1,type:"Uint32"}],4)
const qa=dn([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])
dn([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}])
const Ga=dn([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),ja=dn([{name:"a_pos",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4)
function Za(t,e,i){return t.sections.forEach((t=>{t.text=function(t,e,i){const r=e.layout.get("text-transform").evaluate(i,{})
return"uppercase"===r?t=t.toLocaleUpperCase():"lowercase"===r&&(t=t.toLocaleLowerCase()),jr.applyArabicShaping&&(t=jr.applyArabicShaping(t)),t}(t.text,e,i)})),t}dn([{name:"triangle",components:3,type:"Uint16"}]),dn([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),dn([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"},{type:"Float32",name:"collisionCircleDiameter"}]),dn([{type:"Float32",name:"offsetX"}]),dn([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}])
const Xa={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"}
var Wa=24,Ha=Ja,Ka=function(t,e,i,r,n){var s,o,a=8*n-r-1,l=(1<<a)-1,c=l>>1,h=-7,u=i?n-1:0,p=i?-1:1,d=t[e+u]
for(u+=p,s=d&(1<<-h)-1,d>>=-h,h+=a;h>0;s=256*s+t[e+u],u+=p,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=r;h>0;o=256*o+t[e+u],u+=p,h-=8);if(0===s)s=1-c
else{if(s===l)return o?NaN:1/0*(d?-1:1)
o+=Math.pow(2,r),s-=c}return(d?-1:1)*o*Math.pow(2,s-r)},Ya=function(t,e,i,r,n,s){var o,a,l,c=8*s-n-1,h=(1<<c)-1,u=h>>1,p=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:s-1,m=r?1:-1,f=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=h):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-o))<1&&(o--,l*=2),(e+=o+u>=1?p/l:p*Math.pow(2,1-u))*l>=2&&(o++,l/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(e*l-1)*Math.pow(2,n),o+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,n),o=0));n>=8;t[i+d]=255&a,d+=m,a/=256,n-=8);for(o=o<<n|a,c+=n;c>0;t[i+d]=255&o,d+=m,o/=256,c-=8);t[i+d-m]|=128*f}
function Ja(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}Ja.Varint=0,Ja.Fixed64=1,Ja.Bytes=2,Ja.Fixed32=5
var Qa,tl=4294967296,el=1/tl,il="undefined"==typeof TextDecoder?null:new TextDecoder("utf8")
function rl(t){return t.type===Ja.Bytes?t.readVarint()+t.pos:t.pos+1}function nl(t,e,i){return i?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function sl(t,e,i){var r=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2))
i.realloc(r)
for(var n=i.pos-1;n>=t;n--)i.buf[n+r]=i.buf[n]}function ol(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function al(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function ll(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function cl(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function hl(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function ul(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function pl(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function dl(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function ml(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}function fl(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function gl(t,e,i){t[i]=e,t[i+1]=e>>>8,t[i+2]=e>>>16,t[i+3]=e>>>24}function _l(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}function yl(t,e,i){1===t&&i.readMessage(xl,e)}function xl(t,e,i){if(3===t){const{id:t,bitmap:r,width:n,height:s,left:o,top:a,advance:l}=i.readMessage(vl,{})
e.push({id:t,bitmap:new fo({width:n+6,height:s+6},r),metrics:{width:n,height:s,left:o,top:a,advance:l}})}}function vl(t,e,i){1===t?e.id=i.readVarint():2===t?e.bitmap=i.readBytes():3===t?e.width=i.readVarint():4===t?e.height=i.readVarint():5===t?e.left=i.readSVarint():6===t?e.top=i.readSVarint():7===t&&(e.advance=i.readVarint())}function bl(t){let e=0,i=0
for(const o of t)e+=o.w*o.h,i=Math.max(i,o.w)
t.sort(((t,e)=>e.h-t.h))
const r=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),i),h:1/0}]
let n=0,s=0
for(const o of t)for(let t=r.length-1;t>=0;t--){const e=r[t]
if(!(o.w>e.w||o.h>e.h)){if(o.x=e.x,o.y=e.y,s=Math.max(s,o.y+o.h),n=Math.max(n,o.x+o.w),o.w===e.w&&o.h===e.h){const e=r.pop()
t<r.length&&(r[t]=e)}else o.h===e.h?(e.x+=o.w,e.w-=o.w):o.w===e.w?(e.y+=o.h,e.h-=o.h):(r.push({x:e.x+o.w,y:e.y,w:e.w-o.w,h:o.h}),e.y+=o.h,e.h-=o.h)
break}}return{w:n,h:s,fill:e/(n*s)||0}}Ja.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var r=this.readVarint(),n=r>>3,s=this.pos
this.type=7&r,t(n,e,this),this.pos===s&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=fl(this.buf,this.pos)
return this.pos+=4,t},readSFixed32:function(){var t=_l(this.buf,this.pos)
return this.pos+=4,t},readFixed64:function(){var t=fl(this.buf,this.pos)+fl(this.buf,this.pos+4)*tl
return this.pos+=8,t},readSFixed64:function(){var t=fl(this.buf,this.pos)+_l(this.buf,this.pos+4)*tl
return this.pos+=8,t},readFloat:function(){var t=Ka(this.buf,this.pos,!0,23,4)
return this.pos+=4,t},readDouble:function(){var t=Ka(this.buf,this.pos,!0,52,8)
return this.pos+=8,t},readVarint:function(t){var e,i,r=this.buf
return e=127&(i=r[this.pos++]),i<128?e:(e|=(127&(i=r[this.pos++]))<<7,i<128?e:(e|=(127&(i=r[this.pos++]))<<14,i<128?e:(e|=(127&(i=r[this.pos++]))<<21,i<128?e:function(t,e,i){var r,n,s=i.buf
if(r=(112&(n=s[i.pos++]))>>4,n<128)return nl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<3,n<128)return nl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<10,n<128)return nl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<17,n<128)return nl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<24,n<128)return nl(t,r,e)
if(r|=(1&(n=s[i.pos++]))<<31,n<128)return nl(t,r,e)
throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(i=r[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint()
return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos
return this.pos=t,t-e>=12&&il?function(t,e,i){return il.decode(t.subarray(e,i))}(this.buf,e,t):function(t,e,i){for(var r="",n=e;n<i;){var s,o,a,l=t[n],c=null,h=l>239?4:l>223?3:l>191?2:1
if(n+h>i)break
1===h?l<128&&(c=l):2===h?128==(192&(s=t[n+1]))&&(c=(31&l)<<6|63&s)<=127&&(c=null):3===h?(o=t[n+2],128==(192&(s=t[n+1]))&&128==(192&o)&&((c=(15&l)<<12|(63&s)<<6|63&o)<=2047||c>=55296&&c<=57343)&&(c=null)):4===h&&(o=t[n+2],a=t[n+3],128==(192&(s=t[n+1]))&&128==(192&o)&&128==(192&a)&&((c=(15&l)<<18|(63&s)<<12|(63&o)<<6|63&a)<=65535||c>=1114112)&&(c=null)),null===c?(c=65533,h=1):c>65535&&(c-=65536,r+=String.fromCharCode(c>>>10&1023|55296),c=56320|1023&c),r+=String.fromCharCode(c),n+=h}return r}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t)
return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==Ja.Bytes)return t.push(this.readVarint(e))
var i=rl(this)
for(t=t||[];this.pos<i;)t.push(this.readVarint(e))
return t},readPackedSVarint:function(t){if(this.type!==Ja.Bytes)return t.push(this.readSVarint())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readSVarint())
return t},readPackedBoolean:function(t){if(this.type!==Ja.Bytes)return t.push(this.readBoolean())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readBoolean())
return t},readPackedFloat:function(t){if(this.type!==Ja.Bytes)return t.push(this.readFloat())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readFloat())
return t},readPackedDouble:function(t){if(this.type!==Ja.Bytes)return t.push(this.readDouble())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readDouble())
return t},readPackedFixed32:function(t){if(this.type!==Ja.Bytes)return t.push(this.readFixed32())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed32())
return t},readPackedSFixed32:function(t){if(this.type!==Ja.Bytes)return t.push(this.readSFixed32())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed32())
return t},readPackedFixed64:function(t){if(this.type!==Ja.Bytes)return t.push(this.readFixed64())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed64())
return t},readPackedSFixed64:function(t){if(this.type!==Ja.Bytes)return t.push(this.readSFixed64())
var e=rl(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed64())
return t},skip:function(t){var e=7&t
if(e===Ja.Varint)for(;this.buf[this.pos++]>127;);else if(e===Ja.Bytes)this.pos=this.readVarint()+this.pos
else if(e===Ja.Fixed32)this.pos+=4
else{if(e!==Ja.Fixed64)throw new Error("Unimplemented type: "+e)
this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2
if(e!==this.length){var i=new Uint8Array(e)
i.set(this.buf),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),gl(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),gl(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),gl(this.buf,-1&t,this.pos),gl(this.buf,Math.floor(t*el),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),gl(this.buf,-1&t,this.pos),gl(this.buf,Math.floor(t*el),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var i,r
if(t>=0?(i=t%4294967296|0,r=t/4294967296|0):(r=~(-t/4294967296),4294967295^(i=~(-t%4294967296))?i=i+1|0:(i=0,r=r+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes")
e.realloc(10),function(t,e,i){i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,i.buf[i.pos]=127&(t>>>=7)}(i,0,e),function(t,e){var i=(7&t)<<4
e.buf[e.pos++]|=i|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))))}(r,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++
var e=this.pos
this.pos=function(t,e,i){for(var r,n,s=0;s<e.length;s++){if((r=e.charCodeAt(s))>55295&&r<57344){if(!n){r>56319||s+1===e.length?(t[i++]=239,t[i++]=191,t[i++]=189):n=r
continue}if(r<56320){t[i++]=239,t[i++]=191,t[i++]=189,n=r
continue}r=n-55296<<10|r-56320|65536,n=null}else n&&(t[i++]=239,t[i++]=191,t[i++]=189,n=null)
r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return i}(this.buf,t,this.pos)
var i=this.pos-e
i>=128&&sl(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),Ya(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),Ya(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length
this.writeVarint(e),this.realloc(e)
for(var i=0;i<e;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++
var i=this.pos
t(e,this)
var r=this.pos-i
r>=128&&sl(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,i){this.writeTag(t,Ja.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,ol,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,al,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,hl,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,ll,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,cl,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,ul,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,pl,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,dl,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,ml,e)},writeBytesField:function(t,e){this.writeTag(t,Ja.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,Ja.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,Ja.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,Ja.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,Ja.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,Ja.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,Ja.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,Ja.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,Ja.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,Ja.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}}
class wl{constructor(t,e){let{pixelRatio:i,version:r,stretchX:n,stretchY:s,content:o}=e
this.paddedRect=t,this.pixelRatio=i,this.stretchX=n,this.stretchY=s,this.content=o,this.version=r}get tl(){return[this.paddedRect.x+1,this.paddedRect.y+1]}get br(){return[this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]}get tlbr(){return this.tl.concat(this.br)}get displaySize(){return[(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]}}class Sl{constructor(t,e){const i={},r={}
this.haveRenderCallbacks=[]
const n=[]
this.addImages(t,i,n),this.addImages(e,r,n)
const{w:s,h:o}=bl(n),a=new go({width:s||1,height:o||1})
for(const l in t){const e=t[l],r=i[l].paddedRect
go.copy(e.data,a,{x:0,y:0},{x:r.x+1,y:r.y+1},e.data)}for(const l in e){const t=e[l],i=r[l].paddedRect,n=i.x+1,s=i.y+1,o=t.data.width,c=t.data.height
go.copy(t.data,a,{x:0,y:0},{x:n,y:s},t.data),go.copy(t.data,a,{x:0,y:c-1},{x:n,y:s-1},{width:o,height:1}),go.copy(t.data,a,{x:0,y:0},{x:n,y:s+c},{width:o,height:1}),go.copy(t.data,a,{x:o-1,y:0},{x:n-1,y:s},{width:1,height:c}),go.copy(t.data,a,{x:0,y:0},{x:n+o,y:s},{width:1,height:c})}this.image=a,this.iconPositions=i,this.patternPositions=r}addImages(t,e,i){for(const r in t){const n=t[r],s={x:0,y:0,w:n.data.width+2,h:n.data.height+2}
i.push(s),e[r]=new wl(s,n),n.hasRenderCallback&&this.haveRenderCallbacks.push(r)}}patchUpdatedImages(t,e){t.dispatchRenderCallbacks(this.haveRenderCallbacks)
for(const i in t.updatedImages)this.patchUpdatedImage(this.iconPositions[i],t.getImage(i),e),this.patchUpdatedImage(this.patternPositions[i],t.getImage(i),e)}patchUpdatedImage(t,e,i){if(!t||!e)return
if(t.version===e.version)return
t.version=e.version
const[r,n]=t.tl
i.update(e.data,void 0,{x:r,y:n})}}vr("ImagePosition",wl),vr("ImageAtlas",Sl),t.WritingMode=void 0,(Qa=t.WritingMode||(t.WritingMode={}))[Qa.none=0]="none",Qa[Qa.horizontal=1]="horizontal",Qa[Qa.vertical=2]="vertical",Qa[Qa.horizontalOnly=3]="horizontalOnly"
const Tl=-17
class Il{constructor(){this.scale=1,this.fontStack="",this.imageName=null}static forText(t,e){const i=new Il
return i.scale=t||1,i.fontStack=e,i}static forImage(t){const e=new Il
return e.imageName=t,e}}class El{constructor(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null}static fromFeature(t,e){const i=new El
for(let r=0;r<t.sections.length;r++){const n=t.sections[r]
n.image?i.addImageSection(n):i.addTextSection(n,e)}return i}length(){return this.text.length}getSection(t){return this.sections[this.sectionIndex[t]]}getSectionIndex(t){return this.sectionIndex[t]}getCharCode(t){return this.text.charCodeAt(t)}verticalizePunctuation(){this.text=function(t){let e=""
for(let i=0;i<t.length;i++){const r=t.charCodeAt(i+1)||null,n=t.charCodeAt(i-1)||null
e+=r&&Pr(r)&&!Xa[t[i+1]]||n&&Pr(n)&&!Xa[t[i-1]]||!Xa[t[i]]?t[i]:Xa[t[i]]}return e}(this.text)}trim(){let t=0
for(let i=0;i<this.text.length&&zl[this.text.charCodeAt(i)];i++)t++
let e=this.text.length
for(let i=this.text.length-1;i>=0&&i>=t&&zl[this.text.charCodeAt(i)];i--)e--
this.text=this.text.substring(t,e),this.sectionIndex=this.sectionIndex.slice(t,e)}substring(t,e){const i=new El
return i.text=this.text.substring(t,e),i.sectionIndex=this.sectionIndex.slice(t,e),i.sections=this.sections,i}toString(){return this.text}getMaxScale(){return this.sectionIndex.reduce(((t,e)=>Math.max(t,this.sections[e].scale)),0)}addTextSection(t,e){this.text+=t.text,this.sections.push(Il.forText(t.scale,t.fontStack||e))
const i=this.sections.length-1
for(let r=0;r<t.text.length;++r)this.sectionIndex.push(i)}addImageSection(t){const e=t.image?t.image.name:""
if(0===e.length)return void m("Can't add FormattedSection with an empty image.")
const i=this.getNextImageSectionCharCode()
i?(this.text+=String.fromCharCode(i),this.sections.push(Il.forImage(e)),this.sectionIndex.push(this.sections.length-1)):m("Reached maximum number of images 6401")}getNextImageSectionCharCode(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)}}function Al(e,i,r,n,s,o,a,l,c,h,u,p,d,m,f,g){const _=El.fromFeature(e,s)
let y
p===t.WritingMode.vertical&&_.verticalizePunctuation()
const{processBidirectionalText:x,processStyledBidirectionalText:v}=jr
if(x&&1===_.sections.length){y=[]
const t=x(_.toString(),Bl(_,h,o,i,n,m,f))
for(const e of t){const t=new El
t.text=e,t.sections=_.sections
for(let i=0;i<e.length;i++)t.sectionIndex.push(0)
y.push(t)}}else if(v){y=[]
const t=v(_.text,_.sectionIndex,Bl(_,h,o,i,n,m,f))
for(const e of t){const t=new El
t.text=e[0],t.sectionIndex=e[1],t.sections=_.sections,y.push(t)}}else y=function(t,e){const i=[],r=t.text
let n=0
for(const s of e)i.push(t.substring(n,s)),n=s
return n<r.length&&i.push(t.substring(n,r.length)),i}(_,Bl(_,h,o,i,n,m,f))
const b=[],w={positionedLines:b,text:_.toString(),top:u[1],bottom:u[1],left:u[0],right:u[0],writingMode:p,iconsInText:!1,verticalizable:!1}
return function(e,i,r,n,s,o,a,l,c,h,u,p){let d=0,m=Tl,f=0,g=0
const _="right"===l?1:"left"===l?0:.5
let y=0
for(const S of s){S.trim()
const s=S.getMaxScale(),a=(s-1)*Wa,l={positionedGlyphs:[],lineOffset:0}
e.positionedLines[y]=l
const v=l.positionedGlyphs
let b=0
if(!S.length()){m+=o,++y
continue}for(let o=0;o<S.length();o++){const l=S.getSection(o),f=S.getSectionIndex(o),g=S.getCharCode(o)
let _=0,y=null,w=null,T=null,I=Wa
const E=!(c===t.WritingMode.horizontal||!u&&!Cr(g)||u&&(zl[g]||(x=g,Ir.Arabic(x)||Ir["Arabic Supplement"](x)||Ir["Arabic Extended-A"](x)||Ir["Arabic Presentation Forms-A"](x)||Ir["Arabic Presentation Forms-B"](x))))
if(l.imageName){const t=n[l.imageName]
if(!t)continue
T=l.imageName,e.iconsInText=e.iconsInText||!0,w=t.paddedRect
const i=t.displaySize
l.scale=l.scale*Wa/p,y={width:i[0],height:i[1],left:1,top:-3,advance:E?i[1]:i[0]},_=a+(Wa-i[1]*l.scale),I=y.advance
const r=E?i[0]*l.scale-Wa*s:i[1]*l.scale-Wa*s
r>0&&r>b&&(b=r)}else{const t=r[l.fontStack],e=t&&t[g]
if(e&&e.rect)w=e.rect,y=e.metrics
else{const t=i[l.fontStack],e=t&&t[g]
if(!e)continue
y=e.metrics}_=(s-l.scale)*Wa}E?(e.verticalizable=!0,v.push({glyph:g,imageName:T,x:d,y:m+_,vertical:E,scale:l.scale,fontStack:l.fontStack,sectionIndex:f,metrics:y,rect:w}),d+=I*l.scale+h):(v.push({glyph:g,imageName:T,x:d,y:m+_,vertical:E,scale:l.scale,fontStack:l.fontStack,sectionIndex:f,metrics:y,rect:w}),d+=y.advance*l.scale+h)}0!==v.length&&(f=Math.max(d-h,f),Fl(v,0,v.length-1,_,b)),d=0
const w=o*s+b
l.lineOffset=Math.max(b,a),m+=w,g=Math.max(w,g),++y}var x
const v=m-Tl,{horizontalAlign:b,verticalAlign:w}=Rl(a);(function(t,e,i,r,n,s,o,a,l){const c=(e-i)*n
let h=0
h=s!==o?-a*r-Tl:(-r*l+.5)*o
for(const u of t)for(const t of u.positionedGlyphs)t.x+=c,t.y+=h})(e.positionedLines,_,b,w,f,g,o,v,s.length),e.top+=-w*v,e.bottom=e.top+v,e.left+=-b*f,e.right=e.left+f}(w,i,r,n,y,a,l,c,p,h,d,g),!function(t){for(const e of t)if(0!==e.positionedGlyphs.length)return!1
return!0}(b)&&w}const zl={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},Cl={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0}
function Pl(t,e,i,r,n,s){if(e.imageName){const t=r[e.imageName]
return t?t.displaySize[0]*e.scale*Wa/s+n:0}{const r=i[e.fontStack],s=r&&r[t]
return s?s.metrics.advance*e.scale+n:0}}function kl(t,e,i,r){const n=Math.pow(t-e,2)
return r?t<e?n/2:2*n:n+Math.abs(i)*i}function Ml(t,e,i){let r=0
return 10===t&&(r-=1e4),i&&(r+=150),40!==t&&65288!==t||(r+=50),41!==e&&65289!==e||(r+=50),r}function Dl(t,e,i,r,n,s){let o=null,a=kl(e,i,n,s)
for(const l of r){const t=kl(e-l.x,i,n,s)+l.badness
t<=a&&(o=l,a=t)}return{index:t,x:e,priorBreak:o,badness:a}}function Ll(t){return t?Ll(t.priorBreak).concat(t.index):[]}function Bl(t,e,i,r,n,s,o){if("point"!==s)return[]
if(!t)return[]
const a=[],l=function(t,e,i,r,n,s){let o=0
for(let a=0;a<t.length();a++){const i=t.getSection(a)
o+=Pl(t.getCharCode(a),i,r,n,e,s)}return o/Math.max(1,Math.ceil(o/i))}(t,e,i,r,n,o),c=t.text.indexOf("​")>=0
let h=0
for(let p=0;p<t.length();p++){const i=t.getSection(p),s=t.getCharCode(p)
if(zl[s]||(h+=Pl(s,i,r,n,e,o)),p<t.length()-1){const e=!((u=s)<11904||!(Ir["Bopomofo Extended"](u)||Ir.Bopomofo(u)||Ir["CJK Compatibility Forms"](u)||Ir["CJK Compatibility Ideographs"](u)||Ir["CJK Compatibility"](u)||Ir["CJK Radicals Supplement"](u)||Ir["CJK Strokes"](u)||Ir["CJK Symbols and Punctuation"](u)||Ir["CJK Unified Ideographs Extension A"](u)||Ir["CJK Unified Ideographs"](u)||Ir["Enclosed CJK Letters and Months"](u)||Ir["Halfwidth and Fullwidth Forms"](u)||Ir.Hiragana(u)||Ir["Ideographic Description Characters"](u)||Ir["Kangxi Radicals"](u)||Ir["Katakana Phonetic Extensions"](u)||Ir.Katakana(u)||Ir["Vertical Forms"](u)||Ir["Yi Radicals"](u)||Ir["Yi Syllables"](u)));(Cl[s]||e||i.imageName)&&a.push(Dl(p+1,h,l,a,Ml(s,t.getCharCode(p+1),e&&c),!1))}}var u
return Ll(Dl(t.length(),h,l,a,0,!0))}function Rl(t){let e=.5,i=.5
switch(t){case"right":case"top-right":case"bottom-right":e=1
break
case"left":case"top-left":case"bottom-left":e=0}switch(t){case"bottom":case"bottom-right":case"bottom-left":i=1
break
case"top":case"top-right":case"top-left":i=0}return{horizontalAlign:e,verticalAlign:i}}function Fl(t,e,i,r,n){if(!r&&!n)return
const s=t[i],o=(t[i].x+s.metrics.advance*s.scale)*r
for(let a=e;a<=i;a++)t[a].x-=o,t[a].y+=n}function Ol(t,e,i){const{horizontalAlign:r,verticalAlign:n}=Rl(i),s=e[0]-t.displaySize[0]*r,o=e[1]-t.displaySize[1]*n
return{image:t,top:o,bottom:o+t.displaySize[1],left:s,right:s+t.displaySize[0]}}function Ul(t,e,i,r,n,s){const o=t.image
let a
if(o.content){const t=o.content,e=o.pixelRatio||1
a=[t[0]/e,t[1]/e,o.displaySize[0]-t[2]/e,o.displaySize[1]-t[3]/e]}const l=e.left*s,c=e.right*s
let h,u,p,d
"width"===i||"both"===i?(d=n[0]+l-r[3],u=n[0]+c+r[1]):(d=n[0]+(l+c-o.displaySize[0])/2,u=d+o.displaySize[0])
const m=e.top*s,f=e.bottom*s
return"height"===i||"both"===i?(h=n[1]+m-r[0],p=n[1]+f+r[2]):(h=n[1]+(m+f-o.displaySize[1])/2,p=h+o.displaySize[1]),{image:o,top:h,right:u,bottom:p,left:d,collisionPadding:a}}const Vl=128
function Nl(t,e){const{expression:i}=e
if("constant"===i.kind)return{kind:"constant",layoutSize:i.evaluate(new Zr(t+1))}
if("source"===i.kind)return{kind:"source"}
{const{zoomStops:e,interpolationType:r}=i
let n=0
for(;n<e.length&&e[n]<=t;)n++
n=Math.max(0,n-1)
let s=n
for(;s<e.length&&e[s]<t+1;)s++
s=Math.min(e.length-1,s)
const o=e[n],a=e[s]
return"composite"===i.kind?{kind:"composite",minZoom:o,maxZoom:a,interpolationType:r}:{kind:"camera",minZoom:o,maxZoom:a,minSize:i.evaluate(new Zr(o)),maxSize:i.evaluate(new Zr(a)),interpolationType:r}}}class $l extends T{constructor(t,e,i,r){super(t,e),this.angle=i,void 0!==r&&(this.segment=r)}clone(){return new $l(this.x,this.y,this.angle,this.segment)}}function ql(t,e,i,r,n){if(void 0===e.segment)return!0
let s=e,o=e.segment+1,a=0
for(;a>-i/2;){if(o--,o<0)return!1
a-=t[o].dist(s),s=t[o]}a+=t[o].dist(t[o+1]),o++
const l=[]
let c=0
for(;a<i/2;){const e=t[o],i=t[o+1]
if(!i)return!1
let s=t[o-1].angleTo(e)-e.angleTo(i)
for(s=Math.abs((s+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:a,angleDelta:s}),c+=s;a-l[0].distance>r;)c-=l.shift().angleDelta
if(c>n)return!1
o++,a+=e.dist(i)}return!0}function Gl(t){let e=0
for(let i=0;i<t.length-1;i++)e+=t[i].dist(t[i+1])
return e}function jl(t,e,i){return t?.6*e*i:0}function Zl(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function Xl(t,e,i,r,n,s){const o=jl(i,n,s),a=Zl(i,r)*s
let l=0
const c=Gl(t)/2
for(let h=0;h<t.length-1;h++){const i=t[h],r=t[h+1],n=i.dist(r)
if(l+n>c){const s=(c-l)/n,u=we(i.x,r.x,s),p=we(i.y,r.y,s),d=new $l(u,p,r.angleTo(i),h)
return d._round(),!o||ql(t,d,a,o,e)?d:void 0}l+=n}}function Wl(t,e,i,r,n,s,o,a,l){const c=jl(r,s,o),h=Zl(r,n),u=h*o,p=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l
return e-u<e/4&&(e=u+e/4),Hl(t,p?e/2*a%e:(h/2+2*s)*o*a%e,e,c,i,u,p,!1,l)}function Hl(t,e,i,r,n,s,o,a,l){const c=s/2,h=Gl(t)
let u=0,p=e-i,d=[]
for(let m=0;m<t.length-1;m++){const e=t[m],o=t[m+1],a=e.dist(o),f=o.angleTo(e)
for(;p+i<u+a;){p+=i
const g=(p-u)/a,_=we(e.x,o.x,g),y=we(e.y,o.y,g)
if(_>=0&&_<l&&y>=0&&y<l&&p-c>=0&&p+c<=h){const e=new $l(_,y,f,m)
e._round(),r&&!ql(t,e,s,r,n)||d.push(e)}}u+=a}return a||d.length||o||(d=Hl(t,u/2,i,r,n,s,o,!0,l)),d}function Kl(t,e,i,r,n){const s=[]
for(let o=0;o<t.length;o++){const a=t[o]
let l
for(let t=0;t<a.length-1;t++){let o=a[t],c=a[t+1]
o.x<e&&c.x<e||(o.x<e?o=new T(e,o.y+(e-o.x)/(c.x-o.x)*(c.y-o.y))._round():c.x<e&&(c=new T(e,o.y+(e-o.x)/(c.x-o.x)*(c.y-o.y))._round()),o.y<i&&c.y<i||(o.y<i?o=new T(o.x+(i-o.y)/(c.y-o.y)*(c.x-o.x),i)._round():c.y<i&&(c=new T(o.x+(i-o.y)/(c.y-o.y)*(c.x-o.x),i)._round()),o.x>=r&&c.x>=r||(o.x>=r?o=new T(r,o.y+(r-o.x)/(c.x-o.x)*(c.y-o.y))._round():c.x>=r&&(c=new T(r,o.y+(r-o.x)/(c.x-o.x)*(c.y-o.y))._round()),o.y>=n&&c.y>=n||(o.y>=n?o=new T(o.x+(n-o.y)/(c.y-o.y)*(c.x-o.x),n)._round():c.y>=n&&(c=new T(o.x+(n-o.y)/(c.y-o.y)*(c.x-o.x),n)._round()),l&&o.equals(l[l.length-1])||(l=[o],s.push(l)),l.push(c)))))}}return s}function Yl(t,e,i,r){const n=[],s=t.image,o=s.pixelRatio,a=s.paddedRect.w-2,l=s.paddedRect.h-2,c=t.right-t.left,h=t.bottom-t.top,u=s.stretchX||[[0,a]],p=s.stretchY||[[0,l]],d=(t,e)=>t+e[1]-e[0],m=u.reduce(d,0),f=p.reduce(d,0),g=a-m,_=l-f
let y=0,x=m,v=0,b=f,w=0,S=g,I=0,E=_
if(s.content&&r){const t=s.content
y=Jl(u,0,t[0]),v=Jl(p,0,t[1]),x=Jl(u,t[0],t[2]),b=Jl(p,t[1],t[3]),w=t[0]-y,I=t[1]-v,S=t[2]-t[0]-x,E=t[3]-t[1]-b}const A=(r,n,a,l)=>{const u=tc(r.stretch-y,x,c,t.left),p=ec(r.fixed-w,S,r.stretch,m),d=tc(n.stretch-v,b,h,t.top),g=ec(n.fixed-I,E,n.stretch,f),_=tc(a.stretch-y,x,c,t.left),A=ec(a.fixed-w,S,a.stretch,m),z=tc(l.stretch-v,b,h,t.top),C=ec(l.fixed-I,E,l.stretch,f),P=new T(u,d),k=new T(_,d),M=new T(_,z),D=new T(u,z),L=new T(p/o,g/o),B=new T(A/o,C/o),R=e*Math.PI/180
if(R){const t=Math.sin(R),e=Math.cos(R),i=[e,-t,t,e]
P._matMult(i),k._matMult(i),D._matMult(i),M._matMult(i)}const F=r.stretch+r.fixed,O=n.stretch+n.fixed
return{tl:P,tr:k,bl:D,br:M,tex:{x:s.paddedRect.x+1+F,y:s.paddedRect.y+1+O,w:a.stretch+a.fixed-F,h:l.stretch+l.fixed-O},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:L,pixelOffsetBR:B,minFontScaleX:S/o/c,minFontScaleY:E/o/h,isSDF:i}}
if(r&&(s.stretchX||s.stretchY)){const t=Ql(u,g,m),e=Ql(p,_,f)
for(let i=0;i<t.length-1;i++){const r=t[i],s=t[i+1]
for(let t=0;t<e.length-1;t++)n.push(A(r,e[t],s,e[t+1]))}}else n.push(A({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:a+1},{fixed:0,stretch:l+1}))
return n}function Jl(t,e,i){let r=0
for(const n of t)r+=Math.max(e,Math.min(i,n[1]))-Math.max(e,Math.min(i,n[0]))
return r}function Ql(t,e,i){const r=[{fixed:-1,stretch:0}]
for(const[n,s]of t){const t=r[r.length-1]
r.push({fixed:n-t.stretch,stretch:t.stretch}),r.push({fixed:n-t.stretch,stretch:t.stretch+(s-n)})}return r.push({fixed:e+1,stretch:i}),r}function tc(t,e,i,r){return t/e*i+r}function ec(t,e,i,r){return t-e*i/r}vr("Anchor",$l)
class ic{constructor(t,e,i,r,n,s,o,a,l,c){if(this.boxStartIndex=t.length,l){let t=s.top,e=s.bottom
const i=s.collisionPadding
i&&(t-=i[1],e+=i[3])
let r=e-t
r>0&&(r=Math.max(10,r),this.circleDiameter=r)}else{let l=s.top*o-a,h=s.bottom*o+a,u=s.left*o-a,p=s.right*o+a
const d=s.collisionPadding
if(d&&(u-=d[0]*o,l-=d[1]*o,p+=d[2]*o,h+=d[3]*o),c){const t=new T(u,l),e=new T(p,l),i=new T(u,h),r=new T(p,h),n=c*Math.PI/180
t._rotate(n),e._rotate(n),i._rotate(n),r._rotate(n),u=Math.min(t.x,e.x,i.x,r.x),p=Math.max(t.x,e.x,i.x,r.x),l=Math.min(t.y,e.y,i.y,r.y),h=Math.max(t.y,e.y,i.y,r.y)}t.emplaceBack(e.x,e.y,u,l,p,h,i,r,n)}this.boxEndIndex=t.length}}class rc{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nc
if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let i=(this.length>>1)-1;i>=0;i--)this._down(i)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return
const t=this.data[0],e=this.data.pop()
return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:i}=this,r=e[t]
for(;t>0;){const n=t-1>>1,s=e[n]
if(i(r,s)>=0)break
e[t]=s,t=n}e[t]=r}_down(t){const{data:e,compare:i}=this,r=this.length>>1,n=e[t]
for(;t<r;){let r=1+(t<<1),s=e[r]
const o=r+1
if(o<this.length&&i(e[o],s)<0&&(r=o,s=e[o]),i(s,n)>=0)break
e[t]=s,t=r}e[t]=n}}function nc(t,e){return t<e?-1:t>e?1:0}function sc(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=1/0,n=1/0,s=-1/0,o=-1/0
const a=t[0]
for(let d=0;d<a.length;d++){const t=a[d];(!d||t.x<r)&&(r=t.x),(!d||t.y<n)&&(n=t.y),(!d||t.x>s)&&(s=t.x),(!d||t.y>o)&&(o=t.y)}const l=Math.min(s-r,o-n)
let c=l/2
const h=new rc([],oc)
if(0===l)return new T(r,n)
for(let d=r;d<s;d+=l)for(let e=n;e<o;e+=l)h.push(new ac(d+c,e+c,c,t))
let u=function(t){let e=0,i=0,r=0
const n=t[0]
for(let s=0,o=n.length,a=o-1;s<o;a=s++){const t=n[s],o=n[a],l=t.x*o.y-o.x*t.y
i+=(t.x+o.x)*l,r+=(t.y+o.y)*l,e+=3*l}return new ac(i/e,r/e,0,t)}(t),p=h.length
for(;h.length;){const r=h.pop();(r.d>u.d||!u.d)&&(u=r,i&&console.log("found best %d after %d probes",Math.round(1e4*r.d)/1e4,p)),r.max-u.d<=e||(c=r.h/2,h.push(new ac(r.p.x-c,r.p.y-c,c,t)),h.push(new ac(r.p.x+c,r.p.y-c,c,t)),h.push(new ac(r.p.x-c,r.p.y+c,c,t)),h.push(new ac(r.p.x+c,r.p.y+c,c,t)),p+=4)}return i&&(console.log(`num probes: ${p}`),console.log(`best distance: ${u.d}`)),u.p}function oc(t,e){return e.max-t.max}function ac(t,e,i,r){this.p=new T(t,e),this.h=i,this.d=function(t,e){let i=!1,r=1/0
for(let n=0;n<e.length;n++){const s=e[n]
for(let e=0,n=s.length,o=n-1;e<n;o=e++){const n=s[e],a=s[o]
n.y>t.y!=a.y>t.y&&t.x<(a.x-n.x)*(t.y-n.y)/(a.y-n.y)+n.x&&(i=!i),r=Math.min(r,Xs(t,n,a))}}return(i?1:-1)*Math.sqrt(r)}(this.p,r),this.max=this.d+this.h*Math.SQRT2}const lc=Number.POSITIVE_INFINITY
function cc(t,e){return e[1]!==lc?function(t,e,i){let r=0,n=0
switch(e=Math.abs(e),i=Math.abs(i),t){case"top-right":case"top-left":case"top":n=i-7
break
case"bottom-right":case"bottom-left":case"bottom":n=7-i}switch(t){case"top-right":case"bottom-right":case"right":r=-e
break
case"top-left":case"bottom-left":case"left":r=e}return[r,n]}(t,e[0],e[1]):function(t,e){let i=0,r=0
e<0&&(e=0)
const n=e/Math.sqrt(2)
switch(t){case"top-right":case"top-left":r=n-7
break
case"bottom-right":case"bottom-left":r=7-n
break
case"bottom":r=7-e
break
case"top":r=e-7}switch(t){case"top-right":case"bottom-right":i=-n
break
case"top-left":case"bottom-left":i=n
break
case"left":i=e
break
case"right":i=-e}return[i,r]}(t,e[0])}function hc(t){switch(t){case"right":case"top-right":case"bottom-right":return"right"
case"left":case"top-left":case"bottom-left":return"left"}return"center"}function uc(e,i,r,n,s,o,a,l,c,h,u){let p=o.textMaxSize.evaluate(i,{})
void 0===p&&(p=a)
const d=e.layers[0].layout,f=d.get("icon-offset").evaluate(i,{},u),g=mc(r.horizontal),_=a/24,y=e.tilePixelRatio*_,x=e.tilePixelRatio*p/24,v=e.tilePixelRatio*l,b=e.tilePixelRatio*d.get("symbol-spacing"),w=d.get("text-padding")*e.tilePixelRatio,S=d.get("icon-padding")*e.tilePixelRatio,T=d.get("text-max-angle")/180*Math.PI,I="viewport"!==d.get("text-rotation-alignment")&&"point"!==d.get("symbol-placement"),E="map"===d.get("icon-rotation-alignment")&&"point"!==d.get("symbol-placement"),A=d.get("symbol-placement"),z=b/2,C=d.get("icon-text-fit")
let P
n&&"none"!==C&&(e.allowVerticalPlacement&&r.vertical&&(P=Ul(n,r.vertical,C,d.get("icon-text-fit-padding"),f,_)),g&&(n=Ul(n,g,C,d.get("icon-text-fit-padding"),f,_)))
const k=(l,p)=>{p.x<0||p.x>=Ds||p.y<0||p.y>=Ds||function(e,i,r,n,s,o,a,l,c,h,u,p,d,f,g,_,y,x,v,b,w,S,T,I,E){const A=e.addToLineVertexArray(i,r)
let z,C,P,k,M=0,D=0,L=0,B=0,R=-1,F=-1
const O={}
let U=ds(""),V=0,N=0
if(void 0===l._unevaluatedLayout.getValue("text-radial-offset")?[V,N]=l.layout.get("text-offset").evaluate(w,{},I).map((t=>t*Wa)):(V=l.layout.get("text-radial-offset").evaluate(w,{},I)*Wa,N=lc),e.allowVerticalPlacement&&n.vertical){const t=l.layout.get("text-rotate").evaluate(w,{},I)+90
P=new ic(c,i,h,u,p,n.vertical,d,f,g,t),a&&(k=new ic(c,i,h,u,p,a,y,x,g,t))}if(s){const r=l.layout.get("icon-rotate").evaluate(w,{}),n="none"!==l.layout.get("icon-text-fit"),o=Yl(s,r,T,n),d=a?Yl(a,r,T,n):void 0
C=new ic(c,i,h,u,p,s,y,x,!1,r),M=4*o.length
const f=e.iconSizeData
let g=null
"source"===f.kind?(g=[Vl*l.layout.get("icon-size").evaluate(w,{})],g[0]>pc&&m(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)):"composite"===f.kind&&(g=[Vl*S.compositeIconSizes[0].evaluate(w,{},I),Vl*S.compositeIconSizes[1].evaluate(w,{},I)],(g[0]>pc||g[1]>pc)&&m(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)),e.addSymbols(e.icon,o,g,b,v,w,t.WritingMode.none,i,A.lineStartIndex,A.lineLength,-1,I),R=e.icon.placedSymbolArray.length-1,d&&(D=4*d.length,e.addSymbols(e.icon,d,g,b,v,w,t.WritingMode.vertical,i,A.lineStartIndex,A.lineLength,-1,I),F=e.icon.placedSymbolArray.length-1)}const $=Object.keys(n.horizontal)
for(const m of $){const r=n.horizontal[m]
if(!z){U=ds(r.text)
const t=l.layout.get("text-rotate").evaluate(w,{},I)
z=new ic(c,i,h,u,p,r,d,f,g,t)}const s=1===r.positionedLines.length
if(L+=dc(e,i,r,o,l,g,w,_,A,n.vertical?t.WritingMode.horizontal:t.WritingMode.horizontalOnly,s?$:[m],O,R,S,I),s)break}n.vertical&&(B+=dc(e,i,n.vertical,o,l,g,w,_,A,t.WritingMode.vertical,["vertical"],O,F,S,I))
const q=z?z.boxStartIndex:e.collisionBoxArray.length,G=z?z.boxEndIndex:e.collisionBoxArray.length,j=P?P.boxStartIndex:e.collisionBoxArray.length,Z=P?P.boxEndIndex:e.collisionBoxArray.length,X=C?C.boxStartIndex:e.collisionBoxArray.length,W=C?C.boxEndIndex:e.collisionBoxArray.length,H=k?k.boxStartIndex:e.collisionBoxArray.length,K=k?k.boxEndIndex:e.collisionBoxArray.length
let Y=-1
const J=(t,e)=>t&&t.circleDiameter?Math.max(t.circleDiameter,e):e
Y=J(z,Y),Y=J(P,Y),Y=J(C,Y),Y=J(k,Y)
const Q=Y>-1?1:0
Q&&(Y*=E/Wa),e.glyphOffsetArray.length>=Sc.MAX_GLYPHS&&m("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==w.sortKey&&e.addToSortKeyRanges(e.symbolInstances.length,w.sortKey),e.symbolInstances.emplaceBack(i.x,i.y,O.right>=0?O.right:-1,O.center>=0?O.center:-1,O.left>=0?O.left:-1,O.vertical||-1,R,F,U,q,G,j,Z,X,W,H,K,h,L,B,M,D,Q,0,d,V,N,Y)}(e,p,l,r,n,s,P,e.layers[0],e.collisionBoxArray,i.index,i.sourceLayerIndex,e.index,y,w,I,c,v,S,E,f,i,o,h,u,a)}
if("line"===A)for(const t of Kl(i.geometry,0,0,Ds,Ds)){const i=Wl(t,b,T,r.vertical||g,n,24,x,e.overscaling,Ds)
for(const r of i){const i=g
i&&fc(e,i.text,z,r)||k(t,r)}}else if("line-center"===A){for(const t of i.geometry)if(t.length>1){const e=Xl(t,T,r.vertical||g,n,24,x)
e&&k(t,e)}}else if("Polygon"===i.type)for(const t of Qo(i.geometry,0)){const e=sc(t,16)
k(t[0],new $l(e.x,e.y,0))}else if("LineString"===i.type)for(const t of i.geometry)k(t,new $l(t[0].x,t[0].y,0))
else if("Point"===i.type)for(const t of i.geometry)for(const e of t)k([e],new $l(e.x,e.y,0))}const pc=32640
function dc(t,e,i,r,n,s,o,a,l,c,h,u,p,d,f){const g=function(t,e,i,r,n,s,o,a){const l=r.layout.get("text-rotate").evaluate(s,{})*Math.PI/180,c=[]
for(const h of e.positionedLines)for(const t of h.positionedGlyphs){if(!t.rect)continue
const r=t.rect||{}
let s=4,u=!0,p=1,d=0
const m=(n||a)&&t.vertical,f=t.metrics.advance*t.scale/2
if(a&&e.verticalizable){const e=(t.scale-1)*Wa,i=(Wa-t.metrics.width*t.scale)/2
d=h.lineOffset/2-(t.imageName?-i:e)}if(t.imageName){const e=o[t.imageName]
u=e.sdf,p=e.pixelRatio,s=1/p}const g=n?[t.x+f,t.y]:[0,0]
let _=n?[0,0]:[t.x+f+i[0],t.y+i[1]-d],y=[0,0]
m&&(y=_,_=[0,0])
const x=(t.metrics.left-s)*t.scale-f+_[0],v=(-t.metrics.top-s)*t.scale+_[1],b=x+r.w*t.scale/p,w=v+r.h*t.scale/p,S=new T(x,v),I=new T(b,v),E=new T(x,w),A=new T(b,w)
if(m){const e=new T(-f,f-Tl),i=-Math.PI/2,r=12-f,n=new T(22-r,-(t.imageName?r:0)),s=new T(...y)
S._rotateAround(i,e)._add(n)._add(s),I._rotateAround(i,e)._add(n)._add(s),E._rotateAround(i,e)._add(n)._add(s),A._rotateAround(i,e)._add(n)._add(s)}if(l){const t=Math.sin(l),e=Math.cos(l),i=[e,-t,t,e]
S._matMult(i),I._matMult(i),E._matMult(i),A._matMult(i)}const z=new T(0,0),C=new T(0,0)
c.push({tl:S,tr:I,bl:E,br:A,tex:r,writingMode:e.writingMode,glyphOffset:g,sectionIndex:t.sectionIndex,isSDF:u,pixelOffsetTL:z,pixelOffsetBR:C,minFontScaleX:0,minFontScaleY:0})}return c}(0,i,a,n,s,o,r,t.allowVerticalPlacement),_=t.textSizeData
let y=null
"source"===_.kind?(y=[Vl*n.layout.get("text-size").evaluate(o,{})],y[0]>pc&&m(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)):"composite"===_.kind&&(y=[Vl*d.compositeTextSizes[0].evaluate(o,{},f),Vl*d.compositeTextSizes[1].evaluate(o,{},f)],(y[0]>pc||y[1]>pc)&&m(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)),t.addSymbols(t.text,g,y,a,s,o,c,e,l.lineStartIndex,l.lineLength,p,f)
for(const m of h)u[m]=t.text.placedSymbolArray.length-1
return 4*g.length}function mc(t){for(const e in t)return t[e]
return null}function fc(t,e,i,r){const n=t.compareText
if(e in n){const t=n[e]
for(let e=t.length-1;e>=0;e--)if(r.dist(t[e])<i)return!0}else n[e]=[]
return n[e].push(r),!1}const gc=la.VectorTileFeature.types,_c=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}]
function yc(t,e,i,r,n,s,o,a,l,c,h,u,p){const d=a?Math.min(pc,Math.round(a[0])):0,m=a?Math.min(pc,Math.round(a[1])):0
t.emplaceBack(e,i,Math.round(32*r),Math.round(32*n),s,o,(d<<1)+(l?1:0),m,16*c,16*h,256*u,256*p)}function xc(t,e,i){t.emplaceBack(e.x,e.y,i),t.emplaceBack(e.x,e.y,i),t.emplaceBack(e.x,e.y,i),t.emplaceBack(e.x,e.y,i)}function vc(t){for(const e of t.sections)if(Dr(e.text))return!0
return!1}class bc{constructor(t){this.layoutVertexArray=new Qn,this.indexArray=new ns,this.programConfigurations=t,this.segments=new ls,this.dynamicLayoutVertexArray=new ts,this.opacityVertexArray=new es,this.placedSymbolArray=new Vn}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length}upload(t,e,i,r){this.isEmpty()||(i&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Na.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,$a.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,_c,!0),this.opacityVertexBuffer.itemSize=1),(i||r)&&this.programConfigurations.upload(t))}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy())}}vr("SymbolBuffers",bc)
class wc{constructor(t,e,i){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new i,this.segments=new ls,this.collisionVertexArray=new rs}upload(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,qa.members,!0)}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy())}}vr("CollisionBuffers",wc)
class Sc{constructor(e){this.collisionBoxArray=e.collisionBoxArray,this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=e.index,this.pixelRatio=e.pixelRatio,this.sourceLayerIndex=e.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=ro([]),this.placementViewportMatrix=ro([])
const i=this.layers[0]._unevaluatedLayout._values
this.textSizeData=Nl(this.zoom,i["text-size"]),this.iconSizeData=Nl(this.zoom,i["icon-size"])
const r=this.layers[0].layout,n=r.get("symbol-sort-key"),s=r.get("symbol-z-order")
this.canOverlap="never"!==zc(r,"text-overlap","text-allow-overlap")||"never"!==zc(r,"icon-overlap","icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement"),this.sortFeaturesByKey="viewport-y"!==s&&!n.isConstant(),this.sortFeaturesByY=("viewport-y"===s||"auto"===s&&!this.sortFeaturesByKey)&&this.canOverlap,"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map((e=>t.WritingMode[e]))),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.sourceID=e.sourceID}createArrays(){this.text=new bc(new Ps(this.layers,this.zoom,(t=>/^text/.test(t)))),this.icon=new bc(new Ps(this.layers,this.zoom,(t=>/^icon/.test(t)))),this.glyphOffsetArray=new qn,this.lineVertexArray=new Gn,this.symbolInstances=new $n}calculateGlyphDependencies(t,e,i,r,n){for(let s=0;s<t.length;s++)if(e[t.charCodeAt(s)]=!0,(i||r)&&n){const i=Xa[t.charAt(s)]
i&&(e[i.charCodeAt(0)]=!0)}}populate(e,i,r){const n=this.layers[0],s=n.layout,o=s.get("text-font"),a=s.get("text-field"),l=s.get("icon-image"),c=("constant"!==a.value.kind||a.value.value instanceof Dt&&!a.value.value.isEmpty()||a.value.value.toString().length>0)&&("constant"!==o.value.kind||o.value.value.length>0),h="constant"!==l.value.kind||!!l.value.value||Object.keys(l.parameters).length>0,u=s.get("symbol-sort-key")
if(this.features=[],!c&&!h)return
const p=i.iconDependencies,d=i.glyphDependencies,m=i.availableImages,f=new Zr(this.zoom)
for(const{feature:g,id:_,index:y,sourceLayerIndex:x}of e){const e=n._featureFilter.needGeometry,i=Fs(g,e)
if(!n._featureFilter.filter(f,i,r))continue
let a,l
if(e||(i.geometry=Rs(g)),c){const t=n.getValueAndResolveTokens("text-field",i,r,m),e=Dt.factory(t)
vc(e)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===qr()||this.hasRTLText&&jr.isParsed())&&(a=Za(e,n,i))}if(h){const t=n.getValueAndResolveTokens("icon-image",i,r,m)
l=t instanceof Lt?t:Lt.fromString(t)}if(!a&&!l)continue
const v=this.sortFeaturesByKey?u.evaluate(i,{},r):void 0
if(this.features.push({id:_,text:a,icon:l,index:y,sourceLayerIndex:x,geometry:i.geometry,properties:g.properties,type:gc[g.type],sortKey:v}),l&&(p[l.name]=!0),a){const e=o.evaluate(i,{},r).join(","),n="viewport"!==s.get("text-rotation-alignment")&&"point"!==s.get("symbol-placement")
this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(t.WritingMode.vertical)>=0
for(const t of a.sections)if(t.image)p[t.image.name]=!0
else{const i=Er(a.toString()),r=t.fontStack||e,s=d[r]=d[r]||{}
this.calculateGlyphDependencies(t.text,s,n,this.allowVerticalPlacement,i)}}}"line"===s.get("symbol-placement")&&(this.features=function(t){const e={},i={},r=[]
let n=0
function s(e){r.push(t[e]),n++}function o(t,e,n){const s=i[t]
return delete i[t],i[e]=s,r[s].geometry[0].pop(),r[s].geometry[0]=r[s].geometry[0].concat(n[0]),s}function a(t,i,n){const s=e[i]
return delete e[i],e[t]=s,r[s].geometry[0].shift(),r[s].geometry[0]=n[0].concat(r[s].geometry[0]),s}function l(t,e,i){const r=i?e[0][e[0].length-1]:e[0][0]
return`${t}:${r.x}:${r.y}`}for(let c=0;c<t.length;c++){const h=t[c],u=h.geometry,p=h.text?h.text.toString():null
if(!p){s(c)
continue}const d=l(p,u),m=l(p,u,!0)
if(d in i&&m in e&&i[d]!==e[m]){const t=a(d,m,u),n=o(d,m,r[t].geometry)
delete e[d],delete i[m],i[l(p,r[n].geometry,!0)]=n,r[t].geometry=null}else d in i?o(d,m,u):m in e?a(d,m,u):(s(c),e[d]=n-1,i[m]=n-1)}return r.filter((t=>t.geometry))}(this.features)),this.sortFeaturesByKey&&this.features.sort(((t,e)=>t.sortKey-e.sortKey))}update(t,e,i){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,i),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,i))}isEmpty(){return 0===this.symbolInstances.length&&!this.hasRTLText}uploadPending(){return!this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload}upload(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0}destroyDebugData(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy()}destroy(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData()}addToLineVertexArray(t,e){const i=this.lineVertexArray.length
if(void 0!==t.segment){let i=t.dist(e[t.segment+1]),r=t.dist(e[t.segment])
const n={}
for(let s=t.segment+1;s<e.length;s++)n[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:i},s<e.length-1&&(i+=e[s+1].dist(e[s]))
for(let s=t.segment||0;s>=0;s--)n[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:r},s>0&&(r+=e[s-1].dist(e[s]))
for(let t=0;t<e.length;t++){const e=n[t]
this.lineVertexArray.emplaceBack(e.x,e.y,e.tileUnitDistanceFromAnchor)}}return{lineStartIndex:i,lineLength:this.lineVertexArray.length-i}}addSymbols(e,i,r,n,s,o,a,l,c,h,u,p){const d=e.indexArray,m=e.layoutVertexArray,f=e.segments.prepareSegment(4*i.length,m,d,this.canOverlap?o.sortKey:void 0),g=this.glyphOffsetArray.length,_=f.vertexLength,y=this.allowVerticalPlacement&&a===t.WritingMode.vertical?Math.PI/2:0,x=o.text&&o.text.sections
for(let t=0;t<i.length;t++){const{tl:n,tr:s,bl:a,br:c,tex:h,pixelOffsetTL:u,pixelOffsetBR:g,minFontScaleX:_,minFontScaleY:v,glyphOffset:b,isSDF:w,sectionIndex:S}=i[t],T=f.vertexLength,I=b[1]
yc(m,l.x,l.y,n.x,I+n.y,h.x,h.y,r,w,u.x,u.y,_,v),yc(m,l.x,l.y,s.x,I+s.y,h.x+h.w,h.y,r,w,g.x,u.y,_,v),yc(m,l.x,l.y,a.x,I+a.y,h.x,h.y+h.h,r,w,u.x,g.y,_,v),yc(m,l.x,l.y,c.x,I+c.y,h.x+h.w,h.y+h.h,r,w,g.x,g.y,_,v),xc(e.dynamicLayoutVertexArray,l,y),d.emplaceBack(T,T+1,T+2),d.emplaceBack(T+1,T+2,T+3),f.vertexLength+=4,f.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(b[0]),t!==i.length-1&&S===i[t+1].sectionIndex||e.programConfigurations.populatePaintArrays(m.length,o,o.index,{},p,x&&x[S])}e.placedSymbolArray.emplaceBack(l.x,l.y,g,this.glyphOffsetArray.length-g,_,c,h,l.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],a,0,!1,0,u)}_addCollisionDebugVertex(t,e,i,r,n,s){return e.emplaceBack(0,0),t.emplaceBack(i.x,i.y,r,n,Math.round(s.x),Math.round(s.y))}addCollisionDebugVertices(t,e,i,r,n,s,o){const a=n.segments.prepareSegment(4,n.layoutVertexArray,n.indexArray),l=a.vertexLength,c=n.layoutVertexArray,h=n.collisionVertexArray,u=o.anchorX,p=o.anchorY
this._addCollisionDebugVertex(c,h,s,u,p,new T(t,e)),this._addCollisionDebugVertex(c,h,s,u,p,new T(i,e)),this._addCollisionDebugVertex(c,h,s,u,p,new T(i,r)),this._addCollisionDebugVertex(c,h,s,u,p,new T(t,r)),a.vertexLength+=4
const d=n.indexArray
d.emplaceBack(l,l+1),d.emplaceBack(l+1,l+2),d.emplaceBack(l+2,l+3),d.emplaceBack(l+3,l),a.primitiveLength+=4}addDebugCollisionBoxes(t,e,i,r){for(let n=t;n<e;n++){const t=this.collisionBoxArray.get(n)
this.addCollisionDebugVertices(t.x1,t.y1,t.x2,t.y2,r?this.textCollisionBox:this.iconCollisionBox,t.anchorPoint,i)}}generateCollisionDebugBuffers(){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new wc(is,Ga.members,ss),this.iconCollisionBox=new wc(is,Ga.members,ss)
for(let t=0;t<this.symbolInstances.length;t++){const e=this.symbolInstances.get(t)
this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1)}}_deserializeCollisionBoxesForSymbol(t,e,i,r,n,s,o,a,l){const c={}
for(let h=e;h<i;h++){const e=t.get(h)
c.textBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.textFeatureIndex=e.featureIndex
break}for(let h=r;h<n;h++){const e=t.get(h)
c.verticalTextBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.verticalTextFeatureIndex=e.featureIndex
break}for(let h=s;h<o;h++){const e=t.get(h)
c.iconBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.iconFeatureIndex=e.featureIndex
break}for(let h=a;h<l;h++){const e=t.get(h)
c.verticalIconBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.verticalIconFeatureIndex=e.featureIndex
break}return c}deserializeCollisionBoxes(t){this.collisionArrays=[]
for(let e=0;e<this.symbolInstances.length;e++){const i=this.symbolInstances.get(e)
this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,i.textBoxStartIndex,i.textBoxEndIndex,i.verticalTextBoxStartIndex,i.verticalTextBoxEndIndex,i.iconBoxStartIndex,i.iconBoxEndIndex,i.verticalIconBoxStartIndex,i.verticalIconBoxEndIndex))}}hasTextData(){return this.text.segments.get().length>0}hasIconData(){return this.icon.segments.get().length>0}hasDebugData(){return this.textCollisionBox&&this.iconCollisionBox}hasTextCollisionBoxData(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0}hasIconCollisionBoxData(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0}addIndicesForPlacedSymbol(t,e){const i=t.placedSymbolArray.get(e),r=i.vertexStartIndex+4*i.numGlyphs
for(let n=i.vertexStartIndex;n<r;n+=4)t.indexArray.emplaceBack(n,n+1,n+2),t.indexArray.emplaceBack(n+1,n+2,n+3)}getSortedSymbolIndexes(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes
const e=Math.sin(t),i=Math.cos(t),r=[],n=[],s=[]
for(let o=0;o<this.symbolInstances.length;++o){s.push(o)
const t=this.symbolInstances.get(o)
r.push(0|Math.round(e*t.anchorX+i*t.anchorY)),n.push(t.featureIndex)}return s.sort(((t,e)=>r[t]-r[e]||n[e]-n[t])),s}addToSortKeyRanges(t,e){const i=this.sortKeyRanges[this.sortKeyRanges.length-1]
i&&i.sortKey===e?i.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1})}sortFeatures(t){if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[]
for(const t of this.symbolInstanceIndexes){const e=this.symbolInstances.get(t)
this.featureSortOrder.push(e.featureIndex),[e.rightJustifiedTextSymbolIndex,e.centerJustifiedTextSymbolIndex,e.leftJustifiedTextSymbolIndex].forEach(((t,e,i)=>{t>=0&&i.indexOf(t)===e&&this.addIndicesForPlacedSymbol(this.text,t)})),e.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,e.verticalPlacedTextSymbolIndex),e.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.placedIconSymbolIndex),e.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.verticalPlacedIconSymbolIndex)}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray)}}}vr("SymbolBucket",Sc,{omit:["layers","collisionBoxArray","features","compareText"]}),Sc.MAX_GLYPHS=65535,Sc.addDynamicAttributes=xc
const Tc=new an({"symbol-placement":new en(tt.layout_symbol["symbol-placement"]),"symbol-spacing":new en(tt.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new en(tt.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new rn(tt.layout_symbol["symbol-sort-key"]),"symbol-z-order":new en(tt.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new en(tt.layout_symbol["icon-allow-overlap"]),"icon-overlap":new en(tt.layout_symbol["icon-overlap"]),"icon-ignore-placement":new en(tt.layout_symbol["icon-ignore-placement"]),"icon-optional":new en(tt.layout_symbol["icon-optional"]),"icon-rotation-alignment":new en(tt.layout_symbol["icon-rotation-alignment"]),"icon-size":new rn(tt.layout_symbol["icon-size"]),"icon-text-fit":new en(tt.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new en(tt.layout_symbol["icon-text-fit-padding"]),"icon-image":new rn(tt.layout_symbol["icon-image"]),"icon-rotate":new rn(tt.layout_symbol["icon-rotate"]),"icon-padding":new en(tt.layout_symbol["icon-padding"]),"icon-keep-upright":new en(tt.layout_symbol["icon-keep-upright"]),"icon-offset":new rn(tt.layout_symbol["icon-offset"]),"icon-anchor":new rn(tt.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new en(tt.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new en(tt.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new en(tt.layout_symbol["text-rotation-alignment"]),"text-field":new rn(tt.layout_symbol["text-field"]),"text-font":new rn(tt.layout_symbol["text-font"]),"text-size":new rn(tt.layout_symbol["text-size"]),"text-max-width":new rn(tt.layout_symbol["text-max-width"]),"text-line-height":new en(tt.layout_symbol["text-line-height"]),"text-letter-spacing":new rn(tt.layout_symbol["text-letter-spacing"]),"text-justify":new rn(tt.layout_symbol["text-justify"]),"text-radial-offset":new rn(tt.layout_symbol["text-radial-offset"]),"text-variable-anchor":new en(tt.layout_symbol["text-variable-anchor"]),"text-anchor":new rn(tt.layout_symbol["text-anchor"]),"text-max-angle":new en(tt.layout_symbol["text-max-angle"]),"text-writing-mode":new en(tt.layout_symbol["text-writing-mode"]),"text-rotate":new rn(tt.layout_symbol["text-rotate"]),"text-padding":new en(tt.layout_symbol["text-padding"]),"text-keep-upright":new en(tt.layout_symbol["text-keep-upright"]),"text-transform":new rn(tt.layout_symbol["text-transform"]),"text-offset":new rn(tt.layout_symbol["text-offset"]),"text-allow-overlap":new en(tt.layout_symbol["text-allow-overlap"]),"text-overlap":new en(tt.layout_symbol["text-overlap"]),"text-ignore-placement":new en(tt.layout_symbol["text-ignore-placement"]),"text-optional":new en(tt.layout_symbol["text-optional"])})
var Ic={paint:new an({"icon-opacity":new rn(tt.paint_symbol["icon-opacity"]),"icon-color":new rn(tt.paint_symbol["icon-color"]),"icon-halo-color":new rn(tt.paint_symbol["icon-halo-color"]),"icon-halo-width":new rn(tt.paint_symbol["icon-halo-width"]),"icon-halo-blur":new rn(tt.paint_symbol["icon-halo-blur"]),"icon-translate":new en(tt.paint_symbol["icon-translate"]),"icon-translate-anchor":new en(tt.paint_symbol["icon-translate-anchor"]),"text-opacity":new rn(tt.paint_symbol["text-opacity"]),"text-color":new rn(tt.paint_symbol["text-color"],{runtimeType:pt,getOverride:t=>t.textColor,hasOverride:t=>!!t.textColor}),"text-halo-color":new rn(tt.paint_symbol["text-halo-color"]),"text-halo-width":new rn(tt.paint_symbol["text-halo-width"]),"text-halo-blur":new rn(tt.paint_symbol["text-halo-blur"]),"text-translate":new en(tt.paint_symbol["text-translate"]),"text-translate-anchor":new en(tt.paint_symbol["text-translate-anchor"])}),layout:Tc}
class Ec{constructor(t){this.type=t.property.overrides?t.property.overrides.runtimeType:lt,this.defaultValue=t}evaluate(t){if(t.formattedSection){const e=this.defaultValue.property.overrides
if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default}eachChild(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression)}outputDefined(){return!1}serialize(){return null}}vr("FormatSectionOverride",Ec,{omit:["defaultValue"]})
class Ac extends cn{constructor(t){super(t,Ic)}recalculate(t,e){if(super.recalculate(t,e),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]="map"===this.layout.get("text-rotation-alignment")?"map":"viewport"),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){const t=this.layout.get("text-writing-mode")
if(t){const e=[]
for(const i of t)e.indexOf(i)<0&&e.push(i)
this.layout._values["text-writing-mode"]=e}else this.layout._values["text-writing-mode"]=["horizontal"]}this._setPaintOverrides()}getValueAndResolveTokens(t,e,i,r){const n=this.layout.get(t).evaluate(e,{},i,r),s=this._unevaluatedLayout._values[t]
return s.isDataDriven()||zi(s.value)||!n?n:function(t,e){return e.replace(/{([^{}]+)}/g,((e,i)=>i in t?String(t[i]):""))}(e.properties,n)}createBucket(t){return new Sc(t)}queryRadius(){return 0}queryIntersectsFeature(){return!1}_setPaintOverrides(){for(const t of Ic.paint.overridableProperties){if(!Ac.hasPaintOverride(this.layout,t))continue
const e=this.paint.get(t),i=new Ec(e),r=new Ai(i,e.property.specification)
let n=null
n="constant"===e.value.kind||"source"===e.value.kind?new Pi("source",r):new ki("composite",r,e.value.zoomStops,e.value._interpolationType),this.paint._values[t]=new Qr(e.property,n,e.parameters)}}_handleOverridablePaintPropertyUpdate(t,e,i){return!(!this.layout||e.isDataDriven()||i.isDataDriven())&&Ac.hasPaintOverride(this.layout,t)}static hasPaintOverride(t,e){const i=t.get("text-field"),r=Ic.paint.properties[e]
let n=!1
const s=t=>{for(const e of t)if(r.overrides&&r.overrides.hasOverride(e))return void(n=!0)}
if("constant"===i.value.kind&&i.value.value instanceof Dt)s(i.value.value.sections)
else if("source"===i.value.kind){const t=e=>{n||(e instanceof Ut&&Ft(e.value)===gt?s(e.value.sections):e instanceof qt?s(e.sections):e.eachChild(t))},e=i.value
e._styleExpression&&t(e._styleExpression.expression)}return n}}function zc(t,e,i){let r="never"
const n=t.get(e)
return n?r=n:t.get(i)&&(r="always"),r}var Cc={paint:new an({"background-color":new en(tt.paint_background["background-color"]),"background-pattern":new sn(tt.paint_background["background-pattern"]),"background-opacity":new en(tt.paint_background["background-opacity"])})},Pc={paint:new an({"raster-opacity":new en(tt.paint_raster["raster-opacity"]),"raster-hue-rotate":new en(tt.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new en(tt.paint_raster["raster-brightness-min"]),"raster-brightness-max":new en(tt.paint_raster["raster-brightness-max"]),"raster-saturation":new en(tt.paint_raster["raster-saturation"]),"raster-contrast":new en(tt.paint_raster["raster-contrast"]),"raster-resampling":new en(tt.paint_raster["raster-resampling"]),"raster-fade-duration":new en(tt.paint_raster["raster-fade-duration"])})}
class kc extends cn{constructor(t){super(t,{}),this.onAdd=t=>{this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl)},this.onRemove=t=>{this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl)},this.implementation=t}is3D(){return"3d"===this.implementation.renderingMode}hasOffscreenPass(){return void 0!==this.implementation.prerender}recalculate(){}updateTransitions(){}hasTransition(){return!1}serialize(){}}const Mc={circle:class extends cn{constructor(t){super(t,eo)}createBucket(t){return new Us(t)}queryRadius(t){const e=t
return Ys("circle-radius",this,e)+Ys("circle-stroke-width",this,e)+Js(this.paint.get("circle-translate"))}queryIntersectsFeature(t,e,i,r,n,s,o,a){const l=Qs(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),s.angle,o),c=this.paint.get("circle-radius").evaluate(e,i)+this.paint.get("circle-stroke-width").evaluate(e,i),h="map"===this.paint.get("circle-pitch-alignment"),u=h?l:function(t,e){return t.map((t=>lo(t,e)))}(l,a),p=h?c*o:c
for(const d of r)for(const t of d){const e=h?t:lo(t,a)
let i=p
const r=ao([],[t.x,t.y,0,1],a)
if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?i*=r[3]/s.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(i*=s.cameraToCenterDistance/r[3]),Ns(u,e,i))return!0}return!1}},heatmap:class extends cn{constructor(t){super(t,ho),this._updateColorRamp()}createBucket(t){return new co(t)}_handleSpecialPaintPropertyUpdate(t){"heatmap-color"===t&&this._updateColorRamp()}_updateColorRamp(){this.colorRamp=_o({expression:this._transitionablePaint._values["heatmap-color"].value.expression,evaluationKey:"heatmapDensity",image:this.colorRamp}),this.colorRampTexture=null}resize(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null)}queryRadius(){return 0}queryIntersectsFeature(){return!1}hasOffscreenPass(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility}},hillshade:class extends cn{constructor(t){super(t,yo)}hasOffscreenPass(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility}},fill:class extends cn{constructor(t){super(t,sa)}recalculate(t,e){super.recalculate(t,e)
const i=this.paint._values["fill-outline-color"]
"constant"===i.value.kind&&void 0===i.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"])}createBucket(t){return new ra(t)}queryRadius(){return Js(this.paint.get("fill-translate"))}queryIntersectsFeature(t,e,i,r,n,s,o){return $s(Qs(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),s.angle,o),r)}isTileClipped(){return!0}},"fill-extrusion":class extends cn{constructor(t){super(t,Ea)}createBucket(t){return new Sa(t)}queryRadius(){return Js(this.paint.get("fill-extrusion-translate"))}is3D(){return!0}queryIntersectsFeature(t,e,i,r,n,s,o,a){const l=Qs(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),s.angle,o),c=this.paint.get("fill-extrusion-height").evaluate(e,i),h=this.paint.get("fill-extrusion-base").evaluate(e,i),u=function(t,e,i,r){const n=[]
for(const s of t){const t=[s.x,s.y,0,1]
ao(t,t,e),n.push(new T(t[0]/t[3],t[1]/t[3]))}return n}(l,a),p=function(t,e,i,r){const n=[],s=[],o=r[8]*e,a=r[9]*e,l=r[10]*e,c=r[11]*e,h=r[8]*i,u=r[9]*i,p=r[10]*i,d=r[11]*i
for(const m of t){const t=[],e=[]
for(const i of m){const n=i.x,s=i.y,m=r[0]*n+r[4]*s+r[12],f=r[1]*n+r[5]*s+r[13],g=r[2]*n+r[6]*s+r[14],_=r[3]*n+r[7]*s+r[15],y=g+l,x=_+c,v=m+h,b=f+u,w=g+p,S=_+d,I=new T((m+o)/x,(f+a)/x)
I.z=y/x,t.push(I)
const E=new T(v/S,b/S)
E.z=w/S,e.push(E)}n.push(t),s.push(e)}return[n,s]}(r,h,c,a)
return function(t,e,i){let r=1/0
$s(i,e)&&(r=za(i,e[0]))
for(let n=0;n<e.length;n++){const s=e[n],o=t[n]
for(let t=0;t<s.length-1;t++){const e=s[t],n=[e,s[t+1],o[t+1],o[t],e]
Vs(i,n)&&(r=Math.min(r,za(i,n)))}}return r!==1/0&&r}(p[0],p[1],u)}},line:class extends cn{constructor(t){super(t,Oa),this.gradientVersion=0}_handleSpecialPaintPropertyUpdate(t){"line-gradient"===t&&(this.stepInterpolant=this._transitionablePaint._values["line-gradient"].value.expression._styleExpression.expression instanceof be,this.gradientVersion=(this.gradientVersion+1)%Number.MAX_SAFE_INTEGER)}gradientExpression(){return this._transitionablePaint._values["line-gradient"].value.expression}recalculate(t,e){super.recalculate(t,e),this.paint._values["line-floorwidth"]=Ua.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,t)}createBucket(t){return new Ra(t)}queryRadius(t){const e=t,i=Va(Ys("line-width",this,e),Ys("line-gap-width",this,e)),r=Ys("line-offset",this,e)
return i/2+Math.abs(r)+Js(this.paint.get("line-translate"))}queryIntersectsFeature(t,e,i,r,n,s,o){const a=Qs(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),s.angle,o),l=o/2*Va(this.paint.get("line-width").evaluate(e,i),this.paint.get("line-gap-width").evaluate(e,i)),c=this.paint.get("line-offset").evaluate(e,i)
return c&&(r=function(t,e){const i=[]
for(let r=0;r<t.length;r++){const n=t[r],s=[]
for(let t=0;t<n.length;t++){const i=n[t-1],r=n[t],o=n[t+1],a=0===t?new T(0,0):r.sub(i)._unit()._perp(),l=t===n.length-1?new T(0,0):o.sub(r)._unit()._perp(),c=a._add(l)._unit(),h=c.x*l.x+c.y*l.y
0!==h&&c._mult(1/h),s.push(c._mult(e)._add(r))}i.push(s)}return i}(r,c*o)),function(t,e,i){for(let r=0;r<e.length;r++){const n=e[r]
if(t.length>=3)for(let e=0;e<n.length;e++)if(Hs(t,n[e]))return!0
if(qs(t,n,i))return!0}return!1}(a,r,l)}isTileClipped(){return!0}},symbol:Ac,background:class extends cn{constructor(t){super(t,Cc)}},raster:class extends cn{constructor(t){super(t,Pc)}}}
class Dc{constructor(t){this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=()=>{this._triggered=!1,this._callback()})}trigger(){this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((()=>{this._triggered=!1,this._callback()}),0))}remove(){delete this._channel,this._callback=()=>{}}}const Lc=6371008.8
class Bc{constructor(t,e){if(isNaN(t)||isNaN(e))throw new Error(`Invalid LngLat object: (${t}, ${e})`)
if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}wrap(){return new Bc(o(this.lng,-180,180),this.lat)}toArray(){return[this.lng,this.lat]}toString(){return`LngLat(${this.lng}, ${this.lat})`}distanceTo(t){const e=Math.PI/180,i=this.lat*e,r=t.lat*e,n=Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos((t.lng-this.lng)*e)
return Lc*Math.acos(Math.min(n,1))}toBounds(){const t=360*(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)/40075017,e=t/Math.cos(Math.PI/180*this.lat)
return new Rc(new Bc(this.lng-e,this.lat-t),new Bc(this.lng+e,this.lat+t))}static convert(t){if(t instanceof Bc)return t
if(Array.isArray(t)&&(2===t.length||3===t.length))return new Bc(Number(t[0]),Number(t[1]))
if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Bc(Number("lng"in t?t.lng:t.lon),Number(t.lat))
throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}}class Rc{constructor(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1]))}setNorthEast(t){return this._ne=t instanceof Bc?new Bc(t.lng,t.lat):Bc.convert(t),this}setSouthWest(t){return this._sw=t instanceof Bc?new Bc(t.lng,t.lat):Bc.convert(t),this}extend(t){const e=this._sw,i=this._ne
let r,n
if(t instanceof Bc)r=t,n=t
else{if(!(t instanceof Rc))return Array.isArray(t)?4===t.length||t.every(Array.isArray)?this.extend(Rc.convert(t)):this.extend(Bc.convert(t)):this
if(r=t._sw,n=t._ne,!r||!n)return this}return e||i?(e.lng=Math.min(r.lng,e.lng),e.lat=Math.min(r.lat,e.lat),i.lng=Math.max(n.lng,i.lng),i.lat=Math.max(n.lat,i.lat)):(this._sw=new Bc(r.lng,r.lat),this._ne=new Bc(n.lng,n.lat)),this}getCenter(){return new Bc((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)}getSouthWest(){return this._sw}getNorthEast(){return this._ne}getNorthWest(){return new Bc(this.getWest(),this.getNorth())}getSouthEast(){return new Bc(this.getEast(),this.getSouth())}getWest(){return this._sw.lng}getSouth(){return this._sw.lat}getEast(){return this._ne.lng}getNorth(){return this._ne.lat}toArray(){return[this._sw.toArray(),this._ne.toArray()]}toString(){return`LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`}isEmpty(){return!(this._sw&&this._ne)}contains(t){const{lng:e,lat:i}=Bc.convert(t)
let r=this._sw.lng<=e&&e<=this._ne.lng
return this._sw.lng>this._ne.lng&&(r=this._sw.lng>=e&&e>=this._ne.lng),this._sw.lat<=i&&i<=this._ne.lat&&r}static convert(t){return t instanceof Rc?t:t?new Rc(t):t}}const Fc=2*Math.PI*Lc
function Oc(t){return Fc*Math.cos(t*Math.PI/180)}function Uc(t){return(180+t)/360}function Vc(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function Nc(t,e){return t/Oc(e)}function $c(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}class qc{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
this.x=+t,this.y=+e,this.z=+i}static fromLngLat(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const i=Bc.convert(t)
return new qc(Uc(i.lng),Vc(i.lat),Nc(e,i.lat))}toLngLat(){return new Bc(360*this.x-180,$c(this.y))}toAltitude(){return this.z*Oc($c(this.y))}meterInMercatorCoordinateUnits(){return 1/Fc*(t=$c(this.y),1/Math.cos(t*Math.PI/180))
var t}}function Gc(t,e,i){var r=2*Math.PI*6378137/256/Math.pow(2,i)
return[t*r-2*Math.PI*6378137/2,e*r-2*Math.PI*6378137/2]}class jc{constructor(t,e,i){this.z=t,this.x=e,this.y=i,this.key=Wc(0,t,t,e,i)}equals(t){return this.z===t.z&&this.x===t.x&&this.y===t.y}url(t,e,i){const r=(s=this.y,o=this.z,a=Gc(256*(n=this.x),256*(s=Math.pow(2,o)-s-1),o),l=Gc(256*(n+1),256*(s+1),o),a[0]+","+a[1]+","+l[0]+","+l[1])
var n,s,o,a,l
const c=function(t,e,i){let r,n=""
for(let s=t;s>0;s--)r=1<<s-1,n+=(e&r?1:0)+(i&r?2:0)
return n}(this.z,this.x,this.y)
return t[(this.x+this.y)%t.length].replace(/{prefix}/g,(this.x%16).toString(16)+(this.y%16).toString(16)).replace(/{z}/g,String(this.z)).replace(/{x}/g,String(this.x)).replace(/{y}/g,String("tms"===i?Math.pow(2,this.z)-this.y-1:this.y)).replace(/{ratio}/g,e>1?"@2x":"").replace(/{quadkey}/g,c).replace(/{bbox-epsg-3857}/g,r)}getTilePoint(t){const e=Math.pow(2,this.z)
return new T((t.x*e-this.x)*Ds,(t.y*e-this.y)*Ds)}toString(){return`${this.z}/${this.x}/${this.y}`}}class Zc{constructor(t,e){this.wrap=t,this.canonical=e,this.key=Wc(t,e.z,e.z,e.x,e.y)}}class Xc{constructor(t,e,i,r,n){this.overscaledZ=t,this.wrap=e,this.canonical=new jc(i,+r,+n),this.key=Wc(e,t,i,r,n)}equals(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)}scaledTo(t){const e=this.canonical.z-t
return t>this.canonical.z?new Xc(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Xc(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)}calculateScaledKey(t,e){const i=this.canonical.z-t
return t>this.canonical.z?Wc(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y):Wc(this.wrap*+e,t,t,this.canonical.x>>i,this.canonical.y>>i)}isChildOf(t){if(t.wrap!==this.wrap)return!1
const e=this.canonical.z-t.canonical.z
return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e}children(t){if(this.overscaledZ>=t)return[new Xc(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)]
const e=this.canonical.z+1,i=2*this.canonical.x,r=2*this.canonical.y
return[new Xc(e,this.wrap,e,i,r),new Xc(e,this.wrap,e,i+1,r),new Xc(e,this.wrap,e,i,r+1),new Xc(e,this.wrap,e,i+1,r+1)]}isLessThan(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))}wrapped(){return new Xc(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)}unwrapTo(t){return new Xc(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)}overscaleFactor(){return Math.pow(2,this.overscaledZ-this.canonical.z)}toUnwrapped(){return new Zc(this.wrap,this.canonical)}toString(){return`${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`}getTilePoint(t){return this.canonical.getTilePoint(new qc(t.x-this.wrap,t.y))}}function Wc(t,e,i,r,n){(t*=2)<0&&(t=-1*t-1)
const s=1<<i
return(s*s*t+s*n+r).toString(36)+i.toString(36)+e.toString(36)}vr("CanonicalTileID",jc),vr("OverscaledTileID",Xc,{omit:["posMatrix"]})
class Hc{constructor(t,e,i){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square")
if(i&&"mapbox"!==i&&"terrarium"!==i)return void m(`"${i}" is not a valid encoding type. Valid types include "mapbox" and "terrarium".`)
this.stride=e.height
const r=this.dim=e.height-2
this.data=new Uint32Array(e.data.buffer),this.encoding=i||"mapbox"
for(let n=0;n<r;n++)this.data[this._idx(-1,n)]=this.data[this._idx(0,n)],this.data[this._idx(r,n)]=this.data[this._idx(r-1,n)],this.data[this._idx(n,-1)]=this.data[this._idx(n,0)],this.data[this._idx(n,r)]=this.data[this._idx(n,r-1)]
this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(r,-1)]=this.data[this._idx(r-1,0)],this.data[this._idx(-1,r)]=this.data[this._idx(0,r-1)],this.data[this._idx(r,r)]=this.data[this._idx(r-1,r-1)]}get(t,e){const i=new Uint8Array(this.data.buffer),r=4*this._idx(t,e)
return("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(i[r],i[r+1],i[r+2])}getUnpackVector(){return"terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]}_idx(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data")
return(e+1)*this.stride+(t+1)}_unpackMapbox(t,e,i){return(256*t*256+256*e+i)/10-1e4}_unpackTerrarium(t,e,i){return 256*t+e+i/256-32768}getPixels(){return new go({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))}backfillBorder(t,e,i){if(this.dim!==t.dim)throw new Error("dem dimension mismatch")
let r=e*this.dim,n=e*this.dim+this.dim,s=i*this.dim,o=i*this.dim+this.dim
switch(e){case-1:r=n-1
break
case 1:n=r+1}switch(i){case-1:s=o-1
break
case 1:o=s+1}const a=-e*this.dim,l=-i*this.dim
for(let c=s;c<o;c++)for(let e=r;e<n;e++)this.data[this._idx(e,c)]=t.data[this._idx(e+a,c+l)]}}vr("DEMData",Hc)
class Kc{constructor(t){this._stringToNumber={},this._numberToString=[]
for(let e=0;e<t.length;e++){const i=t[e]
this._stringToNumber[i]=e,this._numberToString[e]=i}}encode(t){return this._stringToNumber[t]}decode(t){return this._numberToString[t]}}class Yc{constructor(t,e,i,r,n){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=i,t._y=r,this.properties=t.properties,this.id=n}get geometry(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry}set geometry(t){this._geometry=t}toJSON(){const t={geometry:this.geometry}
for(const e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e])
return t}}class Jc{constructor(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new yr(Ds,16,0),this.grid3D=new yr(Ds,16,0),this.featureIndexArray=new Zn,this.promoteId=e}insert(t,e,i,r,n,s){const o=this.featureIndexArray.length
this.featureIndexArray.emplaceBack(i,r,n)
const a=s?this.grid3D:this.grid
for(let l=0;l<e.length;l++){const t=e[l],i=[1/0,1/0,-1/0,-1/0]
for(let e=0;e<t.length;e++){const r=t[e]
i[0]=Math.min(i[0],r.x),i[1]=Math.min(i[1],r.y),i[2]=Math.max(i[2],r.x),i[3]=Math.max(i[3],r.y)}i[0]<Ds&&i[1]<Ds&&i[2]>=0&&i[3]>=0&&a.insert(o,i[0],i[1],i[2],i[3])}}loadVTLayers(){return this.vtLayers||(this.vtLayers=new la.VectorTile(new Ha(this.rawTileData)).layers,this.sourceLayerCoder=new Kc(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers}query(t,e,i,r){this.loadVTLayers()
const n=t.params||{},s=Ds/t.tileSize/t.scale,o=qi(n.filter),a=t.queryGeometry,l=t.queryPadding*s,c=th(a),h=this.grid.query(c.minX-l,c.minY-l,c.maxX+l,c.maxY+l),u=th(t.cameraQueryGeometry),p=this.grid3D.query(u.minX-l,u.minY-l,u.maxX+l,u.maxY+l,((e,i,r,n)=>function(t,e,i,r,n){for(const o of t)if(e<=o.x&&i<=o.y&&r>=o.x&&n>=o.y)return!0
const s=[new T(e,i),new T(e,n),new T(r,n),new T(r,i)]
if(t.length>2)for(const o of s)if(Hs(t,o))return!0
for(let o=0;o<t.length-1;o++)if(Ks(t[o],t[o+1],s))return!0
return!1}(t.cameraQueryGeometry,e-l,i-l,r+l,n+l)))
for(const f of p)h.push(f)
h.sort(eh)
const d={}
let m
for(let f=0;f<h.length;f++){const l=h[f]
if(l===m)continue
m=l
const c=this.featureIndexArray.get(l)
let u=null
this.loadMatchingFeature(d,c.bucketIndex,c.sourceLayerIndex,c.featureIndex,o,n.layers,n.availableImages,e,i,r,((e,i,r)=>(u||(u=Rs(e)),i.queryIntersectsFeature(a,e,r,u,this.z,t.transform,s,t.pixelPosMatrix))))}return d}loadMatchingFeature(t,e,i,r,n,s,o,l,c,h,u){const p=this.bucketLayerIDs[e]
if(s&&!function(t,e){for(let i=0;i<t.length;i++)if(e.indexOf(t[i])>=0)return!0
return!1}(s,p))return
const d=this.sourceLayerCoder.decode(i),m=this.vtLayers[d].feature(r)
if(n.needGeometry){const t=Fs(m,!0)
if(!n.filter(new Zr(this.tileID.overscaledZ),t,this.tileID.canonical))return}else if(!n.filter(new Zr(this.tileID.overscaledZ),m))return
const f=this.getId(m,d)
for(let g=0;g<p.length;g++){const e=p[g]
if(s&&s.indexOf(e)<0)continue
const i=l[e]
if(!i)continue
let n={}
f&&h&&(n=h.getState(i.sourceLayer||"_geojsonTileLayer",f))
const d=a({},c[e])
d.paint=Qc(d.paint,i.paint,m,n,o),d.layout=Qc(d.layout,i.layout,m,n,o)
const _=!u||u(m,i,n)
if(!_)continue
const y=new Yc(m,this.z,this.x,this.y,f)
y.layer=d
let x=t[e]
void 0===x&&(x=t[e]=[]),x.push({featureIndex:r,feature:y,intersectionZ:_})}}lookupSymbolFeatures(t,e,i,r,n,s,o,a){const l={}
this.loadVTLayers()
const c=qi(n)
for(const h of t)this.loadMatchingFeature(l,i,r,h,c,s,o,a,e)
return l}hasLayer(t){for(const e of this.bucketLayerIDs)for(const i of e)if(t===i)return!0
return!1}getId(t,e){let i=t.id
return this.promoteId&&(i=t.properties["string"==typeof this.promoteId?this.promoteId:this.promoteId[e]],"boolean"==typeof i&&(i=Number(i))),i}}function Qc(t,e,i,r,n){return h(t,((t,s)=>{const o=e instanceof tn?e.get(s):null
return o&&o.evaluate?o.evaluate(i,r,n):o}))}function th(t){let e=1/0,i=1/0,r=-1/0,n=-1/0
for(const s of t)e=Math.min(e,s.x),i=Math.min(i,s.y),r=Math.max(r,s.x),n=Math.max(n,s.y)
return{minX:e,minY:i,maxX:r,maxY:n}}function eh(t,e){return e-t}var ih
vr("FeatureIndex",Jc,{omit:["rawTileData","sourceLayerCoder"]}),t.PerformanceMarkers=void 0,(ih=t.PerformanceMarkers||(t.PerformanceMarkers={})).create="create",ih.load="load",ih.fullLoad="fullLoad"
let rh=null,nh=[]
const sh=1e3/30,oh={mark(t){performance.mark(t)},frame(t){const e=t
null!=rh&&nh.push(e-rh),rh=e},clearMetrics(){rh=null,nh=[],performance.clearMeasures("loadTime"),performance.clearMeasures("fullLoadTime")
for(const e in t.PerformanceMarkers)performance.clearMarks(t.PerformanceMarkers[e])},getPerformanceMetrics(){performance.measure("loadTime",t.PerformanceMarkers.create,t.PerformanceMarkers.load),performance.measure("fullLoadTime",t.PerformanceMarkers.create,t.PerformanceMarkers.fullLoad)
const e=performance.getEntriesByName("loadTime")[0].duration,i=performance.getEntriesByName("fullLoadTime")[0].duration,r=nh.length,n=1/(nh.reduce(((t,e)=>t+e),0)/r/1e3),s=nh.filter((t=>t>sh)).reduce(((t,e)=>t+(e-sh)/sh),0)
return{loadTime:e,fullLoadTime:i,fps:n,percentDroppedFrames:s/(r+s)*100}}}
t.AJAXError=U,t.ARRAY_TYPE=io,t.Actor=class{constructor(t,e,i){this.target=t,this.parent=e,this.mapId=i,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},c(["receive","process"],this),this.invoker=new Dc(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=_()?t:window}send(t,e,i,r){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
const s=Math.round(1e18*Math.random()).toString(36).substring(0,10)
i&&(this.callbacks[s]=i)
const o=b(this.globalScope)?void 0:[]
return this.target.postMessage({id:s,type:t,hasCallback:!!i,targetMapId:r,mustQueue:n,sourceMapId:this.mapId,data:wr(e,o)},o),{cancel:()=>{i&&delete this.callbacks[s],this.target.postMessage({id:s,type:"<cancel>",targetMapId:r,sourceMapId:this.mapId})}}}receive(t){const e=t.data,i=e.id
if(i&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[i]
const t=this.cancelCallbacks[i]
delete this.cancelCallbacks[i],t&&t()}else _()||e.mustQueue?(this.tasks[i]=e,this.taskQueue.push(i),this.invoker.trigger()):this.processTask(i,e)}process(){if(!this.taskQueue.length)return
const t=this.taskQueue.shift(),e=this.tasks[t]
delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e)}processTask(t,e){if("<response>"===e.type){const i=this.callbacks[t]
delete this.callbacks[t],i&&(e.error?i(Sr(e.error)):i(null,Sr(e.data)))}else{let i=!1
const r=b(this.globalScope)?void 0:[],n=e.hasCallback?(e,n)=>{i=!0,delete this.cancelCallbacks[t],this.target.postMessage({id:t,type:"<response>",sourceMapId:this.mapId,error:e?wr(e):null,data:wr(n,r)},r)}:t=>{i=!0}
let s=null
const o=Sr(e.data)
if(this.parent[e.type])s=this.parent[e.type](e.sourceMapId,o,n)
else if(this.parent.getWorkerSource){const t=e.type.split(".")
s=this.parent.getWorkerSource(e.sourceMapId,t[0],o.source)[t[1]](o,n)}else n(new Error(`Could not find function ${e.type}`))
!i&&s&&s.cancel&&(this.cancelCallbacks[t]=s.cancel)}}remove(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1)}},t.AlphaImage=fo,t.CanonicalTileID=jc,t.CollisionBoxArray=On,t.CollisionCircleLayoutArray=class extends En{},t.Color=Pt,t.DEMData=Hc,t.DataConstantProperty=en,t.DictionaryCoder=Kc,t.EXTENT=Ds,t.ErrorEvent=J,t.EvaluationParameters=Zr,t.Event=Y,t.Evented=Q,t.FeatureIndex=Jc,t.FillBucket=ra,t.FillExtrusionBucket=Sa,t.GeoJSONFeature=Yc,t.ImageAtlas=Sl,t.ImagePosition=wl,t.LineBucket=Ra,t.LineStripIndexArray=class extends Bn{},t.LngLat=Bc,t.LngLatBounds=Rc,t.MercatorCoordinate=qc,t.ONE_EM=Wa,t.OverscaledTileID=Xc,t.PerformanceUtils=oh,t.PosArray=class extends fn{},t.Properties=an,t.QuadTriangleArray=class extends zn{},t.RGBAImage=go,t.RasterBoundsArray=class extends gn{},t.RequestPerformance=class{constructor(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},performance.mark(this._marks.start)}finish(){performance.mark(this._marks.end)
let t=performance.getEntriesByName(this._marks.measure)
return 0===t.length&&(performance.measure(this._marks.measure,this._marks.start,this._marks.end),t=performance.getEntriesByName(this._marks.measure),performance.clearMarks(this._marks.start),performance.clearMarks(this._marks.end),performance.clearMeasures(this._marks.measure)),t}},t.ResourceType=O,t.SegmentVector=ls,t.SymbolBucket=Sc,t.Transitionable=Hr,t.TriangleIndexArray=ns,t.Uniform1f=xs,t.Uniform1i=class extends ys{constructor(t,e){super(t,e),this.current=0}set(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t))}},t.Uniform2f=class extends ys{constructor(t,e){super(t,e),this.current=[0,0]}set(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]))}},t.Uniform3f=class extends ys{constructor(t,e){super(t,e),this.current=[0,0,0]}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]))}},t.Uniform4f=vs,t.UniformColor=bs,t.UniformMatrix4f=class extends ys{constructor(t,e){super(t,e),this.current=ws}set(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t)
for(let e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t)
break}}},t.UnwrappedTileID=Zc,t.ValidationError=et,t.ZoomHistory=Tr,t.addDynamicAttributes=xc,t.asyncAll=function(t,e,i){if(!t.length)return i(null,[])
let r=t.length
const n=new Array(t.length)
let s=null
t.forEach(((t,o)=>{e(t,((t,e)=>{t&&(s=t),n[o]=e,0==--r&&i(s,n)}))}))},t.bezier=r,t.bindAll=c,t.cacheEntryPossiblyAdded=function(t){k++,k>P&&(t.getActor().send("enforceCacheSizeLimit",C),k=0)},t.clamp=s,t.clearTileCache=function(t){const e=caches.delete(A)
t&&e.catch(t).then((()=>t()))},t.clipLine=Kl,t.clone=function(t){var e=new io(16)
return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=p,t.collisionCircleLayout=ja,t.config=E,t.create=function(){var t=new io(16)
return io!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.createExpression=Ci,t.createFilter=qi,t.createLayout=dn,t.createStyleLayer=function(t){return"custom"===t.type?new kc(t):new Mc[t.type](t)},t.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},t.ease=n,t.emitValidationErrors=_r,t.enforceCacheSizeLimit=function(t){"undefined"==typeof caches||z||(z=caches.open(A)),z&&z.then((e=>{e.keys().then((i=>{for(let r=0;r<i.length-t;r++)e.delete(i[r])}))}))},t.evaluateSizeForFeature=function(t,e,i){let{uSize:r,uSizeT:n}=e,{lowerSize:s,upperSize:o}=i
return"source"===t.kind?s/Vl:"composite"===t.kind?we(s/Vl,o/Vl,n):r},t.evaluateSizeForZoom=function(t,e){let i=0,r=0
if("constant"===t.kind)r=t.layoutSize
else if("source"!==t.kind){const{interpolationType:n,minZoom:o,maxZoom:a}=t,l=n?s(Ne.interpolationFactor(n,e,o,a),0,1):0
"camera"===t.kind?r=we(t.minSize,t.maxSize,l):i=l}return{uSizeT:i,uSize:r}},t.evaluateVariableOffset=cc,t.evented=$r,t.exported=S,t.exported$1=M,t.extend=a,t.filterObject=u,t.getAnchorAlignment=Rl,t.getAnchorJustification=hc,t.getArrayBuffer=q,t.getImage=W,t.getJSON=function(t,e){return $(a(t,{type:"json"}),e)},t.getOverlapMode=zc,t.getRTLTextPluginStatus=qr,t.getReferrer=V,t.getVideo=function(t,e){const i=window.document.createElement("video")
i.muted=!0,i.onloadstart=function(){e(null,i)}
for(let r=0;r<t.length;r++){const e=window.document.createElement("source")
G(t[r])||(i.crossOrigin="Anonymous"),e.src=t[r],i.appendChild(e)}return{cancel:()=>{}}},t.identity=ro,t.invert=function(t,e){var i=e[0],r=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],m=e[12],f=e[13],g=e[14],_=e[15],y=i*a-r*o,x=i*l-n*o,v=i*c-s*o,b=r*l-n*a,w=r*c-s*a,S=n*c-s*l,T=h*f-u*m,I=h*g-p*m,E=h*_-d*m,A=u*g-p*f,z=u*_-d*f,C=p*_-d*g,P=y*C-x*z+v*A+b*E-w*I+S*T
return P?(t[0]=(a*C-l*z+c*A)*(P=1/P),t[1]=(n*z-r*C-s*A)*P,t[2]=(f*S-g*w+_*b)*P,t[3]=(p*w-u*S-d*b)*P,t[4]=(l*E-o*C-c*I)*P,t[5]=(i*C-n*E+s*I)*P,t[6]=(g*v-m*S-_*x)*P,t[7]=(h*S-p*v+d*x)*P,t[8]=(o*z-a*E+c*T)*P,t[9]=(r*E-i*z-s*T)*P,t[10]=(m*w-f*v+_*y)*P,t[11]=(u*v-h*w-d*y)*P,t[12]=(a*I-o*A-l*T)*P,t[13]=(i*A-r*I+n*T)*P,t[14]=(f*x-m*b-g*y)*P,t[15]=(h*b-u*x+p*y)*P,t):null},t.isImageBitmap=w,t.isSafari=b,t.keysDifference=function(t,e){const i=[]
for(const r in t)r in e||i.push(r)
return i},t.lazyLoadRTLTextPlugin=function(){jr.isLoading()||jr.isLoaded()||"deferred"!==qr()||Gr()},t.makeRequest=$,t.mapObject=h,t.mercatorXfromLng=Uc,t.mercatorYfromLat=Vc,t.mercatorZfromAltitude=Nc,t.mul=oo,t.multiply=no,t.nextPowerOfTwo=function(t){return t<=1?1:Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},t.number=we,t.ortho=function(t,e,i,r,n,s,o){var a=1/(e-i),l=1/(r-n),c=1/(s-o)
return t[0]=-2*a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+i)*a,t[13]=(n+r)*l,t[14]=(o+s)*c,t[15]=1,t},t.parseCacheControl=function(t){const e={}
if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,((t,i,r,n)=>{const s=r||n
return e[i]=!s||s.toLowerCase(),""})),e["max-age"]){const t=parseInt(e["max-age"],10)
isNaN(t)?delete e["max-age"]:e["max-age"]=t}return e},t.parseGlyphPBF=function(t){return new Ha(t).readFields(yl,[])},t.pbf=Ha,t.performSymbolLayout=function(e,i,r,n,s,o,a){e.createArrays(),e.tilePixelRatio=Ds/(512*e.overscaling),e.compareText={},e.iconsNeedLinear=!1
const l=e.layers[0].layout,c=e.layers[0]._unevaluatedLayout._values,h={layoutIconSize:c["icon-size"].possiblyEvaluate(new Zr(e.zoom+1),a),layoutTextSize:c["text-size"].possiblyEvaluate(new Zr(e.zoom+1),a),textMaxSize:c["text-size"].possiblyEvaluate(new Zr(18))}
if("composite"===e.textSizeData.kind){const{minZoom:t,maxZoom:i}=e.textSizeData
h.compositeTextSizes=[c["text-size"].possiblyEvaluate(new Zr(t),a),c["text-size"].possiblyEvaluate(new Zr(i),a)]}if("composite"===e.iconSizeData.kind){const{minZoom:t,maxZoom:i}=e.iconSizeData
h.compositeIconSizes=[c["icon-size"].possiblyEvaluate(new Zr(t),a),c["icon-size"].possiblyEvaluate(new Zr(i),a)]}const u=l.get("text-line-height")*Wa,p="viewport"!==l.get("text-rotation-alignment")&&"point"!==l.get("symbol-placement"),d=l.get("text-keep-upright"),f=l.get("text-size")
for(const g of e.features){const o=l.get("text-font").evaluate(g,{},a).join(","),c=f.evaluate(g,{},a),_=h.layoutTextSize.evaluate(g,{},a),y=h.layoutIconSize.evaluate(g,{},a),x={horizontal:{},vertical:void 0},v=g.text
let b,w=[0,0]
if(v){const n=v.toString(),h=l.get("text-letter-spacing").evaluate(g,{},a)*Wa,m=Ar(n)?h:0,f=l.get("text-anchor").evaluate(g,{},a),y=l.get("text-variable-anchor")
if(!y){const t=l.get("text-radial-offset").evaluate(g,{},a)
w=t?cc(f,[t*Wa,lc]):l.get("text-offset").evaluate(g,{},a).map((t=>t*Wa))}let b=p?"center":l.get("text-justify").evaluate(g,{},a)
const S=l.get("symbol-placement"),T="point"===S?l.get("text-max-width").evaluate(g,{},a)*Wa:0,I=()=>{e.allowVerticalPlacement&&Er(n)&&(x.vertical=Al(v,i,r,s,o,T,u,f,"left",m,w,t.WritingMode.vertical,!0,S,_,c))}
if(!p&&y){const e="auto"===b?y.map((t=>hc(t))):[b]
let n=!1
for(let a=0;a<e.length;a++){const l=e[a]
if(!x.horizontal[l])if(n)x.horizontal[l]=x.horizontal[0]
else{const e=Al(v,i,r,s,o,T,u,"center",l,m,w,t.WritingMode.horizontal,!1,S,_,c)
e&&(x.horizontal[l]=e,n=1===e.positionedLines.length)}}I()}else{"auto"===b&&(b=hc(f))
const e=Al(v,i,r,s,o,T,u,f,b,m,w,t.WritingMode.horizontal,!1,S,_,c)
e&&(x.horizontal[b]=e),I(),Er(n)&&p&&d&&(x.vertical=Al(v,i,r,s,o,T,u,f,b,m,w,t.WritingMode.vertical,!1,S,_,c))}}let S=!1
if(g.icon&&g.icon.name){const t=n[g.icon.name]
t&&(b=Ol(s[g.icon.name],l.get("icon-offset").evaluate(g,{},a),l.get("icon-anchor").evaluate(g,{},a)),S=!!t.sdf,void 0===e.sdfIcons?e.sdfIcons=S:e.sdfIcons!==S&&m("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(t.pixelRatio!==e.pixelRatio||0!==l.get("icon-rotate").constantOr(1))&&(e.iconsNeedLinear=!0))}const T=mc(x.horizontal)||x.vertical
e.iconsInText=!!T&&T.iconsInText,(T||b)&&uc(e,g,x,b,n,h,_,y,w,S,a)}o&&e.generateCollisionDebugBuffers()},t.perspective=function(t,e,i,r,n){var s,o=1/Math.tan(e/2)
return t[0]=o/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=n&&n!==1/0?(t[10]=(n+r)*(s=1/(r-n)),t[14]=2*n*r*s):(t[10]=-1,t[14]=-2*r),t},t.pick=function(t,e){const i={}
for(let r=0;r<e.length;r++){const n=e[r]
n in t&&(i[n]=t[n])}return i},t.plugin=jr,t.pointGeometry=T,t.polygonIntersectsPolygon=Vs,t.potpack=bl,t.refProperties=["type","source","source-layer","minzoom","maxzoom","filter","layout"],t.register=vr,t.registerForPluginStateChange=function(t){return t({pluginStatus:Or,pluginURL:Ur}),$r.on("pluginStateChange",t),t},t.renderColorRamp=_o,t.rotateX=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),s=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],u=e[10],p=e[11]
return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=s*n+c*r,t[5]=o*n+h*r,t[6]=a*n+u*r,t[7]=l*n+p*r,t[8]=c*n-s*r,t[9]=h*n-o*r,t[10]=u*n-a*r,t[11]=p*n-l*r,t},t.rotateZ=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),s=e[0],o=e[1],a=e[2],l=e[3],c=e[4],h=e[5],u=e[6],p=e[7]
return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*n+c*r,t[1]=o*n+h*r,t[2]=a*n+u*r,t[3]=l*n+p*r,t[4]=c*n-s*r,t[5]=h*n-o*r,t[6]=u*n-a*r,t[7]=p*n-l*r,t},t.scale=function(t,e,i){var r=i[0],n=i[1],s=i[2]
return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.scale$1=function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t},t.setCacheLimits=function(t,e){C=t,P=e},t.setRTLTextPlugin=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(Or===Lr||Or===Br||Or===Rr)throw new Error("setRTLTextPlugin cannot be called multiple times.")
Ur=S.resolveURL(t),Or=Lr,Fr=e,Nr(),i||Gr()},t.spec=tt,t.sphericalToCartesian=function(t){let[e,i,r]=t
return i+=90,i*=Math.PI/180,r*=Math.PI/180,{x:e*Math.cos(i)*Math.sin(r),y:e*Math.sin(i)*Math.sin(r),z:e*Math.cos(r)}},t.toEvaluationFeature=Fs,t.transformMat4=ao,t.translate=function(t,e,i){var r,n,s,o,a,l,c,h,u,p,d,m,f=i[0],g=i[1],_=i[2]
return e===t?(t[12]=e[0]*f+e[4]*g+e[8]*_+e[12],t[13]=e[1]*f+e[5]*g+e[9]*_+e[13],t[14]=e[2]*f+e[6]*g+e[10]*_+e[14],t[15]=e[3]*f+e[7]*g+e[11]*_+e[15]):(n=e[1],s=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],u=e[8],p=e[9],d=e[10],m=e[11],t[0]=r=e[0],t[1]=n,t[2]=s,t[3]=o,t[4]=a,t[5]=l,t[6]=c,t[7]=h,t[8]=u,t[9]=p,t[10]=d,t[11]=m,t[12]=r*f+a*g+u*_+e[12],t[13]=n*f+l*g+p*_+e[13],t[14]=s*f+c*g+d*_+e[14],t[15]=o*f+h*g+m*_+e[15]),t},t.triggerPluginCompletionEvent=Vr,t.unicodeBlockLookup=Ir,t.uniqueId=function(){return l++},t.validateCustomStyleLayer=function(t){const e=[],i=t.id
return void 0===i&&e.push({message:`layers.${i}: missing required property "id"`}),void 0===t.render&&e.push({message:`layers.${i}: missing required method "render"`}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:`layers.${i}: property "renderingMode" must be either "2d" or "3d"`}),e},t.validateLight=mr,t.validateStyle=dr,t.vectorTile=la,t.warnOnce=m,t.wrap=o})),r(0,(function(t){function e(t){const i=typeof t
if("number"===i||"boolean"===i||"string"===i||null==t)return JSON.stringify(t)
if(Array.isArray(t)){let i="["
for(const r of t)i+=`${e(r)},`
return`${i}]`}const r=Object.keys(t).sort()
let n="{"
for(let s=0;s<r.length;s++)n+=`${JSON.stringify(r[s])}:${e(t[r[s]])},`
return`${n}}`}function i(i){let r=""
for(const n of t.refProperties)r+=`/${e(i[n])}`
return r}class r{constructor(t){this.keyCache={},t&&this.replace(t)}replace(t){this._layerConfigs={},this._layers={},this.update(t,[])}update(e,r){for(const i of e){this._layerConfigs[i.id]=i
const e=this._layers[i.id]=t.createStyleLayer(i)
e._featureFilter=t.createFilter(e.filter),this.keyCache[i.id]&&delete this.keyCache[i.id]}for(const t of r)delete this.keyCache[t],delete this._layerConfigs[t],delete this._layers[t]
this.familiesBySource={}
const n=function(t,e){const r={}
for(let s=0;s<t.length;s++){const n=e&&e[t[s].id]||i(t[s])
e&&(e[t[s].id]=n)
let o=r[n]
o||(o=r[n]=[]),o.push(t[s])}const n=[]
for(const i in r)n.push(r[i])
return n}(Object.values(this._layerConfigs),this.keyCache)
for(const t of n){const e=t.map((t=>this._layers[t.id])),i=e[0]
if("none"===i.visibility)continue
const r=i.source||""
let n=this.familiesBySource[r]
n||(n=this.familiesBySource[r]={})
const s=i.sourceLayer||"_geojsonTileLayer"
let o=n[s]
o||(o=n[s]=[]),o.push(e)}}}class n{constructor(e){const i={},r=[]
for(const t in e){const n=e[t],s=i[t]={}
for(const t in n){const e=n[+t]
if(!e||0===e.bitmap.width||0===e.bitmap.height)continue
const i={x:0,y:0,w:e.bitmap.width+2,h:e.bitmap.height+2}
r.push(i),s[t]={rect:i,metrics:e.metrics}}}const{w:n,h:s}=t.potpack(r),o=new t.AlphaImage({width:n||1,height:s||1})
for(const a in e){const r=e[a]
for(const e in r){const n=r[+e]
if(!n||0===n.bitmap.width||0===n.bitmap.height)continue
const s=i[a][e].rect
t.AlphaImage.copy(n.bitmap,o,{x:0,y:0},{x:s.x+1,y:s.y+1},n.bitmap)}}this.image=o,this.positions=i}}t.register("GlyphAtlas",n)
class s{constructor(e){this.tileID=new t.OverscaledTileID(e.tileID.overscaledZ,e.tileID.wrap,e.tileID.canonical.z,e.tileID.canonical.x,e.tileID.canonical.y),this.uid=e.uid,this.zoom=e.zoom,this.pixelRatio=e.pixelRatio,this.tileSize=e.tileSize,this.source=e.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=e.showCollisionBoxes,this.collectResourceTiming=!!e.collectResourceTiming,this.returnDependencies=!!e.returnDependencies,this.promoteId=e.promoteId}parse(e,i,r,s,a){this.status="parsing",this.data=e,this.collisionBoxArray=new t.CollisionBoxArray
const l=new t.DictionaryCoder(Object.keys(e.layers).sort()),c=new t.FeatureIndex(this.tileID,this.promoteId)
c.bucketLayerIDs=[]
const h={},u={featureIndex:c,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:r},p=i.familiesBySource[this.source]
for(const n in p){const i=e.layers[n]
if(!i)continue
1===i.version&&t.warnOnce(`Vector tile source "${this.source}" layer "${n}" does not use vector tile spec v2 and therefore may have some rendering errors.`)
const s=l.encode(n),a=[]
for(let t=0;t<i.length;t++){const e=i.feature(t),r=c.getId(e,n)
a.push({feature:e,id:r,index:t,sourceLayerIndex:s})}for(const t of p[n]){const e=t[0]
e.minzoom&&this.zoom<Math.floor(e.minzoom)||e.maxzoom&&this.zoom>=e.maxzoom||"none"!==e.visibility&&(o(t,this.zoom,r),(h[e.id]=e.createBucket({index:c.bucketLayerIDs.length,layers:t,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:s,sourceID:this.source})).populate(a,u,this.tileID.canonical),c.bucketLayerIDs.push(t.map((t=>t.id))))}}let d,m,f,g
const _=t.mapObject(u.glyphDependencies,(t=>Object.keys(t).map(Number)))
Object.keys(_).length?s.send("getGlyphs",{uid:this.uid,stacks:_},((t,e)=>{d||(d=t,m=e,v.call(this))})):m={}
const y=Object.keys(u.iconDependencies)
y.length?s.send("getImages",{icons:y,source:this.source,tileID:this.tileID,type:"icons"},((t,e)=>{d||(d=t,f=e,v.call(this))})):f={}
const x=Object.keys(u.patternDependencies)
function v(){if(d)return a(d)
if(m&&f&&g){const e=new n(m),i=new t.ImageAtlas(f,g)
for(const n in h){const s=h[n]
s instanceof t.SymbolBucket?(o(s.layers,this.zoom,r),t.performSymbolLayout(s,m,e.positions,f,i.iconPositions,this.showCollisionBoxes,this.tileID.canonical)):s.hasPattern&&(s instanceof t.LineBucket||s instanceof t.FillBucket||s instanceof t.FillExtrusionBucket)&&(o(s.layers,this.zoom,r),s.addFeatures(u,this.tileID.canonical,i.patternPositions))}this.status="done",a(null,{buckets:Object.values(h).filter((t=>!t.isEmpty())),featureIndex:c,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:e.image,imageAtlas:i,glyphMap:this.returnDependencies?m:null,iconMap:this.returnDependencies?f:null,glyphPositions:this.returnDependencies?e.positions:null})}}x.length?s.send("getImages",{icons:x,source:this.source,tileID:this.tileID,type:"patterns"},((t,e)=>{d||(d=t,g=e,v.call(this))})):g={},v.call(this)}}function o(e,i,r){const n=new t.EvaluationParameters(i)
for(const t of e)t.recalculate(n,r)}function a(e,i){const r=t.getArrayBuffer(e.request,((e,r,n,s)=>{e?i(e):r&&i(null,{vectorTile:new t.vectorTile.VectorTile(new t.pbf(r)),rawData:r,cacheControl:n,expires:s})}))
return()=>{r.cancel(),i()}}class l{constructor(t,e,i,r){this.actor=t,this.layerIndex=e,this.availableImages=i,this.loadVectorData=r||a,this.loading={},this.loaded={}}loadTile(e,i){const r=e.uid
this.loading||(this.loading={})
const n=!!(e&&e.request&&e.request.collectResourceTiming)&&new t.RequestPerformance(e.request),o=this.loading[r]=new s(e)
o.abort=this.loadVectorData(e,((e,s)=>{if(delete this.loading[r],e||!s)return o.status="done",this.loaded[r]=o,i(e)
const a=s.rawData,l={}
s.expires&&(l.expires=s.expires),s.cacheControl&&(l.cacheControl=s.cacheControl)
const c={}
if(n){const t=n.finish()
t&&(c.resourceTiming=JSON.parse(JSON.stringify(t)))}o.vectorTile=s.vectorTile,o.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,((e,r)=>{if(e||!r)return i(e)
i(null,t.extend({rawTileData:a.slice(0)},r,l,c))})),this.loaded=this.loaded||{},this.loaded[r]=o}))}reloadTile(t,e){const i=this.loaded,r=t.uid,n=this
if(i&&i[r]){const s=i[r]
s.showCollisionBoxes=t.showCollisionBoxes
const o=(t,i)=>{const r=s.reloadCallback
r&&(delete s.reloadCallback,s.parse(s.vectorTile,n.layerIndex,this.availableImages,n.actor,r)),e(t,i)}
"parsing"===s.status?s.reloadCallback=o:"done"===s.status&&(s.vectorTile?s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,o):o())}}abortTile(t,e){const i=this.loading,r=t.uid
i&&i[r]&&i[r].abort&&(i[r].abort(),delete i[r]),e()}removeTile(t,e){const i=this.loaded,r=t.uid
i&&i[r]&&delete i[r],e()}}class c{constructor(){this.loaded={}}loadTile(e,i){const{uid:r,encoding:n,rawImageData:s}=e,o=t.isImageBitmap(s)?this.getImageData(s):s,a=new t.DEMData(r,o,n)
this.loaded=this.loaded||{},this.loaded[r]=a,i(null,a)}getImageData(e){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(e.width,e.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d")),this.offscreenCanvas.width=e.width,this.offscreenCanvas.height=e.height,this.offscreenCanvasContext.drawImage(e,0,0,e.width,e.height)
const i=this.offscreenCanvasContext.getImageData(-1,-1,e.width+2,e.height+2)
return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),new t.RGBAImage({width:i.width,height:i.height},i.data)}removeTile(t){const e=this.loaded,i=t.uid
e&&e[i]&&delete e[i]}}var h=function t(e,i){var r,n=e&&e.type
if("FeatureCollection"===n)for(r=0;r<e.features.length;r++)t(e.features[r],i)
else if("GeometryCollection"===n)for(r=0;r<e.geometries.length;r++)t(e.geometries[r],i)
else if("Feature"===n)t(e.geometry,i)
else if("Polygon"===n)u(e.coordinates,i)
else if("MultiPolygon"===n)for(r=0;r<e.coordinates.length;r++)u(e.coordinates[r],i)
return e}
function u(t,e){if(0!==t.length){p(t[0],e)
for(var i=1;i<t.length;i++)p(t[i],!e)}}function p(t,e){for(var i=0,r=0,n=0,s=t.length,o=s-1;n<s;o=n++){var a=(t[n][0]-t[o][0])*(t[o][1]+t[n][1]),l=i+a
r+=Math.abs(i)>=Math.abs(a)?i-l+a:a-l+i,i=l}i+r>=0!=!!e&&t.reverse()}const d=t.vectorTile.VectorTileFeature.prototype.toGeoJSON
class m{constructor(e){this._feature=e,this.extent=t.EXTENT,this.type=e.type,this.properties=e.tags,"id"in e&&!isNaN(e.id)&&(this.id=parseInt(e.id,10))}loadGeometry(){if(1===this._feature.type){const e=[]
for(const i of this._feature.geometry)e.push([new t.pointGeometry(i[0],i[1])])
return e}{const e=[]
for(const i of this._feature.geometry){const r=[]
for(const e of i)r.push(new t.pointGeometry(e[0],e[1]))
e.push(r)}return e}}toGeoJSON(t,e,i){return d.call(this,t,e,i)}}class f{constructor(e){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=t.EXTENT,this.length=e.length,this._features=e}feature(t){return new m(this._features[t])}}var g={exports:{}},_=t.pointGeometry,y=t.vectorTile.VectorTileFeature,x=v
function v(t,e){this.options=e||{},this.features=t,this.length=t.length}function b(t,e){this.id="number"==typeof t.id?t.id:void 0,this.type=t.type,this.rawGeometry=1===t.type?[t.geometry]:t.geometry,this.properties=t.tags,this.extent=e||4096}v.prototype.feature=function(t){return new b(this.features[t],this.options.extent)},b.prototype.loadGeometry=function(){var t=this.rawGeometry
this.geometry=[]
for(var e=0;e<t.length;e++){for(var i=t[e],r=[],n=0;n<i.length;n++)r.push(new _(i[n][0],i[n][1]))
this.geometry.push(r)}return this.geometry},b.prototype.bbox=function(){this.geometry||this.loadGeometry()
for(var t=this.geometry,e=1/0,i=-1/0,r=1/0,n=-1/0,s=0;s<t.length;s++)for(var o=t[s],a=0;a<o.length;a++){var l=o[a]
e=Math.min(e,l.x),i=Math.max(i,l.x),r=Math.min(r,l.y),n=Math.max(n,l.y)}return[e,r,i,n]},b.prototype.toGeoJSON=y.prototype.toGeoJSON
var w=t.pbf,S=x
function T(t){var e=new w
return function(t,e){for(var i in t.layers)e.writeMessage(3,I,t.layers[i])}(t,e),e.finish()}function I(t,e){var i
e.writeVarintField(15,t.version||1),e.writeStringField(1,t.name||""),e.writeVarintField(5,t.extent||4096)
var r={keys:[],values:[],keycache:{},valuecache:{}}
for(i=0;i<t.length;i++)r.feature=t.feature(i),e.writeMessage(2,E,r)
var n=r.keys
for(i=0;i<n.length;i++)e.writeStringField(3,n[i])
var s=r.values
for(i=0;i<s.length;i++)e.writeMessage(4,k,s[i])}function E(t,e){var i=t.feature
void 0!==i.id&&e.writeVarintField(1,i.id),e.writeMessage(2,A,t),e.writeVarintField(3,i.type),e.writeMessage(4,P,i)}function A(t,e){var i=t.feature,r=t.keys,n=t.values,s=t.keycache,o=t.valuecache
for(var a in i.properties){var l=i.properties[a],c=s[a]
if(null!==l){void 0===c&&(r.push(a),s[a]=c=r.length-1),e.writeVarint(c)
var h=typeof l
"string"!==h&&"boolean"!==h&&"number"!==h&&(l=JSON.stringify(l))
var u=h+":"+l,p=o[u]
void 0===p&&(n.push(l),o[u]=p=n.length-1),e.writeVarint(p)}}}function z(t,e){return(e<<3)+(7&t)}function C(t){return t<<1^t>>31}function P(t,e){for(var i=t.loadGeometry(),r=t.type,n=0,s=0,o=i.length,a=0;a<o;a++){var l=i[a],c=1
1===r&&(c=l.length),e.writeVarint(z(1,c))
for(var h=3===r?l.length-1:l.length,u=0;u<h;u++){1===u&&1!==r&&e.writeVarint(z(2,h-1))
var p=l[u].x-n,d=l[u].y-s
e.writeVarint(C(p)),e.writeVarint(C(d)),n+=p,s+=d}3===r&&e.writeVarint(z(7,1))}}function k(t,e){var i=typeof t
"string"===i?e.writeStringField(1,t):"boolean"===i?e.writeBooleanField(7,t):"number"===i&&(t%1!=0?e.writeDoubleField(3,t):t<0?e.writeSVarintField(6,t):e.writeVarintField(5,t))}g.exports=T,g.exports.fromVectorTileJs=T,g.exports.fromGeojsonVt=function(t,e){e=e||{}
var i={}
for(var r in t)i[r]=new S(t[r].features,e),i[r].name=r,i[r].version=e.version,i[r].extent=e.extent
return T({layers:i})},g.exports.GeoJSONWrapper=S
var M=g.exports
function D(t,e,i,r,n,s){if(n-r<=i)return
const o=r+n>>1
L(t,e,o,r,n,s%2),D(t,e,i,r,o-1,s+1),D(t,e,i,o+1,n,s+1)}function L(t,e,i,r,n,s){for(;n>r;){if(n-r>600){const o=n-r+1,a=i-r+1,l=Math.log(o),c=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*c*(o-c)/o)*(a-o/2<0?-1:1)
L(t,e,i,Math.max(r,Math.floor(i-a*c/o+h)),Math.min(n,Math.floor(i+(o-a)*c/o+h)),s)}const o=e[2*i+s]
let a=r,l=n
for(B(t,e,r,i),e[2*n+s]>o&&B(t,e,r,n);a<l;){for(B(t,e,a,l),a++,l--;e[2*a+s]<o;)a++
for(;e[2*l+s]>o;)l--}e[2*r+s]===o?B(t,e,r,l):(l++,B(t,e,l,n)),l<=i&&(r=l+1),i<=l&&(n=l-1)}}function B(t,e,i,r){R(t,i,r),R(e,2*i,2*r),R(e,2*i+1,2*r+1)}function R(t,e,i){const r=t[e]
t[e]=t[i],t[i]=r}function F(t,e,i,r){const n=t-i,s=e-r
return n*n+s*s}const O=t=>t[0],U=t=>t[1]
class V{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:U,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:64,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Float64Array
this.nodeSize=r,this.points=t
const s=t.length<65536?Uint16Array:Uint32Array,o=this.ids=new s(t.length),a=this.coords=new n(2*t.length)
for(let l=0;l<t.length;l++)o[l]=l,a[2*l]=e(t[l]),a[2*l+1]=i(t[l])
D(o,a,r,0,o.length-1,0)}range(t,e,i,r){return function(t,e,i,r,n,s,o){const a=[0,t.length-1,0],l=[]
let c,h
for(;a.length;){const u=a.pop(),p=a.pop(),d=a.pop()
if(p-d<=o){for(let o=d;o<=p;o++)c=e[2*o],h=e[2*o+1],c>=i&&c<=n&&h>=r&&h<=s&&l.push(t[o])
continue}const m=Math.floor((d+p)/2)
c=e[2*m],h=e[2*m+1],c>=i&&c<=n&&h>=r&&h<=s&&l.push(t[m])
const f=(u+1)%2;(0===u?i<=c:r<=h)&&(a.push(d),a.push(m-1),a.push(f)),(0===u?n>=c:s>=h)&&(a.push(m+1),a.push(p),a.push(f))}return l}(this.ids,this.coords,t,e,i,r,this.nodeSize)}within(t,e,i){return function(t,e,i,r,n,s){const o=[0,t.length-1,0],a=[],l=n*n
for(;o.length;){const c=o.pop(),h=o.pop(),u=o.pop()
if(h-u<=s){for(let n=u;n<=h;n++)F(e[2*n],e[2*n+1],i,r)<=l&&a.push(t[n])
continue}const p=Math.floor((u+h)/2),d=e[2*p],m=e[2*p+1]
F(d,m,i,r)<=l&&a.push(t[p])
const f=(c+1)%2;(0===c?i-n<=d:r-n<=m)&&(o.push(u),o.push(p-1),o.push(f)),(0===c?i+n>=d:r+n>=m)&&(o.push(p+1),o.push(h),o.push(f))}return a}(this.ids,this.coords,t,e,i,this.nodeSize)}}const N={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},$=Math.fround||(q=new Float32Array(1),t=>(q[0]=+t,q[0]))
var q
class G{constructor(t){this.options=J(Object.create(N),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:e,minZoom:i,maxZoom:r,nodeSize:n}=this.options
e&&console.time("total time")
const s=`prepare ${t.length} points`
e&&console.time(s),this.points=t
let o=[]
for(let a=0;a<t.length;a++)t[a].geometry&&o.push(Z(t[a],a))
this.trees[r+1]=new V(o,Q,tt,n,Float32Array),e&&console.timeEnd(s)
for(let a=r;a>=i;a--){const t=+Date.now()
o=this._cluster(o,a),this.trees[a]=new V(o,Q,tt,n,Float32Array),e&&console.log("z%d: %d clusters in %dms",a,o.length,+Date.now()-t)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let i=((t[0]+180)%360+360)%360-180
const r=Math.max(-90,Math.min(90,t[1]))
let n=180===t[2]?180:((t[2]+180)%360+360)%360-180
const s=Math.max(-90,Math.min(90,t[3]))
if(t[2]-t[0]>=360)i=-180,n=180
else if(i>n){const t=this.getClusters([i,r,180,s],e),o=this.getClusters([-180,r,n,s],e)
return t.concat(o)}const o=this.trees[this._limitZoom(e)],a=o.range(H(i),K(s),H(n),K(r)),l=[]
for(const c of a){const t=o.points[c]
l.push(t.numPoints?X(t):this.points[t.index])}return l}getChildren(t){const e=this._getOriginId(t),i=this._getOriginZoom(t),r="No cluster with the specified id.",n=this.trees[i]
if(!n)throw new Error(r)
const s=n.points[e]
if(!s)throw new Error(r)
const o=this.options.radius/(this.options.extent*Math.pow(2,i-1)),a=n.within(s.x,s.y,o),l=[]
for(const c of a){const e=n.points[c]
e.parentId===t&&l.push(e.numPoints?X(e):this.points[e.index])}if(0===l.length)throw new Error(r)
return l}getLeaves(t,e,i){const r=[]
return this._appendLeaves(r,t,e=e||10,i=i||0,0),r}getTile(t,e,i){const r=this.trees[this._limitZoom(t)],n=Math.pow(2,t),{extent:s,radius:o}=this.options,a=o/s,l=(i-a)/n,c=(i+1+a)/n,h={features:[]}
return this._addTileFeatures(r.range((e-a)/n,l,(e+1+a)/n,c),r.points,e,i,n,h),0===e&&this._addTileFeatures(r.range(1-a/n,l,1,c),r.points,n,i,n,h),e===n-1&&this._addTileFeatures(r.range(0,l,a/n,c),r.points,-1,i,n,h),h.features.length?h:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1
for(;e<=this.options.maxZoom;){const i=this.getChildren(t)
if(e++,1!==i.length)break
t=i[0].properties.cluster_id}return e}_appendLeaves(t,e,i,r,n){const s=this.getChildren(e)
for(const o of s){const e=o.properties
if(e&&e.cluster?n+e.point_count<=r?n+=e.point_count:n=this._appendLeaves(t,e.cluster_id,i,r,n):n<r?n++:t.push(o),t.length===i)break}return n}_addTileFeatures(t,e,i,r,n,s){for(const o of t){const t=e[o],a=t.numPoints
let l,c,h
if(a)l=W(t),c=t.x,h=t.y
else{const e=this.points[t.index]
l=e.properties,c=H(e.geometry.coordinates[0]),h=K(e.geometry.coordinates[1])}const u={type:1,geometry:[[Math.round(this.options.extent*(c*n-i)),Math.round(this.options.extent*(h*n-r))]],tags:l}
let p
a?p=t.id:this.options.generateId?p=t.index:this.points[t.index].id&&(p=this.points[t.index].id),void 0!==p&&(u.id=p),s.features.push(u)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(+t,this.options.maxZoom+1))}_cluster(t,e){const i=[],{radius:r,extent:n,reduce:s,minPoints:o}=this.options,a=r/(n*Math.pow(2,e))
for(let l=0;l<t.length;l++){const r=t[l]
if(r.zoom<=e)continue
r.zoom=e
const n=this.trees[e+1],c=n.within(r.x,r.y,a),h=r.numPoints||1
let u=h
for(const t of c){const i=n.points[t]
i.zoom>e&&(u+=i.numPoints||1)}if(u>h&&u>=o){let t=r.x*h,o=r.y*h,a=s&&h>1?this._map(r,!0):null
const p=(l<<5)+(e+1)+this.points.length
for(const i of c){const l=n.points[i]
if(l.zoom<=e)continue
l.zoom=e
const c=l.numPoints||1
t+=l.x*c,o+=l.y*c,l.parentId=p,s&&(a||(a=this._map(r,!0)),s(a,this._map(l)))}r.parentId=p,i.push(j(t/u,o/u,p,u,a))}else if(i.push(r),u>1)for(const t of c){const r=n.points[t]
r.zoom<=e||(r.zoom=e,i.push(r))}}return i}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e){if(t.numPoints)return e?J({},t.properties):t.properties
const i=this.points[t.index].properties,r=this.options.map(i)
return e&&r===i?J({},r):r}}function j(t,e,i,r,n){return{x:$(t),y:$(e),zoom:1/0,id:i,parentId:-1,numPoints:r,properties:n}}function Z(t,e){const[i,r]=t.geometry.coordinates
return{x:$(H(i)),y:$(K(r)),zoom:1/0,index:e,parentId:-1}}function X(t){return{type:"Feature",id:t.id,properties:W(t),geometry:{type:"Point",coordinates:[(e=t.x,360*(e-.5)),Y(t.y)]}}
var e}function W(t){const e=t.numPoints,i=e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?Math.round(e/100)/10+"k":e
return J(J({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:i})}function H(t){return t/360+.5}function K(t){const e=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return i<0?0:i>1?1:i}function Y(t){const e=(180-360*t)*Math.PI/180
return 360*Math.atan(Math.exp(e))/Math.PI-90}function J(t,e){for(const i in e)t[i]=e[i]
return t}function Q(t){return t.x}function tt(t){return t.y}function et(t,e,i,r){for(var n,s=r,o=i-e>>1,a=i-e,l=t[e],c=t[e+1],h=t[i],u=t[i+1],p=e+3;p<i;p+=3){var d=it(t[p],t[p+1],l,c,h,u)
if(d>s)n=p,s=d
else if(d===s){var m=Math.abs(p-o)
m<a&&(n=p,a=m)}}s>r&&(n-e>3&&et(t,e,n,r),t[n+2]=s,i-n>3&&et(t,n,i,r))}function it(t,e,i,r,n,s){var o=n-i,a=s-r
if(0!==o||0!==a){var l=((t-i)*o+(e-r)*a)/(o*o+a*a)
l>1?(i=n,r=s):l>0&&(i+=o*l,r+=a*l)}return(o=t-i)*o+(a=e-r)*a}function rt(t,e,i,r){var n={id:void 0===t?null:t,type:e,geometry:i,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}
return function(t){var e=t.geometry,i=t.type
if("Point"===i||"MultiPoint"===i||"LineString"===i)nt(t,e)
else if("Polygon"===i||"MultiLineString"===i)for(var r=0;r<e.length;r++)nt(t,e[r])
else if("MultiPolygon"===i)for(r=0;r<e.length;r++)for(var n=0;n<e[r].length;n++)nt(t,e[r][n])}(n),n}function nt(t,e){for(var i=0;i<e.length;i+=3)t.minX=Math.min(t.minX,e[i]),t.minY=Math.min(t.minY,e[i+1]),t.maxX=Math.max(t.maxX,e[i]),t.maxY=Math.max(t.maxY,e[i+1])}function st(t,e,i,r){if(e.geometry){var n=e.geometry.coordinates,s=e.geometry.type,o=Math.pow(i.tolerance/((1<<i.maxZoom)*i.extent),2),a=[],l=e.id
if(i.promoteId?l=e.properties[i.promoteId]:i.generateId&&(l=r||0),"Point"===s)ot(n,a)
else if("MultiPoint"===s)for(var c=0;c<n.length;c++)ot(n[c],a)
else if("LineString"===s)at(n,a,o,!1)
else if("MultiLineString"===s){if(i.lineMetrics){for(c=0;c<n.length;c++)at(n[c],a=[],o,!1),t.push(rt(l,"LineString",a,e.properties))
return}lt(n,a,o,!1)}else if("Polygon"===s)lt(n,a,o,!0)
else{if("MultiPolygon"!==s){if("GeometryCollection"===s){for(c=0;c<e.geometry.geometries.length;c++)st(t,{id:l,geometry:e.geometry.geometries[c],properties:e.properties},i,r)
return}throw new Error("Input data is not a valid GeoJSON object.")}for(c=0;c<n.length;c++){var h=[]
lt(n[c],h,o,!0),a.push(h)}}t.push(rt(l,s,a,e.properties))}}function ot(t,e){e.push(ct(t[0])),e.push(ht(t[1])),e.push(0)}function at(t,e,i,r){for(var n,s,o=0,a=0;a<t.length;a++){var l=ct(t[a][0]),c=ht(t[a][1])
e.push(l),e.push(c),e.push(0),a>0&&(o+=r?(n*c-l*s)/2:Math.sqrt(Math.pow(l-n,2)+Math.pow(c-s,2))),n=l,s=c}var h=e.length-3
e[2]=1,et(e,0,h,i),e[h+2]=1,e.size=Math.abs(o),e.start=0,e.end=e.size}function lt(t,e,i,r){for(var n=0;n<t.length;n++){var s=[]
at(t[n],s,i,r),e.push(s)}}function ct(t){return t/360+.5}function ht(t){var e=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return i<0?0:i>1?1:i}function ut(t,e,i,r,n,s,o,a){if(r/=e,s>=(i/=e)&&o<r)return t
if(o<i||s>=r)return null
for(var l=[],c=0;c<t.length;c++){var h=t[c],u=h.geometry,p=h.type,d=0===n?h.minX:h.minY,m=0===n?h.maxX:h.maxY
if(d>=i&&m<r)l.push(h)
else if(!(m<i||d>=r)){var f=[]
if("Point"===p||"MultiPoint"===p)pt(u,f,i,r,n)
else if("LineString"===p)dt(u,f,i,r,n,!1,a.lineMetrics)
else if("MultiLineString"===p)ft(u,f,i,r,n,!1)
else if("Polygon"===p)ft(u,f,i,r,n,!0)
else if("MultiPolygon"===p)for(var g=0;g<u.length;g++){var _=[]
ft(u[g],_,i,r,n,!0),_.length&&f.push(_)}if(f.length){if(a.lineMetrics&&"LineString"===p){for(g=0;g<f.length;g++)l.push(rt(h.id,p,f[g],h.tags))
continue}"LineString"!==p&&"MultiLineString"!==p||(1===f.length?(p="LineString",f=f[0]):p="MultiLineString"),"Point"!==p&&"MultiPoint"!==p||(p=3===f.length?"Point":"MultiPoint"),l.push(rt(h.id,p,f,h.tags))}}}return l.length?l:null}function pt(t,e,i,r,n){for(var s=0;s<t.length;s+=3){var o=t[s+n]
o>=i&&o<=r&&(e.push(t[s]),e.push(t[s+1]),e.push(t[s+2]))}}function dt(t,e,i,r,n,s,o){for(var a,l,c=mt(t),h=0===n?_t:yt,u=t.start,p=0;p<t.length-3;p+=3){var d=t[p],m=t[p+1],f=t[p+2],g=t[p+3],_=t[p+4],y=0===n?d:m,x=0===n?g:_,v=!1
o&&(a=Math.sqrt(Math.pow(d-g,2)+Math.pow(m-_,2))),y<i?x>i&&(l=h(c,d,m,g,_,i),o&&(c.start=u+a*l)):y>r?x<r&&(l=h(c,d,m,g,_,r),o&&(c.start=u+a*l)):gt(c,d,m,f),x<i&&y>=i&&(l=h(c,d,m,g,_,i),v=!0),x>r&&y<=r&&(l=h(c,d,m,g,_,r),v=!0),!s&&v&&(o&&(c.end=u+a*l),e.push(c),c=mt(t)),o&&(u+=a)}var b=t.length-3
d=t[b],m=t[b+1],f=t[b+2],(y=0===n?d:m)>=i&&y<=r&&gt(c,d,m,f),b=c.length-3,s&&b>=3&&(c[b]!==c[0]||c[b+1]!==c[1])&&gt(c,c[0],c[1],c[2]),c.length&&e.push(c)}function mt(t){var e=[]
return e.size=t.size,e.start=t.start,e.end=t.end,e}function ft(t,e,i,r,n,s){for(var o=0;o<t.length;o++)dt(t[o],e,i,r,n,s,!1)}function gt(t,e,i,r){t.push(e),t.push(i),t.push(r)}function _t(t,e,i,r,n,s){var o=(s-e)/(r-e)
return t.push(s),t.push(i+(n-i)*o),t.push(1),o}function yt(t,e,i,r,n,s){var o=(s-i)/(n-i)
return t.push(e+(r-e)*o),t.push(s),t.push(1),o}function xt(t,e){for(var i=[],r=0;r<t.length;r++){var n,s=t[r],o=s.type
if("Point"===o||"MultiPoint"===o||"LineString"===o)n=vt(s.geometry,e)
else if("MultiLineString"===o||"Polygon"===o){n=[]
for(var a=0;a<s.geometry.length;a++)n.push(vt(s.geometry[a],e))}else if("MultiPolygon"===o)for(n=[],a=0;a<s.geometry.length;a++){for(var l=[],c=0;c<s.geometry[a].length;c++)l.push(vt(s.geometry[a][c],e))
n.push(l)}i.push(rt(s.id,o,n,s.tags))}return i}function vt(t,e){var i=[]
i.size=t.size,void 0!==t.start&&(i.start=t.start,i.end=t.end)
for(var r=0;r<t.length;r+=3)i.push(t[r]+e,t[r+1],t[r+2])
return i}function bt(t,e){if(t.transformed)return t
var i,r,n,s=1<<t.z,o=t.x,a=t.y
for(i=0;i<t.features.length;i++){var l=t.features[i],c=l.geometry,h=l.type
if(l.geometry=[],1===h)for(r=0;r<c.length;r+=2)l.geometry.push(wt(c[r],c[r+1],e,s,o,a))
else for(r=0;r<c.length;r++){var u=[]
for(n=0;n<c[r].length;n+=2)u.push(wt(c[r][n],c[r][n+1],e,s,o,a))
l.geometry.push(u)}}return t.transformed=!0,t}function wt(t,e,i,r,n,s){return[Math.round(i*(t*r-n)),Math.round(i*(e*r-s))]}function St(t,e,i,r,n){for(var s=e===n.maxZoom?0:n.tolerance/((1<<e)*n.extent),o={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:i,y:r,z:e,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},a=0;a<t.length;a++){o.numFeatures++,Tt(o,t[a],s,n)
var l=t[a].minX,c=t[a].minY,h=t[a].maxX,u=t[a].maxY
l<o.minX&&(o.minX=l),c<o.minY&&(o.minY=c),h>o.maxX&&(o.maxX=h),u>o.maxY&&(o.maxY=u)}return o}function Tt(t,e,i,r){var n=e.geometry,s=e.type,o=[]
if("Point"===s||"MultiPoint"===s)for(var a=0;a<n.length;a+=3)o.push(n[a]),o.push(n[a+1]),t.numPoints++,t.numSimplified++
else if("LineString"===s)It(o,n,t,i,!1,!1)
else if("MultiLineString"===s||"Polygon"===s)for(a=0;a<n.length;a++)It(o,n[a],t,i,"Polygon"===s,0===a)
else if("MultiPolygon"===s)for(var l=0;l<n.length;l++){var c=n[l]
for(a=0;a<c.length;a++)It(o,c[a],t,i,!0,0===a)}if(o.length){var h=e.tags||null
if("LineString"===s&&r.lineMetrics){for(var u in h={},e.tags)h[u]=e.tags[u]
h.mapbox_clip_start=n.start/n.size,h.mapbox_clip_end=n.end/n.size}var p={geometry:o,type:"Polygon"===s||"MultiPolygon"===s?3:"LineString"===s||"MultiLineString"===s?2:1,tags:h}
null!==e.id&&(p.id=e.id),t.features.push(p)}}function It(t,e,i,r,n,s){var o=r*r
if(r>0&&e.size<(n?o:r))i.numPoints+=e.length/3
else{for(var a=[],l=0;l<e.length;l+=3)(0===r||e[l+2]>o)&&(i.numSimplified++,a.push(e[l]),a.push(e[l+1])),i.numPoints++
n&&function(t,e){for(var i=0,r=0,n=t.length,s=n-2;r<n;s=r,r+=2)i+=(t[r]-t[s])*(t[r+1]+t[s+1])
if(i>0===e)for(r=0,n=t.length;r<n/2;r+=2){var o=t[r],a=t[r+1]
t[r]=t[n-2-r],t[r+1]=t[n-1-r],t[n-2-r]=o,t[n-1-r]=a}}(a,s),t.push(a)}}function Et(t,e){var i=(e=this.options=function(t,e){for(var i in e)t[i]=e[i]
return t}(Object.create(this.options),e)).debug
if(i&&console.time("preprocess data"),e.maxZoom<0||e.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range")
if(e.promoteId&&e.generateId)throw new Error("promoteId and generateId cannot be used together.")
var r=function(t,e){var i=[]
if("FeatureCollection"===t.type)for(var r=0;r<t.features.length;r++)st(i,t.features[r],e,r)
else st(i,"Feature"===t.type?t:{geometry:t},e)
return i}(t,e)
this.tiles={},this.tileCoords=[],i&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",e.indexMaxZoom,e.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),r=function(t,e){var i=e.buffer/e.extent,r=t,n=ut(t,1,-1-i,i,0,-1,2,e),s=ut(t,1,1-i,2+i,0,-1,2,e)
return(n||s)&&(r=ut(t,1,-i,1+i,0,-1,2,e)||[],n&&(r=xt(n,1).concat(r)),s&&(r=r.concat(xt(s,-1)))),r}(r,e),r.length&&this.splitTile(r,0,0,0),i&&(r.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function At(t,e,i){return 32*((1<<t)*i+e)+t}function zt(t,e){const i=t.tileID.canonical
if(!this._geoJSONIndex)return e(null,null)
const r=this._geoJSONIndex.getTile(i.z,i.x,i.y)
if(!r)return e(null,null)
const n=new f(r.features)
let s=M(n)
0===s.byteOffset&&s.byteLength===s.buffer.byteLength||(s=new Uint8Array(s)),e(null,{vectorTile:n,rawData:s.buffer})}Et.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},Et.prototype.splitTile=function(t,e,i,r,n,s,o){for(var a=[t,e,i,r],l=this.options,c=l.debug;a.length;){r=a.pop(),i=a.pop(),e=a.pop(),t=a.pop()
var h=1<<e,u=At(e,i,r),p=this.tiles[u]
if(!p&&(c>1&&console.time("creation"),p=this.tiles[u]=St(t,e,i,r,l),this.tileCoords.push({z:e,x:i,y:r}),c)){c>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",e,i,r,p.numFeatures,p.numPoints,p.numSimplified),console.timeEnd("creation"))
var d="z"+e
this.stats[d]=(this.stats[d]||0)+1,this.total++}if(p.source=t,n){if(e===l.maxZoom||e===n)continue
var m=1<<n-e
if(i!==Math.floor(s/m)||r!==Math.floor(o/m))continue}else if(e===l.indexMaxZoom||p.numPoints<=l.indexMaxPoints)continue
if(p.source=null,0!==t.length){c>1&&console.time("clipping")
var f,g,_,y,x,v,b=.5*l.buffer/l.extent,w=.5-b,S=.5+b,T=1+b
f=g=_=y=null,x=ut(t,h,i-b,i+S,0,p.minX,p.maxX,l),v=ut(t,h,i+w,i+T,0,p.minX,p.maxX,l),t=null,x&&(f=ut(x,h,r-b,r+S,1,p.minY,p.maxY,l),g=ut(x,h,r+w,r+T,1,p.minY,p.maxY,l),x=null),v&&(_=ut(v,h,r-b,r+S,1,p.minY,p.maxY,l),y=ut(v,h,r+w,r+T,1,p.minY,p.maxY,l),v=null),c>1&&console.timeEnd("clipping"),a.push(f||[],e+1,2*i,2*r),a.push(g||[],e+1,2*i,2*r+1),a.push(_||[],e+1,2*i+1,2*r),a.push(y||[],e+1,2*i+1,2*r+1)}}},Et.prototype.getTile=function(t,e,i){var r=this.options,n=r.extent,s=r.debug
if(t<0||t>24)return null
var o=1<<t,a=At(t,e=(e%o+o)%o,i)
if(this.tiles[a])return bt(this.tiles[a],n)
s>1&&console.log("drilling down to z%d-%d-%d",t,e,i)
for(var l,c=t,h=e,u=i;!l&&c>0;)c--,h=Math.floor(h/2),u=Math.floor(u/2),l=this.tiles[At(c,h,u)]
return l&&l.source?(s>1&&console.log("found parent tile z%d-%d-%d",c,h,u),s>1&&console.time("drilling down"),this.splitTile(l.source,c,h,u,t,e,i),s>1&&console.timeEnd("drilling down"),this.tiles[a]?bt(this.tiles[a],n):null):null}
class Ct extends l{constructor(t,e,i,r){super(t,e,i,zt),r&&(this.loadGeoJSON=r)}loadData(t,e){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),this._pendingCallback=e,this._pendingLoadDataParams=t,this._state&&"Idle"!==this._state?this._state="NeedsLoadData":(this._state="Coalescing",this._loadData())}_loadData(){if(!this._pendingCallback||!this._pendingLoadDataParams)return
const e=this._pendingCallback,i=this._pendingLoadDataParams
delete this._pendingCallback,delete this._pendingLoadDataParams
const r=!!(i&&i.request&&i.request.collectResourceTiming)&&new t.RequestPerformance(i.request)
this.loadGeoJSON(i,((n,s)=>{if(n||!s)return e(n)
if("object"!=typeof s)return e(new Error(`Input data given to '${i.source}' is not a valid GeoJSON object.`))
{h(s,!0)
try{if(i.filter){const e=t.createExpression(i.filter,{type:"boolean","property-type":"data-driven",overridable:!1,transition:!1})
if("error"===e.result)throw new Error(e.value.map((t=>`${t.key}: ${t.message}`)).join(", "))
const r=s.features.filter((t=>e.value.evaluate({zoom:0},t)))
s={type:"FeatureCollection",features:r}}this._geoJSONIndex=i.cluster?new G(function(e){let{superclusterOptions:i,clusterProperties:r}=e
if(!r||!i)return i
const n={},s={},o={accumulated:null,zoom:0},a={properties:null},l=Object.keys(r)
for(const c of l){const[e,i]=r[c],o=t.createExpression(i),a=t.createExpression("string"==typeof e?[e,["accumulated"],["get",c]]:e)
n[c]=o.value,s[c]=a.value}return i.map=t=>{a.properties=t
const e={}
for(const i of l)e[i]=n[i].evaluate(o,a)
return e},i.reduce=(t,e)=>{a.properties=e
for(const i of l)o.accumulated=t[i],t[i]=s[i].evaluate(o,a)},i}(i)).load(s.features):function(t,e){return new Et(t,e)}(s,i.geojsonVtOptions)}catch(n){return e(n)}this.loaded={}
const o={}
if(r){const t=r.finish()
t&&(o.resourceTiming={},o.resourceTiming[i.source]=JSON.parse(JSON.stringify(t)))}e(null,o)}}))}coalesce(){"Coalescing"===this._state?this._state="Idle":"NeedsLoadData"===this._state&&(this._state="Coalescing",this._loadData())}reloadTile(t,e){const i=this.loaded
return i&&i[t.uid]?super.reloadTile(t,e):this.loadTile(t,e)}loadGeoJSON(e,i){if(e.request)t.getJSON(e.request,i)
else{if("string"!=typeof e.data)return i(new Error(`Input data given to '${e.source}' is not a valid GeoJSON object.`))
try{return i(null,JSON.parse(e.data))}catch(t){return i(new Error(`Input data given to '${e.source}' is not a valid GeoJSON object.`))}}}removeSource(t,e){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),e()}getClusterExpansionZoom(t,e){try{e(null,this._geoJSONIndex.getClusterExpansionZoom(t.clusterId))}catch(t){e(t)}}getClusterChildren(t,e){try{e(null,this._geoJSONIndex.getChildren(t.clusterId))}catch(t){e(t)}}getClusterLeaves(t,e){try{e(null,this._geoJSONIndex.getLeaves(t.clusterId,t.limit,t.offset))}catch(t){e(t)}}}class Pt{constructor(e){this.self=e,this.actor=new t.Actor(e,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:l,geojson:Ct},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=(t,e)=>{if(this.workerSourceTypes[t])throw new Error(`Worker source with name "${t}" already registered.`)
this.workerSourceTypes[t]=e},this.self.registerRTLTextPlugin=e=>{if(t.plugin.isParsed())throw new Error("RTL text plugin already registered.")
t.plugin.applyArabicShaping=e.applyArabicShaping,t.plugin.processBidirectionalText=e.processBidirectionalText,t.plugin.processStyledBidirectionalText=e.processStyledBidirectionalText}}setReferrer(t,e){this.referrer=e}setImages(t,e,i){this.availableImages[t]=e
for(const r in this.workerSources[t]){const i=this.workerSources[t][r]
for(const t in i)i[t].availableImages=e}i()}setLayers(t,e,i){this.getLayerIndex(t).replace(e),i()}updateLayers(t,e,i){this.getLayerIndex(t).update(e.layers,e.removedIds),i()}loadTile(t,e,i){this.getWorkerSource(t,e.type,e.source).loadTile(e,i)}loadDEMTile(t,e,i){this.getDEMWorkerSource(t,e.source).loadTile(e,i)}reloadTile(t,e,i){this.getWorkerSource(t,e.type,e.source).reloadTile(e,i)}abortTile(t,e,i){this.getWorkerSource(t,e.type,e.source).abortTile(e,i)}removeTile(t,e,i){this.getWorkerSource(t,e.type,e.source).removeTile(e,i)}removeDEMTile(t,e){this.getDEMWorkerSource(t,e.source).removeTile(e)}removeSource(t,e,i){if(!this.workerSources[t]||!this.workerSources[t][e.type]||!this.workerSources[t][e.type][e.source])return
const r=this.workerSources[t][e.type][e.source]
delete this.workerSources[t][e.type][e.source],void 0!==r.removeSource?r.removeSource(e,i):i()}loadWorkerSource(t,e,i){try{this.self.importScripts(e.url),i()}catch(t){i(t.toString())}}syncRTLPluginState(e,i,r){try{t.plugin.setState(i)
const e=t.plugin.getPluginURL()
if(t.plugin.isLoaded()&&!t.plugin.isParsed()&&null!=e){this.self.importScripts(e)
const i=t.plugin.isParsed()
r(i?void 0:new Error(`RTL Text Plugin failed to import scripts from ${e}`),i)}}catch(t){r(t.toString())}}getAvailableImages(t){let e=this.availableImages[t]
return e||(e=[]),e}getLayerIndex(t){let e=this.layerIndexes[t]
return e||(e=this.layerIndexes[t]=new r),e}getWorkerSource(t,e,i){if(this.workerSources[t]||(this.workerSources[t]={}),this.workerSources[t][e]||(this.workerSources[t][e]={}),!this.workerSources[t][e][i]){const r={send:(e,i,r)=>{this.actor.send(e,i,r,t)}}
this.workerSources[t][e][i]=new this.workerSourceTypes[e](r,this.getLayerIndex(t),this.getAvailableImages(t))}return this.workerSources[t][e][i]}getDEMWorkerSource(t,e){return this.demWorkerSources[t]||(this.demWorkerSources[t]={}),this.demWorkerSources[t][e]||(this.demWorkerSources[t][e]=new c),this.demWorkerSources[t][e]}enforceCacheSizeLimit(e,i){t.enforceCacheSizeLimit(i)}}return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope&&(self.worker=new Pt(self)),Pt})),r(0,(function(t){var e=i
function i(t){return!function(t){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1
var t,e,i=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(i)
try{e=new Worker(r),t=!0}catch(e){t=!1}return e&&e.terminate(),URL.revokeObjectURL(r),t}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var t=document.createElement("canvas")
t.width=t.height=1
var e=t.getContext("2d")
if(!e)return!1
var i=e.getImageData(0,0,1,1)
return i&&i.width===t.width}()?(void 0===r[e=t&&t.failIfMajorPerformanceCaveat]&&(r[e]=function(t){var e,r=function(t){var e=document.createElement("canvas"),r=Object.create(i.webGLContextAttributes)
return r.failIfMajorPerformanceCaveat=t,e.getContext("webgl",r)||e.getContext("experimental-webgl",r)}(t)
if(!r)return!1
try{e=r.createShader(r.VERTEX_SHADER)}catch(t){return!1}return!(!e||r.isContextLost())&&(r.shaderSource(e,"void main() {}"),r.compileShader(e),!0===r.getShaderParameter(e,r.COMPILE_STATUS))}(e)),r[e]?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support"):"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"
var e}(t)}var r={}
function n(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1
for(let i=0;i<t.length;i++)if(!n(t[i],e[i]))return!1
return!0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return!1
if(Object.keys(t).length!==Object.keys(e).length)return!1
for(const i in t)if(!n(t[i],e[i]))return!1
return!0}return t===e}i.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}
class s{static testProp(t){if(!s.docStyle)return t[0]
for(let e=0;e<t.length;e++)if(t[e]in s.docStyle)return t[e]
return t[0]}static create(t,e,i){const r=window.document.createElement(t)
return void 0!==e&&(r.className=e),i&&i.appendChild(r),r}static createNS(t,e){return window.document.createElementNS(t,e)}static disableDrag(){s.docStyle&&s.selectProp&&(s.userSelect=s.docStyle[s.selectProp],s.docStyle[s.selectProp]="none")}static enableDrag(){s.docStyle&&s.selectProp&&(s.docStyle[s.selectProp]=s.userSelect)}static setTransform(t,e){t.style[s.transformProp]=e}static addEventListener(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
t.addEventListener(e,i,"passive"in r?r:r.capture)}static removeEventListener(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
t.removeEventListener(e,i,"passive"in r?r:r.capture)}static suppressClickInternal(t){t.preventDefault(),t.stopPropagation(),window.removeEventListener("click",s.suppressClickInternal,!0)}static suppressClick(){window.addEventListener("click",s.suppressClickInternal,!0),window.setTimeout((()=>{window.removeEventListener("click",s.suppressClickInternal,!0)}),0)}static mousePos(e,i){const r=e.getBoundingClientRect()
return new t.pointGeometry(i.clientX-r.left-e.clientLeft,i.clientY-r.top-e.clientTop)}static touchPos(e,i){const r=e.getBoundingClientRect(),n=[]
for(let s=0;s<i.length;s++)n.push(new t.pointGeometry(i[s].clientX-r.left-e.clientLeft,i[s].clientY-r.top-e.clientTop))
return n}static mouseButton(t){return t.button}static remove(t){t.parentNode&&t.parentNode.removeChild(t)}}s.docStyle="undefined"!=typeof window&&window.document&&window.document.documentElement.style,s.selectProp=s.testProp(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]),s.transformProp=s.testProp(["transform","WebkitTransform"])
class o{constructor(t){this._transformRequestFn=t}transformRequest(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}}normalizeSpriteURL(t,e,i){const r=function(t){const e=t.match(a)
if(!e)throw new Error(`Unable to parse URL "${t}"`)
return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}(t)
return r.path+=`${e}${i}`,function(t){const e=t.params.length?`?${t.params.join("&")}`:""
return`${t.protocol}://${t.authority}${t.path}${e}`}(r)}setTransformRequest(t){this._transformRequestFn=t}}const a=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/
function l(e){var i=new t.ARRAY_TYPE(3)
return i[0]=e[0],i[1]=e[1],i[2]=e[2],i}var c,h=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t}
c=new t.ARRAY_TYPE(3),t.ARRAY_TYPE!=Float32Array&&(c[0]=0,c[1]=0,c[2]=0)
var u=function(t){var e=t[0],i=t[1]
return e*e+i*i}
!function(){var e=new t.ARRAY_TYPE(2)
t.ARRAY_TYPE!=Float32Array&&(e[0]=0,e[1]=0)}()
class p{constructor(t,e,i,r){this.context=t,this.format=i,this.texture=t.gl.createTexture(),this.update(e,r)}update(e,i,r){const{width:n,height:s}=e,o=!(this.size&&this.size[0]===n&&this.size[1]===s||r),{context:a}=this,{gl:l}=a
if(this.useMipmap=Boolean(i&&i.useMipmap),l.bindTexture(l.TEXTURE_2D,this.texture),a.pixelStoreUnpackFlipY.set(!1),a.pixelStoreUnpack.set(1),a.pixelStoreUnpackPremultiplyAlpha.set(this.format===l.RGBA&&(!i||!1!==i.premultiply)),o)this.size=[n,s],e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.isImageBitmap(e)?l.texImage2D(l.TEXTURE_2D,0,this.format,this.format,l.UNSIGNED_BYTE,e):l.texImage2D(l.TEXTURE_2D,0,this.format,n,s,0,this.format,l.UNSIGNED_BYTE,e.data)
else{const{x:i,y:o}=r||{x:0,y:0}
e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.isImageBitmap(e)?l.texSubImage2D(l.TEXTURE_2D,0,i,o,l.RGBA,l.UNSIGNED_BYTE,e):l.texSubImage2D(l.TEXTURE_2D,0,i,o,n,s,l.RGBA,l.UNSIGNED_BYTE,e.data)}this.useMipmap&&this.isSizePowerOfTwo()&&l.generateMipmap(l.TEXTURE_2D)}bind(t,e,i){const{context:r}=this,{gl:n}=r
n.bindTexture(n.TEXTURE_2D,this.texture),i!==n.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(i=n.LINEAR),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,i||t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e)}isSizePowerOfTwo(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0}destroy(){const{gl:t}=this.context
t.deleteTexture(this.texture),this.texture=null}}function d(t){const{userImage:e}=t
return!!(e&&e.render&&e.render())&&(t.data.replace(new Uint8Array(e.data.buffer)),!0)}class m extends t.Evented{constructor(){super(),this.images={},this.updatedImages={},this.callbackDispatchedThisFrame={},this.loaded=!1,this.requestors=[],this.patterns={},this.atlasImage=new t.RGBAImage({width:1,height:1}),this.dirty=!0}isLoaded(){return this.loaded}setLoaded(t){if(this.loaded!==t&&(this.loaded=t,t)){for(const{ids:t,callback:e}of this.requestors)this._notify(t,e)
this.requestors=[]}}getImage(t){return this.images[t]}addImage(t,e){this._validate(t,e)&&(this.images[t]=e)}_validate(e,i){let r=!0
return this._validateStretch(i.stretchX,i.data&&i.data.width)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "stretchX" value`))),r=!1),this._validateStretch(i.stretchY,i.data&&i.data.height)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "stretchY" value`))),r=!1),this._validateContent(i.content,i)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "content" value`))),r=!1),r}_validateStretch(t,e){if(!t)return!0
let i=0
for(const r of t){if(r[0]<i||r[1]<r[0]||e<r[1])return!1
i=r[1]}return!0}_validateContent(t,e){return!(t&&(4!==t.length||t[0]<0||e.data.width<t[0]||t[1]<0||e.data.height<t[1]||t[2]<0||e.data.width<t[2]||t[3]<0||e.data.height<t[3]||t[2]<t[0]||t[3]<t[1]))}updateImage(t,e){e.version=this.images[t].version+1,this.images[t]=e,this.updatedImages[t]=!0}removeImage(t){const e=this.images[t]
delete this.images[t],delete this.patterns[t],e.userImage&&e.userImage.onRemove&&e.userImage.onRemove()}listImages(){return Object.keys(this.images)}getImages(t,e){let i=!0
if(!this.isLoaded())for(const r of t)this.images[r]||(i=!1)
this.isLoaded()||i?this._notify(t,e):this.requestors.push({ids:t,callback:e})}_notify(e,i){const r={}
for(const n of e){this.images[n]||this.fire(new t.Event("styleimagemissing",{id:n}))
const e=this.images[n]
e?r[n]={data:e.data.clone(),pixelRatio:e.pixelRatio,sdf:e.sdf,version:e.version,stretchX:e.stretchX,stretchY:e.stretchY,content:e.content,hasRenderCallback:Boolean(e.userImage&&e.userImage.render)}:t.warnOnce(`Image "${n}" could not be loaded. Please make sure you have added the image with map.addImage() or a "sprite" property in your style. You can provide missing images by listening for the "styleimagemissing" map event.`)}i(null,r)}getPixelSize(){const{width:t,height:e}=this.atlasImage
return{width:t,height:e}}getPattern(e){const i=this.patterns[e],r=this.getImage(e)
if(!r)return null
if(i&&i.position.version===r.version)return i.position
if(i)i.position.version=r.version
else{const i={w:r.data.width+2,h:r.data.height+2,x:0,y:0},n=new t.ImagePosition(i,r)
this.patterns[e]={bin:i,position:n}}return this._updatePatternAtlas(),this.patterns[e].position}bind(t){const e=t.gl
this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new p(t,this.atlasImage,e.RGBA),this.atlasTexture.bind(e.LINEAR,e.CLAMP_TO_EDGE)}_updatePatternAtlas(){const e=[]
for(const t in this.patterns)e.push(this.patterns[t].bin)
const{w:i,h:r}=t.potpack(e),n=this.atlasImage
n.resize({width:i||1,height:r||1})
for(const s in this.patterns){const{bin:e}=this.patterns[s],i=e.x+1,r=e.y+1,o=this.images[s].data,a=o.width,l=o.height
t.RGBAImage.copy(o,n,{x:0,y:0},{x:i,y:r},{width:a,height:l}),t.RGBAImage.copy(o,n,{x:0,y:l-1},{x:i,y:r-1},{width:a,height:1}),t.RGBAImage.copy(o,n,{x:0,y:0},{x:i,y:r+l},{width:a,height:1}),t.RGBAImage.copy(o,n,{x:a-1,y:0},{x:i-1,y:r},{width:1,height:l}),t.RGBAImage.copy(o,n,{x:0,y:0},{x:i+a,y:r},{width:1,height:l})}this.dirty=!0}beginFrame(){this.callbackDispatchedThisFrame={}}dispatchRenderCallbacks(t){for(const e of t){if(this.callbackDispatchedThisFrame[e])continue
this.callbackDispatchedThisFrame[e]=!0
const t=this.images[e]
d(t)&&this.updateImage(e,t)}}}const f=1e20
function g(t,e,i,r,n,s,o,a,l){for(let c=e;c<e+r;c++)_(t,i*s+c,s,n,o,a,l)
for(let c=i;c<i+n;c++)_(t,c*s+e,1,r,o,a,l)}function _(t,e,i,r,n,s,o){s[0]=0,o[0]=-f,o[1]=f,n[0]=t[e]
for(let a=1,l=0,c=0;a<r;a++){n[a]=t[e+a*i]
const r=a*a
do{const t=s[l]
c=(n[a]-n[t]+r-t*t)/(a-t)/2}while(c<=o[l]&&--l>-1)
l++,s[l]=a,o[l]=c,o[l+1]=f}for(let a=0,l=0;a<r;a++){for(;o[l+1]<a;)l++
const r=s[l],c=a-r
t[e+a*i]=n[r]+c*c}}class y{constructor(t,e){this.requestManager=t,this.localIdeographFontFamily=e,this.entries={}}setURL(t){this.url=t}getGlyphs(e,i){const r=[]
for(const t in e)for(const i of e[t])r.push({stack:t,id:i})
t.asyncAll(r,((t,e)=>{let{stack:i,id:r}=t,n=this.entries[i]
n||(n=this.entries[i]={glyphs:{},requests:{},ranges:{}})
let s=n.glyphs[r]
if(void 0!==s)return void e(null,{stack:i,id:r,glyph:s})
if(s=this._tinySDF(n,i,r),s)return n.glyphs[r]=s,void e(null,{stack:i,id:r,glyph:s})
const o=Math.floor(r/256)
if(256*o>65535)return void e(new Error("glyphs > 65535 not supported"))
if(n.ranges[o])return void e(null,{stack:i,id:r,glyph:s})
let a=n.requests[o]
a||(a=n.requests[o]=[],y.loadGlyphRange(i,o,this.url,this.requestManager,((t,e)=>{if(e){for(const t in e)this._doesCharSupportLocalGlyph(+t)||(n.glyphs[+t]=e[+t])
n.ranges[o]=!0}for(const i of a)i(t,e)
delete n.requests[o]}))),a.push(((t,n)=>{t?e(t):n&&e(null,{stack:i,id:r,glyph:n[r]||null})}))}),((t,e)=>{if(t)i(t)
else if(e){const t={}
for(const{stack:i,id:r,glyph:n}of e)(t[i]||(t[i]={}))[r]=n&&{id:n.id,bitmap:n.bitmap.clone(),metrics:n.metrics}
i(null,t)}}))}_doesCharSupportLocalGlyph(e){return!!this.localIdeographFontFamily&&(t.unicodeBlockLookup["CJK Unified Ideographs"](e)||t.unicodeBlockLookup["Hangul Syllables"](e)||t.unicodeBlockLookup.Hiragana(e)||t.unicodeBlockLookup.Katakana(e))}_tinySDF(e,i,r){const n=this.localIdeographFontFamily
if(!n)return
if(!this._doesCharSupportLocalGlyph(r))return
let s=e.tinySDF
if(!s){let t="400";/bold/i.test(i)?t="900":/medium/i.test(i)?t="500":/light/i.test(i)&&(t="200"),s=e.tinySDF=new y.TinySDF({fontSize:24,buffer:3,radius:8,cutoff:.25,fontFamily:n,fontWeight:t})}const o=s.draw(String.fromCharCode(r))
return{id:r,bitmap:new t.AlphaImage({width:o.width||30,height:o.height||30},o.data),metrics:{width:o.glyphWidth||24,height:o.glyphHeight||24,left:o.glyphLeft||0,top:o.glyphTop-27||-8,advance:o.glyphAdvance||24}}}}y.loadGlyphRange=function(e,i,r,n,s){const o=256*i,a=o+255,l=n.transformRequest(r.replace("{fontstack}",e).replace("{range}",`${o}-${a}`),t.ResourceType.Glyphs)
t.getArrayBuffer(l,((e,i)=>{if(e)s(e)
else if(i){const e={}
for(const r of t.parseGlyphPBF(i))e[r.id]=r
s(null,e)}}))},y.TinySDF=class{constructor(){let{fontSize:t=24,buffer:e=3,radius:i=8,cutoff:r=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:o="normal"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.buffer=e,this.cutoff=r,this.radius=i
const a=this.size=t+4*e,l=this._createCanvas(a),c=this.ctx=l.getContext("2d",{willReadFrequently:!0})
c.font=`${o} ${s} ${t}px ${n}`,c.textBaseline="alphabetic",c.textAlign="left",c.fillStyle="black",this.gridOuter=new Float64Array(a*a),this.gridInner=new Float64Array(a*a),this.f=new Float64Array(a),this.z=new Float64Array(a+1),this.v=new Uint16Array(a)}_createCanvas(t){const e=document.createElement("canvas")
return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:i,actualBoundingBoxDescent:r,actualBoundingBoxLeft:n,actualBoundingBoxRight:s}=this.ctx.measureText(t),o=Math.ceil(i),a=Math.min(this.size-this.buffer,Math.ceil(s-n)),l=Math.min(this.size-this.buffer,o+Math.ceil(r)),c=a+2*this.buffer,h=l+2*this.buffer,u=Math.max(c*h,0),p=new Uint8ClampedArray(u),d={data:p,width:c,height:h,glyphWidth:a,glyphHeight:l,glyphTop:o,glyphLeft:0,glyphAdvance:e}
if(0===a||0===l)return d
const{ctx:m,buffer:_,gridInner:y,gridOuter:x}=this
m.clearRect(_,_,a,l),m.fillText(t,_,_+o)
const v=m.getImageData(_,_,a,l)
x.fill(f,0,u),y.fill(0,0,u)
for(let g=0;g<l;g++)for(let t=0;t<a;t++){const e=v.data[4*(g*a+t)+3]/255
if(0===e)continue
const i=(g+_)*c+t+_
if(1===e)x[i]=0,y[i]=f
else{const t=.5-e
x[i]=t>0?t*t:0,y[i]=t<0?t*t:0}}g(x,0,0,c,h,c,this.f,this.v,this.z),g(y,_,_,a,l,c,this.f,this.v,this.z)
for(let f=0;f<u;f++){const t=Math.sqrt(x[f])-Math.sqrt(y[f])
p[f]=Math.round(255-255*(t/this.radius+this.cutoff))}return d}}
const x=new t.Properties({anchor:new t.DataConstantProperty(t.spec.light.anchor),position:new class{constructor(){this.specification=t.spec.light.position}possiblyEvaluate(e,i){return t.sphericalToCartesian(e.expression.evaluate(i))}interpolate(e,i,r){return{x:t.number(e.x,i.x,r),y:t.number(e.y,i.y,r),z:t.number(e.z,i.z,r)}}},color:new t.DataConstantProperty(t.spec.light.color),intensity:new t.DataConstantProperty(t.spec.light.intensity)}),v="-transition"
class b extends t.Evented{constructor(e){super(),this._transitionable=new t.Transitionable(x),this.setLight(e),this._transitioning=this._transitionable.untransitioned()}getLight(){return this._transitionable.serialize()}setLight(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!this._validate(t.validateLight,e,i))for(const t in e){const i=e[t]
t.endsWith(v)?this._transitionable.setTransition(t.slice(0,-v.length),i):this._transitionable.setValue(t,i)}}updateTransitions(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning)}hasTransition(){return this._transitioning.hasTransition()}recalculate(t){this.properties=this._transitioning.possiblyEvaluate(t)}_validate(e,i,r){return(!r||!1!==r.validate)&&t.emitValidationErrors(this,e.call(t.validateStyle,t.extend({value:i,style:{glyphs:!0,sprite:!0},styleSpec:t.spec})))}}class w{constructor(t,e){this.width=t,this.height=e,this.nextRow=0,this.data=new Uint8Array(this.width*this.height),this.dashEntry={}}getDash(t,e){const i=t.join(",")+String(e)
return this.dashEntry[i]||(this.dashEntry[i]=this.addDash(t,e)),this.dashEntry[i]}getDashRanges(t,e,i){const r=[]
let n=t.length%2==1?-t[t.length-1]*i:0,s=t[0]*i,o=!0
r.push({left:n,right:s,isDash:o,zeroLength:0===t[0]})
let a=t[0]
for(let l=1;l<t.length;l++){o=!o
const e=t[l]
n=a*i,a+=e,s=a*i,r.push({left:n,right:s,isDash:o,zeroLength:0===e})}return r}addRoundDash(t,e,i){const r=e/2
for(let n=-i;n<=i;n++){const e=this.width*(this.nextRow+i+n)
let s=0,o=t[s]
for(let a=0;a<this.width;a++){a/o.right>1&&(o=t[++s])
const l=Math.abs(a-o.left),c=Math.abs(a-o.right),h=Math.min(l,c)
let u
const p=n/i*(r+1)
if(o.isDash){const t=r-Math.abs(p)
u=Math.sqrt(h*h+t*t)}else u=r-Math.sqrt(h*h+p*p)
this.data[e+a]=Math.max(0,Math.min(255,u+128))}}}addRegularDash(t){for(let o=t.length-1;o>=0;--o){const e=t[o],i=t[o+1]
e.zeroLength?t.splice(o,1):i&&i.isDash===e.isDash&&(i.left=e.left,t.splice(o,1))}const e=t[0],i=t[t.length-1]
e.isDash===i.isDash&&(e.left=i.left-this.width,i.right=e.right+this.width)
const r=this.width*this.nextRow
let n=0,s=t[n]
for(let o=0;o<this.width;o++){o/s.right>1&&(s=t[++n])
const e=Math.abs(o-s.left),i=Math.abs(o-s.right),a=Math.min(e,i)
this.data[r+o]=Math.max(0,Math.min(255,(s.isDash?a:-a)+128))}}addDash(e,i){const r=i?7:0,n=2*r+1
if(this.nextRow+n>this.height)return t.warnOnce("LineAtlas out of space"),null
let s=0
for(let t=0;t<e.length;t++)s+=e[t]
if(0!==s){const t=this.width/s,n=this.getDashRanges(e,this.width,t)
i?this.addRoundDash(n,t,r):this.addRegularDash(n)}const o={y:(this.nextRow+r+.5)/this.height,height:2*r/this.height,width:s}
return this.nextRow+=n,this.dirty=!0,o}bind(t){const e=t.gl
this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.ALPHA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.ALPHA,this.width,this.height,0,e.ALPHA,e.UNSIGNED_BYTE,this.data))}}class S{constructor(e,i){this.workerPool=e,this.actors=[],this.currentActor=0,this.id=t.uniqueId()
const r=this.workerPool.acquire(this.id)
for(let t=0;t<r.length;t++){const e=new S.Actor(r[t],i,this.id)
e.name=`Worker ${t}`,this.actors.push(e)}}broadcast(e,i,r){t.asyncAll(this.actors,((t,r)=>{t.send(e,i,r)}),r=r||function(){})}getActor(){return this.currentActor=(this.currentActor+1)%this.actors.length,this.actors[this.currentActor]}remove(){this.actors.forEach((t=>{t.remove()})),this.actors=[],this.workerPool.release(this.id)}}function T(e,i,r){const n=function(i,n){if(i)return r(i)
if(n){const i=t.pick(t.extend(n,e),["tiles","minzoom","maxzoom","attribution","bounds","scheme","tileSize","encoding"])
n.vector_layers&&(i.vectorLayers=n.vector_layers,i.vectorLayerIds=i.vectorLayers.map((t=>t.id))),r(null,i)}}
return e.url?t.getJSON(i.transformRequest(e.url,t.ResourceType.Source),n):t.exported.frame((()=>n(null,e)))}S.Actor=t.Actor
class I{constructor(e,i,r){this.bounds=t.LngLatBounds.convert(this.validateBounds(e)),this.minzoom=i||0,this.maxzoom=r||24}validateBounds(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]}contains(e){const i=Math.pow(2,e.z),r=Math.floor(t.mercatorXfromLng(this.bounds.getWest())*i),n=Math.floor(t.mercatorYfromLat(this.bounds.getNorth())*i),s=Math.ceil(t.mercatorXfromLng(this.bounds.getEast())*i),o=Math.ceil(t.mercatorYfromLat(this.bounds.getSouth())*i)
return e.x>=r&&e.x<s&&e.y>=n&&e.y<o}}class E extends t.Evented{constructor(e,i,r,n){if(super(),this.id=e,this.dispatcher=r,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,this._loaded=!1,t.extend(this,t.pick(i,["url","scheme","tileSize","promoteId"])),this._options=t.extend({type:"vector"},i),this._collectResourceTiming=i.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512")
this.setEventedParent(n)}load(){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=T(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,this.map.style.sourceCaches[this.id].clearTiles(),e?this.fire(new t.ErrorEvent(e)):i&&(t.extend(this,i),i.bounds&&(this.tileBounds=new I(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))}))}loaded(){return this._loaded}hasTile(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)}onAdd(t){this.map=t,this.load()}setSourceProperty(t){this._tileJSONRequest&&this._tileJSONRequest.cancel(),t(),this.load()}setTiles(t){return this.setSourceProperty((()=>{this._options.tiles=t})),this}setUrl(t){return this.setSourceProperty((()=>{this.url=t,this._options.url=t})),this}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)}serialize(){return t.extend({},this._options)}loadTile(e,i){const r=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme),n={request:this.map._requestManager.transformRequest(r,t.ResourceType.Tile),uid:e.uid,tileID:e.tileID,zoom:e.tileID.overscaledZ,tileSize:this.tileSize*e.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId}
function s(r,n){return delete e.request,e.aborted?i(null):r&&404!==r.status?i(r):(n&&n.resourceTiming&&(e.resourceTiming=n.resourceTiming),this.map._refreshExpiredTiles&&n&&e.setExpiryData(n),e.loadVectorData(n,this.map.painter),t.cacheEntryPossiblyAdded(this.dispatcher),i(null),void(e.reloadCallback&&(this.loadTile(e,e.reloadCallback),e.reloadCallback=null)))}n.request.collectResourceTiming=this._collectResourceTiming,e.actor&&"expired"!==e.state?"loading"===e.state?e.reloadCallback=i:e.request=e.actor.send("reloadTile",n,s.bind(this)):(e.actor=this.dispatcher.getActor(),e.request=e.actor.send("loadTile",n,s.bind(this)))}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.actor&&t.actor.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0)}unloadTile(t){t.unloadVectorData(),t.actor&&t.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0)}hasTransition(){return!1}}class A extends t.Evented{constructor(e,i,r,n){super(),this.id=e,this.dispatcher=r,this.setEventedParent(n),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.extend({type:"raster"},i),t.extend(this,t.pick(i,["url","scheme","tileSize"]))}load(){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=T(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,e?this.fire(new t.ErrorEvent(e)):i&&(t.extend(this,i),i.bounds&&(this.tileBounds=new I(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))}))}loaded(){return this._loaded}onAdd(t){this.map=t,this.load()}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)}serialize(){return t.extend({},this._options)}hasTile(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)}loadTile(e,i){const r=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme)
e.request=t.getImage(this.map._requestManager.transformRequest(r,t.ResourceType.Tile),((r,n,s)=>{if(delete e.request,e.aborted)e.state="unloaded",i(null)
else if(r)e.state="errored",i(r)
else if(n){this.map._refreshExpiredTiles&&e.setExpiryData(s)
const r=this.map.painter.context,o=r.gl
e.texture=this.map.painter.getTileTexture(n.width),e.texture?e.texture.update(n,{useMipmap:!0}):(e.texture=new p(r,n,o.RGBA,{useMipmap:!0}),e.texture.bind(o.LINEAR,o.CLAMP_TO_EDGE,o.LINEAR_MIPMAP_NEAREST),r.extTextureFilterAnisotropic&&o.texParameterf(o.TEXTURE_2D,r.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,r.extTextureFilterAnisotropicMax)),e.state="loaded",t.cacheEntryPossiblyAdded(this.dispatcher),i(null)}}))}abortTile(t,e){t.request&&(t.request.cancel(),delete t.request),e()}unloadTile(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e()}hasTransition(){return!1}}let z
class C extends A{constructor(e,i,r,n){super(e,i,r,n),this.type="raster-dem",this.maxzoom=22,this._options=t.extend({type:"raster-dem"},i),this.encoding=i.encoding||"mapbox"}serialize(){return{type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds,encoding:this.encoding}}loadTile(e,i){const r=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme)
function n(t,r){t&&(e.state="errored",i(t)),r&&(e.dem=r,e.needsHillshadePrepare=!0,e.state="loaded",i(null))}e.request=t.getImage(this.map._requestManager.transformRequest(r,t.ResourceType.Tile),function(r,s){if(delete e.request,e.aborted)e.state="unloaded",i(null)
else if(r)e.state="errored",i(r)
else if(s){this.map._refreshExpiredTiles&&e.setExpiryData(s),delete s.cacheControl,delete s.expires
const i=t.isImageBitmap(s)&&(null==z&&(z="undefined"!=typeof OffscreenCanvas&&new OffscreenCanvas(1,1).getContext("2d")&&"function"==typeof createImageBitmap),z)?s:t.exported.getImageData(s,1),r={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:i,encoding:this.encoding}
e.actor&&"expired"!==e.state||(e.actor=this.dispatcher.getActor(),e.actor.send("loadDEMTile",r,n.bind(this)))}}.bind(this)),e.neighboringTiles=this._getNeighboringTiles(e.tileID)}_getNeighboringTiles(e){const i=e.canonical,r=Math.pow(2,i.z),n=(i.x-1+r)%r,s=0===i.x?e.wrap-1:e.wrap,o=(i.x+1+r)%r,a=i.x+1===r?e.wrap+1:e.wrap,l={}
return l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,a,i.z,o,i.y).key]={backfilled:!1},i.y>0&&(l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,a,i.z,o,i.y-1).key]={backfilled:!1}),i.y+1<r&&(l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,a,i.z,o,i.y+1).key]={backfilled:!1}),l}unloadTile(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",t.actor&&t.actor.send("removeDEMTile",{uid:t.uid,source:this.id})}}class P extends t.Evented{constructor(e,i,r,n){super(),this.id=e,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this._pendingLoads=0,this.actor=r.getActor(),this.setEventedParent(n),this._data=i.data,this._options=t.extend({},i),this._collectResourceTiming=i.collectResourceTiming,void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type),i.attribution&&(this.attribution=i.attribution),this.promoteId=i.promoteId
const s=t.EXTENT/this.tileSize
this.workerOptions=t.extend({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*s,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*s,extent:t.EXTENT,maxZoom:this.maxzoom,lineMetrics:i.lineMetrics||!1,generateId:i.generateId||!1},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?i.clusterMaxZoom:this.maxzoom-1,minPoints:Math.max(2,i.clusterMinPoints||2),extent:t.EXTENT,radius:(i.clusterRadius||50)*s,log:!1,generateId:i.generateId||!1},clusterProperties:i.clusterProperties,filter:i.filter},i.workerOptions)}load(){this._updateWorkerData("metadata")}onAdd(t){this.map=t,this.load()}setData(t){return this._data=t,this._updateWorkerData("content"),this}getClusterExpansionZoom(t,e){return this.actor.send("geojson.getClusterExpansionZoom",{clusterId:t,source:this.id},e),this}getClusterChildren(t,e){return this.actor.send("geojson.getClusterChildren",{clusterId:t,source:this.id},e),this}getClusterLeaves(t,e,i,r){return this.actor.send("geojson.getClusterLeaves",{source:this.id,clusterId:t,limit:e,offset:i},r),this}_updateWorkerData(e){const i=t.extend({},this.workerOptions),r=this._data
"string"==typeof r?(i.request=this.map._requestManager.transformRequest(t.exported.resolveURL(r),t.ResourceType.Source),i.request.collectResourceTiming=this._collectResourceTiming):i.data=JSON.stringify(r),this._pendingLoads++,this.fire(new t.Event("dataloading",{dataType:"source"})),this.actor.send(`${this.type}.loadData`,i,((r,n)=>{if(this._pendingLoads--,this._removed||n&&n.abandoned)return
let s=null
if(n&&n.resourceTiming&&n.resourceTiming[this.id]&&(s=n.resourceTiming[this.id].slice(0)),this.actor.send(`${this.type}.coalesce`,{source:i.source},null),r)return void this.fire(new t.ErrorEvent(r))
const o={dataType:"source",sourceDataType:e}
this._collectResourceTiming&&s&&s.length>0&&t.extend(o,{resourceTiming:s}),this.fire(new t.Event("data",o))}))}loaded(){return 0===this._pendingLoads}loadTile(t,e){const i=t.actor?"reloadTile":"loadTile"
t.actor=this.actor
const r={type:this.type,uid:t.uid,tileID:t.tileID,zoom:t.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId}
t.request=this.actor.send(i,r,((r,n)=>(delete t.request,t.unloadVectorData(),t.aborted?e(null):r?e(r):(t.loadVectorData(n,this.map.painter,"reloadTile"===i),e(null)))))}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.aborted=!0}unloadTile(t){t.unloadVectorData(),this.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id})}onRemove(){this._removed=!0,this.actor.send("removeSource",{type:this.type,source:this.id})}serialize(){return t.extend({},this._options,{type:this.type,data:this._data})}hasTransition(){return!1}}var k=t.createLayout([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}])
class M extends t.Evented{constructor(t,e,i,r){super(),this.id=t,this.dispatcher=i,this.coordinates=e.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this._loaded=!1,this.setEventedParent(r),this.options=e}load(e,i){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this.url=this.options.url,t.getImage(this.map._requestManager.transformRequest(this.url,t.ResourceType.Image),((r,n)=>{this._loaded=!0,r?this.fire(new t.ErrorEvent(r)):n&&(this.image=n,e&&(this.coordinates=e),i&&i(),this._finishLoading())}))}loaded(){return this._loaded}updateImage(t){return this.image&&t.url?(this.options.url=t.url,this.load(t.coordinates,(()=>{this.texture=null})),this):this}_finishLoading(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})))}onAdd(t){this.map=t,this.load()}setCoordinates(e){this.coordinates=e
const i=e.map(t.MercatorCoordinate.fromLngLat)
this.tileID=function(e){let i=1/0,r=1/0,n=-1/0,s=-1/0
for(const t of e)i=Math.min(i,t.x),r=Math.min(r,t.y),n=Math.max(n,t.x),s=Math.max(s,t.y)
const o=Math.max(n-i,s-r),a=Math.max(0,Math.floor(-Math.log(o)/Math.LN2)),l=Math.pow(2,a)
return new t.CanonicalTileID(a,Math.floor((i+n)/2*l),Math.floor((r+s)/2*l))}(i),this.minzoom=this.maxzoom=this.tileID.z
const r=i.map((t=>this.tileID.getTilePoint(t)._round()))
return this._boundsArray=new t.RasterBoundsArray,this._boundsArray.emplaceBack(r[0].x,r[0].y,0,0),this._boundsArray.emplaceBack(r[1].x,r[1].y,t.EXTENT,0),this._boundsArray.emplaceBack(r[3].x,r[3].y,0,t.EXTENT),this._boundsArray.emplaceBack(r[2].x,r[2].y,t.EXTENT,t.EXTENT),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})),this}prepare(){if(0===Object.keys(this.tiles).length||!this.image)return
const e=this.map.painter.context,i=e.gl
this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,k.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture||(this.texture=new p(e,this.image,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE))
for(const t in this.tiles){const e=this.tiles[t]
"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture)}}loadTile(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null))}serialize(){return{type:"image",url:this.options.url,coordinates:this.coordinates}}hasTransition(){return!1}}class D extends M{constructor(t,e,i,r){super(t,e,i,r),this.roundZoom=!0,this.type="video",this.options=e}load(){this._loaded=!1
const e=this.options
this.urls=[]
for(const i of e.urls)this.urls.push(this.map._requestManager.transformRequest(i,t.ResourceType.Source).url)
t.getVideo(this.urls,((e,i)=>{this._loaded=!0,e?this.fire(new t.ErrorEvent(e)):i&&(this.video=i,this.video.loop=!0,this.video.addEventListener("playing",(()=>{this.map.triggerRepaint()})),this.map&&this.video.play(),this._finishLoading())}))}pause(){this.video&&this.video.pause()}play(){this.video&&this.video.play()}seek(e){if(this.video){const i=this.video.seekable
e<i.start(0)||e>i.end(0)?this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${this.id}`,null,`Playback for this video can be set only between the ${i.start(0)} and ${i.end(0)}-second mark.`))):this.video.currentTime=e}}getVideo(){return this.video}onAdd(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)))}prepare(){if(0===Object.keys(this.tiles).length||this.video.readyState<2)return
const e=this.map.painter.context,i=e.gl
this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,k.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?this.video.paused||(this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE),i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,this.video)):(this.texture=new p(e,this.video,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE))
for(const t in this.tiles){const e=this.tiles[t]
"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture)}}serialize(){return{type:"video",urls:this.urls,coordinates:this.coordinates}}hasTransition(){return this.video&&!this.video.paused}}class L extends M{constructor(e,i,r,n){super(e,i,r,n),i.coordinates?Array.isArray(i.coordinates)&&4===i.coordinates.length&&!i.coordinates.some((t=>!Array.isArray(t)||2!==t.length||t.some((t=>"number"!=typeof t))))||this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'missing required property "coordinates"'))),i.animate&&"boolean"!=typeof i.animate&&this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'optional "animate" property must be a boolean value'))),i.canvas?"string"==typeof i.canvas||i.canvas instanceof HTMLCanvasElement||this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'missing required property "canvas"'))),this.options=i,this.animate=void 0===i.animate||i.animate}load(){this._loaded=!0,this.canvas||(this.canvas=this.options.canvas instanceof HTMLCanvasElement?this.options.canvas:document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.ErrorEvent(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map.triggerRepaint()},this.pause=function(){this._playing&&(this.prepare(),this._playing=!1)},this._finishLoading())}getCanvas(){return this.canvas}onAdd(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play()}onRemove(){this.pause()}prepare(){let e=!1
if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),this._hasInvalidDimensions())return
if(0===Object.keys(this.tiles).length)return
const i=this.map.painter.context,r=i.gl
this.boundsBuffer||(this.boundsBuffer=i.createVertexBuffer(this._boundsArray,k.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?(e||this._playing)&&this.texture.update(this.canvas,{premultiply:!0}):this.texture=new p(i,this.canvas,r.RGBA,{premultiply:!0})
for(const t in this.tiles){const e=this.tiles[t]
"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture)}}serialize(){return{type:"canvas",coordinates:this.coordinates}}hasTransition(){return this._playing}_hasInvalidDimensions(){for(const t of[this.canvas.width,this.canvas.height])if(isNaN(t)||t<=0)return!0
return!1}}const B={vector:E,raster:A,"raster-dem":C,geojson:P,video:D,image:M,canvas:L}
function R(e,i){const r=t.create()
return t.translate(r,r,[1,1,0]),t.scale(r,r,[.5*e.width,.5*e.height,1]),t.multiply(r,r,e.calculatePosMatrix(i.toUnwrapped()))}function F(t,e,i,r,n,s){const o=function(t,e,i){if(t)for(const r of t){const t=e[r]
if(t&&t.source===i&&"fill-extrusion"===t.type)return!0}else for(const r in e){const t=e[r]
if(t.source===i&&"fill-extrusion"===t.type)return!0}return!1}(n&&n.layers,e,t.id),a=s.maxPitchScaleFactor(),l=t.tilesIn(r,a,o)
l.sort(O)
const c=[]
for(const u of l)c.push({wrappedTileID:u.tileID.wrapped().key,queryResults:u.tile.queryRenderedFeatures(e,i,t._state,u.queryGeometry,u.cameraQueryGeometry,u.scale,n,s,a,R(t.transform,u.tileID))})
const h=function(t){const e={},i={}
for(const r of t){const t=r.queryResults,n=r.wrappedTileID,s=i[n]=i[n]||{}
for(const i in t){const r=t[i],n=s[i]=s[i]||{},o=e[i]=e[i]||[]
for(const t of r)n[t.featureIndex]||(n[t.featureIndex]=!0,o.push(t))}}return e}(c)
for(const u in h)h[u].forEach((e=>{const i=e.feature,r=t.getFeatureState(i.layer["source-layer"],i.id)
i.source=i.layer.source,i.layer["source-layer"]&&(i.sourceLayer=i.layer["source-layer"]),i.state=r}))
return h}function O(t,e){const i=t.tileID,r=e.tileID
return i.overscaledZ-r.overscaledZ||i.canonical.y-r.canonical.y||i.wrap-r.wrap||i.canonical.x-r.canonical.x}class U{constructor(e,i){this.tileID=e,this.uid=t.uniqueId(),this.uses=0,this.tileSize=i,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.expiredRequestCount=0,this.state="loading"}registerFadeDuration(e){const i=e+this.timeAdded
i<t.exported.now()||this.fadeEndTime&&i<this.fadeEndTime||(this.fadeEndTime=i)}wasRequested(){return"errored"===this.state||"loaded"===this.state||"reloading"===this.state}loadVectorData(e,i,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",e){e.featureIndex&&(this.latestFeatureIndex=e.featureIndex,e.rawTileData?(this.latestRawTileData=e.rawTileData,this.latestFeatureIndex.rawTileData=e.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=e.collisionBoxArray,this.buckets=function(t,e){const i={}
if(!e)return i
for(const r of t){const t=r.layerIds.map((t=>e.getLayer(t))).filter(Boolean)
if(0!==t.length){r.layers=t,r.stateDependentLayerIds&&(r.stateDependentLayers=r.stateDependentLayerIds.map((e=>t.filter((t=>t.id===e))[0])))
for(const e of t)i[e.id]=r}}return i}(e.buckets,i.style),this.hasSymbolBuckets=!1
for(const e in this.buckets){const i=this.buckets[e]
if(i instanceof t.SymbolBucket){if(this.hasSymbolBuckets=!0,!r)break
i.justReloaded=!0}}if(this.hasRTLText=!1,this.hasSymbolBuckets)for(const e in this.buckets){const i=this.buckets[e]
if(i instanceof t.SymbolBucket&&i.hasRTLText){this.hasRTLText=!0,t.lazyLoadRTLTextPlugin()
break}}this.queryPadding=0
for(const t in this.buckets){const e=this.buckets[t]
this.queryPadding=Math.max(this.queryPadding,i.style.getLayer(t).queryRadius(e))}e.imageAtlas&&(this.imageAtlas=e.imageAtlas),e.glyphAtlasImage&&(this.glyphAtlasImage=e.glyphAtlasImage)}else this.collisionBoxArray=new t.CollisionBoxArray}unloadVectorData(){for(const t in this.buckets)this.buckets[t].destroy()
this.buckets={},this.imageAtlasTexture&&this.imageAtlasTexture.destroy(),this.imageAtlas&&(this.imageAtlas=null),this.glyphAtlasTexture&&this.glyphAtlasTexture.destroy(),this.latestFeatureIndex=null,this.state="unloaded"}getBucket(t){return this.buckets[t.id]}upload(t){for(const i in this.buckets){const e=this.buckets[i]
e.uploadPending()&&e.upload(t)}const e=t.gl
this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new p(t,this.imageAtlas.image,e.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new p(t,this.glyphAtlasImage,e.ALPHA),this.glyphAtlasImage=null)}prepare(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture)}queryRenderedFeatures(t,e,i,r,n,s,o,a,l,c){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:r,cameraQueryGeometry:n,scale:s,tileSize:this.tileSize,pixelPosMatrix:c,transform:a,params:o,queryPadding:this.queryPadding*l},t,e,i):{}}querySourceFeatures(e,i){const r=this.latestFeatureIndex
if(!r||!r.rawTileData)return
const n=r.loadVTLayers(),s=i?i.sourceLayer:"",o=n._geojsonTileLayer||n[s]
if(!o)return
const a=t.createFilter(i&&i.filter),{z:l,x:c,y:h}=this.tileID.canonical,u={z:l,x:c,y:h}
for(let p=0;p<o.length;p++){const i=o.feature(p)
if(a.needGeometry){const e=t.toEvaluationFeature(i,!0)
if(!a.filter(new t.EvaluationParameters(this.tileID.overscaledZ),e,this.tileID.canonical))continue}else if(!a.filter(new t.EvaluationParameters(this.tileID.overscaledZ),i))continue
const n=r.getId(i,s),d=new t.GeoJSONFeature(i,l,c,h,n)
d.tile=u,e.push(d)}}hasData(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state}patternsLoaded(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length}setExpiryData(e){const i=this.expirationTime
if(e.cacheControl){const i=t.parseCacheControl(e.cacheControl)
i["max-age"]&&(this.expirationTime=Date.now()+1e3*i["max-age"])}else e.expires&&(this.expirationTime=new Date(e.expires).getTime())
if(this.expirationTime){const t=Date.now()
let e=!1
if(this.expirationTime>t)e=!1
else if(i)if(this.expirationTime<i)e=!0
else{const r=this.expirationTime-i
r?this.expirationTime=t+Math.max(r,3e4):e=!0}else e=!0
e?(this.expiredRequestCount++,this.state="expired"):this.expiredRequestCount=0}}getExpiryTimeout(){if(this.expirationTime)return this.expiredRequestCount?1e3*(1<<Math.min(this.expiredRequestCount-1,31)):Math.min(this.expirationTime-(new Date).getTime(),Math.pow(2,31)-1)}setFeatureState(t,e){if(!this.latestFeatureIndex||!this.latestFeatureIndex.rawTileData||0===Object.keys(t).length)return
const i=this.latestFeatureIndex.loadVTLayers()
for(const r in this.buckets){if(!e.style.hasLayer(r))continue
const n=this.buckets[r],s=n.layers[0].sourceLayer||"_geojsonTileLayer",o=i[s],a=t[s]
if(!o||!a||0===Object.keys(a).length)continue
n.update(a,o,this.imageAtlas&&this.imageAtlas.patternPositions||{})
const l=e&&e.style&&e.style.getLayer(r)
l&&(this.queryPadding=Math.max(this.queryPadding,l.queryRadius(n)))}}holdingForFade(){return void 0!==this.symbolFadeHoldUntil}symbolFadeFinished(){return!this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<t.exported.now()}clearFadeHold(){this.symbolFadeHoldUntil=void 0}setHoldDuration(e){this.symbolFadeHoldUntil=t.exported.now()+e}setDependencies(t,e){const i={}
for(const r of e)i[r]=!0
this.dependencies[t]=i}hasDependency(t,e){for(const i of t){const t=this.dependencies[i]
if(t)for(const i of e)if(t[i])return!0}return!1}}class V{constructor(t,e){this.max=t,this.onRemove=e,this.reset()}reset(){for(const t in this.data)for(const e of this.data[t])e.timeout&&clearTimeout(e.timeout),this.onRemove(e.value)
return this.data={},this.order=[],this}add(t,e,i){const r=t.wrapped().key
void 0===this.data[r]&&(this.data[r]=[])
const n={value:e,timeout:void 0}
if(void 0!==i&&(n.timeout=setTimeout((()=>{this.remove(t,n)}),i)),this.data[r].push(n),this.order.push(r),this.order.length>this.max){const t=this._getAndRemoveByKey(this.order[0])
t&&this.onRemove(t)}return this}has(t){return t.wrapped().key in this.data}getAndRemove(t){return this.has(t)?this._getAndRemoveByKey(t.wrapped().key):null}_getAndRemoveByKey(t){const e=this.data[t].shift()
return e.timeout&&clearTimeout(e.timeout),0===this.data[t].length&&delete this.data[t],this.order.splice(this.order.indexOf(t),1),e.value}getByKey(t){const e=this.data[t]
return e?e[0].value:null}get(t){return this.has(t)?this.data[t.wrapped().key][0].value:null}remove(t,e){if(!this.has(t))return this
const i=t.wrapped().key,r=void 0===e?0:this.data[i].indexOf(e),n=this.data[i][r]
return this.data[i].splice(r,1),n.timeout&&clearTimeout(n.timeout),0===this.data[i].length&&delete this.data[i],this.onRemove(n.value),this.order.splice(this.order.indexOf(i),1),this}setMaxSize(t){for(this.max=t;this.order.length>this.max;){const t=this._getAndRemoveByKey(this.order[0])
t&&this.onRemove(t)}return this}filter(t){const e=[]
for(const i in this.data)for(const r of this.data[i])t(r.value)||e.push(r)
for(const i of e)this.remove(i.value.tileID,i)}}class N{constructor(){this.state={},this.stateChanges={},this.deletedStates={}}updateState(e,i,r){const n=String(i)
if(this.stateChanges[e]=this.stateChanges[e]||{},this.stateChanges[e][n]=this.stateChanges[e][n]||{},t.extend(this.stateChanges[e][n],r),null===this.deletedStates[e]){this.deletedStates[e]={}
for(const t in this.state[e])t!==n&&(this.deletedStates[e][t]=null)}else if(this.deletedStates[e]&&null===this.deletedStates[e][n]){this.deletedStates[e][n]={}
for(const t in this.state[e][n])r[t]||(this.deletedStates[e][n][t]=null)}else for(const t in r)this.deletedStates[e]&&this.deletedStates[e][n]&&null===this.deletedStates[e][n][t]&&delete this.deletedStates[e][n][t]}removeFeatureState(t,e,i){if(null===this.deletedStates[t])return
const r=String(e)
if(this.deletedStates[t]=this.deletedStates[t]||{},i&&void 0!==e)null!==this.deletedStates[t][r]&&(this.deletedStates[t][r]=this.deletedStates[t][r]||{},this.deletedStates[t][r][i]=null)
else if(void 0!==e)if(this.stateChanges[t]&&this.stateChanges[t][r])for(i in this.deletedStates[t][r]={},this.stateChanges[t][r])this.deletedStates[t][r][i]=null
else this.deletedStates[t][r]=null
else this.deletedStates[t]=null}getState(e,i){const r=String(i),n=t.extend({},(this.state[e]||{})[r],(this.stateChanges[e]||{})[r])
if(null===this.deletedStates[e])return{}
if(this.deletedStates[e]){const t=this.deletedStates[e][i]
if(null===t)return{}
for(const e in t)delete n[e]}return n}initializeTileState(t,e){t.setFeatureState(this.state,e)}coalesceChanges(e,i){const r={}
for(const n in this.stateChanges){this.state[n]=this.state[n]||{}
const e={}
for(const i in this.stateChanges[n])this.state[n][i]||(this.state[n][i]={}),t.extend(this.state[n][i],this.stateChanges[n][i]),e[i]=this.state[n][i]
r[n]=e}for(const n in this.deletedStates){this.state[n]=this.state[n]||{}
const e={}
if(null===this.deletedStates[n])for(const t in this.state[n])e[t]={},this.state[n][t]={}
else for(const t in this.deletedStates[n]){if(null===this.deletedStates[n][t])this.state[n][t]={}
else for(const e of Object.keys(this.deletedStates[n][t]))delete this.state[n][t][e]
e[t]=this.state[n][t]}r[n]=r[n]||{},t.extend(r[n],e)}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(const t in e)e[t].setFeatureState(r,i)}}class $ extends t.Evented{constructor(e,i,r){super(),this.id=e,this.dispatcher=r,this.on("data",(t=>{"source"===t.dataType&&"metadata"===t.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&!this._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform))})),this.on("dataloading",(()=>{this._sourceErrored=!1})),this.on("error",(()=>{this._sourceErrored=this._source.loaded()})),this._source=function(e,i,r,n){const s=new B[i.type](e,i,r,n)
if(s.id!==e)throw new Error(`Expected Source id to be ${e} instead of ${s.id}`)
return t.bindAll(["load","abort","unload","serialize","prepare"],s),s}(e,i,r,this),this._tiles={},this._cache=new V(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._loadedParentTiles={},this._coveredTiles={},this._state=new N}onAdd(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t)}onRemove(t){this.clearTiles(),this._source&&this._source.onRemove&&this._source.onRemove(t)}loaded(){if(this._sourceErrored)return!0
if(!this._sourceLoaded)return!1
if(!this._source.loaded())return!1
for(const t in this._tiles){const e=this._tiles[t]
if("loaded"!==e.state&&"errored"!==e.state)return!1}return!0}getSource(){return this._source}pause(){this._paused=!0}resume(){if(!this._paused)return
const t=this._shouldReloadOnResume
this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform)}_loadTile(t,e){return this._source.loadTile(t,e)}_unloadTile(t){if(this._source.unloadTile)return this._source.unloadTile(t,(()=>{}))}_abortTile(e){this._source.abortTile&&this._source.abortTile(e,(()=>{})),this._source.fire(new t.Event("dataabort",{tile:e,coord:e.tileID,dataType:"source"}))}serialize(){return this._source.serialize()}prepare(t){this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null)
for(const e in this._tiles){const i=this._tiles[e]
i.upload(t),i.prepare(this.map.style.imageManager)}}getIds(){return Object.values(this._tiles).map((t=>t.tileID)).sort(q).map((t=>t.key))}getRenderableIds(e){const i=[]
for(const t in this._tiles)this._isIdRenderable(t,e)&&i.push(this._tiles[t])
return e?i.sort(((e,i)=>{const r=e.tileID,n=i.tileID,s=new t.pointGeometry(r.canonical.x,r.canonical.y)._rotate(this.transform.angle),o=new t.pointGeometry(n.canonical.x,n.canonical.y)._rotate(this.transform.angle)
return r.overscaledZ-n.overscaledZ||o.y-s.y||o.x-s.x})).map((t=>t.tileID.key)):i.map((t=>t.tileID)).sort(q).map((t=>t.key))}hasRenderableParent(t){const e=this.findLoadedParent(t,0)
return!!e&&this._isIdRenderable(e.tileID.key)}_isIdRenderable(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())}reload(){if(this._paused)this._shouldReloadOnResume=!0
else{this._cache.reset()
for(const t in this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(t,"reloading")}}_reloadTile(t,e){const i=this._tiles[t]
i&&("loading"!==i.state&&(i.state=e),this._loadTile(i,this._tileLoaded.bind(this,i,t,e)))}_tileLoaded(e,i,r,n){if(n)return e.state="errored",void(404!==n.status?this._source.fire(new t.ErrorEvent(n,{tile:e})):this.update(this.transform))
e.timeAdded=t.exported.now(),"expired"===r&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(i,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._state.initializeTileState(e,this.map?this.map.painter:null),e.aborted||this._source.fire(new t.Event("data",{dataType:"source",tile:e,coord:e.tileID}))}_backfillDEM(t){const e=this.getRenderableIds()
for(let r=0;r<e.length;r++){const n=e[r]
if(t.neighboringTiles&&t.neighboringTiles[n]){const e=this.getTileByID(n)
i(t,e),i(e,t)}}function i(t,e){t.needsHillshadePrepare=!0
let i=e.tileID.canonical.x-t.tileID.canonical.x
const r=e.tileID.canonical.y-t.tileID.canonical.y,n=Math.pow(2,t.tileID.canonical.z),s=e.tileID.key
0===i&&0===r||Math.abs(r)>1||(Math.abs(i)>1&&(1===Math.abs(i+n)?i+=n:1===Math.abs(i-n)&&(i-=n)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,i,r),t.neighboringTiles&&t.neighboringTiles[s]&&(t.neighboringTiles[s].backfilled=!0)))}}getTile(t){return this.getTileByID(t.key)}getTileByID(t){return this._tiles[t]}_retainLoadedChildren(t,e,i,r){for(const n in this._tiles){let s=this._tiles[n]
if(r[n]||!s.hasData()||s.tileID.overscaledZ<=e||s.tileID.overscaledZ>i)continue
let o=s.tileID
for(;s&&s.tileID.overscaledZ>e+1;){const t=s.tileID.scaledTo(s.tileID.overscaledZ-1)
s=this._tiles[t.key],s&&s.hasData()&&(o=t)}let a=o
for(;a.overscaledZ>e;)if(a=a.scaledTo(a.overscaledZ-1),t[a.key]){r[o.key]=o
break}}}findLoadedParent(t,e){if(t.key in this._loadedParentTiles){const i=this._loadedParentTiles[t.key]
return i&&i.tileID.overscaledZ>=e?i:null}for(let i=t.overscaledZ-1;i>=e;i--){const e=t.scaledTo(i),r=this._getLoadedTile(e)
if(r)return r}}_getLoadedTile(t){const e=this._tiles[t.key]
return e&&e.hasData()?e:this._cache.getByKey(t.wrapped().key)}updateCacheSize(t){const e=Math.ceil(t.width/this._source.tileSize)+1,i=Math.ceil(t.height/this._source.tileSize)+1,r=Math.floor(e*i*5),n="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,r):r
this._cache.setMaxSize(n)}handleWrapJump(t){const e=Math.round((t-(void 0===this._prevLng?t:this._prevLng))/360)
if(this._prevLng=t,e){const t={}
for(const i in this._tiles){const r=this._tiles[i]
r.tileID=r.tileID.unwrapTo(r.tileID.wrap+e),t[r.tileID.key]=r}this._tiles=t
for(const e in this._timers)clearTimeout(this._timers[e]),delete this._timers[e]
for(const e in this._tiles)this._setTileReloadTimer(e,this._tiles[e])}}update(e){if(this.transform=e,!this._sourceLoaded||this._paused)return
let i
this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used?this._source.tileID?i=e.getVisibleUnwrappedCoordinates(this._source.tileID).map((e=>new t.OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y))):(i=e.coveringTiles({tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled}),this._source.hasTile&&(i=i.filter((t=>this._source.hasTile(t))))):i=[]
const r=e.coveringZoomLevel(this._source),n=Math.max(r-$.maxOverzooming,this._source.minzoom),s=Math.max(r+$.maxUnderzooming,this._source.minzoom),o=this._updateRetainedTiles(i,r)
if(G(this._source.type)){const e={},i={},a=Object.keys(o)
for(const r of a){const s=o[r],a=this._tiles[r]
if(!a||a.fadeEndTime&&a.fadeEndTime<=t.exported.now())continue
const l=this.findLoadedParent(s,n)
l&&(this._addTile(l.tileID),e[l.tileID.key]=l.tileID),i[r]=s}this._retainLoadedChildren(i,r,s,o)
for(const t in e)o[t]||(this._coveredTiles[t]=!0,o[t]=e[t])}for(const t in o)this._tiles[t].clearFadeHold()
const a=t.keysDifference(this._tiles,o)
for(const t of a){const e=this._tiles[t]
e.hasSymbolBuckets&&!e.holdingForFade()?e.setHoldDuration(this.map._fadeDuration):e.hasSymbolBuckets&&!e.symbolFadeFinished()||this._removeTile(t)}this._updateLoadedParentTileCache()}releaseSymbolFadeTiles(){for(const t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(t)}_updateRetainedTiles(t,e){const i={},r={},n=Math.max(e-$.maxOverzooming,this._source.minzoom),s=Math.max(e+$.maxUnderzooming,this._source.minzoom),o={}
for(const a of t){const t=this._addTile(a)
i[a.key]=a,t.hasData()||e<this._source.maxzoom&&(o[a.key]=a)}this._retainLoadedChildren(o,e,s,i)
for(const a of t){let t=this._tiles[a.key]
if(t.hasData())continue
if(e+1>this._source.maxzoom){const t=a.children(this._source.maxzoom)[0],e=this.getTile(t)
if(e&&e.hasData()){i[t.key]=t
continue}}else{const t=a.children(this._source.maxzoom)
if(i[t[0].key]&&i[t[1].key]&&i[t[2].key]&&i[t[3].key])continue}let s=t.wasRequested()
for(let e=a.overscaledZ-1;e>=n;--e){const n=a.scaledTo(e)
if(r[n.key])break
if(r[n.key]=!0,t=this.getTile(n),!t&&s&&(t=this._addTile(n)),t&&(i[n.key]=n,s=t.wasRequested(),t.hasData()))break}}return i}_updateLoadedParentTileCache(){this._loadedParentTiles={}
for(const t in this._tiles){const e=[]
let i,r=this._tiles[t].tileID
for(;r.overscaledZ>0;){if(r.key in this._loadedParentTiles){i=this._loadedParentTiles[r.key]
break}e.push(r.key)
const t=r.scaledTo(r.overscaledZ-1)
if(i=this._getLoadedTile(t),i)break
r=t}for(const t of e)this._loadedParentTiles[t]=i}}_addTile(e){let i=this._tiles[e.key]
if(i)return i
i=this._cache.getAndRemove(e),i&&(this._setTileReloadTimer(e.key,i),i.tileID=e,this._state.initializeTileState(i,this.map?this.map.painter:null),this._cacheTimers[e.key]&&(clearTimeout(this._cacheTimers[e.key]),delete this._cacheTimers[e.key],this._setTileReloadTimer(e.key,i)))
const r=i
return i||(i=new U(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(i,this._tileLoaded.bind(this,i,e.key,i.state))),i.uses++,this._tiles[e.key]=i,r||this._source.fire(new t.Event("dataloading",{tile:i,coord:i.tileID,dataType:"source"})),i}_setTileReloadTimer(t,e){t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t])
const i=e.getExpiryTimeout()
i&&(this._timers[t]=setTimeout((()=>{this._reloadTile(t,"expired"),delete this._timers[t]}),i))}_removeTile(t){const e=this._tiles[t]
e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))))}clearTiles(){this._shouldReloadOnResume=!1,this._paused=!1
for(const t in this._tiles)this._removeTile(t)
this._cache.reset()}tilesIn(e,i,r){const n=[],s=this.transform
if(!s)return n
const o=r?s.getCameraQueryGeometry(e):e,a=e.map((t=>s.pointCoordinate(t))),l=o.map((t=>s.pointCoordinate(t))),c=this.getIds()
let h=1/0,u=1/0,p=-1/0,d=-1/0
for(const t of l)h=Math.min(h,t.x),u=Math.min(u,t.y),p=Math.max(p,t.x),d=Math.max(d,t.y)
for(let m=0;m<c.length;m++){const e=this._tiles[c[m]]
if(e.holdingForFade())continue
const r=e.tileID,o=Math.pow(2,s.zoom-e.tileID.overscaledZ),f=i*e.queryPadding*t.EXTENT/e.tileSize/o,g=[r.getTilePoint(new t.MercatorCoordinate(h,u)),r.getTilePoint(new t.MercatorCoordinate(p,d))]
if(g[0].x-f<t.EXTENT&&g[0].y-f<t.EXTENT&&g[1].x+f>=0&&g[1].y+f>=0){const t=a.map((t=>r.getTilePoint(t))),i=l.map((t=>r.getTilePoint(t)))
n.push({tile:e,tileID:r,queryGeometry:t,cameraQueryGeometry:i,scale:o})}}return n}getVisibleCoordinates(t){const e=this.getRenderableIds(t).map((t=>this._tiles[t].tileID))
for(const i of e)i.posMatrix=this.transform.calculatePosMatrix(i.toUnwrapped())
return e}hasTransition(){if(this._source.hasTransition())return!0
if(G(this._source.type))for(const e in this._tiles){const i=this._tiles[e]
if(void 0!==i.fadeEndTime&&i.fadeEndTime>=t.exported.now())return!0}return!1}setFeatureState(t,e,i){this._state.updateState(t=t||"_geojsonTileLayer",e,i)}removeFeatureState(t,e,i){this._state.removeFeatureState(t=t||"_geojsonTileLayer",e,i)}getFeatureState(t,e){return this._state.getState(t=t||"_geojsonTileLayer",e)}setDependencies(t,e,i){const r=this._tiles[t]
r&&r.setDependencies(e,i)}reloadTilesForDependencies(t,e){for(const i in this._tiles)this._tiles[i].hasDependency(t,e)&&this._reloadTile(i,"reloading")
this._cache.filter((i=>!i.hasDependency(t,e)))}}function q(t,e){const i=Math.abs(2*t.wrap)-+(t.wrap<0),r=Math.abs(2*e.wrap)-+(e.wrap<0)
return t.overscaledZ-e.overscaledZ||r-i||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function G(t){return"raster"===t||"image"===t||"video"===t}$.maxOverzooming=10,$.maxUnderzooming=3
const j="mapboxgl_preloaded_worker_pool"
class Z{constructor(){this.active={}}acquire(t){if(!this.workers)for(this.workers=[];this.workers.length<Z.workerCount;)this.workers.push(new Worker(xn.workerUrl))
return this.active[t]=!0,this.workers.slice()}release(t){delete this.active[t],0===this.numActive()&&(this.workers.forEach((t=>{t.terminate()})),this.workers=null)}isPreloaded(){return!!this.active[j]}numActive(){return Object.keys(this.active).length}}const X=Math.floor(t.exported.hardwareConcurrency/2)
let W
function H(){return W||(W=new Z),W}function K(e,i){const r={}
for(const t in e)"ref"!==t&&(r[t]=e[t])
return t.refProperties.forEach((t=>{t in i&&(r[t]=i[t])})),r}function Y(t){t=t.slice()
const e=Object.create(null)
for(let i=0;i<t.length;i++)e[t[i].id]=t[i]
for(let i=0;i<t.length;i++)"ref"in t[i]&&(t[i]=K(t[i],e[t[i].ref]))
return t}Z.workerCount=Math.max(Math.min(X,6),1)
const J={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"}
function Q(t,e,i){i.push({command:J.addSource,args:[t,e[t]]})}function tt(t,e,i){e.push({command:J.removeSource,args:[t]}),i[t]=!0}function et(t,e,i,r){tt(t,i,r),Q(t,e,i)}function it(t,e,i){let r
for(r in t[i])if(Object.prototype.hasOwnProperty.call(t[i],r)&&"data"!==r&&!n(t[i][r],e[i][r]))return!1
for(r in e[i])if(Object.prototype.hasOwnProperty.call(e[i],r)&&"data"!==r&&!n(t[i][r],e[i][r]))return!1
return!0}function rt(t,e,i,r,s,o){let a
for(a in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,a)&&(n(t[a],e[a])||i.push({command:o,args:[r,a,e[a],s]}))
for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&!Object.prototype.hasOwnProperty.call(t,a)&&(n(t[a],e[a])||i.push({command:o,args:[r,a,e[a],s]}))}function nt(t){return t.id}function st(t,e){return t[e.id]=e,t}class ot{constructor(t,e){this.reset(t,e)}reset(t,e){this.points=t||[],this._distances=[0]
for(let i=1;i<this.points.length;i++)this._distances[i]=this._distances[i-1]+this.points[i].dist(this.points[i-1])
this.length=this._distances[this._distances.length-1],this.padding=Math.min(e||0,.5*this.length),this.paddedLength=this.length-2*this.padding}lerp(e){if(1===this.points.length)return this.points[0]
e=t.clamp(e,0,1)
let i=1,r=this._distances[i]
const n=e*this.paddedLength+this.padding
for(;r<n&&i<this._distances.length;)r=this._distances[++i]
const s=i-1,o=this._distances[s],a=r-o,l=a>0?(n-o)/a:0
return this.points[s].mult(1-l).add(this.points[i].mult(l))}}function at(t,e){let i=!0
return"always"===t||"never"!==t&&"never"!==e||(i=!1),i}class lt{constructor(t,e,i){const r=this.boxCells=[],n=this.circleCells=[]
this.xCellCount=Math.ceil(t/i),this.yCellCount=Math.ceil(e/i)
for(let s=0;s<this.xCellCount*this.yCellCount;s++)r.push([]),n.push([])
this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0}keysLength(){return this.boxKeys.length+this.circleKeys.length}insert(t,e,i,r,n){this._forEachCell(e,i,r,n,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(r),this.bboxes.push(n)}insertCircle(t,e,i,r){this._forEachCell(e-r,i-r,e+r,i+r,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(i),this.circles.push(r)}_insertBoxCell(t,e,i,r,n,s){this.boxCells[n].push(s)}_insertCircleCell(t,e,i,r,n,s){this.circleCells[n].push(s)}_query(t,e,i,r,n,s,o){if(i<0||t>this.width||r<0||e>this.height)return[]
const a=[]
if(t<=0&&e<=0&&this.width<=i&&this.height<=r){if(n)return[{key:null,x1:t,y1:e,x2:i,y2:r}]
for(let t=0;t<this.boxKeys.length;t++)a.push({key:this.boxKeys[t],x1:this.bboxes[4*t],y1:this.bboxes[4*t+1],x2:this.bboxes[4*t+2],y2:this.bboxes[4*t+3]})
for(let t=0;t<this.circleKeys.length;t++){const e=this.circles[3*t],i=this.circles[3*t+1],r=this.circles[3*t+2]
a.push({key:this.circleKeys[t],x1:e-r,y1:i-r,x2:e+r,y2:i+r})}}else this._forEachCell(t,e,i,r,this._queryCell,a,{hitTest:n,overlapMode:s,seenUids:{box:{},circle:{}}},o)
return a}query(t,e,i,r){return this._query(t,e,i,r,!1,null)}hitTest(t,e,i,r,n,s){return this._query(t,e,i,r,!0,n,s).length>0}hitTestCircle(t,e,i,r,n){const s=t-i,o=t+i,a=e-i,l=e+i
if(o<0||s>this.width||l<0||a>this.height)return!1
const c=[]
return this._forEachCell(s,a,o,l,this._queryCellCircle,c,{hitTest:!0,overlapMode:r,circle:{x:t,y:e,radius:i},seenUids:{box:{},circle:{}}},n),c.length>0}_queryCell(t,e,i,r,n,s,o,a){const{seenUids:l,hitTest:c,overlapMode:h}=o,u=this.boxCells[n]
if(null!==u){const n=this.bboxes
for(const o of u)if(!l.box[o]){l.box[o]=!0
const u=4*o,p=this.boxKeys[o]
if(t<=n[u+2]&&e<=n[u+3]&&i>=n[u+0]&&r>=n[u+1]&&(!a||a(p))&&(!c||!at(h,p.overlapMode))&&(s.push({key:p,x1:n[u],y1:n[u+1],x2:n[u+2],y2:n[u+3]}),c))return!0}}const p=this.circleCells[n]
if(null!==p){const n=this.circles
for(const o of p)if(!l.circle[o]){l.circle[o]=!0
const u=3*o,p=this.circleKeys[o]
if(this._circleAndRectCollide(n[u],n[u+1],n[u+2],t,e,i,r)&&(!a||a(p))&&(!c||!at(h,p.overlapMode))){const t=n[u],e=n[u+1],i=n[u+2]
if(s.push({key:p,x1:t-i,y1:e-i,x2:t+i,y2:e+i}),c)return!0}}}return!1}_queryCellCircle(t,e,i,r,n,s,o,a){const{circle:l,seenUids:c,overlapMode:h}=o,u=this.boxCells[n]
if(null!==u){const t=this.bboxes
for(const e of u)if(!c.box[e]){c.box[e]=!0
const i=4*e,r=this.boxKeys[e]
if(this._circleAndRectCollide(l.x,l.y,l.radius,t[i+0],t[i+1],t[i+2],t[i+3])&&(!a||a(r))&&!at(h,r.overlapMode))return s.push(!0),!0}}const p=this.circleCells[n]
if(null!==p){const t=this.circles
for(const e of p)if(!c.circle[e]){c.circle[e]=!0
const i=3*e,r=this.circleKeys[e]
if(this._circlesCollide(t[i],t[i+1],t[i+2],l.x,l.y,l.radius)&&(!a||a(r))&&!at(h,r.overlapMode))return s.push(!0),!0}}}_forEachCell(t,e,i,r,n,s,o,a){const l=this._convertToXCellCoord(t),c=this._convertToYCellCoord(e),h=this._convertToXCellCoord(i),u=this._convertToYCellCoord(r)
for(let p=l;p<=h;p++)for(let l=c;l<=u;l++)if(n.call(this,t,e,i,r,this.xCellCount*l+p,s,o,a))return}_convertToXCellCoord(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))}_convertToYCellCoord(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))}_circlesCollide(t,e,i,r,n,s){const o=r-t,a=n-e,l=i+s
return l*l>o*o+a*a}_circleAndRectCollide(t,e,i,r,n,s,o){const a=(s-r)/2,l=Math.abs(t-(r+a))
if(l>a+i)return!1
const c=(o-n)/2,h=Math.abs(e-(n+c))
if(h>c+i)return!1
if(l<=a||h<=c)return!0
const u=l-a,p=h-c
return u*u+p*p<=i*i}}function ct(e,i,r,n,s){const o=t.create()
return i?(t.scale(o,o,[1/s,1/s,1]),r||t.rotateZ(o,o,n.angle)):t.multiply(o,n.labelPlaneMatrix,e),o}function ht(e,i,r,n,s){if(i){const i=t.clone(e)
return t.scale(i,i,[s,s,1]),r||t.rotateZ(i,i,-n.angle),i}return n.glCoordMatrix}function ut(e,i){const r=[e.x,e.y,0,1]
wt(r,r,i)
const n=r[3]
return{point:new t.pointGeometry(r[0]/n,r[1]/n),signedDistanceFromCamera:n}}function pt(t,e){return.5+t/e*.5}function dt(t,e){const i=t[0]/t[3],r=t[1]/t[3]
return i>=-e[0]&&i<=e[0]&&r>=-e[1]&&r<=e[1]}function mt(e,i,r,n,s,o,a,l,c){const h=n?e.textSizeData:e.iconSizeData,u=t.evaluateSizeForZoom(h,r.transform.zoom),p=[256/r.width*2+1,256/r.height*2+1],d=n?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray
d.clear()
const m=e.lineVertexArray,f=n?e.text.placedSymbolArray:e.icon.placedSymbolArray,g=r.transform.width/r.transform.height
let _=!1
for(let y=0;y<f.length;y++){const n=f.get(y)
if(n.hidden||n.writingMode===t.WritingMode.vertical&&!_){bt(n.numGlyphs,d)
continue}_=!1
const x=[n.anchorX,n.anchorY,0,1]
if(t.transformMat4(x,x,i),!dt(x,p)){bt(n.numGlyphs,d)
continue}const v=pt(r.transform.cameraToCenterDistance,x[3]),b=t.evaluateSizeForFeature(h,u,n),w=a?b/v:b*v,S=new t.pointGeometry(n.anchorX,n.anchorY),T=ut(S,s).point,I={},E=_t(n,w,!1,l,i,s,o,e.glyphOffsetArray,m,d,T,S,I,g,c)
_=E.useVertical,(E.notEnoughRoom||_||E.needsFlipping&&_t(n,w,!0,l,i,s,o,e.glyphOffsetArray,m,d,T,S,I,g,c).notEnoughRoom)&&bt(n.numGlyphs,d)}n?e.text.dynamicLayoutVertexBuffer.updateData(d):e.icon.dynamicLayoutVertexBuffer.updateData(d)}function ft(t,e,i,r,n,s,o,a,l,c,h,u){const p=a.glyphStartIndex+a.numGlyphs,d=a.lineStartIndex,m=a.lineStartIndex+a.lineLength,f=e.getoffsetX(a.glyphStartIndex),g=e.getoffsetX(p-1),_=xt(t*f,i,r,n,s,o,a.segment,d,m,l,c,h,u)
if(!_)return null
const y=xt(t*g,i,r,n,s,o,a.segment,d,m,l,c,h,u)
return y?{first:_,last:y}:null}function gt(e,i,r,n){return e===t.WritingMode.horizontal&&Math.abs(r.y-i.y)>Math.abs(r.x-i.x)*n?{useVertical:!0}:(e===t.WritingMode.vertical?i.y<r.y:i.x>r.x)?{needsFlipping:!0}:null}function _t(e,i,r,n,s,o,a,l,c,h,u,p,d,m,f){const g=i/24,_=e.lineOffsetX*g,y=e.lineOffsetY*g
let x
if(e.numGlyphs>1){const t=e.glyphStartIndex+e.numGlyphs,i=e.lineStartIndex,s=e.lineStartIndex+e.lineLength,h=ft(g,l,_,y,r,u,p,e,c,o,d,f)
if(!h)return{notEnoughRoom:!0}
const v=ut(h.first.point,a).point,b=ut(h.last.point,a).point
if(n&&!r){const t=gt(e.writingMode,v,b,m)
if(t)return t}x=[h.first]
for(let n=e.glyphStartIndex+1;n<t-1;n++)x.push(xt(g*l.getoffsetX(n),_,y,r,u,p,e.segment,i,s,c,o,d,f))
x.push(h.last)}else{if(n&&!r){const i=ut(p,s).point,r=e.lineStartIndex+e.segment+1,n=new t.pointGeometry(c.getx(r),c.gety(r)),o=ut(n,s),a=o.signedDistanceFromCamera>0?o.point:yt(p,n,i,1,s),l=gt(e.writingMode,i,a,m)
if(l)return l}const i=xt(g*l.getoffsetX(e.glyphStartIndex),_,y,r,u,p,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,c,o,d,f)
if(!i)return{notEnoughRoom:!0}
x=[i]}for(const v of x)t.addDynamicAttributes(h,v.point,v.angle)
return{}}function yt(t,e,i,r,n){const s=ut(t.add(t.sub(e)._unit()),n).point,o=i.sub(s)
return i.add(o._mult(r/o.mag()))}function xt(e,i,r,n,s,o,a,l,c,h,u,p,d){const m=n?e-i:e+i
let f=m>0?1:-1,g=0
n&&(f*=-1,g=Math.PI),f<0&&(g+=Math.PI)
let _=f>0?l+a:l+a+1,y=s,x=s,v=0,b=0
const w=Math.abs(m),S=[]
for(;v+b<=w;){if(_+=f,_<l||_>=c)return null
if(x=y,S.push(y),y=p[_],void 0===y){const e=new t.pointGeometry(h.getx(_),h.gety(_)),i=ut(e,u)
if(i.signedDistanceFromCamera>0)y=p[_]=i.point
else{const i=_-f
y=yt(0===v?o:new t.pointGeometry(h.getx(i),h.gety(i)),e,x,w-v+1,u)}}v+=b,b=x.dist(y)}const T=(w-v)/b,I=y.sub(x),E=I.mult(T)._add(x)
E._add(I._unit()._perp()._mult(r*f))
const A=g+Math.atan2(y.y-x.y,y.x-x.x)
return S.push(E),{point:E,angle:d?A:0,path:S}}const vt=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0])
function bt(t,e){for(let i=0;i<t;i++){const t=e.length
e.resize(t+4),e.float32.set(vt,3*t)}}function wt(t,e,i){const r=e[0],n=e[1]
return t[0]=i[0]*r+i[4]*n+i[12],t[1]=i[1]*r+i[5]*n+i[13],t[3]=i[3]*r+i[7]*n+i[15],t}const St=100
class Tt{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new lt(t.width+200,t.height+200,25),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new lt(t.width+200,t.height+200,25)
this.transform=t,this.grid=e,this.ignoredGrid=i,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+St,this.screenBottomBoundary=t.height+St,this.gridRightBoundary=t.width+200,this.gridBottomBoundary=t.height+200}placeCollisionBox(t,e,i,r,n){const s=this.projectAndGetPerspectiveRatio(r,t.anchorPointX,t.anchorPointY),o=i*s.perspectiveRatio,a=t.x1*o+s.point.x,l=t.y1*o+s.point.y,c=t.x2*o+s.point.x,h=t.y2*o+s.point.y
return!this.isInsideGrid(a,l,c,h)||"always"!==e&&this.grid.hitTest(a,l,c,h,e,n)?{box:[],offscreen:!1}:{box:[a,l,c,h],offscreen:this.isOffscreen(a,l,c,h)}}placeCollisionCircles(e,i,r,n,s,o,a,l,c,h,u,p,d){const m=[],f=new t.pointGeometry(i.anchorX,i.anchorY),g=ut(f,o),_=pt(this.transform.cameraToCenterDistance,g.signedDistanceFromCamera),y=(h?s/_:s*_)/t.ONE_EM,x=ut(f,a).point,v=ft(y,n,i.lineOffsetX*y,i.lineOffsetY*y,!1,x,f,i,r,a,{},!1)
let b=!1,w=!1,S=!0
if(v){const i=.5*p*_+d,r=new t.pointGeometry(-100,-100),n=new t.pointGeometry(this.screenRightBoundary,this.screenBottomBoundary),s=new ot,o=v.first,a=v.last
let h=[]
for(let t=o.path.length-1;t>=1;t--)h.push(o.path[t])
for(let t=1;t<a.path.length;t++)h.push(a.path[t])
const f=2.5*i
if(l){const t=h.map((t=>ut(t,l)))
h=t.some((t=>t.signedDistanceFromCamera<=0))?[]:t.map((t=>t.point))}let g=[]
if(h.length>0){const e=h[0].clone(),i=h[0].clone()
for(let t=1;t<h.length;t++)e.x=Math.min(e.x,h[t].x),e.y=Math.min(e.y,h[t].y),i.x=Math.max(i.x,h[t].x),i.y=Math.max(i.y,h[t].y)
g=e.x>=r.x&&i.x<=n.x&&e.y>=r.y&&i.y<=n.y?[h]:i.x<r.x||e.x>n.x||i.y<r.y||e.y>n.y?[]:t.clipLine([h],r.x,r.y,n.x,n.y)}for(const t of g){s.reset(t,.25*i)
let r=0
r=s.length<=.5*i?1:Math.ceil(s.paddedLength/f)+1
for(let t=0;t<r;t++){const n=t/Math.max(r-1,1),o=s.lerp(n),a=o.x+St,l=o.y+St
m.push(a,l,i,0)
const h=a-i,p=l-i,d=a+i,f=l+i
if(S=S&&this.isOffscreen(h,p,d,f),w=w||this.isInsideGrid(h,p,d,f),"always"!==e&&this.grid.hitTestCircle(a,l,i,e,u)&&(b=!0,!c))return{circles:[],offscreen:!1,collisionDetected:b}}}}return{circles:!c&&b||!w?[]:m,offscreen:S,collisionDetected:b}}queryRenderedSymbols(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return{}
const i=[]
let r=1/0,n=1/0,s=-1/0,o=-1/0
for(const h of e){const e=new t.pointGeometry(h.x+St,h.y+St)
r=Math.min(r,e.x),n=Math.min(n,e.y),s=Math.max(s,e.x),o=Math.max(o,e.y),i.push(e)}const a=this.grid.query(r,n,s,o).concat(this.ignoredGrid.query(r,n,s,o)),l={},c={}
for(const h of a){const e=h.key
if(void 0===l[e.bucketInstanceId]&&(l[e.bucketInstanceId]={}),l[e.bucketInstanceId][e.featureIndex])continue
const r=[new t.pointGeometry(h.x1,h.y1),new t.pointGeometry(h.x2,h.y1),new t.pointGeometry(h.x2,h.y2),new t.pointGeometry(h.x1,h.y2)]
t.polygonIntersectsPolygon(i,r)&&(l[e.bucketInstanceId][e.featureIndex]=!0,void 0===c[e.bucketInstanceId]&&(c[e.bucketInstanceId]=[]),c[e.bucketInstanceId].push(e.featureIndex))}return c}insertCollisionBox(t,e,i,r,n,s){(i?this.ignoredGrid:this.grid).insert({bucketInstanceId:r,featureIndex:n,collisionGroupID:s,overlapMode:e},t[0],t[1],t[2],t[3])}insertCollisionCircles(t,e,i,r,n,s){const o=i?this.ignoredGrid:this.grid,a={bucketInstanceId:r,featureIndex:n,collisionGroupID:s,overlapMode:e}
for(let l=0;l<t.length;l+=4)o.insertCircle(a,t[l],t[l+1],t[l+2])}projectAndGetPerspectiveRatio(e,i,r){const n=[i,r,0,1]
return wt(n,n,e),{point:new t.pointGeometry((n[0]/n[3]+1)/2*this.transform.width+St,(-n[1]/n[3]+1)/2*this.transform.height+St),perspectiveRatio:.5+this.transform.cameraToCenterDistance/n[3]*.5}}isOffscreen(t,e,i,r){return i<St||t>=this.screenRightBoundary||r<St||e>this.screenBottomBoundary}isInsideGrid(t,e,i,r){return i>=0&&t<this.gridRightBoundary&&r>=0&&e<this.gridBottomBoundary}getViewportMatrix(){const e=t.identity([])
return t.translate(e,e,[-100,-100,0]),e}}function It(e,i,r){return i*(t.EXTENT/(e.tileSize*Math.pow(2,r-e.tileID.overscaledZ)))}class Et{constructor(t,e,i,r){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):r&&i?1:0,this.placed=i}isHidden(){return 0===this.opacity&&!this.placed}}class At{constructor(t,e,i,r,n){this.text=new Et(t?t.text:null,e,i,n),this.icon=new Et(t?t.icon:null,e,r,n)}isHidden(){return this.text.isHidden()&&this.icon.isHidden()}}class zt{constructor(t,e,i){this.text=t,this.icon=e,this.skipFade=i}}class Ct{constructor(){this.invProjMatrix=t.create(),this.viewportMatrix=t.create(),this.circles=[]}}class Pt{constructor(t,e,i,r,n){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=i,this.bucketIndex=r,this.tileID=n}}class kt{constructor(t){this.crossSourceCollisions=t,this.maxGroupID=0,this.collisionGroups={}}get(t){if(this.crossSourceCollisions)return{ID:0,predicate:null}
if(!this.collisionGroups[t]){const e=++this.maxGroupID
this.collisionGroups[t]={ID:e,predicate:t=>t.collisionGroupID===e}}return this.collisionGroups[t]}}function Mt(e,i,r,n,s){const{horizontalAlign:o,verticalAlign:a}=t.getAnchorAlignment(e),l=-(o-.5)*i,c=-(a-.5)*r,h=t.evaluateVariableOffset(e,n)
return new t.pointGeometry(l+h[0]*s,c+h[1]*s)}function Dt(e,i,r,n,s,o){const{x1:a,x2:l,y1:c,y2:h,anchorPointX:u,anchorPointY:p}=e,d=new t.pointGeometry(i,r)
return n&&d._rotate(s?o:-o),{x1:a+d.x,y1:c+d.y,x2:l+d.x,y2:h+d.y,anchorPointX:u,anchorPointY:p}}class Lt{constructor(t,e,i,r){this.transform=t.clone(),this.collisionIndex=new Tt(this.transform),this.placements={},this.opacities={},this.variableOffsets={},this.stale=!1,this.commitTime=0,this.fadeDuration=e,this.retainedQueryData={},this.collisionGroups=new kt(i),this.collisionCircleArrays={},this.prevPlacement=r,r&&(r.prevPlacement=void 0),this.placedOrientations={}}getBucketParts(e,i,r,n){const s=r.getBucket(i),o=r.latestFeatureIndex
if(!s||!o||i.id!==s.layerIds[0])return
const a=r.collisionBoxArray,l=s.layers[0].layout,c=Math.pow(2,this.transform.zoom-r.tileID.overscaledZ),h=r.tileSize/t.EXTENT,u=this.transform.calculatePosMatrix(r.tileID.toUnwrapped()),p="map"===l.get("text-pitch-alignment"),d="map"===l.get("text-rotation-alignment"),m=It(r,1,this.transform.zoom),f=ct(u,p,d,this.transform,m)
let g=null
if(p){const e=ht(u,p,d,this.transform,m)
g=t.multiply([],this.transform.labelPlaneMatrix,e)}this.retainedQueryData[s.bucketInstanceId]=new Pt(s.bucketInstanceId,o,s.sourceLayerIndex,s.index,r.tileID)
const _={bucket:s,layout:l,posMatrix:u,textLabelPlaneMatrix:f,labelToScreenMatrix:g,scale:c,textPixelRatio:h,holdingForFade:r.holdingForFade(),collisionBoxArray:a,partiallyEvaluatedTextSize:t.evaluateSizeForZoom(s.textSizeData,this.transform.zoom),collisionGroup:this.collisionGroups.get(s.sourceID)}
if(n)for(const t of s.sortKeyRanges){const{sortKey:i,symbolInstanceStart:r,symbolInstanceEnd:n}=t
e.push({sortKey:i,symbolInstanceStart:r,symbolInstanceEnd:n,parameters:_})}else e.push({symbolInstanceStart:0,symbolInstanceEnd:s.symbolInstances.length,parameters:_})}attemptAnchorPlacement(t,e,i,r,n,s,o,a,l,c,h,u,p,d,m){const f=[u.textOffset0,u.textOffset1],g=Mt(t,i,r,f,n),_=this.collisionIndex.placeCollisionBox(Dt(e,g.x,g.y,s,o,this.transform.angle),h,a,l,c.predicate)
if((!m||0!==this.collisionIndex.placeCollisionBox(Dt(m,g.x,g.y,s,o,this.transform.angle),h,a,l,c.predicate).box.length)&&_.box.length>0){let e
return this.prevPlacement&&this.prevPlacement.variableOffsets[u.crossTileID]&&this.prevPlacement.placements[u.crossTileID]&&this.prevPlacement.placements[u.crossTileID].text&&(e=this.prevPlacement.variableOffsets[u.crossTileID].anchor),this.variableOffsets[u.crossTileID]={textOffset:f,width:i,height:r,anchor:t,textBoxScale:n,prevAnchor:e},this.markUsedJustification(p,t,u,d),p.allowVerticalPlacement&&(this.markUsedOrientation(p,d,u),this.placedOrientations[u.crossTileID]=d),{shift:g,placedGlyphBoxes:_}}}placeLayerBucketPart(e,i,r){const{bucket:n,layout:s,posMatrix:o,textLabelPlaneMatrix:a,labelToScreenMatrix:l,textPixelRatio:c,holdingForFade:h,collisionBoxArray:u,partiallyEvaluatedTextSize:p,collisionGroup:d}=e.parameters,m=s.get("text-optional"),f=s.get("icon-optional"),g=t.getOverlapMode(s,"text-overlap","text-allow-overlap"),_="always"===g,y=t.getOverlapMode(s,"icon-overlap","icon-allow-overlap"),x="always"===y,v="map"===s.get("text-rotation-alignment"),b="map"===s.get("text-pitch-alignment"),w="none"!==s.get("icon-text-fit"),S="viewport-y"===s.get("symbol-z-order"),T=_&&(x||!n.hasIconData()||f),I=x&&(_||!n.hasTextData()||m)
!n.collisionArrays&&u&&n.deserializeCollisionBoxes(u)
const E=(e,u)=>{if(i[e.crossTileID])return
if(h)return void(this.placements[e.crossTileID]=new zt(!1,!1,!1))
let x=!1,S=!1,E=!0,A=null,z={box:null,offscreen:null},C={box:null,offscreen:null},P=null,k=null,M=null,D=0,L=0,B=0
u.textFeatureIndex?D=u.textFeatureIndex:e.useRuntimeCollisionCircles&&(D=e.featureIndex),u.verticalTextFeatureIndex&&(L=u.verticalTextFeatureIndex)
const R=u.textBox
if(R){const i=i=>{let r=t.WritingMode.horizontal
if(n.allowVerticalPlacement&&!i&&this.prevPlacement){const t=this.prevPlacement.placedOrientations[e.crossTileID]
t&&(this.placedOrientations[e.crossTileID]=t,r=t,this.markUsedOrientation(n,r,e))}return r},r=(i,r)=>{if(n.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&u.verticalTextBox){for(const e of n.writingModes)if(e===t.WritingMode.vertical?(z=r(),C=z):z=i(),z&&z.box&&z.box.length)break}else z=i()}
if(s.get("text-variable-anchor")){let a=s.get("text-variable-anchor")
if(this.prevPlacement&&this.prevPlacement.variableOffsets[e.crossTileID]){const t=this.prevPlacement.variableOffsets[e.crossTileID]
a.indexOf(t.anchor)>0&&(a=a.filter((e=>e!==t.anchor)),a.unshift(t.anchor))}const l=(t,i,r)=>{const s=t.x2-t.x1,l=t.y2-t.y1,h=e.textBoxScale,u=w&&"never"===y?i:null
let p={box:[],offscreen:!1}
const m="never"!==g?2*a.length:a.length
for(let f=0;f<m;++f){const i=this.attemptAnchorPlacement(a[f%a.length],t,s,l,h,v,b,c,o,d,f>=a.length?g:"never",e,n,r,u)
if(i&&(p=i.placedGlyphBoxes,p&&p.box&&p.box.length)){x=!0,A=i.shift
break}}return p}
r((()=>l(R,u.iconBox,t.WritingMode.horizontal)),(()=>{const i=u.verticalTextBox
return n.allowVerticalPlacement&&!(z&&z.box&&z.box.length)&&e.numVerticalGlyphVertices>0&&i?l(i,u.verticalIconBox,t.WritingMode.vertical):{box:null,offscreen:null}})),z&&(x=z.box,E=z.offscreen)
const h=i(z&&z.box)
if(!x&&this.prevPlacement){const t=this.prevPlacement.variableOffsets[e.crossTileID]
t&&(this.variableOffsets[e.crossTileID]=t,this.markUsedJustification(n,t.anchor,e,h))}}else{const s=(t,i)=>{const r=this.collisionIndex.placeCollisionBox(t,g,c,o,d.predicate)
return r&&r.box&&r.box.length&&(this.markUsedOrientation(n,i,e),this.placedOrientations[e.crossTileID]=i),r}
r((()=>s(R,t.WritingMode.horizontal)),(()=>{const i=u.verticalTextBox
return n.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&i?s(i,t.WritingMode.vertical):{box:null,offscreen:null}})),i(z&&z.box&&z.box.length)}}if(P=z,x=P&&P.box&&P.box.length>0,E=P&&P.offscreen,e.useRuntimeCollisionCircles){const i=n.text.placedSymbolArray.get(e.centerJustifiedTextSymbolIndex),c=t.evaluateSizeForFeature(n.textSizeData,p,i),h=s.get("text-padding")
k=this.collisionIndex.placeCollisionCircles(g,i,n.lineVertexArray,n.glyphOffsetArray,c,o,a,l,r,b,d.predicate,e.collisionCircleDiameter,h),x=_||k.circles.length>0&&!k.collisionDetected,E=E&&k.offscreen}if(u.iconFeatureIndex&&(B=u.iconFeatureIndex),u.iconBox){const t=t=>{const e=w&&A?Dt(t,A.x,A.y,v,b,this.transform.angle):t
return this.collisionIndex.placeCollisionBox(e,y,c,o,d.predicate)}
C&&C.box&&C.box.length&&u.verticalIconBox?(M=t(u.verticalIconBox),S=M.box.length>0):(M=t(u.iconBox),S=M.box.length>0),E=E&&M.offscreen}const F=m||0===e.numHorizontalGlyphVertices&&0===e.numVerticalGlyphVertices,O=f||0===e.numIconVertices
if(F||O?O?F||(S=S&&x):x=S&&x:S=x=S&&x,x&&P&&P.box&&this.collisionIndex.insertCollisionBox(P.box,g,s.get("text-ignore-placement"),n.bucketInstanceId,C&&C.box&&L?L:D,d.ID),S&&M&&this.collisionIndex.insertCollisionBox(M.box,y,s.get("icon-ignore-placement"),n.bucketInstanceId,B,d.ID),k&&(x&&this.collisionIndex.insertCollisionCircles(k.circles,g,s.get("text-ignore-placement"),n.bucketInstanceId,D,d.ID),r)){const t=n.bucketInstanceId
let e=this.collisionCircleArrays[t]
void 0===e&&(e=this.collisionCircleArrays[t]=new Ct)
for(let i=0;i<k.circles.length;i+=4)e.circles.push(k.circles[i+0]),e.circles.push(k.circles[i+1]),e.circles.push(k.circles[i+2]),e.circles.push(k.collisionDetected?1:0)}this.placements[e.crossTileID]=new zt(x||T,S||I,E||n.justReloaded),i[e.crossTileID]=!0}
if(S){const t=n.getSortedSymbolIndexes(this.transform.angle)
for(let e=t.length-1;e>=0;--e){const i=t[e]
E(n.symbolInstances.get(i),n.collisionArrays[i])}}else for(let t=e.symbolInstanceStart;t<e.symbolInstanceEnd;t++)E(n.symbolInstances.get(t),n.collisionArrays[t])
if(r&&n.bucketInstanceId in this.collisionCircleArrays){const e=this.collisionCircleArrays[n.bucketInstanceId]
t.invert(e.invProjMatrix,o),e.viewportMatrix=this.collisionIndex.getViewportMatrix()}n.justReloaded=!1}markUsedJustification(e,i,r,n){let s
s=n===t.WritingMode.vertical?r.verticalPlacedTextSymbolIndex:{left:r.leftJustifiedTextSymbolIndex,center:r.centerJustifiedTextSymbolIndex,right:r.rightJustifiedTextSymbolIndex}[t.getAnchorJustification(i)]
const o=[r.leftJustifiedTextSymbolIndex,r.centerJustifiedTextSymbolIndex,r.rightJustifiedTextSymbolIndex,r.verticalPlacedTextSymbolIndex]
for(const t of o)t>=0&&(e.text.placedSymbolArray.get(t).crossTileID=s>=0&&t!==s?0:r.crossTileID)}markUsedOrientation(e,i,r){const n=i===t.WritingMode.horizontal||i===t.WritingMode.horizontalOnly?i:0,s=i===t.WritingMode.vertical?i:0,o=[r.leftJustifiedTextSymbolIndex,r.centerJustifiedTextSymbolIndex,r.rightJustifiedTextSymbolIndex]
for(const t of o)e.text.placedSymbolArray.get(t).placedOrientation=n
r.verticalPlacedTextSymbolIndex&&(e.text.placedSymbolArray.get(r.verticalPlacedTextSymbolIndex).placedOrientation=s)}commit(t){this.commitTime=t,this.zoomAtLastRecencyCheck=this.transform.zoom
const e=this.prevPlacement
let i=!1
this.prevZoomAdjustment=e?e.zoomAdjustment(this.transform.zoom):0
const r=e?e.symbolFadeChange(t):1,n=e?e.opacities:{},s=e?e.variableOffsets:{},o=e?e.placedOrientations:{}
for(const a in this.placements){const t=this.placements[a],e=n[a]
e?(this.opacities[a]=new At(e,r,t.text,t.icon),i=i||t.text!==e.text.placed||t.icon!==e.icon.placed):(this.opacities[a]=new At(null,r,t.text,t.icon,t.skipFade),i=i||t.text||t.icon)}for(const a in n){const t=n[a]
if(!this.opacities[a]){const e=new At(t,r,!1,!1)
e.isHidden()||(this.opacities[a]=e,i=i||t.text.placed||t.icon.placed)}}for(const a in s)this.variableOffsets[a]||!this.opacities[a]||this.opacities[a].isHidden()||(this.variableOffsets[a]=s[a])
for(const a in o)this.placedOrientations[a]||!this.opacities[a]||this.opacities[a].isHidden()||(this.placedOrientations[a]=o[a])
i?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t)}updateLayerOpacities(t,e){const i={}
for(const r of e){const e=r.getBucket(t)
e&&r.latestFeatureIndex&&t.id===e.layerIds[0]&&this.updateBucketOpacities(e,i,r.collisionBoxArray)}}updateBucketOpacities(e,i,r){e.hasTextData()&&e.text.opacityVertexArray.clear(),e.hasIconData()&&e.icon.opacityVertexArray.clear(),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexArray.clear(),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexArray.clear()
const n=e.layers[0].layout,s=new At(null,0,!1,!1,!0),o=n.get("text-allow-overlap"),a=n.get("icon-allow-overlap"),l=n.get("text-variable-anchor"),c="map"===n.get("text-rotation-alignment"),h="map"===n.get("text-pitch-alignment"),u="none"!==n.get("icon-text-fit"),p=new At(null,0,o&&(a||!e.hasIconData()||n.get("icon-optional")),a&&(o||!e.hasTextData()||n.get("text-optional")),!0)
!e.collisionArrays&&r&&(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData())&&e.deserializeCollisionBoxes(r)
const d=(t,e,i)=>{for(let r=0;r<e/4;r++)t.opacityVertexArray.emplaceBack(i)}
for(let m=0;m<e.symbolInstances.length;m++){const r=e.symbolInstances.get(m),{numHorizontalGlyphVertices:n,numVerticalGlyphVertices:o,crossTileID:a}=r
let f=this.opacities[a]
i[a]?f=s:f||(f=p,this.opacities[a]=f),i[a]=!0
const g=r.numIconVertices>0,_=this.placedOrientations[r.crossTileID],y=_===t.WritingMode.vertical,x=_===t.WritingMode.horizontal||_===t.WritingMode.horizontalOnly
if(n>0||o>0){const t=qt(f.text)
d(e.text,n,y?Gt:t),d(e.text,o,x?Gt:t)
const i=f.text.isHidden();[r.rightJustifiedTextSymbolIndex,r.centerJustifiedTextSymbolIndex,r.leftJustifiedTextSymbolIndex].forEach((t=>{t>=0&&(e.text.placedSymbolArray.get(t).hidden=i||y?1:0)})),r.verticalPlacedTextSymbolIndex>=0&&(e.text.placedSymbolArray.get(r.verticalPlacedTextSymbolIndex).hidden=i||x?1:0)
const s=this.variableOffsets[r.crossTileID]
s&&this.markUsedJustification(e,s.anchor,r,_)
const a=this.placedOrientations[r.crossTileID]
a&&(this.markUsedJustification(e,"left",r,a),this.markUsedOrientation(e,a,r))}if(g){const t=qt(f.icon),i=!(u&&r.verticalPlacedIconSymbolIndex&&y)
r.placedIconSymbolIndex>=0&&(d(e.icon,r.numIconVertices,i?t:Gt),e.icon.placedSymbolArray.get(r.placedIconSymbolIndex).hidden=f.icon.isHidden()),r.verticalPlacedIconSymbolIndex>=0&&(d(e.icon,r.numVerticalIconVertices,i?Gt:t),e.icon.placedSymbolArray.get(r.verticalPlacedIconSymbolIndex).hidden=f.icon.isHidden())}if(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData()){const i=e.collisionArrays[m]
if(i){let r=new t.pointGeometry(0,0)
if(i.textBox||i.verticalTextBox){let t=!0
if(l){const e=this.variableOffsets[a]
e?(r=Mt(e.anchor,e.width,e.height,e.textOffset,e.textBoxScale),c&&r._rotate(h?this.transform.angle:-this.transform.angle)):t=!1}i.textBox&&Bt(e.textCollisionBox.collisionVertexArray,f.text.placed,!t||y,r.x,r.y),i.verticalTextBox&&Bt(e.textCollisionBox.collisionVertexArray,f.text.placed,!t||x,r.x,r.y)}const n=Boolean(!x&&i.verticalIconBox)
i.iconBox&&Bt(e.iconCollisionBox.collisionVertexArray,f.icon.placed,n,u?r.x:0,u?r.y:0),i.verticalIconBox&&Bt(e.iconCollisionBox.collisionVertexArray,f.icon.placed,!n,u?r.x:0,u?r.y:0)}}}if(e.sortFeatures(this.transform.angle),this.retainedQueryData[e.bucketInstanceId]&&(this.retainedQueryData[e.bucketInstanceId].featureSortOrder=e.featureSortOrder),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexBuffer&&e.iconCollisionBox.collisionVertexBuffer.updateData(e.iconCollisionBox.collisionVertexArray),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexBuffer&&e.textCollisionBox.collisionVertexBuffer.updateData(e.textCollisionBox.collisionVertexArray),e.bucketInstanceId in this.collisionCircleArrays){const t=this.collisionCircleArrays[e.bucketInstanceId]
e.placementInvProjMatrix=t.invProjMatrix,e.placementViewportMatrix=t.viewportMatrix,e.collisionCircleArray=t.circles,delete this.collisionCircleArrays[e.bucketInstanceId]}}symbolFadeChange(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration+this.prevZoomAdjustment}zoomAdjustment(t){return Math.max(0,(this.transform.zoom-t)/1.5)}hasTransitions(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration}stillRecent(t,e){const i=this.zoomAtLastRecencyCheck===e?1-this.zoomAdjustment(e):1
return this.zoomAtLastRecencyCheck=e,this.commitTime+this.fadeDuration*i>t}setStale(){this.stale=!0}}function Bt(t,e,i,r,n){t.emplaceBack(e?1:0,i?1:0,r||0,n||0),t.emplaceBack(e?1:0,i?1:0,r||0,n||0),t.emplaceBack(e?1:0,i?1:0,r||0,n||0),t.emplaceBack(e?1:0,i?1:0,r||0,n||0)}const Rt=Math.pow(2,25),Ft=Math.pow(2,24),Ot=Math.pow(2,17),Ut=Math.pow(2,16),Vt=Math.pow(2,9),Nt=Math.pow(2,8),$t=Math.pow(2,1)
function qt(t){if(0===t.opacity&&!t.placed)return 0
if(1===t.opacity&&t.placed)return 4294967295
const e=t.placed?1:0,i=Math.floor(127*t.opacity)
return i*Rt+e*Ft+i*Ot+e*Ut+i*Vt+e*Nt+i*$t+e}const Gt=0
class jt{constructor(t){this._sortAcrossTiles="viewport-y"!==t.layout.get("symbol-z-order")&&!t.layout.get("symbol-sort-key").isConstant(),this._currentTileIndex=0,this._currentPartIndex=0,this._seenCrossTileIDs={},this._bucketParts=[]}continuePlacement(t,e,i,r,n){const s=this._bucketParts
for(;this._currentTileIndex<t.length;)if(e.getBucketParts(s,r,t[this._currentTileIndex],this._sortAcrossTiles),this._currentTileIndex++,n())return!0
for(this._sortAcrossTiles&&(this._sortAcrossTiles=!1,s.sort(((t,e)=>t.sortKey-e.sortKey)));this._currentPartIndex<s.length;)if(e.placeLayerBucketPart(s[this._currentPartIndex],this._seenCrossTileIDs,i),this._currentPartIndex++,n())return!0
return!1}}class Zt{constructor(t,e,i,r,n,s,o){this.placement=new Lt(t,n,s,o),this._currentPlacementIndex=e.length-1,this._forceFullPlacement=i,this._showCollisionBoxes=r,this._done=!1}isDone(){return this._done}continuePlacement(e,i,r){const n=t.exported.now(),s=()=>{const e=t.exported.now()-n
return!this._forceFullPlacement&&e>2}
for(;this._currentPlacementIndex>=0;){const t=i[e[this._currentPlacementIndex]],n=this.placement.collisionIndex.transform.zoom
if("symbol"===t.type&&(!t.minzoom||t.minzoom<=n)&&(!t.maxzoom||t.maxzoom>n)){if(this._inProgressLayer||(this._inProgressLayer=new jt(t)),this._inProgressLayer.continuePlacement(r[t.source],this.placement,this._showCollisionBoxes,t,s))return
delete this._inProgressLayer}this._currentPlacementIndex--}this._done=!0}commit(t){return this.placement.commit(t),this.placement}}const Xt=512/t.EXTENT/2
class Wt{constructor(t,e,i){this.tileID=t,this.indexedSymbolInstances={},this.bucketInstanceId=i
for(let r=0;r<e.length;r++){const i=e.get(r),n=i.key
this.indexedSymbolInstances[n]||(this.indexedSymbolInstances[n]=[]),this.indexedSymbolInstances[n].push({crossTileID:i.crossTileID,coord:this.getScaledCoordinates(i,t)})}}getScaledCoordinates(e,i){const r=Xt/Math.pow(2,i.canonical.z-this.tileID.canonical.z)
return{x:Math.floor((i.canonical.x*t.EXTENT+e.anchorX)*r),y:Math.floor((i.canonical.y*t.EXTENT+e.anchorY)*r)}}findMatches(t,e,i){const r=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z)
for(let n=0;n<t.length;n++){const s=t.get(n)
if(s.crossTileID)continue
const o=this.indexedSymbolInstances[s.key]
if(!o)continue
const a=this.getScaledCoordinates(s,e)
for(const t of o)if(Math.abs(t.coord.x-a.x)<=r&&Math.abs(t.coord.y-a.y)<=r&&!i[t.crossTileID]){i[t.crossTileID]=!0,s.crossTileID=t.crossTileID
break}}}}class Ht{constructor(){this.maxCrossTileID=0}generate(){return++this.maxCrossTileID}}class Kt{constructor(){this.indexes={},this.usedCrossTileIDs={},this.lng=0}handleWrapJump(t){const e=Math.round((t-this.lng)/360)
if(0!==e)for(const i in this.indexes){const t=this.indexes[i],r={}
for(const i in t){const n=t[i]
n.tileID=n.tileID.unwrapTo(n.tileID.wrap+e),r[n.tileID.key]=n}this.indexes[i]=r}this.lng=t}addBucket(t,e,i){if(this.indexes[t.overscaledZ]&&this.indexes[t.overscaledZ][t.key]){if(this.indexes[t.overscaledZ][t.key].bucketInstanceId===e.bucketInstanceId)return!1
this.removeBucketCrossTileIDs(t.overscaledZ,this.indexes[t.overscaledZ][t.key])}for(let n=0;n<e.symbolInstances.length;n++)e.symbolInstances.get(n).crossTileID=0
this.usedCrossTileIDs[t.overscaledZ]||(this.usedCrossTileIDs[t.overscaledZ]={})
const r=this.usedCrossTileIDs[t.overscaledZ]
for(const n in this.indexes){const i=this.indexes[n]
if(Number(n)>t.overscaledZ)for(const n in i){const s=i[n]
s.tileID.isChildOf(t)&&s.findMatches(e.symbolInstances,t,r)}else{const s=i[t.scaledTo(Number(n)).key]
s&&s.findMatches(e.symbolInstances,t,r)}}for(let n=0;n<e.symbolInstances.length;n++){const t=e.symbolInstances.get(n)
t.crossTileID||(t.crossTileID=i.generate(),r[t.crossTileID]=!0)}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new Wt(t,e.symbolInstances,e.bucketInstanceId),!0}removeBucketCrossTileIDs(t,e){for(const i in e.indexedSymbolInstances)for(const r of e.indexedSymbolInstances[i])delete this.usedCrossTileIDs[t][r.crossTileID]}removeStaleBuckets(t){let e=!1
for(const i in this.indexes){const r=this.indexes[i]
for(const n in r)t[r[n].bucketInstanceId]||(this.removeBucketCrossTileIDs(i,r[n]),delete r[n],e=!0)}return e}}class Yt{constructor(){this.layerIndexes={},this.crossTileIDs=new Ht,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={}}addLayer(t,e,i){let r=this.layerIndexes[t.id]
void 0===r&&(r=this.layerIndexes[t.id]=new Kt)
let n=!1
const s={}
r.handleWrapJump(i)
for(const o of e){const e=o.getBucket(t)
e&&t.id===e.layerIds[0]&&(e.bucketInstanceId||(e.bucketInstanceId=++this.maxBucketInstanceId),r.addBucket(o.tileID,e,this.crossTileIDs)&&(n=!0),s[e.bucketInstanceId]=!0)}return r.removeStaleBuckets(s)&&(n=!0),n}pruneUnusedLayers(t){const e={}
t.forEach((t=>{e[t]=!0}))
for(const i in this.layerIndexes)e[i]||delete this.layerIndexes[i]}}const Jt=(e,i)=>t.emitValidationErrors(e,i&&i.filter((t=>"source.canvas"!==t.identifier))),Qt=t.pick(J,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData"]),te=t.pick(J,["setCenter","setZoom","setBearing","setPitch"]),ee=function(){const e={},i=t.spec.$version
for(const r in t.spec.$root){const n=t.spec.$root[r]
if(n.required){let t=null
t="version"===r?i:"array"===n.type?[]:{},null!=t&&(e[r]=t)}}return e}()
class ie extends t.Evented{constructor(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
super(),this.map=e,this.dispatcher=new S(H(),this),this.imageManager=new m,this.imageManager.setEventedParent(this),this.glyphManager=new y(e._requestManager,i.localIdeographFontFamily),this.lineAtlas=new w(256,512),this.crossTileSymbolIndex=new Yt,this._layers={},this._serializedLayers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.ZoomHistory,this._loaded=!1,this._availableImages=[],this._resetUpdates(),this.dispatcher.broadcast("setReferrer",t.getReferrer())
const r=this
this._rtlTextPluginCallback=ie.registerForPluginStateChange((e=>{r.dispatcher.broadcast("syncRTLPluginState",{pluginStatus:e.pluginStatus,pluginURL:e.pluginURL},((e,i)=>{if(t.triggerPluginCompletionEvent(e),i&&i.every((t=>t)))for(const t in r.sourceCaches)r.sourceCaches[t].reload()}))})),this.on("data",(t=>{if("source"!==t.dataType||"metadata"!==t.sourceDataType)return
const e=this.sourceCaches[t.sourceId]
if(!e)return
const i=e.getSource()
if(i&&i.vectorLayerIds)for(const r in this._layers){const t=this._layers[r]
t.source===i.id&&this._validateLayer(t)}}))}loadURL(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.fire(new t.Event("dataloading",{dataType:"style"}))
const r="boolean"!=typeof i.validate||i.validate,n=this.map._requestManager.transformRequest(e,t.ResourceType.Style)
this._request=t.getJSON(n,((e,i)=>{this._request=null,e?this.fire(new t.ErrorEvent(e)):i&&this._load(i,r)}))}loadJSON(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.fire(new t.Event("dataloading",{dataType:"style"})),this._request=t.exported.frame((()=>{this._request=null,this._load(e,!1!==i.validate)}))}loadEmpty(){this.fire(new t.Event("dataloading",{dataType:"style"})),this._load(ee,!1)}_load(e,i){if(i&&Jt(this,t.validateStyle(e)))return
this._loaded=!0,this.stylesheet=e
for(const t in e.sources)this.addSource(t,e.sources[t],{validate:!1})
e.sprite?this._loadSprite(e.sprite):this.imageManager.setLoaded(!0),this.glyphManager.setURL(e.glyphs)
const r=Y(this.stylesheet.layers)
this._order=r.map((t=>t.id)),this._layers={},this._serializedLayers={}
for(let n of r)n=t.createStyleLayer(n),n.setEventedParent(this,{layer:{id:n.id}}),this._layers[n.id]=n,this._serializedLayers[n.id]=n.serialize()
this.dispatcher.broadcast("setLayers",this._serializeLayers(this._order)),this.light=new b(this.stylesheet.light),this.fire(new t.Event("data",{dataType:"style"})),this.fire(new t.Event("style.load"))}_loadSprite(e){this._spriteRequest=function(e,i,r,n){let s,o,a
const l=r>1?"@2x":""
let c=t.getJSON(i.transformRequest(i.normalizeSpriteURL(e,l,".json"),t.ResourceType.SpriteJSON),((t,e)=>{c=null,a||(a=t,s=e,u())})),h=t.getImage(i.transformRequest(i.normalizeSpriteURL(e,l,".png"),t.ResourceType.SpriteImage),((t,e)=>{h=null,a||(a=t,o=e,u())}))
function u(){if(a)n(a)
else if(s&&o){const e=t.exported.getImageData(o),i={}
for(const r in s){const{width:n,height:o,x:a,y:l,sdf:c,pixelRatio:h,stretchX:u,stretchY:p,content:d}=s[r],m=new t.RGBAImage({width:n,height:o})
t.RGBAImage.copy(e,m,{x:a,y:l},{x:0,y:0},{width:n,height:o}),i[r]={data:m,pixelRatio:h,sdf:c,stretchX:u,stretchY:p,content:d}}n(null,i)}}return{cancel(){c&&(c.cancel(),c=null),h&&(h.cancel(),h=null)}}}(e,this.map._requestManager,this.map.getPixelRatio(),((e,i)=>{if(this._spriteRequest=null,e)this.fire(new t.ErrorEvent(e))
else if(i)for(const t in i)this.imageManager.addImage(t,i[t])
this.imageManager.setLoaded(!0),this._availableImages=this.imageManager.listImages(),this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"}))}))}_validateLayer(e){const i=this.sourceCaches[e.source]
if(!i)return
const r=e.sourceLayer
if(!r)return
const n=i.getSource();("geojson"===n.type||n.vectorLayerIds&&-1===n.vectorLayerIds.indexOf(r))&&this.fire(new t.ErrorEvent(new Error(`Source layer "${r}" does not exist on source "${n.id}" as specified by style layer "${e.id}".`)))}loaded(){if(!this._loaded)return!1
if(Object.keys(this._updatedSources).length)return!1
for(const t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return!1
return!!this.imageManager.isLoaded()}_serializeLayers(t){const e=[]
for(const i of t){const t=this._layers[i]
"custom"!==t.type&&e.push(t.serialize())}return e}hasTransitions(){if(this.light&&this.light.hasTransition())return!0
for(const t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return!0
for(const t in this._layers)if(this._layers[t].hasTransition())return!0
return!1}_checkLoaded(){if(!this._loaded)throw new Error("Style is not done loading.")}update(e){if(!this._loaded)return
const i=this._changed
if(this._changed){const t=Object.keys(this._updatedLayers),i=Object.keys(this._removedLayers);(t.length||i.length)&&this._updateWorkerLayers(t,i)
for(const e in this._updatedSources){const t=this._updatedSources[e]
"reload"===t?this._reloadSource(e):"clear"===t&&this._clearSource(e)}this._updateTilesForChangedImages()
for(const r in this._updatedPaintProps)this._layers[r].updateTransitions(e)
this.light.updateTransitions(e),this._resetUpdates()}const r={}
for(const t in this.sourceCaches){const e=this.sourceCaches[t]
r[t]=e.used,e.used=!1}for(const t of this._order){const i=this._layers[t]
i.recalculate(e,this._availableImages),!i.isHidden(e.zoom)&&i.source&&(this.sourceCaches[i.source].used=!0)}for(const n in r){const e=this.sourceCaches[n]
r[n]!==e.used&&e.fire(new t.Event("data",{sourceDataType:"visibility",dataType:"source",sourceId:n}))}this.light.recalculate(e),this.z=e.zoom,i&&this.fire(new t.Event("data",{dataType:"style"}))}_updateTilesForChangedImages(){const t=Object.keys(this._changedImages)
if(t.length){for(const e in this.sourceCaches)this.sourceCaches[e].reloadTilesForDependencies(["icons","patterns"],t)
this._changedImages={}}}_updateWorkerLayers(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeLayers(t),removedIds:e})}_resetUpdates(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={},this._changedImages={}}setState(e){if(this._checkLoaded(),Jt(this,t.validateStyle(e)))return!1;(e=t.clone$1(e)).layers=Y(e.layers)
const i=function(t,e){if(!t)return[{command:J.setStyle,args:[e]}]
let i=[]
try{if(!n(t.version,e.version))return[{command:J.setStyle,args:[e]}]
n(t.center,e.center)||i.push({command:J.setCenter,args:[e.center]}),n(t.zoom,e.zoom)||i.push({command:J.setZoom,args:[e.zoom]}),n(t.bearing,e.bearing)||i.push({command:J.setBearing,args:[e.bearing]}),n(t.pitch,e.pitch)||i.push({command:J.setPitch,args:[e.pitch]}),n(t.sprite,e.sprite)||i.push({command:J.setSprite,args:[e.sprite]}),n(t.glyphs,e.glyphs)||i.push({command:J.setGlyphs,args:[e.glyphs]}),n(t.transition,e.transition)||i.push({command:J.setTransition,args:[e.transition]}),n(t.light,e.light)||i.push({command:J.setLight,args:[e.light]})
const r={},s=[]
!function(t,e,i,r){let s
for(s in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,s)&&(Object.prototype.hasOwnProperty.call(e,s)||tt(s,i,r))
for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&(Object.prototype.hasOwnProperty.call(t,s)?n(t[s],e[s])||("geojson"===t[s].type&&"geojson"===e[s].type&&it(t,e,s)?i.push({command:J.setGeoJSONSourceData,args:[s,e[s].data]}):et(s,e,i,r)):Q(s,e,i))}(t.sources,e.sources,s,r)
const o=[]
t.layers&&t.layers.forEach((t=>{r[t.source]?i.push({command:J.removeLayer,args:[t.id]}):o.push(t)})),i=i.concat(s),function(t,e,i){e=e||[]
const r=(t=t||[]).map(nt),s=e.map(nt),o=t.reduce(st,{}),a=e.reduce(st,{}),l=r.slice(),c=Object.create(null)
let h,u,p,d,m,f,g
for(h=0,u=0;h<r.length;h++)p=r[h],Object.prototype.hasOwnProperty.call(a,p)?u++:(i.push({command:J.removeLayer,args:[p]}),l.splice(l.indexOf(p,u),1))
for(h=0,u=0;h<s.length;h++)p=s[s.length-1-h],l[l.length-1-h]!==p&&(Object.prototype.hasOwnProperty.call(o,p)?(i.push({command:J.removeLayer,args:[p]}),l.splice(l.lastIndexOf(p,l.length-u),1)):u++,f=l[l.length-h],i.push({command:J.addLayer,args:[a[p],f]}),l.splice(l.length-h,0,p),c[p]=!0)
for(h=0;h<s.length;h++)if(p=s[h],d=o[p],m=a[p],!c[p]&&!n(d,m))if(n(d.source,m.source)&&n(d["source-layer"],m["source-layer"])&&n(d.type,m.type)){for(g in rt(d.layout,m.layout,i,p,null,J.setLayoutProperty),rt(d.paint,m.paint,i,p,null,J.setPaintProperty),n(d.filter,m.filter)||i.push({command:J.setFilter,args:[p,m.filter]}),n(d.minzoom,m.minzoom)&&n(d.maxzoom,m.maxzoom)||i.push({command:J.setLayerZoomRange,args:[p,m.minzoom,m.maxzoom]}),d)Object.prototype.hasOwnProperty.call(d,g)&&"layout"!==g&&"paint"!==g&&"filter"!==g&&"metadata"!==g&&"minzoom"!==g&&"maxzoom"!==g&&(0===g.indexOf("paint.")?rt(d[g],m[g],i,p,g.slice(6),J.setPaintProperty):n(d[g],m[g])||i.push({command:J.setLayerProperty,args:[p,g,m[g]]}))
for(g in m)Object.prototype.hasOwnProperty.call(m,g)&&!Object.prototype.hasOwnProperty.call(d,g)&&"layout"!==g&&"paint"!==g&&"filter"!==g&&"metadata"!==g&&"minzoom"!==g&&"maxzoom"!==g&&(0===g.indexOf("paint.")?rt(d[g],m[g],i,p,g.slice(6),J.setPaintProperty):n(d[g],m[g])||i.push({command:J.setLayerProperty,args:[p,g,m[g]]}))}else i.push({command:J.removeLayer,args:[p]}),f=l[l.lastIndexOf(p)+1],i.push({command:J.addLayer,args:[m,f]})}(o,e.layers,i)}catch(t){console.warn("Unable to compute style diff:",t),i=[{command:J.setStyle,args:[e]}]}return i}(this.serialize(),e).filter((t=>!(t.command in te)))
if(0===i.length)return!1
const r=i.filter((t=>!(t.command in Qt)))
if(r.length>0)throw new Error(`Unimplemented: ${r.map((t=>t.command)).join(", ")}.`)
return i.forEach((t=>{"setTransition"!==t.command&&this[t.command].apply(this,t.args)})),this.stylesheet=e,!0}addImage(e,i){if(this.getImage(e))return this.fire(new t.ErrorEvent(new Error(`An image named "${e}" already exists.`)))
this.imageManager.addImage(e,i),this._afterImageUpdated(e)}updateImage(t,e){this.imageManager.updateImage(t,e)}getImage(t){return this.imageManager.getImage(t)}removeImage(e){if(!this.getImage(e))return this.fire(new t.ErrorEvent(new Error(`An image named "${e}" does not exist.`)))
this.imageManager.removeImage(e),this._afterImageUpdated(e)}_afterImageUpdated(e){this._availableImages=this.imageManager.listImages(),this._changedImages[e]=!0,this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"}))}listImages(){return this._checkLoaded(),this.imageManager.listImages()}addSource(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error(`Source "${e}" already exists.`)
if(!i.type)throw new Error(`The type property must be defined, but only the following properties were given: ${Object.keys(i).join(", ")}.`)
if(["vector","raster","geojson","video","image"].indexOf(i.type)>=0&&this._validate(t.validateStyle.source,`sources.${e}`,i,null,r))return
this.map&&this.map._collectResourceTiming&&(i.collectResourceTiming=!0)
const n=this.sourceCaches[e]=new $(e,i,this.dispatcher)
n.style=this,n.setEventedParent(this,(()=>({isSourceLoaded:this.loaded(),source:n.serialize(),sourceId:e}))),n.onAdd(this.map),this._changed=!0}removeSource(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID")
for(const r in this._layers)if(this._layers[r].source===e)return this.fire(new t.ErrorEvent(new Error(`Source "${e}" cannot be removed while layer "${r}" is using it.`)))
const i=this.sourceCaches[e]
delete this.sourceCaches[e],delete this._updatedSources[e],i.fire(new t.Event("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),i.setEventedParent(null),i.onRemove(this.map),this._changed=!0}setGeoJSONSourceData(t,e){this._checkLoaded(),this.sourceCaches[t].getSource().setData(e),this._changed=!0}getSource(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()}addLayer(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._checkLoaded()
const n=e.id
if(this.getLayer(n))return void this.fire(new t.ErrorEvent(new Error(`Layer "${n}" already exists on this map.`)))
let s
if("custom"===e.type){if(Jt(this,t.validateCustomStyleLayer(e)))return
s=t.createStyleLayer(e)}else{if("object"==typeof e.source&&(this.addSource(n,e.source),e=t.clone$1(e),e=t.extend(e,{source:n})),this._validate(t.validateStyle.layer,`layers.${n}`,e,{arrayIndex:-1},r))return
s=t.createStyleLayer(e),this._validateLayer(s),s.setEventedParent(this,{layer:{id:n}}),this._serializedLayers[s.id]=s.serialize()}const o=i?this._order.indexOf(i):this._order.length
if(i&&-1===o)this.fire(new t.ErrorEvent(new Error(`Cannot add layer "${n}" before non-existing layer "${i}".`)))
else{if(this._order.splice(o,0,n),this._layerOrderChanged=!0,this._layers[n]=s,this._removedLayers[n]&&s.source&&"custom"!==s.type){const t=this._removedLayers[n]
delete this._removedLayers[n],t.type!==s.type?this._updatedSources[s.source]="clear":(this._updatedSources[s.source]="reload",this.sourceCaches[s.source].pause())}this._updateLayer(s),s.onAdd&&s.onAdd(this.map)}}moveLayer(e,i){if(this._checkLoaded(),this._changed=!0,!this._layers[e])return void this.fire(new t.ErrorEvent(new Error(`The layer '${e}' does not exist in the map's style and cannot be moved.`)))
if(e===i)return
const r=this._order.indexOf(e)
this._order.splice(r,1)
const n=i?this._order.indexOf(i):this._order.length
i&&-1===n?this.fire(new t.ErrorEvent(new Error(`Cannot move layer "${e}" before non-existing layer "${i}".`))):(this._order.splice(n,0,e),this._layerOrderChanged=!0)}removeLayer(e){this._checkLoaded()
const i=this._layers[e]
if(!i)return void this.fire(new t.ErrorEvent(new Error(`Cannot remove non-existing layer "${e}".`)))
i.setEventedParent(null)
const r=this._order.indexOf(e)
this._order.splice(r,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=i,delete this._layers[e],delete this._serializedLayers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e],i.onRemove&&i.onRemove(this.map)}getLayer(t){return this._layers[t]}hasLayer(t){return t in this._layers}setLayerZoomRange(e,i,r){this._checkLoaded()
const n=this.getLayer(e)
n?n.minzoom===i&&n.maxzoom===r||(null!=i&&(n.minzoom=i),null!=r&&(n.maxzoom=r),this._updateLayer(n)):this.fire(new t.ErrorEvent(new Error(`Cannot set the zoom range of non-existing layer "${e}".`)))}setFilter(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._checkLoaded()
const s=this.getLayer(e)
if(s){if(!n(s.filter,i))return null==i?(s.filter=void 0,void this._updateLayer(s)):void(this._validate(t.validateStyle.filter,`layers.${s.id}.filter`,i,null,r)||(s.filter=t.clone$1(i),this._updateLayer(s)))}else this.fire(new t.ErrorEvent(new Error(`Cannot filter non-existing layer "${e}".`)))}getFilter(e){return t.clone$1(this.getLayer(e).filter)}setLayoutProperty(e,i,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
this._checkLoaded()
const o=this.getLayer(e)
o?n(o.getLayoutProperty(i),r)||(o.setLayoutProperty(i,r,s),this._updateLayer(o)):this.fire(new t.ErrorEvent(new Error(`Cannot style non-existing layer "${e}".`)))}getLayoutProperty(e,i){const r=this.getLayer(e)
if(r)return r.getLayoutProperty(i)
this.fire(new t.ErrorEvent(new Error(`Cannot get style of non-existing layer "${e}".`)))}setPaintProperty(e,i,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
this._checkLoaded()
const o=this.getLayer(e)
o?n(o.getPaintProperty(i),r)||(o.setPaintProperty(i,r,s)&&this._updateLayer(o),this._changed=!0,this._updatedPaintProps[e]=!0):this.fire(new t.ErrorEvent(new Error(`Cannot style non-existing layer "${e}".`)))}getPaintProperty(t,e){return this.getLayer(t).getPaintProperty(e)}setFeatureState(e,i){this._checkLoaded()
const r=e.source,n=e.sourceLayer,s=this.sourceCaches[r]
if(void 0===s)return void this.fire(new t.ErrorEvent(new Error(`The source '${r}' does not exist in the map's style.`)))
const o=s.getSource().type
"geojson"===o&&n?this.fire(new t.ErrorEvent(new Error("GeoJSON sources cannot have a sourceLayer parameter."))):"vector"!==o||n?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),s.setFeatureState(n,e.id,i)):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}removeFeatureState(e,i){this._checkLoaded()
const r=e.source,n=this.sourceCaches[r]
if(void 0===n)return void this.fire(new t.ErrorEvent(new Error(`The source '${r}' does not exist in the map's style.`)))
const s=n.getSource().type,o="vector"===s?e.sourceLayer:void 0
"vector"!==s||o?i&&"string"!=typeof e.id&&"number"!=typeof e.id?this.fire(new t.ErrorEvent(new Error("A feature id is required to remove its specific state property."))):n.removeFeatureState(o,e.id,i):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}getFeatureState(e){this._checkLoaded()
const i=e.source,r=e.sourceLayer,n=this.sourceCaches[i]
if(void 0!==n)return"vector"!==n.getSource().type||r?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),n.getFeatureState(r,e.id)):void this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))
this.fire(new t.ErrorEvent(new Error(`The source '${i}' does not exist in the map's style.`)))}getTransition(){return t.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)}serialize(){return t.filterObject({version:this.stylesheet.version,name:this.stylesheet.name,metadata:this.stylesheet.metadata,light:this.stylesheet.light,center:this.stylesheet.center,zoom:this.stylesheet.zoom,bearing:this.stylesheet.bearing,pitch:this.stylesheet.pitch,sprite:this.stylesheet.sprite,glyphs:this.stylesheet.glyphs,transition:this.stylesheet.transition,sources:t.mapObject(this.sourceCaches,(t=>t.serialize())),layers:this._serializeLayers(this._order)},(t=>void 0!==t))}_updateLayer(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&"raster"!==this.sourceCaches[t.source].getSource().type&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._changed=!0}_flattenAndSortRenderedFeatures(t){const e=t=>"fill-extrusion"===this._layers[t].type,i={},r=[]
for(let s=this._order.length-1;s>=0;s--){const n=this._order[s]
if(e(n)){i[n]=s
for(const e of t){const t=e[n]
if(t)for(const e of t)r.push(e)}}}r.sort(((t,e)=>e.intersectionZ-t.intersectionZ))
const n=[]
for(let s=this._order.length-1;s>=0;s--){const o=this._order[s]
if(e(o))for(let t=r.length-1;t>=0;t--){const e=r[t].feature
if(i[e.layer.id]<s)break
n.push(e),r.pop()}else for(const e of t){const t=e[o]
if(t)for(const e of t)n.push(e.feature)}}return n}queryRenderedFeatures(e,i,r){i&&i.filter&&this._validate(t.validateStyle.filter,"queryRenderedFeatures.filter",i.filter,null,i)
const n={}
if(i&&i.layers){if(!Array.isArray(i.layers))return this.fire(new t.ErrorEvent(new Error("parameters.layers must be an Array."))),[]
for(const e of i.layers){const i=this._layers[e]
if(!i)return this.fire(new t.ErrorEvent(new Error(`The layer '${e}' does not exist in the map's style and cannot be queried for features.`))),[]
n[i.source]=!0}}const s=[]
i.availableImages=this._availableImages
for(const t in this.sourceCaches)i.layers&&!n[t]||s.push(F(this.sourceCaches[t],this._layers,this._serializedLayers,e,i,r))
return this.placement&&s.push(function(t,e,i,r,n,s,o){const a={},l=s.queryRenderedSymbols(r),c=[]
for(const h of Object.keys(l).map(Number))c.push(o[h])
c.sort(O)
for(const h of c){const i=h.featureIndex.lookupSymbolFeatures(l[h.bucketInstanceId],e,h.bucketIndex,h.sourceLayerIndex,n.filter,n.layers,n.availableImages,t)
for(const t in i){const e=a[t]=a[t]||[],r=i[t]
r.sort(((t,e)=>{const i=h.featureSortOrder
if(i){const r=i.indexOf(t.featureIndex)
return i.indexOf(e.featureIndex)-r}return e.featureIndex-t.featureIndex}))
for(const t of r)e.push(t)}}for(const h in a)a[h].forEach((e=>{const r=e.feature,n=i[t[h].source].getFeatureState(r.layer["source-layer"],r.id)
r.source=r.layer.source,r.layer["source-layer"]&&(r.sourceLayer=r.layer["source-layer"]),r.state=n}))
return a}(this._layers,this._serializedLayers,this.sourceCaches,e,i,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenAndSortRenderedFeatures(s)}querySourceFeatures(e,i){i&&i.filter&&this._validate(t.validateStyle.filter,"querySourceFeatures.filter",i.filter,null,i)
const r=this.sourceCaches[e]
return r?function(t,e){const i=t.getRenderableIds().map((e=>t.getTileByID(e))),r=[],n={}
for(let s=0;s<i.length;s++){const t=i[s],o=t.tileID.canonical.key
n[o]||(n[o]=!0,t.querySourceFeatures(r,e))}return r}(r,i):[]}addSourceType(t,e,i){return ie.getSourceType(t)?i(new Error(`A source type called "${t}" already exists.`)):(ie.setSourceType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},i):i(null,null))}getLight(){return this.light.getLight()}setLight(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this._checkLoaded()
const r=this.light.getLight()
let s=!1
for(const t in e)if(!n(e[t],r[t])){s=!0
break}if(!s)return
const o={now:t.exported.now(),transition:t.extend({duration:300,delay:0},this.stylesheet.transition)}
this.light.setLight(e,i),this.light.updateTransitions(o)}_validate(e,i,r,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
return(!s||!1!==s.validate)&&Jt(this,e.call(t.validateStyle,t.extend({key:i,style:this.serialize(),value:r,styleSpec:t.spec},n)))}_remove(){this._request&&(this._request.cancel(),this._request=null),this._spriteRequest&&(this._spriteRequest.cancel(),this._spriteRequest=null),t.evented.off("pluginStateChange",this._rtlTextPluginCallback)
for(const t in this._layers)this._layers[t].setEventedParent(null)
for(const t in this.sourceCaches){const e=this.sourceCaches[t]
e.setEventedParent(null),e.onRemove(this.map)}this.imageManager.setEventedParent(null),this.setEventedParent(null),this.dispatcher.remove()}_clearSource(t){this.sourceCaches[t].clearTiles()}_reloadSource(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload()}_updateSources(t){for(const e in this.sourceCaches)this.sourceCaches[e].update(t)}_generateCollisionBoxes(){for(const t in this.sourceCaches)this._reloadSource(t)}_updatePlacement(e,i,r,n){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=!1,a=!1
const l={}
for(const t of this._order){const i=this._layers[t]
if("symbol"!==i.type)continue
if(!l[i.source]){const t=this.sourceCaches[i.source]
l[i.source]=t.getRenderableIds(!0).map((e=>t.getTileByID(e))).sort(((t,e)=>e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)))}const r=this.crossTileSymbolIndex.addLayer(i,l[i.source],e.center.lng)
o=o||r}if(this.crossTileSymbolIndex.pruneUnusedLayers(this._order),((s=s||this._layerOrderChanged||0===r)||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(t.exported.now(),e.zoom))&&(this.pauseablePlacement=new Zt(e,this._order,s,i,r,n,this.placement),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,l),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(t.exported.now()),a=!0),o&&this.pauseablePlacement.placement.setStale()),a||o)for(const t of this._order){const e=this._layers[t]
"symbol"===e.type&&this.placement.updateLayerOpacities(e,l[e.source])}return!this.pauseablePlacement.isDone()||this.placement.hasTransitions(t.exported.now())}_releaseSymbolFadeTiles(){for(const t in this.sourceCaches)this.sourceCaches[t].releaseSymbolFadeTiles()}getImages(t,e,i){this.imageManager.getImages(e.icons,i),this._updateTilesForChangedImages()
const r=this.sourceCaches[e.source]
r&&r.setDependencies(e.tileID.key,e.type,e.icons)}getGlyphs(t,e,i){this.glyphManager.getGlyphs(e.stacks,i)}getResource(e,i,r){return t.makeRequest(i,r)}}ie.getSourceType=function(t){return B[t]},ie.setSourceType=function(t,e){B[t]=e},ie.registerForPluginStateChange=t.registerForPluginStateChange
var re=t.createLayout([{name:"a_pos",type:"Int16",components:2}]),ne={prelude:se("#ifdef GL_ES\nprecision mediump float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif","#ifdef GL_ES\nprecision highp float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nvec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0\n);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}"),background:se("uniform vec4 u_color;uniform float u_opacity;void main() {gl_FragColor=u_color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),backgroundPattern:se("uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_mix)*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}"),circle:se("varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=v_data.xy;float extrude_length=length(extrude);lowp float antialiasblur=v_data.z;float antialiased_blur=-max(blur,antialiasblur);float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));gl_FragColor=opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;attribute vec2 a_pos;varying vec3 v_data;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main(void) {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=vec2(mod(a_pos,2.0)*2.0-1.0);vec2 circle_center=floor(a_pos*0.5);if (u_pitch_with_map) {vec2 corner_position=circle_center;if (u_scale_with_map) {corner_position+=extrude*(radius+stroke_width)*u_extrude_scale;} else {vec4 projected_center=u_matrix*vec4(circle_center,0,1);corner_position+=extrude*(radius+stroke_width)*u_extrude_scale*(projected_center.w/u_camera_to_center_distance);}gl_Position=u_matrix*vec4(corner_position,0,1);} else {gl_Position=u_matrix*vec4(circle_center,0,1);if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}lowp float antialiasblur=1.0/u_device_pixel_ratio/(radius+stroke_width);v_data=vec3(extrude.x,extrude.y,antialiasblur);}"),clippingMask:se("void main() {gl_FragColor=vec4(1.0);}","attribute vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),heatmap:se("uniform highp float u_intensity;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n#pragma mapbox: initialize highp float weight\nfloat d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);gl_FragColor=vec4(val,1.0,1.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;attribute vec2 a_pos;varying vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\nconst highp float ZERO=1.0/255.0/16.0;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n#pragma mapbox: initialize highp float weight\n#pragma mapbox: initialize mediump float radius\nvec2 unscaled_extrude=vec2(mod(a_pos,2.0)*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec4 pos=vec4(floor(a_pos*0.5)+extrude,0,1);gl_Position=u_matrix*pos;}"),heatmapTexture:se("uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;varying vec2 v_pos;void main() {float t=texture2D(u_image,v_pos).r;vec4 color=texture2D(u_color_ramp,vec2(t,0.5));gl_FragColor=color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(0.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;attribute vec2 a_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}"),collisionBox:se("varying float v_placed;varying float v_notUsed;void main() {float alpha=0.5;gl_FragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {gl_FragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {gl_FragColor*=.1;}}","attribute vec2 a_pos;attribute vec2 a_anchor_pos;attribute vec2 a_extrude;attribute vec2 a_placed;attribute vec2 a_shift;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;varying float v_placed;varying float v_notUsed;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,0.0,1.0);gl_Position.xy+=(a_extrude+a_shift)*u_extrude_scale*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;}"),collisionCircle:se("varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;void main() {float alpha=0.5*min(v_perspective_ratio,1.0);float stroke_radius=0.9*max(v_perspective_ratio,1.0);float distance_to_center=length(v_extrude);float distance_to_edge=abs(distance_to_center-v_radius);float opacity_t=smoothstep(-stroke_radius,0.0,-distance_to_edge);vec4 color=mix(vec4(0.0,0.0,1.0,0.5),vec4(1.0,0.0,0.0,1.0),v_collision);gl_FragColor=color*alpha*opacity_t;}","attribute vec2 a_pos;attribute float a_radius;attribute vec2 a_flags;uniform mat4 u_matrix;uniform mat4 u_inv_matrix;uniform vec2 u_viewport_size;uniform float u_camera_to_center_distance;varying float v_radius;varying vec2 v_extrude;varying float v_perspective_ratio;varying float v_collision;vec3 toTilePosition(vec2 screenPos) {vec4 rayStart=u_inv_matrix*vec4(screenPos,-1.0,1.0);vec4 rayEnd  =u_inv_matrix*vec4(screenPos, 1.0,1.0);rayStart.xyz/=rayStart.w;rayEnd.xyz  /=rayEnd.w;highp float t=(0.0-rayStart.z)/(rayEnd.z-rayStart.z);return mix(rayStart.xyz,rayEnd.xyz,t);}void main() {vec2 quadCenterPos=a_pos;float radius=a_radius;float collision=a_flags.x;float vertexIdx=a_flags.y;vec2 quadVertexOffset=vec2(mix(-1.0,1.0,float(vertexIdx >=2.0)),mix(-1.0,1.0,float(vertexIdx >=1.0 && vertexIdx <=2.0)));vec2 quadVertexExtent=quadVertexOffset*radius;vec3 tilePos=toTilePosition(quadCenterPos);vec4 clipPos=u_matrix*vec4(tilePos,1.0);highp float camera_to_anchor_distance=clipPos.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);float padding_factor=1.2;v_radius=radius;v_extrude=quadVertexExtent*padding_factor;v_perspective_ratio=collision_perspective_ratio;v_collision=collision;gl_Position=vec4(clipPos.xyz/clipPos.w,1.0)+vec4(quadVertexExtent*padding_factor/u_viewport_size*2.0,0.0,0.0);}"),debug:se("uniform highp vec4 u_color;uniform sampler2D u_overlay;varying vec2 v_uv;void main() {vec4 overlay_color=texture2D(u_overlay,v_uv);gl_FragColor=mix(u_color,overlay_color,overlay_color.a);}","attribute vec2 a_pos;varying vec2 v_uv;uniform mat4 u_matrix;uniform float u_overlay_scale;void main() {v_uv=a_pos/8192.0;gl_Position=u_matrix*vec4(a_pos*u_overlay_scale,0,1);}"),fill:se("#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_FragColor=color*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);}"),fillOutline:se("varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=outline_color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","attribute vec2 a_pos;uniform mat4 u_matrix;uniform vec2 u_world;varying vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillOutlinePattern:se("uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);gl_FragColor=mix(color1,color2,u_fade)*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;gl_Position=u_matrix*vec4(a_pos,0,1);vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillPattern:se("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);gl_FragColor=mix(color1,color2,u_fade)*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;attribute vec2 a_pos;varying vec2 v_pos_a;varying vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}"),fillExtrusion:se("varying vec4 v_color;void main() {gl_FragColor=v_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec4 v_color;\n#pragma mapbox: define highp float base\n#pragma mapbox: define highp float height\n#pragma mapbox: define highp vec4 color\nvoid main() {\n#pragma mapbox: initialize highp float base\n#pragma mapbox: initialize highp float height\n#pragma mapbox: initialize highp vec4 color\nvec3 normal=a_normal_ed.xyz;base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);gl_Position=u_matrix*vec4(a_pos,t > 0.0 ? height : base,1);float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;float directional=clamp(dot(normal/16384.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}"),fillExtrusionPattern:se("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture2D(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture2D(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);gl_FragColor=mixedColor*v_lighting;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec3 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;attribute vec2 a_pos;attribute vec4 a_normal_ed;varying vec2 v_pos_a;varying vec2 v_pos_b;varying vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;base=max(0.0,base);height=max(0.0,height);float t=mod(normal.x,2.0);float z=t > 0.0 ? height : base;gl_Position=u_matrix*vec4(a_pos,z,1);vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0\n? a_pos\n: vec2(edgedistance,z*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}"),hillshadePrepare:se("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture2D(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack)/4.0;}void main() {vec2 epsilon=1.0/u_dimension;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggerationFactor=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;float exaggeration=u_zoom < 15.0 ? (u_zoom-15.0)*exaggerationFactor : 0.0;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))/pow(2.0,exaggeration+(19.2562-u_zoom));gl_FragColor=clamp(vec4(deriv.x/2.0+0.5,deriv.y/2.0+0.5,1.0,1.0),0.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_dimension;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}"),hillshade:se("uniform sampler2D u_image;varying vec2 v_pos;uniform vec2 u_latrange;uniform vec2 u_light;uniform vec4 u_shadow;uniform vec4 u_highlight;uniform vec4 u_accent;\n#define PI 3.141592653589793\nvoid main() {vec4 pixel=texture2D(u_image,v_pos);vec2 deriv=((pixel.rg*2.0)-1.0);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));float slope=atan(1.25*length(deriv)/scaleFactor);float aspect=deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);float intensity=u_light.x;float azimuth=u_light.y+PI;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadow,u_highlight,shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);gl_FragColor=accent_color*(1.0-shade_color.a)+shade_color;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos=a_texture_pos/8192.0;}"),line:se("uniform lowp float u_device_pixel_ratio;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp float v_linesofar;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),lineGradient:se("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;varying vec2 v_width2;varying vec2 v_normal;varying float v_gamma_scale;varying highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture2D(u_image,v_uv);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nattribute vec2 a_pos_normal;attribute vec4 a_data;attribute float a_uv_x;attribute float a_split_index;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;uniform float u_image_height;varying vec2 v_normal;varying vec2 v_width2;varying float v_gamma_scale;varying highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;highp float texel_height=1.0/u_image_height;highp float half_texel_height=0.5*texel_height;v_uv=vec2(a_uv_x,a_split_index*texel_height-half_texel_height);vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_width2=vec2(outset,inset);}"),linePattern:se("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec3 u_scale;uniform sampler2D u_image;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float aspect_a=display_size_a.y/v_width;float aspect_b=display_size_b.y/v_width;float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x*aspect_a,1.0);float x_b=mod(v_linesofar/pattern_size_b.x*aspect_b,1.0);float y=0.5*v_normal.y+0.5;vec2 texel_size=1.0/u_texsize;vec2 pos_a=mix(pattern_tl_a*texel_size-texel_size,pattern_br_a*texel_size+texel_size,vec2(x_a,y));vec2 pos_b=mix(pattern_tl_b*texel_size-texel_size,pattern_br_b*texel_size+texel_size,vec2(x_b,y));vec4 color=mix(texture2D(u_image,pos_a),texture2D(u_image,pos_b),u_fade);gl_FragColor=color*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;varying vec2 v_normal;varying vec2 v_width2;varying float v_linesofar;varying float v_gamma_scale;varying float v_width;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_linesofar=a_linesofar;v_width2=vec2(outset,inset);v_width=floorwidth;}"),lineSDF:se("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform float u_sdfgamma;uniform float u_mix;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture2D(u_image,v_tex_a).a;float sdfdist_b=texture2D(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);alpha*=smoothstep(0.5-u_sdfgamma/floorwidth,0.5+u_sdfgamma/floorwidth,sdfdist);gl_FragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nattribute vec2 a_pos_normal;attribute vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_patternscale_a;uniform float u_tex_y_a;uniform vec2 u_patternscale_b;uniform float u_tex_y_b;uniform vec2 u_units_to_pixels;varying vec2 v_normal;varying vec2 v_width2;varying vec2 v_tex_a;varying vec2 v_tex_b;varying float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;float extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;v_tex_a=vec2(a_linesofar*u_patternscale_a.x/floorwidth,normal.y*u_patternscale_a.y+u_tex_y_a);v_tex_b=vec2(a_linesofar*u_patternscale_b.x/floorwidth,normal.y*u_patternscale_b.y+u_tex_y_b);v_width2=vec2(outset,inset);}"),raster:se("uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;varying vec2 v_pos0;varying vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture2D(u_image0,v_pos0);vec4 color1=texture2D(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);gl_FragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;attribute vec2 a_pos;attribute vec2 a_texture_pos;varying vec2 v_pos0;varying vec2 v_pos1;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos0=(((a_texture_pos/8192.0)-0.5)/u_buffer_scale )+0.5;v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}"),symbolIcon:se("uniform sampler2D u_texture;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nlowp float alpha=opacity*v_fade_opacity;gl_FragColor=texture2D(u_texture,v_tex)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;varying vec2 v_tex;varying float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;vec2 a_minFontScale=a_pixeloffset.zw/256.0;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*max(a_minFontScale,fontScale)+a_pxoffset/16.0),0.0,1.0);v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;v_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));}"),symbolSDF:se("#define SDF_PX 8.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec4 a_pixeloffset;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;varying vec2 v_data0;varying vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale+a_pxoffset),0.0,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));v_data0=a_tex/u_texsize;v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}"),symbolTextAndIcon:se("#define SDF_PX 8.0\n#define SDF 1.0\n#define ICON 0.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform sampler2D u_texture_icon;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat fade_opacity=v_data1[2];if (v_data1.w==ICON) {vec2 tex_icon=v_data0.zw;lowp float alpha=opacity*fade_opacity;gl_FragColor=texture2D(u_texture_icon,tex_icon)*alpha;\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\nreturn;}vec2 tex=v_data0.xy;float EDGE_GAMMA=0.105/u_device_pixel_ratio;float gamma_scale=v_data1.x;float size=v_data1.y;float fontScale=size/24.0;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture2D(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);gl_FragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\ngl_FragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;attribute vec4 a_pos_offset;attribute vec4 a_data;attribute vec3 a_projected_pos;attribute float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_texsize_icon;varying vec4 v_data0;varying vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);float is_sdf=a_size[0]-2.0*a_size_min;highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=size/24.0;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),0,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,0.0,1.0);gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),0.0,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(1.0,fade_opacity[0]+fade_change));v_data0.xy=a_tex/u_texsize;v_data0.zw=a_tex/u_texsize_icon;v_data1=vec4(gamma_scale,size,interpolated_fade_opacity,is_sdf);}")}
function se(t,e){const i=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,r=e.match(/attribute ([\w]+) ([\w]+)/g),n=t.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),s=e.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),o=s?s.concat(n):n,a={}
return{fragmentSource:t=t.replace(i,((t,e,i,r,n)=>(a[n]=!0,"define"===e?`\n#ifndef HAS_UNIFORM_u_${n}\nvarying ${i} ${r} ${n};\n#else\nuniform ${i} ${r} u_${n};\n#endif\n`:`\n#ifdef HAS_UNIFORM_u_${n}\n    ${i} ${r} ${n} = u_${n};\n#endif\n`))),vertexSource:e=e.replace(i,((t,e,i,r,n)=>{const s="float"===r?"vec2":"vec4",o=n.match(/color/)?"color":s
return a[n]?"define"===e?`\n#ifndef HAS_UNIFORM_u_${n}\nuniform lowp float u_${n}_t;\nattribute ${i} ${s} a_${n};\nvarying ${i} ${r} ${n};\n#else\nuniform ${i} ${r} u_${n};\n#endif\n`:"vec4"===o?`\n#ifndef HAS_UNIFORM_u_${n}\n    ${n} = a_${n};\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${n}\n    ${n} = unpack_mix_${o}(a_${n}, u_${n}_t);\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`:"define"===e?`\n#ifndef HAS_UNIFORM_u_${n}\nuniform lowp float u_${n}_t;\nattribute ${i} ${s} a_${n};\n#else\nuniform ${i} ${r} u_${n};\n#endif\n`:"vec4"===o?`\n#ifndef HAS_UNIFORM_u_${n}\n    ${i} ${r} ${n} = a_${n};\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${n}\n    ${i} ${r} ${n} = unpack_mix_${o}(a_${n}, u_${n}_t);\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`})),staticAttributes:r,staticUniforms:o}}class oe{constructor(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null}bind(t,e,i,r,n,s,o,a){this.context=t
let l=this.boundPaintVertexBuffers.length!==r.length
for(let c=0;!l&&c<r.length;c++)this.boundPaintVertexBuffers[c]!==r[c]&&(l=!0)
t.extVertexArrayObject&&this.vao&&this.boundProgram===e&&this.boundLayoutVertexBuffer===i&&!l&&this.boundIndexBuffer===n&&this.boundVertexOffset===s&&this.boundDynamicVertexBuffer===o&&this.boundDynamicVertexBuffer2===a?(t.bindVertexArrayOES.set(this.vao),o&&o.bind(),n&&n.dynamicDraw&&n.bind(),a&&a.bind()):this.freshBind(e,i,r,n,s,o,a)}freshBind(t,e,i,r,n,s,o){let a
const l=t.numAttributes,c=this.context,h=c.gl
if(c.extVertexArrayObject)this.vao&&this.destroy(),this.vao=c.extVertexArrayObject.createVertexArrayOES(),c.bindVertexArrayOES.set(this.vao),a=0,this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=i,this.boundIndexBuffer=r,this.boundVertexOffset=n,this.boundDynamicVertexBuffer=s,this.boundDynamicVertexBuffer2=o
else{a=c.currentNumAttributes||0
for(let t=l;t<a;t++)h.disableVertexAttribArray(t)}e.enableAttributes(h,t)
for(const u of i)u.enableAttributes(h,t)
s&&s.enableAttributes(h,t),o&&o.enableAttributes(h,t),e.bind(),e.setVertexAttribPointers(h,t,n)
for(const u of i)u.bind(),u.setVertexAttribPointers(h,t,n)
s&&(s.bind(),s.setVertexAttribPointers(h,t,n)),r&&r.bind(),o&&(o.bind(),o.setVertexAttribPointers(h,t,n)),c.currentNumAttributes=l}destroy(){this.vao&&(this.context.extVertexArrayObject.deleteVertexArrayOES(this.vao),this.vao=null)}}function ae(t){const e=[]
for(let i=0;i<t.length;i++){if(null===t[i])continue
const r=t[i].split(" ")
e.push(r.pop())}return e}class le{constructor(t,e,i,r,n,s){const o=t.gl
this.program=o.createProgram()
const a=ae(i.staticAttributes),l=r?r.getBinderAttributes():[],c=a.concat(l),h=i.staticUniforms?ae(i.staticUniforms):[],u=r?r.getBinderUniforms():[],p=h.concat(u),d=[]
for(const v of p)d.indexOf(v)<0&&d.push(v)
const m=r?r.defines():[]
s&&m.push("#define OVERDRAW_INSPECTOR;")
const f=m.concat(ne.prelude.fragmentSource,i.fragmentSource).join("\n"),g=m.concat(ne.prelude.vertexSource,i.vertexSource).join("\n"),_=o.createShader(o.FRAGMENT_SHADER)
if(o.isContextLost())return void(this.failedToCreate=!0)
o.shaderSource(_,f),o.compileShader(_),o.attachShader(this.program,_)
const y=o.createShader(o.VERTEX_SHADER)
if(o.isContextLost())return void(this.failedToCreate=!0)
o.shaderSource(y,g),o.compileShader(y),o.attachShader(this.program,y),this.attributes={}
const x={}
this.numAttributes=c.length
for(let v=0;v<this.numAttributes;v++)c[v]&&(o.bindAttribLocation(this.program,v,c[v]),this.attributes[c[v]]=v)
o.linkProgram(this.program),o.deleteShader(y),o.deleteShader(_)
for(let v=0;v<d.length;v++){const t=d[v]
if(t&&!x[t]){const e=o.getUniformLocation(this.program,t)
e&&(x[t]=e)}}this.fixedUniforms=n(t,x),this.binderUniforms=r?r.getUniforms(t,x):[]}draw(t,e,i,r,n,s,o,a,l,c,h,u,p,d,m,f){const g=t.gl
if(this.failedToCreate)return
t.program.set(this.program),t.setDepthMode(i),t.setStencilMode(r),t.setColorMode(n),t.setCullFace(s)
for(const y in this.fixedUniforms)this.fixedUniforms[y].set(o[y])
d&&d.setUniforms(t,this.binderUniforms,u,{zoom:p})
const _={[g.LINES]:2,[g.TRIANGLES]:3,[g.LINE_STRIP]:1}[e]
for(const y of h.get()){const i=y.vaos||(y.vaos={});(i[a]||(i[a]=new oe)).bind(t,this,l,d?d.getPaintVertexBuffers():[],c,y.vertexOffset,m,f),g.drawElements(e,y.primitiveLength*_,g.UNSIGNED_SHORT,y.primitiveOffset*_*2)}}}function ce(t,e,i){const r=1/It(i,1,e.transform.tileZoom),n=Math.pow(2,i.tileID.overscaledZ),s=i.tileSize*Math.pow(2,e.transform.tileZoom)/n,o=s*(i.tileID.canonical.x+i.tileID.wrap*n),a=s*i.tileID.canonical.y
return{u_image:0,u_texsize:i.imageAtlasTexture.size,u_scale:[r,t.fromScale,t.toScale],u_fade:t.t,u_pixel_coord_upper:[o>>16,a>>16],u_pixel_coord_lower:[65535&o,65535&a]}}const he=(e,i,r,n)=>{const s=i.style.light,o=s.properties.get("position"),a=[o.x,o.y,o.z],l=function(){var e=new t.ARRAY_TYPE(9)
return t.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}()
"viewport"===s.properties.get("anchor")&&function(t,e){var i=Math.sin(e),r=Math.cos(e)
t[0]=r,t[1]=i,t[2]=0,t[3]=-i,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1}(l,-i.transform.angle),function(t,e,i){var r=e[0],n=e[1],s=e[2]
t[0]=r*i[0]+n*i[3]+s*i[6],t[1]=r*i[1]+n*i[4]+s*i[7],t[2]=r*i[2]+n*i[5]+s*i[8]}(a,a,l)
const c=s.properties.get("color")
return{u_matrix:e,u_lightpos:a,u_lightintensity:s.properties.get("intensity"),u_lightcolor:[c.r,c.g,c.b],u_vertical_gradient:+r,u_opacity:n}},ue=(e,i,r,n,s,o,a)=>t.extend(he(e,i,r,n),ce(o,i,a),{u_height_factor:-Math.pow(2,s.overscaledZ)/a.tileSize/8}),pe=t=>({u_matrix:t}),de=(e,i,r,n)=>t.extend(pe(e),ce(r,i,n)),me=(t,e)=>({u_matrix:t,u_world:e}),fe=(e,i,r,n,s)=>t.extend(de(e,i,r,n),{u_world:s}),ge=(t,e,i,r)=>{const n=t.transform
let s,o
if("map"===r.paint.get("circle-pitch-alignment")){const t=It(i,1,n.zoom)
s=!0,o=[t,t]}else s=!1,o=n.pixelsToGLUnits
return{u_camera_to_center_distance:n.cameraToCenterDistance,u_scale_with_map:+("map"===r.paint.get("circle-pitch-scale")),u_matrix:t.translatePosMatrix(e.posMatrix,i,r.paint.get("circle-translate"),r.paint.get("circle-translate-anchor")),u_pitch_with_map:+s,u_device_pixel_ratio:t.pixelRatio,u_extrude_scale:o}},_e=(t,e,i)=>{const r=It(i,1,e.zoom),n=Math.pow(2,e.zoom-i.tileID.overscaledZ),s=i.tileID.overscaleFactor()
return{u_matrix:t,u_camera_to_center_distance:e.cameraToCenterDistance,u_pixels_to_tile_units:r,u_extrude_scale:[e.pixelsToGLUnits[0]/(r*n),e.pixelsToGLUnits[1]/(r*n)],u_overscale_factor:s}},ye=function(t,e){return{u_matrix:t,u_color:e,u_overlay:0,u_overlay_scale:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1}},xe=t=>({u_matrix:t}),ve=(t,e,i,r)=>({u_matrix:t,u_extrude_scale:It(e,1,i),u_intensity:r})
function be(e,i){const r=Math.pow(2,i.canonical.z),n=i.canonical.y
return[new t.MercatorCoordinate(0,n/r).toLngLat().lat,new t.MercatorCoordinate(0,(n+1)/r).toLngLat().lat]}const we=(t,e,i)=>{const r=t.transform
return{u_matrix:Ae(t,e,i),u_ratio:1/It(e,1,r.zoom),u_device_pixel_ratio:t.pixelRatio,u_units_to_pixels:[1/r.pixelsToGLUnits[0],1/r.pixelsToGLUnits[1]]}},Se=(e,i,r,n)=>t.extend(we(e,i,r),{u_image:0,u_image_height:n}),Te=(t,e,i,r)=>{const n=t.transform,s=Ee(e,n)
return{u_matrix:Ae(t,e,i),u_texsize:e.imageAtlasTexture.size,u_ratio:1/It(e,1,n.zoom),u_device_pixel_ratio:t.pixelRatio,u_image:0,u_scale:[s,r.fromScale,r.toScale],u_fade:r.t,u_units_to_pixels:[1/n.pixelsToGLUnits[0],1/n.pixelsToGLUnits[1]]}},Ie=(e,i,r,n,s)=>{const o=e.lineAtlas,a=Ee(i,e.transform),l="round"===r.layout.get("line-cap"),c=o.getDash(n.from,l),h=o.getDash(n.to,l),u=c.width*s.fromScale,p=h.width*s.toScale
return t.extend(we(e,i,r),{u_patternscale_a:[a/u,-c.height/2],u_patternscale_b:[a/p,-h.height/2],u_sdfgamma:o.width/(256*Math.min(u,p)*e.pixelRatio)/2,u_image:0,u_tex_y_a:c.y,u_tex_y_b:h.y,u_mix:s.t})}
function Ee(t,e){return 1/It(t,1,e.tileZoom)}function Ae(t,e,i){return t.translatePosMatrix(e.tileID.posMatrix,e,i.paint.get("line-translate"),i.paint.get("line-translate-anchor"))}const ze=(t,e,i,r,n)=>{return{u_matrix:t,u_tl_parent:e,u_scale_parent:i,u_buffer_scale:1,u_fade_t:r.mix,u_opacity:r.opacity*n.paint.get("raster-opacity"),u_image0:0,u_image1:1,u_brightness_low:n.paint.get("raster-brightness-min"),u_brightness_high:n.paint.get("raster-brightness-max"),u_saturation_factor:(o=n.paint.get("raster-saturation"),o>0?1-1/(1.001-o):-o),u_contrast_factor:(s=n.paint.get("raster-contrast"),s>0?1/(1-s):1+s),u_spin_weights:Ce(n.paint.get("raster-hue-rotate"))}
var s,o}
function Ce(t){t*=Math.PI/180
const e=Math.sin(t),i=Math.cos(t)
return[(2*i+1)/3,(-Math.sqrt(3)*e-i+1)/3,(Math.sqrt(3)*e-i+1)/3]}const Pe=(t,e,i,r,n,s,o,a,l,c)=>{const h=n.transform
return{u_is_size_zoom_constant:+("constant"===t||"source"===t),u_is_size_feature_constant:+("constant"===t||"camera"===t),u_size_t:e?e.uSizeT:0,u_size:e?e.uSize:0,u_camera_to_center_distance:h.cameraToCenterDistance,u_pitch:h.pitch/360*2*Math.PI,u_rotate_symbol:+i,u_aspect_ratio:h.width/h.height,u_fade_change:n.options.fadeDuration?n.symbolFadeChange:1,u_matrix:s,u_label_plane_matrix:o,u_coord_matrix:a,u_is_text:+l,u_pitch_with_map:+r,u_texsize:c,u_texture:0}},ke=(e,i,r,n,s,o,a,l,c,h,u)=>{const p=s.transform
return t.extend(Pe(e,i,r,n,s,o,a,l,c,h),{u_gamma_scale:n?Math.cos(p._pitch)*p.cameraToCenterDistance:1,u_device_pixel_ratio:s.pixelRatio,u_is_halo:+u})},Me=(e,i,r,n,s,o,a,l,c,h)=>t.extend(ke(e,i,r,n,s,o,a,l,!0,c,!0),{u_texsize_icon:h,u_texture_icon:1}),De=(t,e,i)=>({u_matrix:t,u_opacity:e,u_color:i}),Le=(e,i,r,n,s,o)=>t.extend(function(t,e,i,r){const n=i.imageManager.getPattern(t.from.toString()),s=i.imageManager.getPattern(t.to.toString()),{width:o,height:a}=i.imageManager.getPixelSize(),l=Math.pow(2,r.tileID.overscaledZ),c=r.tileSize*Math.pow(2,i.transform.tileZoom)/l,h=c*(r.tileID.canonical.x+r.tileID.wrap*l),u=c*r.tileID.canonical.y
return{u_image:0,u_pattern_tl_a:n.tl,u_pattern_br_a:n.br,u_pattern_tl_b:s.tl,u_pattern_br_b:s.br,u_texsize:[o,a],u_mix:e.t,u_pattern_size_a:n.displaySize,u_pattern_size_b:s.displaySize,u_scale_a:e.fromScale,u_scale_b:e.toScale,u_tile_units_to_pixels:1/It(r,1,i.transform.tileZoom),u_pixel_coord_upper:[h>>16,u>>16],u_pixel_coord_lower:[65535&h,65535&u]}}(n,o,r,s),{u_matrix:e,u_opacity:i}),Be={fillExtrusion:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_opacity:new t.Uniform1f(e,i.u_opacity)}),fillExtrusionPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_height_factor:new t.Uniform1f(e,i.u_height_factor),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade),u_opacity:new t.Uniform1f(e,i.u_opacity)}),fill:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),fillPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),fillOutline:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world)}),fillOutlinePattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),circle:(e,i)=>({u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_scale_with_map:new t.Uniform1i(e,i.u_scale_with_map),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),collisionBox:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pixels_to_tile_units:new t.Uniform1f(e,i.u_pixels_to_tile_units),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_overscale_factor:new t.Uniform1f(e,i.u_overscale_factor)}),collisionCircle:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_inv_matrix:new t.UniformMatrix4f(e,i.u_inv_matrix),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_viewport_size:new t.Uniform2f(e,i.u_viewport_size)}),debug:(e,i)=>({u_color:new t.UniformColor(e,i.u_color),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_overlay:new t.Uniform1i(e,i.u_overlay),u_overlay_scale:new t.Uniform1f(e,i.u_overlay_scale)}),clippingMask:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),heatmap:(e,i)=>({u_extrude_scale:new t.Uniform1f(e,i.u_extrude_scale),u_intensity:new t.Uniform1f(e,i.u_intensity),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),heatmapTexture:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_color_ramp:new t.Uniform1i(e,i.u_color_ramp),u_opacity:new t.Uniform1f(e,i.u_opacity)}),hillshade:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_latrange:new t.Uniform2f(e,i.u_latrange),u_light:new t.Uniform2f(e,i.u_light),u_shadow:new t.UniformColor(e,i.u_shadow),u_highlight:new t.UniformColor(e,i.u_highlight),u_accent:new t.UniformColor(e,i.u_accent)}),hillshadePrepare:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_dimension:new t.Uniform2f(e,i.u_dimension),u_zoom:new t.Uniform1f(e,i.u_zoom),u_unpack:new t.Uniform4f(e,i.u_unpack)}),line:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels)}),lineGradient:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_image:new t.Uniform1i(e,i.u_image),u_image_height:new t.Uniform1f(e,i.u_image_height)}),linePattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texsize:new t.Uniform2f(e,i.u_texsize),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_image:new t.Uniform1i(e,i.u_image),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),lineSDF:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_patternscale_a:new t.Uniform2f(e,i.u_patternscale_a),u_patternscale_b:new t.Uniform2f(e,i.u_patternscale_b),u_sdfgamma:new t.Uniform1f(e,i.u_sdfgamma),u_image:new t.Uniform1i(e,i.u_image),u_tex_y_a:new t.Uniform1f(e,i.u_tex_y_a),u_tex_y_b:new t.Uniform1f(e,i.u_tex_y_b),u_mix:new t.Uniform1f(e,i.u_mix)}),raster:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_tl_parent:new t.Uniform2f(e,i.u_tl_parent),u_scale_parent:new t.Uniform1f(e,i.u_scale_parent),u_buffer_scale:new t.Uniform1f(e,i.u_buffer_scale),u_fade_t:new t.Uniform1f(e,i.u_fade_t),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image0:new t.Uniform1i(e,i.u_image0),u_image1:new t.Uniform1i(e,i.u_image1),u_brightness_low:new t.Uniform1f(e,i.u_brightness_low),u_brightness_high:new t.Uniform1f(e,i.u_brightness_high),u_saturation_factor:new t.Uniform1f(e,i.u_saturation_factor),u_contrast_factor:new t.Uniform1f(e,i.u_contrast_factor),u_spin_weights:new t.Uniform3f(e,i.u_spin_weights)}),symbolIcon:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture)}),symbolSDF:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,i.u_is_halo)}),symbolTextAndIcon:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texsize_icon:new t.Uniform2f(e,i.u_texsize_icon),u_texture:new t.Uniform1i(e,i.u_texture),u_texture_icon:new t.Uniform1i(e,i.u_texture_icon),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,i.u_is_halo)}),background:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_color:new t.UniformColor(e,i.u_color)}),backgroundPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image:new t.Uniform1i(e,i.u_image),u_pattern_tl_a:new t.Uniform2f(e,i.u_pattern_tl_a),u_pattern_br_a:new t.Uniform2f(e,i.u_pattern_br_a),u_pattern_tl_b:new t.Uniform2f(e,i.u_pattern_tl_b),u_pattern_br_b:new t.Uniform2f(e,i.u_pattern_br_b),u_texsize:new t.Uniform2f(e,i.u_texsize),u_mix:new t.Uniform1f(e,i.u_mix),u_pattern_size_a:new t.Uniform2f(e,i.u_pattern_size_a),u_pattern_size_b:new t.Uniform2f(e,i.u_pattern_size_b),u_scale_a:new t.Uniform1f(e,i.u_scale_a),u_scale_b:new t.Uniform1f(e,i.u_scale_b),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_tile_units_to_pixels:new t.Uniform1f(e,i.u_tile_units_to_pixels)})}
class Re{constructor(t,e,i){this.context=t
const r=t.gl
this.buffer=r.createBuffer(),this.dynamicDraw=Boolean(i),this.context.unbindVAO(),t.bindElementBuffer.set(this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?r.DYNAMIC_DRAW:r.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}bind(){this.context.bindElementBuffer.set(this.buffer)}updateData(t){const e=this.context.gl
this.context.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer)}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer)}}const Fe={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"}
class Oe{constructor(t,e,i,r){this.length=e.length,this.attributes=i,this.itemSize=e.bytesPerElement,this.dynamicDraw=r,this.context=t
const n=t.gl
this.buffer=n.createBuffer(),t.bindVertexBuffer.set(this.buffer),n.bufferData(n.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?n.DYNAMIC_DRAW:n.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}bind(){this.context.bindVertexBuffer.set(this.buffer)}updateData(t){const e=this.context.gl
this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer)}enableAttributes(t,e){for(let i=0;i<this.attributes.length;i++){const r=e.attributes[this.attributes[i].name]
void 0!==r&&t.enableVertexAttribArray(r)}}setVertexAttribPointers(t,e,i){for(let r=0;r<this.attributes.length;r++){const n=this.attributes[r],s=e.attributes[n.name]
void 0!==s&&t.vertexAttribPointer(s,n.components,t[Fe[n.type]],!1,this.itemSize,n.offset+this.itemSize*(i||0))}}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer)}}class Ue{constructor(t){this.gl=t.gl,this.default=this.getDefault(),this.current=this.default,this.dirty=!1}get(){return this.current}set(t){}getDefault(){return this.default}setDefault(){this.set(this.default)}}class Ve extends Ue{getDefault(){return t.Color.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)}}class Ne extends Ue{getDefault(){return 1}set(t){(t!==this.current||this.dirty)&&(this.gl.clearDepth(t),this.current=t,this.dirty=!1)}}class $e extends Ue{getDefault(){return 0}set(t){(t!==this.current||this.dirty)&&(this.gl.clearStencil(t),this.current=t,this.dirty=!1)}}class qe extends Ue{getDefault(){return[!0,!0,!0,!0]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)}}class Ge extends Ue{getDefault(){return!0}set(t){(t!==this.current||this.dirty)&&(this.gl.depthMask(t),this.current=t,this.dirty=!1)}}class je extends Ue{getDefault(){return 255}set(t){(t!==this.current||this.dirty)&&(this.gl.stencilMask(t),this.current=t,this.dirty=!1)}}class Ze extends Ue{getDefault(){return{func:this.gl.ALWAYS,ref:0,mask:255}}set(t){const e=this.current;(t.func!==e.func||t.ref!==e.ref||t.mask!==e.mask||this.dirty)&&(this.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t,this.dirty=!1)}}class Xe extends Ue{getDefault(){const t=this.gl
return[t.KEEP,t.KEEP,t.KEEP]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||this.dirty)&&(this.gl.stencilOp(t[0],t[1],t[2]),this.current=t,this.dirty=!1)}}class We extends Ue{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t,this.dirty=!1}}class He extends Ue{getDefault(){return[0,1]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.depthRange(t[0],t[1]),this.current=t,this.dirty=!1)}}class Ke extends Ue{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t,this.dirty=!1}}class Ye extends Ue{getDefault(){return this.gl.LESS}set(t){(t!==this.current||this.dirty)&&(this.gl.depthFunc(t),this.current=t,this.dirty=!1)}}class Je extends Ue{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t,this.dirty=!1}}class Qe extends Ue{getDefault(){const t=this.gl
return[t.ONE,t.ZERO]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.blendFunc(t[0],t[1]),this.current=t,this.dirty=!1)}}class ti extends Ue{getDefault(){return t.Color.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)}}class ei extends Ue{getDefault(){return this.gl.FUNC_ADD}set(t){(t!==this.current||this.dirty)&&(this.gl.blendEquation(t),this.current=t,this.dirty=!1)}}class ii extends Ue{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this.current=t,this.dirty=!1}}class ri extends Ue{getDefault(){return this.gl.BACK}set(t){(t!==this.current||this.dirty)&&(this.gl.cullFace(t),this.current=t,this.dirty=!1)}}class ni extends Ue{getDefault(){return this.gl.CCW}set(t){(t!==this.current||this.dirty)&&(this.gl.frontFace(t),this.current=t,this.dirty=!1)}}class si extends Ue{getDefault(){return null}set(t){(t!==this.current||this.dirty)&&(this.gl.useProgram(t),this.current=t,this.dirty=!1)}}class oi extends Ue{getDefault(){return this.gl.TEXTURE0}set(t){(t!==this.current||this.dirty)&&(this.gl.activeTexture(t),this.current=t,this.dirty=!1)}}class ai extends Ue{getDefault(){const t=this.gl
return[0,0,t.drawingBufferWidth,t.drawingBufferHeight]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)}}class li extends Ue{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t,this.dirty=!1}}class ci extends Ue{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t,this.dirty=!1}}class hi extends Ue{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindTexture(e.TEXTURE_2D,t),this.current=t,this.dirty=!1}}class ui extends Ue{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t,this.dirty=!1}}class pi extends Ue{getDefault(){return null}set(t){const e=this.gl
e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t,this.dirty=!1}}class di extends Ue{constructor(t){super(t),this.vao=t.extVertexArrayObject}getDefault(){return null}set(t){this.vao&&(t!==this.current||this.dirty)&&(this.vao.bindVertexArrayOES(t),this.current=t,this.dirty=!1)}}class mi extends Ue{getDefault(){return 4}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t,this.dirty=!1}}class fi extends Ue{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t,this.dirty=!1}}class gi extends Ue{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t),this.current=t,this.dirty=!1}}class _i extends Ue{constructor(t,e){super(t),this.context=t,this.parent=e}getDefault(){return null}}class yi extends _i{setDirty(){this.dirty=!0}set(t){if(t===this.current&&!this.dirty)return
this.context.bindFramebuffer.set(this.parent)
const e=this.gl
e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1}}class xi extends _i{set(t){if(t===this.current&&!this.dirty)return
this.context.bindFramebuffer.set(this.parent)
const e=this.gl
e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1}}class vi{constructor(t,e,i,r){this.context=t,this.width=e,this.height=i
const n=this.framebuffer=t.gl.createFramebuffer()
this.colorAttachment=new yi(t,n),r&&(this.depthAttachment=new xi(t,n))}destroy(){const t=this.context.gl,e=this.colorAttachment.get()
if(e&&t.deleteTexture(e),this.depthAttachment){const e=this.depthAttachment.get()
e&&t.deleteRenderbuffer(e)}t.deleteFramebuffer(this.framebuffer)}}class bi{constructor(t,e,i){this.blendFunction=t,this.blendColor=e,this.mask=i}}bi.Replace=[1,0],bi.disabled=new bi(bi.Replace,t.Color.transparent,[!1,!1,!1,!1]),bi.unblended=new bi(bi.Replace,t.Color.transparent,[!0,!0,!0,!0]),bi.alphaBlended=new bi([1,771],t.Color.transparent,[!0,!0,!0,!0])
class wi{constructor(t){this.gl=t,this.extVertexArrayObject=this.gl.getExtension("OES_vertex_array_object"),this.clearColor=new Ve(this),this.clearDepth=new Ne(this),this.clearStencil=new $e(this),this.colorMask=new qe(this),this.depthMask=new Ge(this),this.stencilMask=new je(this),this.stencilFunc=new Ze(this),this.stencilOp=new Xe(this),this.stencilTest=new We(this),this.depthRange=new He(this),this.depthTest=new Ke(this),this.depthFunc=new Ye(this),this.blend=new Je(this),this.blendFunc=new Qe(this),this.blendColor=new ti(this),this.blendEquation=new ei(this),this.cullFace=new ii(this),this.cullFaceSide=new ri(this),this.frontFace=new ni(this),this.program=new si(this),this.activeTexture=new oi(this),this.viewport=new ai(this),this.bindFramebuffer=new li(this),this.bindRenderbuffer=new ci(this),this.bindTexture=new hi(this),this.bindVertexBuffer=new ui(this),this.bindElementBuffer=new pi(this),this.bindVertexArrayOES=this.extVertexArrayObject&&new di(this),this.pixelStoreUnpack=new mi(this),this.pixelStoreUnpackPremultiplyAlpha=new fi(this),this.pixelStoreUnpackFlipY=new gi(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.extTextureHalfFloat=t.getExtension("OES_texture_half_float"),this.extTextureHalfFloat&&(t.getExtension("OES_texture_half_float_linear"),this.extRenderToTextureHalfFloat=t.getExtension("EXT_color_buffer_half_float")),this.extTimerQuery=t.getExtension("EXT_disjoint_timer_query"),this.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE)}setDefault(){this.unbindVAO(),this.clearColor.setDefault(),this.clearDepth.setDefault(),this.clearStencil.setDefault(),this.colorMask.setDefault(),this.depthMask.setDefault(),this.stencilMask.setDefault(),this.stencilFunc.setDefault(),this.stencilOp.setDefault(),this.stencilTest.setDefault(),this.depthRange.setDefault(),this.depthTest.setDefault(),this.depthFunc.setDefault(),this.blend.setDefault(),this.blendFunc.setDefault(),this.blendColor.setDefault(),this.blendEquation.setDefault(),this.cullFace.setDefault(),this.cullFaceSide.setDefault(),this.frontFace.setDefault(),this.program.setDefault(),this.activeTexture.setDefault(),this.bindFramebuffer.setDefault(),this.pixelStoreUnpack.setDefault(),this.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.pixelStoreUnpackFlipY.setDefault()}setDirty(){this.clearColor.dirty=!0,this.clearDepth.dirty=!0,this.clearStencil.dirty=!0,this.colorMask.dirty=!0,this.depthMask.dirty=!0,this.stencilMask.dirty=!0,this.stencilFunc.dirty=!0,this.stencilOp.dirty=!0,this.stencilTest.dirty=!0,this.depthRange.dirty=!0,this.depthTest.dirty=!0,this.depthFunc.dirty=!0,this.blend.dirty=!0,this.blendFunc.dirty=!0,this.blendColor.dirty=!0,this.blendEquation.dirty=!0,this.cullFace.dirty=!0,this.cullFaceSide.dirty=!0,this.frontFace.dirty=!0,this.program.dirty=!0,this.activeTexture.dirty=!0,this.viewport.dirty=!0,this.bindFramebuffer.dirty=!0,this.bindRenderbuffer.dirty=!0,this.bindTexture.dirty=!0,this.bindVertexBuffer.dirty=!0,this.bindElementBuffer.dirty=!0,this.extVertexArrayObject&&(this.bindVertexArrayOES.dirty=!0),this.pixelStoreUnpack.dirty=!0,this.pixelStoreUnpackPremultiplyAlpha.dirty=!0,this.pixelStoreUnpackFlipY.dirty=!0}createIndexBuffer(t,e){return new Re(this,t,e)}createVertexBuffer(t,e,i){return new Oe(this,t,e,i)}createRenderbuffer(t,e,i){const r=this.gl,n=r.createRenderbuffer()
return this.bindRenderbuffer.set(n),r.renderbufferStorage(r.RENDERBUFFER,t,e,i),this.bindRenderbuffer.set(null),n}createFramebuffer(t,e,i){return new vi(this,t,e,i)}clear(t){let{color:e,depth:i}=t
const r=this.gl
let n=0
e&&(n|=r.COLOR_BUFFER_BIT,this.clearColor.set(e),this.colorMask.set([!0,!0,!0,!0])),void 0!==i&&(n|=r.DEPTH_BUFFER_BIT,this.depthRange.set([0,1]),this.clearDepth.set(i),this.depthMask.set(!0)),r.clear(n)}setCullFace(t){!1===t.enable?this.cullFace.set(!1):(this.cullFace.set(!0),this.cullFaceSide.set(t.mode),this.frontFace.set(t.frontFace))}setDepthMode(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1)}setStencilMode(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1)}setColorMode(t){n(t.blendFunction,bi.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(t.blendFunction),this.blendColor.set(t.blendColor)),this.colorMask.set(t.mask)}unbindVAO(){this.extVertexArrayObject&&this.bindVertexArrayOES.set(null)}}class Si{constructor(t,e,i){this.func=t,this.mask=e,this.range=i}}Si.ReadOnly=!1,Si.ReadWrite=!0,Si.disabled=new Si(519,Si.ReadOnly,[0,1])
const Ti=7680
class Ii{constructor(t,e,i,r,n,s){this.test=t,this.ref=e,this.mask=i,this.fail=r,this.depthFail=n,this.pass=s}}Ii.disabled=new Ii({func:519,mask:0},0,0,Ti,Ti,Ti)
class Ei{constructor(t,e,i){this.enable=t,this.mode=e,this.frontFace=i}}let Ai
function zi(e,i,r,n,s,o,a){const l=e.context,c=l.gl,h=e.useProgram("collisionBox"),u=[]
let p=0,d=0
for(let v=0;v<n.length;v++){const m=n[v],f=i.getTile(m),g=f.getBucket(r)
if(!g)continue
let _=m.posMatrix
0===s[0]&&0===s[1]||(_=e.translatePosMatrix(m.posMatrix,f,s,o))
const y=a?g.textCollisionBox:g.iconCollisionBox,x=g.collisionCircleArray
if(x.length>0){const i=t.create(),r=_
t.mul(i,g.placementInvProjMatrix,e.transform.glCoordMatrix),t.mul(i,i,g.placementViewportMatrix),u.push({circleArray:x,circleOffset:d,transform:r,invTransform:i}),p+=x.length/4,d=p}y&&h.draw(l,c.LINES,Si.disabled,Ii.disabled,e.colorModeForRenderPass(),Ei.disabled,_e(_,e.transform,f),r.id,y.layoutVertexBuffer,y.indexBuffer,y.segments,null,e.transform.zoom,null,null,y.collisionVertexBuffer)}if(!a||!u.length)return
const m=e.useProgram("collisionCircle"),f=new t.CollisionCircleLayoutArray
f.resize(4*p),f._trim()
let g=0
for(const t of u)for(let e=0;e<t.circleArray.length/4;e++){const i=4*e,r=t.circleArray[i+0],n=t.circleArray[i+1],s=t.circleArray[i+2],o=t.circleArray[i+3]
f.emplace(g++,r,n,s,o,0),f.emplace(g++,r,n,s,o,1),f.emplace(g++,r,n,s,o,2),f.emplace(g++,r,n,s,o,3)}(!Ai||Ai.length<2*p)&&(Ai=function(e){const i=2*e,r=new t.QuadTriangleArray
r.resize(i),r._trim()
for(let t=0;t<i;t++){const e=6*t
r.uint16[e+0]=4*t+0,r.uint16[e+1]=4*t+1,r.uint16[e+2]=4*t+2,r.uint16[e+3]=4*t+2,r.uint16[e+4]=4*t+3,r.uint16[e+5]=4*t+0}return r}(p))
const _=l.createIndexBuffer(Ai,!0),y=l.createVertexBuffer(f,t.collisionCircleLayout.members,!0)
for(const v of u){const i={u_matrix:v.transform,u_inv_matrix:v.invTransform,u_camera_to_center_distance:(x=e.transform).cameraToCenterDistance,u_viewport_size:[x.width,x.height]}
m.draw(l,c.TRIANGLES,Si.disabled,Ii.disabled,e.colorModeForRenderPass(),Ei.disabled,i,r.id,y,_,t.SegmentVector.simpleSegment(0,2*v.circleOffset,v.circleArray.length,v.circleArray.length/2),null,e.transform.zoom,null,null,null)}var x
y.destroy(),_.destroy()}Ei.disabled=new Ei(!1,1029,2305),Ei.backCCW=new Ei(!0,1029,2305)
const Ci=t.identity(new Float32Array(16))
function Pi(e,i,r,n,s,o){const{horizontalAlign:a,verticalAlign:l}=t.getAnchorAlignment(e),c=-(a-.5)*i,h=-(l-.5)*r,u=t.evaluateVariableOffset(e,n)
return new t.pointGeometry((c/s+u[0])*o,(h/s+u[1])*o)}function ki(e,i,r,n,s,o,a,l,c,h){const u=e.text.placedSymbolArray,p=e.text.dynamicLayoutVertexArray,d=e.icon.dynamicLayoutVertexArray,m={}
p.clear()
for(let f=0;f<u.length;f++){const d=u.get(f),g=e.allowVerticalPlacement&&!d.placedOrientation,_=d.hidden||!d.crossTileID||g?null:n[d.crossTileID]
if(_){const n=new t.pointGeometry(d.anchorX,d.anchorY),u=ut(n,r?a:o),f=pt(s.cameraToCenterDistance,u.signedDistanceFromCamera)
let g=t.evaluateSizeForFeature(e.textSizeData,c,d)*f/t.ONE_EM
r&&(g*=e.tilePixelRatio/l)
const{width:y,height:x,anchor:v,textOffset:b,textBoxScale:w}=_,S=Pi(v,y,x,b,w,g),T=r?ut(n.add(S),o).point:u.point.add(i?S.rotate(-s.angle):S),I=e.allowVerticalPlacement&&d.placedOrientation===t.WritingMode.vertical?Math.PI/2:0
for(let e=0;e<d.numGlyphs;e++)t.addDynamicAttributes(p,T,I)
h&&d.associatedIconIndex>=0&&(m[d.associatedIconIndex]={shiftedAnchor:T,angle:I})}else bt(d.numGlyphs,p)}if(h){d.clear()
const i=e.icon.placedSymbolArray
for(let e=0;e<i.length;e++){const r=i.get(e)
if(r.hidden)bt(r.numGlyphs,d)
else{const i=m[e]
if(i)for(let e=0;e<r.numGlyphs;e++)t.addDynamicAttributes(d,i.shiftedAnchor,i.angle)
else bt(r.numGlyphs,d)}}e.icon.dynamicLayoutVertexBuffer.updateData(d)}e.text.dynamicLayoutVertexBuffer.updateData(p)}function Mi(t,e,i){return i.iconsInText&&e?"symbolTextAndIcon":t?"symbolSDF":"symbolIcon"}function Di(e,i,r,n,s,o,a,l,c,h,u,p){const d=e.context,m=d.gl,f=e.transform,g="map"===l,_="map"===c,y="viewport"!==l&&"point"!==r.layout.get("symbol-placement"),x=g&&!_&&!y,v=!r.layout.get("symbol-sort-key").isConstant()
let b=!1
const w=e.depthModeForSublayer(0,Si.ReadOnly),S=r.layout.get("text-variable-anchor"),T=[]
for(const I of n){const n=i.getTile(I),l=n.getBucket(r)
if(!l)continue
const c=s?l.text:l.icon
if(!c||!c.segments.get().length)continue
const u=c.programConfigurations.get(r.id),p=s||l.sdfIcons,d=s?l.textSizeData:l.iconSizeData,w=_||0!==f.pitch,E=e.useProgram(Mi(p,s,l),u),A=t.evaluateSizeForZoom(d,f.zoom)
let z,C,P,k,M=[0,0],D=null
if(s){if(C=n.glyphAtlasTexture,P=m.LINEAR,z=n.glyphAtlasTexture.size,l.iconsInText){M=n.imageAtlasTexture.size,D=n.imageAtlasTexture
const t="composite"===d.kind||"camera"===d.kind
k=w||e.options.rotating||e.options.zooming||t?m.LINEAR:m.NEAREST}}else{const t=1!==r.layout.get("icon-size").constantOr(0)||l.iconsNeedLinear
C=n.imageAtlasTexture,P=p||e.options.rotating||e.options.zooming||t||w?m.LINEAR:m.NEAREST,z=n.imageAtlasTexture.size}const L=It(n,1,e.transform.zoom),B=ct(I.posMatrix,_,g,e.transform,L),R=ht(I.posMatrix,_,g,e.transform,L),F=S&&l.hasTextData(),O="none"!==r.layout.get("icon-text-fit")&&F&&l.hasIconData()
if(y){const t="map"===r.layout.get("text-rotation-alignment")
mt(l,I.posMatrix,e,s,B,R,_,h,t)}const U=e.translatePosMatrix(I.posMatrix,n,o,a),V=y||s&&S||O?Ci:B,N=e.translatePosMatrix(R,n,o,a,!0),$=p&&0!==r.paint.get(s?"text-halo-width":"icon-halo-width").constantOr(1)
let q
q=p?l.iconsInText?Me(d.kind,A,x,_,e,U,V,N,z,M):ke(d.kind,A,x,_,e,U,V,N,s,z,!0):Pe(d.kind,A,x,_,e,U,V,N,s,z)
const G={program:E,buffers:c,uniformValues:q,atlasTexture:C,atlasTextureIcon:D,atlasInterpolation:P,atlasInterpolationIcon:k,isSDF:p,hasHalo:$}
if(v&&l.canOverlap){b=!0
const e=c.segments.get()
for(const i of e)T.push({segments:new t.SegmentVector([i]),sortKey:i.sortKey,state:G})}else T.push({segments:c.segments,sortKey:0,state:G})}b&&T.sort(((t,e)=>t.sortKey-e.sortKey))
for(const t of T){const i=t.state
if(d.activeTexture.set(m.TEXTURE0),i.atlasTexture.bind(i.atlasInterpolation,m.CLAMP_TO_EDGE),i.atlasTextureIcon&&(d.activeTexture.set(m.TEXTURE1),i.atlasTextureIcon&&i.atlasTextureIcon.bind(i.atlasInterpolationIcon,m.CLAMP_TO_EDGE)),i.isSDF){const n=i.uniformValues
i.hasHalo&&(n.u_is_halo=1,Li(i.buffers,t.segments,r,e,i.program,w,u,p,n)),n.u_is_halo=0}Li(i.buffers,t.segments,r,e,i.program,w,u,p,i.uniformValues)}}function Li(t,e,i,r,n,s,o,a,l){const c=r.context
n.draw(c,c.gl.TRIANGLES,s,o,a,Ei.disabled,l,i.id,t.layoutVertexBuffer,t.indexBuffer,e,i.paint,r.transform.zoom,t.programConfigurations.get(i.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer)}function Bi(t,e,i,r,n,s,o){const a=t.context.gl,l=i.paint.get("fill-pattern"),c=l&&l.constantOr(1),h=i.getCrossfadeParameters()
let u,p,d,m,f
o?(p=c&&!i.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline",u=a.LINES):(p=c?"fillPattern":"fill",u=a.TRIANGLES)
for(const g of r){const r=e.getTile(g)
if(c&&!r.patternsLoaded())continue
const _=r.getBucket(i)
if(!_)continue
const y=_.programConfigurations.get(i.id),x=t.useProgram(p,y)
c&&(t.context.activeTexture.set(a.TEXTURE0),r.imageAtlasTexture.bind(a.LINEAR,a.CLAMP_TO_EDGE),y.updatePaintBuffers(h))
const v=l.constantOr(null)
if(v&&r.imageAtlas){const t=r.imageAtlas,e=t.patternPositions[v.to.toString()],i=t.patternPositions[v.from.toString()]
e&&i&&y.setConstantPatternPositions(e,i)}const b=t.translatePosMatrix(g.posMatrix,r,i.paint.get("fill-translate"),i.paint.get("fill-translate-anchor"))
if(o){m=_.indexBuffer2,f=_.segments2
const e=[a.drawingBufferWidth,a.drawingBufferHeight]
d="fillOutlinePattern"===p&&c?fe(b,t,h,r,e):me(b,e)}else m=_.indexBuffer,f=_.segments,d=c?de(b,t,h,r):pe(b)
x.draw(t.context,u,n,t.stencilModeForClipping(g),s,Ei.disabled,d,i.id,_.layoutVertexBuffer,m,f,i.paint,t.transform.zoom,y)}}function Ri(t,e,i,r,n,s,o){const a=t.context,l=a.gl,c=i.paint.get("fill-extrusion-pattern"),h=c.constantOr(1),u=i.getCrossfadeParameters(),p=i.paint.get("fill-extrusion-opacity")
for(const d of r){const r=e.getTile(d),m=r.getBucket(i)
if(!m)continue
const f=m.programConfigurations.get(i.id),g=t.useProgram(h?"fillExtrusionPattern":"fillExtrusion",f)
h&&(t.context.activeTexture.set(l.TEXTURE0),r.imageAtlasTexture.bind(l.LINEAR,l.CLAMP_TO_EDGE),f.updatePaintBuffers(u))
const _=c.constantOr(null)
if(_&&r.imageAtlas){const t=r.imageAtlas,e=t.patternPositions[_.to.toString()],i=t.patternPositions[_.from.toString()]
e&&i&&f.setConstantPatternPositions(e,i)}const y=t.translatePosMatrix(d.posMatrix,r,i.paint.get("fill-extrusion-translate"),i.paint.get("fill-extrusion-translate-anchor")),x=i.paint.get("fill-extrusion-vertical-gradient"),v=h?ue(y,t,x,p,d,u,r):he(y,t,x,p)
g.draw(a,a.gl.TRIANGLES,n,s,o,Ei.backCCW,v,i.id,m.layoutVertexBuffer,m.indexBuffer,m.segments,i.paint,t.transform.zoom,f)}}function Fi(t,e,i,r,n,s){const o=t.context,a=o.gl,l=e.fbo
if(!l)return
const c=t.useProgram("hillshade")
o.activeTexture.set(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,l.colorAttachment.get())
const h=((t,e,i)=>{const r=i.paint.get("hillshade-shadow-color"),n=i.paint.get("hillshade-highlight-color"),s=i.paint.get("hillshade-accent-color")
let o=i.paint.get("hillshade-illumination-direction")*(Math.PI/180)
"viewport"===i.paint.get("hillshade-illumination-anchor")&&(o-=t.transform.angle)
const a=!t.options.moving
return{u_matrix:t.transform.calculatePosMatrix(e.tileID.toUnwrapped(),a),u_image:0,u_latrange:be(0,e.tileID),u_light:[i.paint.get("hillshade-exaggeration"),o],u_shadow:r,u_highlight:n,u_accent:s}})(t,e,i)
c.draw(o,a.TRIANGLES,r,n,s,Ei.disabled,h,i.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments)}function Oi(e,i,r,n,s,o){const a=e.context,l=a.gl,c=i.dem
if(c&&c.data){const h=c.dim,u=c.stride,d=c.getPixels()
if(a.activeTexture.set(l.TEXTURE1),a.pixelStoreUnpackPremultiplyAlpha.set(!1),i.demTexture=i.demTexture||e.getTileTexture(u),i.demTexture){const t=i.demTexture
t.update(d,{premultiply:!1}),t.bind(l.NEAREST,l.CLAMP_TO_EDGE)}else i.demTexture=new p(a,d,l.RGBA,{premultiply:!1}),i.demTexture.bind(l.NEAREST,l.CLAMP_TO_EDGE)
a.activeTexture.set(l.TEXTURE0)
let m=i.fbo
if(!m){const t=new p(a,{width:h,height:h,data:null},l.RGBA)
t.bind(l.LINEAR,l.CLAMP_TO_EDGE),m=i.fbo=a.createFramebuffer(h,h,!0),m.colorAttachment.set(t.texture)}a.bindFramebuffer.set(m.framebuffer),a.viewport.set([0,0,h,h]),e.useProgram("hillshadePrepare").draw(a,l.TRIANGLES,n,s,o,Ei.disabled,((e,i)=>{const r=i.stride,n=t.create()
return t.ortho(n,0,t.EXTENT,-t.EXTENT,0,0,1),t.translate(n,n,[0,-t.EXTENT,0]),{u_matrix:n,u_image:1,u_dimension:[r,r],u_zoom:e.overscaledZ,u_unpack:i.getUnpackVector()}})(i.tileID,c),r.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments),i.needsHillshadePrepare=!1}}function Ui(e,i,r,n,s){const o=n.paint.get("raster-fade-duration")
if(o>0){const n=t.exported.now(),a=(n-e.timeAdded)/o,l=i?(n-i.timeAdded)/o:-1,c=r.getSource(),h=s.coveringZoomLevel({tileSize:c.tileSize,roundZoom:c.roundZoom}),u=!i||Math.abs(i.tileID.overscaledZ-h)>Math.abs(e.tileID.overscaledZ-h),p=u&&e.refreshedUponExpiration?1:t.clamp(u?a:1-l,0,1)
return e.refreshedUponExpiration&&a>=1&&(e.refreshedUponExpiration=!1),i?{opacity:1,mix:1-p}:{opacity:p,mix:0}}return{opacity:1,mix:0}}const Vi=new t.Color(1,0,0,1),Ni=new t.Color(0,1,0,1),$i=new t.Color(0,0,1,1),qi=new t.Color(1,0,1,1),Gi=new t.Color(0,1,1,1)
function ji(t,e,i,r){Xi(t,0,e+i/2,t.transform.width,i,r)}function Zi(t,e,i,r){Xi(t,e-i/2,0,i,t.transform.height,r)}function Xi(t,e,i,r,n,s){const o=t.context,a=o.gl
a.enable(a.SCISSOR_TEST),a.scissor(e*t.pixelRatio,i*t.pixelRatio,r*t.pixelRatio,n*t.pixelRatio),o.clear({color:s}),a.disable(a.SCISSOR_TEST)}function Wi(e,i,r){const n=e.context,s=n.gl,o=r.posMatrix,a=e.useProgram("debug"),l=Si.disabled,c=Ii.disabled,h=e.colorModeForRenderPass(),u="$debug"
n.activeTexture.set(s.TEXTURE0),e.emptyTexture.bind(s.LINEAR,s.CLAMP_TO_EDGE),a.draw(n,s.LINE_STRIP,l,c,h,Ei.disabled,ye(o,t.Color.red),u,e.debugBuffer,e.tileBorderIndexBuffer,e.debugSegments)
const p=i.getTileByID(r.key).latestRawTileData,d=Math.floor((p&&p.byteLength||0)/1024),m=i.getTile(r).tileSize,f=512/Math.min(m,512)*(r.overscaledZ/e.transform.zoom)*.5
let g=r.canonical.toString()
r.overscaledZ!==r.canonical.z&&(g+=` => ${r.overscaledZ}`),function(t,e){t.initDebugOverlayCanvas()
const i=t.debugOverlayCanvas,r=t.context.gl,n=t.debugOverlayCanvas.getContext("2d")
n.clearRect(0,0,i.width,i.height),n.shadowColor="white",n.shadowBlur=2,n.lineWidth=1.5,n.strokeStyle="white",n.textBaseline="top",n.font="bold 36px Open Sans, sans-serif",n.fillText(e,5,5),n.strokeText(e,5,5),t.debugOverlayTexture.update(i),t.debugOverlayTexture.bind(r.LINEAR,r.CLAMP_TO_EDGE)}(e,`${g} ${d}kb`),a.draw(n,s.TRIANGLES,l,c,bi.alphaBlended,Ei.disabled,ye(o,t.Color.transparent,f),u,e.debugBuffer,e.quadTriangleIndexBuffer,e.debugSegments)}const Hi={symbol:function(e,i,r,n,s){if("translucent"!==e.renderPass)return
const o=Ii.disabled,a=e.colorModeForRenderPass()
r.layout.get("text-variable-anchor")&&function(e,i,r,n,s,o,a){const l=i.transform,c="map"===s,h="map"===o
for(const u of e){const e=n.getTile(u),s=e.getBucket(r)
if(!s||!s.text||!s.text.segments.get().length)continue
const o=t.evaluateSizeForZoom(s.textSizeData,l.zoom),p=It(e,1,i.transform.zoom),d=ct(u.posMatrix,h,c,i.transform,p),m="none"!==r.layout.get("icon-text-fit")&&s.hasIconData()
if(o){const t=Math.pow(2,l.zoom-e.tileID.overscaledZ)
ki(s,c,h,a,l,d,u.posMatrix,t,o,m)}}}(n,e,r,i,r.layout.get("text-rotation-alignment"),r.layout.get("text-pitch-alignment"),s),0!==r.paint.get("icon-opacity").constantOr(1)&&Di(e,i,r,n,!1,r.paint.get("icon-translate"),r.paint.get("icon-translate-anchor"),r.layout.get("icon-rotation-alignment"),r.layout.get("icon-pitch-alignment"),r.layout.get("icon-keep-upright"),o,a),0!==r.paint.get("text-opacity").constantOr(1)&&Di(e,i,r,n,!0,r.paint.get("text-translate"),r.paint.get("text-translate-anchor"),r.layout.get("text-rotation-alignment"),r.layout.get("text-pitch-alignment"),r.layout.get("text-keep-upright"),o,a),i.map.showCollisionBoxes&&(zi(e,i,r,n,r.paint.get("text-translate"),r.paint.get("text-translate-anchor"),!0),zi(e,i,r,n,r.paint.get("icon-translate"),r.paint.get("icon-translate-anchor"),!1))},circle:function(e,i,r,n){if("translucent"!==e.renderPass)return
const s=r.paint.get("circle-opacity"),o=r.paint.get("circle-stroke-width"),a=r.paint.get("circle-stroke-opacity"),l=!r.layout.get("circle-sort-key").isConstant()
if(0===s.constantOr(1)&&(0===o.constantOr(1)||0===a.constantOr(1)))return
const c=e.context,h=c.gl,u=e.depthModeForSublayer(0,Si.ReadOnly),p=Ii.disabled,d=e.colorModeForRenderPass(),m=[]
for(let f=0;f<n.length;f++){const s=n[f],o=i.getTile(s),a=o.getBucket(r)
if(!a)continue
const c=a.programConfigurations.get(r.id),h={programConfiguration:c,program:e.useProgram("circle",c),layoutVertexBuffer:a.layoutVertexBuffer,indexBuffer:a.indexBuffer,uniformValues:ge(e,s,o,r)}
if(l){const e=a.segments.get()
for(const i of e)m.push({segments:new t.SegmentVector([i]),sortKey:i.sortKey,state:h})}else m.push({segments:a.segments,sortKey:0,state:h})}l&&m.sort(((t,e)=>t.sortKey-e.sortKey))
for(const t of m){const{programConfiguration:i,program:n,layoutVertexBuffer:s,indexBuffer:o,uniformValues:a}=t.state
n.draw(c,h.TRIANGLES,u,p,d,Ei.disabled,a,r.id,s,o,t.segments,r.paint,e.transform.zoom,i)}},heatmap:function(e,i,r,n){if(0!==r.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){const s=e.context,o=s.gl,a=Ii.disabled,l=new bi([o.ONE,o.ONE],t.Color.transparent,[!0,!0,!0,!0])
!function(t,e,i){const r=t.gl
t.activeTexture.set(r.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4])
let n=i.heatmapFbo
if(n)r.bindTexture(r.TEXTURE_2D,n.colorAttachment.get()),t.bindFramebuffer.set(n.framebuffer)
else{const s=r.createTexture()
r.bindTexture(r.TEXTURE_2D,s),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),n=i.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4,!1),function(t,e,i,r){const n=t.gl
n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e.width/4,e.height/4,0,n.RGBA,t.extRenderToTextureHalfFloat?t.extTextureHalfFloat.HALF_FLOAT_OES:n.UNSIGNED_BYTE,null),r.colorAttachment.set(i)}(t,e,s,n)}}(s,e,r),s.clear({color:t.Color.transparent})
for(let t=0;t<n.length;t++){const c=n[t]
if(i.hasRenderableParent(c))continue
const h=i.getTile(c),u=h.getBucket(r)
if(!u)continue
const p=u.programConfigurations.get(r.id),d=e.useProgram("heatmap",p),{zoom:m}=e.transform
d.draw(s,o.TRIANGLES,Si.disabled,a,l,Ei.disabled,ve(c.posMatrix,h,m,r.paint.get("heatmap-intensity")),r.id,u.layoutVertexBuffer,u.indexBuffer,u.segments,r.paint,e.transform.zoom,p)}s.viewport.set([0,0,e.width,e.height])}else"translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,i){const r=e.context,n=r.gl,s=i.heatmapFbo
if(!s)return
r.activeTexture.set(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.colorAttachment.get()),r.activeTexture.set(n.TEXTURE1)
let o=i.colorRampTexture
o||(o=i.colorRampTexture=new p(r,i.colorRamp,n.RGBA)),o.bind(n.LINEAR,n.CLAMP_TO_EDGE),e.useProgram("heatmapTexture").draw(r,n.TRIANGLES,Si.disabled,Ii.disabled,e.colorModeForRenderPass(),Ei.disabled,((e,i,r,n)=>{const s=t.create()
t.ortho(s,0,e.width,e.height,0,0,1)
const o=e.context.gl
return{u_matrix:s,u_world:[o.drawingBufferWidth,o.drawingBufferHeight],u_image:0,u_color_ramp:1,u_opacity:i.paint.get("heatmap-opacity")}})(e,i),i.id,e.viewportBuffer,e.quadTriangleIndexBuffer,e.viewportSegments,i.paint,e.transform.zoom)}(e,r))},line:function(e,i,r,n){if("translucent"!==e.renderPass)return
const s=r.paint.get("line-opacity"),o=r.paint.get("line-width")
if(0===s.constantOr(1)||0===o.constantOr(1))return
const a=e.depthModeForSublayer(0,Si.ReadOnly),l=e.colorModeForRenderPass(),c=r.paint.get("line-dasharray"),h=r.paint.get("line-pattern"),u=h.constantOr(1),d=r.paint.get("line-gradient"),m=r.getCrossfadeParameters(),f=u?"linePattern":c?"lineSDF":d?"lineGradient":"line",g=e.context,_=g.gl
let y=!0
for(const x of n){const n=i.getTile(x)
if(u&&!n.patternsLoaded())continue
const s=n.getBucket(r)
if(!s)continue
const o=s.programConfigurations.get(r.id),v=e.context.program.get(),b=e.useProgram(f,o),w=y||b.program!==v,S=h.constantOr(null)
if(S&&n.imageAtlas){const t=n.imageAtlas,e=t.patternPositions[S.to.toString()],i=t.patternPositions[S.from.toString()]
e&&i&&o.setConstantPatternPositions(e,i)}const T=u?Te(e,n,r,m):c?Ie(e,n,r,c,m):d?Se(e,n,r,s.lineClipsArray.length):we(e,n,r)
if(u)g.activeTexture.set(_.TEXTURE0),n.imageAtlasTexture.bind(_.LINEAR,_.CLAMP_TO_EDGE),o.updatePaintBuffers(m)
else if(c&&(w||e.lineAtlas.dirty))g.activeTexture.set(_.TEXTURE0),e.lineAtlas.bind(g)
else if(d){const n=s.gradients[r.id]
let o=n.texture
if(r.gradientVersion!==n.version){let a=256
if(r.stepInterpolant){const r=i.getSource().maxzoom,n=x.canonical.z===r?Math.ceil(1<<e.transform.maxZoom-x.canonical.z):1
a=t.clamp(t.nextPowerOfTwo(s.maxLineLength/t.EXTENT*1024*n),256,g.maxTextureSize)}n.gradient=t.renderColorRamp({expression:r.gradientExpression(),evaluationKey:"lineProgress",resolution:a,image:n.gradient||void 0,clips:s.lineClipsArray}),n.texture?n.texture.update(n.gradient):n.texture=new p(g,n.gradient,_.RGBA),n.version=r.gradientVersion,o=n.texture}g.activeTexture.set(_.TEXTURE0),o.bind(r.stepInterpolant?_.NEAREST:_.LINEAR,_.CLAMP_TO_EDGE)}b.draw(g,_.TRIANGLES,a,e.stencilModeForClipping(x),l,Ei.disabled,T,r.id,s.layoutVertexBuffer,s.indexBuffer,s.segments,r.paint,e.transform.zoom,o,s.layoutVertexBuffer2),y=!1}},fill:function(e,i,r,n){const s=r.paint.get("fill-color"),o=r.paint.get("fill-opacity")
if(0===o.constantOr(1))return
const a=e.colorModeForRenderPass(),l=r.paint.get("fill-pattern"),c=e.opaquePassEnabledForLayer()&&!l.constantOr(1)&&1===s.constantOr(t.Color.transparent).a&&1===o.constantOr(0)?"opaque":"translucent"
if(e.renderPass===c){const t=e.depthModeForSublayer(1,"opaque"===e.renderPass?Si.ReadWrite:Si.ReadOnly)
Bi(e,i,r,n,t,a,!1)}if("translucent"===e.renderPass&&r.paint.get("fill-antialias")){const t=e.depthModeForSublayer(r.getPaintProperty("fill-outline-color")?2:0,Si.ReadOnly)
Bi(e,i,r,n,t,a,!0)}},"fill-extrusion":function(t,e,i,r){const n=i.paint.get("fill-extrusion-opacity")
if(0!==n&&"translucent"===t.renderPass){const s=new Si(t.context.gl.LEQUAL,Si.ReadWrite,t.depthRangeFor3D)
if(1!==n||i.paint.get("fill-extrusion-pattern").constantOr(1))Ri(t,e,i,r,s,Ii.disabled,bi.disabled),Ri(t,e,i,r,s,t.stencilModeFor3D(),t.colorModeForRenderPass())
else{const n=t.colorModeForRenderPass()
Ri(t,e,i,r,s,Ii.disabled,n)}}},hillshade:function(t,e,i,r){if("offscreen"!==t.renderPass&&"translucent"!==t.renderPass)return
const n=t.context,s=t.depthModeForSublayer(0,Si.ReadOnly),o=t.colorModeForRenderPass(),[a,l]="translucent"===t.renderPass?t.stencilConfigForOverlap(r):[{},r]
for(const c of l){const r=e.getTile(c)
r.needsHillshadePrepare&&"offscreen"===t.renderPass?Oi(t,r,i,s,Ii.disabled,o):"translucent"===t.renderPass&&Fi(t,r,i,s,a[c.overscaledZ],o)}n.viewport.set([0,0,t.width,t.height])},raster:function(t,e,i,r){if("translucent"!==t.renderPass)return
if(0===i.paint.get("raster-opacity"))return
if(!r.length)return
const n=t.context,s=n.gl,o=e.getSource(),a=t.useProgram("raster"),l=t.colorModeForRenderPass(),[c,h]=o instanceof M?[{},r]:t.stencilConfigForOverlap(r),u=h[h.length-1].overscaledZ,p=!t.options.moving
for(const d of h){const r=t.depthModeForSublayer(d.overscaledZ-u,1===i.paint.get("raster-opacity")?Si.ReadWrite:Si.ReadOnly,s.LESS),h=e.getTile(d),m=t.transform.calculatePosMatrix(d.toUnwrapped(),p)
h.registerFadeDuration(i.paint.get("raster-fade-duration"))
const f=e.findLoadedParent(d,0),g=Ui(h,f,e,i,t.transform)
let _,y
const x="nearest"===i.paint.get("raster-resampling")?s.NEAREST:s.LINEAR
n.activeTexture.set(s.TEXTURE0),h.texture.bind(x,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),n.activeTexture.set(s.TEXTURE1),f?(f.texture.bind(x,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),_=Math.pow(2,f.tileID.overscaledZ-h.tileID.overscaledZ),y=[h.tileID.canonical.x*_%1,h.tileID.canonical.y*_%1]):h.texture.bind(x,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST)
const v=ze(m,y||[0,0],_||1,g,i)
o instanceof M?a.draw(n,s.TRIANGLES,r,Ii.disabled,l,Ei.disabled,v,i.id,o.boundsBuffer,t.quadTriangleIndexBuffer,o.boundsSegments):a.draw(n,s.TRIANGLES,r,c[d.overscaledZ],l,Ei.disabled,v,i.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments)}},background:function(t,e,i){const r=i.paint.get("background-color"),n=i.paint.get("background-opacity")
if(0===n)return
const s=t.context,o=s.gl,a=t.transform,l=a.tileSize,c=i.paint.get("background-pattern")
if(t.isPatternMissing(c))return
const h=!c&&1===r.a&&1===n&&t.opaquePassEnabledForLayer()?"opaque":"translucent"
if(t.renderPass!==h)return
const u=Ii.disabled,p=t.depthModeForSublayer(0,"opaque"===h?Si.ReadWrite:Si.ReadOnly),d=t.colorModeForRenderPass(),m=t.useProgram(c?"backgroundPattern":"background"),f=a.coveringTiles({tileSize:l})
c&&(s.activeTexture.set(o.TEXTURE0),t.imageManager.bind(t.context))
const g=i.getCrossfadeParameters()
for(const _ of f){const e=t.transform.calculatePosMatrix(_.toUnwrapped()),a=c?Le(e,n,t,c,{tileID:_,tileSize:l},g):De(e,n,r)
m.draw(s,o.TRIANGLES,p,u,d,Ei.disabled,a,i.id,t.tileExtentBuffer,t.quadTriangleIndexBuffer,t.tileExtentSegments)}},debug:function(t,e,i){for(let r=0;r<i.length;r++)Wi(t,e,i[r])},custom:function(t,e,i){const r=t.context,n=i.implementation
if("offscreen"===t.renderPass){const e=n.prerender
e&&(t.setCustomLayerDefaults(),r.setColorMode(t.colorModeForRenderPass()),e.call(n,r.gl,t.transform.customLayerMatrix()),r.setDirty(),t.setBaseState())}else if("translucent"===t.renderPass){t.setCustomLayerDefaults(),r.setColorMode(t.colorModeForRenderPass()),r.setStencilMode(Ii.disabled)
const e="3d"===n.renderingMode?new Si(t.context.gl.LEQUAL,Si.ReadWrite,t.depthRangeFor3D):t.depthModeForSublayer(0,Si.ReadOnly)
r.setDepthMode(e),n.render(r.gl,t.transform.customLayerMatrix()),r.setDirty(),t.setBaseState(),r.bindFramebuffer.set(null)}}}
class Ki{constructor(t,e){this.context=new wi(t),this.transform=e,this._tileTextures={},this.setup(),this.numSublayers=$.maxUnderzooming+$.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.crossTileSymbolIndex=new Yt,this.gpuTimers={}}resize(t,e,i){if(this.width=t*i,this.height=e*i,this.pixelRatio=i,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(const r of this.style._order)this.style._layers[r].resize()}setup(){const e=this.context,i=new t.PosArray
i.emplaceBack(0,0),i.emplaceBack(t.EXTENT,0),i.emplaceBack(0,t.EXTENT),i.emplaceBack(t.EXTENT,t.EXTENT),this.tileExtentBuffer=e.createVertexBuffer(i,re.members),this.tileExtentSegments=t.SegmentVector.simpleSegment(0,0,4,2)
const r=new t.PosArray
r.emplaceBack(0,0),r.emplaceBack(t.EXTENT,0),r.emplaceBack(0,t.EXTENT),r.emplaceBack(t.EXTENT,t.EXTENT),this.debugBuffer=e.createVertexBuffer(r,re.members),this.debugSegments=t.SegmentVector.simpleSegment(0,0,4,5)
const n=new t.RasterBoundsArray
n.emplaceBack(0,0,0,0),n.emplaceBack(t.EXTENT,0,t.EXTENT,0),n.emplaceBack(0,t.EXTENT,0,t.EXTENT),n.emplaceBack(t.EXTENT,t.EXTENT,t.EXTENT,t.EXTENT),this.rasterBoundsBuffer=e.createVertexBuffer(n,k.members),this.rasterBoundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)
const s=new t.PosArray
s.emplaceBack(0,0),s.emplaceBack(1,0),s.emplaceBack(0,1),s.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(s,re.members),this.viewportSegments=t.SegmentVector.simpleSegment(0,0,4,2)
const o=new t.LineStripIndexArray
o.emplaceBack(0),o.emplaceBack(1),o.emplaceBack(3),o.emplaceBack(2),o.emplaceBack(0),this.tileBorderIndexBuffer=e.createIndexBuffer(o)
const a=new t.TriangleIndexArray
a.emplaceBack(0,1,2),a.emplaceBack(2,1,3),this.quadTriangleIndexBuffer=e.createIndexBuffer(a),this.emptyTexture=new p(e,{width:1,height:1,data:new Uint8Array([0,0,0,0])},e.gl.RGBA)
const l=this.context.gl
this.stencilClearMode=new Ii({func:l.ALWAYS,mask:0},0,255,l.ZERO,l.ZERO,l.ZERO)}clearStencil(){const e=this.context,i=e.gl
this.nextStencilID=1,this.currentStencilSource=void 0
const r=t.create()
t.ortho(r,0,this.width,this.height,0,0,1),t.scale(r,r,[i.drawingBufferWidth,i.drawingBufferHeight,0]),this.useProgram("clippingMask").draw(e,i.TRIANGLES,Si.disabled,this.stencilClearMode,bi.disabled,Ei.disabled,xe(r),"$clipping",this.viewportBuffer,this.quadTriangleIndexBuffer,this.viewportSegments)}_renderTileClippingMasks(t,e){if(this.currentStencilSource===t.source||!t.isTileClipped()||!e||!e.length)return
this.currentStencilSource=t.source
const i=this.context,r=i.gl
this.nextStencilID+e.length>256&&this.clearStencil(),i.setColorMode(bi.disabled),i.setDepthMode(Si.disabled)
const n=this.useProgram("clippingMask")
this._tileClippingMaskIDs={}
for(const s of e){const t=this._tileClippingMaskIDs[s.key]=this.nextStencilID++
n.draw(i,r.TRIANGLES,Si.disabled,new Ii({func:r.ALWAYS,mask:0},t,255,r.KEEP,r.KEEP,r.REPLACE),bi.disabled,Ei.disabled,xe(s.posMatrix),"$clipping",this.tileExtentBuffer,this.quadTriangleIndexBuffer,this.tileExtentSegments)}}stencilModeFor3D(){this.currentStencilSource=void 0,this.nextStencilID+1>256&&this.clearStencil()
const t=this.nextStencilID++,e=this.context.gl
return new Ii({func:e.NOTEQUAL,mask:255},t,255,e.KEEP,e.KEEP,e.REPLACE)}stencilModeForClipping(t){const e=this.context.gl
return new Ii({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)}stencilConfigForOverlap(t){const e=this.context.gl,i=t.sort(((t,e)=>e.overscaledZ-t.overscaledZ)),r=i[i.length-1].overscaledZ,n=i[0].overscaledZ-r+1
if(n>1){this.currentStencilSource=void 0,this.nextStencilID+n>256&&this.clearStencil()
const t={}
for(let i=0;i<n;i++)t[i+r]=new Ii({func:e.GEQUAL,mask:255},i+this.nextStencilID,255,e.KEEP,e.KEEP,e.REPLACE)
return this.nextStencilID+=n,[t,i]}return[{[r]:Ii.disabled},i]}colorModeForRenderPass(){const e=this.context.gl
if(this._showOverdrawInspector){const i=1/8
return new bi([e.CONSTANT_COLOR,e.ONE],new t.Color(i,i,i,0),[!0,!0,!0,!0])}return"opaque"===this.renderPass?bi.unblended:bi.alphaBlended}depthModeForSublayer(t,e,i){if(!this.opaquePassEnabledForLayer())return Si.disabled
const r=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon
return new Si(i||this.context.gl.LEQUAL,e,[r,r])}opaquePassEnabledForLayer(){return this.currentLayer<this.opaquePassCutoff}render(e,i){this.style=e,this.options=i,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(t.exported.now()),this.imageManager.beginFrame()
const r=this.style._order,n=this.style.sourceCaches
for(const t in n){const e=n[t]
e.used&&e.prepare(this.context)}const s={},o={},a={}
for(const t in n){const e=n[t]
s[t]=e.getVisibleCoordinates(),o[t]=s[t].slice().reverse(),a[t]=e.getVisibleCoordinates(!0).reverse()}this.opaquePassCutoff=1/0
for(let t=0;t<r.length;t++)if(this.style._layers[r[t]].is3D()){this.opaquePassCutoff=t
break}this.renderPass="offscreen"
for(const t of r){const e=this.style._layers[t]
if(!e.hasOffscreenPass()||e.isHidden(this.transform.zoom))continue
const i=o[e.source];("custom"===e.type||i.length)&&this.renderLayer(this,n[e.source],e,i)}for(this.context.bindFramebuffer.set(null),this.context.clear({color:i.showOverdrawInspector?t.Color.black:t.Color.transparent,depth:1}),this.clearStencil(),this._showOverdrawInspector=i.showOverdrawInspector,this.depthRangeFor3D=[0,1-(e._order.length+2)*this.numSublayers*this.depthEpsilon],this.renderPass="opaque",this.currentLayer=r.length-1;this.currentLayer>=0;this.currentLayer--){const t=this.style._layers[r[this.currentLayer]],e=n[t.source],i=s[t.source]
this._renderTileClippingMasks(t,i),this.renderLayer(this,e,t,i)}for(this.renderPass="translucent",this.currentLayer=0;this.currentLayer<r.length;this.currentLayer++){const t=this.style._layers[r[this.currentLayer]],e=n[t.source],i=("symbol"===t.type?a:o)[t.source]
this._renderTileClippingMasks(t,s[t.source]),this.renderLayer(this,e,t,i)}if(this.options.showTileBoundaries){let t,e
Object.values(this.style._layers).forEach((i=>{i.source&&!i.isHidden(this.transform.zoom)&&(i.source!==(e&&e.id)&&(e=this.style.sourceCaches[i.source]),(!t||t.getSource().maxzoom<e.getSource().maxzoom)&&(t=e))})),t&&Hi.debug(this,t,t.getVisibleCoordinates())}this.options.showPadding&&function(t){const e=t.transform.padding
ji(t,t.transform.height-(e.top||0),3,Vi),ji(t,e.bottom||0,3,Ni),Zi(t,e.left||0,3,$i),Zi(t,t.transform.width-(e.right||0),3,qi)
const i=t.transform.centerPoint
!function(t,e,i,r){Xi(t,e-1,i-10,2,20,r),Xi(t,e-10,i-1,20,2,r)}(t,i.x,t.transform.height-i.y,Gi)}(this),this.context.setDefault()}renderLayer(t,e,i,r){i.isHidden(this.transform.zoom)||("background"===i.type||"custom"===i.type||r.length)&&(this.id=i.id,this.gpuTimingStart(i),Hi[i.type](t,e,i,r,this.style.placement.variableOffsets),this.gpuTimingEnd())}gpuTimingStart(t){if(!this.options.gpuTiming)return
const e=this.context.extTimerQuery
let i=this.gpuTimers[t.id]
i||(i=this.gpuTimers[t.id]={calls:0,cpuTime:0,query:e.createQueryEXT()}),i.calls++,e.beginQueryEXT(e.TIME_ELAPSED_EXT,i.query)}gpuTimingEnd(){if(!this.options.gpuTiming)return
const t=this.context.extTimerQuery
t.endQueryEXT(t.TIME_ELAPSED_EXT)}collectGpuTimers(){const t=this.gpuTimers
return this.gpuTimers={},t}queryGpuTimers(t){const e={}
for(const i in t){const r=t[i],n=this.context.extTimerQuery,s=n.getQueryObjectEXT(r.query,n.QUERY_RESULT_EXT)/1e6
n.deleteQueryEXT(r.query),e[i]=s}return e}translatePosMatrix(e,i,r,n,s){if(!r[0]&&!r[1])return e
const o=s?"map"===n?this.transform.angle:0:"viewport"===n?-this.transform.angle:0
if(o){const t=Math.sin(o),e=Math.cos(o)
r=[r[0]*e-r[1]*t,r[0]*t+r[1]*e]}const a=[s?r[0]:It(i,r[0],this.transform.zoom),s?r[1]:It(i,r[1],this.transform.zoom),0],l=new Float32Array(16)
return t.translate(l,e,a),l}saveTileTexture(t){const e=this._tileTextures[t.size[0]]
e?e.push(t):this._tileTextures[t.size[0]]=[t]}getTileTexture(t){const e=this._tileTextures[t]
return e&&e.length>0?e.pop():null}isPatternMissing(t){if(!t)return!1
if(!t.from||!t.to)return!0
const e=this.imageManager.getPattern(t.from.toString()),i=this.imageManager.getPattern(t.to.toString())
return!e||!i}useProgram(t,e){this.cache=this.cache||{}
const i=`${t}${e?e.cacheKey:""}${this._showOverdrawInspector?"/overdraw":""}`
return this.cache[i]||(this.cache[i]=new le(this.context,t,ne[t],e,Be[t],this._showOverdrawInspector)),this.cache[i]}setCustomLayerDefaults(){this.context.unbindVAO(),this.context.cullFace.setDefault(),this.context.activeTexture.setDefault(),this.context.pixelStoreUnpack.setDefault(),this.context.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.context.pixelStoreUnpackFlipY.setDefault()}setBaseState(){const t=this.context.gl
this.context.cullFace.set(!1),this.context.viewport.set([0,0,this.width,this.height]),this.context.blendEquation.set(t.FUNC_ADD)}initDebugOverlayCanvas(){null==this.debugOverlayCanvas&&(this.debugOverlayCanvas=document.createElement("canvas"),this.debugOverlayCanvas.width=512,this.debugOverlayCanvas.height=512,this.debugOverlayTexture=new p(this.context,this.debugOverlayCanvas,this.context.gl.RGBA))}destroy(){this.emptyTexture.destroy(),this.debugOverlayTexture&&this.debugOverlayTexture.destroy()}}class Yi{constructor(t,e){this.points=t,this.planes=e}static fromInvProjectionMatrix(e,i,r){const n=Math.pow(2,r),s=[[-1,1,-1,1],[1,1,-1,1],[1,-1,-1,1],[-1,-1,-1,1],[-1,1,1,1],[1,1,1,1],[1,-1,1,1],[-1,-1,1,1]].map((i=>t.transformMat4([],i,e))).map((e=>t.scale$1([],e,1/e[3]/i*n))),o=[[0,1,2],[6,5,4],[0,3,7],[2,1,5],[3,2,6],[0,4,5]].map((t=>{const e=function(t,e){var i=e[0],r=e[1],n=e[2],s=i*i+r*r+n*n
return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}([],function(t,e,i){var r=e[0],n=e[1],s=e[2],o=i[0],a=i[1],l=i[2]
return t[0]=n*l-s*a,t[1]=s*o-r*l,t[2]=r*a-n*o,t}([],h([],s[t[0]],s[t[1]]),h([],s[t[2]],s[t[1]]))),i=-((r=e)[0]*(n=s[t[1]])[0]+r[1]*n[1]+r[2]*n[2])
var r,n
return e.concat(i)}))
return new Yi(s,o)}}class Ji{constructor(t,e){this.min=t,this.max=e,this.center=function(t,e,i){return t[0]=.5*e[0],t[1]=.5*e[1],t[2]=.5*e[2],t}([],function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}([],this.min,this.max))}quadrant(t){const e=[t%2==0,t<2],i=l(this.min),r=l(this.max)
for(let n=0;n<e.length;n++)i[n]=e[n]?this.min[n]:this.center[n],r[n]=e[n]?this.center[n]:this.max[n]
return r[2]=this.max[2],new Ji(i,r)}distanceX(t){return Math.max(Math.min(this.max[0],t[0]),this.min[0])-t[0]}distanceY(t){return Math.max(Math.min(this.max[1],t[1]),this.min[1])-t[1]}intersects(e){const i=[[this.min[0],this.min[1],0,1],[this.max[0],this.min[1],0,1],[this.max[0],this.max[1],0,1],[this.min[0],this.max[1],0,1]]
let r=!0
for(let n=0;n<e.planes.length;n++){const s=e.planes[n]
let o=0
for(let e=0;e<i.length;e++)t.dot(s,i[e])>=0&&o++
if(0===o)return 0
o!==i.length&&(r=!1)}if(r)return 2
for(let t=0;t<3;t++){let i=Number.MAX_VALUE,r=-Number.MAX_VALUE
for(let n=0;n<e.points.length;n++){const s=e.points[n][t]-this.min[t]
i=Math.min(i,s),r=Math.max(r,s)}if(r<0||i>this.max[t]-this.min[t])return 0}return 1}}class Qi{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(isNaN(t)||t<0||isNaN(e)||e<0||isNaN(i)||i<0||isNaN(r)||r<0)throw new Error("Invalid value for edge-insets, top, bottom, left and right must all be numbers")
this.top=t,this.bottom=e,this.left=i,this.right=r}interpolate(e,i,r){return null!=i.top&&null!=e.top&&(this.top=t.number(e.top,i.top,r)),null!=i.bottom&&null!=e.bottom&&(this.bottom=t.number(e.bottom,i.bottom,r)),null!=i.left&&null!=e.left&&(this.left=t.number(e.left,i.left,r)),null!=i.right&&null!=e.right&&(this.right=t.number(e.right,i.right,r)),this}getCenter(e,i){const r=t.clamp((this.left+e-this.right)/2,0,e),n=t.clamp((this.top+i-this.bottom)/2,0,i)
return new t.pointGeometry(r,n)}equals(t){return this.top===t.top&&this.bottom===t.bottom&&this.left===t.left&&this.right===t.right}clone(){return new Qi(this.top,this.bottom,this.left,this.right)}toJSON(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}}class tr{constructor(e,i,r,n,s){this.tileSize=512,this.maxValidLatitude=85.051129,this._renderWorldCopies=void 0===s||!!s,this._minZoom=e||0,this._maxZoom=i||22,this._minPitch=null==r?0:r,this._maxPitch=null==n?60:n,this.setMaxBounds(),this.width=0,this.height=0,this._center=new t.LngLat(0,0),this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._edgeInsets=new Qi,this._posMatrixCache={},this._alignedPosMatrixCache={}}clone(){const t=new tr(this._minZoom,this._maxZoom,this._minPitch,this.maxPitch,this._renderWorldCopies)
return t.tileSize=this.tileSize,t.latRange=this.latRange,t.width=this.width,t.height=this.height,t._center=this._center,t.zoom=this.zoom,t.angle=this.angle,t._fov=this._fov,t._pitch=this._pitch,t._unmodified=this._unmodified,t._edgeInsets=this._edgeInsets.clone(),t._calcMatrices(),t}get minZoom(){return this._minZoom}set minZoom(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t))}get maxZoom(){return this._maxZoom}set maxZoom(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t))}get minPitch(){return this._minPitch}set minPitch(t){this._minPitch!==t&&(this._minPitch=t,this.pitch=Math.max(this.pitch,t))}get maxPitch(){return this._maxPitch}set maxPitch(t){this._maxPitch!==t&&(this._maxPitch=t,this.pitch=Math.min(this.pitch,t))}get renderWorldCopies(){return this._renderWorldCopies}set renderWorldCopies(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t}get worldSize(){return this.tileSize*this.scale}get centerOffset(){return this.centerPoint._sub(this.size._div(2))}get size(){return new t.pointGeometry(this.width,this.height)}get bearing(){return-this.angle/Math.PI*180}set bearing(e){const i=-t.wrap(e,-180,180)*Math.PI/180
this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=function(){var e=new t.ARRAY_TYPE(4)
return t.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}(),function(t,e,i){var r=e[0],n=e[1],s=e[2],o=e[3],a=Math.sin(i),l=Math.cos(i)
t[0]=r*l+s*a,t[1]=n*l+o*a,t[2]=r*-a+s*l,t[3]=n*-a+o*l}(this.rotationMatrix,this.rotationMatrix,this.angle))}get pitch(){return this._pitch/Math.PI*180}set pitch(e){const i=t.clamp(e,this.minPitch,this.maxPitch)/180*Math.PI
this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices())}get fov(){return this._fov/Math.PI*180}set fov(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices())}get zoom(){return this._zoom}set zoom(t){const e=Math.min(Math.max(t,this.minZoom),this.maxZoom)
this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.scale=this.zoomScale(e),this.tileZoom=Math.floor(e),this.zoomFraction=e-this.tileZoom,this._constrain(),this._calcMatrices())}get center(){return this._center}set center(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices())}get padding(){return this._edgeInsets.toJSON()}set padding(t){this._edgeInsets.equals(t)||(this._unmodified=!1,this._edgeInsets.interpolate(this._edgeInsets,t,1),this._calcMatrices())}get centerPoint(){return this._edgeInsets.getCenter(this.width,this.height)}isPaddingEqual(t){return this._edgeInsets.equals(t)}interpolatePadding(t,e,i){this._unmodified=!1,this._edgeInsets.interpolate(t,e,i),this._constrain(),this._calcMatrices()}coveringZoomLevel(t){const e=(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))
return Math.max(0,e)}getVisibleUnwrappedCoordinates(e){const i=[new t.UnwrappedTileID(0,e)]
if(this._renderWorldCopies){const r=this.pointCoordinate(new t.pointGeometry(0,0)),n=this.pointCoordinate(new t.pointGeometry(this.width,0)),s=this.pointCoordinate(new t.pointGeometry(this.width,this.height)),o=this.pointCoordinate(new t.pointGeometry(0,this.height)),a=Math.floor(Math.min(r.x,n.x,s.x,o.x)),l=Math.floor(Math.max(r.x,n.x,s.x,o.x)),c=1
for(let h=a-c;h<=l+c;h++)0!==h&&i.push(new t.UnwrappedTileID(h,e))}return i}coveringTiles(e){let i=this.coveringZoomLevel(e)
const r=i
if(void 0!==e.minzoom&&i<e.minzoom)return[]
void 0!==e.maxzoom&&i>e.maxzoom&&(i=e.maxzoom)
const n=t.MercatorCoordinate.fromLngLat(this.center),s=Math.pow(2,i),o=[s*n.x,s*n.y,0],a=Yi.fromInvProjectionMatrix(this.invProjMatrix,this.worldSize,i)
let l=e.minzoom||0
this.pitch<=60&&this._edgeInsets.top<.1&&(l=i)
const c=t=>({aabb:new Ji([t*s,0,0],[(t+1)*s,s,0]),zoom:0,x:0,y:0,wrap:t,fullyVisible:!1}),h=[],p=[],d=i,m=e.reparseOverscaled?r:i
if(this._renderWorldCopies)for(let t=1;t<=3;t++)h.push(c(-t)),h.push(c(t))
for(h.push(c(0));h.length>0;){const e=h.pop(),i=e.x,r=e.y
let n=e.fullyVisible
if(!n){const t=e.aabb.intersects(a)
if(0===t)continue
n=2===t}const s=e.aabb.distanceX(o),c=e.aabb.distanceY(o),f=Math.max(Math.abs(s),Math.abs(c)),g=3+(1<<d-e.zoom)-2
if(e.zoom===d||f>g&&e.zoom>=l)p.push({tileID:new t.OverscaledTileID(e.zoom===d?m:e.zoom,e.wrap,e.zoom,i,r),distanceSq:u([o[0]-.5-i,o[1]-.5-r])})
else for(let t=0;t<4;t++){const s=(i<<1)+t%2,o=(r<<1)+(t>>1)
h.push({aabb:e.aabb.quadrant(t),zoom:e.zoom+1,x:s,y:o,wrap:e.wrap,fullyVisible:n})}}return p.sort(((t,e)=>t.distanceSq-e.distanceSq)).map((t=>t.tileID))}resize(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices()}get unmodified(){return this._unmodified}zoomScale(t){return Math.pow(2,t)}scaleZoom(t){return Math.log(t)/Math.LN2}project(e){const i=t.clamp(e.lat,-this.maxValidLatitude,this.maxValidLatitude)
return new t.pointGeometry(t.mercatorXfromLng(e.lng)*this.worldSize,t.mercatorYfromLat(i)*this.worldSize)}unproject(e){return new t.MercatorCoordinate(e.x/this.worldSize,e.y/this.worldSize).toLngLat()}get point(){return this.project(this.center)}setLocationAtPoint(e,i){const r=this.pointCoordinate(i),n=this.pointCoordinate(this.centerPoint),s=this.locationCoordinate(e),o=new t.MercatorCoordinate(s.x-(r.x-n.x),s.y-(r.y-n.y))
this.center=this.coordinateLocation(o),this._renderWorldCopies&&(this.center=this.center.wrap())}locationPoint(t){return this.coordinatePoint(this.locationCoordinate(t))}pointLocation(t){return this.coordinateLocation(this.pointCoordinate(t))}locationCoordinate(e){return t.MercatorCoordinate.fromLngLat(e)}coordinateLocation(t){return t.toLngLat()}pointCoordinate(e){const i=[e.x,e.y,0,1],r=[e.x,e.y,1,1]
t.transformMat4(i,i,this.pixelMatrixInverse),t.transformMat4(r,r,this.pixelMatrixInverse)
const n=i[3],s=r[3],o=i[1]/n,a=r[1]/s,l=i[2]/n,c=r[2]/s,h=l===c?0:(0-l)/(c-l)
return new t.MercatorCoordinate(t.number(i[0]/n,r[0]/s,h)/this.worldSize,t.number(o,a,h)/this.worldSize)}coordinatePoint(e){const i=[e.x*this.worldSize,e.y*this.worldSize,0,1]
return t.transformMat4(i,i,this.pixelMatrix),new t.pointGeometry(i[0]/i[3],i[1]/i[3])}getBounds(){return(new t.LngLatBounds).extend(this.pointLocation(new t.pointGeometry(0,0))).extend(this.pointLocation(new t.pointGeometry(this.width,0))).extend(this.pointLocation(new t.pointGeometry(this.width,this.height))).extend(this.pointLocation(new t.pointGeometry(0,this.height)))}getMaxBounds(){return this.latRange&&2===this.latRange.length&&this.lngRange&&2===this.lngRange.length?new t.LngLatBounds([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]]):null}setMaxBounds(t){t?(this.lngRange=[t.getWest(),t.getEast()],this.latRange=[t.getSouth(),t.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-this.maxValidLatitude,this.maxValidLatitude])}calculatePosMatrix(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const r=e.key,n=i?this._alignedPosMatrixCache:this._posMatrixCache
if(n[r])return n[r]
const s=e.canonical,o=this.worldSize/this.zoomScale(s.z),a=s.x+Math.pow(2,s.z)*e.wrap,l=t.identity(new Float64Array(16))
return t.translate(l,l,[a*o,s.y*o,0]),t.scale(l,l,[o/t.EXTENT,o/t.EXTENT,1]),t.multiply(l,i?this.alignedProjMatrix:this.projMatrix,l),n[r]=new Float32Array(l),n[r]}customLayerMatrix(){return this.mercatorMatrix.slice()}_constrain(){if(!this.center||!this.width||!this.height||this._constraining)return
this._constraining=!0
let e,i,r,n,s=-90,o=90,a=-180,l=180
const c=this.size,h=this._unmodified
if(this.latRange){const i=this.latRange
s=t.mercatorYfromLat(i[1])*this.worldSize,o=t.mercatorYfromLat(i[0])*this.worldSize,e=o-s<c.y?c.y/(o-s):0}if(this.lngRange){const e=this.lngRange
a=t.mercatorXfromLng(e[0])*this.worldSize,l=t.mercatorXfromLng(e[1])*this.worldSize,i=l-a<c.x?c.x/(l-a):0}const u=this.point,p=Math.max(i||0,e||0)
if(p)return this.center=this.unproject(new t.pointGeometry(i?(l+a)/2:u.x,e?(o+s)/2:u.y)),this.zoom+=this.scaleZoom(p),this._unmodified=h,void(this._constraining=!1)
if(this.latRange){const t=u.y,e=c.y/2
t-e<s&&(n=s+e),t+e>o&&(n=o-e)}if(this.lngRange){const t=u.x,e=c.x/2
t-e<a&&(r=a+e),t+e>l&&(r=l-e)}void 0===r&&void 0===n||(this.center=this.unproject(new t.pointGeometry(void 0!==r?r:u.x,void 0!==n?n:u.y))),this._unmodified=h,this._constraining=!1}_calcMatrices(){if(!this.height)return
const e=this.centerOffset
this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height
const i=Math.PI/2+this._pitch,r=this._fov*(.5+e.y/this.height),n=Math.sin(r)*this.cameraToCenterDistance/Math.sin(t.clamp(Math.PI-i-r,.01,Math.PI-.01)),s=this.point,o=s.x,a=s.y,l=1.01*(Math.cos(Math.PI/2-this._pitch)*n+this.cameraToCenterDistance),c=this.height/50
let h=new Float64Array(16)
t.perspective(h,this._fov,this.width/this.height,c,l),h[8]=2*-e.x/this.width,h[9]=2*e.y/this.height,t.scale(h,h,[1,-1,1]),t.translate(h,h,[0,0,-this.cameraToCenterDistance]),t.rotateX(h,h,this._pitch),t.rotateZ(h,h,this.angle),t.translate(h,h,[-o,-a,0]),this.mercatorMatrix=t.scale([],h,[this.worldSize,this.worldSize,this.worldSize]),t.scale(h,h,[1,1,t.mercatorZfromAltitude(1,this.center.lat)*this.worldSize]),this.projMatrix=h,this.invProjMatrix=t.invert([],this.projMatrix)
const u=this.width%2/2,p=this.height%2/2,d=Math.cos(this.angle),m=Math.sin(this.angle),f=o-Math.round(o)+d*u+m*p,g=a-Math.round(a)+d*p+m*u,_=new Float64Array(h)
if(t.translate(_,_,[f>.5?f-1:f,g>.5?g-1:g,0]),this.alignedProjMatrix=_,h=t.create(),t.scale(h,h,[this.width/2,-this.height/2,1]),t.translate(h,h,[1,-1,0]),this.labelPlaneMatrix=h,h=t.create(),t.scale(h,h,[1,-1,1]),t.translate(h,h,[-1,-1,0]),t.scale(h,h,[2/this.width,2/this.height,1]),this.glCoordMatrix=h,this.pixelMatrix=t.multiply(new Float64Array(16),this.labelPlaneMatrix,this.projMatrix),h=t.invert(new Float64Array(16),this.pixelMatrix),!h)throw new Error("failed to invert matrix")
this.pixelMatrixInverse=h,this._posMatrixCache={},this._alignedPosMatrixCache={}}maxPitchScaleFactor(){if(!this.pixelMatrixInverse)return 1
const e=this.pointCoordinate(new t.pointGeometry(0,0)),i=[e.x*this.worldSize,e.y*this.worldSize,0,1]
return t.transformMat4(i,i,this.pixelMatrix)[3]/this.cameraToCenterDistance}getCameraPoint(){const e=Math.tan(this._pitch)*(this.cameraToCenterDistance||1)
return this.centerPoint.add(new t.pointGeometry(0,e))}getCameraQueryGeometry(e){const i=this.getCameraPoint()
if(1===e.length)return[e[0],i]
{let r=i.x,n=i.y,s=i.x,o=i.y
for(const t of e)r=Math.min(r,t.x),n=Math.min(n,t.y),s=Math.max(s,t.x),o=Math.max(o,t.y)
return[new t.pointGeometry(r,n),new t.pointGeometry(s,n),new t.pointGeometry(s,o),new t.pointGeometry(r,o),new t.pointGeometry(r,n)]}}}class er{constructor(e){this._hashName=e&&encodeURIComponent(e),t.bindAll(["_getCurrentHash","_onHashChange","_updateHash"],this),this._updateHash=function(t,e){let i=!1,r=null
const n=()=>{r=null,i&&(t(),r=setTimeout(n,300),i=!1)}
return()=>(i=!0,r||n(),r)}(this._updateHashUnthrottled.bind(this))}addTo(t){return this._map=t,addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this}remove(){return removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this}getHashString(t){const e=this._map.getCenter(),i=Math.round(100*this._map.getZoom())/100,r=Math.ceil((i*Math.LN2+Math.log(512/360/.5))/Math.LN10),n=Math.pow(10,r),s=Math.round(e.lng*n)/n,o=Math.round(e.lat*n)/n,a=this._map.getBearing(),l=this._map.getPitch()
let c=""
if(c+=t?`/${s}/${o}/${i}`:`${i}/${o}/${s}`,(a||l)&&(c+="/"+Math.round(10*a)/10),l&&(c+=`/${Math.round(l)}`),this._hashName){const t=this._hashName
let e=!1
const i=window.location.hash.slice(1).split("&").map((i=>{const r=i.split("=")[0]
return r===t?(e=!0,`${r}=${c}`):i})).filter((t=>t))
return e||i.push(`${t}=${c}`),`#${i.join("&")}`}return`#${c}`}_getCurrentHash(){const t=window.location.hash.replace("#","")
if(this._hashName){let e
return t.split("&").map((t=>t.split("="))).forEach((t=>{t[0]===this._hashName&&(e=t)})),(e&&e[1]||"").split("/")}return t.split("/")}_onHashChange(){const t=this._getCurrentHash()
if(t.length>=3&&!t.some((t=>isNaN(t)))){const e=this._map.dragRotate.isEnabled()&&this._map.touchZoomRotate.isEnabled()?+(t[3]||0):this._map.getBearing()
return this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:e,pitch:+(t[4]||0)}),!0}return!1}_updateHashUnthrottled(){const t=window.location.href.replace(/(#.+)?$/,this.getHashString())
try{window.history.replaceState(window.history.state,null,t)}catch(t){}}}const ir={linearity:.3,easing:t.bezier(0,0,.3,1)},rr=t.extend({deceleration:2500,maxSpeed:1400},ir),nr=t.extend({deceleration:20,maxSpeed:1400},ir),sr=t.extend({deceleration:1e3,maxSpeed:360},ir),or=t.extend({deceleration:1e3,maxSpeed:90},ir)
class ar{constructor(t){this._map=t,this.clear()}clear(){this._inertiaBuffer=[]}record(e){this._drainInertiaBuffer(),this._inertiaBuffer.push({time:t.exported.now(),settings:e})}_drainInertiaBuffer(){const e=this._inertiaBuffer,i=t.exported.now()
for(;e.length>0&&i-e[0].time>160;)e.shift()}_onMoveEnd(e){if(this._drainInertiaBuffer(),this._inertiaBuffer.length<2)return
const i={zoom:0,bearing:0,pitch:0,pan:new t.pointGeometry(0,0),pinchAround:void 0,around:void 0}
for(const{settings:t}of this._inertiaBuffer)i.zoom+=t.zoomDelta||0,i.bearing+=t.bearingDelta||0,i.pitch+=t.pitchDelta||0,t.panDelta&&i.pan._add(t.panDelta),t.around&&(i.around=t.around),t.pinchAround&&(i.pinchAround=t.pinchAround)
const r=this._inertiaBuffer[this._inertiaBuffer.length-1].time-this._inertiaBuffer[0].time,n={}
if(i.pan.mag()){const s=cr(i.pan.mag(),r,t.extend({},rr,e||{}))
n.offset=i.pan.mult(s.amount/i.pan.mag()),n.center=this._map.transform.center,lr(n,s)}if(i.zoom){const t=cr(i.zoom,r,nr)
n.zoom=this._map.transform.zoom+t.amount,lr(n,t)}if(i.bearing){const e=cr(i.bearing,r,sr)
n.bearing=this._map.transform.bearing+t.clamp(e.amount,-179,179),lr(n,e)}if(i.pitch){const t=cr(i.pitch,r,or)
n.pitch=this._map.transform.pitch+t.amount,lr(n,t)}if(n.zoom||n.bearing){const t=void 0===i.pinchAround?i.around:i.pinchAround
n.around=t?this._map.unproject(t):this._map.getCenter()}return this.clear(),t.extend(n,{noMoveStart:!0})}}function lr(t,e){(!t.duration||t.duration<e.duration)&&(t.duration=e.duration,t.easing=e.easing)}function cr(e,i,r){const{maxSpeed:n,linearity:s,deceleration:o}=r,a=t.clamp(e*s/(i/1e3),-n,n),l=Math.abs(a)/(o*s)
return{easing:r.easing,duration:1e3*l,amount:a*(l/2)}}class hr extends t.Event{constructor(e,i,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const o=s.mousePos(i.getCanvasContainer(),r),a=i.unproject(o)
super(e,t.extend({point:o,lngLat:a,originalEvent:r},n)),this._defaultPrevented=!1,this.target=i}preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}}class ur extends t.Event{constructor(e,i,r){const n="touchend"===e?r.changedTouches:r.touches,o=s.touchPos(i.getCanvasContainer(),n),a=o.map((t=>i.unproject(t))),l=o.reduce(((t,e,i,r)=>t.add(e.div(r.length))),new t.pointGeometry(0,0))
super(e,{points:o,point:l,lngLats:a,lngLat:i.unproject(l),originalEvent:r}),this._defaultPrevented=!1}preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}}class pr extends t.Event{constructor(t,e,i){super(t,{originalEvent:i}),this._defaultPrevented=!1}preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}}class dr{constructor(t,e){this._map=t,this._clickTolerance=e.clickTolerance}reset(){delete this._mousedownPos}wheel(t){return this._firePreventable(new pr(t.type,this._map,t))}mousedown(t,e){return this._mousedownPos=e,this._firePreventable(new hr(t.type,this._map,t))}mouseup(t){this._map.fire(new hr(t.type,this._map,t))}click(t,e){this._mousedownPos&&this._mousedownPos.dist(e)>=this._clickTolerance||this._map.fire(new hr(t.type,this._map,t))}dblclick(t){return this._firePreventable(new hr(t.type,this._map,t))}mouseover(t){this._map.fire(new hr(t.type,this._map,t))}mouseout(t){this._map.fire(new hr(t.type,this._map,t))}touchstart(t){return this._firePreventable(new ur(t.type,this._map,t))}touchmove(t){this._map.fire(new ur(t.type,this._map,t))}touchend(t){this._map.fire(new ur(t.type,this._map,t))}touchcancel(t){this._map.fire(new ur(t.type,this._map,t))}_firePreventable(t){if(this._map.fire(t),t.defaultPrevented)return{}}isEnabled(){return!0}isActive(){return!1}enable(){}disable(){}}class mr{constructor(t){this._map=t}reset(){this._delayContextMenu=!1,delete this._contextMenuEvent}mousemove(t){this._map.fire(new hr(t.type,this._map,t))}mousedown(){this._delayContextMenu=!0}mouseup(){this._delayContextMenu=!1,this._contextMenuEvent&&(this._map.fire(new hr("contextmenu",this._map,this._contextMenuEvent)),delete this._contextMenuEvent)}contextmenu(t){this._delayContextMenu?this._contextMenuEvent=t:this._map.fire(new hr(t.type,this._map,t)),this._map.listens("contextmenu")&&t.preventDefault()}isEnabled(){return!0}isActive(){return!1}enable(){}disable(){}}class fr{constructor(t,e){this._map=t,this._el=t.getCanvasContainer(),this._container=t.getContainer(),this._clickTolerance=e.clickTolerance||1}isEnabled(){return!!this._enabled}isActive(){return!!this._active}enable(){this.isEnabled()||(this._enabled=!0)}disable(){this.isEnabled()&&(this._enabled=!1)}mousedown(t,e){this.isEnabled()&&t.shiftKey&&0===t.button&&(s.disableDrag(),this._startPos=this._lastPos=e,this._active=!0)}mousemoveWindow(t,e){if(!this._active)return
const i=e
if(this._lastPos.equals(i)||!this._box&&i.dist(this._startPos)<this._clickTolerance)return
const r=this._startPos
this._lastPos=i,this._box||(this._box=s.create("div","maplibregl-boxzoom mapboxgl-boxzoom",this._container),this._container.classList.add("maplibregl-crosshair","mapboxgl-crosshair"),this._fireEvent("boxzoomstart",t))
const n=Math.min(r.x,i.x),o=Math.max(r.x,i.x),a=Math.min(r.y,i.y),l=Math.max(r.y,i.y)
s.setTransform(this._box,`translate(${n}px,${a}px)`),this._box.style.width=o-n+"px",this._box.style.height=l-a+"px"}mouseupWindow(e,i){if(!this._active)return
if(0!==e.button)return
const r=this._startPos,n=i
if(this.reset(),s.suppressClick(),r.x!==n.x||r.y!==n.y)return this._map.fire(new t.Event("boxzoomend",{originalEvent:e})),{cameraAnimation:t=>t.fitScreenCoordinates(r,n,this._map.getBearing(),{linear:!0})}
this._fireEvent("boxzoomcancel",e)}keydown(t){this._active&&27===t.keyCode&&(this.reset(),this._fireEvent("boxzoomcancel",t))}reset(){this._active=!1,this._container.classList.remove("maplibregl-crosshair","mapboxgl-crosshair"),this._box&&(s.remove(this._box),this._box=null),s.enableDrag(),delete this._startPos,delete this._lastPos}_fireEvent(e,i){return this._map.fire(new t.Event(e,{originalEvent:i}))}}function gr(t,e){const i={}
for(let r=0;r<t.length;r++)i[t[r].identifier]=e[r]
return i}class _r{constructor(t){this.reset(),this.numTouches=t.numTouches}reset(){delete this.centroid,delete this.startTime,delete this.touches,this.aborted=!1}touchstart(e,i,r){(this.centroid||r.length>this.numTouches)&&(this.aborted=!0),this.aborted||(void 0===this.startTime&&(this.startTime=e.timeStamp),r.length===this.numTouches&&(this.centroid=function(e){const i=new t.pointGeometry(0,0)
for(const t of e)i._add(t)
return i.div(e.length)}(i),this.touches=gr(r,i)))}touchmove(t,e,i){if(this.aborted||!this.centroid)return
const r=gr(i,e)
for(const n in this.touches){const t=this.touches[n],e=r[n];(!e||e.dist(t)>30)&&(this.aborted=!0)}}touchend(t,e,i){if((!this.centroid||t.timeStamp-this.startTime>500)&&(this.aborted=!0),0===i.length){const t=!this.aborted&&this.centroid
if(this.reset(),t)return t}}}class yr{constructor(t){this.singleTap=new _r(t),this.numTaps=t.numTaps,this.reset()}reset(){this.lastTime=1/0,delete this.lastTap,this.count=0,this.singleTap.reset()}touchstart(t,e,i){this.singleTap.touchstart(t,e,i)}touchmove(t,e,i){this.singleTap.touchmove(t,e,i)}touchend(t,e,i){const r=this.singleTap.touchend(t,e,i)
if(r){const e=t.timeStamp-this.lastTime<500,i=!this.lastTap||this.lastTap.dist(r)<30
if(e&&i||this.reset(),this.count++,this.lastTime=t.timeStamp,this.lastTap=r,this.count===this.numTaps)return this.reset(),r}}}class xr{constructor(){this._zoomIn=new yr({numTouches:1,numTaps:2}),this._zoomOut=new yr({numTouches:2,numTaps:1}),this.reset()}reset(){this._active=!1,this._zoomIn.reset(),this._zoomOut.reset()}touchstart(t,e,i){this._zoomIn.touchstart(t,e,i),this._zoomOut.touchstart(t,e,i)}touchmove(t,e,i){this._zoomIn.touchmove(t,e,i),this._zoomOut.touchmove(t,e,i)}touchend(t,e,i){const r=this._zoomIn.touchend(t,e,i),n=this._zoomOut.touchend(t,e,i)
return r?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:e.getZoom()+1,around:e.unproject(r)},{originalEvent:t})}):n?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:e.getZoom()-1,around:e.unproject(n)},{originalEvent:t})}):void 0}touchcancel(){this.reset()}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}const vr={0:1,2:2}
class br{constructor(t){this.reset(),this._clickTolerance=t.clickTolerance||1}reset(){this._active=!1,this._moved=!1,delete this._lastPoint,delete this._eventButton}_correctButton(t,e){return!1}_move(t,e){return{}}mousedown(t,e){if(this._lastPoint)return
const i=s.mouseButton(t)
this._correctButton(t,i)&&(this._lastPoint=e,this._eventButton=i)}mousemoveWindow(t,e){const i=this._lastPoint
if(i)if(t.preventDefault(),function(t,e){const i=vr[e]
return void 0===t.buttons||(t.buttons&i)!==i}(t,this._eventButton))this.reset()
else if(this._moved||!(e.dist(i)<this._clickTolerance))return this._moved=!0,this._lastPoint=e,this._move(i,e)}mouseupWindow(t){this._lastPoint&&s.mouseButton(t)===this._eventButton&&(this._moved&&s.suppressClick(),this.reset())}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class wr extends br{mousedown(t,e){super.mousedown(t,e),this._lastPoint&&(this._active=!0)}_correctButton(t,e){return 0===e&&!t.ctrlKey}_move(t,e){return{around:e,panDelta:e.sub(t)}}}class Sr extends br{_correctButton(t,e){return 0===e&&t.ctrlKey||2===e}_move(t,e){const i=.8*(e.x-t.x)
if(i)return this._active=!0,{bearingDelta:i}}contextmenu(t){t.preventDefault()}}class Tr extends br{_correctButton(t,e){return 0===e&&t.ctrlKey||2===e}_move(t,e){const i=-.5*(e.y-t.y)
if(i)return this._active=!0,{pitchDelta:i}}contextmenu(t){t.preventDefault()}}class Ir{constructor(t){this._minTouches=1,this._clickTolerance=t.clickTolerance||1,this.reset()}reset(){this._active=!1,this._touches={},this._sum=new t.pointGeometry(0,0)}touchstart(t,e,i){return this._calculateTransform(t,e,i)}touchmove(t,e,i){if(this._active&&!(i.length<this._minTouches))return t.preventDefault(),this._calculateTransform(t,e,i)}touchend(t,e,i){this._calculateTransform(t,e,i),this._active&&i.length<this._minTouches&&this.reset()}touchcancel(){this.reset()}_calculateTransform(e,i,r){r.length>0&&(this._active=!0)
const n=gr(r,i),s=new t.pointGeometry(0,0),o=new t.pointGeometry(0,0)
let a=0
for(const t in n){const e=n[t],i=this._touches[t]
i&&(s._add(e),o._add(e.sub(i)),a++,n[t]=e)}if(this._touches=n,a<this._minTouches||!o.mag())return
const l=o.div(a)
return this._sum._add(l),this._sum.mag()<this._clickTolerance?void 0:{around:s.div(a),panDelta:l}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class Er{constructor(){this.reset()}reset(){this._active=!1,delete this._firstTwoTouches}_start(t){}_move(t,e,i){return{}}touchstart(t,e,i){this._firstTwoTouches||i.length<2||(this._firstTwoTouches=[i[0].identifier,i[1].identifier],this._start([e[0],e[1]]))}touchmove(t,e,i){if(!this._firstTwoTouches)return
t.preventDefault()
const[r,n]=this._firstTwoTouches,s=Ar(i,e,r),o=Ar(i,e,n)
if(!s||!o)return
const a=this._aroundCenter?null:s.add(o).div(2)
return this._move([s,o],a,t)}touchend(t,e,i){if(!this._firstTwoTouches)return
const[r,n]=this._firstTwoTouches,o=Ar(i,e,r),a=Ar(i,e,n)
o&&a||(this._active&&s.suppressClick(),this.reset())}touchcancel(){this.reset()}enable(t){this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}function Ar(t,e,i){for(let r=0;r<t.length;r++)if(t[r].identifier===i)return e[r]}function zr(t,e){return Math.log(t/e)/Math.LN2}class Cr extends Er{reset(){super.reset(),delete this._distance,delete this._startDistance}_start(t){this._startDistance=this._distance=t[0].dist(t[1])}_move(t,e){const i=this._distance
if(this._distance=t[0].dist(t[1]),this._active||!(Math.abs(zr(this._distance,this._startDistance))<.1))return this._active=!0,{zoomDelta:zr(this._distance,i),pinchAround:e}}}function Pr(t,e){return 180*t.angleWith(e)/Math.PI}class kr extends Er{reset(){super.reset(),delete this._minDiameter,delete this._startVector,delete this._vector}_start(t){this._startVector=this._vector=t[0].sub(t[1]),this._minDiameter=t[0].dist(t[1])}_move(t,e){const i=this._vector
if(this._vector=t[0].sub(t[1]),this._active||!this._isBelowThreshold(this._vector))return this._active=!0,{bearingDelta:Pr(this._vector,i),pinchAround:e}}_isBelowThreshold(t){this._minDiameter=Math.min(this._minDiameter,t.mag())
const e=25/(Math.PI*this._minDiameter)*360,i=Pr(t,this._startVector)
return Math.abs(i)<e}}function Mr(t){return Math.abs(t.y)>Math.abs(t.x)}class Dr extends Er{reset(){super.reset(),this._valid=void 0,delete this._firstMove,delete this._lastPoints}_start(t){this._lastPoints=t,Mr(t[0].sub(t[1]))&&(this._valid=!1)}_move(t,e,i){const r=t[0].sub(this._lastPoints[0]),n=t[1].sub(this._lastPoints[1])
if(this._valid=this.gestureBeginsVertically(r,n,i.timeStamp),this._valid)return this._lastPoints=t,this._active=!0,{pitchDelta:(r.y+n.y)/2*-.5}}gestureBeginsVertically(t,e,i){if(void 0!==this._valid)return this._valid
const r=t.mag()>=2,n=e.mag()>=2
if(!r&&!n)return
if(!r||!n)return void 0===this._firstMove&&(this._firstMove=i),i-this._firstMove<100&&void 0
const s=t.y>0==e.y>0
return Mr(t)&&Mr(e)&&s}}const Lr={panStep:100,bearingStep:15,pitchStep:10}
class Br{constructor(){const t=Lr
this._panStep=t.panStep,this._bearingStep=t.bearingStep,this._pitchStep=t.pitchStep,this._rotationDisabled=!1}reset(){this._active=!1}keydown(t){if(t.altKey||t.ctrlKey||t.metaKey)return
let e=0,i=0,r=0,n=0,s=0
switch(t.keyCode){case 61:case 107:case 171:case 187:e=1
break
case 189:case 109:case 173:e=-1
break
case 37:t.shiftKey?i=-1:(t.preventDefault(),n=-1)
break
case 39:t.shiftKey?i=1:(t.preventDefault(),n=1)
break
case 38:t.shiftKey?r=1:(t.preventDefault(),s=-1)
break
case 40:t.shiftKey?r=-1:(t.preventDefault(),s=1)
break
default:return}return this._rotationDisabled&&(i=0,r=0),{cameraAnimation:o=>{const a=o.getZoom()
o.easeTo({duration:300,easeId:"keyboardHandler",easing:Rr,zoom:e?Math.round(a)+e*(t.shiftKey?2:1):a,bearing:o.getBearing()+i*this._bearingStep,pitch:o.getPitch()+r*this._pitchStep,offset:[-n*this._panStep,-s*this._panStep],center:o.getCenter()},{originalEvent:t})}}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}disableRotation(){this._rotationDisabled=!0}enableRotation(){this._rotationDisabled=!1}}function Rr(t){return t*(2-t)}const Fr=4.000244140625
class Or{constructor(e,i){this._map=e,this._el=e.getCanvasContainer(),this._handler=i,this._delta=0,this._defaultZoomRate=.01,this._wheelZoomRate=.0022222222222222222,t.bindAll(["_onTimeout"],this)}setZoomRate(t){this._defaultZoomRate=t}setWheelZoomRate(t){this._wheelZoomRate=t}isEnabled(){return!!this._enabled}isActive(){return!!this._active||void 0!==this._finishTimeout}isZooming(){return!!this._zooming}enable(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=t&&"center"===t.around)}disable(){this.isEnabled()&&(this._enabled=!1)}wheel(e){if(!this.isEnabled())return
let i=e.deltaMode===WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY
const r=t.exported.now(),n=r-(this._lastWheelEventTime||0)
this._lastWheelEventTime=r,0!==i&&i%Fr==0?this._type="wheel":0!==i&&Math.abs(i)<4?this._type="trackpad":n>400?(this._type=null,this._lastValue=i,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(n*i)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,i+=this._lastValue)),e.shiftKey&&i&&(i/=4),this._type&&(this._lastWheelEvent=e,this._delta-=i,this._active||this._start(e)),e.preventDefault()}_onTimeout(t){this._type="wheel",this._delta-=this._lastValue,this._active||this._start(t)}_start(e){if(!this._delta)return
this._frameId&&(this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0),this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout)
const i=s.mousePos(this._el,e)
this._around=t.LngLat.convert(this._aroundCenter?this._map.getCenter():this._map.unproject(i)),this._aroundPoint=this._map.transform.locationPoint(this._around),this._frameId||(this._frameId=!0,this._handler._triggerRenderFrame())}renderFrame(){if(!this._frameId)return
if(this._frameId=null,!this.isActive())return
const e=this._map.transform
if(0!==this._delta){const t="wheel"===this._type&&Math.abs(this._delta)>Fr?this._wheelZoomRate:this._defaultZoomRate
let i=2/(1+Math.exp(-Math.abs(this._delta*t)))
this._delta<0&&0!==i&&(i=1/i)
const r="number"==typeof this._targetZoom?e.zoomScale(this._targetZoom):e.scale
this._targetZoom=Math.min(e.maxZoom,Math.max(e.minZoom,e.scaleZoom(r*i))),"wheel"===this._type&&(this._startZoom=e.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0}const i="number"==typeof this._targetZoom?this._targetZoom:e.zoom,r=this._startZoom,n=this._easing
let s,o=!1
if("wheel"===this._type&&r&&n){const e=Math.min((t.exported.now()-this._lastWheelEventTime)/200,1),a=n(e)
s=t.number(r,i,a),e<1?this._frameId||(this._frameId=!0):o=!0}else s=i,o=!0
return this._active=!0,o&&(this._active=!1,this._finishTimeout=setTimeout((()=>{this._zooming=!1,this._handler._triggerRenderFrame(),delete this._targetZoom,delete this._finishTimeout}),200)),{noInertia:!0,needsRenderFrame:!o,zoomDelta:s-e.zoom,around:this._aroundPoint,originalEvent:this._lastWheelEvent}}_smoothOutEasing(e){let i=t.ease
if(this._prevEase){const e=this._prevEase,r=(t.exported.now()-e.start)/e.duration,n=e.easing(r+.01)-e.easing(r),s=.27/Math.sqrt(n*n+1e-4)*.01,o=Math.sqrt(.0729-s*s)
i=t.bezier(s,o,.25,1)}return this._prevEase={start:t.exported.now(),duration:e,easing:i},i}reset(){this._active=!1}}class Ur{constructor(t,e){this._clickZoom=t,this._tapZoom=e}enable(){this._clickZoom.enable(),this._tapZoom.enable()}disable(){this._clickZoom.disable(),this._tapZoom.disable()}isEnabled(){return this._clickZoom.isEnabled()&&this._tapZoom.isEnabled()}isActive(){return this._clickZoom.isActive()||this._tapZoom.isActive()}}class Vr{constructor(){this.reset()}reset(){this._active=!1}dblclick(t,e){return t.preventDefault(),{cameraAnimation:i=>{i.easeTo({duration:300,zoom:i.getZoom()+(t.shiftKey?-1:1),around:i.unproject(e)},{originalEvent:t})}}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class Nr{constructor(){this._tap=new yr({numTouches:1,numTaps:1}),this.reset()}reset(){this._active=!1,delete this._swipePoint,delete this._swipeTouch,delete this._tapTime,this._tap.reset()}touchstart(t,e,i){this._swipePoint||(this._tapTime&&t.timeStamp-this._tapTime>500&&this.reset(),this._tapTime?i.length>0&&(this._swipePoint=e[0],this._swipeTouch=i[0].identifier):this._tap.touchstart(t,e,i))}touchmove(t,e,i){if(this._tapTime){if(this._swipePoint){if(i[0].identifier!==this._swipeTouch)return
const r=e[0],n=r.y-this._swipePoint.y
return this._swipePoint=r,t.preventDefault(),this._active=!0,{zoomDelta:n/128}}}else this._tap.touchmove(t,e,i)}touchend(t,e,i){this._tapTime?this._swipePoint&&0===i.length&&this.reset():this._tap.touchend(t,e,i)&&(this._tapTime=t.timeStamp)}touchcancel(){this.reset()}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class $r{constructor(t,e,i){this._el=t,this._mousePan=e,this._touchPan=i}enable(t){this._inertiaOptions=t||{},this._mousePan.enable(),this._touchPan.enable(),this._el.classList.add("maplibregl-touch-drag-pan","mapboxgl-touch-drag-pan")}disable(){this._mousePan.disable(),this._touchPan.disable(),this._el.classList.remove("maplibregl-touch-drag-pan","mapboxgl-touch-drag-pan")}isEnabled(){return this._mousePan.isEnabled()&&this._touchPan.isEnabled()}isActive(){return this._mousePan.isActive()||this._touchPan.isActive()}}class qr{constructor(t,e,i){this._pitchWithRotate=t.pitchWithRotate,this._mouseRotate=e,this._mousePitch=i}enable(){this._mouseRotate.enable(),this._pitchWithRotate&&this._mousePitch.enable()}disable(){this._mouseRotate.disable(),this._mousePitch.disable()}isEnabled(){return this._mouseRotate.isEnabled()&&(!this._pitchWithRotate||this._mousePitch.isEnabled())}isActive(){return this._mouseRotate.isActive()||this._mousePitch.isActive()}}class Gr{constructor(t,e,i,r){this._el=t,this._touchZoom=e,this._touchRotate=i,this._tapDragZoom=r,this._rotationDisabled=!1,this._enabled=!0}enable(t){this._touchZoom.enable(t),this._rotationDisabled||this._touchRotate.enable(t),this._tapDragZoom.enable(),this._el.classList.add("maplibregl-touch-zoom-rotate","mapboxgl-touch-zoom-rotate")}disable(){this._touchZoom.disable(),this._touchRotate.disable(),this._tapDragZoom.disable(),this._el.classList.remove("maplibregl-touch-zoom-rotate","mapboxgl-touch-zoom-rotate")}isEnabled(){return this._touchZoom.isEnabled()&&(this._rotationDisabled||this._touchRotate.isEnabled())&&this._tapDragZoom.isEnabled()}isActive(){return this._touchZoom.isActive()||this._touchRotate.isActive()||this._tapDragZoom.isActive()}disableRotation(){this._rotationDisabled=!0,this._touchRotate.disable()}enableRotation(){this._rotationDisabled=!1,this._touchZoom.isEnabled()&&this._touchRotate.enable()}}const jr=t=>t.zoom||t.drag||t.pitch||t.rotate
class Zr extends t.Event{}function Xr(t){return t.panDelta&&t.panDelta.mag()||t.zoomDelta||t.bearingDelta||t.pitchDelta}class Wr{constructor(e,i){this._map=e,this._el=this._map.getCanvasContainer(),this._handlers=[],this._handlersById={},this._changes=[],this._inertia=new ar(e),this._bearingSnap=i.bearingSnap,this._previousActiveHandlers={},this._eventsInProgress={},this._addDefaultHandlers(i),t.bindAll(["handleEvent","handleWindowEvent"],this)
const r=this._el
this._listeners=[[r,"touchstart",{passive:!0}],[r,"touchmove",{passive:!1}],[r,"touchend",void 0],[r,"touchcancel",void 0],[r,"mousedown",void 0],[r,"mousemove",void 0],[r,"mouseup",void 0],[document,"mousemove",{capture:!0}],[document,"mouseup",void 0],[r,"mouseover",void 0],[r,"mouseout",void 0],[r,"dblclick",void 0],[r,"click",void 0],[r,"keydown",{capture:!1}],[r,"keyup",void 0],[r,"wheel",{passive:!1}],[r,"contextmenu",void 0],[window,"blur",void 0]]
for(const[t,n,o]of this._listeners)s.addEventListener(t,n,t===document?this.handleWindowEvent:this.handleEvent,o)}destroy(){for(const[t,e,i]of this._listeners)s.removeEventListener(t,e,t===document?this.handleWindowEvent:this.handleEvent,i)}_addDefaultHandlers(t){const e=this._map,i=e.getCanvasContainer()
this._add("mapEvent",new dr(e,t))
const r=e.boxZoom=new fr(e,t)
this._add("boxZoom",r)
const n=new xr,s=new Vr
e.doubleClickZoom=new Ur(s,n),this._add("tapZoom",n),this._add("clickZoom",s)
const o=new Nr
this._add("tapDragZoom",o)
const a=e.touchPitch=new Dr
this._add("touchPitch",a)
const l=new Sr(t),c=new Tr(t)
e.dragRotate=new qr(t,l,c),this._add("mouseRotate",l,["mousePitch"]),this._add("mousePitch",c,["mouseRotate"])
const h=new wr(t),u=new Ir(t)
e.dragPan=new $r(i,h,u),this._add("mousePan",h),this._add("touchPan",u,["touchZoom","touchRotate"])
const p=new kr,d=new Cr
e.touchZoomRotate=new Gr(i,d,p,o),this._add("touchRotate",p,["touchPan","touchZoom"]),this._add("touchZoom",d,["touchPan","touchRotate"])
const m=e.scrollZoom=new Or(e,this)
this._add("scrollZoom",m,["mousePan"])
const f=e.keyboard=new Br
this._add("keyboard",f),this._add("blockableMapEvent",new mr(e))
for(const g of["boxZoom","doubleClickZoom","tapDragZoom","touchPitch","dragRotate","dragPan","touchZoomRotate","scrollZoom","keyboard"])t.interactive&&t[g]&&e[g].enable(t[g])}_add(t,e,i){this._handlers.push({handlerName:t,handler:e,allowed:i}),this._handlersById[t]=e}stop(t){if(!this._updatingCamera){for(const{handler:t}of this._handlers)t.reset()
this._inertia.clear(),this._fireEvents({},{},t),this._changes=[]}}isActive(){for(const{handler:t}of this._handlers)if(t.isActive())return!0
return!1}isZooming(){return!!this._eventsInProgress.zoom||this._map.scrollZoom.isZooming()}isRotating(){return!!this._eventsInProgress.rotate}isMoving(){return Boolean(jr(this._eventsInProgress))||this.isZooming()}_blockedByActive(t,e,i){for(const r in t)if(r!==i&&(!e||e.indexOf(r)<0))return!0
return!1}handleWindowEvent(t){this.handleEvent(t,`${t.type}Window`)}_getMapTouches(t){const e=[]
for(const i of t)this._el.contains(i.target)&&e.push(i)
return e}handleEvent(t,e){if("blur"===t.type)return void this.stop(!0)
this._updatingCamera=!0
const i="renderFrame"===t.type?void 0:t,r={needsRenderFrame:!1},n={},o={},a=t.touches,l=a?this._getMapTouches(a):void 0,c=l?s.touchPos(this._el,l):s.mousePos(this._el,t)
for(const{handlerName:s,handler:p,allowed:d}of this._handlers){if(!p.isEnabled())continue
let a
this._blockedByActive(o,d,s)?p.reset():p[e||t.type]&&(a=p[e||t.type](t,c,l),this.mergeHandlerResult(r,n,a,s,i),a&&a.needsRenderFrame&&this._triggerRenderFrame()),(a||p.isActive())&&(o[s]=p)}const h={}
for(const s in this._previousActiveHandlers)o[s]||(h[s]=i)
this._previousActiveHandlers=o,(Object.keys(h).length||Xr(r))&&(this._changes.push([r,n,h]),this._triggerRenderFrame()),(Object.keys(o).length||Xr(r))&&this._map._stop(!0),this._updatingCamera=!1
const{cameraAnimation:u}=r
u&&(this._inertia.clear(),this._fireEvents({},{},!0),this._changes=[],u(this._map))}mergeHandlerResult(e,i,r,n,s){if(!r)return
t.extend(e,r)
const o={handlerName:n,originalEvent:r.originalEvent||s}
void 0!==r.zoomDelta&&(i.zoom=o),void 0!==r.panDelta&&(i.drag=o),void 0!==r.pitchDelta&&(i.pitch=o),void 0!==r.bearingDelta&&(i.rotate=o)}_applyChanges(){const e={},i={},r={}
for(const[n,s,o]of this._changes)n.panDelta&&(e.panDelta=(e.panDelta||new t.pointGeometry(0,0))._add(n.panDelta)),n.zoomDelta&&(e.zoomDelta=(e.zoomDelta||0)+n.zoomDelta),n.bearingDelta&&(e.bearingDelta=(e.bearingDelta||0)+n.bearingDelta),n.pitchDelta&&(e.pitchDelta=(e.pitchDelta||0)+n.pitchDelta),void 0!==n.around&&(e.around=n.around),void 0!==n.pinchAround&&(e.pinchAround=n.pinchAround),n.noInertia&&(e.noInertia=n.noInertia),t.extend(i,s),t.extend(r,o)
this._updateMapTransform(e,i,r),this._changes=[]}_updateMapTransform(t,e,i){const r=this._map,n=r.transform
if(!Xr(t))return this._fireEvents(e,i,!0)
let{panDelta:s,zoomDelta:o,bearingDelta:a,pitchDelta:l,around:c,pinchAround:h}=t
void 0!==h&&(c=h),r._stop(!0),c=c||r.transform.centerPoint
const u=n.pointLocation(s?c.sub(s):c)
a&&(n.bearing+=a),l&&(n.pitch+=l),o&&(n.zoom+=o),n.setLocationAtPoint(u,c),this._map._update(),t.noInertia||this._inertia.record(t),this._fireEvents(e,i,!0)}_fireEvents(e,i,r){const n=jr(this._eventsInProgress),s=jr(e),o={}
for(const t in e){const{originalEvent:i}=e[t]
this._eventsInProgress[t]||(o[`${t}start`]=i),this._eventsInProgress[t]=e[t]}!n&&s&&this._fireEvent("movestart",s.originalEvent)
for(const t in o)this._fireEvent(t,o[t])
s&&this._fireEvent("move",s.originalEvent)
for(const t in e){const{originalEvent:i}=e[t]
this._fireEvent(t,i)}const a={}
let l
for(const t in this._eventsInProgress){const{handlerName:e,originalEvent:r}=this._eventsInProgress[t]
this._handlersById[e].isActive()||(delete this._eventsInProgress[t],l=i[e]||r,a[`${t}end`]=l)}for(const t in a)this._fireEvent(t,a[t])
const c=jr(this._eventsInProgress)
if(r&&(n||s)&&!c){this._updatingCamera=!0
const e=this._inertia._onMoveEnd(this._map.dragPan._inertiaOptions),i=t=>0!==t&&-this._bearingSnap<t&&t<this._bearingSnap
e?(i(e.bearing||this._map.getBearing())&&(e.bearing=0),this._map.easeTo(e,{originalEvent:l})):(this._map.fire(new t.Event("moveend",{originalEvent:l})),i(this._map.getBearing())&&this._map.resetNorth()),this._updatingCamera=!1}}_fireEvent(e,i){this._map.fire(new t.Event(e,i?{originalEvent:i}:{}))}_requestFrame(){return this._map.triggerRepaint(),this._map._renderTaskQueue.add((t=>{delete this._frameId,this.handleEvent(new Zr("renderFrame",{timeStamp:t})),this._applyChanges()}))}_triggerRenderFrame(){void 0===this._frameId&&(this._frameId=this._requestFrame())}}const Hr={extend:function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n]
return t.extend(e,...r)},run(t){t()},logToElement(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log"
const r=window.document.getElementById(i)
r&&(e&&(r.innerHTML=""),r.innerHTML+=`<br>${t}`)}}
class Kr extends t.Evented{constructor(e,i){super(),this._moving=!1,this._zooming=!1,this.transform=e,this._bearingSnap=i.bearingSnap,t.bindAll(["_renderFrameCallback"],this)}getCenter(){return new t.LngLat(this.transform.center.lng,this.transform.center.lat)}setCenter(t,e){return this.jumpTo({center:t},e)}panBy(e,i,r){return e=t.pointGeometry.convert(e).mult(-1),this.panTo(this.transform.center,t.extend({offset:e},i),r)}panTo(e,i,r){return this.easeTo(t.extend({center:e},i),r)}getZoom(){return this.transform.zoom}setZoom(t,e){return this.jumpTo({zoom:t},e),this}zoomTo(e,i,r){return this.easeTo(t.extend({zoom:e},i),r)}zoomIn(t,e){return this.zoomTo(this.getZoom()+1,t,e),this}zoomOut(t,e){return this.zoomTo(this.getZoom()-1,t,e),this}getBearing(){return this.transform.bearing}setBearing(t,e){return this.jumpTo({bearing:t},e),this}getPadding(){return this.transform.padding}setPadding(t,e){return this.jumpTo({padding:t},e),this}rotateTo(e,i,r){return this.easeTo(t.extend({bearing:e},i),r)}resetNorth(e,i){return this.rotateTo(0,t.extend({duration:1e3},e),i),this}resetNorthPitch(e,i){return this.easeTo(t.extend({bearing:0,pitch:0,duration:1e3},e),i),this}snapToNorth(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this}getPitch(){return this.transform.pitch}setPitch(t,e){return this.jumpTo({pitch:t},e),this}cameraForBounds(e,i){e=t.LngLatBounds.convert(e)
const r=i&&i.bearing||0
return this._cameraForBoxAndBearing(e.getNorthWest(),e.getSouthEast(),r,i)}_cameraForBoxAndBearing(e,i,r,n){const s={top:0,bottom:0,right:0,left:0}
if("number"==typeof(n=t.extend({padding:s,offset:[0,0],maxZoom:this.transform.maxZoom},n)).padding){const t=n.padding
n.padding={top:t,bottom:t,right:t,left:t}}n.padding=t.extend(s,n.padding)
const o=this.transform,a=o.padding,l=o.project(t.LngLat.convert(e)),c=o.project(t.LngLat.convert(i)),h=l.rotate(-r*Math.PI/180),u=c.rotate(-r*Math.PI/180),p=new t.pointGeometry(Math.max(h.x,u.x),Math.max(h.y,u.y)),d=new t.pointGeometry(Math.min(h.x,u.x),Math.min(h.y,u.y)),m=p.sub(d),f=(o.width-(a.left+a.right+n.padding.left+n.padding.right))/m.x,g=(o.height-(a.top+a.bottom+n.padding.top+n.padding.bottom))/m.y
if(g<0||f<0)return void t.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset.")
const _=Math.min(o.scaleZoom(o.scale*Math.min(f,g)),n.maxZoom),y=t.pointGeometry.convert(n.offset),x=new t.pointGeometry((n.padding.left-n.padding.right)/2,(n.padding.top-n.padding.bottom)/2).rotate(r*Math.PI/180),v=y.add(x).mult(o.scale/o.zoomScale(_))
return{center:o.unproject(l.add(c).div(2).sub(v)),zoom:_,bearing:r}}fitBounds(t,e,i){return this._fitInternal(this.cameraForBounds(t,e),e,i)}fitScreenCoordinates(e,i,r,n,s){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(t.pointGeometry.convert(e)),this.transform.pointLocation(t.pointGeometry.convert(i)),r,n),n,s)}_fitInternal(e,i,r){return e?(delete(i=t.extend(e,i)).padding,i.linear?this.easeTo(i,r):this.flyTo(i,r)):this}jumpTo(e,i){this.stop()
const r=this.transform
let n=!1,s=!1,o=!1
return"zoom"in e&&r.zoom!==+e.zoom&&(n=!0,r.zoom=+e.zoom),void 0!==e.center&&(r.center=t.LngLat.convert(e.center)),"bearing"in e&&r.bearing!==+e.bearing&&(s=!0,r.bearing=+e.bearing),"pitch"in e&&r.pitch!==+e.pitch&&(o=!0,r.pitch=+e.pitch),null==e.padding||r.isPaddingEqual(e.padding)||(r.padding=e.padding),this.fire(new t.Event("movestart",i)).fire(new t.Event("move",i)),n&&this.fire(new t.Event("zoomstart",i)).fire(new t.Event("zoom",i)).fire(new t.Event("zoomend",i)),s&&this.fire(new t.Event("rotatestart",i)).fire(new t.Event("rotate",i)).fire(new t.Event("rotateend",i)),o&&this.fire(new t.Event("pitchstart",i)).fire(new t.Event("pitch",i)).fire(new t.Event("pitchend",i)),this.fire(new t.Event("moveend",i))}easeTo(e,i){this._stop(!1,e.easeId),(!1===(e=t.extend({offset:[0,0],duration:500,easing:t.ease},e)).animate||!e.essential&&t.exported.prefersReducedMotion)&&(e.duration=0)
const r=this.transform,n=this.getZoom(),s=this.getBearing(),o=this.getPitch(),a=this.getPadding(),l="zoom"in e?+e.zoom:n,c="bearing"in e?this._normalizeBearing(e.bearing,s):s,h="pitch"in e?+e.pitch:o,u="padding"in e?e.padding:r.padding,p=t.pointGeometry.convert(e.offset)
let d=r.centerPoint.add(p)
const m=r.pointLocation(d),f=t.LngLat.convert(e.center||m)
this._normalizeCenter(f)
const g=r.project(m),_=r.project(f).sub(g),y=r.zoomScale(l-n)
let x,v
e.around&&(x=t.LngLat.convert(e.around),v=r.locationPoint(x))
const b={moving:this._moving,zooming:this._zooming,rotating:this._rotating,pitching:this._pitching}
return this._zooming=this._zooming||l!==n,this._rotating=this._rotating||s!==c,this._pitching=this._pitching||h!==o,this._padding=!r.isPaddingEqual(u),this._easeId=e.easeId,this._prepareEase(i,e.noMoveStart,b),this._ease((e=>{if(this._zooming&&(r.zoom=t.number(n,l,e)),this._rotating&&(r.bearing=t.number(s,c,e)),this._pitching&&(r.pitch=t.number(o,h,e)),this._padding&&(r.interpolatePadding(a,u,e),d=r.centerPoint.add(p)),x)r.setLocationAtPoint(x,v)
else{const t=r.zoomScale(r.zoom-n),i=l>n?Math.min(2,y):Math.max(.5,y),s=Math.pow(i,1-e),o=r.unproject(g.add(_.mult(e*s)).mult(t))
r.setLocationAtPoint(r.renderWorldCopies?o.wrap():o,d)}this._fireMoveEvents(i)}),(t=>{this._afterEase(i,t)}),e),this}_prepareEase(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._moving=!0,i||r.moving||this.fire(new t.Event("movestart",e)),this._zooming&&!r.zooming&&this.fire(new t.Event("zoomstart",e)),this._rotating&&!r.rotating&&this.fire(new t.Event("rotatestart",e)),this._pitching&&!r.pitching&&this.fire(new t.Event("pitchstart",e))}_fireMoveEvents(e){this.fire(new t.Event("move",e)),this._zooming&&this.fire(new t.Event("zoom",e)),this._rotating&&this.fire(new t.Event("rotate",e)),this._pitching&&this.fire(new t.Event("pitch",e))}_afterEase(e,i){if(this._easeId&&i&&this._easeId===i)return
delete this._easeId
const r=this._zooming,n=this._rotating,s=this._pitching
this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,this._padding=!1,r&&this.fire(new t.Event("zoomend",e)),n&&this.fire(new t.Event("rotateend",e)),s&&this.fire(new t.Event("pitchend",e)),this.fire(new t.Event("moveend",e))}flyTo(e,i){if(!e.essential&&t.exported.prefersReducedMotion){const r=t.pick(e,["center","zoom","bearing","pitch","around"])
return this.jumpTo(r,i)}this.stop(),e=t.extend({offset:[0,0],speed:1.2,curve:1.42,easing:t.ease},e)
const r=this.transform,n=this.getZoom(),s=this.getBearing(),o=this.getPitch(),a=this.getPadding(),l="zoom"in e?t.clamp(+e.zoom,r.minZoom,r.maxZoom):n,c="bearing"in e?this._normalizeBearing(e.bearing,s):s,h="pitch"in e?+e.pitch:o,u="padding"in e?e.padding:r.padding,p=r.zoomScale(l-n),d=t.pointGeometry.convert(e.offset)
let m=r.centerPoint.add(d)
const f=r.pointLocation(m),g=t.LngLat.convert(e.center||f)
this._normalizeCenter(g)
const _=r.project(f),y=r.project(g).sub(_)
let x=e.curve
const v=Math.max(r.width,r.height),b=v/p,w=y.mag()
if("minZoom"in e){const i=t.clamp(Math.min(e.minZoom,n,l),r.minZoom,r.maxZoom),s=v/r.zoomScale(i-n)
x=Math.sqrt(s/w*2)}const S=x*x
function T(t){const e=(b*b-v*v+(t?-1:1)*S*S*w*w)/(2*(t?b:v)*S*w)
return Math.log(Math.sqrt(e*e+1)-e)}function I(t){return(Math.exp(t)-Math.exp(-t))/2}function E(t){return(Math.exp(t)+Math.exp(-t))/2}const A=T(0)
let z=function(t){return E(A)/E(A+x*t)},C=function(t){return v*((E(A)*(I(e=A+x*t)/E(e))-I(A))/S)/w
var e},P=(T(1)-A)/x
if(Math.abs(w)<1e-6||!isFinite(P)){if(Math.abs(v-b)<1e-6)return this.easeTo(e,i)
const t=b<v?-1:1
P=Math.abs(Math.log(b/v))/x,C=function(){return 0},z=function(e){return Math.exp(t*x*e)}}return e.duration="duration"in e?+e.duration:1e3*P/("screenSpeed"in e?+e.screenSpeed/x:+e.speed),e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=s!==c,this._pitching=h!==o,this._padding=!r.isPaddingEqual(u),this._prepareEase(i,!1),this._ease((e=>{const p=e*P,f=1/z(p)
r.zoom=1===e?l:n+r.scaleZoom(f),this._rotating&&(r.bearing=t.number(s,c,e)),this._pitching&&(r.pitch=t.number(o,h,e)),this._padding&&(r.interpolatePadding(a,u,e),m=r.centerPoint.add(d))
const x=1===e?g:r.unproject(_.add(y.mult(C(p))).mult(f))
r.setLocationAtPoint(r.renderWorldCopies?x.wrap():x,m),this._fireMoveEvents(i)}),(()=>this._afterEase(i)),e),this}isEasing(){return!!this._easeFrameId}stop(){return this._stop()}_stop(t,e){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){const t=this._onEaseEnd
delete this._onEaseEnd,t.call(this,e)}if(!t){const t=this.handlers
t&&t.stop(!1)}return this}_ease(e,i,r){!1===r.animate||0===r.duration?(e(1),i()):(this._easeStart=t.exported.now(),this._easeOptions=r,this._onEaseFrame=e,this._onEaseEnd=i,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback))}_renderFrameCallback(){const e=Math.min((t.exported.now()-this._easeStart)/this._easeOptions.duration,1)
this._onEaseFrame(this._easeOptions.easing(e)),e<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop()}_normalizeBearing(e,i){e=t.wrap(e,-180,180)
const r=Math.abs(e-i)
return Math.abs(e-360-i)<r&&(e-=360),Math.abs(e+360-i)<r&&(e+=360),e}_normalizeCenter(t){const e=this.transform
if(!e.renderWorldCopies||e.lngRange)return
const i=t.lng-e.center.lng
t.lng+=i>180?-360:i<-180?360:0}}class Yr{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=e,t.bindAll(["_toggleAttribution","_updateData","_updateCompact","_updateCompactMinimize"],this)}getDefaultPosition(){return"bottom-right"}onAdd(t){return this._map=t,this._compact=this.options&&this.options.compact,this._container=s.create("details","maplibregl-ctrl maplibregl-ctrl-attrib mapboxgl-ctrl mapboxgl-ctrl-attrib"),this._compactButton=s.create("summary","maplibregl-ctrl-attrib-button mapboxgl-ctrl-attrib-button",this._container),this._compactButton.addEventListener("click",this._toggleAttribution),this._setElementTitle(this._compactButton,"ToggleAttribution"),this._innerContainer=s.create("div","maplibregl-ctrl-attrib-inner mapboxgl-ctrl-attrib-inner",this._container),this._updateAttributions(),this._updateCompact(),this._map.on("styledata",this._updateData),this._map.on("sourcedata",this._updateData),this._map.on("resize",this._updateCompact),this._map.on("drag",this._updateCompactMinimize),this._container}onRemove(){s.remove(this._container),this._map.off("styledata",this._updateData),this._map.off("sourcedata",this._updateData),this._map.off("resize",this._updateCompact),this._map.off("drag",this._updateCompactMinimize),this._map=void 0,this._compact=void 0,this._attribHTML=void 0}_setElementTitle(t,e){const i=this._map._getUIString(`AttributionControl.${e}`)
t.title=i,t.setAttribute("aria-label",i)}_toggleAttribution(){this._container.classList.contains("maplibregl-compact")&&(this._container.classList.contains("maplibregl-compact-show")?(this._container.setAttribute("open",""),this._container.classList.remove("maplibregl-compact-show","mapboxgl-compact-show")):(this._container.classList.add("maplibregl-compact-show","mapboxgl-compact-show"),this._container.removeAttribute("open")))}_updateData(t){!t||"metadata"!==t.sourceDataType&&"visibility"!==t.sourceDataType&&"style"!==t.dataType||this._updateAttributions()}_updateAttributions(){if(!this._map.style)return
let t=[]
if(this.options.customAttribution&&(Array.isArray(this.options.customAttribution)?t=t.concat(this.options.customAttribution.map((t=>"string"!=typeof t?"":t))):"string"==typeof this.options.customAttribution&&t.push(this.options.customAttribution)),this._map.style.stylesheet){const t=this._map.style.stylesheet
this.styleOwner=t.owner,this.styleId=t.id}const e=this._map.style.sourceCaches
for(const r in e){const i=e[r]
if(i.used){const e=i.getSource()
e.attribution&&t.indexOf(e.attribution)<0&&t.push(e.attribution)}}t=t.filter((t=>String(t).trim())),t.sort(((t,e)=>t.length-e.length)),t=t.filter(((e,i)=>{for(let r=i+1;r<t.length;r++)if(t[r].indexOf(e)>=0)return!1
return!0}))
const i=t.join(" | ")
i!==this._attribHTML&&(this._attribHTML=i,t.length?(this._innerContainer.innerHTML=i,this._container.classList.remove("maplibregl-attrib-empty","mapboxgl-attrib-empty")):this._container.classList.add("maplibregl-attrib-empty","mapboxgl-attrib-empty"),this._updateCompact(),this._editLink=null)}_updateCompact(){this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1===this._compact?this._container.setAttribute("open",""):this._container.classList.contains("maplibregl-compact")||this._container.classList.contains("maplibregl-attrib-empty")||(this._container.setAttribute("open",""),this._container.classList.add("maplibregl-compact","mapboxgl-compact","maplibregl-compact-show","mapboxgl-compact-show")):(this._container.setAttribute("open",""),this._container.classList.contains("maplibregl-compact")&&this._container.classList.remove("maplibregl-compact","maplibregl-compact-show","mapboxgl-compact","mapboxgl-compact-show"))}_updateCompactMinimize(){this._container.classList.contains("maplibregl-compact")&&this._container.classList.contains("maplibregl-compact-show")&&this._container.classList.remove("maplibregl-compact-show","mapboxgl-compact-show")}}class Jr{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=e,t.bindAll(["_updateCompact"],this)}getDefaultPosition(){return"bottom-left"}onAdd(t){this._map=t,this._compact=this.options&&this.options.compact,this._container=s.create("div","maplibregl-ctrl mapboxgl-ctrl")
const e=s.create("a","maplibregl-ctrl-logo mapboxgl-ctrl-logo")
return e.target="_blank",e.rel="noopener nofollow",e.href="https://maplibre.org/",e.setAttribute("aria-label",this._map._getUIString("LogoControl.Title")),e.setAttribute("rel","noopener nofollow"),this._container.appendChild(e),this._container.style.display="block",this._map.on("resize",this._updateCompact),this._updateCompact(),this._container}onRemove(){s.remove(this._container),this._map.off("resize",this._updateCompact),this._map=void 0,this._compact=void 0}_updateCompact(){const t=this._container.children
if(t.length){const e=t[0]
this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1!==this._compact&&e.classList.add("maplibregl-compact","mapboxgl-compact"):e.classList.remove("maplibregl-compact","mapboxgl-compact")}}}class Qr{constructor(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1}add(t){const e=++this._id
return this._queue.push({callback:t,id:e,cancelled:!1}),e}remove(t){const e=this._currentlyRunning,i=e?this._queue.concat(e):this._queue
for(const r of i)if(r.id===t)return void(r.cancelled=!0)}run(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
const e=this._currentlyRunning=this._queue
this._queue=[]
for(const i of e)if(!i.cancelled&&(i.callback(t),this._cleared))break
this._cleared=!1,this._currentlyRunning=!1}clear(){this._currentlyRunning&&(this._cleared=!0),this._queue=[]}}const tn={"AttributionControl.ToggleAttribution":"Toggle attribution","AttributionControl.MapFeedback":"Map feedback","FullscreenControl.Enter":"Enter fullscreen","FullscreenControl.Exit":"Exit fullscreen","GeolocateControl.FindMyLocation":"Find my location","GeolocateControl.LocationNotAvailable":"Location not available","LogoControl.Title":"Mapbox logo","NavigationControl.ResetBearing":"Reset bearing to north","NavigationControl.ZoomIn":"Zoom in","NavigationControl.ZoomOut":"Zoom out","ScaleControl.Feet":"ft","ScaleControl.Meters":"m","ScaleControl.Kilometers":"km","ScaleControl.Miles":"mi","ScaleControl.NauticalMiles":"nm"},en={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:-2,maxZoom:22,minPitch:0,maxPitch:60,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,bearingSnap:7,clickTolerance:3,pitchWithRotate:!0,hash:!1,attributionControl:!0,maplibreLogo:!1,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,localIdeographFontFamily:"sans-serif",transformRequest:null,fadeDuration:300,crossSourceCollisions:!0},rn={showCompass:!0,showZoom:!0,visualizePitch:!1}
class nn{constructor(e,i){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
this._clickTolerance=10,this.element=i,this.mouseRotate=new Sr({clickTolerance:e.dragRotate._mouseRotate._clickTolerance}),this.map=e,r&&(this.mousePitch=new Tr({clickTolerance:e.dragRotate._mousePitch._clickTolerance})),t.bindAll(["mousedown","mousemove","mouseup","touchstart","touchmove","touchend","reset"],this),s.addEventListener(i,"mousedown",this.mousedown),s.addEventListener(i,"touchstart",this.touchstart,{passive:!1}),s.addEventListener(i,"touchmove",this.touchmove),s.addEventListener(i,"touchend",this.touchend),s.addEventListener(i,"touchcancel",this.reset)}down(t,e){this.mouseRotate.mousedown(t,e),this.mousePitch&&this.mousePitch.mousedown(t,e),s.disableDrag()}move(t,e){const i=this.map,r=this.mouseRotate.mousemoveWindow(t,e)
if(r&&r.bearingDelta&&i.setBearing(i.getBearing()+r.bearingDelta),this.mousePitch){const r=this.mousePitch.mousemoveWindow(t,e)
r&&r.pitchDelta&&i.setPitch(i.getPitch()+r.pitchDelta)}}off(){const t=this.element
s.removeEventListener(t,"mousedown",this.mousedown),s.removeEventListener(t,"touchstart",this.touchstart,{passive:!1}),s.removeEventListener(t,"touchmove",this.touchmove),s.removeEventListener(t,"touchend",this.touchend),s.removeEventListener(t,"touchcancel",this.reset),this.offTemp()}offTemp(){s.enableDrag(),s.removeEventListener(window,"mousemove",this.mousemove),s.removeEventListener(window,"mouseup",this.mouseup)}mousedown(e){this.down(t.extend({},e,{ctrlKey:!0,preventDefault:()=>e.preventDefault()}),s.mousePos(this.element,e)),s.addEventListener(window,"mousemove",this.mousemove),s.addEventListener(window,"mouseup",this.mouseup)}mousemove(t){this.move(t,s.mousePos(this.element,t))}mouseup(t){this.mouseRotate.mouseupWindow(t),this.mousePitch&&this.mousePitch.mouseupWindow(t),this.offTemp()}touchstart(t){1!==t.targetTouches.length?this.reset():(this._startPos=this._lastPos=s.touchPos(this.element,t.targetTouches)[0],this.down({type:"mousedown",button:0,ctrlKey:!0,preventDefault:()=>t.preventDefault()},this._startPos))}touchmove(t){1!==t.targetTouches.length?this.reset():(this._lastPos=s.touchPos(this.element,t.targetTouches)[0],this.move({preventDefault:()=>t.preventDefault()},this._lastPos))}touchend(t){0===t.targetTouches.length&&this._startPos&&this._lastPos&&this._startPos.dist(this._lastPos)<this._clickTolerance&&this.element.click(),this.reset()}reset(){this.mouseRotate.reset(),this.mousePitch&&this.mousePitch.reset(),delete this._startPos,delete this._lastPos,this.offTemp()}}function sn(e,i,r){if(e=new t.LngLat(e.lng,e.lat),i){const n=new t.LngLat(e.lng-360,e.lat),s=new t.LngLat(e.lng+360,e.lat),o=r.locationPoint(e).distSqr(i)
r.locationPoint(n).distSqr(i)<o?e=n:r.locationPoint(s).distSqr(i)<o&&(e=s)}for(;Math.abs(e.lng-r.center.lng)>180;){const t=r.locationPoint(e)
if(t.x>=0&&t.y>=0&&t.x<=r.width&&t.y<=r.height)break
e.lng>r.center.lng?e.lng-=360:e.lng+=360}return e}const on={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"}
function an(t,e,i){const r=t.classList
for(const n in on)r.remove(`maplibregl-${i}-anchor-${n}`,`mapboxgl-${i}-anchor-${n}`)
r.add(`maplibregl-${i}-anchor-${e}`,`mapboxgl-${i}-anchor-${e}`)}class ln extends t.Evented{constructor(e,i){if(super(),(e instanceof HTMLElement||i)&&(e=t.extend({element:e},i)),t.bindAll(["_update","_onMove","_onUp","_addDragHandler","_onMapClick","_onKeyPress"],this),this._anchor=e&&e.anchor||"center",this._color=e&&e.color||"#3FB1CE",this._scale=e&&e.scale||1,this._draggable=e&&e.draggable||!1,this._clickTolerance=e&&e.clickTolerance||0,this._isDragging=!1,this._state="inactive",this._rotation=e&&e.rotation||0,this._rotationAlignment=e&&e.rotationAlignment||"auto",this._pitchAlignment=e&&e.pitchAlignment&&"auto"!==e.pitchAlignment?e.pitchAlignment:this._rotationAlignment,e&&e.element)this._element=e.element,this._offset=t.pointGeometry.convert(e&&e.offset||[0,0])
else{this._defaultMarker=!0,this._element=s.create("div"),this._element.setAttribute("aria-label","Map marker")
const i=s.createNS("http://www.w3.org/2000/svg","svg"),r=41,n=27
i.setAttributeNS(null,"display","block"),i.setAttributeNS(null,"height",`${r}px`),i.setAttributeNS(null,"width",`${n}px`),i.setAttributeNS(null,"viewBox",`0 0 ${n} ${r}`)
const o=s.createNS("http://www.w3.org/2000/svg","g")
o.setAttributeNS(null,"stroke","none"),o.setAttributeNS(null,"stroke-width","1"),o.setAttributeNS(null,"fill","none"),o.setAttributeNS(null,"fill-rule","evenodd")
const a=s.createNS("http://www.w3.org/2000/svg","g")
a.setAttributeNS(null,"fill-rule","nonzero")
const l=s.createNS("http://www.w3.org/2000/svg","g")
l.setAttributeNS(null,"transform","translate(3.0, 29.0)"),l.setAttributeNS(null,"fill","#000000")
const c=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}]
for(const t of c){const e=s.createNS("http://www.w3.org/2000/svg","ellipse")
e.setAttributeNS(null,"opacity","0.04"),e.setAttributeNS(null,"cx","10.5"),e.setAttributeNS(null,"cy","5.80029008"),e.setAttributeNS(null,"rx",t.rx),e.setAttributeNS(null,"ry",t.ry),l.appendChild(e)}const h=s.createNS("http://www.w3.org/2000/svg","g")
h.setAttributeNS(null,"fill",this._color)
const u=s.createNS("http://www.w3.org/2000/svg","path")
u.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),h.appendChild(u)
const p=s.createNS("http://www.w3.org/2000/svg","g")
p.setAttributeNS(null,"opacity","0.25"),p.setAttributeNS(null,"fill","#000000")
const d=s.createNS("http://www.w3.org/2000/svg","path")
d.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),p.appendChild(d)
const m=s.createNS("http://www.w3.org/2000/svg","g")
m.setAttributeNS(null,"transform","translate(6.0, 7.0)"),m.setAttributeNS(null,"fill","#FFFFFF")
const f=s.createNS("http://www.w3.org/2000/svg","g")
f.setAttributeNS(null,"transform","translate(8.0, 8.0)")
const g=s.createNS("http://www.w3.org/2000/svg","circle")
g.setAttributeNS(null,"fill","#000000"),g.setAttributeNS(null,"opacity","0.25"),g.setAttributeNS(null,"cx","5.5"),g.setAttributeNS(null,"cy","5.5"),g.setAttributeNS(null,"r","5.4999962")
const _=s.createNS("http://www.w3.org/2000/svg","circle")
_.setAttributeNS(null,"fill","#FFFFFF"),_.setAttributeNS(null,"cx","5.5"),_.setAttributeNS(null,"cy","5.5"),_.setAttributeNS(null,"r","5.4999962"),f.appendChild(g),f.appendChild(_),a.appendChild(l),a.appendChild(h),a.appendChild(p),a.appendChild(m),a.appendChild(f),i.appendChild(a),i.setAttributeNS(null,"height",r*this._scale+"px"),i.setAttributeNS(null,"width",n*this._scale+"px"),this._element.appendChild(i),this._offset=t.pointGeometry.convert(e&&e.offset||[0,-14])}this._element.classList.add("maplibregl-marker","mapboxgl-marker"),this._element.addEventListener("dragstart",(t=>{t.preventDefault()})),this._element.addEventListener("mousedown",(t=>{t.preventDefault()})),an(this._element,this._anchor,"marker"),this._popup=null}addTo(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this.setDraggable(this._draggable),this._update(),this._map.on("click",this._onMapClick),this}remove(){return this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler),this._map.off("mouseup",this._onUp),this._map.off("touchend",this._onUp),this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),delete this._map),s.remove(this._element),this._popup&&this._popup.remove(),this}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this}getElement(){return this._element}setPopup(t){if(this._popup&&(this._popup.remove(),this._popup=null,this._element.removeEventListener("keypress",this._onKeyPress),this._originalTabIndex||this._element.removeAttribute("tabindex")),t){if(!("offset"in t.options)){const e=38.1,i=13.5,r=Math.sqrt(Math.pow(i,2)/2)
t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-e],"bottom-left":[r,-1*(e-i+r)],"bottom-right":[-r,-1*(e-i+r)],left:[i,-1*(e-i)],right:[-i,-1*(e-i)]}:this._offset}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat),this._originalTabIndex=this._element.getAttribute("tabindex"),this._originalTabIndex||this._element.setAttribute("tabindex","0"),this._element.addEventListener("keypress",this._onKeyPress)}return this}_onKeyPress(t){const e=t.code,i=t.charCode||t.keyCode
"Space"!==e&&"Enter"!==e&&32!==i&&13!==i||this.togglePopup()}_onMapClick(t){const e=t.originalEvent.target,i=this._element
this._popup&&(e===i||i.contains(e))&&this.togglePopup()}getPopup(){return this._popup}togglePopup(){const t=this._popup
return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this}_update(t){if(!this._map)return
this._map.transform.renderWorldCopies&&(this._lngLat=sn(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset)
let e=""
"viewport"===this._rotationAlignment||"auto"===this._rotationAlignment?e=`rotateZ(${this._rotation}deg)`:"map"===this._rotationAlignment&&(e=`rotateZ(${this._rotation-this._map.getBearing()}deg)`)
let i=""
"viewport"===this._pitchAlignment||"auto"===this._pitchAlignment?i="rotateX(0deg)":"map"===this._pitchAlignment&&(i=`rotateX(${this._map.getPitch()}deg)`),t&&"moveend"!==t.type||(this._pos=this._pos.round()),s.setTransform(this._element,`${on[this._anchor]} translate(${this._pos.x}px, ${this._pos.y}px) ${i} ${e}`)}getOffset(){return this._offset}setOffset(e){return this._offset=t.pointGeometry.convert(e),this._update(),this}_onMove(e){if(!this._isDragging){const t=this._clickTolerance||this._map._clickTolerance
this._isDragging=e.point.dist(this._pointerdownPos)>=t}this._isDragging&&(this._pos=e.point.sub(this._positionDelta),this._lngLat=this._map.unproject(this._pos),this.setLngLat(this._lngLat),this._element.style.pointerEvents="none","pending"===this._state&&(this._state="active",this.fire(new t.Event("dragstart"))),this.fire(new t.Event("drag")))}_onUp(){this._element.style.pointerEvents="auto",this._positionDelta=null,this._pointerdownPos=null,this._isDragging=!1,this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),"active"===this._state&&this.fire(new t.Event("dragend")),this._state="inactive"}_addDragHandler(t){this._element.contains(t.originalEvent.target)&&(t.preventDefault(),this._positionDelta=t.point.sub(this._pos).add(this._offset),this._pointerdownPos=t.point,this._state="pending",this._map.on("mousemove",this._onMove),this._map.on("touchmove",this._onMove),this._map.once("mouseup",this._onUp),this._map.once("touchend",this._onUp))}setDraggable(t){return this._draggable=!!t,this._map&&(t?(this._map.on("mousedown",this._addDragHandler),this._map.on("touchstart",this._addDragHandler)):(this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler))),this}isDraggable(){return this._draggable}setRotation(t){return this._rotation=t||0,this._update(),this}getRotation(){return this._rotation}setRotationAlignment(t){return this._rotationAlignment=t||"auto",this._update(),this}getRotationAlignment(){return this._rotationAlignment}setPitchAlignment(t){return this._pitchAlignment=t&&"auto"!==t?t:this._rotationAlignment,this._update(),this}getPitchAlignment(){return this._pitchAlignment}}const cn={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showAccuracyCircle:!0,showUserLocation:!0}
let hn,un=0,pn=!1
const dn={maxWidth:100,unit:"metric"}
function mn(t,e,i){const r=i&&i.maxWidth||100,n=t._container.clientHeight/2,s=t.unproject([0,n]),o=t.unproject([r,n]),a=s.distanceTo(o)
if(i&&"imperial"===i.unit){const i=3.2808*a
i>5280?fn(e,r,i/5280,t._getUIString("ScaleControl.Miles")):fn(e,r,i,t._getUIString("ScaleControl.Feet"))}else i&&"nautical"===i.unit?fn(e,r,a/1852,t._getUIString("ScaleControl.NauticalMiles")):a>=1e3?fn(e,r,a/1e3,t._getUIString("ScaleControl.Kilometers")):fn(e,r,a,t._getUIString("ScaleControl.Meters"))}function fn(t,e,i,r){const n=function(t){const e=Math.pow(10,`${Math.floor(t)}`.length-1)
let i=t/e
return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:i>=1?1:function(t){const e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10))
return Math.round(t*e)/e}(i),e*i}(i)
t.style.width=e*(n/i)+"px",t.innerHTML=`${n}&nbsp;${r}`}const gn={closeButton:!0,closeOnClick:!0,focusAfterOpen:!0,className:"",maxWidth:"240px"},_n=["a[href]","[tabindex]:not([tabindex='-1'])","[contenteditable]:not([contenteditable='false'])","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].join(", ")
function yn(e){if(e){if("number"==typeof e){const i=Math.round(Math.sqrt(.5*Math.pow(e,2)))
return{center:new t.pointGeometry(0,0),top:new t.pointGeometry(0,e),"top-left":new t.pointGeometry(i,i),"top-right":new t.pointGeometry(-i,i),bottom:new t.pointGeometry(0,-e),"bottom-left":new t.pointGeometry(i,-i),"bottom-right":new t.pointGeometry(-i,-i),left:new t.pointGeometry(e,0),right:new t.pointGeometry(-e,0)}}if(e instanceof t.pointGeometry||Array.isArray(e)){const i=t.pointGeometry.convert(e)
return{center:i,top:i,"top-left":i,"top-right":i,bottom:i,"bottom-left":i,"bottom-right":i,left:i,right:i}}return{center:t.pointGeometry.convert(e.center||[0,0]),top:t.pointGeometry.convert(e.top||[0,0]),"top-left":t.pointGeometry.convert(e["top-left"]||[0,0]),"top-right":t.pointGeometry.convert(e["top-right"]||[0,0]),bottom:t.pointGeometry.convert(e.bottom||[0,0]),"bottom-left":t.pointGeometry.convert(e["bottom-left"]||[0,0]),"bottom-right":t.pointGeometry.convert(e["bottom-right"]||[0,0]),left:t.pointGeometry.convert(e.left||[0,0]),right:t.pointGeometry.convert(e.right||[0,0])}}return yn(new t.pointGeometry(0,0))}const xn={supported:e,setRTLTextPlugin:t.setRTLTextPlugin,getRTLTextPluginStatus:t.getRTLTextPluginStatus,Map:class extends Kr{constructor(e){var i
if(t.PerformanceUtils.mark(t.PerformanceMarkers.create),null!=(e=t.extend({},en,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than or equal to minZoom")
if(null!=e.minPitch&&null!=e.maxPitch&&e.minPitch>e.maxPitch)throw new Error("maxPitch must be greater than or equal to minPitch")
if(null!=e.minPitch&&e.minPitch<0)throw new Error("minPitch must be greater than or equal to 0")
if(null!=e.maxPitch&&e.maxPitch>85)throw new Error("maxPitch must be less than or equal to 85")
if(super(new tr(e.minZoom,e.maxZoom,e.minPitch,e.maxPitch,e.renderWorldCopies),{bearingSnap:e.bearingSnap}),this._interactive=e.interactive,this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._antialias=e.antialias,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossSourceCollisions=e.crossSourceCollisions,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new Qr,this._controls=[],this._mapId=t.uniqueId(),this._locale=t.extend({},tn,e.locale),this._clickTolerance=e.clickTolerance,this._pixelRatio=null!==(i=e.pixelRatio)&&void 0!==i?i:devicePixelRatio,this._requestManager=new o(e.transformRequest),"string"==typeof e.container){if(this._container=document.getElementById(e.container),!this._container)throw new Error(`Container '${e.container}' not found.`)}else{if(!(e.container instanceof HTMLElement))throw new Error("Invalid type: 'container' must be a String or HTMLElement.")
this._container=e.container}if(e.maxBounds&&this.setMaxBounds(e.maxBounds),t.bindAll(["_onWindowOnline","_onWindowResize","_onMapScroll","_contextLost","_contextRestored"],this),this._setupContainer(),this._setupPainter(),void 0===this.painter)throw new Error("Failed to initialize WebGL.")
this.on("move",(()=>this._update(!1))),this.on("moveend",(()=>this._update(!1))),this.on("zoom",(()=>this._update(!0))),"undefined"!=typeof window&&(addEventListener("online",this._onWindowOnline,!1),addEventListener("resize",this._onWindowResize,!1),addEventListener("orientationchange",this._onWindowResize,!1)),this.handlers=new Wr(this,e),this._hash=e.hash&&new er("string"==typeof e.hash&&e.hash||void 0).addTo(this),this._hash&&this._hash._onHashChange()||(this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),e.bounds&&(this.resize(),this.fitBounds(e.bounds,t.extend({},e.fitBoundsOptions,{duration:0})))),this.resize(),this._localIdeographFontFamily=e.localIdeographFontFamily,e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new Yr({customAttribution:e.customAttribution})),e.maplibreLogo&&this.addControl(new Jr,e.logoPosition),this.on("style.load",(()=>{this.transform.unmodified&&this.jumpTo(this.style.stylesheet)})),this.on("data",(e=>{this._update("style"===e.dataType),this.fire(new t.Event(`${e.dataType}data`,e))})),this.on("dataloading",(e=>{this.fire(new t.Event(`${e.dataType}dataloading`,e))})),this.on("dataabort",(e=>{this.fire(new t.Event("sourcedataabort",e))}))}_getMapId(){return this._mapId}addControl(e,i){if(void 0===i&&(i=e.getDefaultPosition?e.getDefaultPosition():"top-right"),!e||!e.onAdd)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.addControl(). Argument must be a control with onAdd and onRemove methods.")))
const r=e.onAdd(this)
this._controls.push(e)
const n=this._controlPositions[i]
return-1!==i.indexOf("bottom")?n.insertBefore(r,n.firstChild):n.appendChild(r),this}removeControl(e){if(!e||!e.onRemove)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.removeControl(). Argument must be a control with onAdd and onRemove methods.")))
const i=this._controls.indexOf(e)
return i>-1&&this._controls.splice(i,1),e.onRemove(this),this}hasControl(t){return this._controls.indexOf(t)>-1}resize(e){const i=this._containerDimensions(),r=i[0],n=i[1]
this._resizeCanvas(r,n,this.getPixelRatio()),this.transform.resize(r,n),this.painter.resize(r,n,this.getPixelRatio())
const s=!this._moving
return s&&(this.stop(),this.fire(new t.Event("movestart",e)).fire(new t.Event("move",e))),this.fire(new t.Event("resize",e)),s&&this.fire(new t.Event("moveend",e)),this}getPixelRatio(){return this._pixelRatio}setPixelRatio(t){const[e,i]=this._containerDimensions()
this._pixelRatio=t,this._resizeCanvas(e,i,t),this.painter.resize(e,i,t)}getBounds(){return this.transform.getBounds()}getMaxBounds(){return this.transform.getMaxBounds()}setMaxBounds(e){return this.transform.setMaxBounds(t.LngLatBounds.convert(e)),this._update()}setMinZoom(t){if((t=null==t?-2:t)>=-2&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this
throw new Error("minZoom must be between -2 and the current maxZoom, inclusive")}getMinZoom(){return this.transform.minZoom}setMaxZoom(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this
throw new Error("maxZoom must be greater than the current minZoom")}getMaxZoom(){return this.transform.maxZoom}setMinPitch(t){if((t=null==t?0:t)<0)throw new Error("minPitch must be greater than or equal to 0")
if(t>=0&&t<=this.transform.maxPitch)return this.transform.minPitch=t,this._update(),this.getPitch()<t&&this.setPitch(t),this
throw new Error("minPitch must be between 0 and the current maxPitch, inclusive")}getMinPitch(){return this.transform.minPitch}setMaxPitch(t){if((t=null==t?60:t)>85)throw new Error("maxPitch must be less than or equal to 85")
if(t>=this.transform.minPitch)return this.transform.maxPitch=t,this._update(),this.getPitch()>t&&this.setPitch(t),this
throw new Error("maxPitch must be greater than the current minPitch")}getMaxPitch(){return this.transform.maxPitch}getRenderWorldCopies(){return this.transform.renderWorldCopies}setRenderWorldCopies(t){return this.transform.renderWorldCopies=t,this._update()}project(e){return this.transform.locationPoint(t.LngLat.convert(e))}unproject(e){return this.transform.pointLocation(t.pointGeometry.convert(e))}isMoving(){return this._moving||this.handlers.isMoving()}isZooming(){return this._zooming||this.handlers.isZooming()}isRotating(){return this._rotating||this.handlers.isRotating()}_createDelegatedListener(t,e,i){if("mouseenter"===t||"mouseover"===t){let r=!1
const n=n=>{const s=this.getLayer(e)?this.queryRenderedFeatures(n.point,{layers:[e]}):[]
s.length?r||(r=!0,i.call(this,new hr(t,this,n.originalEvent,{features:s}))):r=!1}
return{layer:e,listener:i,delegates:{mousemove:n,mouseout:()=>{r=!1}}}}if("mouseleave"===t||"mouseout"===t){let r=!1
const n=n=>{(this.getLayer(e)?this.queryRenderedFeatures(n.point,{layers:[e]}):[]).length?r=!0:r&&(r=!1,i.call(this,new hr(t,this,n.originalEvent)))},s=e=>{r&&(r=!1,i.call(this,new hr(t,this,e.originalEvent)))}
return{layer:e,listener:i,delegates:{mousemove:n,mouseout:s}}}{const r=t=>{const r=this.getLayer(e)?this.queryRenderedFeatures(t.point,{layers:[e]}):[]
r.length&&(t.features=r,i.call(this,t),delete t.features)}
return{layer:e,listener:i,delegates:{[t]:r}}}}on(t,e,i){if(void 0===i)return super.on(t,e)
const r=this._createDelegatedListener(t,e,i)
this._delegatedListeners=this._delegatedListeners||{},this._delegatedListeners[t]=this._delegatedListeners[t]||[],this._delegatedListeners[t].push(r)
for(const n in r.delegates)this.on(n,r.delegates[n])
return this}once(t,e,i){if(void 0===i)return super.once(t,e)
const r=this._createDelegatedListener(t,e,i)
for(const n in r.delegates)this.once(n,r.delegates[n])
return this}off(t,e,i){return void 0===i?super.off(t,e):(this._delegatedListeners&&this._delegatedListeners[t]&&(r=>{const n=this._delegatedListeners[t]
for(let t=0;t<n.length;t++){const r=n[t]
if(r.layer===e&&r.listener===i){for(const t in r.delegates)this.off(t,r.delegates[t])
return n.splice(t,1),this}}})(),this)}queryRenderedFeatures(e,i){if(!this.style)return[]
let r
if(void 0!==i||void 0===e||e instanceof t.pointGeometry||Array.isArray(e)||(i=e,e=void 0),i=i||{},(e=e||[[0,0],[this.transform.width,this.transform.height]])instanceof t.pointGeometry||"number"==typeof e[0])r=[t.pointGeometry.convert(e)]
else{const i=t.pointGeometry.convert(e[0]),n=t.pointGeometry.convert(e[1])
r=[i,new t.pointGeometry(n.x,i.y),n,new t.pointGeometry(i.x,n.y),i]}return this.style.queryRenderedFeatures(r,i,this.transform)}querySourceFeatures(t,e){return this.style.querySourceFeatures(t,e)}setStyle(e,i){return!1!==(i=t.extend({},{localIdeographFontFamily:this._localIdeographFontFamily},i)).diff&&i.localIdeographFontFamily===this._localIdeographFontFamily&&this.style&&e?(this._diffStyle(e,i),this):(this._localIdeographFontFamily=i.localIdeographFontFamily,this._updateStyle(e,i))}setTransformRequest(t){return this._requestManager.setTransformRequest(t),this}_getUIString(t){const e=this._locale[t]
if(null==e)throw new Error(`Missing UI string '${t}'`)
return e}_updateStyle(t,e){return this.style&&(this.style.setEventedParent(null),this.style._remove()),t?(this.style=new ie(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t):this.style.loadJSON(t),this):(delete this.style,this)}_lazyInitEmptyStyle(){this.style||(this.style=new ie(this,{}),this.style.setEventedParent(this,{style:this.style}),this.style.loadEmpty())}_diffStyle(e,i){if("string"==typeof e){const r=this._requestManager.transformRequest(e,t.ResourceType.Style)
t.getJSON(r,((e,r)=>{e?this.fire(new t.ErrorEvent(e)):r&&this._updateDiff(r,i)}))}else"object"==typeof e&&this._updateDiff(e,i)}_updateDiff(e,i){try{this.style.setState(e)&&this._update(!0)}catch(r){t.warnOnce(`Unable to perform style diff: ${r.message||r.error||r}.  Rebuilding the style from scratch.`),this._updateStyle(e,i)}}getStyle(){if(this.style)return this.style.serialize()}isStyleLoaded(){return this.style?this.style.loaded():t.warnOnce("There is no style added to the map.")}addSource(t,e){return this._lazyInitEmptyStyle(),this.style.addSource(t,e),this._update(!0)}isSourceLoaded(e){const i=this.style&&this.style.sourceCaches[e]
if(void 0!==i)return i.loaded()
this.fire(new t.ErrorEvent(new Error(`There is no source with ID '${e}'`)))}areTilesLoaded(){const t=this.style&&this.style.sourceCaches
for(const e in t){const i=t[e]._tiles
for(const t in i){const e=i[t]
if("loaded"!==e.state&&"errored"!==e.state)return!1}}return!0}addSourceType(t,e,i){return this._lazyInitEmptyStyle(),this.style.addSourceType(t,e,i)}removeSource(t){return this.style.removeSource(t),this._update(!0)}getSource(t){return this.style.getSource(t)}addImage(e,i){let{pixelRatio:r=1,sdf:n=!1,stretchX:s,stretchY:o,content:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(this._lazyInitEmptyStyle(),i instanceof HTMLImageElement||t.isImageBitmap(i)){const{width:l,height:c,data:h}=t.exported.getImageData(i)
this.style.addImage(e,{data:new t.RGBAImage({width:l,height:c},h),pixelRatio:r,stretchX:s,stretchY:o,content:a,sdf:n,version:0})}else{if(void 0===i.width||void 0===i.height)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")))
{const{width:l,height:c,data:h}=i,u=i
this.style.addImage(e,{data:new t.RGBAImage({width:l,height:c},new Uint8Array(h)),pixelRatio:r,stretchX:s,stretchY:o,content:a,sdf:n,version:0,userImage:u}),u.onAdd&&u.onAdd(this,e)}}}updateImage(e,i){const r=this.style.getImage(e)
if(!r)return this.fire(new t.ErrorEvent(new Error("The map has no image with that id. If you are adding a new image use `map.addImage(...)` instead.")))
const n=i instanceof HTMLImageElement||t.isImageBitmap(i)?t.exported.getImageData(i):i,{width:s,height:o,data:a}=n
if(void 0===s||void 0===o)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.updateImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")))
if(s!==r.data.width||o!==r.data.height)return this.fire(new t.ErrorEvent(new Error("The width and height of the updated image must be that same as the previous version of the image")))
const l=!(i instanceof HTMLImageElement||t.isImageBitmap(i))
r.data.replace(a,l),this.style.updateImage(e,r)}hasImage(e){return e?!!this.style.getImage(e):(this.fire(new t.ErrorEvent(new Error("Missing required image id"))),!1)}removeImage(t){this.style.removeImage(t)}loadImage(e,i){t.getImage(this._requestManager.transformRequest(e,t.ResourceType.Image),i)}listImages(){return this.style.listImages()}addLayer(t,e){return this._lazyInitEmptyStyle(),this.style.addLayer(t,e),this._update(!0)}moveLayer(t,e){return this.style.moveLayer(t,e),this._update(!0)}removeLayer(t){return this.style.removeLayer(t),this._update(!0)}getLayer(t){return this.style.getLayer(t)}setLayerZoomRange(t,e,i){return this.style.setLayerZoomRange(t,e,i),this._update(!0)}setFilter(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return this.style.setFilter(t,e,i),this._update(!0)}getFilter(t){return this.style.getFilter(t)}setPaintProperty(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
return this.style.setPaintProperty(t,e,i,r),this._update(!0)}getPaintProperty(t,e){return this.style.getPaintProperty(t,e)}setLayoutProperty(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
return this.style.setLayoutProperty(t,e,i,r),this._update(!0)}getLayoutProperty(t,e){return this.style.getLayoutProperty(t,e)}setLight(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this._lazyInitEmptyStyle(),this.style.setLight(t,e),this._update(!0)}getLight(){return this.style.getLight()}setFeatureState(t,e){return this.style.setFeatureState(t,e),this._update()}removeFeatureState(t,e){return this.style.removeFeatureState(t,e),this._update()}getFeatureState(t){return this.style.getFeatureState(t)}getContainer(){return this._container}getCanvasContainer(){return this._canvasContainer}getCanvas(){return this._canvas}_containerDimensions(){let t=0,e=0
return this._container&&(t=this._container.clientWidth||400,e=this._container.clientHeight||300),[t,e]}_setupContainer(){const t=this._container
t.classList.add("maplibregl-map","mapboxgl-map")
const e=this._canvasContainer=s.create("div","maplibregl-canvas-container mapboxgl-canvas-container",t)
this._interactive&&e.classList.add("maplibregl-interactive","mapboxgl-interactive"),this._canvas=s.create("canvas","maplibregl-canvas mapboxgl-canvas",e),this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map"),this._canvas.setAttribute("role","region")
const i=this._containerDimensions()
this._resizeCanvas(i[0],i[1],this.getPixelRatio())
const r=this._controlContainer=s.create("div","maplibregl-control-container mapboxgl-control-container",t),n=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach((t=>{n[t]=s.create("div",`maplibregl-ctrl-${t} mapboxgl-ctrl-${t}`,r)})),this._container.addEventListener("scroll",this._onMapScroll,!1)}_resizeCanvas(t,e,i){this._canvas.width=i*t,this._canvas.height=i*e,this._canvas.style.width=`${t}px`,this._canvas.style.height=`${e}px`}_setupPainter(){const i=t.extend({},e.webGLContextAttributes,{failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer,antialias:this._antialias||!1}),r=this._canvas.getContext("webgl",i)||this._canvas.getContext("experimental-webgl",i)
r?(this.painter=new Ki(r,this.transform),t.exported$1.testSupport(r)):this.fire(new t.ErrorEvent(new Error("Failed to initialize WebGL")))}_contextLost(e){e.preventDefault(),this._frame&&(this._frame.cancel(),this._frame=null),this.fire(new t.Event("webglcontextlost",{originalEvent:e}))}_contextRestored(e){this._setupPainter(),this.resize(),this._update(),this.fire(new t.Event("webglcontextrestored",{originalEvent:e}))}_onMapScroll(t){if(t.target===this._container)return this._container.scrollTop=0,this._container.scrollLeft=0,!1}loaded(){return!this._styleDirty&&!this._sourcesDirty&&!!this.style&&this.style.loaded()}_update(t){return this.style?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this.triggerRepaint(),this):this}_requestRenderFrame(t){return this._update(),this._renderTaskQueue.add(t)}_cancelRenderFrame(t){this._renderTaskQueue.remove(t)}_render(e){let i,r=0
const n=this.painter.context.extTimerQuery
if(this.listens("gpu-timing-frame")&&(i=n.createQueryEXT(),n.beginQueryEXT(n.TIME_ELAPSED_EXT,i),r=t.exported.now()),this.painter.context.setDirty(),this.painter.setBaseState(),this._renderTaskQueue.run(e),this._removed)return
let s=!1
if(this.style&&this._styleDirty){this._styleDirty=!1
const e=this.transform.zoom,i=t.exported.now()
this.style.zoomHistory.update(e,i)
const r=new t.EvaluationParameters(e,{now:i,fadeDuration:this._fadeDuration,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),n=r.crossFadingFactor()
1===n&&n===this._crossFadingFactor||(s=!0,this._crossFadingFactor=n),this.style.update(r)}if(this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,this._fadeDuration,this._crossSourceCollisions),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),moving:this.isMoving(),fadeDuration:this._fadeDuration,showPadding:this.showPadding,gpuTiming:!!this.listens("gpu-timing-layer")}),this.fire(new t.Event("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,t.PerformanceUtils.mark(t.PerformanceMarkers.load),this.fire(new t.Event("load"))),this.style&&(this.style.hasTransitions()||s)&&(this._styleDirty=!0),this.style&&!this._placementDirty&&this.style._releaseSymbolFadeTiles(),this.listens("gpu-timing-frame")){const e=t.exported.now()-r
n.endQueryEXT(n.TIME_ELAPSED_EXT,i),setTimeout((()=>{const r=n.getQueryObjectEXT(i,n.QUERY_RESULT_EXT)/1e6
n.deleteQueryEXT(i),this.fire(new t.Event("gpu-timing-frame",{cpuTime:e,gpuTime:r}))}),50)}if(this.listens("gpu-timing-layer")){const e=this.painter.collectGpuTimers()
setTimeout((()=>{const i=this.painter.queryGpuTimers(e)
this.fire(new t.Event("gpu-timing-layer",{layerTimes:i}))}),50)}const o=this._sourcesDirty||this._styleDirty||this._placementDirty
return o||this._repaint?this.triggerRepaint():!this.isMoving()&&this.loaded()&&this.fire(new t.Event("idle")),!this._loaded||this._fullyLoaded||o||(this._fullyLoaded=!0,t.PerformanceUtils.mark(t.PerformanceMarkers.fullLoad)),this}redraw(){return this.style&&(this._frame&&(this._frame.cancel(),this._frame=null),this._render(0)),this}remove(){this._hash&&this._hash.remove()
for(const t of this._controls)t.onRemove(this)
this._controls=[],this._frame&&(this._frame.cancel(),this._frame=null),this._renderTaskQueue.clear(),this.painter.destroy(),this.handlers.destroy(),delete this.handlers,this.setStyle(null),"undefined"!=typeof window&&(removeEventListener("resize",this._onWindowResize,!1),removeEventListener("orientationchange",this._onWindowResize,!1),removeEventListener("online",this._onWindowOnline,!1))
const e=this.painter.context.gl.getExtension("WEBGL_lose_context")
e&&e.loseContext(),this._canvas.removeEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.removeEventListener("webglcontextlost",this._contextLost,!1),s.remove(this._canvasContainer),s.remove(this._controlContainer),this._container.classList.remove("maplibregl-map","mapboxgl-map"),t.PerformanceUtils.clearMetrics(),this._removed=!0,this.fire(new t.Event("remove"))}triggerRepaint(){this.style&&!this._frame&&(this._frame=t.exported.frame((e=>{t.PerformanceUtils.frame(e),this._frame=null,this._render(e)})))}_onWindowOnline(){this._update()}_onWindowResize(t){this._trackResize&&this.resize({originalEvent:t})._update()}get showTileBoundaries(){return!!this._showTileBoundaries}set showTileBoundaries(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update())}get showPadding(){return!!this._showPadding}set showPadding(t){this._showPadding!==t&&(this._showPadding=t,this._update())}get showCollisionBoxes(){return!!this._showCollisionBoxes}set showCollisionBoxes(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update())}get showOverdrawInspector(){return!!this._showOverdrawInspector}set showOverdrawInspector(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update())}get repaint(){return!!this._repaint}set repaint(t){this._repaint!==t&&(this._repaint=t,this.triggerRepaint())}get vertices(){return!!this._vertices}set vertices(t){this._vertices=t,this._update()}_setCacheLimits(e,i){t.setCacheLimits(e,i)}},NavigationControl:class{constructor(e){this.options=t.extend({},rn,e),this._container=s.create("div","maplibregl-ctrl maplibregl-ctrl-group mapboxgl-ctrl mapboxgl-ctrl-group"),this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this.options.showZoom&&(t.bindAll(["_setButtonTitle","_updateZoomButtons"],this),this._zoomInButton=this._createButton("maplibregl-ctrl-zoom-in mapboxgl-ctrl-zoom-in",(t=>this._map.zoomIn({},{originalEvent:t}))),s.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._zoomInButton).setAttribute("aria-hidden","true"),this._zoomOutButton=this._createButton("maplibregl-ctrl-zoom-out mapboxgl-ctrl-zoom-out",(t=>this._map.zoomOut({},{originalEvent:t}))),s.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._zoomOutButton).setAttribute("aria-hidden","true")),this.options.showCompass&&(t.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("maplibregl-ctrl-compass mapboxgl-ctrl-compass",(t=>{this.options.visualizePitch?this._map.resetNorthPitch({},{originalEvent:t}):this._map.resetNorth({},{originalEvent:t})})),this._compassIcon=s.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._compass),this._compassIcon.setAttribute("aria-hidden","true"))}_updateZoomButtons(){const t=this._map.getZoom(),e=t===this._map.getMaxZoom(),i=t===this._map.getMinZoom()
this._zoomInButton.disabled=e,this._zoomOutButton.disabled=i,this._zoomInButton.setAttribute("aria-disabled",e.toString()),this._zoomOutButton.setAttribute("aria-disabled",i.toString())}_rotateCompassArrow(){const t=this.options.visualizePitch?`scale(${1/Math.pow(Math.cos(this._map.transform.pitch*(Math.PI/180)),.5)}) rotateX(${this._map.transform.pitch}deg) rotateZ(${this._map.transform.angle*(180/Math.PI)}deg)`:`rotate(${this._map.transform.angle*(180/Math.PI)}deg)`
this._compassIcon.style.transform=t}onAdd(t){return this._map=t,this.options.showZoom&&(this._setButtonTitle(this._zoomInButton,"ZoomIn"),this._setButtonTitle(this._zoomOutButton,"ZoomOut"),this._map.on("zoom",this._updateZoomButtons),this._updateZoomButtons()),this.options.showCompass&&(this._setButtonTitle(this._compass,"ResetBearing"),this.options.visualizePitch&&this._map.on("pitch",this._rotateCompassArrow),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new nn(this._map,this._compass,this.options.visualizePitch)),this._container}onRemove(){s.remove(this._container),this.options.showZoom&&this._map.off("zoom",this._updateZoomButtons),this.options.showCompass&&(this.options.visualizePitch&&this._map.off("pitch",this._rotateCompassArrow),this._map.off("rotate",this._rotateCompassArrow),this._handler.off(),delete this._handler),delete this._map}_createButton(t,e){const i=s.create("button",t,this._container)
return i.type="button",i.addEventListener("click",e),i}_setButtonTitle(t,e){const i=this._map._getUIString(`NavigationControl.${e}`)
t.title=i,t.setAttribute("aria-label",i)}},GeolocateControl:class extends t.Evented{constructor(e){super(),this.options=t.extend({},cn,e),t.bindAll(["_onSuccess","_onError","_onZoom","_finish","_setupUI","_updateCamera","_updateMarker"],this)}onAdd(t){var e
return this._map=t,this._container=s.create("div","maplibregl-ctrl maplibregl-ctrl-group mapboxgl-ctrl mapboxgl-ctrl-group"),e=this._setupUI,void 0!==hn?e(hn):void 0!==window.navigator.permissions?window.navigator.permissions.query({name:"geolocation"}).then((t=>{hn="denied"!==t.state,e(hn)})):(hn=!!window.navigator.geolocation,e(hn)),this._container}onRemove(){void 0!==this._geolocationWatchID&&(window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker&&this._userLocationDotMarker.remove(),this.options.showAccuracyCircle&&this._accuracyCircleMarker&&this._accuracyCircleMarker.remove(),s.remove(this._container),this._map.off("zoom",this._onZoom),this._map=void 0,un=0,pn=!1}_isOutOfMapMaxBounds(t){const e=this._map.getMaxBounds(),i=t.coords
return e&&(i.longitude<e.getWest()||i.longitude>e.getEast()||i.latitude<e.getSouth()||i.latitude>e.getNorth())}_setErrorState(){switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error")
break
case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting")
break
case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting")}}_onSuccess(e){if(this._map){if(this._isOutOfMapMaxBounds(e))return this._setErrorState(),this.fire(new t.Event("outofmaxbounds",e)),this._updateMarker(),void this._finish()
if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active")
break
case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background")}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("maplibregl-user-location-dot-stale","mapboxgl-user-location-dot-stale"),this.fire(new t.Event("geolocate",e)),this._finish()}}_updateCamera(e){const i=new t.LngLat(e.coords.longitude,e.coords.latitude),r=e.coords.accuracy,n=this._map.getBearing(),s=t.extend({bearing:n},this.options.fitBoundsOptions)
this._map.fitBounds(i.toBounds(r),s,{geolocateSource:!0})}_updateMarker(e){if(e){const i=new t.LngLat(e.coords.longitude,e.coords.latitude)
this._accuracyCircleMarker.setLngLat(i).addTo(this._map),this._userLocationDotMarker.setLngLat(i).addTo(this._map),this._accuracy=e.coords.accuracy,this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius()}else this._userLocationDotMarker.remove(),this._accuracyCircleMarker.remove()}_updateCircleRadius(){const t=this._map._container.clientHeight/2,e=this._map.unproject([0,t]),i=this._map.unproject([1,t]),r=e.distanceTo(i),n=Math.ceil(2*this._accuracy/r)
this._circleElement.style.width=`${n}px`,this._circleElement.style.height=`${n}px`}_onZoom(){this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius()}_onError(e){if(this._map){if(this.options.trackUserLocation)if(1===e.code){this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this._geolocateButton.disabled=!0
const t=this._map._getUIString("GeolocateControl.LocationNotAvailable")
this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t),void 0!==this._geolocationWatchID&&this._clearWatch()}else{if(3===e.code&&pn)return
this._setErrorState()}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("maplibregl-user-location-dot-stale","mapboxgl-user-location-dot-stale"),this.fire(new t.Event("error",e)),this._finish()}}_finish(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0}_setupUI(e){if(this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this._geolocateButton=s.create("button","maplibregl-ctrl-geolocate mapboxgl-ctrl-geolocate",this._container),s.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",this._geolocateButton).setAttribute("aria-hidden","true"),this._geolocateButton.type="button",!1===e){t.warnOnce("Geolocation support is not available so the GeolocateControl will be disabled.")
const e=this._map._getUIString("GeolocateControl.LocationNotAvailable")
this._geolocateButton.disabled=!0,this._geolocateButton.title=e,this._geolocateButton.setAttribute("aria-label",e)}else{const t=this._map._getUIString("GeolocateControl.FindMyLocation")
this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t)}this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=s.create("div","maplibregl-user-location-dot mapboxgl-user-location-dot"),this._userLocationDotMarker=new ln(this._dotElement),this._circleElement=s.create("div","maplibregl-user-location-accuracy-circle mapboxgl-user-location-accuracy-circle"),this._accuracyCircleMarker=new ln({element:this._circleElement,pitchAlignment:"map"}),this.options.trackUserLocation&&(this._watchState="OFF"),this._map.on("zoom",this._onZoom)),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",(e=>{e.geolocateSource||"ACTIVE_LOCK"!==this._watchState||e.originalEvent&&"resize"===e.originalEvent.type||(this._watchState="BACKGROUND",this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this.fire(new t.Event("trackuserlocationend")))}))}trigger(){if(!this._setup)return t.warnOnce("Geolocate control triggered before added to a map"),!1
if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.Event("trackuserlocationstart"))
break
case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":un--,pn=!1,this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error","mapboxgl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error","mapboxgl-ctrl-geolocate-background-error"),this.fire(new t.Event("trackuserlocationend"))
break
case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background","mapboxgl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.Event("trackuserlocationstart"))}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active")
break
case"ACTIVE_LOCK":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active","mapboxgl-ctrl-geolocate-active")}if("OFF"===this._watchState&&void 0!==this._geolocationWatchID)this._clearWatch()
else if(void 0===this._geolocationWatchID){let t
this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),un++,un>1?(t={maximumAge:6e5,timeout:0},pn=!0):(t=this.options.positionOptions,pn=!1),this._geolocationWatchID=window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,t)}}else window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4)
return!0}_clearWatch(){window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting","mapboxgl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null)}},AttributionControl:Yr,LogoControl:Jr,ScaleControl:class{constructor(e){this.options=t.extend({},dn,e),t.bindAll(["_onMove","setUnit"],this)}getDefaultPosition(){return"bottom-left"}_onMove(){mn(this._map,this._container,this.options)}onAdd(t){return this._map=t,this._container=s.create("div","maplibregl-ctrl maplibregl-ctrl-scale mapboxgl-ctrl mapboxgl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container}onRemove(){s.remove(this._container),this._map.off("move",this._onMove),this._map=void 0}setUnit(t){this.options.unit=t,mn(this._map,this._container,this.options)}},FullscreenControl:class{constructor(e){this._fullscreen=!1,e&&e.container&&(e.container instanceof HTMLElement?this._container=e.container:t.warnOnce("Full screen control 'container' must be a DOM element.")),t.bindAll(["_onClickFullscreen","_changeIcon"],this),"onfullscreenchange"in document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in document&&(this._fullscreenchange="MSFullscreenChange")}onAdd(e){return this._map=e,this._container||(this._container=this._map.getContainer()),this._controlContainer=s.create("div","maplibregl-ctrl maplibregl-ctrl-group mapboxgl-ctrl mapboxgl-ctrl-group"),this._checkFullscreenSupport()?this._setupUI():(this._controlContainer.style.display="none",t.warnOnce("This device does not support fullscreen mode.")),this._controlContainer}onRemove(){s.remove(this._controlContainer),this._map=null,window.document.removeEventListener(this._fullscreenchange,this._changeIcon)}_checkFullscreenSupport(){return!!(document.fullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.webkitFullscreenEnabled)}_setupUI(){const t=this._fullscreenButton=s.create("button","maplibregl-ctrl-fullscreen mapboxgl-ctrl-fullscreen",this._controlContainer)
s.create("span","maplibregl-ctrl-icon mapboxgl-ctrl-icon",t).setAttribute("aria-hidden","true"),t.type="button",this._updateTitle(),this._fullscreenButton.addEventListener("click",this._onClickFullscreen),window.document.addEventListener(this._fullscreenchange,this._changeIcon)}_updateTitle(){const t=this._getTitle()
this._fullscreenButton.setAttribute("aria-label",t),this._fullscreenButton.title=t}_getTitle(){return this._map._getUIString(this._isFullscreen()?"FullscreenControl.Exit":"FullscreenControl.Enter")}_isFullscreen(){return this._fullscreen}_changeIcon(){(window.document.fullscreenElement||window.document.mozFullScreenElement||window.document.webkitFullscreenElement||window.document.msFullscreenElement)===this._container!==this._fullscreen&&(this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle("maplibregl-ctrl-shrink"),this._fullscreenButton.classList.toggle("mapboxgl-ctrl-shrink"),this._fullscreenButton.classList.toggle("maplibregl-ctrl-fullscreen"),this._fullscreenButton.classList.toggle("mapboxgl-ctrl-fullscreen"),this._updateTitle())}_onClickFullscreen(){this._isFullscreen()?window.document.exitFullscreen?window.document.exitFullscreen():window.document.mozCancelFullScreen?window.document.mozCancelFullScreen():window.document.msExitFullscreen?window.document.msExitFullscreen():window.document.webkitCancelFullScreen&&window.document.webkitCancelFullScreen():this._container.requestFullscreen?this._container.requestFullscreen():this._container.mozRequestFullScreen?this._container.mozRequestFullScreen():this._container.msRequestFullscreen?this._container.msRequestFullscreen():this._container.webkitRequestFullscreen&&this._container.webkitRequestFullscreen()}},Popup:class extends t.Evented{constructor(e){super(),this.options=t.extend(Object.create(gn),e),t.bindAll(["_update","_onClose","remove","_onMouseMove","_onMouseUp","_onDrag"],this)}addTo(e){return this._map&&this.remove(),this._map=e,this.options.closeOnClick&&this._map.on("click",this._onClose),this.options.closeOnMove&&this._map.on("move",this._onClose),this._map.on("remove",this.remove),this._update(),this._focusFirstElement(),this._trackPointer?(this._map.on("mousemove",this._onMouseMove),this._map.on("mouseup",this._onMouseUp),this._container&&this._container.classList.add("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer","mapboxgl-track-pointer")):this._map.on("move",this._update),this.fire(new t.Event("open")),this}isOpen(){return!!this._map}remove(){return this._content&&s.remove(this._content),this._container&&(s.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("move",this._onClose),this._map.off("click",this._onClose),this._map.off("remove",this.remove),this._map.off("mousemove",this._onMouseMove),this._map.off("mouseup",this._onMouseUp),this._map.off("drag",this._onDrag),delete this._map),this.fire(new t.Event("close")),this}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._trackPointer=!1,this._update(),this._map&&(this._map.on("move",this._update),this._map.off("mousemove",this._onMouseMove),this._container&&this._container.classList.remove("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.remove("maplibregl-track-pointer","mapboxgl-track-pointer")),this}trackPointer(){return this._trackPointer=!0,this._pos=null,this._update(),this._map&&(this._map.off("move",this._update),this._map.on("mousemove",this._onMouseMove),this._map.on("drag",this._onDrag),this._container&&this._container.classList.add("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer","mapboxgl-track-pointer")),this}getElement(){return this._container}setText(t){return this.setDOMContent(document.createTextNode(t))}setHTML(t){const e=document.createDocumentFragment(),i=document.createElement("body")
let r
for(i.innerHTML=t;r=i.firstChild,r;)e.appendChild(r)
return this.setDOMContent(e)}getMaxWidth(){return this._container&&this._container.style.maxWidth}setMaxWidth(t){return this.options.maxWidth=t,this._update(),this}setDOMContent(t){if(this._content)for(;this._content.hasChildNodes();)this._content.firstChild&&this._content.removeChild(this._content.firstChild)
else this._content=s.create("div","maplibregl-popup-content mapboxgl-popup-content",this._container)
return this._content.appendChild(t),this._createCloseButton(),this._update(),this._focusFirstElement(),this}addClassName(t){this._container&&this._container.classList.add(t)}removeClassName(t){this._container&&this._container.classList.remove(t)}setOffset(t){return this.options.offset=t,this._update(),this}toggleClassName(t){if(this._container)return this._container.classList.toggle(t)}_createCloseButton(){this.options.closeButton&&(this._closeButton=s.create("button","maplibregl-popup-close-button mapboxgl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClose))}_onMouseUp(t){this._update(t.point)}_onMouseMove(t){this._update(t.point)}_onDrag(t){this._update(t.point)}_update(t){if(!this._map||!this._lngLat&&!this._trackPointer||!this._content)return
if(this._container||(this._container=s.create("div","maplibregl-popup mapboxgl-popup",this._map.getContainer()),this._tip=s.create("div","maplibregl-popup-tip mapboxgl-popup-tip",this._container),this._container.appendChild(this._content),this.options.className&&this.options.className.split(" ").forEach((t=>this._container.classList.add(t))),this._trackPointer&&this._container.classList.add("maplibregl-popup-track-pointer","mapboxgl-popup-track-pointer")),this.options.maxWidth&&this._container.style.maxWidth!==this.options.maxWidth&&(this._container.style.maxWidth=this.options.maxWidth),this._map.transform.renderWorldCopies&&!this._trackPointer&&(this._lngLat=sn(this._lngLat,this._pos,this._map.transform)),this._trackPointer&&!t)return
const e=this._pos=this._trackPointer&&t?t:this._map.project(this._lngLat)
let i=this.options.anchor
const r=yn(this.options.offset)
if(!i){const t=this._container.offsetWidth,n=this._container.offsetHeight
let s
s=e.y+r.bottom.y<n?["top"]:e.y>this._map.transform.height-n?["bottom"]:[],e.x<t/2?s.push("left"):e.x>this._map.transform.width-t/2&&s.push("right"),i=0===s.length?"bottom":s.join("-")}const n=e.add(r[i]).round()
s.setTransform(this._container,`${on[i]} translate(${n.x}px,${n.y}px)`),an(this._container,i,"popup")}_focusFirstElement(){if(!this.options.focusAfterOpen||!this._container)return
const t=this._container.querySelector(_n)
t&&t.focus()}_onClose(){this.remove()}},Marker:ln,Style:ie,LngLat:t.LngLat,LngLatBounds:t.LngLatBounds,Point:t.pointGeometry,MercatorCoordinate:t.MercatorCoordinate,Evented:t.Evented,AJAXError:t.AJAXError,config:t.config,CanvasSource:L,GeoJSONSource:P,ImageSource:M,RasterDEMTileSource:C,RasterTileSource:A,VectorTileSource:E,VideoSource:D,prewarm:function(){H().acquire(j)},clearPrewarmedResources:function(){const t=W
t&&(t.isPreloaded()&&1===t.numActive()?(t.release(j),W=null):console.warn("Could not clear WebWorkers since there are active Map instances that still reference it. The pre-warmed WebWorker pool can only be cleared when all map instances have been removed with map.remove()"))},get workerCount(){return Z.workerCount},set workerCount(t){Z.workerCount=t},get maxParallelImageRequests(){return t.config.MAX_PARALLEL_IMAGE_REQUESTS},set maxParallelImageRequests(e){t.config.MAX_PARALLEL_IMAGE_REQUESTS=e},clearStorage(e){t.clearTileCache(e)},workerUrl:"",addProtocol(e,i){t.config.REGISTERED_PROTOCOLS[e]=i},removeProtocol(e){delete t.config.REGISTERED_PROTOCOLS[e]}}
return Hr.extend(xn,{isSafari:t.isSafari,getPerformanceMetrics:t.PerformanceUtils.getPerformanceMetrics}),xn})),i}()}}])
