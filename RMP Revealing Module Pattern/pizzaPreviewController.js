'use strict';

var pizzaPreviewController = (function(w, d, undefined) {
  var view = {};
  
  function _init(viewID) {
    console.log('Init pizzaPreviewController...');

    view = d.getElementById(viewID);
  }

  function _updatePreview(pizza) {
    view.innerHTML = `<h1>Your pizza</h1>`;
    
    if(pizza.name !== undefined && pizza.name !== '') {
      view.insertAdjacentHTML('beforeEnd', `<p>Name: ${pizza.name}</p>`)
    }
    
    if(pizza.ingredients !== undefined && pizza.ingredients.length > 0) {    
      view.insertAdjacentHTML('beforeEnd', `<p>Ingredients: ${pizza.ingredients.join(', ')}</p>`)
    }
    
    if(pizza.crust !== undefined) {
      view.insertAdjacentHTML('beforeEnd', `<p>Crust: ${pizza.crust}</p>`);
    }
  }

  return {
    init: function(viewID) {
      return _init(viewID);
    },
    updatePreview: function(pizza) {
      return _updatePreview(pizza);
    }
  }
})(window, document);