(function(){
  angular.module("MenuAppModule")
  .controller("PreDefShoppingListController",PreDefShoppingListController);

  function PreDefShoppingListController(){
    var slCtrl = this;

    var items = [];

    items.push({name : "chips", quantity : "10 bags"});
    items.push({name : "cookies", quantity : "2 bags"});
    items.push({name : "soda", quantity : "5 bottles"});
    items.push({name : "cups", quantity : "1 bag"});
    items.push({name : "wine", quantity : "2 bottles"});
    items.push({name : "chicken", quantity : "2 lbs"});

    slCtrl.items = items;

    slCtrl.addItems = function(){
      var item = {};
      item.name =slCtrl.name;
      item.quantity = slCtrl.quantity;

      slCtrl.items.push(item);
    }



  }
})();
