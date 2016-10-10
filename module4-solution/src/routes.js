(function(){
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
      url : '/',
      templateUrl : '/src/templates/home.template.html'
    })
    .state('categories',{
      url : '/categories',
      templateUrl : '/src/templates/main-categories.template.html',
      controller: 'categoriesController as catCtrl',
      resolve:{
        categories : ['MenuDataService',
                        function categoriesController(MenuDataService){
                          return MenuDataService.getAllCategories()
                            .then(function(response){
                                return response;
                            });
                        }]
              }
    })
    .state('items',{
      url : '/items/{categoryShortName}',
      templateUrl : '/src/templates/main-items.template.html',
      controller: 'itemsController as itemsCtrl',
      resolve:{
        items : ['MenuDataService','$stateParams',
                        function getItemsForCategory(MenuDataService,$stateParams){
                          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                            .then(function(response){
                                return response;
                            });
                        }]
              }
    })
  }


})();
