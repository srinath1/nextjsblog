"use strict";
(() => {
var exports = {};
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "./pages/api/search.js":
/*!*****************************!*\
  !*** ./pages/api/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {
  let posts;

  if (false) {} else {
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join('posts'));
    posts = files.map(filename => {
      const slug = filename.replace('.md', '');
      const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().join('posts', filename), 'utf-8');
      const {
        data: frontmatter
      } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(markdownWithMeta);
      return {
        slug,
        frontmatter
      };
    });
  }

  const results = posts.filter(({
    frontmatter: {
      title,
      excerpt,
      category
    }
  }) => {
    console.log('title', title.toLowerCase().indexOf(req.query.q) != -1);
    return title.toLowerCase().indexOf(req.query.q) != -1 || excerpt.toLowerCase().indexOf(req.query.q) != -1 || category.toLowerCase().indexOf(req.query.q) != -1;
  });
  console.log('results', results);
  res.status(200).json(JSON.stringify({
    results
  }));
});

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/search.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3NlYXJjaC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLGlFQUFlLENBQUNHLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzVCLE1BQUlDLEtBQUo7O0FBRUEsYUFBMkMsRUFBM0MsTUFFTztBQUNOLFVBQU1DLEtBQUssR0FBR04scURBQUEsQ0FBZUMsZ0RBQUEsQ0FBVSxPQUFWLENBQWYsQ0FBZDtBQUVBSSxJQUFBQSxLQUFLLEdBQUdDLEtBQUssQ0FBQ0csR0FBTixDQUFXQyxRQUFELElBQWM7QUFDL0IsWUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsRUFBeEIsQ0FBYjtBQUVBLFlBQU1DLGdCQUFnQixHQUFHYixzREFBQSxDQUFnQkMsZ0RBQUEsQ0FBVSxPQUFWLEVBQW1CUyxRQUFuQixDQUFoQixFQUE4QyxPQUE5QyxDQUF6QjtBQUVBLFlBQU07QUFBRUssUUFBQUEsSUFBSSxFQUFFQztBQUFSLFVBQXdCZCxrREFBTSxDQUFDVyxnQkFBRCxDQUFwQztBQUVBLGFBQU87QUFDTkYsUUFBQUEsSUFETTtBQUVOSyxRQUFBQTtBQUZNLE9BQVA7QUFJQSxLQVhPLENBQVI7QUFZQTs7QUFFRCxRQUFNQyxPQUFPLEdBQUdaLEtBQUssQ0FBQ2EsTUFBTixDQUFhLENBQUM7QUFBRUYsSUFBQUEsV0FBVyxFQUFFO0FBQUVHLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUEsT0FBVDtBQUFrQkMsTUFBQUE7QUFBbEI7QUFBZixHQUFELEtBQW1EO0FBQy9FQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSixLQUFLLENBQUNLLFdBQU4sR0FBb0JDLE9BQXBCLENBQTRCdEIsR0FBRyxDQUFDdUIsS0FBSixDQUFVQyxDQUF0QyxLQUE0QyxDQUFDLENBQWxFO0FBQ0EsV0FDQ1IsS0FBSyxDQUFDSyxXQUFOLEdBQW9CQyxPQUFwQixDQUE0QnRCLEdBQUcsQ0FBQ3VCLEtBQUosQ0FBVUMsQ0FBdEMsS0FBNEMsQ0FBQyxDQUE3QyxJQUNBUCxPQUFPLENBQUNJLFdBQVIsR0FBc0JDLE9BQXRCLENBQThCdEIsR0FBRyxDQUFDdUIsS0FBSixDQUFVQyxDQUF4QyxLQUE4QyxDQUFDLENBRC9DLElBRUFOLFFBQVEsQ0FBQ0csV0FBVCxHQUF1QkMsT0FBdkIsQ0FBK0J0QixHQUFHLENBQUN1QixLQUFKLENBQVVDLENBQXpDLEtBQStDLENBQUMsQ0FIakQ7QUFLQSxHQVBlLENBQWhCO0FBU0FMLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJOLE9BQXZCO0FBRUFiLEVBQUFBLEdBQUcsQ0FBQ3dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRWQsSUFBQUE7QUFBRixHQUFmLENBQXJCO0FBQ0EsQ0FsQ0Q7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtbWFya2Rvd24tcHJvamVjdC8uL3BhZ2VzL2FwaS9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLW1hcmtkb3duLXByb2plY3QvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL25leHRqcy1tYXJrZG93bi1wcm9qZWN0L2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMtbWFya2Rvd24tcHJvamVjdC9leHRlcm5hbCBcInBhdGhcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG5cdGxldCBwb3N0cztcblxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuXHRcdC8vIEB0b2RvIC0gZmV0Y2ggZnJvbSBjYWNoZVxuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKCdwb3N0cycpKTtcblxuXHRcdHBvc3RzID0gZmlsZXMubWFwKChmaWxlbmFtZSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2x1ZyA9IGZpbGVuYW1lLnJlcGxhY2UoJy5tZCcsICcnKTtcblxuXHRcdFx0Y29uc3QgbWFya2Rvd25XaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oJ3Bvc3RzJywgZmlsZW5hbWUpLCAndXRmLTgnKTtcblxuXHRcdFx0Y29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciB9ID0gbWF0dGVyKG1hcmtkb3duV2l0aE1ldGEpO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzbHVnLFxuXHRcdFx0XHRmcm9udG1hdHRlclxuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHJlc3VsdHMgPSBwb3N0cy5maWx0ZXIoKHsgZnJvbnRtYXR0ZXI6IHsgdGl0bGUsIGV4Y2VycHQsIGNhdGVnb3J5IH0gfSkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKCd0aXRsZScsIHRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihyZXEucXVlcnkucSkgIT0gLTEpO1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocmVxLnF1ZXJ5LnEpICE9IC0xIHx8XG5cdFx0XHRleGNlcnB0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihyZXEucXVlcnkucSkgIT0gLTEgfHxcblx0XHRcdGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihyZXEucXVlcnkucSkgIT0gLTFcblx0XHQpO1xuXHR9KTtcblxuXHRjb25zb2xlLmxvZygncmVzdWx0cycsIHJlc3VsdHMpO1xuXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04uc3RyaW5naWZ5KHsgcmVzdWx0cyB9KSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibWF0dGVyIiwicmVxIiwicmVzIiwicG9zdHMiLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwiam9pbiIsIm1hcCIsImZpbGVuYW1lIiwic2x1ZyIsInJlcGxhY2UiLCJtYXJrZG93bldpdGhNZXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImZyb250bWF0dGVyIiwicmVzdWx0cyIsImZpbHRlciIsInRpdGxlIiwiZXhjZXJwdCIsImNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInF1ZXJ5IiwicSIsInN0YXR1cyIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==