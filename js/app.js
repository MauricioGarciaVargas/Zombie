define([
  'jquery',
  'underscore',
  'backbone',
  'gamvas',
  'game',

], function($, _ , Backbone,gamvas,Display){
  var initialize = function(){
    //Create a new view (the start screen)
    var display = new Display();
    console.log('Started');
    return display;
    
  }
  
  var loadGamvas = function(){
      
            //El main estate es la escena como tal
            var mainState = gamvas.State.extend({
                init: function(t) {
                    //carga el bacground
                    this.bg = new gamvas.Image(this.resource.getImage('images/fondo.png'));},

                preDraw: function(t) {
                    // draw background
                    this.bg.draw(t);
                }
                            });
                            
            // fire up our game
                gamvas.state.addState(new mainState('mainState'));
                gamvas.start('gameCanvas');
              }

              return {
                initialize: initialize,
                loadGamvas: loadGamvas
              };
});