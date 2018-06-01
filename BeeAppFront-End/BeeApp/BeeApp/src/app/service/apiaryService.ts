import { Injectable } from '@angular/core';

@Injectable()
export class ApiaryService {
    id: number;
    Apiary: any = null;
    editApiary: any = null;

    constructor() {
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setApiaryObject(Apiary) {
        this.Apiary = Apiary;
    }

    getApiaryObject() {
        return this.Apiary;
    }

    setEditApiaryObject(editApiaryObject) {
        this.editApiary = editApiaryObject;
    }

    getEditApiaryObject() {
        return this.editApiary;
    }
}