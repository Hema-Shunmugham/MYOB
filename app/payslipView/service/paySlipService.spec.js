/**
 * Created by Hema on 4/19/2016.
 */
/* globals angular, module, describe, beforeEach, inject, it, expect, spyOn, jasmine */
describe('Service: payslipService', function () {
    beforeEach(module('payslipApp'));

    var payslipService,taxService,employeePaySlip;
    var mockData = [{firstName :'Hema', lastName: 'Shunmugham', salary: '80000', super: 9,
        payPeriod:  '01 March - 31 March'}];

    var result = [{employeeName: 'Hema Shunmugham', payPeriod:'01 March - 31 March',
        grossIncome : 6667, incomeTax :1462 , netIncome: 5205, super : 600}];

    beforeEach(inject(function (_payslipService_,_taxService_,_employeePaySlip_) {
        payslipService = _payslipService_;
        taxService = _taxService_;
        employeePaySlip = _employeePaySlip_;
    }));

    describe('createPayslip', function () {
        it('should create paySlips', function () {
          expect(payslipService.createPayslip(mockData));
        });
    });

});