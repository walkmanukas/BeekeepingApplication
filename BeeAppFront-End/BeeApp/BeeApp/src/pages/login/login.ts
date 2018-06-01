import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastController, Platform } from 'ionic-angular';

import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { AuthenticationService } from "../../app/service/authenticationService";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    username: string;
    password: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        public http: Http,
        public platform: Platform,
        public authService: AuthenticationService) {

        //this.username = 'k.jankauskas@hotmail.com';
        //this.password = 'testing1';
        //this.processlogin();

        if (navParams.get('email')) {
            this.username = navParams.get('email');
        }
    }

    openRegisterPage() {
        this.navCtrl.push(RegisterPage);
    }

    processlogin() {

        let loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "Please wait...",
        });
        loader.present();

        let body = new URLSearchParams()
        body.set('username', this.username);
        body.set('password', this.password);
        body.set('grant_type', 'password');

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('https://beeapi.azurewebsites.net/oauth/token', body.toString(), { headers: headers }).map(res => res.json()).subscribe(
            data => {
                if (data) {
                    loader.dismiss();
                    this.authService.setToken(data.access_token);
                    this.navCtrl.setRoot(TabsPage);
                }
            },
            error => {
                if (error.status == 400) {
                    loader.dismiss();
                    let errorMessage = JSON.parse(error._body);

                    let toast = this.toastCtrl.create({
                        message: errorMessage.error_description,
                        cssClass: 'warning',
                        duration: 1000,
                        position: 'bottom',
                        dismissOnPageChange: true
                    });
                    toast.present();
                }
            });
    }
}

