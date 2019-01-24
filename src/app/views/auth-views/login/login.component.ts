import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from './../../../shared/services/common/baseClass';
import { AppDialogService } from './../../../shared/components/componentsAsService/app-dialog/app-dialog.service';
import { AppConfirmService } from './../../../shared/components/componentsAsService/app-confirm/app-confirm.service';
import { CommonHttpService } from '../../../shared/services/http/common-http.service';
import { HttpHeaders } from '@angular/common/http';

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
    private _httpCommonService: CommonHttpService) {
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

  getRemoteData() {
    this._httpCommonService.get('todos').subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';

    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }

  postRemoteData() {
    const postBody = JSON.stringify({
      title: 'sai',
      body: 'kumar',
      userId: 999
    });
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json; charset=UTF-8');
    this._httpCommonService.post('posts', postBody, headers).subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';

    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }


  putRemoteData() {
    const postBody = JSON.stringify({
      title: 'sai1234',
      body: 'kumar',
      userId: 999,
      id: 1
    });
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json; charset=UTF-8');
    this._httpCommonService.put('posts/1', postBody, headers).subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';

    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }

  patchRemoteData() {
    const postBody = JSON.stringify({
      title: 'sai1234',
      body: 'kumar1234'
    });
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json; charset=UTF-8');
    this._httpCommonService.patch('posts/1', postBody, headers).subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';
    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }

  deleteRemoteData() {
    const headers = new HttpHeaders();
    headers.set('Content-type', 'application/json; charset=UTF-8');
    this._httpCommonService.delete('posts/1', headers).subscribe((res) => {
      console.log(res);
      this.successMessageStatus = 'Success';
    },
      ((err) => {
        this.errorMessageStatus = err;
      }));
  }
}
