import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from './../../../shared/services/common/baseClass';
import { AppDialogService } from './../../../shared/components/componentsAsService/app-dialog/app-dialog.service';
import { AppConfirmService } from './../../../shared/components/componentsAsService/app-confirm/app-confirm.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {

  public successMessageStatus: string;
  public errorMessageStatus: string;

  // once successfull login make can activate service to true
  constructor(public route: Router, public injector: Injector,
    public dialog: AppDialogService, public confirm: AppConfirmService) {
    super(injector);
  }

  ngOnInit() {

  }

  register() {
    this.preShow();
    this.route.navigate(['registration']);
  }

  openDialog() {
    this.dialog.openDialog('Hello', 'How are you', 'Ok').subscribe(data => {
      alert(JSON.stringify(data));
    });
  }

  openConfirm() {
    this.confirm.confirm('title', 'Enter the confirm message', 'Ok', 'Cancel').subscribe((data) => {
     // alert(JSON.stringify(data));
      if (data) {
        this.successMessageStatus = 'Success';
      } else {
        this.errorMessageStatus = 'Error';
      }
    });
  }

}
