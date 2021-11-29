const assert = require('chai').assert;
const tail = require('../tail');

describe('tailTest', () => {
  it('return [2, 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]),[2, 3, 4]);
  });

  it('return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});
