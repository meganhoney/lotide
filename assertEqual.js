/*
const assertEqual = function(actual, expected) {
// Make the function compare the two values it takes in and print out a message
// telling us if they match or not
// If values match print "Assertion Passed: [actual] === [expected]"
// Otherwise pring Assertion Failed [actual] !== [expected]
  actual === expected
    ? console.log("✅✅✅ Assertion Passed : " + actual + " === " + expected)
    : console.log("❌❌❌ Assertion Failed: " + actual + " !== " + expected);

};
*/

// updated with template literals
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// export to use with other functions
module.exports = assertEqual;

