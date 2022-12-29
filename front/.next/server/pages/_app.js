module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\ohhj\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\pages\\_app.js";


// import 'antd/dist/antd.css'; 이제 import 안해도 알아서 됨 5버전은...4버전은 해야됨





const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};
NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





//초기상태
// const initialState = {
//     user: {

//     },
//     post:{

//     }
// };
// const initialState = {
//     user: {
//         isLoggedIn:false,
//         user: null,
//         signUpDate: {},
//         loginData: {},
//     },
//     post:{
//         mainPosts: [],
//     }
// };
// const initialState = {
//     name:'mememe',
//     age:27,
//     password:'metoo'
// };

//action creator
//사용 예시 store.dispatch(changeNickname('바뀔 닉네임'))
const changeNickname = data => {
  return {
    type: 'CHANGE_NICKNAME',
    data
  };
};
// //로그인 액션
// export const loginAction = (data) =>{
//     return{
//         type: 'LOG_IN',
//     }
// };
// //로그아웃 액션
// export const logoutAction = (data) =>{
//     return{
//         type: 'LOG_OUT',
//         data,
//     }
// };

//async action creator 비동기 액션 크리에이터

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'youu',
// }

//리듀서란 (이전상태, 액션)=> 다음상태를 만들어내는 함수
// const rootReducer = (( state = initialState, action)=>{
//     switch(action.type){
//         case 'CHANGE_NICKNAME':
//             return{
//                 ...state,
//                 name: action.data,
//             }
//     }
// });
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  // const rootReducer = combineReducers(( state = initialState, action)=>{
  index: (state = {}, action) => {
    //서버사이드랜더링을 위해 들어간 것
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('', action);
        return _objectSpread(_objectSpread({}, state), action.payload);
      // case 'LOG_IN':
      //     return{
      //         ...state,
      //         user:{
      //             ...state.user,// 안 바꾸고 싶은것은 참조로 해주기
      //             isLoggedIn: true, //바꾸고 싶은 것은 이렇게 변경해주기
      //             user: action.data,
      //         },
      //     };
      // case 'LOG_OUT':
      //     return{
      //         ...state,
      //         user:{
      //             ...state.user,// 안 바꾸고 싶은것은 참조로 해주기
      //             isLoggedIn: false, //바꾸고 싶은 것은 이렇게 변경해주기
      //             user: null,
      //         },
      //     };
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  //combineReducers를 이용해서 리듀서user,post를 합쳤다.
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'meno'
    },
    content: '게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://www.shutterstock.com/image-photo/border-collie-dog-portrait-hiding-600w-1933485896.jpg'
    }, {
      src: 'https://www.shutterstock.com/shutterstock/photos/1933490342/display_1500/stock-photo-two-dogs-and-one-cat-staring-at-camera-in-front-of-a-yellow-background-1933490342.jpg'
    }, {
      src: 'https://www.shutterstock.com/shutterstock/photos/1663393486/display_1500/stock-photo-happy-mixed-breed-dog-portrait-with-a-kitten-on-his-head-1663393486.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '덧글을 달다.'
    }, {
      User: {
        nickname: 'nero2'
      },
      content: '덧글을 달다2.'
    }]
  }],
  imagePaths: [],
  postAdded: false
};

//게시글 작성하는 액션
const ADD_POST = 'ADD_POST';
const addPost = {
  type: ADD_POST
};
//가짜 객체
const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'who'
  },
  Images: [],
  Comments: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const initialState = {
  isLoggedIn: false,
  me: null,
  signUpDate: {},
  loginData: {}
};

//로그인 액션
const loginAction = data => {
  return {
    type: 'LOG_IN'
  };
};
//로그아웃 액션
const logoutAction = data => {
  return {
    type: 'LOG_OUT',
    data
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return _objectSpread(_objectSpread({}, state), {}, {
        // 안 바꾸고 싶은것은 참조로 해주기
        isLoggedIn: true,
        //바꾸고 싶은 것은 이렇게 변경해주기
        me: action.data
      });
    case 'LOG_OUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        // 안 바꾸고 싶은것은 참조로 해주기
        isLoggedIn: false,
        //바꾸고 싶은 것은 이렇게 변경해주기
        me: null
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);




const configureStore = () => {
  const middlewares = [];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.dispatch({
    type: 'CHANGE_NICKNAME',
    data: 'youu'
  });
  return store;
};
const weapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  //개발할 때 디버깅에 도움을 준다
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (weapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjaGFuZ2VOaWNrbmFtZSIsImRhdGEiLCJ0eXBlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0ZSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwibG9nb3V0QWN0aW9uIiwiY29uZmlndXJlU3RvcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiZGlzcGF0Y2giLCJ3ZWFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEYwQjtBQUNTO0FBQ25DO0FBQzZCO0FBQ2lCO0FBQ2xCO0FBQUE7QUFBQTtBQUc1QixNQUFNQSxRQUFRLEdBQUcsQ0FBQztFQUFDQztBQUFTLENBQUMsS0FBSztFQUM5QixvQkFDSTtJ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TSxDQUFDTjtNQUFJO0lBR3ZCLEtBQUssU0FBUztNQUNWLHVDQUNPSyxLQUFLO1FBQUM7UUFDVHVCLFVBQVUsRUFBRSxLQUFLO1FBQUU7UUFDbkJDLEVBQUUsRUFBRTtNQUFJO0lBRWhCO01BQ0ksT0FBT3hCLEtBQUs7RUFBQztBQUd6QixDQUFDO0FBRWNzQixzRUFBTyxFOzs7Ozs7Ozs7Ozs7QUMzQ3RCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDWTtBQUMzQjtBQUMyQjtBQUU3RCxNQUFNTyxjQUFjLEdBQUcsTUFBTTtFQUN6QixNQUFNQyxXQUFXLEdBQUUsRUFBRTtFQUNyQixNQUFNQyxRQUFRLEdBQUcsUUFDZkMsU0FBd0MsR0FDeENDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQVcsQ0FBQyxDQUFDO0VBQ3RELE1BQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ2QsaURBQU8sRUFBRVMsUUFBUSxDQUFDO0VBQ3hDSSxLQUFLLENBQUNFLFFBQVEsQ0FBQztJQUNYekMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkQsSUFBSSxFQUFFO0VBQ1YsQ0FBQyxDQUFDO0VBQ04sT0FBT3dDLEtBQUs7QUFFaEIsQ0FBQztBQUVELE1BQU1HLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ1YsY0FBYyxFQUFFO0VBQzFDO0VBQ0FXLEtBQUs7QUFDVCxDQUFDLENBQUM7QUFFYUYsc0VBQU8sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnRCLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyBpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7IOydtOygnCBpbXBvcnQg7JWI7ZW064+EIOyVjOyVhOyEnCDrkKggNeuyhOyghOydgC4uLjTrsoTsoITsnYAg7ZW07JW865CoXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5cclxuXHJcbmNvbnN0IE5vZGVCaXJkID0gKHtDb21wb25lbnR9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQgOiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbi8v7LSI6riw7IOB7YOcXHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuLy8gICAgIHVzZXI6IHtcclxuICAgICAgXHJcbi8vICAgICB9LFxyXG4vLyAgICAgcG9zdDp7XHJcblxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vLyBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICB1c2VyOiB7XHJcbi8vICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuLy8gICAgICAgICB1c2VyOiBudWxsLFxyXG4vLyAgICAgICAgIHNpZ25VcERhdGU6IHt9LFxyXG4vLyAgICAgICAgIGxvZ2luRGF0YToge30sXHJcbi8vICAgICB9LFxyXG4vLyAgICAgcG9zdDp7XHJcbi8vICAgICAgICAgbWFpblBvc3RzOiBbXSxcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4vLyAgICAgbmFtZTonbWVtZW1lJyxcclxuLy8gICAgIGFnZToyNyxcclxuLy8gICAgIHBhc3N3b3JkOidtZXRvbydcclxuLy8gfTtcclxuXHJcbi8vYWN0aW9uIGNyZWF0b3JcclxuLy/sgqzsmqkg7JiI7IucIHN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKCfrsJTrgJQg64uJ64Sk7J6EJykpXHJcbmNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcbi8vIC8v66Gc6re47J24IOyVoeyFmFxyXG4vLyBleHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT57XHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgdHlwZTogJ0xPR19JTicsXHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vIC8v66Gc6re47JWE7JuDIOyVoeyFmFxyXG4vLyBleHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKGRhdGEpID0+e1xyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcclxuLy8gICAgICAgICBkYXRhLFxyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuLy9hc3luYyBhY3Rpb24gY3JlYXRvciDruYTrj5nquLAg7JWh7IWYIO2BrOumrOyXkOydtO2EsFxyXG5cclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSB7XHJcbi8vICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuLy8gICAgIGRhdGE6ICd5b3V1JyxcclxuLy8gfVxyXG5cclxuXHJcbi8v66as65OA7ISc656AICjsnbTsoITsg4Htg5wsIOyVoeyFmCk9PiDri6TsnYzsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG4vLyBjb25zdCByb290UmVkdWNlciA9ICgoIHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pPT57XHJcbi8vICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4vLyAgICAgICAgIGNhc2UgJ0NIQU5HRV9OSUNLTkFNRSc6XHJcbi8vICAgICAgICAgICAgIHJldHVybntcclxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4vLyAgICAgICAgICAgICAgICAgbmFtZTogYWN0aW9uLmRhdGEsXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfSk7XHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pPT57IC8v7ISc67KE7IKs7J2065Oc656c642U66eB7J2EIOychO2VtCDrk6TslrTqsIQg6rKDXHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJycsYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIC8vIGNhc2UgJ0xPR19JTic6XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsLy8g7JWIIOuwlOq+uOqzoCDsi7bsnYDqsoPsnYAg7LC47KGw66GcIO2VtOyjvOq4sFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLCAvL+uwlOq+uOqzoCDsi7bsnYAg6rKD7J2AIOydtOugh+qyjCDrs4Dqsr3tlbTso7zquLBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdXNlcjogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgICAgIC8vIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLC8vIOyViCDrsJTqvrjqs6Ag7Iu27J2A6rKD7J2AIOywuOyhsOuhnCDtlbTso7zquLBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsIC8v67CU6r646rOgIOyLtuydgCDqsoPsnYAg7J2066CH6rKMIOuzgOqyve2VtOyjvOq4sFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLCAvL2NvbWJpbmVSZWR1Y2Vyc+ulvCDsnbTsmqntlbTshJwg66as65OA7IScdXNlcixwb3N066W8IO2VqeyzpOuLpC5cclxuICAgIHBvc3QsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOidtZW5vJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzcmM6J2h0dHBzOi8vd3d3LnNodXR0ZXJzdG9jay5jb20vaW1hZ2UtcGhvdG8vYm9yZGVyLWNvbGxpZS1kb2ctcG9ydHJhaXQtaGlkaW5nLTYwMHctMTkzMzQ4NTg5Ni5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzonaHR0cHM6Ly93d3cuc2h1dHRlcnN0b2NrLmNvbS9zaHV0dGVyc3RvY2svcGhvdG9zLzE5MzM0OTAzNDIvZGlzcGxheV8xNTAwL3N0b2NrLXBob3RvLXR3by1kb2dzLWFuZC1vbmUtY2F0LXN0YXJpbmctYXQtY2FtZXJhLWluLWZyb250LW9mLWEteWVsbG93LWJhY2tncm91bmQtMTkzMzQ5MDM0Mi5qcGcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzonaHR0cHM6Ly93d3cuc2h1dHRlcnN0b2NrLmNvbS9zaHV0dGVyc3RvY2svcGhvdG9zLzE2NjMzOTM0ODYvZGlzcGxheV8xNTAwL3N0b2NrLXBob3RvLWhhcHB5LW1peGVkLWJyZWVkLWRvZy1wb3J0cmFpdC13aXRoLWEta2l0dGVuLW9uLWhpcy1oZWFkLTE2NjMzOTM0ODYuanBnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBDb21tZW50czpbe1xyXG4gICAgICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6J25lcm8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6J+uNp+q4gOydhCDri6zri6QuJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6J25lcm8yJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OifrjafquIDsnYQg64us64ukMi4nXHJcbiAgICAgICAgfV1cclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG59O1xyXG5cclxuLy/qsozsi5zquIAg7J6R7ISx7ZWY64qUIOyVoeyFmFxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZTogQUREX1BPU1QsXHJcbn1cclxuLy/qsIDsp5wg6rCd7LK0XHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOjIsXHJcbiAgICBjb250ZW50OifrjZTrr7jrjbDsnbTthLAnLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZTond2hvJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6W10sXHJcbn07XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6W2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0ZToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuLy/roZzqt7jsnbgg7JWh7IWYXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiAnTE9HX0lOJyxcclxuICAgIH1cclxufTtcclxuLy/roZzqt7jslYTsm4Mg7JWh7IWYXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogJ0xPR19PVVQnLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSAnTE9HX0lOJzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsLy8g7JWIIOuwlOq+uOqzoCDsi7bsnYDqsoPsnYAg7LC47KGw66GcIO2VtOyjvOq4sFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSwgLy/rsJTqvrjqs6Ag7Iu27J2AIOqyg+ydgCDsnbTroIfqsowg67OA6rK97ZW07KO86riwXHJcbiAgICAgICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgJ0xPR19PVVQnOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwvLyDslYgg67CU6r646rOgIOyLtuydgOqyg+ydgCDssLjsobDroZwg7ZW07KO86riwXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSwgLy/rsJTqvrjqs6Ag7Iu27J2AIOqyg+ydgCDsnbTroIfqsowg67OA6rK97ZW07KO86riwXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHsgIFxyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPVtdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcclxuICAgICAgICAgICAgZGF0YTogJ3lvdXUnLFxyXG4gICAgICAgIH0pXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcblxyXG59O1xyXG5cclxuY29uc3Qgd2VhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgXHJcbiAgICAvL+qwnOuwnO2VoCDrlYwg65SU67KE6rmF7JeQIOuPhOybgOydhCDspIDri6RcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==