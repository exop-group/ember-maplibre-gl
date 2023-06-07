(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[749],{749:function(t){t.exports=function(){"use strict"
var t,e,i
function r(r,n){if(t)if(e){var s="var sharedChunk = {}; ("+t+")(sharedChunk); ("+e+")(sharedChunk);",a={}
t(a),i=n(a),"undefined"!=typeof window&&(i.workerUrl=window.URL.createObjectURL(new Blob([s],{type:"text/javascript"})))}else e=n
else t=n}return r(0,(function(t){function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i=r
function r(t,e){this.x=t,this.y=e}r.prototype={clone:function(){return new r(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,i=t.y-this.y
return e*e+i*i},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[2]*this.x+t[3]*this.y
return this.x=t[0]*this.x+t[1]*this.y,this.y=e,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y
return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),i=Math.sin(t),r=i*this.x+e*this.y
return this.x=e*this.x-i*this.y,this.y=r,this},_rotateAround:function(t,e){var i=Math.cos(t),r=Math.sin(t),n=e.y+r*(this.x-e.x)+i*(this.y-e.y)
return this.x=e.x+i*(this.x-e.x)-r*(this.y-e.y),this.y=n,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}},r.convert=function(t){return t instanceof r?t:Array.isArray(t)?new r(t[0],t[1]):t}
var n=e(i),s=a
function a(t,e,i,r){this.cx=3*t,this.bx=3*(i-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(r-e)-this.cy,this.ay=1-this.cy-this.by,this.p1x=t,this.p1y=e,this.p2x=i,this.p2y=r}a.prototype={sampleCurveX:function(t){return((this.ax*t+this.bx)*t+this.cx)*t},sampleCurveY:function(t){return((this.ay*t+this.by)*t+this.cy)*t},sampleCurveDerivativeX:function(t){return(3*this.ax*t+2*this.bx)*t+this.cx},solveCurveX:function(t,e){if(void 0===e&&(e=1e-6),t<0)return 0
if(t>1)return 1
for(var i=t,r=0;r<8;r++){var n=this.sampleCurveX(i)-t
if(Math.abs(n)<e)return i
var s=this.sampleCurveDerivativeX(i)
if(Math.abs(s)<1e-6)break
i-=n/s}var a=0,o=1
for(i=t,r=0;r<20&&(n=this.sampleCurveX(i),!(Math.abs(n-t)<e));r++)t>n?a=i:o=i,i=.5*(o-a)+a
return i},solve:function(t,e){return this.sampleCurveY(this.solveCurveX(t,e))}}
var o=e(s)
function l(t,e,i,r){const n=new o(t,e,i,r)
return function(t){return n.solve(t)}}const c=l(.25,.1,.25,1)
function h(t,e,i){return Math.min(i,Math.max(e,t))}function u(t,e,i){const r=i-e,n=((t-e)%r+r)%r+e
return n===e?i:n}function d(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r]
for(const n of i)for(const e in n)t[e]=n[e]
return t}let p=1
function f(t,e){t.forEach((t=>{e[t]&&(e[t]=e[t].bind(e))}))}function m(t,e,i){const r={}
for(const n in t)r[n]=e.call(i||this,t[n],n,t)
return r}function g(t,e,i){const r={}
for(const n in t)e.call(i||this,t[n],n,t)&&(r[n]=t[n])
return r}function _(t){return Array.isArray(t)?t.map(_):"object"==typeof t&&t?m(t,_):t}const y={}
function x(t){y[t]||("undefined"!=typeof console&&console.warn(t),y[t]=!0)}function v(t,e,i){return(i.y-t.y)*(e.x-t.x)>(e.y-t.y)*(i.x-t.x)}function b(t){let e=0
for(let i,r,n=0,s=t.length,a=s-1;n<s;a=n++)i=t[n],r=t[a],e+=(r.x-i.x)*(i.y+r.y)
return e}function w(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}let T=null
function S(t){if(null==T){const e=t.navigator?t.navigator.userAgent:null
T=!!t.safari||!(!e||!(/\b(iPad|iPhone|iPod)\b/.test(e)||e.match("Safari")&&!e.match("Chrome")))}return T}function E(t){return"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap}const I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII="
let A,M
const C={now:"undefined"!=typeof performance&&performance&&performance.now?performance.now.bind(performance):Date.now.bind(Date),frame(t){const e=requestAnimationFrame(t)
return{cancel:()=>cancelAnimationFrame(e)}},getImageData(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.getImageCanvasContext(t).getImageData(-e,-e,t.width+2*e,t.height+2*e)},getImageCanvasContext(t){const e=window.document.createElement("canvas"),i=e.getContext("2d",{willReadFrequently:!0})
if(!i)throw new Error("failed to create canvas 2d context")
return e.width=t.width,e.height=t.height,i.drawImage(t,0,0,t.width,t.height),i},resolveURL:t=>(A||(A=document.createElement("a")),A.href=t,A.href),hardwareConcurrency:"undefined"!=typeof navigator&&navigator.hardwareConcurrency||4,get prefersReducedMotion(){return!!matchMedia&&(null==M&&(M=matchMedia("(prefers-reduced-motion: reduce)")),M.matches)}},P={MAX_PARALLEL_IMAGE_REQUESTS:16,MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME:8,REGISTERED_PROTOCOLS:{},WORKER_URL:""}
class z extends Error{constructor(t,e,i,r){super(`AJAXError: ${e} (${t}): ${i}`),this.status=t,this.statusText=e,this.url=i,this.body=r}}const k=w()?()=>self.worker&&self.worker.referrer:()=>("blob:"===window.location.protocol?window.parent:window).location.href,D=t=>P.REGISTERED_PROTOCOLS[t.substring(0,t.indexOf("://"))]
function L(t,e){const i=new AbortController,r=new Request(t.url,{method:t.method||"GET",body:t.body,credentials:t.credentials,headers:t.headers,referrer:k(),signal:i.signal})
let n=!1,s=!1
return"json"===t.type&&r.headers.set("Accept","application/json"),s||fetch(r).then((i=>i.ok?(i=>{("arrayBuffer"===t.type||"image"===t.type?i.arrayBuffer():"json"===t.type?i.json():i.text()).then((t=>{s||(n=!0,e(null,t,i.headers.get("Cache-Control"),i.headers.get("Expires")))})).catch((t=>{s||e(new Error(t.message))}))})(i):i.blob().then((r=>e(new z(i.status,i.statusText,t.url,r)))))).catch((t=>{20!==t.code&&e(new Error(t.message))})),{cancel:()=>{s=!0,n||i.abort()}}}const B=function(t,e){if(/:\/\//.test(t.url)&&!/^https?:|^file:/.test(t.url)){if(w()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e)
if(!w())return(D(t.url)||L)(t,e)}if(!(/^file:/.test(i=t.url)||/^file:/.test(k())&&!/^\w+:/.test(i))){if(fetch&&Request&&AbortController&&Object.prototype.hasOwnProperty.call(Request.prototype,"signal"))return L(t,e)
if(w()&&self.worker&&self.worker.actor)return self.worker.actor.send("getResource",t,e,void 0,!0)}var i
return function(t,e){const i=new XMLHttpRequest
i.open(t.method||"GET",t.url,!0),"arrayBuffer"!==t.type&&"image"!==t.type||(i.responseType="arraybuffer")
for(const r in t.headers)i.setRequestHeader(r,t.headers[r])
return"json"===t.type&&(i.responseType="text",i.setRequestHeader("Accept","application/json")),i.withCredentials="include"===t.credentials,i.onerror=()=>{e(new Error(i.statusText))},i.onload=()=>{if((i.status>=200&&i.status<300||0===i.status)&&null!==i.response){let r=i.response
if("json"===t.type)try{r=JSON.parse(i.response)}catch(t){return e(t)}e(null,r,i.getResponseHeader("Cache-Control"),i.getResponseHeader("Expires"))}else{const r=new Blob([i.response],{type:i.getResponseHeader("Content-Type")})
e(new z(i.status,i.statusText,t.url,r))}},i.send(t.body),{cancel:()=>i.abort()}}(t,e)},R=function(t,e){return B(d(t,{type:"arrayBuffer"}),e)}
function F(t){if(!t||t.indexOf("://")<=0||0===t.indexOf("data:image/")||0===t.indexOf("blob:"))return!0
const e=new URL(t),i=window.location
return e.protocol===i.protocol&&e.host===i.host}function O(t,e,i){i[t]&&-1!==i[t].indexOf(e)||(i[t]=i[t]||[],i[t].push(e))}function U(t,e,i){if(i&&i[t]){const r=i[t].indexOf(e);-1!==r&&i[t].splice(r,1)}}class V{constructor(t){d(this,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),this.type=t}}class N extends V{constructor(t){super("error",d({error:t},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}}class ${on(t,e){return this._listeners=this._listeners||{},O(t,e,this._listeners),this}off(t,e){return U(t,e,this._listeners),U(t,e,this._oneTimeListeners),this}once(t,e){return e?(this._oneTimeListeners=this._oneTimeListeners||{},O(t,e,this._oneTimeListeners),this):new Promise((e=>this.once(t,e)))}fire(t,e){"string"==typeof t&&(t=new V(t,e||{}))
const i=t.type
if(this.listens(i)){t.target=this
const e=this._listeners&&this._listeners[i]?this._listeners[i].slice():[]
for(const i of e)i.call(this,t)
const r=this._oneTimeListeners&&this._oneTimeListeners[i]?this._oneTimeListeners[i].slice():[]
for(const s of r)U(i,s,this._oneTimeListeners),s.call(this,t)
const n=this._eventedParent
n&&(d(t,"function"==typeof this._eventedParentData?this._eventedParentData():this._eventedParentData),n.fire(t))}else t instanceof N&&console.error(t.error)
return this}listens(t){return this._listeners&&this._listeners[t]&&this._listeners[t].length>0||this._oneTimeListeners&&this._oneTimeListeners[t]&&this._oneTimeListeners[t].length>0||this._eventedParent&&this._eventedParent.listens(t)}setEventedParent(t,e){return this._eventedParent=t,this._eventedParentData=e,this}}var q={$version:8,$root:{version:{required:!0,type:"enum",values:[8]},name:{type:"string"},metadata:{type:"*"},center:{type:"array",value:"number"},zoom:{type:"number"},bearing:{type:"number",default:0,period:360,units:"degrees"},pitch:{type:"number",default:0,units:"degrees"},light:{type:"light"},terrain:{type:"terrain"},sources:{required:!0,type:"sources"},sprite:{type:"sprite"},glyphs:{type:"string"},transition:{type:"transition"},layers:{required:!0,type:"array",value:"layer"}},sources:{"*":{type:"source"}},source:["source_vector","source_raster","source_raster_dem","source_geojson","source_video","source_image"],source_vector:{type:{required:!0,type:"enum",values:{vector:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},attribution:{type:"string"},promoteId:{type:"promoteId"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster:{type:{required:!0,type:"enum",values:{raster:{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},scheme:{type:"enum",values:{xyz:{},tms:{}},default:"xyz"},attribution:{type:"string"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_raster_dem:{type:{required:!0,type:"enum",values:{"raster-dem":{}}},url:{type:"string"},tiles:{type:"array",value:"string"},bounds:{type:"array",value:"number",length:4,default:[-180,-85.051129,180,85.051129]},minzoom:{type:"number",default:0},maxzoom:{type:"number",default:22},tileSize:{type:"number",default:512,units:"pixels"},attribution:{type:"string"},encoding:{type:"enum",values:{terrarium:{},mapbox:{}},default:"mapbox"},volatile:{type:"boolean",default:!1},"*":{type:"*"}},source_geojson:{type:{required:!0,type:"enum",values:{geojson:{}}},data:{required:!0,type:"*"},maxzoom:{type:"number",default:18},attribution:{type:"string"},buffer:{type:"number",default:128,maximum:512,minimum:0},filter:{type:"*"},tolerance:{type:"number",default:.375},cluster:{type:"boolean",default:!1},clusterRadius:{type:"number",default:50,minimum:0},clusterMaxZoom:{type:"number"},clusterMinPoints:{type:"number"},clusterProperties:{type:"*"},lineMetrics:{type:"boolean",default:!1},generateId:{type:"boolean",default:!1},promoteId:{type:"promoteId"}},source_video:{type:{required:!0,type:"enum",values:{video:{}}},urls:{required:!0,type:"array",value:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},source_image:{type:{required:!0,type:"enum",values:{image:{}}},url:{required:!0,type:"string"},coordinates:{required:!0,type:"array",length:4,value:{type:"array",length:2,value:"number"}}},layer:{id:{type:"string",required:!0},type:{type:"enum",values:{fill:{},line:{},symbol:{},circle:{},heatmap:{},"fill-extrusion":{},raster:{},hillshade:{},background:{}},required:!0},metadata:{type:"*"},source:{type:"string"},"source-layer":{type:"string"},minzoom:{type:"number",minimum:0,maximum:24},maxzoom:{type:"number",minimum:0,maximum:24},filter:{type:"filter"},layout:{type:"layout"},paint:{type:"paint"}},layout:["layout_fill","layout_line","layout_circle","layout_heatmap","layout_fill-extrusion","layout_symbol","layout_raster","layout_hillshade","layout_background"],layout_background:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_fill:{"fill-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_circle:{"circle-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_heatmap:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},"layout_fill-extrusion":{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_line:{"line-cap":{type:"enum",values:{butt:{},round:{},square:{}},default:"butt",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-join":{type:"enum",values:{bevel:{},round:{},miter:{}},default:"miter",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"line-miter-limit":{type:"number",default:2,requires:[{"line-join":"miter"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-round-limit":{type:"number",default:1.05,requires:[{"line-join":"round"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_symbol:{"symbol-placement":{type:"enum",values:{point:{},line:{},"line-center":{}},default:"point",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-spacing":{type:"number",default:250,minimum:1,units:"pixels",requires:[{"symbol-placement":"line"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"symbol-avoid-edges":{type:"boolean",default:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"symbol-sort-key":{type:"number",expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"symbol-z-order":{type:"enum",values:{auto:{},"viewport-y":{},source:{}},default:"auto",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-allow-overlap":{type:"boolean",default:!1,requires:["icon-image",{"!":"icon-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-ignore-placement":{type:"boolean",default:!1,requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-optional":{type:"boolean",default:!1,requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-rotation-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-size":{type:"number",default:1,minimum:0,units:"factor of the original icon size",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-text-fit":{type:"enum",values:{none:{},width:{},height:{},both:{}},default:"none",requires:["icon-image","text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-text-fit-padding":{type:"array",value:"number",length:4,default:[0,0,0,0],units:"pixels",requires:["icon-image","text-field",{"icon-text-fit":["both","width","height"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-image":{type:"resolvedImage",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-padding":{type:"padding",default:[2],units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-keep-upright":{type:"boolean",default:!1,requires:["icon-image",{"icon-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"icon-offset":{type:"array",value:"number",length:2,default:[0,0],requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"icon-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-pitch-alignment":{type:"enum",values:{map:{},viewport:{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotation-alignment":{type:"enum",values:{map:{},viewport:{},"viewport-glyph":{},auto:{}},default:"auto",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-field":{type:"formatted",default:"",tokens:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"],requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-size":{type:"number",default:16,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-width":{type:"number",default:10,minimum:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-line-height":{type:"number",default:1.2,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-letter-spacing":{type:"number",default:0,units:"ems",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-justify":{type:"enum",values:{auto:{},left:{},center:{},right:{}},default:"center",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-radial-offset":{type:"number",units:"ems",default:0,requires:["text-field"],"property-type":"data-driven",expression:{interpolated:!0,parameters:["zoom","feature"]}},"text-variable-anchor":{type:"array",value:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-anchor":{type:"enum",values:{center:{},left:{},right:{},top:{},bottom:{},"top-left":{},"top-right":{},"bottom-left":{},"bottom-right":{}},default:"center",requires:["text-field",{"!":"text-variable-anchor"}],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-max-angle":{type:"number",default:45,units:"degrees",requires:["text-field",{"symbol-placement":["line","line-center"]}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-writing-mode":{type:"array",value:"enum",values:{horizontal:{},vertical:{}},requires:["text-field",{"symbol-placement":["point"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-rotate":{type:"number",default:0,period:360,units:"degrees",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-padding":{type:"number",default:2,minimum:0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-keep-upright":{type:"boolean",default:!0,requires:["text-field",{"text-rotation-alignment":"map"},{"symbol-placement":["line","line-center"]}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-transform":{type:"enum",values:{none:{},uppercase:{},lowercase:{}},default:"none",requires:["text-field"],expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-offset":{type:"array",value:"number",units:"ems",length:2,default:[0,0],requires:["text-field",{"!":"text-radial-offset"}],expression:{interpolated:!0,parameters:["zoom","feature"]},"property-type":"data-driven"},"text-allow-overlap":{type:"boolean",default:!1,requires:["text-field",{"!":"text-overlap"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-overlap":{type:"enum",values:{never:{},always:{},cooperative:{}},requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-ignore-placement":{type:"boolean",default:!1,requires:["text-field"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-optional":{type:"boolean",default:!1,requires:["text-field","icon-image"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_raster:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},layout_hillshade:{visibility:{type:"enum",values:{visible:{},none:{}},default:"visible","property-type":"constant"}},filter:{type:"array",value:"*"},filter_operator:{type:"enum",values:{"==":{},"!=":{},">":{},">=":{},"<":{},"<=":{},in:{},"!in":{},all:{},any:{},none:{},has:{},"!has":{},within:{}}},geometry_type:{type:"enum",values:{Point:{},LineString:{},Polygon:{}}},function:{expression:{type:"expression"},stops:{type:"array",value:"function_stop"},base:{type:"number",default:1,minimum:0},property:{type:"string",default:"$zoom"},type:{type:"enum",values:{identity:{},exponential:{},interval:{},categorical:{}},default:"exponential"},colorSpace:{type:"enum",values:{rgb:{},lab:{},hcl:{}},default:"rgb"},default:{type:"*",required:!1}},function_stop:{type:"array",minimum:0,maximum:24,value:["number","color"],length:2},expression:{type:"array",value:"*",minimum:1},light:{anchor:{type:"enum",default:"viewport",values:{map:{},viewport:{}},"property-type":"data-constant",transition:!1,expression:{interpolated:!1,parameters:["zoom"]}},position:{type:"array",default:[1.15,210,30],length:3,value:"number","property-type":"data-constant",transition:!0,expression:{interpolated:!0,parameters:["zoom"]}},color:{type:"color","property-type":"data-constant",default:"#ffffff",expression:{interpolated:!0,parameters:["zoom"]},transition:!0},intensity:{type:"number","property-type":"data-constant",default:.5,minimum:0,maximum:1,expression:{interpolated:!0,parameters:["zoom"]},transition:!0}},terrain:{source:{type:"string",required:!0},exaggeration:{type:"number",minimum:0,default:1}},paint:["paint_fill","paint_line","paint_circle","paint_heatmap","paint_fill-extrusion","paint_symbol","paint_raster","paint_hillshade","paint_background"],paint_fill:{"fill-antialias":{type:"boolean",default:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-outline-color":{type:"color",transition:!0,requires:[{"!":"fill-pattern"},{"fill-antialias":!0}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"}},"paint_fill-extrusion":{"fill-extrusion-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"fill-extrusion-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["fill-extrusion-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"fill-extrusion-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"fill-extrusion-height":{type:"number",default:0,minimum:0,units:"meters",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-base":{type:"number",default:0,minimum:0,units:"meters",transition:!0,requires:["fill-extrusion-height"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"fill-extrusion-vertical-gradient":{type:"boolean",default:!0,transition:!1,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_line:{"line-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"line-pattern"}],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"line-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["line-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"line-width":{type:"number",default:1,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-gap-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-offset":{type:"number",default:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"line-dasharray":{type:"array",value:"number",minimum:0,transition:!0,units:"line widths",requires:[{"!":"line-pattern"}],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"line-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom","feature"]},"property-type":"cross-faded-data-driven"},"line-gradient":{type:"color",transition:!1,requires:[{"!":"line-dasharray"},{"!":"line-pattern"},{source:"geojson",has:{lineMetrics:!0}}],expression:{interpolated:!0,parameters:["line-progress"]},"property-type":"color-ramp"}},paint_circle:{"circle-radius":{type:"number",default:5,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-blur":{type:"number",default:0,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"circle-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["circle-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-scale":{type:"enum",values:{map:{},viewport:{}},default:"map",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-pitch-alignment":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"circle-stroke-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"circle-stroke-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"}},paint_heatmap:{"heatmap-radius":{type:"number",default:30,minimum:1,transition:!0,units:"pixels",expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-weight":{type:"number",default:1,minimum:0,transition:!1,expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"heatmap-intensity":{type:"number",default:1,minimum:0,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"heatmap-color":{type:"color",default:["interpolate",["linear"],["heatmap-density"],0,"rgba(0, 0, 255, 0)",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"],transition:!1,expression:{interpolated:!0,parameters:["heatmap-density"]},"property-type":"color-ramp"},"heatmap-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_symbol:{"icon-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-color":{type:"color",default:"#000000",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"icon-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["icon-image"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"icon-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["icon-image","icon-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"text-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-color":{type:"color",default:"#000000",transition:!0,overridable:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-color":{type:"color",default:"rgba(0, 0, 0, 0)",transition:!0,requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-width":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-halo-blur":{type:"number",default:0,minimum:0,transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom","feature","feature-state"]},"property-type":"data-driven"},"text-translate":{type:"array",value:"number",length:2,default:[0,0],transition:!0,units:"pixels",requires:["text-field"],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"text-translate-anchor":{type:"enum",values:{map:{},viewport:{}},default:"map",requires:["text-field","text-translate"],expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"}},paint_raster:{"raster-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-hue-rotate":{type:"number",default:0,period:360,transition:!0,units:"degrees",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-min":{type:"number",default:0,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-brightness-max":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-saturation":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-contrast":{type:"number",default:0,minimum:-1,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"raster-resampling":{type:"enum",values:{linear:{},nearest:{}},default:"linear",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"raster-fade-duration":{type:"number",default:300,minimum:0,transition:!1,units:"milliseconds",expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_hillshade:{"hillshade-illumination-direction":{type:"number",default:335,minimum:0,maximum:359,transition:!1,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-illumination-anchor":{type:"enum",values:{map:{},viewport:{}},default:"viewport",expression:{interpolated:!1,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-exaggeration":{type:"number",default:.5,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-shadow-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-highlight-color":{type:"color",default:"#FFFFFF",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"hillshade-accent-color":{type:"color",default:"#000000",transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},paint_background:{"background-color":{type:"color",default:"#000000",transition:!0,requires:[{"!":"background-pattern"}],expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"},"background-pattern":{type:"resolvedImage",transition:!0,expression:{interpolated:!1,parameters:["zoom"]},"property-type":"cross-faded"},"background-opacity":{type:"number",default:1,minimum:0,maximum:1,transition:!0,expression:{interpolated:!0,parameters:["zoom"]},"property-type":"data-constant"}},transition:{duration:{type:"number",default:300,minimum:0,units:"milliseconds"},delay:{type:"number",default:0,minimum:0,units:"milliseconds"}},"property-type":{"data-driven":{type:"property-type"},"cross-faded":{type:"property-type"},"cross-faded-data-driven":{type:"property-type"},"color-ramp":{type:"property-type"},"data-constant":{type:"property-type"},constant:{type:"property-type"}},promoteId:{"*":{type:"string"}}}
const j=["type","source","source-layer","minzoom","maxzoom","filter","layout"]
function Z(t,e){const i={}
for(const r in t)"ref"!==r&&(i[r]=t[r])
return j.forEach((t=>{t in e&&(i[t]=e[t])})),i}function G(t,e){if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1
for(let i=0;i<t.length;i++)if(!G(t[i],e[i]))return!1
return!0}if("object"==typeof t&&null!==t&&null!==e){if("object"!=typeof e)return!1
if(Object.keys(t).length!==Object.keys(e).length)return!1
for(const i in t)if(!G(t[i],e[i]))return!1
return!0}return t===e}const X={setStyle:"setStyle",addLayer:"addLayer",removeLayer:"removeLayer",setPaintProperty:"setPaintProperty",setLayoutProperty:"setLayoutProperty",setFilter:"setFilter",addSource:"addSource",removeSource:"removeSource",setGeoJSONSourceData:"setGeoJSONSourceData",setLayerZoomRange:"setLayerZoomRange",setLayerProperty:"setLayerProperty",setCenter:"setCenter",setZoom:"setZoom",setBearing:"setBearing",setPitch:"setPitch",setSprite:"setSprite",setGlyphs:"setGlyphs",setTransition:"setTransition",setLight:"setLight"}
function W(t,e,i){i.push({command:X.addSource,args:[t,e[t]]})}function H(t,e,i){e.push({command:X.removeSource,args:[t]}),i[t]=!0}function K(t,e,i,r){H(t,i,r),W(t,e,i)}function Y(t,e,i){let r
for(r in t[i])if(Object.prototype.hasOwnProperty.call(t[i],r)&&"data"!==r&&!G(t[i][r],e[i][r]))return!1
for(r in e[i])if(Object.prototype.hasOwnProperty.call(e[i],r)&&"data"!==r&&!G(t[i][r],e[i][r]))return!1
return!0}function J(t,e,i,r,n,s){let a
for(a in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,a)&&(G(t[a],e[a])||i.push({command:s,args:[r,a,e[a],n]}))
for(a in e)Object.prototype.hasOwnProperty.call(e,a)&&!Object.prototype.hasOwnProperty.call(t,a)&&(G(t[a],e[a])||i.push({command:s,args:[r,a,e[a],n]}))}function Q(t){return t.id}function tt(t,e){return t[e.id]=e,t}class et{constructor(t,e,i,r){this.message=(t?`${t}: `:"")+i,r&&(this.identifier=r),null!=e&&e.__line__&&(this.line=e.__line__)}}function it(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r]
for(const n of i)for(const e in n)t[e]=n[e]
return t}class rt extends Error{constructor(t,e){super(e),this.message=e,this.key=t}}class nt{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
this.parent=t,this.bindings={}
for(const[i,r]of e)this.bindings[i]=r}concat(t){return new nt(this,t)}get(t){if(this.bindings[t])return this.bindings[t]
if(this.parent)return this.parent.get(t)
throw new Error(`${t} not found in scope.`)}has(t){return!!this.bindings[t]||!!this.parent&&this.parent.has(t)}}const st={kind:"null"},at={kind:"number"},ot={kind:"string"},lt={kind:"boolean"},ct={kind:"color"},ht={kind:"object"},ut={kind:"value"},dt={kind:"collator"},pt={kind:"formatted"},ft={kind:"padding"},mt={kind:"resolvedImage"}
function gt(t,e){return{kind:"array",itemType:t,N:e}}function _t(t){if("array"===t.kind){const e=_t(t.itemType)
return"number"==typeof t.N?`array<${e}, ${t.N}>`:"value"===t.itemType.kind?"array":`array<${e}>`}return t.kind}const yt=[st,at,ot,lt,ct,pt,ht,gt(ut),ft,mt]
function xt(t,e){if("error"===e.kind)return null
if("array"===t.kind){if("array"===e.kind&&(0===e.N&&"value"===e.itemType.kind||!xt(t.itemType,e.itemType))&&("number"!=typeof t.N||t.N===e.N))return null}else{if(t.kind===e.kind)return null
if("value"===t.kind)for(const t of yt)if(!xt(t,e))return null}return`Expected ${_t(t)} but found ${_t(e)} instead.`}function vt(t,e){return e.some((e=>e.kind===t.kind))}function bt(t,e){return e.some((e=>"null"===e?null===t:"array"===e?Array.isArray(t):"object"===e?t&&!Array.isArray(t)&&"object"==typeof t:e===typeof t))}function wt(t,e){return"array"===t.kind&&"array"===e.kind?t.itemType.kind===e.itemType.kind&&"number"==typeof t.N:t.kind===e.kind}const Tt=.96422,St=.82521,Et=4/29,It=6/29,At=3*It*It,Mt=Math.PI/180,Ct=180/Math.PI
function Pt(t){return(t%=360)<0&&(t+=360),t}function zt(t){let e,i,[r,n,s,a]=t
const o=Dt((.2225045*(r=kt(r))+.7168786*(n=kt(n))+.0606169*(s=kt(s)))/1)
r===n&&n===s?e=i=o:(e=Dt((.4360747*r+.3850649*n+.1430804*s)/Tt),i=Dt((.0139322*r+.0971045*n+.7141733*s)/St))
const l=116*o-16
return[l<0?0:l,500*(e-o),200*(o-i),a]}function kt(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Dt(t){return t>.008856451679035631?Math.pow(t,1/3):t/At+Et}function Lt(t){let[e,i,r,n]=t,s=(e+16)/116,a=isNaN(i)?s:s+i/500,o=isNaN(r)?s:s-r/200
return s=1*Rt(s),a=Tt*Rt(a),o=St*Rt(o),[Bt(3.1338561*a-1.6168667*s-.4906146*o),Bt(-.9787684*a+1.9161415*s+.033454*o),Bt(.0719453*a-.2289914*s+1.4052427*o),n]}function Bt(t){return(t=t<=.00304?12.92*t:1.055*Math.pow(t,1/2.4)-.055)<0?0:t>1?1:t}function Rt(t){return t>It?t*t*t:At*(t-Et)}function Ft(t){return parseInt(t.padEnd(2,t),16)/255}function Ot(t,e){return Ut(e?t/100:t,0,1)}function Ut(t,e,i){return Math.min(Math.max(e,t),i)}function Vt(t){return!t.some(Number.isNaN)}const Nt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}
class $t{constructor(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4]
this.r=t,this.g=e,this.b=i,this.a=r,n||(this.r*=r,this.g*=r,this.b*=r,r||this.overwriteGetter("rgb",[t,e,i,r]))}static parse(t){if(t instanceof $t)return t
if("string"!=typeof t)return
const e=function(t){if("transparent"===(t=t.toLowerCase()))return[0,0,0,0]
const e=Nt[t]
if(e){const[t,i,r]=e
return[t/255,i/255,r/255,1]}if(t.startsWith("#")&&/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(t)){const e=t.length<6?1:2
let i=1
return[Ft(t.slice(i,i+=e)),Ft(t.slice(i,i+=e)),Ft(t.slice(i,i+=e)),Ft(t.slice(i,i+e)||"ff")]}if(t.startsWith("rgb")){const e=t.match(/^rgba?\(\s*([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/)
if(e){const[t,i,r,n,s,a,o,l,c,h,u,d]=e,p=[n||" ",o||" ",h].join("")
if("  "===p||"  /"===p||",,"===p||",,,"===p){const t=[r,a,c].join(""),e="%%%"===t?100:""===t?255:0
if(e){const t=[Ut(+i/e,0,1),Ut(+s/e,0,1),Ut(+l/e,0,1),u?Ot(+u,d):1]
if(Vt(t))return t}}return}}const i=t.match(/^hsla?\(\s*([\de.+-]+)(?:deg)?(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/)
if(i){const[t,e,r,n,s,a,o,l,c]=i,h=[r||" ",s||" ",o].join("")
if("  "===h||"  /"===h||",,"===h||",,,"===h){const t=[+e,Ut(+n,0,100),Ut(+a,0,100),l?Ot(+l,c):1]
if(Vt(t))return function(t){let[e,i,r,n]=t
function s(t){const n=(t+e/30)%12,s=i*Math.min(r,1-r)
return r-s*Math.max(-1,Math.min(n-3,9-n,1))}return e=Pt(e),i/=100,r/=100,[s(0),s(8),s(4),n]}(t)}}}(t)
return e?new $t(...e,!1):void 0}get rgb(){const{r:t,g:e,b:i,a:r}=this,n=r||1/0
return this.overwriteGetter("rgb",[t/n,e/n,i/n,r])}get hcl(){return this.overwriteGetter("hcl",function(t){const[e,i,r,n]=zt(t),s=Math.sqrt(i*i+r*r)
return[Math.round(1e4*s)?Pt(Math.atan2(r,i)*Ct):NaN,s,e,n]}(this.rgb))}get lab(){return this.overwriteGetter("lab",zt(this.rgb))}overwriteGetter(t,e){return Object.defineProperty(this,t,{value:e}),e}toString(){const[t,e,i,r]=this.rgb
return`rgba(${[t,e,i].map((t=>Math.round(255*t))).join(",")},${r})`}}$t.black=new $t(0,0,0,1),$t.white=new $t(1,1,1,1),$t.transparent=new $t(0,0,0,0),$t.red=new $t(1,0,0,1)
class qt{constructor(t,e,i){this.sensitivity=t?e?"variant":"case":e?"accent":"base",this.locale=i,this.collator=new Intl.Collator(this.locale?this.locale:[],{sensitivity:this.sensitivity,usage:"search"})}compare(t,e){return this.collator.compare(t,e)}resolvedLocale(){return new Intl.Collator(this.locale?this.locale:[]).resolvedOptions().locale}}class jt{constructor(t,e,i,r,n){this.text=t,this.image=e,this.scale=i,this.fontStack=r,this.textColor=n}}class Zt{constructor(t){this.sections=t}static fromString(t){return new Zt([new jt(t,null,null,null,null)])}isEmpty(){return 0===this.sections.length||!this.sections.some((t=>0!==t.text.length||t.image&&0!==t.image.name.length))}static factory(t){return t instanceof Zt?t:Zt.fromString(t)}toString(){return 0===this.sections.length?"":this.sections.map((t=>t.text)).join("")}}class Gt{constructor(t){this.values=t.slice()}static parse(t){if(t instanceof Gt)return t
if("number"==typeof t)return new Gt([t,t,t,t])
if(Array.isArray(t)&&!(t.length<1||t.length>4)){for(const e of t)if("number"!=typeof e)return
switch(t.length){case 1:t=[t[0],t[0],t[0],t[0]]
break
case 2:t=[t[0],t[1],t[0],t[1]]
break
case 3:t=[t[0],t[1],t[2],t[1]]}return new Gt(t)}}toString(){return JSON.stringify(this.values)}}class Xt{constructor(t){this.name=t.name,this.available=t.available}toString(){return this.name}static fromString(t){return t?new Xt({name:t,available:!1}):null}}function Wt(t,e,i,r){return"number"==typeof t&&t>=0&&t<=255&&"number"==typeof e&&e>=0&&e<=255&&"number"==typeof i&&i>=0&&i<=255?void 0===r||"number"==typeof r&&r>=0&&r<=1?null:`Invalid rgba value [${[t,e,i,r].join(", ")}]: 'a' must be between 0 and 1.`:`Invalid rgba value [${("number"==typeof r?[t,e,i,r]:[t,e,i]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`}function Ht(t){if(null===t)return!0
if("string"==typeof t)return!0
if("boolean"==typeof t)return!0
if("number"==typeof t)return!0
if(t instanceof $t)return!0
if(t instanceof qt)return!0
if(t instanceof Zt)return!0
if(t instanceof Gt)return!0
if(t instanceof Xt)return!0
if(Array.isArray(t)){for(const e of t)if(!Ht(e))return!1
return!0}if("object"==typeof t){for(const e in t)if(!Ht(t[e]))return!1
return!0}return!1}function Kt(t){if(null===t)return st
if("string"==typeof t)return ot
if("boolean"==typeof t)return lt
if("number"==typeof t)return at
if(t instanceof $t)return ct
if(t instanceof qt)return dt
if(t instanceof Zt)return pt
if(t instanceof Gt)return ft
if(t instanceof Xt)return mt
if(Array.isArray(t)){const e=t.length
let i
for(const r of t){const t=Kt(r)
if(i){if(i===t)continue
i=ut
break}i=t}return gt(i||ut,e)}return ht}function Yt(t){const e=typeof t
return null===t?"":"string"===e||"number"===e||"boolean"===e?String(t):t instanceof $t||t instanceof Zt||t instanceof Gt||t instanceof Xt?t.toString():JSON.stringify(t)}class Jt{constructor(t,e){this.type=t,this.value=e}static parse(t,e){if(2!==t.length)return e.error(`'literal' expression requires exactly one argument, but found ${t.length-1} instead.`)
if(!Ht(t[1]))return e.error("invalid value")
const i=t[1]
let r=Kt(i)
const n=e.expectedType
return"array"!==r.kind||0!==r.N||!n||"array"!==n.kind||"number"==typeof n.N&&0!==n.N||(r=n),new Jt(r,i)}evaluate(){return this.value}eachChild(){}outputDefined(){return!0}}class Qt{constructor(t){this.name="ExpressionEvaluationError",this.message=t}toJSON(){return this.message}}const te={string:ot,number:at,boolean:lt,object:ht}
class ee{constructor(t,e){this.type=t,this.args=e}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.")
let i,r=1
const n=t[0]
if("array"===n){let n,s
if(t.length>2){const i=t[1]
if("string"!=typeof i||!(i in te)||"object"===i)return e.error('The item type argument of "array" must be one of string, number, boolean',1)
n=te[i],r++}else n=ut
if(t.length>3){if(null!==t[2]&&("number"!=typeof t[2]||t[2]<0||t[2]!==Math.floor(t[2])))return e.error('The length argument to "array" must be a positive integer literal',2)
s=t[2],r++}i=gt(n,s)}else{if(!te[n])throw new Error(`Types doesn't contain name = ${n}`)
i=te[n]}const s=[]
for(;r<t.length;r++){const i=e.parse(t[r],r,ut)
if(!i)return null
s.push(i)}return new ee(i,s)}evaluate(t){for(let e=0;e<this.args.length;e++){const i=this.args[e].evaluate(t)
if(!xt(this.type,Kt(i)))return i
if(e===this.args.length-1)throw new Qt(`Expected value to be of type ${_t(this.type)}, but found ${_t(Kt(i))} instead.`)}throw new Error}eachChild(t){this.args.forEach(t)}outputDefined(){return this.args.every((t=>t.outputDefined()))}}const ie={"to-boolean":lt,"to-color":ct,"to-number":at,"to-string":ot}
class re{constructor(t,e){this.type=t,this.args=e}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.")
const i=t[0]
if(!ie[i])throw new Error(`Can't parse ${i} as it is not part of the known types`)
if(("to-boolean"===i||"to-string"===i)&&2!==t.length)return e.error("Expected one argument.")
const r=ie[i],n=[]
for(let s=1;s<t.length;s++){const i=e.parse(t[s],s,ut)
if(!i)return null
n.push(i)}return new re(r,n)}evaluate(t){if("boolean"===this.type.kind)return Boolean(this.args[0].evaluate(t))
if("color"===this.type.kind){let e,i
for(const r of this.args){if(e=r.evaluate(t),i=null,e instanceof $t)return e
if("string"==typeof e){const i=t.parseColor(e)
if(i)return i}else if(Array.isArray(e)&&(i=e.length<3||e.length>4?`Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.`:Wt(e[0],e[1],e[2],e[3]),!i))return new $t(e[0]/255,e[1]/255,e[2]/255,e[3])}throw new Qt(i||`Could not parse color from value '${"string"==typeof e?e:JSON.stringify(e)}'`)}if("padding"===this.type.kind){let e
for(const i of this.args){e=i.evaluate(t)
const r=Gt.parse(e)
if(r)return r}throw new Qt(`Could not parse padding from value '${"string"==typeof e?e:JSON.stringify(e)}'`)}if("number"===this.type.kind){let e=null
for(const i of this.args){if(e=i.evaluate(t),null===e)return 0
const r=Number(e)
if(!isNaN(r))return r}throw new Qt(`Could not convert ${JSON.stringify(e)} to number.`)}return"formatted"===this.type.kind?Zt.fromString(Yt(this.args[0].evaluate(t))):"resolvedImage"===this.type.kind?Xt.fromString(Yt(this.args[0].evaluate(t))):Yt(this.args[0].evaluate(t))}eachChild(t){this.args.forEach(t)}outputDefined(){return this.args.every((t=>t.outputDefined()))}}const ne=["Unknown","Point","LineString","Polygon"]
class se{constructor(){this.globals=null,this.feature=null,this.featureState=null,this.formattedSection=null,this._parseColorCache={},this.availableImages=null,this.canonical=null}id(){return this.feature&&"id"in this.feature?this.feature.id:null}geometryType(){return this.feature?"number"==typeof this.feature.type?ne[this.feature.type]:this.feature.type:null}geometry(){return this.feature&&"geometry"in this.feature?this.feature.geometry:null}canonicalID(){return this.canonical}properties(){return this.feature&&this.feature.properties||{}}parseColor(t){let e=this._parseColorCache[t]
return e||(e=this._parseColorCache[t]=$t.parse(t)),e}}class ae{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new nt,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[]
this.registry=t,this.path=i,this.key=i.map((t=>`[${t}]`)).join(""),this.scope=n,this.errors=s,this.expectedType=r,this._isConstant=e}parse(t,e,i,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
return e?this.concat(e,i,r)._parse(t,n):this._parse(t,n)}_parse(t,e){function i(t,e,i){return"assert"===i?new ee(e,[t]):"coerce"===i?new re(e,[t]):t}if(null!==t&&"string"!=typeof t&&"boolean"!=typeof t&&"number"!=typeof t||(t=["literal",t]),Array.isArray(t)){if(0===t.length)return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].')
const r=t[0]
if("string"!=typeof r)return this.error(`Expression name must be a string, but found ${typeof r} instead. If you wanted a literal array, use ["literal", [...]].`,0),null
const n=this.registry[r]
if(n){let r=n.parse(t,this)
if(!r)return null
if(this.expectedType){const t=this.expectedType,n=r.type
if("string"!==t.kind&&"number"!==t.kind&&"boolean"!==t.kind&&"object"!==t.kind&&"array"!==t.kind||"value"!==n.kind)if("color"!==t.kind&&"formatted"!==t.kind&&"resolvedImage"!==t.kind||"value"!==n.kind&&"string"!==n.kind)if("padding"!==t.kind||"value"!==n.kind&&"number"!==n.kind&&"array"!==n.kind){if(this.checkSubtype(t,n))return null}else r=i(r,t,e.typeAnnotation||"coerce")
else r=i(r,t,e.typeAnnotation||"coerce")
else r=i(r,t,e.typeAnnotation||"assert")}if(!(r instanceof Jt)&&"resolvedImage"!==r.type.kind&&this._isConstant(r)){const e=new se
try{r=new Jt(r.type,r.evaluate(e))}catch(t){return this.error(t.message),null}}return r}return this.error(`Unknown expression "${r}". If you wanted a literal array, use ["literal", [...]].`,0)}return this.error(void 0===t?"'undefined' value invalid. Use null instead.":"object"==typeof t?'Bare objects invalid. Use ["literal", {...}] instead.':`Expected an array, but found ${typeof t} instead.`)}concat(t,e,i){const r="number"==typeof t?this.path.concat(t):this.path,n=i?this.scope.concat(i):this.scope
return new ae(this.registry,this._isConstant,r,e||null,n,this.errors)}error(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r]
const n=`${this.key}${i.map((t=>`[${t}]`)).join("")}`
this.errors.push(new rt(n,t))}checkSubtype(t,e){const i=xt(t,e)
return i&&this.error(i),i}}class oe{constructor(t,e,i){this.type=dt,this.locale=i,this.caseSensitive=t,this.diacriticSensitive=e}static parse(t,e){if(2!==t.length)return e.error("Expected one argument.")
const i=t[1]
if("object"!=typeof i||Array.isArray(i))return e.error("Collator options argument must be an object.")
const r=e.parse(void 0!==i["case-sensitive"]&&i["case-sensitive"],1,lt)
if(!r)return null
const n=e.parse(void 0!==i["diacritic-sensitive"]&&i["diacritic-sensitive"],1,lt)
if(!n)return null
let s=null
return i.locale&&(s=e.parse(i.locale,1,ot),!s)?null:new oe(r,n,s)}evaluate(t){return new qt(this.caseSensitive.evaluate(t),this.diacriticSensitive.evaluate(t),this.locale?this.locale.evaluate(t):null)}eachChild(t){t(this.caseSensitive),t(this.diacriticSensitive),this.locale&&t(this.locale)}outputDefined(){return!1}}const le=8192
function ce(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.max(t[2],e[0]),t[3]=Math.max(t[3],e[1])}function he(t,e){return!(t[0]<=e[0]||t[2]>=e[2]||t[1]<=e[1]||t[3]>=e[3])}function ue(t,e){const i=(180+t[0])/360,r=(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t[1]*Math.PI/360)))/360,n=Math.pow(2,e.z)
return[Math.round(i*n*le),Math.round(r*n*le)]}function de(t,e,i){const r=t[0]-e[0],n=t[1]-e[1],s=t[0]-i[0],a=t[1]-i[1]
return r*a-s*n==0&&r*s<=0&&n*a<=0}function pe(t,e){let i=!1
for(let a=0,o=e.length;a<o;a++){const o=e[a]
for(let e=0,a=o.length;e<a-1;e++){if(de(t,o[e],o[e+1]))return!1;(n=o[e])[1]>(r=t)[1]!=(s=o[e+1])[1]>r[1]&&r[0]<(s[0]-n[0])*(r[1]-n[1])/(s[1]-n[1])+n[0]&&(i=!i)}}var r,n,s
return i}function fe(t,e){for(let i=0;i<e.length;i++)if(pe(t,e[i]))return!0
return!1}function me(t,e,i,r){const n=r[0]-i[0],s=r[1]-i[1],a=(t[0]-i[0])*s-n*(t[1]-i[1]),o=(e[0]-i[0])*s-n*(e[1]-i[1])
return a>0&&o<0||a<0&&o>0}function ge(t,e,i){for(const c of i)for(let i=0;i<c.length-1;++i)if(0!=(o=[(a=c[i+1])[0]-(s=c[i])[0],a[1]-s[1]])[0]*(l=[(n=e)[0]-(r=t)[0],n[1]-r[1]])[1]-o[1]*l[0]&&me(r,n,s,a)&&me(s,a,r,n))return!0
var r,n,s,a,o,l
return!1}function _e(t,e){for(let i=0;i<t.length;++i)if(!pe(t[i],e))return!1
for(let i=0;i<t.length-1;++i)if(ge(t[i],t[i+1],e))return!1
return!0}function ye(t,e){for(let i=0;i<e.length;i++)if(_e(t,e[i]))return!0
return!1}function xe(t,e,i){const r=[]
for(let n=0;n<t.length;n++){const s=[]
for(let r=0;r<t[n].length;r++){const a=ue(t[n][r],i)
ce(e,a),s.push(a)}r.push(s)}return r}function ve(t,e,i){const r=[]
for(let n=0;n<t.length;n++){const s=xe(t[n],e,i)
r.push(s)}return r}function be(t,e,i,r){if(t[0]<i[0]||t[0]>i[2]){const e=.5*r
let n=t[0]-i[0]>e?-r:i[0]-t[0]>e?r:0
0===n&&(n=t[0]-i[2]>e?-r:i[2]-t[0]>e?r:0),t[0]+=n}ce(e,t)}function we(t,e,i,r){const n=Math.pow(2,r.z)*le,s=[r.x*le,r.y*le],a=[]
for(const o of t)for(const t of o){const r=[t.x+s[0],t.y+s[1]]
be(r,e,i,n),a.push(r)}return a}function Te(t,e,i,r){const n=Math.pow(2,r.z)*le,s=[r.x*le,r.y*le],a=[]
for(const l of t){const t=[]
for(const i of l){const r=[i.x+s[0],i.y+s[1]]
ce(e,r),t.push(r)}a.push(t)}if(e[2]-e[0]<=n/2){(o=e)[0]=o[1]=1/0,o[2]=o[3]=-1/0
for(const t of a)for(const r of t)be(r,e,i,n)}var o
return a}class Se{constructor(t,e){this.type=lt,this.geojson=t,this.geometries=e}static parse(t,e){if(2!==t.length)return e.error(`'within' expression requires exactly one argument, but found ${t.length-1} instead.`)
if(Ht(t[1])){const e=t[1]
if("FeatureCollection"===e.type)for(let t=0;t<e.features.length;++t){const i=e.features[t].geometry.type
if("Polygon"===i||"MultiPolygon"===i)return new Se(e,e.features[t].geometry)}else if("Feature"===e.type){const t=e.geometry.type
if("Polygon"===t||"MultiPolygon"===t)return new Se(e,e.geometry)}else if("Polygon"===e.type||"MultiPolygon"===e.type)return new Se(e,e)}return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")}evaluate(t){if(null!=t.geometry()&&null!=t.canonicalID()){if("Point"===t.geometryType())return function(t,e){const i=[1/0,1/0,-1/0,-1/0],r=[1/0,1/0,-1/0,-1/0],n=t.canonicalID()
if("Polygon"===e.type){const s=xe(e.coordinates,r,n),a=we(t.geometry(),i,r,n)
if(!he(i,r))return!1
for(const t of a)if(!pe(t,s))return!1}if("MultiPolygon"===e.type){const s=ve(e.coordinates,r,n),a=we(t.geometry(),i,r,n)
if(!he(i,r))return!1
for(const t of a)if(!fe(t,s))return!1}return!0}(t,this.geometries)
if("LineString"===t.geometryType())return function(t,e){const i=[1/0,1/0,-1/0,-1/0],r=[1/0,1/0,-1/0,-1/0],n=t.canonicalID()
if("Polygon"===e.type){const s=xe(e.coordinates,r,n),a=Te(t.geometry(),i,r,n)
if(!he(i,r))return!1
for(const t of a)if(!_e(t,s))return!1}if("MultiPolygon"===e.type){const s=ve(e.coordinates,r,n),a=Te(t.geometry(),i,r,n)
if(!he(i,r))return!1
for(const t of a)if(!ye(t,s))return!1}return!0}(t,this.geometries)}return!1}eachChild(){}outputDefined(){return!0}}class Ee{constructor(t,e){this.type=e.type,this.name=t,this.boundExpression=e}static parse(t,e){if(2!==t.length||"string"!=typeof t[1])return e.error("'var' expression requires exactly one string literal argument.")
const i=t[1]
return e.scope.has(i)?new Ee(i,e.scope.get(i)):e.error(`Unknown variable "${i}". Make sure "${i}" has been bound in an enclosing "let" expression before using it.`,1)}evaluate(t){return this.boundExpression.evaluate(t)}eachChild(){}outputDefined(){return!1}}class Ie{constructor(t,e,i,r){this.name=t,this.type=e,this._evaluate=i,this.args=r}evaluate(t){return this._evaluate(t,this.args)}eachChild(t){this.args.forEach(t)}outputDefined(){return!1}static parse(t,e){const i=t[0],r=Ie.definitions[i]
if(!r)return e.error(`Unknown expression "${i}". If you wanted a literal array, use ["literal", [...]].`,0)
const n=Array.isArray(r)?r[0]:r.type,s=Array.isArray(r)?[[r[1],r[2]]]:r.overloads,a=s.filter((e=>{let[i]=e
return!Array.isArray(i)||i.length===t.length-1}))
let o=null
for(const[l,c]of a){o=new ae(e.registry,Ae,e.path,null,e.scope)
const r=[]
let s=!1
for(let e=1;e<t.length;e++){const i=t[e],n=Array.isArray(l)?l[e-1]:l.type,a=o.parse(i,1+r.length,n)
if(!a){s=!0
break}r.push(a)}if(!s)if(Array.isArray(l)&&l.length!==r.length)o.error(`Expected ${l.length} arguments, but found ${r.length} instead.`)
else{for(let t=0;t<r.length;t++){const e=Array.isArray(l)?l[t]:l.type,i=r[t]
o.concat(t+1).checkSubtype(e,i.type)}if(0===o.errors.length)return new Ie(i,n,c,r)}}if(1===a.length)e.errors.push(...o.errors)
else{const i=(a.length?a:s).map((t=>{let[e]=t
return i=e,Array.isArray(i)?`(${i.map(_t).join(", ")})`:`(${_t(i.type)}...)`
var i})).join(" | "),r=[]
for(let n=1;n<t.length;n++){const i=e.parse(t[n],1+r.length)
if(!i)return null
r.push(_t(i.type))}e.error(`Expected arguments of type ${i}, but found (${r.join(", ")}) instead.`)}return null}static register(t,e){Ie.definitions=e
for(const i in e)t[i]=Ie}}function Ae(t){if(t instanceof Ee)return Ae(t.boundExpression)
if(t instanceof Ie&&"error"===t.name)return!1
if(t instanceof oe)return!1
if(t instanceof Se)return!1
const e=t instanceof re||t instanceof ee
let i=!0
return t.eachChild((t=>{i=e?i&&Ae(t):i&&t instanceof Jt})),!!i&&Me(t)&&Pe(t,["zoom","heatmap-density","line-progress","accumulated","is-supported-script"])}function Me(t){if(t instanceof Ie){if("get"===t.name&&1===t.args.length)return!1
if("feature-state"===t.name)return!1
if("has"===t.name&&1===t.args.length)return!1
if("properties"===t.name||"geometry-type"===t.name||"id"===t.name)return!1
if(/^filter-/.test(t.name))return!1}if(t instanceof Se)return!1
let e=!0
return t.eachChild((t=>{e&&!Me(t)&&(e=!1)})),e}function Ce(t){if(t instanceof Ie&&"feature-state"===t.name)return!1
let e=!0
return t.eachChild((t=>{e&&!Ce(t)&&(e=!1)})),e}function Pe(t,e){if(t instanceof Ie&&e.indexOf(t.name)>=0)return!1
let i=!0
return t.eachChild((t=>{i&&!Pe(t,e)&&(i=!1)})),i}function ze(t,e){const i=t.length-1
let r,n,s=0,a=i,o=0
for(;s<=a;)if(o=Math.floor((s+a)/2),r=t[o],n=t[o+1],r<=e){if(o===i||e<n)return o
s=o+1}else{if(!(r>e))throw new Qt("Input is not a number.")
a=o-1}return 0}class ke{constructor(t,e,i){this.type=t,this.input=e,this.labels=[],this.outputs=[]
for(const[r,n]of i)this.labels.push(r),this.outputs.push(n)}static parse(t,e){if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`)
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
const i=e.parse(t[1],1,at)
if(!i)return null
const r=[]
let n=null
e.expectedType&&"value"!==e.expectedType.kind&&(n=e.expectedType)
for(let s=1;s<t.length;s+=2){const i=1===s?-1/0:t[s],a=t[s+1],o=s,l=s+1
if("number"!=typeof i)return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.',o)
if(r.length&&r[r.length-1][0]>=i)return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.',o)
const c=e.parse(a,l,n)
if(!c)return null
n=n||c.type,r.push([i,c])}return new ke(n,i,r)}evaluate(t){const e=this.labels,i=this.outputs
if(1===e.length)return i[0].evaluate(t)
const r=this.input.evaluate(t)
if(r<=e[0])return i[0].evaluate(t)
const n=e.length
return r>=e[n-1]?i[n-1].evaluate(t):i[ze(e,r)].evaluate(t)}eachChild(t){t(this.input)
for(const e of this.outputs)t(e)}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}}function De(t,e,i){return t+i*(e-t)}function Le(t,e,i){return t.map(((t,r)=>De(t,e[r],i)))}const Be={number:De,color:function(t,e,i){switch(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgb"){case"rgb":{const[r,n,s,a]=Le(t.rgb,e.rgb,i)
return new $t(r,n,s,a,!1)}case"hcl":{const[r,n,s,a]=t.hcl,[o,l,c,h]=e.hcl
let u,d
if(isNaN(r)||isNaN(o))isNaN(r)?isNaN(o)?u=NaN:(u=o,1!==s&&0!==s||(d=l)):(u=r,1!==c&&0!==c||(d=n))
else{let t=o-r
o>r&&t>180?t-=360:o<r&&r-o>180&&(t+=360),u=r+i*t}const[p,f,m,g]=function(t){let[e,i,r,n]=t
return e=isNaN(e)?0:e*Mt,Lt([r,Math.cos(e)*i,Math.sin(e)*i,n])}([u,null!=d?d:De(n,l,i),De(s,c,i),De(a,h,i)])
return new $t(p,f,m,g,!1)}case"lab":{const[r,n,s,a]=Lt(Le(t.lab,e.lab,i))
return new $t(r,n,s,a,!1)}}},array:Le,padding:function(t,e,i){return new Gt(Le(t.values,e.values,i))}}
class Re{constructor(t,e,i,r,n){this.type=t,this.operator=e,this.interpolation=i,this.input=r,this.labels=[],this.outputs=[]
for(const[s,a]of n)this.labels.push(s),this.outputs.push(a)}static interpolationFactor(t,e,i,r){let n=0
if("exponential"===t.name)n=Fe(e,t.base,i,r)
else if("linear"===t.name)n=Fe(e,1,i,r)
else if("cubic-bezier"===t.name){const s=t.controlPoints
n=new o(s[0],s[1],s[2],s[3]).solve(Fe(e,1,i,r))}return n}static parse(t,e){let[i,r,n,...s]=t
if(!Array.isArray(r)||0===r.length)return e.error("Expected an interpolation type expression.",1)
if("linear"===r[0])r={name:"linear"}
else if("exponential"===r[0]){const t=r[1]
if("number"!=typeof t)return e.error("Exponential interpolation requires a numeric base.",1,1)
r={name:"exponential",base:t}}else{if("cubic-bezier"!==r[0])return e.error(`Unknown interpolation type ${String(r[0])}`,1,0)
{const t=r.slice(1)
if(4!==t.length||t.some((t=>"number"!=typeof t||t<0||t>1)))return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.",1)
r={name:"cubic-bezier",controlPoints:t}}}if(t.length-1<4)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`)
if((t.length-1)%2!=0)return e.error("Expected an even number of arguments.")
if(n=e.parse(n,2,at),!n)return null
const a=[]
let o=null
"interpolate-hcl"===i||"interpolate-lab"===i?o=ct:e.expectedType&&"value"!==e.expectedType.kind&&(o=e.expectedType)
for(let l=0;l<s.length;l+=2){const t=s[l],i=s[l+1],r=l+3,n=l+4
if("number"!=typeof t)return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.',r)
if(a.length&&a[a.length-1][0]>=t)return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.',r)
const c=e.parse(i,n,o)
if(!c)return null
o=o||c.type,a.push([t,c])}return wt(o,at)||wt(o,ct)||wt(o,ft)||wt(o,gt(at))?new Re(o,i,r,n,a):e.error(`Type ${_t(o)} is not interpolatable.`)}evaluate(t){const e=this.labels,i=this.outputs
if(1===e.length)return i[0].evaluate(t)
const r=this.input.evaluate(t)
if(r<=e[0])return i[0].evaluate(t)
const n=e.length
if(r>=e[n-1])return i[n-1].evaluate(t)
const s=ze(e,r),a=Re.interpolationFactor(this.interpolation,r,e[s],e[s+1]),o=i[s].evaluate(t),l=i[s+1].evaluate(t)
switch(this.operator){case"interpolate":return Be[this.type.kind](o,l,a)
case"interpolate-hcl":return Be.color(o,l,a,"hcl")
case"interpolate-lab":return Be.color(o,l,a,"lab")}}eachChild(t){t(this.input)
for(const e of this.outputs)t(e)}outputDefined(){return this.outputs.every((t=>t.outputDefined()))}}function Fe(t,e,i,r){const n=r-i,s=t-i
return 0===n?0:1===e?s/n:(Math.pow(e,s)-1)/(Math.pow(e,n)-1)}class Oe{constructor(t,e){this.type=t,this.args=e}static parse(t,e){if(t.length<2)return e.error("Expectected at least one argument.")
let i=null
const r=e.expectedType
r&&"value"!==r.kind&&(i=r)
const n=[]
for(const a of t.slice(1)){const t=e.parse(a,1+n.length,i,void 0,{typeAnnotation:"omit"})
if(!t)return null
i=i||t.type,n.push(t)}if(!i)throw new Error("No output type")
const s=r&&n.some((t=>xt(r,t.type)))
return new Oe(s?ut:i,n)}evaluate(t){let e,i=null,r=0
for(const n of this.args)if(r++,i=n.evaluate(t),i&&i instanceof Xt&&!i.available&&(e||(e=i.name),i=null,r===this.args.length&&(i=e)),null!==i)break
return i}eachChild(t){this.args.forEach(t)}outputDefined(){return this.args.every((t=>t.outputDefined()))}}class Ue{constructor(t,e){this.type=e.type,this.bindings=[].concat(t),this.result=e}evaluate(t){return this.result.evaluate(t)}eachChild(t){for(const e of this.bindings)t(e[1])
t(this.result)}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found ${t.length-1} instead.`)
const i=[]
for(let n=1;n<t.length-1;n+=2){const r=t[n]
if("string"!=typeof r)return e.error(`Expected string, but found ${typeof r} instead.`,n)
if(/[^a-zA-Z0-9_]/.test(r))return e.error("Variable names must contain only alphanumeric characters or '_'.",n)
const s=e.parse(t[n+1],n+1)
if(!s)return null
i.push([r,s])}const r=e.parse(t[t.length-1],t.length-1,e.expectedType,i)
return r?new Ue(i,r):null}outputDefined(){return this.result.outputDefined()}}class Ve{constructor(t,e,i){this.type=t,this.index=e,this.input=i}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,at),r=e.parse(t[2],2,gt(e.expectedType||ut))
return i&&r?new Ve(r.type.itemType,i,r):null}evaluate(t){const e=this.index.evaluate(t),i=this.input.evaluate(t)
if(e<0)throw new Qt(`Array index out of bounds: ${e} < 0.`)
if(e>=i.length)throw new Qt(`Array index out of bounds: ${e} > ${i.length-1}.`)
if(e!==Math.floor(e))throw new Qt(`Array index must be an integer, but found ${e} instead.`)
return i[e]}eachChild(t){t(this.index),t(this.input)}outputDefined(){return!1}}class Ne{constructor(t,e){this.type=lt,this.needle=t,this.haystack=e}static parse(t,e){if(3!==t.length)return e.error(`Expected 2 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,ut),r=e.parse(t[2],2,ut)
return i&&r?vt(i.type,[lt,ot,at,st,ut])?new Ne(i,r):e.error(`Expected first argument to be of type boolean, string, number or null, but found ${_t(i.type)} instead`):null}evaluate(t){const e=this.needle.evaluate(t),i=this.haystack.evaluate(t)
if(!i)return!1
if(!bt(e,["boolean","string","number","null"]))throw new Qt(`Expected first argument to be of type boolean, string, number or null, but found ${_t(Kt(e))} instead.`)
if(!bt(i,["string","array"]))throw new Qt(`Expected second argument to be of type array or string, but found ${_t(Kt(i))} instead.`)
return i.indexOf(e)>=0}eachChild(t){t(this.needle),t(this.haystack)}outputDefined(){return!0}}class $e{constructor(t,e,i){this.type=at,this.needle=t,this.haystack=e,this.fromIndex=i}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,ut),r=e.parse(t[2],2,ut)
if(!i||!r)return null
if(!vt(i.type,[lt,ot,at,st,ut]))return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${_t(i.type)} instead`)
if(4===t.length){const n=e.parse(t[3],3,at)
return n?new $e(i,r,n):null}return new $e(i,r)}evaluate(t){const e=this.needle.evaluate(t),i=this.haystack.evaluate(t)
if(!bt(e,["boolean","string","number","null"]))throw new Qt(`Expected first argument to be of type boolean, string, number or null, but found ${_t(Kt(e))} instead.`)
if(!bt(i,["string","array"]))throw new Qt(`Expected second argument to be of type array or string, but found ${_t(Kt(i))} instead.`)
if(this.fromIndex){const r=this.fromIndex.evaluate(t)
return i.indexOf(e,r)}return i.indexOf(e)}eachChild(t){t(this.needle),t(this.haystack),this.fromIndex&&t(this.fromIndex)}outputDefined(){return!1}}class qe{constructor(t,e,i,r,n,s){this.inputType=t,this.type=e,this.input=i,this.cases=r,this.outputs=n,this.otherwise=s}static parse(t,e){if(t.length<5)return e.error(`Expected at least 4 arguments, but found only ${t.length-1}.`)
if(t.length%2!=1)return e.error("Expected an even number of arguments.")
let i,r
e.expectedType&&"value"!==e.expectedType.kind&&(r=e.expectedType)
const n={},s=[]
for(let l=2;l<t.length-1;l+=2){let a=t[l]
const o=t[l+1]
Array.isArray(a)||(a=[a])
const c=e.concat(l)
if(0===a.length)return c.error("Expected at least one branch label.")
for(const t of a){if("number"!=typeof t&&"string"!=typeof t)return c.error("Branch labels must be numbers or strings.")
if("number"==typeof t&&Math.abs(t)>Number.MAX_SAFE_INTEGER)return c.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`)
if("number"==typeof t&&Math.floor(t)!==t)return c.error("Numeric branch labels must be integer values.")
if(i){if(c.checkSubtype(i,Kt(t)))return null}else i=Kt(t)
if(void 0!==n[String(t)])return c.error("Branch labels must be unique.")
n[String(t)]=s.length}const h=e.parse(o,l,r)
if(!h)return null
r=r||h.type,s.push(h)}const a=e.parse(t[1],1,ut)
if(!a)return null
const o=e.parse(t[t.length-1],t.length-1,r)
return o?"value"!==a.type.kind&&e.concat(1).checkSubtype(i,a.type)?null:new qe(i,r,a,n,s,o):null}evaluate(t){const e=this.input.evaluate(t)
return(Kt(e)===this.inputType&&this.outputs[this.cases[e]]||this.otherwise).evaluate(t)}eachChild(t){t(this.input),this.outputs.forEach(t),t(this.otherwise)}outputDefined(){return this.outputs.every((t=>t.outputDefined()))&&this.otherwise.outputDefined()}}class je{constructor(t,e,i){this.type=t,this.branches=e,this.otherwise=i}static parse(t,e){if(t.length<4)return e.error(`Expected at least 3 arguments, but found only ${t.length-1}.`)
if(t.length%2!=0)return e.error("Expected an odd number of arguments.")
let i
e.expectedType&&"value"!==e.expectedType.kind&&(i=e.expectedType)
const r=[]
for(let s=1;s<t.length-1;s+=2){const n=e.parse(t[s],s,lt)
if(!n)return null
const a=e.parse(t[s+1],s+1,i)
if(!a)return null
r.push([n,a]),i=i||a.type}const n=e.parse(t[t.length-1],t.length-1,i)
if(!n)return null
if(!i)throw new Error("Can't infer output type")
return new je(i,r,n)}evaluate(t){for(const[e,i]of this.branches)if(e.evaluate(t))return i.evaluate(t)
return this.otherwise.evaluate(t)}eachChild(t){for(const[e,i]of this.branches)t(e),t(i)
t(this.otherwise)}outputDefined(){return this.branches.every((t=>{let[e,i]=t
return i.outputDefined()}))&&this.otherwise.outputDefined()}}class Ze{constructor(t,e,i,r){this.type=t,this.input=e,this.beginIndex=i,this.endIndex=r}static parse(t,e){if(t.length<=2||t.length>=5)return e.error(`Expected 3 or 4 arguments, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1,ut),r=e.parse(t[2],2,at)
if(!i||!r)return null
if(!vt(i.type,[gt(ut),ot,ut]))return e.error(`Expected first argument to be of type array or string, but found ${_t(i.type)} instead`)
if(4===t.length){const n=e.parse(t[3],3,at)
return n?new Ze(i.type,i,r,n):null}return new Ze(i.type,i,r)}evaluate(t){const e=this.input.evaluate(t),i=this.beginIndex.evaluate(t)
if(!bt(e,["string","array"]))throw new Qt(`Expected first argument to be of type array or string, but found ${_t(Kt(e))} instead.`)
if(this.endIndex){const r=this.endIndex.evaluate(t)
return e.slice(i,r)}return e.slice(i)}eachChild(t){t(this.input),t(this.beginIndex),this.endIndex&&t(this.endIndex)}outputDefined(){return!1}}function Ge(t,e){return"=="===t||"!="===t?"boolean"===e.kind||"string"===e.kind||"number"===e.kind||"null"===e.kind||"value"===e.kind:"string"===e.kind||"number"===e.kind||"value"===e.kind}function Xe(t,e,i,r){return 0===r.compare(e,i)}function We(t,e,i){const r="=="!==t&&"!="!==t
return class n{constructor(t,e,i){this.type=lt,this.lhs=t,this.rhs=e,this.collator=i,this.hasUntypedArgument="value"===t.type.kind||"value"===e.type.kind}static parse(t,e){if(3!==t.length&&4!==t.length)return e.error("Expected two or three arguments.")
const i=t[0]
let s=e.parse(t[1],1,ut)
if(!s)return null
if(!Ge(i,s.type))return e.concat(1).error(`"${i}" comparisons are not supported for type '${_t(s.type)}'.`)
let a=e.parse(t[2],2,ut)
if(!a)return null
if(!Ge(i,a.type))return e.concat(2).error(`"${i}" comparisons are not supported for type '${_t(a.type)}'.`)
if(s.type.kind!==a.type.kind&&"value"!==s.type.kind&&"value"!==a.type.kind)return e.error(`Cannot compare types '${_t(s.type)}' and '${_t(a.type)}'.`)
r&&("value"===s.type.kind&&"value"!==a.type.kind?s=new ee(a.type,[s]):"value"!==s.type.kind&&"value"===a.type.kind&&(a=new ee(s.type,[a])))
let o=null
if(4===t.length){if("string"!==s.type.kind&&"string"!==a.type.kind&&"value"!==s.type.kind&&"value"!==a.type.kind)return e.error("Cannot use collator to compare non-string types.")
if(o=e.parse(t[3],3,dt),!o)return null}return new n(s,a,o)}evaluate(n){const s=this.lhs.evaluate(n),a=this.rhs.evaluate(n)
if(r&&this.hasUntypedArgument){const e=Kt(s),i=Kt(a)
if(e.kind!==i.kind||"string"!==e.kind&&"number"!==e.kind)throw new Qt(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${i.kind}) instead.`)}if(this.collator&&!r&&this.hasUntypedArgument){const t=Kt(s),i=Kt(a)
if("string"!==t.kind||"string"!==i.kind)return e(n,s,a)}return this.collator?i(n,s,a,this.collator.evaluate(n)):e(n,s,a)}eachChild(t){t(this.lhs),t(this.rhs),this.collator&&t(this.collator)}outputDefined(){return!0}}}const He=We("==",(function(t,e,i){return e===i}),Xe),Ke=We("!=",(function(t,e,i){return e!==i}),(function(t,e,i,r){return!Xe(0,e,i,r)})),Ye=We("<",(function(t,e,i){return e<i}),(function(t,e,i,r){return r.compare(e,i)<0})),Je=We(">",(function(t,e,i){return e>i}),(function(t,e,i,r){return r.compare(e,i)>0})),Qe=We("<=",(function(t,e,i){return e<=i}),(function(t,e,i,r){return r.compare(e,i)<=0})),ti=We(">=",(function(t,e,i){return e>=i}),(function(t,e,i,r){return r.compare(e,i)>=0}))
class ei{constructor(t,e,i,r,n){this.type=ot,this.number=t,this.locale=e,this.currency=i,this.minFractionDigits=r,this.maxFractionDigits=n}static parse(t,e){if(3!==t.length)return e.error("Expected two arguments.")
const i=e.parse(t[1],1,at)
if(!i)return null
const r=t[2]
if("object"!=typeof r||Array.isArray(r))return e.error("NumberFormat options argument must be an object.")
let n=null
if(r.locale&&(n=e.parse(r.locale,1,ot),!n))return null
let s=null
if(r.currency&&(s=e.parse(r.currency,1,ot),!s))return null
let a=null
if(r["min-fraction-digits"]&&(a=e.parse(r["min-fraction-digits"],1,at),!a))return null
let o=null
return r["max-fraction-digits"]&&(o=e.parse(r["max-fraction-digits"],1,at),!o)?null:new ei(i,n,s,a,o)}evaluate(t){return new Intl.NumberFormat(this.locale?this.locale.evaluate(t):[],{style:this.currency?"currency":"decimal",currency:this.currency?this.currency.evaluate(t):void 0,minimumFractionDigits:this.minFractionDigits?this.minFractionDigits.evaluate(t):void 0,maximumFractionDigits:this.maxFractionDigits?this.maxFractionDigits.evaluate(t):void 0}).format(this.number.evaluate(t))}eachChild(t){t(this.number),this.locale&&t(this.locale),this.currency&&t(this.currency),this.minFractionDigits&&t(this.minFractionDigits),this.maxFractionDigits&&t(this.maxFractionDigits)}outputDefined(){return!1}}class ii{constructor(t){this.type=pt,this.sections=t}static parse(t,e){if(t.length<2)return e.error("Expected at least one argument.")
const i=t[1]
if(!Array.isArray(i)&&"object"==typeof i)return e.error("First argument must be an image or text section.")
const r=[]
let n=!1
for(let s=1;s<=t.length-1;++s){const i=t[s]
if(n&&"object"==typeof i&&!Array.isArray(i)){n=!1
let t=null
if(i["font-scale"]&&(t=e.parse(i["font-scale"],1,at),!t))return null
let s=null
if(i["text-font"]&&(s=e.parse(i["text-font"],1,gt(ot)),!s))return null
let a=null
if(i["text-color"]&&(a=e.parse(i["text-color"],1,ct),!a))return null
const o=r[r.length-1]
o.scale=t,o.font=s,o.textColor=a}else{const i=e.parse(t[s],1,ut)
if(!i)return null
const a=i.type.kind
if("string"!==a&&"value"!==a&&"null"!==a&&"resolvedImage"!==a)return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.")
n=!0,r.push({content:i,scale:null,font:null,textColor:null})}}return new ii(r)}evaluate(t){return new Zt(this.sections.map((e=>{const i=e.content.evaluate(t)
return Kt(i)===mt?new jt("",i,null,null,null):new jt(Yt(i),null,e.scale?e.scale.evaluate(t):null,e.font?e.font.evaluate(t).join(","):null,e.textColor?e.textColor.evaluate(t):null)})))}eachChild(t){for(const e of this.sections)t(e.content),e.scale&&t(e.scale),e.font&&t(e.font),e.textColor&&t(e.textColor)}outputDefined(){return!1}}class ri{constructor(t){this.type=mt,this.input=t}static parse(t,e){if(2!==t.length)return e.error("Expected two arguments.")
const i=e.parse(t[1],1,ot)
return i?new ri(i):e.error("No image name provided.")}evaluate(t){const e=this.input.evaluate(t),i=Xt.fromString(e)
return i&&t.availableImages&&(i.available=t.availableImages.indexOf(e)>-1),i}eachChild(t){t(this.input)}outputDefined(){return!1}}class ni{constructor(t){this.type=at,this.input=t}static parse(t,e){if(2!==t.length)return e.error(`Expected 1 argument, but found ${t.length-1} instead.`)
const i=e.parse(t[1],1)
return i?"array"!==i.type.kind&&"string"!==i.type.kind&&"value"!==i.type.kind?e.error(`Expected argument of type string or array, but found ${_t(i.type)} instead.`):new ni(i):null}evaluate(t){const e=this.input.evaluate(t)
if("string"==typeof e)return e.length
if(Array.isArray(e))return e.length
throw new Qt(`Expected value to be of type string or array, but found ${_t(Kt(e))} instead.`)}eachChild(t){t(this.input)}outputDefined(){return!1}}const si={"==":He,"!=":Ke,">":Je,"<":Ye,">=":ti,"<=":Qe,array:ee,at:Ve,boolean:ee,case:je,coalesce:Oe,collator:oe,format:ii,image:ri,in:Ne,"index-of":$e,interpolate:Re,"interpolate-hcl":Re,"interpolate-lab":Re,length:ni,let:Ue,literal:Jt,match:qe,number:ee,"number-format":ei,object:ee,slice:Ze,step:ke,string:ee,"to-boolean":re,"to-color":re,"to-number":re,"to-string":re,var:Ee,within:Se}
function ai(t,e){let[i,r,n,s]=e
i=i.evaluate(t),r=r.evaluate(t),n=n.evaluate(t)
const a=s?s.evaluate(t):1,o=Wt(i,r,n,a)
if(o)throw new Qt(o)
return new $t(i/255,r/255,n/255,a,!1)}function oi(t,e){return t in e}function li(t,e){const i=e[t]
return void 0===i?null:i}function ci(t){return{type:t}}function hi(t){return{result:"success",value:t}}function ui(t){return{result:"error",value:t}}function di(t){return"data-driven"===t["property-type"]||"cross-faded-data-driven"===t["property-type"]}function pi(t){return!!t.expression&&t.expression.parameters.indexOf("zoom")>-1}function fi(t){return!!t.expression&&t.expression.interpolated}function mi(t){return t instanceof Number?"number":t instanceof String?"string":t instanceof Boolean?"boolean":Array.isArray(t)?"array":null===t?"null":typeof t}function gi(t){return"object"==typeof t&&null!==t&&!Array.isArray(t)}function _i(t){return t}function yi(t,e){const i="color"===e.type,r=t.stops&&"object"==typeof t.stops[0][0],n=r||!(r||void 0!==t.property),s=t.type||(fi(e)?"exponential":"interval")
if(i||"padding"===e.type){const r=i?$t.parse:Gt.parse;(t=it({},t)).stops&&(t.stops=t.stops.map((t=>[t[0],r(t[1])]))),t.default=r(t.default?t.default:e.default)}if(t.colorSpace&&"rgb"!==(a=t.colorSpace)&&"hcl"!==a&&"lab"!==a)throw new Error(`Unknown color space: "${t.colorSpace}"`)
var a
let o,l,c
if("exponential"===s)o=wi
else if("interval"===s)o=bi
else if("categorical"===s){o=vi,l=Object.create(null)
for(const e of t.stops)l[e[0]]=e[1]
c=typeof t.stops[0][0]}else{if("identity"!==s)throw new Error(`Unknown function type "${s}"`)
o=Ti}if(r){const i={},r=[]
for(let e=0;e<t.stops.length;e++){const n=t.stops[e],s=n[0].zoom
void 0===i[s]&&(i[s]={zoom:s,type:t.type,property:t.property,default:t.default,stops:[]},r.push(s)),i[s].stops.push([n[0].value,n[1]])}const n=[]
for(const t of r)n.push([i[t].zoom,yi(i[t],e)])
const s={name:"linear"}
return{kind:"composite",interpolationType:s,interpolationFactor:Re.interpolationFactor.bind(void 0,s),zoomStops:n.map((t=>t[0])),evaluate:(i,r)=>{let{zoom:s}=i
return wi({stops:n,base:t.base},e,s).evaluate(s,r)}}}if(n){const i="exponential"===s?{name:"exponential",base:void 0!==t.base?t.base:1}:null
return{kind:"camera",interpolationType:i,interpolationFactor:Re.interpolationFactor.bind(void 0,i),zoomStops:t.stops.map((t=>t[0])),evaluate:i=>{let{zoom:r}=i
return o(t,e,r,l,c)}}}return{kind:"source",evaluate(i,r){const n=r&&r.properties?r.properties[t.property]:void 0
return void 0===n?xi(t.default,e.default):o(t,e,n,l,c)}}}function xi(t,e,i){return void 0!==t?t:void 0!==e?e:void 0!==i?i:void 0}function vi(t,e,i,r,n){return xi(typeof i===n?r[i]:void 0,t.default,e.default)}function bi(t,e,i){if("number"!==mi(i))return xi(t.default,e.default)
const r=t.stops.length
if(1===r)return t.stops[0][1]
if(i<=t.stops[0][0])return t.stops[0][1]
if(i>=t.stops[r-1][0])return t.stops[r-1][1]
const n=ze(t.stops.map((t=>t[0])),i)
return t.stops[n][1]}function wi(t,e,i){const r=void 0!==t.base?t.base:1
if("number"!==mi(i))return xi(t.default,e.default)
const n=t.stops.length
if(1===n)return t.stops[0][1]
if(i<=t.stops[0][0])return t.stops[0][1]
if(i>=t.stops[n-1][0])return t.stops[n-1][1]
const s=ze(t.stops.map((t=>t[0])),i),a=function(t,e,i,r){const n=r-i,s=t-i
return 0===n?0:1===e?s/n:(Math.pow(e,s)-1)/(Math.pow(e,n)-1)}(i,r,t.stops[s][0],t.stops[s+1][0]),o=t.stops[s][1],l=t.stops[s+1][1],c=Be[e.type]||_i
return"function"==typeof o.evaluate?{evaluate(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r]
const n=o.evaluate.apply(void 0,i),s=l.evaluate.apply(void 0,i)
if(void 0!==n&&void 0!==s)return c(n,s,a,t.colorSpace)}}:c(o,l,a,t.colorSpace)}function Ti(t,e,i){switch(e.type){case"color":i=$t.parse(i)
break
case"formatted":i=Zt.fromString(i.toString())
break
case"resolvedImage":i=Xt.fromString(i.toString())
break
case"padding":i=Gt.parse(i)
break
default:mi(i)===e.type||"enum"===e.type&&e.values[i]||(i=void 0)}return xi(i,t.default,e.default)}Ie.register(si,{error:[{kind:"error"},[ot],(t,e)=>{let[i]=e
throw new Qt(i.evaluate(t))}],typeof:[ot,[ut],(t,e)=>{let[i]=e
return _t(Kt(i.evaluate(t)))}],"to-rgba":[gt(at,4),[ct],(t,e)=>{let[i]=e
const[r,n,s,a]=i.evaluate(t).rgb
return[255*r,255*n,255*s,a]}],rgb:[ct,[at,at,at],ai],rgba:[ct,[at,at,at,at],ai],has:{type:lt,overloads:[[[ot],(t,e)=>{let[i]=e
return oi(i.evaluate(t),t.properties())}],[[ot,ht],(t,e)=>{let[i,r]=e
return oi(i.evaluate(t),r.evaluate(t))}]]},get:{type:ut,overloads:[[[ot],(t,e)=>{let[i]=e
return li(i.evaluate(t),t.properties())}],[[ot,ht],(t,e)=>{let[i,r]=e
return li(i.evaluate(t),r.evaluate(t))}]]},"feature-state":[ut,[ot],(t,e)=>{let[i]=e
return li(i.evaluate(t),t.featureState||{})}],properties:[ht,[],t=>t.properties()],"geometry-type":[ot,[],t=>t.geometryType()],id:[ut,[],t=>t.id()],zoom:[at,[],t=>t.globals.zoom],"heatmap-density":[at,[],t=>t.globals.heatmapDensity||0],"line-progress":[at,[],t=>t.globals.lineProgress||0],accumulated:[ut,[],t=>void 0===t.globals.accumulated?null:t.globals.accumulated],"+":[at,ci(at),(t,e)=>{let i=0
for(const r of e)i+=r.evaluate(t)
return i}],"*":[at,ci(at),(t,e)=>{let i=1
for(const r of e)i*=r.evaluate(t)
return i}],"-":{type:at,overloads:[[[at,at],(t,e)=>{let[i,r]=e
return i.evaluate(t)-r.evaluate(t)}],[[at],(t,e)=>{let[i]=e
return-i.evaluate(t)}]]},"/":[at,[at,at],(t,e)=>{let[i,r]=e
return i.evaluate(t)/r.evaluate(t)}],"%":[at,[at,at],(t,e)=>{let[i,r]=e
return i.evaluate(t)%r.evaluate(t)}],ln2:[at,[],()=>Math.LN2],pi:[at,[],()=>Math.PI],e:[at,[],()=>Math.E],"^":[at,[at,at],(t,e)=>{let[i,r]=e
return Math.pow(i.evaluate(t),r.evaluate(t))}],sqrt:[at,[at],(t,e)=>{let[i]=e
return Math.sqrt(i.evaluate(t))}],log10:[at,[at],(t,e)=>{let[i]=e
return Math.log(i.evaluate(t))/Math.LN10}],ln:[at,[at],(t,e)=>{let[i]=e
return Math.log(i.evaluate(t))}],log2:[at,[at],(t,e)=>{let[i]=e
return Math.log(i.evaluate(t))/Math.LN2}],sin:[at,[at],(t,e)=>{let[i]=e
return Math.sin(i.evaluate(t))}],cos:[at,[at],(t,e)=>{let[i]=e
return Math.cos(i.evaluate(t))}],tan:[at,[at],(t,e)=>{let[i]=e
return Math.tan(i.evaluate(t))}],asin:[at,[at],(t,e)=>{let[i]=e
return Math.asin(i.evaluate(t))}],acos:[at,[at],(t,e)=>{let[i]=e
return Math.acos(i.evaluate(t))}],atan:[at,[at],(t,e)=>{let[i]=e
return Math.atan(i.evaluate(t))}],min:[at,ci(at),(t,e)=>Math.min(...e.map((e=>e.evaluate(t))))],max:[at,ci(at),(t,e)=>Math.max(...e.map((e=>e.evaluate(t))))],abs:[at,[at],(t,e)=>{let[i]=e
return Math.abs(i.evaluate(t))}],round:[at,[at],(t,e)=>{let[i]=e
const r=i.evaluate(t)
return r<0?-Math.round(-r):Math.round(r)}],floor:[at,[at],(t,e)=>{let[i]=e
return Math.floor(i.evaluate(t))}],ceil:[at,[at],(t,e)=>{let[i]=e
return Math.ceil(i.evaluate(t))}],"filter-==":[lt,[ot,ut],(t,e)=>{let[i,r]=e
return t.properties()[i.value]===r.value}],"filter-id-==":[lt,[ut],(t,e)=>{let[i]=e
return t.id()===i.value}],"filter-type-==":[lt,[ot],(t,e)=>{let[i]=e
return t.geometryType()===i.value}],"filter-<":[lt,[ot,ut],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n<s}],"filter-id-<":[lt,[ut],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r<n}],"filter->":[lt,[ot,ut],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n>s}],"filter-id->":[lt,[ut],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r>n}],"filter-<=":[lt,[ot,ut],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n<=s}],"filter-id-<=":[lt,[ut],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r<=n}],"filter->=":[lt,[ot,ut],(t,e)=>{let[i,r]=e
const n=t.properties()[i.value],s=r.value
return typeof n==typeof s&&n>=s}],"filter-id->=":[lt,[ut],(t,e)=>{let[i]=e
const r=t.id(),n=i.value
return typeof r==typeof n&&r>=n}],"filter-has":[lt,[ut],(t,e)=>{let[i]=e
return i.value in t.properties()}],"filter-has-id":[lt,[],t=>null!==t.id()&&void 0!==t.id()],"filter-type-in":[lt,[gt(ot)],(t,e)=>{let[i]=e
return i.value.indexOf(t.geometryType())>=0}],"filter-id-in":[lt,[gt(ut)],(t,e)=>{let[i]=e
return i.value.indexOf(t.id())>=0}],"filter-in-small":[lt,[ot,gt(ut)],(t,e)=>{let[i,r]=e
return r.value.indexOf(t.properties()[i.value])>=0}],"filter-in-large":[lt,[ot,gt(ut)],(t,e)=>{let[i,r]=e
return function(t,e,i,r){for(;i<=r;){const n=i+r>>1
if(e[n]===t)return!0
e[n]>t?r=n-1:i=n+1}return!1}(t.properties()[i.value],r.value,0,r.value.length-1)}],all:{type:lt,overloads:[[[lt,lt],(t,e)=>{let[i,r]=e
return i.evaluate(t)&&r.evaluate(t)}],[ci(lt),(t,e)=>{for(const i of e)if(!i.evaluate(t))return!1
return!0}]]},any:{type:lt,overloads:[[[lt,lt],(t,e)=>{let[i,r]=e
return i.evaluate(t)||r.evaluate(t)}],[ci(lt),(t,e)=>{for(const i of e)if(i.evaluate(t))return!0
return!1}]]},"!":[lt,[lt],(t,e)=>{let[i]=e
return!i.evaluate(t)}],"is-supported-script":[lt,[ot],(t,e)=>{let[i]=e
const r=t.globals&&t.globals.isSupportedScript
return!r||r(i.evaluate(t))}],upcase:[ot,[ot],(t,e)=>{let[i]=e
return i.evaluate(t).toUpperCase()}],downcase:[ot,[ot],(t,e)=>{let[i]=e
return i.evaluate(t).toLowerCase()}],concat:[ot,ci(ut),(t,e)=>e.map((e=>Yt(e.evaluate(t)))).join("")],"resolved-locale":[ot,[dt],(t,e)=>{let[i]=e
return i.evaluate(t).resolvedLocale()}]})
class Si{constructor(t,e){var i
this.expression=t,this._warningHistory={},this._evaluator=new se,this._defaultValue=e?"color"===(i=e).type&&gi(i.default)?new $t(0,0,0,0):"color"===i.type?$t.parse(i.default)||null:"padding"===i.type?Gt.parse(i.default)||null:void 0===i.default?null:i.default:null,this._enumValues=e&&"enum"===e.type?e.values:null}evaluateWithoutErrorHandling(t,e,i,r,n,s){return this._evaluator.globals=t,this._evaluator.feature=e,this._evaluator.featureState=i,this._evaluator.canonical=r,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=s,this.expression.evaluate(this._evaluator)}evaluate(t,e,i,r,n,s){this._evaluator.globals=t,this._evaluator.feature=e||null,this._evaluator.featureState=i||null,this._evaluator.canonical=r,this._evaluator.availableImages=n||null,this._evaluator.formattedSection=s||null
try{const t=this.expression.evaluate(this._evaluator)
if(null==t||"number"==typeof t&&t!=t)return this._defaultValue
if(this._enumValues&&!(t in this._enumValues))throw new Qt(`Expected value to be one of ${Object.keys(this._enumValues).map((t=>JSON.stringify(t))).join(", ")}, but found ${JSON.stringify(t)} instead.`)
return t}catch(t){return this._warningHistory[t.message]||(this._warningHistory[t.message]=!0,"undefined"!=typeof console&&console.warn(t.message)),this._defaultValue}}}function Ei(t){return Array.isArray(t)&&t.length>0&&"string"==typeof t[0]&&t[0]in si}function Ii(t,e){const i=new ae(si,Ae,[],e?function(t){const e={color:ct,string:ot,number:at,enum:ot,boolean:lt,formatted:pt,padding:ft,resolvedImage:mt}
return"array"===t.type?gt(e[t.value]||ut,t.length):e[t.type]}(e):void 0),r=i.parse(t,void 0,void 0,void 0,e&&"string"===e.type?{typeAnnotation:"coerce"}:void 0)
return r?hi(new Si(r,e)):ui(i.errors)}class Ai{constructor(t,e){this.kind=t,this._styleExpression=e,this.isStateDependent="constant"!==t&&!Ce(e.expression)}evaluateWithoutErrorHandling(t,e,i,r,n,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,i,r,n,s)}evaluate(t,e,i,r,n,s){return this._styleExpression.evaluate(t,e,i,r,n,s)}}class Mi{constructor(t,e,i,r){this.kind=t,this.zoomStops=i,this._styleExpression=e,this.isStateDependent="camera"!==t&&!Ce(e.expression),this.interpolationType=r}evaluateWithoutErrorHandling(t,e,i,r,n,s){return this._styleExpression.evaluateWithoutErrorHandling(t,e,i,r,n,s)}evaluate(t,e,i,r,n,s){return this._styleExpression.evaluate(t,e,i,r,n,s)}interpolationFactor(t,e,i){return this.interpolationType?Re.interpolationFactor(this.interpolationType,t,e,i):0}}function Ci(t,e){const i=Ii(t,e)
if("error"===i.result)return i
const r=i.value.expression,n=Me(r)
if(!n&&!di(e))return ui([new rt("","data expressions not supported")])
const s=Pe(r,["zoom"])
if(!s&&!pi(e))return ui([new rt("","zoom expressions not supported")])
const a=zi(r)
return a||s?a instanceof rt?ui([a]):a instanceof Re&&!fi(e)?ui([new rt("",'"interpolate" expressions cannot be used with this property')]):hi(a?new Mi(n?"camera":"composite",i.value,a.labels,a instanceof Re?a.interpolation:void 0):new Ai(n?"constant":"source",i.value)):ui([new rt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')])}class Pi{constructor(t,e){this._parameters=t,this._specification=e,it(this,yi(this._parameters,this._specification))}static deserialize(t){return new Pi(t._parameters,t._specification)}static serialize(t){return{_parameters:t._parameters,_specification:t._specification}}}function zi(t){let e=null
if(t instanceof Ue)e=zi(t.result)
else if(t instanceof Oe){for(const i of t.args)if(e=zi(i),e)break}else(t instanceof ke||t instanceof Re)&&t.input instanceof Ie&&"zoom"===t.input.name&&(e=t)
return e instanceof rt||t.eachChild((t=>{const i=zi(t)
i instanceof rt?e=i:!e&&i?e=new rt("",'"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.'):e&&i&&e!==i&&(e=new rt("",'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))})),e}function ki(t){if(!0===t||!1===t)return!0
if(!Array.isArray(t)||0===t.length)return!1
switch(t[0]){case"has":return t.length>=2&&"$id"!==t[1]&&"$type"!==t[1]
case"in":return t.length>=3&&("string"!=typeof t[1]||Array.isArray(t[2]))
case"!in":case"!has":case"none":return!1
case"==":case"!=":case">":case">=":case"<":case"<=":return 3!==t.length||Array.isArray(t[1])||Array.isArray(t[2])
case"any":case"all":for(const e of t.slice(1))if(!ki(e)&&"boolean"!=typeof e)return!1
return!0
default:return!0}}const Di={type:"boolean",default:!1,transition:!1,"property-type":"data-driven",expression:{interpolated:!1,parameters:["zoom","feature"]}}
function Li(t){if(null==t)return{filter:()=>!0,needGeometry:!1}
ki(t)||(t=Fi(t))
const e=Ii(t,Di)
if("error"===e.result)throw new Error(e.value.map((t=>`${t.key}: ${t.message}`)).join(", "))
return{filter:(t,i,r)=>e.value.evaluate(t,i,{},r),needGeometry:Ri(t)}}function Bi(t,e){return t<e?-1:t>e?1:0}function Ri(t){if(!Array.isArray(t))return!1
if("within"===t[0])return!0
for(let e=1;e<t.length;e++)if(Ri(t[e]))return!0
return!1}function Fi(t){if(!t)return!0
const e=t[0]
return t.length<=1?"any"!==e:"=="===e?Oi(t[1],t[2],"=="):"!="===e?Ni(Oi(t[1],t[2],"==")):"<"===e||">"===e||"<="===e||">="===e?Oi(t[1],t[2],e):"any"===e?(i=t.slice(1),["any"].concat(i.map(Fi))):"all"===e?["all"].concat(t.slice(1).map(Fi)):"none"===e?["all"].concat(t.slice(1).map(Fi).map(Ni)):"in"===e?Ui(t[1],t.slice(2)):"!in"===e?Ni(Ui(t[1],t.slice(2))):"has"===e?Vi(t[1]):"!has"===e?Ni(Vi(t[1])):"within"!==e||t
var i}function Oi(t,e,i){switch(t){case"$type":return[`filter-type-${i}`,e]
case"$id":return[`filter-id-${i}`,e]
default:return[`filter-${i}`,t,e]}}function Ui(t,e){if(0===e.length)return!1
switch(t){case"$type":return["filter-type-in",["literal",e]]
case"$id":return["filter-id-in",["literal",e]]
default:return e.length>200&&!e.some((t=>typeof t!=typeof e[0]))?["filter-in-large",t,["literal",e.sort(Bi)]]:["filter-in-small",t,["literal",e]]}}function Vi(t){switch(t){case"$type":return!0
case"$id":return["filter-has-id"]
default:return["filter-has",t]}}function Ni(t){return["!",t]}function $i(t){const e=typeof t
if("number"===e||"boolean"===e||"string"===e||null==t)return JSON.stringify(t)
if(Array.isArray(t)){let e="["
for(const i of t)e+=`${$i(i)},`
return`${e}]`}const i=Object.keys(t).sort()
let r="{"
for(let n=0;n<i.length;n++)r+=`${JSON.stringify(i[n])}:${$i(t[i[n]])},`
return`${r}}`}function qi(t){let e=""
for(const i of j)e+=`/${$i(t[i])}`
return e}function ji(t){const e=t.value
return e?[new et(t.key,e,"constants have been deprecated as of v8")]:[]}function Zi(t){return t instanceof Number||t instanceof String||t instanceof Boolean?t.valueOf():t}function Gi(t){if(Array.isArray(t))return t.map(Gi)
if(t instanceof Object&&!(t instanceof Number||t instanceof String||t instanceof Boolean)){const e={}
for(const i in t)e[i]=Gi(t[i])
return e}return Zi(t)}function Xi(t){const e=t.key,i=t.value,r=t.valueSpec||{},n=t.objectElementValidators||{},s=t.style,a=t.styleSpec,o=t.validateSpec
let l=[]
const c=mi(i)
if("object"!==c)return[new et(e,i,`object expected, ${c} found`)]
for(const h in i){const t=h.split(".")[0],c=r[t]||r["*"]
let u
if(n[t])u=n[t]
else if(r[t])u=o
else if(n["*"])u=n["*"]
else{if(!r["*"]){l.push(new et(e,i[h],`unknown property "${h}"`))
continue}u=o}l=l.concat(u({key:(e?`${e}.`:e)+h,value:i[h],valueSpec:c,style:s,styleSpec:a,object:i,objectKey:h,validateSpec:o},i))}for(const h in r)n[h]||r[h].required&&void 0===r[h].default&&void 0===i[h]&&l.push(new et(e,i,`missing required property "${h}"`))
return l}function Wi(t){const e=t.value,i=t.valueSpec,r=t.style,n=t.styleSpec,s=t.key,a=t.arrayElementValidator||t.validateSpec
if("array"!==mi(e))return[new et(s,e,`array expected, ${mi(e)} found`)]
if(i.length&&e.length!==i.length)return[new et(s,e,`array length ${i.length} expected, length ${e.length} found`)]
if(i["min-length"]&&e.length<i["min-length"])return[new et(s,e,`array length at least ${i["min-length"]} expected, length ${e.length} found`)]
let o={type:i.value,values:i.values}
n.$version<7&&(o.function=i.function),"object"===mi(i.value)&&(o=i.value)
let l=[]
for(let c=0;c<e.length;c++)l=l.concat(a({array:e,arrayIndex:c,value:e[c],valueSpec:o,validateSpec:t.validateSpec,style:r,styleSpec:n,key:`${s}[${c}]`}))
return l}function Hi(t){const e=t.key,i=t.value,r=t.valueSpec
let n=mi(i)
return"number"===n&&i!=i&&(n="NaN"),"number"!==n?[new et(e,i,`number expected, ${n} found`)]:"minimum"in r&&i<r.minimum?[new et(e,i,`${i} is less than the minimum value ${r.minimum}`)]:"maximum"in r&&i>r.maximum?[new et(e,i,`${i} is greater than the maximum value ${r.maximum}`)]:[]}function Ki(t){const e=t.valueSpec,i=Zi(t.value.type)
let r,n,s,a={}
const o="categorical"!==i&&void 0===t.value.property,l=!o,c="array"===mi(t.value.stops)&&"array"===mi(t.value.stops[0])&&"object"===mi(t.value.stops[0][0]),h=Xi({key:t.key,value:t.value,valueSpec:t.styleSpec.function,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{stops:function(t){if("identity"===i)return[new et(t.key,t.value,'identity function may not have a "stops" property')]
let e=[]
const r=t.value
return e=e.concat(Wi({key:t.key,value:r,valueSpec:t.valueSpec,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec,arrayElementValidator:u})),"array"===mi(r)&&0===r.length&&e.push(new et(t.key,r,"array must have at least one stop")),e},default:function(t){return t.validateSpec({key:t.key,value:t.value,valueSpec:e,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec})}}})
return"identity"===i&&o&&h.push(new et(t.key,t.value,'missing required property "property"')),"identity"===i||t.value.stops||h.push(new et(t.key,t.value,'missing required property "stops"')),"exponential"===i&&t.valueSpec.expression&&!fi(t.valueSpec)&&h.push(new et(t.key,t.value,"exponential functions not supported")),t.styleSpec.$version>=8&&(l&&!di(t.valueSpec)?h.push(new et(t.key,t.value,"property functions not supported")):o&&!pi(t.valueSpec)&&h.push(new et(t.key,t.value,"zoom functions not supported"))),"categorical"!==i&&!c||void 0!==t.value.property||h.push(new et(t.key,t.value,'"property" property is required')),h
function u(t){let i=[]
const r=t.value,o=t.key
if("array"!==mi(r))return[new et(o,r,`array expected, ${mi(r)} found`)]
if(2!==r.length)return[new et(o,r,`array length 2 expected, length ${r.length} found`)]
if(c){if("object"!==mi(r[0]))return[new et(o,r,`object expected, ${mi(r[0])} found`)]
if(void 0===r[0].zoom)return[new et(o,r,"object stop key must have zoom")]
if(void 0===r[0].value)return[new et(o,r,"object stop key must have value")]
if(s&&s>Zi(r[0].zoom))return[new et(o,r[0].zoom,"stop zoom values must appear in ascending order")]
Zi(r[0].zoom)!==s&&(s=Zi(r[0].zoom),n=void 0,a={}),i=i.concat(Xi({key:`${o}[0]`,value:r[0],valueSpec:{zoom:{}},validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec,objectElementValidators:{zoom:Hi,value:d}}))}else i=i.concat(d({key:`${o}[0]`,value:r[0],valueSpec:{},validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec},r))
return Ei(Gi(r[1]))?i.concat([new et(`${o}[1]`,r[1],"expressions are not allowed in function stops.")]):i.concat(t.validateSpec({key:`${o}[1]`,value:r[1],valueSpec:e,validateSpec:t.validateSpec,style:t.style,styleSpec:t.styleSpec}))}function d(t,s){const o=mi(t.value),l=Zi(t.value),c=null!==t.value?t.value:s
if(r){if(o!==r)return[new et(t.key,c,`${o} stop domain type must match previous stop domain type ${r}`)]}else r=o
if("number"!==o&&"string"!==o&&"boolean"!==o)return[new et(t.key,c,"stop domain value must be a number, string, or boolean")]
if("number"!==o&&"categorical"!==i){let r=`number expected, ${o} found`
return di(e)&&void 0===i&&(r+='\nIf you intended to use a categorical function, specify `"type": "categorical"`.'),[new et(t.key,c,r)]}return"categorical"!==i||"number"!==o||isFinite(l)&&Math.floor(l)===l?"categorical"!==i&&"number"===o&&void 0!==n&&l<n?[new et(t.key,c,"stop domain values must appear in ascending order")]:(n=l,"categorical"===i&&l in a?[new et(t.key,c,"stop domain values must be unique")]:(a[l]=!0,[])):[new et(t.key,c,`integer expected, found ${l}`)]}}function Yi(t){const e=("property"===t.expressionContext?Ci:Ii)(Gi(t.value),t.valueSpec)
if("error"===e.result)return e.value.map((e=>new et(`${t.key}${e.key}`,t.value,e.message)))
const i=e.value.expression||e.value._styleExpression.expression
if("property"===t.expressionContext&&"text-font"===t.propertyKey&&!i.outputDefined())return[new et(t.key,t.value,`Invalid data expression for "${t.propertyKey}". Output values must be contained as literals within the expression.`)]
if("property"===t.expressionContext&&"layout"===t.propertyType&&!Ce(i))return[new et(t.key,t.value,'"feature-state" data expressions are not supported with layout properties.')]
if("filter"===t.expressionContext&&!Ce(i))return[new et(t.key,t.value,'"feature-state" data expressions are not supported with filters.')]
if(t.expressionContext&&0===t.expressionContext.indexOf("cluster")){if(!Pe(i,["zoom","feature-state"]))return[new et(t.key,t.value,'"zoom" and "feature-state" expressions are not supported with cluster properties.')]
if("cluster-initial"===t.expressionContext&&!Me(i))return[new et(t.key,t.value,"Feature data expressions are not supported with initial expression part of cluster properties.")]}return[]}function Ji(t){const e=t.key,i=t.value,r=t.valueSpec,n=[]
return Array.isArray(r.values)?-1===r.values.indexOf(Zi(i))&&n.push(new et(e,i,`expected one of [${r.values.join(", ")}], ${JSON.stringify(i)} found`)):-1===Object.keys(r.values).indexOf(Zi(i))&&n.push(new et(e,i,`expected one of [${Object.keys(r.values).join(", ")}], ${JSON.stringify(i)} found`)),n}function Qi(t){return ki(Gi(t.value))?Yi(it({},t,{expressionContext:"filter",valueSpec:{value:"boolean"}})):tr(t)}function tr(t){const e=t.value,i=t.key
if("array"!==mi(e))return[new et(i,e,`array expected, ${mi(e)} found`)]
const r=t.styleSpec
let n,s=[]
if(e.length<1)return[new et(i,e,"filter array must have at least 1 element")]
switch(s=s.concat(Ji({key:`${i}[0]`,value:e[0],valueSpec:r.filter_operator,style:t.style,styleSpec:t.styleSpec})),Zi(e[0])){case"<":case"<=":case">":case">=":e.length>=2&&"$type"===Zi(e[1])&&s.push(new et(i,e,`"$type" cannot be use with operator "${e[0]}"`))
case"==":case"!=":3!==e.length&&s.push(new et(i,e,`filter array for operator "${e[0]}" must have 3 elements`))
case"in":case"!in":e.length>=2&&(n=mi(e[1]),"string"!==n&&s.push(new et(`${i}[1]`,e[1],`string expected, ${n} found`)))
for(let a=2;a<e.length;a++)n=mi(e[a]),"$type"===Zi(e[1])?s=s.concat(Ji({key:`${i}[${a}]`,value:e[a],valueSpec:r.geometry_type,style:t.style,styleSpec:t.styleSpec})):"string"!==n&&"number"!==n&&"boolean"!==n&&s.push(new et(`${i}[${a}]`,e[a],`string, number, or boolean expected, ${n} found`))
break
case"any":case"all":case"none":for(let r=1;r<e.length;r++)s=s.concat(tr({key:`${i}[${r}]`,value:e[r],style:t.style,styleSpec:t.styleSpec}))
break
case"has":case"!has":n=mi(e[1]),2!==e.length?s.push(new et(i,e,`filter array for "${e[0]}" operator must have 2 elements`)):"string"!==n&&s.push(new et(`${i}[1]`,e[1],`string expected, ${n} found`))
break
case"within":n=mi(e[1]),2!==e.length?s.push(new et(i,e,`filter array for "${e[0]}" operator must have 2 elements`)):"object"!==n&&s.push(new et(`${i}[1]`,e[1],`object expected, ${n} found`))}return s}function er(t,e){const i=t.key,r=t.validateSpec,n=t.style,s=t.styleSpec,a=t.value,o=t.objectKey,l=s[`${e}_${t.layerType}`]
if(!l)return[]
const c=o.match(/^(.*)-transition$/)
if("paint"===e&&c&&l[c[1]]&&l[c[1]].transition)return r({key:i,value:a,valueSpec:s.transition,style:n,styleSpec:s})
const h=t.valueSpec||l[o]
if(!h)return[new et(i,a,`unknown property "${o}"`)]
let u
if("string"===mi(a)&&di(h)&&!h.tokens&&(u=/^{([^}]+)}$/.exec(a)))return[new et(i,a,`"${o}" does not support interpolation syntax\nUse an identity property function instead: \`{ "type": "identity", "property": ${JSON.stringify(u[1])} }\`.`)]
const d=[]
return"symbol"===t.layerType&&("text-field"===o&&n&&!n.glyphs&&d.push(new et(i,a,'use of "text-field" requires a style "glyphs" property')),"text-font"===o&&gi(Gi(a))&&"identity"===Zi(a.type)&&d.push(new et(i,a,'"text-font" does not support identity functions'))),d.concat(r({key:t.key,value:a,valueSpec:h,style:n,styleSpec:s,expressionContext:"property",propertyType:e,propertyKey:o}))}function ir(t){return er(t,"paint")}function rr(t){return er(t,"layout")}function nr(t){let e=[]
const i=t.value,r=t.key,n=t.style,s=t.styleSpec
i.type||i.ref||e.push(new et(r,i,'either "type" or "ref" is required'))
let a=Zi(i.type)
const o=Zi(i.ref)
if(i.id){const s=Zi(i.id)
for(let a=0;a<t.arrayIndex;a++){const t=n.layers[a]
Zi(t.id)===s&&e.push(new et(r,i.id,`duplicate layer id "${i.id}", previously used at line ${t.id.__line__}`))}}if("ref"in i){let t;["type","source","source-layer","filter","layout"].forEach((t=>{t in i&&e.push(new et(r,i[t],`"${t}" is prohibited for ref layers`))})),n.layers.forEach((e=>{Zi(e.id)===o&&(t=e)})),t?t.ref?e.push(new et(r,i.ref,"ref cannot reference another ref layer")):a=Zi(t.type):e.push(new et(r,i.ref,`ref layer "${o}" not found`))}else if("background"!==a)if(i.source){const t=n.sources&&n.sources[i.source],s=t&&Zi(t.type)
t?"vector"===s&&"raster"===a?e.push(new et(r,i.source,`layer "${i.id}" requires a raster source`)):"raster"===s&&"raster"!==a?e.push(new et(r,i.source,`layer "${i.id}" requires a vector source`)):"vector"!==s||i["source-layer"]?"raster-dem"===s&&"hillshade"!==a?e.push(new et(r,i.source,"raster-dem source can only be used with layer type 'hillshade'.")):"line"!==a||!i.paint||!i.paint["line-gradient"]||"geojson"===s&&t.lineMetrics||e.push(new et(r,i,`layer "${i.id}" specifies a line-gradient, which requires a GeoJSON source with \`lineMetrics\` enabled.`)):e.push(new et(r,i,`layer "${i.id}" must specify a "source-layer"`)):e.push(new et(r,i.source,`source "${i.source}" not found`))}else e.push(new et(r,i,'missing required property "source"'))
return e=e.concat(Xi({key:r,value:i,valueSpec:s.layer,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,objectElementValidators:{"*":()=>[],type:()=>t.validateSpec({key:`${r}.type`,value:i.type,valueSpec:s.layer.type,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,object:i,objectKey:"type"}),filter:Qi,layout:t=>Xi({layer:i,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,objectElementValidators:{"*":t=>rr(it({layerType:a},t))}}),paint:t=>Xi({layer:i,key:t.key,value:t.value,style:t.style,styleSpec:t.styleSpec,validateSpec:t.validateSpec,objectElementValidators:{"*":t=>ir(it({layerType:a},t))}})}})),e}function sr(t){const e=t.value,i=t.key,r=mi(e)
return"string"!==r?[new et(i,e,`string expected, ${r} found`)]:[]}const ar={promoteId:function(t){let{key:e,value:i}=t
if("string"===mi(i))return sr({key:e,value:i})
{const t=[]
for(const r in i)t.push(...sr({key:`${e}.${r}`,value:i[r]}))
return t}}}
function or(t){const e=t.value,i=t.key,r=t.styleSpec,n=t.style,s=t.validateSpec
if(!e.type)return[new et(i,e,'"type" is required')]
const a=Zi(e.type)
let o
switch(a){case"vector":case"raster":case"raster-dem":return o=Xi({key:i,value:e,valueSpec:r[`source_${a.replace("-","_")}`],style:t.style,styleSpec:r,objectElementValidators:ar,validateSpec:s}),o
case"geojson":if(o=Xi({key:i,value:e,valueSpec:r.source_geojson,style:n,styleSpec:r,validateSpec:s,objectElementValidators:ar}),e.cluster)for(const t in e.clusterProperties){const[r,n]=e.clusterProperties[t],a="string"==typeof r?[r,["accumulated"],["get",t]]:r
o.push(...Yi({key:`${i}.${t}.map`,value:n,validateSpec:s,expressionContext:"cluster-map"})),o.push(...Yi({key:`${i}.${t}.reduce`,value:a,validateSpec:s,expressionContext:"cluster-reduce"}))}return o
case"video":return Xi({key:i,value:e,valueSpec:r.source_video,style:n,validateSpec:s,styleSpec:r})
case"image":return Xi({key:i,value:e,valueSpec:r.source_image,style:n,validateSpec:s,styleSpec:r})
case"canvas":return[new et(i,null,"Please use runtime APIs to add canvas sources, rather than including them in stylesheets.","source.canvas")]
default:return Ji({key:`${i}.type`,value:e.type,valueSpec:{values:["vector","raster","raster-dem","geojson","video","image"]},style:n,validateSpec:s,styleSpec:r})}}function lr(t){const e=t.value,i=t.styleSpec,r=i.light,n=t.style
let s=[]
const a=mi(e)
if(void 0===e)return s
if("object"!==a)return s=s.concat([new et("light",e,`object expected, ${a} found`)]),s
for(const o in e){const a=o.match(/^(.*)-transition$/)
s=s.concat(a&&r[a[1]]&&r[a[1]].transition?t.validateSpec({key:o,value:e[o],valueSpec:i.transition,validateSpec:t.validateSpec,style:n,styleSpec:i}):r[o]?t.validateSpec({key:o,value:e[o],valueSpec:r[o],validateSpec:t.validateSpec,style:n,styleSpec:i}):[new et(o,e[o],`unknown property "${o}"`)])}return s}function cr(t){const e=t.value,i=t.styleSpec,r=i.terrain,n=t.style
let s=[]
const a=mi(e)
if(void 0===e)return s
if("object"!==a)return s=s.concat([new et("terrain",e,`object expected, ${a} found`)]),s
for(const o in e)s=s.concat(r[o]?t.validateSpec({key:o,value:e[o],valueSpec:r[o],validateSpec:t.validateSpec,style:n,styleSpec:i}):[new et(o,e[o],`unknown property "${o}"`)])
return s}function hr(t){let e=[]
const i=t.value,r=t.key
if(Array.isArray(i)){const n=[],s=[]
for(const a in i)i[a].id&&n.includes(i[a].id)&&e.push(new et(r,i,`all the sprites' ids must be unique, but ${i[a].id} is duplicated`)),n.push(i[a].id),i[a].url&&s.includes(i[a].url)&&e.push(new et(r,i,`all the sprites' URLs must be unique, but ${i[a].url} is duplicated`)),s.push(i[a].url),e=e.concat(Xi({key:`${r}[${a}]`,value:i[a],valueSpec:{id:{type:"string",required:!0},url:{type:"string",required:!0}},validateSpec:t.validateSpec}))
return e}return sr({key:r,value:i})}const ur={"*":()=>[],array:Wi,boolean:function(t){const e=t.value,i=t.key,r=mi(e)
return"boolean"!==r?[new et(i,e,`boolean expected, ${r} found`)]:[]},number:Hi,color:function(t){const e=t.key,i=t.value,r=mi(i)
return"string"!==r?[new et(e,i,`color expected, ${r} found`)]:$t.parse(String(i))?[]:[new et(e,i,`color expected, "${i}" found`)]},constants:ji,enum:Ji,filter:Qi,function:Ki,layer:nr,object:Xi,source:or,light:lr,terrain:cr,string:sr,formatted:function(t){return 0===sr(t).length?[]:Yi(t)},resolvedImage:function(t){return 0===sr(t).length?[]:Yi(t)},padding:function(t){const e=t.key,i=t.value
if("array"===mi(i)){if(i.length<1||i.length>4)return[new et(e,i,`padding requires 1 to 4 values; ${i.length} values found`)]
const r={type:"number"}
let n=[]
for(let s=0;s<i.length;s++)n=n.concat(t.validateSpec({key:`${e}[${s}]`,value:i[s],validateSpec:t.validateSpec,valueSpec:r}))
return n}return Hi({key:e,value:i,valueSpec:{}})},sprite:hr}
function dr(t){const e=t.value,i=t.valueSpec,r=t.styleSpec
return t.validateSpec=dr,i.expression&&gi(Zi(e))?Ki(t):i.expression&&Ei(Gi(e))?Yi(t):i.type&&ur[i.type]?ur[i.type](t):Xi(it({},t,{valueSpec:i.type?r[i.type]:i}))}function pr(t){const e=t.value,i=t.key,r=sr(t)
return r.length||(-1===e.indexOf("{fontstack}")&&r.push(new et(i,e,'"glyphs" url must include a "{fontstack}" token')),-1===e.indexOf("{range}")&&r.push(new et(i,e,'"glyphs" url must include a "{range}" token'))),r}function fr(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q,i=[]
return i=i.concat(dr({key:"",value:t,valueSpec:e.$root,styleSpec:e,style:t,validateSpec:dr,objectElementValidators:{glyphs:pr,"*":()=>[]}})),t.constants&&(i=i.concat(ji({key:"constants",value:t.constants,style:t,styleSpec:e,validateSpec:dr}))),gr(i)}function mr(t){return function(e){return t({...e,validateSpec:dr})}}function gr(t){return[].concat(t).sort(((t,e)=>t.line-e.line))}function _r(t){return function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r]
return gr(t.apply(this,i))}}fr.source=_r(mr(or)),fr.sprite=_r(mr(hr)),fr.glyphs=_r(mr(pr)),fr.light=_r(mr(lr)),fr.terrain=_r(mr(cr)),fr.layer=_r(mr(nr)),fr.filter=_r(mr(Qi)),fr.paintProperty=_r(mr(ir)),fr.layoutProperty=_r(mr(rr))
const yr=fr,xr=yr.light,vr=yr.paintProperty,br=yr.layoutProperty
function wr(t,e){let i=!1
if(e&&e.length)for(const r of e)t.fire(new N(new Error(r.message))),i=!0
return i}class Tr{constructor(t,e,i){const r=this.cells=[]
if(t instanceof ArrayBuffer){this.arrayBuffer=t
const n=new Int32Array(this.arrayBuffer)
t=n[0],this.d=(e=n[1])+2*(i=n[2])
for(let t=0;t<this.d*this.d;t++){const e=n[3+t],i=n[3+t+1]
r.push(e===i?null:n.subarray(e,i))}const s=n[3+r.length+1]
this.keys=n.subarray(n[3+r.length],s),this.bboxes=n.subarray(s),this.insert=this._insertReadonly}else{this.d=e+2*i
for(let t=0;t<this.d*this.d;t++)r.push([])
this.keys=[],this.bboxes=[]}this.n=e,this.extent=t,this.padding=i,this.scale=e/t,this.uid=0
const n=i/e*t
this.min=-n,this.max=t+n}insert(t,e,i,r,n){this._forEachCell(e,i,r,n,this._insertCell,this.uid++,void 0,void 0),this.keys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(r),this.bboxes.push(n)}_insertReadonly(){throw new Error("Cannot insert into a GridIndex created from an ArrayBuffer.")}_insertCell(t,e,i,r,n,s){this.cells[n].push(s)}query(t,e,i,r,n){const s=this.min,a=this.max
if(t<=s&&e<=s&&a<=i&&a<=r&&!n)return Array.prototype.slice.call(this.keys)
{const s=[]
return this._forEachCell(t,e,i,r,this._queryCell,s,{},n),s}}_queryCell(t,e,i,r,n,s,a,o){const l=this.cells[n]
if(null!==l){const n=this.keys,c=this.bboxes
for(let h=0;h<l.length;h++){const u=l[h]
if(void 0===a[u]){const l=4*u;(o?o(c[l+0],c[l+1],c[l+2],c[l+3]):t<=c[l+2]&&e<=c[l+3]&&i>=c[l+0]&&r>=c[l+1])?(a[u]=!0,s.push(n[u])):a[u]=!1}}}}_forEachCell(t,e,i,r,n,s,a,o){const l=this._convertToCellCoord(t),c=this._convertToCellCoord(e),h=this._convertToCellCoord(i),u=this._convertToCellCoord(r)
for(let d=l;d<=h;d++)for(let l=c;l<=u;l++){const c=this.d*l+d
if((!o||o(this._convertFromCellCoord(d),this._convertFromCellCoord(l),this._convertFromCellCoord(d+1),this._convertFromCellCoord(l+1)))&&n.call(this,t,e,i,r,c,s,a,o))return}}_convertFromCellCoord(t){return(t-this.padding)/this.scale}_convertToCellCoord(t){return Math.max(0,Math.min(this.d-1,Math.floor(t*this.scale)+this.padding))}toArrayBuffer(){if(this.arrayBuffer)return this.arrayBuffer
const t=this.cells,e=3+this.cells.length+1+1
let i=0
for(let s=0;s<this.cells.length;s++)i+=this.cells[s].length
const r=new Int32Array(e+i+this.keys.length+this.bboxes.length)
r[0]=this.extent,r[1]=this.n,r[2]=this.padding
let n=e
for(let s=0;s<t.length;s++){const e=t[s]
r[3+s]=n,r.set(e,n),n+=e.length}return r[3+t.length]=n,r.set(this.keys,n),n+=this.keys.length,r[3+t.length+1]=n,r.set(this.bboxes,n),n+=this.bboxes.length,r.buffer}static serialize(t,e){const i=t.toArrayBuffer()
return e&&e.push(i),{buffer:i}}static deserialize(t){return new Tr(t.buffer)}}const Sr={}
function Er(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Sr[t])throw new Error(`${t} is already registered.`)
Object.defineProperty(e,"_classRegistryKey",{value:t,writeable:!1}),Sr[t]={klass:e,omit:i.omit||[],shallow:i.shallow||[]}}Er("Object",Object),Er("TransferableGridIndex",Tr),Er("Color",$t),Er("Error",Error),Er("AJAXError",z),Er("ResolvedImage",Xt),Er("StylePropertyFunction",Pi),Er("StyleExpression",Si,{omit:["_evaluator"]}),Er("ZoomDependentExpression",Mi),Er("ZoomConstantExpression",Ai),Er("CompoundExpression",Ie,{omit:["_evaluate"]})
for(const Lh in si)si[Lh]._classRegistryKey||Er(`Expression_${Lh}`,si[Lh])
function Ir(t){return t&&"undefined"!=typeof ArrayBuffer&&(t instanceof ArrayBuffer||t.constructor&&"ArrayBuffer"===t.constructor.name)}function Ar(t,e){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob)return t
if(Ir(t))return e&&e.push(t),t
if(E(t))return e&&e.push(t),t
if(ArrayBuffer.isView(t)){const i=t
return e&&e.push(i.buffer),i}if(t instanceof ImageData)return e&&e.push(t.data.buffer),t
if(Array.isArray(t)){const i=[]
for(const r of t)i.push(Ar(r,e))
return i}if("object"==typeof t){const i=t.constructor,r=i._classRegistryKey
if(!r)throw new Error("can't serialize object of unregistered class")
if(!Sr[r])throw new Error(`${r} is not registered.`)
const n=i.serialize?i.serialize(t,e):{}
if(i.serialize){if(e&&n===e[e.length-1])throw new Error("statically serialized object won't survive transfer of $name property")}else{for(const i in t){if(!t.hasOwnProperty(i))continue
if(Sr[r].omit.indexOf(i)>=0)continue
const s=t[i]
n[i]=Sr[r].shallow.indexOf(i)>=0?s:Ar(s,e)}t instanceof Error&&(n.message=t.message)}if(n.$name)throw new Error("$name property is reserved for worker serialization logic.")
return"Object"!==r&&(n.$name=r),n}throw new Error("can't serialize object of type "+typeof t)}function Mr(t){if(null==t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||t instanceof Boolean||t instanceof Number||t instanceof String||t instanceof Date||t instanceof RegExp||t instanceof Blob||Ir(t)||E(t)||ArrayBuffer.isView(t)||t instanceof ImageData)return t
if(Array.isArray(t))return t.map(Mr)
if("object"==typeof t){const e=t.$name||"Object"
if(!Sr[e])throw new Error(`can't deserialize unregistered class ${e}`)
const{klass:i}=Sr[e]
if(!i)throw new Error(`can't deserialize unregistered class ${e}`)
if(i.deserialize)return i.deserialize(t)
const r=Object.create(i.prototype)
for(const n of Object.keys(t)){if("$name"===n)continue
const i=t[n]
r[n]=Sr[e].shallow.indexOf(n)>=0?i:Mr(i)}return r}throw new Error("can't deserialize object of type "+typeof t)}class Cr{constructor(){this.first=!0}update(t,e){const i=Math.floor(t)
return this.first?(this.first=!1,this.lastIntegerZoom=i,this.lastIntegerZoomTime=0,this.lastZoom=t,this.lastFloorZoom=i,!0):(this.lastFloorZoom>i?(this.lastIntegerZoom=i+1,this.lastIntegerZoomTime=e):this.lastFloorZoom<i&&(this.lastIntegerZoom=i,this.lastIntegerZoomTime=e),t!==this.lastZoom&&(this.lastZoom=t,this.lastFloorZoom=i,!0))}}const Pr={"Latin-1 Supplement":t=>t>=128&&t<=255,Arabic:t=>t>=1536&&t<=1791,"Arabic Supplement":t=>t>=1872&&t<=1919,"Arabic Extended-A":t=>t>=2208&&t<=2303,"Hangul Jamo":t=>t>=4352&&t<=4607,"Unified Canadian Aboriginal Syllabics":t=>t>=5120&&t<=5759,Khmer:t=>t>=6016&&t<=6143,"Unified Canadian Aboriginal Syllabics Extended":t=>t>=6320&&t<=6399,"General Punctuation":t=>t>=8192&&t<=8303,"Letterlike Symbols":t=>t>=8448&&t<=8527,"Number Forms":t=>t>=8528&&t<=8591,"Miscellaneous Technical":t=>t>=8960&&t<=9215,"Control Pictures":t=>t>=9216&&t<=9279,"Optical Character Recognition":t=>t>=9280&&t<=9311,"Enclosed Alphanumerics":t=>t>=9312&&t<=9471,"Geometric Shapes":t=>t>=9632&&t<=9727,"Miscellaneous Symbols":t=>t>=9728&&t<=9983,"Miscellaneous Symbols and Arrows":t=>t>=11008&&t<=11263,"CJK Radicals Supplement":t=>t>=11904&&t<=12031,"Kangxi Radicals":t=>t>=12032&&t<=12255,"Ideographic Description Characters":t=>t>=12272&&t<=12287,"CJK Symbols and Punctuation":t=>t>=12288&&t<=12351,Hiragana:t=>t>=12352&&t<=12447,Katakana:t=>t>=12448&&t<=12543,Bopomofo:t=>t>=12544&&t<=12591,"Hangul Compatibility Jamo":t=>t>=12592&&t<=12687,Kanbun:t=>t>=12688&&t<=12703,"Bopomofo Extended":t=>t>=12704&&t<=12735,"CJK Strokes":t=>t>=12736&&t<=12783,"Katakana Phonetic Extensions":t=>t>=12784&&t<=12799,"Enclosed CJK Letters and Months":t=>t>=12800&&t<=13055,"CJK Compatibility":t=>t>=13056&&t<=13311,"CJK Unified Ideographs Extension A":t=>t>=13312&&t<=19903,"Yijing Hexagram Symbols":t=>t>=19904&&t<=19967,"CJK Unified Ideographs":t=>t>=19968&&t<=40959,"Yi Syllables":t=>t>=40960&&t<=42127,"Yi Radicals":t=>t>=42128&&t<=42191,"Hangul Jamo Extended-A":t=>t>=43360&&t<=43391,"Hangul Syllables":t=>t>=44032&&t<=55215,"Hangul Jamo Extended-B":t=>t>=55216&&t<=55295,"Private Use Area":t=>t>=57344&&t<=63743,"CJK Compatibility Ideographs":t=>t>=63744&&t<=64255,"Arabic Presentation Forms-A":t=>t>=64336&&t<=65023,"Vertical Forms":t=>t>=65040&&t<=65055,"CJK Compatibility Forms":t=>t>=65072&&t<=65103,"Small Form Variants":t=>t>=65104&&t<=65135,"Arabic Presentation Forms-B":t=>t>=65136&&t<=65279,"Halfwidth and Fullwidth Forms":t=>t>=65280&&t<=65519}
function zr(t){for(const e of t)if(Lr(e.charCodeAt(0)))return!0
return!1}function kr(t){for(const e of t)if(!Dr(e.charCodeAt(0)))return!1
return!0}function Dr(t){return!(Pr.Arabic(t)||Pr["Arabic Supplement"](t)||Pr["Arabic Extended-A"](t)||Pr["Arabic Presentation Forms-A"](t)||Pr["Arabic Presentation Forms-B"](t))}function Lr(t){return!(746!==t&&747!==t&&(t<4352||!(Pr["Bopomofo Extended"](t)||Pr.Bopomofo(t)||Pr["CJK Compatibility Forms"](t)&&!(t>=65097&&t<=65103)||Pr["CJK Compatibility Ideographs"](t)||Pr["CJK Compatibility"](t)||Pr["CJK Radicals Supplement"](t)||Pr["CJK Strokes"](t)||!(!Pr["CJK Symbols and Punctuation"](t)||t>=12296&&t<=12305||t>=12308&&t<=12319||12336===t)||Pr["CJK Unified Ideographs Extension A"](t)||Pr["CJK Unified Ideographs"](t)||Pr["Enclosed CJK Letters and Months"](t)||Pr["Hangul Compatibility Jamo"](t)||Pr["Hangul Jamo Extended-A"](t)||Pr["Hangul Jamo Extended-B"](t)||Pr["Hangul Jamo"](t)||Pr["Hangul Syllables"](t)||Pr.Hiragana(t)||Pr["Ideographic Description Characters"](t)||Pr.Kanbun(t)||Pr["Kangxi Radicals"](t)||Pr["Katakana Phonetic Extensions"](t)||Pr.Katakana(t)&&12540!==t||!(!Pr["Halfwidth and Fullwidth Forms"](t)||65288===t||65289===t||65293===t||t>=65306&&t<=65310||65339===t||65341===t||65343===t||t>=65371&&t<=65503||65507===t||t>=65512&&t<=65519)||!(!Pr["Small Form Variants"](t)||t>=65112&&t<=65118||t>=65123&&t<=65126)||Pr["Unified Canadian Aboriginal Syllabics"](t)||Pr["Unified Canadian Aboriginal Syllabics Extended"](t)||Pr["Vertical Forms"](t)||Pr["Yijing Hexagram Symbols"](t)||Pr["Yi Syllables"](t)||Pr["Yi Radicals"](t))))}function Br(t){return!(Lr(t)||function(t){return!!(Pr["Latin-1 Supplement"](t)&&(167===t||169===t||174===t||177===t||188===t||189===t||190===t||215===t||247===t)||Pr["General Punctuation"](t)&&(8214===t||8224===t||8225===t||8240===t||8241===t||8251===t||8252===t||8258===t||8263===t||8264===t||8265===t||8273===t)||Pr["Letterlike Symbols"](t)||Pr["Number Forms"](t)||Pr["Miscellaneous Technical"](t)&&(t>=8960&&t<=8967||t>=8972&&t<=8991||t>=8996&&t<=9e3||9003===t||t>=9085&&t<=9114||t>=9150&&t<=9165||9167===t||t>=9169&&t<=9179||t>=9186&&t<=9215)||Pr["Control Pictures"](t)&&9251!==t||Pr["Optical Character Recognition"](t)||Pr["Enclosed Alphanumerics"](t)||Pr["Geometric Shapes"](t)||Pr["Miscellaneous Symbols"](t)&&!(t>=9754&&t<=9759)||Pr["Miscellaneous Symbols and Arrows"](t)&&(t>=11026&&t<=11055||t>=11088&&t<=11097||t>=11192&&t<=11243)||Pr["CJK Symbols and Punctuation"](t)||Pr.Katakana(t)||Pr["Private Use Area"](t)||Pr["CJK Compatibility Forms"](t)||Pr["Small Form Variants"](t)||Pr["Halfwidth and Fullwidth Forms"](t)||8734===t||8756===t||8757===t||t>=9984&&t<=10087||t>=10102&&t<=10131||65532===t||65533===t)}(t))}function Rr(t){return t>=1424&&t<=2303||Pr["Arabic Presentation Forms-A"](t)||Pr["Arabic Presentation Forms-B"](t)}function Fr(t,e){return!(!e&&Rr(t)||t>=2304&&t<=3583||t>=3840&&t<=4255||Pr.Khmer(t))}function Or(t){for(const e of t)if(Rr(e.charCodeAt(0)))return!0
return!1}const Ur="deferred",Vr="loading",Nr="loaded"
let $r=null,qr="unavailable",jr=null
const Zr=function(t){t&&"string"==typeof t&&t.indexOf("NetworkError")>-1&&(qr="error"),$r&&$r(t)}
function Gr(){Xr.fire(new V("pluginStateChange",{pluginStatus:qr,pluginURL:jr}))}const Xr=new $,Wr=function(){return qr},Hr=function(){if(qr!==Ur||!jr)throw new Error("rtl-text-plugin cannot be downloaded unless a pluginURL is specified")
qr=Vr,Gr(),jr&&R({url:jr},(t=>{t?Zr(t):(qr=Nr,Gr())}))},Kr={applyArabicShaping:null,processBidirectionalText:null,processStyledBidirectionalText:null,isLoaded:()=>qr===Nr||null!=Kr.applyArabicShaping,isLoading:()=>qr===Vr,setState(t){if(!w())throw new Error("Cannot set the state of the rtl-text-plugin when not in the web-worker context")
qr=t.pluginStatus,jr=t.pluginURL},isParsed(){if(!w())throw new Error("rtl-text-plugin is only parsed on the worker-threads")
return null!=Kr.applyArabicShaping&&null!=Kr.processBidirectionalText&&null!=Kr.processStyledBidirectionalText},getPluginURL(){if(!w())throw new Error("rtl-text-plugin url can only be queried from the worker threads")
return jr}}
class Yr{constructor(t,e){this.zoom=t,e?(this.now=e.now,this.fadeDuration=e.fadeDuration,this.zoomHistory=e.zoomHistory,this.transition=e.transition):(this.now=0,this.fadeDuration=0,this.zoomHistory=new Cr,this.transition={})}isSupportedScript(t){return function(t,e){for(const i of t)if(!Fr(i.charCodeAt(0),e))return!1
return!0}(t,Kr.isLoaded())}crossFadingFactor(){return 0===this.fadeDuration?1:Math.min((this.now-this.zoomHistory.lastIntegerZoomTime)/this.fadeDuration,1)}getCrossfadeParameters(){const t=this.zoom,e=t-Math.floor(t),i=this.crossFadingFactor()
return t>this.zoomHistory.lastIntegerZoom?{fromScale:2,toScale:1,t:e+(1-e)*i}:{fromScale:.5,toScale:1,t:1-(1-i)*e}}}class Jr{constructor(t,e){this.property=t,this.value=e,this.expression=function(t,e){if(gi(t))return new Pi(t,e)
if(Ei(t)){const i=Ci(t,e)
if("error"===i.result)throw new Error(i.value.map((t=>`${t.key}: ${t.message}`)).join(", "))
return i.value}{let i=t
return"color"===e.type&&"string"==typeof t?i=$t.parse(t):"padding"!==e.type||"number"!=typeof t&&!Array.isArray(t)||(i=Gt.parse(t)),{kind:"constant",evaluate:()=>i}}}(void 0===e?t.specification.default:e,t.specification)}isDataDriven(){return"source"===this.expression.kind||"composite"===this.expression.kind}possiblyEvaluate(t,e,i){return this.property.possiblyEvaluate(this,t,e,i)}}class Qr{constructor(t){this.property=t,this.value=new Jr(t,void 0)}transitioned(t,e){return new en(this.property,this.value,e,d({},t.transition,this.transition),t.now)}untransitioned(){return new en(this.property,this.value,null,{},0)}}class tn{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitionablePropertyValues)}getValue(t){return _(this._values[t].value.value)}setValue(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new Qr(this._values[t].property)),this._values[t].value=new Jr(this._values[t].property,null===e?void 0:_(e))}getTransition(t){return _(this._values[t].transition)}setTransition(t,e){Object.prototype.hasOwnProperty.call(this._values,t)||(this._values[t]=new Qr(this._values[t].property)),this._values[t].transition=_(e)||void 0}serialize(){const t={}
for(const e of Object.keys(this._values)){const i=this.getValue(e)
void 0!==i&&(t[e]=i)
const r=this.getTransition(e)
void 0!==r&&(t[`${e}-transition`]=r)}return t}transitioned(t,e){const i=new rn(this._properties)
for(const r of Object.keys(this._values))i._values[r]=this._values[r].transitioned(t,e._values[r])
return i}untransitioned(){const t=new rn(this._properties)
for(const e of Object.keys(this._values))t._values[e]=this._values[e].untransitioned()
return t}}class en{constructor(t,e,i,r,n){this.property=t,this.value=e,this.begin=n+r.delay||0,this.end=this.begin+r.duration||0,t.specification.transition&&(r.delay||r.duration)&&(this.prior=i)}possiblyEvaluate(t,e,i){const r=t.now||0,n=this.value.possiblyEvaluate(t,e,i),s=this.prior
if(s){if(r>this.end)return this.prior=null,n
if(this.value.isDataDriven())return this.prior=null,n
if(r<this.begin)return s.possiblyEvaluate(t,e,i)
{const a=(r-this.begin)/(this.end-this.begin)
return this.property.interpolate(s.possiblyEvaluate(t,e,i),n,function(t){if(t<=0)return 0
if(t>=1)return 1
const e=t*t,i=e*t
return 4*(t<.5?i:3*(t-e)+i-.75)}(a))}}return n}}class rn{constructor(t){this._properties=t,this._values=Object.create(t.defaultTransitioningPropertyValues)}possiblyEvaluate(t,e,i){const r=new an(this._properties)
for(const n of Object.keys(this._values))r._values[n]=this._values[n].possiblyEvaluate(t,e,i)
return r}hasTransition(){for(const t of Object.keys(this._values))if(this._values[t].prior)return!0
return!1}}class nn{constructor(t){this._properties=t,this._values=Object.create(t.defaultPropertyValues)}getValue(t){return _(this._values[t].value)}setValue(t,e){this._values[t]=new Jr(this._values[t].property,null===e?void 0:_(e))}serialize(){const t={}
for(const e of Object.keys(this._values)){const i=this.getValue(e)
void 0!==i&&(t[e]=i)}return t}possiblyEvaluate(t,e,i){const r=new an(this._properties)
for(const n of Object.keys(this._values))r._values[n]=this._values[n].possiblyEvaluate(t,e,i)
return r}}class sn{constructor(t,e,i){this.property=t,this.value=e,this.parameters=i}isConstant(){return"constant"===this.value.kind}constantOr(t){return"constant"===this.value.kind?this.value.value:t}evaluate(t,e,i,r){return this.property.evaluate(this.value,this.parameters,t,e,i,r)}}class an{constructor(t){this._properties=t,this._values=Object.create(t.defaultPossiblyEvaluatedValues)}get(t){return this._values[t]}}class on{constructor(t){this.specification=t}possiblyEvaluate(t,e){if(t.isDataDriven())throw new Error("Value should not be data driven")
return t.expression.evaluate(e)}interpolate(t,e,i){const r=Be[this.specification.type]
return r?r(t,e,i):t}}class ln{constructor(t,e){this.specification=t,this.overrides=e}possiblyEvaluate(t,e,i,r){return new sn(this,"constant"===t.expression.kind||"camera"===t.expression.kind?{kind:"constant",value:t.expression.evaluate(e,null,{},i,r)}:t.expression,e)}interpolate(t,e,i){if("constant"!==t.value.kind||"constant"!==e.value.kind)return t
if(void 0===t.value.value||void 0===e.value.value)return new sn(this,{kind:"constant",value:void 0},t.parameters)
const r=Be[this.specification.type]
if(r){const n=r(t.value.value,e.value.value,i)
return new sn(this,{kind:"constant",value:n},t.parameters)}return t}evaluate(t,e,i,r,n,s){return"constant"===t.kind?t.value:t.evaluate(e,i,r,n,s)}}class cn extends ln{possiblyEvaluate(t,e,i,r){if(void 0===t.value)return new sn(this,{kind:"constant",value:void 0},e)
if("constant"===t.expression.kind){const n=t.expression.evaluate(e,null,{},i,r),s="resolvedImage"===t.property.specification.type&&"string"!=typeof n?n.name:n,a=this._calculate(s,s,s,e)
return new sn(this,{kind:"constant",value:a},e)}if("camera"===t.expression.kind){const i=this._calculate(t.expression.evaluate({zoom:e.zoom-1}),t.expression.evaluate({zoom:e.zoom}),t.expression.evaluate({zoom:e.zoom+1}),e)
return new sn(this,{kind:"constant",value:i},e)}return new sn(this,t.expression,e)}evaluate(t,e,i,r,n,s){if("source"===t.kind){const a=t.evaluate(e,i,r,n,s)
return this._calculate(a,a,a,e)}return"composite"===t.kind?this._calculate(t.evaluate({zoom:Math.floor(e.zoom)-1},i,r),t.evaluate({zoom:Math.floor(e.zoom)},i,r),t.evaluate({zoom:Math.floor(e.zoom)+1},i,r),e):t.value}_calculate(t,e,i,r){return r.zoom>r.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:i,to:e}}interpolate(t){return t}}class hn{constructor(t){this.specification=t}possiblyEvaluate(t,e,i,r){if(void 0!==t.value){if("constant"===t.expression.kind){const n=t.expression.evaluate(e,null,{},i,r)
return this._calculate(n,n,n,e)}return this._calculate(t.expression.evaluate(new Yr(Math.floor(e.zoom-1),e)),t.expression.evaluate(new Yr(Math.floor(e.zoom),e)),t.expression.evaluate(new Yr(Math.floor(e.zoom+1),e)),e)}}_calculate(t,e,i,r){return r.zoom>r.zoomHistory.lastIntegerZoom?{from:t,to:e}:{from:i,to:e}}interpolate(t){return t}}class un{constructor(t){this.specification=t}possiblyEvaluate(t,e,i,r){return!!t.expression.evaluate(e,null,{},i,r)}interpolate(){return!1}}class dn{constructor(t){this.properties=t,this.defaultPropertyValues={},this.defaultTransitionablePropertyValues={},this.defaultTransitioningPropertyValues={},this.defaultPossiblyEvaluatedValues={},this.overridableProperties=[]
for(const e in t){const i=t[e]
i.specification.overridable&&this.overridableProperties.push(e)
const r=this.defaultPropertyValues[e]=new Jr(i,void 0),n=this.defaultTransitionablePropertyValues[e]=new Qr(i)
this.defaultTransitioningPropertyValues[e]=n.untransitioned(),this.defaultPossiblyEvaluatedValues[e]=r.possiblyEvaluate({})}}}Er("DataDrivenProperty",ln),Er("DataConstantProperty",on),Er("CrossFadedDataDrivenProperty",cn),Er("CrossFadedProperty",hn),Er("ColorRampProperty",un)
const pn="-transition"
class fn extends ${constructor(t,e){if(super(),this.id=t.id,this.type=t.type,this._featureFilter={filter:()=>!0,needGeometry:!1},"custom"!==t.type&&(this.metadata=t.metadata,this.minzoom=t.minzoom,this.maxzoom=t.maxzoom,"background"!==t.type&&(this.source=t.source,this.sourceLayer=t["source-layer"],this.filter=t.filter),e.layout&&(this._unevaluatedLayout=new nn(e.layout)),e.paint)){this._transitionablePaint=new tn(e.paint)
for(const e in t.paint)this.setPaintProperty(e,t.paint[e],{validate:!1})
for(const e in t.layout)this.setLayoutProperty(e,t.layout[e],{validate:!1})
this._transitioningPaint=this._transitionablePaint.untransitioned(),this.paint=new an(e.paint)}}getCrossfadeParameters(){return this._crossfadeParameters}getLayoutProperty(t){return"visibility"===t?this.visibility:this._unevaluatedLayout.getValue(t)}setLayoutProperty(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
null!=e&&this._validate(br,`layers.${this.id}.layout.${t}`,t,e,i)||("visibility"!==t?this._unevaluatedLayout.setValue(t,e):this.visibility=e)}getPaintProperty(t){return t.endsWith(pn)?this._transitionablePaint.getTransition(t.slice(0,-11)):this._transitionablePaint.getValue(t)}setPaintProperty(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(null!=e&&this._validate(vr,`layers.${this.id}.paint.${t}`,t,e,i))return!1
if(t.endsWith(pn))return this._transitionablePaint.setTransition(t.slice(0,-11),e||void 0),!1
{const i=this._transitionablePaint._values[t],r="cross-faded-data-driven"===i.property.specification["property-type"],n=i.value.isDataDriven(),s=i.value
this._transitionablePaint.setValue(t,e),this._handleSpecialPaintPropertyUpdate(t)
const a=this._transitionablePaint._values[t].value
return a.isDataDriven()||n||r||this._handleOverridablePaintPropertyUpdate(t,s,a)}}_handleSpecialPaintPropertyUpdate(t){}_handleOverridablePaintPropertyUpdate(t,e,i){return!1}isHidden(t){return!!(this.minzoom&&t<this.minzoom)||!!(this.maxzoom&&t>=this.maxzoom)||"none"===this.visibility}updateTransitions(t){this._transitioningPaint=this._transitionablePaint.transitioned(t,this._transitioningPaint)}hasTransition(){return this._transitioningPaint.hasTransition()}recalculate(t,e){t.getCrossfadeParameters&&(this._crossfadeParameters=t.getCrossfadeParameters()),this._unevaluatedLayout&&(this.layout=this._unevaluatedLayout.possiblyEvaluate(t,void 0,e)),this.paint=this._transitioningPaint.possiblyEvaluate(t,void 0,e)}serialize(){const t={id:this.id,type:this.type,source:this.source,"source-layer":this.sourceLayer,metadata:this.metadata,minzoom:this.minzoom,maxzoom:this.maxzoom,filter:this.filter,layout:this._unevaluatedLayout&&this._unevaluatedLayout.serialize(),paint:this._transitionablePaint&&this._transitionablePaint.serialize()}
return this.visibility&&(t.layout=t.layout||{},t.layout.visibility=this.visibility),g(t,((t,e)=>!(void 0===t||"layout"===e&&!Object.keys(t).length||"paint"===e&&!Object.keys(t).length)))}_validate(t,e,i,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
return(!n||!1!==n.validate)&&wr(this,t.call(yr,{key:e,layerType:this.type,objectKey:i,value:r,styleSpec:q,style:{glyphs:!0,sprite:!0}}))}is3D(){return!1}isTileClipped(){return!1}hasOffscreenPass(){return!1}resize(){}isStateDependent(){for(const t in this.paint._values){const e=this.paint.get(t)
if(e instanceof sn&&di(e.property.specification)&&("source"===e.value.kind||"composite"===e.value.kind)&&e.value.isStateDependent)return!0}return!1}}const mn={Int8:Int8Array,Uint8:Uint8Array,Int16:Int16Array,Uint16:Uint16Array,Int32:Int32Array,Uint32:Uint32Array,Float32:Float32Array}
class gn{constructor(t,e){this._structArray=t,this._pos1=e*this.size,this._pos2=this._pos1/2,this._pos4=this._pos1/4,this._pos8=this._pos1/8}}class _n{constructor(){this.isTransferred=!1,this.capacity=-1,this.resize(0)}static serialize(t,e){return t._trim(),e&&(t.isTransferred=!0,e.push(t.arrayBuffer)),{length:t.length,arrayBuffer:t.arrayBuffer}}static deserialize(t){const e=Object.create(this.prototype)
return e.arrayBuffer=t.arrayBuffer,e.length=t.length,e.capacity=t.arrayBuffer.byteLength/e.bytesPerElement,e._refreshViews(),e}_trim(){this.length!==this.capacity&&(this.capacity=this.length,this.arrayBuffer=this.arrayBuffer.slice(0,this.length*this.bytesPerElement),this._refreshViews())}clear(){this.length=0}resize(t){this.reserve(t),this.length=t}reserve(t){if(t>this.capacity){this.capacity=Math.max(t,Math.floor(5*this.capacity),128),this.arrayBuffer=new ArrayBuffer(this.capacity*this.bytesPerElement)
const e=this.uint8
this._refreshViews(),e&&this.uint8.set(e)}}_refreshViews(){throw new Error("_refreshViews() must be implemented by each concrete StructArray layout")}}function yn(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=0,r=0
return{members:t.map((t=>{const n=mn[t.type].BYTES_PER_ELEMENT,s=i=xn(i,Math.max(e,n)),a=t.components||1
return r=Math.max(r,n),i+=n*a,{name:t.name,type:t.type,components:a,offset:s}})),size:xn(i,Math.max(r,e)),alignment:e}}function xn(t,e){return Math.ceil(t/e)*e}class vn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e){const i=this.length
return this.resize(i+1),this.emplace(i,t,e)}emplace(t,e,i){const r=2*t
return this.int16[r+0]=e,this.int16[r+1]=i,t}}vn.prototype.bytesPerElement=4,Er("StructArrayLayout2i4",vn)
class bn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=3*t
return this.int16[n+0]=e,this.int16[n+1]=i,this.int16[n+2]=r,t}}bn.prototype.bytesPerElement=6,Er("StructArrayLayout3i6",bn)
class wn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r){const n=this.length
return this.resize(n+1),this.emplace(n,t,e,i,r)}emplace(t,e,i,r,n){const s=4*t
return this.int16[s+0]=e,this.int16[s+1]=i,this.int16[s+2]=r,this.int16[s+3]=n,t}}wn.prototype.bytesPerElement=8,Er("StructArrayLayout4i8",wn)
class Tn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s){const a=this.length
return this.resize(a+1),this.emplace(a,t,e,i,r,n,s)}emplace(t,e,i,r,n,s,a){const o=6*t
return this.int16[o+0]=e,this.int16[o+1]=i,this.int16[o+2]=r,this.int16[o+3]=n,this.int16[o+4]=s,this.int16[o+5]=a,t}}Tn.prototype.bytesPerElement=12,Er("StructArrayLayout2i4i12",Tn)
class Sn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s){const a=this.length
return this.resize(a+1),this.emplace(a,t,e,i,r,n,s)}emplace(t,e,i,r,n,s,a){const o=4*t,l=8*t
return this.int16[o+0]=e,this.int16[o+1]=i,this.uint8[l+4]=r,this.uint8[l+5]=n,this.uint8[l+6]=s,this.uint8[l+7]=a,t}}Sn.prototype.bytesPerElement=8,Er("StructArrayLayout2i4ub8",Sn)
class En extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e){const i=this.length
return this.resize(i+1),this.emplace(i,t,e)}emplace(t,e,i){const r=2*t
return this.float32[r+0]=e,this.float32[r+1]=i,t}}En.prototype.bytesPerElement=8,Er("StructArrayLayout2f8",En)
class In extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,a,o,l,c){const h=this.length
return this.resize(h+1),this.emplace(h,t,e,i,r,n,s,a,o,l,c)}emplace(t,e,i,r,n,s,a,o,l,c,h){const u=10*t
return this.uint16[u+0]=e,this.uint16[u+1]=i,this.uint16[u+2]=r,this.uint16[u+3]=n,this.uint16[u+4]=s,this.uint16[u+5]=a,this.uint16[u+6]=o,this.uint16[u+7]=l,this.uint16[u+8]=c,this.uint16[u+9]=h,t}}In.prototype.bytesPerElement=20,Er("StructArrayLayout10ui20",In)
class An extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,a,o,l,c,h,u){const d=this.length
return this.resize(d+1),this.emplace(d,t,e,i,r,n,s,a,o,l,c,h,u)}emplace(t,e,i,r,n,s,a,o,l,c,h,u,d){const p=12*t
return this.int16[p+0]=e,this.int16[p+1]=i,this.int16[p+2]=r,this.int16[p+3]=n,this.uint16[p+4]=s,this.uint16[p+5]=a,this.uint16[p+6]=o,this.uint16[p+7]=l,this.int16[p+8]=c,this.int16[p+9]=h,this.int16[p+10]=u,this.int16[p+11]=d,t}}An.prototype.bytesPerElement=24,Er("StructArrayLayout4i4ui4i24",An)
class Mn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=3*t
return this.float32[n+0]=e,this.float32[n+1]=i,this.float32[n+2]=r,t}}Mn.prototype.bytesPerElement=12,Er("StructArrayLayout3f12",Mn)
class Cn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer)}emplaceBack(t){const e=this.length
return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint32[1*t+0]=e,t}}Cn.prototype.bytesPerElement=4,Er("StructArrayLayout1ul4",Cn)
class Pn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,a,o,l){const c=this.length
return this.resize(c+1),this.emplace(c,t,e,i,r,n,s,a,o,l)}emplace(t,e,i,r,n,s,a,o,l,c){const h=10*t,u=5*t
return this.int16[h+0]=e,this.int16[h+1]=i,this.int16[h+2]=r,this.int16[h+3]=n,this.int16[h+4]=s,this.int16[h+5]=a,this.uint32[u+3]=o,this.uint16[h+8]=l,this.uint16[h+9]=c,t}}Pn.prototype.bytesPerElement=20,Er("StructArrayLayout6i1ul2ui20",Pn)
class zn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s){const a=this.length
return this.resize(a+1),this.emplace(a,t,e,i,r,n,s)}emplace(t,e,i,r,n,s,a){const o=6*t
return this.int16[o+0]=e,this.int16[o+1]=i,this.int16[o+2]=r,this.int16[o+3]=n,this.int16[o+4]=s,this.int16[o+5]=a,t}}zn.prototype.bytesPerElement=12,Er("StructArrayLayout2i2i2i12",zn)
class kn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n){const s=this.length
return this.resize(s+1),this.emplace(s,t,e,i,r,n)}emplace(t,e,i,r,n,s){const a=4*t,o=8*t
return this.float32[a+0]=e,this.float32[a+1]=i,this.float32[a+2]=r,this.int16[o+6]=n,this.int16[o+7]=s,t}}kn.prototype.bytesPerElement=16,Er("StructArrayLayout2f1f2i16",kn)
class Dn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r){const n=this.length
return this.resize(n+1),this.emplace(n,t,e,i,r)}emplace(t,e,i,r,n){const s=12*t,a=3*t
return this.uint8[s+0]=e,this.uint8[s+1]=i,this.float32[a+1]=r,this.float32[a+2]=n,t}}Dn.prototype.bytesPerElement=12,Er("StructArrayLayout2ub2f12",Dn)
class Ln extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=3*t
return this.uint16[n+0]=e,this.uint16[n+1]=i,this.uint16[n+2]=r,t}}Ln.prototype.bytesPerElement=6,Er("StructArrayLayout3ui6",Ln)
class Bn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g){const _=this.length
return this.resize(_+1),this.emplace(_,t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g)}emplace(t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g,_){const y=24*t,x=12*t,v=48*t
return this.int16[y+0]=e,this.int16[y+1]=i,this.uint16[y+2]=r,this.uint16[y+3]=n,this.uint32[x+2]=s,this.uint32[x+3]=a,this.uint32[x+4]=o,this.uint16[y+10]=l,this.uint16[y+11]=c,this.uint16[y+12]=h,this.float32[x+7]=u,this.float32[x+8]=d,this.uint8[v+36]=p,this.uint8[v+37]=f,this.uint8[v+38]=m,this.uint32[x+10]=g,this.int16[y+22]=_,t}}Bn.prototype.bytesPerElement=48,Er("StructArrayLayout2i2ui3ul3ui2f3ub1ul1i48",Bn)
class Rn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.int16=new Int16Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g,_,y,x,v,b,w,T,S,E,I,A){const M=this.length
return this.resize(M+1),this.emplace(M,t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g,_,y,x,v,b,w,T,S,E,I,A)}emplace(t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g,_,y,x,v,b,w,T,S,E,I,A,M){const C=34*t,P=17*t
return this.int16[C+0]=e,this.int16[C+1]=i,this.int16[C+2]=r,this.int16[C+3]=n,this.int16[C+4]=s,this.int16[C+5]=a,this.int16[C+6]=o,this.int16[C+7]=l,this.uint16[C+8]=c,this.uint16[C+9]=h,this.uint16[C+10]=u,this.uint16[C+11]=d,this.uint16[C+12]=p,this.uint16[C+13]=f,this.uint16[C+14]=m,this.uint16[C+15]=g,this.uint16[C+16]=_,this.uint16[C+17]=y,this.uint16[C+18]=x,this.uint16[C+19]=v,this.uint16[C+20]=b,this.uint16[C+21]=w,this.uint16[C+22]=T,this.uint32[P+12]=S,this.float32[P+13]=E,this.float32[P+14]=I,this.float32[P+15]=A,this.float32[P+16]=M,t}}Rn.prototype.bytesPerElement=68,Er("StructArrayLayout8i15ui1ul4f68",Rn)
class Fn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t){const e=this.length
return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.float32[1*t+0]=e,t}}Fn.prototype.bytesPerElement=4,Er("StructArrayLayout1f4",Fn)
class On extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint32=new Uint32Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e,i){const r=this.length
return this.resize(r+1),this.emplace(r,t,e,i)}emplace(t,e,i,r){const n=4*t
return this.uint32[2*t+0]=e,this.uint16[n+2]=i,this.uint16[n+3]=r,t}}On.prototype.bytesPerElement=8,Er("StructArrayLayout1ul2ui8",On)
class Un extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t,e){const i=this.length
return this.resize(i+1),this.emplace(i,t,e)}emplace(t,e,i){const r=2*t
return this.uint16[r+0]=e,this.uint16[r+1]=i,t}}Un.prototype.bytesPerElement=4,Er("StructArrayLayout2ui4",Un)
class Vn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.uint16=new Uint16Array(this.arrayBuffer)}emplaceBack(t){const e=this.length
return this.resize(e+1),this.emplace(e,t)}emplace(t,e){return this.uint16[1*t+0]=e,t}}Vn.prototype.bytesPerElement=2,Er("StructArrayLayout1ui2",Vn)
class Nn extends _n{_refreshViews(){this.uint8=new Uint8Array(this.arrayBuffer),this.float32=new Float32Array(this.arrayBuffer)}emplaceBack(t,e,i,r){const n=this.length
return this.resize(n+1),this.emplace(n,t,e,i,r)}emplace(t,e,i,r,n){const s=4*t
return this.float32[s+0]=e,this.float32[s+1]=i,this.float32[s+2]=r,this.float32[s+3]=n,t}}Nn.prototype.bytesPerElement=16,Er("StructArrayLayout4f16",Nn)
class $n extends gn{get anchorPointX(){return this._structArray.int16[this._pos2+0]}get anchorPointY(){return this._structArray.int16[this._pos2+1]}get x1(){return this._structArray.int16[this._pos2+2]}get y1(){return this._structArray.int16[this._pos2+3]}get x2(){return this._structArray.int16[this._pos2+4]}get y2(){return this._structArray.int16[this._pos2+5]}get featureIndex(){return this._structArray.uint32[this._pos4+3]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+8]}get bucketIndex(){return this._structArray.uint16[this._pos2+9]}get anchorPoint(){return new n(this.anchorPointX,this.anchorPointY)}}$n.prototype.size=20
class qn extends Pn{get(t){return new $n(this,t)}}Er("CollisionBoxArray",qn)
class jn extends gn{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get glyphStartIndex(){return this._structArray.uint16[this._pos2+2]}get numGlyphs(){return this._structArray.uint16[this._pos2+3]}get vertexStartIndex(){return this._structArray.uint32[this._pos4+2]}get lineStartIndex(){return this._structArray.uint32[this._pos4+3]}get lineLength(){return this._structArray.uint32[this._pos4+4]}get segment(){return this._structArray.uint16[this._pos2+10]}get lowerSize(){return this._structArray.uint16[this._pos2+11]}get upperSize(){return this._structArray.uint16[this._pos2+12]}get lineOffsetX(){return this._structArray.float32[this._pos4+7]}get lineOffsetY(){return this._structArray.float32[this._pos4+8]}get writingMode(){return this._structArray.uint8[this._pos1+36]}get placedOrientation(){return this._structArray.uint8[this._pos1+37]}set placedOrientation(t){this._structArray.uint8[this._pos1+37]=t}get hidden(){return this._structArray.uint8[this._pos1+38]}set hidden(t){this._structArray.uint8[this._pos1+38]=t}get crossTileID(){return this._structArray.uint32[this._pos4+10]}set crossTileID(t){this._structArray.uint32[this._pos4+10]=t}get associatedIconIndex(){return this._structArray.int16[this._pos2+22]}}jn.prototype.size=48
class Zn extends Bn{get(t){return new jn(this,t)}}Er("PlacedSymbolArray",Zn)
class Gn extends gn{get anchorX(){return this._structArray.int16[this._pos2+0]}get anchorY(){return this._structArray.int16[this._pos2+1]}get rightJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+2]}get centerJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+3]}get leftJustifiedTextSymbolIndex(){return this._structArray.int16[this._pos2+4]}get verticalPlacedTextSymbolIndex(){return this._structArray.int16[this._pos2+5]}get placedIconSymbolIndex(){return this._structArray.int16[this._pos2+6]}get verticalPlacedIconSymbolIndex(){return this._structArray.int16[this._pos2+7]}get key(){return this._structArray.uint16[this._pos2+8]}get textBoxStartIndex(){return this._structArray.uint16[this._pos2+9]}get textBoxEndIndex(){return this._structArray.uint16[this._pos2+10]}get verticalTextBoxStartIndex(){return this._structArray.uint16[this._pos2+11]}get verticalTextBoxEndIndex(){return this._structArray.uint16[this._pos2+12]}get iconBoxStartIndex(){return this._structArray.uint16[this._pos2+13]}get iconBoxEndIndex(){return this._structArray.uint16[this._pos2+14]}get verticalIconBoxStartIndex(){return this._structArray.uint16[this._pos2+15]}get verticalIconBoxEndIndex(){return this._structArray.uint16[this._pos2+16]}get featureIndex(){return this._structArray.uint16[this._pos2+17]}get numHorizontalGlyphVertices(){return this._structArray.uint16[this._pos2+18]}get numVerticalGlyphVertices(){return this._structArray.uint16[this._pos2+19]}get numIconVertices(){return this._structArray.uint16[this._pos2+20]}get numVerticalIconVertices(){return this._structArray.uint16[this._pos2+21]}get useRuntimeCollisionCircles(){return this._structArray.uint16[this._pos2+22]}get crossTileID(){return this._structArray.uint32[this._pos4+12]}set crossTileID(t){this._structArray.uint32[this._pos4+12]=t}get textBoxScale(){return this._structArray.float32[this._pos4+13]}get textOffset0(){return this._structArray.float32[this._pos4+14]}get textOffset1(){return this._structArray.float32[this._pos4+15]}get collisionCircleDiameter(){return this._structArray.float32[this._pos4+16]}}Gn.prototype.size=68
class Xn extends Rn{get(t){return new Gn(this,t)}}Er("SymbolInstanceArray",Xn)
class Wn extends Fn{getoffsetX(t){return this.float32[1*t+0]}}Er("GlyphOffsetArray",Wn)
class Hn extends bn{getx(t){return this.int16[3*t+0]}gety(t){return this.int16[3*t+1]}gettileUnitDistanceFromAnchor(t){return this.int16[3*t+2]}}Er("SymbolLineVertexArray",Hn)
class Kn extends gn{get featureIndex(){return this._structArray.uint32[this._pos4+0]}get sourceLayerIndex(){return this._structArray.uint16[this._pos2+2]}get bucketIndex(){return this._structArray.uint16[this._pos2+3]}}Kn.prototype.size=8
class Yn extends On{get(t){return new Kn(this,t)}}Er("FeatureIndexArray",Yn)
class Jn extends vn{}class Qn extends vn{}class ts extends vn{}class es extends Tn{}class is extends Sn{}class rs extends En{}class ns extends In{}class ss extends An{}class as extends Mn{}class os extends Cn{}class ls extends zn{}class cs extends Dn{}class hs extends Ln{}class us extends Un{}const ds=yn([{name:"a_pos",components:2,type:"Int16"}],4),{members:ps}=ds
class fs{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
this.segments=t}prepareSegment(t,e,i,r){let n=this.segments[this.segments.length-1]
return t>fs.MAX_VERTEX_ARRAY_LENGTH&&x(`Max vertices per segment is ${fs.MAX_VERTEX_ARRAY_LENGTH}: bucket requested ${t}`),(!n||n.vertexLength+t>fs.MAX_VERTEX_ARRAY_LENGTH||n.sortKey!==r)&&(n={vertexOffset:e.length,primitiveOffset:i.length,vertexLength:0,primitiveLength:0},void 0!==r&&(n.sortKey=r),this.segments.push(n)),n}get(){return this.segments}destroy(){for(const t of this.segments)for(const e in t.vaos)t.vaos[e].destroy()}static simpleSegment(t,e,i,r){return new fs([{vertexOffset:t,primitiveOffset:e,vertexLength:i,primitiveLength:r,vaos:{},sortKey:0}])}}function ms(t,e){return 256*(t=h(Math.floor(t),0,255))+h(Math.floor(e),0,255)}fs.MAX_VERTEX_ARRAY_LENGTH=Math.pow(2,16)-1,Er("SegmentVector",fs)
const gs=yn([{name:"a_pattern_from",components:4,type:"Uint16"},{name:"a_pattern_to",components:4,type:"Uint16"},{name:"a_pixel_ratio_from",components:1,type:"Uint16"},{name:"a_pixel_ratio_to",components:1,type:"Uint16"}])
var _s={exports:{}},ys=function(t,e){var i,r,n,s,a,o,l,c
for(r=t.length-(i=3&t.length),n=e,a=3432918353,o=461845907,c=0;c<r;)l=255&t.charCodeAt(c)|(255&t.charCodeAt(++c))<<8|(255&t.charCodeAt(++c))<<16|(255&t.charCodeAt(++c))<<24,++c,n=27492+(65535&(s=5*(65535&(n=(n^=l=(65535&(l=(l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295)<<13|n>>>19))+((5*(n>>>16)&65535)<<16)&4294967295))+((58964+(s>>>16)&65535)<<16)
switch(l=0,i){case 3:l^=(255&t.charCodeAt(c+2))<<16
case 2:l^=(255&t.charCodeAt(c+1))<<8
case 1:n^=l=(65535&(l=(l=(65535&(l^=255&t.charCodeAt(c)))*a+(((l>>>16)*a&65535)<<16)&4294967295)<<15|l>>>17))*o+(((l>>>16)*o&65535)<<16)&4294967295}return n^=t.length,n=2246822507*(65535&(n^=n>>>16))+((2246822507*(n>>>16)&65535)<<16)&4294967295,n=3266489909*(65535&(n^=n>>>13))+((3266489909*(n>>>16)&65535)<<16)&4294967295,(n^=n>>>16)>>>0}
_s.exports=ys,_s.exports.murmur3=ys,_s.exports.murmur2=function(t,e){for(var i,r=t.length,n=e^r,s=0;r>=4;)i=1540483477*(65535&(i=255&t.charCodeAt(s)|(255&t.charCodeAt(++s))<<8|(255&t.charCodeAt(++s))<<16|(255&t.charCodeAt(++s))<<24))+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(i=1540483477*(65535&(i^=i>>>24))+((1540483477*(i>>>16)&65535)<<16)),r-=4,++s
switch(r){case 3:n^=(255&t.charCodeAt(s+2))<<16
case 2:n^=(255&t.charCodeAt(s+1))<<8
case 1:n=1540483477*(65535&(n^=255&t.charCodeAt(s)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),(n^=n>>>15)>>>0}
var xs=e(_s.exports)
class vs{constructor(){this.ids=[],this.positions=[],this.indexed=!1}add(t,e,i,r){this.ids.push(bs(t)),this.positions.push(e,i,r)}getPositions(t){if(!this.indexed)throw new Error("Trying to get index, but feature positions are not indexed")
const e=bs(t)
let i=0,r=this.ids.length-1
for(;i<r;){const t=i+r>>1
this.ids[t]>=e?r=t:i=t+1}const n=[]
for(;this.ids[i]===e;)n.push({index:this.positions[3*i],start:this.positions[3*i+1],end:this.positions[3*i+2]}),i++
return n}static serialize(t,e){const i=new Float64Array(t.ids),r=new Uint32Array(t.positions)
return ws(i,r,0,i.length-1),e&&e.push(i.buffer,r.buffer),{ids:i,positions:r}}static deserialize(t){const e=new vs
return e.ids=t.ids,e.positions=t.positions,e.indexed=!0,e}}function bs(t){const e=+t
return!isNaN(e)&&e<=Number.MAX_SAFE_INTEGER?e:xs(String(t))}function ws(t,e,i,r){for(;i<r;){const n=t[i+r>>1]
let s=i-1,a=r+1
for(;;){do{s++}while(t[s]<n)
do{a--}while(t[a]>n)
if(s>=a)break
Ts(t,s,a),Ts(e,3*s,3*a),Ts(e,3*s+1,3*a+1),Ts(e,3*s+2,3*a+2)}a-i<r-a?(ws(t,e,i,a),i=a+1):(ws(t,e,a+1,r),r=a)}}function Ts(t,e,i){const r=t[e]
t[e]=t[i],t[i]=r}Er("FeaturePositionMap",vs)
class Ss{constructor(t,e){this.gl=t.gl,this.location=e}}class Es extends Ss{constructor(t,e){super(t,e),this.current=0}set(t){this.current!==t&&(this.current=t,this.gl.uniform1f(this.location,t))}}class Is extends Ss{constructor(t,e){super(t,e),this.current=[0,0,0,0]}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]&&t[3]===this.current[3]||(this.current=t,this.gl.uniform4f(this.location,t[0],t[1],t[2],t[3]))}}class As extends Ss{constructor(t,e){super(t,e),this.current=$t.transparent}set(t){t.r===this.current.r&&t.g===this.current.g&&t.b===this.current.b&&t.a===this.current.a||(this.current=t,this.gl.uniform4f(this.location,t.r,t.g,t.b,t.a))}}const Ms=new Float32Array(16)
function Cs(t){return[ms(255*t.r,255*t.g),ms(255*t.b,255*t.a)]}class Ps{constructor(t,e,i){this.value=t,this.uniformNames=e.map((t=>`u_${t}`)),this.type=i}setUniform(t,e,i){t.set(i.constantOr(this.value))}getBinding(t,e,i){return"color"===this.type?new As(t,e):new Es(t,e)}}class zs{constructor(t,e){this.uniformNames=e.map((t=>`u_${t}`)),this.patternFrom=null,this.patternTo=null,this.pixelRatioFrom=1,this.pixelRatioTo=1}setConstantPatternPositions(t,e){this.pixelRatioFrom=e.pixelRatio,this.pixelRatioTo=t.pixelRatio,this.patternFrom=e.tlbr,this.patternTo=t.tlbr}setUniform(t,e,i,r){const n="u_pattern_to"===r?this.patternTo:"u_pattern_from"===r?this.patternFrom:"u_pixel_ratio_to"===r?this.pixelRatioTo:"u_pixel_ratio_from"===r?this.pixelRatioFrom:null
n&&t.set(n)}getBinding(t,e,i){return"u_pattern"===i.substr(0,9)?new Is(t,e):new Es(t,e)}}class ks{constructor(t,e,i,r){this.expression=t,this.type=i,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===i?2:1,offset:0}))),this.paintVertexArray=new r}populatePaintArray(t,e,i,r,n){const s=this.paintVertexArray.length,a=this.expression.evaluate(new Yr(0),e,{},r,[],n)
this.paintVertexArray.resize(t),this._setPaintValue(s,t,a)}updatePaintArray(t,e,i,r){const n=this.expression.evaluate({zoom:0},i,r)
this._setPaintValue(t,e,n)}_setPaintValue(t,e,i){if("color"===this.type){const r=Cs(i)
for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,r[0],r[1])}else{for(let r=t;r<e;r++)this.paintVertexArray.emplace(r,i)
this.maxValue=Math.max(this.maxValue,Math.abs(i))}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()}}class Ds{constructor(t,e,i,r,n,s){this.expression=t,this.uniformNames=e.map((t=>`u_${t}_t`)),this.type=i,this.useIntegerZoom=r,this.zoom=n,this.maxValue=0,this.paintVertexAttributes=e.map((t=>({name:`a_${t}`,type:"Float32",components:"color"===i?4:2,offset:0}))),this.paintVertexArray=new s}populatePaintArray(t,e,i,r,n){const s=this.expression.evaluate(new Yr(this.zoom),e,{},r,[],n),a=this.expression.evaluate(new Yr(this.zoom+1),e,{},r,[],n),o=this.paintVertexArray.length
this.paintVertexArray.resize(t),this._setPaintValue(o,t,s,a)}updatePaintArray(t,e,i,r){const n=this.expression.evaluate({zoom:this.zoom},i,r),s=this.expression.evaluate({zoom:this.zoom+1},i,r)
this._setPaintValue(t,e,n,s)}_setPaintValue(t,e,i,r){if("color"===this.type){const n=Cs(i),s=Cs(r)
for(let i=t;i<e;i++)this.paintVertexArray.emplace(i,n[0],n[1],s[0],s[1])}else{for(let n=t;n<e;n++)this.paintVertexArray.emplace(n,i,r)
this.maxValue=Math.max(this.maxValue,Math.abs(i),Math.abs(r))}}upload(t){this.paintVertexArray&&this.paintVertexArray.arrayBuffer&&(this.paintVertexBuffer&&this.paintVertexBuffer.buffer?this.paintVertexBuffer.updateData(this.paintVertexArray):this.paintVertexBuffer=t.createVertexBuffer(this.paintVertexArray,this.paintVertexAttributes,this.expression.isStateDependent))}destroy(){this.paintVertexBuffer&&this.paintVertexBuffer.destroy()}setUniform(t,e){const i=this.useIntegerZoom?Math.floor(e.zoom):e.zoom,r=h(this.expression.interpolationFactor(i,this.zoom,this.zoom+1),0,1)
t.set(r)}getBinding(t,e,i){return new Es(t,e)}}class Ls{constructor(t,e,i,r,n,s){this.expression=t,this.type=e,this.useIntegerZoom=i,this.zoom=r,this.layerId=s,this.zoomInPaintVertexArray=new n,this.zoomOutPaintVertexArray=new n}populatePaintArray(t,e,i){const r=this.zoomInPaintVertexArray.length
this.zoomInPaintVertexArray.resize(t),this.zoomOutPaintVertexArray.resize(t),this._setPaintValues(r,t,e.patterns&&e.patterns[this.layerId],i)}updatePaintArray(t,e,i,r,n){this._setPaintValues(t,e,i.patterns&&i.patterns[this.layerId],n)}_setPaintValues(t,e,i,r){if(!r||!i)return
const{min:n,mid:s,max:a}=i,o=r[n],l=r[s],c=r[a]
if(o&&l&&c)for(let h=t;h<e;h++)this.zoomInPaintVertexArray.emplace(h,l.tl[0],l.tl[1],l.br[0],l.br[1],o.tl[0],o.tl[1],o.br[0],o.br[1],l.pixelRatio,o.pixelRatio),this.zoomOutPaintVertexArray.emplace(h,l.tl[0],l.tl[1],l.br[0],l.br[1],c.tl[0],c.tl[1],c.br[0],c.br[1],l.pixelRatio,c.pixelRatio)}upload(t){this.zoomInPaintVertexArray&&this.zoomInPaintVertexArray.arrayBuffer&&this.zoomOutPaintVertexArray&&this.zoomOutPaintVertexArray.arrayBuffer&&(this.zoomInPaintVertexBuffer=t.createVertexBuffer(this.zoomInPaintVertexArray,gs.members,this.expression.isStateDependent),this.zoomOutPaintVertexBuffer=t.createVertexBuffer(this.zoomOutPaintVertexArray,gs.members,this.expression.isStateDependent))}destroy(){this.zoomOutPaintVertexBuffer&&this.zoomOutPaintVertexBuffer.destroy(),this.zoomInPaintVertexBuffer&&this.zoomInPaintVertexBuffer.destroy()}}class Bs{constructor(t,e,i){this.binders={},this._buffers=[]
const r=[]
for(const n in t.paint._values){if(!i(n))continue
const s=t.paint.get(n)
if(!(s instanceof sn&&di(s.property.specification)))continue
const a=Fs(n,t.type),o=s.value,l=s.property.specification.type,c=s.property.useIntegerZoom,h=s.property.specification["property-type"],u="cross-faded"===h||"cross-faded-data-driven"===h
if("constant"===o.kind)this.binders[n]=u?new zs(o.value,a):new Ps(o.value,a,l),r.push(`/u_${n}`)
else if("source"===o.kind||u){const i=Os(n,l,"source")
this.binders[n]=u?new Ls(o,l,c,e,i,t.id):new ks(o,a,l,i),r.push(`/a_${n}`)}else{const t=Os(n,l,"composite")
this.binders[n]=new Ds(o,a,l,c,e,t),r.push(`/z_${n}`)}}this.cacheKey=r.sort().join("")}getMaxValue(t){const e=this.binders[t]
return e instanceof ks||e instanceof Ds?e.maxValue:0}populatePaintArrays(t,e,i,r,n){for(const s in this.binders){const a=this.binders[s];(a instanceof ks||a instanceof Ds||a instanceof Ls)&&a.populatePaintArray(t,e,i,r,n)}}setConstantPatternPositions(t,e){for(const i in this.binders){const r=this.binders[i]
r instanceof zs&&r.setConstantPatternPositions(t,e)}}updatePaintArrays(t,e,i,r,n){let s=!1
for(const a in t){const o=e.getPositions(a)
for(const e of o){const o=i.feature(e.index)
for(const i in this.binders){const l=this.binders[i]
if((l instanceof ks||l instanceof Ds||l instanceof Ls)&&!0===l.expression.isStateDependent){const c=r.paint.get(i)
l.expression=c.value,l.updatePaintArray(e.start,e.end,o,t[a],n),s=!0}}}}return s}defines(){const t=[]
for(const e in this.binders){const i=this.binders[e];(i instanceof Ps||i instanceof zs)&&t.push(...i.uniformNames.map((t=>`#define HAS_UNIFORM_${t}`)))}return t}getBinderAttributes(){const t=[]
for(const e in this.binders){const i=this.binders[e]
if(i instanceof ks||i instanceof Ds)for(let e=0;e<i.paintVertexAttributes.length;e++)t.push(i.paintVertexAttributes[e].name)
else if(i instanceof Ls)for(let e=0;e<gs.members.length;e++)t.push(gs.members[e].name)}return t}getBinderUniforms(){const t=[]
for(const e in this.binders){const i=this.binders[e]
if(i instanceof Ps||i instanceof zs||i instanceof Ds)for(const e of i.uniformNames)t.push(e)}return t}getPaintVertexBuffers(){return this._buffers}getUniforms(t,e){const i=[]
for(const r in this.binders){const n=this.binders[r]
if(n instanceof Ps||n instanceof zs||n instanceof Ds)for(const s of n.uniformNames)if(e[s]){const a=n.getBinding(t,e[s],s)
i.push({name:s,property:r,binding:a})}}return i}setUniforms(t,e,i,r){for(const{name:n,property:s,binding:a}of e)this.binders[s].setUniform(a,r,i.get(s),n)}updatePaintBuffers(t){this._buffers=[]
for(const e in this.binders){const i=this.binders[e]
if(t&&i instanceof Ls){const e=2===t.fromScale?i.zoomInPaintVertexBuffer:i.zoomOutPaintVertexBuffer
e&&this._buffers.push(e)}else(i instanceof ks||i instanceof Ds)&&i.paintVertexBuffer&&this._buffers.push(i.paintVertexBuffer)}}upload(t){for(const e in this.binders){const i=this.binders[e];(i instanceof ks||i instanceof Ds||i instanceof Ls)&&i.upload(t)}this.updatePaintBuffers()}destroy(){for(const t in this.binders){const e=this.binders[t];(e instanceof ks||e instanceof Ds||e instanceof Ls)&&e.destroy()}}}class Rs{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0
this.programConfigurations={}
for(const r of t)this.programConfigurations[r.id]=new Bs(r,e,i)
this.needsUpload=!1,this._featureMap=new vs,this._bufferOffset=0}populatePaintArrays(t,e,i,r,n,s){for(const a in this.programConfigurations)this.programConfigurations[a].populatePaintArrays(t,e,r,n,s)
void 0!==e.id&&this._featureMap.add(e.id,i,this._bufferOffset,t),this._bufferOffset=t,this.needsUpload=!0}updatePaintArrays(t,e,i,r){for(const n of i)this.needsUpload=this.programConfigurations[n.id].updatePaintArrays(t,this._featureMap,e,n,r)||this.needsUpload}get(t){return this.programConfigurations[t]}upload(t){if(this.needsUpload){for(const e in this.programConfigurations)this.programConfigurations[e].upload(t)
this.needsUpload=!1}}destroy(){for(const t in this.programConfigurations)this.programConfigurations[t].destroy()}}function Fs(t,e){return{"text-opacity":["opacity"],"icon-opacity":["opacity"],"text-color":["fill_color"],"icon-color":["fill_color"],"text-halo-color":["halo_color"],"icon-halo-color":["halo_color"],"text-halo-blur":["halo_blur"],"icon-halo-blur":["halo_blur"],"text-halo-width":["halo_width"],"icon-halo-width":["halo_width"],"line-gap-width":["gapwidth"],"line-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"],"fill-extrusion-pattern":["pattern_to","pattern_from","pixel_ratio_to","pixel_ratio_from"]}[t]||[t.replace(`${e}-`,"").replace(/-/g,"_")]}function Os(t,e,i){const r={color:{source:En,composite:Nn},number:{source:Fn,composite:En}},n=function(t){return{"line-pattern":{source:ns,composite:ns},"fill-pattern":{source:ns,composite:ns},"fill-extrusion-pattern":{source:ns,composite:ns}}[t]}(t)
return n&&n[i]||r[e][i]}Er("ConstantBinder",Ps),Er("CrossFadedConstantBinder",zs),Er("SourceExpressionBinder",ks),Er("CrossFadedCompositeBinder",Ls),Er("CompositeExpressionBinder",Ds),Er("ProgramConfiguration",Bs,{omit:["_buffers"]}),Er("ProgramConfigurationSet",Rs)
var Us=8192
const Vs=Math.pow(2,14)-1,Ns=-Vs-1
function $s(t){const e=Us/t.extent,i=t.loadGeometry()
for(let r=0;r<i.length;r++){const t=i[r]
for(let i=0;i<t.length;i++){const r=t[i],n=Math.round(r.x*e),s=Math.round(r.y*e)
r.x=h(n,Ns,Vs),r.y=h(s,Ns,Vs),(n<r.x||n>r.x+1||s<r.y||s>r.y+1)&&x("Geometry exceeds allowed extent, reduce your vector tile buffer size")}}return i}function qs(t,e){return{type:t.type,id:t.id,properties:t.properties,geometry:e?$s(t):[]}}function js(t,e,i,r,n){t.emplaceBack(2*e+(r+1)/2,2*i+(n+1)/2)}class Zs{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new Qn,this.indexArray=new hs,this.segments=new fs,this.programConfigurations=new Rs(t.layers,t.zoom),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){const r=this.layers[0],n=[]
let s=null,a=!1
"circle"===r.type&&(s=r.layout.get("circle-sort-key"),a=!s.isConstant())
for(const{feature:o,id:l,index:c,sourceLayerIndex:h}of t){const t=this.layers[0]._featureFilter.needGeometry,e=qs(o,t)
if(!this.layers[0]._featureFilter.filter(new Yr(this.zoom),e,i))continue
const r=a?s.evaluate(e,{},i):void 0,u={id:l,properties:o.properties,type:o.type,sourceLayerIndex:h,index:c,geometry:t?e.geometry:$s(o),patterns:{},sortKey:r}
n.push(u)}a&&n.sort(((t,e)=>t.sortKey-e.sortKey))
for(const o of n){const{geometry:r,index:n,sourceLayerIndex:s}=o,a=t[n].feature
this.addFeature(o,r,n,i),e.featureIndex.insert(a,r,n,s,this.index)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,ps),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())}addFeature(t,e,i,r){for(const n of e)for(const e of n){const i=e.x,r=e.y
if(i<0||i>=Us||r<0||r>=Us)continue
const n=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray,t.sortKey),s=n.vertexLength
js(this.layoutVertexArray,i,r,-1,-1),js(this.layoutVertexArray,i,r,1,-1),js(this.layoutVertexArray,i,r,1,1),js(this.layoutVertexArray,i,r,-1,1),this.indexArray.emplaceBack(s,s+1,s+2),this.indexArray.emplaceBack(s,s+3,s+2),n.vertexLength+=4,n.primitiveLength+=2}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,{},r)}}function Gs(t,e){for(let i=0;i<t.length;i++)if(ea(e,t[i]))return!0
for(let i=0;i<e.length;i++)if(ea(t,e[i]))return!0
return!!Ks(t,e)}function Xs(t,e,i){return!!ea(t,e)||!!Js(e,t,i)}function Ws(t,e){if(1===t.length)return ta(e,t[0])
for(let i=0;i<e.length;i++){const r=e[i]
for(let e=0;e<r.length;e++)if(ea(t,r[e]))return!0}for(let i=0;i<t.length;i++)if(ta(e,t[i]))return!0
for(let i=0;i<e.length;i++)if(Ks(t,e[i]))return!0
return!1}function Hs(t,e,i){if(t.length>1){if(Ks(t,e))return!0
for(let r=0;r<e.length;r++)if(Js(e[r],t,i))return!0}for(let r=0;r<t.length;r++)if(Js(t[r],e,i))return!0
return!1}function Ks(t,e){if(0===t.length||0===e.length)return!1
for(let i=0;i<t.length-1;i++){const r=t[i],n=t[i+1]
for(let t=0;t<e.length-1;t++)if(Ys(r,n,e[t],e[t+1]))return!0}return!1}function Ys(t,e,i,r){return v(t,i,r)!==v(e,i,r)&&v(t,e,i)!==v(t,e,r)}function Js(t,e,i){const r=i*i
if(1===e.length)return t.distSqr(e[0])<r
for(let n=1;n<e.length;n++)if(Qs(t,e[n-1],e[n])<r)return!0
return!1}function Qs(t,e,i){const r=e.distSqr(i)
if(0===r)return t.distSqr(e)
const n=((t.x-e.x)*(i.x-e.x)+(t.y-e.y)*(i.y-e.y))/r
return t.distSqr(n<0?e:n>1?i:i.sub(e)._mult(n)._add(e))}function ta(t,e){let i,r,n,s=!1
for(let a=0;a<t.length;a++){i=t[a]
for(let t=0,a=i.length-1;t<i.length;a=t++)r=i[t],n=i[a],r.y>e.y!=n.y>e.y&&e.x<(n.x-r.x)*(e.y-r.y)/(n.y-r.y)+r.x&&(s=!s)}return s}function ea(t,e){let i=!1
for(let r=0,n=t.length-1;r<t.length;n=r++){const s=t[r],a=t[n]
s.y>e.y!=a.y>e.y&&e.x<(a.x-s.x)*(e.y-s.y)/(a.y-s.y)+s.x&&(i=!i)}return i}function ia(t,e,i){const r=i[0],n=i[2]
if(t.x<r.x&&e.x<r.x||t.x>n.x&&e.x>n.x||t.y<r.y&&e.y<r.y||t.y>n.y&&e.y>n.y)return!1
const s=v(t,e,i[0])
return s!==v(t,e,i[1])||s!==v(t,e,i[2])||s!==v(t,e,i[3])}function ra(t,e,i){const r=e.paint.get(t).value
return"constant"===r.kind?r.value:i.programConfigurations.get(e.id).getMaxValue(t)}function na(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])}function sa(t,e,i,r,s){if(!e[0]&&!e[1])return t
const a=n.convert(e)._mult(s)
"viewport"===i&&a._rotate(-r)
const o=[]
for(let n=0;n<t.length;n++)o.push(t[n].sub(a))
return o}let aa,oa
Er("CircleBucket",Zs,{omit:["layers"]})
var la={get paint(){return oa=oa||new dn({"circle-radius":new ln(q.paint_circle["circle-radius"]),"circle-color":new ln(q.paint_circle["circle-color"]),"circle-blur":new ln(q.paint_circle["circle-blur"]),"circle-opacity":new ln(q.paint_circle["circle-opacity"]),"circle-translate":new on(q.paint_circle["circle-translate"]),"circle-translate-anchor":new on(q.paint_circle["circle-translate-anchor"]),"circle-pitch-scale":new on(q.paint_circle["circle-pitch-scale"]),"circle-pitch-alignment":new on(q.paint_circle["circle-pitch-alignment"]),"circle-stroke-width":new ln(q.paint_circle["circle-stroke-width"]),"circle-stroke-color":new ln(q.paint_circle["circle-stroke-color"]),"circle-stroke-opacity":new ln(q.paint_circle["circle-stroke-opacity"])})},get layout(){return aa=aa||new dn({"circle-sort-key":new ln(q.layout_circle["circle-sort-key"])})}},ca=1e-6,ha="undefined"!=typeof Float32Array?Float32Array:Array
function ua(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function da(t,e,i){var r=e[0],n=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=e[9],p=e[10],f=e[11],m=e[12],g=e[13],_=e[14],y=e[15],x=i[0],v=i[1],b=i[2],w=i[3]
return t[0]=x*r+v*o+b*u+w*m,t[1]=x*n+v*l+b*d+w*g,t[2]=x*s+v*c+b*p+w*_,t[3]=x*a+v*h+b*f+w*y,t[4]=(x=i[4])*r+(v=i[5])*o+(b=i[6])*u+(w=i[7])*m,t[5]=x*n+v*l+b*d+w*g,t[6]=x*s+v*c+b*p+w*_,t[7]=x*a+v*h+b*f+w*y,t[8]=(x=i[8])*r+(v=i[9])*o+(b=i[10])*u+(w=i[11])*m,t[9]=x*n+v*l+b*d+w*g,t[10]=x*s+v*c+b*p+w*_,t[11]=x*a+v*h+b*f+w*y,t[12]=(x=i[12])*r+(v=i[13])*o+(b=i[14])*u+(w=i[15])*m,t[13]=x*n+v*l+b*d+w*g,t[14]=x*s+v*c+b*p+w*_,t[15]=x*a+v*h+b*f+w*y,t}Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e]
return Math.sqrt(t)})
var pa,fa=da
function ma(t,e,i){var r=e[0],n=e[1],s=e[2],a=e[3]
return t[0]=i[0]*r+i[4]*n+i[8]*s+i[12]*a,t[1]=i[1]*r+i[5]*n+i[9]*s+i[13]*a,t[2]=i[2]*r+i[6]*n+i[10]*s+i[14]*a,t[3]=i[3]*r+i[7]*n+i[11]*s+i[15]*a,t}function ga(t,e){const i=ma([],[t.x,t.y,0,1],e)
return new n(i[0]/i[3],i[1]/i[3])}pa=new ha(4),ha!=Float32Array&&(pa[0]=0,pa[1]=0,pa[2]=0,pa[3]=0)
class _a extends Zs{}let ya
Er("HeatmapBucket",_a,{omit:["layers"]})
var xa={get paint(){return ya=ya||new dn({"heatmap-radius":new ln(q.paint_heatmap["heatmap-radius"]),"heatmap-weight":new ln(q.paint_heatmap["heatmap-weight"]),"heatmap-intensity":new on(q.paint_heatmap["heatmap-intensity"]),"heatmap-color":new un(q.paint_heatmap["heatmap-color"]),"heatmap-opacity":new on(q.paint_heatmap["heatmap-opacity"])})}}
function va(t,e,i,r){let{width:n,height:s}=e
if(r){if(r instanceof Uint8ClampedArray)r=new Uint8Array(r.buffer)
else if(r.length!==n*s*i)throw new RangeError(`mismatched image size. expected: ${r.length} but got: ${n*s*i}`)}else r=new Uint8Array(n*s*i)
return t.width=n,t.height=s,t.data=r,t}function ba(t,e,i){let{width:r,height:n}=e
if(r===t.width&&n===t.height)return
const s=va({},{width:r,height:n},i)
wa(t,s,{x:0,y:0},{x:0,y:0},{width:Math.min(t.width,r),height:Math.min(t.height,n)},i),t.width=r,t.height=n,t.data=s.data}function wa(t,e,i,r,n,s){if(0===n.width||0===n.height)return e
if(n.width>t.width||n.height>t.height||i.x>t.width-n.width||i.y>t.height-n.height)throw new RangeError("out of range source coordinates for image copy")
if(n.width>e.width||n.height>e.height||r.x>e.width-n.width||r.y>e.height-n.height)throw new RangeError("out of range destination coordinates for image copy")
const a=t.data,o=e.data
if(a===o)throw new Error("srcData equals dstData, so image is already copied")
for(let l=0;l<n.height;l++){const c=((i.y+l)*t.width+i.x)*s,h=((r.y+l)*e.width+r.x)*s
for(let t=0;t<n.width*s;t++)o[h+t]=a[c+t]}return e}class Ta{constructor(t,e){va(this,t,1,e)}resize(t){ba(this,t,1)}clone(){return new Ta({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,i,r,n){wa(t,e,i,r,n,1)}}class Sa{constructor(t,e){va(this,t,4,e)}resize(t){ba(this,t,4)}replace(t,e){e?this.data.set(t):this.data=t instanceof Uint8ClampedArray?new Uint8Array(t.buffer):t}clone(){return new Sa({width:this.width,height:this.height},new Uint8Array(this.data))}static copy(t,e,i,r,n){wa(t,e,i,r,n,4)}}function Ea(t){const e={},i=t.resolution||256,r=t.clips?t.clips.length:1,n=t.image||new Sa({width:i,height:r})
if(Math.log(i)/Math.LN2%1!=0)throw new Error(`width is not a power of 2 - ${i}`)
const s=(i,r,s)=>{e[t.evaluationKey]=s
const a=t.expression.evaluate(e)
n.data[i+r+0]=Math.floor(255*a.r/a.a),n.data[i+r+1]=Math.floor(255*a.g/a.a),n.data[i+r+2]=Math.floor(255*a.b/a.a),n.data[i+r+3]=Math.floor(255*a.a)}
if(t.clips)for(let a=0,o=0;a<r;++a,o+=4*i)for(let e=0,r=0;e<i;e++,r+=4){const n=e/(i-1),{start:l,end:c}=t.clips[a]
s(o,r,l*(1-n)+c*n)}else for(let a=0,o=0;a<i;a++,o+=4)s(0,o,a/(i-1))
return n}let Ia
Er("AlphaImage",Ta),Er("RGBAImage",Sa)
var Aa={get paint(){return Ia=Ia||new dn({"hillshade-illumination-direction":new on(q.paint_hillshade["hillshade-illumination-direction"]),"hillshade-illumination-anchor":new on(q.paint_hillshade["hillshade-illumination-anchor"]),"hillshade-exaggeration":new on(q.paint_hillshade["hillshade-exaggeration"]),"hillshade-shadow-color":new on(q.paint_hillshade["hillshade-shadow-color"]),"hillshade-highlight-color":new on(q.paint_hillshade["hillshade-highlight-color"]),"hillshade-accent-color":new on(q.paint_hillshade["hillshade-accent-color"])})}}
const Ma=yn([{name:"a_pos",components:2,type:"Int16"}],4),{members:Ca}=Ma
var Pa={exports:{}}
function za(t,e,i){i=i||2
var r,n,s,a,o,l,c,h=e&&e.length,u=h?e[0]*i:t.length,d=ka(t,0,u,i,!0),p=[]
if(!d||d.next===d.prev)return p
if(h&&(d=function(t,e,i,r){var n,s,a,o=[]
for(n=0,s=e.length;n<s;n++)(a=ka(t,e[n]*r,n<s-1?e[n+1]*r:t.length,r,!1))===a.next&&(a.steiner=!0),o.push(qa(a))
for(o.sort(Ua),n=0;n<o.length;n++)i=Va(o[n],i)
return i}(t,e,d,i)),t.length>80*i){r=s=t[0],n=a=t[1]
for(var f=i;f<u;f+=i)(o=t[f])<r&&(r=o),(l=t[f+1])<n&&(n=l),o>s&&(s=o),l>a&&(a=l)
c=0!==(c=Math.max(s-r,a-n))?32767/c:0}return La(d,p,i,r,n,c,0),p}function ka(t,e,i,r,n){var s,a
if(n===io(t,e,i,r)>0)for(s=e;s<i;s+=r)a=Qa(s,t[s],t[s+1],a)
else for(s=i-r;s>=e;s-=r)a=Qa(s,t[s],t[s+1],a)
return a&&Xa(a,a.next)&&(to(a),a=a.next),a}function Da(t,e){if(!t)return t
e||(e=t)
var i,r=t
do{if(i=!1,r.steiner||!Xa(r,r.next)&&0!==Ga(r.prev,r,r.next))r=r.next
else{if(to(r),(r=e=r.prev)===r.next)break
i=!0}}while(i||r!==e)
return e}function La(t,e,i,r,n,s,a){if(t){!a&&s&&function(t,e,i,r){var n=t
do{0===n.z&&(n.z=$a(n.x,n.y,e,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next}while(n!==t)
n.prevZ.nextZ=null,n.prevZ=null,function(t){var e,i,r,n,s,a,o,l,c=1
do{for(i=t,t=null,s=null,a=0;i;){for(a++,r=i,o=0,e=0;e<c&&(o++,r=r.nextZ);e++);for(l=c;o>0||l>0&&r;)0!==o&&(0===l||!r||i.z<=r.z)?(n=i,i=i.nextZ,o--):(n=r,r=r.nextZ,l--),s?s.nextZ=n:t=n,n.prevZ=s,s=n
i=r}s.nextZ=null,c*=2}while(a>1)}(n)}(t,r,n,s)
for(var o,l,c=t;t.prev!==t.next;)if(o=t.prev,l=t.next,s?Ra(t,r,n,s):Ba(t))e.push(o.i/i|0),e.push(t.i/i|0),e.push(l.i/i|0),to(t),t=l.next,c=l.next
else if((t=l)===c){a?1===a?La(t=Fa(Da(t),e,i),e,i,r,n,s,2):2===a&&Oa(t,e,i,r,n,s):La(Da(t),e,i,r,n,s,1)
break}}}function Ba(t){var e=t.prev,i=t,r=t.next
if(Ga(e,i,r)>=0)return!1
for(var n=e.x,s=i.x,a=r.x,o=e.y,l=i.y,c=r.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=r.next;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&ja(n,o,s,l,a,c,f.x,f.y)&&Ga(f.prev,f,f.next)>=0)return!1
f=f.next}return!0}function Ra(t,e,i,r){var n=t.prev,s=t,a=t.next
if(Ga(n,s,a)>=0)return!1
for(var o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,m=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,_=$a(p,f,e,i,r),y=$a(m,g,e,i,r),x=t.prevZ,v=t.nextZ;x&&x.z>=_&&v&&v.z<=y;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=g&&x!==n&&x!==a&&ja(o,h,l,u,c,d,x.x,x.y)&&Ga(x.prev,x,x.next)>=0)return!1
if(x=x.prevZ,v.x>=p&&v.x<=m&&v.y>=f&&v.y<=g&&v!==n&&v!==a&&ja(o,h,l,u,c,d,v.x,v.y)&&Ga(v.prev,v,v.next)>=0)return!1
v=v.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=m&&x.y>=f&&x.y<=g&&x!==n&&x!==a&&ja(o,h,l,u,c,d,x.x,x.y)&&Ga(x.prev,x,x.next)>=0)return!1
x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=m&&v.y>=f&&v.y<=g&&v!==n&&v!==a&&ja(o,h,l,u,c,d,v.x,v.y)&&Ga(v.prev,v,v.next)>=0)return!1
v=v.nextZ}return!0}function Fa(t,e,i){var r=t
do{var n=r.prev,s=r.next.next
!Xa(n,s)&&Wa(n,r,r.next,s)&&Ya(n,s)&&Ya(s,n)&&(e.push(n.i/i|0),e.push(r.i/i|0),e.push(s.i/i|0),to(r),to(r.next),r=t=s),r=r.next}while(r!==t)
return Da(r)}function Oa(t,e,i,r,n,s){var a=t
do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&Za(a,o)){var l=Ja(a,o)
return a=Da(a,a.next),l=Da(l,l.next),La(a,e,i,r,n,s,0),void La(l,e,i,r,n,s,0)}o=o.next}a=a.next}while(a!==t)}function Ua(t,e){return t.x-e.x}function Va(t,e){var i=function(t,e){var i,r=e,n=t.x,s=t.y,a=-1/0
do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){var o=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y)
if(o<=n&&o>a&&(a=o,i=r.x<r.next.x?r:r.next,o===n))return i}r=r.next}while(r!==e)
if(!i)return null
var l,c=i,h=i.x,u=i.y,d=1/0
r=i
do{n>=r.x&&r.x>=h&&n!==r.x&&ja(s<u?n:a,s,h,u,s<u?a:n,s,r.x,r.y)&&(l=Math.abs(s-r.y)/(n-r.x),Ya(r,t)&&(l<d||l===d&&(r.x>i.x||r.x===i.x&&Na(i,r)))&&(i=r,d=l)),r=r.next}while(r!==c)
return i}(t,e)
if(!i)return e
var r=Ja(i,t)
return Da(r,r.next),Da(i,i.next)}function Na(t,e){return Ga(t.prev,t,e.prev)<0&&Ga(e.next,t,t.next)<0}function $a(t,e,i,r,n){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-i)*n|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function qa(t){var e=t,i=t
do{(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next}while(e!==t)
return i}function ja(t,e,i,r,n,s,a,o){return(n-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(r-o)>=(i-a)*(e-o)&&(i-a)*(s-o)>=(n-a)*(r-o)}function Za(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var i=t
do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&Wa(i,i.next,t,e))return!0
i=i.next}while(i!==t)
return!1}(t,e)&&(Ya(t,e)&&Ya(e,t)&&function(t,e){var i=t,r=!1,n=(t.x+e.x)/2,s=(t.y+e.y)/2
do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next}while(i!==t)
return r}(t,e)&&(Ga(t.prev,t,e.prev)||Ga(t,e.prev,e))||Xa(t,e)&&Ga(t.prev,t,t.next)>0&&Ga(e.prev,e,e.next)>0)}function Ga(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function Xa(t,e){return t.x===e.x&&t.y===e.y}function Wa(t,e,i,r){var n=Ka(Ga(t,e,i)),s=Ka(Ga(t,e,r)),a=Ka(Ga(i,r,t)),o=Ka(Ga(i,r,e))
return n!==s&&a!==o||!(0!==n||!Ha(t,i,e))||!(0!==s||!Ha(t,r,e))||!(0!==a||!Ha(i,t,r))||!(0!==o||!Ha(i,e,r))}function Ha(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function Ka(t){return t>0?1:t<0?-1:0}function Ya(t,e){return Ga(t.prev,t,t.next)<0?Ga(t,e,t.next)>=0&&Ga(t,t.prev,e)>=0:Ga(t,e,t.prev)<0||Ga(t,t.next,e)<0}function Ja(t,e){var i=new eo(t.i,t.x,t.y),r=new eo(e.i,e.x,e.y),n=t.next,s=e.prev
return t.next=e,e.prev=t,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Qa(t,e,i,r){var n=new eo(t,e,i)
return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function to(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function eo(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function io(t,e,i,r){for(var n=0,s=e,a=i-r;s<i;s+=r)n+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s
return n}Pa.exports=za,Pa.exports.default=za,za.deviation=function(t,e,i,r){var n=e&&e.length,s=Math.abs(io(t,0,n?e[0]*i:t.length,i))
if(n)for(var a=0,o=e.length;a<o;a++)s-=Math.abs(io(t,e[a]*i,a<o-1?e[a+1]*i:t.length,i))
var l=0
for(a=0;a<r.length;a+=3){var c=r[a]*i,h=r[a+1]*i,u=r[a+2]*i
l+=Math.abs((t[c]-t[u])*(t[h+1]-t[c+1])-(t[c]-t[h])*(t[u+1]-t[c+1]))}return 0===s&&0===l?0:Math.abs((l-s)/s)},za.flatten=function(t){for(var e=t[0][0].length,i={vertices:[],holes:[],dimensions:e},r=0,n=0;n<t.length;n++){for(var s=0;s<t[n].length;s++)for(var a=0;a<e;a++)i.vertices.push(t[n][s][a])
n>0&&i.holes.push(r+=t[n-1].length)}return i}
var ro=e(Pa.exports)
function no(t,e,i,r,n){so(t,e,i||0,r||t.length-1,n||oo)}function so(t,e,i,r,n){for(;r>i;){if(r-i>600){var s=r-i+1,a=e-i+1,o=Math.log(s),l=.5*Math.exp(2*o/3),c=.5*Math.sqrt(o*l*(s-l)/s)*(a-s/2<0?-1:1)
so(t,e,Math.max(i,Math.floor(e-a*l/s+c)),Math.min(r,Math.floor(e+(s-a)*l/s+c)),n)}var h=t[e],u=i,d=r
for(ao(t,i,e),n(t[r],h)>0&&ao(t,i,r);u<d;){for(ao(t,u,d),u++,d--;n(t[u],h)<0;)u++
for(;n(t[d],h)>0;)d--}0===n(t[i],h)?ao(t,i,d):ao(t,++d,r),d<=e&&(i=d+1),e<=d&&(r=d-1)}}function ao(t,e,i){var r=t[e]
t[e]=t[i],t[i]=r}function oo(t,e){return t<e?-1:t>e?1:0}function lo(t,e){const i=t.length
if(i<=1)return[t]
const r=[]
let n,s
for(let a=0;a<i;a++){const e=b(t[a])
0!==e&&(t[a].area=Math.abs(e),void 0===s&&(s=e<0),s===e<0?(n&&r.push(n),n=[t[a]]):n.push(t[a]))}if(n&&r.push(n),e>1)for(let a=0;a<r.length;a++)r[a].length<=e||(no(r[a],e,1,r[a].length-1,co),r[a]=r[a].slice(0,e))
return r}function co(t,e){return e.area-t.area}function ho(t,e,i){const r=i.patternDependencies
let n=!1
for(const s of e){const e=s.paint.get(`${t}-pattern`)
e.isConstant()||(n=!0)
const i=e.constantOr(null)
i&&(n=!0,r[i.to]=!0,r[i.from]=!0)}return n}function uo(t,e,i,r,n){const s=n.patternDependencies
for(const a of e){const e=a.paint.get(`${t}-pattern`).value
if("constant"!==e.kind){let t=e.evaluate({zoom:r-1},i,{},n.availableImages),o=e.evaluate({zoom:r},i,{},n.availableImages),l=e.evaluate({zoom:r+1},i,{},n.availableImages)
t=t&&t.name?t.name:t,o=o&&o.name?o.name:o,l=l&&l.name?l.name:l,s[t]=!0,s[o]=!0,s[l]=!0,i.patterns[a.id]={min:t,mid:o,max:l}}}return i}class po{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.layoutVertexArray=new ts,this.indexArray=new hs,this.indexArray2=new us,this.programConfigurations=new Rs(t.layers,t.zoom),this.segments=new fs,this.segments2=new fs,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){this.hasPattern=ho("fill",this.layers,e)
const r=this.layers[0].layout.get("fill-sort-key"),n=!r.isConstant(),s=[]
for(const{feature:a,id:o,index:l,sourceLayerIndex:c}of t){const t=this.layers[0]._featureFilter.needGeometry,h=qs(a,t)
if(!this.layers[0]._featureFilter.filter(new Yr(this.zoom),h,i))continue
const u=n?r.evaluate(h,{},i,e.availableImages):void 0,d={id:o,properties:a.properties,type:a.type,sourceLayerIndex:c,index:l,geometry:t?h.geometry:$s(a),patterns:{},sortKey:u}
s.push(d)}n&&s.sort(((t,e)=>t.sortKey-e.sortKey))
for(const a of s){const{geometry:r,index:n,sourceLayerIndex:s}=a
if(this.hasPattern){const t=uo("fill",this.layers,a,this.zoom,e)
this.patternFeatures.push(t)}else this.addFeature(a,r,n,i,{})
e.featureIndex.insert(t[n].feature,r,n,s,this.index)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}addFeatures(t,e,i){for(const r of this.patternFeatures)this.addFeature(r,r.geometry,r.index,e,i)}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,Ca),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.indexBuffer2=t.createIndexBuffer(this.indexArray2)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.indexBuffer2.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.segments2.destroy())}addFeature(t,e,i,r,n){for(const s of lo(e,500)){let t=0
for(const o of s)t+=o.length
const e=this.segments.prepareSegment(t,this.layoutVertexArray,this.indexArray),i=e.vertexLength,r=[],n=[]
for(const o of s){if(0===o.length)continue
o!==s[0]&&n.push(r.length/2)
const t=this.segments2.prepareSegment(o.length,this.layoutVertexArray,this.indexArray2),e=t.vertexLength
this.layoutVertexArray.emplaceBack(o[0].x,o[0].y),this.indexArray2.emplaceBack(e+o.length-1,e),r.push(o[0].x),r.push(o[0].y)
for(let i=1;i<o.length;i++)this.layoutVertexArray.emplaceBack(o[i].x,o[i].y),this.indexArray2.emplaceBack(e+i-1,e+i),r.push(o[i].x),r.push(o[i].y)
t.vertexLength+=o.length,t.primitiveLength+=o.length}const a=ro(r,n)
for(let s=0;s<a.length;s+=3)this.indexArray.emplaceBack(i+a[s],i+a[s+1],i+a[s+2])
e.vertexLength+=t,e.primitiveLength+=a.length/3}this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,n,r)}}let fo,mo
Er("FillBucket",po,{omit:["layers","patternFeatures"]})
var go={get paint(){return mo=mo||new dn({"fill-antialias":new on(q.paint_fill["fill-antialias"]),"fill-opacity":new ln(q.paint_fill["fill-opacity"]),"fill-color":new ln(q.paint_fill["fill-color"]),"fill-outline-color":new ln(q.paint_fill["fill-outline-color"]),"fill-translate":new on(q.paint_fill["fill-translate"]),"fill-translate-anchor":new on(q.paint_fill["fill-translate-anchor"]),"fill-pattern":new cn(q.paint_fill["fill-pattern"])})},get layout(){return fo=fo||new dn({"fill-sort-key":new ln(q.layout_fill["fill-sort-key"])})}}
const _o=yn([{name:"a_pos",components:2,type:"Int16"},{name:"a_normal_ed",components:4,type:"Int16"}],4),yo=yn([{name:"a_centroid",components:2,type:"Int16"}],4),{members:xo}=_o
var vo={},bo=i,wo=To
function To(t,e,i,r,n){this.properties={},this.extent=i,this.type=0,this._pbf=t,this._geometry=-1,this._keys=r,this._values=n,t.readFields(So,this,e)}function So(t,e,i){1==t?e.id=i.readVarint():2==t?function(t,e){for(var i=t.readVarint()+t.pos;t.pos<i;){var r=e._keys[t.readVarint()],n=e._values[t.readVarint()]
e.properties[r]=n}}(i,e):3==t?e.type=i.readVarint():4==t&&(e._geometry=i.pos)}function Eo(t){for(var e,i,r=0,n=0,s=t.length,a=s-1;n<s;a=n++)r+=((i=t[a]).x-(e=t[n]).x)*(e.y+i.y)
return r}To.types=["Unknown","Point","LineString","Polygon"],To.prototype.loadGeometry=function(){var t=this._pbf
t.pos=this._geometry
for(var e,i=t.readVarint()+t.pos,r=1,n=0,s=0,a=0,o=[];t.pos<i;){if(n<=0){var l=t.readVarint()
r=7&l,n=l>>3}if(n--,1===r||2===r)s+=t.readSVarint(),a+=t.readSVarint(),1===r&&(e&&o.push(e),e=[]),e.push(new bo(s,a))
else{if(7!==r)throw new Error("unknown command "+r)
e&&e.push(e[0].clone())}}return e&&o.push(e),o},To.prototype.bbox=function(){var t=this._pbf
t.pos=this._geometry
for(var e=t.readVarint()+t.pos,i=1,r=0,n=0,s=0,a=1/0,o=-1/0,l=1/0,c=-1/0;t.pos<e;){if(r<=0){var h=t.readVarint()
i=7&h,r=h>>3}if(r--,1===i||2===i)(n+=t.readSVarint())<a&&(a=n),n>o&&(o=n),(s+=t.readSVarint())<l&&(l=s),s>c&&(c=s)
else if(7!==i)throw new Error("unknown command "+i)}return[a,l,o,c]},To.prototype.toGeoJSON=function(t,e,i){var r,n,s=this.extent*Math.pow(2,i),a=this.extent*t,o=this.extent*e,l=this.loadGeometry(),c=To.types[this.type]
function h(t){for(var e=0;e<t.length;e++){var i=t[e]
t[e]=[360*(i.x+a)/s-180,360/Math.PI*Math.atan(Math.exp((180-360*(i.y+o)/s)*Math.PI/180))-90]}}switch(this.type){case 1:var u=[]
for(r=0;r<l.length;r++)u[r]=l[r][0]
h(l=u)
break
case 2:for(r=0;r<l.length;r++)h(l[r])
break
case 3:for(l=function(t){var e=t.length
if(e<=1)return[t]
for(var i,r,n=[],s=0;s<e;s++){var a=Eo(t[s])
0!==a&&(void 0===r&&(r=a<0),r===a<0?(i&&n.push(i),i=[t[s]]):i.push(t[s]))}return i&&n.push(i),n}(l),r=0;r<l.length;r++)for(n=0;n<l[r].length;n++)h(l[r][n])}1===l.length?l=l[0]:c="Multi"+c
var d={type:"Feature",geometry:{type:c,coordinates:l},properties:this.properties}
return"id"in this&&(d.id=this.id),d}
var Io=wo,Ao=Mo
function Mo(t,e){this.version=1,this.name=null,this.extent=4096,this.length=0,this._pbf=t,this._keys=[],this._values=[],this._features=[],t.readFields(Co,this,e),this.length=this._features.length}function Co(t,e,i){15===t?e.version=i.readVarint():1===t?e.name=i.readString():5===t?e.extent=i.readVarint():2===t?e._features.push(i.pos):3===t?e._keys.push(i.readString()):4===t&&e._values.push(function(t){for(var e=null,i=t.readVarint()+t.pos;t.pos<i;){var r=t.readVarint()>>3
e=1===r?t.readString():2===r?t.readFloat():3===r?t.readDouble():4===r?t.readVarint64():5===r?t.readVarint():6===r?t.readSVarint():7===r?t.readBoolean():null}return e}(i))}Mo.prototype.feature=function(t){if(t<0||t>=this._features.length)throw new Error("feature index out of bounds")
this._pbf.pos=this._features[t]
var e=this._pbf.readVarint()+this._pbf.pos
return new Io(this._pbf,e,this.extent,this._keys,this._values)}
var Po=Ao
function zo(t,e,i){if(3===t){var r=new Po(i,i.readVarint()+i.pos)
r.length&&(e[r.name]=r)}}vo.VectorTile=function(t,e){this.layers=t.readFields(zo,{},e)},vo.VectorTileFeature=wo,vo.VectorTileLayer=Ao
const ko=vo.VectorTileFeature.types,Do=Math.pow(2,13)
function Lo(t,e,i,r,n,s,a,o){t.emplaceBack(e,i,2*Math.floor(r*Do)+a,n*Do*2,s*Do*2,Math.round(o))}class Bo{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.layoutVertexArray=new es,this.centroidVertexArray=new Jn,this.indexArray=new hs,this.programConfigurations=new Rs(t.layers,t.zoom),this.segments=new fs,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){this.features=[],this.hasPattern=ho("fill-extrusion",this.layers,e)
for(const{feature:r,id:n,index:s,sourceLayerIndex:a}of t){const t=this.layers[0]._featureFilter.needGeometry,o=qs(r,t)
if(!this.layers[0]._featureFilter.filter(new Yr(this.zoom),o,i))continue
const l={id:n,sourceLayerIndex:a,index:s,geometry:t?o.geometry:$s(r),properties:r.properties,type:r.type,patterns:{}}
this.hasPattern?this.features.push(uo("fill-extrusion",this.layers,l,this.zoom,e)):this.addFeature(l,l.geometry,s,i,{}),e.featureIndex.insert(r,l.geometry,s,a,this.index,!0)}}addFeatures(t,e,i){for(const r of this.features){const{geometry:t}=r
this.addFeature(r,t,r.index,e,i)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.centroidVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,xo),this.centroidVertexBuffer=t.createVertexBuffer(this.centroidVertexArray,yo.members,!0),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.centroidVertexBuffer.destroy())}addFeature(t,e,i,r,n){const s={x:0,y:0,vertexCount:0}
for(const a of lo(e,500)){let e=0
for(const t of a)e+=t.length
let i=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray)
for(const t of a){if(0===t.length)continue
if(Fo(t))continue
let e=0
for(let r=0;r<t.length;r++){const n=t[r]
if(r>=1){const a=t[r-1]
if(!Ro(n,a)){i.vertexLength+4>fs.MAX_VERTEX_ARRAY_LENGTH&&(i=this.segments.prepareSegment(4,this.layoutVertexArray,this.indexArray))
const t=n.sub(a)._perp()._unit(),r=a.dist(n)
e+r>32768&&(e=0),Lo(this.layoutVertexArray,n.x,n.y,t.x,t.y,0,0,e),Lo(this.layoutVertexArray,n.x,n.y,t.x,t.y,0,1,e),s.x+=2*n.x,s.y+=2*n.y,s.vertexCount+=2,e+=r,Lo(this.layoutVertexArray,a.x,a.y,t.x,t.y,0,0,e),Lo(this.layoutVertexArray,a.x,a.y,t.x,t.y,0,1,e),s.x+=2*a.x,s.y+=2*a.y,s.vertexCount+=2
const o=i.vertexLength
this.indexArray.emplaceBack(o,o+2,o+1),this.indexArray.emplaceBack(o+1,o+2,o+3),i.vertexLength+=4,i.primitiveLength+=2}}}}if(i.vertexLength+e>fs.MAX_VERTEX_ARRAY_LENGTH&&(i=this.segments.prepareSegment(e,this.layoutVertexArray,this.indexArray)),"Polygon"!==ko[t.type])continue
const r=[],n=[],o=i.vertexLength
for(const t of a)if(0!==t.length){t!==a[0]&&n.push(r.length/2)
for(let e=0;e<t.length;e++){const i=t[e]
Lo(this.layoutVertexArray,i.x,i.y,0,0,1,1,0),s.x+=i.x,s.y+=i.y,s.vertexCount+=1,r.push(i.x),r.push(i.y)}}const l=ro(r,n)
for(let t=0;t<l.length;t+=3)this.indexArray.emplaceBack(o+l[t],o+l[t+2],o+l[t+1])
i.primitiveLength+=l.length/3,i.vertexLength+=e}for(let a=0;a<s.vertexCount;a++)this.centroidVertexArray.emplaceBack(Math.floor(s.x/s.vertexCount),Math.floor(s.y/s.vertexCount))
this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,n,r)}}function Ro(t,e){return t.x===e.x&&(t.x<0||t.x>Us)||t.y===e.y&&(t.y<0||t.y>Us)}function Fo(t){return t.every((t=>t.x<0))||t.every((t=>t.x>Us))||t.every((t=>t.y<0))||t.every((t=>t.y>Us))}let Oo
Er("FillExtrusionBucket",Bo,{omit:["layers","features"]})
var Uo={get paint(){return Oo=Oo||new dn({"fill-extrusion-opacity":new on(q["paint_fill-extrusion"]["fill-extrusion-opacity"]),"fill-extrusion-color":new ln(q["paint_fill-extrusion"]["fill-extrusion-color"]),"fill-extrusion-translate":new on(q["paint_fill-extrusion"]["fill-extrusion-translate"]),"fill-extrusion-translate-anchor":new on(q["paint_fill-extrusion"]["fill-extrusion-translate-anchor"]),"fill-extrusion-pattern":new cn(q["paint_fill-extrusion"]["fill-extrusion-pattern"]),"fill-extrusion-height":new ln(q["paint_fill-extrusion"]["fill-extrusion-height"]),"fill-extrusion-base":new ln(q["paint_fill-extrusion"]["fill-extrusion-base"]),"fill-extrusion-vertical-gradient":new on(q["paint_fill-extrusion"]["fill-extrusion-vertical-gradient"])})}}
function Vo(t,e){return t.x*e.x+t.y*e.y}function No(t,e){if(1===t.length){let i=0
const r=e[i++]
let n
for(;!n||r.equals(n);)if(n=e[i++],!n)return 1/0
for(;i<e.length;i++){const s=e[i],a=t[0],o=n.sub(r),l=s.sub(r),c=a.sub(r),h=Vo(o,o),u=Vo(o,l),d=Vo(l,l),p=Vo(c,o),f=Vo(c,l),m=h*d-u*u,g=(d*p-u*f)/m,_=(h*f-u*p)/m,y=r.z*(1-g-_)+n.z*g+s.z*_
if(isFinite(y))return y}return 1/0}{let t=1/0
for(const i of e)t=Math.min(t,i.z)
return t}}const $o=yn([{name:"a_pos_normal",components:2,type:"Int16"},{name:"a_data",components:4,type:"Uint8"}],4),{members:qo}=$o,jo=yn([{name:"a_uv_x",components:1,type:"Float32"},{name:"a_split_index",components:1,type:"Float32"}]),{members:Zo}=jo,Go=vo.VectorTileFeature.types,Xo=Math.cos(Math.PI/180*37.5),Wo=Math.pow(2,14)/.5
class Ho{constructor(t){this.zoom=t.zoom,this.overscaling=t.overscaling,this.layers=t.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=t.index,this.hasPattern=!1,this.patternFeatures=[],this.lineClipsArray=[],this.gradients={},this.layers.forEach((t=>{this.gradients[t.id]={}})),this.layoutVertexArray=new is,this.layoutVertexArray2=new rs,this.indexArray=new hs,this.programConfigurations=new Rs(t.layers,t.zoom),this.segments=new fs,this.maxLineLength=0,this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id))}populate(t,e,i){this.hasPattern=ho("line",this.layers,e)
const r=this.layers[0].layout.get("line-sort-key"),n=!r.isConstant(),s=[]
for(const{feature:a,id:o,index:l,sourceLayerIndex:c}of t){const t=this.layers[0]._featureFilter.needGeometry,e=qs(a,t)
if(!this.layers[0]._featureFilter.filter(new Yr(this.zoom),e,i))continue
const h=n?r.evaluate(e,{},i):void 0,u={id:o,properties:a.properties,type:a.type,sourceLayerIndex:c,index:l,geometry:t?e.geometry:$s(a),patterns:{},sortKey:h}
s.push(u)}n&&s.sort(((t,e)=>t.sortKey-e.sortKey))
for(const a of s){const{geometry:r,index:n,sourceLayerIndex:s}=a
if(this.hasPattern){const t=uo("line",this.layers,a,this.zoom,e)
this.patternFeatures.push(t)}else this.addFeature(a,r,n,i,{})
e.featureIndex.insert(t[n].feature,r,n,s,this.index)}}update(t,e,i){this.stateDependentLayers.length&&this.programConfigurations.updatePaintArrays(t,e,this.stateDependentLayers,i)}addFeatures(t,e,i){for(const r of this.patternFeatures)this.addFeature(r,r.geometry,r.index,e,i)}isEmpty(){return 0===this.layoutVertexArray.length}uploadPending(){return!this.uploaded||this.programConfigurations.needsUpload}upload(t){this.uploaded||(0!==this.layoutVertexArray2.length&&(this.layoutVertexBuffer2=t.createVertexBuffer(this.layoutVertexArray2,Zo)),this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,qo),this.indexBuffer=t.createIndexBuffer(this.indexArray)),this.programConfigurations.upload(t),this.uploaded=!0}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy())}lineFeatureClips(t){if(t.properties&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_start")&&Object.prototype.hasOwnProperty.call(t.properties,"mapbox_clip_end"))return{start:+t.properties.mapbox_clip_start,end:+t.properties.mapbox_clip_end}}addFeature(t,e,i,r,n){const s=this.layers[0].layout,a=s.get("line-join").evaluate(t,{}),o=s.get("line-cap"),l=s.get("line-miter-limit"),c=s.get("line-round-limit")
this.lineClips=this.lineFeatureClips(t)
for(const h of e)this.addLine(h,t,a,o,l,c)
this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length,t,i,n,r)}addLine(t,e,i,r,n,s){if(this.distance=0,this.scaledDistance=0,this.totalDistance=0,this.lineClips){this.lineClipsArray.push(this.lineClips)
for(let e=0;e<t.length-1;e++)this.totalDistance+=t[e].dist(t[e+1])
this.updateScaledDistance(),this.maxLineLength=Math.max(this.maxLineLength,this.totalDistance)}const a="Polygon"===Go[e.type]
let o=t.length
for(;o>=2&&t[o-1].equals(t[o-2]);)o--
let l=0
for(;l<o-1&&t[l].equals(t[l+1]);)l++
if(o<(a?3:2))return
"bevel"===i&&(n=1.05)
const c=this.overscaling<=16?122880/(512*this.overscaling):0,h=this.segments.prepareSegment(10*o,this.layoutVertexArray,this.indexArray)
let u,d,p,f,m
this.e1=this.e2=-1,a&&(u=t[o-2],m=t[l].sub(u)._unit()._perp())
for(let g=l;g<o;g++){if(p=g===o-1?a?t[l+1]:void 0:t[g+1],p&&t[g].equals(p))continue
m&&(f=m),u&&(d=u),u=t[g],m=p?p.sub(u)._unit()._perp():f,f=f||m
let e=f.add(m)
0===e.x&&0===e.y||e._unit()
const _=f.x*m.x+f.y*m.y,y=e.x*m.x+e.y*m.y,x=0!==y?1/y:1/0,v=2*Math.sqrt(2-2*y),b=y<Xo&&d&&p,w=f.x*m.y-f.y*m.x>0
if(b&&g>l){const t=u.dist(d)
if(t>2*c){const e=u.sub(u.sub(d)._mult(c/t)._round())
this.updateDistance(d,e),this.addCurrentVertex(e,f,0,0,h),d=e}}const T=d&&p
let S=T?i:a?"butt":r
if(T&&"round"===S&&(x<s?S="miter":x<=2&&(S="fakeround")),"miter"===S&&x>n&&(S="bevel"),"bevel"===S&&(x>2&&(S="flipbevel"),x<n&&(S="miter")),d&&this.updateDistance(d,u),"miter"===S)e._mult(x),this.addCurrentVertex(u,e,0,0,h)
else if("flipbevel"===S){if(x>100)e=m.mult(-1)
else{const t=x*f.add(m).mag()/f.sub(m).mag()
e._perp()._mult(t*(w?-1:1))}this.addCurrentVertex(u,e,0,0,h),this.addCurrentVertex(u,e.mult(-1),0,0,h)}else if("bevel"===S||"fakeround"===S){const t=-Math.sqrt(x*x-1),e=w?t:0,i=w?0:t
if(d&&this.addCurrentVertex(u,f,e,i,h),"fakeround"===S){const t=Math.round(180*v/Math.PI/20)
for(let e=1;e<t;e++){let i=e/t
if(.5!==i){const t=i-.5
i+=i*t*(i-1)*((1.0904+_*(_*(3.55645-1.43519*_)-3.2452))*t*t+(.848013+_*(.215638*_-1.06021)))}const r=m.sub(f)._mult(i)._add(f)._unit()._mult(w?-1:1)
this.addHalfVertex(u,r.x,r.y,!1,w,0,h)}}p&&this.addCurrentVertex(u,m,-e,-i,h)}else if("butt"===S)this.addCurrentVertex(u,e,0,0,h)
else if("square"===S){const t=d?1:-1
this.addCurrentVertex(u,e,t,t,h)}else"round"===S&&(d&&(this.addCurrentVertex(u,f,0,0,h),this.addCurrentVertex(u,f,1,1,h,!0)),p&&(this.addCurrentVertex(u,m,-1,-1,h,!0),this.addCurrentVertex(u,m,0,0,h)))
if(b&&g<o-1){const t=u.dist(p)
if(t>2*c){const e=u.add(p.sub(u)._mult(c/t)._round())
this.updateDistance(u,e),this.addCurrentVertex(e,m,0,0,h),u=e}}}}addCurrentVertex(t,e,i,r,n){let s=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
const a=e.y*r-e.x,o=-e.y-e.x*r
this.addHalfVertex(t,e.x+e.y*i,e.y-e.x*i,s,!1,i,n),this.addHalfVertex(t,a,o,s,!0,-r,n),this.distance>Wo/2&&0===this.totalDistance&&(this.distance=0,this.updateScaledDistance(),this.addCurrentVertex(t,e,i,r,n,s))}addHalfVertex(t,e,i,r,n,s,a){let{x:o,y:l}=t
const c=.5*(this.lineClips?this.scaledDistance*(Wo-1):this.scaledDistance)
this.layoutVertexArray.emplaceBack((o<<1)+(r?1:0),(l<<1)+(n?1:0),Math.round(63*e)+128,Math.round(63*i)+128,1+(0===s?0:s<0?-1:1)|(63&c)<<2,c>>6),this.lineClips&&this.layoutVertexArray2.emplaceBack((this.scaledDistance-this.lineClips.start)/(this.lineClips.end-this.lineClips.start),this.lineClipsArray.length)
const h=a.vertexLength++
this.e1>=0&&this.e2>=0&&(this.indexArray.emplaceBack(this.e1,this.e2,h),a.primitiveLength++),n?this.e2=h:this.e1=h}updateScaledDistance(){this.scaledDistance=this.lineClips?this.lineClips.start+(this.lineClips.end-this.lineClips.start)*this.distance/this.totalDistance:this.distance}updateDistance(t,e){this.distance+=t.dist(e),this.updateScaledDistance()}}let Ko,Yo
Er("LineBucket",Ho,{omit:["layers","patternFeatures"]})
var Jo={get paint(){return Yo=Yo||new dn({"line-opacity":new ln(q.paint_line["line-opacity"]),"line-color":new ln(q.paint_line["line-color"]),"line-translate":new on(q.paint_line["line-translate"]),"line-translate-anchor":new on(q.paint_line["line-translate-anchor"]),"line-width":new ln(q.paint_line["line-width"]),"line-gap-width":new ln(q.paint_line["line-gap-width"]),"line-offset":new ln(q.paint_line["line-offset"]),"line-blur":new ln(q.paint_line["line-blur"]),"line-dasharray":new hn(q.paint_line["line-dasharray"]),"line-pattern":new cn(q.paint_line["line-pattern"]),"line-gradient":new un(q.paint_line["line-gradient"])})},get layout(){return Ko=Ko||new dn({"line-cap":new on(q.layout_line["line-cap"]),"line-join":new ln(q.layout_line["line-join"]),"line-miter-limit":new on(q.layout_line["line-miter-limit"]),"line-round-limit":new on(q.layout_line["line-round-limit"]),"line-sort-key":new ln(q.layout_line["line-sort-key"])})}}
class Qo extends ln{possiblyEvaluate(t,e){return e=new Yr(Math.floor(e.zoom),{now:e.now,fadeDuration:e.fadeDuration,zoomHistory:e.zoomHistory,transition:e.transition}),super.possiblyEvaluate(t,e)}evaluate(t,e,i,r){return e=d({},e,{zoom:Math.floor(e.zoom)}),super.evaluate(t,e,i,r)}}let tl
function el(t,e){return e>0?e+2*t:t}const il=yn([{name:"a_pos_offset",components:4,type:"Int16"},{name:"a_data",components:4,type:"Uint16"},{name:"a_pixeloffset",components:4,type:"Int16"}],4),rl=yn([{name:"a_projected_pos",components:3,type:"Float32"}],4)
yn([{name:"a_fade_opacity",components:1,type:"Uint32"}],4)
const nl=yn([{name:"a_placed",components:2,type:"Uint8"},{name:"a_shift",components:2,type:"Float32"}])
yn([{type:"Int16",name:"anchorPointX"},{type:"Int16",name:"anchorPointY"},{type:"Int16",name:"x1"},{type:"Int16",name:"y1"},{type:"Int16",name:"x2"},{type:"Int16",name:"y2"},{type:"Uint32",name:"featureIndex"},{type:"Uint16",name:"sourceLayerIndex"},{type:"Uint16",name:"bucketIndex"}])
const sl=yn([{name:"a_pos",components:2,type:"Int16"},{name:"a_anchor_pos",components:2,type:"Int16"},{name:"a_extrude",components:2,type:"Int16"}],4),al=yn([{name:"a_pos",components:2,type:"Float32"},{name:"a_radius",components:1,type:"Float32"},{name:"a_flags",components:2,type:"Int16"}],4)
function ol(t,e,i){return t.sections.forEach((t=>{t.text=function(t,e,i){const r=e.layout.get("text-transform").evaluate(i,{})
return"uppercase"===r?t=t.toLocaleUpperCase():"lowercase"===r&&(t=t.toLocaleLowerCase()),Kr.applyArabicShaping&&(t=Kr.applyArabicShaping(t)),t}(t.text,e,i)})),t}yn([{name:"triangle",components:3,type:"Uint16"}]),yn([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Uint16",name:"glyphStartIndex"},{type:"Uint16",name:"numGlyphs"},{type:"Uint32",name:"vertexStartIndex"},{type:"Uint32",name:"lineStartIndex"},{type:"Uint32",name:"lineLength"},{type:"Uint16",name:"segment"},{type:"Uint16",name:"lowerSize"},{type:"Uint16",name:"upperSize"},{type:"Float32",name:"lineOffsetX"},{type:"Float32",name:"lineOffsetY"},{type:"Uint8",name:"writingMode"},{type:"Uint8",name:"placedOrientation"},{type:"Uint8",name:"hidden"},{type:"Uint32",name:"crossTileID"},{type:"Int16",name:"associatedIconIndex"}]),yn([{type:"Int16",name:"anchorX"},{type:"Int16",name:"anchorY"},{type:"Int16",name:"rightJustifiedTextSymbolIndex"},{type:"Int16",name:"centerJustifiedTextSymbolIndex"},{type:"Int16",name:"leftJustifiedTextSymbolIndex"},{type:"Int16",name:"verticalPlacedTextSymbolIndex"},{type:"Int16",name:"placedIconSymbolIndex"},{type:"Int16",name:"verticalPlacedIconSymbolIndex"},{type:"Uint16",name:"key"},{type:"Uint16",name:"textBoxStartIndex"},{type:"Uint16",name:"textBoxEndIndex"},{type:"Uint16",name:"verticalTextBoxStartIndex"},{type:"Uint16",name:"verticalTextBoxEndIndex"},{type:"Uint16",name:"iconBoxStartIndex"},{type:"Uint16",name:"iconBoxEndIndex"},{type:"Uint16",name:"verticalIconBoxStartIndex"},{type:"Uint16",name:"verticalIconBoxEndIndex"},{type:"Uint16",name:"featureIndex"},{type:"Uint16",name:"numHorizontalGlyphVertices"},{type:"Uint16",name:"numVerticalGlyphVertices"},{type:"Uint16",name:"numIconVertices"},{type:"Uint16",name:"numVerticalIconVertices"},{type:"Uint16",name:"useRuntimeCollisionCircles"},{type:"Uint32",name:"crossTileID"},{type:"Float32",name:"textBoxScale"},{type:"Float32",components:2,name:"textOffset"},{type:"Float32",name:"collisionCircleDiameter"}]),yn([{type:"Float32",name:"offsetX"}]),yn([{type:"Int16",name:"x"},{type:"Int16",name:"y"},{type:"Int16",name:"tileUnitDistanceFromAnchor"}])
const ll={"!":"︕","#":"＃",$:"＄","%":"％","&":"＆","(":"︵",")":"︶","*":"＊","+":"＋",",":"︐","-":"︲",".":"・","/":"／",":":"︓",";":"︔","<":"︿","=":"＝",">":"﹀","?":"︖","@":"＠","[":"﹇","\\":"＼","]":"﹈","^":"＾",_:"︳","`":"｀","{":"︷","|":"―","}":"︸","~":"～","¢":"￠","£":"￡","¥":"￥","¦":"￤","¬":"￢","¯":"￣","–":"︲","—":"︱","‘":"﹃","’":"﹄","“":"﹁","”":"﹂","…":"︙","‧":"・","₩":"￦","、":"︑","。":"︒","〈":"︿","〉":"﹀","《":"︽","》":"︾","「":"﹁","」":"﹂","『":"﹃","』":"﹄","【":"︻","】":"︼","〔":"︹","〕":"︺","〖":"︗","〗":"︘","！":"︕","（":"︵","）":"︶","，":"︐","－":"︲","．":"・","：":"︓","；":"︔","＜":"︿","＞":"﹀","？":"︖","［":"﹇","］":"﹈","＿":"︳","｛":"︷","｜":"―","｝":"︸","｟":"︵","｠":"︶","｡":"︒","｢":"﹁","｣":"﹂"}
var cl=24,hl=pl,ul=function(t,e,i,r,n){var s,a,o=8*n-r-1,l=(1<<o)-1,c=l>>1,h=-7,u=i?n-1:0,d=i?-1:1,p=t[e+u]
for(u+=d,s=p&(1<<-h)-1,p>>=-h,h+=o;h>0;s=256*s+t[e+u],u+=d,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=r;h>0;a=256*a+t[e+u],u+=d,h-=8);if(0===s)s=1-c
else{if(s===l)return a?NaN:1/0*(p?-1:1)
a+=Math.pow(2,r),s-=c}return(p?-1:1)*a*Math.pow(2,s-r)},dl=function(t,e,i,r,n,s){var a,o,l,c=8*s-n-1,h=(1<<c)-1,u=h>>1,d=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:s-1,f=r?1:-1,m=e<0||0===e&&1/e<0?1:0
for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),(e+=a+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(a++,l/=2),a+u>=h?(o=0,a=h):a+u>=1?(o=(e*l-1)*Math.pow(2,n),a+=u):(o=e*Math.pow(2,u-1)*Math.pow(2,n),a=0));n>=8;t[i+p]=255&o,p+=f,o/=256,n-=8);for(a=a<<n|o,c+=n;c>0;t[i+p]=255&a,p+=f,a/=256,c-=8);t[i+p-f]|=128*m}
function pl(t){this.buf=ArrayBuffer.isView&&ArrayBuffer.isView(t)?t:new Uint8Array(t||0),this.pos=0,this.type=0,this.length=this.buf.length}pl.Varint=0,pl.Fixed64=1,pl.Bytes=2,pl.Fixed32=5
var fl=4294967296,ml=1/fl,gl="undefined"==typeof TextDecoder?null:new TextDecoder("utf8")
function _l(t){return t.type===pl.Bytes?t.readVarint()+t.pos:t.pos+1}function yl(t,e,i){return i?4294967296*e+(t>>>0):4294967296*(e>>>0)+(t>>>0)}function xl(t,e,i){var r=e<=16383?1:e<=2097151?2:e<=268435455?3:Math.floor(Math.log(e)/(7*Math.LN2))
i.realloc(r)
for(var n=i.pos-1;n>=t;n--)i.buf[n+r]=i.buf[n]}function vl(t,e){for(var i=0;i<t.length;i++)e.writeVarint(t[i])}function bl(t,e){for(var i=0;i<t.length;i++)e.writeSVarint(t[i])}function wl(t,e){for(var i=0;i<t.length;i++)e.writeFloat(t[i])}function Tl(t,e){for(var i=0;i<t.length;i++)e.writeDouble(t[i])}function Sl(t,e){for(var i=0;i<t.length;i++)e.writeBoolean(t[i])}function El(t,e){for(var i=0;i<t.length;i++)e.writeFixed32(t[i])}function Il(t,e){for(var i=0;i<t.length;i++)e.writeSFixed32(t[i])}function Al(t,e){for(var i=0;i<t.length;i++)e.writeFixed64(t[i])}function Ml(t,e){for(var i=0;i<t.length;i++)e.writeSFixed64(t[i])}function Cl(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+16777216*t[e+3]}function Pl(t,e,i){t[i]=e,t[i+1]=e>>>8,t[i+2]=e>>>16,t[i+3]=e>>>24}function zl(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16)+(t[e+3]<<24)}pl.prototype={destroy:function(){this.buf=null},readFields:function(t,e,i){for(i=i||this.length;this.pos<i;){var r=this.readVarint(),n=r>>3,s=this.pos
this.type=7&r,t(n,e,this),this.pos===s&&this.skip(r)}return e},readMessage:function(t,e){return this.readFields(t,e,this.readVarint()+this.pos)},readFixed32:function(){var t=Cl(this.buf,this.pos)
return this.pos+=4,t},readSFixed32:function(){var t=zl(this.buf,this.pos)
return this.pos+=4,t},readFixed64:function(){var t=Cl(this.buf,this.pos)+Cl(this.buf,this.pos+4)*fl
return this.pos+=8,t},readSFixed64:function(){var t=Cl(this.buf,this.pos)+zl(this.buf,this.pos+4)*fl
return this.pos+=8,t},readFloat:function(){var t=ul(this.buf,this.pos,!0,23,4)
return this.pos+=4,t},readDouble:function(){var t=ul(this.buf,this.pos,!0,52,8)
return this.pos+=8,t},readVarint:function(t){var e,i,r=this.buf
return e=127&(i=r[this.pos++]),i<128?e:(e|=(127&(i=r[this.pos++]))<<7,i<128?e:(e|=(127&(i=r[this.pos++]))<<14,i<128?e:(e|=(127&(i=r[this.pos++]))<<21,i<128?e:function(t,e,i){var r,n,s=i.buf
if(r=(112&(n=s[i.pos++]))>>4,n<128)return yl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<3,n<128)return yl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<10,n<128)return yl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<17,n<128)return yl(t,r,e)
if(r|=(127&(n=s[i.pos++]))<<24,n<128)return yl(t,r,e)
if(r|=(1&(n=s[i.pos++]))<<31,n<128)return yl(t,r,e)
throw new Error("Expected varint not more than 10 bytes")}(e|=(15&(i=r[this.pos]))<<28,t,this))))},readVarint64:function(){return this.readVarint(!0)},readSVarint:function(){var t=this.readVarint()
return t%2==1?(t+1)/-2:t/2},readBoolean:function(){return Boolean(this.readVarint())},readString:function(){var t=this.readVarint()+this.pos,e=this.pos
return this.pos=t,t-e>=12&&gl?function(t,e,i){return gl.decode(t.subarray(e,i))}(this.buf,e,t):function(t,e,i){for(var r="",n=e;n<i;){var s,a,o,l=t[n],c=null,h=l>239?4:l>223?3:l>191?2:1
if(n+h>i)break
1===h?l<128&&(c=l):2===h?128==(192&(s=t[n+1]))&&(c=(31&l)<<6|63&s)<=127&&(c=null):3===h?(a=t[n+2],128==(192&(s=t[n+1]))&&128==(192&a)&&((c=(15&l)<<12|(63&s)<<6|63&a)<=2047||c>=55296&&c<=57343)&&(c=null)):4===h&&(a=t[n+2],o=t[n+3],128==(192&(s=t[n+1]))&&128==(192&a)&&128==(192&o)&&((c=(15&l)<<18|(63&s)<<12|(63&a)<<6|63&o)<=65535||c>=1114112)&&(c=null)),null===c?(c=65533,h=1):c>65535&&(c-=65536,r+=String.fromCharCode(c>>>10&1023|55296),c=56320|1023&c),r+=String.fromCharCode(c),n+=h}return r}(this.buf,e,t)},readBytes:function(){var t=this.readVarint()+this.pos,e=this.buf.subarray(this.pos,t)
return this.pos=t,e},readPackedVarint:function(t,e){if(this.type!==pl.Bytes)return t.push(this.readVarint(e))
var i=_l(this)
for(t=t||[];this.pos<i;)t.push(this.readVarint(e))
return t},readPackedSVarint:function(t){if(this.type!==pl.Bytes)return t.push(this.readSVarint())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readSVarint())
return t},readPackedBoolean:function(t){if(this.type!==pl.Bytes)return t.push(this.readBoolean())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readBoolean())
return t},readPackedFloat:function(t){if(this.type!==pl.Bytes)return t.push(this.readFloat())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readFloat())
return t},readPackedDouble:function(t){if(this.type!==pl.Bytes)return t.push(this.readDouble())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readDouble())
return t},readPackedFixed32:function(t){if(this.type!==pl.Bytes)return t.push(this.readFixed32())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed32())
return t},readPackedSFixed32:function(t){if(this.type!==pl.Bytes)return t.push(this.readSFixed32())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed32())
return t},readPackedFixed64:function(t){if(this.type!==pl.Bytes)return t.push(this.readFixed64())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readFixed64())
return t},readPackedSFixed64:function(t){if(this.type!==pl.Bytes)return t.push(this.readSFixed64())
var e=_l(this)
for(t=t||[];this.pos<e;)t.push(this.readSFixed64())
return t},skip:function(t){var e=7&t
if(e===pl.Varint)for(;this.buf[this.pos++]>127;);else if(e===pl.Bytes)this.pos=this.readVarint()+this.pos
else if(e===pl.Fixed32)this.pos+=4
else{if(e!==pl.Fixed64)throw new Error("Unimplemented type: "+e)
this.pos+=8}},writeTag:function(t,e){this.writeVarint(t<<3|e)},realloc:function(t){for(var e=this.length||16;e<this.pos+t;)e*=2
if(e!==this.length){var i=new Uint8Array(e)
i.set(this.buf),this.buf=i,this.length=e}},finish:function(){return this.length=this.pos,this.pos=0,this.buf.subarray(0,this.length)},writeFixed32:function(t){this.realloc(4),Pl(this.buf,t,this.pos),this.pos+=4},writeSFixed32:function(t){this.realloc(4),Pl(this.buf,t,this.pos),this.pos+=4},writeFixed64:function(t){this.realloc(8),Pl(this.buf,-1&t,this.pos),Pl(this.buf,Math.floor(t*ml),this.pos+4),this.pos+=8},writeSFixed64:function(t){this.realloc(8),Pl(this.buf,-1&t,this.pos),Pl(this.buf,Math.floor(t*ml),this.pos+4),this.pos+=8},writeVarint:function(t){(t=+t||0)>268435455||t<0?function(t,e){var i,r
if(t>=0?(i=t%4294967296|0,r=t/4294967296|0):(r=~(-t/4294967296),4294967295^(i=~(-t%4294967296))?i=i+1|0:(i=0,r=r+1|0)),t>=0x10000000000000000||t<-0x10000000000000000)throw new Error("Given varint doesn't fit into 10 bytes")
e.realloc(10),function(t,e,i){i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,t>>>=7,i.buf[i.pos++]=127&t|128,i.buf[i.pos]=127&(t>>>=7)}(i,0,e),function(t,e){var i=(7&t)<<4
e.buf[e.pos++]|=i|((t>>>=3)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t|((t>>>=7)?128:0),t&&(e.buf[e.pos++]=127&t)))))}(r,e)}(t,this):(this.realloc(4),this.buf[this.pos++]=127&t|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=127&(t>>>=7)|(t>127?128:0),t<=127||(this.buf[this.pos++]=t>>>7&127))))},writeSVarint:function(t){this.writeVarint(t<0?2*-t-1:2*t)},writeBoolean:function(t){this.writeVarint(Boolean(t))},writeString:function(t){t=String(t),this.realloc(4*t.length),this.pos++
var e=this.pos
this.pos=function(t,e,i){for(var r,n,s=0;s<e.length;s++){if((r=e.charCodeAt(s))>55295&&r<57344){if(!n){r>56319||s+1===e.length?(t[i++]=239,t[i++]=191,t[i++]=189):n=r
continue}if(r<56320){t[i++]=239,t[i++]=191,t[i++]=189,n=r
continue}r=n-55296<<10|r-56320|65536,n=null}else n&&(t[i++]=239,t[i++]=191,t[i++]=189,n=null)
r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:(r<65536?t[i++]=r>>12|224:(t[i++]=r>>18|240,t[i++]=r>>12&63|128),t[i++]=r>>6&63|128),t[i++]=63&r|128)}return i}(this.buf,t,this.pos)
var i=this.pos-e
i>=128&&xl(e,i,this),this.pos=e-1,this.writeVarint(i),this.pos+=i},writeFloat:function(t){this.realloc(4),dl(this.buf,t,this.pos,!0,23,4),this.pos+=4},writeDouble:function(t){this.realloc(8),dl(this.buf,t,this.pos,!0,52,8),this.pos+=8},writeBytes:function(t){var e=t.length
this.writeVarint(e),this.realloc(e)
for(var i=0;i<e;i++)this.buf[this.pos++]=t[i]},writeRawMessage:function(t,e){this.pos++
var i=this.pos
t(e,this)
var r=this.pos-i
r>=128&&xl(i,r,this),this.pos=i-1,this.writeVarint(r),this.pos+=r},writeMessage:function(t,e,i){this.writeTag(t,pl.Bytes),this.writeRawMessage(e,i)},writePackedVarint:function(t,e){e.length&&this.writeMessage(t,vl,e)},writePackedSVarint:function(t,e){e.length&&this.writeMessage(t,bl,e)},writePackedBoolean:function(t,e){e.length&&this.writeMessage(t,Sl,e)},writePackedFloat:function(t,e){e.length&&this.writeMessage(t,wl,e)},writePackedDouble:function(t,e){e.length&&this.writeMessage(t,Tl,e)},writePackedFixed32:function(t,e){e.length&&this.writeMessage(t,El,e)},writePackedSFixed32:function(t,e){e.length&&this.writeMessage(t,Il,e)},writePackedFixed64:function(t,e){e.length&&this.writeMessage(t,Al,e)},writePackedSFixed64:function(t,e){e.length&&this.writeMessage(t,Ml,e)},writeBytesField:function(t,e){this.writeTag(t,pl.Bytes),this.writeBytes(e)},writeFixed32Field:function(t,e){this.writeTag(t,pl.Fixed32),this.writeFixed32(e)},writeSFixed32Field:function(t,e){this.writeTag(t,pl.Fixed32),this.writeSFixed32(e)},writeFixed64Field:function(t,e){this.writeTag(t,pl.Fixed64),this.writeFixed64(e)},writeSFixed64Field:function(t,e){this.writeTag(t,pl.Fixed64),this.writeSFixed64(e)},writeVarintField:function(t,e){this.writeTag(t,pl.Varint),this.writeVarint(e)},writeSVarintField:function(t,e){this.writeTag(t,pl.Varint),this.writeSVarint(e)},writeStringField:function(t,e){this.writeTag(t,pl.Bytes),this.writeString(e)},writeFloatField:function(t,e){this.writeTag(t,pl.Fixed32),this.writeFloat(e)},writeDoubleField:function(t,e){this.writeTag(t,pl.Fixed64),this.writeDouble(e)},writeBooleanField:function(t,e){this.writeVarintField(t,Boolean(e))}}
var kl,Dl=e(hl)
function Ll(t,e,i){1===t&&i.readMessage(Bl,e)}function Bl(t,e,i){if(3===t){const{id:t,bitmap:r,width:n,height:s,left:a,top:o,advance:l}=i.readMessage(Rl,{})
e.push({id:t,bitmap:new Ta({width:n+6,height:s+6},r),metrics:{width:n,height:s,left:a,top:o,advance:l}})}}function Rl(t,e,i){1===t?e.id=i.readVarint():2===t?e.bitmap=i.readBytes():3===t?e.width=i.readVarint():4===t?e.height=i.readVarint():5===t?e.left=i.readSVarint():6===t?e.top=i.readSVarint():7===t&&(e.advance=i.readVarint())}function Fl(t){let e=0,i=0
for(const a of t)e+=a.w*a.h,i=Math.max(i,a.w)
t.sort(((t,e)=>e.h-t.h))
const r=[{x:0,y:0,w:Math.max(Math.ceil(Math.sqrt(e/.95)),i),h:1/0}]
let n=0,s=0
for(const a of t)for(let t=r.length-1;t>=0;t--){const e=r[t]
if(!(a.w>e.w||a.h>e.h)){if(a.x=e.x,a.y=e.y,s=Math.max(s,a.y+a.h),n=Math.max(n,a.x+a.w),a.w===e.w&&a.h===e.h){const e=r.pop()
t<r.length&&(r[t]=e)}else a.h===e.h?(e.x+=a.w,e.w-=a.w):a.w===e.w?(e.y+=a.h,e.h-=a.h):(r.push({x:e.x+a.w,y:e.y,w:e.w-a.w,h:a.h}),e.y+=a.h,e.h-=a.h)
break}}return{w:n,h:s,fill:e/(n*s)||0}}class Ol{constructor(t,e){let{pixelRatio:i,version:r,stretchX:n,stretchY:s,content:a}=e
this.paddedRect=t,this.pixelRatio=i,this.stretchX=n,this.stretchY=s,this.content=a,this.version=r}get tl(){return[this.paddedRect.x+1,this.paddedRect.y+1]}get br(){return[this.paddedRect.x+this.paddedRect.w-1,this.paddedRect.y+this.paddedRect.h-1]}get tlbr(){return this.tl.concat(this.br)}get displaySize(){return[(this.paddedRect.w-2)/this.pixelRatio,(this.paddedRect.h-2)/this.pixelRatio]}}class Ul{constructor(t,e){const i={},r={}
this.haveRenderCallbacks=[]
const n=[]
this.addImages(t,i,n),this.addImages(e,r,n)
const{w:s,h:a}=Fl(n),o=new Sa({width:s||1,height:a||1})
for(const l in t){const e=t[l],r=i[l].paddedRect
Sa.copy(e.data,o,{x:0,y:0},{x:r.x+1,y:r.y+1},e.data)}for(const l in e){const t=e[l],i=r[l].paddedRect,n=i.x+1,s=i.y+1,a=t.data.width,c=t.data.height
Sa.copy(t.data,o,{x:0,y:0},{x:n,y:s},t.data),Sa.copy(t.data,o,{x:0,y:c-1},{x:n,y:s-1},{width:a,height:1}),Sa.copy(t.data,o,{x:0,y:0},{x:n,y:s+c},{width:a,height:1}),Sa.copy(t.data,o,{x:a-1,y:0},{x:n-1,y:s},{width:1,height:c}),Sa.copy(t.data,o,{x:0,y:0},{x:n+a,y:s},{width:1,height:c})}this.image=o,this.iconPositions=i,this.patternPositions=r}addImages(t,e,i){for(const r in t){const n=t[r],s={x:0,y:0,w:n.data.width+2,h:n.data.height+2}
i.push(s),e[r]=new Ol(s,n),n.hasRenderCallback&&this.haveRenderCallbacks.push(r)}}patchUpdatedImages(t,e){t.dispatchRenderCallbacks(this.haveRenderCallbacks)
for(const i in t.updatedImages)this.patchUpdatedImage(this.iconPositions[i],t.getImage(i),e),this.patchUpdatedImage(this.patternPositions[i],t.getImage(i),e)}patchUpdatedImage(t,e,i){if(!t||!e)return
if(t.version===e.version)return
t.version=e.version
const[r,n]=t.tl
i.update(e.data,void 0,{x:r,y:n})}}Er("ImagePosition",Ol),Er("ImageAtlas",Ul),t.WritingMode=void 0,(kl=t.WritingMode||(t.WritingMode={}))[kl.none=0]="none",kl[kl.horizontal=1]="horizontal",kl[kl.vertical=2]="vertical",kl[kl.horizontalOnly=3]="horizontalOnly"
const Vl=-17
class Nl{constructor(){this.scale=1,this.fontStack="",this.imageName=null}static forText(t,e){const i=new Nl
return i.scale=t||1,i.fontStack=e,i}static forImage(t){const e=new Nl
return e.imageName=t,e}}class $l{constructor(){this.text="",this.sectionIndex=[],this.sections=[],this.imageSectionID=null}static fromFeature(t,e){const i=new $l
for(let r=0;r<t.sections.length;r++){const n=t.sections[r]
n.image?i.addImageSection(n):i.addTextSection(n,e)}return i}length(){return this.text.length}getSection(t){return this.sections[this.sectionIndex[t]]}getSectionIndex(t){return this.sectionIndex[t]}getCharCode(t){return this.text.charCodeAt(t)}verticalizePunctuation(){this.text=function(t){let e=""
for(let i=0;i<t.length;i++){const r=t.charCodeAt(i+1)||null,n=t.charCodeAt(i-1)||null
e+=r&&Br(r)&&!ll[t[i+1]]||n&&Br(n)&&!ll[t[i-1]]||!ll[t[i]]?t[i]:ll[t[i]]}return e}(this.text)}trim(){let t=0
for(let i=0;i<this.text.length&&jl[this.text.charCodeAt(i)];i++)t++
let e=this.text.length
for(let i=this.text.length-1;i>=0&&i>=t&&jl[this.text.charCodeAt(i)];i--)e--
this.text=this.text.substring(t,e),this.sectionIndex=this.sectionIndex.slice(t,e)}substring(t,e){const i=new $l
return i.text=this.text.substring(t,e),i.sectionIndex=this.sectionIndex.slice(t,e),i.sections=this.sections,i}toString(){return this.text}getMaxScale(){return this.sectionIndex.reduce(((t,e)=>Math.max(t,this.sections[e].scale)),0)}addTextSection(t,e){this.text+=t.text,this.sections.push(Nl.forText(t.scale,t.fontStack||e))
const i=this.sections.length-1
for(let r=0;r<t.text.length;++r)this.sectionIndex.push(i)}addImageSection(t){const e=t.image?t.image.name:""
if(0===e.length)return void x("Can't add FormattedSection with an empty image.")
const i=this.getNextImageSectionCharCode()
i?(this.text+=String.fromCharCode(i),this.sections.push(Nl.forImage(e)),this.sectionIndex.push(this.sections.length-1)):x("Reached maximum number of images 6401")}getNextImageSectionCharCode(){return this.imageSectionID?this.imageSectionID>=63743?null:++this.imageSectionID:(this.imageSectionID=57344,this.imageSectionID)}}function ql(e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g){const _=$l.fromFeature(e,s)
let y
d===t.WritingMode.vertical&&_.verticalizePunctuation()
const{processBidirectionalText:x,processStyledBidirectionalText:v}=Kr
if(x&&1===_.sections.length){y=[]
const t=x(_.toString(),Yl(_,h,a,i,n,f,m))
for(const e of t){const t=new $l
t.text=e,t.sections=_.sections
for(let i=0;i<e.length;i++)t.sectionIndex.push(0)
y.push(t)}}else if(v){y=[]
const t=v(_.text,_.sectionIndex,Yl(_,h,a,i,n,f,m))
for(const e of t){const t=new $l
t.text=e[0],t.sectionIndex=e[1],t.sections=_.sections,y.push(t)}}else y=function(t,e){const i=[],r=t.text
let n=0
for(const s of e)i.push(t.substring(n,s)),n=s
return n<r.length&&i.push(t.substring(n,r.length)),i}(_,Yl(_,h,a,i,n,f,m))
const b=[],w={positionedLines:b,text:_.toString(),top:u[1],bottom:u[1],left:u[0],right:u[0],writingMode:d,iconsInText:!1,verticalizable:!1}
return function(e,i,r,n,s,a,o,l,c,h,u,d){let p=0,f=Vl,m=0,g=0
const _="right"===l?1:"left"===l?0:.5
let y=0
for(const T of s){T.trim()
const s=T.getMaxScale(),o=(s-1)*cl,l={positionedGlyphs:[],lineOffset:0}
e.positionedLines[y]=l
const v=l.positionedGlyphs
let b=0
if(!T.length()){f+=a,++y
continue}for(let a=0;a<T.length();a++){const l=T.getSection(a),m=T.getSectionIndex(a),g=T.getCharCode(a)
let _=0,y=null,w=null,S=null,E=cl
const I=!(c===t.WritingMode.horizontal||!u&&!Lr(g)||u&&(jl[g]||(x=g,Pr.Arabic(x)||Pr["Arabic Supplement"](x)||Pr["Arabic Extended-A"](x)||Pr["Arabic Presentation Forms-A"](x)||Pr["Arabic Presentation Forms-B"](x))))
if(l.imageName){const t=n[l.imageName]
if(!t)continue
S=l.imageName,e.iconsInText=e.iconsInText||!0,w=t.paddedRect
const i=t.displaySize
l.scale=l.scale*cl/d,y={width:i[0],height:i[1],left:1,top:-3,advance:I?i[1]:i[0]},_=o+(cl-i[1]*l.scale),E=y.advance
const r=I?i[0]*l.scale-cl*s:i[1]*l.scale-cl*s
r>0&&r>b&&(b=r)}else{const t=r[l.fontStack],e=t&&t[g]
if(e&&e.rect)w=e.rect,y=e.metrics
else{const t=i[l.fontStack],e=t&&t[g]
if(!e)continue
y=e.metrics}_=(s-l.scale)*cl}I?(e.verticalizable=!0,v.push({glyph:g,imageName:S,x:p,y:f+_,vertical:I,scale:l.scale,fontStack:l.fontStack,sectionIndex:m,metrics:y,rect:w}),p+=E*l.scale+h):(v.push({glyph:g,imageName:S,x:p,y:f+_,vertical:I,scale:l.scale,fontStack:l.fontStack,sectionIndex:m,metrics:y,rect:w}),p+=y.advance*l.scale+h)}0!==v.length&&(m=Math.max(p-h,m),Ql(v,0,v.length-1,_,b)),p=0
const w=a*s+b
l.lineOffset=Math.max(b,o),f+=w,g=Math.max(w,g),++y}var x
const v=f-Vl,{horizontalAlign:b,verticalAlign:w}=Jl(o);(function(t,e,i,r,n,s,a,o,l){const c=(e-i)*n
let h=0
h=s!==a?-o*r-Vl:(-r*l+.5)*a
for(const u of t)for(const t of u.positionedGlyphs)t.x+=c,t.y+=h})(e.positionedLines,_,b,w,m,g,a,v,s.length),e.top+=-w*v,e.bottom=e.top+v,e.left+=-b*m,e.right=e.left+m}(w,i,r,n,y,o,l,c,d,h,p,g),!function(t){for(const e of t)if(0!==e.positionedGlyphs.length)return!1
return!0}(b)&&w}const jl={9:!0,10:!0,11:!0,12:!0,13:!0,32:!0},Zl={10:!0,32:!0,38:!0,40:!0,41:!0,43:!0,45:!0,47:!0,173:!0,183:!0,8203:!0,8208:!0,8211:!0,8231:!0}
function Gl(t,e,i,r,n,s){if(e.imageName){const t=r[e.imageName]
return t?t.displaySize[0]*e.scale*cl/s+n:0}{const r=i[e.fontStack],s=r&&r[t]
return s?s.metrics.advance*e.scale+n:0}}function Xl(t,e,i,r){const n=Math.pow(t-e,2)
return r?t<e?n/2:2*n:n+Math.abs(i)*i}function Wl(t,e,i){let r=0
return 10===t&&(r-=1e4),i&&(r+=150),40!==t&&65288!==t||(r+=50),41!==e&&65289!==e||(r+=50),r}function Hl(t,e,i,r,n,s){let a=null,o=Xl(e,i,n,s)
for(const l of r){const t=Xl(e-l.x,i,n,s)+l.badness
t<=o&&(a=l,o=t)}return{index:t,x:e,priorBreak:a,badness:o}}function Kl(t){return t?Kl(t.priorBreak).concat(t.index):[]}function Yl(t,e,i,r,n,s,a){if("point"!==s)return[]
if(!t)return[]
const o=[],l=function(t,e,i,r,n,s){let a=0
for(let o=0;o<t.length();o++){const i=t.getSection(o)
a+=Gl(t.getCharCode(o),i,r,n,e,s)}return a/Math.max(1,Math.ceil(a/i))}(t,e,i,r,n,a),c=t.text.indexOf("​")>=0
let h=0
for(let d=0;d<t.length();d++){const i=t.getSection(d),s=t.getCharCode(d)
if(jl[s]||(h+=Gl(s,i,r,n,e,a)),d<t.length()-1){const e=!((u=s)<11904||!(Pr["Bopomofo Extended"](u)||Pr.Bopomofo(u)||Pr["CJK Compatibility Forms"](u)||Pr["CJK Compatibility Ideographs"](u)||Pr["CJK Compatibility"](u)||Pr["CJK Radicals Supplement"](u)||Pr["CJK Strokes"](u)||Pr["CJK Symbols and Punctuation"](u)||Pr["CJK Unified Ideographs Extension A"](u)||Pr["CJK Unified Ideographs"](u)||Pr["Enclosed CJK Letters and Months"](u)||Pr["Halfwidth and Fullwidth Forms"](u)||Pr.Hiragana(u)||Pr["Ideographic Description Characters"](u)||Pr["Kangxi Radicals"](u)||Pr["Katakana Phonetic Extensions"](u)||Pr.Katakana(u)||Pr["Vertical Forms"](u)||Pr["Yi Radicals"](u)||Pr["Yi Syllables"](u)));(Zl[s]||e||i.imageName)&&o.push(Hl(d+1,h,l,o,Wl(s,t.getCharCode(d+1),e&&c),!1))}}var u
return Kl(Hl(t.length(),h,l,o,0,!0))}function Jl(t){let e=.5,i=.5
switch(t){case"right":case"top-right":case"bottom-right":e=1
break
case"left":case"top-left":case"bottom-left":e=0}switch(t){case"bottom":case"bottom-right":case"bottom-left":i=1
break
case"top":case"top-right":case"top-left":i=0}return{horizontalAlign:e,verticalAlign:i}}function Ql(t,e,i,r,n){if(!r&&!n)return
const s=t[i],a=(t[i].x+s.metrics.advance*s.scale)*r
for(let o=e;o<=i;o++)t[o].x-=a,t[o].y+=n}function tc(t,e,i){const{horizontalAlign:r,verticalAlign:n}=Jl(i),s=e[0]-t.displaySize[0]*r,a=e[1]-t.displaySize[1]*n
return{image:t,top:a,bottom:a+t.displaySize[1],left:s,right:s+t.displaySize[0]}}function ec(t,e,i,r,n,s){const a=t.image
let o
if(a.content){const t=a.content,e=a.pixelRatio||1
o=[t[0]/e,t[1]/e,a.displaySize[0]-t[2]/e,a.displaySize[1]-t[3]/e]}const l=e.left*s,c=e.right*s
let h,u,d,p
"width"===i||"both"===i?(p=n[0]+l-r[3],u=n[0]+c+r[1]):(p=n[0]+(l+c-a.displaySize[0])/2,u=p+a.displaySize[0])
const f=e.top*s,m=e.bottom*s
return"height"===i||"both"===i?(h=n[1]+f-r[0],d=n[1]+m+r[2]):(h=n[1]+(f+m-a.displaySize[1])/2,d=h+a.displaySize[1]),{image:a,top:h,right:u,bottom:d,left:p,collisionPadding:o}}const ic=128,rc=32640
function nc(t,e){const{expression:i}=e
if("constant"===i.kind)return{kind:"constant",layoutSize:i.evaluate(new Yr(t+1))}
if("source"===i.kind)return{kind:"source"}
{const{zoomStops:e,interpolationType:r}=i
let n=0
for(;n<e.length&&e[n]<=t;)n++
n=Math.max(0,n-1)
let s=n
for(;s<e.length&&e[s]<t+1;)s++
s=Math.min(e.length-1,s)
const a=e[n],o=e[s]
return"composite"===i.kind?{kind:"composite",minZoom:a,maxZoom:o,interpolationType:r}:{kind:"camera",minZoom:a,maxZoom:o,minSize:i.evaluate(new Yr(a)),maxSize:i.evaluate(new Yr(o)),interpolationType:r}}}function sc(t,e,i){let r="never"
const n=t.get(e)
return n?r=n:t.get(i)&&(r="always"),r}const ac=vo.VectorTileFeature.types,oc=[{name:"a_fade_opacity",components:1,type:"Uint8",offset:0}]
function lc(t,e,i,r,n,s,a,o,l,c,h,u,d){const p=o?Math.min(rc,Math.round(o[0])):0,f=o?Math.min(rc,Math.round(o[1])):0
t.emplaceBack(e,i,Math.round(32*r),Math.round(32*n),s,a,(p<<1)+(l?1:0),f,16*c,16*h,256*u,256*d)}function cc(t,e,i){t.emplaceBack(e.x,e.y,i),t.emplaceBack(e.x,e.y,i),t.emplaceBack(e.x,e.y,i),t.emplaceBack(e.x,e.y,i)}function hc(t){for(const e of t.sections)if(Or(e.text))return!0
return!1}class uc{constructor(t){this.layoutVertexArray=new ss,this.indexArray=new hs,this.programConfigurations=t,this.segments=new fs,this.dynamicLayoutVertexArray=new as,this.opacityVertexArray=new os,this.hasVisibleVertices=!1,this.placedSymbolArray=new Zn}isEmpty(){return 0===this.layoutVertexArray.length&&0===this.indexArray.length&&0===this.dynamicLayoutVertexArray.length&&0===this.opacityVertexArray.length}upload(t,e,i,r){this.isEmpty()||(i&&(this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,il.members),this.indexBuffer=t.createIndexBuffer(this.indexArray,e),this.dynamicLayoutVertexBuffer=t.createVertexBuffer(this.dynamicLayoutVertexArray,rl.members,!0),this.opacityVertexBuffer=t.createVertexBuffer(this.opacityVertexArray,oc,!0),this.opacityVertexBuffer.itemSize=1),(i||r)&&this.programConfigurations.upload(t))}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.programConfigurations.destroy(),this.segments.destroy(),this.dynamicLayoutVertexBuffer.destroy(),this.opacityVertexBuffer.destroy())}}Er("SymbolBuffers",uc)
class dc{constructor(t,e,i){this.layoutVertexArray=new t,this.layoutAttributes=e,this.indexArray=new i,this.segments=new fs,this.collisionVertexArray=new cs}upload(t){this.layoutVertexBuffer=t.createVertexBuffer(this.layoutVertexArray,this.layoutAttributes),this.indexBuffer=t.createIndexBuffer(this.indexArray),this.collisionVertexBuffer=t.createVertexBuffer(this.collisionVertexArray,nl.members,!0)}destroy(){this.layoutVertexBuffer&&(this.layoutVertexBuffer.destroy(),this.indexBuffer.destroy(),this.segments.destroy(),this.collisionVertexBuffer.destroy())}}Er("CollisionBuffers",dc)
class pc{constructor(e){this.collisionBoxArray=e.collisionBoxArray,this.zoom=e.zoom,this.overscaling=e.overscaling,this.layers=e.layers,this.layerIds=this.layers.map((t=>t.id)),this.index=e.index,this.pixelRatio=e.pixelRatio,this.sourceLayerIndex=e.sourceLayerIndex,this.hasPattern=!1,this.hasRTLText=!1,this.sortKeyRanges=[],this.collisionCircleArray=[],this.placementInvProjMatrix=ua([]),this.placementViewportMatrix=ua([])
const i=this.layers[0]._unevaluatedLayout._values
this.textSizeData=nc(this.zoom,i["text-size"]),this.iconSizeData=nc(this.zoom,i["icon-size"])
const r=this.layers[0].layout,n=r.get("symbol-sort-key"),s=r.get("symbol-z-order")
this.canOverlap="never"!==sc(r,"text-overlap","text-allow-overlap")||"never"!==sc(r,"icon-overlap","icon-allow-overlap")||r.get("text-ignore-placement")||r.get("icon-ignore-placement"),this.sortFeaturesByKey="viewport-y"!==s&&!n.isConstant(),this.sortFeaturesByY=("viewport-y"===s||"auto"===s&&!this.sortFeaturesByKey)&&this.canOverlap,"point"===r.get("symbol-placement")&&(this.writingModes=r.get("text-writing-mode").map((e=>t.WritingMode[e]))),this.stateDependentLayerIds=this.layers.filter((t=>t.isStateDependent())).map((t=>t.id)),this.sourceID=e.sourceID}createArrays(){this.text=new uc(new Rs(this.layers,this.zoom,(t=>/^text/.test(t)))),this.icon=new uc(new Rs(this.layers,this.zoom,(t=>/^icon/.test(t)))),this.glyphOffsetArray=new Wn,this.lineVertexArray=new Hn,this.symbolInstances=new Xn}calculateGlyphDependencies(t,e,i,r,n){for(let s=0;s<t.length;s++)if(e[t.charCodeAt(s)]=!0,(i||r)&&n){const i=ll[t.charAt(s)]
i&&(e[i.charCodeAt(0)]=!0)}}populate(e,i,r){const n=this.layers[0],s=n.layout,a=s.get("text-font"),o=s.get("text-field"),l=s.get("icon-image"),c=("constant"!==o.value.kind||o.value.value instanceof Zt&&!o.value.value.isEmpty()||o.value.value.toString().length>0)&&("constant"!==a.value.kind||a.value.value.length>0),h="constant"!==l.value.kind||!!l.value.value||Object.keys(l.parameters).length>0,u=s.get("symbol-sort-key")
if(this.features=[],!c&&!h)return
const d=i.iconDependencies,p=i.glyphDependencies,f=i.availableImages,m=new Yr(this.zoom)
for(const{feature:g,id:_,index:y,sourceLayerIndex:x}of e){const e=n._featureFilter.needGeometry,i=qs(g,e)
if(!n._featureFilter.filter(m,i,r))continue
let o,l
if(e||(i.geometry=$s(g)),c){const t=n.getValueAndResolveTokens("text-field",i,r,f),e=Zt.factory(t)
hc(e)&&(this.hasRTLText=!0),(!this.hasRTLText||"unavailable"===Wr()||this.hasRTLText&&Kr.isParsed())&&(o=ol(e,n,i))}if(h){const t=n.getValueAndResolveTokens("icon-image",i,r,f)
l=t instanceof Xt?t:Xt.fromString(t)}if(!o&&!l)continue
const v=this.sortFeaturesByKey?u.evaluate(i,{},r):void 0
if(this.features.push({id:_,text:o,icon:l,index:y,sourceLayerIndex:x,geometry:i.geometry,properties:g.properties,type:ac[g.type],sortKey:v}),l&&(d[l.name]=!0),o){const e=a.evaluate(i,{},r).join(","),n="viewport"!==s.get("text-rotation-alignment")&&"point"!==s.get("symbol-placement")
this.allowVerticalPlacement=this.writingModes&&this.writingModes.indexOf(t.WritingMode.vertical)>=0
for(const t of o.sections)if(t.image)d[t.image.name]=!0
else{const i=zr(o.toString()),r=t.fontStack||e,s=p[r]=p[r]||{}
this.calculateGlyphDependencies(t.text,s,n,this.allowVerticalPlacement,i)}}}"line"===s.get("symbol-placement")&&(this.features=function(t){const e={},i={},r=[]
let n=0
function s(e){r.push(t[e]),n++}function a(t,e,n){const s=i[t]
return delete i[t],i[e]=s,r[s].geometry[0].pop(),r[s].geometry[0]=r[s].geometry[0].concat(n[0]),s}function o(t,i,n){const s=e[i]
return delete e[i],e[t]=s,r[s].geometry[0].shift(),r[s].geometry[0]=n[0].concat(r[s].geometry[0]),s}function l(t,e,i){const r=i?e[0][e[0].length-1]:e[0][0]
return`${t}:${r.x}:${r.y}`}for(let c=0;c<t.length;c++){const h=t[c],u=h.geometry,d=h.text?h.text.toString():null
if(!d){s(c)
continue}const p=l(d,u),f=l(d,u,!0)
if(p in i&&f in e&&i[p]!==e[f]){const t=o(p,f,u),n=a(p,f,r[t].geometry)
delete e[p],delete i[f],i[l(d,r[n].geometry,!0)]=n,r[t].geometry=null}else p in i?a(p,f,u):f in e?o(p,f,u):(s(c),e[p]=n-1,i[f]=n-1)}return r.filter((t=>t.geometry))}(this.features)),this.sortFeaturesByKey&&this.features.sort(((t,e)=>t.sortKey-e.sortKey))}update(t,e,i){this.stateDependentLayers.length&&(this.text.programConfigurations.updatePaintArrays(t,e,this.layers,i),this.icon.programConfigurations.updatePaintArrays(t,e,this.layers,i))}isEmpty(){return 0===this.symbolInstances.length&&!this.hasRTLText}uploadPending(){return!this.uploaded||this.text.programConfigurations.needsUpload||this.icon.programConfigurations.needsUpload}upload(t){!this.uploaded&&this.hasDebugData()&&(this.textCollisionBox.upload(t),this.iconCollisionBox.upload(t)),this.text.upload(t,this.sortFeaturesByY,!this.uploaded,this.text.programConfigurations.needsUpload),this.icon.upload(t,this.sortFeaturesByY,!this.uploaded,this.icon.programConfigurations.needsUpload),this.uploaded=!0}destroyDebugData(){this.textCollisionBox.destroy(),this.iconCollisionBox.destroy()}destroy(){this.text.destroy(),this.icon.destroy(),this.hasDebugData()&&this.destroyDebugData()}addToLineVertexArray(t,e){const i=this.lineVertexArray.length
if(void 0!==t.segment){let i=t.dist(e[t.segment+1]),r=t.dist(e[t.segment])
const n={}
for(let s=t.segment+1;s<e.length;s++)n[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:i},s<e.length-1&&(i+=e[s+1].dist(e[s]))
for(let s=t.segment||0;s>=0;s--)n[s]={x:e[s].x,y:e[s].y,tileUnitDistanceFromAnchor:r},s>0&&(r+=e[s-1].dist(e[s]))
for(let t=0;t<e.length;t++){const e=n[t]
this.lineVertexArray.emplaceBack(e.x,e.y,e.tileUnitDistanceFromAnchor)}}return{lineStartIndex:i,lineLength:this.lineVertexArray.length-i}}addSymbols(e,i,r,n,s,a,o,l,c,h,u,d){const p=e.indexArray,f=e.layoutVertexArray,m=e.segments.prepareSegment(4*i.length,f,p,this.canOverlap?a.sortKey:void 0),g=this.glyphOffsetArray.length,_=m.vertexLength,y=this.allowVerticalPlacement&&o===t.WritingMode.vertical?Math.PI/2:0,x=a.text&&a.text.sections
for(let t=0;t<i.length;t++){const{tl:n,tr:s,bl:o,br:c,tex:h,pixelOffsetTL:u,pixelOffsetBR:g,minFontScaleX:_,minFontScaleY:v,glyphOffset:b,isSDF:w,sectionIndex:T}=i[t],S=m.vertexLength,E=b[1]
lc(f,l.x,l.y,n.x,E+n.y,h.x,h.y,r,w,u.x,u.y,_,v),lc(f,l.x,l.y,s.x,E+s.y,h.x+h.w,h.y,r,w,g.x,u.y,_,v),lc(f,l.x,l.y,o.x,E+o.y,h.x,h.y+h.h,r,w,u.x,g.y,_,v),lc(f,l.x,l.y,c.x,E+c.y,h.x+h.w,h.y+h.h,r,w,g.x,g.y,_,v),cc(e.dynamicLayoutVertexArray,l,y),p.emplaceBack(S,S+1,S+2),p.emplaceBack(S+1,S+2,S+3),m.vertexLength+=4,m.primitiveLength+=2,this.glyphOffsetArray.emplaceBack(b[0]),t!==i.length-1&&T===i[t+1].sectionIndex||e.programConfigurations.populatePaintArrays(f.length,a,a.index,{},d,x&&x[T])}e.placedSymbolArray.emplaceBack(l.x,l.y,g,this.glyphOffsetArray.length-g,_,c,h,l.segment,r?r[0]:0,r?r[1]:0,n[0],n[1],o,0,!1,0,u)}_addCollisionDebugVertex(t,e,i,r,n,s){return e.emplaceBack(0,0),t.emplaceBack(i.x,i.y,r,n,Math.round(s.x),Math.round(s.y))}addCollisionDebugVertices(t,e,i,r,s,a,o){const l=s.segments.prepareSegment(4,s.layoutVertexArray,s.indexArray),c=l.vertexLength,h=s.layoutVertexArray,u=s.collisionVertexArray,d=o.anchorX,p=o.anchorY
this._addCollisionDebugVertex(h,u,a,d,p,new n(t,e)),this._addCollisionDebugVertex(h,u,a,d,p,new n(i,e)),this._addCollisionDebugVertex(h,u,a,d,p,new n(i,r)),this._addCollisionDebugVertex(h,u,a,d,p,new n(t,r)),l.vertexLength+=4
const f=s.indexArray
f.emplaceBack(c,c+1),f.emplaceBack(c+1,c+2),f.emplaceBack(c+2,c+3),f.emplaceBack(c+3,c),l.primitiveLength+=4}addDebugCollisionBoxes(t,e,i,r){for(let n=t;n<e;n++){const t=this.collisionBoxArray.get(n)
this.addCollisionDebugVertices(t.x1,t.y1,t.x2,t.y2,r?this.textCollisionBox:this.iconCollisionBox,t.anchorPoint,i)}}generateCollisionDebugBuffers(){this.hasDebugData()&&this.destroyDebugData(),this.textCollisionBox=new dc(ls,sl.members,us),this.iconCollisionBox=new dc(ls,sl.members,us)
for(let t=0;t<this.symbolInstances.length;t++){const e=this.symbolInstances.get(t)
this.addDebugCollisionBoxes(e.textBoxStartIndex,e.textBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.verticalTextBoxStartIndex,e.verticalTextBoxEndIndex,e,!0),this.addDebugCollisionBoxes(e.iconBoxStartIndex,e.iconBoxEndIndex,e,!1),this.addDebugCollisionBoxes(e.verticalIconBoxStartIndex,e.verticalIconBoxEndIndex,e,!1)}}_deserializeCollisionBoxesForSymbol(t,e,i,r,n,s,a,o,l){const c={}
for(let h=e;h<i;h++){const e=t.get(h)
c.textBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.textFeatureIndex=e.featureIndex
break}for(let h=r;h<n;h++){const e=t.get(h)
c.verticalTextBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.verticalTextFeatureIndex=e.featureIndex
break}for(let h=s;h<a;h++){const e=t.get(h)
c.iconBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.iconFeatureIndex=e.featureIndex
break}for(let h=o;h<l;h++){const e=t.get(h)
c.verticalIconBox={x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,anchorPointX:e.anchorPointX,anchorPointY:e.anchorPointY},c.verticalIconFeatureIndex=e.featureIndex
break}return c}deserializeCollisionBoxes(t){this.collisionArrays=[]
for(let e=0;e<this.symbolInstances.length;e++){const i=this.symbolInstances.get(e)
this.collisionArrays.push(this._deserializeCollisionBoxesForSymbol(t,i.textBoxStartIndex,i.textBoxEndIndex,i.verticalTextBoxStartIndex,i.verticalTextBoxEndIndex,i.iconBoxStartIndex,i.iconBoxEndIndex,i.verticalIconBoxStartIndex,i.verticalIconBoxEndIndex))}}hasTextData(){return this.text.segments.get().length>0}hasIconData(){return this.icon.segments.get().length>0}hasDebugData(){return this.textCollisionBox&&this.iconCollisionBox}hasTextCollisionBoxData(){return this.hasDebugData()&&this.textCollisionBox.segments.get().length>0}hasIconCollisionBoxData(){return this.hasDebugData()&&this.iconCollisionBox.segments.get().length>0}addIndicesForPlacedSymbol(t,e){const i=t.placedSymbolArray.get(e),r=i.vertexStartIndex+4*i.numGlyphs
for(let n=i.vertexStartIndex;n<r;n+=4)t.indexArray.emplaceBack(n,n+1,n+2),t.indexArray.emplaceBack(n+1,n+2,n+3)}getSortedSymbolIndexes(t){if(this.sortedAngle===t&&void 0!==this.symbolInstanceIndexes)return this.symbolInstanceIndexes
const e=Math.sin(t),i=Math.cos(t),r=[],n=[],s=[]
for(let a=0;a<this.symbolInstances.length;++a){s.push(a)
const t=this.symbolInstances.get(a)
r.push(0|Math.round(e*t.anchorX+i*t.anchorY)),n.push(t.featureIndex)}return s.sort(((t,e)=>r[t]-r[e]||n[e]-n[t])),s}addToSortKeyRanges(t,e){const i=this.sortKeyRanges[this.sortKeyRanges.length-1]
i&&i.sortKey===e?i.symbolInstanceEnd=t+1:this.sortKeyRanges.push({sortKey:e,symbolInstanceStart:t,symbolInstanceEnd:t+1})}sortFeatures(t){if(this.sortFeaturesByY&&this.sortedAngle!==t&&!(this.text.segments.get().length>1||this.icon.segments.get().length>1)){this.symbolInstanceIndexes=this.getSortedSymbolIndexes(t),this.sortedAngle=t,this.text.indexArray.clear(),this.icon.indexArray.clear(),this.featureSortOrder=[]
for(const t of this.symbolInstanceIndexes){const e=this.symbolInstances.get(t)
this.featureSortOrder.push(e.featureIndex),[e.rightJustifiedTextSymbolIndex,e.centerJustifiedTextSymbolIndex,e.leftJustifiedTextSymbolIndex].forEach(((t,e,i)=>{t>=0&&i.indexOf(t)===e&&this.addIndicesForPlacedSymbol(this.text,t)})),e.verticalPlacedTextSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.text,e.verticalPlacedTextSymbolIndex),e.placedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.placedIconSymbolIndex),e.verticalPlacedIconSymbolIndex>=0&&this.addIndicesForPlacedSymbol(this.icon,e.verticalPlacedIconSymbolIndex)}this.text.indexBuffer&&this.text.indexBuffer.updateData(this.text.indexArray),this.icon.indexBuffer&&this.icon.indexBuffer.updateData(this.icon.indexArray)}}}let fc,mc
Er("SymbolBucket",pc,{omit:["layers","collisionBoxArray","features","compareText"]}),pc.MAX_GLYPHS=65535,pc.addDynamicAttributes=cc
var gc={get paint(){return mc=mc||new dn({"icon-opacity":new ln(q.paint_symbol["icon-opacity"]),"icon-color":new ln(q.paint_symbol["icon-color"]),"icon-halo-color":new ln(q.paint_symbol["icon-halo-color"]),"icon-halo-width":new ln(q.paint_symbol["icon-halo-width"]),"icon-halo-blur":new ln(q.paint_symbol["icon-halo-blur"]),"icon-translate":new on(q.paint_symbol["icon-translate"]),"icon-translate-anchor":new on(q.paint_symbol["icon-translate-anchor"]),"text-opacity":new ln(q.paint_symbol["text-opacity"]),"text-color":new ln(q.paint_symbol["text-color"],{runtimeType:ct,getOverride:t=>t.textColor,hasOverride:t=>!!t.textColor}),"text-halo-color":new ln(q.paint_symbol["text-halo-color"]),"text-halo-width":new ln(q.paint_symbol["text-halo-width"]),"text-halo-blur":new ln(q.paint_symbol["text-halo-blur"]),"text-translate":new on(q.paint_symbol["text-translate"]),"text-translate-anchor":new on(q.paint_symbol["text-translate-anchor"])})},get layout(){return fc=fc||new dn({"symbol-placement":new on(q.layout_symbol["symbol-placement"]),"symbol-spacing":new on(q.layout_symbol["symbol-spacing"]),"symbol-avoid-edges":new on(q.layout_symbol["symbol-avoid-edges"]),"symbol-sort-key":new ln(q.layout_symbol["symbol-sort-key"]),"symbol-z-order":new on(q.layout_symbol["symbol-z-order"]),"icon-allow-overlap":new on(q.layout_symbol["icon-allow-overlap"]),"icon-overlap":new on(q.layout_symbol["icon-overlap"]),"icon-ignore-placement":new on(q.layout_symbol["icon-ignore-placement"]),"icon-optional":new on(q.layout_symbol["icon-optional"]),"icon-rotation-alignment":new on(q.layout_symbol["icon-rotation-alignment"]),"icon-size":new ln(q.layout_symbol["icon-size"]),"icon-text-fit":new on(q.layout_symbol["icon-text-fit"]),"icon-text-fit-padding":new on(q.layout_symbol["icon-text-fit-padding"]),"icon-image":new ln(q.layout_symbol["icon-image"]),"icon-rotate":new ln(q.layout_symbol["icon-rotate"]),"icon-padding":new ln(q.layout_symbol["icon-padding"]),"icon-keep-upright":new on(q.layout_symbol["icon-keep-upright"]),"icon-offset":new ln(q.layout_symbol["icon-offset"]),"icon-anchor":new ln(q.layout_symbol["icon-anchor"]),"icon-pitch-alignment":new on(q.layout_symbol["icon-pitch-alignment"]),"text-pitch-alignment":new on(q.layout_symbol["text-pitch-alignment"]),"text-rotation-alignment":new on(q.layout_symbol["text-rotation-alignment"]),"text-field":new ln(q.layout_symbol["text-field"]),"text-font":new ln(q.layout_symbol["text-font"]),"text-size":new ln(q.layout_symbol["text-size"]),"text-max-width":new ln(q.layout_symbol["text-max-width"]),"text-line-height":new on(q.layout_symbol["text-line-height"]),"text-letter-spacing":new ln(q.layout_symbol["text-letter-spacing"]),"text-justify":new ln(q.layout_symbol["text-justify"]),"text-radial-offset":new ln(q.layout_symbol["text-radial-offset"]),"text-variable-anchor":new on(q.layout_symbol["text-variable-anchor"]),"text-anchor":new ln(q.layout_symbol["text-anchor"]),"text-max-angle":new on(q.layout_symbol["text-max-angle"]),"text-writing-mode":new on(q.layout_symbol["text-writing-mode"]),"text-rotate":new ln(q.layout_symbol["text-rotate"]),"text-padding":new on(q.layout_symbol["text-padding"]),"text-keep-upright":new on(q.layout_symbol["text-keep-upright"]),"text-transform":new ln(q.layout_symbol["text-transform"]),"text-offset":new ln(q.layout_symbol["text-offset"]),"text-allow-overlap":new on(q.layout_symbol["text-allow-overlap"]),"text-overlap":new on(q.layout_symbol["text-overlap"]),"text-ignore-placement":new on(q.layout_symbol["text-ignore-placement"]),"text-optional":new on(q.layout_symbol["text-optional"])})}}
class _c{constructor(t){if(void 0===t.property.overrides)throw new Error("overrides must be provided to instantiate FormatSectionOverride class")
this.type=t.property.overrides?t.property.overrides.runtimeType:st,this.defaultValue=t}evaluate(t){if(t.formattedSection){const e=this.defaultValue.property.overrides
if(e&&e.hasOverride(t.formattedSection))return e.getOverride(t.formattedSection)}return t.feature&&t.featureState?this.defaultValue.evaluate(t.feature,t.featureState):this.defaultValue.property.specification.default}eachChild(t){this.defaultValue.isConstant()||t(this.defaultValue.value._styleExpression.expression)}outputDefined(){return!1}serialize(){return null}}Er("FormatSectionOverride",_c,{omit:["defaultValue"]})
class yc extends fn{constructor(t){super(t,gc)}recalculate(t,e){if(super.recalculate(t,e),"auto"===this.layout.get("icon-rotation-alignment")&&(this.layout._values["icon-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-rotation-alignment")&&(this.layout._values["text-rotation-alignment"]="point"!==this.layout.get("symbol-placement")?"map":"viewport"),"auto"===this.layout.get("text-pitch-alignment")&&(this.layout._values["text-pitch-alignment"]="map"===this.layout.get("text-rotation-alignment")?"map":"viewport"),"auto"===this.layout.get("icon-pitch-alignment")&&(this.layout._values["icon-pitch-alignment"]=this.layout.get("icon-rotation-alignment")),"point"===this.layout.get("symbol-placement")){const t=this.layout.get("text-writing-mode")
if(t){const e=[]
for(const i of t)e.indexOf(i)<0&&e.push(i)
this.layout._values["text-writing-mode"]=e}else this.layout._values["text-writing-mode"]=["horizontal"]}this._setPaintOverrides()}getValueAndResolveTokens(t,e,i,r){const n=this.layout.get(t).evaluate(e,{},i,r),s=this._unevaluatedLayout._values[t]
return s.isDataDriven()||Ei(s.value)||!n?n:function(t,e){return e.replace(/{([^{}]+)}/g,((e,i)=>i in t?String(t[i]):""))}(e.properties,n)}createBucket(t){return new pc(t)}queryRadius(){return 0}queryIntersectsFeature(){throw new Error("Should take a different path in FeatureIndex")}_setPaintOverrides(){for(const t of gc.paint.overridableProperties){if(!yc.hasPaintOverride(this.layout,t))continue
const e=this.paint.get(t),i=new _c(e),r=new Si(i,e.property.specification)
let n=null
n="constant"===e.value.kind||"source"===e.value.kind?new Ai("source",r):new Mi("composite",r,e.value.zoomStops),this.paint._values[t]=new sn(e.property,n,e.parameters)}}_handleOverridablePaintPropertyUpdate(t,e,i){return!(!this.layout||e.isDataDriven()||i.isDataDriven())&&yc.hasPaintOverride(this.layout,t)}static hasPaintOverride(t,e){const i=t.get("text-field"),r=gc.paint.properties[e]
let n=!1
const s=t=>{for(const e of t)if(r.overrides&&r.overrides.hasOverride(e))return void(n=!0)}
if("constant"===i.value.kind&&i.value.value instanceof Zt)s(i.value.value.sections)
else if("source"===i.value.kind){const t=e=>{n||(e instanceof Jt&&Kt(e.value)===pt?s(e.value.sections):e instanceof ii?s(e.sections):e.eachChild(t))},e=i.value
e._styleExpression&&t(e._styleExpression.expression)}return n}}let xc
var vc={get paint(){return xc=xc||new dn({"background-color":new on(q.paint_background["background-color"]),"background-pattern":new hn(q.paint_background["background-pattern"]),"background-opacity":new on(q.paint_background["background-opacity"])})}}
let bc
var wc={get paint(){return bc=bc||new dn({"raster-opacity":new on(q.paint_raster["raster-opacity"]),"raster-hue-rotate":new on(q.paint_raster["raster-hue-rotate"]),"raster-brightness-min":new on(q.paint_raster["raster-brightness-min"]),"raster-brightness-max":new on(q.paint_raster["raster-brightness-max"]),"raster-saturation":new on(q.paint_raster["raster-saturation"]),"raster-contrast":new on(q.paint_raster["raster-contrast"]),"raster-resampling":new on(q.paint_raster["raster-resampling"]),"raster-fade-duration":new on(q.paint_raster["raster-fade-duration"])})}}
class Tc extends fn{constructor(t){super(t,{}),this.onAdd=t=>{this.implementation.onAdd&&this.implementation.onAdd(t,t.painter.context.gl)},this.onRemove=t=>{this.implementation.onRemove&&this.implementation.onRemove(t,t.painter.context.gl)},this.implementation=t}is3D(){return"3d"===this.implementation.renderingMode}hasOffscreenPass(){return void 0!==this.implementation.prerender}recalculate(){}updateTransitions(){}hasTransition(){return!1}serialize(){throw new Error("Custom layers cannot be serialized")}}const Sc={circle:class extends fn{constructor(t){super(t,la)}createBucket(t){return new Zs(t)}queryRadius(t){const e=t
return ra("circle-radius",this,e)+ra("circle-stroke-width",this,e)+na(this.paint.get("circle-translate"))}queryIntersectsFeature(t,e,i,r,n,s,a,o){const l=sa(t,this.paint.get("circle-translate"),this.paint.get("circle-translate-anchor"),s.angle,a),c=this.paint.get("circle-radius").evaluate(e,i)+this.paint.get("circle-stroke-width").evaluate(e,i),h="map"===this.paint.get("circle-pitch-alignment"),u=h?l:function(t,e){return t.map((t=>ga(t,e)))}(l,o),d=h?c*a:c
for(const p of r)for(const t of p){const e=h?t:ga(t,o)
let i=d
const r=ma([],[t.x,t.y,0,1],o)
if("viewport"===this.paint.get("circle-pitch-scale")&&"map"===this.paint.get("circle-pitch-alignment")?i*=r[3]/s.cameraToCenterDistance:"map"===this.paint.get("circle-pitch-scale")&&"viewport"===this.paint.get("circle-pitch-alignment")&&(i*=s.cameraToCenterDistance/r[3]),Xs(u,e,i))return!0}return!1}},heatmap:class extends fn{createBucket(t){return new _a(t)}constructor(t){super(t,xa),this._updateColorRamp()}_handleSpecialPaintPropertyUpdate(t){"heatmap-color"===t&&this._updateColorRamp()}_updateColorRamp(){this.colorRamp=Ea({expression:this._transitionablePaint._values["heatmap-color"].value.expression,evaluationKey:"heatmapDensity",image:this.colorRamp}),this.colorRampTexture=null}resize(){this.heatmapFbo&&(this.heatmapFbo.destroy(),this.heatmapFbo=null)}queryRadius(){return 0}queryIntersectsFeature(){return!1}hasOffscreenPass(){return 0!==this.paint.get("heatmap-opacity")&&"none"!==this.visibility}},hillshade:class extends fn{constructor(t){super(t,Aa)}hasOffscreenPass(){return 0!==this.paint.get("hillshade-exaggeration")&&"none"!==this.visibility}},fill:class extends fn{constructor(t){super(t,go)}recalculate(t,e){super.recalculate(t,e)
const i=this.paint._values["fill-outline-color"]
"constant"===i.value.kind&&void 0===i.value.value&&(this.paint._values["fill-outline-color"]=this.paint._values["fill-color"])}createBucket(t){return new po(t)}queryRadius(){return na(this.paint.get("fill-translate"))}queryIntersectsFeature(t,e,i,r,n,s,a){return Ws(sa(t,this.paint.get("fill-translate"),this.paint.get("fill-translate-anchor"),s.angle,a),r)}isTileClipped(){return!0}},"fill-extrusion":class extends fn{constructor(t){super(t,Uo)}createBucket(t){return new Bo(t)}queryRadius(){return na(this.paint.get("fill-extrusion-translate"))}is3D(){return!0}queryIntersectsFeature(t,e,i,r,s,a,o,l){const c=sa(t,this.paint.get("fill-extrusion-translate"),this.paint.get("fill-extrusion-translate-anchor"),a.angle,o),h=this.paint.get("fill-extrusion-height").evaluate(e,i),u=this.paint.get("fill-extrusion-base").evaluate(e,i),d=function(t,e,i,r){const s=[]
for(const a of t){const t=[a.x,a.y,0,1]
ma(t,t,e),s.push(new n(t[0]/t[3],t[1]/t[3]))}return s}(c,l),p=function(t,e,i,r){const s=[],a=[],o=r[8]*e,l=r[9]*e,c=r[10]*e,h=r[11]*e,u=r[8]*i,d=r[9]*i,p=r[10]*i,f=r[11]*i
for(const m of t){const t=[],e=[]
for(const i of m){const s=i.x,a=i.y,m=r[0]*s+r[4]*a+r[12],g=r[1]*s+r[5]*a+r[13],_=r[2]*s+r[6]*a+r[14],y=r[3]*s+r[7]*a+r[15],x=_+c,v=y+h,b=m+u,w=g+d,T=_+p,S=y+f,E=new n((m+o)/v,(g+l)/v)
E.z=x/v,t.push(E)
const I=new n(b/S,w/S)
I.z=T/S,e.push(I)}s.push(t),a.push(e)}return[s,a]}(r,u,h,l)
return function(t,e,i){let r=1/0
Ws(i,e)&&(r=No(i,e[0]))
for(let n=0;n<e.length;n++){const s=e[n],a=t[n]
for(let t=0;t<s.length-1;t++){const e=s[t],n=[e,s[t+1],a[t+1],a[t],e]
Gs(i,n)&&(r=Math.min(r,No(i,n)))}}return r!==1/0&&r}(p[0],p[1],d)}},line:class extends fn{constructor(t){super(t,Jo),this.gradientVersion=0,tl||(tl=new Qo(Jo.paint.properties["line-width"].specification),tl.useIntegerZoom=!0)}_handleSpecialPaintPropertyUpdate(t){"line-gradient"===t&&(this.stepInterpolant=this._transitionablePaint._values["line-gradient"].value.expression._styleExpression.expression instanceof ke,this.gradientVersion=(this.gradientVersion+1)%Number.MAX_SAFE_INTEGER)}gradientExpression(){return this._transitionablePaint._values["line-gradient"].value.expression}recalculate(t,e){super.recalculate(t,e),this.paint._values["line-floorwidth"]=tl.possiblyEvaluate(this._transitioningPaint._values["line-width"].value,t)}createBucket(t){return new Ho(t)}queryRadius(t){const e=t,i=el(ra("line-width",this,e),ra("line-gap-width",this,e)),r=ra("line-offset",this,e)
return i/2+Math.abs(r)+na(this.paint.get("line-translate"))}queryIntersectsFeature(t,e,i,r,s,a,o){const l=sa(t,this.paint.get("line-translate"),this.paint.get("line-translate-anchor"),a.angle,o),c=o/2*el(this.paint.get("line-width").evaluate(e,i),this.paint.get("line-gap-width").evaluate(e,i)),h=this.paint.get("line-offset").evaluate(e,i)
return h&&(r=function(t,e){const i=[]
for(let r=0;r<t.length;r++){const s=t[r],a=[]
for(let t=0;t<s.length;t++){const i=s[t-1],r=s[t],o=s[t+1],l=0===t?new n(0,0):r.sub(i)._unit()._perp(),c=t===s.length-1?new n(0,0):o.sub(r)._unit()._perp(),h=l._add(c)._unit(),u=h.x*c.x+h.y*c.y
0!==u&&h._mult(1/u),a.push(h._mult(e)._add(r))}i.push(a)}return i}(r,h*o)),function(t,e,i){for(let r=0;r<e.length;r++){const n=e[r]
if(t.length>=3)for(let e=0;e<n.length;e++)if(ea(t,n[e]))return!0
if(Hs(t,n,i))return!0}return!1}(l,r,c)}isTileClipped(){return!0}},symbol:yc,background:class extends fn{constructor(t){super(t,vc)}},raster:class extends fn{constructor(t){super(t,wc)}}}
class Ec{constructor(t){this._callback=t,this._triggered=!1,"undefined"!=typeof MessageChannel&&(this._channel=new MessageChannel,this._channel.port2.onmessage=()=>{this._triggered=!1,this._callback()})}trigger(){this._triggered||(this._triggered=!0,this._channel?this._channel.port1.postMessage(!0):setTimeout((()=>{this._triggered=!1,this._callback()}),0))}remove(){delete this._channel,this._callback=()=>{}}}const Ic=6371008.8
class Ac{constructor(t,e){if(isNaN(t)||isNaN(e))throw new Error(`Invalid LngLat object: (${t}, ${e})`)
if(this.lng=+t,this.lat=+e,this.lat>90||this.lat<-90)throw new Error("Invalid LngLat latitude value: must be between -90 and 90")}wrap(){return new Ac(u(this.lng,-180,180),this.lat)}toArray(){return[this.lng,this.lat]}toString(){return`LngLat(${this.lng}, ${this.lat})`}distanceTo(t){const e=Math.PI/180,i=this.lat*e,r=t.lat*e,n=Math.sin(i)*Math.sin(r)+Math.cos(i)*Math.cos(r)*Math.cos((t.lng-this.lng)*e)
return Ic*Math.acos(Math.min(n,1))}static convert(t){if(t instanceof Ac)return t
if(Array.isArray(t)&&(2===t.length||3===t.length))return new Ac(Number(t[0]),Number(t[1]))
if(!Array.isArray(t)&&"object"==typeof t&&null!==t)return new Ac(Number("lng"in t?t.lng:t.lon),Number(t.lat))
throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]")}}const Mc=2*Math.PI*Ic
function Cc(t){return Mc*Math.cos(t*Math.PI/180)}function Pc(t){return(180+t)/360}function zc(t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+t*Math.PI/360)))/360}function kc(t,e){return t/Cc(e)}function Dc(t){return 360/Math.PI*Math.atan(Math.exp((180-360*t)*Math.PI/180))-90}class Lc{constructor(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
this.x=+t,this.y=+e,this.z=+i}static fromLngLat(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const i=Ac.convert(t)
return new Lc(Pc(i.lng),zc(i.lat),kc(e,i.lat))}toLngLat(){return new Ac(360*this.x-180,Dc(this.y))}toAltitude(){return this.z*Cc(Dc(this.y))}meterInMercatorCoordinateUnits(){return 1/Mc*(t=Dc(this.y),1/Math.cos(t*Math.PI/180))
var t}}function Bc(t,e,i){var r=2*Math.PI*6378137/256/Math.pow(2,i)
return[t*r-2*Math.PI*6378137/2,e*r-2*Math.PI*6378137/2]}class Rc{constructor(t,e,i){if(t<0||t>25||i<0||i>=Math.pow(2,t)||e<0||e>=Math.pow(2,t))throw new Error(`x=${e}, y=${i}, z=${t} outside of bounds. 0<=x<${Math.pow(2,t)}, 0<=y<${Math.pow(2,t)} 0<=z<=25 `)
this.z=t,this.x=e,this.y=i,this.key=Uc(0,t,t,e,i)}equals(t){return this.z===t.z&&this.x===t.x&&this.y===t.y}url(t,e,i){const r=(s=this.y,a=this.z,o=Bc(256*(n=this.x),256*(s=Math.pow(2,a)-s-1),a),l=Bc(256*(n+1),256*(s+1),a),o[0]+","+o[1]+","+l[0]+","+l[1])
var n,s,a,o,l
const c=function(t,e,i){let r,n=""
for(let s=t;s>0;s--)r=1<<s-1,n+=(e&r?1:0)+(i&r?2:0)
return n}(this.z,this.x,this.y)
return t[(this.x+this.y)%t.length].replace(/{prefix}/g,(this.x%16).toString(16)+(this.y%16).toString(16)).replace(/{z}/g,String(this.z)).replace(/{x}/g,String(this.x)).replace(/{y}/g,String("tms"===i?Math.pow(2,this.z)-this.y-1:this.y)).replace(/{ratio}/g,e>1?"@2x":"").replace(/{quadkey}/g,c).replace(/{bbox-epsg-3857}/g,r)}isChildOf(t){const e=this.z-t.z
return e>0&&t.x===this.x>>e&&t.y===this.y>>e}getTilePoint(t){const e=Math.pow(2,this.z)
return new n((t.x*e-this.x)*Us,(t.y*e-this.y)*Us)}toString(){return`${this.z}/${this.x}/${this.y}`}}class Fc{constructor(t,e){this.wrap=t,this.canonical=e,this.key=Uc(t,e.z,e.z,e.x,e.y)}}class Oc{constructor(t,e,i,r,n){if(t<i)throw new Error(`overscaledZ should be >= z; overscaledZ = ${t}; z = ${i}`)
this.overscaledZ=t,this.wrap=e,this.canonical=new Rc(i,+r,+n),this.key=Uc(e,t,i,r,n)}clone(){return new Oc(this.overscaledZ,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)}equals(t){return this.overscaledZ===t.overscaledZ&&this.wrap===t.wrap&&this.canonical.equals(t.canonical)}scaledTo(t){if(t>this.overscaledZ)throw new Error(`targetZ > this.overscaledZ; targetZ = ${t}; overscaledZ = ${this.overscaledZ}`)
const e=this.canonical.z-t
return t>this.canonical.z?new Oc(t,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y):new Oc(t,this.wrap,t,this.canonical.x>>e,this.canonical.y>>e)}calculateScaledKey(t,e){if(t>this.overscaledZ)throw new Error(`targetZ > this.overscaledZ; targetZ = ${t}; overscaledZ = ${this.overscaledZ}`)
const i=this.canonical.z-t
return t>this.canonical.z?Uc(this.wrap*+e,t,this.canonical.z,this.canonical.x,this.canonical.y):Uc(this.wrap*+e,t,t,this.canonical.x>>i,this.canonical.y>>i)}isChildOf(t){if(t.wrap!==this.wrap)return!1
const e=this.canonical.z-t.canonical.z
return 0===t.overscaledZ||t.overscaledZ<this.overscaledZ&&t.canonical.x===this.canonical.x>>e&&t.canonical.y===this.canonical.y>>e}children(t){if(this.overscaledZ>=t)return[new Oc(this.overscaledZ+1,this.wrap,this.canonical.z,this.canonical.x,this.canonical.y)]
const e=this.canonical.z+1,i=2*this.canonical.x,r=2*this.canonical.y
return[new Oc(e,this.wrap,e,i,r),new Oc(e,this.wrap,e,i+1,r),new Oc(e,this.wrap,e,i,r+1),new Oc(e,this.wrap,e,i+1,r+1)]}isLessThan(t){return this.wrap<t.wrap||!(this.wrap>t.wrap)&&(this.overscaledZ<t.overscaledZ||!(this.overscaledZ>t.overscaledZ)&&(this.canonical.x<t.canonical.x||!(this.canonical.x>t.canonical.x)&&this.canonical.y<t.canonical.y))}wrapped(){return new Oc(this.overscaledZ,0,this.canonical.z,this.canonical.x,this.canonical.y)}unwrapTo(t){return new Oc(this.overscaledZ,t,this.canonical.z,this.canonical.x,this.canonical.y)}overscaleFactor(){return Math.pow(2,this.overscaledZ-this.canonical.z)}toUnwrapped(){return new Fc(this.wrap,this.canonical)}toString(){return`${this.overscaledZ}/${this.canonical.x}/${this.canonical.y}`}getTilePoint(t){return this.canonical.getTilePoint(new Lc(t.x-this.wrap,t.y))}}function Uc(t,e,i,r,n){(t*=2)<0&&(t=-1*t-1)
const s=1<<i
return(s*s*t+s*n+r).toString(36)+i.toString(36)+e.toString(36)}Er("CanonicalTileID",Rc),Er("OverscaledTileID",Oc,{omit:["posMatrix"]})
class Vc{constructor(t,e,i){if(this.uid=t,e.height!==e.width)throw new RangeError("DEM tiles must be square")
if(i&&"mapbox"!==i&&"terrarium"!==i)return void x(`"${i}" is not a valid encoding type. Valid types include "mapbox" and "terrarium".`)
this.stride=e.height
const r=this.dim=e.height-2
this.data=new Uint32Array(e.data.buffer),this.encoding=i||"mapbox"
for(let n=0;n<r;n++)this.data[this._idx(-1,n)]=this.data[this._idx(0,n)],this.data[this._idx(r,n)]=this.data[this._idx(r-1,n)],this.data[this._idx(n,-1)]=this.data[this._idx(n,0)],this.data[this._idx(n,r)]=this.data[this._idx(n,r-1)]
this.data[this._idx(-1,-1)]=this.data[this._idx(0,0)],this.data[this._idx(r,-1)]=this.data[this._idx(r-1,0)],this.data[this._idx(-1,r)]=this.data[this._idx(0,r-1)],this.data[this._idx(r,r)]=this.data[this._idx(r-1,r-1)],this.min=Number.MAX_SAFE_INTEGER,this.max=Number.MIN_SAFE_INTEGER
for(let n=0;n<r;n++)for(let t=0;t<r;t++){const e=this.get(n,t)
e>this.max&&(this.max=e),e<this.min&&(this.min=e)}}get(t,e){const i=new Uint8Array(this.data.buffer),r=4*this._idx(t,e)
return("terrarium"===this.encoding?this._unpackTerrarium:this._unpackMapbox)(i[r],i[r+1],i[r+2])}getUnpackVector(){return"terrarium"===this.encoding?[256,1,1/256,32768]:[6553.6,25.6,.1,1e4]}_idx(t,e){if(t<-1||t>=this.dim+1||e<-1||e>=this.dim+1)throw new RangeError("out of range source coordinates for DEM data")
return(e+1)*this.stride+(t+1)}_unpackMapbox(t,e,i){return(256*t*256+256*e+i)/10-1e4}_unpackTerrarium(t,e,i){return 256*t+e+i/256-32768}getPixels(){return new Sa({width:this.stride,height:this.stride},new Uint8Array(this.data.buffer))}backfillBorder(t,e,i){if(this.dim!==t.dim)throw new Error("dem dimension mismatch")
let r=e*this.dim,n=e*this.dim+this.dim,s=i*this.dim,a=i*this.dim+this.dim
switch(e){case-1:r=n-1
break
case 1:n=r+1}switch(i){case-1:s=a-1
break
case 1:a=s+1}const o=-e*this.dim,l=-i*this.dim
for(let c=s;c<a;c++)for(let e=r;e<n;e++)this.data[this._idx(e,c)]=t.data[this._idx(e+o,c+l)]}}Er("DEMData",Vc)
class Nc{constructor(t){this._stringToNumber={},this._numberToString=[]
for(let e=0;e<t.length;e++){const i=t[e]
this._stringToNumber[i]=e,this._numberToString[e]=i}}encode(t){return this._stringToNumber[t]}decode(t){if(t>=this._numberToString.length)throw new Error(`Out of bounds. Index requested n=${t} can't be >= this._numberToString.length ${this._numberToString.length}`)
return this._numberToString[t]}}class $c{constructor(t,e,i,r,n){this.type="Feature",this._vectorTileFeature=t,t._z=e,t._x=i,t._y=r,this.properties=t.properties,this.id=n}get geometry(){return void 0===this._geometry&&(this._geometry=this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x,this._vectorTileFeature._y,this._vectorTileFeature._z).geometry),this._geometry}set geometry(t){this._geometry=t}toJSON(){const t={geometry:this.geometry}
for(const e in this)"_geometry"!==e&&"_vectorTileFeature"!==e&&(t[e]=this[e])
return t}}class qc{constructor(t,e){this.tileID=t,this.x=t.canonical.x,this.y=t.canonical.y,this.z=t.canonical.z,this.grid=new Tr(Us,16,0),this.grid3D=new Tr(Us,16,0),this.featureIndexArray=new Yn,this.promoteId=e}insert(t,e,i,r,n,s){const a=this.featureIndexArray.length
this.featureIndexArray.emplaceBack(i,r,n)
const o=s?this.grid3D:this.grid
for(let l=0;l<e.length;l++){const t=e[l],i=[1/0,1/0,-1/0,-1/0]
for(let e=0;e<t.length;e++){const r=t[e]
i[0]=Math.min(i[0],r.x),i[1]=Math.min(i[1],r.y),i[2]=Math.max(i[2],r.x),i[3]=Math.max(i[3],r.y)}i[0]<Us&&i[1]<Us&&i[2]>=0&&i[3]>=0&&o.insert(a,i[0],i[1],i[2],i[3])}}loadVTLayers(){return this.vtLayers||(this.vtLayers=new vo.VectorTile(new Dl(this.rawTileData)).layers,this.sourceLayerCoder=new Nc(this.vtLayers?Object.keys(this.vtLayers).sort():["_geojsonTileLayer"])),this.vtLayers}query(t,e,i,r){this.loadVTLayers()
const s=t.params||{},a=Us/t.tileSize/t.scale,o=Li(s.filter),l=t.queryGeometry,c=t.queryPadding*a,h=Zc(l),u=this.grid.query(h.minX-c,h.minY-c,h.maxX+c,h.maxY+c),d=Zc(t.cameraQueryGeometry),p=this.grid3D.query(d.minX-c,d.minY-c,d.maxX+c,d.maxY+c,((e,i,r,s)=>function(t,e,i,r,s){for(const n of t)if(e<=n.x&&i<=n.y&&r>=n.x&&s>=n.y)return!0
const a=[new n(e,i),new n(e,s),new n(r,s),new n(r,i)]
if(t.length>2)for(const n of a)if(ea(t,n))return!0
for(let n=0;n<t.length-1;n++)if(ia(t[n],t[n+1],a))return!0
return!1}(t.cameraQueryGeometry,e-c,i-c,r+c,s+c)))
for(const n of p)u.push(n)
u.sort(Gc)
const f={}
let m
for(let n=0;n<u.length;n++){const c=u[n]
if(c===m)continue
m=c
const h=this.featureIndexArray.get(c)
let d=null
this.loadMatchingFeature(f,h.bucketIndex,h.sourceLayerIndex,h.featureIndex,o,s.layers,s.availableImages,e,i,r,((e,i,r)=>(d||(d=$s(e)),i.queryIntersectsFeature(l,e,r,d,this.z,t.transform,a,t.pixelPosMatrix))))}return f}loadMatchingFeature(t,e,i,r,n,s,a,o,l,c,h){const u=this.bucketLayerIDs[e]
if(s&&!function(t,e){for(let i=0;i<t.length;i++)if(e.indexOf(t[i])>=0)return!0
return!1}(s,u))return
const p=this.sourceLayerCoder.decode(i),f=this.vtLayers[p].feature(r)
if(n.needGeometry){const t=qs(f,!0)
if(!n.filter(new Yr(this.tileID.overscaledZ),t,this.tileID.canonical))return}else if(!n.filter(new Yr(this.tileID.overscaledZ),f))return
const m=this.getId(f,p)
for(let g=0;g<u.length;g++){const e=u[g]
if(s&&s.indexOf(e)<0)continue
const i=o[e]
if(!i)continue
let n={}
m&&c&&(n=c.getState(i.sourceLayer||"_geojsonTileLayer",m))
const p=d({},l[e])
p.paint=jc(p.paint,i.paint,f,n,a),p.layout=jc(p.layout,i.layout,f,n,a)
const _=!h||h(f,i,n)
if(!_)continue
const y=new $c(f,this.z,this.x,this.y,m)
y.layer=p
let x=t[e]
void 0===x&&(x=t[e]=[]),x.push({featureIndex:r,feature:y,intersectionZ:_})}}lookupSymbolFeatures(t,e,i,r,n,s,a,o){const l={}
this.loadVTLayers()
const c=Li(n)
for(const h of t)this.loadMatchingFeature(l,i,r,h,c,s,a,o,e)
return l}hasLayer(t){for(const e of this.bucketLayerIDs)for(const i of e)if(t===i)return!0
return!1}getId(t,e){let i=t.id
return this.promoteId&&(i=t.properties["string"==typeof this.promoteId?this.promoteId:this.promoteId[e]],"boolean"==typeof i&&(i=Number(i))),i}}function jc(t,e,i,r,n){return m(t,((t,s)=>{const a=e instanceof an?e.get(s):null
return a&&a.evaluate?a.evaluate(i,r,n):a}))}function Zc(t){let e=1/0,i=1/0,r=-1/0,n=-1/0
for(const s of t)e=Math.min(e,s.x),i=Math.min(i,s.y),r=Math.max(r,s.x),n=Math.max(n,s.y)
return{minX:e,minY:i,maxX:r,maxY:n}}function Gc(t,e){return e-t}function Xc(t,e,i,r,s){const a=[]
for(let o=0;o<t.length;o++){const l=t[o]
let c
for(let t=0;t<l.length-1;t++){let o=l[t],h=l[t+1]
o.x<e&&h.x<e||(o.x<e?o=new n(e,o.y+(e-o.x)/(h.x-o.x)*(h.y-o.y))._round():h.x<e&&(h=new n(e,o.y+(e-o.x)/(h.x-o.x)*(h.y-o.y))._round()),o.y<i&&h.y<i||(o.y<i?o=new n(o.x+(i-o.y)/(h.y-o.y)*(h.x-o.x),i)._round():h.y<i&&(h=new n(o.x+(i-o.y)/(h.y-o.y)*(h.x-o.x),i)._round()),o.x>=r&&h.x>=r||(o.x>=r?o=new n(r,o.y+(r-o.x)/(h.x-o.x)*(h.y-o.y))._round():h.x>=r&&(h=new n(r,o.y+(r-o.x)/(h.x-o.x)*(h.y-o.y))._round()),o.y>=s&&h.y>=s||(o.y>=s?o=new n(o.x+(s-o.y)/(h.y-o.y)*(h.x-o.x),s)._round():h.y>=s&&(h=new n(o.x+(s-o.y)/(h.y-o.y)*(h.x-o.x),s)._round()),c&&o.equals(c[c.length-1])||(c=[o],a.push(c)),c.push(h)))))}}return a}Er("FeatureIndex",qc,{omit:["rawTileData","sourceLayerCoder"]})
class Wc extends n{constructor(t,e,i,r){super(t,e),this.angle=i,void 0!==r&&(this.segment=r)}clone(){return new Wc(this.x,this.y,this.angle,this.segment)}}function Hc(t,e,i,r,n){if(void 0===e.segment)return!0
let s=e,a=e.segment+1,o=0
for(;o>-i/2;){if(a--,a<0)return!1
o-=t[a].dist(s),s=t[a]}o+=t[a].dist(t[a+1]),a++
const l=[]
let c=0
for(;o<i/2;){const e=t[a],i=t[a+1]
if(!i)return!1
let s=t[a-1].angleTo(e)-e.angleTo(i)
for(s=Math.abs((s+3*Math.PI)%(2*Math.PI)-Math.PI),l.push({distance:o,angleDelta:s}),c+=s;o-l[0].distance>r;)c-=l.shift().angleDelta
if(c>n)return!1
a++,o+=e.dist(i)}return!0}function Kc(t){let e=0
for(let i=0;i<t.length-1;i++)e+=t[i].dist(t[i+1])
return e}function Yc(t,e,i){return t?.6*e*i:0}function Jc(t,e){return Math.max(t?t.right-t.left:0,e?e.right-e.left:0)}function Qc(t,e,i,r,n,s){const a=Yc(i,n,s),o=Jc(i,r)*s
let l=0
const c=Kc(t)/2
for(let h=0;h<t.length-1;h++){const i=t[h],r=t[h+1],n=i.dist(r)
if(l+n>c){const s=(c-l)/n,u=Be.number(i.x,r.x,s),d=Be.number(i.y,r.y,s),p=new Wc(u,d,r.angleTo(i),h)
return p._round(),!a||Hc(t,p,o,a,e)?p:void 0}l+=n}}function th(t,e,i,r,n,s,a,o,l){const c=Yc(r,s,a),h=Jc(r,n),u=h*a,d=0===t[0].x||t[0].x===l||0===t[0].y||t[0].y===l
return e-u<e/4&&(e=u+e/4),eh(t,d?e/2*o%e:(h/2+2*s)*a*o%e,e,c,i,u,d,!1,l)}function eh(t,e,i,r,n,s,a,o,l){const c=s/2,h=Kc(t)
let u=0,d=e-i,p=[]
for(let f=0;f<t.length-1;f++){const e=t[f],a=t[f+1],o=e.dist(a),m=a.angleTo(e)
for(;d+i<u+o;){d+=i
const g=(d-u)/o,_=Be.number(e.x,a.x,g),y=Be.number(e.y,a.y,g)
if(_>=0&&_<l&&y>=0&&y<l&&d-c>=0&&d+c<=h){const e=new Wc(_,y,m,f)
e._round(),r&&!Hc(t,e,s,r,n)||p.push(e)}}u+=o}return o||p.length||a||(p=eh(t,u/2,i,r,n,s,a,!0,l)),p}function ih(t,e,i,r){const s=[],a=t.image,o=a.pixelRatio,l=a.paddedRect.w-2,c=a.paddedRect.h-2,h=t.right-t.left,u=t.bottom-t.top,d=a.stretchX||[[0,l]],p=a.stretchY||[[0,c]],f=(t,e)=>t+e[1]-e[0],m=d.reduce(f,0),g=p.reduce(f,0),_=l-m,y=c-g
let x=0,v=m,b=0,w=g,T=0,S=_,E=0,I=y
if(a.content&&r){const t=a.content
x=rh(d,0,t[0]),b=rh(p,0,t[1]),v=rh(d,t[0],t[2]),w=rh(p,t[1],t[3]),T=t[0]-x,E=t[1]-b,S=t[2]-t[0]-v,I=t[3]-t[1]-w}const A=(r,s,l,c)=>{const d=sh(r.stretch-x,v,h,t.left),p=ah(r.fixed-T,S,r.stretch,m),f=sh(s.stretch-b,w,u,t.top),_=ah(s.fixed-E,I,s.stretch,g),y=sh(l.stretch-x,v,h,t.left),A=ah(l.fixed-T,S,l.stretch,m),M=sh(c.stretch-b,w,u,t.top),C=ah(c.fixed-E,I,c.stretch,g),P=new n(d,f),z=new n(y,f),k=new n(y,M),D=new n(d,M),L=new n(p/o,_/o),B=new n(A/o,C/o),R=e*Math.PI/180
if(R){const t=Math.sin(R),e=Math.cos(R),i=[e,-t,t,e]
P._matMult(i),z._matMult(i),D._matMult(i),k._matMult(i)}const F=r.stretch+r.fixed,O=s.stretch+s.fixed
return{tl:P,tr:z,bl:D,br:k,tex:{x:a.paddedRect.x+1+F,y:a.paddedRect.y+1+O,w:l.stretch+l.fixed-F,h:c.stretch+c.fixed-O},writingMode:void 0,glyphOffset:[0,0],sectionIndex:0,pixelOffsetTL:L,pixelOffsetBR:B,minFontScaleX:S/o/h,minFontScaleY:I/o/u,isSDF:i}}
if(r&&(a.stretchX||a.stretchY)){const t=nh(d,_,m),e=nh(p,y,g)
for(let i=0;i<t.length-1;i++){const r=t[i],n=t[i+1]
for(let t=0;t<e.length-1;t++)s.push(A(r,e[t],n,e[t+1]))}}else s.push(A({fixed:0,stretch:-1},{fixed:0,stretch:-1},{fixed:0,stretch:l+1},{fixed:0,stretch:c+1}))
return s}function rh(t,e,i){let r=0
for(const n of t)r+=Math.max(e,Math.min(i,n[1]))-Math.max(e,Math.min(i,n[0]))
return r}function nh(t,e,i){const r=[{fixed:-1,stretch:0}]
for(const[n,s]of t){const t=r[r.length-1]
r.push({fixed:n-t.stretch,stretch:t.stretch}),r.push({fixed:n-t.stretch,stretch:t.stretch+(s-n)})}return r.push({fixed:e+1,stretch:i}),r}function sh(t,e,i,r){return t/e*i+r}function ah(t,e,i,r){return t-e*i/r}Er("Anchor",Wc)
class oh{constructor(t,e,i,r,s,a,o,l,c,h){if(this.boxStartIndex=t.length,c){let t=a.top,e=a.bottom
const i=a.collisionPadding
i&&(t-=i[1],e+=i[3])
let r=e-t
r>0&&(r=Math.max(10,r),this.circleDiameter=r)}else{let c=a.top*o-l[0],u=a.bottom*o+l[2],d=a.left*o-l[3],p=a.right*o+l[1]
const f=a.collisionPadding
if(f&&(d-=f[0]*o,c-=f[1]*o,p+=f[2]*o,u+=f[3]*o),h){const t=new n(d,c),e=new n(p,c),i=new n(d,u),r=new n(p,u),s=h*Math.PI/180
t._rotate(s),e._rotate(s),i._rotate(s),r._rotate(s),d=Math.min(t.x,e.x,i.x,r.x),p=Math.max(t.x,e.x,i.x,r.x),c=Math.min(t.y,e.y,i.y,r.y),u=Math.max(t.y,e.y,i.y,r.y)}t.emplaceBack(e.x,e.y,d,c,p,u,i,r,s)}this.boxEndIndex=t.length}}class lh{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ch
if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let i=(this.length>>1)-1;i>=0;i--)this._down(i)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return
const t=this.data[0],e=this.data.pop()
return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:i}=this,r=e[t]
for(;t>0;){const n=t-1>>1,s=e[n]
if(i(r,s)>=0)break
e[t]=s,t=n}e[t]=r}_down(t){const{data:e,compare:i}=this,r=this.length>>1,n=e[t]
for(;t<r;){let r=1+(t<<1),s=e[r]
const a=r+1
if(a<this.length&&i(e[a],s)<0&&(r=a,s=e[a]),i(s,n)>=0)break
e[t]=s,t=r}e[t]=n}}function ch(t,e){return t<e?-1:t>e?1:0}function hh(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=1/0,s=1/0,a=-1/0,o=-1/0
const l=t[0]
for(let n=0;n<l.length;n++){const t=l[n];(!n||t.x<r)&&(r=t.x),(!n||t.y<s)&&(s=t.y),(!n||t.x>a)&&(a=t.x),(!n||t.y>o)&&(o=t.y)}const c=Math.min(a-r,o-s)
let h=c/2
const u=new lh([],uh)
if(0===c)return new n(r,s)
for(let n=r;n<a;n+=c)for(let e=s;e<o;e+=c)u.push(new dh(n+h,e+h,h,t))
let d=function(t){let e=0,i=0,r=0
const n=t[0]
for(let s=0,a=n.length,o=a-1;s<a;o=s++){const t=n[s],a=n[o],l=t.x*a.y-a.x*t.y
i+=(t.x+a.x)*l,r+=(t.y+a.y)*l,e+=3*l}return new dh(i/e,r/e,0,t)}(t),p=u.length
for(;u.length;){const r=u.pop();(r.d>d.d||!d.d)&&(d=r,i&&console.log("found best %d after %d probes",Math.round(1e4*r.d)/1e4,p)),r.max-d.d<=e||(h=r.h/2,u.push(new dh(r.p.x-h,r.p.y-h,h,t)),u.push(new dh(r.p.x+h,r.p.y-h,h,t)),u.push(new dh(r.p.x-h,r.p.y+h,h,t)),u.push(new dh(r.p.x+h,r.p.y+h,h,t)),p+=4)}return i&&(console.log(`num probes: ${p}`),console.log(`best distance: ${d.d}`)),d.p}function uh(t,e){return e.max-t.max}function dh(t,e,i,r){this.p=new n(t,e),this.h=i,this.d=function(t,e){let i=!1,r=1/0
for(let n=0;n<e.length;n++){const s=e[n]
for(let e=0,n=s.length,a=n-1;e<n;a=e++){const n=s[e],o=s[a]
n.y>t.y!=o.y>t.y&&t.x<(o.x-n.x)*(t.y-n.y)/(o.y-n.y)+n.x&&(i=!i),r=Math.min(r,Qs(t,n,o))}}return(i?1:-1)*Math.sqrt(r)}(this.p,r),this.max=this.d+this.h*Math.SQRT2}const ph=Number.POSITIVE_INFINITY
function fh(t,e){return e[1]!==ph?function(t,e,i){let r=0,n=0
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
case"right":i=-e}return[i,r]}(t,e[0])}function mh(t){switch(t){case"right":case"top-right":case"bottom-right":return"right"
case"left":case"top-left":case"bottom-left":return"left"}return"center"}function gh(e,i,r,n,s,a,o,l,c,h,u){let d=a.textMaxSize.evaluate(i,{})
void 0===d&&(d=o)
const p=e.layers[0].layout,f=p.get("icon-offset").evaluate(i,{},u),m=yh(r.horizontal),g=o/24,_=e.tilePixelRatio*g,y=e.tilePixelRatio*d/24,v=e.tilePixelRatio*l,b=e.tilePixelRatio*p.get("symbol-spacing"),w=p.get("text-padding")*e.tilePixelRatio,T=function(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
const n=t.get("icon-padding").evaluate(e,{},i),s=n&&n.values
return[s[0]*r,s[1]*r,s[2]*r,s[3]*r]}(p,i,u,e.tilePixelRatio),S=p.get("text-max-angle")/180*Math.PI,E="viewport"!==p.get("text-rotation-alignment")&&"point"!==p.get("symbol-placement"),I="map"===p.get("icon-rotation-alignment")&&"point"!==p.get("symbol-placement"),A=p.get("symbol-placement"),M=b/2,C=p.get("icon-text-fit")
let P
n&&"none"!==C&&(e.allowVerticalPlacement&&r.vertical&&(P=ec(n,r.vertical,C,p.get("icon-text-fit-padding"),f,g)),m&&(n=ec(n,m,C,p.get("icon-text-fit-padding"),f,g)))
const z=(l,d)=>{d.x<0||d.x>=Us||d.y<0||d.y>=Us||function(e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g,_,y,v,b,w,T,S,E,I){const A=e.addToLineVertexArray(i,r)
let M,C,P,z,k=0,D=0,L=0,B=0,R=-1,F=-1
const O={}
let U=xs(""),V=0,N=0
if(void 0===l._unevaluatedLayout.getValue("text-radial-offset")?[V,N]=l.layout.get("text-offset").evaluate(w,{},E).map((t=>t*cl)):(V=l.layout.get("text-radial-offset").evaluate(w,{},E)*cl,N=ph),e.allowVerticalPlacement&&n.vertical){const t=l.layout.get("text-rotate").evaluate(w,{},E)+90
P=new oh(c,i,h,u,d,n.vertical,p,f,m,t),o&&(z=new oh(c,i,h,u,d,o,_,y,m,t))}if(s){const r=l.layout.get("icon-rotate").evaluate(w,{}),n="none"!==l.layout.get("icon-text-fit"),a=ih(s,r,S,n),p=o?ih(o,r,S,n):void 0
C=new oh(c,i,h,u,d,s,_,y,!1,r),k=4*a.length
const f=e.iconSizeData
let m=null
"source"===f.kind?(m=[ic*l.layout.get("icon-size").evaluate(w,{})],m[0]>rc&&x(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)):"composite"===f.kind&&(m=[ic*T.compositeIconSizes[0].evaluate(w,{},E),ic*T.compositeIconSizes[1].evaluate(w,{},E)],(m[0]>rc||m[1]>rc)&&x(`${e.layerIds[0]}: Value for "icon-size" is >= 255. Reduce your "icon-size".`)),e.addSymbols(e.icon,a,m,b,v,w,t.WritingMode.none,i,A.lineStartIndex,A.lineLength,-1,E),R=e.icon.placedSymbolArray.length-1,p&&(D=4*p.length,e.addSymbols(e.icon,p,m,b,v,w,t.WritingMode.vertical,i,A.lineStartIndex,A.lineLength,-1,E),F=e.icon.placedSymbolArray.length-1)}const $=Object.keys(n.horizontal)
for(const x of $){const r=n.horizontal[x]
if(!M){U=xs(r.text)
const t=l.layout.get("text-rotate").evaluate(w,{},E)
M=new oh(c,i,h,u,d,r,p,f,m,t)}const s=1===r.positionedLines.length
if(L+=_h(e,i,r,a,l,m,w,g,A,n.vertical?t.WritingMode.horizontal:t.WritingMode.horizontalOnly,s?$:[x],O,R,T,E),s)break}n.vertical&&(B+=_h(e,i,n.vertical,a,l,m,w,g,A,t.WritingMode.vertical,["vertical"],O,F,T,E))
const q=M?M.boxStartIndex:e.collisionBoxArray.length,j=M?M.boxEndIndex:e.collisionBoxArray.length,Z=P?P.boxStartIndex:e.collisionBoxArray.length,G=P?P.boxEndIndex:e.collisionBoxArray.length,X=C?C.boxStartIndex:e.collisionBoxArray.length,W=C?C.boxEndIndex:e.collisionBoxArray.length,H=z?z.boxStartIndex:e.collisionBoxArray.length,K=z?z.boxEndIndex:e.collisionBoxArray.length
let Y=-1
const J=(t,e)=>t&&t.circleDiameter?Math.max(t.circleDiameter,e):e
Y=J(M,Y),Y=J(P,Y),Y=J(C,Y),Y=J(z,Y)
const Q=Y>-1?1:0
Q&&(Y*=I/cl),e.glyphOffsetArray.length>=pc.MAX_GLYPHS&&x("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"),void 0!==w.sortKey&&e.addToSortKeyRanges(e.symbolInstances.length,w.sortKey),e.symbolInstances.emplaceBack(i.x,i.y,O.right>=0?O.right:-1,O.center>=0?O.center:-1,O.left>=0?O.left:-1,O.vertical||-1,R,F,U,q,j,Z,G,X,W,H,K,h,L,B,k,D,Q,0,p,V,N,Y)}(e,d,l,r,n,s,P,e.layers[0],e.collisionBoxArray,i.index,i.sourceLayerIndex,e.index,_,[w,w,w,w],E,c,v,T,I,f,i,a,h,u,o)}
if("line"===A)for(const t of Xc(i.geometry,0,0,Us,Us)){const i=th(t,b,S,r.vertical||m,n,24,y,e.overscaling,Us)
for(const r of i)m&&xh(e,m.text,M,r)||z(t,r)}else if("line-center"===A){for(const t of i.geometry)if(t.length>1){const e=Qc(t,S,r.vertical||m,n,24,y)
e&&z(t,e)}}else if("Polygon"===i.type)for(const t of lo(i.geometry,0)){const e=hh(t,16)
z(t[0],new Wc(e.x,e.y,0))}else if("LineString"===i.type)for(const t of i.geometry)z(t,new Wc(t[0].x,t[0].y,0))
else if("Point"===i.type)for(const t of i.geometry)for(const e of t)z([e],new Wc(e.x,e.y,0))}function _h(t,e,i,r,s,a,o,l,c,h,u,d,p,f,m){const g=function(t,e,i,r,s,a,o,l){const c=r.layout.get("text-rotate").evaluate(a,{})*Math.PI/180,h=[]
for(const u of e.positionedLines)for(const t of u.positionedGlyphs){if(!t.rect)continue
const r=t.rect||{}
let a=4,d=!0,p=1,f=0
const m=(s||l)&&t.vertical,g=t.metrics.advance*t.scale/2
if(l&&e.verticalizable&&(f=u.lineOffset/2-(t.imageName?-(cl-t.metrics.width*t.scale)/2:(t.scale-1)*cl)),t.imageName){const e=o[t.imageName]
d=e.sdf,p=e.pixelRatio,a=1/p}const _=s?[t.x+g,t.y]:[0,0]
let y=s?[0,0]:[t.x+g+i[0],t.y+i[1]-f],x=[0,0]
m&&(x=y,y=[0,0])
const v=(t.metrics.left-a)*t.scale-g+y[0],b=(-t.metrics.top-a)*t.scale+y[1],w=v+r.w*t.scale/p,T=b+r.h*t.scale/p,S=new n(v,b),E=new n(w,b),I=new n(v,T),A=new n(w,T)
if(m){const e=new n(-g,g-Vl),i=-Math.PI/2,r=12-g,s=new n(22-r,-(t.imageName?r:0)),a=new n(...x)
S._rotateAround(i,e)._add(s)._add(a),E._rotateAround(i,e)._add(s)._add(a),I._rotateAround(i,e)._add(s)._add(a),A._rotateAround(i,e)._add(s)._add(a)}if(c){const t=Math.sin(c),e=Math.cos(c),i=[e,-t,t,e]
S._matMult(i),E._matMult(i),I._matMult(i),A._matMult(i)}const M=new n(0,0),C=new n(0,0)
h.push({tl:S,tr:E,bl:I,br:A,tex:r,writingMode:e.writingMode,glyphOffset:_,sectionIndex:t.sectionIndex,isSDF:d,pixelOffsetTL:M,pixelOffsetBR:C,minFontScaleX:0,minFontScaleY:0})}return h}(0,i,l,s,a,o,r,t.allowVerticalPlacement),_=t.textSizeData
let y=null
"source"===_.kind?(y=[ic*s.layout.get("text-size").evaluate(o,{})],y[0]>rc&&x(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)):"composite"===_.kind&&(y=[ic*f.compositeTextSizes[0].evaluate(o,{},m),ic*f.compositeTextSizes[1].evaluate(o,{},m)],(y[0]>rc||y[1]>rc)&&x(`${t.layerIds[0]}: Value for "text-size" is >= 255. Reduce your "text-size".`)),t.addSymbols(t.text,g,y,l,a,o,h,e,c.lineStartIndex,c.lineLength,p,m)
for(const n of u)d[n]=t.text.placedSymbolArray.length-1
return 4*g.length}function yh(t){for(const e in t)return t[e]
return null}function xh(t,e,i,r){const n=t.compareText
if(e in n){const t=n[e]
for(let e=t.length-1;e>=0;e--)if(r.dist(t[e])<i)return!0}else n[e]=[]
return n[e].push(r),!1}const vh=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array]
class bh{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.")
const[e,i]=new Uint8Array(t,0,2)
if(219!==e)throw new Error("Data does not appear to be in a KDBush format.")
const r=i>>4
if(1!==r)throw new Error(`Got v${r} data when expected v1.`)
const n=vh[15&i]
if(!n)throw new Error("Unrecognized array type.")
const[s]=new Uint16Array(t,2,1),[a]=new Uint32Array(t,4,1)
return new bh(a,s,n,t)}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:64,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Float64Array,r=arguments.length>3?arguments[3]:void 0
if(isNaN(t)||t<0)throw new Error(`Unpexpected numItems value: ${t}.`)
this.numItems=+t,this.nodeSize=Math.min(Math.max(+e,2),65535),this.ArrayType=i,this.IndexArrayType=t<65536?Uint16Array:Uint32Array
const n=vh.indexOf(this.ArrayType),s=2*t*this.ArrayType.BYTES_PER_ELEMENT,a=t*this.IndexArrayType.BYTES_PER_ELEMENT,o=(8-a%8)%8
if(n<0)throw new Error(`Unexpected typed array class: ${i}.`)
r&&r instanceof ArrayBuffer?(this.data=r,this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+a+o,2*t),this._pos=2*t,this._finished=!0):(this.data=new ArrayBuffer(8+s+a+o),this.ids=new this.IndexArrayType(this.data,8,t),this.coords=new this.ArrayType(this.data,8+a+o,2*t),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,16+n]),new Uint16Array(this.data,2,1)[0]=e,new Uint32Array(this.data,4,1)[0]=t)}add(t,e){const i=this._pos>>1
return this.ids[i]=i,this.coords[this._pos++]=t,this.coords[this._pos++]=e,i}finish(){const t=this._pos>>1
if(t!==this.numItems)throw new Error(`Added ${t} items when expected ${this.numItems}.`)
return wh(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,e,i,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().")
const{ids:n,coords:s,nodeSize:a}=this,o=[0,n.length-1,0],l=[]
for(;o.length;){const c=o.pop()||0,h=o.pop()||0,u=o.pop()||0
if(h-u<=a){for(let a=u;a<=h;a++){const o=s[2*a],c=s[2*a+1]
o>=t&&o<=i&&c>=e&&c<=r&&l.push(n[a])}continue}const d=u+h>>1,p=s[2*d],f=s[2*d+1]
p>=t&&p<=i&&f>=e&&f<=r&&l.push(n[d]),(0===c?t<=p:e<=f)&&(o.push(u),o.push(d-1),o.push(1-c)),(0===c?i>=p:r>=f)&&(o.push(d+1),o.push(h),o.push(1-c))}return l}within(t,e,i){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().")
const{ids:r,coords:n,nodeSize:s}=this,a=[0,r.length-1,0],o=[],l=i*i
for(;a.length;){const c=a.pop()||0,h=a.pop()||0,u=a.pop()||0
if(h-u<=s){for(let i=u;i<=h;i++)Ih(n[2*i],n[2*i+1],t,e)<=l&&o.push(r[i])
continue}const d=u+h>>1,p=n[2*d],f=n[2*d+1]
Ih(p,f,t,e)<=l&&o.push(r[d]),(0===c?t-i<=p:e-i<=f)&&(a.push(u),a.push(d-1),a.push(1-c)),(0===c?t+i>=p:e+i>=f)&&(a.push(d+1),a.push(h),a.push(1-c))}return o}}function wh(t,e,i,r,n,s){if(n-r<=i)return
const a=r+n>>1
Th(t,e,a,r,n,s),wh(t,e,i,r,a-1,1-s),wh(t,e,i,a+1,n,1-s)}function Th(t,e,i,r,n,s){for(;n>r;){if(n-r>600){const a=n-r+1,o=i-r+1,l=Math.log(a),c=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*c*(a-c)/a)*(o-a/2<0?-1:1)
Th(t,e,i,Math.max(r,Math.floor(i-o*c/a+h)),Math.min(n,Math.floor(i+(a-o)*c/a+h)),s)}const a=e[2*i+s]
let o=r,l=n
for(Sh(t,e,r,i),e[2*n+s]>a&&Sh(t,e,r,n);o<l;){for(Sh(t,e,o,l),o++,l--;e[2*o+s]<a;)o++
for(;e[2*l+s]>a;)l--}e[2*r+s]===a?Sh(t,e,r,l):(l++,Sh(t,e,l,n)),l<=i&&(r=l+1),i<=l&&(n=l-1)}}function Sh(t,e,i,r){Eh(t,i,r),Eh(e,2*i,2*r),Eh(e,2*i+1,2*r+1)}function Eh(t,e,i){const r=t[e]
t[e]=t[i],t[i]=r}function Ih(t,e,i,r){const n=t-i,s=e-r
return n*n+s*s}var Ah
t.PerformanceMarkers=void 0,(Ah=t.PerformanceMarkers||(t.PerformanceMarkers={})).create="create",Ah.load="load",Ah.fullLoad="fullLoad"
let Mh=null,Ch=[]
const Ph=1e3/60,zh="loadTime",kh="fullLoadTime",Dh={mark(t){performance.mark(t)},frame(t){const e=t
null!=Mh&&Ch.push(e-Mh),Mh=e},clearMetrics(){Mh=null,Ch=[],performance.clearMeasures(zh),performance.clearMeasures(kh)
for(const e in t.PerformanceMarkers)performance.clearMarks(t.PerformanceMarkers[e])},getPerformanceMetrics(){performance.measure(zh,t.PerformanceMarkers.create,t.PerformanceMarkers.load),performance.measure(kh,t.PerformanceMarkers.create,t.PerformanceMarkers.fullLoad)
const e=performance.getEntriesByName(zh)[0].duration,i=performance.getEntriesByName(kh)[0].duration,r=Ch.length,n=1/(Ch.reduce(((t,e)=>t+e),0)/r/1e3),s=Ch.filter((t=>t>Ph)).reduce(((t,e)=>t+(e-Ph)/Ph),0)
return{loadTime:e,fullLoadTime:i,fps:n,percentDroppedFrames:s/(r+s)*100,totalFrames:r}}}
t.AJAXError=z,t.ARRAY_TYPE=ha,t.Actor=class{constructor(t,e,i){this.target=t,this.parent=e,this.mapId=i,this.callbacks={},this.tasks={},this.taskQueue=[],this.cancelCallbacks={},f(["receive","process"],this),this.invoker=new Ec(this.process),this.target.addEventListener("message",this.receive,!1),this.globalScope=w()?t:window}send(t,e,i,r){let n=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
const s=Math.round(1e18*Math.random()).toString(36).substring(0,10)
i&&(this.callbacks[s]=i)
const a=S(this.globalScope)?void 0:[]
return this.target.postMessage({id:s,type:t,hasCallback:!!i,targetMapId:r,mustQueue:n,sourceMapId:this.mapId,data:Ar(e,a)},a),{cancel:()=>{i&&delete this.callbacks[s],this.target.postMessage({id:s,type:"<cancel>",targetMapId:r,sourceMapId:this.mapId})}}}receive(t){const e=t.data,i=e.id
if(i&&(!e.targetMapId||this.mapId===e.targetMapId))if("<cancel>"===e.type){delete this.tasks[i]
const t=this.cancelCallbacks[i]
delete this.cancelCallbacks[i],t&&t()}else w()||e.mustQueue?(this.tasks[i]=e,this.taskQueue.push(i),this.invoker.trigger()):this.processTask(i,e)}process(){if(!this.taskQueue.length)return
const t=this.taskQueue.shift(),e=this.tasks[t]
delete this.tasks[t],this.taskQueue.length&&this.invoker.trigger(),e&&this.processTask(t,e)}processTask(t,e){if("<response>"===e.type){const i=this.callbacks[t]
delete this.callbacks[t],i&&(e.error?i(Mr(e.error)):i(null,Mr(e.data)))}else{let i=!1
const r=S(this.globalScope)?void 0:[],n=e.hasCallback?(e,n)=>{i=!0,delete this.cancelCallbacks[t],this.target.postMessage({id:t,type:"<response>",sourceMapId:this.mapId,error:e?Ar(e):null,data:Ar(n,r)},r)}:t=>{i=!0}
let s=null
const a=Mr(e.data)
if(this.parent[e.type])s=this.parent[e.type](e.sourceMapId,a,n)
else if(this.parent.getWorkerSource){const t=e.type.split(".")
s=this.parent.getWorkerSource(e.sourceMapId,t[0],a.source)[t[1]](a,n)}else n(new Error(`Could not find function ${e.type}`))
!i&&s&&s.cancel&&(this.cancelCallbacks[t]=s.cancel)}}remove(){this.invoker.remove(),this.target.removeEventListener("message",this.receive,!1)}},t.AlphaImage=Ta,t.CanonicalTileID=Rc,t.CollisionBoxArray=qn,t.CollisionCircleLayoutArray=class extends kn{},t.Color=$t,t.DEMData=Vc,t.DataConstantProperty=on,t.DictionaryCoder=Nc,t.EXTENT=Us,t.ErrorEvent=N,t.EvaluationParameters=Yr,t.Event=V,t.Evented=$,t.FeatureIndex=qc,t.FillBucket=po,t.FillExtrusionBucket=Bo,t.GeoJSONFeature=$c,t.ImageAtlas=Ul,t.ImagePosition=Ol,t.KDBush=bh,t.LineBucket=Ho,t.LineStripIndexArray=class extends Vn{},t.LngLat=Ac,t.MercatorCoordinate=Lc,t.ONE_EM=cl,t.OverscaledTileID=Oc,t.PerformanceUtils=Dh,t.Point=n,t.Pos3dArray=class extends bn{},t.PosArray=Jn,t.Properties=dn,t.Protobuf=Dl,t.QuadTriangleArray=class extends Ln{},t.RGBAImage=Sa,t.RasterBoundsArray=class extends wn{},t.RequestPerformance=class{constructor(t){this._marks={start:[t.url,"start"].join("#"),end:[t.url,"end"].join("#"),measure:t.url.toString()},performance.mark(this._marks.start)}finish(){performance.mark(this._marks.end)
let t=performance.getEntriesByName(this._marks.measure)
return 0===t.length&&(performance.measure(this._marks.measure,this._marks.start,this._marks.end),t=performance.getEntriesByName(this._marks.measure),performance.clearMarks(this._marks.start),performance.clearMarks(this._marks.end),performance.clearMeasures(this._marks.measure)),t}},t.SegmentVector=fs,t.SymbolBucket=pc,t.Transitionable=tn,t.TriangleIndexArray=hs,t.Uniform1f=Es,t.Uniform1i=class extends Ss{constructor(t,e){super(t,e),this.current=0}set(t){this.current!==t&&(this.current=t,this.gl.uniform1i(this.location,t))}},t.Uniform2f=class extends Ss{constructor(t,e){super(t,e),this.current=[0,0]}set(t){t[0]===this.current[0]&&t[1]===this.current[1]||(this.current=t,this.gl.uniform2f(this.location,t[0],t[1]))}},t.Uniform3f=class extends Ss{constructor(t,e){super(t,e),this.current=[0,0,0]}set(t){t[0]===this.current[0]&&t[1]===this.current[1]&&t[2]===this.current[2]||(this.current=t,this.gl.uniform3f(this.location,t[0],t[1],t[2]))}},t.Uniform4f=Is,t.UniformColor=As,t.UniformMatrix4f=class extends Ss{constructor(t,e){super(t,e),this.current=Ms}set(t){if(t[12]!==this.current[12]||t[0]!==this.current[0])return this.current=t,void this.gl.uniformMatrix4fv(this.location,!1,t)
for(let e=1;e<16;e++)if(t[e]!==this.current[e]){this.current=t,this.gl.uniformMatrix4fv(this.location,!1,t)
break}}},t.UnwrappedTileID=Fc,t.ValidationError=et,t.ZoomHistory=Cr,t.addDynamicAttributes=cc,t.arrayBufferToImage=function(t,e){const i=new Image
i.onload=()=>{e(null,i),URL.revokeObjectURL(i.src),i.onload=null,window.requestAnimationFrame((()=>{i.src=I}))},i.onerror=()=>e(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported."))
const r=new Blob([new Uint8Array(t)],{type:"image/png"})
i.src=t.byteLength?URL.createObjectURL(r):I},t.arrayBufferToImageBitmap=function(t,e){const i=new Blob([new Uint8Array(t)],{type:"image/png"})
createImageBitmap(i).then((t=>{e(null,t)})).catch((t=>{e(new Error(`Could not load image because of ${t.message}. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.`))}))},t.asyncAll=function(t,e,i){if(!t.length)return i(null,[])
let r=t.length
const n=new Array(t.length)
let s=null
t.forEach(((t,a)=>{e(t,((t,e)=>{t&&(s=t),n[a]=e,0==--r&&i(s,n)}))}))},t.bezier=l,t.bindAll=f,t.clamp=h,t.clipLine=Xc,t.clone=function(t){var e=new ha(16)
return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},t.clone$1=_,t.collisionCircleLayout=al,t.config=P,t.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.create=function(){var t=new ha(16)
return ha!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},t.createExpression=Ii,t.createFilter=Li,t.createLayout=yn,t.createStyleLayer=function(t){return"custom"===t.type?new Tc(t):new Sc[t.type](t)},t.deepEqual=function t(e,i){if(Array.isArray(e)){if(!Array.isArray(i)||e.length!==i.length)return!1
for(let r=0;r<e.length;r++)if(!t(e[r],i[r]))return!1
return!0}if("object"==typeof e&&null!==e&&null!==i){if("object"!=typeof i)return!1
if(Object.keys(e).length!==Object.keys(i).length)return!1
for(const r in e)if(!t(e[r],i[r]))return!1
return!0}return e===i},t.derefLayers=function(t){t=t.slice()
const e=Object.create(null)
for(let i=0;i<t.length;i++)e[t[i].id]=t[i]
for(let i=0;i<t.length;i++)"ref"in t[i]&&(t[i]=Z(t[i],e[t[i].ref]))
return t},t.diffStyles=function(t,e){if(!t)return[{command:X.setStyle,args:[e]}]
let i=[]
try{if(!G(t.version,e.version))return[{command:X.setStyle,args:[e]}]
G(t.center,e.center)||i.push({command:X.setCenter,args:[e.center]}),G(t.zoom,e.zoom)||i.push({command:X.setZoom,args:[e.zoom]}),G(t.bearing,e.bearing)||i.push({command:X.setBearing,args:[e.bearing]}),G(t.pitch,e.pitch)||i.push({command:X.setPitch,args:[e.pitch]}),G(t.sprite,e.sprite)||i.push({command:X.setSprite,args:[e.sprite]}),G(t.glyphs,e.glyphs)||i.push({command:X.setGlyphs,args:[e.glyphs]}),G(t.transition,e.transition)||i.push({command:X.setTransition,args:[e.transition]}),G(t.light,e.light)||i.push({command:X.setLight,args:[e.light]})
const r={},n=[]
!function(t,e,i,r){let n
for(n in e=e||{},t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(Object.prototype.hasOwnProperty.call(e,n)||H(n,i,r))
for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(Object.prototype.hasOwnProperty.call(t,n)?G(t[n],e[n])||("geojson"===t[n].type&&"geojson"===e[n].type&&Y(t,e,n)?i.push({command:X.setGeoJSONSourceData,args:[n,e[n].data]}):K(n,e,i,r)):W(n,e,i))}(t.sources,e.sources,n,r)
const s=[]
t.layers&&t.layers.forEach((t=>{r[t.source]?i.push({command:X.removeLayer,args:[t.id]}):s.push(t)})),i=i.concat(n),function(t,e,i){e=e||[]
const r=(t=t||[]).map(Q),n=e.map(Q),s=t.reduce(tt,{}),a=e.reduce(tt,{}),o=r.slice(),l=Object.create(null)
let c,h,u,d,p,f,m
for(c=0,h=0;c<r.length;c++)u=r[c],Object.prototype.hasOwnProperty.call(a,u)?h++:(i.push({command:X.removeLayer,args:[u]}),o.splice(o.indexOf(u,h),1))
for(c=0,h=0;c<n.length;c++)u=n[n.length-1-c],o[o.length-1-c]!==u&&(Object.prototype.hasOwnProperty.call(s,u)?(i.push({command:X.removeLayer,args:[u]}),o.splice(o.lastIndexOf(u,o.length-h),1)):h++,f=o[o.length-c],i.push({command:X.addLayer,args:[a[u],f]}),o.splice(o.length-c,0,u),l[u]=!0)
for(c=0;c<n.length;c++)if(u=n[c],d=s[u],p=a[u],!l[u]&&!G(d,p))if(G(d.source,p.source)&&G(d["source-layer"],p["source-layer"])&&G(d.type,p.type)){for(m in J(d.layout,p.layout,i,u,null,X.setLayoutProperty),J(d.paint,p.paint,i,u,null,X.setPaintProperty),G(d.filter,p.filter)||i.push({command:X.setFilter,args:[u,p.filter]}),G(d.minzoom,p.minzoom)&&G(d.maxzoom,p.maxzoom)||i.push({command:X.setLayerZoomRange,args:[u,p.minzoom,p.maxzoom]}),d)Object.prototype.hasOwnProperty.call(d,m)&&"layout"!==m&&"paint"!==m&&"filter"!==m&&"metadata"!==m&&"minzoom"!==m&&"maxzoom"!==m&&(0===m.indexOf("paint.")?J(d[m],p[m],i,u,m.slice(6),X.setPaintProperty):G(d[m],p[m])||i.push({command:X.setLayerProperty,args:[u,m,p[m]]}))
for(m in p)Object.prototype.hasOwnProperty.call(p,m)&&!Object.prototype.hasOwnProperty.call(d,m)&&"layout"!==m&&"paint"!==m&&"filter"!==m&&"metadata"!==m&&"minzoom"!==m&&"maxzoom"!==m&&(0===m.indexOf("paint.")?J(d[m],p[m],i,u,m.slice(6),X.setPaintProperty):G(d[m],p[m])||i.push({command:X.setLayerProperty,args:[u,m,p[m]]}))}else i.push({command:X.removeLayer,args:[u]}),f=o[o.lastIndexOf(u)+1],i.push({command:X.addLayer,args:[p,f]})}(s,e.layers,i)}catch(t){console.warn("Unable to compute style diff:",t),i=[{command:X.setStyle,args:[e]}]}return i},t.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},t.earthRadius=Ic,t.ease=c,t.emitValidationErrors=wr,t.emptyStyle=function(){const t={},e=q.$version
for(const i in q.$root){const r=q.$root[i]
if(r.required){let n=null
n="version"===i?e:"array"===r.type?[]:{},null!=n&&(t[i]=n)}}return t},t.equals=function(t,e){var i=t[0],r=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],m=t[13],g=t[14],_=t[15],y=e[0],x=e[1],v=e[2],b=e[3],w=e[4],T=e[5],S=e[6],E=e[7],I=e[8],A=e[9],M=e[10],C=e[11],P=e[12],z=e[13],k=e[14],D=e[15]
return Math.abs(i-y)<=ca*Math.max(1,Math.abs(i),Math.abs(y))&&Math.abs(r-x)<=ca*Math.max(1,Math.abs(r),Math.abs(x))&&Math.abs(n-v)<=ca*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(s-b)<=ca*Math.max(1,Math.abs(s),Math.abs(b))&&Math.abs(a-w)<=ca*Math.max(1,Math.abs(a),Math.abs(w))&&Math.abs(o-T)<=ca*Math.max(1,Math.abs(o),Math.abs(T))&&Math.abs(l-S)<=ca*Math.max(1,Math.abs(l),Math.abs(S))&&Math.abs(c-E)<=ca*Math.max(1,Math.abs(c),Math.abs(E))&&Math.abs(h-I)<=ca*Math.max(1,Math.abs(h),Math.abs(I))&&Math.abs(u-A)<=ca*Math.max(1,Math.abs(u),Math.abs(A))&&Math.abs(d-M)<=ca*Math.max(1,Math.abs(d),Math.abs(M))&&Math.abs(p-C)<=ca*Math.max(1,Math.abs(p),Math.abs(C))&&Math.abs(f-P)<=ca*Math.max(1,Math.abs(f),Math.abs(P))&&Math.abs(m-z)<=ca*Math.max(1,Math.abs(m),Math.abs(z))&&Math.abs(g-k)<=ca*Math.max(1,Math.abs(g),Math.abs(k))&&Math.abs(_-D)<=ca*Math.max(1,Math.abs(_),Math.abs(D))},t.evaluateSizeForFeature=function(t,e,i){let{uSize:r,uSizeT:n}=e,{lowerSize:s,upperSize:a}=i
return"source"===t.kind?s/ic:"composite"===t.kind?Be.number(s/ic,a/ic,n):r},t.evaluateSizeForZoom=function(t,e){let i=0,r=0
if("constant"===t.kind)r=t.layoutSize
else if("source"!==t.kind){const{interpolationType:n,minZoom:s,maxZoom:a}=t,o=n?h(Re.interpolationFactor(n,e,s,a),0,1):0
"camera"===t.kind?r=Be.number(t.minSize,t.maxSize,o):i=o}return{uSizeT:i,uSize:r}},t.evaluateVariableOffset=fh,t.evented=Xr,t.exported=C,t.extend=d,t.filterObject=g,t.findLineIntersection=function(t,e,i,r){const s=e.y-t.y,a=e.x-t.x,o=r.y-i.y,l=r.x-i.x,c=o*a-l*s
if(0===c)return null
const h=(l*(t.y-i.y)-o*(t.x-i.x))/c
return new n(t.x+h*a,t.y+h*s)},t.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.getAnchorAlignment=Jl,t.getAnchorJustification=mh,t.getArrayBuffer=R,t.getDefaultExportFromCjs=e,t.getJSON=function(t,e){return B(d(t,{type:"json"}),e)},t.getOverlapMode=sc,t.getProtocolAction=D,t.getRTLTextPluginStatus=Wr,t.getReferrer=k,t.getVideo=function(t,e){const i=window.document.createElement("video")
i.muted=!0,i.onloadstart=function(){e(null,i)}
for(let r=0;r<t.length;r++){const e=window.document.createElement("source")
F(t[r])||(i.crossOrigin="Anonymous"),e.src=t[r],i.appendChild(e)}return{cancel:()=>{}}},t.groupByLayout=function(t,e){const i={}
for(let n=0;n<t.length;n++){const r=e&&e[t[n].id]||qi(t[n])
e&&(e[t[n].id]=r)
let s=i[r]
s||(s=i[r]=[]),s.push(t[n])}const r=[]
for(const n in i)r.push(i[n])
return r},t.identity=ua,t.interpolate=Be,t.invert=function(t,e){var i=e[0],r=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],g=e[14],_=e[15],y=i*o-r*a,x=i*l-n*a,v=i*c-s*a,b=r*l-n*o,w=r*c-s*o,T=n*c-s*l,S=h*m-u*f,E=h*g-d*f,I=h*_-p*f,A=u*g-d*m,M=u*_-p*m,C=d*_-p*g,P=y*C-x*M+v*A+b*I-w*E+T*S
return P?(t[0]=(o*C-l*M+c*A)*(P=1/P),t[1]=(n*M-r*C-s*A)*P,t[2]=(m*T-g*w+_*b)*P,t[3]=(d*w-u*T-p*b)*P,t[4]=(l*I-a*C-c*E)*P,t[5]=(i*C-n*I+s*E)*P,t[6]=(g*v-f*T-_*x)*P,t[7]=(h*T-d*v+p*x)*P,t[8]=(a*M-o*I+c*S)*P,t[9]=(r*I-i*M-s*S)*P,t[10]=(f*w-m*v+_*y)*P,t[11]=(u*v-h*w-p*y)*P,t[12]=(o*E-a*A-l*S)*P,t[13]=(i*A-r*E+n*S)*P,t[14]=(m*x-f*b-g*y)*P,t[15]=(h*b-u*x+d*y)*P,t):null},t.isImageBitmap=E,t.isSafari=S,t.isWorker=w,t.keysDifference=function(t,e){const i=[]
for(const r in t)r in e||i.push(r)
return i},t.lazyLoadRTLTextPlugin=function(){Kr.isLoading()||Kr.isLoaded()||"deferred"!==Wr()||Hr()},t.makeRequest=B,t.mapObject=m,t.mercatorXfromLng=Pc,t.mercatorYfromLat=zc,t.mercatorZfromAltitude=kc,t.mul=fa,t.mul$1=function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t[3]=e[3]*i[3],t},t.multiply=da,t.nextPowerOfTwo=function(t){return t<=1?1:Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},t.operations=X,t.ortho=function(t,e,i,r,n,s,a){var o=1/(e-i),l=1/(r-n),c=1/(s-a)
return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+i)*o,t[13]=(n+r)*l,t[14]=(a+s)*c,t[15]=1,t},t.parseCacheControl=function(t){const e={}
if(t.replace(/(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,((t,i,r,n)=>{const s=r||n
return e[i]=!s||s.toLowerCase(),""})),e["max-age"]){const t=parseInt(e["max-age"],10)
isNaN(t)?delete e["max-age"]:e["max-age"]=t}return e},t.parseGlyphPbf=function(t){return new Dl(t).readFields(Ll,[])},t.pbf=hl,t.performSymbolLayout=function(e){e.bucket.createArrays(),e.bucket.tilePixelRatio=Us/(512*e.bucket.overscaling),e.bucket.compareText={},e.bucket.iconsNeedLinear=!1
const i=e.bucket.layers[0].layout,r=e.bucket.layers[0]._unevaluatedLayout._values,n={layoutIconSize:r["icon-size"].possiblyEvaluate(new Yr(e.bucket.zoom+1),e.canonical),layoutTextSize:r["text-size"].possiblyEvaluate(new Yr(e.bucket.zoom+1),e.canonical),textMaxSize:r["text-size"].possiblyEvaluate(new Yr(18))}
if("composite"===e.bucket.textSizeData.kind){const{minZoom:t,maxZoom:i}=e.bucket.textSizeData
n.compositeTextSizes=[r["text-size"].possiblyEvaluate(new Yr(t),e.canonical),r["text-size"].possiblyEvaluate(new Yr(i),e.canonical)]}if("composite"===e.bucket.iconSizeData.kind){const{minZoom:t,maxZoom:i}=e.bucket.iconSizeData
n.compositeIconSizes=[r["icon-size"].possiblyEvaluate(new Yr(t),e.canonical),r["icon-size"].possiblyEvaluate(new Yr(i),e.canonical)]}const s=i.get("text-line-height")*cl,a="viewport"!==i.get("text-rotation-alignment")&&"point"!==i.get("symbol-placement"),o=i.get("text-keep-upright"),l=i.get("text-size")
for(const c of e.bucket.features){const r=i.get("text-font").evaluate(c,{},e.canonical).join(","),h=l.evaluate(c,{},e.canonical),u=n.layoutTextSize.evaluate(c,{},e.canonical),d=n.layoutIconSize.evaluate(c,{},e.canonical),p={horizontal:{},vertical:void 0},f=c.text
let m,g=[0,0]
if(f){const n=f.toString(),l=i.get("text-letter-spacing").evaluate(c,{},e.canonical)*cl,d=kr(n)?l:0,m=i.get("text-anchor").evaluate(c,{},e.canonical),_=i.get("text-variable-anchor")
if(!_){const t=i.get("text-radial-offset").evaluate(c,{},e.canonical)
g=t?fh(m,[t*cl,ph]):i.get("text-offset").evaluate(c,{},e.canonical).map((t=>t*cl))}let y=a?"center":i.get("text-justify").evaluate(c,{},e.canonical)
const x=i.get("symbol-placement"),v="point"===x?i.get("text-max-width").evaluate(c,{},e.canonical)*cl:0,b=()=>{e.bucket.allowVerticalPlacement&&zr(n)&&(p.vertical=ql(f,e.glyphMap,e.glyphPositions,e.imagePositions,r,v,s,m,"left",d,g,t.WritingMode.vertical,!0,x,u,h))}
if(!a&&_){const i="auto"===y?_.map((t=>mh(t))):[y]
let n=!1
for(let a=0;a<i.length;a++){const o=i[a]
if(!p.horizontal[o])if(n)p.horizontal[o]=p.horizontal[0]
else{const i=ql(f,e.glyphMap,e.glyphPositions,e.imagePositions,r,v,s,"center",o,d,g,t.WritingMode.horizontal,!1,x,u,h)
i&&(p.horizontal[o]=i,n=1===i.positionedLines.length)}}b()}else{"auto"===y&&(y=mh(m))
const i=ql(f,e.glyphMap,e.glyphPositions,e.imagePositions,r,v,s,m,y,d,g,t.WritingMode.horizontal,!1,x,u,h)
i&&(p.horizontal[y]=i),b(),zr(n)&&a&&o&&(p.vertical=ql(f,e.glyphMap,e.glyphPositions,e.imagePositions,r,v,s,m,y,d,g,t.WritingMode.vertical,!1,x,u,h))}}let _=!1
if(c.icon&&c.icon.name){const t=e.imageMap[c.icon.name]
t&&(m=tc(e.imagePositions[c.icon.name],i.get("icon-offset").evaluate(c,{},e.canonical),i.get("icon-anchor").evaluate(c,{},e.canonical)),_=!!t.sdf,void 0===e.bucket.sdfIcons?e.bucket.sdfIcons=_:e.bucket.sdfIcons!==_&&x("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"),(t.pixelRatio!==e.bucket.pixelRatio||0!==i.get("icon-rotate").constantOr(1))&&(e.bucket.iconsNeedLinear=!0))}const y=yh(p.horizontal)||p.vertical
e.bucket.iconsInText=!!y&&y.iconsInText,(y||m)&&gh(e.bucket,c,p,m,e.imageMap,n,u,d,g,_,e.canonical)}e.showCollisionBoxes&&e.bucket.generateCollisionDebugBuffers()},t.perspective=function(t,e,i,r,n){var s,a=1/Math.tan(e/2)
return t[0]=a/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=n&&n!==1/0?(t[10]=(n+r)*(s=1/(r-n)),t[14]=2*n*r*s):(t[10]=-1,t[14]=-2*r),t},t.pick=function(t,e){const i={}
for(let r=0;r<e.length;r++){const n=e[r]
n in t&&(i[n]=t[n])}return i},t.plugin=Kr,t.pointGeometry=i,t.polygonIntersectsPolygon=Gs,t.potpack=Fl,t.register=Er,t.registerForPluginStateChange=function(t){return t({pluginStatus:qr,pluginURL:jr}),Xr.on("pluginStateChange",t),t},t.renderColorRamp=Ea,t.rotateX=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],h=e[9],u=e[10],d=e[11]
return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=s*n+c*r,t[5]=a*n+h*r,t[6]=o*n+u*r,t[7]=l*n+d*r,t[8]=c*n-s*r,t[9]=h*n-a*r,t[10]=u*n-o*r,t[11]=d*n-l*r,t},t.rotateZ=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),s=e[0],a=e[1],o=e[2],l=e[3],c=e[4],h=e[5],u=e[6],d=e[7]
return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=s*n+c*r,t[1]=a*n+h*r,t[2]=o*n+u*r,t[3]=l*n+d*r,t[4]=c*n-s*r,t[5]=h*n-a*r,t[6]=u*n-o*r,t[7]=d*n-l*r,t},t.sameOrigin=F,t.scale=function(t,e,i){var r=i[0],n=i[1],s=i[2]
return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},t.setRTLTextPlugin=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(qr===Ur||qr===Vr||qr===Nr)throw new Error("setRTLTextPlugin cannot be called multiple times.")
jr=C.resolveURL(t),qr=Ur,$r=e,Gr(),i||Hr()},t.sphericalToCartesian=function(t){let[e,i,r]=t
return i+=90,i*=Math.PI/180,r*=Math.PI/180,{x:e*Math.cos(i)*Math.sin(r),y:e*Math.sin(i)*Math.sin(r),z:e*Math.cos(r)}},t.toEvaluationFeature=qs,t.transformMat4=ma,t.translate=function(t,e,i){var r,n,s,a,o,l,c,h,u,d,p,f,m=i[0],g=i[1],_=i[2]
return e===t?(t[12]=e[0]*m+e[4]*g+e[8]*_+e[12],t[13]=e[1]*m+e[5]*g+e[9]*_+e[13],t[14]=e[2]*m+e[6]*g+e[10]*_+e[14],t[15]=e[3]*m+e[7]*g+e[11]*_+e[15]):(n=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],h=e[7],u=e[8],d=e[9],p=e[10],f=e[11],t[0]=r=e[0],t[1]=n,t[2]=s,t[3]=a,t[4]=o,t[5]=l,t[6]=c,t[7]=h,t[8]=u,t[9]=d,t[10]=p,t[11]=f,t[12]=r*m+o*g+u*_+e[12],t[13]=n*m+l*g+d*_+e[13],t[14]=s*m+c*g+p*_+e[14],t[15]=a*m+h*g+f*_+e[15]),t},t.triggerPluginCompletionEvent=Zr,t.unicodeBlockLookup=Pr,t.uniqueId=function(){return p++},t.v8Spec=q,t.validateCustomStyleLayer=function(t){const e=[],i=t.id
return void 0===i&&e.push({message:`layers.${i}: missing required property "id"`}),void 0===t.render&&e.push({message:`layers.${i}: missing required method "render"`}),t.renderingMode&&"2d"!==t.renderingMode&&"3d"!==t.renderingMode&&e.push({message:`layers.${i}: property "renderingMode" must be either "2d" or "3d"`}),e},t.validateLight=xr,t.validateStyle=yr,t.vectorTile=vo,t.warnOnce=x,t.wrap=u})),r(0,(function(t){class e{constructor(t){this.keyCache={},t&&this.replace(t)}replace(t){this._layerConfigs={},this._layers={},this.update(t,[])}update(e,i){for(const n of e){this._layerConfigs[n.id]=n
const e=this._layers[n.id]=t.createStyleLayer(n)
e._featureFilter=t.createFilter(e.filter),this.keyCache[n.id]&&delete this.keyCache[n.id]}for(const t of i)delete this.keyCache[t],delete this._layerConfigs[t],delete this._layers[t]
this.familiesBySource={}
const r=t.groupByLayout(Object.values(this._layerConfigs),this.keyCache)
for(const t of r){const e=t.map((t=>this._layers[t.id])),i=e[0]
if("none"===i.visibility)continue
const r=i.source||""
let n=this.familiesBySource[r]
n||(n=this.familiesBySource[r]={})
const s=i.sourceLayer||"_geojsonTileLayer"
let a=n[s]
a||(a=n[s]=[]),a.push(e)}}}class i{constructor(e){const i={},r=[]
for(const t in e){const n=e[t],s=i[t]={}
for(const t in n){const e=n[+t]
if(!e||0===e.bitmap.width||0===e.bitmap.height)continue
const i={x:0,y:0,w:e.bitmap.width+2,h:e.bitmap.height+2}
r.push(i),s[t]={rect:i,metrics:e.metrics}}}const{w:n,h:s}=t.potpack(r),a=new t.AlphaImage({width:n||1,height:s||1})
for(const o in e){const r=e[o]
for(const e in r){const n=r[+e]
if(!n||0===n.bitmap.width||0===n.bitmap.height)continue
const s=i[o][e].rect
t.AlphaImage.copy(n.bitmap,a,{x:0,y:0},{x:s.x+1,y:s.y+1},n.bitmap)}}this.image=a,this.positions=i}}t.register("GlyphAtlas",i)
class r{constructor(e){this.tileID=new t.OverscaledTileID(e.tileID.overscaledZ,e.tileID.wrap,e.tileID.canonical.z,e.tileID.canonical.x,e.tileID.canonical.y),this.uid=e.uid,this.zoom=e.zoom,this.pixelRatio=e.pixelRatio,this.tileSize=e.tileSize,this.source=e.source,this.overscaling=this.tileID.overscaleFactor(),this.showCollisionBoxes=e.showCollisionBoxes,this.collectResourceTiming=!!e.collectResourceTiming,this.returnDependencies=!!e.returnDependencies,this.promoteId=e.promoteId}parse(e,r,s,a,o){this.status="parsing",this.data=e,this.collisionBoxArray=new t.CollisionBoxArray
const l=new t.DictionaryCoder(Object.keys(e.layers).sort()),c=new t.FeatureIndex(this.tileID,this.promoteId)
c.bucketLayerIDs=[]
const h={},u={featureIndex:c,iconDependencies:{},patternDependencies:{},glyphDependencies:{},availableImages:s},d=r.familiesBySource[this.source]
for(const i in d){const r=e.layers[i]
if(!r)continue
1===r.version&&t.warnOnce(`Vector tile source "${this.source}" layer "${i}" does not use vector tile spec v2 and therefore may have some rendering errors.`)
const a=l.encode(i),o=[]
for(let t=0;t<r.length;t++){const e=r.feature(t),n=c.getId(e,i)
o.push({feature:e,id:n,index:t,sourceLayerIndex:a})}for(const e of d[i]){const i=e[0]
i.source!==this.source&&t.warnOnce(`layer.source = ${i.source} does not equal this.source = ${this.source}`),i.minzoom&&this.zoom<Math.floor(i.minzoom)||i.maxzoom&&this.zoom>=i.maxzoom||"none"!==i.visibility&&(n(e,this.zoom,s),(h[i.id]=i.createBucket({index:c.bucketLayerIDs.length,layers:e,zoom:this.zoom,pixelRatio:this.pixelRatio,overscaling:this.overscaling,collisionBoxArray:this.collisionBoxArray,sourceLayerIndex:a,sourceID:this.source})).populate(o,u,this.tileID.canonical),c.bucketLayerIDs.push(e.map((t=>t.id))))}}let p,f,m,g
const _=t.mapObject(u.glyphDependencies,(t=>Object.keys(t).map(Number)))
Object.keys(_).length?a.send("getGlyphs",{uid:this.uid,stacks:_,source:this.source,tileID:this.tileID,type:"glyphs"},((t,e)=>{p||(p=t,f=e,v.call(this))})):f={}
const y=Object.keys(u.iconDependencies)
y.length?a.send("getImages",{icons:y,source:this.source,tileID:this.tileID,type:"icons"},((t,e)=>{p||(p=t,m=e,v.call(this))})):m={}
const x=Object.keys(u.patternDependencies)
function v(){if(p)return o(p)
if(f&&m&&g){const e=new i(f),r=new t.ImageAtlas(m,g)
for(const i in h){const a=h[i]
a instanceof t.SymbolBucket?(n(a.layers,this.zoom,s),t.performSymbolLayout({bucket:a,glyphMap:f,glyphPositions:e.positions,imageMap:m,imagePositions:r.iconPositions,showCollisionBoxes:this.showCollisionBoxes,canonical:this.tileID.canonical})):a.hasPattern&&(a instanceof t.LineBucket||a instanceof t.FillBucket||a instanceof t.FillExtrusionBucket)&&(n(a.layers,this.zoom,s),a.addFeatures(u,this.tileID.canonical,r.patternPositions))}this.status="done",o(null,{buckets:Object.values(h).filter((t=>!t.isEmpty())),featureIndex:c,collisionBoxArray:this.collisionBoxArray,glyphAtlasImage:e.image,imageAtlas:r,glyphMap:this.returnDependencies?f:null,iconMap:this.returnDependencies?m:null,glyphPositions:this.returnDependencies?e.positions:null})}}x.length?a.send("getImages",{icons:x,source:this.source,tileID:this.tileID,type:"patterns"},((t,e)=>{p||(p=t,g=e,v.call(this))})):g={},v.call(this)}}function n(e,i,r){const n=new t.EvaluationParameters(i)
for(const t of e)t.recalculate(n,r)}function s(e,i){const r=t.getArrayBuffer(e.request,((e,r,n,s)=>{e?i(e):r&&i(null,{vectorTile:new t.vectorTile.VectorTile(new t.Protobuf(r)),rawData:r,cacheControl:n,expires:s})}))
return()=>{r.cancel(),i()}}class a{constructor(t,e,i,r){this.actor=t,this.layerIndex=e,this.availableImages=i,this.loadVectorData=r||s,this.loading={},this.loaded={}}loadTile(e,i){const n=e.uid
this.loading||(this.loading={})
const s=!!(e&&e.request&&e.request.collectResourceTiming)&&new t.RequestPerformance(e.request),a=this.loading[n]=new r(e)
a.abort=this.loadVectorData(e,((e,r)=>{if(delete this.loading[n],e||!r)return a.status="done",this.loaded[n]=a,i(e)
const o=r.rawData,l={}
r.expires&&(l.expires=r.expires),r.cacheControl&&(l.cacheControl=r.cacheControl)
const c={}
if(s){const t=s.finish()
t&&(c.resourceTiming=JSON.parse(JSON.stringify(t)))}a.vectorTile=r.vectorTile,a.parse(r.vectorTile,this.layerIndex,this.availableImages,this.actor,((e,r)=>{if(e||!r)return i(e)
i(null,t.extend({rawTileData:o.slice(0)},r,l,c))})),this.loaded=this.loaded||{},this.loaded[n]=a}))}reloadTile(t,e){const i=this.loaded,r=t.uid,n=this
if(i&&i[r]){const s=i[r]
s.showCollisionBoxes=t.showCollisionBoxes
const a=(t,i)=>{const r=s.reloadCallback
r&&(delete s.reloadCallback,s.parse(s.vectorTile,n.layerIndex,this.availableImages,n.actor,r)),e(t,i)}
"parsing"===s.status?s.reloadCallback=a:"done"===s.status&&(s.vectorTile?s.parse(s.vectorTile,this.layerIndex,this.availableImages,this.actor,a):a())}}abortTile(t,e){const i=this.loading,r=t.uid
i&&i[r]&&i[r].abort&&(i[r].abort(),delete i[r]),e()}removeTile(t,e){const i=this.loaded,r=t.uid
i&&i[r]&&delete i[r],e()}}class o{constructor(){this.loaded={}}loadTile(e,i){const{uid:r,encoding:n,rawImageData:s}=e,a=t.isImageBitmap(s)?this.getImageData(s):s,o=new t.DEMData(r,a,n)
this.loaded=this.loaded||{},this.loaded[r]=o,i(null,o)}getImageData(e){this.offscreenCanvas&&this.offscreenCanvasContext||(this.offscreenCanvas=new OffscreenCanvas(e.width,e.height),this.offscreenCanvasContext=this.offscreenCanvas.getContext("2d",{willReadFrequently:!0})),this.offscreenCanvas.width=e.width,this.offscreenCanvas.height=e.height,this.offscreenCanvasContext.drawImage(e,0,0,e.width,e.height)
const i=this.offscreenCanvasContext.getImageData(-1,-1,e.width+2,e.height+2)
return this.offscreenCanvasContext.clearRect(0,0,this.offscreenCanvas.width,this.offscreenCanvas.height),new t.RGBAImage({width:i.width,height:i.height},i.data)}removeTile(t){const e=this.loaded,i=t.uid
e&&e[i]&&delete e[i]}}function l(t,e){if(0!==t.length){c(t[0],e)
for(var i=1;i<t.length;i++)c(t[i],!e)}}function c(t,e){for(var i=0,r=0,n=0,s=t.length,a=s-1;n<s;a=n++){var o=(t[n][0]-t[a][0])*(t[a][1]+t[n][1]),l=i+o
r+=Math.abs(i)>=Math.abs(o)?i-l+o:o-l+i,i=l}i+r>=0!=!!e&&t.reverse()}var h=t.getDefaultExportFromCjs((function t(e,i){var r,n=e&&e.type
if("FeatureCollection"===n)for(r=0;r<e.features.length;r++)t(e.features[r],i)
else if("GeometryCollection"===n)for(r=0;r<e.geometries.length;r++)t(e.geometries[r],i)
else if("Feature"===n)t(e.geometry,i)
else if("Polygon"===n)l(e.coordinates,i)
else if("MultiPolygon"===n)for(r=0;r<e.coordinates.length;r++)l(e.coordinates[r],i)
return e}))
const u=t.vectorTile.VectorTileFeature.prototype.toGeoJSON
var d={exports:{}},p=t.pointGeometry,f=t.vectorTile.VectorTileFeature,m=g
function g(t,e){this.options=e||{},this.features=t,this.length=t.length}function _(t,e){this.id="number"==typeof t.id?t.id:void 0,this.type=t.type,this.rawGeometry=1===t.type?[t.geometry]:t.geometry,this.properties=t.tags,this.extent=e||4096}g.prototype.feature=function(t){return new _(this.features[t],this.options.extent)},_.prototype.loadGeometry=function(){var t=this.rawGeometry
this.geometry=[]
for(var e=0;e<t.length;e++){for(var i=t[e],r=[],n=0;n<i.length;n++)r.push(new p(i[n][0],i[n][1]))
this.geometry.push(r)}return this.geometry},_.prototype.bbox=function(){this.geometry||this.loadGeometry()
for(var t=this.geometry,e=1/0,i=-1/0,r=1/0,n=-1/0,s=0;s<t.length;s++)for(var a=t[s],o=0;o<a.length;o++){var l=a[o]
e=Math.min(e,l.x),i=Math.max(i,l.x),r=Math.min(r,l.y),n=Math.max(n,l.y)}return[e,r,i,n]},_.prototype.toGeoJSON=f.prototype.toGeoJSON
var y=t.pbf,x=m
function v(t){var e=new y
return function(t,e){for(var i in t.layers)e.writeMessage(3,b,t.layers[i])}(t,e),e.finish()}function b(t,e){var i
e.writeVarintField(15,t.version||1),e.writeStringField(1,t.name||""),e.writeVarintField(5,t.extent||4096)
var r={keys:[],values:[],keycache:{},valuecache:{}}
for(i=0;i<t.length;i++)r.feature=t.feature(i),e.writeMessage(2,w,r)
var n=r.keys
for(i=0;i<n.length;i++)e.writeStringField(3,n[i])
var s=r.values
for(i=0;i<s.length;i++)e.writeMessage(4,A,s[i])}function w(t,e){var i=t.feature
void 0!==i.id&&e.writeVarintField(1,i.id),e.writeMessage(2,T,t),e.writeVarintField(3,i.type),e.writeMessage(4,I,i)}function T(t,e){var i=t.feature,r=t.keys,n=t.values,s=t.keycache,a=t.valuecache
for(var o in i.properties){var l=i.properties[o],c=s[o]
if(null!==l){void 0===c&&(r.push(o),s[o]=c=r.length-1),e.writeVarint(c)
var h=typeof l
"string"!==h&&"boolean"!==h&&"number"!==h&&(l=JSON.stringify(l))
var u=h+":"+l,d=a[u]
void 0===d&&(n.push(l),a[u]=d=n.length-1),e.writeVarint(d)}}}function S(t,e){return(e<<3)+(7&t)}function E(t){return t<<1^t>>31}function I(t,e){for(var i=t.loadGeometry(),r=t.type,n=0,s=0,a=i.length,o=0;o<a;o++){var l=i[o],c=1
1===r&&(c=l.length),e.writeVarint(S(1,c))
for(var h=3===r?l.length-1:l.length,u=0;u<h;u++){1===u&&1!==r&&e.writeVarint(S(2,h-1))
var d=l[u].x-n,p=l[u].y-s
e.writeVarint(E(d)),e.writeVarint(E(p)),n+=d,s+=p}3===r&&e.writeVarint(S(7,1))}}function A(t,e){var i=typeof t
"string"===i?e.writeStringField(1,t):"boolean"===i?e.writeBooleanField(7,t):"number"===i&&(t%1!=0?e.writeDoubleField(3,t):t<0?e.writeSVarintField(6,t):e.writeVarintField(5,t))}d.exports=v,d.exports.fromVectorTileJs=v,d.exports.fromGeojsonVt=function(t,e){e=e||{}
var i={}
for(var r in t)i[r]=new x(t[r].features,e),i[r].name=r,i[r].version=e.version,i[r].extent=e.extent
return v({layers:i})},d.exports.GeoJSONWrapper=x
var M=t.getDefaultExportFromCjs(d.exports)
const C={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},P=Math.fround||(z=new Float32Array(1),t=>(z[0]=+t,z[0]))
var z
class k{constructor(t){this.options=Object.assign(Object.create(C),t),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){const{log:e,minZoom:i,maxZoom:r}=this.options
e&&console.time("total time")
const n=`prepare ${t.length} points`
e&&console.time(n),this.points=t
const s=[]
for(let o=0;o<t.length;o++){const e=t[o]
if(!e.geometry)continue
const[i,r]=e.geometry.coordinates,n=P(B(i)),a=P(R(r))
s.push(n,a,1/0,o,-1,1),this.options.reduce&&s.push(0)}let a=this.trees[r+1]=this._createTree(s)
e&&console.timeEnd(n)
for(let o=r;o>=i;o--){const t=+Date.now()
a=this.trees[o]=this._createTree(this._cluster(a,o)),e&&console.log("z%d: %d clusters in %dms",o,a.numItems,+Date.now()-t)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let i=((t[0]+180)%360+360)%360-180
const r=Math.max(-90,Math.min(90,t[1]))
let n=180===t[2]?180:((t[2]+180)%360+360)%360-180
const s=Math.max(-90,Math.min(90,t[3]))
if(t[2]-t[0]>=360)i=-180,n=180
else if(i>n){const t=this.getClusters([i,r,180,s],e),a=this.getClusters([-180,r,n,s],e)
return t.concat(a)}const a=this.trees[this._limitZoom(e)],o=a.range(B(i),R(s),B(n),R(r)),l=a.data,c=[]
for(const h of o){const t=this.stride*h
c.push(l[t+5]>1?D(l,t,this.clusterProps):this.points[l[t+3]])}return c}getChildren(t){const e=this._getOriginId(t),i=this._getOriginZoom(t),r="No cluster with the specified id.",n=this.trees[i]
if(!n)throw new Error(r)
const s=n.data
if(e*this.stride>=s.length)throw new Error(r)
const a=this.options.radius/(this.options.extent*Math.pow(2,i-1)),o=n.within(s[e*this.stride],s[e*this.stride+1],a),l=[]
for(const c of o){const e=c*this.stride
s[e+4]===t&&l.push(s[e+5]>1?D(s,e,this.clusterProps):this.points[s[e+3]])}if(0===l.length)throw new Error(r)
return l}getLeaves(t,e,i){const r=[]
return this._appendLeaves(r,t,e=e||10,i=i||0,0),r}getTile(t,e,i){const r=this.trees[this._limitZoom(t)],n=Math.pow(2,t),{extent:s,radius:a}=this.options,o=a/s,l=(i-o)/n,c=(i+1+o)/n,h={features:[]}
return this._addTileFeatures(r.range((e-o)/n,l,(e+1+o)/n,c),r.data,e,i,n,h),0===e&&this._addTileFeatures(r.range(1-o/n,l,1,c),r.data,n,i,n,h),e===n-1&&this._addTileFeatures(r.range(0,l,o/n,c),r.data,-1,i,n,h),h.features.length?h:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1
for(;e<=this.options.maxZoom;){const i=this.getChildren(t)
if(e++,1!==i.length)break
t=i[0].properties.cluster_id}return e}_appendLeaves(t,e,i,r,n){const s=this.getChildren(e)
for(const a of s){const e=a.properties
if(e&&e.cluster?n+e.point_count<=r?n+=e.point_count:n=this._appendLeaves(t,e.cluster_id,i,r,n):n<r?n++:t.push(a),t.length===i)break}return n}_createTree(e){const i=new t.KDBush(e.length/this.stride|0,this.options.nodeSize,Float32Array)
for(let t=0;t<e.length;t+=this.stride)i.add(e[t],e[t+1])
return i.finish(),i.data=e,i}_addTileFeatures(t,e,i,r,n,s){for(const a of t){const t=a*this.stride,o=e[t+5]>1
let l,c,h
if(o)l=L(e,t,this.clusterProps),c=e[t],h=e[t+1]
else{const i=this.points[e[t+3]]
l=i.properties
const[r,n]=i.geometry.coordinates
c=B(r),h=R(n)}const u={type:1,geometry:[[Math.round(this.options.extent*(c*n-i)),Math.round(this.options.extent*(h*n-r))]],tags:l}
let d
d=o||this.options.generateId?e[t+3]:this.points[e[t+3]].id,void 0!==d&&(u.id=d),s.features.push(u)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const{radius:i,extent:r,reduce:n,minPoints:s}=this.options,a=i/(r*Math.pow(2,e)),o=t.data,l=[],c=this.stride
for(let h=0;h<o.length;h+=c){if(o[h+2]<=e)continue
o[h+2]=e
const i=o[h],r=o[h+1],u=t.within(o[h],o[h+1],a),d=o[h+5]
let p=d
for(const t of u){const i=t*c
o[i+2]>e&&(p+=o[i+5])}if(p>d&&p>=s){let t,s=i*d,a=r*d,f=-1
const m=((h/c|0)<<5)+(e+1)+this.points.length
for(const i of u){const r=i*c
if(o[r+2]<=e)continue
o[r+2]=e
const l=o[r+5]
s+=o[r]*l,a+=o[r+1]*l,o[r+4]=m,n&&(t||(t=this._map(o,h,!0),f=this.clusterProps.length,this.clusterProps.push(t)),n(t,this._map(o,r)))}o[h+4]=m,l.push(s/p,a/p,1/0,m,-1,p),n&&l.push(f)}else{for(let t=0;t<c;t++)l.push(o[h+t])
if(p>1)for(const t of u){const i=t*c
if(!(o[i+2]<=e)){o[i+2]=e
for(let t=0;t<c;t++)l.push(o[i+t])}}}}return l}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e,i){if(t[e+5]>1){const r=this.clusterProps[t[e+6]]
return i?Object.assign({},r):r}const r=this.points[t[e+3]].properties,n=this.options.map(r)
return i&&n===r?Object.assign({},n):n}}function D(t,e,i){return{type:"Feature",id:t[e+3],properties:L(t,e,i),geometry:{type:"Point",coordinates:[(r=t[e],360*(r-.5)),F(t[e+1])]}}
var r}function L(t,e,i){const r=t[e+5],n=r>=1e4?`${Math.round(r/1e3)}k`:r>=1e3?Math.round(r/100)/10+"k":r,s=t[e+6],a=-1===s?{}:Object.assign({},i[s])
return Object.assign(a,{cluster:!0,cluster_id:t[e+3],point_count:r,point_count_abbreviated:n})}function B(t){return t/360+.5}function R(t){const e=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return i<0?0:i>1?1:i}function F(t){const e=(180-360*t)*Math.PI/180
return 360*Math.atan(Math.exp(e))/Math.PI-90}function O(t,e,i,r){for(var n,s=r,a=i-e>>1,o=i-e,l=t[e],c=t[e+1],h=t[i],u=t[i+1],d=e+3;d<i;d+=3){var p=U(t[d],t[d+1],l,c,h,u)
if(p>s)n=d,s=p
else if(p===s){var f=Math.abs(d-a)
f<o&&(n=d,o=f)}}s>r&&(n-e>3&&O(t,e,n,r),t[n+2]=s,i-n>3&&O(t,n,i,r))}function U(t,e,i,r,n,s){var a=n-i,o=s-r
if(0!==a||0!==o){var l=((t-i)*a+(e-r)*o)/(a*a+o*o)
l>1?(i=n,r=s):l>0&&(i+=a*l,r+=o*l)}return(a=t-i)*a+(o=e-r)*o}function V(t,e,i,r){var n={id:void 0===t?null:t,type:e,geometry:i,tags:r,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}
return function(t){var e=t.geometry,i=t.type
if("Point"===i||"MultiPoint"===i||"LineString"===i)N(t,e)
else if("Polygon"===i||"MultiLineString"===i)for(var r=0;r<e.length;r++)N(t,e[r])
else if("MultiPolygon"===i)for(r=0;r<e.length;r++)for(var n=0;n<e[r].length;n++)N(t,e[r][n])}(n),n}function N(t,e){for(var i=0;i<e.length;i+=3)t.minX=Math.min(t.minX,e[i]),t.minY=Math.min(t.minY,e[i+1]),t.maxX=Math.max(t.maxX,e[i]),t.maxY=Math.max(t.maxY,e[i+1])}function $(t,e,i,r){if(e.geometry){var n=e.geometry.coordinates,s=e.geometry.type,a=Math.pow(i.tolerance/((1<<i.maxZoom)*i.extent),2),o=[],l=e.id
if(i.promoteId?l=e.properties[i.promoteId]:i.generateId&&(l=r||0),"Point"===s)q(n,o)
else if("MultiPoint"===s)for(var c=0;c<n.length;c++)q(n[c],o)
else if("LineString"===s)j(n,o,a,!1)
else if("MultiLineString"===s){if(i.lineMetrics){for(c=0;c<n.length;c++)j(n[c],o=[],a,!1),t.push(V(l,"LineString",o,e.properties))
return}Z(n,o,a,!1)}else if("Polygon"===s)Z(n,o,a,!0)
else{if("MultiPolygon"!==s){if("GeometryCollection"===s){for(c=0;c<e.geometry.geometries.length;c++)$(t,{id:l,geometry:e.geometry.geometries[c],properties:e.properties},i,r)
return}throw new Error("Input data is not a valid GeoJSON object.")}for(c=0;c<n.length;c++){var h=[]
Z(n[c],h,a,!0),o.push(h)}}t.push(V(l,s,o,e.properties))}}function q(t,e){e.push(G(t[0])),e.push(X(t[1])),e.push(0)}function j(t,e,i,r){for(var n,s,a=0,o=0;o<t.length;o++){var l=G(t[o][0]),c=X(t[o][1])
e.push(l),e.push(c),e.push(0),o>0&&(a+=r?(n*c-l*s)/2:Math.sqrt(Math.pow(l-n,2)+Math.pow(c-s,2))),n=l,s=c}var h=e.length-3
e[2]=1,O(e,0,h,i),e[h+2]=1,e.size=Math.abs(a),e.start=0,e.end=e.size}function Z(t,e,i,r){for(var n=0;n<t.length;n++){var s=[]
j(t[n],s,i,r),e.push(s)}}function G(t){return t/360+.5}function X(t){var e=Math.sin(t*Math.PI/180),i=.5-.25*Math.log((1+e)/(1-e))/Math.PI
return i<0?0:i>1?1:i}function W(t,e,i,r,n,s,a,o){if(r/=e,s>=(i/=e)&&a<r)return t
if(a<i||s>=r)return null
for(var l=[],c=0;c<t.length;c++){var h=t[c],u=h.geometry,d=h.type,p=0===n?h.minX:h.minY,f=0===n?h.maxX:h.maxY
if(p>=i&&f<r)l.push(h)
else if(!(f<i||p>=r)){var m=[]
if("Point"===d||"MultiPoint"===d)H(u,m,i,r,n)
else if("LineString"===d)K(u,m,i,r,n,!1,o.lineMetrics)
else if("MultiLineString"===d)J(u,m,i,r,n,!1)
else if("Polygon"===d)J(u,m,i,r,n,!0)
else if("MultiPolygon"===d)for(var g=0;g<u.length;g++){var _=[]
J(u[g],_,i,r,n,!0),_.length&&m.push(_)}if(m.length){if(o.lineMetrics&&"LineString"===d){for(g=0;g<m.length;g++)l.push(V(h.id,d,m[g],h.tags))
continue}"LineString"!==d&&"MultiLineString"!==d||(1===m.length?(d="LineString",m=m[0]):d="MultiLineString"),"Point"!==d&&"MultiPoint"!==d||(d=3===m.length?"Point":"MultiPoint"),l.push(V(h.id,d,m,h.tags))}}}return l.length?l:null}function H(t,e,i,r,n){for(var s=0;s<t.length;s+=3){var a=t[s+n]
a>=i&&a<=r&&(e.push(t[s]),e.push(t[s+1]),e.push(t[s+2]))}}function K(t,e,i,r,n,s,a){for(var o,l,c=Y(t),h=0===n?tt:et,u=t.start,d=0;d<t.length-3;d+=3){var p=t[d],f=t[d+1],m=t[d+2],g=t[d+3],_=t[d+4],y=0===n?p:f,x=0===n?g:_,v=!1
a&&(o=Math.sqrt(Math.pow(p-g,2)+Math.pow(f-_,2))),y<i?x>i&&(l=h(c,p,f,g,_,i),a&&(c.start=u+o*l)):y>r?x<r&&(l=h(c,p,f,g,_,r),a&&(c.start=u+o*l)):Q(c,p,f,m),x<i&&y>=i&&(l=h(c,p,f,g,_,i),v=!0),x>r&&y<=r&&(l=h(c,p,f,g,_,r),v=!0),!s&&v&&(a&&(c.end=u+o*l),e.push(c),c=Y(t)),a&&(u+=o)}var b=t.length-3
p=t[b],f=t[b+1],m=t[b+2],(y=0===n?p:f)>=i&&y<=r&&Q(c,p,f,m),b=c.length-3,s&&b>=3&&(c[b]!==c[0]||c[b+1]!==c[1])&&Q(c,c[0],c[1],c[2]),c.length&&e.push(c)}function Y(t){var e=[]
return e.size=t.size,e.start=t.start,e.end=t.end,e}function J(t,e,i,r,n,s){for(var a=0;a<t.length;a++)K(t[a],e,i,r,n,s,!1)}function Q(t,e,i,r){t.push(e),t.push(i),t.push(r)}function tt(t,e,i,r,n,s){var a=(s-e)/(r-e)
return t.push(s),t.push(i+(n-i)*a),t.push(1),a}function et(t,e,i,r,n,s){var a=(s-i)/(n-i)
return t.push(e+(r-e)*a),t.push(s),t.push(1),a}function it(t,e){for(var i=[],r=0;r<t.length;r++){var n,s=t[r],a=s.type
if("Point"===a||"MultiPoint"===a||"LineString"===a)n=rt(s.geometry,e)
else if("MultiLineString"===a||"Polygon"===a){n=[]
for(var o=0;o<s.geometry.length;o++)n.push(rt(s.geometry[o],e))}else if("MultiPolygon"===a)for(n=[],o=0;o<s.geometry.length;o++){for(var l=[],c=0;c<s.geometry[o].length;c++)l.push(rt(s.geometry[o][c],e))
n.push(l)}i.push(V(s.id,a,n,s.tags))}return i}function rt(t,e){var i=[]
i.size=t.size,void 0!==t.start&&(i.start=t.start,i.end=t.end)
for(var r=0;r<t.length;r+=3)i.push(t[r]+e,t[r+1],t[r+2])
return i}function nt(t,e){if(t.transformed)return t
var i,r,n,s=1<<t.z,a=t.x,o=t.y
for(i=0;i<t.features.length;i++){var l=t.features[i],c=l.geometry,h=l.type
if(l.geometry=[],1===h)for(r=0;r<c.length;r+=2)l.geometry.push(st(c[r],c[r+1],e,s,a,o))
else for(r=0;r<c.length;r++){var u=[]
for(n=0;n<c[r].length;n+=2)u.push(st(c[r][n],c[r][n+1],e,s,a,o))
l.geometry.push(u)}}return t.transformed=!0,t}function st(t,e,i,r,n,s){return[Math.round(i*(t*r-n)),Math.round(i*(e*r-s))]}function at(t,e,i,r,n){for(var s=e===n.maxZoom?0:n.tolerance/((1<<e)*n.extent),a={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:i,y:r,z:e,transformed:!1,minX:2,minY:1,maxX:-1,maxY:0},o=0;o<t.length;o++){a.numFeatures++,ot(a,t[o],s,n)
var l=t[o].minX,c=t[o].minY,h=t[o].maxX,u=t[o].maxY
l<a.minX&&(a.minX=l),c<a.minY&&(a.minY=c),h>a.maxX&&(a.maxX=h),u>a.maxY&&(a.maxY=u)}return a}function ot(t,e,i,r){var n=e.geometry,s=e.type,a=[]
if("Point"===s||"MultiPoint"===s)for(var o=0;o<n.length;o+=3)a.push(n[o]),a.push(n[o+1]),t.numPoints++,t.numSimplified++
else if("LineString"===s)lt(a,n,t,i,!1,!1)
else if("MultiLineString"===s||"Polygon"===s)for(o=0;o<n.length;o++)lt(a,n[o],t,i,"Polygon"===s,0===o)
else if("MultiPolygon"===s)for(var l=0;l<n.length;l++){var c=n[l]
for(o=0;o<c.length;o++)lt(a,c[o],t,i,!0,0===o)}if(a.length){var h=e.tags||null
if("LineString"===s&&r.lineMetrics){for(var u in h={},e.tags)h[u]=e.tags[u]
h.mapbox_clip_start=n.start/n.size,h.mapbox_clip_end=n.end/n.size}var d={geometry:a,type:"Polygon"===s||"MultiPolygon"===s?3:"LineString"===s||"MultiLineString"===s?2:1,tags:h}
null!==e.id&&(d.id=e.id),t.features.push(d)}}function lt(t,e,i,r,n,s){var a=r*r
if(r>0&&e.size<(n?a:r))i.numPoints+=e.length/3
else{for(var o=[],l=0;l<e.length;l+=3)(0===r||e[l+2]>a)&&(i.numSimplified++,o.push(e[l]),o.push(e[l+1])),i.numPoints++
n&&function(t,e){for(var i=0,r=0,n=t.length,s=n-2;r<n;s=r,r+=2)i+=(t[r]-t[s])*(t[r+1]+t[s+1])
if(i>0===e)for(r=0,n=t.length;r<n/2;r+=2){var a=t[r],o=t[r+1]
t[r]=t[n-2-r],t[r+1]=t[n-1-r],t[n-2-r]=a,t[n-1-r]=o}}(o,s),t.push(o)}}function ct(t,e){var i=(e=this.options=function(t,e){for(var i in e)t[i]=e[i]
return t}(Object.create(this.options),e)).debug
if(i&&console.time("preprocess data"),e.maxZoom<0||e.maxZoom>24)throw new Error("maxZoom should be in the 0-24 range")
if(e.promoteId&&e.generateId)throw new Error("promoteId and generateId cannot be used together.")
var r=function(t,e){var i=[]
if("FeatureCollection"===t.type)for(var r=0;r<t.features.length;r++)$(i,t.features[r],e,r)
else $(i,"Feature"===t.type?t:{geometry:t},e)
return i}(t,e)
this.tiles={},this.tileCoords=[],i&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",e.indexMaxZoom,e.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),r=function(t,e){var i=e.buffer/e.extent,r=t,n=W(t,1,-1-i,i,0,-1,2,e),s=W(t,1,1-i,2+i,0,-1,2,e)
return(n||s)&&(r=W(t,1,-i,1+i,0,-1,2,e)||[],n&&(r=it(n,1).concat(r)),s&&(r=r.concat(it(s,-1)))),r}(r,e),r.length&&this.splitTile(r,0,0,0),i&&(r.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function ht(t,e,i){return 32*((1<<t)*i+e)+t}function ut(t,e){return e?t.properties[e]:t.id}function dt(t,e){if(null==t)return!0
if("Feature"===t.type)return null!=ut(t,e)
if("FeatureCollection"===t.type){const i=new Set
for(const r of t.features){const t=ut(r,e)
if(null==t)return!1
if(i.has(t))return!1
i.add(t)}return!0}return!1}function pt(t,e){const i=new Map
if(null==t);else if("Feature"===t.type)i.set(ut(t,e),t)
else for(const r of t.features)i.set(ut(r,e),r)
return i}function ft(e,i){const r=e.tileID.canonical
if(!this._geoJSONIndex)return i(null,null)
const n=this._geoJSONIndex.getTile(r.z,r.x,r.y)
if(!n)return i(null,null)
const s=new class{constructor(e){this.layers={_geojsonTileLayer:this},this.name="_geojsonTileLayer",this.extent=t.EXTENT,this.length=e.length,this._features=e}feature(e){return new class{constructor(e){this._feature=e,this.extent=t.EXTENT,this.type=e.type,this.properties=e.tags,"id"in e&&!isNaN(e.id)&&(this.id=parseInt(e.id,10))}loadGeometry(){if(1===this._feature.type){const e=[]
for(const i of this._feature.geometry)e.push([new t.Point(i[0],i[1])])
return e}{const e=[]
for(const i of this._feature.geometry){const r=[]
for(const e of i)r.push(new t.Point(e[0],e[1]))
e.push(r)}return e}}toGeoJSON(t,e,i){return u.call(this,t,e,i)}}(this._features[e])}}(n.features)
let a=M(s)
0===a.byteOffset&&a.byteLength===a.buffer.byteLength||(a=new Uint8Array(a)),i(null,{vectorTile:s,rawData:a.buffer})}ct.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,tolerance:3,extent:4096,buffer:64,lineMetrics:!1,promoteId:null,generateId:!1,debug:0},ct.prototype.splitTile=function(t,e,i,r,n,s,a){for(var o=[t,e,i,r],l=this.options,c=l.debug;o.length;){r=o.pop(),i=o.pop(),e=o.pop(),t=o.pop()
var h=1<<e,u=ht(e,i,r),d=this.tiles[u]
if(!d&&(c>1&&console.time("creation"),d=this.tiles[u]=at(t,e,i,r,l),this.tileCoords.push({z:e,x:i,y:r}),c)){c>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",e,i,r,d.numFeatures,d.numPoints,d.numSimplified),console.timeEnd("creation"))
var p="z"+e
this.stats[p]=(this.stats[p]||0)+1,this.total++}if(d.source=t,n){if(e===l.maxZoom||e===n)continue
var f=1<<n-e
if(i!==Math.floor(s/f)||r!==Math.floor(a/f))continue}else if(e===l.indexMaxZoom||d.numPoints<=l.indexMaxPoints)continue
if(d.source=null,0!==t.length){c>1&&console.time("clipping")
var m,g,_,y,x,v,b=.5*l.buffer/l.extent,w=.5-b,T=.5+b,S=1+b
m=g=_=y=null,x=W(t,h,i-b,i+T,0,d.minX,d.maxX,l),v=W(t,h,i+w,i+S,0,d.minX,d.maxX,l),t=null,x&&(m=W(x,h,r-b,r+T,1,d.minY,d.maxY,l),g=W(x,h,r+w,r+S,1,d.minY,d.maxY,l),x=null),v&&(_=W(v,h,r-b,r+T,1,d.minY,d.maxY,l),y=W(v,h,r+w,r+S,1,d.minY,d.maxY,l),v=null),c>1&&console.timeEnd("clipping"),o.push(m||[],e+1,2*i,2*r),o.push(g||[],e+1,2*i,2*r+1),o.push(_||[],e+1,2*i+1,2*r),o.push(y||[],e+1,2*i+1,2*r+1)}}},ct.prototype.getTile=function(t,e,i){var r=this.options,n=r.extent,s=r.debug
if(t<0||t>24)return null
var a=1<<t,o=ht(t,e=(e%a+a)%a,i)
if(this.tiles[o])return nt(this.tiles[o],n)
s>1&&console.log("drilling down to z%d-%d-%d",t,e,i)
for(var l,c=t,h=e,u=i;!l&&c>0;)c--,h=Math.floor(h/2),u=Math.floor(u/2),l=this.tiles[ht(c,h,u)]
return l&&l.source?(s>1&&console.log("found parent tile z%d-%d-%d",c,h,u),s>1&&console.time("drilling down"),this.splitTile(l.source,c,h,u,t,e,i),s>1&&console.timeEnd("drilling down"),this.tiles[o]?nt(this.tiles[o],n):null):null}
class mt extends a{constructor(e,i,r,n){super(e,i,r,ft),this._dataUpdateable=new Map,this.loadGeoJSON=(e,i)=>{const{promoteId:r}=e
if(e.request)return t.getJSON(e.request,((t,e,n,s)=>{this._dataUpdateable=dt(e,r)?pt(e,r):void 0,i(t,e,n,s)}))
if("string"==typeof e.data)try{const t=JSON.parse(e.data)
this._dataUpdateable=dt(t,r)?pt(t,r):void 0,i(null,t)}catch(t){i(new Error(`Input data given to '${e.source}' is not a valid GeoJSON object.`))}else e.dataDiff?this._dataUpdateable?(function(t,e,i){var r,n,s,a
if(e.removeAll&&t.clear(),e.remove)for(const o of e.remove)t.delete(o)
if(e.add)for(const o of e.add){const e=ut(o,i)
null!=e&&t.set(e,o)}if(e.update)for(const o of e.update){let e=t.get(o.id)
if(null==e)continue
const i=!o.removeAllProperties&&((null===(r=o.removeProperties)||void 0===r?void 0:r.length)>0||(null===(n=o.addOrUpdateProperties)||void 0===n?void 0:n.length)>0)
if((o.newGeometry||o.removeAllProperties||i)&&(e={...e},t.set(o.id,e),i&&(e.properties={...e.properties})),o.newGeometry&&(e.geometry=o.newGeometry),o.removeAllProperties)e.properties={}
else if((null===(s=o.removeProperties)||void 0===s?void 0:s.length)>0)for(const t of o.removeProperties)Object.prototype.hasOwnProperty.call(e.properties,t)&&delete e.properties[t]
if((null===(a=o.addOrUpdateProperties)||void 0===a?void 0:a.length)>0)for(const{key:t,value:r}of o.addOrUpdateProperties)e.properties[t]=r}}(this._dataUpdateable,e.dataDiff,r),i(null,{type:"FeatureCollection",features:Array.from(this._dataUpdateable.values())})):i(new Error(`Cannot update existing geojson data in ${e.source}`)):i(new Error(`Input data given to '${e.source}' is not a valid GeoJSON object.`))
return{cancel:()=>{}}},n&&(this.loadGeoJSON=n)}loadData(e,i){var r
null===(r=this._pendingRequest)||void 0===r||r.cancel(),this._pendingCallback&&this._pendingCallback(null,{abandoned:!0})
const n=!!(e&&e.request&&e.request.collectResourceTiming)&&new t.RequestPerformance(e.request)
this._pendingCallback=i,this._pendingRequest=this.loadGeoJSON(e,((r,s)=>{if(delete this._pendingCallback,delete this._pendingRequest,r||!s)return i(r)
if("object"!=typeof s)return i(new Error(`Input data given to '${e.source}' is not a valid GeoJSON object.`))
{h(s,!0)
try{if(e.filter){const i=t.createExpression(e.filter,{type:"boolean","property-type":"data-driven",overridable:!1,transition:!1})
if("error"===i.result)throw new Error(i.value.map((t=>`${t.key}: ${t.message}`)).join(", "))
const r=s.features.filter((t=>i.value.evaluate({zoom:0},t)))
s={type:"FeatureCollection",features:r}}this._geoJSONIndex=e.cluster?new k(function(e){let{superclusterOptions:i,clusterProperties:r}=e
if(!r||!i)return i
const n={},s={},a={accumulated:null,zoom:0},o={properties:null},l=Object.keys(r)
for(const c of l){const[e,i]=r[c],a=t.createExpression(i),o=t.createExpression("string"==typeof e?[e,["accumulated"],["get",c]]:e)
n[c]=a.value,s[c]=o.value}return i.map=t=>{o.properties=t
const e={}
for(const i of l)e[i]=n[i].evaluate(a,o)
return e},i.reduce=(t,e)=>{o.properties=e
for(const i of l)a.accumulated=t[i],t[i]=s[i].evaluate(a,o)},i}(e)).load(s.features):function(t,e){return new ct(t,e)}(s,e.geojsonVtOptions)}catch(r){return i(r)}this.loaded={}
const a={}
if(n){const t=n.finish()
t&&(a.resourceTiming={},a.resourceTiming[e.source]=JSON.parse(JSON.stringify(t)))}i(null,a)}}))}reloadTile(t,e){const i=this.loaded
return i&&i[t.uid]?super.reloadTile(t,e):this.loadTile(t,e)}removeSource(t,e){this._pendingCallback&&this._pendingCallback(null,{abandoned:!0}),e()}getClusterExpansionZoom(t,e){try{e(null,this._geoJSONIndex.getClusterExpansionZoom(t.clusterId))}catch(t){e(t)}}getClusterChildren(t,e){try{e(null,this._geoJSONIndex.getChildren(t.clusterId))}catch(t){e(t)}}getClusterLeaves(t,e){try{e(null,this._geoJSONIndex.getLeaves(t.clusterId,t.limit,t.offset))}catch(t){e(t)}}}class gt{constructor(e){this.self=e,this.actor=new t.Actor(e,this),this.layerIndexes={},this.availableImages={},this.workerSourceTypes={vector:a,geojson:mt},this.workerSources={},this.demWorkerSources={},this.self.registerWorkerSource=(t,e)=>{if(this.workerSourceTypes[t])throw new Error(`Worker source with name "${t}" already registered.`)
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
return e||(e=[]),e}getLayerIndex(t){let i=this.layerIndexes[t]
return i||(i=this.layerIndexes[t]=new e),i}getWorkerSource(t,e,i){if(this.workerSources[t]||(this.workerSources[t]={}),this.workerSources[t][e]||(this.workerSources[t][e]={}),!this.workerSources[t][e][i]){const r={send:(e,i,r)=>{this.actor.send(e,i,r,t)}}
this.workerSources[t][e][i]=new this.workerSourceTypes[e](r,this.getLayerIndex(t),this.getAvailableImages(t))}return this.workerSources[t][e][i]}getDEMWorkerSource(t,e){return this.demWorkerSources[t]||(this.demWorkerSources[t]={}),this.demWorkerSources[t][e]||(this.demWorkerSources[t][e]=new o),this.demWorkerSources[t][e]}}return t.isWorker()&&(self.worker=new gt(self)),gt})),r(0,(function(t){var e="3.0.1"
class i{static testProp(t){if(!i.docStyle)return t[0]
for(let e=0;e<t.length;e++)if(t[e]in i.docStyle)return t[e]
return t[0]}static create(t,e,i){const r=window.document.createElement(t)
return void 0!==e&&(r.className=e),i&&i.appendChild(r),r}static createNS(t,e){return window.document.createElementNS(t,e)}static disableDrag(){i.docStyle&&i.selectProp&&(i.userSelect=i.docStyle[i.selectProp],i.docStyle[i.selectProp]="none")}static enableDrag(){i.docStyle&&i.selectProp&&(i.docStyle[i.selectProp]=i.userSelect)}static setTransform(t,e){t.style[i.transformProp]=e}static addEventListener(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
t.addEventListener(e,i,"passive"in r?r:r.capture)}static removeEventListener(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
t.removeEventListener(e,i,"passive"in r?r:r.capture)}static suppressClickInternal(t){t.preventDefault(),t.stopPropagation(),window.removeEventListener("click",i.suppressClickInternal,!0)}static suppressClick(){window.addEventListener("click",i.suppressClickInternal,!0),window.setTimeout((()=>{window.removeEventListener("click",i.suppressClickInternal,!0)}),0)}static mousePos(e,i){const r=e.getBoundingClientRect()
return new t.Point(i.clientX-r.left-e.clientLeft,i.clientY-r.top-e.clientTop)}static touchPos(e,i){const r=e.getBoundingClientRect(),n=[]
for(let s=0;s<i.length;s++)n.push(new t.Point(i[s].clientX-r.left-e.clientLeft,i[s].clientY-r.top-e.clientTop))
return n}static mouseButton(t){return t.button}static remove(t){t.parentNode&&t.parentNode.removeChild(t)}}i.docStyle="undefined"!=typeof window&&window.document&&window.document.documentElement.style,i.selectProp=i.testProp(["userSelect","MozUserSelect","WebkitUserSelect","msUserSelect"]),i.transformProp=i.testProp(["transform","WebkitTransform"])
const r={supported:!1,testSupport:function(t){!a&&s&&(o?l(t):n=t)}}
let n,s,a=!1,o=!1
function l(t){const e=t.createTexture()
t.bindTexture(t.TEXTURE_2D,e)
try{if(t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,s),t.isContextLost())return
r.supported=!0}catch(t){}t.deleteTexture(e),a=!0}var c
"undefined"!=typeof document&&(s=document.createElement("img"),s.onload=function(){n&&l(n),n=null,o=!0},s.onerror=function(){a=!0,n=null},s.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="),function(e){let i,n,s,a
e.resetRequestQueue=()=>{i=[],n=0,s=0,a={}},e.addThrottleControl=t=>{const e=s++
return a[e]=t,e},e.removeThrottleControl=t=>{delete a[t],c()},e.getImage=function(t,e){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
r.supported&&(t.headers||(t.headers={}),t.headers.accept="image/webp,*/*")
const a={requestParameters:t,supportImageRefresh:s,callback:e,cancelled:!1,completed:!1,cancel:()=>{a.completed||a.cancelled||(a.cancelled=!0,a.innerRequest&&(a.innerRequest.cancel(),n--),c())}}
return i.push(a),c(),a}
const o=e=>{const{requestParameters:i,supportImageRefresh:r,callback:n}=e
return t.extend(i,{type:"image"}),(!1!==r||t.isWorker()||t.getProtocolAction(i.url)||i.headers&&!Object.keys(i.headers).reduce(((t,e)=>t&&"accept"===e),!0)?t.makeRequest:h)(i,((t,i,r,s)=>{l(e,n,t,i,r,s)}))},l=(e,i,r,s,a,o)=>{r?i(r):s instanceof HTMLImageElement||s instanceof ImageBitmap?i(null,s):s&&((e,i)=>{"function"==typeof createImageBitmap?t.arrayBufferToImageBitmap(e,i):t.arrayBufferToImage(e,i)})(s,((t,e)=>{null!=t?i(t):null!=e&&i(null,e,{cacheControl:a,expires:o})})),e.cancelled||(e.completed=!0,n--,c())},c=()=>{const e=(()=>{const t=Object.keys(a)
let e=!1
if(t.length>0)for(const i of t)if(e=a[i](),e)break
return e})()?t.config.MAX_PARALLEL_IMAGE_REQUESTS_PER_FRAME:t.config.MAX_PARALLEL_IMAGE_REQUESTS
for(let t=n;t<e&&i.length>0;t++){const e=i.shift()
if(e.cancelled){t--
continue}const r=o(e)
n++,e.innerRequest=r}},h=(e,i)=>{const r=new Image,n=e.url
let s=!1
const a=e.credentials
return a&&"include"===a?r.crossOrigin="use-credentials":(a&&"same-origin"===a||!t.sameOrigin(n))&&(r.crossOrigin="anonymous"),r.fetchPriority="high",r.onload=()=>{i(null,r),r.onerror=r.onload=null},r.onerror=()=>{s||i(new Error("Could not load image. Please make sure to use a supported image type such as PNG or JPEG. Note that SVGs are not supported.")),r.onerror=r.onload=null},r.src=n,{cancel:()=>{s=!0,r.src=""}}}}(c||(c={})),c.resetRequestQueue()
var h,u=c
!function(t){t.Glyphs="Glyphs",t.Image="Image",t.Source="Source",t.SpriteImage="SpriteImage",t.SpriteJSON="SpriteJSON",t.Style="Style",t.Tile="Tile",t.Unknown="Unknown"}(h||(h={}))
class d{constructor(t){this._transformRequestFn=t}transformRequest(t,e){return this._transformRequestFn&&this._transformRequestFn(t,e)||{url:t}}normalizeSpriteURL(t,e,i){const r=function(t){const e=t.match(p)
if(!e)throw new Error(`Unable to parse URL "${t}"`)
return{protocol:e[1],authority:e[2],path:e[3]||"/",params:e[4]?e[4].split("&"):[]}}(t)
return r.path+=`${e}${i}`,function(t){const e=t.params.length?`?${t.params.join("&")}`:""
return`${t.protocol}://${t.authority}${t.path}${e}`}(r)}setTransformRequest(t){this._transformRequestFn=t}}const p=/^(\w+):\/\/([^/?]*)(\/[^?]+)?\??(.+)?/
function f(e){var i=new t.ARRAY_TYPE(3)
return i[0]=e[0],i[1]=e[1],i[2]=e[2],i}var m,g=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t}
m=new t.ARRAY_TYPE(3),t.ARRAY_TYPE!=Float32Array&&(m[0]=0,m[1]=0,m[2]=0)
var _=function(t){var e=t[0],i=t[1]
return e*e+i*i}
function y(t){const e=[]
if("string"==typeof t)e.push({id:"default",url:t})
else if(t&&t.length>0){const i=[]
for(const{id:r,url:n}of t){const t=`${r}${n}`;-1===i.indexOf(t)&&(i.push(t),e.push({id:r,url:n}))}}return e}function x(e,i,r,n,s){if(n)return void e(n)
if(s!==Object.values(i).length||s!==Object.values(r).length)return
const a={}
for(const o in i){a[o]={}
const e=t.exported.getImageCanvasContext(r[o]),n=i[o]
for(const t in n){const{width:i,height:r,x:s,y:l,sdf:c,pixelRatio:h,stretchX:u,stretchY:d,content:p}=n[t]
a[o][t]={data:null,pixelRatio:h,sdf:c,stretchX:u,stretchY:d,content:p,spriteData:{width:i,height:r,x:s,y:l,context:e}}}}e(null,a)}!function(){var e=new t.ARRAY_TYPE(2)
t.ARRAY_TYPE!=Float32Array&&(e[0]=0,e[1]=0)}()
class v{constructor(t,e,i,r){this.context=t,this.format=i,this.texture=t.gl.createTexture(),this.update(e,r)}update(e,i,r){const{width:n,height:s}=e,a=!(this.size&&this.size[0]===n&&this.size[1]===s||r),{context:o}=this,{gl:l}=o
if(this.useMipmap=Boolean(i&&i.useMipmap),l.bindTexture(l.TEXTURE_2D,this.texture),o.pixelStoreUnpackFlipY.set(!1),o.pixelStoreUnpack.set(1),o.pixelStoreUnpackPremultiplyAlpha.set(this.format===l.RGBA&&(!i||!1!==i.premultiply)),a)this.size=[n,s],e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.isImageBitmap(e)?l.texImage2D(l.TEXTURE_2D,0,this.format,this.format,l.UNSIGNED_BYTE,e):l.texImage2D(l.TEXTURE_2D,0,this.format,n,s,0,this.format,l.UNSIGNED_BYTE,e.data)
else{const{x:i,y:a}=r||{x:0,y:0}
e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||e instanceof ImageData||t.isImageBitmap(e)?l.texSubImage2D(l.TEXTURE_2D,0,i,a,l.RGBA,l.UNSIGNED_BYTE,e):l.texSubImage2D(l.TEXTURE_2D,0,i,a,n,s,l.RGBA,l.UNSIGNED_BYTE,e.data)}this.useMipmap&&this.isSizePowerOfTwo()&&l.generateMipmap(l.TEXTURE_2D)}bind(t,e,i){const{context:r}=this,{gl:n}=r
n.bindTexture(n.TEXTURE_2D,this.texture),i!==n.LINEAR_MIPMAP_NEAREST||this.isSizePowerOfTwo()||(i=n.LINEAR),t!==this.filter&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,i||t),this.filter=t),e!==this.wrap&&(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,e),this.wrap=e)}isSizePowerOfTwo(){return this.size[0]===this.size[1]&&Math.log(this.size[0])/Math.LN2%1==0}destroy(){const{gl:t}=this.context
t.deleteTexture(this.texture),this.texture=null}}function b(t){const{userImage:e}=t
return!!(e&&e.render&&e.render())&&(t.data.replace(new Uint8Array(e.data.buffer)),!0)}class w extends t.Evented{constructor(){super(),this.images={},this.updatedImages={},this.callbackDispatchedThisFrame={},this.loaded=!1,this.requestors=[],this.patterns={},this.atlasImage=new t.RGBAImage({width:1,height:1}),this.dirty=!0}isLoaded(){return this.loaded}setLoaded(t){if(this.loaded!==t&&(this.loaded=t,t)){for(const{ids:t,callback:e}of this.requestors)this._notify(t,e)
this.requestors=[]}}getImage(e){const i=this.images[e]
if(i&&!i.data&&i.spriteData){const e=i.spriteData
i.data=new t.RGBAImage({width:e.width,height:e.height},e.context.getImageData(e.x,e.y,e.width,e.height).data),i.spriteData=null}return i}addImage(t,e){if(this.images[t])throw new Error(`Image id ${t} already exist, use updateImage instead`)
this._validate(t,e)&&(this.images[t]=e)}_validate(e,i){let r=!0
const n=i.data||i.spriteData
return this._validateStretch(i.stretchX,n&&n.width)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "stretchX" value`))),r=!1),this._validateStretch(i.stretchY,n&&n.height)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "stretchY" value`))),r=!1),this._validateContent(i.content,i)||(this.fire(new t.ErrorEvent(new Error(`Image "${e}" has invalid "content" value`))),r=!1),r}_validateStretch(t,e){if(!t)return!0
let i=0
for(const r of t){if(r[0]<i||r[1]<r[0]||e<r[1])return!1
i=r[1]}return!0}_validateContent(t,e){if(!t)return!0
if(4!==t.length)return!1
const i=e.spriteData,r=i&&i.width||e.data.width,n=i&&i.height||e.data.height
return!(t[0]<0||r<t[0]||t[1]<0||n<t[1]||t[2]<0||r<t[2]||t[3]<0||n<t[3]||t[2]<t[0]||t[3]<t[1])}updateImage(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
const r=this.getImage(t)
if(i&&(r.data.width!==e.data.width||r.data.height!==e.data.height))throw new Error(`size mismatch between old image (${r.data.width}x${r.data.height}) and new image (${e.data.width}x${e.data.height}).`)
e.version=r.version+1,this.images[t]=e,this.updatedImages[t]=!0}removeImage(t){const e=this.images[t]
delete this.images[t],delete this.patterns[t],e.userImage&&e.userImage.onRemove&&e.userImage.onRemove()}listImages(){return Object.keys(this.images)}getImages(t,e){let i=!0
if(!this.isLoaded())for(const r of t)this.images[r]||(i=!1)
this.isLoaded()||i?this._notify(t,e):this.requestors.push({ids:t,callback:e})}_notify(e,i){const r={}
for(const n of e){let e=this.getImage(n)
e||(this.fire(new t.Event("styleimagemissing",{id:n})),e=this.getImage(n)),e?r[n]={data:e.data.clone(),pixelRatio:e.pixelRatio,sdf:e.sdf,version:e.version,stretchX:e.stretchX,stretchY:e.stretchY,content:e.content,hasRenderCallback:Boolean(e.userImage&&e.userImage.render)}:t.warnOnce(`Image "${n}" could not be loaded. Please make sure you have added the image with map.addImage() or a "sprite" property in your style. You can provide missing images by listening for the "styleimagemissing" map event.`)}i(null,r)}getPixelSize(){const{width:t,height:e}=this.atlasImage
return{width:t,height:e}}getPattern(e){const i=this.patterns[e],r=this.getImage(e)
if(!r)return null
if(i&&i.position.version===r.version)return i.position
if(i)i.position.version=r.version
else{const i={w:r.data.width+2,h:r.data.height+2,x:0,y:0},n=new t.ImagePosition(i,r)
this.patterns[e]={bin:i,position:n}}return this._updatePatternAtlas(),this.patterns[e].position}bind(t){const e=t.gl
this.atlasTexture?this.dirty&&(this.atlasTexture.update(this.atlasImage),this.dirty=!1):this.atlasTexture=new v(t,this.atlasImage,e.RGBA),this.atlasTexture.bind(e.LINEAR,e.CLAMP_TO_EDGE)}_updatePatternAtlas(){const e=[]
for(const t in this.patterns)e.push(this.patterns[t].bin)
const{w:i,h:r}=t.potpack(e),n=this.atlasImage
n.resize({width:i||1,height:r||1})
for(const s in this.patterns){const{bin:e}=this.patterns[s],i=e.x+1,r=e.y+1,a=this.getImage(s).data,o=a.width,l=a.height
t.RGBAImage.copy(a,n,{x:0,y:0},{x:i,y:r},{width:o,height:l}),t.RGBAImage.copy(a,n,{x:0,y:l-1},{x:i,y:r-1},{width:o,height:1}),t.RGBAImage.copy(a,n,{x:0,y:0},{x:i,y:r+l},{width:o,height:1}),t.RGBAImage.copy(a,n,{x:o-1,y:0},{x:i-1,y:r},{width:1,height:l}),t.RGBAImage.copy(a,n,{x:0,y:0},{x:i+o,y:r},{width:1,height:l})}this.dirty=!0}beginFrame(){this.callbackDispatchedThisFrame={}}dispatchRenderCallbacks(e){for(const i of e){if(this.callbackDispatchedThisFrame[i])continue
this.callbackDispatchedThisFrame[i]=!0
const e=this.getImage(i)
e||t.warnOnce(`Image with ID: "${i}" was not found`),b(e)&&this.updateImage(i,e)}}}const T=1e20
function S(t,e,i,r,n,s,a,o,l){for(let c=e;c<e+r;c++)E(t,i*s+c,s,n,a,o,l)
for(let c=i;c<i+n;c++)E(t,c*s+e,1,r,a,o,l)}function E(t,e,i,r,n,s,a){s[0]=0,a[0]=-T,a[1]=T,n[0]=t[e]
for(let o=1,l=0,c=0;o<r;o++){n[o]=t[e+o*i]
const r=o*o
do{const t=s[l]
c=(n[o]-n[t]+r-t*t)/(o-t)/2}while(c<=a[l]&&--l>-1)
l++,s[l]=o,a[l]=c,a[l+1]=T}for(let o=0,l=0;o<r;o++){for(;a[l+1]<o;)l++
const r=s[l],c=o-r
t[e+o*i]=n[r]+c*c}}class I{constructor(t,e){this.requestManager=t,this.localIdeographFontFamily=e,this.entries={}}setURL(t){this.url=t}getGlyphs(e,i){const r=[]
for(const t in e)for(const i of e[t])r.push({stack:t,id:i})
t.asyncAll(r,((t,e)=>{let{stack:i,id:r}=t,n=this.entries[i]
n||(n=this.entries[i]={glyphs:{},requests:{},ranges:{}})
let s=n.glyphs[r]
if(void 0!==s)return void e(null,{stack:i,id:r,glyph:s})
if(s=this._tinySDF(n,i,r),s)return n.glyphs[r]=s,void e(null,{stack:i,id:r,glyph:s})
const a=Math.floor(r/256)
if(256*a>65535)return void e(new Error("glyphs > 65535 not supported"))
if(n.ranges[a])return void e(null,{stack:i,id:r,glyph:s})
if(!this.url)return void e(new Error("glyphsUrl is not set"))
let o=n.requests[a]
o||(o=n.requests[a]=[],I.loadGlyphRange(i,a,this.url,this.requestManager,((t,e)=>{if(e){for(const t in e)this._doesCharSupportLocalGlyph(+t)||(n.glyphs[+t]=e[+t])
n.ranges[a]=!0}for(const i of o)i(t,e)
delete n.requests[a]}))),o.push(((t,n)=>{t?e(t):n&&e(null,{stack:i,id:r,glyph:n[r]||null})}))}),((t,e)=>{if(t)i(t)
else if(e){const t={}
for(const{stack:i,id:r,glyph:n}of e)(t[i]||(t[i]={}))[r]=n&&{id:n.id,bitmap:n.bitmap.clone(),metrics:n.metrics}
i(null,t)}}))}_doesCharSupportLocalGlyph(e){return!!this.localIdeographFontFamily&&(t.unicodeBlockLookup["CJK Unified Ideographs"](e)||t.unicodeBlockLookup["Hangul Syllables"](e)||t.unicodeBlockLookup.Hiragana(e)||t.unicodeBlockLookup.Katakana(e))}_tinySDF(e,i,r){const n=this.localIdeographFontFamily
if(!n)return
if(!this._doesCharSupportLocalGlyph(r))return
let s=e.tinySDF
if(!s){let t="400";/bold/i.test(i)?t="900":/medium/i.test(i)?t="500":/light/i.test(i)&&(t="200"),s=e.tinySDF=new I.TinySDF({fontSize:24,buffer:3,radius:8,cutoff:.25,fontFamily:n,fontWeight:t})}const a=s.draw(String.fromCharCode(r))
return{id:r,bitmap:new t.AlphaImage({width:a.width||30,height:a.height||30},a.data),metrics:{width:a.glyphWidth||24,height:a.glyphHeight||24,left:a.glyphLeft||0,top:a.glyphTop-27||-8,advance:a.glyphAdvance||24}}}}I.loadGlyphRange=function(e,i,r,n,s){const a=256*i,o=a+255,l=n.transformRequest(r.replace("{fontstack}",e).replace("{range}",`${a}-${o}`),h.Glyphs)
t.getArrayBuffer(l,((e,i)=>{if(e)s(e)
else if(i){const e={}
for(const r of t.parseGlyphPbf(i))e[r.id]=r
s(null,e)}}))},I.TinySDF=class{constructor(){let{fontSize:t=24,buffer:e=3,radius:i=8,cutoff:r=.25,fontFamily:n="sans-serif",fontWeight:s="normal",fontStyle:a="normal"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.buffer=e,this.cutoff=r,this.radius=i
const o=this.size=t+4*e,l=this._createCanvas(o),c=this.ctx=l.getContext("2d",{willReadFrequently:!0})
c.font=`${a} ${s} ${t}px ${n}`,c.textBaseline="alphabetic",c.textAlign="left",c.fillStyle="black",this.gridOuter=new Float64Array(o*o),this.gridInner=new Float64Array(o*o),this.f=new Float64Array(o),this.z=new Float64Array(o+1),this.v=new Uint16Array(o)}_createCanvas(t){const e=document.createElement("canvas")
return e.width=e.height=t,e}draw(t){const{width:e,actualBoundingBoxAscent:i,actualBoundingBoxDescent:r,actualBoundingBoxLeft:n,actualBoundingBoxRight:s}=this.ctx.measureText(t),a=Math.ceil(i),o=Math.max(0,Math.min(this.size-this.buffer,Math.ceil(s-n))),l=Math.min(this.size-this.buffer,a+Math.ceil(r)),c=o+2*this.buffer,h=l+2*this.buffer,u=Math.max(c*h,0),d=new Uint8ClampedArray(u),p={data:d,width:c,height:h,glyphWidth:o,glyphHeight:l,glyphTop:a,glyphLeft:0,glyphAdvance:e}
if(0===o||0===l)return p
const{ctx:f,buffer:m,gridInner:g,gridOuter:_}=this
f.clearRect(m,m,o,l),f.fillText(t,m,m+a)
const y=f.getImageData(m,m,o,l)
_.fill(T,0,u),g.fill(0,0,u)
for(let x=0;x<l;x++)for(let t=0;t<o;t++){const e=y.data[4*(x*o+t)+3]/255
if(0===e)continue
const i=(x+m)*c+t+m
if(1===e)_[i]=0,g[i]=T
else{const t=.5-e
_[i]=t>0?t*t:0,g[i]=t<0?t*t:0}}S(_,0,0,c,h,c,this.f,this.v,this.z),S(g,m,m,o,l,c,this.f,this.v,this.z)
for(let x=0;x<u;x++){const t=Math.sqrt(_[x])-Math.sqrt(g[x])
d[x]=Math.round(255-255*(t/this.radius+this.cutoff))}return p}}
class A{constructor(){this.specification=t.v8Spec.light.position}possiblyEvaluate(e,i){return t.sphericalToCartesian(e.expression.evaluate(i))}interpolate(e,i,r){return{x:t.interpolate.number(e.x,i.x,r),y:t.interpolate.number(e.y,i.y,r),z:t.interpolate.number(e.z,i.z,r)}}}let M,C
class P extends t.Evented{constructor(e){super(),M=M||new t.Properties({anchor:new t.DataConstantProperty(t.v8Spec.light.anchor),position:new A,color:new t.DataConstantProperty(t.v8Spec.light.color),intensity:new t.DataConstantProperty(t.v8Spec.light.intensity)}),this._transitionable=new t.Transitionable(M),this.setLight(e),this._transitioning=this._transitionable.untransitioned()}getLight(){return this._transitionable.serialize()}setLight(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!this._validate(t.validateLight,e,i))for(const t in e){const i=e[t]
t.endsWith("-transition")?this._transitionable.setTransition(t.slice(0,-11),i):this._transitionable.setValue(t,i)}}updateTransitions(t){this._transitioning=this._transitionable.transitioned(t,this._transitioning)}hasTransition(){return this._transitioning.hasTransition()}recalculate(t){this.properties=this._transitioning.possiblyEvaluate(t)}_validate(e,i,r){return(!r||!1!==r.validate)&&t.emitValidationErrors(this,e.call(t.validateStyle,t.extend({value:i,style:{glyphs:!0,sprite:!0},styleSpec:t.v8Spec})))}}class z{constructor(t,e){this.width=t,this.height=e,this.nextRow=0,this.data=new Uint8Array(this.width*this.height),this.dashEntry={}}getDash(t,e){const i=t.join(",")+String(e)
return this.dashEntry[i]||(this.dashEntry[i]=this.addDash(t,e)),this.dashEntry[i]}getDashRanges(t,e,i){const r=[]
let n=t.length%2==1?-t[t.length-1]*i:0,s=t[0]*i,a=!0
r.push({left:n,right:s,isDash:a,zeroLength:0===t[0]})
let o=t[0]
for(let l=1;l<t.length;l++){a=!a
const e=t[l]
n=o*i,o+=e,s=o*i,r.push({left:n,right:s,isDash:a,zeroLength:0===e})}return r}addRoundDash(t,e,i){const r=e/2
for(let n=-i;n<=i;n++){const e=this.width*(this.nextRow+i+n)
let s=0,a=t[s]
for(let o=0;o<this.width;o++){o/a.right>1&&(a=t[++s])
const l=Math.abs(o-a.left),c=Math.abs(o-a.right),h=Math.min(l,c)
let u
const d=n/i*(r+1)
if(a.isDash){const t=r-Math.abs(d)
u=Math.sqrt(h*h+t*t)}else u=r-Math.sqrt(h*h+d*d)
this.data[e+o]=Math.max(0,Math.min(255,u+128))}}}addRegularDash(t){for(let a=t.length-1;a>=0;--a){const e=t[a],i=t[a+1]
e.zeroLength?t.splice(a,1):i&&i.isDash===e.isDash&&(i.left=e.left,t.splice(a,1))}const e=t[0],i=t[t.length-1]
e.isDash===i.isDash&&(e.left=i.left-this.width,i.right=e.right+this.width)
const r=this.width*this.nextRow
let n=0,s=t[n]
for(let a=0;a<this.width;a++){a/s.right>1&&(s=t[++n])
const e=Math.abs(a-s.left),i=Math.abs(a-s.right),o=Math.min(e,i)
this.data[r+a]=Math.max(0,Math.min(255,(s.isDash?o:-o)+128))}}addDash(e,i){const r=i?7:0,n=2*r+1
if(this.nextRow+n>this.height)return t.warnOnce("LineAtlas out of space"),null
let s=0
for(let t=0;t<e.length;t++)s+=e[t]
if(0!==s){const t=this.width/s,n=this.getDashRanges(e,this.width,t)
i?this.addRoundDash(n,t,r):this.addRegularDash(n)}const a={y:(this.nextRow+r+.5)/this.height,height:2*r/this.height,width:s}
return this.nextRow+=n,this.dirty=!0,a}bind(t){const e=t.gl
this.texture?(e.bindTexture(e.TEXTURE_2D,this.texture),this.dirty&&(this.dirty=!1,e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.width,this.height,e.ALPHA,e.UNSIGNED_BYTE,this.data))):(this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.ALPHA,this.width,this.height,0,e.ALPHA,e.UNSIGNED_BYTE,this.data))}}class k{constructor(t,e,i){this.workerPool=t,this.actors=[],this.currentActor=0,this.id=i
const r=this.workerPool.acquire(i)
for(let n=0;n<r.length;n++){const t=new k.Actor(r[n],e,i)
t.name=`Worker ${n}`,this.actors.push(t)}if(!this.actors.length)throw new Error("No actors found")}broadcast(e,i,r){t.asyncAll(this.actors,((t,r)=>{t.send(e,i,r)}),r=r||function(){})}getActor(){return this.currentActor=(this.currentActor+1)%this.actors.length,this.actors[this.currentActor]}remove(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.actors.forEach((t=>{t.remove()})),this.actors=[],t&&this.workerPool.release(this.id)}}function D(e,i,r){const n=function(i,n){if(i)return r(i)
if(n){const i=t.pick(t.extend(n,e),["tiles","minzoom","maxzoom","attribution","bounds","scheme","tileSize","encoding"])
n.vector_layers&&(i.vectorLayers=n.vector_layers,i.vectorLayerIds=i.vectorLayers.map((t=>t.id))),r(null,i)}}
return e.url?t.getJSON(i.transformRequest(e.url,h.Source),n):t.exported.frame((()=>n(null,e)))}k.Actor=t.Actor
class L{constructor(t,e){t&&(e?this.setSouthWest(t).setNorthEast(e):Array.isArray(t)&&(4===t.length?this.setSouthWest([t[0],t[1]]).setNorthEast([t[2],t[3]]):this.setSouthWest(t[0]).setNorthEast(t[1])))}setNorthEast(e){return this._ne=e instanceof t.LngLat?new t.LngLat(e.lng,e.lat):t.LngLat.convert(e),this}setSouthWest(e){return this._sw=e instanceof t.LngLat?new t.LngLat(e.lng,e.lat):t.LngLat.convert(e),this}extend(e){const i=this._sw,r=this._ne
let n,s
if(e instanceof t.LngLat)n=e,s=e
else{if(!(e instanceof L))return Array.isArray(e)?4===e.length||e.every(Array.isArray)?this.extend(L.convert(e)):this.extend(t.LngLat.convert(e)):e&&("lng"in e||"lon"in e)&&"lat"in e?this.extend(t.LngLat.convert(e)):this
if(n=e._sw,s=e._ne,!n||!s)return this}return i||r?(i.lng=Math.min(n.lng,i.lng),i.lat=Math.min(n.lat,i.lat),r.lng=Math.max(s.lng,r.lng),r.lat=Math.max(s.lat,r.lat)):(this._sw=new t.LngLat(n.lng,n.lat),this._ne=new t.LngLat(s.lng,s.lat)),this}getCenter(){return new t.LngLat((this._sw.lng+this._ne.lng)/2,(this._sw.lat+this._ne.lat)/2)}getSouthWest(){return this._sw}getNorthEast(){return this._ne}getNorthWest(){return new t.LngLat(this.getWest(),this.getNorth())}getSouthEast(){return new t.LngLat(this.getEast(),this.getSouth())}getWest(){return this._sw.lng}getSouth(){return this._sw.lat}getEast(){return this._ne.lng}getNorth(){return this._ne.lat}toArray(){return[this._sw.toArray(),this._ne.toArray()]}toString(){return`LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`}isEmpty(){return!(this._sw&&this._ne)}contains(e){const{lng:i,lat:r}=t.LngLat.convert(e)
let n=this._sw.lng<=i&&i<=this._ne.lng
return this._sw.lng>this._ne.lng&&(n=this._sw.lng>=i&&i>=this._ne.lng),this._sw.lat<=r&&r<=this._ne.lat&&n}static convert(t){return t instanceof L?t:t?new L(t):t}static fromLngLat(e){const i=360*(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)/40075017,r=i/Math.cos(Math.PI/180*e.lat)
return new L(new t.LngLat(e.lng-r,e.lat-i),new t.LngLat(e.lng+r,e.lat+i))}}class B{constructor(t,e,i){this.bounds=L.convert(this.validateBounds(t)),this.minzoom=e||0,this.maxzoom=i||24}validateBounds(t){return Array.isArray(t)&&4===t.length?[Math.max(-180,t[0]),Math.max(-90,t[1]),Math.min(180,t[2]),Math.min(90,t[3])]:[-180,-90,180,90]}contains(e){const i=Math.pow(2,e.z),r=Math.floor(t.mercatorXfromLng(this.bounds.getWest())*i),n=Math.floor(t.mercatorYfromLat(this.bounds.getNorth())*i),s=Math.ceil(t.mercatorXfromLng(this.bounds.getEast())*i),a=Math.ceil(t.mercatorYfromLat(this.bounds.getSouth())*i)
return e.x>=r&&e.x<s&&e.y>=n&&e.y<a}}class R extends t.Evented{constructor(e,i,r,n){if(super(),this.id=e,this.dispatcher=r,this.type="vector",this.minzoom=0,this.maxzoom=22,this.scheme="xyz",this.tileSize=512,this.reparseOverscaled=!0,this.isTileClipped=!0,this._loaded=!1,t.extend(this,t.pick(i,["url","scheme","tileSize","promoteId"])),this._options=t.extend({type:"vector"},i),this._collectResourceTiming=i.collectResourceTiming,512!==this.tileSize)throw new Error("vector tile sources must have a tileSize of 512")
this.setEventedParent(n)}load(){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=D(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,this.map.style.sourceCaches[this.id].clearTiles(),e?this.fire(new t.ErrorEvent(e)):i&&(t.extend(this,i),i.bounds&&(this.tileBounds=new B(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))}))}loaded(){return this._loaded}hasTile(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)}onAdd(t){this.map=t,this.load()}setSourceProperty(t){this._tileJSONRequest&&this._tileJSONRequest.cancel(),t(),this.load()}setTiles(t){return this.setSourceProperty((()=>{this._options.tiles=t})),this}setUrl(t){return this.setSourceProperty((()=>{this.url=t,this._options.url=t})),this}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)}serialize(){return t.extend({},this._options)}loadTile(t,e){const i=t.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme),r={request:this.map._requestManager.transformRequest(i,h.Tile),uid:t.uid,tileID:t.tileID,zoom:t.tileID.overscaledZ,tileSize:this.tileSize*t.tileID.overscaleFactor(),type:this.type,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId}
function n(i,r){return delete t.request,t.aborted?e(null):i&&404!==i.status?e(i):(r&&r.resourceTiming&&(t.resourceTiming=r.resourceTiming),this.map._refreshExpiredTiles&&r&&t.setExpiryData(r),t.loadVectorData(r,this.map.painter),e(null),void(t.reloadCallback&&(this.loadTile(t,t.reloadCallback),t.reloadCallback=null)))}r.request.collectResourceTiming=this._collectResourceTiming,t.actor&&"expired"!==t.state?"loading"===t.state?t.reloadCallback=e:t.request=t.actor.send("reloadTile",r,n.bind(this)):(t.actor=this.dispatcher.getActor(),t.request=t.actor.send("loadTile",r,n.bind(this)))}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.actor&&t.actor.send("abortTile",{uid:t.uid,type:this.type,source:this.id},void 0)}unloadTile(t){t.unloadVectorData(),t.actor&&t.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id},void 0)}hasTransition(){return!1}}class F extends t.Evented{constructor(e,i,r,n){super(),this.id=e,this.dispatcher=r,this.setEventedParent(n),this.type="raster",this.minzoom=0,this.maxzoom=22,this.roundZoom=!0,this.scheme="xyz",this.tileSize=512,this._loaded=!1,this._options=t.extend({type:"raster"},i),t.extend(this,t.pick(i,["url","scheme","tileSize"]))}load(){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this._tileJSONRequest=D(this._options,this.map._requestManager,((e,i)=>{this._tileJSONRequest=null,this._loaded=!0,e?this.fire(new t.ErrorEvent(e)):i&&(t.extend(this,i),i.bounds&&(this.tileBounds=new B(i.bounds,this.minzoom,this.maxzoom)),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})))}))}loaded(){return this._loaded}onAdd(t){this.map=t,this.load()}onRemove(){this._tileJSONRequest&&(this._tileJSONRequest.cancel(),this._tileJSONRequest=null)}serialize(){return t.extend({},this._options)}hasTile(t){return!this.tileBounds||this.tileBounds.contains(t.canonical)}loadTile(t,e){const i=t.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme)
t.request=u.getImage(this.map._requestManager.transformRequest(i,h.Tile),((i,r,n)=>{if(delete t.request,t.aborted)t.state="unloaded",e(null)
else if(i)t.state="errored",e(i)
else if(r){this.map._refreshExpiredTiles&&n&&t.setExpiryData(n)
const i=this.map.painter.context,s=i.gl
t.texture=this.map.painter.getTileTexture(r.width),t.texture?t.texture.update(r,{useMipmap:!0}):(t.texture=new v(i,r,s.RGBA,{useMipmap:!0}),t.texture.bind(s.LINEAR,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),i.extTextureFilterAnisotropic&&s.texParameterf(s.TEXTURE_2D,i.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT,i.extTextureFilterAnisotropicMax)),t.state="loaded",e(null)}}),this.map._refreshExpiredTiles)}abortTile(t,e){t.request&&(t.request.cancel(),delete t.request),e()}unloadTile(t,e){t.texture&&this.map.painter.saveTileTexture(t.texture),e()}hasTransition(){return!1}}class O extends F{constructor(e,i,r,n){super(e,i,r,n),this.type="raster-dem",this.maxzoom=22,this._options=t.extend({type:"raster-dem"},i),this.encoding=i.encoding||"mapbox"}serialize(){return{type:"raster-dem",url:this.url,tileSize:this.tileSize,tiles:this.tiles,bounds:this.bounds,encoding:this.encoding}}loadTile(e,i){const r=e.tileID.canonical.url(this.tiles,this.map.getPixelRatio(),this.scheme)
function n(t,r){t&&(e.state="errored",i(t)),r&&(e.dem=r,e.needsHillshadePrepare=!0,e.needsTerrainPrepare=!0,e.state="loaded",i(null))}e.request=u.getImage(this.map._requestManager.transformRequest(r,h.Tile),function(r,s){if(delete e.request,e.aborted)e.state="unloaded",i(null)
else if(r)e.state="errored",i(r)
else if(s){this.map._refreshExpiredTiles&&e.setExpiryData(s),delete s.cacheControl,delete s.expires
const i=t.isImageBitmap(s)&&(null==C&&(C="undefined"!=typeof OffscreenCanvas&&new OffscreenCanvas(1,1).getContext("2d")&&"function"==typeof createImageBitmap),C)?s:t.exported.getImageData(s,1),r={uid:e.uid,coord:e.tileID,source:this.id,rawImageData:i,encoding:this.encoding}
e.actor&&"expired"!==e.state||(e.actor=this.dispatcher.getActor(),e.actor.send("loadDEMTile",r,n.bind(this)))}}.bind(this),this.map._refreshExpiredTiles),e.neighboringTiles=this._getNeighboringTiles(e.tileID)}_getNeighboringTiles(e){const i=e.canonical,r=Math.pow(2,i.z),n=(i.x-1+r)%r,s=0===i.x?e.wrap-1:e.wrap,a=(i.x+1+r)%r,o=i.x+1===r?e.wrap+1:e.wrap,l={}
return l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,o,i.z,a,i.y).key]={backfilled:!1},i.y>0&&(l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y-1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,o,i.z,a,i.y-1).key]={backfilled:!1}),i.y+1<r&&(l[new t.OverscaledTileID(e.overscaledZ,s,i.z,n,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,e.wrap,i.z,i.x,i.y+1).key]={backfilled:!1},l[new t.OverscaledTileID(e.overscaledZ,o,i.z,a,i.y+1).key]={backfilled:!1}),l}unloadTile(t){t.demTexture&&this.map.painter.saveTileTexture(t.demTexture),t.fbo&&(t.fbo.destroy(),delete t.fbo),t.dem&&delete t.dem,delete t.neighboringTiles,t.state="unloaded",t.actor&&t.actor.send("removeDEMTile",{uid:t.uid,source:this.id})}}class U extends t.Evented{constructor(e,i,r,n){super(),this.id=e,this.type="geojson",this.minzoom=0,this.maxzoom=18,this.tileSize=512,this.isTileClipped=!0,this.reparseOverscaled=!0,this._removed=!1,this._pendingLoads=0,this.actor=r.getActor(),this.setEventedParent(n),this._data=i.data,this._options=t.extend({},i),this._collectResourceTiming=i.collectResourceTiming,void 0!==i.maxzoom&&(this.maxzoom=i.maxzoom),i.type&&(this.type=i.type),i.attribution&&(this.attribution=i.attribution),this.promoteId=i.promoteId
const s=t.EXTENT/this.tileSize
this.workerOptions=t.extend({source:this.id,cluster:i.cluster||!1,geojsonVtOptions:{buffer:(void 0!==i.buffer?i.buffer:128)*s,tolerance:(void 0!==i.tolerance?i.tolerance:.375)*s,extent:t.EXTENT,maxZoom:this.maxzoom,lineMetrics:i.lineMetrics||!1,generateId:i.generateId||!1},superclusterOptions:{maxZoom:void 0!==i.clusterMaxZoom?i.clusterMaxZoom:this.maxzoom-1,minPoints:Math.max(2,i.clusterMinPoints||2),extent:t.EXTENT,radius:(i.clusterRadius||50)*s,log:!1,generateId:i.generateId||!1},clusterProperties:i.clusterProperties,filter:i.filter},i.workerOptions),"string"==typeof this.promoteId&&(this.workerOptions.promoteId=this.promoteId)}load(){this._updateWorkerData()}onAdd(t){this.map=t,this.load()}setData(t){return this._data=t,this._updateWorkerData(),this}updateData(t){return this._updateWorkerData(t),this}setClusterOptions(t){return this.workerOptions.cluster=t.cluster,t&&(void 0!==t.clusterRadius&&(this.workerOptions.superclusterOptions.radius=t.clusterRadius),void 0!==t.clusterMaxZoom&&(this.workerOptions.superclusterOptions.maxZoom=t.clusterMaxZoom)),this._updateWorkerData(),this}getClusterExpansionZoom(t,e){return this.actor.send("geojson.getClusterExpansionZoom",{clusterId:t,source:this.id},e),this}getClusterChildren(t,e){return this.actor.send("geojson.getClusterChildren",{clusterId:t,source:this.id},e),this}getClusterLeaves(t,e,i,r){return this.actor.send("geojson.getClusterLeaves",{source:this.id,clusterId:t,limit:e,offset:i},r),this}_updateWorkerData(e){const i=t.extend({},this.workerOptions)
e?i.dataDiff=e:"string"==typeof this._data?(i.request=this.map._requestManager.transformRequest(t.exported.resolveURL(this._data),h.Source),i.request.collectResourceTiming=this._collectResourceTiming):i.data=JSON.stringify(this._data),this._pendingLoads++,this.fire(new t.Event("dataloading",{dataType:"source"})),this.actor.send(`${this.type}.loadData`,i,((e,i)=>{if(this._pendingLoads--,this._removed||i&&i.abandoned)return void this.fire(new t.Event("dataabort",{dataType:"source"}))
let r=null
if(i&&i.resourceTiming&&i.resourceTiming[this.id]&&(r=i.resourceTiming[this.id].slice(0)),e)return void this.fire(new t.ErrorEvent(e))
const n={dataType:"source"}
this._collectResourceTiming&&r&&r.length>0&&t.extend(n,{resourceTiming:r}),this.fire(new t.Event("data",{...n,sourceDataType:"metadata"})),this.fire(new t.Event("data",{...n,sourceDataType:"content"}))}))}loaded(){return 0===this._pendingLoads}loadTile(t,e){const i=t.actor?"reloadTile":"loadTile"
t.actor=this.actor
const r={type:this.type,uid:t.uid,tileID:t.tileID,zoom:t.tileID.overscaledZ,maxZoom:this.maxzoom,tileSize:this.tileSize,source:this.id,pixelRatio:this.map.getPixelRatio(),showCollisionBoxes:this.map.showCollisionBoxes,promoteId:this.promoteId}
t.request=this.actor.send(i,r,((r,n)=>(delete t.request,t.unloadVectorData(),t.aborted?e(null):r?e(r):(t.loadVectorData(n,this.map.painter,"reloadTile"===i),e(null)))))}abortTile(t){t.request&&(t.request.cancel(),delete t.request),t.aborted=!0}unloadTile(t){t.unloadVectorData(),this.actor.send("removeTile",{uid:t.uid,type:this.type,source:this.id})}onRemove(){this._removed=!0,this.actor.send("removeSource",{type:this.type,source:this.id})}serialize(){return t.extend({},this._options,{type:this.type,data:this._data})}hasTransition(){return!1}}var V=t.createLayout([{name:"a_pos",type:"Int16",components:2},{name:"a_texture_pos",type:"Int16",components:2}])
class N extends t.Evented{constructor(t,e,i,r){super(),this.id=t,this.dispatcher=i,this.coordinates=e.coordinates,this.type="image",this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.tiles={},this._loaded=!1,this.setEventedParent(r),this.options=e}load(e,i){this._loaded=!1,this.fire(new t.Event("dataloading",{dataType:"source"})),this.url=this.options.url,this._request=u.getImage(this.map._requestManager.transformRequest(this.url,h.Image),((r,n)=>{this._request=null,this._loaded=!0,r?this.fire(new t.ErrorEvent(r)):n&&(this.image=n,e&&(this.coordinates=e),i&&i(),this._finishLoading())}))}loaded(){return this._loaded}updateImage(t){return t.url?(this._request&&(this._request.cancel(),this._request=null),this.options.url=t.url,this.load(t.coordinates,(()=>{this.texture=null})),this):this}_finishLoading(){this.map&&(this.setCoordinates(this.coordinates),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"metadata"})))}onAdd(t){this.map=t,this.load()}onRemove(){this._request&&(this._request.cancel(),this._request=null)}setCoordinates(e){this.coordinates=e
const i=e.map(t.MercatorCoordinate.fromLngLat)
this.tileID=function(e){let i=1/0,r=1/0,n=-1/0,s=-1/0
for(const t of e)i=Math.min(i,t.x),r=Math.min(r,t.y),n=Math.max(n,t.x),s=Math.max(s,t.y)
const a=Math.max(n-i,s-r),o=Math.max(0,Math.floor(-Math.log(a)/Math.LN2)),l=Math.pow(2,o)
return new t.CanonicalTileID(o,Math.floor((i+n)/2*l),Math.floor((r+s)/2*l))}(i),this.minzoom=this.maxzoom=this.tileID.z
const r=i.map((t=>this.tileID.getTilePoint(t)._round()))
return this._boundsArray=new t.RasterBoundsArray,this._boundsArray.emplaceBack(r[0].x,r[0].y,0,0),this._boundsArray.emplaceBack(r[1].x,r[1].y,t.EXTENT,0),this._boundsArray.emplaceBack(r[3].x,r[3].y,0,t.EXTENT),this._boundsArray.emplaceBack(r[2].x,r[2].y,t.EXTENT,t.EXTENT),this.boundsBuffer&&(this.boundsBuffer.destroy(),delete this.boundsBuffer),this.fire(new t.Event("data",{dataType:"source",sourceDataType:"content"})),this}prepare(){if(0===Object.keys(this.tiles).length||!this.image)return
const e=this.map.painter.context,i=e.gl
this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,V.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture||(this.texture=new v(e,this.image,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE))
let r=!1
for(const t in this.tiles){const e=this.tiles[t]
"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture,r=!0)}r&&this.fire(new t.Event("data",{dataType:"source",sourceDataType:"idle",sourceId:this.id}))}loadTile(t,e){this.tileID&&this.tileID.equals(t.tileID.canonical)?(this.tiles[String(t.tileID.wrap)]=t,t.buckets={},e(null)):(t.state="errored",e(null))}serialize(){return{type:"image",url:this.options.url,coordinates:this.coordinates}}hasTransition(){return!1}}class $ extends N{constructor(t,e,i,r){super(t,e,i,r),this.roundZoom=!0,this.type="video",this.options=e}load(){this._loaded=!1
const e=this.options
this.urls=[]
for(const t of e.urls)this.urls.push(this.map._requestManager.transformRequest(t,h.Source).url)
t.getVideo(this.urls,((e,i)=>{this._loaded=!0,e?this.fire(new t.ErrorEvent(e)):i&&(this.video=i,this.video.loop=!0,this.video.addEventListener("playing",(()=>{this.map.triggerRepaint()})),this.map&&this.video.play(),this._finishLoading())}))}pause(){this.video&&this.video.pause()}play(){this.video&&this.video.play()}seek(e){if(this.video){const i=this.video.seekable
e<i.start(0)||e>i.end(0)?this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${this.id}`,null,`Playback for this video can be set only between the ${i.start(0)} and ${i.end(0)}-second mark.`))):this.video.currentTime=e}}getVideo(){return this.video}onAdd(t){this.map||(this.map=t,this.load(),this.video&&(this.video.play(),this.setCoordinates(this.coordinates)))}prepare(){if(0===Object.keys(this.tiles).length||this.video.readyState<2)return
const e=this.map.painter.context,i=e.gl
this.boundsBuffer||(this.boundsBuffer=e.createVertexBuffer(this._boundsArray,V.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?this.video.paused||(this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE),i.texSubImage2D(i.TEXTURE_2D,0,0,0,i.RGBA,i.UNSIGNED_BYTE,this.video)):(this.texture=new v(e,this.video,i.RGBA),this.texture.bind(i.LINEAR,i.CLAMP_TO_EDGE))
let r=!1
for(const t in this.tiles){const e=this.tiles[t]
"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture,r=!0)}r&&this.fire(new t.Event("data",{dataType:"source",sourceDataType:"idle",sourceId:this.id}))}serialize(){return{type:"video",urls:this.urls,coordinates:this.coordinates}}hasTransition(){return this.video&&!this.video.paused}}class q extends N{constructor(e,i,r,n){super(e,i,r,n),i.coordinates?Array.isArray(i.coordinates)&&4===i.coordinates.length&&!i.coordinates.some((t=>!Array.isArray(t)||2!==t.length||t.some((t=>"number"!=typeof t))))||this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'"coordinates" property must be an array of 4 longitude/latitude array pairs'))):this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'missing required property "coordinates"'))),i.animate&&"boolean"!=typeof i.animate&&this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'optional "animate" property must be a boolean value'))),i.canvas?"string"==typeof i.canvas||i.canvas instanceof HTMLCanvasElement||this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'"canvas" must be either a string representing the ID of the canvas element from which to read, or an HTMLCanvasElement instance'))):this.fire(new t.ErrorEvent(new t.ValidationError(`sources.${e}`,null,'missing required property "canvas"'))),this.options=i,this.animate=void 0===i.animate||i.animate}load(){this._loaded=!0,this.canvas||(this.canvas=this.options.canvas instanceof HTMLCanvasElement?this.options.canvas:document.getElementById(this.options.canvas)),this.width=this.canvas.width,this.height=this.canvas.height,this._hasInvalidDimensions()?this.fire(new t.ErrorEvent(new Error("Canvas dimensions cannot be less than or equal to zero."))):(this.play=function(){this._playing=!0,this.map.triggerRepaint()},this.pause=function(){this._playing&&(this.prepare(),this._playing=!1)},this._finishLoading())}getCanvas(){return this.canvas}onAdd(t){this.map=t,this.load(),this.canvas&&this.animate&&this.play()}onRemove(){this.pause()}prepare(){let e=!1
if(this.canvas.width!==this.width&&(this.width=this.canvas.width,e=!0),this.canvas.height!==this.height&&(this.height=this.canvas.height,e=!0),this._hasInvalidDimensions())return
if(0===Object.keys(this.tiles).length)return
const i=this.map.painter.context,r=i.gl
this.boundsBuffer||(this.boundsBuffer=i.createVertexBuffer(this._boundsArray,V.members)),this.boundsSegments||(this.boundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)),this.texture?(e||this._playing)&&this.texture.update(this.canvas,{premultiply:!0}):this.texture=new v(i,this.canvas,r.RGBA,{premultiply:!0})
let n=!1
for(const t in this.tiles){const e=this.tiles[t]
"loaded"!==e.state&&(e.state="loaded",e.texture=this.texture,n=!0)}n&&this.fire(new t.Event("data",{dataType:"source",sourceDataType:"idle",sourceId:this.id}))}serialize(){return{type:"canvas",coordinates:this.coordinates}}hasTransition(){return this._playing}_hasInvalidDimensions(){for(const t of[this.canvas.width,this.canvas.height])if(isNaN(t)||t<=0)return!0
return!1}}const j={vector:R,raster:F,"raster-dem":O,geojson:U,video:$,image:N,canvas:q}
function Z(e,i){const r=t.create()
return t.translate(r,r,[1,1,0]),t.scale(r,r,[.5*e.width,.5*e.height,1]),t.multiply(r,r,e.calculatePosMatrix(i.toUnwrapped()))}function G(t,e,i,r,n,s){const a=function(t,e,i){if(t)for(const r of t){const t=e[r]
if(t&&t.source===i&&"fill-extrusion"===t.type)return!0}else for(const r in e){const t=e[r]
if(t.source===i&&"fill-extrusion"===t.type)return!0}return!1}(n&&n.layers,e,t.id),o=s.maxPitchScaleFactor(),l=t.tilesIn(r,o,a)
l.sort(X)
const c=[]
for(const u of l)c.push({wrappedTileID:u.tileID.wrapped().key,queryResults:u.tile.queryRenderedFeatures(e,i,t._state,u.queryGeometry,u.cameraQueryGeometry,u.scale,n,s,o,Z(t.transform,u.tileID))})
const h=function(t){const e={},i={}
for(const r of t){const t=r.queryResults,n=r.wrappedTileID,s=i[n]=i[n]||{}
for(const i in t){const r=t[i],n=s[i]=s[i]||{},a=e[i]=e[i]||[]
for(const t of r)n[t.featureIndex]||(n[t.featureIndex]=!0,a.push(t))}}return e}(c)
for(const u in h)h[u].forEach((e=>{const i=e.feature,r=t.getFeatureState(i.layer["source-layer"],i.id)
i.source=i.layer.source,i.layer["source-layer"]&&(i.sourceLayer=i.layer["source-layer"]),i.state=r}))
return h}function X(t,e){const i=t.tileID,r=e.tileID
return i.overscaledZ-r.overscaledZ||i.canonical.y-r.canonical.y||i.wrap-r.wrap||i.canonical.x-r.canonical.x}class W{constructor(e,i){this.timeAdded=0,this.fadeEndTime=0,this.tileID=e,this.uid=t.uniqueId(),this.uses=0,this.tileSize=i,this.buckets={},this.expirationTime=null,this.queryPadding=0,this.hasSymbolBuckets=!1,this.hasRTLText=!1,this.dependencies={},this.rtt=[],this.rttCoords={},this.expiredRequestCount=0,this.state="loading"}registerFadeDuration(t){const e=t+this.timeAdded
e<this.fadeEndTime||(this.fadeEndTime=e)}wasRequested(){return"errored"===this.state||"loaded"===this.state||"reloading"===this.state}clearTextures(t){this.demTexture&&t.saveTileTexture(this.demTexture),this.demTexture=null}loadVectorData(e,i,r){if(this.hasData()&&this.unloadVectorData(),this.state="loaded",e){e.featureIndex&&(this.latestFeatureIndex=e.featureIndex,e.rawTileData?(this.latestRawTileData=e.rawTileData,this.latestFeatureIndex.rawTileData=e.rawTileData):this.latestRawTileData&&(this.latestFeatureIndex.rawTileData=this.latestRawTileData)),this.collisionBoxArray=e.collisionBoxArray,this.buckets=function(t,e){const i={}
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
this.imageAtlas&&!this.imageAtlas.uploaded&&(this.imageAtlasTexture=new v(t,this.imageAtlas.image,e.RGBA),this.imageAtlas.uploaded=!0),this.glyphAtlasImage&&(this.glyphAtlasTexture=new v(t,this.glyphAtlasImage,e.ALPHA),this.glyphAtlasImage=null)}prepare(t){this.imageAtlas&&this.imageAtlas.patchUpdatedImages(t,this.imageAtlasTexture)}queryRenderedFeatures(t,e,i,r,n,s,a,o,l,c){return this.latestFeatureIndex&&this.latestFeatureIndex.rawTileData?this.latestFeatureIndex.query({queryGeometry:r,cameraQueryGeometry:n,scale:s,tileSize:this.tileSize,pixelPosMatrix:c,transform:o,params:a,queryPadding:this.queryPadding*l},t,e,i):{}}querySourceFeatures(e,i){const r=this.latestFeatureIndex
if(!r||!r.rawTileData)return
const n=r.loadVTLayers(),s=i&&i.sourceLayer?i.sourceLayer:"",a=n._geojsonTileLayer||n[s]
if(!a)return
const o=t.createFilter(i&&i.filter),{z:l,x:c,y:h}=this.tileID.canonical,u={z:l,x:c,y:h}
for(let d=0;d<a.length;d++){const i=a.feature(d)
if(o.needGeometry){const e=t.toEvaluationFeature(i,!0)
if(!o.filter(new t.EvaluationParameters(this.tileID.overscaledZ),e,this.tileID.canonical))continue}else if(!o.filter(new t.EvaluationParameters(this.tileID.overscaledZ),i))continue
const n=r.getId(i,s),p=new t.GeoJSONFeature(i,l,c,h,n)
p.tile=u,e.push(p)}}hasData(){return"loaded"===this.state||"reloading"===this.state||"expired"===this.state}patternsLoaded(){return this.imageAtlas&&!!Object.keys(this.imageAtlas.patternPositions).length}setExpiryData(e){const i=this.expirationTime
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
const n=this.buckets[r],s=n.layers[0].sourceLayer||"_geojsonTileLayer",a=i[s],o=t[s]
if(!a||!o||0===Object.keys(o).length)continue
n.update(o,a,this.imageAtlas&&this.imageAtlas.patternPositions||{})
const l=e&&e.style&&e.style.getLayer(r)
l&&(this.queryPadding=Math.max(this.queryPadding,l.queryRadius(n)))}}holdingForFade(){return void 0!==this.symbolFadeHoldUntil}symbolFadeFinished(){return!this.symbolFadeHoldUntil||this.symbolFadeHoldUntil<t.exported.now()}clearFadeHold(){this.symbolFadeHoldUntil=void 0}setHoldDuration(e){this.symbolFadeHoldUntil=t.exported.now()+e}setDependencies(t,e){const i={}
for(const r of e)i[r]=!0
this.dependencies[t]=i}hasDependency(t,e){for(const i of t){const t=this.dependencies[i]
if(t)for(const i of e)if(t[i])return!0}return!1}}class H{constructor(t,e){this.max=t,this.onRemove=e,this.reset()}reset(){for(const t in this.data)for(const e of this.data[t])e.timeout&&clearTimeout(e.timeout),this.onRemove(e.value)
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
for(const i of e)this.remove(i.value.tileID,i)}}class K{constructor(){this.state={},this.stateChanges={},this.deletedStates={}}updateState(e,i,r){const n=String(i)
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
e[t]=this.state[n][t]}r[n]=r[n]||{},t.extend(r[n],e)}if(this.stateChanges={},this.deletedStates={},0!==Object.keys(r).length)for(const t in e)e[t].setFeatureState(r,i)}}class Y extends t.Evented{constructor(e,i,r){super(),this.id=e,this.dispatcher=r,this.on("data",(t=>{"source"===t.dataType&&"metadata"===t.sourceDataType&&(this._sourceLoaded=!0),this._sourceLoaded&&!this._paused&&"source"===t.dataType&&"content"===t.sourceDataType&&(this.reload(),this.transform&&this.update(this.transform,this.terrain),this._didEmitContent=!0)})),this.on("dataloading",(()=>{this._sourceErrored=!1})),this.on("error",(()=>{this._sourceErrored=this._source.loaded()})),this._source=function(e,i,r,n){const s=new j[i.type](e,i,r,n)
if(s.id!==e)throw new Error(`Expected Source id to be ${e} instead of ${s.id}`)
return t.bindAll(["load","abort","unload","serialize","prepare"],s),s}(e,i,r,this),this._tiles={},this._cache=new H(0,this._unloadTile.bind(this)),this._timers={},this._cacheTimers={},this._maxTileCacheSize=null,this._loadedParentTiles={},this._coveredTiles={},this._state=new K,this._didEmitContent=!1,this._updated=!1}onAdd(t){this.map=t,this._maxTileCacheSize=t?t._maxTileCacheSize:null,this._source&&this._source.onAdd&&this._source.onAdd(t)}onRemove(t){this.clearTiles(),this._source&&this._source.onRemove&&this._source.onRemove(t)}loaded(){if(this._sourceErrored)return!0
if(!this._sourceLoaded)return!1
if(!this._source.loaded())return!1
if(!(void 0===this.used&&void 0===this.usedForTerrain||this.used||this.usedForTerrain))return!0
if(!this._updated)return!1
for(const t in this._tiles){const e=this._tiles[t]
if("loaded"!==e.state&&"errored"!==e.state)return!1}return!0}getSource(){return this._source}pause(){this._paused=!0}resume(){if(!this._paused)return
const t=this._shouldReloadOnResume
this._paused=!1,this._shouldReloadOnResume=!1,t&&this.reload(),this.transform&&this.update(this.transform,this.terrain)}_loadTile(t,e){return this._source.loadTile(t,e)}_unloadTile(t){if(this._source.unloadTile)return this._source.unloadTile(t,(()=>{}))}_abortTile(e){this._source.abortTile&&this._source.abortTile(e,(()=>{})),this._source.fire(new t.Event("dataabort",{tile:e,coord:e.tileID,dataType:"source"}))}serialize(){return this._source.serialize()}prepare(t){this._source.prepare&&this._source.prepare(),this._state.coalesceChanges(this._tiles,this.map?this.map.painter:null)
for(const e in this._tiles){const i=this._tiles[e]
i.upload(t),i.prepare(this.map.style.imageManager)}}getIds(){return Object.values(this._tiles).map((t=>t.tileID)).sort(J).map((t=>t.key))}getRenderableIds(e){const i=[]
for(const t in this._tiles)this._isIdRenderable(t,e)&&i.push(this._tiles[t])
return e?i.sort(((e,i)=>{const r=e.tileID,n=i.tileID,s=new t.Point(r.canonical.x,r.canonical.y)._rotate(this.transform.angle),a=new t.Point(n.canonical.x,n.canonical.y)._rotate(this.transform.angle)
return r.overscaledZ-n.overscaledZ||a.y-s.y||a.x-s.x})).map((t=>t.tileID.key)):i.map((t=>t.tileID)).sort(J).map((t=>t.key))}hasRenderableParent(t){const e=this.findLoadedParent(t,0)
return!!e&&this._isIdRenderable(e.tileID.key)}_isIdRenderable(t,e){return this._tiles[t]&&this._tiles[t].hasData()&&!this._coveredTiles[t]&&(e||!this._tiles[t].holdingForFade())}reload(){if(this._paused)this._shouldReloadOnResume=!0
else{this._cache.reset()
for(const t in this._tiles)"errored"!==this._tiles[t].state&&this._reloadTile(t,"reloading")}}_reloadTile(t,e){const i=this._tiles[t]
i&&("loading"!==i.state&&(i.state=e),this._loadTile(i,this._tileLoaded.bind(this,i,t,e)))}_tileLoaded(e,i,r,n){if(n)return e.state="errored",void(404!==n.status?this._source.fire(new t.ErrorEvent(n,{tile:e})):this.update(this.transform,this.terrain))
e.timeAdded=t.exported.now(),"expired"===r&&(e.refreshedUponExpiration=!0),this._setTileReloadTimer(i,e),"raster-dem"===this.getSource().type&&e.dem&&this._backfillDEM(e),this._state.initializeTileState(e,this.map?this.map.painter:null),e.aborted||this._source.fire(new t.Event("data",{dataType:"source",tile:e,coord:e.tileID}))}_backfillDEM(t){const e=this.getRenderableIds()
for(let r=0;r<e.length;r++){const n=e[r]
if(t.neighboringTiles&&t.neighboringTiles[n]){const e=this.getTileByID(n)
i(t,e),i(e,t)}}function i(t,e){t.needsHillshadePrepare=!0,t.needsTerrainPrepare=!0
let i=e.tileID.canonical.x-t.tileID.canonical.x
const r=e.tileID.canonical.y-t.tileID.canonical.y,n=Math.pow(2,t.tileID.canonical.z),s=e.tileID.key
0===i&&0===r||Math.abs(r)>1||(Math.abs(i)>1&&(1===Math.abs(i+n)?i+=n:1===Math.abs(i-n)&&(i-=n)),e.dem&&t.dem&&(t.dem.backfillBorder(e.dem,i,r),t.neighboringTiles&&t.neighboringTiles[s]&&(t.neighboringTiles[s].backfilled=!0)))}}getTile(t){return this.getTileByID(t.key)}getTileByID(t){return this._tiles[t]}_retainLoadedChildren(t,e,i,r){for(const n in this._tiles){let s=this._tiles[n]
if(r[n]||!s.hasData()||s.tileID.overscaledZ<=e||s.tileID.overscaledZ>i)continue
let a=s.tileID
for(;s&&s.tileID.overscaledZ>e+1;){const t=s.tileID.scaledTo(s.tileID.overscaledZ-1)
s=this._tiles[t.key],s&&s.hasData()&&(a=t)}let o=a
for(;o.overscaledZ>e;)if(o=o.scaledTo(o.overscaledZ-1),t[o.key]){r[a.key]=a
break}}}findLoadedParent(t,e){if(t.key in this._loadedParentTiles){const i=this._loadedParentTiles[t.key]
return i&&i.tileID.overscaledZ>=e?i:null}for(let i=t.overscaledZ-1;i>=e;i--){const e=t.scaledTo(i),r=this._getLoadedTile(e)
if(r)return r}}_getLoadedTile(t){const e=this._tiles[t.key]
return e&&e.hasData()?e:this._cache.getByKey(t.wrapped().key)}updateCacheSize(t){const e=Math.ceil(t.width/this._source.tileSize)+1,i=Math.ceil(t.height/this._source.tileSize)+1,r=Math.floor(e*i*5),n="number"==typeof this._maxTileCacheSize?Math.min(this._maxTileCacheSize,r):r
this._cache.setMaxSize(n)}handleWrapJump(t){const e=Math.round((t-(void 0===this._prevLng?t:this._prevLng))/360)
if(this._prevLng=t,e){const t={}
for(const i in this._tiles){const r=this._tiles[i]
r.tileID=r.tileID.unwrapTo(r.tileID.wrap+e),t[r.tileID.key]=r}this._tiles=t
for(const e in this._timers)clearTimeout(this._timers[e]),delete this._timers[e]
for(const e in this._tiles)this._setTileReloadTimer(e,this._tiles[e])}}update(e,i){if(this.transform=e,this.terrain=i,!this._sourceLoaded||this._paused)return
let r
this.updateCacheSize(e),this.handleWrapJump(this.transform.center.lng),this._coveredTiles={},this.used||this.usedForTerrain?this._source.tileID?r=e.getVisibleUnwrappedCoordinates(this._source.tileID).map((e=>new t.OverscaledTileID(e.canonical.z,e.wrap,e.canonical.z,e.canonical.x,e.canonical.y))):(r=e.coveringTiles({tileSize:this.usedForTerrain?this.tileSize:this._source.tileSize,minzoom:this._source.minzoom,maxzoom:this._source.maxzoom,roundZoom:!this.usedForTerrain&&this._source.roundZoom,reparseOverscaled:this._source.reparseOverscaled,terrain:i}),this._source.hasTile&&(r=r.filter((t=>this._source.hasTile(t))))):r=[]
const n=e.coveringZoomLevel(this._source),s=Math.max(n-Y.maxOverzooming,this._source.minzoom),a=Math.max(n+Y.maxUnderzooming,this._source.minzoom)
if(this.usedForTerrain){const t={}
for(const e of r)if(e.canonical.z>this._source.minzoom){const i=e.scaledTo(e.canonical.z-1)
t[i.key]=i
const r=e.scaledTo(Math.max(this._source.minzoom,Math.min(e.canonical.z,5)))
t[r.key]=r}r=r.concat(Object.values(t))}const o=0===r.length&&!this._updated&&this._didEmitContent
this._updated=!0,o&&this.fire(new t.Event("data",{sourceDataType:"idle",dataType:"source",sourceId:this.id}))
const l=this._updateRetainedTiles(r,n)
if(Q(this._source.type)){const e={},o={},c=Object.keys(l),h=t.exported.now()
for(const t of c){const i=l[t],r=this._tiles[t]
if(!r||0!==r.fadeEndTime&&r.fadeEndTime<=h)continue
const n=this.findLoadedParent(i,s)
n&&(this._addTile(n.tileID),e[n.tileID.key]=n.tileID),o[t]=i}this._retainLoadedChildren(o,n,a,l)
for(const t in e)l[t]||(this._coveredTiles[t]=!0,l[t]=e[t])
if(i){const t={},e={}
for(const i of r)this._tiles[i.key].hasData()?t[i.key]=i:e[i.key]=i
for(const i in e){const r=e[i].children(this._source.maxzoom)
this._tiles[r[0].key]&&this._tiles[r[1].key]&&this._tiles[r[2].key]&&this._tiles[r[3].key]&&(t[r[0].key]=l[r[0].key]=r[0],t[r[1].key]=l[r[1].key]=r[1],t[r[2].key]=l[r[2].key]=r[2],t[r[3].key]=l[r[3].key]=r[3],delete e[i])}for(const i in e){const r=this.findLoadedParent(e[i],this._source.minzoom)
if(r){t[r.tileID.key]=l[r.tileID.key]=r.tileID
for(const e in t)t[e].isChildOf(r.tileID)&&delete t[e]}}for(const i in this._tiles)t[i]||(this._coveredTiles[i]=!0)}}for(const t in l)this._tiles[t].clearFadeHold()
const c=t.keysDifference(this._tiles,l)
for(const t of c){const e=this._tiles[t]
e.hasSymbolBuckets&&!e.holdingForFade()?e.setHoldDuration(this.map._fadeDuration):e.hasSymbolBuckets&&!e.symbolFadeFinished()||this._removeTile(t)}this._updateLoadedParentTileCache()}releaseSymbolFadeTiles(){for(const t in this._tiles)this._tiles[t].holdingForFade()&&this._removeTile(t)}_updateRetainedTiles(t,e){const i={},r={},n=Math.max(e-Y.maxOverzooming,this._source.minzoom),s=Math.max(e+Y.maxUnderzooming,this._source.minzoom),a={}
for(const o of t){const t=this._addTile(o)
i[o.key]=o,t.hasData()||e<this._source.maxzoom&&(a[o.key]=o)}this._retainLoadedChildren(a,e,s,i)
for(const o of t){let t=this._tiles[o.key]
if(t.hasData())continue
if(e+1>this._source.maxzoom){const t=o.children(this._source.maxzoom)[0],e=this.getTile(t)
if(e&&e.hasData()){i[t.key]=t
continue}}else{const t=o.children(this._source.maxzoom)
if(i[t[0].key]&&i[t[1].key]&&i[t[2].key]&&i[t[3].key])continue}let s=t.wasRequested()
for(let e=o.overscaledZ-1;e>=n;--e){const n=o.scaledTo(e)
if(r[n.key])break
if(r[n.key]=!0,t=this.getTile(n),!t&&s&&(t=this._addTile(n)),t){const e=t.hasData()
if((s||e)&&(i[n.key]=n),s=t.wasRequested(),e)break}}}return i}_updateLoadedParentTileCache(){this._loadedParentTiles={}
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
return i||(i=new W(e,this._source.tileSize*e.overscaleFactor()),this._loadTile(i,this._tileLoaded.bind(this,i,e.key,i.state))),i.uses++,this._tiles[e.key]=i,r||this._source.fire(new t.Event("dataloading",{tile:i,coord:i.tileID,dataType:"source"})),i}_setTileReloadTimer(t,e){t in this._timers&&(clearTimeout(this._timers[t]),delete this._timers[t])
const i=e.getExpiryTimeout()
i&&(this._timers[t]=setTimeout((()=>{this._reloadTile(t,"expired"),delete this._timers[t]}),i))}_removeTile(t){const e=this._tiles[t]
e&&(e.uses--,delete this._tiles[t],this._timers[t]&&(clearTimeout(this._timers[t]),delete this._timers[t]),e.uses>0||(e.hasData()&&"reloading"!==e.state?this._cache.add(e.tileID,e,e.getExpiryTimeout()):(e.aborted=!0,this._abortTile(e),this._unloadTile(e))))}clearTiles(){this._shouldReloadOnResume=!1,this._paused=!1
for(const t in this._tiles)this._removeTile(t)
this._cache.reset()}tilesIn(e,i,r){const n=[],s=this.transform
if(!s)return n
const a=r?s.getCameraQueryGeometry(e):e,o=e.map((t=>s.pointCoordinate(t,this.terrain))),l=a.map((t=>s.pointCoordinate(t,this.terrain))),c=this.getIds()
let h=1/0,u=1/0,d=-1/0,p=-1/0
for(const t of l)h=Math.min(h,t.x),u=Math.min(u,t.y),d=Math.max(d,t.x),p=Math.max(p,t.y)
for(let f=0;f<c.length;f++){const e=this._tiles[c[f]]
if(e.holdingForFade())continue
const r=e.tileID,a=Math.pow(2,s.zoom-e.tileID.overscaledZ),m=i*e.queryPadding*t.EXTENT/e.tileSize/a,g=[r.getTilePoint(new t.MercatorCoordinate(h,u)),r.getTilePoint(new t.MercatorCoordinate(d,p))]
if(g[0].x-m<t.EXTENT&&g[0].y-m<t.EXTENT&&g[1].x+m>=0&&g[1].y+m>=0){const t=o.map((t=>r.getTilePoint(t))),i=l.map((t=>r.getTilePoint(t)))
n.push({tile:e,tileID:r,queryGeometry:t,cameraQueryGeometry:i,scale:a})}}return n}getVisibleCoordinates(t){const e=this.getRenderableIds(t).map((t=>this._tiles[t].tileID))
for(const i of e)i.posMatrix=this.transform.calculatePosMatrix(i.toUnwrapped())
return e}hasTransition(){if(this._source.hasTransition())return!0
if(Q(this._source.type)){const e=t.exported.now()
for(const t in this._tiles)if(this._tiles[t].fadeEndTime>=e)return!0}return!1}setFeatureState(t,e,i){this._state.updateState(t=t||"_geojsonTileLayer",e,i)}removeFeatureState(t,e,i){this._state.removeFeatureState(t=t||"_geojsonTileLayer",e,i)}getFeatureState(t,e){return this._state.getState(t=t||"_geojsonTileLayer",e)}setDependencies(t,e,i){const r=this._tiles[t]
r&&r.setDependencies(e,i)}reloadTilesForDependencies(t,e){for(const i in this._tiles)this._tiles[i].hasDependency(t,e)&&this._reloadTile(i,"reloading")
this._cache.filter((i=>!i.hasDependency(t,e)))}}function J(t,e){const i=Math.abs(2*t.wrap)-+(t.wrap<0),r=Math.abs(2*e.wrap)-+(e.wrap<0)
return t.overscaledZ-e.overscaledZ||r-i||e.canonical.y-t.canonical.y||e.canonical.x-t.canonical.x}function Q(t){return"raster"===t||"image"===t||"video"===t}Y.maxOverzooming=10,Y.maxUnderzooming=3
const tt="mapboxgl_preloaded_worker_pool"
class et{constructor(){this.active={}}acquire(e){if(!this.workers)for(this.workers=[];this.workers.length<et.workerCount;)this.workers.push(new Worker(t.config.WORKER_URL))
return this.active[e]=!0,this.workers.slice()}release(t){delete this.active[t],0===this.numActive()&&(this.workers.forEach((t=>{t.terminate()})),this.workers=null)}isPreloaded(){return!!this.active[tt]}numActive(){return Object.keys(this.active).length}}const it=Math.floor(t.exported.hardwareConcurrency/2)
let rt
function nt(){return rt||(rt=new et),rt}et.workerCount=t.isSafari(globalThis)?Math.max(Math.min(it,3),1):1
class st{constructor(t,e){this.reset(t,e)}reset(t,e){this.points=t||[],this._distances=[0]
for(let i=1;i<this.points.length;i++)this._distances[i]=this._distances[i-1]+this.points[i].dist(this.points[i-1])
this.length=this._distances[this._distances.length-1],this.padding=Math.min(e||0,.5*this.length),this.paddedLength=this.length-2*this.padding}lerp(e){if(1===this.points.length)return this.points[0]
e=t.clamp(e,0,1)
let i=1,r=this._distances[i]
const n=e*this.paddedLength+this.padding
for(;r<n&&i<this._distances.length;)r=this._distances[++i]
const s=i-1,a=this._distances[s],o=r-a,l=o>0?(n-a)/o:0
return this.points[s].mult(1-l).add(this.points[i].mult(l))}}function at(t,e){let i=!0
return"always"===t||"never"!==t&&"never"!==e||(i=!1),i}class ot{constructor(t,e,i){const r=this.boxCells=[],n=this.circleCells=[]
this.xCellCount=Math.ceil(t/i),this.yCellCount=Math.ceil(e/i)
for(let s=0;s<this.xCellCount*this.yCellCount;s++)r.push([]),n.push([])
this.circleKeys=[],this.boxKeys=[],this.bboxes=[],this.circles=[],this.width=t,this.height=e,this.xScale=this.xCellCount/t,this.yScale=this.yCellCount/e,this.boxUid=0,this.circleUid=0}keysLength(){return this.boxKeys.length+this.circleKeys.length}insert(t,e,i,r,n){this._forEachCell(e,i,r,n,this._insertBoxCell,this.boxUid++),this.boxKeys.push(t),this.bboxes.push(e),this.bboxes.push(i),this.bboxes.push(r),this.bboxes.push(n)}insertCircle(t,e,i,r){this._forEachCell(e-r,i-r,e+r,i+r,this._insertCircleCell,this.circleUid++),this.circleKeys.push(t),this.circles.push(e),this.circles.push(i),this.circles.push(r)}_insertBoxCell(t,e,i,r,n,s){this.boxCells[n].push(s)}_insertCircleCell(t,e,i,r,n,s){this.circleCells[n].push(s)}_query(t,e,i,r,n,s,a){if(i<0||t>this.width||r<0||e>this.height)return[]
const o=[]
if(t<=0&&e<=0&&this.width<=i&&this.height<=r){if(n)return[{key:null,x1:t,y1:e,x2:i,y2:r}]
for(let t=0;t<this.boxKeys.length;t++)o.push({key:this.boxKeys[t],x1:this.bboxes[4*t],y1:this.bboxes[4*t+1],x2:this.bboxes[4*t+2],y2:this.bboxes[4*t+3]})
for(let t=0;t<this.circleKeys.length;t++){const e=this.circles[3*t],i=this.circles[3*t+1],r=this.circles[3*t+2]
o.push({key:this.circleKeys[t],x1:e-r,y1:i-r,x2:e+r,y2:i+r})}}else this._forEachCell(t,e,i,r,this._queryCell,o,{hitTest:n,overlapMode:s,seenUids:{box:{},circle:{}}},a)
return o}query(t,e,i,r){return this._query(t,e,i,r,!1,null)}hitTest(t,e,i,r,n,s){return this._query(t,e,i,r,!0,n,s).length>0}hitTestCircle(t,e,i,r,n){const s=t-i,a=t+i,o=e-i,l=e+i
if(a<0||s>this.width||l<0||o>this.height)return!1
const c=[]
return this._forEachCell(s,o,a,l,this._queryCellCircle,c,{hitTest:!0,overlapMode:r,circle:{x:t,y:e,radius:i},seenUids:{box:{},circle:{}}},n),c.length>0}_queryCell(t,e,i,r,n,s,a,o){const{seenUids:l,hitTest:c,overlapMode:h}=a,u=this.boxCells[n]
if(null!==u){const n=this.bboxes
for(const a of u)if(!l.box[a]){l.box[a]=!0
const u=4*a,d=this.boxKeys[a]
if(t<=n[u+2]&&e<=n[u+3]&&i>=n[u+0]&&r>=n[u+1]&&(!o||o(d))&&(!c||!at(h,d.overlapMode))&&(s.push({key:d,x1:n[u],y1:n[u+1],x2:n[u+2],y2:n[u+3]}),c))return!0}}const d=this.circleCells[n]
if(null!==d){const n=this.circles
for(const a of d)if(!l.circle[a]){l.circle[a]=!0
const u=3*a,d=this.circleKeys[a]
if(this._circleAndRectCollide(n[u],n[u+1],n[u+2],t,e,i,r)&&(!o||o(d))&&(!c||!at(h,d.overlapMode))){const t=n[u],e=n[u+1],i=n[u+2]
if(s.push({key:d,x1:t-i,y1:e-i,x2:t+i,y2:e+i}),c)return!0}}}return!1}_queryCellCircle(t,e,i,r,n,s,a,o){const{circle:l,seenUids:c,overlapMode:h}=a,u=this.boxCells[n]
if(null!==u){const t=this.bboxes
for(const e of u)if(!c.box[e]){c.box[e]=!0
const i=4*e,r=this.boxKeys[e]
if(this._circleAndRectCollide(l.x,l.y,l.radius,t[i+0],t[i+1],t[i+2],t[i+3])&&(!o||o(r))&&!at(h,r.overlapMode))return s.push(!0),!0}}const d=this.circleCells[n]
if(null!==d){const t=this.circles
for(const e of d)if(!c.circle[e]){c.circle[e]=!0
const i=3*e,r=this.circleKeys[e]
if(this._circlesCollide(t[i],t[i+1],t[i+2],l.x,l.y,l.radius)&&(!o||o(r))&&!at(h,r.overlapMode))return s.push(!0),!0}}}_forEachCell(t,e,i,r,n,s,a,o){const l=this._convertToXCellCoord(t),c=this._convertToYCellCoord(e),h=this._convertToXCellCoord(i),u=this._convertToYCellCoord(r)
for(let d=l;d<=h;d++)for(let l=c;l<=u;l++)if(n.call(this,t,e,i,r,this.xCellCount*l+d,s,a,o))return}_convertToXCellCoord(t){return Math.max(0,Math.min(this.xCellCount-1,Math.floor(t*this.xScale)))}_convertToYCellCoord(t){return Math.max(0,Math.min(this.yCellCount-1,Math.floor(t*this.yScale)))}_circlesCollide(t,e,i,r,n,s){const a=r-t,o=n-e,l=i+s
return l*l>a*a+o*o}_circleAndRectCollide(t,e,i,r,n,s,a){const o=(s-r)/2,l=Math.abs(t-(r+o))
if(l>o+i)return!1
const c=(a-n)/2,h=Math.abs(e-(n+c))
if(h>c+i)return!1
if(l<=o||h<=c)return!0
const u=l-o,d=h-c
return u*u+d*d<=i*i}}function lt(e,i,r,n,s){const a=t.create()
return i?(t.scale(a,a,[1/s,1/s,1]),r||t.rotateZ(a,a,n.angle)):t.multiply(a,n.labelPlaneMatrix,e),a}function ct(e,i,r,n,s){if(i){const i=t.clone(e)
return t.scale(i,i,[s,s,1]),r||t.rotateZ(i,i,-n.angle),i}return n.glCoordMatrix}function ht(e,i,r){let n
r?(n=[e.x,e.y,r(e.x,e.y),1],t.transformMat4(n,n,i)):(n=[e.x,e.y,0,1],St(n,n,i))
const s=n[3]
return{point:new t.Point(n[0]/s,n[1]/s),signedDistanceFromCamera:s}}function ut(t,e){return.5+t/e*.5}function dt(t,e){const i=t[0]/t[3],r=t[1]/t[3]
return i>=-e[0]&&i<=e[0]&&r>=-e[1]&&r<=e[1]}function pt(e,i,r,n,s,a,o,l,c,h){const u=n?e.textSizeData:e.iconSizeData,d=t.evaluateSizeForZoom(u,r.transform.zoom),p=[256/r.width*2+1,256/r.height*2+1],f=n?e.text.dynamicLayoutVertexArray:e.icon.dynamicLayoutVertexArray
f.clear()
const m=e.lineVertexArray,g=n?e.text.placedSymbolArray:e.icon.placedSymbolArray,_=r.transform.width/r.transform.height
let y=!1
for(let x=0;x<g.length;x++){const n=g.get(x)
if(n.hidden||n.writingMode===t.WritingMode.vertical&&!y){Tt(n.numGlyphs,f)
continue}let v
if(y=!1,h?(v=[n.anchorX,n.anchorY,h(n.anchorX,n.anchorY),1],t.transformMat4(v,v,i)):(v=[n.anchorX,n.anchorY,0,1],St(v,v,i)),!dt(v,p)){Tt(n.numGlyphs,f)
continue}const b=ut(r.transform.cameraToCenterDistance,v[3]),w=t.evaluateSizeForFeature(u,d,n),T=o?w/b:w*b,S=new t.Point(n.anchorX,n.anchorY),E=ht(S,s,h).point,I={projections:{},offsets:{}},A=gt(n,T,!1,l,i,s,a,e.glyphOffsetArray,m,f,E,S,I,_,c,h)
y=A.useVertical,(A.notEnoughRoom||y||A.needsFlipping&&gt(n,T,!0,l,i,s,a,e.glyphOffsetArray,m,f,E,S,I,_,c,h).notEnoughRoom)&&Tt(n.numGlyphs,f)}n?e.text.dynamicLayoutVertexBuffer.updateData(f):e.icon.dynamicLayoutVertexBuffer.updateData(f)}function ft(t,e,i,r,n,s,a,o,l,c,h,u,d){const p=o.glyphStartIndex+o.numGlyphs,f=o.lineStartIndex,m=o.lineStartIndex+o.lineLength,g=e.getoffsetX(o.glyphStartIndex),_=e.getoffsetX(p-1),y=bt(t*g,i,r,n,s,a,o.segment,f,m,l,c,h,u,d)
if(!y)return null
const x=bt(t*_,i,r,n,s,a,o.segment,f,m,l,c,h,u,d)
return x?{first:y,last:x}:null}function mt(e,i,r,n){return e===t.WritingMode.horizontal&&Math.abs(r.y-i.y)>Math.abs(r.x-i.x)*n?{useVertical:!0}:(e===t.WritingMode.vertical?i.y<r.y:i.x>r.x)?{needsFlipping:!0}:null}function gt(e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g){const _=i/24,y=e.lineOffsetX*_,x=e.lineOffsetY*_
let v
if(e.numGlyphs>1){const t=e.glyphStartIndex+e.numGlyphs,i=e.lineStartIndex,s=e.lineStartIndex+e.lineLength,h=ft(_,l,y,x,r,u,d,e,c,a,p,m,g)
if(!h)return{notEnoughRoom:!0}
const b=ht(h.first.point,o,g).point,w=ht(h.last.point,o,g).point
if(n&&!r){const t=mt(e.writingMode,b,w,f)
if(t)return t}v=[h.first]
for(let n=e.glyphStartIndex+1;n<t-1;n++)v.push(bt(_*l.getoffsetX(n),y,x,r,u,d,e.segment,i,s,c,a,p,m,g))
v.push(h.last)}else{if(n&&!r){const i=ht(d,s,g).point,r=e.lineStartIndex+e.segment+1,n=new t.Point(c.getx(r),c.gety(r)),a=ht(n,s,g),o=a.signedDistanceFromCamera>0?a.point:_t(d,n,i,1,s,g),l=mt(e.writingMode,i,o,f)
if(l)return l}const i=bt(_*l.getoffsetX(e.glyphStartIndex),y,x,r,u,d,e.segment,e.lineStartIndex,e.lineStartIndex+e.lineLength,c,a,p,m,g)
if(!i)return{notEnoughRoom:!0}
v=[i]}for(const b of v)t.addDynamicAttributes(h,b.point,b.angle)
return{}}function _t(t,e,i,r,n,s){const a=ht(t.add(t.sub(e)._unit()),n,s).point,o=i.sub(a)
return i.add(o._mult(r/o.mag()))}function yt(e,i){const{projectionCache:r,lineVertexArray:n,labelPlaneMatrix:s,tileAnchorPoint:a,distanceFromAnchor:o,getElevation:l,previousVertex:c,direction:h,absOffsetX:u}=i
if(r.projections[e])return r.projections[e]
const d=new t.Point(n.getx(e),n.gety(e)),p=ht(d,s,l)
if(p.signedDistanceFromCamera>0)return r.projections[e]=p.point,p.point
const f=e-h
return _t(0===o?a:new t.Point(n.getx(f),n.gety(f)),d,c,u-o+1,s,l)}function xt(t,e,i){return t._unit()._perp()._mult(e*i)}function vt(e,i,r,n,s,a,o,l){const{projectionCache:c,direction:h}=l
if(c.offsets[e])return c.offsets[e]
const u=r.add(i)
if(e+h<n||e+h>=s)return c.offsets[e]=u,u
const d=yt(e+h,l),p=xt(d.sub(r),o,h),f=r.add(p),m=d.add(p)
return c.offsets[e]=t.findLineIntersection(a,u,f,m)||u,c.offsets[e]}function bt(t,e,i,r,n,s,a,o,l,c,h,u,d,p){const f=r?t-e:t+e
let m=f>0?1:-1,g=0
r&&(m*=-1,g=Math.PI),m<0&&(g+=Math.PI)
let _,y,x=m>0?o+a:o+a+1,v=n,b=n,w=0,T=0
const S=Math.abs(f),E=[]
let I
for(;w+T<=S;){if(x+=m,x<o||x>=l)return null
w+=T,b=v,y=_
const t={projectionCache:u,lineVertexArray:c,labelPlaneMatrix:h,tileAnchorPoint:s,distanceFromAnchor:w,getElevation:p,previousVertex:b,direction:m,absOffsetX:S}
if(v=yt(x,t),0===i)E.push(b),I=v.sub(b)
else{let e
const r=v.sub(b)
e=0===r.mag()?xt(yt(x+m,t).sub(v),i,m):xt(r,i,m),y||(y=b.add(e)),_=vt(x,e,v,o,l,y,i,t),E.push(y),I=_.sub(y)}T=I.mag()}const A=I._mult((S-w)/T)._add(y||b),M=g+Math.atan2(v.y-b.y,v.x-b.x)
return E.push(A),{point:A,angle:d?M:0,path:E}}const wt=new Float32Array([-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0,-1/0,-1/0,0])
function Tt(t,e){for(let i=0;i<t;i++){const t=e.length
e.resize(t+4),e.float32.set(wt,3*t)}}function St(t,e,i){const r=e[0],n=e[1]
return t[0]=i[0]*r+i[4]*n+i[12],t[1]=i[1]*r+i[5]*n+i[13],t[3]=i[3]*r+i[7]*n+i[15],t}const Et=100
class It{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new ot(t.width+200,t.height+200,25),i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new ot(t.width+200,t.height+200,25)
this.transform=t,this.grid=e,this.ignoredGrid=i,this.pitchfactor=Math.cos(t._pitch)*t.cameraToCenterDistance,this.screenRightBoundary=t.width+Et,this.screenBottomBoundary=t.height+Et,this.gridRightBoundary=t.width+200,this.gridBottomBoundary=t.height+200,this.perspectiveRatioCutoff=.6}placeCollisionBox(t,e,i,r,n,s){const a=this.projectAndGetPerspectiveRatio(r,t.anchorPointX,t.anchorPointY,s),o=i*a.perspectiveRatio,l=t.x1*o+a.point.x,c=t.y1*o+a.point.y,h=t.x2*o+a.point.x,u=t.y2*o+a.point.y
return!this.isInsideGrid(l,c,h,u)||"always"!==e&&this.grid.hitTest(l,c,h,u,e,n)||a.perspectiveRatio<this.perspectiveRatioCutoff?{box:[],offscreen:!1}:{box:[l,c,h,u],offscreen:this.isOffscreen(l,c,h,u)}}placeCollisionCircles(e,i,r,n,s,a,o,l,c,h,u,d,p,f){const m=[],g=new t.Point(i.anchorX,i.anchorY),_=ht(g,a,f),y=ut(this.transform.cameraToCenterDistance,_.signedDistanceFromCamera),x=(h?s/y:s*y)/t.ONE_EM,v=ht(g,o,f).point,b=ft(x,n,i.lineOffsetX*x,i.lineOffsetY*x,!1,v,g,i,r,o,{projections:{},offsets:{}},!1,f)
let w=!1,T=!1,S=!0
if(b){const i=.5*d*y+p,r=new t.Point(-100,-100),n=new t.Point(this.screenRightBoundary,this.screenBottomBoundary),s=new st,a=b.first,o=b.last
let h=[]
for(let t=a.path.length-1;t>=1;t--)h.push(a.path[t])
for(let t=1;t<o.path.length;t++)h.push(o.path[t])
const g=2.5*i
if(l){const t=h.map((t=>ht(t,l,f)))
h=t.some((t=>t.signedDistanceFromCamera<=0))?[]:t.map((t=>t.point))}let _=[]
if(h.length>0){const e=h[0].clone(),i=h[0].clone()
for(let t=1;t<h.length;t++)e.x=Math.min(e.x,h[t].x),e.y=Math.min(e.y,h[t].y),i.x=Math.max(i.x,h[t].x),i.y=Math.max(i.y,h[t].y)
_=e.x>=r.x&&i.x<=n.x&&e.y>=r.y&&i.y<=n.y?[h]:i.x<r.x||e.x>n.x||i.y<r.y||e.y>n.y?[]:t.clipLine([h],r.x,r.y,n.x,n.y)}for(const t of _){s.reset(t,.25*i)
let r=0
r=s.length<=.5*i?1:Math.ceil(s.paddedLength/g)+1
for(let t=0;t<r;t++){const n=t/Math.max(r-1,1),a=s.lerp(n),o=a.x+Et,l=a.y+Et
m.push(o,l,i,0)
const h=o-i,d=l-i,p=o+i,f=l+i
if(S=S&&this.isOffscreen(h,d,p,f),T=T||this.isInsideGrid(h,d,p,f),"always"!==e&&this.grid.hitTestCircle(o,l,i,e,u)&&(w=!0,!c))return{circles:[],offscreen:!1,collisionDetected:w}}}}return{circles:!c&&w||!T||y<this.perspectiveRatioCutoff?[]:m,offscreen:S,collisionDetected:w}}queryRenderedSymbols(e){if(0===e.length||0===this.grid.keysLength()&&0===this.ignoredGrid.keysLength())return{}
const i=[]
let r=1/0,n=1/0,s=-1/0,a=-1/0
for(const h of e){const e=new t.Point(h.x+Et,h.y+Et)
r=Math.min(r,e.x),n=Math.min(n,e.y),s=Math.max(s,e.x),a=Math.max(a,e.y),i.push(e)}const o=this.grid.query(r,n,s,a).concat(this.ignoredGrid.query(r,n,s,a)),l={},c={}
for(const h of o){const e=h.key
if(void 0===l[e.bucketInstanceId]&&(l[e.bucketInstanceId]={}),l[e.bucketInstanceId][e.featureIndex])continue
const r=[new t.Point(h.x1,h.y1),new t.Point(h.x2,h.y1),new t.Point(h.x2,h.y2),new t.Point(h.x1,h.y2)]
t.polygonIntersectsPolygon(i,r)&&(l[e.bucketInstanceId][e.featureIndex]=!0,void 0===c[e.bucketInstanceId]&&(c[e.bucketInstanceId]=[]),c[e.bucketInstanceId].push(e.featureIndex))}return c}insertCollisionBox(t,e,i,r,n,s){(i?this.ignoredGrid:this.grid).insert({bucketInstanceId:r,featureIndex:n,collisionGroupID:s,overlapMode:e},t[0],t[1],t[2],t[3])}insertCollisionCircles(t,e,i,r,n,s){const a=i?this.ignoredGrid:this.grid,o={bucketInstanceId:r,featureIndex:n,collisionGroupID:s,overlapMode:e}
for(let l=0;l<t.length;l+=4)a.insertCircle(o,t[l],t[l+1],t[l+2])}projectAndGetPerspectiveRatio(e,i,r,n){let s
return n?(s=[i,r,n(i,r),1],t.transformMat4(s,s,e)):(s=[i,r,0,1],St(s,s,e)),{point:new t.Point((s[0]/s[3]+1)/2*this.transform.width+Et,(-s[1]/s[3]+1)/2*this.transform.height+Et),perspectiveRatio:.5+this.transform.cameraToCenterDistance/s[3]*.5}}isOffscreen(t,e,i,r){return i<Et||t>=this.screenRightBoundary||r<Et||e>this.screenBottomBoundary}isInsideGrid(t,e,i,r){return i>=0&&t<this.gridRightBoundary&&r>=0&&e<this.gridBottomBoundary}getViewportMatrix(){const e=t.identity([])
return t.translate(e,e,[-100,-100,0]),e}}function At(e,i,r){return i*(t.EXTENT/(e.tileSize*Math.pow(2,r-e.tileID.overscaledZ)))}class Mt{constructor(t,e,i,r){this.opacity=t?Math.max(0,Math.min(1,t.opacity+(t.placed?e:-e))):r&&i?1:0,this.placed=i}isHidden(){return 0===this.opacity&&!this.placed}}class Ct{constructor(t,e,i,r,n){this.text=new Mt(t?t.text:null,e,i,n),this.icon=new Mt(t?t.icon:null,e,r,n)}isHidden(){return this.text.isHidden()&&this.icon.isHidden()}}class Pt{constructor(t,e,i){this.text=t,this.icon=e,this.skipFade=i}}class zt{constructor(){this.invProjMatrix=t.create(),this.viewportMatrix=t.create(),this.circles=[]}}class kt{constructor(t,e,i,r,n){this.bucketInstanceId=t,this.featureIndex=e,this.sourceLayerIndex=i,this.bucketIndex=r,this.tileID=n}}class Dt{constructor(t){this.crossSourceCollisions=t,this.maxGroupID=0,this.collisionGroups={}}get(t){if(this.crossSourceCollisions)return{ID:0,predicate:null}
if(!this.collisionGroups[t]){const e=++this.maxGroupID
this.collisionGroups[t]={ID:e,predicate:t=>t.collisionGroupID===e}}return this.collisionGroups[t]}}function Lt(e,i,r,n,s){const{horizontalAlign:a,verticalAlign:o}=t.getAnchorAlignment(e),l=-(a-.5)*i,c=-(o-.5)*r,h=t.evaluateVariableOffset(e,n)
return new t.Point(l+h[0]*s,c+h[1]*s)}function Bt(e,i,r,n,s,a){const{x1:o,x2:l,y1:c,y2:h,anchorPointX:u,anchorPointY:d}=e,p=new t.Point(i,r)
return n&&p._rotate(s?a:-a),{x1:o+p.x,y1:c+p.y,x2:l+p.x,y2:h+p.y,anchorPointX:u,anchorPointY:d}}class Rt{constructor(t,e,i,r,n){this.transform=t.clone(),this.terrain=e,this.collisionIndex=new It(this.transform),this.placements={},this.opacities={},this.variableOffsets={},this.stale=!1,this.commitTime=0,this.fadeDuration=i,this.retainedQueryData={},this.collisionGroups=new Dt(r),this.collisionCircleArrays={},this.prevPlacement=n,n&&(n.prevPlacement=void 0),this.placedOrientations={}}getBucketParts(e,i,r,n){const s=r.getBucket(i),a=r.latestFeatureIndex
if(!s||!a||i.id!==s.layerIds[0])return
const o=r.collisionBoxArray,l=s.layers[0].layout,c=Math.pow(2,this.transform.zoom-r.tileID.overscaledZ),h=r.tileSize/t.EXTENT,u=this.transform.calculatePosMatrix(r.tileID.toUnwrapped()),d="map"===l.get("text-pitch-alignment"),p="map"===l.get("text-rotation-alignment"),f=At(r,1,this.transform.zoom),m=lt(u,d,p,this.transform,f)
let g=null
if(d){const e=ct(u,d,p,this.transform,f)
g=t.multiply([],this.transform.labelPlaneMatrix,e)}this.retainedQueryData[s.bucketInstanceId]=new kt(s.bucketInstanceId,a,s.sourceLayerIndex,s.index,r.tileID)
const _={bucket:s,layout:l,posMatrix:u,textLabelPlaneMatrix:m,labelToScreenMatrix:g,scale:c,textPixelRatio:h,holdingForFade:r.holdingForFade(),collisionBoxArray:o,partiallyEvaluatedTextSize:t.evaluateSizeForZoom(s.textSizeData,this.transform.zoom),collisionGroup:this.collisionGroups.get(s.sourceID)}
if(n)for(const t of s.sortKeyRanges){const{sortKey:i,symbolInstanceStart:r,symbolInstanceEnd:n}=t
e.push({sortKey:i,symbolInstanceStart:r,symbolInstanceEnd:n,parameters:_})}else e.push({symbolInstanceStart:0,symbolInstanceEnd:s.symbolInstances.length,parameters:_})}attemptAnchorPlacement(t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m){const g=[u.textOffset0,u.textOffset1],_=Lt(t,i,r,g,n),y=this.collisionIndex.placeCollisionBox(Bt(e,_.x,_.y,s,a,this.transform.angle),h,o,l,c.predicate,m)
if((!f||0!==this.collisionIndex.placeCollisionBox(Bt(f,_.x,_.y,s,a,this.transform.angle),h,o,l,c.predicate,m).box.length)&&y.box.length>0){let e
if(this.prevPlacement&&this.prevPlacement.variableOffsets[u.crossTileID]&&this.prevPlacement.placements[u.crossTileID]&&this.prevPlacement.placements[u.crossTileID].text&&(e=this.prevPlacement.variableOffsets[u.crossTileID].anchor),0===u.crossTileID)throw new Error("symbolInstance.crossTileID can't be 0")
return this.variableOffsets[u.crossTileID]={textOffset:g,width:i,height:r,anchor:t,textBoxScale:n,prevAnchor:e},this.markUsedJustification(d,t,u,p),d.allowVerticalPlacement&&(this.markUsedOrientation(d,p,u),this.placedOrientations[u.crossTileID]=p),{shift:_,placedGlyphBoxes:y}}}placeLayerBucketPart(e,i,r){const{bucket:n,layout:s,posMatrix:a,textLabelPlaneMatrix:o,labelToScreenMatrix:l,textPixelRatio:c,holdingForFade:h,collisionBoxArray:u,partiallyEvaluatedTextSize:d,collisionGroup:p}=e.parameters,f=s.get("text-optional"),m=s.get("icon-optional"),g=t.getOverlapMode(s,"text-overlap","text-allow-overlap"),_="always"===g,y=t.getOverlapMode(s,"icon-overlap","icon-allow-overlap"),x="always"===y,v="map"===s.get("text-rotation-alignment"),b="map"===s.get("text-pitch-alignment"),w="none"!==s.get("icon-text-fit"),T="viewport-y"===s.get("symbol-z-order"),S=_&&(x||!n.hasIconData()||m),E=x&&(_||!n.hasTextData()||f)
!n.collisionArrays&&u&&n.deserializeCollisionBoxes(u)
const I=this.retainedQueryData[n.bucketInstanceId].tileID,A=this.terrain?(t,e)=>this.terrain.getElevation(I,t,e):null,M=(e,u)=>{if(i[e.crossTileID])return
if(h)return void(this.placements[e.crossTileID]=new Pt(!1,!1,!1))
let x=!1,T=!1,I=!0,M=null,C={box:null,offscreen:null},P={box:null,offscreen:null},z=null,k=null,D=null,L=0,B=0,R=0
u.textFeatureIndex?L=u.textFeatureIndex:e.useRuntimeCollisionCircles&&(L=e.featureIndex),u.verticalTextFeatureIndex&&(B=u.verticalTextFeatureIndex)
const F=u.textBox
if(F){const i=i=>{let r=t.WritingMode.horizontal
if(n.allowVerticalPlacement&&!i&&this.prevPlacement){const t=this.prevPlacement.placedOrientations[e.crossTileID]
t&&(this.placedOrientations[e.crossTileID]=t,r=t,this.markUsedOrientation(n,r,e))}return r},r=(i,r)=>{if(n.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&u.verticalTextBox){for(const e of n.writingModes)if(e===t.WritingMode.vertical?(C=r(),P=C):C=i(),C&&C.box&&C.box.length)break}else C=i()}
if(s.get("text-variable-anchor")){let o=s.get("text-variable-anchor")
if(this.prevPlacement&&this.prevPlacement.variableOffsets[e.crossTileID]){const t=this.prevPlacement.variableOffsets[e.crossTileID]
o.indexOf(t.anchor)>0&&(o=o.filter((e=>e!==t.anchor)),o.unshift(t.anchor))}const l=(t,i,r)=>{const s=t.x2-t.x1,l=t.y2-t.y1,h=e.textBoxScale,u=w&&"never"===y?i:null
let d={box:[],offscreen:!1}
const f="never"!==g?2*o.length:o.length
for(let m=0;m<f;++m){const i=this.attemptAnchorPlacement(o[m%o.length],t,s,l,h,v,b,c,a,p,m>=o.length?g:"never",e,n,r,u,A)
if(i&&(d=i.placedGlyphBoxes,d&&d.box&&d.box.length)){x=!0,M=i.shift
break}}return d}
r((()=>l(F,u.iconBox,t.WritingMode.horizontal)),(()=>{const i=u.verticalTextBox
return n.allowVerticalPlacement&&!(C&&C.box&&C.box.length)&&e.numVerticalGlyphVertices>0&&i?l(i,u.verticalIconBox,t.WritingMode.vertical):{box:null,offscreen:null}})),C&&(x=C.box,I=C.offscreen)
const h=i(C&&C.box)
if(!x&&this.prevPlacement){const t=this.prevPlacement.variableOffsets[e.crossTileID]
t&&(this.variableOffsets[e.crossTileID]=t,this.markUsedJustification(n,t.anchor,e,h))}}else{const s=(t,i)=>{const r=this.collisionIndex.placeCollisionBox(t,g,c,a,p.predicate,A)
return r&&r.box&&r.box.length&&(this.markUsedOrientation(n,i,e),this.placedOrientations[e.crossTileID]=i),r}
r((()=>s(F,t.WritingMode.horizontal)),(()=>{const i=u.verticalTextBox
return n.allowVerticalPlacement&&e.numVerticalGlyphVertices>0&&i?s(i,t.WritingMode.vertical):{box:null,offscreen:null}})),i(C&&C.box&&C.box.length)}}if(z=C,x=z&&z.box&&z.box.length>0,I=z&&z.offscreen,e.useRuntimeCollisionCircles){const i=n.text.placedSymbolArray.get(e.centerJustifiedTextSymbolIndex),c=t.evaluateSizeForFeature(n.textSizeData,d,i),h=s.get("text-padding")
k=this.collisionIndex.placeCollisionCircles(g,i,n.lineVertexArray,n.glyphOffsetArray,c,a,o,l,r,b,p.predicate,e.collisionCircleDiameter,h,A),k.circles.length&&k.collisionDetected&&!r&&t.warnOnce("Collisions detected, but collision boxes are not shown"),x=_||k.circles.length>0&&!k.collisionDetected,I=I&&k.offscreen}if(u.iconFeatureIndex&&(R=u.iconFeatureIndex),u.iconBox){const t=t=>{const e=w&&M?Bt(t,M.x,M.y,v,b,this.transform.angle):t
return this.collisionIndex.placeCollisionBox(e,y,c,a,p.predicate,A)}
P&&P.box&&P.box.length&&u.verticalIconBox?(D=t(u.verticalIconBox),T=D.box.length>0):(D=t(u.iconBox),T=D.box.length>0),I=I&&D.offscreen}const O=f||0===e.numHorizontalGlyphVertices&&0===e.numVerticalGlyphVertices,U=m||0===e.numIconVertices
if(O||U?U?O||(T=T&&x):x=T&&x:T=x=T&&x,x&&z&&z.box&&this.collisionIndex.insertCollisionBox(z.box,g,s.get("text-ignore-placement"),n.bucketInstanceId,P&&P.box&&B?B:L,p.ID),T&&D&&this.collisionIndex.insertCollisionBox(D.box,y,s.get("icon-ignore-placement"),n.bucketInstanceId,R,p.ID),k&&(x&&this.collisionIndex.insertCollisionCircles(k.circles,g,s.get("text-ignore-placement"),n.bucketInstanceId,L,p.ID),r)){const t=n.bucketInstanceId
let e=this.collisionCircleArrays[t]
void 0===e&&(e=this.collisionCircleArrays[t]=new zt)
for(let i=0;i<k.circles.length;i+=4)e.circles.push(k.circles[i+0]),e.circles.push(k.circles[i+1]),e.circles.push(k.circles[i+2]),e.circles.push(k.collisionDetected?1:0)}if(0===e.crossTileID)throw new Error("symbolInstance.crossTileID can't be 0")
if(0===n.bucketInstanceId)throw new Error("bucket.bucketInstanceId can't be 0")
this.placements[e.crossTileID]=new Pt(x||S,T||E,I||n.justReloaded),i[e.crossTileID]=!0}
if(T){if(0!==e.symbolInstanceStart)throw new Error("bucket.bucketInstanceId should be 0")
const t=n.getSortedSymbolIndexes(this.transform.angle)
for(let e=t.length-1;e>=0;--e){const i=t[e]
M(n.symbolInstances.get(i),n.collisionArrays[i])}}else for(let t=e.symbolInstanceStart;t<e.symbolInstanceEnd;t++)M(n.symbolInstances.get(t),n.collisionArrays[t])
if(r&&n.bucketInstanceId in this.collisionCircleArrays){const e=this.collisionCircleArrays[n.bucketInstanceId]
t.invert(e.invProjMatrix,a),e.viewportMatrix=this.collisionIndex.getViewportMatrix()}n.justReloaded=!1}markUsedJustification(e,i,r,n){let s
s=n===t.WritingMode.vertical?r.verticalPlacedTextSymbolIndex:{left:r.leftJustifiedTextSymbolIndex,center:r.centerJustifiedTextSymbolIndex,right:r.rightJustifiedTextSymbolIndex}[t.getAnchorJustification(i)]
const a=[r.leftJustifiedTextSymbolIndex,r.centerJustifiedTextSymbolIndex,r.rightJustifiedTextSymbolIndex,r.verticalPlacedTextSymbolIndex]
for(const t of a)t>=0&&(e.text.placedSymbolArray.get(t).crossTileID=s>=0&&t!==s?0:r.crossTileID)}markUsedOrientation(e,i,r){const n=i===t.WritingMode.horizontal||i===t.WritingMode.horizontalOnly?i:0,s=i===t.WritingMode.vertical?i:0,a=[r.leftJustifiedTextSymbolIndex,r.centerJustifiedTextSymbolIndex,r.rightJustifiedTextSymbolIndex]
for(const t of a)e.text.placedSymbolArray.get(t).placedOrientation=n
r.verticalPlacedTextSymbolIndex&&(e.text.placedSymbolArray.get(r.verticalPlacedTextSymbolIndex).placedOrientation=s)}commit(t){this.commitTime=t,this.zoomAtLastRecencyCheck=this.transform.zoom
const e=this.prevPlacement
let i=!1
this.prevZoomAdjustment=e?e.zoomAdjustment(this.transform.zoom):0
const r=e?e.symbolFadeChange(t):1,n=e?e.opacities:{},s=e?e.variableOffsets:{},a=e?e.placedOrientations:{}
for(const o in this.placements){const t=this.placements[o],e=n[o]
e?(this.opacities[o]=new Ct(e,r,t.text,t.icon),i=i||t.text!==e.text.placed||t.icon!==e.icon.placed):(this.opacities[o]=new Ct(null,r,t.text,t.icon,t.skipFade),i=i||t.text||t.icon)}for(const o in n){const t=n[o]
if(!this.opacities[o]){const e=new Ct(t,r,!1,!1)
e.isHidden()||(this.opacities[o]=e,i=i||t.text.placed||t.icon.placed)}}for(const o in s)this.variableOffsets[o]||!this.opacities[o]||this.opacities[o].isHidden()||(this.variableOffsets[o]=s[o])
for(const o in a)this.placedOrientations[o]||!this.opacities[o]||this.opacities[o].isHidden()||(this.placedOrientations[o]=a[o])
if(e&&void 0===e.lastPlacementChangeTime)throw new Error("Last placement time for previous placement is not defined")
i?this.lastPlacementChangeTime=t:"number"!=typeof this.lastPlacementChangeTime&&(this.lastPlacementChangeTime=e?e.lastPlacementChangeTime:t)}updateLayerOpacities(t,e){const i={}
for(const r of e){const e=r.getBucket(t)
e&&r.latestFeatureIndex&&t.id===e.layerIds[0]&&this.updateBucketOpacities(e,i,r.collisionBoxArray)}}updateBucketOpacities(e,i,r){e.hasTextData()&&(e.text.opacityVertexArray.clear(),e.text.hasVisibleVertices=!1),e.hasIconData()&&(e.icon.opacityVertexArray.clear(),e.icon.hasVisibleVertices=!1),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexArray.clear(),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexArray.clear()
const n=e.layers[0].layout,s=new Ct(null,0,!1,!1,!0),a=n.get("text-allow-overlap"),o=n.get("icon-allow-overlap"),l=n.get("text-variable-anchor"),c="map"===n.get("text-rotation-alignment"),h="map"===n.get("text-pitch-alignment"),u="none"!==n.get("icon-text-fit"),d=new Ct(null,0,a&&(o||!e.hasIconData()||n.get("icon-optional")),o&&(a||!e.hasTextData()||n.get("text-optional")),!0)
!e.collisionArrays&&r&&(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData())&&e.deserializeCollisionBoxes(r)
const p=(t,e,i)=>{for(let r=0;r<e/4;r++)t.opacityVertexArray.emplaceBack(i)
t.hasVisibleVertices=t.hasVisibleVertices||i!==Gt}
for(let f=0;f<e.symbolInstances.length;f++){const r=e.symbolInstances.get(f),{numHorizontalGlyphVertices:n,numVerticalGlyphVertices:a,crossTileID:o}=r
let m=this.opacities[o]
i[o]?m=s:m||(m=d,this.opacities[o]=m),i[o]=!0
const g=r.numIconVertices>0,_=this.placedOrientations[r.crossTileID],y=_===t.WritingMode.vertical,x=_===t.WritingMode.horizontal||_===t.WritingMode.horizontalOnly
if(n>0||a>0){const t=Zt(m.text)
p(e.text,n,y?Gt:t),p(e.text,a,x?Gt:t)
const i=m.text.isHidden();[r.rightJustifiedTextSymbolIndex,r.centerJustifiedTextSymbolIndex,r.leftJustifiedTextSymbolIndex].forEach((t=>{t>=0&&(e.text.placedSymbolArray.get(t).hidden=i||y?1:0)})),r.verticalPlacedTextSymbolIndex>=0&&(e.text.placedSymbolArray.get(r.verticalPlacedTextSymbolIndex).hidden=i||x?1:0)
const s=this.variableOffsets[r.crossTileID]
s&&this.markUsedJustification(e,s.anchor,r,_)
const o=this.placedOrientations[r.crossTileID]
o&&(this.markUsedJustification(e,"left",r,o),this.markUsedOrientation(e,o,r))}if(g){const t=Zt(m.icon),i=!(u&&r.verticalPlacedIconSymbolIndex&&y)
r.placedIconSymbolIndex>=0&&(p(e.icon,r.numIconVertices,i?t:Gt),e.icon.placedSymbolArray.get(r.placedIconSymbolIndex).hidden=m.icon.isHidden()),r.verticalPlacedIconSymbolIndex>=0&&(p(e.icon,r.numVerticalIconVertices,i?Gt:t),e.icon.placedSymbolArray.get(r.verticalPlacedIconSymbolIndex).hidden=m.icon.isHidden())}if(e.hasIconCollisionBoxData()||e.hasTextCollisionBoxData()){const i=e.collisionArrays[f]
if(i){let r=new t.Point(0,0)
if(i.textBox||i.verticalTextBox){let t=!0
if(l){const e=this.variableOffsets[o]
e?(r=Lt(e.anchor,e.width,e.height,e.textOffset,e.textBoxScale),c&&r._rotate(h?this.transform.angle:-this.transform.angle)):t=!1}i.textBox&&Ft(e.textCollisionBox.collisionVertexArray,m.text.placed,!t||y,r.x,r.y),i.verticalTextBox&&Ft(e.textCollisionBox.collisionVertexArray,m.text.placed,!t||x,r.x,r.y)}const n=Boolean(!x&&i.verticalIconBox)
i.iconBox&&Ft(e.iconCollisionBox.collisionVertexArray,m.icon.placed,n,u?r.x:0,u?r.y:0),i.verticalIconBox&&Ft(e.iconCollisionBox.collisionVertexArray,m.icon.placed,!n,u?r.x:0,u?r.y:0)}}}if(e.sortFeatures(this.transform.angle),this.retainedQueryData[e.bucketInstanceId]&&(this.retainedQueryData[e.bucketInstanceId].featureSortOrder=e.featureSortOrder),e.hasTextData()&&e.text.opacityVertexBuffer&&e.text.opacityVertexBuffer.updateData(e.text.opacityVertexArray),e.hasIconData()&&e.icon.opacityVertexBuffer&&e.icon.opacityVertexBuffer.updateData(e.icon.opacityVertexArray),e.hasIconCollisionBoxData()&&e.iconCollisionBox.collisionVertexBuffer&&e.iconCollisionBox.collisionVertexBuffer.updateData(e.iconCollisionBox.collisionVertexArray),e.hasTextCollisionBoxData()&&e.textCollisionBox.collisionVertexBuffer&&e.textCollisionBox.collisionVertexBuffer.updateData(e.textCollisionBox.collisionVertexArray),e.text.opacityVertexArray.length!==e.text.layoutVertexArray.length/4)throw new Error(`bucket.text.opacityVertexArray.length (= ${e.text.opacityVertexArray.length}) !== bucket.text.layoutVertexArray.length (= ${e.text.layoutVertexArray.length}) / 4`)
if(e.icon.opacityVertexArray.length!==e.icon.layoutVertexArray.length/4)throw new Error(`bucket.icon.opacityVertexArray.length (= ${e.icon.opacityVertexArray.length}) !== bucket.icon.layoutVertexArray.length (= ${e.icon.layoutVertexArray.length}) / 4`)
if(e.bucketInstanceId in this.collisionCircleArrays){const t=this.collisionCircleArrays[e.bucketInstanceId]
e.placementInvProjMatrix=t.invProjMatrix,e.placementViewportMatrix=t.viewportMatrix,e.collisionCircleArray=t.circles,delete this.collisionCircleArrays[e.bucketInstanceId]}}symbolFadeChange(t){return 0===this.fadeDuration?1:(t-this.commitTime)/this.fadeDuration+this.prevZoomAdjustment}zoomAdjustment(t){return Math.max(0,(this.transform.zoom-t)/1.5)}hasTransitions(t){return this.stale||t-this.lastPlacementChangeTime<this.fadeDuration}stillRecent(t,e){const i=this.zoomAtLastRecencyCheck===e?1-this.zoomAdjustment(e):1
return this.zoomAtLastRecencyCheck=e,this.commitTime+this.fadeDuration*i>t}setStale(){this.stale=!0}}function Ft(t,e,i,r,n){t.emplaceBack(e?1:0,i?1:0,r||0,n||0),t.emplaceBack(e?1:0,i?1:0,r||0,n||0),t.emplaceBack(e?1:0,i?1:0,r||0,n||0),t.emplaceBack(e?1:0,i?1:0,r||0,n||0)}const Ot=Math.pow(2,25),Ut=Math.pow(2,24),Vt=Math.pow(2,17),Nt=Math.pow(2,16),$t=Math.pow(2,9),qt=Math.pow(2,8),jt=Math.pow(2,1)
function Zt(t){if(0===t.opacity&&!t.placed)return 0
if(1===t.opacity&&t.placed)return 4294967295
const e=t.placed?1:0,i=Math.floor(127*t.opacity)
return i*Ot+e*Ut+i*Vt+e*Nt+i*$t+e*qt+i*jt+e}const Gt=0
class Xt{constructor(t){this._sortAcrossTiles="viewport-y"!==t.layout.get("symbol-z-order")&&!t.layout.get("symbol-sort-key").isConstant(),this._currentTileIndex=0,this._currentPartIndex=0,this._seenCrossTileIDs={},this._bucketParts=[]}continuePlacement(t,e,i,r,n){const s=this._bucketParts
for(;this._currentTileIndex<t.length;)if(e.getBucketParts(s,r,t[this._currentTileIndex],this._sortAcrossTiles),this._currentTileIndex++,n())return!0
for(this._sortAcrossTiles&&(this._sortAcrossTiles=!1,s.sort(((t,e)=>t.sortKey-e.sortKey)));this._currentPartIndex<s.length;)if(e.placeLayerBucketPart(s[this._currentPartIndex],this._seenCrossTileIDs,i),this._currentPartIndex++,n())return!0
return!1}}class Wt{constructor(t,e,i,r,n,s,a,o){this.placement=new Rt(t,e,s,a,o),this._currentPlacementIndex=i.length-1,this._forceFullPlacement=r,this._showCollisionBoxes=n,this._done=!1}isDone(){return this._done}continuePlacement(e,i,r){const n=t.exported.now(),s=()=>!this._forceFullPlacement&&t.exported.now()-n>2
for(;this._currentPlacementIndex>=0;){const t=i[e[this._currentPlacementIndex]],n=this.placement.collisionIndex.transform.zoom
if("symbol"===t.type&&(!t.minzoom||t.minzoom<=n)&&(!t.maxzoom||t.maxzoom>n)){if(this._inProgressLayer||(this._inProgressLayer=new Xt(t)),this._inProgressLayer.continuePlacement(r[t.source],this.placement,this._showCollisionBoxes,t,s))return
delete this._inProgressLayer}this._currentPlacementIndex--}this._done=!0}commit(t){return this.placement.commit(t),this.placement}}const Ht=512/t.EXTENT/2
class Kt{constructor(e,i,r){this.tileID=e,this.bucketInstanceId=r,this._symbolsByKey={}
const n=new Map
for(let t=0;t<i.length;t++){const e=i.get(t),r=e.key,s=n.get(r)
s?s.push(e):n.set(r,[e])}for(const[s,a]of n){const e={positions:a.map((t=>({x:Math.floor(t.anchorX*Ht),y:Math.floor(t.anchorY*Ht)}))),crossTileIDs:a.map((t=>t.crossTileID))}
if(e.positions.length>128){const i=new t.KDBush(e.positions.length,16,Uint16Array)
for(const{x:t,y:r}of e.positions)i.add(t,r)
i.finish(),delete e.positions,e.index=i}this._symbolsByKey[s]=e}}getScaledCoordinates(e,i){const{x:r,y:n,z:s}=this.tileID.canonical,{x:a,y:o,z:l}=i.canonical,c=Ht/Math.pow(2,l-s),h=(o*t.EXTENT+e.anchorY)*c,u=n*t.EXTENT*Ht
return{x:Math.floor((a*t.EXTENT+e.anchorX)*c-r*t.EXTENT*Ht),y:Math.floor(h-u)}}findMatches(t,e,i){const r=this.tileID.canonical.z<e.canonical.z?1:Math.pow(2,this.tileID.canonical.z-e.canonical.z)
for(let n=0;n<t.length;n++){const s=t.get(n)
if(s.crossTileID)continue
const a=this._symbolsByKey[s.key]
if(!a)continue
const o=this.getScaledCoordinates(s,e)
if(a.index){const t=a.index.range(o.x-r,o.y-r,o.x+r,o.y+r).sort()
for(const e of t){const t=a.crossTileIDs[e]
if(!i[t]){i[t]=!0,s.crossTileID=t
break}}}else if(a.positions)for(let t=0;t<a.positions.length;t++){const e=a.positions[t],n=a.crossTileIDs[t]
if(Math.abs(e.x-o.x)<=r&&Math.abs(e.y-o.y)<=r&&!i[n]){i[n]=!0,s.crossTileID=n
break}}}}getCrossTileIDsLists(){return Object.values(this._symbolsByKey).map((t=>{let{crossTileIDs:e}=t
return e}))}}class Yt{constructor(){this.maxCrossTileID=0}generate(){return++this.maxCrossTileID}}class Jt{constructor(){this.indexes={},this.usedCrossTileIDs={},this.lng=0}handleWrapJump(t){const e=Math.round((t-this.lng)/360)
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
t.crossTileID||(t.crossTileID=i.generate(),r[t.crossTileID]=!0)}return void 0===this.indexes[t.overscaledZ]&&(this.indexes[t.overscaledZ]={}),this.indexes[t.overscaledZ][t.key]=new Kt(t,e.symbolInstances,e.bucketInstanceId),!0}removeBucketCrossTileIDs(t,e){for(const i of e.getCrossTileIDsLists())for(const e of i)delete this.usedCrossTileIDs[t][e]}removeStaleBuckets(t){let e=!1
for(const i in this.indexes){const r=this.indexes[i]
for(const n in r)t[r[n].bucketInstanceId]||(this.removeBucketCrossTileIDs(i,r[n]),delete r[n],e=!0)}return e}}class Qt{constructor(){this.layerIndexes={},this.crossTileIDs=new Yt,this.maxBucketInstanceId=0,this.bucketsInCurrentPlacement={}}addLayer(t,e,i){let r=this.layerIndexes[t.id]
void 0===r&&(r=this.layerIndexes[t.id]=new Jt)
let n=!1
const s={}
r.handleWrapJump(i)
for(const a of e){const e=a.getBucket(t)
e&&t.id===e.layerIds[0]&&(e.bucketInstanceId||(e.bucketInstanceId=++this.maxBucketInstanceId),r.addBucket(a.tileID,e,this.crossTileIDs)&&(n=!0),s[e.bucketInstanceId]=!0)}return r.removeStaleBuckets(s)&&(n=!0),n}pruneUnusedLayers(t){const e={}
t.forEach((t=>{e[t]=!0}))
for(const i in this.layerIndexes)e[i]||delete this.layerIndexes[i]}}const te=(e,i)=>t.emitValidationErrors(e,i&&i.filter((t=>"source.canvas"!==t.identifier))),ee=t.pick(t.operations,["addLayer","removeLayer","setPaintProperty","setLayoutProperty","setFilter","addSource","removeSource","setLayerZoomRange","setLight","setTransition","setGeoJSONSourceData","setGlyphs","setSprite"]),ie=t.pick(t.operations,["setCenter","setZoom","setBearing","setPitch"]),re=t.emptyStyle()
class ne extends t.Evented{constructor(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
super(),this.map=e,this.dispatcher=new k(nt(),this,e._getMapId()),this.imageManager=new w,this.imageManager.setEventedParent(this),this.glyphManager=new I(e._requestManager,i.localIdeographFontFamily),this.lineAtlas=new z(256,512),this.crossTileSymbolIndex=new Qt,this._spritesImagesIds={},this._layers={},this._order=[],this.sourceCaches={},this.zoomHistory=new t.ZoomHistory,this._loaded=!1,this._availableImages=[],this._resetUpdates(),this.dispatcher.broadcast("setReferrer",t.getReferrer())
const r=this
this._rtlTextPluginCallback=ne.registerForPluginStateChange((e=>{r.dispatcher.broadcast("syncRTLPluginState",{pluginStatus:e.pluginStatus,pluginURL:e.pluginURL},((e,i)=>{if(t.triggerPluginCompletionEvent(e),i&&i.every((t=>t)))for(const t in r.sourceCaches){const e=r.sourceCaches[t].getSource().type
"vector"!==e&&"geojson"!==e||r.sourceCaches[t].reload()}}))})),this.on("data",(t=>{if("source"!==t.dataType||"metadata"!==t.sourceDataType)return
const e=this.sourceCaches[t.sourceId]
if(!e)return
const i=e.getSource()
if(i&&i.vectorLayerIds)for(const r in this._layers){const t=this._layers[r]
t.source===i.id&&this._validateLayer(t)}}))}loadURL(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
this.fire(new t.Event("dataloading",{dataType:"style"})),i.validate="boolean"!=typeof i.validate||i.validate
const n=this.map._requestManager.transformRequest(e,h.Style)
this._request=t.getJSON(n,((e,n)=>{this._request=null,e?this.fire(new t.ErrorEvent(e)):n&&this._load(n,i,r)}))}loadJSON(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
this.fire(new t.Event("dataloading",{dataType:"style"})),this._request=t.exported.frame((()=>{this._request=null,i.validate=!1!==i.validate,this._load(e,i,r)}))}loadEmpty(){this.fire(new t.Event("dataloading",{dataType:"style"})),this._load(re,{validate:!1})}_load(e,i,r){const n=i.transformStyle?i.transformStyle(r,e):e
if(!i.validate||!te(this,t.validateStyle(n))){this._loaded=!0,this.stylesheet=n
for(const t in n.sources)this.addSource(t,n.sources[t],{validate:!1})
n.sprite?this._loadSprite(n.sprite):this.imageManager.setLoaded(!0),this.glyphManager.setURL(n.glyphs),this._createLayers(),this.light=new P(this.stylesheet.light),this.map.setTerrain(this.stylesheet.terrain),this.fire(new t.Event("data",{dataType:"style"})),this.fire(new t.Event("style.load"))}}_createLayers(){const e=t.derefLayers(this.stylesheet.layers)
this.dispatcher.broadcast("setLayers",e),this._order=e.map((t=>t.id)),this._layers={},this._serializedLayers=null
for(const i of e){const e=t.createStyleLayer(i)
e.setEventedParent(this,{layer:{id:i.id}}),this._layers[i.id]=e}}_loadSprite(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0
this.imageManager.setLoaded(!1),this._spriteRequest=function(e,i,r,n){const s=y(e),a=s.length,o=r>1?"@2x":"",l={},c={},d={}
for(const{id:p,url:f}of s){const e=i.transformRequest(i.normalizeSpriteURL(f,o,".json"),h.SpriteJSON),r=`${p}_${e.url}`
l[r]=t.getJSON(e,((t,e)=>{delete l[r],c[p]=e,x(n,c,d,t,a)}))
const s=i.transformRequest(i.normalizeSpriteURL(f,o,".png"),h.SpriteImage),m=`${p}_${s.url}`
l[m]=u.getImage(s,((t,e)=>{delete l[m],d[p]=e,x(n,c,d,t,a)}))}return{cancel(){for(const t of Object.values(l))t.cancel()}}}(e,this.map._requestManager,this.map.getPixelRatio(),((e,n)=>{if(this._spriteRequest=null,e)this.fire(new t.ErrorEvent(e))
else if(n)for(const t in n){this._spritesImagesIds[t]=[]
const e=this._spritesImagesIds[t]?this._spritesImagesIds[t].filter((t=>!(t in n))):[]
for(const t of e)this.imageManager.removeImage(t),this._changedImages[t]=!0
for(const r in n[t]){const e="default"===t?r:`${t}:${r}`
this._spritesImagesIds[t].push(e),e in this.imageManager.images?this.imageManager.updateImage(e,n[t][r],!1):this.imageManager.addImage(e,n[t][r]),i&&(this._changedImages[e]=!0)}}this.imageManager.setLoaded(!0),this._availableImages=this.imageManager.listImages(),i&&(this._changed=!0),this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"})),r&&r(e)}))}_unloadSprite(){for(const t of Object.values(this._spritesImagesIds).flat())this.imageManager.removeImage(t),this._changedImages[t]=!0
this._spritesImagesIds={},this._availableImages=this.imageManager.listImages(),this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"}))}_validateLayer(e){const i=this.sourceCaches[e.source]
if(!i)return
const r=e.sourceLayer
if(!r)return
const n=i.getSource();("geojson"===n.type||n.vectorLayerIds&&-1===n.vectorLayerIds.indexOf(r))&&this.fire(new t.ErrorEvent(new Error(`Source layer "${r}" does not exist on source "${n.id}" as specified by style layer "${e.id}".`)))}loaded(){if(!this._loaded)return!1
if(Object.keys(this._updatedSources).length)return!1
for(const t in this.sourceCaches)if(!this.sourceCaches[t].loaded())return!1
return!!this.imageManager.isLoaded()}_serializeByIds(t){const e=this._serializedAllLayers()
if(!t||0===t.length)return Object.values(e)
const i=[]
for(const r of t)e[r]&&i.push(e[r])
return i}_serializedAllLayers(){let t=this._serializedLayers
if(t)return t
t=this._serializedLayers={}
const e=Object.keys(this._layers)
for(const i of e){const e=this._layers[i]
"custom"!==e.type&&(t[i]=e.serialize())}return t}hasTransitions(){if(this.light&&this.light.hasTransition())return!0
for(const t in this.sourceCaches)if(this.sourceCaches[t].hasTransition())return!0
for(const t in this._layers)if(this._layers[t].hasTransition())return!0
return!1}_checkLoaded(){if(!this._loaded)throw new Error("Style is not done loading.")}update(e){if(!this._loaded)return
const i=this._changed
if(this._changed){const t=Object.keys(this._updatedLayers),i=Object.keys(this._removedLayers);(t.length||i.length)&&this._updateWorkerLayers(t,i)
for(const e in this._updatedSources){const t=this._updatedSources[e]
if("reload"===t)this._reloadSource(e)
else{if("clear"!==t)throw new Error(`Invalid action ${t}`)
this._clearSource(e)}}this._updateTilesForChangedImages(),this._updateTilesForChangedGlyphs()
for(const r in this._updatedPaintProps)this._layers[r].updateTransitions(e)
this.light.updateTransitions(e),this._resetUpdates()}const r={}
for(const t in this.sourceCaches){const e=this.sourceCaches[t]
r[t]=e.used,e.used=!1}for(const t of this._order){const i=this._layers[t]
i.recalculate(e,this._availableImages),!i.isHidden(e.zoom)&&i.source&&(this.sourceCaches[i.source].used=!0)}for(const n in r){const e=this.sourceCaches[n]
r[n]!==e.used&&e.fire(new t.Event("data",{sourceDataType:"visibility",dataType:"source",sourceId:n}))}this.light.recalculate(e),this.z=e.zoom,i&&this.fire(new t.Event("data",{dataType:"style"}))}_updateTilesForChangedImages(){const t=Object.keys(this._changedImages)
if(t.length){for(const e in this.sourceCaches)this.sourceCaches[e].reloadTilesForDependencies(["icons","patterns"],t)
this._changedImages={}}}_updateTilesForChangedGlyphs(){if(this._glyphsDidChange){for(const t in this.sourceCaches)this.sourceCaches[t].reloadTilesForDependencies(["glyphs"],[""])
this._glyphsDidChange=!1}}_updateWorkerLayers(t,e){this.dispatcher.broadcast("updateLayers",{layers:this._serializeByIds(t),removedIds:e})}_resetUpdates(){this._changed=!1,this._updatedLayers={},this._removedLayers={},this._updatedSources={},this._updatedPaintProps={},this._changedImages={},this._glyphsDidChange=!1}setState(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this._checkLoaded()
const r=this.serialize()
if(e=i.transformStyle?i.transformStyle(r,e):e,te(this,t.validateStyle(e)))return!1;(e=t.clone$1(e)).layers=t.derefLayers(e.layers)
const n=t.diffStyles(r,e).filter((t=>!(t.command in ie)))
if(0===n.length)return!1
const s=n.filter((t=>!(t.command in ee)))
if(s.length>0)throw new Error(`Unimplemented: ${s.map((t=>t.command)).join(", ")}.`)
for(const t of n)"setTransition"!==t.command&&this[t.command].apply(this,t.args)
return this.stylesheet=e,!0}addImage(e,i){if(this.getImage(e))return this.fire(new t.ErrorEvent(new Error(`An image named "${e}" already exists.`)))
this.imageManager.addImage(e,i),this._afterImageUpdated(e)}updateImage(t,e){this.imageManager.updateImage(t,e)}getImage(t){return this.imageManager.getImage(t)}removeImage(e){if(!this.getImage(e))return this.fire(new t.ErrorEvent(new Error(`An image named "${e}" does not exist.`)))
this.imageManager.removeImage(e),this._afterImageUpdated(e)}_afterImageUpdated(e){this._availableImages=this.imageManager.listImages(),this._changedImages[e]=!0,this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"}))}listImages(){return this._checkLoaded(),this.imageManager.listImages()}addSource(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(this._checkLoaded(),void 0!==this.sourceCaches[e])throw new Error(`Source "${e}" already exists.`)
if(!i.type)throw new Error(`The type property must be defined, but only the following properties were given: ${Object.keys(i).join(", ")}.`)
if(["vector","raster","geojson","video","image"].indexOf(i.type)>=0&&this._validate(t.validateStyle.source,`sources.${e}`,i,null,r))return
this.map&&this.map._collectResourceTiming&&(i.collectResourceTiming=!0)
const n=this.sourceCaches[e]=new Y(e,i,this.dispatcher)
n.style=this,n.setEventedParent(this,(()=>({isSourceLoaded:n.loaded(),source:n.serialize(),sourceId:e}))),n.onAdd(this.map),this._changed=!0}removeSource(e){if(this._checkLoaded(),void 0===this.sourceCaches[e])throw new Error("There is no source with this ID")
for(const r in this._layers)if(this._layers[r].source===e)return this.fire(new t.ErrorEvent(new Error(`Source "${e}" cannot be removed while layer "${r}" is using it.`)))
const i=this.sourceCaches[e]
delete this.sourceCaches[e],delete this._updatedSources[e],i.fire(new t.Event("data",{sourceDataType:"metadata",dataType:"source",sourceId:e})),i.setEventedParent(null),i.onRemove(this.map),this._changed=!0}setGeoJSONSourceData(t,e){if(this._checkLoaded(),void 0===this.sourceCaches[t])throw new Error(`There is no source with this ID=${t}`)
const i=this.sourceCaches[t].getSource()
if("geojson"!==i.type)throw new Error(`geojsonSource.type is ${i.type}, which is !== 'geojson`)
i.setData(e),this._changed=!0}getSource(t){return this.sourceCaches[t]&&this.sourceCaches[t].getSource()}addLayer(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._checkLoaded()
const n=e.id
if(this.getLayer(n))return void this.fire(new t.ErrorEvent(new Error(`Layer "${n}" already exists on this map.`)))
let s
if("custom"===e.type){if(te(this,t.validateCustomStyleLayer(e)))return
s=t.createStyleLayer(e)}else{if("object"==typeof e.source&&(this.addSource(n,e.source),e=t.clone$1(e),e=t.extend(e,{source:n})),this._validate(t.validateStyle.layer,`layers.${n}`,e,{arrayIndex:-1},r))return
s=t.createStyleLayer(e),this._validateLayer(s),s.setEventedParent(this,{layer:{id:n}})}const a=i?this._order.indexOf(i):this._order.length
if(i&&-1===a)this.fire(new t.ErrorEvent(new Error(`Cannot add layer "${n}" before non-existing layer "${i}".`)))
else{if(this._order.splice(a,0,n),this._layerOrderChanged=!0,this._layers[n]=s,this._removedLayers[n]&&s.source&&"custom"!==s.type){const t=this._removedLayers[n]
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
this._order.splice(r,1),this._layerOrderChanged=!0,this._changed=!0,this._removedLayers[e]=i,delete this._layers[e],this._serializedLayers&&delete this._serializedLayers[e],delete this._updatedLayers[e],delete this._updatedPaintProps[e],i.onRemove&&i.onRemove(this.map)}getLayer(t){return this._layers[t]}hasLayer(t){return t in this._layers}setLayerZoomRange(e,i,r){this._checkLoaded()
const n=this.getLayer(e)
n?n.minzoom===i&&n.maxzoom===r||(null!=i&&(n.minzoom=i),null!=r&&(n.maxzoom=r),this._updateLayer(n)):this.fire(new t.ErrorEvent(new Error(`Cannot set the zoom range of non-existing layer "${e}".`)))}setFilter(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._checkLoaded()
const n=this.getLayer(e)
if(n){if(!t.deepEqual(n.filter,i))return null==i?(n.filter=void 0,void this._updateLayer(n)):void(this._validate(t.validateStyle.filter,`layers.${n.id}.filter`,i,null,r)||(n.filter=t.clone$1(i),this._updateLayer(n)))}else this.fire(new t.ErrorEvent(new Error(`Cannot filter non-existing layer "${e}".`)))}getFilter(e){return t.clone$1(this.getLayer(e).filter)}setLayoutProperty(e,i,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
this._checkLoaded()
const s=this.getLayer(e)
s?t.deepEqual(s.getLayoutProperty(i),r)||(s.setLayoutProperty(i,r,n),this._updateLayer(s)):this.fire(new t.ErrorEvent(new Error(`Cannot style non-existing layer "${e}".`)))}getLayoutProperty(e,i){const r=this.getLayer(e)
if(r)return r.getLayoutProperty(i)
this.fire(new t.ErrorEvent(new Error(`Cannot get style of non-existing layer "${e}".`)))}setPaintProperty(e,i,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
this._checkLoaded()
const s=this.getLayer(e)
s?t.deepEqual(s.getPaintProperty(i),r)||(s.setPaintProperty(i,r,n)&&this._updateLayer(s),this._changed=!0,this._updatedPaintProps[e]=!0):this.fire(new t.ErrorEvent(new Error(`Cannot style non-existing layer "${e}".`)))}getPaintProperty(t,e){return this.getLayer(t).getPaintProperty(e)}setFeatureState(e,i){this._checkLoaded()
const r=e.source,n=e.sourceLayer,s=this.sourceCaches[r]
if(void 0===s)return void this.fire(new t.ErrorEvent(new Error(`The source '${r}' does not exist in the map's style.`)))
const a=s.getSource().type
"geojson"===a&&n?this.fire(new t.ErrorEvent(new Error("GeoJSON sources cannot have a sourceLayer parameter."))):"vector"!==a||n?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),s.setFeatureState(n,e.id,i)):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}removeFeatureState(e,i){this._checkLoaded()
const r=e.source,n=this.sourceCaches[r]
if(void 0===n)return void this.fire(new t.ErrorEvent(new Error(`The source '${r}' does not exist in the map's style.`)))
const s=n.getSource().type,a="vector"===s?e.sourceLayer:void 0
"vector"!==s||a?i&&"string"!=typeof e.id&&"number"!=typeof e.id?this.fire(new t.ErrorEvent(new Error("A feature id is required to remove its specific state property."))):n.removeFeatureState(a,e.id,i):this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))}getFeatureState(e){this._checkLoaded()
const i=e.source,r=e.sourceLayer,n=this.sourceCaches[i]
if(void 0!==n)return"vector"!==n.getSource().type||r?(void 0===e.id&&this.fire(new t.ErrorEvent(new Error("The feature id parameter must be provided."))),n.getFeatureState(r,e.id)):void this.fire(new t.ErrorEvent(new Error("The sourceLayer parameter must be provided for vector source types.")))
this.fire(new t.ErrorEvent(new Error(`The source '${i}' does not exist in the map's style.`)))}getTransition(){return t.extend({duration:300,delay:0},this.stylesheet&&this.stylesheet.transition)}serialize(){const e=t.mapObject(this.sourceCaches,(t=>t.serialize())),i=this._serializeByIds(this._order),r=this.stylesheet
return t.filterObject({version:r.version,name:r.name,metadata:r.metadata,light:r.light,center:r.center,zoom:r.zoom,bearing:r.bearing,pitch:r.pitch,sprite:r.sprite,glyphs:r.glyphs,transition:r.transition,sources:e,layers:i},(t=>void 0!==t))}_updateLayer(t){this._updatedLayers[t.id]=!0,t.source&&!this._updatedSources[t.source]&&"raster"!==this.sourceCaches[t.source].getSource().type&&(this._updatedSources[t.source]="reload",this.sourceCaches[t.source].pause()),this._serializedLayers=null,this._changed=!0}_flattenAndSortRenderedFeatures(t){const e=t=>"fill-extrusion"===this._layers[t].type,i={},r=[]
for(let s=this._order.length-1;s>=0;s--){const n=this._order[s]
if(e(n)){i[n]=s
for(const e of t){const t=e[n]
if(t)for(const e of t)r.push(e)}}}r.sort(((t,e)=>e.intersectionZ-t.intersectionZ))
const n=[]
for(let s=this._order.length-1;s>=0;s--){const a=this._order[s]
if(e(a))for(let t=r.length-1;t>=0;t--){const e=r[t].feature
if(i[e.layer.id]<s)break
n.push(e),r.pop()}else for(const e of t){const t=e[a]
if(t)for(const e of t)n.push(e.feature)}}return n}queryRenderedFeatures(e,i,r){i&&i.filter&&this._validate(t.validateStyle.filter,"queryRenderedFeatures.filter",i.filter,null,i)
const n={}
if(i&&i.layers){if(!Array.isArray(i.layers))return this.fire(new t.ErrorEvent(new Error("parameters.layers must be an Array."))),[]
for(const e of i.layers){const i=this._layers[e]
if(!i)return this.fire(new t.ErrorEvent(new Error(`The layer '${e}' does not exist in the map's style and cannot be queried for features.`))),[]
n[i.source]=!0}}const s=[]
i.availableImages=this._availableImages
const a=this._serializedAllLayers()
for(const t in this.sourceCaches)i.layers&&!n[t]||s.push(G(this.sourceCaches[t],this._layers,a,e,i,r))
return this.placement&&s.push(function(t,e,i,r,n,s,a){const o={},l=s.queryRenderedSymbols(r),c=[]
for(const h of Object.keys(l).map(Number))c.push(a[h])
c.sort(X)
for(const h of c){const i=h.featureIndex.lookupSymbolFeatures(l[h.bucketInstanceId],e,h.bucketIndex,h.sourceLayerIndex,n.filter,n.layers,n.availableImages,t)
for(const t in i){const e=o[t]=o[t]||[],r=i[t]
r.sort(((t,e)=>{const i=h.featureSortOrder
if(i){const r=i.indexOf(t.featureIndex)
return i.indexOf(e.featureIndex)-r}return e.featureIndex-t.featureIndex}))
for(const t of r)e.push(t)}}for(const h in o)o[h].forEach((e=>{const r=e.feature,n=i[t[h].source].getFeatureState(r.layer["source-layer"],r.id)
r.source=r.layer.source,r.layer["source-layer"]&&(r.sourceLayer=r.layer["source-layer"]),r.state=n}))
return o}(this._layers,a,this.sourceCaches,e,i,this.placement.collisionIndex,this.placement.retainedQueryData)),this._flattenAndSortRenderedFeatures(s)}querySourceFeatures(e,i){i&&i.filter&&this._validate(t.validateStyle.filter,"querySourceFeatures.filter",i.filter,null,i)
const r=this.sourceCaches[e]
return r?function(t,e){const i=t.getRenderableIds().map((e=>t.getTileByID(e))),r=[],n={}
for(let s=0;s<i.length;s++){const t=i[s],a=t.tileID.canonical.key
n[a]||(n[a]=!0,t.querySourceFeatures(r,e))}return r}(r,i):[]}addSourceType(t,e,i){return ne.getSourceType(t)?i(new Error(`A source type called "${t}" already exists.`)):(ne.setSourceType(t,e),e.workerSourceURL?void this.dispatcher.broadcast("loadWorkerSource",{name:t,url:e.workerSourceURL},i):i(null,null))}getLight(){return this.light.getLight()}setLight(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this._checkLoaded()
const r=this.light.getLight()
let n=!1
for(const a in e)if(!t.deepEqual(e[a],r[a])){n=!0
break}if(!n)return
const s={now:t.exported.now(),transition:t.extend({duration:300,delay:0},this.stylesheet.transition)}
this.light.setLight(e,i),this.light.updateTransitions(s)}_validate(e,i,r,n){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
return(!s||!1!==s.validate)&&te(this,e.call(t.validateStyle,t.extend({key:i,style:this.serialize(),value:r,styleSpec:t.v8Spec},n)))}_remove(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this._request&&(this._request.cancel(),this._request=null),this._spriteRequest&&(this._spriteRequest.cancel(),this._spriteRequest=null),t.evented.off("pluginStateChange",this._rtlTextPluginCallback)
for(const t in this._layers)this._layers[t].setEventedParent(null)
for(const t in this.sourceCaches){const e=this.sourceCaches[t]
e.setEventedParent(null),e.onRemove(this.map)}this.imageManager.setEventedParent(null),this.setEventedParent(null),this.dispatcher.remove(e)}_clearSource(t){this.sourceCaches[t].clearTiles()}_reloadSource(t){this.sourceCaches[t].resume(),this.sourceCaches[t].reload()}_updateSources(t){for(const e in this.sourceCaches)this.sourceCaches[e].update(t,this.map.terrain)}_generateCollisionBoxes(){for(const t in this.sourceCaches)this._reloadSource(t)}_updatePlacement(e,i,r,n){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=!1,o=!1
const l={}
for(const t of this._order){const i=this._layers[t]
if("symbol"!==i.type)continue
if(!l[i.source]){const t=this.sourceCaches[i.source]
l[i.source]=t.getRenderableIds(!0).map((e=>t.getTileByID(e))).sort(((t,e)=>e.tileID.overscaledZ-t.tileID.overscaledZ||(t.tileID.isLessThan(e.tileID)?-1:1)))}const r=this.crossTileSymbolIndex.addLayer(i,l[i.source],e.center.lng)
a=a||r}if(this.crossTileSymbolIndex.pruneUnusedLayers(this._order),((s=s||this._layerOrderChanged||0===r)||!this.pauseablePlacement||this.pauseablePlacement.isDone()&&!this.placement.stillRecent(t.exported.now(),e.zoom))&&(this.pauseablePlacement=new Wt(e,this.map.terrain,this._order,s,i,r,n,this.placement),this._layerOrderChanged=!1),this.pauseablePlacement.isDone()?this.placement.setStale():(this.pauseablePlacement.continuePlacement(this._order,this._layers,l),this.pauseablePlacement.isDone()&&(this.placement=this.pauseablePlacement.commit(t.exported.now()),o=!0),a&&this.pauseablePlacement.placement.setStale()),o||a)for(const t of this._order){const e=this._layers[t]
"symbol"===e.type&&this.placement.updateLayerOpacities(e,l[e.source])}return!this.pauseablePlacement.isDone()||this.placement.hasTransitions(t.exported.now())}_releaseSymbolFadeTiles(){for(const t in this.sourceCaches)this.sourceCaches[t].releaseSymbolFadeTiles()}getImages(t,e,i){this.imageManager.getImages(e.icons,i),this._updateTilesForChangedImages()
const r=this.sourceCaches[e.source]
r&&r.setDependencies(e.tileID.key,e.type,e.icons)}getGlyphs(t,e,i){this.glyphManager.getGlyphs(e.stacks,i)
const r=this.sourceCaches[e.source]
r&&r.setDependencies(e.tileID.key,e.type,[""])}getResource(e,i,r){return t.makeRequest(i,r)}getGlyphsUrl(){return this.stylesheet.glyphs||null}setGlyphs(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this._checkLoaded(),e&&this._validate(t.validateStyle.glyphs,"glyphs",e,null,i)||(this._glyphsDidChange=!0,this.stylesheet.glyphs=e,this.glyphManager.entries={},this.glyphManager.setURL(e))}addSprite(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0
this._checkLoaded()
const s=[{id:e,url:i}],a=[...y(this.stylesheet.sprite),...s]
this._validate(t.validateStyle.sprite,"sprite",a,null,r)||(this.stylesheet.sprite=a,this._loadSprite(s,!0,n))}removeSprite(e){this._checkLoaded()
const i=y(this.stylesheet.sprite)
if(i.find((t=>t.id===e))){if(this._spritesImagesIds[e])for(const t of this._spritesImagesIds[e])this.imageManager.removeImage(t),this._changedImages[t]=!0
i.splice(i.findIndex((t=>t.id===e)),1),this.stylesheet.sprite=i.length>0?i:void 0,delete this._spritesImagesIds[e],this._availableImages=this.imageManager.listImages(),this._changed=!0,this.dispatcher.broadcast("setImages",this._availableImages),this.fire(new t.Event("data",{dataType:"style"}))}else this.fire(new t.ErrorEvent(new Error(`Sprite "${e}" doesn't exists on this map.`)))}getSprite(){return y(this.stylesheet.sprite)}setSprite(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
this._checkLoaded(),e&&this._validate(t.validateStyle.sprite,"sprite",e,null,i)||(this.stylesheet.sprite=e,e?this._loadSprite(e,!0,r):(this._unloadSprite(),r&&r(null)))}}ne.getSourceType=function(t){return j[t]},ne.setSourceType=function(t,e){j[t]=e},ne.registerForPluginStateChange=t.registerForPluginStateChange
var se=t.createLayout([{name:"a_pos",type:"Int16",components:2}]),ae="in vec3 a_pos3d;uniform mat4 u_matrix;uniform float u_ele_delta;out vec2 v_texture_pos;out float v_depth;void main() {float extent=8192.0;float ele_delta=a_pos3d.z==1.0 ? u_ele_delta : 0.0;v_texture_pos=a_pos3d.xy/extent;gl_Position=u_matrix*vec4(a_pos3d.xy,get_elevation(a_pos3d.xy)-ele_delta,1.0);v_depth=gl_Position.z/gl_Position.w;}"
const oe={prelude:le("#ifdef GL_ES\nprecision mediump float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nout highp vec4 fragColor;","#ifdef GL_ES\nprecision highp float;\n#else\n#if !defined(lowp)\n#define lowp\n#endif\n#if !defined(mediump)\n#define mediump\n#endif\n#if !defined(highp)\n#define highp\n#endif\n#endif\nvec2 unpack_float(const float packedValue) {int packedIntValue=int(packedValue);int v0=packedIntValue/256;return vec2(v0,packedIntValue-v0*256);}vec2 unpack_opacity(const float packedOpacity) {int intOpacity=int(packedOpacity)/2;return vec2(float(intOpacity)/127.0,mod(packedOpacity,2.0));}vec4 decode_color(const vec2 encodedColor) {return vec4(unpack_float(encodedColor[0])/255.0,unpack_float(encodedColor[1])/255.0\n);}float unpack_mix_vec2(const vec2 packedValue,const float t) {return mix(packedValue[0],packedValue[1],t);}vec4 unpack_mix_color(const vec4 packedColors,const float t) {vec4 minColor=decode_color(vec2(packedColors[0],packedColors[1]));vec4 maxColor=decode_color(vec2(packedColors[2],packedColors[3]));return mix(minColor,maxColor,t);}vec2 get_pattern_pos(const vec2 pixel_coord_upper,const vec2 pixel_coord_lower,const vec2 pattern_size,const float tile_units_to_pixels,const vec2 pos) {vec2 offset=mod(mod(mod(pixel_coord_upper,pattern_size)*256.0,pattern_size)*256.0+pixel_coord_lower,pattern_size);return (tile_units_to_pixels*pos+offset)/pattern_size;}\n#ifdef TERRAIN3D\nuniform sampler2D u_terrain;uniform float u_terrain_dim;uniform mat4 u_terrain_matrix;uniform vec4 u_terrain_unpack;uniform float u_terrain_exaggeration;uniform highp sampler2D u_depth;\n#endif\nconst highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitShifts=vec4(1.)/bitSh;highp float unpack(highp vec4 color) {return dot(color,bitShifts);}highp float depthOpacity(vec3 frag) {\n#ifdef TERRAIN3D\nhighp float d=unpack(texture(u_depth,frag.xy*0.5+0.5))+0.0001-frag.z;return 1.0-max(0.0,min(1.0,-d*500.0));\n#else\nreturn 1.0;\n#endif\n}float calculate_visibility(vec4 pos) {\n#ifdef TERRAIN3D\nvec3 frag=pos.xyz/pos.w;highp float d=depthOpacity(frag);if (d > 0.95) return 1.0;return (d+depthOpacity(frag+vec3(0.0,0.01,0.0)))/2.0;\n#else\nreturn 1.0;\n#endif\n}float ele(vec2 pos) {\n#ifdef TERRAIN3D\nvec4 rgb=(texture(u_terrain,pos)*255.0)*u_terrain_unpack;return rgb.r+rgb.g+rgb.b-u_terrain_unpack.a;\n#else\nreturn 0.0;\n#endif\n}float get_elevation(vec2 pos) {\n#ifdef TERRAIN3D\nvec2 coord=(u_terrain_matrix*vec4(pos,0.0,1.0)).xy*u_terrain_dim+1.0;vec2 f=fract(coord);vec2 c=(floor(coord)+0.5)/(u_terrain_dim+2.0);float d=1.0/(u_terrain_dim+2.0);float tl=ele(c);float tr=ele(c+vec2(d,0.0));float bl=ele(c+vec2(0.0,d));float br=ele(c+vec2(d,d));float elevation=mix(mix(tl,tr,f.x),mix(bl,br,f.x),f.y);return elevation*u_terrain_exaggeration;\n#else\nreturn 0.0;\n#endif\n}"),background:le("uniform vec4 u_color;uniform float u_opacity;void main() {fragColor=u_color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","in vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),backgroundPattern:le("uniform vec2 u_pattern_tl_a;uniform vec2 u_pattern_br_a;uniform vec2 u_pattern_tl_b;uniform vec2 u_pattern_br_b;uniform vec2 u_texsize;uniform float u_mix;uniform float u_opacity;uniform sampler2D u_image;in vec2 v_pos_a;in vec2 v_pos_b;void main() {vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(u_pattern_tl_a/u_texsize,u_pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(u_pattern_tl_b/u_texsize,u_pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);fragColor=mix(color1,color2,u_mix)*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pattern_size_a;uniform vec2 u_pattern_size_b;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_scale_a;uniform float u_scale_b;uniform float u_tile_units_to_pixels;in vec2 a_pos;out vec2 v_pos_a;out vec2 v_pos_b;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_a*u_pattern_size_a,u_tile_units_to_pixels,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,u_scale_b*u_pattern_size_b,u_tile_units_to_pixels,a_pos);}"),circle:le("in vec3 v_data;in float v_visibility;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=v_data.xy;float extrude_length=length(extrude);lowp float antialiasblur=v_data.z;float antialiased_blur=-max(blur,antialiasblur);float opacity_t=smoothstep(0.0,antialiased_blur,extrude_length-1.0);float color_t=stroke_width < 0.01 ? 0.0 : smoothstep(antialiased_blur,0.0,extrude_length-radius/(radius+stroke_width));fragColor=v_visibility*opacity_t*mix(color*opacity,stroke_color*stroke_opacity,color_t);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform bool u_scale_with_map;uniform bool u_pitch_with_map;uniform vec2 u_extrude_scale;uniform lowp float u_device_pixel_ratio;uniform highp float u_camera_to_center_distance;in vec2 a_pos;out vec3 v_data;out float v_visibility;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\nvoid main(void) {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize mediump float radius\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize highp vec4 stroke_color\n#pragma mapbox: initialize mediump float stroke_width\n#pragma mapbox: initialize lowp float stroke_opacity\nvec2 extrude=vec2(mod(a_pos,2.0)*2.0-1.0);vec2 circle_center=floor(a_pos*0.5);float ele=get_elevation(circle_center);v_visibility=calculate_visibility(u_matrix*vec4(circle_center,ele,1.0));if (u_pitch_with_map) {vec2 corner_position=circle_center;if (u_scale_with_map) {corner_position+=extrude*(radius+stroke_width)*u_extrude_scale;} else {vec4 projected_center=u_matrix*vec4(circle_center,0,1);corner_position+=extrude*(radius+stroke_width)*u_extrude_scale*(projected_center.w/u_camera_to_center_distance);}gl_Position=u_matrix*vec4(corner_position,ele,1);} else {gl_Position=u_matrix*vec4(circle_center,ele,1);if (u_scale_with_map) {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*u_camera_to_center_distance;} else {gl_Position.xy+=extrude*(radius+stroke_width)*u_extrude_scale*gl_Position.w;}}lowp float antialiasblur=1.0/u_device_pixel_ratio/(radius+stroke_width);v_data=vec3(extrude.x,extrude.y,antialiasblur);}"),clippingMask:le("void main() {fragColor=vec4(1.0);}","in vec2 a_pos;uniform mat4 u_matrix;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);}"),heatmap:le("uniform highp float u_intensity;in vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#define GAUSS_COEF 0.3989422804014327\nvoid main() {\n#pragma mapbox: initialize highp float weight\nfloat d=-0.5*3.0*3.0*dot(v_extrude,v_extrude);float val=weight*u_intensity*GAUSS_COEF*exp(d);fragColor=vec4(val,1.0,1.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform float u_extrude_scale;uniform float u_opacity;uniform float u_intensity;in vec2 a_pos;out vec2 v_extrude;\n#pragma mapbox: define highp float weight\n#pragma mapbox: define mediump float radius\nconst highp float ZERO=1.0/255.0/16.0;\n#define GAUSS_COEF 0.3989422804014327\nvoid main(void) {\n#pragma mapbox: initialize highp float weight\n#pragma mapbox: initialize mediump float radius\nvec2 unscaled_extrude=vec2(mod(a_pos,2.0)*2.0-1.0);float S=sqrt(-2.0*log(ZERO/weight/u_intensity/GAUSS_COEF))/3.0;v_extrude=S*unscaled_extrude;vec2 extrude=v_extrude*radius*u_extrude_scale;vec4 pos=vec4(floor(a_pos*0.5)+extrude,0,1);gl_Position=u_matrix*pos;}"),heatmapTexture:le("uniform sampler2D u_image;uniform sampler2D u_color_ramp;uniform float u_opacity;in vec2 v_pos;void main() {float t=texture(u_image,v_pos).r;vec4 color=texture(u_color_ramp,vec2(t,0.5));fragColor=color*u_opacity;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(0.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;in vec2 a_pos;out vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos*u_world,0,1);v_pos.x=a_pos.x;v_pos.y=1.0-a_pos.y;}"),collisionBox:le("in float v_placed;in float v_notUsed;void main() {float alpha=0.5;fragColor=vec4(1.0,0.0,0.0,1.0)*alpha;if (v_placed > 0.5) {fragColor=vec4(0.0,0.0,1.0,0.5)*alpha;}if (v_notUsed > 0.5) {fragColor*=.1;}}","in vec2 a_pos;in vec2 a_anchor_pos;in vec2 a_extrude;in vec2 a_placed;in vec2 a_shift;uniform mat4 u_matrix;uniform vec2 u_extrude_scale;uniform float u_camera_to_center_distance;out float v_placed;out float v_notUsed;void main() {vec4 projectedPoint=u_matrix*vec4(a_anchor_pos,0,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);gl_Position=u_matrix*vec4(a_pos,get_elevation(a_pos),1.0);gl_Position.xy+=(a_extrude+a_shift)*u_extrude_scale*gl_Position.w*collision_perspective_ratio;v_placed=a_placed.x;v_notUsed=a_placed.y;}"),collisionCircle:le("in float v_radius;in vec2 v_extrude;in float v_perspective_ratio;in float v_collision;void main() {float alpha=0.5*min(v_perspective_ratio,1.0);float stroke_radius=0.9*max(v_perspective_ratio,1.0);float distance_to_center=length(v_extrude);float distance_to_edge=abs(distance_to_center-v_radius);float opacity_t=smoothstep(-stroke_radius,0.0,-distance_to_edge);vec4 color=mix(vec4(0.0,0.0,1.0,0.5),vec4(1.0,0.0,0.0,1.0),v_collision);fragColor=color*alpha*opacity_t;}","in vec2 a_pos;in float a_radius;in vec2 a_flags;uniform mat4 u_matrix;uniform mat4 u_inv_matrix;uniform vec2 u_viewport_size;uniform float u_camera_to_center_distance;out float v_radius;out vec2 v_extrude;out float v_perspective_ratio;out float v_collision;vec3 toTilePosition(vec2 screenPos) {vec4 rayStart=u_inv_matrix*vec4(screenPos,-1.0,1.0);vec4 rayEnd  =u_inv_matrix*vec4(screenPos, 1.0,1.0);rayStart.xyz/=rayStart.w;rayEnd.xyz  /=rayEnd.w;highp float t=(0.0-rayStart.z)/(rayEnd.z-rayStart.z);return mix(rayStart.xyz,rayEnd.xyz,t);}void main() {vec2 quadCenterPos=a_pos;float radius=a_radius;float collision=a_flags.x;float vertexIdx=a_flags.y;vec2 quadVertexOffset=vec2(mix(-1.0,1.0,float(vertexIdx >=2.0)),mix(-1.0,1.0,float(vertexIdx >=1.0 && vertexIdx <=2.0)));vec2 quadVertexExtent=quadVertexOffset*radius;vec3 tilePos=toTilePosition(quadCenterPos);vec4 clipPos=u_matrix*vec4(tilePos,1.0);highp float camera_to_anchor_distance=clipPos.w;highp float collision_perspective_ratio=clamp(0.5+0.5*(u_camera_to_center_distance/camera_to_anchor_distance),0.0,4.0);float padding_factor=1.2;v_radius=radius;v_extrude=quadVertexExtent*padding_factor;v_perspective_ratio=collision_perspective_ratio;v_collision=collision;gl_Position=vec4(clipPos.xyz/clipPos.w,1.0)+vec4(quadVertexExtent*padding_factor/u_viewport_size*2.0,0.0,0.0);}"),debug:le("uniform highp vec4 u_color;uniform sampler2D u_overlay;in vec2 v_uv;void main() {vec4 overlay_color=texture(u_overlay,v_uv);fragColor=mix(u_color,overlay_color,overlay_color.a);}","in vec2 a_pos;out vec2 v_uv;uniform mat4 u_matrix;uniform float u_overlay_scale;void main() {v_uv=a_pos/8192.0;gl_Position=u_matrix*vec4(a_pos*u_overlay_scale,get_elevation(a_pos),1);}"),fill:le("#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\nfragColor=color*opacity;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","in vec2 a_pos;uniform mat4 u_matrix;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);}"),fillOutline:le("in vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);fragColor=outline_color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","in vec2 a_pos;uniform mat4 u_matrix;uniform vec2 u_world;out vec2 v_pos;\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 outline_color\n#pragma mapbox: initialize lowp float opacity\ngl_Position=u_matrix*vec4(a_pos,0,1);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillOutlinePattern:le("uniform vec2 u_texsize;uniform sampler2D u_image;uniform float u_fade;in vec2 v_pos_a;in vec2 v_pos_b;in vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);float dist=length(v_pos-gl_FragCoord.xy);float alpha=1.0-smoothstep(0.0,1.0,dist);fragColor=mix(color1,color2,u_fade)*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_world;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;in vec2 a_pos;out vec2 v_pos_a;out vec2 v_pos_b;out vec2 v_pos;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;gl_Position=u_matrix*vec4(a_pos,0,1);vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,a_pos);v_pos=(gl_Position.xy/gl_Position.w+1.0)/2.0*u_world;}"),fillPattern:le("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;in vec2 v_pos_a;in vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);fragColor=mix(color1,color2,u_fade)*opacity;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform vec3 u_scale;in vec2 a_pos;out vec2 v_pos_a;out vec2 v_pos_b;\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;gl_Position=u_matrix*vec4(a_pos,0,1);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileZoomRatio,a_pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileZoomRatio,a_pos);}"),fillExtrusion:le("in vec4 v_color;void main() {fragColor=v_color;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;uniform float u_vertical_gradient;uniform lowp float u_opacity;in vec2 a_pos;in vec4 a_normal_ed;\n#ifdef TERRAIN3D\nin vec2 a_centroid;\n#endif\nout vec4 v_color;\n#pragma mapbox: define highp float base\n#pragma mapbox: define highp float height\n#pragma mapbox: define highp vec4 color\nvoid main() {\n#pragma mapbox: initialize highp float base\n#pragma mapbox: initialize highp float height\n#pragma mapbox: initialize highp vec4 color\nvec3 normal=a_normal_ed.xyz;\n#ifdef TERRAIN3D\nfloat height_terrain3d_offset=get_elevation(a_centroid);float base_terrain3d_offset=height_terrain3d_offset-(base > 0.0 ? 0.0 : 10.0);\n#else\nfloat height_terrain3d_offset=0.0;float base_terrain3d_offset=0.0;\n#endif\nbase=max(0.0,base)+base_terrain3d_offset;height=max(0.0,height)+height_terrain3d_offset;float t=mod(normal.x,2.0);gl_Position=u_matrix*vec4(a_pos,t > 0.0 ? height : base,1);float colorvalue=color.r*0.2126+color.g*0.7152+color.b*0.0722;v_color=vec4(0.0,0.0,0.0,1.0);vec4 ambientlight=vec4(0.03,0.03,0.03,1.0);color+=ambientlight;float directional=clamp(dot(normal/16384.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((1.0-colorvalue+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_color.r+=clamp(color.r*directional*u_lightcolor.r,mix(0.0,0.3,1.0-u_lightcolor.r),1.0);v_color.g+=clamp(color.g*directional*u_lightcolor.g,mix(0.0,0.3,1.0-u_lightcolor.g),1.0);v_color.b+=clamp(color.b*directional*u_lightcolor.b,mix(0.0,0.3,1.0-u_lightcolor.b),1.0);v_color*=u_opacity;}"),fillExtrusionPattern:le("uniform vec2 u_texsize;uniform float u_fade;uniform sampler2D u_image;in vec2 v_pos_a;in vec2 v_pos_b;in vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;vec2 imagecoord=mod(v_pos_a,1.0);vec2 pos=mix(pattern_tl_a/u_texsize,pattern_br_a/u_texsize,imagecoord);vec4 color1=texture(u_image,pos);vec2 imagecoord_b=mod(v_pos_b,1.0);vec2 pos2=mix(pattern_tl_b/u_texsize,pattern_br_b/u_texsize,imagecoord_b);vec4 color2=texture(u_image,pos2);vec4 mixedColor=mix(color1,color2,u_fade);fragColor=mixedColor*v_lighting;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_pixel_coord_upper;uniform vec2 u_pixel_coord_lower;uniform float u_height_factor;uniform vec3 u_scale;uniform float u_vertical_gradient;uniform lowp float u_opacity;uniform vec3 u_lightcolor;uniform lowp vec3 u_lightpos;uniform lowp float u_lightintensity;in vec2 a_pos;in vec4 a_normal_ed;\n#ifdef TERRAIN3D\nin vec2 a_centroid;\n#endif\nout vec2 v_pos_a;out vec2 v_pos_b;out vec4 v_lighting;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float base\n#pragma mapbox: initialize lowp float height\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec3 normal=a_normal_ed.xyz;float edgedistance=a_normal_ed.w;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;\n#ifdef TERRAIN3D\nfloat height_terrain3d_offset=get_elevation(a_centroid);float base_terrain3d_offset=height_terrain3d_offset-(base > 0.0 ? 0.0 : 10.0);\n#else\nfloat height_terrain3d_offset=0.0;float base_terrain3d_offset=0.0;\n#endif\nbase=max(0.0,base)+base_terrain3d_offset;height=max(0.0,height)+height_terrain3d_offset;float t=mod(normal.x,2.0);float z=t > 0.0 ? height : base;gl_Position=u_matrix*vec4(a_pos,z,1);vec2 pos=normal.x==1.0 && normal.y==0.0 && normal.z==16384.0\n? a_pos\n: vec2(edgedistance,z*u_height_factor);v_pos_a=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,fromScale*display_size_a,tileRatio,pos);v_pos_b=get_pattern_pos(u_pixel_coord_upper,u_pixel_coord_lower,toScale*display_size_b,tileRatio,pos);v_lighting=vec4(0.0,0.0,0.0,1.0);float directional=clamp(dot(normal/16383.0,u_lightpos),0.0,1.0);directional=mix((1.0-u_lightintensity),max((0.5+u_lightintensity),1.0),directional);if (normal.y !=0.0) {directional*=((1.0-u_vertical_gradient)+(u_vertical_gradient*clamp((t+base)*pow(height/150.0,0.5),mix(0.7,0.98,1.0-u_lightintensity),1.0)));}v_lighting.rgb+=clamp(directional*u_lightcolor,mix(vec3(0.0),vec3(0.3),1.0-u_lightcolor),vec3(1.0));v_lighting*=u_opacity;}"),hillshadePrepare:le("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform sampler2D u_image;in vec2 v_pos;uniform vec2 u_dimension;uniform float u_zoom;uniform vec4 u_unpack;float getElevation(vec2 coord,float bias) {vec4 data=texture(u_image,coord)*255.0;data.a=-1.0;return dot(data,u_unpack)/4.0;}void main() {vec2 epsilon=1.0/u_dimension;float a=getElevation(v_pos+vec2(-epsilon.x,-epsilon.y),0.0);float b=getElevation(v_pos+vec2(0,-epsilon.y),0.0);float c=getElevation(v_pos+vec2(epsilon.x,-epsilon.y),0.0);float d=getElevation(v_pos+vec2(-epsilon.x,0),0.0);float e=getElevation(v_pos,0.0);float f=getElevation(v_pos+vec2(epsilon.x,0),0.0);float g=getElevation(v_pos+vec2(-epsilon.x,epsilon.y),0.0);float h=getElevation(v_pos+vec2(0,epsilon.y),0.0);float i=getElevation(v_pos+vec2(epsilon.x,epsilon.y),0.0);float exaggerationFactor=u_zoom < 2.0 ? 0.4 : u_zoom < 4.5 ? 0.35 : 0.3;float exaggeration=u_zoom < 15.0 ? (u_zoom-15.0)*exaggerationFactor : 0.0;vec2 deriv=vec2((c+f+f+i)-(a+d+d+g),(g+h+h+i)-(a+b+b+c))/pow(2.0,exaggeration+(19.2562-u_zoom));fragColor=clamp(vec4(deriv.x/2.0+0.5,deriv.y/2.0+0.5,1.0,1.0),0.0,1.0);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_dimension;in vec2 a_pos;in vec2 a_texture_pos;out vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);highp vec2 epsilon=1.0/u_dimension;float scale=(u_dimension.x-2.0)/u_dimension.x;v_pos=(a_texture_pos/8192.0)*scale+epsilon;}"),hillshade:le("uniform sampler2D u_image;in vec2 v_pos;uniform vec2 u_latrange;uniform vec2 u_light;uniform vec4 u_shadow;uniform vec4 u_highlight;uniform vec4 u_accent;\n#define PI 3.141592653589793\nvoid main() {vec4 pixel=texture(u_image,v_pos);vec2 deriv=((pixel.rg*2.0)-1.0);float scaleFactor=cos(radians((u_latrange[0]-u_latrange[1])*(1.0-v_pos.y)+u_latrange[1]));float slope=atan(1.25*length(deriv)/scaleFactor);float aspect=deriv.x !=0.0 ? atan(deriv.y,-deriv.x) : PI/2.0*(deriv.y > 0.0 ? 1.0 :-1.0);float intensity=u_light.x;float azimuth=u_light.y+PI;float base=1.875-intensity*1.75;float maxValue=0.5*PI;float scaledSlope=intensity !=0.5 ? ((pow(base,slope)-1.0)/(pow(base,maxValue)-1.0))*maxValue : slope;float accent=cos(scaledSlope);vec4 accent_color=(1.0-accent)*u_accent*clamp(intensity*2.0,0.0,1.0);float shade=abs(mod((aspect+azimuth)/PI+0.5,2.0)-1.0);vec4 shade_color=mix(u_shadow,u_highlight,shade)*sin(scaledSlope)*clamp(intensity*2.0,0.0,1.0);fragColor=accent_color*(1.0-shade_color.a)+shade_color;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;in vec2 a_pos;in vec2 a_texture_pos;out vec2 v_pos;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos=a_texture_pos/8192.0;}"),line:le("uniform lowp float u_device_pixel_ratio;in vec2 v_width2;in vec2 v_normal;in float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);fragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nin vec2 a_pos_normal;in vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform vec2 u_units_to_pixels;uniform lowp float u_device_pixel_ratio;out vec2 v_normal;out vec2 v_width2;out float v_gamma_scale;out highp float v_linesofar;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;v_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*2.0;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_width2=vec2(outset,inset);}"),lineGradient:le("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;in vec2 v_width2;in vec2 v_normal;in float v_gamma_scale;in highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);vec4 color=texture(u_image,v_uv);fragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\nin vec2 a_pos_normal;in vec4 a_data;in float a_uv_x;in float a_split_index;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_units_to_pixels;uniform float u_image_height;out vec2 v_normal;out vec2 v_width2;out float v_gamma_scale;out highp vec2 v_uv;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;highp float texel_height=1.0/u_image_height;highp float half_texel_height=0.5*texel_height;v_uv=vec2(a_uv_x,a_split_index*texel_height-half_texel_height);vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_width2=vec2(outset,inset);}"),linePattern:le("#ifdef GL_ES\nprecision highp float;\n#endif\nuniform lowp float u_device_pixel_ratio;uniform vec2 u_texsize;uniform float u_fade;uniform mediump vec3 u_scale;uniform sampler2D u_image;in vec2 v_normal;in vec2 v_width2;in float v_linesofar;in float v_gamma_scale;in float v_width;\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\nvec2 pattern_tl_a=pattern_from.xy;vec2 pattern_br_a=pattern_from.zw;vec2 pattern_tl_b=pattern_to.xy;vec2 pattern_br_b=pattern_to.zw;float tileZoomRatio=u_scale.x;float fromScale=u_scale.y;float toScale=u_scale.z;vec2 display_size_a=(pattern_br_a-pattern_tl_a)/pixel_ratio_from;vec2 display_size_b=(pattern_br_b-pattern_tl_b)/pixel_ratio_to;vec2 pattern_size_a=vec2(display_size_a.x*fromScale/tileZoomRatio,display_size_a.y);vec2 pattern_size_b=vec2(display_size_b.x*toScale/tileZoomRatio,display_size_b.y);float aspect_a=display_size_a.y/v_width;float aspect_b=display_size_b.y/v_width;float dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float x_a=mod(v_linesofar/pattern_size_a.x*aspect_a,1.0);float x_b=mod(v_linesofar/pattern_size_b.x*aspect_b,1.0);float y=0.5*v_normal.y+0.5;vec2 texel_size=1.0/u_texsize;vec2 pos_a=mix(pattern_tl_a*texel_size-texel_size,pattern_br_a*texel_size+texel_size,vec2(x_a,y));vec2 pos_b=mix(pattern_tl_b*texel_size-texel_size,pattern_br_b*texel_size+texel_size,vec2(x_b,y));vec4 color=mix(texture(u_image,pos_a),texture(u_image,pos_b),u_fade);fragColor=color*alpha*opacity;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nin vec2 a_pos_normal;in vec4 a_data;uniform mat4 u_matrix;uniform vec2 u_units_to_pixels;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;out vec2 v_normal;out vec2 v_width2;out float v_linesofar;out float v_gamma_scale;out float v_width;\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n#pragma mapbox: define lowp vec4 pattern_from\n#pragma mapbox: define lowp vec4 pattern_to\n#pragma mapbox: define lowp float pixel_ratio_from\n#pragma mapbox: define lowp float pixel_ratio_to\nvoid main() {\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\n#pragma mapbox: initialize mediump vec4 pattern_from\n#pragma mapbox: initialize mediump vec4 pattern_to\n#pragma mapbox: initialize lowp float pixel_ratio_from\n#pragma mapbox: initialize lowp float pixel_ratio_to\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_linesofar=a_linesofar;v_width2=vec2(outset,inset);v_width=floorwidth;}"),lineSDF:le("uniform lowp float u_device_pixel_ratio;uniform sampler2D u_image;uniform float u_sdfgamma;uniform float u_mix;in vec2 v_normal;in vec2 v_width2;in vec2 v_tex_a;in vec2 v_tex_b;in float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat dist=length(v_normal)*v_width2.s;float blur2=(blur+1.0/u_device_pixel_ratio)*v_gamma_scale;float alpha=clamp(min(dist-(v_width2.t-blur2),v_width2.s-dist)/blur2,0.0,1.0);float sdfdist_a=texture(u_image,v_tex_a).a;float sdfdist_b=texture(u_image,v_tex_b).a;float sdfdist=mix(sdfdist_a,sdfdist_b,u_mix);alpha*=smoothstep(0.5-u_sdfgamma/floorwidth,0.5+u_sdfgamma/floorwidth,sdfdist);fragColor=color*(alpha*opacity);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","\n#define scale 0.015873016\n#define LINE_DISTANCE_SCALE 2.0\nin vec2 a_pos_normal;in vec4 a_data;uniform mat4 u_matrix;uniform mediump float u_ratio;uniform lowp float u_device_pixel_ratio;uniform vec2 u_patternscale_a;uniform float u_tex_y_a;uniform vec2 u_patternscale_b;uniform float u_tex_y_b;uniform vec2 u_units_to_pixels;out vec2 v_normal;out vec2 v_width2;out vec2 v_tex_a;out vec2 v_tex_b;out float v_gamma_scale;\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\nvoid main() {\n#pragma mapbox: initialize highp vec4 color\n#pragma mapbox: initialize lowp float blur\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize mediump float gapwidth\n#pragma mapbox: initialize lowp float offset\n#pragma mapbox: initialize mediump float width\n#pragma mapbox: initialize lowp float floorwidth\nfloat ANTIALIASING=1.0/u_device_pixel_ratio/2.0;vec2 a_extrude=a_data.xy-128.0;float a_direction=mod(a_data.z,4.0)-1.0;float a_linesofar=(floor(a_data.z/4.0)+a_data.w*64.0)*LINE_DISTANCE_SCALE;vec2 pos=floor(a_pos_normal*0.5);mediump vec2 normal=a_pos_normal-2.0*pos;normal.y=normal.y*2.0-1.0;v_normal=normal;gapwidth=gapwidth/2.0;float halfwidth=width/2.0;offset=-1.0*offset;float inset=gapwidth+(gapwidth > 0.0 ? ANTIALIASING : 0.0);float outset=gapwidth+halfwidth*(gapwidth > 0.0 ? 2.0 : 1.0)+(halfwidth==0.0 ? 0.0 : ANTIALIASING);mediump vec2 dist=outset*a_extrude*scale;mediump float u=0.5*a_direction;mediump float t=1.0-abs(u);mediump vec2 offset2=offset*a_extrude*scale*normal.y*mat2(t,-u,u,t);vec4 projected_extrude=u_matrix*vec4(dist/u_ratio,0.0,0.0);gl_Position=u_matrix*vec4(pos+offset2/u_ratio,0.0,1.0)+projected_extrude;\n#ifdef TERRAIN3D\nv_gamma_scale=1.0;\n#else\nfloat extrude_length_without_perspective=length(dist);float extrude_length_with_perspective=length(projected_extrude.xy/gl_Position.w*u_units_to_pixels);v_gamma_scale=extrude_length_without_perspective/extrude_length_with_perspective;\n#endif\nv_tex_a=vec2(a_linesofar*u_patternscale_a.x/floorwidth,normal.y*u_patternscale_a.y+u_tex_y_a);v_tex_b=vec2(a_linesofar*u_patternscale_b.x/floorwidth,normal.y*u_patternscale_b.y+u_tex_y_b);v_width2=vec2(outset,inset);}"),raster:le("uniform float u_fade_t;uniform float u_opacity;uniform sampler2D u_image0;uniform sampler2D u_image1;in vec2 v_pos0;in vec2 v_pos1;uniform float u_brightness_low;uniform float u_brightness_high;uniform float u_saturation_factor;uniform float u_contrast_factor;uniform vec3 u_spin_weights;void main() {vec4 color0=texture(u_image0,v_pos0);vec4 color1=texture(u_image1,v_pos1);if (color0.a > 0.0) {color0.rgb=color0.rgb/color0.a;}if (color1.a > 0.0) {color1.rgb=color1.rgb/color1.a;}vec4 color=mix(color0,color1,u_fade_t);color.a*=u_opacity;vec3 rgb=color.rgb;rgb=vec3(dot(rgb,u_spin_weights.xyz),dot(rgb,u_spin_weights.zxy),dot(rgb,u_spin_weights.yzx));float average=(color.r+color.g+color.b)/3.0;rgb+=(average-rgb)*u_saturation_factor;rgb=(rgb-0.5)*u_contrast_factor+0.5;vec3 u_high_vec=vec3(u_brightness_low,u_brightness_low,u_brightness_low);vec3 u_low_vec=vec3(u_brightness_high,u_brightness_high,u_brightness_high);fragColor=vec4(mix(u_high_vec,u_low_vec,rgb)*color.a,color.a);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","uniform mat4 u_matrix;uniform vec2 u_tl_parent;uniform float u_scale_parent;uniform float u_buffer_scale;in vec2 a_pos;in vec2 a_texture_pos;out vec2 v_pos0;out vec2 v_pos1;void main() {gl_Position=u_matrix*vec4(a_pos,0,1);v_pos0=(((a_texture_pos/8192.0)-0.5)/u_buffer_scale )+0.5;v_pos1=(v_pos0*u_scale_parent)+u_tl_parent;}"),symbolIcon:le("uniform sampler2D u_texture;in vec2 v_tex;in float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nlowp float alpha=opacity*v_fade_opacity;fragColor=texture(u_texture,v_tex)*alpha;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;in vec4 a_pos_offset;in vec4 a_data;in vec4 a_pixeloffset;in vec3 a_projected_pos;in float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform highp float u_camera_to_center_distance;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform float u_fade_change;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform vec2 u_texsize;out vec2 v_tex;out float v_fade_opacity;\n#pragma mapbox: define lowp float opacity\nvoid main() {\n#pragma mapbox: initialize lowp float opacity\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;vec2 a_minFontScale=a_pixeloffset.zw/256.0;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*max(a_minFontScale,fontScale)+a_pxoffset/16.0),z,1.0);v_tex=a_tex/u_texsize;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float visibility=calculate_visibility(projectedPoint);v_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));}"),symbolSDF:le("#define SDF_PX 8.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;uniform bool u_is_text;in vec2 v_data0;in vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat EDGE_GAMMA=0.105/u_device_pixel_ratio;vec2 tex=v_data0.xy;float gamma_scale=v_data1.x;float size=v_data1.y;float fade_opacity=v_data1[2];float fontScale=u_is_text ? size/24.0 : size;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);fragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;in vec4 a_pos_offset;in vec4 a_data;in vec4 a_pixeloffset;in vec3 a_projected_pos;in float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;out vec2 v_data0;out vec3 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);vec2 a_pxoffset=a_pixeloffset.xy;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=u_is_text ? size/24.0 : size;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale+a_pxoffset),z,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0=a_tex/u_texsize;v_data1=vec3(gamma_scale,size,interpolated_fade_opacity);}"),symbolTextAndIcon:le("#define SDF_PX 8.0\n#define SDF 1.0\n#define ICON 0.0\nuniform bool u_is_halo;uniform sampler2D u_texture;uniform sampler2D u_texture_icon;uniform highp float u_gamma_scale;uniform lowp float u_device_pixel_ratio;in vec4 v_data0;in vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nfloat fade_opacity=v_data1[2];if (v_data1.w==ICON) {vec2 tex_icon=v_data0.zw;lowp float alpha=opacity*fade_opacity;fragColor=texture(u_texture_icon,tex_icon)*alpha;\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\nreturn;}vec2 tex=v_data0.xy;float EDGE_GAMMA=0.105/u_device_pixel_ratio;float gamma_scale=v_data1.x;float size=v_data1.y;float fontScale=size/24.0;lowp vec4 color=fill_color;highp float gamma=EDGE_GAMMA/(fontScale*u_gamma_scale);lowp float buff=(256.0-64.0)/256.0;if (u_is_halo) {color=halo_color;gamma=(halo_blur*1.19/SDF_PX+EDGE_GAMMA)/(fontScale*u_gamma_scale);buff=(6.0-halo_width/fontScale)/SDF_PX;}lowp float dist=texture(u_texture,tex).a;highp float gamma_scaled=gamma*gamma_scale;highp float alpha=smoothstep(buff-gamma_scaled,buff+gamma_scaled,dist);fragColor=color*(alpha*opacity*fade_opacity);\n#ifdef OVERDRAW_INSPECTOR\nfragColor=vec4(1.0);\n#endif\n}","const float PI=3.141592653589793;in vec4 a_pos_offset;in vec4 a_data;in vec3 a_projected_pos;in float a_fade_opacity;uniform bool u_is_size_zoom_constant;uniform bool u_is_size_feature_constant;uniform highp float u_size_t;uniform highp float u_size;uniform mat4 u_matrix;uniform mat4 u_label_plane_matrix;uniform mat4 u_coord_matrix;uniform bool u_is_text;uniform bool u_pitch_with_map;uniform highp float u_pitch;uniform bool u_rotate_symbol;uniform highp float u_aspect_ratio;uniform highp float u_camera_to_center_distance;uniform float u_fade_change;uniform vec2 u_texsize;uniform vec2 u_texsize_icon;out vec4 v_data0;out vec4 v_data1;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\nvoid main() {\n#pragma mapbox: initialize highp vec4 fill_color\n#pragma mapbox: initialize highp vec4 halo_color\n#pragma mapbox: initialize lowp float opacity\n#pragma mapbox: initialize lowp float halo_width\n#pragma mapbox: initialize lowp float halo_blur\nvec2 a_pos=a_pos_offset.xy;vec2 a_offset=a_pos_offset.zw;vec2 a_tex=a_data.xy;vec2 a_size=a_data.zw;float a_size_min=floor(a_size[0]*0.5);float is_sdf=a_size[0]-2.0*a_size_min;float ele=get_elevation(a_pos);highp float segment_angle=-a_projected_pos[2];float size;if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {size=mix(a_size_min,a_size[1],u_size_t)/128.0;} else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {size=a_size_min/128.0;} else {size=u_size;}vec4 projectedPoint=u_matrix*vec4(a_pos,ele,1);highp float camera_to_anchor_distance=projectedPoint.w;highp float distance_ratio=u_pitch_with_map ?\ncamera_to_anchor_distance/u_camera_to_center_distance :\nu_camera_to_center_distance/camera_to_anchor_distance;highp float perspective_ratio=clamp(0.5+0.5*distance_ratio,0.0,4.0);size*=perspective_ratio;float fontScale=size/24.0;highp float symbol_rotation=0.0;if (u_rotate_symbol) {vec4 offsetProjectedPoint=u_matrix*vec4(a_pos+vec2(1,0),ele,1);vec2 a=projectedPoint.xy/projectedPoint.w;vec2 b=offsetProjectedPoint.xy/offsetProjectedPoint.w;symbol_rotation=atan((b.y-a.y)/u_aspect_ratio,b.x-a.x);}highp float angle_sin=sin(segment_angle+symbol_rotation);highp float angle_cos=cos(segment_angle+symbol_rotation);mat2 rotation_matrix=mat2(angle_cos,-1.0*angle_sin,angle_sin,angle_cos);vec4 projected_pos=u_label_plane_matrix*vec4(a_projected_pos.xy,ele,1.0);float z=float(u_pitch_with_map)*projected_pos.z/projected_pos.w;gl_Position=u_coord_matrix*vec4(projected_pos.xy/projected_pos.w+rotation_matrix*(a_offset/32.0*fontScale),z,1.0);float gamma_scale=gl_Position.w;vec2 fade_opacity=unpack_opacity(a_fade_opacity);float visibility=calculate_visibility(projectedPoint);float fade_change=fade_opacity[1] > 0.5 ? u_fade_change :-u_fade_change;float interpolated_fade_opacity=max(0.0,min(visibility,fade_opacity[0]+fade_change));v_data0.xy=a_tex/u_texsize;v_data0.zw=a_tex/u_texsize_icon;v_data1=vec4(gamma_scale,size,interpolated_fade_opacity,is_sdf);}"),terrain:le("uniform sampler2D u_texture;in vec2 v_texture_pos;void main() {fragColor=texture(u_texture,v_texture_pos);}",ae),terrainDepth:le("in float v_depth;const highp vec4 bitSh=vec4(256.*256.*256.,256.*256.,256.,1.);const highp vec4 bitMsk=vec4(0.,vec3(1./256.0));highp vec4 pack(highp float value) {highp vec4 comp=fract(value*bitSh);comp-=comp.xxyz*bitMsk;return comp;}void main() {fragColor=pack(v_depth);}",ae),terrainCoords:le("precision mediump float;uniform sampler2D u_texture;uniform float u_terrain_coords_id;in vec2 v_texture_pos;void main() {vec4 rgba=texture(u_texture,v_texture_pos);fragColor=vec4(rgba.r,rgba.g,rgba.b,u_terrain_coords_id);}",ae)}
function le(t,e){const i=/#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,r=e.match(/(attribute|in) ([\w]+) ([\w]+)/g),n=t.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),s=e.match(/uniform ([\w]+) ([\w]+)([\s]*)([\w]*)/g),a=s?s.concat(n):n,o={}
return{fragmentSource:t=t.replace(i,((t,e,i,r,n)=>(o[n]=!0,"define"===e?`\n#ifndef HAS_UNIFORM_u_${n}\nin ${i} ${r} ${n};\n#else\nuniform ${i} ${r} u_${n};\n#endif\n`:`\n#ifdef HAS_UNIFORM_u_${n}\n    ${i} ${r} ${n} = u_${n};\n#endif\n`))),vertexSource:e=e.replace(i,((t,e,i,r,n)=>{const s="float"===r?"vec2":"vec4",a=n.match(/color/)?"color":s
return o[n]?"define"===e?`\n#ifndef HAS_UNIFORM_u_${n}\nuniform lowp float u_${n}_t;\nin ${i} ${s} a_${n};\nout ${i} ${r} ${n};\n#else\nuniform ${i} ${r} u_${n};\n#endif\n`:"vec4"===a?`\n#ifndef HAS_UNIFORM_u_${n}\n    ${n} = a_${n};\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${n}\n    ${n} = unpack_mix_${a}(a_${n}, u_${n}_t);\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`:"define"===e?`\n#ifndef HAS_UNIFORM_u_${n}\nuniform lowp float u_${n}_t;\nin ${i} ${s} a_${n};\n#else\nuniform ${i} ${r} u_${n};\n#endif\n`:"vec4"===a?`\n#ifndef HAS_UNIFORM_u_${n}\n    ${i} ${r} ${n} = a_${n};\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`:`\n#ifndef HAS_UNIFORM_u_${n}\n    ${i} ${r} ${n} = unpack_mix_${a}(a_${n}, u_${n}_t);\n#else\n    ${i} ${r} ${n} = u_${n};\n#endif\n`})),staticAttributes:r,staticUniforms:a}}class ce{constructor(){this.boundProgram=null,this.boundLayoutVertexBuffer=null,this.boundPaintVertexBuffers=[],this.boundIndexBuffer=null,this.boundVertexOffset=null,this.boundDynamicVertexBuffer=null,this.vao=null}bind(t,e,i,r,n,s,a,o,l){this.context=t
let c=this.boundPaintVertexBuffers.length!==r.length
for(let h=0;!c&&h<r.length;h++)this.boundPaintVertexBuffers[h]!==r[h]&&(c=!0)
!this.vao||this.boundProgram!==e||this.boundLayoutVertexBuffer!==i||c||this.boundIndexBuffer!==n||this.boundVertexOffset!==s||this.boundDynamicVertexBuffer!==a||this.boundDynamicVertexBuffer2!==o||this.boundDynamicVertexBuffer3!==l?this.freshBind(e,i,r,n,s,a,o,l):(t.bindVertexArray.set(this.vao),a&&a.bind(),n&&n.dynamicDraw&&n.bind(),o&&o.bind(),l&&l.bind())}freshBind(t,e,i,r,n,s,a,o){const l=t.numAttributes,c=this.context,h=c.gl
this.vao&&this.destroy(),this.vao=c.createVertexArray(),c.bindVertexArray.set(this.vao),this.boundProgram=t,this.boundLayoutVertexBuffer=e,this.boundPaintVertexBuffers=i,this.boundIndexBuffer=r,this.boundVertexOffset=n,this.boundDynamicVertexBuffer=s,this.boundDynamicVertexBuffer2=a,this.boundDynamicVertexBuffer3=o,e.enableAttributes(h,t)
for(const u of i)u.enableAttributes(h,t)
s&&s.enableAttributes(h,t),a&&a.enableAttributes(h,t),o&&o.enableAttributes(h,t),e.bind(),e.setVertexAttribPointers(h,t,n)
for(const u of i)u.bind(),u.setVertexAttribPointers(h,t,n)
s&&(s.bind(),s.setVertexAttribPointers(h,t,n)),r&&r.bind(),a&&(a.bind(),a.setVertexAttribPointers(h,t,n)),o&&(o.bind(),o.setVertexAttribPointers(h,t,n)),c.currentNumAttributes=l}destroy(){this.vao&&(this.context.deleteVertexArray(this.vao),this.vao=null)}}function he(t){const e=[]
for(let i=0;i<t.length;i++){if(null===t[i])continue
const r=t[i].split(" ")
e.push(r.pop())}return e}class ue{constructor(e,i,r,n,s,a,o){const l=e.gl
this.program=l.createProgram()
const c=he(r.staticAttributes),h=n?n.getBinderAttributes():[],u=c.concat(h),d=oe.prelude.staticUniforms?he(oe.prelude.staticUniforms):[],p=r.staticUniforms?he(r.staticUniforms):[],f=n?n.getBinderUniforms():[],m=d.concat(p).concat(f),g=[]
for(const t of m)g.indexOf(t)<0&&g.push(t)
const _=n?n.defines():[]
a&&_.push("#define OVERDRAW_INSPECTOR;"),o&&_.push("#define TERRAIN3D;"),_.unshift("#version 300 es")
const y=_.concat(oe.prelude.fragmentSource,r.fragmentSource).join("\n"),x=_.concat(oe.prelude.vertexSource,r.vertexSource).join("\n"),v=l.createShader(l.FRAGMENT_SHADER)
if(l.isContextLost())return void(this.failedToCreate=!0)
l.shaderSource(v,y),l.compileShader(v),l.attachShader(this.program,v)
const b=l.createShader(l.VERTEX_SHADER)
if(l.isContextLost())return void(this.failedToCreate=!0)
l.shaderSource(b,x),l.compileShader(b),l.attachShader(this.program,b),this.attributes={}
const w={}
this.numAttributes=u.length
for(let t=0;t<this.numAttributes;t++)u[t]&&(l.bindAttribLocation(this.program,t,u[t]),this.attributes[u[t]]=t)
l.linkProgram(this.program),l.deleteShader(b),l.deleteShader(v)
for(let t=0;t<g.length;t++){const e=g[t]
if(e&&!w[e]){const t=l.getUniformLocation(this.program,e)
t&&(w[e]=t)}}this.fixedUniforms=s(e,w),this.terrainUniforms=((e,i)=>({u_depth:new t.Uniform1i(e,i.u_depth),u_terrain:new t.Uniform1i(e,i.u_terrain),u_terrain_dim:new t.Uniform1f(e,i.u_terrain_dim),u_terrain_matrix:new t.UniformMatrix4f(e,i.u_terrain_matrix),u_terrain_unpack:new t.Uniform4f(e,i.u_terrain_unpack),u_terrain_exaggeration:new t.Uniform1f(e,i.u_terrain_exaggeration)}))(e,w),this.binderUniforms=n?n.getUniforms(e,w):[]}draw(t,e,i,r,n,s,a,o,l,c,h,u,d,p,f,m,g,_){const y=t.gl
if(this.failedToCreate)return
if(t.program.set(this.program),t.setDepthMode(i),t.setStencilMode(r),t.setColorMode(n),t.setCullFace(s),o){t.activeTexture.set(y.TEXTURE2),y.bindTexture(y.TEXTURE_2D,o.depthTexture),t.activeTexture.set(y.TEXTURE3),y.bindTexture(y.TEXTURE_2D,o.texture)
for(const t in this.terrainUniforms)this.terrainUniforms[t].set(o[t])}for(const v in this.fixedUniforms)this.fixedUniforms[v].set(a[v])
f&&f.setUniforms(t,this.binderUniforms,d,{zoom:p})
let x=0
switch(e){case y.LINES:x=2
break
case y.TRIANGLES:x=3
break
case y.LINE_STRIP:x=1}for(const v of u.get()){const i=v.vaos||(v.vaos={});(i[l]||(i[l]=new ce)).bind(t,this,c,f?f.getPaintVertexBuffers():[],h,v.vertexOffset,m,g,_),y.drawElements(e,v.primitiveLength*x,y.UNSIGNED_SHORT,v.primitiveOffset*x*2)}}}function de(t,e,i){const r=1/At(i,1,e.transform.tileZoom),n=Math.pow(2,i.tileID.overscaledZ),s=i.tileSize*Math.pow(2,e.transform.tileZoom)/n,a=s*(i.tileID.canonical.x+i.tileID.wrap*n),o=s*i.tileID.canonical.y
return{u_image:0,u_texsize:i.imageAtlasTexture.size,u_scale:[r,t.fromScale,t.toScale],u_fade:t.t,u_pixel_coord_upper:[a>>16,o>>16],u_pixel_coord_lower:[65535&a,65535&o]}}const pe=(e,i,r,n)=>{const s=i.style.light,a=s.properties.get("position"),o=[a.x,a.y,a.z],l=function(){var e=new t.ARRAY_TYPE(9)
return t.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}()
"viewport"===s.properties.get("anchor")&&function(t,e){var i=Math.sin(e),r=Math.cos(e)
t[0]=r,t[1]=i,t[2]=0,t[3]=-i,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1}(l,-i.transform.angle),function(t,e,i){var r=e[0],n=e[1],s=e[2]
t[0]=r*i[0]+n*i[3]+s*i[6],t[1]=r*i[1]+n*i[4]+s*i[7],t[2]=r*i[2]+n*i[5]+s*i[8]}(o,o,l)
const c=s.properties.get("color")
return{u_matrix:e,u_lightpos:o,u_lightintensity:s.properties.get("intensity"),u_lightcolor:[c.r,c.g,c.b],u_vertical_gradient:+r,u_opacity:n}},fe=(e,i,r,n,s,a,o)=>t.extend(pe(e,i,r,n),de(a,i,o),{u_height_factor:-Math.pow(2,s.overscaledZ)/o.tileSize/8}),me=t=>({u_matrix:t}),ge=(e,i,r,n)=>t.extend(me(e),de(r,i,n)),_e=(t,e)=>({u_matrix:t,u_world:e}),ye=(e,i,r,n,s)=>t.extend(ge(e,i,r,n),{u_world:s}),xe=(t,e,i,r)=>{const n=t.transform
let s,a
if("map"===r.paint.get("circle-pitch-alignment")){const t=At(i,1,n.zoom)
s=!0,a=[t,t]}else s=!1,a=n.pixelsToGLUnits
return{u_camera_to_center_distance:n.cameraToCenterDistance,u_scale_with_map:+("map"===r.paint.get("circle-pitch-scale")),u_matrix:t.translatePosMatrix(e.posMatrix,i,r.paint.get("circle-translate"),r.paint.get("circle-translate-anchor")),u_pitch_with_map:+s,u_device_pixel_ratio:t.pixelRatio,u_extrude_scale:a}},ve=(t,e,i)=>{const r=At(i,1,e.zoom),n=Math.pow(2,e.zoom-i.tileID.overscaledZ),s=i.tileID.overscaleFactor()
return{u_matrix:t,u_camera_to_center_distance:e.cameraToCenterDistance,u_pixels_to_tile_units:r,u_extrude_scale:[e.pixelsToGLUnits[0]/(r*n),e.pixelsToGLUnits[1]/(r*n)],u_overscale_factor:s}},be=function(t,e){return{u_matrix:t,u_color:e,u_overlay:0,u_overlay_scale:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1}},we=t=>({u_matrix:t}),Te=(t,e,i,r)=>({u_matrix:t,u_extrude_scale:At(e,1,i),u_intensity:r})
function Se(e,i){const r=Math.pow(2,i.canonical.z),n=i.canonical.y
return[new t.MercatorCoordinate(0,n/r).toLngLat().lat,new t.MercatorCoordinate(0,(n+1)/r).toLngLat().lat]}const Ee=(t,e,i,r)=>{const n=t.transform
return{u_matrix:Pe(t,e,i,r),u_ratio:1/At(e,1,n.zoom),u_device_pixel_ratio:t.pixelRatio,u_units_to_pixels:[1/n.pixelsToGLUnits[0],1/n.pixelsToGLUnits[1]]}},Ie=(e,i,r,n,s)=>t.extend(Ee(e,i,r,s),{u_image:0,u_image_height:n}),Ae=(t,e,i,r,n)=>{const s=t.transform,a=Ce(e,s)
return{u_matrix:Pe(t,e,i,n),u_texsize:e.imageAtlasTexture.size,u_ratio:1/At(e,1,s.zoom),u_device_pixel_ratio:t.pixelRatio,u_image:0,u_scale:[a,r.fromScale,r.toScale],u_fade:r.t,u_units_to_pixels:[1/s.pixelsToGLUnits[0],1/s.pixelsToGLUnits[1]]}},Me=(e,i,r,n,s,a)=>{const o=e.lineAtlas,l=Ce(i,e.transform),c="round"===r.layout.get("line-cap"),h=o.getDash(n.from,c),u=o.getDash(n.to,c),d=h.width*s.fromScale,p=u.width*s.toScale
return t.extend(Ee(e,i,r,a),{u_patternscale_a:[l/d,-h.height/2],u_patternscale_b:[l/p,-u.height/2],u_sdfgamma:o.width/(256*Math.min(d,p)*e.pixelRatio)/2,u_image:0,u_tex_y_a:h.y,u_tex_y_b:u.y,u_mix:s.t})}
function Ce(t,e){return 1/At(t,1,e.tileZoom)}function Pe(t,e,i,r){return t.translatePosMatrix(r?r.posMatrix:e.tileID.posMatrix,e,i.paint.get("line-translate"),i.paint.get("line-translate-anchor"))}const ze=(t,e,i,r,n)=>{return{u_matrix:t,u_tl_parent:e,u_scale_parent:i,u_buffer_scale:1,u_fade_t:r.mix,u_opacity:r.opacity*n.paint.get("raster-opacity"),u_image0:0,u_image1:1,u_brightness_low:n.paint.get("raster-brightness-min"),u_brightness_high:n.paint.get("raster-brightness-max"),u_saturation_factor:(a=n.paint.get("raster-saturation"),a>0?1-1/(1.001-a):-a),u_contrast_factor:(s=n.paint.get("raster-contrast"),s>0?1/(1-s):1+s),u_spin_weights:ke(n.paint.get("raster-hue-rotate"))}
var s,a}
function ke(t){t*=Math.PI/180
const e=Math.sin(t),i=Math.cos(t)
return[(2*i+1)/3,(-Math.sqrt(3)*e-i+1)/3,(Math.sqrt(3)*e-i+1)/3]}const De=(t,e,i,r,n,s,a,o,l,c)=>{const h=n.transform
return{u_is_size_zoom_constant:+("constant"===t||"source"===t),u_is_size_feature_constant:+("constant"===t||"camera"===t),u_size_t:e?e.uSizeT:0,u_size:e?e.uSize:0,u_camera_to_center_distance:h.cameraToCenterDistance,u_pitch:h.pitch/360*2*Math.PI,u_rotate_symbol:+i,u_aspect_ratio:h.width/h.height,u_fade_change:n.options.fadeDuration?n.symbolFadeChange:1,u_matrix:s,u_label_plane_matrix:a,u_coord_matrix:o,u_is_text:+l,u_pitch_with_map:+r,u_texsize:c,u_texture:0}},Le=(e,i,r,n,s,a,o,l,c,h,u)=>{const d=s.transform
return t.extend(De(e,i,r,n,s,a,o,l,c,h),{u_gamma_scale:n?Math.cos(d._pitch)*d.cameraToCenterDistance:1,u_device_pixel_ratio:s.pixelRatio,u_is_halo:+u})},Be=(e,i,r,n,s,a,o,l,c,h)=>t.extend(Le(e,i,r,n,s,a,o,l,!0,c,!0),{u_texsize_icon:h,u_texture_icon:1}),Re=(t,e,i)=>({u_matrix:t,u_opacity:e,u_color:i}),Fe=(e,i,r,n,s,a)=>t.extend(function(t,e,i,r){const n=i.imageManager.getPattern(t.from.toString()),s=i.imageManager.getPattern(t.to.toString()),{width:a,height:o}=i.imageManager.getPixelSize(),l=Math.pow(2,r.tileID.overscaledZ),c=r.tileSize*Math.pow(2,i.transform.tileZoom)/l,h=c*(r.tileID.canonical.x+r.tileID.wrap*l),u=c*r.tileID.canonical.y
return{u_image:0,u_pattern_tl_a:n.tl,u_pattern_br_a:n.br,u_pattern_tl_b:s.tl,u_pattern_br_b:s.br,u_texsize:[a,o],u_mix:e.t,u_pattern_size_a:n.displaySize,u_pattern_size_b:s.displaySize,u_scale_a:e.fromScale,u_scale_b:e.toScale,u_tile_units_to_pixels:1/At(r,1,i.transform.tileZoom),u_pixel_coord_upper:[h>>16,u>>16],u_pixel_coord_lower:[65535&h,65535&u]}}(n,a,r,s),{u_matrix:e,u_opacity:i}),Oe={fillExtrusion:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_opacity:new t.Uniform1f(e,i.u_opacity)}),fillExtrusionPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_lightpos:new t.Uniform3f(e,i.u_lightpos),u_lightintensity:new t.Uniform1f(e,i.u_lightintensity),u_lightcolor:new t.Uniform3f(e,i.u_lightcolor),u_vertical_gradient:new t.Uniform1f(e,i.u_vertical_gradient),u_height_factor:new t.Uniform1f(e,i.u_height_factor),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade),u_opacity:new t.Uniform1f(e,i.u_opacity)}),fill:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),fillPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),fillOutline:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world)}),fillOutlinePattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_texsize:new t.Uniform2f(e,i.u_texsize),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),circle:(e,i)=>({u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_scale_with_map:new t.Uniform1i(e,i.u_scale_with_map),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),collisionBox:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pixels_to_tile_units:new t.Uniform1f(e,i.u_pixels_to_tile_units),u_extrude_scale:new t.Uniform2f(e,i.u_extrude_scale),u_overscale_factor:new t.Uniform1f(e,i.u_overscale_factor)}),collisionCircle:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_inv_matrix:new t.UniformMatrix4f(e,i.u_inv_matrix),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_viewport_size:new t.Uniform2f(e,i.u_viewport_size)}),debug:(e,i)=>({u_color:new t.UniformColor(e,i.u_color),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_overlay:new t.Uniform1i(e,i.u_overlay),u_overlay_scale:new t.Uniform1f(e,i.u_overlay_scale)}),clippingMask:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),heatmap:(e,i)=>({u_extrude_scale:new t.Uniform1f(e,i.u_extrude_scale),u_intensity:new t.Uniform1f(e,i.u_intensity),u_matrix:new t.UniformMatrix4f(e,i.u_matrix)}),heatmapTexture:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_world:new t.Uniform2f(e,i.u_world),u_image:new t.Uniform1i(e,i.u_image),u_color_ramp:new t.Uniform1i(e,i.u_color_ramp),u_opacity:new t.Uniform1f(e,i.u_opacity)}),hillshade:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_latrange:new t.Uniform2f(e,i.u_latrange),u_light:new t.Uniform2f(e,i.u_light),u_shadow:new t.UniformColor(e,i.u_shadow),u_highlight:new t.UniformColor(e,i.u_highlight),u_accent:new t.UniformColor(e,i.u_accent)}),hillshadePrepare:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_image:new t.Uniform1i(e,i.u_image),u_dimension:new t.Uniform2f(e,i.u_dimension),u_zoom:new t.Uniform1f(e,i.u_zoom),u_unpack:new t.Uniform4f(e,i.u_unpack)}),line:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels)}),lineGradient:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_image:new t.Uniform1i(e,i.u_image),u_image_height:new t.Uniform1f(e,i.u_image_height)}),linePattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texsize:new t.Uniform2f(e,i.u_texsize),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_image:new t.Uniform1i(e,i.u_image),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_scale:new t.Uniform3f(e,i.u_scale),u_fade:new t.Uniform1f(e,i.u_fade)}),lineSDF:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ratio:new t.Uniform1f(e,i.u_ratio),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_units_to_pixels:new t.Uniform2f(e,i.u_units_to_pixels),u_patternscale_a:new t.Uniform2f(e,i.u_patternscale_a),u_patternscale_b:new t.Uniform2f(e,i.u_patternscale_b),u_sdfgamma:new t.Uniform1f(e,i.u_sdfgamma),u_image:new t.Uniform1i(e,i.u_image),u_tex_y_a:new t.Uniform1f(e,i.u_tex_y_a),u_tex_y_b:new t.Uniform1f(e,i.u_tex_y_b),u_mix:new t.Uniform1f(e,i.u_mix)}),raster:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_tl_parent:new t.Uniform2f(e,i.u_tl_parent),u_scale_parent:new t.Uniform1f(e,i.u_scale_parent),u_buffer_scale:new t.Uniform1f(e,i.u_buffer_scale),u_fade_t:new t.Uniform1f(e,i.u_fade_t),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image0:new t.Uniform1i(e,i.u_image0),u_image1:new t.Uniform1i(e,i.u_image1),u_brightness_low:new t.Uniform1f(e,i.u_brightness_low),u_brightness_high:new t.Uniform1f(e,i.u_brightness_high),u_saturation_factor:new t.Uniform1f(e,i.u_saturation_factor),u_contrast_factor:new t.Uniform1f(e,i.u_contrast_factor),u_spin_weights:new t.Uniform3f(e,i.u_spin_weights)}),symbolIcon:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture)}),symbolSDF:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texture:new t.Uniform1i(e,i.u_texture),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,i.u_is_halo)}),symbolTextAndIcon:(e,i)=>({u_is_size_zoom_constant:new t.Uniform1i(e,i.u_is_size_zoom_constant),u_is_size_feature_constant:new t.Uniform1i(e,i.u_is_size_feature_constant),u_size_t:new t.Uniform1f(e,i.u_size_t),u_size:new t.Uniform1f(e,i.u_size),u_camera_to_center_distance:new t.Uniform1f(e,i.u_camera_to_center_distance),u_pitch:new t.Uniform1f(e,i.u_pitch),u_rotate_symbol:new t.Uniform1i(e,i.u_rotate_symbol),u_aspect_ratio:new t.Uniform1f(e,i.u_aspect_ratio),u_fade_change:new t.Uniform1f(e,i.u_fade_change),u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_label_plane_matrix:new t.UniformMatrix4f(e,i.u_label_plane_matrix),u_coord_matrix:new t.UniformMatrix4f(e,i.u_coord_matrix),u_is_text:new t.Uniform1i(e,i.u_is_text),u_pitch_with_map:new t.Uniform1i(e,i.u_pitch_with_map),u_texsize:new t.Uniform2f(e,i.u_texsize),u_texsize_icon:new t.Uniform2f(e,i.u_texsize_icon),u_texture:new t.Uniform1i(e,i.u_texture),u_texture_icon:new t.Uniform1i(e,i.u_texture_icon),u_gamma_scale:new t.Uniform1f(e,i.u_gamma_scale),u_device_pixel_ratio:new t.Uniform1f(e,i.u_device_pixel_ratio),u_is_halo:new t.Uniform1i(e,i.u_is_halo)}),background:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_color:new t.UniformColor(e,i.u_color)}),backgroundPattern:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_opacity:new t.Uniform1f(e,i.u_opacity),u_image:new t.Uniform1i(e,i.u_image),u_pattern_tl_a:new t.Uniform2f(e,i.u_pattern_tl_a),u_pattern_br_a:new t.Uniform2f(e,i.u_pattern_br_a),u_pattern_tl_b:new t.Uniform2f(e,i.u_pattern_tl_b),u_pattern_br_b:new t.Uniform2f(e,i.u_pattern_br_b),u_texsize:new t.Uniform2f(e,i.u_texsize),u_mix:new t.Uniform1f(e,i.u_mix),u_pattern_size_a:new t.Uniform2f(e,i.u_pattern_size_a),u_pattern_size_b:new t.Uniform2f(e,i.u_pattern_size_b),u_scale_a:new t.Uniform1f(e,i.u_scale_a),u_scale_b:new t.Uniform1f(e,i.u_scale_b),u_pixel_coord_upper:new t.Uniform2f(e,i.u_pixel_coord_upper),u_pixel_coord_lower:new t.Uniform2f(e,i.u_pixel_coord_lower),u_tile_units_to_pixels:new t.Uniform1f(e,i.u_tile_units_to_pixels)}),terrain:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texture:new t.Uniform1i(e,i.u_texture),u_ele_delta:new t.Uniform1f(e,i.u_ele_delta)}),terrainDepth:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_ele_delta:new t.Uniform1f(e,i.u_ele_delta)}),terrainCoords:(e,i)=>({u_matrix:new t.UniformMatrix4f(e,i.u_matrix),u_texture:new t.Uniform1i(e,i.u_texture),u_terrain_coords_id:new t.Uniform1f(e,i.u_terrain_coords_id),u_ele_delta:new t.Uniform1f(e,i.u_ele_delta)})}
class Ue{constructor(t,e,i){this.context=t
const r=t.gl
this.buffer=r.createBuffer(),this.dynamicDraw=Boolean(i),this.context.unbindVAO(),t.bindElementBuffer.set(this.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?r.DYNAMIC_DRAW:r.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}bind(){this.context.bindElementBuffer.set(this.buffer)}updateData(t){const e=this.context.gl
if(!this.dynamicDraw)throw new Error("Attempted to update data while not in dynamic mode.")
this.context.unbindVAO(),this.bind(),e.bufferSubData(e.ELEMENT_ARRAY_BUFFER,0,t.arrayBuffer)}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer)}}const Ve={Int8:"BYTE",Uint8:"UNSIGNED_BYTE",Int16:"SHORT",Uint16:"UNSIGNED_SHORT",Int32:"INT",Uint32:"UNSIGNED_INT",Float32:"FLOAT"}
class Ne{constructor(t,e,i,r){this.length=e.length,this.attributes=i,this.itemSize=e.bytesPerElement,this.dynamicDraw=r,this.context=t
const n=t.gl
this.buffer=n.createBuffer(),t.bindVertexBuffer.set(this.buffer),n.bufferData(n.ARRAY_BUFFER,e.arrayBuffer,this.dynamicDraw?n.DYNAMIC_DRAW:n.STATIC_DRAW),this.dynamicDraw||delete e.arrayBuffer}bind(){this.context.bindVertexBuffer.set(this.buffer)}updateData(t){if(t.length!==this.length)throw new Error(`Length of new data is ${t.length}, which doesn't match current length of ${this.length}`)
const e=this.context.gl
this.bind(),e.bufferSubData(e.ARRAY_BUFFER,0,t.arrayBuffer)}enableAttributes(t,e){for(let i=0;i<this.attributes.length;i++){const r=e.attributes[this.attributes[i].name]
void 0!==r&&t.enableVertexAttribArray(r)}}setVertexAttribPointers(t,e,i){for(let r=0;r<this.attributes.length;r++){const n=this.attributes[r],s=e.attributes[n.name]
void 0!==s&&t.vertexAttribPointer(s,n.components,t[Ve[n.type]],!1,this.itemSize,n.offset+this.itemSize*(i||0))}}destroy(){this.buffer&&(this.context.gl.deleteBuffer(this.buffer),delete this.buffer)}}class $e{constructor(t){this.gl=t.gl,this.default=this.getDefault(),this.current=this.default,this.dirty=!1}get(){return this.current}set(t){}getDefault(){return this.default}setDefault(){this.set(this.default)}}class qe extends $e{getDefault(){return t.Color.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.clearColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)}}class je extends $e{getDefault(){return 1}set(t){(t!==this.current||this.dirty)&&(this.gl.clearDepth(t),this.current=t,this.dirty=!1)}}class Ze extends $e{getDefault(){return 0}set(t){(t!==this.current||this.dirty)&&(this.gl.clearStencil(t),this.current=t,this.dirty=!1)}}class Ge extends $e{getDefault(){return[!0,!0,!0,!0]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.colorMask(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)}}class Xe extends $e{getDefault(){return!0}set(t){(t!==this.current||this.dirty)&&(this.gl.depthMask(t),this.current=t,this.dirty=!1)}}class We extends $e{getDefault(){return 255}set(t){(t!==this.current||this.dirty)&&(this.gl.stencilMask(t),this.current=t,this.dirty=!1)}}class He extends $e{getDefault(){return{func:this.gl.ALWAYS,ref:0,mask:255}}set(t){const e=this.current;(t.func!==e.func||t.ref!==e.ref||t.mask!==e.mask||this.dirty)&&(this.gl.stencilFunc(t.func,t.ref,t.mask),this.current=t,this.dirty=!1)}}class Ke extends $e{getDefault(){const t=this.gl
return[t.KEEP,t.KEEP,t.KEEP]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||this.dirty)&&(this.gl.stencilOp(t[0],t[1],t[2]),this.current=t,this.dirty=!1)}}class Ye extends $e{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.STENCIL_TEST):e.disable(e.STENCIL_TEST),this.current=t,this.dirty=!1}}class Je extends $e{getDefault(){return[0,1]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.depthRange(t[0],t[1]),this.current=t,this.dirty=!1)}}class Qe extends $e{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.DEPTH_TEST):e.disable(e.DEPTH_TEST),this.current=t,this.dirty=!1}}class ti extends $e{getDefault(){return this.gl.LESS}set(t){(t!==this.current||this.dirty)&&(this.gl.depthFunc(t),this.current=t,this.dirty=!1)}}class ei extends $e{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.BLEND):e.disable(e.BLEND),this.current=t,this.dirty=!1}}class ii extends $e{getDefault(){const t=this.gl
return[t.ONE,t.ZERO]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||this.dirty)&&(this.gl.blendFunc(t[0],t[1]),this.current=t,this.dirty=!1)}}class ri extends $e{getDefault(){return t.Color.transparent}set(t){const e=this.current;(t.r!==e.r||t.g!==e.g||t.b!==e.b||t.a!==e.a||this.dirty)&&(this.gl.blendColor(t.r,t.g,t.b,t.a),this.current=t,this.dirty=!1)}}class ni extends $e{getDefault(){return this.gl.FUNC_ADD}set(t){(t!==this.current||this.dirty)&&(this.gl.blendEquation(t),this.current=t,this.dirty=!1)}}class si extends $e{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
t?e.enable(e.CULL_FACE):e.disable(e.CULL_FACE),this.current=t,this.dirty=!1}}class ai extends $e{getDefault(){return this.gl.BACK}set(t){(t!==this.current||this.dirty)&&(this.gl.cullFace(t),this.current=t,this.dirty=!1)}}class oi extends $e{getDefault(){return this.gl.CCW}set(t){(t!==this.current||this.dirty)&&(this.gl.frontFace(t),this.current=t,this.dirty=!1)}}class li extends $e{getDefault(){return null}set(t){(t!==this.current||this.dirty)&&(this.gl.useProgram(t),this.current=t,this.dirty=!1)}}class ci extends $e{getDefault(){return this.gl.TEXTURE0}set(t){(t!==this.current||this.dirty)&&(this.gl.activeTexture(t),this.current=t,this.dirty=!1)}}class hi extends $e{getDefault(){const t=this.gl
return[0,0,t.drawingBufferWidth,t.drawingBufferHeight]}set(t){const e=this.current;(t[0]!==e[0]||t[1]!==e[1]||t[2]!==e[2]||t[3]!==e[3]||this.dirty)&&(this.gl.viewport(t[0],t[1],t[2],t[3]),this.current=t,this.dirty=!1)}}class ui extends $e{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindFramebuffer(e.FRAMEBUFFER,t),this.current=t,this.dirty=!1}}class di extends $e{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindRenderbuffer(e.RENDERBUFFER,t),this.current=t,this.dirty=!1}}class pi extends $e{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindTexture(e.TEXTURE_2D,t),this.current=t,this.dirty=!1}}class fi extends $e{getDefault(){return null}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.bindBuffer(e.ARRAY_BUFFER,t),this.current=t,this.dirty=!1}}class mi extends $e{getDefault(){return null}set(t){const e=this.gl
e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),this.current=t,this.dirty=!1}}class gi extends $e{getDefault(){return null}set(t){(t!==this.current||this.dirty)&&(this.gl.bindVertexArray(t),this.current=t,this.dirty=!1)}}class _i extends $e{getDefault(){return 4}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.pixelStorei(e.UNPACK_ALIGNMENT,t),this.current=t,this.dirty=!1}}class yi extends $e{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t),this.current=t,this.dirty=!1}}class xi extends $e{getDefault(){return!1}set(t){if(t===this.current&&!this.dirty)return
const e=this.gl
e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,t),this.current=t,this.dirty=!1}}class vi extends $e{constructor(t,e){super(t),this.context=t,this.parent=e}getDefault(){return null}}class bi extends vi{setDirty(){this.dirty=!0}set(t){if(t===this.current&&!this.dirty)return
this.context.bindFramebuffer.set(this.parent)
const e=this.gl
e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),this.current=t,this.dirty=!1}}class wi extends vi{set(t){if(t===this.current&&!this.dirty)return
this.context.bindFramebuffer.set(this.parent)
const e=this.gl
e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1}}class Ti extends vi{set(t){if(t===this.current&&!this.dirty)return
this.context.bindFramebuffer.set(this.parent)
const e=this.gl
e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,t),this.current=t,this.dirty=!1}}class Si{constructor(t,e,i,r,n){this.context=t,this.width=e,this.height=i
const s=t.gl,a=this.framebuffer=s.createFramebuffer()
if(this.colorAttachment=new bi(t,a),r)this.depthAttachment=n?new Ti(t,a):new wi(t,a)
else if(n)throw new Error("Stencil cannot be setted without depth")
if(s.checkFramebufferStatus(s.FRAMEBUFFER)!==s.FRAMEBUFFER_COMPLETE)throw new Error("Framebuffer is not complete")}destroy(){const t=this.context.gl,e=this.colorAttachment.get()
if(e&&t.deleteTexture(e),this.depthAttachment){const e=this.depthAttachment.get()
e&&t.deleteRenderbuffer(e)}t.deleteFramebuffer(this.framebuffer)}}class Ei{constructor(t,e,i){this.blendFunction=t,this.blendColor=e,this.mask=i}}Ei.Replace=[1,0],Ei.disabled=new Ei(Ei.Replace,t.Color.transparent,[!1,!1,!1,!1]),Ei.unblended=new Ei(Ei.Replace,t.Color.transparent,[!0,!0,!0,!0]),Ei.alphaBlended=new Ei([1,771],t.Color.transparent,[!0,!0,!0,!0])
class Ii{constructor(t){this.gl=t,this.clearColor=new qe(this),this.clearDepth=new je(this),this.clearStencil=new Ze(this),this.colorMask=new Ge(this),this.depthMask=new Xe(this),this.stencilMask=new We(this),this.stencilFunc=new He(this),this.stencilOp=new Ke(this),this.stencilTest=new Ye(this),this.depthRange=new Je(this),this.depthTest=new Qe(this),this.depthFunc=new ti(this),this.blend=new ei(this),this.blendFunc=new ii(this),this.blendColor=new ri(this),this.blendEquation=new ni(this),this.cullFace=new si(this),this.cullFaceSide=new ai(this),this.frontFace=new oi(this),this.program=new li(this),this.activeTexture=new ci(this),this.viewport=new hi(this),this.bindFramebuffer=new ui(this),this.bindRenderbuffer=new di(this),this.bindTexture=new pi(this),this.bindVertexBuffer=new fi(this),this.bindElementBuffer=new mi(this),this.bindVertexArray=new gi(this),this.pixelStoreUnpack=new _i(this),this.pixelStoreUnpackPremultiplyAlpha=new yi(this),this.pixelStoreUnpackFlipY=new xi(this),this.extTextureFilterAnisotropic=t.getExtension("EXT_texture_filter_anisotropic"),this.extTextureFilterAnisotropic&&(this.extTextureFilterAnisotropicMax=t.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),this.maxTextureSize=t.getParameter(t.MAX_TEXTURE_SIZE),this.HALF_FLOAT=t.HALF_FLOAT,t.getExtension("EXT_color_buffer_half_float"),t.getExtension("EXT_color_buffer_float"),this.RGBA16F=t.RGBA16F,this.RGB16F=t.RGB16F}setDefault(){this.unbindVAO(),this.clearColor.setDefault(),this.clearDepth.setDefault(),this.clearStencil.setDefault(),this.colorMask.setDefault(),this.depthMask.setDefault(),this.stencilMask.setDefault(),this.stencilFunc.setDefault(),this.stencilOp.setDefault(),this.stencilTest.setDefault(),this.depthRange.setDefault(),this.depthTest.setDefault(),this.depthFunc.setDefault(),this.blend.setDefault(),this.blendFunc.setDefault(),this.blendColor.setDefault(),this.blendEquation.setDefault(),this.cullFace.setDefault(),this.cullFaceSide.setDefault(),this.frontFace.setDefault(),this.program.setDefault(),this.activeTexture.setDefault(),this.bindFramebuffer.setDefault(),this.pixelStoreUnpack.setDefault(),this.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.pixelStoreUnpackFlipY.setDefault()}setDirty(){this.clearColor.dirty=!0,this.clearDepth.dirty=!0,this.clearStencil.dirty=!0,this.colorMask.dirty=!0,this.depthMask.dirty=!0,this.stencilMask.dirty=!0,this.stencilFunc.dirty=!0,this.stencilOp.dirty=!0,this.stencilTest.dirty=!0,this.depthRange.dirty=!0,this.depthTest.dirty=!0,this.depthFunc.dirty=!0,this.blend.dirty=!0,this.blendFunc.dirty=!0,this.blendColor.dirty=!0,this.blendEquation.dirty=!0,this.cullFace.dirty=!0,this.cullFaceSide.dirty=!0,this.frontFace.dirty=!0,this.program.dirty=!0,this.activeTexture.dirty=!0,this.viewport.dirty=!0,this.bindFramebuffer.dirty=!0,this.bindRenderbuffer.dirty=!0,this.bindTexture.dirty=!0,this.bindVertexBuffer.dirty=!0,this.bindElementBuffer.dirty=!0,this.bindVertexArray.dirty=!0,this.pixelStoreUnpack.dirty=!0,this.pixelStoreUnpackPremultiplyAlpha.dirty=!0,this.pixelStoreUnpackFlipY.dirty=!0}createIndexBuffer(t,e){return new Ue(this,t,e)}createVertexBuffer(t,e,i){return new Ne(this,t,e,i)}createRenderbuffer(t,e,i){const r=this.gl,n=r.createRenderbuffer()
return this.bindRenderbuffer.set(n),r.renderbufferStorage(r.RENDERBUFFER,t,e,i),this.bindRenderbuffer.set(null),n}createFramebuffer(t,e,i,r){return new Si(this,t,e,i,r)}clear(t){let{color:e,depth:i,stencil:r}=t
const n=this.gl
let s=0
e&&(s|=n.COLOR_BUFFER_BIT,this.clearColor.set(e),this.colorMask.set([!0,!0,!0,!0])),void 0!==i&&(s|=n.DEPTH_BUFFER_BIT,this.depthRange.set([0,1]),this.clearDepth.set(i),this.depthMask.set(!0)),void 0!==r&&(s|=n.STENCIL_BUFFER_BIT,this.clearStencil.set(r),this.stencilMask.set(255)),n.clear(s)}setCullFace(t){!1===t.enable?this.cullFace.set(!1):(this.cullFace.set(!0),this.cullFaceSide.set(t.mode),this.frontFace.set(t.frontFace))}setDepthMode(t){t.func!==this.gl.ALWAYS||t.mask?(this.depthTest.set(!0),this.depthFunc.set(t.func),this.depthMask.set(t.mask),this.depthRange.set(t.range)):this.depthTest.set(!1)}setStencilMode(t){t.test.func!==this.gl.ALWAYS||t.mask?(this.stencilTest.set(!0),this.stencilMask.set(t.mask),this.stencilOp.set([t.fail,t.depthFail,t.pass]),this.stencilFunc.set({func:t.test.func,ref:t.ref,mask:t.test.mask})):this.stencilTest.set(!1)}setColorMode(e){t.deepEqual(e.blendFunction,Ei.Replace)?this.blend.set(!1):(this.blend.set(!0),this.blendFunc.set(e.blendFunction),this.blendColor.set(e.blendColor)),this.colorMask.set(e.mask)}createVertexArray(){return this.gl.createVertexArray()}deleteVertexArray(t){return this.gl.deleteVertexArray(t)}unbindVAO(){this.bindVertexArray.set(null)}}class Ai{constructor(t,e,i){this.func=t,this.mask=e,this.range=i}}Ai.ReadOnly=!1,Ai.ReadWrite=!0,Ai.disabled=new Ai(519,Ai.ReadOnly,[0,1])
const Mi=7680
class Ci{constructor(t,e,i,r,n,s){this.test=t,this.ref=e,this.mask=i,this.fail=r,this.depthFail=n,this.pass=s}}Ci.disabled=new Ci({func:519,mask:0},0,0,Mi,Mi,Mi)
class Pi{constructor(t,e,i){this.enable=t,this.mode=e,this.frontFace=i}}let zi
function ki(e,i,r,n,s,a,o){const l=e.context,c=l.gl,h=e.useProgram("collisionBox"),u=[]
let d=0,p=0
for(let v=0;v<n.length;v++){const f=n[v],m=i.getTile(f),g=m.getBucket(r)
if(!g)continue
let _=f.posMatrix
0===s[0]&&0===s[1]||(_=e.translatePosMatrix(f.posMatrix,m,s,a))
const y=o?g.textCollisionBox:g.iconCollisionBox,x=g.collisionCircleArray
if(x.length>0){const i=t.create(),r=_
t.mul(i,g.placementInvProjMatrix,e.transform.glCoordMatrix),t.mul(i,i,g.placementViewportMatrix),u.push({circleArray:x,circleOffset:p,transform:r,invTransform:i,coord:f}),d+=x.length/4,p=d}y&&h.draw(l,c.LINES,Ai.disabled,Ci.disabled,e.colorModeForRenderPass(),Pi.disabled,ve(_,e.transform,m),e.style.map.terrain&&e.style.map.terrain.getTerrainData(f),r.id,y.layoutVertexBuffer,y.indexBuffer,y.segments,null,e.transform.zoom,null,null,y.collisionVertexBuffer)}if(!o||!u.length)return
const f=e.useProgram("collisionCircle"),m=new t.CollisionCircleLayoutArray
m.resize(4*d),m._trim()
let g=0
for(const t of u)for(let e=0;e<t.circleArray.length/4;e++){const i=4*e,r=t.circleArray[i+0],n=t.circleArray[i+1],s=t.circleArray[i+2],a=t.circleArray[i+3]
m.emplace(g++,r,n,s,a,0),m.emplace(g++,r,n,s,a,1),m.emplace(g++,r,n,s,a,2),m.emplace(g++,r,n,s,a,3)}(!zi||zi.length<2*d)&&(zi=function(e){const i=2*e,r=new t.QuadTriangleArray
r.resize(i),r._trim()
for(let t=0;t<i;t++){const e=6*t
r.uint16[e+0]=4*t+0,r.uint16[e+1]=4*t+1,r.uint16[e+2]=4*t+2,r.uint16[e+3]=4*t+2,r.uint16[e+4]=4*t+3,r.uint16[e+5]=4*t+0}return r}(d))
const _=l.createIndexBuffer(zi,!0),y=l.createVertexBuffer(m,t.collisionCircleLayout.members,!0)
for(const v of u){const i={u_matrix:v.transform,u_inv_matrix:v.invTransform,u_camera_to_center_distance:(x=e.transform).cameraToCenterDistance,u_viewport_size:[x.width,x.height]}
f.draw(l,c.TRIANGLES,Ai.disabled,Ci.disabled,e.colorModeForRenderPass(),Pi.disabled,i,e.style.map.terrain&&e.style.map.terrain.getTerrainData(v.coord),r.id,y,_,t.SegmentVector.simpleSegment(0,2*v.circleOffset,v.circleArray.length,v.circleArray.length/2),null,e.transform.zoom,null,null,null)}var x
y.destroy(),_.destroy()}Pi.disabled=new Pi(!1,1029,2305),Pi.backCCW=new Pi(!0,1029,2305)
const Di=t.identity(new Float32Array(16))
function Li(e,i,r,n,s,a){const{horizontalAlign:o,verticalAlign:l}=t.getAnchorAlignment(e),c=-(o-.5)*i,h=-(l-.5)*r,u=t.evaluateVariableOffset(e,n)
return new t.Point((c/s+u[0])*a,(h/s+u[1])*a)}function Bi(e,i,r,n,s,a,o,l,c,h,u){const d=e.text.placedSymbolArray,p=e.text.dynamicLayoutVertexArray,f=e.icon.dynamicLayoutVertexArray,m={}
p.clear()
for(let g=0;g<d.length;g++){const f=d.get(g),_=f.hidden||!f.crossTileID||e.allowVerticalPlacement&&!f.placedOrientation?null:n[f.crossTileID]
if(_){const n=new t.Point(f.anchorX,f.anchorY),d=ht(n,r?o:a,u),g=ut(s.cameraToCenterDistance,d.signedDistanceFromCamera)
let y=t.evaluateSizeForFeature(e.textSizeData,c,f)*g/t.ONE_EM
r&&(y*=e.tilePixelRatio/l)
const{width:x,height:v,anchor:b,textOffset:w,textBoxScale:T}=_,S=Li(b,x,v,w,T,y),E=r?ht(n.add(S),a,u).point:d.point.add(i?S.rotate(-s.angle):S),I=e.allowVerticalPlacement&&f.placedOrientation===t.WritingMode.vertical?Math.PI/2:0
for(let e=0;e<f.numGlyphs;e++)t.addDynamicAttributes(p,E,I)
h&&f.associatedIconIndex>=0&&(m[f.associatedIconIndex]={shiftedAnchor:E,angle:I})}else Tt(f.numGlyphs,p)}if(h){f.clear()
const i=e.icon.placedSymbolArray
for(let e=0;e<i.length;e++){const r=i.get(e)
if(r.hidden)Tt(r.numGlyphs,f)
else{const i=m[e]
if(i)for(let e=0;e<r.numGlyphs;e++)t.addDynamicAttributes(f,i.shiftedAnchor,i.angle)
else Tt(r.numGlyphs,f)}}e.icon.dynamicLayoutVertexBuffer.updateData(f)}e.text.dynamicLayoutVertexBuffer.updateData(p)}function Ri(t,e,i){return i.iconsInText&&e?"symbolTextAndIcon":t?"symbolSDF":"symbolIcon"}function Fi(e,i,r,n,s,a,o,l,c,h,u,d){const p=e.context,f=p.gl,m=e.transform,g="map"===l,_="map"===c,y="viewport"!==l&&"point"!==r.layout.get("symbol-placement"),x=g&&!_&&!y,v=!r.layout.get("symbol-sort-key").isConstant()
let b=!1
const w=e.depthModeForSublayer(0,Ai.ReadOnly),T=r.layout.get("text-variable-anchor"),S=[]
for(const E of n){const n=i.getTile(E),l=n.getBucket(r)
if(!l)continue
const c=s?l.text:l.icon
if(!c||!c.segments.get().length||!c.hasVisibleVertices)continue
const u=c.programConfigurations.get(r.id),d=s||l.sdfIcons,p=s?l.textSizeData:l.iconSizeData,w=_||0!==m.pitch,I=e.useProgram(Ri(d,s,l),u),A=t.evaluateSizeForZoom(p,m.zoom),M=e.style.map.terrain&&e.style.map.terrain.getTerrainData(E)
let C,P,z,k,D=[0,0],L=null
if(s)P=n.glyphAtlasTexture,z=f.LINEAR,C=n.glyphAtlasTexture.size,l.iconsInText&&(D=n.imageAtlasTexture.size,L=n.imageAtlasTexture,k=w||e.options.rotating||e.options.zooming||"composite"===p.kind||"camera"===p.kind?f.LINEAR:f.NEAREST)
else{const t=1!==r.layout.get("icon-size").constantOr(0)||l.iconsNeedLinear
P=n.imageAtlasTexture,z=d||e.options.rotating||e.options.zooming||t||w?f.LINEAR:f.NEAREST,C=n.imageAtlasTexture.size}const B=At(n,1,e.transform.zoom),R=lt(E.posMatrix,_,g,e.transform,B),F=ct(E.posMatrix,_,g,e.transform,B),O=T&&l.hasTextData(),U="none"!==r.layout.get("icon-text-fit")&&O&&l.hasIconData()
if(y){const t=e.style.map.terrain?(t,i)=>e.style.map.terrain.getElevation(E,t,i):null,i="map"===r.layout.get("text-rotation-alignment")
pt(l,E.posMatrix,e,s,R,F,_,h,i,t)}const V=e.translatePosMatrix(E.posMatrix,n,a,o),N=y||s&&T||U?Di:R,$=e.translatePosMatrix(F,n,a,o,!0),q=d&&0!==r.paint.get(s?"text-halo-width":"icon-halo-width").constantOr(1)
let j
j=d?l.iconsInText?Be(p.kind,A,x,_,e,V,N,$,C,D):Le(p.kind,A,x,_,e,V,N,$,s,C,!0):De(p.kind,A,x,_,e,V,N,$,s,C)
const Z={program:I,buffers:c,uniformValues:j,atlasTexture:P,atlasTextureIcon:L,atlasInterpolation:z,atlasInterpolationIcon:k,isSDF:d,hasHalo:q}
if(v&&l.canOverlap){b=!0
const e=c.segments.get()
for(const i of e)S.push({segments:new t.SegmentVector([i]),sortKey:i.sortKey,state:Z,terrainData:M})}else S.push({segments:c.segments,sortKey:0,state:Z,terrainData:M})}b&&S.sort(((t,e)=>t.sortKey-e.sortKey))
for(const t of S){const i=t.state
if(p.activeTexture.set(f.TEXTURE0),i.atlasTexture.bind(i.atlasInterpolation,f.CLAMP_TO_EDGE),i.atlasTextureIcon&&(p.activeTexture.set(f.TEXTURE1),i.atlasTextureIcon&&i.atlasTextureIcon.bind(i.atlasInterpolationIcon,f.CLAMP_TO_EDGE)),i.isSDF){const n=i.uniformValues
i.hasHalo&&(n.u_is_halo=1,Oi(i.buffers,t.segments,r,e,i.program,w,u,d,n,t.terrainData)),n.u_is_halo=0}Oi(i.buffers,t.segments,r,e,i.program,w,u,d,i.uniformValues,t.terrainData)}}function Oi(t,e,i,r,n,s,a,o,l,c){const h=r.context
n.draw(h,h.gl.TRIANGLES,s,a,o,Pi.disabled,l,c,i.id,t.layoutVertexBuffer,t.indexBuffer,e,i.paint,r.transform.zoom,t.programConfigurations.get(i.id),t.dynamicLayoutVertexBuffer,t.opacityVertexBuffer)}function Ui(t,e,i,r,n){if(!i||!r||!r.imageAtlas)return
const s=r.imageAtlas.patternPositions
let a=s[i.to.toString()],o=s[i.from.toString()]
if(!a||!o){const t=n.getPaintProperty(e)
a=s[t],o=s[t]}a&&o&&t.setConstantPatternPositions(a,o)}function Vi(t,e,i,r,n,s,a){const o=t.context.gl,l="fill-pattern",c=i.paint.get(l),h=c&&c.constantOr(1),u=i.getCrossfadeParameters()
let d,p,f,m,g
a?(p=h&&!i.getPaintProperty("fill-outline-color")?"fillOutlinePattern":"fillOutline",d=o.LINES):(p=h?"fillPattern":"fill",d=o.TRIANGLES)
const _=c.constantOr(null)
for(const y of r){const r=e.getTile(y)
if(h&&!r.patternsLoaded())continue
const c=r.getBucket(i)
if(!c)continue
const x=c.programConfigurations.get(i.id),v=t.useProgram(p,x),b=t.style.map.terrain&&t.style.map.terrain.getTerrainData(y)
h&&(t.context.activeTexture.set(o.TEXTURE0),r.imageAtlasTexture.bind(o.LINEAR,o.CLAMP_TO_EDGE),x.updatePaintBuffers(u)),Ui(x,l,_,r,i)
const w=b?y:null,T=t.translatePosMatrix(w?w.posMatrix:y.posMatrix,r,i.paint.get("fill-translate"),i.paint.get("fill-translate-anchor"))
if(a){m=c.indexBuffer2,g=c.segments2
const e=[o.drawingBufferWidth,o.drawingBufferHeight]
f="fillOutlinePattern"===p&&h?ye(T,t,u,r,e):_e(T,e)}else m=c.indexBuffer,g=c.segments,f=h?ge(T,t,u,r):me(T)
v.draw(t.context,d,n,t.stencilModeForClipping(y),s,Pi.disabled,f,b,i.id,c.layoutVertexBuffer,m,g,i.paint,t.transform.zoom,x)}}function Ni(t,e,i,r,n,s,a){const o=t.context,l=o.gl,c="fill-extrusion-pattern",h=i.paint.get(c),u=h.constantOr(1),d=i.getCrossfadeParameters(),p=i.paint.get("fill-extrusion-opacity"),f=h.constantOr(null)
for(const m of r){const r=e.getTile(m),h=r.getBucket(i)
if(!h)continue
const g=t.style.map.terrain&&t.style.map.terrain.getTerrainData(m),_=h.programConfigurations.get(i.id),y=t.useProgram(u?"fillExtrusionPattern":"fillExtrusion",_)
u&&(t.context.activeTexture.set(l.TEXTURE0),r.imageAtlasTexture.bind(l.LINEAR,l.CLAMP_TO_EDGE),_.updatePaintBuffers(d)),Ui(_,c,f,r,i)
const x=t.translatePosMatrix(m.posMatrix,r,i.paint.get("fill-extrusion-translate"),i.paint.get("fill-extrusion-translate-anchor")),v=i.paint.get("fill-extrusion-vertical-gradient"),b=u?fe(x,t,v,p,m,d,r):pe(x,t,v,p)
y.draw(o,o.gl.TRIANGLES,n,s,a,Pi.backCCW,b,g,i.id,h.layoutVertexBuffer,h.indexBuffer,h.segments,i.paint,t.transform.zoom,_,t.style.map.terrain&&h.centroidVertexBuffer)}}function $i(t,e,i,r,n,s,a){const o=t.context,l=o.gl,c=i.fbo
if(!c)return
const h=t.useProgram("hillshade"),u=t.style.map.terrain&&t.style.map.terrain.getTerrainData(e)
o.activeTexture.set(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,c.colorAttachment.get()),h.draw(o,l.TRIANGLES,n,s,a,Pi.disabled,((t,e,i,r)=>{const n=i.paint.get("hillshade-shadow-color"),s=i.paint.get("hillshade-highlight-color"),a=i.paint.get("hillshade-accent-color")
let o=i.paint.get("hillshade-illumination-direction")*(Math.PI/180)
"viewport"===i.paint.get("hillshade-illumination-anchor")&&(o-=t.transform.angle)
const l=!t.options.moving
return{u_matrix:r?r.posMatrix:t.transform.calculatePosMatrix(e.tileID.toUnwrapped(),l),u_image:0,u_latrange:Se(0,e.tileID),u_light:[i.paint.get("hillshade-exaggeration"),o],u_shadow:n,u_highlight:s,u_accent:a}})(t,i,r,u?e:null),u,r.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments)}function qi(e,i,r,n,s,a){const o=e.context,l=o.gl,c=i.dem
if(c&&c.data){const h=c.dim,u=c.stride,d=c.getPixels()
if(o.activeTexture.set(l.TEXTURE1),o.pixelStoreUnpackPremultiplyAlpha.set(!1),i.demTexture=i.demTexture||e.getTileTexture(u),i.demTexture){const t=i.demTexture
t.update(d,{premultiply:!1}),t.bind(l.NEAREST,l.CLAMP_TO_EDGE)}else i.demTexture=new v(o,d,l.RGBA,{premultiply:!1}),i.demTexture.bind(l.NEAREST,l.CLAMP_TO_EDGE)
o.activeTexture.set(l.TEXTURE0)
let p=i.fbo
if(!p){const t=new v(o,{width:h,height:h,data:null},l.RGBA)
t.bind(l.LINEAR,l.CLAMP_TO_EDGE),p=i.fbo=o.createFramebuffer(h,h,!0,!1),p.colorAttachment.set(t.texture)}o.bindFramebuffer.set(p.framebuffer),o.viewport.set([0,0,h,h]),e.useProgram("hillshadePrepare").draw(o,l.TRIANGLES,n,s,a,Pi.disabled,((e,i)=>{const r=i.stride,n=t.create()
return t.ortho(n,0,t.EXTENT,-t.EXTENT,0,0,1),t.translate(n,n,[0,-t.EXTENT,0]),{u_matrix:n,u_image:1,u_dimension:[r,r],u_zoom:e.overscaledZ,u_unpack:i.getUnpackVector()}})(i.tileID,c),null,r.id,e.rasterBoundsBuffer,e.quadTriangleIndexBuffer,e.rasterBoundsSegments),i.needsHillshadePrepare=!1}}function ji(e,i,r,n,s,a){const o=n.paint.get("raster-fade-duration")
if(!a&&o>0){const n=t.exported.now(),a=(n-e.timeAdded)/o,l=i?(n-i.timeAdded)/o:-1,c=r.getSource(),h=s.coveringZoomLevel({tileSize:c.tileSize,roundZoom:c.roundZoom}),u=!i||Math.abs(i.tileID.overscaledZ-h)>Math.abs(e.tileID.overscaledZ-h),d=u&&e.refreshedUponExpiration?1:t.clamp(u?a:1-l,0,1)
return e.refreshedUponExpiration&&a>=1&&(e.refreshedUponExpiration=!1),i?{opacity:1,mix:1-d}:{opacity:d,mix:0}}return{opacity:1,mix:0}}const Zi=new t.Color(1,0,0,1),Gi=new t.Color(0,1,0,1),Xi=new t.Color(0,0,1,1),Wi=new t.Color(1,0,1,1),Hi=new t.Color(0,1,1,1)
function Ki(t,e,i,r){Ji(t,0,e+i/2,t.transform.width,i,r)}function Yi(t,e,i,r){Ji(t,e-i/2,0,i,t.transform.height,r)}function Ji(t,e,i,r,n,s){const a=t.context,o=a.gl
o.enable(o.SCISSOR_TEST),o.scissor(e*t.pixelRatio,i*t.pixelRatio,r*t.pixelRatio,n*t.pixelRatio),a.clear({color:s}),o.disable(o.SCISSOR_TEST)}function Qi(e,i,r){const n=e.context,s=n.gl,a=r.posMatrix,o=e.useProgram("debug"),l=Ai.disabled,c=Ci.disabled,h=e.colorModeForRenderPass(),u="$debug",d=e.style.map.terrain&&e.style.map.terrain.getTerrainData(r)
n.activeTexture.set(s.TEXTURE0)
const p=i.getTileByID(r.key).latestRawTileData,f=Math.floor((p&&p.byteLength||0)/1024),m=i.getTile(r).tileSize,g=512/Math.min(m,512)*(r.overscaledZ/e.transform.zoom)*.5
let _=r.canonical.toString()
r.overscaledZ!==r.canonical.z&&(_+=` => ${r.overscaledZ}`),function(t,e){t.initDebugOverlayCanvas()
const i=t.debugOverlayCanvas,r=t.context.gl,n=t.debugOverlayCanvas.getContext("2d")
n.clearRect(0,0,i.width,i.height),n.shadowColor="white",n.shadowBlur=2,n.lineWidth=1.5,n.strokeStyle="white",n.textBaseline="top",n.font="bold 36px Open Sans, sans-serif",n.fillText(e,5,5),n.strokeText(e,5,5),t.debugOverlayTexture.update(i),t.debugOverlayTexture.bind(r.LINEAR,r.CLAMP_TO_EDGE)}(e,`${_} ${f}kB`),o.draw(n,s.TRIANGLES,l,c,Ei.alphaBlended,Pi.disabled,be(a,t.Color.transparent,g),null,u,e.debugBuffer,e.quadTriangleIndexBuffer,e.debugSegments),o.draw(n,s.LINE_STRIP,l,c,h,Pi.disabled,be(a,t.Color.red),d,u,e.debugBuffer,e.tileBorderIndexBuffer,e.debugSegments)}function tr(t,e,i){const r=t.context,n=r.gl,s=t.colorModeForRenderPass(),a=new Ai(n.LEQUAL,Ai.ReadWrite,t.depthRangeFor3D),o=t.useProgram("terrain"),l=e.getTerrainMesh()
r.bindFramebuffer.set(null),r.viewport.set([0,0,t.width,t.height])
for(const c of i){const i=t.renderToTexture.getTexture(c),h=e.getTerrainData(c.tileID)
r.activeTexture.set(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,i.texture)
const u={u_matrix:t.transform.calculatePosMatrix(c.tileID.toUnwrapped()),u_texture:0,u_ele_delta:e.getMeshFrameDelta(t.transform.zoom)}
o.draw(r,n.TRIANGLES,a,Ci.disabled,s,Pi.backCCW,u,h,"terrain",l.vertexBuffer,l.indexBuffer,l.segments)}}const er={symbol:function(e,i,r,n,s){if("translucent"!==e.renderPass)return
const a=Ci.disabled,o=e.colorModeForRenderPass()
r.layout.get("text-variable-anchor")&&function(e,i,r,n,s,a,o){const l=i.transform,c="map"===s,h="map"===a
for(const u of e){const e=n.getTile(u),s=e.getBucket(r)
if(!s||!s.text||!s.text.segments.get().length)continue
const a=t.evaluateSizeForZoom(s.textSizeData,l.zoom),d=At(e,1,i.transform.zoom),p=lt(u.posMatrix,h,c,i.transform,d),f="none"!==r.layout.get("icon-text-fit")&&s.hasIconData()
if(a){const t=Math.pow(2,l.zoom-e.tileID.overscaledZ)
Bi(s,c,h,o,l,p,u.posMatrix,t,a,f,i.style.map.terrain?(t,e)=>i.style.map.terrain.getElevation(u,t,e):null)}}}(n,e,r,i,r.layout.get("text-rotation-alignment"),r.layout.get("text-pitch-alignment"),s),0!==r.paint.get("icon-opacity").constantOr(1)&&Fi(e,i,r,n,!1,r.paint.get("icon-translate"),r.paint.get("icon-translate-anchor"),r.layout.get("icon-rotation-alignment"),r.layout.get("icon-pitch-alignment"),r.layout.get("icon-keep-upright"),a,o),0!==r.paint.get("text-opacity").constantOr(1)&&Fi(e,i,r,n,!0,r.paint.get("text-translate"),r.paint.get("text-translate-anchor"),r.layout.get("text-rotation-alignment"),r.layout.get("text-pitch-alignment"),r.layout.get("text-keep-upright"),a,o),i.map.showCollisionBoxes&&(ki(e,i,r,n,r.paint.get("text-translate"),r.paint.get("text-translate-anchor"),!0),ki(e,i,r,n,r.paint.get("icon-translate"),r.paint.get("icon-translate-anchor"),!1))},circle:function(e,i,r,n){if("translucent"!==e.renderPass)return
const s=r.paint.get("circle-opacity"),a=r.paint.get("circle-stroke-width"),o=r.paint.get("circle-stroke-opacity"),l=!r.layout.get("circle-sort-key").isConstant()
if(0===s.constantOr(1)&&(0===a.constantOr(1)||0===o.constantOr(1)))return
const c=e.context,h=c.gl,u=e.depthModeForSublayer(0,Ai.ReadOnly),d=Ci.disabled,p=e.colorModeForRenderPass(),f=[]
for(let m=0;m<n.length;m++){const s=n[m],a=i.getTile(s),o=a.getBucket(r)
if(!o)continue
const c=o.programConfigurations.get(r.id),h=e.useProgram("circle",c),u=o.layoutVertexBuffer,d=o.indexBuffer,p=e.style.map.terrain&&e.style.map.terrain.getTerrainData(s),g={programConfiguration:c,program:h,layoutVertexBuffer:u,indexBuffer:d,uniformValues:xe(e,s,a,r),terrainData:p}
if(l){const e=o.segments.get()
for(const i of e)f.push({segments:new t.SegmentVector([i]),sortKey:i.sortKey,state:g})}else f.push({segments:o.segments,sortKey:0,state:g})}l&&f.sort(((t,e)=>t.sortKey-e.sortKey))
for(const t of f){const{programConfiguration:i,program:n,layoutVertexBuffer:s,indexBuffer:a,uniformValues:o,terrainData:l}=t.state
n.draw(c,h.TRIANGLES,u,d,p,Pi.disabled,o,l,r.id,s,a,t.segments,r.paint,e.transform.zoom,i)}},heatmap:function(e,i,r,n){if(0!==r.paint.get("heatmap-opacity"))if("offscreen"===e.renderPass){const s=e.context,a=s.gl,o=Ci.disabled,l=new Ei([a.ONE,a.ONE],t.Color.transparent,[!0,!0,!0,!0])
!function(t,e,i){const r=t.gl
t.activeTexture.set(r.TEXTURE1),t.viewport.set([0,0,e.width/4,e.height/4])
let n=i.heatmapFbo
if(n)r.bindTexture(r.TEXTURE_2D,n.colorAttachment.get()),t.bindFramebuffer.set(n.framebuffer)
else{const s=r.createTexture()
r.bindTexture(r.TEXTURE_2D,s),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),n=i.heatmapFbo=t.createFramebuffer(e.width/4,e.height/4,!1,!1),function(t,e,i,r){var n,s
const a=t.gl,o=null!==(n=t.HALF_FLOAT)&&void 0!==n?n:a.UNSIGNED_BYTE,l=null!==(s=t.RGBA16F)&&void 0!==s?s:a.RGBA
a.texImage2D(a.TEXTURE_2D,0,l,e.width/4,e.height/4,0,a.RGBA,o,null),r.colorAttachment.set(i)}(t,e,s,n)}}(s,e,r),s.clear({color:t.Color.transparent})
for(let t=0;t<n.length;t++){const c=n[t]
if(i.hasRenderableParent(c))continue
const h=i.getTile(c),u=h.getBucket(r)
if(!u)continue
const d=u.programConfigurations.get(r.id),p=e.useProgram("heatmap",d),{zoom:f}=e.transform
p.draw(s,a.TRIANGLES,Ai.disabled,o,l,Pi.disabled,Te(c.posMatrix,h,f,r.paint.get("heatmap-intensity")),null,r.id,u.layoutVertexBuffer,u.indexBuffer,u.segments,r.paint,e.transform.zoom,d)}s.viewport.set([0,0,e.width,e.height])}else"translucent"===e.renderPass&&(e.context.setColorMode(e.colorModeForRenderPass()),function(e,i){const r=e.context,n=r.gl,s=i.heatmapFbo
if(!s)return
r.activeTexture.set(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,s.colorAttachment.get()),r.activeTexture.set(n.TEXTURE1)
let a=i.colorRampTexture
a||(a=i.colorRampTexture=new v(r,i.colorRamp,n.RGBA)),a.bind(n.LINEAR,n.CLAMP_TO_EDGE),e.useProgram("heatmapTexture").draw(r,n.TRIANGLES,Ai.disabled,Ci.disabled,e.colorModeForRenderPass(),Pi.disabled,((e,i,r,n)=>{const s=t.create()
t.ortho(s,0,e.width,e.height,0,0,1)
const a=e.context.gl
return{u_matrix:s,u_world:[a.drawingBufferWidth,a.drawingBufferHeight],u_image:0,u_color_ramp:1,u_opacity:i.paint.get("heatmap-opacity")}})(e,i),null,i.id,e.viewportBuffer,e.quadTriangleIndexBuffer,e.viewportSegments,i.paint,e.transform.zoom)}(e,r))},line:function(e,i,r,n){if("translucent"!==e.renderPass)return
const s=r.paint.get("line-opacity"),a=r.paint.get("line-width")
if(0===s.constantOr(1)||0===a.constantOr(1))return
const o=e.depthModeForSublayer(0,Ai.ReadOnly),l=e.colorModeForRenderPass(),c=r.paint.get("line-dasharray"),h=r.paint.get("line-pattern"),u=h.constantOr(1),d=r.paint.get("line-gradient"),p=r.getCrossfadeParameters(),f=u?"linePattern":c?"lineSDF":d?"lineGradient":"line",m=e.context,g=m.gl
let _=!0
for(const y of n){const n=i.getTile(y)
if(u&&!n.patternsLoaded())continue
const s=n.getBucket(r)
if(!s)continue
const a=s.programConfigurations.get(r.id),x=e.context.program.get(),b=e.useProgram(f,a),w=_||b.program!==x,T=e.style.map.terrain&&e.style.map.terrain.getTerrainData(y),S=h.constantOr(null)
if(S&&n.imageAtlas){const t=n.imageAtlas,e=t.patternPositions[S.to.toString()],i=t.patternPositions[S.from.toString()]
e&&i&&a.setConstantPatternPositions(e,i)}const E=T?y:null,I=u?Ae(e,n,r,p,E):c?Me(e,n,r,c,p,E):d?Ie(e,n,r,s.lineClipsArray.length,E):Ee(e,n,r,E)
if(u)m.activeTexture.set(g.TEXTURE0),n.imageAtlasTexture.bind(g.LINEAR,g.CLAMP_TO_EDGE),a.updatePaintBuffers(p)
else if(c&&(w||e.lineAtlas.dirty))m.activeTexture.set(g.TEXTURE0),e.lineAtlas.bind(m)
else if(d){const n=s.gradients[r.id]
let a=n.texture
if(r.gradientVersion!==n.version){let o=256
if(r.stepInterpolant){const r=i.getSource().maxzoom,n=y.canonical.z===r?Math.ceil(1<<e.transform.maxZoom-y.canonical.z):1
o=t.clamp(t.nextPowerOfTwo(s.maxLineLength/t.EXTENT*1024*n),256,m.maxTextureSize)}n.gradient=t.renderColorRamp({expression:r.gradientExpression(),evaluationKey:"lineProgress",resolution:o,image:n.gradient||void 0,clips:s.lineClipsArray}),n.texture?n.texture.update(n.gradient):n.texture=new v(m,n.gradient,g.RGBA),n.version=r.gradientVersion,a=n.texture}m.activeTexture.set(g.TEXTURE0),a.bind(r.stepInterpolant?g.NEAREST:g.LINEAR,g.CLAMP_TO_EDGE)}b.draw(m,g.TRIANGLES,o,e.stencilModeForClipping(y),l,Pi.disabled,I,T,r.id,s.layoutVertexBuffer,s.indexBuffer,s.segments,r.paint,e.transform.zoom,a,s.layoutVertexBuffer2),_=!1}},fill:function(e,i,r,n){const s=r.paint.get("fill-color"),a=r.paint.get("fill-opacity")
if(0===a.constantOr(1))return
const o=e.colorModeForRenderPass(),l=r.paint.get("fill-pattern"),c=e.opaquePassEnabledForLayer()&&!l.constantOr(1)&&1===s.constantOr(t.Color.transparent).a&&1===a.constantOr(0)?"opaque":"translucent"
if(e.renderPass===c){const t=e.depthModeForSublayer(1,"opaque"===e.renderPass?Ai.ReadWrite:Ai.ReadOnly)
Vi(e,i,r,n,t,o,!1)}if("translucent"===e.renderPass&&r.paint.get("fill-antialias")){const t=e.depthModeForSublayer(r.getPaintProperty("fill-outline-color")?2:0,Ai.ReadOnly)
Vi(e,i,r,n,t,o,!0)}},"fill-extrusion":function(t,e,i,r){const n=i.paint.get("fill-extrusion-opacity")
if(0!==n&&"translucent"===t.renderPass){const s=new Ai(t.context.gl.LEQUAL,Ai.ReadWrite,t.depthRangeFor3D)
if(1!==n||i.paint.get("fill-extrusion-pattern").constantOr(1))Ni(t,e,i,r,s,Ci.disabled,Ei.disabled),Ni(t,e,i,r,s,t.stencilModeFor3D(),t.colorModeForRenderPass())
else{const n=t.colorModeForRenderPass()
Ni(t,e,i,r,s,Ci.disabled,n)}}},hillshade:function(t,e,i,r){if("offscreen"!==t.renderPass&&"translucent"!==t.renderPass)return
const n=t.context,s=t.depthModeForSublayer(0,Ai.ReadOnly),a=t.colorModeForRenderPass(),[o,l]="translucent"===t.renderPass?t.stencilConfigForOverlap(r):[{},r]
for(const c of l){const r=e.getTile(c)
void 0!==r.needsHillshadePrepare&&r.needsHillshadePrepare&&"offscreen"===t.renderPass?qi(t,r,i,s,Ci.disabled,a):"translucent"===t.renderPass&&$i(t,c,r,i,s,o[c.overscaledZ],a)}n.viewport.set([0,0,t.width,t.height])},raster:function(t,e,i,r){if("translucent"!==t.renderPass)return
if(0===i.paint.get("raster-opacity"))return
if(!r.length)return
const n=t.context,s=n.gl,a=e.getSource(),o=t.useProgram("raster"),l=t.colorModeForRenderPass(),[c,h]=a instanceof N?[{},r]:t.stencilConfigForOverlap(r),u=h[h.length-1].overscaledZ,d=!t.options.moving
for(const p of h){const r=t.depthModeForSublayer(p.overscaledZ-u,1===i.paint.get("raster-opacity")?Ai.ReadWrite:Ai.ReadOnly,s.LESS),h=e.getTile(p)
h.registerFadeDuration(i.paint.get("raster-fade-duration"))
const f=e.findLoadedParent(p,0),m=ji(h,f,e,i,t.transform,t.style.map.terrain)
let g,_
const y="nearest"===i.paint.get("raster-resampling")?s.NEAREST:s.LINEAR
n.activeTexture.set(s.TEXTURE0),h.texture.bind(y,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),n.activeTexture.set(s.TEXTURE1),f?(f.texture.bind(y,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST),g=Math.pow(2,f.tileID.overscaledZ-h.tileID.overscaledZ),_=[h.tileID.canonical.x*g%1,h.tileID.canonical.y*g%1]):h.texture.bind(y,s.CLAMP_TO_EDGE,s.LINEAR_MIPMAP_NEAREST)
const x=t.style.map.terrain&&t.style.map.terrain.getTerrainData(p),v=x?p:null,b=v?v.posMatrix:t.transform.calculatePosMatrix(p.toUnwrapped(),d),w=ze(b,_||[0,0],g||1,m,i)
a instanceof N?o.draw(n,s.TRIANGLES,r,Ci.disabled,l,Pi.disabled,w,x,i.id,a.boundsBuffer,t.quadTriangleIndexBuffer,a.boundsSegments):o.draw(n,s.TRIANGLES,r,c[p.overscaledZ],l,Pi.disabled,w,x,i.id,t.rasterBoundsBuffer,t.quadTriangleIndexBuffer,t.rasterBoundsSegments)}},background:function(t,e,i,r){const n=i.paint.get("background-color"),s=i.paint.get("background-opacity")
if(0===s)return
const a=t.context,o=a.gl,l=t.transform,c=l.tileSize,h=i.paint.get("background-pattern")
if(t.isPatternMissing(h))return
const u=!h&&1===n.a&&1===s&&t.opaquePassEnabledForLayer()?"opaque":"translucent"
if(t.renderPass!==u)return
const d=Ci.disabled,p=t.depthModeForSublayer(0,"opaque"===u?Ai.ReadWrite:Ai.ReadOnly),f=t.colorModeForRenderPass(),m=t.useProgram(h?"backgroundPattern":"background"),g=r||l.coveringTiles({tileSize:c,terrain:t.style.map.terrain})
h&&(a.activeTexture.set(o.TEXTURE0),t.imageManager.bind(t.context))
const _=i.getCrossfadeParameters()
for(const y of g){const e=r?y.posMatrix:t.transform.calculatePosMatrix(y.toUnwrapped()),l=h?Fe(e,s,t,h,{tileID:y,tileSize:c},_):Re(e,s,n),u=t.style.map.terrain&&t.style.map.terrain.getTerrainData(y)
m.draw(a,o.TRIANGLES,p,d,f,Pi.disabled,l,u,i.id,t.tileExtentBuffer,t.quadTriangleIndexBuffer,t.tileExtentSegments)}},debug:function(t,e,i){for(let r=0;r<i.length;r++)Qi(t,e,i[r])},custom:function(t,e,i){const r=t.context,n=i.implementation
if("offscreen"===t.renderPass){const e=n.prerender
e&&(t.setCustomLayerDefaults(),r.setColorMode(t.colorModeForRenderPass()),e.call(n,r.gl,t.transform.customLayerMatrix()),r.setDirty(),t.setBaseState())}else if("translucent"===t.renderPass){t.setCustomLayerDefaults(),r.setColorMode(t.colorModeForRenderPass()),r.setStencilMode(Ci.disabled)
const e="3d"===n.renderingMode?new Ai(t.context.gl.LEQUAL,Ai.ReadWrite,t.depthRangeFor3D):t.depthModeForSublayer(0,Ai.ReadOnly)
r.setDepthMode(e),n.render(r.gl,t.transform.customLayerMatrix()),r.setDirty(),t.setBaseState(),r.bindFramebuffer.set(null)}}}
class ir{constructor(e,i){this.context=new Ii(e),this.transform=i,this._tileTextures={},this.terrainFacilitator={dirty:!0,matrix:t.create(),renderTime:0},this.setup(),this.numSublayers=Y.maxUnderzooming+Y.maxOverzooming+1,this.depthEpsilon=1/Math.pow(2,16),this.crossTileSymbolIndex=new Qt}resize(t,e,i){if(this.width=t*i,this.height=e*i,this.pixelRatio=i,this.context.viewport.set([0,0,this.width,this.height]),this.style)for(const r of this.style._order)this.style._layers[r].resize()}setup(){const e=this.context,i=new t.PosArray
i.emplaceBack(0,0),i.emplaceBack(t.EXTENT,0),i.emplaceBack(0,t.EXTENT),i.emplaceBack(t.EXTENT,t.EXTENT),this.tileExtentBuffer=e.createVertexBuffer(i,se.members),this.tileExtentSegments=t.SegmentVector.simpleSegment(0,0,4,2)
const r=new t.PosArray
r.emplaceBack(0,0),r.emplaceBack(t.EXTENT,0),r.emplaceBack(0,t.EXTENT),r.emplaceBack(t.EXTENT,t.EXTENT),this.debugBuffer=e.createVertexBuffer(r,se.members),this.debugSegments=t.SegmentVector.simpleSegment(0,0,4,5)
const n=new t.RasterBoundsArray
n.emplaceBack(0,0,0,0),n.emplaceBack(t.EXTENT,0,t.EXTENT,0),n.emplaceBack(0,t.EXTENT,0,t.EXTENT),n.emplaceBack(t.EXTENT,t.EXTENT,t.EXTENT,t.EXTENT),this.rasterBoundsBuffer=e.createVertexBuffer(n,V.members),this.rasterBoundsSegments=t.SegmentVector.simpleSegment(0,0,4,2)
const s=new t.PosArray
s.emplaceBack(0,0),s.emplaceBack(1,0),s.emplaceBack(0,1),s.emplaceBack(1,1),this.viewportBuffer=e.createVertexBuffer(s,se.members),this.viewportSegments=t.SegmentVector.simpleSegment(0,0,4,2)
const a=new t.LineStripIndexArray
a.emplaceBack(0),a.emplaceBack(1),a.emplaceBack(3),a.emplaceBack(2),a.emplaceBack(0),this.tileBorderIndexBuffer=e.createIndexBuffer(a)
const o=new t.TriangleIndexArray
o.emplaceBack(0,1,2),o.emplaceBack(2,1,3),this.quadTriangleIndexBuffer=e.createIndexBuffer(o)
const l=this.context.gl
this.stencilClearMode=new Ci({func:l.ALWAYS,mask:0},0,255,l.ZERO,l.ZERO,l.ZERO)}clearStencil(){const e=this.context,i=e.gl
this.nextStencilID=1,this.currentStencilSource=void 0
const r=t.create()
t.ortho(r,0,this.width,this.height,0,0,1),t.scale(r,r,[i.drawingBufferWidth,i.drawingBufferHeight,0]),this.useProgram("clippingMask").draw(e,i.TRIANGLES,Ai.disabled,this.stencilClearMode,Ei.disabled,Pi.disabled,we(r),null,"$clipping",this.viewportBuffer,this.quadTriangleIndexBuffer,this.viewportSegments)}_renderTileClippingMasks(t,e){if(this.currentStencilSource===t.source||!t.isTileClipped()||!e||!e.length)return
this.currentStencilSource=t.source
const i=this.context,r=i.gl
this.nextStencilID+e.length>256&&this.clearStencil(),i.setColorMode(Ei.disabled),i.setDepthMode(Ai.disabled)
const n=this.useProgram("clippingMask")
this._tileClippingMaskIDs={}
for(const s of e){const t=this._tileClippingMaskIDs[s.key]=this.nextStencilID++,e=this.style.map.terrain&&this.style.map.terrain.getTerrainData(s)
n.draw(i,r.TRIANGLES,Ai.disabled,new Ci({func:r.ALWAYS,mask:0},t,255,r.KEEP,r.KEEP,r.REPLACE),Ei.disabled,Pi.disabled,we(s.posMatrix),e,"$clipping",this.tileExtentBuffer,this.quadTriangleIndexBuffer,this.tileExtentSegments)}}stencilModeFor3D(){this.currentStencilSource=void 0,this.nextStencilID+1>256&&this.clearStencil()
const t=this.nextStencilID++,e=this.context.gl
return new Ci({func:e.NOTEQUAL,mask:255},t,255,e.KEEP,e.KEEP,e.REPLACE)}stencilModeForClipping(t){const e=this.context.gl
return new Ci({func:e.EQUAL,mask:255},this._tileClippingMaskIDs[t.key],0,e.KEEP,e.KEEP,e.REPLACE)}stencilConfigForOverlap(t){const e=this.context.gl,i=t.sort(((t,e)=>e.overscaledZ-t.overscaledZ)),r=i[i.length-1].overscaledZ,n=i[0].overscaledZ-r+1
if(n>1){this.currentStencilSource=void 0,this.nextStencilID+n>256&&this.clearStencil()
const t={}
for(let i=0;i<n;i++)t[i+r]=new Ci({func:e.GEQUAL,mask:255},i+this.nextStencilID,255,e.KEEP,e.KEEP,e.REPLACE)
return this.nextStencilID+=n,[t,i]}return[{[r]:Ci.disabled},i]}colorModeForRenderPass(){const e=this.context.gl
if(this._showOverdrawInspector){const i=1/8
return new Ei([e.CONSTANT_COLOR,e.ONE],new t.Color(i,i,i,0),[!0,!0,!0,!0])}return"opaque"===this.renderPass?Ei.unblended:Ei.alphaBlended}depthModeForSublayer(t,e,i){if(!this.opaquePassEnabledForLayer())return Ai.disabled
const r=1-((1+this.currentLayer)*this.numSublayers+t)*this.depthEpsilon
return new Ai(i||this.context.gl.LEQUAL,e,[r,r])}opaquePassEnabledForLayer(){return this.currentLayer<this.opaquePassCutoff}render(e,i){this.style=e,this.options=i,this.lineAtlas=e.lineAtlas,this.imageManager=e.imageManager,this.glyphManager=e.glyphManager,this.symbolFadeChange=e.placement.symbolFadeChange(t.exported.now()),this.imageManager.beginFrame()
const r=this.style._order,n=this.style.sourceCaches,s={},a={},o={}
for(const t in n){const e=n[t]
e.used&&e.prepare(this.context),s[t]=e.getVisibleCoordinates(),a[t]=s[t].slice().reverse(),o[t]=e.getVisibleCoordinates(!0).reverse()}this.opaquePassCutoff=1/0
for(let t=0;t<r.length;t++)if(this.style._layers[r[t]].is3D()){this.opaquePassCutoff=t
break}if(this.renderToTexture){this.renderToTexture.prepareForRender(this.style,this.transform.zoom),this.opaquePassCutoff=0
const e=this.style.map.terrain.sourceCache.tilesAfterTime(this.terrainFacilitator.renderTime);(this.terrainFacilitator.dirty||!t.equals(this.terrainFacilitator.matrix,this.transform.projMatrix)||e.length)&&(t.copy(this.terrainFacilitator.matrix,this.transform.projMatrix),this.terrainFacilitator.renderTime=Date.now(),this.terrainFacilitator.dirty=!1,function(e,i){const r=e.context,n=r.gl,s=Ei.unblended,a=new Ai(n.LEQUAL,Ai.ReadWrite,[0,1]),o=i.getTerrainMesh(),l=i.sourceCache.getRenderableTiles(),c=e.useProgram("terrainDepth")
r.bindFramebuffer.set(i.getFramebuffer("depth").framebuffer),r.viewport.set([0,0,e.width/devicePixelRatio,e.height/devicePixelRatio]),r.clear({color:t.Color.transparent,depth:1})
for(const t of l){const l=i.getTerrainData(t.tileID),h={u_matrix:e.transform.calculatePosMatrix(t.tileID.toUnwrapped()),u_ele_delta:i.getMeshFrameDelta(e.transform.zoom)}
c.draw(r,n.TRIANGLES,a,Ci.disabled,s,Pi.backCCW,h,l,"terrain",o.vertexBuffer,o.indexBuffer,o.segments)}r.bindFramebuffer.set(null),r.viewport.set([0,0,e.width,e.height])}(this,this.style.map.terrain),function(e,i){const r=e.context,n=r.gl,s=Ei.unblended,a=new Ai(n.LEQUAL,Ai.ReadWrite,[0,1]),o=i.getTerrainMesh(),l=i.getCoordsTexture(),c=i.sourceCache.getRenderableTiles(),h=e.useProgram("terrainCoords")
r.bindFramebuffer.set(i.getFramebuffer("coords").framebuffer),r.viewport.set([0,0,e.width/devicePixelRatio,e.height/devicePixelRatio]),r.clear({color:t.Color.transparent,depth:1}),i.coordsIndex=[]
for(const t of c){const c=i.getTerrainData(t.tileID)
r.activeTexture.set(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,l.texture)
const u={u_matrix:e.transform.calculatePosMatrix(t.tileID.toUnwrapped()),u_terrain_coords_id:(255-i.coordsIndex.length)/255,u_texture:0,u_ele_delta:i.getMeshFrameDelta(e.transform.zoom)}
h.draw(r,n.TRIANGLES,a,Ci.disabled,s,Pi.backCCW,u,c,"terrain",o.vertexBuffer,o.indexBuffer,o.segments),i.coordsIndex.push(t.tileID.key)}r.bindFramebuffer.set(null),r.viewport.set([0,0,e.width,e.height])}(this,this.style.map.terrain))}this.renderPass="offscreen"
for(const t of r){const e=this.style._layers[t]
if(!e.hasOffscreenPass()||e.isHidden(this.transform.zoom))continue
const i=a[e.source];("custom"===e.type||i.length)&&this.renderLayer(this,n[e.source],e,i)}if(this.context.bindFramebuffer.set(null),this.context.clear({color:i.showOverdrawInspector?t.Color.black:t.Color.transparent,depth:1}),this.clearStencil(),this._showOverdrawInspector=i.showOverdrawInspector,this.depthRangeFor3D=[0,1-(e._order.length+2)*this.numSublayers*this.depthEpsilon],!this.renderToTexture)for(this.renderPass="opaque",this.currentLayer=r.length-1;this.currentLayer>=0;this.currentLayer--){const t=this.style._layers[r[this.currentLayer]],e=n[t.source],i=s[t.source]
this._renderTileClippingMasks(t,i),this.renderLayer(this,e,t,i)}for(this.renderPass="translucent",this.currentLayer=0;this.currentLayer<r.length;this.currentLayer++){const t=this.style._layers[r[this.currentLayer]],e=n[t.source]
if(this.renderToTexture&&this.renderToTexture.renderLayer(t))continue
const i=("symbol"===t.type?o:a)[t.source]
this._renderTileClippingMasks(t,s[t.source]),this.renderLayer(this,e,t,i)}if(this.options.showTileBoundaries){const t=function(t,e){let i=null
const r=Object.values(t._layers).flatMap((i=>i.source&&!i.isHidden(e)?[t.sourceCaches[i.source]]:[])),n=r.filter((t=>"vector"===t.getSource().type)),s=r.filter((t=>"vector"!==t.getSource().type)),a=t=>{(!i||i.getSource().maxzoom<t.getSource().maxzoom)&&(i=t)}
return n.forEach((t=>a(t))),i||s.forEach((t=>a(t))),i}(this.style,this.transform.zoom)
t&&er.debug(this,t,t.getVisibleCoordinates())}this.options.showPadding&&function(t){const e=t.transform.padding
Ki(t,t.transform.height-(e.top||0),3,Zi),Ki(t,e.bottom||0,3,Gi),Yi(t,e.left||0,3,Xi),Yi(t,t.transform.width-(e.right||0),3,Wi)
const i=t.transform.centerPoint
!function(t,e,i,r){Ji(t,e-1,i-10,2,20,r),Ji(t,e-10,i-1,20,2,r)}(t,i.x,t.transform.height-i.y,Hi)}(this),this.context.setDefault()}renderLayer(t,e,i,r){i.isHidden(this.transform.zoom)||("background"===i.type||"custom"===i.type||(r||[]).length)&&(this.id=i.id,er[i.type](t,e,i,r,this.style.placement.variableOffsets))}translatePosMatrix(e,i,r,n,s){if(!r[0]&&!r[1])return e
const a=s?"map"===n?this.transform.angle:0:"viewport"===n?-this.transform.angle:0
if(a){const t=Math.sin(a),e=Math.cos(a)
r=[r[0]*e-r[1]*t,r[0]*t+r[1]*e]}const o=[s?r[0]:At(i,r[0],this.transform.zoom),s?r[1]:At(i,r[1],this.transform.zoom),0],l=new Float32Array(16)
return t.translate(l,e,o),l}saveTileTexture(t){const e=this._tileTextures[t.size[0]]
e?e.push(t):this._tileTextures[t.size[0]]=[t]}getTileTexture(t){const e=this._tileTextures[t]
return e&&e.length>0?e.pop():null}isPatternMissing(t){if(!t)return!1
if(!t.from||!t.to)return!0
const e=this.imageManager.getPattern(t.from.toString()),i=this.imageManager.getPattern(t.to.toString())
return!e||!i}useProgram(t,e){this.cache=this.cache||{}
const i=t+(e?e.cacheKey:"")+(this._showOverdrawInspector?"/overdraw":"")+(this.style.map.terrain?"/terrain":"")
return this.cache[i]||(this.cache[i]=new ue(this.context,t,oe[t],e,Oe[t],this._showOverdrawInspector,this.style.map.terrain)),this.cache[i]}setCustomLayerDefaults(){this.context.unbindVAO(),this.context.cullFace.setDefault(),this.context.activeTexture.setDefault(),this.context.pixelStoreUnpack.setDefault(),this.context.pixelStoreUnpackPremultiplyAlpha.setDefault(),this.context.pixelStoreUnpackFlipY.setDefault()}setBaseState(){const t=this.context.gl
this.context.cullFace.set(!1),this.context.viewport.set([0,0,this.width,this.height]),this.context.blendEquation.set(t.FUNC_ADD)}initDebugOverlayCanvas(){null==this.debugOverlayCanvas&&(this.debugOverlayCanvas=document.createElement("canvas"),this.debugOverlayCanvas.width=512,this.debugOverlayCanvas.height=512,this.debugOverlayTexture=new v(this.context,this.debugOverlayCanvas,this.context.gl.RGBA))}destroy(){this.debugOverlayTexture&&this.debugOverlayTexture.destroy()}}class rr{constructor(t,e){this.points=t,this.planes=e}static fromInvProjectionMatrix(e,i,r){const n=Math.pow(2,r),s=[[-1,1,-1,1],[1,1,-1,1],[1,-1,-1,1],[-1,-1,-1,1],[-1,1,1,1],[1,1,1,1],[1,-1,1,1],[-1,-1,1,1]].map((r=>{const s=1/(r=t.transformMat4([],r,e))[3]/i*n
return t.mul$1(r,r,[s,s,1/r[3],s])})),a=[[0,1,2],[6,5,4],[0,3,7],[2,1,5],[3,2,6],[0,4,5]].map((t=>{const e=function(t,e){var i=e[0],r=e[1],n=e[2],s=i*i+r*r+n*n
return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}([],function(t,e,i){var r=e[0],n=e[1],s=e[2],a=i[0],o=i[1],l=i[2]
return t[0]=n*l-s*o,t[1]=s*a-r*l,t[2]=r*o-n*a,t}([],g([],s[t[0]],s[t[1]]),g([],s[t[2]],s[t[1]]))),i=-((r=e)[0]*(n=s[t[1]])[0]+r[1]*n[1]+r[2]*n[2])
var r,n
return e.concat(i)}))
return new rr(s,a)}}class nr{constructor(t,e){this.min=t,this.max=e,this.center=function(t,e,i){return t[0]=.5*e[0],t[1]=.5*e[1],t[2]=.5*e[2],t}([],function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t}([],this.min,this.max))}quadrant(t){const e=[t%2==0,t<2],i=f(this.min),r=f(this.max)
for(let n=0;n<e.length;n++)i[n]=e[n]?this.min[n]:this.center[n],r[n]=e[n]?this.center[n]:this.max[n]
return r[2]=this.max[2],new nr(i,r)}distanceX(t){return Math.max(Math.min(this.max[0],t[0]),this.min[0])-t[0]}distanceY(t){return Math.max(Math.min(this.max[1],t[1]),this.min[1])-t[1]}intersects(e){const i=[[this.min[0],this.min[1],this.min[2],1],[this.max[0],this.min[1],this.min[2],1],[this.max[0],this.max[1],this.min[2],1],[this.min[0],this.max[1],this.min[2],1],[this.min[0],this.min[1],this.max[2],1],[this.max[0],this.min[1],this.max[2],1],[this.max[0],this.max[1],this.max[2],1],[this.min[0],this.max[1],this.max[2],1]]
let r=!0
for(let n=0;n<e.planes.length;n++){const s=e.planes[n]
let a=0
for(let e=0;e<i.length;e++)t.dot(s,i[e])>=0&&a++
if(0===a)return 0
a!==i.length&&(r=!1)}if(r)return 2
for(let t=0;t<3;t++){let i=Number.MAX_VALUE,r=-Number.MAX_VALUE
for(let n=0;n<e.points.length;n++){const s=e.points[n][t]-this.min[t]
i=Math.min(i,s),r=Math.max(r,s)}if(r<0||i>this.max[t]-this.min[t])return 0}return 1}}class sr{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(isNaN(t)||t<0||isNaN(e)||e<0||isNaN(i)||i<0||isNaN(r)||r<0)throw new Error("Invalid value for edge-insets, top, bottom, left and right must all be numbers")
this.top=t,this.bottom=e,this.left=i,this.right=r}interpolate(e,i,r){return null!=i.top&&null!=e.top&&(this.top=t.interpolate.number(e.top,i.top,r)),null!=i.bottom&&null!=e.bottom&&(this.bottom=t.interpolate.number(e.bottom,i.bottom,r)),null!=i.left&&null!=e.left&&(this.left=t.interpolate.number(e.left,i.left,r)),null!=i.right&&null!=e.right&&(this.right=t.interpolate.number(e.right,i.right,r)),this}getCenter(e,i){const r=t.clamp((this.left+e-this.right)/2,0,e),n=t.clamp((this.top+i-this.bottom)/2,0,i)
return new t.Point(r,n)}equals(t){return this.top===t.top&&this.bottom===t.bottom&&this.left===t.left&&this.right===t.right}clone(){return new sr(this.top,this.bottom,this.left,this.right)}toJSON(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}}class ar{constructor(e,i,r,n,s){this.tileSize=512,this.maxValidLatitude=85.051129,this.freezeElevation=!1,this._renderWorldCopies=void 0===s||!!s,this._minZoom=e||0,this._maxZoom=i||22,this._minPitch=null==r?0:r,this._maxPitch=null==n?60:n,this.setMaxBounds(),this.width=0,this.height=0,this._center=new t.LngLat(0,0),this._elevation=0,this.zoom=0,this.angle=0,this._fov=.6435011087932844,this._pitch=0,this._unmodified=!0,this._edgeInsets=new sr,this._posMatrixCache={},this._alignedPosMatrixCache={}}clone(){const t=new ar(this._minZoom,this._maxZoom,this._minPitch,this.maxPitch,this._renderWorldCopies)
return t.apply(this),t}apply(t){this.tileSize=t.tileSize,this.latRange=t.latRange,this.width=t.width,this.height=t.height,this._center=t._center,this._elevation=t._elevation,this.zoom=t.zoom,this.angle=t.angle,this._fov=t._fov,this._pitch=t._pitch,this._unmodified=t._unmodified,this._edgeInsets=t._edgeInsets.clone(),this._calcMatrices()}get minZoom(){return this._minZoom}set minZoom(t){this._minZoom!==t&&(this._minZoom=t,this.zoom=Math.max(this.zoom,t))}get maxZoom(){return this._maxZoom}set maxZoom(t){this._maxZoom!==t&&(this._maxZoom=t,this.zoom=Math.min(this.zoom,t))}get minPitch(){return this._minPitch}set minPitch(t){this._minPitch!==t&&(this._minPitch=t,this.pitch=Math.max(this.pitch,t))}get maxPitch(){return this._maxPitch}set maxPitch(t){this._maxPitch!==t&&(this._maxPitch=t,this.pitch=Math.min(this.pitch,t))}get renderWorldCopies(){return this._renderWorldCopies}set renderWorldCopies(t){void 0===t?t=!0:null===t&&(t=!1),this._renderWorldCopies=t}get worldSize(){return this.tileSize*this.scale}get centerOffset(){return this.centerPoint._sub(this.size._div(2))}get size(){return new t.Point(this.width,this.height)}get bearing(){return-this.angle/Math.PI*180}set bearing(e){const i=-t.wrap(e,-180,180)*Math.PI/180
this.angle!==i&&(this._unmodified=!1,this.angle=i,this._calcMatrices(),this.rotationMatrix=function(){var e=new t.ARRAY_TYPE(4)
return t.ARRAY_TYPE!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}(),function(t,e,i){var r=e[0],n=e[1],s=e[2],a=e[3],o=Math.sin(i),l=Math.cos(i)
t[0]=r*l+s*o,t[1]=n*l+a*o,t[2]=r*-o+s*l,t[3]=n*-o+a*l}(this.rotationMatrix,this.rotationMatrix,this.angle))}get pitch(){return this._pitch/Math.PI*180}set pitch(e){const i=t.clamp(e,this.minPitch,this.maxPitch)/180*Math.PI
this._pitch!==i&&(this._unmodified=!1,this._pitch=i,this._calcMatrices())}get fov(){return this._fov/Math.PI*180}set fov(t){t=Math.max(.01,Math.min(60,t)),this._fov!==t&&(this._unmodified=!1,this._fov=t/180*Math.PI,this._calcMatrices())}get zoom(){return this._zoom}set zoom(t){const e=Math.min(Math.max(t,this.minZoom),this.maxZoom)
this._zoom!==e&&(this._unmodified=!1,this._zoom=e,this.tileZoom=Math.max(0,Math.floor(e)),this.scale=this.zoomScale(e),this._constrain(),this._calcMatrices())}get center(){return this._center}set center(t){t.lat===this._center.lat&&t.lng===this._center.lng||(this._unmodified=!1,this._center=t,this._constrain(),this._calcMatrices())}get elevation(){return this._elevation}set elevation(t){t!==this._elevation&&(this._elevation=t,this._constrain(),this._calcMatrices())}get padding(){return this._edgeInsets.toJSON()}set padding(t){this._edgeInsets.equals(t)||(this._unmodified=!1,this._edgeInsets.interpolate(this._edgeInsets,t,1),this._calcMatrices())}get centerPoint(){return this._edgeInsets.getCenter(this.width,this.height)}isPaddingEqual(t){return this._edgeInsets.equals(t)}interpolatePadding(t,e,i){this._unmodified=!1,this._edgeInsets.interpolate(t,e,i),this._constrain(),this._calcMatrices()}coveringZoomLevel(t){const e=(t.roundZoom?Math.round:Math.floor)(this.zoom+this.scaleZoom(this.tileSize/t.tileSize))
return Math.max(0,e)}getVisibleUnwrappedCoordinates(e){const i=[new t.UnwrappedTileID(0,e)]
if(this._renderWorldCopies){const r=this.pointCoordinate(new t.Point(0,0)),n=this.pointCoordinate(new t.Point(this.width,0)),s=this.pointCoordinate(new t.Point(this.width,this.height)),a=this.pointCoordinate(new t.Point(0,this.height)),o=Math.floor(Math.min(r.x,n.x,s.x,a.x)),l=Math.floor(Math.max(r.x,n.x,s.x,a.x)),c=1
for(let h=o-c;h<=l+c;h++)0!==h&&i.push(new t.UnwrappedTileID(h,e))}return i}coveringTiles(e){var i,r
let n=this.coveringZoomLevel(e)
const s=n
if(void 0!==e.minzoom&&n<e.minzoom)return[]
void 0!==e.maxzoom&&n>e.maxzoom&&(n=e.maxzoom)
const a=this.pointCoordinate(this.getCameraPoint()),o=t.MercatorCoordinate.fromLngLat(this.center),l=Math.pow(2,n),c=[l*a.x,l*a.y,0],h=[l*o.x,l*o.y,0],u=rr.fromInvProjectionMatrix(this.invProjMatrix,this.worldSize,n)
let d=e.minzoom||0
!e.terrain&&this.pitch<=60&&this._edgeInsets.top<.1&&(d=n)
const p=e.terrain?2/Math.min(this.tileSize,e.tileSize)*this.tileSize:3,f=t=>({aabb:new nr([t*l,0,0],[(t+1)*l,l,0]),zoom:0,x:0,y:0,wrap:t,fullyVisible:!1}),m=[],g=[],y=n,x=e.reparseOverscaled?s:n
if(this._renderWorldCopies)for(let t=1;t<=3;t++)m.push(f(-t)),m.push(f(t))
for(m.push(f(0));m.length>0;){const n=m.pop(),s=n.x,a=n.y
let o=n.fullyVisible
if(!o){const t=n.aabb.intersects(u)
if(0===t)continue
o=2===t}const l=e.terrain?c:h,f=n.aabb.distanceX(l),v=n.aabb.distanceY(l),b=Math.max(Math.abs(f),Math.abs(v))
if(n.zoom===y||b>p+(1<<y-n.zoom)-2&&n.zoom>=d){const e=y-n.zoom,i=c[0]-.5-(s<<e),r=c[1]-.5-(a<<e)
g.push({tileID:new t.OverscaledTileID(n.zoom===y?x:n.zoom,n.wrap,n.zoom,s,a),distanceSq:_([h[0]-.5-s,h[1]-.5-a]),tileDistanceToCamera:Math.sqrt(i*i+r*r)})}else for(let c=0;c<4;c++){const l=(s<<1)+c%2,h=(a<<1)+(c>>1),u=n.zoom+1
let d=n.aabb.quadrant(c)
if(e.terrain){const s=new t.OverscaledTileID(u,n.wrap,u,l,h),a=e.terrain.getMinMaxElevation(s),o=null!==(i=a.minElevation)&&void 0!==i?i:this.elevation,c=null!==(r=a.maxElevation)&&void 0!==r?r:this.elevation
d=new nr([d.min[0],d.min[1],o],[d.max[0],d.max[1],c])}m.push({aabb:d,zoom:u,x:l,y:h,wrap:n.wrap,fullyVisible:o})}}return g.sort(((t,e)=>t.distanceSq-e.distanceSq)).map((t=>t.tileID))}resize(t,e){this.width=t,this.height=e,this.pixelsToGLUnits=[2/t,-2/e],this._constrain(),this._calcMatrices()}get unmodified(){return this._unmodified}zoomScale(t){return Math.pow(2,t)}scaleZoom(t){return Math.log(t)/Math.LN2}project(e){const i=t.clamp(e.lat,-this.maxValidLatitude,this.maxValidLatitude)
return new t.Point(t.mercatorXfromLng(e.lng)*this.worldSize,t.mercatorYfromLat(i)*this.worldSize)}unproject(e){return new t.MercatorCoordinate(e.x/this.worldSize,e.y/this.worldSize).toLngLat()}get point(){return this.project(this.center)}updateElevation(t){this.freezeElevation||(this.elevation=t?this.getElevation(this._center,t):0)}getElevation(e,i){const r=t.MercatorCoordinate.fromLngLat(e.wrap()),n=(1<<this.tileZoom)*t.EXTENT,s=r.x*n,a=r.y*n,o=Math.floor(s/t.EXTENT),l=Math.floor(a/t.EXTENT),c=new t.OverscaledTileID(this.tileZoom,0,this.tileZoom,o,l)
return i.getElevation(c,s%t.EXTENT,a%t.EXTENT,t.EXTENT)}getCameraPosition(){return{lngLat:this.pointLocation(this.getCameraPoint()),altitude:Math.cos(this._pitch)*this.cameraToCenterDistance/this._pixelPerMeter+this.elevation}}recalculateZoom(e){const i=this.pointLocation(this.centerPoint,e),r=this.getElevation(i,e)
if(!(this.elevation-r))return
const n=this.getCameraPosition(),s=t.MercatorCoordinate.fromLngLat(n.lngLat,n.altitude),a=t.MercatorCoordinate.fromLngLat(i,r),o=s.x-a.x,l=s.y-a.y,c=s.z-a.z,h=Math.sqrt(o*o+l*l+c*c),u=this.scaleZoom(this.cameraToCenterDistance/h/this.tileSize)
this._elevation=r,this._center=i,this.zoom=u}setLocationAtPoint(e,i){const r=this.pointCoordinate(i),n=this.pointCoordinate(this.centerPoint),s=this.locationCoordinate(e),a=new t.MercatorCoordinate(s.x-(r.x-n.x),s.y-(r.y-n.y))
this.center=this.coordinateLocation(a),this._renderWorldCopies&&(this.center=this.center.wrap())}locationPoint(t,e){return e?this.coordinatePoint(this.locationCoordinate(t),this.getElevation(t,e),this.pixelMatrix3D):this.coordinatePoint(this.locationCoordinate(t))}pointLocation(t,e){return this.coordinateLocation(this.pointCoordinate(t,e))}locationCoordinate(e){return t.MercatorCoordinate.fromLngLat(e)}coordinateLocation(t){return t&&t.toLngLat()}pointCoordinate(e,i){if(i){const t=i.pointCoordinate(e)
if(null!=t)return t}const r=[e.x,e.y,0,1],n=[e.x,e.y,1,1]
t.transformMat4(r,r,this.pixelMatrixInverse),t.transformMat4(n,n,this.pixelMatrixInverse)
const s=r[3],a=n[3],o=r[1]/s,l=n[1]/a,c=r[2]/s,h=n[2]/a,u=c===h?0:(0-c)/(h-c)
return new t.MercatorCoordinate(t.interpolate.number(r[0]/s,n[0]/a,u)/this.worldSize,t.interpolate.number(o,l,u)/this.worldSize)}coordinatePoint(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.pixelMatrix
const n=[e.x*this.worldSize,e.y*this.worldSize,i,1]
return t.transformMat4(n,n,r),new t.Point(n[0]/n[3],n[1]/n[3])}getBounds(){const e=Math.max(0,this.height/2-this.getHorizon())
return(new L).extend(this.pointLocation(new t.Point(0,e))).extend(this.pointLocation(new t.Point(this.width,e))).extend(this.pointLocation(new t.Point(this.width,this.height))).extend(this.pointLocation(new t.Point(0,this.height)))}getMaxBounds(){return this.latRange&&2===this.latRange.length&&this.lngRange&&2===this.lngRange.length?new L([this.lngRange[0],this.latRange[0]],[this.lngRange[1],this.latRange[1]]):null}getHorizon(){return Math.tan(Math.PI/2-this._pitch)*this.cameraToCenterDistance*.85}setMaxBounds(t){t?(this.lngRange=[t.getWest(),t.getEast()],this.latRange=[t.getSouth(),t.getNorth()],this._constrain()):(this.lngRange=null,this.latRange=[-this.maxValidLatitude,this.maxValidLatitude])}calculatePosMatrix(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const r=e.key,n=i?this._alignedPosMatrixCache:this._posMatrixCache
if(n[r])return n[r]
const s=e.canonical,a=this.worldSize/this.zoomScale(s.z),o=s.x+Math.pow(2,s.z)*e.wrap,l=t.identity(new Float64Array(16))
return t.translate(l,l,[o*a,s.y*a,0]),t.scale(l,l,[a/t.EXTENT,a/t.EXTENT,1]),t.multiply(l,i?this.alignedProjMatrix:this.projMatrix,l),n[r]=new Float32Array(l),n[r]}customLayerMatrix(){return this.mercatorMatrix.slice()}_constrain(){if(!this.center||!this.width||!this.height||this._constraining)return
this._constraining=!0
let e,i,r,n,s=-90,a=90,o=-180,l=180
const c=this.size,h=this._unmodified
if(this.latRange){const i=this.latRange
s=t.mercatorYfromLat(i[1])*this.worldSize,a=t.mercatorYfromLat(i[0])*this.worldSize,e=a-s<c.y?c.y/(a-s):0}if(this.lngRange){const e=this.lngRange
o=t.wrap(t.mercatorXfromLng(e[0])*this.worldSize,0,this.worldSize),l=t.wrap(t.mercatorXfromLng(e[1])*this.worldSize,0,this.worldSize),l<o&&(l+=this.worldSize),i=l-o<c.x?c.x/(l-o):0}const u=this.point,d=Math.max(i||0,e||0)
if(d)return this.center=this.unproject(new t.Point(i?(l+o)/2:u.x,e?(a+s)/2:u.y)),this.zoom+=this.scaleZoom(d),this._unmodified=h,void(this._constraining=!1)
if(this.latRange){const t=u.y,e=c.y/2
t-e<s&&(n=s+e),t+e>a&&(n=a-e)}if(this.lngRange){const e=(o+l)/2,i=t.wrap(u.x,e-this.worldSize/2,e+this.worldSize/2),n=c.x/2
i-n<o&&(r=o+n),i+n>l&&(r=l-n)}void 0===r&&void 0===n||(this.center=this.unproject(new t.Point(void 0!==r?r:u.x,void 0!==n?n:u.y)).wrap()),this._unmodified=h,this._constraining=!1}_calcMatrices(){if(!this.height)return
const e=this.centerOffset,i=this.point.x,r=this.point.y
this.cameraToCenterDistance=.5/Math.tan(this._fov/2)*this.height,this._pixelPerMeter=t.mercatorZfromAltitude(1,this.center.lat)*this.worldSize
let n=t.identity(new Float64Array(16))
t.scale(n,n,[this.width/2,-this.height/2,1]),t.translate(n,n,[1,-1,0]),this.labelPlaneMatrix=n,n=t.identity(new Float64Array(16)),t.scale(n,n,[1,-1,1]),t.translate(n,n,[-1,-1,0]),t.scale(n,n,[2/this.width,2/this.height,1]),this.glCoordMatrix=n,this.cameraToSeaLevelDistance=this.cameraToCenterDistance+this._elevation*this._pixelPerMeter/Math.cos(this._pitch)
const s=this._elevation<0?this.cameraToCenterDistance:this.cameraToSeaLevelDistance,a=Math.PI/2+this._pitch,o=this._fov*(.5+e.y/this.height),l=Math.sin(o)*s/Math.sin(t.clamp(Math.PI-a-o,.01,Math.PI-.01)),c=this.getHorizon(),h=2*Math.atan(c/this.cameraToCenterDistance)*(.5+e.y/(2*c)),u=Math.sin(h)*s/Math.sin(t.clamp(Math.PI-a-h,.01,Math.PI-.01)),d=Math.min(l,u),p=1.01*(Math.cos(Math.PI/2-this._pitch)*d+s),f=this.height/50
n=new Float64Array(16),t.perspective(n,this._fov,this.width/this.height,f,p),n[8]=2*-e.x/this.width,n[9]=2*e.y/this.height,t.scale(n,n,[1,-1,1]),t.translate(n,n,[0,0,-this.cameraToCenterDistance]),t.rotateX(n,n,this._pitch),t.rotateZ(n,n,this.angle),t.translate(n,n,[-i,-r,0]),this.mercatorMatrix=t.scale([],n,[this.worldSize,this.worldSize,this.worldSize]),t.scale(n,n,[1,1,this._pixelPerMeter]),this.pixelMatrix=t.multiply(new Float64Array(16),this.labelPlaneMatrix,n),t.translate(n,n,[0,0,-this.elevation]),this.projMatrix=n,this.invProjMatrix=t.invert([],n),this.pixelMatrix3D=t.multiply(new Float64Array(16),this.labelPlaneMatrix,n)
const m=this.width%2/2,g=this.height%2/2,_=Math.cos(this.angle),y=Math.sin(this.angle),x=i-Math.round(i)+_*m+y*g,v=r-Math.round(r)+_*g+y*m,b=new Float64Array(n)
if(t.translate(b,b,[x>.5?x-1:x,v>.5?v-1:v,0]),this.alignedProjMatrix=b,n=t.invert(new Float64Array(16),this.pixelMatrix),!n)throw new Error("failed to invert matrix")
this.pixelMatrixInverse=n,this._posMatrixCache={},this._alignedPosMatrixCache={}}maxPitchScaleFactor(){if(!this.pixelMatrixInverse)return 1
const e=this.pointCoordinate(new t.Point(0,0)),i=[e.x*this.worldSize,e.y*this.worldSize,0,1]
return t.transformMat4(i,i,this.pixelMatrix)[3]/this.cameraToCenterDistance}getCameraPoint(){const e=Math.tan(this._pitch)*(this.cameraToCenterDistance||1)
return this.centerPoint.add(new t.Point(0,e))}getCameraQueryGeometry(e){const i=this.getCameraPoint()
if(1===e.length)return[e[0],i]
{let r=i.x,n=i.y,s=i.x,a=i.y
for(const t of e)r=Math.min(r,t.x),n=Math.min(n,t.y),s=Math.max(s,t.x),a=Math.max(a,t.y)
return[new t.Point(r,n),new t.Point(s,n),new t.Point(s,a),new t.Point(r,a),new t.Point(r,n)]}}}class or{constructor(e){this._hashName=e&&encodeURIComponent(e),t.bindAll(["_getCurrentHash","_onHashChange","_updateHash"],this),this._updateHash=function(t,e){let i=!1,r=null
const n=()=>{r=null,i&&(t(),r=setTimeout(n,300),i=!1)}
return()=>(i=!0,r||n(),r)}(this._updateHashUnthrottled.bind(this))}addTo(t){return this._map=t,addEventListener("hashchange",this._onHashChange,!1),this._map.on("moveend",this._updateHash),this}remove(){return removeEventListener("hashchange",this._onHashChange,!1),this._map.off("moveend",this._updateHash),clearTimeout(this._updateHash()),delete this._map,this}getHashString(t){const e=this._map.getCenter(),i=Math.round(100*this._map.getZoom())/100,r=Math.ceil((i*Math.LN2+Math.log(512/360/.5))/Math.LN10),n=Math.pow(10,r),s=Math.round(e.lng*n)/n,a=Math.round(e.lat*n)/n,o=this._map.getBearing(),l=this._map.getPitch()
let c=""
if(c+=t?`/${s}/${a}/${i}`:`${i}/${a}/${s}`,(o||l)&&(c+="/"+Math.round(10*o)/10),l&&(c+=`/${Math.round(l)}`),this._hashName){const t=this._hashName
let e=!1
const i=window.location.hash.slice(1).split("&").map((i=>{const r=i.split("=")[0]
return r===t?(e=!0,`${r}=${c}`):i})).filter((t=>t))
return e||i.push(`${t}=${c}`),`#${i.join("&")}`}return`#${c}`}_getCurrentHash(){const t=window.location.hash.replace("#","")
if(this._hashName){let e
return t.split("&").map((t=>t.split("="))).forEach((t=>{t[0]===this._hashName&&(e=t)})),(e&&e[1]||"").split("/")}return t.split("/")}_onHashChange(){const t=this._getCurrentHash()
if(t.length>=3&&!t.some((t=>isNaN(t)))){const e=this._map.dragRotate.isEnabled()&&this._map.touchZoomRotate.isEnabled()?+(t[3]||0):this._map.getBearing()
return this._map.jumpTo({center:[+t[2],+t[1]],zoom:+t[0],bearing:e,pitch:+(t[4]||0)}),!0}return!1}_updateHashUnthrottled(){const t=window.location.href.replace(/(#.+)?$/,this.getHashString())
try{window.history.replaceState(window.history.state,null,t)}catch(t){}}}const lr={linearity:.3,easing:t.bezier(0,0,.3,1)},cr=t.extend({deceleration:2500,maxSpeed:1400},lr),hr=t.extend({deceleration:20,maxSpeed:1400},lr),ur=t.extend({deceleration:1e3,maxSpeed:360},lr),dr=t.extend({deceleration:1e3,maxSpeed:90},lr)
class pr{constructor(t){this._map=t,this.clear()}clear(){this._inertiaBuffer=[]}record(e){this._drainInertiaBuffer(),this._inertiaBuffer.push({time:t.exported.now(),settings:e})}_drainInertiaBuffer(){const e=this._inertiaBuffer,i=t.exported.now()
for(;e.length>0&&i-e[0].time>160;)e.shift()}_onMoveEnd(e){if(this._drainInertiaBuffer(),this._inertiaBuffer.length<2)return
const i={zoom:0,bearing:0,pitch:0,pan:new t.Point(0,0),pinchAround:void 0,around:void 0}
for(const{settings:t}of this._inertiaBuffer)i.zoom+=t.zoomDelta||0,i.bearing+=t.bearingDelta||0,i.pitch+=t.pitchDelta||0,t.panDelta&&i.pan._add(t.panDelta),t.around&&(i.around=t.around),t.pinchAround&&(i.pinchAround=t.pinchAround)
const r=this._inertiaBuffer[this._inertiaBuffer.length-1].time-this._inertiaBuffer[0].time,n={}
if(i.pan.mag()){const s=mr(i.pan.mag(),r,t.extend({},cr,e||{}))
n.offset=i.pan.mult(s.amount/i.pan.mag()),n.center=this._map.transform.center,fr(n,s)}if(i.zoom){const t=mr(i.zoom,r,hr)
n.zoom=this._map.transform.zoom+t.amount,fr(n,t)}if(i.bearing){const e=mr(i.bearing,r,ur)
n.bearing=this._map.transform.bearing+t.clamp(e.amount,-179,179),fr(n,e)}if(i.pitch){const t=mr(i.pitch,r,dr)
n.pitch=this._map.transform.pitch+t.amount,fr(n,t)}if(n.zoom||n.bearing){const t=void 0===i.pinchAround?i.around:i.pinchAround
n.around=t?this._map.unproject(t):this._map.getCenter()}return this.clear(),t.extend(n,{noMoveStart:!0})}}function fr(t,e){(!t.duration||t.duration<e.duration)&&(t.duration=e.duration,t.easing=e.easing)}function mr(e,i,r){const{maxSpeed:n,linearity:s,deceleration:a}=r,o=t.clamp(e*s/(i/1e3),-n,n),l=Math.abs(o)/(a*s)
return{easing:r.easing,duration:1e3*l,amount:o*(l/2)}}class gr extends t.Event{preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}constructor(e,r,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const a=i.mousePos(r.getCanvasContainer(),n),o=r.unproject(a)
super(e,t.extend({point:a,lngLat:o,originalEvent:n},s)),this._defaultPrevented=!1,this.target=r}}class _r extends t.Event{preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}constructor(e,r,n){const s="touchend"===e?n.changedTouches:n.touches,a=i.touchPos(r.getCanvasContainer(),s),o=a.map((t=>r.unproject(t))),l=a.reduce(((t,e,i,r)=>t.add(e.div(r.length))),new t.Point(0,0))
super(e,{points:a,point:l,lngLats:o,lngLat:r.unproject(l),originalEvent:n}),this._defaultPrevented=!1}}class yr extends t.Event{preventDefault(){this._defaultPrevented=!0}get defaultPrevented(){return this._defaultPrevented}constructor(t,e,i){super(t,{originalEvent:i}),this._defaultPrevented=!1}}class xr{constructor(t,e){this._map=t,this._clickTolerance=e.clickTolerance}reset(){delete this._mousedownPos}wheel(t){return this._firePreventable(new yr(t.type,this._map,t))}mousedown(t,e){return this._mousedownPos=e,this._firePreventable(new gr(t.type,this._map,t))}mouseup(t){this._map.fire(new gr(t.type,this._map,t))}click(t,e){this._mousedownPos&&this._mousedownPos.dist(e)>=this._clickTolerance||this._map.fire(new gr(t.type,this._map,t))}dblclick(t){return this._firePreventable(new gr(t.type,this._map,t))}mouseover(t){this._map.fire(new gr(t.type,this._map,t))}mouseout(t){this._map.fire(new gr(t.type,this._map,t))}touchstart(t){return this._firePreventable(new _r(t.type,this._map,t))}touchmove(t){this._map.fire(new _r(t.type,this._map,t))}touchend(t){this._map.fire(new _r(t.type,this._map,t))}touchcancel(t){this._map.fire(new _r(t.type,this._map,t))}_firePreventable(t){if(this._map.fire(t),t.defaultPrevented)return{}}isEnabled(){return!0}isActive(){return!1}enable(){}disable(){}}class vr{constructor(t){this._map=t}reset(){this._delayContextMenu=!1,this._ignoreContextMenu=!0,delete this._contextMenuEvent}mousemove(t){this._map.fire(new gr(t.type,this._map,t))}mousedown(){this._delayContextMenu=!0,this._ignoreContextMenu=!1}mouseup(){this._delayContextMenu=!1,this._contextMenuEvent&&(this._map.fire(new gr("contextmenu",this._map,this._contextMenuEvent)),delete this._contextMenuEvent)}contextmenu(t){this._delayContextMenu?this._contextMenuEvent=t:this._ignoreContextMenu||this._map.fire(new gr(t.type,this._map,t)),this._map.listens("contextmenu")&&t.preventDefault()}isEnabled(){return!0}isActive(){return!1}enable(){}disable(){}}class br{constructor(t){this._map=t}get transform(){return this._map._requestedCameraState||this._map.transform}get center(){return{lng:this.transform.center.lng,lat:this.transform.center.lat}}get zoom(){return this.transform.zoom}get pitch(){return this.transform.pitch}get bearing(){return this.transform.bearing}unproject(e){return this.transform.pointLocation(t.Point.convert(e),this._map.terrain)}}class wr{constructor(t,e){this._map=t,this._tr=new br(t),this._el=t.getCanvasContainer(),this._container=t.getContainer(),this._clickTolerance=e.clickTolerance||1}isEnabled(){return!!this._enabled}isActive(){return!!this._active}enable(){this.isEnabled()||(this._enabled=!0)}disable(){this.isEnabled()&&(this._enabled=!1)}mousedown(t,e){this.isEnabled()&&t.shiftKey&&0===t.button&&(i.disableDrag(),this._startPos=this._lastPos=e,this._active=!0)}mousemoveWindow(t,e){if(!this._active)return
const r=e
if(this._lastPos.equals(r)||!this._box&&r.dist(this._startPos)<this._clickTolerance)return
const n=this._startPos
this._lastPos=r,this._box||(this._box=i.create("div","maplibregl-boxzoom",this._container),this._container.classList.add("maplibregl-crosshair"),this._fireEvent("boxzoomstart",t))
const s=Math.min(n.x,r.x),a=Math.max(n.x,r.x),o=Math.min(n.y,r.y),l=Math.max(n.y,r.y)
i.setTransform(this._box,`translate(${s}px,${o}px)`),this._box.style.width=a-s+"px",this._box.style.height=l-o+"px"}mouseupWindow(e,r){if(!this._active)return
if(0!==e.button)return
const n=this._startPos,s=r
if(this.reset(),i.suppressClick(),n.x!==s.x||n.y!==s.y)return this._map.fire(new t.Event("boxzoomend",{originalEvent:e})),{cameraAnimation:t=>t.fitScreenCoordinates(n,s,this._tr.bearing,{linear:!0})}
this._fireEvent("boxzoomcancel",e)}keydown(t){this._active&&27===t.keyCode&&(this.reset(),this._fireEvent("boxzoomcancel",t))}reset(){this._active=!1,this._container.classList.remove("maplibregl-crosshair"),this._box&&(i.remove(this._box),this._box=null),i.enableDrag(),delete this._startPos,delete this._lastPos}_fireEvent(e,i){return this._map.fire(new t.Event(e,{originalEvent:i}))}}function Tr(t,e){if(t.length!==e.length)throw new Error(`The number of touches and points are not equal - touches ${t.length}, points ${e.length}`)
const i={}
for(let r=0;r<t.length;r++)i[t[r].identifier]=e[r]
return i}class Sr{constructor(t){this.reset(),this.numTouches=t.numTouches}reset(){delete this.centroid,delete this.startTime,delete this.touches,this.aborted=!1}touchstart(e,i,r){(this.centroid||r.length>this.numTouches)&&(this.aborted=!0),this.aborted||(void 0===this.startTime&&(this.startTime=e.timeStamp),r.length===this.numTouches&&(this.centroid=function(e){const i=new t.Point(0,0)
for(const t of e)i._add(t)
return i.div(e.length)}(i),this.touches=Tr(r,i)))}touchmove(t,e,i){if(this.aborted||!this.centroid)return
const r=Tr(i,e)
for(const n in this.touches){const t=r[n];(!t||t.dist(this.touches[n])>30)&&(this.aborted=!0)}}touchend(t,e,i){if((!this.centroid||t.timeStamp-this.startTime>500)&&(this.aborted=!0),0===i.length){const t=!this.aborted&&this.centroid
if(this.reset(),t)return t}}}class Er{constructor(t){this.singleTap=new Sr(t),this.numTaps=t.numTaps,this.reset()}reset(){this.lastTime=1/0,delete this.lastTap,this.count=0,this.singleTap.reset()}touchstart(t,e,i){this.singleTap.touchstart(t,e,i)}touchmove(t,e,i){this.singleTap.touchmove(t,e,i)}touchend(t,e,i){const r=this.singleTap.touchend(t,e,i)
if(r){const e=t.timeStamp-this.lastTime<500,i=!this.lastTap||this.lastTap.dist(r)<30
if(e&&i||this.reset(),this.count++,this.lastTime=t.timeStamp,this.lastTap=r,this.count===this.numTaps)return this.reset(),r}}}class Ir{constructor(t){this._tr=new br(t),this._zoomIn=new Er({numTouches:1,numTaps:2}),this._zoomOut=new Er({numTouches:2,numTaps:1}),this.reset()}reset(){this._active=!1,this._zoomIn.reset(),this._zoomOut.reset()}touchstart(t,e,i){this._zoomIn.touchstart(t,e,i),this._zoomOut.touchstart(t,e,i)}touchmove(t,e,i){this._zoomIn.touchmove(t,e,i),this._zoomOut.touchmove(t,e,i)}touchend(t,e,i){const r=this._zoomIn.touchend(t,e,i),n=this._zoomOut.touchend(t,e,i),s=this._tr
return r?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:s.zoom+1,around:s.unproject(r)},{originalEvent:t})}):n?(this._active=!0,t.preventDefault(),setTimeout((()=>this.reset()),0),{cameraAnimation:e=>e.easeTo({duration:300,zoom:s.zoom-1,around:s.unproject(n)},{originalEvent:t})}):void 0}touchcancel(){this.reset()}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class Ar{constructor(t){this._enabled=!!t.enable,this._moveStateManager=t.moveStateManager,this._clickTolerance=t.clickTolerance||1,this._moveFunction=t.move,this._activateOnStart=!!t.activateOnStart,t.assignEvents(this),this.reset()}reset(t){this._active=!1,this._moved=!1,delete this._lastPoint,this._moveStateManager.endMove(t)}_move(){const t=this._moveFunction(...arguments)
if(t.bearingDelta||t.pitchDelta||t.around||t.panDelta)return this._active=!0,t}dragStart(t,e){this.isEnabled()&&!this._lastPoint&&this._moveStateManager.isValidStartEvent(t)&&(this._moveStateManager.startMove(t),this._lastPoint=e.length?e[0]:e,this._activateOnStart&&this._lastPoint&&(this._active=!0))}dragMove(t,e){if(!this.isEnabled())return
const i=this._lastPoint
if(!i)return
if(t.preventDefault(),!this._moveStateManager.isValidMoveEvent(t))return void this.reset(t)
const r=e.length?e[0]:e
return!this._moved&&r.dist(i)<this._clickTolerance?void 0:(this._moved=!0,this._lastPoint=r,this._move(i,r))}dragEnd(t){this.isEnabled()&&this._lastPoint&&this._moveStateManager.isValidEndEvent(t)&&(this._moved&&i.suppressClick(),this.reset(t))}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}getClickTolerance(){return this._clickTolerance}}const Mr={0:1,2:2}
class Cr{constructor(t){this._correctEvent=t.checkCorrectEvent}startMove(t){const e=i.mouseButton(t)
this._eventButton=e}endMove(t){delete this._eventButton}isValidStartEvent(t){return this._correctEvent(t)}isValidMoveEvent(t){return!function(t,e){const i=Mr[e]
return void 0===t.buttons||(t.buttons&i)!==i}(t,this._eventButton)}isValidEndEvent(t){return i.mouseButton(t)===this._eventButton}}class Pr{constructor(){this._firstTouch=void 0}_isOneFingerTouch(t){return 1===t.targetTouches.length}_isSameTouchEvent(t){return t.targetTouches[0].identifier===this._firstTouch}startMove(t){this._firstTouch=t.targetTouches[0].identifier}endMove(t){delete this._firstTouch}isValidStartEvent(t){return this._isOneFingerTouch(t)}isValidMoveEvent(t){return this._isOneFingerTouch(t)&&this._isSameTouchEvent(t)}isValidEndEvent(t){return this._isOneFingerTouch(t)&&this._isSameTouchEvent(t)}}const zr=t=>{t.mousedown=t.dragStart,t.mousemoveWindow=t.dragMove,t.mouseup=t.dragEnd,t.contextmenu=function(t){t.preventDefault()}},kr=t=>{let{enable:e,clickTolerance:r,bearingDegreesPerPixelMoved:n=.8}=t
const s=new Cr({checkCorrectEvent:t=>0===i.mouseButton(t)&&t.ctrlKey||2===i.mouseButton(t)})
return new Ar({clickTolerance:r,move:(t,e)=>({bearingDelta:(e.x-t.x)*n}),moveStateManager:s,enable:e,assignEvents:zr})},Dr=t=>{let{enable:e,clickTolerance:r,pitchDegreesPerPixelMoved:n=-.5}=t
const s=new Cr({checkCorrectEvent:t=>0===i.mouseButton(t)&&t.ctrlKey||2===i.mouseButton(t)})
return new Ar({clickTolerance:r,move:(t,e)=>({pitchDelta:(e.y-t.y)*n}),moveStateManager:s,enable:e,assignEvents:zr})}
class Lr{constructor(t,e){this._minTouches=t.cooperativeGestures?2:1,this._clickTolerance=t.clickTolerance||1,this._map=e,this.reset()}reset(){this._active=!1,this._touches={},this._sum=new t.Point(0,0),setTimeout((()=>{this._cancelCooperativeMessage=!1}),200)}touchstart(t,e,i){return this._calculateTransform(t,e,i)}touchmove(t,e,i){if(this._map._cooperativeGestures&&(2===this._minTouches&&i.length<2&&!this._cancelCooperativeMessage?this._map._onCooperativeGesture(t,!1,i.length):this._cancelCooperativeMessage||(this._cancelCooperativeMessage=!0)),this._active&&!(i.length<this._minTouches))return t.preventDefault(),this._calculateTransform(t,e,i)}touchend(t,e,i){this._calculateTransform(t,e,i),this._active&&i.length<this._minTouches&&this.reset()}touchcancel(){this.reset()}_calculateTransform(e,i,r){r.length>0&&(this._active=!0)
const n=Tr(r,i),s=new t.Point(0,0),a=new t.Point(0,0)
let o=0
for(const t in n){const e=n[t],i=this._touches[t]
i&&(s._add(e),a._add(e.sub(i)),o++,n[t]=e)}if(this._touches=n,o<this._minTouches||!a.mag())return
const l=a.div(o)
return this._sum._add(l),this._sum.mag()<this._clickTolerance?void 0:{around:s.div(o),panDelta:l}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class Br{constructor(){this.reset()}reset(){this._active=!1,delete this._firstTwoTouches}_start(t){}_move(t,e,i){return{}}touchstart(t,e,i){this._firstTwoTouches||i.length<2||(this._firstTwoTouches=[i[0].identifier,i[1].identifier],this._start([e[0],e[1]]))}touchmove(t,e,i){if(!this._firstTwoTouches)return
t.preventDefault()
const[r,n]=this._firstTwoTouches,s=Rr(i,e,r),a=Rr(i,e,n)
if(!s||!a)return
const o=this._aroundCenter?null:s.add(a).div(2)
return this._move([s,a],o,t)}touchend(t,e,r){if(!this._firstTwoTouches)return
const[n,s]=this._firstTwoTouches,a=Rr(r,e,n),o=Rr(r,e,s)
a&&o||(this._active&&i.suppressClick(),this.reset())}touchcancel(){this.reset()}enable(t){this._enabled=!0,this._aroundCenter=!!t&&"center"===t.around}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}function Rr(t,e,i){for(let r=0;r<t.length;r++)if(t[r].identifier===i)return e[r]}function Fr(t,e){return Math.log(t/e)/Math.LN2}class Or extends Br{reset(){super.reset(),delete this._distance,delete this._startDistance}_start(t){this._startDistance=this._distance=t[0].dist(t[1])}_move(t,e){const i=this._distance
if(this._distance=t[0].dist(t[1]),this._active||!(Math.abs(Fr(this._distance,this._startDistance))<.1))return this._active=!0,{zoomDelta:Fr(this._distance,i),pinchAround:e}}}function Ur(t,e){return 180*t.angleWith(e)/Math.PI}class Vr extends Br{reset(){super.reset(),delete this._minDiameter,delete this._startVector,delete this._vector}_start(t){this._startVector=this._vector=t[0].sub(t[1]),this._minDiameter=t[0].dist(t[1])}_move(t,e){const i=this._vector
if(this._vector=t[0].sub(t[1]),this._active||!this._isBelowThreshold(this._vector))return this._active=!0,{bearingDelta:Ur(this._vector,i),pinchAround:e}}_isBelowThreshold(t){this._minDiameter=Math.min(this._minDiameter,t.mag())
const e=25/(Math.PI*this._minDiameter)*360,i=Ur(t,this._startVector)
return Math.abs(i)<e}}function Nr(t){return Math.abs(t.y)>Math.abs(t.x)}class $r extends Br{constructor(t){super(),this._map=t}reset(){super.reset(),this._valid=void 0,delete this._firstMove,delete this._lastPoints}touchstart(t,e,i){super.touchstart(t,e,i),this._currentTouchCount=i.length}_start(t){this._lastPoints=t,Nr(t[0].sub(t[1]))&&(this._valid=!1)}_move(t,e,i){if(this._map._cooperativeGestures&&this._currentTouchCount<3)return
const r=t[0].sub(this._lastPoints[0]),n=t[1].sub(this._lastPoints[1])
return this._valid=this.gestureBeginsVertically(r,n,i.timeStamp),this._valid?(this._lastPoints=t,this._active=!0,{pitchDelta:(r.y+n.y)/2*-.5}):void 0}gestureBeginsVertically(t,e,i){if(void 0!==this._valid)return this._valid
const r=t.mag()>=2,n=e.mag()>=2
if(!r&&!n)return
if(!r||!n)return void 0===this._firstMove&&(this._firstMove=i),i-this._firstMove<100&&void 0
const s=t.y>0==e.y>0
return Nr(t)&&Nr(e)&&s}}const qr={panStep:100,bearingStep:15,pitchStep:10}
class jr{constructor(t){this._tr=new br(t)
const e=qr
this._panStep=e.panStep,this._bearingStep=e.bearingStep,this._pitchStep=e.pitchStep,this._rotationDisabled=!1}reset(){this._active=!1}keydown(t){if(t.altKey||t.ctrlKey||t.metaKey)return
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
default:return}return this._rotationDisabled&&(i=0,r=0),{cameraAnimation:a=>{const o=this._tr
a.easeTo({duration:300,easeId:"keyboardHandler",easing:Zr,zoom:e?Math.round(o.zoom)+e*(t.shiftKey?2:1):o.zoom,bearing:o.bearing+i*this._bearingStep,pitch:o.pitch+r*this._pitchStep,offset:[-n*this._panStep,-s*this._panStep],center:o.center},{originalEvent:t})}}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}disableRotation(){this._rotationDisabled=!0}enableRotation(){this._rotationDisabled=!1}}function Zr(t){return t*(2-t)}const Gr=4.000244140625
class Xr{constructor(e,i){this._map=e,this._tr=new br(e),this._el=e.getCanvasContainer(),this._handler=i,this._delta=0,this._defaultZoomRate=.01,this._wheelZoomRate=.0022222222222222222,t.bindAll(["_onTimeout"],this)}setZoomRate(t){this._defaultZoomRate=t}setWheelZoomRate(t){this._wheelZoomRate=t}isEnabled(){return!!this._enabled}isActive(){return!!this._active||void 0!==this._finishTimeout}isZooming(){return!!this._zooming}enable(t){this.isEnabled()||(this._enabled=!0,this._aroundCenter=t&&"center"===t.around)}disable(){this.isEnabled()&&(this._enabled=!1)}wheel(e){if(!this.isEnabled())return
if(this._map._cooperativeGestures){if(!e[this._map._metaKey])return
e.preventDefault()}let i=e.deltaMode===WheelEvent.DOM_DELTA_LINE?40*e.deltaY:e.deltaY
const r=t.exported.now(),n=r-(this._lastWheelEventTime||0)
this._lastWheelEventTime=r,0!==i&&i%Gr==0?this._type="wheel":0!==i&&Math.abs(i)<4?this._type="trackpad":n>400?(this._type=null,this._lastValue=i,this._timeout=setTimeout(this._onTimeout,40,e)):this._type||(this._type=Math.abs(n*i)<200?"trackpad":"wheel",this._timeout&&(clearTimeout(this._timeout),this._timeout=null,i+=this._lastValue)),e.shiftKey&&i&&(i/=4),this._type&&(this._lastWheelEvent=e,this._delta-=i,this._active||this._start(e)),e.preventDefault()}_onTimeout(t){this._type="wheel",this._delta-=this._lastValue,this._active||this._start(t)}_start(e){if(!this._delta)return
this._frameId&&(this._frameId=null),this._active=!0,this.isZooming()||(this._zooming=!0),this._finishTimeout&&(clearTimeout(this._finishTimeout),delete this._finishTimeout)
const r=i.mousePos(this._el,e),n=this._tr
this._around=t.LngLat.convert(this._aroundCenter?n.center:n.unproject(r)),this._aroundPoint=n.transform.locationPoint(this._around),this._frameId||(this._frameId=!0,this._handler._triggerRenderFrame())}renderFrame(){if(!this._frameId)return
if(this._frameId=null,!this.isActive())return
const e=this._tr.transform
if(0!==this._delta){const t="wheel"===this._type&&Math.abs(this._delta)>Gr?this._wheelZoomRate:this._defaultZoomRate
let i=2/(1+Math.exp(-Math.abs(this._delta*t)))
this._delta<0&&0!==i&&(i=1/i)
const r="number"==typeof this._targetZoom?e.zoomScale(this._targetZoom):e.scale
this._targetZoom=Math.min(e.maxZoom,Math.max(e.minZoom,e.scaleZoom(r*i))),"wheel"===this._type&&(this._startZoom=e.zoom,this._easing=this._smoothOutEasing(200)),this._delta=0}const i="number"==typeof this._targetZoom?this._targetZoom:e.zoom,r=this._startZoom,n=this._easing
let s,a=!1
if("wheel"===this._type&&r&&n){const e=Math.min((t.exported.now()-this._lastWheelEventTime)/200,1),o=n(e)
s=t.interpolate.number(r,i,o),e<1?this._frameId||(this._frameId=!0):a=!0}else s=i,a=!0
return this._active=!0,a&&(this._active=!1,this._finishTimeout=setTimeout((()=>{this._zooming=!1,this._handler._triggerRenderFrame(),delete this._targetZoom,delete this._finishTimeout}),200)),{noInertia:!0,needsRenderFrame:!a,zoomDelta:s-e.zoom,around:this._aroundPoint,originalEvent:this._lastWheelEvent}}_smoothOutEasing(e){let i=t.ease
if(this._prevEase){const e=this._prevEase,r=(t.exported.now()-e.start)/e.duration,n=e.easing(r+.01)-e.easing(r),s=.27/Math.sqrt(n*n+1e-4)*.01,a=Math.sqrt(.0729-s*s)
i=t.bezier(s,a,.25,1)}return this._prevEase={start:t.exported.now(),duration:e,easing:i},i}reset(){this._active=!1}}class Wr{constructor(t,e){this._clickZoom=t,this._tapZoom=e}enable(){this._clickZoom.enable(),this._tapZoom.enable()}disable(){this._clickZoom.disable(),this._tapZoom.disable()}isEnabled(){return this._clickZoom.isEnabled()&&this._tapZoom.isEnabled()}isActive(){return this._clickZoom.isActive()||this._tapZoom.isActive()}}class Hr{constructor(t){this._tr=new br(t),this.reset()}reset(){this._active=!1}dblclick(t,e){return t.preventDefault(),{cameraAnimation:i=>{i.easeTo({duration:300,zoom:this._tr.zoom+(t.shiftKey?-1:1),around:this._tr.unproject(e)},{originalEvent:t})}}}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class Kr{constructor(){this._tap=new Er({numTouches:1,numTaps:1}),this.reset()}reset(){this._active=!1,delete this._swipePoint,delete this._swipeTouch,delete this._tapTime,this._tap.reset()}touchstart(t,e,i){this._swipePoint||(this._tapTime&&t.timeStamp-this._tapTime>500&&this.reset(),this._tapTime?i.length>0&&(this._swipePoint=e[0],this._swipeTouch=i[0].identifier):this._tap.touchstart(t,e,i))}touchmove(t,e,i){if(this._tapTime){if(this._swipePoint){if(i[0].identifier!==this._swipeTouch)return
const r=e[0],n=r.y-this._swipePoint.y
return this._swipePoint=r,t.preventDefault(),this._active=!0,{zoomDelta:n/128}}}else this._tap.touchmove(t,e,i)}touchend(t,e,i){this._tapTime?this._swipePoint&&0===i.length&&this.reset():this._tap.touchend(t,e,i)&&(this._tapTime=t.timeStamp)}touchcancel(){this.reset()}enable(){this._enabled=!0}disable(){this._enabled=!1,this.reset()}isEnabled(){return this._enabled}isActive(){return this._active}}class Yr{constructor(t,e,i){this._el=t,this._mousePan=e,this._touchPan=i}enable(t){this._inertiaOptions=t||{},this._mousePan.enable(),this._touchPan.enable(),this._el.classList.add("maplibregl-touch-drag-pan")}disable(){this._mousePan.disable(),this._touchPan.disable(),this._el.classList.remove("maplibregl-touch-drag-pan")}isEnabled(){return this._mousePan.isEnabled()&&this._touchPan.isEnabled()}isActive(){return this._mousePan.isActive()||this._touchPan.isActive()}}class Jr{constructor(t,e,i){this._pitchWithRotate=t.pitchWithRotate,this._mouseRotate=e,this._mousePitch=i}enable(){this._mouseRotate.enable(),this._pitchWithRotate&&this._mousePitch.enable()}disable(){this._mouseRotate.disable(),this._mousePitch.disable()}isEnabled(){return this._mouseRotate.isEnabled()&&(!this._pitchWithRotate||this._mousePitch.isEnabled())}isActive(){return this._mouseRotate.isActive()||this._mousePitch.isActive()}}class Qr{constructor(t,e,i,r){this._el=t,this._touchZoom=e,this._touchRotate=i,this._tapDragZoom=r,this._rotationDisabled=!1,this._enabled=!0}enable(t){this._touchZoom.enable(t),this._rotationDisabled||this._touchRotate.enable(t),this._tapDragZoom.enable(),this._el.classList.add("maplibregl-touch-zoom-rotate")}disable(){this._touchZoom.disable(),this._touchRotate.disable(),this._tapDragZoom.disable(),this._el.classList.remove("maplibregl-touch-zoom-rotate")}isEnabled(){return this._touchZoom.isEnabled()&&(this._rotationDisabled||this._touchRotate.isEnabled())&&this._tapDragZoom.isEnabled()}isActive(){return this._touchZoom.isActive()||this._touchRotate.isActive()||this._tapDragZoom.isActive()}disableRotation(){this._rotationDisabled=!0,this._touchRotate.disable()}enableRotation(){this._rotationDisabled=!1,this._touchZoom.isEnabled()&&this._touchRotate.enable()}}const tn=t=>t.zoom||t.drag||t.pitch||t.rotate
class en extends t.Event{}function rn(t){return t.panDelta&&t.panDelta.mag()||t.zoomDelta||t.bearingDelta||t.pitchDelta}class nn{constructor(e,r){this._map=e,this._el=this._map.getCanvasContainer(),this._handlers=[],this._handlersById={},this._changes=[],this._inertia=new pr(e),this._bearingSnap=r.bearingSnap,this._previousActiveHandlers={},this._eventsInProgress={},this._addDefaultHandlers(r),t.bindAll(["handleEvent","handleWindowEvent"],this)
const n=this._el
this._listeners=[[n,"touchstart",{passive:!0}],[n,"touchmove",{passive:!1}],[n,"touchend",void 0],[n,"touchcancel",void 0],[n,"mousedown",void 0],[n,"mousemove",void 0],[n,"mouseup",void 0],[document,"mousemove",{capture:!0}],[document,"mouseup",void 0],[n,"mouseover",void 0],[n,"mouseout",void 0],[n,"dblclick",void 0],[n,"click",void 0],[n,"keydown",{capture:!1}],[n,"keyup",void 0],[n,"wheel",{passive:!1}],[n,"contextmenu",void 0],[window,"blur",void 0]]
for(const[t,s,a]of this._listeners)i.addEventListener(t,s,t===document?this.handleWindowEvent:this.handleEvent,a)}destroy(){for(const[t,e,r]of this._listeners)i.removeEventListener(t,e,t===document?this.handleWindowEvent:this.handleEvent,r)}_addDefaultHandlers(t){const e=this._map,r=e.getCanvasContainer()
this._add("mapEvent",new xr(e,t))
const n=e.boxZoom=new wr(e,t)
this._add("boxZoom",n)
const s=new Ir(e),a=new Hr(e)
e.doubleClickZoom=new Wr(a,s),this._add("tapZoom",s),this._add("clickZoom",a)
const o=new Kr
this._add("tapDragZoom",o)
const l=e.touchPitch=new $r(e)
this._add("touchPitch",l)
const c=kr(t),h=Dr(t)
e.dragRotate=new Jr(t,c,h),this._add("mouseRotate",c,["mousePitch"]),this._add("mousePitch",h,["mouseRotate"])
const u=(t=>{let{enable:e,clickTolerance:r}=t
const n=new Cr({checkCorrectEvent:t=>0===i.mouseButton(t)&&!t.ctrlKey})
return new Ar({clickTolerance:r,move:(t,e)=>({around:e,panDelta:e.sub(t)}),activateOnStart:!0,moveStateManager:n,enable:e,assignEvents:zr})})(t),d=new Lr(t,e)
e.dragPan=new Yr(r,u,d),this._add("mousePan",u),this._add("touchPan",d,["touchZoom","touchRotate"])
const p=new Vr,f=new Or
e.touchZoomRotate=new Qr(r,f,p,o),this._add("touchRotate",p,["touchPan","touchZoom"]),this._add("touchZoom",f,["touchPan","touchRotate"])
const m=e.scrollZoom=new Xr(e,this)
this._add("scrollZoom",m,["mousePan"])
const g=e.keyboard=new jr(e)
this._add("keyboard",g),this._add("blockableMapEvent",new vr(e))
for(const i of["boxZoom","doubleClickZoom","tapDragZoom","touchPitch","dragRotate","dragPan","touchZoomRotate","scrollZoom","keyboard"])t.interactive&&t[i]&&e[i].enable(t[i])}_add(t,e,i){this._handlers.push({handlerName:t,handler:e,allowed:i}),this._handlersById[t]=e}stop(t){if(!this._updatingCamera){for(const{handler:t}of this._handlers)t.reset()
this._inertia.clear(),this._fireEvents({},{},t),this._changes=[]}}isActive(){for(const{handler:t}of this._handlers)if(t.isActive())return!0
return!1}isZooming(){return!!this._eventsInProgress.zoom||this._map.scrollZoom.isZooming()}isRotating(){return!!this._eventsInProgress.rotate}isMoving(){return Boolean(tn(this._eventsInProgress))||this.isZooming()}_blockedByActive(t,e,i){for(const r in t)if(r!==i&&(!e||e.indexOf(r)<0))return!0
return!1}handleWindowEvent(t){this.handleEvent(t,`${t.type}Window`)}_getMapTouches(t){const e=[]
for(const i of t)this._el.contains(i.target)&&e.push(i)
return e}handleEvent(t,e){if("blur"===t.type)return void this.stop(!0)
this._updatingCamera=!0
const r="renderFrame"===t.type?void 0:t,n={needsRenderFrame:!1},s={},a={},o=t.touches,l=o?this._getMapTouches(o):void 0,c=l?i.touchPos(this._el,l):i.mousePos(this._el,t)
for(const{handlerName:i,handler:d,allowed:p}of this._handlers){if(!d.isEnabled())continue
let o
this._blockedByActive(a,p,i)?d.reset():d[e||t.type]&&(o=d[e||t.type](t,c,l),this.mergeHandlerResult(n,s,o,i,r),o&&o.needsRenderFrame&&this._triggerRenderFrame()),(o||d.isActive())&&(a[i]=d)}const h={}
for(const i in this._previousActiveHandlers)a[i]||(h[i]=r)
this._previousActiveHandlers=a,(Object.keys(h).length||rn(n))&&(this._changes.push([n,s,h]),this._triggerRenderFrame()),(Object.keys(a).length||rn(n))&&this._map._stop(!0),this._updatingCamera=!1
const{cameraAnimation:u}=n
u&&(this._inertia.clear(),this._fireEvents({},{},!0),this._changes=[],u(this._map))}mergeHandlerResult(e,i,r,n,s){if(!r)return
t.extend(e,r)
const a={handlerName:n,originalEvent:r.originalEvent||s}
void 0!==r.zoomDelta&&(i.zoom=a),void 0!==r.panDelta&&(i.drag=a),void 0!==r.pitchDelta&&(i.pitch=a),void 0!==r.bearingDelta&&(i.rotate=a)}_applyChanges(){const e={},i={},r={}
for(const[n,s,a]of this._changes)n.panDelta&&(e.panDelta=(e.panDelta||new t.Point(0,0))._add(n.panDelta)),n.zoomDelta&&(e.zoomDelta=(e.zoomDelta||0)+n.zoomDelta),n.bearingDelta&&(e.bearingDelta=(e.bearingDelta||0)+n.bearingDelta),n.pitchDelta&&(e.pitchDelta=(e.pitchDelta||0)+n.pitchDelta),void 0!==n.around&&(e.around=n.around),void 0!==n.pinchAround&&(e.pinchAround=n.pinchAround),n.noInertia&&(e.noInertia=n.noInertia),t.extend(i,s),t.extend(r,a)
this._updateMapTransform(e,i,r),this._changes=[]}_updateMapTransform(t,e,i){const r=this._map,n=r._getTransformForUpdate(),s=r.terrain
if(!(rn(t)||s&&this._terrainMovement))return this._fireEvents(e,i,!0)
let{panDelta:a,zoomDelta:o,bearingDelta:l,pitchDelta:c,around:h,pinchAround:u}=t
void 0!==u&&(h=u),r._stop(!0),h=h||r.transform.centerPoint
const d=n.pointLocation(a?h.sub(a):h)
l&&(n.bearing+=l),c&&(n.pitch+=c),o&&(n.zoom+=o),s?this._terrainMovement||!e.drag&&!e.zoom?e.drag&&this._terrainMovement?n.center=n.pointLocation(n.centerPoint.sub(a)):n.setLocationAtPoint(d,h):(this._terrainMovement=!0,n.freezeElevation=!0,n.setLocationAtPoint(d,h),this._map.once("moveend",(()=>{n.freezeElevation=!1,this._terrainMovement=!1,n.recalculateZoom(r.terrain)}))):n.setLocationAtPoint(d,h),r._applyUpdatedTransform(n),this._map._update(),t.noInertia||this._inertia.record(t),this._fireEvents(e,i,!0)}_fireEvents(e,i,r){const n=tn(this._eventsInProgress),s=tn(e),a={}
for(const t in e){const{originalEvent:i}=e[t]
this._eventsInProgress[t]||(a[`${t}start`]=i),this._eventsInProgress[t]=e[t]}!n&&s&&this._fireEvent("movestart",s.originalEvent)
for(const t in a)this._fireEvent(t,a[t])
s&&this._fireEvent("move",s.originalEvent)
for(const t in e){const{originalEvent:i}=e[t]
this._fireEvent(t,i)}const o={}
let l
for(const t in this._eventsInProgress){const{handlerName:e,originalEvent:r}=this._eventsInProgress[t]
this._handlersById[e].isActive()||(delete this._eventsInProgress[t],l=i[e]||r,o[`${t}end`]=l)}for(const t in o)this._fireEvent(t,o[t])
const c=tn(this._eventsInProgress)
if(r&&(n||s)&&!c){this._updatingCamera=!0
const e=this._inertia._onMoveEnd(this._map.dragPan._inertiaOptions),i=t=>0!==t&&-this._bearingSnap<t&&t<this._bearingSnap
e?(i(e.bearing||this._map.getBearing())&&(e.bearing=0),e.freezeElevation=!0,this._map.easeTo(e,{originalEvent:l})):(this._map.fire(new t.Event("moveend",{originalEvent:l})),i(this._map.getBearing())&&this._map.resetNorth()),this._updatingCamera=!1}}_fireEvent(e,i){this._map.fire(new t.Event(e,i?{originalEvent:i}:{}))}_requestFrame(){return this._map.triggerRepaint(),this._map._renderTaskQueue.add((t=>{delete this._frameId,this.handleEvent(new en("renderFrame",{timeStamp:t})),this._applyChanges()}))}_triggerRenderFrame(){void 0===this._frameId&&(this._frameId=this._requestFrame())}}const sn={extend:function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n]
return t.extend(e,...r)},run(t){t()},logToElement(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"log"
const r=window.document.getElementById(i)
r&&(e&&(r.innerHTML=""),r.innerHTML+=`<br>${t}`)}}
class an extends t.Evented{constructor(e,i){super(),this._moving=!1,this._zooming=!1,this.transform=e,this._bearingSnap=i.bearingSnap,t.bindAll(["_renderFrameCallback"],this),this.on("moveend",(()=>{delete this._requestedCameraState}))}getCenter(){return new t.LngLat(this.transform.center.lng,this.transform.center.lat)}setCenter(t,e){return this.jumpTo({center:t},e)}panBy(e,i,r){return e=t.Point.convert(e).mult(-1),this.panTo(this.transform.center,t.extend({offset:e},i),r)}panTo(e,i,r){return this.easeTo(t.extend({center:e},i),r)}getZoom(){return this.transform.zoom}setZoom(t,e){return this.jumpTo({zoom:t},e),this}zoomTo(e,i,r){return this.easeTo(t.extend({zoom:e},i),r)}zoomIn(t,e){return this.zoomTo(this.getZoom()+1,t,e),this}zoomOut(t,e){return this.zoomTo(this.getZoom()-1,t,e),this}getBearing(){return this.transform.bearing}setBearing(t,e){return this.jumpTo({bearing:t},e),this}getPadding(){return this.transform.padding}setPadding(t,e){return this.jumpTo({padding:t},e),this}rotateTo(e,i,r){return this.easeTo(t.extend({bearing:e},i),r)}resetNorth(e,i){return this.rotateTo(0,t.extend({duration:1e3},e),i),this}resetNorthPitch(e,i){return this.easeTo(t.extend({bearing:0,pitch:0,duration:1e3},e),i),this}snapToNorth(t,e){return Math.abs(this.getBearing())<this._bearingSnap?this.resetNorth(t,e):this}getPitch(){return this.transform.pitch}setPitch(t,e){return this.jumpTo({pitch:t},e),this}cameraForBounds(t,e){t=L.convert(t)
const i=e&&e.bearing||0
return this._cameraForBoxAndBearing(t.getNorthWest(),t.getSouthEast(),i,e)}_cameraForBoxAndBearing(e,i,r,n){const s={top:0,bottom:0,right:0,left:0}
if("number"==typeof(n=t.extend({padding:s,offset:[0,0],maxZoom:this.transform.maxZoom},n)).padding){const t=n.padding
n.padding={top:t,bottom:t,right:t,left:t}}n.padding=t.extend(s,n.padding)
const a=this.transform,o=a.padding,l=a.project(t.LngLat.convert(e)),c=a.project(t.LngLat.convert(i)),h=l.rotate(-r*Math.PI/180),u=c.rotate(-r*Math.PI/180),d=new t.Point(Math.max(h.x,u.x),Math.max(h.y,u.y)),p=new t.Point(Math.min(h.x,u.x),Math.min(h.y,u.y)),f=d.sub(p),m=(a.width-(o.left+o.right+n.padding.left+n.padding.right))/f.x,g=(a.height-(o.top+o.bottom+n.padding.top+n.padding.bottom))/f.y
if(g<0||m<0)return void t.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset.")
const _=Math.min(a.scaleZoom(a.scale*Math.min(m,g)),n.maxZoom),y=t.Point.convert(n.offset),x=new t.Point((n.padding.left-n.padding.right)/2,(n.padding.top-n.padding.bottom)/2).rotate(r*Math.PI/180),v=y.add(x).mult(a.scale/a.zoomScale(_))
return{center:a.unproject(l.add(c).div(2).sub(v)),zoom:_,bearing:r}}fitBounds(t,e,i){return this._fitInternal(this.cameraForBounds(t,e),e,i)}fitScreenCoordinates(e,i,r,n,s){return this._fitInternal(this._cameraForBoxAndBearing(this.transform.pointLocation(t.Point.convert(e)),this.transform.pointLocation(t.Point.convert(i)),r,n),n,s)}_fitInternal(e,i,r){return e?(delete(i=t.extend(e,i)).padding,i.linear?this.easeTo(i,r):this.flyTo(i,r)):this}jumpTo(e,i){this.stop()
const r=this._getTransformForUpdate()
let n=!1,s=!1,a=!1
return"zoom"in e&&r.zoom!==+e.zoom&&(n=!0,r.zoom=+e.zoom),void 0!==e.center&&(r.center=t.LngLat.convert(e.center)),"bearing"in e&&r.bearing!==+e.bearing&&(s=!0,r.bearing=+e.bearing),"pitch"in e&&r.pitch!==+e.pitch&&(a=!0,r.pitch=+e.pitch),null==e.padding||r.isPaddingEqual(e.padding)||(r.padding=e.padding),this._applyUpdatedTransform(r),this.fire(new t.Event("movestart",i)).fire(new t.Event("move",i)),n&&this.fire(new t.Event("zoomstart",i)).fire(new t.Event("zoom",i)).fire(new t.Event("zoomend",i)),s&&this.fire(new t.Event("rotatestart",i)).fire(new t.Event("rotate",i)).fire(new t.Event("rotateend",i)),a&&this.fire(new t.Event("pitchstart",i)).fire(new t.Event("pitch",i)).fire(new t.Event("pitchend",i)),this.fire(new t.Event("moveend",i))}calculateCameraOptionsFromTo(e,i,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
const s=t.MercatorCoordinate.fromLngLat(e,i),a=t.MercatorCoordinate.fromLngLat(r,n),o=a.x-s.x,l=a.y-s.y,c=a.z-s.z,h=Math.hypot(o,l,c)
if(0===h)throw new Error("Can't calculate camera options with same From and To")
const u=Math.hypot(o,l),d=this.transform.scaleZoom(this.transform.cameraToCenterDistance/h/this.transform.tileSize),p=180*Math.atan2(o,-l)/Math.PI
let f=180*Math.acos(u/h)/Math.PI
return f=c<0?90-f:90+f,{center:a.toLngLat(),zoom:d,pitch:f,bearing:p}}easeTo(e,i){this._stop(!1,e.easeId),(!1===(e=t.extend({offset:[0,0],duration:500,easing:t.ease},e)).animate||!e.essential&&t.exported.prefersReducedMotion)&&(e.duration=0)
const r=this._getTransformForUpdate(),n=this.getZoom(),s=this.getBearing(),a=this.getPitch(),o=this.getPadding(),l="zoom"in e?+e.zoom:n,c="bearing"in e?this._normalizeBearing(e.bearing,s):s,h="pitch"in e?+e.pitch:a,u="padding"in e?e.padding:r.padding,d=t.Point.convert(e.offset)
let p=r.centerPoint.add(d)
const f=r.pointLocation(p),m=t.LngLat.convert(e.center||f)
this._normalizeCenter(m)
const g=r.project(f),_=r.project(m).sub(g),y=r.zoomScale(l-n)
let x,v
e.around&&(x=t.LngLat.convert(e.around),v=r.locationPoint(x))
const b={moving:this._moving,zooming:this._zooming,rotating:this._rotating,pitching:this._pitching}
return this._zooming=this._zooming||l!==n,this._rotating=this._rotating||s!==c,this._pitching=this._pitching||h!==a,this._padding=!r.isPaddingEqual(u),this._easeId=e.easeId,this._prepareEase(i,e.noMoveStart,b),this.terrain&&this._prepareElevation(m),this._ease((f=>{if(this._zooming&&(r.zoom=t.interpolate.number(n,l,f)),this._rotating&&(r.bearing=t.interpolate.number(s,c,f)),this._pitching&&(r.pitch=t.interpolate.number(a,h,f)),this._padding&&(r.interpolatePadding(o,u,f),p=r.centerPoint.add(d)),this.terrain&&!e.freezeElevation&&this._updateElevation(f),x)r.setLocationAtPoint(x,v)
else{const t=r.zoomScale(r.zoom-n),e=l>n?Math.min(2,y):Math.max(.5,y),i=Math.pow(e,1-f),s=r.unproject(g.add(_.mult(f*i)).mult(t))
r.setLocationAtPoint(r.renderWorldCopies?s.wrap():s,p)}this._applyUpdatedTransform(r),this._fireMoveEvents(i)}),(t=>{this.terrain&&this._finalizeElevation(),this._afterEase(i,t)}),e),this}_prepareEase(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this._moving=!0,i||r.moving||this.fire(new t.Event("movestart",e)),this._zooming&&!r.zooming&&this.fire(new t.Event("zoomstart",e)),this._rotating&&!r.rotating&&this.fire(new t.Event("rotatestart",e)),this._pitching&&!r.pitching&&this.fire(new t.Event("pitchstart",e))}_prepareElevation(t){this._elevationCenter=t,this._elevationStart=this.transform.elevation,this._elevationTarget=this.transform.getElevation(t,this.terrain),this.transform.freezeElevation=!0}_updateElevation(e){const i=this.transform.getElevation(this._elevationCenter,this.terrain)
if(e<1&&i!==this._elevationTarget){const t=this._elevationTarget-this._elevationStart
this._elevationStart+=e*(t-(i-(t*e+this._elevationStart))/(1-e)),this._elevationTarget=i}this.transform.elevation=t.interpolate.number(this._elevationStart,this._elevationTarget,e)}_finalizeElevation(){this.transform.freezeElevation=!1,this.transform.recalculateZoom(this.terrain)}_getTransformForUpdate(){return this.transformCameraUpdate?(this._requestedCameraState||(this._requestedCameraState=this.transform.clone()),this._requestedCameraState):this.transform}_applyUpdatedTransform(t){if(!this.transformCameraUpdate)return
const e=t.clone(),{center:i,zoom:r,pitch:n,bearing:s,elevation:a}=this.transformCameraUpdate(e)
i&&(e.center=i),void 0!==r&&(e.zoom=r),void 0!==n&&(e.pitch=n),void 0!==s&&(e.bearing=s),void 0!==a&&(e.elevation=a),this.transform.apply(e)}_fireMoveEvents(e){this.fire(new t.Event("move",e)),this._zooming&&this.fire(new t.Event("zoom",e)),this._rotating&&this.fire(new t.Event("rotate",e)),this._pitching&&this.fire(new t.Event("pitch",e))}_afterEase(e,i){if(this._easeId&&i&&this._easeId===i)return
delete this._easeId
const r=this._zooming,n=this._rotating,s=this._pitching
this._moving=!1,this._zooming=!1,this._rotating=!1,this._pitching=!1,this._padding=!1,r&&this.fire(new t.Event("zoomend",e)),n&&this.fire(new t.Event("rotateend",e)),s&&this.fire(new t.Event("pitchend",e)),this.fire(new t.Event("moveend",e))}flyTo(e,i){if(!e.essential&&t.exported.prefersReducedMotion){const r=t.pick(e,["center","zoom","bearing","pitch","around"])
return this.jumpTo(r,i)}this.stop(),e=t.extend({offset:[0,0],speed:1.2,curve:1.42,easing:t.ease},e)
const r=this._getTransformForUpdate(),n=this.getZoom(),s=this.getBearing(),a=this.getPitch(),o=this.getPadding(),l="zoom"in e?t.clamp(+e.zoom,r.minZoom,r.maxZoom):n,c="bearing"in e?this._normalizeBearing(e.bearing,s):s,h="pitch"in e?+e.pitch:a,u="padding"in e?e.padding:r.padding,d=r.zoomScale(l-n),p=t.Point.convert(e.offset)
let f=r.centerPoint.add(p)
const m=r.pointLocation(f),g=t.LngLat.convert(e.center||m)
this._normalizeCenter(g)
const _=r.project(m),y=r.project(g).sub(_)
let x=e.curve
const v=Math.max(r.width,r.height),b=v/d,w=y.mag()
if("minZoom"in e){const i=t.clamp(Math.min(e.minZoom,n,l),r.minZoom,r.maxZoom),s=v/r.zoomScale(i-n)
x=Math.sqrt(s/w*2)}const T=x*x
function S(t){const e=(b*b-v*v+(t?-1:1)*T*T*w*w)/(2*(t?b:v)*T*w)
return Math.log(Math.sqrt(e*e+1)-e)}function E(t){return(Math.exp(t)-Math.exp(-t))/2}function I(t){return(Math.exp(t)+Math.exp(-t))/2}const A=S(0)
let M=function(t){return I(A)/I(A+x*t)},C=function(t){return v*((I(A)*(E(e=A+x*t)/I(e))-E(A))/T)/w
var e},P=(S(1)-A)/x
if(Math.abs(w)<1e-6||!isFinite(P)){if(Math.abs(v-b)<1e-6)return this.easeTo(e,i)
const t=b<v?-1:1
P=Math.abs(Math.log(b/v))/x,C=function(){return 0},M=function(e){return Math.exp(t*x*e)}}return e.duration="duration"in e?+e.duration:1e3*P/("screenSpeed"in e?+e.screenSpeed/x:+e.speed),e.maxDuration&&e.duration>e.maxDuration&&(e.duration=0),this._zooming=!0,this._rotating=s!==c,this._pitching=h!==a,this._padding=!r.isPaddingEqual(u),this._prepareEase(i,!1),this.terrain&&this._prepareElevation(g),this._ease((d=>{const m=d*P,x=1/M(m)
r.zoom=1===d?l:n+r.scaleZoom(x),this._rotating&&(r.bearing=t.interpolate.number(s,c,d)),this._pitching&&(r.pitch=t.interpolate.number(a,h,d)),this._padding&&(r.interpolatePadding(o,u,d),f=r.centerPoint.add(p)),this.terrain&&!e.freezeElevation&&this._updateElevation(d)
const v=1===d?g:r.unproject(_.add(y.mult(C(m))).mult(x))
r.setLocationAtPoint(r.renderWorldCopies?v.wrap():v,f),this._applyUpdatedTransform(r),this._fireMoveEvents(i)}),(()=>{this.terrain&&this._finalizeElevation(),this._afterEase(i)}),e),this}isEasing(){return!!this._easeFrameId}stop(){return this._stop()}_stop(t,e){if(this._easeFrameId&&(this._cancelRenderFrame(this._easeFrameId),delete this._easeFrameId,delete this._onEaseFrame),this._onEaseEnd){const t=this._onEaseEnd
delete this._onEaseEnd,t.call(this,e)}if(!t){const t=this.handlers
t&&t.stop(!1)}return this}_ease(e,i,r){!1===r.animate||0===r.duration?(e(1),i()):(this._easeStart=t.exported.now(),this._easeOptions=r,this._onEaseFrame=e,this._onEaseEnd=i,this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback))}_renderFrameCallback(){const e=Math.min((t.exported.now()-this._easeStart)/this._easeOptions.duration,1)
this._onEaseFrame(this._easeOptions.easing(e)),e<1?this._easeFrameId=this._requestRenderFrame(this._renderFrameCallback):this.stop()}_normalizeBearing(e,i){e=t.wrap(e,-180,180)
const r=Math.abs(e-i)
return Math.abs(e-360-i)<r&&(e-=360),Math.abs(e+360-i)<r&&(e+=360),e}_normalizeCenter(t){const e=this.transform
if(!e.renderWorldCopies||e.lngRange)return
const i=t.lng-e.center.lng
t.lng+=i>180?-360:i<-180?360:0}queryTerrainElevation(e){return this.terrain?this.transform.getElevation(t.LngLat.convert(e),this.terrain)-this.transform.elevation:null}}class on{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=e,t.bindAll(["_toggleAttribution","_updateData","_updateCompact","_updateCompactMinimize"],this)}getDefaultPosition(){return"bottom-right"}onAdd(t){return this._map=t,this._compact=this.options&&this.options.compact,this._container=i.create("details","maplibregl-ctrl maplibregl-ctrl-attrib"),this._compactButton=i.create("summary","maplibregl-ctrl-attrib-button",this._container),this._compactButton.addEventListener("click",this._toggleAttribution),this._setElementTitle(this._compactButton,"ToggleAttribution"),this._innerContainer=i.create("div","maplibregl-ctrl-attrib-inner",this._container),this._updateAttributions(),this._updateCompact(),this._map.on("styledata",this._updateData),this._map.on("sourcedata",this._updateData),this._map.on("terrain",this._updateData),this._map.on("resize",this._updateCompact),this._map.on("drag",this._updateCompactMinimize),this._container}onRemove(){i.remove(this._container),this._map.off("styledata",this._updateData),this._map.off("sourcedata",this._updateData),this._map.off("terrain",this._updateData),this._map.off("resize",this._updateCompact),this._map.off("drag",this._updateCompactMinimize),this._map=void 0,this._compact=void 0,this._attribHTML=void 0}_setElementTitle(t,e){const i=this._map._getUIString(`AttributionControl.${e}`)
t.title=i,t.setAttribute("aria-label",i)}_toggleAttribution(){this._container.classList.contains("maplibregl-compact")&&(this._container.classList.contains("maplibregl-compact-show")?(this._container.setAttribute("open",""),this._container.classList.remove("maplibregl-compact-show")):(this._container.classList.add("maplibregl-compact-show"),this._container.removeAttribute("open")))}_updateData(t){!t||"metadata"!==t.sourceDataType&&"visibility"!==t.sourceDataType&&"style"!==t.dataType&&"terrain"!==t.type||this._updateAttributions()}_updateAttributions(){if(!this._map.style)return
let t=[]
if(this.options.customAttribution&&(Array.isArray(this.options.customAttribution)?t=t.concat(this.options.customAttribution.map((t=>"string"!=typeof t?"":t))):"string"==typeof this.options.customAttribution&&t.push(this.options.customAttribution)),this._map.style.stylesheet){const t=this._map.style.stylesheet
this.styleOwner=t.owner,this.styleId=t.id}const e=this._map.style.sourceCaches
for(const r in e){const i=e[r]
if(i.used||i.usedForTerrain){const e=i.getSource()
e.attribution&&t.indexOf(e.attribution)<0&&t.push(e.attribution)}}t=t.filter((t=>String(t).trim())),t.sort(((t,e)=>t.length-e.length)),t=t.filter(((e,i)=>{for(let r=i+1;r<t.length;r++)if(t[r].indexOf(e)>=0)return!1
return!0}))
const i=t.join(" | ")
i!==this._attribHTML&&(this._attribHTML=i,t.length?(this._innerContainer.innerHTML=i,this._container.classList.remove("maplibregl-attrib-empty")):this._container.classList.add("maplibregl-attrib-empty"),this._updateCompact(),this._editLink=null)}_updateCompact(){this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1===this._compact?this._container.setAttribute("open",""):this._container.classList.contains("maplibregl-compact")||this._container.classList.contains("maplibregl-attrib-empty")||(this._container.setAttribute("open",""),this._container.classList.add("maplibregl-compact","maplibregl-compact-show")):(this._container.setAttribute("open",""),this._container.classList.contains("maplibregl-compact")&&this._container.classList.remove("maplibregl-compact","maplibregl-compact-show"))}_updateCompactMinimize(){this._container.classList.contains("maplibregl-compact")&&this._container.classList.contains("maplibregl-compact-show")&&this._container.classList.remove("maplibregl-compact-show")}}class ln{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=e,t.bindAll(["_updateCompact"],this)}getDefaultPosition(){return"bottom-left"}onAdd(t){this._map=t,this._compact=this.options&&this.options.compact,this._container=i.create("div","maplibregl-ctrl")
const e=i.create("a","maplibregl-ctrl-logo")
return e.target="_blank",e.rel="noopener nofollow",e.href="https://maplibre.org/",e.setAttribute("aria-label",this._map._getUIString("LogoControl.Title")),e.setAttribute("rel","noopener nofollow"),this._container.appendChild(e),this._container.style.display="block",this._map.on("resize",this._updateCompact),this._updateCompact(),this._container}onRemove(){i.remove(this._container),this._map.off("resize",this._updateCompact),this._map=void 0,this._compact=void 0}_updateCompact(){const t=this._container.children
if(t.length){const e=t[0]
this._map.getCanvasContainer().offsetWidth<=640||this._compact?!1!==this._compact&&e.classList.add("maplibregl-compact"):e.classList.remove("maplibregl-compact")}}}class cn{constructor(){this._queue=[],this._id=0,this._cleared=!1,this._currentlyRunning=!1}add(t){const e=++this._id
return this._queue.push({callback:t,id:e,cancelled:!1}),e}remove(t){const e=this._currentlyRunning,i=e?this._queue.concat(e):this._queue
for(const r of i)if(r.id===t)return void(r.cancelled=!0)}run(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
if(this._currentlyRunning)throw new Error("Attempting to run(), but is already running.")
const e=this._currentlyRunning=this._queue
this._queue=[]
for(const i of e)if(!i.cancelled&&(i.callback(t),this._cleared))break
this._cleared=!1,this._currentlyRunning=!1}clear(){this._currentlyRunning&&(this._cleared=!0),this._queue=[]}}const hn={"AttributionControl.ToggleAttribution":"Toggle attribution","AttributionControl.MapFeedback":"Map feedback","FullscreenControl.Enter":"Enter fullscreen","FullscreenControl.Exit":"Exit fullscreen","GeolocateControl.FindMyLocation":"Find my location","GeolocateControl.LocationNotAvailable":"Location not available","LogoControl.Title":"Mapbox logo","NavigationControl.ResetBearing":"Reset bearing to north","NavigationControl.ZoomIn":"Zoom in","NavigationControl.ZoomOut":"Zoom out","ScaleControl.Feet":"ft","ScaleControl.Meters":"m","ScaleControl.Kilometers":"km","ScaleControl.Miles":"mi","ScaleControl.NauticalMiles":"nm","TerrainControl.enableTerrain":"Enable terrain","TerrainControl.disableTerrain":"Disable terrain"}
var un=t.createLayout([{name:"a_pos3d",type:"Int16",components:3}])
class dn extends t.Evented{constructor(t){super(),this.sourceCache=t,this._tiles={},this._renderableTilesKeys=[],this._sourceTileCache={},this.minzoom=0,this.maxzoom=22,this.tileSize=512,this.deltaZoom=1,t.usedForTerrain=!0,t.tileSize=this.tileSize*2**this.deltaZoom}destruct(){this.sourceCache.usedForTerrain=!1,this.sourceCache.tileSize=null}update(e,i){this.sourceCache.update(e,i),this._renderableTilesKeys=[]
const r={}
for(const n of e.coveringTiles({tileSize:this.tileSize,minzoom:this.minzoom,maxzoom:this.maxzoom,reparseOverscaled:!1,terrain:i}))r[n.key]=!0,this._renderableTilesKeys.push(n.key),this._tiles[n.key]||(n.posMatrix=new Float64Array(16),t.ortho(n.posMatrix,0,t.EXTENT,0,t.EXTENT,0,1),this._tiles[n.key]=new W(n,this.tileSize))
for(const t in this._tiles)r[t]||delete this._tiles[t]}freeRtt(t){for(const e in this._tiles){const i=this._tiles[e];(!t||i.tileID.equals(t)||i.tileID.isChildOf(t)||t.isChildOf(i.tileID))&&(i.rtt=[])}}getRenderableTiles(){return this._renderableTilesKeys.map((t=>this.getTileByID(t)))}getTileByID(t){return this._tiles[t]}getTerrainCoords(e){const i={}
for(const r of this._renderableTilesKeys){const n=this._tiles[r].tileID
if(n.canonical.equals(e.canonical)){const n=e.clone()
n.posMatrix=new Float64Array(16),t.ortho(n.posMatrix,0,t.EXTENT,0,t.EXTENT,0,1),i[r]=n}else if(n.canonical.isChildOf(e.canonical)){const s=e.clone()
s.posMatrix=new Float64Array(16)
const a=n.canonical.z-e.canonical.z,o=n.canonical.x-(n.canonical.x>>a<<a),l=n.canonical.y-(n.canonical.y>>a<<a),c=t.EXTENT>>a
t.ortho(s.posMatrix,0,c,0,c,0,1),t.translate(s.posMatrix,s.posMatrix,[-o*c,-l*c,0]),i[r]=s}else if(e.canonical.isChildOf(n.canonical)){const s=e.clone()
s.posMatrix=new Float64Array(16)
const a=e.canonical.z-n.canonical.z,o=e.canonical.x-(e.canonical.x>>a<<a),l=e.canonical.y-(e.canonical.y>>a<<a),c=t.EXTENT>>a
t.ortho(s.posMatrix,0,t.EXTENT,0,t.EXTENT,0,1),t.translate(s.posMatrix,s.posMatrix,[o*c,l*c,0]),t.scale(s.posMatrix,s.posMatrix,[1/2**a,1/2**a,0]),i[r]=s}}return i}getSourceTile(t,e){const i=this.sourceCache._source
let r=t.overscaledZ-this.deltaZoom
if(r>i.maxzoom&&(r=i.maxzoom),r<i.minzoom)return null
this._sourceTileCache[t.key]||(this._sourceTileCache[t.key]=t.scaledTo(r).key)
let n=this.sourceCache.getTileByID(this._sourceTileCache[t.key])
if((!n||!n.dem)&&e)for(;r>=i.minzoom&&(!n||!n.dem);)n=this.sourceCache.getTileByID(t.scaledTo(r--).key)
return n}tilesAfterTime(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now()
return Object.values(this._tiles).filter((e=>e.timeAdded>=t))}}class pn{constructor(t,e,i){this.painter=t,this.sourceCache=new dn(e),this.options=i,this.exaggeration="number"==typeof i.exaggeration?i.exaggeration:1,this.qualityFactor=2,this.meshSize=128,this._demMatrixCache={},this.coordsIndex=[],this._coordsTextureSize=1024}getDEMElevation(e,i,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.EXTENT
if(!(i>=0&&i<n&&r>=0&&r<n))return 0
let s=0
const a=this.getTerrainData(e)
if(a.tile&&a.tile.dem){const e=function(t,e,i){var r=e[0],n=e[1]
return t[0]=i[0]*r+i[4]*n+i[12],t[1]=i[1]*r+i[5]*n+i[13],t}([],[i/n*t.EXTENT,r/n*t.EXTENT],a.u_terrain_matrix),o=[e[0]*a.tile.dem.dim,e[1]*a.tile.dem.dim],l=[Math.floor(o[0]),Math.floor(o[1])],c=a.tile.dem.get(l[0],l[1]),h=a.tile.dem.get(l[0],l[1]+1),u=a.tile.dem.get(l[0]+1,l[1]),d=a.tile.dem.get(l[0]+1,l[1]+1)
s=t.interpolate.number(t.interpolate.number(c,h,o[0]-l[0]),t.interpolate.number(u,d,o[0]-l[0]),o[1]-l[1])}return s}getElevation(e,i,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.EXTENT
return this.getDEMElevation(e,i,r,n)*this.exaggeration}getTerrainData(e){if(!this._emptyDemTexture){const e=this.painter.context,i=new t.RGBAImage({width:1,height:1},new Uint8Array(4))
this._emptyDepthTexture=new v(e,i,e.gl.RGBA,{premultiply:!1}),this._emptyDemUnpack=[0,0,0,0],this._emptyDemTexture=new v(e,new t.RGBAImage({width:1,height:1}),e.gl.RGBA,{premultiply:!1}),this._emptyDemTexture.bind(e.gl.NEAREST,e.gl.CLAMP_TO_EDGE),this._emptyDemMatrix=t.identity([])}const i=this.sourceCache.getSourceTile(e,!0)
if(i&&i.dem&&(!i.demTexture||i.needsTerrainPrepare)){const t=this.painter.context
i.demTexture=this.painter.getTileTexture(i.dem.stride),i.demTexture?i.demTexture.update(i.dem.getPixels(),{premultiply:!1}):i.demTexture=new v(t,i.dem.getPixels(),t.gl.RGBA,{premultiply:!1}),i.demTexture.bind(t.gl.NEAREST,t.gl.CLAMP_TO_EDGE),i.needsTerrainPrepare=!1}const r=i&&i+i.tileID.key+e.key
if(r&&!this._demMatrixCache[r]){const r=this.sourceCache.sourceCache._source.maxzoom
let n=e.canonical.z-i.tileID.canonical.z
e.overscaledZ>e.canonical.z&&(e.canonical.z>=r?n=e.canonical.z-r:t.warnOnce("cannot calculate elevation if elevation maxzoom > source.maxzoom"))
const s=e.canonical.x-(e.canonical.x>>n<<n),a=e.canonical.y-(e.canonical.y>>n<<n),o=t.fromScaling(new Float64Array(16),[1/(t.EXTENT<<n),1/(t.EXTENT<<n),0])
t.translate(o,o,[s*t.EXTENT,a*t.EXTENT,0]),this._demMatrixCache[e.key]={matrix:o,coord:e}}return{u_depth:2,u_terrain:3,u_terrain_dim:i&&i.dem&&i.dem.dim||1,u_terrain_matrix:r?this._demMatrixCache[e.key].matrix:this._emptyDemMatrix,u_terrain_unpack:i&&i.dem&&i.dem.getUnpackVector()||this._emptyDemUnpack,u_terrain_exaggeration:this.exaggeration,texture:(i&&i.demTexture||this._emptyDemTexture).texture,depthTexture:(this._fboDepthTexture||this._emptyDepthTexture).texture,tile:i}}getFramebuffer(t){const e=this.painter,i=e.width/devicePixelRatio,r=e.height/devicePixelRatio
return!this._fbo||this._fbo.width===i&&this._fbo.height===r||(this._fbo.destroy(),this._fboCoordsTexture.destroy(),this._fboDepthTexture.destroy(),delete this._fbo,delete this._fboDepthTexture,delete this._fboCoordsTexture),this._fboCoordsTexture||(this._fboCoordsTexture=new v(e.context,{width:i,height:r,data:null},e.context.gl.RGBA,{premultiply:!1}),this._fboCoordsTexture.bind(e.context.gl.NEAREST,e.context.gl.CLAMP_TO_EDGE)),this._fboDepthTexture||(this._fboDepthTexture=new v(e.context,{width:i,height:r,data:null},e.context.gl.RGBA,{premultiply:!1}),this._fboDepthTexture.bind(e.context.gl.NEAREST,e.context.gl.CLAMP_TO_EDGE)),this._fbo||(this._fbo=e.context.createFramebuffer(i,r,!0,!1),this._fbo.depthAttachment.set(e.context.createRenderbuffer(e.context.gl.DEPTH_COMPONENT16,i,r))),this._fbo.colorAttachment.set("coords"===t?this._fboCoordsTexture.texture:this._fboDepthTexture.texture),this._fbo}getCoordsTexture(){const e=this.painter.context
if(this._coordsTexture)return this._coordsTexture
const i=new Uint8Array(this._coordsTextureSize*this._coordsTextureSize*4)
for(let t=0,s=0;t<this._coordsTextureSize;t++)for(let e=0;e<this._coordsTextureSize;e++,s+=4)i[s+0]=255&e,i[s+1]=255&t,i[s+2]=e>>8<<4|t>>8,i[s+3]=0
const r=new t.RGBAImage({width:this._coordsTextureSize,height:this._coordsTextureSize},new Uint8Array(i.buffer)),n=new v(e,r,e.gl.RGBA,{premultiply:!1})
return n.bind(e.gl.NEAREST,e.gl.CLAMP_TO_EDGE),this._coordsTexture=n,n}pointCoordinate(e){const i=new Uint8Array(4),r=this.painter.context,n=r.gl
r.bindFramebuffer.set(this.getFramebuffer("coords").framebuffer),n.readPixels(e.x,this.painter.height/devicePixelRatio-e.y-1,1,1,n.RGBA,n.UNSIGNED_BYTE,i),r.bindFramebuffer.set(null)
const s=i[0]+(i[2]>>4<<8),a=i[1]+((15&i[2])<<8),o=this.coordsIndex[255-i[3]],l=o&&this.sourceCache.getTileByID(o)
if(!l)return null
const c=this._coordsTextureSize,h=(1<<l.tileID.canonical.z)*c
return new t.MercatorCoordinate((l.tileID.canonical.x*c+s)/h,(l.tileID.canonical.y*c+a)/h,this.getElevation(l.tileID,s,a,c))}getTerrainMesh(){if(this._mesh)return this._mesh
const e=this.painter.context,i=new t.Pos3dArray,r=new t.TriangleIndexArray,n=this.meshSize,s=t.EXTENT/n,a=n*n
for(let t=0;t<=n;t++)for(let e=0;e<=n;e++)i.emplaceBack(e*s,t*s,0)
for(let t=0;t<a;t+=n+1)for(let e=0;e<n;e++)r.emplaceBack(e+t,n+e+t+1,n+e+t+2),r.emplaceBack(e+t,n+e+t+2,e+t+1)
const o=i.length,l=o+2*(n+1)
for(const u of[0,1])for(let e=0;e<=n;e++)for(const r of[0,1])i.emplaceBack(e*s,u*t.EXTENT,r)
for(let t=0;t<2*n;t+=2)r.emplaceBack(l+t,l+t+1,l+t+3),r.emplaceBack(l+t,l+t+3,l+t+2),r.emplaceBack(o+t,o+t+3,o+t+1),r.emplaceBack(o+t,o+t+2,o+t+3)
const c=i.length,h=c+2*(n+1)
for(const u of[0,1])for(let e=0;e<=n;e++)for(const r of[0,1])i.emplaceBack(u*t.EXTENT,e*s,r)
for(let t=0;t<2*n;t+=2)r.emplaceBack(c+t,c+t+1,c+t+3),r.emplaceBack(c+t,c+t+3,c+t+2),r.emplaceBack(h+t,h+t+3,h+t+1),r.emplaceBack(h+t,h+t+2,h+t+3)
return this._mesh={indexBuffer:e.createIndexBuffer(r),vertexBuffer:e.createVertexBuffer(i,un.members),segments:t.SegmentVector.simpleSegment(0,0,i.length,r.length)},this._mesh}getMeshFrameDelta(e){return 2*Math.PI*t.earthRadius/Math.pow(2,e)/5}getMinMaxElevation(t){const e=this.getTerrainData(t).tile,i={minElevation:null,maxElevation:null}
return e&&e.dem&&(i.minElevation=e.dem.min*this.exaggeration,i.maxElevation=e.dem.max*this.exaggeration),i}}class fn{constructor(t,e,i){this._context=t,this._size=e,this._tileSize=i,this._objects=[],this._recentlyUsed=[],this._stamp=0}destruct(){for(const t of this._objects)t.texture.destroy(),t.fbo.destroy()}_createObject(t){const e=this._context.createFramebuffer(this._tileSize,this._tileSize,!0,!0),i=new v(this._context,{width:this._tileSize,height:this._tileSize,data:null},this._context.gl.RGBA)
return i.bind(this._context.gl.LINEAR,this._context.gl.CLAMP_TO_EDGE),e.depthAttachment.set(this._context.createRenderbuffer(this._context.gl.DEPTH_STENCIL,this._tileSize,this._tileSize)),e.colorAttachment.set(i.texture),{id:t,fbo:e,texture:i,stamp:-1,inUse:!1}}getObjectForId(t){return this._objects[t]}useObject(t){t.inUse=!0,this._recentlyUsed=this._recentlyUsed.filter((e=>t.id!==e)),this._recentlyUsed.push(t.id)}stampObject(t){t.stamp=++this._stamp}getOrCreateFreeObject(){for(const e of this._recentlyUsed)if(!this._objects[e].inUse)return this._objects[e]
if(this._objects.length>=this._size)throw new Error("No free RenderPool available, call freeAllObjects() required!")
const t=this._createObject(this._objects.length)
return this._objects.push(t),t}freeObject(t){t.inUse=!1}freeAllObjects(){for(const t of this._objects)this.freeObject(t)}isFull(){return!(this._objects.length<this._size)&&!1===this._objects.some((t=>!t.inUse))}}const mn={background:!0,fill:!0,line:!0,raster:!0,hillshade:!0}
class gn{constructor(t,e){this.painter=t,this.terrain=e,this.pool=new fn(t.context,30,e.sourceCache.tileSize*e.qualityFactor)}destruct(){this.pool.destruct()}getTexture(t){return this.pool.getObjectForId(t.rtt[this._stacks.length-1].id).texture}prepareForRender(t,e){this._stacks=[],this._prevType=null,this._rttTiles=[],this._renderableTiles=this.terrain.sourceCache.getRenderableTiles(),this._renderableLayerIds=t._order.filter((i=>!t._layers[i].isHidden(e))),this._coordsDescendingInv={}
for(const i in t.sourceCaches){this._coordsDescendingInv[i]={}
const e=t.sourceCaches[i].getVisibleCoordinates()
for(const t of e){const e=this.terrain.sourceCache.getTerrainCoords(t)
for(const t in e)this._coordsDescendingInv[i][t]||(this._coordsDescendingInv[i][t]=[]),this._coordsDescendingInv[i][t].push(e[t])}}this._coordsDescendingInvStr={}
for(const i of t._order){const e=t._layers[i],r=e.source
if(mn[e.type]&&!this._coordsDescendingInvStr[r]){this._coordsDescendingInvStr[r]={}
for(const t in this._coordsDescendingInv[r])this._coordsDescendingInvStr[r][t]=this._coordsDescendingInv[r][t].map((t=>t.key)).sort().join()}}for(const i of this._renderableTiles)for(const t in this._coordsDescendingInvStr){const e=this._coordsDescendingInvStr[t][i.tileID.key]
e&&e!==i.rttCoords[t]&&(i.rtt=[])}}renderLayer(e){if(e.isHidden(this.painter.transform.zoom))return!1
const i=e.type,r=this.painter,n=this._renderableLayerIds[this._renderableLayerIds.length-1]===e.id
if(mn[i]&&(this._prevType&&mn[this._prevType]||this._stacks.push([]),this._prevType=i,this._stacks[this._stacks.length-1].push(e.id),!n))return!0
if(mn[this._prevType]||mn[i]&&n){this._prevType=i
const e=this._stacks.length-1,n=this._stacks[e]||[]
for(const i of this._renderableTiles){if(this.pool.isFull()&&(tr(this.painter,this.terrain,this._rttTiles),this._rttTiles=[],this.pool.freeAllObjects()),this._rttTiles.push(i),i.rtt[e]){const t=this.pool.getObjectForId(i.rtt[e].id)
if(t.stamp===i.rtt[e].stamp){this.pool.useObject(t)
continue}}const s=this.pool.getOrCreateFreeObject()
this.pool.useObject(s),this.pool.stampObject(s),i.rtt[e]={id:s.id,stamp:s.stamp},r.context.bindFramebuffer.set(s.fbo.framebuffer),r.context.clear({color:t.Color.transparent,stencil:0}),r.currentStencilSource=void 0
for(let t=0;t<n.length;t++){const e=r.style._layers[n[t]],a=e.source?this._coordsDescendingInv[e.source][i.tileID.key]:[i.tileID]
r.context.viewport.set([0,0,s.fbo.width,s.fbo.height]),r._renderTileClippingMasks(e,a),r.renderLayer(r,r.style.sourceCaches[e.source],e,a),e.source&&(i.rttCoords[e.source]=this._coordsDescendingInvStr[e.source][i.tileID.key])}}return tr(this.painter,this.terrain,this._rttTiles),this._rttTiles=[],this.pool.freeAllObjects(),mn[i]}return!1}}const _n=e,yn={center:[0,0],zoom:0,bearing:0,pitch:0,minZoom:-2,maxZoom:22,minPitch:0,maxPitch:60,interactive:!0,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,cooperativeGestures:void 0,bearingSnap:7,clickTolerance:3,pitchWithRotate:!0,hash:!1,attributionControl:!0,maplibreLogo:!1,failIfMajorPerformanceCaveat:!1,preserveDrawingBuffer:!1,trackResize:!0,renderWorldCopies:!0,refreshExpiredTiles:!0,maxTileCacheSize:null,localIdeographFontFamily:"sans-serif",transformRequest:null,transformCameraUpdate:null,fadeDuration:300,crossSourceCollisions:!0,validateStyle:!0},xn=t=>{t.touchstart=t.dragStart,t.touchmoveWindow=t.dragMove,t.touchend=t.dragEnd},vn={showCompass:!0,showZoom:!0,visualizePitch:!1}
class bn{constructor(e,r){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
this._clickTolerance=10
const s=e.dragRotate._mouseRotate.getClickTolerance(),a=e.dragRotate._mousePitch.getClickTolerance()
this.element=r,this.mouseRotate=kr({clickTolerance:s,enable:!0}),this.touchRotate=(t=>{let{enable:e,clickTolerance:i,bearingDegreesPerPixelMoved:r=.8}=t
const n=new Pr
return new Ar({clickTolerance:i,move:(t,e)=>({bearingDelta:(e.x-t.x)*r}),moveStateManager:n,enable:e,assignEvents:xn})})({clickTolerance:s,enable:!0}),this.map=e,n&&(this.mousePitch=Dr({clickTolerance:a,enable:!0}),this.touchPitch=(t=>{let{enable:e,clickTolerance:i,pitchDegreesPerPixelMoved:r=-.5}=t
const n=new Pr
return new Ar({clickTolerance:i,move:(t,e)=>({pitchDelta:(e.y-t.y)*r}),moveStateManager:n,enable:e,assignEvents:xn})})({clickTolerance:a,enable:!0})),t.bindAll(["mousedown","mousemove","mouseup","touchstart","touchmove","touchend","reset"],this),i.addEventListener(r,"mousedown",this.mousedown),i.addEventListener(r,"touchstart",this.touchstart,{passive:!1}),i.addEventListener(r,"touchcancel",this.reset)}startMouse(t,e){this.mouseRotate.dragStart(t,e),this.mousePitch&&this.mousePitch.dragStart(t,e),i.disableDrag()}startTouch(t,e){this.touchRotate.dragStart(t,e),this.touchPitch&&this.touchPitch.dragStart(t,e),i.disableDrag()}moveMouse(t,e){const i=this.map,{bearingDelta:r}=this.mouseRotate.dragMove(t,e)||{}
if(r&&i.setBearing(i.getBearing()+r),this.mousePitch){const{pitchDelta:r}=this.mousePitch.dragMove(t,e)||{}
r&&i.setPitch(i.getPitch()+r)}}moveTouch(t,e){const i=this.map,{bearingDelta:r}=this.touchRotate.dragMove(t,e)||{}
if(r&&i.setBearing(i.getBearing()+r),this.touchPitch){const{pitchDelta:r}=this.touchPitch.dragMove(t,e)||{}
r&&i.setPitch(i.getPitch()+r)}}off(){const t=this.element
i.removeEventListener(t,"mousedown",this.mousedown),i.removeEventListener(t,"touchstart",this.touchstart,{passive:!1}),i.removeEventListener(window,"touchmove",this.touchmove,{passive:!1}),i.removeEventListener(window,"touchend",this.touchend),i.removeEventListener(t,"touchcancel",this.reset),this.offTemp()}offTemp(){i.enableDrag(),i.removeEventListener(window,"mousemove",this.mousemove),i.removeEventListener(window,"mouseup",this.mouseup),i.removeEventListener(window,"touchmove",this.touchmove,{passive:!1}),i.removeEventListener(window,"touchend",this.touchend)}mousedown(e){this.startMouse(t.extend({},e,{ctrlKey:!0,preventDefault:()=>e.preventDefault()}),i.mousePos(this.element,e)),i.addEventListener(window,"mousemove",this.mousemove),i.addEventListener(window,"mouseup",this.mouseup)}mousemove(t){this.moveMouse(t,i.mousePos(this.element,t))}mouseup(t){this.mouseRotate.dragEnd(t),this.mousePitch&&this.mousePitch.dragEnd(t),this.offTemp()}touchstart(t){1!==t.targetTouches.length?this.reset():(this._startPos=this._lastPos=i.touchPos(this.element,t.targetTouches)[0],this.startTouch(t,this._startPos),i.addEventListener(window,"touchmove",this.touchmove,{passive:!1}),i.addEventListener(window,"touchend",this.touchend))}touchmove(t){1!==t.targetTouches.length?this.reset():(this._lastPos=i.touchPos(this.element,t.targetTouches)[0],this.moveTouch(t,this._lastPos))}touchend(t){0===t.targetTouches.length&&this._startPos&&this._lastPos&&this._startPos.dist(this._lastPos)<this._clickTolerance&&this.element.click(),delete this._startPos,delete this._lastPos,this.offTemp()}reset(){this.mouseRotate.reset(),this.mousePitch&&this.mousePitch.reset(),this.touchRotate.reset(),this.touchPitch&&this.touchPitch.reset(),delete this._startPos,delete this._lastPos,this.offTemp()}}let wn
function Tn(e,i,r){if(e=new t.LngLat(e.lng,e.lat),i){const n=new t.LngLat(e.lng-360,e.lat),s=new t.LngLat(e.lng+360,e.lat),a=r.locationPoint(e).distSqr(i)
r.locationPoint(n).distSqr(i)<a?e=n:r.locationPoint(s).distSqr(i)<a&&(e=s)}for(;Math.abs(e.lng-r.center.lng)>180;){const t=r.locationPoint(e)
if(t.x>=0&&t.y>=0&&t.x<=r.width&&t.y<=r.height)break
e.lng>r.center.lng?e.lng-=360:e.lng+=360}return e}const Sn={center:"translate(-50%,-50%)",top:"translate(-50%,0)","top-left":"translate(0,0)","top-right":"translate(-100%,0)",bottom:"translate(-50%,-100%)","bottom-left":"translate(0,-100%)","bottom-right":"translate(-100%,-100%)",left:"translate(0,-50%)",right:"translate(-100%,-50%)"}
function En(t,e,i){const r=t.classList
for(const n in Sn)r.remove(`maplibregl-${i}-anchor-${n}`)
r.add(`maplibregl-${i}-anchor-${e}`)}class In extends t.Evented{constructor(e,r){if(super(),(e instanceof HTMLElement||r)&&(e=t.extend({element:e},r)),t.bindAll(["_update","_onMove","_onUp","_addDragHandler","_onMapClick","_onKeyPress"],this),this._anchor=e&&e.anchor||"center",this._color=e&&e.color||"#3FB1CE",this._scale=e&&e.scale||1,this._draggable=e&&e.draggable||!1,this._clickTolerance=e&&e.clickTolerance||0,this._isDragging=!1,this._state="inactive",this._rotation=e&&e.rotation||0,this._rotationAlignment=e&&e.rotationAlignment||"auto",this._pitchAlignment=e&&e.pitchAlignment&&"auto"!==e.pitchAlignment?e.pitchAlignment:this._rotationAlignment,e&&e.element)this._element=e.element,this._offset=t.Point.convert(e&&e.offset||[0,0])
else{this._defaultMarker=!0,this._element=i.create("div"),this._element.setAttribute("aria-label","Map marker")
const r=i.createNS("http://www.w3.org/2000/svg","svg"),n=41,s=27
r.setAttributeNS(null,"display","block"),r.setAttributeNS(null,"height",`${n}px`),r.setAttributeNS(null,"width",`${s}px`),r.setAttributeNS(null,"viewBox",`0 0 ${s} ${n}`)
const a=i.createNS("http://www.w3.org/2000/svg","g")
a.setAttributeNS(null,"stroke","none"),a.setAttributeNS(null,"stroke-width","1"),a.setAttributeNS(null,"fill","none"),a.setAttributeNS(null,"fill-rule","evenodd")
const o=i.createNS("http://www.w3.org/2000/svg","g")
o.setAttributeNS(null,"fill-rule","nonzero")
const l=i.createNS("http://www.w3.org/2000/svg","g")
l.setAttributeNS(null,"transform","translate(3.0, 29.0)"),l.setAttributeNS(null,"fill","#000000")
const c=[{rx:"10.5",ry:"5.25002273"},{rx:"10.5",ry:"5.25002273"},{rx:"9.5",ry:"4.77275007"},{rx:"8.5",ry:"4.29549936"},{rx:"7.5",ry:"3.81822308"},{rx:"6.5",ry:"3.34094679"},{rx:"5.5",ry:"2.86367051"},{rx:"4.5",ry:"2.38636864"}]
for(const t of c){const e=i.createNS("http://www.w3.org/2000/svg","ellipse")
e.setAttributeNS(null,"opacity","0.04"),e.setAttributeNS(null,"cx","10.5"),e.setAttributeNS(null,"cy","5.80029008"),e.setAttributeNS(null,"rx",t.rx),e.setAttributeNS(null,"ry",t.ry),l.appendChild(e)}const h=i.createNS("http://www.w3.org/2000/svg","g")
h.setAttributeNS(null,"fill",this._color)
const u=i.createNS("http://www.w3.org/2000/svg","path")
u.setAttributeNS(null,"d","M27,13.5 C27,19.074644 20.250001,27.000002 14.75,34.500002 C14.016665,35.500004 12.983335,35.500004 12.25,34.500002 C6.7499993,27.000002 0,19.222562 0,13.5 C0,6.0441559 6.0441559,0 13.5,0 C20.955844,0 27,6.0441559 27,13.5 Z"),h.appendChild(u)
const d=i.createNS("http://www.w3.org/2000/svg","g")
d.setAttributeNS(null,"opacity","0.25"),d.setAttributeNS(null,"fill","#000000")
const p=i.createNS("http://www.w3.org/2000/svg","path")
p.setAttributeNS(null,"d","M13.5,0 C6.0441559,0 0,6.0441559 0,13.5 C0,19.222562 6.7499993,27 12.25,34.5 C13,35.522727 14.016664,35.500004 14.75,34.5 C20.250001,27 27,19.074644 27,13.5 C27,6.0441559 20.955844,0 13.5,0 Z M13.5,1 C20.415404,1 26,6.584596 26,13.5 C26,15.898657 24.495584,19.181431 22.220703,22.738281 C19.945823,26.295132 16.705119,30.142167 13.943359,33.908203 C13.743445,34.180814 13.612715,34.322738 13.5,34.441406 C13.387285,34.322738 13.256555,34.180814 13.056641,33.908203 C10.284481,30.127985 7.4148684,26.314159 5.015625,22.773438 C2.6163816,19.232715 1,15.953538 1,13.5 C1,6.584596 6.584596,1 13.5,1 Z"),d.appendChild(p)
const f=i.createNS("http://www.w3.org/2000/svg","g")
f.setAttributeNS(null,"transform","translate(6.0, 7.0)"),f.setAttributeNS(null,"fill","#FFFFFF")
const m=i.createNS("http://www.w3.org/2000/svg","g")
m.setAttributeNS(null,"transform","translate(8.0, 8.0)")
const g=i.createNS("http://www.w3.org/2000/svg","circle")
g.setAttributeNS(null,"fill","#000000"),g.setAttributeNS(null,"opacity","0.25"),g.setAttributeNS(null,"cx","5.5"),g.setAttributeNS(null,"cy","5.5"),g.setAttributeNS(null,"r","5.4999962")
const _=i.createNS("http://www.w3.org/2000/svg","circle")
_.setAttributeNS(null,"fill","#FFFFFF"),_.setAttributeNS(null,"cx","5.5"),_.setAttributeNS(null,"cy","5.5"),_.setAttributeNS(null,"r","5.4999962"),m.appendChild(g),m.appendChild(_),o.appendChild(l),o.appendChild(h),o.appendChild(d),o.appendChild(f),o.appendChild(m),r.appendChild(o),r.setAttributeNS(null,"height",n*this._scale+"px"),r.setAttributeNS(null,"width",s*this._scale+"px"),this._element.appendChild(r),this._offset=t.Point.convert(e&&e.offset||[0,-14])}this._element.classList.add("maplibregl-marker"),this._element.addEventListener("dragstart",(t=>{t.preventDefault()})),this._element.addEventListener("mousedown",(t=>{t.preventDefault()})),En(this._element,this._anchor,"marker"),this._popup=null}addTo(t){return this.remove(),this._map=t,t.getCanvasContainer().appendChild(this._element),t.on("move",this._update),t.on("moveend",this._update),this.setDraggable(this._draggable),this._update(),this._map.on("click",this._onMapClick),this}remove(){return this._opacityTimeout&&(clearTimeout(this._opacityTimeout),delete this._opacityTimeout),this._map&&(this._map.off("click",this._onMapClick),this._map.off("move",this._update),this._map.off("moveend",this._update),this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler),this._map.off("mouseup",this._onUp),this._map.off("touchend",this._onUp),this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),delete this._map),i.remove(this._element),this._popup&&this._popup.remove(),this}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._popup&&this._popup.setLngLat(this._lngLat),this._update(),this}getElement(){return this._element}setPopup(t){if(this._popup&&(this._popup.remove(),this._popup=null,this._element.removeEventListener("keypress",this._onKeyPress),this._originalTabIndex||this._element.removeAttribute("tabindex")),t){if(!("offset"in t.options)){const e=38.1,i=13.5,r=Math.sqrt(Math.pow(i,2)/2)
t.options.offset=this._defaultMarker?{top:[0,0],"top-left":[0,0],"top-right":[0,0],bottom:[0,-e],"bottom-left":[r,-1*(e-i+r)],"bottom-right":[-r,-1*(e-i+r)],left:[i,-1*(e-i)],right:[-i,-1*(e-i)]}:this._offset}this._popup=t,this._lngLat&&this._popup.setLngLat(this._lngLat),this._originalTabIndex=this._element.getAttribute("tabindex"),this._originalTabIndex||this._element.setAttribute("tabindex","0"),this._element.addEventListener("keypress",this._onKeyPress)}return this}_onKeyPress(t){const e=t.code,i=t.charCode||t.keyCode
"Space"!==e&&"Enter"!==e&&32!==i&&13!==i||this.togglePopup()}_onMapClick(t){const e=t.originalEvent.target,i=this._element
this._popup&&(e===i||i.contains(e))&&this.togglePopup()}getPopup(){return this._popup}togglePopup(){const t=this._popup
return t?(t.isOpen()?t.remove():t.addTo(this._map),this):this}_update(t){if(!this._map)return
this._map.transform.renderWorldCopies&&(this._lngLat=Tn(this._lngLat,this._pos,this._map.transform)),this._pos=this._map.project(this._lngLat)._add(this._offset)
let e=""
"viewport"===this._rotationAlignment||"auto"===this._rotationAlignment?e=`rotateZ(${this._rotation}deg)`:"map"===this._rotationAlignment&&(e=`rotateZ(${this._rotation-this._map.getBearing()}deg)`)
let r=""
"viewport"===this._pitchAlignment||"auto"===this._pitchAlignment?r="rotateX(0deg)":"map"===this._pitchAlignment&&(r=`rotateX(${this._map.getPitch()}deg)`),t&&"moveend"!==t.type||(this._pos=this._pos.round()),i.setTransform(this._element,`${Sn[this._anchor]} translate(${this._pos.x}px, ${this._pos.y}px) ${r} ${e}`),this._map.terrain&&!this._opacityTimeout&&(this._opacityTimeout=setTimeout((()=>{const t=this._map.unproject(this._pos),e=40075016.686*Math.abs(Math.cos(this._lngLat.lat*Math.PI/180))/Math.pow(2,this._map.transform.tileZoom+8)
this._element.style.opacity=t.distanceTo(this._lngLat)>20*e?"0.2":"1.0",this._opacityTimeout=null}),100))}getOffset(){return this._offset}setOffset(e){return this._offset=t.Point.convert(e),this._update(),this}_onMove(e){if(!this._isDragging){const t=this._clickTolerance||this._map._clickTolerance
this._isDragging=e.point.dist(this._pointerdownPos)>=t}this._isDragging&&(this._pos=e.point.sub(this._positionDelta),this._lngLat=this._map.unproject(this._pos),this.setLngLat(this._lngLat),this._element.style.pointerEvents="none","pending"===this._state&&(this._state="active",this.fire(new t.Event("dragstart"))),this.fire(new t.Event("drag")))}_onUp(){this._element.style.pointerEvents="auto",this._positionDelta=null,this._pointerdownPos=null,this._isDragging=!1,this._map.off("mousemove",this._onMove),this._map.off("touchmove",this._onMove),"active"===this._state&&this.fire(new t.Event("dragend")),this._state="inactive"}_addDragHandler(t){this._element.contains(t.originalEvent.target)&&(t.preventDefault(),this._positionDelta=t.point.sub(this._pos).add(this._offset),this._pointerdownPos=t.point,this._state="pending",this._map.on("mousemove",this._onMove),this._map.on("touchmove",this._onMove),this._map.once("mouseup",this._onUp),this._map.once("touchend",this._onUp))}setDraggable(t){return this._draggable=!!t,this._map&&(t?(this._map.on("mousedown",this._addDragHandler),this._map.on("touchstart",this._addDragHandler)):(this._map.off("mousedown",this._addDragHandler),this._map.off("touchstart",this._addDragHandler))),this}isDraggable(){return this._draggable}setRotation(t){return this._rotation=t||0,this._update(),this}getRotation(){return this._rotation}setRotationAlignment(t){return this._rotationAlignment=t||"auto",this._update(),this}getRotationAlignment(){return this._rotationAlignment}setPitchAlignment(t){return this._pitchAlignment=t&&"auto"!==t?t:this._rotationAlignment,this._update(),this}getPitchAlignment(){return this._pitchAlignment}}const An={positionOptions:{enableHighAccuracy:!1,maximumAge:0,timeout:6e3},fitBoundsOptions:{maxZoom:15},trackUserLocation:!1,showAccuracyCircle:!0,showUserLocation:!0}
let Mn=0,Cn=!1
const Pn={maxWidth:100,unit:"metric"}
function zn(t,e,i){const r=i&&i.maxWidth||100,n=t._container.clientHeight/2,s=t.unproject([0,n]),a=t.unproject([r,n]),o=s.distanceTo(a)
if(i&&"imperial"===i.unit){const i=3.2808*o
i>5280?kn(e,r,i/5280,t._getUIString("ScaleControl.Miles")):kn(e,r,i,t._getUIString("ScaleControl.Feet"))}else i&&"nautical"===i.unit?kn(e,r,o/1852,t._getUIString("ScaleControl.NauticalMiles")):o>=1e3?kn(e,r,o/1e3,t._getUIString("ScaleControl.Kilometers")):kn(e,r,o,t._getUIString("ScaleControl.Meters"))}function kn(t,e,i,r){const n=function(t){const e=Math.pow(10,`${Math.floor(t)}`.length-1)
let i=t/e
return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:i>=1?1:function(t){const e=Math.pow(10,Math.ceil(-Math.log(t)/Math.LN10))
return Math.round(t*e)/e}(i),e*i}(i)
t.style.width=e*(n/i)+"px",t.innerHTML=`${n}&nbsp;${r}`}const Dn={closeButton:!0,closeOnClick:!0,focusAfterOpen:!0,className:"",maxWidth:"240px"},Ln=["a[href]","[tabindex]:not([tabindex='-1'])","[contenteditable]:not([contenteditable='false'])","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].join(", ")
function Bn(e){if(e){if("number"==typeof e){const i=Math.round(Math.sqrt(.5*Math.pow(e,2)))
return{center:new t.Point(0,0),top:new t.Point(0,e),"top-left":new t.Point(i,i),"top-right":new t.Point(-i,i),bottom:new t.Point(0,-e),"bottom-left":new t.Point(i,-i),"bottom-right":new t.Point(-i,-i),left:new t.Point(e,0),right:new t.Point(-e,0)}}if(e instanceof t.Point||Array.isArray(e)){const i=t.Point.convert(e)
return{center:i,top:i,"top-left":i,"top-right":i,bottom:i,"bottom-left":i,"bottom-right":i,left:i,right:i}}return{center:t.Point.convert(e.center||[0,0]),top:t.Point.convert(e.top||[0,0]),"top-left":t.Point.convert(e["top-left"]||[0,0]),"top-right":t.Point.convert(e["top-right"]||[0,0]),bottom:t.Point.convert(e.bottom||[0,0]),"bottom-left":t.Point.convert(e["bottom-left"]||[0,0]),"bottom-right":t.Point.convert(e["bottom-right"]||[0,0]),left:t.Point.convert(e.left||[0,0]),right:t.Point.convert(e.right||[0,0])}}return Bn(new t.Point(0,0))}const Rn=e,Fn={setRTLTextPlugin:t.setRTLTextPlugin,getRTLTextPluginStatus:t.getRTLTextPluginStatus,Map:class extends an{constructor(e){var i
if(t.PerformanceUtils.mark(t.PerformanceMarkers.create),null!=(e=t.extend({},yn,e)).minZoom&&null!=e.maxZoom&&e.minZoom>e.maxZoom)throw new Error("maxZoom must be greater than or equal to minZoom")
if(null!=e.minPitch&&null!=e.maxPitch&&e.minPitch>e.maxPitch)throw new Error("maxPitch must be greater than or equal to minPitch")
if(null!=e.minPitch&&e.minPitch<0)throw new Error("minPitch must be greater than or equal to 0")
if(null!=e.maxPitch&&e.maxPitch>85)throw new Error("maxPitch must be less than or equal to 85")
if(super(new ar(e.minZoom,e.maxZoom,e.minPitch,e.maxPitch,e.renderWorldCopies),{bearingSnap:e.bearingSnap}),this._interactive=e.interactive,this._cooperativeGestures=e.cooperativeGestures,this._metaKey=0===navigator.platform.indexOf("Mac")?"metaKey":"ctrlKey",this._maxTileCacheSize=e.maxTileCacheSize,this._failIfMajorPerformanceCaveat=e.failIfMajorPerformanceCaveat,this._preserveDrawingBuffer=e.preserveDrawingBuffer,this._antialias=e.antialias,this._trackResize=e.trackResize,this._bearingSnap=e.bearingSnap,this._refreshExpiredTiles=e.refreshExpiredTiles,this._fadeDuration=e.fadeDuration,this._crossSourceCollisions=e.crossSourceCollisions,this._crossFadingFactor=1,this._collectResourceTiming=e.collectResourceTiming,this._renderTaskQueue=new cn,this._controls=[],this._mapId=t.uniqueId(),this._locale=t.extend({},hn,e.locale),this._clickTolerance=e.clickTolerance,this._pixelRatio=null!==(i=e.pixelRatio)&&void 0!==i?i:devicePixelRatio,this.transformCameraUpdate=e.transformCameraUpdate,this._imageQueueHandle=u.addThrottleControl((()=>this.isMoving())),this._requestManager=new d(e.transformRequest),"string"==typeof e.container){if(this._container=document.getElementById(e.container),!this._container)throw new Error(`Container '${e.container}' not found.`)}else{if(!(e.container instanceof HTMLElement))throw new Error("Invalid type: 'container' must be a String or HTMLElement.")
this._container=e.container}if(e.maxBounds&&this.setMaxBounds(e.maxBounds),t.bindAll(["_onWindowOnline","_onMapScroll","_cooperativeGesturesOnWheel","_contextLost","_contextRestored"],this),this._setupContainer(),this._setupPainter(),this.on("move",(()=>this._update(!1))),this.on("moveend",(()=>this._update(!1))),this.on("zoom",(()=>this._update(!0))),this.on("terrain",(()=>{this.painter.terrainFacilitator.dirty=!0,this._update(!0)})),this.once("idle",(()=>{this._idleTriggered=!0})),"undefined"!=typeof window){addEventListener("online",this._onWindowOnline,!1)
let t=!1
this._resizeObserver=new ResizeObserver((e=>{t?this._trackResize&&this.resize(e)._update():t=!0})),this._resizeObserver.observe(this._container)}this.handlers=new nn(this,e),this._cooperativeGestures&&this._setupCooperativeGestures(),this._hash=e.hash&&new or("string"==typeof e.hash&&e.hash||void 0).addTo(this),this._hash&&this._hash._onHashChange()||(this.jumpTo({center:e.center,zoom:e.zoom,bearing:e.bearing,pitch:e.pitch}),e.bounds&&(this.resize(),this.fitBounds(e.bounds,t.extend({},e.fitBoundsOptions,{duration:0})))),this.resize(),this._localIdeographFontFamily=e.localIdeographFontFamily,this._validateStyle=e.validateStyle,e.style&&this.setStyle(e.style,{localIdeographFontFamily:e.localIdeographFontFamily}),e.attributionControl&&this.addControl(new on({customAttribution:e.customAttribution})),e.maplibreLogo&&this.addControl(new ln,e.logoPosition),this.on("style.load",(()=>{this.transform.unmodified&&this.jumpTo(this.style.stylesheet)})),this.on("data",(e=>{this._update("style"===e.dataType),this.fire(new t.Event(`${e.dataType}data`,e))})),this.on("dataloading",(e=>{this.fire(new t.Event(`${e.dataType}dataloading`,e))})),this.on("dataabort",(e=>{this.fire(new t.Event("sourcedataabort",e))}))}_getMapId(){return this._mapId}addControl(e,i){if(void 0===i&&(i=e.getDefaultPosition?e.getDefaultPosition():"top-right"),!e||!e.onAdd)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.addControl(). Argument must be a control with onAdd and onRemove methods.")))
const r=e.onAdd(this)
this._controls.push(e)
const n=this._controlPositions[i]
return-1!==i.indexOf("bottom")?n.insertBefore(r,n.firstChild):n.appendChild(r),this}removeControl(e){if(!e||!e.onRemove)return this.fire(new t.ErrorEvent(new Error("Invalid argument to map.removeControl(). Argument must be a control with onAdd and onRemove methods.")))
const i=this._controls.indexOf(e)
return i>-1&&this._controls.splice(i,1),e.onRemove(this),this}hasControl(t){return this._controls.indexOf(t)>-1}calculateCameraOptionsFromTo(t,e,i,r){return null==r&&this.terrain&&(r=this.transform.getElevation(i,this.terrain)),super.calculateCameraOptionsFromTo(t,e,i,r)}resize(e){var i
const r=this._containerDimensions(),n=r[0],s=r[1]
this._resizeCanvas(n,s,this.getPixelRatio()),this.transform.resize(n,s),null===(i=this._requestedCameraState)||void 0===i||i.resize(n,s),this.painter.resize(n,s,this.getPixelRatio())
const a=!this._moving
return a&&(this.stop(),this.fire(new t.Event("movestart",e)).fire(new t.Event("move",e))),this.fire(new t.Event("resize",e)),a&&this.fire(new t.Event("moveend",e)),this}getPixelRatio(){return this._pixelRatio}setPixelRatio(t){const[e,i]=this._containerDimensions()
this._pixelRatio=t,this._resizeCanvas(e,i,t),this.painter.resize(e,i,t)}getBounds(){return this.transform.getBounds()}getMaxBounds(){return this.transform.getMaxBounds()}setMaxBounds(t){return this.transform.setMaxBounds(L.convert(t)),this._update()}setMinZoom(t){if((t=null==t?-2:t)>=-2&&t<=this.transform.maxZoom)return this.transform.minZoom=t,this._update(),this.getZoom()<t&&this.setZoom(t),this
throw new Error("minZoom must be between -2 and the current maxZoom, inclusive")}getMinZoom(){return this.transform.minZoom}setMaxZoom(t){if((t=null==t?22:t)>=this.transform.minZoom)return this.transform.maxZoom=t,this._update(),this.getZoom()>t&&this.setZoom(t),this
throw new Error("maxZoom must be greater than the current minZoom")}getMaxZoom(){return this.transform.maxZoom}setMinPitch(t){if((t=null==t?0:t)<0)throw new Error("minPitch must be greater than or equal to 0")
if(t>=0&&t<=this.transform.maxPitch)return this.transform.minPitch=t,this._update(),this.getPitch()<t&&this.setPitch(t),this
throw new Error("minPitch must be between 0 and the current maxPitch, inclusive")}getMinPitch(){return this.transform.minPitch}setMaxPitch(t){if((t=null==t?60:t)>85)throw new Error("maxPitch must be less than or equal to 85")
if(t>=this.transform.minPitch)return this.transform.maxPitch=t,this._update(),this.getPitch()>t&&this.setPitch(t),this
throw new Error("maxPitch must be greater than the current minPitch")}getMaxPitch(){return this.transform.maxPitch}getRenderWorldCopies(){return this.transform.renderWorldCopies}setRenderWorldCopies(t){return this.transform.renderWorldCopies=t,this._update()}getCooperativeGestures(){return this._cooperativeGestures}setCooperativeGestures(t){return this._cooperativeGestures=t,this._cooperativeGestures?this._setupCooperativeGestures():this._destroyCooperativeGestures(),this}project(e){return this.transform.locationPoint(t.LngLat.convert(e),this.style&&this.terrain)}unproject(e){return this.transform.pointLocation(t.Point.convert(e),this.terrain)}isMoving(){var t
return this._moving||(null===(t=this.handlers)||void 0===t?void 0:t.isMoving())}isZooming(){var t
return this._zooming||(null===(t=this.handlers)||void 0===t?void 0:t.isZooming())}isRotating(){var t
return this._rotating||(null===(t=this.handlers)||void 0===t?void 0:t.isRotating())}_createDelegatedListener(t,e,i){if("mouseenter"===t||"mouseover"===t){let r=!1
const n=n=>{const s=this.getLayer(e)?this.queryRenderedFeatures(n.point,{layers:[e]}):[]
s.length?r||(r=!0,i.call(this,new gr(t,this,n.originalEvent,{features:s}))):r=!1}
return{layer:e,listener:i,delegates:{mousemove:n,mouseout:()=>{r=!1}}}}if("mouseleave"===t||"mouseout"===t){let r=!1
const n=n=>{(this.getLayer(e)?this.queryRenderedFeatures(n.point,{layers:[e]}):[]).length?r=!0:r&&(r=!1,i.call(this,new gr(t,this,n.originalEvent)))},s=e=>{r&&(r=!1,i.call(this,new gr(t,this,e.originalEvent)))}
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
const n=e instanceof t.Point||Array.isArray(e),s=n?e:[[0,0],[this.transform.width,this.transform.height]]
if(i=i||(n?{}:e)||{},s instanceof t.Point||"number"==typeof s[0])r=[t.Point.convert(s)]
else{const e=t.Point.convert(s[0]),i=t.Point.convert(s[1])
r=[e,new t.Point(i.x,e.y),i,new t.Point(e.x,i.y),e]}return this.style.queryRenderedFeatures(r,i,this.transform)}querySourceFeatures(t,e){return this.style.querySourceFeatures(t,e)}setStyle(e,i){return!1!==(i=t.extend({},{localIdeographFontFamily:this._localIdeographFontFamily,validate:this._validateStyle},i)).diff&&i.localIdeographFontFamily===this._localIdeographFontFamily&&this.style&&e?(this._diffStyle(e,i),this):(this._localIdeographFontFamily=i.localIdeographFontFamily,this._updateStyle(e,i))}setTransformRequest(t){return this._requestManager.setTransformRequest(t),this}_getUIString(t){const e=this._locale[t]
if(null==e)throw new Error(`Missing UI string '${t}'`)
return e}_updateStyle(t,e){if(e.transformStyle&&this.style&&!this.style._loaded)return void this.style.once("style.load",(()=>this._updateStyle(t,e)))
const i=this.style&&e.transformStyle?this.style.serialize():void 0
return this.style&&(this.style.setEventedParent(null),this.style._remove(!t)),t?(this.style=new ne(this,e||{}),this.style.setEventedParent(this,{style:this.style}),"string"==typeof t?this.style.loadURL(t,e,i):this.style.loadJSON(t,e,i),this):(delete this.style,this)}_lazyInitEmptyStyle(){this.style||(this.style=new ne(this,{}),this.style.setEventedParent(this,{style:this.style}),this.style.loadEmpty())}_diffStyle(e,i){if("string"==typeof e){const r=this._requestManager.transformRequest(e,h.Style)
t.getJSON(r,((e,r)=>{e?this.fire(new t.ErrorEvent(e)):r&&this._updateDiff(r,i)}))}else"object"==typeof e&&this._updateDiff(e,i)}_updateDiff(e,i){try{this.style.setState(e,i)&&this._update(!0)}catch(r){t.warnOnce(`Unable to perform style diff: ${r.message||r.error||r}.  Rebuilding the style from scratch.`),this._updateStyle(e,i)}}getStyle(){if(this.style)return this.style.serialize()}isStyleLoaded(){return this.style?this.style.loaded():t.warnOnce("There is no style added to the map.")}addSource(t,e){return this._lazyInitEmptyStyle(),this.style.addSource(t,e),this._update(!0)}isSourceLoaded(e){const i=this.style&&this.style.sourceCaches[e]
if(void 0!==i)return i.loaded()
this.fire(new t.ErrorEvent(new Error(`There is no source with ID '${e}'`)))}setTerrain(e){if(this.style._checkLoaded(),this._terrainDataCallback&&this.style.off("data",this._terrainDataCallback),e){const i=this.style.sourceCaches[e.source]
if(!i)throw new Error(`cannot load terrain, because there exists no source with ID: ${e.source}`)
for(const r in this.style._layers){const i=this.style._layers[r]
"hillshade"===i.type&&i.source===e.source&&t.warnOnce("You are using the same source for a hillshade layer and for 3D terrain. Please consider using two separate sources to improve rendering quality.")}this.terrain=new pn(this.painter,i,e),this.painter.renderToTexture=new gn(this.painter,this.terrain),this.transform.updateElevation(this.terrain),this._terrainDataCallback=t=>{"style"===t.dataType?this.terrain.sourceCache.freeRtt():"source"===t.dataType&&t.tile&&(t.sourceId===e.source&&this.transform.updateElevation(this.terrain),this.terrain.sourceCache.freeRtt(t.tile.tileID))},this.style.on("data",this._terrainDataCallback)}else this.terrain&&this.terrain.sourceCache.destruct(),this.terrain=null,this.painter.renderToTexture&&this.painter.renderToTexture.destruct(),this.painter.renderToTexture=null,this.transform.updateElevation(this.terrain)
return this.fire(new t.Event("terrain",{terrain:e})),this}getTerrain(){return this.terrain&&this.terrain.options}areTilesLoaded(){const t=this.style&&this.style.sourceCaches
for(const e in t){const i=t[e]._tiles
for(const t in i){const e=i[t]
if("loaded"!==e.state&&"errored"!==e.state)return!1}}return!0}addSourceType(t,e,i){return this._lazyInitEmptyStyle(),this.style.addSourceType(t,e,i)}removeSource(t){return this.style.removeSource(t),this._update(!0)}getSource(t){return this.style.getSource(t)}addImage(e,i){let{pixelRatio:r=1,sdf:n=!1,stretchX:s,stretchY:a,content:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(this._lazyInitEmptyStyle(),i instanceof HTMLImageElement||t.isImageBitmap(i)){const{width:l,height:c,data:h}=t.exported.getImageData(i)
this.style.addImage(e,{data:new t.RGBAImage({width:l,height:c},h),pixelRatio:r,stretchX:s,stretchY:a,content:o,sdf:n,version:0})}else{if(void 0===i.width||void 0===i.height)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")))
{const{width:l,height:c,data:h}=i,u=i
this.style.addImage(e,{data:new t.RGBAImage({width:l,height:c},new Uint8Array(h)),pixelRatio:r,stretchX:s,stretchY:a,content:o,sdf:n,version:0,userImage:u}),u.onAdd&&u.onAdd(this,e)}}}updateImage(e,i){const r=this.style.getImage(e)
if(!r)return this.fire(new t.ErrorEvent(new Error("The map has no image with that id. If you are adding a new image use `map.addImage(...)` instead.")))
const n=i instanceof HTMLImageElement||t.isImageBitmap(i)?t.exported.getImageData(i):i,{width:s,height:a,data:o}=n
if(void 0===s||void 0===a)return this.fire(new t.ErrorEvent(new Error("Invalid arguments to map.updateImage(). The second argument must be an `HTMLImageElement`, `ImageData`, `ImageBitmap`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`")))
if(s!==r.data.width||a!==r.data.height)return this.fire(new t.ErrorEvent(new Error("The width and height of the updated image must be that same as the previous version of the image")))
const l=!(i instanceof HTMLImageElement||t.isImageBitmap(i))
r.data.replace(o,l),this.style.updateImage(e,r)}getImage(t){return this.style.getImage(t)}hasImage(e){return e?!!this.style.getImage(e):(this.fire(new t.ErrorEvent(new Error("Missing required image id"))),!1)}removeImage(t){this.style.removeImage(t)}loadImage(t,e){u.getImage(this._requestManager.transformRequest(t,h.Image),e)}listImages(){return this.style.listImages()}addLayer(t,e){return this._lazyInitEmptyStyle(),this.style.addLayer(t,e),this._update(!0)}moveLayer(t,e){return this.style.moveLayer(t,e),this._update(!0)}removeLayer(t){return this.style.removeLayer(t),this._update(!0)}getLayer(t){return this.style.getLayer(t)}setLayerZoomRange(t,e,i){return this.style.setLayerZoomRange(t,e,i),this._update(!0)}setFilter(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return this.style.setFilter(t,e,i),this._update(!0)}getFilter(t){return this.style.getFilter(t)}setPaintProperty(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
return this.style.setPaintProperty(t,e,i,r),this._update(!0)}getPaintProperty(t,e){return this.style.getPaintProperty(t,e)}setLayoutProperty(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
return this.style.setLayoutProperty(t,e,i,r),this._update(!0)}getLayoutProperty(t,e){return this.style.getLayoutProperty(t,e)}setGlyphs(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this._lazyInitEmptyStyle(),this.style.setGlyphs(t,e),this._update(!0)}getGlyphs(){return this.style.getGlyphsUrl()}addSprite(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return this._lazyInitEmptyStyle(),this.style.addSprite(t,e,i,(t=>{t||this._update(!0)})),this}removeSprite(t){return this._lazyInitEmptyStyle(),this.style.removeSprite(t),this._update(!0)}getSprite(){return this.style.getSprite()}setSprite(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this._lazyInitEmptyStyle(),this.style.setSprite(t,e,(t=>{t||this._update(!0)})),this}setLight(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this._lazyInitEmptyStyle(),this.style.setLight(t,e),this._update(!0)}getLight(){return this.style.getLight()}setFeatureState(t,e){return this.style.setFeatureState(t,e),this._update()}removeFeatureState(t,e){return this.style.removeFeatureState(t,e),this._update()}getFeatureState(t){return this.style.getFeatureState(t)}getContainer(){return this._container}getCanvasContainer(){return this._canvasContainer}getCanvas(){return this._canvas}_containerDimensions(){let t=0,e=0
return this._container&&(t=this._container.clientWidth||400,e=this._container.clientHeight||300),[t,e]}_setupContainer(){const t=this._container
t.classList.add("maplibregl-map")
const e=this._canvasContainer=i.create("div","maplibregl-canvas-container",t)
this._interactive&&e.classList.add("maplibregl-interactive"),this._canvas=i.create("canvas","maplibregl-canvas",e),this._canvas.addEventListener("webglcontextlost",this._contextLost,!1),this._canvas.addEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.setAttribute("tabindex","0"),this._canvas.setAttribute("aria-label","Map"),this._canvas.setAttribute("role","region")
const r=this._containerDimensions()
this._resizeCanvas(r[0],r[1],this.getPixelRatio())
const n=this._controlContainer=i.create("div","maplibregl-control-container",t),s=this._controlPositions={};["top-left","top-right","bottom-left","bottom-right"].forEach((t=>{s[t]=i.create("div",`maplibregl-ctrl-${t} `,n)})),this._container.addEventListener("scroll",this._onMapScroll,!1)}_cooperativeGesturesOnWheel(t){this._onCooperativeGesture(t,t[this._metaKey],1)}_setupCooperativeGestures(){this._cooperativeGesturesScreen=i.create("div","maplibregl-cooperative-gesture-screen",this._container)
let t="boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.windowsHelpText?this._cooperativeGestures.windowsHelpText:"Use Ctrl + scroll to zoom the map"
0===navigator.platform.indexOf("Mac")&&(t="boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.macHelpText?this._cooperativeGestures.macHelpText:"Use ⌘ + scroll to zoom the map"),this._cooperativeGesturesScreen.innerHTML=`\n            <div class="maplibregl-desktop-message">${t}</div>\n            <div class="maplibregl-mobile-message">${"boolean"!=typeof this._cooperativeGestures&&this._cooperativeGestures.mobileHelpText?this._cooperativeGestures.mobileHelpText:"Use two fingers to move the map"}</div>\n        `,this._canvasContainer.addEventListener("wheel",this._cooperativeGesturesOnWheel,!1),this._canvasContainer.classList.add("maplibregl-cooperative-gestures")}_destroyCooperativeGestures(){i.remove(this._cooperativeGesturesScreen),this._canvasContainer.removeEventListener("wheel",this._cooperativeGesturesOnWheel,!1),this._canvasContainer.classList.remove("maplibregl-cooperative-gestures")}_resizeCanvas(t,e,i){this._canvas.width=i*t,this._canvas.height=i*e,this._canvas.style.width=`${t}px`,this._canvas.style.height=`${e}px`}_setupPainter(){const t={alpha:!0,stencil:!0,depth:!0,failIfMajorPerformanceCaveat:this._failIfMajorPerformanceCaveat,preserveDrawingBuffer:this._preserveDrawingBuffer,antialias:this._antialias||!1}
let e=null
this._canvas.addEventListener("webglcontextcreationerror",(i=>{e={requestedAttributes:t},i&&(e.statusMessage=i.statusMessage,e.type=i.type)}),{once:!0})
const i=this._canvas.getContext("webgl2",t)
if(!i){const t="Failed to initialize WebGL"
throw e?(e.message=t,new Error(JSON.stringify(e))):new Error(t)}this.painter=new ir(i,this.transform),r.testSupport(i)}_contextLost(e){e.preventDefault(),this._frame&&(this._frame.cancel(),this._frame=null),this.fire(new t.Event("webglcontextlost",{originalEvent:e}))}_contextRestored(e){this._setupPainter(),this.resize(),this._update(),this.fire(new t.Event("webglcontextrestored",{originalEvent:e}))}_onMapScroll(t){if(t.target===this._container)return this._container.scrollTop=0,this._container.scrollLeft=0,!1}_onCooperativeGesture(t,e,i){return!e&&i<2&&(this._cooperativeGesturesScreen.classList.add("maplibregl-show"),setTimeout((()=>{this._cooperativeGesturesScreen.classList.remove("maplibregl-show")}),100)),!1}loaded(){return!this._styleDirty&&!this._sourcesDirty&&!!this.style&&this.style.loaded()}_update(t){return this.style&&this.style._loaded?(this._styleDirty=this._styleDirty||t,this._sourcesDirty=!0,this.triggerRepaint(),this):this}_requestRenderFrame(t){return this._update(),this._renderTaskQueue.add(t)}_cancelRenderFrame(t){this._renderTaskQueue.remove(t)}_render(e){const i=this._idleTriggered?this._fadeDuration:0
if(this.painter.context.setDirty(),this.painter.setBaseState(),this._renderTaskQueue.run(e),this._removed)return
let r=!1
if(this.style&&this._styleDirty){this._styleDirty=!1
const e=this.transform.zoom,n=t.exported.now()
this.style.zoomHistory.update(e,n)
const s=new t.EvaluationParameters(e,{now:n,fadeDuration:i,zoomHistory:this.style.zoomHistory,transition:this.style.getTransition()}),a=s.crossFadingFactor()
1===a&&a===this._crossFadingFactor||(r=!0,this._crossFadingFactor=a),this.style.update(s)}this.style&&this._sourcesDirty&&(this._sourcesDirty=!1,this.style._updateSources(this.transform)),this.terrain&&this.terrain.sourceCache.update(this.transform,this.terrain),this.transform.updateElevation(this.terrain),this._placementDirty=this.style&&this.style._updatePlacement(this.painter.transform,this.showCollisionBoxes,i,this._crossSourceCollisions),this.painter.render(this.style,{showTileBoundaries:this.showTileBoundaries,showOverdrawInspector:this._showOverdrawInspector,rotating:this.isRotating(),zooming:this.isZooming(),moving:this.isMoving(),fadeDuration:i,showPadding:this.showPadding}),this.fire(new t.Event("render")),this.loaded()&&!this._loaded&&(this._loaded=!0,t.PerformanceUtils.mark(t.PerformanceMarkers.load),this.fire(new t.Event("load"))),this.style&&(this.style.hasTransitions()||r)&&(this._styleDirty=!0),this.style&&!this._placementDirty&&this.style._releaseSymbolFadeTiles()
const n=this._sourcesDirty||this._styleDirty||this._placementDirty
return n||this._repaint?this.triggerRepaint():!this.isMoving()&&this.loaded()&&this.fire(new t.Event("idle")),!this._loaded||this._fullyLoaded||n||(this._fullyLoaded=!0,t.PerformanceUtils.mark(t.PerformanceMarkers.fullLoad)),this}redraw(){return this.style&&(this._frame&&(this._frame.cancel(),this._frame=null),this._render(0)),this}remove(){var e
this._hash&&this._hash.remove()
for(const t of this._controls)t.onRemove(this)
this._controls=[],this._frame&&(this._frame.cancel(),this._frame=null),this._renderTaskQueue.clear(),this.painter.destroy(),this.handlers.destroy(),delete this.handlers,this.setStyle(null),"undefined"!=typeof window&&removeEventListener("online",this._onWindowOnline,!1),u.removeThrottleControl(this._imageQueueHandle),null===(e=this._resizeObserver)||void 0===e||e.disconnect()
const r=this.painter.context.gl.getExtension("WEBGL_lose_context")
r&&r.loseContext(),this._canvas.removeEventListener("webglcontextrestored",this._contextRestored,!1),this._canvas.removeEventListener("webglcontextlost",this._contextLost,!1),i.remove(this._canvasContainer),i.remove(this._controlContainer),this._cooperativeGestures&&this._destroyCooperativeGestures(),this._container.classList.remove("maplibregl-map"),t.PerformanceUtils.clearMetrics(),this._removed=!0,this.fire(new t.Event("remove"))}triggerRepaint(){this.style&&!this._frame&&(this._frame=t.exported.frame((e=>{t.PerformanceUtils.frame(e),this._frame=null,this._render(e)})))}_onWindowOnline(){this._update()}get showTileBoundaries(){return!!this._showTileBoundaries}set showTileBoundaries(t){this._showTileBoundaries!==t&&(this._showTileBoundaries=t,this._update())}get showPadding(){return!!this._showPadding}set showPadding(t){this._showPadding!==t&&(this._showPadding=t,this._update())}get showCollisionBoxes(){return!!this._showCollisionBoxes}set showCollisionBoxes(t){this._showCollisionBoxes!==t&&(this._showCollisionBoxes=t,t?this.style._generateCollisionBoxes():this._update())}get showOverdrawInspector(){return!!this._showOverdrawInspector}set showOverdrawInspector(t){this._showOverdrawInspector!==t&&(this._showOverdrawInspector=t,this._update())}get repaint(){return!!this._repaint}set repaint(t){this._repaint!==t&&(this._repaint=t,this.triggerRepaint())}get vertices(){return!!this._vertices}set vertices(t){this._vertices=t,this._update()}get version(){return _n}getCameraTargetElevation(){return this.transform.elevation}},NavigationControl:class{constructor(e){this.options=t.extend({},vn,e),this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this.options.showZoom&&(t.bindAll(["_setButtonTitle","_updateZoomButtons"],this),this._zoomInButton=this._createButton("maplibregl-ctrl-zoom-in",(t=>this._map.zoomIn({},{originalEvent:t}))),i.create("span","maplibregl-ctrl-icon",this._zoomInButton).setAttribute("aria-hidden","true"),this._zoomOutButton=this._createButton("maplibregl-ctrl-zoom-out",(t=>this._map.zoomOut({},{originalEvent:t}))),i.create("span","maplibregl-ctrl-icon",this._zoomOutButton).setAttribute("aria-hidden","true")),this.options.showCompass&&(t.bindAll(["_rotateCompassArrow"],this),this._compass=this._createButton("maplibregl-ctrl-compass",(t=>{this.options.visualizePitch?this._map.resetNorthPitch({},{originalEvent:t}):this._map.resetNorth({},{originalEvent:t})})),this._compassIcon=i.create("span","maplibregl-ctrl-icon",this._compass),this._compassIcon.setAttribute("aria-hidden","true"))}_updateZoomButtons(){const t=this._map.getZoom(),e=t===this._map.getMaxZoom(),i=t===this._map.getMinZoom()
this._zoomInButton.disabled=e,this._zoomOutButton.disabled=i,this._zoomInButton.setAttribute("aria-disabled",e.toString()),this._zoomOutButton.setAttribute("aria-disabled",i.toString())}_rotateCompassArrow(){const t=this.options.visualizePitch?`scale(${1/Math.pow(Math.cos(this._map.transform.pitch*(Math.PI/180)),.5)}) rotateX(${this._map.transform.pitch}deg) rotateZ(${this._map.transform.angle*(180/Math.PI)}deg)`:`rotate(${this._map.transform.angle*(180/Math.PI)}deg)`
this._compassIcon.style.transform=t}onAdd(t){return this._map=t,this.options.showZoom&&(this._setButtonTitle(this._zoomInButton,"ZoomIn"),this._setButtonTitle(this._zoomOutButton,"ZoomOut"),this._map.on("zoom",this._updateZoomButtons),this._updateZoomButtons()),this.options.showCompass&&(this._setButtonTitle(this._compass,"ResetBearing"),this.options.visualizePitch&&this._map.on("pitch",this._rotateCompassArrow),this._map.on("rotate",this._rotateCompassArrow),this._rotateCompassArrow(),this._handler=new bn(this._map,this._compass,this.options.visualizePitch)),this._container}onRemove(){i.remove(this._container),this.options.showZoom&&this._map.off("zoom",this._updateZoomButtons),this.options.showCompass&&(this.options.visualizePitch&&this._map.off("pitch",this._rotateCompassArrow),this._map.off("rotate",this._rotateCompassArrow),this._handler.off(),delete this._handler),delete this._map}_createButton(t,e){const r=i.create("button",t,this._container)
return r.type="button",r.addEventListener("click",e),r}_setButtonTitle(t,e){const i=this._map._getUIString(`NavigationControl.${e}`)
t.title=i,t.setAttribute("aria-label",i)}},GeolocateControl:class extends t.Evented{constructor(e){super(),this.options=t.extend({},An,e),t.bindAll(["_onSuccess","_onError","_onZoom","_finish","_setupUI","_updateCamera","_updateMarker"],this)}onAdd(t){return this._map=t,this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),function(t){void 0===wn||arguments.length>1&&void 0!==arguments[1]&&arguments[1]?void 0!==window.navigator.permissions?window.navigator.permissions.query({name:"geolocation"}).then((e=>{wn="denied"!==e.state,t(wn)})).catch((()=>{wn=!!window.navigator.geolocation,t(wn)})):(wn=!!window.navigator.geolocation,t(wn)):t(wn)}(this._setupUI),this._container}onRemove(){void 0!==this._geolocationWatchID&&(window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0),this.options.showUserLocation&&this._userLocationDotMarker&&this._userLocationDotMarker.remove(),this.options.showAccuracyCircle&&this._accuracyCircleMarker&&this._accuracyCircleMarker.remove(),i.remove(this._container),this._map.off("zoom",this._onZoom),this._map=void 0,Mn=0,Cn=!1}_isOutOfMapMaxBounds(t){const e=this._map.getMaxBounds(),i=t.coords
return e&&(i.longitude<e.getWest()||i.longitude>e.getEast()||i.latitude<e.getSouth()||i.latitude>e.getNorth())}_setErrorState(){switch(this._watchState){case"WAITING_ACTIVE":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error")
break
case"ACTIVE_LOCK":this._watchState="ACTIVE_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting")
break
case"BACKGROUND":this._watchState="BACKGROUND_ERROR",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting")
break
case"ACTIVE_ERROR":break
default:throw new Error(`Unexpected watchState ${this._watchState}`)}}_onSuccess(e){if(this._map){if(this._isOutOfMapMaxBounds(e))return this._setErrorState(),this.fire(new t.Event("outofmaxbounds",e)),this._updateMarker(),void this._finish()
if(this.options.trackUserLocation)switch(this._lastKnownPosition=e,this._watchState){case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active")
break
case"BACKGROUND":case"BACKGROUND_ERROR":this._watchState="BACKGROUND",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background")
break
default:throw new Error(`Unexpected watchState ${this._watchState}`)}this.options.showUserLocation&&"OFF"!==this._watchState&&this._updateMarker(e),this.options.trackUserLocation&&"ACTIVE_LOCK"!==this._watchState||this._updateCamera(e),this.options.showUserLocation&&this._dotElement.classList.remove("maplibregl-user-location-dot-stale"),this.fire(new t.Event("geolocate",e)),this._finish()}}_updateCamera(e){const i=new t.LngLat(e.coords.longitude,e.coords.latitude),r=e.coords.accuracy,n=this._map.getBearing(),s=t.extend({bearing:n},this.options.fitBoundsOptions),a=L.fromLngLat(i,r)
this._map.fitBounds(a,s,{geolocateSource:!0})}_updateMarker(e){if(e){const i=new t.LngLat(e.coords.longitude,e.coords.latitude)
this._accuracyCircleMarker.setLngLat(i).addTo(this._map),this._userLocationDotMarker.setLngLat(i).addTo(this._map),this._accuracy=e.coords.accuracy,this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius()}else this._userLocationDotMarker.remove(),this._accuracyCircleMarker.remove()}_updateCircleRadius(){const t=this._map.getBounds(),e=t.getSouthEast(),i=t.getNorthEast(),r=e.distanceTo(i),n=Math.ceil(this._accuracy/(r/this._map._container.clientHeight)*2)
this._circleElement.style.width=`${n}px`,this._circleElement.style.height=`${n}px`}_onZoom(){this.options.showUserLocation&&this.options.showAccuracyCircle&&this._updateCircleRadius()}_onError(e){if(this._map){if(this.options.trackUserLocation)if(1===e.code){this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error"),this._geolocateButton.disabled=!0
const t=this._map._getUIString("GeolocateControl.LocationNotAvailable")
this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t),void 0!==this._geolocationWatchID&&this._clearWatch()}else{if(3===e.code&&Cn)return
this._setErrorState()}"OFF"!==this._watchState&&this.options.showUserLocation&&this._dotElement.classList.add("maplibregl-user-location-dot-stale"),this.fire(new t.Event("error",e)),this._finish()}}_finish(){this._timeoutId&&clearTimeout(this._timeoutId),this._timeoutId=void 0}_setupUI(e){if(this._map){if(this._container.addEventListener("contextmenu",(t=>t.preventDefault())),this._geolocateButton=i.create("button","maplibregl-ctrl-geolocate",this._container),i.create("span","maplibregl-ctrl-icon",this._geolocateButton).setAttribute("aria-hidden","true"),this._geolocateButton.type="button",!1===e){t.warnOnce("Geolocation support is not available so the GeolocateControl will be disabled.")
const e=this._map._getUIString("GeolocateControl.LocationNotAvailable")
this._geolocateButton.disabled=!0,this._geolocateButton.title=e,this._geolocateButton.setAttribute("aria-label",e)}else{const t=this._map._getUIString("GeolocateControl.FindMyLocation")
this._geolocateButton.title=t,this._geolocateButton.setAttribute("aria-label",t)}this.options.trackUserLocation&&(this._geolocateButton.setAttribute("aria-pressed","false"),this._watchState="OFF"),this.options.showUserLocation&&(this._dotElement=i.create("div","maplibregl-user-location-dot"),this._userLocationDotMarker=new In(this._dotElement),this._circleElement=i.create("div","maplibregl-user-location-accuracy-circle"),this._accuracyCircleMarker=new In({element:this._circleElement,pitchAlignment:"map"}),this.options.trackUserLocation&&(this._watchState="OFF"),this._map.on("zoom",this._onZoom)),this._geolocateButton.addEventListener("click",this.trigger.bind(this)),this._setup=!0,this.options.trackUserLocation&&this._map.on("movestart",(e=>{e.geolocateSource||"ACTIVE_LOCK"!==this._watchState||e.originalEvent&&"resize"===e.originalEvent.type||(this._watchState="BACKGROUND",this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this.fire(new t.Event("trackuserlocationend")))}))}}trigger(){if(!this._setup)return t.warnOnce("Geolocate control triggered before added to a map"),!1
if(this.options.trackUserLocation){switch(this._watchState){case"OFF":this._watchState="WAITING_ACTIVE",this.fire(new t.Event("trackuserlocationstart"))
break
case"WAITING_ACTIVE":case"ACTIVE_LOCK":case"ACTIVE_ERROR":case"BACKGROUND_ERROR":Mn--,Cn=!1,this._watchState="OFF",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-active-error"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background-error"),this.fire(new t.Event("trackuserlocationend"))
break
case"BACKGROUND":this._watchState="ACTIVE_LOCK",this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-background"),this._lastKnownPosition&&this._updateCamera(this._lastKnownPosition),this.fire(new t.Event("trackuserlocationstart"))
break
default:throw new Error(`Unexpected watchState ${this._watchState}`)}switch(this._watchState){case"WAITING_ACTIVE":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active")
break
case"ACTIVE_LOCK":this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-active")
break
case"OFF":break
default:throw new Error(`Unexpected watchState ${this._watchState}`)}if("OFF"===this._watchState&&void 0!==this._geolocationWatchID)this._clearWatch()
else if(void 0===this._geolocationWatchID){let t
this._geolocateButton.classList.add("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","true"),Mn++,Mn>1?(t={maximumAge:6e5,timeout:0},Cn=!0):(t=this.options.positionOptions,Cn=!1),this._geolocationWatchID=window.navigator.geolocation.watchPosition(this._onSuccess,this._onError,t)}}else window.navigator.geolocation.getCurrentPosition(this._onSuccess,this._onError,this.options.positionOptions),this._timeoutId=setTimeout(this._finish,1e4)
return!0}_clearWatch(){window.navigator.geolocation.clearWatch(this._geolocationWatchID),this._geolocationWatchID=void 0,this._geolocateButton.classList.remove("maplibregl-ctrl-geolocate-waiting"),this._geolocateButton.setAttribute("aria-pressed","false"),this.options.showUserLocation&&this._updateMarker(null)}},AttributionControl:on,LogoControl:ln,ScaleControl:class{constructor(e){this.options=t.extend({},Pn,e),t.bindAll(["_onMove","setUnit"],this)}getDefaultPosition(){return"bottom-left"}_onMove(){zn(this._map,this._container,this.options)}onAdd(t){return this._map=t,this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-scale",t.getContainer()),this._map.on("move",this._onMove),this._onMove(),this._container}onRemove(){i.remove(this._container),this._map.off("move",this._onMove),this._map=void 0}setUnit(t){this.options.unit=t,zn(this._map,this._container,this.options)}},FullscreenControl:class extends t.Evented{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
super(),this._onFullscreenChange=()=>{(window.document.fullscreenElement||window.document.mozFullScreenElement||window.document.webkitFullscreenElement||window.document.msFullscreenElement)===this._container!==this._fullscreen&&this._handleFullscreenChange()},this._onClickFullscreen=()=>{this._isFullscreen()?this._exitFullscreen():this._requestFullscreen()},this._fullscreen=!1,e&&e.container&&(e.container instanceof HTMLElement?this._container=e.container:t.warnOnce("Full screen control 'container' must be a DOM element.")),"onfullscreenchange"in document?this._fullscreenchange="fullscreenchange":"onmozfullscreenchange"in document?this._fullscreenchange="mozfullscreenchange":"onwebkitfullscreenchange"in document?this._fullscreenchange="webkitfullscreenchange":"onmsfullscreenchange"in document&&(this._fullscreenchange="MSFullscreenChange")}onAdd(t){return this._map=t,this._container||(this._container=this._map.getContainer()),this._controlContainer=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),this._setupUI(),this._controlContainer}onRemove(){i.remove(this._controlContainer),this._map=null,window.document.removeEventListener(this._fullscreenchange,this._onFullscreenChange)}_setupUI(){const t=this._fullscreenButton=i.create("button","maplibregl-ctrl-fullscreen",this._controlContainer)
i.create("span","maplibregl-ctrl-icon",t).setAttribute("aria-hidden","true"),t.type="button",this._updateTitle(),this._fullscreenButton.addEventListener("click",this._onClickFullscreen),window.document.addEventListener(this._fullscreenchange,this._onFullscreenChange)}_updateTitle(){const t=this._getTitle()
this._fullscreenButton.setAttribute("aria-label",t),this._fullscreenButton.title=t}_getTitle(){return this._map._getUIString(this._isFullscreen()?"FullscreenControl.Exit":"FullscreenControl.Enter")}_isFullscreen(){return this._fullscreen}_handleFullscreenChange(){this._fullscreen=!this._fullscreen,this._fullscreenButton.classList.toggle("maplibregl-ctrl-shrink"),this._fullscreenButton.classList.toggle("maplibregl-ctrl-fullscreen"),this._updateTitle(),this._fullscreen?(this.fire(new t.Event("fullscreenstart")),this._map._cooperativeGestures&&(this._prevCooperativeGestures=this._map._cooperativeGestures,this._map.setCooperativeGestures())):(this.fire(new t.Event("fullscreenend")),this._prevCooperativeGestures&&(this._map.setCooperativeGestures(this._prevCooperativeGestures),delete this._prevCooperativeGestures))}_exitFullscreen(){window.document.exitFullscreen?window.document.exitFullscreen():window.document.mozCancelFullScreen?window.document.mozCancelFullScreen():window.document.msExitFullscreen?window.document.msExitFullscreen():window.document.webkitCancelFullScreen?window.document.webkitCancelFullScreen():this._togglePseudoFullScreen()}_requestFullscreen(){this._container.requestFullscreen?this._container.requestFullscreen():this._container.mozRequestFullScreen?this._container.mozRequestFullScreen():this._container.msRequestFullscreen?this._container.msRequestFullscreen():this._container.webkitRequestFullscreen?this._container.webkitRequestFullscreen():this._togglePseudoFullScreen()}_togglePseudoFullScreen(){this._container.classList.toggle("maplibregl-pseudo-fullscreen"),this._handleFullscreenChange(),this._map.resize()}},TerrainControl:class{constructor(e){this.options=e,t.bindAll(["_toggleTerrain","_updateTerrainIcon"],this)}onAdd(t){return this._map=t,this._container=i.create("div","maplibregl-ctrl maplibregl-ctrl-group"),this._terrainButton=i.create("button","maplibregl-ctrl-terrain",this._container),i.create("span","maplibregl-ctrl-icon",this._terrainButton).setAttribute("aria-hidden","true"),this._terrainButton.type="button",this._terrainButton.addEventListener("click",this._toggleTerrain),this._updateTerrainIcon(),this._map.on("terrain",this._updateTerrainIcon),this._container}onRemove(){i.remove(this._container),this._map.off("terrain",this._updateTerrainIcon),this._map=void 0}_toggleTerrain(){this._map.getTerrain()?this._map.setTerrain(null):this._map.setTerrain(this.options),this._updateTerrainIcon()}_updateTerrainIcon(){this._terrainButton.classList.remove("maplibregl-ctrl-terrain"),this._terrainButton.classList.remove("maplibregl-ctrl-terrain-enabled"),this._map.terrain?(this._terrainButton.classList.add("maplibregl-ctrl-terrain-enabled"),this._terrainButton.title=this._map._getUIString("TerrainControl.disableTerrain")):(this._terrainButton.classList.add("maplibregl-ctrl-terrain"),this._terrainButton.title=this._map._getUIString("TerrainControl.enableTerrain"))}},Popup:class extends t.Evented{constructor(e){super(),this.options=t.extend(Object.create(Dn),e),t.bindAll(["_update","_onClose","remove","_onMouseMove","_onMouseUp","_onDrag"],this)}addTo(e){return this._map&&this.remove(),this._map=e,this.options.closeOnClick&&this._map.on("click",this._onClose),this.options.closeOnMove&&this._map.on("move",this._onClose),this._map.on("remove",this.remove),this._update(),this._focusFirstElement(),this._trackPointer?(this._map.on("mousemove",this._onMouseMove),this._map.on("mouseup",this._onMouseUp),this._container&&this._container.classList.add("maplibregl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer")):this._map.on("move",this._update),this.fire(new t.Event("open")),this}isOpen(){return!!this._map}remove(){return this._content&&i.remove(this._content),this._container&&(i.remove(this._container),delete this._container),this._map&&(this._map.off("move",this._update),this._map.off("move",this._onClose),this._map.off("click",this._onClose),this._map.off("remove",this.remove),this._map.off("mousemove",this._onMouseMove),this._map.off("mouseup",this._onMouseUp),this._map.off("drag",this._onDrag),delete this._map),this.fire(new t.Event("close")),this}getLngLat(){return this._lngLat}setLngLat(e){return this._lngLat=t.LngLat.convert(e),this._pos=null,this._trackPointer=!1,this._update(),this._map&&(this._map.on("move",this._update),this._map.off("mousemove",this._onMouseMove),this._container&&this._container.classList.remove("maplibregl-popup-track-pointer"),this._map._canvasContainer.classList.remove("maplibregl-track-pointer")),this}trackPointer(){return this._trackPointer=!0,this._pos=null,this._update(),this._map&&(this._map.off("move",this._update),this._map.on("mousemove",this._onMouseMove),this._map.on("drag",this._onDrag),this._container&&this._container.classList.add("maplibregl-popup-track-pointer"),this._map._canvasContainer.classList.add("maplibregl-track-pointer")),this}getElement(){return this._container}setText(t){return this.setDOMContent(document.createTextNode(t))}setHTML(t){const e=document.createDocumentFragment(),i=document.createElement("body")
let r
for(i.innerHTML=t;r=i.firstChild,r;)e.appendChild(r)
return this.setDOMContent(e)}getMaxWidth(){return this._container&&this._container.style.maxWidth}setMaxWidth(t){return this.options.maxWidth=t,this._update(),this}setDOMContent(t){if(this._content)for(;this._content.hasChildNodes();)this._content.firstChild&&this._content.removeChild(this._content.firstChild)
else this._content=i.create("div","maplibregl-popup-content",this._container)
return this._content.appendChild(t),this._createCloseButton(),this._update(),this._focusFirstElement(),this}addClassName(t){this._container&&this._container.classList.add(t)}removeClassName(t){this._container&&this._container.classList.remove(t)}setOffset(t){return this.options.offset=t,this._update(),this}toggleClassName(t){if(this._container)return this._container.classList.toggle(t)}_createCloseButton(){this.options.closeButton&&(this._closeButton=i.create("button","maplibregl-popup-close-button",this._content),this._closeButton.type="button",this._closeButton.setAttribute("aria-label","Close popup"),this._closeButton.innerHTML="&#215;",this._closeButton.addEventListener("click",this._onClose))}_onMouseUp(t){this._update(t.point)}_onMouseMove(t){this._update(t.point)}_onDrag(t){this._update(t.point)}_update(t){if(!this._map||!this._lngLat&&!this._trackPointer||!this._content)return
if(this._container||(this._container=i.create("div","maplibregl-popup",this._map.getContainer()),this._tip=i.create("div","maplibregl-popup-tip",this._container),this._container.appendChild(this._content),this.options.className&&this.options.className.split(" ").forEach((t=>this._container.classList.add(t))),this._trackPointer&&this._container.classList.add("maplibregl-popup-track-pointer")),this.options.maxWidth&&this._container.style.maxWidth!==this.options.maxWidth&&(this._container.style.maxWidth=this.options.maxWidth),this._map.transform.renderWorldCopies&&!this._trackPointer&&(this._lngLat=Tn(this._lngLat,this._pos,this._map.transform)),this._trackPointer&&!t)return
const e=this._pos=this._trackPointer&&t?t:this._map.project(this._lngLat)
let r=this.options.anchor
const n=Bn(this.options.offset)
if(!r){const t=this._container.offsetWidth,i=this._container.offsetHeight
let s
s=e.y+n.bottom.y<i?["top"]:e.y>this._map.transform.height-i?["bottom"]:[],e.x<t/2?s.push("left"):e.x>this._map.transform.width-t/2&&s.push("right"),r=0===s.length?"bottom":s.join("-")}const s=e.add(n[r]).round()
i.setTransform(this._container,`${Sn[r]} translate(${s.x}px,${s.y}px)`),En(this._container,r,"popup")}_focusFirstElement(){if(!this.options.focusAfterOpen||!this._container)return
const t=this._container.querySelector(Ln)
t&&t.focus()}_onClose(){this.remove()}},Marker:In,Style:ne,LngLat:t.LngLat,LngLatBounds:L,Point:t.Point,MercatorCoordinate:t.MercatorCoordinate,Evented:t.Evented,AJAXError:t.AJAXError,config:t.config,CanvasSource:q,GeoJSONSource:U,ImageSource:N,RasterDEMTileSource:O,RasterTileSource:F,VectorTileSource:R,VideoSource:$,prewarm:function(){nt().acquire(tt)},clearPrewarmedResources:function(){const t=rt
t&&(t.isPreloaded()&&1===t.numActive()?(t.release(tt),rt=null):console.warn("Could not clear WebWorkers since there are active Map instances that still reference it. The pre-warmed WebWorker pool can only be cleared when all map instances have been removed with map.remove()"))},get version(){return Rn},get workerCount(){return et.workerCount},set workerCount(t){et.workerCount=t},get maxParallelImageRequests(){return t.config.MAX_PARALLEL_IMAGE_REQUESTS},set maxParallelImageRequests(e){t.config.MAX_PARALLEL_IMAGE_REQUESTS=e},get workerUrl(){return t.config.WORKER_URL},set workerUrl(e){t.config.WORKER_URL=e},addProtocol(e,i){t.config.REGISTERED_PROTOCOLS[e]=i},removeProtocol(e){delete t.config.REGISTERED_PROTOCOLS[e]}}
return sn.extend(Fn,{isSafari:t.isSafari,getPerformanceMetrics:t.PerformanceUtils.getPerformanceMetrics}),Fn})),i}()}}])
