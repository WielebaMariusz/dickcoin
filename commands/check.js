const inquirer = require('inquirer');
const colors = require('colors');
const CryptoAPI = require('../lib/CryptoAPI')
const { API_KEY } = require('../constants/constants')

const check = {
  async price(cmd) {
    try {
      const api = new CryptoAPI(API_KEY);
      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur)
      console.log(priceOutputData);
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = check;