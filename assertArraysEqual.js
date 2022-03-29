const eqArrays = function(array1, array2) {
  let firstArray = array1.join('');
  let secondArray = array2.join('');
  return firstArray === secondArray ? true
    : false;
}

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true
    ? console.log(`✅✅✅ Assertion Passed : ${array1} === ${array2}`)
    : console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual(["You", "are", "great"], ["You", "are", "great"]);
assertArraysEqual(["You", 2, "there"], ["You", 2, "there"]);
assertArraysEqual(["You", 2, "there"], ["You", 3, "there"]);