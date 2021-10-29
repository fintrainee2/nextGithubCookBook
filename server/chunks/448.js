"use strict";
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/nav.jsx


const Nav = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "list",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "nav",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: " Home "
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            className: "button",
                            href: "/contactUsPage",
                            children: " Contact Us "
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const nav = (Nav);

;// CONCATENATED MODULE: ./components/header.jsx


const Header = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "list",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "__head",
                    children: "CookBook"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(nav, {
                })
            })
        ]
    }));
};
/* harmony default export */ const header = (Header);


/***/ })

};
;