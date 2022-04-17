// tail of array is every element except the head (first element)
// function should return a new array, not modified version of original
// arrays can't be compared with == or ===
// assertEqual won't be able to compare the arrays directly
// could compare the values of return tail array
// i.e. .length to ensure same number of elements
// or indexed values

const tail = function(input) {
  let output = [];
  // use slice to return the tail portion of array
  // and assign to output array
  // start at 1 - second value in array
  output = input.slice(1);
  // return output
  return output;
};

module.exports = tail;