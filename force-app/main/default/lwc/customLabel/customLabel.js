import { LightningElement } from 'lwc';

import FirstName from '@salesforce/label/c.First_Name';
import LastName from '@salesforce/label/c.Last_Name';
import Email from '@salesforce/label/c.Email';

export default class CustomLabel extends LightningElement {
    labels = {
        Email: Email,
        FirstName: FirstName,
        LastName: LastName
    }
}