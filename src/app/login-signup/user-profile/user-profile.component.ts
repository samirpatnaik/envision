import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from 'angular-web-storage';
import { LoginRegisterService } from '../../services/login-register.service';
//import { ProfileModel } from '../../model/ProfileModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private router:Router,              
    private formBuilder: FormBuilder,
    private session: SessionStorageService, private _user:LoginRegisterService) { }

  profileForm: FormGroup;
  profilemessage: string;
  profilesubmitted = false;
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email:['', [Validators.required, Validators.email]]
    });
    this.fetch_userInfo();
  }

  fetch_userInfo(){
    this._user.fetchprofile().subscribe(
      qinfo =>{
        this.profileForm.patchValue({  
          firstname: qinfo.firstName,  
          lastname: qinfo.lastName,  
          email: qinfo.email,  
        });  
      });
  }
  // convenience getter for easy access to form fields
  get p() { return this.profileForm.controls; }

  profileClick(){
    this.profilesubmitted = true;
      if (this.profileForm.invalid) { 
        return;
      } else {
        let profiledata = { 
                      "email": this.profileForm.controls['email'].value,
                      "firstName": this.profileForm.controls['firstname'].value,
                      "lastName": this.profileForm.controls['lastname'].value,
                      "login": this.session.get('currentUser')
                   };
        console.log(profiledata);
        this._user.updateprofile(profiledata)
        .subscribe(res=>{
          console.log(res);
         if(res.statusText == 'OK'){
          this.profilemessage = 'Profile Updated Successfully'; 
          this.fetch_userInfo();
         }
        }, err => {
          console.log(err);
          this.profilemessage = err.error.message;
        });
      }
  }
}
