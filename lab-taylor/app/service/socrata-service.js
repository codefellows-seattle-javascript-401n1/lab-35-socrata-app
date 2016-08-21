'use strict';

const angular = require('angular');
angular.module('socrataApp').factory('socrataService', ['$log', '$q', '$http', socrataService]);

function socrataService($log, $q, $http) {
  let service = {};
  service.data = [];

  const url = `${__API_URL__}`;
  const config = {
    headers: {
      'X-App-Token': `${__SOCRATA_TOKEN__}`
    },
    params: {'$limit': 50}
  };

  service.getData = function() {
    $log.debug('socrataService.getData');

    return $q((resolve, reject) => {
      $http.get(url, config)
        .then(res => {
          $log.log(`GET ${url}: ${res.status} success`);
          $log.log(res.data);
          this.data = res.data;
          resolve(this.data);
        })
        .catch(err => {
          $log.error(`GET ${url}: ${err.status} error`);
          reject(err);
        });
    });
  };

  return service;
}
