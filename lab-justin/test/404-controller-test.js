'use strict';

describe('testing 404-controller', function(){
  beforeEach(() => {
    angular.mock.module('socrataApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.$httpBackend = $httpBackend;
      this.fourOhFourCtrl = new $controller('FourOhFourController');
    });
  });
  it('should get fourOhFourCtrl', () => {
    expect(typeof this.fourOhFourCtrl).toBe('object');
    expect(true).toBe(true);
  });
});
