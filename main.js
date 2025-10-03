/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/weather/idle.webp */ \"./src/img/weather/idle.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: inherit;\n}\n\ninput {\n  border: none;\n  outline: none;\n  background: transparent;\n  font: inherit;\n}\n\nbody {\n  color: #ffffff;\n  text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  margin: 0;\n  height: 100vh;\n  overflow: hidden;\n}\n\na {\n  color: #ffffff;\n}\n\n#fade-layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #15203a;\n  opacity: 0;\n  z-index: 5;\n  transition: opacity 1s ease;\n  pointer-events: none;\n}\n\n#fade-layer.fade {\n  opacity: 1;\n}\n\ninput {\n  margin: 0.5rem;\n  padding: 0.375rem;\n  height: 3rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  border: 2px solid #f5f5f5;\n  border-radius: 20px;\n  color: #ffffff;\n  font-size: 1.125rem;\n}\n\nbutton {\n  margin: 0.5rem;\n  padding: 0.375rem;\n  height: 3rem;\n  background-color: #15203a;\n  border: 2px solid #f5f5f5;\n  border-radius: 20px;\n  color: #ffffff;\n  font-size: 1.125rem;\n  cursor: pointer;\n  transition: 0.1s;\n}\n\nbutton:hover {\n  background-color: #1e2e53;\n}\n\n.clicked {\n    scale: 0.95;\n}\n\n#container {\n  background-color:rgba(0, 0, 0, 0.3);\n  min-height: 100vh;\n  min-width: 100vw;\n  display: grid;\n  grid-template-rows: 6rem 1fr 4rem 1fr 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  grid-template-areas: \n    'address address address'\n    'location current additional' \n    'search search search'\n    'weekly weekly weekly'\n    'credits credits credits';\n}\n\n#location {\n  z-index: 2;\n  padding: 1rem;\n  grid-area: location;\n  display: none;\n  grid-template-rows: 1fr 2rem;\n  grid-template-columns: 1fr;\n  grid-template-areas: 'svg-temp' 'conditions';\n}\n\n#resolvedAddress {\n  grid-area: address;\n  font-size: 5rem;\n}\n  \n#svg-temp{\n  align-self: end;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 1rem;\n}\n\n#temps {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.125rem;\n}\n\n#temp {\n  font-size: 4rem;\n}\n\n#conditions {\n  align-self: end;\n  grid-area: conditions;\n  font-size: 2rem;\n}\n\n#current-condition {\n  z-index: 2;\n  grid-area: current;\n  font-size: 2rem;\n  display: none;\n  flex-direction: column;\n  justify-content: end;\n  gap: 0.6rem;\n}\n\n#additional-information {\n  z-index: 2;\n  grid-area: additional;\n  padding: 0.5rem;\n  font-size: 2rem;\n  display: none;\n  flex-direction: column;\n  justify-content: end;\n  gap: 0.6rem;\n}\n\n#center-search {\n  z-index: 8;\n  grid-area: search;\n  background: rgba(0, 0, 0, 0.3);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n#center-search::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0) 0%,       \n    rgba(0, 0, 0, 0.3) 20%,   \n    rgba(0, 0, 0, 0.3) 80%,   \n    rgba(0, 0, 0, 0) 100%     \n  );\n  pointer-events: none;\n}\n\n#weekly-overview {\n  z-index: 2;\n  grid-area: weekly;\n  display: none;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n}\n\n.day {\n  padding: 0.6rem;\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n}\n.weekday {\n  font-size: 2rem;\n}\n\n.date {\n  font-size: 1.125rem;\n}\n\n.day-svg-temp {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 1rem;\n}\n\n.day-temp {\n  font-size: 2rem;\n}\n\n.day-conditions{\n  font-size: 1.25rem;\n}\n\n#progress-container {\n  position: relative;\n  height: 2rem;\n}\n\n#progress-bar {\n  position: relative;\n  background-color: #ffffff;\n  height: 1.5rem;\n  overflow: hidden;\n  border-radius: 15px;\n}\n\n#progress-current {\n  background-color: yellow;\n  height: 100%;\n  width: 0%;\n}\n\n#difference {\n  font-size: 1rem;\n  color: #15203a;\n  text-shadow: 2px 2px 2px #B6AB9C;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n#sun {\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n}\n\n#sunrise-sunset {\n  display: flex;\n  justify-content: space-between;\n}\n\n#credits {\n  padding-right: 2rem;\n  grid-area: credits;\n  text-align: end;\n  font-size: 1rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/img/icons sync \\.svg$":
/*!*************************************************!*\
  !*** ./src/img/icons/ sync nonrecursive \.svg$ ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var map = {\n\t\"./clear-day.svg\": \"./src/img/icons/clear-day.svg\",\n\t\"./clear-night.svg\": \"./src/img/icons/clear-night.svg\",\n\t\"./cloudy.svg\": \"./src/img/icons/cloudy.svg\",\n\t\"./fog.svg\": \"./src/img/icons/fog.svg\",\n\t\"./hail.svg\": \"./src/img/icons/hail.svg\",\n\t\"./partly-cloudy-day.svg\": \"./src/img/icons/partly-cloudy-day.svg\",\n\t\"./partly-cloudy-night.svg\": \"./src/img/icons/partly-cloudy-night.svg\",\n\t\"./rain-snow-showers-day.svg\": \"./src/img/icons/rain-snow-showers-day.svg\",\n\t\"./rain-snow-showers-night.svg\": \"./src/img/icons/rain-snow-showers-night.svg\",\n\t\"./rain-snow.svg\": \"./src/img/icons/rain-snow.svg\",\n\t\"./rain.svg\": \"./src/img/icons/rain.svg\",\n\t\"./showers-day.svg\": \"./src/img/icons/showers-day.svg\",\n\t\"./showers-night.svg\": \"./src/img/icons/showers-night.svg\",\n\t\"./sleet.svg\": \"./src/img/icons/sleet.svg\",\n\t\"./snow-showers-day.svg\": \"./src/img/icons/snow-showers-day.svg\",\n\t\"./snow-showers-night.svg\": \"./src/img/icons/snow-showers-night.svg\",\n\t\"./snow.svg\": \"./src/img/icons/snow.svg\",\n\t\"./thunder-rain.svg\": \"./src/img/icons/thunder-rain.svg\",\n\t\"./thunder-showers-day.svg\": \"./src/img/icons/thunder-showers-day.svg\",\n\t\"./thunder-showers-night.svg\": \"./src/img/icons/thunder-showers-night.svg\",\n\t\"./thunder.svg\": \"./src/img/icons/thunder.svg\",\n\t\"./wind.svg\": \"./src/img/icons/wind.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/icons sync \\\\.svg$\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/_sync_nonrecursive_\\.svg$?\n}");

/***/ }),

/***/ "./src/img/icons/clear-day.svg":
/*!*************************************!*\
  !*** ./src/img/icons/clear-day.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 57.47 57.47\\\"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-1{stroke-linecap:round;}</style></defs><title>clear-dayAsset 68</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"8.55\\\" y1=\\\"28.73\\\" x2=\\\"1.5\\\" y2=\\\"28.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"14.15\\\" y1=\\\"42.85\\\" x2=\\\"9.07\\\" y2=\\\"47.75\\\"/><line class=\\\"cls-1\\\" x1=\\\"14.75\\\" y1=\\\"14.28\\\" x2=\\\"9.82\\\" y2=\\\"9.24\\\"/><line class=\\\"cls-1\\\" x1=\\\"10.03\\\" y1=\\\"36.46\\\" x2=\\\"3.51\\\" y2=\\\"39.14\\\"/><line class=\\\"cls-1\\\" x1=\\\"21.11\\\" y1=\\\"10.12\\\" x2=\\\"18.39\\\" y2=\\\"3.62\\\"/><line class=\\\"cls-1\\\" x1=\\\"20.57\\\" y1=\\\"47.38\\\" x2=\\\"17.75\\\" y2=\\\"53.85\\\"/><line class=\\\"cls-1\\\" x1=\\\"10.25\\\" y1=\\\"20.74\\\" x2=\\\"3.78\\\" y2=\\\"17.95\\\"/><path class=\\\"cls-2\\\" d=\\\"M28.7,43.71h0a14.86,14.86,0,1,0,0-29.71h.05a14.86,14.86,0,1,0,0,29.71H28.7Z\\\"/><line class=\\\"cls-1\\\" x1=\\\"48.92\\\" y1=\\\"28.73\\\" x2=\\\"55.97\\\" y2=\\\"28.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"28.73\\\" y1=\\\"8.55\\\" x2=\\\"28.73\\\" y2=\\\"1.5\\\"/><line class=\\\"cls-1\\\" x1=\\\"28.73\\\" y1=\\\"48.92\\\" x2=\\\"28.73\\\" y2=\\\"55.97\\\"/><line class=\\\"cls-1\\\" x1=\\\"43.32\\\" y1=\\\"42.85\\\" x2=\\\"48.39\\\" y2=\\\"47.75\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.72\\\" y1=\\\"14.28\\\" x2=\\\"47.65\\\" y2=\\\"9.24\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.44\\\" y1=\\\"36.46\\\" x2=\\\"53.96\\\" y2=\\\"39.14\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.36\\\" y1=\\\"10.12\\\" x2=\\\"39.08\\\" y2=\\\"3.62\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.89\\\" y1=\\\"47.38\\\" x2=\\\"39.72\\\" y2=\\\"53.85\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.21\\\" y1=\\\"20.74\\\" x2=\\\"53.69\\\" y2=\\\"17.95\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/clear-day.svg?\n}");

/***/ }),

/***/ "./src/img/icons/clear-night.svg":
/*!***************************************!*\
  !*** ./src/img/icons/clear-night.svg ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 39.11 40.96\\\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title>clear-nightAsset 69</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M30.56,34.05h0a13.57,13.57,0,1,1,0-27.13,13.79,13.79,0,0,1,3.71.52,19,19,0,1,0-13.79,32h0a18.94,18.94,0,0,0,13.78-5.94A14.15,14.15,0,0,1,30.56,34.05Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/clear-night.svg?\n}");

/***/ }),

/***/ "./src/img/icons/cloudy.svg":
/*!**********************************!*\
  !*** ./src/img/icons/cloudy.svg ***!
  \**********************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 34.32\\\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title>cloudyAsset 72</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/cloudy.svg?\n}");

/***/ }),

/***/ "./src/img/icons/fog.svg":
/*!*******************************!*\
  !*** ./src/img/icons/fog.svg ***!
  \*******************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 58.99\\\"><defs><style>.cls-1,.cls-3{fill:none;stroke-width:3px;}.cls-1,.cls-2,.cls-3{stroke:#231f20;stroke-miterlimit:10;}.cls-2{fill:#231f20;}.cls-3{stroke-linecap:round;}</style></defs><title>4Asset 229FOG</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path class=\\\"cls-2\\\" d=\\\"M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z\\\"/><line class=\\\"cls-3\\\" x1=\\\"29.06\\\" y1=\\\"40.28\\\" x2=\\\"86\\\" y2=\\\"40.28\\\"/><line class=\\\"cls-3\\\" x1=\\\"12.13\\\" y1=\\\"40.28\\\" x2=\\\"23.52\\\" y2=\\\"40.28\\\"/><line class=\\\"cls-3\\\" x1=\\\"69.08\\\" y1=\\\"48.79\\\" x2=\\\"12.13\\\" y2=\\\"48.79\\\"/><line class=\\\"cls-3\\\" x1=\\\"86\\\" y1=\\\"48.79\\\" x2=\\\"74.62\\\" y2=\\\"48.79\\\"/><line class=\\\"cls-3\\\" x1=\\\"32\\\" y1=\\\"57.49\\\" x2=\\\"20.62\\\" y2=\\\"57.49\\\"/><line class=\\\"cls-3\\\" x1=\\\"76.22\\\" y1=\\\"57.49\\\" x2=\\\"70.83\\\" y2=\\\"57.49\\\"/><line class=\\\"cls-3\\\" x1=\\\"63.13\\\" y1=\\\"57.4\\\" x2=\\\"39.51\\\" y2=\\\"57.4\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/fog.svg?\n}");

/***/ }),

/***/ "./src/img/icons/hail.svg":
/*!********************************!*\
  !*** ./src/img/icons/hail.svg ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 66.61\\\"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-width:3px;}.cls-2{stroke-width:2px;}</style></defs><title>hailAsset 86</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><polygon class=\\\"cls-1\\\" points=\\\"26.95 40.13 30.52 40.16 31.66 43.57 32.75 47.02 29.87 49.16 26.91 51.27 23.94 49.16 21.07 47.02 22.17 43.52 23.3 40.16 26.95 40.13\\\"/><polygon class=\\\"cls-1\\\" points=\\\"48.91 40.13 52.48 40.16 53.62 43.57 54.72 47.02 51.83 49.16 48.87 51.27 45.91 49.16 43.03 47.02 44.13 43.52 45.26 40.16 48.91 40.13\\\"/><polygon class=\\\"cls-1\\\" points=\\\"70.87 40.13 74.44 40.16 75.58 43.57 76.68 47.02 73.79 49.16 70.83 51.27 67.87 49.16 64.99 47.02 66.09 43.52 67.22 40.16 70.87 40.13\\\"/><polygon class=\\\"cls-2\\\" points=\\\"33.28 57.46 35.82 57.48 36.63 59.91 37.41 62.37 35.35 63.89 33.25 65.39 31.14 63.89 29.09 62.37 29.88 59.87 30.68 57.48 33.28 57.46\\\"/><polygon class=\\\"cls-2\\\" points=\\\"48.9 57.46 51.44 57.48 52.25 59.91 53.03 62.37 50.98 63.89 48.87 65.39 46.76 63.89 44.71 62.37 45.5 59.87 46.3 57.48 48.9 57.46\\\"/><polygon class=\\\"cls-2\\\" points=\\\"64.52 57.46 67.06 57.48 67.88 59.91 68.65 62.37 66.6 63.89 64.49 65.39 62.38 63.89 60.34 62.37 61.12 59.87 61.92 57.48 64.52 57.46\\\"/><path class=\\\"cls-1\\\" d=\\\"M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/hail.svg?\n}");

/***/ }),

/***/ "./src/img/icons/partly-cloudy-day.svg":
/*!*********************************************!*\
  !*** ./src/img/icons/partly-cloudy-day.svg ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 106.58 60.63\\\"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-width:3px;}.cls-2{stroke-linecap:round;}.cls-2,.cls-3{stroke-width:2px;}</style></defs><title>partly-cloudy-dayAsset 70</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M59.26,58H97.15a15.05,15.05,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.11,15.11,0,0,0-14.88-9.09A14.91,14.91,0,0,0,52,36.23c-1.62,1.07-2.55.86-3.63-.78a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45C2.29,45.08,1.48,57.75,1.5,58H39.61\\\"/><path d=\\\"M49.24,60.63a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,60.63Z\\\"/><line class=\\\"cls-2\\\" x1=\\\"73.2\\\" y1=\\\"19.6\\\" x2=\\\"68.39\\\" y2=\\\"19.6\\\"/><line class=\\\"cls-2\\\" x1=\\\"77.02\\\" y1=\\\"29.24\\\" x2=\\\"73.56\\\" y2=\\\"32.58\\\"/><line class=\\\"cls-2\\\" x1=\\\"77.43\\\" y1=\\\"9.73\\\" x2=\\\"74.07\\\" y2=\\\"6.29\\\"/><line class=\\\"cls-2\\\" x1=\\\"74.21\\\" y1=\\\"24.87\\\" x2=\\\"69.76\\\" y2=\\\"26.7\\\"/><line class=\\\"cls-2\\\" x1=\\\"81.78\\\" y1=\\\"6.89\\\" x2=\\\"79.92\\\" y2=\\\"2.45\\\"/><line class=\\\"cls-2\\\" x1=\\\"81.41\\\" y1=\\\"32.33\\\" x2=\\\"79.48\\\" y2=\\\"36.74\\\"/><line class=\\\"cls-2\\\" x1=\\\"74.37\\\" y1=\\\"14.14\\\" x2=\\\"69.94\\\" y2=\\\"12.23\\\"/><path class=\\\"cls-3\\\" d=\\\"M87,29.82h0A10.15,10.15,0,1,0,87,9.53h0a10.15,10.15,0,1,0,0,20.29h0Z\\\"/><line class=\\\"cls-2\\\" x1=\\\"100.76\\\" y1=\\\"19.6\\\" x2=\\\"105.58\\\" y2=\\\"19.6\\\"/><line class=\\\"cls-2\\\" x1=\\\"86.98\\\" y1=\\\"5.82\\\" x2=\\\"86.98\\\" y2=\\\"1\\\"/><line class=\\\"cls-2\\\" x1=\\\"86.98\\\" y1=\\\"33.38\\\" x2=\\\"86.98\\\" y2=\\\"38.19\\\"/><line class=\\\"cls-2\\\" x1=\\\"96.94\\\" y1=\\\"29.24\\\" x2=\\\"100.41\\\" y2=\\\"32.58\\\"/><line class=\\\"cls-2\\\" x1=\\\"96.53\\\" y1=\\\"9.73\\\" x2=\\\"99.9\\\" y2=\\\"6.29\\\"/><line class=\\\"cls-2\\\" x1=\\\"99.76\\\" y1=\\\"24.87\\\" x2=\\\"104.21\\\" y2=\\\"26.7\\\"/><line class=\\\"cls-2\\\" x1=\\\"92.19\\\" y1=\\\"6.89\\\" x2=\\\"94.05\\\" y2=\\\"2.45\\\"/><line class=\\\"cls-2\\\" x1=\\\"92.56\\\" y1=\\\"32.33\\\" x2=\\\"94.49\\\" y2=\\\"36.74\\\"/><line class=\\\"cls-2\\\" x1=\\\"99.6\\\" y1=\\\"14.14\\\" x2=\\\"104.03\\\" y2=\\\"12.23\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/partly-cloudy-day.svg?\n}");

/***/ }),

/***/ "./src/img/icons/partly-cloudy-night.svg":
/*!***********************************************!*\
  !*** ./src/img/icons/partly-cloudy-night.svg ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 102.12 54.41\\\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title>partly-cloudy-nightAsset 71</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/partly-cloudy-night.svg?\n}");

/***/ }),

/***/ "./src/img/icons/rain-snow-showers-day.svg":
/*!*************************************************!*\
  !*** ./src/img/icons/rain-snow-showers-day.svg ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 116.8 102.52\\\"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231f20;}.cls-1,.cls-4{stroke-linecap:round;}.cls-3,.cls-4{stroke:#000;stroke-width:3px;}</style></defs><title>rain-snow-showers-dayAsset 78</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"47.46\\\" y1=\\\"72.57\\\" x2=\\\"48.71\\\" y2=\\\"71.8\\\"/><line class=\\\"cls-1\\\" x1=\\\"48.71\\\" y1=\\\"83.65\\\" x2=\\\"47.49\\\" y2=\\\"82.94\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"77.74\\\" x2=\\\"52.11\\\" y2=\\\"82.35\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.55 81.04 51.19 81.4 50.85 82.82\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.18\\\" y1=\\\"73.07\\\" x2=\\\"47.47\\\" y2=\\\"77.81\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.81 72.7 51.17 74.06 52.59 74.4\\\"/><line class=\\\"cls-1\\\" x1=\\\"54.12\\\" y1=\\\"77.74\\\" x2=\\\"47.49\\\" y2=\\\"77.74\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.41 76.51 52.7 77.73 53.47 78.97\\\"/><line class=\\\"cls-2\\\" x1=\\\"47.49\\\" y1=\\\"84.02\\\" x2=\\\"47.49\\\" y2=\\\"71.15\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"84.26\\\" x2=\\\"47.49\\\" y2=\\\"71.15\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.5\\\" y1=\\\"82.85\\\" x2=\\\"46.26\\\" y2=\\\"83.61\\\"/><line class=\\\"cls-1\\\" x1=\\\"46.26\\\" y1=\\\"71.76\\\" x2=\\\"47.47\\\" y2=\\\"72.47\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.47\\\" y1=\\\"77.68\\\" x2=\\\"42.85\\\" y2=\\\"73.07\\\"/><polyline class=\\\"cls-1\\\" points=\\\"42.42 74.37 43.77 74.02 44.11 72.6\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.79\\\" y1=\\\"82.35\\\" x2=\\\"47.5\\\" y2=\\\"77.61\\\"/><polyline class=\\\"cls-1\\\" points=\\\"44.15 82.71 43.8 81.35 42.38 81.02\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.85\\\" y1=\\\"77.68\\\" x2=\\\"47.47\\\" y2=\\\"77.68\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.56 78.9 42.27 77.69 41.5 76.45\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.34\\\" y1=\\\"89.76\\\" x2=\\\"57.58\\\" y2=\\\"88.99\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.58\\\" y1=\\\"100.84\\\" x2=\\\"56.37\\\" y2=\\\"100.13\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.36\\\" y1=\\\"94.93\\\" x2=\\\"60.99\\\" y2=\\\"99.54\\\"/><polyline class=\\\"cls-1\\\" points=\\\"61.42 98.23 60.06 98.59 59.73 100.01\\\"/><line class=\\\"cls-1\\\" x1=\\\"61.05\\\" y1=\\\"90.26\\\" x2=\\\"56.34\\\" y2=\\\"95\\\"/><polyline class=\\\"cls-1\\\" points=\\\"59.69 89.89 60.04 91.25 61.46 91.59\\\"/><line class=\\\"cls-1\\\" x1=\\\"62.99\\\" y1=\\\"94.93\\\" x2=\\\"56.36\\\" y2=\\\"94.93\\\"/><polyline class=\\\"cls-1\\\" points=\\\"62.28 93.7 61.57 94.92 62.34 96.16\\\"/><line class=\\\"cls-2\\\" x1=\\\"56.36\\\" y1=\\\"101.21\\\" x2=\\\"56.36\\\" y2=\\\"88.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.36\\\" y1=\\\"101.46\\\" x2=\\\"56.36\\\" y2=\\\"88.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.37\\\" y1=\\\"100.04\\\" x2=\\\"55.13\\\" y2=\\\"100.81\\\"/><line class=\\\"cls-1\\\" x1=\\\"55.13\\\" y1=\\\"88.96\\\" x2=\\\"56.34\\\" y2=\\\"89.66\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.35\\\" y1=\\\"94.87\\\" x2=\\\"51.72\\\" y2=\\\"90.26\\\"/><polyline class=\\\"cls-1\\\" points=\\\"51.29 91.56 52.65 91.21 52.98 89.79\\\"/><line class=\\\"cls-1\\\" x1=\\\"51.66\\\" y1=\\\"99.54\\\" x2=\\\"56.37\\\" y2=\\\"94.8\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.02 99.9 52.67 98.54 51.25 98.21\\\"/><line class=\\\"cls-1\\\" x1=\\\"49.72\\\" y1=\\\"94.87\\\" x2=\\\"56.35\\\" y2=\\\"94.87\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.43 96.09 51.14 94.88 50.37 93.64\\\"/><path class=\\\"cls-3\\\" d=\\\"M28.67,72.36c-2.47,1.51-4.71,2.78-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C28.71,77.73,28.67,75.25,28.67,72.36Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M71.91,72.36c-2.48,1.51-4.72,2.78-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C72,77.73,71.91,75.25,71.91,72.36Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M36.67,88.74C34.2,90.25,32,91.52,29.82,93a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C36.71,94.11,36.67,91.63,36.67,88.74Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M59.26,62.32H97.15a15.07,15.07,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,40.61c-1.62,1.06-2.55.86-3.63-.79a16.43,16.43,0,0,0-16.84-7.33c-7,1.45-12.22,6.59-13.29,13.51-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.68-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,65a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,1,1,5.41,0A2.65,2.65,0,0,1,49.24,65Z\\\"/><line class=\\\"cls-4\\\" x1=\\\"69.07\\\" y1=\\\"28.05\\\" x2=\\\"62.2\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"75.11\\\" y1=\\\"13.96\\\" x2=\\\"70.3\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"81.32\\\" y1=\\\"9.91\\\" x2=\\\"78.66\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-4\\\" x1=\\\"70.73\\\" y1=\\\"20.26\\\" x2=\\\"64.42\\\" y2=\\\"17.54\\\"/><path class=\\\"cls-3\\\" d=\\\"M88.72,42.66h0a14.49,14.49,0,0,0,0-29h0a14.49,14.49,0,1,0,0,29h0Z\\\"/><line class=\\\"cls-4\\\" x1=\\\"108.43\\\" y1=\\\"28.05\\\" x2=\\\"115.3\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"88.75\\\" y1=\\\"8.38\\\" x2=\\\"88.75\\\" y2=\\\"1.5\\\"/><line class=\\\"cls-4\\\" x1=\\\"102.97\\\" y1=\\\"41.82\\\" x2=\\\"107.92\\\" y2=\\\"46.59\\\"/><line class=\\\"cls-4\\\" x1=\\\"102.39\\\" y1=\\\"13.96\\\" x2=\\\"107.2\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"106.99\\\" y1=\\\"35.59\\\" x2=\\\"113.35\\\" y2=\\\"38.2\\\"/><line class=\\\"cls-4\\\" x1=\\\"96.18\\\" y1=\\\"9.91\\\" x2=\\\"98.84\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-4\\\" x1=\\\"106.77\\\" y1=\\\"20.26\\\" x2=\\\"113.08\\\" y2=\\\"17.54\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/rain-snow-showers-day.svg?\n}");

/***/ }),

/***/ "./src/img/icons/rain-snow-showers-night.svg":
/*!***************************************************!*\
  !*** ./src/img/icons/rain-snow-showers-night.svg ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 102.12 92.94\\\"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231f20;}.cls-1{stroke-linecap:round;}.cls-3{stroke:#000;stroke-width:3px;}</style></defs><title>rain-snow-showers-nightAsset 79</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"47.46\\\" y1=\\\"62.99\\\" x2=\\\"48.71\\\" y2=\\\"62.23\\\"/><line class=\\\"cls-1\\\" x1=\\\"48.71\\\" y1=\\\"74.08\\\" x2=\\\"47.49\\\" y2=\\\"73.37\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"68.16\\\" x2=\\\"52.11\\\" y2=\\\"72.77\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.55 71.47 51.19 71.83 50.85 73.25\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.18\\\" y1=\\\"63.5\\\" x2=\\\"47.47\\\" y2=\\\"68.23\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.81 63.13 51.17 64.49 52.59 64.83\\\"/><line class=\\\"cls-1\\\" x1=\\\"54.12\\\" y1=\\\"68.16\\\" x2=\\\"47.49\\\" y2=\\\"68.16\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.41 66.94 52.7 68.15 53.47 69.39\\\"/><line class=\\\"cls-2\\\" x1=\\\"47.49\\\" y1=\\\"74.45\\\" x2=\\\"47.49\\\" y2=\\\"61.58\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"74.69\\\" x2=\\\"47.49\\\" y2=\\\"61.58\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.5\\\" y1=\\\"73.28\\\" x2=\\\"46.26\\\" y2=\\\"74.04\\\"/><line class=\\\"cls-1\\\" x1=\\\"46.26\\\" y1=\\\"62.19\\\" x2=\\\"47.47\\\" y2=\\\"62.9\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.47\\\" y1=\\\"68.11\\\" x2=\\\"42.85\\\" y2=\\\"63.5\\\"/><polyline class=\\\"cls-1\\\" points=\\\"42.42 64.8 43.77 64.44 44.11 63.02\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.79\\\" y1=\\\"72.77\\\" x2=\\\"47.5\\\" y2=\\\"68.04\\\"/><polyline class=\\\"cls-1\\\" points=\\\"44.15 73.14 43.8 71.78 42.38 71.44\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.85\\\" y1=\\\"68.11\\\" x2=\\\"47.47\\\" y2=\\\"68.11\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.56 69.33 42.27 68.12 41.5 66.88\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.34\\\" y1=\\\"80.19\\\" x2=\\\"57.58\\\" y2=\\\"79.42\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.58\\\" y1=\\\"91.27\\\" x2=\\\"56.37\\\" y2=\\\"90.56\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.36\\\" y1=\\\"85.36\\\" x2=\\\"60.99\\\" y2=\\\"89.97\\\"/><polyline class=\\\"cls-1\\\" points=\\\"61.42 88.66 60.06 89.02 59.73 90.44\\\"/><line class=\\\"cls-1\\\" x1=\\\"61.05\\\" y1=\\\"80.69\\\" x2=\\\"56.34\\\" y2=\\\"85.43\\\"/><polyline class=\\\"cls-1\\\" points=\\\"59.69 80.32 60.04 81.68 61.46 82.02\\\"/><line class=\\\"cls-1\\\" x1=\\\"62.99\\\" y1=\\\"85.36\\\" x2=\\\"56.36\\\" y2=\\\"85.36\\\"/><polyline class=\\\"cls-1\\\" points=\\\"62.28 84.13 61.57 85.34 62.34 86.59\\\"/><line class=\\\"cls-2\\\" x1=\\\"56.36\\\" y1=\\\"91.64\\\" x2=\\\"56.36\\\" y2=\\\"78.77\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.36\\\" y1=\\\"91.88\\\" x2=\\\"56.36\\\" y2=\\\"78.77\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.37\\\" y1=\\\"90.47\\\" x2=\\\"55.13\\\" y2=\\\"91.23\\\"/><line class=\\\"cls-1\\\" x1=\\\"55.13\\\" y1=\\\"79.38\\\" x2=\\\"56.34\\\" y2=\\\"80.09\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.35\\\" y1=\\\"85.3\\\" x2=\\\"51.72\\\" y2=\\\"80.69\\\"/><polyline class=\\\"cls-1\\\" points=\\\"51.29 81.99 52.65 81.64 52.98 80.22\\\"/><line class=\\\"cls-1\\\" x1=\\\"51.66\\\" y1=\\\"89.97\\\" x2=\\\"56.37\\\" y2=\\\"85.23\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.02 90.33 52.67 88.97 51.25 88.64\\\"/><line class=\\\"cls-1\\\" x1=\\\"49.72\\\" y1=\\\"85.3\\\" x2=\\\"56.35\\\" y2=\\\"85.3\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.43 86.52 51.14 85.31 50.37 84.07\\\"/><path class=\\\"cls-3\\\" d=\\\"M28.67,62.79C26.2,64.29,24,65.56,21.82,67a4.45,4.45,0,0,0,3.37,8,4.53,4.53,0,0,0,3.47-4.36C28.71,68.15,28.67,65.68,28.67,62.79Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M71.91,62.79c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.51,4.51,0,0,0,3.47-4.36C72,68.15,71.91,65.68,71.91,62.79Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M36.67,79.17C34.2,80.68,32,82,29.82,83.37A4.41,4.41,0,1,0,36.66,87C36.71,84.54,36.67,82.06,36.67,79.17Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/rain-snow-showers-night.svg?\n}");

/***/ }),

/***/ "./src/img/icons/rain-snow.svg":
/*!*************************************!*\
  !*** ./src/img/icons/rain-snow.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 70.65\\\"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231f20;}.cls-1{stroke-linecap:round;}.cls-3{stroke:#000;stroke-width:3px;}</style></defs><title>rain-snowAsset 77</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"47.46\\\" y1=\\\"40.7\\\" x2=\\\"48.71\\\" y2=\\\"39.93\\\"/><line class=\\\"cls-1\\\" x1=\\\"48.71\\\" y1=\\\"51.78\\\" x2=\\\"47.49\\\" y2=\\\"51.08\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"45.87\\\" x2=\\\"52.11\\\" y2=\\\"50.48\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.55 49.18 51.19 49.53 50.85 50.95\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.18\\\" y1=\\\"41.2\\\" x2=\\\"47.47\\\" y2=\\\"45.94\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.81 40.84 51.17 42.2 52.59 42.53\\\"/><line class=\\\"cls-1\\\" x1=\\\"54.12\\\" y1=\\\"45.87\\\" x2=\\\"47.49\\\" y2=\\\"45.87\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.41 44.65 52.7 45.86 53.47 47.1\\\"/><line class=\\\"cls-2\\\" x1=\\\"47.49\\\" y1=\\\"52.16\\\" x2=\\\"47.49\\\" y2=\\\"39.28\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"52.4\\\" x2=\\\"47.49\\\" y2=\\\"39.28\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.5\\\" y1=\\\"50.98\\\" x2=\\\"46.26\\\" y2=\\\"51.75\\\"/><line class=\\\"cls-1\\\" x1=\\\"46.26\\\" y1=\\\"39.9\\\" x2=\\\"47.47\\\" y2=\\\"40.61\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.47\\\" y1=\\\"45.81\\\" x2=\\\"42.85\\\" y2=\\\"41.2\\\"/><polyline class=\\\"cls-1\\\" points=\\\"42.42 42.51 43.77 42.15 44.11 40.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.79\\\" y1=\\\"50.48\\\" x2=\\\"47.5\\\" y2=\\\"45.74\\\"/><polyline class=\\\"cls-1\\\" points=\\\"44.15 50.84 43.8 49.49 42.38 49.15\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.85\\\" y1=\\\"45.81\\\" x2=\\\"47.47\\\" y2=\\\"45.81\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.56 47.03 42.27 45.82 41.5 44.58\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.34\\\" y1=\\\"57.89\\\" x2=\\\"57.58\\\" y2=\\\"57.13\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.58\\\" y1=\\\"68.98\\\" x2=\\\"56.37\\\" y2=\\\"68.27\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.36\\\" y1=\\\"63.06\\\" x2=\\\"60.99\\\" y2=\\\"67.67\\\"/><polyline class=\\\"cls-1\\\" points=\\\"61.42 66.37 60.06 66.72 59.73 68.14\\\"/><line class=\\\"cls-1\\\" x1=\\\"61.05\\\" y1=\\\"58.39\\\" x2=\\\"56.34\\\" y2=\\\"63.13\\\"/><polyline class=\\\"cls-1\\\" points=\\\"59.69 58.03 60.04 59.39 61.46 59.72\\\"/><line class=\\\"cls-1\\\" x1=\\\"62.99\\\" y1=\\\"63.06\\\" x2=\\\"56.36\\\" y2=\\\"63.06\\\"/><polyline class=\\\"cls-1\\\" points=\\\"62.28 61.84 61.57 63.05 62.34 64.29\\\"/><line class=\\\"cls-2\\\" x1=\\\"56.36\\\" y1=\\\"69.35\\\" x2=\\\"56.36\\\" y2=\\\"56.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.36\\\" y1=\\\"69.59\\\" x2=\\\"56.36\\\" y2=\\\"56.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.37\\\" y1=\\\"68.17\\\" x2=\\\"55.13\\\" y2=\\\"68.94\\\"/><line class=\\\"cls-1\\\" x1=\\\"55.13\\\" y1=\\\"57.09\\\" x2=\\\"56.34\\\" y2=\\\"57.8\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.35\\\" y1=\\\"63\\\" x2=\\\"51.72\\\" y2=\\\"58.39\\\"/><polyline class=\\\"cls-1\\\" points=\\\"51.29 59.7 52.65 59.34 52.98 57.92\\\"/><line class=\\\"cls-1\\\" x1=\\\"51.66\\\" y1=\\\"67.67\\\" x2=\\\"56.37\\\" y2=\\\"62.93\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.02 68.04 52.67 66.68 51.25 66.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"49.72\\\" y1=\\\"63\\\" x2=\\\"56.35\\\" y2=\\\"63\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.43 64.23 51.14 63.01 50.37 61.77\\\"/><path class=\\\"cls-3\\\" d=\\\"M28.67,40.49C26.2,42,24,43.27,21.82,44.7a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C28.71,45.86,28.67,43.38,28.67,40.49Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M71.91,40.49c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C72,45.86,71.91,43.38,71.91,40.49Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M36.67,56.88c-2.47,1.5-4.71,2.77-6.85,4.2a4.41,4.41,0,1,0,6.84,3.64C36.71,62.24,36.67,59.77,36.67,56.88Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/rain-snow.svg?\n}");

/***/ }),

/***/ "./src/img/icons/rain.svg":
/*!********************************!*\
  !*** ./src/img/icons/rain.svg ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 70.44\\\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title>rainAsset 73</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M28.67,40.29c-2.47,1.5-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.53,4.53,0,0,0,3.47-4.36C28.71,45.65,28.67,43.18,28.67,40.29Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M50.29,40.29c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.54,4.54,0,0,0,3.47-4.36C50.33,45.65,50.29,43.18,50.29,40.29Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M71.91,40.29c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.51,4.51,0,0,0,3.47-4.36C72,45.65,71.91,43.18,71.91,40.29Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M36.67,56.67c-2.47,1.51-4.71,2.78-6.85,4.2a4.41,4.41,0,1,0,6.84,3.64C36.71,62,36.67,59.56,36.67,56.67Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M58.29,56.67c-2.48,1.51-4.72,2.78-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C58.33,62,58.29,59.56,58.29,56.67Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/rain.svg?\n}");

/***/ }),

/***/ "./src/img/icons/showers-day.svg":
/*!***************************************!*\
  !*** ./src/img/icons/showers-day.svg ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 116.8 101.13\\\"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-2{stroke-linecap:round;}</style></defs><title>showers-dayAsset 74</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M28.67,71c-2.47,1.51-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C28.71,76.33,28.67,73.86,28.67,71Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M50.29,71c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C50.33,76.33,50.29,73.86,50.29,71Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M71.91,71c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C72,76.33,71.91,73.86,71.91,71Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M36.67,87.35c-2.47,1.51-4.71,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C36.71,92.72,36.67,90.24,36.67,87.35Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M58.29,87.35c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C58.33,92.72,58.29,90.24,58.29,87.35Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M59.26,62.32H97.15a15.07,15.07,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,40.61c-1.62,1.06-2.55.86-3.63-.79a16.43,16.43,0,0,0-16.84-7.33c-7,1.45-12.22,6.59-13.29,13.51-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.68-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,65a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,1,1,5.41,0A2.65,2.65,0,0,1,49.24,65Z\\\"/><line class=\\\"cls-2\\\" x1=\\\"69.07\\\" y1=\\\"28.05\\\" x2=\\\"62.2\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"75.11\\\" y1=\\\"13.96\\\" x2=\\\"70.3\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"81.32\\\" y1=\\\"9.91\\\" x2=\\\"78.66\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-2\\\" x1=\\\"70.73\\\" y1=\\\"20.26\\\" x2=\\\"64.42\\\" y2=\\\"17.54\\\"/><path class=\\\"cls-1\\\" d=\\\"M88.72,42.66h0a14.49,14.49,0,0,0,0-29h0a14.49,14.49,0,1,0,0,29h0Z\\\"/><line class=\\\"cls-2\\\" x1=\\\"108.43\\\" y1=\\\"28.05\\\" x2=\\\"115.3\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"88.75\\\" y1=\\\"8.38\\\" x2=\\\"88.75\\\" y2=\\\"1.5\\\"/><line class=\\\"cls-2\\\" x1=\\\"102.97\\\" y1=\\\"41.82\\\" x2=\\\"107.92\\\" y2=\\\"46.59\\\"/><line class=\\\"cls-2\\\" x1=\\\"102.39\\\" y1=\\\"13.96\\\" x2=\\\"107.2\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"106.99\\\" y1=\\\"35.59\\\" x2=\\\"113.35\\\" y2=\\\"38.2\\\"/><line class=\\\"cls-2\\\" x1=\\\"96.18\\\" y1=\\\"9.91\\\" x2=\\\"98.84\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-2\\\" x1=\\\"106.77\\\" y1=\\\"20.26\\\" x2=\\\"113.08\\\" y2=\\\"17.54\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/showers-day.svg?\n}");

/***/ }),

/***/ "./src/img/icons/showers-night.svg":
/*!*****************************************!*\
  !*** ./src/img/icons/showers-night.svg ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 102.12 90.74\\\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title>showers-nightAsset 75</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M28.67,60.59c-2.47,1.51-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C28.71,66,28.67,63.48,28.67,60.59Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M50.29,60.59c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.53,4.53,0,0,0,3.47-4.36C50.33,66,50.29,63.48,50.29,60.59Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M71.91,60.59c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.51,4.51,0,0,0,3.47-4.36C72,66,71.91,63.48,71.91,60.59Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M36.67,77c-2.47,1.51-4.71,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C36.71,82.34,36.67,79.86,36.67,77Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M58.29,77c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C58.33,82.34,58.29,79.86,58.29,77Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/showers-night.svg?\n}");

/***/ }),

/***/ "./src/img/icons/sleet.svg":
/*!*********************************!*\
  !*** ./src/img/icons/sleet.svg ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 48.25\\\"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231f20;stroke-width:2px;}.cls-2{stroke-linecap:round;}.cls-3{stroke:#000;stroke-width:3px;}</style></defs><title>sleet Asset 76</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"49.29\\\" y1=\\\"16.34\\\" x2=\\\"49.29\\\" y2=\\\"47.25\\\"/><line class=\\\"cls-2\\\" x1=\\\"49.29\\\" y1=\\\"15.76\\\" x2=\\\"49.29\\\" y2=\\\"47.25\\\"/><line class=\\\"cls-2\\\" x1=\\\"49.27\\\" y1=\\\"19.16\\\" x2=\\\"52.25\\\" y2=\\\"17.32\\\"/><line class=\\\"cls-2\\\" x1=\\\"52.25\\\" y1=\\\"45.77\\\" x2=\\\"49.34\\\" y2=\\\"44.07\\\"/><line class=\\\"cls-2\\\" x1=\\\"49.33\\\" y1=\\\"31.57\\\" x2=\\\"60.43\\\" y2=\\\"42.64\\\"/><polyline class=\\\"cls-2\\\" points=\\\"61.48 39.51 58.22 40.37 57.41 43.78\\\"/><line class=\\\"cls-2\\\" x1=\\\"60.59\\\" y1=\\\"20.36\\\" x2=\\\"49.28\\\" y2=\\\"31.74\\\"/><polyline class=\\\"cls-2\\\" points=\\\"57.31 19.49 58.16 22.75 61.58 23.56\\\"/><line class=\\\"cls-2\\\" x1=\\\"65.24\\\" y1=\\\"31.57\\\" x2=\\\"49.33\\\" y2=\\\"31.57\\\"/><polyline class=\\\"cls-2\\\" points=\\\"63.54 28.64 61.84 31.55 63.68 34.53\\\"/><line class=\\\"cls-1\\\" x1=\\\"49.23\\\" y1=\\\"46.67\\\" x2=\\\"49.23\\\" y2=\\\"15.76\\\"/><line class=\\\"cls-2\\\" x1=\\\"49.23\\\" y1=\\\"47.25\\\" x2=\\\"49.23\\\" y2=\\\"15.76\\\"/><line class=\\\"cls-2\\\" x1=\\\"49.26\\\" y1=\\\"43.85\\\" x2=\\\"46.28\\\" y2=\\\"45.69\\\"/><line class=\\\"cls-2\\\" x1=\\\"46.28\\\" y1=\\\"17.23\\\" x2=\\\"49.19\\\" y2=\\\"18.93\\\"/><line class=\\\"cls-2\\\" x1=\\\"49.19\\\" y1=\\\"31.43\\\" x2=\\\"38.1\\\" y2=\\\"20.36\\\"/><polyline class=\\\"cls-2\\\" points=\\\"37.05 23.5 40.31 22.64 41.12 19.23\\\"/><line class=\\\"cls-2\\\" x1=\\\"37.94\\\" y1=\\\"42.64\\\" x2=\\\"49.25\\\" y2=\\\"31.27\\\"/><polyline class=\\\"cls-2\\\" points=\\\"41.22 43.52 40.36 40.26 36.95 39.45\\\"/><line class=\\\"cls-2\\\" x1=\\\"33.29\\\" y1=\\\"31.43\\\" x2=\\\"49.19\\\" y2=\\\"31.43\\\"/><polyline class=\\\"cls-2\\\" points=\\\"34.99 34.37 36.69 31.46 34.85 28.48\\\"/><path class=\\\"cls-3\\\" d=\\\"M69.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H29.61\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/sleet.svg?\n}");

/***/ }),

/***/ "./src/img/icons/snow-showers-day.svg":
/*!********************************************!*\
  !*** ./src/img/icons/snow-showers-day.svg ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 116.8 102.82\\\"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231f20;}.cls-1,.cls-4{stroke-linecap:round;}.cls-3,.cls-4{stroke:#000;stroke-width:3px;}</style></defs><title>snow-showers-dayAsset 88</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"47.46\\\" y1=\\\"73.43\\\" x2=\\\"48.71\\\" y2=\\\"72.66\\\"/><line class=\\\"cls-1\\\" x1=\\\"48.71\\\" y1=\\\"84.51\\\" x2=\\\"47.49\\\" y2=\\\"83.81\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"78.6\\\" x2=\\\"52.11\\\" y2=\\\"83.21\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.55 81.91 51.19 82.26 50.85 83.68\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.18\\\" y1=\\\"73.93\\\" x2=\\\"47.47\\\" y2=\\\"78.67\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.81 73.57 51.17 74.93 52.59 75.26\\\"/><line class=\\\"cls-1\\\" x1=\\\"54.12\\\" y1=\\\"78.6\\\" x2=\\\"47.49\\\" y2=\\\"78.6\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.41 77.38 52.7 78.59 53.47 79.83\\\"/><line class=\\\"cls-2\\\" x1=\\\"47.49\\\" y1=\\\"84.89\\\" x2=\\\"47.49\\\" y2=\\\"72.01\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"85.13\\\" x2=\\\"47.49\\\" y2=\\\"72.01\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.5\\\" y1=\\\"83.71\\\" x2=\\\"46.26\\\" y2=\\\"84.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"46.26\\\" y1=\\\"72.63\\\" x2=\\\"47.47\\\" y2=\\\"73.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.47\\\" y1=\\\"78.54\\\" x2=\\\"42.85\\\" y2=\\\"73.93\\\"/><polyline class=\\\"cls-1\\\" points=\\\"42.42 75.24 43.77 74.88 44.11 73.46\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.79\\\" y1=\\\"83.21\\\" x2=\\\"47.5\\\" y2=\\\"78.47\\\"/><polyline class=\\\"cls-1\\\" points=\\\"44.15 83.58 43.8 82.22 42.38 81.88\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.85\\\" y1=\\\"78.54\\\" x2=\\\"47.47\\\" y2=\\\"78.54\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.56 79.77 42.27 78.55 41.5 77.31\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.42\\\" y1=\\\"73.43\\\" x2=\\\"23.66\\\" y2=\\\"72.66\\\"/><line class=\\\"cls-1\\\" x1=\\\"23.66\\\" y1=\\\"84.51\\\" x2=\\\"22.45\\\" y2=\\\"83.81\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.45\\\" y1=\\\"78.6\\\" x2=\\\"27.07\\\" y2=\\\"83.21\\\"/><polyline class=\\\"cls-1\\\" points=\\\"27.51 81.91 26.15 82.26 25.81 83.68\\\"/><line class=\\\"cls-1\\\" x1=\\\"27.14\\\" y1=\\\"73.93\\\" x2=\\\"22.43\\\" y2=\\\"78.67\\\"/><polyline class=\\\"cls-1\\\" points=\\\"25.77 73.57 26.13 74.93 27.55 75.26\\\"/><line class=\\\"cls-1\\\" x1=\\\"29.07\\\" y1=\\\"78.6\\\" x2=\\\"22.45\\\" y2=\\\"78.6\\\"/><polyline class=\\\"cls-1\\\" points=\\\"28.37 77.38 27.66 78.59 28.42 79.83\\\"/><line class=\\\"cls-2\\\" x1=\\\"22.45\\\" y1=\\\"84.89\\\" x2=\\\"22.45\\\" y2=\\\"72.01\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.45\\\" y1=\\\"85.13\\\" x2=\\\"22.45\\\" y2=\\\"72.01\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.46\\\" y1=\\\"83.71\\\" x2=\\\"21.22\\\" y2=\\\"84.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"21.22\\\" y1=\\\"72.63\\\" x2=\\\"22.43\\\" y2=\\\"73.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.43\\\" y1=\\\"78.54\\\" x2=\\\"17.81\\\" y2=\\\"73.93\\\"/><polyline class=\\\"cls-1\\\" points=\\\"17.37 75.24 18.73 74.88 19.07 73.46\\\"/><line class=\\\"cls-1\\\" x1=\\\"17.74\\\" y1=\\\"83.21\\\" x2=\\\"22.45\\\" y2=\\\"78.47\\\"/><polyline class=\\\"cls-1\\\" points=\\\"19.11 83.58 18.75 82.22 17.33 81.88\\\"/><line class=\\\"cls-1\\\" x1=\\\"15.81\\\" y1=\\\"78.54\\\" x2=\\\"22.43\\\" y2=\\\"78.54\\\"/><polyline class=\\\"cls-1\\\" points=\\\"16.52 79.77 17.22 78.55 16.46 77.31\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.78\\\" y1=\\\"73.43\\\" x2=\\\"73.03\\\" y2=\\\"72.66\\\"/><line class=\\\"cls-1\\\" x1=\\\"73.03\\\" y1=\\\"84.51\\\" x2=\\\"71.81\\\" y2=\\\"83.81\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.81\\\" y1=\\\"78.6\\\" x2=\\\"76.43\\\" y2=\\\"83.21\\\"/><polyline class=\\\"cls-1\\\" points=\\\"76.87 81.91 75.51 82.26 75.17 83.68\\\"/><line class=\\\"cls-1\\\" x1=\\\"76.5\\\" y1=\\\"73.93\\\" x2=\\\"71.79\\\" y2=\\\"78.67\\\"/><polyline class=\\\"cls-1\\\" points=\\\"75.13 73.57 75.49 74.93 76.91 75.26\\\"/><line class=\\\"cls-1\\\" x1=\\\"78.44\\\" y1=\\\"78.6\\\" x2=\\\"71.81\\\" y2=\\\"78.6\\\"/><polyline class=\\\"cls-1\\\" points=\\\"77.73 77.38 77.02 78.59 77.79 79.83\\\"/><line class=\\\"cls-2\\\" x1=\\\"71.81\\\" y1=\\\"84.89\\\" x2=\\\"71.81\\\" y2=\\\"72.01\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.81\\\" y1=\\\"85.13\\\" x2=\\\"71.81\\\" y2=\\\"72.01\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.82\\\" y1=\\\"83.71\\\" x2=\\\"70.58\\\" y2=\\\"84.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"70.58\\\" y1=\\\"72.63\\\" x2=\\\"71.79\\\" y2=\\\"73.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.79\\\" y1=\\\"78.54\\\" x2=\\\"67.17\\\" y2=\\\"73.93\\\"/><polyline class=\\\"cls-1\\\" points=\\\"66.74 75.24 68.09 74.88 68.43 73.46\\\"/><line class=\\\"cls-1\\\" x1=\\\"67.11\\\" y1=\\\"83.21\\\" x2=\\\"71.82\\\" y2=\\\"78.47\\\"/><polyline class=\\\"cls-1\\\" points=\\\"68.47 83.58 68.11 82.22 66.69 81.88\\\"/><line class=\\\"cls-1\\\" x1=\\\"65.17\\\" y1=\\\"78.54\\\" x2=\\\"71.79\\\" y2=\\\"78.54\\\"/><polyline class=\\\"cls-1\\\" points=\\\"65.88 79.77 66.58 78.55 65.82 77.31\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.34\\\" y1=\\\"90.62\\\" x2=\\\"58.58\\\" y2=\\\"89.86\\\"/><line class=\\\"cls-1\\\" x1=\\\"58.58\\\" y1=\\\"101.71\\\" x2=\\\"57.37\\\" y2=\\\"101\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.36\\\" y1=\\\"95.79\\\" x2=\\\"61.99\\\" y2=\\\"100.4\\\"/><polyline class=\\\"cls-1\\\" points=\\\"62.42 99.1 61.06 99.45 60.73 100.87\\\"/><line class=\\\"cls-1\\\" x1=\\\"62.05\\\" y1=\\\"91.12\\\" x2=\\\"57.34\\\" y2=\\\"95.86\\\"/><polyline class=\\\"cls-1\\\" points=\\\"60.69 90.76 61.04 92.12 62.46 92.45\\\"/><line class=\\\"cls-1\\\" x1=\\\"63.99\\\" y1=\\\"95.79\\\" x2=\\\"57.36\\\" y2=\\\"95.79\\\"/><polyline class=\\\"cls-1\\\" points=\\\"63.28 94.57 62.57 95.78 63.34 97.02\\\"/><line class=\\\"cls-2\\\" x1=\\\"57.36\\\" y1=\\\"102.08\\\" x2=\\\"57.36\\\" y2=\\\"89.21\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.36\\\" y1=\\\"102.32\\\" x2=\\\"57.36\\\" y2=\\\"89.21\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.37\\\" y1=\\\"100.9\\\" x2=\\\"56.13\\\" y2=\\\"101.67\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.13\\\" y1=\\\"89.82\\\" x2=\\\"57.34\\\" y2=\\\"90.53\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.35\\\" y1=\\\"95.73\\\" x2=\\\"52.72\\\" y2=\\\"91.12\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.29 92.43 53.65 92.07 53.98 90.65\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.66\\\" y1=\\\"100.4\\\" x2=\\\"57.37\\\" y2=\\\"95.66\\\"/><polyline class=\\\"cls-1\\\" points=\\\"54.02 100.77 53.67 99.41 52.25 99.07\\\"/><line class=\\\"cls-1\\\" x1=\\\"50.72\\\" y1=\\\"95.73\\\" x2=\\\"57.35\\\" y2=\\\"95.73\\\"/><polyline class=\\\"cls-1\\\" points=\\\"51.43 96.96 52.14 95.74 51.37 94.5\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.02\\\" y1=\\\"90.62\\\" x2=\\\"37.26\\\" y2=\\\"89.86\\\"/><line class=\\\"cls-1\\\" x1=\\\"37.26\\\" y1=\\\"101.71\\\" x2=\\\"36.05\\\" y2=\\\"101\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.05\\\" y1=\\\"95.79\\\" x2=\\\"40.67\\\" y2=\\\"100.4\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.1 99.1 39.74 99.45 39.41 100.87\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.73\\\" y1=\\\"91.12\\\" x2=\\\"36.02\\\" y2=\\\"95.86\\\"/><polyline class=\\\"cls-1\\\" points=\\\"39.37 90.76 39.72 92.12 41.14 92.45\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.67\\\" y1=\\\"95.79\\\" x2=\\\"36.05\\\" y2=\\\"95.79\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.96 94.57 41.25 95.78 42.02 97.02\\\"/><line class=\\\"cls-2\\\" x1=\\\"36.04\\\" y1=\\\"102.08\\\" x2=\\\"36.04\\\" y2=\\\"89.21\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.04\\\" y1=\\\"102.32\\\" x2=\\\"36.04\\\" y2=\\\"89.21\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.05\\\" y1=\\\"100.9\\\" x2=\\\"34.81\\\" y2=\\\"101.67\\\"/><line class=\\\"cls-1\\\" x1=\\\"34.81\\\" y1=\\\"89.82\\\" x2=\\\"36.03\\\" y2=\\\"90.53\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.03\\\" y1=\\\"95.73\\\" x2=\\\"31.41\\\" y2=\\\"91.12\\\"/><polyline class=\\\"cls-1\\\" points=\\\"30.97 92.43 32.33 92.07 32.66 90.65\\\"/><line class=\\\"cls-1\\\" x1=\\\"31.34\\\" y1=\\\"100.4\\\" x2=\\\"36.05\\\" y2=\\\"95.66\\\"/><polyline class=\\\"cls-1\\\" points=\\\"32.7 100.77 32.35 99.41 30.93 99.07\\\"/><line class=\\\"cls-1\\\" x1=\\\"29.4\\\" y1=\\\"95.73\\\" x2=\\\"36.03\\\" y2=\\\"95.73\\\"/><polyline class=\\\"cls-1\\\" points=\\\"30.11 96.96 30.82 95.74 30.05 94.5\\\"/><path class=\\\"cls-3\\\" d=\\\"M59.26,62.32H97.15a15.07,15.07,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,40.61c-1.62,1.06-2.55.86-3.63-.79a16.43,16.43,0,0,0-16.84-7.33c-7,1.45-12.22,6.59-13.29,13.51-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.68-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,65a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,1,1,5.41,0A2.65,2.65,0,0,1,49.24,65Z\\\"/><line class=\\\"cls-4\\\" x1=\\\"69.07\\\" y1=\\\"28.05\\\" x2=\\\"62.2\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"75.11\\\" y1=\\\"13.96\\\" x2=\\\"70.3\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"81.32\\\" y1=\\\"9.91\\\" x2=\\\"78.66\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-4\\\" x1=\\\"70.73\\\" y1=\\\"20.26\\\" x2=\\\"64.42\\\" y2=\\\"17.54\\\"/><path class=\\\"cls-3\\\" d=\\\"M88.72,42.66h0a14.49,14.49,0,0,0,0-29h0a14.49,14.49,0,1,0,0,29h0Z\\\"/><line class=\\\"cls-4\\\" x1=\\\"108.43\\\" y1=\\\"28.05\\\" x2=\\\"115.3\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"88.75\\\" y1=\\\"8.38\\\" x2=\\\"88.75\\\" y2=\\\"1.5\\\"/><line class=\\\"cls-4\\\" x1=\\\"102.97\\\" y1=\\\"41.82\\\" x2=\\\"107.92\\\" y2=\\\"46.59\\\"/><line class=\\\"cls-4\\\" x1=\\\"102.39\\\" y1=\\\"13.96\\\" x2=\\\"107.2\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-4\\\" x1=\\\"106.99\\\" y1=\\\"35.59\\\" x2=\\\"113.35\\\" y2=\\\"38.2\\\"/><line class=\\\"cls-4\\\" x1=\\\"96.18\\\" y1=\\\"9.91\\\" x2=\\\"98.84\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-4\\\" x1=\\\"106.77\\\" y1=\\\"20.26\\\" x2=\\\"113.08\\\" y2=\\\"17.54\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/snow-showers-day.svg?\n}");

/***/ }),

/***/ "./src/img/icons/snow-showers-night.svg":
/*!**********************************************!*\
  !*** ./src/img/icons/snow-showers-night.svg ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 102.12 92.89\\\"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231f20;}.cls-1{stroke-linecap:round;}.cls-3{stroke:#000;stroke-width:3px;}</style></defs><title>snow-showers-nightAsset 89</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"47.46\\\" y1=\\\"63.5\\\" x2=\\\"48.71\\\" y2=\\\"62.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"48.71\\\" y1=\\\"74.58\\\" x2=\\\"47.49\\\" y2=\\\"73.87\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"68.67\\\" x2=\\\"52.11\\\" y2=\\\"73.28\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.55 71.97 51.19 72.33 50.85 73.75\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.18\\\" y1=\\\"64\\\" x2=\\\"47.47\\\" y2=\\\"68.74\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.81 63.63 51.17 64.99 52.59 65.33\\\"/><line class=\\\"cls-1\\\" x1=\\\"54.12\\\" y1=\\\"68.67\\\" x2=\\\"47.49\\\" y2=\\\"68.67\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.41 67.44 52.7 68.66 53.47 69.9\\\"/><line class=\\\"cls-2\\\" x1=\\\"47.49\\\" y1=\\\"74.95\\\" x2=\\\"47.49\\\" y2=\\\"62.08\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"75.2\\\" x2=\\\"47.49\\\" y2=\\\"62.08\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.5\\\" y1=\\\"73.78\\\" x2=\\\"46.26\\\" y2=\\\"74.55\\\"/><line class=\\\"cls-1\\\" x1=\\\"46.26\\\" y1=\\\"62.69\\\" x2=\\\"47.47\\\" y2=\\\"63.4\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.47\\\" y1=\\\"68.61\\\" x2=\\\"42.85\\\" y2=\\\"64\\\"/><polyline class=\\\"cls-1\\\" points=\\\"42.42 65.3 43.77 64.95 44.11 63.53\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.79\\\" y1=\\\"73.28\\\" x2=\\\"47.5\\\" y2=\\\"68.54\\\"/><polyline class=\\\"cls-1\\\" points=\\\"44.15 73.64 43.8 72.28 42.38 71.95\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.85\\\" y1=\\\"68.61\\\" x2=\\\"47.47\\\" y2=\\\"68.61\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.56 69.83 42.27 68.62 41.5 67.38\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.42\\\" y1=\\\"63.5\\\" x2=\\\"23.66\\\" y2=\\\"62.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"23.66\\\" y1=\\\"74.58\\\" x2=\\\"22.45\\\" y2=\\\"73.87\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.45\\\" y1=\\\"68.67\\\" x2=\\\"27.07\\\" y2=\\\"73.28\\\"/><polyline class=\\\"cls-1\\\" points=\\\"27.51 71.97 26.15 72.33 25.81 73.75\\\"/><line class=\\\"cls-1\\\" x1=\\\"27.14\\\" y1=\\\"64\\\" x2=\\\"22.43\\\" y2=\\\"68.74\\\"/><polyline class=\\\"cls-1\\\" points=\\\"25.77 63.63 26.13 64.99 27.55 65.33\\\"/><line class=\\\"cls-1\\\" x1=\\\"29.07\\\" y1=\\\"68.67\\\" x2=\\\"22.45\\\" y2=\\\"68.67\\\"/><polyline class=\\\"cls-1\\\" points=\\\"28.37 67.44 27.66 68.66 28.42 69.9\\\"/><line class=\\\"cls-2\\\" x1=\\\"22.45\\\" y1=\\\"74.95\\\" x2=\\\"22.45\\\" y2=\\\"62.08\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.45\\\" y1=\\\"75.2\\\" x2=\\\"22.45\\\" y2=\\\"62.08\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.46\\\" y1=\\\"73.78\\\" x2=\\\"21.22\\\" y2=\\\"74.55\\\"/><line class=\\\"cls-1\\\" x1=\\\"21.22\\\" y1=\\\"62.69\\\" x2=\\\"22.43\\\" y2=\\\"63.4\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.43\\\" y1=\\\"68.61\\\" x2=\\\"17.81\\\" y2=\\\"64\\\"/><polyline class=\\\"cls-1\\\" points=\\\"17.37 65.3 18.73 64.95 19.07 63.53\\\"/><line class=\\\"cls-1\\\" x1=\\\"17.74\\\" y1=\\\"73.28\\\" x2=\\\"22.45\\\" y2=\\\"68.54\\\"/><polyline class=\\\"cls-1\\\" points=\\\"19.11 73.64 18.75 72.28 17.33 71.95\\\"/><line class=\\\"cls-1\\\" x1=\\\"15.81\\\" y1=\\\"68.61\\\" x2=\\\"22.43\\\" y2=\\\"68.61\\\"/><polyline class=\\\"cls-1\\\" points=\\\"16.52 69.83 17.22 68.62 16.46 67.38\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.78\\\" y1=\\\"63.5\\\" x2=\\\"73.03\\\" y2=\\\"62.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"73.03\\\" y1=\\\"74.58\\\" x2=\\\"71.81\\\" y2=\\\"73.87\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.81\\\" y1=\\\"68.67\\\" x2=\\\"76.43\\\" y2=\\\"73.28\\\"/><polyline class=\\\"cls-1\\\" points=\\\"76.87 71.97 75.51 72.33 75.17 73.75\\\"/><line class=\\\"cls-1\\\" x1=\\\"76.5\\\" y1=\\\"64\\\" x2=\\\"71.79\\\" y2=\\\"68.74\\\"/><polyline class=\\\"cls-1\\\" points=\\\"75.13 63.63 75.49 64.99 76.91 65.33\\\"/><line class=\\\"cls-1\\\" x1=\\\"78.44\\\" y1=\\\"68.67\\\" x2=\\\"71.81\\\" y2=\\\"68.67\\\"/><polyline class=\\\"cls-1\\\" points=\\\"77.73 67.44 77.02 68.66 77.79 69.9\\\"/><line class=\\\"cls-2\\\" x1=\\\"71.81\\\" y1=\\\"74.95\\\" x2=\\\"71.81\\\" y2=\\\"62.08\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.81\\\" y1=\\\"75.2\\\" x2=\\\"71.81\\\" y2=\\\"62.08\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.82\\\" y1=\\\"73.78\\\" x2=\\\"70.58\\\" y2=\\\"74.55\\\"/><line class=\\\"cls-1\\\" x1=\\\"70.58\\\" y1=\\\"62.69\\\" x2=\\\"71.79\\\" y2=\\\"63.4\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.79\\\" y1=\\\"68.61\\\" x2=\\\"67.17\\\" y2=\\\"64\\\"/><polyline class=\\\"cls-1\\\" points=\\\"66.74 65.3 68.09 64.95 68.43 63.53\\\"/><line class=\\\"cls-1\\\" x1=\\\"67.11\\\" y1=\\\"73.28\\\" x2=\\\"71.82\\\" y2=\\\"68.54\\\"/><polyline class=\\\"cls-1\\\" points=\\\"68.47 73.64 68.11 72.28 66.69 71.95\\\"/><line class=\\\"cls-1\\\" x1=\\\"65.17\\\" y1=\\\"68.61\\\" x2=\\\"71.79\\\" y2=\\\"68.61\\\"/><polyline class=\\\"cls-1\\\" points=\\\"65.88 69.83 66.58 68.62 65.82 67.38\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.34\\\" y1=\\\"80.69\\\" x2=\\\"58.58\\\" y2=\\\"79.92\\\"/><line class=\\\"cls-1\\\" x1=\\\"58.58\\\" y1=\\\"91.77\\\" x2=\\\"57.37\\\" y2=\\\"91.06\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.36\\\" y1=\\\"85.86\\\" x2=\\\"61.99\\\" y2=\\\"90.47\\\"/><polyline class=\\\"cls-1\\\" points=\\\"62.42 89.16 61.06 89.52 60.73 90.94\\\"/><line class=\\\"cls-1\\\" x1=\\\"62.05\\\" y1=\\\"81.19\\\" x2=\\\"57.34\\\" y2=\\\"85.93\\\"/><polyline class=\\\"cls-1\\\" points=\\\"60.69 80.83 61.04 82.18 62.46 82.52\\\"/><line class=\\\"cls-1\\\" x1=\\\"63.99\\\" y1=\\\"85.86\\\" x2=\\\"57.36\\\" y2=\\\"85.86\\\"/><polyline class=\\\"cls-1\\\" points=\\\"63.28 84.64 62.57 85.85 63.34 87.09\\\"/><line class=\\\"cls-2\\\" x1=\\\"57.36\\\" y1=\\\"92.14\\\" x2=\\\"57.36\\\" y2=\\\"79.27\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.36\\\" y1=\\\"92.39\\\" x2=\\\"57.36\\\" y2=\\\"79.27\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.37\\\" y1=\\\"90.97\\\" x2=\\\"56.13\\\" y2=\\\"91.74\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.13\\\" y1=\\\"79.89\\\" x2=\\\"57.34\\\" y2=\\\"80.59\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.35\\\" y1=\\\"85.8\\\" x2=\\\"52.72\\\" y2=\\\"81.19\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.29 82.49 53.65 82.14 53.98 80.72\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.66\\\" y1=\\\"90.47\\\" x2=\\\"57.37\\\" y2=\\\"85.73\\\"/><polyline class=\\\"cls-1\\\" points=\\\"54.02 90.83 53.67 89.47 52.25 89.14\\\"/><line class=\\\"cls-1\\\" x1=\\\"50.72\\\" y1=\\\"85.8\\\" x2=\\\"57.35\\\" y2=\\\"85.8\\\"/><polyline class=\\\"cls-1\\\" points=\\\"51.43 87.02 52.14 85.81 51.37 84.57\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.02\\\" y1=\\\"80.69\\\" x2=\\\"37.26\\\" y2=\\\"79.92\\\"/><line class=\\\"cls-1\\\" x1=\\\"37.26\\\" y1=\\\"91.77\\\" x2=\\\"36.05\\\" y2=\\\"91.06\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.05\\\" y1=\\\"85.86\\\" x2=\\\"40.67\\\" y2=\\\"90.47\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.1 89.16 39.74 89.52 39.41 90.94\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.73\\\" y1=\\\"81.19\\\" x2=\\\"36.02\\\" y2=\\\"85.93\\\"/><polyline class=\\\"cls-1\\\" points=\\\"39.37 80.83 39.72 82.18 41.14 82.52\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.67\\\" y1=\\\"85.86\\\" x2=\\\"36.05\\\" y2=\\\"85.86\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.96 84.64 41.25 85.85 42.02 87.09\\\"/><line class=\\\"cls-2\\\" x1=\\\"36.04\\\" y1=\\\"92.14\\\" x2=\\\"36.04\\\" y2=\\\"79.27\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.04\\\" y1=\\\"92.39\\\" x2=\\\"36.04\\\" y2=\\\"79.27\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.05\\\" y1=\\\"90.97\\\" x2=\\\"34.81\\\" y2=\\\"91.74\\\"/><line class=\\\"cls-1\\\" x1=\\\"34.81\\\" y1=\\\"79.89\\\" x2=\\\"36.03\\\" y2=\\\"80.59\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.03\\\" y1=\\\"85.8\\\" x2=\\\"31.41\\\" y2=\\\"81.19\\\"/><polyline class=\\\"cls-1\\\" points=\\\"30.97 82.49 32.33 82.14 32.66 80.72\\\"/><line class=\\\"cls-1\\\" x1=\\\"31.34\\\" y1=\\\"90.47\\\" x2=\\\"36.05\\\" y2=\\\"85.73\\\"/><polyline class=\\\"cls-1\\\" points=\\\"32.7 90.83 32.35 89.47 30.93 89.14\\\"/><line class=\\\"cls-1\\\" x1=\\\"29.4\\\" y1=\\\"85.8\\\" x2=\\\"36.03\\\" y2=\\\"85.8\\\"/><polyline class=\\\"cls-1\\\" points=\\\"30.11 87.02 30.82 85.81 30.05 84.57\\\"/><path class=\\\"cls-3\\\" d=\\\"M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z\\\"/><path class=\\\"cls-3\\\" d=\\\"M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/snow-showers-night.svg?\n}");

/***/ }),

/***/ "./src/img/icons/snow.svg":
/*!********************************!*\
  !*** ./src/img/icons/snow.svg ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 72.29\\\"><defs><style>.cls-1,.cls-2,.cls-3{fill:none;stroke-miterlimit:10;}.cls-1,.cls-2{stroke:#231f20;}.cls-1{stroke-linecap:round;}.cls-3{stroke:#000;stroke-width:3px;}</style></defs><title>snowAsset 87</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"47.46\\\" y1=\\\"42.9\\\" x2=\\\"48.71\\\" y2=\\\"42.13\\\"/><line class=\\\"cls-1\\\" x1=\\\"48.71\\\" y1=\\\"53.98\\\" x2=\\\"47.49\\\" y2=\\\"53.28\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"48.07\\\" x2=\\\"52.11\\\" y2=\\\"52.68\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.55 51.38 51.19 51.73 50.85 53.15\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.18\\\" y1=\\\"43.4\\\" x2=\\\"47.47\\\" y2=\\\"48.14\\\"/><polyline class=\\\"cls-1\\\" points=\\\"50.81 43.04 51.17 44.4 52.59 44.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"54.12\\\" y1=\\\"48.07\\\" x2=\\\"47.49\\\" y2=\\\"48.07\\\"/><polyline class=\\\"cls-1\\\" points=\\\"53.41 46.85 52.7 48.06 53.47 49.3\\\"/><line class=\\\"cls-2\\\" x1=\\\"47.49\\\" y1=\\\"54.36\\\" x2=\\\"47.49\\\" y2=\\\"41.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.49\\\" y1=\\\"54.6\\\" x2=\\\"47.49\\\" y2=\\\"41.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.5\\\" y1=\\\"53.18\\\" x2=\\\"46.26\\\" y2=\\\"53.95\\\"/><line class=\\\"cls-1\\\" x1=\\\"46.26\\\" y1=\\\"42.1\\\" x2=\\\"47.47\\\" y2=\\\"42.81\\\"/><line class=\\\"cls-1\\\" x1=\\\"47.47\\\" y1=\\\"48.01\\\" x2=\\\"42.85\\\" y2=\\\"43.4\\\"/><polyline class=\\\"cls-1\\\" points=\\\"42.42 44.71 43.77 44.35 44.11 42.93\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.79\\\" y1=\\\"52.68\\\" x2=\\\"47.5\\\" y2=\\\"47.94\\\"/><polyline class=\\\"cls-1\\\" points=\\\"44.15 53.04 43.8 51.69 42.38 51.35\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.85\\\" y1=\\\"48.01\\\" x2=\\\"47.47\\\" y2=\\\"48.01\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.56 49.23 42.27 48.02 41.5 46.78\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.42\\\" y1=\\\"42.9\\\" x2=\\\"23.66\\\" y2=\\\"42.13\\\"/><line class=\\\"cls-1\\\" x1=\\\"23.66\\\" y1=\\\"53.98\\\" x2=\\\"22.45\\\" y2=\\\"53.28\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.45\\\" y1=\\\"48.07\\\" x2=\\\"27.07\\\" y2=\\\"52.68\\\"/><polyline class=\\\"cls-1\\\" points=\\\"27.51 51.38 26.15 51.73 25.81 53.15\\\"/><line class=\\\"cls-1\\\" x1=\\\"27.14\\\" y1=\\\"43.4\\\" x2=\\\"22.43\\\" y2=\\\"48.14\\\"/><polyline class=\\\"cls-1\\\" points=\\\"25.77 43.04 26.13 44.4 27.55 44.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"29.07\\\" y1=\\\"48.07\\\" x2=\\\"22.45\\\" y2=\\\"48.07\\\"/><polyline class=\\\"cls-1\\\" points=\\\"28.37 46.85 27.66 48.06 28.42 49.3\\\"/><line class=\\\"cls-2\\\" x1=\\\"22.45\\\" y1=\\\"54.36\\\" x2=\\\"22.45\\\" y2=\\\"41.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.45\\\" y1=\\\"54.6\\\" x2=\\\"22.45\\\" y2=\\\"41.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.46\\\" y1=\\\"53.18\\\" x2=\\\"21.22\\\" y2=\\\"53.95\\\"/><line class=\\\"cls-1\\\" x1=\\\"21.22\\\" y1=\\\"42.1\\\" x2=\\\"22.43\\\" y2=\\\"42.81\\\"/><line class=\\\"cls-1\\\" x1=\\\"22.43\\\" y1=\\\"48.01\\\" x2=\\\"17.81\\\" y2=\\\"43.4\\\"/><polyline class=\\\"cls-1\\\" points=\\\"17.37 44.71 18.73 44.35 19.07 42.93\\\"/><line class=\\\"cls-1\\\" x1=\\\"17.74\\\" y1=\\\"52.68\\\" x2=\\\"22.45\\\" y2=\\\"47.94\\\"/><polyline class=\\\"cls-1\\\" points=\\\"19.11 53.04 18.75 51.69 17.33 51.35\\\"/><line class=\\\"cls-1\\\" x1=\\\"15.81\\\" y1=\\\"48.01\\\" x2=\\\"22.43\\\" y2=\\\"48.01\\\"/><polyline class=\\\"cls-1\\\" points=\\\"16.52 49.23 17.22 48.02 16.46 46.78\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.78\\\" y1=\\\"42.9\\\" x2=\\\"73.03\\\" y2=\\\"42.13\\\"/><line class=\\\"cls-1\\\" x1=\\\"73.03\\\" y1=\\\"53.98\\\" x2=\\\"71.81\\\" y2=\\\"53.28\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.81\\\" y1=\\\"48.07\\\" x2=\\\"76.43\\\" y2=\\\"52.68\\\"/><polyline class=\\\"cls-1\\\" points=\\\"76.87 51.38 75.51 51.73 75.17 53.15\\\"/><line class=\\\"cls-1\\\" x1=\\\"76.5\\\" y1=\\\"43.4\\\" x2=\\\"71.79\\\" y2=\\\"48.14\\\"/><polyline class=\\\"cls-1\\\" points=\\\"75.13 43.04 75.49 44.4 76.91 44.73\\\"/><line class=\\\"cls-1\\\" x1=\\\"78.44\\\" y1=\\\"48.07\\\" x2=\\\"71.81\\\" y2=\\\"48.07\\\"/><polyline class=\\\"cls-1\\\" points=\\\"77.73 46.85 77.02 48.06 77.79 49.3\\\"/><line class=\\\"cls-2\\\" x1=\\\"71.81\\\" y1=\\\"54.36\\\" x2=\\\"71.81\\\" y2=\\\"41.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.81\\\" y1=\\\"54.6\\\" x2=\\\"71.81\\\" y2=\\\"41.48\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.82\\\" y1=\\\"53.18\\\" x2=\\\"70.58\\\" y2=\\\"53.95\\\"/><line class=\\\"cls-1\\\" x1=\\\"70.58\\\" y1=\\\"42.1\\\" x2=\\\"71.79\\\" y2=\\\"42.81\\\"/><line class=\\\"cls-1\\\" x1=\\\"71.79\\\" y1=\\\"48.01\\\" x2=\\\"67.17\\\" y2=\\\"43.4\\\"/><polyline class=\\\"cls-1\\\" points=\\\"66.74 44.71 68.09 44.35 68.43 42.93\\\"/><line class=\\\"cls-1\\\" x1=\\\"67.11\\\" y1=\\\"52.68\\\" x2=\\\"71.82\\\" y2=\\\"47.94\\\"/><polyline class=\\\"cls-1\\\" points=\\\"68.47 53.04 68.11 51.69 66.69 51.35\\\"/><line class=\\\"cls-1\\\" x1=\\\"65.17\\\" y1=\\\"48.01\\\" x2=\\\"71.79\\\" y2=\\\"48.01\\\"/><polyline class=\\\"cls-1\\\" points=\\\"65.88 49.23 66.58 48.02 65.82 46.78\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.34\\\" y1=\\\"60.09\\\" x2=\\\"58.58\\\" y2=\\\"59.32\\\"/><line class=\\\"cls-1\\\" x1=\\\"58.58\\\" y1=\\\"71.18\\\" x2=\\\"57.37\\\" y2=\\\"70.47\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.36\\\" y1=\\\"65.26\\\" x2=\\\"61.99\\\" y2=\\\"69.87\\\"/><polyline class=\\\"cls-1\\\" points=\\\"62.42 68.57 61.06 68.92 60.73 70.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"62.05\\\" y1=\\\"60.59\\\" x2=\\\"57.34\\\" y2=\\\"65.33\\\"/><polyline class=\\\"cls-1\\\" points=\\\"60.69 60.23 61.04 61.59 62.46 61.92\\\"/><line class=\\\"cls-1\\\" x1=\\\"63.99\\\" y1=\\\"65.26\\\" x2=\\\"57.36\\\" y2=\\\"65.26\\\"/><polyline class=\\\"cls-1\\\" points=\\\"63.28 64.04 62.57 65.25 63.34 66.49\\\"/><line class=\\\"cls-2\\\" x1=\\\"57.36\\\" y1=\\\"71.55\\\" x2=\\\"57.36\\\" y2=\\\"58.67\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.36\\\" y1=\\\"71.79\\\" x2=\\\"57.36\\\" y2=\\\"58.67\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.37\\\" y1=\\\"70.37\\\" x2=\\\"56.13\\\" y2=\\\"71.14\\\"/><line class=\\\"cls-1\\\" x1=\\\"56.13\\\" y1=\\\"59.29\\\" x2=\\\"57.34\\\" y2=\\\"60\\\"/><line class=\\\"cls-1\\\" x1=\\\"57.35\\\" y1=\\\"65.2\\\" x2=\\\"52.72\\\" y2=\\\"60.59\\\"/><polyline class=\\\"cls-1\\\" points=\\\"52.29 61.9 53.65 61.54 53.98 60.12\\\"/><line class=\\\"cls-1\\\" x1=\\\"52.66\\\" y1=\\\"69.87\\\" x2=\\\"57.37\\\" y2=\\\"65.13\\\"/><polyline class=\\\"cls-1\\\" points=\\\"54.02 70.24 53.67 68.88 52.25 68.54\\\"/><line class=\\\"cls-1\\\" x1=\\\"50.72\\\" y1=\\\"65.2\\\" x2=\\\"57.35\\\" y2=\\\"65.2\\\"/><polyline class=\\\"cls-1\\\" points=\\\"51.43 66.43 52.14 65.21 51.37 63.97\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.02\\\" y1=\\\"60.09\\\" x2=\\\"37.26\\\" y2=\\\"59.32\\\"/><line class=\\\"cls-1\\\" x1=\\\"37.26\\\" y1=\\\"71.18\\\" x2=\\\"36.05\\\" y2=\\\"70.47\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.05\\\" y1=\\\"65.26\\\" x2=\\\"40.67\\\" y2=\\\"69.87\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.1 68.57 39.74 68.92 39.41 70.34\\\"/><line class=\\\"cls-1\\\" x1=\\\"40.73\\\" y1=\\\"60.59\\\" x2=\\\"36.02\\\" y2=\\\"65.33\\\"/><polyline class=\\\"cls-1\\\" points=\\\"39.37 60.23 39.72 61.59 41.14 61.92\\\"/><line class=\\\"cls-1\\\" x1=\\\"42.67\\\" y1=\\\"65.26\\\" x2=\\\"36.05\\\" y2=\\\"65.26\\\"/><polyline class=\\\"cls-1\\\" points=\\\"41.96 64.04 41.25 65.25 42.02 66.49\\\"/><line class=\\\"cls-2\\\" x1=\\\"36.04\\\" y1=\\\"71.55\\\" x2=\\\"36.04\\\" y2=\\\"58.67\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.04\\\" y1=\\\"71.79\\\" x2=\\\"36.04\\\" y2=\\\"58.67\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.05\\\" y1=\\\"70.37\\\" x2=\\\"34.81\\\" y2=\\\"71.14\\\"/><line class=\\\"cls-1\\\" x1=\\\"34.81\\\" y1=\\\"59.29\\\" x2=\\\"36.03\\\" y2=\\\"60\\\"/><line class=\\\"cls-1\\\" x1=\\\"36.03\\\" y1=\\\"65.2\\\" x2=\\\"31.41\\\" y2=\\\"60.59\\\"/><polyline class=\\\"cls-1\\\" points=\\\"30.97 61.9 32.33 61.54 32.66 60.12\\\"/><line class=\\\"cls-1\\\" x1=\\\"31.34\\\" y1=\\\"69.87\\\" x2=\\\"36.05\\\" y2=\\\"65.13\\\"/><polyline class=\\\"cls-1\\\" points=\\\"32.7 70.24 32.35 68.88 30.93 68.54\\\"/><line class=\\\"cls-1\\\" x1=\\\"29.4\\\" y1=\\\"65.2\\\" x2=\\\"36.03\\\" y2=\\\"65.2\\\"/><polyline class=\\\"cls-1\\\" points=\\\"30.11 66.43 30.82 65.21 30.05 63.97\\\"/><path class=\\\"cls-3\\\" d=\\\"M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/snow.svg?\n}");

/***/ }),

/***/ "./src/img/icons/thunder-rain.svg":
/*!****************************************!*\
  !*** ./src/img/icons/thunder-rain.svg ***!
  \****************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 70.65\\\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:#231f20;}</style></defs><title>thunder-rainAsset 83</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M23.67,40.49C21.2,42,19,43.27,16.82,44.7a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C23.71,45.86,23.67,43.38,23.67,40.49Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M45.29,40.49c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C45.33,45.86,45.29,43.38,45.29,40.49Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M66.91,40.49c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C67,45.86,66.91,43.38,66.91,40.49Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M31.67,56.88c-2.47,1.5-4.71,2.77-6.85,4.2a4.41,4.41,0,1,0,6.84,3.64C31.71,62.24,31.67,59.77,31.67,56.88Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M53.29,56.88c-2.48,1.5-4.72,2.77-6.85,4.2a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.35C53.33,62.24,53.29,59.77,53.29,56.88Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z\\\"/><polygon class=\\\"cls-2\\\" points=\\\"86.46 40.8 74.69 53.5 73.44 50.81 85.56 51.42 87.96 51.54 86.31 53.15 71.56 67.58 84.8 51.75 85.56 53.48 73.44 54.09 70.02 54.26 72.18 51.4 82.63 37.59 86.46 40.8\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/thunder-rain.svg?\n}");

/***/ }),

/***/ "./src/img/icons/thunder-showers-day.svg":
/*!***********************************************!*\
  !*** ./src/img/icons/thunder-showers-day.svg ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 116.8 101.94\\\"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-2{stroke-linecap:round;}.cls-3{fill:#231f20;}</style></defs><title>thunder-showers-day Asset 84</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M59.26,62.32H97.15a15.07,15.07,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,40.61c-1.62,1.06-2.55.86-3.63-.79a16.43,16.43,0,0,0-16.84-7.33c-7,1.45-12.22,6.59-13.29,13.51-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.68-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,65a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,1,1,5.41,0A2.65,2.65,0,0,1,49.24,65Z\\\"/><line class=\\\"cls-2\\\" x1=\\\"69.07\\\" y1=\\\"28.05\\\" x2=\\\"62.2\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"75.11\\\" y1=\\\"13.96\\\" x2=\\\"70.3\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"81.32\\\" y1=\\\"9.91\\\" x2=\\\"78.66\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-2\\\" x1=\\\"70.73\\\" y1=\\\"20.26\\\" x2=\\\"64.42\\\" y2=\\\"17.54\\\"/><path class=\\\"cls-1\\\" d=\\\"M88.72,42.66h0a14.49,14.49,0,0,0,0-29h0a14.49,14.49,0,1,0,0,29h0Z\\\"/><line class=\\\"cls-2\\\" x1=\\\"108.43\\\" y1=\\\"28.05\\\" x2=\\\"115.3\\\" y2=\\\"28.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"88.75\\\" y1=\\\"8.38\\\" x2=\\\"88.75\\\" y2=\\\"1.5\\\"/><line class=\\\"cls-2\\\" x1=\\\"102.97\\\" y1=\\\"41.82\\\" x2=\\\"107.92\\\" y2=\\\"46.59\\\"/><line class=\\\"cls-2\\\" x1=\\\"102.39\\\" y1=\\\"13.96\\\" x2=\\\"107.2\\\" y2=\\\"9.05\\\"/><line class=\\\"cls-2\\\" x1=\\\"106.99\\\" y1=\\\"35.59\\\" x2=\\\"113.35\\\" y2=\\\"38.2\\\"/><line class=\\\"cls-2\\\" x1=\\\"96.18\\\" y1=\\\"9.91\\\" x2=\\\"98.84\\\" y2=\\\"3.56\\\"/><line class=\\\"cls-2\\\" x1=\\\"106.77\\\" y1=\\\"20.26\\\" x2=\\\"113.08\\\" y2=\\\"17.54\\\"/><path class=\\\"cls-1\\\" d=\\\"M23.67,71.78C21.2,73.29,19,74.56,16.82,76a4.44,4.44,0,0,0,3.37,8,4.5,4.5,0,0,0,3.47-4.35C23.71,77.15,23.67,74.68,23.67,71.78Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M45.29,71.78c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.35C45.33,77.15,45.29,74.68,45.29,71.78Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M66.91,71.78c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.49,4.49,0,0,0,3.47-4.35C67,77.15,66.91,74.68,66.91,71.78Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M31.67,88.17c-2.47,1.51-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.52,4.52,0,0,0,31.66,96C31.71,93.53,31.67,91.06,31.67,88.17Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M53.29,88.17c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.53,4.53,0,0,0,53.28,96C53.33,93.53,53.29,91.06,53.29,88.17Z\\\"/><polygon class=\\\"cls-3\\\" points=\\\"86.46 72.09 74.69 84.79 73.44 82.11 85.56 82.71 87.96 82.83 86.31 84.44 71.56 98.87 84.8 83.04 85.56 84.77 73.44 85.38 70.02 85.55 72.18 82.69 82.63 68.88 86.46 72.09\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/thunder-showers-day.svg?\n}");

/***/ }),

/***/ "./src/img/icons/thunder-showers-night.svg":
/*!*************************************************!*\
  !*** ./src/img/icons/thunder-showers-night.svg ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 102.12 92.88\\\"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:#231f20;}</style></defs><title>thunder-showers-nightAsset 85</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61\\\"/><path d=\\\"M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M23.67,62.72C21.2,64.23,19,65.5,16.82,66.93a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C23.71,68.09,23.67,65.61,23.67,62.72Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M45.29,62.72c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C45.33,68.09,45.29,65.61,45.29,62.72Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M66.91,62.72c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C67,68.09,66.91,65.61,66.91,62.72Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M31.67,79.11c-2.47,1.5-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.53,4.53,0,0,0,31.66,87C31.71,84.47,31.67,82,31.67,79.11Z\\\"/><path class=\\\"cls-1\\\" d=\\\"M53.29,79.11c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.54,4.54,0,0,0,53.28,87C53.33,84.47,53.29,82,53.29,79.11Z\\\"/><polygon class=\\\"cls-2\\\" points=\\\"86.46 63.03 74.69 75.73 73.44 73.05 85.56 73.65 87.96 73.77 86.31 75.38 71.56 89.81 84.8 73.98 85.56 75.71 73.44 76.32 70.02 76.49 72.18 73.63 82.63 59.82 86.46 63.03\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/thunder-showers-night.svg?\n}");

/***/ }),

/***/ "./src/img/icons/thunder.svg":
/*!***********************************!*\
  !*** ./src/img/icons/thunder.svg ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 47.07\\\"><defs><style>.cls-1{fill:none;stroke:#231f20;stroke-miterlimit:10;stroke-width:3px;}.cls-2{fill:#231f20;}</style></defs><title>thunder Asset 82</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><path class=\\\"cls-1\\\" d=\\\"M61.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H36.61\\\"/><polygon class=\\\"cls-2\\\" points=\\\"56.48 20.29 44.71 32.99 43.46 30.3 55.58 30.91 57.98 31.03 56.34 32.64 41.58 47.07 54.82 31.24 55.58 32.97 43.46 33.58 40.04 33.75 42.2 30.89 52.65 17.07 56.48 20.29\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/thunder.svg?\n}");

/***/ }),

/***/ "./src/img/icons/wind.svg":
/*!********************************!*\
  !*** ./src/img/icons/wind.svg ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("{module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 98.7 50.21\\\"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-1{stroke-linecap:round;}</style></defs><title>windAsset 80</title><g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\"><g id=\\\"Layer_1-2\\\" data-name=\\\"Layer 1\\\"><line class=\\\"cls-1\\\" x1=\\\"47.63\\\" y1=\\\"24.46\\\" x2=\\\"28.53\\\" y2=\\\"48.11\\\"/><polyline class=\\\"cls-1\\\" points=\\\"27.05 39.48 28.16 48.45 36.64 46.9\\\"/><line class=\\\"cls-1\\\" x1=\\\"62.8\\\" y1=\\\"24.46\\\" x2=\\\"43.7\\\" y2=\\\"48.11\\\"/><polyline class=\\\"cls-1\\\" points=\\\"42.22 39.48 43.33 48.45 51.81 46.9\\\"/><path class=\\\"cls-2\\\" d=\\\"M67.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H32.61\\\"/></g></g></svg>\";\n\n//# sourceURL=webpack://odin-weather/./src/img/icons/wind.svg?\n}");

/***/ }),

/***/ "./src/img/weather sync \\.webp$":
/*!****************************************************!*\
  !*** ./src/img/weather/ sync nonrecursive \.webp$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var map = {\n\t\"./clear-day.webp\": \"./src/img/weather/clear-day.webp\",\n\t\"./clear-night.webp\": \"./src/img/weather/clear-night.webp\",\n\t\"./cloudy.webp\": \"./src/img/weather/cloudy.webp\",\n\t\"./fog.webp\": \"./src/img/weather/fog.webp\",\n\t\"./hail.webp\": \"./src/img/weather/hail.webp\",\n\t\"./idle.webp\": \"./src/img/weather/idle.webp\",\n\t\"./partly-cloudy-day.webp\": \"./src/img/weather/partly-cloudy-day.webp\",\n\t\"./partly-cloudy-night.webp\": \"./src/img/weather/partly-cloudy-night.webp\",\n\t\"./rain-snow-showers-day.webp\": \"./src/img/weather/rain-snow-showers-day.webp\",\n\t\"./rain-snow-showers-night.webp\": \"./src/img/weather/rain-snow-showers-night.webp\",\n\t\"./rain-snow.webp\": \"./src/img/weather/rain-snow.webp\",\n\t\"./rain.webp\": \"./src/img/weather/rain.webp\",\n\t\"./showers-day.webp\": \"./src/img/weather/showers-day.webp\",\n\t\"./showers-night.webp\": \"./src/img/weather/showers-night.webp\",\n\t\"./sleet.webp\": \"./src/img/weather/sleet.webp\",\n\t\"./snow-showers-day.webp\": \"./src/img/weather/snow-showers-day.webp\",\n\t\"./snow-showers-night.webp\": \"./src/img/weather/snow-showers-night.webp\",\n\t\"./snow.webp\": \"./src/img/weather/snow.webp\",\n\t\"./thunder-rain.webp\": \"./src/img/weather/thunder-rain.webp\",\n\t\"./thunder-showers-day.webp\": \"./src/img/weather/thunder-showers-day.webp\",\n\t\"./thunder-showers-night.webp\": \"./src/img/weather/thunder-showers-night.webp\",\n\t\"./thunder.webp\": \"./src/img/weather/thunder.webp\",\n\t\"./wind.webp\": \"./src/img/weather/wind.webp\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/weather sync \\\\.webp$\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/_sync_nonrecursive_\\.webp$?\n}");

/***/ }),

/***/ "./src/img/weather/clear-day.webp":
/*!****************************************!*\
  !*** ./src/img/weather/clear-day.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/clear-day.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/clear-day.webp?\n}");

/***/ }),

/***/ "./src/img/weather/clear-night.webp":
/*!******************************************!*\
  !*** ./src/img/weather/clear-night.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/clear-night.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/clear-night.webp?\n}");

/***/ }),

/***/ "./src/img/weather/cloudy.webp":
/*!*************************************!*\
  !*** ./src/img/weather/cloudy.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/cloudy.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/cloudy.webp?\n}");

/***/ }),

/***/ "./src/img/weather/fog.webp":
/*!**********************************!*\
  !*** ./src/img/weather/fog.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/fog.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/fog.webp?\n}");

/***/ }),

/***/ "./src/img/weather/hail.webp":
/*!***********************************!*\
  !*** ./src/img/weather/hail.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/hail.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/hail.webp?\n}");

/***/ }),

/***/ "./src/img/weather/idle.webp":
/*!***********************************!*\
  !*** ./src/img/weather/idle.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/idle.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/idle.webp?\n}");

/***/ }),

/***/ "./src/img/weather/partly-cloudy-day.webp":
/*!************************************************!*\
  !*** ./src/img/weather/partly-cloudy-day.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/partly-cloudy-day.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/partly-cloudy-day.webp?\n}");

/***/ }),

/***/ "./src/img/weather/partly-cloudy-night.webp":
/*!**************************************************!*\
  !*** ./src/img/weather/partly-cloudy-night.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/partly-cloudy-night.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/partly-cloudy-night.webp?\n}");

/***/ }),

/***/ "./src/img/weather/rain-snow-showers-day.webp":
/*!****************************************************!*\
  !*** ./src/img/weather/rain-snow-showers-day.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/rain-snow-showers-day.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/rain-snow-showers-day.webp?\n}");

/***/ }),

/***/ "./src/img/weather/rain-snow-showers-night.webp":
/*!******************************************************!*\
  !*** ./src/img/weather/rain-snow-showers-night.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/rain-snow-showers-night.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/rain-snow-showers-night.webp?\n}");

/***/ }),

/***/ "./src/img/weather/rain-snow.webp":
/*!****************************************!*\
  !*** ./src/img/weather/rain-snow.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/rain-snow.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/rain-snow.webp?\n}");

/***/ }),

/***/ "./src/img/weather/rain.webp":
/*!***********************************!*\
  !*** ./src/img/weather/rain.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/rain.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/rain.webp?\n}");

/***/ }),

/***/ "./src/img/weather/showers-day.webp":
/*!******************************************!*\
  !*** ./src/img/weather/showers-day.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/showers-day.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/showers-day.webp?\n}");

/***/ }),

/***/ "./src/img/weather/showers-night.webp":
/*!********************************************!*\
  !*** ./src/img/weather/showers-night.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/showers-night.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/showers-night.webp?\n}");

/***/ }),

/***/ "./src/img/weather/sleet.webp":
/*!************************************!*\
  !*** ./src/img/weather/sleet.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/sleet.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/sleet.webp?\n}");

/***/ }),

/***/ "./src/img/weather/snow-showers-day.webp":
/*!***********************************************!*\
  !*** ./src/img/weather/snow-showers-day.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/snow-showers-day.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/snow-showers-day.webp?\n}");

/***/ }),

/***/ "./src/img/weather/snow-showers-night.webp":
/*!*************************************************!*\
  !*** ./src/img/weather/snow-showers-night.webp ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/snow-showers-night.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/snow-showers-night.webp?\n}");

/***/ }),

/***/ "./src/img/weather/snow.webp":
/*!***********************************!*\
  !*** ./src/img/weather/snow.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/snow.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/snow.webp?\n}");

/***/ }),

/***/ "./src/img/weather/thunder-rain.webp":
/*!*******************************************!*\
  !*** ./src/img/weather/thunder-rain.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/thunder-rain.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/thunder-rain.webp?\n}");

/***/ }),

/***/ "./src/img/weather/thunder-showers-day.webp":
/*!**************************************************!*\
  !*** ./src/img/weather/thunder-showers-day.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/thunder-showers-day.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/thunder-showers-day.webp?\n}");

/***/ }),

/***/ "./src/img/weather/thunder-showers-night.webp":
/*!****************************************************!*\
  !*** ./src/img/weather/thunder-showers-night.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/thunder-showers-night.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/thunder-showers-night.webp?\n}");

/***/ }),

/***/ "./src/img/weather/thunder.webp":
/*!**************************************!*\
  !*** ./src/img/weather/thunder.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/thunder.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/thunder.webp?\n}");

/***/ }),

/***/ "./src/img/weather/wind.webp":
/*!***********************************!*\
  !*** ./src/img/weather/wind.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("{module.exports = __webpack_require__.p + \"img/wind.webp\";\n\n//# sourceURL=webpack://odin-weather/./src/img/weather/wind.webp?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _userInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userInterface.js */ \"./src/userInterface.js\");\n\n\n\n\n//elementHandler.addListeners();\n_userInterface_js__WEBPACK_IMPORTED_MODULE_1__.elementHandler.addListeners();\n\n\n//# sourceURL=webpack://odin-weather/./src/index.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather/./src/styles.css?\n}");

/***/ }),

/***/ "./src/userInterface.js":
/*!******************************!*\
  !*** ./src/userInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elementHandler: () => (/* binding */ elementHandler)\n/* harmony export */ });\n/* harmony import */ var _weatherAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI.js */ \"./src/weatherAPI.js\");\n\n\nconst weatherImages = __webpack_require__(\"./src/img/weather sync \\\\.webp$\");\nconst weatherIcons = __webpack_require__(\"./src/img/icons sync \\\\.svg$\");\n\nconst elementHandler = (function() {\n  // Do DOM stuff\n  const inputField = document.querySelector('#input');\n  const submitButton = document.querySelector('#submit');\n  const location = document.querySelector('#location');\n  const currentCondition = document.querySelector('#current-condition');\n  const additionalInformation = document.querySelector('#additional-information');\n  const weeklyOverview = document.querySelector('#weekly-overview');\n  const svgContainer = document.querySelector('#svg');\n  const credits = document.querySelector('#credits');\n  const fadeLayer = document.querySelector('#fade-layer');\n  const sun = document.querySelector('#sun');\n  const progressCurrent = document.querySelector('#progress-current');\n\n  const conditionImages = {\n    'snow':\t'Photo by <a href=\"https://unsplash.com/@victorserban?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Victor Serban</a> on <a href=\"https://unsplash.com/photos/snow-covered-tree-branches-during-daytime-6Xqj98qWsoo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'snow-showers-day':\t'Photo by <a href=\"https://unsplash.com/@jack_scorner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Thomas Griesbeck</a> on <a href=\"https://unsplash.com/photos/white-particles-closeup-photography-FytijU4pB_w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'snow-showers-night':\t'Photo by <a href=\"https://unsplash.com/@kyddvisuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Dillon Kydd</a> on <a href=\"https://unsplash.com/photos/a-black-and-white-photo-of-snow-falling-7o7m1xCEiY8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'thunder-rain':\t'Photo by <a href=\"https://unsplash.com/@remi_anton?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Remi Clinton</a> on <a href=\"https://unsplash.com/photos/lightning-on-green-painted-wall-wg4R2xF2HLg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'thunder-showers-day': 'Photo by <a href=\"https://unsplash.com/@may_anaya?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">May Rubio</a> on <a href=\"https://unsplash.com/photos/a-lightning-bolt-is-seen-in-the-sky-over-a-city-hhvXZC4jML8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'thunder-showers-night': 'Photo by <a href=\"https://unsplash.com/@navalrathore_10?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Naval Rathore</a> on <a href=\"https://unsplash.com/photos/lightning-striking-a-city-v7ztdGK60Js?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'rain': 'Photo by <a href=\"https://unsplash.com/@r_shayesrehpour?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">reza shayestehpour</a> on <a href=\"https://unsplash.com/photos/grayscale-photography-of-raindrops-Nw_D8v79PM4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'showers-day': 'Photo by <a href=\"https://unsplash.com/@mad_maxxy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Shutter Verse</a> on <a href=\"https://unsplash.com/photos/a-rain-soaked-window-with-trees-in-the-background-AuTZAjMj6Lg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\t\n    'showers-night': 'Photo by <a href=\"https://unsplash.com/@maxvdo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Max van den Oetelaar</a> on <a href=\"https://unsplash.com/photos/a-window-with-rain-drops-on-it-at-night-1e60bqR1Ar0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\t\n    'fog': 'Photo by <a href=\"https://unsplash.com/@pueblovista?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Paul Pastourmatzis</a> on <a href=\"https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'wind': 'Photo by <a href=\"https://unsplash.com/@mahkeo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Khamkéo</a> on <a href=\"https://unsplash.com/photos/trees-with-wind-photo-WtwSsqwYlA0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'cloudy':\t'Photo by <a href=\"https://unsplash.com/@mahkeo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Khamkéo</a> on <a href=\"https://unsplash.com/photos/trees-with-wind-photo-WtwSsqwYlA0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'partly-cloudy-day': 'Photo by <a href=\"https://unsplash.com/@abaid007?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Abaidullah bhatti</a> on <a href=\"https://unsplash.com/photos/a-plane-flying-through-a-cloudy-blue-sky-cNApBGj64gI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'partly-cloudy-night': 'Photo by <a href=\"https://unsplash.com/@mnvshr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Manav Sharma</a> on <a href=\"https://unsplash.com/photos/the-moon-is-seen-through-the-dark-clouds-eZ5JnE5_GeI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\t\n    'clear-day': 'Photo by <a href=\"https://unsplash.com/@groovelanddesigns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Grooveland Designs</a> on <a href=\"https://unsplash.com/photos/blue-sky-with-white-sun-zjoydJb17mE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'clear-night': 'Photo by <a href=\"https://unsplash.com/@hdbernd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Bernd 📷 Dittrich</a> on <a href=\"https://unsplash.com/photos/a-half-moon-in-a-dark-blue-sky-9Z1Ima3P3ww?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'hail': 'Photo by <a href=\"https://unsplash.com/@hdbernd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Bernd 📷 Dittrich</a> on <a href=\"https://unsplash.com/photos/a-half-moon-in-a-dark-blue-sky-9Z1Ima3P3ww?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'rain-snow': 'Photo by <a href=\"https://unsplash.com/@alexblakephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Alex Otto</a> on <a href=\"https://unsplash.com/photos/silver-and-red-necklace-with-pendant-cGBqLVykbnA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'rain-snow-showers-day': 'Photo by <a href=\"https://unsplash.com/@s_art_media?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">S-Art Media</a> on <a href=\"https://unsplash.com/photos/a-wet-road-in-the-middle-of-a-forest-KdgXoYhYrcQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'rain-snow-showers-night': 'Photo by <a href=\"https://unsplash.com/@rlldied?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Valeria Nikitina</a> on <a href=\"https://unsplash.com/photos/a-street-light-with-a-lot-of-snow-on-it-MVK6qMBw6o8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'sleet': 'Photo by <a href=\"https://unsplash.com/@jbtzxclsv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Jodie Walton</a> on <a href=\"https://unsplash.com/photos/a-street-that-has-some-snow-on-it-49YvBN9MbEM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'thunder': 'Photo by <a href=\"https://unsplash.com/@lc_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Leon Contreras</a> on <a href=\"https://unsplash.com/photos/lightning-illustration-qpdfU6vehgs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n    'idle': 'Photo by <a href=\"https://unsplash.com/@nasa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">NASA</a> on <a href=\"https://unsplash.com/photos/hurricane-as-seen-from-space-5477L9Z5eqI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>',\n  }\n\n\n  function addListeners() {\n    // Add Event Listeners\n    submitButton.addEventListener('click', async () => {\n      fadeToBlack();\n      const value = inputField.value;\n      submitButton.classList.add(\"clicked\");\n      submitButton.addEventListener('transitionend', () => {\n        submitButton.classList.remove(\"clicked\");\n      });\n      if (value) {\n        const data = await _weatherAPI_js__WEBPACK_IMPORTED_MODULE_0__.APIHandler.getWeatherData(value);\n        console.log(FormData)\n        showWeather(data);\n      }\n      fadeFromBlack();\n    });\n  }\n\n  function fadeToBlack() {\n    fadeLayer.classList.add(\"fade\");\n  }\n\n  function fadeFromBlack() {\n    fadeLayer.classList.remove(\"fade\");\n  }\n\n  function createSvg(rawData, size) {\n    const adjustedSvg = rawData.replaceAll(\"#000\", \"#ffffff\");\n    const parser = new DOMParser();\n    const svgDoc = parser.parseFromString(adjustedSvg, \"image/svg+xml\");\n    const svg = svgDoc.documentElement;\n    svg.style.height = `${size}rem`;\n    svg.style.width = `${size}rem`;\n    svg.style.fill = '#ffffff';\n    return svg;\n  }\n\n  function showWeather(data) {\n    console.log(data)\n    const img = weatherImages(`./${data.currentIcon}.webp`);\n    const svg = createSvg(weatherIcons(`./${data.currentIcon}.svg`), 6);\n    document.body.style.background = `url(${img})`;\n    while (svgContainer.firstChild) {\n      svgContainer.removeChild(svgContainer.firstChild);\n    }\n    svgContainer.appendChild(svg);\n    for (const key of Object.keys(data.conditions)) {\n      document.querySelector(`#${key}`).textContent = data.conditions[key];\n    }\n    while (weeklyOverview.firstChild) {\n      weeklyOverview.removeChild(weeklyOverview.firstChild);\n    }\n    progressCurrent.style.width = `${data.progress}%`;\n    sun.style.left = `calc(${data.progress}% - 1rem)`;\n    data.days.forEach(day => {\n      const dayData = addDay(day);\n      weeklyOverview.appendChild(dayData);\n    });\n    credits.innerHTML = conditionImages[data.currentIcon];\n    location.style.display = 'grid';\n    currentCondition.style.display = 'flex';\n    additionalInformation.style.display ='flex';\n    weeklyOverview.style.display = 'grid';\n  }\n\n  function addDay(day) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"day\")\n    // --- day-date ---\n    const dayDate = document.createElement(\"div\");\n    dayDate.classList.add(\"day-date\");\n\n    const weekdayDiv = document.createElement(\"div\");\n    weekdayDiv.classList.add(\"weekday\");\n    weekdayDiv.textContent = day.day;\n\n    const dateDiv = document.createElement(\"div\");\n    dateDiv.classList.add(\"date\");\n    dateDiv.textContent = day.datetime;\n\n    // Append weekday and date to day-date\n    dayDate.appendChild(weekdayDiv);\n    dayDate.appendChild(dateDiv);\n\n    // --- day-svg-temp ---\n    const daySvgTemp = document.createElement(\"div\");\n    daySvgTemp.classList.add(\"day-svg-temp\");\n    \n    const daySvg = document.createElement(\"div\");\n    daySvg.classList.add(\"day-svg\");\n    const svg = createSvg(weatherIcons(`./${day.icon}.svg`), 3);\n    daySvg.appendChild(svg);\n\n    const temp = document.createElement(\"div\");\n    temp.textContent = day.temp;\n    temp.classList.add('day-temp');\n\n    // Append svg and temps to day-svg-temp\n    daySvgTemp.appendChild(daySvg);\n    daySvgTemp.appendChild(temp);\n\n    // --- conditions ---\n    const conditions = document.createElement(\"div\");\n    conditions.classList.add(\"day-conditions\");\n    conditions.textContent = day.conditions;\n\n    // --- minmax ---\n    const minmax = document.createElement(\"div\");\n    minmax.classList.add(\"day-minmax\");\n    minmax.textContent = `Min: ${day.tempmin} Max: ${day.tempmax}`;\n\n    // --- Assemble all into container ---\n    container.appendChild(dayDate);\n    container.appendChild(daySvgTemp);\n    container.appendChild(conditions);\n    container.appendChild(minmax);\n    \n    return container;\n  }\n\n  return { addListeners }\n})();\n\n\n\n//# sourceURL=webpack://odin-weather/./src/userInterface.js?\n}");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   APIHandler: () => (/* binding */ APIHandler)\n/* harmony export */ });\nconst APIHandler = (function () {\n  const API_KEY = \"LDP7WJSY4PZF6W34YDDQ2J9D7\";\n\n  let tempUnit = \"celsius\";\n  // Do API stuff\n\n  async function getWeatherData(location) {\n    try {\n      const response = await fetch(\n        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`\n      );\n      const rawWeatherData = await response.json();\n      const weatherData = handleWeatherData(rawWeatherData);\n      return weatherData;\n    } catch (err) {\n      console.log(err);\n    }\n  }\n\n  function handleWeatherData(rawWeatherData) {\n    const times = getLocalSunTimes(rawWeatherData.tzoffset, rawWeatherData.currentConditions.sunriseEpoch, rawWeatherData.currentConditions.sunsetEpoch)\n    const weatherData = {\n      currentIcon: rawWeatherData.currentConditions.icon,\n      progress: times.progress,\n      conditions: {\n        resolvedAddress: rawWeatherData.resolvedAddress,\n        time: times.time,\n        sunrise: times.sunrise,\n        sunset: times.sunset,\n        difference: times.difference,\n        temp: adjustTemp(rawWeatherData.currentConditions.temp),\n        feelslike: `Feels like ${adjustTemp(rawWeatherData.currentConditions.feelslike)}`,\n        conditions: rawWeatherData.currentConditions.conditions,\n        precipitation: announcePrecipitation(\n          rawWeatherData.currentConditions.preciptype,\n          rawWeatherData.currentConditions.precipprob,\n        ),\n        humidity: rawWeatherData.currentConditions.humidity,\n        wind: announceWind(\n          rawWeatherData.currentConditions.windspeed,\n          rawWeatherData.currentConditions.winddir\n        ),\n        uvindex: uvIndex(rawWeatherData.currentConditions.uvindex),\n      },\n      days: getDays(rawWeatherData.days),\n    };\n    console.log(weatherData);\n    return weatherData;\n  }\n\n  function getWeekday(dateString) {\n    const date = new Date(dateString);\n    const weekdays = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"];\n    return weekdays[date.getDay()];\n  }\n\n  function getDays(days) {\n    const forecast = new Array();\n    for (let i = 1; i < 6; i++) {\n      const day = {\n        day: getWeekday(days[i].datetime),\n        datetime: days[i].datetime,\n        temp: adjustTemp(days[i].temp),\n        tempmax: adjustTemp(days[i].tempmax),\n        tempmin: adjustTemp(days[i].tempmin),\n        conditions: days[i].conditions,\n        precipitation: announcePrecipitation(\n          days[i].preciptype,\n          days[i].precipprob,\n        ),\n        icon: days[i].icon,\n      }\n      forecast.push(day);\n    }\n    return forecast;\n  }\n\n  function getLocalSunTimes(offsetHours, sunriseEpoch, sunsetEpoch) {\n    // normalize inputs\n    const offsetMilliseconds = Number(offsetHours) * 3600 * 1000;\n    const nowMilliseconds = Date.now(); \n\n    const getTime = (milliseconds) => {\n      const d = new Date(milliseconds);\n      return { h: d.getUTCHours(), m: d.getUTCMinutes() };\n    };\n\n    const localNowMilliseconds = nowMilliseconds + offsetMilliseconds;\n    const sunriseMillisecondsLocal = Number(sunriseEpoch) * 1000 + offsetMilliseconds;\n    const sunsetMillisecondsLocal  = Number(sunsetEpoch)  * 1000 + offsetMilliseconds;\n\n    const nowClock = getTime(localNowMilliseconds);\n    const sunriseClock = getTime(sunriseMillisecondsLocal);\n    const sunsetClock = getTime(sunsetMillisecondsLocal);\n\n    const totalDayMilliseconds = sunsetMillisecondsLocal - sunriseMillisecondsLocal;      \n    const elapsedMilliseconds  = localNowMilliseconds - sunriseMillisecondsLocal;        \n    const untilSunsetMilliseconds = sunsetMillisecondsLocal - localNowMilliseconds;      \n\n    // progress percent (clamped 0..100)\n    let progress = 0;\n    if (totalDayMilliseconds > 0) {\n      progress = Math.round((elapsedMilliseconds / totalDayMilliseconds) * 100);\n      progress = Math.max(0, Math.min(100, progress));\n    }\n\n    // convert a milliseconds duration -> hours & minutes (keeps sign info)\n    const getFormattedTime = (milliseconds) => {\n      const sign = milliseconds < 0 ? -1 : 1;\n      const a = Math.abs(milliseconds);\n      const hours = Math.floor(a / (3600 * 1000));\n      const minutes = Math.floor((a % (3600 * 1000)) / (60 * 1000));\n      return { sign, hours, minutes };\n    };\n\n    const until = getFormattedTime(Math.max(0, untilSunsetMilliseconds));\n\n    const pad = (n) => String(n).padStart(2, '0');\n\n    return {\n      time: `Current time: ${pad(nowClock.h)}:${pad(nowClock.m)}`,                        \n      sunrise: `${pad(sunriseClock.h)}:${pad(sunriseClock.m)}`,                \n      sunset: `${pad(sunsetClock.h)}:${pad(sunsetClock.m)}`,                 \n      difference: `Sunset in: ${pad(until.hours)}h ${pad(until.minutes)}m`,\n      progress: progress,\n    };\n  }\n\n\n  function announcePrecipitation(type, propability) {\n    if (type === null) {\n      return 'Precipitation: None';\n    } else {\n      const precipitationType = String(type).charAt(0).toUpperCase() + String(type).slice(1);\n      return `${precipitationType}: ${propability}%`;\n    }\n  }\n\n  function announceWind(speed, direction) {\n    const directions = [\n      \"North\",\n      \"Northeast\",\n      \"East\",\n      \"Southeast\",\n      \"South\",\n      \"Southwest\",\n      \"West\",\n      \"Northwest\",\n    ];\n    const index = Math.round(direction / 45) % 8;\n    return `Wind: ${speed}m/s ${directions[index]}`;\n  }\n\n  function adjustTemp(temp) {\n    if (tempUnit === \"celsius\") {\n      const celsiusTemp = (((parseFloat(temp) - 32) * 5) / 9).toFixed(1);\n      return `${celsiusTemp}°C`;\n    } else {\n      return `${temp}°F`;\n    }\n  }\n\n  function uvIndex(uv) {\n    if (uv <= 2) {\n      return `${uv} (Low)`;\n    } else if (uv <= 5) {\n      return `${uv} (Moderate)`;\n    } else if (uv <= 7) {\n      return `${uv} (High)`;\n    } else if (uv <= 10) {\n      return `${uv} (Very High)`;\n    } else {\n      return `${uv} (Extreme)`;\n    }\n  }\n\n  function setTempUnit(unit) {\n    tempUnit = unit;\n  }\n\n  return { getWeatherData, setTempUnit };\n})();\n\n\n\n\n//# sourceURL=webpack://odin-weather/./src/weatherAPI.js?\n}");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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