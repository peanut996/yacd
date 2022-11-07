import{ag as S,ah as E,ai as k,aj as b,ak as T,al as R,r as m,am as B,an as O,E as y,ao as A,ap as _,U as q,b as d,j as a,T as F,B as U,u as x,d as j,g as L,C as z,h as D}from"./index.5faed7a7.js";import{a as Q,V}from"./index.esm.5ec933a2.js";import{R as P,T as W}from"./TextFitler.bee56df7.js";import{f as H}from"./index.92e2d967.js";import{F as G,p as J}from"./Fab.4643a632.js";import{u as K}from"./useRemainingViewPortHeight.81456e7e.js";import"./debounce.c2d20996.js";class X extends S{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const t=this.options;this.options=this.client.defaultMutationOptions(e),E(t,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}onUnsubscribe(){if(!this.listeners.length){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const t={listeners:!0};e.type==="success"?t.onSuccess=!0:e.type==="error"&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:k(),t={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){b.batch(()=>{if(this.mutateOptions){if(e.onSuccess){var t,r,n,i;(t=(r=this.mutateOptions).onSuccess)==null||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(n=(i=this.mutateOptions).onSettled)==null||n.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var o,u,l,c;(o=(u=this.mutateOptions).onError)==null||o.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(l=(c=this.mutateOptions).onSettled)==null||l.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(p=>{p(this.currentResult)})})}}function w(s,e,t){const r=T(s,e,t),n=R({context:r.context}),[i]=m.exports.useState(()=>new X(n,r));m.exports.useEffect(()=>{i.setOptions(r)},[i,r]);const o=B(m.exports.useCallback(l=>i.subscribe(b.batchCalls(l)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),u=m.exports.useCallback((l,c)=>{i.mutate(l,c).catch(Y)},[i]);if(o.error&&O(i.options.useErrorBoundary,[o.error]))throw o.error;return{...o,mutate:u,mutateAsync:o.mutate}}function Y(){}function Z(s){const e=s.providers,t=Object.keys(e),r={};for(let n=0;n<t.length;n++){const i=t[n];r[i]={...e[i],idx:n}}return{byName:r,names:t}}async function $(s,e){const{url:t,init:r}=y(e);let n={providers:{}};try{const i=await fetch(t+s,r);i.ok&&(n=await i.json())}catch(i){console.log("failed to GET /providers/rules",i)}return Z(n)}async function C({name:s,apiConfig:e}){const{url:t,init:r}=y(e);try{return(await fetch(t+`/providers/rules/${s}`,{method:"PUT",...r})).ok}catch(n){return console.log("failed to PUT /providers/rules/:name",n),!1}}async function ee({names:s,apiConfig:e}){for(let t=0;t<s.length;t++)await C({name:s[t],apiConfig:e})}var te=function(s,e,t,r,n,i,o,u){if(!s){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,r,n,i,o,u],p=0;l=new Error(e.replace(/%s/g,function(){return c[p++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},se=te;function re(s){return se(s.rules&&s.rules.length>=0,"there is no valid rules list in the rules API response"),s.rules.map((e,t)=>({...e,id:t}))}async function ne(s,e){let t={rules:[]};try{const{url:r,init:n}=y(e),i=await fetch(r+s,n);i.ok&&(t=await i.json())}catch(r){console.log("failed to fetch rules",r)}return re(t)}const I=A({key:"ruleFilterText",default:""});function ie(s,e){const t=R(),{mutate:r,isLoading:n}=w(C,{onSuccess:()=>{t.invalidateQueries(["/providers/rules"])}});return[o=>{o.preventDefault(),r({name:s,apiConfig:e})},n]}function oe(s){const e=R(),{data:t}=M(s),{mutate:r,isLoading:n}=w(ee,{onSuccess:()=>{e.invalidateQueries(["/providers/rules"])}});return[o=>{o.preventDefault(),r({names:t.names,apiConfig:s})},n]}function M(s){return _(["/providers/rules",s],()=>$("/providers/rules",s))}function ae(s){const{data:e,isFetching:t}=_(["/rules",s],()=>ne("/rules",s)),{data:r}=M(s),[n]=q(I);if(n==="")return{rules:e,provider:r,isFetching:t};{const i=n.toLowerCase();return{rules:e.filter(o=>o.payload.toLowerCase().indexOf(i)>=0),isFetching:t,provider:{byName:r.byName,names:r.names.filter(o=>o.toLowerCase().indexOf(i)>=0)}}}}const le="_RuleProviderItem_12aid_1",ue="_left_12aid_7",ce="_middle_12aid_14",de="_gray_12aid_21",he="_action_12aid_25",fe="_refreshBtn_12aid_32",h={RuleProviderItem:le,left:ue,middle:ce,gray:de,action:he,refreshBtn:fe};function me({idx:s,name:e,vehicleType:t,behavior:r,updatedAt:n,ruleCount:i,apiConfig:o}){const[u,l]=ie(e,o),c=H(new Date(n),new Date);return d("div",{className:h.RuleProviderItem,children:[a("span",{className:h.left,children:s}),d("div",{className:h.middle,children:[a(F,{name:e,type:`${t} / ${r}`}),a("div",{className:h.gray,children:i<2?`${i} rule`:`${i} rules`}),d("div",{className:h.action,children:[d(U,{onClick:u,disabled:l,className:h.refreshBtn,children:[a(P,{isRotating:l,size:13}),a("span",{className:"visually-hidden",children:"Refresh"})]}),d("small",{className:h.gray,children:["Updated ",c," ago"]})]})]})]})}function pe({apiConfig:s}){const[e,t]=oe(s),{t:r}=x();return a(G,{icon:a(P,{isRotating:t}),text:r("update_all_rule_provider"),style:J,onClick:e})}const ve="_rule_1ymqx_1",Re="_left_1ymqx_12",ye="_a_1ymqx_19",ge="_b_1ymqx_26",be="_type_1ymqx_37",f={rule:ve,left:Re,a:ye,b:ge,type:be},v={_default:"#59caf9",DIRECT:"#f5bc41",REJECT:"#cb3166"};function _e({proxy:s}){let e=v._default;return v[s]&&(e=v[s]),{color:e}}function xe({type:s,payload:e,proxy:t,id:r}){const n=_e({proxy:t});return d("div",{className:f.rule,children:[a("div",{className:f.left,children:r}),d("div",{children:[a("div",{className:f.b,children:e}),d("div",{className:f.a,children:[a("div",{className:f.type,children:s}),a("div",{style:n,children:t})]})]})]})}const Pe="_header_1j1w3_1",we="_RuleProviderItemWrapper_1j1w3_17",N={header:Pe,RuleProviderItemWrapper:we},{memo:Ce}=D,g=30;function Ie(s,{rules:e,provider:t}){const r=t.names.length;return s<r?t.names[s]:e[s-r].id}function Me({provider:s}){return function(t){const r=s.names.length;return t<r?110:80}}const Ne=Ce(({index:s,style:e,data:t})=>{const{rules:r,provider:n,apiConfig:i}=t,o=n.names.length;if(s<o){const l=n.names[s],c=n.byName[l];return a("div",{style:e,className:N.RuleProviderItemWrapper,children:a(me,{apiConfig:i,...c})})}const u=r[s-o];return a("div",{style:e,children:a(xe,{...u})})},Q),Se=s=>({apiConfig:L(s)}),Ue=j(Se)(Ee);function Ee({apiConfig:s}){const[e,t]=K(),{rules:r,provider:n}=ae(s),i=Me({provider:n}),{t:o}=x();return d("div",{children:[d("div",{className:N.header,children:[a(z,{title:o("Rules")}),a(W,{placeholder:"Filter",textAtom:I})]}),a("div",{ref:e,style:{paddingBottom:g},children:a(V,{height:t-g,width:"100%",itemCount:r.length+n.names.length,itemSize:i,itemData:{rules:r,provider:n,apiConfig:s},itemKey:Ie,children:Ne})}),n&&n.names&&n.names.length>0?a(pe,{apiConfig:s}):null]})}export{Ue as default};
