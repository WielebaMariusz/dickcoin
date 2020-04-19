const program = require('commander');
const watchlist = require('../commands/watchlist');
const watch = require('../commands/watch');

program
  .command('add')
  .description('✅ - add cryptocurrency to watchlist')
  .action(watchlist.set);

program
  .command('show')
  .description('📄 - show cryptocurrency watchlist')
  .action(watchlist.show);

program
  .command('remove')
  .description('❗️ - remove cryptocurrency from watchlist')
  .action(watchlist.remove);

program
  .command('remove-all')
  .description('❌ - remove watchlist')
  .action(watchlist.removeAll);

program.parse(process.argv);