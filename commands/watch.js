const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');
const Jetty = require("jetty");

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
    const keyManager = new KeyManager();
    const key = keyManager.getKey()
    const api = new CryptoAPI(key);

    const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

    jetty.text(priceOutputData);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = watch;