'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
//
/**
 * injecting ngRoute in to our app module to support routing functionality in the app module(by adding $routeProvider and route service).  Each module can have a "config". The "config" is the place were we inject providers into the module($routeProvider in this case).  A "provider" is used to configure a "service" for that whole module.
 */

angular.module('shuttleBuzz', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./view/home/home.html'),
  })
  .when('/home',{
    redirectTo: '/',
  })
  .when('/about', {
    template: require('./view/about/about.html'),
  })
  .when('/data', {
    template: require('./view/data/data.html'),
  });
}]);

// angular services

// angular controllers
require('./view/about');
require('./view/data');
require('./view/home');
