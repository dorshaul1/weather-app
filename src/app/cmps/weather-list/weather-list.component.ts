import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  @Input() weather:any

  constructor() { }

  ngOnInit(): void {
    // console.log(this.weather);
    
  }

}
