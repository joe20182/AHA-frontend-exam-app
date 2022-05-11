import{s as t,b as r,j as e,r as a,i as x,C as l}from"./vendor.b90f2842.js";import{u as c}from"./index.7082981a.js";const g=t.div`
  padding: 20px 0 0;
  ${({theme:s})=>s.breakpoints.up("sm")} {
    padding: 80px 127px 0;
  }
`,h=t.h3`
  font-size: 24px;
  margin: 0 0 24px;
  font-weight: 400;
  ${({theme:s})=>s.breakpoints.up("sm")} {
    font-size: 30px;
  }
`,m=t.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 0 5px;
  ${({theme:s})=>s.breakpoints.up("sm")} {
    padding: 0;
  }
`,f=t.div`
  border-radius: 10px;
  /* margin-bottom: 24px; */
  /* margin-right: 24px; */
  ${({theme:s})=>s.breakpoints.up("sm")} {
    margin-bottom: 10px;
  }
`,u=t.div`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.06);
  margin-bottom: 10px;
  border-radius: 10px;
  position: relative;
`,b=t.span`
  font-size: 24px;
  font-weight: 700;
  border: 4px solid #fff;
  border-radius: 8px;
  position: absolute;
  left: 10px;
  bottom: 14px;
  padding: 3px 14px;
  max-width: 135px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,w=t.div`
  font-size: 15px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,T=t.div`
  font-size: 12px;
  color: #b2b2b2;
`,v=({name:s,count:i})=>r(f,{children:[e(u,{children:e(b,{children:s})}),e(w,{children:s}),r(T,{children:[i," Results"]})]}),A=()=>{const[s,i]=a.exports.useState([]),{sendRequest:n,isLoading:p}=c({url:"/tags"});a.exports.useEffect(()=>{d()},[]);const d=async()=>{const o=await n({});o&&i(o)};return r(g,{children:[e(x,{open:p,sx:{zIndex:1},children:e(l,{color:"inherit"})}),e(h,{children:"Tags"}),e(m,{children:s.map(o=>e(v,{name:o.name,count:o.count},o.id))})]})};export{A as default};
