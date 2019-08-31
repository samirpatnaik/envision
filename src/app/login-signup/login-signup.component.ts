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

  signupForm: FormGroup;
  signupmessage: string;
  signupsubmitted = false;
  
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

      this.signupForm = this.formBuilder.group({
        firstname:[''],
        lastname:[''],
        email:['', [Validators.required, Validators.email]],
        uname: ['', Validators.required],
        pwd: ['', [Validators.required, Validators.minLength(4)]]
      });
  }

  // convenience getter for easy access to form fields
  get s() { return this.signupForm.controls; }

 
  signupClick(){
    this.signupsubmitted = true;
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
           this.signupForm.reset();
           this.router.navigate(['/login'], { queryParams: { registered: 'true' } }); 
         }
        }, err => {
          console.log(err);
          this.signupmessage = err.error.message;
        });
      }
  }
}
