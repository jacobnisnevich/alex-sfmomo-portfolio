$(document).ready(function() {
	$(".fancybox").fancybox();

	$(".fancybox-untrusted-press").fancybox({
		width: 800,
		height: 300,
		'autoSize': false, 
		type: 'iframe',
		fitToView : false
	});

	$(".fancybox-untrusted-video").fancybox({
		width: 960,
		height: 540,
		'autoSize': false, 
		type: 'iframe',
		fitToView : false
	});

	$(".vimeo").fancybox({
		width: 960,
		height: 540,
		type: 'iframe',
		fitToView : false
	});

	$('.nav li').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.portfolio-switch, .front').click(function() {
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