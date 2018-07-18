'use strict';

(function(args, undefined) {
  var root = args.root;
  var d = args.d;

  // Dependencies
  var form = args.pizzaFormController;
  var preview = args.pizzaPreviewController;

  root.addEventListener('DOMContentLoaded', init());

  function init() {
    console.log('Init app...');

    form.init();
    preview.init();
  }

})({
  pizzaFormController: pizzaFormController,
  pizzaPreviewController: pizzaPreviewController,
  root: window,
  d: document
});