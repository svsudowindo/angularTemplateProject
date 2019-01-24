import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AppLoaderComponent } from './app-loader.component';

@Injectable()
export class AppLoaderService {
  public isOpen = false;
  dialogRef: MatDialogRef<AppLoaderComponent>;
  constructor(private dialog: MatDialog) { }

  public open(): Observable<boolean> {
    if (this.isOpen === false) {
      this.dialogRef = this.dialog.open(AppLoaderComponent, { disableClose: true, panelClass: 'apploadercontainer' });
      this.dialogRef.updateSize('170px');
      this.isOpen = true;
      return this.dialogRef.afterClosed();
    }
  }

  public close() {
    if (this.isOpen === true) {
      this.isOpen = false;
      this.dialogRef.close();
    }
  }
}
