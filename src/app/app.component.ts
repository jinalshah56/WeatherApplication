import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { ICurrentWeather } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weatherapp';

  currentWeather : ICurrentWeather
  constructor(private weatherService : WeatherService){}

  doSearch(searchValue){
    const userInput = searchValue.split(',').map(s=> s.trim())
    this.weatherService.getCurrentWeather(userInput[0],userInput.length>1? userInput[1] : undefined).subscribe(
      data =>{
         this.currentWeather = data
         console.log(data)
      })
  }
}
