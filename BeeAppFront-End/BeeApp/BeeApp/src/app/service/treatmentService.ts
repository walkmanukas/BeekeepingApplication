import { Injectable } from '@angular/core';

@Injectable()
export class TreatmentService {
    id: number;
    treatment: any = null;
    editTreatment: any = null;

    constructor() {
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setTreatmentObject(treatment) {
        this.treatment = treatment;
    }

    getTreatmentObject() {
        return this.treatment;
    }

    setEditTreatmentObject(editTreatmentObject) {
        this.editTreatment = editTreatmentObject;
    }

    getEditTreatmentObject() {
        return this.editTreatment;
    }
}