"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = router;

var _routes = require("../shared/routes");

var _web = require("./controllers/web");

function apiRouter(app) {}

function webRouter(app) {
  app.get(_routes.ROOT_ROUTE, _web.rootPage);
  app.get(_routes.PORTFOLOIO_ROUTE, _web.portfolioPage);
  app.get('*', (req, res) => res.redirect('/'));
}

function router(app) {
  apiRouter(app);
  webRouter(app);
}