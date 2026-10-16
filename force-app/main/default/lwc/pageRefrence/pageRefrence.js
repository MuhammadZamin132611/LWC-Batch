import { LightningElement, wire } from 'lwc';
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';

export default class PageRefrence extends NavigationMixin(LightningElement) {

    @wire(CurrentPageReference)
    currentPageRef({ state }) {
        if (state) {
            console.log(JSON.stringify(state));
        }
    };

    handleTabNavigate(event) {
        event.preventDefault();
        let nav = {
            type: 'standard__navItemPage',
            attributes: {
                apiName:'Design_Component'
            },
            state:{
                'c__FirstName':'Amit',
                'c__LastName':'Singh',
                'c__Email':'zamin@gmail.com',
            }
        }
        this[NavigationMixin.Navigate](nav);
    }

    handleNew(event) {
        event.preventDefault();

        let nav = {
            type: 'standard__objectPage',
            attributes: {
                actionName: 'new',
                objectApiName: 'Account'
            }
        };
        this[NavigationMixin.Navigate](nav);
    }

    handleEdit(event) {
        event.preventDefault();

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: 'edit',
                recordId: '001HF00000OL4csYAD',
                objectApiName: 'Account'
            }
        });
    }

    handleView(event) {
        event.preventDefault();

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: 'view',
                recordId: '001HF00000OL4csYAD',
                objectApiName: 'Account'
            }
        });
    }
}