import { Logo } from './animations/logo';
const ScrollTrigger = require('scrolltrigger-classes');

document.addEventListener('DOMContentLoaded', function() {
	var trigger = new ScrollTrigger();
});

$(document).ready(function() {
	Logo.initLogoSpin();

	$('.project').on('click', function() {
		$('#pop-up').addClass('visable');
		$('body').addClass('pop-up');
	});

	$('.close-btn').on('click', function() {
		$('#pop-up').removeClass('visable');
		$('body').removeClass('pop-up');
	});

	$('.slide-btn').on('click', function() {
		$('.skill-slide-1').toggleClass('slide-closed');
		$('.skill-slide-2').toggleClass('slide-open');
		$('.next').toggleClass('slide-open');
	});
});
