const pathTo = require('path');
const proxyRules = require('./proxy/rules');
const program = require('commander');

program
  .option('-p, --proxy <proxy>', 'using proxy')
  .parse(process.argv.slice(0));

module.exports = {
  port: 9000,
  local: {
    root: pathTo.resolve(__dirname, './data'),
  },
  proxy: {
    enable: !!program.proxy,
    rules: proxyRules[program.proxy]
  },
  plugins: [
  ]
};