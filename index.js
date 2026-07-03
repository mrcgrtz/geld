const geld = (value, options = {}) => {
	if (!value || Number.isNaN(value) || Number.isNaN(Number(value))) {
		return '';
	}

	const config = {
		currency: '€',
		currencyPosition: 'after',
		decimals: 2,
		decimalSeparator: ',',
		orderSeparator: '.',
		zeroDecimals: '',
		space: ' ',
		...options,
	};

	value = Number(value);
	value = value.toFixed(Math.trunc(config.decimals));

	const parts = value.split('.');
	const fnums = parts[0];
	let dec = parts[1] ? config.decimalSeparator + parts[1] : '';

	let currency = '';
	if (config.currency) {
		currency = config.currencyPosition === 'before'
			? config.currency + config.space
			: config.space + config.currency;
	}

	// Do something with zero-valued decimals
	if (Math.trunc(Number(parts[1])) === 0 && config.zeroDecimals !== undefined) {
		dec = config.zeroDecimals === '' || config.zeroDecimals === null ? '' : config.decimalSeparator + config.zeroDecimals;
	}

	const formattedValue = (() => {
		const groups = [];
		for (let i = fnums.length; i > 0; i -= 3) {
			groups.unshift(fnums.slice(Math.max(0, i - 3), i));
		}

		return groups.join(config.orderSeparator) + dec;
	})();

	return config.currencyPosition === 'before'
		// As in '$ 123'
		? currency + formattedValue
		// As in '123 €'
		: formattedValue + currency;
};

export default geld;
