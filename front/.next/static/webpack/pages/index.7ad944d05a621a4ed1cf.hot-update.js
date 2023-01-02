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
    console.log('scrolled');
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
      lineNumber: 46,
      columnNumber: 20
    }, _this), mainPosts.map(function (c) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: c
      }, c.id, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJjb25zb2xlIiwibG9nIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJkYXRhIiwibGVuZ3RoIiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ1A7QUFDRjtBQUNBO0FBQ0w7QUFDYTtBQUFBO0FBQ3RELElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFJLEdBQVM7RUFBQTtFQUNmLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixtQkFBYUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBR0EsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUF0Q0MsRUFBRSxnQkFBRkEsRUFBRSxDQUFxQyxDQUFDO0VBQy9DLG9CQUFxREgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDRyxJQUFJO0lBQUEsRUFBQztJQUEvRUMsU0FBUyxpQkFBVEEsU0FBUztJQUFFQyxXQUFXLGlCQUFYQSxXQUFXO0lBQUVDLGdCQUFnQixpQkFBaEJBLGdCQUFnQjtFQUdoREMsdURBQVMsQ0FBQyxZQUFNO0lBQUU7SUFDaEJWLFFBQVEsQ0FBQztNQUNQVyxJQUFJLEVBQUVDLGlFQUFrQkE7SUFDMUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVORix1REFBUyxDQUFDLFlBQU07SUFBRTtJQUNkRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDekIsU0FBU0MsUUFBUSxHQUFHO01BQ2xCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7TUFDcEI7QUFDWDtBQUNBO0FBQ0E7QUFDQTtNQUNRLElBQUlFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsWUFBWSxHQUFHRixRQUFRLENBQUNDLGVBQWUsQ0FBQ0UsWUFBWSxHQUFHLEdBQUcsRUFBRTtRQUN4RyxJQUFJYixXQUFXLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUU7VUFBQztVQUNyQ1QsUUFBUSxDQUFDO1lBQ1BXLElBQUksRUFBRUMsaUVBQWtCO1lBQ3hCVSxJQUFJLEVBQUVmLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDZ0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDQztVQUN4QyxDQUFDLENBQUM7UUFDSjtNQUNGO0lBQ0Y7SUFDQVIsTUFBTSxDQUFDUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVWLFFBQVEsQ0FBQztJQUMzQyxPQUFPLFlBQU07TUFDWEMsTUFBTSxDQUFDVSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVYLFFBQVEsQ0FBQztJQUNoRCxDQUFDO0VBQ0gsQ0FBQyxFQUFFLENBQUNSLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBRzlDLG9CQUNJLHFFQUFDLDZEQUFTO0lBQUEsV0FDTEosRUFBRSxpQkFBSSxxRUFBQyw0REFBUTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQUUsRUFFakJFLFNBQVMsQ0FBQ29CLEdBQUcsQ0FBQyxVQUFDQyxDQUFDO01BQUEsb0JBQ2IscUVBQUMsNERBQVE7UUFBWSxJQUFJLEVBQUVBO01BQUUsR0FBZEEsQ0FBQyxDQUFDSixFQUFFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBYTtJQUFBLENBQ25DLENBQUM7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQ007QUFFcEIsQ0FBQztBQUFBLEdBOUNLekIsSUFBSTtFQUFBLFFBQ1dFLHVEQUFXLEVBQ2ZDLHVEQUFXLEVBQzZCQSx1REFBVztBQUFBO0FBQUEsS0FIOURILElBQUk7QUFnREtBLG1FQUFJLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdhZDk0NGQwNWE2MjFhNGVkMWNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7IC8v7IKs7Jqp7J6Q6rCAIOuhnOq3uOyduCDtl4DripTsp4Ag7JWI7ZaI64qU7KeAIOyXrOu2gOulvCDslYzroKTspIxcclxuICAgIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyAvL+uplOyduO2OmOydtOyngOulvCDtmLjstpztlaAg65WMIOustO2VnCDsiqTtgazroaQg67aA67aEXHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy/slrTripDsoJXrj4Qg7Iqk7YGs66Gk7J20IOuCtOugpOyYpOuptCDsg4jroZzsmrQg642w7J207YSwIOyalOyyrVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxlZCcpO1xyXG4gICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2Nyb2xsZWQnKTtcclxuICAgICAgICAgICAvKlxyXG4gICAgICAgKiB3aW5kb3cuc2Nyb2xsWSwgLy8g7Iqk7YGs66Gk65CcIOyWkVxyXG4gICAgICAgKiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCAvLyDsnKDsoIDqsIAg67O064qUIOusuOyEnOydmCDrhpLsnbRcclxuICAgICAgICogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAvLyDsoITssrQg66y47IScIOuGkuydtFxyXG4gICAgICAgKi9cclxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgICAgaWYgKGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7Ly/rtojrn6zsmKTripQg7KSR7J206rGw64KYIOuLpCDrtojrn6zsmZTri6TrqbRcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICBkYXRhOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW21haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+IFxyXG4gICAgICAgICAgICB7bWUgJiYgPFBvc3RGb3JtLz59XHJcbiAgICAgICAgICAgIHsvKiB7bWFpblBvc3RzLm1hcCgocG9zdCk9PjxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfSAqL31cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e2MuaWR9IHBvc3Q9e2N9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9