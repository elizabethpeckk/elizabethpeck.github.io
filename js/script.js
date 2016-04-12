$(document).ready(function() {
	$('#menu-trigger').on('click', function() {
		$('.mobile-nav').slideToggle(200);
	});
	$('.nav-link-mobile').on('click', function() {
		$('.mobile-nav').hide();
	});
});