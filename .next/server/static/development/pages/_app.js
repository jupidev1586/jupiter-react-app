module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return __jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop
    }, __jsx("i", {
      className: "bx bx-up-arrow-alt"
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderGoTopIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/GoTop */ "./components/Shared/GoTop.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Jupiter - React Next eCommerce Template"), __jsx("meta", {
    name: "description",
    content: "Jupiter - React Next eCommerce Template. This has been built with React, Next.js, Express.js, and ES6+"
  })), loader ? 'Loading' : children, __jsx(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var _store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/cartActions */ "./store/actions/cartActions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const MyApp = ({
  Component,
  pageProps,
  store
}) => {
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["checkUserLogin"])());
    store.dispatch(Object(_store_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addProducts"])());
  });
  return __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], null), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, __jsx(Component, pageProps)));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_4__["initStore"])(MyApp));

/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_PRODUCTS, USRER_LOGIN, CHECK_USRER_LOGIN, USRER_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCTS", function() { return ADD_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGIN", function() { return USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_USRER_LOGIN", function() { return CHECK_USRER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USRER_LOGOUT", function() { return USRER_LOGOUT; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const USRER_LOGIN = 'USRER_LOGIN';
const CHECK_USRER_LOGIN = 'CHECK_USRER_LOGIN';
const USRER_LOGOUT = 'USRER_LOGOUT';

/***/ }),

/***/ "./store/actions/cartActions.js":
/*!**************************************!*\
  !*** ./store/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: checkUserLogin, userLogout, userLogin, addProducts, addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProducts", function() { return addProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony import */ var _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
 //CHECK_USRER_LOGIN

const checkUserLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["CHECK_USRER_LOGIN"]
  };
}; // USRER_LOGOUT

const userLogout = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["USRER_LOGOUT"]
  };
}; // USRER_LOGIN

const userLogin = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["USRER_LOGIN"]
  };
}; //add products

const addProducts = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_PRODUCTS"]
  };
}; //add cart action

const addToCart = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_cart_actions__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
};

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const db = _firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].firestore();
const dbOrderRef = db.collection('products');


const token = '76483461103103918uhkjdkjc';
const initState = {
  products: [],
  addedItems: [],
  total: 0,
  shipping: 0,
  login: false
};

const cartReducer = (state = initState, action) => {
  // User Logout
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["USRER_LOGOUT"]) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('_livani_token_');
    return _objectSpread(_objectSpread({}, state), {}, {
      login: false
    });
  } // Check if user login


  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["CHECK_USRER_LOGIN"]) {
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_');

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  } // User Login


  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["USRER_LOGIN"]) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('_livani_token_', token);
    const getToken = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('_livani_token_'); // console.log('token', getToken)

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_PRODUCTS"]) {
    let productsArray = [];
    dbOrderRef.get().then(res => {
      res.forEach(doc => {
        let productsObj = doc.data();
        productsObj.id = doc.id;
        productsArray.push(productsObj);
      });
    }); // console.log('www', productsArray)

    return _objectSpread(_objectSpread({}, state), {}, {
      products: productsArray
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.newPrice * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.newPrice * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.newPrice;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 30
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 30
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_5__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9fQXBwL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3JlZHVjZXJzL2NhcnRSZWR1Y2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJwcm9wcyIsInRoZVBvc2l0aW9uIiwic2V0VGhlUG9zaXRpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwidGltZW91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJvblNjcm9sbFN0ZXAiLCJwYWdlWU9mZnNldCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyZW50Iiwic2Nyb2xsIiwic2Nyb2xsU3RlcEluUHgiLCJzY3JvbGxUb1RvcCIsInNldEludGVydmFsIiwiZGVsYXlJbk1zIiwicmVuZGVyR29Ub3BJY29uIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJzZXRUaW1lb3V0IiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJmaXJlYmFzZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYXV0aCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsImNoZWNrVXNlckxvZ2luIiwiYWRkUHJvZHVjdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJBRERfUFJPRFVDVFMiLCJVU1JFUl9MT0dJTiIsIkNIRUNLX1VTUkVSX0xPR0lOIiwiVVNSRVJfTE9HT1VUIiwidHlwZSIsInVzZXJMb2dvdXQiLCJ1c2VyTG9naW4iLCJhZGRUb0NhcnQiLCJpZCIsInJlbW92ZUl0ZW0iLCJzdWJ0cmFjdFF1YW50aXR5IiwiYWRkUXVhbnRpdHkiLCJhZGRRdWFudGl0eVdpdGhOdW1iZXIiLCJxdHkiLCJyZXNldENhcnQiLCJkYiIsImZpcmVzdG9yZSIsImRiT3JkZXJSZWYiLCJjb2xsZWN0aW9uIiwidG9rZW4iLCJpbml0U3RhdGUiLCJwcm9kdWN0cyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwibG9naW4iLCJjYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29va2llIiwicmVtb3ZlIiwiZ2V0VG9rZW4iLCJnZXQiLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwidGhlbiIsInJlcyIsImZvckVhY2giLCJkb2MiLCJwcm9kdWN0c09iaiIsImRhdGEiLCJwdXNoIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsIm5ld1ByaWNlIiwibmV3VG90YWwiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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SEwsQ0FBbEI7QUFLSCxDQU5NLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsT1AseUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBHb1RvcCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3RoZVBvc2l0aW9uLCBzZXRUaGVQb3NpdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24odHJ1ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICBjb25zdCBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApe1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgd2luZG93LnBhZ2VZT2Zmc2V0IC0gcHJvcHMuc2Nyb2xsU3RlcEluUHgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgICAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbChvblNjcm9sbFN0ZXAsIHByb3BzLmRlbGF5SW5Ncyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyR29Ub3BJY29uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bnby10b3AgJHt0aGVQb3NpdGlvbiA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ4IGJ4LXVwLWFycm93LWFsdFwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3JlbmRlckdvVG9wSWNvbigpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9TaGFyZWQvR29Ub3AnO1xuXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSwgMjAwMCk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5KdXBpdGVyIC0gUmVhY3QgTmV4dCBlQ29tbWVyY2UgVGVtcGxhdGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJKdXBpdGVyIC0gUmVhY3QgTmV4dCBlQ29tbWVyY2UgVGVtcGxhdGUuIFRoaXMgaGFzIGJlZW4gYnVpbHQgd2l0aCBSZWFjdCwgTmV4dC5qcywgRXhwcmVzcy5qcywgYW5kIEVTNitcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAge2xvYWRlciA/ICdMb2FkaW5nJyA6IGNoaWxkcmVufVxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbi8vIE5lZWQgdG8gdXBkYXRlIGJlbG93IGNvbmZpZ1xuY29uc3QgY29uZmlnID0ge1xuICAgIGFwaUtleTogXCJBSXphU3lCelpfamFqMHJXU05zSmJxeVpHaEh0R3pFa2cyakh2SGNcIixcbiAgICBhdXRoRG9tYWluOiBcInJlYWN0LWxpdmFuaS5maXJlYmFzZWFwcC5jb21cIixcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL3JlYWN0LWxpdmFuaS5maXJlYmFzZWlvLmNvbVwiLFxuICAgIHByb2plY3RJZDogXCJyZWFjdC1saXZhbmlcIixcbiAgICBzdG9yYWdlQnVja2V0OiBcInJlYWN0LWxpdmFuaS5hcHBzcG90LmNvbVwiLFxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjUzNjg5NTgwNTA0NVwiLFxuICAgIGFwcElkOiBcIjE6NTM2ODk1ODA1MDQ1OndlYjo4NjI1YzYxMDM3ODgxZThiYTU0YTNjXCJcbn07XG5cbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG59XG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuZXhwb3J0IHtcbiAgICBhdXRoLFxuICAgIGZpcmViYXNlXG59OyIsImltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMvY2FydFJlZHVjZXInO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXQnO1xuaW1wb3J0IHsgY2hlY2tVc2VyTG9naW4sIGFkZFByb2R1Y3RzIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XG5cbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9KSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goY2hlY2tVc2VyTG9naW4oKSlcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWRkUHJvZHVjdHMoKSlcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICAgIGlmKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpe1xuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoTXlBcHApIiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcbmV4cG9ydCBjb25zdCBBRERfVE9fQ0FSVCA9ICdBRERfVE9fQ0FSVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU0gPSAnUkVNT1ZFX0lURU0nO1xuZXhwb3J0IGNvbnN0IFNVQl9RVUFOVElUWSA9ICdTVUJfUVVBTlRJVFknO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWSA9ICdBRERfUVVBTlRJVFknO1xuZXhwb3J0IGNvbnN0IEFERF9TSElQUElORyA9ICdBRERfU0hJUFBJTkcnO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUiA9ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInO1xuZXhwb3J0IGNvbnN0IE9SREVSX0ZPUk0gPSAnT1JERVJfRk9STSc7XG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfQ0hBUkdFID0gJ0NIRUNLT1VUX0NIQVJHRSc7XG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVCA9ICdSRVNFVF9DQVJUJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVFMgPSAnQUREX1BST0RVQ1RTJztcbmV4cG9ydCBjb25zdCBVU1JFUl9MT0dJTiA9ICdVU1JFUl9MT0dJTic7XG5leHBvcnQgY29uc3QgQ0hFQ0tfVVNSRVJfTE9HSU4gPSAnQ0hFQ0tfVVNSRVJfTE9HSU4nO1xuZXhwb3J0IGNvbnN0IFVTUkVSX0xPR09VVCA9ICdVU1JFUl9MT0dPVVQnOyIsImltcG9ydCB7IFxuICAgIEFERF9UT19DQVJULFxuICAgIFJFTU9WRV9JVEVNLFxuICAgIFNVQl9RVUFOVElUWSxcbiAgICBBRERfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgIFJFU0VUX0NBUlQsXG4gICAgQUREX1BST0RVQ1RTLFxuICAgIFVTUkVSX0xPR0lOLFxuICAgIENIRUNLX1VTUkVSX0xPR0lOLFxuICAgIFVTUkVSX0xPR09VVFxufSBmcm9tICcuL2FjdGlvbi10eXBlcy9jYXJ0LWFjdGlvbnMnXG5cbi8vQ0hFQ0tfVVNSRVJfTE9HSU5cbmV4cG9ydCBjb25zdCBjaGVja1VzZXJMb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBDSEVDS19VU1JFUl9MT0dJTlxuICAgIH1cbn1cblxuLy8gVVNSRVJfTE9HT1VUXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBVU1JFUl9MT0dPVVRcbiAgICB9XG59XG5cbi8vIFVTUkVSX0xPR0lOXG5leHBvcnQgY29uc3QgdXNlckxvZ2luID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFVTUkVSX0xPR0lOXG4gICAgfVxufVxuXG4vL2FkZCBwcm9kdWN0c1xuZXhwb3J0IGNvbnN0IGFkZFByb2R1Y3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9QUk9EVUNUU1xuICAgIH1cbn1cbi8vYWRkIGNhcnQgYWN0aW9uXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX1RPX0NBUlQsXG4gICAgICAgIGlkXG4gICAgfVxufVxuLy9yZW1vdmUgaXRlbSBhY3Rpb25cbmV4cG9ydCBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX0lURU0sXG4gICAgICAgIGlkXG4gICAgfVxufVxuLy9zdWJ0cmFjdCBxdCBhY3Rpb25cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFF1YW50aXR5ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU1VCX1FVQU5USVRZLFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vYWRkIHF0IGFjdGlvblxuZXhwb3J0IGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX1FVQU5USVRZLFxuICAgICAgICBpZFxuICAgIH1cbn1cblxuLy9hZGQgcXQgYWN0aW9uIHdpdGggcXVhbnRpdHkgbnVtYmVyXG5leHBvcnQgY29uc3QgYWRkUXVhbnRpdHlXaXRoTnVtYmVyID0gKGlkLCBxdHkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIsXG4gICAgICAgIGlkLFxuICAgICAgICBxdHlcbiAgICB9XG59XG5cbi8vIFJlc2V0IGNhcnQgYWZ0ZXIgZm9ybSBzdWJtaXRcbmV4cG9ydCBjb25zdCByZXNldENhcnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUkVTRVRfQ0FSVFxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlJztcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5jb25zdCBkYk9yZGVyUmVmID0gZGIuY29sbGVjdGlvbigncHJvZHVjdHMnKTtcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IHsgXG4gICAgQUREX1RPX0NBUlQsXG4gICAgUkVNT1ZFX0lURU0sXG4gICAgU1VCX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWSwgXG4gICAgQUREX1NISVBQSU5HLFxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICBSRVNFVF9DQVJULFxuICAgIEFERF9QUk9EVUNUUyxcbiAgICBVU1JFUl9MT0dJTixcbiAgICBDSEVDS19VU1JFUl9MT0dJTixcbiAgICBVU1JFUl9MT0dPVVRcbn0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMvY2FydC1hY3Rpb25zJ1xuXG5jb25zdCB0b2tlbiA9ICc3NjQ4MzQ2MTEwMzEwMzkxOHVoa2pka2pjJztcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICAgIHByb2R1Y3RzOiBbXSxcbiAgICBhZGRlZEl0ZW1zOltdLFxuICAgIHRvdGFsOiAwLFxuICAgIHNoaXBwaW5nOiAwLFxuICAgIGxvZ2luOiBmYWxzZVxufVxuXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XG5cbiAgICAvLyBVc2VyIExvZ291dFxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gVVNSRVJfTE9HT1VUKXtcbiAgICAgICAgY29va2llLnJlbW92ZSgnX2xpdmFuaV90b2tlbl8nKVxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBsb2dpblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQ0hFQ0tfVVNSRVJfTE9HSU4pe1xuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19saXZhbmlfdG9rZW5fJylcblxuICAgICAgICBpZiAoZ2V0VG9rZW4gPT0gdG9rZW4pe1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVc2VyIExvZ2luXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFVTUkVSX0xPR0lOKXtcbiAgICAgICAgY29va2llLnNldCgnX2xpdmFuaV90b2tlbl8nLCB0b2tlbik7XG5cbiAgICAgICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfbGl2YW5pX3Rva2VuXycpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuJywgZ2V0VG9rZW4pXG5cbiAgICAgICAgaWYgKGdldFRva2VuID09IHRva2VuKXtcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUFJPRFVDVFMpe1xuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xuICAgICAgICBkYk9yZGVyUmVmLmdldCgpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICByZXMuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwcm9kdWN0c09iaiA9IGRvYy5kYXRhKCk7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHNPYmouaWQgPSBkb2MuaWQ7XG4gICAgICAgICAgICAgICAgcHJvZHVjdHNBcnJheS5wdXNoKHByb2R1Y3RzT2JqKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3d3cnLCBwcm9kdWN0c0FycmF5KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxuICAgICAgICB9XG4gICAgfVxuICAgXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DQVJUKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSlcbiAgICAgICAge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDEgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXG4gICAgICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSlcbiAgICAgICAge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTSl7XG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmU9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbT0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcbiAgICAgICAgXG4gICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gKGl0ZW1Ub1JlbW92ZS5uZXdQcmljZSAqIGl0ZW1Ub1JlbW92ZS5xdWFudGl0eSApO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWSl7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBTVUJfUVVBTlRJVFkpeyAgXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICAgICAgaWYoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKXtcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT5pdGVtLmlkICE9PSBhY3Rpb24uaWQpXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9TSElQUElORyl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVTRVRfQ0FSVCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBzaGlwcGluZzogMFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gaW5pdFN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgICBjYXJ0UmVkdWNlcixcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXG4gICAgKVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==