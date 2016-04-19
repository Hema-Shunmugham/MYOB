/**
 * Created by 3P-00471 on 4/18/2016.
 */
angular.module('payslipApp')
  .factory('employeePaySlip', function () {

      var employeePaySlip = {};

      employeePaySlip.employeeName = function (firstName, lastName) {
        return firstName + ' ' + lastName;
      };
      employeePaySlip.payPeriod = function (payPeriod) {
          return payPeriod;
      };
      employeePaySlip.grossIncome = function (grossIncome) {
          return grossIncome;
      };
      employeePaySlip.incomeTax = function (incomeTax) {
          return incomeTax;
      };
      employeePaySlip.netIncome = function (netIncome) {
          return netIncome;
      };
      employeePaySlip.super = function (superRate) {
          return superRate;
      };

      return employeePaySlip;
  });