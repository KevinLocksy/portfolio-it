var it=l=>{throw TypeError(l)};var Nt=(l,e,a)=>e.has(l)||it("Cannot "+a);var ot=(l,e,a)=>e.has(l)?it("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(l):e.set(l,a);var Ue=(l,e,a)=>(Nt(l,e,"access private method"),a);import{s as ge,d as fe,n as R,r as Pt,h as Ye,j as jt,b as qt,p as ct,e as yt}from"../chunks/scheduler.DxSnPaMf.js";import{S as _e,i as pe,g as u,m as Q,s as T,h,j as v,n as Z,f as c,c as L,x as ve,k as r,a as B,z as i,A as Ge,o as ue,e as ut,B as Ce,d as Ie,p as wt,b as Ht,t as Ve,r as Oe,u as We,v as Xe,w as Be,q as ht,H as Pe,D as we,C as Ft}from"../chunks/index.DNo3ptfv.js";import{b as At,c as Ke,e as ie,i as Mt}from"../chunks/socialmedia.conf.CjTypK8V.js";const Yt=[{name:"Java",img:{path:"public/img/logo/techStack/java-sqr.logo.png",title:"",alt:"Java logo"}},{name:"Python",img:{path:"public/img/logo/techStack/python-sqr.logo.png",title:"",alt:"Python logo"}},{name:"C++",img:{path:"public/img/logo/techStack/cpp-sqr.logo.png",title:"",alt:"C++ logo"}},{name:"Html5",img:{path:"public/img/logo/techStack/html5-sqr.logo.png",title:"",alt:"HTML5 logo"}},{name:"JS",img:{path:"public/img/logo/techStack/js-sqr.logo.png",title:"",alt:"Javascript logo"}},{name:"CSS3",img:{path:"public/img/logo/techStack/css3-sqr.logo.png",title:"",alt:"CSS3 logo"}},{name:"Svelte",img:{path:"public/img/logo/techStack/svelte-sqr.logo.png",title:"",alt:"PytSveltehon logo"}},{name:"React Native",img:{path:"public/img/logo/techStack/reactNative-sqr.logo.png",title:"",alt:"React Native logo"}},{name:"Photoshop",img:{path:"public/img/logo/techStack/photoshop-sqr.logo.png",title:"",alt:"Photoshop logo"}},{name:"Latex",img:{path:"public/img/logo/techStack/latex-sqr.logo.png",title:"",alt:"Latex logo"}}],ft="pointermove",dt="pointerout",mt="scroll",vt="scrollend";function Gt(){const l=new Ot;document.addEventListener(ft,e),document.addEventListener(mt,a);function e(s){l.setCursorProperties(s.clientX,s.clientY),s.target.removeEventListener(dt,t)}function a(s){const o=document.documentElement;l.setScrollProperties(o.scrollLeft,o.scrollTop),s.target.removeEventListener(vt,t)}function t(s){s.target.removeEventListener(ft,e),s.target.removeEventListener(dt,t),s.target.removeEventListener(mt,a),s.target.removeEventListener(vt,t)}}var He,Re;class Ot{constructor(){ot(this,He);this.posX={scroll:0,mouse:0},this.posY={scroll:0,mouse:0}}setCursorProperties(e,a){this.posX.mouse=e,this.posY.mouse=a,Ue(this,He,Re).call(this)}setScrollProperties(e,a){this.posX.scroll=e,this.posY.scroll=a,Ue(this,He,Re).call(this)}}He=new WeakSet,Re=function(){const e=document.documentElement;e.style.setProperty("--x",this.posX.scroll+this.posX.mouse),e.style.setProperty("--y",this.posY.scroll+this.posY.mouse)};function Xt(l){const e=l.innerText;l.innerText="";var a=0,t=50;s();function s(){a<e.length&&(l.innerHTML+=e.charAt(a),a++,setTimeout(s,t))}}function gt(l,e,a){const t=l.slice();return t[15]=e[a],t}function _t(l,e,a){const t=l.slice();return t[18]=e[a],t}function pt(l){let e,a=ie(l[7]),t=[];for(let s=0;s<a.length;s+=1)t[s]=bt(_t(l,a,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=ut()},l(s){for(let o=0;o<t.length;o+=1)t[o].l(s);e=ut()},m(s,o){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(s,o);B(s,e,o)},p(s,o){if(o&128){a=ie(s[7]);let n;for(n=0;n<a.length;n+=1){const f=_t(s,a,n);t[n]?t[n].p(f,o):(t[n]=bt(f),t[n].c(),t[n].m(e.parentNode,e))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},d(s){s&&c(e),Ce(t,s)}}}function bt(l){let e,a,t,s=l[18]+"",o,n;return{c(){e=u("div"),a=u("span"),t=T(),o=Q(s),n=T(),this.h()},l(f){e=h(f,"DIV",{class:!0,role:!0});var d=v(e);a=h(d,"SPAN",{class:!0}),v(a).forEach(c),t=L(d),o=Z(d,s),n=L(d),d.forEach(c),this.h()},h(){r(a,"class","dot svelte-emnuh"),r(e,"class","stackitem svelte-emnuh"),r(e,"role","listitem")},m(f,d){B(f,e,d),i(e,a),i(e,t),i(e,o),i(e,n)},p(f,d){d&128&&s!==(s=f[18]+"")&&ue(o,s)},d(f){f&&c(e)}}}function kt(l){let e,a=ie(l[4]),t=[];for(let s=0;s<a.length;s+=1)t[s]=Et(gt(l,a,s));return{c(){e=u("ul");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=h(s,"UL",{class:!0});var o=v(e);for(let n=0;n<t.length;n+=1)t[n].l(o);o.forEach(c),this.h()},h(){r(e,"class","feature")},m(s,o){B(s,e,o);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(s,o){if(o&16){a=ie(s[4]);let n;for(n=0;n<a.length;n+=1){const f=gt(s,a,n);t[n]?t[n].p(f,o):(t[n]=Et(f),t[n].c(),t[n].m(e,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=a.length}},d(s){s&&c(e),Ce(t,s)}}}function Et(l){let e,a=l[15]+"",t;return{c(){e=u("li"),t=Q(a),this.h()},l(s){e=h(s,"LI",{class:!0});var o=v(e);t=Z(o,a),o.forEach(c),this.h()},h(){r(e,"class","svelte-emnuh")},m(s,o){B(s,e,o),i(e,t)},p(s,o){o&16&&a!==(a=s[15]+"")&&ue(t,a)},d(s){s&&c(e)}}}function Bt(l){let e,a,t,s,o,n,f,d,m,I,S,g,D,k,w,j,H,b,W,M,C,Y,$,G,J,P,q,y,F,re="Description",U,te,le,be,se,x,N="Features",De,ee,_,A,p,ae,de,oe,ke,Se,z,K,he,Te,me,Ee,ne,ze,O=l[7]&&pt(l),X=l[4]&&kt(l);return{c(){e=u("div"),a=u("div"),t=u("div"),s=u("div"),o=u("div"),n=Q("img "),f=Q(l[8]),d=T(),m=u("div"),I=u("h2"),S=u("a"),g=Q(l[0]),D=T(),k=u("p"),w=Q(l[1]),j=T(),H=u("p"),b=Q(l[2]),W=T(),M=u("a"),C=u("img"),$=T(),G=u("div"),O&&O.c(),J=T(),P=u("div"),q=u("div"),y=u("div"),F=u("h2"),F.textContent=re,U=T(),te=u("p"),le=Q(l[3]),be=T(),se=u("div"),x=u("h5"),x.textContent=N,De=T(),X&&X.c(),ee=T(),_=u("div"),A=u("a"),p=u("img"),de=T(),oe=u("span"),ke=Q(l[5]),Se=T(),z=u("a"),K=u("img"),Te=T(),me=u("span"),Ee=Q(l[6]),this.h()},l(E){e=h(E,"DIV",{class:!0,role:!0,tabindex:!0});var V=v(e);a=h(V,"DIV",{class:!0});var Ae=v(a);t=h(Ae,"DIV",{class:!0});var Qe=v(t);s=h(Qe,"DIV",{class:!0});var Me=v(s);o=h(Me,"DIV",{class:!0});var Je=v(o);n=Z(Je,"img "),f=Z(Je,l[8]),Je.forEach(c),d=L(Me),m=h(Me,"DIV",{class:!0});var ce=v(m);I=h(ce,"H2",{class:!0});var Ze=v(I);S=h(Ze,"A",{href:!0,target:!0});var $e=v(S);g=Z($e,l[0]),$e.forEach(c),Ze.forEach(c),D=L(ce),k=h(ce,"P",{class:!0});var xe=v(k);w=Z(xe,l[1]),xe.forEach(c),j=L(ce),H=h(ce,"P",{class:!0});var et=v(H);b=Z(et,l[2]),et.forEach(c),W=L(ce),M=h(ce,"A",{class:!0,href:!0,target:!0});var tt=v(M);C=h(tt,"IMG",{class:!0,src:!0,alt:!0,title:!0}),tt.forEach(c),$=L(ce),G=h(ce,"DIV",{class:!0,role:!0});var lt=v(G);O&&O.l(lt),lt.forEach(c),ce.forEach(c),Me.forEach(c),Qe.forEach(c),J=L(Ae),P=h(Ae,"DIV",{class:!0});var st=v(P);q=h(st,"DIV",{class:!0});var Le=v(q);y=h(Le,"DIV",{class:!0});var Ne=v(y);F=h(Ne,"H2",{class:!0,"data-svelte-h":!0}),ve(F)!=="svelte-hqk62g"&&(F.textContent=re),U=L(Ne),te=h(Ne,"P",{class:!0});var at=v(te);le=Z(at,l[3]),at.forEach(c),Ne.forEach(c),be=L(Le),se=h(Le,"DIV",{class:!0});var je=v(se);x=h(je,"H5",{"data-svelte-h":!0}),ve(x)!=="svelte-nq821r"&&(x.textContent=N),De=L(je),X&&X.l(je),je.forEach(c),ee=L(Le),_=h(Le,"DIV",{class:!0});var qe=v(_);A=h(qe,"A",{class:!0,href:!0,target:!0});var ye=v(A);p=h(ye,"IMG",{class:!0,src:!0,alt:!0,title:!0}),de=L(ye),oe=h(ye,"SPAN",{});var rt=v(oe);ke=Z(rt,l[5]),rt.forEach(c),ye.forEach(c),Se=L(qe),z=h(qe,"A",{class:!0,href:!0,target:!0});var Fe=v(z);K=h(Fe,"IMG",{class:!0,src:!0,alt:!0,title:!0}),Te=L(Fe),me=h(Fe,"SPAN",{});var nt=v(me);Ee=Z(nt,l[6]),nt.forEach(c),Fe.forEach(c),qe.forEach(c),Le.forEach(c),st.forEach(c),Ae.forEach(c),V.forEach(c),this.h()},h(){r(o,"class","card-img svelte-emnuh"),r(S,"href",l[6]),r(S,"target","_blank"),r(I,"class","title svelte-emnuh"),r(k,"class","standfirst svelte-emnuh"),r(H,"class","summary svelte-emnuh"),r(C,"class","logo card svelte-emnuh"),fe(C.src,Y=l[11]?l[10].dark:l[10].light)||r(C,"src",Y),r(C,"alt",l[5]),r(C,"title",l[5]),r(M,"class","git-link"),r(M,"href",l[5]),r(M,"target","_blank"),r(G,"class","stack svelte-emnuh"),r(G,"role","list"),r(m,"class","card-body svelte-emnuh"),r(s,"class","card-inner svelte-emnuh"),r(t,"class","card-front svelte-emnuh"),r(F,"class","svelte-emnuh"),r(te,"class","description svelte-emnuh"),r(y,"class","card-desc svelte-emnuh"),r(se,"class","card-feat svelte-emnuh"),r(p,"class","logo card svelte-emnuh"),fe(p.src,ae=l[11]?l[10].dark:l[10].light)||r(p,"src",ae),r(p,"alt",l[5]),r(p,"title",l[5]),r(A,"class","git-link svelte-emnuh"),r(A,"href",l[5]),r(A,"target","_blank"),r(K,"class","logo card svelte-emnuh"),fe(K.src,he=l[11]?l[10].dark:l[10].light)||r(K,"src",he),r(K,"alt",l[5]),r(K,"title",l[5]),r(z,"class","demo-link svelte-emnuh"),r(z,"href",l[6]),r(z,"target","_blank"),r(_,"class","card-link svelte-emnuh"),r(q,"class","card-inner svelte-emnuh"),r(P,"class","card-back svelte-emnuh"),r(a,"class","card-container svelte-emnuh"),r(e,"class","component card animation svelte-emnuh"),r(e,"role","button"),r(e,"tabindex","0")},m(E,V){B(E,e,V),i(e,a),i(a,t),i(t,s),i(s,o),i(o,n),i(o,f),i(s,d),i(s,m),i(m,I),i(I,S),i(S,g),i(m,D),i(m,k),i(k,w),i(m,j),i(m,H),i(H,b),i(m,W),i(m,M),i(M,C),i(m,$),i(m,G),O&&O.m(G,null),i(a,J),i(a,P),i(P,q),i(q,y),i(y,F),i(y,U),i(y,te),i(te,le),i(q,be),i(q,se),i(se,x),i(se,De),X&&X.m(se,null),i(q,ee),i(q,_),i(_,A),i(A,p),i(A,de),i(A,oe),i(oe,ke),i(_,Se),i(_,z),i(z,K),i(z,Te),i(z,me),i(me,Ee),l[14](e),ne||(ze=[Ge(e,"click",l[12]),Ge(e,"keyup",l[13])],ne=!0)},p(E,[V]){V&256&&ue(f,E[8]),V&1&&ue(g,E[0]),V&64&&r(S,"href",E[6]),V&2&&ue(w,E[1]),V&4&&ue(b,E[2]),V&3072&&!fe(C.src,Y=E[11]?E[10].dark:E[10].light)&&r(C,"src",Y),V&32&&r(C,"alt",E[5]),V&32&&r(C,"title",E[5]),V&32&&r(M,"href",E[5]),E[7]?O?O.p(E,V):(O=pt(E),O.c(),O.m(G,null)):O&&(O.d(1),O=null),V&8&&ue(le,E[3]),E[4]?X?X.p(E,V):(X=kt(E),X.c(),X.m(se,null)):X&&(X.d(1),X=null),V&3072&&!fe(p.src,ae=E[11]?E[10].dark:E[10].light)&&r(p,"src",ae),V&32&&r(p,"alt",E[5]),V&32&&r(p,"title",E[5]),V&32&&ue(ke,E[5]),V&32&&r(A,"href",E[5]),V&3072&&!fe(K.src,he=E[11]?E[10].dark:E[10].light)&&r(K,"src",he),V&32&&r(K,"alt",E[5]),V&32&&r(K,"title",E[5]),V&64&&ue(Ee,E[6]),V&64&&r(z,"href",E[6])},i:R,o:R,d(E){E&&c(e),O&&O.d(),X&&X.d(),l[14](null),ne=!1,Pt(ze)}}}const It="A";function Jt(l,e,a){let t;Ye(l,At,b=>a(11,t=b));let{projectName:s,standfirst:o,summary:n,description:f,features:d,git_url:m,demo:I,stack:S,img:g}=e,D,k="";Ke.forEach(b=>{b.name==="Github"&&a(10,k=b.img)});function w(b){if(b.target.nodeName===It||b.target.parentNode.nodeName===It)return;const W=typeof D.style.transform=="string"&&D.style.transform.length===0;a(9,D.style.transform=W?"rotateY(180deg)":"",D),W?D.classList.remove("animation"):D.classList.add("animation")}function j(b){jt.call(this,l,b)}function H(b){qt[b?"unshift":"push"](()=>{D=b,a(9,D)})}return l.$$set=b=>{"projectName"in b&&a(0,s=b.projectName),"standfirst"in b&&a(1,o=b.standfirst),"summary"in b&&a(2,n=b.summary),"description"in b&&a(3,f=b.description),"features"in b&&a(4,d=b.features),"git_url"in b&&a(5,m=b.git_url),"demo"in b&&a(6,I=b.demo),"stack"in b&&a(7,S=b.stack),"img"in b&&a(8,g=b.img)},[s,o,n,f,d,m,I,S,g,D,k,t,w,j,H]}class Ut extends _e{constructor(e){super(),pe(this,e,Jt,Bt,ge,{projectName:0,standfirst:1,summary:2,description:3,features:4,git_url:5,demo:6,stack:7,img:8})}}function Dt(l,e,a){const t=l.slice();return t[2]=e[a],t}function St(l){let e,a;return e=new Ut({props:{projectName:l[2].project,standfirst:l[2].standfirst,summary:l[2].summary,description:l[2].description,features:l[2].features,git_url:l[2].git,demo:l[2].demo,stack:l[2].stack,img:l[2].img}}),{c(){Oe(e.$$.fragment)},l(t){We(e.$$.fragment,t)},m(t,s){Xe(e,t,s),a=!0},p(t,s){const o={};s&1&&(o.projectName=t[2].project),s&1&&(o.standfirst=t[2].standfirst),s&1&&(o.summary=t[2].summary),s&1&&(o.description=t[2].description),s&1&&(o.features=t[2].features),s&1&&(o.git_url=t[2].git),s&1&&(o.demo=t[2].demo),s&1&&(o.stack=t[2].stack),s&1&&(o.img=t[2].img),e.$set(o)},i(t){a||(Ie(e.$$.fragment,t),a=!0)},o(t){Ve(e.$$.fragment,t),a=!1},d(t){Be(e,t)}}}function Kt(l){let e,a,t=ie(l[0]),s=[];for(let n=0;n<t.length;n+=1)s[n]=St(Dt(l,t,n));const o=n=>Ve(s[n],1,1,()=>{s[n]=null});return{c(){e=u("div");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=h(n,"DIV",{class:!0});var f=v(e);for(let d=0;d<s.length;d+=1)s[d].l(f);f.forEach(c),this.h()},h(){r(e,"class","tab svelte-21xnxd")},m(n,f){B(n,e,f);for(let d=0;d<s.length;d+=1)s[d]&&s[d].m(e,null);a=!0},p(n,[f]){if(f&1){t=ie(n[0]);let d;for(d=0;d<t.length;d+=1){const m=Dt(n,t,d);s[d]?(s[d].p(m,f),Ie(s[d],1)):(s[d]=St(m),s[d].c(),Ie(s[d],1),s[d].m(e,null))}for(wt(),d=t.length;d<s.length;d+=1)o(d);Ht()}},i(n){if(!a){for(let f=0;f<t.length;f+=1)Ie(s[f]);a=!0}},o(n){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)Ve(s[f]);a=!1},d(n){n&&c(e),Ce(s,n)}}}function Rt(l,e,a){let t,s;return Ye(l,Mt,o=>a(1,s=o)),l.$$.update=()=>{l.$$.dirty&2&&a(0,t=s.webapp)},[t,s]}class Wt extends _e{constructor(e){super(),pe(this,e,Rt,Kt,ge,{})}}function zt(l){let e,a="";return{c(){e=u("div"),e.innerHTML=a,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),ve(e)!=="svelte-1fhwsro"&&(e.innerHTML=a),this.h()},h(){r(e,"class","tab svelte-21xnxd")},m(t,s){B(t,e,s)},p:R,i:R,o:R,d(t){t&&c(e)}}}class Qt extends _e{constructor(e){super(),pe(this,e,null,zt,ge,{})}}function Zt(l){let e,a="";return{c(){e=u("div"),e.innerHTML=a,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),ve(e)!=="svelte-1fhwsro"&&(e.innerHTML=a),this.h()},h(){r(e,"class","tab svelte-21xnxd")},m(t,s){B(t,e,s)},p:R,i:R,o:R,d(t){t&&c(e)}}}class $t extends _e{constructor(e){super(),pe(this,e,null,Zt,ge,{})}}function xt(l){let e,a="";return{c(){e=u("div"),e.innerHTML=a,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),ve(e)!=="svelte-1fhwsro"&&(e.innerHTML=a),this.h()},h(){r(e,"class","tab svelte-21xnxd")},m(t,s){B(t,e,s)},p:R,i:R,o:R,d(t){t&&c(e)}}}class el extends _e{constructor(e){super(),pe(this,e,null,xt,ge,{})}}function tl(l){let e,a="";return{c(){e=u("div"),e.innerHTML=a,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),ve(e)!=="svelte-1fhwsro"&&(e.innerHTML=a),this.h()},h(){r(e,"class","tab svelte-21xnxd")},m(t,s){B(t,e,s)},p:R,i:R,o:R,d(t){t&&c(e)}}}class ll extends _e{constructor(e){super(),pe(this,e,null,tl,ge,{})}}const sl=[{id:0,label:"Web applications",icon:"&#x1F310;",iconlabel:"www",component:Wt,comments:"web applications in svelte/pure css..."},{id:1,label:"Mobile applications",icon:"&#x1F4F1;",iconlabel:"Mobile",component:Qt,comments:"Mobile applications in react native/flutter..."},{id:2,label:"Algorithms",icon:"&radic;&#960;=&#8747;e<sup>-...</sup>",iconlabel:"Algorithms",component:$t,comments:"Algorithms in python, ml..."},{id:3,label:"Document templates",icon:"&#x1F4DD;",iconlabel:"Documents",component:el,comments:"Document templates in latex/figma css..."},{id:4,label:"Snippet codes",icon:"&#x1F469;&#x200D;&#x1F4BB;",iconlabel:"Snippets",component:ll,comments:"Snippet codes in every language"}];function Tt(l,e,a){const t=l.slice();return t[4]=e[a],t}function Lt(l){let e,a,t,s,o=l[4].icon+"",n,f,d=l[4].label+"",m,I,S,g,D,k=l[4].icon+"",w,j,H=l[4].iconlabel+"",b,W,M,C,Y,$,G;return{c(){e=u("li"),a=u("div"),t=u("h5"),s=new Pe(!1),n=T(),f=u("p"),m=Q(d),I=T(),S=u("div"),g=u("h3"),D=new Pe(!1),w=T(),j=u("p"),b=Q(H),W=T(),this.h()},l(J){e=h(J,"LI",{class:!0,role:!0,tabindex:!0,"aria-selected":!0,"aria-controls":!0});var P=v(e);a=h(P,"DIV",{class:!0});var q=v(a);t=h(q,"H5",{});var y=v(t);s=we(y,!1),y.forEach(c),n=L(q),f=h(q,"P",{});var F=v(f);m=Z(F,d),F.forEach(c),q.forEach(c),I=L(P),S=h(P,"DIV",{class:!0});var re=v(S);g=h(re,"H3",{});var U=v(g);D=we(U,!1),U.forEach(c),w=L(re),j=h(re,"P",{class:!0});var te=v(j);b=Z(te,H),te.forEach(c),re.forEach(c),W=L(P),P.forEach(c),this.h()},h(){s.a=null,r(a,"class","tab-list-item-label svelte-8vn7r8"),D.a=null,r(j,"class","svelte-8vn7r8"),r(S,"class","tab-list-item-icon svelte-8vn7r8"),r(e,"class",M=ct(l[1](l[4].id)?"active":"")+" svelte-8vn7r8"),r(e,"role","tab"),r(e,"tabindex",C=l[1](l[4].id)?"0":"-1"),r(e,"aria-selected",Y=l[1](l[4].id)),r(e,"aria-controls","panel-"+l[4].id)},m(J,P){B(J,e,P),i(e,a),i(a,t),s.m(o,t),i(a,n),i(a,f),i(f,m),i(e,I),i(e,S),i(S,g),D.m(k,g),i(S,w),i(S,j),i(j,b),i(e,W),$||(G=[Ge(e,"click",l[3](l[4].id)),Ge(e,"keydown",nl)],$=!0)},p(J,P){l=J,P&2&&M!==(M=ct(l[1](l[4].id)?"active":"")+" svelte-8vn7r8")&&r(e,"class",M),P&2&&C!==(C=l[1](l[4].id)?"0":"-1")&&r(e,"tabindex",C),P&2&&Y!==(Y=l[1](l[4].id))&&r(e,"aria-selected",Y)},d(J){J&&c(e),$=!1,Pt(G)}}}function al(l){let e,a,t,s,o,n,f,d=ie(l[2]),m=[];for(let g=0;g<d.length;g+=1)m[g]=Lt(Tt(l,d,g));var I=l[2][l[0]].component;function S(g,D){return{}}return I&&(n=ht(I,S())),{c(){e=u("div"),a=u("div"),t=u("ul");for(let g=0;g<m.length;g+=1)m[g].c();s=T(),o=u("div"),n&&Oe(n.$$.fragment),this.h()},l(g){e=h(g,"DIV",{name:!0,class:!0});var D=v(e);a=h(D,"DIV",{id:!0});var k=v(a);t=h(k,"UL",{role:!0,"aria-label":!0,class:!0});var w=v(t);for(let H=0;H<m.length;H+=1)m[H].l(w);w.forEach(c),k.forEach(c),s=L(D),o=h(D,"DIV",{id:!0});var j=v(o);n&&We(n.$$.fragment,j),j.forEach(c),D.forEach(c),this.h()},h(){r(t,"role","tablist"),r(t,"aria-label","Sample Tabs"),r(t,"class","svelte-8vn7r8"),r(a,"id","tab-list"),r(o,"id","tab-content"),r(e,"name","tab"),r(e,"class","container svelte-8vn7r8")},m(g,D){B(g,e,D),i(e,a),i(a,t);for(let k=0;k<m.length;k+=1)m[k]&&m[k].m(t,null);i(e,s),i(e,o),n&&Xe(n,o,null),f=!0},p(g,[D]){if(D&14){d=ie(g[2]);let k;for(k=0;k<d.length;k+=1){const w=Tt(g,d,k);m[k]?m[k].p(w,D):(m[k]=Lt(w),m[k].c(),m[k].m(t,null))}for(;k<m.length;k+=1)m[k].d(1);m.length=d.length}if(D&1&&I!==(I=g[2][g[0]].component)){if(n){wt();const k=n;Ve(k.$$.fragment,1,0,()=>{Be(k,1)}),Ht()}I?(n=ht(I,S()),Oe(n.$$.fragment),Ie(n.$$.fragment,1),Xe(n,o,null)):n=null}},i(g){f||(n&&Ie(n.$$.fragment,g),f=!0)},o(g){n&&Ve(n.$$.fragment,g),f=!1},d(g){g&&c(e),Ce(m,g),n&&Be(n)}}}const rl=0,nl=()=>{};function il(l,e,a){let t;const s=sl;let o=rl;const n=f=>()=>{a(0,o=f)};return l.$$.update=()=>{l.$$.dirty&1&&a(1,t=f=>o==f)},[o,t,s,n]}class ol extends _e{constructor(e){super(),pe(this,e,il,al,ge,{})}}function cl(l,e,a){const t=l.slice();return t[2]=e[a].name,t[3]=e[a].img,t}function Ct(l,e,a){const t=l.slice();return t[6]=e[a].url,t[3]=e[a].img,t[7]=e[a].alt,t[8]=e[a].title,t}function Vt(l){let e,a,t,s,o,n,f,d;return{c(){e=u("div"),a=u("a"),t=u("img"),o=T(),n=u("span"),f=new Pe(!1),d=T(),this.h()},l(m){e=h(m,"DIV",{class:!0});var I=v(e);a=h(I,"A",{href:!0});var S=v(a);t=h(S,"IMG",{class:!0,src:!0,alt:!0,title:!0}),S.forEach(c),o=L(I),n=h(I,"SPAN",{class:!0});var g=v(n);f=we(g,!1),g.forEach(c),d=L(I),I.forEach(c),this.h()},h(){r(t,"class","logo highlight socialMedia"),fe(t.src,s=l[1]?l[3].dark:l[3].light)||r(t,"src",s),r(t,"alt",l[7]),r(t,"title",l[8]),r(a,"href",l[6]),f.a=null,r(n,"class","svelte-xox8n9"),r(e,"class","pres-desc-social-item svelte-xox8n9")},m(m,I){B(m,e,I),i(e,a),i(a,t),i(e,o),i(e,n),f.m(l[7],n),i(e,d)},p(m,I){I&2&&!fe(t.src,s=m[1]?m[3].dark:m[3].light)&&r(t,"src",s)},d(m){m&&c(e)}}}function ul(l){let e,a,t,s,o,n,f;return{c(){e=u("div"),a=u("img"),s=T(),o=u("h4"),n=Q(l[2]),f=T(),this.h()},l(d){e=h(d,"DIV",{class:!0,name:!0});var m=v(e);a=h(m,"IMG",{class:!0,src:!0,alt:!0,title:!0}),s=L(m),o=h(m,"H4",{class:!0});var I=v(o);n=Z(I,l[2]),I.forEach(c),f=L(m),m.forEach(c),this.h()},h(){r(a,"class","techStack-logo-img logo"),fe(a.src,t=l[3].path)||r(a,"src",t),r(a,"alt",l[3].alt),r(a,"title",l[3].title),r(o,"class","techStack-logo-caption svelte-xox8n9"),r(e,"class","techStack-logo-container svelte-xox8n9"),r(e,"name",l[2])},m(d,m){B(d,e,m),i(e,a),i(e,s),i(e,o),i(o,n),i(e,f)},p:R,d(d){d&&c(e)}}}function hl(l){let e,a,t,s,o,n,f,d,m=l[0].pres.title+"",I,S,g,D=l[0].pres.desc+"",k,w,j,H,b='<img class="tempImg svelte-xox8n9" src="public/img/logo/logo_darkmode_kevinLocksy.jpg" alt="temp img for 3d" title="temp img for 3d"/>',W,M,C,Y,$=l[0].techStack.desc+"",G,J,P,q,y,F,re,U,te="",le,be,se,x=ie(Ke),N=[];for(let _=0;_<x.length;_+=1)N[_]=Vt(Ct(l,x,_));let De=ie(Yt),ee=[];for(let _=0;_<De.length;_+=1)ee[_]=ul(cl(l,De,_));return F=new ol({}),{c(){e=u("meta"),a=T(),t=u("div"),s=u("section"),o=u("div"),n=u("div"),f=u("p"),d=new Pe(!1),I=T(),S=u("p"),g=new Pe(!1),k=T(),w=u("div");for(let _=0;_<N.length;_+=1)N[_].c();j=T(),H=u("div"),H.innerHTML=b,W=T(),M=u("section"),C=u("div"),Y=u("h2"),G=Q($),J=T(),P=u("div");for(let _=0;_<ee.length;_+=1)ee[_].c();q=T(),y=u("section"),Oe(F.$$.fragment),re=T(),U=u("section"),U.innerHTML=te,this.h()},l(_){const A=Ft("svelte-1vhkjaa",document.head);e=h(A,"META",{name:!0,content:!0}),A.forEach(c),a=L(_),t=h(_,"DIV",{id:!0,class:!0});var p=v(t);s=h(p,"SECTION",{id:!0,class:!0});var ae=v(s);o=h(ae,"DIV",{id:!0,class:!0});var de=v(o);n=h(de,"DIV",{id:!0,class:!0});var oe=v(n);f=h(oe,"P",{});var ke=v(f);d=we(ke,!1),ke.forEach(c),I=L(oe),S=h(oe,"P",{});var Se=v(S);g=we(Se,!1),Se.forEach(c),oe.forEach(c),k=L(de),w=h(de,"DIV",{id:!0,class:!0});var z=v(w);for(let ne=0;ne<N.length;ne+=1)N[ne].l(z);z.forEach(c),de.forEach(c),j=L(ae),H=h(ae,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ve(H)!=="svelte-6taq8j"&&(H.innerHTML=b),ae.forEach(c),W=L(p),M=h(p,"SECTION",{id:!0,class:!0});var K=v(M);C=h(K,"DIV",{id:!0,class:!0});var he=v(C);Y=h(he,"H2",{class:!0});var Te=v(Y);G=Z(Te,$),Te.forEach(c),J=L(he),P=h(he,"DIV",{id:!0,class:!0});var me=v(P);for(let ne=0;ne<ee.length;ne+=1)ee[ne].l(me);me.forEach(c),he.forEach(c),K.forEach(c),q=L(p),y=h(p,"SECTION",{id:!0,class:!0});var Ee=v(y);We(F.$$.fragment,Ee),Ee.forEach(c),re=L(p),U=h(p,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),ve(U)!=="svelte-1ei6ef3"&&(U.innerHTML=te),p.forEach(c),this.h()},h(){document.title="Kevin Locksy - IT Portfolio",r(e,"name","description"),r(e,"content","Kevin Locksy - Official IT Portfolio."),d.a=null,g.a=null,r(n,"id","pres-desc-text"),r(n,"class","svelte-xox8n9"),r(w,"id","pres-desc-social"),r(w,"class","svelte-xox8n9"),r(o,"id","pres-desc"),r(o,"class","svelte-xox8n9"),r(H,"id","pres-3d"),r(H,"class","svelte-xox8n9"),r(s,"id","presentation"),r(s,"class","svelte-xox8n9"),r(Y,"class","svelte-xox8n9"),r(P,"id","techStack-list"),r(P,"class","svelte-xox8n9"),r(C,"id","techStack-wrapper"),r(C,"class","svelte-xox8n9"),r(M,"id","techStack"),r(M,"class","svelte-xox8n9"),r(y,"id","projects"),r(y,"class","svelte-xox8n9"),r(U,"id","art"),r(U,"class","svelte-xox8n9"),r(t,"id","main-wrapper"),r(t,"class","svelte-xox8n9")},m(_,A){i(document.head,e),B(_,a,A),B(_,t,A),i(t,s),i(s,o),i(o,n),i(n,f),d.m(m,f),i(n,I),i(n,S),g.m(D,S),i(o,k),i(o,w);for(let p=0;p<N.length;p+=1)N[p]&&N[p].m(w,null);i(s,j),i(s,H),i(t,W),i(t,M),i(M,C),i(C,Y),i(Y,G),i(C,J),i(C,P);for(let p=0;p<ee.length;p+=1)ee[p]&&ee[p].m(P,null);i(t,q),i(t,y),Xe(F,y,null),i(t,re),i(t,U),le=!0,be||(se=yt(Xt.call(null,Y)),be=!0)},p(_,[A]){if((!le||A&1)&&m!==(m=_[0].pres.title+"")&&d.p(m),(!le||A&1)&&D!==(D=_[0].pres.desc+"")&&g.p(D),A&2){x=ie(Ke);let p;for(p=0;p<x.length;p+=1){const ae=Ct(_,x,p);N[p]?N[p].p(ae,A):(N[p]=Vt(ae),N[p].c(),N[p].m(w,null))}for(;p<N.length;p+=1)N[p].d(1);N.length=x.length}(!le||A&1)&&$!==($=_[0].techStack.desc+"")&&ue(G,$)},i(_){le||(Ie(F.$$.fragment,_),le=!0)},o(_){Ve(F.$$.fragment,_),le=!1},d(_){_&&(c(a),c(t)),c(e),Ce(N,_),Ce(ee,_),Be(F),be=!1,se()}}}function fl(l,e,a){let t,s;return Ye(l,Mt,o=>a(0,t=o)),Ye(l,At,o=>a(1,s=o)),Gt(),[t,s]}class _l extends _e{constructor(e){super(),pe(this,e,fl,hl,ge,{})}}export{_l as component};
