'use strict';

describe('testing data-controller', function(){
  beforeEach(() => {
    angular.mock.module('socrataApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.$httpBackend = $httpBackend;
      this.displayCtrl = new $controller('DisplayController');
    });
  });
  it('should get dataCtrl', () => {
    expect(typeof this.displayCtrl).toBe('object');
    expect(true).toBe(true);
  });
});
