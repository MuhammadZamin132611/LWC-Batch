import { LightningElement } from 'lwc';
import { APPLICATION_SCOPE, createMessageContext, MessageContext, publish, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import LwcTraning from '@salesforce/messageChannel/LwcTraning__c';


export default class PublisherComponent extends LightningElement {

    messageContext = createMessageContext();

    handleClick(event) {
        event.preventDefault();

        let message = {
            recordName: 'Salesforce.com',
            recordId: '887564',
            record: {
                recordName: 'Salesforce.com',
                recordId: '887564',
            }
        };

        publish(this.messageContext, LwcTraning, message);
    }

    disconnectedCallback() {
        releaseMessageContext(this.messageContext);
        this.messageContext = undefined;
    }
}