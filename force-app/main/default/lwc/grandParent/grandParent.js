import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {


    handleChildEvent(event) {
        let detail = event.detail;
        console.log('Grand Parent Component');
        console.log(JSON.stringify(detail));
        console.log(detail.accountName);
        console.log(detail.accountId);
    }
}