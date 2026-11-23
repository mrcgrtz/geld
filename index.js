export default function geld(value, options = {}) {
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

	const decimals = Math.trunc(config.decimals);

	// Let Intl do rounding and digit grouping in a fixed locale,
	// then swap in our own separators
	const parts = new Intl.NumberFormat('en-US', {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	}).formatToParts(Number(value));

	const fraction = parts.find(part => part.type === 'fraction')?.value;

	// Do something with zero-valued decimals
	const hasZeroDecimals = fraction !== undefined
		&& Number(fraction) === 0
		&& config.zeroDecimals !== undefined;

	const formattedValue = parts.map(part => {
		switch (part.type) {
			case 'group': {
				return config.orderSeparator;
			}

			case 'decimal': {
				return hasZeroDecimals && (config.zeroDecimals === '' || config.zeroDecimals === null) ? '' : config.decimalSeparator;
			}

			case 'fraction': {
				return hasZeroDecimals ? (config.zeroDecimals ?? '') : part.value;
			}

			default: {
				return part.value;
			}
		}
	}).join('');

	let currency = '';
	if (config.currency) {
		currency = config.currencyPosition === 'before'
			? config.currency + config.space
			: config.space + config.currency;
	}

	return config.currencyPosition === 'before'
		// As in '$ 123'
		? currency + formattedValue
		// As in '123 €'
		: formattedValue + currency;
}
