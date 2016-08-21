'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const ngRoute = require('angular-route');

const socData = angular.module('socData', [ngRoute]);

socData.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    template: require('./html/home/home.html')
  })
  .when('/home', {
    redirectTo: '/'
  });
}]);


//services
//components
