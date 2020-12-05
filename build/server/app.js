"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _config = require("../shared/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_config.ASSET_PATH, _express.default.static(_config.PROD_STATIC_PATH));
app.get('*', function (req, res, next) {
  console.log(req.url);
  next();
});

var getFile = function getFile(filepath) {
  return new Promise(function (resolve, reject) {
    try {
      if (_config.IS_PROD) {
        return resolve(_fs.default.readFileSync(filepath, 'utf-8'));
      }

      (0, _nodeFetch.default)(filepath).then(function (response) {
        return response.text();
      }).then(function (html_string) {
        return resolve(html_string);
      });
    } catch (error) {
      reject(error);
    }
  });
};

app.get('/', function (req, res) {
  getFile(`${_config.TEMPLATE_PATH}/home.html`).then(function (html_string) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html_string);
  });
});
var _default = app;
exports.default = _default;