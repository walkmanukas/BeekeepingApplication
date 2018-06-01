import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TreatmentCreatePage } from '../treatment-create/treatment-create';
import { TreatmentInnerPage } from '../treatment-inner/treatment-inner';

@Component({
  selector: 'page-treatment',
  templateUrl: 'treatment.html'
})
export class TreatmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatmentPage');
  }

  openTreatmentInnerPage() {
      this.navCtrl.push(TreatmentInnerPage);
  }

  openTreatmentCreatePage() {
      this.navCtrl.push(TreatmentCreatePage);
  }
}
