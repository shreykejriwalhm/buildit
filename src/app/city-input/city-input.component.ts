import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  getForecast(f) {
    console.log(f);
    this.appService.getForecast(f.value.location);
  }

}
