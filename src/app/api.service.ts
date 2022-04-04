import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from './types/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}
  private apiUrl= 'https://restcountries.com/v3.1';

  getCountries(){
    return this.http.get<Countries[]>(`${this.apiUrl}/all`);
  }

  getCountryByName(name: string){
    return this.http
    .get<Countries[]>(`${this.apiUrl}/name/${name}`)
    .pipe(map(([res]) => res));
  }

}
