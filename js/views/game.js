define(
[
    'jquery',
    'backbone',
    'underscore',
    'status',
    'collection'
    
],
function($ , Backbone ,_ , Item , List )
{
    
 var Display = Backbone.View.extend({
    el: "#content", // el attaches to existing element

    events: {
        'click button#new':'newGame', //New button´s event, load the newGame function.
        'click button#continue':'continueGame' //New button´s event, load the newGame function.
   
    },
    initialize: function(){
      _.bindAll(this, 'render','newGame','continueGame'); // every function that uses 'this' as the current object should be in here
         this.documentos = new List(); // A new collection is created
         this.collection = this.documentos; //Assign the new collection to the views collection.
         this.collection.on("reset"); //The collection needs some function to be bind, so reset, sync and remove are binded.
         this.collection.on("sync");
         this.collection.on("remove");
      
         
         this.collection.fetch(); //Executed a fetch inside the collection and load the XML. 
         this.render(); //Render the view
         console.log('Render made');
 
    },

    render: function(){
      //The start screen buttons are created.
      $(this.el).append('<button id="new">New Game</button>' );
      $(this.el).append('<button id="continue">Continue</button>' );
      
     },
     //This function has to be modified later with the real newGame function.
     newGame: function(){
         console.log('The new game has started');
     },
     
     //This function loads the saved games.
     continueGame : function(){
         
         console.log('Loading scene...')
         //Run inside the collection and applies a function into the models
         _(this.documentos.models).each(function(movie){
           $("#lista",this.el).append('<li><h3>Escena:</h3><p>'+ movie.get('escena')+'</p></li>');
           $("#lista",this.el).append('<li><h3>Inventario:</h3><p>'+ movie.get('inventario')+'</p></li>');
           $("#lista",this.el).append('<li><h3>Acertijos:</h3><p>'+ movie.get('acertijos')+'</p></li>');
           $("#lista",this.el).append('<li><h3>tiempo:</h3><p>'+ movie.get('tiempo')+'</p></li>');
         },this);
     }
  });
  
  return Display;
}
);