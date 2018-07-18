'use strict';

(function(w, d, undefined) {
  window.addEventListener('DOMContentLoaded', init());

  function init() {
    console.log('Init app...');

    pizzaFormController.init('pizza-form');
    pizzaPreviewController.init('pizza-preview-view');
  }

})(window, document);