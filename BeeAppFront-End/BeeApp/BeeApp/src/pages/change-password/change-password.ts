import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from "@angular/http";
import { AuthenticationService } from "../../app/service/authenticationService";

/*
  Generated class for the ChangePasswordPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-change-password',
    templateUrl: 'change-password.html'
})
export class ChangePasswordPage {

    password: any = {
        oldpassword: '',
        newpassword: '',
        confirmNewPassword: ''
    }

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public http: Http,
        public authService: AuthenticationService
    ) { }

    ionViewDidEnter() {
        
    }

    savePassword() {
        if (this.password.newpassword != this.password.confirmNewPassword) {
            this.popAlert('Passwords need to match', 'warning', 7000, 'top');
        } else {
            this.http.put('https://beeapi.azurewebsites.net/api/beekeeper/change-password', this.password, { headers: this.authService.getHeader(true) }).map(res => res.json()).subscribe(
                data => {
                    this.popAlert('You have successfully updated your password', 'success', 7000, 'top');
                },
                error => {
                    if (error.status == 400) {
                        let errorMessage = JSON.parse(error._body);
                        this.popAlert(errorMessage.message, 'warning', 7000, 'top');
                    }
                },
                () => {
                    // done

                    this.navCtrl.pop();
                });
        }
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
