'use strict';

const angular = require('angular');
const shuttleBuzz = angular.module('shuttleBuzz');
shuttleBuzz.controller('FourOhFourController', ['$timeout', '$location', FourOhFourController]);

function FourOhFourController($timeout, $location){
  $timeout(function (){
    $location.path('/');
  }, 2000)}
