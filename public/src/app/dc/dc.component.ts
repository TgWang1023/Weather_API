import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city = {};
  ready = false;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    const observable = this._httpService.getCity('Washington DC.,US');
    observable.subscribe((data: any) => {
      console.log('Got the city. Returned data:', data);
      this.city = data;
      this.ready = true;
    });
  }
}
