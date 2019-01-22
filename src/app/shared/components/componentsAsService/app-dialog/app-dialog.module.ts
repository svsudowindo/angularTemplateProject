import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppDialogComponent } from './app-dialog.component';
import { AppDialogService } from './app-dialog.service';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [AppDialogComponent],
  declarations: [AppDialogComponent],
  providers: [AppDialogService],
  entryComponents: [AppDialogComponent]
})
export class AppDialogModule { }
