'use strict';

require('./data-item.scss');
const angular = require('angular');
const socrataApp = angular.module('socrataApp');

socrataApp.component('appDataItem', {
  template: require('./data-item.html'),
  bindings: {
    item: '='
  }
});
