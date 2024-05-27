import{s as L,n as Y}from"../chunks/scheduler.DWY5Y_d_.js";import{S as N,i as O,e as p,t as P,s as S,c as k,a as y,b as q,d as g,f as w,k as T,l as f,g as Q,h,j as z,m as $,r as A,q as U,p as H,A as W,w as X,x as Z,y as x,z as ee,u as te}from"../chunks/index.TFfKFxUl.js";import{e as F}from"../chunks/each.D6YF6ztN.js";import{b as G}from"../chunks/paths.gWZbKTK0.js";import{d as ae}from"../chunks/stores.D4P1NSu3.js";function se(n){let e,a,t,i,d,c,V=".gads",v;return{c(){e=p("a"),a=p("div"),t=p("h1"),i=P(n[0]),d=S(),c=p("p"),c.textContent=V,this.h()},l(u){e=k(u,"A",{href:!0,class:!0});var m=y(e);a=k(m,"DIV",{class:!0});var b=y(a);t=k(b,"H1",{class:!0});var _=y(t);i=q(_,n[0]),_.forEach(g),d=w(b),c=k(b,"P",{class:!0,"data-svelte-h":!0}),T(c)!=="svelte-xhfz2p"&&(c.textContent=V),b.forEach(g),m.forEach(g),this.h()},h(){f(t,"class","svelte-vt4f3g"),f(c,"class","svelte-vt4f3g"),f(a,"class","text svelte-vt4f3g"),f(e,"href",n[1]),f(e,"class",v="card "+(n[2]?"dark-mode":"light-mode")+" svelte-vt4f3g")},m(u,m){Q(u,e,m),h(e,a),h(a,t),h(t,i),h(a,d),h(a,c)},p(u,[m]){m&1&&z(i,u[0]),m&2&&f(e,"href",u[1]),m&4&&v!==(v="card "+(u[2]?"dark-mode":"light-mode")+" svelte-vt4f3g")&&f(e,"class",v)},i:Y,o:Y,d(u){u&&g(e)}}}function le(n,e,a){let{year:t}=e,{link:i}=e,d;return ae.subscribe(c=>{a(2,d=c)}),n.$$set=c=>{"year"in c&&a(0,t=c.year),"link"in c&&a(1,i=c.link)},[t,i,d]}class re extends N{constructor(e){super(),O(this,e,le,se,L,{year:0,link:1})}}function J(n,e,a){const t=n.slice();return t[1]=e[a],t[3]=a,t}function K(n){let e,a;return e=new re({props:{year:n[3]+1,link:G+"/programmas/"+n[0].slug+"/"+(n[3]+1)}}),{c(){X(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,i){x(e,t,i),a=!0},p(t,i){const d={};i&1&&(d.link=G+"/programmas/"+t[0].slug+"/"+(t[3]+1)),e.$set(d)},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function ne(n){let e,a,t,i,d=n[0].name+"",c,V,v,u=n[0].description+"",m,b,_,E,D=F(Array(n[0].years)),l=[];for(let s=0;s<D.length;s+=1)l[s]=K(J(n,D,s));const R=s=>H(l[s],1,1,()=>{l[s]=null});return{c(){e=p("div"),a=p("div"),t=p("div"),i=p("h1"),c=P(d),V=S(),v=p("p"),m=P(u),b=S(),_=p("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=k(s,"DIV",{id:!0,class:!0});var o=y(e);a=k(o,"DIV",{id:!0,style:!0,class:!0});var r=y(a);t=k(r,"DIV",{id:!0,class:!0});var I=y(t);i=k(I,"H1",{class:!0});var M=y(i);c=q(M,d),M.forEach(g),V=w(I),v=k(I,"P",{class:!0});var j=y(v);m=q(j,u),j.forEach(g),I.forEach(g),r.forEach(g),b=w(o),_=k(o,"DIV",{id:!0,class:!0});var B=y(_);for(let C=0;C<l.length;C+=1)l[C].l(B);B.forEach(g),o.forEach(g),this.h()},h(){f(i,"class","svelte-159k436"),f(v,"class","svelte-159k436"),f(t,"id","text-div"),f(t,"class","svelte-159k436"),f(a,"id","image-div"),$(a,"background-image","url("+n[0].img+")"),f(a,"class","svelte-159k436"),f(_,"id","year-list"),f(_,"class","svelte-159k436"),f(e,"id","container"),f(e,"class","svelte-159k436")},m(s,o){Q(s,e,o),h(e,a),h(a,t),h(t,i),h(i,c),h(t,V),h(t,v),h(v,m),h(e,b),h(e,_);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(_,null);E=!0},p(s,[o]){if((!E||o&1)&&d!==(d=s[0].name+"")&&z(c,d),(!E||o&1)&&u!==(u=s[0].description+"")&&z(m,u),(!E||o&1)&&$(a,"background-image","url("+s[0].img+")"),o&1){D=F(Array(s[0].years));let r;for(r=0;r<D.length;r+=1){const I=J(s,D,r);l[r]?(l[r].p(I,o),A(l[r],1)):(l[r]=K(I),l[r].c(),A(l[r],1),l[r].m(_,null))}for(te(),r=D.length;r<l.length;r+=1)R(r);U()}},i(s){if(!E){for(let o=0;o<D.length;o+=1)A(l[o]);E=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)H(l[o]);E=!1},d(s){s&&g(e),W(l,s)}}}function ie(n,e,a){let{data:t}=e;return n.$$set=i=>{"data"in i&&a(0,t=i.data)},[t]}class he extends N{constructor(e){super(),O(this,e,ie,ne,L,{data:0})}}export{he as component};
