/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst GRAVITY = 0.4\n\nclass Ball {\n    constructor(ctx) {\n        this.ctx = ctx\n        this.pos = [100, 575]\n        this.radius = 25\n        this.vel = [0, 0]\n        this.animate = this.animate.bind(this)\n        this.dragging = false\n        this.dragStart = [0, 0]\n        this.dragEnd = [0, 0]\n        this.detectCollision = this.detectCollision.bind(this)\n        this.made = false\n        this.ballbounce = new Audio('./assets/ballbounce.mp3')\n        this.makeshot = new Audio('./assets/makeshot.mp3')\n    }\n\n    drawBall(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n        ctx.strokeStyle = \"Orange\"\n        ctx.fillStyle = \"Orange\"\n        ctx.stroke();\n        ctx.fill();\n        ctx.closePath()\n    }\n\n    animate() {\n        if (!this.dragging) {\n            this.move()\n        }\n        this.drawBall(this.ctx)\n    }\n\n    move() {\n        if (this.vel[0] !== 0) {\n            this.pos[0] += this.vel[0]\n            this.pos[1] += this.vel[1]\n            this.applyGravity()\n        }\n    }\n\n\n    detectCollision(hoop) {\n        if (this.pos[0] + this.radius >= hoop.x && this.pos[0] + this.radius >= hoop.x + 10 && this.pos[1] >= hoop.y && this.pos[1] <= hoop.y + 125) {\n            //backboard collision\n            this.ballbounce.play()\n            this.vel[0] = this.vel[0] * -1\n            this.pos[0] += -10\n            this.pos[1] += this.vel[1]\n\n        } else if ((this.pos[0] + this.radius >= hoop.x - 95 && this.pos[0] + this.radius <= hoop.x - 75) && ((this.pos[1] + this.radius >= hoop.y + 65 && this.pos[1] + this.radius <= hoop.y + 105) || (this.pos[1] - this.radius >= hoop.y + 55 && this.pos[1] - this.radius <= hoop.y + 105))) {\n            //front rim collision\n            this.ballbounce.play()\n            this.vel[0] = this.vel[0] * -1\n        } else if (this.pos[0] + this.radius >= hoop.x - 5 && this.pos[0] + this.radius <= hoop.x + 45 && this.pos[1] + this.radius >= hoop.y - 10 && this.pos[1] + this.radius <= hoop.y + 10) {\n            //top backboard collision\n            this.ballbounce.play()\n            this.vel[1] = this.vel[1] * -1\n        }\n\n        if ((this.pos[0] + this.radius <= hoop.x + 10 && this.pos[0] + this.radius >= hoop.x - 85) && this.pos[1] + this.radius >= hoop.y + 75 && this.pos[1] + this.radius <= hoop.y + 115) {\n            this.makeshot.play()\n            this.made = true;\n            this.vel[0] = 0.1;\n            this.vel[1] = 10;\n        }\n    }\n\n    applyGravity() {\n        this.vel[1] += GRAVITY\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack://javascript-project/./src/ball.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball.js */ \"./src/ball.js\");\n/* harmony import */ var _hoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoop.js */ \"./src/hoop.js\");\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.js */ \"./src/score.js\");\n\n\n\n\nclass Game {\n    constructor(canvas, startScreen, gameOver) {\n        this.ctx = canvas.getContext(\"2d\");\n        this.dimensions = { width: canvas.width, height: canvas.height };\n        this.hoop = new _hoop_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx)\n        this.score = new _score_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx)\n        this.ball = new _ball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx)\n        this.dragging = false\n        this.shot = false\n        this.startX = 0\n        this.startY = 0\n        this.endX = 0\n        this.endY = 0\n        this.reset = this.reset.bind(this)\n        canvas.addEventListener(\"mousedown\", this.startDrag.bind(this));\n        canvas.addEventListener(\"mouseup\", this.stopDrag.bind(this));\n        canvas.addEventListener(\"mousemove\", this.drag.bind(this));\n        // canvas.addEventListener(\"mouseleave\", () => { this.dragging = false })\n        const startButton = document.getElementById(\"start-button\")\n        const tutButton = document.getElementById(\"tut-button\")\n        startButton.addEventListener('click', this.start.bind(this))\n        tutButton.addEventListener('click', this.tutorial.bind(this))\n        this.startScreen = startScreen\n        this.over = gameOver\n        this.play()\n\n    }\n\n    animate() {\n        this.ctx.clearRect(0, 0, 1000, 680)\n        this.drawBackground()\n        this.ball.detectCollision(this.hoop)\n        if (this.ball.dragging) {\n            this.ctx.beginPath();\n            this.ctx.setLineDash([5, 5]);\n            this.ctx.moveTo(this.ball.pos[0], this.ball.pos[1]);\n            this.ctx.lineTo((this.startX - this.currentX) + this.ball.pos[0], this.ball.pos[1] + (this.startY - this.currentY));\n            this.ctx.stroke();\n            this.ctx.setLineDash([]);\n        }\n        this.reset()\n        this.score.animate()\n        this.ball.animate(this.ctx)\n        this.hoop.animate(this.ctx)\n        window.requestAnimationFrame(this.animate.bind(this)) //why is this causing a orange line to connect\n    }\n\n    drawBackground() {\n        var background = new Image();\n        background.src = \"./assets/background.png\";\n        this.ctx.drawImage(background, -150, -50)\n\n    }\n\n    play() {\n        this.animate()\n    }\n\n    startDrag(event) {\n        if (this.shot === false) {\n            this.ball.dragging = true;\n            this.startX = event.clientX;\n            this.startY = event.clientY;\n        }\n    }\n\n\n    stopDrag(event) {\n        if (this.shot === false) {\n            this.endX = event.clientX;\n            this.endY = event.clientY;\n            this.ball.vel[0] = (this.startX - this.endX) / 5;\n            this.ball.vel[1] = (this.startY - this.endY) / 5;\n            if (this.ball.vel[0] > 0 || this.ball.vel[1] > 0) {\n                this.ball.dragging = false;\n                this.shot = true;\n                this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n            }\n        }\n    }\n    drag(event) {\n        if (this.ball.dragging === true) {\n            this.currentX = event.clientX;\n            this.currentY = event.clientY;\n            // console.log(this.currentX, this.currentY)\n            this.distance = Math.sqrt(Math.pow(this.startX - this.currentX, 2) + Math.pow(this.startY - this.currentY, 2));\n            this.angle = Math.atan2(this.startY - this.currentY, this.startX - this.currentX);\n        }\n    }\n\n\n    reset() {\n        if (this.ball.pos[0] > 1000 || this.ball.pos[1] > 800 || this.ball.pos[0] < 0) {\n            // if (this.shot === ?true) {\n            if (this.ball.made === true) {\n                this.score.playerScore++\n                this.ball.made = false\n                if (this.score.playerScore >= 1) {\n                    this.hoop.y = Math.floor(Math.random() * (301 - 50)) + 50\n                }\n            } else {\n                this.score.playerLives--\n            }\n\n            this.ball.pos[0] = 100\n            this.ball.pos[1] = 575\n            this.ball.vel = [0, 0]\n            this.shot = false\n        }\n\n        if (this.score.playerLives === 0) {\n            this.hoop.y = 250\n            this.gameOver()\n        }\n    }\n\n    start() {\n        document.getElementById(\"start-screen\").style.display = \"none\"\n        const audioContainer = document.getElementById(\"audioContainer\");\n        if (audioContainer.volume === 0) {\n            audioContainer.volume = 0\n            audioContainer.play()\n        } else {\n            audioContainer.volume = 0.3\n            audioContainer.play()\n        }\n    }\n\n    tutorial() {\n        if (document.getElementById(\"howtoplay\").style.display === \"none\") {\n            document.getElementById(\"tut-screen\").style.width = '400px';\n            document.getElementById(\"tut-screen\").style.padding = '10px';\n            document.getElementById(\"tut-screen\").style.height = '250px';\n            document.getElementById(\"howtoplay\").style.display = \"flex\"\n            document.getElementById(\"tut-text\").style.display = \"flex\"\n            document.getElementById(\"tut-button\").textContent = \"x\"\n            document.getElementById(\"tut-button\").style.width = \"30px\";\n            document.getElementById(\"tut-button\").style.height = \"30px\"\n        } else {\n            document.getElementById(\"tut-screen\").style.width = '200px';\n            document.getElementById(\"tut-screen\").style.padding = '0px';\n            document.getElementById(\"tut-screen\").style.height = '50px';\n            document.getElementById(\"howtoplay\").style.display = \"none\"\n            document.getElementById(\"tut-text\").style.display = \"none\"\n            document.getElementById(\"tut-button\").textContent = \"TUTORIAL\"\n            document.getElementById(\"tut-button\").style.width = \"200px\";\n            document.getElementById(\"tut-button\").style.height = \"50px\"\n\n        }\n    }\n\n    gameOver() {\n        document.getElementById(\"game-over\").style.display = \"flex\"\n        document.getElementById(\"restart-button\").addEventListener('click', this.restartGame.bind(this))\n    }\n\n    restartGame() {\n        this.resetValues()\n        document.getElementById(\"game-over\").style.display = \"none\"\n    }\n\n    resetValues() {\n        this.score.playerScore = 0\n        this.score.playerLives = 3\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//startDrag \n//should track the initial mousedown event and \n//add the distance from the mouse, both x and y to velocity\n//\n//when it is lifted (endDrag)\n//the ball should launch from the position with the velocity assigned to it \n\n//# sourceURL=webpack://javascript-project/./src/game.js?");

/***/ }),

/***/ "./src/hoop.js":
/*!*********************!*\
  !*** ./src/hoop.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Hoop {\n    constructor(ctx) {\n        this.ctx = ctx\n        this.x = 950\n        this.y = 250\n        this.animate = this.animate.bind(this)\n    }\n\n    animate(ctx) {\n        this.drawHoop(ctx)\n    }\n\n    drawHoop(ctx) {\n        //backboard\n        ctx.beginPath();\n        ctx.rect(this.x, this.y, 10, 125);\n        ctx.fillStyle = \"black\"\n        ctx.strokeStyle = \"black\"\n        ctx.fill()\n        ctx.stroke();\n        ctx.closePath();\n        //rim\n        ctx.beginPath();\n        ctx.rect(this.x - 95, this.y + 75, 95, 10);\n        ctx.strokeStyle = \"red\"\n        ctx.fillStyle = \"red\"\n        ctx.fill()\n        ctx.stroke();\n        ctx.closePath();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hoop);\n\n//# sourceURL=webpack://javascript-project/./src/hoop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"canvas\");\n    const startScreen = document.getElementById(\"start-screen\")\n    const gameOver = document.getElementById(\"game-over\")\n    let newGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, startScreen, gameOver)\n})\n\n\n//# sourceURL=webpack://javascript-project/./src/index.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Score {\n    constructor(ctx){\n        this.ctx = ctx\n        this.playerScore = 0\n        this.playerLives = 3\n        var f = new FontFace('Dimis', 'url(./assets/DIMIS___.TTF)');\n        f.load().then(function(font) {\n            // Ready to use the font in a canvas context\n            // console.log('font ready');\n            // Add font on the html page\n            document.fonts.add(font);\n        });        \n    }\n\n    animate(ctx){\n        // this.drawScoreBox()\n        this.draw()\n        this.drawLives()\n    }\n\n    // drawScoreBox(){\n    //     this.ctx.beginPath();\n    //     this.ctx.rect(10, 10, 300, 60)\n    //     this.ctx.strokeStyle = \"black\";\n    //     this.ctx.stroke()\n    //     this.ctx.closePath()\n    // }\n\n    draw(){\n        \n        this.ctx.font = \"50px Dimis\";\n        this.ctx.fillStyle = 'black';\n        this.ctx.fillText(\"Score: \"+ this.playerScore, 20, 60);\n    }\n\n    drawLives(){\n        this.ctx.font = \"50px Dimis\";\n        this.ctx.fillStyle = 'black';\n        this.ctx.fillText(\"Lives: \"+ this.playerLives, 250 , 60);\n\n        // this.ctx.beginPath();\n        // this.ctx.arc(200, 100, this.radius, 0, 2 * Math.PI, false);\n        // this.ctx.strokeStyle = \"Orange\"\n        // this.ctx.fillStyle = \"Orange\"\n        // this.ctx.stroke();\n        // this.ctx.fill();\n        // this.ctx.closePath()\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Score);\n\n//# sourceURL=webpack://javascript-project/./src/score.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;