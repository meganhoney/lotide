# Project 1: Lotide

### Lotide is a mini clone of [Lodash](https://github.com/lodash/lodash)

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mjthoney/lotide`

**Require it:**

`const _ = require('@mjthoney/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Compares two arrays and logs assertion message to console 
* `assertEqual(actual, expected)`: Compares two values, an actual and an expected, and logs assertion message to console 
* `assertObjectsEqual(object1, object2)`: Compares two objects and logs assertion message to console 
* `countLetters(string)`: Returns a count of how many instances there are of each letter in an input string
* `countOnly(itemsArray, itemsToCountObject)`: Returns an object containing a tally of how many instances there are of an item in an array, based on an object indicating what should be counted
* `eqArrays(array1, array2)`: Compares two input arrays and returns a boolean value based on a perfect match
* `eqObjects(object1, object2)`: Compares two input objects and returns a boolean value based on both objects having identical keys with identical values
* `findKey(object, callback)`: Returns first key in an input object where the callback function returns a truthy value
* `findKeyByValue(object, value)`: Returns first key in an input object that contains input value
* `flatten(array)`: Returns a one dimensional array from a two dimensional array
* `head(array)`: Returns first item of an array
* `letterPositions(string)`: Scans input string and returns an object containing each letter and all of its indices in the string
* `map(array, callback)`: A basic version of array.map() where the function returns a new array based on calling the given callback function on the input array
* `middle(array)`: Returns an array containing the middle most element(s) from an input array
* `tail(array)`: Returns a new array containing all but the first element of the input array
* `takeUntil(array, callback)`: Returns slice of input array, stopping when the callback function returns a truthy value; the callback function has one parameter - the item in the array where the takeUntil function should stop
* `without(sourceArray, itemsToRemoveArray)`: Removed items from an input array based on a second input array listing the items to remove