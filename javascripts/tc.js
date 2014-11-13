jQuery(function() {

	jQuery('#dropmenu').hover(function() {

		jQuery('#dropcon').show();

	}, function() {

		jQuery('#dropcon').hide();

	})

})

jQuery(".fullSlide").slide({
	titCell: ".hd ul",
	mainCell: ".bd ul",
	effect: "fold",
	autoPlay: true,
	autoPage: true,
	trigger: "click",
	startFun: function(i) {
		var curLi = jQuery(".fullSlide .bd li").eq(i);
		if ( !! curLi.attr("_src")) {
			curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
		}
	}
});

jQuery(".crb a").hover(function() {

	$(this).addClass('crbhover');

}, function() {

	$(this).removeClass('crbhover');

})
$("#tracking").val('請輸入包裹運單號，訂單號跟蹤狀態')
$('#tracking').focus(function() {
	if ($("#tracking").val() == $("#tracking").attr('fs')) {
		$("#tracking").val('');
	}
})
$('#tracking').blur(function() {
	if ($("#tracking").val() == '') {
		$("#tracking").val($(this).attr('fs'));
	}
})


function normal(times) {
	jQuery('#tracking').css("background-color", "#FFF");
	if (times < 0) {
		return;
	}
	times = times - 1;
	setTimeout("error(" + times + ")", 150);
}

function error(times) {
	jQuery('#tracking').css("background-color", "#fde5c3");
	times = times - 1;
	setTimeout("normal(" + times + ")", 150);
}
var Restr=/^\d{12}$/;
$('#tracking').keypress(function(e){
	var Restr=/^\d{12}$/;
            if(e.which == 13) {
				e.preventDefault();
			
	var sval = $("#tracking").val().replace(/[\r\n]/g,"");
	if(!Restr.test($.trim(sval))){
		$('#qpart').append('<div id="toast" style="height:35px;display:none;width:246px;_width:260px;*width:260px;position:absolute;left:2px;bottom:48px;background:#fdf6e2;color:#f86d00;font-weight:bold;text-align:center;line-height:35px;font-size:14px;font-weight:bold;">請輸入12位運單號追蹤</div>');
		$('#toast').stop(true,false).animate({height:"show"},1000,function(){
			setTimeout(function(){$('#toast').animate({height:'hide'},1000);},1000);
		});
		return false;
	}
	window.location.href="http://www.speedoex.com/tc/express?trackid="+sval;
			}
			
})
$("form").submit(function(e) {
	var Restr=/^\d{12}$/;
	var sval = $("#tracking").val().replace(/[\r\n]/g,"");
	if (sval == $("#tracking").attr('fs') || sval == '') {
		error(3);
		return false;
	}else if(!Restr.test($.trim(sval))){
		$('#qpart').append('<div id="toast" style="height:35px;display:none;width:246px;_width:260px;*width:260px;position:absolute;left:2px;bottom:48px;background:#fdf6e2;color:#f86d00;font-weight:bold;text-align:center;line-height:35px;font-size:14px;font-weight:bold;">請輸入12位運單號追蹤</div>');
		$('#toast').stop(true,false).animate({height:"show"},1000,function(){
			setTimeout(function(){$('#toast').animate({height:'hide'},1000);},1000);
		});
		return false;
	}
	window.location.href="http://www.speedoex.com/tc/express?trackid="+sval;
	return false;
});
