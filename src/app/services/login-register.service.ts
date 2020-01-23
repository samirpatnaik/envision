import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import {Observable} from 'rxjs';
import {LoginModel} from '../model/LoginModel';
import {ProfileModel} from '../model/ProfileModel';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
      
export class LoginRegisterService {

  constructor(private _http: HttpClient, private session: SessionStorageService) { }

  login(body:any): Observable<LoginModel>{
    return this._http.post<LoginModel>(environment.apiUrl+'authenticate',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  register(body:any){
    return this._http.post(environment.apiUrl+'register',body,{
      observe:'response',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  resetpwd(body:any){
    return this._http.post(environment.apiUrl+'account/reset-password/init',body,{
      observe:'response',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  fetchprofile(): Observable<ProfileModel>{
    return this._http.get<ProfileModel>(environment.apiUrl+'account',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }  

  updateprofile(body:any){
    return this._http.post(environment.apiUrl+'account',body,{
      observe:'response',
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }

  changepassword(body:any){
    return this._http.post(environment.apiUrl+'account/change-password',body,{
      observe:'response',
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }

  
}
