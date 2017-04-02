'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (compiler, opts) => {
  const expressMiddleware = (0, _webpackDevMiddleware2.default)(compiler, opts);
  return async (ctx, next) => {
    await expressMiddleware(ctx.req, {
      end: content => {
        ctx.body = content;
      },
      setHeader: (name, value) => {
        ctx.headers[name] = value;
      }
    }, next);
  };
};