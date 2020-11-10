import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment'
import { ICurrentWeather } from './interfaces'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface ICurrentWeatherData{
  weather:[
    {
    description: string,
    icon : string
    }
  ],
  main:{
    temp: number
  },
  sys:{
    country : string
  },
  dt:number
  name : string
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService{
  ICurrentWeatherData : ICurrentWeather
  url: string
  uriParams : string
  constructor(private httpClient :HttpClient){}

  /* getCurrentWeather(city : string , country : string){
    this.url= environment.baseUrl + "api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + environment.appId
    return this.httpClient.get<ICurrentWeatherData>(this.url).pipe(map(data =>this.transformToIcurrentWeather(data)))
  } */

  getCurrentWeather(search:string | number, country ?: string): Observable<ICurrentWeather>{
    if(typeof search === 'string'){
      this.uriParams ="q=" + search
    } else {
      this.uriParams = "zip=" + search
    }
    if (country){
      this.uriParams = this.uriParams + "," + country
    }
    return this.getCurrentWeatherHelper(this.uriParams)
  }

  private getCurrentWeatherHelper(uriParams: string):
    Observable<ICurrentWeather>{
      this.url = environment.baseUrl + "api.openweathermap.org/data/2.5/weather?" + uriParams +"&appid=" + environment.appId
      console.log("URL is "+ this.url)
      return this.httpClient.get<ICurrentWeatherData>(this.url).pipe(map(data =>this.transformToIcurrentWeather(data)))
    }

  private transformToIcurrentWeather(data : ICurrentWeatherData): ICurrentWeather{
    return {
      city : data.name,
      country: data.sys.country,
      date :data.dt * 1000,
      image : `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenhit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenhit(kelvin : number): number{
    return kelvin - 273.15
  }
}