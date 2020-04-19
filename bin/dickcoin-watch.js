const program = require('commander');
const watch = require('../commands/watch');

program
  .command('price')
  .description('👀 - watch price of coins in real time')
  .option('--coin <type>', 'add specific coin types', 'BTC,ETH,ICX,XRP,XLM')
  .option('--cur <currency>', 'change the currency', 'USD')
  .action((cmd) => watch.price(cmd))

program
  .command('watchlist-price')
  .description('👀📄 - watch price of coins from your watchlist in real time')
  .option('--cur <currency>', 'change the currency', 'USD')
  .action((cmd) => watch.watchlistPrices(cmd))

program.parse(process.argv);