import { api, LightningElement } from 'lwc';

export default class GetterSetters extends LightningElement {


    @api opportunityRecord = [] // from parent (read only)

    welcomeMessage = 'Welcome to Salesforce World!';
    upperCase;
    localRecords = []; // Local Copy

    get options() {
        return [
            {},
            {},
            {},
        ]
    }

    get contactRecords() {
        return this.localRecords;
    }

    @api
    set contactRecords(value) {
        this.localRecords = value;
        array.forEach(currentItem => {
            //TODO : currentItem
        });
    }

    get name() { // property / variable
        return this.upperCase;
    }

    set name(value) {
        // process - Apex Class / fetch method / business logic / uiRecordApi
        this.upperCase = value.toUpperCase();
    }

    // getters without a setter is readonly

    handleClick() {
        this.welcomeMessage = 'Welcome to LWC'
        this.name = 'Amit Singh';
        // this.contactRecords = [];
    }
}