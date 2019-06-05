import { Logo } from './animations/logo';

$(document).ready(function() {
	Logo.initLogoSpin();
	$('.project').on('click', function() {
		$('#pop-up').addClass('visable');
	});

	$('.close-btn').on('click', function() {
		alert('test');
		$('#pop-up').removeClass('visable');
	});
});
