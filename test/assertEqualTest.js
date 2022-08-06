const assertEqual = require('../assertEqual');

// test code
assertEqual("Lighthouse Labs", "Lighthouse Labs"); //should pass
assertEqual(1, 8); // should fail
assertEqual("Lighthouse Labs", "Bootcamp"); // should fail
assertEqual(10, 10); // should pass