// Angular Moudles
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { Logger, Options as LoggerOptions } from 'angular2-logger/core';

// custom components
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './common/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './common/layouts/admin-layout/admin-layout.component';

// Custom Modules
import {SharedModule} from './common/modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from './../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrimOnBlurDirective } from './common/directives/ng-trim.directive';
import { InputTrimModule } from 'ng2-trim-directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { GlobalVariables } from './common/services/common/globalVariables';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    TrimOnBlurDirective
    
  ],
  imports: [
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    InputTrimModule
  ],
  providers: [GlobalVariables
  ],
  bootstrap: [AppComponent],
  exports: [TrimOnBlurDirective]
})
export class AppModule { }
