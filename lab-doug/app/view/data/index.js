'use strict';

const angular = require('angular');
const shuttleBuzz = angular.module('shuttleBuzz');
shuttleBuzz.controller('ShuttleDataController', ['$log', '$http', '$q', ShuttleDataController]);

//how do I inject resolve results ($resolve property) from route into this controllers scope?
function ShuttleDataController($log, $http, $q, $resolve){
  this.$resolve = $resolve;
  $log.log('$resolve', this.$resolve);
}
