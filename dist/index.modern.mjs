import t from"animejs/lib/anime.es.js";function n(n,i){if(a(n)||e(n))return;t.remove(n),d(n,"upping"),i=Object.assign({duration:400,easing:"easeInOutCubic",beginFunc:void 0,completeFunc:void 0},i);let o=s(n);""==n.style.height&&(n.style.height=`${o.height}px`),""==n.style.paddingTop&&(n.style.paddingTop=`${o.paddingTop}px`),""==n.style.paddingBottom&&(n.style.paddingBottom=`${o.paddingBottom}px`),""==n.style.marginTop&&(n.style.marginTop=`${o.marginTop}px`),""==n.style.marginBottom&&(n.style.marginBottom=`${o.marginBottom}px`),t({targets:n,height:"0px",paddingTop:"0px",paddingBottom:"0px",marginTop:"0px",marginBottom:"0px",duration:i.duration,easing:i.easing,begin:function(t){void 0!==i.beginFunc&&i.beginFunc()},complete:function(t){d(n,"hidden"),n.style.height=null,n.style.paddingTop=null,n.style.paddingBottom=null,n.style.marginTop=null,n.style.marginBottom=null,void 0!==i.completeFunc&&i.completeFunc()}})}function i(n,i){if(function(t){return t.classList.contains("accordion--visible")}(n)||function(t){return t.classList.contains("accordion--downing")}(n))return;t.remove(n),d(n,"downing"),i=Object.assign({duration:400,easing:"easeInOutCubic",beginFunc:void 0,completeFunc:void 0},i);let o=s(n);""==n.style.height&&(n.style.height="0px"),""==n.style.paddingTop&&(n.style.paddingTop="0px"),""==n.style.paddingBottom&&(n.style.paddingBottom="0px"),""==n.style.marginTop&&(n.style.marginTop="0px"),""==n.style.marginBottom&&(n.style.marginBottom="0px"),t({targets:n,height:`${o.height}px`,paddingTop:`${o.paddingTop}px`,paddingBottom:`${o.paddingBottom}px`,marginTop:`${o.marginTop}px`,marginBottom:`${o.marginBottom}px`,duration:i.duration,easing:i.easing,begin:function(t){void 0!==i.beginFunc&&i.beginFunc()},complete:function(t){d(n,"visible"),n.style.display=null,n.style.height=null,n.style.paddingTop=null,n.style.paddingBottom=null,n.style.marginTop=null,n.style.marginBottom=null,void 0!==i.completeFunc&&i.completeFunc()}})}function o(t,o){o=Object.assign({duration:400,easing:"easeInOutCubic",beginFunc:void 0,completeFunc:void 0},o),a(t)||e(t)?i(t,o):n(t,o)}function e(t){return t.classList.contains("accordion--upping")}function a(t){return t.classList.contains("accordion--hidden")}function d(t,n){t.classList.remove("accordion--visible"),t.classList.remove("accordion--upping"),t.classList.remove("accordion--hidden"),t.classList.remove("accordion--downing"),t.classList.add(`accordion--${n}`)}function s(t){let n=t.cloneNode(!0);n.style.cssText="",n.style.cssText="display: block; height: auto; overflow: hidden; visibility: hidden;",t.parentNode.appendChild(n);let i=parseFloat(p(n,"height")),o=parseFloat(p(n,"padding-top")),e=parseFloat(p(n,"padding-bottom")),a=parseFloat(p(n,"margin-top")),d=parseFloat(p(n,"margin-bottom"));return t.parentNode.removeChild(n),{height:i,paddingTop:o,paddingBottom:e,marginTop:a,marginBottom:d}}function p(t,n){return document.defaultView.getComputedStyle(t).getPropertyValue(n)}export{i as slideDown,o as slideToggle,n as slideUp};
//# sourceMappingURL=index.modern.mjs.map
