import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    users = [
        { name: 'Md Zamin' },
        { name: 'Faisal Khan' },
    ];

    handleClicked = (event) => {
        event.preventDefault();

        let childElement = this.template.querySelector('c-child');
        if (childElement) {
            let allValid = childElement.handleValidate(2, 3);
            if(allValid) {
                console.log("All Valid: ", allValid);
            } else {
                console.log("All Valid: ", allValid);
            }
        }
    }

    handleUrlClicked = (event) => {
        event.preventDefault();
        console.log("URL Clicked: ", event.target.href);
    }
}