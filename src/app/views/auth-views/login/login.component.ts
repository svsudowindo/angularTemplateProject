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

  public validation_messages = {
    'email': [
      { type: 'required', message: 'Please enter email' },
      { type: 'pattern', message: 'Please enter valid email' }
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
        Validators.required,
        Validators.pattern(VALIDATION_PATTERNS.EMAIL)
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
