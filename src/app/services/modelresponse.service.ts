import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ModelresponseService {

  constructor(private http: HttpClient) { }

  public apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();

  /*public getJSON(): Observable<any> {
    return this.http.get("assets/modelresponse/ModelExecResponse.json");
  }
  */


  public submitModel(lid: number, body:any){
    return this.http.post('http://13.58.79.119/eep/v1/model/'+`${lid}`,body,httpOptions) .pipe(map((data) => {
      return data;
    }));
 }

 // here we set/change value of the observable
  public setData(data) { 
   // console.log('Subscriber A:',data);
    this.apiData.next(data)
  }

  public getModel(): Observable<any> {
    return this.http.get('http://13.58.79.119/eep/v1/model', httpOptions);
  }

  public getModelFields(lid: number): Observable<any>{
     return this.http.get('http://13.58.79.119/eep/v1/model/'+`${lid}`, httpOptions);
  }
}
