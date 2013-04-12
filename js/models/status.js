define(
[
    'jquery',
    'backbone',
    'underscore',
    
]
,function($ , Backbone ,_ )
{
    //This is the initial model created to load the local variables.
    var Item = Backbone.Model.extend({
        defaults:{
             escena:"",
             inventario:"",
             acertijos:"",
            tiempo:""
        },
        initialize : function(){}
    });
    return Item;
}
);