"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reducers = require("./reducers");

const reducer_index = {
  portfolio: _reducers.portfolioSlice
};

const initStore = (reducer, preloadedState) => {
  // console.log('creating store', preloadedState)
  return (0, _toolkit.configureStore)({
    reducer: reducer_index[reducer].reducer,
    preloadedState
  });
};

var _default = initStore;
exports.default = _default;