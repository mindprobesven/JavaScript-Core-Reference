'use strict';

var pizzaFormController = (function(args, undefined) {
  var root = args.root;
  var d = args.d;
  
  // Dependencies
  var preview = args.pizzaPreviewController;
  var data = args.pizzaDataController;

  var form = {};

  function _init() {
    console.log('Init pizzaFormController... ');
    
    form = d.getElementById('pizza-form');
    initEventHandlers();
  }

  function initEventHandlers() {
    var obj = {};
    var ingredients = [];
    var selectedIngredient = '';
    var results = [];
    
    form.onkeyup = function(event) {
      obj = event.target;
      
      if(obj.type === 'text' && obj.name === 'name') {
        data.pizza.name = obj.value;
        preview.updatePreview(data.pizza);
      }
    };

    form.onclick = function(event) {
      obj = event.target;

      if(obj.type === 'radio' && obj.name === 'crust') {
        data.pizza.crust = obj.value;
        preview.updatePreview(data.pizza);
      }

      if(obj.type === 'checkbox' && obj.name === 'ingredients') {
        selectedIngredient = obj.getAttribute('data-ingredient');

        if(obj.checked === true) {
          results = ingredients.filter(function(ingredient) {
            if(ingredient === selectedIngredient) {
              return ingredient;
            }
          });

          if(results.length < 1) {
            ingredients.push(selectedIngredient);
          }
        }
        else if(obj.checked === false) {
          results = ingredients.filter(function(ingredient) {
            if(ingredient !== selectedIngredient) {
              return ingredient;
            }
          });

          ingredients = results;
        }
        
        data.pizza.ingredients = ingredients;
        preview.updatePreview(data.pizza);
      }
    }
  }

  return {
    init: function() {
      return _init();
    }
  }
  
})({
  pizzaPreviewController: pizzaPreviewController,
  pizzaDataController: pizzaDataController,
  root: window,
  d: document
});