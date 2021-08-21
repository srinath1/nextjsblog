"use strict";
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog/page/[page_index].js":
/*!*****************************************!*\
  !*** ./pages/blog/page/[page_index].js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ BlogPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Post */ "./components/Post.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Pagination */ "./components/Pagination.js");
/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CategoryList */ "./components/CategoryList.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\vue\\restaurant\\nextproj\\pages\\blog\\page\\[page_index].js";




var __N_SSG = true;
function BlogPage(_ref) {
  var _this = this;

  var posts = _ref.posts,
      numPages = _ref.numPages,
      currentPage = _ref.currentPage,
      categories = _ref.categories;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-3/4 mr-10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: "text-5xl border-b-4 p-5 font-bold",
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
          children: posts.map(function (post, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post__WEBPACK_IMPORTED_MODULE_2__.default, {
              post: post
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 35
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.default, {
          currentPage: currentPage,
          numPages: numPages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-1/4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CategoryList__WEBPACK_IMPORTED_MODULE_4__.default, {
          categories: categories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}
_c = BlogPage;

var _c;

$RefreshReg$(_c, "BlogPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4zMWViNjc2ZGYyNWI0Y2NlNTNkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ksUUFBVCxPQUFnRTtBQUFBOztBQUFBLE1BQTVDQyxLQUE0QyxRQUE1Q0EsS0FBNEM7QUFBQSxNQUFyQ0MsUUFBcUMsUUFBckNBLFFBQXFDO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUM5RSxzQkFDQyw4REFBQyx1REFBRDtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsOEJBQ0M7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUMsbUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFHQztBQUFLLG1CQUFTLEVBQUMsMENBQWY7QUFBQSxvQkFDRUgsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZ0NBQWlCLDhEQUFDLHFEQUFEO0FBQWtCLGtCQUFJLEVBQUVEO0FBQXhCLGVBQVdDLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBakI7QUFBQSxXQUFWO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRCxlQU9DLDhEQUFDLDJEQUFEO0FBQVkscUJBQVcsRUFBRUosV0FBekI7QUFBc0Msa0JBQVEsRUFBRUQ7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQVdDO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsK0JBQ0MsOERBQUMsNkRBQUQ7QUFBYyxvQkFBVSxFQUFFRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1CQTtLQXBCdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2cvcGFnZS9bcGFnZV9pbmRleF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJ0AvY29tcG9uZW50cy9Qb3N0JztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgQ2F0ZWdvcnlMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9DYXRlZ29yeUxpc3QnO1xyXG5pbXBvcnQgeyBQT1NUU19QRVJfUEFHRSB9IGZyb20gJ0AvY29uZmlnL2luZGV4JztcclxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICdAL2xpYi9wb3N0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nUGFnZSh7IHBvc3RzLCBudW1QYWdlcywgY3VycmVudFBhZ2UsIGNhdGVnb3JpZXMgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBtci0xMFwiPlxyXG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGJvcmRlci1iLTQgcC01IGZvbnQtYm9sZFwiPkJsb2c8L2gxPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNVwiPlxyXG5cdFx0XHRcdFx0XHR7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gPFBvc3Qga2V5PXtpbmRleH0gcG9zdD17cG9zdH0gLz4pfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PFBhZ2luYXRpb24gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBudW1QYWdlcz17bnVtUGFnZXN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzRcIj5cclxuXHRcdFx0XHRcdDxDYXRlZ29yeUxpc3QgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblx0Y29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oJ3Bvc3RzJykpO1xyXG5cclxuXHRjb25zdCBudW1QYWdlcyA9IE1hdGguY2VpbChmaWxlcy5sZW5ndGggLyBQT1NUU19QRVJfUEFHRSk7XHJcblxyXG5cdGxldCBwYXRocyA9IFtdO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMTsgaSA8PSBudW1QYWdlczsgaSsrKSB7XHJcblx0XHRwYXRocy5wdXNoKHtcclxuXHRcdFx0cGFyYW1zOiB7IHBhZ2VfaW5kZXg6IGkudG9TdHJpbmcoKSB9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwYXRocyxcclxuXHRcdGZhbGxiYWNrOiBmYWxzZVxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcblx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KChwYXJhbXMgJiYgcGFyYW1zLnBhZ2VfaW5kZXgpIHx8IDEpO1xyXG5cclxuXHRjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbigncG9zdHMnKSk7XHJcblxyXG5cdGNvbnN0IHBvc3RzID0gZ2V0UG9zdHMoKTtcclxuXHJcblx0Ly8gR2V0IGNhdGVnb3JpZXMgZm9yIHNpZGViYXJcclxuXHRjb25zdCBjYXRlZ29yaWVzID0gcG9zdHMubWFwKChwb3N0KSA9PiBwb3N0LmZyb250bWF0dGVyLmNhdGVnb3J5KTtcclxuXHRjb25zdCB1bmlxdWVDYXRlZ29yaWVzID0gWyAuLi5uZXcgU2V0KGNhdGVnb3JpZXMpIF07XHJcblxyXG5cdGNvbnN0IG51bVBhZ2VzID0gTWF0aC5jZWlsKGZpbGVzLmxlbmd0aCAvIFBPU1RTX1BFUl9QQUdFKTtcclxuXHRjb25zdCBwYWdlSW5kZXggPSBwYWdlIC0gMTtcclxuXHRjb25zdCBvcmRlcmVkUG9zdHMgPSBwb3N0cy5zbGljZShwYWdlSW5kZXggKiBQT1NUU19QRVJfUEFHRSwgKHBhZ2VJbmRleCArIDEpICogUE9TVFNfUEVSX1BBR0UpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cG9zdHM6IG9yZGVyZWRQb3N0cyxcclxuXHRcdFx0bnVtUGFnZXMsXHJcblx0XHRcdGN1cnJlbnRQYWdlOiBwYWdlLFxyXG5cdFx0XHRjYXRlZ29yaWVzOiB1bmlxdWVDYXRlZ29yaWVzXHJcblx0XHR9XHJcblx0fTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiUG9zdCIsIlBhZ2luYXRpb24iLCJDYXRlZ29yeUxpc3QiLCJCbG9nUGFnZSIsInBvc3RzIiwibnVtUGFnZXMiLCJjdXJyZW50UGFnZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJwb3N0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9