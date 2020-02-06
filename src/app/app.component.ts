import { Component } from '@angular/core';
import { Forecast } from './dto/forecast';
import { ForecastService } from './providers/forecast.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string;
  age: number;

  name_1: string;
  age_1: number;

  //defining array
  forecastList: Forecast[];

  constructor(private _forecastService: ForecastService, private _translateService: TranslateService) {

    // this language will be used as a fallback when a translation isn't found in the current language
    this._translateService.setDefaultLang('en');
    this._translateService.use(this._translateService.getBrowserLang());



    this.name = 'Wahid Ousman Rughony';
    this.age = 25;

    this.name_1 = 'Bishan Kumar Madhoo';
    this.age_1 = 27;

    //initialize array to empty
    this.forecastList = [];

    //Adding element to array
    this.forecastList.push({
      city: 'Port-Louis',
      id: 1,
      temperature: 35.1
    });
    this.forecastList.push({
      city: 'London',
      id: 2,
      temperature: 4
    });
    this.forecastList.push({
      city: 'Abu Dhabi',
      id: 3,
      temperature: 18
    });
    this.forecastList.push({
      city: 'Rome',
      id: 4,
      temperature: 7
    });
    this.forecastList.push({
      city: 'Paris',
      id: 5,
      temperature: -1
    });
    this.fetchForcast();
  }

  yourMethod($event) {
    console.log('In Parent COmponent', $event);
  }

  fetchForcast() {
    this._forecastService.getForecastByCityId().subscribe(
      (data: any) => {
        console.log(data);
        data.list.forEach(element => {
          this.forecastList.push({
            city: element.name,
            id: element.id,
            temperature: element.main.temp
          });
        });
      }
    );
  }

  dataFromPipe(data: any) {
    console.log(data);
  }
}
