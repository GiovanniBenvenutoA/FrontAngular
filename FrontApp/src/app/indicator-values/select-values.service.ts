import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectValuesService {

  constructor(protected http:HttpClient) { }
  
  private UrlValuesIndicator:string = "http://localhost:8080/api/valuesindicator/";
  private indicadorparam :string;
  private URLVAL :string;

  getUrl(indicador) :any
  {
    if(indicador===undefined)
    {
      indicador = 'cobre';
    }
     this.indicadorparam = indicador;
     this.getUrlselect();
  }

  getUrlselect (filter = 'cobre') : any
  {
    this.URLVAL = this.UrlValuesIndicator+filter;
    return this.http.get(this.URLVAL);
  }
 


}
