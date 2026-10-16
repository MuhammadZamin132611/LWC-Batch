import { api, LightningElement, track } from 'lwc';
import accountList from '@salesforce/apex/LookupController.accountList';

export default class Lookup extends LightningElement {

    /* Public Properties */ 
    @api label = 'Parent Case';
    @api objApiName = 'Case';
    @api iconName = 'standard:case';
    @api objectLabel = 'Case';
    @api fieldToSearch = 'CaseNumber';
    @api parentIdField = 'ParentId';


    @track data;
    selectedRecord;

    iconUrl = '/apexpages/slds/latest/assets/icons/{0}-sprite/svg/symbols.svg#{1}';

    searchText;

    connectedCallback() {
        if(this.iconName){
            let icons = this.iconName.split(':');
            this.iconUrl = this.iconUrl.replace('{0}', icons[0]);
            this.iconUrl = this.iconUrl.replace('{1}', icons[1]);
        }
        this.handleFetchAccount()
    }

    handleChange(event) {
        event.preventDefault();
        this.searchText = event.target.value
        this.handleChangeRecord();
    }

    handleItemClicked(event) {
        event.preventDefault();
        let recordId = event.currentTarget.dataset.recordId;
        this.selectedRecord = this.data.find((item) => {
            return item.Id === recordId;
        });

        const selectedEvent = new CustomEvent('lookup',{
            detail:{
                recordId : this.selectedRecord.Id,
                parentIdField: this.parentIdField,
                selectedRecord: this.selectedRecord
            }
        });
        this.dispatchEvent(selectedEvent);
    }

    handleCloseSelectedRecord(event){
        event.preventDefault();
        this.selectedRecord = undefined;

        const selectedEvent = new CustomEvent('lookup',{
            detail:{
                recordId : undefined,
                parentIdField: this.parentIdField,
                selectedRecord: undefined
            }
        });
        this.dispatchEvent(selectedEvent);
    }

    handleChangeRecord() {
        accountList({
            searchKeyWord: this.searchText,
            objectApiName: this.objApiName,
            fieldToSearch: this.fieldToSearch
        })
            .then((data) => {
                let cloneData = JSON.parse(JSON.stringify(data));
                cloneData.forEach((item)=>{
                    item.Name = item[this.fieldToSearch]
                })
                this.data = cloneData;
                // console.log("handleChangeRecord: ", JSON.stringify(this.data));
            })
            .catch((error) => {
                console.error("ERROR: ", JSON.stringify(error));
            })
    }

    handleFetchAccount() {
        accountList()
            .then((data) => {
                let cloneData = JSON.parse(JSON.stringify(data));
                this.data = cloneData;
                // console.log("DATA: ", JSON.stringify(this.data));
            })
            .catch((error) => {
                console.error("ERROR: ", JSON.stringify(error));
            })
    }
}