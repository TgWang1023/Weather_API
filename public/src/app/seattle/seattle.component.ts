import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})

export class SeattleComponent implements OnInit {
  city = {};
  ready = false;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    const observable = this._httpService.getCity('Seattle,US');
    observable.subscribe((data: any) => {
      console.log('Got the city. Returned data:', data);
      this.city = data;
      this.ready = true;
    });
  }
}
