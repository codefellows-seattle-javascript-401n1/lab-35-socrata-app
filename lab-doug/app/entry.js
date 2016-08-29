'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngAnimate = require('angular-animate');

// angular modules
//
/**
 * ngRoute module is injected in to an app module to support routing functionality in the app module/app(by adding $routeProvider and $route service).   Each module can have a "config". The "config" is the place were we inject providers ($routeProvider in this case) into the shuttleBuzz module.  A "provider" is used to configure a "service" for that whole module. In this case, we are configuring the $route service provided by the ngRoute module.
 */

angular.module('shuttleBuzz', [ngRoute])
.config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider){
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
    controller: 'ShuttleDataController',
    controllerAs: 'shuttleDataCtrl',
    resolve: {
      shuttleStops: ['$http', function($http){
        return $http.get('https://data.melbourne.vic.gov.au/resource/mbbv-v68r.json')
        .then(
          function success(res) {console.log('success, res.data: ', res.data[0]);
            return res.data;},
          function failure() {return false;}
        );
      }],
    },
  })
  .otherwise({
    template: require('./view/otherwise/fourohfour.html'),
    controller: 'FourOhFourController',
  });
}]);

// angular services
// angular controllers
require('./view/otherwise/fourohfour-controller');

require('./view/about');
require('./view/data');
require('./view/home');

//components
