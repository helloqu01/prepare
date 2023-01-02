webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\ohhj\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\prepare\\front\\components\\PostCard.js",
  _this = undefined,
  _s = $RefreshSig$();










var PostCard = function PostCard(_ref) {
  _s();
  var post = _ref.post;
  // const {me} = useSelector((state)=>state.user);
  // const id = me?.id; //옵셔널 체이닝 연산자
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
    linked = _useState[0],
    setLinked = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
    commentFormOpened = _useState2[0],
    setCommentFormOpened = _useState2[1];
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
      return state.post;
    }),
    removePostLoading = _useSelector.removePostLoading; //로딩창이 돌아가게 하는 것 

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;
    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  }); //있나 없나
  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    setLinked(function (prev) {
      return !prev;
    }); //토글 부분 
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    }); //토글 부분 
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 44
      }, _this) //이미지가 1개 이상 있을 때 PostImages 를 보여준다.
      ,
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this), linked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 24
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 25
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this),
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 32
        }, _this), " "]
      }, "more", true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 72
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};
_s(PostCard, "zbHlP0cbwyXmhDkunxzTsTxj9ew=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});
_c = PostCard;
PostCard.PropTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    Conmments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);
var _c;
$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJsaW5rZWQiLCJzZXRMaW5rZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwiaWQiLCJ1c2VyIiwibWUiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1lbnQiLCJvblJlbW92ZVBvc3QiLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVBdCIsIkNvbm1tZW50cyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvSDtBQUNoRDtBQUViO0FBQ3BCO0FBQ0c7QUFDUTtBQUVOO0FBQ1E7QUFBQTtBQUFBO0FBR2hELElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRLE9BQWU7RUFBQTtFQUFBLElBQVZDLElBQUksUUFBSkEsSUFBSTtFQUNuQjtFQUNBO0VBQ0EsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBQzlCLGdCQUE0QkMsc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBcENDLE1BQU07SUFBRUMsU0FBUztFQUN4QixpQkFBZ0RGLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQXhERyxpQkFBaUI7SUFBQ0Msb0JBQW9CO0VBRTdDLG1CQUE4QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxDQUFDVCxJ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SUFDbkJSLElBQUksRUFBQ00saURBQVMsQ0FBQ0csTUFBTTtJQUNyQlAsT0FBTyxFQUFFSSxpREFBUyxDQUFDSSxNQUFNO0lBQ3pCQyxRQUFRLEVBQUVMLGlEQUFTLENBQUNHLE1BQU07SUFDMUJHLFNBQVMsRUFBRU4saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNLENBQUM7SUFDOUNWLE1BQU0sRUFBRU8saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNO0VBQzlDLENBQUMsQ0FBQyxDQUFDSztBQUNQLENBQUM7QUFFY3RDLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2NTU4ZTdlNzU3NWM3NjEwNTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLENhcmQsIFBvcG92ZXIsICBMaXN0LCAgQ29tbWVudH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcblxyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoe3Bvc3R9KSA9PiB7XHJcbiAgICAvLyBjb25zdCB7bWV9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICAvLyBjb25zdCBpZCA9IG1lPy5pZDsgLy/smLXshZTrhJAg7LK07J2064udIOyXsOyCsOyekFxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2xpbmtlZCwgc2V0TGlua2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCxzZXRDb21tZW50Rm9ybU9wZW5lZF09IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpOyAvL+uhnOuUqeywveydtCDrj4zslYTqsIDqsowg7ZWY64qUIOqygyBcclxuXHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIubWU/LmlkKTsvL+yeiOuCmCDsl4brgphcclxuICAgIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0TGlua2VkKChwcmV2KT0+IXByZXYpOy8v7Yag6riAIOu2gOu2hCBcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpPT57XHJcbiAgICAgICAgc2V0Q29tbWVudEZvcm1PcGVuZWQoKHByZXYpPT4hcHJldik7Ly/thqDquIAg67aA67aEIFxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmQgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9Lz59ICAvL+ydtOuvuOyngOqwgCAx6rCcIOydtOyDgSDsnojsnYQg65WMIFBvc3RJbWFnZXMg66W8IOuztOyXrOykgOuLpC5cclxuICAgICAgICAgICAgYWN0aW9ucz17WyBcclxuICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIvPixcclxuICAgICAgICAgICAgbGlua2VkIFxyXG4gICAgICAgICAgICAgICAgPyAgIDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfS8+XHJcbiAgICAgICAgICAgICAgICA6ICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz4sXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fS8+LDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoIFxyXG4gICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIGxvYWRpbmc9e3JlbW92ZVBvc3RMb2FkaW5nfSBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PuyCreygnDwvQnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPiB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+KX0+IDxFbGxpcHNpc091dGxpbmVkLz4gPC9Qb3BvdmVyPixdfT5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17PFBvc3RDYXJkQ29udGVudCBwb3N0RGF0YT17cG9zdC5jb250ZW50fSAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPiBcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAvPiAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICA8Q29tbWVudHMvPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5Qcm9wVHlwZXM9e1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDpQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIFVzZXI6UHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0ZUF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIENvbm1tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9