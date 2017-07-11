import test from 'ava';
import geld from '../';

test('should format `2.15` as `"2,15 €"` ', t => {
  t.is(geld(2.15), '2,15&nbsp;€');
});

test('should format `"2.15"` as `"2,15 €"`', t => {
  t.is(geld('2.15'), '2,15&nbsp;€');
});

test('should format `2` as `"2 €"`', t => {
  t.is(geld(2), '2&nbsp;€');
});

test('should format `2000` as `"2.000 €"`', t => {
  t.is(geld(2000), '2.000&nbsp;€');
});

test('should format `"123456.789"` as `"$123,456.79"`', t => {
  t.is(geld('123456.789', {
    currency: '$',
    currencyPosition: 'before',
    decimalSeparator: '.',
    orderSeparator: ',',
    space: ''
  }), '$123,456.79');
});

test('should format `987.65` as `"988 €"`', t => {
  t.is(geld(987.65, {
    decimals: 0
  }), '988&nbsp;€');
});

test('should format `200` as `"200,- €"`', t => {
  t.is(geld(200, {
    zeroDecimals: '-'
  }), '200,-&nbsp;€');
});

test('should format `200` as `"200,00 €"`', t => {
  t.is(geld(200, {
    zeroDecimals: '00'
  }), '200,00&nbsp;€');
});

test('should format `two` as empty string', t => {
  t.is(geld('two'), '');
});

test('should format `null` as empty string', t => {
  t.is(geld(null), '');
});
