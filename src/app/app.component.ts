import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // ALMACENAR LOS DATOS TEMPORALMENTE
  weather;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {

  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      err => console.log(err)
    )
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      // PEDIR DATOS
      this.getWeather(cityName.value, countryCode.value);
      // LIMPIAR FORMULARIO
      cityName.value = '';
      countryCode.value = '';
    } else {
      alert ('Por favor, llene los datos del formulario');
    }
    cityName.focus();
    return false;
  }

}
