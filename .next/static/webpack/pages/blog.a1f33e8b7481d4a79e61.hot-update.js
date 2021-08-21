"use strict";
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CategoryLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryLabel */ "./components/CategoryLabel.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\vue\\restaurant\\nextproj\\components\\Post.js";



function Post(_ref) {
  var post = _ref.post,
      compact = _ref.compact;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6",
    children: [!compact && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: post.frontmatter.cover_image,
      alt: "",
      height: 420,
      width: 600,
      className: "mb-4 rounded"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "font-light text-gray-600",
        children: post.frontmatter.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryLabel__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: post.frontmatter.category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mt-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/blog/".concat(post.slug),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-2xl text-gray-700 font-bold hover:underline",
          children: post.frontmatter.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "mt-2 text-gray-600",
        children: post.frontmatter.excerpt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, this), !compact && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex justify-between items-center mt-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/blog/".concat(post.slug),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-gray-900 hover:text-blue-600",
          children: "Read More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 6
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: post.frontmatter.author_image,
          alt: "",
          className: "mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: "text-gray-700 font-bold",
          children: post.frontmatter.author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy5hMWYzM2U4Yjc0ODFkNGE3OWU2MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0csSUFBVCxPQUFpQztBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDL0Msc0JBQ0M7QUFBSyxhQUFTLEVBQUMsc0RBQWY7QUFBQSxlQUNFLENBQUNBLE9BQUQsaUJBQ0EsOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVELElBQUksQ0FBQ0UsV0FBTCxDQUFpQkMsV0FBN0I7QUFBMEMsU0FBRyxFQUFDLEVBQTlDO0FBQWlELFlBQU0sRUFBRSxHQUF6RDtBQUE4RCxXQUFLLEVBQUUsR0FBckU7QUFBMEUsZUFBUyxFQUFDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUlDO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0M7QUFBTSxpQkFBUyxFQUFDLDBCQUFoQjtBQUFBLGtCQUE0Q0gsSUFBSSxDQUFDRSxXQUFMLENBQWlCRTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQyw4REFBQyxtREFBRDtBQUFBLGtCQUFnQkosSUFBSSxDQUFDRSxXQUFMLENBQWlCRztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkQsZUFTQztBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0MsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLGtCQUFXTCxJQUFJLENBQUNNLElBQWhCLENBQVY7QUFBQSwrQkFDQztBQUFHLG1CQUFTLEVBQUMsa0RBQWI7QUFBQSxvQkFBaUVOLElBQUksQ0FBQ0UsV0FBTCxDQUFpQks7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUlDO0FBQUcsaUJBQVMsRUFBQyxvQkFBYjtBQUFBLGtCQUFtQ1AsSUFBSSxDQUFDRSxXQUFMLENBQWlCTTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQsRUFnQkUsQ0FBQ1AsT0FBRCxpQkFDQTtBQUFLLGVBQVMsRUFBQyx3Q0FBZjtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxrQkFBV0QsSUFBSSxDQUFDTSxJQUFoQixDQUFWO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFDLG1DQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBSUM7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0M7QUFDQyxhQUFHLEVBQUVOLElBQUksQ0FBQ0UsV0FBTCxDQUFpQk8sWUFEdkI7QUFFQyxhQUFHLEVBQUMsRUFGTDtBQUdDLG1CQUFTLEVBQUM7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBTUM7QUFBSSxtQkFBUyxFQUFDLHlCQUFkO0FBQUEsb0JBQXlDVCxJQUFJLENBQUNFLFdBQUwsQ0FBaUJRO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0NBO0tBbkN1QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IENhdGVnb3J5TGFiZWwgZnJvbSAnLi9DYXRlZ29yeUxhYmVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBjb21wYWN0IH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTAgcHktNiBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBtdC02XCI+XHJcblx0XHRcdHshY29tcGFjdCAmJiAoXHJcblx0XHRcdFx0PEltYWdlIHNyYz17cG9zdC5mcm9udG1hdHRlci5jb3Zlcl9pbWFnZX0gYWx0PVwiXCIgaGVpZ2h0PXs0MjB9IHdpZHRoPXs2MDB9IGNsYXNzTmFtZT1cIm1iLTQgcm91bmRlZFwiIC8+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LWdyYXktNjAwXCI+e3Bvc3QuZnJvbnRtYXR0ZXIuZGF0ZX08L3NwYW4+XHJcblx0XHRcdFx0PENhdGVnb3J5TGFiZWw+e3Bvc3QuZnJvbnRtYXR0ZXIuY2F0ZWdvcnl9PC9DYXRlZ29yeUxhYmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfT5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIGhvdmVyOnVuZGVybGluZVwiPntwb3N0LmZyb250bWF0dGVyLnRpdGxlfTwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWdyYXktNjAwXCI+e3Bvc3QuZnJvbnRtYXR0ZXIuZXhjZXJwdH08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0eyFjb21wYWN0ICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtdC02XCI+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH0+XHJcblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgaG92ZXI6dGV4dC1ibHVlLTYwMFwiPlJlYWQgTW9yZTwvYT5cclxuXHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17cG9zdC5mcm9udG1hdHRlci5hdXRob3JfaW1hZ2V9XHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJteC00IHctMTAgaC0xMCBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGhpZGRlbiBzbTpibG9ja1wiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZFwiPntwb3N0LmZyb250bWF0dGVyLmF1dGhvcn08L2gzPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJDYXRlZ29yeUxhYmVsIiwiUG9zdCIsInBvc3QiLCJjb21wYWN0IiwiZnJvbnRtYXR0ZXIiLCJjb3Zlcl9pbWFnZSIsImRhdGUiLCJjYXRlZ29yeSIsInNsdWciLCJ0aXRsZSIsImV4Y2VycHQiLCJhdXRob3JfaW1hZ2UiLCJhdXRob3IiXSwic291cmNlUm9vdCI6IiJ9