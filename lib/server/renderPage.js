"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _react = _interopRequireDefault(require("react"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _handlebars = _interopRequireDefault(require("handlebars"));

var _reactRedux = require("react-redux");

var _server = require("react-dom/server");

var _initStore = _interopRequireDefault(require("../shared/init-store"));

var _handlerbars = require("./lib/handlerbars");

var _config = require("../shared/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderPage = (id, state, meta_data, App) => {
  // Load the store with initial and preloaded values values
  const store = (0, _initStore.default)(id, state || {}); // Wrap the app

  const app_html = (0, _server.renderToString)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: store,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(App, {})
  })); // Add custom helpers to Handlerbar for processing the meta_data

  (0, _handlerbars.attachCustomHelpers)(_handlebars.default); // add-ons

  const link = [...meta_data.link, {
    rel: 'stylesheet',
    href: `${_config.ASSET_PUBLIC_PATH}/css/${id}.css`
  }];
  const pre_script = [...meta_data.pre_script];
  const post_script = [...meta_data.post_script, {
    src: `${_config.ASSET_PUBLIC_PATH}/js/vendor.bundle.js`
  }, {
    src: `${_config.ASSET_PUBLIC_PATH}/js/${id}.bundle.js`
  }];
  const script_with_content = [...meta_data.script_with_content, {
    attr: [],
    content: `window.__SETUP__ = { preloaded_state: ${JSON.stringify(store.getState())}, index: '${id}' };`
  }]; // Build template with meta data

  const source = _fs.default.readFileSync(_path.default.resolve('public/index.html'), 'utf-8');

  const template = _handlebars.default.compile(source); // console.log(meta_data)


  return template({
    title: meta_data.title,
    meta: meta_data.meta,
    link,
    pre_script,
    post_script,
    script_with_content,
    app_html
  });
};

var _default = renderPage;
exports.default = _default;