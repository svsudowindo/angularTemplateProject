// Angular Moudles
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// custom components
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './common/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './common/layouts/admin-layout/admin-layout.component';

// Custom Modules
import {SharedModule} from './common/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
