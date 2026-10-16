import { LightningElement } from 'lwc';

export default class Assignment1 extends LightningElement {

    value = '';
    isVisible = false;
    toDoList = [];

    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High Priority', value: 'highPriority' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        console.log(JSON.stringify(this.value))
    }

    handleClick() {
        if (this.value !== '') {
            this.isVisible = true;
            this.toDoList = [...this.toDoList, this.value];

            this.value = ''; 
        }
    }

}