var browserlang=window.navigator.userLanguage || window.navigator.language;
var greet='';
now = new Date();
hour = now.getHours();
if(hour < 6){greet="凌晨好！"} 
else if (hour < 9){greet="早上好！"} 
else if (hour < 12){greet="上午好！"} 
else if (hour < 14){greet="中午好！"} 
else if (hour < 17){greet="下午好！"} 
else if (hour < 19){greet="傍晚好！"} 
else if (hour < 22){greet="晚上好！"} 
else {greet="夜里好！"} 
if(!$.cookie('language')&&browserlang.toLowerCase()=='zh-cn'){
	$('<div id="toplang" style="height:35px;display:none;text-align:center;background:#fdf6e2;color:#f86d00;font-weight:bold;text-align:center;line-height:35px;font-size:14px;font-weight:bold;"><div style="position:relative;width:1000px;margin:0px auto;">'+greet+' 来自中国的用户，您可以选择访问我们的中文版网站，点击访问申必达<a style="color:gray" href="http://www.speedoex.com/cn">中文版网站</a>！<a href="javascript:void(0)" id="notnotice" style="color:gray;padding-left:10px;">不再提示</a><span id="clk" style="right:110px;cursor:pointer;bottom:5px;height:28px;width:28px;background:url(http://www.speedoex.com/assets/css/close.png) center center no-repeat;font-weight:bold;display:block;position:absolute;font-weight:normal;"></span></div></div>').insertBefore('.J_header');
	$('#toplang').stop(true,false).animate({height:"show"},1000);
	$('#clk').click(function(){
		$.cookie('language','chn');
		$('#toplang').animate({height:"hide"},1000);
	})
	$('#notnotice').click(function(){
		$.cookie('language','chn');
		$('#toplang').animate({height:"hide"},1000);
	})
}