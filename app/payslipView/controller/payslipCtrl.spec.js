/* globals angular, module, describe, beforeEach, inject, it, expect, spyOn, jasmine */
describe('PayslipController', function() {
    beforeEach(module('payslipApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('$scope.payslips', function() {
        it('should be defined', function() {
            var $scope = {};
            var controller = $controller('payslipCtrl', { $scope: $scope });
            expect($scope.payslips).toBeDefined();
        });
    });
});