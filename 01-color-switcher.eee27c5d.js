!function(){var t=null,e=null,n=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.body;n.addEventListener("click",(function(){n.disabled=!0,a.disabled=!1,t=setInterval((function(){e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),d.style.backgroundColor=e}),1e3)})),a.addEventListener("click",(function(){n.disabled=!1,a.disabled=!0,clearInterval(t),d.style.backgroundColor=e}))}();
//# sourceMappingURL=01-color-switcher.eee27c5d.js.map
