module.exports = {
  local: [
    {
      pathes: [
        '/api/(.*)'
      ],
      target: 'https://127.0.0.1',
      host: 'xyz.com'
    },
    {
      pathes: [
        '*'
      ],
      target: 'http://localhost:9999',
      host: ''
    }
  ]
}