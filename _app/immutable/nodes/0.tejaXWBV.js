import{a as q,t as D,c as Re,b as Ge}from"../chunks/disclose-version.MpzCzdQ7.js";import"../chunks/legacy.DC9al8ZY.js";import{l as Pe,n as Ve,o as Q,q as xe,v as Fe,w as se,x as B,y as ze,z as Ye,A as he,m as pe,B as ye,C as ke,D as be,E as ae,F as oe,f as Be,G as Je,p as Ae,H as le,s as K,i as c,h as b,r,I as Ue,b as de,g as o,j,J as Se,c as Ce}from"../chunks/runtime.DTEeyZv_.js";import{p as J,i as fe,s as N,e as H,b as Qe,c as ne}from"../chunks/props.6uuxDuOc.js";import{T as G,g as W,S as De,t as Oe,H as X,i as je,e as Ne,s as g,a as Te,b as He,c as We,d as we,f as re,h as Xe,j as Ze,k as Le,l as $e,m as et,L as tt}from"../chunks/socialmedia.conf.DFpgEhbV.js";import{o as st}from"../chunks/index-client.CKPjMsXO.js";const ie=0,U=1,ce=2;function at(s,e,t,i,v){Q&&xe();var a=s,n=Pe(),l=Je,u,y,w,S,E=(n?he:pe)(void 0),m=(n?he:pe)(void 0),h=!1;function k(f,d){h=!0,d&&(ye(R),ke(R),be(l));try{f===ie&&t&&(y?ae(y):y=B(()=>t(a))),f===U&&i&&(w?ae(w):w=B(()=>i(a,E))),f===ce&&v&&(S?ae(S):S=B(()=>v(a,m))),f!==ie&&y&&oe(y,()=>y=null),f!==U&&w&&oe(w,()=>w=null),f!==ce&&S&&oe(S,()=>S=null)}finally{d&&(be(null),ke(null),ye(null),Be())}}var R=Ve(()=>{if(u!==(u=e())){if(Fe(u)){var f=u;h=!1,f.then(d=>{f===u&&(se(E,d),k(U,!0))},d=>{if(f===u)throw se(m,d),k(ce,!0),m.v}),Q?t&&(y=B(()=>t(a))):ze(()=>{h||k(ie,!0)})}else se(E,u),k(U,!1);return()=>u=null}});Q&&(a=Ye)}function ot(s,e,t,i,v){var l;Q&&xe();var a=(l=e.$$slots)==null?void 0:l[t],n=!1;a===!0&&(a=e.children,n=!0),a===void 0||a(s,n?()=>i:i)}const lt=!0,Gt=Object.freeze(Object.defineProperty({__proto__:null,prerender:lt},Symbol.toStringTag,{value:"Module"}));function nt(){const s=window.matchMedia("(prefers-color-scheme: dark)").matches?G.DARK:G.LIGHT;W()==null&&localStorage.setItem(De.THEME,s),Oe.set(W()),document.querySelector(X.HTML).setAttribute(X.THEME,W())}function ue(){const e=W()===G.DARK?G.LIGHT:G.DARK;localStorage.setItem(De.THEME,e),Oe.set(e),document.querySelector(X.HTML).setAttribute(X.THEME,e)}const rt="red",it="hidden",ct={color:rt,overflow:it,"border-right":".15em solid orange","white-space":"nowrap","letter-spacing":".15em"},ut={width:"0%"},vt={width:"100%"},dt={from:ut,to:vt},ft={"from, to":{"border-color":"transparent"},"50%":{"border-color":"orange"}},mt=[{test:ct}],gt=[{typing:dt},{"blink-caret":ft}];function _t(){const s=new CSSStyleSheet;document.adoptedStyleSheets=[s],qe(s,mt,"class"),qe(s,gt,"kf")}function qe(s,e,t){for(var i=0;i<e.length;i++){const v=e[i];Object.keys(v).forEach(function(a){const n=t=="kf"?new ht(a,v[a]):new pt(a,v[a]);s.insertRule(n.get())})}}class ht{constructor(e,t){this.keyframe="@keyframes "+e,this.json=t}get(){var e=this.keyframe+" { ";for(const t in this.json){e+=t+" {";for(const i in this.json[t])e+=" "+i+":"+this.json[t][i]+"; ";e+="} "}return e+="} ",e}getKeyFrameRule(e,t){const i="CSSKeyframesRule",v=e.cssRules;let a=null,n=0;for(;n<v.length&&a==null;){let l=v[n];if(l[Symbol.toStringTag]==i&&l.name==t){a=l;break}n++}return a}}class pt{constructor(e,t){return this.className="."+e,this.json=t,this.get()}get(){var e=this.className+" { ";for(const t in this.json)e+=t+":"+this.json[t]+"; ";return e+="}",e}getCssRule(e,t){const i="CSSStyleRule",v=e.cssRules;let a=null,n=0;for(;n<v.length&&a==null;){let l=v[n];if(l[Symbol.toStringTag]==i&&l.selectorText==t){a=l;break}n++}return a}}var yt=D('<div id="loading-page" class="page svelte-1htrvgw" name="loading-page"><div class="loader svelte-1htrvgw"></div> <h1 class="svelte-1htrvgw">Loading ...</h1></div>');function kt(s){var e=yt();q(s,e)}const bt="Kevin LOCKSY",St="artsy.locksy@proton.me",Tt="Photographer, Sketch Artist",wt={img:{light:"public/img/logo/logo_darkmode_kevinLocksy.jpg",dark:"public/img/logo/logo_darkmode_kevinLocksy.jpg"},alt:"Dark/Light mode Logo Kevin Locksy",title:"Dark/Light mode"},Lt="2024",ve={pseudo:bt,mail:St,profession:Tt,logo:wt,date_creation:Lt},Ee="click_outside";function qt(s){const e=t=>{s&&!s.contains(t.target)&&!t.defaultPrevented&&(s.dispatchEvent(new Event(Ee)),console.log("Click outside element '"+(s.id?s.id:s.className)+"'. Dispatch event:",Ee))};return document.addEventListener("click",e),{destroy(){document.removeEventListener("click",e)}}}var Et=D('<img class="flag icon svelte-1q6fqm3">'),Rt=D("<span> </span>"),xt=D('<button class="options-item svelte-1q6fqm3"><!> <span class="size-l svelte-1q6fqm3"> </span> <span class="option-tooltip svelte-1q6fqm3"> </span></button>'),At=D('<div class="component svelte-1q6fqm3"><div class="dropdown-container svelte-1q6fqm3" role="button" tabindex="0"><button class="options-selected svelte-1q6fqm3"><img class="flag icon svelte-1q6fqm3"> <span class="size-l svelte-1q6fqm3"> </span> <span class="options-selected-arrow svelte-1q6fqm3"></span></button> <div class="options-list svelte-1q6fqm3"></div></div></div>');function Ct(s,e){Ae(e,!1);let t=J(e,"options",8),i=J(e,"defaultValue",8),v=J(e,"onClick",8),a=J(e,"optionsListOnTop",8,!1),n=le(i()),l=le(0);t().forEach(_=>{_.value===i()&&K(l,_.id)});let u=le(!1);function y(){o(u)&&K(u,!o(u))}function w(){K(u,!o(u))}function S(_){v()&&v()(_),K(n,_.currentTarget.value),K(l,_.currentTarget.getAttribute("data-option-id")),y()}je();var E=At(),m=c(E),h=c(m),k=c(h),R=b(k,2),f=c(R,!0);r(R),Ue(2),r(h);var d=b(h,2);Ne(d,5,t,He,(_,p)=>{var P=Re(),V=de(P);fe(V,()=>o(l)!=o(p).id,Z=>{var L=xt(),F=c(L);fe(F,()=>o(p).logo,x=>{var T=Et();j(()=>{g(T,"src",o(p).logo),g(T,"alt",o(p).value),g(T,"title",o(p).label)}),q(x,T)},x=>{var T=Rt(),$=c(T,!0);r(T),j(()=>N($,o(p).label)),q(x,T)});var O=b(F,2),I=c(O,!0);r(O);var z=b(O,2),M=c(z,!0);r(z),r(L),j(()=>{g(L,"data-option-id",o(p).id),Te(L,o(p).value),N(I,o(p).label),N(M,o(p).locale)}),H("click",L,x=>S(x)),q(Z,L)}),q(_,P)}),r(d),r(m),We(m,_=>qt(_)),Se(()=>H("click_outside",m,y)),Se(()=>H("keydown",m,()=>{})),r(E),j(()=>{g(h,"data-option-id",o(l)),Te(h,o(n)),g(k,"src",t()[o(l)].logo),g(k,"alt",t()[o(l)].value),g(k,"title",t()[o(l)].label),N(f,t()[o(l)].label),we(d,"open",o(u)),we(d,"optionsListOnTop",a())}),H("click",h,()=>w(o(u))),q(s,E),Ce()}var Dt=D('<div class="contact-item svelte-y83mos"><a target="_blank"><img class="contact-logo logo highlight svelte-y83mos"> <p class="contact-logo-caption svelte-y83mos"><!></p></a></div>'),Ot=D('<header class="svelte-y83mos"><div id="trademark" class="svelte-y83mos"><div id="color-scheme" role="button" tabindex="0" class="svelte-y83mos"><img class="logo locksy"></div> <h1 class="title"> </h1></div> <div id="lang-dropdown" class="svelte-y83mos"><!></div></header> <main class="svelte-y83mos"><!></main> <footer class="svelte-y83mos"><p id="credits" class="svelte-y83mos"> </p> <div id="contact" class="svelte-y83mos"></div> <p id="date" class="svelte-y83mos"> <!></p></footer>',1);function Pt(s,e){Ae(e,!1);const t=Qe(),i=()=>ne(et,"$i18nStore",t),v=()=>ne(re,"$i18n",t),a=()=>ne(Le,"$isDarkTheme",t),n=ve.logo,l=ve.date_creation,u=new Date().getFullYear(),y=tt.language,w=async m=>{const h=m.currentTarget.value;await re.switchLang(h)};st(()=>{nt(),_t()}),je();var S=Re(),E=de(S);at(E,()=>re.init(),m=>{kt(m,{})},(m,h)=>{var k=Ot(),R=de(k),f=c(R),d=c(f),_=c(d);r(d);var p=b(d,2),P=c(p);r(p),r(f);var V=b(f,2),Z=c(V);Ct(Z,{options:y,get defaultValue(){return i()},onClick:w}),r(V),r(R);var L=b(R,2),F=c(L);ot(F,e,"default",{},null),r(L);var O=b(L,2),I=c(O),z=c(I,!0);r(I);var M=b(I,2);Ne(M,5,()=>Xe,He,(A,C)=>{let Ie=()=>o(C).url,me=()=>o(C).img,ge=()=>o(C).alt,Me=()=>o(C).title;var ee=Dt(),te=c(ee),Y=c(te),_e=b(Y,2),Ke=c(_e);Ze(Ke,ge,!1,!1),r(_e),r(te),r(ee),j(()=>{g(te,"href",Ie()),g(Y,"src",a()?me().dark:me().light),g(Y,"alt",ge()),g(Y,"title",Me())}),q(A,ee)}),r(M);var x=b(M,2),T=c(x,!0);T.nodeValue=l;var $=b(T);fe($,()=>u.toString()!=l,A=>{var C=Ge();C.nodeValue=`- ${u??""}`,q(A,C)}),r(x),r(O),j(()=>{g(_,"src",Le?n.img.dark:n.img.light),g(_,"alt",n.alt),g(_,"title",n.title),N(P,`${ve.pseudo??""} - IT Portfolio`),N(z,v().footer.credits)}),H("click",d,function(...A){ue==null||ue.apply(this,A)}),H("keyup",d,function(A){$e.call(this,e,A)}),q(m,k)}),q(s,S),Ce()}export{Pt as component,Gt as universal};