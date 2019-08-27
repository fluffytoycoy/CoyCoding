import { Logo } from './animations/logo';
import SkillBtn from './SkillSection/SkillBtn';
import ProjectSection, { addProject } from './ProjectsSection/ProjectsSection';
const ScrollTrigger = require('scrolltrigger-classes');

document.addEventListener('DOMContentLoaded', function() {
	var trigger = new ScrollTrigger();
});

$(document).ready(function() {
	const projectSection = new ProjectSection();
	Logo.initLogoSpin();
	projectSection.initBtn();
	projectSection.addProject(3);
});
