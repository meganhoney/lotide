// require assertEqual and head
const assertEqual = require('../assertEqual');
const head = require('../head');

// test cases
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// other scenarios to consider
// array with only one element should still yield that one element
// empty array should yield undefined