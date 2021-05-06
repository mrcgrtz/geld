/// <reference types="node"/>

declare namespace Geld {
	interface Options {
		currency?: string;
		currencyPosition?: 'before' | 'after';
		decimals?: number;
		decimalSeparator?: string;
		orderSeparator?: string;
		zeroDecimals?: string;
		space?: string;
	}
}

declare function geld(
	value: number | string,
	options?: Geld.Options
): string;

export = geld;
