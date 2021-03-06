import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionStorageService } from 'angular-web-storage';
import { environment } from '../../environments/environment';
import {ProjectModel} from '../model/ProjectModel';


@Injectable({
  providedIn: 'root'
})
export class ModelresponseService {

  constructor(private http: HttpClient, private session: SessionStorageService) { }

  public apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();
  packageValue :any;

  public submitModel(lid: number,projectID: any, body:any){
    return this.http.post(environment.apiUrl+'eep/'+`${lid}`+'/'+`${projectID}`,body,
      {
        headers:new HttpHeaders({
          'Authorization': 'Bearer ' + this.session.get('userToken'),
          'Content-Type': 'application/json'
        })
      }) .pipe(map((data) => {
      return data;
    }));
  } 

  // here we set/change value of the observable
  public setData(data) { 
   // console.log('Subscriber A:',data);
    this.apiData.next(data)
  }

  public getModel(): Observable<any> {
    //console.log(this.session.get('userToken'));
    return this.http.get(environment.apiUrl+'models', {
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }

  saveproject(body:any){
    return this.http.post(environment.apiUrl+'projects',body,{
      observe:'response',
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }

  rundetails(mid: number){
    return this.http.get(environment.apiUrl+'runs/'+`${mid}`,{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    });
  }

  viewrundetails(pid: number): Observable<ProjectModel>{
    return this.http.get<ProjectModel>(environment.apiUrl+'run/'+`${pid}`,{
      headers:new HttpHeaders({
        'Authorization': 'Bearer ' + this.session.get('userToken'),
        'Content-Type': 'application/json'
      })
    }).pipe(map((data) => {
      return data;
    }));;
  }

  

  setPakageValue(pakageDetails){
    this.packageValue  = pakageDetails;
  }
  getPackageValue ()
  {
    return  this.packageValue;
  }

 
}
