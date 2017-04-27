var app = angular.module('app', [
  'ui.router',
  'app.user',
  'app.directives',
  'templates-app',
  'ngMaterial',
  'ui.bootstrap',
  'restangular',
])

angular.module('app.directives', []);

app.controller('AppCtrl', function ($scope) {
  console.log('In Admin Controller');
})
app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
})