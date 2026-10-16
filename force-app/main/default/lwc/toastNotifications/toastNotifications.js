import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastNotifications extends LightningElement {


    connectedCallback() {

        /* let url = location.protocol + '//' + location.host; // get current url location
            // location.href
            // location.href.substring(0, location.href.indexOf('.com/'))
        */
        let url = 'https://www.google.com';

        let errorToast = new ShowToastEvent({
            title: 'Error',
            message: 'Record {0} was created Click {1} to visit the record! {2} blah blah {3}',
            messageData: [
                'Google.com',
                {
                    url,
                    label: 'here'
                },
                'Salesfoce.com',
                {
                    url,
                    label: 'Salesfoce.com'
                }
            ],
            variant: 'success',
            mode: 'sticky'
        })
        this.dispatchEvent(errorToast);

        /* let errorToast = new ShowToastEvent({
            title: 'Error',
            message: 'Error Message Here',
            variant: 'Error',
            mode: 'sticky'
        })
        this.dispatchEvent(errorToast);

        let successToast = new ShowToastEvent({
            title: 'Success',
            message: 'Success Message Here',
            variant: 'success',
        })
        this.dispatchEvent(successToast);

        let warningToast = new ShowToastEvent({
            title: 'Warning',
            message: 'Warning Message Here',
            variant: 'warning',
        })
        this.dispatchEvent(warningToast);

        let infoToast = new ShowToastEvent({
            title: 'Info',
            message: 'Info Message Here',
            variant: 'info',
        })
        this.dispatchEvent(infoToast);
        */
    }
}