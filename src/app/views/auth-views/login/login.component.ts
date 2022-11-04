import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VALIDATION_PATTERNS } from 'src/app/shared/constants/validation-patterns';
import { BaseClass } from './../../../shared/services/common/baseClass';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {
  public loginForm: FormGroup;
  inputType = 'password';
  eye_icon = 'visibility_off';

  public validation_messages = {
    'email': [
      { type: 'required', message: 'Please enter user LDAP ID' }
    ],
    'password': [
      { type: 'required', message: 'Please enter Password' },
    ]
  };
  constructor(private _formBuilder: FormBuilder, private router: Router) {
    super();
  }
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }

  visibilityChange() {
    if (this.inputType === 'password') {

      this.inputType = 'text';
      this.eye_icon = 'visibility';
    } else {

      this.inputType = 'password';
      this.eye_icon = 'visibility_off';
    }
  }
}
