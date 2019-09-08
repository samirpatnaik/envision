import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from 'angular-web-storage';
import * as $ from "jquery";
import { LoginRegisterService } from '../../services/login-register.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute , private router:Router,        
              private formBuilder: FormBuilder,
              private session: SessionStorageService, private _user:LoginRegisterService) {  }

  loginForm: FormGroup;
  loginmessage: string;
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
      
      this.route.queryParams
      .subscribe(params => {
        if(params.registered !== undefined && params.registered === 'true') {
            this.loginmessage = 'Registration Successful! Please Login!';
        }
      });

      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

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
          //console.log(data.id_token);
          this.session.set('currentUser', this.loginForm.controls['username'].value);
          this.session.set('userToken', data.id_token);
          this.router.navigate(['/dashboard']);
          this.loginmessage = '';
        } else {
          this.loginmessage = 'Invalid login credential';  
        } 
      });
    }
  }

}
