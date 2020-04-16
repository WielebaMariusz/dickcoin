const program = require('commander');
const watch = require('../commands/watch');

program
  .command('price')
  .description('👀 - watch price of coins in real time')
  .option('--coin <type>', 'Add specific coin types', 'BTC,ETH,ICX,XRP,XLM')
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action((cmd) => watch.price(cmd))

program.parse(process.argv);