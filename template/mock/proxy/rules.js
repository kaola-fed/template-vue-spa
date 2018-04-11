module.exports = {
  local: [
    {
      paths: [
        '/api/(.*)'
      ],
      target: 'https://127.0.0.1',
      host: 'xyz.com'
    },
    {
      paths: [
        '*'
      ],
      target: 'http://localhost:9999',
      host: ''
    }
  ]
}