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
    return ApiaryService;
}());
ApiaryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ApiaryService);
export { ApiaryService };
//# sourceMappingURL=apiaryService.js.map