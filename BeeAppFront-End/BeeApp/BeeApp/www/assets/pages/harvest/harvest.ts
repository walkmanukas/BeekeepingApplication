import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HarvestCreatePage } from '../harvest-create/harvest-create';
import { HarvestInnerPage } from '../harvest-inner/harvest-inner';

@Component({
  selector: 'page-harvest',
  templateUrl: 'harvest.html'
})
export class HarvestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HarvestPage');
  }

  openHarvestCreatePage() {
      this.navCtrl.push(HarvestCreatePage);
  }

  openHarvestInnerPage() {
      this.navCtrl.push(HarvestInnerPage);
  }

}
