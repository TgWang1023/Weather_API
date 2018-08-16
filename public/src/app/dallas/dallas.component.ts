import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city = {};
  ready = false;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    const observable = this._httpService.getCity('Dallas,US');
    observable.subscribe((data: any) => {
      console.log('Got the city. Returned data:', data);
      this.city = data;
      this.ready = true;
    });
  }
}
