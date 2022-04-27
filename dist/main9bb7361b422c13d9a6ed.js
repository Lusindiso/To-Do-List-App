/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/completed.js":
/*!**********************************!*\
  !*** ./src/modules/completed.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var completed = function completed(e, tasks) {
  if (e.target.className === 'completed') {
    // eslint-disable-next-line array-callback-return
    tasks.map(function (task) {
      if (parseInt(e.target.parentNode.id, 10) === task.index) {
        task.completed = !task.completed;
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completed);

/***/ }),

/***/ "./src/modules/displayTasks.js":
/*!*************************************!*\
  !*** ./src/modules/displayTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var todoList = document.querySelector('.todo-list');

var createList = function createList(list) {
  todoList.innerHTML = '';
  list.forEach(function (el) {
    var li = document.createElement('li');
    li.className = 'task';
    li.id = el.index;
    li.innerHTML = "<input type=\"checkbox\" class=\"completed\" ".concat(el.completed ? 'checked' : !true, "></i><input class=\"task-text\" type=\"text\" value=\"").concat(el.description, "\"><i class=\"fa-solid fa-ellipsis-vertical\"></i><i class=\"fa-solid fa-trash-can\" id =\"").concat(el.index, "\"></i>");
    todoList.appendChild(li);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);

/***/ }),

/***/ "./src/modules/eventHandle.js":
/*!************************************!*\
  !*** ./src/modules/eventHandle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setData": () => (/* binding */ setData)
/* harmony export */ });
/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed.js */ "./src/modules/completed.js");
/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks.js */ "./src/modules/displayTasks.js");
/* eslint-disable no-return-assign */

/* eslint-disable no-plusplus */


var todoList = document.querySelector('.todo-list');
var form = document.querySelector('.form');
var addTask = document.getElementById('add-task');
var clear = document.querySelector('.clear');
var claerRotate = document.querySelector('.fa-arrows-rotate');
var setData = function setData(tasks) {
  localStorage.setItem('inputData', JSON.stringify(tasks));
};

var eventHandle = function eventHandle(tasks) {
  if (localStorage.getItem('inputData')) {
    tasks = JSON.parse(localStorage.getItem('inputData'));
    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
  }

  form.onsubmit = function () {
    var index;

    if (tasks.length > 0) {
      index = tasks[tasks.length - 1].index + 1;
    } else {
      index = 0;
    }

    var task = addTask.value;
    tasks.push({
      description: task,
      completed: false,
      index: index
    });
    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
    form.reset();
    setData(tasks);
  };

  todoList.onclick = function (e) {
    if (e.target.className === 'fa-solid fa-trash-can') {
      tasks = tasks.filter(function (item) {
        return item.index !== parseInt(e.target.id, 10);
      });
      tasks.map(function (task, i) {
        return task.index = i;
      });
      (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
      setData(tasks);
    }
  };

  todoList.onchange = function (e) {
    if (e.target.className === 'task-text') {
      // eslint-disable-next-line array-callback-return
      tasks.map(function (task) {
        if (parseInt(e.target.parentNode.id, 10) === task.index) {
          task.description = e.target.value;
        }
      });
      (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
      setData(tasks);
    }
  };

  todoList.onchange = function (e) {
    (0,_completed_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, tasks);
    setData(tasks);
  };

  clear.onclick = function () {
    tasks.splice(0, tasks.length);
    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
    setData(tasks);
  };

  claerRotate.onclick = function () {
    claerRotate.style.transform = 'rotate(90deg)';
    tasks.splice(0, tasks.length);
    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
    setData(tasks);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventHandle);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.8);\n}\n\nul {\n  list-style: none;\n}\n\n.container {\n  width: 85vw;\n  max-width: 90rem;\n  margin: 0 auto;\n  box-shadow: 8px 5px 25px rgba(0, 0, 0, 0.2);\n}\n\n.heading {\n  padding: 1.8rem 2rem;\n  font-weight: normal;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1.8rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.fa-arrows-rotate:active {\n  transform: rotateX(\"180deg\");\n}\n\n.label {\n  padding: 0.3rem 2rem 0.3rem 1rem;\n  font-weight: 100;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1.7rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ninput,\ninput:active {\n  outline: none;\n  border: none;\n  padding: 1.5rem 0;\n  font-size: 1.7rem;\n}\n\n.add-task {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.add-task::placeholder {\n  font-style: italic;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.submit {\n  padding: 0.8rem;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\nli {\n  padding: 0.3rem 2rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nli span {\n  width: 100%;\n}\n\n.completed:checked + input {\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.7);\n}\n\ni {\n  padding: 5px;\n  color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  font-size: 1.7rem;\n}\n\n.fa-ellipsis-vertical {\n  cursor: move;\n  width: 1rem;\n}\n\n.task-text,\n.task-text:active {\n  width: 95%;\n  padding-left: 10px;\n}\n\n.fa-trash-can {\n  display: none;\n}\n\n.fa-trash-can:hover {\n  display: block;\n}\n\n.task-text:focus ~ .fa-trash-can {\n  display: block;\n}\n\n.task-text:focus ~ .fa-ellipsis-vertical {\n  display: none;\n}\n\n.clear {\n  padding: 1.8rem 2rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  font-size: 1.7rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;;;EAGE,UAAA;EACA,SAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,gBAAA;EACA,cAAA;EACA,2CAAA;AACF;;AAEA;EACE,oBAAA;EACA,mBAAA;EACA,2CAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;AACF;;AAEA;EACE,4BAAA;AACF;;AAEA;EACE,gCAAA;EACA,gBAAA;EACA,2CAAA;EACA,iBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;;EAEE,aAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AACF;;AAEA;EACE,WAAA;EACA,yBAAA;AACF;;AAEA;EACE,kBAAA;EACA,uCAAA;EACA,yBAAA;AACF;;AAEA;EACE,eAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;AACF;;AAEA;EACE,oBAAA;EACA,2CAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;AACF;;AAEA;EACE,6BAAA;EACA,yBAAA;AACF;;AAEA;EACE,YAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;AACF;;AAEA;;EAEE,UAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,oBAAA;EACA,kBAAA;EACA,yBAAA;EACA,qCAAA;EACA,eAAA;EACA,iBAAA;AACF","sourcesContent":["*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.8);\n}\n\nul {\n  list-style: none;\n}\n\n.container {\n  width: 85vw;\n  max-width: 90rem;\n  margin: 0 auto;\n  box-shadow: 8px 5px 25px rgba(0, 0, 0, 0.2);\n}\n\n.heading {\n  padding: 1.8rem 2rem;\n  font-weight: normal;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1.8rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.fa-arrows-rotate:active {\n  transform: rotateX('180deg');\n}\n\n.label {\n  padding: 0.3rem 2rem 0.3rem 1rem;\n  font-weight: 100;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  font-size: 1.7rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ninput,\ninput:active {\n  outline: none;\n  border: none;\n  padding: 1.5rem 0;\n  font-size: 1.7rem;\n}\n\n.add-task {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.add-task::placeholder {\n  font-style: italic;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.submit {\n  padding: 0.8rem;\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n\nli {\n  padding: 0.3rem 2rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nli span {\n  width: 100%;\n}\n\n.completed:checked + input{\n  text-decoration: line-through;\n  color: rgba(0, 0, 0, 0.7);\n}\n\ni {\n  padding: 5px;\n  color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  font-size: 1.7rem;\n}\n\n.fa-ellipsis-vertical {\n  cursor: move;\n  width: 1rem;\n}\n\n.task-text,\n.task-text:active {\n  width: 95%;\n  padding-left: 10px;\n}\n\n.fa-trash-can {\n  display: none;\n}\n\n.fa-trash-can:hover {\n  display: block;\n}\n\n.task-text:focus ~ .fa-trash-can {\n  display: block;\n}\n\n.task-text:focus ~ .fa-ellipsis-vertical {\n  display: none;\n}\n\n.clear {\n  padding: 1.8rem 2rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.6);\n  background-color: rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  font-size: 1.7rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_completed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/completed.js */ "./src/modules/completed.js");
/* harmony import */ var _modules_eventHandle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/eventHandle.js */ "./src/modules/eventHandle.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");



var tasks = [];
(0,_modules_eventHandle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUQsQ0FBWCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlcy9jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZXMvZXZlbnRIYW5kbGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJjb25zdCBjb21wbGV0ZWQgPSAoZSwgdGFza3MpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBpZiAocGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5pZCwgMTApID09PSB0YXNrLmluZGV4KSB7XG4gICAgICAgIHRhc2suY29tcGxldGVkID0gIXRhc2suY29tcGxldGVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wbGV0ZWQ7IiwiY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAobGlzdCkgPT4ge1xuICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgbGlzdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc05hbWUgPSAndGFzayc7XG4gICAgbGkuaWQgPSBlbC5pbmRleDtcbiAgICBsaS5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29tcGxldGVkXCIgJHtlbC5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAhdHJ1ZX0+PC9pPjxpbnB1dCBjbGFzcz1cInRhc2stdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke2VsLmRlc2NyaXB0aW9ufVwiPjxpIGNsYXNzPVwiZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWxcIj48L2k+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW5cIiBpZCA9XCIke2VsLmluZGV4fVwiPjwvaT5gO1xuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMaXN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBjb21wbGV0ZWQgZnJvbSAnLi9jb21wbGV0ZWQuanMnO1xuaW1wb3J0IGNyZWF0ZUxpc3QgZnJvbSAnLi9kaXNwbGF5VGFza3MuanMnO1xuXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcbmNvbnN0IGNsYWVyUm90YXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWFycm93cy1yb3RhdGUnKTtcblxuZXhwb3J0IGNvbnN0IHNldERhdGEgPSAodGFza3MpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lucHV0RGF0YScsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuXG5jb25zdCBldmVudEhhbmRsZSA9ICh0YXNrcykgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lucHV0RGF0YScpKSB7XG4gICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnB1dERhdGEnKSk7XG4gICAgY3JlYXRlTGlzdCh0YXNrcyk7XG4gIH1cbiAgZm9ybS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICBsZXQgaW5kZXg7XG4gICAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgIGluZGV4ID0gdGFza3NbdGFza3MubGVuZ3RoIC0gMV0uaW5kZXggKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIGNvbnN0IHRhc2sgPSBhZGRUYXNrLnZhbHVlO1xuICAgIHRhc2tzLnB1c2goe1xuICAgICAgZGVzY3JpcHRpb246IHRhc2ssXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgaW5kZXgsXG4gICAgfSk7XG4gICAgY3JlYXRlTGlzdCh0YXNrcyk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIHNldERhdGEodGFza3MpO1xuICB9O1xuXG4gIHRvZG9MaXN0Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdmYS1zb2xpZCBmYS10cmFzaC1jYW4nKSB7XG4gICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gcGFyc2VJbnQoZS50YXJnZXQuaWQsIDEwKSk7XG4gICAgICB0YXNrcy5tYXAoKHRhc2ssIGkpID0+IHRhc2suaW5kZXggPSBpKTtcbiAgICAgIGNyZWF0ZUxpc3QodGFza3MpO1xuICAgICAgc2V0RGF0YSh0YXNrcyk7XG4gICAgfVxuICB9O1xuXG4gIHRvZG9MaXN0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAndGFzay10ZXh0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmIChwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkLCAxMCkgPT09IHRhc2suaW5kZXgpIHtcbiAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY3JlYXRlTGlzdCh0YXNrcyk7XG4gICAgICBzZXREYXRhKHRhc2tzKTtcbiAgICB9XG4gIH07XG5cbiAgdG9kb0xpc3Qub25jaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbXBsZXRlZChlLCB0YXNrcyk7XG4gICAgc2V0RGF0YSh0YXNrcyk7XG4gIH07XG5cbiAgY2xlYXIub25jbGljayA9ICgpID0+IHtcbiAgICB0YXNrcy5zcGxpY2UoMCwgdGFza3MubGVuZ3RoKTtcbiAgICBjcmVhdGVMaXN0KHRhc2tzKTtcbiAgICBzZXREYXRhKHRhc2tzKTtcbiAgfTtcblxuICBjbGFlclJvdGF0ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNsYWVyUm90YXRlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoOTBkZWcpJztcbiAgICB0YXNrcy5zcGxpY2UoMCwgdGFza3MubGVuZ3RoKTtcbiAgICBjcmVhdGVMaXN0KHRhc2tzKTtcbiAgICBzZXREYXRhKHRhc2tzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50SGFuZGxlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODV2dztcXG4gIG1heC13aWR0aDogOTByZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJveC1zaGFkb3c6IDhweCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIHBhZGRpbmc6IDEuOHJlbSAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mYS1hcnJvd3Mtcm90YXRlOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoXFxcIjE4MGRlZ1xcXCIpO1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgcGFkZGluZzogMC4zcmVtIDJyZW0gMC4zcmVtIDFyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LFxcbmlucHV0OmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMS41cmVtIDA7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmFkZC10YXNrOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uc3VibWl0IHtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbmxpIHtcXG4gIHBhZGRpbmc6IDAuM3JlbSAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5saSBzcGFuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29tcGxldGVkOmNoZWNrZWQgKyBpbnB1dCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbmkge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi50YXNrLXRleHQsXFxuLnRhc2stdGV4dDphY3RpdmUge1xcbiAgd2lkdGg6IDk1JTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmZhLXRyYXNoLWNhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmEtdHJhc2gtY2FuOmhvdmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay10ZXh0OmZvY3VzIH4gLmZhLXRyYXNoLWNhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stdGV4dDpmb2N1cyB+IC5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgcGFkZGluZzogMS44cmVtIDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDg1dnc7XFxuICBtYXgtd2lkdGg6IDkwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3gtc2hhZG93OiA4cHggNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBwYWRkaW5nOiAxLjhyZW0gMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZmEtYXJyb3dzLXJvdGF0ZTphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKCcxODBkZWcnKTtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIHBhZGRpbmc6IDAuM3JlbSAycmVtIDAuM3JlbSAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCxcXG5pbnB1dDphY3RpdmUge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5hZGQtdGFzazo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnN1Ym1pdCB7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5saSB7XFxuICBwYWRkaW5nOiAwLjNyZW0gMnJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubGkgc3BhbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbXBsZXRlZDpjaGVja2VkICsgaW5wdXR7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbmkge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZmEtZWxsaXBzaXMtdmVydGljYWwge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbi50YXNrLXRleHQsXFxuLnRhc2stdGV4dDphY3RpdmUge1xcbiAgd2lkdGg6IDk1JTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmZhLXRyYXNoLWNhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZmEtdHJhc2gtY2FuOmhvdmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay10ZXh0OmZvY3VzIH4gLmZhLXRyYXNoLWNhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stdGV4dDpmb2N1cyB+IC5mYS1lbGxpcHNpcy12ZXJ0aWNhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgcGFkZGluZzogMS44cmVtIDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb21wbGV0ZWQgZnJvbSAnLi9tb2R1bGVzL2NvbXBsZXRlZC5qcyc7XG5pbXBvcnQgZXZlbnRIYW5kbGUgZnJvbSAnLi9tb2R1bGVzL2V2ZW50SGFuZGxlLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuY29uc3QgdGFza3MgPSBbXTtcbmV2ZW50SGFuZGxlKHRhc2tzKTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjb21wbGV0ZWQiLCJlIiwidGFza3MiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ0YXNrIiwicGFyc2VJbnQiLCJwYXJlbnROb2RlIiwiaW5kZXgiLCJ0b2RvTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUxpc3QiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiZWwiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJkZXNjcmlwdGlvbiIsImFwcGVuZENoaWxkIiwiZm9ybSIsImFkZFRhc2siLCJnZXRFbGVtZW50QnlJZCIsImNsZWFyIiwiY2xhZXJSb3RhdGUiLCJzZXREYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImV2ZW50SGFuZGxlIiwiZ2V0SXRlbSIsInBhcnNlIiwib25zdWJtaXQiLCJ2YWx1ZSIsInJlc2V0Iiwib25jbGljayIsImZpbHRlciIsIm9uY2hhbmdlIiwic3BsaWNlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9