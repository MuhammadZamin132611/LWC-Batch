import { LightningElement } from 'lwc';

import { APPLICATION_SCOPE, createMessageContext, MessageContext, publish, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import LwcTraning from '@salesforce/messageChannel/LwcTraning__c';

export default class SubscriberComponent extends LightningElement {
    messageContext = createMessageContext();

    responseString = '';

    connectedCallback() {
        const callBackFun = this.handleResponse.bind(this);
        subscribe(this.messageContext, LwcTraning, callBackFun);
    }

    handleResponse(response) {
        console.log("RESPONSE RECIVED FROM LMS: ", JSON.stringify(response));
        this.responseString = JSON.stringify(response, null, 2);
        console.log("RESPONSE this.responseString: ", this.responseString);
    }

    disconnectedCallback() {
        releaseMessageContext(this.messageContext);
        this.messageContext = undefined;
    }
}