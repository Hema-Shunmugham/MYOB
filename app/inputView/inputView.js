angular.module('payslipApp.inputView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inputView', {
    templateUrl: 'inputView/inputView.html',
    controller: 'inputViewCtrl'
  });
}]);

