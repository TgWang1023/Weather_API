import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city = {};
  ready = false;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    const observable = this._httpService.getCity('San Jose,US');
    observable.subscribe((data: any) => {
      console.log('Got the city. Returned data:', data);
      this.city = data;
      this.ready = true;
    });
  }
}
