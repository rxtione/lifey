$(document).ready(function() {

	$('.textarea-qna').on("change focus", function() {
		$('.popup-content').addClass('qna-focus');
	});	
	$('.textarea-qna').on("focusout", function() {
		$('.popup-content').removeClass('qna-focus');
	});	


	$('.question-list li').on("click", function() {
		$(this).toggleClass('current');
		$(this).removeClass('loadnone-animation');
		$(this).find('.reply-box').slideToggle( "slow" );
	});	




});