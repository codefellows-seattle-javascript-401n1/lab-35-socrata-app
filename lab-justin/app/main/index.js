'use strict';
require('./main.scss');

const angular = require('angular');

angular.module('socrataApp')
.directive('appMain', function(){
  return {
    restrict: 'E',
    template: './main.html',
    controller: [MainController],
    controllerAs: 'mainCtrl',
    bindToController: true,
    scope: {}
  }
});

function MainController(){
  this.greeting = 'Weclome to Seattle'
}
