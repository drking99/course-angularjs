(function(){
  'use strict';

  angular.module('data')
    .service('MenuDataService',MenuDataService)
    .constant('categoriesRESTUrl','https://davids-restaurant.herokuapp.com/categories.json')
    .constant('itemsRESTUrl',' https://davids-restaurant.herokuapp.com/menu_items.json?category=');

  MenuDataService.$inject = ['$http','categoriesRESTUrl','itemsRESTUrl','$timeout']

  function MenuDataService($http,categoriesRESTUrl,itemsRESTUrl,$timeout){
    var mdService = this;

    //get menu categories
    mdService.getAllCategories = function(){
      //have added delay intentionally so i can display loading icon
      return $timeout(function(){
        return httpGetData(categoriesRESTUrl);
      },1000);
    }

    //get items for a category
    mdService.getItemsForCategory = function(categoryShortName){
      //have added delay intentionally so i can display loading icon
      return $timeout(function(){
        return httpGetData((itemsRESTUrl+categoryShortName));
      },1000);
    }

    //http requester
    function httpGetData(url){
      return $http({
        method : 'GET',
        url : url
      }).then( function(response){
        console.log("response in service:",response.data);
        return response.data;
      })
    }
  }




})();
