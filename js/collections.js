App.Collections.Teams = Backbone.Collection.extend({
    model : App.Models.Team,
    initialize : function(){
    	var User = Backbone.Model.extend({
		    urlRoot: '/backbonejs/data/data.js'
		});

		var user = new User();
		user.fetch({
		    success: function (user){
		        //console.log(user.toJSON());
		        new App.Views.Team(user.toJSON());
		    }
		});
    }
});
