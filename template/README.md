# <%= projectName %>

> <%= description %>

## start

For the first time:

```bash
npm run build:dll
```

develop:

```bash
npm run dev
```

build:

```bash
npm run build
```

## structure

```
|____mock       // mock 文件夹
| |____proxy    // 代理配置
| |____server   // mock server
| |____data     // 数据
|____build      // 构建配置
|
|____src
| |____App.vue      // app 入口
| |____index.html   // html 入口
| |____index.js     // js 入口
| |____style        // 样式
| | |____index.css
| | |____iconfont
| | |____common.css
| | |____theme
| |____common       // 公共工具
| | |____directives     // 指令
| | |____filters        // 过滤器
| | |____mixins         // mixins
| | |____lib            // 第三方不通过 npm 管理的包
| | |____utils
| | | |____tools                // 工具方法
| | | | |____index.js
| | | | |____defaults.js
| | | |____ajax
| | | | |____interceptors.js    // 请求拦截器，对请求与响应做一般化处理
| | | | |____index.js
| |____api                      // 公共 api 请求，也可以放到各个 view 的目录下
| | |____index.js
| |____views                    // 页面目录
| | |____demo                   // 每组或每个页面都放到以恶搞目录下进行管理，根据具体情况进行划分
| | | |____api
| | | |____mixins
| | | |____modal
| | | |____index.vue
| | |____exception      // 异常信息展示页 404、401 等
| | | |____404.vue
| |____store            // 使用 vuex 的情况下存放 store
| | |____index.js
| | |____modules
| |____router           // 路由管理
| | |____index.js
| | |____exception.js   // 建议一个文件管理一个一级路径，与 views 下目录尽量统一
| | |____demo.js
| | |____helpers
```

## proxy

add your proxy config to `./mock/proxy/rules.js`

```javascript
module.exports = {
    test1: [
        {
            paths: [
                '/api/(.*)'
            ],
            target: 'http://127.0.0.1',
            host: 'test1-domain.com'
        }
    ],
    local: [
        {
            paths: [
                '/api/(.*)'
            ],
            target: 'http://127.0.0.1:9999',
        }
    ]
}
```

Then run your config

```bash
npm run dev -- -p test1
```

## License

&copy; <%= owner %>
