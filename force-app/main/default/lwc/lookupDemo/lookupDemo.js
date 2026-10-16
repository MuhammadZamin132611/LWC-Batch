import { LightningElement } from 'lwc';

export default class LookupDemo extends LightningElement {

    handleLookup(event) {
        event.preventDefault();

        let detail = event.detail;
        // console.log(JSON.stringify(detail));
    }
}