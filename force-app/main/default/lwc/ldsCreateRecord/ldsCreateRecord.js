import { LightningElement } from 'lwc';
/* Create the Record */
import { createRecord } from 'lightning/uiRecordApi';
/* Account Object */
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
// import NAME_FIELD from '@salesforce/schema/Account.Name';

/* Contact Object */
import CONTACT_OBJECT from '@salesforce/schema/Contact';
// import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
// import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
// import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';

export default class LdsCreateRecord extends LightningElement {

    accountRecordFields = {};  // API Name => Value
    contactRecordFields = {};

    handleClick(event) {
        event.preventDefault();

        let allValid = this.handleValidate();
        if (!allValid) {
            return;
        }

        let fields = this.accountRecordFields;
        fields['Phone'] = '9087654321';
        fields['Fax'] = '9087654321';
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields
        };

        createRecord(recordInput) // Promise, then, catch, finally
            .then((result) => {
                if (result) {
                    let accountId = result.id;
                    console.log('Account Created Successfully with Id: ', accountId);
                    this.handleContactCreate(accountId);
                }
            })
            .catch((error) => {
                console.error('Error creating account: ', JSON.stringify(error));
            }).finally(() => {
                console.log('Account Creation Process Completed');
            });
    }

    handleContactCreate(accountId) {
        console.log(JSON.stringify(ACCOUNTID_FIELD));
        let fields = this.contactRecordFields;
        fields[ACCOUNTID_FIELD.fieldApiName] = accountId;
        // fields['AccountId'] = accountId;
        fields['Phone'] = '9087654321';
        fields['Fax'] = '9087654321';
        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields
        }
        createRecord(recordInput)
            .then((result) => {
                if (result) {
                    let contactId = result.id;
                    console.log('Contact Created Successfully with Id: ', contactId);
                }
            })
            .catch((error) => {
                console.error('Error creating contact: ', JSON.stringify(error));
            }).finally(() => {
                console.log('Contact Creation Process Completed');
            });
    }

    handleAccountInputChange(event) {
        event.preventDefault();
        let { name, value } = event.target;
        this.accountRecordFields[name] = value;
        // console.log(value);

    }

    handleContactInputChange(event) {
        event.preventDefault();
        let { name, value } = event.target;
        this.contactRecordFields[name] = value;
        // console.log(value);
    }

    handleValidate() {
        // let reducedArray = array.reduce((acc, item, index, array) => {
        //     return condition;
        // }, true)
        const allValid = [
            ...this.template.querySelectorAll('lightning-input')
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        return allValid;
    }
}