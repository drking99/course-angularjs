(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',DILunchCheckController)

  DILunchCheckController.$inject = ['$scope'];

  function DILunchCheckController($scope){
    $scope.listOfDishes = "";
    $scope.CheckLunch =   function(){
        var lstOfDishes = $scope.listOfDishes;
        var arrDishesEntered = lstOfDishes.length === 0 ? "" : lstOfDishes.split(',');
        if(arrDishesEntered.length > 0 && arrDishesEntered.length <= 3){
          $scope.message = "Enjoy!";
        }else if (arrDishesEntered.length > 3) {
          $scope.message = "Too much!" ;
        }else{
          $scope.message = "Please enter data first"
        }
      }

  }




})();
