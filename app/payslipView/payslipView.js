angular.module('payslipApp.payslipView', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/payslipView', {
    templateUrl: 'payslipView/payslipView.html',
    controller: 'payslipCtrl'
  });
}]);