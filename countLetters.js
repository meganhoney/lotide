const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// function countLetters
// take in a sentence (string)
// return count of each letter in that sentence
// tip: for...of loops work with strings
const countLetters = function(letters) {
  // create empty object where the letter counts will go
  const finalCount = {};
  for (const letter of letters) {
    //console.log(letter);
    // check if letter is a letter or space
    if (letter !== " ") {
      if (finalCount[letter]) {
        // check if letter has been counted yet or not, if yes add 1
        finalCount[letter] += 1;
      } else {
        // if it it first time, set value of letter key to 1
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
