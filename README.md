# currency-format [![Build Status](https://travis-ci.org/Dreamseer/currency-format.svg?branch=master)](https://travis-ci.org/Dreamseer/currency-format)

> A simple currency formatter.

## Install

Using [npm](https://www.npmjs.com/get-npm):

```
$ npm install currency-format
```

Using [yarn](https://yarnpkg.com/):

```
$ yarn add currency-format
```

## Usage

```
const currencyFormat = require('currency-format');

const price = currencyFormat(42.95);
console.log(price); // => '42,95&nbsp;€'
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

## License

MIT © [Marc Görtz](https://marcgoertz.de/)
