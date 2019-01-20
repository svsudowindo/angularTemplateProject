import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, AbstractControl } from '@angular/forms';
import { BaseClass } from './../../../../common/services/common/baseClass';
import AppEnums from './../../../../common/services/common/enums';
import { Registration } from './../registration.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseClass implements OnInit {

  @ViewChild('addUserNgForm') addUserNgForm: FormGroupDirective;
  public registerationForm: FormGroup;
  public registrationObject = new Registration();
  public successMessageStatus: string;
  public errorMessageStatus: string;
  public genderData = ['Male', 'Female'];
  

  public validation_messages = {
    'firstname': [
      { type: 'required', message: 'USERS.ADD_USER.ERRORS.REQUIRED.FIRST_NAME' },
      { type: 'whitespace', message: 'Please enter valid firstname' },
      { type: 'pattern', message: 'Please enter alphabets only' },
      { type: 'maxlength', message: 'Firstname can be maximum of 20 characters' },
      { type: 'minlength', message: 'Firstname should be minimum of 2 characters' }
    ],
    'email': [
      { type: 'required', message: 'USERS.ADD_USER.ERRORS.REQUIRED.EMAIL' },
      { type: 'pattern', message: 'SIGN_IN.ERRORS.PATTERN' }
    ],
    'doj': [
      { type: 'required', message: 'USERS.ADD_USER.ERRORS.REQUIRED.DOJ' }
    ],
    'lastname': [
      { type: 'required', message: 'USERS.ADD_USER.ERRORS.REQUIRED.LAST_NAME' },
      { type: 'whitespace', message: 'Please enter valid lastname' },
      { type: 'pattern', message: 'Please enter alphabets only' },
      { type: 'maxlength', message: 'Lastname can be maximum of 20 characters' },
      { type: 'minlength', message: 'Lastname should be minimum of 3 characters' }
    ],
    'phone': [
      { type: 'required', message: 'USERS.ADD_USER.ERRORS.REQUIRED.PHONE_NUMBER' },
      { type: 'pattern', message: 'Please enter only digits for phone number' },
      { type: 'maxlength', message: 'Phone number can be maximum of 10 digits' },
      { type: 'minlength', message: 'Phone number should be minimum of 10 digits' },
      { type: 'phoneNumber', message: 'Please enter valid mobile number' }
    ],
    'gender': [
      { type: 'required', message: 'USERS.ADD_USER.ERRORS.REQUIRED.GENDER' }
    ]
  };

  constructor(public injector: Injector) {
    super(injector);
    
  }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      firstname: new FormControl('', Validators.compose([
        Validators.required, this.noWhitespaceValidator, Validators.pattern("^[A-Za-z' ']*$"),
        Validators.maxLength(20),
        Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(AppEnums.VALIDATION_PATTERNS.EMAIL)
      ])),
      doj: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required, this.noWhitespaceValidator, Validators.pattern("^[A-Za-z' ']*$"),
        Validators.maxLength(20),
        Validators.minLength(3)
      ])),
      role: new FormControl(),
      phone: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.pattern(AppEnums.VALIDATION_PATTERNS.POSITIVE_INTEGER),
        Validators.maxLength(10),
        Validators.minLength(10),
        this.phoneNumberValidator
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required
      ])),
      managerid: new FormControl()
    })

  }


  onsubmit() {
    if (this.registerationForm.valid) {
          

          //this.registerationForm.reset();
          //this.addUserNgForm.resetForm();
     
    }
  }
  
  public noWhitespaceValidator(control: FormControl) {
    let isWhitespace = (control.value || '').trim().length == 0;
    let isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true }
  }

  phoneNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value.trim() !== undefined && (isNaN(control.value.trim()) || control.value.trim() < 1)) {

      return { 'phoneNumber': true };
    }
    return null;
  }

 



}
