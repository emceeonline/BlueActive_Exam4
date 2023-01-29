/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Cells.ts":
/*!**********************!*\
  !*** ./src/Cells.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var Cells = /** @class */ (function () {
    function Cells(_container, _gridX, _gridY) {
        this.width = 10;
        this.height = 10;
        this.isAlive = false;
        this.isRevived = false;
        this.gridX = _gridX;
        this.gridY = _gridY;
        this.aliveTexture = PIXI.loader.resources["assets/on.png"].texture;
        this.aliveTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        this.deadTexture = PIXI.loader.resources["assets/off.png"].texture;
        this.deadTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        this.gridBG = new PIXI.Sprite(this.deadTexture);
        this.gridBG.position.set(this.gridX * this.width, this.gridY * this.height);
        _container.addChild(this.gridBG);
    }
    Cells.prototype.showState = function () {
        if (this.isAlive) {
            this.gridBG.texture = this.aliveTexture;
        }
        else {
            this.gridBG.texture = this.deadTexture;
        }
    };
    return Cells;
}());
exports.Cells = Cells;


/***/ }),

/***/ "./src/GameWorld.ts":
/*!**************************!*\
  !*** ./src/GameWorld.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Cells_1 = __webpack_require__(/*! ./Cells */ "./src/Cells.ts");
var GameWorld = /** @class */ (function () {
    function GameWorld(_container) {
        this.totalRows = 100;
        this.totalColumns = 100;
        this.initialSeedCount = 50;
        this.container = _container;
        this.createGrid();
    }
    GameWorld.prototype.createGrid = function () {
        this.allGrids = [];
        for (var y = 0; y < this.totalRows; y++) {
            for (var x = 0; x < this.totalColumns; x++) {
                this.allGrids.push(new Cells_1.Cells(this.container, x, y));
            }
        }
        var seedNumbers = [];
        var randomNumber;
        //generate random initial alive seeds
        /*
        while(seedNumbers.length < this.initialSeedCount){
            randomNumber = Math.floor(Math.random() * ((this.allGrids.length - 1) - 0 + 1)) + 0;
            if(seedNumbers.indexOf(randomNumber) == -1){
                seedNumbers.push(randomNumber);
            }
        }
        */
        /*
        //fixed middle seeds
        let a:number = 4839;
        let b:number = 4939;
        //while(seedNumbers.length < this.initialSeedCount){
        while(seedNumbers.length < this.initialSeedCount){
            seedNumbers.push(a);
            seedNumbers.push(b);
            a++;
            b++;
        }
        */
        //missile
        seedNumbers.push(926);
        seedNumbers.push(927);
        seedNumbers.push(1026);
        seedNumbers.push(1027);
        seedNumbers.push(760);
        seedNumbers.push(761);
        seedNumbers.push(860);
        seedNumbers.push(861);
        seedNumbers.push(1043);
        seedNumbers.push(1042);
        seedNumbers.push(942);
        seedNumbers.push(841);
        seedNumbers.push(739);
        seedNumbers.push(738);
        seedNumbers.push(837);
        seedNumbers.push(936);
        seedNumbers.push(1036);
        seedNumbers.push(1136);
        seedNumbers.push(1237);
        seedNumbers.push(1338);
        seedNumbers.push(1339);
        seedNumbers.push(1040);
        seedNumbers.push(1241);
        seedNumbers.push(1142);
        seedNumbers.push(550);
        seedNumbers.push(650);
        seedNumbers.push(648);
        seedNumbers.push(746);
        seedNumbers.push(846);
        seedNumbers.push(946);
        seedNumbers.push(947);
        seedNumbers.push(847);
        seedNumbers.push(747);
        seedNumbers.push(1048);
        seedNumbers.push(1050);
        seedNumbers.push(1150);
        seedNumbers.push(5090);
        seedNumbers.push(5191);
        seedNumbers.push(5190);
        seedNumbers.push(6191);
        seedNumbers.push(5949);
        seedNumbers.push(6049);
        seedNumbers.push(6149);
        seedNumbers.push(6249);
        seedNumbers.push(6349);
        seedNumbers.push(6449);
        seedNumbers.push(6549);
        seedNumbers.push(6649);
        seedNumbers.push(6749);
        seedNumbers.push(6849);
        //revive initial seeds Count
        for (var i = 0; i < seedNumbers.length; i++) {
            this.allGrids[seedNumbers[i]].isAlive = true;
        }
        this.gameLoop();
    };
    GameWorld.prototype.isAlive = function (x, y) {
        if (x < 0 || x >= this.totalColumns || y < 0 || y >= this.totalRows) {
            return 0;
        }
        return this.allGrids[this.gridToIndex(x, y)].isAlive ? 1 : 0;
    };
    GameWorld.prototype.gridToIndex = function (x, y) {
        return x + (y * this.totalColumns);
    };
    GameWorld.prototype.checkNeighbors = function () {
        // Loop over all cells
        for (var x = 0; x < this.totalColumns; x++) {
            for (var y = 0; y < this.totalRows; y++) {
                // Count the nearby neighbors
                var numAlive = this.isAlive(x - 1, y - 1) + this.isAlive(x, y - 1) + this.isAlive(x + 1, y - 1) + this.isAlive(x - 1, y) + this.isAlive(x + 1, y) + this.isAlive(x - 1, y + 1) + this.isAlive(x, y + 1) + this.isAlive(x + 1, y + 1);
                var centerIndex = this.gridToIndex(x, y);
                if (numAlive == 2) {
                    // Do nothing
                    this.allGrids[centerIndex].isRevived = this.allGrids[centerIndex].isAlive;
                }
                else if (numAlive == 3) {
                    // Make alive
                    this.allGrids[centerIndex].isRevived = true;
                }
                else {
                    // Make dead
                    this.allGrids[centerIndex].isRevived = false;
                }
            }
        }
        // Apply the new state to the cells
        for (var i = 0; i < this.allGrids.length; i++) {
            this.allGrids[i].isAlive = this.allGrids[i].isRevived;
        }
    };
    GameWorld.prototype.gameLoop = function () {
        var _this = this;
        setTimeout(function () {
            _this.gameLoop();
        }, 100);
        for (var i = 0; i < this.allGrids.length; i++) {
            this.allGrids[i].showState();
        }
        this.checkNeighbors();
    };
    return GameWorld;
}());
exports.GameWorld = GameWorld;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.js");
var GameWorld_1 = __webpack_require__(/*! ./GameWorld */ "./src/GameWorld.ts");
var width = 1000;
var height = 1000;
var app = new PIXI.Application({
    width: width,
    height: height,
    antialias: true,
});
var appContainer = document.getElementById("app_container");
appContainer.appendChild(app.view);
var gameWorld;
function loadAssets() {
    PIXI.loader
        .add("assets/off.png")
        .add("assets/on.png")
        .load(run);
}
function run() {
    gameWorld = new GameWorld_1.GameWorld(app.stage);
}
loadAssets();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NlbGxzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lV29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEphO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsV0FBVyxtQkFBTyxDQUFDLG9EQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDN0JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLCtCQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQywyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QywyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDakphO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsV0FBVyxtQkFBTyxDQUFDLG9EQUFTO0FBQzVCLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIENlbGxzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2VsbHMoX2NvbnRhaW5lciwgX2dyaWRYLCBfZ3JpZFkpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcclxuICAgICAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzUmV2aXZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JpZFggPSBfZ3JpZFg7XHJcbiAgICAgICAgdGhpcy5ncmlkWSA9IF9ncmlkWTtcclxuICAgICAgICB0aGlzLmFsaXZlVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1tcImFzc2V0cy9vbi5wbmdcIl0udGV4dHVyZTtcclxuICAgICAgICB0aGlzLmFsaXZlVGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1Q7XHJcbiAgICAgICAgdGhpcy5kZWFkVGV4dHVyZSA9IFBJWEkubG9hZGVyLnJlc291cmNlc1tcImFzc2V0cy9vZmYucG5nXCJdLnRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5kZWFkVGV4dHVyZS5iYXNlVGV4dHVyZS5zY2FsZU1vZGUgPSBQSVhJLlNDQUxFX01PREVTLk5FQVJFU1Q7XHJcbiAgICAgICAgdGhpcy5ncmlkQkcgPSBuZXcgUElYSS5TcHJpdGUodGhpcy5kZWFkVGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5ncmlkQkcucG9zaXRpb24uc2V0KHRoaXMuZ3JpZFggKiB0aGlzLndpZHRoLCB0aGlzLmdyaWRZICogdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIF9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5ncmlkQkcpO1xyXG4gICAgfVxyXG4gICAgQ2VsbHMucHJvdG90eXBlLnNob3dTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FsaXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZEJHLnRleHR1cmUgPSB0aGlzLmFsaXZlVGV4dHVyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZEJHLnRleHR1cmUgPSB0aGlzLmRlYWRUZXh0dXJlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ2VsbHM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2VsbHMgPSBDZWxscztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIENlbGxzXzEgPSByZXF1aXJlKFwiLi9DZWxsc1wiKTtcclxudmFyIEdhbWVXb3JsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVXb3JsZChfY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbFJvd3MgPSAxMDA7XHJcbiAgICAgICAgdGhpcy50b3RhbENvbHVtbnMgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsU2VlZENvdW50ID0gNTA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBfY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZCgpO1xyXG4gICAgfVxyXG4gICAgR2FtZVdvcmxkLnByb3RvdHlwZS5jcmVhdGVHcmlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWxsR3JpZHMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMudG90YWxSb3dzOyB5KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLnRvdGFsQ29sdW1uczsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEdyaWRzLnB1c2gobmV3IENlbGxzXzEuQ2VsbHModGhpcy5jb250YWluZXIsIHgsIHkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VlZE51bWJlcnMgPSBbXTtcclxuICAgICAgICB2YXIgcmFuZG9tTnVtYmVyO1xyXG4gICAgICAgIC8vZ2VuZXJhdGUgcmFuZG9tIGluaXRpYWwgYWxpdmUgc2VlZHNcclxuICAgICAgICAvKlxyXG4gICAgICAgIHdoaWxlKHNlZWROdW1iZXJzLmxlbmd0aCA8IHRoaXMuaW5pdGlhbFNlZWRDb3VudCl7XHJcbiAgICAgICAgICAgIHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgodGhpcy5hbGxHcmlkcy5sZW5ndGggLSAxKSAtIDAgKyAxKSkgKyAwO1xyXG4gICAgICAgICAgICBpZihzZWVkTnVtYmVycy5pbmRleE9mKHJhbmRvbU51bWJlcikgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgc2VlZE51bWJlcnMucHVzaChyYW5kb21OdW1iZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLypcclxuICAgICAgICAvL2ZpeGVkIG1pZGRsZSBzZWVkc1xyXG4gICAgICAgIGxldCBhOm51bWJlciA9IDQ4Mzk7XHJcbiAgICAgICAgbGV0IGI6bnVtYmVyID0gNDkzOTtcclxuICAgICAgICAvL3doaWxlKHNlZWROdW1iZXJzLmxlbmd0aCA8IHRoaXMuaW5pdGlhbFNlZWRDb3VudCl7XHJcbiAgICAgICAgd2hpbGUoc2VlZE51bWJlcnMubGVuZ3RoIDwgdGhpcy5pbml0aWFsU2VlZENvdW50KXtcclxuICAgICAgICAgICAgc2VlZE51bWJlcnMucHVzaChhKTtcclxuICAgICAgICAgICAgc2VlZE51bWJlcnMucHVzaChiKTtcclxuICAgICAgICAgICAgYSsrO1xyXG4gICAgICAgICAgICBiKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9taXNzaWxlXHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg5MjYpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goOTI3KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDEwMjYpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goMTAyNyk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg3NjApO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goNzYxKTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDg2MCk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg4NjEpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goMTA0Myk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCgxMDQyKTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDk0Mik7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg4NDEpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goNzM5KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDczOCk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg4MzcpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goOTM2KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDEwMzYpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goMTEzNik7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCgxMjM3KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDEzMzgpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goMTMzOSk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCgxMDQwKTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDEyNDEpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goMTE0Mik7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg1NTApO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goNjUwKTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDY0OCk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg3NDYpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goODQ2KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDk0Nik7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg5NDcpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goODQ3KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDc0Nyk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCgxMDQ4KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDEwNTApO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goMTE1MCk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg1MDkwKTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDUxOTEpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goNTE5MCk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg2MTkxKTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDU5NDkpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goNjA0OSk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg2MTQ5KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDYyNDkpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goNjM0OSk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg2NDQ5KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDY1NDkpO1xyXG4gICAgICAgIHNlZWROdW1iZXJzLnB1c2goNjY0OSk7XHJcbiAgICAgICAgc2VlZE51bWJlcnMucHVzaCg2NzQ5KTtcclxuICAgICAgICBzZWVkTnVtYmVycy5wdXNoKDY4NDkpO1xyXG4gICAgICAgIC8vcmV2aXZlIGluaXRpYWwgc2VlZHMgQ291bnRcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZWROdW1iZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsR3JpZHNbc2VlZE51bWJlcnNbaV1dLmlzQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVMb29wKCk7XHJcbiAgICB9O1xyXG4gICAgR2FtZVdvcmxkLnByb3RvdHlwZS5pc0FsaXZlID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLnRvdGFsQ29sdW1ucyB8fCB5IDwgMCB8fCB5ID49IHRoaXMudG90YWxSb3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxHcmlkc1t0aGlzLmdyaWRUb0luZGV4KHgsIHkpXS5pc0FsaXZlID8gMSA6IDA7XHJcbiAgICB9O1xyXG4gICAgR2FtZVdvcmxkLnByb3RvdHlwZS5ncmlkVG9JbmRleCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHggKyAoeSAqIHRoaXMudG90YWxDb2x1bW5zKTtcclxuICAgIH07XHJcbiAgICBHYW1lV29ybGQucHJvdG90eXBlLmNoZWNrTmVpZ2hib3JzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIExvb3Agb3ZlciBhbGwgY2VsbHNcclxuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMudG90YWxDb2x1bW5zOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLnRvdGFsUm93czsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb3VudCB0aGUgbmVhcmJ5IG5laWdoYm9yc1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bUFsaXZlID0gdGhpcy5pc0FsaXZlKHggLSAxLCB5IC0gMSkgKyB0aGlzLmlzQWxpdmUoeCwgeSAtIDEpICsgdGhpcy5pc0FsaXZlKHggKyAxLCB5IC0gMSkgKyB0aGlzLmlzQWxpdmUoeCAtIDEsIHkpICsgdGhpcy5pc0FsaXZlKHggKyAxLCB5KSArIHRoaXMuaXNBbGl2ZSh4IC0gMSwgeSArIDEpICsgdGhpcy5pc0FsaXZlKHgsIHkgKyAxKSArIHRoaXMuaXNBbGl2ZSh4ICsgMSwgeSArIDEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNlbnRlckluZGV4ID0gdGhpcy5ncmlkVG9JbmRleCh4LCB5KTtcclxuICAgICAgICAgICAgICAgIGlmIChudW1BbGl2ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsR3JpZHNbY2VudGVySW5kZXhdLmlzUmV2aXZlZCA9IHRoaXMuYWxsR3JpZHNbY2VudGVySW5kZXhdLmlzQWxpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChudW1BbGl2ZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBhbGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsR3JpZHNbY2VudGVySW5kZXhdLmlzUmV2aXZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIGRlYWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbEdyaWRzW2NlbnRlckluZGV4XS5pc1Jldml2ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBcHBseSB0aGUgbmV3IHN0YXRlIHRvIHRoZSBjZWxsc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxHcmlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFsbEdyaWRzW2ldLmlzQWxpdmUgPSB0aGlzLmFsbEdyaWRzW2ldLmlzUmV2aXZlZDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgR2FtZVdvcmxkLnByb3RvdHlwZS5nYW1lTG9vcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5nYW1lTG9vcCgpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFsbEdyaWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsR3JpZHNbaV0uc2hvd1N0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hlY2tOZWlnaGJvcnMoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZVdvcmxkO1xyXG59KCkpO1xyXG5leHBvcnRzLkdhbWVXb3JsZCA9IEdhbWVXb3JsZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFBJWEkgPSByZXF1aXJlKFwicGl4aS5qc1wiKTtcclxudmFyIEdhbWVXb3JsZF8xID0gcmVxdWlyZShcIi4vR2FtZVdvcmxkXCIpO1xyXG52YXIgd2lkdGggPSAxMDAwO1xyXG52YXIgaGVpZ2h0ID0gMTAwMDtcclxudmFyIGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHtcclxuICAgIHdpZHRoOiB3aWR0aCxcclxuICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgYW50aWFsaWFzOiB0cnVlLFxyXG59KTtcclxudmFyIGFwcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwX2NvbnRhaW5lclwiKTtcclxuYXBwQ29udGFpbmVyLmFwcGVuZENoaWxkKGFwcC52aWV3KTtcclxudmFyIGdhbWVXb3JsZDtcclxuZnVuY3Rpb24gbG9hZEFzc2V0cygpIHtcclxuICAgIFBJWEkubG9hZGVyXHJcbiAgICAgICAgLmFkZChcImFzc2V0cy9vZmYucG5nXCIpXHJcbiAgICAgICAgLmFkZChcImFzc2V0cy9vbi5wbmdcIilcclxuICAgICAgICAubG9hZChydW4pO1xyXG59XHJcbmZ1bmN0aW9uIHJ1bigpIHtcclxuICAgIGdhbWVXb3JsZCA9IG5ldyBHYW1lV29ybGRfMS5HYW1lV29ybGQoYXBwLnN0YWdlKTtcclxufVxyXG5sb2FkQXNzZXRzKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=