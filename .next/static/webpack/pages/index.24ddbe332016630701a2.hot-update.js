"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\vue\\restaurant\\nextproj\\components\\Search.js",
    _s = $RefreshSig$();


 //import SearchResults from './SearchResults';

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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSearch, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchResults, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjRkZGJlMzMyMDE2NjMwNzAxYTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRWUsU0FBU0csTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNNSCwrQ0FBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ3hCSSxVQUR3QjtBQUFBLE1BQ1pDLGFBRFk7O0FBQUEsbUJBRVlMLCtDQUFRLENBQUMsRUFBRCxDQUZwQjtBQUFBLE1BRXhCTSxhQUZ3QjtBQUFBLE1BRVRDLGdCQUZTOztBQUloQ04sRUFBQUEsZ0RBQVMsQ0FDUixZQUFNO0FBQ0wsUUFBTU8sVUFBVTtBQUFBLHVRQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDZEosVUFBVSxLQUFLLEVBREQ7QUFBQTtBQUFBO0FBQUE7O0FBRWpCRyxnQkFBQUEsZ0JBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUZpQjtBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFJQ0UsS0FBSyx5QkFBa0JMLFVBQWxCLEVBSk47O0FBQUE7QUFJWE0sZ0JBQUFBLEdBSlc7QUFBQTtBQUFBLHVCQUtTQSxHQUFHLENBQUNDLElBQUosRUFMVDs7QUFBQTtBQUFBO0FBS1RDLGdCQUFBQSxPQUxTLG1CQUtUQSxPQUxTO0FBTWpCTCxnQkFBQUEsZ0JBQWdCLENBQUNLLE9BQUQsQ0FBaEI7O0FBTmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZKLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBVUFBLElBQUFBLFVBQVU7QUFDVixHQWJPLEVBY1IsQ0FBRUosVUFBRixDQWRRLENBQVQ7QUFpQkEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQyxtRUFBZjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyw2QkFBZjtBQUFBLCtCQUNDO0FBQUEsa0NBQ0M7QUFDQyxnQkFBSSxFQUFDLFFBRE47QUFFQyxnQkFBSSxFQUFDLFFBRk47QUFHQyxjQUFFLEVBQUMsUUFISjtBQUlDLHFCQUFTLEVBQUMsdUVBSlg7QUFLQyxpQkFBSyxFQUFFQSxVQUxSO0FBTUMsb0JBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLHFCQUFPUixhQUFhLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsYUFOWDtBQU9DLHVCQUFXLEVBQUM7QUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBV0MsOERBQUMsb0RBQUQ7QUFBVSxxQkFBUyxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQW1CQyw4REFBQyxhQUFEO0FBQWUsYUFBTyxFQUFFVDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBdUJBOztHQTVDdUJIOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuLy9pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tICcuL1NlYXJjaFJlc3VsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG5cdGNvbnN0IFsgc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybSBdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFsgc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0cyBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHR1c2VFZmZlY3QoXHJcblx0XHQoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGdldFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKHNlYXJjaFRlcm0gPT09ICcnKSB7XHJcblx0XHRcdFx0XHRzZXRTZWFyY2hSZXN1bHRzKFtdKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvc2VhcmNoP3E9JHtzZWFyY2hUZXJtfWApO1xyXG5cdFx0XHRcdFx0Y29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cdFx0XHRcdFx0c2V0U2VhcmNoUmVzdWx0cyhyZXN1bHRzKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRnZXRSZXN1bHRzKCk7XHJcblx0XHR9LFxyXG5cdFx0WyBzZWFyY2hUZXJtIF1cclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmF5LTYwMCBwLTRcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1ncmF5LTYwMCB3LTcyXCI+XHJcblx0XHRcdFx0XHQ8Zm9ybT5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cInNlYXJjaFwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJzZWFyY2hcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtMTAgcHgtNSBwci0xMCByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgdy03MlwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlYXJjaFRlcm19XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBQb3N0cy4uLlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8RmFTZWFyY2ggY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB0ZXh0LWJsYWNrIG10LTMgbXItNFwiIC8+XHJcblx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PFNlYXJjaFJlc3VsdHMgcmVzdWx0cz17c2VhcmNoUmVzdWx0c30gLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmFTZWFyY2giLCJTZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwiZ2V0UmVzdWx0cyIsImZldGNoIiwicmVzIiwianNvbiIsInJlc3VsdHMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9