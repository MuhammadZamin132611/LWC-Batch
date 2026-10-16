import { api, LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
    @api greeting;

    constructor() {
        super();
        console.log('constructor in child component');
        console.log('constructor in child component: ', this.greeting);
    }

    connectedCallback() {
        console.log('connectedCallback in child component');
        console.log('connectedCallback in child greeting: ', this.greeting);
        console.log('connectedCallback in child options: ', this.options);
        console.log(showChild.value);
    }

    disconnectedCallback(){
        console.log('Disconnected Callback on Child');
    }

    errorCallback(error, stack){
        console.log("Error in child is: ", error, 'Stack in child: ', stack);
    }

    renderedCallback(){
        console.log('Rendered Callback on Child');
    }

    get options() {
        return [
            {name:'zamin'}
        ];
    }
}