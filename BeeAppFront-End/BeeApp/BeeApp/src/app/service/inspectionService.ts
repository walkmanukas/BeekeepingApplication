import { Injectable } from '@angular/core';

@Injectable()
export class InspectionService {
    id: number;
    inspection: any = null;
    editInspection: any = null;

    constructor() {
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setInspectionObject(inspection) {
        this.inspection = inspection;
    }

    getInspectionObject() {
        return this.inspection;
    }

    setEditInspectionObject(editInspectionObject) {
        this.editInspection = editInspectionObject;
    }

    getEditInspectionObject() {
        return this.editInspection;
    }
}