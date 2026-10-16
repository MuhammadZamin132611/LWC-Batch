import { LightningElement, track, wire } from 'lwc';
import accountList from '@salesforce/apex/DataTableService.accountList';
import { updateRecord } from 'lightning/uiRecordApi';

import { refreshApex } from '@salesforce/apex';

export default class DataTable extends LightningElement {

    @track data = [];
    columnsList;
    selectedRows = [];

    @track draftValues;


    constructor() {
        super();
        this.columnsList = [
            {
                label: 'Name', fieldName: 'RecordUrl', wrapText: true, type: 'url',
                typeAttributes: {
                    label: {
                        fieldName: 'Name'
                    },
                    target: '_blank'
                }
            },
            { label: 'Phone', fieldName: 'Phone', type: 'phone', wrapText: true },
            { label: 'Type', fieldName: 'Type', wrapText: true },
            {
                label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency', wrapText: true, editable: true,
                cellAttributes: {
                    iconName: {
                        fieldName: 'IconName',
                    },
                    iconPosition: 'right'
                }
            },
            { label: 'Active', fieldName: 'Active__c', wrapText: true, editable: true, },
            { label: 'Created Date', fieldName: 'CreatedDate', type: 'date', wrapText: true, editable: true, },
            { label: 'Website', fieldName: 'Website', type: 'url', wrapText: true, editable: true, },
            {
                label: 'Owner Name', fieldName: 'OWNER_NAME', wrapText: true,
                cellAttributes: {
                    iconName: 'standard:user'
                }
            },
            {
                type: 'action', typeAttributes: {
                    rowActions: this.getRowActions
                }
            }
        ];
    }

    getRowActions(row, doneCallBack) {
        const actions = [
            { label: 'View', name: 'view' },
            { label: 'Delete', name: 'delete' },
        ]
        if (row.Active__c === 'Yes') {
            actions.push(
                { label: 'Edit', name: 'edit', disabled: true },
                { label: 'New Contact', name: 'new_contact', disabled: false },
            )
        } else if (row.Active__c === 'No') {
            actions.push(
                { label: 'Edit', name: 'edit', disabled: false },
            )
        }

        setTimeout(() => {
            doneCallBack(actions);
        }, 200)
    }

    /*@wire(accountList)
    wiredAccount({ error, data }) {
        if (data) {
            // console.log(data);
            let cloneData = JSON.parse(JSON.stringify(data));
            cloneData.forEach(account => {
                if (account.OwnerId) {
                    account.OWNER_NAME = account.Owner.Name
                }
                account.RecordUrl = location.protocol + location.host + '/lightning/r/Account/' + account.Id + '/view';
                account.OwnerUrl = location.protocol + location.host + '/lightning/r/User/' + account.OwnerId + '/view';
                if (account.AnnualRevenue > 300000) {
                    account.IconName = 'utility:arrowup';
                } else if (account.AnnualRevenue < 300000) {
                    account.IconName = 'utility:arrowdown';
                } else {
                    account.IconName = 'utility:arrow_top';
                }
            });
            this.data = cloneData;
        }
        else if (error) {
            console.error("ERROR: ", JSON.stringify(error));
        }
    }*/


    connectedCallback() {
        this.handleFetchAccount()
    }

    handleFetchAccount() {
        accountList()
            .then((data) => {
                let cloneData = JSON.parse(JSON.stringify(data));
                cloneData.forEach(account => {
                    if (account.OwnerId) {
                        account.OWNER_NAME = account.Owner.Name
                    }
                    account.RecordUrl = location.protocol + location.host + '/lightning/r/Account/' + account.Id + '/view';
                    account.OwnerUrl = location.protocol + location.host + '/lightning/r/User/' + account.OwnerId + '/view';
                    if (account.AnnualRevenue > 300000) {
                        account.IconName = 'utility:arrowup';
                    } else if (account.AnnualRevenue < 300000) {
                        account.IconName = 'utility:arrowdown';
                    } else {
                        account.IconName = 'utility:arrow_top';
                    }
                });
                this.data = cloneData;
            })
            .catch((error) => {
                console.error("ERROR: ", JSON.stringify(error));
            })
    }

    handleRowAction(event) {
        event.preventDefault();
        let clickedRow = event.detail;
        console.log(JSON.stringify(clickedRow));
        let actionName = clickedRow.action.name;

        switch (actionName) {
            case 'view':
                alert(JSON.stringify(clickedRow.row));
                break;
            case 'delete':
                alert("record deleted");
                break;
            case 'edit':
                alert("record edited");
                break;
            default:
                alert('No Action');
                break;
        }
    }

    handleSave(event) {
        event.preventDefault();
        this.draftValues = event.target.draftValues;
        console.log(JSON.stringify(this.draftValues));

        const recordInputs = [];

        this.draftValues.forEach((item) => {
            const fields = Object.assign({}, item);
            const recordInput = { fields };
            recordInputs.push(
                updateRecord(recordInput)
            );
        })
        Promise.all(recordInputs)
            .then(() => {
                // console.log('Record Updated')
                // refreshApex(this.data);
                this.draftValues = [];
                this.handleFetchAccount();
            })
            .catch((error) => {
                // console.error('Record Error', error);
                console.error(JSON.stringify(error))
            })
            .finally(() => {
                // console.log('Finally Record Updated')
            });
    }

    handleCancel() {
        // Clear drafts on cancel
        this.draftValues = [];
    }

    handleRowSelection(event) {
        event.preventDefault();

        this.selectedRows = event.detail.selectedRows;
        // console.log(JSON.stringify(this.selectedRows));
    }
}