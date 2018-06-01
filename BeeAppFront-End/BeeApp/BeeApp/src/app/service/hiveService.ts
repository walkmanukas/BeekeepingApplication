import { Injectable } from '@angular/core';

@Injectable()
export class HiveService {
    id: number;
    hive: any = null;
    editHive: any = null;

    constructor() {
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setHiveObject(hive) {
        this.hive = hive;
    }

    getHiveObject() {
        return this.hive;
    }

    setEditHiveObject(editHiveObject) {
        this.editHive = editHiveObject;
    }

    getEditHiveObject() {
        return this.editHive;
    }
}