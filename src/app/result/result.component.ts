import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {
  weatherData = null;
  subscription: Subscription;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.subscription = this.appService.weatherDataChanged.subscribe(
      weatherData => {
        this.weatherData = weatherData;
        console.log(this.weatherData);
      }
    );
  }

  convertToDate(dt) {
    return new Date(dt * 1000);
  }

  convertToStandard(degK) {
    return Math.round(degK - 273);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
