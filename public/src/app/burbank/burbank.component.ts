import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})

export class BurbankComponent implements OnInit {
  city = {};
  ready = false;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    const observable = this._httpService.getCity('Burbank,US');
    observable.subscribe((data: any) => {
      console.log('Got the city. Returned data:', data);
      this.city = data;
      this.ready = true;
    });
  }
}
