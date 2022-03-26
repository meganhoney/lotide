// we will use our assertEqual function here to write
// test cases for various scenarios
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};
//head function will return first item in the input array
const head = function(input) {
// access first item of array with [0]
  return input[0];
};

// test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// other scenarios to consider
// array with only one element should still yield that one element
// empty array should yield undefined
console.log(head([5]));
console.log(head([]));