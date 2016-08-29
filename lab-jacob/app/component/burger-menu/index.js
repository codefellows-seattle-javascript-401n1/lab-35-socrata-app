'use strict';
require('./burger.scss');

const angular = require('angular');
const socData = angular.module('socData');

socData.component('appBurger', {
  template: require('./burger.html'),
  controller: 'BurgerController'
});

socData.controller('BurgerController', ['$log', BurgerController]);

function BurgerController($log){
  $log.debug('nav menu go!');
  this.showNav = true;
}
