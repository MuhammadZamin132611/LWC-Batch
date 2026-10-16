import { api, LightningElement, track, wire } from 'lwc';
import { getObjectInfo, getObjectInfos, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class ObjectInfoApi extends LightningElement {

    @api objApiName = 'Account';
    @api fieldApiName = 'Type';
    @api recordTypeId = '012000000000000AAA'
    @api label = 'Indutry';
    @api footer = 'Home Page'

    /*FINAL_FIELD = {
        objectApiName: 'Account',
        fieldApiName: 'Industry'
    }*/


    @track accountObjectInfo;

    @track industryOption = [];

    @wire(getObjectInfo, { objectApiName: '$objApiName' })
    wiredAccountInfo({ error, data }) {
        if (data) {
            // console.log('Account Object Information ', data);
        } else if (error) {
            console.error("Error ", error)
        }
    }

    @wire(getPicklistValuesByRecordType, { objectApiName: '$objApiName', recordTypeId: '$recordTypeId' })
    wiredAccountIndustryInfo({ error, data }) {
        if (data) {
            // console.log('Account Object Picklist Industry: ', data);
            let picklistFieldValues = data.picklistFieldValues;
            if (picklistFieldValues && picklistFieldValues[this.fieldApiName]) {
                this.industryOption = picklistFieldValues[this.fieldApiName].values;
            }
        } else if (error) {
            console.error("Error ", error)
        }
    };

    handleChange(event) {
        event.preventDefault();
        let selectedEvent = new CustomEvent('picklistChanged', {
            detail: {
                objectApiName: this.objApiName,
                fieldApiName: this.fieldApiName,
                value: event.target.value
            }
        });
        this.dispatchEvent(selectedEvent);
    }

    /* @wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: '$FINAL_FIELD' })
    wiredAccountIndustryInfo({ error, data }) {
        if (data) {
            // console.log('INDUSTRY_FIELD ', INDUSTRY_FIELD);
            this.industryOption = data.values;
            console.log('Account Industry: ', data);
        } else if (error) {
            console.error("Error ", error)
        }
    };

    get options() {
        return [
            { label: 'Education', value: 'Education' },
            { label: 'Banking', value: 'Banking' },
            { label: 'Aparel', value: 'Aparel' },
            { label: 'Technology', value: 'Technology' },
            { label: 'Chemical', value: 'Chemical' },
        ]
    }*/
}