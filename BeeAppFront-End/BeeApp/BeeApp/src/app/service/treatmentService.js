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
    return TreatmentService;
}());
TreatmentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], TreatmentService);
export { TreatmentService };
//# sourceMappingURL=treatmentService.js.map