'use strict';

require('./about.scss');

const angular = require('angular');
const socrataApp = angular.module('socrataApp');

socrataApp.controller('AboutController',['$route', '$routeParams','$rootScope', '$location', AboutController]);

function AboutController($route, $routeParams, $rootScope, $location){
  this.route = $route;
  this.params = $routeParams;
  this.$rootScope = $rootScope;

  $rootScope.$on('$routeChangeStart', function(event, next, cur){
    console.log('~~~~~~~~~~~~~', cur);
    if( $location.path() === '/aboute'){
      console.log('!!!!!!!!!!!!!!!!!!!');
    }
  });

  // this.colorBg = $routeParams.colorBg || 'black';
  // this.colorFg = $routeParams.colorFg || 'red';
}
