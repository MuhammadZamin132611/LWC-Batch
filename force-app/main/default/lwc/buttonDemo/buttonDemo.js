import { LightningElement } from 'lwc';

export default class ButtonDemo extends LightningElement {

    buttonLabel = "No Button Cliclked";

    handleButton1() {
        this.buttonLabel = "Button 1 Clicked";
    }

    handleButton2() { 
        this.buttonLabel = "Button 2 Clicked";
    }
}