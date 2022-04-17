// map function will take in two arguments:
// array to map
// callback function
// return new array based on results of callback fn
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Functions for testing
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true
    ? console.log(`✅✅✅ Assertion Passed : ${array1} === ${array2}`)
    : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};

// testing 1
const words = ["It's", "a", "little", "bit", "funny"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ["I", "a", "l", "b", "f"]);

// testing 2
const results2 = map(words, word => word.toUpperCase());

assertArraysEqual(results2, ["IT'S", "A", "LITTLE", "BIT", "FUNNY"]);

// testing 3
const numbers = [42.62, 68.23, 55.55, 12.14, 90.99];
const results3 = map(numbers, number => number * 100);

assertArraysEqual(results3, [4262, 6823, 5555, 1214, 9099]);

// testing 4
const results4 = map(words, word => word.length);
assertArraysEqual(results4, [4, 1, 6, 3, 5]);

module.exports = map;