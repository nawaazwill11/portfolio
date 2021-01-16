"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _reactRedux = require("react-redux");

const App = ({
  a
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
    children: ["Hello, ", a, "!"]
  });
};

const mapStateToProps = store => {
  return {
    a: store.a
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(App);

exports.default = _default;