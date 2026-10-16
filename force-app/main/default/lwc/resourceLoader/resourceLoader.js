import { LightningElement } from 'lwc';

import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import CHART_JS from '@salesforce/resourceUrl/ChartJs';
import TailwindCSS from '@salesforce/resourceUrl/TailwindCSS';

import { helloWorld, ShowToast } from 'c/utils';

export default class ResourceLoader extends LightningElement {

    isRendered = false;

    connectedCallback(){
        // helloWorld();
        // ShowToast('')
    }

    renderedCallback() {
        if (this.isRendered) {
            return;
        }
        this.isRendered = true;

        Promise.all(
            [
                // loadStyle(this, Tailwind),
                loadScript(this, CHART_JS)
            ]
        ).then(() => {
            // console.log("Resource Loaded");

            const ctx = this.template.querySelector('.myChart');

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }).catch((error) => {
            console.error("Error while loading resources: ", JSON.stringify(error));
        })


        loadStyle(this, TailwindCSS)
            .then(() => {
                // console.log("Tailwind Resource Loaded");


            })
            .catch((error) => {
                console.error("Taiwind Resource Error: ", error);
            })


        /*loadScript(this, CHART_JS)
            .then(() => {
                console.log("Resource Loaded");


            })
            .catch((error) => {
                console.log("Resource Error: ", error);
            })*/
    }
}