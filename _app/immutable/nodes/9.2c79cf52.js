import{s as h,e as m,i as _,d as b,K as g,o as P}from"../chunks/scheduler.2d1c82f4.js";import{S as q,i as S,a as i,t as l,c as I,b as k,d as w,m as L,e as $,g as R}from"../chunks/index.bf293594.js";import{p as B}from"../chunks/stores.9ab44733.js";import{P as C}from"../chunks/PathLevelInfoBox.d0ec457a.js";import{a as K,e as M}from"../chunks/tree-functions.2607c0ac.js";function d(a){let n,t;return n=new C({props:{path:a[3],weightedRoot:a[2],attributeLabels:a[0],qcSpec:a[1],rootId:a[4]}}),{c(){k(n.$$.fragment)},l(e){w(n.$$.fragment,e)},m(e,o){L(n,e,o),t=!0},p(e,o){const r={};o&8&&(r.path=e[3]),o&4&&(r.weightedRoot=e[2]),o&1&&(r.attributeLabels=e[0]),o&2&&(r.qcSpec=e[1]),o&16&&(r.rootId=e[4]),n.$set(r)},i(e){t||(i(n.$$.fragment,e),t=!0)},o(e){l(n.$$.fragment,e),t=!1},d(e){$(n,e)}}}function N(a){let n,t,e=a[3]!=null&&a[4]!=null&&a[1]!=null&&a[2]!=null&&a[0]!=null&&d(a);return{c(){e&&e.c(),n=m()},l(o){e&&e.l(o),n=m()},m(o,r){e&&e.m(o,r),_(o,n,r),t=!0},p(o,[r]){o[3]!=null&&o[4]!=null&&o[1]!=null&&o[2]!=null&&o[0]!=null?e?(e.p(o,r),r&31&&i(e,1)):(e=d(o),e.c(),i(e,1),e.m(n.parentNode,n)):e&&(R(),l(e,1,1,()=>{e=null}),I())},i(o){t||(i(e),t=!0)},o(o){l(e),t=!1},d(o){o&&b(n),e&&e.d(o)}}}function T(a,n,t){let e;g(a,B,s=>t(5,e=s));let o,r,u,p,f;return P(()=>{mainPreload().then(([s,c])=>{t(0,o=s),t(1,r=c[e.params.qcId])}),t(4,f=e.url.searchParams.get("r")),f!=null&&K(`qc-builds/${e.params.qcId}/${f}`,s=>{t(2,u=s)}),t(3,p=M(e.url.searchParams.get("p")||""))}),[o,r,u,p,f]}class F extends q{constructor(n){super(),S(this,n,T,N,h,{})}}export{F as component};
