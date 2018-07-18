// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

var app = (function(w, d, undefined) {
  var pizzaPreviewDIV = d.getElementById('pizza-preview');
  var pizzaForm = d.getElementById('pizza-form');

  function _init() {
    pizzaPreviewDIV.innerHTML = '<p>Pizza goes here...</p>';
    initEventHandlers();
  }

  function initEventHandlers() {
    pizzaForm.onkeyup = function(event) {
      if(event.target.type === 'text' && event.target.name === 'pizzaName') {
        pizzaController.pizzaObj().name = event.target.value;
        updatePreview(); 
      }
    }
  }

  function updatePreview() {
    pizzaPreviewDIV.innerHTML = JSON.stringify(pizzaController.pizzaObj());
  }

  return {
    init: function () {
      return _init();
    },
    preview: function() {
      return pizzaPreviewDIV;
    },
    form: function() {
      return pizzaForm;
    }

  }
})(window, document);

window.addEventListener('DOMContentLoaded', function(event) {
  console.log('Loaded...');

  app.init(); 
});

