'use strict';
require('./nav.scss');

const angular = require('angular');
const socData = angular.module('socData');

socData.component('appNav', {
  template: require('./nav.html')
});
