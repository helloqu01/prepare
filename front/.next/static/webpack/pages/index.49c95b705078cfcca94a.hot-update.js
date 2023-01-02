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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 44
      }, _this) //이미지가 1개 이상 있을 때 PostImages 를 보여준다.
      ,
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this), linked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartTwoTone"], {
        twoToneColor: "#eb2f96",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 24
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              type: "danger",
              loading: removePostLoading,
              onClick: onRemovePost,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 25
            }, _this)]
          }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this),
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 32
        }, _this), " "]
      }, "more", true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 72
      }, _this)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJsaW5rZWQiLCJzZXRMaW5rZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwiaWQiLCJ1c2VyIiwibWUiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1lbnQiLCJvblJlbW92ZVBvc3QiLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJzdHJpbmciLCJjcmVhdGVBdCIsIkNvbm1tZW50cyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0g7QUFDaEQ7QUFFYjtBQUNwQjtBQUNHO0FBQ1E7QUFFTjtBQUNRO0FBQ087QUFBQTtBQUFBO0FBR3ZELElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFRLE9BQWU7RUFBQTtFQUFBLElBQVZDLElBQUksUUFBSkEsSUFBSTtFQUNuQjtFQUNBO0VBQ0EsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUFFO0VBQzlCLGdCQUE0QkMsc0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBcENDLE1BQU07SUFBRUMsU0FBUztFQUN4QixpQkFBZ0RGLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQXhERyxpQkFBaUI7SUFBQ0Msb0JBQW9CO0VBRTdDLG1CQUE4QkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFLO01BQUEsT0FBS0EsS0FBSyxD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LE1BQU07SUFDbkJSLElBQUksRUFBQ00saURBQVMsQ0FBQ0csTUFBTTtJQUNyQlAsT0FBTyxFQUFFSSxpREFBUyxDQUFDSSxNQUFNO0lBQ3pCQyxRQUFRLEVBQUVMLGlEQUFTLENBQUNHLE1BQU07SUFDMUJHLFNBQVMsRUFBRU4saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNLENBQUM7SUFDOUNWLE1BQU0sRUFBRU8saURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDRyxNQUFNO0VBQzlDLENBQUMsQ0FBQyxDQUFDSztBQUNQLENBQUM7QUFFY3RDLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ5Yzk1YjcwNTA3OGNmY2NhOTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLENhcmQsIFBvcG92ZXIsICBMaXN0LCAgQ29tbWVudH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuICAgIC8vIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIC8vIGNvbnN0IGlkID0gbWU/LmlkOyAvL+yYteyFlOuEkCDssrTsnbTri50g7Jew7IKw7J6QXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbbGlua2VkLCBzZXRMaW5rZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLHNldENvbW1lbnRGb3JtT3BlbmVkXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7IC8v66Gc65Sp7LC97J20IOuPjOyVhOqwgOqyjCDtlZjripQg6rKDIFxyXG5cclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlci5tZT8uaWQpOy8v7J6I64KYIOyXhuuCmFxyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRMaW5rZWQoKHByZXYpPT4hcHJldik7Ly/thqDquIAg67aA67aEIFxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldik9PiFwcmV2KTsvL+2GoOq4gCDrtoDrtoQgXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30vPn0gIC8v7J2066+47KeA6rCAIDHqsJwg7J207IOBIOyeiOydhCDrlYwgUG9zdEltYWdlcyDrpbwg67O07Jes7KSA64ukLlxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbIFxyXG4gICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LFxyXG4gICAgICAgICAgICBsaW5rZWQgXHJcbiAgICAgICAgICAgICAgICA/ICAgPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz5cclxuICAgICAgICAgICAgICAgIDogICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPixcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyggXHJcbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICk6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+IH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD4pfT4gPEVsbGlwc2lzT3V0bGluZWQvPiA8L1BvcG92ZXI+LF19PlxyXG5cclxuICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fS8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh96rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgIDxDb21tZW50cy8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcblBvc3RDYXJkLlByb3BUeXBlcz17XHJcbiAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGlkOlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgVXNlcjpQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRlQXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgQ29ubW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=