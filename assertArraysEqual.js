const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true
    ? console.log(`✅✅✅ Assertion Passed : ${array1} === ${array2}`)
    : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should fail
assertArraysEqual(["You", "are", "great"], ["You", "are", "great"]); // should pass
assertArraysEqual(["You", 2, "there"], ["You", 2, "there"]); //should pass
assertArraysEqual(["You", 2, "there"], ["You", 3, "there"]); //should fail