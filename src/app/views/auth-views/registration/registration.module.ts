import { NgModule } from '@angular/core';
import { TitleCasePipe, CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatChipsModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule
} from '@angular/material';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegistrationRoutingModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatOptionModule,
    MatSelectModule,
    SharedModule,
    CommonModule
  ],
  providers: [TitleCasePipe]
})

export class RegistrationModule { }
