(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vuePicker", [], factory);
	else if(typeof exports === 'object')
		exports["vuePicker"] = factory();
	else
		root["vuePicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vueCityPicker = __webpack_require__(1);

var _vueCityPicker2 = _interopRequireDefault(_vueCityPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CityPicker = {
	install: function install(Vue, options) {
		Vue.component(_vueCityPicker2.default.name, _vueCityPicker2.default);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(CityPicker);
}

exports.default = _vueCityPicker2.default;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_city_picker_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_city_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_city_picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19793e5a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_vue_city_picker_vue__ = __webpack_require__(13);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19793e5a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_city_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19793e5a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_vue_city_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\vue-city-picker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19793e5a", Component.options)
  } else {
    hotAPI.reload("data-v-19793e5a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("44bafc85", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19793e5a\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue-city-picker.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19793e5a\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue-city-picker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _betterScroll = __webpack_require__(9);

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _vuePicker = __webpack_require__(10);

var _vuePicker2 = _interopRequireDefault(_vuePicker);

var _cityData = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_NAME = 'vue-city-picker'; //
//
//
//
//
//
//


exports.default = {
	name: COMPONENT_NAME,
	components: {
		vuePicker: _vuePicker2.default
	},
	props: {
		title: {
			type: String,
			default: '请选择'
		},
		cancelTxt: {
			type: String,
			default: '取消'
		},
		confirmTxt: {
			type: String,
			default: '确认'
		},
		selectedIndex: {
			type: Array,
			default: function _default() {
				return [0, 0, 0];
			}
		},
		data: {
			type: Array,
			default: function _default() {
				return [];
			}
		}
	},
	computed: {
		linkageData: function linkageData() {
			var _this = this;

			this.data = this.data.length > 0 ? this.data : [_cityData.province, _cityData.city, _cityData.area];

			var provinceList = this.data[0];

			var cityList = this.data[1].filter(function (item) {
				return item.parentId === provinceList[_this.tempIndex[0]].value;
			});

			var areaList = this.data[2].filter(function (item) {
				return item.parentId === cityList[_this.tempIndex[1]].value;
			});

			return [provinceList, cityList, areaList];
		}
	},

	data: function data() {
		return {
			tempIndex: [0, 0, 0]
		};
	},
	watch: {
		linkageData: function linkageData() {
			this.$refs.picker.refresh();
		}
	},
	methods: {
		show: function show() {
			this.$refs.picker.show();
		},
		handleSelect: function handleSelect() {
			this.$emit.apply(this, ['select'].concat(Array.prototype.slice.call(arguments)));
		},
		handleChange: function handleChange(i, newIndex) {
			if (newIndex !== this.tempIndex[i]) {
				for (var j = 2; j > i; j--) {
					this.tempIndex.splice(j, 1, 0);
					this.$refs.picker.scrollTo(j, 0);
				}
				this.tempIndex.splice(i, 1, newIndex);
			}
		}
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * better-normal-scroll v1.4.0
 * (c) 2016-2017 ustbhuangyi
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BScroll = factory());
}(this, (function () { 'use strict';

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    var fired = false;

    function magic() {
      this.off(type, magic);

      if (!fired) {
        fired = true;
        fn.apply(context, arguments);
      }
    }
    // 将参数中的回调函数挂载在magic对象的fn属性上,为了执行off方法的时候，暴露对应的函数方法
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      // 移除通过on或者once绑定的回调函数
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

var elementStyle = document.createElement('div').style;

var vendor = function () {
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

var transform = prefixStyle('transform');

var hasPerspective = prefixStyle('perspective') in elementStyle;
var hasTouch = 'ontouchstart' in window;
var hasTransform = transform !== false;
var hasTransition = prefixStyle('transition') in elementStyle;

var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionProperty: prefixStyle('transitionProperty'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var target = e.target;

  if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
    var ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
    // cancelable 设置为 false 是为了解决和 fastclick 冲突问题
    ev.initEvent('click', true, false);
    ev._constructed = true;
    target.dispatchEvent(ev);
  }
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  bounce: true,
  bounceTime: 700,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.001,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        break;
      case 'touchmove':
      case 'mousemove':
        this._move(e);
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e);
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
          }
          e.stopPropagation();
        }
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = scrollerRect.width;
    this.scrollerHeight = scrollerRect.height;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = 0;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = 0;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };

  BScroll.prototype._watchTransition = function () {
    var isInTransition = false;
    var me = this;
    var prePointerEvents = this.scroller.style.pointerEvents || 'auto';
    Object.defineProperty(this, 'isInTransition', {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        if (isInTransition) {
          me.scroller.style.pointerEvents = 'none';
        } else {
          me.scroller.style.pointerEvents = prePointerEvents;
        }
      }
    });
  };
}

var ease = {
	// easeOutQuint
	swipe: {
		style: 'cubic-bezier(0.23, 1, 0.32, 1)',
		fn: function fn(t) {
			return 1 + --t * t * t * t * t;
		}
	},
	// easeOutQuard
	swipeBounce: {
		style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		fn: function fn(t) {
			return t * (2 - t);
		}
	},
	// easeOutQuart
	bounce: {
		style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		fn: function fn(t) {
			return 1 - --t * t * t * t;
		}
	}
};

function momentum(current, start, time, lowerMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? lowerMargin - wrapperSize / rate * speed : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > 0) {
    destination = wrapperSize ? wrapperSize / rate * speed : 0;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

var requestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
    this.movingDirectionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    // Slow down or stop if outside of the boundaries
    if (newX > 0 || newX < this.maxScrollX) {
      if (this.options.bounce) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > 0 ? 0 : this.maxScrollX;
      }
    }
    if (newY > 0 || newY < this.maxScrollY) {
      if (this.options.bounce) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > 0 ? 0 : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === 1) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > 1) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    var preventClick = this.stopFromTransition;
    this.stopFromTransition = false;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }
    this.isInTransition = false;
    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.className === 'wheel-scroll') {
          var index = Math.abs(Math.round(newY / this.itemHeight));
          var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
      } else {
        if (!preventClick) {
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click) {
            click(e);
          }
        }
      }
      this.trigger('scrollCancel');
      return;
    }

    this.scrollTo(newX, newY);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
    this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

    this.endTime = getNow();

    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.abs(this.y / this.itemHeight) | 0;
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }

    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      if (!me.isInTransition) {
        return;
      }
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionProperty = function () {
    var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

    this.scrollerStyle[style.transitionProperty] = property;
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    if (!this.pulling && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
    }
  };

  BScroll.prototype._translate = function (x, y) {
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY);

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;

      me._translate(newX, newY);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === 3) {
        me.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionProperty();
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === 3) {
        this._startProbe();
      }

      if (this.options.wheel) {
        if (y > 0) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.abs(y / this.itemHeight) | 0;
        }
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && el.className !== 'wheel-item') {
      return;
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    if (!this.hasHorizontalScroll || x > 0) {
      x = 0;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    if (!this.hasVerticalScroll || y > 0) {
      y = 0;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this._removeDOMEvents();
    // remove custom events
    this._events = {};

    if (this.options.scrollbar) {
      this._removeScrollBars();
    }

    this.destroyed = true;
    this.trigger('destroy');
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 0) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      var initPage = snap.loop ? 1 : 0;
      _this.goToPage(_this.currentPage.pageX || initPage, _this.currentPage.pageY || 0, 0);

      // Update snap threshold if needed
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (_this.currentPage.pageX === 0) {
          _this.goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
        }
        if (_this.currentPage.pageX === _this.pages.length - 1) {
          _this.goToPage(1, _this.currentPage.pageY, 0);
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this.goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > 0) {
      x = 0;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > 0) {
      y = 0;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype.goToPage = function (x, y, time) {
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    var snap = this.options.snap;
    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this.goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this.goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    return this.options.snap && this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function (index) {
    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar$fa = this.options.scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      var indicator = this.indicators[i];
      indicator.remove();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }
}

Indicator.prototype.refresh = function () {
  this.transitionTime();
  this._calculate();
  this.updatePosition();
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.remove = function () {
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = 3;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    if (this.y > threshold && !this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
      this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);
    }

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = 3;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;


    this.on('scroll', checkToEnd);

    function checkToEnd(pos) {
      if (this.movingDirectionY === 1 && pos.y <= this.maxScrollY + threshold) {
        this.trigger('pullingUp');
        this.pullupWatching = false;
        this.off('scroll', checkToEnd);
      }
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this = this;

    if (this.isInTransition) {
      this.once('scrollEnd', function () {
        _this._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };
}

function warn(msg) {
  console.error("[BScroll warn]: " + msg);
}

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('can not resolve the wrapper dom');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('the wrapper need at least one child element to be scroller');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);

BScroll.Version = '1.4.0';

return BScroll;

})));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["vuePicker"] = factory();else root["vuePicker"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "/dist/";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _vuePicker = __webpack_require__(1);

      var _vuePicker2 = _interopRequireDefault(_vuePicker);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var Picker = {
        install: function install(Vue, options) {
          Vue.component(_vuePicker2.default.name, _vuePicker2.default);
        }
      };

      if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(Picker);
      }

      exports.default = _vuePicker2.default;

      /***/
    },
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_picker_vue__ = __webpack_require__(8);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_picker_vue__);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41037e3b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_vue_picker_vue__ = __webpack_require__(10);
      var disposed = false;
      function injectStyle(ssrContext) {
        if (disposed) return;
        __webpack_require__(2);
      }
      var normalizeComponent = __webpack_require__(7);
      /* script */

      /* template */

      /* template functional */
      var __vue_template_functional__ = false;
      /* styles */
      var __vue_styles__ = injectStyle;
      /* scopeId */
      var __vue_scopeId__ = "data-v-41037e3b";
      /* moduleIdentifier (server only) */
      var __vue_module_identifier__ = null;
      var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_vue_picker_vue___default.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41037e3b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_vue_picker_vue__["a" /* default */], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
      Component.options.__file = "src\\vue-picker.vue";
      if (Component.esModule && Object.keys(Component.esModule).some(function (key) {
        return key !== "default" && key.substr(0, 2) !== "__";
      })) {
        console.error("named exports are not supported in *.vue files.");
      }

      /* hot reload */
      if (false) {
        (function () {
          var hotAPI = require("vue-hot-reload-api");
          hotAPI.install(require("vue"), false);
          if (!hotAPI.compatible) return;
          module.hot.accept();
          if (!module.hot.data) {
            hotAPI.createRecord("data-v-41037e3b", Component.options);
          } else {
            hotAPI.reload("data-v-41037e3b", Component.options);
            ' + ';
          }
          module.hot.dispose(function (data) {
            disposed = true;
          });
        })();
      }

      /* harmony default export */__webpack_exports__["default"] = Component.exports;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      // style-loader: Adds some css to the DOM by adding a <style> tag

      // load the styles
      var content = __webpack_require__(3);
      if (typeof content === 'string') content = [[module.i, content, '']];
      if (content.locals) module.exports = content.locals;
      // add the styles to the DOM
      var update = __webpack_require__(5)("1c2b669c", content, false);
      // Hot Module Replacement
      if (false) {
        // When the styles change, update the <style> tags
        if (!content.locals) {
          module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41037e3b\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue-picker.vue", function () {
            var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41037e3b\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./vue-picker.vue");
            if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
            update(newContent);
          });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function () {
          update();
        });
      }

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      exports = module.exports = __webpack_require__(4)(undefined);
      // imports


      // module
      exports.push([module.i, "\n.border-bottom-1px[data-v-41037e3b], .border-top-1px[data-v-41037e3b] {\r\n    position: relative;\n}\n.border-bottom-1px[data-v-41037e3b]:after, .border-bottom-1px[data-v-41037e3b]:before, .border-top-1px[data-v-41037e3b]:after, .border-top-1px[data-v-41037e3b]:before {\r\n    position: absolute;\r\n    display: block;\r\n    content: '';\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\n}\n.border-top-1px[data-v-41037e3b]:before {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n\t-webkit-transform-origin: 0 top;\r\n\t        transform-origin: 0 top;;\r\n    border-top: 1px solid #ebebeb;\n}\n.border-bottom-1px[data-v-41037e3b]:after {\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n\t-webkit-transform-origin: 0 bottom;\r\n\t        transform-origin: 0 bottom;;\r\n\tborder-bottom: 1px solid #ebebeb;\n}\n@media (-webkit-min-device-pixel-ratio:2), (min-device-pixel-ratio:2) {\n.border-top-1px[data-v-41037e3b]:before {\r\n        width: 200%;\r\n        -webkit-transform: scale(.5) translateZ(0);\r\n                transform: scale(.5) translateZ(0);\n}\n.border-bottom-1px[data-v-41037e3b]:after {\r\n        width: 200%;\r\n        -webkit-transform: scale(.5) translateZ(0);\r\n                transform: scale(.5) translateZ(0);\n}\n}\n@media (-webkit-min-device-pixel-ratio:3), (min-device-pixel-ratio:3) {\n.border-top-1px[data-v-41037e3b]:before {\r\n        width: 300%;\r\n        -webkit-transform: scale(.333) translateZ(0);\r\n                transform: scale(.333) translateZ(0);\n}\n.border-bottom-1px[data-v-41037e3b]:after {\r\n        width: 300%;\r\n        -webkit-transform: scale(.333) translateZ(0);\r\n                transform: scale(.333) translateZ(0);\n}\n}\n.picker-fade-enter[data-v-41037e3b], .picker-fade-leave-active[data-v-41037e3b]{\r\n    opacity: 0\n}\n.picker-fade-enter-active[data-v-41037e3b], .picker-fade-leave-active[data-v-41037e3b]{\r\n  \ttransition: all .3s ease-in-out\n}\n.picker-move-enter[data-v-41037e3b], .picker-move-leave-active[data-v-41037e3b]{\r\n    -webkit-transform: translate3d(0, 273px, 0);\r\n            transform: translate3d(0, 273px, 0)\n}\n.picker-move-enter-active[data-v-41037e3b], .picker-move-leave-active[data-v-41037e3b]{\r\n    transition: all .3s ease-in-out\n}\n.picker[data-v-41037e3b] {\r\n\tbackground: rgba(37,38,45,.4);\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t    -ms-user-select: none;\r\n\t        user-select: none;\n}\n.picker--panel[data-v-41037e3b] {\r\n\t\tposition: absolute;\r\n\t\tz-index: 600;\r\n\t\tbottom: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 273px;\r\n\t\tbackground: #fff;\n}\n.picker--choose[data-v-41037e3b] {\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n\t\t-webkit-box-pack: justify;\r\n\t\t    -ms-flex-pack: justify;\r\n\t\t        justify-content: space-between;\r\n\t\t-webkit-box-align: center;\r\n\t\t    -ms-flex-align: center;\r\n\t\t        align-items: center;\r\n\t\t-ms-flex-line-pack: center;\r\n\t\t    align-content: center;\r\n\t\theight: 60px;\n}\n.picker--choose label[data-v-41037e3b]{\r\n    font-size: 14px;\r\n    padding: 0 20px;\r\n    color: #999;\n}\n.picker--choose .confirm[data-v-41037e3b]{\r\n    color: #007bff;\n}\n.picker--choose h4[data-v-41037e3b]{\r\n    font-size: 18px;\r\n    color: #333;\r\n    font-weight: 400;\n}\n.picker--content[data-v-41037e3b] {\r\n\t\tposition: relative;\r\n\t\ttop: 20px;\n}\n.mask[data-v-41037e3b] {\r\n\tposition: absolute;\r\n\tz-index: 10;\r\n    width: 100%;\r\n    height: 68px;\r\n    pointer-events: none;\r\n    -webkit-transform: translateZ(0);\r\n            transform: translateZ(0);\n}\n.mask--top[data-v-41037e3b] {\r\n\t\ttop: 0;\r\n    \tbackground: linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.5));\n}\n.mask--bottom[data-v-41037e3b] {\r\n    \tbottom: 0;\r\n    \tbackground: linear-gradient(0deg, rgba(255,255,255,.9), rgba(255,255,255,.5));\n}\n.wheel[data-v-41037e3b] {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n\ttext-align: center;\r\n    height: 173px;\r\n    overflow: hidden;\r\n    font-size: 20px;\n}\n.wheel ul[data-v-41037e3b] {\r\n    padding: 0;\r\n    margin-top: 68px;\r\n    line-height: 36px;\r\n    list-style: none;\r\n    width: 100%;\n}\n.wheel ul li[data-v-41037e3b]{\r\n    list-style: none;\r\n    height: 36px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    color: #333;\n}\n.wheel--wrapper[data-v-41037e3b] {\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n    \tpadding: 0 16px;\n}\r\n\r\n", ""]);

      // exports


      /***/
    },
    /* 4 */
    /***/function (module, exports) {

      /*
      	MIT License http://www.opensource.org/licenses/mit-license.php
      	Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      module.exports = function (useSourceMap) {
        var list = [];

        // return the list of modules as css string
        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
              return "@media " + item[2] + "{" + content + "}";
            } else {
              return content;
            }
          }).join("");
        };

        // import a list of modules into the list
        list.i = function (modules, mediaQuery) {
          if (typeof modules === "string") modules = [[null, modules, ""]];
          var alreadyImportedModules = {};
          for (var i = 0; i < this.length; i++) {
            var id = this[i][0];
            if (typeof id === "number") alreadyImportedModules[id] = true;
          }
          for (i = 0; i < modules.length; i++) {
            var item = modules[i];
            // skip already imported module
            // this implementation is not 100% perfect for weird media query combinations
            //  when a module is imported multiple times with different media queries.
            //  I hope this will never occur (Hey this way we have smaller bundles)
            if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
              if (mediaQuery && !item[2]) {
                item[2] = mediaQuery;
              } else if (mediaQuery) {
                item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
              }
              list.push(item);
            }
          }
        };
        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || '';
        var cssMapping = item[3];
        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
          });

          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      }

      // Adapted from convert-source-map (MIT)
      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

        return '/*# ' + data + ' */';
      }

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
        Modified by Evan You @yyx990803
      */

      var hasDocument = typeof document !== 'undefined';

      if (typeof DEBUG !== 'undefined' && DEBUG) {
        if (!hasDocument) {
          throw new Error('vue-style-loader cannot be used in a non-browser environment. ' + "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        }
      }

      var listToStyles = __webpack_require__(6);

      /*
      type StyleObject = {
        id: number;
        parts: Array<StyleObjectPart>
      }
      
      type StyleObjectPart = {
        css: string;
        media: string;
        sourceMap: ?string
      }
      */

      var stylesInDom = {/*
                         [id: number]: {
                         id: number,
                         refs: number,
                         parts: Array<(obj?: StyleObjectPart) => void>
                         }
                         */};

      var head = hasDocument && (document.head || document.getElementsByTagName('head')[0]);
      var singletonElement = null;
      var singletonCounter = 0;
      var isProduction = false;
      var noop = function noop() {};

      // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page
      var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

      module.exports = function (parentId, list, _isProduction) {
        isProduction = _isProduction;

        var styles = listToStyles(parentId, list);
        addStylesToDom(styles);

        return function update(newList) {
          var mayRemove = [];
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
          if (newList) {
            styles = listToStyles(parentId, newList);
            addStylesToDom(styles);
          } else {
            styles = [];
          }
          for (var i = 0; i < mayRemove.length; i++) {
            var domStyle = mayRemove[i];
            if (domStyle.refs === 0) {
              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j]();
              }
              delete stylesInDom[domStyle.id];
            }
          }
        };
      };

      function addStylesToDom(styles /* Array<StyleObject> */) {
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];
          if (domStyle) {
            domStyle.refs++;
            for (var j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j](item.parts[j]);
            }
            for (; j < item.parts.length; j++) {
              domStyle.parts.push(addStyle(item.parts[j]));
            }
            if (domStyle.parts.length > item.parts.length) {
              domStyle.parts.length = item.parts.length;
            }
          } else {
            var parts = [];
            for (var j = 0; j < item.parts.length; j++) {
              parts.push(addStyle(item.parts[j]));
            }
            stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
          }
        }
      }

      function createStyleElement() {
        var styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        head.appendChild(styleElement);
        return styleElement;
      }

      function addStyle(obj /* StyleObjectPart */) {
        var update, remove;
        var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]');

        if (styleElement) {
          if (isProduction) {
            // has SSR styles and in production mode.
            // simply do nothing.
            return noop;
          } else {
            // has SSR styles but in dev mode.
            // for some reason Chrome can't handle source map in server-rendered
            // style tags - source maps in <style> only works if the style tag is
            // created and inserted dynamically. So we remove the server rendered
            // styles and inject new ones.
            styleElement.parentNode.removeChild(styleElement);
          }
        }

        if (isOldIE) {
          // use singleton mode for IE9.
          var styleIndex = singletonCounter++;
          styleElement = singletonElement || (singletonElement = createStyleElement());
          update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
          remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
        } else {
          // use multi-style-tag mode in all other cases
          styleElement = createStyleElement();
          update = applyToTag.bind(null, styleElement);
          remove = function remove() {
            styleElement.parentNode.removeChild(styleElement);
          };
        }

        update(obj);

        return function updateStyle(newObj /* StyleObjectPart */) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }
            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      var replaceText = function () {
        var textStore = [];

        return function (index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? '' : obj.css;

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = styleElement.childNodes;
          if (childNodes[index]) styleElement.removeChild(childNodes[index]);
          if (childNodes.length) {
            styleElement.insertBefore(cssNode, childNodes[index]);
          } else {
            styleElement.appendChild(cssNode);
          }
        }
      }

      function applyToTag(styleElement, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          styleElement.setAttribute('media', media);
        }

        if (sourceMap) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
          // http://stackoverflow.com/a/26603875
          css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
        }

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = css;
        } else {
          while (styleElement.firstChild) {
            styleElement.removeChild(styleElement.firstChild);
          }
          styleElement.appendChild(document.createTextNode(css));
        }
      }

      /***/
    },
    /* 6 */
    /***/function (module, exports) {

      /**
       * Translates the list format produced by css-loader into something
       * easier to manipulate.
       */
      module.exports = function listToStyles(parentId, list) {
        var styles = [];
        var newStyles = {};
        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = item[0];
          var css = item[1];
          var media = item[2];
          var sourceMap = item[3];
          var part = {
            id: parentId + ':' + i,
            css: css,
            media: media,
            sourceMap: sourceMap
          };
          if (!newStyles[id]) {
            styles.push(newStyles[id] = { id: id, parts: [part] });
          } else {
            newStyles[id].parts.push(part);
          }
        }
        return styles;
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports) {

      /* globals __VUE_SSR_CONTEXT__ */

      // IMPORTANT: Do NOT use ES2015 features in this file.
      // This module is a runtime utility for cleaner component module output and will
      // be included in the final webpack user bundle.

      module.exports = function normalizeComponent(rawScriptExports, compiledTemplate, functionalTemplate, injectStyles, scopeId, moduleIdentifier /* server only */
      ) {
        var esModule;
        var scriptExports = rawScriptExports = rawScriptExports || {};

        // ES6 modules interop
        var type = _typeof(rawScriptExports.default);
        if (type === 'object' || type === 'function') {
          esModule = rawScriptExports;
          scriptExports = rawScriptExports.default;
        }

        // Vue.extend constructor export interop
        var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

        // render functions
        if (compiledTemplate) {
          options.render = compiledTemplate.render;
          options.staticRenderFns = compiledTemplate.staticRenderFns;
          options._compiled = true;
        }

        // functional template
        if (functionalTemplate) {
          options.functional = true;
        }

        // scopedId
        if (scopeId) {
          options._scopeId = scopeId;
        }

        var hook;
        if (moduleIdentifier) {
          // server build
          hook = function hook(context) {
            // 2.3 injection
            context = context || // cached call
            this.$vnode && this.$vnode.ssrContext || // stateful
            this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
              context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyles) {
              injectStyles.call(this, context);
            }
            // register component module identifier for async chunk inferrence
            if (context && context._registeredComponents) {
              context._registeredComponents.add(moduleIdentifier);
            }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
        } else if (injectStyles) {
          hook = injectStyles;
        }

        if (hook) {
          var functional = options.functional;
          var existing = functional ? options.render : options.beforeCreate;

          if (!functional) {
            // inject component registration as beforeCreate hook
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          } else {
            // for template-only hot-reload because in that case the render fn doesn't
            // go through the normalizer
            options._injectStyles = hook;
            // register for functioal component in vue file
            options.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return existing(h, context);
            };
          }
        }

        return {
          esModule: esModule,
          exports: scriptExports,
          options: options
        };
      };

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _betterScroll = __webpack_require__(9);

      var _betterScroll2 = _interopRequireDefault(_betterScroll);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var STATE_HIDE = 0; //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //

      var STATE_SHOW = 1;

      var COMPONENT_NAME = 'vue-picker';
      var EVENT_SELECT = 'select';
      var EVENT_CANCEL = 'cancel';
      var EVENT_SHOW = 'show';
      var EVENT_CHANGE = 'change';

      exports.default = {
        name: COMPONENT_NAME,
        props: {
          title: {
            type: String,
            default: '请选择'
          },
          cancelTxt: {
            type: String,
            default: '取消'
          },
          confirmTxt: {
            type: String,
            default: '确认'
          },
          selectedIndex: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          data: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            state: STATE_HIDE,
            pickerData: this.data.slice(),
            pickerSelectedIndex: this.selectedIndex,
            pickerSelectedVal: [],
            pickerSelectedText: [],
            pickerSelectedItem: []
          };
        },
        mounted: function mounted() {
          var _this = this;

          this.$nextTick(function () {
            if (!_this.pickerSelectedIndex.length) {
              _this.pickerSelectedIndex = [];
              _this.pickerData.forEach(function (item, index) {
                _this.pickerSelectedIndex[index] = 0;
              });
            }
          });
        },
        methods: {
          show: function show() {
            var _this2 = this;

            if (this.state === STATE_SHOW) {
              return;
            }

            this.state = STATE_SHOW;

            if (!this.wheels) {
              this.$nextTick(function () {
                _this2.wheels = [];
                var wheelWrapper = _this2.$refs.wheelWrapper;
                _this2.pickerData.forEach(function (item, index) {
                  _this2._createWheel(wheelWrapper, index);
                });
              });
            } else {
              this.pickerData.forEach(function (item, index) {
                _this2.wheels[index].enable();
                _this2.wheels[index].wheelTo(_this2.pickerSelectedIndex[index]);
              });
            }
            this.$emit(EVENT_SHOW);
          },
          hide: function hide() {
            var _this3 = this;

            this.state = STATE_HIDE;

            this.pickerData.forEach(function (item, index) {
              _this3.wheels[index].disable();
            });
          },
          cancel: function cancel() {
            this.hide();
            this.$emit(EVENT_CANCEL);
          },
          confirm: function confirm() {
            var _this4 = this;

            if (!this._canConfirm()) {
              return;
            }
            this.hide();
            var changed = false;
            this.pickerData.forEach(function (item, index) {
              var _index = _this4.wheels[index].getSelectedIndex();
              _this4.pickerSelectedIndex[index] = _index; //选择下标
              _this4.pickerSelectedText[index] = _this4.pickerData[index][_index].text; //选中text
              _this4.pickerSelectedVal[index] = _this4.pickerData[index][_index].value; //选中vlue
              _this4.pickerSelectedItem[index] = _this4.pickerData[index][_index]; //选中完整对象
            });

            this.$emit(EVENT_SELECT, this.pickerSelectedVal, this.pickerSelectedIndex, this.pickerSelectedText, this.pickerSelectedItem);
          },
          _createWheel: function _createWheel(wheelWrapper, i) {
            var _this5 = this;

            if (!this.wheels[i]) {

              this.wheels[i] = new _betterScroll2.default(wheelWrapper.children[i], {
                wheel: {
                  selectedIndex: this.pickerSelectedIndex[i]
                },
                probeType: 3
              });

              //滑动结束派发一个event_change	
              this.wheels[i].on('scrollEnd', function () {
                _this5.$emit(EVENT_CHANGE, i, _this5.wheels[i].getSelectedIndex());
              });
            } else {
              this.wheels[i].refresh();
            }

            return this.wheels[i];
          },
          refresh: function refresh() {
            var _this6 = this;

            setTimeout(function () {
              _this6.wheels.forEach(function (wheel, index) {
                wheel.refresh();
              });
            }, 200);
          },
          scrollTo: function scrollTo(index, dist) {
            var wheel = this.wheels[index];
            this.pickerSelectedIndex[index] = dist;
            wheel.wheelTo(dist);
          },
          _canConfirm: function _canConfirm() {
            return this.wheels.every(function (wheel) {
              return !wheel.isInTransition;
            });
          },
          setSelectedIndex: function setSelectedIndex(index) {
            this.pickerSelectedIndex = index;
          },
          setData: function setData(data) {
            this.pickerData = data.slice();
          }
        },
        watch: {
          data: function data(newData) {
            this.setData(newData);
          }
        }
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      /*!
       * better-normal-scroll v1.4.0
       * (c) 2016-2017 ustbhuangyi
       * Released under the MIT License.
       */
      (function (global, factory) {
        true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.BScroll = factory();
      })(this, function () {
        'use strict';

        var slicedToArray = function () {
          function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
              for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"]) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }

            return _arr;
          }

          return function (arr, i) {
            if (Array.isArray(arr)) {
              return arr;
            } else if (Symbol.iterator in Object(arr)) {
              return sliceIterator(arr, i);
            } else {
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
          };
        }();

        var toConsumableArray = function toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }return arr2;
          } else {
            return Array.from(arr);
          }
        };

        function eventMixin(BScroll) {
          BScroll.prototype.on = function (type, fn) {
            var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

            if (!this._events[type]) {
              this._events[type] = [];
            }

            this._events[type].push([fn, context]);
          };

          BScroll.prototype.once = function (type, fn) {
            var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

            var fired = false;

            function magic() {
              this.off(type, magic);

              if (!fired) {
                fired = true;
                fn.apply(context, arguments);
              }
            }
            // 将参数中的回调函数挂载在magic对象的fn属性上,为了执行off方法的时候，暴露对应的函数方法
            magic.fn = fn;

            this.on(type, magic);
          };

          BScroll.prototype.off = function (type, fn) {
            var _events = this._events[type];
            if (!_events) {
              return;
            }

            var count = _events.length;
            while (count--) {
              // 移除通过on或者once绑定的回调函数
              if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
                _events[count][0] = undefined;
              }
            }
          };

          BScroll.prototype.trigger = function (type) {
            var events = this._events[type];
            if (!events) {
              return;
            }

            var len = events.length;
            var eventsCopy = [].concat(toConsumableArray(events));
            for (var i = 0; i < len; i++) {
              var event = eventsCopy[i];

              var _event = slicedToArray(event, 2),
                  fn = _event[0],
                  context = _event[1];

              if (fn) {
                fn.apply(context, [].slice.call(arguments, 1));
              }
            }
          };
        }

        var elementStyle = document.createElement('div').style;

        var vendor = function () {
          var transformNames = {
            webkit: 'webkitTransform',
            Moz: 'MozTransform',
            O: 'OTransform',
            ms: 'msTransform',
            standard: 'transform'
          };

          for (var key in transformNames) {
            if (elementStyle[transformNames[key]] !== undefined) {
              return key;
            }
          }

          return false;
        }();

        function prefixStyle(style) {
          if (vendor === false) {
            return false;
          }

          if (vendor === 'standard') {
            return style;
          }

          return vendor + style.charAt(0).toUpperCase() + style.substr(1);
        }

        function addEvent(el, type, fn, capture) {
          el.addEventListener(type, fn, { passive: false, capture: !!capture });
        }

        function removeEvent(el, type, fn, capture) {
          el.removeEventListener(type, fn, { passive: false, capture: !!capture });
        }

        function offset(el) {
          var left = 0;
          var top = 0;

          while (el) {
            left -= el.offsetLeft;
            top -= el.offsetTop;
            el = el.offsetParent;
          }

          return {
            left: left,
            top: top
          };
        }

        var transform = prefixStyle('transform');

        var hasPerspective = prefixStyle('perspective') in elementStyle;
        var hasTouch = 'ontouchstart' in window;
        var hasTransform = transform !== false;
        var hasTransition = prefixStyle('transition') in elementStyle;

        var style = {
          transform: transform,
          transitionTimingFunction: prefixStyle('transitionTimingFunction'),
          transitionDuration: prefixStyle('transitionDuration'),
          transitionProperty: prefixStyle('transitionProperty'),
          transitionDelay: prefixStyle('transitionDelay'),
          transformOrigin: prefixStyle('transformOrigin'),
          transitionEnd: prefixStyle('transitionEnd')
        };

        var TOUCH_EVENT = 1;
        var MOUSE_EVENT = 2;

        var eventType = {
          touchstart: TOUCH_EVENT,
          touchmove: TOUCH_EVENT,
          touchend: TOUCH_EVENT,

          mousedown: MOUSE_EVENT,
          mousemove: MOUSE_EVENT,
          mouseup: MOUSE_EVENT
        };

        function getRect(el) {
          if (el instanceof window.SVGElement) {
            var rect = el.getBoundingClientRect();
            return {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            };
          } else {
            return {
              top: el.offsetTop,
              left: el.offsetLeft,
              width: el.offsetWidth,
              height: el.offsetHeight
            };
          }
        }

        function preventDefaultException(el, exceptions) {
          for (var i in exceptions) {
            if (exceptions[i].test(el[i])) {
              return true;
            }
          }
          return false;
        }

        function tap(e, eventName) {
          var ev = document.createEvent('Event');
          ev.initEvent(eventName, true, true);
          ev.pageX = e.pageX;
          ev.pageY = e.pageY;
          e.target.dispatchEvent(ev);
        }

        function click(e) {
          var target = e.target;

          if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
            var ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
            // cancelable 设置为 false 是为了解决和 fastclick 冲突问题
            ev.initEvent('click', true, false);
            ev._constructed = true;
            target.dispatchEvent(ev);
          }
        }

        function prepend(el, target) {
          if (target.firstChild) {
            before(el, target.firstChild);
          } else {
            target.appendChild(el);
          }
        }

        function before(el, target) {
          target.parentNode.insertBefore(el, target);
        }

        function getNow() {
          return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
        }

        function extend(target) {
          for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
          }

          for (var i = 0; i < rest.length; i++) {
            var source = rest[i];
            for (var key in source) {
              target[key] = source[key];
            }
          }
          return target;
        }

        var DEFAULT_OPTIONS = {
          startX: 0,
          startY: 0,
          scrollX: false,
          scrollY: true,
          freeScroll: false,
          directionLockThreshold: 5,
          eventPassthrough: '',
          click: false,
          tap: false,
          bounce: true,
          bounceTime: 700,
          momentum: true,
          momentumLimitTime: 300,
          momentumLimitDistance: 15,
          swipeTime: 2500,
          swipeBounceTime: 500,
          deceleration: 0.001,
          flickLimitTime: 200,
          flickLimitDistance: 100,
          resizePolling: 60,
          probeType: 0,
          preventDefault: true,
          preventDefaultException: {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
          },
          HWCompositing: true,
          useTransition: true,
          useTransform: true,
          bindToWrapper: false,
          disableMouse: hasTouch,
          disableTouch: !hasTouch,
          /**
           * for picker
           * wheel: {
           *   selectedIndex: 0,
           *   rotate: 25,
           *   adjustTime: 400
           * }
           */
          wheel: false,
          /**
           * for slide
           * snap: {
           *   loop: false,
           *   el: domEl,
           *   threshold: 0.1,
           *   stepX: 100,
           *   stepY: 100,
           *   listenFlick: true
           * }
           */
          snap: false,
          /**
           * for scrollbar
           * scrollbar: {
           *   fade: true
           * }
           */
          scrollbar: false,
          /**
           * for pull down and refresh
           * pullDownRefresh: {
           *   threshold: 50,
           *   stop: 20
           * }
           */
          pullDownRefresh: false,
          /**
           * for pull up and load
           * pullUpLoad: {
           *   threshold: 50
           * }
           */
          pullUpLoad: false
        };

        function initMixin(BScroll) {
          BScroll.prototype._init = function (el, options) {
            this._handleOptions(options);

            // init private custom events
            this._events = {};

            this.x = 0;
            this.y = 0;
            this.directionX = 0;
            this.directionY = 0;

            this._addDOMEvents();

            this._initExtFeatures();

            this._watchTransition();

            this.refresh();

            if (!this.options.snap) {
              this.scrollTo(this.options.startX, this.options.startY);
            }

            this.enable();
          };

          BScroll.prototype._handleOptions = function (options) {
            this.options = extend({}, DEFAULT_OPTIONS, options);

            this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

            this.options.useTransition = this.options.useTransition && hasTransition;
            this.options.useTransform = this.options.useTransform && hasTransform;

            this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

            // If you want eventPassthrough I have to lock one of the axes
            this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
            this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

            // With eventPassthrough we also need lockDirection mechanism
            this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
            this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

            if (this.options.tap === true) {
              this.options.tap = 'tap';
            }
          };

          BScroll.prototype._addDOMEvents = function () {
            var eventOperation = addEvent;
            this._handleDOMEvents(eventOperation);
          };

          BScroll.prototype._removeDOMEvents = function () {
            var eventOperation = removeEvent;
            this._handleDOMEvents(eventOperation);
          };

          BScroll.prototype._handleDOMEvents = function (eventOperation) {
            var target = this.options.bindToWrapper ? this.wrapper : window;
            eventOperation(window, 'orientationchange', this);
            eventOperation(window, 'resize', this);

            if (this.options.click) {
              eventOperation(this.wrapper, 'click', this, true);
            }

            if (!this.options.disableMouse) {
              eventOperation(this.wrapper, 'mousedown', this);
              eventOperation(target, 'mousemove', this);
              eventOperation(target, 'mousecancel', this);
              eventOperation(target, 'mouseup', this);
            }

            if (hasTouch && !this.options.disableTouch) {
              eventOperation(this.wrapper, 'touchstart', this);
              eventOperation(target, 'touchmove', this);
              eventOperation(target, 'touchcancel', this);
              eventOperation(target, 'touchend', this);
            }

            eventOperation(this.scroller, style.transitionEnd, this);
          };

          BScroll.prototype._initExtFeatures = function () {
            if (this.options.snap) {
              this._initSnap();
            }
            if (this.options.scrollbar) {
              this._initScrollbar();
            }
            if (this.options.pullUpLoad) {
              this._initPullUp();
            }
            if (this.options.pullDownRefresh) {
              this._initPullDown();
            }
          };

          BScroll.prototype.handleEvent = function (e) {
            switch (e.type) {
              case 'touchstart':
              case 'mousedown':
                this._start(e);
                break;
              case 'touchmove':
              case 'mousemove':
                this._move(e);
                break;
              case 'touchend':
              case 'mouseup':
              case 'touchcancel':
              case 'mousecancel':
                this._end(e);
                break;
              case 'orientationchange':
              case 'resize':
                this._resize();
                break;
              case 'transitionend':
              case 'webkitTransitionEnd':
              case 'oTransitionEnd':
              case 'MSTransitionEnd':
                this._transitionEnd(e);
                break;
              case 'click':
                if (this.enabled && !e._constructed) {
                  if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
                    e.preventDefault();
                  }
                  e.stopPropagation();
                }
                break;
            }
          };

          BScroll.prototype.refresh = function () {
            var wrapperRect = getRect(this.wrapper);
            this.wrapperWidth = wrapperRect.width;
            this.wrapperHeight = wrapperRect.height;

            var scrollerRect = getRect(this.scroller);
            this.scrollerWidth = scrollerRect.width;
            this.scrollerHeight = scrollerRect.height;

            var wheel = this.options.wheel;
            if (wheel) {
              this.items = this.scroller.children;
              this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
              if (this.selectedIndex === undefined) {
                this.selectedIndex = wheel.selectedIndex;
              }
              this.options.startY = -this.selectedIndex * this.itemHeight;
              this.maxScrollX = 0;
              this.maxScrollY = -this.itemHeight * (this.items.length - 1);
            } else {
              this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
              this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            }

            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

            if (!this.hasHorizontalScroll) {
              this.maxScrollX = 0;
              this.scrollerWidth = this.wrapperWidth;
            }

            if (!this.hasVerticalScroll) {
              this.maxScrollY = 0;
              this.scrollerHeight = this.wrapperHeight;
            }

            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = offset(this.wrapper);

            this.trigger('refresh');

            this.resetPosition();
          };

          BScroll.prototype.enable = function () {
            this.enabled = true;
          };

          BScroll.prototype.disable = function () {
            this.enabled = false;
          };

          BScroll.prototype._watchTransition = function () {
            var isInTransition = false;
            var me = this;
            var prePointerEvents = this.scroller.style.pointerEvents || 'auto';
            Object.defineProperty(this, 'isInTransition', {
              get: function get() {
                return isInTransition;
              },
              set: function set(newVal) {
                isInTransition = newVal;
                if (isInTransition) {
                  me.scroller.style.pointerEvents = 'none';
                } else {
                  me.scroller.style.pointerEvents = prePointerEvents;
                }
              }
            });
          };
        }

        var ease = {
          // easeOutQuint
          swipe: {
            style: 'cubic-bezier(0.23, 1, 0.32, 1)',
            fn: function fn(t) {
              return 1 + --t * t * t * t * t;
            }
          },
          // easeOutQuard
          swipeBounce: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function fn(t) {
              return t * (2 - t);
            }
          },
          // easeOutQuart
          bounce: {
            style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
            fn: function fn(t) {
              return 1 - --t * t * t * t;
            }
          }
        };

        function momentum(current, start, time, lowerMargin, wrapperSize, options) {
          var distance = current - start;
          var speed = Math.abs(distance) / time;

          var deceleration = options.deceleration,
              itemHeight = options.itemHeight,
              swipeBounceTime = options.swipeBounceTime,
              wheel = options.wheel,
              swipeTime = options.swipeTime;

          var duration = swipeTime;
          var rate = wheel ? 4 : 15;

          var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

          if (wheel && itemHeight) {
            destination = Math.round(destination / itemHeight) * itemHeight;
          }

          if (destination < lowerMargin) {
            destination = wrapperSize ? lowerMargin - wrapperSize / rate * speed : lowerMargin;
            duration = swipeBounceTime;
          } else if (destination > 0) {
            destination = wrapperSize ? wrapperSize / rate * speed : 0;
            duration = swipeBounceTime;
          }

          return {
            destination: Math.round(destination),
            duration: duration
          };
        }

        var DEFAULT_INTERVAL = 100 / 60;

        var requestAnimationFrame = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
          // if all else fails, use setTimeout
          function (callback) {
            return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
          };
        }();

        var cancelAnimationFrame = function () {
          return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
            window.clearTimeout(id);
          };
        }();

        function coreMixin(BScroll) {
          BScroll.prototype._start = function (e) {
            var _eventType = eventType[e.type];
            if (_eventType !== TOUCH_EVENT) {
              if (e.button !== 0) {
                return;
              }
            }
            if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
              return;
            }
            this.initiated = _eventType;

            if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
              e.preventDefault();
            }

            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.movingDirectionX = 0;
            this.movingDirectionY = 0;
            this.directionLocked = 0;

            this._transitionTime();
            this.startTime = getNow();

            if (this.options.wheel) {
              this.target = e.target;
            }

            this.stop();

            var point = e.touches ? e.touches[0] : e;

            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = point.pageX;
            this.pointY = point.pageY;

            this.trigger('beforeScrollStart');
          };

          BScroll.prototype._move = function (e) {
            if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
              return;
            }

            if (this.options.preventDefault) {
              e.preventDefault();
            }

            var point = e.touches ? e.touches[0] : e;
            var deltaX = point.pageX - this.pointX;
            var deltaY = point.pageY - this.pointY;

            this.pointX = point.pageX;
            this.pointY = point.pageY;

            this.distX += deltaX;
            this.distY += deltaY;

            var absDistX = Math.abs(this.distX);
            var absDistY = Math.abs(this.distY);

            var timestamp = getNow();

            // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
            if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
              return;
            }

            // If you are scrolling in one direction lock the other
            if (!this.directionLocked && !this.options.freeScroll) {
              if (absDistX > absDistY + this.options.directionLockThreshold) {
                this.directionLocked = 'h'; // lock horizontally
              } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                this.directionLocked = 'v'; // lock vertically
              } else {
                this.directionLocked = 'n'; // no lock
              }
            }

            if (this.directionLocked === 'h') {
              if (this.options.eventPassthrough === 'vertical') {
                e.preventDefault();
              } else if (this.options.eventPassthrough === 'horizontal') {
                this.initiated = false;
                return;
              }
              deltaY = 0;
            } else if (this.directionLocked === 'v') {
              if (this.options.eventPassthrough === 'horizontal') {
                e.preventDefault();
              } else if (this.options.eventPassthrough === 'vertical') {
                this.initiated = false;
                return;
              }
              deltaX = 0;
            }

            deltaX = this.hasHorizontalScroll ? deltaX : 0;
            deltaY = this.hasVerticalScroll ? deltaY : 0;
            this.movingDirectionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            this.movingDirectionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

            var newX = this.x + deltaX;
            var newY = this.y + deltaY;

            // Slow down or stop if outside of the boundaries
            if (newX > 0 || newX < this.maxScrollX) {
              if (this.options.bounce) {
                newX = this.x + deltaX / 3;
              } else {
                newX = newX > 0 ? 0 : this.maxScrollX;
              }
            }
            if (newY > 0 || newY < this.maxScrollY) {
              if (this.options.bounce) {
                newY = this.y + deltaY / 3;
              } else {
                newY = newY > 0 ? 0 : this.maxScrollY;
              }
            }

            if (!this.moved) {
              this.moved = true;
              this.trigger('scrollStart');
            }

            this._translate(newX, newY);

            if (timestamp - this.startTime > this.options.momentumLimitTime) {
              this.startTime = timestamp;
              this.startX = this.x;
              this.startY = this.y;

              if (this.options.probeType === 1) {
                this.trigger('scroll', {
                  x: this.x,
                  y: this.y
                });
              }
            }

            if (this.options.probeType > 1) {
              this.trigger('scroll', {
                x: this.x,
                y: this.y
              });
            }

            var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

            var pX = this.pointX - scrollLeft;
            var pY = this.pointY - scrollTop;

            if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
              this._end(e);
            }
          };

          BScroll.prototype._end = function (e) {
            if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
              return;
            }
            this.initiated = false;

            if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
              e.preventDefault();
            }

            this.trigger('touchEnd', {
              x: this.x,
              y: this.y
            });

            var preventClick = this.stopFromTransition;
            this.stopFromTransition = false;

            // if configure pull down refresh, check it first
            if (this.options.pullDownRefresh && this._checkPullDown()) {
              return;
            }

            // reset if we are outside of the boundaries
            if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
              return;
            }
            this.isInTransition = false;
            // ensures that the last position is rounded
            var newX = Math.round(this.x);
            var newY = Math.round(this.y);

            // we scrolled less than 15 pixels
            if (!this.moved) {
              if (this.options.wheel) {
                if (this.target && this.target.className === 'wheel-scroll') {
                  var index = Math.abs(Math.round(newY / this.itemHeight));
                  var _offset = Math.round((this.pointY + offset(this.target).top - this.itemHeight / 2) / this.itemHeight);
                  this.target = this.items[index + _offset];
                }
                this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
              } else {
                if (!preventClick) {
                  if (this.options.tap) {
                    tap(e, this.options.tap);
                  }

                  if (this.options.click) {
                    click(e);
                  }
                }
              }
              this.trigger('scrollCancel');
              return;
            }

            this.scrollTo(newX, newY);

            var deltaX = newX - this.absStartX;
            var deltaY = newY - this.absStartY;
            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

            this.endTime = getNow();

            var duration = this.endTime - this.startTime;
            var absDistX = Math.abs(newX - this.startX);
            var absDistY = Math.abs(newY - this.startY);

            // flick
            if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
              this.trigger('flick');
              return;
            }

            var time = 0;
            // start momentum animation if needed
            if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
              var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options) : { destination: newX, duration: 0 };
              var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options) : { destination: newY, duration: 0 };
              newX = momentumX.destination;
              newY = momentumY.destination;
              time = Math.max(momentumX.duration, momentumY.duration);
              this.isInTransition = true;
            } else {
              if (this.options.wheel) {
                newY = Math.round(newY / this.itemHeight) * this.itemHeight;
                time = this.options.wheel.adjustTime || 400;
              }
            }

            var easing = ease.swipe;
            if (this.options.snap) {
              var snap = this._nearestSnap(newX, newY);
              this.currentPage = snap;
              time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
              newX = snap.x;
              newY = snap.y;

              this.directionX = 0;
              this.directionY = 0;
              easing = ease.bounce;
            }

            if (newX !== this.x || newY !== this.y) {
              // change easing function when scroller goes out of the boundaries
              if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                easing = ease.swipeBounce;
              }
              this.scrollTo(newX, newY, time, easing);
              return;
            }

            if (this.options.wheel) {
              this.selectedIndex = Math.abs(this.y / this.itemHeight) | 0;
            }
            this.trigger('scrollEnd', {
              x: this.x,
              y: this.y
            });
          };

          BScroll.prototype._resize = function () {
            var _this = this;

            if (!this.enabled) {
              return;
            }

            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function () {
              _this.refresh();
            }, this.options.resizePolling);
          };

          BScroll.prototype._startProbe = function () {
            cancelAnimationFrame(this.probeTimer);
            this.probeTimer = requestAnimationFrame(probe);

            var me = this;

            function probe() {
              if (!me.isInTransition) {
                return;
              }
              var pos = me.getComputedPosition();
              me.trigger('scroll', pos);
              me.probeTimer = requestAnimationFrame(probe);
            }
          };

          BScroll.prototype._transitionProperty = function () {
            var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

            this.scrollerStyle[style.transitionProperty] = property;
          };

          BScroll.prototype._transitionTime = function () {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.scrollerStyle[style.transitionDuration] = time + 'ms';

            if (this.options.wheel) {
              for (var i = 0; i < this.items.length; i++) {
                this.items[i].style[style.transitionDuration] = time + 'ms';
              }
            }

            if (this.indicators) {
              for (var _i = 0; _i < this.indicators.length; _i++) {
                this.indicators[_i].transitionTime(time);
              }
            }
          };

          BScroll.prototype._transitionTimingFunction = function (easing) {
            this.scrollerStyle[style.transitionTimingFunction] = easing;

            if (this.options.wheel) {
              for (var i = 0; i < this.items.length; i++) {
                this.items[i].style[style.transitionTimingFunction] = easing;
              }
            }

            if (this.indicators) {
              for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
                this.indicators[_i2].transitionTimingFunction(easing);
              }
            }
          };

          BScroll.prototype._transitionEnd = function (e) {
            if (e.target !== this.scroller || !this.isInTransition) {
              return;
            }

            this._transitionTime();
            if (!this.pulling && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
              this.isInTransition = false;
              this.trigger('scrollEnd', {
                x: this.x,
                y: this.y
              });
            }
          };

          BScroll.prototype._translate = function (x, y) {
            if (this.options.useTransform) {
              this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
            } else {
              x = Math.round(x);
              y = Math.round(y);
              this.scrollerStyle.left = x + 'px';
              this.scrollerStyle.top = y + 'px';
            }

            if (this.options.wheel) {
              var _options$wheel$rotate = this.options.wheel.rotate,
                  rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

              for (var i = 0; i < this.items.length; i++) {
                var deg = rotate * (y / this.itemHeight + i);
                this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
              }
            }

            this.x = x;
            this.y = y;

            if (this.indicators) {
              for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
                this.indicators[_i3].updatePosition();
              }
            }
          };

          BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
            var me = this;
            var startX = this.x;
            var startY = this.y;
            var startTime = getNow();
            var destTime = startTime + duration;

            function step() {
              var now = getNow();

              if (now >= destTime) {
                me.isAnimating = false;
                me._translate(destX, destY);

                if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
                  me.trigger('scrollEnd', {
                    x: me.x,
                    y: me.y
                  });
                }
                return;
              }
              now = (now - startTime) / duration;
              var easing = easingFn(now);
              var newX = (destX - startX) * easing + startX;
              var newY = (destY - startY) * easing + startY;

              me._translate(newX, newY);

              if (me.isAnimating) {
                me.animateTimer = requestAnimationFrame(step);
              }

              if (me.options.probeType === 3) {
                me.trigger('scroll', {
                  x: this.x,
                  y: this.y
                });
              }
            }

            this.isAnimating = true;
            cancelAnimationFrame(this.animateTimer);
            step();
          };

          BScroll.prototype.scrollBy = function (x, y) {
            var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

            x = this.x + x;
            y = this.y + y;

            this.scrollTo(x, y, time, easing);
          };

          BScroll.prototype.scrollTo = function (x, y) {
            var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

            this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

            if (!time || this.options.useTransition) {
              this._transitionProperty();
              this._transitionTimingFunction(easing.style);
              this._transitionTime(time);
              this._translate(x, y);

              if (time && this.options.probeType === 3) {
                this._startProbe();
              }

              if (this.options.wheel) {
                if (y > 0) {
                  this.selectedIndex = 0;
                } else if (y < this.maxScrollY) {
                  this.selectedIndex = this.items.length - 1;
                } else {
                  this.selectedIndex = Math.abs(y / this.itemHeight) | 0;
                }
              }
            } else {
              this._animate(x, y, time, easing.fn);
            }
          };

          BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
            if (!el) {
              return;
            }
            el = el.nodeType ? el : this.scroller.querySelector(el);

            if (this.options.wheel && el.className !== 'wheel-item') {
              return;
            }

            var pos = offset(el);
            pos.left -= this.wrapperOffset.left;
            pos.top -= this.wrapperOffset.top;

            // if offsetX/Y are true we center the element to the screen
            if (offsetX === true) {
              offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
            }
            if (offsetY === true) {
              offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
            }

            pos.left -= offsetX || 0;
            pos.top -= offsetY || 0;
            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

            if (this.options.wheel) {
              pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
            }

            this.scrollTo(pos.left, pos.top, time, easing);
          };

          BScroll.prototype.resetPosition = function () {
            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

            var x = this.x;
            if (!this.hasHorizontalScroll || x > 0) {
              x = 0;
            } else if (x < this.maxScrollX) {
              x = this.maxScrollX;
            }

            var y = this.y;
            if (!this.hasVerticalScroll || y > 0) {
              y = 0;
            } else if (y < this.maxScrollY) {
              y = this.maxScrollY;
            }

            if (x === this.x && y === this.y) {
              return false;
            }

            this.scrollTo(x, y, time, easeing);

            return true;
          };

          BScroll.prototype.getComputedPosition = function () {
            var matrix = window.getComputedStyle(this.scroller, null);
            var x = void 0;
            var y = void 0;

            if (this.options.useTransform) {
              matrix = matrix[style.transform].split(')')[0].split(', ');
              x = +(matrix[12] || matrix[4]);
              y = +(matrix[13] || matrix[5]);
            } else {
              x = +matrix.left.replace(/[^-\d.]/g, '');
              y = +matrix.top.replace(/[^-\d.]/g, '');
            }

            return {
              x: x,
              y: y
            };
          };

          BScroll.prototype.stop = function () {
            if (this.options.useTransition && this.isInTransition) {
              this.isInTransition = false;
              var pos = this.getComputedPosition();
              this._translate(pos.x, pos.y);
              if (this.options.wheel) {
                this.target = this.items[Math.round(-pos.y / this.itemHeight)];
              } else {
                this.trigger('scrollEnd', {
                  x: this.x,
                  y: this.y
                });
              }
              this.stopFromTransition = true;
            } else if (!this.options.useTransition && this.isAnimating) {
              this.isAnimating = false;
              this.trigger('scrollEnd', {
                x: this.x,
                y: this.y
              });
              this.stopFromTransition = true;
            }
          };

          BScroll.prototype.destroy = function () {
            this._removeDOMEvents();
            // remove custom events
            this._events = {};

            if (this.options.scrollbar) {
              this._removeScrollBars();
            }

            this.destroyed = true;
            this.trigger('destroy');
          };
        }

        function snapMixin(BScroll) {
          BScroll.prototype._initSnap = function () {
            var _this = this;

            this.currentPage = {};
            var snap = this.options.snap;

            if (snap.loop) {
              var children = this.scroller.children;
              if (children.length > 0) {
                prepend(children[children.length - 1].cloneNode(true), this.scroller);
                this.scroller.appendChild(children[1].cloneNode(true));
              }
            }

            var el = snap.el;
            if (typeof el === 'string') {
              el = this.scroller.querySelectorAll(el);
            }

            this.on('refresh', function () {
              _this.pages = [];

              if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
                return;
              }

              var stepX = snap.stepX || _this.wrapperWidth;
              var stepY = snap.stepY || _this.wrapperHeight;

              var x = 0;
              var y = void 0;
              var cx = void 0;
              var cy = void 0;
              var i = 0;
              var l = void 0;
              var m = 0;
              var n = void 0;
              var rect = void 0;
              if (!el) {
                cx = Math.round(stepX / 2);
                cy = Math.round(stepY / 2);

                while (x > -_this.scrollerWidth) {
                  _this.pages[i] = [];
                  l = 0;
                  y = 0;

                  while (y > -_this.scrollerHeight) {
                    _this.pages[i][l] = {
                      x: Math.max(x, _this.maxScrollX),
                      y: Math.max(y, _this.maxScrollY),
                      width: stepX,
                      height: stepY,
                      cx: x - cx,
                      cy: y - cy
                    };

                    y -= stepY;
                    l++;
                  }

                  x -= stepX;
                  i++;
                }
              } else {
                l = el.length;
                n = -1;

                for (; i < l; i++) {
                  rect = getRect(el[i]);
                  if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
                    m = 0;
                    n++;
                  }

                  if (!_this.pages[m]) {
                    _this.pages[m] = [];
                  }

                  x = Math.max(-rect.left, _this.maxScrollX);
                  y = Math.max(-rect.top, _this.maxScrollY);
                  cx = x - Math.round(rect.width / 2);
                  cy = y - Math.round(rect.height / 2);

                  _this.pages[m][n] = {
                    x: x,
                    y: y,
                    width: rect.width,
                    height: rect.height,
                    cx: cx,
                    cy: cy
                  };

                  if (x > _this.maxScrollX) {
                    m++;
                  }
                }
              }

              var initPage = snap.loop ? 1 : 0;
              _this.goToPage(_this.currentPage.pageX || initPage, _this.currentPage.pageY || 0, 0);

              // Update snap threshold if needed
              var snapThreshold = snap.threshold;
              if (snapThreshold % 1 === 0) {
                _this.snapThresholdX = snapThreshold;
                _this.snapThresholdY = snapThreshold;
              } else {
                _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
                _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
              }
            });

            this.on('scrollEnd', function () {
              if (snap.loop) {
                if (_this.currentPage.pageX === 0) {
                  _this.goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
                }
                if (_this.currentPage.pageX === _this.pages.length - 1) {
                  _this.goToPage(1, _this.currentPage.pageY, 0);
                }
              }
            });

            if (snap.listenFlick !== false) {
              this.on('flick', function () {
                var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

                _this.goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
              });
            }
          };

          BScroll.prototype._nearestSnap = function (x, y) {
            if (!this.pages.length) {
              return { x: 0, y: 0, pageX: 0, pageY: 0 };
            }

            var i = 0;
            // Check if we exceeded the snap threshold
            if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
              return this.currentPage;
            }

            if (x > 0) {
              x = 0;
            } else if (x < this.maxScrollX) {
              x = this.maxScrollX;
            }

            if (y > 0) {
              y = 0;
            } else if (y < this.maxScrollY) {
              y = this.maxScrollY;
            }

            var l = this.pages.length;
            for (; i < l; i++) {
              if (x >= this.pages[i][0].cx) {
                x = this.pages[i][0].x;
                break;
              }
            }

            l = this.pages[i].length;

            var m = 0;
            for (; m < l; m++) {
              if (y >= this.pages[0][m].cy) {
                y = this.pages[0][m].y;
                break;
              }
            }

            if (i === this.currentPage.pageX) {
              i += this.directionX;

              if (i < 0) {
                i = 0;
              } else if (i >= this.pages.length) {
                i = this.pages.length - 1;
              }

              x = this.pages[i][0].x;
            }

            if (m === this.currentPage.pageY) {
              m += this.directionY;

              if (m < 0) {
                m = 0;
              } else if (m >= this.pages[0].length) {
                m = this.pages[0].length - 1;
              }

              y = this.pages[0][m].y;
            }

            return {
              x: x,
              y: y,
              pageX: i,
              pageY: m
            };
          };

          BScroll.prototype.goToPage = function (x, y, time) {
            var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

            var snap = this.options.snap;
            if (x >= this.pages.length) {
              x = this.pages.length - 1;
            } else if (x < 0) {
              x = 0;
            }

            if (y >= this.pages[x].length) {
              y = this.pages[x].length - 1;
            } else if (y < 0) {
              y = 0;
            }

            var posX = this.pages[x][y].x;
            var posY = this.pages[x][y].y;

            time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

            this.currentPage = {
              x: posX,
              y: posY,
              pageX: x,
              pageY: y
            };
            this.scrollTo(posX, posY, time, easing);
          };

          BScroll.prototype.next = function (time, easing) {
            var x = this.currentPage.pageX;
            var y = this.currentPage.pageY;

            x++;
            if (x >= this.pages.length && this.hasVerticalScroll) {
              x = 0;
              y++;
            }

            this.goToPage(x, y, time, easing);
          };

          BScroll.prototype.prev = function (time, easing) {
            var x = this.currentPage.pageX;
            var y = this.currentPage.pageY;

            x--;
            if (x < 0 && this.hasVerticalScroll) {
              x = 0;
              y--;
            }

            this.goToPage(x, y, time, easing);
          };

          BScroll.prototype.getCurrentPage = function () {
            return this.options.snap && this.currentPage;
          };
        }

        function wheelMixin(BScroll) {
          BScroll.prototype.wheelTo = function (index) {
            if (this.options.wheel) {
              this.y = -index * this.itemHeight;
              this.scrollTo(0, this.y);
            }
          };

          BScroll.prototype.getSelectedIndex = function () {
            return this.options.wheel && this.selectedIndex;
          };
        }

        var INDICATOR_MIN_LEN = 8;

        function scrollbarMixin(BScroll) {
          BScroll.prototype._initScrollbar = function () {
            var _this = this;

            var _options$scrollbar$fa = this.options.scrollbar.fade,
                fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa;

            this.indicators = [];
            var indicator = void 0;

            if (this.options.scrollX) {
              indicator = {
                el: createScrollbar('horizontal'),
                direction: 'horizontal',
                fade: fade
              };
              this._insertScrollBar(indicator.el);

              this.indicators.push(new Indicator(this, indicator));
            }

            if (this.options.scrollY) {
              indicator = {
                el: createScrollbar('vertical'),
                direction: 'vertical',
                fade: fade
              };
              this._insertScrollBar(indicator.el);
              this.indicators.push(new Indicator(this, indicator));
            }

            this.on('refresh', function () {
              for (var i = 0; i < _this.indicators.length; i++) {
                _this.indicators[i].refresh();
              }
            });

            if (fade) {
              this.on('scrollEnd', function () {
                for (var i = 0; i < _this.indicators.length; i++) {
                  _this.indicators[i].fade();
                }
              });

              this.on('scrollCancel', function () {
                for (var i = 0; i < _this.indicators.length; i++) {
                  _this.indicators[i].fade();
                }
              });

              this.on('scrollStart', function () {
                for (var i = 0; i < _this.indicators.length; i++) {
                  _this.indicators[i].fade(true);
                }
              });

              this.on('beforeScrollStart', function () {
                for (var i = 0; i < _this.indicators.length; i++) {
                  _this.indicators[i].fade(true, true);
                }
              });
            }
          };

          BScroll.prototype._insertScrollBar = function (scrollbar) {
            this.wrapper.appendChild(scrollbar);
          };

          BScroll.prototype._removeScrollBars = function () {
            for (var i = 0; i < this.indicators.length; i++) {
              var indicator = this.indicators[i];
              indicator.remove();
            }
          };
        }

        function createScrollbar(direction) {
          var scrollbar = document.createElement('div');
          var indicator = document.createElement('div');

          scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
          indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

          indicator.className = 'bscroll-indicator';

          if (direction === 'horizontal') {
            scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
            indicator.style.height = '100%';
            scrollbar.className = 'bscroll-horizontal-scrollbar';
          } else {
            scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
            indicator.style.width = '100%';
            scrollbar.className = 'bscroll-vertical-scrollbar';
          }

          scrollbar.style.cssText += ';overflow:hidden';
          scrollbar.appendChild(indicator);

          return scrollbar;
        }

        function Indicator(scroller, options) {
          this.wrapper = options.el;
          this.wrapperStyle = this.wrapper.style;
          this.indicator = this.wrapper.children[0];
          this.indicatorStyle = this.indicator.style;
          this.scroller = scroller;
          this.direction = options.direction;
          if (options.fade) {
            this.visible = 0;
            this.wrapperStyle.opacity = '0';
          } else {
            this.visible = 1;
          }
        }

        Indicator.prototype.refresh = function () {
          this.transitionTime();
          this._calculate();
          this.updatePosition();
        };

        Indicator.prototype.fade = function (visible, hold) {
          var _this2 = this;

          if (hold && !this.visible) {
            return;
          }

          var time = visible ? 250 : 500;

          visible = visible ? '1' : '0';

          this.wrapperStyle[style.transitionDuration] = time + 'ms';

          clearTimeout(this.fadeTimeout);
          this.fadeTimeout = setTimeout(function () {
            _this2.wrapperStyle.opacity = visible;
            _this2.visible = +visible;
          }, 0);
        };

        Indicator.prototype.updatePosition = function () {
          if (this.direction === 'vertical') {
            var y = Math.round(this.sizeRatioY * this.scroller.y);

            if (y < 0) {
              this.transitionTime(500);
              var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
              this.indicatorStyle.height = height + 'px';
              y = 0;
            } else if (y > this.maxPosY) {
              this.transitionTime(500);
              var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
              this.indicatorStyle.height = _height + 'px';
              y = this.maxPosY + this.indicatorHeight - _height;
            } else {
              this.indicatorStyle.height = this.indicatorHeight + 'px';
            }
            this.y = y;

            if (this.scroller.options.useTransform) {
              this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
            } else {
              this.indicatorStyle.top = y + 'px';
            }
          } else {
            var x = Math.round(this.sizeRatioX * this.scroller.x);

            if (x < 0) {
              this.transitionTime(500);
              var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
              this.indicatorStyle.width = width + 'px';
              x = 0;
            } else if (x > this.maxPosX) {
              this.transitionTime(500);
              var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
              this.indicatorStyle.width = _width + 'px';
              x = this.maxPosX + this.indicatorWidth - _width;
            } else {
              this.indicatorStyle.width = this.indicatorWidth + 'px';
            }

            this.x = x;

            if (this.scroller.options.useTransform) {
              this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
            } else {
              this.indicatorStyle.left = x + 'px';
            }
          }
        };

        Indicator.prototype.transitionTime = function () {
          var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          this.indicatorStyle[style.transitionDuration] = time + 'ms';
        };

        Indicator.prototype.transitionTimingFunction = function (easing) {
          this.indicatorStyle[style.transitionTimingFunction] = easing;
        };

        Indicator.prototype.remove = function () {
          this.wrapper.parentNode.removeChild(this.wrapper);
        };

        Indicator.prototype._calculate = function () {
          if (this.direction === 'vertical') {
            var wrapperHeight = this.wrapper.clientHeight;
            this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
            this.indicatorStyle.height = this.indicatorHeight + 'px';

            this.maxPosY = wrapperHeight - this.indicatorHeight;

            this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
          } else {
            var wrapperWidth = this.wrapper.clientWidth;
            this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
            this.indicatorStyle.width = this.indicatorWidth + 'px';

            this.maxPosX = wrapperWidth - this.indicatorWidth;

            this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
          }
        };

        function pullDownMixin(BScroll) {
          BScroll.prototype._initPullDown = function () {
            // must watch scroll in real time
            this.options.probeType = 3;
          };

          BScroll.prototype._checkPullDown = function () {
            var _options$pullDownRefr = this.options.pullDownRefresh,
                _options$pullDownRefr2 = _options$pullDownRefr.threshold,
                threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
                _options$pullDownRefr3 = _options$pullDownRefr.stop,
                stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

            if (this.y > threshold && !this.pulling) {
              this.pulling = true;
              this.trigger('pullingDown');
              this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);
            }

            return this.pulling;
          };

          BScroll.prototype.finishPullDown = function () {
            this.pulling = false;
            this.resetPosition(this.options.bounceTime, ease.bounce);
          };
        }

        function pullUpMixin(BScroll) {
          BScroll.prototype._initPullUp = function () {
            // must watch scroll in real time
            this.options.probeType = 3;

            this.pullupWatching = false;
            this._watchPullUp();
          };

          BScroll.prototype._watchPullUp = function () {
            if (this.pullupWatching) {
              return;
            }
            this.pullupWatching = true;
            var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
                threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

            this.on('scroll', checkToEnd);

            function checkToEnd(pos) {
              if (this.movingDirectionY === 1 && pos.y <= this.maxScrollY + threshold) {
                this.trigger('pullingUp');
                this.pullupWatching = false;
                this.off('scroll', checkToEnd);
              }
            }
          };

          BScroll.prototype.finishPullUp = function () {
            var _this = this;

            if (this.isInTransition) {
              this.once('scrollEnd', function () {
                _this._watchPullUp();
              });
            } else {
              this._watchPullUp();
            }
          };
        }

        function warn(msg) {
          console.error("[BScroll warn]: " + msg);
        }

        function BScroll(el, options) {
          this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
          if (!this.wrapper) {
            warn('can not resolve the wrapper dom');
          }
          this.scroller = this.wrapper.children[0];
          if (!this.scroller) {
            warn('the wrapper need at least one child element to be scroller');
          }
          // cache style for better performance
          this.scrollerStyle = this.scroller.style;

          this._init(el, options);
        }

        initMixin(BScroll);
        coreMixin(BScroll);
        eventMixin(BScroll);
        snapMixin(BScroll);
        wheelMixin(BScroll);
        scrollbarMixin(BScroll);
        pullDownMixin(BScroll);
        pullUpMixin(BScroll);

        BScroll.Version = '1.4.0';

        return BScroll;
      });

      /***/
    },
    /* 10 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var render = function render() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c("transition", { attrs: { name: "picker-fade" } }, [_c("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.state === 1,
            expression: "state===1"
          }],
          staticClass: "picker",
          on: {
            touchmove: function touchmove($event) {
              $event.preventDefault();
            },
            click: _vm.cancel
          }
        }, [_c("transition", { attrs: { name: "picker-move" } }, [_c("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: _vm.state === 1,
            expression: "state===1"
          }],
          staticClass: "picker--panel",
          on: {
            click: function click($event) {
              $event.stopPropagation();
            }
          }
        }, [_c("div", { staticClass: "picker--choose border-bottom-1px" }, [_c("label", { staticClass: "cancel", on: { click: _vm.cancel } }, [_vm._v(_vm._s(_vm.cancelTxt))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("label", { staticClass: "confirm", on: { click: _vm.confirm } }, [_vm._v(_vm._s(_vm.confirmTxt))])]), _vm._v(" "), _c("div", { staticClass: "picker--content" }, [_c("div", { staticClass: "mask mask--top border-bottom-1px" }), _vm._v(" "), _c("div", { staticClass: "mask mask--bottom border-top-1px" }), _vm._v(" "), _c("div", { ref: "wheelWrapper", staticClass: "wheel--wrapper" }, _vm._l(_vm.pickerData, function (data) {
          return _c("div", { staticClass: "wheel" }, [_c("ul", { staticClass: "wheel-scroll" }, _vm._l(data, function (item) {
            return _c("li", {
              staticClass: "wheel-item",
              attrs: { "data-item": JSON.stringify(item) }
            }, [_vm._v(_vm._s(item.text))]);
          }))]);
        }))])])])], 1)]);
      };
      var staticRenderFns = [];
      render._withStripped = true;
      var esExports = { render: render, staticRenderFns: staticRenderFns
        /* harmony default export */ };__webpack_exports__["a"] = esExports;
      if (false) {
        module.hot.accept();
        if (module.hot.data) {
          require("vue-hot-reload-api").rerender("data-v-41037e3b", esExports);
        }
      }

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var province = exports.province = [{
	value: 110000,
	text: '北京市',
	parentId: 0
}, {
	value: 120000,
	text: '天津市',
	parentId: 0
}, {
	value: 130000,
	text: '河北省',
	parentId: 0
}, {
	value: 140000,
	text: '山西省',
	parentId: 0
}, {
	value: 150000,
	text: '内蒙古自治区',
	parentId: 0
}, {
	value: 210000,
	text: '辽宁省',
	parentId: 0
}, {
	value: 220000,
	text: '吉林省',
	parentId: 0
}, {
	value: 230000,
	text: '黑龙江省',
	parentId: 0
}, {
	value: 310000,
	text: '上海市',
	parentId: 0
}, {
	value: 320000,
	text: '江苏省',
	parentId: 0
}, {
	value: 330000,
	text: '浙江省',
	parentId: 0
}, {
	value: 340000,
	text: '安徽省',
	parentId: 0
}, {
	value: 350000,
	text: '福建省',
	parentId: 0
}, {
	value: 360000,
	text: '江西省',
	parentId: 0
}, {
	value: 370000,
	text: '山东省',
	parentId: 0
}, {
	value: 410000,
	text: '河南省',
	parentId: 0
}, {
	value: 420000,
	text: '湖北省',
	parentId: 0
}, {
	value: 430000,
	text: '湖南省',
	parentId: 0
}, {
	value: 440000,
	text: '广东省',
	parentId: 0
}, {
	value: 450000,
	text: '广西壮族自治区',
	parentId: 0
}, {
	value: 460000,
	text: '海南省',
	parentId: 0
}, {
	value: 500000,
	text: '重庆市',
	parentId: 0
}, {
	value: 510000,
	text: '四川省',
	parentId: 0
}, {
	value: 520000,
	text: '贵州省',
	parentId: 0
}, {
	value: 530000,
	text: '云南省',
	parentId: 0
}, {
	value: 540000,
	text: '西藏自治区',
	parentId: 0
}, {
	value: 610000,
	text: '陕西省',
	parentId: 0
}, {
	value: 620000,
	text: '甘肃省',
	parentId: 0
}, {
	value: 630000,
	text: '青海省',
	parentId: 0
}, {
	value: 640000,
	text: '宁夏回族自治区',
	parentId: 0
}, {
	value: 650000,
	text: '新疆维吾尔自治区',
	parentId: 0
}, {
	value: 710000,
	text: '台湾省',
	parentId: 0
}, {
	value: 810000,
	text: '香港特别行政区',
	parentId: 0
}, {
	value: 820000,
	text: '澳门特别行政区',
	parentId: 0
}];

var city = exports.city = [{
	value: 110100,
	text: '市辖区',
	parentId: 110000
}, {
	value: 110200,
	text: '县',
	parentId: 110000
}, {
	value: 120100,
	text: '市辖区',
	parentId: 120000
}, {
	value: 120200,
	text: '县',
	parentId: 120000
}, {
	value: 130100,
	text: '石家庄市',
	parentId: 130000
}, {
	value: 130200,
	text: '唐山市',
	parentId: 130000
}, {
	value: 130300,
	text: '秦皇岛市',
	parentId: 130000
}, {
	value: 130400,
	text: '邯郸市',
	parentId: 130000
}, {
	value: 130500,
	text: '邢台市',
	parentId: 130000
}, {
	value: 130600,
	text: '保定市',
	parentId: 130000
}, {
	value: 130700,
	text: '张家口市',
	parentId: 130000
}, {
	value: 130800,
	text: '承德市',
	parentId: 130000
}, {
	value: 130900,
	text: '沧州市',
	parentId: 130000
}, {
	value: 131000,
	text: '廊坊市',
	parentId: 130000
}, {
	value: 131100,
	text: '衡水市',
	parentId: 130000
}, {
	value: 140100,
	text: '太原市',
	parentId: 140000
}, {
	value: 140200,
	text: '大同市',
	parentId: 140000
}, {
	value: 140300,
	text: '阳泉市',
	parentId: 140000
}, {
	value: 140400,
	text: '长治市',
	parentId: 140000
}, {
	value: 140500,
	text: '晋城市',
	parentId: 140000
}, {
	value: 140600,
	text: '朔州市',
	parentId: 140000
}, {
	value: 140700,
	text: '晋中市',
	parentId: 140000
}, {
	value: 140800,
	text: '运城市',
	parentId: 140000
}, {
	value: 140900,
	text: '忻州市',
	parentId: 140000
}, {
	value: 141000,
	text: '临汾市',
	parentId: 140000
}, {
	value: 141100,
	text: '吕梁市',
	parentId: 140000
}, {
	value: 150100,
	text: '呼和浩特市',
	parentId: 150000
}, {
	value: 150200,
	text: '包头市',
	parentId: 150000
}, {
	value: 150300,
	text: '乌海市',
	parentId: 150000
}, {
	value: 150400,
	text: '赤峰市',
	parentId: 150000
}, {
	value: 150500,
	text: '通辽市',
	parentId: 150000
}, {
	value: 150600,
	text: '鄂尔多斯市',
	parentId: 150000
}, {
	value: 150700,
	text: '呼伦贝尔市',
	parentId: 150000
}, {
	value: 150800,
	text: '巴彦淖尔市',
	parentId: 150000
}, {
	value: 150900,
	text: '乌兰察布市',
	parentId: 150000
}, {
	value: 152200,
	text: '兴安盟',
	parentId: 150000
}, {
	value: 152500,
	text: '锡林郭勒盟',
	parentId: 150000
}, {
	value: 152900,
	text: '阿拉善盟',
	parentId: 150000
}, {
	value: 210100,
	text: '沈阳市',
	parentId: 210000
}, {
	value: 210200,
	text: '大连市',
	parentId: 210000
}, {
	value: 210300,
	text: '鞍山市',
	parentId: 210000
}, {
	value: 210400,
	text: '抚顺市',
	parentId: 210000
}, {
	value: 210500,
	text: '本溪市',
	parentId: 210000
}, {
	value: 210600,
	text: '丹东市',
	parentId: 210000
}, {
	value: 210700,
	text: '锦州市',
	parentId: 210000
}, {
	value: 210800,
	text: '营口市',
	parentId: 210000
}, {
	value: 210900,
	text: '阜新市',
	parentId: 210000
}, {
	value: 211000,
	text: '辽阳市',
	parentId: 210000
}, {
	value: 211100,
	text: '盘锦市',
	parentId: 210000
}, {
	value: 211200,
	text: '铁岭市',
	parentId: 210000
}, {
	value: 211300,
	text: '朝阳市',
	parentId: 210000
}, {
	value: 211400,
	text: '葫芦岛市',
	parentId: 210000
}, {
	value: 220100,
	text: '长春市',
	parentId: 220000
}, {
	value: 220200,
	text: '吉林市',
	parentId: 220000
}, {
	value: 220300,
	text: '四平市',
	parentId: 220000
}, {
	value: 220400,
	text: '辽源市',
	parentId: 220000
}, {
	value: 220500,
	text: '通化市',
	parentId: 220000
}, {
	value: 220600,
	text: '白山市',
	parentId: 220000
}, {
	value: 220700,
	text: '松原市',
	parentId: 220000
}, {
	value: 220800,
	text: '白城市',
	parentId: 220000
}, {
	value: 222400,
	text: '延边朝鲜族自治州',
	parentId: 220000
}, {
	value: 230100,
	text: '哈尔滨市',
	parentId: 230000
}, {
	value: 230200,
	text: '齐齐哈尔市',
	parentId: 230000
}, {
	value: 230300,
	text: '鸡西市',
	parentId: 230000
}, {
	value: 230400,
	text: '鹤岗市',
	parentId: 230000
}, {
	value: 230500,
	text: '双鸭山市',
	parentId: 230000
}, {
	value: 230600,
	text: '大庆市',
	parentId: 230000
}, {
	value: 230700,
	text: '伊春市',
	parentId: 230000
}, {
	value: 230800,
	text: '佳木斯市',
	parentId: 230000
}, {
	value: 230900,
	text: '七台河市',
	parentId: 230000
}, {
	value: 231000,
	text: '牡丹江市',
	parentId: 230000
}, {
	value: 231100,
	text: '黑河市',
	parentId: 230000
}, {
	value: 231200,
	text: '绥化市',
	parentId: 230000
}, {
	value: 232700,
	text: '大兴安岭地区',
	parentId: 230000
}, {
	value: 310100,
	text: '市辖区',
	parentId: 310000
}, {
	value: 310200,
	text: '县',
	parentId: 310000
}, {
	value: 320100,
	text: '南京市',
	parentId: 320000
}, {
	value: 320200,
	text: '无锡市',
	parentId: 320000
}, {
	value: 320300,
	text: '徐州市',
	parentId: 320000
}, {
	value: 320400,
	text: '常州市',
	parentId: 320000
}, {
	value: 320500,
	text: '苏州市',
	parentId: 320000
}, {
	value: 320600,
	text: '南通市',
	parentId: 320000
}, {
	value: 320700,
	text: '连云港市',
	parentId: 320000
}, {
	value: 320800,
	text: '淮安市',
	parentId: 320000
}, {
	value: 320900,
	text: '盐城市',
	parentId: 320000
}, {
	value: 321000,
	text: '扬州市',
	parentId: 320000
}, {
	value: 321100,
	text: '镇江市',
	parentId: 320000
}, {
	value: 321200,
	text: '泰州市',
	parentId: 320000
}, {
	value: 321300,
	text: '宿迁市',
	parentId: 320000
}, {
	value: 330100,
	text: '杭州市',
	parentId: 330000
}, {
	value: 330200,
	text: '宁波市',
	parentId: 330000
}, {
	value: 330300,
	text: '温州市',
	parentId: 330000
}, {
	value: 330400,
	text: '嘉兴市',
	parentId: 330000
}, {
	value: 330500,
	text: '湖州市',
	parentId: 330000
}, {
	value: 330600,
	text: '绍兴市',
	parentId: 330000
}, {
	value: 330700,
	text: '金华市',
	parentId: 330000
}, {
	value: 330800,
	text: '衢州市',
	parentId: 330000
}, {
	value: 330900,
	text: '舟山市',
	parentId: 330000
}, {
	value: 331000,
	text: '台州市',
	parentId: 330000
}, {
	value: 331100,
	text: '丽水市',
	parentId: 330000
}, {
	value: 340100,
	text: '合肥市',
	parentId: 340000
}, {
	value: 340200,
	text: '芜湖市',
	parentId: 340000
}, {
	value: 340300,
	text: '蚌埠市',
	parentId: 340000
}, {
	value: 340400,
	text: '淮南市',
	parentId: 340000
}, {
	value: 340500,
	text: '马鞍山市',
	parentId: 340000
}, {
	value: 340600,
	text: '淮北市',
	parentId: 340000
}, {
	value: 340700,
	text: '铜陵市',
	parentId: 340000
}, {
	value: 340800,
	text: '安庆市',
	parentId: 340000
}, {
	value: 341000,
	text: '黄山市',
	parentId: 340000
}, {
	value: 341100,
	text: '滁州市',
	parentId: 340000
}, {
	value: 341200,
	text: '阜阳市',
	parentId: 340000
}, {
	value: 341300,
	text: '宿州市',
	parentId: 340000
}, {
	value: 341500,
	text: '六安市',
	parentId: 340000
}, {
	value: 341600,
	text: '亳州市',
	parentId: 340000
}, {
	value: 341700,
	text: '池州市',
	parentId: 340000
}, {
	value: 341800,
	text: '宣城市',
	parentId: 340000
}, {
	value: 350100,
	text: '福州市',
	parentId: 350000
}, {
	value: 350200,
	text: '厦门市',
	parentId: 350000
}, {
	value: 350300,
	text: '莆田市',
	parentId: 350000
}, {
	value: 350400,
	text: '三明市',
	parentId: 350000
}, {
	value: 350500,
	text: '泉州市',
	parentId: 350000
}, {
	value: 350600,
	text: '漳州市',
	parentId: 350000
}, {
	value: 350700,
	text: '南平市',
	parentId: 350000
}, {
	value: 350800,
	text: '龙岩市',
	parentId: 350000
}, {
	value: 350900,
	text: '宁德市',
	parentId: 350000
}, {
	value: 360100,
	text: '南昌市',
	parentId: 360000
}, {
	value: 360200,
	text: '景德镇市',
	parentId: 360000
}, {
	value: 360300,
	text: '萍乡市',
	parentId: 360000
}, {
	value: 360400,
	text: '九江市',
	parentId: 360000
}, {
	value: 360500,
	text: '新余市',
	parentId: 360000
}, {
	value: 360600,
	text: '鹰潭市',
	parentId: 360000
}, {
	value: 360700,
	text: '赣州市',
	parentId: 360000
}, {
	value: 360800,
	text: '吉安市',
	parentId: 360000
}, {
	value: 360900,
	text: '宜春市',
	parentId: 360000
}, {
	value: 361000,
	text: '抚州市',
	parentId: 360000
}, {
	value: 361100,
	text: '上饶市',
	parentId: 360000
}, {
	value: 370100,
	text: '济南市',
	parentId: 370000
}, {
	value: 370200,
	text: '青岛市',
	parentId: 370000
}, {
	value: 370300,
	text: '淄博市',
	parentId: 370000
}, {
	value: 370400,
	text: '枣庄市',
	parentId: 370000
}, {
	value: 370500,
	text: '东营市',
	parentId: 370000
}, {
	value: 370600,
	text: '烟台市',
	parentId: 370000
}, {
	value: 370700,
	text: '潍坊市',
	parentId: 370000
}, {
	value: 370800,
	text: '济宁市',
	parentId: 370000
}, {
	value: 370900,
	text: '泰安市',
	parentId: 370000
}, {
	value: 371000,
	text: '威海市',
	parentId: 370000
}, {
	value: 371100,
	text: '日照市',
	parentId: 370000
}, {
	value: 371200,
	text: '莱芜市',
	parentId: 370000
}, {
	value: 371300,
	text: '临沂市',
	parentId: 370000
}, {
	value: 371400,
	text: '德州市',
	parentId: 370000
}, {
	value: 371500,
	text: '聊城市',
	parentId: 370000
}, {
	value: 371600,
	text: '滨州市',
	parentId: 370000
}, {
	value: 371700,
	text: '菏泽市',
	parentId: 370000
}, {
	value: 410100,
	text: '郑州市',
	parentId: 410000
}, {
	value: 410200,
	text: '开封市',
	parentId: 410000
}, {
	value: 410300,
	text: '洛阳市',
	parentId: 410000
}, {
	value: 410400,
	text: '平顶山市',
	parentId: 410000
}, {
	value: 410500,
	text: '安阳市',
	parentId: 410000
}, {
	value: 410600,
	text: '鹤壁市',
	parentId: 410000
}, {
	value: 410700,
	text: '新乡市',
	parentId: 410000
}, {
	value: 410800,
	text: '焦作市',
	parentId: 410000
}, {
	value: 410900,
	text: '濮阳市',
	parentId: 410000
}, {
	value: 411000,
	text: '许昌市',
	parentId: 410000
}, {
	value: 411100,
	text: '漯河市',
	parentId: 410000
}, {
	value: 411200,
	text: '三门峡市',
	parentId: 410000
}, {
	value: 411300,
	text: '南阳市',
	parentId: 410000
}, {
	value: 411400,
	text: '商丘市',
	parentId: 410000
}, {
	value: 411500,
	text: '信阳市',
	parentId: 410000
}, {
	value: 411600,
	text: '周口市',
	parentId: 410000
}, {
	value: 411700,
	text: '驻马店市',
	parentId: 410000
}, {
	value: 419000,
	text: '省直辖县级行政区划',
	parentId: 410000
}, {
	value: 420100,
	text: '武汉市',
	parentId: 420000
}, {
	value: 420200,
	text: '黄石市',
	parentId: 420000
}, {
	value: 420300,
	text: '十堰市',
	parentId: 420000
}, {
	value: 420500,
	text: '宜昌市',
	parentId: 420000
}, {
	value: 420600,
	text: '襄阳市',
	parentId: 420000
}, {
	value: 420700,
	text: '鄂州市',
	parentId: 420000
}, {
	value: 420800,
	text: '荆门市',
	parentId: 420000
}, {
	value: 420900,
	text: '孝感市',
	parentId: 420000
}, {
	value: 421000,
	text: '荆州市',
	parentId: 420000
}, {
	value: 421100,
	text: '黄冈市',
	parentId: 420000
}, {
	value: 421200,
	text: '咸宁市',
	parentId: 420000
}, {
	value: 421300,
	text: '随州市',
	parentId: 420000
}, {
	value: 422800,
	text: '恩施土家族苗族自治州',
	parentId: 420000
}, {
	value: 429000,
	text: '省直辖县级行政区划',
	parentId: 420000
}, {
	value: 430100,
	text: '长沙市',
	parentId: 430000
}, {
	value: 430200,
	text: '株洲市',
	parentId: 430000
}, {
	value: 430300,
	text: '湘潭市',
	parentId: 430000
}, {
	value: 430400,
	text: '衡阳市',
	parentId: 430000
}, {
	value: 430500,
	text: '邵阳市',
	parentId: 430000
}, {
	value: 430600,
	text: '岳阳市',
	parentId: 430000
}, {
	value: 430700,
	text: '常德市',
	parentId: 430000
}, {
	value: 430800,
	text: '张家界市',
	parentId: 430000
}, {
	value: 430900,
	text: '益阳市',
	parentId: 430000
}, {
	value: 431000,
	text: '郴州市',
	parentId: 430000
}, {
	value: 431100,
	text: '永州市',
	parentId: 430000
}, {
	value: 431200,
	text: '怀化市',
	parentId: 430000
}, {
	value: 431300,
	text: '娄底市',
	parentId: 430000
}, {
	value: 433100,
	text: '湘西土家族苗族自治州',
	parentId: 430000
}, {
	value: 440100,
	text: '广州市',
	parentId: 440000
}, {
	value: 440200,
	text: '韶关市',
	parentId: 440000
}, {
	value: 440300,
	text: '深圳市',
	parentId: 440000
}, {
	value: 440400,
	text: '珠海市',
	parentId: 440000
}, {
	value: 440500,
	text: '汕头市',
	parentId: 440000
}, {
	value: 440600,
	text: '佛山市',
	parentId: 440000
}, {
	value: 440700,
	text: '江门市',
	parentId: 440000
}, {
	value: 440800,
	text: '湛江市',
	parentId: 440000
}, {
	value: 440900,
	text: '茂名市',
	parentId: 440000
}, {
	value: 441200,
	text: '肇庆市',
	parentId: 440000
}, {
	value: 441300,
	text: '惠州市',
	parentId: 440000
}, {
	value: 441400,
	text: '梅州市',
	parentId: 440000
}, {
	value: 441500,
	text: '汕尾市',
	parentId: 440000
}, {
	value: 441600,
	text: '河源市',
	parentId: 440000
}, {
	value: 441700,
	text: '阳江市',
	parentId: 440000
}, {
	value: 441800,
	text: '清远市',
	parentId: 440000
}, {
	value: 441900,
	text: '东莞市',
	parentId: 440000
}, {
	value: 442000,
	text: '中山市',
	parentId: 440000
}, {
	value: 445100,
	text: '潮州市',
	parentId: 440000
}, {
	value: 445200,
	text: '揭阳市',
	parentId: 440000
}, {
	value: 445300,
	text: '云浮市',
	parentId: 440000
}, {
	value: 450100,
	text: '南宁市',
	parentId: 450000
}, {
	value: 450200,
	text: '柳州市',
	parentId: 450000
}, {
	value: 450300,
	text: '桂林市',
	parentId: 450000
}, {
	value: 450400,
	text: '梧州市',
	parentId: 450000
}, {
	value: 450500,
	text: '北海市',
	parentId: 450000
}, {
	value: 450600,
	text: '防城港市',
	parentId: 450000
}, {
	value: 450700,
	text: '钦州市',
	parentId: 450000
}, {
	value: 450800,
	text: '贵港市',
	parentId: 450000
}, {
	value: 450900,
	text: '玉林市',
	parentId: 450000
}, {
	value: 451000,
	text: '百色市',
	parentId: 450000
}, {
	value: 451100,
	text: '贺州市',
	parentId: 450000
}, {
	value: 451200,
	text: '河池市',
	parentId: 450000
}, {
	value: 451300,
	text: '来宾市',
	parentId: 450000
}, {
	value: 451400,
	text: '崇左市',
	parentId: 450000
}, {
	value: 460100,
	text: '海口市',
	parentId: 460000
}, {
	value: 460200,
	text: '三亚市',
	parentId: 460000
}, {
	value: 460300,
	text: '三沙市',
	parentId: 460000
}, {
	value: 469000,
	text: '省直辖县级行政区划',
	parentId: 460000
}, {
	value: 500100,
	text: '市辖区',
	parentId: 500000
}, {
	value: 500200,
	text: '县',
	parentId: 500000
}, {
	value: 510100,
	text: '成都市',
	parentId: 510000
}, {
	value: 510300,
	text: '自贡市',
	parentId: 510000
}, {
	value: 510400,
	text: '攀枝花市',
	parentId: 510000
}, {
	value: 510500,
	text: '泸州市',
	parentId: 510000
}, {
	value: 510600,
	text: '德阳市',
	parentId: 510000
}, {
	value: 510700,
	text: '绵阳市',
	parentId: 510000
}, {
	value: 510800,
	text: '广元市',
	parentId: 510000
}, {
	value: 510900,
	text: '遂宁市',
	parentId: 510000
}, {
	value: 511000,
	text: '内江市',
	parentId: 510000
}, {
	value: 511100,
	text: '乐山市',
	parentId: 510000
}, {
	value: 511300,
	text: '南充市',
	parentId: 510000
}, {
	value: 511400,
	text: '眉山市',
	parentId: 510000
}, {
	value: 511500,
	text: '宜宾市',
	parentId: 510000
}, {
	value: 511600,
	text: '广安市',
	parentId: 510000
}, {
	value: 511700,
	text: '达州市',
	parentId: 510000
}, {
	value: 511800,
	text: '雅安市',
	parentId: 510000
}, {
	value: 511900,
	text: '巴中市',
	parentId: 510000
}, {
	value: 512000,
	text: '资阳市',
	parentId: 510000
}, {
	value: 513200,
	text: '阿坝藏族羌族自治州',
	parentId: 510000
}, {
	value: 513300,
	text: '甘孜藏族自治州',
	parentId: 510000
}, {
	value: 513400,
	text: '凉山彝族自治州',
	parentId: 510000
}, {
	value: 520100,
	text: '贵阳市',
	parentId: 520000
}, {
	value: 520200,
	text: '六盘水市',
	parentId: 520000
}, {
	value: 520300,
	text: '遵义市',
	parentId: 520000
}, {
	value: 520400,
	text: '安顺市',
	parentId: 520000
}, {
	value: 520500,
	text: '毕节市',
	parentId: 520000
}, {
	value: 520600,
	text: '铜仁市',
	parentId: 520000
}, {
	value: 522300,
	text: '黔西南布依族苗族自治州',
	parentId: 520000
}, {
	value: 522600,
	text: '黔东南苗族侗族自治州',
	parentId: 520000
}, {
	value: 522700,
	text: '黔南布依族苗族自治州',
	parentId: 520000
}, {
	value: 530100,
	text: '昆明市',
	parentId: 530000
}, {
	value: 530300,
	text: '曲靖市',
	parentId: 530000
}, {
	value: 530400,
	text: '玉溪市',
	parentId: 530000
}, {
	value: 530500,
	text: '保山市',
	parentId: 530000
}, {
	value: 530600,
	text: '昭通市',
	parentId: 530000
}, {
	value: 530700,
	text: '丽江市',
	parentId: 530000
}, {
	value: 530800,
	text: '普洱市',
	parentId: 530000
}, {
	value: 530900,
	text: '临沧市',
	parentId: 530000
}, {
	value: 532300,
	text: '楚雄彝族自治州',
	parentId: 530000
}, {
	value: 532500,
	text: '红河哈尼族彝族自治州',
	parentId: 530000
}, {
	value: 532600,
	text: '文山壮族苗族自治州',
	parentId: 530000
}, {
	value: 532800,
	text: '西双版纳傣族自治州',
	parentId: 530000
}, {
	value: 532900,
	text: '大理白族自治州',
	parentId: 530000
}, {
	value: 533100,
	text: '德宏傣族景颇族自治州',
	parentId: 530000
}, {
	value: 533300,
	text: '怒江傈僳族自治州',
	parentId: 530000
}, {
	value: 533400,
	text: '迪庆藏族自治州',
	parentId: 530000
}, {
	value: 540100,
	text: '拉萨市',
	parentId: 540000
}, {
	value: 540200,
	text: '日喀则市',
	parentId: 540000
}, {
	value: 542100,
	text: '昌都地区',
	parentId: 540000
}, {
	value: 542200,
	text: '山南地区',
	parentId: 540000
}, {
	value: 542400,
	text: '那曲地区',
	parentId: 540000
}, {
	value: 542500,
	text: '阿里地区',
	parentId: 540000
}, {
	value: 542600,
	text: '林芝地区',
	parentId: 540000
}, {
	value: 610100,
	text: '西安市',
	parentId: 610000
}, {
	value: 610200,
	text: '铜川市',
	parentId: 610000
}, {
	value: 610300,
	text: '宝鸡市',
	parentId: 610000
}, {
	value: 610400,
	text: '咸阳市',
	parentId: 610000
}, {
	value: 610500,
	text: '渭南市',
	parentId: 610000
}, {
	value: 610600,
	text: '延安市',
	parentId: 610000
}, {
	value: 610700,
	text: '汉中市',
	parentId: 610000
}, {
	value: 610800,
	text: '榆林市',
	parentId: 610000
}, {
	value: 610900,
	text: '安康市',
	parentId: 610000
}, {
	value: 611000,
	text: '商洛市',
	parentId: 610000
}, {
	value: 620100,
	text: '兰州市',
	parentId: 620000
}, {
	value: 620200,
	text: '嘉峪关市',
	parentId: 620000
}, {
	value: 620300,
	text: '金昌市',
	parentId: 620000
}, {
	value: 620400,
	text: '白银市',
	parentId: 620000
}, {
	value: 620500,
	text: '天水市',
	parentId: 620000
}, {
	value: 620600,
	text: '武威市',
	parentId: 620000
}, {
	value: 620700,
	text: '张掖市',
	parentId: 620000
}, {
	value: 620800,
	text: '平凉市',
	parentId: 620000
}, {
	value: 620900,
	text: '酒泉市',
	parentId: 620000
}, {
	value: 621000,
	text: '庆阳市',
	parentId: 620000
}, {
	value: 621100,
	text: '定西市',
	parentId: 620000
}, {
	value: 621200,
	text: '陇南市',
	parentId: 620000
}, {
	value: 622900,
	text: '临夏回族自治州',
	parentId: 620000
}, {
	value: 623000,
	text: '甘南藏族自治州',
	parentId: 620000
}, {
	value: 630100,
	text: '西宁市',
	parentId: 630000
}, {
	value: 630200,
	text: '海东市',
	parentId: 630000
}, {
	value: 632200,
	text: '海北藏族自治州',
	parentId: 630000
}, {
	value: 632300,
	text: '黄南藏族自治州',
	parentId: 630000
}, {
	value: 632500,
	text: '海南藏族自治州',
	parentId: 630000
}, {
	value: 632600,
	text: '果洛藏族自治州',
	parentId: 630000
}, {
	value: 632700,
	text: '玉树藏族自治州',
	parentId: 630000
}, {
	value: 632800,
	text: '海西蒙古族藏族自治州',
	parentId: 630000
}, {
	value: 640100,
	text: '银川市',
	parentId: 640000
}, {
	value: 640200,
	text: '石嘴山市',
	parentId: 640000
}, {
	value: 640300,
	text: '吴忠市',
	parentId: 640000
}, {
	value: 640400,
	text: '固原市',
	parentId: 640000
}, {
	value: 640500,
	text: '中卫市',
	parentId: 640000
}, {
	value: 650100,
	text: '乌鲁木齐市',
	parentId: 650000
}, {
	value: 650200,
	text: '克拉玛依市',
	parentId: 650000
}, {
	value: 652100,
	text: '吐鲁番地区',
	parentId: 650000
}, {
	value: 652200,
	text: '哈密地区',
	parentId: 650000
}, {
	value: 652300,
	text: '昌吉回族自治州',
	parentId: 650000
}, {
	value: 652700,
	text: '博尔塔拉蒙古自治州',
	parentId: 650000
}, {
	value: 652800,
	text: '巴音郭楞蒙古自治州',
	parentId: 650000
}, {
	value: 652900,
	text: '阿克苏地区',
	parentId: 650000
}, {
	value: 653000,
	text: '克孜勒苏柯尔克孜自治州',
	parentId: 650000
}, {
	value: 653100,
	text: '喀什地区',
	parentId: 650000
}, {
	value: 653200,
	text: '和田地区',
	parentId: 650000
}, {
	value: 654000,
	text: '伊犁哈萨克自治州',
	parentId: 650000
}, {
	value: 654200,
	text: '塔城地区',
	parentId: 650000
}, {
	value: 654300,
	text: '阿勒泰地区',
	parentId: 650000
}, {
	value: 659000,
	text: '自治区直辖县级行政区划',
	parentId: 650000
}];

var area = exports.area = [{
	value: 110101,
	text: '东城区',
	parentId: 110100
}, {
	value: 110102,
	text: '西城区',
	parentId: 110100
}, {
	value: 110105,
	text: '朝阳区',
	parentId: 110100
}, {
	value: 110106,
	text: '丰台区',
	parentId: 110100
}, {
	value: 110107,
	text: '石景山区',
	parentId: 110100
}, {
	value: 110108,
	text: '海淀区',
	parentId: 110100
}, {
	value: 110109,
	text: '门头沟区',
	parentId: 110100
}, {
	value: 110111,
	text: '房山区',
	parentId: 110100
}, {
	value: 110112,
	text: '通州区',
	parentId: 110100
}, {
	value: 110113,
	text: '顺义区',
	parentId: 110100
}, {
	value: 110114,
	text: '昌平区',
	parentId: 110100
}, {
	value: 110115,
	text: '大兴区',
	parentId: 110100
}, {
	value: 110116,
	text: '怀柔区',
	parentId: 110100
}, {
	value: 110117,
	text: '平谷区',
	parentId: 110100
}, {
	value: 110228,
	text: '密云县',
	parentId: 110200
}, {
	value: 110229,
	text: '延庆县',
	parentId: 110200
}, {
	value: 120101,
	text: '和平区',
	parentId: 120100
}, {
	value: 120102,
	text: '河东区',
	parentId: 120100
}, {
	value: 120103,
	text: '河西区',
	parentId: 120100
}, {
	value: 120104,
	text: '南开区',
	parentId: 120100
}, {
	value: 120105,
	text: '河北区',
	parentId: 120100
}, {
	value: 120106,
	text: '红桥区',
	parentId: 120100
}, {
	value: 120110,
	text: '东丽区',
	parentId: 120100
}, {
	value: 120111,
	text: '西青区',
	parentId: 120100
}, {
	value: 120112,
	text: '津南区',
	parentId: 120100
}, {
	value: 120113,
	text: '北辰区',
	parentId: 120100
}, {
	value: 120114,
	text: '武清区',
	parentId: 120100
}, {
	value: 120115,
	text: '宝坻区',
	parentId: 120100
}, {
	value: 120116,
	text: '滨海新区',
	parentId: 120100
}, {
	value: 120221,
	text: '宁河县',
	parentId: 120200
}, {
	value: 120223,
	text: '静海县',
	parentId: 120200
}, {
	value: 120225,
	text: '蓟县',
	parentId: 120200
}, {
	value: 130101,
	text: '市辖区',
	parentId: 130100
}, {
	value: 130102,
	text: '长安区',
	parentId: 130100
}, {
	value: 130104,
	text: '桥西区',
	parentId: 130100
}, {
	value: 130105,
	text: '新华区',
	parentId: 130100
}, {
	value: 130107,
	text: '井陉矿区',
	parentId: 130100
}, {
	value: 130108,
	text: '裕华区',
	parentId: 130100
}, {
	value: 130109,
	text: '藁城区',
	parentId: 130100
}, {
	value: 130110,
	text: '鹿泉区',
	parentId: 130100
}, {
	value: 130111,
	text: '栾城区',
	parentId: 130100
}, {
	value: 130121,
	text: '井陉县',
	parentId: 130100
}, {
	value: 130123,
	text: '正定县',
	parentId: 130100
}, {
	value: 130125,
	text: '行唐县',
	parentId: 130100
}, {
	value: 130126,
	text: '灵寿县',
	parentId: 130100
}, {
	value: 130127,
	text: '高邑县',
	parentId: 130100
}, {
	value: 130128,
	text: '深泽县',
	parentId: 130100
}, {
	value: 130129,
	text: '赞皇县',
	parentId: 130100
}, {
	value: 130130,
	text: '无极县',
	parentId: 130100
}, {
	value: 130131,
	text: '平山县',
	parentId: 130100
}, {
	value: 130132,
	text: '元氏县',
	parentId: 130100
}, {
	value: 130133,
	text: '赵县',
	parentId: 130100
}, {
	value: 130181,
	text: '辛集市',
	parentId: 130100
}, {
	value: 130183,
	text: '晋州市',
	parentId: 130100
}, {
	value: 130184,
	text: '新乐市',
	parentId: 130100
}, {
	value: 130201,
	text: '市辖区',
	parentId: 130200
}, {
	value: 130202,
	text: '路南区',
	parentId: 130200
}, {
	value: 130203,
	text: '路北区',
	parentId: 130200
}, {
	value: 130204,
	text: '古冶区',
	parentId: 130200
}, {
	value: 130205,
	text: '开平区',
	parentId: 130200
}, {
	value: 130207,
	text: '丰南区',
	parentId: 130200
}, {
	value: 130208,
	text: '丰润区',
	parentId: 130200
}, {
	value: 130209,
	text: '曹妃甸区',
	parentId: 130200
}, {
	value: 130223,
	text: '滦县',
	parentId: 130200
}, {
	value: 130224,
	text: '滦南县',
	parentId: 130200
}, {
	value: 130225,
	text: '乐亭县',
	parentId: 130200
}, {
	value: 130227,
	text: '迁西县',
	parentId: 130200
}, {
	value: 130229,
	text: '玉田县',
	parentId: 130200
}, {
	value: 130281,
	text: '遵化市',
	parentId: 130200
}, {
	value: 130283,
	text: '迁安市',
	parentId: 130200
}, {
	value: 130301,
	text: '市辖区',
	parentId: 130300
}, {
	value: 130302,
	text: '海港区',
	parentId: 130300
}, {
	value: 130303,
	text: '山海关区',
	parentId: 130300
}, {
	value: 130304,
	text: '北戴河区',
	parentId: 130300
}, {
	value: 130321,
	text: '青龙满族自治县',
	parentId: 130300
}, {
	value: 130322,
	text: '昌黎县',
	parentId: 130300
}, {
	value: 130323,
	text: '抚宁县',
	parentId: 130300
}, {
	value: 130324,
	text: '卢龙县',
	parentId: 130300
}, {
	value: 130401,
	text: '市辖区',
	parentId: 130400
}, {
	value: 130402,
	text: '邯山区',
	parentId: 130400
}, {
	value: 130403,
	text: '丛台区',
	parentId: 130400
}, {
	value: 130404,
	text: '复兴区',
	parentId: 130400
}, {
	value: 130406,
	text: '峰峰矿区',
	parentId: 130400
}, {
	value: 130421,
	text: '邯郸县',
	parentId: 130400
}, {
	value: 130423,
	text: '临漳县',
	parentId: 130400
}, {
	value: 130424,
	text: '成安县',
	parentId: 130400
}, {
	value: 130425,
	text: '大名县',
	parentId: 130400
}, {
	value: 130426,
	text: '涉县',
	parentId: 130400
}, {
	value: 130427,
	text: '磁县',
	parentId: 130400
}, {
	value: 130428,
	text: '肥乡县',
	parentId: 130400
}, {
	value: 130429,
	text: '永年县',
	parentId: 130400
}, {
	value: 130430,
	text: '邱县',
	parentId: 130400
}, {
	value: 130431,
	text: '鸡泽县',
	parentId: 130400
}, {
	value: 130432,
	text: '广平县',
	parentId: 130400
}, {
	value: 130433,
	text: '馆陶县',
	parentId: 130400
}, {
	value: 130434,
	text: '魏县',
	parentId: 130400
}, {
	value: 130435,
	text: '曲周县',
	parentId: 130400
}, {
	value: 130481,
	text: '武安市',
	parentId: 130400
}, {
	value: 130501,
	text: '市辖区',
	parentId: 130500
}, {
	value: 130502,
	text: '桥东区',
	parentId: 130500
}, {
	value: 130503,
	text: '桥西区',
	parentId: 130500
}, {
	value: 130521,
	text: '邢台县',
	parentId: 130500
}, {
	value: 130522,
	text: '临城县',
	parentId: 130500
}, {
	value: 130523,
	text: '内丘县',
	parentId: 130500
}, {
	value: 130524,
	text: '柏乡县',
	parentId: 130500
}, {
	value: 130525,
	text: '隆尧县',
	parentId: 130500
}, {
	value: 130526,
	text: '任县',
	parentId: 130500
}, {
	value: 130527,
	text: '南和县',
	parentId: 130500
}, {
	value: 130528,
	text: '宁晋县',
	parentId: 130500
}, {
	value: 130529,
	text: '巨鹿县',
	parentId: 130500
}, {
	value: 130530,
	text: '新河县',
	parentId: 130500
}, {
	value: 130531,
	text: '广宗县',
	parentId: 130500
}, {
	value: 130532,
	text: '平乡县',
	parentId: 130500
}, {
	value: 130533,
	text: '威县',
	parentId: 130500
}, {
	value: 130534,
	text: '清河县',
	parentId: 130500
}, {
	value: 130535,
	text: '临西县',
	parentId: 130500
}, {
	value: 130581,
	text: '南宫市',
	parentId: 130500
}, {
	value: 130582,
	text: '沙河市',
	parentId: 130500
}, {
	value: 130601,
	text: '市辖区',
	parentId: 130600
}, {
	value: 130602,
	text: '新市区',
	parentId: 130600
}, {
	value: 130603,
	text: '北市区',
	parentId: 130600
}, {
	value: 130604,
	text: '南市区',
	parentId: 130600
}, {
	value: 130621,
	text: '满城县',
	parentId: 130600
}, {
	value: 130622,
	text: '清苑县',
	parentId: 130600
}, {
	value: 130623,
	text: '涞水县',
	parentId: 130600
}, {
	value: 130624,
	text: '阜平县',
	parentId: 130600
}, {
	value: 130625,
	text: '徐水县',
	parentId: 130600
}, {
	value: 130626,
	text: '定兴县',
	parentId: 130600
}, {
	value: 130627,
	text: '唐县',
	parentId: 130600
}, {
	value: 130628,
	text: '高阳县',
	parentId: 130600
}, {
	value: 130629,
	text: '容城县',
	parentId: 130600
}, {
	value: 130630,
	text: '涞源县',
	parentId: 130600
}, {
	value: 130631,
	text: '望都县',
	parentId: 130600
}, {
	value: 130632,
	text: '安新县',
	parentId: 130600
}, {
	value: 130633,
	text: '易县',
	parentId: 130600
}, {
	value: 130634,
	text: '曲阳县',
	parentId: 130600
}, {
	value: 130635,
	text: '蠡县',
	parentId: 130600
}, {
	value: 130636,
	text: '顺平县',
	parentId: 130600
}, {
	value: 130637,
	text: '博野县',
	parentId: 130600
}, {
	value: 130638,
	text: '雄县',
	parentId: 130600
}, {
	value: 130681,
	text: '涿州市',
	parentId: 130600
}, {
	value: 130682,
	text: '定州市',
	parentId: 130600
}, {
	value: 130683,
	text: '安国市',
	parentId: 130600
}, {
	value: 130684,
	text: '高碑店市',
	parentId: 130600
}, {
	value: 130701,
	text: '市辖区',
	parentId: 130700
}, {
	value: 130702,
	text: '桥东区',
	parentId: 130700
}, {
	value: 130703,
	text: '桥西区',
	parentId: 130700
}, {
	value: 130705,
	text: '宣化区',
	parentId: 130700
}, {
	value: 130706,
	text: '下花园区',
	parentId: 130700
}, {
	value: 130721,
	text: '宣化县',
	parentId: 130700
}, {
	value: 130722,
	text: '张北县',
	parentId: 130700
}, {
	value: 130723,
	text: '康保县',
	parentId: 130700
}, {
	value: 130724,
	text: '沽源县',
	parentId: 130700
}, {
	value: 130725,
	text: '尚义县',
	parentId: 130700
}, {
	value: 130726,
	text: '蔚县',
	parentId: 130700
}, {
	value: 130727,
	text: '阳原县',
	parentId: 130700
}, {
	value: 130728,
	text: '怀安县',
	parentId: 130700
}, {
	value: 130729,
	text: '万全县',
	parentId: 130700
}, {
	value: 130730,
	text: '怀来县',
	parentId: 130700
}, {
	value: 130731,
	text: '涿鹿县',
	parentId: 130700
}, {
	value: 130732,
	text: '赤城县',
	parentId: 130700
}, {
	value: 130733,
	text: '崇礼县',
	parentId: 130700
}, {
	value: 130801,
	text: '市辖区',
	parentId: 130800
}, {
	value: 130802,
	text: '双桥区',
	parentId: 130800
}, {
	value: 130803,
	text: '双滦区',
	parentId: 130800
}, {
	value: 130804,
	text: '鹰手营子矿区',
	parentId: 130800
}, {
	value: 130821,
	text: '承德县',
	parentId: 130800
}, {
	value: 130822,
	text: '兴隆县',
	parentId: 130800
}, {
	value: 130823,
	text: '平泉县',
	parentId: 130800
}, {
	value: 130824,
	text: '滦平县',
	parentId: 130800
}, {
	value: 130825,
	text: '隆化县',
	parentId: 130800
}, {
	value: 130826,
	text: '丰宁满族自治县',
	parentId: 130800
}, {
	value: 130827,
	text: '宽城满族自治县',
	parentId: 130800
}, {
	value: 130828,
	text: '围场满族蒙古族自治县',
	parentId: 130800
}, {
	value: 130901,
	text: '市辖区',
	parentId: 130900
}, {
	value: 130902,
	text: '新华区',
	parentId: 130900
}, {
	value: 130903,
	text: '运河区',
	parentId: 130900
}, {
	value: 130921,
	text: '沧县',
	parentId: 130900
}, {
	value: 130922,
	text: '青县',
	parentId: 130900
}, {
	value: 130923,
	text: '东光县',
	parentId: 130900
}, {
	value: 130924,
	text: '海兴县',
	parentId: 130900
}, {
	value: 130925,
	text: '盐山县',
	parentId: 130900
}, {
	value: 130926,
	text: '肃宁县',
	parentId: 130900
}, {
	value: 130927,
	text: '南皮县',
	parentId: 130900
}, {
	value: 130928,
	text: '吴桥县',
	parentId: 130900
}, {
	value: 130929,
	text: '献县',
	parentId: 130900
}, {
	value: 130930,
	text: '孟村回族自治县',
	parentId: 130900
}, {
	value: 130981,
	text: '泊头市',
	parentId: 130900
}, {
	value: 130982,
	text: '任丘市',
	parentId: 130900
}, {
	value: 130983,
	text: '黄骅市',
	parentId: 130900
}, {
	value: 130984,
	text: '河间市',
	parentId: 130900
}, {
	value: 131001,
	text: '市辖区',
	parentId: 131000
}, {
	value: 131002,
	text: '安次区',
	parentId: 131000
}, {
	value: 131003,
	text: '广阳区',
	parentId: 131000
}, {
	value: 131022,
	text: '固安县',
	parentId: 131000
}, {
	value: 131023,
	text: '永清县',
	parentId: 131000
}, {
	value: 131024,
	text: '香河县',
	parentId: 131000
}, {
	value: 131025,
	text: '大城县',
	parentId: 131000
}, {
	value: 131026,
	text: '文安县',
	parentId: 131000
}, {
	value: 131028,
	text: '大厂回族自治县',
	parentId: 131000
}, {
	value: 131081,
	text: '霸州市',
	parentId: 131000
}, {
	value: 131082,
	text: '三河市',
	parentId: 131000
}, {
	value: 131101,
	text: '市辖区',
	parentId: 131100
}, {
	value: 131102,
	text: '桃城区',
	parentId: 131100
}, {
	value: 131121,
	text: '枣强县',
	parentId: 131100
}, {
	value: 131122,
	text: '武邑县',
	parentId: 131100
}, {
	value: 131123,
	text: '武强县',
	parentId: 131100
}, {
	value: 131124,
	text: '饶阳县',
	parentId: 131100
}, {
	value: 131125,
	text: '安平县',
	parentId: 131100
}, {
	value: 131126,
	text: '故城县',
	parentId: 131100
}, {
	value: 131127,
	text: '景县',
	parentId: 131100
}, {
	value: 131128,
	text: '阜城县',
	parentId: 131100
}, {
	value: 131181,
	text: '冀州市',
	parentId: 131100
}, {
	value: 131182,
	text: '深州市',
	parentId: 131100
}, {
	value: 140101,
	text: '市辖区',
	parentId: 140100
}, {
	value: 140105,
	text: '小店区',
	parentId: 140100
}, {
	value: 140106,
	text: '迎泽区',
	parentId: 140100
}, {
	value: 140107,
	text: '杏花岭区',
	parentId: 140100
}, {
	value: 140108,
	text: '尖草坪区',
	parentId: 140100
}, {
	value: 140109,
	text: '万柏林区',
	parentId: 140100
}, {
	value: 140110,
	text: '晋源区',
	parentId: 140100
}, {
	value: 140121,
	text: '清徐县',
	parentId: 140100
}, {
	value: 140122,
	text: '阳曲县',
	parentId: 140100
}, {
	value: 140123,
	text: '娄烦县',
	parentId: 140100
}, {
	value: 140181,
	text: '古交市',
	parentId: 140100
}, {
	value: 140201,
	text: '市辖区',
	parentId: 140200
}, {
	value: 140202,
	text: '城区',
	parentId: 140200
}, {
	value: 140203,
	text: '矿区',
	parentId: 140200
}, {
	value: 140211,
	text: '南郊区',
	parentId: 140200
}, {
	value: 140212,
	text: '新荣区',
	parentId: 140200
}, {
	value: 140221,
	text: '阳高县',
	parentId: 140200
}, {
	value: 140222,
	text: '天镇县',
	parentId: 140200
}, {
	value: 140223,
	text: '广灵县',
	parentId: 140200
}, {
	value: 140224,
	text: '灵丘县',
	parentId: 140200
}, {
	value: 140225,
	text: '浑源县',
	parentId: 140200
}, {
	value: 140226,
	text: '左云县',
	parentId: 140200
}, {
	value: 140227,
	text: '大同县',
	parentId: 140200
}, {
	value: 140301,
	text: '市辖区',
	parentId: 140300
}, {
	value: 140302,
	text: '城区',
	parentId: 140300
}, {
	value: 140303,
	text: '矿区',
	parentId: 140300
}, {
	value: 140311,
	text: '郊区',
	parentId: 140300
}, {
	value: 140321,
	text: '平定县',
	parentId: 140300
}, {
	value: 140322,
	text: '盂县',
	parentId: 140300
}, {
	value: 140401,
	text: '市辖区',
	parentId: 140400
}, {
	value: 140402,
	text: '城区',
	parentId: 140400
}, {
	value: 140411,
	text: '郊区',
	parentId: 140400
}, {
	value: 140421,
	text: '长治县',
	parentId: 140400
}, {
	value: 140423,
	text: '襄垣县',
	parentId: 140400
}, {
	value: 140424,
	text: '屯留县',
	parentId: 140400
}, {
	value: 140425,
	text: '平顺县',
	parentId: 140400
}, {
	value: 140426,
	text: '黎城县',
	parentId: 140400
}, {
	value: 140427,
	text: '壶关县',
	parentId: 140400
}, {
	value: 140428,
	text: '长子县',
	parentId: 140400
}, {
	value: 140429,
	text: '武乡县',
	parentId: 140400
}, {
	value: 140430,
	text: '沁县',
	parentId: 140400
}, {
	value: 140431,
	text: '沁源县',
	parentId: 140400
}, {
	value: 140481,
	text: '潞城市',
	parentId: 140400
}, {
	value: 140501,
	text: '市辖区',
	parentId: 140500
}, {
	value: 140502,
	text: '城区',
	parentId: 140500
}, {
	value: 140521,
	text: '沁水县',
	parentId: 140500
}, {
	value: 140522,
	text: '阳城县',
	parentId: 140500
}, {
	value: 140524,
	text: '陵川县',
	parentId: 140500
}, {
	value: 140525,
	text: '泽州县',
	parentId: 140500
}, {
	value: 140581,
	text: '高平市',
	parentId: 140500
}, {
	value: 140601,
	text: '市辖区',
	parentId: 140600
}, {
	value: 140602,
	text: '朔城区',
	parentId: 140600
}, {
	value: 140603,
	text: '平鲁区',
	parentId: 140600
}, {
	value: 140621,
	text: '山阴县',
	parentId: 140600
}, {
	value: 140622,
	text: '应县',
	parentId: 140600
}, {
	value: 140623,
	text: '右玉县',
	parentId: 140600
}, {
	value: 140624,
	text: '怀仁县',
	parentId: 140600
}, {
	value: 140701,
	text: '市辖区',
	parentId: 140700
}, {
	value: 140702,
	text: '榆次区',
	parentId: 140700
}, {
	value: 140721,
	text: '榆社县',
	parentId: 140700
}, {
	value: 140722,
	text: '左权县',
	parentId: 140700
}, {
	value: 140723,
	text: '和顺县',
	parentId: 140700
}, {
	value: 140724,
	text: '昔阳县',
	parentId: 140700
}, {
	value: 140725,
	text: '寿阳县',
	parentId: 140700
}, {
	value: 140726,
	text: '太谷县',
	parentId: 140700
}, {
	value: 140727,
	text: '祁县',
	parentId: 140700
}, {
	value: 140728,
	text: '平遥县',
	parentId: 140700
}, {
	value: 140729,
	text: '灵石县',
	parentId: 140700
}, {
	value: 140781,
	text: '介休市',
	parentId: 140700
}, {
	value: 140801,
	text: '市辖区',
	parentId: 140800
}, {
	value: 140802,
	text: '盐湖区',
	parentId: 140800
}, {
	value: 140821,
	text: '临猗县',
	parentId: 140800
}, {
	value: 140822,
	text: '万荣县',
	parentId: 140800
}, {
	value: 140823,
	text: '闻喜县',
	parentId: 140800
}, {
	value: 140824,
	text: '稷山县',
	parentId: 140800
}, {
	value: 140825,
	text: '新绛县',
	parentId: 140800
}, {
	value: 140826,
	text: '绛县',
	parentId: 140800
}, {
	value: 140827,
	text: '垣曲县',
	parentId: 140800
}, {
	value: 140828,
	text: '夏县',
	parentId: 140800
}, {
	value: 140829,
	text: '平陆县',
	parentId: 140800
}, {
	value: 140830,
	text: '芮城县',
	parentId: 140800
}, {
	value: 140881,
	text: '永济市',
	parentId: 140800
}, {
	value: 140882,
	text: '河津市',
	parentId: 140800
}, {
	value: 140901,
	text: '市辖区',
	parentId: 140900
}, {
	value: 140902,
	text: '忻府区',
	parentId: 140900
}, {
	value: 140921,
	text: '定襄县',
	parentId: 140900
}, {
	value: 140922,
	text: '五台县',
	parentId: 140900
}, {
	value: 140923,
	text: '代县',
	parentId: 140900
}, {
	value: 140924,
	text: '繁峙县',
	parentId: 140900
}, {
	value: 140925,
	text: '宁武县',
	parentId: 140900
}, {
	value: 140926,
	text: '静乐县',
	parentId: 140900
}, {
	value: 140927,
	text: '神池县',
	parentId: 140900
}, {
	value: 140928,
	text: '五寨县',
	parentId: 140900
}, {
	value: 140929,
	text: '岢岚县',
	parentId: 140900
}, {
	value: 140930,
	text: '河曲县',
	parentId: 140900
}, {
	value: 140931,
	text: '保德县',
	parentId: 140900
}, {
	value: 140932,
	text: '偏关县',
	parentId: 140900
}, {
	value: 140981,
	text: '原平市',
	parentId: 140900
}, {
	value: 141001,
	text: '市辖区',
	parentId: 141000
}, {
	value: 141002,
	text: '尧都区',
	parentId: 141000
}, {
	value: 141021,
	text: '曲沃县',
	parentId: 141000
}, {
	value: 141022,
	text: '翼城县',
	parentId: 141000
}, {
	value: 141023,
	text: '襄汾县',
	parentId: 141000
}, {
	value: 141024,
	text: '洪洞县',
	parentId: 141000
}, {
	value: 141025,
	text: '古县',
	parentId: 141000
}, {
	value: 141026,
	text: '安泽县',
	parentId: 141000
}, {
	value: 141027,
	text: '浮山县',
	parentId: 141000
}, {
	value: 141028,
	text: '吉县',
	parentId: 141000
}, {
	value: 141029,
	text: '乡宁县',
	parentId: 141000
}, {
	value: 141030,
	text: '大宁县',
	parentId: 141000
}, {
	value: 141031,
	text: '隰县',
	parentId: 141000
}, {
	value: 141032,
	text: '永和县',
	parentId: 141000
}, {
	value: 141033,
	text: '蒲县',
	parentId: 141000
}, {
	value: 141034,
	text: '汾西县',
	parentId: 141000
}, {
	value: 141081,
	text: '侯马市',
	parentId: 141000
}, {
	value: 141082,
	text: '霍州市',
	parentId: 141000
}, {
	value: 141101,
	text: '市辖区',
	parentId: 141100
}, {
	value: 141102,
	text: '离石区',
	parentId: 141100
}, {
	value: 141121,
	text: '文水县',
	parentId: 141100
}, {
	value: 141122,
	text: '交城县',
	parentId: 141100
}, {
	value: 141123,
	text: '兴县',
	parentId: 141100
}, {
	value: 141124,
	text: '临县',
	parentId: 141100
}, {
	value: 141125,
	text: '柳林县',
	parentId: 141100
}, {
	value: 141126,
	text: '石楼县',
	parentId: 141100
}, {
	value: 141127,
	text: '岚县',
	parentId: 141100
}, {
	value: 141128,
	text: '方山县',
	parentId: 141100
}, {
	value: 141129,
	text: '中阳县',
	parentId: 141100
}, {
	value: 141130,
	text: '交口县',
	parentId: 141100
}, {
	value: 141181,
	text: '孝义市',
	parentId: 141100
}, {
	value: 141182,
	text: '汾阳市',
	parentId: 141100
}, {
	value: 150101,
	text: '市辖区',
	parentId: 150100
}, {
	value: 150102,
	text: '新城区',
	parentId: 150100
}, {
	value: 150103,
	text: '回民区',
	parentId: 150100
}, {
	value: 150104,
	text: '玉泉区',
	parentId: 150100
}, {
	value: 150105,
	text: '赛罕区',
	parentId: 150100
}, {
	value: 150121,
	text: '土默特左旗',
	parentId: 150100
}, {
	value: 150122,
	text: '托克托县',
	parentId: 150100
}, {
	value: 150123,
	text: '和林格尔县',
	parentId: 150100
}, {
	value: 150124,
	text: '清水河县',
	parentId: 150100
}, {
	value: 150125,
	text: '武川县',
	parentId: 150100
}, {
	value: 150201,
	text: '市辖区',
	parentId: 150200
}, {
	value: 150202,
	text: '东河区',
	parentId: 150200
}, {
	value: 150203,
	text: '昆都仑区',
	parentId: 150200
}, {
	value: 150204,
	text: '青山区',
	parentId: 150200
}, {
	value: 150205,
	text: '石拐区',
	parentId: 150200
}, {
	value: 150206,
	text: '白云鄂博矿区',
	parentId: 150200
}, {
	value: 150207,
	text: '九原区',
	parentId: 150200
}, {
	value: 150221,
	text: '土默特右旗',
	parentId: 150200
}, {
	value: 150222,
	text: '固阳县',
	parentId: 150200
}, {
	value: 150223,
	text: '达尔罕茂明安联合旗',
	parentId: 150200
}, {
	value: 150301,
	text: '市辖区',
	parentId: 150300
}, {
	value: 150302,
	text: '海勃湾区',
	parentId: 150300
}, {
	value: 150303,
	text: '海南区',
	parentId: 150300
}, {
	value: 150304,
	text: '乌达区',
	parentId: 150300
}, {
	value: 150401,
	text: '市辖区',
	parentId: 150400
}, {
	value: 150402,
	text: '红山区',
	parentId: 150400
}, {
	value: 150403,
	text: '元宝山区',
	parentId: 150400
}, {
	value: 150404,
	text: '松山区',
	parentId: 150400
}, {
	value: 150421,
	text: '阿鲁科尔沁旗',
	parentId: 150400
}, {
	value: 150422,
	text: '巴林左旗',
	parentId: 150400
}, {
	value: 150423,
	text: '巴林右旗',
	parentId: 150400
}, {
	value: 150424,
	text: '林西县',
	parentId: 150400
}, {
	value: 150425,
	text: '克什克腾旗',
	parentId: 150400
}, {
	value: 150426,
	text: '翁牛特旗',
	parentId: 150400
}, {
	value: 150428,
	text: '喀喇沁旗',
	parentId: 150400
}, {
	value: 150429,
	text: '宁城县',
	parentId: 150400
}, {
	value: 150430,
	text: '敖汉旗',
	parentId: 150400
}, {
	value: 150501,
	text: '市辖区',
	parentId: 150500
}, {
	value: 150502,
	text: '科尔沁区',
	parentId: 150500
}, {
	value: 150521,
	text: '科尔沁左翼中旗',
	parentId: 150500
}, {
	value: 150522,
	text: '科尔沁左翼后旗',
	parentId: 150500
}, {
	value: 150523,
	text: '开鲁县',
	parentId: 150500
}, {
	value: 150524,
	text: '库伦旗',
	parentId: 150500
}, {
	value: 150525,
	text: '奈曼旗',
	parentId: 150500
}, {
	value: 150526,
	text: '扎鲁特旗',
	parentId: 150500
}, {
	value: 150581,
	text: '霍林郭勒市',
	parentId: 150500
}, {
	value: 150601,
	text: '市辖区',
	parentId: 150600
}, {
	value: 150602,
	text: '东胜区',
	parentId: 150600
}, {
	value: 150621,
	text: '达拉特旗',
	parentId: 150600
}, {
	value: 150622,
	text: '准格尔旗',
	parentId: 150600
}, {
	value: 150623,
	text: '鄂托克前旗',
	parentId: 150600
}, {
	value: 150624,
	text: '鄂托克旗',
	parentId: 150600
}, {
	value: 150625,
	text: '杭锦旗',
	parentId: 150600
}, {
	value: 150626,
	text: '乌审旗',
	parentId: 150600
}, {
	value: 150627,
	text: '伊金霍洛旗',
	parentId: 150600
}, {
	value: 150701,
	text: '市辖区',
	parentId: 150700
}, {
	value: 150702,
	text: '海拉尔区',
	parentId: 150700
}, {
	value: 150703,
	text: '扎赉诺尔区',
	parentId: 150700
}, {
	value: 150721,
	text: '阿荣旗',
	parentId: 150700
}, {
	value: 150722,
	text: '莫力达瓦达斡尔族自治旗',
	parentId: 150700
}, {
	value: 150723,
	text: '鄂伦春自治旗',
	parentId: 150700
}, {
	value: 150724,
	text: '鄂温克族自治旗',
	parentId: 150700
}, {
	value: 150725,
	text: '陈巴尔虎旗',
	parentId: 150700
}, {
	value: 150726,
	text: '新巴尔虎左旗',
	parentId: 150700
}, {
	value: 150727,
	text: '新巴尔虎右旗',
	parentId: 150700
}, {
	value: 150781,
	text: '满洲里市',
	parentId: 150700
}, {
	value: 150782,
	text: '牙克石市',
	parentId: 150700
}, {
	value: 150783,
	text: '扎兰屯市',
	parentId: 150700
}, {
	value: 150784,
	text: '额尔古纳市',
	parentId: 150700
}, {
	value: 150785,
	text: '根河市',
	parentId: 150700
}, {
	value: 150801,
	text: '市辖区',
	parentId: 150800
}, {
	value: 150802,
	text: '临河区',
	parentId: 150800
}, {
	value: 150821,
	text: '五原县',
	parentId: 150800
}, {
	value: 150822,
	text: '磴口县',
	parentId: 150800
}, {
	value: 150823,
	text: '乌拉特前旗',
	parentId: 150800
}, {
	value: 150824,
	text: '乌拉特中旗',
	parentId: 150800
}, {
	value: 150825,
	text: '乌拉特后旗',
	parentId: 150800
}, {
	value: 150826,
	text: '杭锦后旗',
	parentId: 150800
}, {
	value: 150901,
	text: '市辖区',
	parentId: 150900
}, {
	value: 150902,
	text: '集宁区',
	parentId: 150900
}, {
	value: 150921,
	text: '卓资县',
	parentId: 150900
}, {
	value: 150922,
	text: '化德县',
	parentId: 150900
}, {
	value: 150923,
	text: '商都县',
	parentId: 150900
}, {
	value: 150924,
	text: '兴和县',
	parentId: 150900
}, {
	value: 150925,
	text: '凉城县',
	parentId: 150900
}, {
	value: 150926,
	text: '察哈尔右翼前旗',
	parentId: 150900
}, {
	value: 150927,
	text: '察哈尔右翼中旗',
	parentId: 150900
}, {
	value: 150928,
	text: '察哈尔右翼后旗',
	parentId: 150900
}, {
	value: 150929,
	text: '四子王旗',
	parentId: 150900
}, {
	value: 150981,
	text: '丰镇市',
	parentId: 150900
}, {
	value: 152201,
	text: '乌兰浩特市',
	parentId: 152200
}, {
	value: 152202,
	text: '阿尔山市',
	parentId: 152200
}, {
	value: 152221,
	text: '科尔沁右翼前旗',
	parentId: 152200
}, {
	value: 152222,
	text: '科尔沁右翼中旗',
	parentId: 152200
}, {
	value: 152223,
	text: '扎赉特旗',
	parentId: 152200
}, {
	value: 152224,
	text: '突泉县',
	parentId: 152200
}, {
	value: 152501,
	text: '二连浩特市',
	parentId: 152500
}, {
	value: 152502,
	text: '锡林浩特市',
	parentId: 152500
}, {
	value: 152522,
	text: '阿巴嘎旗',
	parentId: 152500
}, {
	value: 152523,
	text: '苏尼特左旗',
	parentId: 152500
}, {
	value: 152524,
	text: '苏尼特右旗',
	parentId: 152500
}, {
	value: 152525,
	text: '东乌珠穆沁旗',
	parentId: 152500
}, {
	value: 152526,
	text: '西乌珠穆沁旗',
	parentId: 152500
}, {
	value: 152527,
	text: '太仆寺旗',
	parentId: 152500
}, {
	value: 152528,
	text: '镶黄旗',
	parentId: 152500
}, {
	value: 152529,
	text: '正镶白旗',
	parentId: 152500
}, {
	value: 152530,
	text: '正蓝旗',
	parentId: 152500
}, {
	value: 152531,
	text: '多伦县',
	parentId: 152500
}, {
	value: 152921,
	text: '阿拉善左旗',
	parentId: 152900
}, {
	value: 152922,
	text: '阿拉善右旗',
	parentId: 152900
}, {
	value: 152923,
	text: '额济纳旗',
	parentId: 152900
}, {
	value: 210101,
	text: '市辖区',
	parentId: 210100
}, {
	value: 210102,
	text: '和平区',
	parentId: 210100
}, {
	value: 210103,
	text: '沈河区',
	parentId: 210100
}, {
	value: 210104,
	text: '大东区',
	parentId: 210100
}, {
	value: 210105,
	text: '皇姑区',
	parentId: 210100
}, {
	value: 210106,
	text: '铁西区',
	parentId: 210100
}, {
	value: 210111,
	text: '苏家屯区',
	parentId: 210100
}, {
	value: 210112,
	text: '浑南区',
	parentId: 210100
}, {
	value: 210113,
	text: '沈北新区',
	parentId: 210100
}, {
	value: 210114,
	text: '于洪区',
	parentId: 210100
}, {
	value: 210122,
	text: '辽中县',
	parentId: 210100
}, {
	value: 210123,
	text: '康平县',
	parentId: 210100
}, {
	value: 210124,
	text: '法库县',
	parentId: 210100
}, {
	value: 210181,
	text: '新民市',
	parentId: 210100
}, {
	value: 210201,
	text: '市辖区',
	parentId: 210200
}, {
	value: 210202,
	text: '中山区',
	parentId: 210200
}, {
	value: 210203,
	text: '西岗区',
	parentId: 210200
}, {
	value: 210204,
	text: '沙河口区',
	parentId: 210200
}, {
	value: 210211,
	text: '甘井子区',
	parentId: 210200
}, {
	value: 210212,
	text: '旅顺口区',
	parentId: 210200
}, {
	value: 210213,
	text: '金州区',
	parentId: 210200
}, {
	value: 210224,
	text: '长海县',
	parentId: 210200
}, {
	value: 210281,
	text: '瓦房店市',
	parentId: 210200
}, {
	value: 210282,
	text: '普兰店市',
	parentId: 210200
}, {
	value: 210283,
	text: '庄河市',
	parentId: 210200
}, {
	value: 210301,
	text: '市辖区',
	parentId: 210300
}, {
	value: 210302,
	text: '铁东区',
	parentId: 210300
}, {
	value: 210303,
	text: '铁西区',
	parentId: 210300
}, {
	value: 210304,
	text: '立山区',
	parentId: 210300
}, {
	value: 210311,
	text: '千山区',
	parentId: 210300
}, {
	value: 210321,
	text: '台安县',
	parentId: 210300
}, {
	value: 210323,
	text: '岫岩满族自治县',
	parentId: 210300
}, {
	value: 210381,
	text: '海城市',
	parentId: 210300
}, {
	value: 210401,
	text: '市辖区',
	parentId: 210400
}, {
	value: 210402,
	text: '新抚区',
	parentId: 210400
}, {
	value: 210403,
	text: '东洲区',
	parentId: 210400
}, {
	value: 210404,
	text: '望花区',
	parentId: 210400
}, {
	value: 210411,
	text: '顺城区',
	parentId: 210400
}, {
	value: 210421,
	text: '抚顺县',
	parentId: 210400
}, {
	value: 210422,
	text: '新宾满族自治县',
	parentId: 210400
}, {
	value: 210423,
	text: '清原满族自治县',
	parentId: 210400
}, {
	value: 210501,
	text: '市辖区',
	parentId: 210500
}, {
	value: 210502,
	text: '平山区',
	parentId: 210500
}, {
	value: 210503,
	text: '溪湖区',
	parentId: 210500
}, {
	value: 210504,
	text: '明山区',
	parentId: 210500
}, {
	value: 210505,
	text: '南芬区',
	parentId: 210500
}, {
	value: 210521,
	text: '本溪满族自治县',
	parentId: 210500
}, {
	value: 210522,
	text: '桓仁满族自治县',
	parentId: 210500
}, {
	value: 210601,
	text: '市辖区',
	parentId: 210600
}, {
	value: 210602,
	text: '元宝区',
	parentId: 210600
}, {
	value: 210603,
	text: '振兴区',
	parentId: 210600
}, {
	value: 210604,
	text: '振安区',
	parentId: 210600
}, {
	value: 210624,
	text: '宽甸满族自治县',
	parentId: 210600
}, {
	value: 210681,
	text: '东港市',
	parentId: 210600
}, {
	value: 210682,
	text: '凤城市',
	parentId: 210600
}, {
	value: 210701,
	text: '市辖区',
	parentId: 210700
}, {
	value: 210702,
	text: '古塔区',
	parentId: 210700
}, {
	value: 210703,
	text: '凌河区',
	parentId: 210700
}, {
	value: 210711,
	text: '太和区',
	parentId: 210700
}, {
	value: 210726,
	text: '黑山县',
	parentId: 210700
}, {
	value: 210727,
	text: '义县',
	parentId: 210700
}, {
	value: 210781,
	text: '凌海市',
	parentId: 210700
}, {
	value: 210782,
	text: '北镇市',
	parentId: 210700
}, {
	value: 210801,
	text: '市辖区',
	parentId: 210800
}, {
	value: 210802,
	text: '站前区',
	parentId: 210800
}, {
	value: 210803,
	text: '西市区',
	parentId: 210800
}, {
	value: 210804,
	text: '鲅鱼圈区',
	parentId: 210800
}, {
	value: 210811,
	text: '老边区',
	parentId: 210800
}, {
	value: 210881,
	text: '盖州市',
	parentId: 210800
}, {
	value: 210882,
	text: '大石桥市',
	parentId: 210800
}, {
	value: 210901,
	text: '市辖区',
	parentId: 210900
}, {
	value: 210902,
	text: '海州区',
	parentId: 210900
}, {
	value: 210903,
	text: '新邱区',
	parentId: 210900
}, {
	value: 210904,
	text: '太平区',
	parentId: 210900
}, {
	value: 210905,
	text: '清河门区',
	parentId: 210900
}, {
	value: 210911,
	text: '细河区',
	parentId: 210900
}, {
	value: 210921,
	text: '阜新蒙古族自治县',
	parentId: 210900
}, {
	value: 210922,
	text: '彰武县',
	parentId: 210900
}, {
	value: 211001,
	text: '市辖区',
	parentId: 211000
}, {
	value: 211002,
	text: '白塔区',
	parentId: 211000
}, {
	value: 211003,
	text: '文圣区',
	parentId: 211000
}, {
	value: 211004,
	text: '宏伟区',
	parentId: 211000
}, {
	value: 211005,
	text: '弓长岭区',
	parentId: 211000
}, {
	value: 211011,
	text: '太子河区',
	parentId: 211000
}, {
	value: 211021,
	text: '辽阳县',
	parentId: 211000
}, {
	value: 211081,
	text: '灯塔市',
	parentId: 211000
}, {
	value: 211101,
	text: '市辖区',
	parentId: 211100
}, {
	value: 211102,
	text: '双台子区',
	parentId: 211100
}, {
	value: 211103,
	text: '兴隆台区',
	parentId: 211100
}, {
	value: 211121,
	text: '大洼县',
	parentId: 211100
}, {
	value: 211122,
	text: '盘山县',
	parentId: 211100
}, {
	value: 211201,
	text: '市辖区',
	parentId: 211200
}, {
	value: 211202,
	text: '银州区',
	parentId: 211200
}, {
	value: 211204,
	text: '清河区',
	parentId: 211200
}, {
	value: 211221,
	text: '铁岭县',
	parentId: 211200
}, {
	value: 211223,
	text: '西丰县',
	parentId: 211200
}, {
	value: 211224,
	text: '昌图县',
	parentId: 211200
}, {
	value: 211281,
	text: '调兵山市',
	parentId: 211200
}, {
	value: 211282,
	text: '开原市',
	parentId: 211200
}, {
	value: 211301,
	text: '市辖区',
	parentId: 211300
}, {
	value: 211302,
	text: '双塔区',
	parentId: 211300
}, {
	value: 211303,
	text: '龙城区',
	parentId: 211300
}, {
	value: 211321,
	text: '朝阳县',
	parentId: 211300
}, {
	value: 211322,
	text: '建平县',
	parentId: 211300
}, {
	value: 211324,
	text: '喀喇沁左翼蒙古族自治县',
	parentId: 211300
}, {
	value: 211381,
	text: '北票市',
	parentId: 211300
}, {
	value: 211382,
	text: '凌源市',
	parentId: 211300
}, {
	value: 211401,
	text: '市辖区',
	parentId: 211400
}, {
	value: 211402,
	text: '连山区',
	parentId: 211400
}, {
	value: 211403,
	text: '龙港区',
	parentId: 211400
}, {
	value: 211404,
	text: '南票区',
	parentId: 211400
}, {
	value: 211421,
	text: '绥中县',
	parentId: 211400
}, {
	value: 211422,
	text: '建昌县',
	parentId: 211400
}, {
	value: 211481,
	text: '兴城市',
	parentId: 211400
}, {
	value: 220101,
	text: '市辖区',
	parentId: 220100
}, {
	value: 220102,
	text: '南关区',
	parentId: 220100
}, {
	value: 220103,
	text: '宽城区',
	parentId: 220100
}, {
	value: 220104,
	text: '朝阳区',
	parentId: 220100
}, {
	value: 220105,
	text: '二道区',
	parentId: 220100
}, {
	value: 220106,
	text: '绿园区',
	parentId: 220100
}, {
	value: 220112,
	text: '双阳区',
	parentId: 220100
}, {
	value: 220113,
	text: '九台区',
	parentId: 220100
}, {
	value: 220122,
	text: '农安县',
	parentId: 220100
}, {
	value: 220182,
	text: '榆树市',
	parentId: 220100
}, {
	value: 220183,
	text: '德惠市',
	parentId: 220100
}, {
	value: 220201,
	text: '市辖区',
	parentId: 220200
}, {
	value: 220202,
	text: '昌邑区',
	parentId: 220200
}, {
	value: 220203,
	text: '龙潭区',
	parentId: 220200
}, {
	value: 220204,
	text: '船营区',
	parentId: 220200
}, {
	value: 220211,
	text: '丰满区',
	parentId: 220200
}, {
	value: 220221,
	text: '永吉县',
	parentId: 220200
}, {
	value: 220281,
	text: '蛟河市',
	parentId: 220200
}, {
	value: 220282,
	text: '桦甸市',
	parentId: 220200
}, {
	value: 220283,
	text: '舒兰市',
	parentId: 220200
}, {
	value: 220284,
	text: '磐石市',
	parentId: 220200
}, {
	value: 220301,
	text: '市辖区',
	parentId: 220300
}, {
	value: 220302,
	text: '铁西区',
	parentId: 220300
}, {
	value: 220303,
	text: '铁东区',
	parentId: 220300
}, {
	value: 220322,
	text: '梨树县',
	parentId: 220300
}, {
	value: 220323,
	text: '伊通满族自治县',
	parentId: 220300
}, {
	value: 220381,
	text: '公主岭市',
	parentId: 220300
}, {
	value: 220382,
	text: '双辽市',
	parentId: 220300
}, {
	value: 220401,
	text: '市辖区',
	parentId: 220400
}, {
	value: 220402,
	text: '龙山区',
	parentId: 220400
}, {
	value: 220403,
	text: '西安区',
	parentId: 220400
}, {
	value: 220421,
	text: '东丰县',
	parentId: 220400
}, {
	value: 220422,
	text: '东辽县',
	parentId: 220400
}, {
	value: 220501,
	text: '市辖区',
	parentId: 220500
}, {
	value: 220502,
	text: '东昌区',
	parentId: 220500
}, {
	value: 220503,
	text: '二道江区',
	parentId: 220500
}, {
	value: 220521,
	text: '通化县',
	parentId: 220500
}, {
	value: 220523,
	text: '辉南县',
	parentId: 220500
}, {
	value: 220524,
	text: '柳河县',
	parentId: 220500
}, {
	value: 220581,
	text: '梅河口市',
	parentId: 220500
}, {
	value: 220582,
	text: '集安市',
	parentId: 220500
}, {
	value: 220601,
	text: '市辖区',
	parentId: 220600
}, {
	value: 220602,
	text: '浑江区',
	parentId: 220600
}, {
	value: 220605,
	text: '江源区',
	parentId: 220600
}, {
	value: 220621,
	text: '抚松县',
	parentId: 220600
}, {
	value: 220622,
	text: '靖宇县',
	parentId: 220600
}, {
	value: 220623,
	text: '长白朝鲜族自治县',
	parentId: 220600
}, {
	value: 220681,
	text: '临江市',
	parentId: 220600
}, {
	value: 220701,
	text: '市辖区',
	parentId: 220700
}, {
	value: 220702,
	text: '宁江区',
	parentId: 220700
}, {
	value: 220721,
	text: '前郭尔罗斯蒙古族自治县',
	parentId: 220700
}, {
	value: 220722,
	text: '长岭县',
	parentId: 220700
}, {
	value: 220723,
	text: '乾安县',
	parentId: 220700
}, {
	value: 220781,
	text: '扶余市',
	parentId: 220700
}, {
	value: 220801,
	text: '市辖区',
	parentId: 220800
}, {
	value: 220802,
	text: '洮北区',
	parentId: 220800
}, {
	value: 220821,
	text: '镇赉县',
	parentId: 220800
}, {
	value: 220822,
	text: '通榆县',
	parentId: 220800
}, {
	value: 220881,
	text: '洮南市',
	parentId: 220800
}, {
	value: 220882,
	text: '大安市',
	parentId: 220800
}, {
	value: 222401,
	text: '延吉市',
	parentId: 222400
}, {
	value: 222402,
	text: '图们市',
	parentId: 222400
}, {
	value: 222403,
	text: '敦化市',
	parentId: 222400
}, {
	value: 222404,
	text: '珲春市',
	parentId: 222400
}, {
	value: 222405,
	text: '龙井市',
	parentId: 222400
}, {
	value: 222406,
	text: '和龙市',
	parentId: 222400
}, {
	value: 222424,
	text: '汪清县',
	parentId: 222400
}, {
	value: 222426,
	text: '安图县',
	parentId: 222400
}, {
	value: 230101,
	text: '市辖区',
	parentId: 230100
}, {
	value: 230102,
	text: '道里区',
	parentId: 230100
}, {
	value: 230103,
	text: '南岗区',
	parentId: 230100
}, {
	value: 230104,
	text: '道外区',
	parentId: 230100
}, {
	value: 230108,
	text: '平房区',
	parentId: 230100
}, {
	value: 230109,
	text: '松北区',
	parentId: 230100
}, {
	value: 230110,
	text: '香坊区',
	parentId: 230100
}, {
	value: 230111,
	text: '呼兰区',
	parentId: 230100
}, {
	value: 230112,
	text: '阿城区',
	parentId: 230100
}, {
	value: 230123,
	text: '依兰县',
	parentId: 230100
}, {
	value: 230124,
	text: '方正县',
	parentId: 230100
}, {
	value: 230125,
	text: '宾县',
	parentId: 230100
}, {
	value: 230126,
	text: '巴彦县',
	parentId: 230100
}, {
	value: 230127,
	text: '木兰县',
	parentId: 230100
}, {
	value: 230128,
	text: '通河县',
	parentId: 230100
}, {
	value: 230129,
	text: '延寿县',
	parentId: 230100
}, {
	value: 230182,
	text: '双城市',
	parentId: 230100
}, {
	value: 230183,
	text: '尚志市',
	parentId: 230100
}, {
	value: 230184,
	text: '五常市',
	parentId: 230100
}, {
	value: 230201,
	text: '市辖区',
	parentId: 230200
}, {
	value: 230202,
	text: '龙沙区',
	parentId: 230200
}, {
	value: 230203,
	text: '建华区',
	parentId: 230200
}, {
	value: 230204,
	text: '铁锋区',
	parentId: 230200
}, {
	value: 230205,
	text: '昂昂溪区',
	parentId: 230200
}, {
	value: 230206,
	text: '富拉尔基区',
	parentId: 230200
}, {
	value: 230207,
	text: '碾子山区',
	parentId: 230200
}, {
	value: 230208,
	text: '梅里斯达斡尔族区',
	parentId: 230200
}, {
	value: 230221,
	text: '龙江县',
	parentId: 230200
}, {
	value: 230223,
	text: '依安县',
	parentId: 230200
}, {
	value: 230224,
	text: '泰来县',
	parentId: 230200
}, {
	value: 230225,
	text: '甘南县',
	parentId: 230200
}, {
	value: 230227,
	text: '富裕县',
	parentId: 230200
}, {
	value: 230229,
	text: '克山县',
	parentId: 230200
}, {
	value: 230230,
	text: '克东县',
	parentId: 230200
}, {
	value: 230231,
	text: '拜泉县',
	parentId: 230200
}, {
	value: 230281,
	text: '讷河市',
	parentId: 230200
}, {
	value: 230301,
	text: '市辖区',
	parentId: 230300
}, {
	value: 230302,
	text: '鸡冠区',
	parentId: 230300
}, {
	value: 230303,
	text: '恒山区',
	parentId: 230300
}, {
	value: 230304,
	text: '滴道区',
	parentId: 230300
}, {
	value: 230305,
	text: '梨树区',
	parentId: 230300
}, {
	value: 230306,
	text: '城子河区',
	parentId: 230300
}, {
	value: 230307,
	text: '麻山区',
	parentId: 230300
}, {
	value: 230321,
	text: '鸡东县',
	parentId: 230300
}, {
	value: 230381,
	text: '虎林市',
	parentId: 230300
}, {
	value: 230382,
	text: '密山市',
	parentId: 230300
}, {
	value: 230401,
	text: '市辖区',
	parentId: 230400
}, {
	value: 230402,
	text: '向阳区',
	parentId: 230400
}, {
	value: 230403,
	text: '工农区',
	parentId: 230400
}, {
	value: 230404,
	text: '南山区',
	parentId: 230400
}, {
	value: 230405,
	text: '兴安区',
	parentId: 230400
}, {
	value: 230406,
	text: '东山区',
	parentId: 230400
}, {
	value: 230407,
	text: '兴山区',
	parentId: 230400
}, {
	value: 230421,
	text: '萝北县',
	parentId: 230400
}, {
	value: 230422,
	text: '绥滨县',
	parentId: 230400
}, {
	value: 230501,
	text: '市辖区',
	parentId: 230500
}, {
	value: 230502,
	text: '尖山区',
	parentId: 230500
}, {
	value: 230503,
	text: '岭东区',
	parentId: 230500
}, {
	value: 230505,
	text: '四方台区',
	parentId: 230500
}, {
	value: 230506,
	text: '宝山区',
	parentId: 230500
}, {
	value: 230521,
	text: '集贤县',
	parentId: 230500
}, {
	value: 230522,
	text: '友谊县',
	parentId: 230500
}, {
	value: 230523,
	text: '宝清县',
	parentId: 230500
}, {
	value: 230524,
	text: '饶河县',
	parentId: 230500
}, {
	value: 230601,
	text: '市辖区',
	parentId: 230600
}, {
	value: 230602,
	text: '萨尔图区',
	parentId: 230600
}, {
	value: 230603,
	text: '龙凤区',
	parentId: 230600
}, {
	value: 230604,
	text: '让胡路区',
	parentId: 230600
}, {
	value: 230605,
	text: '红岗区',
	parentId: 230600
}, {
	value: 230606,
	text: '大同区',
	parentId: 230600
}, {
	value: 230621,
	text: '肇州县',
	parentId: 230600
}, {
	value: 230622,
	text: '肇源县',
	parentId: 230600
}, {
	value: 230623,
	text: '林甸县',
	parentId: 230600
}, {
	value: 230624,
	text: '杜尔伯特蒙古族自治县',
	parentId: 230600
}, {
	value: 230701,
	text: '市辖区',
	parentId: 230700
}, {
	value: 230702,
	text: '伊春区',
	parentId: 230700
}, {
	value: 230703,
	text: '南岔区',
	parentId: 230700
}, {
	value: 230704,
	text: '友好区',
	parentId: 230700
}, {
	value: 230705,
	text: '西林区',
	parentId: 230700
}, {
	value: 230706,
	text: '翠峦区',
	parentId: 230700
}, {
	value: 230707,
	text: '新青区',
	parentId: 230700
}, {
	value: 230708,
	text: '美溪区',
	parentId: 230700
}, {
	value: 230709,
	text: '金山屯区',
	parentId: 230700
}, {
	value: 230710,
	text: '五营区',
	parentId: 230700
}, {
	value: 230711,
	text: '乌马河区',
	parentId: 230700
}, {
	value: 230712,
	text: '汤旺河区',
	parentId: 230700
}, {
	value: 230713,
	text: '带岭区',
	parentId: 230700
}, {
	value: 230714,
	text: '乌伊岭区',
	parentId: 230700
}, {
	value: 230715,
	text: '红星区',
	parentId: 230700
}, {
	value: 230716,
	text: '上甘岭区',
	parentId: 230700
}, {
	value: 230722,
	text: '嘉荫县',
	parentId: 230700
}, {
	value: 230781,
	text: '铁力市',
	parentId: 230700
}, {
	value: 230801,
	text: '市辖区',
	parentId: 230800
}, {
	value: 230803,
	text: '向阳区',
	parentId: 230800
}, {
	value: 230804,
	text: '前进区',
	parentId: 230800
}, {
	value: 230805,
	text: '东风区',
	parentId: 230800
}, {
	value: 230811,
	text: '郊区',
	parentId: 230800
}, {
	value: 230822,
	text: '桦南县',
	parentId: 230800
}, {
	value: 230826,
	text: '桦川县',
	parentId: 230800
}, {
	value: 230828,
	text: '汤原县',
	parentId: 230800
}, {
	value: 230833,
	text: '抚远县',
	parentId: 230800
}, {
	value: 230881,
	text: '同江市',
	parentId: 230800
}, {
	value: 230882,
	text: '富锦市',
	parentId: 230800
}, {
	value: 230901,
	text: '市辖区',
	parentId: 230900
}, {
	value: 230902,
	text: '新兴区',
	parentId: 230900
}, {
	value: 230903,
	text: '桃山区',
	parentId: 230900
}, {
	value: 230904,
	text: '茄子河区',
	parentId: 230900
}, {
	value: 230921,
	text: '勃利县',
	parentId: 230900
}, {
	value: 231001,
	text: '市辖区',
	parentId: 231000
}, {
	value: 231002,
	text: '东安区',
	parentId: 231000
}, {
	value: 231003,
	text: '阳明区',
	parentId: 231000
}, {
	value: 231004,
	text: '爱民区',
	parentId: 231000
}, {
	value: 231005,
	text: '西安区',
	parentId: 231000
}, {
	value: 231024,
	text: '东宁县',
	parentId: 231000
}, {
	value: 231025,
	text: '林口县',
	parentId: 231000
}, {
	value: 231081,
	text: '绥芬河市',
	parentId: 231000
}, {
	value: 231083,
	text: '海林市',
	parentId: 231000
}, {
	value: 231084,
	text: '宁安市',
	parentId: 231000
}, {
	value: 231085,
	text: '穆棱市',
	parentId: 231000
}, {
	value: 231101,
	text: '市辖区',
	parentId: 231100
}, {
	value: 231102,
	text: '爱辉区',
	parentId: 231100
}, {
	value: 231121,
	text: '嫩江县',
	parentId: 231100
}, {
	value: 231123,
	text: '逊克县',
	parentId: 231100
}, {
	value: 231124,
	text: '孙吴县',
	parentId: 231100
}, {
	value: 231181,
	text: '北安市',
	parentId: 231100
}, {
	value: 231182,
	text: '五大连池市',
	parentId: 231100
}, {
	value: 231201,
	text: '市辖区',
	parentId: 231200
}, {
	value: 231202,
	text: '北林区',
	parentId: 231200
}, {
	value: 231221,
	text: '望奎县',
	parentId: 231200
}, {
	value: 231222,
	text: '兰西县',
	parentId: 231200
}, {
	value: 231223,
	text: '青冈县',
	parentId: 231200
}, {
	value: 231224,
	text: '庆安县',
	parentId: 231200
}, {
	value: 231225,
	text: '明水县',
	parentId: 231200
}, {
	value: 231226,
	text: '绥棱县',
	parentId: 231200
}, {
	value: 231281,
	text: '安达市',
	parentId: 231200
}, {
	value: 231282,
	text: '肇东市',
	parentId: 231200
}, {
	value: 231283,
	text: '海伦市',
	parentId: 231200
}, {
	value: 232721,
	text: '呼玛县',
	parentId: 232700
}, {
	value: 232722,
	text: '塔河县',
	parentId: 232700
}, {
	value: 232723,
	text: '漠河县',
	parentId: 232700
}, {
	value: 310101,
	text: '黄浦区',
	parentId: 310100
}, {
	value: 310104,
	text: '徐汇区',
	parentId: 310100
}, {
	value: 310105,
	text: '长宁区',
	parentId: 310100
}, {
	value: 310106,
	text: '静安区',
	parentId: 310100
}, {
	value: 310107,
	text: '普陀区',
	parentId: 310100
}, {
	value: 310108,
	text: '闸北区',
	parentId: 310100
}, {
	value: 310109,
	text: '虹口区',
	parentId: 310100
}, {
	value: 310110,
	text: '杨浦区',
	parentId: 310100
}, {
	value: 310112,
	text: '闵行区',
	parentId: 310100
}, {
	value: 310113,
	text: '宝山区',
	parentId: 310100
}, {
	value: 310114,
	text: '嘉定区',
	parentId: 310100
}, {
	value: 310115,
	text: '浦东新区',
	parentId: 310100
}, {
	value: 310116,
	text: '金山区',
	parentId: 310100
}, {
	value: 310117,
	text: '松江区',
	parentId: 310100
}, {
	value: 310118,
	text: '青浦区',
	parentId: 310100
}, {
	value: 310120,
	text: '奉贤区',
	parentId: 310100
}, {
	value: 310230,
	text: '崇明县',
	parentId: 310200
}, {
	value: 320101,
	text: '市辖区',
	parentId: 320100
}, {
	value: 320102,
	text: '玄武区',
	parentId: 320100
}, {
	value: 320104,
	text: '秦淮区',
	parentId: 320100
}, {
	value: 320105,
	text: '建邺区',
	parentId: 320100
}, {
	value: 320106,
	text: '鼓楼区',
	parentId: 320100
}, {
	value: 320111,
	text: '浦口区',
	parentId: 320100
}, {
	value: 320113,
	text: '栖霞区',
	parentId: 320100
}, {
	value: 320114,
	text: '雨花台区',
	parentId: 320100
}, {
	value: 320115,
	text: '江宁区',
	parentId: 320100
}, {
	value: 320116,
	text: '六合区',
	parentId: 320100
}, {
	value: 320117,
	text: '溧水区',
	parentId: 320100
}, {
	value: 320118,
	text: '高淳区',
	parentId: 320100
}, {
	value: 320201,
	text: '市辖区',
	parentId: 320200
}, {
	value: 320202,
	text: '崇安区',
	parentId: 320200
}, {
	value: 320203,
	text: '南长区',
	parentId: 320200
}, {
	value: 320204,
	text: '北塘区',
	parentId: 320200
}, {
	value: 320205,
	text: '锡山区',
	parentId: 320200
}, {
	value: 320206,
	text: '惠山区',
	parentId: 320200
}, {
	value: 320211,
	text: '滨湖区',
	parentId: 320200
}, {
	value: 320281,
	text: '江阴市',
	parentId: 320200
}, {
	value: 320282,
	text: '宜兴市',
	parentId: 320200
}, {
	value: 320301,
	text: '市辖区',
	parentId: 320300
}, {
	value: 320302,
	text: '鼓楼区',
	parentId: 320300
}, {
	value: 320303,
	text: '云龙区',
	parentId: 320300
}, {
	value: 320305,
	text: '贾汪区',
	parentId: 320300
}, {
	value: 320311,
	text: '泉山区',
	parentId: 320300
}, {
	value: 320312,
	text: '铜山区',
	parentId: 320300
}, {
	value: 320321,
	text: '丰县',
	parentId: 320300
}, {
	value: 320322,
	text: '沛县',
	parentId: 320300
}, {
	value: 320324,
	text: '睢宁县',
	parentId: 320300
}, {
	value: 320381,
	text: '新沂市',
	parentId: 320300
}, {
	value: 320382,
	text: '邳州市',
	parentId: 320300
}, {
	value: 320401,
	text: '市辖区',
	parentId: 320400
}, {
	value: 320402,
	text: '天宁区',
	parentId: 320400
}, {
	value: 320404,
	text: '钟楼区',
	parentId: 320400
}, {
	value: 320405,
	text: '戚墅堰区',
	parentId: 320400
}, {
	value: 320411,
	text: '新北区',
	parentId: 320400
}, {
	value: 320412,
	text: '武进区',
	parentId: 320400
}, {
	value: 320481,
	text: '溧阳市',
	parentId: 320400
}, {
	value: 320482,
	text: '金坛市',
	parentId: 320400
}, {
	value: 320501,
	text: '市辖区',
	parentId: 320500
}, {
	value: 320505,
	text: '虎丘区',
	parentId: 320500
}, {
	value: 320506,
	text: '吴中区',
	parentId: 320500
}, {
	value: 320507,
	text: '相城区',
	parentId: 320500
}, {
	value: 320508,
	text: '姑苏区',
	parentId: 320500
}, {
	value: 320509,
	text: '吴江区',
	parentId: 320500
}, {
	value: 320581,
	text: '常熟市',
	parentId: 320500
}, {
	value: 320582,
	text: '张家港市',
	parentId: 320500
}, {
	value: 320583,
	text: '昆山市',
	parentId: 320500
}, {
	value: 320585,
	text: '太仓市',
	parentId: 320500
}, {
	value: 320601,
	text: '市辖区',
	parentId: 320600
}, {
	value: 320602,
	text: '崇川区',
	parentId: 320600
}, {
	value: 320611,
	text: '港闸区',
	parentId: 320600
}, {
	value: 320612,
	text: '通州区',
	parentId: 320600
}, {
	value: 320621,
	text: '海安县',
	parentId: 320600
}, {
	value: 320623,
	text: '如东县',
	parentId: 320600
}, {
	value: 320681,
	text: '启东市',
	parentId: 320600
}, {
	value: 320682,
	text: '如皋市',
	parentId: 320600
}, {
	value: 320684,
	text: '海门市',
	parentId: 320600
}, {
	value: 320701,
	text: '市辖区',
	parentId: 320700
}, {
	value: 320703,
	text: '连云区',
	parentId: 320700
}, {
	value: 320706,
	text: '海州区',
	parentId: 320700
}, {
	value: 320707,
	text: '赣榆区',
	parentId: 320700
}, {
	value: 320722,
	text: '东海县',
	parentId: 320700
}, {
	value: 320723,
	text: '灌云县',
	parentId: 320700
}, {
	value: 320724,
	text: '灌南县',
	parentId: 320700
}, {
	value: 320801,
	text: '市辖区',
	parentId: 320800
}, {
	value: 320802,
	text: '清河区',
	parentId: 320800
}, {
	value: 320803,
	text: '淮安区',
	parentId: 320800
}, {
	value: 320804,
	text: '淮阴区',
	parentId: 320800
}, {
	value: 320811,
	text: '清浦区',
	parentId: 320800
}, {
	value: 320826,
	text: '涟水县',
	parentId: 320800
}, {
	value: 320829,
	text: '洪泽县',
	parentId: 320800
}, {
	value: 320830,
	text: '盱眙县',
	parentId: 320800
}, {
	value: 320831,
	text: '金湖县',
	parentId: 320800
}, {
	value: 320901,
	text: '市辖区',
	parentId: 320900
}, {
	value: 320902,
	text: '亭湖区',
	parentId: 320900
}, {
	value: 320903,
	text: '盐都区',
	parentId: 320900
}, {
	value: 320921,
	text: '响水县',
	parentId: 320900
}, {
	value: 320922,
	text: '滨海县',
	parentId: 320900
}, {
	value: 320923,
	text: '阜宁县',
	parentId: 320900
}, {
	value: 320924,
	text: '射阳县',
	parentId: 320900
}, {
	value: 320925,
	text: '建湖县',
	parentId: 320900
}, {
	value: 320981,
	text: '东台市',
	parentId: 320900
}, {
	value: 320982,
	text: '大丰市',
	parentId: 320900
}, {
	value: 321001,
	text: '市辖区',
	parentId: 321000
}, {
	value: 321002,
	text: '广陵区',
	parentId: 321000
}, {
	value: 321003,
	text: '邗江区',
	parentId: 321000
}, {
	value: 321012,
	text: '江都区',
	parentId: 321000
}, {
	value: 321023,
	text: '宝应县',
	parentId: 321000
}, {
	value: 321081,
	text: '仪征市',
	parentId: 321000
}, {
	value: 321084,
	text: '高邮市',
	parentId: 321000
}, {
	value: 321101,
	text: '市辖区',
	parentId: 321100
}, {
	value: 321102,
	text: '京口区',
	parentId: 321100
}, {
	value: 321111,
	text: '润州区',
	parentId: 321100
}, {
	value: 321112,
	text: '丹徒区',
	parentId: 321100
}, {
	value: 321181,
	text: '丹阳市',
	parentId: 321100
}, {
	value: 321182,
	text: '扬中市',
	parentId: 321100
}, {
	value: 321183,
	text: '句容市',
	parentId: 321100
}, {
	value: 321201,
	text: '市辖区',
	parentId: 321200
}, {
	value: 321202,
	text: '海陵区',
	parentId: 321200
}, {
	value: 321203,
	text: '高港区',
	parentId: 321200
}, {
	value: 321204,
	text: '姜堰区',
	parentId: 321200
}, {
	value: 321281,
	text: '兴化市',
	parentId: 321200
}, {
	value: 321282,
	text: '靖江市',
	parentId: 321200
}, {
	value: 321283,
	text: '泰兴市',
	parentId: 321200
}, {
	value: 321301,
	text: '市辖区',
	parentId: 321300
}, {
	value: 321302,
	text: '宿城区',
	parentId: 321300
}, {
	value: 321311,
	text: '宿豫区',
	parentId: 321300
}, {
	value: 321322,
	text: '沭阳县',
	parentId: 321300
}, {
	value: 321323,
	text: '泗阳县',
	parentId: 321300
}, {
	value: 321324,
	text: '泗洪县',
	parentId: 321300
}, {
	value: 330101,
	text: '市辖区',
	parentId: 330100
}, {
	value: 330102,
	text: '上城区',
	parentId: 330100
}, {
	value: 330103,
	text: '下城区',
	parentId: 330100
}, {
	value: 330104,
	text: '江干区',
	parentId: 330100
}, {
	value: 330105,
	text: '拱墅区',
	parentId: 330100
}, {
	value: 330106,
	text: '西湖区',
	parentId: 330100
}, {
	value: 330108,
	text: '滨江区',
	parentId: 330100
}, {
	value: 330109,
	text: '萧山区',
	parentId: 330100
}, {
	value: 330110,
	text: '余杭区',
	parentId: 330100
}, {
	value: 330122,
	text: '桐庐县',
	parentId: 330100
}, {
	value: 330127,
	text: '淳安县',
	parentId: 330100
}, {
	value: 330182,
	text: '建德市',
	parentId: 330100
}, {
	value: 330183,
	text: '富阳市',
	parentId: 330100
}, {
	value: 330185,
	text: '临安市',
	parentId: 330100
}, {
	value: 330201,
	text: '市辖区',
	parentId: 330200
}, {
	value: 330203,
	text: '海曙区',
	parentId: 330200
}, {
	value: 330204,
	text: '江东区',
	parentId: 330200
}, {
	value: 330205,
	text: '江北区',
	parentId: 330200
}, {
	value: 330206,
	text: '北仑区',
	parentId: 330200
}, {
	value: 330211,
	text: '镇海区',
	parentId: 330200
}, {
	value: 330212,
	text: '鄞州区',
	parentId: 330200
}, {
	value: 330225,
	text: '象山县',
	parentId: 330200
}, {
	value: 330226,
	text: '宁海县',
	parentId: 330200
}, {
	value: 330281,
	text: '余姚市',
	parentId: 330200
}, {
	value: 330282,
	text: '慈溪市',
	parentId: 330200
}, {
	value: 330283,
	text: '奉化市',
	parentId: 330200
}, {
	value: 330301,
	text: '市辖区',
	parentId: 330300
}, {
	value: 330302,
	text: '鹿城区',
	parentId: 330300
}, {
	value: 330303,
	text: '龙湾区',
	parentId: 330300
}, {
	value: 330304,
	text: '瓯海区',
	parentId: 330300
}, {
	value: 330322,
	text: '洞头县',
	parentId: 330300
}, {
	value: 330324,
	text: '永嘉县',
	parentId: 330300
}, {
	value: 330326,
	text: '平阳县',
	parentId: 330300
}, {
	value: 330327,
	text: '苍南县',
	parentId: 330300
}, {
	value: 330328,
	text: '文成县',
	parentId: 330300
}, {
	value: 330329,
	text: '泰顺县',
	parentId: 330300
}, {
	value: 330381,
	text: '瑞安市',
	parentId: 330300
}, {
	value: 330382,
	text: '乐清市',
	parentId: 330300
}, {
	value: 330401,
	text: '市辖区',
	parentId: 330400
}, {
	value: 330402,
	text: '南湖区',
	parentId: 330400
}, {
	value: 330411,
	text: '秀洲区',
	parentId: 330400
}, {
	value: 330421,
	text: '嘉善县',
	parentId: 330400
}, {
	value: 330424,
	text: '海盐县',
	parentId: 330400
}, {
	value: 330481,
	text: '海宁市',
	parentId: 330400
}, {
	value: 330482,
	text: '平湖市',
	parentId: 330400
}, {
	value: 330483,
	text: '桐乡市',
	parentId: 330400
}, {
	value: 330501,
	text: '市辖区',
	parentId: 330500
}, {
	value: 330502,
	text: '吴兴区',
	parentId: 330500
}, {
	value: 330503,
	text: '南浔区',
	parentId: 330500
}, {
	value: 330521,
	text: '德清县',
	parentId: 330500
}, {
	value: 330522,
	text: '长兴县',
	parentId: 330500
}, {
	value: 330523,
	text: '安吉县',
	parentId: 330500
}, {
	value: 330601,
	text: '市辖区',
	parentId: 330600
}, {
	value: 330602,
	text: '越城区',
	parentId: 330600
}, {
	value: 330603,
	text: '柯桥区',
	parentId: 330600
}, {
	value: 330604,
	text: '上虞区',
	parentId: 330600
}, {
	value: 330624,
	text: '新昌县',
	parentId: 330600
}, {
	value: 330681,
	text: '诸暨市',
	parentId: 330600
}, {
	value: 330683,
	text: '嵊州市',
	parentId: 330600
}, {
	value: 330701,
	text: '市辖区',
	parentId: 330700
}, {
	value: 330702,
	text: '婺城区',
	parentId: 330700
}, {
	value: 330703,
	text: '金东区',
	parentId: 330700
}, {
	value: 330723,
	text: '武义县',
	parentId: 330700
}, {
	value: 330726,
	text: '浦江县',
	parentId: 330700
}, {
	value: 330727,
	text: '磐安县',
	parentId: 330700
}, {
	value: 330781,
	text: '兰溪市',
	parentId: 330700
}, {
	value: 330782,
	text: '义乌市',
	parentId: 330700
}, {
	value: 330783,
	text: '东阳市',
	parentId: 330700
}, {
	value: 330784,
	text: '永康市',
	parentId: 330700
}, {
	value: 330801,
	text: '市辖区',
	parentId: 330800
}, {
	value: 330802,
	text: '柯城区',
	parentId: 330800
}, {
	value: 330803,
	text: '衢江区',
	parentId: 330800
}, {
	value: 330822,
	text: '常山县',
	parentId: 330800
}, {
	value: 330824,
	text: '开化县',
	parentId: 330800
}, {
	value: 330825,
	text: '龙游县',
	parentId: 330800
}, {
	value: 330881,
	text: '江山市',
	parentId: 330800
}, {
	value: 330901,
	text: '市辖区',
	parentId: 330900
}, {
	value: 330902,
	text: '定海区',
	parentId: 330900
}, {
	value: 330903,
	text: '普陀区',
	parentId: 330900
}, {
	value: 330921,
	text: '岱山县',
	parentId: 330900
}, {
	value: 330922,
	text: '嵊泗县',
	parentId: 330900
}, {
	value: 331001,
	text: '市辖区',
	parentId: 331000
}, {
	value: 331002,
	text: '椒江区',
	parentId: 331000
}, {
	value: 331003,
	text: '黄岩区',
	parentId: 331000
}, {
	value: 331004,
	text: '路桥区',
	parentId: 331000
}, {
	value: 331021,
	text: '玉环县',
	parentId: 331000
}, {
	value: 331022,
	text: '三门县',
	parentId: 331000
}, {
	value: 331023,
	text: '天台县',
	parentId: 331000
}, {
	value: 331024,
	text: '仙居县',
	parentId: 331000
}, {
	value: 331081,
	text: '温岭市',
	parentId: 331000
}, {
	value: 331082,
	text: '临海市',
	parentId: 331000
}, {
	value: 331101,
	text: '市辖区',
	parentId: 331100
}, {
	value: 331102,
	text: '莲都区',
	parentId: 331100
}, {
	value: 331121,
	text: '青田县',
	parentId: 331100
}, {
	value: 331122,
	text: '缙云县',
	parentId: 331100
}, {
	value: 331123,
	text: '遂昌县',
	parentId: 331100
}, {
	value: 331124,
	text: '松阳县',
	parentId: 331100
}, {
	value: 331125,
	text: '云和县',
	parentId: 331100
}, {
	value: 331126,
	text: '庆元县',
	parentId: 331100
}, {
	value: 331127,
	text: '景宁畲族自治县',
	parentId: 331100
}, {
	value: 331181,
	text: '龙泉市',
	parentId: 331100
}, {
	value: 340101,
	text: '市辖区',
	parentId: 340100
}, {
	value: 340102,
	text: '瑶海区',
	parentId: 340100
}, {
	value: 340103,
	text: '庐阳区',
	parentId: 340100
}, {
	value: 340104,
	text: '蜀山区',
	parentId: 340100
}, {
	value: 340111,
	text: '包河区',
	parentId: 340100
}, {
	value: 340121,
	text: '长丰县',
	parentId: 340100
}, {
	value: 340122,
	text: '肥东县',
	parentId: 340100
}, {
	value: 340123,
	text: '肥西县',
	parentId: 340100
}, {
	value: 340124,
	text: '庐江县',
	parentId: 340100
}, {
	value: 340181,
	text: '巢湖市',
	parentId: 340100
}, {
	value: 340201,
	text: '市辖区',
	parentId: 340200
}, {
	value: 340202,
	text: '镜湖区',
	parentId: 340200
}, {
	value: 340203,
	text: '弋江区',
	parentId: 340200
}, {
	value: 340207,
	text: '鸠江区',
	parentId: 340200
}, {
	value: 340208,
	text: '三山区',
	parentId: 340200
}, {
	value: 340221,
	text: '芜湖县',
	parentId: 340200
}, {
	value: 340222,
	text: '繁昌县',
	parentId: 340200
}, {
	value: 340223,
	text: '南陵县',
	parentId: 340200
}, {
	value: 340225,
	text: '无为县',
	parentId: 340200
}, {
	value: 340301,
	text: '市辖区',
	parentId: 340300
}, {
	value: 340302,
	text: '龙子湖区',
	parentId: 340300
}, {
	value: 340303,
	text: '蚌山区',
	parentId: 340300
}, {
	value: 340304,
	text: '禹会区',
	parentId: 340300
}, {
	value: 340311,
	text: '淮上区',
	parentId: 340300
}, {
	value: 340321,
	text: '怀远县',
	parentId: 340300
}, {
	value: 340322,
	text: '五河县',
	parentId: 340300
}, {
	value: 340323,
	text: '固镇县',
	parentId: 340300
}, {
	value: 340401,
	text: '市辖区',
	parentId: 340400
}, {
	value: 340402,
	text: '大通区',
	parentId: 340400
}, {
	value: 340403,
	text: '田家庵区',
	parentId: 340400
}, {
	value: 340404,
	text: '谢家集区',
	parentId: 340400
}, {
	value: 340405,
	text: '八公山区',
	parentId: 340400
}, {
	value: 340406,
	text: '潘集区',
	parentId: 340400
}, {
	value: 340421,
	text: '凤台县',
	parentId: 340400
}, {
	value: 340501,
	text: '市辖区',
	parentId: 340500
}, {
	value: 340503,
	text: '花山区',
	parentId: 340500
}, {
	value: 340504,
	text: '雨山区',
	parentId: 340500
}, {
	value: 340506,
	text: '博望区',
	parentId: 340500
}, {
	value: 340521,
	text: '当涂县',
	parentId: 340500
}, {
	value: 340522,
	text: '含山县',
	parentId: 340500
}, {
	value: 340523,
	text: '和县',
	parentId: 340500
}, {
	value: 340601,
	text: '市辖区',
	parentId: 340600
}, {
	value: 340602,
	text: '杜集区',
	parentId: 340600
}, {
	value: 340603,
	text: '相山区',
	parentId: 340600
}, {
	value: 340604,
	text: '烈山区',
	parentId: 340600
}, {
	value: 340621,
	text: '濉溪县',
	parentId: 340600
}, {
	value: 340701,
	text: '市辖区',
	parentId: 340700
}, {
	value: 340702,
	text: '铜官山区',
	parentId: 340700
}, {
	value: 340703,
	text: '狮子山区',
	parentId: 340700
}, {
	value: 340711,
	text: '郊区',
	parentId: 340700
}, {
	value: 340721,
	text: '铜陵县',
	parentId: 340700
}, {
	value: 340801,
	text: '市辖区',
	parentId: 340800
}, {
	value: 340802,
	text: '迎江区',
	parentId: 340800
}, {
	value: 340803,
	text: '大观区',
	parentId: 340800
}, {
	value: 340811,
	text: '宜秀区',
	parentId: 340800
}, {
	value: 340822,
	text: '怀宁县',
	parentId: 340800
}, {
	value: 340823,
	text: '枞阳县',
	parentId: 340800
}, {
	value: 340824,
	text: '潜山县',
	parentId: 340800
}, {
	value: 340825,
	text: '太湖县',
	parentId: 340800
}, {
	value: 340826,
	text: '宿松县',
	parentId: 340800
}, {
	value: 340827,
	text: '望江县',
	parentId: 340800
}, {
	value: 340828,
	text: '岳西县',
	parentId: 340800
}, {
	value: 340881,
	text: '桐城市',
	parentId: 340800
}, {
	value: 341001,
	text: '市辖区',
	parentId: 341000
}, {
	value: 341002,
	text: '屯溪区',
	parentId: 341000
}, {
	value: 341003,
	text: '黄山区',
	parentId: 341000
}, {
	value: 341004,
	text: '徽州区',
	parentId: 341000
}, {
	value: 341021,
	text: '歙县',
	parentId: 341000
}, {
	value: 341022,
	text: '休宁县',
	parentId: 341000
}, {
	value: 341023,
	text: '黟县',
	parentId: 341000
}, {
	value: 341024,
	text: '祁门县',
	parentId: 341000
}, {
	value: 341101,
	text: '市辖区',
	parentId: 341100
}, {
	value: 341102,
	text: '琅琊区',
	parentId: 341100
}, {
	value: 341103,
	text: '南谯区',
	parentId: 341100
}, {
	value: 341122,
	text: '来安县',
	parentId: 341100
}, {
	value: 341124,
	text: '全椒县',
	parentId: 341100
}, {
	value: 341125,
	text: '定远县',
	parentId: 341100
}, {
	value: 341126,
	text: '凤阳县',
	parentId: 341100
}, {
	value: 341181,
	text: '天长市',
	parentId: 341100
}, {
	value: 341182,
	text: '明光市',
	parentId: 341100
}, {
	value: 341201,
	text: '市辖区',
	parentId: 341200
}, {
	value: 341202,
	text: '颍州区',
	parentId: 341200
}, {
	value: 341203,
	text: '颍东区',
	parentId: 341200
}, {
	value: 341204,
	text: '颍泉区',
	parentId: 341200
}, {
	value: 341221,
	text: '临泉县',
	parentId: 341200
}, {
	value: 341222,
	text: '太和县',
	parentId: 341200
}, {
	value: 341225,
	text: '阜南县',
	parentId: 341200
}, {
	value: 341226,
	text: '颍上县',
	parentId: 341200
}, {
	value: 341282,
	text: '界首市',
	parentId: 341200
}, {
	value: 341301,
	text: '市辖区',
	parentId: 341300
}, {
	value: 341302,
	text: '埇桥区',
	parentId: 341300
}, {
	value: 341321,
	text: '砀山县',
	parentId: 341300
}, {
	value: 341322,
	text: '萧县',
	parentId: 341300
}, {
	value: 341323,
	text: '灵璧县',
	parentId: 341300
}, {
	value: 341324,
	text: '泗县',
	parentId: 341300
}, {
	value: 341501,
	text: '市辖区',
	parentId: 341500
}, {
	value: 341502,
	text: '金安区',
	parentId: 341500
}, {
	value: 341503,
	text: '裕安区',
	parentId: 341500
}, {
	value: 341521,
	text: '寿县',
	parentId: 341500
}, {
	value: 341522,
	text: '霍邱县',
	parentId: 341500
}, {
	value: 341523,
	text: '舒城县',
	parentId: 341500
}, {
	value: 341524,
	text: '金寨县',
	parentId: 341500
}, {
	value: 341525,
	text: '霍山县',
	parentId: 341500
}, {
	value: 341601,
	text: '市辖区',
	parentId: 341600
}, {
	value: 341602,
	text: '谯城区',
	parentId: 341600
}, {
	value: 341621,
	text: '涡阳县',
	parentId: 341600
}, {
	value: 341622,
	text: '蒙城县',
	parentId: 341600
}, {
	value: 341623,
	text: '利辛县',
	parentId: 341600
}, {
	value: 341701,
	text: '市辖区',
	parentId: 341700
}, {
	value: 341702,
	text: '贵池区',
	parentId: 341700
}, {
	value: 341721,
	text: '东至县',
	parentId: 341700
}, {
	value: 341722,
	text: '石台县',
	parentId: 341700
}, {
	value: 341723,
	text: '青阳县',
	parentId: 341700
}, {
	value: 341801,
	text: '市辖区',
	parentId: 341800
}, {
	value: 341802,
	text: '宣州区',
	parentId: 341800
}, {
	value: 341821,
	text: '郎溪县',
	parentId: 341800
}, {
	value: 341822,
	text: '广德县',
	parentId: 341800
}, {
	value: 341823,
	text: '泾县',
	parentId: 341800
}, {
	value: 341824,
	text: '绩溪县',
	parentId: 341800
}, {
	value: 341825,
	text: '旌德县',
	parentId: 341800
}, {
	value: 341881,
	text: '宁国市',
	parentId: 341800
}, {
	value: 350101,
	text: '市辖区',
	parentId: 350100
}, {
	value: 350102,
	text: '鼓楼区',
	parentId: 350100
}, {
	value: 350103,
	text: '台江区',
	parentId: 350100
}, {
	value: 350104,
	text: '仓山区',
	parentId: 350100
}, {
	value: 350105,
	text: '马尾区',
	parentId: 350100
}, {
	value: 350111,
	text: '晋安区',
	parentId: 350100
}, {
	value: 350121,
	text: '闽侯县',
	parentId: 350100
}, {
	value: 350122,
	text: '连江县',
	parentId: 350100
}, {
	value: 350123,
	text: '罗源县',
	parentId: 350100
}, {
	value: 350124,
	text: '闽清县',
	parentId: 350100
}, {
	value: 350125,
	text: '永泰县',
	parentId: 350100
}, {
	value: 350128,
	text: '平潭县',
	parentId: 350100
}, {
	value: 350181,
	text: '福清市',
	parentId: 350100
}, {
	value: 350182,
	text: '长乐市',
	parentId: 350100
}, {
	value: 350201,
	text: '市辖区',
	parentId: 350200
}, {
	value: 350203,
	text: '思明区',
	parentId: 350200
}, {
	value: 350205,
	text: '海沧区',
	parentId: 350200
}, {
	value: 350206,
	text: '湖里区',
	parentId: 350200
}, {
	value: 350211,
	text: '集美区',
	parentId: 350200
}, {
	value: 350212,
	text: '同安区',
	parentId: 350200
}, {
	value: 350213,
	text: '翔安区',
	parentId: 350200
}, {
	value: 350301,
	text: '市辖区',
	parentId: 350300
}, {
	value: 350302,
	text: '城厢区',
	parentId: 350300
}, {
	value: 350303,
	text: '涵江区',
	parentId: 350300
}, {
	value: 350304,
	text: '荔城区',
	parentId: 350300
}, {
	value: 350305,
	text: '秀屿区',
	parentId: 350300
}, {
	value: 350322,
	text: '仙游县',
	parentId: 350300
}, {
	value: 350401,
	text: '市辖区',
	parentId: 350400
}, {
	value: 350402,
	text: '梅列区',
	parentId: 350400
}, {
	value: 350403,
	text: '三元区',
	parentId: 350400
}, {
	value: 350421,
	text: '明溪县',
	parentId: 350400
}, {
	value: 350423,
	text: '清流县',
	parentId: 350400
}, {
	value: 350424,
	text: '宁化县',
	parentId: 350400
}, {
	value: 350425,
	text: '大田县',
	parentId: 350400
}, {
	value: 350426,
	text: '尤溪县',
	parentId: 350400
}, {
	value: 350427,
	text: '沙县',
	parentId: 350400
}, {
	value: 350428,
	text: '将乐县',
	parentId: 350400
}, {
	value: 350429,
	text: '泰宁县',
	parentId: 350400
}, {
	value: 350430,
	text: '建宁县',
	parentId: 350400
}, {
	value: 350481,
	text: '永安市',
	parentId: 350400
}, {
	value: 350501,
	text: '市辖区',
	parentId: 350500
}, {
	value: 350502,
	text: '鲤城区',
	parentId: 350500
}, {
	value: 350503,
	text: '丰泽区',
	parentId: 350500
}, {
	value: 350504,
	text: '洛江区',
	parentId: 350500
}, {
	value: 350505,
	text: '泉港区',
	parentId: 350500
}, {
	value: 350521,
	text: '惠安县',
	parentId: 350500
}, {
	value: 350524,
	text: '安溪县',
	parentId: 350500
}, {
	value: 350525,
	text: '永春县',
	parentId: 350500
}, {
	value: 350526,
	text: '德化县',
	parentId: 350500
}, {
	value: 350527,
	text: '金门县',
	parentId: 350500
}, {
	value: 350581,
	text: '石狮市',
	parentId: 350500
}, {
	value: 350582,
	text: '晋江市',
	parentId: 350500
}, {
	value: 350583,
	text: '南安市',
	parentId: 350500
}, {
	value: 350601,
	text: '市辖区',
	parentId: 350600
}, {
	value: 350602,
	text: '芗城区',
	parentId: 350600
}, {
	value: 350603,
	text: '龙文区',
	parentId: 350600
}, {
	value: 350622,
	text: '云霄县',
	parentId: 350600
}, {
	value: 350623,
	text: '漳浦县',
	parentId: 350600
}, {
	value: 350624,
	text: '诏安县',
	parentId: 350600
}, {
	value: 350625,
	text: '长泰县',
	parentId: 350600
}, {
	value: 350626,
	text: '东山县',
	parentId: 350600
}, {
	value: 350627,
	text: '南靖县',
	parentId: 350600
}, {
	value: 350628,
	text: '平和县',
	parentId: 350600
}, {
	value: 350629,
	text: '华安县',
	parentId: 350600
}, {
	value: 350681,
	text: '龙海市',
	parentId: 350600
}, {
	value: 350701,
	text: '市辖区',
	parentId: 350700
}, {
	value: 350702,
	text: '延平区',
	parentId: 350700
}, {
	value: 350721,
	text: '顺昌县',
	parentId: 350700
}, {
	value: 350722,
	text: '浦城县',
	parentId: 350700
}, {
	value: 350723,
	text: '光泽县',
	parentId: 350700
}, {
	value: 350724,
	text: '松溪县',
	parentId: 350700
}, {
	value: 350725,
	text: '政和县',
	parentId: 350700
}, {
	value: 350781,
	text: '邵武市',
	parentId: 350700
}, {
	value: 350782,
	text: '武夷山市',
	parentId: 350700
}, {
	value: 350783,
	text: '建瓯市',
	parentId: 350700
}, {
	value: 350784,
	text: '建阳市',
	parentId: 350700
}, {
	value: 350801,
	text: '市辖区',
	parentId: 350800
}, {
	value: 350802,
	text: '新罗区',
	parentId: 350800
}, {
	value: 350821,
	text: '长汀县',
	parentId: 350800
}, {
	value: 350822,
	text: '永定县',
	parentId: 350800
}, {
	value: 350823,
	text: '上杭县',
	parentId: 350800
}, {
	value: 350824,
	text: '武平县',
	parentId: 350800
}, {
	value: 350825,
	text: '连城县',
	parentId: 350800
}, {
	value: 350881,
	text: '漳平市',
	parentId: 350800
}, {
	value: 350901,
	text: '市辖区',
	parentId: 350900
}, {
	value: 350902,
	text: '蕉城区',
	parentId: 350900
}, {
	value: 350921,
	text: '霞浦县',
	parentId: 350900
}, {
	value: 350922,
	text: '古田县',
	parentId: 350900
}, {
	value: 350923,
	text: '屏南县',
	parentId: 350900
}, {
	value: 350924,
	text: '寿宁县',
	parentId: 350900
}, {
	value: 350925,
	text: '周宁县',
	parentId: 350900
}, {
	value: 350926,
	text: '柘荣县',
	parentId: 350900
}, {
	value: 350981,
	text: '福安市',
	parentId: 350900
}, {
	value: 350982,
	text: '福鼎市',
	parentId: 350900
}, {
	value: 360101,
	text: '市辖区',
	parentId: 360100
}, {
	value: 360102,
	text: '东湖区',
	parentId: 360100
}, {
	value: 360103,
	text: '西湖区',
	parentId: 360100
}, {
	value: 360104,
	text: '青云谱区',
	parentId: 360100
}, {
	value: 360105,
	text: '湾里区',
	parentId: 360100
}, {
	value: 360111,
	text: '青山湖区',
	parentId: 360100
}, {
	value: 360121,
	text: '南昌县',
	parentId: 360100
}, {
	value: 360122,
	text: '新建县',
	parentId: 360100
}, {
	value: 360123,
	text: '安义县',
	parentId: 360100
}, {
	value: 360124,
	text: '进贤县',
	parentId: 360100
}, {
	value: 360201,
	text: '市辖区',
	parentId: 360200
}, {
	value: 360202,
	text: '昌江区',
	parentId: 360200
}, {
	value: 360203,
	text: '珠山区',
	parentId: 360200
}, {
	value: 360222,
	text: '浮梁县',
	parentId: 360200
}, {
	value: 360281,
	text: '乐平市',
	parentId: 360200
}, {
	value: 360301,
	text: '市辖区',
	parentId: 360300
}, {
	value: 360302,
	text: '安源区',
	parentId: 360300
}, {
	value: 360313,
	text: '湘东区',
	parentId: 360300
}, {
	value: 360321,
	text: '莲花县',
	parentId: 360300
}, {
	value: 360322,
	text: '上栗县',
	parentId: 360300
}, {
	value: 360323,
	text: '芦溪县',
	parentId: 360300
}, {
	value: 360401,
	text: '市辖区',
	parentId: 360400
}, {
	value: 360402,
	text: '庐山区',
	parentId: 360400
}, {
	value: 360403,
	text: '浔阳区',
	parentId: 360400
}, {
	value: 360421,
	text: '九江县',
	parentId: 360400
}, {
	value: 360423,
	text: '武宁县',
	parentId: 360400
}, {
	value: 360424,
	text: '修水县',
	parentId: 360400
}, {
	value: 360425,
	text: '永修县',
	parentId: 360400
}, {
	value: 360426,
	text: '德安县',
	parentId: 360400
}, {
	value: 360427,
	text: '星子县',
	parentId: 360400
}, {
	value: 360428,
	text: '都昌县',
	parentId: 360400
}, {
	value: 360429,
	text: '湖口县',
	parentId: 360400
}, {
	value: 360430,
	text: '彭泽县',
	parentId: 360400
}, {
	value: 360481,
	text: '瑞昌市',
	parentId: 360400
}, {
	value: 360482,
	text: '共青城市',
	parentId: 360400
}, {
	value: 360501,
	text: '市辖区',
	parentId: 360500
}, {
	value: 360502,
	text: '渝水区',
	parentId: 360500
}, {
	value: 360521,
	text: '分宜县',
	parentId: 360500
}, {
	value: 360601,
	text: '市辖区',
	parentId: 360600
}, {
	value: 360602,
	text: '月湖区',
	parentId: 360600
}, {
	value: 360622,
	text: '余江县',
	parentId: 360600
}, {
	value: 360681,
	text: '贵溪市',
	parentId: 360600
}, {
	value: 360701,
	text: '市辖区',
	parentId: 360700
}, {
	value: 360702,
	text: '章贡区',
	parentId: 360700
}, {
	value: 360703,
	text: '南康区',
	parentId: 360700
}, {
	value: 360721,
	text: '赣县',
	parentId: 360700
}, {
	value: 360722,
	text: '信丰县',
	parentId: 360700
}, {
	value: 360723,
	text: '大余县',
	parentId: 360700
}, {
	value: 360724,
	text: '上犹县',
	parentId: 360700
}, {
	value: 360725,
	text: '崇义县',
	parentId: 360700
}, {
	value: 360726,
	text: '安远县',
	parentId: 360700
}, {
	value: 360727,
	text: '龙南县',
	parentId: 360700
}, {
	value: 360728,
	text: '定南县',
	parentId: 360700
}, {
	value: 360729,
	text: '全南县',
	parentId: 360700
}, {
	value: 360730,
	text: '宁都县',
	parentId: 360700
}, {
	value: 360731,
	text: '于都县',
	parentId: 360700
}, {
	value: 360732,
	text: '兴国县',
	parentId: 360700
}, {
	value: 360733,
	text: '会昌县',
	parentId: 360700
}, {
	value: 360734,
	text: '寻乌县',
	parentId: 360700
}, {
	value: 360735,
	text: '石城县',
	parentId: 360700
}, {
	value: 360781,
	text: '瑞金市',
	parentId: 360700
}, {
	value: 360801,
	text: '市辖区',
	parentId: 360800
}, {
	value: 360802,
	text: '吉州区',
	parentId: 360800
}, {
	value: 360803,
	text: '青原区',
	parentId: 360800
}, {
	value: 360821,
	text: '吉安县',
	parentId: 360800
}, {
	value: 360822,
	text: '吉水县',
	parentId: 360800
}, {
	value: 360823,
	text: '峡江县',
	parentId: 360800
}, {
	value: 360824,
	text: '新干县',
	parentId: 360800
}, {
	value: 360825,
	text: '永丰县',
	parentId: 360800
}, {
	value: 360826,
	text: '泰和县',
	parentId: 360800
}, {
	value: 360827,
	text: '遂川县',
	parentId: 360800
}, {
	value: 360828,
	text: '万安县',
	parentId: 360800
}, {
	value: 360829,
	text: '安福县',
	parentId: 360800
}, {
	value: 360830,
	text: '永新县',
	parentId: 360800
}, {
	value: 360881,
	text: '井冈山市',
	parentId: 360800
}, {
	value: 360901,
	text: '市辖区',
	parentId: 360900
}, {
	value: 360902,
	text: '袁州区',
	parentId: 360900
}, {
	value: 360921,
	text: '奉新县',
	parentId: 360900
}, {
	value: 360922,
	text: '万载县',
	parentId: 360900
}, {
	value: 360923,
	text: '上高县',
	parentId: 360900
}, {
	value: 360924,
	text: '宜丰县',
	parentId: 360900
}, {
	value: 360925,
	text: '靖安县',
	parentId: 360900
}, {
	value: 360926,
	text: '铜鼓县',
	parentId: 360900
}, {
	value: 360981,
	text: '丰城市',
	parentId: 360900
}, {
	value: 360982,
	text: '樟树市',
	parentId: 360900
}, {
	value: 360983,
	text: '高安市',
	parentId: 360900
}, {
	value: 361001,
	text: '市辖区',
	parentId: 361000
}, {
	value: 361002,
	text: '临川区',
	parentId: 361000
}, {
	value: 361021,
	text: '南城县',
	parentId: 361000
}, {
	value: 361022,
	text: '黎川县',
	parentId: 361000
}, {
	value: 361023,
	text: '南丰县',
	parentId: 361000
}, {
	value: 361024,
	text: '崇仁县',
	parentId: 361000
}, {
	value: 361025,
	text: '乐安县',
	parentId: 361000
}, {
	value: 361026,
	text: '宜黄县',
	parentId: 361000
}, {
	value: 361027,
	text: '金溪县',
	parentId: 361000
}, {
	value: 361028,
	text: '资溪县',
	parentId: 361000
}, {
	value: 361029,
	text: '东乡县',
	parentId: 361000
}, {
	value: 361030,
	text: '广昌县',
	parentId: 361000
}, {
	value: 361101,
	text: '市辖区',
	parentId: 361100
}, {
	value: 361102,
	text: '信州区',
	parentId: 361100
}, {
	value: 361121,
	text: '上饶县',
	parentId: 361100
}, {
	value: 361122,
	text: '广丰县',
	parentId: 361100
}, {
	value: 361123,
	text: '玉山县',
	parentId: 361100
}, {
	value: 361124,
	text: '铅山县',
	parentId: 361100
}, {
	value: 361125,
	text: '横峰县',
	parentId: 361100
}, {
	value: 361126,
	text: '弋阳县',
	parentId: 361100
}, {
	value: 361127,
	text: '余干县',
	parentId: 361100
}, {
	value: 361128,
	text: '鄱阳县',
	parentId: 361100
}, {
	value: 361129,
	text: '万年县',
	parentId: 361100
}, {
	value: 361130,
	text: '婺源县',
	parentId: 361100
}, {
	value: 361181,
	text: '德兴市',
	parentId: 361100
}, {
	value: 370101,
	text: '市辖区',
	parentId: 370100
}, {
	value: 370102,
	text: '历下区',
	parentId: 370100
}, {
	value: 370103,
	text: '市中区',
	parentId: 370100
}, {
	value: 370104,
	text: '槐荫区',
	parentId: 370100
}, {
	value: 370105,
	text: '天桥区',
	parentId: 370100
}, {
	value: 370112,
	text: '历城区',
	parentId: 370100
}, {
	value: 370113,
	text: '长清区',
	parentId: 370100
}, {
	value: 370124,
	text: '平阴县',
	parentId: 370100
}, {
	value: 370125,
	text: '济阳县',
	parentId: 370100
}, {
	value: 370126,
	text: '商河县',
	parentId: 370100
}, {
	value: 370181,
	text: '章丘市',
	parentId: 370100
}, {
	value: 370201,
	text: '市辖区',
	parentId: 370200
}, {
	value: 370202,
	text: '市南区',
	parentId: 370200
}, {
	value: 370203,
	text: '市北区',
	parentId: 370200
}, {
	value: 370211,
	text: '黄岛区',
	parentId: 370200
}, {
	value: 370212,
	text: '崂山区',
	parentId: 370200
}, {
	value: 370213,
	text: '李沧区',
	parentId: 370200
}, {
	value: 370214,
	text: '城阳区',
	parentId: 370200
}, {
	value: 370281,
	text: '胶州市',
	parentId: 370200
}, {
	value: 370282,
	text: '即墨市',
	parentId: 370200
}, {
	value: 370283,
	text: '平度市',
	parentId: 370200
}, {
	value: 370285,
	text: '莱西市',
	parentId: 370200
}, {
	value: 370301,
	text: '市辖区',
	parentId: 370300
}, {
	value: 370302,
	text: '淄川区',
	parentId: 370300
}, {
	value: 370303,
	text: '张店区',
	parentId: 370300
}, {
	value: 370304,
	text: '博山区',
	parentId: 370300
}, {
	value: 370305,
	text: '临淄区',
	parentId: 370300
}, {
	value: 370306,
	text: '周村区',
	parentId: 370300
}, {
	value: 370321,
	text: '桓台县',
	parentId: 370300
}, {
	value: 370322,
	text: '高青县',
	parentId: 370300
}, {
	value: 370323,
	text: '沂源县',
	parentId: 370300
}, {
	value: 370401,
	text: '市辖区',
	parentId: 370400
}, {
	value: 370402,
	text: '市中区',
	parentId: 370400
}, {
	value: 370403,
	text: '薛城区',
	parentId: 370400
}, {
	value: 370404,
	text: '峄城区',
	parentId: 370400
}, {
	value: 370405,
	text: '台儿庄区',
	parentId: 370400
}, {
	value: 370406,
	text: '山亭区',
	parentId: 370400
}, {
	value: 370481,
	text: '滕州市',
	parentId: 370400
}, {
	value: 370501,
	text: '市辖区',
	parentId: 370500
}, {
	value: 370502,
	text: '东营区',
	parentId: 370500
}, {
	value: 370503,
	text: '河口区',
	parentId: 370500
}, {
	value: 370521,
	text: '垦利县',
	parentId: 370500
}, {
	value: 370522,
	text: '利津县',
	parentId: 370500
}, {
	value: 370523,
	text: '广饶县',
	parentId: 370500
}, {
	value: 370601,
	text: '市辖区',
	parentId: 370600
}, {
	value: 370602,
	text: '芝罘区',
	parentId: 370600
}, {
	value: 370611,
	text: '福山区',
	parentId: 370600
}, {
	value: 370612,
	text: '牟平区',
	parentId: 370600
}, {
	value: 370613,
	text: '莱山区',
	parentId: 370600
}, {
	value: 370634,
	text: '长岛县',
	parentId: 370600
}, {
	value: 370681,
	text: '龙口市',
	parentId: 370600
}, {
	value: 370682,
	text: '莱阳市',
	parentId: 370600
}, {
	value: 370683,
	text: '莱州市',
	parentId: 370600
}, {
	value: 370684,
	text: '蓬莱市',
	parentId: 370600
}, {
	value: 370685,
	text: '招远市',
	parentId: 370600
}, {
	value: 370686,
	text: '栖霞市',
	parentId: 370600
}, {
	value: 370687,
	text: '海阳市',
	parentId: 370600
}, {
	value: 370701,
	text: '市辖区',
	parentId: 370700
}, {
	value: 370702,
	text: '潍城区',
	parentId: 370700
}, {
	value: 370703,
	text: '寒亭区',
	parentId: 370700
}, {
	value: 370704,
	text: '坊子区',
	parentId: 370700
}, {
	value: 370705,
	text: '奎文区',
	parentId: 370700
}, {
	value: 370724,
	text: '临朐县',
	parentId: 370700
}, {
	value: 370725,
	text: '昌乐县',
	parentId: 370700
}, {
	value: 370781,
	text: '青州市',
	parentId: 370700
}, {
	value: 370782,
	text: '诸城市',
	parentId: 370700
}, {
	value: 370783,
	text: '寿光市',
	parentId: 370700
}, {
	value: 370784,
	text: '安丘市',
	parentId: 370700
}, {
	value: 370785,
	text: '高密市',
	parentId: 370700
}, {
	value: 370786,
	text: '昌邑市',
	parentId: 370700
}, {
	value: 370801,
	text: '市辖区',
	parentId: 370800
}, {
	value: 370811,
	text: '任城区',
	parentId: 370800
}, {
	value: 370812,
	text: '兖州区',
	parentId: 370800
}, {
	value: 370826,
	text: '微山县',
	parentId: 370800
}, {
	value: 370827,
	text: '鱼台县',
	parentId: 370800
}, {
	value: 370828,
	text: '金乡县',
	parentId: 370800
}, {
	value: 370829,
	text: '嘉祥县',
	parentId: 370800
}, {
	value: 370830,
	text: '汶上县',
	parentId: 370800
}, {
	value: 370831,
	text: '泗水县',
	parentId: 370800
}, {
	value: 370832,
	text: '梁山县',
	parentId: 370800
}, {
	value: 370881,
	text: '曲阜市',
	parentId: 370800
}, {
	value: 370883,
	text: '邹城市',
	parentId: 370800
}, {
	value: 370901,
	text: '市辖区',
	parentId: 370900
}, {
	value: 370902,
	text: '泰山区',
	parentId: 370900
}, {
	value: 370911,
	text: '岱岳区',
	parentId: 370900
}, {
	value: 370921,
	text: '宁阳县',
	parentId: 370900
}, {
	value: 370923,
	text: '东平县',
	parentId: 370900
}, {
	value: 370982,
	text: '新泰市',
	parentId: 370900
}, {
	value: 370983,
	text: '肥城市',
	parentId: 370900
}, {
	value: 371001,
	text: '市辖区',
	parentId: 371000
}, {
	value: 371002,
	text: '环翠区',
	parentId: 371000
}, {
	value: 371003,
	text: '文登区',
	parentId: 371000
}, {
	value: 371082,
	text: '荣成市',
	parentId: 371000
}, {
	value: 371083,
	text: '乳山市',
	parentId: 371000
}, {
	value: 371101,
	text: '市辖区',
	parentId: 371100
}, {
	value: 371102,
	text: '东港区',
	parentId: 371100
}, {
	value: 371103,
	text: '岚山区',
	parentId: 371100
}, {
	value: 371121,
	text: '五莲县',
	parentId: 371100
}, {
	value: 371122,
	text: '莒县',
	parentId: 371100
}, {
	value: 371201,
	text: '市辖区',
	parentId: 371200
}, {
	value: 371202,
	text: '莱城区',
	parentId: 371200
}, {
	value: 371203,
	text: '钢城区',
	parentId: 371200
}, {
	value: 371301,
	text: '市辖区',
	parentId: 371300
}, {
	value: 371302,
	text: '兰山区',
	parentId: 371300
}, {
	value: 371311,
	text: '罗庄区',
	parentId: 371300
}, {
	value: 371312,
	text: '河东区',
	parentId: 371300
}, {
	value: 371321,
	text: '沂南县',
	parentId: 371300
}, {
	value: 371322,
	text: '郯城县',
	parentId: 371300
}, {
	value: 371323,
	text: '沂水县',
	parentId: 371300
}, {
	value: 371324,
	text: '兰陵县',
	parentId: 371300
}, {
	value: 371325,
	text: '费县',
	parentId: 371300
}, {
	value: 371326,
	text: '平邑县',
	parentId: 371300
}, {
	value: 371327,
	text: '莒南县',
	parentId: 371300
}, {
	value: 371328,
	text: '蒙阴县',
	parentId: 371300
}, {
	value: 371329,
	text: '临沭县',
	parentId: 371300
}, {
	value: 371401,
	text: '市辖区',
	parentId: 371400
}, {
	value: 371402,
	text: '德城区',
	parentId: 371400
}, {
	value: 371403,
	text: '陵城区',
	parentId: 371400
}, {
	value: 371422,
	text: '宁津县',
	parentId: 371400
}, {
	value: 371423,
	text: '庆云县',
	parentId: 371400
}, {
	value: 371424,
	text: '临邑县',
	parentId: 371400
}, {
	value: 371425,
	text: '齐河县',
	parentId: 371400
}, {
	value: 371426,
	text: '平原县',
	parentId: 371400
}, {
	value: 371427,
	text: '夏津县',
	parentId: 371400
}, {
	value: 371428,
	text: '武城县',
	parentId: 371400
}, {
	value: 371481,
	text: '乐陵市',
	parentId: 371400
}, {
	value: 371482,
	text: '禹城市',
	parentId: 371400
}, {
	value: 371501,
	text: '市辖区',
	parentId: 371500
}, {
	value: 371502,
	text: '东昌府区',
	parentId: 371500
}, {
	value: 371521,
	text: '阳谷县',
	parentId: 371500
}, {
	value: 371522,
	text: '莘县',
	parentId: 371500
}, {
	value: 371523,
	text: '茌平县',
	parentId: 371500
}, {
	value: 371524,
	text: '东阿县',
	parentId: 371500
}, {
	value: 371525,
	text: '冠县',
	parentId: 371500
}, {
	value: 371526,
	text: '高唐县',
	parentId: 371500
}, {
	value: 371581,
	text: '临清市',
	parentId: 371500
}, {
	value: 371601,
	text: '市辖区',
	parentId: 371600
}, {
	value: 371602,
	text: '滨城区',
	parentId: 371600
}, {
	value: 371603,
	text: '沾化区',
	parentId: 371600
}, {
	value: 371621,
	text: '惠民县',
	parentId: 371600
}, {
	value: 371622,
	text: '阳信县',
	parentId: 371600
}, {
	value: 371623,
	text: '无棣县',
	parentId: 371600
}, {
	value: 371625,
	text: '博兴县',
	parentId: 371600
}, {
	value: 371626,
	text: '邹平县',
	parentId: 371600
}, {
	value: 371701,
	text: '市辖区',
	parentId: 371700
}, {
	value: 371702,
	text: '牡丹区',
	parentId: 371700
}, {
	value: 371721,
	text: '曹县',
	parentId: 371700
}, {
	value: 371722,
	text: '单县',
	parentId: 371700
}, {
	value: 371723,
	text: '成武县',
	parentId: 371700
}, {
	value: 371724,
	text: '巨野县',
	parentId: 371700
}, {
	value: 371725,
	text: '郓城县',
	parentId: 371700
}, {
	value: 371726,
	text: '鄄城县',
	parentId: 371700
}, {
	value: 371727,
	text: '定陶县',
	parentId: 371700
}, {
	value: 371728,
	text: '东明县',
	parentId: 371700
}, {
	value: 410101,
	text: '市辖区',
	parentId: 410100
}, {
	value: 410102,
	text: '中原区',
	parentId: 410100
}, {
	value: 410103,
	text: '二七区',
	parentId: 410100
}, {
	value: 410104,
	text: '管城回族区',
	parentId: 410100
}, {
	value: 410105,
	text: '金水区',
	parentId: 410100
}, {
	value: 410106,
	text: '上街区',
	parentId: 410100
}, {
	value: 410108,
	text: '惠济区',
	parentId: 410100
}, {
	value: 410122,
	text: '中牟县',
	parentId: 410100
}, {
	value: 410181,
	text: '巩义市',
	parentId: 410100
}, {
	value: 410182,
	text: '荥阳市',
	parentId: 410100
}, {
	value: 410183,
	text: '新密市',
	parentId: 410100
}, {
	value: 410184,
	text: '新郑市',
	parentId: 410100
}, {
	value: 410185,
	text: '登封市',
	parentId: 410100
}, {
	value: 410201,
	text: '市辖区',
	parentId: 410200
}, {
	value: 410202,
	text: '龙亭区',
	parentId: 410200
}, {
	value: 410203,
	text: '顺河回族区',
	parentId: 410200
}, {
	value: 410204,
	text: '鼓楼区',
	parentId: 410200
}, {
	value: 410205,
	text: '禹王台区',
	parentId: 410200
}, {
	value: 410211,
	text: '金明区',
	parentId: 410200
}, {
	value: 410221,
	text: '杞县',
	parentId: 410200
}, {
	value: 410222,
	text: '通许县',
	parentId: 410200
}, {
	value: 410223,
	text: '尉氏县',
	parentId: 410200
}, {
	value: 410224,
	text: '开封县',
	parentId: 410200
}, {
	value: 410225,
	text: '兰考县',
	parentId: 410200
}, {
	value: 410301,
	text: '市辖区',
	parentId: 410300
}, {
	value: 410302,
	text: '老城区',
	parentId: 410300
}, {
	value: 410303,
	text: '西工区',
	parentId: 410300
}, {
	value: 410304,
	text: '瀍河回族区',
	parentId: 410300
}, {
	value: 410305,
	text: '涧西区',
	parentId: 410300
}, {
	value: 410306,
	text: '吉利区',
	parentId: 410300
}, {
	value: 410311,
	text: '洛龙区',
	parentId: 410300
}, {
	value: 410322,
	text: '孟津县',
	parentId: 410300
}, {
	value: 410323,
	text: '新安县',
	parentId: 410300
}, {
	value: 410324,
	text: '栾川县',
	parentId: 410300
}, {
	value: 410325,
	text: '嵩县',
	parentId: 410300
}, {
	value: 410326,
	text: '汝阳县',
	parentId: 410300
}, {
	value: 410327,
	text: '宜阳县',
	parentId: 410300
}, {
	value: 410328,
	text: '洛宁县',
	parentId: 410300
}, {
	value: 410329,
	text: '伊川县',
	parentId: 410300
}, {
	value: 410381,
	text: '偃师市',
	parentId: 410300
}, {
	value: 410401,
	text: '市辖区',
	parentId: 410400
}, {
	value: 410402,
	text: '新华区',
	parentId: 410400
}, {
	value: 410403,
	text: '卫东区',
	parentId: 410400
}, {
	value: 410404,
	text: '石龙区',
	parentId: 410400
}, {
	value: 410411,
	text: '湛河区',
	parentId: 410400
}, {
	value: 410421,
	text: '宝丰县',
	parentId: 410400
}, {
	value: 410422,
	text: '叶县',
	parentId: 410400
}, {
	value: 410423,
	text: '鲁山县',
	parentId: 410400
}, {
	value: 410425,
	text: '郏县',
	parentId: 410400
}, {
	value: 410481,
	text: '舞钢市',
	parentId: 410400
}, {
	value: 410482,
	text: '汝州市',
	parentId: 410400
}, {
	value: 410501,
	text: '市辖区',
	parentId: 410500
}, {
	value: 410502,
	text: '文峰区',
	parentId: 410500
}, {
	value: 410503,
	text: '北关区',
	parentId: 410500
}, {
	value: 410505,
	text: '殷都区',
	parentId: 410500
}, {
	value: 410506,
	text: '龙安区',
	parentId: 410500
}, {
	value: 410522,
	text: '安阳县',
	parentId: 410500
}, {
	value: 410523,
	text: '汤阴县',
	parentId: 410500
}, {
	value: 410526,
	text: '滑县',
	parentId: 410500
}, {
	value: 410527,
	text: '内黄县',
	parentId: 410500
}, {
	value: 410581,
	text: '林州市',
	parentId: 410500
}, {
	value: 410601,
	text: '市辖区',
	parentId: 410600
}, {
	value: 410602,
	text: '鹤山区',
	parentId: 410600
}, {
	value: 410603,
	text: '山城区',
	parentId: 410600
}, {
	value: 410611,
	text: '淇滨区',
	parentId: 410600
}, {
	value: 410621,
	text: '浚县',
	parentId: 410600
}, {
	value: 410622,
	text: '淇县',
	parentId: 410600
}, {
	value: 410701,
	text: '市辖区',
	parentId: 410700
}, {
	value: 410702,
	text: '红旗区',
	parentId: 410700
}, {
	value: 410703,
	text: '卫滨区',
	parentId: 410700
}, {
	value: 410704,
	text: '凤泉区',
	parentId: 410700
}, {
	value: 410711,
	text: '牧野区',
	parentId: 410700
}, {
	value: 410721,
	text: '新乡县',
	parentId: 410700
}, {
	value: 410724,
	text: '获嘉县',
	parentId: 410700
}, {
	value: 410725,
	text: '原阳县',
	parentId: 410700
}, {
	value: 410726,
	text: '延津县',
	parentId: 410700
}, {
	value: 410727,
	text: '封丘县',
	parentId: 410700
}, {
	value: 410728,
	text: '长垣县',
	parentId: 410700
}, {
	value: 410781,
	text: '卫辉市',
	parentId: 410700
}, {
	value: 410782,
	text: '辉县市',
	parentId: 410700
}, {
	value: 410801,
	text: '市辖区',
	parentId: 410800
}, {
	value: 410802,
	text: '解放区',
	parentId: 410800
}, {
	value: 410803,
	text: '中站区',
	parentId: 410800
}, {
	value: 410804,
	text: '马村区',
	parentId: 410800
}, {
	value: 410811,
	text: '山阳区',
	parentId: 410800
}, {
	value: 410821,
	text: '修武县',
	parentId: 410800
}, {
	value: 410822,
	text: '博爱县',
	parentId: 410800
}, {
	value: 410823,
	text: '武陟县',
	parentId: 410800
}, {
	value: 410825,
	text: '温县',
	parentId: 410800
}, {
	value: 410882,
	text: '沁阳市',
	parentId: 410800
}, {
	value: 410883,
	text: '孟州市',
	parentId: 410800
}, {
	value: 410901,
	text: '市辖区',
	parentId: 410900
}, {
	value: 410902,
	text: '华龙区',
	parentId: 410900
}, {
	value: 410922,
	text: '清丰县',
	parentId: 410900
}, {
	value: 410923,
	text: '南乐县',
	parentId: 410900
}, {
	value: 410926,
	text: '范县',
	parentId: 410900
}, {
	value: 410927,
	text: '台前县',
	parentId: 410900
}, {
	value: 410928,
	text: '濮阳县',
	parentId: 410900
}, {
	value: 411001,
	text: '市辖区',
	parentId: 411000
}, {
	value: 411002,
	text: '魏都区',
	parentId: 411000
}, {
	value: 411023,
	text: '许昌县',
	parentId: 411000
}, {
	value: 411024,
	text: '鄢陵县',
	parentId: 411000
}, {
	value: 411025,
	text: '襄城县',
	parentId: 411000
}, {
	value: 411081,
	text: '禹州市',
	parentId: 411000
}, {
	value: 411082,
	text: '长葛市',
	parentId: 411000
}, {
	value: 411101,
	text: '市辖区',
	parentId: 411100
}, {
	value: 411102,
	text: '源汇区',
	parentId: 411100
}, {
	value: 411103,
	text: '郾城区',
	parentId: 411100
}, {
	value: 411104,
	text: '召陵区',
	parentId: 411100
}, {
	value: 411121,
	text: '舞阳县',
	parentId: 411100
}, {
	value: 411122,
	text: '临颍县',
	parentId: 411100
}, {
	value: 411201,
	text: '市辖区',
	parentId: 411200
}, {
	value: 411202,
	text: '湖滨区',
	parentId: 411200
}, {
	value: 411221,
	text: '渑池县',
	parentId: 411200
}, {
	value: 411222,
	text: '陕县',
	parentId: 411200
}, {
	value: 411224,
	text: '卢氏县',
	parentId: 411200
}, {
	value: 411281,
	text: '义马市',
	parentId: 411200
}, {
	value: 411282,
	text: '灵宝市',
	parentId: 411200
}, {
	value: 411301,
	text: '市辖区',
	parentId: 411300
}, {
	value: 411302,
	text: '宛城区',
	parentId: 411300
}, {
	value: 411303,
	text: '卧龙区',
	parentId: 411300
}, {
	value: 411321,
	text: '南召县',
	parentId: 411300
}, {
	value: 411322,
	text: '方城县',
	parentId: 411300
}, {
	value: 411323,
	text: '西峡县',
	parentId: 411300
}, {
	value: 411324,
	text: '镇平县',
	parentId: 411300
}, {
	value: 411325,
	text: '内乡县',
	parentId: 411300
}, {
	value: 411326,
	text: '淅川县',
	parentId: 411300
}, {
	value: 411327,
	text: '社旗县',
	parentId: 411300
}, {
	value: 411328,
	text: '唐河县',
	parentId: 411300
}, {
	value: 411329,
	text: '新野县',
	parentId: 411300
}, {
	value: 411330,
	text: '桐柏县',
	parentId: 411300
}, {
	value: 411381,
	text: '邓州市',
	parentId: 411300
}, {
	value: 411401,
	text: '市辖区',
	parentId: 411400
}, {
	value: 411402,
	text: '梁园区',
	parentId: 411400
}, {
	value: 411403,
	text: '睢阳区',
	parentId: 411400
}, {
	value: 411421,
	text: '民权县',
	parentId: 411400
}, {
	value: 411422,
	text: '睢县',
	parentId: 411400
}, {
	value: 411423,
	text: '宁陵县',
	parentId: 411400
}, {
	value: 411424,
	text: '柘城县',
	parentId: 411400
}, {
	value: 411425,
	text: '虞城县',
	parentId: 411400
}, {
	value: 411426,
	text: '夏邑县',
	parentId: 411400
}, {
	value: 411481,
	text: '永城市',
	parentId: 411400
}, {
	value: 411501,
	text: '市辖区',
	parentId: 411500
}, {
	value: 411502,
	text: '浉河区',
	parentId: 411500
}, {
	value: 411503,
	text: '平桥区',
	parentId: 411500
}, {
	value: 411521,
	text: '罗山县',
	parentId: 411500
}, {
	value: 411522,
	text: '光山县',
	parentId: 411500
}, {
	value: 411523,
	text: '新县',
	parentId: 411500
}, {
	value: 411524,
	text: '商城县',
	parentId: 411500
}, {
	value: 411525,
	text: '固始县',
	parentId: 411500
}, {
	value: 411526,
	text: '潢川县',
	parentId: 411500
}, {
	value: 411527,
	text: '淮滨县',
	parentId: 411500
}, {
	value: 411528,
	text: '息县',
	parentId: 411500
}, {
	value: 411601,
	text: '市辖区',
	parentId: 411600
}, {
	value: 411602,
	text: '川汇区',
	parentId: 411600
}, {
	value: 411621,
	text: '扶沟县',
	parentId: 411600
}, {
	value: 411622,
	text: '西华县',
	parentId: 411600
}, {
	value: 411623,
	text: '商水县',
	parentId: 411600
}, {
	value: 411624,
	text: '沈丘县',
	parentId: 411600
}, {
	value: 411625,
	text: '郸城县',
	parentId: 411600
}, {
	value: 411626,
	text: '淮阳县',
	parentId: 411600
}, {
	value: 411627,
	text: '太康县',
	parentId: 411600
}, {
	value: 411628,
	text: '鹿邑县',
	parentId: 411600
}, {
	value: 411681,
	text: '项城市',
	parentId: 411600
}, {
	value: 411701,
	text: '市辖区',
	parentId: 411700
}, {
	value: 411702,
	text: '驿城区',
	parentId: 411700
}, {
	value: 411721,
	text: '西平县',
	parentId: 411700
}, {
	value: 411722,
	text: '上蔡县',
	parentId: 411700
}, {
	value: 411723,
	text: '平舆县',
	parentId: 411700
}, {
	value: 411724,
	text: '正阳县',
	parentId: 411700
}, {
	value: 411725,
	text: '确山县',
	parentId: 411700
}, {
	value: 411726,
	text: '泌阳县',
	parentId: 411700
}, {
	value: 411727,
	text: '汝南县',
	parentId: 411700
}, {
	value: 411728,
	text: '遂平县',
	parentId: 411700
}, {
	value: 411729,
	text: '新蔡县',
	parentId: 411700
}, {
	value: 419001,
	text: '济源市',
	parentId: 419000
}, {
	value: 420101,
	text: '市辖区',
	parentId: 420100
}, {
	value: 420102,
	text: '江岸区',
	parentId: 420100
}, {
	value: 420103,
	text: '江汉区',
	parentId: 420100
}, {
	value: 420104,
	text: '硚口区',
	parentId: 420100
}, {
	value: 420105,
	text: '汉阳区',
	parentId: 420100
}, {
	value: 420106,
	text: '武昌区',
	parentId: 420100
}, {
	value: 420107,
	text: '青山区',
	parentId: 420100
}, {
	value: 420111,
	text: '洪山区',
	parentId: 420100
}, {
	value: 420112,
	text: '东西湖区',
	parentId: 420100
}, {
	value: 420113,
	text: '汉南区',
	parentId: 420100
}, {
	value: 420114,
	text: '蔡甸区',
	parentId: 420100
}, {
	value: 420115,
	text: '江夏区',
	parentId: 420100
}, {
	value: 420116,
	text: '黄陂区',
	parentId: 420100
}, {
	value: 420117,
	text: '新洲区',
	parentId: 420100
}, {
	value: 420201,
	text: '市辖区',
	parentId: 420200
}, {
	value: 420202,
	text: '黄石港区',
	parentId: 420200
}, {
	value: 420203,
	text: '西塞山区',
	parentId: 420200
}, {
	value: 420204,
	text: '下陆区',
	parentId: 420200
}, {
	value: 420205,
	text: '铁山区',
	parentId: 420200
}, {
	value: 420222,
	text: '阳新县',
	parentId: 420200
}, {
	value: 420281,
	text: '大冶市',
	parentId: 420200
}, {
	value: 420301,
	text: '市辖区',
	parentId: 420300
}, {
	value: 420302,
	text: '茅箭区',
	parentId: 420300
}, {
	value: 420303,
	text: '张湾区',
	parentId: 420300
}, {
	value: 420304,
	text: '郧阳区',
	parentId: 420300
}, {
	value: 420322,
	text: '郧西县',
	parentId: 420300
}, {
	value: 420323,
	text: '竹山县',
	parentId: 420300
}, {
	value: 420324,
	text: '竹溪县',
	parentId: 420300
}, {
	value: 420325,
	text: '房县',
	parentId: 420300
}, {
	value: 420381,
	text: '丹江口市',
	parentId: 420300
}, {
	value: 420501,
	text: '市辖区',
	parentId: 420500
}, {
	value: 420502,
	text: '西陵区',
	parentId: 420500
}, {
	value: 420503,
	text: '伍家岗区',
	parentId: 420500
}, {
	value: 420504,
	text: '点军区',
	parentId: 420500
}, {
	value: 420505,
	text: '猇亭区',
	parentId: 420500
}, {
	value: 420506,
	text: '夷陵区',
	parentId: 420500
}, {
	value: 420525,
	text: '远安县',
	parentId: 420500
}, {
	value: 420526,
	text: '兴山县',
	parentId: 420500
}, {
	value: 420527,
	text: '秭归县',
	parentId: 420500
}, {
	value: 420528,
	text: '长阳土家族自治县',
	parentId: 420500
}, {
	value: 420529,
	text: '五峰土家族自治县',
	parentId: 420500
}, {
	value: 420581,
	text: '宜都市',
	parentId: 420500
}, {
	value: 420582,
	text: '当阳市',
	parentId: 420500
}, {
	value: 420583,
	text: '枝江市',
	parentId: 420500
}, {
	value: 420601,
	text: '市辖区',
	parentId: 420600
}, {
	value: 420602,
	text: '襄城区',
	parentId: 420600
}, {
	value: 420606,
	text: '樊城区',
	parentId: 420600
}, {
	value: 420607,
	text: '襄州区',
	parentId: 420600
}, {
	value: 420624,
	text: '南漳县',
	parentId: 420600
}, {
	value: 420625,
	text: '谷城县',
	parentId: 420600
}, {
	value: 420626,
	text: '保康县',
	parentId: 420600
}, {
	value: 420682,
	text: '老河口市',
	parentId: 420600
}, {
	value: 420683,
	text: '枣阳市',
	parentId: 420600
}, {
	value: 420684,
	text: '宜城市',
	parentId: 420600
}, {
	value: 420701,
	text: '市辖区',
	parentId: 420700
}, {
	value: 420702,
	text: '梁子湖区',
	parentId: 420700
}, {
	value: 420703,
	text: '华容区',
	parentId: 420700
}, {
	value: 420704,
	text: '鄂城区',
	parentId: 420700
}, {
	value: 420801,
	text: '市辖区',
	parentId: 420800
}, {
	value: 420802,
	text: '东宝区',
	parentId: 420800
}, {
	value: 420804,
	text: '掇刀区',
	parentId: 420800
}, {
	value: 420821,
	text: '京山县',
	parentId: 420800
}, {
	value: 420822,
	text: '沙洋县',
	parentId: 420800
}, {
	value: 420881,
	text: '钟祥市',
	parentId: 420800
}, {
	value: 420901,
	text: '市辖区',
	parentId: 420900
}, {
	value: 420902,
	text: '孝南区',
	parentId: 420900
}, {
	value: 420921,
	text: '孝昌县',
	parentId: 420900
}, {
	value: 420922,
	text: '大悟县',
	parentId: 420900
}, {
	value: 420923,
	text: '云梦县',
	parentId: 420900
}, {
	value: 420981,
	text: '应城市',
	parentId: 420900
}, {
	value: 420982,
	text: '安陆市',
	parentId: 420900
}, {
	value: 420984,
	text: '汉川市',
	parentId: 420900
}, {
	value: 421001,
	text: '市辖区',
	parentId: 421000
}, {
	value: 421002,
	text: '沙市区',
	parentId: 421000
}, {
	value: 421003,
	text: '荆州区',
	parentId: 421000
}, {
	value: 421022,
	text: '公安县',
	parentId: 421000
}, {
	value: 421023,
	text: '监利县',
	parentId: 421000
}, {
	value: 421024,
	text: '江陵县',
	parentId: 421000
}, {
	value: 421081,
	text: '石首市',
	parentId: 421000
}, {
	value: 421083,
	text: '洪湖市',
	parentId: 421000
}, {
	value: 421087,
	text: '松滋市',
	parentId: 421000
}, {
	value: 421101,
	text: '市辖区',
	parentId: 421100
}, {
	value: 421102,
	text: '黄州区',
	parentId: 421100
}, {
	value: 421121,
	text: '团风县',
	parentId: 421100
}, {
	value: 421122,
	text: '红安县',
	parentId: 421100
}, {
	value: 421123,
	text: '罗田县',
	parentId: 421100
}, {
	value: 421124,
	text: '英山县',
	parentId: 421100
}, {
	value: 421125,
	text: '浠水县',
	parentId: 421100
}, {
	value: 421126,
	text: '蕲春县',
	parentId: 421100
}, {
	value: 421127,
	text: '黄梅县',
	parentId: 421100
}, {
	value: 421181,
	text: '麻城市',
	parentId: 421100
}, {
	value: 421182,
	text: '武穴市',
	parentId: 421100
}, {
	value: 421201,
	text: '市辖区',
	parentId: 421200
}, {
	value: 421202,
	text: '咸安区',
	parentId: 421200
}, {
	value: 421221,
	text: '嘉鱼县',
	parentId: 421200
}, {
	value: 421222,
	text: '通城县',
	parentId: 421200
}, {
	value: 421223,
	text: '崇阳县',
	parentId: 421200
}, {
	value: 421224,
	text: '通山县',
	parentId: 421200
}, {
	value: 421281,
	text: '赤壁市',
	parentId: 421200
}, {
	value: 421301,
	text: '市辖区',
	parentId: 421300
}, {
	value: 421303,
	text: '曾都区',
	parentId: 421300
}, {
	value: 421321,
	text: '随县',
	parentId: 421300
}, {
	value: 421381,
	text: '广水市',
	parentId: 421300
}, {
	value: 422801,
	text: '恩施市',
	parentId: 422800
}, {
	value: 422802,
	text: '利川市',
	parentId: 422800
}, {
	value: 422822,
	text: '建始县',
	parentId: 422800
}, {
	value: 422823,
	text: '巴东县',
	parentId: 422800
}, {
	value: 422825,
	text: '宣恩县',
	parentId: 422800
}, {
	value: 422826,
	text: '咸丰县',
	parentId: 422800
}, {
	value: 422827,
	text: '来凤县',
	parentId: 422800
}, {
	value: 422828,
	text: '鹤峰县',
	parentId: 422800
}, {
	value: 429004,
	text: '仙桃市',
	parentId: 429000
}, {
	value: 429005,
	text: '潜江市',
	parentId: 429000
}, {
	value: 429006,
	text: '天门市',
	parentId: 429000
}, {
	value: 429021,
	text: '神农架林区',
	parentId: 429000
}, {
	value: 430101,
	text: '市辖区',
	parentId: 430100
}, {
	value: 430102,
	text: '芙蓉区',
	parentId: 430100
}, {
	value: 430103,
	text: '天心区',
	parentId: 430100
}, {
	value: 430104,
	text: '岳麓区',
	parentId: 430100
}, {
	value: 430105,
	text: '开福区',
	parentId: 430100
}, {
	value: 430111,
	text: '雨花区',
	parentId: 430100
}, {
	value: 430112,
	text: '望城区',
	parentId: 430100
}, {
	value: 430121,
	text: '长沙县',
	parentId: 430100
}, {
	value: 430124,
	text: '宁乡县',
	parentId: 430100
}, {
	value: 430181,
	text: '浏阳市',
	parentId: 430100
}, {
	value: 430201,
	text: '市辖区',
	parentId: 430200
}, {
	value: 430202,
	text: '荷塘区',
	parentId: 430200
}, {
	value: 430203,
	text: '芦淞区',
	parentId: 430200
}, {
	value: 430204,
	text: '石峰区',
	parentId: 430200
}, {
	value: 430211,
	text: '天元区',
	parentId: 430200
}, {
	value: 430221,
	text: '株洲县',
	parentId: 430200
}, {
	value: 430223,
	text: '攸县',
	parentId: 430200
}, {
	value: 430224,
	text: '茶陵县',
	parentId: 430200
}, {
	value: 430225,
	text: '炎陵县',
	parentId: 430200
}, {
	value: 430281,
	text: '醴陵市',
	parentId: 430200
}, {
	value: 430301,
	text: '市辖区',
	parentId: 430300
}, {
	value: 430302,
	text: '雨湖区',
	parentId: 430300
}, {
	value: 430304,
	text: '岳塘区',
	parentId: 430300
}, {
	value: 430321,
	text: '湘潭县',
	parentId: 430300
}, {
	value: 430381,
	text: '湘乡市',
	parentId: 430300
}, {
	value: 430382,
	text: '韶山市',
	parentId: 430300
}, {
	value: 430401,
	text: '市辖区',
	parentId: 430400
}, {
	value: 430405,
	text: '珠晖区',
	parentId: 430400
}, {
	value: 430406,
	text: '雁峰区',
	parentId: 430400
}, {
	value: 430407,
	text: '石鼓区',
	parentId: 430400
}, {
	value: 430408,
	text: '蒸湘区',
	parentId: 430400
}, {
	value: 430412,
	text: '南岳区',
	parentId: 430400
}, {
	value: 430421,
	text: '衡阳县',
	parentId: 430400
}, {
	value: 430422,
	text: '衡南县',
	parentId: 430400
}, {
	value: 430423,
	text: '衡山县',
	parentId: 430400
}, {
	value: 430424,
	text: '衡东县',
	parentId: 430400
}, {
	value: 430426,
	text: '祁东县',
	parentId: 430400
}, {
	value: 430481,
	text: '耒阳市',
	parentId: 430400
}, {
	value: 430482,
	text: '常宁市',
	parentId: 430400
}, {
	value: 430501,
	text: '市辖区',
	parentId: 430500
}, {
	value: 430502,
	text: '双清区',
	parentId: 430500
}, {
	value: 430503,
	text: '大祥区',
	parentId: 430500
}, {
	value: 430511,
	text: '北塔区',
	parentId: 430500
}, {
	value: 430521,
	text: '邵东县',
	parentId: 430500
}, {
	value: 430522,
	text: '新邵县',
	parentId: 430500
}, {
	value: 430523,
	text: '邵阳县',
	parentId: 430500
}, {
	value: 430524,
	text: '隆回县',
	parentId: 430500
}, {
	value: 430525,
	text: '洞口县',
	parentId: 430500
}, {
	value: 430527,
	text: '绥宁县',
	parentId: 430500
}, {
	value: 430528,
	text: '新宁县',
	parentId: 430500
}, {
	value: 430529,
	text: '城步苗族自治县',
	parentId: 430500
}, {
	value: 430581,
	text: '武冈市',
	parentId: 430500
}, {
	value: 430601,
	text: '市辖区',
	parentId: 430600
}, {
	value: 430602,
	text: '岳阳楼区',
	parentId: 430600
}, {
	value: 430603,
	text: '云溪区',
	parentId: 430600
}, {
	value: 430611,
	text: '君山区',
	parentId: 430600
}, {
	value: 430621,
	text: '岳阳县',
	parentId: 430600
}, {
	value: 430623,
	text: '华容县',
	parentId: 430600
}, {
	value: 430624,
	text: '湘阴县',
	parentId: 430600
}, {
	value: 430626,
	text: '平江县',
	parentId: 430600
}, {
	value: 430681,
	text: '汨罗市',
	parentId: 430600
}, {
	value: 430682,
	text: '临湘市',
	parentId: 430600
}, {
	value: 430701,
	text: '市辖区',
	parentId: 430700
}, {
	value: 430702,
	text: '武陵区',
	parentId: 430700
}, {
	value: 430703,
	text: '鼎城区',
	parentId: 430700
}, {
	value: 430721,
	text: '安乡县',
	parentId: 430700
}, {
	value: 430722,
	text: '汉寿县',
	parentId: 430700
}, {
	value: 430723,
	text: '澧县',
	parentId: 430700
}, {
	value: 430724,
	text: '临澧县',
	parentId: 430700
}, {
	value: 430725,
	text: '桃源县',
	parentId: 430700
}, {
	value: 430726,
	text: '石门县',
	parentId: 430700
}, {
	value: 430781,
	text: '津市市',
	parentId: 430700
}, {
	value: 430801,
	text: '市辖区',
	parentId: 430800
}, {
	value: 430802,
	text: '永定区',
	parentId: 430800
}, {
	value: 430811,
	text: '武陵源区',
	parentId: 430800
}, {
	value: 430821,
	text: '慈利县',
	parentId: 430800
}, {
	value: 430822,
	text: '桑植县',
	parentId: 430800
}, {
	value: 430901,
	text: '市辖区',
	parentId: 430900
}, {
	value: 430902,
	text: '资阳区',
	parentId: 430900
}, {
	value: 430903,
	text: '赫山区',
	parentId: 430900
}, {
	value: 430921,
	text: '南县',
	parentId: 430900
}, {
	value: 430922,
	text: '桃江县',
	parentId: 430900
}, {
	value: 430923,
	text: '安化县',
	parentId: 430900
}, {
	value: 430981,
	text: '沅江市',
	parentId: 430900
}, {
	value: 431001,
	text: '市辖区',
	parentId: 431000
}, {
	value: 431002,
	text: '北湖区',
	parentId: 431000
}, {
	value: 431003,
	text: '苏仙区',
	parentId: 431000
}, {
	value: 431021,
	text: '桂阳县',
	parentId: 431000
}, {
	value: 431022,
	text: '宜章县',
	parentId: 431000
}, {
	value: 431023,
	text: '永兴县',
	parentId: 431000
}, {
	value: 431024,
	text: '嘉禾县',
	parentId: 431000
}, {
	value: 431025,
	text: '临武县',
	parentId: 431000
}, {
	value: 431026,
	text: '汝城县',
	parentId: 431000
}, {
	value: 431027,
	text: '桂东县',
	parentId: 431000
}, {
	value: 431028,
	text: '安仁县',
	parentId: 431000
}, {
	value: 431081,
	text: '资兴市',
	parentId: 431000
}, {
	value: 431101,
	text: '市辖区',
	parentId: 431100
}, {
	value: 431102,
	text: '零陵区',
	parentId: 431100
}, {
	value: 431103,
	text: '冷水滩区',
	parentId: 431100
}, {
	value: 431121,
	text: '祁阳县',
	parentId: 431100
}, {
	value: 431122,
	text: '东安县',
	parentId: 431100
}, {
	value: 431123,
	text: '双牌县',
	parentId: 431100
}, {
	value: 431124,
	text: '道县',
	parentId: 431100
}, {
	value: 431125,
	text: '江永县',
	parentId: 431100
}, {
	value: 431126,
	text: '宁远县',
	parentId: 431100
}, {
	value: 431127,
	text: '蓝山县',
	parentId: 431100
}, {
	value: 431128,
	text: '新田县',
	parentId: 431100
}, {
	value: 431129,
	text: '江华瑶族自治县',
	parentId: 431100
}, {
	value: 431201,
	text: '市辖区',
	parentId: 431200
}, {
	value: 431202,
	text: '鹤城区',
	parentId: 431200
}, {
	value: 431221,
	text: '中方县',
	parentId: 431200
}, {
	value: 431222,
	text: '沅陵县',
	parentId: 431200
}, {
	value: 431223,
	text: '辰溪县',
	parentId: 431200
}, {
	value: 431224,
	text: '溆浦县',
	parentId: 431200
}, {
	value: 431225,
	text: '会同县',
	parentId: 431200
}, {
	value: 431226,
	text: '麻阳苗族自治县',
	parentId: 431200
}, {
	value: 431227,
	text: '新晃侗族自治县',
	parentId: 431200
}, {
	value: 431228,
	text: '芷江侗族自治县',
	parentId: 431200
}, {
	value: 431229,
	text: '靖州苗族侗族自治县',
	parentId: 431200
}, {
	value: 431230,
	text: '通道侗族自治县',
	parentId: 431200
}, {
	value: 431281,
	text: '洪江市',
	parentId: 431200
}, {
	value: 431301,
	text: '市辖区',
	parentId: 431300
}, {
	value: 431302,
	text: '娄星区',
	parentId: 431300
}, {
	value: 431321,
	text: '双峰县',
	parentId: 431300
}, {
	value: 431322,
	text: '新化县',
	parentId: 431300
}, {
	value: 431381,
	text: '冷水江市',
	parentId: 431300
}, {
	value: 431382,
	text: '涟源市',
	parentId: 431300
}, {
	value: 433101,
	text: '吉首市',
	parentId: 433100
}, {
	value: 433122,
	text: '泸溪县',
	parentId: 433100
}, {
	value: 433123,
	text: '凤凰县',
	parentId: 433100
}, {
	value: 433124,
	text: '花垣县',
	parentId: 433100
}, {
	value: 433125,
	text: '保靖县',
	parentId: 433100
}, {
	value: 433126,
	text: '古丈县',
	parentId: 433100
}, {
	value: 433127,
	text: '永顺县',
	parentId: 433100
}, {
	value: 433130,
	text: '龙山县',
	parentId: 433100
}, {
	value: 440101,
	text: '市辖区',
	parentId: 440100
}, {
	value: 440103,
	text: '荔湾区',
	parentId: 440100
}, {
	value: 440104,
	text: '越秀区',
	parentId: 440100
}, {
	value: 440105,
	text: '海珠区',
	parentId: 440100
}, {
	value: 440106,
	text: '天河区',
	parentId: 440100
}, {
	value: 440111,
	text: '白云区',
	parentId: 440100
}, {
	value: 440112,
	text: '黄埔区',
	parentId: 440100
}, {
	value: 440113,
	text: '番禺区',
	parentId: 440100
}, {
	value: 440114,
	text: '花都区',
	parentId: 440100
}, {
	value: 440115,
	text: '南沙区',
	parentId: 440100
}, {
	value: 440116,
	text: '萝岗区',
	parentId: 440100
}, {
	value: 440117,
	text: '从化区',
	parentId: 440100
}, {
	value: 440118,
	text: '增城区',
	parentId: 440100
}, {
	value: 440201,
	text: '市辖区',
	parentId: 440200
}, {
	value: 440203,
	text: '武江区',
	parentId: 440200
}, {
	value: 440204,
	text: '浈江区',
	parentId: 440200
}, {
	value: 440205,
	text: '曲江区',
	parentId: 440200
}, {
	value: 440222,
	text: '始兴县',
	parentId: 440200
}, {
	value: 440224,
	text: '仁化县',
	parentId: 440200
}, {
	value: 440229,
	text: '翁源县',
	parentId: 440200
}, {
	value: 440232,
	text: '乳源瑶族自治县',
	parentId: 440200
}, {
	value: 440233,
	text: '新丰县',
	parentId: 440200
}, {
	value: 440281,
	text: '乐昌市',
	parentId: 440200
}, {
	value: 440282,
	text: '南雄市',
	parentId: 440200
}, {
	value: 440301,
	text: '市辖区',
	parentId: 440300
}, {
	value: 440303,
	text: '罗湖区',
	parentId: 440300
}, {
	value: 440304,
	text: '福田区',
	parentId: 440300
}, {
	value: 440305,
	text: '南山区',
	parentId: 440300
}, {
	value: 440306,
	text: '宝安区',
	parentId: 440300
}, {
	value: 440307,
	text: '龙岗区',
	parentId: 440300
}, {
	value: 440308,
	text: '盐田区',
	parentId: 440300
}, {
	value: 440401,
	text: '市辖区',
	parentId: 440400
}, {
	value: 440402,
	text: '香洲区',
	parentId: 440400
}, {
	value: 440403,
	text: '斗门区',
	parentId: 440400
}, {
	value: 440404,
	text: '金湾区',
	parentId: 440400
}, {
	value: 440501,
	text: '市辖区',
	parentId: 440500
}, {
	value: 440507,
	text: '龙湖区',
	parentId: 440500
}, {
	value: 440511,
	text: '金平区',
	parentId: 440500
}, {
	value: 440512,
	text: '濠江区',
	parentId: 440500
}, {
	value: 440513,
	text: '潮阳区',
	parentId: 440500
}, {
	value: 440514,
	text: '潮南区',
	parentId: 440500
}, {
	value: 440515,
	text: '澄海区',
	parentId: 440500
}, {
	value: 440523,
	text: '南澳县',
	parentId: 440500
}, {
	value: 440601,
	text: '市辖区',
	parentId: 440600
}, {
	value: 440604,
	text: '禅城区',
	parentId: 440600
}, {
	value: 440605,
	text: '南海区',
	parentId: 440600
}, {
	value: 440606,
	text: '顺德区',
	parentId: 440600
}, {
	value: 440607,
	text: '三水区',
	parentId: 440600
}, {
	value: 440608,
	text: '高明区',
	parentId: 440600
}, {
	value: 440701,
	text: '市辖区',
	parentId: 440700
}, {
	value: 440703,
	text: '蓬江区',
	parentId: 440700
}, {
	value: 440704,
	text: '江海区',
	parentId: 440700
}, {
	value: 440705,
	text: '新会区',
	parentId: 440700
}, {
	value: 440781,
	text: '台山市',
	parentId: 440700
}, {
	value: 440783,
	text: '开平市',
	parentId: 440700
}, {
	value: 440784,
	text: '鹤山市',
	parentId: 440700
}, {
	value: 440785,
	text: '恩平市',
	parentId: 440700
}, {
	value: 440801,
	text: '市辖区',
	parentId: 440800
}, {
	value: 440802,
	text: '赤坎区',
	parentId: 440800
}, {
	value: 440803,
	text: '霞山区',
	parentId: 440800
}, {
	value: 440804,
	text: '坡头区',
	parentId: 440800
}, {
	value: 440811,
	text: '麻章区',
	parentId: 440800
}, {
	value: 440823,
	text: '遂溪县',
	parentId: 440800
}, {
	value: 440825,
	text: '徐闻县',
	parentId: 440800
}, {
	value: 440881,
	text: '廉江市',
	parentId: 440800
}, {
	value: 440882,
	text: '雷州市',
	parentId: 440800
}, {
	value: 440883,
	text: '吴川市',
	parentId: 440800
}, {
	value: 440901,
	text: '市辖区',
	parentId: 440900
}, {
	value: 440902,
	text: '茂南区',
	parentId: 440900
}, {
	value: 440904,
	text: '电白区',
	parentId: 440900
}, {
	value: 440981,
	text: '高州市',
	parentId: 440900
}, {
	value: 440982,
	text: '化州市',
	parentId: 440900
}, {
	value: 440983,
	text: '信宜市',
	parentId: 440900
}, {
	value: 441201,
	text: '市辖区',
	parentId: 441200
}, {
	value: 441202,
	text: '端州区',
	parentId: 441200
}, {
	value: 441203,
	text: '鼎湖区',
	parentId: 441200
}, {
	value: 441223,
	text: '广宁县',
	parentId: 441200
}, {
	value: 441224,
	text: '怀集县',
	parentId: 441200
}, {
	value: 441225,
	text: '封开县',
	parentId: 441200
}, {
	value: 441226,
	text: '德庆县',
	parentId: 441200
}, {
	value: 441283,
	text: '高要市',
	parentId: 441200
}, {
	value: 441284,
	text: '四会市',
	parentId: 441200
}, {
	value: 441301,
	text: '市辖区',
	parentId: 441300
}, {
	value: 441302,
	text: '惠城区',
	parentId: 441300
}, {
	value: 441303,
	text: '惠阳区',
	parentId: 441300
}, {
	value: 441322,
	text: '博罗县',
	parentId: 441300
}, {
	value: 441323,
	text: '惠东县',
	parentId: 441300
}, {
	value: 441324,
	text: '龙门县',
	parentId: 441300
}, {
	value: 441401,
	text: '市辖区',
	parentId: 441400
}, {
	value: 441402,
	text: '梅江区',
	parentId: 441400
}, {
	value: 441403,
	text: '梅县区',
	parentId: 441400
}, {
	value: 441422,
	text: '大埔县',
	parentId: 441400
}, {
	value: 441423,
	text: '丰顺县',
	parentId: 441400
}, {
	value: 441424,
	text: '五华县',
	parentId: 441400
}, {
	value: 441426,
	text: '平远县',
	parentId: 441400
}, {
	value: 441427,
	text: '蕉岭县',
	parentId: 441400
}, {
	value: 441481,
	text: '兴宁市',
	parentId: 441400
}, {
	value: 441501,
	text: '市辖区',
	parentId: 441500
}, {
	value: 441502,
	text: '城区',
	parentId: 441500
}, {
	value: 441521,
	text: '海丰县',
	parentId: 441500
}, {
	value: 441523,
	text: '陆河县',
	parentId: 441500
}, {
	value: 441581,
	text: '陆丰市',
	parentId: 441500
}, {
	value: 441601,
	text: '市辖区',
	parentId: 441600
}, {
	value: 441602,
	text: '源城区',
	parentId: 441600
}, {
	value: 441621,
	text: '紫金县',
	parentId: 441600
}, {
	value: 441622,
	text: '龙川县',
	parentId: 441600
}, {
	value: 441623,
	text: '连平县',
	parentId: 441600
}, {
	value: 441624,
	text: '和平县',
	parentId: 441600
}, {
	value: 441625,
	text: '东源县',
	parentId: 441600
}, {
	value: 441701,
	text: '市辖区',
	parentId: 441700
}, {
	value: 441702,
	text: '江城区',
	parentId: 441700
}, {
	value: 441721,
	text: '阳西县',
	parentId: 441700
}, {
	value: 441723,
	text: '阳东县',
	parentId: 441700
}, {
	value: 441781,
	text: '阳春市',
	parentId: 441700
}, {
	value: 441801,
	text: '市辖区',
	parentId: 441800
}, {
	value: 441802,
	text: '清城区',
	parentId: 441800
}, {
	value: 441803,
	text: '清新区',
	parentId: 441800
}, {
	value: 441821,
	text: '佛冈县',
	parentId: 441800
}, {
	value: 441823,
	text: '阳山县',
	parentId: 441800
}, {
	value: 441825,
	text: '连山壮族瑶族自治县',
	parentId: 441800
}, {
	value: 441826,
	text: '连南瑶族自治县',
	parentId: 441800
}, {
	value: 441881,
	text: '英德市',
	parentId: 441800
}, {
	value: 441882,
	text: '连州市',
	parentId: 441800
}, {
	value: 445101,
	text: '市辖区',
	parentId: 445100
}, {
	value: 445102,
	text: '湘桥区',
	parentId: 445100
}, {
	value: 445103,
	text: '潮安区',
	parentId: 445100
}, {
	value: 445122,
	text: '饶平县',
	parentId: 445100
}, {
	value: 445201,
	text: '市辖区',
	parentId: 445200
}, {
	value: 445202,
	text: '榕城区',
	parentId: 445200
}, {
	value: 445203,
	text: '揭东区',
	parentId: 445200
}, {
	value: 445222,
	text: '揭西县',
	parentId: 445200
}, {
	value: 445224,
	text: '惠来县',
	parentId: 445200
}, {
	value: 445281,
	text: '普宁市',
	parentId: 445200
}, {
	value: 445301,
	text: '市辖区',
	parentId: 445300
}, {
	value: 445302,
	text: '云城区',
	parentId: 445300
}, {
	value: 445303,
	text: '云安区',
	parentId: 445300
}, {
	value: 445321,
	text: '新兴县',
	parentId: 445300
}, {
	value: 445322,
	text: '郁南县',
	parentId: 445300
}, {
	value: 445381,
	text: '罗定市',
	parentId: 445300
}, {
	value: 450101,
	text: '市辖区',
	parentId: 450100
}, {
	value: 450102,
	text: '兴宁区',
	parentId: 450100
}, {
	value: 450103,
	text: '青秀区',
	parentId: 450100
}, {
	value: 450105,
	text: '江南区',
	parentId: 450100
}, {
	value: 450107,
	text: '西乡塘区',
	parentId: 450100
}, {
	value: 450108,
	text: '良庆区',
	parentId: 450100
}, {
	value: 450109,
	text: '邕宁区',
	parentId: 450100
}, {
	value: 450122,
	text: '武鸣县',
	parentId: 450100
}, {
	value: 450123,
	text: '隆安县',
	parentId: 450100
}, {
	value: 450124,
	text: '马山县',
	parentId: 450100
}, {
	value: 450125,
	text: '上林县',
	parentId: 450100
}, {
	value: 450126,
	text: '宾阳县',
	parentId: 450100
}, {
	value: 450127,
	text: '横县',
	parentId: 450100
}, {
	value: 450201,
	text: '市辖区',
	parentId: 450200
}, {
	value: 450202,
	text: '城中区',
	parentId: 450200
}, {
	value: 450203,
	text: '鱼峰区',
	parentId: 450200
}, {
	value: 450204,
	text: '柳南区',
	parentId: 450200
}, {
	value: 450205,
	text: '柳北区',
	parentId: 450200
}, {
	value: 450221,
	text: '柳江县',
	parentId: 450200
}, {
	value: 450222,
	text: '柳城县',
	parentId: 450200
}, {
	value: 450223,
	text: '鹿寨县',
	parentId: 450200
}, {
	value: 450224,
	text: '融安县',
	parentId: 450200
}, {
	value: 450225,
	text: '融水苗族自治县',
	parentId: 450200
}, {
	value: 450226,
	text: '三江侗族自治县',
	parentId: 450200
}, {
	value: 450301,
	text: '市辖区',
	parentId: 450300
}, {
	value: 450302,
	text: '秀峰区',
	parentId: 450300
}, {
	value: 450303,
	text: '叠彩区',
	parentId: 450300
}, {
	value: 450304,
	text: '象山区',
	parentId: 450300
}, {
	value: 450305,
	text: '七星区',
	parentId: 450300
}, {
	value: 450311,
	text: '雁山区',
	parentId: 450300
}, {
	value: 450312,
	text: '临桂区',
	parentId: 450300
}, {
	value: 450321,
	text: '阳朔县',
	parentId: 450300
}, {
	value: 450323,
	text: '灵川县',
	parentId: 450300
}, {
	value: 450324,
	text: '全州县',
	parentId: 450300
}, {
	value: 450325,
	text: '兴安县',
	parentId: 450300
}, {
	value: 450326,
	text: '永福县',
	parentId: 450300
}, {
	value: 450327,
	text: '灌阳县',
	parentId: 450300
}, {
	value: 450328,
	text: '龙胜各族自治县',
	parentId: 450300
}, {
	value: 450329,
	text: '资源县',
	parentId: 450300
}, {
	value: 450330,
	text: '平乐县',
	parentId: 450300
}, {
	value: 450331,
	text: '荔浦县',
	parentId: 450300
}, {
	value: 450332,
	text: '恭城瑶族自治县',
	parentId: 450300
}, {
	value: 450401,
	text: '市辖区',
	parentId: 450400
}, {
	value: 450403,
	text: '万秀区',
	parentId: 450400
}, {
	value: 450405,
	text: '长洲区',
	parentId: 450400
}, {
	value: 450406,
	text: '龙圩区',
	parentId: 450400
}, {
	value: 450421,
	text: '苍梧县',
	parentId: 450400
}, {
	value: 450422,
	text: '藤县',
	parentId: 450400
}, {
	value: 450423,
	text: '蒙山县',
	parentId: 450400
}, {
	value: 450481,
	text: '岑溪市',
	parentId: 450400
}, {
	value: 450501,
	text: '市辖区',
	parentId: 450500
}, {
	value: 450502,
	text: '海城区',
	parentId: 450500
}, {
	value: 450503,
	text: '银海区',
	parentId: 450500
}, {
	value: 450512,
	text: '铁山港区',
	parentId: 450500
}, {
	value: 450521,
	text: '合浦县',
	parentId: 450500
}, {
	value: 450601,
	text: '市辖区',
	parentId: 450600
}, {
	value: 450602,
	text: '港口区',
	parentId: 450600
}, {
	value: 450603,
	text: '防城区',
	parentId: 450600
}, {
	value: 450621,
	text: '上思县',
	parentId: 450600
}, {
	value: 450681,
	text: '东兴市',
	parentId: 450600
}, {
	value: 450701,
	text: '市辖区',
	parentId: 450700
}, {
	value: 450702,
	text: '钦南区',
	parentId: 450700
}, {
	value: 450703,
	text: '钦北区',
	parentId: 450700
}, {
	value: 450721,
	text: '灵山县',
	parentId: 450700
}, {
	value: 450722,
	text: '浦北县',
	parentId: 450700
}, {
	value: 450801,
	text: '市辖区',
	parentId: 450800
}, {
	value: 450802,
	text: '港北区',
	parentId: 450800
}, {
	value: 450803,
	text: '港南区',
	parentId: 450800
}, {
	value: 450804,
	text: '覃塘区',
	parentId: 450800
}, {
	value: 450821,
	text: '平南县',
	parentId: 450800
}, {
	value: 450881,
	text: '桂平市',
	parentId: 450800
}, {
	value: 450901,
	text: '市辖区',
	parentId: 450900
}, {
	value: 450902,
	text: '玉州区',
	parentId: 450900
}, {
	value: 450903,
	text: '福绵区',
	parentId: 450900
}, {
	value: 450921,
	text: '容县',
	parentId: 450900
}, {
	value: 450922,
	text: '陆川县',
	parentId: 450900
}, {
	value: 450923,
	text: '博白县',
	parentId: 450900
}, {
	value: 450924,
	text: '兴业县',
	parentId: 450900
}, {
	value: 450981,
	text: '北流市',
	parentId: 450900
}, {
	value: 451001,
	text: '市辖区',
	parentId: 451000
}, {
	value: 451002,
	text: '右江区',
	parentId: 451000
}, {
	value: 451021,
	text: '田阳县',
	parentId: 451000
}, {
	value: 451022,
	text: '田东县',
	parentId: 451000
}, {
	value: 451023,
	text: '平果县',
	parentId: 451000
}, {
	value: 451024,
	text: '德保县',
	parentId: 451000
}, {
	value: 451025,
	text: '靖西县',
	parentId: 451000
}, {
	value: 451026,
	text: '那坡县',
	parentId: 451000
}, {
	value: 451027,
	text: '凌云县',
	parentId: 451000
}, {
	value: 451028,
	text: '乐业县',
	parentId: 451000
}, {
	value: 451029,
	text: '田林县',
	parentId: 451000
}, {
	value: 451030,
	text: '西林县',
	parentId: 451000
}, {
	value: 451031,
	text: '隆林各族自治县',
	parentId: 451000
}, {
	value: 451101,
	text: '市辖区',
	parentId: 451100
}, {
	value: 451102,
	text: '八步区',
	parentId: 451100
}, {
	value: 451121,
	text: '昭平县',
	parentId: 451100
}, {
	value: 451122,
	text: '钟山县',
	parentId: 451100
}, {
	value: 451123,
	text: '富川瑶族自治县',
	parentId: 451100
}, {
	value: 451201,
	text: '市辖区',
	parentId: 451200
}, {
	value: 451202,
	text: '金城江区',
	parentId: 451200
}, {
	value: 451221,
	text: '南丹县',
	parentId: 451200
}, {
	value: 451222,
	text: '天峨县',
	parentId: 451200
}, {
	value: 451223,
	text: '凤山县',
	parentId: 451200
}, {
	value: 451224,
	text: '东兰县',
	parentId: 451200
}, {
	value: 451225,
	text: '罗城仫佬族自治县',
	parentId: 451200
}, {
	value: 451226,
	text: '环江毛南族自治县',
	parentId: 451200
}, {
	value: 451227,
	text: '巴马瑶族自治县',
	parentId: 451200
}, {
	value: 451228,
	text: '都安瑶族自治县',
	parentId: 451200
}, {
	value: 451229,
	text: '大化瑶族自治县',
	parentId: 451200
}, {
	value: 451281,
	text: '宜州市',
	parentId: 451200
}, {
	value: 451301,
	text: '市辖区',
	parentId: 451300
}, {
	value: 451302,
	text: '兴宾区',
	parentId: 451300
}, {
	value: 451321,
	text: '忻城县',
	parentId: 451300
}, {
	value: 451322,
	text: '象州县',
	parentId: 451300
}, {
	value: 451323,
	text: '武宣县',
	parentId: 451300
}, {
	value: 451324,
	text: '金秀瑶族自治县',
	parentId: 451300
}, {
	value: 451381,
	text: '合山市',
	parentId: 451300
}, {
	value: 451401,
	text: '市辖区',
	parentId: 451400
}, {
	value: 451402,
	text: '江州区',
	parentId: 451400
}, {
	value: 451421,
	text: '扶绥县',
	parentId: 451400
}, {
	value: 451422,
	text: '宁明县',
	parentId: 451400
}, {
	value: 451423,
	text: '龙州县',
	parentId: 451400
}, {
	value: 451424,
	text: '大新县',
	parentId: 451400
}, {
	value: 451425,
	text: '天等县',
	parentId: 451400
}, {
	value: 451481,
	text: '凭祥市',
	parentId: 451400
}, {
	value: 460101,
	text: '市辖区',
	parentId: 460100
}, {
	value: 460105,
	text: '秀英区',
	parentId: 460100
}, {
	value: 460106,
	text: '龙华区',
	parentId: 460100
}, {
	value: 460107,
	text: '琼山区',
	parentId: 460100
}, {
	value: 460108,
	text: '美兰区',
	parentId: 460100
}, {
	value: 460201,
	text: '市辖区',
	parentId: 460200
}, {
	value: 460202,
	text: '海棠区',
	parentId: 460200
}, {
	value: 460203,
	text: '吉阳区',
	parentId: 460200
}, {
	value: 460204,
	text: '天涯区',
	parentId: 460200
}, {
	value: 460205,
	text: '崖州区',
	parentId: 460200
}, {
	value: 469001,
	text: '五指山市',
	parentId: 469000
}, {
	value: 469002,
	text: '琼海市',
	parentId: 469000
}, {
	value: 469003,
	text: '儋州市',
	parentId: 469000
}, {
	value: 469005,
	text: '文昌市',
	parentId: 469000
}, {
	value: 469006,
	text: '万宁市',
	parentId: 469000
}, {
	value: 469007,
	text: '东方市',
	parentId: 469000
}, {
	value: 469021,
	text: '定安县',
	parentId: 469000
}, {
	value: 469022,
	text: '屯昌县',
	parentId: 469000
}, {
	value: 469023,
	text: '澄迈县',
	parentId: 469000
}, {
	value: 469024,
	text: '临高县',
	parentId: 469000
}, {
	value: 469025,
	text: '白沙黎族自治县',
	parentId: 469000
}, {
	value: 469026,
	text: '昌江黎族自治县',
	parentId: 469000
}, {
	value: 469027,
	text: '乐东黎族自治县',
	parentId: 469000
}, {
	value: 469028,
	text: '陵水黎族自治县',
	parentId: 469000
}, {
	value: 469029,
	text: '保亭黎族苗族自治县',
	parentId: 469000
}, {
	value: 469030,
	text: '琼中黎族苗族自治县',
	parentId: 469000
}, {
	value: 500101,
	text: '万州区',
	parentId: 500100
}, {
	value: 500102,
	text: '涪陵区',
	parentId: 500100
}, {
	value: 500103,
	text: '渝中区',
	parentId: 500100
}, {
	value: 500104,
	text: '大渡口区',
	parentId: 500100
}, {
	value: 500105,
	text: '江北区',
	parentId: 500100
}, {
	value: 500106,
	text: '沙坪坝区',
	parentId: 500100
}, {
	value: 500107,
	text: '九龙坡区',
	parentId: 500100
}, {
	value: 500108,
	text: '南岸区',
	parentId: 500100
}, {
	value: 500109,
	text: '北碚区',
	parentId: 500100
}, {
	value: 500110,
	text: '綦江区',
	parentId: 500100
}, {
	value: 500111,
	text: '大足区',
	parentId: 500100
}, {
	value: 500112,
	text: '渝北区',
	parentId: 500100
}, {
	value: 500113,
	text: '巴南区',
	parentId: 500100
}, {
	value: 500114,
	text: '黔江区',
	parentId: 500100
}, {
	value: 500115,
	text: '长寿区',
	parentId: 500100
}, {
	value: 500116,
	text: '江津区',
	parentId: 500100
}, {
	value: 500117,
	text: '合川区',
	parentId: 500100
}, {
	value: 500118,
	text: '永川区',
	parentId: 500100
}, {
	value: 500119,
	text: '南川区',
	parentId: 500100
}, {
	value: 500120,
	text: '璧山区',
	parentId: 500100
}, {
	value: 500151,
	text: '铜梁区',
	parentId: 500100
}, {
	value: 500223,
	text: '潼南县',
	parentId: 500200
}, {
	value: 500226,
	text: '荣昌县',
	parentId: 500200
}, {
	value: 500228,
	text: '梁平县',
	parentId: 500200
}, {
	value: 500229,
	text: '城口县',
	parentId: 500200
}, {
	value: 500230,
	text: '丰都县',
	parentId: 500200
}, {
	value: 500231,
	text: '垫江县',
	parentId: 500200
}, {
	value: 500232,
	text: '武隆县',
	parentId: 500200
}, {
	value: 500233,
	text: '忠县',
	parentId: 500200
}, {
	value: 500234,
	text: '开县',
	parentId: 500200
}, {
	value: 500235,
	text: '云阳县',
	parentId: 500200
}, {
	value: 500236,
	text: '奉节县',
	parentId: 500200
}, {
	value: 500237,
	text: '巫山县',
	parentId: 500200
}, {
	value: 500238,
	text: '巫溪县',
	parentId: 500200
}, {
	value: 500240,
	text: '石柱土家族自治县',
	parentId: 500200
}, {
	value: 500241,
	text: '秀山土家族苗族自治县',
	parentId: 500200
}, {
	value: 500242,
	text: '酉阳土家族苗族自治县',
	parentId: 500200
}, {
	value: 500243,
	text: '彭水苗族土家族自治县',
	parentId: 500200
}, {
	value: 510101,
	text: '市辖区',
	parentId: 510100
}, {
	value: 510104,
	text: '锦江区',
	parentId: 510100
}, {
	value: 510105,
	text: '青羊区',
	parentId: 510100
}, {
	value: 510106,
	text: '金牛区',
	parentId: 510100
}, {
	value: 510107,
	text: '武侯区',
	parentId: 510100
}, {
	value: 510108,
	text: '成华区',
	parentId: 510100
}, {
	value: 510112,
	text: '龙泉驿区',
	parentId: 510100
}, {
	value: 510113,
	text: '青白江区',
	parentId: 510100
}, {
	value: 510114,
	text: '新都区',
	parentId: 510100
}, {
	value: 510115,
	text: '温江区',
	parentId: 510100
}, {
	value: 510121,
	text: '金堂县',
	parentId: 510100
}, {
	value: 510122,
	text: '双流县',
	parentId: 510100
}, {
	value: 510124,
	text: '郫县',
	parentId: 510100
}, {
	value: 510129,
	text: '大邑县',
	parentId: 510100
}, {
	value: 510131,
	text: '蒲江县',
	parentId: 510100
}, {
	value: 510132,
	text: '新津县',
	parentId: 510100
}, {
	value: 510181,
	text: '都江堰市',
	parentId: 510100
}, {
	value: 510182,
	text: '彭州市',
	parentId: 510100
}, {
	value: 510183,
	text: '邛崃市',
	parentId: 510100
}, {
	value: 510184,
	text: '崇州市',
	parentId: 510100
}, {
	value: 510301,
	text: '市辖区',
	parentId: 510300
}, {
	value: 510302,
	text: '自流井区',
	parentId: 510300
}, {
	value: 510303,
	text: '贡井区',
	parentId: 510300
}, {
	value: 510304,
	text: '大安区',
	parentId: 510300
}, {
	value: 510311,
	text: '沿滩区',
	parentId: 510300
}, {
	value: 510321,
	text: '荣县',
	parentId: 510300
}, {
	value: 510322,
	text: '富顺县',
	parentId: 510300
}, {
	value: 510401,
	text: '市辖区',
	parentId: 510400
}, {
	value: 510402,
	text: '东区',
	parentId: 510400
}, {
	value: 510403,
	text: '西区',
	parentId: 510400
}, {
	value: 510411,
	text: '仁和区',
	parentId: 510400
}, {
	value: 510421,
	text: '米易县',
	parentId: 510400
}, {
	value: 510422,
	text: '盐边县',
	parentId: 510400
}, {
	value: 510501,
	text: '市辖区',
	parentId: 510500
}, {
	value: 510502,
	text: '江阳区',
	parentId: 510500
}, {
	value: 510503,
	text: '纳溪区',
	parentId: 510500
}, {
	value: 510504,
	text: '龙马潭区',
	parentId: 510500
}, {
	value: 510521,
	text: '泸县',
	parentId: 510500
}, {
	value: 510522,
	text: '合江县',
	parentId: 510500
}, {
	value: 510524,
	text: '叙永县',
	parentId: 510500
}, {
	value: 510525,
	text: '古蔺县',
	parentId: 510500
}, {
	value: 510601,
	text: '市辖区',
	parentId: 510600
}, {
	value: 510603,
	text: '旌阳区',
	parentId: 510600
}, {
	value: 510623,
	text: '中江县',
	parentId: 510600
}, {
	value: 510626,
	text: '罗江县',
	parentId: 510600
}, {
	value: 510681,
	text: '广汉市',
	parentId: 510600
}, {
	value: 510682,
	text: '什邡市',
	parentId: 510600
}, {
	value: 510683,
	text: '绵竹市',
	parentId: 510600
}, {
	value: 510701,
	text: '市辖区',
	parentId: 510700
}, {
	value: 510703,
	text: '涪城区',
	parentId: 510700
}, {
	value: 510704,
	text: '游仙区',
	parentId: 510700
}, {
	value: 510722,
	text: '三台县',
	parentId: 510700
}, {
	value: 510723,
	text: '盐亭县',
	parentId: 510700
}, {
	value: 510724,
	text: '安县',
	parentId: 510700
}, {
	value: 510725,
	text: '梓潼县',
	parentId: 510700
}, {
	value: 510726,
	text: '北川羌族自治县',
	parentId: 510700
}, {
	value: 510727,
	text: '平武县',
	parentId: 510700
}, {
	value: 510781,
	text: '江油市',
	parentId: 510700
}, {
	value: 510801,
	text: '市辖区',
	parentId: 510800
}, {
	value: 510802,
	text: '利州区',
	parentId: 510800
}, {
	value: 510811,
	text: '昭化区',
	parentId: 510800
}, {
	value: 510812,
	text: '朝天区',
	parentId: 510800
}, {
	value: 510821,
	text: '旺苍县',
	parentId: 510800
}, {
	value: 510822,
	text: '青川县',
	parentId: 510800
}, {
	value: 510823,
	text: '剑阁县',
	parentId: 510800
}, {
	value: 510824,
	text: '苍溪县',
	parentId: 510800
}, {
	value: 510901,
	text: '市辖区',
	parentId: 510900
}, {
	value: 510903,
	text: '船山区',
	parentId: 510900
}, {
	value: 510904,
	text: '安居区',
	parentId: 510900
}, {
	value: 510921,
	text: '蓬溪县',
	parentId: 510900
}, {
	value: 510922,
	text: '射洪县',
	parentId: 510900
}, {
	value: 510923,
	text: '大英县',
	parentId: 510900
}, {
	value: 511001,
	text: '市辖区',
	parentId: 511000
}, {
	value: 511002,
	text: '市中区',
	parentId: 511000
}, {
	value: 511011,
	text: '东兴区',
	parentId: 511000
}, {
	value: 511024,
	text: '威远县',
	parentId: 511000
}, {
	value: 511025,
	text: '资中县',
	parentId: 511000
}, {
	value: 511028,
	text: '隆昌县',
	parentId: 511000
}, {
	value: 511101,
	text: '市辖区',
	parentId: 511100
}, {
	value: 511102,
	text: '市中区',
	parentId: 511100
}, {
	value: 511111,
	text: '沙湾区',
	parentId: 511100
}, {
	value: 511112,
	text: '五通桥区',
	parentId: 511100
}, {
	value: 511113,
	text: '金口河区',
	parentId: 511100
}, {
	value: 511123,
	text: '犍为县',
	parentId: 511100
}, {
	value: 511124,
	text: '井研县',
	parentId: 511100
}, {
	value: 511126,
	text: '夹江县',
	parentId: 511100
}, {
	value: 511129,
	text: '沐川县',
	parentId: 511100
}, {
	value: 511132,
	text: '峨边彝族自治县',
	parentId: 511100
}, {
	value: 511133,
	text: '马边彝族自治县',
	parentId: 511100
}, {
	value: 511181,
	text: '峨眉山市',
	parentId: 511100
}, {
	value: 511301,
	text: '市辖区',
	parentId: 511300
}, {
	value: 511302,
	text: '顺庆区',
	parentId: 511300
}, {
	value: 511303,
	text: '高坪区',
	parentId: 511300
}, {
	value: 511304,
	text: '嘉陵区',
	parentId: 511300
}, {
	value: 511321,
	text: '南部县',
	parentId: 511300
}, {
	value: 511322,
	text: '营山县',
	parentId: 511300
}, {
	value: 511323,
	text: '蓬安县',
	parentId: 511300
}, {
	value: 511324,
	text: '仪陇县',
	parentId: 511300
}, {
	value: 511325,
	text: '西充县',
	parentId: 511300
}, {
	value: 511381,
	text: '阆中市',
	parentId: 511300
}, {
	value: 511401,
	text: '市辖区',
	parentId: 511400
}, {
	value: 511402,
	text: '东坡区',
	parentId: 511400
}, {
	value: 511421,
	text: '仁寿县',
	parentId: 511400
}, {
	value: 511422,
	text: '彭山县',
	parentId: 511400
}, {
	value: 511423,
	text: '洪雅县',
	parentId: 511400
}, {
	value: 511424,
	text: '丹棱县',
	parentId: 511400
}, {
	value: 511425,
	text: '青神县',
	parentId: 511400
}, {
	value: 511501,
	text: '市辖区',
	parentId: 511500
}, {
	value: 511502,
	text: '翠屏区',
	parentId: 511500
}, {
	value: 511503,
	text: '南溪区',
	parentId: 511500
}, {
	value: 511521,
	text: '宜宾县',
	parentId: 511500
}, {
	value: 511523,
	text: '江安县',
	parentId: 511500
}, {
	value: 511524,
	text: '长宁县',
	parentId: 511500
}, {
	value: 511525,
	text: '高县',
	parentId: 511500
}, {
	value: 511526,
	text: '珙县',
	parentId: 511500
}, {
	value: 511527,
	text: '筠连县',
	parentId: 511500
}, {
	value: 511528,
	text: '兴文县',
	parentId: 511500
}, {
	value: 511529,
	text: '屏山县',
	parentId: 511500
}, {
	value: 511601,
	text: '市辖区',
	parentId: 511600
}, {
	value: 511602,
	text: '广安区',
	parentId: 511600
}, {
	value: 511603,
	text: '前锋区',
	parentId: 511600
}, {
	value: 511621,
	text: '岳池县',
	parentId: 511600
}, {
	value: 511622,
	text: '武胜县',
	parentId: 511600
}, {
	value: 511623,
	text: '邻水县',
	parentId: 511600
}, {
	value: 511681,
	text: '华蓥市',
	parentId: 511600
}, {
	value: 511701,
	text: '市辖区',
	parentId: 511700
}, {
	value: 511702,
	text: '通川区',
	parentId: 511700
}, {
	value: 511703,
	text: '达川区',
	parentId: 511700
}, {
	value: 511722,
	text: '宣汉县',
	parentId: 511700
}, {
	value: 511723,
	text: '开江县',
	parentId: 511700
}, {
	value: 511724,
	text: '大竹县',
	parentId: 511700
}, {
	value: 511725,
	text: '渠县',
	parentId: 511700
}, {
	value: 511781,
	text: '万源市',
	parentId: 511700
}, {
	value: 511801,
	text: '市辖区',
	parentId: 511800
}, {
	value: 511802,
	text: '雨城区',
	parentId: 511800
}, {
	value: 511803,
	text: '名山区',
	parentId: 511800
}, {
	value: 511822,
	text: '荥经县',
	parentId: 511800
}, {
	value: 511823,
	text: '汉源县',
	parentId: 511800
}, {
	value: 511824,
	text: '石棉县',
	parentId: 511800
}, {
	value: 511825,
	text: '天全县',
	parentId: 511800
}, {
	value: 511826,
	text: '芦山县',
	parentId: 511800
}, {
	value: 511827,
	text: '宝兴县',
	parentId: 511800
}, {
	value: 511901,
	text: '市辖区',
	parentId: 511900
}, {
	value: 511902,
	text: '巴州区',
	parentId: 511900
}, {
	value: 511903,
	text: '恩阳区',
	parentId: 511900
}, {
	value: 511921,
	text: '通江县',
	parentId: 511900
}, {
	value: 511922,
	text: '南江县',
	parentId: 511900
}, {
	value: 511923,
	text: '平昌县',
	parentId: 511900
}, {
	value: 512001,
	text: '市辖区',
	parentId: 512000
}, {
	value: 512002,
	text: '雁江区',
	parentId: 512000
}, {
	value: 512021,
	text: '安岳县',
	parentId: 512000
}, {
	value: 512022,
	text: '乐至县',
	parentId: 512000
}, {
	value: 512081,
	text: '简阳市',
	parentId: 512000
}, {
	value: 513221,
	text: '汶川县',
	parentId: 513200
}, {
	value: 513222,
	text: '理县',
	parentId: 513200
}, {
	value: 513223,
	text: '茂县',
	parentId: 513200
}, {
	value: 513224,
	text: '松潘县',
	parentId: 513200
}, {
	value: 513225,
	text: '九寨沟县',
	parentId: 513200
}, {
	value: 513226,
	text: '金川县',
	parentId: 513200
}, {
	value: 513227,
	text: '小金县',
	parentId: 513200
}, {
	value: 513228,
	text: '黑水县',
	parentId: 513200
}, {
	value: 513229,
	text: '马尔康县',
	parentId: 513200
}, {
	value: 513230,
	text: '壤塘县',
	parentId: 513200
}, {
	value: 513231,
	text: '阿坝县',
	parentId: 513200
}, {
	value: 513232,
	text: '若尔盖县',
	parentId: 513200
}, {
	value: 513233,
	text: '红原县',
	parentId: 513200
}, {
	value: 513321,
	text: '康定县',
	parentId: 513300
}, {
	value: 513322,
	text: '泸定县',
	parentId: 513300
}, {
	value: 513323,
	text: '丹巴县',
	parentId: 513300
}, {
	value: 513324,
	text: '九龙县',
	parentId: 513300
}, {
	value: 513325,
	text: '雅江县',
	parentId: 513300
}, {
	value: 513326,
	text: '道孚县',
	parentId: 513300
}, {
	value: 513327,
	text: '炉霍县',
	parentId: 513300
}, {
	value: 513328,
	text: '甘孜县',
	parentId: 513300
}, {
	value: 513329,
	text: '新龙县',
	parentId: 513300
}, {
	value: 513330,
	text: '德格县',
	parentId: 513300
}, {
	value: 513331,
	text: '白玉县',
	parentId: 513300
}, {
	value: 513332,
	text: '石渠县',
	parentId: 513300
}, {
	value: 513333,
	text: '色达县',
	parentId: 513300
}, {
	value: 513334,
	text: '理塘县',
	parentId: 513300
}, {
	value: 513335,
	text: '巴塘县',
	parentId: 513300
}, {
	value: 513336,
	text: '乡城县',
	parentId: 513300
}, {
	value: 513337,
	text: '稻城县',
	parentId: 513300
}, {
	value: 513338,
	text: '得荣县',
	parentId: 513300
}, {
	value: 513401,
	text: '西昌市',
	parentId: 513400
}, {
	value: 513422,
	text: '木里藏族自治县',
	parentId: 513400
}, {
	value: 513423,
	text: '盐源县',
	parentId: 513400
}, {
	value: 513424,
	text: '德昌县',
	parentId: 513400
}, {
	value: 513425,
	text: '会理县',
	parentId: 513400
}, {
	value: 513426,
	text: '会东县',
	parentId: 513400
}, {
	value: 513427,
	text: '宁南县',
	parentId: 513400
}, {
	value: 513428,
	text: '普格县',
	parentId: 513400
}, {
	value: 513429,
	text: '布拖县',
	parentId: 513400
}, {
	value: 513430,
	text: '金阳县',
	parentId: 513400
}, {
	value: 513431,
	text: '昭觉县',
	parentId: 513400
}, {
	value: 513432,
	text: '喜德县',
	parentId: 513400
}, {
	value: 513433,
	text: '冕宁县',
	parentId: 513400
}, {
	value: 513434,
	text: '越西县',
	parentId: 513400
}, {
	value: 513435,
	text: '甘洛县',
	parentId: 513400
}, {
	value: 513436,
	text: '美姑县',
	parentId: 513400
}, {
	value: 513437,
	text: '雷波县',
	parentId: 513400
}, {
	value: 520101,
	text: '市辖区',
	parentId: 520100
}, {
	value: 520102,
	text: '南明区',
	parentId: 520100
}, {
	value: 520103,
	text: '云岩区',
	parentId: 520100
}, {
	value: 520111,
	text: '花溪区',
	parentId: 520100
}, {
	value: 520112,
	text: '乌当区',
	parentId: 520100
}, {
	value: 520113,
	text: '白云区',
	parentId: 520100
}, {
	value: 520115,
	text: '观山湖区',
	parentId: 520100
}, {
	value: 520121,
	text: '开阳县',
	parentId: 520100
}, {
	value: 520122,
	text: '息烽县',
	parentId: 520100
}, {
	value: 520123,
	text: '修文县',
	parentId: 520100
}, {
	value: 520181,
	text: '清镇市',
	parentId: 520100
}, {
	value: 520201,
	text: '钟山区',
	parentId: 520200
}, {
	value: 520203,
	text: '六枝特区',
	parentId: 520200
}, {
	value: 520221,
	text: '水城县',
	parentId: 520200
}, {
	value: 520222,
	text: '盘县',
	parentId: 520200
}, {
	value: 520301,
	text: '市辖区',
	parentId: 520300
}, {
	value: 520302,
	text: '红花岗区',
	parentId: 520300
}, {
	value: 520303,
	text: '汇川区',
	parentId: 520300
}, {
	value: 520321,
	text: '遵义县',
	parentId: 520300
}, {
	value: 520322,
	text: '桐梓县',
	parentId: 520300
}, {
	value: 520323,
	text: '绥阳县',
	parentId: 520300
}, {
	value: 520324,
	text: '正安县',
	parentId: 520300
}, {
	value: 520325,
	text: '道真仡佬族苗族自治县',
	parentId: 520300
}, {
	value: 520326,
	text: '务川仡佬族苗族自治县',
	parentId: 520300
}, {
	value: 520327,
	text: '凤冈县',
	parentId: 520300
}, {
	value: 520328,
	text: '湄潭县',
	parentId: 520300
}, {
	value: 520329,
	text: '余庆县',
	parentId: 520300
}, {
	value: 520330,
	text: '习水县',
	parentId: 520300
}, {
	value: 520381,
	text: '赤水市',
	parentId: 520300
}, {
	value: 520382,
	text: '仁怀市',
	parentId: 520300
}, {
	value: 520401,
	text: '市辖区',
	parentId: 520400
}, {
	value: 520402,
	text: '西秀区',
	parentId: 520400
}, {
	value: 520421,
	text: '平坝县',
	parentId: 520400
}, {
	value: 520422,
	text: '普定县',
	parentId: 520400
}, {
	value: 520423,
	text: '镇宁布依族苗族自治县',
	parentId: 520400
}, {
	value: 520424,
	text: '关岭布依族苗族自治县',
	parentId: 520400
}, {
	value: 520425,
	text: '紫云苗族布依族自治县',
	parentId: 520400
}, {
	value: 520501,
	text: '市辖区',
	parentId: 520500
}, {
	value: 520502,
	text: '七星关区',
	parentId: 520500
}, {
	value: 520521,
	text: '大方县',
	parentId: 520500
}, {
	value: 520522,
	text: '黔西县',
	parentId: 520500
}, {
	value: 520523,
	text: '金沙县',
	parentId: 520500
}, {
	value: 520524,
	text: '织金县',
	parentId: 520500
}, {
	value: 520525,
	text: '纳雍县',
	parentId: 520500
}, {
	value: 520526,
	text: '威宁彝族回族苗族自治县',
	parentId: 520500
}, {
	value: 520527,
	text: '赫章县',
	parentId: 520500
}, {
	value: 520601,
	text: '市辖区',
	parentId: 520600
}, {
	value: 520602,
	text: '碧江区',
	parentId: 520600
}, {
	value: 520603,
	text: '万山区',
	parentId: 520600
}, {
	value: 520621,
	text: '江口县',
	parentId: 520600
}, {
	value: 520622,
	text: '玉屏侗族自治县',
	parentId: 520600
}, {
	value: 520623,
	text: '石阡县',
	parentId: 520600
}, {
	value: 520624,
	text: '思南县',
	parentId: 520600
}, {
	value: 520625,
	text: '印江土家族苗族自治县',
	parentId: 520600
}, {
	value: 520626,
	text: '德江县',
	parentId: 520600
}, {
	value: 520627,
	text: '沿河土家族自治县',
	parentId: 520600
}, {
	value: 520628,
	text: '松桃苗族自治县',
	parentId: 520600
}, {
	value: 522301,
	text: '兴义市',
	parentId: 522300
}, {
	value: 522322,
	text: '兴仁县',
	parentId: 522300
}, {
	value: 522323,
	text: '普安县',
	parentId: 522300
}, {
	value: 522324,
	text: '晴隆县',
	parentId: 522300
}, {
	value: 522325,
	text: '贞丰县',
	parentId: 522300
}, {
	value: 522326,
	text: '望谟县',
	parentId: 522300
}, {
	value: 522327,
	text: '册亨县',
	parentId: 522300
}, {
	value: 522328,
	text: '安龙县',
	parentId: 522300
}, {
	value: 522601,
	text: '凯里市',
	parentId: 522600
}, {
	value: 522622,
	text: '黄平县',
	parentId: 522600
}, {
	value: 522623,
	text: '施秉县',
	parentId: 522600
}, {
	value: 522624,
	text: '三穗县',
	parentId: 522600
}, {
	value: 522625,
	text: '镇远县',
	parentId: 522600
}, {
	value: 522626,
	text: '岑巩县',
	parentId: 522600
}, {
	value: 522627,
	text: '天柱县',
	parentId: 522600
}, {
	value: 522628,
	text: '锦屏县',
	parentId: 522600
}, {
	value: 522629,
	text: '剑河县',
	parentId: 522600
}, {
	value: 522630,
	text: '台江县',
	parentId: 522600
}, {
	value: 522631,
	text: '黎平县',
	parentId: 522600
}, {
	value: 522632,
	text: '榕江县',
	parentId: 522600
}, {
	value: 522633,
	text: '从江县',
	parentId: 522600
}, {
	value: 522634,
	text: '雷山县',
	parentId: 522600
}, {
	value: 522635,
	text: '麻江县',
	parentId: 522600
}, {
	value: 522636,
	text: '丹寨县',
	parentId: 522600
}, {
	value: 522701,
	text: '都匀市',
	parentId: 522700
}, {
	value: 522702,
	text: '福泉市',
	parentId: 522700
}, {
	value: 522722,
	text: '荔波县',
	parentId: 522700
}, {
	value: 522723,
	text: '贵定县',
	parentId: 522700
}, {
	value: 522725,
	text: '瓮安县',
	parentId: 522700
}, {
	value: 522726,
	text: '独山县',
	parentId: 522700
}, {
	value: 522727,
	text: '平塘县',
	parentId: 522700
}, {
	value: 522728,
	text: '罗甸县',
	parentId: 522700
}, {
	value: 522729,
	text: '长顺县',
	parentId: 522700
}, {
	value: 522730,
	text: '龙里县',
	parentId: 522700
}, {
	value: 522731,
	text: '惠水县',
	parentId: 522700
}, {
	value: 522732,
	text: '三都水族自治县',
	parentId: 522700
}, {
	value: 530101,
	text: '市辖区',
	parentId: 530100
}, {
	value: 530102,
	text: '五华区',
	parentId: 530100
}, {
	value: 530103,
	text: '盘龙区',
	parentId: 530100
}, {
	value: 530111,
	text: '官渡区',
	parentId: 530100
}, {
	value: 530112,
	text: '西山区',
	parentId: 530100
}, {
	value: 530113,
	text: '东川区',
	parentId: 530100
}, {
	value: 530114,
	text: '呈贡区',
	parentId: 530100
}, {
	value: 530122,
	text: '晋宁县',
	parentId: 530100
}, {
	value: 530124,
	text: '富民县',
	parentId: 530100
}, {
	value: 530125,
	text: '宜良县',
	parentId: 530100
}, {
	value: 530126,
	text: '石林彝族自治县',
	parentId: 530100
}, {
	value: 530127,
	text: '嵩明县',
	parentId: 530100
}, {
	value: 530128,
	text: '禄劝彝族苗族自治县',
	parentId: 530100
}, {
	value: 530129,
	text: '寻甸回族彝族自治县',
	parentId: 530100
}, {
	value: 530181,
	text: '安宁市',
	parentId: 530100
}, {
	value: 530301,
	text: '市辖区',
	parentId: 530300
}, {
	value: 530302,
	text: '麒麟区',
	parentId: 530300
}, {
	value: 530321,
	text: '马龙县',
	parentId: 530300
}, {
	value: 530322,
	text: '陆良县',
	parentId: 530300
}, {
	value: 530323,
	text: '师宗县',
	parentId: 530300
}, {
	value: 530324,
	text: '罗平县',
	parentId: 530300
}, {
	value: 530325,
	text: '富源县',
	parentId: 530300
}, {
	value: 530326,
	text: '会泽县',
	parentId: 530300
}, {
	value: 530328,
	text: '沾益县',
	parentId: 530300
}, {
	value: 530381,
	text: '宣威市',
	parentId: 530300
}, {
	value: 530401,
	text: '市辖区',
	parentId: 530400
}, {
	value: 530402,
	text: '红塔区',
	parentId: 530400
}, {
	value: 530421,
	text: '江川县',
	parentId: 530400
}, {
	value: 530422,
	text: '澄江县',
	parentId: 530400
}, {
	value: 530423,
	text: '通海县',
	parentId: 530400
}, {
	value: 530424,
	text: '华宁县',
	parentId: 530400
}, {
	value: 530425,
	text: '易门县',
	parentId: 530400
}, {
	value: 530426,
	text: '峨山彝族自治县',
	parentId: 530400
}, {
	value: 530427,
	text: '新平彝族傣族自治县',
	parentId: 530400
}, {
	value: 530428,
	text: '元江哈尼族彝族傣族自治县',
	parentId: 530400
}, {
	value: 530501,
	text: '市辖区',
	parentId: 530500
}, {
	value: 530502,
	text: '隆阳区',
	parentId: 530500
}, {
	value: 530521,
	text: '施甸县',
	parentId: 530500
}, {
	value: 530522,
	text: '腾冲县',
	parentId: 530500
}, {
	value: 530523,
	text: '龙陵县',
	parentId: 530500
}, {
	value: 530524,
	text: '昌宁县',
	parentId: 530500
}, {
	value: 530601,
	text: '市辖区',
	parentId: 530600
}, {
	value: 530602,
	text: '昭阳区',
	parentId: 530600
}, {
	value: 530621,
	text: '鲁甸县',
	parentId: 530600
}, {
	value: 530622,
	text: '巧家县',
	parentId: 530600
}, {
	value: 530623,
	text: '盐津县',
	parentId: 530600
}, {
	value: 530624,
	text: '大关县',
	parentId: 530600
}, {
	value: 530625,
	text: '永善县',
	parentId: 530600
}, {
	value: 530626,
	text: '绥江县',
	parentId: 530600
}, {
	value: 530627,
	text: '镇雄县',
	parentId: 530600
}, {
	value: 530628,
	text: '彝良县',
	parentId: 530600
}, {
	value: 530629,
	text: '威信县',
	parentId: 530600
}, {
	value: 530630,
	text: '水富县',
	parentId: 530600
}, {
	value: 530701,
	text: '市辖区',
	parentId: 530700
}, {
	value: 530702,
	text: '古城区',
	parentId: 530700
}, {
	value: 530721,
	text: '玉龙纳西族自治县',
	parentId: 530700
}, {
	value: 530722,
	text: '永胜县',
	parentId: 530700
}, {
	value: 530723,
	text: '华坪县',
	parentId: 530700
}, {
	value: 530724,
	text: '宁蒗彝族自治县',
	parentId: 530700
}, {
	value: 530801,
	text: '市辖区',
	parentId: 530800
}, {
	value: 530802,
	text: '思茅区',
	parentId: 530800
}, {
	value: 530821,
	text: '宁洱哈尼族彝族自治县',
	parentId: 530800
}, {
	value: 530822,
	text: '墨江哈尼族自治县',
	parentId: 530800
}, {
	value: 530823,
	text: '景东彝族自治县',
	parentId: 530800
}, {
	value: 530824,
	text: '景谷傣族彝族自治县',
	parentId: 530800
}, {
	value: 530825,
	text: '镇沅彝族哈尼族拉祜族自治县',
	parentId: 530800
}, {
	value: 530826,
	text: '江城哈尼族彝族自治县',
	parentId: 530800
}, {
	value: 530827,
	text: '孟连傣族拉祜族佤族自治县',
	parentId: 530800
}, {
	value: 530828,
	text: '澜沧拉祜族自治县',
	parentId: 530800
}, {
	value: 530829,
	text: '西盟佤族自治县',
	parentId: 530800
}, {
	value: 530901,
	text: '市辖区',
	parentId: 530900
}, {
	value: 530902,
	text: '临翔区',
	parentId: 530900
}, {
	value: 530921,
	text: '凤庆县',
	parentId: 530900
}, {
	value: 530922,
	text: '云县',
	parentId: 530900
}, {
	value: 530923,
	text: '永德县',
	parentId: 530900
}, {
	value: 530924,
	text: '镇康县',
	parentId: 530900
}, {
	value: 530925,
	text: '双江拉祜族佤族布朗族傣族自治县',
	parentId: 530900
}, {
	value: 530926,
	text: '耿马傣族佤族自治县',
	parentId: 530900
}, {
	value: 530927,
	text: '沧源佤族自治县',
	parentId: 530900
}, {
	value: 532301,
	text: '楚雄市',
	parentId: 532300
}, {
	value: 532322,
	text: '双柏县',
	parentId: 532300
}, {
	value: 532323,
	text: '牟定县',
	parentId: 532300
}, {
	value: 532324,
	text: '南华县',
	parentId: 532300
}, {
	value: 532325,
	text: '姚安县',
	parentId: 532300
}, {
	value: 532326,
	text: '大姚县',
	parentId: 532300
}, {
	value: 532327,
	text: '永仁县',
	parentId: 532300
}, {
	value: 532328,
	text: '元谋县',
	parentId: 532300
}, {
	value: 532329,
	text: '武定县',
	parentId: 532300
}, {
	value: 532331,
	text: '禄丰县',
	parentId: 532300
}, {
	value: 532501,
	text: '个旧市',
	parentId: 532500
}, {
	value: 532502,
	text: '开远市',
	parentId: 532500
}, {
	value: 532503,
	text: '蒙自市',
	parentId: 532500
}, {
	value: 532504,
	text: '弥勒市',
	parentId: 532500
}, {
	value: 532523,
	text: '屏边苗族自治县',
	parentId: 532500
}, {
	value: 532524,
	text: '建水县',
	parentId: 532500
}, {
	value: 532525,
	text: '石屏县',
	parentId: 532500
}, {
	value: 532527,
	text: '泸西县',
	parentId: 532500
}, {
	value: 532528,
	text: '元阳县',
	parentId: 532500
}, {
	value: 532529,
	text: '红河县',
	parentId: 532500
}, {
	value: 532530,
	text: '金平苗族瑶族傣族自治县',
	parentId: 532500
}, {
	value: 532531,
	text: '绿春县',
	parentId: 532500
}, {
	value: 532532,
	text: '河口瑶族自治县',
	parentId: 532500
}, {
	value: 532601,
	text: '文山市',
	parentId: 532600
}, {
	value: 532622,
	text: '砚山县',
	parentId: 532600
}, {
	value: 532623,
	text: '西畴县',
	parentId: 532600
}, {
	value: 532624,
	text: '麻栗坡县',
	parentId: 532600
}, {
	value: 532625,
	text: '马关县',
	parentId: 532600
}, {
	value: 532626,
	text: '丘北县',
	parentId: 532600
}, {
	value: 532627,
	text: '广南县',
	parentId: 532600
}, {
	value: 532628,
	text: '富宁县',
	parentId: 532600
}, {
	value: 532801,
	text: '景洪市',
	parentId: 532800
}, {
	value: 532822,
	text: '勐海县',
	parentId: 532800
}, {
	value: 532823,
	text: '勐腊县',
	parentId: 532800
}, {
	value: 532901,
	text: '大理市',
	parentId: 532900
}, {
	value: 532922,
	text: '漾濞彝族自治县',
	parentId: 532900
}, {
	value: 532923,
	text: '祥云县',
	parentId: 532900
}, {
	value: 532924,
	text: '宾川县',
	parentId: 532900
}, {
	value: 532925,
	text: '弥渡县',
	parentId: 532900
}, {
	value: 532926,
	text: '南涧彝族自治县',
	parentId: 532900
}, {
	value: 532927,
	text: '巍山彝族回族自治县',
	parentId: 532900
}, {
	value: 532928,
	text: '永平县',
	parentId: 532900
}, {
	value: 532929,
	text: '云龙县',
	parentId: 532900
}, {
	value: 532930,
	text: '洱源县',
	parentId: 532900
}, {
	value: 532931,
	text: '剑川县',
	parentId: 532900
}, {
	value: 532932,
	text: '鹤庆县',
	parentId: 532900
}, {
	value: 533102,
	text: '瑞丽市',
	parentId: 533100
}, {
	value: 533103,
	text: '芒市',
	parentId: 533100
}, {
	value: 533122,
	text: '梁河县',
	parentId: 533100
}, {
	value: 533123,
	text: '盈江县',
	parentId: 533100
}, {
	value: 533124,
	text: '陇川县',
	parentId: 533100
}, {
	value: 533321,
	text: '泸水县',
	parentId: 533300
}, {
	value: 533323,
	text: '福贡县',
	parentId: 533300
}, {
	value: 533324,
	text: '贡山独龙族怒族自治县',
	parentId: 533300
}, {
	value: 533325,
	text: '兰坪白族普米族自治县',
	parentId: 533300
}, {
	value: 533421,
	text: '香格里拉县',
	parentId: 533400
}, {
	value: 533422,
	text: '德钦县',
	parentId: 533400
}, {
	value: 533423,
	text: '维西傈僳族自治县',
	parentId: 533400
}, {
	value: 540101,
	text: '市辖区',
	parentId: 540100
}, {
	value: 540102,
	text: '城关区',
	parentId: 540100
}, {
	value: 540121,
	text: '林周县',
	parentId: 540100
}, {
	value: 540122,
	text: '当雄县',
	parentId: 540100
}, {
	value: 540123,
	text: '尼木县',
	parentId: 540100
}, {
	value: 540124,
	text: '曲水县',
	parentId: 540100
}, {
	value: 540125,
	text: '堆龙德庆县',
	parentId: 540100
}, {
	value: 540126,
	text: '达孜县',
	parentId: 540100
}, {
	value: 540127,
	text: '墨竹工卡县',
	parentId: 540100
}, {
	value: 540202,
	text: '桑珠孜区',
	parentId: 540200
}, {
	value: 540221,
	text: '南木林县',
	parentId: 540200
}, {
	value: 540222,
	text: '江孜县',
	parentId: 540200
}, {
	value: 540223,
	text: '定日县',
	parentId: 540200
}, {
	value: 540224,
	text: '萨迦县',
	parentId: 540200
}, {
	value: 540225,
	text: '拉孜县',
	parentId: 540200
}, {
	value: 540226,
	text: '昂仁县',
	parentId: 540200
}, {
	value: 540227,
	text: '谢通门县',
	parentId: 540200
}, {
	value: 540228,
	text: '白朗县',
	parentId: 540200
}, {
	value: 540229,
	text: '仁布县',
	parentId: 540200
}, {
	value: 540230,
	text: '康马县',
	parentId: 540200
}, {
	value: 540231,
	text: '定结县',
	parentId: 540200
}, {
	value: 540232,
	text: '仲巴县',
	parentId: 540200
}, {
	value: 540233,
	text: '亚东县',
	parentId: 540200
}, {
	value: 540234,
	text: '吉隆县',
	parentId: 540200
}, {
	value: 540235,
	text: '聂拉木县',
	parentId: 540200
}, {
	value: 540236,
	text: '萨嘎县',
	parentId: 540200
}, {
	value: 540237,
	text: '岗巴县',
	parentId: 540200
}, {
	value: 542121,
	text: '昌都县',
	parentId: 542100
}, {
	value: 542122,
	text: '江达县',
	parentId: 542100
}, {
	value: 542123,
	text: '贡觉县',
	parentId: 542100
}, {
	value: 542124,
	text: '类乌齐县',
	parentId: 542100
}, {
	value: 542125,
	text: '丁青县',
	parentId: 542100
}, {
	value: 542126,
	text: '察雅县',
	parentId: 542100
}, {
	value: 542127,
	text: '八宿县',
	parentId: 542100
}, {
	value: 542128,
	text: '左贡县',
	parentId: 542100
}, {
	value: 542129,
	text: '芒康县',
	parentId: 542100
}, {
	value: 542132,
	text: '洛隆县',
	parentId: 542100
}, {
	value: 542133,
	text: '边坝县',
	parentId: 542100
}, {
	value: 542221,
	text: '乃东县',
	parentId: 542200
}, {
	value: 542222,
	text: '扎囊县',
	parentId: 542200
}, {
	value: 542223,
	text: '贡嘎县',
	parentId: 542200
}, {
	value: 542224,
	text: '桑日县',
	parentId: 542200
}, {
	value: 542225,
	text: '琼结县',
	parentId: 542200
}, {
	value: 542226,
	text: '曲松县',
	parentId: 542200
}, {
	value: 542227,
	text: '措美县',
	parentId: 542200
}, {
	value: 542228,
	text: '洛扎县',
	parentId: 542200
}, {
	value: 542229,
	text: '加查县',
	parentId: 542200
}, {
	value: 542231,
	text: '隆子县',
	parentId: 542200
}, {
	value: 542232,
	text: '错那县',
	parentId: 542200
}, {
	value: 542233,
	text: '浪卡子县',
	parentId: 542200
}, {
	value: 542421,
	text: '那曲县',
	parentId: 542400
}, {
	value: 542422,
	text: '嘉黎县',
	parentId: 542400
}, {
	value: 542423,
	text: '比如县',
	parentId: 542400
}, {
	value: 542424,
	text: '聂荣县',
	parentId: 542400
}, {
	value: 542425,
	text: '安多县',
	parentId: 542400
}, {
	value: 542426,
	text: '申扎县',
	parentId: 542400
}, {
	value: 542427,
	text: '索县',
	parentId: 542400
}, {
	value: 542428,
	text: '班戈县',
	parentId: 542400
}, {
	value: 542429,
	text: '巴青县',
	parentId: 542400
}, {
	value: 542430,
	text: '尼玛县',
	parentId: 542400
}, {
	value: 542431,
	text: '双湖县',
	parentId: 542400
}, {
	value: 542521,
	text: '普兰县',
	parentId: 542500
}, {
	value: 542522,
	text: '札达县',
	parentId: 542500
}, {
	value: 542523,
	text: '噶尔县',
	parentId: 542500
}, {
	value: 542524,
	text: '日土县',
	parentId: 542500
}, {
	value: 542525,
	text: '革吉县',
	parentId: 542500
}, {
	value: 542526,
	text: '改则县',
	parentId: 542500
}, {
	value: 542527,
	text: '措勤县',
	parentId: 542500
}, {
	value: 542621,
	text: '林芝县',
	parentId: 542600
}, {
	value: 542622,
	text: '工布江达县',
	parentId: 542600
}, {
	value: 542623,
	text: '米林县',
	parentId: 542600
}, {
	value: 542624,
	text: '墨脱县',
	parentId: 542600
}, {
	value: 542625,
	text: '波密县',
	parentId: 542600
}, {
	value: 542626,
	text: '察隅县',
	parentId: 542600
}, {
	value: 542627,
	text: '朗县',
	parentId: 542600
}, {
	value: 610101,
	text: '市辖区',
	parentId: 610100
}, {
	value: 610102,
	text: '新城区',
	parentId: 610100
}, {
	value: 610103,
	text: '碑林区',
	parentId: 610100
}, {
	value: 610104,
	text: '莲湖区',
	parentId: 610100
}, {
	value: 610111,
	text: '灞桥区',
	parentId: 610100
}, {
	value: 610112,
	text: '未央区',
	parentId: 610100
}, {
	value: 610113,
	text: '雁塔区',
	parentId: 610100
}, {
	value: 610114,
	text: '阎良区',
	parentId: 610100
}, {
	value: 610115,
	text: '临潼区',
	parentId: 610100
}, {
	value: 610116,
	text: '长安区',
	parentId: 610100
}, {
	value: 610122,
	text: '蓝田县',
	parentId: 610100
}, {
	value: 610124,
	text: '周至县',
	parentId: 610100
}, {
	value: 610125,
	text: '户县',
	parentId: 610100
}, {
	value: 610126,
	text: '高陵县',
	parentId: 610100
}, {
	value: 610201,
	text: '市辖区',
	parentId: 610200
}, {
	value: 610202,
	text: '王益区',
	parentId: 610200
}, {
	value: 610203,
	text: '印台区',
	parentId: 610200
}, {
	value: 610204,
	text: '耀州区',
	parentId: 610200
}, {
	value: 610222,
	text: '宜君县',
	parentId: 610200
}, {
	value: 610301,
	text: '市辖区',
	parentId: 610300
}, {
	value: 610302,
	text: '渭滨区',
	parentId: 610300
}, {
	value: 610303,
	text: '金台区',
	parentId: 610300
}, {
	value: 610304,
	text: '陈仓区',
	parentId: 610300
}, {
	value: 610322,
	text: '凤翔县',
	parentId: 610300
}, {
	value: 610323,
	text: '岐山县',
	parentId: 610300
}, {
	value: 610324,
	text: '扶风县',
	parentId: 610300
}, {
	value: 610326,
	text: '眉县',
	parentId: 610300
}, {
	value: 610327,
	text: '陇县',
	parentId: 610300
}, {
	value: 610328,
	text: '千阳县',
	parentId: 610300
}, {
	value: 610329,
	text: '麟游县',
	parentId: 610300
}, {
	value: 610330,
	text: '凤县',
	parentId: 610300
}, {
	value: 610331,
	text: '太白县',
	parentId: 610300
}, {
	value: 610401,
	text: '市辖区',
	parentId: 610400
}, {
	value: 610402,
	text: '秦都区',
	parentId: 610400
}, {
	value: 610403,
	text: '杨陵区',
	parentId: 610400
}, {
	value: 610404,
	text: '渭城区',
	parentId: 610400
}, {
	value: 610422,
	text: '三原县',
	parentId: 610400
}, {
	value: 610423,
	text: '泾阳县',
	parentId: 610400
}, {
	value: 610424,
	text: '乾县',
	parentId: 610400
}, {
	value: 610425,
	text: '礼泉县',
	parentId: 610400
}, {
	value: 610426,
	text: '永寿县',
	parentId: 610400
}, {
	value: 610427,
	text: '彬县',
	parentId: 610400
}, {
	value: 610428,
	text: '长武县',
	parentId: 610400
}, {
	value: 610429,
	text: '旬邑县',
	parentId: 610400
}, {
	value: 610430,
	text: '淳化县',
	parentId: 610400
}, {
	value: 610431,
	text: '武功县',
	parentId: 610400
}, {
	value: 610481,
	text: '兴平市',
	parentId: 610400
}, {
	value: 610501,
	text: '市辖区',
	parentId: 610500
}, {
	value: 610502,
	text: '临渭区',
	parentId: 610500
}, {
	value: 610521,
	text: '华县',
	parentId: 610500
}, {
	value: 610522,
	text: '潼关县',
	parentId: 610500
}, {
	value: 610523,
	text: '大荔县',
	parentId: 610500
}, {
	value: 610524,
	text: '合阳县',
	parentId: 610500
}, {
	value: 610525,
	text: '澄城县',
	parentId: 610500
}, {
	value: 610526,
	text: '蒲城县',
	parentId: 610500
}, {
	value: 610527,
	text: '白水县',
	parentId: 610500
}, {
	value: 610528,
	text: '富平县',
	parentId: 610500
}, {
	value: 610581,
	text: '韩城市',
	parentId: 610500
}, {
	value: 610582,
	text: '华阴市',
	parentId: 610500
}, {
	value: 610601,
	text: '市辖区',
	parentId: 610600
}, {
	value: 610602,
	text: '宝塔区',
	parentId: 610600
}, {
	value: 610621,
	text: '延长县',
	parentId: 610600
}, {
	value: 610622,
	text: '延川县',
	parentId: 610600
}, {
	value: 610623,
	text: '子长县',
	parentId: 610600
}, {
	value: 610624,
	text: '安塞县',
	parentId: 610600
}, {
	value: 610625,
	text: '志丹县',
	parentId: 610600
}, {
	value: 610626,
	text: '吴起县',
	parentId: 610600
}, {
	value: 610627,
	text: '甘泉县',
	parentId: 610600
}, {
	value: 610628,
	text: '富县',
	parentId: 610600
}, {
	value: 610629,
	text: '洛川县',
	parentId: 610600
}, {
	value: 610630,
	text: '宜川县',
	parentId: 610600
}, {
	value: 610631,
	text: '黄龙县',
	parentId: 610600
}, {
	value: 610632,
	text: '黄陵县',
	parentId: 610600
}, {
	value: 610701,
	text: '市辖区',
	parentId: 610700
}, {
	value: 610702,
	text: '汉台区',
	parentId: 610700
}, {
	value: 610721,
	text: '南郑县',
	parentId: 610700
}, {
	value: 610722,
	text: '城固县',
	parentId: 610700
}, {
	value: 610723,
	text: '洋县',
	parentId: 610700
}, {
	value: 610724,
	text: '西乡县',
	parentId: 610700
}, {
	value: 610725,
	text: '勉县',
	parentId: 610700
}, {
	value: 610726,
	text: '宁强县',
	parentId: 610700
}, {
	value: 610727,
	text: '略阳县',
	parentId: 610700
}, {
	value: 610728,
	text: '镇巴县',
	parentId: 610700
}, {
	value: 610729,
	text: '留坝县',
	parentId: 610700
}, {
	value: 610730,
	text: '佛坪县',
	parentId: 610700
}, {
	value: 610801,
	text: '市辖区',
	parentId: 610800
}, {
	value: 610802,
	text: '榆阳区',
	parentId: 610800
}, {
	value: 610821,
	text: '神木县',
	parentId: 610800
}, {
	value: 610822,
	text: '府谷县',
	parentId: 610800
}, {
	value: 610823,
	text: '横山县',
	parentId: 610800
}, {
	value: 610824,
	text: '靖边县',
	parentId: 610800
}, {
	value: 610825,
	text: '定边县',
	parentId: 610800
}, {
	value: 610826,
	text: '绥德县',
	parentId: 610800
}, {
	value: 610827,
	text: '米脂县',
	parentId: 610800
}, {
	value: 610828,
	text: '佳县',
	parentId: 610800
}, {
	value: 610829,
	text: '吴堡县',
	parentId: 610800
}, {
	value: 610830,
	text: '清涧县',
	parentId: 610800
}, {
	value: 610831,
	text: '子洲县',
	parentId: 610800
}, {
	value: 610901,
	text: '市辖区',
	parentId: 610900
}, {
	value: 610902,
	text: '汉滨区',
	parentId: 610900
}, {
	value: 610921,
	text: '汉阴县',
	parentId: 610900
}, {
	value: 610922,
	text: '石泉县',
	parentId: 610900
}, {
	value: 610923,
	text: '宁陕县',
	parentId: 610900
}, {
	value: 610924,
	text: '紫阳县',
	parentId: 610900
}, {
	value: 610925,
	text: '岚皋县',
	parentId: 610900
}, {
	value: 610926,
	text: '平利县',
	parentId: 610900
}, {
	value: 610927,
	text: '镇坪县',
	parentId: 610900
}, {
	value: 610928,
	text: '旬阳县',
	parentId: 610900
}, {
	value: 610929,
	text: '白河县',
	parentId: 610900
}, {
	value: 611001,
	text: '市辖区',
	parentId: 611000
}, {
	value: 611002,
	text: '商州区',
	parentId: 611000
}, {
	value: 611021,
	text: '洛南县',
	parentId: 611000
}, {
	value: 611022,
	text: '丹凤县',
	parentId: 611000
}, {
	value: 611023,
	text: '商南县',
	parentId: 611000
}, {
	value: 611024,
	text: '山阳县',
	parentId: 611000
}, {
	value: 611025,
	text: '镇安县',
	parentId: 611000
}, {
	value: 611026,
	text: '柞水县',
	parentId: 611000
}, {
	value: 620101,
	text: '市辖区',
	parentId: 620100
}, {
	value: 620102,
	text: '城关区',
	parentId: 620100
}, {
	value: 620103,
	text: '七里河区',
	parentId: 620100
}, {
	value: 620104,
	text: '西固区',
	parentId: 620100
}, {
	value: 620105,
	text: '安宁区',
	parentId: 620100
}, {
	value: 620111,
	text: '红古区',
	parentId: 620100
}, {
	value: 620121,
	text: '永登县',
	parentId: 620100
}, {
	value: 620122,
	text: '皋兰县',
	parentId: 620100
}, {
	value: 620123,
	text: '榆中县',
	parentId: 620100
}, {
	value: 620201,
	text: '市辖区',
	parentId: 620200
}, {
	value: 620301,
	text: '市辖区',
	parentId: 620300
}, {
	value: 620302,
	text: '金川区',
	parentId: 620300
}, {
	value: 620321,
	text: '永昌县',
	parentId: 620300
}, {
	value: 620401,
	text: '市辖区',
	parentId: 620400
}, {
	value: 620402,
	text: '白银区',
	parentId: 620400
}, {
	value: 620403,
	text: '平川区',
	parentId: 620400
}, {
	value: 620421,
	text: '靖远县',
	parentId: 620400
}, {
	value: 620422,
	text: '会宁县',
	parentId: 620400
}, {
	value: 620423,
	text: '景泰县',
	parentId: 620400
}, {
	value: 620501,
	text: '市辖区',
	parentId: 620500
}, {
	value: 620502,
	text: '秦州区',
	parentId: 620500
}, {
	value: 620503,
	text: '麦积区',
	parentId: 620500
}, {
	value: 620521,
	text: '清水县',
	parentId: 620500
}, {
	value: 620522,
	text: '秦安县',
	parentId: 620500
}, {
	value: 620523,
	text: '甘谷县',
	parentId: 620500
}, {
	value: 620524,
	text: '武山县',
	parentId: 620500
}, {
	value: 620525,
	text: '张家川回族自治县',
	parentId: 620500
}, {
	value: 620601,
	text: '市辖区',
	parentId: 620600
}, {
	value: 620602,
	text: '凉州区',
	parentId: 620600
}, {
	value: 620621,
	text: '民勤县',
	parentId: 620600
}, {
	value: 620622,
	text: '古浪县',
	parentId: 620600
}, {
	value: 620623,
	text: '天祝藏族自治县',
	parentId: 620600
}, {
	value: 620701,
	text: '市辖区',
	parentId: 620700
}, {
	value: 620702,
	text: '甘州区',
	parentId: 620700
}, {
	value: 620721,
	text: '肃南裕固族自治县',
	parentId: 620700
}, {
	value: 620722,
	text: '民乐县',
	parentId: 620700
}, {
	value: 620723,
	text: '临泽县',
	parentId: 620700
}, {
	value: 620724,
	text: '高台县',
	parentId: 620700
}, {
	value: 620725,
	text: '山丹县',
	parentId: 620700
}, {
	value: 620801,
	text: '市辖区',
	parentId: 620800
}, {
	value: 620802,
	text: '崆峒区',
	parentId: 620800
}, {
	value: 620821,
	text: '泾川县',
	parentId: 620800
}, {
	value: 620822,
	text: '灵台县',
	parentId: 620800
}, {
	value: 620823,
	text: '崇信县',
	parentId: 620800
}, {
	value: 620824,
	text: '华亭县',
	parentId: 620800
}, {
	value: 620825,
	text: '庄浪县',
	parentId: 620800
}, {
	value: 620826,
	text: '静宁县',
	parentId: 620800
}, {
	value: 620901,
	text: '市辖区',
	parentId: 620900
}, {
	value: 620902,
	text: '肃州区',
	parentId: 620900
}, {
	value: 620921,
	text: '金塔县',
	parentId: 620900
}, {
	value: 620922,
	text: '瓜州县',
	parentId: 620900
}, {
	value: 620923,
	text: '肃北蒙古族自治县',
	parentId: 620900
}, {
	value: 620924,
	text: '阿克塞哈萨克族自治县',
	parentId: 620900
}, {
	value: 620981,
	text: '玉门市',
	parentId: 620900
}, {
	value: 620982,
	text: '敦煌市',
	parentId: 620900
}, {
	value: 621001,
	text: '市辖区',
	parentId: 621000
}, {
	value: 621002,
	text: '西峰区',
	parentId: 621000
}, {
	value: 621021,
	text: '庆城县',
	parentId: 621000
}, {
	value: 621022,
	text: '环县',
	parentId: 621000
}, {
	value: 621023,
	text: '华池县',
	parentId: 621000
}, {
	value: 621024,
	text: '合水县',
	parentId: 621000
}, {
	value: 621025,
	text: '正宁县',
	parentId: 621000
}, {
	value: 621026,
	text: '宁县',
	parentId: 621000
}, {
	value: 621027,
	text: '镇原县',
	parentId: 621000
}, {
	value: 621101,
	text: '市辖区',
	parentId: 621100
}, {
	value: 621102,
	text: '安定区',
	parentId: 621100
}, {
	value: 621121,
	text: '通渭县',
	parentId: 621100
}, {
	value: 621122,
	text: '陇西县',
	parentId: 621100
}, {
	value: 621123,
	text: '渭源县',
	parentId: 621100
}, {
	value: 621124,
	text: '临洮县',
	parentId: 621100
}, {
	value: 621125,
	text: '漳县',
	parentId: 621100
}, {
	value: 621126,
	text: '岷县',
	parentId: 621100
}, {
	value: 621201,
	text: '市辖区',
	parentId: 621200
}, {
	value: 621202,
	text: '武都区',
	parentId: 621200
}, {
	value: 621221,
	text: '成县',
	parentId: 621200
}, {
	value: 621222,
	text: '文县',
	parentId: 621200
}, {
	value: 621223,
	text: '宕昌县',
	parentId: 621200
}, {
	value: 621224,
	text: '康县',
	parentId: 621200
}, {
	value: 621225,
	text: '西和县',
	parentId: 621200
}, {
	value: 621226,
	text: '礼县',
	parentId: 621200
}, {
	value: 621227,
	text: '徽县',
	parentId: 621200
}, {
	value: 621228,
	text: '两当县',
	parentId: 621200
}, {
	value: 622901,
	text: '临夏市',
	parentId: 622900
}, {
	value: 622921,
	text: '临夏县',
	parentId: 622900
}, {
	value: 622922,
	text: '康乐县',
	parentId: 622900
}, {
	value: 622923,
	text: '永靖县',
	parentId: 622900
}, {
	value: 622924,
	text: '广河县',
	parentId: 622900
}, {
	value: 622925,
	text: '和政县',
	parentId: 622900
}, {
	value: 622926,
	text: '东乡族自治县',
	parentId: 622900
}, {
	value: 622927,
	text: '积石山保安族东乡族撒拉族自治县',
	parentId: 622900
}, {
	value: 623001,
	text: '合作市',
	parentId: 623000
}, {
	value: 623021,
	text: '临潭县',
	parentId: 623000
}, {
	value: 623022,
	text: '卓尼县',
	parentId: 623000
}, {
	value: 623023,
	text: '舟曲县',
	parentId: 623000
}, {
	value: 623024,
	text: '迭部县',
	parentId: 623000
}, {
	value: 623025,
	text: '玛曲县',
	parentId: 623000
}, {
	value: 623026,
	text: '碌曲县',
	parentId: 623000
}, {
	value: 623027,
	text: '夏河县',
	parentId: 623000
}, {
	value: 630101,
	text: '市辖区',
	parentId: 630100
}, {
	value: 630102,
	text: '城东区',
	parentId: 630100
}, {
	value: 630103,
	text: '城中区',
	parentId: 630100
}, {
	value: 630104,
	text: '城西区',
	parentId: 630100
}, {
	value: 630105,
	text: '城北区',
	parentId: 630100
}, {
	value: 630121,
	text: '大通回族土族自治县',
	parentId: 630100
}, {
	value: 630122,
	text: '湟中县',
	parentId: 630100
}, {
	value: 630123,
	text: '湟源县',
	parentId: 630100
}, {
	value: 630202,
	text: '乐都区',
	parentId: 630200
}, {
	value: 630221,
	text: '平安县',
	parentId: 630200
}, {
	value: 630222,
	text: '民和回族土族自治县',
	parentId: 630200
}, {
	value: 630223,
	text: '互助土族自治县',
	parentId: 630200
}, {
	value: 630224,
	text: '化隆回族自治县',
	parentId: 630200
}, {
	value: 630225,
	text: '循化撒拉族自治县',
	parentId: 630200
}, {
	value: 632221,
	text: '门源回族自治县',
	parentId: 632200
}, {
	value: 632222,
	text: '祁连县',
	parentId: 632200
}, {
	value: 632223,
	text: '海晏县',
	parentId: 632200
}, {
	value: 632224,
	text: '刚察县',
	parentId: 632200
}, {
	value: 632321,
	text: '同仁县',
	parentId: 632300
}, {
	value: 632322,
	text: '尖扎县',
	parentId: 632300
}, {
	value: 632323,
	text: '泽库县',
	parentId: 632300
}, {
	value: 632324,
	text: '河南蒙古族自治县',
	parentId: 632300
}, {
	value: 632521,
	text: '共和县',
	parentId: 632500
}, {
	value: 632522,
	text: '同德县',
	parentId: 632500
}, {
	value: 632523,
	text: '贵德县',
	parentId: 632500
}, {
	value: 632524,
	text: '兴海县',
	parentId: 632500
}, {
	value: 632525,
	text: '贵南县',
	parentId: 632500
}, {
	value: 632621,
	text: '玛沁县',
	parentId: 632600
}, {
	value: 632622,
	text: '班玛县',
	parentId: 632600
}, {
	value: 632623,
	text: '甘德县',
	parentId: 632600
}, {
	value: 632624,
	text: '达日县',
	parentId: 632600
}, {
	value: 632625,
	text: '久治县',
	parentId: 632600
}, {
	value: 632626,
	text: '玛多县',
	parentId: 632600
}, {
	value: 632701,
	text: '玉树市',
	parentId: 632700
}, {
	value: 632722,
	text: '杂多县',
	parentId: 632700
}, {
	value: 632723,
	text: '称多县',
	parentId: 632700
}, {
	value: 632724,
	text: '治多县',
	parentId: 632700
}, {
	value: 632725,
	text: '囊谦县',
	parentId: 632700
}, {
	value: 632726,
	text: '曲麻莱县',
	parentId: 632700
}, {
	value: 632801,
	text: '格尔木市',
	parentId: 632800
}, {
	value: 632802,
	text: '德令哈市',
	parentId: 632800
}, {
	value: 632821,
	text: '乌兰县',
	parentId: 632800
}, {
	value: 632822,
	text: '都兰县',
	parentId: 632800
}, {
	value: 632823,
	text: '天峻县',
	parentId: 632800
}, {
	value: 640101,
	text: '市辖区',
	parentId: 640100
}, {
	value: 640104,
	text: '兴庆区',
	parentId: 640100
}, {
	value: 640105,
	text: '西夏区',
	parentId: 640100
}, {
	value: 640106,
	text: '金凤区',
	parentId: 640100
}, {
	value: 640121,
	text: '永宁县',
	parentId: 640100
}, {
	value: 640122,
	text: '贺兰县',
	parentId: 640100
}, {
	value: 640181,
	text: '灵武市',
	parentId: 640100
}, {
	value: 640201,
	text: '市辖区',
	parentId: 640200
}, {
	value: 640202,
	text: '大武口区',
	parentId: 640200
}, {
	value: 640205,
	text: '惠农区',
	parentId: 640200
}, {
	value: 640221,
	text: '平罗县',
	parentId: 640200
}, {
	value: 640301,
	text: '市辖区',
	parentId: 640300
}, {
	value: 640302,
	text: '利通区',
	parentId: 640300
}, {
	value: 640303,
	text: '红寺堡区',
	parentId: 640300
}, {
	value: 640323,
	text: '盐池县',
	parentId: 640300
}, {
	value: 640324,
	text: '同心县',
	parentId: 640300
}, {
	value: 640381,
	text: '青铜峡市',
	parentId: 640300
}, {
	value: 640401,
	text: '市辖区',
	parentId: 640400
}, {
	value: 640402,
	text: '原州区',
	parentId: 640400
}, {
	value: 640422,
	text: '西吉县',
	parentId: 640400
}, {
	value: 640423,
	text: '隆德县',
	parentId: 640400
}, {
	value: 640424,
	text: '泾源县',
	parentId: 640400
}, {
	value: 640425,
	text: '彭阳县',
	parentId: 640400
}, {
	value: 640501,
	text: '市辖区',
	parentId: 640500
}, {
	value: 640502,
	text: '沙坡头区',
	parentId: 640500
}, {
	value: 640521,
	text: '中宁县',
	parentId: 640500
}, {
	value: 640522,
	text: '海原县',
	parentId: 640500
}, {
	value: 650101,
	text: '市辖区',
	parentId: 650100
}, {
	value: 650102,
	text: '天山区',
	parentId: 650100
}, {
	value: 650103,
	text: '沙依巴克区',
	parentId: 650100
}, {
	value: 650104,
	text: '新市区',
	parentId: 650100
}, {
	value: 650105,
	text: '水磨沟区',
	parentId: 650100
}, {
	value: 650106,
	text: '头屯河区',
	parentId: 650100
}, {
	value: 650107,
	text: '达坂城区',
	parentId: 650100
}, {
	value: 650109,
	text: '米东区',
	parentId: 650100
}, {
	value: 650121,
	text: '乌鲁木齐县',
	parentId: 650100
}, {
	value: 650201,
	text: '市辖区',
	parentId: 650200
}, {
	value: 650202,
	text: '独山子区',
	parentId: 650200
}, {
	value: 650203,
	text: '克拉玛依区',
	parentId: 650200
}, {
	value: 650204,
	text: '白碱滩区',
	parentId: 650200
}, {
	value: 650205,
	text: '乌尔禾区',
	parentId: 650200
}, {
	value: 652101,
	text: '吐鲁番市',
	parentId: 652100
}, {
	value: 652122,
	text: '鄯善县',
	parentId: 652100
}, {
	value: 652123,
	text: '托克逊县',
	parentId: 652100
}, {
	value: 652201,
	text: '哈密市',
	parentId: 652200
}, {
	value: 652222,
	text: '巴里坤哈萨克自治县',
	parentId: 652200
}, {
	value: 652223,
	text: '伊吾县',
	parentId: 652200
}, {
	value: 652301,
	text: '昌吉市',
	parentId: 652300
}, {
	value: 652302,
	text: '阜康市',
	parentId: 652300
}, {
	value: 652323,
	text: '呼图壁县',
	parentId: 652300
}, {
	value: 652324,
	text: '玛纳斯县',
	parentId: 652300
}, {
	value: 652325,
	text: '奇台县',
	parentId: 652300
}, {
	value: 652327,
	text: '吉木萨尔县',
	parentId: 652300
}, {
	value: 652328,
	text: '木垒哈萨克自治县',
	parentId: 652300
}, {
	value: 652701,
	text: '博乐市',
	parentId: 652700
}, {
	value: 652702,
	text: '阿拉山口市',
	parentId: 652700
}, {
	value: 652722,
	text: '精河县',
	parentId: 652700
}, {
	value: 652723,
	text: '温泉县',
	parentId: 652700
}, {
	value: 652801,
	text: '库尔勒市',
	parentId: 652800
}, {
	value: 652822,
	text: '轮台县',
	parentId: 652800
}, {
	value: 652823,
	text: '尉犁县',
	parentId: 652800
}, {
	value: 652824,
	text: '若羌县',
	parentId: 652800
}, {
	value: 652825,
	text: '且末县',
	parentId: 652800
}, {
	value: 652826,
	text: '焉耆回族自治县',
	parentId: 652800
}, {
	value: 652827,
	text: '和静县',
	parentId: 652800
}, {
	value: 652828,
	text: '和硕县',
	parentId: 652800
}, {
	value: 652829,
	text: '博湖县',
	parentId: 652800
}, {
	value: 652901,
	text: '阿克苏市',
	parentId: 652900
}, {
	value: 652922,
	text: '温宿县',
	parentId: 652900
}, {
	value: 652923,
	text: '库车县',
	parentId: 652900
}, {
	value: 652924,
	text: '沙雅县',
	parentId: 652900
}, {
	value: 652925,
	text: '新和县',
	parentId: 652900
}, {
	value: 652926,
	text: '拜城县',
	parentId: 652900
}, {
	value: 652927,
	text: '乌什县',
	parentId: 652900
}, {
	value: 652928,
	text: '阿瓦提县',
	parentId: 652900
}, {
	value: 652929,
	text: '柯坪县',
	parentId: 652900
}, {
	value: 653001,
	text: '阿图什市',
	parentId: 653000
}, {
	value: 653022,
	text: '阿克陶县',
	parentId: 653000
}, {
	value: 653023,
	text: '阿合奇县',
	parentId: 653000
}, {
	value: 653024,
	text: '乌恰县',
	parentId: 653000
}, {
	value: 653101,
	text: '喀什市',
	parentId: 653100
}, {
	value: 653121,
	text: '疏附县',
	parentId: 653100
}, {
	value: 653122,
	text: '疏勒县',
	parentId: 653100
}, {
	value: 653123,
	text: '英吉沙县',
	parentId: 653100
}, {
	value: 653124,
	text: '泽普县',
	parentId: 653100
}, {
	value: 653125,
	text: '莎车县',
	parentId: 653100
}, {
	value: 653126,
	text: '叶城县',
	parentId: 653100
}, {
	value: 653127,
	text: '麦盖提县',
	parentId: 653100
}, {
	value: 653128,
	text: '岳普湖县',
	parentId: 653100
}, {
	value: 653129,
	text: '伽师县',
	parentId: 653100
}, {
	value: 653130,
	text: '巴楚县',
	parentId: 653100
}, {
	value: 653131,
	text: '塔什库尔干塔吉克自治县',
	parentId: 653100
}, {
	value: 653201,
	text: '和田市',
	parentId: 653200
}, {
	value: 653221,
	text: '和田县',
	parentId: 653200
}, {
	value: 653222,
	text: '墨玉县',
	parentId: 653200
}, {
	value: 653223,
	text: '皮山县',
	parentId: 653200
}, {
	value: 653224,
	text: '洛浦县',
	parentId: 653200
}, {
	value: 653225,
	text: '策勒县',
	parentId: 653200
}, {
	value: 653226,
	text: '于田县',
	parentId: 653200
}, {
	value: 653227,
	text: '民丰县',
	parentId: 653200
}, {
	value: 654002,
	text: '伊宁市',
	parentId: 654000
}, {
	value: 654003,
	text: '奎屯市',
	parentId: 654000
}, {
	value: 654021,
	text: '伊宁县',
	parentId: 654000
}, {
	value: 654022,
	text: '察布查尔锡伯自治县',
	parentId: 654000
}, {
	value: 654023,
	text: '霍城县',
	parentId: 654000
}, {
	value: 654024,
	text: '巩留县',
	parentId: 654000
}, {
	value: 654025,
	text: '新源县',
	parentId: 654000
}, {
	value: 654026,
	text: '昭苏县',
	parentId: 654000
}, {
	value: 654027,
	text: '特克斯县',
	parentId: 654000
}, {
	value: 654028,
	text: '尼勒克县',
	parentId: 654000
}, {
	value: 654201,
	text: '塔城市',
	parentId: 654200
}, {
	value: 654202,
	text: '乌苏市',
	parentId: 654200
}, {
	value: 654221,
	text: '额敏县',
	parentId: 654200
}, {
	value: 654223,
	text: '沙湾县',
	parentId: 654200
}, {
	value: 654224,
	text: '托里县',
	parentId: 654200
}, {
	value: 654225,
	text: '裕民县',
	parentId: 654200
}, {
	value: 654226,
	text: '和布克赛尔蒙古自治县',
	parentId: 654200
}, {
	value: 654301,
	text: '阿勒泰市',
	parentId: 654300
}, {
	value: 654321,
	text: '布尔津县',
	parentId: 654300
}, {
	value: 654322,
	text: '富蕴县',
	parentId: 654300
}, {
	value: 654323,
	text: '福海县',
	parentId: 654300
}, {
	value: 654324,
	text: '哈巴河县',
	parentId: 654300
}, {
	value: 654325,
	text: '青河县',
	parentId: 654300
}, {
	value: 654326,
	text: '吉木乃县',
	parentId: 654300
}, {
	value: 659001,
	text: '石河子市',
	parentId: 659000
}, {
	value: 659002,
	text: '阿拉尔市',
	parentId: 659000
}, {
	value: 659003,
	text: '图木舒克市',
	parentId: 659000
}, {
	value: 659004,
	text: '五家渠市',
	parentId: 659000
}];

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-picker", {
    ref: "picker",
    attrs: {
      "selected-index": _vm.selectedIndex,
      data: _vm.linkageData,
      title: _vm.title,
      cancelTxt: _vm.cancelTxt,
      confirmTxt: _vm.confirmTxt
    },
    on: { select: _vm.handleSelect, change: _vm.handleChange }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19793e5a", esExports)
  }
}

/***/ })
/******/ ]);
});