const formatters = new Map();

function getFormatter(decimals) {
	let formatter = formatters.get(decimals);
	if (!formatter) {
		formatter = new Intl.NumberFormat('en-US', {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals,
			signDisplay: 'negative',
		});
		formatters.set(decimals, formatter);
	}

	return formatter;
}

export default function geld(value, options = {}) {
	if (
		value === null
		|| value === undefined
		|| (typeof value === 'string' && value.trim() === '')
		|| Number.isNaN(Number(value))
	) {
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
	// then swap in our own separators. Strings are passed as-is
	// so Intl can treat them as exact decimals.
	const parts = getFormatter(decimals).formatToParts(typeof value === 'string' ? value : Number(value));

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
