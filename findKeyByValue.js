const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// findKeyByValue will take in an object and a value
// scan object and return first key which contains given value
// if no key, return undefined
const findKeyByValue = function(object, value) {
  // use Object.keys to get array of the input object's keys
  for(const key of Object.keys(object)) {
    if(object[key].includes(value)) {
      return key;
    }
  }
  return;
};

// test assertions
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Arthur"), "undefined");

module.exports = findKeyByValue;