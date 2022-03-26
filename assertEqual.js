/*
const assertEqual = function(actual, expected) {
// Make the function compare the two values it takes in and print out a message
// telling us if they match or not
// If values match print "Assertion Passed: [actual] === [expected]"
// Otherwise pring Assertino Failes [actual] !== [expected]
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

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 8);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(10, 10);