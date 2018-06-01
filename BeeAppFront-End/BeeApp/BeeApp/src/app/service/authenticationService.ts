import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthenticationService {
    token: string;

    constructor() {
    }

    setToken(token: string) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    getHeader(json?: boolean) {
        let headers = new Headers();
        if (json) {
            headers.append('Content-Type', 'application/json');
        } else {
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
        }
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);

        return headers;
    }
}