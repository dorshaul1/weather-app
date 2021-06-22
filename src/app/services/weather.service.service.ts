import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  private API_KEY = 'pdV42w73RzRrytgemUAWAEDKAsUZmG8V'

  currCity = '215838'

  async getCitiesOptions(city: string) {
    const citiesOptions = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${city}`)
    return citiesOptions.data
  }

  public setCurrCity(locationKey: string) {
    this.currCity = locationKey
  }

  async getWeather() {
    const citiesOptions = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.currCity}?apikey=${this.API_KEY}`)
    return citiesOptions.data
  }

}
