var benefit;

function couponLoaded() {
	benefit = new IScroll('.wrapper', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
	});
}

$(document).ready(function() {

	//쿠폰정보 스크롤링
	couponLoaded();

	$('.layer-open').click(function (){
		$('.coupon-layerpopup').addClass('popup-open');//샘플 js  개발소스에선 삭제
	});

	$('.coupon-layerpopup-close').click(function (){
		$('.coupon-layerpopup').removeClass('popup-open');//샘플 js  개발소스에선 삭제
	});

	//라이피쿠폰
	$(".couponlist-slider").touchSlider({
		sidePage : true
	});
	//셀러쿠폰
	$(".slider02").touchSlider({
		sidePage : true
	});
	//찬스1
	$(".touchslider-chance").touchSlider({
		initComplete : function (e) {
			var _this = this;
			var $this = $(this);
			var paging = $this.next(".paging");
			var len = Math.ceil(this._len / this._view);
			
			paging.html("");
			for(var i = 1; i <= len; i++) {
				paging.append('<button type="button" class="btn_page">page' + i + '</button>');
			}

			paging.find(".btn_page").on("click", function (e) {
				_this.go_page($(this).index());
			});
		},
		counter : function (e) {
			$(this).next(".paging").find(".btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	//찬스2
	$(".touchslider-chance02").touchSlider({
		initComplete : function (e) {
			var _this = this;
			var $this = $(this);
			var paging = $this.next(".paging");
			var len = Math.ceil(this._len / this._view);
			
			paging.html("");
			for(var i = 1; i <= len; i++) {
				paging.append('<button type="button" class="btn_page">page' + i + '</button>');
			}

			paging.find(".btn_page").on("click", function (e) {
				_this.go_page($(this).index());
			});
		},
		counter : function (e) {
			$(this).next(".paging").find(".btn_page").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
});