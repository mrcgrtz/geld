import test from 'node:test';
import assert from 'node:assert';
import geld from '../index.js';

test('should format `2.15` as `"2,15 €"`', () => {
	assert.strictEqual(geld(2.15), '2,15 €');
});

test('should format `"2.15"` as `"2,15 €"`', () => {
	assert.strictEqual(geld('2.15'), '2,15 €');
});

test('should format `2` as `"2 €"`', () => {
	assert.strictEqual(geld(2), '2 €');
});

test('should format `2000` as `"2.000 €"`', () => {
	assert.strictEqual(geld(2000), '2.000 €');
});

test('should format `"123456.789"` as `"$123,456.79"`', () => {
	assert.strictEqual(
		geld('123456.789', {
			currency: '$',
			currencyPosition: 'before',
			decimalSeparator: '.',
			orderSeparator: ',',
			space: '',
		}),
		'$123,456.79',
	);
});

test('should format `987.65` as `"988 €"`', () => {
	assert.strictEqual(
		geld(987.65, {
			decimals: 0,
		}),
		'988 €',
	);
});

test('should format `200` as `"200,- €"`', () => {
	assert.strictEqual(
		geld(200, {
			zeroDecimals: '-',
		}),
		'200,- €',
	);
});

test('should format `200` as `"200,00 €"`', () => {
	assert.strictEqual(
		geld(200, {
			zeroDecimals: '00',
		}),
		'200,00 €',
	);
});

test('should format `200` as `"200 €"` with `zeroDecimals` set to an empty string', () => {
	assert.strictEqual(
		geld(200, {
			zeroDecimals: '',
		}),
		'200 €',
	);
});

test('should format `200` as `"200 €"` with `zeroDecimals` set to `null`', () => {
	assert.strictEqual(
		geld(200, {
			zeroDecimals: null,
		}),
		'200 €',
	);
});

test('should format `200` as `"200" when no currency is provided`', () => {
	assert.strictEqual(
		geld(200, {
			currency: null,
		}),
		'200',
	);
});

test('should format `200` as `"200&nbsp;€" when a non-breaking space entity is provided`', () => {
	assert.strictEqual(
		geld(200, {
			space: '&nbsp;',
		}),
		'200&nbsp;€',
	);
});

test('should format `two` as empty string', () => {
	assert.strictEqual(geld('two'), '');
});

test('should format `null` as empty string', () => {
	assert.strictEqual(geld(null), '');
});

test('should format `undefined` as empty string', () => {
	assert.strictEqual(geld(undefined), '');
});

test('should format `-200000` as `"-200.000 €"`', () => {
	assert.strictEqual(geld(-200_000), '-200.000 €');
});

test('should format `-200.5` as `"-200,50 €"`', () => {
	assert.strictEqual(geld(-200.5), '-200,50 €');
});

test('should format `1.005` as `"1,01 €"`', () => {
	assert.strictEqual(geld(1.005), '1,01 €');
});

test('should format `1e21` without exponent notation', () => {
	assert.strictEqual(geld(1e21, {decimals: 0}), '1.000.000.000.000.000.000.000 €');
});

test('should format `"12345678901234567.89"` without losing precision', () => {
	assert.strictEqual(geld('12345678901234567.89'), '12.345.678.901.234.567,89 €');
});

test('should format `-0.001` as `"0 €"`', () => {
	assert.strictEqual(geld(-0.001), '0 €');
});

test('should format `"-0.001"` as `"0 €"`', () => {
	assert.strictEqual(geld('-0.001'), '0 €');
});

test('should format `0` as `"0 €"`', () => {
	assert.strictEqual(geld(0), '0 €');
});

test('should format `"0"` as `"0 €"`', () => {
	assert.strictEqual(geld('0'), '0 €');
});

test('should format `0` as `"0,- €"` with `zeroDecimals` set to `"-"`', () => {
	assert.strictEqual(geld(0, {zeroDecimals: '-'}), '0,- €');
});

test('should format empty string as empty string', () => {
	assert.strictEqual(geld(''), '');
});

test('should format whitespace-only string as empty string', () => {
	assert.strictEqual(geld('  '), '');
});

test('should format `NaN` as empty string', () => {
	assert.strictEqual(geld(NaN), '');
});
