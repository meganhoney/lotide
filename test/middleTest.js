const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("array with 2 or less items should return empty array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("array with odd number of values should return one middle value", () => {
    assert.deepEqual(middle([10, 20, 30, 40, 50]), [30]); 
  });

  it("array with even number of values should return two middle values", () => {
    assert.deepEqual(middle([10, 20, 30, 40, 50, 60]), [30, 40]); 
  });
  
});