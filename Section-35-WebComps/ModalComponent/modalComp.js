export class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: "open",
    });
    this.isOpen = false;
    this._modalTitle;
    this.shadowRoot.innerHTML = `
        <style>
            #backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0, 2, 0, 0.5);
                z-index: 10;
                opacity: 0;
                pointer-events: none;
            }
        
            :host([opened]) #backdrop,
            :host([opened]) #modal {
                opacity: 1;
                pointer-events: all;
            }
						header {
							border-bottom: 1px solid #ccc;
						}
            #modal {
                z-index: 20;
                position: fixed;
                top: 10vh;
                left: 25%;
                width: 50%;
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 2rem;
                opacity: 0;
                pointer-events: none;
								transition: all 0.3s ease-out;
            }
						:host([opened]) #modal {
							top:15vh;

						}
            #actions {
                display: flex;
                gap: 1rem;
                justify-content: flex-end;
                align-items: center;
                margin-top: 1rem;
            }
						::slotted(h1) {
							font-size: 2.25rem
							margin: 0;
						}
            hr {
                border: none;
                border-top: 3px double lightgray;
                height: 3px;
                width: 100%;
                margin: 0;
            }
        
            #actions button {
                padding: 0.5rem 0.8rem;
                border-radius: 5px;
                border: none;
                background-color: blue;
                font-weight: bold;
                color: whitesmoke;
                cursor: pointer;
            }
        
            #actions button:hover {
                background-color: #3737f6f2;
            }
        
            #main {
                margin: 2rem 0;
            }
        
            ::slotted(p) {
                color: gray;
            }
        </style>
        
        <div id="backdrop"></div>
        <div id="modal">
            <header>
                <!--	<h1>Please Confirmsss</h1> -->
                <slot name="title">
                    <h1>
                        Add your own text for h1 tag to use
                    </h1>
                </slot>
            </header>
            <section id="main">
                <slot></slot>
            </section>
            <section id="actions">
                <hr>
                <button>Cancel</button>
                <button>Confirm</button>
            </section>
        </div>
        `;

    const slots = this.shadowRoot.querySelectorAll("slot");
    slots[1].addEventListener("slotchange", (e) => {
      console.dir(slots[1].assignedNodes());
    });
    const cancelBtn = this.shadowRoot.querySelector("button:first-of-type");
    const confirmBtn = this.shadowRoot.querySelector("button:last-of-type");

    cancelBtn.addEventListener("click", this._cancel.bind(this));
    confirmBtn.addEventListener("click", this._confirm.bind(this));

    this.shadowRoot
      .querySelector("#backdrop")
      .addEventListener("click", (e) => {
        // e.stopPropagation();
        if (e.currentTarget === e.target) {
          this.hide();
        }
      });
  }

  connectedCallback() {}
  // 1. Use this or we can use attribute CSS selector using :host from within innerHTML;
  // attributeChangedCallback(name, oldValue, newValue){
  // if(name === 'opened') {
  // if(this.hasAttribute('opened')) {
  // this.shadowRoot.querySelector('#backdrop').style.opacity = 1;
  // this.shadowRoot.querySelector('#backdrop').style.pointerEvents = 'all';

  // this.shadowRoot.querySelector('#modal').style.opacity = 1;
  // this.shadowRoot.querySelector('#modal').style.pointerEvents = 'all';
  // }
  // }
  // }
  // static get observedAttributes() {
  // return ['opened'];
  // }
  // 2.

  open() {
    // controlling visibility from CSS itself. only giving it attribute here
    if (!this.hasAttribute("opened")) {
      console.log("check passed");
      this.setAttribute("opened", "");
      this.isOpen = true;
    }
  }

  hide() {
    if (this.hasAttribute("opened")) {
      this.removeAttribute("opened");
      this.isOpen = false;
    }
  }

  _cancel(event) {
    this.hide();
    const cancelEvent = new Event("cancel", {
      bubbles: true, // EVENT DELEGATION
      composed: true, // if true, event may leave the shadow dom if it is one. and addeventlistener outside our component.
    });
    event.target.dispatchEvent(cancelEvent);
  }
  _confirm() {
    this.hide();
    const confirmEvent = new Event("confirm");
    this.dispatchEvent(confirmEvent);
  }
}



