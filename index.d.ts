export type Options = {
	currency?: string | null;
	currencyPosition?: 'before' | 'after';
	decimals?: number;
	decimalSeparator?: string;
	orderSeparator?: string;
	zeroDecimals?: string | null;
	space?: string;
};

export default function geld(
	value: number | string,
	options?: Options
): string;
