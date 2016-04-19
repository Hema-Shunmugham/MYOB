/* globals angular, module, describe, beforeEach, inject, it, expect, spyOn, jasmine */
describe('InputController', function() {
    beforeEach(module('payslipApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.addEmployee', function() {
        it('should not add an record if the super rate in > 50', function() {
            var $scope = {};
            var controller = $controller('inputViewCtrl', { $scope: $scope });
            $scope.super = '90';
            expect($scope.employeeDetails.length).toBe(0);
        });
    });
});