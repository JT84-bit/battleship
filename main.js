(()=>{"use strict";var e={904:(e,n,t)=>{t.d(n,{c:()=>u});var o=t(500),r=t.n(o),i=t(312),s=t.n(i),a=t(536),c=t.n(a),d=new URL(t(304),t.b),l=s()(r()),h=c()(d);l.push([e.id,`@font-face {\n    font-family: bebas;\n    src: url(${h});\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100vh;\n    margin-top: 5rem;\n}\n\n.header {\n    font-size: 5rem;\n    font-weight: bold;\n    color: rgb(0, 102, 255);\n    margin-bottom: 5rem;\n    font-family: bebas;\n}\n\n.boards {\n    display: flex;\n    justify-items: center;\n    flex-wrap: wrap;\n    height: 30vh;\n    max-width: 70vw;\n    gap: 8rem;\n}\n\n.board1, .board2 {\n    display: flex;\n    flex-direction: column;\n    width: 30vw;\n    height: 50vh;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 1;\n    z-index: 1;\n}\n\n.board {\n    display: flex;\n    justify-content: space-around;\n    height: 25em;\n    width: auto;\n    z-index: 1;\n}\n\n.x_coordinates {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-self: flex-end;\n    height: 97%;\n    text-align: center;\n    margin-bottom: 0.5em;\n    font-weight: bold;\n}\n\n.y_coordinates {\n    display: flex;\n    justify-content: space-around;\n    align-self: flex-end;\n    margin-right: 1em;\n    width: 88%;\n    font-weight: bold;\n    margin-bottom: 1em;\n}\n\n.shootingBoard, .playerShips {\n    display: flex;\n    height: 24em;\n    width: 34em;\n    position: relative;\n    z-index: 1;\n}\n\nli{\n    list-style-type: none;\n}\n\n.shootingBoard div, .playerShips div{\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    position: relative;\n}\n\n.shootingBoard button, .playerShips button { \n    flex: 1;\n    background-color: white;\n    border: solid 1px rgb(0, 0, 255, 0.5);\n    z-index: inherit;\n}\n\n.playerShips div button:hover{ \n    background-color: aqua;\n}\n\n.shootingBoard div button:hover{\n    background-color: red;\n} \n\np {\n    align-self: center;\n    margin-bottom: 1em;\n    color: rgb(0, 0, 255);\n    font-family: bebas;\n}\n\n.wonScreen, .loseScreen {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    left: 43%;\n    bottom: 50%;\n    width: 20em;\n    height: 10em;\n    border: solid 2px rgb(0, 0, 255);\n    background-color: white;\n    z-index: 5;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 1;\n}\n\n.wonText {\n    font-size: 4em;\n    color: blue;\n    font-family: bebas;\n}\n\n.loseText {\n    font-size: 4em;\n    color: blue;\n    font-family: bebas;  \n}\n\n.reset, .resetLose {\n    width: 6rem;\n    height: 2rem;\n    background-color: white;\n}\n\n.playerShips div .playerShip{\n    border: solid 1px blue;\n    background-color: blue;\n    z-index: inherit;\n}\n\n.shootingBoard .buttons .hit, .playerShips .buttons .hit{\n    flex: 1;\n    color: white;\n    background-color: red;\n    border: solid 1px red;\n    z-index: inherit;\n}\n\n.shootingBoard .buttons .sunk, .playerShips .buttons .sunk{\n    flex: 1;\n    color: white;\n    font-size: 0.5em;\n    background-color: red;\n    border: solid 1px red;\n    z-index: inherit;\n}\n\n.startScreen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    height: 24em;\n    min-width: 70vmin;\n    border: solid 1px blue;\n    overflow: hidden;\n    position: absolute;\n    z-index: 3;\n}\n\n.randomPlacement, .startGame {\n    font-family: bebas;\n    border: solid blue;\n    padding: 1%;\n    margin-top: 1%;\n}\n\n.coverRight, .coverLeft {\n    background-color: rgb(255, 255, 255, 0.5);\n    height: 24em;\n    min-width: 70vmin;\n    border: solid 1px blue;\n    position: absolute;\n    z-index: 3;\n    opacity: 1;\n    overflow: auto;\n}\n\n\n.hidden {\n    display: none;\n}`,""]);const u=l},312:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},536:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],l=i[d]||0,h="".concat(d," ").concat(l);i[d]=l+1;var u=t(h),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=r(p,o);o.byIndex=a,n.splice(a,0,{identifier:h,updater:f,references:1})}s.push(h)}return s}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=t(i[s]);n[a].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},176:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},808:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},120:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},936:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},304:(e,n,t)=>{e.exports=t.p+"12e3683f9192436a7be8.ttf"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(596),n=t.n(e),o=t(520),r=t.n(o),i=t(176),s=t.n(i),a=t(120),c=t.n(a),d=t(808),l=t.n(d),h=t(936),u=t.n(h),p=t(904),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(p.c,f),p.c&&p.c.locals&&p.c.locals;const m=class{constructor(e){this._length=e,this._coordinates=[]}hit(){return this._length>0&&(this._length-=1,!0)}isSunk(){return 0===this._length}addCoordinates(e,n){}},b=class{constructor(){this._board=[],this._shipCoordinates=[],this._shipsLeft=0,this._shipsHitAt=[]}get board(){return this._board}placeShips(e,n,t){if(t)if(t[0].constructor===Array)for(let e=0;e<t.length;e++){const n=this.shipFactory(t[e].length);for(let o=0;o<t[e].length;o++){const r=t[e][o].split(","),i=Number(r[0]),s=Number(r[1]);this._board[i][s]=n}this._shipsLeft+=1}else{this.shipFactory(t.length);const e=this.shipFactory(t.length);for(let n=0;n<t.length;n++){const o=t[n].split(","),r=Number(o[0]),i=Number(o[1]);this._board[r][i]=e}this._shipsLeft+=1}else{const t=this.shipFactory(1);this._board[e][n]=t,this._shipsLeft+=1}}makeboard(){const e=[];for(let n=0;n<10;n++){const n=new Array(10).fill(0);e.push(n)}this._board=e,this._shipCoordinates=[],this._shipsLeft=0}shipFactory(e){return new m(e)}receiveAttack(e,n){if(0===this._board[e][n])this._board[e][n]=1;else if(this.checkIfShip(e,n))return this._board[e][n].hit(),this._board[e][n].isSunk()?(this._board[e][n]=4,this._shipsLeft-=1,!0):(this._board[e][n]=3,!1)}checkIfShip(e,n){return 0!==this._board[e][n]&&1!==this._board[e][n]&&3!==this._board[e][n]&&4!==this._board[e][n]}checkIfAlreadyHit(e,n){return!this.checkIfShip(e,n)&&(1===this._board[e][n]||3===this._board[e][n]||4===this._board[e][n])}allShipsSunken(){return 0===this._shipsLeft}randomNumber(e){let n=0;return n=Math.floor(Math.random()*e),n}drawShips(){let e=[];if(0===this._shipCoordinates.length){const n=this.randomNumber(10),t=this.randomNumber(5);e.push(`${n},${t}`),e.push(`${n},${t+1}`),e.push(`${n},${t+2}`),e.push(`${n},${t+3}`),this.placeShips(0,0,e),this._shipCoordinates.push(e),e=[]}if(this._shipCoordinates.length<3){const n=this.randomNumber(6),t=this.randomNumber(10);this._board[n][t]||this._board[n+1][t]||this._board[n+1][t]||(e.push(`${n},${t}`),e.push(`${n+1},${t}`),e.push(`${n+2},${t}`),this.placeShips(0,0,e),this._shipCoordinates.push(e)),this.drawShips()}if(this._shipCoordinates.length<6){const n=this.randomNumber(8),t=this.randomNumber(10);this.board[n][t]||this.board[n+1][t]||(e.push(`${n},${t}`),e.push(`${n+1},${t}`),this.placeShips(0,0,e),this._shipCoordinates.push(e)),this.drawShips()}if(this._shipCoordinates.length<9){const n=this.randomNumber(9),t=this.randomNumber(10);this._board[n][t]||(e.push(`${n},${t}`),this.placeShips(n,t),this._shipCoordinates.push(e)),this.drawShips()}}};let g=[];!function(){const e=function(){const e=new b,n=new b;e.makeboard(),e.drawShips(),n.makeboard(),n.drawShips();const t=[{name:"Player",board:e},{name:"Computer",board:n}];let o=t[0];return{getActivePlayer:()=>o,switchPlayerTurn:()=>{o=o===t[0]?t[1]:t[0]},getPlayers:()=>t}}(),n=e.getPlayers(),t=document.querySelector(".coverLeft"),o=document.querySelector(".coverRight"),r=document.querySelector(".startScreen"),i=document.querySelector(".startGame"),s=document.querySelector(".randomPlacement"),a=document.querySelector(".wonScreen"),c=document.querySelector(".loseScreen"),d=document.querySelector(".playerShips"),l=document.querySelector(".shootingBoard"),h=document.querySelector(".reset"),u=document.querySelector(".resetLose");i.addEventListener("click",(()=>{r.classList.add("hidden")})),h.addEventListener("click",(()=>{window.location.reload()})),u.addEventListener("click",(()=>{window.location.reload()}));const p=n[0].board.board,f=n[0].board,m=n[1].board.board,y=n[1].board;function v(){for(;d.firstChild;)d.removeChild(d.lastChild);const e=n[0].board.board;for(let n=0;n<e.length;n++){const t=document.createElement("div");t.classList.add("buttons");for(let o=0;o<e[n].length;o++)if(0===e[n][o]){const e=document.createElement("button");e.classList.add("empty"),e.textContent="",t.appendChild(e)}else if(1===e[n][o]){const e=document.createElement("button");e.classList.add("empty"),e.textContent="X",t.appendChild(e)}else if(4===e[n][o]){const e=document.createElement("button");e.classList.add("sunk"),e.textContent="SUNK",t.appendChild(e)}else if(3===e[n][o]){const e=document.createElement("button");e.classList.add("hit"),e.textContent="HIT",t.appendChild(e)}else{const e=document.createElement("button");e.classList.add("playerShip"),t.appendChild(e)}d.appendChild(t)}}function x(){for(;l.firstChild;)l.removeChild(l.lastChild);for(let e=0;e<m.length;e++){const r=document.createElement("div");r.classList.add("buttons");for(let i=0;i<p[e].length;i++)if(0===m[e][i]){const n=document.createElement("button");n.classList.add("empty"),n.addEventListener("click",(()=>{y.receiveAttack(e,i),x(),S()}),{once:!0}),r.appendChild(n)}else if(1===m[e][i]){const e=document.createElement("button");e.classList.add("empty"),e.textContent="X",r.appendChild(e)}else if(3===m[e][i]){const e=document.createElement("button");e.classList.add("hit"),e.textContent="HIT",r.appendChild(e)}else if(4===m[e][i]){const e=document.createElement("button");e.classList.add("sunk"),e.textContent="SUNK",r.appendChild(e)}else{const s=document.createElement("button");s.classList.add("computerShip"),s.addEventListener("click",(()=>{n[1].board.receiveAttack(e,i),y.allShipsSunken()&&(a.classList.remove("hidden"),t.classList.remove("hidden"),o.classList.remove("hidden")),x(),S()}),{once:!0}),r.appendChild(s)}l.appendChild(r)}}function S(){let e,r;if(g.length>0){let n=g.pop();n=n.split(","),r=Number(n[0]),e=Number(n[1])}else r=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),f.checkIfAlreadyHit(r,e)&&S();!1===f.receiveAttack(r,e)?function(e,t){const o=n[0].board;e>=1&&!o.checkIfAlreadyHit(e-1,t)&&g.push(`${e-1},${t}`),e<=8&&!o.checkIfAlreadyHit(e+1,t)&&g.push(`${e+1},${t}`),t>=1&&!o.checkIfAlreadyHit(e,t-1)&&g.push(`${e},${t-1}`),t<=8&&!o.checkIfAlreadyHit(e,t+1)&&g.push(`${e},${t+1}`)}(r,e):f.receiveAttack(r,e)&&(g=[]),f.allShipsSunken()&&(c.classList.remove("hidden"),t.classList.remove("hidden"),o.classList.remove("hidden")),v(),x()}s.addEventListener("click",(()=>{f.makeboard(),f.drawShips(),v()})),v(),x()}()})()})();