class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
    element.scrollIntoView({behavior: 'smooth'});
  }
}

class Component {
  constructor(hostElement, insert = false) {
    if (hostElement) {
      this.hostElementId = document.getElementById(hostElement);
    } else {
      this.hostElementId = document.body;
    }
    this.insert = insert;
  }

  detach() {
    this.element.remove();
  }
  attach() {
    document.body.append(this.element);
    this.hostElementId.insertAdjacentElement(
      this.insert ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunc, text, hostElementId) {
    super(hostElementId);
    this.text = text;
    this.closeNotifierFunc = closeNotifierFunc;
    this.create();
  }
  closeToolTip() {
    this.detach();
    this.closeNotifierFunc();
  }
  create() {
    const toolTipElement = document.createElement("div");
    toolTipElement.className = "card";
    const toolTipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(toolTipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    toolTipElement.append(tooltipBody);

    
    const hostElPostLeft = this.hostElementId.offsetLeft;
    const hostElPostTop = this.hostElementId.offsetTop;
    const hostElHeight = this.hostElementId.clientHeight;
    const parentScrollHeight = this.hostElementId.parentElement.scrollTop;

    const x = hostElPostLeft + 20;
    const y = hostElPostTop + hostElHeight - parentScrollHeight - 10;

    toolTipElement.style.position = 'absolute';
    toolTipElement.style.left = x + 'px';
    toolTipElement.style.top = y + 'px';

    toolTipElement.addEventListener("click", this.closeToolTip.bind(this));
    this.element = toolTipElement; // setting element property  
  }
}

class ProjectItem {
  hasActiveTooltip = false;
  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showToolTip() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      toolTipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
    tooltip.element.scrollIntoView();
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfroBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfroBtn.addEventListener("click", this.showToolTip.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
