'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _stream = require('stream');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (compiler, opts) => {
  const expressMiddleware = (0, _webpackHotMiddleware2.default)(compiler, opts);
  return async (ctx, next) => {
    let stream = new _stream.PassThrough();

    await expressMiddleware(ctx.req, {
      write: stream.write.bind(stream),
      writeHead: (status, headers) => {
        ctx.body = stream;
        ctx.status = status;
        ctx.set(headers);
      }
    }, next);
  };
};