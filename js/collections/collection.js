define(
[
    'jquery',
    'backbone',
    'underscore', //Todo tiene que estar en este orden.
    'status',
]
,function($ , Backbone ,_ , Item)
{   
    //This is the collection definition. With some specials functios that allows it to read
    // a XML file and turn it into a model
    var List = Backbone.Collection.extend({
     
     model : Item,
     url: "xml/save.xml",
     
     parse: function (data){
         //A new model is created and set.
         var modelo = new Item();
         modelo.set({
             escena:$(data).find('escena').text(),
             inventario:$(data).find('inventario').text(),
             acertijos:$(data).find('acertijos').text(),
             tiempo:$(data).find('tiempo').text()
         })
         return modelo;
     },
     
     fetch: function(options){
         
         options = options || {};
         options.dataType = "xml";
         Backbone.Collection.prototype.fetch.call(this, options);
     }
 });
    return List;
}
);