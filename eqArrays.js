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

module.exports = eqArrays;
