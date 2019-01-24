import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { AppConfirmComponent } from './app-confirm.component';

@Injectable()
export class AppConfirmService {

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string, okButton: string, cancelButton: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AppConfirmComponent>;
    dialogRef = this.dialog.open(AppConfirmComponent, {
      width: '380px',
      panelClass: 'appconfirmcontainer',
      disableClose: true,
      data: { title, message, okButton, cancelButton }
    });
    return dialogRef.afterClosed();
  }

}
