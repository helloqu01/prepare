webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\ohhj\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\components\\PostForm.js",
  _this = undefined,
  _s = $RefreshSig$();





var PostForm = function PostForm() {
  _s();
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.post;
    }),
    imagePaths = _useSelector.imagePaths,
    addPostLoading = _useSelector.addPostLoading,
    addPostDone = _useSelector.addPostDone;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    text = _useState[0],
    setText = _useState[1];
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text
    });
  }, [text]);
  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea, {
      value: text,
      onChange: onChangeText,
      maxLength: 140,
      placeholder: "\uBB34\uC2A8\uC77C \uC788\uC5C8\uB0D0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
        type: "file",
        multiple: true,
        hidden: true,
        innerRef: imageInput,
        style: {
          display: 'none'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "primary",
        style: {
          "float": 'right'
        },
        htmlType: "submit",
        children: "\uC9F9\uC9F9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: imagePaths.map(function (v) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          style: {
            display: 'inline-bolck'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: v,
            style: {
              width: '200px'
            },
            alt: v
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};
_s(PostForm, "zGx+H/I0KMx5rB0OPG8KalPn3j0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});
_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);
var _c;
$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uQ2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm1hcmdpbiIsImRpc3BsYXkiLCJtYXAiLCJ2Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN1QjtBQUNUO0FBQ1o7QUFBQTtBQUUzQyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFPO0VBQUE7RUFDakIsbUJBQW9EQywrREFBVyxDQUFDLFVBQUNDLEtBQUs7TUFBQSxPQUFLQSxLQUFLLENBQUNDLElBQUk7SUFBQSxFQUFDO0lBQTlFQyxVQUFVLGdCQUFWQSxVQUFVO0lBQUVDLGNBQWMsZ0JBQWRBLGNBQWM7SUFBRUMsV0FBVyxnQkFBWEEsV0FBVztFQUMvQyxnQkFBd0JDLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQTdCQyxJQUFJO0lBQUVDLE9BQU87RUFDcEIsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBQzlCLElBQU1DLFVBQVUsR0FBR0Msb0RBQU0sRUFBRTtFQUUzQkMsdURBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSVIsV0FBVyxFQUFFO01BQ2ZHLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDYjtFQUNGLENBQUMsRUFBRSxDQUFDSCxXQUFXLENBQUMsQ0FBQztFQUduQixJQUFNUyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUNuQ04sUUFBUSxDQUFDO01BQ1BPLElBQUksRUFBRUMsZ0JBQWdCO01BQ3RCQyxJQUFJLEVBQUVYO0lBQ1IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUFFLENBQUNBLElBQUksQ0FBQyxDQUFDO0VBQ1osSUFBTVksWUFBWSxHQUFHSix5REFBVyxDQUFDLFVBQUNLLENBQUMsRUFBRztJQUNsQ1osT0FBTyxDQUFDWSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBRTNCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxrQkFBa0IsR0FBR1IseURBQVcsQ0FBQyxZQUFNO0lBQ3pDSixVQUFVLENBQUNhLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO0VBQzlCLENBQUMsRUFBRSxDQUFDZCxVQUFVLENBQUNhLE9BQU8sQ0FBQyxDQUFDO0VBRXhCLG9CQUNJLHFFQUFDLHlDQUFJO0lBQUMsS0FBSyxFQUFFO01BQUNFLE1BQU0sRUFBQztJQUFhLENBQUU7SUFBQyxPQUFPLEVBQUMscUJBQXFCO0lBQUMsUUFBUSxFQUFFWixZQUFhO0lBQUEsd0JBQ3RGLHFFQUFDLDBDQUFLLENBQUMsUUFBUTtNQUFDLEtBQUssRUFBRVAsSUFBSztNQUFDLFFBQVEsRUFBRVksWUFBYTtNQUFDLFNBQVMsRUFBRSxHQUFJO01BQUMsV0FBVyxFQUFDO0lBQVM7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFFLGVBQzVGO01BQUEsd0JBQ0k7UUFBTyxJQUFJLEVBQUMsTUFBTTtRQUFDLFFBQVE7UUFBQyxNQUFNO1FBQUMsUUFBUSxFQUFFUixVQUFXO1FBQUUsS0FBSyxFQUFFO1VBQUNnQixPQUFPLEVBQUM7UUFBTTtNQUFFO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBRSxlQUNwRixxRUFBQywyQ0FBTTtRQUFDLE9BQU8sRUFBRUosa0JBQW1CO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQWlCLGVBQ3JELHFFQUFDLDJDQUFNO1FBQUMsSUFBSSxFQUFDLFNBQVM7UUFBQyxLQUFLLEVBQUU7VUFBQyxTQUFNO1FBQU8sQ0FBRTtRQUFDLFFBQVEsRUFBQyxRQUFRO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQVk7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQzFFLGVBQ047TUFBQSxVQUNLcEIsVUFBVSxDQUFDeUIsR0FBRyxDQUFDLFVBQUNDLENBQUM7UUFBQSxvQkFDZDtVQUFhLEtBQUssRUFBRTtZQUFDRixPQUFPLEVBQUM7VUFBYyxDQUFFO1VBQUEsd0JBQ3pDO1lBQUssR0FBRyxFQUFFRSxDQUFFO1lBQUMsS0FBSyxFQUFFO2NBQUNDLEtBQUssRUFBQztZQUFPLENBQUU7WUFBQyxHQUFHLEVBQUVEO1VBQUU7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUFHLGVBQy9DO1lBQUEsdUJBQ0kscUVBQUMsMkNBQU07Y0FBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFBWTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBQ2pCO1FBQUEsR0FKQUEsQ0FBQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBS0w7TUFBQSxDQUNUO0lBQUM7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUNBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUNIO0FBRWYsQ0FBQztBQUFDLEdBaERJOUIsUUFBUTtFQUFBLFFBQzBDQyx1REFBVyxFQUU5Q1UsdURBQVc7QUFBQTtBQUFBLEtBSDFCWCxRQUFRO0FBaURDQSx1RUFBUSxFQUFDO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NjZlN2ZhZDc0NjM5YmRkNWViNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdXR0b24sIEZvcm0sIElucHV0fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCk9PntcclxuICAgIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdExvYWRpbmcsIGFkZFBvc3REb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFthZGRQb3N0RG9uZV0pO1xyXG5cclxuICAgICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgIGRhdGE6IHRleHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIFt0ZXh0XSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZVRleHQgPSB1c2VDYWxsYmFjaygoZSk9PntcclxuICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuIFxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZvcm0gc3R5bGU9e3ttYXJnaW46JzEwcHggMCAyMHB4J319IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYSB2YWx1ZT17dGV4dH0gb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH0gbWF4TGVuZ3RoPXsxNDB9IHBsYWNlaG9sZGVyPVwi66y07Iqo7J28IOyeiOyXiOuDkFwiLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGhpZGRlbiBpbm5lclJlZj17aW1hZ2VJbnB1dH0gIHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5JyBzdHlsZT17e2Zsb2F0OidyaWdodCd9fSBodG1sVHlwZT1cInN1Ym1pdFwiPuynueynuTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodik9PihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dn0gc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUtYm9sY2snfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2fSBzdHlsZT17e3dpZHRoOicyMDBweCd9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuygnOqxsDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=