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
        var randomNumbersArray = [];
        var randomNumber;
        //generate random initial alive seeds
        /*
        while(randomNumbersArray.length < this.initialSeedCount){
            randomNumber = Math.floor(Math.random() * ((this.allGrids.length - 1) - 0 + 1)) + 0;
            if(randomNumbersArray.indexOf(randomNumber) == -1){
                randomNumbersArray.push(randomNumber);
            }
        }
        */
        //fixed middle seeds
        var a = 4839;
        var b = 4939;
        //while(randomNumbersArray.length < this.initialSeedCount){
        while (randomNumbersArray.length < this.initialSeedCount) {
            randomNumbersArray.push(a);
            randomNumbersArray.push(b);
            a++;
            b++;
        }
        //revive initial seeds Count
        for (var i = 0; i < randomNumbersArray.length; i++) {
            this.allGrids[randomNumbersArray[i]].isAlive = true;
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
        }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NlbGxzLnRzIiwid2VicGFjazovLy8uL3NyYy9HYW1lV29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQix1QkFBdUI7QUFDdkM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEphO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsV0FBVyxtQkFBTyxDQUFDLG9EQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDN0JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLCtCQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQywyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtCQUErQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM1RmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxXQUFXLG1CQUFPLENBQUMsb0RBQVM7QUFDNUIsa0JBQWtCLG1CQUFPLENBQUMsdUNBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgUElYSSA9IHJlcXVpcmUoXCJwaXhpLmpzXCIpO1xyXG52YXIgQ2VsbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDZWxscyhfY29udGFpbmVyLCBfZ3JpZFgsIF9ncmlkWSkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwO1xyXG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNSZXZpdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ncmlkWCA9IF9ncmlkWDtcclxuICAgICAgICB0aGlzLmdyaWRZID0gX2dyaWRZO1xyXG4gICAgICAgIHRoaXMuYWxpdmVUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW1wiYXNzZXRzL29uLnBuZ1wiXS50ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMuYWxpdmVUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVDtcclxuICAgICAgICB0aGlzLmRlYWRUZXh0dXJlID0gUElYSS5sb2FkZXIucmVzb3VyY2VzW1wiYXNzZXRzL29mZi5wbmdcIl0udGV4dHVyZTtcclxuICAgICAgICB0aGlzLmRlYWRUZXh0dXJlLmJhc2VUZXh0dXJlLnNjYWxlTW9kZSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVDtcclxuICAgICAgICB0aGlzLmdyaWRCRyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLmRlYWRUZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmdyaWRCRy5wb3NpdGlvbi5zZXQodGhpcy5ncmlkWCAqIHRoaXMud2lkdGgsIHRoaXMuZ3JpZFkgKiB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmdyaWRCRyk7XHJcbiAgICB9XHJcbiAgICBDZWxscy5wcm90b3R5cGUuc2hvd1N0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQWxpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkQkcudGV4dHVyZSA9IHRoaXMuYWxpdmVUZXh0dXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkQkcudGV4dHVyZSA9IHRoaXMuZGVhZFRleHR1cmU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBDZWxscztcclxufSgpKTtcclxuZXhwb3J0cy5DZWxscyA9IENlbGxzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgQ2VsbHNfMSA9IHJlcXVpcmUoXCIuL0NlbGxzXCIpO1xyXG52YXIgR2FtZVdvcmxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZVdvcmxkKF9jb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnRvdGFsUm93cyA9IDEwMDtcclxuICAgICAgICB0aGlzLnRvdGFsQ29sdW1ucyA9IDEwMDtcclxuICAgICAgICB0aGlzLmluaXRpYWxTZWVkQ291bnQgPSA1MDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IF9jb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmlkKCk7XHJcbiAgICB9XHJcbiAgICBHYW1lV29ybGQucHJvdG90eXBlLmNyZWF0ZUdyaWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxHcmlkcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy50b3RhbFJvd3M7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMudG90YWxDb2x1bW5zOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsR3JpZHMucHVzaChuZXcgQ2VsbHNfMS5DZWxscyh0aGlzLmNvbnRhaW5lciwgeCwgeSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByYW5kb21OdW1iZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICB2YXIgcmFuZG9tTnVtYmVyO1xyXG4gICAgICAgIC8vZ2VuZXJhdGUgcmFuZG9tIGluaXRpYWwgYWxpdmUgc2VlZHNcclxuICAgICAgICAvKlxyXG4gICAgICAgIHdoaWxlKHJhbmRvbU51bWJlcnNBcnJheS5sZW5ndGggPCB0aGlzLmluaXRpYWxTZWVkQ291bnQpe1xyXG4gICAgICAgICAgICByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoKHRoaXMuYWxsR3JpZHMubGVuZ3RoIC0gMSkgLSAwICsgMSkpICsgMDtcclxuICAgICAgICAgICAgaWYocmFuZG9tTnVtYmVyc0FycmF5LmluZGV4T2YocmFuZG9tTnVtYmVyKSA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICByYW5kb21OdW1iZXJzQXJyYXkucHVzaChyYW5kb21OdW1iZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICovXHJcbiAgICAgICAgLy9maXhlZCBtaWRkbGUgc2VlZHNcclxuICAgICAgICB2YXIgYSA9IDQ4Mzk7XHJcbiAgICAgICAgdmFyIGIgPSA0OTM5O1xyXG4gICAgICAgIC8vd2hpbGUocmFuZG9tTnVtYmVyc0FycmF5Lmxlbmd0aCA8IHRoaXMuaW5pdGlhbFNlZWRDb3VudCl7XHJcbiAgICAgICAgd2hpbGUgKHJhbmRvbU51bWJlcnNBcnJheS5sZW5ndGggPCB0aGlzLmluaXRpYWxTZWVkQ291bnQpIHtcclxuICAgICAgICAgICAgcmFuZG9tTnVtYmVyc0FycmF5LnB1c2goYSk7XHJcbiAgICAgICAgICAgIHJhbmRvbU51bWJlcnNBcnJheS5wdXNoKGIpO1xyXG4gICAgICAgICAgICBhKys7XHJcbiAgICAgICAgICAgIGIrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9yZXZpdmUgaW5pdGlhbCBzZWVkcyBDb3VudFxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVyc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsR3JpZHNbcmFuZG9tTnVtYmVyc0FycmF5W2ldXS5pc0FsaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lTG9vcCgpO1xyXG4gICAgfTtcclxuICAgIEdhbWVXb3JsZC5wcm90b3R5cGUuaXNBbGl2ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggPCAwIHx8IHggPj0gdGhpcy50b3RhbENvbHVtbnMgfHwgeSA8IDAgfHwgeSA+PSB0aGlzLnRvdGFsUm93cykge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsR3JpZHNbdGhpcy5ncmlkVG9JbmRleCh4LCB5KV0uaXNBbGl2ZSA/IDEgOiAwO1xyXG4gICAgfTtcclxuICAgIEdhbWVXb3JsZC5wcm90b3R5cGUuZ3JpZFRvSW5kZXggPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB4ICsgKHkgKiB0aGlzLnRvdGFsQ29sdW1ucyk7XHJcbiAgICB9O1xyXG4gICAgR2FtZVdvcmxkLnByb3RvdHlwZS5jaGVja05laWdoYm9ycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBMb29wIG92ZXIgYWxsIGNlbGxzXHJcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLnRvdGFsQ29sdW1uczsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy50b3RhbFJvd3M7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gQ291bnQgdGhlIG5lYXJieSBuZWlnaGJvcnNcclxuICAgICAgICAgICAgICAgIHZhciBudW1BbGl2ZSA9IHRoaXMuaXNBbGl2ZSh4IC0gMSwgeSAtIDEpICsgdGhpcy5pc0FsaXZlKHgsIHkgLSAxKSArIHRoaXMuaXNBbGl2ZSh4ICsgMSwgeSAtIDEpICsgdGhpcy5pc0FsaXZlKHggLSAxLCB5KSArIHRoaXMuaXNBbGl2ZSh4ICsgMSwgeSkgKyB0aGlzLmlzQWxpdmUoeCAtIDEsIHkgKyAxKSArIHRoaXMuaXNBbGl2ZSh4LCB5ICsgMSkgKyB0aGlzLmlzQWxpdmUoeCArIDEsIHkgKyAxKTtcclxuICAgICAgICAgICAgICAgIHZhciBjZW50ZXJJbmRleCA9IHRoaXMuZ3JpZFRvSW5kZXgoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtQWxpdmUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbEdyaWRzW2NlbnRlckluZGV4XS5pc1Jldml2ZWQgPSB0aGlzLmFsbEdyaWRzW2NlbnRlckluZGV4XS5pc0FsaXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnVtQWxpdmUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgYWxpdmVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbEdyaWRzW2NlbnRlckluZGV4XS5pc1Jldml2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBkZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxHcmlkc1tjZW50ZXJJbmRleF0uaXNSZXZpdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQXBwbHkgdGhlIG5ldyBzdGF0ZSB0byB0aGUgY2VsbHNcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWxsR3JpZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxHcmlkc1tpXS5pc0FsaXZlID0gdGhpcy5hbGxHcmlkc1tpXS5pc1Jldml2ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEdhbWVXb3JsZC5wcm90b3R5cGUuZ2FtZUxvb3AgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZ2FtZUxvb3AoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hbGxHcmlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmFsbEdyaWRzW2ldLnNob3dTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrTmVpZ2hib3JzKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVXb3JsZDtcclxufSgpKTtcclxuZXhwb3J0cy5HYW1lV29ybGQgPSBHYW1lV29ybGQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBQSVhJID0gcmVxdWlyZShcInBpeGkuanNcIik7XHJcbnZhciBHYW1lV29ybGRfMSA9IHJlcXVpcmUoXCIuL0dhbWVXb3JsZFwiKTtcclxudmFyIHdpZHRoID0gMTAwMDtcclxudmFyIGhlaWdodCA9IDEwMDA7XHJcbnZhciBhcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7XHJcbiAgICB3aWR0aDogd2lkdGgsXHJcbiAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgIGFudGlhbGlhczogdHJ1ZSxcclxufSk7XHJcbnZhciBhcHBDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcF9jb250YWluZXJcIik7XHJcbmFwcENvbnRhaW5lci5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcbnZhciBnYW1lV29ybGQ7XHJcbmZ1bmN0aW9uIGxvYWRBc3NldHMoKSB7XHJcbiAgICBQSVhJLmxvYWRlclxyXG4gICAgICAgIC5hZGQoXCJhc3NldHMvb2ZmLnBuZ1wiKVxyXG4gICAgICAgIC5hZGQoXCJhc3NldHMvb24ucG5nXCIpXHJcbiAgICAgICAgLmxvYWQocnVuKTtcclxufVxyXG5mdW5jdGlvbiBydW4oKSB7XHJcbiAgICBnYW1lV29ybGQgPSBuZXcgR2FtZVdvcmxkXzEuR2FtZVdvcmxkKGFwcC5zdGFnZSk7XHJcbn1cclxubG9hZEFzc2V0cygpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9