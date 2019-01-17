// Angular Moudles
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import {PredefinedModule} from './predefined/predefined.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PredefinedModule
  ],
  exports: [
    PredefinedModule
  ]
})
export class SharedModule { }
