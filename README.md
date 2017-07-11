# geld [![Build Status](https://travis-ci.org/Dreamseer/geld.svg?branch=master)](https://travis-ci.org/Dreamseer/geld)

> geld is a minimal currency formatter.

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

const price1 = geld(42.95);
console.log(price1); // => '42,95&nbsp;€'

const price2 = geld(42, { zeroDecimals: '–' });
console.log(price2); // => '42,–&nbsp;€'
```

## API

### geld(value, options)

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
