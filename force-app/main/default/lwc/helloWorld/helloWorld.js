import { api, LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // Private Variable/properties
    welcomeMessage;
    message = 'Welcome to the world of LWC Hello World Component!'; // String
    showLading = true; // Boolean
    age = 123  // Integer
    salary = 2345.65 // Decimal
    record = []  // List/Array

    // Public Variable/properties
    @api __message = 'Welcome Zamin!';

    // List<Account> accounList
    // List<User> userList
    @track users = [
        { name: 'Muhammad Zamin', email: 'md@gmail.com' },
        { name: 'Muhammad Abbsa', email: 'abbas@gmail.com' },
        { name: 'Muhammad Kazim', email: 'kazim@gmail.com' },
    ];

    // key: value
    // Map<Id, Account>
    @track accountMap = {
        abc: {
            Name: 'Salesforce.com'
        },
        xyz: {
            Name: 'Salesforce.com'
        },
        efg: {
            Name: 'Salesforce.com'
        },
        98765: [
            {

            },
            {

            },
        ]
    }

    // user.push({name: 'ali', email: 'ali@gmail.com'})

}