import { api, LightningElement } from 'lwc';

export default class Prentone extends LightningElement {

    users = [
        {},
        {},
        {},
    ]

    @api handleClick() {
        let childComponent = this.template.querySelector('c-childone');
        if (childComponent) {
            childComponent.handleClick();
        }
    }

    handleChildEvent(event) {
        let detail = event.detail;
        console.log('Parent Component: Received event from child component');
        console.log(JSON.stringify(detail));
        console.log(detail.accountName);
        console.log(detail.accountId);
        const successEvent = new CustomEvent('success', {
            detail: {
                accountId: detail.accountId,
            },
            bubbles: true,
            composed: false
        });
        this.dispatchEvent(successEvent)
    }



}