$(document).ready(function() {
	$('.nav li').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.portfolio-item').click(function() {
		$(this).find('.front div').animate({
			opacity: ($(this).find('.front div').css('opacity') == 1) ? 0 : 1
		});
		$(this).find('img').animate({
			opacity: ($(this).find('img').css('opacity') == 1) ? 0.3 : 1
		});
	});
});