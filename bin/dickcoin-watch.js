const program = require('commander');
const watch = require('../commands/watch');

program
  .command('price')
  .description('👀 - watch real time price of coins')
  .option('--coin <type>', 'add specific coin types', 'BTC,ETH,ICX,XRP,XLM')
  .option('--cur <currency>', 'change the currency', 'USD')
  .action((cmd) => watch.price(cmd))

program
  .command('watchlist-price')
  .description('👀📄 - watch real time price of coins from your watchlist')
  .option('--cur <currency>', 'change the currency', 'USD')
  .action((cmd) => watch.watchlistPrices(cmd))

program.parse(process.argv);