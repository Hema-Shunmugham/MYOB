/**
 * Created by Hema on 4/19/2016.
 */
/* globals angular, module, describe, beforeEach, inject, it, expect, spyOn, jasmine */
describe('Service: employeeService', function () {


    beforeEach(module('payslipApp'));

    var employeeService;

    beforeEach(inject(function (_employeeService_) {
        employeeService = _employeeService_;
    }));

    describe('getEmployees', function () {
        it('should be defined', function () {
            expect(employeeService.getEmployees).toBeDefined();
        });
    });
    describe('updateEmployeeList', function () {
        it('should be defined', function () {
            expect(employeeService.updateEmployeeList).toBeDefined();
        });
    });
});