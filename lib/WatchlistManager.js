const Configstore = require('configstore');
const pkg = require('../package.json')

class WatchlistManager {
  constructor() {
    this.conf = new Configstore(pkg.name)
  }

  setWatchlist(watchlist) {
    this.conf.set('watchlist', watchlist)
    return watchlist;
  }

  getWatchlist() {
    const watchlist = this.conf.get('watchlist');

    return watchlist;
  }

  deleteWatchlist() {
    const watchlist = this.conf.get('watchlist');

    if (!watchlist) {
      throw Error('\nYou don\'t have any wachlist!\n');
    }

    this.conf.delete('watchlist');
    return;
  }
}

module.exports = WatchlistManager;