module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: auth, firebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);


 // Need to update below config

const config = {
  apiKey: "AIzaSyBzZ_jaj0rWSNsJbqyZGhHtGzEkg2jHvHc",
  authDomain: "react-livani.firebaseapp.com",
  databaseURL: "https://react-livani.firebaseio.com",
  projectId: "react-livani",
  storageBucket: "react-livani.appspot.com",
  messagingSenderId: "536895805045",
  appId: "1:536895805045:web:8625c61037881e8ba54a3c"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
}

const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth();


/***/ }),

/***/ "./pages/admin/signin.js":
/*!*******************************!*\
  !*** ./pages/admin/signin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Signin extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: '',
      password: ''
    });

    _defineProperty(this, "handleSignInWithEmail", e => {
      e.preventDefault();
      _firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success('You are signed In successfully!', {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/admin/dashboard');
        }, 1500);
      }).catch(function (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(error.message, {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        console.log(error);
      });
    });
  }

  render() {
    return __jsx("div", {
      className: "admin-signin ptb-100"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_1__["Flip"]
    }), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "login-content"
    }, __jsx("h2", null, "Admin Signin"), __jsx("form", {
      onSubmit: this.handleSignInWithEmail,
      className: "login-form"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Username or email address",
      value: this.state.email,
      onChange: e => this.setState({
        email: e.target.value
      })
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "password",
      className: "form-control",
      placeholder: "Password",
      value: this.state.password,
      onChange: e => this.setState({
        password: e.target.value
      })
    })), __jsx("button", {
      type: "submit",
      className: "default-btn"
    }, "Login")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/admin/signin.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\joshu\Desktop\livani-react - Copy\pages\admin\signin.js */"./pages/admin/signin.js");


/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vc2lnbmluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiJdLCJuYW1lcyI6WyJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiU2lnbmluIiwiUmVhY3QiLCJDb21wb25lbnQiLCJlbWFpbCIsInBhc3N3b3JkIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzdGF0ZSIsInRoZW4iLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiRmxpcCIsImhhbmRsZVNpZ25JbldpdGhFbWFpbCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7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OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG4vLyBOZWVkIHRvIHVwZGF0ZSBiZWxvdyBjb25maWdcbmNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiQUl6YVN5QnpaX2phajByV1NOc0picXlaR2hIdEd6RWtnMmpIdkhjXCIsXG4gICAgYXV0aERvbWFpbjogXCJyZWFjdC1saXZhbmkuZmlyZWJhc2VhcHAuY29tXCIsXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9yZWFjdC1saXZhbmkuZmlyZWJhc2Vpby5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwicmVhY3QtbGl2YW5pXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJyZWFjdC1saXZhbmkuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1MzY4OTU4MDUwNDVcIixcbiAgICBhcHBJZDogXCIxOjUzNjg5NTgwNTA0NTp3ZWI6ODYyNWM2MTAzNzg4MWU4YmE1NGEzY1wiXG59O1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xufVxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmV4cG9ydCB7XG4gICAgYXV0aCxcbiAgICBmaXJlYmFzZVxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0LCBGbGlwIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xuY2xhc3MgU2lnbmluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgaGFuZGxlU2lnbkluV2l0aEVtYWlsID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQodGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnWW91IGFyZSBzaWduZWQgSW4gc3VjY2Vzc2Z1bGx5IScsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tbGVmdFwiLFxuICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogMTAwMCxcbiAgICAgICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vZGFzaGJvYXJkJyk7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDEwMDAsXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1zaWduaW4gcHRiLTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtdGFibGUtY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17RmxpcH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFkbWluIFNpZ25pbjwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2lnbkluV2l0aEVtYWlsfSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvciBlbWFpbCBhZGRyZXNzXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2lnbmluIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=