"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _renderPage = _interopRequireDefault(require("../../renderPage"));

var _meta = _interopRequireDefault(require("../../meta"));

var _Portfolio = _interopRequireDefault(require("../../../shared/pages/Portfolio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function portfolioPage(req, res) {
  // console.log('portofoling...')
  const id = 'portfolio';

  const file_location = _path.default.resolve('src/server/static');

  const file_name = 'database.json';
  let data = {};

  try {
    if (_fs.default.readdirSync(file_location, 'utf-8').includes(file_name)) {
      data = JSON.parse(_fs.default.readFileSync(_path.default.join(file_location, file_name), 'utf-8')); // console.log(data)
    }
  } catch (error) {
    res.status(500);
    console.log(error);
    return res.end({
      error: "It's not you, it's us. Retry shortly."
    });
  } finally {
    return res.end((0, _renderPage.default)(id, {
      initialized: false,
      data
    }, _meta.default[id], _Portfolio.default));
  }
}

var _default = portfolioPage;
exports.default = _default;