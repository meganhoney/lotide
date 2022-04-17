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

// letterPositions function will return indices in string where you can find each character
// for each letter, multiple numbers may be needed to represent all the occurences

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    // check letter is a space or letter
    if (sentence[i] !== ' ') {
      //check if the array exists already
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
          results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

//test
console.log(letterPositions('what are we doing'));

// test with assertArraysEqual()
const goodString = 'good string';
const result1 = letterPositions(goodString);

assertArraysEqual(result1["g"], [0, 10]); // should pass
assertArraysEqual(result1["o"], [1, 2]); // should pass
assertArraysEqual(result1["d"], [3, 4]); // should fail

module.exports = letterPositions;