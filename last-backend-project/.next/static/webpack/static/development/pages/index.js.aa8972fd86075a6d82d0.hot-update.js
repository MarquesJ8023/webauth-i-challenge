webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/lambda_school_loaner_149/Desktop/Back-End/Node/Week3/webauth-i-challenge/last-backend-project/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:4000/api/users').then(function (users) {
  console.log(users);
})["catch"](function (err) {
  console.log(err);
});
axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:4000/api/login', {
  username: "marques",
  password: "johnson"
}).then(function (res) {
  console.log(res);
})["catch"](function (err) {
  console.log(err);
});
axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:4000');

var Index = function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Hello Next.js"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.aa8972fd86075a6d82d0.hot-update.js.map