(function(){
  'use strict';

  angular.module('data')
    .controller('categoriesController',categoriesController)

  categoriesController.$inject = ['categories']
  function categoriesController(categories){
    var catCtrl = this;

    catCtrl.categories = categories;
    console.log('catCtrl controller data: ',catCtrl.categories);

  };

})();
