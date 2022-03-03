export let uramshuulal = {
  uramshuulal: function (zurag, alt, garchig, tailbar) {
    this.img = zurag;
    this.alt = alt;
    this.title = garchig;
    this.description = tailbar;
    return this;
  },
  CreateHTML: function () {
    const html = String.raw;
    let returnHTML = "";
    return (returnHTML += html`
      <div class="medeelel">
        <li>
          <img class="zurag" src=${this.img} alt="${this.alt}" />
          <h1 class="title">${this.title}</h1>
          <p class="desc">${this.description}</p>
        </li>
      </div>
    `);
  }
};
export function getUramsh(url, callMeBack) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callMeBack(data.promotion);
    });
}
