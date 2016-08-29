'use strict';

describe('testing service/dataService', function(){
  beforeEach(() => {
    angular.mock.module('socrataApp');
    angular.mock.inject((dataService, $httpBackend) => {
      this.dataService = dataService;
      this.$httpBackend = $httpBackend;
    });
  });
  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });
  it('TEST: fetchData', ()=> {
    this.$httpBackend.expectGET('https://data.seattle.gov/resource/rn6u-vkuv.json?$$app_token=4YJ9cWsB3jAAZm27KmaV2my0r')
    .respond(200, {_id: '1212', name: 'dataService', notes: [], _v: 0});

    this.dataService.fetchData()
    .then( data => {
      expect(true).toBe(true);
      expect(data._id).toBe('1212');
      expect(data.name).toBe('dataService');
    })
    .catch( err => {
      expect(err).toBe(undefined);
    });
    this.$httpBackend.flush();
  });
});
