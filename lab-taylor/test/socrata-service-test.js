'use strict';

const url = 'https://data.seattle.gov/resource/pu5n-trf4.json';
const headers = {'X-App-Token':'y0nn5WheJncttwwxpIWJEbsSK','Accept':'application/json, text/plain, */*'};

describe('testing socrata-serice', () => {
  beforeEach(() => {
    angular.mock.module('socrataApp');
    angular.mock.inject((socrataService, $httpBackend) => {
      this.socrataService = socrataService;
      this.httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.httpBackend.verifyNoOutstandingRequest();
    this.httpBackend.verifyNoOutstandingExpectation();
  });

  it('should return an array of data', () => {
    this.httpBackend.expectGET(`${url}?$limit=5`, headers)
    .respond(200, [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]);

    this.socrataService.getData()
    .then(data => {
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBe(5);
    });
  });
});
