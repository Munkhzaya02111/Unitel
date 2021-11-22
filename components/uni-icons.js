// <uni-icon></uni-icon>
let html = String.raw;
class UniIcons extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.innerHTML = html`<img [src=${this.getAttribute("src")} alt="icons"]>
  }
  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(attrName, oldVal, newVal) {}
}

window.customElements.define("uni-icons", UniIcons);