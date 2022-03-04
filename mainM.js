import { uramshuulal, getUramsh } from "./modules/module.js";

const url = "https://api.jsonbin.io/b/61891aeb4a56fb3dee0b4918/latest";
getUramsh(url, (newPr) => {
  let returnHTML = "";

  newPr.forEach((element) => {
    returnHTML += uramshuulal
      .uramshuulal(element.img, element.alt, element.title, element.description)
      .CreateHTML();
  });
  document.getElementById("promo").innerHTML = returnHTML;
});
