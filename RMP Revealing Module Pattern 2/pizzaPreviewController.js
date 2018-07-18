'use strict';

var pizzaPreviewController = (function(args, undefined) {
  var root = args.root;
  var d = args.d;
  
  var view = {};
  
  function _init() {
    console.log('Init pizzaPreviewController...');

    view = d.getElementById('pizza-preview-view');
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
    init: function() {
      return _init();
    },
    updatePreview: function(pizza) {
      return _updatePreview(pizza);
    }
    
  }
})({
  root: window,
  d: document
});