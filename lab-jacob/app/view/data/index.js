'use strict';
require('./data.scss');

const angular = require('angular');
const socData = angular.module('socData');

socData.controller('DataController', ['socrataDataService', function(socrataDataService){
  socrataDataService.fetchData().
  then((data) => {
    this.data = data;
  })
  .catch((err) => {
    alert(err);
  });
}]);
