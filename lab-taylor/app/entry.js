'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const ngRoute = require('angular-route');

const socrataApp = angular.module('socrataApp', [ngRoute]);
socrataApp.config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider) {
  $routeProvider
  .when('/about', {
    template: require('./view/about/about.html')
  })
  .when('/data', {
    template: require('./view/data/data.html')
  })
  .otherwise({
    redirectTo: '/about'
  });
}]);

require('./service/socrata-service');
require('./component/data-item');
require('./component/data-list');
