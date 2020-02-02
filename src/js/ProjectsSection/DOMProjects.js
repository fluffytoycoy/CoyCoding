export default class DOMProjects {
	constructor(projectArr) {
		this.projectArr = projectArr;
	}
	getProject() {
		if (this.projectArr.length) {
			const project = this.projectArr.pop();
			return `<div class="project adding">
          <div class="square">
            <div class="img-wrapper">
              <img src="${project.img}"/>
            </div>
          </div>
          <div class="project-info">
              <div class="project-details">
                <h2>${project.name}</h2>
                <div class="info">
                  <p>
                    ${this.getProductDescription(project)}
                  </p>
                  <div class="skills">
										${this.getBulletPointsDOM(project)}
                  </div>
									${this.getAuthorsNotes(project)}
                </div>
                <div class="project-btns">
                  <a target="_blank" href="${project.githubLink}">
										<div>
	                    source code
	                  </div>
									</a>
									<a target="_blank" href="${project.siteLink}">
	                  <div>
	                    demo
	                  </div>
									</a>
                </div>
              </div>
          </div>
        </div>`;
		}
	}

	getBulletPointsDOM(project){
		const test = project.bulletPoints.map(skill=>{
			return `<div class="bullet-point"><i class="fas fa-circle"></i>${skill}</div>`
		})
		return test.join('');
	}

	getProductDescription(project){
		return project.description;
	}

	getAuthorsNotes(project){
		return project.authorsNotes
		? `<p><b>Authors Notes: </b>${project.authorsNotes}</p>`
		:	'';
	}

	getRemainingProjectsCount() {
		return this.projectArr.length;
	}
}
