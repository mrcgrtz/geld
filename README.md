# currency-format [![Build Status](https://travis-ci.org/Dreamseer/currency-format.svg?branch=master)](https://travis-ci.org/Dreamseer/currency-format)

> A simple currency formatter.

## Install

Using [npm](https://www.npmjs.com/get-npm):

```
$ npm install https://github.com/Dreamseer/currency-format.git
```

Using [yarn](https://yarnpkg.com/):

```
$ yarn add https://github.com/Dreamseer/currency-format.git
```

## Usage

```js
const currencyFormat = require('currency-format');

const price1 = currencyFormat(42.95);
console.log(price1); // => '42,95&nbsp;€'

const price2 = currencyFormat(42, { zeroDecimals: '–' });
console.log(price2); // => '42,–&nbsp;€'
```

## API

### currencyFormat(value, options)

#### value

Type: `number` or `string`

Required value to format.

#### options.currency

Type: `string`

Default: `'€'`

#### options.decimals

Type: `number`

Default: `2`

#### options.decimalSeparator

Type: `string`

Default: `','`

#### options.orderSeparator

Type: `string`

Default: `'.'`

#### options.zeroDecimals

Type: `string`

Default: `''`

## Related

* [`Number.toLocaleString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) provides native currency formatting.
* [currency-formatter](https://github.com/smirzaei/currency-formatter) is a more powerful formatter.

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
