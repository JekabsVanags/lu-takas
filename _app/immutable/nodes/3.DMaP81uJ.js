import{s as T,e as Q,a as b,n as F}from"../chunks/scheduler.WH_YGCu0.js";import{S as U,i as W,e as h,s as A,t as L,c as _,b as k,h as E,f as w,d as v,l as r,a as X,j as c,k as R,w as P,x as V,y as z,r as S,p as C,z as G}from"../chunks/index.Bz6HwuOy.js";import{b as H}from"../chunks/paths.LsSlUBGe.js";import{d as Y}from"../chunks/stores.Dn5aJrAE.js";function Z(n){let e,i,g,o,a,l,f,t,u,s,N,p,I,j,D,M;return{c(){e=h("div"),i=h("img"),o=A(),a=h("div"),l=h("h1"),f=L(n[1]),t=A(),u=h("p"),s=L(n[2]),N=A(),p=h("a"),I=L("Lasīt vairāk!"),this.h()},l(d){e=_(d,"DIV",{id:!0,class:!0});var m=k(e);i=_(m,"IMG",{src:!0,alt:!0,class:!0}),o=E(m),a=_(m,"DIV",{id:!0,class:!0});var q=k(a);l=_(q,"H1",{class:!0});var J=k(l);f=w(J,n[1]),J.forEach(v),t=E(q),u=_(q,"P",{class:!0});var K=k(u);s=w(K,n[2]),K.forEach(v),N=E(q),p=_(q,"A",{href:!0,class:!0});var O=k(p);I=w(O,"Lasīt vairāk!"),O.forEach(v),q.forEach(v),m.forEach(v),this.h()},h(){Q(i.src,g=n[4])||r(i,"src",g),r(i,"alt",n[5]),r(i,"class","svelte-duufbc"),r(l,"class","svelte-duufbc"),r(u,"class","svelte-duufbc"),r(p,"href",n[3]),r(p,"class",j=b(n[6]?"dark-mode":"light-mode")+" svelte-duufbc"),r(a,"id","description"),r(a,"class",D=b(n[6]?"dark-mode":"light-mode")+" svelte-duufbc"),r(e,"id","container"),r(e,"class",M=b(n[0]==0?"reversed":"")+" svelte-duufbc")},m(d,m){X(d,e,m),c(e,i),c(e,o),c(e,a),c(a,l),c(l,f),c(a,t),c(a,u),c(u,s),c(a,N),c(a,p),c(p,I)},p(d,[m]){m&16&&!Q(i.src,g=d[4])&&r(i,"src",g),m&32&&r(i,"alt",d[5]),m&2&&R(f,d[1]),m&4&&R(s,d[2]),m&8&&r(p,"href",d[3]),m&64&&j!==(j=b(d[6]?"dark-mode":"light-mode")+" svelte-duufbc")&&r(p,"class",j),m&64&&D!==(D=b(d[6]?"dark-mode":"light-mode")+" svelte-duufbc")&&r(a,"class",D),m&1&&M!==(M=b(d[0]==0?"reversed":"")+" svelte-duufbc")&&r(e,"class",M)},i:F,o:F,d(d){d&&v(e)}}}function y(n,e,i){let{reversed:g=0}=e,{title:o=""}=e,{description:a=""}=e,{link:l}=e,{image:f=""}=e,{imageAlt:t=""}=e,u;return Y.subscribe(s=>{i(6,u=s)}),n.$$set=s=>{"reversed"in s&&i(0,g=s.reversed),"title"in s&&i(1,o=s.title),"description"in s&&i(2,a=s.description),"link"in s&&i(3,l=s.link),"image"in s&&i(4,f=s.image),"imageAlt"in s&&i(5,t=s.imageAlt)},[g,o,a,l,f,t,u]}class B extends U{constructor(e){super(),W(this,e,y,Z,T,{reversed:0,title:1,description:2,link:3,image:4,imageAlt:5})}}function x(n){let e,i,g,o,a,l,f;return i=new B({props:{reversed:1,image:"lu-test-image.jpg",imageAlt:"lu ēka",title:"Datorzinātņu bakalaurs",link:H+"/programmas/datoriki",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  velit mauris, eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  cursus purus tempor id. Etiam efficitur risus quis odio consectetur, et  malesuada tellus condimentum. Aliquam in turpis quis augue laoreet  commodo. Morbi egestas, mauris id eleifend aliquet, tortor ex eleifend  ante, quis sollicitudin mi neque sit amet ante. Aliquam id pretium ex.  Aliquam quis orci in quam condimentum feugiat id eget nisl. Donec in  dapibus purus. Nam non dui leo. "}}),o=new B({props:{reversed:0,image:"lu-test-image.jpg",imageAlt:"lu ēka",title:"Ģeogrāfijas bakalaurs",link:H+"/programmas/geografi",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  velit mauris, eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  cursus purus tempor id. Etiam efficitur risus quis odio consectetur, et  malesuada tellus condimentum. Aliquam in turpis quis augue laoreet  commodo. Morbi egestas, mauris id eleifend aliquet, tortor ex eleifend  ante, quis sollicitudin mi neque sit amet ante. Aliquam id pretium ex.  Aliquam quis orci in quam condimentum feugiat id eget nisl. Donec in  dapibus purus. Nam non dui leo. "}}),l=new B({props:{reversed:1,image:"lu-test-image.jpg",imageAlt:"lu ēka",title:"Medicīnas bakalaurs",link:H+"/programmas/mediki",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  velit mauris, eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  cursus purus tempor id. Etiam efficitur risus quis odio consectetur, et  malesuada tellus condimentum. Aliquam in turpis quis augue laoreet  commodo. Morbi egestas, mauris id eleifend aliquet, tortor ex eleifend  ante, quis sollicitudin mi neque sit amet ante. Aliquam id pretium ex.  Aliquam quis orci in quam condimentum feugiat id eget nisl. Donec in  dapibus purus. Nam non dui leo. "}}),{c(){e=h("div"),P(i.$$.fragment),g=A(),P(o.$$.fragment),a=A(),P(l.$$.fragment),this.h()},l(t){e=_(t,"DIV",{class:!0});var u=k(e);V(i.$$.fragment,u),g=E(u),V(o.$$.fragment,u),a=E(u),V(l.$$.fragment,u),u.forEach(v),this.h()},h(){r(e,"class","container svelte-vmbyh9")},m(t,u){X(t,e,u),z(i,e,null),c(e,g),z(o,e,null),c(e,a),z(l,e,null),f=!0},p:F,i(t){f||(S(i.$$.fragment,t),S(o.$$.fragment,t),S(l.$$.fragment,t),f=!0)},o(t){C(i.$$.fragment,t),C(o.$$.fragment,t),C(l.$$.fragment,t),f=!1},d(t){t&&v(e),G(i),G(o),G(l)}}}class ae extends U{constructor(e){super(),W(this,e,null,x,T,{})}}export{ae as component};
