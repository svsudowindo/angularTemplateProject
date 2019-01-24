import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { AppDialogComponent } from './app-dialog.component';

@Injectable()
export class AppDialogService {

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string, okButton: string): Observable<boolean> {
    let dialogRef: MatDialogRef<AppDialogComponent>;
    dialogRef = this.dialog.open(AppDialogComponent, {
      width: '380px',
      panelClass: 'appdialogcontainer',
      disableClose: true,
      data: { title, message, okButton }
    });
    return dialogRef.afterClosed();
  }
}
