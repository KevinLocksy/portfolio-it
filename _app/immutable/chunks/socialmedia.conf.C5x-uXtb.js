import{w as c,d as j}from"./index.BHLHc6QV.js";import{q as g}from"./scheduler.DxSnPaMf.js";function N(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const E=[{id:0,label:"English",value:"en-US",locale:"EN",logo:"./public/img/lang/flag-en.png"},{id:1,label:"Français",value:"fr-FR",locale:"FR",logo:"./public/img/lang/flag-fr.png"},{id:2,label:"Esperanto",value:"epo-EO",locale:"EO",logo:"./public/img/lang/flag-epo.png"},{id:3,label:"Español",value:"spa-ES",locale:"ES",logo:"./public/img/lang/flag-spa.png"}],m={language:E},l=c(m.language[0].value),e={THEME:"theme",LANG:"lang"},p={HTML:"html",THEME:"data-theme",LANG:"lang"};function H(){return localStorage.getItem(e.THEME)}function r(){return localStorage.getItem(e.LANG)}const T=m.language[0].value;function k(){var o=navigator.language||navigator.userLanguage||T;document.querySelector(p.HTML).setAttribute(p.LANG,o),r()==null&&localStorage.setItem(e.LANG,o),l.set(r())}function v(o){localStorage.setItem(e.LANG,o),l.set(o)}const A={"en-US":"./public/i18n/lang-en.json","epo-EO":"./public/i18n/lang-epo.json","fr-FR":"./public/i18n/lang-fr.json","spa-ES":"./public/i18n/lang-spa.json"},M={"en-US":"./public/i18n/projects/projects-en.json","epo-EO":"./public/i18n/projects/projects-epo.json","fr-FR":"./public/i18n/projects/projects-fr.json","spa-ES":"./public/i18n/projects/projects-spa.json"},n={main:A,projects:M},s="en";async function u(o){const a=n.main[o],t=n.projects[o];try{const h=await fetch(a),L=await fetch(t),f=await h.json(),S=await L.json();return{lang:o,...f,...S}}catch{console.log("error with the dict path:",a)}const i=await fetch(n.main[s]),d=await fetch(n.projects[s]);return{lang:s,...i,...d}}const y=()=>{const{subscribe:o,set:a}=c({});return{subscribe:o,init:async()=>{k();const t=await u(g(l));a(t)},switchLang:async t=>{v(t);const i=await u(g(l));a(i)}}},I=y(),b={DARK:"dark",LIGHT:"light"},w=c(localStorage.getItem(e.THEME)||b.DARK),R=j(w,o=>o==b.DARK),F=[{name:"Fb",url:"Facebook page",img:{dark:"public/img/logo/socialMedia/logo_darkmode_fb.png",light:"public/img/logo/socialMedia/logo_lightmode_fb.png"},alt:"Kevin Locksy",title:"Kevin Locksy"},{name:"Instagram",url:"https://www.instagram.com/kevin.locksy/",img:{dark:"public/img/logo/socialMedia/logo_darkmode_insta.png",light:"public/img/logo/socialMedia/logo_lightmode_insta.png"},alt:"@Kevin.Locksy",title:"@Kevin.Locksy"},{name:"Mail",url:"mailto:artsy.locksy@proton.me",img:{dark:"public/img/logo/socialMedia/logo_darkmode_mail.png",light:"public/img/logo/socialMedia/logo_lightmode_mail.png"},alt:`artsy.locksy@
proton.me`,title:"mailto:artsy.locksy@proton.me"},{name:"Github",url:"https://github.com/KevinLocksy",img:{dark:"public/img/logo/socialMedia/github-mark-white.png",light:"public/img/logo/socialMedia/github-mark.png"},alt:"@KevinLocksy",title:"https://github.com/KevinLocksy"}];export{p as H,m as L,e as S,b as T,l as a,R as b,F as c,N as e,H as g,I as i,w as t};