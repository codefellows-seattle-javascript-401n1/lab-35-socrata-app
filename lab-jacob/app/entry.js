'use strict';

require('!!file?name=[name].[ext]!./view/index.html');
require('./scss/base.scss');

const angular = require('angular');
const ngRoute = require('angular-route');
const socData = angular.module('socData', [ngRoute]);

socData.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    template: require('./view/about/about.html')
  })
  .when('/about', {
    redirectTo: '/'
  })
  .when('/data', {
    template: require('./view/data/data.html'),
    controller: 'DataController',
    controllerAs: 'DataCtrl'
  })
  .otherwise({
    template: require('./view/404/404.html')
  });
}]);

//controller
require('./view/data');
//services
require('./service/socrata-data-service');
//components
require('./component/nav');
require('./component/burger-menu');
