import { LightningElement, wire, track, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactService.getContactList';
import imperativeApex from '@salesforce/apex/ContactService.getContactList';
import mapDemo from '@salesforce/apex/ContactService.mapDemo';
import helloWorld from '@salesforce/apex/ContactService.helloWorld';

export default class ContactList extends LightningElement {

    @track records;
    @track errors;
    @api recordId;

    // @wire(helloWorld)
    // hello({ error, data }) {
    //     if (error) {
    //         console.error('Error hello world method', error);
    //     } else if (data) {
    //         console.error('hello world method', data);
    //     }
    // };

    @wire(getContactList, { recordId: '$recordId', firstName: '' })
    wiredContacts({ error, data }) {
        if (error) {
            this.errors = error
            console.log(JSON.stringify(error))
        } else if (data) {
            // Clone the Object/Array
            let clonedData = JSON.parse(JSON.stringify(data));
            console.log('clonedData', JSON.stringify(clonedData))
            clonedData.forEach((item, index, array) => {
                if (item.AccountId) {
                    item.ACCOUNT_NAME = item.Account.Name;
                }
            });
            this.records = clonedData;
            console.log(data);
        }
    }

    handleClick() {
        // this.recordId = 'SOME_OTHER_VALUE';

        imperativeApex({
            recordId: this.recordId,
            firstName: 'Kirti'
        })
            .then((result) => {
                console.log('imperativeApex: ', result);
            })
            .catch((error) => {
                console.error('Error: ', error);
            })
            .finally(() => {
                console.log('FINALLY EXECUTED !!!');
            });
    }

    handleButtonClick(event) {
        event.preventDefault();
        let params = {
            FirstName: 'md',
            LastName: 'zamin',
            Email: 'md@gmail.com',
            Phone: '890654321',
            AccountId: '89999',
            Title: 'SFDC',
            Fax: '789989',
            Address: '124',
            Age: 123,
            Salary: 8676678.89,
            IsAdmin: true
        }
        mapDemo({ params: JSON.stringify(params) })
            .then((result) => {
                console.log('imperativeApex: ', result);
            })
            .catch((error) => {
                this.errors = error;
                console.error('Error: ', error);
            })
            .finally(() => {
                console.log('FINALLY EXECUTED !!!');
            });
    }
}