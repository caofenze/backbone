App.Views.Teams = Backbone.View.extend({
	el : 'ul.team-list'
});

App.Views.Team = Backbone.View.extend({
	className : '.team-element',
	tagName : 'div',
	item2 : $("#item2"),
	model : new App.Models.Team(),
	
	initialize : function() {
		this.model.bind('change', this.render, this);
	},

	render : function() {
		var tpl = _.template($("#item2").html());
		// Compile the template
		var compiledTemplate = _.template($('#teamTemplate').html());

		$(this.item2.html(compiledTemplate.model.toJSON));
		
		//$(this.el).html("<span>" + this.model.get("name") + "</span>");
		$(this.el).html(compiledTemplate(this.model.toJSON()));
	},
	events : {
		'click a.more' : 'moreInfo'
	},
	
	moreInfo : function(e){
		// Logic here
	}

});
