import test from 'node:test';
import assert from 'node:assert';
import geld from '../index.js';

test('should format `2.15` as `"2,15 €"` ', () => {
	assert.equal(geld(2.15), '2,15 €');
});

test('should format `"2.15"` as `"2,15 €"`', () => {
	assert.equal(geld('2.15'), '2,15 €');
});

test('should format `2` as `"2 €"`', () => {
	assert.equal(geld(2), '2 €');
});

test('should format `2000` as `"2.000 €"`', () => {
	assert.equal(geld(2000), '2.000 €');
});

test('should format `"123456.789"` as `"$123,456.79"`', () => {
	assert.equal(
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
	assert.equal(
		geld(987.65, {
			decimals: 0,
		}),
		'988 €',
	);
});

test('should format `200` as `"200,- €"`', () => {
	assert.equal(
		geld(200, {
			zeroDecimals: '-',
		}),
		'200,- €',
	);
});

test('should format `200` as `"200,00 €"`', () => {
	assert.equal(
		geld(200, {
			zeroDecimals: '00',
		}),
		'200,00 €',
	);
});

test('should format `200` as `"200 €"` with `zeroDecimals` set to an empty string', () => {
	assert.equal(
		geld(200, {
			zeroDecimals: '',
		}),
		'200 €',
	);
});

test('should format `200` as `"200 €"` with `zeroDecimals` set to `null`', () => {
	assert.equal(
		geld(200, {
			zeroDecimals: null,
		}),
		'200 €',
	);
});

test('should format `200` as `"200" when no currency is provided`', () => {
	assert.equal(
		geld(200, {
			currency: null,
		}),
		'200',
	);
});

test('should format `200` as `"200&nbsp;€" when a non-breaking space entity is provided`', () => {
	assert.equal(
		geld(200, {
			space: '&nbsp;',
		}),
		'200&nbsp;€',
	);
});

test('should format `two` as empty string', () => {
	assert.equal(geld('two'), '');
});

test('should format `null` as empty string', () => {
	assert.equal(geld(null), '');
});

test('should format `undefined` as empty string', () => {
	assert.equal(geld(undefined), '');
});
