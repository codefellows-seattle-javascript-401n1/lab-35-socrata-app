'use strict';

require('./404.scss');

const angular = require('angular');
const socrataApp = angular.module('socrataApp');
socrataApp.controller('FourOhFourController', ['$location', '$timeout', FourOhFourController]);

function FourOhFourController($location, $timeout){
  $timeout(() => {
    $location.path('/');
  },3000);
}
