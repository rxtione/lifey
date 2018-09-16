$(document).ready(function() {
	/* 메인 하단에 있는 탑가기 버튼 */
	$('#btnTop').click(function (){
		$('html, body').stop().animate( { scrollTop : '0' }, 300);
	});
	/* 메인 헤드 고정 */
	$("#header-view").headroom();
	var $dimPopup = $('.dim-popup');

	$('.layerpopup-btn').click(function (){
		$('.optionbox-wrap').addClass('open-popup');

		if($dimPopup.css("display") == "none"){
			$dimPopup.css("display", "block");
		} else {  
			$dimPopup.css("display", "none");
		}  
	});

	$('.optionbox-close').click(function (){
		$('.optionbox-wrap').removeClass('open-popup');
		if($dimPopup.css("display") == "block"){
			$dimPopup.css("display", "none");
		} else {  
			$dimPopup.css("display", "block");
		}  
	}); 



});