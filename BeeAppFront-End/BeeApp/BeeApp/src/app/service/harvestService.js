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
    return HarvestService;
}());
HarvestService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], HarvestService);
export { HarvestService };
//# sourceMappingURL=harvestService.js.map