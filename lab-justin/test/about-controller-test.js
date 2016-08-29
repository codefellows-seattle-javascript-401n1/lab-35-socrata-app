'use strict';

describe('testing about-controller', function(){
  beforeEach(() => {
    angular.mock.module('socrataApp');
    angular.mock.inject(($controller, $httpBackend) => {
      this.$httpBackend = $httpBackend;
      this.aboutCtrl = new $controller('AboutController');
    });
  });
  it('shuold get aboutCtl', () => {
    expect(typeof this.aboutCtrl).toBe('object');
    expect(true).toBe(true);
  });
});
