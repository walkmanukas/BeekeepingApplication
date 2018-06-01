import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';

import { NavController, NavParams, Tabs, MenuController, Events, Select } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
import { HivesPage } from '../hives/hives';
import { HarvestPage } from '../harvest/harvest';
import { StatsPage } from '../stats/stats';
import { TreatmentPage } from '../treatment/treatment';
import { FeedingPage } from '../feeding/feeding';
import { LoginPage } from '../login/login';
import { ApiaryService } from "../../app/service/apiaryService";
import { AuthenticationService } from "../../app/service/authenticationService";
import { InspectionService } from "../../app/service/inspectionService";
import { ApiariesPage } from "../apiaries/apiaries";
import { ProfilePage } from "../profile/profile";
import { InfoPage } from "../info/info";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    @ViewChild('tabs') tabRef: Tabs;
    @ViewChild('apiarySelect') apiarySelect: Select;

    // this tells the tabs component which Pages
    // should be each tab's root Page
    tab1Root = ApiariesPage;
    tab2Root = HivesPage;
    tab3Root = TreatmentPage;
    tab4Root = HarvestPage;
    tab5Root = FeedingPage;

    token: string;
    apiaries = [];
    enableTabs = false;
    hiveCheck = false;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public http: Http,
        public menuCtrl: MenuController,
        public events: Events,
        public apiaryService: ApiaryService,
        public authService: AuthenticationService,
        private cd: ChangeDetectorRef) {

        //this.getToken();
        //this.getApiaries();

    }

    tabsChange() {

        if (this.apiaryService.getId())
        {
            this.getHives();
        }

        console.log('tab change');
        this.getToken();
        this.getApiaries();
    }

    ionOpen() {
        this.getToken();
        this.getApiaries();
    }

    getToken() {
        if (this.authService.getToken()) {
            this.token = this.authService.getToken();
        } else {
            this.navCtrl.setRoot(LoginPage);
        }
    }

    getApiaries() {

        this.http.get('https://beeapi.azurewebsites.net/api/apiary', { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.apiaries = data;
                    this.cd.markForCheck();
                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {

                this.cd.detectChanges();
                //this.apiarySelect.open();
                if (this.apiaries.length == 0) {
                    this.enableTabs = false;
                }
            });
    }

    getHives() {

        let apiaryId = this.apiaryService.getId();

        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    if (data.length > 0) {
                        this.hiveCheck = true;
                    } else {
                        this.hiveCheck = false;
                    }

                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                // done                
                console.log(this.enableTabs && this.hiveCheck);
            });
    }

    openApiaries() {
        this.menuCtrl.close();
        this.navCtrl.push(ApiariesPage);
    }

    selectedApiary(apiaryId: number) {
        this.menuCtrl.close();
        this.enableTabs = true;
        this.apiaryService.setId(apiaryId);
        this.getHives();
        this.tabRef.select(0);
        this.tabRef.select(1);
    }

    openProfilePage() {
        this.menuCtrl.close();
        this.navCtrl.push(ProfilePage);
    }

    openInfoPage() {
        this.menuCtrl.close();
        this.navCtrl.push(InfoPage);
    }

    logout() {
        this.authService.setToken(null);
        this.navCtrl.setRoot(LoginPage);
    }
}