import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthenticationService } from "../../app/service/authenticationService";
import { Http } from "@angular/http";
import { ApiaryService } from "../../app/service/apiaryService";
import { HiveService } from "../../app/service/hiveService";
import { InspectionService } from "../../app/service/inspectionService";
import { InspectCreatePage } from "../inspect-create/inspect-create";
import { HiveInner } from "../hive-inner/hive-inner";
import { ApiaryCreatePage } from "../apiary-create/apiary-create";

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

    apiary: any;

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService,
        public apiaryService: ApiaryService,
        public hiveService: HiveService,
        public inspectionService: InspectionService,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController) {
        //this.apiary = "info";
    }

    ionViewDidLoad() {
        let apiaryId = this.apiaryService.getId();

        this.http.get('https://beeapi.azurewebsites.net/api/apiary/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.apiary = data[0];
                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                // done
            });
    }

    editApiaryPage() {
        this.apiaryService.setEditApiaryObject(this.apiary);
        this.navCtrl.push(ApiaryCreatePage);
    }

    deleteApiary() {

        let alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.apiary.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: () => {
                        let apiaryId = this.apiaryService.getId();

                        this.http.delete('https://beeapi.azurewebsites.net/api/apiary/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
                            data => {
                                this.popAlert('You have successfully deleted apiary named: ' + this.apiary.name, 'success', 7000, 'top');
                                this.apiaryService.setId(0);
                                this.apiaryService.setApiaryObject(null);
                                this.navCtrl.pop();
                            },
                            error => {
                                if (error.status == 400) {

                                }
                            },
                            () => {
                                // done
                            });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        alert.dismiss();
                    }
                }
            ]
        });
        alert.present();


        //let apiaryId = this.apiaryService.getId();

        //this.http.delete('https://beeapi.azurewebsites.net/api/apiary/' + apiaryId, { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
        //    data => {
        //        if (data) {

        //        }
        //    },
        //    error => {
        //        if (error.status == 400) {

        //        }
        //    },
        //    () => {
        //        // done
        //        this.popAlert('You have successfully deleted apiary named: ' + this.apiary.name, 'success', 7000, 'top');
        //        this.inspectionService.setId(0);
        //        this.inspectionService.setEditInspectionObject(null);
        //        this.navCtrl.pop();
        //    });
    }

    popAlert(message: string, type: string, duration: number, position: string) {
        let toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,

        });
        toast.present();
    }

    goBack() {
        this.navCtrl.pop();
    }
}
