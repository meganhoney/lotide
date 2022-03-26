const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// tail of array is every element except the head (first element)
// function should return a new array, not modified version of original
// arrays can't be compared with == or ===
// assertEqual won't be able to compare the arrays directly
// could compare the values of return tail array
// i.e. .length to ensure same number of elements
// or indexed values

const tail = function(input) {
  let output = [];
  // use slice to return the tail portion of array
  // and assign to output array
  // start at 1 - second value in array
  output = input.slice(1);
  // return output
  return output;
};

// test case to ensure original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // run the function on the array
assertEqual(words.length, 3); // words array should still have 3 elements
// check first element of new array is as expected
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");

// other scenarios to consider
// array with one element should yield empty array
// empty array should yield empty array

console.log(tail([5]));
console.log(tail([]));