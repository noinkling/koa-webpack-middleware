# koa-webpack-middleware

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) for [Koa 2](https://github.com/koajs/koa)

Please note: this is an unsupported fork intended mainly for my personal use, and as such is not published on NPM. Contributions and suggestions for improvement are always welcome however!

## Usage

```js
import webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import devConfig from './webpack.config.dev'

const compiler = webpack(devConfig)

app.use(devMiddleware(compiler, {
    // display no info to console (only warnings and errors)
    noInfo: false,

    // display nothing to the console
    quiet: false,

    // switch into lazy mode
    // that means no watching, but recompilation on every request
    lazy: true,

    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },

    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: "/assets/",

    // custom headers
    headers: { "X-Custom-Header": "yes" },

    // options for formating the statistics
    stats: {
        colors: true
    }
}))

app.use(hotMiddleware(compiler, {
  // log: console.log,
  // path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
}))
```

For Webpack configuration instructions, additional information on options, and instructions on how to enable HMR on the frontend, please refer to the following links:

- [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
- [Webpack documentation](https://webpack.js.org/api/hot-module-replacement)
