import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  citiesOptions = null
  isOptionsModaOpen = false
  currCityWether= null
  currCity=null

  ngOnInit(): void {
    this.getCitiesOptions('')
    this.getWeather()
  }

  async getCitiesOptions(city: string) {
    const cities = await this.weatherService.getCitiesOptions(city)
    this.citiesOptions = cities
  }

  async getWeather() {
    const weather = await this.weatherService.getWeather()
    console.log('weather:', weather)
    this.currCityWether = weather
  }

  setCurrCity(city: any) {
    this.weatherService.setCurrCity(city.Key)
    this.getWeather()
  }

  // getCurrCity() {
  //   return this.weatherService.getCurrCity()
  // }

}
