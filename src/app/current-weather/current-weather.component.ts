import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { WeatherService } from './../weather.service'
import { ICurrentWeather } from './../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  //current : ICurrentWeather
  @Input() current: ICurrentWeather
  constructor(private weatherService: WeatherService) {
    this.current = {
      city :'',
      country : '',
      date :0,
      image: '',
      temperature: 0,
      description:'',
    }
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Ahmedabad','').subscribe((data) => {
      this.current =data
      console.log(this.current)
    })
  }

}
