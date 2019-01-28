import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from './../../../shared/services/common/baseClass';
import { AppDialogService } from './../../../shared/components/componentsAsService/app-dialog/app-dialog.service';
import { AppConfirmService } from './../../../shared/components/componentsAsService/app-confirm/app-confirm.service';
import { LoginService } from './login.service';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { GlobalVariables } from '../../../shared/services/common/globalVariables';
import { GlobalVariableEnums } from '../../../shared/constants/gloabal-variable-enums';
import Utils from './../../../shared/services/common/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {

  public successMessageStatus: string;
  public errorMessageStatus: string;

  // once successfull login make can activate service to true
  constructor(public route: Router,
    public injector: Injector,
    public dialog: AppDialogService,
    public confirm: AppConfirmService,
    private _loginService: LoginService,
    private _globalVariables: GlobalVariables) {
    super(injector);
  }

  ngOnInit() {
    Utils.log('hello from login component by utils method');
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

  // getDetails
  getDetails() {
    this._globalVariables.setParameterData(GlobalVariableEnums.TOKEN, 'abc');
    RequestEnums.LOGIN.values.push(1);
    this._loginService.login(RequestEnums.LOGIN).subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';
    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }
}
