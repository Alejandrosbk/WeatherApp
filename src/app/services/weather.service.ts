import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // TRAER LA URI DE LA PETICIÓN
  URI: string = '';
  // USAR EL APY KEY QUE GENERE DESDE LA CUENTA
  apiKey = 'dcc59770adb4ddd5f72dd8f96150d47f';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }
  // OBTENEMOS LOS DATOS SEGUN NOMBRE Y CODIGO DE PAIS
  getWeather(cityName: string, countryCode: string) {
   return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
