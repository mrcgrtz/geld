declare namespace Geld {
	type Options = {
		currency?: string | null;
		currencyPosition?: 'before' | 'after';
		decimals?: number;
		decimalSeparator?: string;
		orderSeparator?: string;
		zeroDecimals?: string | null;
		space?: string;
	};
}

declare function geld(
	value: number | string,
	options?: Geld.Options
): string;

export = geld;
