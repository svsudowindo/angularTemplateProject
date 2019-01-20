// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { errors } from '../JSONS/errors.json';
import { PROPERTIES } from '../JSONS/app-properties';

// Custom Enums

@Injectable({
    providedIn: 'root'
})
export class CommonHttpService {

    private base_url = PROPERTIES.BASE_URL;
    constructor(private http: HttpClient) {}

    // @method get
    // @params HttpParams if needed
    // @path Request URL
    public get(path, params: HttpParams = new HttpParams()) {
        const requestUrl = this.base_url + path;
        return this.http.get(requestUrl, {
            params: params
        }).pipe(
            map(res => {
                return res;
            }),
            catchError(this.errorHandler), // Catch Errors if service fails
            retry(PROPERTIES.RETRY_SERVICE_COUNT) // if you want to retry the request. Please mention the retry count value
        );
    }

    // Please add errors and error codes in errors.json.ts file
    private errorHandler(error: HttpErrorResponse) {
        // To know weather the error is from Client or server error
        if (error.error instanceof ErrorEvent) {
            console.log('Client side error. Please check the request and body');
        } else {
            console.log('Server Error. Please check the error from server side');
        }
        // get's error message from errors.json.ts
        let errorMessage = errors['default'].message;
        if (errors.hasOwnProperty(error.status)) {
            errorMessage = errors[error.status].message;
        }
        return throwError(errorMessage);
    }
}
