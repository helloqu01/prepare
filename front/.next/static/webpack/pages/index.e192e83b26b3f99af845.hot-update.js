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
      extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(FollowButton, {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 20
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 30
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 66,
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
                lineNumber: 75,
                columnNumber: 45
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    UserId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJsaW5rZWQiLCJzZXRMaW5rZWQiLCJjb21tZW50Rm9ybU9wZW5lZCIsInNldENvbW1lbnRGb3JtT3BlbmVkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwiaWQiLCJ1c2VyIiwibWUiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1lbnQiLCJvblJlbW92ZVBvc3QiLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJJbWFnZXMiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsZW5ndGgiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJVc2VySWQiLCJzdHJpbmciLCJjcmVhdGVkQXQiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9IO0FBQ2hEO0FBRWI7QUFDcEI7QUFDRztBQUNRO0FBRU47QUFDUTtBQUNPO0FBQUE7QUFBQTtBQUd2RCxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxPQUFlO0VBQUE7RUFBQSxJQUFWQyxJQUFJLFFBQUpBLElBQUk7RUFDbkI7RUFDQTtFQUNBLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBRTtFQUM5QixnQkFBNEJDLHNEQUFRLENBQUMsS0FBSyxDQUFDO0lBQXBDQyxNQUFNO0lBQUVDLFNBQVM7RUFDeEIsaUJBQWdERixzREFBUSxDQUFDLEtBQUssQ0FBQztJQUF4REcsaUJBQWlCO0lBQUNDLG9CQUFvQjtFQUU3QyxtQkFBOEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBSztN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Q0FBQzhCLFNBQVMsR0FBRztFQUNqQjdCLElBQUksRUFBRThCLGlEQUFTLENBQUNDLEtBQUssQ0FBQztJQUNwQnBCLEVBQUUsRUFBRW1CLGlEQUFTLENBQUNFLE1BQU07SUFDcEJULElBQUksRUFBRU8saURBQVMsQ0FBQ0csTUFBTTtJQUN0QkMsTUFBTSxFQUFFSixpREFBUyxDQUFDRSxNQUFNO0lBQ3hCUCxPQUFPLEVBQUVLLGlEQUFTLENBQUNLLE1BQU07SUFDekJDLFNBQVMsRUFBRU4saURBQVMsQ0FBQ0csTUFBTTtJQUMzQlAsUUFBUSxFQUFFSSxpREFBUyxDQUFDTyxPQUFPLENBQUNQLGlEQUFTLENBQUNRLEdBQUcsQ0FBQztJQUMxQ2hCLE1BQU0sRUFBRVEsaURBQVMsQ0FBQ08sT0FBTyxDQUFDUCxpREFBUyxDQUFDUSxHQUFHO0VBQ3pDLENBQUMsQ0FBQyxDQUFDQztBQUNMLENBQUM7QUFFWXhDLHVFQUFRLEVBQUM7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxOTJlODNiMjZiM2Y5OWFmODQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLENhcmQsIFBvcG92ZXIsICBMaXN0LCAgQ29tbWVudH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL1Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuICAgIC8vIGNvbnN0IHttZX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIC8vIGNvbnN0IGlkID0gbWU/LmlkOyAvL+yYteyFlOuEkCDssrTsnbTri50g7Jew7IKw7J6QXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbbGlua2VkLCBzZXRMaW5rZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLHNldENvbW1lbnRGb3JtT3BlbmVkXT0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgcmVtb3ZlUG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7IC8v66Gc65Sp7LC97J20IOuPjOyVhOqwgOqyjCDtlZjripQg6rKDIFxyXG5cclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlci5tZT8uaWQpOy8v7J6I64KYIOyXhuuCmFxyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRMaW5rZWQoKHByZXYpPT4hcHJldik7Ly/thqDquIAg67aA67aEIFxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZCgocHJldik9PiFwcmV2KTsvL+2GoOq4gCDrtoDrtoQgXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30vPn0gIC8v7J2066+47KeA6rCAIDHqsJwg7J207IOBIOyeiOydhCDrlYwgUG9zdEltYWdlcyDrpbwg67O07Jes7KSA64ukLlxyXG4gICAgICAgICAgICBhY3Rpb25zPXtbIFxyXG4gICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIi8+LFxyXG4gICAgICAgICAgICBsaW5rZWQgXHJcbiAgICAgICAgICAgICAgICA/ICAgPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9Lz5cclxuICAgICAgICAgICAgICAgIDogICA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0vPixcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIGtleT1cImNvbW1lbnRcIiBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9Lz4sPFBvcG92ZXIga2V5PVwibW9yZVwiIGNvbnRlbnQ9eyggXHJcbiAgICAgICAgICAgIDxCdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9IG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+7IKt7KCcPC9CdXR0b24+ICBcclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICk6IDxCdXR0b24+7Iug6rOgPC9CdXR0b24+IH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD4pfT4gPEVsbGlwc2lzT3V0bGluZWQvPiA8L1BvcG92ZXI+LF19XHJcbiAgICAgICAgICAgIGV4dHJhPXs8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgPENvbW1lbnRzLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIFVzZXJJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICB9KS5pc1JlcXVpcmVkLFxyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9