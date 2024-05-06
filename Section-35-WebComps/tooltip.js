class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'dummy text';
  }
  // called by dfalt only after the customElement is added/inserted to the DOM.
  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    tooltipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    this.appendChild(tooltipIcon);
  }

  // private method to this class using underscore (psuedoPrivate method)
  _showToolTip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    this.appendChild(this._tooltipContainer);
  }
  _hideToolTip() {
    this.removeChild(this._tooltipContainer);
  }
}

// takes two args - 'HTML Tag (has to be a single word, separated by a dash. Prefix has to be a unique tag [norm]', 'The JS class';
customElements.define("tp-tooltip", ToolTip);
