const inquirer = require('inquirer')
const colors = require('colors')
const WatchlistManager = require('../lib/WatchlistManager')
const CryptoAPI = require('../lib/CryptoAPI')
const { addingValidation, removeingValidation, isRequired, isDulpicate, veryfyCuurrnecy, removeCurrency } = require('../utils/validation')
const { API_KEY } = require('../constants/constants')

const watchlist = {
  async set() {
    const watchlistManager = new WatchlistManager();
    const existingCoins = watchlistManager.getWatchlist();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'currnecy',
        message: 'Enter a cryptocurrency ticker symboldic '.blue,
        validate: (input) => addingValidation(input, existingCoins),
        filter: (input) => input.toUpperCase()
      }
    ]);
    let result = null

    if (existingCoins) {
      result = watchlistManager.setWatchlist([existingCoins, input.currnecy].join());
    } else {
      result = watchlistManager.setWatchlist(input.currnecy);
    }

    if(result) {
      console.log('\n',input.currnecy.brightMagenta, 'has been added to the watchlist correctly\n'.green);
    }
  },
  show() {
    try {
      const watchlistManager = new WatchlistManager();
      const existingWatchlist = watchlistManager.getWatchlist();

      if (existingWatchlist) {
        const watchlistArray = existingWatchlist.split(',')

        console.log('\nYour watchlist:\n');
        console.log(existingWatchlist.replace(/,/g, "\n").yellow);
      } else {
        throw Error('\nYour watchlist is empty!\n');
      }

      return existingWatchlist;
    } catch (error) {
      console.error(error.message.red)
    }
  },
  async remove() {
    try {
      const watchlistManager = new WatchlistManager();
      const existingCoins = watchlistManager.getWatchlist();
      let input = null

      if (existingCoins) {
        input = await inquirer.prompt([
          {
            type: 'input',
            name: 'currnecy',
            message: 'Enter a cryptocurrency ticker symbol'.blue,
            validate: (input) => removeingValidation(input, existingCoins, true),
            filter: (input) => input.toUpperCase()
          }
        ]);
        const newWatchList = removeCurrency(input.currnecy, existingCoins.split(','))
        result = watchlistManager.setWatchlist(newWatchList.join());
      } else {
        throw Error('\nYour watchlist is empty!\n');
      }

      console.log('\nCurrency removed: '.green, input.currnecy.brightCyan, '\n');
      return;
    } catch (error) {
      console.error(error.message.red)
    }
  },

  removeAll() {
    try {
      const watchlistManager = new WatchlistManager();
      const result = watchlistManager.deleteWatchlist();

      console.log('\nYour watchlist has been deleted\n'.green);
      return;
    } catch (error) {
      console.error(error.message.red)
    }
  },

 async price(cmd) {
    const watchlistManager = new WatchlistManager();
    const existingWatchlist = watchlistManager.getWatchlist();

    if (!existingWatchlist) {
      throw Error('\nYour watchlist is empty!\n');
    }

    try {
      const api = new CryptoAPI(API_KEY);
      const priceOutputData = await api.getPriceData(existingWatchlist, cmd.cur)
      console.log(priceOutputData);
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = watchlist;