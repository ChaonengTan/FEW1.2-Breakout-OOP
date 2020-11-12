/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _js_ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ball.js */ \"./src/js/ball.js\");\n/* harmony import */ var _js_bricks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/bricks.js */ \"./src/js/bricks.js\");\n/* harmony import */ var _js_paddle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/paddle.js */ \"./src/js/paddle.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable import/extensions */\r\n/* eslint-disable no-alert */\r\n\r\n// import classes\r\n;\r\n\r\n\r\n// canvas\r\nconst canvas = document.getElementById('myCanvas');\r\nconst ctx = canvas.getContext('2d');\r\n// create bricks\r\nconst bricksColumnCount = 5;\r\nconst bricksRowCount = 3;\r\nconst bricks = [];\r\nfunction createBricks() {\r\n  for (let c = 0; c < bricksColumnCount; c += 1) {\r\n    bricks[c] = [];\r\n    for (let r = 0; r < bricksRowCount; r += 1) {\r\n      bricks[c][r] = new _js_bricks_js__WEBPACK_IMPORTED_MODULE_1__.default(c, r);\r\n    }\r\n  }\r\n}\r\ncreateBricks();\r\n// custom background\r\nfunction createGradiant() {\r\n  // skyGrad\r\n  const grd = ctx.createLinearGradient(0, 0, 0, 320);\r\n  grd.addColorStop(0, 'cornflowerblue');\r\n  grd.addColorStop(1, 'white');\r\n\r\n  ctx.fillStyle = grd;\r\n  ctx.fillRect(0, 0, 480, 320);\r\n}\r\nfunction drawCloud(xposition, yposition) {\r\n  // cloud\r\n  ctx.beginPath();\r\n  ctx.arc(xposition, yposition, 30, 0, Math.PI * 2);\r\n  ctx.arc(xposition + 30, yposition, 25, 0, Math.PI * 2);\r\n  ctx.fillStyle = 'white';\r\n  ctx.fill();\r\n}\r\nfunction drawBG() {\r\n  createGradiant();\r\n  drawCloud(100, 60);\r\n  drawCloud(300, 100);\r\n}\r\n// vars\r\nlet lives = 3;\r\nlet score = 0;\r\n// draw functions\r\nconst infoColor = 'red';\r\nconst ball = new _js_ball_js__WEBPACK_IMPORTED_MODULE_0__.default(canvas.width / 2, canvas.height - 30, 10, 'red');\r\nfunction drawBall() {\r\n  ball.render(ctx);\r\n}\r\nconst paddle = new _js_paddle_js__WEBPACK_IMPORTED_MODULE_2__.default((canvas.width - 75) / 2, 75, 10, 'red', 7, canvas);\r\nfunction drawPaddle() {\r\n  paddle.render(ctx);\r\n}\r\nfunction drawLives() {\r\n  ctx.font = '16px Arial';\r\n  ctx.fillStyle = infoColor;\r\n  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);\r\n}\r\nfunction drawScore() {\r\n  ctx.font = '16px Arial';\r\n  ctx.fillStyle = infoColor;\r\n  ctx.fillText(`Score: ${score}`, 8, 20);\r\n}\r\nfunction drawBricks() {\r\n  for (let c = 0; c < bricksColumnCount; c += 1) {\r\n    for (let r = 0; r < bricksRowCount; r += 1) {\r\n      if (bricks[c][r].status === 1) {\r\n        ctx.beginPath();\r\n        ctx.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, bricks[c][r].height);\r\n        ctx.fillStyle = infoColor;\r\n        ctx.fill();\r\n        ctx.closePath();\r\n      }\r\n    }\r\n  }\r\n}\r\nfunction drawElements() {\r\n  drawBall();\r\n  drawPaddle();\r\n  drawLives();\r\n  drawScore();\r\n  drawBricks();\r\n}\r\nfunction moveElements() {\r\n  ball.move();\r\n  paddle.move();\r\n}\r\n// assisters\r\nfunction wallsCollison() {\r\n  // walls, misses, subtracts lives\r\n  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {\r\n    ball.dx = -ball.dx;\r\n  }\r\n  if (ball.y + ball.dy < ball.radius) {\r\n    ball.dy = -ball.dy;\r\n  } else if (ball.y + ball.dy > canvas.height - ball.radius) {\r\n    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\r\n      ball.dy = -ball.dy;\r\n    } else {\r\n      lives -= 1;\r\n      if (!lives) {\r\n        alert('GAME OVER');\r\n        document.location.reload();\r\n      } else {\r\n        ball.x = canvas.width / 2;\r\n        ball.y = canvas.height - 30;\r\n        ball.dx = 2;\r\n        ball.dy = -2;\r\n        paddle.x = (canvas.width - paddle.width) / 2;\r\n      }\r\n    }\r\n  }\r\n}\r\nfunction collisionDetection() {\r\n  for (let c = 0; c < bricksColumnCount; c += 1) {\r\n    for (let r = 0; r < bricksRowCount; r += 1) {\r\n      const b = bricks[c][r];\r\n      if (b.status === 1) {\r\n        if (ball.x > b.x && ball.x < b.x + b.width && ball.y > b.y && ball.y < b.y + b.height) {\r\n          ball.dy = -ball.dy;\r\n          b.status = 0;\r\n          score += 1;\r\n          if (score === bricksRowCount * bricksColumnCount) {\r\n            alert('YOU WIN, CONGRATULATIONS!');\r\n            document.location.reload();\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\nfunction mouseMoveHandler(e) {\r\n  const relativeX = e.clientX - canvas.offsetLeft;\r\n  if (relativeX > 0 && relativeX < canvas.width) {\r\n    paddle.x = relativeX - paddle.width / 2;\r\n  }\r\n}\r\nfunction keyDownHandler(e) {\r\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\r\n    paddle.keyPressed = 'right';\r\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\r\n    paddle.keyPressed = 'left';\r\n  }\r\n}\r\nfunction keyUpHandler(e) {\r\n  if (e.key === 'Right' || e.key === 'ArrowRight') {\r\n    paddle.keyPressed = 'none';\r\n  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {\r\n    paddle.keyPressed = 'none';\r\n  }\r\n}\r\n// event handlers\r\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\r\ndocument.addEventListener('keydown', keyDownHandler, false);\r\ndocument.addEventListener('keyup', keyUpHandler, false);\r\n// main run\r\nfunction draw() {\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n  drawBG();\r\n  drawElements();\r\n  collisionDetection();\r\n  wallsCollison();\r\n  moveElements();\r\n  requestAnimationFrame(draw);\r\n}\r\ndraw();\r\n// export classes\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (canvas);\r\n\n\n//# sourceURL=webpack://FEW1.2-Breakout-OOP/./src/index.js?");

/***/ }),

/***/ "./src/js/ball.js":
/*!************************!*\
  !*** ./src/js/ball.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass Ball {\r\n  constructor(x, y, radius = 10, color = 'red', dx = 2, dy = -2) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.radius = radius;\r\n    this.color = color;\r\n    this.dx = dx;\r\n    this.dy = dy;\r\n  }\r\n\r\n  move() {\r\n    this.x += this.dx;\r\n    this.y += this.dy;\r\n  }\r\n\r\n  render(ctx) {\r\n    ctx.beginPath();\r\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n    ctx.closePath();\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\r\n\n\n//# sourceURL=webpack://FEW1.2-Breakout-OOP/./src/js/ball.js?");

/***/ }),

/***/ "./src/js/bricks.js":
/*!**************************!*\
  !*** ./src/js/bricks.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass Brick {\r\n  constructor(x, y, width = 75, height = 20, status = 1, color = 'red', bricksPadding = 10, bricksOffsetTop = 30, bricksOffsetSide = 30) {\r\n    this.x = (x * (width + bricksPadding)) + bricksOffsetSide;\r\n    this.y = (y * (height + bricksPadding)) + bricksOffsetTop;\r\n    this.width = width;\r\n    this.height = height;\r\n    this.status = status;\r\n    this.color = color;\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\r\n\n\n//# sourceURL=webpack://FEW1.2-Breakout-OOP/./src/js/bricks.js?");

/***/ }),

/***/ "./src/js/paddle.js":
/*!**************************!*\
  !*** ./src/js/paddle.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nclass Paddle {\r\n  constructor(x, width = 75, height = 10, color = 'red', dx = 7, canvas) {\r\n    this.x = x;\r\n    this.width = width;\r\n    this.height = height;\r\n    this.color = color;\r\n    this.dx = dx;\r\n    this.keyPressed = 'none';\r\n    this.canvas = canvas;\r\n  }\r\n\r\n  move() {\r\n    if (this.keyPressed === 'left') {\r\n      this.x -= this.dx;\r\n    } else if (this.keyPressed === 'right') {\r\n      this.x += this.dx;\r\n    }\r\n  }\r\n\r\n  render(ctx) {\r\n    ctx.beginPath();\r\n    ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n    ctx.closePath();\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\r\n\n\n//# sourceURL=webpack://FEW1.2-Breakout-OOP/./src/js/paddle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;