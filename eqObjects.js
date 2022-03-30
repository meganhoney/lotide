const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
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

  for(let key of object1Keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};



// test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const result1 = eqObjects(ab, ba); // should return true

////const abc = { a: "1", b: "2", c: "3" };
//const result2 = eqObjects(ab, abc); // should return false
eqObjects(ab, ba);
assertEqual(result1, true);
//assertEqual(result2, false);