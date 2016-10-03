(
  function(){
    'use strict';
    angular.module("NarrowItDownApp",[])
    .controller("NarrowItDownController",NarrowItDownController)
    .service("MenuSearchService",MenuSearchService)
    .constant("ApiBasePath","https://davids-restaurant.herokuapp.com")
    .directive("foundItems",FoundItemsDirective);

    function FoundItemsDirective(){
      var ddo = {
        templateUrl : 'foundItems.html',
         scope: {
           menu: '<myMenuList'
           //onRemove: '&'
         }
        // controller: NarrowItDownDirectiveController,
        // controllerAs: 'menuCtrl',
        // bindToController: true
      };
      return ddo;
    };

    function NarrowItDownDirectiveController(){
      var list = this;
      list.found =
      console.log("NarrowItDownDirectiveController :",this);
      return true;
    }

    NarrowItDownController.$inject = ['MenuSearchService']
    function NarrowItDownController(MenuSearchService,$scope){
      var menuCtrl = this;
      console.log("this : ",this);
      //menuCtrl.items = MenuSearchService.getMatchedMenuItems();
      //var x = (MenuSearchService.getMatchedMenuItems()).$$state;
      //console.log(x);
      var promise = MenuSearchService.getMatchedMenuItems(menuCtrl.searchTerm);

      promise.then(function (response) {
        console.log(response);
        menuCtrl.found  = response;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

      menuCtrl.getItems = function(searchTerm){
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);;

        promise.then(function (response) {
          console.log(response);
          menuCtrl.found  = response;
          if(menuCtrl.found.length == 0){
            menuCtrl.msg  = "Not Found";
          }else{
            menuCtrl.msg  = "";
          }
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
      }


      menuCtrl.onRemove = function (itemIndex) {
        console.log("deleting index:",itemIndex);
        menuCtrl.found.splice(itemIndex, 1);
      };

    };



    MenuSearchService.$inject = ['$http','ApiBasePath'];
    function MenuSearchService($http,ApiBasePath){
      var menuService = this;

      menuService.getMatchedMenuItems = function(searchTerm){
        // process result and only keep items that match
        return $http({
          method : "GET",
          url : (ApiBasePath + "/menu_items.json")
        })
        .then(function (result) {
          var foundItems = [];

          result.data.menu_items.forEach(function(item){if(item.description.indexOf(searchTerm)>=1){
            //console.log(item.description);
            foundItems.push(item)
          }
          })

          // return processed items
          return foundItems;
        });

      };
    };






  }
)();
