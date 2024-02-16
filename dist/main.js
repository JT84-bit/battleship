(()=>{"use strict";var e={904:(e,t,n)=>{n.d(t,{c:()=>u});var o=n(500),r=n.n(o),i=n(312),s=n.n(i),a=n(536),c=n.n(a),d=new URL(n(304),n.b),l=s()(r()),h=c()(d);l.push([e.id,`@font-face {\n    font-family: bebas;\n    src: url(${h});\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    margin-top: 5rem;\n}\n\n.header {\n    font-size: 5rem;\n    font-weight: bold;\n    color: rgb(0, 102, 255);\n    margin-bottom: 5rem;\n    font-family: bebas;\n}\n\n.boards {\n    display: flex;\n    justify-items: center;\n    height: 30vh;\n    gap: 5rem;\n}\n\n.board1, .board2 {\n    display: flex;\n    flex-direction: column;\n    width: 30vw;\n    height: 50vh;\n    z-index: 1;\n}\n\n.board {\n    display: flex;\n    justify-content: space-around;\n    height: 25em;\n    width: auto;\n    z-index: 1;\n}\n\n.x_coordinates {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-self: flex-end;\n    height: 97%;\n    text-align: center;\n    margin-bottom: 0.5em;\n    font-weight: bold;\n}\n\n.y_coordinates {\n    display: flex;\n    justify-content: space-around;\n    align-self: flex-end;\n    margin-right: 1em;\n    width: 88%;\n    font-weight: bold;\n    margin-bottom: 1em;\n}\n\n.shootingBoard, .playerShips {\n    display: flex;\n    height: 24em;\n    width: 90%;\n    position: relative;\n    z-index: 1;\n}\n\nli{\n    list-style-type: none;\n}\n\n.shootingBoard div, .playerShips div{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    position: relative;\n}\n\n.shootingBoard button, .playerShips button { \n    flex: 1;\n    background-color: white;\n    border: solid 1px rgb(0, 0, 255, 0.5);\n    z-index: inherit;\n}\n\n.playerShips div button:hover{ \n    background-color: aqua;\n}\n\n.shootingBoard div button:hover{\n    background-color: red;\n} \n\np {\n    align-self: center;\n    margin-bottom: 1em;\n    color: rgb(0, 0, 255);\n    font-family: bebas;\n}\n\n.wonScreen, .loseScreen {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    left: 43%;\n    bottom: 40%;\n    width: 20em;\n    height: 10em;\n    border: solid 2px rgb(0, 0, 255);\n    background-color: white;\n    z-index: 5;\n}\n\n.wonText {\n    font-size: 4em;\n    color: blue;\n    font-family: bebas;\n}\n\n.loseText {\n    font-size: 4em;\n    color: blue;\n    font-family: bebas;  \n}\n\n.reset, .resetLose {\n    width: 6rem;\n    height: 2rem;\n    background-color: white;\n}\n\n.playerShips div .playerShip{\n    border: solid 1px blue;\n    background-color: blue;\n    z-index: inherit;\n}\n\n.shootingBoard .buttons .hit, .playerShips .buttons .hit{\n    flex: 1;\n    color: white;\n    background-color: red;\n    border: solid 1px red;\n    z-index: inherit;\n}\n\n.shootingBoard .buttons .sunk, .playerShips .buttons .sunk{\n    flex: 1;\n    color: white;\n    font-size: 0.6em;\n    background-color: red;\n    border: solid 1px red;\n    z-index: inherit;\n}\n\n.startScreen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    height: 24em;\n    width: 29%;\n    border: solid 1px blue;\n    position: absolute;\n    z-index: 3;\n}\n\n.randomPlacement, .startGame {\n    font-family: bebas;\n    border: solid blue;\n    padding: 1%;\n    margin-top: 1%;\n}\n\n.coverRight {\n    background-color: rgb(255, 255, 255, 0.5);\n    height: 24em;\n    width: 29%;\n    border: solid 1px blue;\n    position: absolute;\n    z-index: 3;\n}\n\n.coverLeft {\n    background-color: rgb(255, 255, 255, 0.5);\n    height: 24em;\n    width: 29%;\n    border: solid 1px blue;\n    position:absolute;\n    z-index: 3;\n}\n\n.hidden {\n    display: none;\n}`,""]);const u=l},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},536:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],l=i[d]||0,h="".concat(d," ").concat(l);i[d]=l+1;var u=n(h),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=r(p,o);o.byIndex=a,t.splice(a,0,{identifier:h,updater:f,references:1})}s.push(h)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},176:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},304:(e,t,n)=>{e.exports=n.p+"12e3683f9192436a7be8.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(596),t=n.n(e),o=n(520),r=n.n(o),i=n(176),s=n.n(i),a=n(120),c=n.n(a),d=n(808),l=n.n(d),h=n(936),u=n.n(h),p=n(904),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(p.c,f),p.c&&p.c.locals&&p.c.locals;const m=class{constructor(e){this._length=e,this._coordinates=[]}hit(){return this._length>0&&(this._length-=1,!0)}isSunk(){return 0===this._length}addCoordinates(e,t){}},b=class{constructor(){this._board=[],this._shipCoordinates=[],this._shipsLeft=0,this._shipsHitAt=[]}get board(){return this._board}placeShips(e,t,n){if(n)if(n[0].constructor===Array)for(let e=0;e<n.length;e++){const t=this.shipFactory(n[e].length);for(let o=0;o<n[e].length;o++){const r=n[e][o].split(","),i=Number(r[0]),s=Number(r[1]);this._board[i][s]=t}this._shipsLeft+=1}else{this.shipFactory(n.length);const e=this.shipFactory(n.length);for(let t=0;t<n.length;t++){const o=n[t].split(","),r=Number(o[0]),i=Number(o[1]);this._board[r][i]=e}this._shipsLeft+=1}else{const n=this.shipFactory(1);this._board[e][t]=n,this._shipsLeft+=1}}makeboard(){const e=[];for(let t=0;t<10;t++){const t=new Array(10).fill(0);e.push(t)}this._board=e,this._shipCoordinates=[],this._shipsLeft=0}shipFactory(e){return new m(e)}receiveAttack(e,t){if(0===this._board[e][t])this._board[e][t]=1;else if(this.checkIfShip(e,t))return this._board[e][t].hit(),this._board[e][t].isSunk()?(this._board[e][t]=4,this._shipsLeft-=1,!0):(this._board[e][t]=3,!1)}checkIfShip(e,t){return 0!==this._board[e][t]&&1!==this._board[e][t]&&3!==this._board[e][t]&&4!==this._board[e][t]}checkIfAlreadyHit(e,t){return!this.checkIfShip(e,t)&&(1===this._board[e][t]||3===this._board[e][t]||4===this._board[e][t])}allShipsSunken(){return 0===this._shipsLeft}randomNumber(e){let t=0;return t=Math.floor(Math.random()*e),t}drawShips(){let e=[];if(0===this._shipCoordinates.length){const t=this.randomNumber(10),n=this.randomNumber(5);e.push(`${t},${n}`),e.push(`${t},${n+1}`),e.push(`${t},${n+2}`),e.push(`${t},${n+3}`),this.placeShips(0,0,e),this._shipCoordinates.push(e),e=[]}if(this._shipCoordinates.length<3){const t=this.randomNumber(6),n=this.randomNumber(10);this._board[t][n]||this._board[t+1][n]||this._board[t+1][n]||(e.push(`${t},${n}`),e.push(`${t+1},${n}`),e.push(`${t+2},${n}`),this.placeShips(0,0,e),this._shipCoordinates.push(e)),this.drawShips()}if(this._shipCoordinates.length<6){const t=this.randomNumber(8),n=this.randomNumber(10);this.board[t][n]||this.board[t+1][n]||(e.push(`${t},${n}`),e.push(`${t+1},${n}`),this.placeShips(0,0,e),this._shipCoordinates.push(e)),this.drawShips()}if(this._shipCoordinates.length<9){const t=this.randomNumber(9),n=this.randomNumber(10);this._board[t][n]||(e.push(`${t},${n}`),this.placeShips(t,n),this._shipCoordinates.push(e)),this.drawShips()}}};let g=[];!function(){const e=function(){const e=new b,t=new b;e.makeboard(),e.drawShips(),t.makeboard(),t.drawShips();const n=[{name:"Player",board:e},{name:"Computer",board:t}];let o=n[0];return{getActivePlayer:()=>o,switchPlayerTurn:()=>{o=o===n[0]?n[1]:n[0]},getPlayers:()=>n}}(),t=e.getPlayers(),n=document.querySelector(".coverLeft"),o=document.querySelector(".coverRight"),r=document.querySelector(".startScreen"),i=document.querySelector(".startGame"),s=document.querySelector(".randomPlacement"),a=document.querySelector(".wonScreen"),c=document.querySelector(".loseScreen"),d=document.querySelector(".playerShips"),l=document.querySelector(".shootingBoard"),h=document.querySelector(".reset"),u=document.querySelector(".resetLose");i.addEventListener("click",(()=>{r.classList.add("hidden")})),h.addEventListener("click",(()=>{window.location.reload()})),u.addEventListener("click",(()=>{window.location.reload()}));const p=t[0].board.board,f=t[0].board,m=t[1].board.board,y=t[1].board;function v(){for(;d.firstChild;)d.removeChild(d.lastChild);const e=t[0].board.board;for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("buttons");for(let o=0;o<e[t].length;o++)if(0===e[t][o]){const e=document.createElement("button");e.classList.add("empty"),e.textContent="",n.appendChild(e)}else if(1===e[t][o]){const e=document.createElement("button");e.classList.add("empty"),e.textContent="X",n.appendChild(e)}else if(4===e[t][o]){const e=document.createElement("button");e.classList.add("sunk"),e.textContent="SUNK",n.appendChild(e)}else if(3===e[t][o]){const e=document.createElement("button");e.classList.add("hit"),e.textContent="HIT",n.appendChild(e)}else{const e=document.createElement("button");e.classList.add("playerShip"),n.appendChild(e)}d.appendChild(n)}}function x(){for(;l.firstChild;)l.removeChild(l.lastChild);for(let e=0;e<m.length;e++){const r=document.createElement("div");r.classList.add("buttons");for(let i=0;i<p[e].length;i++)if(0===m[e][i]){const t=document.createElement("button");t.classList.add("empty"),t.addEventListener("click",(()=>{y.receiveAttack(e,i),x(),S()}),{once:!0}),r.appendChild(t)}else if(1===m[e][i]){const e=document.createElement("button");e.classList.add("empty"),e.textContent="X",r.appendChild(e)}else if(3===m[e][i]){const e=document.createElement("button");e.classList.add("hit"),e.textContent="HIT",r.appendChild(e)}else if(4===m[e][i]){const e=document.createElement("button");e.classList.add("sunk"),e.textContent="SUNK",r.appendChild(e)}else{const s=document.createElement("button");s.classList.add("computerShip"),s.addEventListener("click",(()=>{t[1].board.receiveAttack(e,i),y.allShipsSunken()&&(a.classList.remove("hidden"),n.classList.remove("hidden"),o.classList.remove("hidden")),x(),S()}),{once:!0}),r.appendChild(s)}l.appendChild(r)}}function S(){let e,r;if(g.length>0){let t=g.pop();t=t.split(","),r=Number(t[0]),e=Number(t[1])}else r=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),f.checkIfAlreadyHit(r,e)&&S();!1===f.receiveAttack(r,e)?function(e,n){const o=t[0].board;e>=1&&!o.checkIfAlreadyHit(e-1,n)&&g.push(`${e-1},${n}`),e<=8&&!o.checkIfAlreadyHit(e+1,n)&&g.push(`${e+1},${n}`),n>=1&&!o.checkIfAlreadyHit(e,n-1)&&g.push(`${e},${n-1}`),n<=8&&!o.checkIfAlreadyHit(e,n+1)&&g.push(`${e},${n+1}`)}(r,e):f.receiveAttack(r,e)&&(g=[]),f.allShipsSunken()&&(c.classList.remove("hidden"),n.classList.remove("hidden"),o.classList.remove("hidden")),v(),x()}s.addEventListener("click",(()=>{f.makeboard(),f.drawShips(),v()})),v(),x()}()})()})();