const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// Implement a function eqarrays which takes in two arrays
// and returns true or false based on a perfect match
// arrays can't be compared with ===
// take input arrays and join in string
// compare the two strings

const eqArrays = function(array1, array2) {
  let firstArray = array1.join('');
  let secondArray = array2.join('');
  //console.log(firstArray);
  //console.log(secondArray);
  return firstArray === secondArray ? true
    : false;
}
// use assertEqual to write test cases 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
// should PASS
assertEqual(eqArrays(["hey", "hi", "hello"], ["hey", "hi", "hello"]), true); 

// it is ok for eqArrays to not return true for 
// nested arrays
// arrays of objects