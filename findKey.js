// assertEqual function to use for testing
const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// findKey function will take in an object and a callback
// scan object and return the first key where the callback returns a truthy value
// if no key is found => undefined
const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// testing
const michelinStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(michelinStars, x => x.stars === 2), 'noma');

assertEqual(findKey(michelinStars, x => x.stars === 5), undefined);

assertEqual(findKey(michelinStars, x => x.stars === 3), 'Akaleri');

const albumsByYear = {
  "1971": 'Led Zeppelin IV',
  "1973": 'Houses of the Holy',
  "1975": 'Physical Graffiti'
};

assertEqual(findKey(albumsByYear, x => x === 'Physical Graffiti'), "1975");

module.exports = findKey;