// use eqArrays function for comparing arrays in eqObjects
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

// eqObjects function compares to objects and returns boolean value
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// assertObjectsEqual will take in two objects
// and log appropriate message to console
const assertObjectsEqual = function(actual, expected) {
  // use util library inspect function
  const inspect = require('util').inspect;
  eqObjects(actual, expected) === true
    ? console.log(`✅✅✅ Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`)
    : console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// test code
const testObj1 = {
  Names: ["Megan", "Julia", "Cassie"],
  Ages: [31, 35, 28]
};

const testObj2 = {
  Names: ["Megan", "Julia", "Cassie"],
  Ages: [31, 35, 28]
};
assertObjectsEqual(testObj1, testObj2);
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1', c: 3 });

module.exports = assertObjectsEqual;