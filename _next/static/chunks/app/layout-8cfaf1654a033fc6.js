(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2828:function(e,t,n){Promise.resolve().then(n.t.bind(n,4671,23)),Promise.resolve().then(n.bind(n,8126)),Promise.resolve().then(n.t.bind(n,3054,23))},8126:function(e,t,n){"use strict";let o;n.d(t,{ThemeSwitcher:function(){return h}});var s=n(7437),a=n(2887),r=n.n(a),l=n(2265);let c="nextjs-blog-starter-theme",d=["system","dark","light"],i=e=>{let[t,n,o]=["system","dark","light"],s=()=>{let e=document.createElement("style");return e.textContent="*,*:after,*:before{transition:none !important;}",document.head.appendChild(e),()=>{getComputedStyle(document.body),setTimeout(()=>document.head.removeChild(e),1)}},a=matchMedia("(prefers-color-scheme: ".concat(n,")"));window.updateDOM=()=>{var r;let l=s(),c=null!==(r=localStorage.getItem(e))&&void 0!==r?r:t,d=a.matches?n:o,i=c===t?d:c,u=document.documentElement.classList;i===n?u.add(n):u.remove(n),document.documentElement.setAttribute("data-mode",c),l()},window.updateDOM(),a.addEventListener("change",window.updateDOM)},u=()=>{let[e,t]=(0,l.useState)(()=>{var e;return null!==(e="undefined"!=typeof localStorage&&localStorage.getItem(c))&&void 0!==e?e:"system"});return(0,l.useEffect)(()=>{o=window.updateDOM,addEventListener("storage",e=>{e.key===c&&t(e.newValue)})},[]),(0,l.useEffect)(()=>{localStorage.setItem(c,e),o()},[e]),(0,s.jsx)("button",{suppressHydrationWarning:!0,className:r().switch,onClick:()=>{let n=d.indexOf(e);t(d[(n+1)%d.length])}})},m=(0,l.memo)(()=>(0,s.jsx)("script",{dangerouslySetInnerHTML:{__html:"(".concat(i.toString(),")('").concat(c,"')")}})),h=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{}),(0,s.jsx)(u,{})]})},3054:function(){},2887:function(e){e.exports={switch:"switch_switch__v3CFJ",n:"switch_n__Jl1Sp"}},4671:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[160,971,23,744],function(){return e(e.s=2828)}),_N_E=e.O()}]);