"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express')
// const fs = require('fs')
var app = (0, _express.default)();
var ASSET_PATH = '/assets';
var TEMPLATE_PATH = 'build/assets';
app.use(ASSET_PATH, _express.default.static(TEMPLATE_PATH));
app.get('*', function (req, res, next) {
  console.log(req.url);
  next();
});
app.get('/', function (req, res) {
  return res.end(_fs.default.readFileSync(`${TEMPLATE_PATH}/home.html`, 'utf-8'));
});
var _default = app;
exports.default = _default;