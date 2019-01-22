import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppConfirmComponent } from './app-confirm.component';
import { AppConfirmService } from './app-confirm.service';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [AppConfirmComponent],
  declarations: [AppConfirmComponent],
  providers: [AppConfirmService],
  entryComponents: [AppConfirmComponent]
})
export class AppConfirmModule { }
