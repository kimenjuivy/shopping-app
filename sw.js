if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>r(e,n),d={module:{uri:n},exports:o,require:c};i[n]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-8366b1fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dexie.min.js",revision:"0a4f76544a13575b6c42bd0a4bc8d48d"},{url:"index.html",revision:"8f5473bfaa4a2dcf4ee3f5a9cd54fe67"},{url:"script.js",revision:"c777e4d9c44410ae46c5161bbae0ac1b"},{url:"ShopApp.png",revision:"89b7716812d147edab0064a2acc9d9d1"},{url:"style.css",revision:"6b36bd626e534e31361c8642b9567b4b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map