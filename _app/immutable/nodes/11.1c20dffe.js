import{s as G,f as y,a as I,g as k,h as N,d as m,c as L,j as g,i as T,w as d,H as j,x as $,v as q,y as B,l as z,m as F,n as J}from"../chunks/scheduler.2d1c82f4.js";import{e as A}from"../chunks/each.66af19a5.js";import{S as K,i as M}from"../chunks/index.bf293594.js";function w(n,t,s){const c=n.slice();return c[9]=t[s],c}function C(n,t,s){const c=n.slice();return c[12]=t[s],c}function D(n){let t,s,c,i,r=n[12]+"",_,h,f,b;function S(){return n[4](n[12])}return{c(){t=y("label"),s=y("input"),i=I(),_=z(r),h=I(),this.h()},l(o){t=k(o,"LABEL",{class:!0});var a=N(t);s=k(a,"INPUT",{type:!0,name:!0}),i=L(a),_=F(a,r),h=L(a),a.forEach(m),this.h()},h(){s.checked=c=n[0]===n[12],g(s,"type","radio"),g(s,"name","category"),s.value=n[12],g(t,"class","svelte-ygk5rp")},m(o,a){T(o,t,a),d(t,s),d(t,i),d(t,_),d(t,h),f||(b=$(s,"change",S),f=!0)},p(o,a){n=o,a&1&&c!==(c=n[0]===n[12])&&(s.checked=c)},d(o){o&&m(t),f=!1,b()}}}function H(n){let t,s=n[9].name+"",c;return{c(){t=y("li"),c=z(s)},l(i){t=k(i,"LI",{});var r=N(t);c=F(r,s),r.forEach(m)},m(i,r){T(i,t,r),d(t,c)},p(i,r){r&4&&s!==(s=i[9].name+"")&&J(c,s)},d(i){i&&m(t)}}}function O(n){let t,s,c,i,r,_,h,f,b,S,o=A(n[3]),a=[];for(let l=0;l<o.length;l+=1)a[l]=D(C(n,o,l));let v=A(n[2]),u=[];for(let l=0;l<v.length;l+=1)u[l]=H(w(n,v,l));return{c(){t=y("div"),s=y("span");for(let l=0;l<a.length;l+=1)a[l].c();c=I(),i=y("span"),r=y("input"),_=I(),h=y("span"),f=y("ul");for(let l=0;l<u.length;l+=1)u[l].c();this.h()},l(l){t=k(l,"DIV",{class:!0});var p=N(t);s=k(p,"SPAN",{class:!0});var e=N(s);for(let P=0;P<a.length;P+=1)a[P].l(e);e.forEach(m),c=L(p),i=k(p,"SPAN",{class:!0});var E=N(i);r=k(E,"INPUT",{type:!0,class:!0}),E.forEach(m),_=L(p),h=k(p,"SPAN",{class:!0});var U=N(h);f=k(U,"UL",{class:!0});var V=N(f);for(let P=0;P<u.length;P+=1)u[P].l(V);V.forEach(m),U.forEach(m),p.forEach(m),this.h()},h(){g(s,"class","svelte-ygk5rp"),g(r,"type","text"),g(r,"class","svelte-ygk5rp"),g(i,"class","svelte-ygk5rp"),g(f,"class","svelte-ygk5rp"),g(h,"class","svelte-ygk5rp"),g(t,"class","svelte-ygk5rp")},m(l,p){T(l,t,p),d(t,s);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(s,null);d(t,c),d(t,i),d(i,r),j(r,n[1]),d(t,_),d(t,h),d(h,f);for(let e=0;e<u.length;e+=1)u[e]&&u[e].m(f,null);b||(S=$(r,"input",n[5]),b=!0)},p(l,[p]){if(p&9){o=A(l[3]);let e;for(e=0;e<o.length;e+=1){const E=C(l,o,e);a[e]?a[e].p(E,p):(a[e]=D(E),a[e].c(),a[e].m(s,null))}for(;e<a.length;e+=1)a[e].d(1);a.length=o.length}if(p&2&&r.value!==l[1]&&j(r,l[1]),p&4){v=A(l[2]);let e;for(e=0;e<v.length;e+=1){const E=w(l,v,e);u[e]?u[e].p(E,p):(u[e]=H(E),u[e].c(),u[e].m(f,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=v.length}},i:q,o:q,d(l){l&&m(t),B(a,l),B(u,l),b=!1,S()}}}const Q="https://search-api.rankless.org:3039";function R(n,t,s){let c=["authors","institutions","sources","countries","subfields"],i=[],r=c[0],_="",h="";function f(o,a){if(o.length<2)s(2,i=[]);else{let v=`${Q}/v1/names/${a}-names?q=${o}`;h=o,setTimeout(()=>{console.log("delayed",o,h),h==o&&fetch(v).then(u=>{u.json().then(l=>{h==o&&s(2,i=l)}).catch(l=>{console.error("error at",v,l)})})},400)}}const b=o=>{s(0,r=o)};function S(){_=this.value,s(1,_)}return n.$$.update=()=>{n.$$.dirty&3&&f(_,r)},[r,_,i,c,b,S]}class Z extends K{constructor(t){super(),M(this,t,R,O,G,{})}}export{Z as component};
