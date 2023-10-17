import{s as Ve,e as ce,i as w,z as ve,d as m,f as D,a as H,l as _,g as I,h as S,c as j,m as d,j as J,y as a,n as O,B as Ae,D as Ne}from"./scheduler.a7e79a28.js";import{e as fe}from"./each.fd848201.js";import{S as Le,i as He}from"./index.ef959f59.js";import{f as W}from"./text-format-util.619db8fe.js";import{c as je,e as De,f as ze,g as Ke,s as Te,i as ge}from"./tree-loading.ec6f9638.js";function Ie(o,e,t){const i=o.slice();return i[21]=e[t].baseKind,i[22]=e[t].specMetricObj,i}function Se(o,e,t){const i=o.slice();return i[25]=e[t],i}function Ce(o){let e,t,i,l,s,r,f=o[7].desc+"",c,n,h,u,k=W(o[7].num)+"",C,M,y,p,g,v=W(o[7].comparison)+"",K,$,ee,V,q,b=Ee(o[6].specMetric)+"",A,B,L,N,T=(o[6].nodeRate*100).toFixed(2)+"",G,te,X,U,ue,le=(o[6].baselineRate*100).toFixed(2)+"",ne,he,ie=W(o[6].nodeDivisor*o[6].baselineRate)+"",oe,_e,de;function ke(E,R){return E[4]==0?Ue:Ge}let se=ke(o),z=se(o),F=o[7].num>1&&Pe(),P=o[4]>0&&Be(o);return{c(){e=D("div"),t=D("div"),z.c(),i=H(),l=D("div"),s=D("div"),r=D("h3"),c=_(f),n=_(" Volume"),h=H(),u=D("p"),C=_(k),M=_(" citation"),F&&F.c(),y=H(),p=D("p"),g=_("around "),K=_(v),$=_(" expected"),ee=H(),V=D("div"),q=D("h3"),A=_(b),B=_(" Specialization"),L=H(),N=D("p"),G=_(T),te=_("% of impact"),X=H(),U=D("p"),ue=_("around "),ne=_(le),he=_("%, "),oe=_(ie),_e=_(" citations expected"),de=H(),P&&P.c(),this.h()},l(E){e=I(E,"DIV",{class:!0});var R=S(e);t=I(R,"DIV",{class:!0});var ye=S(t);z.l(ye),ye.forEach(m),i=j(R),l=I(R,"DIV",{class:!0});var Q=S(l);s=I(Q,"DIV",{class:!0});var Y=S(s);r=I(Y,"H3",{});var me=S(r);c=d(me,f),n=d(me," Volume"),me.forEach(m),h=j(Y),u=I(Y,"P",{});var ae=S(u);C=d(ae,k),M=d(ae," citation"),F&&F.l(ae),ae.forEach(m),y=j(Y),p=I(Y,"P",{});var re=S(p);g=d(re,"around "),K=d(re,v),$=d(re," expected"),re.forEach(m),Y.forEach(m),ee=j(Q),V=I(Q,"DIV",{class:!0});var Z=S(V);q=I(Z,"H3",{});var pe=S(q);A=d(pe,b),B=d(pe," Specialization"),pe.forEach(m),L=j(Z),N=I(Z,"P",{});var be=S(N);G=d(be,T),te=d(be,"% of impact"),be.forEach(m),X=j(Z),U=I(Z,"P",{});var x=S(U);ue=d(x,"around "),ne=d(x,le),he=d(x,"%, "),oe=d(x,ie),_e=d(x," citations expected"),x.forEach(m),Z.forEach(m),de=j(Q),P&&P.l(Q),Q.forEach(m),R.forEach(m),this.h()},h(){J(t,"class","title-row svelte-ka69g"),J(s,"class","svelte-ka69g"),J(V,"class","svelte-ka69g"),J(l,"class","detail-cols svelte-ka69g"),J(e,"class","box-container svelte-ka69g")},m(E,R){w(E,e,R),a(e,t),z.m(t,null),a(e,i),a(e,l),a(l,s),a(s,r),a(r,c),a(r,n),a(s,h),a(s,u),a(u,C),a(u,M),F&&F.m(u,null),a(s,y),a(s,p),a(p,g),a(p,K),a(p,$),a(l,ee),a(l,V),a(V,q),a(q,A),a(q,B),a(V,L),a(V,N),a(N,G),a(N,te),a(V,X),a(V,U),a(U,ue),a(U,ne),a(U,he),a(U,oe),a(U,_e),a(l,de),P&&P.m(l,null)},p(E,R){se===(se=ke(E))&&z?z.p(E,R):(z.d(1),z=se(E),z&&(z.c(),z.m(t,null))),R&128&&f!==(f=E[7].desc+"")&&O(c,f),R&128&&k!==(k=W(E[7].num)+"")&&O(C,k),E[7].num>1?F||(F=Pe(),F.c(),F.m(u,null)):F&&(F.d(1),F=null),R&128&&v!==(v=W(E[7].comparison)+"")&&O(K,v),R&64&&b!==(b=Ee(E[6].specMetric)+"")&&O(A,b),R&64&&T!==(T=(E[6].nodeRate*100).toFixed(2)+"")&&O(G,T),R&64&&le!==(le=(E[6].baselineRate*100).toFixed(2)+"")&&O(ne,le),R&64&&ie!==(ie=W(E[6].nodeDivisor*E[6].baselineRate)+"")&&O(oe,ie),E[4]>0?P?P.p(E,R):(P=Be(E),P.c(),P.m(l,null)):P&&(P.d(1),P=null)},d(E){E&&m(e),z.d(),F&&F.d(),P&&P.d()}}}function Ge(o){let e,t,i=o[3][o[2].root_entity_type][o[0]].name+"",l,s,r,f=fe(o[5]),c=[];for(let n=0;n<f.length;n+=1)c[n]=Re(Se(o,f,n));return{c(){e=D("h2"),t=_("Papers published by "),l=_(i),s=H();for(let n=0;n<c.length;n+=1)c[n].c();r=ce()},l(n){e=I(n,"H2",{});var h=S(e);t=d(h,"Papers published by "),l=d(h,i),h.forEach(m),s=j(n);for(let u=0;u<c.length;u+=1)c[u].l(n);r=ce()},m(n,h){w(n,e,h),a(e,t),a(e,l),w(n,s,h);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(n,h);w(n,r,h)},p(n,h){if(h&13&&i!==(i=n[3][n[2].root_entity_type][n[0]].name+"")&&O(l,i),h&32){f=fe(n[5]);let u;for(u=0;u<f.length;u+=1){const k=Se(n,f,u);c[u]?c[u].p(k,h):(c[u]=Re(k),c[u].c(),c[u].m(r.parentNode,r))}for(;u<c.length;u+=1)c[u].d(1);c.length=f.length}},d(n){n&&(m(e),m(s),m(r)),Ne(c,n)}}}function Ue(o){let e,t=ge(o[1],o[3],o[2])+"",i;return{c(){e=D("h2"),i=_(t)},l(l){e=I(l,"H2",{});var s=S(e);i=d(s,t),s.forEach(m)},m(l,s){w(l,e,s),a(e,i)},p(l,s){s&14&&t!==(t=ge(l[1],l[3],l[2])+"")&&O(i,t)},d(l){l&&m(e)}}}function Re(o){let e,t,i=o[25].prefixStr+"",l,s,r=o[25].entityName+"",f,c;return{c(){e=D("div"),t=D("h2"),l=_(i),s=H(),f=_(r),c=H(),this.h()},l(n){e=I(n,"DIV",{class:!0});var h=S(e);t=I(h,"H2",{});var u=S(t);l=d(u,i),s=j(u),f=d(u,r),u.forEach(m),c=j(h),h.forEach(m),this.h()},h(){J(e,"class","title-elem svelte-ka69g")},m(n,h){w(n,e,h),a(e,t),a(t,l),a(t,s),a(t,f),a(e,c)},p(n,h){h&32&&i!==(i=n[25].prefixStr+"")&&O(l,i),h&32&&r!==(r=n[25].entityName+"")&&O(f,r)},d(n){n&&m(e)}}}function Pe(o){let e;return{c(){e=_("s")},l(t){e=d(t,"s")},m(t,i){w(t,e,i)},d(t){t&&m(e)}}}function Be(o){let e,t,i="Specialization Details",l,s=fe(o[8]),r=[];for(let f=0;f<s.length;f+=1)r[f]=Oe(Ie(o,s,f));return{c(){e=D("div"),t=D("h3"),t.textContent=i,l=H();for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){e=I(f,"DIV",{class:!0});var c=S(e);t=I(c,"H3",{"data-svelte-h":!0}),Ae(t)!=="svelte-1lmyn4z"&&(t.textContent=i),l=j(c);for(let n=0;n<r.length;n+=1)r[n].l(c);c.forEach(m),this.h()},h(){J(e,"class","svelte-ka69g")},m(f,c){w(f,e,c),a(e,t),a(e,l);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(e,null)},p(f,c){if(c&256){s=fe(f[8]);let n;for(n=0;n<s.length;n+=1){const h=Ie(f,s,n);r[n]?r[n].p(h,c):(r[n]=Oe(h),r[n].c(),r[n].m(e,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=s.length}},d(f){f&&m(e),Ne(r,f)}}}function qe(o){let e,t=o[21].basis+"",i;return{c(){e=_("Institutions in the same "),i=_(t)},l(l){e=d(l,"Institutions in the same "),i=d(l,t)},m(l,s){w(l,e,s),w(l,i,s)},p(l,s){s&256&&t!==(t=l[21].basis+"")&&O(i,t)},d(l){l&&(m(e),m(i))}}}function We(o){let e;return{c(){e=_("all other Institutions")},l(t){e=d(t,"all other Institutions")},m(t,i){w(t,e,i)},p:ve,d(t){t&&m(e)}}}function Fe(o){let e,t=o[21].hierarchy+"",i;return{c(){e=_("when citing papers belong to the same "),i=_(t)},l(l){e=d(l,"when citing papers belong to the same "),i=d(l,t)},m(l,s){w(l,e,s),w(l,i,s)},p(l,s){s&256&&t!==(t=l[21].hierarchy+"")&&O(i,t)},d(l){l&&(m(e),m(i))}}}function Oe(o){let e,t,i,l,s=W(o[22].nodeDivisor*o[22].baselineRate)+"",r,f,c,n=(o[22].specMetric*100).toFixed(2)+"",h,u,k;function C(g,v){return g[21].basis=="Global"?We:qe}let M=C(o),y=M(o),p=o[21].hierarchy!="Global"&&Fe(o);return{c(){e=D("p"),t=_("Based on the impact rate of "),y.c(),i=H(),p&&p.c(),l=_(" we expect "),r=_(s),f=_(`
							citations, the true number is `),c=D("b"),h=_(n),u=_("%"),k=_(`
							of this
						`)},l(g){e=I(g,"P",{});var v=S(e);t=d(v,"Based on the impact rate of "),y.l(v),i=j(v),p&&p.l(v),l=d(v," we expect "),r=d(v,s),f=d(v,`
							citations, the true number is `),c=I(v,"B",{});var K=S(c);h=d(K,n),u=d(K,"%"),K.forEach(m),k=d(v,`
							of this
						`),v.forEach(m)},m(g,v){w(g,e,v),a(e,t),y.m(e,null),a(e,i),p&&p.m(e,null),a(e,l),a(e,r),a(e,f),a(e,c),a(c,h),a(c,u),a(e,k)},p(g,v){M===(M=C(g))&&y?y.p(g,v):(y.d(1),y=M(g),y&&(y.c(),y.m(e,i))),g[21].hierarchy!="Global"?p?p.p(g,v):(p=Fe(g),p.c(),p.m(e,l)):p&&(p.d(1),p=null),v&256&&s!==(s=W(g[22].nodeDivisor*g[22].baselineRate)+"")&&O(r,s),v&256&&n!==(n=(g[22].specMetric*100).toFixed(2)+"")&&O(h,n)},d(g){g&&m(e),y.d(),p&&p.d()}}}function Xe(o){let e,t=o[1]!=null&&Ce(o);return{c(){t&&t.c(),e=ce()},l(i){t&&t.l(i),e=ce()},m(i,l){t&&t.m(i,l),w(i,e,l)},p(i,[l]){i[1]!=null?t?t.p(i,l):(t=Ce(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ve,o:ve,d(i){i&&m(e),t&&t.d(i)}}}const we="Where the original paper was categorized as",Me="Cited by paper published";function Je(o,e){const t=(o==null?void 0:o.weight)||0,i=((e==null?void 0:e.weight)||0)/Object.keys((e==null?void 0:e.children)||{}).length,l=t/i;return{num:t,comparison:i,rate:l,desc:Ee(l)}}function Ee(o){let e="Average";return o>1.2?e="High":o<.75&&(e="Low"),e}function Qe(o,e,t){let i,l,s,r,f,c,n,h,{rootId:u}=e,{path:k}=e,{qcSpec:C}=e,{attributeLabels:M}=e,{weightedRoot:y}=e,{specBaselineOptions:p}=e,{levelOfDetail:g=0}=e;const v=Me+" in",K=Me+" by",$={Country:v,Continent:v,Institution:K,Concept:we,SubConcept:we};function ee(b,A){if((C==null?void 0:C.root_entity_type)===void 0)return[];const B=[A];for(let L=0;L<b.length;L++){const N=b.slice(0,L+1);B.push(Ke(N,A)||{weight:0})}return B}function V(b,A,B,L,N,T){const G=[];if(g>0)for(const te of Object.keys(N)){const X=Te(te);X.target==i&&G.push({baseKind:X,specMetricObj:De(b,X,A,B,L,N,T)})}return G}function q(b){const A=[];for(let B=0;B<k.length;B++){let L=b.bifurcations[B],N=b.bifurcations[B+1];if(B==k.length-1||L.resolver_id!=N.resolver_id){const T=L.attribute_kind,G=ge(k.slice(0,B+1),M,b);A.push({entityType:T,prefixStr:$[T],entityName:G})}}return A}return o.$$set=b=>{"rootId"in b&&t(0,u=b.rootId),"path"in b&&t(1,k=b.path),"qcSpec"in b&&t(2,C=b.qcSpec),"attributeLabels"in b&&t(3,M=b.attributeLabels),"weightedRoot"in b&&t(9,y=b.weightedRoot),"specBaselineOptions"in b&&t(10,p=b.specBaselineOptions),"levelOfDetail"in b&&t(4,g=b.levelOfDetail)},o.$$.update=()=>{o.$$.dirty&6&&t(11,i=je(k,C)),o.$$.dirty&514&&t(14,l=ee(k||[],y)),o.$$.dirty&1551&&t(8,s=V(y,k,u,C,p,M)),o.$$.dirty&16384&&t(12,r=l[l.length-2]),o.$$.dirty&16384&&t(13,f=l[l.length-1]),o.$$.dirty&12288&&t(7,c=Je(f,r)),o.$$.dirty&3599&&t(6,n=De(y,ze[i],k,u,C,p,M)),o.$$.dirty&4&&t(5,h=q(C))},[u,k,C,M,g,h,n,c,s,y,p,i,r,f,l]}class tt extends Le{constructor(e){super(),He(this,e,Qe,Xe,Ve,{rootId:0,path:1,qcSpec:2,attributeLabels:3,weightedRoot:9,specBaselineOptions:10,levelOfDetail:4})}}export{tt as P};