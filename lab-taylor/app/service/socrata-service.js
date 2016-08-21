'use strict';

const angular = require('angular');
angular.module('socrataApp').factory('socrataService', ['$log', '$q', '$http', socrataService]);

function socrataService($log, $q, $http) {
  let service = {};
  service.data = [];

  const url = `${__API_URL__}`;
}
