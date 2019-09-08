import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import {Observable} from 'rxjs';
import {LoginModel} from '../model/LoginModel';
import {ProfileModel} from '../model/ProfileModel';

@Injectable({
  providedIn: 'root'
})

      
export class LoginRegisterService {

  constructor(private _http: HttpClient, private session: SessionStorageService) { }

  login(body:any): Observable<LoginModel>{
    return this._http.post<LoginModel>('http://54.81.168.191:8080/api/authenticate',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  register(body:any){
    return this._http.post('http://54.81.168.191:8080/api/register',body,{
      observe:'response',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  resetpwd(body:any){
    return this._http.post('http://54.81.168.191:8080//api/account/reset-password/init',body,{
      observe:'response',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  fetchprofile(): Observable<ProfileModel>{
    return this._http.get<ProfileModel>('http://54.81.168.191:8080/api/account',{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }  

  updateprofile(body:any){
    return this._http.post('http://54.81.168.191:8080/api/account',body,{
      observe:'response',
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }

  changepassword(body:any){
    return this._http.post('http://54.81.168.191:8080/api/account/change-password',body,{
      observe:'response',
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }
}
