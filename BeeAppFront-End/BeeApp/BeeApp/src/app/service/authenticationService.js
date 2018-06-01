var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
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
        var headers = new Headers();
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
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authenticationService.js.map