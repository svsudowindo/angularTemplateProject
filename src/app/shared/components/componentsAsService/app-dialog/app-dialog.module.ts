import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../../../shared.module';
import { NgModule } from '@angular/core';
import { AppDialogComponent } from './app-dialog.component';
import { AppDialogService } from './app-dialog.service';
import { MaterialModule } from 'src/app/shared/modules/predefined/material/material.module';

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [AppDialogComponent],
  declarations: [AppDialogComponent],
  providers: [AppDialogService],
  entryComponents: [AppDialogComponent]
})
export class AppDialogModule { }
