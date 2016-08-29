'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
// const ngAnimate = require('angular-animate');

// angular modules
const socrataApp = angular.module('socrataApp', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./view/about/about.html'),
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
    resolve: {
      'aboutCtrl.lists': ['$http', function($http){
        return $http.get('http://localhost:3000/api/list').then(
          function success(resp) { return resp.data;},
          function failure(resp) { return false; }
        );
      }]
      // boogers: ['$http', function($http){
      //   return 3;
      // }]
    }
  })
  .when('/home',{
    redirectTo: '/'
  })
  .when('/about', {
    template: require('./view/about/about.html'),
    controller: 'AboutController'
  })
  .when('/data', {
    template: require('./view/data/data.html'),
    controller: 'DisplayController',
    controllerAs: 'displayCtrl'
  })
  .otherwise({
    template: require('./view/404/404.html'),
    controller: 'FourOhFourController'
    //controllerAs: 'fourOhFourCtrl',
  });
}]);

// angular services

// angular components
require('./service/dataService');
require('./view/404/404-controller.js');
require('./view/data/data-controller.js');
require('./view/about/about-controller.js');
