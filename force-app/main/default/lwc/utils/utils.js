import FirstName from '@salesforce/label/c.First_Name';
import LastName from '@salesforce/label/c.Last_Name';
import Email from '@salesforce/label/c.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

function helloWorld() {
    alert('hello world');
}

const welcomeMessage = () => {
    alert('hello world');
}

const add = (param1, param2) => {
    return param1 + param2;
}

const ShowToast = (message, title, varint, mode, messageData) => {
    let messageObject = {
        message: message,
        title: title,
        varint: varint,
        mode: mode,
    }
    if (messageData) {
        messageObject.messageData = messageData;
    }
    const ShowToastNotificationEvent = new ShowToastEvent(messageObject);
    return ShowToastNotificationEvent;
}

export {
    helloWorld,
    welcomeMessage,
    add,
    Email,
    FirstName,
    LastName,
    ShowToast
}