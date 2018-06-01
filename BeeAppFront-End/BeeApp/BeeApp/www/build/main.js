webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, toastCtrl, http, platform, authService) {
        //this.username = 'k.jankauskas@hotmail.com';
        //this.password = 'testing1';
        //this.processlogin();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.platform = platform;
        this.authService = authService;
        if (navParams.get('email')) {
            this.username = navParams.get('email');
        }
    }
    LoginPage.prototype.openRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.processlogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "Please wait...",
        });
        loader.present();
        var body = new URLSearchParams();
        body.set('username', this.username);
        body.set('password', this.password);
        body.set('grant_type', 'password');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('https://beeapi.azurewebsites.net/oauth/token', body.toString(), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                loader.dismiss();
                _this.authService.setToken(data.access_token);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }
        }, function (error) {
            if (error.status == 400) {
                loader.dismiss();
                var errorMessage = JSON.parse(error._body);
                var toast = _this.toastCtrl.create({
                    message: errorMessage.error_description,
                    cssClass: 'warning',
                    duration: 1000,
                    position: 'bottom',
                    dismissOnPageChange: true
                });
                toast.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <ion-title>Login</ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row style="height: 100px"></ion-row>\n\n\n\n    <div style="text-align: center;">\n\n        <ion-icon ios="ios-cloud" md="ios-cloud" color="primary" style="font-size: 80px;"></ion-icon>\n\n    </div>\n\n\n\n    <p text-center>Hi! Please, log in to continue:</p>\n\n\n\n    <ion-list padding>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Email</ion-label>\n\n            <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div>\n\n        <button ion-button full round (click)="processlogin()">Log In</button>\n\n        <button ion-button full round (click)="openRegisterPage()">Register</button>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__["a" /* AuthenticationService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 569,
	"./af.js": 569,
	"./ar": 570,
	"./ar-dz": 571,
	"./ar-dz.js": 571,
	"./ar-kw": 572,
	"./ar-kw.js": 572,
	"./ar-ly": 573,
	"./ar-ly.js": 573,
	"./ar-ma": 574,
	"./ar-ma.js": 574,
	"./ar-sa": 575,
	"./ar-sa.js": 575,
	"./ar-tn": 576,
	"./ar-tn.js": 576,
	"./ar.js": 570,
	"./az": 577,
	"./az.js": 577,
	"./be": 578,
	"./be.js": 578,
	"./bg": 579,
	"./bg.js": 579,
	"./bm": 580,
	"./bm.js": 580,
	"./bn": 581,
	"./bn.js": 581,
	"./bo": 582,
	"./bo.js": 582,
	"./br": 583,
	"./br.js": 583,
	"./bs": 584,
	"./bs.js": 584,
	"./ca": 585,
	"./ca.js": 585,
	"./cs": 586,
	"./cs.js": 586,
	"./cv": 587,
	"./cv.js": 587,
	"./cy": 588,
	"./cy.js": 588,
	"./da": 589,
	"./da.js": 589,
	"./de": 590,
	"./de-at": 591,
	"./de-at.js": 591,
	"./de-ch": 592,
	"./de-ch.js": 592,
	"./de.js": 590,
	"./dv": 593,
	"./dv.js": 593,
	"./el": 594,
	"./el.js": 594,
	"./en-au": 595,
	"./en-au.js": 595,
	"./en-ca": 596,
	"./en-ca.js": 596,
	"./en-gb": 597,
	"./en-gb.js": 597,
	"./en-ie": 598,
	"./en-ie.js": 598,
	"./en-il": 599,
	"./en-il.js": 599,
	"./en-nz": 600,
	"./en-nz.js": 600,
	"./eo": 601,
	"./eo.js": 601,
	"./es": 602,
	"./es-do": 603,
	"./es-do.js": 603,
	"./es-us": 604,
	"./es-us.js": 604,
	"./es.js": 602,
	"./et": 605,
	"./et.js": 605,
	"./eu": 606,
	"./eu.js": 606,
	"./fa": 607,
	"./fa.js": 607,
	"./fi": 608,
	"./fi.js": 608,
	"./fo": 609,
	"./fo.js": 609,
	"./fr": 610,
	"./fr-ca": 611,
	"./fr-ca.js": 611,
	"./fr-ch": 612,
	"./fr-ch.js": 612,
	"./fr.js": 610,
	"./fy": 613,
	"./fy.js": 613,
	"./gd": 614,
	"./gd.js": 614,
	"./gl": 615,
	"./gl.js": 615,
	"./gom-latn": 616,
	"./gom-latn.js": 616,
	"./gu": 617,
	"./gu.js": 617,
	"./he": 618,
	"./he.js": 618,
	"./hi": 619,
	"./hi.js": 619,
	"./hr": 620,
	"./hr.js": 620,
	"./hu": 621,
	"./hu.js": 621,
	"./hy-am": 622,
	"./hy-am.js": 622,
	"./id": 623,
	"./id.js": 623,
	"./is": 624,
	"./is.js": 624,
	"./it": 625,
	"./it.js": 625,
	"./ja": 626,
	"./ja.js": 626,
	"./jv": 627,
	"./jv.js": 627,
	"./ka": 628,
	"./ka.js": 628,
	"./kk": 629,
	"./kk.js": 629,
	"./km": 630,
	"./km.js": 630,
	"./kn": 631,
	"./kn.js": 631,
	"./ko": 632,
	"./ko.js": 632,
	"./ky": 633,
	"./ky.js": 633,
	"./lb": 634,
	"./lb.js": 634,
	"./lo": 635,
	"./lo.js": 635,
	"./lt": 636,
	"./lt.js": 636,
	"./lv": 637,
	"./lv.js": 637,
	"./me": 638,
	"./me.js": 638,
	"./mi": 639,
	"./mi.js": 639,
	"./mk": 640,
	"./mk.js": 640,
	"./ml": 641,
	"./ml.js": 641,
	"./mn": 642,
	"./mn.js": 642,
	"./mr": 643,
	"./mr.js": 643,
	"./ms": 644,
	"./ms-my": 645,
	"./ms-my.js": 645,
	"./ms.js": 644,
	"./mt": 646,
	"./mt.js": 646,
	"./my": 647,
	"./my.js": 647,
	"./nb": 648,
	"./nb.js": 648,
	"./ne": 649,
	"./ne.js": 649,
	"./nl": 650,
	"./nl-be": 651,
	"./nl-be.js": 651,
	"./nl.js": 650,
	"./nn": 652,
	"./nn.js": 652,
	"./pa-in": 653,
	"./pa-in.js": 653,
	"./pl": 654,
	"./pl.js": 654,
	"./pt": 655,
	"./pt-br": 656,
	"./pt-br.js": 656,
	"./pt.js": 655,
	"./ro": 657,
	"./ro.js": 657,
	"./ru": 658,
	"./ru.js": 658,
	"./sd": 659,
	"./sd.js": 659,
	"./se": 660,
	"./se.js": 660,
	"./si": 661,
	"./si.js": 661,
	"./sk": 662,
	"./sk.js": 662,
	"./sl": 663,
	"./sl.js": 663,
	"./sq": 664,
	"./sq.js": 664,
	"./sr": 665,
	"./sr-cyrl": 666,
	"./sr-cyrl.js": 666,
	"./sr.js": 665,
	"./ss": 667,
	"./ss.js": 667,
	"./sv": 668,
	"./sv.js": 668,
	"./sw": 669,
	"./sw.js": 669,
	"./ta": 670,
	"./ta.js": 670,
	"./te": 671,
	"./te.js": 671,
	"./tet": 672,
	"./tet.js": 672,
	"./tg": 673,
	"./tg.js": 673,
	"./th": 674,
	"./th.js": 674,
	"./tl-ph": 675,
	"./tl-ph.js": 675,
	"./tlh": 676,
	"./tlh.js": 676,
	"./tr": 677,
	"./tr.js": 677,
	"./tzl": 678,
	"./tzl.js": 678,
	"./tzm": 679,
	"./tzm-latn": 680,
	"./tzm-latn.js": 680,
	"./tzm.js": 679,
	"./ug-cn": 681,
	"./ug-cn.js": 681,
	"./uk": 682,
	"./uk.js": 682,
	"./ur": 683,
	"./ur.js": 683,
	"./uz": 684,
	"./uz-latn": 685,
	"./uz-latn.js": 685,
	"./uz.js": 684,
	"./vi": 686,
	"./vi.js": 686,
	"./x-pseudo": 687,
	"./x-pseudo.js": 687,
	"./yo": 688,
	"./yo.js": 688,
	"./zh-cn": 689,
	"./zh-cn.js": 689,
	"./zh-hk": 690,
	"./zh-hk.js": 690,
	"./zh-tw": 691,
	"./zh-tw.js": 691
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1135;

/***/ }),

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiaries_apiaries__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feeding_feeding__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_authenticationService__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        console.log(this.authService.getToken());
    }
    HomePage.prototype.onLink = function (url) {
        window.open(url);
    };
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage.prototype.openApiariesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__apiaries_apiaries__["a" /* ApiariesPage */]);
    };
    HomePage.prototype.openFeedingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__feeding_feeding__["a" /* FeedingPage */]);
    };
    HomePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Home</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <!--<button ion-button full (click)="openApiariesPage()">Apiaries</button>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_authenticationService__["a" /* AuthenticationService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StatsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var StatsPage = (function () {
    function StatsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatsPage');
    };
    StatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stats',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\stats\stats.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Stats</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <p>Statis Page</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\stats\stats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StatsPage);
    return StatsPage;
}());

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreatmentService = (function () {
    function TreatmentService() {
        this.treatment = null;
        this.editTreatment = null;
    }
    TreatmentService.prototype.setId = function (id) {
        this.id = id;
    };
    TreatmentService.prototype.getId = function () {
        return this.id;
    };
    TreatmentService.prototype.setTreatmentObject = function (treatment) {
        this.treatment = treatment;
    };
    TreatmentService.prototype.getTreatmentObject = function () {
        return this.treatment;
    };
    TreatmentService.prototype.setEditTreatmentObject = function (editTreatmentObject) {
        this.editTreatment = editTreatmentObject;
    };
    TreatmentService.prototype.getEditTreatmentObject = function () {
        return this.editTreatment;
    };
    TreatmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TreatmentService);
    return TreatmentService;
}());

//# sourceMappingURL=treatmentService.js.map

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArraySortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArraySortPipe = (function () {
    function ArraySortPipe() {
    }
    ArraySortPipe.prototype.transform = function (array, args) {
        if (typeof args[0] === "undefined") {
            return array;
        }
        var direction = args[0][0];
        var column = args.replace('-', '');
        array.sort(function (a, b) {
            var left = Number(new Date(a[column]));
            var right = Number(new Date(b[column]));
            return (direction === "-") ? left - right : right - left;
        });
        console.log(array);
        return array;
    };
    ArraySortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: "arraySort"
        })
    ], ArraySortPipe);
    return ArraySortPipe;
}());

//# sourceMappingURL=sortPipe.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HarvestService = (function () {
    function HarvestService() {
        this.harvest = null;
        this.editHarvest = null;
    }
    HarvestService.prototype.setId = function (id) {
        this.id = id;
    };
    HarvestService.prototype.getId = function () {
        return this.id;
    };
    HarvestService.prototype.setHarvestObject = function (harvest) {
        this.harvest = harvest;
    };
    HarvestService.prototype.getHarvestObject = function () {
        return this.harvest;
    };
    HarvestService.prototype.setEditHarvestObject = function (editHarvestObject) {
        this.editHarvest = editHarvestObject;
    };
    HarvestService.prototype.getEditHarvestObject = function () {
        return this.editHarvest;
    };
    HarvestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HarvestService);
    return HarvestService;
}());

//# sourceMappingURL=harvestService.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedingsService = (function () {
    function FeedingsService() {
        this.feedings = null;
        this.editFeedings = null;
    }
    FeedingsService.prototype.setId = function (id) {
        this.id = id;
    };
    FeedingsService.prototype.getId = function () {
        return this.id;
    };
    FeedingsService.prototype.setFeedingsObject = function (feedings) {
        this.feedings = feedings;
    };
    FeedingsService.prototype.getFeedingsObject = function () {
        return this.feedings;
    };
    FeedingsService.prototype.setEditFeedingsObject = function (editFeedingsObject) {
        this.editFeedings = editFeedingsObject;
    };
    FeedingsService.prototype.getEditFeedingsObject = function () {
        return this.editFeedings;
    };
    FeedingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FeedingsService);
    return FeedingsService;
}());

//# sourceMappingURL=feedingsService.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.setToken = function (token) {
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        return this.token;
    };
    AuthenticationService.prototype.getHeader = function (json) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (json) {
            headers.append('Content-Type', 'application/json');
        }
        else {
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
        }
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return headers;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());

//# sourceMappingURL=authenticationService.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiaryService = (function () {
    function ApiaryService() {
        this.Apiary = null;
        this.editApiary = null;
    }
    ApiaryService.prototype.setId = function (id) {
        this.id = id;
    };
    ApiaryService.prototype.getId = function () {
        return this.id;
    };
    ApiaryService.prototype.setApiaryObject = function (Apiary) {
        this.Apiary = Apiary;
    };
    ApiaryService.prototype.getApiaryObject = function () {
        return this.Apiary;
    };
    ApiaryService.prototype.setEditApiaryObject = function (editApiaryObject) {
        this.editApiary = editApiaryObject;
    };
    ApiaryService.prototype.getEditApiaryObject = function () {
        return this.editApiary;
    };
    ApiaryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ApiaryService);
    return ApiaryService;
}());

//# sourceMappingURL=apiaryService.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiveCreate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HiveCreate = (function () {
    function HiveCreate(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, inspectionService, loadingCtrl, tabs, tab) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.inspectionService = inspectionService;
        this.loadingCtrl = loadingCtrl;
        this.tabs = tabs;
        this.tab = tab;
        this.edit = false;
        this.hiveObject = {
            name: "",
            status: null,
            type: "",
            note: "",
            family: "",
            familyOrigin: "",
            date: new Date().toISOString()
        };
    }
    HiveCreate.prototype.ionViewDidEnter = function () {
        this.hiveObject = {
            name: "",
            status: null,
            type: "",
            note: "",
            family: "",
            familyOrigin: "",
            date: new Date().toISOString()
        };
        if (this.hiveService.getEditHiveObject()) {
            this.edit = true;
            this.hiveObject = this.hiveService.getEditHiveObject();
            if (this.hiveObject.note != 'null') {
                this.noteData.value = this.hiveObject.note;
            }
        }
    };
    HiveCreate.prototype.ionViewDidLeave = function () {
        this.hiveService.setEditHiveObject(null);
    };
    HiveCreate.prototype.createHive = function (noteData) {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.hiveObject.date = new Date().toISOString();
        if (noteData == '') {
            this.hiveObject.note = 'null';
        }
        else {
            this.hiveObject.note = noteData;
        }
        console.log(this.hiveObject);
        this.http.post('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, this.hiveObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
            _this.popAlert('You have successfully created a new hive named: ' + _this.hiveObject.name, 'success', 1500, 'top');
            _this.navCtrl.pop();
            _this.tabs.select(0);
            _this.tabs.select(1);
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 1500, 'top');
            }
        }, function () {
            // done
        });
    };
    HiveCreate.prototype.editHive = function (noteData) {
        var _this = this;
        var hiveId = this.hiveService.getId();
        this.hiveObject.date = new Date(this.hiveObject.date).toISOString();
        if (noteData == '') {
            this.hiveObject.note = 'null';
        }
        else {
            this.hiveObject.note = noteData;
        }
        this.http.put('https://beeapi.azurewebsites.net/api/hive/' + hiveId, this.hiveObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
            _this.popAlert('You have successfully update hive named: ' + _this.hiveObject.name, 'success', 1500, 'top');
            _this.navCtrl.pop();
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 1500, 'top');
            }
        }, function () {
            // done
        });
    };
    HiveCreate.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    HiveCreate.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('noteData'),
        __metadata("design:type", Object)
    ], HiveCreate.prototype, "noteData", void 0);
    HiveCreate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'hive-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\hive-create\hive-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Hives\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1 *ngIf="edit == true">Edit Hive</h1>\n\n        <h2 *ngIf="edit == true">Please, edit the following information:</h2>\n\n        <h1 *ngIf="edit == false">Add New Hive</h1>\n\n        <h2 *ngIf="edit == false">Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Hive Name</ion-label>      <!--Hive_name-->\n\n            <ion-input placeholder="Enter hive name" [(ngModel)]="hiveObject.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Hive type</ion-label>             <!--Hive_type-->\n\n            <ion-select [(ngModel)]="hiveObject.type" interface="action-sheet" placeholder="Select hive type">\n\n                <ion-option [value]="vertical">Vertical</ion-option>\n\n                <ion-option [value]="horizontal">Horizontal</ion-option>\n\n                <ion-option [value]="nucleus">Nucleus</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Hive status</ion-label>             <!--Hive_status-->\n\n            <ion-select [(ngModel)]="hiveObject.status" interface="action-sheet" placeholder="Select hive status">\n\n                <ion-option [value]="true">Active</ion-option>\n\n                <ion-option [value]="false">Inactive</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Bee family info:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee family</ion-label>             <!--Hive_family-->\n\n            <ion-select [(ngModel)]="hiveObject.family" interface="action-sheet" placeholder="Select bee family">\n\n                <ion-option [value]="buckfast">Buckfast</ion-option>\n\n                <ion-option [value]="carnica">Carnica</ion-option>\n\n                <ion-option [value]="other">Other</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee family origin</ion-label>             <!--Hive_family_origin-->\n\n            <ion-select [(ngModel)]="hiveObject.familyOrigin" interface="action-sheet" placeholder="Select bee family origin">\n\n                <ion-option [value]="purchase">Purchase</ion-option>\n\n                <ion-option [value]="swarming">Natural swarming</ion-option>\n\n                <ion-option [value]="loss">Loss</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Note</ion-label>\n\n            <ion-textarea rows="4" #noteData></ion-textarea>\n\n        </ion-item>\n\n            \n\n        <ion-row>\n\n            <ion-col padding width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline (click)="goBack()">Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col padding width-67 *ngIf="edit == false">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="createHive(noteData.value)">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col padding width-67 *ngIf="edit == true">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="editHive(noteData.value)">Update</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\hive-create\hive-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__["a" /* InspectionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tab */]])
    ], HiveCreate);
    return HiveCreate;
}());

//# sourceMappingURL=hive-create.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InspectCreatePage = (function () {
    function InspectCreatePage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, inspectionService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.inspectionService = inspectionService;
        this.loadingCtrl = loadingCtrl;
        this.edit = false;
        this.inspectionObject = {
            name: "",
            date: new Date().toISOString(),
            strength: "",
            temper: "",
            disease: "",
            framesBees: null,
            framesHoney: null,
            framesHoneySupers: null,
            drones: null,
            droneCells: null
        };
    }
    InspectCreatePage.prototype.ionViewDidEnter = function () {
        this.inspectionObject = {
            name: "",
            date: new Date().toISOString(),
            strength: "",
            temper: "",
            disease: "",
            framesBees: null,
            framesHoney: null,
            framesHoneySupers: null,
            drones: null,
            droneCells: null
        };
        if (this.inspectionService.getEditInspectionObject()) {
            this.edit = true;
            this.inspectionObject = this.inspectionService.getEditInspectionObject();
            this.inspectionObject.strength = this.inspectionObject.strength.replace('%', '');
        }
    };
    InspectCreatePage.prototype.ionViewDidLeave = function () {
        this.inspectionService.setEditInspectionObject(null);
    };
    InspectCreatePage.prototype.createInspection = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var hiveId = this.hiveService.getId();
        this.inspectionObject.date = new Date(this.inspectionObject.date).toISOString();
        this.inspectionObject.strength = this.inspectionObject.strength + "%";
        if (this.inspectionObject.disease == "Nodisease") {
            this.inspectionObject.disease = "No disease";
        }
        else if (this.inspectionObject.disease == "Foulbrood") {
            this.inspectionObject.disease = "Foul brood";
        }
        this.http.post('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId, this.inspectionObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
            _this.popAlert('You have successfully created a new inspection named: ' + _this.inspectionObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        });
    };
    InspectCreatePage.prototype.editInspection = function () {
        var _this = this;
        var inspectionId = this.inspectionService.getId();
        this.inspectionObject.date = new Date(this.inspectionObject.date).toISOString();
        this.inspectionObject.strength = this.inspectionObject.strength + "%";
        if (this.inspectionObject.disease == "Nodisease") {
            this.inspectionObject.disease = "No disease";
        }
        else if (this.inspectionObject.disease == "Foulbrood") {
            this.inspectionObject.disease = "Foul brood";
        }
        delete this.inspectionObject.id;
        this.http.put('https://beeapi.azurewebsites.net/api/inspection/' + inspectionId, this.inspectionObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
            _this.popAlert('You have successfully update inspection named: ' + _this.inspectionObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        });
    };
    InspectCreatePage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    InspectCreatePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InspectCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inspect-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\inspect-create\inspect-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Inspection\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1 *ngIf="edit == true">Edit Inspection</h1>\n\n        <h2 *ngIf="edit == true">Please, edit the following information:</h2>\n\n        <h1 *ngIf="edit == false">Add New Inspection</h1>\n\n        <h2 *ngIf="edit == false">Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Inspection name</ion-label>              <!--Inspection_name-->\n\n            <ion-input placeholder="Enter inspection name" [(ngModel)]="inspectionObject.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>\n\n            <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="inspectionObject.date"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee temper</ion-label>                   <!--Bee_temper-->\n\n            <ion-select [(ngModel)]="inspectionObject.temper" interface="action-sheet" placeholder="Select bee temper">\n\n                <ion-option [value]="Aggressive">Aggressive</ion-option>\n\n                <ion-option [value]="Calm">Calm</ion-option>\n\n                <ion-option [value]="Nervous">Nervous</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Bee strength</ion-label>                 <!--Bee_strength-->\n\n            <ion-select [(ngModel)]="inspectionObject.strength" interface="action-sheet" placeholder="Select bee strength">\n\n                <ion-option [value]="10">10%</ion-option>\n\n                <ion-option [value]="30">30%</ion-option>\n\n                <ion-option [value]="50">50%</ion-option>\n\n                <ion-option [value]="70">70%</ion-option>\n\n                <ion-option [value]="90">90%</ion-option>\n\n                <ion-option [value]="100">100%</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Frames:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Frames with bees</ion-label>             <!--Frames_bees-->\n\n            <ion-input type="number" min="0" max="16" placeholder="Enter number" [(ngModel)]="inspectionObject.framesBees"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Frames with honey in body</ion-label>    <!--Frames_honey-->\n\n            <ion-input type="number" min="0" max="16" placeholder="Enter number" [(ngModel)]="inspectionObject.framesHoney"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Frames with honey in supers</ion-label>  <!--Frames_honey_supers-->\n\n            <ion-input type="number" min="0" max="16" placeholder="Enter number" [(ngModel)]="inspectionObject.framesHoneySupers"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Drones:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Drones</ion-label>                       <!--Drones-->\n\n            <ion-select [(ngModel)]="inspectionObject.drones" interface="action-sheet" placeholder="Drones">\n\n                <ion-option [value]="false">No</ion-option>\n\n                <ion-option [value]="true">Yes</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Drone cells</ion-label>                  <!--Drone_cells-->\n\n            <ion-select [(ngModel)]="inspectionObject.droneCells" interface="action-sheet" placeholder="Drone cells">\n\n                <ion-option [value]="false">No</ion-option>\n\n                <ion-option [value]="true">Yes</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <h1>Diseases:</h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Disease</ion-label>\n\n            <ion-select [(ngModel)]="inspectionObject.disease" interface="action-sheet" placeholder="Select disease type">\n\n                <ion-option [value]="Nodisease">No disease</ion-option>\n\n                <ion-option [value]="Acarine">Acarine</ion-option>\n\n                <ion-option [value]="Foulbrood">Foul brood</ion-option>\n\n                <ion-option [value]="Nosema">Nosema</ion-option>\n\n                <ion-option [value]="Varoosis">Varoosis</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline (click)="goBack()">Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == false">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="createInspection()">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == true">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="editInspection()">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\inspect-create\inspect-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__["a" /* InspectionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], InspectCreatePage);
    return InspectCreatePage;
}());

//# sourceMappingURL=inspect-create.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_harvestService__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the HarvestCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HarvestCreatePage = (function () {
    function HarvestCreatePage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, harvestService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.harvestService = harvestService;
        this.edit = false;
        this.harvestObject = {
            name: "",
            date: new Date().toISOString(),
            product: "",
            quantity: "",
            unit: "",
            note: ""
        };
        this.hivesList = [];
        this.hive = {
            id: 0
        };
    }
    HarvestCreatePage.prototype.ionViewDidLoad = function () {
        this.harvestObject =
            {
                name: "",
                date: new Date().toISOString(),
                product: "",
                quantity: "",
                unit: "",
                note: ""
            };
        this.getHivesList();
        if (this.harvestService.getEditHarvestObject()) {
            this.edit = true;
            this.harvestObject = this.harvestService.getEditHarvestObject();
            if (this.harvestObject.note != 'null') {
                this.noteData.value = this.harvestObject.note;
            }
        }
    };
    HarvestCreatePage.prototype.getHivesList = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.hivesList = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    HarvestCreatePage.prototype.createHarvest = function (noteData) {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var hiveId = this.hive;
        this.harvestObject.date = new Date(this.harvestObject.date).toISOString();
        if (noteData == '') {
            this.harvestObject.note = 'null';
        }
        else {
            this.harvestObject.note = noteData;
        }
        delete this.harvestObject.id;
        this.http.post('https://beeapi.azurewebsites.net/api/harvest/' + apiaryId + '/' + hiveId, this.harvestObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
            _this.popAlert('You have successfully created a new harvest named: ' + _this.harvestObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
        });
    };
    HarvestCreatePage.prototype.editHarvest = function (noteData) {
        var _this = this;
        var harvestId = this.harvestService.getId();
        this.harvestObject.date = new Date(this.harvestObject.date).toISOString();
        if (noteData == '') {
            this.harvestObject.note = 'null';
        }
        else {
            this.harvestObject.note = noteData;
        }
        delete this.harvestObject.id;
        this.http.put('https://beeapi.azurewebsites.net/api/harvest/' + harvestId, this.harvestObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
            _this.popAlert('You have successfully update harvest named: ' + _this.harvestObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        });
    };
    HarvestCreatePage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    HarvestCreatePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('noteData'),
        __metadata("design:type", Object)
    ], HarvestCreatePage.prototype, "noteData", void 0);
    HarvestCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-harvest-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\harvest-create\harvest-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Harvest\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1 *ngIf="edit == true">Edit Harvest</h1>\n\n        <h2 *ngIf="edit == true">Please, edit the following information:</h2>\n\n        <h1 *ngIf="edit == false">Add New Harvest</h1>\n\n        <h2 *ngIf="edit == false">Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item *ngIf="edit == false">\n\n            <ion-label>Hive</ion-label>\n\n            <ion-select interface="action-sheet" [(ngModel)]="hive">\n\n                <ion-option *ngFor="let hive of hivesList" [value]="hive.id">{{ hive.name }}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Harvest name</ion-label>     <!--Harvest_name-->\n\n            <ion-input placeholder="Enter harvest name" [(ngModel)]="harvestObject.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>             <!--Harvest_date-->\n\n            <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="harvestObject.date"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Harvest product</ion-label>  <!--Harvest_product-->\n\n            <ion-select [(ngModel)]="harvestObject.product" interface="action-sheet" placeholder="Select harvest product">\n\n                <ion-option [value]="Beebread">Bee bread</ion-option>\n\n                <ion-option [value]="Beebrood">Bee brood</ion-option>\n\n                <ion-option [value]="Beewax">Beewax</ion-option>\n\n                <ion-option [value]="Honey">Honey</ion-option>\n\n                <ion-option [value]="Pollen">Pollen</ion-option>\n\n                <ion-option [value]="Propolis">Propolis</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Quantity</ion-label>         <!--Harvest_quantity-->\n\n            <ion-input type="number" placeholder="Enter quantity" [(ngModel)]="harvestObject.quantity"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Unit</ion-label>             <!--Harvest_unit-->\n\n            <ion-select [(ngModel)]="harvestObject.unit" interface="action-sheet" placeholder="Select unit">\n\n                <ion-option [value]="Grams">Grams</ion-option>\n\n                <ion-option [value]="Kilograms">Kilograms</ion-option>\n\n                <ion-option [value]="Milliliters">Milliliters</ion-option>\n\n                <ion-option [value]="Liters">Liters</ion-option>\n\n                <ion-option [value]="Frames">Frames</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Notes</ion-label>            <!--Harvest_notes-->\n\n            <ion-textarea rows="4" #noteData></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline>Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == false">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="createHarvest(noteData.value)">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == true">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="editHarvest(noteData.value)">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\harvest-create\harvest-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_harvestService__["a" /* HarvestService */]])
    ], HarvestCreatePage);
    return HarvestCreatePage;
}());

//# sourceMappingURL=harvest-create.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_treatmentService__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the TreatmentCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TreatmentCreatePage = (function () {
    function TreatmentCreatePage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, inspectionService, treatmentService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.inspectionService = inspectionService;
        this.treatmentService = treatmentService;
        this.loadingCtrl = loadingCtrl;
        this.edit = false;
        this.treatmentObject = {
            name: "",
            date: new Date().toISOString(),
            product: "",
            quantity: "",
            unit: "",
            note: ""
        };
        this.hivesList = [];
        this.hive = {
            id: 0
        };
    }
    TreatmentCreatePage.prototype.ionViewDidLoad = function () {
        this.treatmentObject =
            {
                name: "",
                date: new Date().toISOString(),
                product: "",
                quantity: "",
                unit: "",
                note: ""
            };
        this.getHivesList();
        if (this.treatmentService.getEditTreatmentObject()) {
            this.edit = true;
            this.treatmentObject = this.treatmentService.getEditTreatmentObject();
            if (this.treatmentObject.note != 'null') {
                this.noteData.value = this.treatmentObject.note;
            }
        }
    };
    TreatmentCreatePage.prototype.getHivesList = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.hivesList = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    TreatmentCreatePage.prototype.createTreatment = function (noteData) {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var hiveId = this.hive;
        this.treatmentObject.date = new Date(this.treatmentObject.date).toISOString();
        if (noteData == '') {
            this.treatmentObject.note = 'null';
        }
        else {
            this.treatmentObject.note = noteData;
        }
        this.http.post('https://beeapi.azurewebsites.net/api/treatment/' + apiaryId + '/' + hiveId, this.treatmentObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
            _this.popAlert('You have successfully created a new treatment named: ' + _this.treatmentObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
        });
    };
    TreatmentCreatePage.prototype.editTreatment = function (noteData) {
        var _this = this;
        var treatmentId = this.treatmentService.getId();
        this.treatmentObject.date = new Date(this.treatmentObject.date).toISOString();
        if (noteData == '') {
            this.treatmentObject.note = 'null';
        }
        else {
            this.treatmentObject.note = noteData;
        }
        delete this.treatmentObject.id;
        this.http.put('https://beeapi.azurewebsites.net/api/treatment/' + treatmentId, this.treatmentObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
            _this.popAlert('You have successfully update treatment named: ' + _this.treatmentObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        });
    };
    TreatmentCreatePage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    TreatmentCreatePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('noteData'),
        __metadata("design:type", Object)
    ], TreatmentCreatePage.prototype, "noteData", void 0);
    TreatmentCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-treatment-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\treatment-create\treatment-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Treatments\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1 *ngIf="edit == true">Edit Treatment</h1>\n\n        <h2 *ngIf="edit == true">Please, edit the following information:</h2>\n\n        <h1 *ngIf="edit == false">Add New Treatment</h1>\n\n        <h2 *ngIf="edit == false">Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item *ngIf="edit == false">\n\n            <ion-label>Hive</ion-label>\n\n            <ion-select interface="action-sheet" [(ngModel)]="hive">\n\n                <ion-option *ngFor="let hive of hivesList" [value]="hive.id">{{ hive.name }}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Treatment Name</ion-label>     <!--Treatment_quantity-->\n\n            <ion-input placeholder="Enter Treatment Name" [(ngModel)]="treatmentObject.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>         <!--Treatment_date-->\n\n            <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="treatmentObject.date"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Product</ion-label>      <!--Treatment_product-->\n\n            <ion-input placeholder="Enter product name" [(ngModel)]="treatmentObject.product"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Quantity</ion-label>     <!--Treatment_quantity-->\n\n            <ion-input type="number" placeholder="Enter quantity" [(ngModel)]="treatmentObject.quantity"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Unit</ion-label>         <!--Treatment_unit-->\n\n            <ion-select [(ngModel)]="treatmentObject.unit" interface="action-sheet" placeholder="Select unit">\n\n                <ion-option value="Grams">Grams</ion-option>\n\n                <ion-option value="Millimiters">Milliliters</ion-option>\n\n                <ion-option value="Stripes">Stripes</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Note</ion-label>\n\n            <ion-textarea rows="4" #noteData></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline (click)="goBack()">Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == false">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="createTreatment(noteData.value)">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67>\n\n                <ion-buttons end *ngIf="edit == true">\n\n                    <button ion-button block (click)="editTreatment(noteData.value)">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\treatment-create\treatment-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__["a" /* InspectionService */],
            __WEBPACK_IMPORTED_MODULE_7__app_service_treatmentService__["a" /* TreatmentService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], TreatmentCreatePage);
    return TreatmentCreatePage;
}());

//# sourceMappingURL=treatment-create.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feeding_create_feeding_create__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__feeding_inner_feeding_inner__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_feedingsService__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service_treatmentService__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FeedingPage = (function () {
    function FeedingPage(navCtrl, http, apiaryService, authService, treatmentService, feedingsService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.apiaryService = apiaryService;
        this.authService = authService;
        this.treatmentService = treatmentService;
        this.feedingsService = feedingsService;
        this.feedings = [];
    }
    FeedingPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.feedings = [];
        this.http.get('https://beeapi.azurewebsites.net/api/feeding/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.feedings = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done                
        });
    };
    FeedingPage.prototype.ionViewDidLeave = function () {
        this.feedingsService.setEditFeedingsObject(null);
    };
    FeedingPage.prototype.openFeedingCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__feeding_create_feeding_create__["a" /* FeedingCreatePage */]);
    };
    FeedingPage.prototype.openFeedingInnerPage = function (id) {
        this.feedingsService.setId(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__feeding_inner_feeding_inner__["a" /* FeedingInnerPage */]);
    };
    FeedingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feeding',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\feeding\feeding.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Feedings</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div *ngIf="feedings.length == 0">\n\n        <ion-card padding>\n\n            There are no feedings created.\n\n        </ion-card>\n\n    </div>\n\n\n\n    <div *ngIf="feedings.length">\n\n        <ion-card (click)="openFeedingInnerPage(feeding.id)" *ngFor="let feeding of feedings | arraySort:\'-date\';">\n\n            <ion-item>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/sugar.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ feeding.name }}</h2>                                     <!--Feeding_name-->\n\n                <p>{{ feeding.product }}</p>                                            <!--Feeding_product-->\n\n            </ion-item>\n\n            <ion-card-content>\n\n                <p>{{ feeding.note != \'null\' ? feeding.note:\'\' }}</p>                             <!--Feeding_notes-->\n\n            </ion-card-content>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="md-restaurant"></ion-icon>\n\n                        <div>{{ feeding.quantity }} {{ feeding.unit }} per hive</div>             <!--Feeding_quantity, Feeding_unit-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                    <ion-note>\n\n                        Feeding date: {{ feeding.date | date: \'yyyy-MM-dd\' }}                        <!--Feeding_date-->\n\n                    </ion-note>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="primary" (click)="openFeedingCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\feeding\feeding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_8__app_service_treatmentService__["a" /* TreatmentService */],
            __WEBPACK_IMPORTED_MODULE_7__app_service_feedingsService__["a" /* FeedingsService */]])
    ], FeedingPage);
    return FeedingPage;
}());

//# sourceMappingURL=feeding.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_feedingsService__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the FeedingCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FeedingCreatePage = (function () {
    function FeedingCreatePage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, feedingsService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.feedingsService = feedingsService;
        this.loadingCtrl = loadingCtrl;
        this.edit = false;
        this.feedingObject = {
            name: "",
            date: new Date().toISOString(),
            product: "",
            quantity: "",
            unit: "",
            note: ""
        };
        this.hivesList = [];
        this.hive = {
            id: 0
        };
    }
    FeedingCreatePage.prototype.ionViewDidLoad = function () {
        this.feedingObject =
            {
                name: "",
                date: new Date().toISOString(),
                product: "",
                quantity: "",
                unit: "",
                note: ""
            };
        this.getHivesList();
        if (this.feedingsService.getEditFeedingsObject()) {
            this.edit = true;
            this.feedingObject = this.feedingsService.getEditFeedingsObject();
            if (this.feedingObject.note != 'null') {
                this.noteData.value = this.feedingObject.note;
            }
        }
    };
    FeedingCreatePage.prototype.getHivesList = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.hivesList = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    FeedingCreatePage.prototype.createFeeding = function (noteData) {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var hiveId = this.hive;
        this.feedingObject.date = new Date(this.feedingObject.date).toISOString();
        if (noteData == '') {
            this.feedingObject.note = 'null';
        }
        else {
            this.feedingObject.note = noteData;
        }
        this.http.post('https://beeapi.azurewebsites.net/api/feeding/' + apiaryId + '/' + hiveId, this.feedingObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
            _this.popAlert('You have successfully created a new feeding named: ' + _this.feedingObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
        });
    };
    FeedingCreatePage.prototype.editFeeding = function (noteData) {
        var _this = this;
        var feedingId = this.feedingsService.getId();
        this.feedingObject.date = new Date(this.feedingObject.date).toISOString();
        if (noteData == '') {
            this.feedingObject.note = 'null';
        }
        else {
            this.feedingObject.note = noteData;
        }
        delete this.feedingObject.id;
        this.http.put('https://beeapi.azurewebsites.net/api/feeding/' + feedingId, this.feedingObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
            _this.popAlert('You have successfully update feeding named: ' + _this.feedingObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        });
    };
    FeedingCreatePage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    FeedingCreatePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('noteData'),
        __metadata("design:type", Object)
    ], FeedingCreatePage.prototype, "noteData", void 0);
    FeedingCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feeding-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\feeding-create\feeding-create.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Feeding\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1 *ngIf="edit == true">Edit Feeding</h1>\n\n        <h2 *ngIf="edit == true">Please, edit the following information:</h2>\n\n        <h1 *ngIf="edit == false">Add New Feeding</h1>\n\n        <h2 *ngIf="edit == false">Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item *ngIf="edit == false">\n\n            <ion-label>Hive</ion-label>\n\n            <ion-select interface="action-sheet" [(ngModel)]="hive">\n\n                <ion-option *ngFor="let hive of hivesList" [value]="hive.id">{{ hive.name }}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Feeding name</ion-label>     <!--Feeding_name-->\n\n            <ion-input placeholder="Enter feeding name" [(ngModel)]="feedingObject.name"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Date</ion-label>         <!--Feeding_date-->\n\n            <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="feedingObject.date"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Feeding product</ion-label>  <!--Feeding_product-->\n\n            <ion-select [(ngModel)]="feedingObject.product" interface="action-sheet" placeholder="Select feeding product">\n\n                <ion-option [value]="Pollen">Pollen</ion-option>\n\n                <ion-option [value]="Sugar">Sugar</ion-option>\n\n                <ion-option [value]="Syrup">Syrup</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Quantity</ion-label>         <!--Feeding_quantity-->\n\n            <ion-input type="number" placeholder="Enter quantity" [(ngModel)]="feedingObject.quantity"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Unit</ion-label>             <!--Feeding_unit-->\n\n            <ion-select [(ngModel)]="feedingObject.unit" interface="action-sheet" placeholder="Select unit">\n\n                <ion-option [value]="Grams">Grams</ion-option>\n\n                <ion-option [value]="Kilograms">Kilograms</ion-option>\n\n                <ion-option [value]="Milliliters">Milliliters</ion-option>\n\n                <ion-option [value]="Liters">Liters</ion-option>\n\n                <ion-option [value]="Frames">Frames</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Notes</ion-label>            <!--Feeding_notes-->\n\n            <ion-textarea rows="4" #noteData></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline (click)="goBack()">Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == false">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="createFeeding(noteData.value)">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == true">\n\n                <ion-buttons end>\n\n                    <button ion-button block (click)="editFeeding(noteData.value)">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\feeding-create\feeding-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_feedingsService__["a" /* FeedingsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], FeedingCreatePage);
    return FeedingCreatePage;
}());

//# sourceMappingURL=feeding-create.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiariesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiary_create_apiary_create__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apiary_inner_apiary_inner__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ApiariesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ApiariesPage = (function () {
    function ApiariesPage(navCtrl, http, apiaryService, authService, tabs) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.apiaryService = apiaryService;
        this.authService = authService;
        this.tabs = tabs;
        this.apiaries = [];
    }
    ApiariesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.apiaries = [];
        this.http.get('https://beeapi.azurewebsites.net/api/apiary', { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.apiaries = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done                
        });
    };
    ApiariesPage.prototype.openApiaryCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__apiary_create_apiary_create__["a" /* ApiaryCreatePage */]);
    };
    ApiariesPage.prototype.openApiaryInnerPage = function (id) {
        this.apiaryService.setId(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__apiary_inner_apiary_inner__["a" /* ApiaryInnerPage */]);
    };
    ApiariesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apiaries',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\apiaries\apiaries.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Apiaries</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div *ngIf="apiaries.length == 0">\n\n        <ion-card padding>\n\n            There are no apiaries created.\n\n        </ion-card>\n\n    </div>\n\n\n\n    <div *ngIf="apiaries">\n\n        <ion-card (click)="openApiaryInnerPage(apiary.id)" *ngFor="let apiary of apiaries;">\n\n            <ion-item>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/apiary.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ apiary.name }}</h2>      <!--Apiary_name-->\n\n                <p>{{ apiary.place }}</p> <!--Apiary_place-->\n\n            </ion-item>\n\n            <ion-card-content>\n\n                <p>45 active and 5 not active hives in apiary.</p>  <!--Atvaizduoja kiek bityne i� viso aktyvi� ir neaktyvi� avili� pagal Hive_status atribut�-->\n\n            </ion-card-content>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-pulse"></ion-icon>\n\n                        <div>80% strength AVG</div>                 <!--Vidutinis stiprumas bityne pagal atribut� Bee_strength-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-thermometer"></ion-icon>\n\n                        <div>32&deg;C</div>                         <!--Vidutin� temperat�ra bityne pagal atribut� Monitoring_temperature-->\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="primary" (click)="openApiaryCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\apiaries\apiaries.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_service_apiaryService__["a" /* ApiaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_service_apiaryService__["a" /* ApiaryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */]) === "function" && _e || Object])
    ], ApiariesPage);
    return ApiariesPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=apiaries.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiaryCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the ApiaryCreatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ApiaryCreatePage = (function () {
    function ApiaryCreatePage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, inspectionService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.inspectionService = inspectionService;
        this.loadingCtrl = loadingCtrl;
        this.edit = false;
        this.apiaryObject = {
            name: "",
            place: "",
            longtitude: "",
            latitude: ""
        };
    }
    ApiaryCreatePage.prototype.ionViewDidEnter = function () {
        this.apiaryObject = {
            name: "",
            place: "",
            longtitude: "",
            latitude: ""
        };
        if (this.apiaryService.getEditApiaryObject()) {
            this.edit = true;
            this.apiaryObject = this.apiaryService.getEditApiaryObject();
        }
    };
    ApiaryCreatePage.prototype.ionViewDidLeave = function () {
        this.apiaryService.setEditApiaryObject(null);
    };
    ApiaryCreatePage.prototype.createApiary = function () {
        var _this = this;
        this.http.post('https://beeapi.azurewebsites.net/api/apiary', this.apiaryObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
            _this.popAlert('You have successfully created a new apiary named: ' + _this.apiaryObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        });
    };
    ApiaryCreatePage.prototype.editApiary = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        delete this.apiaryObject.id;
        this.http.put('https://beeapi.azurewebsites.net/api/apiary/' + apiaryId, this.apiaryObject, { headers: this.authService.getHeader(true) }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        }, function (error) {
            if (error.status == 400) {
                var errorMessage = JSON.parse(error._body);
                _this.popAlert(errorMessage.message, 'danger', 7000, 'top');
            }
        }, function () {
            // done
            _this.popAlert('You have successfully update apiary named: ' + _this.apiaryObject.name, 'success', 7000, 'top');
            _this.navCtrl.pop();
        });
    };
    ApiaryCreatePage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    ApiaryCreatePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ApiaryCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apiary-create',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\apiary-create\apiary-create.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Apiaries</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item>\n\n        <h1 *ngIf="edit == true">Edit Apiary</h1>\n\n        <h2 *ngIf="edit == true">Please, edit the following information:</h2>\n\n        <h1 *ngIf="edit == false">Add New Apiary</h1>\n\n        <h2 *ngIf="edit == false">Please, enter the following information:</h2>\n\n    </ion-item>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Apiary Name</ion-label>\n\n            <ion-input placeholder="Enter apiary name" [(ngModel)]="apiaryObject.name"></ion-input>         <!--Apiary_name-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Location</ion-label>\n\n            <ion-input placeholder="Enter town, village" [(ngModel)]="apiaryObject.place"></ion-input>       <!--Apiary_place-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Latitude</ion-label>\n\n            <ion-input placeholder="e.g. 44.399854" [(ngModel)]="apiaryObject.longtitude"></ion-input>            <!--Apiary_latitude-->\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked color="primary">Longtitude</ion-label>\n\n            <ion-input placeholder="e.g. 44.399854" [(ngModel)]="apiaryObject.latitude"></ion-input>            <!--Apiary_longtitude-->    \n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <ion-col width-33>\n\n                <ion-buttons start>\n\n                    <button ion-button outline (click)="goBack()">Cancel</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == false">\n\n                <ion-buttons end>\n\n                    <button ion-button block type="submit" (click)="createApiary()">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n            <ion-col width-67 *ngIf="edit == true">\n\n                <ion-buttons end>\n\n                    <button ion-button block type="submit" (click)="editApiary()">Save</button>\n\n                </ion-buttons>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\apiary-create\apiary-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__["a" /* InspectionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ApiaryCreatePage);
    return ApiaryCreatePage;
}());

//# sourceMappingURL=apiary-create.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 292;

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiveService = (function () {
    function HiveService() {
        this.hive = null;
        this.editHive = null;
    }
    HiveService.prototype.setId = function (id) {
        this.id = id;
    };
    HiveService.prototype.getId = function () {
        return this.id;
    };
    HiveService.prototype.setHiveObject = function (hive) {
        this.hive = hive;
    };
    HiveService.prototype.getHiveObject = function () {
        return this.hive;
    };
    HiveService.prototype.setEditHiveObject = function (editHiveObject) {
        this.editHive = editHiveObject;
    };
    HiveService.prototype.getEditHiveObject = function () {
        return this.editHive;
    };
    HiveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HiveService);
    return HiveService;
}());

//# sourceMappingURL=hiveService.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, loadingCtrl, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
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
    RegisterPage.prototype.processlogin = function () {
        var _this = this;
        console.log(this.user);
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: "Please wait...",
        });
        loader.present();
        if (this.user.password != this.user.confirmPassword) {
            this.popAlert('Password need to match', 'warning', 7000, 'top');
        }
        else {
            this.http.post('https://beeapi.azurewebsites.net/api/beekeeper', this.user).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], { email: _this.user.email });
                    loader.dismiss();
                    _this.user = {
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNumber: '',
                        number: '',
                        password: '',
                        confirmPassword: ''
                    };
                }
            }, function (error) {
                console.log(error);
                if (error.status == 400) {
                    loader.dismiss();
                    var errorMessage = JSON.parse(error._body);
                    _this.popAlert(errorMessage.message, 'warning', 7000, 'top');
                }
            });
        }
    };
    RegisterPage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: true,
            position: position,
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\register\register.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <ion-title>Register</ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <p text-center>Enter following details to create account:</p>\n\n\n\n    <ion-list padding>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>First Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.firstName"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Last Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.lastName"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Email</ion-label>\n\n            <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Phone</ion-label>\n\n            <ion-input type="number" [(ngModel)]="user.phone"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Number</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Confirm Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="user.confirmPassword"></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div>\n\n        <button ion-button full round (click)="processlogin()">Register</button>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hives_hives__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__harvest_harvest__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treatment_treatment__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feeding_feeding__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__apiaries_apiaries__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__info_info__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, http, menuCtrl, events, apiaryService, authService, cd) {
        //this.getToken();
        //this.getApiaries();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.apiaryService = apiaryService;
        this.authService = authService;
        this.cd = cd;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_11__apiaries_apiaries__["a" /* ApiariesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__hives_hives__["a" /* HivesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__treatment_treatment__["a" /* TreatmentPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__harvest_harvest__["a" /* HarvestPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__feeding_feeding__["a" /* FeedingPage */];
        this.apiaries = [];
        this.enableTabs = false;
        this.hiveCheck = false;
    }
    TabsPage.prototype.tabsChange = function () {
        if (this.apiaryService.getId()) {
            this.getHives();
        }
        console.log('tab change');
        this.getToken();
        this.getApiaries();
    };
    TabsPage.prototype.ionOpen = function () {
        this.getToken();
        this.getApiaries();
    };
    TabsPage.prototype.getToken = function () {
        if (this.authService.getToken()) {
            this.token = this.authService.getToken();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        }
    };
    TabsPage.prototype.getApiaries = function () {
        var _this = this;
        this.http.get('https://beeapi.azurewebsites.net/api/apiary', { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.apiaries = data;
                _this.cd.markForCheck();
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            _this.cd.detectChanges();
            //this.apiarySelect.open();
            if (_this.apiaries.length == 0) {
                _this.enableTabs = false;
            }
        });
    };
    TabsPage.prototype.getHives = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                if (data.length > 0) {
                    _this.hiveCheck = true;
                }
                else {
                    _this.hiveCheck = false;
                }
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done                
            console.log(_this.enableTabs && _this.hiveCheck);
        });
    };
    TabsPage.prototype.openApiaries = function () {
        this.menuCtrl.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__apiaries_apiaries__["a" /* ApiariesPage */]);
    };
    TabsPage.prototype.selectedApiary = function (apiaryId) {
        this.menuCtrl.close();
        this.enableTabs = true;
        this.apiaryService.setId(apiaryId);
        this.getHives();
        this.tabRef.select(0);
        this.tabRef.select(1);
    };
    TabsPage.prototype.openProfilePage = function () {
        this.menuCtrl.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* ProfilePage */]);
    };
    TabsPage.prototype.openInfoPage = function () {
        this.menuCtrl.close();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__info_info__["a" /* InfoPage */]);
    };
    TabsPage.prototype.logout = function () {
        this.authService.setToken(null);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('apiarySelect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Select */])
    ], TabsPage.prototype, "apiarySelect", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\tabs\tabs.html"*/'<ion-menu [content]="content" (ionOpen)="ionOpen()">\n\n    <ion-header>\n\n        <ion-toolbar color="primary">\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n\n\n            <ion-item no-lines>\n\n                Your workplace:\n\n            </ion-item>\n\n            <ion-item *ngIf="apiaries.length">\n\n                <ion-label>Choose apiary</ion-label>\n\n                <ion-select #apiarySelect [(ngModel)]="apiary" (ionChange)="selectedApiary(apiary)" interface="action-sheet">\n\n                    <ion-option *ngFor="let apiary of apiaries" value="{{ apiary.id }}">{{ apiary.name }}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item (click)="openProfilePage()">\n\n                Profile\n\n            </ion-item>\n\n            <ion-item (click)="openInfoPage()">\n\n                Info\n\n            </ion-item>\n\n            <ion-item (click)="logout()">\n\n                Logout\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n\n\n\n\n<ion-tabs #tabs (ionChange)="tabsChange()">\n\n    <ion-tab [root]="tab1Root" [rootParams]="{token: token}" tabTitle="Apiaries" tabIcon="ios-home-outline"></ion-tab>\n\n    <ion-tab [root]="tab2Root" [rootParams]="{token: token}" [enabled]="enableTabs" tabTitle="Hives" tabIcon="ios-browsers-outline"></ion-tab>\n\n    <ion-tab [root]="tab3Root" [rootParams]="{token: token}" [enabled]="enableTabs && hiveCheck" tabTitle="Treatments" tabIcon="ios-medkit-outline"></ion-tab>\n\n    <ion-tab [root]="tab4Root" [rootParams]="{token: token}" [enabled]="enableTabs && hiveCheck" tabTitle="Harvest" tabIcon="ios-color-fill-outline"></ion-tab>\n\n    <ion-tab [root]="tab5Root" [rootParams]="{token: token}" [enabled]="enableTabs && hiveCheck" tabTitle="Feedings" tabIcon="ios-restaurant-outline"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_10__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hive_create_hive_create__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hive_inner_hive_inner__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_native_node_modules_rxjs_Rx__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_native_node_modules_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ionic_native_node_modules_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var HivesPage = (function () {
    function HivesPage(navCtrl, navParams, http, menuCtrl, apiaryService, authService, hiveService, loadingCtrl, tabs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.menuCtrl = menuCtrl;
        this.apiaryService = apiaryService;
        this.authService = authService;
        this.hiveService = hiveService;
        this.loadingCtrl = loadingCtrl;
        this.tabs = tabs;
        this.hivesData = [];
        this.hives = [];
        this.getToken();
    }
    HivesPage.prototype.ionViewDidEnter = function () {
        this.hives = [];
        if (this.apiaryService.getId()) {
            this.loadHivesData();
        }
        else {
            this.menuCtrl.open();
        }
    };
    HivesPage.prototype.getToken = function () {
        if (this.authService.getToken()) {
            this.token = this.authService.getToken();
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
        }
    };
    HivesPage.prototype.loadHivesData = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.hivesData = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            var _loop_1 = function (hive) {
                hive.monitoring = {
                    temperature: null
                };
                hive.inspections = [];
                hive.monitoring = [];
                __WEBPACK_IMPORTED_MODULE_10_ionic_native_node_modules_rxjs_Rx__["Observable"].forkJoin(_this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hive.id, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }), _this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hive.id, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); })).subscribe(function (data) {
                    hive.monitoring = data[0];
                    hive.inspections = data[1];
                    _this.hives.push(hive);
                }, function (error) {
                    console.error(error);
                }, function () {
                    console.log(_this.hives);
                    // done
                    _this.hivesData = [];
                    _this.hives.sort(function (left, right) {
                        if (left.id > right.id)
                            return 1;
                        if (left.id < right.id)
                            return -1;
                        return 0;
                    });
                });
            };
            // done                
            for (var _i = 0, _a = _this.hivesData; _i < _a.length; _i++) {
                var hive = _a[_i];
                _loop_1(hive);
            }
        });
    };
    HivesPage.prototype.trackByFn = function (index, item) {
        return item.id; // or item.id
    };
    HivesPage.prototype.openHivePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__hive_create_hive_create__["a" /* HiveCreate */]);
    };
    HivesPage.prototype.openHiveInner = function (id) {
        this.hiveService.setHiveObject(this.hives.filter(function (x) { return x.id == id; })[0]);
        this.hiveService.setId(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__hive_inner_hive_inner__["a" /* HiveInner */]);
    };
    HivesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hives',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\hives\hives.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Hives</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ng-container>\n\n        <div *ngIf="hives.length == 0">\n\n            <ion-card padding>\n\n                There are no hives created.\n\n            </ion-card>\n\n        </div>\n\n\n\n        <div *ngIf="hives.length">\n\n            <ion-card (click)="openHiveInner(hive.id)" *ngFor="let hive of hives;trackBy: trackByFn">\n\n                <ion-item>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/hive-img.jpg">\n\n                    </ion-avatar>\n\n                    <h2>{{ hive.name }}</h2>                                  <!--Avilio pavadinimas Hive_name-->\n\n                    <p>Hive {{ hive.status ? \'active\':\'inactive\'}}</p>\n\n                    <!--Avilio statusas Hive_status\n\n                    1 => "Hive active"\n\n                    0 => "Hive inactive"\n\n                -->\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <p>{{ hive.note != \'null\' ? note: \'\' }}</p>\n\n                </ion-card-content>\n\n                <ion-row>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small *ngFor="let inspection of (hive.inspections | slice: -1)">\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div>{{ inspection.strength }} strength</div>                     <!--Naujausias �ra�as Bee_strength-->\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                        <button ion-button icon-left clear small *ngFor="let monitoring of (hive.monitoring | slice: -1)">\n\n                            <ion-icon name="ios-thermometer"></ion-icon>\n\n                            <div>{{ monitoring.temperature }}&deg;C</div>                         <!--Naujausias �ra�as Monitoring_temperature-->\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col center text-center>\n\n                        <ion-note>\n\n                            {{ hive.date | date: \'yyyy-MM-dd\' }}                                  <!--Paskutin�s (naujausios) darytos ap�i�ros data Inspection_date-->\n\n                        </ion-note>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-card>\n\n        </div>\n\n\n\n    </ng-container>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="primary" (click)="openHivePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\hives\hives.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_8__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */]])
    ], HivesPage);
    return HivesPage;
}());

//# sourceMappingURL=hives.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiveInner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspect_inner_inspect_inner__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inspect_create_inspect_create__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_native_node_modules_rxjs_Rx__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_native_node_modules_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ionic_native_node_modules_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service_inspectionService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hive_create_hive_create__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HiveInner = (function () {
    function HiveInner(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, inspectionService, loadingCtrl, alertCtrl, tabs) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.inspectionService = inspectionService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tabs = tabs;
        this.hive = {};
        this.chartOptions = {
            responsive: true
        };
        this.temperatureChartData = [
            { data: [] }
        ];
        this.temperatureChartLabels = [];
        this.humidityChartData = [
            { data: [] }
        ];
        this.humidityChartLabels = [];
        this.strenghtChartData = [
            { data: [80, 74, 71, 79, 83, 89] }
        ];
        this.strenghtChartLabels = ['2018-05-21', '2018-05-22', '2018-05-23', '2018-05-24', '2018-05-25', '2018-05-26'];
        this.hiveTabs = 'info';
        this.hive = this.hiveService.getHiveObject();
    }
    HiveInner.prototype.ionViewDidEnter = function () {
        this.loadHiveInfo();
    };
    HiveInner.prototype.selectedTabChanged = function (hiveTabs) {
        console.log(hiveTabs);
        this.loadHiveInfo();
    };
    HiveInner.prototype.loadHiveInfo = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var hiveId = this.hiveService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/hive/' + apiaryId + '/' + hiveId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                __WEBPACK_IMPORTED_MODULE_8_ionic_native_node_modules_rxjs_Rx__["Observable"].forkJoin(_this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hiveId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }), _this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }), _this.http.get('https://beeapi.azurewebsites.net/api/queen/' + apiaryId + '/' + hiveId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); })).subscribe(function (data) {
                    _this.hive.monitoring = data[0];
                    _this.hive.inspections = data[1];
                    _this.hive.queen = data[2][0];
                }, function (error) {
                    console.error(error);
                }, function () {
                    // done
                    console.log(_this.hive);
                });
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
            _this.getMonitoringData();
        });
    };
    HiveInner.prototype.editHivePage = function () {
        this.hiveService.setEditHiveObject(this.hive);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__hive_create_hive_create__["a" /* HiveCreate */]);
    };
    HiveInner.prototype.deleteHive = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.hive.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: function () {
                        var hiveId = _this.hiveService.getId();
                        _this.http.delete('https://beeapi.azurewebsites.net/api/hive/' + hiveId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.popAlert('You have successfully deleted hive named: ' + _this.hive.name, 'success', 1500, 'top');
                            _this.hiveService.setId(0);
                            _this.hiveService.setHiveObject(null);
                            _this.tabs.select(0);
                            _this.tabs.select(1);
                            _this.navCtrl.pop();
                        }, function (error) {
                            if (error.status == 400) {
                            }
                        }, function () {
                            // done
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    HiveInner.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    HiveInner.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HiveInner.prototype.openInspectInnerPage = function (id) {
        this.inspectionService.setId(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inspect_inner_inspect_inner__["a" /* InspectInnerPage */]);
    };
    HiveInner.prototype.openInspectCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inspect_create_inspect_create__["a" /* InspectCreatePage */]);
    };
    HiveInner.prototype.getMonitoringData = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var hiveId = this.hiveService.getId();
        __WEBPACK_IMPORTED_MODULE_8_ionic_native_node_modules_rxjs_Rx__["Observable"].forkJoin(this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hiveId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }), this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); })).subscribe(function (data) {
            if (data[0]) {
                if (data[0].length > 0) {
                    _this.setTemperatureChart(data[0]);
                    _this.setHumidityChart(data[0]);
                }
            }
            if (data[1]) {
                if (data[1].length > 0) {
                    //this.setStrenghtChart(data[1]);
                }
            }
        }, function (error) {
            console.error(error);
        }, function () {
        });
        this.http.get('https://beeapi.azurewebsites.net/api/monitoring/' + hiveId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                if (data.length > 0) {
                    _this.setTemperatureChart(data);
                    _this.setHumidityChart(data);
                }
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            //done
        });
    };
    // charts
    // Temperature
    HiveInner.prototype.setTemperatureChart = function (data) {
        var resultDataArray = [];
        var resultLabelsArray = [];
        data.forEach(function (arrayElem) {
            resultDataArray.push(arrayElem.temperature);
            var date = __WEBPACK_IMPORTED_MODULE_11_moment__(arrayElem.timestamp).format('YYYY-MM-DD');
            resultLabelsArray.push(date);
        });
        this.temperatureChartData = [{ data: resultDataArray }];
        this.temperatureChartLabels = resultLabelsArray;
    };
    // Humidity
    HiveInner.prototype.setHumidityChart = function (data) {
        var resultDataArray = [];
        var resultLabelsArray = [];
        data.forEach(function (arrayElem) {
            resultDataArray.push(arrayElem.humidity);
            var date = __WEBPACK_IMPORTED_MODULE_11_moment__(arrayElem.timestamp).format('YYYY-MM-DD');
            resultLabelsArray.push(date);
        });
        this.humidityChartData = [{ data: resultDataArray }];
        this.humidityChartLabels = resultLabelsArray;
    };
    // Strenght
    HiveInner.prototype.setStrenghtChart = function (data) {
        var resultDataArray = [];
        var resultLabelsArray = [];
        data.forEach(function (arrayElem) {
            resultDataArray.push(arrayElem.strenght);
            var date = __WEBPACK_IMPORTED_MODULE_11_moment__(arrayElem.date).format('YYYY-MM-DD');
            resultLabelsArray.push(date);
        });
        this.strenghtChartData = [{ data: resultDataArray }];
        this.strenghtChartLabels = resultLabelsArray;
    };
    HiveInner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-hive-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\hive-inner\hive-inner.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Hive inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar>\n\n        <ion-segment [(ngModel)]="hiveTabs" (ionChange)="selectedTabChanged(hiveTabs)">\n\n            <ion-segment-button value="info">\n\n                Hive Info\n\n            </ion-segment-button>\n\n            <ion-segment-button value="inspections">\n\n                Inspections\n\n            </ion-segment-button>\n\n            <ion-segment-button value="stats">\n\n                Statistics\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div [ngSwitch]="hiveTabs">\n\n        <ion-list *ngSwitchCase="\'info\'">\n\n            <div *ngIf="hive">\n\n\n\n                <ion-row style="height: 1rem"></ion-row>\n\n\n\n                <ion-item no-lines>\n\n                    <h1>About hive</h1>\n\n                </ion-item>\n\n\n\n                <ion-item no-lines>\n\n                    <ion-avatar item-left>\n\n                        <img src="./assets/img/hive-img.jpg">\n\n                    </ion-avatar>\n\n                    <h2>{{ hive?.name }}</h2>                            <!--Avilio pavadinimas Hive_name-->\n\n                    <p *ngFor="let inspection of (hive?.inspections | slice: -1)">Last inspection: {{ inspection.date | date: \'yyyy-MM-dd\' }}</p>          <!--Paskutin�s (naujausios) darytos ap�i�ros data Inspection_date-->\n\n                </ion-item>\n\n\n\n                <ion-row>\n\n                    <ion-col *ngIf="hive?.inspections.length > 0">\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-pulse"></ion-icon>\n\n                            <div *ngFor="let inspection of (hive?.inspections | slice: -1)">{{ inspection.strength }} strength</div>              <!--Naujausias �ra�as Bee_strength-->\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col *ngIf="hive?.monitoring.length > 0">\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-thermometer"></ion-icon>\n\n                            <div *ngFor="let monitoring of (hive?.monitoring | slice: -1)">{{ monitoring.temperature }}&deg;C TEMP</div>            <!--Naujausias �ra�as Monitoring_temperature-->\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col *ngIf="hive?.monitoring.length > 0">\n\n                        <button ion-button icon-left clear small>\n\n                            <ion-icon name="ios-water"></ion-icon>\n\n                            <div *ngFor="let monitoring of (hive?.monitoring | slice: -1)">{{ monitoring.humidity }}%</div>                      <!--Naujausias �ra�as Monitoring_humidity-->\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n                <ion-item>\n\n                    <p>Status</p>\n\n                    <h2>{{ hive?.status ? \'Active\':\'Inactive\'}}</h2>\n\n                    <!--Avilio statusas Hive_status\n\n                    1 => "Hive active"\n\n                    0 => "Hive inactive"-->\n\n                </ion-item>\n\n                <ion-item>\n\n                    <p>Hive type</p>\n\n                    <h2>{{ hive?.type }}</h2>                         <!--Avilio tipas Hive_type-->\n\n                </ion-item>\n\n                <ion-item>\n\n                    <p>Bee Family</p>\n\n                    <h2>{{ hive?.family }}</h2>                           <!--Bi�i� �eimos veisl� Hive_family-->\n\n                </ion-item>\n\n\n\n                <div *ngIf="hive?.queen">\n\n\n\n                    <ion-item no-lines>\n\n                        <h1>Queen status</h1>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <p>Name</p>\n\n                        <h2>{{ hive?.queen.name }}</h2>                           <!--Motin�l�s pavadinimas Queen_name-->\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <p>Breed</p>\n\n                        <h2>{{ hive?.queen.breed }}</h2>                            <!--Motin�l�s veisl� Queen_breed-->\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <p>Date</p>\n\n                        <h2>{{ hive?.queen.date | date: \'yyyy-MM-dd\' }}</h2>                         <!--Motin�l�s talpinimo � avil� data Queen_date-->\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <p>State</p>\n\n                        <h2>{{ hive?.queen.state }}</h2>                            <!--Queen_state-->\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <p>Status</p>\n\n                        <h2>{{ hive?.queen.status }}</h2>                           <!--Queen_status-->\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <p>Color</p>\n\n                        <h2>{{ hive?.queen.colour }}</h2>                               <!--Spalva pagal kuri� sprend�iam am�i� Queen_colour-->\n\n                    </ion-item>\n\n\n\n                </div>\n\n\n\n                <ion-item no-lines>\n\n                    <h1>Queen status</h1>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                    <p>Name</p>\n\n                    <h2>Bakfast</h2>                           <!--Motin�l�s pavadinimas Queen_name-->\n\n                </ion-item>\n\n                <ion-item>\n\n                    <p>Breed</p>\n\n                    <h2>Carnica</h2>                            <!--Motin�l�s veisl� Queen_breed-->\n\n                </ion-item>\n\n                <ion-item>\n\n                    <p>Date</p>\n\n                    <h2>2018-05-26</h2>                         <!--Motin�l�s talpinimo � avil� data Queen_date-->\n\n                </ion-item>\n\n                <ion-item>\n\n                    <p>State</p>\n\n                    <h2>Emerged</h2>                            <!--Queen_state-->\n\n                </ion-item>\n\n                <ion-item>\n\n                    <p>Status</p>\n\n                    <h2>Accepted</h2>                           <!--Queen_status-->\n\n                </ion-item>\n\n                <ion-item>\n\n                    <p>Color</p>\n\n                    <h2>Blue</h2>                               <!--Spalva pagal kuri� sprend�iam am�i� Queen_colour-->\n\n                </ion-item>\n\n            </div>\n\n\n\n            <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n                <button ion-fab color="warning" (click)="editHivePage()" style="bottom: 10px;"><ion-icon name="ios-create-outline"></ion-icon></button>\n\n                <button ion-fab color="danger" (click)="deleteHive()"><ion-icon name="ios-remove-circle-outline"></ion-icon></button>\n\n            </ion-fab>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'inspections\'">\n\n\n\n            <div *ngIf="hive.inspections?.length == 0">\n\n                <ion-card padding>\n\n                    There are no inspections created.\n\n                </ion-card>\n\n            </div>\n\n\n\n            <div *ngIf="hive.inspections?.length">\n\n                <ion-card (click)="openInspectInnerPage(inspection.id)" *ngFor="let inspection of hive.inspections">\n\n                    <ion-item>\n\n                        <ion-avatar item-left>\n\n                            <img src="./assets/img/glass.jpg">\n\n                        </ion-avatar>\n\n                        <h2>{{ inspection.name }}</h2>                  <!--Inspection_name-->\n\n                        <p>{{ inspection.temper }}</p>                      <!--Bee_temper-->\n\n                    </ion-item>\n\n                    <ion-card-content>\n\n                        <p>{{ inspection.disease }}</p>                      <!--Disease-->\n\n                    </ion-card-content>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            <button ion-button icon-left clear small>\n\n                                <ion-icon name="ios-pulse"></ion-icon>\n\n                                <div>{{ inspection.strength }} strength</div>         <!--Bee_strength-->\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col center text-center>\n\n                            <ion-note>\n\n                                Inspection date: {{ inspection.date | date: \'yyyy-MM-dd\' }}\n\n                            </ion-note>\n\n                        </ion-col>\n\n\n\n                    </ion-row>\n\n                </ion-card>\n\n            </div>\n\n\n\n            <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n                <button ion-fab color="primary" (click)="openInspectCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n            </ion-fab>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'stats\'">\n\n            <ion-card>\n\n                <ion-item no-lines>\n\n                    <h1>Temperature</h1>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <!--<img src="./assets/img/Chart-JS.png">-->\n\n                    <canvas baseChart\n\n                            [chartType]="\'line\'"\n\n                            [datasets]="temperatureChartData"\n\n                            [labels]="temperatureChartLabels"\n\n                            [options]="chartOptions"\n\n                            [legend]="false"></canvas>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n            <ion-card>\n\n                <ion-item no-lines>\n\n                    <h1>Humidity</h1>\n\n                </ion-item>\n\n                <!--<img src="./assets/img/Chart-JS.png">-->\n\n                <canvas baseChart\n\n                        [chartType]="\'line\'"\n\n                        [datasets]="humidityChartData"\n\n                        [labels]="humidityChartLabels"\n\n                        [options]="chartOptions"\n\n                        [legend]="false"></canvas>\n\n            </ion-card>\n\n\n\n            <ion-card>\n\n                <ion-item no-lines>\n\n                    <h1>Strength</h1>\n\n                </ion-item>\n\n                <!--<img src="./assets/img/Chart-JS.png">-->\n\n                <canvas baseChart\n\n                        [chartType]="\'line\'"\n\n                        [datasets]="strenghtChartData"\n\n                        [labels]="strenghtChartLabels"\n\n                        [options]="chartOptions"\n\n                        [legend]="false"></canvas>\n\n            </ion-card>\n\n\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\hive-inner\hive-inner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_9__app_service_inspectionService__["a" /* InspectionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */]])
    ], HiveInner);
    return HiveInner;
}());

//# sourceMappingURL=hive-inner.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inspect_create_inspect_create__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the InspectInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var InspectInnerPage = (function () {
    function InspectInnerPage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, inspectionService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.inspectionService = inspectionService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    InspectInnerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var hiveId = this.hiveService.getId();
        var inspectionId = this.inspectionService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/inspection/' + apiaryId + '/' + hiveId + '/' + inspectionId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.inspection = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    InspectInnerPage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    InspectInnerPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    InspectInnerPage.prototype.editInspectionPage = function () {
        this.inspectionService.setEditInspectionObject(this.inspection);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__inspect_create_inspect_create__["a" /* InspectCreatePage */]);
    };
    InspectInnerPage.prototype.deleteInspection = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.inspection.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: function () {
                        var inspectionId = _this.inspectionService.getId();
                        _this.http.delete('https://beeapi.azurewebsites.net/api/inspection/' + inspectionId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.popAlert('You have successfully deleted inspection named: ' + _this.inspection.name, 'success', 7000, 'top');
                            _this.inspectionService.setId(0);
                            _this.inspectionService.setInspectionObject(null);
                            _this.navCtrl.pop();
                        }, function (error) {
                            if (error.status == 400) {
                            }
                        }, function () {
                            // done
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    InspectInnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inspect-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\inspect-inner\inspect-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Inspection inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ng-container *ngIf="inspection">\n\n        <ion-list>\n\n            <ion-row style="height: 1rem"></ion-row>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Inspection</h1>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/glass.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ inspection.name }}</h2>                  <!--Inspection_name-->\n\n                <p>{{ inspection.temper }}</p>                      <!--Bee_temper-->\n\n            </ion-item>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-pulse"></ion-icon>\n\n                        <div>{{ inspection.strength }} strength</div>         <!--Bee_strength-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                    <ion-note>\n\n                        Inspection date: {{ inspection.date | date: \'yyyy-MM-dd\' }}     <!--Inspection_date-->\n\n                    </ion-note>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Diseases</h1>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <p>Disease</p>\n\n                <h2>{{ inspection.disease }}</h2>                     <!--Disease-->\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Frames</h1>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <p>Frames with bees</p>\n\n                <h2>{{ inspection.framesBees }}</h2>                      <!--Frames_bees-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Honey frames in body</p>\n\n                <h2>{{ inspection.framesHoney }}</h2>                       <!--Frames_honey-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Honey frames in supers</p>\n\n                <h2>{{ inspection.framesHoneySupers }}</h2>                      <!--Frames_honey_supers-->\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Drones</h1>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <p>Drone cells</p>\n\n                <h2>{{ inspection.droneCells ? \'Yes\':\'No\' }}</h2>                            <!--Drones-->\n\n            </ion-item>\n\n            <ion-item>\n\n                <p>Drones</p>\n\n                <h2>{{ inspection.drones ? \'Yes\':\'No\' }}</h2>                             <!--Drone_cells-->\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ng-container>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="warning" (click)="editInspectionPage()" style="bottom: 10px;"><ion-icon name="ios-create-outline"></ion-icon></button>\n\n        <button ion-fab color="danger" (click)="deleteInspection()"><ion-icon name="ios-remove-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\inspect-inner\inspect-inner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__["a" /* InspectionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InspectInnerPage);
    return InspectInnerPage;
}());

//# sourceMappingURL=inspect-inner.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InspectionService = (function () {
    function InspectionService() {
        this.inspection = null;
        this.editInspection = null;
    }
    InspectionService.prototype.setId = function (id) {
        this.id = id;
    };
    InspectionService.prototype.getId = function () {
        return this.id;
    };
    InspectionService.prototype.setInspectionObject = function (inspection) {
        this.inspection = inspection;
    };
    InspectionService.prototype.getInspectionObject = function () {
        return this.inspection;
    };
    InspectionService.prototype.setEditInspectionObject = function (editInspectionObject) {
        this.editInspection = editInspectionObject;
    };
    InspectionService.prototype.getEditInspectionObject = function () {
        return this.editInspection;
    };
    InspectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InspectionService);
    return InspectionService;
}());

//# sourceMappingURL=inspectionService.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__harvest_create_harvest_create__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harvest_inner_harvest_inner__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_harvestService__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HarvestPage = (function () {
    function HarvestPage(navCtrl, http, apiaryService, authService, harvestService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.apiaryService = apiaryService;
        this.authService = authService;
        this.harvestService = harvestService;
        this.harvests = [];
    }
    HarvestPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.harvests = [];
        this.http.get('https://beeapi.azurewebsites.net/api/harvest/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.harvests = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done                
        });
    };
    HarvestPage.prototype.ionViewDidLeave = function () {
        this.harvestService.setEditHarvestObject(null);
    };
    HarvestPage.prototype.openHarvestCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__harvest_create_harvest_create__["a" /* HarvestCreatePage */]);
    };
    HarvestPage.prototype.openHarvestInnerPage = function (id) {
        this.harvestService.setId(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__harvest_inner_harvest_inner__["a" /* HarvestInnerPage */]);
    };
    HarvestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-harvest',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\harvest\harvest.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Harvest</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div *ngIf="harvests.length == 0">\n\n        <ion-card padding>\n\n            There are no harvests created.\n\n        </ion-card>\n\n    </div>\n\n\n\n    <div *ngIf="harvests.length">\n\n        <ion-card (click)="openHarvestInnerPage(harvest.id)" *ngFor="let harvest of harvests | arraySort:\'-date\';">\n\n            <ion-item>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/honey3.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ harvest.name }}</h2>                            <!--Harvest_name-->\n\n                <p>{{ harvest.product }}</p>                                        <!--Harvest_product-->\n\n            </ion-item>\n\n            <ion-card-content>\n\n                <p>{{ harvest.note != \'null\' ? harvest.note:\'\' }}</p>                    <!--Harvest_notes-->\n\n            </ion-card-content>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-color-fill"></ion-icon>\n\n                        <div>{{ harvest.quantity }} {{ harvest.unit }}</div>                           <!--Harvest_quantity, Havest_unit-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                    <ion-note>\n\n                        Harvest date: {{ harvest.date | date: \'yyyy-MM-dd\' }}                   <!--Harvest_date-->\n\n                    </ion-note>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="primary" (click)="openHarvestCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\harvest\harvest.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_7__app_service_harvestService__["a" /* HarvestService */]])
    ], HarvestPage);
    return HarvestPage;
}());

//# sourceMappingURL=harvest.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HarvestInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_harvestService__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__harvest_create_harvest_create__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HarvestInnerPage = (function () {
    function HarvestInnerPage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, harvestService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.harvestService = harvestService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    HarvestInnerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var harvestId = this.harvestService.getId();
        console.log(harvestId);
        this.http.get('https://beeapi.azurewebsites.net/api/harvest/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.harvest = data.filter(function (x) { return x.id == harvestId; })[0];
                console.log(_this.harvest);
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    HarvestInnerPage.prototype.editHarvestPage = function () {
        this.harvestService.setEditHarvestObject(this.harvest);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__harvest_create_harvest_create__["a" /* HarvestCreatePage */]);
    };
    HarvestInnerPage.prototype.deleteHarvest = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.harvest.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: function () {
                        var harvestId = _this.harvestService.getId();
                        _this.http.delete('https://beeapi.azurewebsites.net/api/harvest/' + harvestId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.popAlert('You have successfully deleted harvest named: ' + _this.harvest.name, 'success', 7000, 'top');
                            _this.harvestService.setId(0);
                            _this.harvestService.setHarvestObject(null);
                            _this.navCtrl.pop();
                        }, function (error) {
                            if (error.status == 400) {
                            }
                        }, function () {
                            // done
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    HarvestInnerPage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    HarvestInnerPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    HarvestInnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-harvest-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\harvest-inner\harvest-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Harvest Inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ng-container *ngIf="harvest">\n\n        <ion-list>\n\n            <ion-row style="height: 1rem"></ion-row>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Harvest</h1>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/honey3.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ harvest.name }}</h2>                            <!--Harvest_name-->\n\n                <p>{{ harvest.product }}</p>                                        <!--Harvest_product-->\n\n            </ion-item>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="ios-color-fill"></ion-icon>\n\n                        <div>{{ harvest.quantity }} {{ harvest.unit }}</div>                           <!--Harvest_quantity, Harvest_unit-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                    <ion-note>\n\n                        Harvest date: {{ harvest.date | date: \'yyyy-MM-dd\' }}                   <!--Harvest_date-->\n\n                    </ion-note>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item>\n\n                <p>Notes</p>\n\n                <h2>{{ harvest.note != \'null\' ? harvest.note:\'\' }}</h2>                 <!--Harvest_notes-->\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ng-container>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="warning" (click)="editHarvestPage()" style="bottom: 10px;"><ion-icon name="ios-create-outline"></ion-icon></button>\n\n        <button ion-fab color="danger" (click)="deleteHarvest()"><ion-icon name="ios-remove-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\harvest-inner\harvest-inner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_harvestService__["a" /* HarvestService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HarvestInnerPage);
    return HarvestInnerPage;
}());

//# sourceMappingURL=harvest-inner.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatment_create_treatment_create__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__treatment_inner_treatment_inner__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service_treatmentService__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TreatmentPage = (function () {
    function TreatmentPage(navCtrl, http, apiaryService, authService, treatmentService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.apiaryService = apiaryService;
        this.authService = authService;
        this.treatmentService = treatmentService;
        this.treatments = [];
    }
    TreatmentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.treatments = [];
        this.http.get('https://beeapi.azurewebsites.net/api/treatment/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.treatments = data;
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done                
        });
    };
    TreatmentPage.prototype.ionViewDidLeave = function () {
        this.treatmentService.setEditTreatmentObject(null);
    };
    TreatmentPage.prototype.openTreatmentInnerPage = function (id) {
        this.treatmentService.setId(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__treatment_inner_treatment_inner__["a" /* TreatmentInnerPage */]);
    };
    TreatmentPage.prototype.openTreatmentCreatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__treatment_create_treatment_create__["a" /* TreatmentCreatePage */]);
    };
    TreatmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-treatment',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\treatment\treatment.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Treatments</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-search-outline"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <div *ngIf="treatments.length == 0">\n\n        <ion-card padding>\n\n            There are no treatments created.\n\n        </ion-card>\n\n    </div>\n\n\n\n    <div *ngIf="treatments.length">\n\n        <ion-card (click)="openTreatmentInnerPage(treatment.id)" *ngFor="let treatment of treatments | arraySort:\'-date\';">\n\n            <ion-item>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/medicine.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ treatment.name }}</h2>                       <!--Treatment_name-->\n\n                <p>{{ treatment.product }} used for treatment.</p>     <!--Treatment_product-->\n\n            </ion-item>\n\n            <ion-card-content>\n\n                <p>{{ treatment.note != \'null\' ? treatment.note:\'\' }}</p>                          <!--Treatment_disease-->\n\n            </ion-card-content>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="md-medkit"></ion-icon>\n\n                        <div>{{ treatment.quantity }} {{ treatment.unit }} per hive</div>      <!--Treatement_quantity, Treatment_unit-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                    <ion-note>\n\n                        Treatment date: {{ treatment.date | date: \'yyyy-MM-dd\' }}         <!--Treatment_date-->\n\n                    </ion-note>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="primary" (click)="openTreatmentCreatePage()"><ion-icon name="ios-add-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\treatment\treatment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_7__app_service_treatmentService__["a" /* TreatmentService */]])
    ], TreatmentPage);
    return TreatmentPage;
}());

//# sourceMappingURL=treatment.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_treatmentService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__treatment_create_treatment_create__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the TreatmentInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var TreatmentInnerPage = (function () {
    function TreatmentInnerPage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, treatmentService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.treatmentService = treatmentService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    TreatmentInnerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var treatmentId = this.treatmentService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/treatment/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.treatment = data.filter(function (x) { return x.id == treatmentId; })[0];
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    TreatmentInnerPage.prototype.editTreatmentPage = function () {
        this.treatmentService.setEditTreatmentObject(this.treatment);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__treatment_create_treatment_create__["a" /* TreatmentCreatePage */]);
    };
    TreatmentInnerPage.prototype.deleteTreatment = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.treatment.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: function () {
                        var treatmentId = _this.treatmentService.getId();
                        _this.http.delete('https://beeapi.azurewebsites.net/api/treatment/' + treatmentId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
                            if (data) {
                                _this.popAlert('You have successfully deleted treatment named: ' + _this.treatment.name, 'success', 7000, 'top');
                                _this.treatmentService.setId(0);
                                _this.treatmentService.setTreatmentObject(null);
                                _this.navCtrl.pop();
                            }
                        }, function (error) {
                            if (error.status == 400) {
                            }
                        }, function () {
                            // done
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    TreatmentInnerPage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    TreatmentInnerPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    TreatmentInnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-treatment-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\treatment-inner\treatment-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Treatment Inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ng-container *ngIf="treatment">\n\n        <ion-list>\n\n            <ion-row style="height: 1rem"></ion-row>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Treatment</h1>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/medicine.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ treatment.name }}</h2>                       <!--Treatment_name-->\n\n                <p>{{ treatment.product }} used for treatment.</p>     <!--Treatment_product-->\n\n            </ion-item>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="md-color-filter"></ion-icon>\n\n                        <div>{{ treatment.quantity }} {{ treatment.unit }}</div>               <!--Treatement_quantity, Treatment_unit-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                    <ion-note>\n\n                        Treatment date: {{ treatment.date | date: \'yyyy-MM-dd\' }}          <!--Treatment_date-->\n\n                    </ion-note>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item>\n\n                <p>Notes</p>\n\n                <h2>{{ treatment.note != \'null\' ? treatment.note:\'\' }}</h2>         <!--Treatment_disease-->\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ng-container>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="warning" (click)="editTreatmentPage()" style="bottom: 10px;"><ion-icon name="ios-create-outline"></ion-icon></button>\n\n        <button ion-fab color="danger" (click)="deleteTreatment()"><ion-icon name="ios-remove-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\treatment-inner\treatment-inner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_treatmentService__["a" /* TreatmentService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TreatmentInnerPage);
    return TreatmentInnerPage;
}());

//# sourceMappingURL=treatment-inner.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedingInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_feedingsService__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feeding_create_feeding_create__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the FeedingInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var FeedingInnerPage = (function () {
    function FeedingInnerPage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, feedingsService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.feedingsService = feedingsService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    FeedingInnerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        var feedingId = this.feedingsService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/feeding/get-all/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.feeding = data.filter(function (x) { return x.id == feedingId; })[0];
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    FeedingInnerPage.prototype.editFeedingPage = function () {
        this.feedingsService.setEditFeedingsObject(this.feeding);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__feeding_create_feeding_create__["a" /* FeedingCreatePage */]);
    };
    FeedingInnerPage.prototype.deleteFeeding = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.feeding.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: function () {
                        var feedingId = _this.feedingsService.getId();
                        _this.http.delete('https://beeapi.azurewebsites.net/api/feeding/' + feedingId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.popAlert('You have successfully deleted feeding named: ' + _this.feeding.name, 'success', 7000, 'top');
                            _this.feedingsService.setId(0);
                            _this.feedingsService.setFeedingsObject(null);
                            _this.navCtrl.pop();
                        }, function (error) {
                            if (error.status == 400) {
                            }
                        }, function () {
                            // done
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        alert.dismiss();
                    }
                }
            ]
        });
        alert.present();
    };
    FeedingInnerPage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    FeedingInnerPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FeedingInnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feeding-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\feeding-inner\feeding-inner.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Feeding Inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ng-container *ngIf="feeding">\n\n        <ion-list>\n\n            <ion-row style="height: 1rem"></ion-row>\n\n\n\n            <ion-item no-lines>\n\n                <h1>Feeding</h1>\n\n            </ion-item>\n\n\n\n            <ion-item no-lines>\n\n                <ion-avatar item-left>\n\n                    <img src="./assets/img/sugar.jpg">\n\n                </ion-avatar>\n\n                <h2>{{ feeding.name }}</h2>                                 <!--Feeding_name-->\n\n                <p>{{ feeding.product }}</p>                                        <!--Feeding_product-->\n\n            </ion-item>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button icon-left clear small>\n\n                        <ion-icon name="md-restaurant"></ion-icon>\n\n                        <div>{{ feeding.quantity }} {{ feeding.unit }} per hive</div>                    <!--Feeding quantity, Feeding_unit-->\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col center text-center>\n\n                    <ion-note>\n\n                        Feeding date: {{ feeding.date | date: \'yyyy-MM-dd\' }}                    <!--Feeding_date-->\n\n                    </ion-note>\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-item>\n\n                <p>Feeding notes</p>\n\n                <h2>{{ feeding.note != \'null\' ? feeding.note:\'\' }}</h2>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </ng-container>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="warning" (click)="editFeedingPage()" style="bottom: 10px;"><ion-icon name="ios-create-outline"></ion-icon></button>\n\n        <button ion-fab color="danger" (click)="deleteFeeding()"><ion-icon name="ios-remove-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\feeding-inner\feeding-inner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_feedingsService__["a" /* FeedingsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FeedingInnerPage);
    return FeedingInnerPage;
}());

//# sourceMappingURL=feeding-inner.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiaryInnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__apiary_create_apiary_create__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ApiaryInnerPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ApiaryInnerPage = (function () {
    function ApiaryInnerPage(navCtrl, toastCtrl, http, authService, apiaryService, hiveService, inspectionService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.authService = authService;
        this.apiaryService = apiaryService;
        this.hiveService = hiveService;
        this.inspectionService = inspectionService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        //this.apiary = "info";
    }
    ApiaryInnerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var apiaryId = this.apiaryService.getId();
        this.http.get('https://beeapi.azurewebsites.net/api/apiary/' + apiaryId, { headers: this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data) {
                _this.apiary = data[0];
            }
        }, function (error) {
            if (error.status == 400) {
            }
        }, function () {
            // done
        });
    };
    ApiaryInnerPage.prototype.editApiaryPage = function () {
        this.apiaryService.setEditApiaryObject(this.apiary);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__apiary_create_apiary_create__["a" /* ApiaryCreatePage */]);
    };
    ApiaryInnerPage.prototype.deleteApiary = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete Confirmation',
            subTitle: 'Would you like to delete' + this.apiary.name + '?',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'confirm',
                    handler: function () {
                        var apiaryId = _this.apiaryService.getId();
                        _this.http.delete('https://beeapi.azurewebsites.net/api/apiary/' + apiaryId, { headers: _this.authService.getHeader() }).map(function (res) { return res.json(); }).subscribe(function (data) {
                            _this.popAlert('You have successfully deleted apiary named: ' + _this.apiary.name, 'success', 7000, 'top');
                            _this.apiaryService.setId(0);
                            _this.apiaryService.setApiaryObject(null);
                            _this.navCtrl.pop();
                        }, function (error) {
                            if (error.status == 400) {
                            }
                        }, function () {
                            // done
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
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
    };
    ApiaryInnerPage.prototype.popAlert = function (message, type, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: 'toast-' + type,
            duration: duration,
            dismissOnPageChange: false,
            position: position,
        });
        toast.present();
    };
    ApiaryInnerPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ApiaryInnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apiary-inner',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\apiary-inner\apiary-inner.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n        <ion-title>Apiary inner</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n    <!--<ion-toolbar>\n\n        <ion-segment [(ngModel)]="apiary">\n\n            <ion-segment-button value="info">\n\n                Apiary Info\n\n            </ion-segment-button>\n\n            <ion-segment-button value="hives">\n\n                Hives in Apiary\n\n            </ion-segment-button>\n\n            <ion-segment-button value="stats">\n\n                Statistics\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>-->\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n    <!--<div [ngSwitch]="apiary">\n\n        <ion-list *ngSwitchCase="\'info\'">-->\n\n    <ng-container *ngIf="apiary">\n\n        <ion-row style="height: 1rem"></ion-row>\n\n\n\n        <ion-item no-lines>\n\n            <h1>Apiary</h1>\n\n        </ion-item>\n\n\n\n        <ion-item no-lines>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/apiary.jpg">\n\n            </ion-avatar>\n\n            <h2>{{ apiary.name }}</h2>                                      <!--Apiary_name-->\n\n            <p>{{ apiary.place }}</p>                                 <!--Apiary_place-->\n\n        </ion-item>\n\n\n\n        <!--<ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strengt</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C TEMP</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-water"></ion-icon>\n\n                    <div>25%</div>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>-->\n\n        <!--<ion-item>\n\n            <p>Active hives</p>\n\n            <h2>45 active hives</h2>\n\n        </ion-item>-->\n\n        <!--<ion-item>\n\n            <p>Inactive hives</p>\n\n            <h2>5 inactive hives</h2>\n\n        </ion-item>-->\n\n        <ion-item>\n\n            <p>Location</p>\n\n            <h2>{{ apiary.longtitude }}, {{ apiary.latitude }}</h2>                         <!--Atvaizduoja bityno ilgum� ir platum�. Apiary_longtitude ir Apiary_latitude-->\n\n        </ion-item>\n\n    </ng-container>\n\n\n\n    <ion-fab right bottom style="z-index:100;position:fixed;right:20px;bottom:65px;">\n\n        <button ion-fab color="warning" (click)="editApiaryPage()" style="bottom: 10px;"><ion-icon name="ios-create-outline"></ion-icon></button>\n\n        <button ion-fab color="danger" (click)="deleteApiary()"><ion-icon name="ios-remove-circle-outline"></ion-icon></button>\n\n    </ion-fab>\n\n\n\n    <!--<ion-item no-lines>\n\n        <h1>Bee families in apiary</h1>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <p>Carnica</p>\n\n        <h2>40 bee families</h2>\n\n    </ion-item>\n\n    <ion-item>\n\n        <p>Buckfast</p>\n\n        <h2>5 bee families</h2>\n\n    </ion-item>-->\n\n    <!--</ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'hives\'">-->\n\n    <!--<ion-card (click)="openHiveInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#1 Avilys</h2>\n\n            <p>Active hive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Too high temperature.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>90% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>40&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#2 Avilys</h2>\n\n            <p>Active hive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>100% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#3 Avilys</h2>\n\n            <p>Active hive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Everything is fine!</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>90% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>33&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n\n\n    <ion-card (click)="openHiveInnerPage()">\n\n        <ion-item>\n\n            <ion-avatar item-left>\n\n                <img src="./assets/img/hive-img.jpg">\n\n            </ion-avatar>\n\n            <h2>#4 Avilys</h2>\n\n            <p>Active hive</p>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <p>Excessive humidity.</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-pulse"></ion-icon>\n\n                    <div>80% strength</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button icon-left clear small>\n\n                    <ion-icon name="ios-thermometer"></ion-icon>\n\n                    <div>32&deg;C</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col center text-center>\n\n                <ion-note>\n\n                    2018-04-20\n\n                </ion-note>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>-->\n\n    <!--</ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'stats\'">-->\n\n    <!--<ion-item no-lines>\n\n        <h1>Temperature</h1>\n\n    </ion-item>\n\n    <img src="./assets/img/Chart-JS.png">\n\n\n\n    <ion-item no-lines>\n\n        <h1>Humidity</h1>\n\n    </ion-item>\n\n    <img src="./assets/img/Chart-JS.png">\n\n\n\n    <ion-item no-lines>\n\n        <h1>Strength</h1>\n\n    </ion-item>\n\n    <img src="./assets/img/Chart-JS.png">-->\n\n    <!--</ion-list>\n\n    </div>-->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\apiary-inner\apiary-inner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__app_service_authenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__app_service_apiaryService__["a" /* ApiaryService */],
            __WEBPACK_IMPORTED_MODULE_5__app_service_hiveService__["a" /* HiveService */],
            __WEBPACK_IMPORTED_MODULE_6__app_service_inspectionService__["a" /* InspectionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ApiaryInnerPage);
    return ApiaryInnerPage;
}());

//# sourceMappingURL=apiary-inner.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */]);
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Profile</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-row style="height: 50px"></ion-row>\n\n    <div style="text-align: center;">\n\n        <ion-icon ios="ios-contact" md="md-contact" color="primary" style="font-size: 80px;"></ion-icon>\n\n        <p>{{ user.email }}</p>\n\n    </div>\n\n\n\n    <ion-list padding>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>First Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.firstName"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Last Name</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.lastName"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Phone</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.phoneNumber"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label stacked>Number</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.number"></ion-input>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <div>\n\n        <button ion-button full round (click)="saveProfile()">Save</button>\n\n        <button ion-button full round (click)="changePassword()">Change Password</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__app_service_authenticationService__["a" /* AuthenticationService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service_authenticationService__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\change-password\change-password.html"*/'<!--\n\n  Generated template for the ChangePasswordPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Change Password</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-row style="height: 50px"></ion-row>\n\n    <div style="text-align: center;">\n\n        <ion-icon ios="ios-contact" md="md-lock" color="primary" style="font-size: 80px;"></ion-icon>\n\n    </div>\n\n    <p text-center>In order to change password:</p>\n\n\n\n    <ion-list padding>\n\n        <ion-item>\n\n            <ion-label stacked>Old Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password.oldpassword"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>New Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password.newpassword"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>New Confirm Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="password.confirmNewPassword"></ion-input>\n\n        </ion-item>\n\n\n\n        <div>\n\n            <button ion-button full round (click)="savePassword()">Change Password</button>\n\n        </div>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\change-password\change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__app_service_authenticationService__["a" /* AuthenticationService */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the InfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPagePage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\info\info.html"*/'<!--\n\n  Generated template for the InfoPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n\n\n        <button ion-button menuToggle icon-only>\n\n            <ion-icon name=\'ios-menu-outline\'></ion-icon>\n\n        </button>\n\n\n\n        <ion-title>Info</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only>\n\n                <ion-icon name="ios-more-outline"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                1. Create an apiary\n\n            </ion-card-title>\n\n            <p>\n\n                In order to use this application you have to create an apiary. You can create as many apiaries as you want.\n\n            </p>\n\n            <ion-row style="height: 20px"></ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                2. Select your workplace\n\n            </ion-card-title>\n\n            <p>\n\n                Select one of the created apiaries. Apiary represents your workplace and can be changed any time to another apiary.\n\n            </p>\n\n            <ion-row style="height: 20px"></ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n                3. Create your first hive\n\n            </ion-card-title>\n\n            <p>\n\n                Press "Hives" menu button and "Create a hive" button. Enter following information and your are ready to go!\n\n            </p>\n\n            <ion-row style="height: 20px"></ion-row>\n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\pages\info\info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(805);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_apiaries_apiaries__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_apiary_create_apiary_create__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_apiary_inner_apiary_inner__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feeding_feeding__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_feeding_create_feeding_create__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feeding_inner_feeding_inner__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_harvest_harvest__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_harvest_create_harvest_create__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_harvest_inner_harvest_inner__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_hives_hives__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_hive_create_hive_create__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hive_inner_hive_inner__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_inspect_inner_inspect_inner__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_inspect_create_inspect_create__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_stats_stats__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_treatment_treatment__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_treatment_inner_treatment_inner__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_treatment_create_treatment_create__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_apiaryService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_authenticationService__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_hiveService__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_inspectionService__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__service_treatmentService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__service_harvestService__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__service_feedingsService__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_profile_profile__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_change_password_change_password__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_info_info__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipe_sortPipe__ = __webpack_require__(1186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Pages import






















// Services













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_feeding_feeding__["a" /* FeedingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_feeding_create_feeding_create__["a" /* FeedingCreatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_feeding_inner_feeding_inner__["a" /* FeedingInnerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hives_hives__["a" /* HivesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_harvest_harvest__["a" /* HarvestPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_harvest_create_harvest_create__["a" /* HarvestCreatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_harvest_inner_harvest_inner__["a" /* HarvestInnerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hive_create_hive_create__["a" /* HiveCreate */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hive_inner_hive_inner__["a" /* HiveInner */],
                __WEBPACK_IMPORTED_MODULE_20__pages_inspect_inner_inspect_inner__["a" /* InspectInnerPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_inspect_create_inspect_create__["a" /* InspectCreatePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_apiaries_apiaries__["a" /* ApiariesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_apiary_create_apiary_create__["a" /* ApiaryCreatePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_apiary_inner_apiary_inner__["a" /* ApiaryInnerPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_stats_stats__["a" /* StatsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_treatment_treatment__["a" /* TreatmentPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_treatment_inner_treatment_inner__["a" /* TreatmentInnerPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_treatment_create_treatment_create__["a" /* TreatmentCreatePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_39__pipe_sortPipe__["a" /* ArraySortPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_30_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_feeding_feeding__["a" /* FeedingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_feeding_create_feeding_create__["a" /* FeedingCreatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_feeding_inner_feeding_inner__["a" /* FeedingInnerPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_hives_hives__["a" /* HivesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_harvest_harvest__["a" /* HarvestPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_harvest_create_harvest_create__["a" /* HarvestCreatePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_harvest_inner_harvest_inner__["a" /* HarvestInnerPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_hive_create_hive_create__["a" /* HiveCreate */],
                __WEBPACK_IMPORTED_MODULE_16__pages_hive_inner_hive_inner__["a" /* HiveInner */],
                __WEBPACK_IMPORTED_MODULE_20__pages_inspect_inner_inspect_inner__["a" /* InspectInnerPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_inspect_create_inspect_create__["a" /* InspectCreatePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_apiaries_apiaries__["a" /* ApiariesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_apiary_inner_apiary_inner__["a" /* ApiaryInnerPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_apiary_create_apiary_create__["a" /* ApiaryCreatePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_stats_stats__["a" /* StatsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_treatment_treatment__["a" /* TreatmentPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_treatment_inner_treatment_inner__["a" /* TreatmentInnerPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_treatment_create_treatment_create__["a" /* TreatmentCreatePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_info_info__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__service_apiaryService__["a" /* ApiaryService */],
                __WEBPACK_IMPORTED_MODULE_28__service_authenticationService__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_29__service_hiveService__["a" /* HiveService */],
                __WEBPACK_IMPORTED_MODULE_31__service_inspectionService__["a" /* InspectionService */],
                __WEBPACK_IMPORTED_MODULE_33__service_treatmentService__["a" /* TreatmentService */],
                __WEBPACK_IMPORTED_MODULE_34__service_harvestService__["a" /* HarvestService */],
                __WEBPACK_IMPORTED_MODULE_35__service_feedingsService__["a" /* FeedingsService */],
                __WEBPACK_IMPORTED_MODULE_32__angular_common__["c" /* DatePipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        console.log('lalalal');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\app\app.html"*/'<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Gytis\source\repos\BeeAppFront-End\BeeApp\BeeApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[705]);
//# sourceMappingURL=main.js.map