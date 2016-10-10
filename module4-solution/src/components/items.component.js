(function(){
  'use strict';

  angular.module('data')
    .component('itemsList',{
      templateUrl : 'src/templates/items.template.html',
      bindings : {
        items : '<'
      }
    });
})();
