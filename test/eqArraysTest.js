// require assertEqual and eqArrays
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// use assertEqual to write test cases
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
assertEqual(eqArrays(["hey", "hi", "hello"], ["hey", "hi", "hello"]), true);  // should PASS
assertEqual(eqArrays(["what", 2, "do"], ["what", 2, "do"]), true);  // should PASS

// it is ok for eqArrays to not return true for:
// nested arrays
// arrays of objects