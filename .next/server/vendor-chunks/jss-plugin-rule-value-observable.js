"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jss-plugin-rule-value-observable";
exports.ids = ["vendor-chunks/jss-plugin-rule-value-observable"];
exports.modules = {

/***/ "(ssr)/./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"(ssr)/./node_modules/symbol-observable/es/index.js\");\n/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ \"(ssr)/./node_modules/jss/dist/jss.esm.js\");\n\n\n\nvar isObservable = function isObservable(value) {\n  return value && value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] && value === value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]]();\n};\n\nvar observablePlugin = function observablePlugin(updateOptions) {\n  return {\n    onCreateRule: function onCreateRule(name, decl, options) {\n      if (!isObservable(decl)) return null;\n      var style$ = decl;\n      var rule = (0,jss__WEBPACK_IMPORTED_MODULE_1__.createRule)(name, {}, options); // TODO\n      // Call `stream.subscribe()` returns a subscription, which should be explicitly\n      // unsubscribed from when we know this sheet is no longer needed.\n\n      style$.subscribe(function (style) {\n        for (var prop in style) {\n          rule.prop(prop, style[prop], updateOptions);\n        }\n      });\n      return rule;\n    },\n    onProcessRule: function onProcessRule(rule) {\n      if (rule && rule.type !== 'style') return;\n      var styleRule = rule;\n      var style = styleRule.style;\n\n      var _loop = function _loop(prop) {\n        var value = style[prop];\n        if (!isObservable(value)) return \"continue\";\n        delete style[prop];\n        value.subscribe({\n          next: function next(nextValue) {\n            styleRule.prop(prop, nextValue, updateOptions);\n          }\n        });\n      };\n\n      for (var prop in style) {\n        var _ret = _loop(prop);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observablePlugin);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1ydWxlLXZhbHVlLW9ic2VydmFibGUvZGlzdC9qc3MtcGx1Z2luLXJ1bGUtdmFsdWUtb2JzZXJ2YWJsZS5lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQ1o7O0FBRWpDO0FBQ0Esd0JBQXdCLHlEQUFZLHFCQUFxQix5REFBWTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLCtDQUFVLFNBQVMsWUFBWTtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG90YWxwYXkvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1ydWxlLXZhbHVlLW9ic2VydmFibGUvZGlzdC9qc3MtcGx1Z2luLXJ1bGUtdmFsdWUtb2JzZXJ2YWJsZS5lc20uanM/YmYyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcbmltcG9ydCB7IGNyZWF0ZVJ1bGUgfSBmcm9tICdqc3MnO1xuXG52YXIgaXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZVskJG9ic2VydmFibGVdICYmIHZhbHVlID09PSB2YWx1ZVskJG9ic2VydmFibGVdKCk7XG59O1xuXG52YXIgb2JzZXJ2YWJsZVBsdWdpbiA9IGZ1bmN0aW9uIG9ic2VydmFibGVQbHVnaW4odXBkYXRlT3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghaXNPYnNlcnZhYmxlKGRlY2wpKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBzdHlsZSQgPSBkZWNsO1xuICAgICAgdmFyIHJ1bGUgPSBjcmVhdGVSdWxlKG5hbWUsIHt9LCBvcHRpb25zKTsgLy8gVE9ET1xuICAgICAgLy8gQ2FsbCBgc3RyZWFtLnN1YnNjcmliZSgpYCByZXR1cm5zIGEgc3Vic2NyaXB0aW9uLCB3aGljaCBzaG91bGQgYmUgZXhwbGljaXRseVxuICAgICAgLy8gdW5zdWJzY3JpYmVkIGZyb20gd2hlbiB3ZSBrbm93IHRoaXMgc2hlZXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cblxuICAgICAgc3R5bGUkLnN1YnNjcmliZShmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICAgIHJ1bGUucHJvcChwcm9wLCBzdHlsZVtwcm9wXSwgdXBkYXRlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfSxcbiAgICBvblByb2Nlc3NSdWxlOiBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICAgIGlmIChydWxlICYmIHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuO1xuICAgICAgdmFyIHN0eWxlUnVsZSA9IHJ1bGU7XG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVJ1bGUuc3R5bGU7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHByb3ApIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG4gICAgICAgIGlmICghaXNPYnNlcnZhYmxlKHZhbHVlKSkgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgICAgICB2YWx1ZS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQobmV4dFZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZVJ1bGUucHJvcChwcm9wLCBuZXh0VmFsdWUsIHVwZGF0ZU9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHZhciBfcmV0ID0gX2xvb3AocHJvcCk7XG5cbiAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZVBsdWdpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js\n");

/***/ })

};
;