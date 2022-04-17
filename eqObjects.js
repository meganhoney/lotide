const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// use eqArrays function for comparing arrays
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

// Returns true if both objects have identical keys with identical values
// Otherwise returns false
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  
  // check length of keys arrays
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (let key of object1Keys) {
    // check if each property key contains an array as a value
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //if eqArrays is false, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// test with primitive values
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const result1 = eqObjects(ab, ba); // should return true
// const abc = { a: "1", b: "2", c: "3" };
// const result2 = eqObjects(ab, abc); // should return false
// eqObjects(ab, ba);
// assertEqual(result1, true);
// assertEqual(result2, false);

// test with arrays as values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const result3 = eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
const result4 = eqObjects(cd, cd2); // => false

//assertEqual tests
assertEqual(result3, true);
assertEqual(result4, false);


const testObj1 = {
  Names: ["Megan", "Julia", "Cassie"],
  Ages: [31, 35, 28]
};

const testObj2 = {
  Names: ["Megan", "Julia", "Cassie"],
  Ages: [31, 35, 28]
};
const result5 = eqObjects(testObj1, testObj2);
assertEqual(result5, true);

module.exports = eqObjects;