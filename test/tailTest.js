// require assertEqual and tail
const assertEqual = require('../assertEqual');
const tail = require('../tail');

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