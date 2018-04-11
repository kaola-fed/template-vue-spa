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