import{s as b,e as m,i as g,d as q,A as S,o as I}from"../chunks/scheduler.a7e79a28.js";import{S as P,i as $,a as i,t as f,c as k,b as w,d as B,m as L,e as O,g as R}from"../chunks/index.ef959f59.js";import{p as D}from"../chunks/stores.7d511bb7.js";import{P as v}from"../chunks/PathLevelInfoBox.df708c06.js";import{p as A,m as C,h as M}from"../chunks/tree-loading.ec6f9638.js";function c(n){let t,a;return t=new v({props:{path:n[4],weightedRoot:n[3],specBaselineOptions:n[2],attributeLabels:n[0],qcSpec:n[1],rootId:n[5],levelOfDetail:1}}),{c(){w(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,o){L(t,e,o),a=!0},p(e,o){const s={};o&8&&(s.weightedRoot=e[3]),o&4&&(s.specBaselineOptions=e[2]),o&1&&(s.attributeLabels=e[0]),o&2&&(s.qcSpec=e[1]),t.$set(s)},i(e){a||(i(t.$$.fragment,e),a=!0)},o(e){f(t.$$.fragment,e),a=!1},d(e){O(t,e)}}}function N(n){let t,a,e=n[1]!=null&&n[3]!=null&&n[2]!=null&&n[0]!=null&&c(n);return{c(){e&&e.c(),t=m()},l(o){e&&e.l(o),t=m()},m(o,s){e&&e.m(o,s),g(o,t,s),a=!0},p(o,[s]){o[1]!=null&&o[3]!=null&&o[2]!=null&&o[0]!=null?e?(e.p(o,s),s&15&&i(e,1)):(e=c(o),e.c(),i(e,1),e.m(t.parentNode,t)):e&&(R(),f(e,1,1,()=>{e=null}),k())},i(o){a||(i(e),a=!0)},o(o){f(e),a=!1},d(o){o&&q(t),e&&e.d(o)}}}function T(n,t,a){let e;S(n,D,r=>a(6,e=r));let o,s,l,p,d=A(e.params.pathDesc),u=e.params.rootId;return I(()=>{C().then(([r,_,h])=>{a(0,o=r),a(2,l=h),a(1,s=_[e.params.qcId])}),M(`qc-builds/${e.params.qcId}/${u}`,r=>{a(3,p=r)})}),[o,s,l,p,d,u]}class H extends P{constructor(t){super(),$(this,t,T,N,b,{})}}export{H as component};
