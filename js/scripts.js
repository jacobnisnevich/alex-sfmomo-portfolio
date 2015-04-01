$(document).ready(function() {
	$('.nav li').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
});