import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getCity(name) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=72c6d84b2e67a47ecc3c313238c9388d`);
  }
}
