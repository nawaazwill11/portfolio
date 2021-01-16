"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _router = _interopRequireDefault(require("./router"));

var _config = require("../shared/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const log_file = (() => {
  const date = new Date();
  const filename = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}--${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.log`;

  const filepath = _path.default.resolve('./logs');

  console.log(filepath);

  if (!_fs.default.readdirSync('.', 'utf-8').includes('logs')) {
    console.log('creating logs dir');

    _fs.default.mkdirSync(filepath);
  }

  return _fs.default.createWriteStream(_path.default.join(filepath, filename));
})();

const log_to_console = (0, _morgan.default)('dev');
const log_to_file = (0, _morgan.default)('combined', {
  stream: log_file
});
app.use(log_to_console);
app.use(log_to_file);
app.use(_config.ASSET_PATH, _express.default.static('build/assets')); // for /assets path

app.use(_config.STATIC_PATH, _express.default.static('public')); // app.use(express.static('public')) // default

app.get('*', (req, res, next) => {
  // do something on every request
  next();
});
(0, _router.default)(app);
var _default = app;
exports.default = _default;