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
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

      this.signupForm = this.formBuilder.group({
        firstname:[''],
        lastname:[''],
        email:['', [Validators.required, Validators.email]],
        uname: ['', Validators.required],
        pwd: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get s() { return this.signupForm.controls; }

  loginClick(){
    this.submitted = true;
      if (this.loginForm.invalid) { 
        return;
      } else {
        let logindata = { 
                      "username": this.loginForm.controls['username'].value,
                      "password": this.loginForm.controls['password'].value,
                      "rememberMe": true
                   };
     this._user.login(logindata)
      .subscribe(
      data=>{

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

  signupClick(){
    this.submitted = true;
      if (this.signupForm.invalid) { 
        return;
      } else {
        let registerdata = { 
                      "login": this.signupForm.controls['uname'].value,
                      "password": this.signupForm.controls['pwd'].value,
                      "email": this.signupForm.controls['email'].value,
                      "firstName": this.signupForm.controls['firstname'].value,
                      "lastName": this.signupForm.controls['lastname'].value,
                      "createdBy": "UI"
                   };
       // console.log(registerdata);
        this._user.register(registerdata)
        .subscribe(res=>{
         if(res.statusText == 'OK'){
           this.message = "User Signup Completed Successfully";
           this.signupForm.reset();
         }
        }, err => {
          this.message = err.error.message;
        });
      }
  }
}
