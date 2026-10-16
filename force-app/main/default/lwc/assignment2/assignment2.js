import { LightningElement } from 'lwc';

export default class Assignment2 extends LightningElement {

    contactRecord = {};

    handleInput(event) {
        event.preventDefault();
        let element = event.target;
        let name = element.name;
        let value = element.value;
        this.contactRecord[name] = value;
    }

    handleClick() {
        console.log("contactRecord: ", JSON.stringify(this.contactRecord));
    }
}