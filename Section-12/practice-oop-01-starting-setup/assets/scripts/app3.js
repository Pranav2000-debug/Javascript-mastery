class Tooltip {

}

class ProjectItem {
	constructor(id, switchHandlerFn) {
		this.id = id;
		this.switchHandlerFn = switchHandlerFn;
		this.connectSwitchButton();
		this.connectMorehButton();
	}

	connectSwitchButton() {
		const projectItemElement = document.getElementById(this.id);
		const switchBtn = projectItemElement.querySelector('button:last-of-type');
		switchBtn.addEventListener('click', this.switchHandlerFn.bind(null, this.id));
	}
	connectMorehButton() {

	}
}

class ProjectList {	
	projects = []; // empty array field, translated to a property.\

	constructor(type) {
		this.type = type;
		const prjItems = document.querySelectorAll(`#${type}-projects li`);
		for(const prjItem of prjItems){
			this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this))); // creating an array of objects based on ProjectItem class that has ID property.
		}
		console.log(this.projects);
	}

	setSwitchHandlerFunction(switchHandlerFunction) {
		this.switchHandler = switchHandlerFunction;
	}
	addProject(project) {
		this.projects.push(project);
		console.log(this);
	}
	switchProject(projectId) {
		this.switchHandler(this.projects.find(item => item.id === projectId));
		this.projects = this.projects.filter(item => item.id !== projectId);
	}
}




class App {
	static init() {
		const activeProjectsList = new ProjectList('active');
		const finishedProjectsList = new ProjectList('finished');
		activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
		finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
	}
}
App.init();