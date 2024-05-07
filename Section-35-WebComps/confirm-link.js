// extending the anchor tag with our own logic. 
// us is attribute with built in tag for extending specific tags
class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            if(!confirm('Do you want to proceed')){
                event.preventDefault();
            }
        });
    }
}
customElements.define('confirm-tag', ConfirmLink, { extends: 'a' });