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
import { NavController, ToastController } from 'ionic-angular';
import { Http } from "@angular/http";
import { AuthenticationService } from "../../app/service/authenticationService";
/*
  Generated class for the ChangePasswordPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, toastCtrl, http, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.password = {
            oldpassword: '',
            newpassword: '',
            confirmNewPassword: ''
        };
    }
    ChangePasswordPage.prototype.ionViewDidEnter = function () {
    };
    ChangePasswordPage.prototype.savePassword = function () {
        var _this = this;
        if (this.password.newpassword != this.password.confirmNewPassword) {
            this.popAlert('Passwords need to match', 'warning', 7000, 'top');
        }
        else {
            this.http.put('https://beeapi.azurewebsites.net/api/beekeeper/change-password', this.password, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.popAlert('You have successfully updated your password', 'success', 7000, 'top');
            }, function (error) {
                if (error.status == 400) {
                    var errorMessage = JSON.parse(error._body);
                    _this.popAlert(errorMessage.message, 'warning', 7000, 'top');
                }
            }, function () {
                // done
                _this.navCtrl.pop();
            });
        }
    };
    ChangePasswordPage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Component({
        selector: 'page-change-password',
        templateUrl: 'change-password.html'
    }),
    __metadata("design:paramtypes", [NavController,
        ToastController,
        Http,
        AuthenticationService])
], ChangePasswordPage);
export { ChangePasswordPage };
//# sourceMappingURL=change-password.js.map