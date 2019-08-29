import DOMProjects from './DOMProjects';
import { Projects } from '../data/Projects';

export default class ProjectSection {
	constructor() {
		this.projects = new DOMProjects(Projects);
		this.$projectGrid = $('.projects-grid');
	}

	addProject(num = 1) {
		for (var i = 0; i < num; i++) {
			if (this.projects.getRemainingProjectsCount()) {
				this.$projectGrid.append($.parseHTML(this.projects.getProject()));
				var $projects = $('.project');
				if (!this.projects.getRemainingProjectsCount()) {
					$('.more-btn').addClass('hidden');
				}
				setTimeout(() => {
					$projects.removeClass('adding');
				}, 0);
			}
		}
	}

	initBtn() {
		const self = this;
		$('.more-btn p').on('click', () => {
			self.addProject();
		});
	}
}
