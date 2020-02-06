import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() city: string;
  @Input() temperature: number;

  @Output() selectedCity: EventEmitter<string>;
  
  constructor() {
    this.selectedCity = new EventEmitter<string>();
   }

  ngOnInit() {
  }

  youHaveOnCity(cityx: string): void{
    console.log('In Child Component',cityx);
    this.selectedCity.emit(cityx);
  }

}
