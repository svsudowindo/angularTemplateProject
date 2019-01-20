// Angular Moudles
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom Modules
import { PredefinedModule } from './modules/predefined/predefined.module';
import { MaterialModule } from './modules/material/material.module';
import { CustomModule } from './modules/custom/custom.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomModule,
    PredefinedModule,
    MaterialModule
  ],
  exports: [
    CustomModule,
    PredefinedModule,
    MaterialModule
  ]
})

// Import this Module in all submodules for reusablility
export class SharedModule { }
