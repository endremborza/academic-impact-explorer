import{s as W,f as g,a as R,g as d,B as j,c as U,h as P,d as f,j as a,C as T,i as w,y as v,z as B,D as z,l as G,m as $}from"../chunks/scheduler.a7e79a28.js";import{e as H}from"../chunks/each.fd848201.js";import{S as J,i as K}from"../chunks/index.ef959f59.js";const N=""+new URL("../assets/ccl-logo.aafca7de.png",import.meta.url).href,O=""+new URL("../assets/corv-logo.5836dbb5.png",import.meta.url).href,Q=""+new URL("../assets/udt-logo.0595ef69.png",import.meta.url).href,X=""+new URL("../assets/ec-logo.00d8a13f.png",import.meta.url).href,Y=""+new URL("../assets/cesar.87d89716.png",import.meta.url).href,Z=""+new URL("../assets/endre.3454a294.png",import.meta.url).href,ee=""+new URL("../assets/vera.cfeccc22.png",import.meta.url).href,te=""+new URL("../assets/mate.5d6534be.png",import.meta.url).href,se=""+new URL("../assets/corvinus-e-saltway.ce2c5a96.jpg",import.meta.url).href;function q(c,s,r){const l=c.slice();return l[2]=s[r],l}function S(c,s,r){const l=c.slice();return l[5]=s[r],l}function A(c){let s,r,l,_,L,p=c[5].name+"",E,x,m,k=c[5].role+"",C,h;return{c(){s=g("div"),r=g("img"),_=R(),L=g("p"),E=G(p),x=R(),m=g("p"),C=G(k),h=R(),this.h()},l(b){s=d(b,"DIV",{class:!0});var o=P(s);r=d(o,"IMG",{class:!0,src:!0,alt:!0}),_=U(o),L=d(o,"P",{class:!0});var y=P(L);E=$(y,p),y.forEach(f),x=U(o),m=d(o,"P",{class:!0});var I=P(m);C=$(I,k),I.forEach(f),h=U(o),o.forEach(f),this.h()},h(){a(r,"class","portrait svelte-1eof2cc"),T(r.src,l=c[5].src)||a(r,"src",l),a(r,"alt",c[5].name),a(L,"class","svelte-1eof2cc"),a(m,"class","svelte-1eof2cc"),a(s,"class","person svelte-1eof2cc")},m(b,o){w(b,s,o),v(s,r),v(s,_),v(s,L),v(L,E),v(s,x),v(s,m),v(m,C),v(s,h)},p:B,d(b){b&&f(s)}}}function F(c){let s,r;return{c(){s=g("img"),this.h()},l(l){s=d(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){a(s,"class","logo svelte-1eof2cc"),T(s.src,r=c[2])||a(s,"src",r),a(s,"alt","inst-logo")},m(l,_){w(l,s,_)},p:B,d(l){l&&f(s)}}}function le(c){let s,r='<h1 class="svelte-1eof2cc">We are a small, multidisciplinary, multi-institution team.</h1>',l,_,L,p,E,x,m,k=`<img class="uni-pic svelte-1eof2cc" src="${se}" alt="University"/>`,C,h,b,o,y,I=H(c[1]),i=[];for(let e=0;e<I.length;e+=1)i[e]=A(S(c,I,e));let V=H(c[0]),n=[];for(let e=0;e<V.length;e+=1)n[e]=F(q(c,V,e));return{c(){s=g("div"),s.innerHTML=r,l=R(),_=g("div"),L=R(),p=g("div"),E=g("div");for(let e=0;e<i.length;e+=1)i[e].c();x=R(),m=g("div"),m.innerHTML=k,C=R(),h=g("div");for(let e=0;e<n.length;e+=1)n[e].c();b=R(),o=g("img"),this.h()},l(e){s=d(e,"DIV",{class:!0,"data-svelte-h":!0}),j(s)!=="svelte-1dh4j6s"&&(s.innerHTML=r),l=U(e),_=d(e,"DIV",{class:!0}),P(_).forEach(f),L=U(e),p=d(e,"DIV",{class:!0});var u=P(p);E=d(u,"DIV",{class:!0});var t=P(E);for(let M=0;M<i.length;M+=1)i[M].l(t);t.forEach(f),x=U(u),m=d(u,"DIV",{class:!0,"data-svelte-h":!0}),j(m)!=="svelte-1e59a58"&&(m.innerHTML=k),u.forEach(f),C=U(e),h=d(e,"DIV",{class:!0});var D=P(h);for(let M=0;M<n.length;M+=1)n[M].l(D);b=U(D),o=d(D,"IMG",{class:!0,src:!0,alt:!0}),D.forEach(f),this.h()},h(){a(s,"class","bstrip"),a(_,"class","bstrip t4"),a(E,"class","bar svelte-1eof2cc"),a(m,"class","bar svelte-1eof2cc"),a(p,"class","bstrip t5"),a(o,"class","logo svelte-1eof2cc"),T(o.src,y=X)||a(o,"src",y),a(o,"alt","European Commission Logo"),a(h,"class","bstrip")},m(e,u){w(e,s,u),w(e,l,u),w(e,_,u),w(e,L,u),w(e,p,u),v(p,E);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(E,null);v(p,x),v(p,m),w(e,C,u),w(e,h,u);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(h,null);v(h,b),v(h,o)},p(e,[u]){if(u&2){I=H(e[1]);let t;for(t=0;t<I.length;t+=1){const D=S(e,I,t);i[t]?i[t].p(D,u):(i[t]=A(D),i[t].c(),i[t].m(E,null))}for(;t<i.length;t+=1)i[t].d(1);i.length=I.length}if(u&1){V=H(e[0]);let t;for(t=0;t<V.length;t+=1){const D=q(e,V,t);n[t]?n[t].p(D,u):(n[t]=F(D),n[t].c(),n[t].m(h,b))}for(;t<n.length;t+=1)n[t].d(1);n.length=V.length}},i:B,o:B,d(e){e&&(f(s),f(l),f(_),f(L),f(p),f(C),f(h)),z(i,e),z(n,e)}}}function re(c){return[[N,O,Q],[{src:Y,name:"César A. Hidalgo",role:"CCL Director"},{src:Z,name:"Endre Borza",role:"Research Data Engineer"},{src:ee,name:"Veronika Hamar",role:"CCL Budapest Executive Director"},{src:te,name:"Máté Barkóczi",role:"Design Intern"}]]}class ie extends J{constructor(s){super(),K(this,s,re,le,W,{})}}export{ie as component};