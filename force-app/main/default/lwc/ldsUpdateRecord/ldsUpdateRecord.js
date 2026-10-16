import { api, LightningElement } from 'lwc';
import { updateRecord, deleteRecord } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Account.Id';
import Name_FIELD from '@salesforce/schema/Account.Name';

export default class LdsUpdateRecord extends LightningElement {

    @api recordId;
    isLoading = false;

    handleClick(event) {
        event.preventDefault();
        this.isLoading = true;
        const fields = {};
        // ID_FIELD.fieldApiName => Id
        // Name_FIELD.fieldApiName => Name
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[Name_FIELD.fieldApiName] = 'LDS Update Record';

        const recordInput = {
            fields
        }
        updateRecord(recordInput)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error: ", error);
            })
            .finally(() => {
                // spinner
                this.isLoading = false;
            })
    }

    handleDeleteClick(event) {
        event.preventDefault();

        deleteRecord(this.recordId)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error: ", error);
            })
            .finally(() => {
                // spinner
                this.isLoading = false;
            })
    }
}