export class PromotionItems {
  constructor(promUrl) {
    this.promotionUrl = promUrl;
    this.image = _image;
    this.title = _title;
    this.description = _description;
  }
}
export default class promotion {
  constructor(_image, _title, _description) {
    this.image = _image;
    this.title = _title;
    this.description = _description;
  }
  Render() {}
  Download(targetElement) {
    fetch(`{$this.promotionUrl}/latest`)
    .then(result=>{
      result.json();
      }
  )}

  }
