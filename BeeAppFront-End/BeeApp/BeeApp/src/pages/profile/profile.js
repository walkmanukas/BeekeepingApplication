var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { Http } from "@angular/http";
import { AuthenticationService } from "../../app/service/authenticationService";
import { ChangePasswordPage } from "../change-password/change-password";
/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProfilePage = (function () {
    function ProfilePage(navCtrl, toastCtrl, http, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            number: '',
        };
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        this.getUserProfile();
    };
    ProfilePage.prototype.getUserProfile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "Please wait...",
        });
        loader.present();
        this.http.get('https://beeapi.azurewebsites.net/api/beekeeper', { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.user = data[0];
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            loader.dismiss();
        });
    };
    ProfilePage.prototype.saveProfile = function () {
        var _this = this;
        var userObject = {};
        userObject = this.user;
        delete userObject.email;
        this.http.put('https://beeapi.azurewebsites.net/api/beekeeper/update-info', userObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.popAlert('You have successfully updated your profile', 'success', 7000, 'top');
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'warning', 7000, 'top');
            }
        }, function () {
            // done
            _this.getUserProfile();
        });
    };
    ProfilePage.prototype.changePassword = function () {
        this.navCtrl.push(ChangePasswordPage);
    };
    ProfilePage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Component({
        selector: 'page-profile',
        templateUrl: 'profile.html'
    }),
    __metadata("design:paramtypes", [NavController,
        ToastController,
        Http,
        LoadingController,
        AuthenticationService])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.js.map