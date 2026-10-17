import { LightningElement, api } from "lwc";

export default class CreateAccountModal extends LightningElement {
  @api content;
  @api close(result) {
    return Promise.resolve(result);
  }

  handleClick(event) {
    event.preventDefault();
    this.close("cancel");
    // this.close(parseInt(target.dataset.id, 10));
  }

  handleSave(event) {
    event.preventDefault();
    this.close({
      recordId: "0098765423VHG"
    });
  }
}
