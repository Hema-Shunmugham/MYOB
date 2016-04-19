/**
 * Created by Hema on 4/18/2016.
 */
angular.module('payslipApp')
    .factory('employeeService', [
        function() {
            var employeeDetails = [];

            var getEmployees = function(){
                return employeeDetails;
            };
            var updateEmployeeList = function(empObj) {
                employeeDetails = empObj ;
            }

            return {
                getEmployees: getEmployees,
                updateEmployeeList: updateEmployeeList
            };
}]);