'use strict';

var pizzaController = (function(w, d, undefined) {
  var Pizza = {
    id: 0,
    name: ''
  };

  return {
    pizzaObj: function() {
      return Pizza; 
    }
  }
})(window, document);