angular.module('app.directives')
.directive('mainSidebar', function(){
  return {
    restrict: "E",
    templateUrl: 'common/directives/main-sidebar/main-sidebar.tpl.jade',
    controller: function($rootScope, $scope, $state, Restangular, $mdSelect) {
      
    }
  }
});