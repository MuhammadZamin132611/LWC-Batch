import { LightningElement } from "lwc";
import CREATE_NEW_MODAL from "c/createAccountModal";

export default class LayoutResponsive extends LightningElement {
  async handleClick(event) {
    event.preventDefault();

    const result = await CREATE_NEW_MODAL.open({
      title: "My Modal",
      description: "My First Modal",
      size: "large",
      content: "I am a value passed from the caselist component!"
    });
    if (result === "cancel") {
      // write condition here
    } else {
      console.log(JSON.stringify(result));
    }
  }
}
