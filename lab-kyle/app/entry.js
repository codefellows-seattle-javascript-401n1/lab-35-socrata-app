'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
const demoApp = angular.module('demoApp', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./view/about/about.html'),
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
    resolve: {
      'aboutCtrl.lists': ['$http', function($http){
        return $http.get('http://localhost:3000/api/list').then(
          function success(resp) {return resp.data;},
          function failure(resp) {return false;}
        );
      }],
      boogers: ['$http', function($http){
        return 3;
      }]
    }
  })
  .when('/about',{
    redirectTo: '/'
  })
  .when('/data', {
    template: require('./view/data/data.html'),
    controller: 'dataController',
    controllerAs: 'dataCtrl'
  })
  .otherwise({
    template: require('./view/404/404.html'),
    controller: 'FourOhFourController'
    //controllerAs: 'fourOhFourCtrl',
  });
}]);

// angular services

// angular components
require('./view/404/404-controller.js');
require('./view/data/data-controller.js')(demoApp);
require('./view/about/about-controller.js');
