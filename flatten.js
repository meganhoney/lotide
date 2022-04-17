// copy of eqArrays and assertArraysEqual functions
const eqArrays = function(array1, array2) {
  //compare length first to rule out
  if (array1.length !== array2.length) {
    return false;
  }
  //loop through array and compare each value
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

// flatten should take in an array containing elements including nested arrays
// and return "flattened" version
// this function should handle one level of nesting
const flatten = function(elements) {
  let flatArray = [];
  for (const element of elements) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flatArray.push(element[i]);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

// test
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// test cases with assertArraysEqual()
const nestedArray1 = ["hello", ["human", "alien"], ["how", "you", "doin"]];
const result1 = flatten(nestedArray1);
assertArraysEqual(result1, ["hello", "human", "alien", "how", "you", "doin"]);

const nestedArray2 = [10, 20, [25, 35, 45, 55], 60, 70, [99, 100]];
const result2 = flatten(nestedArray2);
assertArraysEqual(result2, [10, 20, 25, 35, 45, 55, 60, 70, 99, 100]);

module.exports = flatten;