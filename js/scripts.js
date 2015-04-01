$(document).ready(function() {
	$('.nav li').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.portfolio-item').click(function() {
		$(this).find('.front').animate({opacity:($(this).find('.front').css('opacity')==1)?0:1});	});
});