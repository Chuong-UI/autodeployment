angular.module('app', [
  'ui.router',
  'app.user',
  'templates-app',
  'ngMaterial',
  'ui.bootstrap',
  'restangular',
])

.controller('AppCtrl', function ($scope) {
  console.log('In Admin Controller');
})