import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Countries } from '../types/api';
import { NEVER, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  countryData$: Observable<Countries>=NEVER;

  constructor(private countryApi: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.countryData$=this.countryApi.getCountryByName(params['country'])
      .pipe(tap((data) => console.log(data)));
    });
  
  }

}
