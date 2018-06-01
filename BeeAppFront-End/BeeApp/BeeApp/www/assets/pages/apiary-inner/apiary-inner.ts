import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HiveInner } from '../hive-inner/hive-inner';

/*
  Generated class for the ApiaryInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-apiary-inner',
  templateUrl: 'apiary-inner.html'
})
export class ApiaryInnerPage {
    apiary: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.apiary = "info";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiaryInnerPage');
  }

  openHiveInnerPage() {
      this.navCtrl.push(HiveInner);
  }

}
