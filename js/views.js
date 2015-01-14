/*App.Views.Teams = Backbone.View.extend({
	el : 'ul.team-list'
});*/

//模板js插入
var tpl = new App.Models.Team().defaults.tpl;

App.Views.Team = Backbone.View.extend({
	el : $(".list"),
	el2 : $("#list"),
	el3 : $("#item"),

	template : _.template("<h3>Hello <%=world%> </h3>"),

	template2 : _.template($("#teamTemplate").html()),

	initialize : function(user){
		this.render();
		this.appendItem(user);
	},
    render: function(){
    	$('#main').append('<h1>一级标题</h1>');
  	},
  	appendItem : function(user){

  		this.el.append('<ul><li>1</li><li>2</li><li>3</li><ul>');

  		this.el2.html(this.template({world:' Tom!'}));

  		var data = user.itemData;

  		for(var i=0;i<data.length;i++){
  			this.el3.append(this.template2({
	  			houseCode:data[i].houseCode,
	  			listPicUrl:data[i].listPicUrl,
	  			titleString :data[i].titleString,
	  			picNum:data[i].picNum,
				frameOrientation:data[i].frameOrientation,
				floorInfo:data[i].floorInfo,
				finishYear:data[i].finishYear,
				schoolInfoString:data[i].schoolInfoString,
				subwayInfoString:data[i].subwayInfoString,
				signTime:data[i].signTime,
				signSource:data[i].signSource,
				unitPrice:data[i].unitPrice,
				signPrice:data[i].signPrice 
			}));
  		}
  	}

});
