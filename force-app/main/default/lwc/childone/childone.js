import { api, LightningElement } from 'lwc';

export default class Childone extends LightningElement {


    @api handleClick() {
        let clickEvent = new CustomEvent('success', {
            detail: {
                accountName: 'Test Account',
                accountId: '0011t00000Gv6gFAAR',
                contacts: [
                    { name: 'John Doe' },
                    { name: 'Jane Doe' },
                    { name: 'Jack Doe' },
                ]
            },
            bubble: true,
            composed: false
        })
        this.dispatchEvent(clickEvent);
        // console.log(JSON.stringify(clickEvent.detail));

        // let clickEvent = new CustomEvent('click', {
        //     detail: {
        //         contacts: this.users
        //     }
        // })
        // this.dispatchEvent(clickEvent);
    }

}