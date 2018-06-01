import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'hive-create',
  templateUrl: 'hive-create.html'
})
export class HiveCreate {

  constructor(public navCtrl: NavController) {
  
    }

  goBack() {
      this.navCtrl.pop();
  }
}
