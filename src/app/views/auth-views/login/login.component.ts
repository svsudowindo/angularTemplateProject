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
import { Store } from '@ngrx/store';
import * as fromUser from '../../../shared/reducers/user.reducer';
import { updateLanguageKey, resetUser } from 'src/app/shared/actions/user.actions';
import { LoggerService } from 'src/app/shared/services/common/logger.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {

  public successMessageStatus: string;
  public errorMessageStatus: string;

  // once successfull login make can activate service to true
  constructor(
    public route: Router,
    public dialog: AppDialogService,
    public confirm: AppConfirmService,
    private loginService: LoginService,
    private globalVariables: GlobalVariables,
    private userStore: Store<fromUser.State>,
    private loggerService: LoggerService) {
    super();
  }

  ngOnInit() {
    this.loggerService.getLogger(this.constructor.name).info('Message by using logdown js service');
  }

  /**
   * For navigate to registration page.
   */
  register() {
    this.route.navigate(['registration']);
  }

  /**
   * For opening the dialog
   */
  openDialog() {
    this.dialog.openDialog('Hello', 'How are you', 'Ok').subscribe(data => {
      alert(JSON.stringify(data));
    });
  }

  /**
   * For opening the confirmation popup.
   */
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

  /**
   * For getting the details
   */
  getDetails() {
    this.successMessageStatus = '';
    this.errorMessageStatus = '';

    this.globalVariables.setParameterData(GlobalVariableEnums.TOKEN, 'abc');
    RequestEnums.LOGIN.values.push(1);
    this.loginService.login(RequestEnums.LOGIN).subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';
    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }

  /**
   * For dispatching the events
   */
  dispatch() {
    this.userStore.dispatch(updateLanguageKey({ languageKey: 'English' }));
  }

  /**
   * For resetng the user store
   */
  resetUser() {
    this.userStore.dispatch(resetUser({}));
  }

}
