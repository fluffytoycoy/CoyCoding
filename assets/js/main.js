import { Logo } from './animations/logo';
const ScrollTrigger = require('scrolltrigger-classes');

document.addEventListener('DOMContentLoaded', function() {
	var trigger = new ScrollTrigger();
});

$(document).ready(function() {
	Logo.initLogoSpin();

	$('.slide-btn').on('click', function() {
		$('.skill-slide-1').toggleClass('slide-closed');
		$('.skill-slide-2').toggleClass('slide-open');
		$('.next').toggleClass('slide-open');
	});
});
