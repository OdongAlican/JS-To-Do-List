!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var c,i,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var i=0;i<e.length;i++){var u=[].concat(e[i]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function i(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var d=i(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:s,updater:b(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function b(e,t){var n,r,o;if(t.singleton){var a=v++;n=m||(m=l(t)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);c[o].references--}for(var a=u(e,t),l=0;l<n.length;l++){var s=i(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,"body {\n  margin: 0;\n  padding: 0\n}\n\n.navigation {\n  background-color: #567;\n}\n\n.all-projects {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 1em;\n  padding-left: 1em;\n}\n\n.project-text {\n  font-size: 20px;\n  font-weight: bold;\n}\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t);n(1);let r=[{name:"Project One",value:"1"},{name:"Project Two",value:"2"},{name:"Project Three",value:"3"}];var o=()=>({addProject:()=>{const e=document.createElement("div");e.setAttribute("class","card");const t=document.createElement("input");t.type="text",t.setAttribute("placeholder","Add new project");const n=document.createElement("button");n.setAttribute("class","btn btn-success"),e.appendChild(t),e.appendChild(n),console.log("random")},createFunction:()=>{const e=document.createElement("div");e.setAttribute("class","all-projects mr-3");for(let t=0;t<r.length;t++){const n=document.createElement("div");n.setAttribute("class","card p-3 mt-2");const o=document.createElement("p");o.setAttribute("class","project-text"),o.innerHTML=r[t].name;const a=document.createElement("p");a.innerHTML=r[t].value,n.appendChild(o),n.appendChild(a),e.appendChild(n)}document.querySelector(".all-content").appendChild(e)}});var a=()=>{const e=document.createElement("div");e.setAttribute("class","navigation border d-flex p-3");const t=document.createElement("button");e.appendChild(t),t.setAttribute("class","navigation-button btn btn-info ml-auto mr-4");const n=document.createElement("i");n.setAttribute("class","fas fa-plus"),t.addEventListener("click",()=>{o().addProject()}),t.appendChild(n),document.querySelector(".all-content").appendChild(e)};document.querySelector(".all-content").appendChild((()=>{a();o().createFunction()})())}]);