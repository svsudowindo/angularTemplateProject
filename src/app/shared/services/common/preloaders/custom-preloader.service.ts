
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloaderService implements PreloadingStrategy {

  preload(route: Route, load: Function): Observable<any> {
    console.log('hai');
    return route.data && route.data.preload ? load() : of(null);
  }

}
