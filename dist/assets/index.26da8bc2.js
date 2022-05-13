var G=Object.defineProperty,Q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))R.call(t,o)&&P(e,o,t[o]);if(b)for(var o of b(t))E.call(t,o)&&P(e,o,t[o]);return e},m=(e,t)=>Q(e,K(t));var S=(e,t)=>{var o={};for(var n in e)R.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&b)for(var n of b(e))t.indexOf(n)<0&&E.call(e,n)&&(o[n]=e[n]);return o};import{r as c,s as l,j as s,u as k,a as F,m as X,b as u,F as U,c as I,d as y,e as Y,B as Z,f as M,g as J,h as ee,C as te,i as oe,k as re,R as ne,l as se,T as ae,n as ie,S as le,o as ce,p as de}from"./vendor.dc166aa9.js";const ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};ue();const pe="modulepreload",B={},ge="/",v=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${ge}${n}`,n in B)return;B[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":pe,r||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),r)return new Promise((f,p)=>{i.addEventListener("load",f),i.addEventListener("error",p)})})).then(()=>t())},N=[{path:"/",exact:!0,component:c.exports.lazy(()=>v(()=>import("./index.75bc3ce9.js"),["assets/index.75bc3ce9.js","assets/vendor.dc166aa9.js","assets/index.c3ecbb16.js"]))},{path:"/result",component:c.exports.lazy(()=>v(()=>import("./index.1256a108.js"),["assets/index.1256a108.js","assets/vendor.dc166aa9.js"]))},{path:"/tags",component:c.exports.lazy(()=>v(()=>import("./index.fe7cf27a.js"),["assets/index.fe7cf27a.js","assets/vendor.dc166aa9.js"]))},{path:"/UIDemo",component:c.exports.lazy(()=>v(()=>import("./MUIDemo.8d018f7b.js"),["assets/MUIDemo.8d018f7b.js","assets/index.c3ecbb16.js","assets/vendor.dc166aa9.js"]))}],he=l.div`
  font-size: 13px;
  font-weight: 700;
  background: -webkit-linear-gradient(270deg, #ffd25f, #ff5c01);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,W=()=>s(he,{children:"LOGO"});var me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAYAAADwza0nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABKSURBVHgB7dSxDQAgCERR4gSO4KaO4AiO5AiOcmLUxgqx0vATCooXOoiEAQg8kU6aqGKUNahXeLyhDxDn6CbtVcNPY9nr2HBaewPdOZzg6WDw4QAAAABJRU5ErkJggg==";const fe=l.div`
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
`,xe=l.div`
  font-size: 24px;
`,be=l.img`
  margin-right: 19px;
`,ve=()=>{const e=k(),t=F(),[o,n]=c.exports.useState(!0);return c.exports.useEffect(()=>{const i=X(N,"/")[0].route.path===e.pathname;n(i)},[e]),u(fe,{children:[o&&s(W,{}),o||u(U,{children:[s(be,{src:me,onClick:()=>{t.push("/")}}),s(xe,{children:"Home Page"})]})]})},Ae=l.div`
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
`,ke=l.div`
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
`,we=l.div`
  font-size: 12px;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
`,A=n=>{var r=n,{active:e,name:t}=r,o=S(r,["active","name"]);const a=I(),i=y(a.breakpoints.up("sm"));return u(ke,m(h({},o),{children:[s("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.34146 0.00012207C5.51304 0.00012207 4.84146 0.671695 4.84146 1.50012C4.84146 2.32855 5.51304 3.00012 6.34146 3.00012H16.7578V12.4235C16.7578 13.2519 17.4294 13.9235 18.2578 13.9235C19.0863 13.9235 19.7578 13.2519 19.7578 12.4235V2.50012C19.7578 1.11941 18.6386 0.00012207 17.2578 0.00012207H6.34146ZM1 4.91476H14.122C14.6742 4.91476 15.122 5.36247 15.122 5.91476V19.0367C15.122 19.589 14.6742 20.0367 14.122 20.0367H1C0.447715 20.0367 0 19.589 0 19.0367V5.91476C0 5.36247 0.447715 4.91476 1 4.91476Z",fill:e?"#FFF":"#6A6A6A"})}),i&&s(we,{className:e?"active":"",children:t})]}))},ye=()=>{const e=k(),t=F(),o=n=>{t.push(n)};return u(Ae,{children:[s(A,{name:"Home",active:e.pathname==="/"||e.pathname==="/result",onClick:()=>o("/")}),s(A,{name:"Tags",active:e.pathname==="/tags",onClick:()=>o("/tags")})]})},Fe=l.div`
  width: 80px;
  min-height: 100vh;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
`,Ce=l.div`
  padding-top: 43px;
  > div {
    margin-bottom: 24px;
  }
`,Le=()=>{const e=k(),t=F(),o=n=>{t.push(n)};return u(Fe,{children:[s(W,{}),u(Ce,{children:[s(A,{active:e.pathname==="/"||e.pathname==="/result",name:"Home",onClick:()=>o("/")}),s(A,{active:e.pathname==="/tags",name:"Tags",onClick:()=>o("/tags"),notice:e.pathname==="/"||e.pathname==="/result"})]})]})},Pe=l.div`
  width: 375px;
  background-color: #1b1b1b;
  position: fixed;
  top: 0;
  right: 0;
  .follow-spinner {
    position: absolute;
    z-index: 9;
  }
`,Re=l.div`
  display: flex;
`,O=l.div`
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
`,Ee=l.div`
  padding: 32px 16px 0;
  height: calc(100vh - 70px);
  overflow-y: auto;
`,Se=l.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  button {
    margin-left: auto;
  }
`,Be=l.div`
  width: 40px;
  height: 40px;
  border: 1px solid #f8f8f8;
  border-radius: 5px;
  margin-right: 15px;
  background-image: url('https://avatars.githubusercontent.com/u/35068498?v=4');
  background-size: cover;
`,Oe=l.div`
  font-size: 14px;
  opacity: 0.5;
`,_e=l.div``,He=l.div``,Te=l.div`
  font-size: 12px;
  opacity: 0.5;
  text-align: center;
  cursor: pointer;
`,Ue={maxWidth:"100%",backgroundColor:"#FFF",borderRadius:"4px",fontWeight:700,border:"1px solid #FFF"};var Ie=Y(Z)(({variant:e,size:t,theme:o})=>m(h({},Ue),{textTransform:"none",color:e==="outlined"?"#FFF":"#121212",backgroundColor:e==="outlined"?"#121212":"#FFF",fontSize:t==="large"?14:12,height:t==="large"?40:28,borderRadius:t==="large"?4:20,"&:hover":{backgroundColor:e==="outlined"?"#FFF":"#121212",color:e==="outlined"?"#121212":"#FFF",border:"1px solid #FFF"},[o.breakpoints.up("sm")]:{maxWidth:t==="large"?343:"auto"}}));const Me=({name:e,username:t,isFollowing:o})=>u(Se,{children:[s(Be,{}),u(_e,{children:[s(He,{children:e}),u(Oe,{children:["@",t]})]}),s(Ie,{variant:o?"contained":"outlined",children:o?"Following":"Follow"})]}),_=({list:e,onScrollEnd:t,hasMore:o})=>{const n=c.exports.useRef(null),r=c.exports.useCallback(a=>{a[0].isIntersecting&&t()},[]);return c.exports.useEffect(()=>{const a={root:null,rootMargin:"20px",threshold:0},i=new IntersectionObserver(r,a);n.current&&i.observe(n.current)},[r]),u(U,{children:[e.map(a=>s(Me,{name:a.name,username:a.username,isFollowing:a.isFollowing},a.id)),o&&s(Te,{ref:n,onClick:t,children:"load more"})]})};M.defaults.baseURL="https://avl-frontend-exam.herokuapp.com/api";const H=e=>{const[t,o]=c.exports.useState(!1),[n,r]=c.exports.useState(null),{enqueueSnackbar:a}=J();return{isLoading:t,error:n,sendRequest:async f=>{o(!0);try{const p=await M({url:e.url,method:e.method||"GET",headers:{},data:f.data||null,params:f.params||null});if(p.data)return r(null),p.data;console.log(99999,p)}catch(p){console.log("ERR",p);let x="Unknown Error";p instanceof Error&&(x=p.message),r(x||"Something went wrong!"),a(x,{variant:"error"})}finally{o(!1)}}}},Ne=()=>{const[e,t]=c.exports.useState(1),[o,n]=c.exports.useState([]),[r,a]=c.exports.useState({current:0,totalPages:1}),{sendRequest:i,isLoading:f}=H({url:"/users/all"}),[p,x]=c.exports.useState([]),[g,C]=c.exports.useState({current:0,totalPages:1}),{sendRequest:D,isLoading:z}=H({url:"/users/friends"});c.exports.useEffect(()=>{!r.current||r.current>r.totalPages||$()},[r.current]),c.exports.useEffect(()=>{!g.current||g.current>g.totalPages||V()},[g.current]);const $=async()=>{const d=await i({params:{page:r.current,pageSize:20}});d&&(n([...o,...d.data]),a(w=>m(h({},w),{totalPages:d.totalPages})))},V=async()=>{const d=await D({params:{page:g.current,pageSize:20}});d&&(x([...p,...d.data]),C(w=>m(h({},w),{totalPages:d.totalPages})))},L=d=>{t(d)},q=()=>{r.current>r.totalPages||a(d=>m(h({},d),{current:d.current+1}))},j=()=>{g.current>g.totalPages||C(d=>m(h({},d),{current:d.current+1}))};return u(Pe,{children:[s(ee,{className:"follow-spinner",open:f||z,children:s(te,{color:"inherit"})}),u(Re,{children:[s(O,{className:e===1?"active":"",onClick:()=>L(1),children:"Followers"}),s(O,{className:e===2?"active":"",onClick:()=>L(2),children:"Following"})]}),u(Ee,{children:[e===1&&s(_,{list:o,onScrollEnd:q,hasMore:r.current<=r.totalPages}),e===2&&s(_,{list:p,onScrollEnd:j,hasMore:g.current<=g.totalPages})]})]})},We=l.div`
  display: flex;
  justify-content: space-between;
  flex-direction: 'column';
  overflow-x: hidden;
  padding-bottom: '66px';
  ${({theme:e})=>e.breakpoints.up("sm")} {
    flex-direction: 'row';
    padding-bottom: 0;
  }
`,De=l.div`
  padding: 70px 20px 100px;
  flex: 1;
  ${({theme:e})=>e.breakpoints.up("sm")} {
    /* padding: 0 130px; */
    padding: ${({showFollowers:e})=>`0 ${e?505:130}px 0 130px`};
  }
`,ze=({children:e})=>{const t=k(),o=I(),n=y(o.breakpoints.up("sm")),r=y(o.breakpoints.up("lg"))&&t.pathname!=="/tags";return u(We,{children:[n||s(ve,{}),n&&s(Le,{}),s(De,{showFollowers:r,children:e}),n||t.pathname==="/"&&s(ye,{}),r&&s(Ne,{})]})};function $e(){return s(ze,{children:s(c.exports.Suspense,{fallback:s("div",{children:"Loading"}),children:oe(N)})})}const T=re({components:{MuiCssBaseline:{styleOverrides:{"::-webkit-scrollbar":{width:"7px"},"::-webkit-scrollbar-track":{backgroundColor:"transparent"},"::-webkit-scrollbar-thumb":{backgroundColor:"#464646",borderRadius:"100px"}}}},breakpoints:{values:{xs:0,sm:600,md:900,lg:1440,xl:1536}},typography:{fontFamily:["Ubuntu","Roboto","Helvetica","Arial","sans-serif"].join(",")},palette:{background:{default:"#181818"},text:{primary:"#FFF"},primary:{main:"#FF9B33"}}});ne.render(s(se.StrictMode,{children:s(ae,{theme:T,children:s(ie,{theme:T,children:u(le,{maxSnack:3,autoHideDuration:3e3,children:[s(ce,{}),s(de,{children:s($e,{})})]})})})}),document.getElementById("root"));export{Ie as B,me as a,H as u};
