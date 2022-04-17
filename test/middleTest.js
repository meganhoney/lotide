// require assertArraysEqual (also has eqArrays)  & middle
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// test assertions
const shortArray = [1, 2];
const oddArray = [1, 2, 3, 4, 5];
const evenArray = ["We", "are", "coding", "today"];

assertArraysEqual(middle(shortArray), []);
assertArraysEqual(middle(oddArray), [3]);
assertArraysEqual(middle(evenArray), ["are", "coding"]);