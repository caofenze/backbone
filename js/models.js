App.Models.Team = Backbone.Model.extend({
	defaults : {
		name : "",
		tpl:'<li><div class="pic-panel"><a target="_blank" href="<%=houseCode%>"><img src="<%=listPicUrl%>"><div class="pic-num"><div class="pic-num-bg"></div><span><i class="ico-pic"></i><em class="num"><%=picNum%></em></span></div></a></div><div class="info-panel"><h2><a target="_blank" href="<%=listPicUrl%>"><%=titleString%></a></h2><div><div class="col-1 fl"><div class="other"><div class="con"><a href="#;"><%=frameOrientation%></a><span>/</span><%=floorInfo%><span>/</span><%=finishYear%></div></div><div class="introduce"><%=schoolInfoString%>，<%=subwayInfoString%></div><a href="#;" class="more">查看同户型成交记录</a></div><div class="col-2 fr"><div class="fl"><div class="div-cun"><%=signTime%></div><p><%=signSource%></p></div><div class="fl"><div class="div-cun"><%=unitPrice%><span>元/平<label><i>±5%</i><p>价格范围在1190万-1233万之间，该房源签约价来自线下采集，仅供参考<i></i></p></label></span></div><p>签约单价</p></div><div class="fr"><div class="div-cun"><%=signPrice%><span>万<label><i>±5%</i><p>价格范围在1190万-1233万之间，该房源签约价来自线下采集，仅供参考<i></i></p></label></span></div><p>签约总价</p></div></div></div></div></li>'
	},
	
	initialize : function() {
		this.bind("change", this.changed);
	},
	
	validate : function(attributes){
		if (!!attributes && attributes.name === "teamX") {
			return "Error!";
		}
	},
	
	changed : function() {
		console.log("changed");
	}
});
