import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from 'angular-web-storage';
import * as $ from "jquery";
import { LoginRegisterService } from '../services/login-register.service';

declare var $: any;

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private router:Router,              
              private formBuilder: FormBuilder,
              private session: SessionStorageService, private _user:LoginRegisterService) {  }

  loginForm: FormGroup;
  signupForm: FormGroup;
  message: string;
  submitted = false;

  ngOnInit() {

      $(document).ready(function () {
          $('#horizontalTab').easyResponsiveTabs({
              type: 'default',       
              width: 'auto', 
              fit: true  
          });
      });

      function tablogin()
      {
          $('#horizontalTab').easyResponsiveTabs({
              type: 'default',       
              width: 'auto', 
              fit: true  
          });
      }

      this.loginForm = this.formBuilder.group({
        uname: ['', Validators.required],
        password: ['', Validators.required]
      });

      this.signupForm = this.formBuilder.group({
        company:[''],
        email:[''],
        uname: [''],
        password: ['']
      });
  }

  
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  loginClick(){
    this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      } else {
     this._user.login(JSON.stringify(this.loginForm.value))
      .subscribe(
      data=>{
        console.log(data);
        if (data) {
          this.session.set('currentUser', data);
          this.router.navigate(['/dashboard']);
          this.message = '';
        } else {
          this.message = 'Invalid login credential';  
        } 
      });
     // this.session.set('currentUser', 'testname');
     // this.router.navigate(['/dashboard']);
      }
  }

}
