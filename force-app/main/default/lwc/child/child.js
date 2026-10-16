import { api, LightningElement, track } from 'lwc';

export default class Child extends LightningElement {

    @track userList = [];
    name = 'LWC';

    accountName;

    @api
    get users() {
        return this.userList;
    }

    set users(value) {
        console.log("SETTER: ", JSON.stringify(value));
        this.userList = value;
    }

    handleClick(event) {
        event.preventDefault();
        this.name = 'Zamin Khan';
        this.users = [{}];
    }

    handleSlotChange() {
        console.log('Slot Changes');
    }

    handleChange(event) {
        this.accountName = event.target.value;
    }

    @api clickMe(){
        console.log("Child Method Clicked ....");
    }

    @api
    handleValidate(value, value1) {
        // console.log("Child Component Clicked ....");
        // console.log(value);
        // console.log(value1);
        // console.log("this.accountName: ", this.accountName.length);
        // let clonedInput = JSON.parse(JSON.stringify(allInputs));

        let allInputs = this.template.querySelectorAll("lightning-input");

        const allValid = [...allInputs].reduce(
            (validSoFar, inputCmp) => {
                inputCmp.reportValidity();
                return validSoFar && inputCmp.checkValidity();
            },
            true,
        );
        // console.log("All Valid: ", allValid);
        return allValid;
    }
}