"use strict";

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _initStore = _interopRequireDefault(require("../shared/init-store"));

var _Portfolio = _interopRequireDefault(require("../shared/pages/Portfolio"));

require("../shared/styles/portfolio.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Read the state sent with markup
const setup = window.__SETUP__; // delete the state from global window object

delete window.__SETUP__; // reproduce the store used to render the page on server

const {
  index,
  preloaded_state
} = setup;
const store = (0, _initStore.default)(index, preloaded_state);
/**
 * render the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */
// #e33939

(0, _reactDom.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.StrictMode, {
  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: store,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portfolio.default, {})
  })
}), document.querySelector('#root'));