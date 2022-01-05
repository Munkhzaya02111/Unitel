// export class PromotionItems {
//   constructor(promUrl) {
//     this.promotionUrl = promUrl;
//     this.image = _image;
//     this.title = _title;
//     this.description = _description;
//   }
// }
// export default class promotion {
//   constructor(_image, _title, _description) {
//     this.image = _image;
//     this.title = _title;
//     this.description = _description;
//   }
//   Render() {}
//   Download(targetElement) {
//     fetch(`https://api.jsonbin.io/b/61891aeb820eda3cc819bb09/1/latest`).then(
//       (result) => {
//         result.json();
//       }
//     );
//   }
// }
export let uramshuulal = {
  uramshuulal: function (zurag, alt, garchig, tailbar) {
    this.img = zurag;
    this.alt = alt;
    this.title = garchig;
    this.description = tailbar;
    return this;
  },
  CreateHTML: function () {
    let returnHTML = "";
    return (returnHTML += `
    <div class="medeelel"> 
      <li>
        <img class = "zurag" src = "${this.img}" alt = "${this.alt}" >
        <h1 class = "title">${this.title}</h1>
        <p class = "desc"> ${this.description} </p>
      </li>
    </div>
    `);
  }
};

// export function getUramsh(url, callMeBack) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       let uramsh = [];
//       data.promotion.forEach((promo) => {
//         uramsh.push(new Promo(promo.img, promo.title, promo.description));
//       });
//       callMeBack(uramsh);
//     });
// }
// '\
//       <article>\
//       <h1 class="title">' +
//       this.title +
//       '</h1>\
//       <p class="desc">' +
//       this.description +
//       "</p>\
//       </article>");
export function getUramsh(url, callMeBack) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callMeBack(data.promotion);
    });
}
