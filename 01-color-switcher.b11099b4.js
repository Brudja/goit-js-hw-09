const t=document.querySelector("body"),e=t.querySelector("button[data-start]"),n=t.querySelector("button[data-stop]");let o;e.addEventListener("click",(function(){o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.background=e}),1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.b11099b4.js.map
