import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from 'angular-web-storage';
import { LoginRegisterService } from '../../services/login-register.service';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  constructor(private router:Router,              
    private formBuilder: FormBuilder,
    private session: SessionStorageService, private _user:LoginRegisterService) { }

  changepwdForm: FormGroup;
  changepwdmessage: string;
  formsubmitted = false;

  ngOnInit() {
    this.changepwdForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      newPassword:['', [Validators.required, Validators.minLength(4)]],
      confirmPassword:['', [Validators.required]],
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.changepwdForm.controls; }

  updatePassword(){
    this.formsubmitted = true;
      if (this.changepwdForm.invalid) { 
        return;
      } else {
        let passworddata = { 
                      "currentPassword": this.changepwdForm.controls['currentPassword'].value,
                      "newPassword": this.changepwdForm.controls['newPassword'].value,
                    };
        this._user.changepassword(passworddata)
        .subscribe(res=>{

        if(res.statusText == 'OK'){
          this.changepwdmessage = 'Password Changed Successfully'; 
         }
        }, err => {
          console.log(err);
          this.changepwdmessage = err.error.message;
        });
      }
  }
}
