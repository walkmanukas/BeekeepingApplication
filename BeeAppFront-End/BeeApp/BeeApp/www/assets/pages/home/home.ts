import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ApiariesPage } from '../apiaries/apiaries';
import { FeedingPage } from '../feeding/feeding';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  onLink(url: string) {
      window.open(url);
  }

  openApiariesPage() {
      this.navCtrl.push(ApiariesPage);
  }

  openFeedingPage() {
      this.navCtrl.push(FeedingPage);
  }

}

