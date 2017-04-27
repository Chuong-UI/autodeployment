angular.module('app.user.organization.projects', [])
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
  function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider.state('user.organization.projects', {
      url: '/projects',
      title: 'Projects',
      views: {
        'organization@user.organization':{
          templateUrl: 'app/user/organization/projects/projects.tpl.jade',
          controller: function ($rootScope, $scope, $state, $location) {
            console.log('aaaaaaa');
            console.log($state);
          }
        }
      },
      resolve: {
      }
    })
  }])