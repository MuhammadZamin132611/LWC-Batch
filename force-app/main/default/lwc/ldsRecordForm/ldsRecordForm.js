import { api, LightningElement, track } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class LdsRecordForm extends LightningElement {

    @api recordId;

    @track fields = [
        NAME_FIELD,
        INDUSTRY_FIELD,
        { objectApiName: 'Account', fieldApiName: 'Type' },
        { objectApiName: 'Account', fieldApiName: 'Phone' },
    ]

    handleSuccess(event) {
        event.preventDefault();
        console.log('Record has been saved successfully with Id:');
    }

    handleError(event) {
        event.preventDefault();
        console.error('Error: ' + JSON.stringify(event.detail));
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Record Submitted");
        console.log('Submit: ' + JSON.stringify(event.detail));

        const fields = event.detail.fields;
        fields.ParentId = "";
        this.template.querySelector("lightning-record-form").submit(fields);

        const evt = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + this.recordId,
            variant: "success",
        });
        this.dispatchEvent(evt);
    }

    handleCancel(event) {
        event.preventDefault();
        console.log("Record Cancelled");
        const evt = new ShowToastEvent({
            title: "Account Not Updated",
            message: "Record ID: " + this.recordId,
            variant: "warning",
        });
        this.dispatchEvent(evt);
    }

    handleLoad(event) {
        // event.preventDefault();
        console.log("Record Loaded");
    }
}