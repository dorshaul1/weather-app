import { Component, OnInit } from '@angular/core';
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
  currCityWether = null
  currCity = null

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
    this.currCityWether = weather
    console.log('this.currCityWether:', this.currCityWether)
  }

  setCurrCity(city:any) {
    this.currCity = city
    this.weatherService.setCurrCity(city.Key)
    this.getWeather()
  }

}
