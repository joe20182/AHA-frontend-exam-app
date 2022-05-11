var G=Object.defineProperty,Q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var L=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&L(e,o,t[o]);if(b)for(var o of b(t))S.call(t,o)&&L(e,o,t[o]);return e},m=(e,t)=>Q(e,K(t));var E=(e,t)=>{var o={};for(var n in e)R.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&b)for(var n of b(e))t.indexOf(n)<0&&S.call(e,n)&&(o[n]=e[n]);return o};import{c as X,a as Y,r as l,s as c,j as s,u as y,b as F,m as Z,d as u,F as U,e as I,f as w,g as J,B as ee,h as N,i as te,k as oe,C as re,l as ne,n as se,R as ae,o as ie,T as ce,p as le,S as de,q as ue,P as pe,t as ge}from"./vendor.30e5d29b.js";const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};he();const me=0,fe=X({name:"count",initialState:me,reducers:{increment:e=>(e+=1,e),decrement:e=>(e-=1,e),incrementByAmount:(e,t)=>(e+=t.payload,e)}});var xe=fe.reducer;const be=Y({reducer:{count:xe}}),ve="modulepreload",B={},Ae="/",v=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${Ae}${n}`,n in B)return;B[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":ve,r||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),r)return new Promise((f,p)=>{i.addEventListener("load",f),i.addEventListener("error",p)})})).then(()=>t())},W=[{path:"/",exact:!0,component:l.exports.lazy(()=>v(()=>import("./index.95e9c18c.js"),["assets/index.95e9c18c.js","assets/vendor.30e5d29b.js","assets/index.63208e1c.js"]))},{path:"/result",component:l.exports.lazy(()=>v(()=>import("./index.6e2fd72d.js"),["assets/index.6e2fd72d.js","assets/vendor.30e5d29b.js"]))},{path:"/tags",component:l.exports.lazy(()=>v(()=>import("./index.86941012.js"),["assets/index.86941012.js","assets/vendor.30e5d29b.js"]))},{path:"/UIDemo",component:l.exports.lazy(()=>v(()=>import("./MUIDemo.9b582399.js"),["assets/MUIDemo.9b582399.js","assets/index.63208e1c.js","assets/vendor.30e5d29b.js"]))}],ye=c.div`
  font-size: 13px;
  font-weight: 700;
  background: -webkit-linear-gradient(270deg, #ffd25f, #ff5c01);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,D=()=>s(ye,{children:"LOGO"});var ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAYAAADwza0nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABKSURBVHgB7dSxDQAgCERR4gSO4KaO4AiO5AiOcmLUxgqx0vATCooXOoiEAQg8kU6aqGKUNahXeLyhDxDn6CbtVcNPY9nr2HBaewPdOZzg6WDw4QAAAABJRU5ErkJggg==";const we=c.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 21px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #181818;
`,Fe=c.div`
  font-size: 24px;
`,Ce=c.img`
  margin-right: 19px;
`,Pe=()=>{const e=y(),t=F(),[o,n]=l.exports.useState(!0);return l.exports.useEffect(()=>{const i=Z(W,"/")[0].route.path===e.pathname;n(i)},[e]),u(we,{children:[o&&s(D,{}),o||u(U,{children:[s(Ce,{src:ke,onClick:()=>{t.push("/")}}),s(Fe,{children:"Home Page"})]})]})},Le=c.div`
  position: fixed;
  width: 100%;
  height: 66px;
  left: 0;
  bottom: 0;
  background: rgba(24, 24, 24, 0.2);
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(54.3656px);
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    margin: 0 27px;
  }
`,Re=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    display: ${({notice:e})=>e?"block":"none"};
    width: 6px;
    height: 6px;
    background-color: #00d1ff;
    position: absolute;
    top: -6px;
    right: 0px;
    border-radius: 50%;
  }
`,Se=c.div`
  font-size: 12px;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
`,A=n=>{var r=n,{active:e,name:t}=r,o=E(r,["active","name"]);const a=I(),i=w(a.breakpoints.up("sm"));return u(Re,m(h({},o),{children:[s("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.34146 0.00012207C5.51304 0.00012207 4.84146 0.671695 4.84146 1.50012C4.84146 2.32855 5.51304 3.00012 6.34146 3.00012H16.7578V12.4235C16.7578 13.2519 17.4294 13.9235 18.2578 13.9235C19.0863 13.9235 19.7578 13.2519 19.7578 12.4235V2.50012C19.7578 1.11941 18.6386 0.00012207 17.2578 0.00012207H6.34146ZM1 4.91476H14.122C14.6742 4.91476 15.122 5.36247 15.122 5.91476V19.0367C15.122 19.589 14.6742 20.0367 14.122 20.0367H1C0.447715 20.0367 0 19.589 0 19.0367V5.91476C0 5.36247 0.447715 4.91476 1 4.91476Z",fill:e?"#FFF":"#6A6A6A"})}),i&&s(Se,{className:e?"active":"",children:t})]}))},Ee=()=>{const e=y(),t=F(),o=n=>{t.push(n)};return u(Le,{children:[s(A,{name:"Home",active:e.pathname==="/"||e.pathname==="/result",onClick:()=>o("/")}),s(A,{name:"Tags",active:e.pathname==="/tags",onClick:()=>o("/tags")})]})},Be=c.div`
  width: 80px;
  min-height: 100vh;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
`,_e=c.div`
  padding-top: 43px;
  > div {
    margin-bottom: 24px;
  }
`,He=()=>{const e=y(),t=F(),o=n=>{t.push(n)};return u(Be,{children:[s(D,{}),u(_e,{children:[s(A,{active:e.pathname==="/"||e.pathname==="/result",name:"Home",onClick:()=>o("/")}),s(A,{active:e.pathname==="/tags",name:"Tags",onClick:()=>o("/tags"),notice:e.pathname==="/"||e.pathname==="/result"})]})]})},Oe=c.div`
  width: 375px;
  background-color: #1b1b1b;
  position: fixed;
  top: 0;
  right: 0;
  .follow-spinner {
    position: absolute;
    z-index: 9;
  }
`,Te=c.div`
  display: flex;
`,_=c.div`
  flex: 1;
  padding: 32px 0 8px;
  cursor: pointer;
  text-align: center;
  color: #929292;
  border-bottom: 2px solid #1f1f1f;
  transition: 0.3s;
  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`,Ue=c.div`
  padding: 32px 16px 0;
  height: calc(100vh - 70px);
  overflow-y: auto;
`,Ie=c.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  button {
    margin-left: auto;
  }
`,Ne=c.div`
  width: 40px;
  height: 40px;
  border: 1px solid #f8f8f8;
  border-radius: 5px;
  margin-right: 15px;
  background-image: url('https://avatars.githubusercontent.com/u/35068498?v=4');
  background-size: cover;
`,We=c.div`
  font-size: 14px;
  opacity: 0.5;
`,De=c.div``,Me=c.div``,ze=c.div`
  font-size: 12px;
  opacity: 0.5;
  text-align: center;
  cursor: pointer;
`,$e={maxWidth:"100%",backgroundColor:"#FFF",borderRadius:"4px",fontWeight:700,border:"1px solid #FFF"};var Ve=J(ee)(({variant:e,size:t,theme:o})=>m(h({},$e),{textTransform:"none",color:e==="outlined"?"#FFF":"#121212",backgroundColor:e==="outlined"?"#121212":"#FFF",fontSize:t==="large"?14:12,height:t==="large"?40:28,borderRadius:t==="large"?4:20,"&:hover":{backgroundColor:e==="outlined"?"#FFF":"#121212",color:e==="outlined"?"#121212":"#FFF",border:"1px solid #FFF"},[o.breakpoints.up("sm")]:{maxWidth:t==="large"?343:"auto"}}));const qe=({name:e,username:t,isFollowing:o})=>u(Ie,{children:[s(Ne,{}),u(De,{children:[s(Me,{children:e}),u(We,{children:["@",t]})]}),s(Ve,{variant:o?"contained":"outlined",children:o?"Following":"Follow"})]}),H=({list:e,onScrollEnd:t,hasMore:o})=>{const n=l.exports.useRef(null),r=l.exports.useCallback(a=>{a[0].isIntersecting&&t()},[]);return l.exports.useEffect(()=>{const a={root:null,rootMargin:"20px",threshold:0},i=new IntersectionObserver(r,a);n.current&&i.observe(n.current)},[r]),u(U,{children:[e.map(a=>s(qe,{name:a.name,username:a.username,isFollowing:a.isFollowing},a.id)),o&&s(ze,{ref:n,onClick:t,children:"load more"})]})};N.defaults.baseURL="https://avl-frontend-exam.herokuapp.com/api";const O=e=>{const[t,o]=l.exports.useState(!1),[n,r]=l.exports.useState(null),{enqueueSnackbar:a}=te();return{isLoading:t,error:n,sendRequest:async f=>{o(!0);try{const p=await N({url:e.url,method:e.method||"GET",headers:{},data:f.data||null,params:f.params||null});if(p.data)return r(null),p.data;console.log(99999,p)}catch(p){console.log("ERR",p);let x="Unknown Error";p instanceof Error&&(x=p.message),r(x||"Something went wrong!"),a(x,{variant:"error"})}finally{o(!1)}}}},je=()=>{const[e,t]=l.exports.useState(1),[o,n]=l.exports.useState([]),[r,a]=l.exports.useState({current:0,totalPages:1}),{sendRequest:i,isLoading:f}=O({url:"/users/all"}),[p,x]=l.exports.useState([]),[g,C]=l.exports.useState({current:0,totalPages:1}),{sendRequest:M,isLoading:z}=O({url:"/users/friends"});l.exports.useEffect(()=>{!r.current||r.current>r.totalPages||$()},[r.current]),l.exports.useEffect(()=>{!g.current||g.current>g.totalPages||V()},[g.current]);const $=async()=>{const d=await i({params:{page:r.current,pageSize:20}});d&&(n([...o,...d.data]),a(k=>m(h({},k),{totalPages:d.totalPages})))},V=async()=>{const d=await M({params:{page:g.current,pageSize:20}});d&&(x([...p,...d.data]),C(k=>m(h({},k),{totalPages:d.totalPages})))},P=d=>{t(d)},q=()=>{r.current>r.totalPages||a(d=>m(h({},d),{current:d.current+1}))},j=()=>{g.current>g.totalPages||C(d=>m(h({},d),{current:d.current+1}))};return u(Oe,{children:[s(oe,{className:"follow-spinner",open:f||z,children:s(re,{color:"inherit"})}),u(Te,{children:[s(_,{className:e===1?"active":"",onClick:()=>P(1),children:"Followers"}),s(_,{className:e===2?"active":"",onClick:()=>P(2),children:"Following"})]}),u(Ue,{children:[e===1&&s(H,{list:o,onScrollEnd:q,hasMore:r.current<=r.totalPages}),e===2&&s(H,{list:p,onScrollEnd:j,hasMore:g.current<=g.totalPages})]})]})},Ge=c.div`
  display: flex;
  justify-content: space-between;
  flex-direction: 'column';
  overflow-x: hidden;
  padding-bottom: '66px';
  ${({theme:e})=>e.breakpoints.up("sm")} {
    flex-direction: 'row';
    padding-bottom: 0;
  }
`,Qe=c.div`
  padding: 70px 20px 100px;
  flex: 1;
  ${({theme:e})=>e.breakpoints.up("sm")} {
    /* padding: 0 130px; */
    padding: ${({showFollowers:e})=>`0 ${e?505:130}px 0 130px`};
  }
`,Ke=({children:e})=>{const t=y(),o=I(),n=w(o.breakpoints.up("sm")),r=w(o.breakpoints.up("lg"))&&t.pathname!=="/tags";return u(Ge,{children:[n||s(Pe,{}),n&&s(He,{}),s(Qe,{showFollowers:r,children:e}),n||t.pathname==="/"&&s(Ee,{}),r&&s(je,{})]})};function Xe(){return s(Ke,{children:s(l.exports.Suspense,{fallback:s("div",{children:"Loading"}),children:ne(W)})})}const T=se({breakpoints:{values:{xs:0,sm:600,md:900,lg:1440,xl:1536}},typography:{fontFamily:["Ubuntu","Roboto","Helvetica","Arial","sans-serif"].join(",")},palette:{background:{default:"#181818"},text:{primary:"#FFF"},primary:{main:"#FF9B33"}}});ae.render(s(ie.StrictMode,{children:s(ce,{theme:T,children:s(le,{theme:T,children:u(de,{maxSnack:3,autoHideDuration:3e3,children:[s(ue,{}),s(pe,{store:be,children:s(ge,{children:s(Xe,{})})})]})})})}),document.getElementById("root"));export{Ve as B,ke as a,O as u};
