'use strict';

describe('testing the socrata data service', function(){
  let url = 'https://data.seattle.gov/resource/rm6v-4hz8.json';
  let headers = {
    'Accept': 'application/json',
    'X-App-Token': 'xDXT9pP2CqLC0d5hoA5BNevwU'
  };

  beforeEach(() => {
    angular.mock.module('socData');
    angular.mock.inject((socrataDataService, $httpBackend) => {
      this.dataService = socrataDataService;
      this.$httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch data', () => {
    this.$httpBackend.expectGET(url, headers).respond(200, {});

    this.dataService.fetchData()
    .then(data => {
      expect(typeof(data)).toBe('object');
    })
    .catch( err => {
      expect(err).toBe(undefined);
    });

    this.$httpBackend.flush();
  });
});
