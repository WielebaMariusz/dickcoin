const { CURRENCYS } = require('../constants/constants')

const isDulpicate = (input, watchlist) => {
  const watchlistArray = watchlist.split(',')

  return watchlistArray.some(item => item === input)
};

const veryfyCurrnecy = (input) => {
  return CURRENCYS.some(c => c === input)
};

isOnWatchlist = (input, wachlist) => {
  return wachlist.filter(item => item !== input);
};

const removeCurrency = (input, wachlist) => {
  return wachlist.filter(item => item !== input);
};

const addingValidation = (input, watchlist, removing) => {
  if (!input) {
    return '\nThis value is required 😎\n'.red;
  }

  if (!veryfyCurrnecy(input)) {
    return '\nWe do not support this currency! 😕\n'.red;
  }

  if(watchlist && isDulpicate(input, watchlist)) {
    return 'This coin already exist on your watchlist 😱'.red;
  }

  return true;
}

const removeingValidation = (input, watchlist, removing) => {
  if (!input) {
    return '\nThis value is required 😎\n'.red;
  }

  if(!isDulpicate(input, watchlist)) {
    return 'This coin does\'t exist on your watchlist 😱'.red;
  }

  return true;
}



module.exports = { addingValidation, isDulpicate, removeCurrency, removeingValidation };