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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"],
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
      lineNumber: 37,
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
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        onClick: onClickImageUpload,
        children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
        lineNumber: 41,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              children: "\uC81C\uAC70"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this)]
        }, v, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJ1c2VTdGF0ZSIsInRleHQiLCJzZXRUZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJBRERfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uQ2hhbmdlVGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm1hcmdpbiIsImRpc3BsYXkiLCJtYXAiLCJ2Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN1QjtBQUNUO0FBQ1o7QUFDUztBQUFBO0FBRXBELElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRLEdBQU87RUFBQTtFQUNqQixtQkFBb0RDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztNQUFBLE9BQUtBLEtBQUssQ0FBQ0MsSUFBSTtJQUFBLEVBQUM7SUFBOUVDLFVBQVUsZ0JBQVZBLFVBQVU7SUFBRUMsY0FBYyxnQkFBZEEsY0FBYztJQUFFQyxXQUFXLGdCQUFYQSxXQUFXO0VBQy9DLGdCQUF3QkMsc0RBQVEsQ0FBQyxFQUFFLENBQUM7SUFBN0JDLElBQUk7SUFBRUMsT0FBTztFQUNwQixJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQUU7RUFDOUIsSUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUFFO0VBRTNCQyx1REFBUyxDQUFDLFlBQU07SUFDWixJQUFJUixXQUFXLEVBQUU7TUFDZkcsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUNiO0VBQ0YsQ0FBQyxFQUFFLENBQUNILFdBQVcsQ0FBQyxDQUFDO0VBR25CLElBQU1TLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFNO0lBQ25DTixRQUFRLENBQUM7TUFDUE8sSUFBSSxFQUFFQywrREFBZ0I7TUFDdEJDLElBQUksRUFBRVg7SUFDUixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsQ0FBQ0EsSUFBSSxDQUFDLENBQUM7RUFDWixJQUFNWSxZQUFZLEdBQUdKLHlEQUFXLENBQUMsVUFBQ0ssQ0FBQyxFQUFHO0lBQ2xDWixPQUFPLENBQUNZLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFFM0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1DLGtCQUFrQixHQUFHUix5REFBVyxDQUFDLFlBQU07SUFDekNKLFVBQVUsQ0FBQ2EsT0FBTyxDQUFDQyxLQUFLLEVBQUU7RUFDOUIsQ0FBQyxFQUFFLENBQUNkLFVBQVUsQ0FBQ2EsT0FBTyxDQUFDLENBQUM7RUFFeEIsb0JBQ0kscUVBQUMseUNBQUk7SUFBQyxLQUFLLEVBQUU7TUFBQ0UsTUFBTSxFQUFDO0lBQWEsQ0FBRTtJQUFDLE9BQU8sRUFBQyxxQkFBcUI7SUFBQyxRQUFRLEVBQUVaLFlBQWE7SUFBQSx3QkFDdEYscUVBQUMsMENBQUssQ0FBQyxRQUFRO01BQUMsS0FBSyxFQUFFUCxJQUFLO01BQUMsUUFBUSxFQUFFWSxZQUFhO01BQUMsU0FBUyxFQUFFLEdBQUk7TUFBQyxXQUFXLEVBQUM7SUFBUztNQUFBO01BQUE7TUFBQTtJQUFBLFNBQUUsZUFDNUY7TUFBQSx3QkFDSTtRQUFPLElBQUksRUFBQyxNQUFNO1FBQUMsUUFBUTtRQUFDLE1BQU07UUFBQyxRQUFRLEVBQUVSLFVBQVc7UUFBRSxLQUFLLEVBQUU7VUFBQ2dCLE9BQU8sRUFBQztRQUFNO01BQUU7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUFFLGVBQ3BGLHFFQUFDLDJDQUFNO1FBQUMsT0FBTyxFQUFFSixrQkFBbUI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBaUIsZUFDckQscUVBQUMsMkNBQU07UUFBQyxJQUFJLEVBQUMsU0FBUztRQUFDLEtBQUssRUFBRTtVQUFDLFNBQU07UUFBTyxDQUFFO1FBQUMsUUFBUSxFQUFDLFFBQVE7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBWTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FDMUUsZUFDTjtNQUFBLFVBQ0twQixVQUFVLENBQUN5QixHQUFHLENBQUMsVUFBQ0MsQ0FBQztRQUFBLG9CQUNkO1VBQWEsS0FBSyxFQUFFO1lBQUNGLE9BQU8sRUFBQztVQUFjLENBQUU7VUFBQSx3QkFDekM7WUFBSyxHQUFHLEVBQUVFLENBQUU7WUFBQyxLQUFLLEVBQUU7Y0FBQ0MsS0FBSyxFQUFDO1lBQU8sQ0FBRTtZQUFDLEdBQUcsRUFBRUQ7VUFBRTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBQUcsZUFDL0M7WUFBQSx1QkFDSSxxRUFBQywyQ0FBTTtjQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQUFZO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FDakI7UUFBQSxHQUpBQSxDQUFDO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FLTDtNQUFBLENBQ1Q7SUFBQztNQUFBO01BQUE7TUFBQTtJQUFBLFNBQ0E7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQ0g7QUFFZixDQUFDO0FBQUMsR0FoREk5QixRQUFRO0VBQUEsUUFDMENDLHVEQUFXLEVBRTlDVSx1REFBVztBQUFBO0FBQUEsS0FIMUJYLFFBQVE7QUFpRENBLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhhMTFjOWVhZWIzMzM0YTdlNjg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1dHRvbiwgRm9ybSwgSW5wdXR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSAsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpPT57XHJcbiAgICBjb25zdCB7IGltYWdlUGF0aHMsIGFkZFBvc3RMb2FkaW5nLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhZGRQb3N0RG9uZSkge1xyXG4gICAgICAgICAgc2V0VGV4dCgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICBkYXRhOiB0ZXh0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBbdGV4dF0pO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gdXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgc2V0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiBcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7bWFyZ2luOicxMHB4IDAgMjBweCd9fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWEgdmFsdWU9e3RleHR9IG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9IG1heExlbmd0aD17MTQwfSBwbGFjZWhvbGRlcj1cIuustOyKqOydvCDsnojsl4jrg5BcIi8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBoaWRkZW4gaW5uZXJSZWY9e2ltYWdlSW5wdXR9ICBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PuydtOuvuOyngCDsl4XroZzrk5w8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgc3R5bGU9e3tmbG9hdDoncmlnaHQnfX0gaHRtbFR5cGU9XCJzdWJtaXRcIj7sp7nsp7k8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7ZGlzcGxheTonaW5saW5lLWJvbGNrJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dn0gc3R5bGU9e3t3aWR0aDonMjAwcHgnfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7soJzqsbA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9