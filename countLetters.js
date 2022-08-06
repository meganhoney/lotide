const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// function to return count of each letter in input string
const countLetters = function(letters) {
  
  const finalCount = {};
  for (const letter of letters) {
    if (letter !== " ") {
      if (finalCount[letter]) {
        // check if letter has been added to object, if yes add 1
        finalCount[letter] += 1;
      } else {
        // if it has not been added, set value of letter key to 1
        finalCount[letter] = 1;
      }
      
    }
  }
  return finalCount;
};
console.log('The letters in \'Hello my name is Megan\' are:', countLetters('Hello my name is Megan'));

const goodString = 'good string';
const result1 = countLetters(goodString);

assertEqual(result1["g"], 1); // should fail
assertEqual(result1["o"], 2); // should pass
assertEqual(result1["d"], 1); // should pass

module.exports = countLetters;
