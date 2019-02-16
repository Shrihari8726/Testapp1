import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  
  private _url = "./assets/data.csv";


  constructor(private _http: HttpClient) { }

  getList(): Observable<any>{
    return this._http.get(this._url,{responseType: "text"});
  }

  
}
