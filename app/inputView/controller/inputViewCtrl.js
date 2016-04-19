/**
 * Created by Hema on 4/17/2016.
 */
angular.module('payslipApp')
    .controller('inputViewCtrl',
        ['$scope','employeeService',
            function ($scope, employeeService) {
                $scope.date = {startDate :null, endDate: null};
                $scope.employeeDetails = [];
                $scope.showErrorMessage = false;

                $scope.addEmployee = function(){

                    var empObj = {};
                    if (parseInt($scope.super) > 50 ){
                        $scope.showErrorMessage = true;
                    }else {
                        $scope.showErrorMessage = false;
                        empObj = {'firstName':$scope.firstName, 'lastName': $scope.lastName, 'salary':$scope.salary,
                            'super': $scope.super, 'payPeriod': $scope.payPeriod};
                        $scope.employeeDetails.push(empObj);
                        employeeService.updateEmployeeList($scope.employeeDetails);
                        $scope.firstName='';
                        $scope.lastName='';
                        $scope.salary='';
                        $scope.super='';
                        $scope.payPeriod='';
                    }

                };
                $scope.removeEmployee = function(index) {
                    $scope.employeeDetails.splice(index, 1);
                    employeeService.updateEmployeeList = $scope.employeeDetails;
                };


            }
        ]
    );