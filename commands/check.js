const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI')
// const { isRequired } = require('../utils/validation')

const check= {
  async price(cmd) {
    try {
      const keyManager = new KeyManager()
      const key = keyManager.getKey()

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur)
      console.log(priceOutputData);
    } catch (error) {
      console.error(error)
    }
  },
}

module.exports = check;