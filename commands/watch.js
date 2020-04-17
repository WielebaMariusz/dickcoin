const inquirer = require('inquirer');
const colors = require('colors');
const CryptoAPI = require('../lib/CryptoAPI');
const Jetty = require("jetty");
const { constants } = require('../constants/constants')

const watch = {
  price(cmd) {
    const jetty = new Jetty(process.stdout);
    jetty.clear();
    jetty.moveTo([0,0]);
    jetty.text('🔥 Dickcoin is now watching prices live \n');
    checkPrice(cmd, jetty);

    setInterval(() => checkPrice(cmd, jetty), 10000);
  },
}

async function checkPrice(cmd, jetty) {
  try {
    jetty.moveTo([1,0]);
    const api = new CryptoAPI(constants.APIKey);

    const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

    jetty.text(priceOutputData);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = watch;