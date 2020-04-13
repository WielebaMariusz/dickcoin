const axios = require('axios');
const color = require('colors');

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  }

  async getPriceData(coinOption, curOption) {
    try {
      //Formatter currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption
      })

      const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);

      let output = '';

      res.data.forEach(coin => {
        output += `\n${coin.symbol.yellow} - ${coin.name.cyan}  price: ${handleStyleDisplay(coin["1d"].price_change_pct, formatter.format(coin.price))}  change: ${handleStyleDisplay(coin['1d'].price_change_pct)}\n`;
      });
      return output;
    } catch (error) {
      handleAPIError(error)
    }
  }
}

const handleAPIError = (error) => {
  if(error.response.status === 401) {
    throw new Error('Your API key is invalid')
  } else if (error.response.status === 404) {
    throw new Error('Your API is not responding')
  } else {
    throw new Error('Soemthing went wrong, try one more time')
  }
}

const handleStyleDisplay = (pct, price) => {
  if(!price) {
    const percent = (pct * 100).toFixed(2).toString()
    return  pct > 0 ? percent.green : percent.red;
  }

  return pct > 0 ? price.green : price.red;
}

module.exports = CryptoAPI;