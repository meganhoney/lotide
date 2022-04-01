// takeUntil() will have two parameters
// array to work with
// callback function
// should return a slice of the array with elements taken from the beginning
// keep going until callback returns a truthy value
// callback should be provided one value (item in the array)

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

// example
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I've', 'been', 'to', 'Hollywood' ]

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
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);