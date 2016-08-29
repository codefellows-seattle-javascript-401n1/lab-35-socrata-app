'use strict';

const angular = require('angular');
angular.module('socrataApp').factory('dataService', ['$log', '$q', '$http', dataService]);

function dataService($log, $q, $http){
  let service = {};
  let url = 'https://data.seattle.gov/resource/rn6u-vkuv.json?$$app_token=4YJ9cWsB3jAAZm27KmaV2my0r';
  // let config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   }
  // };

  service.fetchData = function(){
    $log.debug('dataService.fetchData');
    return $q((resolve, reject) => {
      $http.get(url)
      .then ( res => {
        $log.log(`GET ${url}:${res.status} dataService.fetchData: Get-success!`);
        this.lists = res.data[0];
        resolve(this.lists);
      })
      .catch ( err => {
        $log.error(`GET ${url}:${err.status} dataService.fetchData: Get-failed!`);
        reject(err);
      });
    });
  };

  return service;
}
