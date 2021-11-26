// <uni-icon></uni-icon>
let html = String.raw;
export default class UniIcons extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.src = this.getAttribute("src") || " ";
    this.alt = this.getAttribute("alt") || " ";
    this.title = this.getAttribute("title") || " ";
    this.desc = this.getAttribute("desc") || " ";
  }

  connectedCallback() {
    this.innerHTML = html`<div class="menu">
      <img src=${this.src} alt=${this.alt} />
      <h3>${this.title}</h3>
      <p>${this.desc}</p>
    </div> `;
  }
  disconnectedCallback() {}
  attributeChangedCallback(attrName, oldVal, newVal) {}
}

window.customElements.define("uni-icons", UniIcons);
