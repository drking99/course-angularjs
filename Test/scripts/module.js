(function(){
  angular.module("MenuAppModule",["ui.router"])
  .config(RoutesConfig)

  RoutesConfig.$inject = ["$stateProvider","$urlRouterProvider"]
  function RoutesConfig($stateProvier,$urlRouterProvider){
    $stateProvier.state('tab1',{
      url : '/tab1',
      templateUrl : 'tab1.html',
      controller : "PreDefShoppingListController as slCtrl"
    })
    .state('tab2',{
      url : '/tab2',
      templateUrl: 'tab2.html'
    })

    $urlRouterProvider.otherwise('tab1');
  }

})();
