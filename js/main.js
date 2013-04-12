//Required models that application use.

require.config({
    paths: {
    jquery: 'libs/jquery',
    jquerymobile:'libs/jquerymobile',
    box2dweb: 'libs/Box2dWeb-2.1.a.3.min',
    gamvas:'libs/gamvas',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    status : 'models/status', //This is the model used for load the xml file, with the status at the begining.
    collection : 'collections/collection', //This is the collection of modules.
    game:'views/game' //This is the view from where the star screen will be load.
  },
  
  shim: {
    
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    gamvas :{
        exports : 'gamvas'
    },
    underscore: {
      exports: '_'
    }
  },
  
  priority:['jquery','gamvas']

});

require(
    [
        'app'     
    ], function(App){
        App.initialize();
        App.loadGamvas();
        console.log('This is the main file');
});



