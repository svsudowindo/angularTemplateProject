import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // once successfull login make can activate service to true
  constructor(public route: Router) { }

  ngOnInit() {
  }

  register() {
    this.route.navigate(['registration', 'register']);
  }
}
