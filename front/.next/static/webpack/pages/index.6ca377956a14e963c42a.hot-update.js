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
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
        if (hasMorePost && !loadPostsLoading) {
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
      lineNumber: 39,
      columnNumber: 20
    }, _this), mainPosts.map(function (c) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: c
      }, c.id, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImRhdGEiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDUDtBQUNGO0FBQ0E7QUFDTDtBQUNhO0FBQUE7QUFDdEQsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUksR0FBUztFQUFBO0VBQ2YsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBQzlCLG1CQUFhQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFHQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQXRDQyxFQUFFLGdCQUFGQSxFQUFFLENBQXFDLENBQUM7RUFDL0Msb0JBQXFESCwrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNHLElBQUk7SUFBQSxFQUFDO0lBQS9FQyxTQUFTLGlCQUFUQSxTQUFTO0lBQUVDLFdBQVcsaUJBQVhBLFdBQVc7SUFBRUMsZ0JBQWdCLGlCQUFoQkEsZ0JBQWdCO0VBR2hEQyx1REFBUyxDQUFDLFlBQU07SUFBRTtJQUNoQlYsUUFBUSxDQUFDO01BQ1BXLElBQUksRUFBRUMsaUVBQWtCQTtJQUMxQixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU5GLHVEQUFTLENBQUMsWUFBTTtJQUFFO0lBQ2hCLFNBQVNHLFFBQVEsR0FBRztNQUNsQixJQUFJQyxNQUFNLENBQUNDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxlQUFlLENBQUNFLFlBQVksR0FBRyxHQUFHLEVBQUU7UUFDeEcsSUFBSVgsV0FBVyxJQUFJLENBQUNDLGdCQUFnQixFQUFFO1VBQ3BDVCxRQUFRLENBQUM7WUFDUFcsSUFBSSxFQUFFQyxpRUFBa0I7WUFDeEJRLElBQUksRUFBRWIsU0FBUyxDQUFDQSxTQUFTLENBQUNjLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ0M7VUFDeEMsQ0FBQyxDQUFDO1FBQ0o7TUFDRjtJQUNGO0lBQ0FSLE1BQU0sQ0FBQ1MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFVixRQUFRLENBQUM7SUFDM0MsT0FBTyxZQUFNO01BQ1hDLE1BQU0sQ0FBQ1UsbUJBQW1CLENBQUMsUUFBUSxFQUFFWCxRQUFRLENBQUM7SUFDaEQsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDTixTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCLENBQUMsQ0FBQztFQUc5QyxvQkFDSSxxRUFBQyw2REFBUztJQUFBLFdBQ0xKLEVBQUUsaUJBQUkscUVBQUMsNERBQVE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFFLEVBRWpCRSxTQUFTLENBQUNrQixHQUFHLENBQUMsVUFBQ0MsQ0FBQztNQUFBLG9CQUNiLHFFQUFDLDREQUFRO1FBQVksSUFBSSxFQUFFQTtNQUFFLEdBQWRBLENBQUMsQ0FBQ0osRUFBRTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQWE7SUFBQSxDQUNuQyxDQUFDO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUNNO0FBRXBCLENBQUM7QUFBQSxHQXZDS3ZCLElBQUk7RUFBQSxRQUNXRSx1REFBVyxFQUNmQyx1REFBVyxFQUM2QkEsdURBQVc7QUFBQTtBQUFBLEtBSDlESCxJQUFJO0FBeUNLQSxtRUFBSSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Y2EzNzc5NTZhMTRlOTYzYzQyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpOyAvL+yCrOyaqeyekOqwgCDroZzqt7jsnbgg7ZeA64qU7KeAIOyViO2WiOuKlOyngCDsl6zrtoDrpbwg7JWM66Ck7KSMXHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgLy/rqZTsnbjtjpjsnbTsp4Drpbwg7Zi47Lac7ZWgIOuVjCDrrLTtlZwg7Iqk7YGs66GkIOu2gOu2hFxyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IC8v7Ja064qQ7KCV64+EIOyKpO2BrOuhpOydtCDrgrTroKTsmKTrqbQg7IOI66Gc7Jq0IOuNsOydtO2EsCDsmpTssq1cclxuICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSA1MDApIHtcclxuICAgICAgICAgIGlmIChoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICAgIGRhdGE6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD4gXHJcbiAgICAgICAgICAgIHttZSAmJiA8UG9zdEZvcm0vPn1cclxuICAgICAgICAgICAgey8qIHttYWluUG9zdHMubWFwKChwb3N0KT0+PFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9ICovfVxyXG4gICAgICAgICAgICB7bWFpblBvc3RzLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17Yy5pZH0gcG9zdD17Y30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=