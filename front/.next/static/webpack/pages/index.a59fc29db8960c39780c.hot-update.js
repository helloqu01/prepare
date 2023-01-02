webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\ohhj\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\pages\\index.js",
  _this = undefined,
  _s = $RefreshSig$();







var Home = function Home() {
  _s();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
      return state.user;
    }),
    me = _useSelector.me; //사용자가 로그인 헀는지 안했는지 여부를 알려줌
  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
      return state.post;
    }),
    mainPosts = _useSelector2.mainPosts,
    hasMorePost = _useSelector2.hasMorePost,
    loadPostsLoading = _useSelector2.loadPostsLoading;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    //메인페이지를 호출할 때 무한 스크롤 부분
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    //어느정도 스크롤이 내려오면 새로운 데이터 요청
    function onScroll() {
      console.log('scrolled');
      /*
      * window.scrollY, // 스크롤된 양
      * document.documentElement.clientHeight, // 유저가 보는 문서의 높이
      * document.documentElement.scrollHeight // 전체 문서 높이
      */
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          //불러오는 중이거나 다 불러왔다면
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"],
            data: mainPosts[mainPosts.length - 1].id
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePost, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 20
    }, _this), mainPosts.map(function (c) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: c
      }, c.id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, _this);
};
_s(Home, "HoN31LM6yVGMx+CQsiQXl8usF0I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
});
_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);
var _c;
$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJkYXRhIiwibGVuZ3RoIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ1A7QUFDRjtBQUNBO0FBQ0w7QUFDYTtBQUFBO0FBQ3RELElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFJLEdBQVM7RUFBQTtFQUNmLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixtQkFBYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBR0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUF0Q0MsRUFBRSxnQkFBRkEsRUFBRSxDQUFxQyxDQUFDO0VBQy9DLG9CQUFxREgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDRyxJQUFJO0lBQUEsRUFBQztJQUEvRUMsU0FBUyxpQkFBVEEsU0FBUztJQUFFQyxXQUFXLGlCQUFYQSxXQUFXO0lBQUVDLGdCQUFnQixpQkFBaEJBLGdCQUFnQjtFQUdoREMsdURBQVMsQ0FBQyxZQUFNO0lBQUU7SUFDaEJWLFFBQVEsQ0FBQztNQUNQVyxJQUFJLEVBQUVDLGlFQUFrQkE7SUFDMUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVORix1REFBUyxDQUFDLFlBQU07SUFBRTtJQUNoQixTQUFTRyxRQUFRLEdBQUc7TUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUNwQjtBQUNYO0FBQ0E7QUFDQTtBQUNBO01BQ1EsSUFBSUMsTUFBTSxDQUFDQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDRSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hHLElBQUliLFdBQVcsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRTtVQUFDO1VBQ3JDVCxRQUFRLENBQUM7WUFDUFcsSUFBSSxFQUFFQyxpRUFBa0I7WUFDeEJVLElBQUksRUFBRWYsU0FBUyxDQUFDQSxTQUFTLENBQUNnQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNDO1VBQ3hDLENBQUMsQ0FBQztRQUNKO01BQ0Y7SUFDRjtJQUNBUixNQUFNLENBQUNTLGdCQUFnQixDQUFDLFFBQVEsRUFBRVosUUFBUSxDQUFDO0lBQzNDLE9BQU8sWUFBTTtNQUNYRyxNQUFNLENBQUNVLG1CQUFtQixDQUFDLFFBQVEsRUFBRWIsUUFBUSxDQUFDO0lBQ2hELENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ04sU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGdCQUFnQixDQUFDLENBQUM7RUFHOUMsb0JBQ0kscUVBQUMsNkRBQVM7SUFBQSxXQUNMSixFQUFFLGlCQUFJLHFFQUFDLDREQUFRO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBRSxFQUVqQkUsU0FBUyxDQUFDb0IsR0FBRyxDQUFDLFVBQUNDLENBQUM7TUFBQSxvQkFDYixxRUFBQyw0REFBUTtRQUFZLElBQUksRUFBRUE7TUFBRSxHQUFkQSxDQUFDLENBQUNKLEVBQUU7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUFhO0lBQUEsQ0FDbkMsQ0FBQztFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDTTtBQUVwQixDQUFDO0FBQUEsR0E3Q0t6QixJQUFJO0VBQUEsUUFDV0UsdURBQVcsRUFDZkMsdURBQVcsRUFDNkJBLHVEQUFXO0FBQUE7QUFBQSxLQUg5REgsSUFBSTtBQStDS0EsbUVBQUksRUFBQztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTU5ZmMyOWRiODk2MGMzOTc4MGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTsgLy/sgqzsmqnsnpDqsIAg66Gc6re47J24IO2XgOuKlOyngCDslYjtlojripTsp4Ag7Jes67aA66W8IOyVjOugpOykjFxyXG4gICAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIFxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8v66mU7J247Y6Y7J207KeA66W8IO2YuOy2nO2VoCDrlYwg66y07ZWcIOyKpO2BrOuhpCDrtoDrtoRcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL+yWtOuKkOygleuPhCDsiqTtgazroaTsnbQg64K066Ck7Jik66m0IOyDiOuhnOyatCDrjbDsnbTthLAg7JqU7LKtXHJcbiAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxlZCcpO1xyXG4gICAgICAgICAgIC8qXHJcbiAgICAgICAqIHdpbmRvdy5zY3JvbGxZLCAvLyDsiqTtgazroaTrkJwg7JaRXHJcbiAgICAgICAqIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIC8vIOycoOyggOqwgCDrs7TripQg66y47ISc7J2YIOuGkuydtFxyXG4gICAgICAgKiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC8vIOyghOyytCDrrLjshJwg64aS7J20XHJcbiAgICAgICAqL1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgICBpZiAoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHsvL+u2iOufrOyYpOuKlCDspJHsnbTqsbDrgpgg64ukIOu2iOufrOyZlOuLpOuptFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgIGRhdGE6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD4gXHJcbiAgICAgICAgICAgIHttZSAmJiA8UG9zdEZvcm0vPn1cclxuICAgICAgICAgICAgey8qIHttYWluUG9zdHMubWFwKChwb3N0KT0+PFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9ICovfVxyXG4gICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17Yy5pZH0gcG9zdD17Y30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=