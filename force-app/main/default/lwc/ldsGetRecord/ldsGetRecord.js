import { api, LightningElement, track, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class LdsGetRecord extends LightningElement {
    @api recordId;
    @api objectApiName;

    accountRecord;
    @track errors;

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, PHONE_FIELD, INDUSTRY_FIELD, TYPE_FIELD] })
    wiredAccountRecord({error, data}){
        if(data){
            // console.log(data);
            this.accountRecord = data;
        }else if(error){
            console.error('Error', JSON.stringify(error));
            this.errors = error;
        }
    };

    get name(){
        return getFieldValue(this.accountRecord, NAME_FIELD);
    }
    
    get phone(){
        return getFieldValue(this.accountRecord, PHONE_FIELD);
    }

    get industry(){
        return getFieldValue(this.accountRecord, INDUSTRY_FIELD);
    }
    
    get type(){
        return getFieldValue(this.accountRecord, TYPE_FIELD);
    }
}