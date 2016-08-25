'use strict';

require('./data.scss');

module.exports = function(socrataApp){
  socrataApp
  .controller('SettingsController', ['$location', '$log', SettingsController]);
};

function SettingsController($location, $log){

  this.configColor = function(){
    $log.log('this.color', this.color);
    $location.url('/?color=${this.color}');
    // $location.path(`#/color=${this.color}`);
  };
}
