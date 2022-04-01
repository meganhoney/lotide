// copy of eqArrays and assertArraysEqual functions
const eqArrays = function(array1, array2) {
  //compare length first to rule out
  if (array1.length !== array2.length) {
    return false;
  }
  //loop through array and compare each value
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

// middle should take in an array and return the middle-most-element(s)
// arrays with one or two elements should return empty
// arrays with odd number elements should return one element
// arrays with even number of elements should return two elements
const middle = function(array) {
  let middleValue = [];
    if (array.length < 3) {
      middleValue.push();
    } else if (array.length % 2 === 0) {
      middleValue.push(array[(array.length / 2) - 1]);
        middleValue.push(array[array.length / 2]);
    } else if (array.length % 2 === 1) {
      middleValue.push(array[Math.floor(array.length / 2)]);
    }
  return middleValue;
}
// test logs
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));

// test assertions
const shortArray = [1, 2];
const oddArray = [1, 2, 3, 4, 5];
const evenArray = ["We", "are", "coding", "today"];

assertArraysEqual(middle(shortArray), []);
assertArraysEqual(middle(oddArray), [3]);
assertArraysEqual(middle(evenArray), ["are", "coding"]);