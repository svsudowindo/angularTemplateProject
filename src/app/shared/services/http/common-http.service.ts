// Angular Modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PROPERTIES } from '../../constants/app-properties';
import { errors } from '../../constants/errors';
import { Observable } from 'rxjs';

// Custom Enums

@Injectable({
    providedIn: 'root'
})
export class CommonHttpService {

    private base_url = PROPERTIES.BASE_URL;
    constructor(private _http: HttpClient) { }

    // @method get
    // @params HttpParams if needed
    // @path Request URL
    public get(path, params: HttpParams = new HttpParams(), customHeaders?: HttpHeaders): Observable<any> {
        const requestUrl = this.base_url + path;
        return this._http.get(requestUrl, {
            params: params,
            headers: customHeaders
        }).pipe(
            map(res => {
                return res;
            }),
            catchError(this.errorHandler), // Catch Errors if service fails
            retry(PROPERTIES.RETRY_SERVICE_COUNT) // if you want to retry the request. Please mention the retry count value
        );
    }
    // Utility method for Create.
    // @method post
    // @param path
    // @param body
    public put(path: string, body: Object = {}, customHeaders?: HttpHeaders): Observable<any> {
        path = this.base_url + path;
        const requestOptions = customHeaders ? { headers: customHeaders } : {};
        return this._http.put(
            path, body, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
            );
    }
    // Utility method for Create.
    // @method post
    // @param path
    // @param body
    public post(path: string, body: Object = {}, customHeaders?: HttpHeaders): Observable<any> {
        path = this.base_url + path;
        const requestOptions = customHeaders ? { headers: customHeaders } : {};
        return this._http.post(
            path, body, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
            );
    }


    // Utility method for Create.
    // @method patch
    // @param path
    // @param body
    // @param customHeaders
    public patch(path: string, body: Object = {}, customHeaders?: HttpHeaders): Observable<any> {
        path = this.base_url + path;
        const requestOptions = customHeaders ? { headers: customHeaders } : {};
        return this._http.patch(
            path, body, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
            );
    }

    // Utility method for Create.
    // @method delete
    // @param path
    // @param customHeaders
    public delete(path: string, customHeaders?: HttpHeaders): Observable<any> {
        path = this.base_url + path;
        const requestOptions = customHeaders ? { headers: customHeaders } : {};
        return this._http.delete(
            path, requestOptions).pipe(
                map(res => {
                    return res;
                }),
                catchError(this.errorHandler)
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
