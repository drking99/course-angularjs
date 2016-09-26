(function(){
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyCntrl)
  .controller('AlreadyBoughtController', AlreadyBoughtCntrl)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


  //Handler - To Buy Controller
  ToBuyCntrl.$inject = ['ShoppingListCheckOffService'];
  function ToBuyCntrl(ShoppingListCheckOffService){
    var toBuyList = this;
    toBuyList.message = "";

    toBuyList.items = ShoppingListCheckOffService.toBuy.getItems();
    toBuyList.addItem = function(){
      ShoppingListCheckOffService.toBuy.insertItems(toBuyList.name,toBuyList.quantity);
    };
    toBuyList.removeItem = function(itemIndex,itemName,quantity){
      ShoppingListCheckOffService.toBuy.removeItems(itemIndex,itemName,quantity);
    };
  };


  //Handler - Already Bought Controller
  AlreadyBoughtCntrl.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtCntrl(ShoppingListCheckOffService){
    var alreadyBoughtList = this;
    alreadyBoughtList
    alreadyBoughtList.items = ShoppingListCheckOffService.bought.getItems();
  };


  //Service - to exchange data between controllers
  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyList = [{ name: "cookies", quantity: 10 },{ name: "chips", quantity: 5 },{ name: "soda", quantity: 1 },{ name: "candy", quantity: 20 },{ name: "cake", quantity: 2 }]
    var boughtList = [];

    //buy service
    service.toBuy = {
      getItems : function(){
        return toBuyList;
      },
      insertItems : function(){},
      removeItems : function(itemIndex, itemName, quantity){
        var item = {
          name: itemName,
          quantity: quantity
        };
        boughtList.push(item);
        toBuyList.splice(itemIndex, 1);
      },
      message : "Nothing bought yet.";
    };

    //bought service
    service.bought= {
      getItems : function(){return boughtList;},
      insertItems : function(){}
    };

    return service;
  }

})();
