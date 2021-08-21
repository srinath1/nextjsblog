self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_vue_restaurant_nextproj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_vue_restaurant_nextproj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_vue_restaurant_nextproj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_vue_restaurant_nextproj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SearchResults__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\vue\\restaurant\\nextproj\\components\\Search.js",
    _s = $RefreshSig$();




function Search() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      searchResults = _useState2[0],
      setSearchResults = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getResults = /*#__PURE__*/function () {
      var _ref = (0,C_vue_restaurant_nextproj_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_vue_restaurant_nextproj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        var res, _yield$res$json, results;

        return C_vue_restaurant_nextproj_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(searchTerm === '')) {
                  _context.next = 4;
                  break;
                }

                setSearchResults([]);
                _context.next = 12;
                break;

              case 4:
                _context.next = 6;
                return fetch("/api/search?q=".concat(searchTerm));

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.json();

              case 9:
                _yield$res$json = _context.sent;
                results = _yield$res$json.results;
                setSearchResults(results);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getResults() {
        return _ref.apply(this, arguments);
      };
    }();

    getResults();
  }, [searchTerm]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative bg-gray-600 p-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto flex items-center justify-center md:justify-end",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "relative text-gray-600 w-72",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "search",
            name: "search",
            id: "search",
            className: "bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72",
            value: searchTerm,
            onChange: function onChange(e) {
              return setSearchTerm(e.target.value);
            },
            placeholder: "Search Posts..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaSearch, {
            className: "absolute top-0 right-0 text-black mt-3 mr-4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_SearchResults__WEBPACK_IMPORTED_MODULE_4___default()), {
      results: searchResults
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, this);
}

_s(Search, "CZafoGGGyeCgC7ejNHKnHX4nBcs=");

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4xMjcyNWIzYTllNDdhM2E5MjUzOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ01KLCtDQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDeEJLLFVBRHdCO0FBQUEsTUFDWkMsYUFEWTs7QUFBQSxtQkFFWU4sK0NBQVEsQ0FBQyxFQUFELENBRnBCO0FBQUEsTUFFeEJPLGFBRndCO0FBQUEsTUFFVEMsZ0JBRlM7O0FBSWhDUCxFQUFBQSxnREFBUyxDQUNSLFlBQU07QUFDTCxRQUFNUSxVQUFVO0FBQUEsdVFBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNkSixVQUFVLEtBQUssRUFERDtBQUFBO0FBQUE7QUFBQTs7QUFFakJHLGdCQUFBQSxnQkFBZ0IsQ0FBQyxFQUFELENBQWhCO0FBRmlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVCQUlDRSxLQUFLLHlCQUFrQkwsVUFBbEIsRUFKTjs7QUFBQTtBQUlYTSxnQkFBQUEsR0FKVztBQUFBO0FBQUEsdUJBS1NBLEdBQUcsQ0FBQ0MsSUFBSixFQUxUOztBQUFBO0FBQUE7QUFLVEMsZ0JBQUFBLE9BTFMsbUJBS1RBLE9BTFM7QUFNakJMLGdCQUFBQSxnQkFBZ0IsQ0FBQ0ssT0FBRCxDQUFoQjs7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxPQUFoQjs7QUFVQUEsSUFBQUEsVUFBVTtBQUNWLEdBYk8sRUFjUixDQUFFSixVQUFGLENBZFEsQ0FBVDtBQWlCQSxzQkFDQztBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLG1FQUFmO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsK0JBQ0M7QUFBQSxrQ0FDQztBQUNDLGdCQUFJLEVBQUMsUUFETjtBQUVDLGdCQUFJLEVBQUMsUUFGTjtBQUdDLGNBQUUsRUFBQyxRQUhKO0FBSUMscUJBQVMsRUFBQyx1RUFKWDtBQUtDLGlCQUFLLEVBQUVBLFVBTFI7QUFNQyxvQkFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEscUJBQU9SLGFBQWEsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFBQSxhQU5YO0FBT0MsdUJBQVcsRUFBQztBQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFXQyw4REFBQyxvREFBRDtBQUFVLHFCQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBbUJDLDhEQUFDLHVEQUFEO0FBQWUsYUFBTyxFQUFFVDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBdUJBOztHQTVDdUJIOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnLi9TZWFyY2hSZXN1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHRjb25zdCBbIHNlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm0gXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbIHNlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KFxyXG5cdFx0KCkgPT4ge1xyXG5cdFx0XHRjb25zdCBnZXRSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChzZWFyY2hUZXJtID09PSAnJykge1xyXG5cdFx0XHRcdFx0c2V0U2VhcmNoUmVzdWx0cyhbXSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL3NlYXJjaD9xPSR7c2VhcmNoVGVybX1gKTtcclxuXHRcdFx0XHRcdGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHRcdFx0XHRcdHNldFNlYXJjaFJlc3VsdHMocmVzdWx0cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Z2V0UmVzdWx0cygpO1xyXG5cdFx0fSxcclxuXHRcdFsgc2VhcmNoVGVybSBdXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctZ3JheS02MDAgcC00XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtZ3JheS02MDAgdy03MlwiPlxyXG5cdFx0XHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwic2VhcmNoXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiZy13aGl0ZSBoLTEwIHB4LTUgcHItMTAgcm91bmRlZC1mdWxsIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIHctNzJcIlxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtzZWFyY2hUZXJtfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggUG9zdHMuLi5cIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0PEZhU2VhcmNoIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdGV4dC1ibGFjayBtdC0zIG1yLTRcIiAvPlxyXG5cdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxTZWFyY2hSZXN1bHRzIHJlc3VsdHM9e3NlYXJjaFJlc3VsdHN9IC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZhU2VhcmNoIiwiU2VhcmNoUmVzdWx0cyIsIlNlYXJjaCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJnZXRSZXN1bHRzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVzdWx0cyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=