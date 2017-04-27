angular.module('app.user.organization', [
  'app.user.organization.projects'
])
.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
  function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider.state('user.organization', {
      url: '/organizations/:organizationId',
      title: 'Organizations',
      views: {
        'user@user':{
          templateUrl: 'app/user/organization/organization.tpl.jade',
          controller: function ($rootScope, $scope, $state, $location) {
            var getStateTitle = function (title) {
              if (title) {
                return typeof title === 'function' ? title() : title;
              }
              return '';
            }
            $scope.$on('$stateChangeSuccess', function () {
              if ($state.current.title) {
                $scope.pageTitle = getStateTitle($state.current.title); 
              }
              $scope.breadcrumbs = [{
                title: $scope.pageTitle,
                url: '',
                params: ''
              }];
              $scope.getBreadcrumbs($state.$current.parent);
              _.remove($scope.breadcrumbs, function (item) {
                return !item.title;
              })
              _.reverse($scope.breadcrumbs);
            });

            

            $scope.getBreadcrumbs = function (parent) {
              if (parent) {
                // var parent = state.$current.parent;
                $scope.breadcrumbs.push({
                  title: getStateTitle(parent.self.title),
                  url: parent.self.name,
                  params: parent.params
                });
                $scope.getBreadcrumbs(parent.parent);
              }
              else {
                return;
              }
            }

          }
        }
      },
      resolve: {
        currentOrganization: function (Restangular, $state, $stateParams) {
          return Restangular.one('organizations', String($stateParams.organizationId))
            .get()
            .then(function (org) {
              // $state.current.title = org.name;
              return org;
            });
        }
      }
    })
  }])