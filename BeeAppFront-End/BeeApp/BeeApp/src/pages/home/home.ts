import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';
import { ApiariesPage } from '../apiaries/apiaries';
import { FeedingPage } from '../feeding/feeding';
import { AuthenticationService } from "../../app/service/authenticationService";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        public authService: AuthenticationService) {

        console.log(this.authService.getToken());
    }

    onLink(url: string) {
        window.open(url);
    }

    ionViewDidEnter() {

    }

    openApiariesPage() {
        this.navCtrl.push(ApiariesPage);
    }

    openFeedingPage() {
        this.navCtrl.push(FeedingPage);
    }

    goBack() {
        this.navCtrl.pop();
    }

}

