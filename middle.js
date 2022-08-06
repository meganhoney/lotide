// Function to return middle-most element(s) of input array

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
};

module.exports = middle;
