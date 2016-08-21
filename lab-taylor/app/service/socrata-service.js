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
    }

    service.getData = function() {
      $log.debug('socrataService.getData')

      return $q((resolve, reject) => {
        .then(res => {
          $log.log(`GET ${url}: ${res.status} success`)
          this.data = res.data
          resolve(this.data)
        })
        .catch(err => {
          $log.error(`GET ${url}: ${err.status} error`)
          reject(err)
        })
      })
    }
  };
}
