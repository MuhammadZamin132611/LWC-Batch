import { api, LightningElement, track } from 'lwc';

export default class Getter extends LightningElement {

    @track userList = [];
    name = 'LWC';

    @api
    get users(){
        return this.userList;
    }

    set users(value){
        this.userList = value;
    }


    handleClick(event){
        event.preventDefault();
        this.name = 'Zamin Khan';
        this.users = [{}];  
    }
}