# dickcoin

dickcoin is a CLI tool that helps you keep eye on cryptocurrency prices up to date.

dickcoin allows creating your own crypto watchlist, for checking in real-time around 2532 kind of coins.

# Installation

```bash
npm install -g dickcoin
```

And dickcoin will be installed globally to your system path.

# Usage

### Main commands

 - ```dickcoin check``` - check coin price info <br>
 - ```dickcoin watch``` -  watch live coin price info <br>
 - ```dickcoin watch-list``` - manage your cryptocurrency watch-list

### Checking price (default: "BTC,ETH,ICX,XRP,XLM")

```bash
dickcoin check price
```

###### Options:
 -   add specific coin types (e.g.: "BTC,ETH,ICX,XRP,XLM")
 ```bash
 dickcoin check price --coin <type>
 ```
- change the currency (default: "USD")

```bash
 dickcoin check --cur <currency>
```

### Checking price from watchlist
```bash
dickcoin check watchlist-price
```


### Watching price in real time (default: "BTC,ETH,ICX,XRP,XLM")

```bash
dickcoin watch price
```
###### Options:
 -   add specific coin types for watching (e.g.: "BTC,ETH,ICX,XRP,XLM")
 ```bash
 dickcoin watch price --coin <type>
 ```
- change the currency (default: "USD")

```bash
 dickcoin watch price --cur <currency>
```



### Watching the coins price from a watchlist in real-time
```bash
dickcoin watch watchlist-price
```
###### Options:
- change the currency (default: "USD")

```bash
 dickcoin watch price --cur <currency>
```



### Manage cryptocurrency watchlist
```bash
dickcoin watchlist
```
###### Options:
- add cryptocurrency to watchlist
```bash
 dickcoin watchlist add
 ```
 - show cryptocurrency watchlist
```bash
 dickcoin watchlist show
 ```
 - remove cryptocurrency from watchlist
```bash
 dickcoin watchlist remove
 ```
 - remove watchlist
```bash
 dickcoin watchkist remove-all
 ```

For CLI options, use the `-h` (or `--help`) argument:


# License

MIT
