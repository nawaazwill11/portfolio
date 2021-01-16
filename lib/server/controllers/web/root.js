"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _routes = require("../../../shared/routes");

function rootPage(req, res) {
  console.log('redirecting....');
  return res.redirect(_routes.PORTFOLOIO_ROUTE);
}

var _default = rootPage;
exports.default = _default;