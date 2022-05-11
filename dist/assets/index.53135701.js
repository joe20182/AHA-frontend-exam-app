import{s as a,b,r as l,d as n,j as t}from"./vendor.30e5d29b.js";import{I as v,P as f}from"./index.63208e1c.js";import{B as y}from"./index.4131c263.js";const k=a.div`
  .keyword-input {
    margin-bottom: 28px;
  }
  ${({theme:e})=>e.breakpoints.up("sm")} {
    padding-top: 54px;
  }
`,w=a.div`
  ${({theme:e})=>e.breakpoints.up("sm")} {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 32px;
  }
`,u=a.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 16px;
  ${({theme:e})=>e.breakpoints.up("sm")} {
    margin: 0 0 20px;
  }
`,S=a.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 209px;
  ${({theme:e})=>e.breakpoints.up("sm")} {
    padding-bottom: 28px;
  }
`,P=a.div`
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
  h4 {
    font-size: 48px;
    font-weight: 700;
    margin: 0 10px 0 0;
  }
  ${({theme:e})=>e.breakpoints.up("sm")} {
    margin-bottom: 14px;
  }
`,$=a.div`
  padding-top: 80px;
  ${({theme:e})=>e.breakpoints.up("sm")} {
    padding-top: 335px;
  }
`,C=a.h4`
  line-height: 1;
`,H=()=>{const e=b(),[i,c]=l.exports.useState(""),[s,h]=l.exports.useState(3),m=async()=>{e.push(`/result?page=1&pageSize=${p(s)}&keyword=${i}`)},g=(r,d)=>{h(d)},p=r=>{var o;return(o=[{index:1,value:3},{index:2,value:6},{index:3,value:9},{index:4,value:12},{index:5,value:15},{index:6,value:50}].find(x=>x.index===r))==null?void 0:o.value};return n(k,{children:[n(w,{className:"search-wrapper",children:[t(u,{children:"Search"}),t(v,{placeholder:"Keyword",fullWidth:!0,className:"keyword-input",value:i,onChange:r=>{c(r.target.value)}})]}),n(S,{children:[t(u,{children:"# Of Results Per Page"}),n(P,{children:[t(C,{children:p(s)}),t("span",{children:"results"})]}),t(f,{value:s,onChange:g})]}),t($,{children:t(y,{size:"large",onClick:()=>m(),fullWidth:!0,children:"SEARCH"})})]})};export{H as default};
