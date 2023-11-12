import{s as Le,e as fe,i as O,A as Ee,d as v,f as I,a as A,l as d,g as D,h as S,c as L,m,j as G,w as a,n as P,v as He,C as Ae}from"./scheduler.1836b3fe.js";import{e as ce}from"./each.11058b4e.js";import{S as je,i as Ke}from"./index.7ef31ebf.js";import{f as W}from"./text-format-util.1eac41ca.js";import{c as Te,e as we,f as ze,g as Ge,s as Ue,i as ye}from"./tree-loading.c61db980.js";function Se(i,e,t){const n=i.slice();return n[21]=e[t].baseKind,n[22]=e[t].specMetricObj,n}function Ce(i,e,t){const n=i.slice();return n[25]=e[t],n}function Re(i){let e,t,n,l,s,r,c=i[7].desc+"",f,o,u,h,y=W(i[7].num)+"",C,M,k,b,p=(i[7].num/i[7].comparison).toFixed(2)+"",g,T,X=W(i[7].comparison)+"",Q,ee,te,_,N,R=ke(i[6].specMetric)+"",V,K,U,H,J=(i[6].nodeRate*100).toFixed(2)+"",q,he,ue,z,_e,le=(i[6].baselineRate*100).toFixed(2)+"",oe,de,ie=W(i[6].nodeDivisor*i[6].baselineRate)+"",se,me,ve;function Ie(E,w){return E[4]==0?We:qe}let ae=Ie(i),j=ae(i),B=i[7].num>1&&Pe(),F=i[4]>0&&Be(i);return{c(){e=I("div"),t=I("div"),j.c(),n=A(),l=I("div"),s=I("div"),r=I("h3"),f=d(c),o=d(" Volume"),u=A(),h=I("p"),C=d(y),M=d(" citation"),B&&B.c(),k=A(),b=I("p"),g=d(p),T=d(" times the average of "),Q=d(X),ee=d(" among siblings"),te=A(),_=I("div"),N=I("h3"),V=d(R),K=d(" Specialization"),U=A(),H=I("p"),q=d(J),he=d("% of impact"),ue=A(),z=I("p"),_e=d("around "),oe=d(le),de=d("%, "),se=d(ie),me=d(" citations expected"),ve=A(),F&&F.c(),this.h()},l(E){e=D(E,"DIV",{class:!0});var w=S(e);t=D(w,"DIV",{class:!0});var De=S(t);j.l(De),De.forEach(v),n=L(w),l=D(w,"DIV",{class:!0});var Y=S(l);s=D(Y,"DIV",{id:!0,class:!0});var Z=S(s);r=D(Z,"H3",{});var be=S(r);f=m(be,c),o=m(be," Volume"),be.forEach(v),u=L(Z),h=D(Z,"P",{});var re=S(h);C=m(re,y),M=m(re," citation"),B&&B.l(re),re.forEach(v),k=L(Z),b=D(Z,"P",{});var ne=S(b);g=m(ne,p),T=m(ne," times the average of "),Q=m(ne,X),ee=m(ne," among siblings"),ne.forEach(v),Z.forEach(v),te=L(Y),_=D(Y,"DIV",{id:!0,class:!0});var x=S(_);N=D(x,"H3",{});var pe=S(N);V=m(pe,R),K=m(pe," Specialization"),pe.forEach(v),U=L(x),H=D(x,"P",{});var ge=S(H);q=m(ge,J),he=m(ge,"% of impact"),ge.forEach(v),ue=L(x),z=D(x,"P",{});var $=S(z);_e=m($,"around "),oe=m($,le),de=m($,"%, "),se=m($,ie),me=m($," citations expected"),$.forEach(v),x.forEach(v),ve=L(Y),F&&F.l(Y),Y.forEach(v),w.forEach(v),this.h()},h(){G(t,"class","title-row svelte-w69hln"),G(s,"id","volume-col"),G(s,"class","svelte-w69hln"),G(_,"id","spec-col"),G(_,"class","svelte-w69hln"),G(l,"class","detail-cols svelte-w69hln"),G(e,"class","box-container svelte-w69hln")},m(E,w){O(E,e,w),a(e,t),j.m(t,null),a(e,n),a(e,l),a(l,s),a(s,r),a(r,f),a(r,o),a(s,u),a(s,h),a(h,C),a(h,M),B&&B.m(h,null),a(s,k),a(s,b),a(b,g),a(b,T),a(b,Q),a(b,ee),a(l,te),a(l,_),a(_,N),a(N,V),a(N,K),a(_,U),a(_,H),a(H,q),a(H,he),a(_,ue),a(_,z),a(z,_e),a(z,oe),a(z,de),a(z,se),a(z,me),a(l,ve),F&&F.m(l,null)},p(E,w){ae===(ae=Ie(E))&&j?j.p(E,w):(j.d(1),j=ae(E),j&&(j.c(),j.m(t,null))),w&128&&c!==(c=E[7].desc+"")&&P(f,c),w&128&&y!==(y=W(E[7].num)+"")&&P(C,y),E[7].num>1?B||(B=Pe(),B.c(),B.m(h,null)):B&&(B.d(1),B=null),w&128&&p!==(p=(E[7].num/E[7].comparison).toFixed(2)+"")&&P(g,p),w&128&&X!==(X=W(E[7].comparison)+"")&&P(Q,X),w&64&&R!==(R=ke(E[6].specMetric)+"")&&P(V,R),w&64&&J!==(J=(E[6].nodeRate*100).toFixed(2)+"")&&P(q,J),w&64&&le!==(le=(E[6].baselineRate*100).toFixed(2)+"")&&P(oe,le),w&64&&ie!==(ie=W(E[6].nodeDivisor*E[6].baselineRate)+"")&&P(se,ie),E[4]>0?F?F.p(E,w):(F=Be(E),F.c(),F.m(l,null)):F&&(F.d(1),F=null)},d(E){E&&v(e),j.d(),B&&B.d(),F&&F.d()}}}function qe(i){let e,t,n=i[3][i[2].root_entity_type][i[0]].name+"",l,s,r,c=ce(i[5]),f=[];for(let o=0;o<c.length;o+=1)f[o]=Fe(Ce(i,c,o));return{c(){e=I("h2"),t=d("Papers published by "),l=d(n),s=A();for(let o=0;o<f.length;o+=1)f[o].c();r=fe()},l(o){e=D(o,"H2",{});var u=S(e);t=m(u,"Papers published by "),l=m(u,n),u.forEach(v),s=L(o);for(let h=0;h<f.length;h+=1)f[h].l(o);r=fe()},m(o,u){O(o,e,u),a(e,t),a(e,l),O(o,s,u);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(o,u);O(o,r,u)},p(o,u){if(u&13&&n!==(n=o[3][o[2].root_entity_type][o[0]].name+"")&&P(l,n),u&32){c=ce(o[5]);let h;for(h=0;h<c.length;h+=1){const y=Ce(o,c,h);f[h]?f[h].p(y,u):(f[h]=Fe(y),f[h].c(),f[h].m(r.parentNode,r))}for(;h<f.length;h+=1)f[h].d(1);f.length=c.length}},d(o){o&&(v(e),v(s),v(r)),Ae(f,o)}}}function We(i){let e,t=ye(i[1],i[3],i[2])+"",n;return{c(){e=I("h2"),n=d(t)},l(l){e=D(l,"H2",{});var s=S(e);n=m(s,t),s.forEach(v)},m(l,s){O(l,e,s),a(e,n)},p(l,s){s&14&&t!==(t=ye(l[1],l[3],l[2])+"")&&P(n,t)},d(l){l&&v(e)}}}function Fe(i){let e,t,n=i[25].prefixStr+"",l,s,r=i[25].entityName+"",c,f;return{c(){e=I("div"),t=I("h2"),l=d(n),s=A(),c=d(r),f=A(),this.h()},l(o){e=D(o,"DIV",{class:!0});var u=S(e);t=D(u,"H2",{});var h=S(t);l=m(h,n),s=L(h),c=m(h,r),h.forEach(v),f=L(u),u.forEach(v),this.h()},h(){G(e,"class","title-elem svelte-w69hln")},m(o,u){O(o,e,u),a(e,t),a(t,l),a(t,s),a(t,c),a(e,f)},p(o,u){u&32&&n!==(n=o[25].prefixStr+"")&&P(l,n),u&32&&r!==(r=o[25].entityName+"")&&P(c,r)},d(o){o&&v(e)}}}function Pe(i){let e;return{c(){e=d("s")},l(t){e=m(t,"s")},m(t,n){O(t,e,n)},d(t){t&&v(e)}}}function Be(i){let e,t,n="Specialization Details",l,s=ce(i[8]),r=[];for(let c=0;c<s.length;c+=1)r[c]=Me(Se(i,s,c));return{c(){e=I("div"),t=I("h3"),t.textContent=n,l=A();for(let c=0;c<r.length;c+=1)r[c].c();this.h()},l(c){e=D(c,"DIV",{class:!0});var f=S(e);t=D(f,"H3",{"data-svelte-h":!0}),He(t)!=="svelte-1lmyn4z"&&(t.textContent=n),l=L(f);for(let o=0;o<r.length;o+=1)r[o].l(f);f.forEach(v),this.h()},h(){G(e,"class","svelte-w69hln")},m(c,f){O(c,e,f),a(e,t),a(e,l);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(e,null)},p(c,f){if(f&256){s=ce(c[8]);let o;for(o=0;o<s.length;o+=1){const u=Se(c,s,o);r[o]?r[o].p(u,f):(r[o]=Me(u),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=s.length}},d(c){c&&v(e),Ae(r,c)}}}function Xe(i){let e,t=i[21].basis+"",n;return{c(){e=d("Institutions in the same "),n=d(t)},l(l){e=m(l,"Institutions in the same "),n=m(l,t)},m(l,s){O(l,e,s),O(l,n,s)},p(l,s){s&256&&t!==(t=l[21].basis+"")&&P(n,t)},d(l){l&&(v(e),v(n))}}}function Je(i){let e;return{c(){e=d("all other Institutions")},l(t){e=m(t,"all other Institutions")},m(t,n){O(t,e,n)},p:Ee,d(t){t&&v(e)}}}function Oe(i){let e,t=i[21].hierarchy+"",n;return{c(){e=d("when citing papers belong to the same "),n=d(t)},l(l){e=m(l,"when citing papers belong to the same "),n=m(l,t)},m(l,s){O(l,e,s),O(l,n,s)},p(l,s){s&256&&t!==(t=l[21].hierarchy+"")&&P(n,t)},d(l){l&&(v(e),v(n))}}}function Me(i){let e,t,n,l,s=W(i[22].nodeDivisor*i[22].baselineRate)+"",r,c,f,o=(i[22].specMetric*100).toFixed(2)+"",u,h,y;function C(p,g){return p[21].basis=="Global"?Je:Xe}let M=C(i),k=M(i),b=i[21].hierarchy!="Global"&&Oe(i);return{c(){e=I("p"),t=d("Based on the impact rate of "),k.c(),n=A(),b&&b.c(),l=d(" we expect "),r=d(s),c=d(`
							citations, the true number is `),f=I("b"),u=d(o),h=d("%"),y=d(`
							of this
						`)},l(p){e=D(p,"P",{});var g=S(e);t=m(g,"Based on the impact rate of "),k.l(g),n=L(g),b&&b.l(g),l=m(g," we expect "),r=m(g,s),c=m(g,`
							citations, the true number is `),f=D(g,"B",{});var T=S(f);u=m(T,o),h=m(T,"%"),T.forEach(v),y=m(g,`
							of this
						`),g.forEach(v)},m(p,g){O(p,e,g),a(e,t),k.m(e,null),a(e,n),b&&b.m(e,null),a(e,l),a(e,r),a(e,c),a(e,f),a(f,u),a(f,h),a(e,y)},p(p,g){M===(M=C(p))&&k?k.p(p,g):(k.d(1),k=M(p),k&&(k.c(),k.m(e,n))),p[21].hierarchy!="Global"?b?b.p(p,g):(b=Oe(p),b.c(),b.m(e,l)):b&&(b.d(1),b=null),g&256&&s!==(s=W(p[22].nodeDivisor*p[22].baselineRate)+"")&&P(r,s),g&256&&o!==(o=(p[22].specMetric*100).toFixed(2)+"")&&P(u,o)},d(p){p&&v(e),k.d(),b&&b.d()}}}function Qe(i){let e,t=i[1]!=null&&Re(i);return{c(){t&&t.c(),e=fe()},l(n){t&&t.l(n),e=fe()},m(n,l){t&&t.m(n,l),O(n,e,l)},p(n,[l]){n[1]!=null?t?t.p(n,l):(t=Re(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ee,o:Ee,d(n){n&&v(e),t&&t.d(n)}}}const Ne="Where the original paper was categorized as",Ve="Cited by paper published";function Ye(i,e){const t=(i==null?void 0:i.weight)||0,n=((e==null?void 0:e.weight)||0)/Object.keys((e==null?void 0:e.children)||{}).length,l=t/n;return{num:t,comparison:n,rate:l,desc:ke(l)}}function ke(i){let e="Average";return i>1.2?e="High":i<.75&&(e="Low"),e}function Ze(i,e,t){let n,l,s,r,c,f,o,u,{rootId:h}=e,{path:y}=e,{qcSpec:C}=e,{attributeLabels:M}=e,{weightedRoot:k}=e,{specBaselineOptions:b}=e,{levelOfDetail:p=0}=e;const g=Ve+" in",T=Ve+" by",X={Country:g,Continent:g,Institution:T,Concept:Ne,SubConcept:Ne};function Q(_,N){if((C==null?void 0:C.root_entity_type)===void 0)return[];const R=[N];for(let V=0;V<_.length;V++){const K=_.slice(0,V+1);R.push(Ge(K,N)||{weight:0})}return R}function ee(_,N,R,V,K,U){const H=[];if(p>0)for(const J of Object.keys(K)){const q=Ue(J);q.target==n&&H.push({baseKind:q,specMetricObj:we(_,q,N,R,V,K,U)})}return H}function te(_){const N=[];for(let R=0;R<y.length;R++){let V=_.bifurcations[R],K=_.bifurcations[R+1];if(R==y.length-1||V.resolver_id!=K.resolver_id){const U=V.attribute_kind,H=ye(y.slice(0,R+1),M,_);N.push({entityType:U,prefixStr:X[U],entityName:H})}}return N}return i.$$set=_=>{"rootId"in _&&t(0,h=_.rootId),"path"in _&&t(1,y=_.path),"qcSpec"in _&&t(2,C=_.qcSpec),"attributeLabels"in _&&t(3,M=_.attributeLabels),"weightedRoot"in _&&t(9,k=_.weightedRoot),"specBaselineOptions"in _&&t(10,b=_.specBaselineOptions),"levelOfDetail"in _&&t(4,p=_.levelOfDetail)},i.$$.update=()=>{i.$$.dirty&6&&t(11,n=Te(y,C)),i.$$.dirty&514&&t(14,l=Q(y||[],k)),i.$$.dirty&1551&&t(8,s=ee(k,y,h,C,b,M)),i.$$.dirty&16384&&t(12,r=l[l.length-2]),i.$$.dirty&16384&&t(13,c=l[l.length-1]),i.$$.dirty&12288&&t(7,f=Ye(c,r)),i.$$.dirty&3599&&t(6,o=we(k,ze[n],y,h,C,b,M)),i.$$.dirty&4&&t(5,u=te(C))},[h,y,C,M,p,u,o,f,s,k,b,n,r,c,l]}class it extends je{constructor(e){super(),Ke(this,e,Ze,Qe,Le,{rootId:0,path:1,qcSpec:2,attributeLabels:3,weightedRoot:9,specBaselineOptions:10,levelOfDetail:4})}}export{it as P};
