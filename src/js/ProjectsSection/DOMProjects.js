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
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <ul class="skills">
                    <li>
                      <div class="bullet-point"></div>Skill
                    </li>
                    <li>
                      <div class="bullet-point"></div>Skill
                    </li>
                    <li>
                      <div class="bullet-point"></div>Skill
                    </li>
                  </ul>
                  <p>
                    <b class="blue">Authors Notes: </b>voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  </p>
                </div>
                <div class="project-btns">
                  <div>
                    git hub
                  </div>
                  <div>
                    live site
                  </div>
                </div>
              </div>
          </div>
        </div>`;
		}
	}

	getRemainingProjectsCount() {
		return this.projectArr.length;
	}
}
