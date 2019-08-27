import { Logo } from './animations/logo';
import SkillBtn from './SkillSection/SkillBtn';
import ProjectsBtn from './ProjectsSection/ProjectsBtn';
const ScrollTrigger = require('scrolltrigger-classes');

document.addEventListener('DOMContentLoaded', function() {
	var trigger = new ScrollTrigger();
});

$(document).ready(function() {
	Logo.initLogoSpin();
});
