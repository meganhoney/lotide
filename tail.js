// function to return new array containing all but first element of input array
const tail = function(input) {
  let output = [];
  output = input.slice(1);
  return output;
};

module.exports = tail;