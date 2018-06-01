import { Injectable } from '@angular/core';

@Injectable()
export class HarvestService {
    id: number;
    harvest: any = null;
    editHarvest: any = null;

    constructor() {
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setHarvestObject(harvest) {
        this.harvest = harvest;
    }

    getHarvestObject() {
        return this.harvest;
    }

    setEditHarvestObject(editHarvestObject) {
        this.editHarvest = editHarvestObject;
    }

    getEditHarvestObject() {
        return this.editHarvest;
    }
}