'use strict';

const defaults = {
  currency: '€',
  decimals: 2,
  decimalSeparator: ',',
  orderSeparator: '.',
  zeroDecimals: ''
};

module.exports = (price, options) => {
  const config = Object.assign({}, defaults, options);

  if (isNaN(price) || price === null) {
    return '';
  }
  price = Number(price);
  price = price.toFixed(~~config.decimals);

  const parts = price.split('.');
  const fnums = parts[0];
  let dec = parts[1] ? config.decimalSeparator + parts[1] : '';
  const curr = (config.currency) ? '&nbsp;' + config.currency : '';

  // Do something with zero-valued decimals
  if ((config.zeroDecimals !== null || config.zeroDecimals !== undefined) && (parseInt(parts[1], 10) === 0)) {
    if (config.zeroDecimals === '') {
      // Strip away zero-valued decimals
      dec = '';
    } else {
      // Add custom string
      dec = config.decimalSeparator + config.zeroDecimals;
    }
  }

  return fnums.replace(
    /(\d)(?=(?:\d{3})+$)/g,
    '$1' + config.orderSeparator
  ) + dec + curr;
};
