let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{t,b as n,r as i,o as s,c as a,w as o,F as r,f as p,h as l,i as c,d as u,g as d}from"./index.a8cbfbff.js";const m=()=>{const e=n({name:"Built-In Components",extra:"https://v3.vuejs.org/api/built-in-components.html",itemList:[{title:"Component",isCompoents:"Component",link:"https://v3.vuejs.org/api/built-in-components.html#component",apiList:[{apiTitle:"Props",descripttion:"is - string | Component"},{apiTitle:"Usage",descripttion:"用于呈现动态组件的“元组件”。要渲染的实际组件由is道具确定。一个prop是一个字符串，可以是HTML标记名称或组件名称"},{apiTitle:"Example",descripttion:["\x3c!-- a dynamic component controlled by --\x3e","\x3c!-- the `componentId` property on the vm --\x3e",'<component :is="componentId"></component>',"\x3c!-- can also render registered component or component passed as prop --\x3e",'<component :is="$options.components.child"></component>',"\x3c!-- can reference components by string --\x3e","<component :is=\"condition ? 'FooComponent' : 'BarComponent'\"></component>","\x3c!-- can be used to render native HTML elements --\x3e","<component :is=\"href ? 'a' : 'span'\"></component>"]}]},{title:"Transition",isCompoents:"Transition",link:"https://v3.vuejs.org/api/built-in-components.html#transition",apiList:[{apiTitle:"Props",descripttion:["name - string","appear - boolean","persisted - boolean","css - boolean","type - string","mode - string","duration - number | {enter: number,leave: number }","enter-from-class - string","leave-from-class - string","appear-class - string","enter-to-class - string","leave-to-class - string","appear-to-class - string","enter-active-class - string","leave-active-class - string","appear-active-class - string"]},{apiTitle:"Events",descripttion:["before-enter","before-leave","enter","leave","appear","after-enter","after-leave","after-appear","enter-cancelled","leave-cancelled (v-show only)","appear-cancelled"]},{apiTitle:"Usage",descripttion:"<transition>用作单个元素/组件的过渡效果。 <transition>仅将过渡行为应用于内部的包装内容；它不会呈现额外的DOM元素，也不会显示在检查的组件层次结构中."}]},{title:"Transitiongroup",isCompoents:"Transitiongroup",link:"https://v3.vuejs.org/api/built-in-components.html#transition-group",apiList:[]},{title:"Keepalive",isCompoents:"Keepalive",link:"https://v3.vuejs.org/api/built-in-components.html#keep-alive",apiList:[]},{title:"Slot",isCompoents:"Slot",link:"https://v3.vuejs.org/api/built-in-components.html#slot",apiList:[]},{title:"Teleport",isCompoents:"Teleport",link:"https://v3.vuejs.org/api/built-in-components.html#teleport",apiList:[]}]});return t(e)},x=({item:e})=>{const i=n({name:e.title,extra:e.link,apiList:e.apiList});return t(i)};var v={props:{item:Object},setup:(e,t)=>({...x(e)})};const g={class:"code"},b=l("br",null,null,-1),h={key:1,class:"eug-api-descripttion eug-api-box"};v.render=function(e,t,n,u,d,m){const x=i("eug-card");return s(),a(x,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{content:o(()=>[(s(!0),a(r,null,p(e.apiList,e=>(s(),a("div",{key:e.apiTitle,class:"eug-api-box"},[l("span",g,c(e.apiTitle),1),b,Array.isArray(e.descripttion)?(s(!0),a(r,{key:0},p(e.descripttion,e=>(s(),a("p",{class:"eug-api-descripttion eug-api-box",key:e},[l("i",null,c(e),1)]))),128)):(s(),a("p",h,[l("i",null,c(e.descripttion),1)]))]))),128))]),_:1},8,["header","extra"])},v.__file="src/views/pages/Built-In-Components/Component/index.vue";const T=({item:e})=>{const i=n({name:e.title,extra:e.link,apiList:e.apiList});return t(i)};var f={props:{item:Object},setup:(e,t)=>({...T(e)})};const L={class:"code"},k=l("br",null,null,-1),y={key:1,class:"eug-api-descripttion eug-api-box"};f.render=function(e,t,n,u,d,m){const x=i("eug-card");return s(),a(x,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{content:o(()=>[(s(!0),a(r,null,p(e.apiList,e=>(s(),a("div",{key:e.apiTitle,class:"eug-api-box"},[l("span",L,c(e.apiTitle),1),k,Array.isArray(e.descripttion)?(s(!0),a(r,{key:0},p(e.descripttion,e=>(s(),a("p",{class:"eug-api-descripttion eug-api-box",key:e},[l("i",null,c(e),1)]))),128)):(s(),a("p",y,[l("i",null,c(e.descripttion),1)]))]))),128))]),_:1},8,["header","extra"])},f.__file="src/views/pages/Built-In-Components/Transition/index.vue";const w=({item:e})=>{const i=n({name:e.title,extra:e.link,apiList:e.apiList});return t(i)};var C={props:{item:Object},setup:(e,t)=>({...w(e)})};const _={class:"code"},j=l("br",null,null,-1),E={class:"eug-api-descripttion eug-api-box"};C.render=function(e,t,n,u,d,m){const x=i("eug-card");return s(),a(x,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{content:o(()=>[(s(!0),a(r,null,p(e.apiList,e=>(s(),a("div",{key:e.apiTitle,class:"eug-api-box"},[l("span",_,c(e.apiTitle),1),j,l("p",E,[l("i",null,c(e.descripttion),1)])]))),128))]),_:1},8,["header","extra"])},C.__file="src/views/pages/Built-In-Components/Transition-group/index.vue";const H=({item:e})=>{const i=n({name:e.title,extra:e.link,apiList:e.apiList});return t(i)};var I={props:{item:Object},setup:(e,t)=>({...H(e)})};const B={class:"code"},O=l("br",null,null,-1),A={class:"eug-api-descripttion eug-api-box"};I.render=function(e,t,n,u,d,m){const x=i("eug-card");return s(),a(x,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{content:o(()=>[(s(!0),a(r,null,p(e.apiList,e=>(s(),a("div",{key:e.apiTitle,class:"eug-api-box"},[l("span",B,c(e.apiTitle),1),O,l("p",A,[l("i",null,c(e.descripttion),1)])]))),128))]),_:1},8,["header","extra"])},I.__file="src/views/pages/Built-In-Components/Keep-alive/index.vue";const K=({item:e})=>{const i=n({name:e.title,extra:e.link,apiList:e.apiList});return t(i)};var M={props:{item:Object},setup:(e,t)=>({...K(e)})};const S={class:"code"},F=l("br",null,null,-1),P={class:"eug-api-descripttion eug-api-box"};M.render=function(e,t,n,u,d,m){const x=i("eug-card");return s(),a(x,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{content:o(()=>[(s(!0),a(r,null,p(e.apiList,e=>(s(),a("div",{key:e.apiTitle,class:"eug-api-box"},[l("span",S,c(e.apiTitle),1),F,l("p",P,[l("i",null,c(e.descripttion),1)])]))),128))]),_:1},8,["header","extra"])},M.__file="src/views/pages/Built-In-Components/Slot/index.vue";const U=({item:e})=>{const i=n({name:e.title,extra:e.link,apiList:e.apiList});return t(i)};var D={props:{item:Object},setup:(e,t)=>({...U(e)})};const $={class:"code"},q=l("br",null,null,-1),z={class:"eug-api-descripttion eug-api-box"};D.render=function(e,t,n,u,d,m){const x=i("eug-card");return s(),a(x,{showHeader:"",header:e.name,bordered:"",hoverable:"",showExtra:"",extra:e.extra},{content:o(()=>[(s(!0),a(r,null,p(e.apiList,e=>(s(),a("div",{key:e.apiTitle,class:"eug-api-box"},[l("span",$,c(e.apiTitle),1),q,l("p",z,[l("i",null,c(e.descripttion),1)])]))),128))]),_:1},8,["header","extra"])},D.__file="src/views/pages/Built-In-Components/Teleport/index.vue";var G=u({components:{Component:v,Transition:f,Transitiongroup:C,Keepalive:I,Slot:M,Teleport:D},setup:()=>({...m()})});G.render=function(e,t,n,l,c,u){const m=i("eug-card");return s(),a(m,{showHeader:"",showExtra:"",extra:e.extra,header:e.name},{content:o(()=>[(s(!0),a(r,null,p(e.itemList,e=>(s(),a(d(e.isCompoents),{item:e,key:e.title},null,8,["item"]))),128))]),_:1},8,["extra","header"])},G.__file="src/views/pages/Built-In-Components/index.vue";export default G;