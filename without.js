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

// without function should remove unwanted items from an array
// should return a subset or a given array, removing the unwanted elements
// take in source array and itemsToRemove array
const without = function(source, itemsToRemove) {
  let arrayWithout = [];
  // loop through items in source to match to items in itemsToRemove
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      arrayWithout.push(element);
    }
  }

  return arrayWithout;
};

// testing examples
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["You", "are", "great"], ["are"]));
console.log(without(["this", "is", "a", "random", "array", "of", "strings", "&", "numbers", 5, 6, 7, 10, 42], [42, "strings", "this"]));

// use assertArraysEqual to run test cases

// write test case to make sure original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;