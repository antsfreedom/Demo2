$(function(){
	$(".list a").hover(function(){
		$(this).css({color:"#ccc"}).stop().animate({marginTop:"-40px"},300)
	},function(){
		$(this).css({color:"#000"}).stop().animate({marginTop:0},300)
	})
})