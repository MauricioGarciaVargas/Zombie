define([
  'jquery',
  'underscore',
  'backbone',
  'game', 

], function($, Backbone,_, Display){

  var initialize = function(){
    //Create a new view (the start screen)
    var display = new Display();
    console.log('Started');
    return display;
  }

  return {
    initialize: initialize
  };
});