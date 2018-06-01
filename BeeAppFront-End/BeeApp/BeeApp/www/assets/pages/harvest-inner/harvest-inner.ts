import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-harvest-inner',
  templateUrl: 'harvest-inner.html'
})
export class HarvestInnerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HarvestInnerPage');
  }

}
