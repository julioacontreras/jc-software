import{s as U,o as W}from"../chunks/scheduler.e108d1fd.js";import{S as X,i as Y,s as $,g as h,m as V,B as Z,f,c as w,h as d,j as p,n as A,k as b,a as F,z as r,o as G,d as N,b as ee,t as M,x as te,r as se,u as ae,v as le,w as oe,p as ne}from"../chunks/index.255c5610.js";import{e as J}from"../chunks/each.e59479a4.js";import{i as ce}from"../chunks/index.57a31824.js";import{T as re}from"../chunks/index.8a26cbdd.js";const ie=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:ie},Symbol.toStringTag,{value:"Module"}));function K(u,o,i){const t=u.slice();return t[1]=o[i],t}function Q(u){let o,i;return o=new re({props:{decoration:"pill",gap:"sm",items:u[1].items,classes:"list-services"}}),{c(){se(o.$$.fragment)},l(t){ae(o.$$.fragment,t)},m(t,l){le(o,t,l),i=!0},p(t,l){const m={};l&1&&(m.items=t[1].items),o.$set(m)},i(t){i||(N(o.$$.fragment,t),i=!0)},o(t){M(o.$$.fragment,t),i=!1},d(t){oe(o,t)}}}function ue(u){let o,i,t,l,m,L,k,S=u[0]["services.title"]+"",C,j,y,x,E,T=u[0]["services.subtitle"]+"",I,z,O,B,_,g;document.title=o=" "+u[0]["general.services"]+" - "+u[0]["general.app"];let v=J(u[0]["services.list"]),s=[];for(let e=0;e<v.length;e+=1)s[e]=Q(K(u,v,e));const R=e=>M(s[e],1,1,()=>{s[e]=null});return{c(){i=$(),t=h("div"),l=h("section"),m=h("section"),L=$(),k=h("h1"),C=V(S),j=$(),y=h("section"),x=$(),E=h("h2"),I=V(T),z=$(),O=h("section"),B=$(),_=h("section");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){Z("svelte-46nfp2",document.head).forEach(f),i=w(e),t=d(e,"DIV",{class:!0});var a=p(t);l=d(a,"SECTION",{class:!0});var c=p(l);m=d(c,"SECTION",{class:!0}),p(m).forEach(f),L=w(c),k=d(c,"H1",{});var P=p(k);C=A(P,S),P.forEach(f),j=w(c),y=d(c,"SECTION",{class:!0}),p(y).forEach(f),x=w(c),E=d(c,"H2",{class:!0});var q=p(E);I=A(q,T),q.forEach(f),z=w(c),O=d(c,"SECTION",{class:!0}),p(O).forEach(f),B=w(c),_=d(c,"SECTION",{class:!0});var D=p(_);for(let H=0;H<s.length;H+=1)s[H].l(D);D.forEach(f),c.forEach(f),a.forEach(f),this.h()},h(){b(m,"class","spacer space-xl-4"),b(y,"class","spacer space-sm"),b(E,"class","width-sub-title"),b(O,"class","spacer space-xl"),b(_,"class","stack stack-direction-row"),b(l,"class","stack stack-direction-column fade-in"),b(t,"class","container")},m(e,n){F(e,i,n),F(e,t,n),r(t,l),r(l,m),r(l,L),r(l,k),r(k,C),r(l,j),r(l,y),r(l,x),r(l,E),r(E,I),r(l,z),r(l,O),r(l,B),r(l,_);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(_,null);g=!0},p(e,[n]){if((!g||n&1)&&o!==(o=" "+e[0]["general.services"]+" - "+e[0]["general.app"])&&(document.title=o),(!g||n&1)&&S!==(S=e[0]["services.title"]+"")&&G(C,S),(!g||n&1)&&T!==(T=e[0]["services.subtitle"]+"")&&G(I,T),n&1){v=J(e[0]["services.list"]);let a;for(a=0;a<v.length;a+=1){const c=K(e,v,a);s[a]?(s[a].p(c,n),N(s[a],1)):(s[a]=Q(c),s[a].c(),N(s[a],1),s[a].m(_,null))}for(ne(),a=v.length;a<s.length;a+=1)R(a);ee()}},i(e){if(!g){for(let n=0;n<v.length;n+=1)N(s[n]);g=!0}},o(e){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)M(s[n]);g=!1},d(e){e&&(f(i),f(t)),te(s,e)}}}function fe(u,o,i){let t={};return ce.subscribe(l=>{i(0,t=l)}),W(async()=>{window.document.body.classList.remove("page-home"),window.document.body.classList.add("page-default"),window.document.body.classList.add("image-fill")}),[t]}class ve extends X{constructor(o){super(),Y(this,o,fe,ue,U,{})}}export{ve as component,ge as universal};