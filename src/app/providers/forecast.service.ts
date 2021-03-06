import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private _http: HttpClient) { 

  }


  getForecastByCityId(){
    return this._http.get('https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=671ac7a5d543c9935d09d1a2e6ebfb5b');
  }
}
