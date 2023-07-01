// const sum = require('./sum');

import { sum } from "./UnitTests";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 3 + 5 to equal 7', () => {
  expect(sum(3, 5)).toBe(8);
})