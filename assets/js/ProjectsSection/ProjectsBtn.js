import DOMProjects from './DOMProjects';
import { Projects } from '../data/Projects';

const test = new DOMProjects(Projects);

$('.more-btn').on('click', function() {
	var $log = $('.projects-grid');
	$log.append($.parseHTML(test.getProject()));

	if (!test.getRemainingProjectsCount()) {
		$(this).addClass('hidden');
	}

	var $projects = $('.project');
	setTimeout(() => {
		$projects.removeClass('adding');
	}, 0);
});
