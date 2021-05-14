const geld = (value, options) => {
	const config = {
		currency: '€',
		currencyPosition: 'after',
		decimals: 2,
		decimalSeparator: ',',
		orderSeparator: '.',
		zeroDecimals: '',
		space: ' ',
		...options
	};

	if (!value || Number.isNaN(value) || Number.isNaN(Number(value))) {
		return '';
	}

	value = Number(value);
	value = value.toFixed(Math.trunc(config.decimals));

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
	if (Number.parseInt(parts[1], 10) === 0 && config.zeroDecimals !== undefined) {
		dec = config.zeroDecimals === '' || config.zeroDecimals === null ? '' : config.decimalSeparator + config.zeroDecimals;
	}

	const formattedValue =
		fnums.replace(/(?<num>\d)(?=(?:\d{3})+$)/g, '$1' + config.orderSeparator) + dec;
	return config.currencyPosition === 'before' ?
		// As in '$ 123'
		curr + formattedValue :
		// As in '123 €'
		formattedValue + curr;
};

export default geld;
