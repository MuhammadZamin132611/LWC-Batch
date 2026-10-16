import { api, LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class DesignComponent extends LightningElement {

    @wire(CurrentPageReference)
    currentPageRef({ state }) {
        if (state) {
            console.log(JSON.stringify(state));
        }
    };


    @api objectApiName;
    @api recordId;
    @api fieldApiName;
    @api noOfRecords;

    @api selectedRecordId;
}