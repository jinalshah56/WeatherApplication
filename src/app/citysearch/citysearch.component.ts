import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';
import { WeatherService } from './../weather.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css']
})
export class CitysearchComponent implements OnInit {

  search = new FormControl('Ahmadabad',[Validators.minLength(3)])
  @Output() searchEvent = new EventEmitter<string>()
  searchValue : string

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {

    this.search.valueChanges.pipe(debounceTime(2000)).subscribe((searchValue: string) => {
      if(!this.search.invalid){
        this.searchValue = this.search.value
        this.searchEvent.emit(this.searchValue)
      }
    })

    /* this.search.valueChanges.pipe(debounceTime(2000)).subscribe((searchValue: string) => {
      if(!this.search.invalid){
        const userInput = searchValue.split(',').map(s => s.trim())
        this.weatherService.getCurrentWeather(
          userInput[0],
          userInput.length > 1 ? userInput[1] : undefined
        ).subscribe(data => (console.log(data)))
      }
    }) */

  }

}
