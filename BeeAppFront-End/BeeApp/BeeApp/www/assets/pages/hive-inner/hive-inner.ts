import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InspectInnerPage } from '../inspect-inner/inspect-inner';
import { InspectCreatePage } from '../inspect-create/inspect-create';

@Component({
  selector: 'page-hive-inner',
  templateUrl: 'hive-inner.html'
})
export class HiveInner {
    hive: string;

    constructor(public navCtrl: NavController) {
        this.hive = "info";
    }

    openInspectInnerPage() {
        this.navCtrl.push(InspectInnerPage);
    }

    openInspectCreatePage() {
        this.navCtrl.push(InspectCreatePage);
    }

}
