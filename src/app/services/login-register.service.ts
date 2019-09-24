import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import {Observable} from 'rxjs';
import {LoginModel} from '../model/LoginModel';
import {ProfileModel} from '../model/ProfileModel';

const API_URL = 'http://54.81.168.191:8080/api/';

@Injectable({
  providedIn: 'root'
})
      
export class LoginRegisterService {

  constructor(private _http: HttpClient, private session: SessionStorageService) { }

  login(body:any): Observable<LoginModel>{
    return this._http.post<LoginModel>(API_URL+'authenticate',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  register(body:any){
    return this._http.post(API_URL+'register',body,{
      observe:'response',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  resetpwd(body:any){
    return this._http.post(API_URL+'account/reset-password/init',body,{
      observe:'response',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  fetchprofile(): Observable<ProfileModel>{
    return this._http.get<ProfileModel>(API_URL+'account',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }  

  updateprofile(body:any){
    return this._http.post(API_URL+'account',body,{
      observe:'response',
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }

  changepassword(body:any){
    return this._http.post(API_URL+'account/change-password',body,{
      observe:'response',
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }
}
