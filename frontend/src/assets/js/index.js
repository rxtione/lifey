
var chkCategory;
function chkcategorylist() {
	chkCategory = new IScroll('.categorylist-wrap', {
		scrollbars: true,
		mousewheel: true,
		//click: true;
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/}
	});
}

$(document).ready(function() {
	/* 푸터 스크롤 */
	loaded();
	
	/* 메인 하단에 있는 탑가기 버튼 */
	$('#btnTop').click(function (){
		$('html, body').stop().animate( { scrollTop : '0' }, 300);
	});
	
	/* 메인 플리킹 동작 */	
	$(".touch-slider").touchSlider({
		roll : false,
		sidePage : true
	});


	/* 카테고리 레이어 */
	chkcategorylist();
	$('#openCategoryList').click(function (){
		$('.headermenu-open').addClass('category-open');
	});
	$('#closeCategoryList').click(function (){
		$('.headermenu-open').removeClass('category-open');
	});

	/* 카테고리 레이어 - 체크박스*/
	$("#chkALL").click(function(){ 
		if($("#chkALL").prop("checked")) {
			$("input[name=chkCategory]").prop("checked",true);
		} else {
			$("input[name=chkCategory]").prop("checked",false); 
		}
	}); 


	
	/* 메인 첫번째상품이미지  페이드라이트  */	
	$(".goodslist-box:first-child > a").addClass("animation");
	
});

/* 메인 상품이미지  페이드라이트  */
$(window).on("scroll", function() {
	var windowScrollTop = $(window).scrollTop();
	$(".goodslist-box > a, .event-plan-wrap > a").each(function() {
		var $aniLink = $(this);
		if ($aniLink.offset().top - 480 < windowScrollTop+120) {$aniLink.addClass("animation");}
	});
	 
});



$(window).on("scroll", function() {
	maxHeight = $(document).height();
	currentScroll = $(window).scrollTop() + $(window).height();
	if (maxHeight <= currentScroll) {
		console.log('dsds');
	}
});