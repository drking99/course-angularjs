(function(){
  'use strict';

  angular.module('data')
  .controller('itemsController',ItemsController);

  ItemsController.$inject = ['MenuDataService','items'];
  function ItemsController(MenuDataService,items){

    var itemsCtrl = this;

    itemsCtrl.items = items;
    console.log('itemsCtrl controller data: ',itemsCtrl.items);

  };
})();
