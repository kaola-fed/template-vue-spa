const Koa = require('koa');
const webpack = require('webpack');
const webpackConfig = require('../../build/webpack.config.dev');
const koaMiddleware = require('koa-webpack');
const pathTo = require('path');
const Oxz = require('oxz');
const oxzConfig = require('../oxz.config');
const _ = require('../../build/utils');
const buildConfig = require('../../build/build.config');

const compiler = webpack(webpackConfig);
const app = new Koa();

const devMiddleware = koaMiddleware({
    compiler,
    hot: {
        port: Math.floor(Math.random() * 100) + oxzConfig.port + 1,
        hot: true,
        reload: true
    },
    dev: {
    }
});

// webpack
app.use(devMiddleware);

// app.use(async (ctx, next) => {
//     if (ctx.method.toLocaleLowerCase() === 'get' && !ctx.accept.headers['x-requested-with']) {
//         try {
//             const index = devMiddleware.dev.fileSystem.readFileSync(_.resolve(buildConfig.output, './index.html'));
//             if (index) {
//                 ctx.body = index.toString();
//             }
//         } catch(err) {
//             await next();
//         }
//     } else {
//         await next();
//     }
// });

Oxz.install(app, oxzConfig);

app.listen(oxzConfig.port);