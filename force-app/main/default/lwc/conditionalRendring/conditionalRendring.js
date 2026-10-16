import { LightningElement, track } from 'lwc';

export default class ConditionalRendring extends LightningElement {
    showTom = false;
    showJerry = true;

    @track users = [
        { name: 'Muhammad Zamin', email: 'md@gmail.com' },
        { name: 'Muhammad Abbsa', email: 'abbas@gmail.com' },
        { name: 'Muhammad Kazim', email: 'kazim@gmail.com' },
    ];

    handleSubmit() {
        this.showTom = true;
        this.showJerry = false;
        this.users.push({ name: 'New User', email: 'newuser@gmail.com' });
    }
}