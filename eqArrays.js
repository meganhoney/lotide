// Function to return boolean value after comparing two input arrays
// true if perfect match, false if not
const eqArrays = function(array1, array2) {
  // rule out arrays that are of different lengths
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

module.exports = eqArrays;