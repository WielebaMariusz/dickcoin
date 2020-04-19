const inquirer = require('inquirer');
const colors = require('colors');
const CryptoAPI = require('../lib/CryptoAPI');
const WatchlistManager = require('../lib/WatchlistManager')
const Jetty = require("jetty");
const { API_KEY } = require('../constants/constants')

const watch = {
  price(cmd) {
    const jetty = new Jetty(process.stdout);
    jetty.clear();
    jetty.moveTo([0,0]);
    jetty.text('🔥 Dickcoin is now watching prices live \n');
    checkPrice(cmd, jetty);

    setInterval(() => checkPrice(cmd, jetty), 10000);
  },

  watchlistPrices(cmd) {
    const watchlistManager = new WatchlistManager();
    const existingWatchlist = watchlistManager.getWatchlist();
    const jetty = new Jetty(process.stdout);

    if (!existingWatchlist) {
      console.log('\nYour watchlist is empty!\n'.red);
      return false;
    }

    jetty.clear();
    jetty.moveTo([0,0]);
    jetty.text('🔥 Dickcoin is now watching prices live \n');
    cmd.coin = existingWatchlist;
    console.log('tesd', cmd.coin);
    checkPrice(cmd, jetty);

    setInterval(() => checkPrice(cmd, jetty), 10000);
  },
}

async function checkPrice(cmd, jetty) {
  try {
    jetty.moveTo([1,0]);
    const api = new CryptoAPI(API_KEY);

    const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

    jetty.text(priceOutputData);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = watch;