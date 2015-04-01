$(document).ready(function() {
	$('.nav li').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.portfolio-switch').click(function() {
		$(this).parent().find('.front div').animate({
			opacity: ($(this).parent().find('.front div').css('opacity') == 1) ? 0 : 1
		});
		$(this).parent().find('img').animate({
			opacity: ($(this).parent().find('img').css('opacity') == 1) ? 0.3 : 1
		});
		if ($(this).parent().find('.front').css('z-index') == 2) {
			$(this).parent().find('.front').css('z-index', 1);
		} else {
			$(this).parent().find('.front').css('z-index', 2);
		}
	});
});