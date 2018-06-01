import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoginPage } from '../login/login';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    user = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        number: '',
        password: '',
        confirmPassword: ''
    };

    constructor(
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public http: Http) { }

    processlogin() {
        console.log(this.user);

        let loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "Please wait...",
        });
        loader.present();

        if (this.user.password != this.user.confirmPassword) {
            this.popAlert('Password need to match', 'warning', 7000, 'top');
        } else {

            this.http.post('https://beeapi.azurewebsites.net/api/beekeeper', this.user).map(res => res.json()).subscribe(
                data => {
                    if (data) {
                        this.navCtrl.setRoot(LoginPage, { email: this.user.email });
                        loader.dismiss();
                        this.user = {
                            firstName: '',
                            lastName: '',
                            email: '',
                            phoneNumber: '',
                            number: '',
                            password: '',
                            confirmPassword: ''
                        };
                    }
                },
                error => {
                    console.log(error)
                    if (error.status == 400) {

                        loader.dismiss();

                        let errorMessage = JSON.parse(error._body);

                        this.popAlert(errorMessage.message, 'warning', 7000, 'top');
                    }
                });
        }
    }

    popAlert(message: string, type: string, duration: number, position: string) {
        let toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: true,
            position: position,

        });
        toast.present();
    }


}

