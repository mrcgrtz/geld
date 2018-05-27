'use strict';

const defaults = {
  currency: '€',
  currencyPosition: 'after',
  decimals: 2,
  decimalSeparator: ',',
  orderSeparator: '.',
  zeroDecimals: '',
  space: '&nbsp;'
};

module.exports = (value, options) => {
  const config = Object.assign({}, defaults, options);

  if (isNaN(value) || value === null) {
    return '';
  }
  value = Number(value);
  value = value.toFixed(~~config.decimals);

  const parts = value.split('.');
  const fnums = parts[0];
  let dec = parts[1] ? config.decimalSeparator + parts[1] : '';

  let curr = '';
  if (config.currency) {
    curr = config.currencyPosition === 'before' ?
      config.currency + config.space :
      config.space + config.currency;
  }

  // Do something with zero-valued decimals
  if (parseInt(parts[1], 10) === 0 && config.zeroDecimals !== undefined) {
    if (config.zeroDecimals === '' || config.zeroDecimals === null) {
      // Strip away zero-valued decimals
      dec = '';
    } else {
      // Add custom string
      dec = config.decimalSeparator + config.zeroDecimals;
    }
  }

  const formattedValue =
    fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + config.orderSeparator) + dec;
  return config.currencyPosition === 'before' ?
    // As in '$ 123'
    curr + formattedValue :
    // As in '123 €'
    formattedValue + curr;
};
