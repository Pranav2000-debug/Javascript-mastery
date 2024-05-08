class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'dummy text';
		this._tooltipIcon;
    this.attachShadow({ mode: 'open' });
    // const template  = document.querySelector('#tooltip-template');
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.innerHTML = `
    <style>
      div {
        font-weight: bold;
        background-color: whitesmoke;
        color: black;
        position: absolute;
        top: 1.7rem;
        left: 0.75rem;
        z-index: 10;
        padding: 1rem 0.8rem;
        border-radius: 72% 28% 83% 17% / 23% 69% 31% 77% ;
        box-shadow: 1px 1px 6px rgba(0,0,0,0.26)
      }
      :host {
        color: white;
        position: relative;
      }
      span {
        background-color: white;
        color: black;
        border-radius: 60%;
        padding: 3px 8px;
      }
    </style>
    <slot></slot> 
    <span>?</span>
    `;
  }
  // called by dfalt only after the customElement is added/inserted to the DOM.
  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }
    // const tooltipIcon = document.createElement("span");
    this._tooltipIcon = this.shadowRoot.querySelector('span');
    // tooltipIcon.textContent = " (?)";
		this._tooltipIcon.addEventListener("mouseenter", this._showToolTip.bind(this));
    this._tooltipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    // this.shadowRoot.appendChild(tooltipIcon);
    // this.style.color = 'whitesmoke'
    // this.style.position = 'relative';
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(oldValue === newValue) {
			return;
    }
		if(name === 'text') {
			this._tooltipText = newValue;
		}
  }

  static get observedAttributes() {
    return ['text']; // listen to attribute changes
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

	disconnectedCallback() { // Clean up event listeners
		this._tooltipContainer.removeEventListener('mouseenter', this._showToolTip); 
		this._tooltipContainer.removeEventListener('mouseleave', this._hideToolTip);
		console.log('Disconnected');
	}
}

// takes two args - 'HTML Tag (has to be a single word, separated by a dash. Prefix has to be a unique tag [norm]', 'The JS class';
customElements.define("tp-tooltip", ToolTip);
