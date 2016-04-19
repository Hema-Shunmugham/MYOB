angular.module('payslipApp', [
  'ngRoute',
  'ngLodash',
  'payslipApp.inputView',
  'payslipApp.payslipView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/inputView'});
}]);
