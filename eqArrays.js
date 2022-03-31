const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// Implement a function eqArrays which takes in two arrays
// and returns true or false based on a perfect match
// arrays can't be compared with ===
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
// use assertEqual to write test cases
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), true);
// should FAIL
assertEqual(eqArrays(["hey", "hi", "hello"], ["hey", "hi", "hello"]), true);  // should PASS
assertEqual(eqArrays(["what", 2, "do"], ["what", 2, "do"]), true);  // should PASS

// it is ok for eqArrays to not return true for
// nested arrays
// arrays of objects