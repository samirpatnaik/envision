import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class LoginRegisterService {

  constructor(private _http: HttpClient) { }

  login(body:any){
    return this._http.post('http://54.81.168.191:8080/api/authenticate',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

}
