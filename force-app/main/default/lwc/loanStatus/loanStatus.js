import { LightningElement, track } from "lwc";

export default class LoanStatus extends LightningElement {
  currentStep = "Technology";

  @track options = [
    { label: "Education", value: "Education" },
    { label: "Banking", value: "Banking" },
    { label: "Technology", value: "Technology" },
    { label: "Aparel", value: "Aparel" },
    { label: "Chemical", value: "Chemical" }
  ];

  handleItemClick(event) {
    event.preventDefault();
    this.currentStep = event.currentTarget.value;
    console.log(this.currentStep);
  }
}
