import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../api.service';
import { CountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, FormsModule
      ],
      providers: [ { provide: ApiService,ActivatedRoute}],
      declarations: [ CountriesComponent ]
    })
    .compileComponents();
  });  


  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create the app', () => { 
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("Countries Data of apiService", () => {
    const apiService = fixture.debugElement.injector.get(ApiService);
    fixture.detectChanges();
    apiService.getCountries().subscribe( countries => {
      component.source = countries;
      expect(component.source).toEqual(component.source);
   });
  });

});
