'use strict';

require('./data.scss');

const angular = require('angular');
const socrataApp = angular.module('socrataApp');

socrataApp.controller('DisplayController', [ '$log', 'dataService', DisplayController ]);

function DisplayController($log, dataService) {
  this.fetchData = function(){
    $log.debug('displayCtrl.fetchData');
    console.log('!!!!!!!!!!!', dataService);
    // return dataService
    return dataService.fetchData()
    .catch(() => {
      alert('displayCtrl.fetchData: failed to fetch Data');
    });
  };
}
