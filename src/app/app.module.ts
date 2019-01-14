import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './common/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './common/layouts/admin-layout/admin-layout.component';
import { CanActivateService } from './common/services/can-activate.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
