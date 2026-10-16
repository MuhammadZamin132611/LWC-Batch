import { LightningElement } from 'lwc';

export default class UserForm extends LightningElement {

    name = '';
    email = '';
    phone = '';
    address = '';
    userData;


    handleName(event) {
        this.name = event.target.value;
    }

    handleEmail(event) {
        this.email = event.target.value;
    }

    handlePhone(event) {
        this.phone = event.target.value;
    }

    handleAddress(event) {
        this.address = event.target.value;
    }


    handleSubmit() {

        const userData = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address
        };

        this.userData = userData;


        // console.log('UserDate', JSON.stringify(userData));

    }
}