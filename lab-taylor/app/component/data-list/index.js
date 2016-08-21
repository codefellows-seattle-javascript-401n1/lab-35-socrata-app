'use strict';

require('./data-list.scss');

const angular = require('angular');
const socrataApp = angular.module('socrataApp');

socrataApp.component('appDataList', {
  template: require('./data-list.html'),
  controller: 'DataListController'
});

socrataApp.controller('DataListController', ['$log', 'socrataService', DataListController]);

function DataListController($log, socrataService) {
  $log.debug('init DataListController');
  $log.debug(this);
  socrataService.getData()
  .then(data => {
    this.data = data;
  });
}
