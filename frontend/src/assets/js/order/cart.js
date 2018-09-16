var couponPopupLayer;
function couponpopuplayer() {
	couponPopupLayer = new IScroll('.couponlist-scrollbox', {
		scrollbars: true,
		mousewheel: true,
		click: true,
		tab: true,
		bounce:false,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
	});
}

$(document).ready(function() {

	/* 쿠폰 레이어 스크롤 동적으로 가져올때 success후 iscroll.refresh(); 실행필요 */
	couponpopuplayer();

	/* 옵션 선택  */
	var $dimPopup = $('.dim-popup');

	$('.select-change').click(function (){
		$('.optionbox-wrap').addClass('open-popup');

		if($dimPopup.css("display") == "none"){
			$dimPopup.css("display", "block");
		} else {  
			$dimPopup.css("display", "none");
		}  
	});

	$('.couponapply-list li').click(function (){
		$('.couponapply-list li').removeClass('current');
		$(this).addClass('current');
	});
	$('.optionbox-close').click(function (){
		$('.optionbox-wrap').removeClass('open-popup');
		if($dimPopup.css("display") == "block"){
			$dimPopup.css("display", "none");
		} else {  
			$dimPopup.css("display", "block");
		}
	});

	$('.freebtn').click(function (){
		$('.couponapply-list').addClass('free-type');
		$('.couponlist-popup').addClass('popup-open');//샘플 js  개발소스에선 삭제
	});

	$('.couponlist-close').click(function (){
		$('.couponapply-list').removeClass('free-type');
		$('.couponlist-popup').removeClass('popup-open');//샘플 js  개발소스에선 삭제
	});



});