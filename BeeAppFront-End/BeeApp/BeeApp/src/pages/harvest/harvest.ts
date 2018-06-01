import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HarvestCreatePage } from '../harvest-create/harvest-create';
import { HarvestInnerPage } from '../harvest-inner/harvest-inner';
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";
import { HarvestService } from "../../app/service/harvestService";
import { ArraySortPipe } from "../../app/pipe/sortPipe";

@Component({
    selector: 'page-harvest',
    templateUrl: 'harvest.html'
})
export class HarvestPage {

    harvests: any = [];

    constructor(
        public navCtrl: NavController,
        public http: Http,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        public harvestService: HarvestService) {
    }

    ionViewDidEnter() {
        let apiaryId = this.apiaryService.getId();
        this.harvests = [];
        this.http.get('https://beeapi.azurewebsites.net/api/harvest/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.harvests = data;
                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                // done                

            });
    }

    ionViewDidLeave() {
        this.harvestService.setEditHarvestObject(null);
    }

    openHarvestCreatePage() {
        this.navCtrl.push(HarvestCreatePage);
    }

    openHarvestInnerPage(id) {
        this.harvestService.setId(id);
        this.navCtrl.push(HarvestInnerPage);
    }

}
