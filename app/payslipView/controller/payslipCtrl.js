/**
 * Created by 3P-00471 on 4/18/2016.
 */
angular.module('payslipApp')
  .controller('payslipCtrl',
    ['$scope','payslipService','employeeService',
      function ($scope, payslipService, employeeService) {
        init();
        function init() {
            $scope.payslips = payslipService.createPayslip(employeeService.getEmployees());
        }
      }
    ]
  );

