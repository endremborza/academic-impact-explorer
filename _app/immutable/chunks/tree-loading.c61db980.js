import{D as z,S as R}from"./constants.57e5e9c3.js";const J={include:[],exclude:[],limit_n:z,show_top:!0,size_base:"volume"};function Y(e,t,n,i,s,l,u){const a=x(t,n,i,(v,b)=>{const p=j(b,l);return K(t,$[p],b,e,l,u,s).specMetric}),g=[{totalNodes:1,totalWeight:t.weight}],S={name:"",weight:t.weight,isSelected:!0,children:{},childrenSumWeight:0,totalOffsetOnLevel:{weight:0,rank:0},totalOffsetAmongSiblings:{weight:0,rank:0},scaleEnds:{min:0,max:1,mid:.5},specMetric:{rawMetric:0,normalizedMetric:0}},w=v=>E(v.path.slice(0,-1),S),C=v=>v.path.slice(0,-1).join("-");for(const[v,b]of a.slice(1).entries()){const p=n[v];let O=0,o=0;const d={},c=[],m=(r,h)=>{const _=w(r),y=w(h);if((_==null?void 0:_.totalOffsetOnLevel.rank)==(y==null?void 0:y.totalOffsetOnLevel.rank)){const L=r.derivedWeight-h.derivedWeight;return L!=0?L:G(r.path)>G(h.path)?-1:1}return((_==null?void 0:_.totalOffsetOnLevel.rank)||0)-((y==null?void 0:y.totalOffsetOnLevel.rank)||0)};for(const r of b){const h=C(r);d[h]=(d[h]||0)+1,W(r,c,m)}for(const r of c){const h=w(r),_=d[C(r)];if((h==null?void 0:h.children)!=null){const y=((h==null?void 0:h.scaleEnds.max)-(h==null?void 0:h.scaleEnds.min))/(_||1),L=G(r.path),N=Object.keys(h.children).length,M=h.scaleEnds.min+(N||0)*y,D=M+y,P=p.size_base=="specialization"?{rawMetric:r.node.weight,normalizedMetric:0}:{rawMetric:0,normalizedMetric:0};h.children[L]={name:A(r.path,s,l),weight:r.derivedWeight,isSelected:T(r.path,i),children:{},childrenSumWeight:0,totalOffsetOnLevel:{weight:O,rank:o},totalOffsetAmongSiblings:{weight:h.childrenSumWeight,rank:N},scaleEnds:{min:M,max:D,mid:(D+M)/2},specMetric:P},h.childrenSumWeight+=r.derivedWeight,O+=r.derivedWeight,o+=1}}g.push({totalWeight:O,totalNodes:o})}return{tree:S,meta:g}}function x(e,t,n,i){var l,u;const s=[[{path:[],node:e,derivedWeight:0}]];e:for(let f=0;f<t.length;f++){const a=t[f];let g=a.limit_n;const S=s[f],w=[],C=new Set,v=a.size_base=="volume"?o=>o.weight:i,b=a.show_top?(o,d)=>o.derivedWeight-d.derivedWeight:(o,d)=>d.derivedWeight-o.derivedWeight,p=(o,d)=>{if(a.exclude.includes(d))return;const c=[...o.path,d],m=o.node.children[d];C.add(c.join("-")),w.push({node:m,path:c,derivedWeight:v(m,c)}),g--},O=S.filter(o=>T(o.path,n));if(O.length==0)break;s.push(w);for(const o of O)for(const d of Object.keys(((l=E(o.path,n))==null?void 0:l.children)||{}))if(p(o,d),g==0)continue e;for(const o of a.include)for(const d of O)if(Object.hasOwn(((u=d.node)==null?void 0:u.children)||{},o)&&!C.has([...d.path,o].join("-"))&&(p(d,o),g==0))continue e;for(const[o,d]of O.entries()){const c=Math.round(g/(O.length-o));if(c==0)continue;const m=[];for(const[r,h]of Object.entries(d.node.children||{})){if(a.exclude.includes(r))continue;const _=[...d.path,r];if(C.has(_.join("-")))continue;const y={node:h,path:_,derivedWeight:v(h,_)};m.length<c?W(y,m,b):b(m[0],y)<0&&(m.shift(),W(y,m,b))}m.map(r=>w.push(r)),g-=m.length}}return s}function Q(e,t,n){const i=[],s=Math.max((((e==null?void 0:e.meta)||[]).length||0)-1,1);let l=0;const u=n===void 0?t/s:t/s/2;for(let f=0;f<s;f++){const a=n==f?t/2+u:u;i.push({totalSize:a,topOffset:l}),l+=a}return i}function W(e,t,n){let i=0,s=t.length-1,l,u;for(;i<=s;){if(l=Math.floor((i+s)/2),u=n(t[l],e),u==0)return t.splice(l,0,e);u<0?i=l+1:s=l-1}t.splice(i,0,e)}function E(e,t){let n=t;for(const i of e)if(n=((n==null?void 0:n.children)||{})[i],n===void 0)return n;return n}function T(e,t){return E(e,t)!=null}function F(e){const t=[];for(const[n,i]of Object.entries(e.children||{}))return[n,...F(i)];return t}function A(e,t,n){var l;if(t===void 0)return"Loading...";const i=G(e),s=j(e,n);return((l=t[s][i])==null?void 0:l.name)||"Unknown"}function j(e,t){return t.bifurcations[e.length-1].attribute_kind}const X=e=>e.split("x");function G(e){return e[e.length-1]}const B=["i-Institution-Country-Global","i-Concept-Continent-Institution","i-Institution-Country-Country","i-Concept-Country-Institution"],$={Institution:{basis:"Global",hierarchy:"Global"},Concept:{basis:"Global",hierarchy:"Global"},Country:{basis:"Global",hierarchy:"Global"},SubConcept:{basis:"Global",hierarchy:"Global"},Continent:{basis:"Global",hierarchy:"Global"},Period:{basis:"Global",hierarchy:"Global"},Year:{basis:"Global",hierarchy:"Global"},InstitutionType:{basis:"Global",hierarchy:"Global"}},U={Continent:"continent__id",Country:"country__id"};function K(e,t,n,i,s,l,u){var d;const f=j(n,s),a=E(n,e),g=n[n.length-1],S=E(n.slice(0,-1),e),C=1/Object.keys((S==null?void 0:S.children)||{}).length,v=s.root_entity_type.slice(0,1).toLowerCase();let b=e.weight,p=l[I(v,f,t.basis,t.hierarchy)];if(p===void 0){console.log("cannot find metric for",v);const c=((a==null?void 0:a.weight)||0)/b;return{nodeRate:c,nodeDivisor:b,baselineRate:c,specMetric:1}}if(t.basis!="Global"){const c=u[s.root_entity_type][i].meta[U[t.basis]||t.basis];p=p[c]}if(t.hierarchy!="Global"){for(let c=n.length-2;c>=0;c--)if(t.hierarchy==s.bifurcations[c].attribute_kind){const m=n[c],r=E(n.slice(0,c+1),e);p=p[m],b=r==null?void 0:r.weight;break}}else for(let c=n.length-2;c>0;c--)if(s.root_entity_type==s.bifurcations[c].attribute_kind){b=(d=E(n.slice(0,c+1),e))==null?void 0:d.weight;break}const O=p[g]||0,o=((a==null?void 0:a.weight)||0)/b;return{nodeRate:o,nodeDivisor:b,baselineRate:O,specMetric:(o+C)/(O+C)}}function I(e,t,n,i){return`${e}-${t}-${n}-${i}`}function Z(e){const[t,n,i,s]=e.split("-");return{target:n,basis:i,hierarchy:s}}function k(e,t){return fetch(`${R}/${e.replace("+","%2B")}.json.gz`).then(n=>n.json().then(i=>t(i)).catch(()=>{console.error(e)}))}function H(){const e=k("attribute-statics",i=>Object.fromEntries(Object.entries(i).map(([s,l])=>[s,Object.fromEntries(Object.entries(l).map(([u,f])=>{let a;try{a=JSON.parse(f.meta)}catch{a={}}return[u,{...f,meta:a}]}))]))),t=k("qc-specs",i=>i),n=k("available-rca-baselines",i=>{const s=[];for(const[l,u,f,a]of i.baselines){const g=I(l,u,f,a);B.includes(g)||s.push(k(`rca-baselines/${g}`,S=>[g,S]))}return Promise.all(s).then(Object.fromEntries)});return Promise.all([e,t,n])}export{J as D,Q as a,F as b,j as c,Y as d,K as e,$ as f,E as g,k as h,A as i,H as m,X as p,Z as s};
