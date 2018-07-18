'use strict';

var pizzaFormController = (function(w, d, undefined) {
  var pizzaForm = {};

  function _init(formID) {
    console.log('Init pizzaFormController... ');
    
    pizzaForm = d.getElementById(formID);
    initEventHandlers();
  }

  function initEventHandlers() {
    var obj = {};
    var ingredients = [];
    var selectedIngredient = '';
    var results = [];
    
    pizzaForm.onkeyup = function(event) {
      obj = event.target;
      
      if(obj.type === 'text' && obj.name === 'name') {
        pizzaDataController.pizza.name = obj.value;
        pizzaPreviewController.updatePreview(pizzaDataController.pizza);
      }
    };

    pizzaForm.onclick = function(event) {
      obj = event.target;

      if(obj.type === 'radio' && obj.name === 'crust') {
        pizzaDataController.pizza.crust = obj.value;
        pizzaPreviewController.updatePreview(pizzaDataController.pizza);
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
        
        pizzaDataController.pizza.ingredients = ingredients;
        pizzaPreviewController.updatePreview(pizzaDataController.pizza);
      }
    }
  }

  return {
    init: function(formID) {
      return _init(formID);
    }
  }
})(window, document);