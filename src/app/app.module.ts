// Angular Moudles
import { NgModule } from '@angular/core';
import { Logger, Options as LoggerOptions } from 'angular2-logger';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// custom components
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';

// Custom Modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptorsService } from './shared/services/http/header-interceptors.service';

import { environment } from './../environments/environment';

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
    FlexLayoutModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorsService, multi: true },
     Logger,
    { provide: LoggerOptions, useValue: { level: environment.logger.level } }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
