/**
 * Created by 3P-00471 on 4/18/2016.
 */
angular.module('payslipApp')
  .factory('taxService', ['lodash', function (lodash) {
    var incomeLevelsHighToLow = [180000, 80000, 37000, 18200];
    var taxTable = {
      180000: {
        baseTax: 54547,
        taxRate: 0.45
      },
      80000: {
        baseTax: 17547,
        taxRate: 0.37

      },
      37000: {
        baseTax: 3572,
        taxRate: 0.325

      },
      18200: {
        baseTax: 0,
        taxRate: 0.19
      }
    };

    function getSalaryLevel(salary) {
      return lodash.find(incomeLevelsHighToLow, (function (incomeLevel) {
        return salary > incomeLevel;
      }));
    }


    return {
      getMonthlyTax: function (annualSalary) {
        var salaryLevel = getSalaryLevel(annualSalary);
        if (salaryLevel) {
          var baseTax = taxTable[salaryLevel].baseTax;
          var taxToAdd = (annualSalary - salaryLevel) * taxTable[salaryLevel].taxRate;
          return Math.round((baseTax + taxToAdd) / 12);
        }
        return 0;
      }
    };
  }]);