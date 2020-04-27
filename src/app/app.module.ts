import { reducers } from './shared/reducers/index';
// Angular Moudles
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// custom components
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptorsService } from './shared/services/http/header-interceptors.service';

import { environment } from './../environments/environment';
import * as fromUser from './shared/reducers/user.reducer';
import { userFeatureKey } from './shared/reducers/user.reducer';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: [userFeatureKey], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorsService, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
