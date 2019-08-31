import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRegisterService } from '../../services/login-register.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router:Router, private formBuilder: FormBuilder, private _user:LoginRegisterService) { }

  resetForm: FormGroup;
  resetmessage: string;
  submitted = false;

  ngOnInit() {
    this.resetForm = this.formBuilder.group({

      email:['', [Validators.required, Validators.email]],

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.resetForm.controls; }

  resetClick(){
    this.submitted = true;
      if (this.resetForm.invalid) { 
        return;
      } else {
        let resetdata = { 
                      "mail": this.resetForm.controls['email'].value,
                   };
       // console.log(registerdata);
        this._user.resetpwd(resetdata)
        .subscribe(res=>{
          console.log(res);
         if(res.statusText == 'OK'){
           this.resetmessage = "Check your email for details on how to reset your password";
           this.resetForm.reset();
         }
        }, err => {
          console.log(err);
          this.resetmessage = err.error.message;
        });
      }
  }
}
