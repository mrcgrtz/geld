import {expectType, expectNotType, expectError} from 'tsd';
import geld from '../index.js';

expectType<string>(geld(1));
expectType<string>(geld('1'));

expectType<string>(geld(1.23));

expectType<string>(geld(100, {decimals: 0}));

expectNotType<number>(geld(1));
expectNotType<boolean>(geld(1.23));

expectError(geld(true));

expectError(geld(1, {decimals: '3'}));
expectError(geld(1, {orderSeparator: 1}));
expectError(geld(1, {currencyPosition: 'between'}));
