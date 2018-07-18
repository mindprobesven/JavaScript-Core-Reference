// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

var numbers = [1, 2, 3, 4, 5];

// The map methods creates an array with the results of calling a function for every array element.
// array.map(function(arrayCurrentValue, arrayIndex [Optional], originalArray [Optional]))

var array = numbers.map(function(value, index, arr) {
  console.log([value, index, arr].join(' : '));
  return value + 1;
});

console.log(array);

// Calling an external function for every array element
array = numbers.map(add);

console.log(array);

function add(value, index, arr) {
  return value + 2;
}

// -------------------------------------------------------------------------------------------------------

var findNumber = 3;

// The filter method creates an array of only the elements that pass the test function
// array.filter(function(arrayCurrentValue, arrayIndex [Optional], originalArray [Optional])) 

var filteredArray = numbers.filter(function(value, index, arr) {
  if(value == findNumber) {
    console.log('Found at Index: ' + index);
    return value;
  }
});

console.log(filteredArray);

// -------------------------------------------------------------------------------------------------------

var Users = [
  {
    name: 'Sven',
    age: 38
  },
  {
    name: 'Bob',
    age: 42
  },
  {
    name: 'Thomas',
    age: 33
  }
];

Users.map(showUser);

function showUser(user) {
  console.log([user.name, user.age].join(' : '));
}