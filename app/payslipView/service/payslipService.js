/**
 * Created by 3P-00471 on 4/18/2016.
 */
angular.module('payslipApp')
  .factory('payslipService', [
    'taxService', 'employeePaySlip',
    function (taxService, employeePaySlip) {
      var payslips = [];
      function getEmployeePayslips(data) {
        var empPayslips = [];
        for(var i = 0; i < data.length; i++) {
            employeePaySlip = {};
            var superRate = (data[i].super)/100;
            employeePaySlip.employeeName = data[i].firstName + ' ' + data[i].lastName;
            employeePaySlip.payPeriod = data[i].payPeriod;
            employeePaySlip.grossIncome = Math.round(data[i].salary / 12);
            employeePaySlip.incomeTax = taxService.getMonthlyTax(data[i].salary);
            employeePaySlip.netIncome = employeePaySlip.grossIncome -  employeePaySlip.incomeTax;
            employeePaySlip.super = Math.round(employeePaySlip.grossIncome * superRate);
            empPayslips.push(employeePaySlip);
        }
        return empPayslips;
      }
      return {
        createPayslip: function(data) {
            payslips = getEmployeePayslips(data);
            return payslips;
        }
      };
    }]);