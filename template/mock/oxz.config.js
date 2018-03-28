const pathTo = require('path');

module.exports = {
  local: {
    root: pathTo.resolve(__dirname, './data'),
  },
  proxy: {
    router: {

    }
  },
  plugins: [
  ]
};