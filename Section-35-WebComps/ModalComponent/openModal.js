import { Modal } from "./modalComp.js";
const showModal = document.querySelector("button");
const modal = document.querySelector("uc-modal");

showModal.addEventListener("click", () => {
  // if(!modal.hasAttribute('opened')) {
  //     modal.setAttribute("opened", "");
  // } 2. ORRRRRRRR
  if (!modal.isOpen) {
    console.log("next checked passed");
    modal.open();
  } else {
    console.log("already opened");
  }
});
// custom events outside component
modal.addEventListener('cancel', () => {
    console.log('cancelled');
});
modal.addEventListener('confirm', () => {
    console.log('Confirmed');
});
customElements.define("uc-modal", Modal);
