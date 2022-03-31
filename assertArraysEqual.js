const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true
    ? console.log(`✅✅✅ Assertion Passed : ${array1} === ${array2}`)
    : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should fail
assertArraysEqual(["You", "are", "great"], ["You", "are", "great"]); // should pass
assertArraysEqual(["You", 2, "there"], ["You", 2, "there"]); //should pass
assertArraysEqual(["You", 2, "there"], ["You", 3, "there"]); //should fail