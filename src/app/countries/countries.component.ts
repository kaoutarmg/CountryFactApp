import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { never, Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Countries } from '../types/api';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
 source: Countries[]=[];
 countryFilter: string = "";
 myRandomCountry: string = "";

  constructor(private countryApi:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.countryApi.getCountries().subscribe( countries => {
      this.source = countries;
   }
    )
   }

  sortAscending() {
    console.log("Sort Ascending");
    return this.route.params.subscribe( params => {
      this.source=this.source.sort((a,b) => a.name.common < b.name.common ? -1 : 1);
      })
   }

  sortDescending() {
    console.log("Sort Descending");
    return this.route.params.subscribe( params => {
      this.source=this.source.sort((a,b) => a.name.common > b.name.common ? -1 : 1);
      })
   }

   get countries(){
     return this.source ? 
     this.source.filter(
       (country) => this.countryFilter ? country.name.common.toLowerCase().includes(this.countryFilter):country)
       :this.source;
   }

   getRandomCountry(){
    return this.source[Math.floor(Math.random() * this.source.length)].name.common
   }

}
