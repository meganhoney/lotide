const assertArraysEqual = require('../assertArraysEqual');

// test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should fail
assertArraysEqual(["You", "are", "great"], ["You", "are", "great"]); // should pass
assertArraysEqual(["You", 2, "there"], ["You", 2, "there"]); //should pass
assertArraysEqual(["You", 2, "there"], ["You", 3, "there"]); //should fail