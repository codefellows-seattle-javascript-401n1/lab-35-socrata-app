'use strict';

require('./about.scss');

const angular = require('angular');
const socrataApp = angular.module('socrataApp');

// let ypos, image;
// function parallax(){
//   ypos = window.pageYOffset;
//   image = document.getElementById('murakami');
//   image.style.top = ypos * 0.5 +'px';
// }
// window.addEventListener('scroll', parallax);
//
socrataApp.controller('AboutController',['$route', '$routeParams','$rootScope', '$location', AboutController]);

function AboutController($route, $routeParams, $rootScope, $location){
  this.route = $route;
  this.params = $routeParams;
  this.$rootScope = $rootScope;

  $rootScope.$on('$routeChangeStart', function(event, next, cur){
    console.log('~~~~~~~~~~~~~', cur);
    if( $location.path() === '/about'){
      console.log('!!!!!!!!!!!!!!!!!!!');
    }
  });
}
