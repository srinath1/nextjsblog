"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTFmMzNlOGI3NDgxZDRhNzllNjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNHLElBQVQsT0FBaUM7QUFBQSxNQUFqQkMsSUFBaUIsUUFBakJBLElBQWlCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQy9DLHNCQUNDO0FBQUssYUFBUyxFQUFDLHNEQUFmO0FBQUEsZUFDRSxDQUFDQSxPQUFELGlCQUNBLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFRCxJQUFJLENBQUNFLFdBQUwsQ0FBaUJDLFdBQTdCO0FBQTBDLFNBQUcsRUFBQyxFQUE5QztBQUFpRCxZQUFNLEVBQUUsR0FBekQ7QUFBOEQsV0FBSyxFQUFFLEdBQXJFO0FBQTBFLGVBQVMsRUFBQztBQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFJQztBQUFLLGVBQVMsRUFBQyxtQ0FBZjtBQUFBLDhCQUNDO0FBQU0saUJBQVMsRUFBQywwQkFBaEI7QUFBQSxrQkFBNENILElBQUksQ0FBQ0UsV0FBTCxDQUFpQkU7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUMsOERBQUMsbURBQUQ7QUFBQSxrQkFBZ0JKLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkc7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpELGVBU0M7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxrQkFBV0wsSUFBSSxDQUFDTSxJQUFoQixDQUFWO0FBQUEsK0JBQ0M7QUFBRyxtQkFBUyxFQUFDLGtEQUFiO0FBQUEsb0JBQWlFTixJQUFJLENBQUNFLFdBQUwsQ0FBaUJLO0FBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFJQztBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBQSxrQkFBbUNQLElBQUksQ0FBQ0UsV0FBTCxDQUFpQk07QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRELEVBZ0JFLENBQUNQLE9BQUQsaUJBQ0E7QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBQSw4QkFDQyw4REFBQyxrREFBRDtBQUFNLFlBQUksa0JBQVdELElBQUksQ0FBQ00sSUFBaEIsQ0FBVjtBQUFBLCtCQUNDO0FBQUcsbUJBQVMsRUFBQyxtQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUlDO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNDO0FBQ0MsYUFBRyxFQUFFTixJQUFJLENBQUNFLFdBQUwsQ0FBaUJPLFlBRHZCO0FBRUMsYUFBRyxFQUFDLEVBRkw7QUFHQyxtQkFBUyxFQUFDO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQU1DO0FBQUksbUJBQVMsRUFBQyx5QkFBZDtBQUFBLG9CQUF5Q1QsSUFBSSxDQUFDRSxXQUFMLENBQWlCUTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtDQTtLQW5DdUJYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBDYXRlZ29yeUxhYmVsIGZyb20gJy4vQ2F0ZWdvcnlMYWJlbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCwgY29tcGFjdCB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTEwIHB5LTYgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgbXQtNlwiPlxyXG5cdFx0XHR7IWNvbXBhY3QgJiYgKFxyXG5cdFx0XHRcdDxJbWFnZSBzcmM9e3Bvc3QuZnJvbnRtYXR0ZXIuY292ZXJfaW1hZ2V9IGFsdD1cIlwiIGhlaWdodD17NDIwfSB3aWR0aD17NjAwfSBjbGFzc05hbWU9XCJtYi00IHJvdW5kZWRcIiAvPlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1ncmF5LTYwMFwiPntwb3N0LmZyb250bWF0dGVyLmRhdGV9PC9zcGFuPlxyXG5cdFx0XHRcdDxDYXRlZ29yeUxhYmVsPntwb3N0LmZyb250bWF0dGVyLmNhdGVnb3J5fTwvQ2F0ZWdvcnlMYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cclxuXHRcdFx0XHQ8TGluayBocmVmPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH0+XHJcblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNzAwIGZvbnQtYm9sZCBob3Zlcjp1bmRlcmxpbmVcIj57cG9zdC5mcm9udG1hdHRlci50aXRsZX08L2E+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1ncmF5LTYwMFwiPntwb3N0LmZyb250bWF0dGVyLmV4Y2VycHR9PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHshY29tcGFjdCAmJiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtNlwiPlxyXG5cdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ibG9nLyR7cG9zdC5zbHVnfWB9PlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIGhvdmVyOnRleHQtYmx1ZS02MDBcIj5SZWFkIE1vcmU8L2E+XHJcblx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e3Bvc3QuZnJvbnRtYXR0ZXIuYXV0aG9yX2ltYWdlfVxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXgtNCB3LTEwIGgtMTAgb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBoaWRkZW4gc206YmxvY2tcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBmb250LWJvbGRcIj57cG9zdC5mcm9udG1hdHRlci5hdXRob3J9PC9oMz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiQ2F0ZWdvcnlMYWJlbCIsIlBvc3QiLCJwb3N0IiwiY29tcGFjdCIsImZyb250bWF0dGVyIiwiY292ZXJfaW1hZ2UiLCJkYXRlIiwiY2F0ZWdvcnkiLCJzbHVnIiwidGl0bGUiLCJleGNlcnB0IiwiYXV0aG9yX2ltYWdlIiwiYXV0aG9yIl0sInNvdXJjZVJvb3QiOiIifQ==