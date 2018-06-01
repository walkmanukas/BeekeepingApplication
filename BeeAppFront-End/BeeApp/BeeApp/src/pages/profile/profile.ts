import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Http } from "@angular/http";
import { AuthenticationService } from "../../app/service/authenticationService";
import { ChangePasswordPage } from "../change-password/change-password";

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    user: any = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        number: '',
    };

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public loadingCtrl: LoadingController,
        public authService: AuthenticationService) { }


    ionViewDidEnter() {
        this.getUserProfile();
    }

    getUserProfile() {

        let loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "Please wait...",
        });
        loader.present();

        this.http.get('https://beeapi.azurewebsites.net/api/beekeeper', { headers: this.authService.getHeader() }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    this.user = data[0];
                }
            },
            error => {
                if (error.status == 400) {

                }
            },
            () => {
                loader.dismiss();             
            });
    }

    saveProfile() {

        let userObject: any = {};

        userObject = this.user;

        delete userObject.email;

        this.http.put('https://beeapi.azurewebsites.net/api/beekeeper/update-info', userObject, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
            data => {
                this.popAlert('You have successfully updated your profile', 'success', 7000, 'top');
            },
            error => {
                if (error.status == 400) {
                    let errorMessage = JSON.parse(error._body);
                    this.popAlert(errorMessage.message, 'warning', 7000, 'top');
                }
            },
            () => {
                // done
                
                this.getUserProfile();
            });
    }

    changePassword() {
        this.navCtrl.push(ChangePasswordPage)
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


}
