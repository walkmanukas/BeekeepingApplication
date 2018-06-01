import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingCreatePage } from '../feeding-create/feeding-create';

/*
  Generated class for the FeedingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feeding',
  templateUrl: 'feeding.html'
})
export class FeedingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedingPage');
  }

  openFeedingCreatePage() {
      this.navCtrl.push(FeedingCreatePage);
  }

}
