class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'dummy text';
    this.attachShadow({ mode: 'open' });
    // const template  = document.querySelector('#tooltip-template');
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.innerHTML = `
    <style>
      div {
        background-color: whitesmoke;
        color: black;
        position: absolute;
        z-index: 10;
      }
    </style>
    <slot></slot> 
    <span> (?)</span>
    `;
  }
  // called by dfalt only after the customElement is added/inserted to the DOM.
  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }
    // const tooltipIcon = document.createElement("span");
    const tooltipIcon = this.shadowRoot.querySelector('span');
    // tooltipIcon.textContent = " (?)";
    tooltipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    // this.shadowRoot.appendChild(tooltipIcon);
    this.style.color = 'whitesmoke'
    this.style.position = 'relative';
  }

  // private method to this class using underscore (psuedoPrivate method)
  _showToolTip() {
    this._tooltipContainer = document.createElement("div");
    // this._tooltipContainer.style.backgroundColor = 'whitesmoke';
    // this._tooltipContainer.style.color = 'black';
    // this._tooltipContainer.style.position= 'absolute';
    // this._tooltipContainer.style.zIndex= '10'
    this._tooltipContainer.textContent = this._tooltipText;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }
  _hideToolTip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

// takes two args - 'HTML Tag (has to be a single word, separated by a dash. Prefix has to be a unique tag [norm]', 'The JS class';
customElements.define("tp-tooltip", ToolTip);
