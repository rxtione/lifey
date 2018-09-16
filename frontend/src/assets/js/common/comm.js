
//하단 더보기 스크롤
var myScroll;
function loaded () {
	myScroll = new IScroll('.footer-scroll', {
		mouseWheel: true, 
		click: true, 
		scrollbars: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
	});
}
$(document).ready(function() {

	/* 메인 헤드 고정 */
	if ($("#header-view").length > 0) {
		$("#header-view").headroom();
	}

	/* 푸터 레이어동작 */
	if ($("#moreView").length > 0) {
		$('#moreView').click(function (){
			$('footer').toggleClass('menu-open');
			var $dimPopup = $('.dim-popup');
			if($dimPopup.css("display") == "none"){
				$dimPopup.css("display", "block");
				$("body").bind('touchmove', function(e){e.preventDefault()});
			} else {  
				$dimPopup.css("display", "none");
				$("body").unbind('touchmove');
			}  
		});	
	}
	if ($(".footer-menulist").length > 0) {
		loaded();
	}


	if ($(".like-check").length > 0) {
		$('input[type="checkbox"].like-check + label').click(function (){
			$(this).addClass('like-label');
		});
	}


});