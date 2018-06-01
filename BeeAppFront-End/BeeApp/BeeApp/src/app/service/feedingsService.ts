import { Injectable } from '@angular/core';

@Injectable()
export class FeedingsService {
    id: number;
    feedings: any = null;
    editFeedings: any = null;

    constructor() {
    }

    setId(id: number) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setFeedingsObject(feedings) {
        this.feedings = feedings;
    }

    getFeedingsObject() {
        return this.feedings;
    }

    setEditFeedingsObject(editFeedingsObject) {
        this.editFeedings = editFeedingsObject;
    }

    getEditFeedingsObject() {
        return this.editFeedings;
    }
}