const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// use assertEqual to write test cases
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false); // should pass
assertEqual(eqArrays(["hey", "hi", "hello"], ["hey", "hi", "hello"]), true);  // should pass
assertEqual(eqArrays(["what", 2, "do"], ["what", 2, "do"]), true);  // should pass