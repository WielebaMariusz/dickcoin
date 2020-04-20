const program = require('commander');
const check = require('../commands/check');
const watch = require('../commands/watch');
const watchlist = require('../commands/watchlist')

program
  .command('price')
  .description('🧐 - check price of coins')
  .option('--coin <type>', 'add specific coin types', 'BTC,ETH,ICX,XRP,XLM')
  .option('--cur <currency>', 'change the currency', 'USD')
  .action((cmd) => check.price(cmd))

program
  .command('watchlist-price')
  .description('🧐📄 - check cryptocurrency prices from watchlist')
  .option('--cur <currency>', 'change the currency', 'USD')
  .action((cmd) => watchlist.price(cmd));

program.parse(process.argv);