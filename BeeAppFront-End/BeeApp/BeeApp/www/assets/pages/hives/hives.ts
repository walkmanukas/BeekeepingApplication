import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HiveCreate } from '../hive-create/hive-create';
import { HiveInner } from '../hive-inner/hive-inner';

@Component({
  selector: 'page-hives',
  templateUrl: 'hives.html'
})
export class HivesPage {

  constructor(public navCtrl: NavController) {
  }

  openHivePage() {
      this.navCtrl.push(HiveCreate);
  }

  openHiveInner() {
      this.navCtrl.push(HiveInner);
  }

}
