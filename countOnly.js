const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`)
    : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

// count only will be given an array and an object
// it will return an object containing counts of everything that the input object listed
// only keys that have a truthy value should be counted in the resulting object
// all other strings (either set to false or not included)
// should not be counted

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// function should report back how many instances of each string
// were found in the allItems array of strings
// countOnly function will need to return an object that can represent the stats
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    //console.log(item);
    // only count items in itemsToCount
    if (itemsToCount[item]) {
      // increment count of each item
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
// running countOnly function using firstNames object and object indicating which names should be counted
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);