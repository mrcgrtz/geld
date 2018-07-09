# ![geld](media/logo.png)

> geld is a minimal currency formatter.

[![Build Status](https://travis-ci.org/Dreamseer/geld.svg?branch=master)](https://travis-ci.org/Dreamseer/geld) [![Coverage Status](https://coveralls.io/repos/github/Dreamseer/geld/badge.svg?branch=master)](https://coveralls.io/github/Dreamseer/geld?branch=master) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Install

Using [npm](https://www.npmjs.com/get-npm):

```
$ npm install geld --save
```

Using [yarn](https://yarnpkg.com/):

```
$ yarn add geld
```

## Usage

```js
const geld = require('geld');

const price1 = geld(42.23);
console.log(price1); // => '42,23 €'

const price2 = geld(42, { zeroDecimals: '–' });
console.log(price2); // => '42,– €'
```

## API

### geld(value, [options])

#### value

Type: `number` or `string`

Required value to format.

#### options.currency

Type: `string`

Currency symbol to use.
Default: `'€'`

#### options.currencyPosition

Type: `string`

Position of the currency symbol, either `'before'` or `'after'` the formatted value.
Default: `'after'`

#### options.decimals

Type: `number`

Amount of decimals.
Default: `2`

#### options.decimalSeparator

Type: `string`

Character for decimal separation, e.g. in `1,23`.
Default: `','`

#### options.orderSeparator

Type: `string`

Character for order separation, e.g. in `1.000.000`.
Default: `'.'`

#### options.zeroDecimals

Type: `string`

Character to use as a replacement for zero decimals, e.g. `1,–`.
Default: `''`

#### options.space

Type: `string`

Character to use as a spacer between formatted value and currency symbol.
Default: `' '` (i.e. `U+00A0 NO-BREAK SPACE`)

## FAQ

### Why did you set these silly defaults? I prefer X.

Of course geld’s defaults are opinionated:
I’m from Germany, thus I set German Euro defaults.

### How is the name written and pronounced?

geld, not GELD or Geld. Pronounced [/ɡɛlt/](https://en.wiktionary.org/wiki/Geld).

## Related

* [geld-cli](https://github.com/dreamseer/geld-cli) is a CLI for geld.
* [`Number.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) provides native currency formatting.
* [currency-formatter](https://github.com/smirzaei/currency-formatter) is a more powerful formatter.

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
