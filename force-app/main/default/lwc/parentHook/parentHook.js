import { LightningElement } from 'lwc';
import getContactListNoParams from '@salesforce/apex/ContactService.getContactListNoParams'
import HELLO_TEMPLATE from './helloWorld.html';
import MAIN_TEMPLATE from './parentHook.html';

import userId from '@salesforce/user/Id';
import local from '@salesforce/i18n/local';
/* POSSIBLE_VALUES => lang, dir, locale, currency, firstDayOfWeek, timeZone */
/*MORE: https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_i18n*/


export default class ParentHook extends LightningElement {
    greeting = '';
    showChild = true;

    Id = userId;

    isRender = false;

    render() {
        return this.showChild ? HELLO_TEMPLATE : MAIN_TEMPLATE;
    }

    constructor() {
        super();
        console.log('constructor in parent');
        this.greeting = 'Hello';
        console.log('constructor in parent: ', this.greeting);
    }

    connectedCallback() {
        console.log('connectedCallback in parent');
    }

    errorCallback(error, stack) {
        console.log("Error in parent is: ", error, 'Stack in parent: ', stack);
    }

    renderedCallback() {
        if (this.isRender) {
            return;
        }
        this.isRender = true;
        console.log('Rendered Callback on Parent');
        this.handleContactList();
    }

    handleContactList() {
        getContactListNoParams({ recordId: '', firstName: '' })
            .then((result) => {
                console.log('Contact List RESULT: ', result);
            })
            .catch((error) => {
                console.error("Contact List ERROR: ", error)
            })
    }

    handleClick() {
        if (this.showChild) {
            this.showChild = false;
        } else {
            this.showChild = true;
        }
    }
}