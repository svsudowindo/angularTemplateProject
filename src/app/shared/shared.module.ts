// Angular Moudles
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { PredefinedModule } from './modules/predefined/predefined.module';
import { MaterialModule } from './modules/material/material.module';
import { CustomModule } from './modules/custom/custom.module';
import { AppConfirmModule } from './components/componentsAsService/app-confirm/app-confirm.module';
import {  AppDialogModule } from './components/componentsAsService/app-dialog/app-dialog.module';
import { AppLoaderModule } from './components/componentsAsService/app-loader/app-loader.module';
import { ResponseMessageComponent } from './components/response-message/response-message.component';

@NgModule({
  declarations: [ResponseMessageComponent],
  imports: [
    CommonModule,
    CustomModule,
    PredefinedModule,
    MaterialModule,
    AppConfirmModule,
    AppDialogModule,
    AppLoaderModule
  ],
  exports: [
    CustomModule,
    PredefinedModule,
    MaterialModule,
    ResponseMessageComponent
  ]
})

// Import this Module in all submodules for reusablility
export class SharedModule { }
