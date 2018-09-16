$(document).ready(function() {

	$('.textarea-qna').on("focus", function() {
		$('.popup-content').addClass('qna-focus');
	});	
	$('.textarea-qna').on("focusout", function() {
		$('.popup-content').removeClass('qna-focus');
	});	



});