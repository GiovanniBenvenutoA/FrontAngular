import {Injectable } from '@angular/core';
import {indicatorLast } from './indicatorLast';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IndicatorLastService {
  
  private UrlLastIndicator:string = "http://localhost:8080/api/allindicator";

  constructor(protected http:HttpClient) { }

  getindicatorLast() : any
  {
    return this.http.get(this.UrlLastIndicator);
  }
}
