'use strict';

const angular = require('angular');

angular.module('socData').factory('socrataDataService', ['$log', '$q', '$http', socrataDataService]);

function socrataDataService($log, $q, $http){
  let service = {};
  let url = `${__API_URL__}/rm6v-4hz8.json`; // figure out endpoint for Socrata API
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-App-Token': 'xDXT9pP2CqLC0d5hoA5BNevwU'
    }
  };

  service.fetchData = function(){
    $log.debug('socrataDataService.fetchData');
    return $q((resolve, reject) => {
      $http.get(url, config)
      .then(res => {
        $log.log(`GET ${url}:${res.status} success!`);
        resolve(res);
      })
      .catch(err => {
        $log.error(`GET ${url}:${err.status} faliure`);
        reject(err);
      });
    });
  };

  return service;
}
