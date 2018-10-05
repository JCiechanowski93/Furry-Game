/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\r\nvar game = new Game();\r\n\r\ngame.showFurry();\r\ngame.showCoin();\r\ngame.startGame();\r\n\r\ndocument.addEventListener('keydown', function (event) {\r\n    game.turnFurry(event);\r\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Coin = function (x, y) {\r\n    this.x = Math.floor((Math.random() * 10));\r\n    this.y = Math.floor((Math.random() * 10));\r\n}\r\n\r\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Furry = function (x, y, direction) {\r\n    this.x = 0;\r\n    this.y = 0;\r\n    this.direction = \"right\";\r\n}\r\n\r\nmodule.exports = Furry;\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Furry = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\r\nvar Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\r\n\r\n\r\nvar Game = function () {\r\n    this.board = document.querySelectorAll(\"#board div\");\r\n    this.furry = new Furry();\r\n    this.coin = new Coin();\r\n    this.score = 0;\r\n    this.index = function (x, y) {\r\n        return x + (y * 10);\r\n    }\r\n    this.showFurry = function () {\r\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\r\n    }\r\n    this.showCoin = function () {\r\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\r\n    }\r\n    this.startGame = function () {\r\n        this.idSetInterval = setInterval(function () {\r\n            self.moveFurry();\r\n        }, 250);\r\n    }\r\n    var self = this;\r\n    this.moveFurry = function () {\r\n        this.hideVisibleFurry();\r\n        if (this.furry.direction === \"right\") {\r\n            this.furry.x = this.furry.x + 1;\r\n        } else if (this.furry.direction === \"left\") {\r\n            this.furry.x = this.furry.x - 1;\r\n        } else if (this.furry.direction === \"up\") {\r\n            this.furry.y = this.furry.y - 1;\r\n        } else if (this.furry.direction === \"down\") {\r\n            this.furry.y = this.furry.y + 1;\r\n        }\r\n\r\n        this.checkCoinCollision();\r\n        this.gameOver();\r\n\r\n    }\r\n    this.hideVisibleFurry = function () {\r\n        document.querySelector('.furry').classList.remove('furry');\r\n    };\r\n    this.turnFurry = function (event) {\r\n        switch (event.which) {\r\n            case 37:\r\n                this.furry.direction = 'left';\r\n                break;\r\n            case 39:\r\n                this.furry.direction = 'right';\r\n                break;\r\n            case 38:\r\n                this.furry.direction = 'up';\r\n                break;\r\n            case 40:\r\n                this.furry.direction = 'down';\r\n                break;\r\n        }\r\n    };\r\n    this.checkCoinCollision = function () {\r\n        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\r\n            document.querySelector(\".coin\").classList.remove(\"coin\");\r\n            var result = document.querySelector(\"strong\");\r\n            result.textContent = parseInt(result.textContent) + 1;\r\n            this.coin = new Coin();\r\n            this.showCoin();\r\n        }\r\n    }\r\n    this.gameOver = function () {\r\n        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\r\n            clearInterval(this.idSetInterval);\r\n            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');\r\n            var over = document.getElementById('over');\r\n            over.classList.remove('invisible');\r\n        } else {\r\n            this.showFurry();\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });