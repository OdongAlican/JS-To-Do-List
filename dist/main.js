!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(d," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=a(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:s,updater:h(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,b=0;function h(e,t){var n,o,r;if(t.singleton){var i=b++;n=f||(f=l(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=d(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!1);r.push([e.i,"body {\n  margin: 0;\n  padding: 0\n}\n\n.navigation {\n  background-color: #567;\n}\n\n.all-projects {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1em;\n  padding-left: 1em;\n}\n\n.project-text {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.project-module {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.project-module button {\n  width: 100px;\n  height: 40px;\n}\n\n.project-module input {\n  width: 200px;\n  height: 40px;\n  outline: none;\n  border: none;\n}\n\n.hide-module {\n  display: none;\n}\n\n.project-button {\n  width: 29%;\n}\n\n.hide-all-project {\n  display: none;\n}\n\n.todo-project-button {\n  width: 8%;\n}\n\n.nameTxt {\n  color: #ffdf00;\n  font-size: 17.2px;\n  font-weight: bold;\n  padding-top: 1em;\n\n}\n\n.description-class {\n  width: 15%;\n  height: 35px;\n}\n",""]),t.default=r},function(e,t,n){"use strict";n.r(t);n(1);const o=JSON.parse(localStorage.getItem("todo-library-data"))||[];function r(e,t,n,o,r){this.title=e,this.description=t,this.duedate=n,this.priority=o,this.projectId=r}var i=()=>{const e=e=>{const n=document.createElement("div");n.setAttribute("class","card project-module");const o=document.createElement("label");o.setAttribute("class","nameTxt"),n.appendChild(o),o.innerHTML="Title";const r=document.createElement("input");r.setAttribute("id","title-id"),r.type="text",n.appendChild(r);const i=document.createElement("label");i.setAttribute("class","nameTxt"),i.innerHTML="Description",n.appendChild(i);const c=document.createElement("input");c.setAttribute("class","description-class"),c.setAttribute("id","description-id"),c.type="text",n.appendChild(c);const a=document.createElement("label");a.setAttribute("class","nameTxt"),a.innerHTML="Due Date";const d=document.createElement("input");d.setAttribute("class","description-class"),d.setAttribute("id","dueDate-id"),d.type="date",n.appendChild(a),n.appendChild(d);const l=document.createElement("label");l.setAttribute("class","nameTxt"),l.innerHTML="Priority",n.appendChild(l);const s=document.createElement("select");s.setAttribute("class","description-class"),s.setAttribute("id","priority-id");const u=document.createElement("option");u.setAttribute("value","1"),s.appendChild(u),u.innerHTML="High";const p=document.createElement("option");p.setAttribute("value","2"),s.appendChild(p),p.innerHTML="Medium";const m=document.createElement("option");m.setAttribute("value","3"),s.appendChild(m),m.innerHTML="Low",n.appendChild(s);const f=document.createElement("button");f.setAttribute("class","btn btn-success todo-project-button mt-2"),f.innerHTML="Submit",n.appendChild(f),f.addEventListener("click",()=>{t(e)}),document.querySelector(".all-content").appendChild(n)},t=e=>{const t=document.getElementById("title-id").value,n=document.getElementById("description-id").value,i=document.getElementById("dueDate-id").value,c=document.getElementById("priority-id"),a=new r(t,n,i,c.options[c.selectedIndex].text,e);var d;o.push(a),d=o,localStorage.setItem("todo-library-data",JSON.stringify(d)),localStorage["todo-library-data"]=JSON.stringify(o)};return{displayToDo:(t,n)=>{const r=document.createElement("div");r.setAttribute("class","main-todo-div"),document.querySelector(".all-content").appendChild(r);const i=document.createElement("h1");i.innerHTML=t;const c=document.createElement("button");c.innerHTML="Add ToDo",c.setAttribute("class","btn btn-primary todo-project-button"),r.appendChild(i),r.appendChild(c);for(var a=0;a<o.length;a++)if(n==o[a].projectId){const e=document.createElement("p");e.innerHTML=o[a].title,r.appendChild(e)}c.addEventListener("click",()=>{e(n)})},displayToDoForm:e}};const c=JSON.parse(localStorage.getItem("project-library-data"))||[];function a(e,t){this.name=e,this.value=t}var d=()=>{const e=()=>{const e=document.createElement("div");e.setAttribute("class","all-projects mr-3");for(let t=0;t<c.length;t++){const n=document.createElement("div");n.setAttribute("class","card p-3 mt-2");const o=document.createElement("p");o.setAttribute("class","project-text"),o.innerHTML=c[t].name;const r=document.createElement("p");r.innerHTML=c[t].value,n.appendChild(o),n.appendChild(r),e.appendChild(n);const a=document.createElement("button");a.innerHTML="View Details",a.setAttribute("class","btn btn-primary project-button"),n.appendChild(a),a.addEventListener("click",()=>{i().displayToDo(c[t].name,c[t].value),document.querySelector(".all-projects").classList.add("hide-all-project")})}document.querySelector(".all-content").appendChild(e)},t=()=>{let t=document.querySelector("#addProject").value,n=c.length+1;console.log(c);const o=new a(t,n);var r;c.push(o),r=c,localStorage.setItem("project-library-data",JSON.stringify(r)),localStorage["project-library-data"]=JSON.stringify(c),window.location.reload(),e()};return{addProject:()=>{const e=document.createElement("div");e.setAttribute("class","card project-module");const n=document.createElement("input");n.type="text",n.setAttribute("placeholder","Add new project"),n.setAttribute("id","addProject");const o=document.createElement("button");o.setAttribute("class","btn btn-success"),o.innerHTML="Submit",o.addEventListener("click",t),e.appendChild(n),e.appendChild(o),document.body.appendChild(e)},createFunction:e}};var l=()=>{const e=document.createElement("div");e.setAttribute("class","navigation border d-flex p-3");const t=document.createElement("button");e.appendChild(t),t.setAttribute("class","navigation-button btn btn-info ml-auto mr-4");const n=document.createElement("i");n.setAttribute("class","fas fa-plus"),t.addEventListener("click",()=>{d().addProject()}),t.appendChild(n),document.querySelector(".all-content").appendChild(e)};document.querySelector(".all-content").appendChild((()=>{l();d().createFunction()})())}]);