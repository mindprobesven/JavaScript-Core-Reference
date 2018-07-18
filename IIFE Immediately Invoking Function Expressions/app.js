// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

var counter = 0;

console.log(add());
console.log(add());

// The issue: The counter variable can be accessed from anywhere becaue it is a global variable
counter = 50;
console.log(add());

function add() {
  counter++;
  return counter;
}

// -------------------------------------------------------------------------------------------------------

// add2 is a assigned the return value of a self-invoking function. It only runs once and sets counter2 to 0.
// Then it returns a function expression. add2 becomes this function. It has access to the counter2 variable in the parent scope.
var add2 = (function() {
  // The counter2 variable is now a private variable of the function and can only be accessed by call the add2 function
  var counter2 = 0;
  return function() {
    return counter2 += 1;
  }
})();

console.log(add2());
console.log(add2());
console.log(add2());

// -------------------------------------------------------------------------------------------------------

// IIFE Module Pattern
var app = (function(name, undefined) {
  var username = name;

  function getName() {
    return username;
  }

  function addLastName(lastName) {
    username = [username, lastName].join(' ');
    return username;
  }

  return {
    name: function() {
      return getName();
    },
    changeName: function(name) {
      username = name;
      return username;
    },
    addLastName: function(lastName) {
      return addLastName(lastName);
    }
  }
})('Sven');

console.log(app.name());
console.log(app.changeName('Tom'));
console.log(app.changeName('Bill'));
console.log(app.addLastName('Doe'));