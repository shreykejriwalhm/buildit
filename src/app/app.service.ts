import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppService {
  weatherDataChanged = new Subject();
  constructor(private http: Http) {}

  getForecast(query) {
    const APPID = '441483068c7826ce4fd68d9598d6fcbd';
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&appid=${APPID}`;

    this.http.get(url).subscribe((response: Response) => {
      this.weatherDataChanged.next(response.json());
    });
  }
}
