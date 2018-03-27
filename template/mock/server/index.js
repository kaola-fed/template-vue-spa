// const Mockpenter = require('mockpenter');
const Koa = require('koa');
const webpack = require('webpack');
const webpackMiddleware = require('./koa-dev-middleware');
const webpackConfig = require('../../build/webpack.config.dev');
const koaMiddleware = require('koa-webpack');
const pathTo = require('path');
// const Mockpenter = require('mockpenter');

const compiler = webpack(webpackConfig);
const app = new Koa();

const devMiddleware = koaMiddleware({
    compiler,
    hot: {
        hot: true,
        reload: true
    },
    dev: {
    }
});

// webpack
app.use(devMiddleware);

app.use(async (ctx, next) => {
    if (ctx.method.toLocaleLowerCase() === 'get' && !ctx.accept.headers['x-requested-with']) {
        try {
            const index = devMiddleware.dev.fileSystem.readFileSync(pathTo.resolve(__dirname, '../../dist/index.html'));
            if (index) {
                ctx.body = index.toString();
            }
        } catch(err) {
            next();
        }
    } else {
        next();
    }
});

// Mockpenter.install(app);

app.listen(9000);